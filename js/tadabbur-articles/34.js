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
