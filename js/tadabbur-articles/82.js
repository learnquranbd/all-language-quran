/**
 * Tadabbur long-form articles — surah 82.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "82:6": {
    "sections": [
      {
        "h": {
          "en": "A Question Cuts In",
          "bn": "মাঝপথে হঠাৎ এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Infitar opens with four scenes of undoing: the sky breaks apart in 82:1, the stars scatter in 82:2, the seas are made to erupt in 82:3, and in 82:4 the graves are overturned. Then 82:5 gives the result: a soul will know what it sent ahead and what it kept back. At-Tabari, on that verse, records several readings and chooses one. Every deed a servant did, good or bad, is what he sent ahead; what he kept back is a practice he started that others went on to follow.",
            "bn": "সূরা ইনফিতারের শুরুতে চারটি ভাঙনের দৃশ্য। ৮২:১-এ আসমান ফেটে যায়, ৮২:২-এ তারকারা ছড়িয়ে পড়ে, ৮২:৩-এ সমুদ্র উথলে ওঠে, আর ৮২:৪-এ কবরগুলো উল্টে দেওয়া হয়। তারপর ৮২:৫ জানিয়ে দেয় এর ফল: প্রত্যেকে জেনে যাবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে এসেছে। তাবারী ওই আয়াতে কয়েকটি ব্যাখ্যা উল্লেখ করে একটিকে বেছে নেন। ভালো-মন্দ যত আমল বান্দা করেছে, সবই তার আগে পাঠানো। আর পেছনে রেখে আসা মানে এমন কোনো রীতি, যা সে চালু করে গেছে আর পরের মানুষ তা মেনে চলেছে।"
          },
          {
            "en": "Then the address changes. Ya ayyuha al-insan: O man. The scene of the Last Day gives way to a question put to one listener, in the singular: ma gharraka bi-rabbika al-karim, what has deceived you about your Lord, the Generous? Ma'arif al-Qur'an notes the shape of the passage. The surah's opening describes the violent events at the end of worldly life, and this set of verses turns back to the first stages of a person's creation. Between the end and the beginning stands a reprimand, which Ma'arif calls a rhetorical question and a gentle remonstrance.",
            "bn": "এরপর হঠাৎ সম্বোধন বদলে যায়। ইয়া আইয়ুহাল ইনসান: হে মানুষ! কিয়ামতের দৃশ্য থেমে যায়, আর একজন শ্রোতার দিকে একবচনে ছুটে আসে একটি প্রশ্ন: মা গাররাকা বিরাব্বিকাল কারীম, কিসে তোমাকে তোমার মহান রব সম্পর্কে ধোঁকায় ফেলল? মাআরিফুল কুরআন অংশটির গড়ন লক্ষ করে। সূরার শুরুতে দুনিয়ার শেষ প্রান্তের ভয়াবহ ঘটনাগুলোর বর্ণনা, আর এই আয়াতগুলো ফিরিয়ে নেয় মানুষের সৃষ্টির প্রথম ধাপগুলোতে। শেষ আর শুরুর মাঝখানে দাঁড়িয়ে আছে এক তিরস্কার। মাআরিফ একে বলে প্রশ্নের ছলে কোমল ভর্ৎসনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Being Called",
          "bn": "ডাকটা কার উদ্দেশে"
        },
        "p": [
          {
            "en": "The commentators do not agree on who al-insan is here. At-Tabari glosses it as the disbelieving human: O man, the disbeliever, what thing has deceived you about your generous Lord? Al-Qurtubi says the address is to those who deny the resurrection, and the Muyassar likewise reads man who denies being raised. As-Sa'di widens it: Allah reproaches the human who falls short in his Lord's due and makes bold to do what angers Him. Ibn Kathir paraphrases it as O son of Adam, and Ma'arif al-Qur'an speaks of man in general.",
            "bn": "এখানে আল-ইনসান কে, সে বিষয়ে মুফাসসিরগণ একমত নন। তাবারীর ব্যাখ্যায় সে কাফির মানুষ: হে কাফির মানুষ, কোন জিনিস তোমাকে তোমার মহান রব সম্পর্কে ধোঁকা দিল? কুরতুবী বলেন, সম্বোধনটা পুনরুত্থান অস্বীকারকারীদের প্রতি। মুয়াসসারও একই কথা বলে: পুনরুত্থান অস্বীকারকারী মানুষ। সা'দী পরিধিটা বাড়িয়ে দেন। তাঁর মতে আল্লাহ এখানে তিরস্কার করছেন সেই মানুষকে, যে রবের হকে কমতি করে আর তাঁর অসন্তুষ্টির কাজে দুঃসাহস দেখায়। ইবন কাসীর এর অর্থ করেন 'হে আদমসন্তান', আর মাআরিফুল কুরআন সাধারণভাবে মানুষের কথাই বলে।"
          },
          {
            "en": "Some reports name the man. Al-Qurtubi gives three: from Ibn 'Abbas, that al-insan here is al-Walid ibn al-Mughira; from 'Ikrima, that it is Ubayy ibn Khalaf; and, with it is said, that the verse came down about Abu al-Ashadd ibn Kalada al-Jumahi. Al-Baghawi records from 'Ata' that it concerned al-Walid ibn al-Mughira, and from al-Kalbi and Muqatil that it concerned al-Aswad ibn Shariq, who struck the Prophet ﷺ and was not punished. Ibn Kathir repeats that last report from al-Baghawi. These are reports as the tafsirs carry them, and this article chooses none.",
            "bn": "কিছু বর্ণনায় লোকটির নামও এসেছে। কুরতুবী তিনটি নাম আনেন। ইবন আব্বাস (রাঃ) থেকে: এখানে আল-ইনসান হলো ওয়ালীদ ইবন মুগীরা। ইকরিমা থেকে: উবাই ইবন খালাফ। আর 'বলা হয়' বলে আনেন যে আয়াতটি নাযিল হয়েছিল আবুল আশাদ্দ ইবন কালাদা আল-জুমাহীকে নিয়ে। বাগাভী আতা থেকে বর্ণনা করেন, এটি ওয়ালীদ ইবন মুগীরা প্রসঙ্গে। কালবী ও মুকাতিল থেকে বর্ণনা করেন, এটি আসওয়াদ ইবন শারীক প্রসঙ্গে, যে নবী ﷺ-কে আঘাত করেছিল অথচ তখন তার শাস্তি হয়নি। ইবন কাসীর শেষ বর্ণনাটি বাগাভী থেকে উদ্ধৃত করেন। এগুলো তাফসীরে আসা বর্ণনা মাত্র। এ প্রবন্ধ এর কোনোটিকেই বেছে নেয় না।"
          },
          {
            "en": "Whichever report is right, and whether the verse speaks to one denier or to every human being, it describes what the text describes: someone called to account for being deceived about his Lord. It licenses nothing against any living person or community, and it hands no one a name to throw at a neighbour. The commentators who read al-insan broadly, as-Sa'di and Ibn Kathir among them, turn the question back on whoever hears it, and that is where it belongs.",
            "bn": "কোন বর্ণনা ঠিক, কিংবা আয়াতটি একজন অস্বীকারকারীকে বলছে নাকি প্রত্যেক মানুষকে, তা যা-ই হোক, আয়াতটি কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে: এমন একজন, যাকে রব সম্পর্কে ধোঁকা খাওয়ার জন্য জবাবদিহিতে দাঁড় করানো হয়েছে। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশীর দিকে ছুড়ে মারার মতো কোনো নামও কারও হাতে তুলে দেয় না। যাঁরা আল-ইনসানকে ব্যাপক অর্থে নেন, যেমন সা'দী ও ইবন কাসীর, তাঁরা প্রশ্নটা ফিরিয়ে দেন শ্রোতার নিজের দিকেই। প্রশ্নটার জায়গা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deceived Into Feeling Safe",
          "bn": "নিরাপদ ভেবে প্রতারিত"
        },
        "p": [
          {
            "en": "What does gharra mean here? Al-Baghawi answers in two strokes: what tricked you and made falsehood look fair to you, until you lost what was obligatory upon you; and, in sum, what made you feel safe from His punishment? Al-Qurtubi records the same gloss as what some people say. Ibn 'Abbas, in al-Qurtubi's report, points it at disbelief: what deceived you until you disbelieved? On these glosses the verb names a false sense of safety before Allah, not a plain failure to know that He exists.",
            "bn": "এখানে গাররা শব্দের মানে কী? বাগাভী দুই কথায় উত্তর দেন। প্রথমত, কিসে তোমাকে প্রতারিত করল আর বাতিলকে তোমার চোখে সুন্দর করে দেখাল, যার ফলে তোমার উপর যা ফরজ ছিল তা তুমি নষ্ট করলে? আর সারকথা: কিসে তোমাকে তাঁর আযাব থেকে নিশ্চিন্ত করল? কুরতুবী একই ব্যাখ্যা আনেন 'কিছু লোক বলেন' বলে। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) একে কুফরের দিকে ফেরান: কিসে তোমাকে ধোঁকা দিল যে তুমি কুফরি করলে? এসব ব্যাখ্যায় শব্দটি আল্লাহর সামনে নিজেকে মিথ্যে নিরাপদ ভাবার কথা বলে। আল্লাহ আছেন কি না, সেটা না জানার কথা নয়।"
          },
          {
            "en": "As-Sa'di splits the question apart, as if putting it to the person directly. Was it that you made light of His rights? Or that you held His punishment in contempt? Or that you did not believe in His recompense? Ibn Kathir insists on the tone. This is a threat, he says, and not, as some people imagine, guidance towards an answer. On his reading the question seeks no information; it lays a charge, and the one charged has to meet it.",
            "bn": "সা'দী প্রশ্নটাকে ভেঙে ভেঙে সাজান, যেন সরাসরি লোকটিকেই জিজ্ঞেস করছেন। তুমি কি তাঁর হককে তুচ্ছ ভেবেছ? নাকি তাঁর আযাবকে হালকা মনে করেছ? নাকি তাঁর প্রতিদানে তোমার ঈমানই নেই? ইবন কাসীর জোর দেন প্রশ্নের সুরের উপর। তাঁর ভাষায়, এটি হুমকি। কিছু লোক যেমন ভাবে, উত্তরের দিকে পথ দেখানো, ব্যাপারটা তেমন নয়। তাঁর ব্যাখ্যায় প্রশ্নটি কিছু জানতে চাইছে না। এটি একটি অভিযোগ, আর যার বিরুদ্ধে অভিযোগ, জবাব তাকেই দিতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Answers on Record",
          "bn": "লিপিবদ্ধ তিনটি জবাব"
        },
        "p": [
          {
            "en": "The commentators also record what, in fact, did the deceiving. The first answer is the devil. Qatadah's words appear in at-Tabari and Ibn Kathir: nothing deceived the son of Adam but this enemy, Shaytan. At-Tabari makes it his own gloss: what deceived man about his Lord was his enemy, given power over him. Al-Qurtubi records Qatadah as saying his devil, set over him, deceived him, and al-Hasan as saying his foul devil deceived him.",
            "bn": "আসলে কিসে ধোঁকা দিয়েছিল, সে উত্তরও মুফাসসিরগণ লিখে রেখেছেন। প্রথম উত্তর: শয়তান। কাতাদার কথাটি তাবারী ও ইবন কাসীর দুজনেই আনেন: আদমসন্তানকে এই শত্রু শয়তান ছাড়া আর কিছুই ধোঁকা দেয়নি। তাবারী একে নিজের ব্যাখ্যা হিসেবেই গ্রহণ করেন: মানুষকে তার রব সম্পর্কে ধোঁকা দিয়েছে তার সেই শত্রু, যাকে তার উপর চাপিয়ে দেওয়া হয়েছে। কুরতুবীর বর্ণনায় কাতাদা বলেন, তার উপর চাপানো শয়তান তাকে ধোঁকা দিয়েছে। হাসান বলেন, তার খবিস শয়তান তাকে ধোঁকা দিয়েছে।"
          },
          {
            "en": "The second answer is ignorance. Ibn Kathir relates through Ibn Abi Hatim that 'Umar heard a man recite the verse and said: ignorance. He relates that Ibn 'Umar recited it and said: by Allah, his ignorance deceived him, and that the like is reported from Ibn 'Abbas, ar-Rabi' ibn Khuthaym and al-Hasan. Al-Qurtubi records the view that his folly and ignorance deceived him, as al-Hasan reported from 'Umar, and adds that 'Umar recalled 33:72, where man bore the trust: indeed, he was ever unjust and ignorant.",
            "bn": "দ্বিতীয় উত্তর: অজ্ঞতা। ইবন কাসীর ইবন আবী হাতিমের সূত্রে বর্ণনা করেন, উমর (রাঃ) এক ব্যক্তিকে আয়াতটি পড়তে শুনে বললেন: অজ্ঞতা। তিনি আরও বর্ণনা করেন, ইবন উমর (রাঃ) আয়াতটি পড়ে বললেন: আল্লাহর কসম, তার অজ্ঞতাই তাকে ধোঁকা দিয়েছে। ইবন আব্বাস (রাঃ), রাবী' ইবন খুসাইম ও হাসান থেকেও এমন কথা বর্ণিত আছে বলে তিনি জানান। কুরতুবী আনেন এই মত যে তার নির্বুদ্ধিতা ও অজ্ঞতা তাকে ধোঁকা দিয়েছে, হাসান যা উমর (রাঃ) থেকে বর্ণনা করেছেন। তিনি আরও জানান, উমর (রাঃ) এখানে ৩৩:৭২ স্মরণ করেছিলেন, যেখানে মানুষ আমানত বহন করল: নিশ্চয়ই সে বড় জালিম, বড় অজ্ঞ।"
          },
          {
            "en": "The third answer is Allah's own forbearance. Al-Baghawi records Muqatil: Allah's pardon deceived him, when He did not punish him the first time; al-Qurtubi gives the same with it is said. Al-Baghawi adds as-Suddi: Allah's gentleness with him deceived him. Al-Qurtubi also carries two reports that the Prophet ﷺ recited the verse and said that ignorance deceived him, one through Ghalib al-Hanafi, the other from Salih ibn Mismar, who opens with it has reached us. Al-Qurtubi names no collection for either, and this article could not confirm them in one.",
            "bn": "তৃতীয় উত্তর: আল্লাহর নিজেরই সহনশীলতা। বাগাভী মুকাতিলের কথা আনেন: আল্লাহর ক্ষমাই তাকে ধোঁকা দিয়েছে, কারণ প্রথমবারেই তিনি তাকে শাস্তি দেননি। কুরতুবীও 'বলা হয়' বলে একই কথা আনেন। বাগাভী সুদ্দীর কথাও যোগ করেন: তার প্রতি আল্লাহর কোমলতাই তাকে ধোঁকা দিয়েছে। কুরতুবী আরও দুটি বর্ণনা আনেন যে নবী ﷺ আয়াতটি পড়ে বলেছিলেন, অজ্ঞতা তাকে ধোঁকা দিয়েছে। একটি গালিব আল-হানাফীর সূত্রে, অন্যটি সালিহ ইবন মিসমার থেকে, যিনি শুরু করেন 'আমাদের কাছে পৌঁছেছে' বলে। কুরতুবী কোনোটির জন্যই কোনো হাদীসগ্রন্থের নাম দেননি, আর এ প্রবন্ধও কোনো গ্রন্থে তা নিশ্চিত করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why al-Karim",
          "bn": "কেন আল-কারীম"
        },
        "p": [
          {
            "en": "The verse closes on one name, and the commentators gloss it differently. Ibn Kathir explains al-Karim here as al-'Azim, the Mighty: what deceived you about your Lord, the Mighty, until you went ahead to disobey Him and met Him with what does not befit Him? Al-Baghawi, and al-Qurtubi from Ibn 'Abbas, explain it as the One who passes over your faults, al-Baghawi adding: since He did not punish you at once for your disbelief. The Muyassar gives the bountiful One of abundant good, who rightly deserves thanks and obedience.",
            "bn": "আয়াতটি শেষ হয় একটি নামে, আর মুফাসসিরগণ তার ব্যাখ্যা করেন ভিন্ন ভিন্নভাবে। ইবন কাসীর এখানে আল-কারীমের অর্থ করেন আল-আযীম, মহামহিম: কিসে তোমাকে তোমার মহামহিম রব সম্পর্কে ধোঁকা দিল যে তুমি তাঁর নাফরমানিতে এগিয়ে গেলে আর তাঁর সাথে অশোভন আচরণ করলে? বাগাভী, এবং ইবন আব্বাস (রাঃ) থেকে কুরতুবী, এর অর্থ করেন তিনি, যিনি তোমার দোষ এড়িয়ে যান। বাগাভী যোগ করেন: কারণ তোমার কুফরির জন্য তিনি তোমাকে সঙ্গে সঙ্গে শাস্তি দেননি। মুয়াসসারের ব্যাখ্যা: সেই দানশীল রব, যাঁর কল্যাণ অফুরান, যিনি শোকর ও আনুগত্যের সত্যিকার হকদার।"
          },
          {
            "en": "Why this name? Al-Baghawi reports some people of allusive reading: Allah said your Lord, the Generous, rather than any other name or attribute, as if prompting the answer, so that the man would say the generosity of the Generous deceived me. Ibn Kathir quotes this through al-Baghawi and calls it of no worth. The name was brought, he says, to alert that the Generous should not be met with ugly acts and evil deeds. Al-Baghawi records the allusive reading without comment; Ibn Kathir sets it aside. Both are kept here, and this article chooses neither.",
            "bn": "কেন এই নামটিই? বাগাভী কিছু ইশারাপন্থী আলেমের কথা আনেন। তাঁদের মতে আল্লাহ অন্য কোনো নাম বা গুণ না এনে 'তোমার মহান রব' বলেছেন, যেন উত্তরটা মুখে তুলে দিচ্ছেন, যাতে লোকটি বলতে পারে: কারীমের করমই আমাকে ধোঁকা দিয়েছে। ইবন কাসীর এ মত বাগাভীর সূত্রে উদ্ধৃত করে বলেন, এর কোনো সারবত্তা নেই। তাঁর মতে নামটি আনা হয়েছে এ কথা সতর্ক করতে যে মহানুভব রবের মোকাবিলা কুৎসিত কাজ আর মন্দ আমল দিয়ে করা চলে না। বাগাভী মতটি কোনো মন্তব্য ছাড়াই উল্লেখ করেন, আর ইবন কাসীর তা নাকচ করেন। দুটোই এখানে রাখা হলো। এ প্রবন্ধ কোনোটিকেই বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Hanging Curtains, Lord",
          "bn": "তোমার ঝুলিয়ে রাখা পর্দা"
        },
        "p": [
          {
            "en": "Several later men of piety imagined being asked the question themselves. Al-Fudayl ibn 'Iyad, asked what he would say if Allah stood him before Him on the Day of Resurrection and put it to him, said: I would say, Your hanging curtains deceived me. Ibn Kathir, al-Qurtubi and al-Baghawi all carry it, and al-Qurtubi gives the reason: because al-Karim is He who covers. Abu Bakr al-Warraq said he would answer: the generosity of the Generous deceived me. Al-Baghawi adds Yahya ibn Mu'adh: Your kindness to me, before and since.",
            "bn": "পরবর্তী যুগের কয়েকজন নেককার মানুষ কল্পনা করেছেন, প্রশ্নটা যদি তাঁদেরকেই করা হয়। ফুদাইল ইবন ইয়াযকে জিজ্ঞেস করা হলো: কিয়ামতের দিন আল্লাহ যদি আপনাকে সামনে দাঁড় করিয়ে এ প্রশ্ন করেন, কী বলবেন? তিনি বললেন: বলব, তোমার ঝুলিয়ে রাখা পর্দাই আমাকে ধোঁকা দিয়েছে। ইবন কাসীর, কুরতুবী ও বাগাভী তিনজনই কথাটি এনেছেন। কুরতুবী কারণও বলেন: কারীম তো তিনিই, যিনি দোষ ঢেকে রাখেন। আবু বকর আল-ওয়াররাক বলেছেন, তিনি জবাব দেবেন: কারীমের করমই আমাকে ধোঁকা দিয়েছে। বাগাভী ইয়াহইয়া ইবন মুআযের কথাও আনেন: আগে ও পরে আমার প্রতি তোমার দয়া।"
          },
          {
            "en": "These are personal answers, recorded as such, and al-Qurtubi sets warnings beside them. He quotes Dhu an-Nun al-Misri: how many are deceived under the covering and do not know it. He quotes lines by Ibn as-Sammak to whoever hides his sin: Allah is your second in private, and what deceived you about your Lord is His respite and His long covering of your misdeeds. He also reports, with it is narrated, that 'Ali's slave failed to answer his call several times, then said he had trusted 'Ali's forbearance and felt safe from punishment; 'Ali liked the answer and freed him.",
            "bn": "এগুলো ব্যক্তিগত উত্তর, আর সেভাবেই লিপিবদ্ধ। কুরতুবী এগুলোর পাশে সতর্কবাণীও রাখেন। তিনি যুন নূন মিসরীর কথা আনেন: কত মানুষ পর্দার আড়ালে ধোঁকায় পড়ে আছে, অথচ টেরও পায় না। গুনাহ গোপনকারীকে উদ্দেশ করে লেখা ইবনুস সাম্মাকের কবিতাও আনেন: নির্জনে আল্লাহ তোমার সঙ্গী, আর তোমার রব সম্পর্কে তোমাকে ধোঁকা দিয়েছে তাঁর অবকাশ আর তোমার দীর্ঘ মন্দকাজের উপর তাঁর পর্দা। 'বর্ণিত আছে' বলে তিনি আরও আনেন, আলী (রাঃ)-এর এক গোলাম কয়েকবার ডাকে সাড়া দেয়নি। পরে বলল, আপনার সহনশীলতায় ভরসা ছিল, শাস্তির ভয় ছিল না। আলী (রাঃ) উত্তরটি পছন্দ করে তাকে আজাদ করে দিলেন।"
          },
          {
            "en": "On the Day itself the question is put by Allah. Al-Qurtubi and al-Baghawi record Ibn Mas'ud's words: there is none of you but Allah will be alone with him on the Day of Resurrection and say, O son of Adam, what deceived you about Me? O son of Adam, what did you do with what you knew? O son of Adam, how did you answer the messengers? Ibn Kathir cites a shorter form as a hadith, naming no collection. None of the fetched tafsirs attaches to this verse a hadith that could be confirmed in a collection, so none is quoted.",
            "bn": "কিয়ামতের দিন প্রশ্নটা করবেন আল্লাহ নিজেই। কুরতুবী ও বাগাভী ইবন মাসউদ (রাঃ)-এর কথা আনেন: তোমাদের প্রত্যেকের সাথেই কিয়ামতের দিন আল্লাহ একান্তে মিলিত হবেন এবং বলবেন, হে আদমসন্তান, কিসে তোমাকে আমার সম্পর্কে ধোঁকা দিল? হে আদমসন্তান, যা জেনেছিলে তা নিয়ে কী করেছিলে? হে আদমসন্তান, রাসূলদের ডাকে কী জবাব দিয়েছিলে? ইবন কাসীর এর ছোট একটি রূপ হাদীস হিসেবে উল্লেখ করেন, কিন্তু কোনো গ্রন্থের নাম দেন না। সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সাথে এমন কোনো হাদীস জোড়েনি যা কোনো গ্রন্থে নিশ্চিত করা যায়। তাই এখানে কোনো হাদীস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer in the Body",
          "bn": "উত্তরটি দেহের ভেতরেই"
        },
        "p": [
          {
            "en": "The next two verses carry the question on: who created you, then proportioned you, then balanced you, in whatever form He willed He assembled you (82:7 and 82:8). The Muyassar reads them inside the same question: is He not the One who created you, evened your make, balanced you and assembled you to carry out your functions? Ibn Kathir explains: He made you complete, upright, balanced and proportioned in stature. On in whatever form He willed, he records Mujahid: in which resemblance, of the father, the mother, the paternal uncle or the maternal uncle.",
            "bn": "পরের দুই আয়াত প্রশ্নটাকেই এগিয়ে নেয়: যিনি তোমাকে সৃষ্টি করেছেন, তারপর সুঠাম করেছেন, তারপর ভারসাম্যপূর্ণ করেছেন, যে আকৃতিতে চেয়েছেন সে আকৃতিতে তোমাকে গঠন করেছেন (৮২:৭ ও ৮২:৮)। মুয়াসসার এগুলোকে একই প্রশ্নের অংশ হিসেবে পড়ে: তিনিই কি তোমাকে সৃষ্টি করেননি, তোমার গড়ন ঠিকঠাক করেননি, তোমাকে ভারসাম্য দেননি, আর তোমার কাজকর্ম করার উপযোগী করে গড়েননি? ইবন কাসীরের ব্যাখ্যা: তিনি তোমাকে পূর্ণ, সোজা, ভারসাম্যপূর্ণ ও সুগঠিত দেহ দিয়েছেন। 'যে আকৃতিতে চেয়েছেন' প্রসঙ্গে তিনি মুজাহিদের কথা আনেন: কার সাদৃশ্যে, বাবার, মায়ের, চাচার নাকি মামার।"
          },
          {
            "en": "Ibn Kathir adds a report from the Two Sahihs. Al-Bukhari's Sahih (5305) has it from Abu Hurayrah: 'A man came to the Prophet (ﷺ) and said, O Allah's Messenger (ﷺ)! A black child has been born for me. The Prophet asked him, Have you got camels? The man said, Yes. The Prophet (ﷺ) asked him, What color are they? The man replied, Red. The Prophet (ﷺ) said, Is there a grey one among them? The man replied, Yes. The Prophet (ﷺ) said, Whence comes that? He said, May be it is because of heredity. The Prophet (ﷺ) said, May be your latest son has this color because of heredity.'",
            "bn": "মুজাহিদের কথার পাশে ইবন কাসীর এমন একটি বর্ণনা রাখেন যা দুই সহীহ গ্রন্থে আছে। বুখারী এটি তাঁর সহীহ গ্রন্থে (৫৩০৫) আবু হুরায়রা (রাঃ) থেকে এনেছেন: 'এক ব্যক্তি নবী ﷺ-এর কাছে এসে বলল, হে আল্লাহর রাসূল, আমার একটি কালো ছেলে জন্মেছে। তিনি বললেন, তোমার কি উট আছে? সে বলল, হ্যাঁ। তিনি বললেন, সেগুলোর রং কী? সে বলল, লাল। তিনি বললেন, সেগুলোর মধ্যে কি কোনো ছাই রঙের আছে? সে বলল, হ্যাঁ। তিনি বললেন, সেটা কোথা থেকে এল? সে বলল, হয়তো কোনো পূর্বপুরুষের ধারা তাকে টেনে এনেছে। তিনি বললেন, তাহলে তোমার এই ছেলেকেও হয়তো কোনো ধারা টেনে এনেছে।'"
          },
          {
            "en": "Ma'arif al-Qur'an dwells on the balance: every limb and organ well placed and kept in proportion, so that a departure from it would leave the organs unable to work. Then 82:9 names, in Ibn Kathir's reading, what lies beneath the deception: no, but you deny the Recompense, the denial in the heart of the Hereafter and the reckoning that drives a person to meet the Generous with disobedience. 82:10 to 82:12 then set noble recorders over every person; 82:11 has its own article on those writers, and 82:15 on the wicked burning on the Day of Recompense.",
            "bn": "মাআরিফুল কুরআন জোর দেয় এই ভারসাম্যের উপর। প্রতিটি অঙ্গ-প্রত্যঙ্গ ঠিক জায়গায় বসানো, মাপমতো রাখা। এর ব্যতিক্রম হলে অঙ্গগুলো আর কাজ করতে পারত না। তারপর ইবন কাসীরের ব্যাখ্যায় ৮২:৯ খুলে দেয় ধোঁকার তলায় কী আছে: না, বরং তোমরা প্রতিদান দিবসকে অস্বীকার করো। অন্তরে আখিরাত ও হিসাবের এই অস্বীকারই মানুষকে মহানুভব রবের মোকাবিলায় নাফরমানি নিয়ে দাঁড় করায়। এরপর ৮২:১০ থেকে ৮২:১২ প্রত্যেকের উপর সম্মানিত লেখক নিযুক্ত করে। ৮২:১১-এর আলাদা প্রবন্ধ আছে সেই লেখকদের নিয়ে, আর ৮২:১৫-এর প্রবন্ধ প্রতিদান দিবসে অপরাধীদের আগুনে প্রবেশ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming What Deceived You",
          "bn": "যা ধোঁকা দিল, তার নাম"
        },
        "p": [
          {
            "en": "The commentators leave a set of answers rather than one: an enemy who misleads, a mind that does not know, a Lord whose patience was taken for permission. As-Sa'di's three questions turn these into a test anyone can run. Do I make light of what I owe Allah? Do I treat His punishment as something for other people? Do I, somewhere underneath, doubt the reckoning itself? Ibn Kathir's reading of 82:9 points to the last.",
            "bn": "মুফাসসিরগণ একটি নয়, কয়েকটি উত্তর রেখে গেছেন: পথভ্রষ্ট করা এক শত্রু, না-জানা এক মন, আর এমন এক রব যাঁর ধৈর্যকে অনুমতি ভেবে নেওয়া হয়েছে। সা'দীর তিনটি প্রশ্ন এগুলোকে এমন এক পরীক্ষায় বদলে দেয়, যা যে-কেউ নিজের উপর চালাতে পারে। আল্লাহর হককে কি আমি হালকা করে দেখি? তাঁর আযাবকে কি অন্যদের ব্যাপার মনে করি? মনের গভীরে কোথাও কি হিসাব-নিকাশ নিয়েই সন্দেহ আছে? ইবন কাসীরের ৮২:৯-এর ব্যাখ্যা শেষটির দিকেই ইঙ্গিত করে।"
          },
          {
            "en": "Then there is the name. 82:7 lists what the Generous has already given: a body made, proportioned and balanced. The commentators add faults covered and a first offence not punished at once. Read from the reader's side, al-Fudayl's answer, Your hanging curtains, names the gift that was mistaken for safety. Whoever finds that answer in himself knows where repentance must begin, while the curtains still hang.",
            "bn": "এরপর থাকে নামটি। কারীম রব আগেই কী দিয়েছেন, ৮২:৭ তার তালিকা দেয়: গড়ে তোলা, সুঠাম করা, ভারসাম্যপূর্ণ এক দেহ। মুফাসসিরগণ যোগ করেন ঢেকে রাখা দোষ, আর প্রথম অপরাধে সঙ্গে সঙ্গে শাস্তি না দেওয়া। পাঠকের দিক থেকে পড়লে ফুদাইলের উত্তর, তোমার ঝুলিয়ে রাখা পর্দা, ঠিক সেই দানের নাম, যাকে নিরাপত্তা ভেবে ভুল করা হয়েছিল। যে নিজের ভেতরে এই উত্তর খুঁজে পায়, সে জানে তওবা কোথা থেকে শুরু করতে হবে। পর্দা এখনো ঝুলছে, সময় এখনো আছে।"
          }
        ]
      }
    ]
  },
  "82:11": {
    "sections": [
      {
        "h": {
          "en": "Noble, and Writing",
          "bn": "সম্মানিত আর লেখক"
        },
        "p": [
          {
            "en": "Kiraman katibin: noble, writing. The whole verse is two Arabic words, and neither is a verb with a subject of its own. Both lean back on the verse before, wa-inna 'alaykum la-hafizin, and indeed over you are keepers, in 82:10. The Muyassar shows the link by reading the three verses as one sentence: over you are angels set as watchers, noble with Allah, writing what they were entrusted to count. Ibn Kathir does the same on 82:10, glossing hafizin as angels who are keepers.",
            "bn": "কিরামান কাতিবীন: সম্মানিত, লেখক। পুরো আয়াত মাত্র দুটি আরবি শব্দ, আর কোনোটিই নিজস্ব কর্তাসহ ক্রিয়া নয়। দুটিই ভর দিয়ে আছে আগের আয়াতের উপর, ৮২:১০ আয়াতে: ওয়া ইন্না আলাইকুম লা-হাফিযীন, নিশ্চয়ই তোমাদের উপর আছে পাহারাদার। মুয়াসসার তিনটি আয়াতকে একটি বাক্য ধরে পড়ে সংযোগটা দেখিয়ে দেয়: তোমাদের উপর নিযুক্ত আছেন তত্ত্বাবধায়ক ফেরেশতা, যাঁরা আল্লাহর কাছে সম্মানিত, আর যা গুনে রাখার দায়িত্ব তাঁদের দেওয়া হয়েছে, তা লিখে রাখেন। ইবন কাসীরও ৮২:১০ আয়াতে হাফিযীন শব্দের ব্যাখ্যা দেন রক্ষণাবেক্ষণকারী ফেরেশতা বলে।"
          },
          {
            "en": "So this verse does not introduce new beings. It describes the keepers already named, and it does so with two qualities: what they are, and what they do. The next verse, 82:12, adds a third, that they know what you do, and it has its own entry. The setting matters too. These lines answer 82:9, where the surah turns on people who deny the recompense. The reply to a denial of the reckoning is a quiet statement that the reckoning is already being written.",
            "bn": "অর্থাৎ এ আয়াত নতুন কোনো সৃষ্টির কথা আনছে না। আগের আয়াতে যাঁদের কথা এসেছে, সেই পাহারাদারদেরই পরিচয় দিচ্ছে, দুটি গুণে। একটি তাঁরা কেমন, অন্যটি তাঁরা কী করেন। পরের আয়াত ৮২:১২ তৃতীয় গুণ যোগ করে: তোমরা যা কর, তাঁরা তা জানেন। সে আয়াতের আলোচনা আলাদা। প্রেক্ষাপটও গুরুত্বপূর্ণ। এই আয়াতগুলো ৮২:৯ আয়াতের জবাব, যেখানে সূরাটি প্রতিদান অস্বীকারকারীদের দিকে ফেরে। হিসাব অস্বীকারের জবাবে কুরআন শান্ত গলায় জানিয়ে দেয়, হিসাব তো লেখা চলছে এখনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Honoured in Whose Sight",
          "bn": "কার কাছে সম্মানিত"
        },
        "p": [
          {
            "en": "Kiram is the plural of karim, and the commentators ask in whose eyes these angels are noble. At-Tabari answers in three words: kiraman 'ala Allah, noble with Allah. Al-Baghawi gives the same phrase, and so does the Muyassar. The honour, on this reading, is not a matter of how people regard the angels. It is their standing with the One who appointed them.",
            "bn": "কিরাম শব্দটি কারীম-এর বহুবচন। তাফসীরকারেরা প্রশ্ন তোলেন, এই ফেরেশতারা কার দৃষ্টিতে সম্মানিত। তাবারী তিনটি শব্দে উত্তর দেন: কিরামান আলাল্লাহ, আল্লাহর কাছে সম্মানিত। বাগাভীও একই কথা বলেন, মুয়াসসারও তাই। এই পাঠে সম্মানটা মানুষ তাঁদের কীভাবে দেখে, তার উপর নির্ভর করে না। সম্মান তাঁদের সেই সত্তার কাছে, যিনি তাঁদের নিযুক্ত করেছেন।"
          },
          {
            "en": "Al-Qurtubi then sets the phrase beside another: ka-qawlihi kiramin bararah, as in His saying, noble and dutiful, which is 80:16 in Surah 'Abasa. He offers it as a parallel in wording and does not expand on it. A reader of this surah may notice something closer to hand. The same root, k-r-m, gave al-Karim, the Generous, in 82:6, where the surah asked what had deceived man about his Lord. The Generous Lord is the one whose honoured angels now keep the record, though none of the commentators consulted here draws that link.",
            "bn": "এরপর কুরতুবী শব্দবন্ধটিকে আরেকটির পাশে রাখেন: কা-কাওলিহি কিরামিন বারারাহ, যেমন তাঁর বাণী, সম্মানিত ও পুণ্যবান। এটি সূরা আবাসার ৮০:১৬ আয়াত। তিনি একে শব্দের মিল হিসেবে দেখান, এর বেশি কিছু বলেন না। এ সূরার পাঠক অবশ্য আরও কাছের একটা জিনিস খেয়াল করতে পারেন। একই ক-র-ম ধাতু থেকে এসেছে আল-কারীম, মহানুভব, ৮২:৬ আয়াতে, যেখানে সূরাটি জিজ্ঞেস করেছিল, কিসে মানুষকে তার রব সম্পর্কে ধোঁকায় ফেলল। সেই মহানুভব রবেরই সম্মানিত ফেরেশতারা এখন হিসাব লিখছেন। তবে হাতে আসা কোনো তাফসীরকার এই যোগসূত্র টানেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Their Honour Asks",
          "bn": "তাঁদের মর্যাদার দাবি"
        },
        "p": [
          {
            "en": "Two commentators turn the word from a description of the angels into a demand on the reader. Ibn Kathir opens his comment with it: kiraman, fa-la tuqabiluhum bil-qaba'ih, noble, so do not meet them with foul deeds, fa-innahum yaktubuna 'alaykum jami'a a'malikum, for they write down against you all of your deeds. The reasoning runs from their rank to our conduct. People do not bring shameful work before someone they honour, and these honoured ones are writing all of it down.",
            "bn": "দুজন তাফসীরকার শব্দটিকে ফেরেশতাদের বর্ণনা থেকে পাঠকের উপর এক দাবিতে পরিণত করেন। ইবন কাসীর তাঁর ব্যাখ্যা শুরুই করেন এখান থেকে: কিরামান, ফালা তুকাবিলূহুম বিল-কাবাইহ, তাঁরা সম্মানিত, তাই কদর্য কাজ নিয়ে তাঁদের সামনে যেয়ো না। ফা-ইন্নাহুম ইয়াকতুবূনা আলাইকুম জামীআ আমালিকুম, কেননা তাঁরা তোমাদের বিরুদ্ধে তোমাদের সব আমল লিখে রাখেন। যুক্তিটা চলে তাঁদের মর্যাদা থেকে আমাদের আচরণের দিকে। যাঁকে মানুষ সম্মান করে, তাঁর সামনে লজ্জার কাজ নিয়ে হাজির হয় না। আর এই সম্মানিতরা তার সবটাই লিখে রাখছেন।"
          },
          {
            "en": "As-Sa'di reaches the same place by a different road. After saying what they write, he concludes: fa-al-la'iqu bikum an tukrimuhum wa-tujilluhum wa-tahtarimuhum, so what befits you is to honour them, hold them in high regard, and show them respect. The first of his three verbs, tukrimuhum, comes from the very root of kiram. Ibn Kathir frames the duty as a prohibition, do not meet them with foul deeds; as-Sa'di frames it as a positive courtesy. The two emphases sit together, and neither commentator sets his against the other.",
            "bn": "সা'দী একই জায়গায় পৌঁছান অন্য পথে। তাঁরা কী লেখেন, তা বলার পর তিনি উপসংহার টানেন: ফাল-লাইকু বিকুম আন তুকরিমূহুম ওয়া তুজিল্লূহুম ওয়া তাহতারিমূহুম, তোমাদের জন্য শোভন হলো তাঁদের সম্মান করা, তাঁদের মর্যাদা দেওয়া আর তাঁদের প্রতি শ্রদ্ধা রাখা। তাঁর তিনটি ক্রিয়ার প্রথমটি, তুকরিমূহুম, কিরাম শব্দের ধাতু থেকেই এসেছে। ইবন কাসীর দায়িত্বটা বলেন নিষেধের ভাষায়: কদর্য কাজ নিয়ে তাঁদের সামনে যেয়ো না। সা'দী বলেন ইতিবাচক আদবের ভাষায়। দুটি দিক পাশাপাশি থাকে, আর কোনো তাফসীরকারই নিজের কথাকে অন্যের বিপরীতে দাঁড় করাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds, Words and Secrets",
          "bn": "আমল, কথা ও গোপন বিষয়"
        },
        "p": [
          {
            "en": "The second word, katibin, writing, leaves open what is written, and the commentaries consulted here fill it in differently. At-Tabari's own gloss is yaktubuna a'malakum, they write your deeds, and he adds that the people of interpretation said the like. Ibn Kathir, as quoted above, says they write jami'a a'malikum, all of your deeds. Both name deeds, and in the text consulted for this verse neither stops to ask whether speech is a separate category or already counted among the deeds.",
            "bn": "দ্বিতীয় শব্দ কাতিবীন, লেখক, কী লেখা হয় তা খোলা রেখেছে। হাতে আসা তাফসীরগুলো সেই ফাঁকা জায়গা ভরেছে ভিন্ন ভিন্নভাবে। তাবারীর নিজের ব্যাখ্যা: ইয়াকতুবূনা আমালাকুম, তাঁরা তোমাদের আমল লেখেন। তিনি যোগ করেন, তাফসীরবিদেরাও এমনই বলেছেন। ইবন কাসীর, আগেই যেমন উদ্ধৃত হয়েছে, বলেন তাঁরা লেখেন জামীআ আমালিকুম, তোমাদের সব আমল। দুজনেই আমলের কথা বলেন। এ আয়াতের যে পাঠ হাতে এসেছে, তাতে কেউই থেমে প্রশ্ন তোলেননি, কথা আলাদা কোনো শ্রেণি, নাকি আমলের মধ্যেই গোনা।"
          },
          {
            "en": "Al-Baghawi names speech explicitly: yaktubuna aqwalakum wa-a'malakum, they write your words and your deeds. As-Sa'di has the same pair, aqwalakum wa-af'alakum, and then widens it: wa-dakhala fi hadha af'al al-qulub wa-af'al al-jawarih, and into this enter the acts of the hearts and the acts of the limbs. On his reading the record does not stop at the tongue and the hand; it reaches what is done inwardly as well. He gives no list of what those inner acts are, and the passage moves straight on to the courtesy owed to the writers.",
            "bn": "বাগাভী কথার উল্লেখ করেন স্পষ্ট করে: ইয়াকতুবূনা আকওয়ালাকুম ওয়া আমালাকুম, তাঁরা তোমাদের কথা ও কাজ লেখেন। সা'দীর কাছেও একই জোড়া, আকওয়ালাকুম ওয়া আফআলাকুম। তারপর তিনি পরিধিটা বাড়িয়ে দেন: ওয়া দাখালা ফী হাযা আফআলুল কুলূব ওয়া আফআলুল জাওয়ারিহ, এর মধ্যে ঢুকে পড়ে অন্তরের কাজ আর অঙ্গপ্রত্যঙ্গের কাজ। তাঁর পাঠে খাতা কেবল মুখের কথা আর হাতের কাজে থেমে থাকে না, ভেতরের কাজ পর্যন্ত পৌঁছে যায়। তবে অন্তরের কাজ বলতে ঠিক কী কী, তার কোনো তালিকা তিনি দেননি। এরপরই তিনি চলে যান লেখকদের প্রতি প্রাপ্য আদবের কথায়।"
          },
          {
            "en": "The Muyassar goes furthest in wording. The angels write what they were entrusted to count, la yafutuhum min a'malikum wa-asrarikum shay', nothing of your deeds and your secrets escapes them. So the texts consulted here give a spread: deeds, in at-Tabari and Ibn Kathir; words and deeds, in al-Baghawi; words, deeds and the acts of the heart, in as-Sa'di; deeds and secrets, in the Muyassar. These may be fuller and shorter ways of saying one thing, but the commentators do not say so, and this article does not choose among them.",
            "bn": "শব্দের দিক থেকে মুয়াসসার সবচেয়ে দূর পর্যন্ত যায়। ফেরেশতারা লেখেন যা গুনে রাখার দায়িত্ব তাঁদের দেওয়া হয়েছে, লা ইয়াফূতুহুম মিন আমালিকুম ওয়া আসরারিকুম শাই, তোমাদের আমল আর গোপন বিষয়ের কিছুই তাঁদের এড়ায় না। দেখা যাচ্ছে, হাতে আসা লেখাগুলো কথাটা নানা পরিসরে বলেছে। তাবারী ও ইবন কাসীরের কাছে আমল। বাগাভীর কাছে কথা ও কাজ। সা'দীর কাছে কথা, কাজ আর অন্তরের কাজ। মুয়াসসারের কাছে আমল ও গোপন বিষয়। হয়তো একই কথা কেউ বিস্তারে, কেউ সংক্ষেপে বলেছেন, কিন্তু তাফসীরকারেরা নিজেরা তা বলেননি। এই লেখাও এদের কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reaching What Is Meant",
          "bn": "নিয়ত পর্যন্ত পৌঁছানো"
        },
        "p": [
          {
            "en": "At-Tabari supports his gloss with one early report. Ya'qub told him, from Ibn 'Ulayya, who said that one of his companions related from Ayyub, on wa-inna 'alaykum la-hafizin, kiraman katibin: yaktubuna ma taquluna wa-ma ta'nun, they write what you say and what you mean. The chain has an unnamed link, one of our companions, and at-Tabari does not comment on it. But the content is worth noticing. It names speech, which his own gloss did not, and it reaches past speech to the intention behind it.",
            "bn": "তাবারী নিজের ব্যাখ্যার সমর্থনে প্রথম যুগের একটি বর্ণনা আনেন। ইয়াকুব তাঁকে বলেছেন ইবন উলাইয়া থেকে। ইবন উলাইয়া বলেন, আমাদের এক সঙ্গী আইয়ুব থেকে বর্ণনা করেছেন। ওয়া ইন্না আলাইকুম লা-হাফিযীন, কিরামান কাতিবীন প্রসঙ্গে আইয়ুব বলেন: ইয়াকতুবূনা মা তাকূলূনা ওয়া মা তানূন, তোমরা যা বলো আর যা বোঝাতে চাও, তাঁরা তা লেখেন। সনদে একজনের নাম নেই, শুধু বলা হয়েছে আমাদের এক সঙ্গী। তাবারী এ নিয়ে কিছু বলেননি। তবে বক্তব্যটা লক্ষ করার মতো। তাবারীর নিজের ব্যাখ্যায় কথার উল্লেখ ছিল না, এখানে আছে। আর কথা ছাড়িয়ে তা পৌঁছে যায় কথার পেছনের উদ্দেশ্য পর্যন্ত।"
          },
          {
            "en": "Al-Qurtubi raises the obvious question in his third point. Sufyan was asked how the angels know that a servant has resolved on a good deed or a bad one. He answered: when the servant resolves on a good deed they find from him the scent of musk, and when he resolves on a bad one they find from him a foul smell. Al-Qurtubi gives no chain for this and does not say which Sufyan is meant. It stands in his text as one early answer to a question about the unseen, and is reported here as exactly that.",
            "bn": "কুরতুবী তাঁর তৃতীয় মাসআলায় স্বাভাবিক প্রশ্নটা তোলেন। সুফিয়ানকে জিজ্ঞেস করা হয়েছিল, বান্দা কোনো ভালো বা মন্দ কাজের সংকল্প করলে ফেরেশতারা তা জানেন কী করে? তিনি উত্তর দেন: বান্দা ভালো কাজের সংকল্প করলে তাঁরা তার কাছ থেকে মেশকের সুবাস পান, আর মন্দ কাজের সংকল্প করলে পান দুর্গন্ধ। কুরতুবী এর কোনো সনদ দেননি, কোন সুফিয়ান তাও বলেননি। গায়েবের একটি বিষয়ে প্রথম যুগের একটি উত্তর হিসেবেই কথাটা তাঁর লেখায় আছে। এখানেও ঠিক সেভাবেই উল্লেখ করা হলো।"
          },
          {
            "en": "Al-Qurtubi also points the reader elsewhere. He notes that in Surah Qaf, on ma yalfizu min qawlin illa ladayhi raqibun 'atid, not a word does he utter but there is a watcher ready beside him, which is 50:18, he has already given a fuller account of this verse's meaning. That verse belongs to Surah Qaf, and this module's reflection on 50:16 has already looked at the watcher it describes. Here it is enough to see that al-Qurtubi treats the verse in Surah Qaf as adding to the explanation of the verse here.",
            "bn": "কুরতুবী পাঠককে আরেক জায়গার দিকেও ইশারা করেন। তিনি জানান, এ আয়াতের অর্থ তিনি আরও বিস্তারে বলে এসেছেন সূরা কাফে, মা ইয়ালফিযু মিন কাওলিন ইল্লা লাদাইহি রাকীবুন আতীদ আয়াতের আলোচনায়: মানুষ যে কথাই উচ্চারণ করে, তার কাছে প্রস্তুত থাকে এক পর্যবেক্ষক। এটি ৫০:১৮ আয়াত। এই সংকলনে ৫০:১৬ আয়াতের আলোচনায় সেই পর্যবেক্ষকের কথা আগেই এসেছে। এখানে এটুকু দেখাই যথেষ্ট যে কুরতুবী সূরা কাফের আয়াতটিকে এ আয়াতের ব্যাখ্যার বাড়তি অংশ হিসেবে দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Record for the Deniers Too",
          "bn": "অস্বীকারকারীরও খাতা আছে"
        },
        "p": [
          {
            "en": "Al-Qurtubi's second point records a real disagreement: do the disbelievers have recording angels over them or not? He gives both answers without naming who held either. Some said no, because their case is plain and their deed is one, citing 55:41, the guilty will be known by their marks. Others said they do have keepers, and the evidence they give is this very passage, which speaks directly to those who deny the recompense in 82:9.",
            "bn": "কুরতুবীর দ্বিতীয় মাসআলায় একটি সত্যিকারের মতভেদ আছে: কাফেরদের উপরও কি লেখক ফেরেশতা নিযুক্ত, নাকি নয়? দুটি উত্তরই তিনি দেন, কিন্তু কোনো পক্ষে কারা ছিলেন, তার নাম বলেন না। কেউ কেউ বলেছেন, নেই। কারণ তাদের ব্যাপারটা স্পষ্ট, তাদের আমলও এক রকম। প্রমাণ হিসেবে তাঁরা আনেন ৫৫:৪১ আয়াত: অপরাধীদের চেনা যাবে তাদের চিহ্ন দেখে। অন্যরা বলেছেন, তাদের উপরও পাহারাদার আছেন। প্রমাণ এই অংশটিই, যা ৮২:৯ আয়াতে সরাসরি প্রতিদান অস্বীকারকারীদের সম্বোধন করে।"
          },
          {
            "en": "That second side adds two more verses. In 69:25 one is given his book in his left hand, and in 84:10 one is given it behind his back; so, they argue, the disbelievers will have a book, and so keepers over them. Then an objection: if such a man has no good deed, what does the one on his right write? The answer al-Qurtubi gives is that the one writing on his left does so with his companion's permission, and the companion is a witness to it even if he writes nothing. He closes with wa-Allahu a'lam, and Allah knows best.",
            "bn": "দ্বিতীয় পক্ষ আরও দুটি আয়াত আনেন। ৬৯:২৫ আয়াতে একজনকে তার আমলনামা দেওয়া হয় বাম হাতে, আর ৮৪:১০ আয়াতে দেওয়া হয় পিঠের পেছন দিয়ে। তাঁদের যুক্তি, তাহলে কাফেরদেরও আমলনামা থাকবে, আর তাদের উপর পাহারাদারও থাকবেন। এরপর একটি আপত্তি ওঠে: এমন মানুষের যদি কোনো নেকিই না থাকে, তবে তার ডানের জন কী লেখেন? কুরতুবী যে উত্তর দেন, তা হলো: বামে যিনি লেখেন, তিনি লেখেন তাঁর সঙ্গীর অনুমতি নিয়ে। আর সেই সঙ্গী কিছু না লিখলেও এর সাক্ষী থাকেন। শেষে তিনি বলেন, ওয়াল্লাহু আলাম, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "This needs saying plainly. The question is about how the record is kept, not about who may be judged by us. The verse addresses people who deny the recompense, and it speaks only of what it names: that their deeds too are being written. It licenses nothing against any living person or community. No reader is appointed a recording angel over anyone else. For anyone reading it today, the force of the passage falls on one page only, the reader's own, and on what is being written there now.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। প্রশ্নটা খাতা কীভাবে রাখা হয়, তা নিয়ে। আমরা কাকে বিচার করব, তা নিয়ে নয়। আয়াতটি প্রতিদান অস্বীকারকারীদের সম্বোধন করে, আর পাঠ যা বলে, আয়াত শুধু তা-ই বর্ণনা করে: তাদের আমলও লেখা হচ্ছে। এ আয়াত কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না। কোনো পাঠককে অন্য কারও উপর লেখক ফেরেশতা বানিয়ে পাঠানো হয়নি। আজ যিনি পড়ছেন, তাঁর জন্য এ অংশের ভার পড়ে একটিমাত্র পাতার উপর: তাঁর নিজের পাতা, আর এই মুহূর্তে সেখানে যা লেখা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations With Their Warnings",
          "bn": "সতর্কবার্তাসহ বর্ণনা"
        },
        "p": [
          {
            "en": "No commentary consulted here attaches to this verse a hadith that could be confirmed in one of the six collections, so none is quoted here as the Prophet's ﷺ words. Ibn Kathir does bring three narrations, through Ibn Abi Hatim and al-Bazzar, with notes on their chains. The first comes from Mujahid, attributed to the Prophet ﷺ: the noble writers do not leave you except in one of two states, major impurity and the call of nature. Al-Bazzar gave it a connected chain through Ibn 'Abbas, then said that a narrator in it, Hafs ibn Sulayman, is layyin al-hadith, soft in hadith.",
            "bn": "হাতে আসা কোনো তাফসীর এ আয়াতের সঙ্গে এমন কোনো হাদিস যুক্ত করেনি, যা ছয়টি হাদিসগ্রন্থের কোনোটিতে মিলিয়ে নিশ্চিত করা গেছে। তাই এখানে কোনো বর্ণনাকে নবী ﷺ-এর বাণী হিসেবে উদ্ধৃত করা হচ্ছে না। ইবন কাসীর অবশ্য ইবন আবী হাতিম ও বাযযারের সূত্রে তিনটি বর্ণনা আনেন, সনদ নিয়ে মন্তব্যও সঙ্গে জুড়ে দেন। প্রথমটি মুজাহিদ নবী ﷺ-এর বাণী হিসেবে বর্ণনা করেন: সম্মানিত লেখকেরা দুটি অবস্থার কোনো একটি ছাড়া তোমাদের ছেড়ে যান না, জানাবাত আর প্রাকৃতিক প্রয়োজন সারার সময়। বাযযার ইবন আব্বাস (রাঃ)-এর মাধ্যমে এর সংযুক্ত সনদ দেন। তারপর নিজেই বলেন, সনদের এক বর্ণনাকারী হাফস ইবন সুলাইমান লাইয়িনুল হাদিস, অর্থাৎ হাদিসে দুর্বল।"
          },
          {
            "en": "The second, from Anas, concerns the two keepers raising each day's page with seeking of forgiveness at both its ends. Al-Bazzar says Tammam ibn Najih alone narrated it and calls him salih al-hadith. Ibn Kathir adds that Ibn Ma'in trusted him while al-Bukhari, Abu Zur'a, Ibn Abi Hatim, an-Nasa'i and Ibn 'Adi weakened him, and Ibn Hibban accused him of fabrication. The third, from Abu Hurayra, al-Bazzar weakens through Sallam, whom he calls layyin al-hadith. These gradings are theirs and are reported as they stand.",
            "bn": "দ্বিতীয়টি আনাস (রাঃ) থেকে। এতে আছে দুই পাহারাদারের প্রতিদিনের পাতা উপরে নিয়ে যাওয়ার কথা, যে পাতার শুরু ও শেষে ইস্তিগফার আছে। বাযযার বলেন, এটি একা তাম্মাম ইবন নাজীহ বর্ণনা করেছেন, আর তাঁকে বলেন সালিহুল হাদিস। ইবন কাসীর যোগ করেন, ইবন মাঈন তাঁকে নির্ভরযোগ্য বলেছেন। কিন্তু বুখারী, আবু যুরআ, ইবন আবী হাতিম, নাসাঈ ও ইবন আদী তাঁকে দুর্বল বলেছেন, আর ইবন হিব্বান তাঁর বিরুদ্ধে জাল করার অভিযোগ এনেছেন। তৃতীয়টি আবু হুরাইরা (রাঃ) থেকে। বাযযার একে দুর্বল বলেন সাল্লাম নামের বর্ণনাকারীর কারণে, যাঁকে তিনি বলেন লাইয়িনুল হাদিস। এই মানগুলো তাঁদেরই দেওয়া, এখানে হুবহু তুলে ধরা হলো।"
          },
          {
            "en": "Al-Qurtubi carries the narration about the two states with no chain at all, introduced by ruwiya, it is narrated, alongside two more reports introduced the same way, one of them from 'Ali. He adds that scholars disliked speaking during the call of nature and intercourse, because the angel parts from the servant then. So whether the angels ever leave a person rests, in the texts consulted here, on these narrations, with the warnings attached. This article goes no further than that.",
            "bn": "কুরতুবী দুই অবস্থার বর্ণনাটি আনেন কোনো সনদ ছাড়াই, রুউইয়া, বর্ণিত আছে, বলে। একইভাবে আরও দুটি বর্ণনা আনেন, যার একটি আলী (রাঃ) থেকে। তিনি যোগ করেন, প্রাকৃতিক প্রয়োজন সারার সময় আর সহবাসের সময় কথা বলা আলেমরা অপছন্দ করেছেন, কারণ তখন ফেরেশতা বান্দাকে ছেড়ে যান। তাহলে ফেরেশতারা কখনো মানুষকে ছেড়ে যান কি না, হাতে আসা লেখায় সে কথার ভিত্তি এই বর্ণনাগুলোই, সঙ্গে দুর্বলতার সতর্কবার্তা। এই লেখা এর বেশি এগোচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Page Worth Handing Over",
          "bn": "যে পাতা তুলে দেওয়া যায়"
        },
        "p": [
          {
            "en": "Set the two words side by side again. The surah could have answered the denial of 82:9 with a threat. Instead it describes: over you are keepers, noble, writing. Before it says what they do, it says what they are, and two commentators build their counsel on that first word. Ibn Kathir draws from it a prohibition and as-Sa'di a courtesy. The next verse, 82:12, will add that they know what you do; that belongs to its own entry.",
            "bn": "দুটি শব্দ আবার পাশাপাশি রাখুন। ৮২:৯ আয়াতের অস্বীকারের জবাবে সূরাটি হুমকি দিতে পারত। তা না করে বর্ণনা দিয়েছে: তোমাদের উপর পাহারাদার আছেন, সম্মানিত, লেখক। তাঁরা কী করেন, তা বলার আগে বলেছে তাঁরা কেমন। দুজন তাফসীরকার তাঁদের উপদেশ দাঁড় করান ওই প্রথম শব্দটির উপরেই। ইবন কাসীর সেখান থেকে টানেন একটি নিষেধ, সা'দী টানেন একটি আদব। পরের আয়াত ৮২:১২ জানাবে, তোমরা যা কর, তাঁরা তা জানেন। সে কথা তার নিজের আলোচনায়।"
          },
          {
            "en": "What remains for the reader is practical. Whichever gloss of katibin one finds fullest, deeds alone, or words and deeds, or the acts of the heart as well, the two commentators who draw a conclusion point the same way: honour the writers, and do not bring them foul work. A person can ask, at the end of a day, what was handed over to be written, and whether it was fit for those who are noble with Allah. The page is still open, and tomorrow's lines are not yet written.",
            "bn": "পাঠকের জন্য বাকি থাকে কাজের কথা। কাতিবীন শব্দের যে ব্যাখ্যাই আপনার কাছে পূর্ণাঙ্গ মনে হোক, শুধু আমল, নাকি কথা ও কাজ, নাকি সঙ্গে অন্তরের কাজও, যে দুজন তাফসীরকার উপসংহার টেনেছেন, দুজনের কথা একই দিকে যায়। লেখকদের সম্মান করুন, কদর্য কাজ তাঁদের সামনে আনবেন না। দিনশেষে মানুষ নিজেকে জিজ্ঞেস করতে পারে, আজ লেখার জন্য কী তুলে দিলাম? আল্লাহর কাছে যাঁরা সম্মানিত, তাঁদের হাতে দেওয়ার উপযুক্ত ছিল কি? পাতা এখনো খোলা, কালকের লাইনগুলো এখনো লেখা হয়নি।"
          }
        ]
      }
    ]
  },
  "82:15": {
    "sections": [
      {
        "h": {
          "en": "Three Words That Add Time",
          "bn": "তিন শব্দে যোগ হলো সময়"
        },
        "p": [
          {
            "en": "Yaslawnaha yawma ad-din. The verse is three Arabic words: a verb that carries both its subject and its object, then yawma, the day, then ad-din. It stands between 82:14, which says the fujjar will be in al-Jahim, and 82:16, which says they will not be absent from it. Read alone it is hard to follow, because its pronouns point backwards. At-Tabari fills them in: these fujjar will yasla al-Jahim on the Day of Resurrection. The they is the fujjar, the it is al-Jahim.",
            "bn": "ইয়াসলাওনাহা ইয়াওমাদ্দীন। আয়াতটি মাত্র তিনটি আরবি শব্দ। প্রথমটি এমন এক ক্রিয়া, যার ভেতরেই কর্তা আর কর্ম দুটোই আছে। তারপর ইয়াওমা, অর্থাৎ দিন। তারপর আদ-দীন। আয়াতটির আগে ৮২:১৪, যেখানে বলা হয়েছে ফুজ্জার থাকবে জাহীমে। পরে ৮২:১৬, যেখানে বলা হয়েছে তারা সেখান থেকে অনুপস্থিত থাকবে না। আলাদা করে পড়লে বোঝা কঠিন, কারণ এর সর্বনামগুলো পেছনের দিকে ইঙ্গিত করে। তাবারী সর্বনামগুলোর জায়গায় নাম বসিয়ে দেন: এই ফুজ্জার কিয়ামতের দিন জাহীমে ইয়াসলা করবে। 'তারা' মানে ফুজ্জার, আর 'তাতে' মানে জাহীম।"
          },
          {
            "en": "What the verse adds to 82:14 is time. The verse before gave the people and the place; this one gives the day, and the day has a name. The app's English renders the verb as they will enter to burn therein, with the first words in brackets as the translator's supply, while its Bengali renders it simply as they will enter it. Two translations of one verb already lean different ways, and the commentators show why. This article keeps to 82:15; 82:16 and the questions of 82:17 to 82:19 are named only as context.",
            "bn": "৮২:১৪-এর সঙ্গে এ আয়াত যা যোগ করে, তা হলো সময়। আগের আয়াতে ছিল মানুষ আর জায়গা। এখানে আসে দিন, আর সেই দিনের একটা নামও আছে। এই অ্যাপের ইংরেজি অনুবাদ ক্রিয়াটিকে বলে 'প্রবেশ করে দগ্ধ হবে', প্রথম অংশটুকু বন্ধনীতে, অনুবাদকের যোগ করা বলে। বাংলা অনুবাদে আছে শুধু 'তারা তাতে প্রবেশ করবে'। একই ক্রিয়ার দুই অনুবাদ দুই দিকে ঝুঁকেছে। কেন, তা তাফসীরকারদের কথায় বোঝা যায়। এ লেখা থাকবে ৮২:১৫-এর ভেতরেই। ৮২:১৬ আর ৮২:১৭ থেকে ৮২:১৯ পর্যন্ত প্রশ্নগুলো শুধু প্রসঙ্গ হিসেবে উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Are Called al-Fujjar",
          "bn": "ফুজ্জার কাদের বলা হয়েছে"
        },
        "p": [
          {
            "en": "The verse's subject comes from 82:14, so the first question is who the fujjar are. The Muyassar, explaining 82:14 to 82:16 together, defines them as those who fell short in the rights of Allah and the rights of His servants. Ibn Kathir's abridged English first describes the righteous of 82:13 as those who obeyed Allah and did not meet Him with disobedience, then says the evildoers will be in Hell and eternal torment. Ma'arif al-Qur'an calls them the sinners, set against the righteous in bliss.",
            "bn": "আয়াতের কর্তা এসেছে ৮২:১৪ থেকে, তাই প্রথম প্রশ্ন হলো ফুজ্জার কারা। মুয়াসসার ৮২:১৪ থেকে ৮২:১৬ একসঙ্গে ব্যাখ্যা করে। সেখানে তাদের সংজ্ঞা: যারা আল্লাহর হক আর তাঁর বান্দাদের হক আদায়ে ঘাটতি করেছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আগে ৮২:১৩-এর নেককারদের পরিচয় দেয়। তারা আল্লাহর আনুগত্য করেছে, নাফরমানি নিয়ে তাঁর সামনে হাজির হয়নি। তারপর বলে, অন্যায়কারীরা থাকবে জাহান্নামে আর চিরস্থায়ী আযাবে। মাআরিফুল কুরআন তাদের বলে পাপী, নেয়ামতে থাকা নেককারদের বিপরীতে।"
          },
          {
            "en": "At-Tabari, on this verse, refers to them only as these fujjar, carrying the word over from 82:14 without a fresh definition here. None of the texts consulted for this verse names a nation, a sect or any particular people. Their language describes conduct: falling short in what is owed, disobedience, sin. The Muyassar's definition is built from two duties side by side, what is owed to Allah and what is owed to His servants, and neither half is left out.",
            "bn": "তাবারী এ আয়াতে তাদের শুধু 'এই ফুজ্জার' বলেন। শব্দটা ৮২:১৪ থেকে টেনে আনেন, এখানে নতুন করে সংজ্ঞা দেন না। এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই কোনো জাতি, ফেরকা বা নির্দিষ্ট কোনো গোষ্ঠীর নাম নেয়নি। তাদের ভাষা আচরণের বর্ণনা: পাওনা আদায়ে ঘাটতি, নাফরমানি, গুনাহ। মুয়াসসারের সংজ্ঞায় দুটি দায় পাশাপাশি রাখা। একটি আল্লাহর পাওনা, অন্যটি তাঁর বান্দাদের পাওনা। কোনোটাই বাদ পড়েনি।"
          },
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: a group defined by their deeds, and their end on a coming day. It licenses nothing against any living person or community. It gives no reader the standing to decide which of the living belong to that group, and this article passes no verdict on anyone's fate. The definitions the commentators give are about conduct, and the only conduct a reader can examine fully is his own.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: আমলের দ্বারা চিহ্নিত একদল মানুষ, আর আসন্ন এক দিনে তাদের পরিণতি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। জীবিতদের মধ্যে কে সেই দলে পড়ে, তা ঠিক করার অধিকার এটি কোনো পাঠককে দেয় না। এ লেখাও কারও পরিণতি নিয়ে কোনো রায় দেয় না। তাফসীরকারদের সংজ্ঞাগুলো আচরণ নিয়ে। আর পুরোপুরি যাচাই করা যায় কেবল নিজের আচরণই।"
          }
        ]
      },
      {
        "h": {
          "en": "Entering, Flame and Punishment",
          "bn": "প্রবেশ, শিখা আর আযাব"
        },
        "p": [
          {
            "en": "Now the verb, yaslawnaha. Al-Baghawi glosses it with a single word, yadkhulunaha: they enter it, on the Day of Resurrection. Al-Qurtubi explains it as yusibuhum lahabuha wa harruha, its flame and its heat reach them. The Muyassar gives nearly the same clause without the heat: its flame reaches them, on the Day of Recompense. So al-Baghawi speaks of entering, while al-Qurtubi and the Muyassar speak of the fire's flame reaching them, and al-Qurtubi names its heat as well.",
            "bn": "এবার ক্রিয়াটি, ইয়াসলাওনাহা। বাগাভী এর ব্যাখ্যা দেন একটি শব্দে, ইয়াদখুলূনাহা: কিয়ামতের দিন তারা তাতে প্রবেশ করবে। কুরতুবী বলেন, ইউসীবুহুম লাহাবুহা ওয়া হাররুহা: তার শিখা আর তার উত্তাপ তাদের স্পর্শ করবে। মুয়াসসার প্রায় একই কথা বলে, তবে উত্তাপের উল্লেখ ছাড়া: কর্মফলের দিন তার শিখা তাদের স্পর্শ করবে। অর্থাৎ বাগাভী বলছেন প্রবেশের কথা। কুরতুবী আর মুয়াসসার বলছে আগুনের শিখা পৌঁছানোর কথা। কুরতুবী সঙ্গে উত্তাপের কথাও বলেন।"
          },
          {
            "en": "As-Sa'di explains yaslawnaha as they are punished by it with the severest punishment. At-Tabari, as noted, does not gloss the verb at all; he restates it with its subject and object named and spends his words on the day. Ibn Kathir's abridged English translates the clause as therein they will enter, and taste its burning flame, holding both the entering and the flame inside one rendering, as the app's English does with its bracketed enter to.",
            "bn": "সা'দী ইয়াসলাওনাহার ব্যাখ্যা দেন এভাবে: তাতে তাদের সবচেয়ে কঠিন আযাব দেওয়া হবে। আগেই বলা হয়েছে, তাবারী ক্রিয়াটির আলাদা কোনো ব্যাখ্যা দেন না। তিনি কর্তা ও কর্মের নাম বসিয়ে বাক্যটা আবার বলেন, তাঁর যা বলার, তা দিনটিকে নিয়েই। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অংশটির অনুবাদ করে এভাবে: তারা তাতে প্রবেশ করবে আর তার জ্বলন্ত শিখার স্বাদ নেবে। প্রবেশ আর শিখা দুটোই সেখানে এক অনুবাদে ধরা। এই অ্যাপের ইংরেজি অনুবাদও বন্ধনীর ভেতরের শব্দ দিয়ে একই কাজ করে।"
          },
          {
            "en": "That gives three emphases from the texts consulted here: entering, being reached by flame and heat, and being punished. None of the commentators argues against another here, and none says the others are wrong. They sit side by side, and this article does not choose among them. What they share is that the verb is about the fujjar and al-Jahim, as at-Tabari's restatement makes explicit, and about a day that has not yet come.",
            "bn": "সংগৃহীত তাফসীরগুলো থেকে তাহলে তিনটি দিক পাওয়া গেল: প্রবেশ, শিখা ও উত্তাপের স্পর্শ, আর আযাব। এখানে কোনো তাফসীরকার অন্যের বিরোধিতা করেননি, কেউ বলেননি অন্যরা ভুল। ব্যাখ্যাগুলো পাশাপাশি আছে, আর এ লেখা তাদের মধ্যে কোনোটিকে বেছে নেয় না। সবগুলোতে যা এক, তা হলো ক্রিয়াটি ফুজ্জার আর জাহীম নিয়ে। তাবারী বাক্যটি যেভাবে নতুন করে বলেছেন, তাতে এটা স্পষ্ট। আর ক্রিয়াটি এমন এক দিনের কথা বলে, যা এখনো আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Recompense, Reckoning, Resurrection",
          "bn": "প্রতিদান, হিসাব, পুনরুত্থান"
        },
        "p": [
          {
            "en": "Then yawm ad-din. Ibn Kathir's Arabic, on this verse, gives three words at once: yawm al-hisab wa al-jaza' wa al-qiyamah, the day of reckoning, of recompense and of the Resurrection. His abridged English renders the gloss as the Day of Reckoning, Recompense, and Judgement. Al-Qurtubi has two of the same words, the day of recompense and reckoning. As-Sa'di has the day of recompense for deeds. The Muyassar says the Day of Recompense, and al-Baghawi says the Day of Resurrection.",
            "bn": "এবার ইয়াওমুদ্দীন। এ আয়াতে ইবন কাসীরের আরবি তাফসীর একসঙ্গে তিনটি শব্দ দেয়: ইয়াওমুল হিসাবি ওয়াল জাযায়ি ওয়াল কিয়ামাহ, হিসাবের দিন, প্রতিদানের দিন, কিয়ামতের দিন। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে ব্যাখ্যাটি হয়েছে হিসাব, প্রতিদান আর বিচারের দিন। কুরতুবী নেন এর দুটি শব্দ: প্রতিদান ও হিসাবের দিন। সা'দী বলেন, আমলের প্রতিদানের দিন। মুয়াসসার বলে প্রতিদানের দিন, আর বাগাভী বলেন কিয়ামতের দিন।"
          },
          {
            "en": "At-Tabari puts two descriptions together. Yawm ad-din is the Day of Resurrection, yawma yudanu al-'ibadu bi al-a'mal, the day on which the servants are requited for their deeds and recompensed for them. He adds that the people of interpretation said the like. Then, through his chain, he reports Ibn Abbas (RA): yawm ad-din is one of the names of the Day of Resurrection; Allah made it great and warned His servants of it.",
            "bn": "তাবারী দুটি বর্ণনা একসঙ্গে রাখেন। ইয়াওমুদ্দীন হলো কিয়ামতের দিন, ইয়াওমা ইউদানুল ইবাদু বিল আমাল, যেদিন বান্দাদের তাদের আমলের বদলা দেওয়া হবে, আমল অনুযায়ী প্রতিদান দেওয়া হবে। তিনি যোগ করেন, তাফসীরের আলেমরাও এমনই বলেছেন। তারপর নিজের সনদে ইবন আব্বাস (রাঃ)-এর কথা উদ্ধৃত করেন: ইয়াওমুদ্দীন কিয়ামতের দিনের নামগুলোর একটি। আল্লাহ একে মহান করেছেন, আর এ দিন সম্পর্কে তাঁর বান্দাদের সতর্ক করেছেন।"
          },
          {
            "en": "Across the texts, three words recur: recompense, reckoning and the Resurrection, with judgement added in the English. No commentator here sets one against another. Some name the day by what happens on it, the reckoning and the repaying; al-Baghawi simply calls it the Day of Resurrection. Ibn Kathir's Arabic and at-Tabari hold more than one of these together. The article leaves them side by side and does not choose one as the meaning.",
            "bn": "সবগুলো পাঠে ঘুরেফিরে আসে তিনটি শব্দ: প্রতিদান, হিসাব আর কিয়ামত। ইংরেজি সংস্করণে সঙ্গে যোগ হয়েছে বিচার। এখানে কোনো তাফসীরকার একটিকে আরেকটির বিপরীতে দাঁড় করাননি। কেউ দিনটির নাম দেন সেদিন যা ঘটবে তা দিয়ে, অর্থাৎ হিসাব আর বদলা। বাগাভী একে সরাসরি কিয়ামতের দিন বলেন। ইবন কাসীরের আরবি তাফসীর আর তাবারী একাধিক অর্থ একসঙ্গে ধরে রাখেন। এ লেখা অর্থগুলো পাশাপাশি রাখে, কোনো একটিকে একমাত্র অর্থ বলে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Denied in 82:9",
          "bn": "৮২:৯-এ অস্বীকৃত শব্দটি"
        },
        "p": [
          {
            "en": "Ad-din is not new to the surah when it arrives here. In 82:9 the address was blunt: no, rather you deny ad-din, which the app's English renders as the Recompense. A few verses later the same word returns, now fixed to a day: yawm ad-din. What was denied in 82:9 is named here as the day on which the fujjar meet al-Jahim. The surah then asks twice, in 82:17 and 82:18, what will make you know what the Day of Recompense is, and answers in 82:19. Those verses are left for their own entries.",
            "bn": "আদ-দীন শব্দটি এখানে সূরায় প্রথম আসেনি। ৮২:৯-এ সম্বোধন ছিল সোজাসাপটা: না, বরং তোমরা আদ-দীনকে অস্বীকার করো। এই অ্যাপের ইংরেজি অনুবাদে শব্দটি হয়েছে প্রতিদান। কয়েক আয়াত পরে একই শব্দ ফিরে আসে, এবার একটা দিনের সঙ্গে বাঁধা: ইয়াওমুদ্দীন। ৮২:৯-এ যা অস্বীকার করা হচ্ছিল, এখানে তার নাম সেই দিন, যেদিন ফুজ্জার জাহীমের মুখোমুখি হবে। এরপর সূরা ৮২:১৭ ও ৮২:১৮-তে দুবার জিজ্ঞেস করে, কর্মফলের দিন কী, তা তোমাকে কে জানাবে। জবাব আসে ৮২:১৯-এ। সেই আয়াতগুলো তাদের নিজস্ব আলোচনার জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an ties the pair of verses that open this group, 82:13 and 82:14, to 82:5 earlier in the surah: then one will know what he sent ahead and what he left behind. On the Day of Reckoning, it explains, each person will know what he has done and what the consequences of his deeds will be. Read with that link, 82:15 is where those consequences are given a time, the Day of Recompense.",
            "bn": "মাআরিফুল কুরআন এই অংশের শুরুর দুটি আয়াত, ৮২:১৩ ও ৮২:১৪, জুড়ে দেয় সূরার আগের দিকের ৮২:৫-এর সঙ্গে: তখন প্রত্যেকে জানবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে গেছে। ব্যাখ্যাটি হলো, হিসাবের দিনে প্রত্যেকে জানবে সে কী করেছে, আর তার আমলের পরিণাম কী হবে। এই সংযোগ মাথায় রেখে পড়লে ৮২:১৫ সেই জায়গা, যেখানে পরিণামগুলোর জন্য একটা সময় বেঁধে দেওয়া হয়েছে, কর্মফলের দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping to the Commentators' Clauses",
          "bn": "তাফসীরের বাক্যের সীমার ভেতরে"
        },
        "p": [
          {
            "en": "On the Fire itself, this article reports only what the texts consulted here say about this passage. The Muyassar says its flame reaches them. Al-Qurtubi says its flame and its heat reach them. As-Sa'di says they are punished by it with the severest punishment. Ibn Kathir's abridged English, on 82:14, says the evildoers will be in Hell and eternal torment. Ma'arif al-Qur'an speaks of a Blazing Fire of Hell. Nothing is added here beyond those clauses, and no description is brought in from elsewhere.",
            "bn": "আগুন সম্পর্কে এ লেখা শুধু সেটুকুই বলে, যা এ অংশের জন্য সংগৃহীত তাফসীরগুলোতে আছে। মুয়াসসার বলে, তার শিখা তাদের স্পর্শ করবে। কুরতুবী বলেন, তার শিখা আর উত্তাপ তাদের স্পর্শ করবে। সা'দী বলেন, তাতে তাদের সবচেয়ে কঠিন আযাব দেওয়া হবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮২:১৪ প্রসঙ্গে বলে, অন্যায়কারীরা থাকবে জাহান্নামে আর চিরস্থায়ী আযাবে। মাআরিফুল কুরআন বলে জাহান্নামের জ্বলন্ত আগুনের কথা। এর বাইরে কিছু যোগ করা হয়নি, অন্য কোথাও থেকে কোনো বর্ণনাও আনা হয়নি।"
          },
          {
            "en": "Whether they ever leave it is the subject of the next verse, 82:16, and belongs to that verse's entry. On hadith: none of the tafsirs consulted for 82:15 attaches a hadith to this verse. The one narration Ibn Kathir's abridged text quotes in this passage, addressed to the children of Hashim, comes under 82:19 and refers back to 26:214, so it is left for that verse. No occasion of revelation is given for 82:15 in the texts consulted here either.",
            "bn": "তারা কখনো সেখান থেকে বের হবে কি না, সেটা পরের আয়াত ৮২:১৬-এর বিষয়, তার আলোচনা সেখানেই। হাদিসের ব্যাপারে: ৮২:১৫-এর জন্য সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। এ অংশে ইবন কাসীরের সংক্ষিপ্ত সংস্করণ যে একটিমাত্র বর্ণনা উদ্ধৃত করেছে, বনু হাশিমকে উদ্দেশ করে বলা, সেটি এসেছে ৮২:১৯-এর আলোচনায় এবং ২৬:২১৪-এর দিকে ইঙ্গিত করে। তাই সেটি সেই আয়াতের জন্য রেখে দেওয়া হলো। সংগৃহীত পাঠে ৮২:১৫-এর কোনো শানে নুযূলও উল্লেখ নেই।"
          },
          {
            "en": "The restraint is deliberate. The commentators' notes on this verse are short, most of them a single line, and the verse itself is only three words. It would be easy to fill the space with vivid detail drawn from memory or from other passages, but none of that was in what was read for this verse, so none of it is written here. What the texts give is already enough to carry the warning: a place, a flame, a severe punishment, and a named day on which deeds are repaid.",
            "bn": "এই সংযম ইচ্ছাকৃত। এ আয়াতে তাফসীরকারদের কথা সংক্ষিপ্ত, বেশিরভাগই এক লাইনের। আয়াতটিও মাত্র তিনটি শব্দের। স্মৃতি থেকে বা অন্য আয়াত থেকে চোখ ধাঁধানো বিবরণ এনে জায়গাটা ভরে ফেলা সহজ ছিল। কিন্তু এ আয়াতের জন্য যা পড়া হয়েছে, তাতে সেসব নেই, তাই এখানেও লেখা হয়নি। সতর্কবাণী বহন করতে পাঠে যা আছে তা-ই যথেষ্ট: একটা জায়গা, একটা শিখা, কঠিন আযাব, আর নাম দেওয়া একটা দিন, যেদিন আমলের প্রতিদান দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Meant for Servants",
          "bn": "বান্দাদের জন্য সতর্কবার্তা"
        },
        "p": [
          {
            "en": "The report at-Tabari gives from Ibn Abbas (RA) ends on two verbs: Allah made the day great, and He warned His servants of it. The warning is addressed to servants, which is every reader. That shapes how a verse like this is meant to be held. It is easy to read the fujjar as a third party, people out there whose end is being described for the comfort of those listening. The report points the other way: the day was named and made great so that those who hear of it would take care.",
            "bn": "ইবন আব্বাস (রাঃ)-এর যে কথা তাবারী উদ্ধৃত করেন, তা শেষ হয় দুটি ক্রিয়ায়: আল্লাহ দিনটিকে মহান করেছেন, আর এ দিন সম্পর্কে তাঁর বান্দাদের সতর্ক করেছেন। সতর্কবার্তা বান্দাদের প্রতি, অর্থাৎ প্রত্যেক পাঠকের প্রতি। এ ধরনের আয়াত কীভাবে ধরতে হয়, তা এখান থেকেই বোঝা যায়। ফুজ্জারকে তৃতীয় পক্ষ ভেবে পড়া সহজ, যেন দূরের কিছু লোক, যাদের পরিণতি শুনে শ্রোতারা স্বস্তি পাবে। বর্ণনাটি উল্টো দিকে ইঙ্গিত করে। দিনটির নাম দেওয়া হয়েছে আর তাকে মহান করা হয়েছে, যাতে যারা শোনে তারা সাবধান হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the same turn in its own words: each person will know what he has done. Each person, not each of them. So the honest use of this verse is not to sort the living into groups. It is to ask, of oneself, which of the two descriptions in 82:13 and 82:14 one's own deeds are moving towards, while there is still time to move them. That is a question a reader can answer only for himself, and only he can act on the answer.",
            "bn": "মাআরিফুল কুরআন নিজের ভাষায় একই দিকে ফেরে: প্রত্যেকে জানবে সে কী করেছে। প্রত্যেকে, শুধু ওরা নয়। তাই এ আয়াতের সৎ ব্যবহার জীবিত মানুষদের দলে দলে ভাগ করা নয়। নিজেকে জিজ্ঞেস করা: ৮২:১৩ ও ৮২:১৪-এর দুই বর্ণনার কোনটার দিকে আমার আমল এগোচ্ছে? আর সময় থাকতেই তার দিক বদলানো। এ প্রশ্নের জবাব পাঠক শুধু নিজের জন্যই দিতে পারে। আর সেই জবাব অনুযায়ী কাজও করতে পারে কেবল সে নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds Carried to Their Day",
          "bn": "আমল পৌঁছায় তার দিনে"
        },
        "p": [
          {
            "en": "Two of the glosses put deeds at the centre of the day's name. As-Sa'di calls it the day of recompense for deeds. At-Tabari calls it the day on which the servants are requited for their deeds and recompensed for them. Neither speaks of a recompense for what a person was born into or how others saw him. The day is defined by what was done. That is what makes the verse a warning and not only a report: deeds are still being done today.",
            "bn": "দুটি ব্যাখ্যা দিনটির নামের কেন্দ্রে রাখে আমলকে। সা'দী বলেন, আমলের প্রতিদানের দিন। তাবারী বলেন, যেদিন বান্দাদের তাদের আমলের বদলা দেওয়া হবে, আমল অনুযায়ী প্রতিদান দেওয়া হবে। কে কোন পরিবারে জন্মেছে বা লোকে তাকে কীভাবে দেখত, তার প্রতিদানের কথা দুজনের কেউই বলেন না। দিনটির পরিচয় দেওয়া হয়েছে কৃতকর্ম দিয়ে। এ কারণেই আয়াতটি শুধু খবর নয়, সতর্কবাণীও। কারণ আমল আজও চলছে।"
          },
          {
            "en": "The Muyassar's definition of the fujjar gives the reader something concrete to check. It names two kinds of falling short: in the rights of Allah, and in the rights of His servants. A reader can ask where his prayer, his honesty and his debts stand, and whom he has wronged and not yet made amends to. The verse names a day that has not come. Until it comes, both lists can still be worked on, and that is the mercy inside a warning that is given in advance.",
            "bn": "মুয়াসসারের দেওয়া ফুজ্জারের সংজ্ঞা পাঠকের হাতে যাচাইয়ের মতো একটা স্পষ্ট মাপকাঠি তুলে দেয়। সেখানে ঘাটতির দুটি ধরন: আল্লাহর হকে, আর তাঁর বান্দাদের হকে। পাঠক নিজেকে জিজ্ঞেস করতে পারেন, তাঁর নামাজ, সততা আর দেনার কী অবস্থা। কার উপর অন্যায় করেছেন, অথচ এখনো তার কাছে মাফ চাননি বা ক্ষতিপূরণ দেননি। আয়াতটি এমন এক দিনের নাম নেয়, যা এখনো আসেনি। যতদিন আসেনি, দুটি তালিকা নিয়েই কাজ করা যায়। আগাম সতর্কবাণীর ভেতরে লুকানো রহমত এটাই।"
          }
        ]
      }
    ]
  }
});
