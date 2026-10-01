/**
 * Tadabbur long-form articles — surah 34.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "34:3": {
    "sections": [
      {
        "h": {
          "en": "The Hour They Waved Away",
          "bn": "যে ক্বিয়ামত তারা উড়িয়ে দিল"
        },
        "p": [
          {
            "en": "The surah opens by praising the Lord of all that is in the heavens and the earth, who knows what penetrates the earth and what rises out of it. Against that opening, a group among them speaks up: the Hour will not come to us. As-Sa'di reads their words as the claim that there is only this worldly life: we die and we live, and nothing more. At-Tabari ties the saying to people who denied that Allah can restore His creation once it has perished, and who mocked the warning they were given.",
            "bn": "সূরার শুরুতেই প্রশংসা জানানো হয় সেই রবের, আকাশ ও পৃথিবীতে যা কিছু আছে সবই যাঁর, যিনি জানেন মাটিতে কী ঢোকে আর তা থেকে কী বের হয়। এই শুরুরই মুখে একদল বলে ওঠে, ক্বিয়ামত আমাদের কাছে আসবেই না। সাদী এ কথার অর্থ করেন তাদের এই দাবি হিসেবে যে, এই দুনিয়ার জীবন ছাড়া আর কিছুই নেই, আমরা মরি আর বাঁচি, এটুকুই সব। তাবারী একে জুড়ে দেন সেই লোকদের সঙ্গে, যারা মরে যাওয়ার পর সৃষ্টিকে আবার ফিরিয়ে আনার আল্লাহর ক্ষমতা অস্বীকার করত, আর সতর্কবাণী নিয়ে ঠাট্টা করেই ক্বিয়ামতের খোঁজ নিত।"
          },
          {
            "en": "The reply is not a proof laid out first but a command to swear. Say: Yes, by my Lord, it will surely come to you. As-Sa'di notes that Allah ordered His Messenger to refute their statement, to nullify it, and to take an oath upon the resurrection. Al-Qurtubi names the speakers as the people of Mecca, and relays from Muqatil a report that Abu Sufyan had sworn by al-Lat and al-Uzza that the Hour would never come. So the false oath is answered by a true oath, and that true oath is sworn by the Lord Himself.",
            "bn": "জবাবটা আগে সাজানো কোনো প্রমাণ নয়, কসম খাওয়ার হুকুম। বলুন, হ্যাঁ, আমার রবের কসম, তা তোমাদের কাছে অবশ্যই আসবে। সাদী বলেন, আল্লাহ তাঁর রাসূলকে আদেশ দিলেন তাদের কথা খণ্ডন করতে, তা বাতিল করতে আর পুনরুত্থানের উপর কসম খেতে। কুরতুবী বক্তাদের চিহ্নিত করেন মক্কার লোক বলে, আর মুকাতিল থেকে একটি বর্ণনা আনেন যে আবু সুফিয়ান লাত ও উযযার নামে কসম খেয়েছিল, ক্বিয়ামত কখনোই আসবে না। তাই মিথ্যা কসমের জবাব এল সত্য কসমে, আর সেই সত্য কসম খোদ রবের নামেই নেওয়া।"
          },
          {
            "en": "There is a sharp logic beneath the denial, and al-Qurtubi draws it out. These people grant the first creation — they admit the world had a beginning — yet they reject its repetition. That is self-contradiction: to grant that He began creation, then insist He cannot or will not do it again. When a truthful messenger reports a thing possible and within power, to call him a liar is to claim the impossible. The denial of the Hour is not reasoning; it is refusal dressed as reasoning.",
            "bn": "অস্বীকারের নিচে একটা ধারালো যুক্তি আছে, কুরতুবী তা টেনে বের করেন। এই লোকেরা প্রথম সৃষ্টি মানে, অর্থাৎ পৃথিবীর একটা শুরু ছিল তা স্বীকার করে, অথচ তার পুনরাবৃত্তি অস্বীকার করে। এটা নিজের সঙ্গেই সাংঘর্ষিক: মানছ যে তিনি সৃষ্টি শুরু করেছেন, আবার বলছ তিনি তা ফের করতে পারেন না বা করবেন না। সত্যবাদী রাসূল যখন সম্ভব ও সাধ্যের ভেতরের কোনো কথা জানান, তখন তাঁকে মিথ্যুক বলা মানে অসম্ভবকে দাবি করা। তাই ক্বিয়ামত অস্বীকার মোটেই যুক্তি নয়, যুক্তির বেশে গোঁ।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Oaths, No Fourth",
          "bn": "তিন শপথ, চতুর্থ নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir opens his comment by setting this verse inside a small, striking group. This is one of three places in the Qur'an — there is no fourth — where Allah commands His Messenger to swear by his Lord that the resurrection will surely come, because stubborn disbelievers denied it. The first is in Surah Yunus: And they ask you to inform them, Is it true? Say: Yes, by my Lord, it is the truth, and you cannot escape it (10:53).",
            "bn": "ইবন কাসীর এ আয়াতের আলোচনা শুরু করেন একে এক ছোট অথচ অসাধারণ দলে রেখে। কুরআনে তিনটি জায়গার একটি, চতুর্থ কোনোটি নেই, যেখানে আল্লাহ তাঁর রাসূলকে হুকুম দিয়েছেন রবের নামে কসম খেয়ে বলতে যে পুনরুত্থান অবশ্যই আসবে, কারণ গোঁয়ার কাফিররা তা অস্বীকার করেছিল। প্রথমটি সূরা ইউনুসে: তারা আপনার কাছে জানতে চায়, এ কি সত্য? বলুন, হ্যাঁ, আমার রবের কসম, নিশ্চয় তা সত্য, আর তোমরা তা এড়াতে পারবে না (১০:৫৩)।"
          },
          {
            "en": "The second is this verse. The third is in Surah at-Taghabun: Those who disbelieve claim they will never be resurrected. Say: Yes, by my Lord, you will surely be resurrected, then you will be informed of what you did; and that is easy for Allah (64:7). The pattern is deliberate. Where human denial is loudest, the Qur'an answers not with a longer lecture but with the heaviest speech a believer knows, an oath sworn by the Lord Himself.",
            "bn": "দ্বিতীয়টি এই আয়াত। তৃতীয়টি সূরা তাগাবুনে: কাফিররা দাবি করে তাদের কখনো পুনরুত্থিত করা হবে না। বলুন, হ্যাঁ, আমার রবের কসম, তোমাদের অবশ্যই পুনরুত্থিত করা হবে, তারপর তোমরা যা করেছ তা জানিয়ে দেওয়া হবে, আর তা আল্লাহর পক্ষে সহজ (৬৪:৭)। এই ধরনটা ইচ্ছাকৃত। মানুষের অস্বীকার যেখানে সবচেয়ে চড়া, কুরআন সেখানে জবাব দেয় লম্বা বক্তৃতায় নয়, বরং মুমিনের জানা সবচেয়ে ভারী ধরনের কথায়, এক কসমে, আর তা খোদ রবের নামেই নেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn by the Unseen's Knower",
          "bn": "অদৃশ্যের জ্ঞানীর নামে শপথ"
        },
        "p": [
          {
            "en": "Notice which of His names is fastened to the oath: the Knower of the unseen. Ma'arif al-Qur'an observes that out of all His attributes, all-encompassing knowledge is chosen here precisely because the subject at hand is the deniers of Resurrection. At-Tabari explains that after naming the Hour, Allah turned to glorify Himself as the Knower of what is hidden from the sight of creation, which no eye sees: either what has not yet come to be but will, or what has been and He has shown to none besides Himself.",
            "bn": "লক্ষ করুন কসমের সঙ্গে তাঁর কোন নামটি আঁটা হলো: অদৃশ্যের জ্ঞানী। মাআরিফুল কুরআন ধরিয়ে দেয় যে তাঁর এত গুণের ভেতর থেকে সর্বব্যাপী জ্ঞানের গুণটি এখানে বেছে নেওয়া হয়েছে ঠিক এ কারণেই যে আলোচ্য বিষয় পুনরুত্থান অস্বীকারকারীরা। তাবারী বলেন, ক্বিয়ামতের কথা বলার পর আল্লাহ নিজের মহিমা বর্ণনায় ফিরে আসেন অদৃশ্যের জ্ঞানী বলে, অর্থাৎ সৃষ্টির দৃষ্টির আড়ালে থাকা বিষয়ের জ্ঞানী, যা কোনো চোখ দেখে না: হয় যা এখনো হয়নি কিন্তু হবে, নয়তো যা হয়ে গেছে অথচ তিনি নিজে ছাড়া আর কাউকে দেখাননি।"
          },
          {
            "en": "The commentators record that the word was recited in several ways — ʿālim, ʿālimi, and the more intensive ʿallām — and at-Tabari judges all three readings sound and close in meaning, preferring ʿallām as the stronger praise. Behind the grammar lies a single point: the time of the Hour is known to Him alone. It is coming with certainty, yet its appointed moment belongs to the unseen He has kept to Himself. None shares that knowledge, Ma'arif adds — not the nearest angel, nor any prophet.",
            "bn": "তাফসীরকারেরা লিখেছেন, শব্দটি কয়েকভাবে পড়া হয়েছে, আলিম, আলিমি আর আরও জোরালো আল্লাম, আর তাবারী তিনটিকেই বিশুদ্ধ ও কাছাকাছি অর্থের বলে রায় দেন, বেশি পছন্দ করেন আল্লাম, কারণ তা প্রশংসায় প্রবলতর। ব্যাকরণের পেছনে একটিই কথা: ক্বিয়ামতের সময় কেবল তিনিই জানেন। তা আসছে নিশ্চিতভাবে, তবু তার নির্ধারিত মুহূর্তটা সেই অদৃশ্যেরই অংশ যা তিনি নিজের কাছে রেখেছেন। সে জ্ঞানের ভাগীদার কেউ নয়, মাআরিফ যোগ করে, কোনো নিকটতম ফেরেশতাও নয়, কোনো নবীও নয়।"
          },
          {
            "en": "As-Sa'di frames the name as the proof itself. If Allah knows the unseen, the things absent from our sight and our knowledge, then how fully must He encompass the seen, the witnessed world laid out in front of us? Whoever truly grants Him that knowledge is bound, by necessity, to affirm the resurrection; for raising the dead is no stranger than the knowledge that already holds every particle. The oath and the name work together: the Lord who swears is the Lord from whom nothing lies hidden.",
            "bn": "সাদী এই নামটিকেই প্রমাণ হিসেবে দাঁড় করান। আল্লাহ যদি অদৃশ্য জানেন, অর্থাৎ আমাদের দৃষ্টি ও জ্ঞানের বাইরের জিনিসগুলো, তবে সামনে বিছিয়ে থাকা দৃশ্যমান জগৎ তিনি কত পূর্ণভাবেই না জানবেন। যে সত্যিকারভাবে তাঁকে এই জ্ঞান মেনে নেয়, তাকে বাধ্য হয়েই পুনরুত্থান স্বীকার করতে হয়; কারণ মৃতকে ফেরানো সেই জ্ঞানের চেয়ে অদ্ভুত কিছু নয় যা আগেই প্রতিটি কণাকে ধরে রেখেছে। কসম আর নাম একসঙ্গে কাজ করে: যে রব কসম খাচ্ছেন, তিনিই সেই রব যাঁর কাছ থেকে কিছুই গোপন থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Speck Slips Away",
          "bn": "একটি অণুও অগোচরে থাকে না"
        },
        "p": [
          {
            "en": "The oath is then sealed with a measure. Not absent from Him is the weight of a dharra in the heavens or in the earth. At-Tabari, al-Qurtubi and the Muyassar all gloss dharra as the weight of a small ant — the tiniest thing that carries any weight at all. The verb la yaʿzub, as Ibn ʿAbbas, Mujahid and Qatadah are reported to say, means that it does not slip away or vanish from Him; it stays plain and present before His knowledge.",
            "bn": "এরপর কসমকে সিল করা হয় একটা মাপ দিয়ে। আকাশ কিংবা পৃথিবীতে অণুপরিমাণ ওজনও তাঁর কাছ থেকে লুকোয় না। তাবারী, কুরতুবী ও মুয়াসসার সকলেই যাররা শব্দের অর্থ করেন ক্ষুদ্র পিপীলিকার ওজন, অর্থাৎ সামান্যতম ওজন আছে এমন সবচেয়ে ছোট জিনিস। লা ইয়াযুবু ক্রিয়াটি, ইবন আব্বাস, মুজাহিদ ও কাতাদা থেকে বর্ণিত মতে, মানে তা তাঁর কাছ থেকে সরে বা হারিয়ে যায় না; তাঁর জ্ঞানের সামনে তা স্পষ্ট ও উপস্থিত থাকে।"
          },
          {
            "en": "Then the scale is opened in both directions: nor smaller than that, nor greater. At-Tabari reads this as nothing of a speck's weight, nor anything above it, nor anything below it, escaping Him wherever it may be. The point is not the smallness of the ant but the totality of the reckoning. There is no floor beneath which a thing grows too slight to register, no ceiling above which it grows too vast to hold. The whole range lies open to Him.",
            "bn": "তারপর মাপটা দুদিকেই খুলে দেওয়া হয়: তার চেয়ে ছোট কিছুও নয়, বড় কিছুও নয়। তাবারী এর অর্থ করেন, অণুপরিমাণ ওজন, তার উপরের কিছু কিংবা নিচের কিছুই তাঁর কাছ থেকে এড়ায় না, তা যেখানেই থাকুক। মূল কথাটা পিপীলিকার ক্ষুদ্রতা নয়, গোটা হিসাবের পূর্ণতা। এমন কোনো তলা নেই যার নিচে গেলে জিনিস এত ছোট হয়ে যায় যে ধরা পড়ে না, আর এমন কোনো ছাদ নেই যার উপরে গেলে তা এত বড় হয় যে ধরে রাখা যায় না। পুরো পরিসরটাই তাঁর কাছে খোলা।"
          },
          {
            "en": "Ma'arif al-Qur'an shows why this measure answers the deniers so exactly. Their real objection was that a human body, once dead and scattered across the earth as dust, could never be gathered again, each person's particles sorted from every other's. But a knowledge that misses not a single speck's weight, and knows where each particle is and in what state, has already solved the problem they called impossible. They had simply measured His knowledge by the narrow limit of their own.",
            "bn": "মাআরিফুল কুরআন দেখায়, এই মাপটা কেন অস্বীকারকারীদের ঠিক জবাব। তাদের আসল আপত্তি ছিল, মানুষের দেহ একবার মরে ধুলো হয়ে পৃথিবীজুড়ে ছড়িয়ে পড়লে তা আর কখনো জড়ো করা যাবে না, প্রত্যেকের কণা আলাদা করে বাছা যাবে না। কিন্তু যে জ্ঞান একটি অণুর ওজনও বাদ দেয় না, বরং জানে প্রতিটি কণা কোথায় আছে আর কী অবস্থায় আছে, সে জ্ঞান তাদের অসম্ভব বলা সমস্যাটা আগেই মিটিয়ে রেখেছে। তারা কেবল আল্লাহর জ্ঞানকে নিজেদের সংকীর্ণ সীমা দিয়ে মেপেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything in a Clear Record",
          "bn": "সবই এক সুস্পষ্ট কিতাবে"
        },
        "p": [
          {
            "en": "The verse ends by naming where all of this is held: except that it is in a clear Record. The Muyassar and as-Sa'di both identify this clear Record as al-Lawh al-Mahfuz, the Preserved Tablet. At-Tabari describes it as a book that makes plain to whoever looks into it that Allah has set the thing down, counted it and known it, so nothing has slipped from His knowledge. Knowledge and writing meet: what He knows, He has kept written.",
            "bn": "আয়াত শেষ হয় এসব কোথায় রাখা আছে তা জানিয়ে: সবই এক সুস্পষ্ট কিতাবে আছে। মুয়াসসার ও সাদী দুজনেই এই সুস্পষ্ট কিতাবকে চিহ্নিত করেন লাওহে মাহফুয, অর্থাৎ সংরক্ষিত ফলক বলে। তাবারী একে বর্ণনা করেন এমন কিতাব হিসেবে, যা তাতে তাকানো যে কারও কাছে স্পষ্ট করে দেয় যে আল্লাহ জিনিসটি লিখে রেখেছেন, গুনে রেখেছেন ও জেনে রেখেছেন, ফলে তাঁর জ্ঞান থেকে কিছুই সরে যায়নি। জ্ঞান আর লেখা এখানে মিলে যায়: তিনি যা জানেন, তা তিনি লিখেও রেখেছেন।"
          },
          {
            "en": "A sound report in Sahih Muslim, though the commentators do not tie it to this verse, lights up the same register. ʿAbdullah ibn ʿAmr ibn al-ʿAs said that he heard the Messenger of Allah ﷺ say: Allah ordained the measures of creation fifty thousand years before He created the heavens and the earth, and His Throne was upon the water. The clear Record of 34:3 is of that order, a writing that runs ahead of the created world, not a ledger kept to catch up with it.",
            "bn": "সহীহ মুসলিমের একটি বিশুদ্ধ বর্ণনা, যদিও তাফসীরকারেরা তা এ আয়াতের সঙ্গে জোড়েননি, একই সুর জ্বালিয়ে তোলে। আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) বলেন, তিনি রাসূলুল্লাহ ﷺ-কে বলতে শুনেছেন: আল্লাহ আসমান ও জমিন সৃষ্টির পঞ্চাশ হাজার বছর আগে সৃষ্টির ভাগ্যলিপি লিখে রেখেছেন, আর তখন তাঁর আরশ ছিল পানির উপর। ৩৪:৩-এর সুস্পষ্ট কিতাব সেই মানেরই, সৃষ্ট জগতের আগেই লেখা এক গ্রন্থ, ঘটনা ঘটার পরে ধরে রাখা কোনো খাতা নয়।"
          },
          {
            "en": "This reshapes what a speck's weight means. It is not merely that Allah watches each small thing as it happens, the way an attentive witness might. It is that the whole of it was written beforehand. As-Sa'di gathers them both: His knowledge encompassed it, His pen ran with it, and the clear Record contains it. For whoever denied the Hour, this shuts every exit: the event he waves away is not a guess about the future but an entry already set down.",
            "bn": "এতে অণুপরিমাণ ওজনের মানে নতুন করে দাঁড়ায়। ব্যাপারটা কেবল এই নয় যে আল্লাহ প্রতিটি ছোট জিনিস ঘটার সময় দেখেন, যেমন এক মনোযোগী সাক্ষী দেখে। বরং পুরোটাই আগেই লেখা হয়ে গিয়েছিল। সাদী দুটোকেই একসঙ্গে জড়ো করেন: তাঁর জ্ঞান একে ঘিরে রেখেছে, তাঁর কলম একে লিখে গেছে, আর সুস্পষ্ট কিতাব একে ধারণ করেছে। যে ক্বিয়ামত অস্বীকার করত, তার জন্য এটি সব পথ বন্ধ করে দেয়: সে যে ঘটনাকে উড়িয়ে দেয়, তা ভবিষ্যৎ নিয়ে অনুমান নয়, আগেই লিখে রাখা এক দফা।"
          }
        ]
      },
      {
        "h": {
          "en": "If He Knows, He Can Raise",
          "bn": "জানেন যিনি, ফেরাতেও পারেন তিনি"
        },
        "p": [
          {
            "en": "Here the argument of the verse completes itself, and as-Sa'di states it plainly. He from whose knowledge not a speck's weight escapes — who knows what the earth takes away of the dead and what remains of their bodies — is all the more able to raise them. Their resurrection, he says, is no more wondrous than this encompassing knowledge itself. The harder thing is granted; the easier follows of necessity.",
            "bn": "এখানে আয়াতের যুক্তি নিজেই পূর্ণ হয়, আর সাদী তা সোজা কথায় বলেন। যাঁর জ্ঞান থেকে প্রতি মুহূর্তে অণুপরিমাণ ওজনও এড়ায় না, যিনি জানেন মাটি মৃতদের থেকে কী কমিয়ে নেয় আর তাদের দেহের কী অবশিষ্ট থাকে, তিনি তাদের ফেরাতে আরও বেশি সক্ষম। তাদের পুনরুত্থান, সাদী বলেন, এই সর্বব্যাপী জ্ঞানের চেয়ে বেশি অদ্ভুত কিছু নয়। কঠিন জিনিসটা আগেই মেনে নেওয়া হয়ে গেছে; সহজটা তার পিছু পিছু আসে বাধ্য হয়েই।"
          },
          {
            "en": "Ibn Kathir puts the same truth in the language of the body. Though bones scatter, break apart and crumble, He knows where each piece has gone, and then He brings them back just as He first created them, for He has knowledge of all things. Mujahid and Qatadah, he notes, read la yaʿzub as nothing being hidden or concealed from Him. The deniers imagined dust beyond recall; the verse answers that nothing is ever beyond His reckoning.",
            "bn": "ইবন কাসীর একই সত্য বলেন দেহের ভাষায়। হাড় যদিও ছড়িয়ে পড়ে, ভেঙে যায় আর গুঁড়িয়ে মিশে যায়, তিনি জানেন প্রতিটি টুকরো কোথায় গেছে আর কোথায় ছড়িয়েছে, তারপর তিনি সেগুলো ফিরিয়ে আনবেন ঠিক যেভাবে প্রথমবার সৃষ্টি করেছিলেন, কারণ সব কিছুর জ্ঞান তাঁর আছে। তিনি জানান, মুজাহিদ ও কাতাদা লা ইয়াযুবুর অর্থ করেন তাঁর কাছ থেকে কিছুই গোপন বা লুকানো নেই। অস্বীকারকারীরা ভেবেছিল ধুলো আর ফেরানো যাবে না; আয়াত জবাব দেয়, কিছুই কখনো তাঁর হিসাবের বাইরে নয়।"
          },
          {
            "en": "The surah draws out the purpose. The Hour comes that He may reward those who believe and do righteous deeds — for them is forgiveness and noble provision (34:4) — while those who strove against His signs meet a painful punishment (34:5). Ibn Kathir reads this as the two outcomes the record makes possible: favour upon the believers and justice upon the deniers. The exhaustive knowledge is not cold bookkeeping; it is what makes a true and sorted reckoning possible at all.",
            "bn": "সূরা এর উদ্দেশ্যটাও খুলে বলে। ক্বিয়ামত আসে যাতে তিনি প্রতিদান দেন তাদের, যারা ঈমান আনে ও সৎকাজ করে, তাদের জন্য আছে ক্ষমা ও সম্মানজনক রিযক (৩৪:৪), আর যারা তাঁর আয়াতকে ব্যর্থ করতে চেয়েছে তারা পায় যন্ত্রণাদায়ক শাস্তি (৩৪:৫)। ইবন কাসীর একে পড়েন সেই দুই পরিণতি হিসেবে, যা এই লিপি সম্ভব করে তোলে: মুমিনদের উপর অনুগ্রহ আর অস্বীকারকারীদের উপর ইনসাফ। সর্বব্যাপী জ্ঞান শীতল খাতা-লেখা নয়; এটিই এক সত্য ও বাছাই-করা হিসাবকে আদৌ সম্ভব করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument, Not a Threat",
          "bn": "যুক্তি, কোনো হুমকি নয়"
        },
        "p": [
          {
            "en": "A word is needed about the deniers the verse names. The Qur'an here describes a people who, in the Prophet's own day, mocked the warning and swore the Hour would never come; it answers them, and its answer is an argument sealed with an oath, not a licence against anyone. The verse hands no believer a weapon against a doubting neighbour, no warrant to coerce or despise any living person or community for their unbelief. The reply to denial, as the verse models, is proof, not force.",
            "bn": "আয়াত যাদের নাম করছে সেই অস্বীকারকারীদের নিয়ে একটা কথা বলা দরকার। কুরআন এখানে এমন এক দলের বর্ণনা দেয়, যারা নবীরই যুগে সতর্কবাণী নিয়ে ঠাট্টা করত আর কসম খেত যে ক্বিয়ামত কখনোই আসবে না; আয়াত তাদের জবাব দেয়, আর সে জবাব হলো কসমে সিল-করা এক যুক্তি, কারও বিরুদ্ধে কোনো ছাড়পত্র নয়। সন্দেহ পোষণকারী কোনো প্রতিবেশীর বিরুদ্ধে এ আয়াত কোনো মুমিনের হাতে অস্ত্র তুলে দেয় না, কুফরের কারণে কোনো জীবিত মানুষ বা জনগোষ্ঠীকে জোর করা, হুমকি দেওয়া বা তুচ্ছ করার অনুমতিও দেয় না। অস্বীকারের জবাব, আয়াত নিজেই যা দেখায়, তা প্রমাণ, জোর নয়।"
          },
          {
            "en": "This matters, because the register is easily abused. To treat a settled condemnation of mockers in a single scene as permission to condemn particular people today is to misread the verse badly. What the text describes, it describes; it licenses nothing beyond itself. The Prophet ﷺ was told to say Yes, by my Lord, not to force belief on anyone. The certainty of the Hour is a summons to prepare your own soul, and it leaves the judging of hearts to the Knower of the unseen alone.",
            "bn": "এটা গুরুত্বপূর্ণ, কারণ এই সুরটা সহজেই অপব্যবহার হয়। একটি দৃশ্যে ঠাট্টাকারীদের নিয়ে যে সুনির্দিষ্ট নিন্দা, তাকে আজকের নির্দিষ্ট মানুষদের নিন্দার অনুমতি বানানো আয়াতটিকে বাজেভাবে ভুল পড়া। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে; নিজের সীমার বাইরে এটি কিছুরই অনুমতি দেয় না। নবী ﷺ-কে বলতে বলা হয়েছিল হ্যাঁ, আমার রবের কসম, কারও উপর ঈমান চাপিয়ে দিতে নয়। ক্বিয়ামতের নিশ্চয়তা নিজের নফসকে প্রস্তুত করার ডাক, আর অন্তরের বিচারটা ছেড়ে দেয় কেবল অদৃশ্যের জ্ঞানীর হাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Reckoning Is Exact",
          "bn": "হিসাব যখন নিখুঁত হয়"
        },
        "p": [
          {
            "en": "For the believer, the measure of a speck's weight turns from argument into comfort and warning at once. The same Qur'an says that whoever does a speck's weight of good will see it, and whoever does a speck's weight of evil will see it (99:7 and 99:8). If the Record misses nothing on the smallest scale, then no quiet kindness is too slight to count, and no hidden wrong is too small to matter. The deed you dismiss as trivial is already on the page.",
            "bn": "মুমিনের কাছে অণুপরিমাণ ওজনের এই মাপটা একসঙ্গে যুক্তি থেকে বদলে যায় সান্ত্বনা আর সতর্কবার্তায়। সেই কুরআনই বলে, কেউ অণুপরিমাণ ভালো করলে তা দেখবে, আর কেউ অণুপরিমাণ মন্দ করলে তা-ও দেখবে (৯৯:৭ ও ৯৯:৮)। লিপি যদি ক্ষুদ্রতম মাপেও কিছু বাদ না দেয়, তবে কোনো চুপচাপ দয়া এত ছোট নয় যে গোনা হবে না, আর কোনো গোপন অন্যায় এত সামান্য নয় যে তা কিছুই নয়। যে আমলকে তুচ্ছ ভেবে ফেলে রাখেন, তা আগেই পাতায় উঠে গেছে।"
          },
          {
            "en": "So the verse reshapes how a day is lived. The Hour that is easy to file away as distant has been sworn certain by the Lord; the life that feels unobserved is in truth fully written down. To take this in is to reckon with yourself before the reckoning, to stop waiting on a larger occasion, and to trust that nothing offered to Allah — however small or hidden — is ever lost. He who has kept the speck's weight will not misplace a single sincere act.",
            "bn": "তাই আয়াত বদলে দেয় একটা দিন কীভাবে কাটানো হবে তার ধরন। যে ক্বিয়ামতকে দূরের ব্যাপার বলে সরিয়ে রাখা সহজ, রব তা কসম খেয়ে নিশ্চিত করেছেন; যে জীবন মনে হয় কেউ দেখছে না, তা আসলে পুরোপুরি লেখা হয়ে যাচ্ছে। এটা বুঝে নেওয়া মানে হিসাবের আগে নিজেই নিজের হিসাব নেওয়া, কোনো বড় উপলক্ষের অপেক্ষায় শুরুটা ঠেকিয়ে না রাখা, আর ভরসা রাখা যে আল্লাহর জন্য দেওয়া কিছুই, যত ছোটই হোক, যত গোপনই হোক, কখনো হারায় না। যিনি অণুর ওজন ধরে রেখেছেন, তিনি একটিও আন্তরিক আমল হারাবেন না।"
          }
        ]
      }
    ]
  },
  "34:12": {
    "sections": [
      {
        "h": {
          "en": "The Wind Made to Serve",
          "bn": "বাতাস তাঁর অধীনে"
        },
        "p": [
          {
            "en": "The verse opens by handing Sulayman (AS) the wind. At-Tabari raises the reading first: most reciters read ar-riha in the accusative, so the sense runs, and We subjected the wind for Sulayman, while Asim read ar-rihu in the nominative. At-Tabari prefers the accusative on the agreed practice of the reciters. Al-Qurtubi notes that the meaning does not really change, since none subjects the wind but Allah; even the nominative reading carries that this dominion was granted, not seized by the hand that held it.",
            "bn": "আয়াতের শুরুতেই বাতাস তুলে দেওয়া হয় সুলাইমান (আঃ)-এর হাতে। তাবারী আগে কিরাআতের কথা তোলেন: অধিকাংশ ক্বারী পড়েন আর-রীহা, কর্মকারকে, অর্থ দাঁড়ায় আর আমি সুলাইমানের জন্য বাতাসকে অধীন করে দিয়েছি; আসিম পড়েন আর-রীহু, কর্তৃকারকে। তাবারী ক্বারীদের স্বীকৃত আমলের ভিত্তিতে কর্মকারকের পাঠকেই প্রাধান্য দেন। কুরতুবী বলেন, অর্থে আসলে তফাত হয় না, কারণ বাতাসকে আল্লাহ ছাড়া কেউ অধীন করতে পারে না। কর্তৃকারকের পাঠেও তাই অর্থ থাকে: এ কর্তৃত্ব দেওয়া হয়েছিল, ধারক নিজে ছিনিয়ে নেয়নি।"
          },
          {
            "en": "Then the measure: ghuduwwuha shahr wa-rawahuha shahr. At-Tabari reads the wind's course from dawn to midday as a month's travel, and from midday to night as another month's travel. The Muyassar and as-Sa'di say the same, that in a single day it crossed what would take two months on the ground. At-Tabari quotes Qatadah plainly: it journeyed two months in one day. The gift was not speed for its own sake, but a reach no mount could ever give a king.",
            "bn": "এরপর আসে মাপ: গুদুউহা শাহর ওয়া রাওয়াহুহা শাহর। তাবারীর পাঠে ভোর থেকে দুপুর পর্যন্ত বাতাসের গতি ছিল এক মাসের পথ, আর দুপুর থেকে রাত পর্যন্ত আরও এক মাসের পথ। মুয়াসসার আর সা'দীও একই কথা বলেন, এক দিনে তা মাটির বুকে দুই মাসের পথ পাড়ি দিত। তাবারী কাতাদার কথা উদ্ধৃত করেন সোজাসুজি: এক দিনে দুই মাসের পথ। দান শুধু গতির জন্য গতি নয়, এমন নাগাল, যা কোনো বাহন কোনো রাজাকে দিতে পারে না।"
          },
          {
            "en": "Al-Hasan al-Basri pictured the route. As Ibn Kathir relays it, Sulayman (AS) would set out in the morning, come down at Istakhr to eat, then fly on and pass the night at Kabul; between Damascus and Istakhr lies a month's hard riding, and between Istakhr and Kabul the same again. Al-Qurtubi carries a like image from Bayt al-Maqdis. The commentators differ over the cities but not over the claim: a throne of state moved on the air at the word of a man who had not made the wind.",
            "bn": "আল-হাসান বসরী পথটা এঁকেছেন। ইবন কাসীর যেভাবে বর্ণনা করেন, সুলাইমান (আঃ) সকালে রওনা হতেন, ইসতাখরে নেমে খাবার খেতেন, তারপর আবার উড়ে গিয়ে রাত কাটাতেন কাবুলে। দামেস্ক থেকে ইসতাখর এক মাসের কঠিন সফর, আর ইসতাখর থেকে কাবুল আবার ততটাই। কুরতুবী একই রকম ছবি আনেন বাইতুল মাকদিস থেকে। তাফসীরকারেরা শহরগুলো নিয়ে ভিন্ন মত দেন, তবে দাবির জায়গায় এক: রাজসিংহাসন বাতাসে ভেসে চলত এমন একজনের কথায়, যে বাতাস নিজে বানায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Spring of Molten Brass",
          "bn": "গলিত তামার ঝরনা"
        },
        "p": [
          {
            "en": "Next: wa-asalna lahu ayn al-qitr, and We made a spring of qitr flow for him. At-Tabari glosses asalna as, We melted the copper for him and made it run. Ibn Kathir gathers a long line of early authorities. Ibn Abbas, Mujahid, Ikrimah, Qatadah, as-Suddi and others all read qitr as copper, nuhas. The grammarian al-Khalil, quoted by al-Qurtubi, fixes the sense tighter still: qitr is molten copper. Metal hard in the hand was made to pour like water, so that vessels and tools could be shaped from it.",
            "bn": "এরপর: ওয়া আসালনা লাহু আইনাল ক্বিতর, আমি তার জন্য ক্বিতরের এক ঝরনা প্রবাহিত করলাম। তাবারী আসালনা-র ব্যাখ্যায় বলেন, আমি তার জন্য তামা গলিয়ে দিয়েছি আর তা বইয়ে দিয়েছি। ইবন কাসীর বহু পূর্বসূরির নাম একত্র করেন। ইবন আব্বাস, মুজাহিদ, ইকরিমা, কাতাদা, সুদ্দী প্রমুখ সবাই ক্বিতর মানে তামা, নুহাস বোঝেন। ব্যাকরণবিদ খলীল, কুরতুবীর উদ্ধৃতিতে, অর্থ আরও আঁটো করেন: ক্বিতর হলো গলিত তামা। হাতে যা শক্ত, তা পানির মতো ঢালা গেল, যাতে তা দিয়ে পাত্র আর যন্ত্র গড়া যায়।"
          },
          {
            "en": "The mufassirun differ once the verse falls silent. Qatadah held the source lay in Yemen, and that what people smelt today is only from what Allah brought out for Sulayman. As-Suddi and al-Baghawi report that the copper ran for three days. But al-Qurtubi records al-Qushayri's caution against the figure: it may be a slip by a narrator, since a report from Mujahid speaks of where it flowed, from Sana, and not of how long. The verse gives the spring; the detail is where the reports begin.",
            "bn": "আয়াত থেমে গেলে তাফসীরকারদের মতভেদ শুরু হয়। কাতাদার মতে এর উৎস ছিল ইয়েমেনে, আর মানুষ আজ যা গলায় তা কেবল আল্লাহ সুলাইমানের জন্য যা বের করেছিলেন তা থেকেই। সুদ্দী ও বাগাভী বলেন, তামা তিনটি দিন ধরে বয়েছিল। কিন্তু কুরতুবী কুশায়রীর সতর্কবাণী তুলে ধরেন: সংখ্যাটা কোনো বর্ণনাকারীর ভুল হতে পারে, কারণ মুজাহিদের এক বর্ণনায় বলা হয়েছে তা কোথায় বইত, সানআ থেকে, কত দিন সে কথা নয়। আয়াত ঝরনাটুকু দেয়; বাকিটা বর্ণনার জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "By His Lord's Leave",
          "bn": "তাঁর রবের অনুমতিক্রমে"
        },
        "p": [
          {
            "en": "The third gift is stranger: wa-mina al-jinni man yamalu bayna yadayhi bi-idhni rabbih, and among the jinn were those who worked before him by his Lord's leave. Ibn Kathir reads it as a subjection: Allah placed the jinn at his service, by His decree and power, to build whatever Sulayman wished. Al-Baghawi cites Ibn Abbas, that Allah subdued the jinn for him and commanded them to obey. As-Sa'di adds that they had no power to refuse his order. The labour was real, but the leave behind it was never Sulayman's own.",
            "bn": "তৃতীয় দানটি আরও অদ্ভুত: ওয়া মিনাল জিন্নি মান ইয়ামালু বাইনা ইয়াদাইহি বিইজনি রাব্বিহ, আর জ্বিনদের মধ্যে কেউ কেউ তার রবের অনুমতিক্রমে তার সামনে কাজ করত। ইবন কাসীর একে অধীনতা হিসেবে পড়েন: আল্লাহ জ্বিনদের তার সেবায় লাগিয়ে দেন, নিজ হুকুম ও কুদরতে, যাতে সুলাইমান যা চান তা তারা গড়ে। বাগাভী ইবন আব্বাসের বরাতে বলেন, আল্লাহ জ্বিনদের তার অধীন করেন আর তাদের আনুগত্যের হুকুম দেন। সা'দী যোগ করেন, তার হুকুম অমান্য করার সাধ্য তাদের ছিল না। শ্রম সত্যি ছিল, কিন্তু তার পেছনের অনুমতি কখনো সুলাইমানের নিজের নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an pauses on the words bayna yadayhi, before him. It takes them to mark how different this subjection was from the Qur'an's harnessing of the sun and moon for all people. Here the jinn worked like vassals set to their tasks in front of their master. Yet the governing clause stays bi-idhni rabbih. The master gave the command, but the command itself ran on a leave granted from above him, and that leave could be lifted as surely and as quietly as it had once been given.",
            "bn": "মাআরিফুল কুরআন থামে বাইনা ইয়াদাইহি, 'তার সামনে' শব্দ দুটির উপর। এর মতে এ অধীনতা কুরআনের সেই সূর্য-চাঁদ অধীন করার মতো নয়, যা সব মানুষের জন্য। এখানে জ্বিনেরা কাজ করত প্রভুর সামনে কাজে লাগা অনুচরের মতো। তবু শাসন করা বাক্যটি থেকে যায় বিইজনি রাব্বিহ। প্রভু হুকুম দিতেন, কিন্তু সেই হুকুম নিজেই চলত উপর থেকে দেওয়া এক অনুমতির জোরে, আর সে অনুমতি যেভাবে দেওয়া হয়েছিল ঠিক তেমন নিঃশব্দে তুলে নেওয়া যেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Even the Jinn Answer",
          "bn": "জ্বিনেরাও জবাবদিহি করে"
        },
        "p": [
          {
            "en": "The verse will not let even these workers stand outside judgement: wa-man yazigh minhum an amrina nudhiqhu min adhab as-sair, and whoever of them deviates from Our command, We make him taste the punishment of the Blaze. At-Tabari reads amrina as the command to obey Sulayman, and yazigh as turning aside from it. The one who serves is still a servant of Allah first, held to the same account as any creature who is told to obey and then refuses, however strong he may be.",
            "bn": "আয়াত এ শ্রমিকদেরও বিচারের বাইরে থাকতে দেয় না: ওয়া মাঁই ইয়াযিগ মিনহুম আন আমরিনা নুযিকহু মিন আযাবিস সাঈর, তাদের যে কেউ আমার হুকুম থেকে সরে যায়, তাকে আমি জ্বলন্ত আগুনের শাস্তি আস্বাদন করাব। তাবারী আমরিনা-কে পড়েন সুলাইমানের আনুগত্যের হুকুম হিসেবে, আর ইয়াযিগ মানে তা থেকে বিচ্যুত হওয়া। যে সেবা করে সে আগে আল্লাহরই বান্দা, আর যাকে হুকুম দেওয়ার পরও অমান্য করতে দেখা যায় তার মতোই সে একই জবাবদিহির নিচে, যত শক্তিশালীই হোক।"
          },
          {
            "en": "Here the commentators part ways over the timing. Most, al-Qurtubi reports, placed the punishment in the Hereafter, the fire of Jahannam. Others, and al-Baghawi names them too, read it of this world: an angel stood over the jinn with a lash of fire and struck whoever broke from Sulayman's order. The verse itself fixes neither age, and both readings keep its force: that subjection does not cancel accountability, not for the strongest creature bound to a task.",
            "bn": "এখানে তাফসীরকারেরা সময় নিয়ে ভাগ হয়ে যান। কুরতুবীর বর্ণনায় অধিকাংশ রাখেন আখিরাতে, জাহান্নামের আগুনে। আবার কেউ, বাগাভীও যাঁদের নাম করেন, একে দুনিয়ার কথা বলেন: এক ফেরেশতা জ্বিনদের উপর দাঁড়িয়ে থাকতেন আগুনের চাবুক হাতে, আর যে সুলাইমানের হুকুম ভাঙত তাকে আঘাত করতেন। আয়াত নিজে কোনো কালকে স্থির করে না, আর দুই পাঠই এর জোর ধরে রাখে: অধীনতা জবাবদিহি মোছে না, কাজে বাঁধা সবচেয়ে শক্তিশালী সৃষ্টির জন্যও নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an answers an old objection: if the jinn are made of fire, how does fire punish them? Its reply is measured. Man is made of dust, yet a stone still bruises him, because dust is only his dominant element. So it is with the jinn and fire. The point is not the chemistry but the principle: no nature exempts a creature from the reckoning, and whoever deviates will feel exactly what deviation earns.",
            "bn": "মাআরিফুল কুরআন পুরনো এক আপত্তির জবাব দেয়: জ্বিন তো আগুনের তৈরি, আগুন তাকে শাস্তি দেবে কীভাবে? এর জবাব মাপা। মানুষ মাটির তৈরি, তবু পাথর তাকে আঘাত করে, কারণ মাটি তার প্রধান উপাদান মাত্র। জ্বিন আর আগুনের বেলায়ও তাই। কথাটা রসায়ন নিয়ে নয়, নীতির: কোনো প্রকৃতিই সৃষ্টিকে হিসাব থেকে ছাড় দেয় না, আর যে সরে যায় সে সরে যাওয়ার ফল ঠিকই পাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Jinn Caught at Night",
          "bn": "রাতে ধরা পড়া জ্বিন"
        },
        "p": [
          {
            "en": "A sound narration binds this verse to the Prophet's own night. Al-Bukhari records from Abu Hurayra (RA) that the Prophet ﷺ said an ifrit of the jinn broke loose upon him the night before to cut off his prayer, and Allah gave him power over it. He meant to tie it to a pillar of the mosque for all to see by morning, but he remembered the words of his brother Sulayman: “My Lord, forgive me and grant me a kingdom that will not befit anyone after me” (38:35). So he sent it away.",
            "bn": "এক সহীহ বর্ণনা এ আয়াতকে নবী ﷺ-এর নিজের এক রাতের সঙ্গে গেঁথে দেয়। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, গত রাতে জ্বিনের এক ইফরীত তাঁর উপর হামলে পড়েছিল তাঁর নামাজ ভেঙে দিতে, আর আল্লাহ তাকে তাঁর আয়ত্তে এনে দেন। তিনি চেয়েছিলেন তাকে মসজিদের কোনো এক খুঁটির সঙ্গে বেঁধে রাখতে, যাতে সকালে সবাই দেখতে পায়; কিন্তু তাঁর ভাই সুলাইমানের কথা মনে পড়ল: 'হে আমার রব, আমাকে ক্ষমা করুন আর আমাকে এমন রাজত্ব দিন যা আমার পরে কারও জন্য শোভা পাবে না' (৩৮:৩৫)। তাই তিনি তাকে ছেড়ে দিলেন।"
          },
          {
            "en": "The hadith is the verse read back. The same jinn that laboured before Sulayman by leave, the Prophet ﷺ could have displayed as a captive, and he let it go, out of deference to a dominion Allah had reserved to one man. Sulayman's kingdom was singular because Allah made it so, not because Sulayman reached out and took it. The grading is al-Bukhari's own, in his Sahih; nothing here needs to be stretched to carry the meaning of the verse.",
            "bn": "হাদীসটি যেন আয়াতেরই উল্টো পাঠ। যে জ্বিন অনুমতিক্রমে সুলাইমানের সামনে খাটত, সেই জাতের এক জ্বিনকে নবী ﷺ বন্দি করে দেখাতে পারতেন, তবু তিনি তাকে ছেড়ে দিলেন, আল্লাহ একজন মানুষের জন্য যে রাজত্ব আলাদা করে রেখেছিলেন তার প্রতি সম্মানে। সুলাইমানের রাজত্ব অনন্য ছিল কারণ আল্লাহ তা তেমন করেছিলেন, সুলাইমান হাত বাড়িয়ে নিয়ে নেননি বলে নয়। বর্ণনার মান বুখারীর নিজের, তাঁর সহীহ-তে; আয়াতের কথা বইতে এখানে কিছু টেনে বড় করার দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Power Held on Loan",
          "bn": "ধারে পাওয়া ক্ষমতা"
        },
        "p": [
          {
            "en": "Gather the three gifts and one phrase governs them all: the wind, the molten brass, and the labour of the jinn, each tied to bi-idhni rabbih. As-Sa'di draws the thread. Allah subjected the wind, eased the means of working the copper, and set the jinn under command, so that no part of the power stood on its own feet. A kingdom this vast could have tempted its holder to think it his. The verse forecloses that thought before it can even form: the leave is the Lord's.",
            "bn": "তিনটি দানকে একসঙ্গে রাখুন, একটি শব্দবন্ধই সবগুলোকে শাসন করে: বাতাস, গলিত তামা আর জ্বিনের শ্রম, প্রতিটি বাঁধা বিইজনি রাব্বিহ-র সঙ্গে। সা'দী সুতোটা টানেন। আল্লাহ বাতাসকে অধীন করলেন, তামা কাজে লাগানোর উপায় সহজ করলেন, আর জ্বিনদের হুকুমের নিচে রাখলেন, যাতে এ শক্তির কোনো অংশই নিজের পায়ে না দাঁড়ায়। এত বিশাল রাজত্ব সহজেই তার মালিককে ভাবাতে পারত যে এ তারই। আয়াত সে ভাবনা জন্মানোর আগেই বন্ধ করে দেয়: অনুমতিটা রবের।"
          },
          {
            "en": "This is kingship under God, not magic in a man's hand. The wind obeyed a decree, not a spell; the copper flowed by Allah's making, not by Sulayman's craft; the jinn served by leave, not by any formula Sulayman worked. Strip the leave away and nothing remains but a man like any other. What the verse gives Sulayman it quietly asks of every reader who holds a little power: to know the source, and to hold the gift open-handed, as something set down with him for a while.",
            "bn": "এ হলো আল্লাহর অধীনে রাজত্ব, মানুষের হাতে জাদু নয়। বাতাস মানত হুকুম, কোনো মন্ত্র নয়; তামা বইত আল্লাহর সৃষ্টিতে, সুলাইমানের কারিগরিতে নয়; জ্বিন খাটত অনুমতিতে, সুলাইমানের চালানো কোনো আমলে নয়। অনুমতি সরিয়ে নিন, পড়ে থাকবে আর দশজনের মতোই একজন মানুষ। আয়াত সুলাইমানকে যা দেয়, তা চুপিচুপি প্রতিটি পাঠকের কাছেও চায়, যে সামান্য ক্ষমতা রাখে: উৎসটা জানা, আর দানটা খোলা হাতে ধরা, কিছু সময়ের জন্য তার কাছে রেখে যাওয়া জিনিস হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Text Stops",
          "bn": "যেখানে আয়াত থেমে যায়"
        },
        "p": [
          {
            "en": "It is worth marking where the Qur'an falls silent and the storytellers begin. The verse gives the wind, the brass and the jinn, and no more. Around it the reports pile up detail: a throne borne on the air, a vast vessel carrying armies, inscriptions left by Sulayman's companions. The mufassirun themselves pass these on as reports, not as the verse. At-Tabari and al-Qurtubi relay such accounts with their chains, yet the lesson does not rest on any of them. It rests on the plain words.",
            "bn": "কোথায় কুরআন চুপ করে আর গল্পকারেরা শুরু করে, তা চিহ্নিত করা দরকার। আয়াত দেয় বাতাস, তামা আর জ্বিন, এর বেশি নয়। এর চারপাশে বর্ণনা জমে ওঠে: বাতাসে ভাসা সিংহাসন, সৈন্য বয়ে নেওয়া বিশাল যান, সুলাইমানের সঙ্গীদের রেখে যাওয়া লেখা। তাফসীরকারেরা নিজেরাই এগুলো বর্ণনা হিসেবে চালান, আয়াত হিসেবে নয়। তাবারী ও কুরতুবী এমন বর্ণনা সনদসহ আনেন, তবু শিক্ষাটা এর কোনোটির উপর দাঁড়িয়ে নেই। তা দাঁড়িয়ে আছে সোজা শব্দগুলোর উপর।"
          },
          {
            "en": "The restraint matters. Much of what later tradition heaped onto Sulayman belongs to Israelite lore, and the sounder commentators keep it at arm's length, reporting without endorsing. A reader loses nothing by doing the same. The wonder of the verse is not the scale of the marvels but the clause that leashes them, and that clause stands whether or not a city by the Tigris really bore an inscription. Read for the leave, and the tales become decoration a person can set aside.",
            "bn": "এই সংযম গুরুত্বপূর্ণ। পরবর্তীকালের বর্ণনায় সুলাইমানের গায়ে যা চাপানো হয়েছে তার অনেকটাই ইসরাইলি উপকথা, আর ভালো তাফসীরকারেরা তা হাত দূরত্বে রাখেন, বর্ণনা করেন কিন্তু সমর্থন করেন না। পাঠক তেমনটা করলে কিছুই হারায় না। আয়াতের বিস্ময় বিস্ময়কর ঘটনার বিশালতায় নয়, বরং সেই বাক্যে, যা সবকিছুকে বেঁধে রাখে। আর সে বাক্য টিকে থাকে, দজলার পাড়ে কোনো শহরে সত্যিই কোনো লেখা ছিল কি না তা নির্বিশেষে। অনুমতির দিকে তাকিয়ে পড়ুন, গল্পগুলো তখন সরিয়ে রাখার মতো সাজসজ্জা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Trust We Carry",
          "bn": "আমানত বয়ে নেওয়া"
        },
        "p": [
          {
            "en": "The verse that follows tells the family of Dawud to work in thanks (34:13), and that is where this one lands for anyone who is not a prophet. If the greatest dominion ever granted was held by leave and owed to the Giver, then the small powers of an ordinary life are held on the very same terms. A salary, a skill, authority over a few people, a healthy body: each arrives by a leave that can be withdrawn, and each will be asked about.",
            "bn": "পরের আয়াত দাঊদের পরিবারকে বলে কৃতজ্ঞতায় কাজ করতে (৩৪:১৩), আর যে নবী নয় তার জন্য এ আয়াত সেখানেই এসে নামে। যদি কখনো দেওয়া সবচেয়ে বড় রাজত্বও অনুমতিতে রাখা হয়ে থাকে আর তা দাতার কাছে ঋণী হয়, তবে সাধারণ জীবনের ছোট ছোট ক্ষমতাও ঠিক একই শর্তে ধরা। একটা বেতন, একটা দক্ষতা, গুটিকয় মানুষের উপর কর্তৃত্ব, একটা সুস্থ শরীর: প্রতিটি আসে এমন এক অনুমতিতে যা তুলে নেওয়া যায়, আর প্রতিটি নিয়ে জিজ্ঞেস করা হবে।"
          },
          {
            "en": "So the response the verse trains is not fear of the gift but honesty about it. The grateful servant uses what he is lent in the way its Owner would have it used, and does not mistake a loan for a deed of ownership. Sulayman (AS) commanded the wind and still called the kingdom a thing granted; the reader who commands far less can hardly call his own more than that. Hold it as a trust, spend it in obedience, and be ready to give the account.",
            "bn": "তাই আয়াত যে সাড়া গড়ে তোলে তা দানের ভয় নয়, দান নিয়ে সততা। কৃতজ্ঞ বান্দা যা ধার পেয়েছে তা মালিক যেভাবে চান সেভাবে ব্যবহার করে, আর ধারকে মালিকানার দলিল বলে ভুল করে না। সুলাইমান (আঃ) বাতাসকে হুকুম করতেন, তবু রাজত্বকে বলতেন দেওয়া জিনিস; যে পাঠক এর চেয়ে অনেক কম চালায়, সে কী করে নিজেরটাকে এর চেয়ে বেশি বলবে? একে আমানত হিসেবে ধরুন, আনুগত্যে খরচ করুন, আর হিসাব দিতে তৈরি থাকুন।"
          }
        ]
      }
    ]
  },
  "34:13": {
    "sections": [
      {
        "h": {
          "en": "The Workshop Described",
          "bn": "কারখানার বর্ণনা"
        },
        "p": [
          {
            "en": "34:12 sets the scene: the wind whose morning journey was a month and its evening journey a month, a spring of molten copper made to flow, and among the jinn those who worked before him by the permission of his Lord. That last phrase carries the weight. Nothing in the arrangement was Sulayman's (AS) by right, and 34:12 closes by naming the punishment awaiting any of them who deviated from the command.",
            "bn": "34:12 দৃশ্যটি সাজিয়ে দেয়: সেই বাতাস যার সকালের পথ ছিল এক মাসের আর সন্ধ্যার পথ এক মাসের, গলিত তামার এক প্রবাহিত ঝরনা, আর জিনদের মধ্যে যারা তাঁর রবের অনুমতিক্রমে তাঁর সামনে কাজ করত। শেষ কথাটিই ভার বহন করে। এই ব্যবস্থার কোনো কিছুই সুলাইমান (আঃ)-এর অধিকারবলে ছিল না, আর 34:12 শেষ হয় তাদের মধ্যে যারা নির্দেশ থেকে সরে যাবে তাদের জন্য অপেক্ষমাণ শাস্তির নাম নিয়ে।"
          },
          {
            "en": "This verse lists the output in four items: elevated chambers, statues, bowls like reservoirs, and kettles so fixed they could not be moved. Ibn Kathir notes that the making of images was permitted in the law given to them and is not permitted in ours. Past those four items the Quran says nothing about these works, and the stories that circulate about them are not from it.",
            "bn": "এই আয়াত উৎপাদনের তালিকা দেয় চারটি বস্তুতে: সুউচ্চ কক্ষ, ভাস্কর্য, হাউযের মতো বড় পাত্র, আর এমন ডেগ যেগুলো স্থির, নড়ানো যেত না। ইবনে কাসীর উল্লেখ করেন, প্রতিমূর্তি নির্মাণ তাঁদের দেওয়া শরীয়তে বৈধ ছিল, আমাদের শরীয়তে তা বৈধ নয়। এই চারটি বস্তুর বাইরে এই কাজগুলো নিয়ে কুরআন কিছুই বলে না, আর এ নিয়ে যেসব গল্প প্রচলিত আছে সেগুলো কুরআন থেকে আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Work, Family of Dawud",
          "bn": "হে দাউদের পরিবার, কাজ কর"
        },
        "p": [
          {
            "en": "In the middle of the inventory the address changes without warning. The jinn have been the subject of every verb; suddenly a plural imperative is spoken to a household: i'malu aal Dawuda shukran — work, O family of Dawud, in gratitude; aal is family, not the ala that means upon. The ones who were being served are the ones who are commanded. as-Sa'di takes the family of Dawud to be Dawud (AS) himself, his children and his wives.",
            "bn": "তালিকার মাঝখানেই সম্বোধন বদলে যায়, কোনো পূর্বাভাস ছাড়াই। এতক্ষণ প্রতিটি ক্রিয়ার কর্তা ছিল জিনেরা; হঠাৎ একটি পরিবারকে উদ্দেশ করে বহুবচনে আদেশ আসে: ই'মালূ আ-ল দাউদা শুকরান — হে দাউদের পরিবার, কৃতজ্ঞতার সাথে কাজ কর। যাদের সেবা করা হচ্ছিল, আদেশটি তাদেরই দেওয়া হলো। আস-সা'দী দাউদের পরিবার বলতে বোঝেন স্বয়ং দাউদ (আঃ), তাঁর সন্তানগণ ও তাঁর স্ত্রীগণকে।"
          },
          {
            "en": "And the command is a verb of doing, not of saying. Gratitude here is the purpose the work is done for; the working itself is the thanks. as-Sa'di sums shukr as three things at once — the heart's recognition of the Giver, the admission of one's own need and weakness, and the spending of the gift where He is pleased rather than where He is disobeyed. Only the first of the three is a feeling.",
            "bn": "আর আদেশটি করার ক্রিয়া, বলার নয়। এখানে কৃতজ্ঞতাই সেই উদ্দেশ্য যার জন্য কাজ করা হয়; কাজ করাটাই কৃতজ্ঞতা। আস-সা'দী শুকরকে একসাথে তিনটি জিনিস হিসেবে সংক্ষেপ করেন — অন্তরের ভেতর দাতাকে চিনে নেওয়া, নিজের অভাব ও দুর্বলতা স্বীকার করা, আর দানটিকে সেখানে ব্যয় করা যেখানে তিনি সন্তুষ্ট হন, যেখানে তাঁর অবাধ্যতা হয় সেখানে নয়। এই তিনটির মধ্যে কেবল প্রথমটিই অনুভূতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ash-Shakur, a Rare Word",
          "bn": "আশ-শাকূর, এক দুর্লভ শব্দ"
        },
        "p": [
          {
            "en": "The verse ends: wa qalilun min ibadiya ash-shakur. The final word is not shakir, the ordinary participle for one who gives thanks. It is shakur, an intensive form — one in whom gratitude has become constant and thorough. Translations reasonably render both as grateful, so the distinction lives in the Arabic. The few are not people who thank on occasion; they are people whose thanking has become a settled habit.",
            "bn": "আয়াতটি শেষ হয়: ওয়া কালীলুম মিন ইবাদিয়াশ-শাকূর। শেষ শব্দটি শাকির নয়, অর্থাৎ যে কৃতজ্ঞতা প্রকাশ করে তার জন্য ব্যবহৃত সাধারণ কর্তৃবাচক রূপ নয়। এটি শাকূর, একটি মুবালাগার রূপ — যার ভেতর কৃতজ্ঞতা স্থায়ী ও পূর্ণাঙ্গ হয়ে গেছে। অনুবাদগুলো যুক্তিসঙ্গতভাবেই শাকির ও শাকূর দুটিকেই 'কৃতজ্ঞ' বলে, তাই পার্থক্যটি বেঁচে থাকে আরবিতেই। এই অল্পসংখ্যকেরা মাঝেমধ্যে শোকর করা মানুষ নয়; এরা তারা, যাদের শোকর করা একটি স্থায়ী অভ্যাসে পরিণত হয়েছে।"
          },
          {
            "en": "The same intensive form names Allah Himself in 35:30 and 64:17 — ash-Shakur, the One who repays a small deed abundantly. And its opposite closes the passage that follows: 34:17 asks whether We repay in that way anyone but al-kafur, the deeply ungrateful, built on the very same pattern. Surah Saba' sets the two extremes of one grammatical form against each other within a few verses.",
            "bn": "একই মুবালাগার রূপ স্বয়ং আল্লাহর নাম হয়ে আসে 35:30 ও 64:17 আয়াতে — আশ-শাকূর, যিনি ছোট আমলের প্রতিদান দেন প্রাচুর্যে। আর এর বিপরীত শব্দটি পরের অংশটি শেষ করে: 34:17 জিজ্ঞেস করে, আমি কি আল-কাফূর ছাড়া অন্য কাউকে এভাবে প্রতিদান দিই — অর্থাৎ চরম অকৃতজ্ঞ, যা গঠিত হয়েছে ঠিক একই ছাঁচে। সূরা সাবা কয়েক আয়াতের ভেতরেই একটি ব্যাকরণগত রূপের দুই প্রান্তকে মুখোমুখি দাঁড় করিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The City After the House",
          "bn": "গৃহের পরে সেই জনপদ"
        },
        "p": [
          {
            "en": "The placement is deliberate. Two verses after the command to Dawud's family, 34:15 introduces Saba': two gardens on the right and on the left, with the instruction to eat of the provision of your Lord and be grateful to Him — a good land and a forgiving Lord. The same word, the same command, and a different address: one a household of prophets, the other an ordinary prosperous city.",
            "bn": "অবস্থানটি উদ্দেশ্যপ্রণোদিত। দাউদের পরিবারকে দেওয়া আদেশের দুই আয়াত পরেই 34:15 সাবার পরিচয় দেয়: ডানে ও বামে দুটি বাগান, আর নির্দেশ — তোমাদের রবের দেওয়া রিযিক খাও এবং তাঁর কৃতজ্ঞতা প্রকাশ কর; উত্তম এক ভূমি আর ক্ষমাশীল এক রব। একই শব্দ, একই আদেশ, কিন্তু ভিন্ন সম্বোধিত: একদিকে নবীদের এক পরিবার, অন্যদিকে সচ্ছল এক সাধারণ জনপদ।"
          },
          {
            "en": "34:16 records the answer they gave: they turned away, so the flood of the dam was sent upon them and their two gardens were exchanged for gardens of bitter fruit, tamarisks and something of sparse lote trees. Within a few verses the surah has shown both possibilities — a household told to work in thanks, and a city that took the gift in silence and lost the land under it.",
            "bn": "34:16 তাদের দেওয়া জবাবটি লিপিবদ্ধ করে: তারা মুখ ফিরিয়ে নিল, তাই তাদের ওপর বাঁধভাঙা বন্যা পাঠানো হলো এবং তাদের দুটি বাগান বদলে দেওয়া হলো তিক্ত ফলের বাগান, ঝাউগাছ আর সামান্য কিছু কুলগাছে। কয়েক আয়াতের ভেতরেই সূরাটি দুটি সম্ভাবনাই দেখিয়ে দেয় — একটি পরিবার, যাদের কৃতজ্ঞতার সাথে কাজ করতে বলা হলো, আর একটি জনপদ, যারা নীরবে দান নিল এবং পায়ের নিচের জমিটিই হারাল।"
          }
        ]
      },
      {
        "h": {
          "en": "What Makes the Grateful Few",
          "bn": "কৃতজ্ঞরা কেন অল্প"
        },
        "p": [
          {
            "en": "Why so few? 16:18 gives one reason: if you tried to count the favours of Allah you could not enumerate them. What cannot be counted is easily not noticed. Air, a working joint, an ordinary uneventful morning all register as background rather than as gifts. Gratitude begins by moving things out of the background, and that is effort most people never decide to spend.",
            "bn": "এত অল্প কেন? 16:18 একটি কারণ দেয়: আল্লাহর নিয়ামত গুনতে চাইলে তোমরা তা গুনে শেষ করতে পারবে না। যা গোনা যায় না, তা সহজেই চোখ এড়িয়ে যায়। বাতাস, সচল একটি গাঁট, ঘটনাহীন একটি সাধারণ সকাল — সবই নিয়ামত নয়, বরং পটভূমি হিসেবে ধরা পড়ে। কৃতজ্ঞতা শুরু হয় জিনিসগুলোকে পটভূমি থেকে সামনে টেনে আনা দিয়ে, আর এই পরিশ্রমটুকু ব্যয় করার সিদ্ধান্ত বেশিরভাগ মানুষ কখনো নেয় না।"
          },
          {
            "en": "The other reason is that this verse defines thanks as work. Words are cheap and quick; using a gift the way its Giver wants costs time and refusal. 39:7 states what is at stake: He does not approve disbelief for His servants, and if you are grateful He approves it for you. To be among the few is not to feel more than others. It is to spend what you were handed where He would have spent it.",
            "bn": "দ্বিতীয় কারণ হলো, এই আয়াত কৃতজ্ঞতাকে সংজ্ঞায়িত করে কাজ হিসেবে। কথা সস্তা ও দ্রুত; কিন্তু দাতা যেভাবে চান সেভাবে দান ব্যবহার করতে সময় লাগে আর অনেক কিছু প্রত্যাখ্যান করতে হয়। 39:7 বলে দেয় কী ঝুঁকিতে আছে: তিনি তাঁর বান্দাদের জন্য কুফরকে পছন্দ করেন না, আর তোমরা কৃতজ্ঞ হলে তিনি তোমাদের জন্য তা পছন্দ করেন। সেই অল্পসংখ্যকের মধ্যে থাকা মানে অন্যদের চেয়ে বেশি অনুভব করা নয়। এর মানে, আপনার হাতে যা তুলে দেওয়া হয়েছে তা সেখানেই ব্যয় করা যেখানে তিনি ব্যয় করতেন।"
          }
        ]
      }
    ]
  },
  "34:28": {
    "sections": [
      {
        "h": {
          "en": "Where the Argument Turns",
          "bn": "যেখানে কথার মোড় ঘোরে"
        },
        "p": [
          {
            "en": "The verses just before it had been dismantling the gods of Makkah. Call on those you claim besides Allah, 34:22 says; they own not an atom's weight in the heavens or the earth, hold no share in either, and lend Him no help. Show me those you have attached to Him as partners, 34:27 presses, then answers itself: there is nothing to show. Having emptied the false gods of every power, the Qur'an turns, in 34:28, to the Messenger it did send: wa mā arsalnāka illā kāffatan li'n-nās bashīran wa nadhīran — We sent you only, comprehensively, to all mankind, as a bearer of glad tidings and a warner.",
            "bn": "এর ঠিক আগের আয়াতগুলো মক্কার দেবতাদের একে একে ভেঙে দিচ্ছিল। ৩৪:২২ বলছে, আল্লাহ ছাড়া যাদের তোমরা ডাক, তাদের ডাকো; আসমান-যমীনে তাদের অণু পরিমাণ মালিকানা নেই, এ দুইয়ে কোনো অংশও নেই, আর আল্লাহকে সাহায্য করারও কেউ তারা নয়। ৩৪:২৭ চ্যালেঞ্জ ছোড়ে, যাদের অংশীদার বানিয়েছ তাদের আমাকে দেখাও, তারপর নিজেই জবাব দেয়: দেখানোর কিছু নেই। মিথ্যা উপাস্যদের সব ক্ষমতা থেকে খালি করে কুরআন ৩৪:২৮-এ ফেরে সেই জনের দিকে, যাঁকে সত্যিই পাঠানো হয়েছে: ওয়া মা আরসালনাকা ইল্লা কাফ্‌ফাতান লিন্‌নাস—আমি তোমাকে সমগ্র মানবজাতির কাছে সুসংবাদদাতা ও সতর্ককারী করেই পাঠিয়েছি।"
          },
          {
            "en": "Ibn Kathir opens his comment by naming the one addressed: Allah speaks here to His servant and Messenger Muhammad ﷺ. He reads kāffatan li'n-nās as to the whole of creation among those bound by accountability, and ties it to two other verses, 7:158, Say, O mankind, I am the Messenger of Allah to you all, and 25:1, that he be a warner to all the worlds. The whole weight of the sentence rests on one word, kāffah, and the rest of its meaning turns around it.",
            "bn": "ইবন কাসীর তাফসীর শুরু করেন সম্বোধিত জনকে চিনিয়ে দিয়ে: এখানে আল্লাহ কথা বলছেন তাঁর বান্দা ও রাসূল মুহাম্মদ ﷺ-এর সঙ্গে। কাফ্‌ফাতান লিন্‌নাস-কে তিনি পড়েন সমস্ত সৃষ্টির কাছে, যারা দায়িত্বপ্রাপ্ত, এই অর্থে, আর মিলিয়ে দেন আরও দুই আয়াতের সঙ্গে—৭:১৫৮, বল হে মানুষ, আমি তোমাদের সবার কাছে আল্লাহর রাসূল, এবং ২৫:১, যেন তিনি সমস্ত জগতের জন্য সতর্ককারী হন। গোটা বাক্যের ভার একটি শব্দের উপর, কাফ্‌ফাহ, আর বাকি সব অর্থ তাকে ঘিরেই ঘোরে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reading Against the Grammar",
          "bn": "ব্যাকরণের উল্টো পথে এক পাঠ"
        },
        "p": [
          {
            "en": "al-Qurtubi starts with the word order. The sentence as it stands reads kāffatan li'n-nās, but the sense, he says, is li'n-nāsi kāffatan — for the people, all of them. There is taqdīm wa ta'khīr here, a fronting and a postponing: the word that grammar would place last has been pulled to the front. Read straight, kāffatan carries the meaning of 'āmmatan, in general, to everyone. So the first and plainest sense of the verse is that the Messenger was sent to all people, with no group left outside the address.",
            "bn": "কুরতুবী শুরু করেন শব্দের ক্রম দিয়ে। আয়াতে আছে কাফ্‌ফাতান লিন্‌নাস, কিন্তু অর্থ, তিনি বলেন, লিন্‌নাসি কাফ্‌ফাতান—মানুষের জন্য, তাদের সবার জন্য। এখানে আছে তাকদীম ওয়া তাখীর, অর্থাৎ আগ-পিছ করা: ব্যাকরণ যে শব্দকে শেষে রাখত, তাকে টেনে সামনে আনা হয়েছে। সরাসরি পড়লে কাফ্‌ফাতান বহন করে আম্মাতান-এর অর্থ, অর্থাৎ সবার কাছে। তাই আয়াতের প্রথম ও সবচেয়ে সোজা অর্থ হলো, রাসূলকে পাঠানো হয়েছে সব মানুষের কাছে, কাউকে সম্বোধনের বাইরে না রেখে।"
          },
          {
            "en": "Ma'arif al-Qur'an presses the same grammar and draws the point out. The word kāffah, it explains, is grammatically a ḥāl, an adverbial state, tied to nās, the people; so the ordinary arrangement would have been li'n-nāsi kāffatan, for the people as a whole. But to put a clear accent on the universality of this mission, kāffah was set to come earlier in the line. The displacement is not loose style; it is emphasis built into the syntax. The word means universal, inclusive of all, with no one excluded from it.",
            "bn": "মাআরিফুল কুরআন একই ব্যাকরণে জোর দিয়ে কথাটা খুলে বলে। কাফ্‌ফাহ শব্দটি, এটি জানায়, ব্যাকরণে একটি হাল, অর্থাৎ অবস্থাবাচক পদ, যা নাস তথা মানুষের সঙ্গে যুক্ত; তাই স্বাভাবিক ক্রম হতো লিন্‌নাসি কাফ্‌ফাতান, গোটা মানবজাতির জন্য। কিন্তু এই রিসালাতের সর্বজনীনতার উপর স্পষ্ট জোর দিতে কাফ্‌ফাহ-কে আগে এনে বসানো হয়েছে। এ স্থানান্তর ঢিলেঢালা ভঙ্গি নয়, বরং বাক্যগঠনেই গেঁথে দেওয়া জোর। শব্দটির মানে সর্বজনীন, সবাইকে ধরে, কাউকে বাদ না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Word About You",
          "bn": "নাকি কথাটা তোমাকে নিয়ে"
        },
        "p": [
          {
            "en": "But Qurtubi does not stop at one reading, and the alternatives attach the word to the Messenger rather than to the people. az-Zajjāj took it as illā jāmi'an li'n-nās, We sent you only as one who gathers the people, by warning and conveyance, making al-kāffah mean al-jāmi', the gatherer. Others read kāffan li'n-nās, one who restrains them: he holds them back from the disbelief they are in and calls them to Islam, the final hā' added for intensity. A third reading supplies a dropped word, dhā kāffatin, a possessor of restraint, drawing on kaff ath-thawb, the hemming of a garment by folding its two edges together.",
            "bn": "তবে কুরতুবী এক পাঠেই থামেন না, আর বাকি পাঠগুলো শব্দটিকে মানুষের বদলে রাসূলের সঙ্গে জোড়ে। যাজ্জাজ একে নিয়েছেন ইল্লা জামিআন লিন্‌নাস অর্থে, অর্থাৎ আমি তোমাকে কেবল মানুষের একত্রকারী করে পাঠিয়েছি, সতর্কীকরণ ও পৌঁছে দেওয়ার মাধ্যমে; এতে কাফ্‌ফাহ মানে দাঁড়ায় জামি, একত্রকারী। অন্যরা পড়েন কাফ্‌ফান লিন্‌নাস, অর্থাৎ যিনি তাদের ঠেকান: কুফর থেকে তাদের বিরত রাখেন আর ইসলামের দিকে ডাকেন, শেষের হা যুক্ত হয়েছে জোর বোঝাতে। তৃতীয় এক পাঠ একটি উহ্য শব্দ ধরে নেয়, যা কাফ্‌ফাতিন, অর্থাৎ ঠেকানোর অধিকারী; এসেছে কাফ্‌ফুস সাউব তথা কাপড়ের দুই প্রান্ত ভাঁজ করে সেলাই করার ছবি থেকে।"
          },
          {
            "en": "al-Baghawi records the same restraining sense: kāffah as kāffan, one who holds the people back from the disbelief they are in, the hā' again for emphasis. So the grammar leaves a real fork. Is kāffatan a word about the people, that he was sent to all of them, or a word about the Messenger, that he was sent as a restrainer and gatherer of them? The commentators hold both without forcing a choice, though the sense most of them lead with, and the one the whole passage leans on, is the first: the reach of the message to everyone.",
            "bn": "বাগাভীও একই ঠেকানোর অর্থ টুকে রাখেন: কাফ্‌ফাহ মানে কাফ্‌ফান, অর্থাৎ যিনি মানুষকে তাদের কুফর থেকে ফিরিয়ে রাখেন, হা এখানেও জোরের জন্য। ফলে ব্যাকরণ সত্যিকারের এক দ্বিমুখ রেখে যায়। কাফ্‌ফাতান কি মানুষকে নিয়ে বলা কথা, যে তাঁকে তাদের সবার কাছে পাঠানো হয়েছে, নাকি রাসূলকে নিয়ে বলা কথা, যে তাঁকে তাদের ঠেকানেওয়ালা ও একত্রকারী করে পাঠানো হয়েছে? তাফসীরকারেরা কোনো একটিকে চাপিয়ে না দিয়ে দুটিই ধরে রাখেন, তবে তাঁদের বেশির ভাগ যেটিকে সামনে রাখেন, আর গোটা আয়াত যেটির উপর ভর দেয়, তা প্রথমটিই: সবার কাছে বার্তার পৌঁছানো।"
          }
        ]
      },
      {
        "h": {
          "en": "To Every People, Not One",
          "bn": "প্রতিটি জাতির কাছে"
        },
        "p": [
          {
            "en": "at-Tabari fills in what 'all people' rules out. Allah did not send you, he writes, to the idolaters of your own people alone, but kāffatan li'n-nāsi ajma'īn — to all mankind together, the Arab among them and the non-Arab, the red and the black — a bearer of good news to whoever obeys you and a warner to whoever calls you a liar. al-Baghawi reads the same breadth into li'n-nās: to the people in general, to their red and their black. The scope is drawn in the plainest terms, across every nation and every colour.",
            "bn": "তাবারী খুলে বলেন, সব মানুষ বলতে কাদের বাদ দেওয়া হচ্ছে না। তিনি লেখেন, আল্লাহ তোমাকে কেবল তোমার নিজ জাতির মুশরিকদের কাছে পাঠাননি, বরং কাফ্‌ফাতান লিন্‌নাসি আজমাঈন, অর্থাৎ গোটা মানবজাতির কাছে, তাদের আরব ও অনারব, লাল ও কালো সবাইকে নিয়ে; যে মানবে তার জন্য সুসংবাদদাতা, আর যে মিথ্যা বলবে তার জন্য সতর্ককারী। বাগাভীও লিন্‌নাস-এ সেই ব্যাপকতাই পড়েন: সাধারণভাবে সব মানুষের কাছে, তাদের লাল ও কালো সবার কাছে। পরিধিটা আঁকা হয়েছে একেবারে সোজা কথায়, প্রতিটি জাতি ও প্রতিটি বর্ণ ছুঁয়ে।"
          },
          {
            "en": "Ibn Kathir gathers the early voices to the same point. Muhammad bin Ka'b glossed the verse simply as ilā an-nās 'āmmatan, to the people at large. Qatadah went further and drew the consequence: Allah sent Muhammad ﷺ to the Arabs and the non-Arabs alike, so the most honoured of them with Allah is the one most obedient to Him. The universality carries a leveller inside it. Once the message is for everyone, no people and no language holds a rank of its own; the only standing that counts is obedience.",
            "bn": "ইবন কাসীর প্রথম যুগের কণ্ঠগুলো একই জায়গায় জড়ো করেন। মুহাম্মদ ইবন কাব আয়াতটির সহজ ব্যাখ্যা দেন ইলান্‌নাসি আম্মাতান, অর্থাৎ সাধারণভাবে সব মানুষের কাছে। কাতাদাহ আরও এগিয়ে ফলটা টানেন: আল্লাহ মুহাম্মদ ﷺ-কে আরব ও অনারব উভয়ের কাছেই পাঠিয়েছেন, তাই তাদের মধ্যে আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই, যে তাঁর সবচেয়ে অনুগত। এই সর্বজনীনতার ভেতরেই একটা সমতা লুকানো। বার্তা যখন সবার জন্য, তখন কোনো জাতি বা ভাষা নিজের আলাদা মর্যাদা রাখে না; যে মর্যাদা গোনা হয় তা কেবল আনুগত্যের।"
          }
        ]
      },
      {
        "h": {
          "en": "To Jinn and Every Age",
          "bn": "জিন ও সব যুগের জন্য"
        },
        "p": [
          {
            "en": "Ibn Kathir cites Ibn Abbas, who stretches the word wider still. Ibn Abbas held that Allah favoured Muhammad ﷺ over the dwellers of heaven and over the prophets; asked how over the prophets, he answered from the Qur'an. Of every earlier messenger Allah said, We sent no messenger except in the tongue of his people (14:4); but to this Prophet He said, We sent you only kāffatan li'n-nās. So He sent him, Ibn Abbas concluded, to both the jinn and mankind. The words I was sent to the black and the red, Ibn Kathir adds, Mujāhid reads as jinn and mankind, and others as Arab and non-Arab; both are sound.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে এমন এক বর্ণনা আনেন, যা শব্দটিকে আরও প্রসারিত করে। ইবন আব্বাস বলতেন, আল্লাহ মুহাম্মদ ﷺ-কে আসমানবাসী ও নবীদের সবার উপর মর্যাদা দিয়েছেন; কীভাবে নবীদের উপর, জিজ্ঞেস করা হলে তিনি জবাব দেন কুরআন থেকেই। প্রতিটি আগের রাসূল সম্পর্কে আল্লাহ বলেছেন, আমি প্রত্যেক রাসূলকে তার জাতির ভাষাতেই পাঠিয়েছি (১৪:৪); কিন্তু এই রাসূলকে বলেছেন, আমি তোমাকে কেবল কাফ্‌ফাতান লিন্‌নাস করে পাঠিয়েছি। তাই, ইবন আব্বাস সিদ্ধান্ত টানেন, আল্লাহ তাঁকে জিন ও মানুষ উভয়ের কাছেই পাঠিয়েছেন। আমাকে কালো ও লালের কাছে পাঠানো হয়েছে—এ কথাটি, ইবন কাসীর যোগ করেন, মুজাহিদ পড়েন জিন ও মানুষ অর্থে, অন্যরা আরব ও অনারব অর্থে; দুটিই সহীহ।"
          },
          {
            "en": "Ma'arif al-Qur'an gathers the reach along a second axis as well. The mission is not for human beings only but for the jinn alongside them, and not for those who stood in the Prophet's own lifetime only but for every generation that would follow, on to the last day. 'All mankind' is therefore a claim about time as much as about place: no later age falls outside the address, and no reader of any century can treat the call as spoken past them to some earlier world.",
            "bn": "মাআরিফুল কুরআন ব্যাপকতাকে আরেকটি অক্ষ বরাবরও গোছায়। এই রিসালাত কেবল মানুষের জন্য নয়, তাদের পাশাপাশি জিনের জন্যও; আর কেবল নবীর ﷺ নিজ জীবদ্দশায় যারা ছিল তাদের জন্য নয়, বরং পরের প্রতিটি প্রজন্মের জন্য, শেষ দিন পর্যন্ত। সমগ্র মানবজাতি তাই স্থানের মতোই সময়েরও দাবি: পরের কোনো যুগ সম্বোধনের বাইরে পড়ে না, আর কোনো শতাব্দীর পাঠকই ডাকটাকে নিজেদের ছাড়িয়ে আগের কোনো জগতের উদ্দেশে বলা ভেবে সরিয়ে রাখতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hadith of the Five",
          "bn": "পাঁচটি জিনিসের হাদীস"
        },
        "p": [
          {
            "en": "The Prophet ﷺ stated the point himself, in a hadith Jābir bin ʿAbdullāh reports and both al-Bukhārī and Muslim record, sound by their own criterion. He said: 'I have been given five things which were not given to anyone before me. I was made victorious by awe cast the distance of a month's journey. The earth has been made for me a place of prayer and a means of purification, so whenever the time of prayer comes, any man of my nation may pray. The spoils of war have been made lawful for me, and were not lawful for anyone before me.'",
            "bn": "নবী ﷺ নিজেই কথাটা বলে গেছেন, এক হাদীসে যা জাবির ইবন আবদুল্লাহ (রাঃ) বর্ণনা করেন এবং বুখারী ও মুসলিম দুজনেই সংকলন করেন—তাঁদের নিজ মানদণ্ডে সহীহ। তিনি বলেন: আমাকে এমন পাঁচটি জিনিস দেওয়া হয়েছে যা আমার আগে কাউকে দেওয়া হয়নি। এক মাসের পথ দূর থেকে ভীতি ছড়িয়ে আমাকে সাহায্য করা হয়েছে। গোটা জমিনকে আমার জন্য সালাতের স্থান ও পবিত্রতার উপায় করা হয়েছে, তাই আমার উম্মতের যে কেউ যেখানেই সালাতের সময় পাবে সেখানেই সালাত পড়ে নেবে। গনীমত আমার জন্য হালাল করা হয়েছে, যা আমার আগে কারও জন্য হালাল ছিল না।"
          },
          {
            "en": "He continued: 'I have been given intercession; and every prophet used to be sent to his own people, but I have been sent to all mankind.' That last gift is this very verse, spoken by the one it was revealed about. Ibn Kathir cites the hadith directly under kāffatan li'n-nās, Ma'arif al-Qur'an under the same word, and al-Baghawi reports it from Jābir for its closing clause. The first four gifts mark out what set this Prophet ﷺ apart from those before him; the fifth names the very scope the verse had already fixed.",
            "bn": "তিনি বলে যান: আমাকে শাফাআতের অধিকার দেওয়া হয়েছে। আর প্রত্যেক নবী পাঠানো হতো কেবল তার নিজ জাতির কাছে, কিন্তু আমাকে পাঠানো হয়েছে সমগ্র মানবজাতির কাছে। এই শেষ দানটিই যেন এ আয়াত, যাঁর সম্পর্কে তা নাজিল, তাঁরই মুখে বলা। ইবন কাসীর হাদীসটি সরাসরি কাফ্‌ফাতান লিন্‌নাস-এর নিচে আনেন, মাআরিফুল কুরআনও একই শব্দের নিচে, আর বাগাভী জাবির (রাঃ) থেকে এটিকে এর শেষ কথার জন্য উদ্ধৃত করেন। প্রথম চারটি দান দেখিয়ে দেয় এই নবীকে ﷺ আগের নবীদের থেকে কী আলাদা করে; পঞ্চমটি নাম দেয় সেই পরিধির, আয়াত যা আগেই স্থির করে দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Why This Must Be Last",
          "bn": "কেন তিনিই শেষ নবী"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws a further consequence that the word carries. If the mission runs to every people and every age, then its reach across time has an implication the verse does not state but entails: this Prophet ﷺ must be the last and final one, with no prophet to come after him. A commission that never expires does not leave room for a successor. The universality the verse asserts and the finality the Qur'an teaches elsewhere are, on this reading, two sides of a single claim.",
            "bn": "মাআরিফুল কুরআন শব্দটির ভেতরে থাকা আরেকটি ফল টানে। রিসালাত যদি প্রতিটি জাতি ও প্রতিটি যুগ পর্যন্ত পৌঁছায়, তাহলে সময় জুড়ে তার এই বিস্তারের মধ্যে এমন একটি তাৎপর্য আছে যা আয়াত সরাসরি বলে না, তবু বহন করে: এই নবী ﷺ-কে হতে হবে শেষ ও চূড়ান্ত নবী, তাঁর পরে আর কোনো নবী নেই। যে দায়িত্বের মেয়াদ কখনো ফুরোয় না, তা উত্তরসূরির জায়গা রাখে না। আয়াত যে সর্বজনীনতা ঘোষণা করে আর কুরআন অন্যত্র যে পরিসমাপ্তি শেখায়, এ পাঠে তারা একই দাবির দুই পিঠ।"
          },
          {
            "en": "The reasoning Ma'arif gives is plain. A new prophet was sent, it observes, when the teaching of the prophet before him had been distorted or altered, to set the people right again. But the law of this Prophet ﷺ and his Book, the Qur'an, stand under a guarantee Allah took upon Himself: their protection until the last day. Since the message survives in its original state, with nothing lost to tampering, there is no gap left for another prophet to fill. The scope of the mission and its permanence hold together.",
            "bn": "মাআরিফ যে যুক্তি দেয় তা সোজা। নতুন নবী তখনই পাঠানো হতো, এটি বলে, যখন আগের নবীর শিক্ষা বিকৃত বা বদলে যেত, মানুষকে আবার ঠিক পথে ফেরাতে। কিন্তু এই নবীর ﷺ শরীয়ত আর তাঁর কিতাব কুরআন আছে এমন এক নিশ্চয়তার নিচে, যা আল্লাহ নিজের দায়িত্বে নিয়েছেন: শেষ দিন পর্যন্ত এর হিফাজত। বার্তা যেহেতু নিজের আসল রূপে টিকে থাকে, বিকৃতির ছোঁয়া ছাড়া, তাই আরেক নবীর ভরাট করার মতো কোনো ফাঁক নেই। রিসালাতের পরিধি আর তার স্থায়িত্ব একসঙ্গেই দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Tidings, Warning, and the Unknowing",
          "bn": "সুসংবাদ, সতর্কতা ও অজ্ঞতা"
        },
        "p": [
          {
            "en": "The two offices named in the verse, bashīr and nadhīr, the commentators read as a matched pair: Ibn Kathir and al-Qurtubi take the bringer of glad tidings to carry the news of Paradise to whoever obeys, and the warner to warn of the Fire whoever disbelieves. as-Sa'di frames the whole task narrowly. The Messenger was sent only to give these tidings and this warning, and to tell people which deeds earn each; beyond that, laysa laka min al-amri shay' — the matter is not yours at all. Whatever the deniers demand of him is not his office; it rests with Allah.",
            "bn": "আয়াতে নাম-নেওয়া দুই দায়িত্ব, বাশীর ও নাযীর, তাফসীরকারেরা পড়েন জোড়া হিসেবে: ইবন কাসীর ও কুরতুবীর কাছে সুসংবাদদাতা জান্নাতের খবর পৌঁছান তার কাছে যে মানে, আর সতর্ককারী জাহান্নামের ভয় শোনান তাকে যে অস্বীকার করে। সাদী গোটা কাজটাকে আঁটসাঁট করে বাঁধেন। রাসূলকে পাঠানো হয়েছে কেবল এই সুসংবাদ ও এই সতর্কতা দিতে, আর মানুষকে জানাতে কোন আমল কোনটি আনে; এর বেশি, লাইসা লাকা মিনাল আমরি শাই, অর্থাৎ বিষয়টা মোটেই তোমার হাতে নয়। অস্বীকারকারীরা তাঁর কাছে যা দাবি করে তা তাঁর দায়িত্ব নয়, তা আল্লাহরই হাতে।"
          },
          {
            "en": "Then the turn: wa lākinna akthara an-nās lā yaʿlamūn, but most of the people do not know. al-Qurtubi reads it as not knowing what is with Allah — these are the idolaters, who in that hour outnumbered the believers. as-Sa'di sharpens it: they have no sound knowledge, being either ignorant or obstinate, men who do not act on what they know, so it is as though they know nothing. From that unknowing, he adds, they turned the Messenger's refusal of their demands into a reason to reject his call. al-Muyassar keeps it simple: not knowing the truth, they turn away from it.",
            "bn": "তারপর মোড়: ওয়া লাকিন্না আকসারান্‌নাসি লা ইয়ালামূন, কিন্তু অধিকাংশ মানুষ জানে না। কুরতুবী একে পড়েন আল্লাহর কাছে যা আছে তা না-জানা হিসেবে—এরা সেই মুশরিক, যারা সে সময় সংখ্যায় মুমিনদের ছাড়িয়ে ছিল। সাদী কথাটা ধারালো করেন: তাদের কোনো খাঁটি জ্ঞান নেই, তারা হয় মূর্খ নয়তো একগুঁয়ে, যারা নিজের জ্ঞান অনুযায়ী আমল করে না, ফলে যেন তাদের কোনো জ্ঞানই নেই। সেই অজ্ঞতা থেকেই, তিনি যোগ করেন, তারা রাসূলের দাবি-অমান্যকে তাঁর ডাক প্রত্যাখ্যানের অজুহাত বানিয়েছে। মুয়াসসার সহজভাবে বলে: সত্য না জেনে তারা তা থেকে মুখ ফিরিয়ে নেয়।"
          },
          {
            "en": "So the verse closes not on the crowd but on a quiet fact about it: the call is sent to all, and most of those it is sent to never learn that it is. That leaves the reader who does know in a particular place. To read the word kāffah rightly is to see oneself standing inside it, not to marvel that the message is vast but to feel that it is addressed. What the verse asks of such a reader is small and exact: to take the news as meant for him, and to pass it on to the age the mission had already reached past him toward.",
            "bn": "তাই আয়াত শেষ হয় ভিড়ের উপর নয়, বরং ভিড় সম্পর্কে এক নীরব সত্যের উপর: ডাক সবার কাছে পাঠানো, অথচ যাদের কাছে, তাদের বেশির ভাগ কখনো জানেই না যে তা তাদের উদ্দেশে। এতে যে জানে তার জায়গা হয় আলাদা। কাফ্‌ফাহ শব্দটা ঠিকভাবে পড়া মানে নিজেকে তার ভেতরে দাঁড়িয়ে থাকতে দেখা; বার্তা বিশাল বলে অবাক হওয়া নয়, বরং টের পাওয়া যে তা সম্বোধন। এমন পাঠকের কাছে আয়াতের চাওয়া ছোট আর নির্দিষ্ট: খবরটাকে নিজের জন্য আসা বলে গ্রহণ করা, আর তা তুলে দেওয়া সেই যুগের হাতে, রিসালাত আগেই যার দিকে আমাদের ছাড়িয়ে পৌঁছেছিল।"
          }
        ]
      }
    ]
  },
  "34:34": {
    "sections": [
      {
        "h": {
          "en": "The Warner and the Comfortable",
          "bn": "সতর্ককারী ও আরামপ্রিয়রা"
        },
        "p": [
          {
            "en": "The verse opens with a sweeping negation that hardens into a law of history. And We did not send into a town any warner except that its affluent said, Indeed we, in that with which you were sent, are disbelievers. The construction leaves nothing outside it: not one town, not one warner, escapes the rule. The commentators read the opening as Allah consoling His Prophet. The rejection he was meeting in Makkah was no fresh misfortune aimed at him alone. It was the oldest reflex of the comfortable, repeated in every town a warner had ever entered.",
            "bn": "আয়াতের শুরুটা এক ব্যাপক অস্বীকৃতি দিয়ে, যা শেষে ইতিহাসের নিয়মে রূপ নেয়। আমি যখনই কোনো জনপদে সতর্ককারী পাঠিয়েছি, সেখানকার বিত্তবানরা বলেছে, তোমাদেরকে যা দিয়ে পাঠানো হয়েছে আমরা তা অস্বীকার করছি। বাক্যগঠন এমন যে কিছুই এর বাইরে থাকে না, একটি জনপদও না, একজন সতর্ককারীও না। তাফসিরকারেরা শুরুর কথাটিকে পড়েন নবী ﷺ-কে সান্ত্বনা দেওয়া হিসেবে। মক্কায় তিনি যে অস্বীকৃতির মুখে পড়ছিলেন, তা কেবল তাঁর উপর নেমে আসা নতুন কোনো বিপদ ছিল না। এ ছিল আরামে থাকা মানুষের সবচেয়ে পুরনো অভ্যাস, যা প্রতিটি জনপদে সতর্ককারী এলেই ফিরে এসেছে।"
          },
          {
            "en": "At-Tabari paraphrases the warner as someone who warns a people of Allah's punishment should they persist in disobeying Him, and names the speakers of refusal as its great ones and its chiefs in misguidance. The warning and the refusal are set side by side on purpose. A warner's whole message is that this life is answerable, that ease is held on loan and a reckoning is coming. The people most heavily invested in the present arrangement are exactly the ones who least want to be told that the arrangement will end.",
            "bn": "তাবারী সতর্ককারীর অর্থ বোঝান এভাবে, যিনি কোনো জাতিকে সতর্ক করেন যে নাফরমানিতে অটল থাকলে আল্লাহর শাস্তি নেমে আসবে। আর অস্বীকারকারীদের তিনি চেনান জনপদের বড় লোক ও বিভ্রান্তির নেতা হিসেবে। সতর্কবাণী আর অস্বীকৃতি পাশাপাশি রাখা হয়েছে উদ্দেশ্য করেই। সতর্ককারীর গোটা কথাটাই হলো, এই জীবনের হিসাব দিতে হবে, আরাম ধার দেওয়া জিনিস, আর হিসাবের দিন আসছে। যারা বর্তমান অবস্থায় সবচেয়ে বেশি বিনিয়োগ করে বসে আছে, তারাই শুনতে চায় না যে এই অবস্থা একদিন শেষ হবে।"
          },
          {
            "en": "The commentators also stress what kind of figure a nadhir is. A warner is not first of all a bringer of good news but a sentry who cries danger: a reckoning is on its way, and the life you have built is not the whole of the account. That message is least welcome where life already feels settled and secure. So the verse frames the Prophet's rejection not as a personal failure at all, but as the ordinary price of carrying a warning into a town grown comfortable in its own forgetting.",
            "bn": "তাফসিরকারেরা এ-ও মনে করিয়ে দেন, নাযীর বা সতর্ককারী কেমন মানুষ। সতর্ককারী সবার আগে সুসংবাদদাতা নন, বরং পাহারাদার, যিনি বিপদের ডাক দেন। হিসাব আসছে, আর আপনি যে জীবন গড়ে তুলেছেন সেটাই পুরো হিসাব নয়। এই কথা সেখানেই সবচেয়ে অপছন্দের, যেখানে জীবন ইতিমধ্যে থিতু আর নিশ্চিন্ত। তাই আয়াত নবী ﷺ-এর প্রতি অস্বীকৃতিকে তাঁর কোনো ব্যর্থতা হিসেবে দেখায় না। দেখায় নিজের ভুলে অভ্যস্ত হয়ে পড়া এক আরামপ্রিয় জনপদে সতর্কবাণী বয়ে নেওয়ার সাধারণ মূল্য হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Mutrafun Are",
          "bn": "মুতরাফ আসলে কারা"
        },
        "p": [
          {
            "en": "The word the verse uses for them is mutrafun, and the commentators are unusually agreed on its weight. Ibn Kathir glosses them as the people of comfort, pomp, wealth and leadership, while al-Baghawi and al-Qurtubi both read mutrafuha simply as its chiefs and its rich. The Muyassar is blunter still, rendering them as those immersed in pleasures and desires. The root is taraf, a life abounding in ease and plenty. A mutraf, then, is not merely a man with money, but someone whom plenty has softened, spoiled and lulled.",
            "bn": "আয়াত তাদের জন্য যে শব্দ ব্যবহার করে তা হলো মুতরাফ, আর এর ভার নিয়ে তাফসিরকারেরা বিরল এক ঐকমত্যে পৌঁছান। ইবন কাসীর তাদের বোঝান আরাম, জাঁকজমক, সম্পদ আর নেতৃত্বের অধিকারী হিসেবে। বাগভী ও কুরতুবী দুজনেই মুতরাফদের পড়েন সোজা কথায় জনপদের নেতা আর বিত্তবান বলে। মুয়াসসার আরও খোলাখুলি, তাদের বলে ভোগ আর কামনায় ডুবে থাকা মানুষ। মূল ধাতু তারাফ, মানে আরাম আর প্রাচুর্যে ভরা জীবন। তাই মুতরাফ কেবল টাকাওয়ালা লোক নয়, বরং এমন কেউ যাকে প্রাচুর্য নরম করেছে, নষ্ট করেছে, আর আচ্ছন্ন করে রেখেছে।"
          },
          {
            "en": "So the verse is not naming a bank balance; it is naming a condition of the heart. Qatadah, quoted by both at-Tabari and al-Qurtubi, sharpens the picture to their tyrants, their leaders and their heads in evil. Ma'arif al-Qur'an draws the same thread out: the word denotes the rich of a community who have grown arrogant and careless about what is right and what is wrong. Wealth here has done something to the person. It has bred a sense of entitlement that meets any call to accountability as if it were a personal insult.",
            "bn": "তাই আয়াত কোনো ব্যাংক ব্যালেন্সের নাম নিচ্ছে না, নিচ্ছে হৃদয়ের এক অবস্থার নাম। কাতাদা, যাঁকে তাবারী ও কুরতুবী দুজনেই উদ্ধৃত করেন, ছবিটা আরও তীক্ষ্ণ করেন, বলেন এরা জনপদের স্বৈরাচারী, নেতা আর অনিষ্টের হোতা। মাআরিফুল কুরআন একই সুতো টেনে আনে, বলে এই শব্দ বোঝায় সমাজের সেই ধনীদের, যারা অহংকারী হয়ে উঠেছে আর ভালো-মন্দের তোয়াক্কা করে না। এখানে সম্পদ মানুষটির ভেতরে কিছু একটা ঘটিয়ে দিয়েছে। জন্ম দিয়েছে এমন এক অধিকারবোধ, যা হিসাবের যেকোনো ডাককে নেয় যেন তা ব্যক্তিগত অপমান।"
          }
        ]
      },
      {
        "h": {
          "en": "When Ease Turns Insolent",
          "bn": "আরাম যখন অহংকার হয়"
        },
        "p": [
          {
            "en": "As-Sa'di states the mechanism in a single compact line. When Allah sends a messenger to a town, he writes, its mutrafun reject him, and their comfort made them insolent, and they boasted of it. That is the whole arc in a single sentence: bounty, then insolence, then boasting. The blessing that should have bent them low in gratitude instead puffed them up. Ease did not merely leave them indifferent to the warner. It actively armoured them against him, because to receive him would mean admitting that their comfort was a trust, and not a trophy to parade.",
            "bn": "আস-সাদী এই কলকবজাটা বলে দেন এক সংক্ষিপ্ত বাক্যে। তিনি লেখেন, আল্লাহ যখন কোনো জনপদে বার্তাবাহক পাঠান, তার মুতরাফরা তাঁকে অস্বীকার করে, তাদের আরাম তাদের ঔদ্ধত্যে ভরিয়ে তোলে, আর তারা তা নিয়ে গর্ব করে। পুরো পথটা এক বাক্যেই, নিয়ামত, তারপর ঔদ্ধত্য, তারপর বড়াই। যে নিয়ামতের তাদের কৃতজ্ঞতায় নুইয়ে দেওয়ার কথা ছিল, তা উল্টো তাদের ফুলিয়ে তুলল। আরাম তাদের কেবল সতর্ককারীর ব্যাপারে উদাসীন করেই থামেনি। তাদের তাঁর বিরুদ্ধে বর্ম পরিয়ে দিয়েছিল, কারণ তাঁকে মেনে নেওয়া মানে স্বীকার করা যে তাদের আরাম এক আমানত, দেখিয়ে বেড়ানোর কোনো পুরস্কার নয়।"
          },
          {
            "en": "This is why the pattern proves so stubborn across the ages. A warner asks a person to hold his wealth loosely, to answer for how it was earned and how it was spent, and to bow before Someone higher than himself. For a heart that has quietly made comfort its measure of worth, every one of those words lands as a threat. Poverty has little to defend, so it can afford to hear a new claim on its life. Luxury has everything to defend, and so it reaches, almost by reflex, for the oldest defence there is: we disbelieve.",
            "bn": "এ কারণেই যুগে যুগে এই ধারা এত একগুঁয়ে থেকে যায়। সতর্ককারী একজন মানুষকে বলেন তার সম্পদ আলগা হাতে ধরতে, কীভাবে তা আয় হলো আর কীভাবে খরচ হলো তার জবাব দিতে, আর নিজের চেয়ে উঁচু কারও সামনে মাথা নোয়াতে। যে হৃদয় চুপচাপ আরামকেই নিজের মূল্যের মাপকাঠি বানিয়ে ফেলেছে, তার কাছে এর প্রতিটি কথা এসে পড়ে হুমকি হয়ে। গরিবের রক্ষা করার তেমন কিছু নেই, তাই সে তার জীবনের উপর নতুন এক দাবি শুনতে পারে। আরামের রক্ষা করার আছে সবকিছু, তাই সে প্রায় সহজাতভাবেই হাত বাড়ায় সবচেয়ে পুরনো প্রতিরক্ষার দিকে, আমরা মানি না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Faces Everywhere",
          "bn": "প্রতি জনপদে একই দল"
        },
        "p": [
          {
            "en": "Ibn Kathir reads this verse as an instance of a type the Qur'an draws again and again, and he lines the parallels up. The people of Nuh sneered, Shall we believe in you when the lowest of people follow you (26:111). The arrogant chiefs of Salih's people told the weak believers among them, Indeed we disbelieve in that which you believe (7:75 and 7:76), the very wording that echoes here. And when a town is marked for ruin, Allah says He commands its mutrafin, who then transgress in it until the word of punishment falls due upon it (17:16).",
            "bn": "ইবন কাসীর এই আয়াতকে পড়েন এমন এক ধরনের নমুনা হিসেবে, যা কুরআন বারবার আঁকে, আর তিনি মিলগুলো সাজিয়ে দেন। নূহ (আঃ)-এর জাতি বিদ্রূপ করেছিল, আমরা কি তোমার উপর বিশ্বাস করব, যখন নিচু লোকেরা তোমার অনুসরণ করছে (২৬:১১১)। সালিহ (আঃ)-এর জাতির অহংকারী নেতারা তাদের ভেতরকার দুর্বল মুমিনদের বলেছিল, তোমরা যাতে বিশ্বাস করেছ আমরা তা অস্বীকার করছি (৭:৭৫ ও ৭:৭৬), ঠিক যে কথা এখানে প্রতিধ্বনিত হয়। আর যখন কোনো জনপদ ধ্বংসের জন্য চিহ্নিত হয়, আল্লাহ বলেন তিনি তার মুতরাফদের আদেশ দেন, এরপর তারা তাতে সীমা ছাড়ায় যতক্ষণ না শাস্তির ফয়সালা তার উপর অনিবার্য হয় (১৭:১৬)।"
          },
          {
            "en": "This surah had already shown the scene in close-up. A few verses earlier, on the Day of Judgement, the weak who were led astray turn on those who were arrogant over them, and the arrogant deny they ever blocked the road, insisting the weak were criminals of their own accord (34:31 and 34:32). Here the Qur'an names who those arrogant ones were while the towns still stood. They were the mutrafun, the people with the most to lose, setting the tone of refusal that the crowd beneath them would then take up and follow.",
            "bn": "এই সূরা আগেই দৃশ্যটা কাছ থেকে দেখিয়েছে। কয়েক আয়াত আগে, বিচারের দিনে, যেসব দুর্বলকে বিপথে নেওয়া হয়েছিল তারা তাদের উপর অহংকার করা লোকদের দিকে ফেরে, আর অহংকারীরা অস্বীকার করে যে তারা কখনো পথ আটকেছিল, বলে দুর্বলরা নিজেরাই ছিল অপরাধী (৩৪:৩১ ও ৩৪:৩২)। এখানে কুরআন বলে দেয় সেই অহংকারীরা কারা ছিল, যখন জনপদগুলো তখনো দাঁড়িয়ে। তারাই ছিল মুতরাফ, যাদের হারানোর ছিল সবচেয়ে বেশি, আর তারাই ঠিক করত অস্বীকারের সুর, যা তাদের নিচের ভিড় এরপর তুলে নিয়ে অনুসরণ করত।"
          }
        ]
      },
      {
        "h": {
          "en": "Heraclius Questions Abu Sufyan",
          "bn": "হিরাক্লিয়াস ও আবু সুফিয়ান"
        },
        "p": [
          {
            "en": "The clearest living commentary on this verse is a scene Ibn Kathir himself attaches to it, recorded in Sahih al-Bukhari (no. 7). When Heraclius, the Byzantine emperor, summoned Abu Sufyan, then still an enemy of Islam, he put a long series of questions to him about the Prophet. Among them was this one: do the nobles follow him, or the poor? Abu Sufyan answered truthfully, it is the poor who follow him. Heraclius then drew the conclusion himself: all the apostles have been followed by this very class of people. He had read the old scriptures and saw the pattern at once.",
            "bn": "এই আয়াতের সবচেয়ে স্পষ্ট জীবন্ত ব্যাখ্যা এমন এক দৃশ্য, যা ইবন কাসীর নিজেই এর সঙ্গে জুড়ে দেন, আর তা আছে সহীহ বুখারীতে (৭ নং)। রোমসম্রাট হিরাক্লিয়াস যখন আবু সুফিয়ানকে ডেকে পাঠান, তিনি তখনো ইসলামের শত্রু, সম্রাট নবী ﷺ সম্পর্কে তাঁকে অনেকগুলো প্রশ্ন করেন। তার একটি ছিল, অভিজাতরা কি তাঁর অনুসরণ করে, নাকি গরিবরা? আবু সুফিয়ান সত্য জবাব দেন, গরিবরাই তাঁর অনুসরণ করে। এরপর হিরাক্লিয়াস নিজেই সিদ্ধান্তে আসেন, সব নবীর অনুসারী হয়েছে এই শ্রেণির মানুষই। তিনি পুরনো কিতাব পড়েছিলেন, তাই ধরনটা সঙ্গে সঙ্গে চিনে ফেলেন।"
          },
          {
            "en": "The point is not that poverty is holy or that wealth is sin. It is that the first to answer a messenger are usually those with nothing invested in the old order, and the last are those who profit from keeping it. Heraclius grasped this as a proof that the Prophet was true. The mutrafun of Makkah took the very same fact and read it backwards, turning the plainness of the early Muslims into a reason for contempt. One man saw the sign and leaned toward it; the others saw it and sneered, and the difference between them was the heart, not the income.",
            "bn": "কথাটা এই নয় যে দারিদ্র্য পবিত্র বা সম্পদ গুনাহ। কথাটা হলো, বার্তাবাহকের ডাকে প্রথমে সাড়া দেয় সাধারণত তারাই, পুরনো ব্যবস্থায় যাদের কিছু বিনিয়োগ নেই। আর সবশেষে সাড়া দেয় তারা, এই ব্যবস্থা টিকিয়ে রেখে যারা মুনাফা পায়। হিরাক্লিয়াস একে নিলেন নবী ﷺ-এর সত্য হওয়ার প্রমাণ হিসেবে। মক্কার মুতরাফরা ঠিক একই তথ্য নিল, কিন্তু উল্টো করে পড়ল, প্রথম মুসলিমদের সাদামাটা হওয়াকে বানাল অবজ্ঞার কারণ। একজন নিদর্শন দেখে তার দিকে ঝুঁকল, বাকিরা দেখে বিদ্রূপ করল। তাদের তফাতটা ছিল হৃদয়ে, আয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Behind the Verse",
          "bn": "আয়াত নাজিলের পেছনের ঘটনা"
        },
        "p": [
          {
            "en": "Ibn Kathir reports, on the authority of Ibn Abi Hatim, an occasion for the verse. Two business partners worked together; one travelled to the coast while the other stayed. When the Prophet was sent, the man on the coast wrote asking who had followed him, and his partner replied that none of the Quraysh had, only the poor and lowly. The traveller, who studied the earlier scriptures, left his trade and came to the Prophet. Hearing his call, he declared, I bear witness that you are the Messenger of Allah; asked how he knew, he said no prophet is first followed except by the weak and the poor.",
            "bn": "ইবন কাসীর ইবন আবী হাতিমের সূত্রে আয়াত নাজিলের একটি উপলক্ষ বর্ণনা করেন। দুই ব্যবসায়ী অংশীদার একসঙ্গে কাজ করতেন, একজন উপকূলে চলে যান আর অন্যজন থেকে যান। নবী ﷺ প্রেরিত হলে উপকূলের লোকটি চিঠি লিখে জানতে চান কারা তাঁর অনুসরণ করছে, আর তাঁর সঙ্গী জবাবে লেখেন কুরাইশের কেউ করেনি, শুধু নিচু আর গরিব লোকেরা করেছে। সেই পর্যটক, যিনি আগের কিতাবগুলো পড়তেন, ব্যবসা ছেড়ে নবী ﷺ-এর কাছে এসে তাঁর ডাক শোনেন, আর তখনই বলে ওঠেন, আমি সাক্ষ্য দিচ্ছি আপনি আল্লাহর রাসূল। কীভাবে জানলেন জিজ্ঞেস করা হলে তিনি বলেন, কোনো নবীর অনুসারী প্রথমে হয় কেবল দুর্বল আর গরিবরাই।"
          },
          {
            "en": "This report reaches only a Successor and so is mursal rather than fully connected, and it is a commentary narration, not the basis of any ruling. Ma'arif al-Qur'an relays it from Ibn Kathir and Mazhari in the same spirit. What it illustrates is the verse's own logic read from the other side. The believing traveller treated the poverty of the first Muslims as a seal of the message's truth, which is precisely the reading the town's affluent refused. The same plain fact divides the humble heart from the mutraf one, and sends each to an opposite verdict.",
            "bn": "এই বর্ণনা কেবল এক তাবিয়ি পর্যন্ত পৌঁছায়, তাই এটি পূর্ণ সংযুক্ত নয় বরং মুরসাল, আর এটি একটি তাফসিরি বর্ণনা, কোনো বিধানের ভিত্তি নয়। মাআরিফুল কুরআন একে ইবন কাসীর ও মাজহারী থেকে একই সুরে বর্ণনা করে। এটি যা দেখায় তা হলো আয়াতের নিজের যুক্তি, উল্টো দিক থেকে পড়া। বিশ্বাসী পর্যটক প্রথম মুসলিমদের দারিদ্র্যকে নিলেন বার্তার সত্য হওয়ার সিলমোহর হিসেবে, ঠিক যে পাঠটা জনপদের বিত্তবানরা মানতে চায়নি। একই সাদামাটা তথ্য বিনয়ী হৃদয়কে মুতরাফ হৃদয় থেকে আলাদা করে, আর দুজনকে পাঠায় উল্টো দুই রায়ের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Spares",
          "bn": "আয়াত কাকে দোষ দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly, because the verse is easy to misuse. It condemns a posture, not a possession. What Allah censures here is the mutraf attitude: the arrogance bred by ease, the heedless appetite for luxury, the reflex to fight any truth that asks something of you. It does not condemn wealth itself. Wealth earned honestly and spent rightly is nowhere blamed in the Qur'an, and this verse gives no warrant to despise the rich as a class, nor to assume that a comfortable person must be an enemy of the truth.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, কারণ আয়াতটির অপব্যবহার সহজ। এটি দোষ দেয় এক মনোভাবকে, কোনো সম্পদকে নয়। আল্লাহ এখানে নিন্দা করছেন মুতরাফ মনোভাবকে, আরাম থেকে জন্মানো অহংকার, ভোগের বেহুঁশ ক্ষুধা, আর যে সত্য কিছু চায় তার সঙ্গে লড়ার অভ্যাসকে। তিনি সম্পদকে নিজে দোষ দেন না। সৎভাবে আয় করা আর ঠিকভাবে খরচ করা সম্পদকে কুরআন কোথাও দোষারোপ করে না। আর এই আয়াত ধনীদের একটা শ্রেণি হিসেবে ঘৃণা করার কোনো অনুমতি দেয় না, এটা ধরে নেওয়ারও অনুমতি দেয় না যে আরামে থাকা মানুষমাত্রই সত্যের শত্রু।"
          },
          {
            "en": "The surah itself guards against the misreading. A couple of verses on, Allah says it is not your wealth or your children that bring you nearer to Us in position, but rather one who has believed and done righteousness (34:37). Wealth is not the measure, in either direction; faith and action are. The warning is against letting riches become the thing you serve and defend, not against owning them at all. A believer can be wealthy and humble before his Lord, just as a poor man can be arrogant, grasping and hard. The heart, not the ledger, is what is on trial.",
            "bn": "সূরা নিজেই এই ভুল পাঠের বিরুদ্ধে পাহারা দেয়। কয়েক আয়াত পরেই আল্লাহ বলেন, তোমাদের ধন বা সন্তান তোমাদের আমার নিকটবর্তী করে না, বরং যে ঈমান আনে আর সৎকাজ করে সে-ই করে (৩৪:৩৭)। সম্পদ কোনো দিক থেকেই মাপকাঠি নয়, মাপকাঠি ঈমান আর আমল। সতর্কবাণী ধন অর্জনের বিরুদ্ধে নয়, বরং ধনকে সেই জিনিস বানিয়ে ফেলার বিরুদ্ধে যার সেবা আর রক্ষা আপনি করেন। একজন মুমিন ধনী হয়েও রবের সামনে বিনয়ী থাকতে পারে, যেমন একজন গরিব হতে পারে অহংকারী, লোভী আর কঠিন। বিচারে আছে হৃদয়, হিসাবের খাতা নয়।"
          },
          {
            "en": "Ibn Kathir, closing this passage, cites the Prophet's words, which he reports from the collection of Muslim, that Allah does not look at your forms or your wealth, but He looks at your hearts and your deeds. That one line sets the verse straight. The mutrafun were not condemned for owning things but for what the owning had done inside them, and for the boast that follows in the very next verse, where they claim their greater wealth and children prove that they will never be the ones punished (34:35).",
            "bn": "ইবন কাসীর এই অংশ শেষ করতে গিয়ে নবী ﷺ-এর কথা উদ্ধৃত করেন, যা তিনি মুসলিমের সংকলন থেকে বর্ণনা করেন, আল্লাহ তোমাদের চেহারা বা সম্পদের দিকে তাকান না, তিনি তাকান তোমাদের হৃদয় আর আমলের দিকে। এই একটি কথা আয়াতটিকে সোজা করে দেয়। মুতরাফদের দোষ দেওয়া হয়নি জিনিস রাখার জন্য, বরং সেই রাখা তাদের ভেতরে যা ঘটিয়েছে তার জন্য, আর ঠিক পরের আয়াতের সেই বড়াইয়ের জন্য, যেখানে তারা দাবি করে তাদের বেশি ধন আর সন্তানই প্রমাণ যে তারা কখনো শাস্তি পাবে না (৩৪:৩৫)।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror for the Secure",
          "bn": "নিশ্চিন্তদের জন্য এক আয়না"
        },
        "p": [
          {
            "en": "The verse is a diagnosis, and the honest reader turns it inward. Most of us are not tyrants of a town, yet most of us hold some comfort we would fight to keep, some arrangement of life we would rather not have questioned too closely. The test it sets is simple. When a reminder reaches me that my time, my money and my ease are a trust I will answer for, is my first instinct to receive it, or to go looking for the reason it does not quite apply to me? That reflex is the mutraf in miniature.",
            "bn": "আয়াতটি রোগ ধরিয়ে দেয়, আর সৎ পাঠক তা নিজের দিকে ফেরান। আমাদের বেশির ভাগই কোনো জনপদের স্বৈরাচারী নই, তবু আমাদের বেশির ভাগেরই এমন কিছু আরাম আছে যা রাখতে আমরা লড়তে রাজি, জীবনের এমন কোনো সাজানো অবস্থা আছে যা নিয়ে কেউ বেশি ঘাঁটুক তা চাই না। আয়াত যে পরীক্ষা রাখে তা সহজ। আমার সময়, আমার টাকা আর আমার আরাম যে আমানত, যার হিসাব দিতে হবে, এ কথা কানে এলে আমার প্রথম ঝোঁক কি তা গ্রহণ করা, নাকি খুঁজতে বের হওয়া কেন এটা ঠিক আমার বেলায় খাটে না? সেই ঝোঁকটাই ছোট আকারের মুতরাফ।"
          },
          {
            "en": "The mercy in the warning is that the pattern can be broken. The traveller from the coast had a comfortable trade and left it the moment the truth became clear to him. The poor who followed the prophets had far less to surrender, but the door they walked through stands open to anyone willing to hold his comfort with a loose hand. To receive a warner gladly, to let a claim on your life land rather than deflect it, is to step out of the oldest refusal in history and onto the side of the few who stopped and listened.",
            "bn": "সতর্কবাণীর ভেতরের রহমত হলো, এই ধারা ভাঙা যায়। উপকূলের সেই পর্যটকের আরামের ব্যবসা ছিল, আর সত্য স্পষ্ট হওয়ামাত্র তিনি তা ছেড়ে দিয়েছিলেন। নবীদের অনুসরণ করা গরিবদের ছাড়ার মতো ছিল আরও কম, কিন্তু তারা যে দরজা দিয়ে ঢুকেছিল তা খোলা আছে তাদের সবার জন্য, যারা নিজের আরাম আলগা হাতে ধরতে রাজি। সতর্ককারীকে খুশি মনে গ্রহণ করা, জীবনের উপর আসা দাবিকে সরিয়ে না দিয়ে বুকে পড়তে দেওয়া, এটাই ইতিহাসের সবচেয়ে পুরনো অস্বীকৃতি থেকে বেরিয়ে আসা, আর সেই অল্প কজনের দলে দাঁড়ানো যারা থেমে কান পেতেছিল।"
          }
        ]
      }
    ]
  },
  "34:39": {
    "sections": [
      {
        "h": {
          "en": "The Boast Being Answered",
          "bn": "যে গর্বের জবাব দেওয়া হচ্ছে"
        },
        "p": [
          {
            "en": "The passage begins with a pattern. 34:34 says no warner was ever sent into a town without its affluent saying: we are disbelievers in what you have been sent with. 34:35 gives their reason, and it is an argument from a balance sheet: we are greater in wealth and children, and we are not going to be punished. Prosperity is being offered as evidence of divine approval, and the verses that follow take that claim apart.",
            "bn": "অংশটি শুরু হয় একটি পুনরাবৃত্ত ছকে। 34:34 আয়াত বলে, কোনো জনপদে এমন কোনো সতর্ককারী পাঠানো হয়নি যার বিত্তবানেরা বলেনি: তোমাকে যা দিয়ে পাঠানো হয়েছে আমরা তা অস্বীকার করি। 34:35 আয়াত তাদের যুক্তিটি দেয়, আর তা এক হিসাবের খাতা থেকে তোলা: আমরা সম্পদে ও সন্তানে বেশি, আর আমাদের শাস্তি দেওয়া হবে না। সমৃদ্ধিকে পেশ করা হচ্ছে ঐশী সন্তুষ্টির প্রমাণ হিসেবে — আর পরের আয়াতগুলো সেই দাবিটিকেই খুলে ফেলে।"
          },
          {
            "en": "34:36 answers first: say, my Lord extends provision for whom He wills and restricts it, but most of the people do not know. 34:37 removes the premise itself: it is not your wealth or your children that bring you nearer to Us in rank, but faith and righteous work. Then, two verses later, this verse repeats the sentence about provision a second time, and the repetition is the method — the same premise stated twice, the second time with a door left open in it.",
            "bn": "প্রথম জবাব দেয় 34:36: বলো, আমার প্রতিপালক যার জন্য চান রিযিক প্রশস্ত করেন আর সংকুচিত করেন, কিন্তু অধিকাংশ মানুষ জানে না। 34:37 আয়াত মূল ভিত্তিটিই সরিয়ে দেয়: তোমাদের সম্পদ বা সন্তান তোমাদের মর্যাদায় আমার নিকটবর্তী করে না, বরং ঈমান ও সৎকর্মই করে। এরপর দুই আয়াত পরে এই আয়াতটি রিযিকের বাক্যটি দ্বিতীয়বার বলে — আর এই পুনরাবৃত্তিই এর পদ্ধতি: একই ভিত্তি দুবার বলা, দ্বিতীয়বার তার ভেতরে একটি দরজা খোলা রেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Spread Out and Measured",
          "bn": "প্রশস্ত করা ও মেপে দেওয়া"
        },
        "p": [
          {
            "en": "Yabsutu is from basata, to spread a thing out flat — the root behind bisat, a carpet unrolled. Yaqdiru here is to measure narrowly, from the root of qadar. The pair is not generosity against punishment; it is wide against measured, both acts of the same measuring hand. Only the first verb is given a recipient: for whom He wills of His servants. The second says simply and restricts for him, returning the pronoun to the same person — so the verse is not sorting humanity into two groups but describing what happens to one servant across a life.",
            "bn": "'ইয়াবসুতু' এসেছে 'বাসাতা' থেকে, অর্থাৎ কোনো কিছু বিছিয়ে দেওয়া — এই ধাতু থেকেই আসে 'বিসাত', বিছানো গালিচা। আর এখানে 'ইয়াকদিরু' মানে সংকুচিত করে মেপে দেওয়া, ভাগ করে দেওয়া; এর ধাতু 'কাদর'। জোড়াটি উদারতা বনাম শাস্তি নয়; এটি প্রশস্ত বনাম মাপা — দুটিই একই মাপনেওয়ালা হাতের কাজ। আরও লক্ষ করুন, প্রাপকের উল্লেখ আছে কেবল প্রথম ক্রিয়ার সঙ্গে: তাঁর বান্দাদের মধ্যে যার জন্য তিনি চান। দ্বিতীয়টি শুধু বলে 'আর তার জন্য সংকুচিত করেন', সর্বনামটিকে সেই একই মানুষের দিকেই ফিরিয়ে দিয়ে — ফলে আয়াতটি মানুষকে প্রশস্ত ও সংকীর্ণ দুই দলে ভাগ করছে না, বরং বলছে একজন বান্দার জীবনজুড়ে কী ঘটে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Yukhlifuh",
          "bn": "'ইউখলিফুহু' শব্দটি"
        },
        "p": [
          {
            "en": "The promise is two words: fahuwa yukhlifuh. The verb is the fourth form of khalafa, to come after or to succeed; khalaf is the noun for what takes the place of something gone, and khalifa is one who comes after another. So yukhlifuh does not say He will reward it, and it does not say He will multiply it. It says He will put something in its place. The gap the spending left is what is being addressed.",
            "bn": "প্রতিশ্রুতিটি দুটি শব্দ: ফাহুয়া ইউখলিফুহ। ক্রিয়াপদটি 'খালাফা'র চতুর্থ গঠন, যার অর্থ পরে আসা বা স্থলাভিষিক্ত হওয়া; 'খালাফ' হলো সেই বিশেষ্য যা বোঝায় হারিয়ে যাওয়া কোনো কিছুর জায়গা নেওয়া জিনিসকে, আর 'খলীফা' মানে যে অন্যের পরে আসে। সুতরাং 'ইউখলিফুহ' বলছে না যে তিনি এর প্রতিদান দেবেন, বলছে না যে তিনি একে বহুগুণ করবেন। এটি বলছে, তিনি এর জায়গায় কিছু বসিয়ে দেবেন। ব্যয়ের ফলে যে শূন্যস্থানটি তৈরি হলো, সম্বোধন করা হচ্ছে সেটিকেই।"
          },
          {
            "en": "Arabic uses the same verb with a promise as its object to mean the opposite service. 30:6 says la yukhlifu Allahu wa'dah, Allah does not fail His promise — there the verb is about leaving a place empty where something was owed. Here the object is a thing spent, and the verb fills the place that thing left. The word carries both directions, and this verse chooses the direction in which something arrives.",
            "bn": "আরবিতে একই ক্রিয়াপদ যখন কোনো ওয়াদাকে কর্ম হিসেবে নেয়, তখন তা উল্টো কাজটি বোঝায়। 30:6 আয়াত বলে 'লা ইউখলিফুল্লাহু ওয়াদাহ' — আল্লাহ তাঁর ওয়াদা ভঙ্গ করেন না; সেখানে ক্রিয়াপদটির অর্থ পাওনা জায়গাটিকে খালি রেখে দেওয়া। এখানে কর্মটি হলো ব্যয় করা একটি জিনিস, আর ক্রিয়াপদটি সেই জিনিসের ছেড়ে যাওয়া জায়গাটি ভরে দেয়। শব্দটি দুই দিকই বহন করে, আর এই আয়াত বেছে নেয় সেই দিকটি যেদিকে কিছু এসে পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "I Will Spend on You",
          "bn": "আমি তোমার ওপর ব্যয় করব"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Abu Hurayrah (RA) that the Prophet ﷺ said: Allah said, spend, and I will spend on you. The wording keeps the same verb on both sides of the exchange, exactly as the verse does with khalafa. It is not phrased as giving met with reward, which would be two different acts. It is phrased as one act performed twice, once by a servant and once by his Lord.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম উভয়েই আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: আল্লাহ বলেন, ব্যয় করো, আমি তোমার ওপর ব্যয় করব। শব্দচয়নটি বিনিময়ের দুই পাশেই একই ক্রিয়াপদ ধরে রাখে — ঠিক যেভাবে আয়াতটি 'খালাফা' নিয়ে করে। এটিকে এভাবে বলা হয়নি যে দান করা হলো আর তার বদলে প্রতিদান এল, যা হতো দুটি আলাদা কাজ। বলা হয়েছে একটিমাত্র কাজ দুবার সম্পন্ন হওয়ার ভাষায় — একবার বান্দার হাতে, একবার তার প্রতিপালকের হাতে।"
          },
          {
            "en": "This is also where the verse sits apart from the better-known parable of the seed. 2:261 answers giving with multiplication, seven ears of a hundred grains each. This verse answers it with succession instead. Multiplication tells you the harvest will be larger than the sowing; replacement tells you the hole will not stay open. The first speaks to ambition, and the second to the fear that actually stops most hands.",
            "bn": "এখানেই আয়াতটি বীজের সেই সুপরিচিত উপমা থেকে আলাদা হয়ে দাঁড়ায়। 2:261 আয়াত দানের জবাব দেয় বহুগুণ বৃদ্ধি দিয়ে — সাতটি শীষ, প্রতিটিতে একশত দানা। এই আয়াত জবাব দেয় স্থলাভিষিক্ত করা দিয়ে। বহুগুণ বৃদ্ধি জানায়, ফসল বীজের চেয়ে বড় হবে; আর প্রতিস্থাপন জানায়, গর্তটি খোলা থাকবে না। প্রথমটি কথা বলে উচ্চাকাঙ্ক্ষার সঙ্গে, আর দ্বিতীয়টি সেই ভয়ের সঙ্গে যা আসলে বেশিরভাগ হাতকে থামিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whatever You Spend of Anything",
          "bn": "যা কিছুই তোমরা ব্যয় করো"
        },
        "p": [
          {
            "en": "Wa ma anfaqtum min shay'in. Min shay'in is left deliberately unbounded — of any thing at all — so the promise attaches to the act and not to the amount. The address also widens: the verse opens with qul, an instruction to the Prophet ﷺ to say it, and then anfaqtum is plural, turning to everyone listening. And the spending is put in the perfect tense, which after a conditional word carries future meaning, so the giving is grammatically finished before the replacement is mentioned.",
            "bn": "ওয়া মা আনফাকতুম মিন শাইইন। 'মিন শাইইন' ইচ্ছাকৃতভাবেই সীমাহীন রাখা হয়েছে — যা কিছুই হোক — ফলে প্রতিশ্রুতিটি যুক্ত হয় কাজের সঙ্গে, পরিমাণের সঙ্গে নয়। সম্বোধনও প্রশস্ত হয়: আয়াত শুরু হয় 'কুল' দিয়ে, অর্থাৎ নবী ﷺ-কে বলার নির্দেশ, আর তারপর 'আনফাকতুম' বহুবচনে এসে ফিরে যায় প্রত্যেক শ্রোতার দিকে। আর ব্যয় করাকে রাখা হয়েছে অতীত কালে, যা শর্তবাচক শব্দের পরে ভবিষ্যতের অর্থ বহন করে — ফলে ব্যাকরণে দানটি শেষ হয়ে যায় বিনিময়ের কথা ওঠার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best of Providers",
          "bn": "সর্বশ্রেষ্ঠ রিযিকদাতা"
        },
        "p": [
          {
            "en": "The verse closes on a comparative: and He is the best of providers. The form concedes that others do provide — parents, employers, buyers, states — and then ranks them all. The same closing appears at 62:11, where those who left the Prophet ﷺ standing to chase a passing trade are told that what is with Allah is better than diversion and better than trade, and He is the best of providers.",
            "bn": "আয়াতটি শেষ হয় একটি তুলনামূলক রূপে: আর তিনিই সর্বশ্রেষ্ঠ রিযিকদাতা। গঠনটি মেনে নেয় যে অন্যরাও রিযিক জোগায় — বাবা-মা, নিয়োগকর্তা, ক্রেতা, রাষ্ট্র — আর তারপর সবাইকে একটি ক্রমে বসিয়ে দেয়। এই একই সমাপ্তি আসে 62:11 আয়াতে, যেখানে যারা একটি ক্ষণস্থায়ী ব্যবসার পেছনে ছুটে নবী ﷺ-কে দাঁড়ানো অবস্থায় রেখে গিয়েছিল, তাদের বলা হয়: আল্লাহর কাছে যা আছে তা খেল-তামাশা ও ব্যবসার চেয়ে উত্তম, আর তিনিই সর্বশ্রেষ্ঠ রিযিকদাতা।"
          },
          {
            "en": "What the verse does not promise is worth stating as plainly as what it does. It names no schedule, no amount and no currency; a replacement need not be money, and need not arrive this year. What it removes is the arithmetic of subtraction — the sense that a gift is a hole. The test it sets is small and specific: give something whose absence you will actually notice, and then find out what the word replacement turns out to mean.",
            "bn": "আয়াতটি যা প্রতিশ্রুতি দেয় না, তা-ও ঠিক ততটাই স্পষ্ট করে বলা দরকার। এটি কোনো সময়সূচি বলে না, কোনো পরিমাণ বলে না, কোনো মুদ্রার নামও নেয় না; বিনিময়টি অর্থ হতেই হবে এমন নয়, আর এ বছরেই আসতে হবে তাও নয়। এটি যা সরিয়ে দেয় তা হলো বিয়োগের হিসাব — এই বোধ যে দান মানেই একটি গর্ত। আর এটি যে পরীক্ষাটি রাখে তা ছোট ও নির্দিষ্ট: এমন কিছু দিন যার অনুপস্থিতি আপনি সত্যিই টের পাবেন, তারপর দেখুন 'বিনিময়' শব্দটির অর্থ কী দাঁড়ায়।"
          }
        ]
      }
    ]
  }
});
