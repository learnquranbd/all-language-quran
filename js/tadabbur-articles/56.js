/**
 * Tadabbur long-form articles — surah 56.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "56:4": {
    "sections": [
      {
        "h": {
          "en": "A Second When Begins",
          "bn": "দ্বিতীয় 'যখন'-এর শুরু"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah opens on a single condition: idha waqa'ati al-waqi'ah, when the Event befalls (56:1). Two short verses follow, that nothing can belie its befalling and that it brings some low and raises others (56:2 and 56:3). Then a second condition begins, in four words: idha rujjati al-ardu rajjan, when the earth is shaken, a shaking. The verb rujjat is passive, so the earth is acted upon rather than acting, and the verbal noun rajjan closes the verse on the same root.",
            "bn": "সূরা আল-ওয়াকিআ শুরু হয় একটিমাত্র শর্ত দিয়ে: ইযা ওয়াকাআতিল ওয়াকিআ, যখন সেই ঘটনা ঘটে যাবে (৫৬:১)। এরপর দুটি ছোট আয়াত। তার সংঘটনকে কেউ মিথ্যা বলতে পারবে না, আর তা কাউকে নামাবে, কাউকে ওঠাবে (৫৬:২ ও ৫৬:৩)। তারপর চারটি শব্দে শুরু হয় দ্বিতীয় শর্ত: ইযা রুজ্জাতিল আরদু রাজ্জা, যখন পৃথিবীকে প্রবল কাঁপুনিতে কাঁপানো হবে। রুজ্জাত ক্রিয়াটি কর্মবাচ্যে। পৃথিবী এখানে নিজে কিছু করছে না, তার উপর কিছু করা হচ্ছে। আয়াতের শেষ শব্দ রাজ্জা একই ধাতুর মাসদার, তাই আয়াতটি শেষও হয় সেই ধাতুতেই।"
          },
          {
            "en": "The next two verses carry the scene further: the mountains are crumbled and become scattered dust (56:5 and 56:6). After that, people become three kinds (56:7), and those groups are named in the verses that follow. This article stays with the shaking of the earth and leaves the mountains and the three groups to their own verses. What the commentators consulted for this verse say about it is not long, but it is exact, and it falls into four parts: the word, the reports, the pictures, and the grammar.",
            "bn": "পরের দুটি আয়াত দৃশ্যটাকে আরও এগিয়ে নেয়। পাহাড় চূর্ণ হয়ে বিক্ষিপ্ত ধুলায় পরিণত হবে (৫৬:৫ ও ৫৬:৬)। তারপর মানুষ তিনটি দলে ভাগ হবে (৫৬:৭), আর পরের আয়াতগুলোতে সেই দলগুলোর নাম আসে। এ লেখা থাকবে শুধু পৃথিবীর কাঁপুনি নিয়ে। পাহাড় আর তিন দলের কথা তাদের নিজ নিজ আয়াতের জন্য তোলা রইল। এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলোর আলোচনা লম্বা নয়, তবে নিখুঁত। তা চারটি ভাগে সাজানো যায়: শব্দের অর্থ, পূর্বসূরিদের বর্ণনা, উপমার ছবি, আর বাক্যগঠন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Root Means Motion",
          "bn": "ধাতুর মূল অর্থ নড়াচড়া"
        },
        "p": [
          {
            "en": "Al-Baghawi states the base meaning plainly: the root of rajj in the language is tahrik, setting something in motion, and the Arabs say rajajtuhu fa-rtajja, I moved it and it moved. Al-Qurtubi gives the verb with its forms, rajjahu yarujjuhu rajjan, meaning he moved it and shook it. He also records the phrase naqatun rajja', which he explains as a she-camel with a great hump, and he leaves that entry as it stands, without tying it to the verse.",
            "bn": "বাগাভী মূল অর্থটা সোজা ভাষায় বলেন। ভাষায় রাজ্জ শব্দের মূল হলো তাহরীক, অর্থাৎ কোনো কিছুকে নাড়ানো। আরবরা বলে রাজাজতুহু ফারতাজ্জা: আমি তাকে নাড়ালাম, আর সে নড়ে উঠল। কুরতুবী ক্রিয়াটির রূপগুলো দেখান, রাজ্জাহু ইয়ারুজ্জুহু রাজ্জান, মানে সে তাকে নাড়াল ও কাঁপাল। তিনি নাকাতুন রাজ্জা কথাটিও উল্লেখ করেন, যার ব্যাখ্যা দেন বড় কুঁজওয়ালা উটনী। তবে এ তথ্যটুকু তিনি যেমন আছে তেমনই রেখে দেন, আয়াতের সঙ্গে জোড়া লাগান না।"
          },
          {
            "en": "At-Tabari takes his illustration from archery. He glosses the verse as: when the earth is quaked and moved with a moving, and explains the word from the Arab saying that the arrow yartajju in the target, meaning that it quivers and shudders. An arrow that has struck its mark and trembles there is the image he chooses. As-Sa'di, the briefest of all, gives two verbs: it was moved, and it convulsed. Four commentators, and each one places motion at the centre of the word.",
            "bn": "তাবারী উদাহরণ নেন তীর ছোড়া থেকে। তাঁর ব্যাখ্যায় আয়াতের অর্থ: যখন পৃথিবীতে ভূকম্পন ঘটানো হবে আর তাকে প্রবলভাবে নাড়ানো হবে। শব্দটা তিনি বোঝান আরবদের একটি কথা দিয়ে: তীর লক্ষ্যবস্তুতে ইয়ারতাজ্জু করছে, মানে থরথর করে কাঁপছে। লক্ষ্যে গেঁথে গিয়ে যে তীর কাঁপতে থাকে, তাবারী সেই ছবিটাই বেছে নেন। সা'দী সবার চেয়ে সংক্ষেপে বলেন, দুটি ক্রিয়ায়: তাকে নাড়ানো হলো, আর সে টলে উঠল। চারজন তাফসীরকার, আর প্রত্যেকেই শব্দটির কেন্দ্রে রাখেন নড়াচড়াকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Quaked, Say the Early Voices",
          "bn": "পূর্বসূরিদের ভাষায় ভূকম্পন"
        },
        "p": [
          {
            "en": "At-Tabari then names those who said the same, each with his chain. From Ibn Abbas, through Ali ibn Abi Talha: zalzalaha, He quaked it. From Mujahid, through Ibn Abi Najih: zulzilat, it was quaked. From Qatada he gives two transmissions with slightly different wording, one through Sa'id, zulzilat zalzalatan, it was quaked with a quaking, and one through Ma'mar, zulzilat zilzalan. He introduces the list by saying that the people of interpretation said the like of what he had said.",
            "bn": "এরপর তাবারী সনদসহ জানান, আর কারা একই কথা বলেছেন। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) বলেছেন: যালযালাহা, তিনি তাকে প্রকম্পিত করলেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেছেন: যুলযিলাত, তাকে প্রকম্পিত করা হলো। কাতাদা থেকে তিনি দুটি বর্ণনা আনেন, শব্দে সামান্য তফাত। সাঈদের সূত্রে: যুলযিলাত যালযালাতান, এক কম্পনে তাকে কাঁপানো হলো। মা'মারের সূত্রে: যুলযিলাত যিলযালান। তালিকাটা শুরুর আগে তাবারী বলে নেন, তিনি যা বলেছেন, ব্যাখ্যাকারেরাও সে রকমই বলেছেন।"
          },
          {
            "en": "Ibn Kathir gathers the same names in one line: Ibn Abbas, Mujahid, Qatada and more than one other said it means zulzilat zilzalan, quaked with a quaking, and his printed text adds shadidan, violent, in brackets. Al-Qurtubi gives the gloss zulzilat wa-hurrikat, quaked and moved, from Mujahid and others. He also preserves one further line from Ibn Abbas: ar-rajjah is a violent movement for which a sound is heard. In that report, then, the shaking is not silent.",
            "bn": "ইবন কাসীর একই নামগুলো এক লাইনে জড়ো করেন। ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা আর আরও অনেকে বলেছেন, এর অর্থ যুলযিলাত যিলযালান, এক কম্পনে কাঁপানো হলো। তাঁর ছাপা পাঠে বন্ধনীর ভেতরে শাদীদান শব্দটি যোগ করা, মানে প্রচণ্ড। কুরতুবী মুজাহিদ ও অন্যদের থেকে অর্থ আনেন: যুলযিলাত ওয়া হুররিকাত, কাঁপানো হলো আর নাড়ানো হলো। ইবন আব্বাস (রাঃ)-এর আরেকটি কথাও তিনি সংরক্ষণ করেন: আর-রাজ্জা হলো এমন প্রচণ্ড নড়াচড়া, যার শব্দ শোনা যায়। এ বর্ণনা অনুযায়ী কাঁপুনিটা তাই নিঃশব্দ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sieve and a Cradle",
          "bn": "চালনি আর দোলনা"
        },
        "p": [
          {
            "en": "Ibn Kathir describes the motion as making the earth shudder and heave along its length and its breadth; the English abridgement of his work renders this as over all of its surface and through its depths. Ar-Rabi' ibn Anas, whom he quotes, gives the most homely image in the material: the earth will be shaken with what is in it as a sieve is shaken with what is in it. The picture is of a whole surface moving together with everything it holds.",
            "bn": "ইবন কাসীর এ নড়াচড়ার বর্ণনা দেন এভাবে: পৃথিবী তার দৈর্ঘ্য আর প্রস্থ জুড়ে কেঁপে উঠবে, টলতে থাকবে। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণে কথাটা এসেছে আরেকটু ভিন্ন রূপে: তার গোটা উপরিভাগ জুড়ে আর গভীর তলদেশ পর্যন্ত। তিনি রাবী ইবন আনাসের যে কথা উদ্ধৃত করেন, তাতে আছে সবচেয়ে ঘরোয়া ছবিটি। চালনিতে যা থাকে তা নিয়ে চালনি যেমন ঝাঁকুনি খায়, তেমনি পৃথিবীও তার ভেতরের সবকিছু নিয়ে ঝাঁকুনি খাবে। গোটা জমিন নড়ছে, সঙ্গে নড়ছে তার বুকে যা আছে সবই।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report a second picture, under the words the commentators said: the earth shakes as a child is rocked in the cradle, until everything on it collapses. Al-Qurtubi's wording goes on: and everything on it breaks, of the mountains and other things. Al-Baghawi has every building on it collapsing, and everything on it, mountains and others, breaking. The two texts differ by a word, a building in one and whatever is on it in the other, and agree on the outcome.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই আরেকটি ছবি আনেন, 'মুফাসসিরগণ বলেছেন' কথাটি দিয়ে। দোলনায় শিশু যেমন দোলে, পৃথিবী তেমনি দুলবে, যতক্ষণ না তার উপরের সবকিছু ধসে পড়ে। কুরতুবীর ভাষ্য আরও এগোয়: পাহাড়সহ তার উপরের সব জিনিস ভেঙে পড়বে। বাগাভীর ভাষ্যে ধসে পড়ে তার উপরের প্রতিটি দালান, আর পাহাড়সহ উপরের সবকিছু ভেঙে যায়। দুই পাঠে তফাত একটি শব্দের। একটিতে 'দালান', অন্যটিতে 'যা কিছু আছে'। পরিণতির ব্যাপারে দুটিই এক।"
          },
          {
            "en": "The Muyassar, which treats 56:4 to 56:6 as one sentence, gives only this for the present verse: when the earth is moved with a severe moving. Its gloss then runs on to the mountains, which belong to the next verse. The cradle image deserves a moment's attention, because a cradle is made to rock a sleeping child gently. In the commentators' picture the same motion is pushed until nothing on the surface of the earth is left standing.",
            "bn": "মুয়াসসার ৫৬:৪ থেকে ৫৬:৬ পর্যন্ত একটিমাত্র বাক্যে ব্যাখ্যা করে। এ আয়াতের জন্য তাতে আছে শুধু এটুকু: যখন পৃথিবীকে প্রচণ্ডভাবে নাড়ানো হবে। এরপর ব্যাখ্যা চলে যায় পাহাড়ের দিকে, যা পরের আয়াতের বিষয়। দোলনার ছবিটা নিয়ে একটু থামা দরকার। দোলনা তো বানানোই হয় ঘুমন্ত শিশুকে আলতো করে দোলানোর জন্য। মুফাসসিরদের ছবিতে সেই দোলাই এত তীব্র হয় যে জমিনের উপর আর কিছুই দাঁড়িয়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Trembling Before Its Lord",
          "bn": "রবের ভয়ে কম্পমান জমিন"
        },
        "p": [
          {
            "en": "Al-Kalbi, quoted by both al-Qurtubi and al-Baghawi, gives a reason rather than a picture. When Allah reveals to the earth, he says, it convulses in fear of Allah. The word he uses for the fear is faraq. On this reading the shaking is not only something done to the earth from outside; it is also the earth's own response to a command from its Lord, and the passive verb of the verse sits beside an earth that answers.",
            "bn": "কালবীর কথা কুরতুবী আর বাগাভী দুজনেই উদ্ধৃত করেন। তিনি ছবি দেন না, দেন একটা কারণ। আল্লাহ যখন পৃথিবীর কাছে ওহি পাঠাবেন, তখন আল্লাহর ভয়ে সে কেঁপে উঠবে। ভয় বোঝাতে তাঁর ব্যবহৃত শব্দটি হলো ফারাক। এ ব্যাখ্যায় কাঁপুনিটা শুধু বাইরে থেকে পৃথিবীর উপর চাপানো কিছু নয়। রবের হুকুমে পৃথিবীর নিজের সাড়াও এর ভেতরে আছে। আয়াতের কর্মবাচ্য ক্রিয়ার পাশে তাই দাঁড়িয়ে যায় এক সাড়া দেওয়া পৃথিবী।"
          },
          {
            "en": "The reading invites a comparison that the commentators leave to the reader. The earth, in al-Kalbi's line, receives a command and trembles. People receive many words, a whole surah of them, and can listen without being moved at all. Neither the verse nor al-Kalbi draws that contrast; it is a question for the one reciting, not a claim about the text. What his line gives is an earth that responds to its Lord when He addresses it.",
            "bn": "এ ব্যাখ্যা একটা তুলনার দিকে ইঙ্গিত দেয়, যা মুফাসসিরগণ পাঠকের হাতেই ছেড়ে দেন। কালবীর কথায় পৃথিবী একটি হুকুম পায়, আর কেঁপে ওঠে। মানুষ পায় অনেক কথা, পুরো একটা সূরা, তবু শুনে যেতে পারে একটুও না নড়ে। এ তুলনা আয়াতও করে না, কালবীও করেন না। এ প্রশ্ন তিলাওয়াতকারীর নিজের জন্য, আয়াতের অর্থ হিসেবে দাবি নয়। কালবীর কথায় আমরা পাই এমন এক পৃথিবী, রব সম্বোধন করলে যে সাড়া দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Second When Attaches",
          "bn": "দ্বিতীয় 'যখন' কোথায় বাঁধা"
        },
        "p": [
          {
            "en": "Of the commentators consulted for this verse, al-Qurtubi alone asks how this second idha relates to the first. He begins by stating that its position is accusative as a badal, a substitute, for idha waqa'at in 56:1. A substitute stands in the place of what it replaces, so on this reading the second clause names the same time as the first: the Event befalls, and that is when the earth is shaken.",
            "bn": "এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর মধ্যে শুধু কুরতুবীই প্রশ্ন তোলেন, দ্বিতীয় ইযা-র সঙ্গে প্রথমটির সম্পর্ক কী। তিনি শুরুতেই বলেন, এর অবস্থান নসবের, আর তা ৫৬:১ আয়াতের ইযা ওয়াকাআত-এর বদল। বদল যে শব্দের বদলে আসে, ঠিক তার জায়গাতেই বসে। তাই এ পাঠে দ্বিতীয় বাক্যাংশ প্রথমটির সেই একই সময়ের কথা বলে। সেই ঘটনা যখন ঘটবে, ঠিক তখনই পৃথিবী কাঁপবে।"
          },
          {
            "en": "He then allows a second option: that it is governed by khafidatun rafi'ah in 56:3, so that the Event lowers and raises at the time when the earth is shaken and the mountains crumbled. He gives the reason for this reading as well: at that moment what is high is brought low, and what is low is raised. A third view, introduced with it has been said and credited to az-Zajjaj and al-Jurjani, reads the sense as: the Event befalls when the earth is shaken.",
            "bn": "এরপর তিনি দ্বিতীয় একটি সম্ভাবনাও মেনে নেন। ৫৬:৩ আয়াতের খাফিদাতুর রাফিআ শব্দ দুটিই একে নিয়ন্ত্রণ করতে পারে। তখন অর্থ দাঁড়ায়: পৃথিবী যখন কাঁপবে আর পাহাড় চূর্ণ হবে, সেই সময়ে ঘটনাটি নামাবে আর ওঠাবে। এ পাঠের কারণও তিনি বলে দেন। তখন যা উঁচু তা নিচু হবে, যা নিচু তা উঁচু হবে। তৃতীয় মতটি তিনি আনেন 'বলা হয়েছে' দিয়ে, আর তা যাজ্জাজ ও জুরজানীর বলে উল্লেখ করেন। তাতে অর্থ: পৃথিবী যখন কাঁপবে, তখন সেই ঘটনা ঘটবে।"
          },
          {
            "en": "A fourth view, also under it has been said, supplies an unstated verb: remember when the earth is shaken. Al-Qurtubi states the substitute reading first, permits the second, and reports the last two as views of others, without refuting any of them; this article leaves the matter where he leaves it. The other commentators consulted for this verse explain its words without addressing its grammar, so on this question the record gathered here is al-Qurtubi's alone.",
            "bn": "চতুর্থ মতটিও আসে 'বলা হয়েছে' দিয়ে। তাতে একটি অনুক্ত ক্রিয়া ধরে নেওয়া হয়: স্মরণ করো, যখন পৃথিবী কাঁপবে। কুরতুবী প্রথমে বদলের পাঠটা নিজে বলেন, দ্বিতীয়টাকে বৈধ বলেন, আর শেষ দুটি অন্যদের মত হিসেবে উল্লেখ করেন। কোনোটিকেই তিনি খণ্ডন করেন না। এ লেখাও বিষয়টা সেখানেই রাখছে, যেখানে তিনি রেখেছেন। অন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো শব্দের ব্যাখ্যা দেয়, বাক্যগঠনে যায় না। তাই এ প্রশ্নে এখানে যা আছে, তা কেবল কুরতুবীর।"
          }
        ]
      },
      {
        "h": {
          "en": "One Verbal Noun, Repeated Quaking",
          "bn": "এক মাসদার, বারবার কম্পন"
        },
        "p": [
          {
            "en": "The verse ends on rajjan, the verbal noun of its own verb. Al-Qurtubi's comment on it is short: rajjan is a masdar, and it is evidence of the repetition of the quaking. He does not describe it as emphasis; he reads it as a sign that the shaking comes more than once. None of the other commentators consulted for this verse comments on the verbal noun as such, so this observation, too, rests on him alone.",
            "bn": "আয়াতটি শেষ হয় রাজ্জান শব্দে, যা তার নিজের ক্রিয়ারই মাসদার। এ নিয়ে কুরতুবীর মন্তব্য ছোট: রাজ্জান মাসদার, আর তা প্রমাণ করে যে কম্পন বারবার হবে। তিনি একে জোর দেওয়ার উপায় বলেন না। তাঁর পাঠে এটি ইঙ্গিত দেয় যে কাঁপুনি একবারে শেষ হবে না। সংগৃহীত অন্য কোনো তাফসীর এই মাসদার নিয়ে আলাদা করে কিছু বলে না। তাই এ পর্যবেক্ষণটিও কেবল তাঁর।"
          },
          {
            "en": "Their glosses do, however, keep the same doubled shape. At-Tabari writes hurrikat tahrikan, moved with a moving; Qatada, in Ma'mar's transmission, says zulzilat zilzalan; Ibn Kathir writes hurrikat tahrikan; and the Muyassar has tahrikan shadidan, a severe moving. The commentators explain a doubled phrase with doubled phrases of their own. That is an observation about their wording only, not a ruling that any of them makes about the verse.",
            "bn": "তবে তাঁদের ব্যাখ্যার ভাষাতেও সেই একই দ্বিরুক্ত গড়ন থেকে গেছে। তাবারী লেখেন হুররিকাত তাহরীকান, নাড়ানোর মতো করে নাড়ানো হলো। মা'মারের সূত্রে কাতাদা বলেন যুলযিলাত যিলযালান। ইবন কাসীর লেখেন হুররিকাত তাহরীকান। মুয়াসসারে আছে তাহরীকান শাদীদান, প্রচণ্ড নাড়ানি। দ্বিরুক্ত শব্দবন্ধের ব্যাখ্যা তাঁরা দিয়েছেন নিজেদেরই দ্বিরুক্ত শব্দবন্ধে। এটুকু শুধু তাঁদের ভাষা নিয়ে একটা লক্ষ করার বিষয়। আয়াত নিয়ে তাঁদের কারও কোনো সিদ্ধান্ত এটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quaking Named Elsewhere",
          "bn": "অন্য আয়াতে একই কম্পন"
        },
        "p": [
          {
            "en": "Ibn Kathir, in both the Arabic and the English abridgement, sets two verses beside this verse with the words: and this is like His saying. The first is 99:1, which the abridgement renders: when the earth is shaken with its earthquake. The second is 22:1: O mankind, have taqwa of your Lord; verily, the earthquake of the Hour is a terrible thing. No other commentator consulted for this verse adds a cross-reference, so these two parallels are his.",
            "bn": "ইবন কাসীর, আরবি মূলে আর ইংরেজি সংক্ষেপে দুই জায়গাতেই, এ আয়াতের পাশে আরও দুটি আয়াত রাখেন। ভূমিকা হিসেবে বলেন: এটা তাঁর এই বাণীর মতো। প্রথমটি ৯৯:১: যখন পৃথিবী তার প্রবল কম্পনে প্রকম্পিত হবে। দ্বিতীয়টি ২২:১: হে মানুষ, তোমাদের রবকে ভয় করো, নিশ্চয়ই কিয়ামতের কম্পন এক ভয়ংকর ব্যাপার। সংগৃহীত অন্য কোনো তাফসীর এ আয়াতের জন্য আর কোনো আয়াতের উল্লেখ করে না। এই দুটি মিল তাই তাঁরই দেখানো।"
          },
          {
            "en": "The second parallel changes the register. In 56:4 the quaking is described and nothing is commanded. In 22:1 the same kind of quaking is named a terrible thing and set directly after a command, to have taqwa of one's Lord. Ibn Kathir does not draw out the link, but placing the verses side by side lets the reader hear the shaking of 56:4 next to that instruction. Read together, the description does not stand alone as spectacle.",
            "bn": "দ্বিতীয় মিলটি সুর বদলে দেয়। ৫৬:৪ আয়াতে কম্পনের বর্ণনা আছে, কোনো হুকুম নেই। ২২:১ আয়াতে একই ধরনের কম্পনকে বলা হয়েছে ভয়ংকর ব্যাপার, আর তা এসেছে সরাসরি একটি হুকুমের পরে: নিজের রবকে ভয় করো। ইবন কাসীর যোগসূত্রটা খুলে বলেন না। তবে আয়াত দুটি পাশাপাশি রাখায় পাঠক ৫৬:৪ আয়াতের কাঁপুনি শোনেন সেই হুকুমের পাশে। একসঙ্গে পড়লে বর্ণনাটা আর নিছক দৃশ্য হয়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Stays Outside This Reading",
          "bn": "এ পাঠের বাইরে যা থাকল"
        },
        "p": [
          {
            "en": "No hadith attaches to this verse in the commentaries consulted for it. Al-Qurtubi cites a narration about travelling by sea when it heaves, but only to show how the verb is used of waves; it is not about this verse, it was not confirmed here, and it is not quoted. Ibn Kathir's opening report concerns the surah as a whole, not this verse. The note from Ma'arif al-Qur'an in this group speaks to 56:3 alone, so it is not used.",
            "bn": "সংগৃহীত তাফসীরগুলোতে এ আয়াতের সঙ্গে যুক্ত কোনো হাদিস নেই। কুরতুবী সমুদ্র উত্তাল থাকার সময় সমুদ্রযাত্রা নিয়ে একটি বর্ণনা আনেন। তবে তা শুধু দেখানোর জন্য যে ঢেউয়ের বেলায় ক্রিয়াটি কীভাবে ব্যবহৃত হয়। বর্ণনাটি এ আয়াত নিয়ে নয়, এখানে তা যাচাইও হয়নি, আর উদ্ধৃতও করা হয়নি। ইবন কাসীর সূরার শুরুতে যে বর্ণনা আনেন, তা পুরো সূরা নিয়ে, এ আয়াত নিয়ে নয়। এ আয়াতগুচ্ছে মাআরিফুল কুরআনের টীকাটি কেবল ৫৬:৩ আয়াত নিয়ে, তাই সেটি এখানে নেওয়া হয়নি।"
          },
          {
            "en": "The verse describes the earth at the onset of the Day of Resurrection, which Ibn Kathir names al-Waqi'ah. It is not a statement about the tremors that strike regions of the world now. It gives no basis for treating any such event as a sign of the times, and no licence to read any disaster as aimed at the people it struck. The commentators' language stays with the Day itself, and the reading here stays there with them.",
            "bn": "আয়াতটি বলছে কিয়ামতের সূচনায় পৃথিবীর অবস্থার কথা। ইবন কাসীর সেই দিনকেই বলেন আল-ওয়াকিআ। আজ পৃথিবীর নানা অঞ্চলে যে ভূমিকম্প হয়, এ আয়াত তার বিবরণ নয়। এমন কোনো ঘটনাকে যুগের আলামত বানানোর ভিত্তি এ আয়াত দেয় না। কোনো দুর্যোগ যাদের উপর এসেছে, সেটি তাদেরই লক্ষ্য করে পাঠানো, এমন কথা বলার সুযোগও দেয় না। মুফাসসিরদের ভাষা থেকেছে সেই দিনটির ভেতরেই, এ লেখাও সেখানেই থাকছে।"
          },
          {
            "en": "What remains for the reader is the picture itself: the ground that holds everything, moved by its Lord. The arrow trembling in its target, the sieve, the cradle, the sound in Ibn Abbas's report, each makes the most familiar thing in human life unfamiliar. The surah will go on to ask who goes where once the ground has moved. This verse asks only that the reader notice what they stand on, and whose command could set it trembling.",
            "bn": "পাঠকের জন্য থেকে যায় ছবিটা নিজেই: যে জমিন সবকিছু ধরে রাখে, তাকেই নাড়িয়ে দিচ্ছেন তার রব। লক্ষ্যে গেঁথে কাঁপতে থাকা তীর, চালনি, দোলনা, ইবন আব্বাস (রাঃ)-এর বর্ণনায় সেই শব্দ। প্রতিটি ছবি মানুষের জীবনের সবচেয়ে চেনা জিনিসটাকে অচেনা করে তোলে। মাটি নড়ে ওঠার পর কে কোথায় যাবে, সূরাটি সামনে সে কথা বলবে। এ আয়াত শুধু চায়, পাঠক খেয়াল করুক সে কিসের উপর দাঁড়িয়ে আছে, আর কার হুকুমে তা কেঁপে উঠতে পারে।"
          }
        ]
      }
    ]
  },
  "56:8": {
    "sections": [
      {
        "h": {
          "en": "Three Kinds, Then a Name",
          "bn": "তিন ভাগ, তারপর প্রথম নাম"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah opens on the Event: the earth is shaken, and the mountains crumble into scattered dust (56:4 to 56:6). Then it turns to people: wa-kuntum azwajan thalathah, and you will be three kinds (56:7). At-Tabari glosses this as: you, O people, will be three kinds and sorts. Through his chain, Qatadah says the three are the stations of people on the Day of Resurrection. Our verse then names the first of them: fa-ashab al-maymanah ma ashab al-maymanah, then the companions of the right, what are the companions of the right?",
            "bn": "সূরা ওয়াকিআ শুরু হয় সেই মহাঘটনা দিয়ে। পৃথিবী প্রবলভাবে কেঁপে ওঠে, পাহাড় চূর্ণ হয়ে বিক্ষিপ্ত ধুলোয় পরিণত হয় (৫৬:৪ থেকে ৫৬:৬)। তারপর আলোচনা আসে মানুষের দিকে: ওয়া কুনতুম আযওয়াজান সালাসাহ, আর তোমরা হবে তিনটি শ্রেণি (৫৬:৭)। তাবারী এর ব্যাখ্যা দেন এভাবে: হে মানুষ, তোমরা হবে তিন প্রকার, তিন ধরন। নিজের সনদে তিনি কাতাদার কথা আনেন: এই তিন হলো কিয়ামতের দিন মানুষের তিন অবস্থান। এরপর আমাদের আয়াত প্রথম দলের নাম নেয়: ফা আসহাবুল মাইমানাহ, মা আসহাবুল মাইমানাহ। তখন ডান দিকের দল, কী সেই ডান দিকের দল!"
          },
          {
            "en": "The commentators give the word azwaj several near-synonyms. Ibn Kathir collects them: Ibn Abbas, asked by Yazid ar-Raqashi, said three categories; Mujahid said three parties; Maymun ibn Mihran said three throngs. Al-Baghawi also says categories. As-Sa'di adds the ground of the split: you will be divided into three groups according to your deeds, good and bad. Al-Qurtubi gives the word its root sense: three kinds, each matching what it belongs with, as one spouse matches the other. Then, he says, Allah made clear who they are.",
            "bn": "আযওয়াজ শব্দের কাছাকাছি কয়েকটি অর্থ তাফসীরকারেরা দিয়েছেন। ইবন কাসীর সেগুলো একসঙ্গে এনেছেন। ইয়াযীদ আর-রাকাশী জিজ্ঞেস করলে ইবন আব্বাস (রাঃ) বলেন, তিনটি শ্রেণি। মুজাহিদ বলেন, তিন দল। মাইমুন ইবন মিহরান বলেন, তিন ঝাঁক। বাগাভীও বলেন, শ্রেণি। সা'দী ভাগের ভিত্তিটাও জানিয়ে দেন: ভালো-মন্দ আমল অনুযায়ী তোমরা তিন দলে ভাগ হয়ে যাবে। কুরতুবী শব্দটিকে তার মূল অর্থে ফেরান। প্রতিটি শ্রেণি মেলে তার নিজের জাতের সঙ্গে, যেমন দম্পতির একজন অপরজনের জোড়া। তারপর, তিনি বলেন, আল্লাহ স্পষ্ট করে দিলেন তারা কারা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Report Doubles as Explanation",
          "bn": "খবরের ভেতরেই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari calls this verse a bayan, an explanation from Allah of the three pairs just announced. The surah said you will be three, and the three are the companions of the right, the companions of the left and the forerunners. Allah, he says, let the report about each group stand in place of a separate explanation, because the speech itself shows its meaning. As-Sa'di puts the same move in a phrase: then He set out in detail the states of the three pairs. The detail begins here, with the right named first.",
            "bn": "তাবারী এ আয়াতকে বলেন বায়ান, অর্থাৎ সদ্য ঘোষিত তিন জোড়ার ব্যাপারে আল্লাহর দেওয়া ব্যাখ্যা। সূরা বলেছে, তোমরা হবে তিনটি ভাগ। সেই তিন হলো ডান দিকের দল, বাম দিকের দল আর অগ্রবর্তীরা। তাবারীর মতে আল্লাহ প্রত্যেক দলের খবরটাকেই আলাদা ব্যাখ্যার কাজ করতে দিয়েছেন, কারণ কথার ভেতরেই তার অর্থ ধরা পড়ে। সা'দী একই কথা এক বাক্যে বলেন: তারপর তিনি তিন জোড়ার অবস্থা খুলে খুলে বর্ণনা করলেন। সেই বর্ণনা শুরু হয় এখান থেকে, আর প্রথমে আসে ডান দিকের দলের নাম।"
          },
          {
            "en": "Al-Jalalayn parses the verse as a single sentence. Fa-ashab al-maymanah is the subject, and its predicate is what follows, ma ashab al-maymanah, a question. So the statement made about the group is a question about the group, and the name is spoken twice within five Arabic words. The left receives the same shape in the next verse (56:9), and the forerunners a doubled name of their own (56:10); each of those has its own discussion. This article stays with the first group and with its name.",
            "bn": "জালালাইন আয়াতটিকে একটিমাত্র বাক্য হিসেবে বিশ্লেষণ করেন। ফা আসহাবুল মাইমানাহ হলো উদ্দেশ্য, আর তার বিধেয় পরের অংশ, মা আসহাবুল মাইমানাহ, যা একটি প্রশ্ন। অর্থাৎ দলটির সম্পর্কে যে খবর দেওয়া হচ্ছে, তা নিজেই দলটিকে নিয়ে এক প্রশ্ন। আরবি পাঁচ শব্দের ভেতরে নামটি এসেছে দুবার। পরের আয়াতে বাম দিকের দলও একই গড়ন পায় (৫৬:৯), আর অগ্রবর্তীরা পায় নিজেদের দ্বিরুক্ত নাম (৫৬:১০)। সেগুলোর আলোচনা তাদের নিজ নিজ জায়গায়। এ লেখা থাকবে প্রথম দলটি আর তার নাম নিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Asked in Wonder",
          "bn": "বিস্ময়ে ভরা এক প্রশ্ন"
        },
        "p": [
          {
            "en": "What does the question ask? At-Tabari answers that Allah is making His Prophet ﷺ marvel at them, and he paraphrases: what a thing are the companions of the right, the ones led off to the right towards Paradise. Al-Baghawi says the same, that Allah made His Prophet ﷺ wonder, and gives the Arabic pattern behind it: people say Zayd, ma Zayd! and means that Zayd is formidable. The question is not seeking information. It points at something whose greatness the speaker leaves unsaid.",
            "bn": "প্রশ্নটা আসলে কী জানতে চায়? তাবারীর উত্তর: আল্লাহ তাঁর নবী ﷺ-কে তাদের ব্যাপারে বিস্মিত করছেন। তিনি অর্থটা এভাবে খুলে বলেন: কী অসাধারণ সেই ডান দিকের দল, যাদের ডান দিক দিয়ে জান্নাতের পথে নিয়ে যাওয়া হয়! বাগাভীও বলেন, আল্লাহ তাঁর নবী ﷺ-কে বিস্মিত করেছেন। পেছনের আরবি বাকরীতিটাও তিনি দেখান। লোকে বলে, যায়দ, মা যায়দ! মানে যায়দ বড় শক্ত মানুষ। কাজেই এখানে প্রশ্ন কোনো তথ্য খুঁজছে না। প্রশ্নটা এমন কিছুর দিকে ইশারা করে, যার মহত্ত্ব বক্তা ইচ্ছা করেই মুখে বলেন না।"
          },
          {
            "en": "Other commentators name the effect directly. As-Sa'di calls the phrase a magnifying of their affair and an exalting of their states. The Muyassar renders the verse: the companions of the right, people of the high station, how great is their standing! Al-Jalalayn calls it a glorification of their status on account of their entering Paradise. None of them supplies an answer to the question. They describe what the question does, and the verse itself never gives its answer in this place.",
            "bn": "অন্য তাফসীরকারেরা প্রভাবটার নাম সরাসরি বলেন। সা'দীর ভাষায়, এ হলো তাদের মর্যাদাকে বড় করে দেখানো, তাদের অবস্থাকে মহিমান্বিত করা। মুয়াসসার আয়াতটির অর্থ করে এভাবে: ডান দিকের দল, উঁচু মর্যাদার মানুষ, কত মহান তাদের অবস্থান! জালালাইন বলেন, জান্নাতে প্রবেশের কারণে এ তাদের মর্যাদার মহিমা ঘোষণা। প্রশ্নের কোনো উত্তর তাঁদের কেউ দেন না। প্রশ্নটা কী কাজ করছে, তাঁরা শুধু সেটুকুই বলেন। আয়াতও এখানে নিজের প্রশ্নের জবাব দেয় না।"
          },
          {
            "en": "The same pattern serves the opposite group. In the next verse the left receive an identical question, and the Muyassar, glossing both verses together, turns its exclamation around: the companions of the left, people of the low station, how evil is their state! One grammatical form carries wonder at honour in one verse and dread at loss in the next, and only the name it repeats tells the listener which. The repetition magnifies; what it magnifies depends on whose name is repeated.",
            "bn": "এই একই গড়ন বিপরীত দলের বেলাতেও আসে। পরের আয়াতে বাম দিকের দলের জন্যও হুবহু একই প্রশ্ন। মুয়াসসার দুই আয়াতের অর্থ একসঙ্গে করেছে, আর সেখানে তার বিস্ময়ধ্বনি উল্টে যায়: বাম দিকের দল, নিচু অবস্থানের মানুষ, কত মন্দ তাদের দশা! একই বাক্যগঠন এক আয়াতে সম্মান দেখে বিস্ময় জাগায়, পরের আয়াতে ক্ষতির ভয়। কোনটা কোথায়, শ্রোতা তা বোঝে শুধু পুনরাবৃত্ত নামটি থেকে। পুনরাবৃত্তি বড় করে তোলে, কিন্তু কী বড় হবে তা ঠিক করে দেয় কার নাম ফিরে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Led Off Towards the Right",
          "bn": "ডান দিকের পথে যাত্রা"
        },
        "p": [
          {
            "en": "Why the right? The first answer is a direction. At-Tabari, al-Qurtubi and al-Baghawi give the same definition, nearly word for word: they are those who are taken along the right-hand side to Paradise. Ibn Kathir, commenting on the three kinds, places them on the right of the Throne and says they are taken towards the right. He adds a remark from as-Suddi: they are the bulk of the people of Paradise. On this reading the name describes where the group stands and which way it is led.",
            "bn": "ডান কেন? প্রথম উত্তর একটা দিক। তাবারী, কুরতুবী আর বাগাভী, এই তিনজন প্রায় হুবহু একই সংজ্ঞা দেন: এরা তারা, যাদের ডান দিক দিয়ে জান্নাতের দিকে নিয়ে যাওয়া হয়। ইবন কাসীর তিন শ্রেণির আলোচনায় তাদের স্থান দেন আরশের ডান পাশে, আর বলেন, তাদের নিয়ে যাওয়া হবে ডান দিকে। সঙ্গে তিনি সুদ্দীর একটি কথা যোগ করেন: জান্নাতবাসীদের বড় অংশই এরা। এ ব্যাখ্যায় নামটি বলে দেয় দলটি কোথায় দাঁড়ায়, আর কোন পথে তাদের নেওয়া হয়।"
          },
          {
            "en": "The second answer is a hand. Ad-Dahhak, in al-Baghawi, says they are those given their books in their right hands, and al-Jalalayn defines them the same way. Ibn Kathir joins this to the direction in one description. The Qur'an pictures the moment elsewhere: as for him who is given his book in his right hand, he will say, here, read my book (69:19), and the same opening appears in 84:7. The opposite case comes a few verses later, the one given his book in his left hand (69:25).",
            "bn": "দ্বিতীয় উত্তর একটা হাত। বাগাভীর বর্ণনায় দাহহাক বলেন, এরা তারা, যাদের আমলনামা দেওয়া হবে ডান হাতে। জালালাইনও তাদের সংজ্ঞা দেন এভাবেই। ইবন কাসীর দিক আর হাত, দুটোকে একই বর্ণনায় জুড়ে দেন। মুহূর্তটার ছবি কুরআন অন্যত্র এঁকেছে: যাকে তার আমলনামা ডান হাতে দেওয়া হবে, সে বলবে, এই নাও, আমার আমলনামা পড়ে দেখো (৬৯:১৯)। একই সূচনা আছে ৮৪:৭ আয়াতেও। বিপরীত চিত্র আসে কয়েক আয়াত পরে, যাকে আমলনামা দেওয়া হবে বাম হাতে (৬৯:২৫)।"
          }
        ]
      },
      {
        "h": {
          "en": "On Adam's Right Side",
          "bn": "আদম (আঃ)-এর ডান পাশে"
        },
        "p": [
          {
            "en": "The third answer reaches back before birth. Al-Baghawi reports from Ibn Abbas that the companions of the right are those who were on the right of Adam (AS) when his offspring were brought out from his loins, and that Allah said of them: these are in Paradise, and I do not mind. Ibn Kathir, in his description of the three kinds, says the same group are those who came out from Adam's right side. Ma'arif al-Qur'an relays that description from Ibn Kathir.",
            "bn": "তৃতীয় উত্তর পৌঁছে যায় জন্মেরও আগে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: ডান দিকের দল তারা, আদম (আঃ)-এর পিঠ থেকে যখন তাঁর বংশধরদের বের করা হয়েছিল, তখন যারা ছিল তাঁর ডান পাশে। তাদের সম্পর্কে আল্লাহ বলেছিলেন: এরা জান্নাতে যাবে, আর আমি কারও পরোয়া করি না। ইবন কাসীরও তিনটি শ্রেণির বর্ণনায় বলেন, এ দলটি তারা, যারা বেরিয়েছিল আদম (আঃ)-এর ডান পাশ থেকে। মাআরিফুল কুরআন ইবন কাসীরের এই বর্ণনাটিই উদ্ধৃত করেছে।"
          },
          {
            "en": "A sound narration speaks of Adam (AS) with people on his right and his left, though none of the commentators consulted attaches it to this verse. In the long account of the Night Journey in Sahih al-Bukhari (349), from Abu Dharr, the Prophet ﷺ says of the nearest heaven: \"there we saw a man sitting with some people on his right and some on his left. When he looked towards his right, he laughed and when he looked toward his left he wept.\" Gabriel told him: \"He is Adam and the people on his right and left are the souls of his offspring.\"",
            "bn": "একটি সহীহ বর্ণনায় আদম (আঃ)-এর কথা আছে, যাঁর ডানে ও বামে মানুষ। তবে যেসব তাফসীর দেখা হয়েছে, তাদের কেউ এটিকে এ আয়াতের সঙ্গে যুক্ত করেননি। সহীহ বুখারীতে (৩৪৯) আবু যর (রাঃ)-এর সূত্রে মিরাজের দীর্ঘ বর্ণনায় নবী ﷺ প্রথম আসমানের কথা বলেন: \"সেখানে আমরা এক ব্যক্তিকে বসা দেখলাম, যাঁর ডানে একদল মানুষ, বামেও একদল। ডান দিকে তাকালে তিনি হাসতেন, বাম দিকে তাকালে কাঁদতেন।\" জিবরীল (আঃ) তাঁকে বললেন: \"ইনি আদম, আর তাঁর ডানে-বামে এরা তাঁর সন্তানদের রূহ।\""
          },
          {
            "en": "The narration goes on: \"Those on his right are the people of Paradise and those on his left are the people of Hell.\" It is a general narration about Adam's offspring, and this article does not make it a comment on the verse. The commentators also keep deeds in view. Ibn Kathir names Adam's right side and the book handed to the right hand in the same breath, and as-Sa'di, as quoted above, grounds the whole division in good and bad deeds. The two strands are reported here side by side, without an argument built on either.",
            "bn": "বর্ণনাটি আরও বলে: \"তাঁর ডানের লোকেরা জান্নাতবাসী, আর বামের লোকেরা জাহান্নামবাসী।\" আদম (আঃ)-এর সন্তানদের নিয়ে এটি একটি সাধারণ বর্ণনা, এ লেখা একে আয়াতের ব্যাখ্যা বানায় না। তাফসীরকারেরা আমলের কথাও চোখের আড়াল করেন না। ইবন কাসীর আদম (আঃ)-এর ডান পাশ আর ডান হাতে আমলনামা পাওয়ার কথা একই নিঃশ্বাসে বলেন। আর আগেই এসেছে, সা'দী পুরো বিভাজনের ভিত্তি রেখেছেন ভালো-মন্দ আমলের উপর। দুটি ধারাই এখানে পাশাপাশি রাখা হলো, কোনোটার উপর আলাদা যুক্তি দাঁড় করানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Blessed Upon Themselves",
          "bn": "নিজেদের জন্য বরকতময়"
        },
        "p": [
          {
            "en": "The fourth answer reads the name as a quality of life. Al-Baghawi reports from al-Hasan and ar-Rabi' that the companions of the right were mayamin, mubarakin 'ala anfusihim: people of good fortune, blessed upon their own selves, whose lifetimes were spent in obedience to Allah. They are, he adds, those who followed in excellence. The words maymanah, yamin and mayamin come from the same root, y-m-n, and this reading hears in the name the side of that root that means blessing and good fortune.",
            "bn": "চতুর্থ উত্তর নামটিকে পড়ে জীবনের এক গুণ হিসেবে। বাগাভী হাসান ও রাবী' থেকে বর্ণনা করেন: ডান দিকের দল ছিল মায়ামীন, মুবারাকীন আলা আনফুসিহিম। অর্থাৎ তারা ছিল সৌভাগ্যবান, নিজেদের জন্য বরকতময়, আর তাদের জীবন কেটেছে আল্লাহর আনুগত্যে। তিনি যোগ করেন, এরাই তারা, যারা নিষ্ঠার সঙ্গে অনুসরণ করেছে। মাইমানাহ, ইয়ামীন আর মায়ামীন, তিনটি শব্দই এসেছে একই ধাতু ই-ম-ন থেকে। এ ব্যাখ্যা নামের ভেতর শুনতে পায় সেই ধাতুর অন্য অর্থটি: বরকত আর সৌভাগ্য।"
          },
          {
            "en": "On this reading the right is no longer only a place or a hand. It describes what these people were to themselves before the Day came: lives that brought good to their owners because they were spent in obedience. Al-Baghawi sets the four explanations one after another, naming the source of the last three, and does not rank them. Ibn Kathir, as seen above, holds the Throne, Adam's side and the right hand together in one description. The article keeps both ways of presenting the readings as each commentator gave them.",
            "bn": "এ ব্যাখ্যায় ডান আর শুধু একটা জায়গা বা একটা হাত নয়। কিয়ামত আসার আগে এ মানুষগুলো নিজেদের জন্য কী ছিল, নামটি সেটাই বলে। তাদের জীবন আনুগত্যে কেটেছে, তাই সে জীবন নিজের মালিকের জন্যই কল্যাণ বয়ে এনেছে। বাগাভী চারটি ব্যাখ্যা একের পর এক দেন, শেষ তিনটির বক্তার নামসহ, আর কোনোটাকে আগে-পিছে সাজান না। ইবন কাসীর, যেমন আগে দেখা গেছে, আরশের পাশ, আদম (আঃ)-এর পাশ আর ডান হাত একই বর্ণনায় একসঙ্গে রাখেন। দুজনে যেভাবে দিয়েছেন, এ লেখা ব্যাখ্যাগুলো সেভাবেই রাখল।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Kind With Its Like",
          "bn": "যে যার জাতের সঙ্গে"
        },
        "p": [
          {
            "en": "Al-Qurtubi's gloss of azwaj, kinds matched as spouses are matched, has a counterpart in a report Ibn Kathir cites through Ibn Abi Hatim. The report, from an-Nu'man ibn Bashir and ascribed to the Prophet ﷺ, links the pairing of souls in 81:7 to these verses: people joined with those whose deeds they shared. Ibn Kathir gives the report no grading in this passage, and this article could not confirm it in a graded collection, so its wording is not quoted as the Prophet's ﷺ. No commentator consulted attaches a sound hadith to this verse.",
            "bn": "আযওয়াজের ব্যাখ্যায় কুরতুবী বলেছিলেন, প্রতিটি শ্রেণি জোড়া মেলে নিজের জাতের সঙ্গে, যেমন স্বামী-স্ত্রীর জোড়া। একই ভাবনার কাছাকাছি একটি বর্ণনা ইবন কাসীর এনেছেন ইবন আবী হাতিমের সূত্রে। বর্ণনাটি নুমান ইবন বাশীর (রাঃ)-এর সূত্রে নবী ﷺ-এর দিকে সম্বন্ধিত। তাতে ৮১:৭ আয়াতে আত্মাদের জোড়া বাঁধার কথাকে এ আয়াতগুলোর সঙ্গে মেলানো হয়েছে। অর্থ দাঁড়ায়, যে যাদের মতো আমল করেছে, তাকে তাদের সঙ্গেই মেলানো হবে। এ জায়গায় ইবন কাসীর বর্ণনাটির কোনো মান উল্লেখ করেননি। মানসহ কোনো সংকলনে এ লেখা তা যাচাই করতে পারেনি, তাই এর শব্দগুলো নবী ﷺ-এর বাণী হিসেবে উদ্ধৃত করা হলো না। যেসব তাফসীর দেখা হয়েছে, তাদের কেউ এ আয়াতের সঙ্গে কোনো সহীহ হাদীস যুক্ত করেননি।"
          },
          {
            "en": "Ibn Kathir also gathers how the early generations counted the three. 'Uthman ibn Suraqah, son of the maternal aunt of 'Umar ibn al-Khattab, said: two in Paradise and one in the Fire. Ibn Jurayj reports from Ibn Abbas that the three are the ones named again at the end of this surah and in Surah Fatir. Ibn Kathir himself says that Allah divides people into the same three at the time of their death, at the close of the surah. That return to the three belongs to its own verses.",
            "bn": "প্রথম যুগের মানুষেরা তিন দলকে কীভাবে গুনতেন, ইবন কাসীর তাও একসঙ্গে এনেছেন। উমর ইবনুল খাত্তাব (রাঃ)-এর খালাতো ভাই উসমান ইবন সুরাকা বলেন: দুই দল জান্নাতে, একটি দল জাহান্নামে। ইবন জুরাইজ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এই তিনটি দলের কথাই আবার এসেছে এ সূরার শেষে আর সূরা ফাতিরে। ইবন কাসীর নিজে বলেন, মৃত্যুর সময়ও আল্লাহ মানুষকে এই তিন ভাগে ভাগ করেন, যেমন সূরার শেষ অংশে এসেছে। তিন দলে সেই ফিরে আসার আলোচনা তার নিজের আয়াতগুলোতেই হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Stops",
          "bn": "আয়াত যেখানে থামে"
        },
        "p": [
          {
            "en": "The surah returns to this group later under a slightly different name, ashab al-yamin (56:27), and the verses after it describe what they are given. That description has its own place and is not taken up here. Verse 56:8 does something narrower. It names the first of the three groups, asks a question about them that it leaves unanswered, and lets the listener feel the weight of that silence. The commentators explain the name and the wonder; the reward waits for its verses.",
            "bn": "সূরা পরে এ দলের কাছে ফিরে আসে সামান্য ভিন্ন নামে, আসহাবুল ইয়ামীন (৫৬:২৭)। তার পরের আয়াতগুলো বলে তাদের কী দেওয়া হবে। সেই বর্ণনার জায়গা আলাদা, এখানে তা আনা হলো না। ৫৬:৮ আয়াতের কাজ আরও সীমিত। সে তিনটি দলের প্রথমটির নাম নেয়, তাদের নিয়ে এমন এক প্রশ্ন তোলে যার উত্তর দেয় না, আর সেই নীরবতার ভার শ্রোতাকে অনুভব করতে দেয়। তাফসীরকারেরা নাম আর বিস্ময়ের ব্যাখ্যা দেন। প্রতিদানের কথা অপেক্ষা করে তার নিজের আয়াতের জন্য।"
          },
          {
            "en": "The verse describes three groups on the Day of Resurrection as the text describes them. It names no living person, and it licenses nothing against any person or community: no one may use it to place others among the left, or to promise anyone a seat among the right. What it hands the reader is a question about their own deeds, which as-Sa'di makes the ground of the whole division. The record taken in the right hand is written now, one day at a time.",
            "bn": "আয়াতটি কিয়ামতের দিনের তিনটি দলের বর্ণনা দেয়, ঠিক যেভাবে কুরআনের ভাষ্য তা দিয়েছে। এতে কোনো জীবিত মানুষের নাম নেই। কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। অন্যদের বাম দলে ফেলে দেওয়ার জন্য একে ব্যবহার করা যাবে না, কাউকে ডান দলে আসনের নিশ্চয়তা দেওয়ার জন্যও নয়। পাঠকের হাতে আয়াত তুলে দেয় তার নিজের আমল নিয়ে একটি প্রশ্ন, আর সা'দী সেই আমলকেই পুরো বিভাজনের ভিত্তি বলেছেন। ডান হাতে যে আমলনামা নেওয়া হবে, তা লেখা হচ্ছে এখনই, প্রতিদিন একটু একটু করে।"
          }
        ]
      }
    ]
  },
  "56:10": {
    "sections": [
      {
        "h": {
          "en": "The Third Group Comes Last",
          "bn": "তৃতীয় দলটি আসে সবার শেষে"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah has just told its listeners that they will become three kinds (56:7). Two are named at once, each followed by a phrase of wonder: the companions of the right, what are the companions of the right (56:8), and the companions of the left, what are the companions of the left (56:9). The third closes the list in two Arabic words, wa-s-sabiqun as-sabiqun: and the forerunners, the forerunners. At-Tabari opens his comment by placing them. They are the third pair, az-zawj ath-thalith, of the three the surah announced.",
            "bn": "সূরা ওয়াকিআ একটু আগেই শ্রোতাদের জানিয়েছে, তারা তিনটি ভাগে ভাগ হয়ে যাবে (৫৬:৭)। দুটি দলের নাম আসে সঙ্গে সঙ্গে, প্রত্যেকটির পরে বিস্ময়ের এক বাক্য। ডান দিকের দল, কেমন সে ডান দিকের দল (৫৬:৮)। বাম দিকের দল, কেমন সে বাম দিকের দল (৫৬:৯)। তৃতীয় দলটি তালিকা শেষ করে মাত্র দুটি আরবি শব্দে: ওয়াস-সাবিকূনাস-সাবিকূন, আর অগ্রবর্তীরা, অগ্রবর্তীরা। তাবারী তাঁর আলোচনা শুরু করেন এদের জায়গা চিনিয়ে দিয়ে। সূরা যে তিন দলের ঘোষণা দিয়েছে, এরা তার তৃতীয় দল, আয-যাওজুস-সালিস।"
          },
          {
            "en": "Ibn Kathir, in the abridged English rendering of his commentary, describes this third category as the foremost and nearest before Allah, in a better grade and status than those on the right and nearer to Him. He calls them the chiefs of those on the right, because they include the Messengers, Prophets, true believers and martyrs, and he says they are fewer in number. He also joins the three groups to another verse that divides people three ways: some wrong themselves, some keep a middle course, and some are, by Allah's leave, foremost in good deeds (35:32).",
            "bn": "ইবন কাসীরের তাফসীরের সংক্ষিপ্ত ইংরেজি রূপে এই তৃতীয় দলের পরিচয় এভাবে: এরা আল্লাহর কাছে সবচেয়ে অগ্রগামী ও সবচেয়ে নিকটবর্তী। মর্যাদা আর স্তরে এরা ডান দিকের দলের চেয়েও উঁচুতে, আল্লাহর আরও কাছে। তিনি এদের বলেন ডান দিকের দলের নেতা, কারণ এদের মধ্যে আছেন রাসূলগণ, নবীগণ, সত্যনিষ্ঠ মুমিন আর শহীদগণ। সংখ্যায় এরা কম, সে কথাও তিনি বলেন। তিনটি দলকে তিনি আরেকটি আয়াতের সঙ্গে মিলিয়ে দেখান, যেখানে মানুষ তিন ভাগে ভাগ হয়েছে। কেউ নিজের উপর জুলুম করে, কেউ মাঝামাঝি পথে চলে, আর কেউ আল্লাহর অনুমতিতে নেক কাজে সবার আগে (৩৫:৩২)।"
          }
        ]
      },
      {
        "h": {
          "en": "Parsing the Doubled Word",
          "bn": "দুবার বলা শব্দের ব্যাকরণ"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two analyses of how the doubled word works. In the first, which he introduces with it is said, the first as-sabiqun is the subject, the second is tawkid, an emphasis that repeats it, and the predicate comes in the next verse: ula'ika al-muqarrabun, those are the ones brought near (56:11). In the second, which he gives as al-Zajjaj's, the first as-sabiqun is the subject and the second is its predicate. Al-Zajjaj then states the meaning: those who go ahead to obedience to Allah are those who go ahead to the mercy of Allah.",
            "bn": "দুবার আসা শব্দটি কীভাবে কাজ করছে, কুরতুবী তার দুটি বিশ্লেষণ উল্লেখ করেন। প্রথমটি তিনি আনেন 'বলা হয়' কথাটি দিয়ে। এ মতে প্রথম আস-সাবিকূন উদ্দেশ্য, দ্বিতীয়টি তাওকীদ, অর্থাৎ জোর দেওয়ার জন্য পুনরাবৃত্তি। আর বিধেয় আসে পরের আয়াতে: উলাইকাল মুকাররাবূন, তারাই নৈকট্যপ্রাপ্ত (৫৬:১১)। দ্বিতীয় বিশ্লেষণটি তিনি দেন যাজ্জাজের নামে। তাঁর মতে প্রথম আস-সাবিকূন উদ্দেশ্য, দ্বিতীয়টিই তার বিধেয়। অর্থটাও যাজ্জাজ বলে দেন: আল্লাহর আনুগত্যে যারা আগে ছুটেছে, আল্লাহর রহমতের দিকেও তারাই আগে।"
          },
          {
            "en": "At-Tabari likewise gives two ways to explain why the forerunners stand in the nominative, and he lists both without preferring one. In the first, the first word is made nominative by the second, and the sense becomes the forerunners, the first ones, as one says the foremost, the first. In the second, it is made nominative by ula'ika al-muqarrabun, so the sentence runs on into 56:11. Explaining that phrase, he says these are the ones whom Allah brings near to Himself on the Day of Resurrection, when He admits them to Paradise.",
            "bn": "তাবারীও দেখান, আস-সাবিকূন শব্দটি কেন কর্তৃকারকে, তার দুটি ব্যাখ্যা হতে পারে। দুটিই তিনি উল্লেখ করেন, কোনো একটিকে অগ্রাধিকার না দিয়ে। এক ব্যাখ্যায় দ্বিতীয় শব্দটিই প্রথমটিকে কর্তৃকারকে এনেছে। তখন অর্থ দাঁড়ায়: অগ্রবর্তীরা, যারা প্রথম। যেমন লোকে বলে, সবার আগে যে, সে-ই প্রথম। অন্য ব্যাখ্যায় শব্দটি কর্তৃকারকে এসেছে উলাইকাল মুকাররাবূনের কারণে, ফলে বাক্যটি গড়িয়ে যায় ৫৬:১১ পর্যন্ত। সেই অংশের ব্যাখ্যায় তিনি বলেন, এরা তারাই, কিয়ামতের দিন জান্নাতে প্রবেশ করানোর সময় আল্লাহ যাদের নিজের কাছে টেনে নেবেন।"
          },
          {
            "en": "These are distinct readings of the same two words, and the commentators consulted here keep them side by side as alternatives. In one, the doubling is an emphasis that waits for its predicate in the next verse. In another, it is a complete sentence, in which going ahead here is matched by going ahead there. In a third, the second word carries the sense of being first. This article reports them as the commentators gave them and adds no reading of its own.",
            "bn": "একই দুটি শব্দের এগুলো আলাদা আলাদা পাঠ। এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো এদের পাশাপাশি রেখেছে বিকল্প হিসেবে। এক পাঠে পুনরাবৃত্তিটা জোর দেওয়ার জন্য, বিধেয়ের জন্য তা অপেক্ষা করে পরের আয়াত পর্যন্ত। আরেক পাঠে এটি নিজেই পূর্ণ বাক্য: এখানে যে আগে, সেখানেও সে আগে। তৃতীয় পাঠে দ্বিতীয় শব্দটির মধ্যে আছে প্রথম হওয়ার অর্থ। তাফসীরকারেরা যেভাবে দিয়েছেন, এ লেখা সেভাবেই তা তুলে ধরছে। নিজের কোনো পাঠ যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahead Here, Ahead There",
          "bn": "এখানে আগে, সেখানেও আগে"
        },
        "p": [
          {
            "en": "Several commentators read the verse as a matching of this life and the next. The Muyassar puts it in one sentence: those who go ahead to good deeds in this world are those who go ahead to the high ranks in the Hereafter. As-Sa'di says almost the same, naming entry into the Gardens. Al-Baghawi reports from Ibn Abbas that those ahead to the hijrah are those ahead in the Hereafter, and from ar-Rabi' ibn Anas that those ahead in answering the Messenger ﷺ in this world are those ahead to Paradise in the end.",
            "bn": "কয়েকজন তাফসীরকার আয়াতটি পড়েছেন দুনিয়া আর আখিরাতের এক মিল হিসেবে। মুয়াসসার কথাটা বলে এক বাক্যে: দুনিয়ায় নেক কাজের দিকে যারা আগে ছোটে, আখিরাতে উঁচু মর্যাদার দিকেও তারাই আগে। সা'দীও প্রায় একই কথা বলেন, শুধু জান্নাতে প্রবেশের কথাটা স্পষ্ট করে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, হিজরতে যারা আগে, আখিরাতেও তারাই আগে। রাবী ইবন আনাস থেকে বর্ণনা করেন, দুনিয়ায় রাসূল ﷺ-এর ডাকে যারা আগে সাড়া দিয়েছে, শেষ ঠিকানায় জান্নাতের দিকেও তারাই আগে।"
          },
          {
            "en": "Ibn Kathir grounds the same reading in two commands. They were foremost, he says, in doing good as Allah commanded them: hasten to forgiveness from your Lord and a Garden as wide as the heavens and the earth (3:133), and race towards forgiveness from your Lord and a Garden as wide as the sky and the earth (57:21). Whoever goes ahead in this world and is first to good, he says, will in the Hereafter be among those ahead to honour, for the reward is of the same kind as the deed, and as you treat others, so you are treated.",
            "bn": "ইবন কাসীর এ পাঠের ভিত্তি খোঁজেন দুটি আদেশে। তাঁর কথায়, আল্লাহ যেমন হুকুম করেছেন, তেমনি এরা নেক কাজে সবার আগে ছিল। একটি আদেশ: তোমাদের রবের মাগফিরাত আর আসমান-জমিনের মতো প্রশস্ত জান্নাতের দিকে দ্রুত এগিয়ে যাও (৩:১৩৩)। অন্যটি: তোমাদের রবের মাগফিরাত আর আসমান-জমিনের মতো প্রশস্ত জান্নাতের দিকে পাল্লা দিয়ে ছোটো (৫৭:২১)। তিনি বলেন, দুনিয়ায় যে আগে এগিয়েছে, কল্যাণের দিকে প্রথম ছুটেছে, আখিরাতে সে সম্মানের দিকে অগ্রবর্তীদের দলে থাকবে। কারণ প্রতিদান আমলের ধরন অনুযায়ীই হয়। যেমন করবে, তেমন পাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Crowd of Answers",
          "bn": "এক প্রশ্নের বহু জবাব"
        },
        "p": [
          {
            "en": "On who exactly is meant, the sources consulted for this verse give a long list, and none presents it as a ranking. Muhammad ibn Ka'b and Abu Hazrah Ya'qub ibn Mujahid, in Ibn Kathir, say they are the Prophets; Ma'arif al-Qur'an gives that view under the name of Mujahid. As-Suddi says they are the people of 'Illiyyin. Al-Hasan and Qatadah say they come from every nation, which al-Qurtubi words as those ahead to faith from every nation. Al-Baghawi has 'Ikrimah say those ahead to Islam, and Muqatil those ahead to answering the Prophets with faith.",
            "bn": "ঠিক কারা উদ্দেশ্য, এ আয়াতের জন্য দেখা তাফসীরগুলো তার লম্বা তালিকা দেয়, আর কোনোটিই তালিকাটিকে মর্যাদার ক্রম হিসেবে সাজায় না। ইবন কাসীরের বর্ণনায় মুহাম্মাদ ইবন কা'ব আর আবু হাযরা ইয়াকুব ইবন মুজাহিদ বলেন, এরা নবীগণ। মাআরিফুল কুরআন একই মত দেয় মুজাহিদের নামে। সুদ্দী বলেন, এরা ইল্লিয়্যীনের অধিবাসী। হাসান ও কাতাদা বলেন, এরা প্রত্যেক উম্মত থেকে আসবে। কুরতুবী তাঁদের কথাটা বলেন এভাবে: প্রত্যেক উম্মতের মধ্যে যারা ঈমানে আগে। বাগাভীর বর্ণনায় ইকরিমা বলেন, যারা ইসলামে আগে। আর মুকাতিল বলেন, যারা ঈমান এনে নবীদের ডাকে আগে সাড়া দিয়েছে।"
          },
          {
            "en": "Muhammad ibn Sirin says they are those who prayed towards both qiblas, and al-Qurtubi and al-Baghawi both give his proof: the first forerunners among the Emigrants and the Helpers (9:100). Others name a single deed. Ali ibn Abi Talib, in al-Qurtubi and al-Baghawi, says the five daily prayers; ad-Dahhak says jihad; Mujahid, in al-Qurtubi, says jihad and being first to set out for prayer. 'Uthman ibn Abi Sawda, in at-Tabari and Ibn Kathir, says the first of them to go to the mosques and the quickest to go out in the way of Allah.",
            "bn": "মুহাম্মাদ ইবন সীরীন বলেন, এরা তারা, যারা দুই কিবলার দিকেই নামাজ পড়েছে। কুরতুবী ও বাগাভী দুজনেই তাঁর দলিলটাও দেন: মুহাজির ও আনসারদের মধ্যে প্রথম অগ্রবর্তীরা (৯:১০০)। অন্যরা নির্দিষ্ট একটি আমলের নাম নেন। কুরতুবী ও বাগাভীর বর্ণনায় আলী ইবন আবী তালিব (রাঃ) বলেন, পাঁচ ওয়াক্ত নামাজে যারা আগে। দাহহাক বলেন জিহাদে। কুরতুবীর বর্ণনায় মুজাহিদ বলেন জিহাদে, আর নামাজের জন্য সবার আগে বেরিয়ে পড়ায়। তাবারী ও ইবন কাসীরের বর্ণনায় উসমান ইবন আবী সাওদা বলেন, মসজিদে যারা সবার আগে যায়, আর আল্লাহর পথে যারা সবচেয়ে দ্রুত বেরিয়ে পড়ে।"
          },
          {
            "en": "Sa'id ibn Jubayr, in both al-Qurtubi and al-Baghawi, says those quick to repentance and to acts of piety, citing the command to hasten to forgiveness (3:133) and the praise of those who hasten in good things and are foremost in them (23:61). Ibn Kaysan, in al-Baghawi, widens it to all that Allah calls to, and al-Qurazi there says to every good. Ka'b, as al-Baghawi reports, says they are the people of the Qur'an, crowned on the Day of Resurrection. Al-Qurtubi ends his list with it is said: everyone ahead to anything of righteousness.",
            "bn": "কুরতুবী ও বাগাভী দুজনের বর্ণনাতেই সাঈদ ইবন জুবাইর বলেন, যারা তওবায় আর নেক আমলে দ্রুত। দলিল হিসেবে তিনি আনেন মাগফিরাতের দিকে দ্রুত এগোনোর আদেশ (৩:১৩৩), আর তাদের প্রশংসা, যারা কল্যাণের কাজে দ্রুত ছোটে এবং তাতে সবার আগে থাকে (২৩:৬১)। বাগাভীর বর্ণনায় ইবন কাইসান পরিধিটা বাড়িয়ে দেন: আল্লাহ যেদিকেই ডাকেন, সেদিকে যারা আগে। সেখানেই কুরাযী বলেন, সব ধরনের কল্যাণে যারা আগে। বাগাভী কা'ব থেকে বর্ণনা করেন, এরা কুরআনের ধারক, কিয়ামতের দিন যাদের মাথায় মুকুট থাকবে। কুরতুবী তালিকা শেষ করেন 'বলা হয়' দিয়ে: নেক কাজের যেকোনো একটিতে যে আগে, সে-ই এর অন্তর্ভুক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Names From Earlier Nations",
          "bn": "আগের উম্মতগুলোর কয়েকটি নাম"
        },
        "p": [
          {
            "en": "Two reports name individual forerunners, and both are attributed to Ibn Abbas. Ibn Kathir cites, through Ibn Abi Hatim, that they are Yusha' ibn Nun, who went ahead to Musa (AS); the believer of the town in Surah Ya-Sin, who went ahead to 'Isa (AS); and Ali ibn Abi Talib, who went ahead to Muhammad ﷺ. Al-Qurtubi, citing al-Mawardi and opening with it is said, gives four: Hizqil, the believer of Pharaoh's family, from the nation of Musa (AS); Habib an-Najjar of Antioch, from the nation of 'Isa (AS); and Abu Bakr and 'Umar from this ummah.",
            "bn": "দুটি বর্ণনায় নির্দিষ্ট কয়েকজন অগ্রবর্তীর নাম এসেছে, আর দুটিই ইবন আব্বাস (রাঃ)-এর নামে। ইবন কাসীর ইবন আবী হাতিমের সূত্রে উল্লেখ করেন: এরা ইউশা ইবন নূন, যিনি মূসা (আঃ)-এর প্রতি সবার আগে ঈমান আনেন। সূরা ইয়াসীনে বর্ণিত জনপদের সেই মুমিন, যিনি ঈসা (আঃ)-এর প্রতি সবার আগে ঈমান আনেন। আর আলী ইবন আবী তালিব (রাঃ), যিনি মুহাম্মাদ ﷺ-এর প্রতি সবার আগে ঈমান আনেন। কুরতুবী মাওয়ার্দীর বরাতে, 'বলা হয়' দিয়ে শুরু করে, চারজনের নাম দেন। মূসা (আঃ)-এর উম্মত থেকে ফেরাউন-পরিবারের মুমিন হিযকীল, ঈসা (আঃ)-এর উম্মত থেকে আন্তাকিয়ার হাবীব নাজ্জার, আর এই উম্মত থেকে আবু বকর ও উমর (রাঃ)।"
          },
          {
            "en": "The two lists differ, and this article keeps both as reported, without choosing between them or weighing their chains. Each names people who were first to believe in a prophet in their own time, which is how the reports themselves describe them. Neither commentator offers his list as the whole meaning; Ibn Kathir, a few lines later, says that all these sayings are sound. Nothing in either report, or in the verse, licenses a claim that any living group or community is, or is not, among the forerunners.",
            "bn": "দুটি তালিকা এক নয়। এ লেখা দুটিকেই বর্ণনা অনুযায়ী রাখছে, কোনোটিকে বেছে না নিয়ে, সনদও না মেপে। প্রতিটি তালিকায় এমন মানুষের নাম আছে, যাঁরা নিজ নিজ সময়ে একজন নবীর প্রতি সবার আগে ঈমান এনেছিলেন। বর্ণনাগুলো নিজেরাই তাঁদের এভাবে পরিচয় দেয়। কোনো তাফসীরকারই নিজের তালিকাকে আয়াতের পুরো অর্থ বলে পেশ করেননি। ইবন কাসীর কয়েক লাইন পরেই বলেন, এসব মতের সবগুলোই সঠিক। কোনো বর্ণনা, কিংবা আয়াতটি নিজে, এমন দাবির সুযোগ দেয় না যে আজকের কোনো দল বা গোষ্ঠী অগ্রবর্তীদের মধ্যে আছে, কিংবা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Commentators Weigh In",
          "bn": "দুই তাফসীরকারের নিজস্ব রায়"
        },
        "p": [
          {
            "en": "At-Tabari states his own reading before he lists anyone else's. The forerunners, he says, are the third pair, those who went ahead to faith in Allah and His Messenger, and they are the first Emigrants, al-muhajirun al-awwalun. He adds that the people of interpretation said something similar. He then reports the differing narrations: Qatadah on every nation, Ibn Sirin on the two qiblas, and 'Uthman ibn Abi Sawda on the mosques and the way of Allah. He gives his own conclusion and the others' side by side, and does not argue against theirs.",
            "bn": "অন্যদের মত আনার আগেই তাবারী নিজের পাঠটা বলে দেন। তাঁর কথায়, অগ্রবর্তীরা হলো তৃতীয় দল, যারা আল্লাহ ও তাঁর রাসূলের প্রতি ঈমানে আগে ছিল। আর এরা হলো প্রথম যুগের মুহাজিররা, আল-মুহাজিরূনাল আওয়ালূন। তিনি যোগ করেন, তাফসীরের আলেমরাও এর কাছাকাছি কথা বলেছেন। তারপর তিনি ভিন্ন ভিন্ন বর্ণনা উল্লেখ করেন। কাতাদা বলেন প্রত্যেক উম্মতের কথা, ইবন সীরীন দুই কিবলার কথা, আর উসমান ইবন আবী সাওদা মসজিদ ও আল্লাহর পথের কথা। নিজের সিদ্ধান্ত আর অন্যদের মত তিনি পাশাপাশি রাখেন, তাঁদের বিরুদ্ধে যুক্তি দেন না।"
          },
          {
            "en": "Ibn Kathir, after listing the views, gives his judgement in a sentence: all these sayings are sound, because what is meant by the forerunners is those who hasten to do good deeds as they were commanded. Ma'arif al-Qur'an reports that conclusion and adds that the opinions do not conflict with one another, since the forerunners are those foremost in faith and righteous deeds in this world, and so foremost in the Hereafter in the reward that fits them. The two positions are reported here as each scholar gave them, without a ranking between them.",
            "bn": "মতগুলো একে একে উল্লেখ করার পর ইবন কাসীর একটিমাত্র বাক্যে রায় দেন: এ সব কথাই সঠিক। কারণ অগ্রবর্তী বলতে বোঝানো হয়েছে তাদের, যারা হুকুম অনুযায়ী নেক কাজে দ্রুত এগিয়ে যায়। মাআরিফুল কুরআন তাঁর এই সিদ্ধান্ত উল্লেখ করে, আর যোগ করে যে মতগুলোর মধ্যে কোনো বিরোধ নেই। কেননা অগ্রবর্তী তারাই, যারা দুনিয়ায় ঈমান ও নেক আমলে সবার আগে ছিল। তাই আখিরাতে তাদের উপযুক্ত প্রতিদানেও তারা সবার আগে। দুই আলেমের অবস্থান এখানে রাখা হলো যাঁর যেমন, দুটির মধ্যে কোনো ক্রম না টেনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge Ruling Over Desire",
          "bn": "প্রবৃত্তির উপর জ্ঞানের শাসন"
        },
        "p": [
          {
            "en": "At-Tabari preserves a reading from Ibn Zayd that turns the three groups inward. He found desire, he said, in three thirds. In one person desire overpowers knowledge until knowledge is humbled; that one is of the pair bound for the Fire. In another, if Allah wills good for him, he wakes up and helps knowledge against desire, until Allah makes knowledge prevail, and his deeds are sealed that way. The third, the best of them all, is the one whose desire Allah has shamed by his knowledge, so that desire has no hope of winning or of any share.",
            "bn": "তাবারী ইবন যায়দের একটি পাঠ সংরক্ষণ করেছেন, যা তিন দলকে মানুষের ভেতরের দিকে ফিরিয়ে দেয়। তিনি বলেন, প্রবৃত্তিকে আমি তিনটি ভাগে পেয়েছি। একজনের ভেতরে প্রবৃত্তি জ্ঞানকে দাবিয়ে রাখে, জ্ঞান সেখানে লাঞ্ছিত। সে জাহান্নামের দলের লোক। আরেকজনের ব্যাপারে আল্লাহ কল্যাণ চাইলে সে জেগে ওঠে, প্রবৃত্তির বিরুদ্ধে জ্ঞানের সহায় হয়। শেষে আল্লাহ জ্ঞানকেই জয়ী করেন, আর তার আমলের সমাপ্তি হয় সেভাবেই। তৃতীয়জন সবার সেরা। তার জ্ঞান দিয়ে আল্লাহ তার প্রবৃত্তিকে এমন হেয় করে দিয়েছেন যে প্রবৃত্তি জেতার কিংবা কোনো ভাগ পাওয়ার আশাই করে না।"
          },
          {
            "en": "Ibn Zayd then maps them onto the surah: two pairs in Paradise and one in the Fire, the forerunner being the one in whom knowledge overcomes desire. Al-Qurtubi gives a similar threefold picture from Shumait ibn al-'Ajlan. One man starts out in good in his youth and keeps to it until he leaves the world: he is the forerunner brought near. Another spends his early life in sins and long heedlessness, then returns in repentance and dies on it: he is of the companions of the right. A third starts in sins and never leaves them: he is of the companions of the left.",
            "bn": "এরপর ইবন যায়দ এদের সূরার সঙ্গে মিলিয়ে দেন। দুই দল জান্নাতে, এক দল জাহান্নামে। আর অগ্রবর্তী সে-ই, যার ভেতরে জ্ঞান প্রবৃত্তির উপর বিজয়ী। কুরতুবী শুমাইত ইবন আজলান থেকে তিন রকম মানুষের প্রায় একই রকম ছবি আনেন। একজন কৈশোর থেকেই ভালো কাজ শুরু করে, দুনিয়া ছাড়া পর্যন্ত তাতে লেগে থাকে। সে-ই নৈকট্যপ্রাপ্ত অগ্রবর্তী। আরেকজন জীবনের শুরুটা কাটায় গুনাহে আর দীর্ঘ গাফলতিতে, তারপর তওবা করে ফেরে, আর সে অবস্থাতেই তার মৃত্যু হয়। সে ডান দিকের দলের। তৃতীয়জন গুনাহ দিয়ে শুরু করে, আর কখনো তা ছাড়ে না। সে বাম দিকের দলের।"
          }
        ]
      },
      {
        "h": {
          "en": "Left Out, and What Follows",
          "bn": "যা বাদ রইল, যা সামনে আসছে"
        },
        "p": [
          {
            "en": "Ibn Kathir and Ma'arif al-Qur'an cite a report from the Musnad of Imam Ahmad, through 'A'ishah, about who are the forerunners on the Day of Resurrection, and al-Qurtubi mentions a similar wording through al-Mahdawi. This article could not confirm that report on a consulted hadith page with its collector's grading, so its wording is not quoted here. Ibn Kathir also cites a saying of 'Abdullah ibn 'Amr about the angels, and at-Tabari a narration through al-Hasan; neither is used. No sound hadith attached to this verse has been confirmed for this article.",
            "bn": "ইবন কাসীর ও মাআরিফুল কুরআন ইমাম আহমাদের মুসনাদ থেকে আয়েশা (রাঃ)-এর সূত্রে একটি বর্ণনা আনেন, কিয়ামতের দিন অগ্রবর্তী কারা, সে বিষয়ে। কুরতুবীও মাহদাভীর বরাতে কাছাকাছি শব্দে তা উল্লেখ করেন। হাদিসের কোনো পাতায়, সংকলকের দেওয়া মানসহ, বর্ণনাটি এ লেখার জন্য যাচাই করা যায়নি। তাই এর ভাষ্য এখানে উদ্ধৃত হলো না। ইবন কাসীর ফেরেশতাদের নিয়ে আবদুল্লাহ ইবন আমর (রাঃ)-এর একটি উক্তিও আনেন, আর তাবারী আনেন হাসানের সূত্রে একটি বর্ণনা। এর কোনোটিই ব্যবহার করা হয়নি। এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদিস এ লেখার জন্য নিশ্চিত করা যায়নি।"
          },
          {
            "en": "The verse also opens onto what comes next. The following verse names the forerunners al-muqarrabun, those brought near (56:11), in the Gardens of Bliss (56:12), and the surah then speaks of a large company of the earlier peoples and a few of the later ones (56:13 and 56:14). Those verses carry their own discussions, and this article leaves them to their place. Here the verse names the third group, and the commentators' answers to who they are run from the Prophets and named believers to anyone who hastens to good.",
            "bn": "আয়াতটি সামনের আলোচনার দরজাও খুলে দেয়। পরের আয়াত অগ্রবর্তীদের নাম দেয় আল-মুকাররাবূন, নৈকট্যপ্রাপ্ত (৫৬:১১), যারা থাকবে নিয়ামতে ভরা জান্নাতে (৫৬:১২)। তারপর সূরা বলে, এদের বড় একটি দল আগের লোকদের মধ্য থেকে, আর অল্প কয়েকজন পরের লোকদের মধ্য থেকে (৫৬:১৩ ও ৫৬:১৪)। ওই আয়াতগুলোর নিজস্ব আলোচনা আছে, এ লেখা সেগুলো তাদের জায়গাতেই রেখে দিচ্ছে। এখানে আয়াতটি তৃতীয় দলের নাম ঘোষণা করে। আর এরা কারা, সে প্রশ্নে তাফসীরকারদের জবাব নবীগণ ও নির্দিষ্ট কয়েকজন মুমিন থেকে শুরু করে পৌঁছে যায় কল্যাণের দিকে দ্রুত ছুটে চলা যেকোনো মানুষ পর্যন্ত।"
          }
        ]
      }
    ]
  },
  "56:15": {
    "sections": [
      {
        "h": {
          "en": "Where the Forerunners Sit",
          "bn": "অগ্রবর্তীদের বসার জায়গা"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah has named the forerunners and called them those brought near (56:10 and 56:11). It has placed them in the Gardens of Bliss (56:12) and counted them: a large company from the earlier ones, and a few from the later (56:13 and 56:14). Then comes this verse, three Arabic words: 'ala sururin mawdunah, on couches mawdunah. Al-Qurtubi supplies the subject that the verse leaves unspoken. The forerunners, in the Garden, are on couches; their sitting places are couches. The first thing the surah tells of their reward is where they sit.",
            "bn": "সূরা ওয়াকিয়া অগ্রবর্তীদের নাম নিয়েছে এবং তাদের বলেছে নৈকট্যপ্রাপ্ত (৫৬:১০ ও ৫৬:১১)। তাদের রেখেছে নিয়ামতে ভরা জান্নাতে (৫৬:১২), আর তাদের হিসাবও দিয়েছে: পূর্ববর্তীদের মধ্য থেকে বড় একটি দল, পরবর্তীদের মধ্য থেকে অল্প কয়েকজন (৫৬:১৩ ও ৫৬:১৪)। তারপর এই আয়াত, আরবিতে মাত্র তিনটি শব্দ: আলা সুরুরিম মাওদূনা, মাওদূনা আসনের উপর। আয়াতে কর্তার নাম নেই, কুরতুবী সেটা জুড়ে দেন। জান্নাতে অগ্রবর্তীরা থাকবে আসনের উপর, আসনগুলোই তাদের বসার জায়গা। প্রতিদানের কথা শুরুই হয় তারা কোথায় বসবে তা দিয়ে।"
          },
          {
            "en": "The Muyassar reads 56:13 to 56:16 as one sentence. A large company from the first part of this nation and from other nations, with a few from its last part, enter the Gardens on couches woven with gold, reclining on them and facing one another. The list then goes on with youths, cups, fruit and fowl (56:17 to 56:21), and in 56:24 it is called a reward for what they used to do. The word sururin is taken up at 52:20, and the reclining belongs to the next verse; this article stays with the single adjective, mawdunah.",
            "bn": "মুয়াসসার ৫৬:১৩ থেকে ৫৬:১৬ পর্যন্ত আয়াতগুলোকে এক বাক্যে পড়ে। এই উম্মতের প্রথম দিকের এবং অন্য উম্মতগুলোর বড় একটি দল, আর এই উম্মতের শেষ দিকের অল্প কয়েকজন জান্নাতে ঢুকবে। তারা থাকবে সোনায় বোনা আসনে, তাতে হেলান দিয়ে, একে অন্যের মুখোমুখি। এরপর তালিকা এগিয়ে চলে কিশোর সেবক, পানপাত্র, ফল আর পাখির গোশতের দিকে (৫৬:১৭ থেকে ৫৬:২১)। আর ৫৬:২৪ আয়াতে এসবকে বলা হয় তাদের আমলের প্রতিদান। সুরুর শব্দের আলোচনা এসেছে ৫২:২০ আয়াতে, আর হেলান দিয়ে বসার কথা পরের আয়াতের। এ লেখা থাকবে একটিমাত্র বিশেষণ নিয়ে: মাওদূনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Strand Laid Over Strand",
          "bn": "সুতোর উপর সুতো"
        },
        "p": [
          {
            "en": "At-Tabari opens with his own gloss: on top of couches that are woven, manshujah, with some of the work passed into the rest, the way the rings of a coat of mail are set one over another, doubled. Al-Baghawi says nearly the same in fewer words: woven, as the rings of mail are woven so that one enters into another. Neither is picturing a flat cloth. Both describe a close, interlocking work, layer passed through layer, the kind that lets armour hold under a blow.",
            "bn": "তাবারী শুরু করেন নিজের ব্যাখ্যা দিয়ে: এমন আসনের উপর, যা বোনা, মানসূজা। বুননের এক অংশ ঢুকে গেছে আরেক অংশের ভেতরে, ঠিক যেভাবে বর্মের কড়াগুলো একটার উপর আরেকটা বসিয়ে দ্বিগুণ করে জোড়া হয়। বাগাভী কম কথায় প্রায় একই কথা বলেন: বোনা, যেমন বর্মের কড়া বোনা হয় আর একটা আরেকটার ভেতরে ঢুকে যায়। দুজনের কেউই সমতল কাপড়ের ছবি আঁকছেন না। দুজনই বর্ণনা করছেন ঘন, একটার ভেতর আরেকটা গাঁথা কাজ। এমন বুনন বলেই আঘাতের মুখেও বর্ম টিকে থাকে।"
          },
          {
            "en": "Al-Qurtubi defines the root. Al-wadn, he says, is doubled weaving and stacking, an-nadd. He gives an everyday use: it is said that a man wadana stone and baked brick, one piece over another, and what he built is mawdun. A coat of mail mawdunah is one firmly made in its weave. A couch mawdun, he concludes, is one whose surface is like something woven. The word therefore carries two ideas together: pieces laid over one another, and the strength that such layering gives.",
            "bn": "কুরতুবী ধাতুটির সংজ্ঞা দেন। তাঁর ভাষায় ওয়াদন মানে দ্বিগুণ বুনন আর থরে থরে সাজানো, যাকে বলে নাদ্দ। প্রতিদিনের ভাষা থেকে উদাহরণও দেন। বলা হয়, অমুক পাথর আর পোড়া ইট একটার উপর আরেকটা ওয়াদানা করেছে, অর্থাৎ থরে থরে বসিয়েছে, আর তার গাঁথা জিনিসটা মাওদূন। মাওদূনা বর্ম হলো যার বুনন মজবুত। আর মাওদূন আসন, তাঁর উপসংহারে, যার উপরিভাগ বোনা জিনিসের মতো। শব্দটির ভেতরে তাই দুটি ধারণা একসঙ্গে আছে। একটার উপর আরেকটা রাখা, আর সেভাবে রাখার ফলে যে মজবুতি আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Of the Weaving of Dawud",
          "bn": "দাউদের বুনন"
        },
        "p": [
          {
            "en": "To show the word in use, at-Tabari quotes the poet al-A'sha, and al-Qurtubi quotes the same line: wa-min nasji Dawuda mawdunatan, tusaqu ma'a l-hayyi 'iran fa-'ira. Of Dawud's weaving, close-woven, carried along with the tribe, caravan after caravan. The poet is describing coats of mail carried along with the tribe. He calls fine mail the weaving of Dawud, and the adjective he picks for it is mawdunah. Al-Qurtubi then adds a second line by the same poet in which the word appears again.",
            "bn": "শব্দটি কীভাবে ব্যবহৃত হতো তা দেখাতে তাবারী কবি আ'শার একটি চরণ উদ্ধৃত করেন, কুরতুবীও একই চরণ আনেন: ওয়া মিন নাসজি দাউদা মাওদূনাতান, তুসাকু মাআল হাইয়ি ইরান ফাইরা। অর্থাৎ দাউদের বুননের ঘন গাঁথা বর্ম, গোত্রের সঙ্গে বয়ে নেওয়া হচ্ছে কাফেলার পর কাফেলায়। কবি বলছেন গোত্রের সঙ্গে বয়ে নেওয়া বর্মের কথা। উৎকৃষ্ট বর্মকে তিনি বলেন দাউদের বুনন, আর তার বিশেষণ হিসেবে বেছে নেন মাওদূনা শব্দটিই। কুরতুবী এরপর একই কবির আরেকটি চরণ আনেন, যেখানে শব্দটি আবার এসেছে।"
          },
          {
            "en": "The poet's phrase names Dawud, and the Qur'an too ties the making of mail to him. Allah says He taught Dawud (AS) the making of garments for people, to guard them in their battles (21:80). He softened iron for him and told him to make full coats and to measure the links (34:10 and 34:11). Al-A'sha's line shows that, to an Arab ear, mawdunah called up exactly this craft: rings passed through rings, doubled and closely fitted. That is the craft the commentators reach for when they explain the couches of the forerunners.",
            "bn": "কবির কথায় দাউদের নাম আছে, আর কুরআনও বর্ম তৈরির কাজকে তাঁর সঙ্গেই জুড়েছে। আল্লাহ বলেন, তিনি দাউদ (আঃ)-কে মানুষের জন্য পোশাক বানানো শিখিয়েছিলেন, যাতে যুদ্ধে তা তাদের রক্ষা করে (২১:৮০)। তাঁর জন্য লোহা নরম করে দিয়েছিলেন, আর বলেছিলেন পূর্ণ বর্ম বানাতে ও কড়াগুলো মেপে জুড়তে (৩৪:১০ ও ৩৪:১১)। আ'শার চরণ দেখায়, আরবের কানে মাওদূনা শুনলে ঠিক এই কারিগরির ছবিই ভেসে উঠত। কড়ার ভেতর কড়া, দ্বিগুণ করে, আঁটসাঁট করে বসানো। অগ্রবর্তীদের আসনের ব্যাখ্যায় তাফসীরকারেরা এই কারিগরিই টেনে আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Girth Strap and Laid Brick",
          "bn": "উটের পেটি আর গাঁথা ইট"
        },
        "p": [
          {
            "en": "At-Tabari's second witness comes from the saddle. The wadin of a she-camel is her girth strap, a band of leather thongs woven one upon another and doubled, like the rings of mail. Wadin, he notes, stands for mawdun: the pattern fa'il is used in place of maf'ul, just as qatil, slain, is said for maqtul. Al-Qurtubi gives the same derivation and quotes a half-line about a camel: ilayka ta'du qaliqan wadinuha, towards you she runs, her girth strap shaking.",
            "bn": "তাবারীর দ্বিতীয় সাক্ষী আসে উটের সাজ থেকে। উটনীর ওয়াদীন হলো তার পেটের নিচের বাঁধন, চামড়ার ফিতা একটার উপর আরেকটা বুনে দ্বিগুণ করা, ঠিক বর্মের কড়ার মতো। তাবারী বলেন, ওয়াদীন আসলে মাওদূন অর্থেই। ফাঈল ওজনটা এখানে মাফঊলের জায়গায় বসেছে, যেমন মাকতূল অর্থে বলা হয় কাতীল, নিহত। কুরতুবীও একই ব্যুৎপত্তি দেন, আর উট নিয়ে আধখানা একটি চরণ আনেন: ইলাইকা তা'দূ কালিকান ওয়াদীনুহা, তোমার দিকে সে ছুটে আসে, তার পেটের বাঁধন দুলতে থাকে।"
          },
          {
            "en": "In Ibn Kathir's summary of Ibn Jarir, that is at-Tabari, the camel's strap is braided, madfur, and the summary goes on: so too the couches in the Garden are braided with gold and pearls. At-Tabari adds a usage he reports as heard from some Arabs: the courses of baked brick are mawdun one upon another, meaning set close, in rows. Armour, strap and brickwork are different things, but each is made strong by pieces laid against each other, and that shared picture matters for the difference that follows.",
            "bn": "ইবন কাসীর ইবন জারীর, অর্থাৎ তাবারীর বক্তব্যের যে সারকথা আনেন, তাতে উটের বাঁধনকে বলা হয়েছে মাদফূর, বেণির মতো পাকানো। সারকথা এগিয়ে বলে, জান্নাতের আসনগুলোও তেমনি সোনা আর মুক্তা দিয়ে পাকিয়ে বোনা। তাবারী আরও একটি ব্যবহার আনেন, যা তাঁর ভাষ্যমতে কিছু আরবের মুখে শোনা গেছে। পোড়া ইটের সারি একটার উপর আরেকটা মাওদূন, মানে ঘন করে সারি বেঁধে বসানো। বর্ম, বাঁধন আর ইটের গাঁথনি আলাদা জিনিস। তবু প্রতিটিই মজবুত হয় একটার গায়ে আরেকটা টুকরো বসিয়ে। সামনের মতভেদ বুঝতে এই অভিন্ন ছবিটা কাজে লাগবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Threaded With Gold and Gems",
          "bn": "সোনা আর রত্নে গাঁথা"
        },
        "p": [
          {
            "en": "The gloss reported most widely is marmulah bi-dh-dhahab, woven with gold. At-Tabari gives it from Ibn 'Abbas through Mujahid, and from Mujahid himself by several chains. Ibn Kathir names Ibn 'Abbas and adds that Mujahid, 'Ikrimah, Sa'id ibn Jubayr, Zayd ibn Aslam, Qatadah, ad-Dahhak and others said the same. Ma'arif al-Qur'an reports the gloss from Ibn 'Abbas, cloth woven or worked with gold thread, as recorded by Ibn Jarir, Ibn Abi Hatim, al-Bayhaqi and others. The Muyassar gives this reading and no other.",
            "bn": "সবচেয়ে বেশি বর্ণিত ব্যাখ্যাটি হলো মারমূলা বিয্‌যাহাব, সোনা দিয়ে বোনা। তাবারী এটি আনেন মুজাহিদের সূত্রে ইবন আব্বাস (রাঃ) থেকে, আবার একাধিক সনদে মুজাহিদের নিজের কথা হিসেবেও। ইবন কাসীর ইবন আব্বাস (রাঃ)-এর নাম নিয়ে জানান, মুজাহিদ, ইকরিমা, সাঈদ ইবন জুবায়র, যায়দ ইবন আসলাম, কাতাদা, দাহহাক এবং আরও অনেকে একই কথা বলেছেন। মাআরিফুল কুরআন ইবন আব্বাস (রাঃ)-এর ব্যাখ্যাটি আনে এভাবে: সোনার সুতোয় বোনা বা কারুকাজ করা কাপড়। সঙ্গে জানায়, ইবন জারীর, ইবন আবী হাতিম, বায়হাকী প্রমুখ তা বর্ণনা করেছেন। মুয়াসসার শুধু এই ব্যাখ্যাটিই দেয়, অন্য কোনোটি নয়।"
          },
          {
            "en": "Others set stones into the gold. 'Ikrimah, in at-Tabari's chain, says mushabbakah, latticed with pearl and ruby. As-Suddi, in Ibn Kathir, says woven with gold and pearl. Al-Qurtubi gathers what he calls the account in the commentaries: woven with rods of gold, latticed with pearl, ruby and zabarjad. Ma'mar, in at-Tabari, says woven and latticed. Ibn Zayd names a plainer material: woven with leather, like the camel's strap. And ad-Dahhak, in at-Tabari's chain, defines al-wadn as latticing and weaving: the middle of the couch is latticed and woven.",
            "bn": "কেউ কেউ সোনার সঙ্গে পাথরও বসিয়েছেন। তাবারীর সনদে ইকরিমা বলেন মুশাব্বাকা, মুক্তা আর ইয়াকূত দিয়ে জালির মতো গাঁথা। ইবন কাসীরের বর্ণনায় সুদ্দী বলেন, সোনা আর মুক্তা দিয়ে বোনা। কুরতুবী তাফসীরের কিতাবগুলোতে যা আছে তা একত্র করেন: সোনার শলাকা দিয়ে বোনা, মুক্তা, ইয়াকূত আর যাবারজাদ দিয়ে জালির মতো গাঁথা। তাবারীর বর্ণনায় মা'মার বলেন, জালির মতো বোনা। ইবন যায়দ সাদামাটা উপাদানের কথা বলেন: চামড়া দিয়ে বোনা, উটের পেটির মতো। আর তাবারীর সনদে দাহহাক ওয়াদনের সংজ্ঞা দেন জালি করা ও বোনা বলে। আসনের মাঝখানটা জালির মতো বোনা।"
          },
          {
            "en": "Qatadah, in at-Tabari, adds a word that is about comfort more than ornament. The mawdunah, he says, are the woven ones, and they are awthar as-surur, the softest and most cushioned of couches. The commentators' pictures are of gold and gems that catch the eye, and Qatadah's remark reminds the reader that the couch is also a place to rest. Those who hurried in this world, and often gave up rest for the sake of good, are seated there on what Qatadah calls the softest of couches.",
            "bn": "তাবারীর বর্ণনায় কাতাদা এমন একটি কথা যোগ করেন, যা সাজের চেয়ে আরামের বিষয়ে বেশি। তিনি বলেন, মাওদূনা মানে বোনা আসন, আর সেগুলো আওসারুস সুরুর, অর্থাৎ সবচেয়ে নরম ও আরামদায়ক আসন। তাফসীরকারদের আঁকা ছবিতে আছে সোনা আর রত্নের ঝলক, যা চোখ টানে। কাতাদার কথা মনে করিয়ে দেয়, আসন বিশ্রামেরও জায়গা। দুনিয়ায় যারা ভালো কাজে তাড়াহুড়া করেছে, নেকির জন্য প্রায়ই নিজের আরাম ছেড়ে দিয়েছে, সেখানে তারা বসবে এমন আসনে, যাকে কাতাদা বলেন সবচেয়ে নরম আসন।"
          }
        ]
      },
      {
        "h": {
          "en": "Woven, or Set in Rows",
          "bn": "বোনা, নাকি সারিবদ্ধ"
        },
        "p": [
          {
            "en": "One report goes another way. At-Tabari introduces it with the words others said: the meaning is masfufah, set in rows, and he gives it from Ibn 'Abbas through 'Ali. Al-Qurtubi also reports from Ibn 'Abbas that mawdunah means masfufah, and links it to another verse of the Qur'an: on couches set in rows (52:20). So two glosses come down from Ibn 'Abbas, woven with gold and set in rows, and the commentators record both of them.",
            "bn": "একটি বর্ণনা ভিন্ন দিকে যায়। তাবারী সেটি আনেন 'অন্যরা বলেছেন' কথাটি দিয়ে: এর অর্থ মাসফূফা, সারি করে সাজানো। এটি তিনি আনেন আলীর সূত্রে ইবন আব্বাস (রাঃ) থেকে। কুরতুবীও ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে মাওদূনা মানে মাসফূফা, আর কুরআনের আরেকটি আয়াতের সঙ্গে তা মিলিয়ে দেখান: সারিবদ্ধ আসনের উপর (৫২:২০)। ফলে ইবন আব্বাস (রাঃ) থেকে দুটি ব্যাখ্যা এসেছে। একটি সোনায় বোনা, অন্যটি সারিবদ্ধ। তাফসীরকারেরা দুটিই লিপিবদ্ধ করেছেন।"
          },
          {
            "en": "The reports about ad-Dahhak differ too. At-Tabari's chain gives him the weaving reading quoted above. Al-Baghawi, after his gloss of woven mail and the commentators' gold and gems, names ad-Dahhak for masfufah. At-Tabari's own opening gloss is the weaving, and he places the row reading under others said. This article reports both readings, as the commentators themselves do, and does not choose between them.",
            "bn": "দাহহাকের বর্ণনাতেও পার্থক্য আছে। তাবারীর সনদে তাঁর মুখে এসেছে বুননের ব্যাখ্যা, যা উপরে বলা হলো। বাগাভী বর্মের মতো বোনা বলার পর এবং তাফসীরকারদের সোনা আর রত্নের কথা আনার পর দাহহাকের নামে আনেন মাসফূফা অর্থটি। তাবারী নিজে যে ব্যাখ্যা দিয়ে শুরু করেন তা বুননের, আর সারির ব্যাখ্যাটি রাখেন 'অন্যরা বলেছেন' শিরোনামে। এ প্রবন্ধ দুটি ব্যাখ্যাই উল্লেখ করছে, যেমন তাফসীরকারেরা করেছেন। কোনোটিকে বেছে নিচ্ছে না।"
          },
          {
            "en": "The root makes room for both. Al-Qurtubi's own examples include stone and brick laid one over another, and he says a coat of mail mawdunah is firmly made in its weave, like something masfufah. At-Tabari's brick, heard from the Arabs, is set close and in rows. Weaving lays strands over each other, and a row sets seats beside each other. In both pictures things are put in order and joined closely, and neither picture is loose or careless.",
            "bn": "ধাতুটির ভেতরে দুটির জন্যই জায়গা আছে। কুরতুবীর নিজের উদাহরণেই আছে একটার উপর আরেকটা গাঁথা পাথর ও ইট। তিনি বলেন, মাওদূনা বর্ম মানে মজবুত করে বোনা বর্ম, মাসফূফার মতো। তাবারী আরবদের মুখে শোনা যে ইটের কথা আনেন, তাও ঘন করে সারি বেঁধে বসানো। বুননে সুতো পড়ে সুতোর উপর, আর সারিতে আসন বসে আসনের পাশে। দুই ছবিতেই সবকিছু সাজানো আর আঁটসাঁট করে জোড়া। কোনোটিতেই ঢিলেঢালা বা অগোছালো কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Adornment Only He Knows",
          "bn": "যে সাজ কেবল তিনিই জানেন"
        },
        "p": [
          {
            "en": "As-Sa'di's gloss is the widest of all. The couches are woven with gold and silver, pearl and gem, and other adornments that none knows but Allah. He names the materials people know and then says plainly that the full adornment lies beyond them. The commentators reach for gold, pearl and ruby because those were the finest things their hearers had seen. The verse itself names no material at all, and as-Sa'di's last clause keeps that silence in view.",
            "bn": "সা'দীর ব্যাখ্যা সবচেয়ে বিস্তৃত। আসনগুলো বোনা সোনা ও রুপা, মুক্তা ও রত্ন দিয়ে, আরও এমন সব সাজ দিয়ে যা আল্লাহ ছাড়া কেউ জানে না। মানুষের চেনা উপাদানগুলোর নাম তিনি নেন, তারপর সোজাসুজি বলে দেন, পুরো সাজ সেসবের বাইরে। তাফসীরকারেরা সোনা, মুক্তা আর ইয়াকূতের কথা আনেন, কারণ শ্রোতারা এর চেয়ে দামি কিছু দেখেনি। আয়াত নিজে কোনো উপাদানের নামই নেয়নি, আর সা'দীর শেষ কথাটি সেই নীরবতাকে চোখের সামনে রাখে।"
          },
          {
            "en": "None of the commentaries consulted attaches a hadith to this verse. A general narration, not tied to 56:15, matches as-Sa'di's last words. In Sahih al-Bukhari (3244), Abu Hurayrah reports that the Messenger of Allah ﷺ said: Allah said, I have prepared for My righteous servants what no eye has seen, no ear has heard, and has never occurred to a human heart. Then recite, if you wish: no soul knows what has been hidden for them of the comfort of eyes (32:17).",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তবে একটি সাধারণ হাদীস, যা ৫৬:১৫ আয়াতের সঙ্গে সম্পৃক্ত নয়, সা'দীর শেষ কথার সঙ্গে মিলে যায়। সহীহ বুখারীতে (৩২৪৪) আবূ হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: আল্লাহ বলেন, আমি আমার নেক বান্দাদের জন্য এমন জিনিস প্রস্তুত রেখেছি যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, কোনো মানুষের মনে কল্পনাও জাগেনি। চাইলে পড়ো: কেউ জানে না তাদের জন্য চোখজুড়ানো কী লুকিয়ে রাখা হয়েছে (৩২:১৭)।"
          },
          {
            "en": "Seen this way, the gold and gems of the commentaries are a floor and not a ceiling. They tell the listener that the seat is at least as fine as the finest thing he has ever seen, and as-Sa'di and the hadith add that it is finer than he can picture. Hope does not need the details. It needs only to trust Him who prepared the seat, and to keep walking, however slowly, towards the place where it waits.",
            "bn": "এভাবে দেখলে তাফসীরের সোনা আর রত্ন হলো সর্বনিম্ন সীমা, সর্বোচ্চ নয়। শ্রোতাকে তা জানায়, আসনটি অন্তত তার দেখা সবচেয়ে সুন্দর জিনিসের মতো সুন্দর। আর সা'দীর কথা ও হাদীস যোগ করে, তা তার কল্পনার চেয়েও সুন্দর। আশার জন্য খুঁটিনাটি জানা জরুরি নয়। জরুরি শুধু যিনি আসনটি প্রস্তুত করেছেন তাঁর উপর ভরসা রাখা, আর ধীরে হলেও সেই জায়গার দিকে হাঁটতে থাকা, যেখানে আসনটি অপেক্ষা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seat Is Still Being Earned",
          "bn": "আসনটি এখনো অর্জনের সুযোগ আছে"
        },
        "p": [
          {
            "en": "The couches are set for the forerunners, and the surah names them by one quality: they went ahead. In 56:24 the whole list of their blessings is called a reward for what they used to do. The reward is pictured, and the path to it is named in the same breath. The picture is therefore more than a prize to admire from a distance. It is an invitation, set before people who are still alive and still able to go ahead.",
            "bn": "আসনগুলো রাখা হয়েছে অগ্রবর্তীদের জন্য, আর সূরা তাদের চিনিয়েছে একটিমাত্র গুণে: তারা এগিয়ে গিয়েছিল। ৫৬:২৪ আয়াতে তাদের নিয়ামতের পুরো তালিকাকে বলা হয়েছে তারা যা করত তার প্রতিদান। প্রতিদানের ছবি আঁকা হয়েছে, আর একই সঙ্গে সেখানে পৌঁছার পথের নামও বলা হয়েছে। তাই এ ছবি দূর থেকে মুগ্ধ হয়ে দেখার মতো কোনো পুরস্কার মাত্র নয়। এ এক দাওয়াত, যা রাখা হয়েছে এমন মানুষদের সামনে, যারা এখনো বেঁচে আছে, এখনো এগিয়ে যাওয়ার সুযোগ যাদের হাতে।"
          },
          {
            "en": "The count in 56:14 leaves a door open: a few from the later ones. Ibn Kathir, in his comment on these verses, reports a difference over who the earlier and the later are, either earlier nations and this one, or the earlier and later generations of this nation. On either reading, the later have a place among the forerunners. Whoever reads the verse today is among the later, and the verse does not shut them out.",
            "bn": "৫৬:১৪ আয়াতের হিসাব একটি দরজা খোলা রাখে: পরবর্তীদের মধ্য থেকে অল্প কয়েকজন। ইবন কাসীর এ আয়াতগুলোর আলোচনায় একটি মতভেদ উল্লেখ করেন, পূর্ববর্তী আর পরবর্তী বলতে কাদের বোঝানো হয়েছে। এক মতে আগের উম্মতগুলো আর এই উম্মত। অন্য মতে এই উম্মতেরই আগের ও পরের প্রজন্ম। যে মতই ধরা হোক, পরবর্তীদের জন্যও অগ্রবর্তীদের মাঝে জায়গা আছে। আজ যিনি আয়াতটি পড়ছেন, তিনি পরবর্তীদেরই একজন, আর আয়াত তাঁকে বাইরে রাখেনি।"
          },
          {
            "en": "A reflection, offered as a reflection and not as a reading of the word: every picture the commentators use for mawdunah is of something made strong by many small pieces laid together, rings in mail, thongs in a strap, bricks in a course. Hurrying towards good is seldom one great leap. It is the prayer prayed on time today, the kindness not put off, the repentance made tonight rather than next year. The forerunners did not wait for a better day, and with Allah's help neither need we.",
            "bn": "শব্দের ব্যাখ্যা হিসেবে নয়, নিছক ভাবনা হিসেবে একটি কথা বলা যায়। মাওদূনা বোঝাতে তাফসীরকারেরা যত ছবি এনেছেন, সবই এমন জিনিসের, যা মজবুত হয় অনেক ছোট টুকরো পাশাপাশি গেঁথে। বর্মে কড়া, বাঁধনে ফিতা, গাঁথনিতে ইট। ভালো কাজে এগিয়ে যাওয়াও সাধারণত এক লাফে হয় না। আজকের নামাজটা সময়মতো পড়া, সদাচরণটা পিছিয়ে না রাখা, তওবাটা আগামী বছরের জন্য তুলে না রেখে আজ রাতেই করে ফেলা। অগ্রবর্তীরা ভালো দিনের অপেক্ষায় বসে থাকেনি। আল্লাহর সাহায্যে আমাদেরও বসে থাকার দরকার নেই।"
          }
        ]
      }
    ]
  },
  "56:17": {
    "sections": [
      {
        "h": {
          "en": "Four Words After the Couches",
          "bn": "আসনের পরে চারটি শব্দ"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah sorts people into three groups and then describes the forerunners: those brought near, in the Gardens of Pleasure (56:11 and 56:12). The two verses just before seat them on couches woven with ornament, reclining on them, facing each other (56:15 and 56:16). Verse 56:17 adds the first movement to that still scene, in four Arabic words: yatufu 'alayhim wildanun mukhalladun, there will circulate among them youths made everlasting. What the youths carry is named in the next verse: vessels, pitchers and a cup from a flowing spring (56:18).",
            "bn": "সূরা আল-ওয়াকিআ মানুষকে তিনটি দলে ভাগ করে, তারপর অগ্রগামীদের কথা বলে: তারা নৈকট্যপ্রাপ্ত, নিয়ামতে ভরা জান্নাতে থাকবে (৫৬:১১ ও ৫৬:১২)। ঠিক আগের আয়াত দুটি তাদের বসিয়ে দেয় কারুকাজ করা আসনে, হেলান দিয়ে, মুখোমুখি (৫৬:১৫ ও ৫৬:১৬)। স্থির সেই দৃশ্যে ৫৬:১৭ প্রথম নড়াচড়া আনে, আরবিতে মাত্র চারটি শব্দে: ইয়াতূফু আলাইহিম উইলদানুম মুখাল্লাদূন, চিরকিশোরেরা তাদের মাঝে ঘুরে ঘুরে আসবে। কিশোরেরা হাতে কী নিয়ে আসবে, তা আছে পরের আয়াতে: পানপাত্র, জগ আর প্রবাহিত ঝর্ণার পেয়ালা (৫৬:১৮)।"
          },
          {
            "en": "At-Tabari names the subject plainly: the youths go round these forerunners whom Allah has brought near in the Gardens of Pleasure. So the verse is not a general picture of Paradise. It continues the description of one group, the forerunners first named at 56:10. That placement shapes the reading. The seated ones do not move; others move around them. Two words then carry the weight of the verse, wildan and mukhalladun, and nearly everything the commentators say about it is an attempt to explain one of those two words.",
            "bn": "কারা সেবা পাবে, তাবারী তা সোজাসুজি বলে দেন: আল্লাহ যে অগ্রগামীদের নিয়ামতে ভরা জান্নাতে নিজের নৈকট্য দিয়েছেন, কিশোরেরা তাদেরই চারপাশে ঘুরবে। কাজেই আয়াতটি জান্নাতের সাধারণ কোনো ছবি নয়। এটি একটি নির্দিষ্ট দলের বর্ণনার ধারাবাহিকতা, যাদের প্রথম উল্লেখ ৫৬:১০ আয়াতে। এই অবস্থান থেকেই পাঠের দিক ঠিক হয়। যারা বসে আছে তারা নড়ে না, অন্যরা তাদের ঘিরে চলাফেরা করে। এরপর আয়াতের পুরো ভার দুটি শব্দের উপর: উইলদান আর মুখাল্লাদূন। তাফসীরকারেরা এ আয়াত নিয়ে যা বলেছেন, তার প্রায় সবই এই দুটির কোনো একটির ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Going Round in Service",
          "bn": "সেবায় ঘুরে ঘুরে আসা"
        },
        "p": [
          {
            "en": "Yatufu describes going round, circulating among people. The commentators say at once what the going round is for. Al-Baghawi glosses it in two words, lil-khidmah, for service. The Muyassar says the same, that youths go round them li-khidmatihim, to serve them, and carries its sentence straight on into the vessels of the next verse. As-Sa'di widens it a little: they go round the people of the Garden to serve them and to see to their needs.",
            "bn": "ইয়াতূফু মানে ঘুরে ঘুরে আসা, মানুষের মাঝে চলাফেরা করা। এই ঘোরাফেরা কিসের জন্য, তাফসীরকারেরা সঙ্গে সঙ্গেই তা বলে দেন। বাগাভী দুই শব্দে ব্যাখ্যা করেন: লিল-খিদমাহ, সেবার জন্য। মুয়াসসারও একই কথা বলে, কিশোরেরা তাদের চারপাশে ঘুরবে লি-খিদমাতিহিম, তাদের সেবা করতে। তারপর বাক্যটি সোজা চলে যায় পরের আয়াতের পানপাত্রের দিকে। সা'দী কথাটা একটু বিস্তৃত করেন: জান্নাতবাসীদের সেবা করতে আর তাদের প্রয়োজন মেটাতে তারা ঘুরে বেড়াবে।"
          },
          {
            "en": "The sources speak of this service only as part of the honour of those who receive it. Al-Qurtubi states the purpose of the scene at the close of his comment: the people of the Garden are in the most complete joy and blessing, and blessing is only completed when servants and youths surround a person. On his reading the verse does not open a separate subject. It finishes a picture of ease that began with the couches and the faces turned towards each other.",
            "bn": "উৎসগুলো এই সেবার কথা বলে কেবল সেবাপ্রাপ্তদের সম্মানের অংশ হিসেবে। কুরতুবী তাঁর ব্যাখ্যার শেষে দৃশ্যটির উদ্দেশ্য বলে দেন। জান্নাতবাসীরা থাকবে পরিপূর্ণ আনন্দ আর নিয়ামতের মধ্যে। আর নিয়ামত তখনই পূর্ণ হয়, যখন সেবক ও কিশোরেরা মানুষকে ঘিরে রাখে। তাঁর পাঠে আয়াতটি নতুন কোনো বিষয় খোলে না। আসন আর মুখোমুখি বসা মুখগুলো দিয়ে স্বস্তির যে ছবি শুরু হয়েছিল, এ আয়াত সেটিকেই পূর্ণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Young, Fair and Hidden",
          "bn": "কম বয়স, রূপ আর আড়াল"
        },
        "p": [
          {
            "en": "Wildan is explained by most of the commentators with another word, ghilman, youths or boys: al-Qurtubi, al-Baghawi and the Muyassar all use it. As-Sa'di describes them rather than defining them: young in years, at the utmost of beauty and radiance. Ibn Kathir's English abridgement renders the phrase immortal boys, and Ma'arif al-Qur'an, whose comment covers 56:15 to 56:17 together, gives the same rendering. The verse itself says nothing more about them.",
            "bn": "বেশির ভাগ তাফসীরকার উইলদান শব্দটি বোঝান আরেকটি শব্দ দিয়ে: গিলমান, অর্থাৎ কিশোর বা বালক। কুরতুবী, বাগাভী আর মুয়াসসার, তিনজনই এ শব্দ ব্যবহার করেছেন। সা'দী সংজ্ঞা না দিয়ে তাদের বর্ণনা দেন: বয়সে ছোট, রূপে আর উজ্জ্বলতায় চূড়ান্ত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে শব্দ দুটির অনুবাদ অমর কিশোর। মাআরিফুল কুরআন ৫৬:১৫ থেকে ৫৬:১৭ পর্যন্ত একসঙ্গে আলোচনা করে, সেখানেও একই অনুবাদ। এর বাইরে আয়াত তাদের সম্পর্কে আর কিছু বলে না।"
          },
          {
            "en": "As-Sa'di then reaches for another verse to describe them, quoting the words ka-annahum lu'lu'un maknun, as though they were hidden pearls. The phrase is from 52:24, where youths of their own go round the people of the Garden. He explains maknun as covered, so that nothing reaches them that would change them. In his comment the hidden pearl and the word mukhalladun point the same way: these youths are kept exactly as they are.",
            "bn": "এরপর সা'দী তাদের বর্ণনায় আরেকটি আয়াতের শব্দ টেনে আনেন: কাআন্নাহুম লু'লুউম মাকনূন, যেন তারা লুকিয়ে রাখা মুক্তা। কথাটি ৫২:২৪ আয়াতের, যেখানে জান্নাতবাসীদের নিজস্ব কিশোরেরা তাদের চারপাশে ঘুরে বেড়ায়। মাকনূনের অর্থ তিনি বলেন ঢেকে রাখা, যাতে বদলে দেওয়ার মতো কিছু তাদের ছুঁতে না পারে। তাঁর ব্যাখ্যায় লুকানো মুক্তা আর মুখাল্লাদূন শব্দ একই দিকে ইশারা করে: এই কিশোরেরা যেমন আছে, ঠিক তেমনই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Age That Never Moves",
          "bn": "যে বয়স আর এগোয় না"
        },
        "p": [
          {
            "en": "Mukhalladun is where the commentators spread out. The shortest gloss is Mujahid's, which at-Tabari gives with its chain through Ibn Abi Najih: la yamutun, they do not die. Al-Qurtubi gives it under Mujahid's name too. At-Tabari's own paraphrase adds a second element: youths of a single age, who do not change and do not die. Al-Baghawi joins three verbs together, they do not die, do not grow old and do not change, and the Muyassar keeps two of them: they do not age and they do not die.",
            "bn": "মুখাল্লাদূন শব্দে এসে তাফসীরকারদের ব্যাখ্যা নানা দিকে ছড়িয়ে পড়ে। সবচেয়ে ছোট ব্যাখ্যাটি মুজাহিদের। তাবারী ইবন আবী নাজীহের সূত্রে তা বর্ণনা করেন: লা ইয়ামূতূন, তারা মরবে না। কুরতুবীও একই ব্যাখ্যা দেন, মুজাহিদের নামেই। তাবারীর নিজের ভাষ্যে আরেকটি দিক যোগ হয়: একই বয়সের কিশোর, যারা বদলায় না, মরেও না। বাগাভী তিনটি ক্রিয়া একসঙ্গে রাখেন: তারা মরবে না, বুড়ো হবে না, বদলাবে না। মুয়াসসার রাখে দুটি: তারা বার্ধক্যে পৌঁছাবে না, মরবেও না।"
          },
          {
            "en": "Others stress age rather than death. Al-Qurtubi reports from al-Hasan and al-Kalbi that they do not grow old and do not change, and he supports it with a line of Imru' al-Qays in which mukhallad describes a fortunate man of few worries, who does not spend his nights in fear. Ibn Kathir, in the Arabic, says they are kept in a single state: they do not grow older than it, do not turn grey and do not change. His English abridgement and Ma'arif al-Qur'an both say they will never grow up, get old or change in shape.",
            "bn": "কেউ কেউ মৃত্যুর চেয়ে বয়সের দিকটিতে জোর দেন। কুরতুবী হাসান আর কালবী থেকে বর্ণনা করেন: তারা বুড়ো হবে না, বদলাবেও না। এর সমর্থনে তিনি ইমরুল কায়সের একটি পঙ্‌ক্তি আনেন। সেখানে মুখাল্লাদ বলা হয়েছে এমন সৌভাগ্যবান মানুষকে, যার দুশ্চিন্তা কম, যাকে ভয়ে ভয়ে রাত কাটাতে হয় না। ইবন কাসীর আরবিতে বলেন, তাদের রাখা হবে একই অবস্থায়: সেখান থেকে তারা বড় হবে না, চুল পাকবে না, বদলাবে না। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ আর মাআরিফুল কুরআন দুটোতেই আছে: তারা কখনো বড় হবে না, বুড়ো হবে না, চেহারাও বদলাবে না।"
          },
          {
            "en": "Two sources tie the meaning to Arabic usage. Al-Baghawi quotes al-Farra': the Arabs say of a man who has grown old without his hair greying, innahu la-mukhallad. At-Tabari cites the same usage without naming al-Farra', and adds that the word is formed from khuld, lasting permanence. Al-Baghawi also reports Ibn Kaysan: youths who are not moved from one state to another. As-Sa'di gathers these strands into one sentence: created for remaining and for permanence, they do not age, do not change, and do not grow beyond the years they have.",
            "bn": "দুটি উৎস অর্থটিকে আরবদের মুখের ভাষার সঙ্গে মিলিয়ে দেখায়। বাগাভী ফাররার কথা উদ্ধৃত করেন: কেউ বয়সে বড় হলো অথচ চুল পাকল না, আরবরা তাকে বলে ইন্নাহূ লা-মুখাল্লাদ। তাবারীও একই ব্যবহারের উল্লেখ করেন, তবে ফাররার নাম নেন না। সঙ্গে যোগ করেন, শব্দটি এসেছে খুলদ থেকে, যার মানে চিরস্থায়িত্ব। বাগাভী ইবন কায়সানের কথাও আনেন: এমন কিশোর, যাদের এক অবস্থা থেকে আরেক অবস্থায় সরানো হয় না। সা'দী সব সুতো এক বাক্যে বাঁধেন: থেকে যাওয়ার জন্য, চিরকালের জন্যই তাদের সৃষ্টি। তারা বুড়ো হয় না, বদলায় না, নিজের বয়স ছাড়িয়েও যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Earrings, Bracelets and Bliss",
          "bn": "কানের দুল, কাঁকন আর স্বাচ্ছন্দ্য"
        },
        "p": [
          {
            "en": "A second line of explanation reads mukhalladun as adornment rather than time. Sa'id ibn Jubayr, reported by both al-Qurtubi and al-Baghawi, says it means muqarratun, wearing earrings. Al-Qurtubi explains that an earring is called khulda, and that a whole set of jewellery goes by the same name. Al-Baghawi gives the verb behind it: khallada jariyatahu, said of adorning a girl with a khuld, which is the earring. At-Tabari records the view without naming anyone, as the saying of others: muqarratun musawwarun, wearing earrings and bracelets.",
            "bn": "ব্যাখ্যার দ্বিতীয় ধারাটি মুখাল্লাদূনকে সময়ের কথা হিসেবে না পড়ে সাজসজ্জার কথা হিসেবে পড়ে। কুরতুবী ও বাগাভী দুজনেই সাঈদ ইবন জুবাইরের মত আনেন: এর মানে মুকাররাতূন, কানে দুল পরা। কুরতুবী বলেন, কানের দুলকে বলা হয় খুলদা, আর পুরো এক প্রস্থ গয়নাকেও একই নামে ডাকা হয়। বাগাভী এর পেছনের ক্রিয়াটি দেখান: খাল্লাদা জারিয়াতাহূ, অর্থাৎ কোনো মেয়েকে খুলদ পরিয়ে সাজানো, আর খুলদ মানে কানের দুল। তাবারী কারও নাম না নিয়ে মতটি লিখেছেন 'অন্যরা বলেছেন' বলে: মুকাররাতূন মুসাওয়ারূন, কানে দুল আর হাতে কাঁকন পরা।"
          },
          {
            "en": "Al-Qurtubi lists further variants under qila, it was said. One is musawwarun, wearing bracelets, with something similar reported from al-Farra' and a line of verse in which women are described as mukhalladat with silver. Another takes muqarratun in the sense of girded, wearing belts. 'Ikrimah gives a different gloss altogether: mukhalladun means mun'amun, kept in comfort and ease. Al-Qurtubi sets these readings side by side with the ones about age and death, and he does not choose among them or say that any one is weaker than the others.",
            "bn": "কুরতুবী 'বলা হয়েছে' শিরোনামে আরও কয়েকটি মত আনেন। একটি হলো মুসাওয়ারূন, হাতে কাঁকন পরা। ফাররা থেকেও এর কাছাকাছি কথা এসেছে, সঙ্গে একটি পঙ্‌ক্তি, যেখানে নারীদের বলা হয়েছে রুপার গয়নায় মুখাল্লাদাত। আরেকটি মতে মুকাররাতূনের মানে কোমরবন্ধ পরা। ইকরিমার ব্যাখ্যা একেবারে ভিন্ন: মুখাল্লাদূন মানে মুনআমূন, আরাম আর স্বাচ্ছন্দ্যে রাখা। কুরতুবী এই মতগুলো বয়স ও মৃত্যুর ব্যাখ্যাগুলোর পাশাপাশি রেখেছেন। কোনোটি বেছে নেননি, কোনোটিকে দুর্বলও বলেননি।"
          },
          {
            "en": "At-Tabari is the one commentator here who weighs the two lines against each other. The more correct reading, he says, is that of those who explained it as not changing and not dying, because that is the more evident of the word's two meanings, and he supports it with the usage about a man who ages without greying. That is his preference, stated as his; the other sources list their glosses without ranking them, and so does this article.",
            "bn": "এখানে একমাত্র তাবারীই দুই ধারার মধ্যে তুলনা করে রায় দেন। তাঁর মতে বেশি সঠিক তাদের কথা, যারা ব্যাখ্যা করেছেন: তারা বদলাবে না, মরবেও না। কারণ শব্দটির দুই অর্থের মধ্যে এটিই বেশি স্পষ্ট। সমর্থনে তিনি আবার আনেন সেই বয়স্ক লোকের কথা, যার চুল পাকেনি। এটি তাঁর পছন্দ, এবং তাঁর পছন্দ হিসেবেই এখানে রইল। বাকি উৎসগুলো ক্রম ঠিক না করে শুধু ব্যাখ্যাগুলো তুলে ধরে, এই প্রবন্ধও তা-ই করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Children Are They?",
          "bn": "তারা কাদের সন্তান?"
        },
        "p": [
          {
            "en": "Who the wildan are is a question on which the commentators recorded several different answers. Al-Qurtubi gives one under qila, it was said: youths of a single age whom Allah brought into being for the people of the Garden, to go round them as He wills, without birth. Ma'arif al-Qur'an calls a related view the preferred opinion: that the youths of Paradise, like its fair maidens, will have been born in Paradise and will be the servants of its people.",
            "bn": "উইলদান কারা, এ প্রশ্নে তাফসীরকারেরা একাধিক ভিন্ন উত্তর লিপিবদ্ধ করেছেন। কুরতুবী 'বলা হয়েছে' বলে একটি মত আনেন: একই বয়সের কিছু কিশোর, যাদের আল্লাহ জান্নাতবাসীদের জন্যই সৃষ্টি করেছেন, জন্ম ছাড়াই, যেন তারা তাঁর ইচ্ছামতো তাদের চারপাশে ঘোরে। মাআরিফুল কুরআন কাছাকাছি একটি মতকে বলে অগ্রগণ্য মত: জান্নাতের হুরদের মতো জান্নাতের কিশোরেরাও জান্নাতেই জন্ম নেবে এবং জান্নাতবাসীদের সেবক হবে।"
          },
          {
            "en": "Al-Qurtubi then reports two views that identify the youths with children of this world. 'Ali ibn Abi Talib and al-Hasan al-Basri: the wildan here are the children of the Muslims who die young, having no good deed and no bad deed. Salman al-Farisi: the children of the polytheists are the servants of the people of the Garden. Right after this al-Qurtubi gives a reason from al-Hasan: they had no good deeds to be rewarded for and no bad deeds to be punished for, so they were placed in this position. He states no preference among these views.",
            "bn": "এরপর কুরতুবী এমন দুটি মত আনেন, যাতে এই কিশোরদের দুনিয়ার শিশুদের সঙ্গে মেলানো হয়েছে। আলী ইবন আবী তালিব (রাঃ) ও হাসান বসরীর মতে, এখানে উইলদান হলো মুসলমানদের সেই সন্তানেরা, যারা ছোট বয়সে মারা যায়, যাদের কোনো নেকিও নেই, গুনাহও নেই। সালমান ফারসী (রাঃ)-এর মতে, মুশরিকদের শিশুরাই জান্নাতবাসীদের সেবক। ঠিক এর পরে কুরতুবী হাসানের একটি যুক্তি আনেন: তাদের এমন নেকি ছিল না যার প্রতিদান দেওয়া হবে, এমন গুনাহও ছিল না যার শাস্তি দেওয়া হবে, তাই তাদের এই অবস্থানে রাখা হয়েছে। এই মতগুলোর কোনোটিকে কুরতুবী অগ্রাধিকার দেননি।"
          },
          {
            "en": "Al-Baghawi reports al-Hasan differently. In his text al-Hasan says they are the children of the people of this world, who had no good deeds to be rewarded for and no bad deeds to be punished for, and that because there is no birth in the Garden they are the servants of its people. So al-Hasan appears in al-Qurtubi with the children of the Muslims and in al-Baghawi with the children of the people of this world, while al-Baghawi's no birth in the Garden and al-Qurtubi's without birth sit differently from Ma'arif's born in Paradise. Each is recorded here as its source gives it, and none is reconciled.",
            "bn": "বাগাভী হাসানের কথা আনেন অন্যভাবে। তাঁর বর্ণনায় হাসান বলেন, এরা দুনিয়াবাসীদের সন্তান। তাদের এমন নেকি ছিল না যার প্রতিদান মিলবে, এমন গুনাহও ছিল না যার শাস্তি হবে। আর জান্নাতে যেহেতু কোনো জন্ম নেই, তাই তারাই জান্নাতবাসীদের সেবক। ফলে কুরতুবীর বর্ণনায় হাসানের নাম আসে মুসলমানদের সন্তানের সঙ্গে, আর বাগাভীর বর্ণনায় দুনিয়াবাসীদের সন্তানের সঙ্গে। বাগাভীর 'জান্নাতে জন্ম নেই' আর কুরতুবীর 'জন্ম ছাড়াই', এ দুটিও মাআরিফের 'জান্নাতে জন্ম নেবে' কথার সঙ্গে মেলে না। প্রতিটি মত এখানে তার উৎস যেভাবে দিয়েছে সেভাবেই রইল, কোনোটিকে অন্যটির সঙ্গে মেলানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding the Question Open",
          "bn": "প্রশ্নটি খোলা রাখা"
        },
        "p": [
          {
            "en": "This question touches something tender: what becomes of children who die before they can be held to account, including the children of those who did not believe. The verse does not answer it. It speaks of wildan and of their service; the children of believers, or of anyone else, are not named in its words. They come from the reports above, and those reports disagree with one another. Nothing in this article states the fate of any child. Where the commentators differ, the difference stays as they left it.",
            "bn": "প্রশ্নটি খুব স্পর্শকাতর একটি জায়গা ছুঁয়ে যায়: যে শিশুরা হিসাবের বয়সে পৌঁছানোর আগেই মারা যায়, যাদের মধ্যে অবিশ্বাসীদের সন্তানও আছে, তাদের কী হবে। আয়াত এর উত্তর দেয় না। আয়াত বলে শুধু উইলদানের কথা আর তাদের সেবার কথা। মুমিনদের সন্তান হোক বা অন্য কারও, কোনো শিশুর নাম আয়াতের শব্দে নেই। এসব এসেছে উপরের বর্ণনাগুলো থেকে, আর সেগুলো একটি আরেকটির সঙ্গে মেলে না। কোনো শিশুর পরিণতি এই প্রবন্ধ নিশ্চিত করে বলে না। তাফসীরকারদের মতভেদ যেখানে আছে, তাঁরা যেভাবে রেখে গেছেন সেভাবেই রইল।"
          },
          {
            "en": "No commentary consulted here on this verse attaches a sound hadith of the Prophet ﷺ to it. Salman al-Farisi's statement in al-Qurtubi is a Companion's saying, given without a chain or a grading. A report attributing the same content to the Prophet ﷺ was not found in any source consulted for this verse or confirmed on a hadith page, so it is not quoted and nothing rests on it. Ma'arif al-Qur'an says hadith narratives indicate thousands of such servants for each person in Paradise, but names no narration; that too stays unconfirmed.",
            "bn": "এ আয়াতের যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো সহীহ হাদিস এর সঙ্গে যুক্ত করেনি। কুরতুবীতে সালমান ফারসী (রাঃ)-এর যে কথা আছে, সেটি একজন সাহাবীর উক্তি, সেখানে কোনো সনদ বা মান উল্লেখ নেই। একই কথা নবী ﷺ-এর নামে বর্ণিত কোনো রেওয়ায়েত এ আয়াতের কোনো উৎসে পাওয়া যায়নি, কোনো হাদিসের পাতায়ও তা যাচাই হয়নি। তাই তা এখানে উদ্ধৃত হয়নি, কোনো কথাও তার উপর দাঁড়িয়ে নেই। মাআরিফুল কুরআন বলে, হাদিসের বর্ণনা থেকে বোঝা যায় প্রত্যেক জান্নাতবাসীর এমন হাজার হাজার সেবক থাকবে। কিন্তু কোনো বর্ণনার নাম সে দেয় না, তাই সেটিও অযাচাইকৃত রইল।"
          },
          {
            "en": "What the sources share is narrower, and still rich. Youths go round those brought near in order to serve them, and in most of the commentators' own glosses time does not alter them: they do not die, do not age, do not change. On the question of where the youths come from, early scholars gave different answers. A reader loses nothing by holding it as they did, as a matter reported and not settled, and by returning to what the verse plainly says.",
            "bn": "উৎসগুলো যেখানে একমত, সে জায়গাটা ছোট, তবু তাতে অনেক কিছু আছে। কিশোরেরা নৈকট্যপ্রাপ্তদের চারপাশে ঘুরবে তাদের সেবা করতে। আর বেশির ভাগ তাফসীরকারের নিজের ব্যাখ্যায় সময় তাদের গায়ে হাত দেয় না: তারা মরে না, বুড়ো হয় না, বদলায় না। কিশোরেরা কোথা থেকে আসে, সে প্রশ্নে প্রথম দিকের আলেমরা ভিন্ন ভিন্ন উত্তর দিয়েছেন। তাঁরা যেভাবে প্রশ্নটি ধরে রেখেছিলেন, পাঠকও সেভাবে ধরে রাখলে কিছু হারান না: বর্ণিত বিষয় হিসেবে, মীমাংসিত বিষয় হিসেবে নয়। তারপর ফিরে আসা যায় আয়াত যা স্পষ্ট বলে, সেখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blessing Is Completed",
          "bn": "নিয়ামত যেখানে পূর্ণ হয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi's closing sentence gives the verse its point: blessing is completed when a person is surrounded by those who serve him. Set beside 56:15 and 56:16, the picture is of companions seated at ease, facing one another, while what they need is carried round to them. In this world even the person who is served must ask, wait and arrange. The reward of those brought near is drawn partly as rest from that. They are served, by youths whom the commentators describe with dignity and beauty, not with pity.",
            "bn": "কুরতুবীর শেষ বাক্যটিই আয়াতের মূল কথা ধরিয়ে দেয়: সেবা করার মানুষ যখন চারপাশ ঘিরে থাকে, তখনই নিয়ামত পূর্ণ হয়। ৫৬:১৫ ও ৫৬:১৬ আয়াতের পাশে রাখলে ছবিটা দাঁড়ায় এমন: সঙ্গীরা আরামে মুখোমুখি বসে আছে, আর যা দরকার তা ঘুরে ঘুরে তাদের কাছে আসছে। দুনিয়ায় যে সেবা পায়, তাকেও চাইতে হয়, অপেক্ষা করতে হয়, ব্যবস্থা করতে হয়। নৈকট্যপ্রাপ্তদের প্রতিদানের একটি দিক হলো এসব থেকে বিশ্রাম। তাদের সেবা করে এমন কিশোরেরা, যাদের তাফসীরকারেরা বর্ণনা করেছেন মর্যাদা আর সৌন্দর্য দিয়ে, করুণার চোখে নয়।"
          },
          {
            "en": "For a reader here the verse works better as a quiet mirror than as a puzzle. Most people both serve and are served: at home, at work, in shops and kitchens. Those who wait on us grow tired, grow older and change, as we do; the verse promises those brought near a service untouched by any of that. Meanwhile the dignity with which the commentators describe these youths is a reminder of how to treat those who serve us now, and the open question of their origin is a lesson in saying only what the text says.",
            "bn": "এই দুনিয়ার পাঠকের কাছে আয়াতটি সমাধান করার মতো ধাঁধা নয়, বরং নীরব এক আয়না হতে পারে। বেশির ভাগ মানুষ একই সঙ্গে সেবা করে আর সেবা পায়: ঘরে, কর্মস্থলে, দোকানে, রান্নাঘরে। যারা আমাদের সেবা করে, তারা আমাদের মতোই ক্লান্ত হয়, বয়সে বাড়ে, বদলে যায়। আয়াত নৈকট্যপ্রাপ্তদের এমন সেবার ওয়াদা দেয়, যাকে এসবের কিছুই ছোঁয় না। এদিকে তাফসীরকারেরা যে মর্যাদা দিয়ে এই কিশোরদের বর্ণনা করেছেন, তা মনে করিয়ে দেয়, আজ যারা আমাদের সেবা করে তাদের সঙ্গে কেমন আচরণ করা উচিত। আর তাদের উৎস নিয়ে খোলা প্রশ্নটি শেখায়, আয়াত যা বলে শুধু ততটুকুই বলতে।"
          }
        ]
      }
    ]
  },
  "56:22": {
    "sections": [
      {
        "h": {
          "en": "Two Words That End a List",
          "bn": "তালিকার শেষে দুটি শব্দ"
        },
        "p": [
          {
            "en": "Wa hurun 'in: two words, the shortest verse in this stretch of al-Waqi'ah. They close a list that opens with couches for the forerunners, the group the surah introduced at 56:10, and runs on through cups carried round, fruit chosen at will and the meat of birds they desire, ending at 56:21. The Muyassar, which reads 56:20 to 56:24 as one passage, gives the plain sense in a single line: and they will have women with wide eyes, like pearls kept in their shells in purity and beauty.",
            "bn": "ওয়া হূরুন ঈন: মাত্র দুটি শব্দ, সূরা ওয়াকিআর এই অংশের সবচেয়ে ছোট আয়াত। একটা তালিকা এখানে শেষ হচ্ছে। শুরু হয়েছিল অগ্রগামীদের আসন দিয়ে, যে দলটির কথা সূরা ৫৬:১০ আয়াতে এনেছে। তারপর এসেছে ঘুরিয়ে পরিবেশন করা পেয়ালা, ইচ্ছেমতো বেছে নেওয়া ফল আর মন যা চায় সেই পাখির গোশত, যা ৫৬:২১ আয়াতে গিয়ে থামে। মুয়াসসার ৫৬:২০ থেকে ৫৬:২৪ পর্যন্ত এক অংশ হিসেবে পড়ে, আর এক বাক্যে সরল অর্থটা বলে দেয়: আর তাদের জন্য থাকবে বড় বড় চোখের নারী, ঝিনুকের ভেতরে সযত্নে রাখা মুক্তার মতো, স্বচ্ছ আর সুন্দর।"
          },
          {
            "en": "The Muyassar ends where 56:24 ends: all of this is a reward for the righteous deeds they used to do in the world. The pearls belong to 56:23 and the reward to 56:24, and each has its own page; here they only frame the two words. Two of the eight commentaries consulted for this page pass over the verse itself. Ma'arif al-Qur'an, in its group of 56:21 to 56:26, speaks only of the birds' meat, and Ibn Kathir's abridged English moves from the birds straight to the pearls. What follows rests on the other six.",
            "bn": "মুয়াসসার থামে সেখানে, যেখানে ৫৬:২৪ আয়াত থামে: এ সবই দুনিয়াতে তাদের করা নেক আমলের প্রতিদান। মুক্তার উপমা ৫৬:২৩ আয়াতের বিষয়, আর প্রতিদানের কথা ৫৬:২৪ আয়াতের। দুটোর জন্যই আলাদা পাতা আছে। এখানে তারা কেবল এই দুই শব্দকে দুই পাশ থেকে ঘিরে রাখছে। এই পাতার জন্য আনা আটটি তাফসীরের দুটি আয়াতটিকে পাশ কাটিয়ে গেছে। মাআরিফুল কুরআন ৫৬:২১ থেকে ৫৬:২৬ এক সঙ্গে আলোচনা করেছে, কিন্তু কথা বলেছে কেবল পাখির গোশত নিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য পাখির কথা থেকে সরাসরি চলে গেছে মুক্তার কথায়। পরের আলোচনা বাকি ছয়টির উপর দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Clear White, Deep Dark",
          "bn": "স্বচ্ছ সাদা, গাঢ় কালো"
        },
        "p": [
          {
            "en": "At-Tabari defines each word by its singular. Hur is the plural of hawra', and he explains her as she whose eye is pure in its white and intense in its black. 'In is the plural of 'ayna', and she is wide of eye, in beauty. Both words, then, are about the eyes in his account: the first about the contrast of their white and dark, the second about their size. Neither gloss reaches beyond the eye, and he adds nothing more to the pair.",
            "bn": "তাবারী প্রতিটি শব্দের অর্থ বলেন তার একবচন ধরে। হূর হলো হাওরা-র বহুবচন। হাওরা তিনি বলেন তাকে, যার চোখের সাদা অংশ স্বচ্ছ আর কালো অংশ খুব গাঢ়। ঈন হলো আইনা-র বহুবচন, অর্থাৎ সুন্দর বড় চোখের অধিকারিণী। তাঁর ব্যাখ্যায় তাই দুটি শব্দই চোখ নিয়ে। প্রথমটি চোখের সাদা আর কালোর বৈপরীত্য নিয়ে, দ্বিতীয়টি চোখের আকার নিয়ে। দুই ব্যাখ্যার কোনোটিই চোখের বাইরে যায় না, আর এ জোড়া শব্দে তিনি এর বেশি কিছু যোগ করেন না।"
          },
          {
            "en": "As-Sa'di reads the verse as and for them are hur 'in, and his glosses are a little fuller. The hawra' is the one in whose eye there is kohl and charm, beauty and splendour. The 'in are those with beautiful, large eyes. Then he gives a reason for the choice of feature: beauty of the eye in a woman is among the greatest signs of her beauty and loveliness. In his reading the verse speaks of the whole person through the eye, and stops there.",
            "bn": "সা'দী আয়াতটি পড়েন এভাবে: আর তাদের জন্য থাকবে হূরুন ঈন। তাঁর ব্যাখ্যা একটু বিস্তারিত। হাওরা সেই নারী, যার চোখে আছে সুরমার কালো আভা আর লাবণ্য, সৌন্দর্য আর দীপ্তি। ঈন মানে যাদের চোখ সুন্দর ও বড়। এরপর তিনি বলেন, এই বৈশিষ্ট্যটিই কেন বেছে নেওয়া হলো: নারীর চোখের সৌন্দর্য তার রূপ আর লাবণ্যের সবচেয়ে বড় প্রমাণগুলোর একটি। তাঁর পাঠে আয়াতটি চোখের মধ্য দিয়ে পুরো মানুষটির কথা বলে, আর সেখানেই থেমে যায়।"
          },
          {
            "en": "Al-Baghawi closes his entry with a report of how the words were explained: hur 'in, white, with large eyes. Here the whiteness seems to belong to the women themselves, where at-Tabari placed it in the white of the eye. The Muyassar keeps to the second word only: women with wide eyes. Across the four, the agreement is on the eye, wide and clear; the small difference is whether hur speaks of the eye's whiteness or of the person's. The sources leave it there, and so does this page.",
            "bn": "বাগাভী তাঁর আলোচনা শেষ করেন শব্দ দুটির একটি প্রচলিত ব্যাখ্যা উদ্ধৃত করে: হূরুন ঈন মানে শুভ্র, বড় বড় চোখের অধিকারিণী। এখানে শুভ্রতা যেন নারীদের নিজেদের, অথচ তাবারী শুভ্রতা রেখেছিলেন চোখের সাদা অংশে। মুয়াসসার শুধু দ্বিতীয় শব্দটি ধরে: বড় বড় চোখের নারী। চারটি ভাষ্যেরই মিল চোখের ব্যাপারে, চোখ বড় আর স্বচ্ছ। পার্থক্য সামান্য: হূর শব্দটি চোখের শুভ্রতার কথা বলে, নাকি মানুষটির শুভ্রতার। উৎসগুলো এখানেই থামে, এ পাতাও থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa Hurun 'In, a Fresh Clause",
          "bn": "পেশ দিয়ে পড়া: নতুন বাক্য"
        },
        "p": [
          {
            "en": "The words were read in different ways, and the commentators record it. At-Tabari reports that some readers of Medina, Mecca and Kufa, and some of the people of Basra, read them in the nominative, wa hurun 'in, as the start of a new clause. Their reasoning, as he gives it: the hur are not among the things carried round, so the words cannot share the case of the fruit and the meat. The nominative means, he says, and with them are hur 'in, or and they have hur 'in.",
            "bn": "শব্দ দুটি একাধিকভাবে পড়া হয়েছে, আর তাফসীরকারেরা তা লিখে রেখেছেন। তাবারী জানান, মদীনা, মক্কা ও কূফার কিছু কারী এবং বসরার কিছু লোক শব্দ দুটি পেশ দিয়ে পড়েছেন: ওয়া হূরুন ঈন, নতুন এক বাক্যের শুরু হিসেবে। তাবারীর বর্ণনায় তাঁদের যুক্তি এই: হূরদের তো ঘুরিয়ে পরিবেশন করা হয় না। তাই ফল আর গোশতের সঙ্গে এ শব্দ দুটির বিভক্তি এক হতে পারে না। তাঁর ভাষায় পেশের অর্থ দাঁড়ায়: আর তাদের কাছে থাকবে হূরুন ঈন, অথবা তাদের জন্য থাকবে হূরুন ঈন।"
          },
          {
            "en": "Al-Qurtubi calls the nominative the reading of the majority, and says it was the choice of Abu 'Ubayd and Abu Hatim, with the sense and with them are hur 'in, again because the hur are not carried round. He adds two grammarians' routes to it. Al-Akhfash takes it by sense: they have cups, and they have hur 'in. Or the words join thullah, the multitude of 56:13, whose predicate is on couches inlaid, in 56:15; an indefinite may open the clause here because its adjective specifies it.",
            "bn": "কুরতুবী পেশ দিয়ে পড়াকে বলেন অধিকাংশের কিরাআত, আর জানান, আবু উবাইদ ও আবু হাতিম এটিই বেছে নিয়েছেন। অর্থ: আর তাদের কাছে থাকবে হূরুন ঈন। কারণ সেই একই, হূরদের ঘুরিয়ে পরিবেশন করা হয় না। এরপর তিনি ব্যাকরণবিদদের দুটি পথ উল্লেখ করেন। আখফাশ অর্থের দিক থেকে ধরেন: তাদের জন্য পেয়ালা আছে, তাদের জন্য হূরুন ঈনও আছে। অথবা শব্দ দুটি যুক্ত হবে ৫৬:১৩ আয়াতের সুল্লাহ, অর্থাৎ বড় দলের সঙ্গে, যার বিধেয় ৫৬:১৫ আয়াতের খচিত আসনের কথা। বিশেষণ শব্দটিকে নির্দিষ্ট করে দেয়, তাই অনির্দিষ্ট শব্দ দিয়েও এখানে বাক্য শুরু হতে পারে।"
          },
          {
            "en": "Ibn Kathir in Arabic says only that some read the nominative, meaning and for them therein are hur 'in. As-Sa'di's gloss, and for them are hur 'in, follows the same reading. Al-Baghawi says the rest of the readers took the nominative, and gives it a different sense: and hur 'in will go round among them, making the hur the ones who move about. He then cites al-Akhfash for the sense they have hur 'in. So even one vowel carries two explanations: something they possess, or those who come round to them.",
            "bn": "ইবন কাসীর আরবী তাফসীরে শুধু বলেন, কেউ কেউ পেশ দিয়ে পড়েছেন, যার অর্থ: আর সেখানে তাদের জন্য থাকবে হূরুন ঈন। সা'দীর ব্যাখ্যাও এই কিরাআত ধরেই: আর তাদের জন্য থাকবে হূরুন ঈন। বাগাভী বলেন, বাকি কারীরা পেশ দিয়ে পড়েছেন, কিন্তু অর্থ দেন ভিন্ন: আর হূরুন ঈন তাদের মাঝে ঘুরে বেড়াবে। অর্থাৎ ঘুরে আসছে হূররাই। এরপর তিনি আখফাশের কথা আনেন: তাদের জন্য আছে হূরুন ঈন। ফলে একটিমাত্র স্বরচিহ্নের ভেতরেও দুটি ব্যাখ্যা পাওয়া যায়। হয় তারা এমন কিছু যা ওদের কাছে থাকবে, নয়তো তারাই ঘুরে ঘুরে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa Hurin 'In, Following the List",
          "bn": "যের দিয়ে পড়া: তালিকার অনুসরণে"
        },
        "p": [
          {
            "en": "The other reading puts both words in the genitive, wa hurin 'in. At-Tabari assigns it to most of the readers of Kufa and some of Medina. Al-Qurtubi names Hamza and al-Kisa'i among those who read it, along with others. Al-Baghawi names three: Abu Ja'far, Hamza and al-Kisa'i, reading the ra' and the nun with kasra, as if the verse said wa bi-hurin 'in, and with hur 'in, under the same preposition that governs the cups and jugs of 56:18.",
            "bn": "অন্য কিরাআতে দুটি শব্দই যের দিয়ে পড়া হয়: ওয়া হূরিন ঈন। তাবারী এটি কূফার অধিকাংশ কারী এবং মদীনার কিছু কারীর কিরাআত বলে উল্লেখ করেন। কুরতুবী যাঁরা এভাবে পড়েছেন তাঁদের মধ্যে হামযা ও কিসাঈর নাম নেন, সঙ্গে আরও কয়েকজন। বাগাভী তিনজনের নাম বলেন: আবু জা'ফর, হামযা ও কিসাঈ। তাঁরা রা আর নূন যের দিয়ে পড়েছেন, যেন আয়াতটি বলছে ওয়া বিহূরিন ঈন, অর্থাৎ হূরুন ঈনসহ। যে অব্যয়টি ৫৬:১৮ আয়াতের পেয়ালা আর জগের আগে বসেছে, সেটিই যেন এখানে কাজ করছে।"
          },
          {
            "en": "At-Tabari explains the genitive as following the case of what comes before it, the fruit and the meat, even though the hur are not among the things carried round. Because the intended meaning was well known, the last word followed the first in case. He cites a line of poetry: when the fair women come out one day and thin the brows and the eyes. Only brows are thinned; eyes are lined with kohl. The poet joined them in grammar because the listener knew the sense.",
            "bn": "তাবারীর ব্যাখ্যায় যের এসেছে আগের শব্দগুলোর, মানে ফল আর গোশতের, বিভক্তির অনুসরণে। অথচ হূররা ঘুরিয়ে পরিবেশন করার জিনিসের মধ্যে পড়ে না। উদ্দিষ্ট অর্থটা সবার জানা ছিল, তাই শেষের শব্দ বিভক্তিতে প্রথমের পিছু নিয়েছে। প্রমাণ হিসেবে তিনি একটি কবিতার চরণ আনেন: সুন্দরী নারীরা যেদিন বেরিয়ে আসে আর ভ্রু ও চোখ সরু করে আঁকে। ভ্রু-ই কেবল সরু করে আঁকা হয়, চোখে দেওয়া হয় সুরমা। কবি ব্যাকরণে দুটিকে এক করেছেন, কারণ শ্রোতা অর্থটা বুঝত।"
          },
          {
            "en": "He adds a second line, in which one hears a rumbling of the innards and, of the hands, a roughness, though roughness cannot be heard. Al-Baghawi gives the same account in brief: the genitive follows the cups and jugs, the fruit and the birds' meat, in grammar, though the meanings differ, because the hur are not carried round; he cites the same verse about brows and eyes. Then, under it was said, he gives a smoother sense: they are honoured with fruit, the meat of birds and hur 'in.",
            "bn": "তিনি আরেকটি চরণ আনেন, যেখানে বলা হয়েছে, তার পেট থেকে গুড়গুড় শব্দ শোনা যায়, আর হাতের রুক্ষতাও। অথচ রুক্ষতা তো কানে শোনার জিনিস নয়। বাগাভী একই কথা সংক্ষেপে বলেন। ব্যাকরণে যের এসেছে পেয়ালা, জগ, ফল আর পাখির গোশতের অনুসরণে, যদিও অর্থ আলাদা, কারণ হূরদের ঘুরিয়ে পরিবেশন করা হয় না। তিনিও ভ্রু আর চোখের সেই চরণটি উদ্ধৃত করেন। এরপর 'বলা হয়' কথাটি দিয়ে তিনি আরও সহজ একটি অর্থ আনেন: ফল, পাখির গোশত আর হূরুন ঈন দিয়ে তাদের সম্মানিত করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Joined to Cups or to Gardens",
          "bn": "পেয়ালার সঙ্গে, নাকি বাগানের সঙ্গে"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out where the genitive may attach. Al-Zajjaj, as he reports, joins it to bi-akwab, with cups, and carries it on the meaning: they take their delight in cups, fruit, meat and hur. Or it joins jannat, the gardens of delight in 56:12, so that they are in the gardens of delight and among the hur, with a governing word understood: in the companionship of hur. Al-Farra' takes it as following in form only, though the meanings differ, since the hur are not carried round.",
            "bn": "যের কোথায় যুক্ত হতে পারে, কুরতুবী তা গুছিয়ে বলেন। তাঁর বর্ণনা অনুযায়ী যাজ্জাজ একে জুড়ে দেন বিআকওয়াব (পেয়ালাসহ) শব্দের সঙ্গে, আর অর্থ ধরেন এভাবে: তারা আনন্দ উপভোগ করবে পেয়ালা, ফল, গোশত আর হূরদের সঙ্গে। নয়তো এটি জুড়বে ৫৬:১২ আয়াতের জান্নাতিন নাঈম, অর্থাৎ নিয়ামতের বাগানের সঙ্গে। তখন অর্থ হবে, তারা নিয়ামতের বাগানে থাকবে, থাকবে হূরদের মাঝেও। এখানে একটি শব্দ উহ্য ধরা হয়: হূরদের সাহচর্যে। ফাররার মতে এটি কেবল শব্দের গঠনে আগের শব্দের অনুসরণ, অর্থ আলাদা। কারণ হূরদের তো ঘুরিয়ে পরিবেশন করা হয় না।"
          },
          {
            "en": "Qutrub, also in al-Qurtubi, goes the other way. He joins the words to the cups and jugs plainly, with no appeal to meaning, and says it is not to be denied that the hur be brought round to them and that there be delight for them in that. So the same genitive, in one commentary, is read as form only by al-Farra' and as sense as well by Qutrub. Al-Qurtubi places the two views side by side and does not decide between them.",
            "bn": "কুরতুবীর তাফসীরেই কুতরুব উল্টো পথ ধরেন। তিনি শব্দ দুটিকে সরাসরি পেয়ালা আর সুরাহির সঙ্গে যুক্ত করেন, অর্থের আশ্রয় নেন না। তাঁর কথা, হূরদের তাদের কাছে নিয়ে আসা হবে আর তাতে তাদের আনন্দ থাকবে, এটা অস্বীকার করার কিছু নেই। ফলে একই তাফসীরে একই যের ফাররার কাছে কেবল শব্দের ব্যাপার, আর কুতরুবের কাছে অর্থেরও। কুরতুবী দুই মত পাশাপাশি রাখেন, কোনোটির পক্ষে রায় দেন না।"
          },
          {
            "en": "Ibn Kathir in Arabic gives the genitive two possibilities. The first is grammatical following, and he quotes the run of verses from the boys going round in 56:17 down to wa hurin 'in, comparing 5:6, wipe your heads and your feet, and 76:21, green garments of fine silk and brocade. The second is that the hur are among those the immortal boys bring round, but in the palaces and tents, not in the open company of each other, the servants bringing the hur to them there. He closes with: and Allah knows best.",
            "bn": "ইবন কাসীর আরবী তাফসীরে যেরের দুটি সম্ভাবনা দেখান। প্রথমটি ব্যাকরণগত অনুসরণ। এর প্রমাণে তিনি ৫৬:১৭ আয়াতে কিশোরদের ঘুরে বেড়ানোর কথা থেকে ওয়া হূরিন ঈন পর্যন্ত পুরো অংশটি উদ্ধৃত করেন, আর তুলনা টানেন দুটি আয়াতের সঙ্গে: ৫:৬ আয়াতের 'তোমাদের মাথা ও পা মাসেহ করো', এবং ৭৬:২১ আয়াতের 'সবুজ মিহি রেশম ও মোটা রেশমের পোশাক'। দ্বিতীয় সম্ভাবনা হলো, চিরকিশোররা যাদের নিয়ে ঘুরে আসে, হূররাও তাদের মধ্যে। তবে তা প্রাসাদ আর তাঁবুর ভেতরে, পরস্পরের প্রকাশ্য মজলিসে নয়। সেবকেরা সেখানেই হূরদের তাদের কাছে নিয়ে আসবে। তিনি শেষ করেন এ কথায়: আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third Vowel, Rarely Read",
          "bn": "তৃতীয় স্বরচিহ্ন, বিরল কিরাআত"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his entry by saying the words were read with three endings: nominative, accusative and genitive. The accusative, wa huran 'inan, he assigns to al-Ash'hab al-'Uqayli, an-Nakha'i and 'Isa ibn 'Umar ath-Thaqafi, and says it is so in the codex of Ubayy. It rests on a verb understood, as if the verse said: and they are given in marriage to hur 'in. He adds that taking the accusative by sense is also good, because to have something carried round to them means to be given it.",
            "bn": "কুরতুবী আলোচনার শুরুতেই জানান, শব্দ দুটি তিন রকম শেষ-স্বরে পড়া হয়েছে: পেশ, যবর আর যের। যবরের কিরাআত, ওয়া হূরান ঈনান, তিনি আশহাব উকাইলী, নাখঈ এবং ঈসা ইবন উমর সাকাফীর বলে উল্লেখ করেন। তিনি আরও বলেন, উবাই (রাঃ)-এর মুসহাফেও এভাবেই আছে। এর ভিত্তি একটি উহ্য ক্রিয়া, যেন আয়াতটি বলছে: আর হূরুন ঈনের সঙ্গে তাদের বিয়ে দেওয়া হবে। তিনি যোগ করেন, অর্থের দিক থেকে যবর ধরাও ভালো, কারণ কোনো কিছু তাদের কাছে ঘুরিয়ে আনার মানেই তা তাদের দেওয়া।"
          },
          {
            "en": "Only al-Qurtubi among the six records this third reading. At-Tabari and al-Baghawi report two readings, and Ibn Kathir in Arabic discusses the nominative and the genitive. The page records the accusative as al-Qurtubi reports it, with its readers and its grammar, and goes no further. What the three endings share is plain from his own account: in each, the hur are part of what is given to the people of this passage, whether as what they have, what they are given or what is listed with their delights.",
            "bn": "ছয়টি তাফসীরের মধ্যে কেবল কুরতুবীই এই তৃতীয় কিরাআত উল্লেখ করেছেন। তাবারী আর বাগাভী দুটি কিরাআতের কথা বলেন, আর ইবন কাসীর আরবী তাফসীরে আলোচনা করেন পেশ আর যের নিয়ে। কুরতুবী যেভাবে বর্ণনা করেছেন, যবরের কিরাআত এ পাতায় ঠিক সেভাবেই রাখা হলো, কারীদের নাম আর ব্যাকরণসহ, এর বেশি নয়। তাঁর নিজের বর্ণনা থেকেই তিনটি স্বরচিহ্নের মিলটা স্পষ্ট। প্রতিটিতেই হূররা এ অংশে বর্ণিত লোকদের পাওয়া নিয়ামতের অংশ। এক পাঠে তারা ওদের নিজের, আরেক পাঠে ওদের দেওয়া উপহার, আরেক পাঠে ওদের অন্য নিয়ামতের সঙ্গে এক তালিকায় গোনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Both Readings Hold",
          "bn": "দুই কিরাআতই গ্রহণযোগ্য"
        },
        "p": [
          {
            "en": "The reason given for the nominative, that the hur are not carried round, did not go unanswered. Al-Qurtubi reports al-Kisa'i's reply: whoever reads the nominative and gives that reason must say the same of the fruit and the meat, since these are not carried round either; only the wine is. Al-Kisa'i is himself among the genitive readers named by al-Qurtubi and al-Baghawi. Al-Qurtubi still records the nominative as the majority reading and the choice of Abu 'Ubayd and Abu Hatim, and leaves both on record.",
            "bn": "পেশের পক্ষে কারণ দেখানো হয়েছিল, হূরদের তো ঘুরিয়ে পরিবেশন করা হয় না। এ যুক্তির জবাবও এসেছে। কুরতুবী কিসাঈর জবাব উদ্ধৃত করেন: যে পেশ দিয়ে পড়ে আর এই কারণ দেখায়, ফল আর গোশতের বেলাতেও তাকে একই কথা মানতে হবে। কারণ সেগুলোও ঘুরিয়ে পরিবেশন করা হয় না, ঘোরানো হয় শুধু পানীয়। কুরতুবী ও বাগাভী যেরের কারীদের মধ্যে কিসাঈর নামও নিয়েছেন। তবু কুরতুবী পেশকে অধিকাংশের কিরাআত আর আবু উবাইদ ও আবু হাতিমের পছন্দ হিসেবেই উল্লেখ করেন, আর দুটোকেই লিপিবদ্ধ রাখেন।"
          },
          {
            "en": "At-Tabari gives the verdict in his own voice. The right view, he says, is that these are two well-known readings, each read by a body of readers, and their meanings are close, so whichever of the two a reader recites, he is correct. Neither reading is set aside, and neither is ranked above the other in his entry. The page follows him in that. The grammarians argued over attachment and case; at-Tabari's own judgement is that the meanings stay close either way.",
            "bn": "তাবারী রায় দেন নিজের ভাষায়। তাঁর মতে সঠিক কথা হলো, এ দুটি সুপরিচিত কিরাআত। প্রত্যেকটি একদল কারী পড়েছেন, আর দুটির অর্থও কাছাকাছি। তাই যে কেউ যেকোনোটি পড়ুক, সে ঠিকই পড়ছে। তাঁর আলোচনায় কোনো কিরাআত বাদ পড়েনি, কোনোটিকে অন্যটির উপরে রাখাও হয়নি। এ পাতাও তাঁকেই অনুসরণ করছে। ব্যাকরণবিদেরা শব্দ কোথায় যুক্ত হবে আর কোন বিভক্তি হবে, তা নিয়ে তর্ক করেছেন। তবে তাবারীর নিজের বিচারে, যেভাবেই পড়া হোক, অর্থ কাছাকাছিই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Left Unopened",
          "bn": "যে প্রশ্ন খোলা হলো না"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it, so none is cited here. Nor does any of them discuss whether the hur are women of this world made new or beings created in Paradise; that question is not raised in these entries on this verse, and the page leaves it unopened. What they do say is said with restraint. They speak of the eye, its clearness, its dark and its width, and of beauty and charm, and they say no more than that.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস জোড়েনি। তাই এখানেও কোনো হাদিস উদ্ধৃত হচ্ছে না। হূররা কি দুনিয়ার নারীদেরই নতুন করে সৃষ্টি করা রূপ, নাকি জান্নাতেই সৃষ্ট আলাদা সত্তা, এ প্রশ্নও এই আয়াতের আলোচনায় কেউ তোলেননি। এ পাতাও প্রশ্নটি খুলছে না। তাঁরা যা বলেছেন, সংযমের সঙ্গে বলেছেন। কথা বলেছেন চোখ নিয়ে, তার স্বচ্ছতা, তার কালো আর তার বিস্তার নিয়ে, আর সৌন্দর্য ও লাবণ্য নিয়ে। এর বেশি কিছু বলেননি।"
          },
          {
            "en": "The two words do not stand alone for long. The next verse gives them a likeness, pearls kept hidden, and the one after names the whole list a reward for what they used to do. Those verses have their own pages. Here the order is enough: couches, cups, fruit, meat and then the hur, each named briefly, each a gift. The Muyassar's last clause, a reward for the righteous deeds they used to do in the world, is where the passage itself is heading.",
            "bn": "শব্দ দুটি বেশিক্ষণ একা দাঁড়িয়ে থাকে না। পরের আয়াত তাদের একটি উপমা দেয়, লুকিয়ে রাখা মুক্তা। তার পরের আয়াত পুরো তালিকাকে বলে তাদের আমলের প্রতিদান। সেই আয়াতগুলোর আলাদা পাতা আছে। এখানে ক্রমটুকুই যথেষ্ট: আসন, পেয়ালা, ফল, গোশত, তারপর হূর। প্রতিটির নাম অল্প কথায়, প্রতিটিই উপহার। মুয়াসসারের শেষ কথাটি হলো: দুনিয়াতে তারা যে নেক আমল করত, তার প্রতিদান। পুরো অংশটি নিজেও সেদিকেই এগোচ্ছে।"
          }
        ]
      }
    ]
  },
  "56:27": {
    "sections": [
      {
        "h": {
          "en": "Turning to the Right Hand",
          "bn": "ডান হাতের দলের দিকে ফেরা"
        },
        "p": [
          {
            "en": "Wa-ashabu l-yamini ma ashabu l-yamin: and the companions of the right, what are the companions of the right? Five Arabic words, with the name said twice. The verse comes straight after 56:26, where the account of the foremost closes on a saying of peace, peace. Ibn Kathir's Arabic note marks the turn in one sentence: having mentioned the end of the foremost, who are those brought near, Allah joined to them the mention of the companions of the right, whom he calls al-abrar, the righteous.",
            "bn": "ওয়া আসহাবুল ইয়ামীনি মা আসহাবুল ইয়ামীন: আর ডান দিকের দল, কী সেই ডান দিকের দল? আরবিতে পাঁচটি শব্দ, তাতে নামটা দুবার। আয়াতটি আসে ঠিক ৫৬:২৬-এর পরে, যেখানে অগ্রবর্তীদের বর্ণনা শেষ হয়েছে সালাম, সালাম কথাটি দিয়ে। ইবন কাসীর তাঁর আরবি তাফসীরে একটিমাত্র বাক্যে মোড়টা চিহ্নিত করেন। অগ্রবর্তী, অর্থাৎ নৈকট্যপ্রাপ্তদের পরিণামের কথা বলার পর আল্লাহ তাদের সঙ্গে জুড়ে দিলেন ডান দিকের দলের কথা। এদের তিনি বলেন আল-আবরার, অর্থাৎ নেককার বান্দারা।"
          },
          {
            "en": "Al-Qurtubi chooses a different verb for the same move. The verse, he says, returned to the mention of the stations of the companions of the right, naming them with the word al-maymana that the surah used for them at 56:8. The return is the point. The group was introduced near the opening of the surah, set aside while the foremost were described, and is now taken up again. Its name and the three-way division of 56:7 to 56:10 belong to the article on 56:8 and are not reopened here.",
            "bn": "একই মোড়কে কুরতুবী প্রকাশ করেন অন্য একটি ক্রিয়া দিয়ে। তাঁর ভাষায়, আয়াতটি ফিরে এল ডান দিকের দলের মর্যাদার কথায়। এখানে তিনি তাদের নাম নেন আল-মাইমানা শব্দে, যে শব্দে সূরাটি ৫৬:৮ আয়াতে তাদের উল্লেখ করেছিল। ফিরে আসাটাই আসল কথা। সূরার শুরুর দিকে দলটির পরিচয় দেওয়া হয়েছিল, তারপর অগ্রবর্তীদের বর্ণনার সময় তাদের কথা থেমে ছিল, আর এখন আবার তা শুরু হলো। তাদের নাম আর ৫৬:৭ থেকে ৫৬:১০ পর্যন্ত তিন দলে ভাগের আলোচনা ৫৬:৮-এর প্রবন্ধের বিষয়, এখানে তা আবার খোলা হচ্ছে না।"
          },
          {
            "en": "What this article follows instead is the verse's own work. It asks a question, and the verses after it answer. The answer runs from 56:28 to 56:34 in a list of trees, shade, water, fruit and raised couches, and the account of this group closes at 56:38 to 56:40. The matching verse for the other side, 56:41, has its own article. Here the focus stays on the five words: what the question asks, why the name is said again, and how the reply begins.",
            "bn": "এ প্রবন্ধ বরং দেখবে আয়াতটি নিজে কী করে। আয়াতটি প্রশ্ন তোলে, আর পরের আয়াতগুলো উত্তর দেয়। উত্তর চলে ৫৬:২৮ থেকে ৫৬:৩৪ পর্যন্ত: গাছ, ছায়া, পানি, ফল আর উঁচু বিছানার এক তালিকা। এ দলের বর্ণনা শেষ হয় ৫৬:৩৮ থেকে ৫৬:৪০ আয়াতে। অপর পক্ষের জোড়া আয়াত ৫৬:৪১, তার আলাদা প্রবন্ধ আছে। এখানে মনোযোগ থাকবে ওই পাঁচটি শব্দেই: প্রশ্নটা কী জানতে চায়, নামটা কেন আবার বলা হলো, আর উত্তর কীভাবে শুরু হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Step Below the Near",
          "bn": "নৈকট্যপ্রাপ্তদের এক ধাপ নিচে"
        },
        "p": [
          {
            "en": "Ibn Kathir supports the order of the passage with a saying of Maymun ibn Mihran, whom he quotes by name: the companions of the right are a rank below those brought near. The abridged English Ibn Kathir gives the same line, that those on the right are lesser in rank than the foremost in faith. The surah's own order agrees. The foremost were named at 56:10 and 56:11 as those brought near, and their reward was set out first; the companions of the right come second.",
            "bn": "অংশটির এই ক্রমের সমর্থনে ইবন কাসীর নাম ধরে মায়মুন ইবন মিহরানের একটি উক্তি আনেন: ডান দিকের দল নৈকট্যপ্রাপ্তদের চেয়ে এক স্তর নিচে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা আছে: ঈমানে অগ্রবর্তীদের তুলনায় ডান দিকের দলের মর্যাদা কম। সূরার নিজের ক্রমও তাই বলে। ৫৬:১০ ও ৫৬:১১ আয়াতে অগ্রবর্তীদের নাম এসেছে নৈকট্যপ্রাপ্ত হিসেবে, তাদের প্রতিদানের বর্ণনা এসেছে আগে। ডান দিকের দল আসে দ্বিতীয় স্থানে।"
          },
          {
            "en": "A lower rank is not a small one. Ibn Kathir's own word for this group, al-abrar, is a word of praise, and the verse that introduces them is built to make the listener wonder at them. The surah keeps the same two tiers to its end. At 56:88 and 56:89 it speaks of the one who was of those brought near, and at 56:90 and 56:91 of the one who was of the companions of the right, greeted with peace. That closing passage has its own article; here it is enough to see the order hold.",
            "bn": "নিচের স্তর মানে ছোট স্তর নয়। এ দলের জন্য ইবন কাসীরের নিজের শব্দ আল-আবরার, যা প্রশংসার শব্দ। আর যে আয়াতে তাদের কথা ফিরে আসে, তার গড়নই এমন যে শ্রোতা বিস্ময়ে থমকে যায়। সূরাটি শেষ পর্যন্ত এই দুই স্তর ধরে রাখে। ৫৬:৮৮ ও ৫৬:৮৯ আয়াতে আসে নৈকট্যপ্রাপ্তদের একজনের কথা, আর ৫৬:৯০ ও ৫৬:৯১ আয়াতে ডান দিকের দলের একজনের কথা, যাকে সালাম জানানো হয়। শেষের সেই অংশের আলাদা প্রবন্ধ আছে। এখানে শুধু এটুকু দেখার যে ক্রমটা বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Their State and Their Ending",
          "bn": "তাদের হাল আর পরিণাম"
        },
        "p": [
          {
            "en": "Ma ashabu l-yamin: what are the companions of the right? The name has already said who they are, so the question must be asking something else. Ibn Kathir spells it out in three short questions: what thing are the companions of the right, what is their state, and how will their end be? On his reading the verse asks about condition and outcome. The abridged English renders it the same way: who are those on the right, what is their condition and what will their final destination be like.",
            "bn": "মা আসহাবুল ইয়ামীন: কী সেই ডান দিকের দল? তারা কারা, নামেই তা বলা হয়ে গেছে। তাই প্রশ্নটা অন্য কিছু জানতে চাইছে। ইবন কাসীর তিনটি ছোট প্রশ্নে কথাটা খুলে বলেন: ডান দিকের দল কোন জিনিস, তাদের অবস্থা কেমন, আর তাদের পরিণাম কেমন হবে? তাঁর পাঠে আয়াতটি জানতে চায় অবস্থা আর শেষ ফল। সংক্ষিপ্ত ইংরেজি সংস্করণও একইভাবে বলে: ডান দিকের লোকেরা কারা, তাদের অবস্থা কী, আর তাদের শেষ গন্তব্য কেমন হবে।"
          },
          {
            "en": "At-Tabari frames the verse as Allah's address to His Prophet Muhammad ﷺ, and then glosses the question: what thing are they, what is theirs, and what good has been prepared for them? He supports the gloss with a report through his own chain, Bishr from Yazid from Sa'id, reaching Qatada, who said of this verse: what is theirs, and what has been prepared for them. In both wordings the question looks forward. It is less about the people than about what is waiting for them.",
            "bn": "তাবারী আয়াতটিকে দেখেন তাঁর নবী মুহাম্মাদ ﷺ-এর প্রতি আল্লাহর সম্বোধন হিসেবে। তারপর প্রশ্নটির ব্যাখ্যা দেন: তারা কোন জিনিস, তাদের জন্য কী আছে, আর তাদের জন্য কী কল্যাণ প্রস্তুত রাখা হয়েছে? এ ব্যাখ্যার পক্ষে তিনি নিজের সনদে একটি বর্ণনা আনেন, বিশর থেকে ইয়াযীদ, তাঁর থেকে সাঈদ, সেখান থেকে কাতাদা পর্যন্ত। কাতাদা এ আয়াত সম্পর্কে বলেছেন: তাদের জন্য কী আছে, আর তাদের জন্য কী প্রস্তুত রাখা হয়েছে। দুই ভাষ্যেই প্রশ্নটা সামনের দিকে তাকায়। লোকগুলোর চেয়ে বেশি জানতে চায়, তাদের জন্য কী অপেক্ষা করছে।"
          },
          {
            "en": "The word prepared matters. A reward described as prepared is already in place before the people arrive. Qatada's gloss, carried by at-Tabari, turns the question into a pointer: look at what is ready for them. The verses that follow are then less a separate passage than the content of that readiness, listed item by item. This is why several commentators treat 56:27 together with what follows it, as the next sections show.",
            "bn": "প্রস্তুত শব্দটা গুরুত্বপূর্ণ। যে প্রতিদানকে প্রস্তুত বলা হয়, তা মানুষগুলো পৌঁছানোর আগেই তৈরি থাকে। তাবারীর আনা কাতাদার ব্যাখ্যা প্রশ্নটাকে একটা ইশারায় পরিণত করে: দেখো, তাদের জন্য কী তৈরি আছে। তখন পরের আয়াতগুলো আর আলাদা কোনো অংশ থাকে না, হয়ে ওঠে সেই প্রস্তুতির একেকটি জিনিসের তালিকা। এ কারণেই কয়েকজন তাফসীরকার ৫৬:২৭-কে পরের আয়াতগুলোর সঙ্গে মিলিয়ে পড়েন, পরের অংশগুলোতে তা দেখা যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Said Again to Magnify",
          "bn": "মহিমা বোঝাতে আবার বলা"
        },
        "p": [
          {
            "en": "Why say the name again rather than ask, what are they? Al-Qurtubi answers directly: the repetition is to magnify the bliss in which they are. On his reading the weight falls on the na'im, the blessing itself; the name is said twice because what it holds is great. As-Sa'di puts the weight on the people: their affair is great and their state immense. Al-Baghawi uses the language of wonder. Allah mentioned the companions of the right, he says, and expressed wonder at their affair.",
            "bn": "কী তারা, এটুকু না বলে নামটা আবার কেন বলা হলো? কুরতুবী সরাসরি উত্তর দেন: তারা যে নিয়ামতের মধ্যে আছে, তার মহত্ত্ব বোঝাতেই এই পুনরাবৃত্তি। তাঁর পাঠে ভার পড়ে নাঈম, অর্থাৎ নিয়ামতের উপর। নামটা দুবার আসে, কারণ তার ভেতরে যা আছে তা বিশাল। সা'দী ভার রাখেন মানুষগুলোর উপর: তাদের ব্যাপার মহান, তাদের অবস্থা বিরাট। বাগাভী বিস্ময়ের ভাষা বেছে নেন। তাঁর কথায়, আল্লাহ ডান দিকের দলের কথা বললেন এবং তাদের ব্যাপারে বিস্ময় প্রকাশ করলেন।"
          },
          {
            "en": "The Muyassar turns the question into an exclamation: and the companions of the right, how great is their standing and their recompense! It holds both sides at once, the rank of the people and the size of the reward. Set side by side, the four notes stress different things: al-Qurtubi the bliss, as-Sa'di their condition, al-Baghawi wonder, the Muyassar standing and reward together. None of them argues against another in the text consulted, and the readings sit together without strain.",
            "bn": "মুয়াসসার প্রশ্নটাকে বিস্ময়সূচক বাক্যে বদলে দেয়: আর ডান দিকের দল, কত মহান তাদের মর্যাদা আর প্রতিদান! এতে দুই দিকই একসঙ্গে ধরা আছে, মানুষগুলোর মর্যাদা আর প্রতিদানের বিশালতা। পাশাপাশি রাখলে চারটি ব্যাখ্যার জোর চার জায়গায়। কুরতুবীর জোর নিয়ামতে, সা'দীর জোর তাদের অবস্থায়, বাগাভীর জোর বিস্ময়ে, আর মুয়াসসারের জোর মর্যাদা ও প্রতিদান দুটোতেই। যে লেখা দেখা হয়েছে, তাতে কেউ কারও বিরোধিতা করেননি। পাঠগুলো স্বচ্ছন্দে পাশাপাশি থাকে।"
          },
          {
            "en": "The two translations on this site divide the same way. The English keeps the question: what are the companions of the right? The Bengali renders it as praise: how fortunate is the group of the right. Neither loses the verse, because the commentators themselves read the question as one that already carries its answer in its tone. A question of this kind is not asked to gather information. It is asked so that the listener stops, waits, and expects something remarkable to follow.",
            "bn": "এ সাইটের দুই অনুবাদও একইভাবে দুই দিকে যায়। ইংরেজি অনুবাদ প্রশ্নটাই রাখে: ডান দিকের দল কী? বাংলা অনুবাদ একে প্রশংসায় রূপ দেয়: কত ভাগ্যবান ডান দিকের দল! কোনোটাতেই আয়াতের অর্থ হারায় না। কারণ তাফসীরকারেরা নিজেরাই প্রশ্নটাকে এমনভাবে পড়েছেন যে তার সুরেই উত্তর লুকিয়ে আছে। এ ধরনের প্রশ্ন তথ্য জানার জন্য করা হয় না। করা হয় যাতে শ্রোতা থামে, অপেক্ষা করে, আর আশা করে যে অসাধারণ কিছু আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Led Right, Book in Hand",
          "bn": "ডানে চলা, ডান হাতে আমলনামা"
        },
        "p": [
          {
            "en": "At-Tabari says plainly who is meant. The companions of the right are those who are taken along the right-hand side on the Day of Resurrection, those who were given their books in their right hands. His gloss joins two images in one sentence: a direction of travel and the hand that receives the record. He does not set them against each other; both describe the same people on the same Day. This is his own explanation, given before any report.",
            "bn": "কাদের কথা বলা হচ্ছে, তাবারী তা সোজাসুজি বলেন। ডান দিকের দল তারা, কিয়ামতের দিন যাদের ডান দিকের পথে নিয়ে যাওয়া হবে, যাদের আমলনামা দেওয়া হয়েছে তাদের ডান হাতে। তাঁর ব্যাখ্যা এক বাক্যে দুটি ছবি জুড়ে দেয়: চলার দিক, আর যে হাতে আমলনামা আসে। দুটিকে তিনি পরস্পরের বিপরীতে দাঁড় করান না। দুটিই একই দিনে একই মানুষদের বর্ণনা। এটা তাঁর নিজের ব্যাখ্যা, কোনো বর্ণনা আনার আগেই দেওয়া।"
          },
          {
            "en": "He then records a second view, introduced with the words it has been said: that they are the children of the believers. He gives it a chain of his own, from Muhammad ibn Ma'mar through Abu Hisham al-Makhzumi, 'Abd al-Wahid, al-A'mash and 'Uthman ibn Qays, to Zadhan Abu 'Amr, who said he heard 'Ali ibn Abi Talib (RA) say of this verse: the companions of the right are the children of the believers. This is a Companion's statement as reported, not a saying of the Prophet ﷺ.",
            "bn": "এরপর তিনি দ্বিতীয় একটি মত উল্লেখ করেন, 'বলা হয়েছে' কথাটি দিয়ে: তারা হলো মুমিনদের শিশুসন্তান। এর জন্য তিনি নিজের একটি সনদ দেন। মুহাম্মাদ ইবন মা'মার থেকে আবু হিশাম আল-মাখযুমী, আব্দুল ওয়াহিদ, আল-আ'মাশ ও উসমান ইবন কায়স হয়ে যাযান আবু আমর পর্যন্ত। যাযান বলেছেন, তিনি আলী ইবন আবী তালিব (রাঃ)-কে এ আয়াত সম্পর্কে বলতে শুনেছেন: ডান দিকের দল হলো মুমিনদের শিশুসন্তান। এটি একজন সাহাবীর উক্তি, যেমনটা বর্ণিত হয়েছে। নবী ﷺ-এর বাণী নয়।"
          },
          {
            "en": "At-Tabari does not weigh the two views against each other in this note, and he gives no judgement on the chain. The other commentaries consulted for this verse do not mention the children at all: Ibn Kathir calls the group the righteous, Ma'arif al-Qur'an speaks of believers, and the rest speak of their reward. This article keeps both views as at-Tabari records them, his own gloss and the report from 'Ali (RA), and does not choose between them.",
            "bn": "এই আলোচনায় তাবারী দুই মতের মধ্যে তুলনা করেন না, সনদ নিয়েও কোনো মন্তব্য করেন না। এ আয়াতের জন্য দেখা অন্য তাফসীরগুলো শিশুদের কথা একেবারেই বলে না। ইবন কাসীর দলটিকে বলেন নেককার, মাআরিফুল কুরআন বলে মুমিনদের কথা, আর বাকিরা কথা বলেন তাদের প্রতিদান নিয়ে। তাবারী যেভাবে লিখে রেখেছেন, এ প্রবন্ধ দুটি মতই সেভাবে রাখে: তাঁর নিজের ব্যাখ্যা, আর আলী (রাঃ)-এর বর্ণনা। কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Room for the Forgiven",
          "bn": "ক্ষমাপ্রাপ্তদের জন্য জায়গা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, citing the commentary called Mazhari, widens the group. The people of the right, it says, are in the first place the God-fearing and the righteous believers. Sinful believers will also join them: some through the sheer grace of Allah, others forgiven through the intercession of a prophet or a friend of Allah. Some will be punished for their sins first, and after that punishment they too will be purified and will join the people of the right.",
            "bn": "মাআরিফুল কুরআন তাফসীরে মাযহারীর বরাতে দলটির পরিধি বাড়িয়ে দেখায়। তার কথায়, ডান দিকের দল প্রথমত মুত্তাকী ও নেককার মুমিনরা। গুনাহগার মুমিনরাও তাদের সঙ্গে যুক্ত হবে। কেউ শুধু আল্লাহর অনুগ্রহে, কেউ কোনো নবী বা আল্লাহর কোনো ওলীর সুপারিশে মাফ পেয়ে। কাউকে আগে তার গুনাহের শাস্তি ভোগ করতে হবে। সেই শাস্তির পর তারাও পরিশুদ্ধ হয়ে ডান দিকের দলে মিলিত হবে।"
          },
          {
            "en": "For these believers, Ma'arif al-Qur'an explains, the Fire works as a cleansing of the dross of their sins rather than as the end of their story. This reading belongs to Ma'arif al-Qur'an and its source; the other notes consulted for this verse do not discuss it. What it offers the reader is hope with its conditions intact: the way to the right is open to believers who fell short, and no one is told in advance who they are. It is a reason to repent, not to delay.",
            "bn": "মাআরিফুল কুরআন ব্যাখ্যা করে, এই মুমিনদের জন্য আগুন তাদের গল্পের শেষ নয়। তা বরং তাদের গুনাহের ময়লা ধুয়ে দেওয়ার উপায়। এ পাঠ মাআরিফুল কুরআন ও তার উৎসের। এ আয়াতের জন্য দেখা অন্য তাফসীরগুলো এ নিয়ে কিছু বলে না। পাঠকের জন্য এতে আছে শর্তসহ আশা। যে মুমিনরা পিছিয়ে পড়েছে, ডান দিকের পথ তাদের জন্যও খোলা, আর কারা তারা, আগে থেকে কাউকে বলা হয়নি। এটা তওবার কারণ, দেরি করার অজুহাত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Opens in Trees",
          "bn": "উত্তরের শুরু গাছের সারিতে"
        },
        "p": [
          {
            "en": "The question does not wait long. Ibn Kathir's Arabic note ends on the words: then He explained that, and said. The abridged English is plainer still: Allah next answers this question by saying, among lote trees with thorns removed. The Muyassar shows the same link in its layout. Its gloss for 56:27 to 56:34 is a single sentence: after the exclamation it runs straight on to the list, so that the question and its answer are read in one breath.",
            "bn": "প্রশ্নটা বেশিক্ষণ অপেক্ষায় থাকে না। ইবন কাসীরের আরবি আলোচনা শেষ হয় এই কথায়: তারপর তিনি তা ব্যাখ্যা করে বললেন। সংক্ষিপ্ত ইংরেজি সংস্করণ আরও সোজা: আল্লাহ এরপর এ প্রশ্নের উত্তর দেন এই বলে, কাঁটা ছাড়ানো বরই গাছের মাঝে। মুয়াসসারের বিন্যাসেও একই যোগসূত্র। ৫৬:২৭ থেকে ৫৬:৩৪ পর্যন্ত তার ব্যাখ্যা একটিমাত্র বাক্য। বিস্ময়ের পরই সে সরাসরি তালিকায় চলে যায়, ফলে প্রশ্ন আর উত্তর এক নিঃশ্বাসে পড়া হয়।"
          },
          {
            "en": "That list, in the Muyassar's words, is lote trees with no thorns, bananas stacked on each other, shade that lasts and does not fade, water flowing without end, abundant fruit that neither runs out nor is withheld, and furnishings raised up on couches. On the first item Ibn Kathir accepts two early meanings together, thornless and laden with fruit, and sets it against the lote tree of this world, thorny and sparse in fruit. The second tree has had its own article at 56:29; the rest await theirs.",
            "bn": "মুয়াসসারের ভাষায় তালিকাটি এমন: কাঁটাহীন বরই গাছ, থরে থরে সাজানো কলা, স্থায়ী ছায়া যা সরে যায় না, অবিরাম বয়ে চলা পানি, প্রচুর ফল যা ফুরোয় না, কেউ আটকেও রাখে না, আর আসনের উপর উঁচু করে রাখা বিছানা। প্রথম জিনিসটির ব্যাপারে ইবন কাসীর পূর্বসূরিদের দুটি অর্থ একসঙ্গে মেনে নেন: কাঁটাহীন, আর ফলে ভরা। দুনিয়ার বরই গাছ কাঁটায় ভরা, ফল কম, তিনি এর সঙ্গে তুলনা টানেন। দ্বিতীয় গাছটির প্রবন্ধ ৫৬:২৯-এ আছে, বাকিগুলো যার যার জায়গায় আসবে।"
          },
          {
            "en": "The account of this group closes at 56:38 with the words for the companions of the right, and then 56:39 and 56:40: a company of the former peoples and a company of the later. The abridged Ibn Kathir reads these as a multitude of those on the right coming from the earlier generations and a multitude from the later ones. So the question of 56:27 is framed on both sides: asked at the start, and answered by the time the group is named again.",
            "bn": "এ দলের বর্ণনা শেষ হয় ৫৬:৩৮ আয়াতে, 'ডান দিকের দলের জন্য' কথাটি দিয়ে। তারপর ৫৬:৩৯ ও ৫৬:৪০: পূর্ববর্তীদের মধ্য থেকে এক বড় দল, আর পরবর্তীদের মধ্য থেকে এক বড় দল। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ এর অর্থ করে: ডান দিকের দলের একটি বড় অংশ আসবে আগের প্রজন্মগুলো থেকে, আরেকটি বড় অংশ পরের প্রজন্মগুলো থেকে। এভাবে ৫৬:২৭-এর প্রশ্ন দুই দিক থেকে বাঁধা। শুরুতে প্রশ্ন, আর দলের নাম আবার আসার আগেই উত্তর পূর্ণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Under a Shade Unending",
          "bn": "যে ছায়া ফুরোয় না"
        },
        "p": [
          {
            "en": "No commentary consulted for this verse attaches a saying of the Prophet ﷺ to 56:27 itself. The nearest sound narration belongs to the answer. Abu Hurayrah (RA) reported that the Prophet ﷺ said: \"In Paradise there is a tree which is so big that a rider can travel in its shade for one hundred years without passing it; and if you wish, you can recite: 'In shade long extended.'\" Al-Bukhari records it in his Sahih (4881), and the recitation points to 56:30.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীর ৫৬:২৭-এর সঙ্গে সরাসরি নবী ﷺ-এর কোনো বাণী যুক্ত করেনি। সবচেয়ে কাছের সহীহ বর্ণনাটি উত্তরের অংশের। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: \"জান্নাতে এমন একটি বিশাল গাছ আছে, যার ছায়ায় একজন আরোহী একশো বছর চলেও তা পার হতে পারবে না। চাইলে তোমরা পড়ো: 'আর বিস্তৃত ছায়া।'\" বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন (৪৮৮১), আর যে অংশ পড়তে বলা হয়েছে তা ৫৬:৩০।"
          },
          {
            "en": "Ibn Kathir cites the same report under 56:30 and adds that Muslim also collected it. It is quoted here for one reason: it shows the scale of what the question in 56:27 was pointing to. The verse asked, what are the companions of the right? Part of the answer is a shade so wide that a hundred years of riding would not cross it. A question asked in this way is meant to be heard while there is still time to act on it.",
            "bn": "ইবন কাসীর ৫৬:৩০-এর আলোচনায় একই বর্ণনা এনেছেন এবং বলেছেন, মুসলিমও এটি সংকলন করেছেন। এখানে বর্ণনাটি আনা একটিমাত্র কারণে: ৫৬:২৭-এর প্রশ্ন কোন বিশালতার দিকে ইশারা করছিল, তা বোঝাতে। আয়াত জানতে চেয়েছিল, কী সেই ডান দিকের দল? উত্তরের একটা অংশ এমন এক ছায়া, যা একজন আরোহী একশো বছর চলেও পার হতে পারবে না। এভাবে করা প্রশ্ন শোনানো হয় এমন সময়ে, যখন সে অনুযায়ী আমল করার সুযোগ এখনো আছে।"
          }
        ]
      }
    ]
  },
  "56:29": {
    "sections": [
      {
        "h": {
          "en": "The Second Tree of the Right",
          "bn": "ডান দিকের দ্বিতীয় গাছ"
        },
        "p": [
          {
            "en": "Wa-talhin mandud: two words in the Arabic, and the second tree in the garden of the companions of the right. The passage turned to them at 56:27 with a question that magnifies them: the companions of the right, what are the companions of the right? Then 56:28 began the answer: among lote trees, sidr, with their thorns removed. This verse is joined to the verse before by its opening wa, so the companions of the right are among talh as well, a talh that is mandud. Everything weighed below hangs on those two nouns.",
            "bn": "ওয়া তালহিম মানদূদ: আরবীতে মাত্র দুটি শব্দ, আর ডান দিকের দলের বাগানে এটি দ্বিতীয় গাছ। ৫৬:২৭ আয়াতে আলোচনা তাদের দিকে ফেরে এমন এক প্রশ্ন দিয়ে, যাতে তাদের মর্যাদা ফুটে ওঠে: ডান দিকের দল, কেমন সেই ডান দিকের দল? উত্তর শুরু হয় ৫৬:২৮ আয়াতে: তারা থাকবে কাঁটা ছাড়ানো সিদর বা বরই গাছের মাঝে। এ আয়াত শুরুর 'ওয়া' দিয়ে আগের আয়াতের সঙ্গে জোড়া। তাই ডান দিকের লোকেরা তালহ গাছের মাঝেও থাকবে, আর সে তালহ হবে মানদূদ। নিচের পুরো আলোচনা এই দুটি শব্দকে ঘিরেই।"
          },
          {
            "en": "The site's English renders the verse: And [banana] trees layered [with fruit]. Both brackets are the translator's additions. The Arabic names neither banana nor fruit, and the first bracket takes one side of a real disagreement among the commentators. The site's Bengali goes the same way, saying kola, banana, in plain text, with the fruit set in tiers. That choice has wide support, as the next section shows. Still, it is a reading of talh, not the word itself, and the other reading has its own names behind it.",
            "bn": "সাইটের ইংরেজি অনুবাদে আয়াতটির অর্থ: আর থরে থরে সাজানো কলা গাছ। তবে সেখানে 'কলা' আর 'ফলে' শব্দ দুটো বন্ধনীর ভেতরে, কারণ দুটোই অনুবাদকের যোগ করা। আরবীতে কলার নামও নেই, ফলের নামও নেই। প্রথম বন্ধনীটা তাফসীরকারদের এক সত্যিকারের মতভেদে একটা পক্ষ বেছে নিয়েছে। সাইটের বাংলা অনুবাদও একই পথে গেছে, বন্ধনী ছাড়াই লিখেছে কলা গাছ, যাতে থরে থরে সাজানো কলা। এ ব্যাখ্যার পেছনে সমর্থন অনেক, পরের অংশে তা দেখা যাবে। তবু এটা তালহ শব্দের একটা ব্যাখ্যা, শব্দটা নিজে নয়। অন্য ব্যাখ্যার পক্ষেও আলাদা আলেমদের নাম আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Banana, Say Most Reports",
          "bn": "বেশির ভাগ বর্ণনায় কলা"
        },
        "p": [
          {
            "en": "As for the people of interpretation among the Companions and the Followers, at-Tabari writes, they say it is al-mawz, the banana. He then lays out the chains. Ibn Abbas (RA) is asked about the talh again and again through Abu Sa'id ar-Raqashi, and each time answers that it is the banana; a man of Basra heard him say the same. Ali (RA) is reported, through al-Kalbi, saying it is the banana. Ata', Qasama and Qatada say so too, and in one chain Qatada's words are: we used to be told it is the banana.",
            "bn": "তাবারী লেখেন, সাহাবী ও তাবেয়ীদের মধ্যে যাঁরা তাফসীর করেছেন, তাঁরা বলেন এটা আল-মাওয, অর্থাৎ কলা। এরপর তিনি একে একে সনদগুলো সাজান। আবু সাঈদ আর-রাকাশীর সূত্রে বারবার দেখা যায়, ইবন আব্বাস (রাঃ)-কে তালহ সম্পর্কে জিজ্ঞেস করা হয়েছে, আর প্রতিবারই তিনি বলেছেন, এটা কলা। বসরার এক লোকও তাঁকে একই কথা বলতে শুনেছে। কালবীর সূত্রে আলী (রাঃ) থেকেও বর্ণিত, এটা কলা। আতা, কাসামা আর কাতাদাও তা-ই বলেন। এক সনদে কাতাদার কথাটা এরকম: আমাদের বলা হতো, এটা কলা।"
          },
          {
            "en": "Mujahid's wording is warmer: mawzukum, your bananas, and at-Tabari records a reason with it that a later section takes up. Ibn Zayd is the most careful voice on the list. Allah knows best, he says, except that the people of Yemen call the banana talh. Ibn Kathir, in Arabic, brings the same view through Ibn Abi Hatim from Abu Sa'id, then adds that it is reported from Ibn Abbas, Abu Hurayra, al-Hasan, Ikrima, Qasama ibn Zuhayr, Qatada and Abu Hazra, and was said by Mujahid and Ibn Zayd.",
            "bn": "মুজাহিদের শব্দটা আরও আপন: মাওযুকুম, তোমাদের কলা। তাবারী এর সঙ্গে তাঁর একটা কারণও লিখে রেখেছেন, যা পরের এক অংশে আসবে। তালিকায় সবচেয়ে সাবধানী কণ্ঠ ইবন যায়দের। তিনি বলেন, আল্লাহই ভালো জানেন, তবে ইয়েমেনের লোকেরা কলাকে তালহ বলে। ইবন কাসীর তাঁর আরবী তাফসীরে ইবন আবী হাতিমের সূত্রে আবু সাঈদ থেকে একই মত আনেন। তারপর যোগ করেন, এ মত বর্ণিত হয়েছে ইবন আব্বাস, আবু হুরায়রা, হাসান, ইকরিমা, কাসামা ইবন যুহাইর, কাতাদা ও আবু হাযরা থেকে। মুজাহিদ ও ইবন যায়দও এ কথা বলেছেন।"
          },
          {
            "en": "Al-Qurtubi opens his note with the same answer: talh is the banana tree, its singular talha, said by most commentators, Ali and Ibn Abbas among them. Al-Baghawi says the same in fewer words. The Muyassar paraphrases the verse as bananas stacked one upon another, and Ma'arif al-Qur'an says talh refers to the banana tree. So the site's translation stands on a wide base. The question is whether that base is the only one, and the texts themselves say it is not.",
            "bn": "কুরতুবীও তাঁর আলোচনা শুরু করেন একই উত্তরে: তালহ মানে কলা গাছ, একবচনে তালহা। অধিকাংশ তাফসীরকার এ কথা বলেছেন, তাঁদের মধ্যে আছেন আলী ও ইবন আব্বাস। বাগাভীও অল্প কথায় তা-ই বলেন। মুয়াসসার আয়াতের অর্থ করেছে একটার উপর আরেকটা সাজানো কলা। মাআরিফুল কুরআনও বলে, তালহ মানে কলা গাছ। অর্থাৎ সাইটের অনুবাদ দাঁড়িয়ে আছে চওড়া ভিতের উপর। প্রশ্ন হলো, ভিত কি এই একটাই? তাফসীরের পাঠগুলো নিজেরাই বলে, না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Great Thorny Desert Tree",
          "bn": "মরুর বিশাল কাঁটাগাছ"
        },
        "p": [
          {
            "en": "At-Tabari himself places a different voice before the commentators. Ma'mar ibn al-Muthanna, Abu Ubayda, used to say that among the Arabs the talh is a great tree with many thorns, and he cited a camel-driver's verse: her guide gave her the good news and said, tomorrow you will see the talh. Al-Qurtubi and al-Baghawi give the same definition to al-Farra' and Abu Ubayda together. Al-Qurtubi names the poet as al-Ja'di and concludes that talh is any great tree with many thorns.",
            "bn": "তাবারী নিজেই তাফসীরকারদের মতের আগে আরেকটা কণ্ঠ বসিয়েছেন। মা'মার ইবনুল মুসান্না, অর্থাৎ আবু উবায়দা বলতেন, আরবদের কাছে তালহ হলো অনেক কাঁটাওয়ালা বিশাল গাছ। সাক্ষী হিসেবে তিনি এক উটচালকের কবিতা আনতেন: পথপ্রদর্শক উটনীকে সুখবর দিয়ে বলল, কাল তুমি তালহ দেখতে পাবে। কুরতুবী ও বাগাভী একই সংজ্ঞা দিয়েছেন ফাররা ও আবু উবায়দা দুজনের নামে। কুরতুবী কবির নাম বলেছেন জা'দী, আর সিদ্ধান্ত টেনেছেন: অনেক কাঁটাওয়ালা যেকোনো বিশাল গাছই তালহ।"
          },
          {
            "en": "Ibn Kathir in Arabic gives the tree its home: great trees found in the land of the Hijaz, of the thorny kind called 'idah, singular talha, a tree with many thorns. The English abridgment calls it a large thorny shrub that grew in the Hijaz. As-Sa'di takes this side and does not mention the banana at all. The talh is well known, he writes: large trees that grow in the open desert, whose branches are stacked with delicious, longed-for fruit. In his reading the tree is familiar, and the fruit is the gift.",
            "bn": "ইবন কাসীর তাঁর আরবী তাফসীরে গাছটার ঠিকানাও দেন: হিজাযের মাটিতে জন্মানো বিশাল গাছ, ইদাহ নামের কাঁটাগাছের জাত, একবচনে তালহা, প্রচুর কাঁটা তার। ইংরেজি সংক্ষেপে একে বলা হয়েছে হিজাযে জন্মানো বড় কাঁটাঝোপ। সা'দী এই পক্ষই নেন, কলার কথা মুখেই আনেন না। তিনি লেখেন, তালহ সবার চেনা, খোলা মরুভূমিতে জন্মানো বড় বড় গাছ। এখানে তার ডালে ডালে থরে থরে সাজানো সুস্বাদু, লোভনীয় ফল। তাঁর ব্যাখ্যায় গাছটা পরিচিত, উপহার হলো ফল।"
          },
          {
            "en": "How can a tree known for its thorns be a reward? Al-Qurtubi records the answer of az-Zajjaj: it may be in Paradise with its thorns removed. Az-Zajjaj also likens it to the umm ghaylan tree, which has a blossom of very fine scent. The hearers, he says, were addressed and promised what they loved, something like it, except that its excellence over the tree of this world is as the excellence of everything in Paradise over everything here. The familiar shape stays; the measure changes.",
            "bn": "যে গাছ কাঁটার জন্য পরিচিত, সেটা পুরস্কার হয় কী করে? কুরতুবী এর জবাবে যাজ্জাজের কথা এনেছেন: হতে পারে জান্নাতে তার কাঁটা সরিয়ে দেওয়া হয়েছে। যাজ্জাজ একে উম্মে গায়লান গাছের সঙ্গেও তুলনা করেন, যার ফুলের সুবাস খুব মনোরম। তিনি বলেন, শ্রোতাদের যা প্রিয় ছিল, তার মতো জিনিসেরই প্রতিশ্রুতি দেওয়া হয়েছে। তফাত শুধু এই, দুনিয়ার গাছের চেয়ে এর শ্রেষ্ঠত্ব ঠিক ততখানি, দুনিয়ার সবকিছুর চেয়ে জান্নাতের সবকিছুর শ্রেষ্ঠত্ব যতখানি। চেনা আকৃতি থাকে, মাপটা বদলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports That Change Hands",
          "bn": "এক কথা, ভিন্ন বক্তা"
        },
        "p": [
          {
            "en": "A middle position also appears, and the sources do not agree on whose it is. Ibn Kathir reports from Ibn Abbas that the talh of Paradise resembles the talh of this world, but has fruit sweeter than honey. Al-Qurtubi gives nearly the same sentence to as-Suddi. Whoever said it, the saying keeps the familiar tree of the desert and changes what it yields. It sits close to az-Zajjaj's thornless talh and to as-Sa'di's branches stacked with fruit.",
            "bn": "একটা মাঝামাঝি মতও আছে, তবে কথাটা কার, সে বিষয়ে সূত্রগুলো একমত নয়। ইবন কাসীর ইবন আব্বাস থেকে বর্ণনা করেন: জান্নাতের তালহ দেখতে দুনিয়ার তালহের মতো, কিন্তু তার ফল মধুর চেয়েও মিষ্টি। কুরতুবী প্রায় একই বাক্য দিয়েছেন সুদ্দীর নামে। যিনিই বলে থাকুন, কথাটা মরুভূমির চেনা গাছটাকে রেখে দেয়, বদলে দেয় তার ফলন। যাজ্জাজের কাঁটাহীন তালহ আর সা'দীর ফলভরা ডালের সঙ্গে এর মিল স্পষ্ট।"
          },
          {
            "en": "Al-Hasan is a second case. Ibn Kathir counts him among those from whom the banana is reported. Al-Qurtubi and al-Baghawi report him saying the opposite: it is not the banana, but a tree with cool shade, moist shade in al-Qurtubi's wording and pleasant shade in al-Baghawi's. This article does not choose between the two lines of report. It notes only that they give al-Hasan different answers, and that his answer as al-Qurtubi and al-Baghawi give it rests on shade rather than fruit.",
            "bn": "হাসানের ব্যাপারটাও এমন। ইবন কাসীর তাঁকে সেই দলে গুনেছেন, যাঁদের থেকে কলার ব্যাখ্যা বর্ণিত। অথচ কুরতুবী আর বাগাভী তাঁর মুখে উল্টো কথা বর্ণনা করেন: এটা কলা নয়, বরং শীতল ছায়াওয়ালা এক গাছ। কুরতুবীর ভাষায় ছায়াটা স্নিগ্ধ-আর্দ্র, বাগাভীর ভাষায় মনোরম। এ লেখা দুই ধারার বর্ণনার কোনোটাকে বেছে নিচ্ছে না। শুধু এটুকু দেখাচ্ছে: দুই ধারায় হাসানের উত্তর দুই রকম। আর কুরতুবী ও বাগাভীর বর্ণনায় তাঁর উত্তরের ভর ফলের উপর নয়, ছায়ার উপর।"
          },
          {
            "en": "Ibn Kathir closes with the remark that Ibn Jarir, that is at-Tabari, related no explanation but the banana. In at-Tabari's own text the commentators' explanations are indeed all the banana, yet he sets Abu Ubayda's account of the thorny tree before them as what talh means among the Arabs. In the passage consulted for this verse, he does not say in his own voice which of the two he prefers. So the disagreement stays open here, with names on both sides and no verdict added.",
            "bn": "ইবন কাসীর শেষ করেন এই মন্তব্যে: ইবন জারীর, মানে তাবারী, কলা ছাড়া আর কোনো ব্যাখ্যা উল্লেখ করেননি। তাবারীর নিজের লেখায় তাফসীরকারদের সব ব্যাখ্যা সত্যিই কলা। তবে তাঁদের আগেই তিনি আবু উবায়দার কথা এনেছেন: আরবদের কাছে তালহ মানে কাঁটাওয়ালা বিশাল গাছ। এ আয়াতের যে অংশ সংগ্রহ করা হয়েছে, তাতে দুটোর কোনটা তাঁর পছন্দ, তা তিনি নিজের ভাষায় বলেননি। তাই মতভেদটা এখানে খোলাই থাকছে। দুই দিকেই নাম আছে, কোনো রায় যোগ করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Packed From Root to Crown",
          "bn": "গোড়া থেকে মাথা অবধি ঠাসা"
        },
        "p": [
          {
            "en": "Mandud comes from nadd, which al-Qurtubi defines as packing things close; the mandud is what has been packed. At-Tabari explains it as something whose parts have been set one upon another and gathered together, and he says the commentators said the like. Ibn Abbas: some of it on some. Mujahid: mutarakim, heaped up. Ibn Kathir adds as-Suddi's gloss, masfuf, set in rows. The Muyassar's paraphrase, stacked one on another, follows the same line.",
            "bn": "মানদূদ শব্দের মূলে আছে নাদ্দ। কুরতুবী এর অর্থ বলেন গায়ে গায়ে ঠেসে সাজানো, আর মানদূদ মানে যা এভাবে সাজানো হয়েছে। তাবারীর ব্যাখ্যায়, এর এক অংশ আরেক অংশের উপর রাখা, সব একসঙ্গে জড়ো করা। তিনি বলেন, তাফসীরকারেরাও এমনই বলেছেন। ইবন আব্বাস বলেছেন: একটার উপর আরেকটা। মুজাহিদ বলেছেন: মুতারাকিম, স্তূপ করা। ইবন কাসীর যোগ করেন সুদ্দীর ব্যাখ্যা: মাসফূফ, সারি সারি সাজানো। মুয়াসসারের ভাষ্যও একই পথে: একটার উপর আরেকটা সাজানো।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi draw the picture in full. The mandud is the tree laden with fruit from its beginning to its end, so that no bare trunk shows; it is packed solid. Al-Qurtubi cites a line of an-Nabigha for the word. Both then report Masruq: the trees of Paradise, from their roots to their branches, are fruit, all of it. Al-Qurtubi's version goes on: whenever a fruit is eaten, a better one returns in its place.",
            "bn": "কুরতুবী আর বাগাভী ছবিটা পুরোপুরি আঁকেন। মানদূদ হলো সেই গাছ, যা শুরু থেকে শেষ পর্যন্ত ফলে ভরা। তার কাণ্ডের কোনো খালি অংশ চোখে পড়ে না, পুরোটাই ঠাসা। শব্দটির সাক্ষী হিসেবে কুরতুবী নাবিগার একটা পঙ্‌ক্তি আনেন। দুজনেই এরপর মাসরূকের কথা বর্ণনা করেন: জান্নাতের গাছগুলো শিকড় থেকে ডালপালা পর্যন্ত পুরোটাই ফল। কুরতুবীর বর্ণনায় আরও আছে: যখনই একটা ফল খাওয়া হয়, তার জায়গায় আরও সুন্দর একটা ফল ফিরে আসে।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the image that suits the banana reading: clustered, fruit piled on top of each other as in a bunch of bananas. On the desert-tree reading, the same word describes a tree that carries thorns in this world and, as az-Zajjaj and as-Sa'di picture it, carries fruit in Paradise. Either way, mandud does one job. It takes a tree the hearer already knows and fills it, without a gap, from the bottom to the top.",
            "bn": "মাআরিফুল কুরআন কলার ব্যাখ্যার সঙ্গে মানানসই একটা ছবি দেয়: গুচ্ছবদ্ধ, এক কাঁদি কলার মতো ফলের উপর ফল। মরুভূমির গাছের ব্যাখ্যায় একই শব্দ বলে এমন গাছের কথা, দুনিয়াতে যার গায়ে কাঁটা, আর যাজ্জাজ ও সা'দীর ছবিতে জান্নাতে যার গায়ে ফল। দুই ব্যাখ্যাতেই মানদূদের কাজ একটাই। শ্রোতার চেনা একটা গাছ নিয়ে সেটাকে নিচ থেকে উপর পর্যন্ত ফাঁকহীনভাবে ভরে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Ali and the Letter 'Ayn",
          "bn": "আলী (রাঃ) ও আইন অক্ষর"
        },
        "p": [
          {
            "en": "At-Tabari first notes that the verse is read with the letter ha', talh, and that so it stands in the copies of the main cities. He then reports that Ali ibn Abi Talib (RA) used to read wa-tal'in mandud, with 'ayn, using tal', the word the Qur'an uses of the date palm in 26:148 and 50:10. In one chain, through al-Hasan ibn Sa'd from Qays ibn Sa'd, a man recited talh before Ali, who said: what has talh to do with it? It is only tal' mandud. Then he recited tal'uha hadim.",
            "bn": "তাবারী প্রথমে জানান, আয়াতটি পড়া হয় 'হা' অক্ষর দিয়ে, তালহ, আর বড় বড় শহরের মুসহাফে এভাবেই লেখা। এরপর তিনি বর্ণনা করেন, আলী ইবন আবী তালিব (রাঃ) পড়তেন ওয়া তাল'ইম মানদূদ, 'আইন' দিয়ে। তাল' শব্দটা কুরআন খেজুর গাছের বেলায় ব্যবহার করেছে, ২৬:১৪৮ ও ৫০:১০ আয়াতে। হাসান ইবন সা'দের সূত্রে কায়স ইবন সা'দ থেকে একটি সনদে আছে: আলীর সামনে এক লোক তালহ পড়ল। তিনি বললেন, তালহের এখানে কী কাজ? এ তো তাল' মানদূদ। তারপর তিনি পড়লেন, তাল'উহা হাদীম।"
          },
          {
            "en": "They asked him: shall we not change it? He answered: the Qur'an is not to be stirred up today, nor altered. Al-Baghawi gives the same exchange through Mujalid, with the questioner pointing out that the copy has ha'. Al-Qurtubi calls Ali's reading contrary to the mushaf and quotes al-Qushayri: he preferred it, but did not see fit to put it in the mushaf against the script that had been agreed. Al-Qurtubi also gives Abu Bakr al-Anbari's chain, where Qays is named Qays ibn 'Ubad and the narrator Mujalid is unsure whether Qays recited it or heard it recited.",
            "bn": "লোকেরা জিজ্ঞেস করল, আমরা কি তা বদলে দেব না? তিনি জবাব দিলেন, কুরআনকে আজ নাড়াচাড়া করা হবে না, বদলানোও হবে না। বাগাভী মুজালিদের সূত্রে একই কথোপকথন আনেন। সেখানে প্রশ্নকারী মনে করিয়ে দেন, মুসহাফে তো 'হা' দিয়ে লেখা। কুরতুবী আলীর পাঠকে মুসহাফের বিপরীত বলেছেন। তিনি কুশাইরীর কথা উদ্ধৃত করেন: আলী এ পাঠ পছন্দ করেছিলেন, কিন্তু সর্বসম্মত লিপির বিরুদ্ধে গিয়ে তা মুসহাফে বসানো উচিত মনে করেননি। কুরতুবী আবু বকর আল-আনবারীর সনদও দেন। সেখানে কায়সের পুরো নাম কায়স ইবন উবাদ। আর বর্ণনাকারী মুজালিদ নিশ্চিত নন, কায়স নিজে পড়েছিলেন নাকি অন্য কেউ পড়ছিল।"
          },
          {
            "en": "Abu Bakr al-Anbari, as al-Qurtubi reports him, reads the answer differently from al-Qushayri: Ali returned to what is in the mushaf, knew it to be right, and let go of what he had said in haste. Ibn Kathir brings the report through Ibn Abi Hatim from an unnamed shaykh of Hamdan, and notes that on this reading the phrase would describe the sidr, thornless, with its tal' full of fruit. Al-Jawhari, he adds, counts talh as a dialect form of tal'. None of these sources grades the reports, and this article adds no grading.",
            "bn": "কুরতুবীর বর্ণনায় আবু বকর আল-আনবারী জবাবটা কুশাইরীর চেয়ে ভিন্নভাবে বোঝেন। তাঁর মতে আলী মুসহাফে যা আছে, সেদিকেই ফিরে গিয়েছিলেন। বুঝেছিলেন সেটাই সঠিক, আর তাড়াহুড়ায় যা বলে ফেলেছিলেন, তা ছেড়ে দিয়েছিলেন। ইবন কাসীর বর্ণনাটা আনেন ইবন আবী হাতিমের সূত্রে, হামদানের এক অনামা শায়খ থেকে। তিনি বলেন, এ পাঠ ধরলে কথাটা হবে সিদর গাছেরই বর্ণনা: কাঁটাহীন, আর তার তাল' ফলে ভরা। তিনি আরও জানান, জাওহারীর মতে তালহ হলো তাল' শব্দের একটা আঞ্চলিক রূপ। এ সূত্রগুলোর কোনোটি বর্ণনাগুলোর মান নির্ণয় করেনি, এ লেখাও কোনো মান যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shade of Wajj",
          "bn": "ওয়াজ্জের সেই ছায়া"
        },
        "p": [
          {
            "en": "Mujahid's gloss comes with a reason. At-Tabari reports him twice, once explaining talh as your bananas and once explaining mandud as heaped up, and both times he adds that they used to admire Wajj and its shade from its talh and its sidr. Ibn Kathir reads this as Quraysh being reminded, because they admired Wajj and its shade of talh and sidr. The texts consulted here name Wajj as a place and do not describe it further, so neither does this article.",
            "bn": "মুজাহিদের ব্যাখ্যার সঙ্গে একটা কারণও আছে। তাবারী তাঁর কথা দুবার এনেছেন। একবার তালহের ব্যাখ্যায়, তোমাদের কলা। আরেকবার মানদূদের ব্যাখ্যায়, স্তূপ করা। দুবারই তিনি যোগ করেছেন, তারা ওয়াজ্জ আর তার তালহ ও সিদর গাছের ছায়া দেখে মুগ্ধ হতো। ইবন কাসীর এর অর্থ করেছেন এভাবে: এ দিয়ে কুরাইশকে মনে করিয়ে দেওয়া হচ্ছে, কারণ ওয়াজ্জ আর তার তালহ ও সিদরের ছায়া তাদের মুগ্ধ করত। সংগৃহীত পাঠগুলো ওয়াজ্জকে একটা জায়গার নাম হিসেবেই উল্লেখ করে, এর বেশি কিছু বলে না। এ লেখাও তাই বেশি কিছু বলছে না।"
          },
          {
            "en": "This sits well with az-Zajjaj's remark that the hearers were promised what they loved, something like it, raised as far above it as Paradise is above this world. Sidr and talh stand side by side in 56:28 and 56:29, as they stand side by side in Mujahid's Wajj. Whether the talh is the banana or the desert tree, the promise is spoken in trees the first hearers knew, and then made better than anything they had known.",
            "bn": "যাজ্জাজের কথার সঙ্গে এটা ভালোভাবে মেলে: শ্রোতাদের যা প্রিয় ছিল, তার মতো জিনিসের প্রতিশ্রুতি দেওয়া হয়েছে, তবে জান্নাত যতখানি দুনিয়ার উপরে, ততখানি উপরে তুলে। ৫৬:২৮ ও ৫৬:২৯ আয়াতে সিদর আর তালহ পাশাপাশি দাঁড়িয়ে, যেমন পাশাপাশি দাঁড়িয়ে মুজাহিদের ওয়াজ্জে। তালহ কলা হোক বা মরুর গাছ, প্রতিশ্রুতিটা এসেছে প্রথম শ্রোতাদের চেনা গাছের ভাষায়। তারপর সেই গাছকে বানানো হয়েছে তাদের জানা যেকোনো কিছুর চেয়ে উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "Left for Neighbouring Verses",
          "bn": "পাশের আয়াতগুলোর জন্য রেখে দেওয়া"
        },
        "p": [
          {
            "en": "No hadith with a collector's grading is attached to this verse in the texts consulted for it. Ibn Kathir's English abridgment, under the neighbouring verse on the sidr, relates a report that a bedouin asked about the talh and its thorns, with an answer that each thorn becomes a fruit; but the text consulted here names no collection and gives no grading, so it is not quoted here. No occasion of revelation is given for the verse either.",
            "bn": "এ আয়াতের জন্য যেসব পাঠ সংগ্রহ করা হয়েছে, তাতে এর সঙ্গে এমন কোনো হাদিস নেই, যার মান সংকলক জানিয়েছেন। ইবন কাসীরের ইংরেজি সংক্ষেপে পাশের সিদরের আয়াতের আলোচনায় একটা বর্ণনা আছে। সেখানে এক বেদুইন তালহ আর তার কাঁটা নিয়ে প্রশ্ন করেন, আর উত্তরে বলা হয় প্রতিটি কাঁটার জায়গায় ফল হবে। কিন্তু সংগৃহীত পাঠে কোনো সংকলনের নাম নেই, মানও উল্লেখ নেই। তাই সেটি এখানে উদ্ধৃত করা হয়নি। আয়াতটির কোনো শানে নুযূলও পাঠগুলোতে আসেনি।"
          },
          {
            "en": "What follows, shade spread wide, water poured out, abundant fruit neither cut off nor forbidden, and raised couches, belongs to 56:30 to 56:34 and to their own study. Read with 56:28, this verse gives the companions of the right a garden of known trees made perfect: thorns taken away, fruit packed close. The commentators did not agree on which tree the talh is. Through every gloss of mandud, they did agree that it is full.",
            "bn": "এরপর আসছে বিস্তৃত ছায়া, প্রবাহিত পানি, অফুরন্ত ও অবারিত প্রচুর ফল, আর উঁচু বিছানা। সেগুলো ৫৬:৩০ থেকে ৫৬:৩৪ আয়াতের বিষয়, তাদের নিজস্ব আলোচনায় আসবে। ৫৬:২৮ আয়াতের সঙ্গে মিলিয়ে পড়লে এ আয়াত ডান দিকের লোকদের দেয় চেনা গাছের এক নিখুঁত বাগান: কাঁটা সরানো, ফল ঠাসা। তালহ ঠিক কোন গাছ, তা নিয়ে তাফসীরকারেরা একমত হননি। কিন্তু মানদূদের প্রতিটি ব্যাখ্যায় তাঁরা এক কথায় মিলেছেন: গাছটা ভরা।"
          }
        ]
      }
    ]
  },
  "56:35": {
    "sections": [
      {
        "h": {
          "en": "A Pronoun Without a Name",
          "bn": "নামহীন এক সর্বনাম"
        },
        "p": [
          {
            "en": "Inna ansha'nahunna insha'a: indeed, We have produced them, a producing. The Arabic has three words, and the third is the verbal noun of the second, so the verb is followed by its own noun. The verse sits inside al-Waqi'ah's account of the companions of the right. Before it come extended shade, poured water and abundant fruit that is neither cut off nor forbidden, and then, at 56:34, furush marfu'a, raised furnishings. After it, 56:36 to 56:38 carry the same \"them\" forward, describing them further and saying whom they are for.",
            "bn": "ইন্না আনশা'নাহুন্না ইনশা'আ: নিশ্চয়ই আমি তাদের সৃষ্টি করেছি, এক বিশেষ সৃষ্টি। আরবিতে শব্দ মাত্র তিনটি। তৃতীয় শব্দটি দ্বিতীয়টিরই ক্রিয়াবাচক বিশেষ্য, অর্থাৎ ক্রিয়ার পরে বসেছে তার নিজেরই মূল শব্দ। আয়াতটি সূরা ওয়াকিয়ার সেই অংশে, যেখানে ডান দিকের লোকদের কথা চলছে। এর আগে এসেছে বিস্তৃত ছায়া, বয়ে চলা পানি, আর এমন প্রচুর ফল যা ফুরায় না, নিষিদ্ধও হয় না। তারপর ৫৬:৩৪ আয়াতে ফুরুশ মারফূ'আ, উঁচু বিছানা। এর পরে ৫৬:৩৬ থেকে ৫৬:৩৮ আয়াত একই \"তাদের\" কথা টেনে নিয়ে যায়, তাদের আরও বর্ণনা দেয় এবং জানায় তারা কাদের জন্য।"
          },
          {
            "en": "The pronoun is the puzzle. The suffix -hunna is feminine plural, \"them\" for a group of women, yet no group of women has been named in the verses just before. Who are they? The commentators consulted for this verse give more than one answer, and they also differ over where the pronoun finds what it points back to. This article sets out each answer with the names that carry it. It does not pick one, because the sources consulted here do not agree on one, and the verse itself leaves its \"them\" unnamed.",
            "bn": "ধাঁধাটা সর্বনামে। হুন্না প্রত্যয়টি স্ত্রীলিঙ্গ বহুবচন, অর্থাৎ একদল নারীকে বোঝাতে \"তাদের\"। অথচ ঠিক আগের আয়াতগুলোতে কোনো নারীদলের নাম আসেনি। তাহলে এরা কারা? এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো একাধিক উত্তর দেয়। সর্বনামটি পেছনের কোন শব্দের দিকে ফিরছে, তা নিয়েও তাদের মত আলাদা। এ লেখায় প্রতিটি উত্তর তার প্রবক্তাদের নামসহ তুলে ধরা হবে। কোনো একটিকে বেছে নেওয়া হবে না। কারণ সংগৃহীত উৎসগুলো এক উত্তরে একমত নয়, আর আয়াত নিজেও তার \"তাদের\" নাম বলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Glossing the Verb Insha'",
          "bn": "ইনশা ক্রিয়ার ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse as: We created them a creation and brought them into being. He reports from Qatada the plain wording, We created them a creation, and adds that the people of interpretation said the same. Al-Qurtubi pairs two verbs: We created them a creation and originated them an origination, using ibda', the word for bringing something about without a prior model. Ma'arif al-Qur'an begins more simply, saying only that insha' means to create. The abridged English Ibn Kathir renders the phrase as a special creation.",
            "bn": "তাবারী আয়াতের অর্থ করেন এভাবে: আমি তাদের সৃষ্টি করেছি এবং অস্তিত্বে এনেছি। কাতাদা থেকে তিনি সরল কথাটি বর্ণনা করেন: আমি তাদের সৃষ্টি করেছি। সঙ্গে জানান, ব্যাখ্যাকারেরা এ কথাই বলেছেন। কুরতুবী পাশাপাশি দুটি ক্রিয়া আনেন: আমি তাদের সৃষ্টি করেছি এবং নতুনভাবে উদ্ভাবন করেছি। এখানে তিনি ইবদা শব্দ ব্যবহার করেন, যার মানে আগের কোনো নমুনা ছাড়াই কিছু বানানো। মাআরিফুল কুরআন শুরু করে আরও সহজে, শুধু বলে যে ইনশা মানে সৃষ্টি করা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ শব্দগুচ্ছটির অনুবাদ করেছে এক বিশেষ সৃষ্টি।"
          },
          {
            "en": "Al-Baghawi calls it khalqan jadidan, a new creation. Al-Muyassar and as-Sa'di use almost the same sentence: Allah produced the women of the people of Paradise in a coming-into-being other than the one they had in this world, a complete one that does not admit of perishing. Al-Muyassar's note is grouped over 56:35 to 56:38, so its wording covers the following verses too. None of the commentators consulted here stops to explain why the verbal noun is added after the verb, so this article offers no reason on their behalf.",
            "bn": "বাগাভী একে বলেন খালকান জাদীদান, নতুন সৃষ্টি। মুয়াসসার আর সা'দী প্রায় একই বাক্য ব্যবহার করেন। তাঁদের ভাষায়, আল্লাহ জান্নাতবাসীদের নারীদের এমনভাবে গড়েছেন যা দুনিয়ায় তাদের প্রথম গড়ন থেকে ভিন্ন। সে গড়ন পূর্ণাঙ্গ, তাতে বিনাশের কোনো সুযোগ নেই। মুয়াসসারের টীকাটি ৫৬:৩৫ থেকে ৫৬:৩৮ আয়াত একসঙ্গে ধরে লেখা, তাই এর কথা পরের আয়াতগুলোকেও ছুঁয়ে যায়। ক্রিয়ার পরে তার মূল শব্দটি কেন আবার এল, সংগৃহীত কোনো তাফসীর তা ব্যাখ্যা করেনি। তাই এ লেখাও তাঁদের হয়ে কোনো কারণ দাঁড় করাচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Pronoun Looks Back",
          "bn": "সর্বনাম ফেরে কোন দিকে"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both report two grammarians. Al-Akhfash said the pronoun stands for women who had not been mentioned before it. Abu 'Ubayda said they had been mentioned, in wa hurun 'in, ka-amthal al-lu'lu' al-maknun, the wide-eyed companions likened to hidden pearls at 56:22 and 56:23. Ibn Kathir then gives his own account: the pronoun runs to something unnamed, but the context, the mention of furush, points to the women who rest upon them, so naming them was unnecessary. He compares 38:31 and 38:32, where the sun is understood though never named.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই দুই ব্যাকরণবিদের মত উদ্ধৃত করেন। আখফাশ বলেছেন, সর্বনামটি এমন নারীদের বোঝায় যাদের কথা আগে আসেনি। আবু উবায়দা বলেছেন, তাদের কথা আগেই এসেছে: ওয়া হূরুন ঈন, কা-আমসালিল লু'লুইল মাকনূন। অর্থাৎ ৫৬:২২ ও ৫৬:২৩ আয়াতে বর্ণিত ডাগর চোখের সঙ্গিনীরা, যাদের তুলনা লুকানো মুক্তার সঙ্গে। এরপর ইবন কাসীর নিজের ব্যাখ্যা দেন। সর্বনামটি এমন কিছুর দিকে ফিরেছে যার নাম আসেনি। তবে প্রসঙ্গ, অর্থাৎ ফুরুশের উল্লেখ, সেই নারীদের দিকেই ইঙ্গিত করে যারা তাতে থাকবে। তাই নাম বলার দরকার পড়েনি। তুলনা হিসেবে তিনি আনেন ৩৮:৩১ ও ৩৮:৩২ আয়াত, যেখানে সূর্যের নাম না এলেও সূর্যই বোঝানো হয়েছে।"
          },
          {
            "en": "Al-Qurtubi goes a step further. The Arabs, he notes, call a woman firash, libas and izar, and Allah says hunna libasun lakum, they are a garment for you, at 2:187. On this reading the furush of 56:34 may themselves be a figure for women. He gives two reasons the pronoun can stand without an earlier noun: the women are already included among the companions of the right, and furush is a figure for them. Ma'arif al-Qur'an likewise says that if firash means the women of Paradise, the antecedent is obvious.",
            "bn": "কুরতুবী আরেক ধাপ এগিয়ে যান। তিনি জানান, আরবরা নারীকে ফিরাশ, লিবাস ও ইযার বলে ডাকে। আল্লাহও ২:১৮৭ আয়াতে বলেছেন, হুন্না লিবাসুল লাকুম: তারা তোমাদের পোশাক। এ পাঠে ৫৬:৩৪ আয়াতের ফুরুশ শব্দটি নিজেই নারীদের রূপক হতে পারে। আগের কোনো বিশেষ্য ছাড়াই সর্বনাম কেন বসতে পারে, তার দুটি কারণ তিনি দেখান। প্রথমত, নারীরা আগেই ডান দিকের লোকদের মধ্যে শামিল। দ্বিতীয়ত, ফুরুশ তাদেরই রূপক। মাআরিফুল কুরআনও বলে, ফিরাশ বলতে যদি জান্নাতের নারীদের বোঝানো হয়, তাহলে সর্বনামের উদ্দিষ্ট শব্দটি স্পষ্ট।"
          },
          {
            "en": "The two readings of furush differ in a small but real way. In the abridged English Ibn Kathir, the furush of 56:34 are couches, high, soft and comfortable, and the women are those upon them, implied by them. In al-Qurtubi's figure, the furush may be the women. Ma'arif al-Qur'an keeps both doors open: the women were mentioned at a distance, in 56:22 and 56:23, and even if firash means beds, the talk of couches and comforts gives the pronoun its setting. Which way 56:34 is read belongs to that verse; here it only frames the question.",
            "bn": "ফুরুশের এ দুই পাঠে পার্থক্য ছোট, কিন্তু সত্যিকারের। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ৫৬:৩৪ আয়াতের ফুরুশ হলো উঁচু, নরম ও আরামদায়ক বিছানা। নারীরা সেখানে বিছানার উপরের মানুষ, বিছানার উল্লেখ থেকেই যাদের বোঝা যায়। কুরতুবীর রূপকে ফুরুশ নিজেই নারী হতে পারে। মাআরিফুল কুরআন দুই পথই খোলা রাখে। নারীদের কথা এসেছে কিছুটা আগে, ৫৬:২২ ও ৫৬:২৩ আয়াতে। আর ফিরাশ মানে বিছানা হলেও বিছানা ও আরাম-আয়েশের কথা সর্বনামকে তার প্রেক্ষাপট দিয়ে দেয়। ৫৬:৩৪ কীভাবে পড়া হবে, সে আলোচনা সেই আয়াতের। এখানে তা শুধু প্রশ্নটির পটভূমি।"
          }
        ]
      },
      {
        "h": {
          "en": "Made Without Being Born",
          "bn": "জন্ম ছাড়াই যাদের গড়া"
        },
        "p": [
          {
            "en": "The first answer reads \"them\" as al-hur al-'in. Al-Qurtubi states it directly: on this reading they are the hur 'in, meaning We created them without birth. Abu 'Ubayda's antecedent points the same way, back to the hur of 56:22. Ma'arif al-Qur'an includes this sense too: the houris are created without being born biologically. On this reading insha' is a making with no earlier life behind it, since those described were never born into this world. The two words of 56:22 and the readings of them are taken up in that verse's own article.",
            "bn": "প্রথম উত্তরে \"তাদের\" মানে আল-হূরুল ঈন। কুরতুবী তা সরাসরি বলেন: এ পাঠে তারা হূর ঈন, অর্থাৎ আমি তাদের জন্ম ছাড়াই সৃষ্টি করেছি। আবু উবায়দার দেখানো উদ্দিষ্ট শব্দও একই দিকে যায়, ৫৬:২২ আয়াতের হূরের দিকে। মাআরিফুল কুরআনেও এ অর্থ আছে: হূরদের সৃষ্টি জৈবিক জন্ম ছাড়াই। এ পাঠে ইনশা এমন এক সৃষ্টি, যার পেছনে আগের কোনো জীবন নেই। কারণ যাদের কথা বলা হচ্ছে, তারা কখনো এ দুনিয়ায় জন্ম নেয়নি। ৫৬:২২ আয়াতের দুটি শব্দ ও তার বিভিন্ন পাঠ নিয়ে আলোচনা আছে সেই আয়াতের নিজস্ব লেখায়।"
          },
          {
            "en": "Both translations on this site fill the gap with a bracket, and brackets belong to the translator, not to the Arabic. The Bengali reads \"that is, those hur\", which takes the side of this first answer. The English reads \"the women of Paradise\", a wider phrase that Ma'arif al-Qur'an also uses as its umbrella term, yet it still supplies a referent the verse itself leaves unspoken. The English \"[new] creation\" is a bracket as well, close to al-Baghawi's khalqan jadidan. A reader should know the brackets choose where the verse does not.",
            "bn": "এ সাইটের দুই অনুবাদই ফাঁকটা বন্ধনী দিয়ে পূরণ করেছে। বন্ধনীর কথা অনুবাদকের, আরবি পাঠের নয়। বাংলায় লেখা আছে \"অর্থাৎ ঐ হুরদেরকে\"। এটি প্রথম উত্তরের পক্ষ নেয়। ইংরেজিতে আছে \"জান্নাতের নারীরা\"। কথাটা আরও প্রশস্ত, মাআরিফুল কুরআনও সব অর্থ মিলিয়ে এ শব্দই ব্যবহার করে। তবু আয়াত যাদের নাম মুখে আনেনি, এ বন্ধনী তাদের একটা পরিচয় জুড়ে দেয়। ইংরেজির \"[নতুন] সৃষ্টি\" কথাটিও বন্ধনী, যা বাগাভীর খালকান জাদীদানের কাছাকাছি। পাঠকের জানা দরকার, আয়াত যেখানে বেছে নেয়নি, বন্ধনী সেখানে বেছে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Back From Old Age",
          "bn": "বার্ধক্য থেকে ফিরিয়ে আনা"
        },
        "p": [
          {
            "en": "The second answer reads \"them\" as the believing women of this world. Al-Qurtubi gives it under another \"it is said\": the women of the children of Adam, created a new creation, and that new creation is a return; We brought them back to the state of youth and complete beauty. He adds that the old woman and the young girl are made in a single making. Al-Baghawi reports Ibn 'Abbas: these are the human women, the old and grey, whom Allah creates after decrepitude in another creation.",
            "bn": "দ্বিতীয় উত্তরে \"তাদের\" মানে এ দুনিয়ার ঈমানদার নারীরা। কুরতুবী এটিও আনেন \"বলা হয়েছে\" দিয়ে। তাঁর ভাষায়, এরা আদম সন্তানদের নারী। তাদের নতুন করে সৃষ্টি করা হবে, আর সে নতুন সৃষ্টি আসলে ফিরিয়ে আনা। আল্লাহ তাদের ফিরিয়ে দেবেন যৌবন আর পূর্ণ সৌন্দর্যের অবস্থায়। তিনি আরও বলেন, বৃদ্ধা আর কিশোরী, দুজনকেই গড়া হবে একই রকম করে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: এরা মানুষের ঘরের নারী, বয়সের ভারে নুয়ে পড়া, চুল পাকা। জরাগ্রস্ত হওয়ার পর আল্লাহ তাদের আরেক সৃষ্টিতে গড়বেন।"
          },
          {
            "en": "Ibn Kathir's own gloss follows the same line. After reporting al-Akhfash and Abu 'Ubayda, he explains inna ansha'nahunna as: We brought them back in the final coming-into-being, after they had been old women with tired, watering eyes. The abridged English puts it as: in the other life, after they became old in this life, they were brought back. Al-Muyassar and as-Sa'di speak of a coming-into-being other than the one these women had in this world, so their wording also assumes an earlier life here. What 56:36 and 56:37 then add belongs to those verses.",
            "bn": "ইবন কাসীরের নিজের ব্যাখ্যাও এ পথেই চলে। আখফাশ ও আবু উবায়দার মত উল্লেখ করার পর তিনি ইন্না আনশা'নাহুন্নার অর্থ করেন এভাবে: দুনিয়ায় তারা ছিল বৃদ্ধা, চোখ ক্লান্ত আর পানি-ঝরা, তারপর পরকালের সৃষ্টিতে আমি তাদের ফিরিয়ে এনেছি। সংক্ষিপ্ত ইংরেজি সংস্করণের ভাষায়: এ জীবনে বুড়ো হয়ে যাওয়ার পর পরকালে তাদের ফিরিয়ে আনা হয়েছে। মুয়াসসার ও সা'দী বলেন এমন এক গড়নের কথা, যা দুনিয়ায় এই নারীদের গড়ন থেকে আলাদা। তাই তাঁদের কথাও ধরে নেয়, দুনিয়ায় এই নারীদের আগের একটা জীবন ছিল। ৫৬:৩৬ ও ৫৬:৩৭ আয়াত এরপর যা যোগ করে, তা সেই আয়াতগুলোর আলোচনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Leans Which Way",
          "bn": "কে কোন দিকে ঝোঁকেন"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an does not choose between the two; it holds them together. Its paraphrase reads: Allah has created the women of Paradise in a special way, the houris created without being born, and the women of this world who enter Paradise reshaped, so that those who were old or unlovely here are made young, beautiful and graceful. That is a ranking of sorts, the ranking of one source, which takes both answers as true at once. Al-Qurtubi, by contrast, lists the two answers one after the other, each opened with \"it is said\", and does not weigh them.",
            "bn": "মাআরিফুল কুরআন দুটির মধ্যে একটিকে বেছে নেয় না, বরং দুটিকে একসঙ্গে রাখে। তার ব্যাখ্যা অনুযায়ী আল্লাহ জান্নাতের নারীদের গড়েছেন বিশেষভাবে। হূরদের সৃষ্টি জন্ম ছাড়াই। আর দুনিয়ার যে নারীরা জান্নাতে যাবেন, তাদের নতুন করে গড়া হবে। এখানে যারা বৃদ্ধা ছিলেন বা যাদের রূপ ছিল না, তারা সেখানে হবেন তরুণী, সুন্দরী ও লাবণ্যময়ী। এটাও এক রকম বিচার, তবে একটি উৎসের বিচার, যা দুই উত্তরকেই একসঙ্গে সত্য ধরে। অন্যদিকে কুরতুবী দুই উত্তর পরপর সাজান, প্রত্যেকটি \"বলা হয়েছে\" দিয়ে শুরু করেন, আর কোনোটিকে প্রাধান্য দেন না।"
          },
          {
            "en": "Ibn Kathir, as seen above, glosses the verse with the restoration of women who grew old, while still reporting Abu 'Ubayda's pointer back to the hur. At-Tabari, in the text consulted here, records both grammarians and the plain gloss, and does not set one answer above the other in words. So the disagreement stands as the sources leave it. On one reading the verse speaks of beings made for the Garden; on the other it speaks of women who lived, aged and believed in this world. Neither reading is weakened by the other's existence.",
            "bn": "ইবন কাসীর, ওপরে যেমন দেখা গেল, আয়াতের ব্যাখ্যা করেন বৃদ্ধ হয়ে যাওয়া নারীদের ফিরিয়ে আনার অর্থে। তবে হূরের দিকে আবু উবায়দার ইঙ্গিতটিও তিনি উদ্ধৃত করেন। এখানে সংগৃহীত লেখায় তাবারী দুই ব্যাকরণবিদের মত আর সরল ব্যাখ্যাটি লিখে রাখেন। কোনো উত্তরকে অন্যটির ওপরে তিনি স্পষ্ট কথায় স্থান দেন না। তাই মতভেদটি উৎসগুলো যেভাবে রেখেছে, সেভাবেই থাকছে। এক পাঠে আয়াত বলছে জান্নাতের জন্য গড়া সৃষ্টির কথা। অন্য পাঠে বলছে এমন নারীদের কথা, যারা এ দুনিয়ায় বেঁচেছেন, বুড়ো হয়েছেন, ঈমান এনেছেন। একটি পাঠ আছে বলে অন্যটি দুর্বল হয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Narrations and Their Weight",
          "bn": "বর্ণনা ও তার ওজন"
        },
        "p": [
          {
            "en": "The narration most cited for the second answer comes from Anas, and the commentators trace it to at-Tirmidhi. It is in his Jami' as number 3296, on the page consulted for this article. At-Tirmidhi himself calls it gharib, says it is known as the Prophet's word only through Musa ibn 'Ubayda, and states that Musa ibn 'Ubayda and Yazid ibn Aban ar-Raqashi are weakened in hadith. Ibn Kathir reports the same verdict. Since the collector himself weakens it, this article names it for its grading and does not build on its wording.",
            "bn": "দ্বিতীয় উত্তরের পক্ষে সবচেয়ে বেশি উদ্ধৃত বর্ণনাটি আনাস (রাঃ) থেকে, আর তাফসীরকারেরা একে তিরমিযীর বরাতে আনেন। এ লেখার জন্য যে পাতা সংগ্রহ করা হয়েছে, তাতে বর্ণনাটি তাঁর জামি গ্রন্থে ৩২৯৬ নম্বরে আছে। তিরমিযী নিজেই একে গরীব বলেছেন। তিনি জানান, নবী ﷺ-এর কথা হিসেবে এটি শুধু মূসা ইবন উবায়দার সূত্রেই জানা যায়। তিনি আরও বলেন, মূসা ইবন উবায়দা ও ইয়াযীদ ইবন আবান রাকাশী হাদিসে দুর্বল বলে গণ্য। ইবন কাসীরও একই রায় উদ্ধৃত করেন। সংকলক নিজেই যেহেতু একে দুর্বল বলেছেন, এ লেখা শুধু এর মান জানিয়ে নামটুকু উল্লেখ করছে, এর ভাষার ওপর কিছু দাঁড় করাচ্ছে না।"
          },
          {
            "en": "Another report, about an old woman, reaches al-Baghawi and Ibn Kathir through at-Tirmidhi. It is in his ash-Shama'il as number 239, in these words: al-Hasan al-Basri said, \"An old woman came to the Prophet and said: 'O Messenger of Allah, beseech Allah to let me enter the Garden!' He replied: 'O Mother of So-and-so, no old woman will enter the Garden!' She turned away weeping, so he said: 'Tell her that she will not enter it as an old woman, for Allah says: We have created them a new creation, and made them virgins, loving, equal in age.'\"",
            "bn": "দ্বিতীয় বর্ণনাটি এক বৃদ্ধার ঘটনা, যা বাগাভী ও ইবন কাসীর তিরমিযীর সূত্রে আনেন। তাঁর শামায়েল গ্রন্থে এটি ২৩৯ নম্বরে আছে, এই ভাষায়: হাসান বসরী বলেন, এক বৃদ্ধা নবী ﷺ-এর কাছে এসে বললেন, \"হে আল্লাহর রাসূল, আল্লাহর কাছে দোয়া করুন, তিনি যেন আমাকে জান্নাতে প্রবেশ করান।\" তিনি বললেন, \"হে অমুকের মা, কোনো বৃদ্ধা জান্নাতে প্রবেশ করবে না।\" বৃদ্ধা কাঁদতে কাঁদতে ফিরে চললেন। তখন তিনি বললেন, \"তাঁকে জানিয়ে দাও, তিনি বৃদ্ধা অবস্থায় সেখানে প্রবেশ করবেন না। কেননা আল্লাহ বলেন: আমি তাদের সৃষ্টি করেছি নতুন সৃষ্টিতে, আর তাদের করেছি কুমারী, প্রেমময়ী, সমবয়সী।\""
          },
          {
            "en": "The page shows no grading from at-Tirmidhi, and the chain ends with al-Hasan al-Basri, who does not say which Companion told him; al-Baghawi and Ibn Kathir carry it by the same route. It is given here as the collection gives it, and no stronger. Other reports could not be confirmed on a consulted page: Umm Salama's questions, which Ibn Kathir takes from at-Tabarani and al-Qurtubi gives without a chain; the report of Salama ibn Yazid in at-Tabari and Ibn Kathir; and al-Bayhaqi's report from 'A'isha cited by Ma'arif al-Qur'an. They are named, not quoted.",
            "bn": "পাতায় তিরমিযীর কোনো মান-নির্ণয় দেখা যায় না। আর সনদ থেমে গেছে হাসান বসরীতে, কোন সাহাবী তাঁকে বলেছেন তা তিনি জানাননি। বাগাভী ও ইবন কাসীরও একই পথে বর্ণনাটি এনেছেন। তাই সংকলনে যেভাবে আছে, এখানে ঠিক সেভাবেই দেওয়া হলো, তার চেয়ে মজবুত করে নয়। আরও কিছু বর্ণনা সংগৃহীত কোনো পাতায় যাচাই করা যায়নি। যেমন উম্মে সালামা (রাঃ)-এর প্রশ্নগুলো, যা ইবন কাসীর তাবারানী থেকে নিয়েছেন আর কুরতুবী সনদ ছাড়া এনেছেন। তাবারী ও ইবন কাসীরে সালামা ইবন ইয়াযীদের বর্ণনা। আর মাআরিফুল কুরআনে উদ্ধৃত আয়েশা (রাঃ) থেকে বায়হাকীর বর্ণনা। এগুলোর শুধু নাম বলা হলো, উদ্ধৃতি দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Age Cannot Keep",
          "bn": "বয়স যা আটকে রাখতে পারে না"
        },
        "p": [
          {
            "en": "Whichever answer a reader holds, the verb is Allah's, and the making it names is, in the words of al-Muyassar and as-Sa'di, complete and not open to perishing. That is the plain gift of the verse for anyone who has watched a mother or grandmother grow frail. Decline is real here; it is not final there. The verse says this in three words and moves on, and the commentators consulted for it speak of these women with the same brevity. A reader does well to keep that restraint, and to speak of them with dignity.",
            "bn": "পাঠক যে উত্তরই গ্রহণ করুন, সৃষ্টির কাজটা আল্লাহর। আর সে সৃষ্টি, মুয়াসসার ও সা'দীর ভাষায়, পূর্ণাঙ্গ, তাতে বিনাশ নেই। যিনি নিজের মা বা নানিকে দিনে দিনে দুর্বল হতে দেখেছেন, তাঁর জন্য আয়াতের সোজা উপহার এটাই। এখানে ক্ষয় সত্য, কিন্তু সেখানে তা শেষ কথা নয়। আয়াত কথাটি বলে মাত্র তিনটি শব্দে, তারপর এগিয়ে যায়। সংগৃহীত তাফসীরগুলোও এই নারীদের কথা বলে একই রকম সংযমে। পাঠকের জন্যও ভালো হলো এই সংযম ধরে রাখা, আর তাঁদের কথা মর্যাদার সঙ্গে বলা।"
          },
          {
            "en": "There is also a duty in it. If old age is not the last word in the Garden, it should not be treated as the last word here either. The old among us are not finished people, and the fear that age disqualifies a person, the fear the old woman of the Shama'il voiced through her tears, deserves a gentle answer. The next verses, 56:36 to 56:38, go on to say more about these women and whom they are for: the companions of the right. Being among them is the work of this life, while there is time.",
            "bn": "এর মধ্যে একটা দায়িত্বও আছে। জান্নাতে বার্ধক্য যদি শেষ কথা না হয়, এখানেও তাকে শেষ কথা ভাবা উচিত নয়। আমাদের মাঝের বয়স্ক মানুষেরা ফুরিয়ে যাওয়া মানুষ নন। বয়স হলে বুঝি সব শেষ, এই ভয় শামায়েলের সেই বৃদ্ধা কাঁদতে কাঁদতে প্রকাশ করেছিলেন। এমন ভয়ের জবাব হওয়া উচিত কোমল। পরের আয়াতগুলো, ৫৬:৩৬ থেকে ৫৬:৩৮, এই নারীদের সম্পর্কে আরও বলে, আর জানায় তারা কাদের জন্য: ডান দিকের লোকদের জন্য। তাদের দলে শামিল হওয়ার কাজ এ জীবনেই, যতক্ষণ সময় আছে।"
          }
        ]
      }
    ]
  },
  "56:37": {
    "sections": [
      {
        "h": {
          "en": "Two Words to Finish a Portrait",
          "bn": "দুই শব্দে ছবিটা পূর্ণ"
        },
        "p": [
          {
            "en": "'Uruban atraba: devoted, of equal age. The verse is two words, both descriptions, and both continue a sentence already under way. At 56:35 Allah says He produced \"them\" in a new making, and at 56:36 that He made them abkar, virgins. Here two more descriptions are added, and 56:38 then says for whom: li-ashab al-yamin, for the companions of the right. Al-Muyassar, whose note is grouped over 56:35 to 56:38, reads the four verses as one sentence about the women of the people of Paradise: loving towards their husbands, of one age, created for the companions of the right.",
            "bn": "উরুবান আতরাবা: স্বামীর প্রতি অনুরক্তা, সমবয়সী। আয়াতটি মাত্র দুই শব্দের, দুটিই গুণবাচক, আর দুটিই আগে থেকে চলে আসা একটি বাক্যকে এগিয়ে নেয়। ৫৬:৩৫ আয়াতে আল্লাহ বলেন, তিনি \"তাদের\" গড়েছেন নতুন গড়নে। ৫৬:৩৬ আয়াতে বলেন, তাদের করেছেন আবকার, কুমারী। এখানে আরও দুটি গুণ যোগ হয়। তারপর ৫৬:৩৮ আয়াত জানায় কাদের জন্য: লি-আসহাবিল ইয়ামীন, ডান দিকের লোকদের জন্য। মুয়াসসারের ব্যাখ্যা ৫৬:৩৫ থেকে ৫৬:৩৮ পর্যন্ত একসঙ্গে। চারটি আয়াতকে সেটি পড়ে জান্নাতবাসীদের নারীদের নিয়ে একটি বাক্য হিসেবে: স্বামীর প্রতি ভালোবাসাময়, একই বয়সের, ডান দিকের লোকদের জন্য সৃষ্ট।"
          },
          {
            "en": "Who \"them\" are is the question of 56:35, and that verse's article sets out the answers with their names; this one does not repeat them. One sentence from as-Sa'di belongs here, because he says it while explaining these words: the generality of the description includes both al-hur al-'in and the women of this world, and being 'urub and atrab stays with them in every state. The English bracket \"[to their husbands]\" is the translator's addition, though it matches what nearly every gloss below supplies. What follows takes the two words in turn.",
            "bn": "\"তাদের\" বলতে কারা, সে প্রশ্ন ৫৬:৩৫ আয়াতের। সে আয়াতের লেখায় উত্তরগুলো নামসহ সাজানো আছে, এখানে আর তা দোহরানো হবে না। তবে সা'দীর একটি বাক্য এখানেই আসে, কারণ এই দুই শব্দের ব্যাখ্যা করতে গিয়েই তিনি কথাটা বলেন। তাঁর মতে এ বর্ণনার ব্যাপকতায় হূরুল ঈন আর দুনিয়ার নারী, দুই দলই পড়ে। আর উরুব ও আতরাব হওয়ার গুণ সব অবস্থায় তাদের সঙ্গে থাকে। এ সাইটের ইংরেজি অনুবাদে \"to their husbands\" কথাটি বন্ধনীতে আছে, অর্থাৎ সেটি অনুবাদকের সংযোজন। তবে নিচের প্রায় সব ব্যাখ্যাই ঠিক এ কথাটাই যোগ করে। এবার শব্দ দুটি একে একে দেখা যাক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Love Made Plain",
          "bn": "যে ভালোবাসা প্রকাশ পায়"
        },
        "p": [
          {
            "en": "'Urub is a plural. At-Tabari, al-Qurtubi and al-Baghawi all give its singular as 'arub, and at-Tabari compares the pattern to rusul from rasul. His own gloss gathers several qualities into one line: virgins who are ghanijat, of a playful charm, mutahabbibat ila azwajihinna, showing love to their husbands, and who are good in their companionship as wives, yuhsinna at-taba''ul. He adds that the people of interpretation said the same, and then lists them one by one, each with a chain.",
            "bn": "উরুব বহুবচন। তাবারী, কুরতুবী ও বাগাভী তিনজনই এর একবচন বলেন আরূব। তাবারী গঠনটি মিলিয়ে দেখান রাসূল থেকে রুসুলের সঙ্গে। তাঁর নিজের ব্যাখ্যা একটি লাইনে কয়েকটি গুণ জড়ো করে। তারা কুমারী, গানিজাত, অর্থাৎ মিষ্টি চপলতায় ভরা। তারা মুতাহাব্বিবাত ইলা আযওয়াজিহিন্না, স্বামীর কাছে নিজের ভালোবাসা প্রকাশ করে। আর তারা ইউহসিন্নাত তাবাউল, স্ত্রী হিসেবে সঙ্গ দেয় সুন্দরভাবে। তিনি আরও বলেন, ব্যাখ্যাকারেরা এ কথাই বলেছেন। তারপর একে একে তাঁদের নাম আনেন, প্রত্যেকের সনদসহ।"
          },
          {
            "en": "Al-Qurtubi offers a derivation. The word comes, he says, from a'raba, to make plain, so the 'arub is one who makes her love for her husband plain, through her manner, her charm and the beauty of her speech. He and at-Tabari both cite a line of the poet Labid as evidence that 'arub was an Arabic word for such a woman, and the line pairs it with ghayru fahisha, not coarse, not indecent. Tamim ibn Hadhlam, in at-Tabari, adds that the Arabs used to say of a woman who was a good companion to her husband: she is truly 'ariba.",
            "bn": "কুরতুবী শব্দের উৎসও দেখান। তাঁর মতে এটি এসেছে আ'রাবা থেকে, যার অর্থ স্পষ্ট করা। তাই আরূব সেই নারী, যে স্বামীর প্রতি ভালোবাসা স্পষ্ট করে তোলে আচরণে, মাধুর্যে আর সুন্দর কথায়। আরূব যে আরবি ভাষায় এমন নারীরই নাম ছিল, তার প্রমাণে কুরতুবী ও তাবারী দুজনেই কবি লাবীদের একটি পঙক্তি উদ্ধৃত করেন। সে পঙক্তিতে শব্দটির পাশে বসেছে গাইরু ফাহিশা: রুচিহীন নয়, অশালীন নয়। তাবারীর বর্ণনায় তামীম ইবন হাযলাম আরও জানান, যে নারী স্বামীর সুন্দর সঙ্গী, আরবরা তার সম্পর্কে বলত: সে সত্যিই আরিবা।"
          }
        ]
      },
      {
        "h": {
          "en": "Glosses From the First Generations",
          "bn": "প্রথম প্রজন্মের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Ibn 'Abbas is reported by several routes, and they do not all use the same word. In at-Tabari, one route has him say 'awashiq, women deeply in love; another, al-mutahabbibat al-mutawaddidat, those who show love and warmth to their husbands; another, through 'Ikrima, al-malaqa, one gentle and endearing in her manner; and another, through Sa'id ibn Jubayr, that al-'arab is longing. In Ibn Kathir, Sa'id ibn Jubayr's route gives women who make themselves beloved to their husbands. The words differ, but each describes affection turned towards the husband.",
            "bn": "ইবন আব্বাস (রাঃ) থেকে কয়েকটি সূত্রে বর্ণনা এসেছে, আর সব সূত্রে শব্দ এক নয়। তাবারীতে একটি সূত্রে তিনি বলেন আওয়াশিক, গভীর ভালোবাসায় ডুবে থাকা নারী। আরেক সূত্রে আল-মুতাহাব্বিবাত আল-মুতাওয়াদ্দিদাত, যারা স্বামীর প্রতি ভালোবাসা আর উষ্ণতা প্রকাশ করে। ইকরিমার সূত্রে আল-মালাকা, যার আচরণ কোমল ও আদুরে। আর সাঈদ ইবন জুবায়রের সূত্রে: আল-আরাব মানে আকুলতা। ইবন কাসীরে সাঈদ ইবন জুবায়রের সূত্রে আছে, তারা নিজেদের স্বামীর প্রিয় করে তোলে। শব্দগুলো আলাদা, কিন্তু প্রতিটিই স্বামীর দিকে ফেরানো মমতার কথা বলে।"
          },
          {
            "en": "The Successors widen the range. 'Ikrima, by more than one route, says ghanija, playful in charm. Abu Burayda, in at-Tabari, adds a note on dialect: shakila is the Meccan word for it and ghanija the Medinan. Tamim ibn Hadhlam says husn at-taba''ul, good companionship in marriage. Zayd ibn Aslam, through his son, says hasanat al-kalam, fine in speech, and al-Qurtubi reports the same from Zayd. Qatada says they love their husbands with an intense love. Al-Baghawi credits 'awashiq mutahabbibat to al-Hasan, Mujahid, Qatada and Sa'id ibn Jubayr.",
            "bn": "তাবিঈদের হাতে পরিসর আরও বাড়ে। ইকরিমা একাধিক সূত্রে বলেন গানিজা, মিষ্টি চপলতায় ভরা। তাবারীতে আবু বুরায়দা ভাষার একটি তথ্য যোগ করেন: মক্কার ভাষায় একে বলে শাকিলা, মদীনার ভাষায় গানিজা। তামীম ইবন হাযলাম বলেন হুসনুত তাবাউল, দাম্পত্যে সুন্দর সঙ্গ। যায়দ ইবন আসলাম তাঁর ছেলের সূত্রে বলেন হাসানাতুল কালাম, যাদের কথা সুন্দর। কুরতুবীও যায়দ থেকে একই কথা আনেন। কাতাদা বলেন, তারা স্বামীকে ভালোবাসে গভীর ভালোবাসায়। বাগাভী আওয়াশিক মুতাহাব্বিবাত অর্থটির কৃতিত্ব দেন হাসান, মুজাহিদ, কাতাদা ও সাঈদ ইবন জুবায়রকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Love Returned in Kind",
          "bn": "ভালোবাসার জবাব ভালোবাসা"
        },
        "p": [
          {
            "en": "One phrase in Ibn Kathir deserves attention. Through ad-Dahhak, Ibn 'Abbas says the 'urub are women devoted to their husbands, wa azwajuhunna lahunna 'ashiqun: and their husbands are devoted to them. Ibn Kathir then lists those who said the like: 'Abd Allah ibn Sarjis, Mujahid, 'Ikrima, Abu al-'Aliya, Yahya ibn Abi Kathir, 'Atiyya, al-Hasan, Qatada, ad-Dahhak and others. Ma'arif al-Qur'an, in English, keeps both sides as well: a woman who loves her husband passionately and is his beloved. The love the word names is a love that is answered.",
            "bn": "ইবন কাসীরের একটি বাক্য আলাদা করে খেয়াল করার মতো। দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) বলেন, উরুব হলো স্বামীর প্রতি অনুরক্ত নারী, ওয়া আযওয়াজুহুন্না লাহুন্না আশিকূন: আর তাদের স্বামীরাও তাদের প্রতি অনুরক্ত। এরপর ইবন কাসীর জানান, আরও অনেকে এমন বলেছেন: আব্দুল্লাহ ইবন সারজিস, মুজাহিদ, ইকরিমা, আবুল আলিয়া, ইয়াহইয়া ইবন আবী কাসীর, আতিয়্যা, হাসান, কাতাদা, দাহহাক প্রমুখ। মাআরিফুল কুরআনের ইংরেজি পাঠেও দুই দিকই আছে: যে নারী স্বামীকে গভীরভাবে ভালোবাসে, আর নিজেও স্বামীর প্রিয়। শব্দটি যে ভালোবাসার নাম, সে ভালোবাসার জবাবও আসে।"
          },
          {
            "en": "That shapes how the verse is heard. The qualities the glosses gather are speech, warmth, good companionship and longing, things that belong to a person and to a marriage. Labid's line, as both commentators cite it, ties the word to a woman who is not coarse. As-Sa'di says that when such a woman speaks, the listener wishes her words would not end, and that her refinement and bearing fill her husband's heart with joy and gladness. Read this way, 'urub honours the women it describes. It does not reduce them, and a reader should not either.",
            "bn": "এতে আয়াতটি শোনার ভঙ্গিও বদলে যায়। ব্যাখ্যাগুলো যে গুণগুলো জড়ো করে, সেগুলো হলো কথা, উষ্ণতা, সুন্দর সঙ্গ আর আকুলতা। এগুলো একজন মানুষের গুণ, একটি দাম্পত্যের গুণ। লাবীদের পঙক্তি, দুই তাফসীরকার যেভাবে উদ্ধৃত করেন, শব্দটিকে জুড়ে দেয় রুচিশীল নারীর সঙ্গে। সা'দী বলেন, এমন নারী কথা বললে শ্রোতা চায় তার কথা যেন শেষ না হয়। আর তার শিষ্টতা ও চালচলন স্বামীর মন ভরিয়ে দেয় আনন্দে। এভাবে পড়লে উরুব শব্দটি যাদের বর্ণনা দেয়, তাদের সম্মানিত করে। তাদের ছোট করে না, পাঠকেরও ছোট করা উচিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "'Urub or 'Urb",
          "bn": "উরুব না উরব"
        },
        "p": [
          {
            "en": "The word is read two ways. At-Tabari reports that some readers of Medina and Kufa read 'urub, with a damma on both the 'ayn and the ra', and some of Kufa and Basra read 'urb, with the ra' lightened, which he calls the dialect of Tamim and Bakr. He prefers the fuller form, because the word is the plural of 'arub, and a singular on the pattern fa'ul, fa'il or fa'al takes the plural fu'ul, masculine or feminine alike. He still allows the lightened form as permissible.",
            "bn": "শব্দটি দুইভাবে পড়া হয়। তাবারী জানান, মদীনা ও কূফার কিছু কারী পড়েন উরুব, আইন আর রা দুই অক্ষরেই পেশ দিয়ে। আর কূফা ও বসরার কিছু কারী পড়েন উরব, রা হালকা করে। এটিকে তিনি বলেন তামীম ও বকর গোত্রের ভাষা। তিনি পূর্ণ রূপটিকেই অগ্রাধিকার দেন। কারণ শব্দটি আরূবের বহুবচন, আর ফাঊল, ফাঈল বা ফাআল ওজনের একবচনের বহুবচন হয় ফুউল, পুংলিঙ্গ হোক বা স্ত্রীলিঙ্গ। তবু হালকা রূপটিকেও তিনি বৈধ বলে মেনে নেন।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi name the readers. In al-Qurtubi, Hamza and Abu Bakr from 'Asim read 'urb, the rest read 'urub, and both are permissible in the plural of fa'ul. Al-Baghawi's list adds a third name, Isma'il from Nafi', beside Hamza and Abu Bakr. The meaning does not move with the vowel; it is the same plural either way, and the glosses above apply to both. The difference is one of pronunciation, carried by named readers, and all three commentators who discuss it record both forms without faulting either.",
            "bn": "কুরতুবী ও বাগাভী কারীদের নামও বলেন। কুরতুবীর বর্ণনায় হামযা এবং আসিম থেকে আবু বকর পড়েন উরব, বাকিরা উরুব। তাঁর মতে ফাঊলের বহুবচনে দুটিই বৈধ। বাগাভী হামযা ও আবু বকরের পাশে তৃতীয় একটি নাম যোগ করেন: নাফি' থেকে ইসমাঈল। স্বরচিহ্ন বদলালেও অর্থ বদলায় না। দুই রূপেই একই বহুবচন, আর ওপরের ব্যাখ্যাগুলো দুটির বেলায়ই খাটে। পার্থক্যটা উচ্চারণের, যা নির্দিষ্ট কারীদের নামে বর্ণিত। যে তিন তাফসীরকার বিষয়টি আলোচনা করেন, তাঁরা তিনজনই দুই রূপ লিখে রাখেন, কোনোটিকে ভুল বলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Matched in Their Years",
          "bn": "বয়সে সমান সমান"
        },
        "p": [
          {
            "en": "Atrab is the plural of tirb, and at-Tabari explains the pair like shabah and ashbah: they are level, of a single age. He reports Ibn 'Abbas, through 'Atiyya, saying al-mustawiyat, the level ones; Mujahid, amthal, alike; Qatada, one age; and ad-Dahhak the same as Ibn 'Abbas. Ibn Kathir has 'Atiyya say aqran, peers. Al-Qurtubi notes the usage: of women one says atrab, of men aqran. Ma'arif al-Qur'an gives the picture held inside the word: a tirb is one of equal age who played in the dust with a companion.",
            "bn": "আতরাব হলো তিরবের বহুবচন। তাবারী জোড়াটিকে বোঝান শাবাহ ও আশবাহের মতো করে: তারা সমান, একই বয়সের। তিনি আতিয়্যার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: আল-মুস্তাওয়িয়াত, যারা সমান। মুজাহিদ বলেন আমসাল, একে অন্যের মতো। কাতাদা বলেন, একই বয়স। দাহহাকও ইবন আব্বাসের (রাঃ) মতোই বলেন। ইবন কাসীরে আতিয়্যা বলেন আকরান, সমকক্ষ। কুরতুবী শব্দের ব্যবহারটা দেখান: নারীদের বেলায় বলা হয় আতরাব, পুরুষদের বেলায় আকরান। মাআরিফুল কুরআন শব্দের ভেতরের ছবিটা দেখায়: তিরব সেই সমবয়সী, যে সঙ্গীর সঙ্গে ধুলোয় খেলে বড় হয়েছে।"
          },
          {
            "en": "Several sources name an age. Ibn Kathir reports from ad-Dahhak, from Ibn 'Abbas, one age, thirty-three years, and al-Qurtubi and as-Sa'di give the same number; as-Sa'di calls it the furthest a person hopes for and the last of youth. Al-Qurtubi adds that the Arabs inclined to a woman past girlhood and short of old age. Ma'arif al-Qur'an, citing Mazhari, applies the matching to both: men and women will be made of equal ages, about thirty-three by some narrations. Al-Baghawi brings narrations on the age of the people of Paradise through his own chains, which this article could not confirm in a collection.",
            "bn": "কয়েকটি উৎস বয়সটাও বলে দেয়। ইবন কাসীর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: একই বয়স, তেত্রিশ বছর। কুরতুবী ও সা'দীও একই সংখ্যা বলেন। সা'দীর ভাষায় এটাই মানুষের কামনার শেষ সীমা, যৌবনের শেষ প্রান্ত। কুরতুবী আরও বলেন, আরবরা পছন্দ করত সেই নারীকে, যে কৈশোর পেরিয়েছে কিন্তু বার্ধক্যে পৌঁছায়নি। মাআরিফুল কুরআন মাযহারীর বরাতে এ সমতা দুই দলের বেলায়ই খাটায়: নারী-পুরুষ সবাইকে করা হবে সমবয়সী, কিছু বর্ণনা মতে তেত্রিশের কাছাকাছি। জান্নাতবাসীদের বয়স নিয়ে বাগাভী নিজের সনদে কিছু বর্ণনা আনেন। এ লেখা কোনো সংকলনে সেগুলো যাচাই করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Sisters Without Rivalry",
          "bn": "রেষারেষিহীন বোনেরা"
        },
        "p": [
          {
            "en": "As-Suddi reads atrab another way, and Ibn Kathir and al-Qurtubi both report him: equal in character. In Ibn Kathir's wording, they are like sisters among themselves, with no hatred and no envy between them, not as co-wives were in this world, rivals at odds with one another. Al-Hasan and Muhammad, in a report Ibn Kathir takes from Ibn Abi Hatim, hold the two senses together: of level ages, they get on with one another and play together. Equal years and equal hearts sit side by side in these readings.",
            "bn": "সুদ্দী আতরাবের আরেকটি অর্থ করেন, আর ইবন কাসীর ও কুরতুবী দুজনেই তা উদ্ধৃত করেন: স্বভাবে সমান। ইবন কাসীরের ভাষায়, তারা নিজেদের মধ্যে বোনের মতো। তাদের মধ্যে বিদ্বেষ নেই, হিংসা নেই। দুনিয়ায় সতিনেরা যেমন একে অন্যের প্রতিদ্বন্দ্বী আর শত্রু হয়ে থাকত, তেমন নয়। ইবন কাসীর ইবন আবী হাতিম থেকে হাসান ও মুহাম্মাদের একটি কথা আনেন, যেখানে দুই অর্থ একসঙ্গে আছে: বয়সে তারা সমান, তারা মিলেমিশে থাকে, একসঙ্গে খেলে। এসব ব্যাখ্যায় সমান বয়স আর মিলে যাওয়া মন পাশাপাশি বসে।"
          },
          {
            "en": "As-Sa'di closes his comment in the same key. Their women, he says, are 'urub and atrab: in accord and at one with each other, content and pleasing, neither grieving nor bringing grief, the joy of souls and the delight of eyes. The contrast is drawn by the commentators themselves: the envy and rivalry that can wound a household here have no place there. Nothing here is a verdict on any wife or household living now; the sources speak of what the Garden removes, not of whom to blame.",
            "bn": "সা'দীও তাঁর আলোচনা শেষ করেন একই সুরে। তাঁর ভাষায়, তাদের নারীরা উরুব ও আতরাব। তারা পরস্পরের সঙ্গে একমত, একে অন্যের আপন। তারা নিজেরা সন্তুষ্ট, অন্যকেও সন্তুষ্ট রাখে। নিজেরা দুঃখ পায় না, কাউকে দুঃখও দেয় না। তারা প্রাণের আনন্দ, চোখের শীতলতা। তুলনাটা তাফসীরকারেরা নিজেরাই টেনেছেন: যে হিংসা আর রেষারেষি এখানে একটা সংসারকে ক্ষতবিক্ষত করতে পারে, সেখানে তার কোনো জায়গা নেই। এটা আজকের কোনো স্ত্রী বা কোনো সংসারের বিরুদ্ধে রায় নয়। উৎসগুলো বলছে জান্নাত কী সরিয়ে দেয় তার কথা, কাকে দোষ দিতে হবে তার কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Placed Beside the Words",
          "bn": "শব্দ দুটির পাশে রাখা বর্ণনা"
        },
        "p": [
          {
            "en": "None of the commentators consulted attaches to these two words a hadith that could be confirmed as sound. Ibn Kathir places here one report from at-Tirmidhi about al-hur al-'in, found in his Jami' as number 2564. 'Ali narrates that the Messenger of Allah ﷺ said: \"In the Garden there is a gathering of al-hur al-'in, who raise voices the like of which creation has never heard. They say: We are the everlasting, who do not perish; we are the ones at ease, who know no hardship; we are the content, who are never displeased. Blessed is the one who is ours and whose we are.\"",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এই দুই শব্দের সঙ্গে এমন হাদিস জোড়ে না, যাকে সহীহ বলে নিশ্চিত করা গেছে। ইবন কাসীর এখানে তিরমিযী থেকে হূরুল ঈন সম্পর্কে একটি বর্ণনা রাখেন, যা তাঁর জামি গ্রন্থে ২৫৬৪ নম্বরে আছে। আলী (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: \"জান্নাতে হূরুল ঈনের একটি সমাবেশ আছে। সেখানে তারা এমন কণ্ঠে আওয়াজ তোলে, যার মতো কণ্ঠ সৃষ্টিজগৎ কখনো শোনেনি। তারা বলে: আমরা চিরস্থায়ী, আমাদের বিনাশ নেই। আমরা সুখে আছি, আমাদের কোনো কষ্ট নেই। আমরা সন্তুষ্ট, আমরা কখনো অসন্তুষ্ট হই না। সুসংবাদ তার জন্য, যে আমাদের আর আমরা যার।\""
          },
          {
            "en": "At-Tirmidhi calls the report gharib, and Ibn Kathir passes on that verdict; it is given here with that grading and no more. Other reports could not be confirmed in a collection: Umm Salama's question about this verse, which at-Tabari carries with his own chain; Ibn Kathir's report from Abu Ya'la, from Anas, of the hur singing; and the saying, carried by Ibn Kathir from Ibn Abi Hatim and by al-Qurtubi, that 'urub means their speech is Arabic. They are named, not quoted. The old woman's report in ash-Shama'il ends by reciting this verse; it is set out with 56:35.",
            "bn": "তিরমিযী বর্ণনাটিকে গরীব বলেছেন, ইবন কাসীরও সে রায় উদ্ধৃত করেন। এখানে বর্ণনাটি সেই মান নিয়েই দেওয়া হলো, তার বেশি নয়। আরও কিছু বর্ণনা কোনো সংকলনে যাচাই করা যায়নি। যেমন এ আয়াত নিয়ে উম্মে সালামা (রাঃ)-এর প্রশ্ন, যা তাবারী নিজের সনদে আনেন। আনাস (রাঃ) থেকে আবু ইয়া'লার সূত্রে হূরদের গানের বর্ণনা, যা ইবন কাসীর আনেন। আর ইবন কাসীর ইবন আবী হাতিম থেকে এবং কুরতুবী যে কথা আনেন: উরুব মানে তাদের ভাষা আরবি। এগুলোর শুধু নাম বলা হলো, উদ্ধৃতি দেওয়া হলো না। শামায়েলের বৃদ্ধার বর্ণনাটি শেষ হয় এ আয়াত তিলাওয়াত করে, তার আলোচনা ৫৬:৩৫ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Household Built on Warmth",
          "bn": "উষ্ণতায় গড়া সংসার"
        },
        "p": [
          {
            "en": "The verse describes the Garden, and it keeps the description brief: two words, and then the sentence moves on to the companions of the right. The commentators, for all their range, keep returning to a few ideas: love shown, love returned, good companionship, gentle speech, equals without envy. These are qualities of character. Each of them is something believers can practise in a household now, between spouses and among all who share a roof. The promise is not a reason to neglect them here; it is a picture of where they lead.",
            "bn": "আয়াতটি জান্নাতের বর্ণনা দেয়, আর বর্ণনাটা রাখে সংক্ষিপ্ত। মাত্র দুটি শব্দ, তারপরই বাক্য চলে যায় ডান দিকের লোকদের কথায়। তাফসীরকারদের ব্যাখ্যা যত বিস্তৃতই হোক, তাঁরা ঘুরেফিরে কয়েকটি কথায় ফেরেন। ভালোবাসা প্রকাশ করা, ভালোবাসার জবাব পাওয়া, সুন্দর সঙ্গ, কোমল কথা, হিংসাহীন সমতা। এগুলো চরিত্রের গুণ। প্রতিটিই ঈমানদারেরা আজ ঘরে চর্চা করতে পারেন, স্বামী-স্ত্রীর মধ্যে, আর এক ছাদের নিচে যারা থাকে তাদের সবার মধ্যে। প্রতিশ্রুতিটা এগুলো এখানে অবহেলা করার অজুহাত নয়। বরং এগুলো কোথায় নিয়ে যায়, তারই ছবি।"
          },
          {
            "en": "Speaking of the women of Paradise also calls for the restraint the Qur'an shows. The verse is for the companions of the right, at 56:38. Ma'arif al-Qur'an reads its matching of ages as including men and women alike, and as-Sa'di's reading takes in the believing women of this world. On those readings, believing women are not onlookers to this promise but among those to whom it is made. A reader honours the verse by speaking of it with dignity, and by working, while there is time, to be among those for whom it is prepared.",
            "bn": "জান্নাতের নারীদের কথা বলতে গেলে সেই সংযমও দরকার, যা কুরআন নিজে দেখায়। ৫৬:৩৮ আয়াত বলে, এ সবই ডান দিকের লোকদের জন্য। মাআরিফুল কুরআন বয়সের এ সমতায় নারী-পুরুষ দুজনকেই ধরে। আর সা'দীর ব্যাখ্যায় দুনিয়ার ঈমানদার নারীরাও এর মধ্যে আছেন। এই পাঠ অনুযায়ী ঈমানদার নারীরা এ প্রতিশ্রুতির দর্শক নন, বরং তাঁরাও তাদের মধ্যে, যাদের এ প্রতিশ্রুতি দেওয়া হয়েছে। পাঠক আয়াতটির সম্মান রাখেন মর্যাদার সঙ্গে এর কথা বলে। আর সময় থাকতেই চেষ্টা করেন, যেন তিনিও তাদের একজন হন, যাদের জন্য এসব প্রস্তুত।"
          }
        ]
      }
    ]
  },
  "56:41": {
    "sections": [
      {
        "h": {
          "en": "The Account Turns Left",
          "bn": "বর্ণনা এবার বাম দিকে"
        },
        "p": [
          {
            "en": "Wa-ashabu sh-shimali ma ashabu sh-shimal: and the companions of the left, what are the companions of the left? The verse has five Arabic words, and the name is said twice. It comes straight after 56:39 and 56:40, which close the account of the companions of the right with a company from the earlier peoples and a company from the later. Ibn Kathir places it with a single connecting clause: having mentioned the state of the companions of the right, Allah followed them with mention of the companions of the left.",
            "bn": "ওয়া আসহাবুশ শিমালি মা আসহাবুশ শিমাল: আর বাম দিকের দল, কেমন সেই বাম দিকের দল? আরবিতে আয়াতটি পাঁচ শব্দের, আর তার মধ্যে নামটি এসেছে দুবার। এর ঠিক আগে ৫৬:৩৯ ও ৫৬:৪০ আয়াতে ডান দিকের দলের বর্ণনা শেষ হয়েছে এভাবে: তাদের একদল পূর্ববর্তীদের মধ্য থেকে, আরেকদল পরবর্তীদের মধ্য থেকে। ইবন কাসীর আয়াতটির জায়গা চিনিয়ে দেন একটিমাত্র যোগসূত্রে। তাঁর কথায়, ডান দিকের দলের অবস্থা বলার পর আল্লাহ তার সঙ্গে জুড়ে দিলেন বাম দিকের দলের কথা।"
          },
          {
            "en": "That clause sets the frame for this article. The right-hand group was introduced at 56:27, and the verses after it describe their shade, water and fruit. The present verse opens the matching account of the other side, and the description itself runs from 56:42 onward. The article stays with the five words: the name, the people it covers, and the question that follows the name. What these people suffer, and why, belongs to the verses that come next, and those verses are only pointed to here.",
            "bn": "এই যোগসূত্রই এ লেখার কাঠামো ঠিক করে দেয়। ডান দিকের দলের কথা শুরু হয়েছিল ৫৬:২৭ আয়াতে। তার পরের আয়াতগুলোতে এসেছে তাদের ছায়া, পানি আর ফলের বর্ণনা। এ আয়াত দিয়ে শুরু হয় অপর পক্ষের কথা, আর মূল বর্ণনা চলে ৫৬:৪২ থেকে সামনে। আমরা থাকব এই পাঁচ শব্দের ভেতরেই: নামটা কী, কাদের কথা বলছে, আর নামের পরে যে প্রশ্ন আসে তার মানে কী। তারা কী ভোগ করবে আর কেন, সে কথা পরের আয়াতগুলোর। এখানে শুধু সেদিকে ইশারা করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hand or a Road",
          "bn": "হাত, নাকি পথ"
        },
        "p": [
          {
            "en": "Why are they called the companions of the left? The commentaries consulted for this verse give two explanations. Al-Qurtubi begins by saying that Allah here mentions the stations of the people of the Fire, and that He named them companions of the left because they take their books with their left hands. On his reading the name comes from the hand: the left is the side by which each of them receives his book, and the name stays with them because of it.",
            "bn": "তাদের বাম দিকের দল বলা হলো কেন? এ আয়াতের যে তাফসীরগুলো আনা হয়েছে, তাতে দুটি ব্যাখ্যা পাওয়া যায়। কুরতুবী শুরুতেই বলেন, আল্লাহ এখানে জাহান্নামবাসীদের ঠিকানার কথা তুলছেন। আর তাদের নাম রেখেছেন বাম দিকের দল, কারণ তারা নিজেদের কিতাব নেবে বাম হাতে। তাঁর ব্যাখ্যায় নামটা এসেছে হাত থেকে। প্রত্যেকে নিজের কিতাব হাতে পায় বাম দিক দিয়ে, আর সেই কারণেই নামটা তাদের সঙ্গে জুড়ে থাকে।"
          },
          {
            "en": "At-Tabari explains the name by a direction of travel. The companions of the left, he says, are those who are taken along the left-hand side, from the place where the reckoning is held to the Fire. In his wording the left is a road rather than a hand. People stand for the reckoning, and then one group is led away on the left-hand path, and the path ends in the Fire. The name describes the way they are taken.",
            "bn": "তাবারী নামটা বোঝান চলার দিক দিয়ে। তাঁর কথায়, বাম দিকের দল তারাই, যাদের হিসাবের জায়গা থেকে বাম পাশের পথ ধরে জাহান্নামের দিকে নিয়ে যাওয়া হবে। তাঁর ভাষায় বাম মানে হাত নয়, পথ। মানুষ দাঁড়াবে হিসাবের জন্য। তারপর একটি দলকে বাম দিকের রাস্তায় নিয়ে যাওয়া হবে, আর সে রাস্তা গিয়ে থামবে আগুনে। নামটা আসলে তাদের নিয়ে যাওয়ার পথের বর্ণনা।"
          },
          {
            "en": "The two explanations sit side by side, and neither commentator, in the note consulted here, argues against the other. One reads the left as the hand that receives the book; the other reads it as the direction in which the group is led. Both end in the same place, since al-Qurtubi speaks of the stations of the people of the Fire and at-Tabari of the road to it. This article keeps both and does not choose between them, and it adds no further explanation that these notes do not give.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি থাকে। এখানে আনা তাফসীরে দুজনের কেউ অন্যজনের কথা খণ্ডন করেননি। একজনের কাছে বাম মানে সেই হাত, যে হাতে কিতাব আসে। অন্যজনের কাছে বাম মানে সেই দিক, যেদিকে দলটিকে নিয়ে যাওয়া হয়। দুটো ব্যাখ্যাই থামে এক জায়গায়। কুরতুবী বলেন জাহান্নামবাসীদের ঠিকানার কথা, তাবারী বলেন সেখানে যাওয়ার পথের কথা। এ লেখা দুটোই রাখছে, কোনোটিকে বেছে নিচ্ছে না। আর এই তাফসীরগুলোতে নেই এমন কোনো ব্যাখ্যাও যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "People of Ill-Omened Deeds",
          "bn": "অশুভ আমলের মানুষ"
        },
        "p": [
          {
            "en": "As-Sa'di does not explain where the name comes from. He says who is meant: the companions of the left are the people of the Fire, and of ill-omened deeds. The first half agrees with the other two commentators, both of whom place this group in the Fire. The second half adds something of its own. In as-Sa'di's gloss the group is defined by what it did, not only by where it ends up, so that the name is tied to deeds as well as to a destination.",
            "bn": "নামটা কোথা থেকে এল, সা'দী তা ব্যাখ্যা করেন না। তিনি বলেন কাদের কথা হচ্ছে: বাম দিকের দল হলো জাহান্নামবাসী, অশুভ আমলের লোক। কথার প্রথম অংশ বাকি দুজনের সঙ্গে মেলে, তাঁরাও এই দলকে আগুনেই রাখেন। দ্বিতীয় অংশে সা'দী নিজের একটা কথা যোগ করেন। তাঁর ব্যাখ্যায় দলটির পরিচয় শুধু শেষ ঠিকানা দিয়ে নয়, তাদের করা কাজ দিয়েও। নামটা তাই বাঁধা থাকে গন্তব্যের সঙ্গে, আমলের সঙ্গেও।"
          },
          {
            "en": "Earlier in the surah, at 56:9, a group was named with a different Arabic word, al-mash'ama. The notes consulted for the present verse do not draw a line between that name and this one, and none of them refers back to 56:9. So this article does not join the two, and leaves that question to the commentary on the earlier verse. What the notes here do say is enough for the present verse: a group in the Fire, named by a hand or a road, and marked by its deeds.",
            "bn": "সূরার শুরুর দিকে ৫৬:৯ আয়াতে একটি দলের নাম এসেছে ভিন্ন এক আরবি শব্দে, আল-মাশআমা। এ আয়াতের জন্য আনা তাফসীরগুলো সেই নামের সঙ্গে এই নামের কোনো সম্পর্ক টানে না। তাদের কেউ ৫৬:৯ আয়াতের দিকে ফিরেও তাকায় না। তাই এ লেখা দুটি নামকে এক করছে না। সে প্রশ্ন আগের আয়াতের তাফসীরের জন্য থাকল। এ আয়াতের জন্য তাফসীরগুলো যা বলে, তা-ই যথেষ্ট: আগুনের একটি দল, যাদের নাম এসেছে হাত বা পথ থেকে, আর যাদের চিহ্ন তাদের আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name Said Twice",
          "bn": "একই নাম দুবার"
        },
        "p": [
          {
            "en": "The second half of the verse is a question built on the name: ma ashabu sh-shimal, what are the companions of the left? The name is not replaced by a pronoun; it is said again in full. Ibn Kathir's Arabic note turns the question into plainer words: what is the thing that they are in, the companions of the left? On his reading the question is not about who they are, which the name has already said, but about the condition in which they find themselves.",
            "bn": "আয়াতের দ্বিতীয় অর্ধেক নামটার উপর দাঁড়ানো এক প্রশ্ন: মা আসহাবুশ শিমাল, কেমন সেই বাম দিকের দল? নামটার জায়গায় কোনো সর্বনাম বসেনি, পুরো নামটাই আবার এসেছে। ইবন কাসীরের আরবি তাফসীর প্রশ্নটাকে সহজ কথায় খুলে বলে: বাম দিকের দল কীসের মধ্যে আছে? তাঁর পাঠে প্রশ্নটা তারা কারা তা নিয়ে নয়। সেটা তো নামেই বলা হয়ে গেছে। প্রশ্নটা তাদের অবস্থা নিয়ে, তারা কোন হালে পড়েছে তা নিয়ে।"
          },
          {
            "en": "The abridged English Ibn Kathir puts it in nearly the same way: meaning, what is the condition of those on the left. It then adds that Allah explains His own question in the words that follow, beginning with the scorching wind of 56:42. On this reading the verse is the first half of a thought that the next verses complete. Al-Baghawi's note on this verse, as consulted, only repeats the verse's own words, so no reading is taken from him here.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরও প্রায় একই কথা বলে: অর্থাৎ, বাম দিকের দলের অবস্থা কী। তারপর যোগ করে, আল্লাহ নিজেই পরের কথাগুলোতে নিজের প্রশ্নের ব্যাখ্যা দিয়েছেন, শুরু করেছেন ৫৬:৪২ আয়াতের জ্বলন্ত হাওয়া দিয়ে। এভাবে পড়লে আয়াতটি এক ভাবনার প্রথম অর্ধেক, আর বাকিটা পূর্ণ করে পরের আয়াতগুলো। বাগাভীর যে তাফসীর এ আয়াতের জন্য আনা হয়েছে, তাতে শুধু আয়াতের শব্দগুলোই আবার লেখা। তাই এখানে তাঁর নামে কোনো ব্যাখ্যা দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder, Weight and Ruin",
          "bn": "বিস্ময়, ভার আর সর্বনাশ"
        },
        "p": [
          {
            "en": "At-Tabari reads the question as wonder. Allah says it, in his words, making His Prophet Muhammad wonder at the people of the Fire. The question then asks what is theirs and what has been prepared for them. He supports this with a report through his own chain, Bishr from Yazid from Sa'id, reaching Qatada, who glossed the verse with the same words: what is theirs, and what has been prepared for them. On this reading the question looks ahead to what awaits them.",
            "bn": "তাবারী প্রশ্নটাকে পড়েন বিস্ময় হিসেবে। তাঁর ভাষায়, আল্লাহ কথাটা বলছেন তাঁর নবী মুহাম্মাদ ﷺ-কে জাহান্নামবাসীদের ব্যাপারে বিস্মিত করতে। প্রশ্নটার মানে তখন দাঁড়ায়: তাদের জন্য কী আছে, তাদের জন্য কী তৈরি রাখা হয়েছে? এর পক্ষে তিনি নিজের সনদে একটি বর্ণনা আনেন। বিশর থেকে ইয়াযীদ, ইয়াযীদ থেকে সাঈদ, আর সাঈদ থেকে কাতাদা। কাতাদা আয়াতের ব্যাখ্যায় হুবহু এ কথাই বলেছেন: তাদের জন্য কী আছে, আর কী তৈরি রাখা হয়েছে। এ পাঠে প্রশ্নটা তাকিয়ে আছে সামনে, তাদের জন্য যা অপেক্ষা করছে সেদিকে।"
          },
          {
            "en": "Al-Qurtubi gives the question a different weight. Having named them, he says, Allah made the mention of them grave in affliction and punishment, and then said: what are the companions of the left. For him the question magnifies what is about to fall on them. The Muyassar turns it into an exclamation: and the companions of the left, how evil is their state, their recompense! In its wording the question already carries its own verdict, before the details arrive.",
            "bn": "কুরতুবী প্রশ্নটাকে দেন অন্য রকম ভার। তাঁর কথায়, নাম নেওয়ার পর আল্লাহ বিপদ আর শাস্তির প্রসঙ্গে তাদের উল্লেখকে ভারী করে তুললেন, তারপর বললেন: কেমন সেই বাম দিকের দল? তাঁর কাছে প্রশ্নটা তাদের উপর যা আসছে তার ভয়াবহতা বড় করে দেখায়। মুয়াসসার প্রশ্নটাকে বিস্ময়ের বাক্যে বদলে দেয়: আর বাম দিকের দল, কত মন্দ তাদের অবস্থা, তাদের প্রতিফল! এ ভাষায় খুঁটিনাটি আসার আগেই প্রশ্নটার ভেতরে রায়টা বসে আছে।"
          },
          {
            "en": "Set together, the notes stress different things. At-Tabari and Qatada stress wonder and what has been prepared; al-Qurtubi stresses the gravity of the punishment; Ibn Kathir stresses their condition; the Muyassar exclaims at how evil that condition is. None of the notes ranks one sense above another, and they do not exclude each other. The two translations on this site show the same range: the English keeps the question, what are the companions of the left, while the Bengali renders it as an exclamation at how wretched they are.",
            "bn": "সব একসঙ্গে রাখলে দেখা যায়, প্রত্যেকে জোর দিয়েছেন আলাদা জায়গায়। তাবারী আর কাতাদা জোর দেন বিস্ময়ে আর তাদের জন্য যা তৈরি রাখা হয়েছে তাতে। কুরতুবী জোর দেন শাস্তির ভয়াবহতায়। ইবন কাসীর জোর দেন তাদের অবস্থায়, আর মুয়াসসার বিস্ময় প্রকাশ করে সে অবস্থা কত মন্দ তা নিয়ে। কোনো তাফসীর একটি অর্থকে অন্যটির উপরে রাখেনি, আর অর্থগুলো একে অন্যকে বাদও দেয় না। এই সাইটের দুই অনুবাদেও একই বিস্তার দেখা যায়। ইংরেজি অনুবাদ প্রশ্নটাকে প্রশ্নই রেখেছে, আর বাংলা অনুবাদ বলেছে বিস্ময়ের সুরে: কত হতভাগ্য বামদিকের দল!"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Comes Next",
          "bn": "উত্তর আসে পরের আয়াতে"
        },
        "p": [
          {
            "en": "Two of the notes show plainly that the verse is answered by what follows it. The Muyassar's gloss covers 56:41 to 56:44 in one sentence: after its exclamation it goes straight on to a hot wind from the heat of Hell that seizes their breath, water that boils, and shade from smoke of intense blackness. Ibn Kathir in English, as noted above, says that Allah explains His statement with the words in Samum. Neither treats 56:41 as a closed sentence; both let the question run into the verses that answer it.",
            "bn": "দুটি তাফসীর স্পষ্ট দেখায়, আয়াতটির উত্তর আসে তার পরের কথায়। মুয়াসসার ৫৬:৪১ থেকে ৫৬:৪৪ পর্যন্ত একটি বাক্যে ব্যাখ্যা করে। বিস্ময়ের কথাটা বলেই সোজা চলে যায় জাহান্নামের তাপ থেকে আসা গরম হাওয়ার কথায়, যা তাদের দম আটকে দেয়। তারপর ফুটন্ত পানি, আর ঘন কালো ধোঁয়ার ছায়া। ইবন কাসীরের ইংরেজি তাফসীর, যেমন আগে বলা হলো, জানায় যে আল্লাহ নিজের কথার ব্যাখ্যা দিয়েছেন ফী সামূম শব্দ দিয়ে। দুজনের কেউই ৫৬:৪১ আয়াতকে বন্ধ বাক্য ধরেননি। দুজনেই প্রশ্নটাকে বয়ে নিয়ে গেছেন উত্তরের আয়াতগুলো পর্যন্ত।"
          },
          {
            "en": "Those verses are ground for later articles in this series. 56:42 to 56:44 name the scorching wind, the scalding water and the shade of black smoke that is neither cool nor beneficial. 56:45 and 56:46 give reasons: their indulgence in affluence before that, and their persistence in the great violation. 56:47 reports their denial of being raised again once they have become dust and bones. Each will be read in its own place. Here it is enough to see that the question of 56:41 is not left hanging.",
            "bn": "ওই আয়াতগুলো এ ধারার পরের লেখাগুলোর বিষয়। ৫৬:৪২ থেকে ৫৬:৪৪ আয়াতে আছে জ্বলন্ত হাওয়া, ফুটন্ত পানি আর কালো ধোঁয়ার ছায়ার কথা, যা শীতলও নয়, উপকারীও নয়। ৫৬:৪৫ ও ৫৬:৪৬ আয়াত কারণ জানায়: এর আগে তারা ভোগবিলাসে ডুবে ছিল, আর বড় গুনাহে অটল ছিল। ৫৬:৪৭ আয়াতে আছে তাদের অস্বীকারের কথা: মাটি আর হাড় হয়ে যাওয়ার পর আবার ওঠানো হবে, এ কথা তারা মানত না। প্রতিটি আয়াত পড়া হবে তার নিজের জায়গায়। এখানে এটুকু দেখাই যথেষ্ট যে ৫৬:৪১ আয়াতের প্রশ্ন ঝুলে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Anyone Alive",
          "bn": "জীবিত কারও বিচার নয়"
        },
        "p": [
          {
            "en": "Because this verse names a condemned group, one thing must be said plainly. The verse speaks only of what it names: a group on the Day of Reckoning, named by the left, whose end the following verses set out. It licenses nothing against any living person or community. It names no sect, nation, family or party, and no reader has warrant to place anyone alive today among the companions of the left. The commentators consulted here speak of the place of reckoning and the Fire, and none of them applies the name to a group in this world.",
            "bn": "আয়াতটি যেহেতু শাস্তিপ্রাপ্ত এক দলের নাম নেয়, একটা কথা সোজাসুজি বলা দরকার। আয়াত বর্ণনা করে কেবল তা-ই, যা আয়াতে আছে: হিসাবের দিনের এক দল, যাদের নাম বাম দিক দিয়ে, আর যাদের পরিণতি পরের আয়াতগুলো খুলে বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। কোনো মাযহাব, জাতি, পরিবার বা দলের নাম এতে নেই। আজ বেঁচে থাকা কাউকে বাম দিকের দলে বসানোর অধিকার কোনো পাঠকের নেই। এখানে আনা তাফসীরকারেরা কথা বলেন হিসাবের জায়গা আর জাহান্নাম নিয়ে। তাঁদের কেউ এ নাম দুনিয়ার কোনো দলের উপর চাপাননি।"
          },
          {
            "en": "As-Sa'di's gloss points the reader the other way, towards deeds. If the group is marked by ill-omened deeds, the fitting use of the verse is for each reader to examine their own deeds, not to sort other people into sides. Whoever reads the companions of the left and thinks first of an opponent has turned a warning addressed to every listener into a weapon aimed at someone else. That is a misuse of the verse, and nothing in the notes consulted for it supports such a reading.",
            "bn": "সা'দীর ব্যাখ্যা পাঠককে উল্টো দিকে ফেরায়, আমলের দিকে। দলটির চিহ্ন যদি অশুভ আমল হয়, তবে আয়াতের সঠিক ব্যবহার হলো নিজের আমল যাচাই করা। অন্য মানুষকে এ পক্ষে-ও পক্ষে ভাগ করা নয়। বাম দিকের দলের কথা পড়ে যার মনে প্রথমেই কোনো প্রতিপক্ষের মুখ ভাসে, সে প্রত্যেক শ্রোতার জন্য আসা সতর্কবাণীকে বানিয়ে ফেলেছে অন্যের দিকে তাক করা অস্ত্র। এটা আয়াতের অপব্যবহার। এ আয়াতের জন্য আনা তাফসীরের কোথাও এমন পাঠের পক্ষে কিছু নেই।"
          },
          {
            "en": "No hadith is attached to this verse in the notes consulted for it. At-Tabari's only report is the gloss of Qatada quoted above, which explains the meaning and is not a saying of the Prophet ﷺ. Ma'arif al-Qur'an's note for this group of verses discusses 56:39 and 56:40, and the narration it cites concerns those verses, not this one. Narrations sometimes linked with the right and the left could not be confirmed on a consulted page with their collector's grading, so they are left out.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোতে আয়াতটির সঙ্গে জোড়া কোনো হাদিস নেই। তাবারীর একমাত্র বর্ণনা কাতাদার সেই ব্যাখ্যা, যা উপরে এসেছে। সেটা অর্থের ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। মাআরিফুল কুরআন এই আয়াতগুচ্ছের আলোচনায় কথা বলে ৫৬:৩৯ ও ৫৬:৪০ আয়াত নিয়ে, আর সেখানে উদ্ধৃত বর্ণনাটি ওই আয়াতগুলোর, এ আয়াতের নয়। ডান আর বাম নিয়ে কখনো কখনো যেসব বর্ণনা আনা হয়, সংকলকের দেওয়া মানসহ সেগুলো সংগৃহীত কোনো পাতায় যাচাই করা যায়নি। তাই সেগুলো বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked While Deeds Remain",
          "bn": "আমলের সময় থাকতেই প্রশ্ন"
        },
        "p": [
          {
            "en": "The question in this verse reaches its hearers before the Day it describes. At-Tabari reads it as wonder put to the Prophet ﷺ about the people of the Fire, and the wonder travels with the verse to everyone who recites it. A question that does not wait for an answer makes the reader pause, and the pause has its use: before the description begins, there is a moment to ask which way one's own deeds are leaning, and whether that can still be changed.",
            "bn": "এ আয়াতের প্রশ্ন শ্রোতার কাছে পৌঁছায় সেই দিনের আগেই, যে দিনের কথা সে বলছে। তাবারী একে পড়েন জাহান্নামবাসীদের ব্যাপারে নবী ﷺ-এর সামনে রাখা বিস্ময় হিসেবে। আর সেই বিস্ময় আয়াতের সঙ্গে চলে আসে প্রত্যেক তিলাওয়াতকারীর কাছে। যে প্রশ্ন উত্তরের অপেক্ষা করে না, তা পাঠককে থামিয়ে দেয়। এই থামারও একটা কাজ আছে। বর্ণনা শুরুর আগে এক মুহূর্ত পাওয়া যায় নিজেকে জিজ্ঞেস করার: আমার আমল কোন দিকে ঝুঁকে আছে, আর তা এখনো বদলানো যায় কি না।"
          },
          {
            "en": "Both readings of the name leave room for that question. If the left is the hand that receives the book, the book is still being written while life lasts. If the left is the road from the place of reckoning, the steps towards it are taken now. As-Sa'di's mention of deeds makes the same point from another side. The verses just before this one described the companions of the right; the way to their side is by deeds, and the time for deeds is the present one.",
            "bn": "নামটার দুই ব্যাখ্যাই এ প্রশ্নের জায়গা রাখে। বাম মানে যদি সেই হাত হয়, যে হাতে কিতাব আসে, তবে জীবন যতদিন আছে, কিতাবের লেখা ততদিন চলছে। বাম মানে যদি হিসাবের জায়গা থেকে শুরু হওয়া পথ হয়, তবে সে পথের দিকে পা ফেলা হচ্ছে এখনই। সা'দী আমলের কথা তুলে একই কথা বলেন অন্য দিক থেকে। ঠিক আগের আয়াতগুলোতে এসেছে ডান দিকের দলের বর্ণনা। তাদের দলে পৌঁছানোর পথ আমল, আর আমলের সময় এই বর্তমানটাই।"
          }
        ]
      }
    ]
  },
  "56:47": {
    "sections": [
      {
        "h": {
          "en": "A Third Thing They Were",
          "bn": "তাদের সম্পর্কে তৃতীয় কথা"
        },
        "p": [
          {
            "en": "Wa-kanu yaquluna a-idha mitna wa-kunna turaban wa-'izaman a-inna la-mab'uthun: and they used to say, when we die and become dust and bones, are we indeed to be resurrected? The verse has nine Arabic words, and most of them are a quotation. The speakers are the companions of the left, the group whose name the surah asked about in 56:41 and whose torment 56:42 to 56:44 describe: scorching wind, scalding water and a shade of black smoke. Then three verses turn back to their life before, and each begins with the verb kanu, they were.",
            "bn": "ওয়া কানূ ইয়াকূলূনা আইযা মিতনা ওয়া কুন্না তুরাবাও ওয়া ইযামান আইন্না লামাবঊসূন: আর তারা বলত, আমরা যখন মরে যাব আর মাটি ও হাড় হয়ে যাব, তখন কি সত্যিই আমাদের আবার ওঠানো হবে? আয়াতে আরবি শব্দ নয়টি, তার বেশির ভাগই কারও মুখের উদ্ধৃতি। বক্তারা বাম দিকের দল। ৫৬:৪১ আয়াতে সূরা তাদের নাম নিয়েই প্রশ্ন তুলেছিল, আর ৫৬:৪২ থেকে ৫৬:৪৪ আয়াতে এসেছে তাদের আযাব: আগুনে হাওয়া, ফুটন্ত পানি, কালো ধোঁয়ার ছায়া। এরপর তিনটি আয়াত ফিরে যায় তাদের আগের জীবনে। তিনটিরই শুরু একই ক্রিয়া দিয়ে: কানূ, তারা ছিল।"
          },
          {
            "en": "Ibn Kathir's English abridgement introduces 56:45 with the words that Allah then stated they deserve this end. They indulged in luxury, he writes, enjoying life's pleasures and satisfying their lusts in the life of the world, all the while ignoring what the Messengers brought to them. On 56:46 he reports that the great sin in which they persisted means idolatry, according to Ibn Abbas and others; that gloss belongs to 56:46 and is left there. Then 56:47 adds a third thing about them, and this time it is something they said.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৫৬:৪৫ আয়াতের আলোচনা শুরু করে এ কথায়: এরপর আল্লাহ জানালেন, তারা এ পরিণতিরই যোগ্য। তাঁর ভাষায়, দুনিয়ার জীবনে তারা ভোগবিলাসে মজে ছিল, মজা লুটত আর কামনা মেটাত, অথচ রাসূলরা যা নিয়ে এসেছিলেন তার দিকে ফিরেও তাকাত না। ৫৬:৪৬ আয়াতে যে বড় গুনাহে তারা অটল ছিল, ইবন আব্বাস ও অন্যদের সূত্রে তিনি তার অর্থ বলেন শিরক। সে ব্যাখ্যা ৫৬:৪৬ আয়াতের, সেখানেই থাক। ৫৬:৪৭ আয়াত তাদের সম্পর্কে তৃতীয় একটি কথা যোগ করে, আর এবার সেটা তাদের মুখের কথা।"
          },
          {
            "en": "The same abridgement quotes 56:47 and 56:48 as one sentence and comments in one line: they said this while denying and rejecting the idea that resurrection will ever occur. Ibn Kathir's Arabic note on 56:47 is shorter still. They say it, he writes, mukadhdhibina bihi mustab'idina li-wuqu'ih: denying it, and deeming its occurrence far-off. Those two ideas, denial and distance, run through nearly every note consulted for this verse, and the sections below follow them one commentator at a time.",
            "bn": "একই সংক্ষিপ্ত তাফসীর ৫৬:৪৭ ও ৫৬:৪৮ আয়াতকে একটি বাক্য হিসেবে উদ্ধৃত করে, আর মন্তব্য করে এক লাইনে: পুনরুত্থান কখনো ঘটবে, এ ধারণাকে অস্বীকার ও প্রত্যাখ্যান করেই তারা কথাটা বলত। ৫৬:৪৭ আয়াতে ইবন কাসীরের আরবি টীকা আরও ছোট। তিনি লেখেন, তারা কথাটা বলে মুকাযযিবীনা বিহী মুসতাবইদীনা লিউকূইহ: একে মিথ্যা বলে, আর এর ঘটাকে দূরের অসম্ভব ব্যাপার মনে করে। অস্বীকার আর দূরত্ব, এ দুটি ধারণা এ আয়াতের জন্য আনা প্রায় সব টীকাতেই আছে। নিচের অংশগুলো একে একে তাফসীরকারদের ধরে সেগুলো দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Graves, Dust and Crumbling Bones",
          "bn": "কবর, মাটি আর ঝুরঝুরে হাড়"
        },
        "p": [
          {
            "en": "The sentence sets out the stages it doubts. Idha mitna: when we have died. Wa-kunna turaban wa-'izaman: and have become dust and bones. Then the question: a-inna la-mab'uthun, shall we indeed be raised? At-Tabari opens his note by naming the attitude behind the words. They said it, he writes, kufran minhum bil-ba'th, out of disbelief in the raising, wa-inkaran li-ihya'i Allahi khalqahu min ba'di mamatihim: and in denial that Allah gives life to His creation after their death.",
            "bn": "বাক্যটি যে ধাপগুলো নিয়ে সন্দেহ করে, সেগুলো একে একে বলে দেয়। ইযা মিতনা: যখন আমরা মরে যাব। ওয়া কুন্না তুরাবাও ওয়া ইযামা: আর মাটি ও হাড় হয়ে যাব। তারপর প্রশ্ন: আইন্না লামাবঊসূন, সত্যিই কি আমাদের ওঠানো হবে? তাবারী টীকার শুরুতেই কথার পেছনের মনোভাবটা ধরিয়ে দেন। তাঁর ভাষায়, তারা এ কথা বলত কুফরান মিনহুম বিলবাস, পুনরুত্থানে অবিশ্বাস থেকে। আর ইনকারান লিইহইয়াইল্লাহি খালকাহূ মিম বাদি মামাতিহিম: মৃত্যুর পর আল্লাহ তাঁর সৃষ্টিকে আবার জীবন দেবেন, এ কথা অস্বীকার করে।"
          },
          {
            "en": "He then restates their question in fuller words: a-idha kunna turaban fi quburina min ba'di mamatina, wa-'izaman nakhira, a-inna la-mab'uthuna minha ahya'an kama kunna qabla l-mamat? When we are dust in our graves after our death, and crumbling bones, shall we be raised from them alive, as we were before death? Two details are his: the graves, and the word nakhira, crumbling. His last phrase names exactly what they denied. It was not some vague survival, but a return to life, alive as they had been.",
            "bn": "তারপর তিনি তাদের প্রশ্নটা আরও খুলে বলেন: আইযা কুন্না তুরাবান ফী কুবূরিনা মিম বাদি মামাতিনা, ওয়া ইযামান নাখিরাহ, আইন্না লামাবঊসূনা মিনহা আহইয়াআন কামা কুন্না কাবলাল মামাত? মৃত্যুর পর আমরা যখন কবরে মাটি হয়ে যাব, হাড়গুলো হবে ঝুরঝুরে, তখন কি সেখান থেকে আমাদের জীবিত ওঠানো হবে, মৃত্যুর আগে যেমন ছিলাম তেমন? কবর আর নাখিরাহ, মানে ঝুরঝুরে, এ দুটি তাঁর যোগ করা। শেষ অংশে তিনি ঠিক কোন জিনিসটা তারা অস্বীকার করত তা বলে দেন। কোনো ঝাপসা টিকে থাকা নয়, বরং আগের মতোই জীবিত হয়ে ফেরা।"
          },
          {
            "en": "The Muyassar puts the question first: a-nub'athu idha mitna wa-sirna turaban wa-'izaman baliya? Shall we be raised when we have died and become dust and worn-out bones? Its word for the bones, baliya, means worn out and decayed. As-Sa'di uses a verb from the same root for the speakers themselves: wa-qad balina, when we have decayed. At-Tabari, the Muyassar and as-Sa'di all describe a body that has come apart, and in each of them the doubt is voiced from that point.",
            "bn": "মুয়াসসার প্রশ্নটাকে সামনে নিয়ে আসে: আনুবআসু ইযা মিতনা ওয়া সিরনা তুরাবাও ওয়া ইযামান বালিয়াহ? আমরা মরে মাটি আর জীর্ণ হাড় হয়ে গেলে কি আমাদের ওঠানো হবে? হাড়ের জন্য তার শব্দ বালিয়াহ, যার অর্থ জীর্ণ, ক্ষয়ে যাওয়া। সা'দী একই ধাতুর ক্রিয়া ব্যবহার করেন বক্তাদের নিজেদের জন্যই: ওয়া কাদ বালীনা, যখন আমরা পচে-গলে গেছি। তাবারী, মুয়াসসার আর সা'দী, তিনজনের বর্ণনাতেই দেহটা ভেঙেচুরে শেষ। সন্দেহের কথাটা উচ্চারিত হয় ঠিক সেখান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Once or Twice",
          "bn": "প্রশ্ন একবার, না দুবার"
        },
        "p": [
          {
            "en": "Al-Baghawi's note on this verse gives no gloss of its meaning. It records only how the verse is read. The sentence has two points where a question can fall: a-idha at the start, and a-inna before the word for being raised. He reports that Abu Ja'far, Nafi', al-Kisa'i and Ya'qub read a-idha as a question and inna without the question, while the others read the question in both places. The difference lies in that second word, and in nothing else he mentions.",
            "bn": "এ আয়াতে বাগাভীর টীকায় অর্থের কোনো ব্যাখ্যা নেই। আছে শুধু আয়াতটি কীভাবে পড়া হয়, তার বিবরণ। বাক্যে প্রশ্ন বসতে পারে দুই জায়গায়: শুরুতে আইযা, আর ওঠানোর শব্দের আগে আইন্না। তিনি জানান, আবু জাফর, নাফে', কিসাঈ ও ইয়াকুব আইযা পড়েন প্রশ্নবোধক রূপে, আর ইন্না পড়েন প্রশ্ন ছাড়া। বাকিরা দুই জায়গাতেই প্রশ্ন রেখে পড়েন। তিনি যতটুকু বলেন, পার্থক্য কেবল ওই দ্বিতীয় শব্দে, আর কিছুতে নয়।"
          },
          {
            "en": "The Arabic printed on this site, a-idha and then a-inna, carries the question in both places, which matches al-Baghawi's second group. He sets the two readings side by side and does not prefer either. He also says nothing about a difference of meaning between them, and none of the other notes consulted for this verse discusses the variant at all. So the article draws nothing further from it. What the commentators do discuss is the attitude behind the words, and that is the subject of the next section.",
            "bn": "এই সাইটে ছাপা আরবি পাঠে আছে আইযা, তারপর আইন্না, অর্থাৎ দুই জায়গাতেই প্রশ্ন। বাগাভীর দ্বিতীয় দলের পাঠের সঙ্গে এটাই মেলে। তিনি দুটি পাঠ পাশাপাশি রাখেন, কোনোটাকে অগ্রাধিকার দেন না। দুই পাঠে অর্থের কোনো তফাত হয় কি না, সে বিষয়েও তিনি কিছু বলেন না। এ আয়াতের জন্য আনা অন্য কোনো টীকাও এ পাঠভেদ নিয়ে আলোচনা করে না। তাই এ লেখা এখান থেকে আর কিছু টানে না। তাফসীরকারেরা যা নিয়ে কথা বলেন, তা হলো এ কথার পেছনের মনোভাব। পরের অংশ সেটা নিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Pushed Too Far to Happen",
          "bn": "এত দূরে যে ঘটবেই না"
        },
        "p": [
          {
            "en": "Al-Qurtubi's whole note on the verse is a single sentence: hadha istib'adun minhum li-amri l-ba'thi wa-takdhibun lahu. This is their deeming the matter of the raising far-off, and a denial of it. The Muyassar ends its note with the same sentence, word for word. Istib'ad comes from the root of distance, and here it means treating something as too remote ever to happen. The speakers do not argue against the raising. They hold it at arm's length until it looks impossible.",
            "bn": "আয়াতটির উপর কুরতুবীর পুরো টীকা একটিমাত্র বাক্য: হাযা ইসতিবআদুম মিনহুম লিআমরিল বাসি ওয়া তাকযীবুল লাহু। এটা পুনরুত্থানের ব্যাপারটাকে তাদের দূরের জিনিস ভাবা, আর একে মিথ্যা বলা। মুয়াসসারের টীকাও শেষ হয় হুবহু এই বাক্যে। ইসতিবআদ এসেছে দূরত্ব বোঝানো ধাতু থেকে। এখানে এর মানে কোনো কিছুকে এত দূরের ভাবা যে তা কোনোদিন ঘটবে বলেই মনে হয় না। বক্তারা পুনরুত্থানের বিরুদ্ধে যুক্তি সাজায় না। ব্যাপারটাকে দূরে সরিয়ে রাখে, যতক্ষণ না সেটা অসম্ভব দেখায়।"
          },
          {
            "en": "The pairing recurs across the notes. Ibn Kathir has mukadhdhibina and mustab'idina, denying and deeming far-off. As-Sa'di writes kanu yunkiruna l-ba'th, fa-yaquluna stib'adan li-wuqu'ih: they used to deny the raising, and so they would say this as deeming its occurrence far-off. At-Tabari has kufr and inkar, disbelief and denial. None of the notes consulted here reads the question as a sincere inquiry. Nor does any of them attach an occasion of revelation to the verse or name a particular speaker in history.",
            "bn": "টীকাগুলোতে এই জোড়া বারবার ফিরে আসে। ইবন কাসীরে আছে মুকাযযিবীনা আর মুসতাবইদীনা, মিথ্যা বলা আর দূরের ভাবা। সা'দী লেখেন কানূ ইউনকিরূনাল বাস, ফাইয়াকূলূনাসতিবআদান লিউকূইহ: তারা পুনরুত্থান অস্বীকার করত, তাই এর ঘটে যাওয়াকে বহু দূরের ব্যাপার ভেবে এ কথা বলত। তাবারীতে আছে কুফর আর ইনকার, অবিশ্বাস আর অস্বীকার। এখানে আনা কোনো টীকাই প্রশ্নটাকে সত্যিকারের জিজ্ঞাসা হিসেবে পড়ে না। কোনোটি আয়াতের সঙ্গে শানে নুযূলও জোড়ে না, ইতিহাসের নির্দিষ্ট কোনো বক্তার নামও নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "From Whether to How",
          "bn": "হবে কি না থেকে কীভাবে"
        },
        "p": [
          {
            "en": "As-Sa'di restates the question with a different opening word: kayfa nub'athu ba'da mawtina wa-qad balina, fa-kunna turaban wa-'izaman? How shall we be raised after our death, when we have decayed and become dust and bones? His paraphrase turns their whether into a how, the question of someone who cannot picture the thing at all. In the text as consulted, a bracketed phrase follows: hadha mina l-muhal, this is among the impossible. The brackets stand in the printed text, and it does not say who added them, so the phrase is reported here exactly as it stands.",
            "bn": "সা'দী প্রশ্নটা নতুন করে বলেন ভিন্ন একটি শব্দ দিয়ে শুরু করে: কাইফা নুবআসু বাদা মাওতিনা ওয়া কাদ বালীনা, ফাকুন্না তুরাবাও ওয়া ইযামা? মৃত্যুর পর আমরা যখন পচে-গলে মাটি আর হাড় হয়ে গেছি, তখন কীভাবে আমাদের ওঠানো হবে? তাঁর ব্যাখ্যায় তাদের 'হবে কি না' হয়ে যায় 'কীভাবে'। এ প্রশ্ন এমন মানুষের, যে জিনিসটা কল্পনাই করতে পারে না। যে পাঠ আনা হয়েছে, তাতে এরপর বন্ধনীর ভেতর একটি বাক্যাংশ: হাযা মিনাল মুহাল, এটা অসম্ভব ব্যাপারগুলোর একটি। বন্ধনী ছাপা পাঠেই আছে, কে যোগ করেছেন তা বলা নেই। তাই কথাটা এখানে হুবহু যেমন আছে তেমনই রাখা হলো।"
          },
          {
            "en": "As-Sa'di also quotes 56:47 together with 56:48 and then repeats the closing words: a-inna la-mab'uthun, a-wa-aba'una l-awwalun, shall we indeed be raised, and our forefathers of old too? Ibn Kathir's English abridgement likewise quotes the two verses as one sentence. The forefathers belong to 56:48, and the study of that verse belongs there. For this verse it is enough to see that both commentators hear one continuous speech, and that the doubt reaches back beyond the speakers to the generations before them.",
            "bn": "সা'দী ৫৬:৪৭ আয়াতকে ৫৬:৪৮ আয়াতের সঙ্গে মিলিয়ে উদ্ধৃত করেন, তারপর শেষ কথাগুলো আবার বলেন: আইন্না লামাবঊসূন, আওয়া আবাউনাল আওয়ালূন? সত্যিই কি আমাদের ওঠানো হবে, আর আমাদের আগের বাপদাদাদেরও? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরও দুটি আয়াতকে এক বাক্য হিসেবে উদ্ধৃত করে। বাপদাদাদের কথা ৫৬:৪৮ আয়াতের, তার আলোচনাও সেখানেই। এ আয়াতের জন্য এটুকু দেখাই যথেষ্ট যে দুজন তাফসীরকারই একে একটানা এক বক্তব্য হিসেবে শোনেন। আর সন্দেহটা বক্তাদের ছাড়িয়ে পৌঁছে যায় তাদের আগের প্রজন্ম পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered at Once",
          "bn": "জবাব আসে সঙ্গে সঙ্গে"
        },
        "p": [
          {
            "en": "The surah does not leave the question hanging. In 56:49 and 56:50 comes a command: say, the former and the later peoples are to be gathered for the appointment of a known Day. Ibn Kathir's English abridgement explains it as an instruction to the Prophet ﷺ to say that the earlier and later generations of the Children of Adam will be gathered for the Day of Resurrection, and that none of them will be left out. That time, he adds, is precisely set and will come neither late nor early.",
            "bn": "সূরা প্রশ্নটাকে ঝুলিয়ে রাখে না। ৫৬:৪৯ ও ৫৬:৫০ আয়াতে আসে আদেশ: বলুন, আগের ও পরের সবাইকে অবশ্যই একত্র করা হবে এক নির্দিষ্ট দিনের নির্ধারিত সময়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এর ব্যাখ্যায় বলে, নবী ﷺ-কে বলতে বলা হচ্ছে যে আদম সন্তানদের আগের ও পরের সব প্রজন্মকে কিয়ামতের দিন একত্র করা হবে, একজনও বাদ পড়বে না। তিনি যোগ করেন, সে সময় একেবারে নির্ধারিত। তা দেরিতেও আসবে না, আগেও না।"
          },
          {
            "en": "Those verses have their own study, and here they serve only as the frame. The order is what matters for this verse: the doubters add their forefathers of old to the question, and the reply begins with the former and the later together. Further on, from 56:57 to 56:62, the surah sets out an argument from the first creation, which the article on 56:60 treats as a single argument running across six verses. That argument belongs to those verses and is not drawn into this one.",
            "bn": "ওই আয়াতগুলোর নিজস্ব আলোচনা আছে, এখানে সেগুলো কেবল কাঠামো হিসেবে আসে। এ আয়াতের জন্য জরুরি হলো ক্রমটা। সন্দেহকারীরা প্রশ্নের সঙ্গে তাদের পূর্বপুরুষদেরও জুড়ে দেয়, আর জবাব শুরুই হয় আগের ও পরের সবাইকে একসঙ্গে ধরে। আরও সামনে, ৫৬:৫৭ থেকে ৫৬:৬২ আয়াতে, সূরা প্রথম সৃষ্টি থেকে একটি যুক্তি দাঁড় করায়। ৫৬:৬০ আয়াতের লেখায় সেটাকে ছয়টি আয়াত জুড়ে চলা একটিই যুক্তি হিসেবে দেখা হয়েছে। সে যুক্তি ওই আয়াতগুলোর, এখানে টানা হচ্ছে না।"
          },
          {
            "en": "Two absences should be stated. Ma'arif al-Qur'an's note for the group from 56:39 to 56:48 speaks only to the earlier and later companies of 56:39 and 56:40, and says nothing about this verse, so nothing from it is used here. The hadith it cites in that note concerns a group of the Ummah remaining on the truth, which is not attached to 56:47. No note consulted for this verse attaches a hadith to it, so none is quoted. The verse is read here through its words and its commentators alone.",
            "bn": "দুটি জিনিস এখানে নেই, সেটা বলে রাখা দরকার। ৫৬:৩৯ থেকে ৫৬:৪৮ পর্যন্ত আয়াতগুচ্ছের টীকায় মাআরিফুল কুরআন কথা বলে শুধু ৫৬:৩৯ ও ৫৬:৪০ আয়াতের আগের ও পরের দল নিয়ে। এ আয়াত নিয়ে তাতে কিছু নেই, তাই সেখান থেকে কিছু নেওয়া হয়নি। ওই টীকায় যে হাদিস আছে, তা উম্মাহর একটি দলের সত্যের উপর টিকে থাকা নিয়ে। ৫৬:৪৭ আয়াতের সঙ্গে তার কোনো যোগ নেই। এ আয়াতের জন্য আনা কোনো টীকা এর সঙ্গে কোনো হাদিস জোড়েনি, তাই এখানে কোনো হাদিস উদ্ধৃত হয়নি। আয়াতটি এখানে পড়া হলো শুধু এর শব্দ আর তাফসীরকারদের ব্যাখ্যা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Words, No One Else's",
          "bn": "তাদের কথা, অন্য কারও নয়"
        },
        "p": [
          {
            "en": "Because the verse quotes a condemned group, one thing must be said plainly. The verse speaks only of what it names: the companions of the left, quoted in their denial, whose end the surrounding verses set out. It licenses nothing against any living person or community. It names no nation, sect, family or party, and no reader has warrant to point at anyone alive today and call them these deniers. The commentators consulted here speak of the companions of the left and the Fire, and none applies the quotation to a group in this world.",
            "bn": "আয়াতটি যেহেতু শাস্তিপ্রাপ্ত এক দলের কথা উদ্ধৃত করে, একটা কথা সোজাসুজি বলা দরকার। আয়াত বর্ণনা করে কেবল তা-ই, যা আয়াতে আছে: বাম দিকের দল, তাদের অস্বীকারের কথাসহ, যাদের পরিণতি আশপাশের আয়াতগুলো খুলে বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। এতে কোনো জাতি, মাযহাব, পরিবার বা দলের নাম নেই। আজ বেঁচে থাকা কারও দিকে আঙুল তুলে তাকে এই অস্বীকারকারীদের একজন বলার অধিকার কোনো পাঠকের নেই। এখানে আনা তাফসীরকারেরা কথা বলেন বাম দিকের দল আর জাহান্নাম নিয়ে। তাঁদের কেউ এ উদ্ধৃতি দুনিয়ার কোনো দলের উপর চাপাননি।"
          },
          {
            "en": "The surah itself models a different response. When the question is voiced, the reply in 56:49 is a command to say something, and further on comes an argument. Someone who hears a doubt about the return today, from a friend, a student or their own heart, is not looking at the companions of the left. The verse asks the reader to recognise the habit of pushing the raising far away, and to watch for it in themselves first, not to sort the people around them into the saved and the lost.",
            "bn": "সূরা নিজেই অন্য রকম জবাবের নমুনা দেখায়। প্রশ্নটা ওঠার পর ৫৬:৪৯ আয়াতে জবাব আসে কিছু বলার আদেশ হিসেবে, আর আরও সামনে আসে যুক্তি। আজ বন্ধু, ছাত্র কিংবা নিজের মন থেকে আখিরাত নিয়ে কোনো সন্দেহের কথা কানে এলে, মনে রাখতে হবে, সামনে বাম দিকের দলের কেউ দাঁড়িয়ে নেই। আয়াত পাঠককে বলে পুনরুত্থানকে দূরে ঠেলে দেওয়ার অভ্যাসটা চিনতে, আর সবার আগে নিজের ভেতরে সেটা খুঁজতে। চারপাশের মানুষকে নাজাত পাওয়া আর হতভাগা, এ দুই ভাগে ভাগ করা পাঠকের কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Return Feels Remote",
          "bn": "ফেরার দিন যখন দূরে মনে হয়"
        },
        "p": [
          {
            "en": "The word the commentators share, istib'ad, names something a person can do without ever speaking the words of this verse. A believer would not say that the raising is impossible. Yet the same distancing can live in a schedule that has no room for preparing, in a comfort that makes the meeting with Allah feel like someone else's concern, in the thought that there is always time later. The verse's frame shows how the three belong together: luxury, persistence in wrong, and a return kept far away.",
            "bn": "তাফসীরকারেরা সবাই যে শব্দটি ব্যবহার করেন, সেই ইসতিবআদ এমন একটা কাজের নাম, যা এ আয়াতের কথাগুলো মুখে না এনেও করা যায়। একজন মুমিন বলবে না যে পুনরুত্থান অসম্ভব। তবু দূরে সরিয়ে রাখার সেই একই ভাব লুকিয়ে থাকতে পারে এমন দৈনিক রুটিনে, যেখানে প্রস্তুতির কোনো জায়গা নেই। থাকতে পারে এমন আরামে, যা আল্লাহর সঙ্গে সাক্ষাৎকে অন্য কারও চিন্তা বানিয়ে দেয়। কিংবা এই ভাবনায় যে পরে তো সময় আছেই। আয়াতের আশপাশ দেখায় তিনটি কীভাবে একসঙ্গে চলে: ভোগবিলাস, অন্যায়ে অটল থাকা, আর ফেরার দিনকে দূরে রাখা।"
          },
          {
            "en": "At-Tabari's paraphrase ended on the words ahya'an kama kunna, alive as we were. That is the claim the speakers could not accept, and it is the claim the reader is invited to take seriously: to be raised whole, as yourself, and to answer for what you did. The surah asked about the companions of the left in 56:41 while there is still time to answer with deeds. Their own words in 56:47 show the habit that led them there. The fitting response is to bring that day near, in practice as well as in belief.",
            "bn": "তাবারীর ব্যাখ্যা শেষ হয়েছিল আহইয়াআন কামা কুন্না কথাটায়, আগের মতোই জীবিত। বক্তারা ঠিক এই কথাটাই মেনে নিতে পারেনি। আর পাঠককে ডাকা হচ্ছে এই কথাটাকেই গুরুত্ব দিতে: পুরোপুরি নিজের মতো করেই আবার ওঠানো হবে, আর নিজের কাজের হিসাব দিতে হবে। ৫৬:৪১ আয়াতে সূরা বাম দিকের দল নিয়ে প্রশ্ন তুলেছে এমন সময়ে, যখন আমল দিয়ে জবাব দেওয়ার সময় এখনো হাতে আছে। ৫৬:৪৭ আয়াতে তাদের নিজেদের কথাই দেখায়, কোন অভ্যাস তাদের সেখানে নিয়ে গেছে। সঠিক জবাব হলো সেই দিনটাকে কাছে টেনে আনা, বিশ্বাসে যেমন, তেমনি রোজকার আমলে।"
          }
        ]
      }
    ]
  },
  "56:52": {
    "sections": [
      {
        "h": {
          "en": "Eaters, Spoken With Certainty",
          "bn": "নিশ্চিত সুরে বলা খাবারের কথা"
        },
        "p": [
          {
            "en": "La-akiluna min shajarin min zaqqum: you will surely be eaters from trees of zaqqum. The verse has five words and no subject of its own. Its subject stands in 56:51, thumma innakum ayyuha d-dallun al-mukadhdhibun, then indeed you, O you who are astray and deny. The two verses form one sentence. Inna and its noun open it in 56:51, and the predicate arrives only here, so the listener waits a full verse to hear what is said about those addressed. At-Tabari's comment on 56:51 quotes the words of 56:52 to complete it.",
            "bn": "লাআকিলূনা মিন শাজারিম মিন জাক্কূম: তোমরা অবশ্যই জাক্কুম গাছ থেকে খাবে। আয়াতে পাঁচটি শব্দ, অথচ এর নিজস্ব কোনো কর্তা নেই। কর্তা আছে ৫৬:৫১ আয়াতে: সুম্মা ইন্নাকুম আইয়ুহাদ দাল্লূনাল মুকাযযিবূন, তারপর হে পথভ্রষ্ট অস্বীকারকারীরা, তোমরা। দুটি আয়াত মিলে একটিই বাক্য। ৫৬:৫১-এ ইন্না আর তার পরের সম্বোধিত লোকদের দিয়ে বাক্য শুরু হয়, আর তাদের সম্পর্কে আসল কথাটা আসে এখানে এসে। শ্রোতাকে তাই পুরো একটি আয়াত অপেক্ষা করতে হয়। তাবারী ৫৬:৫১-এর ব্যাখ্যা শেষ করেন ৫৬:৫২-এর শব্দগুলো জুড়ে দিয়ে।"
          },
          {
            "en": "The word that carries the news is akiluna, eaters, a participle rather than a verb in the future tense. The English translation on this site renders it as will be eating, which is the sense, but the Arabic names the people by what they will be doing, as if the state were already theirs. Ibn Kathir's note on these verses gives the same picture in plain terms: they will be seized and made to eat from the zaqqum tree until their stomachs become full. The single letter in front of the participle is the next thing to look at.",
            "bn": "খবরটা বহন করছে আকিলূন শব্দটি, যার মানে খাদকেরা। শব্দটি ভবিষ্যৎ কালের ক্রিয়া নয়, কর্তাবাচক বিশেষ্য। এ সাইটের ইংরেজি অনুবাদ এটাকে লিখেছে will be eating, অর্থের দিক থেকে যা ঠিক। কিন্তু আরবি এখানে মানুষগুলোকে চিনিয়ে দেয় তাদের কাজ দিয়েই, যেন অবস্থাটা আগে থেকেই তাদের গায়ে লেগে আছে। ইবন কাসীর এই আয়াতগুলোর আলোচনায় ছবিটা সোজা কথায় বলেন: তাদের ধরে আনা হবে, আর জাক্কুম গাছ থেকে খেতে বাধ্য করা হবে, যতক্ষণ না পেট ভরে যায়। শব্দটির সামনে বসা ছোট্ট একটি হরফ এবার দেখার পালা।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Mould, Turned Around",
          "bn": "তাদের ছাঁচেই ফিরতি জবাব"
        },
        "p": [
          {
            "en": "That letter is the lam in la-akiluna, which adds weight to a sentence already opened with inna. The same pairing has appeared twice in the passage. In 56:47 the deniers ask a-inna la-mab'uthun, are we indeed to be raised, using inna and lam to voice their disbelief. In 56:49 and 56:50 the reply is built the same way: inna l-awwalina wa-l-akhirina la-majmu'una, indeed the former and the later peoples are surely to be gathered. Now the third: innakum la-akiluna, indeed you will surely be eaters.",
            "bn": "হরফটি লাআকিলূন শব্দের লাম, যা ইন্না দিয়ে শুরু হওয়া বাক্যে আরও জোর যোগ করে। এ অংশে এই জোড়া আগেও দুবার এসেছে। ৫৬:৪৭ আয়াতে অস্বীকারকারীরা জিজ্ঞেস করে, আইন্না লামাবঊসূন, আমাদের কি সত্যিই ওঠানো হবে? অবিশ্বাস প্রকাশ করতে তারা ইন্না আর লাম দুটোই ব্যবহার করেছিল। ৫৬:৪৯ ও ৫৬:৫০ আয়াতে জবাবও একই গড়নে: ইন্নাল আউয়ালীনা ওয়াল আখিরীনা লামাজমূঊন, পূর্ববর্তী আর পরবর্তী সবাইকে অবশ্যই একত্র করা হবে। এবার তৃতীয়টি: ইন্নাকুম লাআকিলূন, তোমরা অবশ্যই খাবে।"
          },
          {
            "en": "The three words that receive the lam are all plural participles. Mab'uthun and majmu'un, raised and gathered, name what will be done to people; akilun, eaters, names what they will do. The question took a form of certainty and put it to doubt. The reply keeps that form and removes the doubt, first for everyone, then for those who asked. None of the commentaries consulted for this verse remarks on the lam or on this echo, so it is offered here as a reading of the passage's own wording, which anyone can check against the Arabic, and not as any mufassir's view.",
            "bn": "লাম যে তিনটি শব্দের সামনে বসেছে, তিনটিই বহুবচনের বিশেষ্য-রূপ। মাবঊসূন আর মাজমূঊন বলে মানুষের সঙ্গে কী করা হবে: ওঠানো হবে, একত্র করা হবে। আকিলূন বলে তারা নিজেরা কী করবে: খাবে। প্রশ্নকারীরা নিশ্চয়তার একটা গড়ন নিয়ে তাতে সন্দেহ ঢেলেছিল। জবাব গড়নটা রেখে সন্দেহটা সরিয়ে দিল, প্রথমে সবার বেলায়, তারপর প্রশ্নকারীদের বেলায়। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, তার কোনোটিই লাম বা এই প্রতিধ্বনি নিয়ে কিছু বলেনি। তাই কথাটা এখানে রাখা হলো আয়াতগুলোর নিজের শব্দ থেকে করা পাঠ হিসেবে, যা আরবির সঙ্গে মিলিয়ে যে কেউ যাচাই করতে পারেন। কোনো মুফাসসিরের মত হিসেবে নয়।"
          },
          {
            "en": "The study of 56:47 looked at how the question pushed the raising far away. Here the point is only that its own grammar is handed back. A doubter who said shall we indeed be raised hears, in the reply, indeed you will. The thumma at the head of 56:51 marks a step forward after the gathering of 56:50: first all are brought together, then the people addressed are told what follows for them. The gathering and the eating are not two separate threats; they are two stages of one answer.",
            "bn": "৫৬:৪৭-এর আলোচনায় দেখা হয়েছিল প্রশ্নটা কীভাবে পুনরুত্থানকে দূরে ঠেলে দিত। এখানে কথা শুধু এটুকু যে, প্রশ্নের নিজের ব্যাকরণই তাদের হাতে ফিরিয়ে দেওয়া হয়েছে। যে সন্দেহ নিয়ে বলেছিল, আমাদের কি সত্যিই ওঠানো হবে, সে জবাবে শোনে, তোমরা অবশ্যই। ৫৬:৫১-এর শুরুর সুম্মা শব্দটি ৫৬:৫০-এর একত্র হওয়ার পরের ধাপ বোঝায়। আগে সবাইকে জড়ো করা হবে, তারপর সম্বোধিত লোকদের জানানো হবে তাদের জন্য কী অপেক্ষা করছে। একত্র হওয়া আর খাওয়া আলাদা দুটি হুমকি নয়, একই জবাবের দুটি ধাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Astray First, Then Denying",
          "bn": "আগে পথহারা, পরে অস্বীকার"
        },
        "p": [
          {
            "en": "Who are the you of innakum? At-Tabari answers directly: Allah is speaking to the companions of the left, ashab al-shimal, the group the surah has been describing since 56:41. He glosses the two titles as al-dallun 'an tariq al-huda, those astray from the road of guidance, and al-mukadhdhibun bi-wa'id Allah wa-wa'dih, those who deny Allah's threat and His promise. The Muyassar uses almost the same words. Ibn Kathir, on 56:49, reads the command say as addressed to Muhammad ﷺ, so the words reached their first hearers as a reply he was told to give.",
            "bn": "ইন্নাকুম, অর্থাৎ তোমরা বলতে কারা? তাবারী সরাসরি বলেন: আল্লাহ কথা বলছেন আসহাবুশ শিমাল, বাম দিকের দলের সঙ্গে। ৫৬:৪১ থেকে সূরা এদের কথাই বলে আসছে। দুটি উপাধির ব্যাখ্যা তিনি দেন এভাবে: আদ দাল্লূনা আন তারীকিল হুদা, হিদায়াতের পথ থেকে যারা সরে গেছে; আর আল মুকাযযিবূনা বি ওয়াঈদিল্লাহি ওয়া ওয়া'দিহ, যারা আল্লাহর সতর্কবাণী ও তাঁর প্রতিশ্রুতিকে মিথ্যা বলে। মুয়াসসার প্রায় হুবহু একই শব্দ ব্যবহার করে। ইবন কাসীর ৫৬:৪৯-এর 'বলো' আদেশটি বোঝেন মুহাম্মাদ ﷺ-এর প্রতি সম্বোধন হিসেবে। তাই প্রথম শ্রোতাদের কাছে কথাগুলো পৌঁছেছিল জবাব হিসেবে, যা তাঁকে দিতে বলা হয়েছিল।"
          },
          {
            "en": "The other notes name what was denied in different terms. Al-Qurtubi has al-mukadhdhibun bi-l-ba'th, those who deny the resurrection, which ties the verse to the question of 56:47. As-Sa'di writes that they deny the Messenger ﷺ and the truth, the promise and the threat he brought, and he adds a phrase to the first title: astray from the road of guidance, al-tabi'un li-tariq al-rada, following the road of ruin. The order of the two titles is worth noticing. Straying is named before denying, as if the denial were where the drift ended.",
            "bn": "কী অস্বীকার করা হয়েছিল, অন্য তাফসীরগুলো তা ভিন্ন ভাষায় বলে। কুরতুবী লেখেন আল মুকাযযিবূনা বিল বা'স, যারা পুনরুত্থানকে মিথ্যা বলে। এতে আয়াতটি ৫৬:৪৭-এর প্রশ্নের সঙ্গে জুড়ে যায়। সা'দী বলেন, তারা রাসূল ﷺ-কে এবং তিনি যে সত্য, প্রতিশ্রুতি ও সতর্কবাণী এনেছিলেন তা অস্বীকার করে। প্রথম উপাধির সঙ্গে তিনি একটা কথা যোগ করেন: হিদায়াতের পথ থেকে সরে যাওয়া, আত তাবিঊনা লি তারীকির রাদা, ধ্বংসের পথের অনুসারী। দুটি উপাধির ক্রমটাও লক্ষ করার মতো। পথ হারানোর কথা আগে, অস্বীকারের কথা পরে, যেন ধীরে ধীরে সরে যাওয়ার শেষ ঠিকানা অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Small Words Called Min",
          "bn": "দুটি 'মিন', দুই কাজ"
        },
        "p": [
          {
            "en": "The phrase min shajarin min zaqqum uses the same little word twice, and the two do different work. The first min ties the eating to its source: they eat from trees. At-Tabari, explaining the word shajar, offers a comparison from ordinary speech: akhadhtu min al-sha', I took from the sheep, where the speaker may intend one animal or more and either is acceptable. His example shows this first min doing what it does in daily Arabic, taking from a larger stock, without fixing how much is taken.",
            "bn": "মিন শাজারিম মিন জাক্কূম, এই অংশে একই ছোট্ট শব্দ দুবার এসেছে, আর দুটির কাজ আলাদা। প্রথম মিন খাওয়াকে তার উৎসের সঙ্গে বাঁধে: তারা খাবে গাছ থেকে। শাজার শব্দটি বোঝাতে গিয়ে তাবারী রোজকার কথা থেকে একটা তুলনা দেন: আখাযতু মিনাশ শা', আমি ভেড়ার পাল থেকে নিলাম। বক্তা একটা পশু বোঝাতে পারে, একাধিকও বোঝাতে পারে, দুটোই চলে। তাঁর উদাহরণে প্রথম মিন সেই কাজই করছে, যা সাধারণ আরবিতে করে। বড় কোনো ভাণ্ডার থেকে নেওয়া বোঝায়, কতটা নেওয়া হলো তা বেঁধে দেয় না।"
          },
          {
            "en": "The second min answers a different question: trees of what kind? Al-Jalalayn answers briefly: min zaqqum is the explication of shajar, that is, it names which trees are meant. The trees are not left vague; they are identified at once. This is the only grammatical comment on the phrase among the sources consulted for this verse. Al-Baghawi's entry on 56:52 repeats the verse and adds nothing, and the Tanwir al-Miqbas, the commentary carried under Ibn Abbas's name, renders the phrase as a tree called Zaqqum.",
            "bn": "দ্বিতীয় মিন অন্য প্রশ্নের উত্তর দেয়: কোন গাছ? জালালাইন অল্প কথায় বলে দেন, মিন জাক্কূম হলো শাজার শব্দের ব্যাখ্যা, মানে কোন গাছ বোঝানো হচ্ছে তা চিনিয়ে দেয়। গাছগুলোকে অস্পষ্ট রাখা হয়নি, সঙ্গে সঙ্গে নাম বলে দেওয়া হয়েছে। এ আয়াতের জন্য আনা উৎসগুলোর মধ্যে বাক্যাংশটির ব্যাকরণ নিয়ে এটুকুই একমাত্র মন্তব্য। বাগাভী ৫৬:৫২-এর জায়গায় শুধু আয়াতটি উদ্ধৃত করেন, আর কিছু যোগ করেন না। ইবন আব্বাসের নামে প্রচলিত তাফসীর তানবীরুল মিকবাস বাক্যাংশটির অর্থ করে: জাক্কুম নামের একটি গাছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Trees or a Single One",
          "bn": "অনেক গাছ, নাকি একটি"
        },
        "p": [
          {
            "en": "At-Tabari records one difference in wording. In the reading of Abdullah (RA), as he names him, the phrase is la-akiluna min shajaratin min zaqqum, with the singular shajara, one tree, in place of the collective shajar. He does not treat this as a change of meaning. Shajar and shajara, he says, mean one thing, and his sheep comparison is the reason he gives: whether one intends a single tree or more, the wording allows it. The text printed on this site reads shajarin, and the reading of Abdullah is set beside it only as at-Tabari reports it.",
            "bn": "তাবারী শব্দে একটা ভিন্নতার কথা উল্লেখ করেন। আবদুল্লাহ (রাঃ)-এর কিরাআতে, তাবারী তাঁকে এই নামেই উল্লেখ করেন, বাক্যাংশটি লাআকিলূনা মিন শাজারাতিম মিন জাক্কূম। সমষ্টিবাচক শাজারের জায়গায় সেখানে একবচন শাজারা, একটি গাছ। তাবারী একে অর্থের পরিবর্তন মনে করেন না। তাঁর ভাষায়, শাজার আর শাজারার অর্থ এক। কারণ হিসেবে তিনি ভেড়ার পালের সেই তুলনাটাই দেন: একটি গাছ বোঝানো হোক বা একাধিক, শব্দে দুটোরই অবকাশ আছে। এ সাইটে ছাপা পাঠ শাজারিন। আবদুল্লাহ (রাঃ)-এর পাঠ এখানে পাশে রাখা হলো শুধু তাবারীর বর্ণনা অনুযায়ী।"
          },
          {
            "en": "The same question of number comes back a verse later, and at-Tabari takes it up in his entry on 56:51. The pronoun in fa-mali'una minha l-butun, filling the bellies from it, is feminine, while the one in fa-sharibuna 'alayhi, drinking on top of it, is masculine. He reports that the grammarians differed over this. The view he sets out first is that shajar is used as both genders, and the feminine comes from taking it as shajara, since that word can point to a whole kind. Arabs say a bitter tree grew near us, meaning many.",
            "bn": "সংখ্যার প্রশ্নটা এক আয়াত পরেই আবার ফিরে আসে, আর তাবারী ৫৬:৫১-এর আলোচনায় তা তোলেন। ফামালিঊনা মিনহাল বুতূন, তা দিয়ে পেট ভরবে, এখানে মিনহা সর্বনামটি স্ত্রীলিঙ্গ। অথচ ফাশারিবূনা আলাইহি, তার উপর পান করবে, এখানে সর্বনাম পুংলিঙ্গ। তিনি জানান, ভাষাবিদেরা এ নিয়ে ভিন্নমত পোষণ করেছেন। প্রথমে তিনি যে মত আনেন তা হলো, শাজার শব্দ দুই লিঙ্গেই চলে। আর স্ত্রীলিঙ্গ এসেছে একে শাজারা ধরে নেওয়ায়, কারণ ওই শব্দও গোটা একটা জাতকে বোঝাতে পারে। যেমন আরবরা বলে, আমাদের কাছে একটা তেতো গাছ গজিয়েছে, অথচ বোঝায় অনেকগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Here, Described Elsewhere",
          "bn": "নাম এখানে, বিবরণ অন্যত্র"
        },
        "p": [
          {
            "en": "The notes on this verse say little about the tree itself, and they point away from here when they do. Al-Qurtubi gives two phrases, karih al-manzar, karih al-ta'm, hateful to look at, hateful to taste, and then adds that it is the tree mentioned in Surat al-Saffat. As-Sa'di calls it the ugliest of trees and the foulest in smell; the Muyassar, among the ugliest of trees. Maududi's note simply refers the reader to his comment in al-Saffat. The surah names the tree here and leaves the description to the passages that treat it at length.",
            "bn": "এ আয়াতের তাফসীরগুলো গাছটি সম্পর্কে অল্পই বলে, আর যখন বলে, তখন অন্য জায়গার দিকে ইশারা করে। কুরতুবী দুটি কথা বলেন: কারীহুল মানযার, কারীহুত তা'ম, দেখতে জঘন্য, খেতে জঘন্য। তারপর যোগ করেন, এটি সেই গাছ যার উল্লেখ আছে সূরা আস সাফফাতে। সা'দী একে বলেন সবচেয়ে কুৎসিত আর সবচেয়ে দুর্গন্ধময় গাছ। মুয়াসসারের ভাষায়, সবচেয়ে কুৎসিত গাছগুলোর একটি। মাওদূদী শুধু পাঠককে সূরা আস সাফফাতে তাঁর টীকার দিকে পাঠিয়ে দেন। সূরা এখানে গাছটির নাম বলে, বিস্তারিত বিবরণ রেখে দেয় সেই অংশগুলোর জন্য, যেখানে তা লম্বা করে আলোচিত।"
          },
          {
            "en": "This site has studied those passages. The article on 37:63 follows the tree in al-Saffat, where it is made a trial for the wrongdoers, and the article on 44:43 takes up where it grows and whose food it is. That second article also quotes the narration about a single drop of zaqqum falling into this world, with its collector's grading. None of the commentaries consulted for 56:52 attaches a hadith to this verse, so no narration is quoted here, and the reader is pointed to 44:43 for that narration.",
            "bn": "এ সাইটে সেই অংশগুলোর আলোচনা আগেই হয়েছে। ৩৭:৬৩-এর প্রবন্ধে গাছটিকে দেখা হয়েছে সূরা আস সাফফাতে, যেখানে একে জালিমদের জন্য পরীক্ষা বানানো হয়েছে। ৪৪:৪৩-এর প্রবন্ধে আলোচনা হয়েছে গাছটি কোথায় জন্মায় আর কাদের খাবার। দুনিয়ায় জাক্কুমের এক ফোঁটা পড়ার বর্ণনাটিও সেখানে উদ্ধৃত হয়েছে, সংকলকের দেওয়া মানসহ। ৫৬:৫২-এর জন্য আনা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত হলো না, সেটির জন্য পাঠককে ৪৪:৪৩ দেখতে বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hunger Against a Hateful Taste",
          "bn": "জঘন্য স্বাদের সামনে ক্ষুধা"
        },
        "p": [
          {
            "en": "Why would anyone eat from a tree the commentators call hateful to taste? The Muyassar, which glosses 56:52 to 56:55 as one passage, attaches a reason to the filling of bellies in the next verse: li-shiddat al-ju', from the severity of hunger. On that reading the eating is not a choice of appetite. Al-Qurtubi's karih al-ta'm and as-Sa'di's foulest of trees stand on one side, hunger stands on the other, and hunger prevails. The verse itself names only the eating; the reason is supplied by the commentary, not stated in these words.",
            "bn": "যে গাছকে তাফসীরকারেরা খেতে জঘন্য বলেন, তা থেকে কেউ খাবে কেন? মুয়াসসার ৫৬:৫২ থেকে ৫৬:৫৫ পর্যন্ত আয়াতগুলোর ব্যাখ্যা দেয় একসঙ্গে, আর পরের আয়াতে পেট ভরানোর সঙ্গে একটা কারণ জুড়ে দেয়: লিশিদ্দাতিল জূ', ক্ষুধার তীব্রতার কারণে। এই ব্যাখ্যা অনুযায়ী খাওয়াটা রুচির পছন্দ নয়। এক দিকে কুরতুবীর কারীহুত তা'ম আর সা'দীর সবচেয়ে দুর্গন্ধময় গাছ, অন্য দিকে ক্ষুধা, আর জিতে যায় ক্ষুধাই। আয়াত নিজে শুধু খাওয়ার কথা বলে। কারণটা এসেছে তাফসীর থেকে, আয়াতের শব্দে তা বলা নেই।"
          },
          {
            "en": "The verses that follow carry the scene forward, and they are left to their own study: bellies filled, scalding water drunk on top, drinking like thirsty camels, and then 56:56, hadha nuzuluhum yawm al-din, this is their hospitality on the Day of Recompense. Ibn Kathir sets that last word beside 18:107, where the Gardens of Firdaws are the nuzul of those who believe and do good. Read back from 56:56, the trees of zaqqum open a welcome that is no welcome at all. That is as far as this article goes into the neighbouring verses.",
            "bn": "পরের আয়াতগুলো দৃশ্যটাকে সামনে নিয়ে যায়, আর সেগুলোর আলোচনা তাদের নিজেদের জায়গার জন্য রাখা হলো: পেট ভরানো, তার উপর ফুটন্ত পানি পান, পিপাসার্ত উটের মতো পান করা, তারপর ৫৬:৫৬, হাযা নুযুলুহুম ইয়াওমাদ দীন, প্রতিফল দিবসে এই তাদের আপ্যায়ন। ইবন কাসীর এই শেষ শব্দটিকে রাখেন ১৮:১০৭ আয়াতের পাশে, যেখানে ফিরদাউসের বাগান হলো ঈমান এনে সৎকাজ করা লোকদের নুযুল। ৫৬:৫৬ থেকে পেছন ফিরে পড়লে জাক্কুম গাছ এমন এক আপ্যায়নের শুরু, যা আসলে কোনো আপ্যায়নই নয়। প্রতিবেশী আয়াতগুলো নিয়ে এ প্রবন্ধ এর বেশি এগোবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Address Stays Where It Points",
          "bn": "সম্বোধন যাদের, তাদেরই থাকে"
        },
        "p": [
          {
            "en": "The address in 56:51 is to the astray, the deniers, and at-Tabari places it among the companions of the left. The verse speaks only of what it names: the end of a group marked by its straying and its denial, told in the Qur'an's own words. It licenses nothing against any living person or community. It does not tell a reader who belongs among the astray, and it gives nobody the right to say of a neighbour, a relative or a people that zaqqum is waiting for them.",
            "bn": "৫৬:৫১ আয়াতের সম্বোধন পথভ্রষ্ট অস্বীকারকারীদের প্রতি, আর তাবারী তাদের গণ্য করেন বাম দিকের দলের মধ্যে। আয়াতটি সেটুকুই বর্ণনা করে, যা পাঠে আছে: পথ হারানো আর অস্বীকারে চিহ্নিত একটি দলের পরিণতি, কুরআনের নিজের ভাষায়। এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। কে পথভ্রষ্টদের মধ্যে পড়ে, আয়াত পাঠককে তা বলে দেয় না। প্রতিবেশী, আত্মীয় বা কোনো জাতির ব্যাপারে জাক্কুম তাদের অপেক্ষায় আছে, এ কথা বলার অধিকারও আয়াত কাউকে দেয় না।"
          },
          {
            "en": "What the verse does show is how a person comes to be addressed this way. At-Tabari's gloss, denying Allah's threat and His promise, and as-Sa'di's, following the road of ruin, both describe a course that is taken, not a mark someone is born with. The reader's share in the verse is to ask whether any part of that road runs through his own days, and to leave the naming of others to Allah, who alone knows how each life ends and where each heart stands.",
            "bn": "আয়াত যা দেখায় তা হলো, একজন মানুষ কীভাবে এমন সম্বোধনের পাত্র হয়ে ওঠে। তাবারীর ব্যাখ্যায় তারা আল্লাহর সতর্কবাণী ও প্রতিশ্রুতিকে মিথ্যা বলে, আর সা'দীর ব্যাখ্যায় তারা ধ্বংসের পথের অনুসারী। দুটি ব্যাখ্যাই বলে বেছে নেওয়া এক পথের কথা, জন্মগত কোনো দাগের কথা নয়। আয়াতে পাঠকের ভাগ হলো নিজেকে জিজ্ঞেস করা, সেই পথের কোনো অংশ তার নিজের দিনগুলোর ভেতর দিয়ে গেছে কি না। আর অন্যদের নাম ঠিক করার কাজটা ছেড়ে দেওয়া আল্লাহর হাতে, যিনি একাই জানেন কার জীবন কীভাবে শেষ হবে আর কার অন্তর কোথায় দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Meal Announced Ahead",
          "bn": "আগেভাগে ঘোষিত খাবার"
        },
        "p": [
          {
            "en": "The predicate is a participle, the emphasis is doubled, and the trees are named at once. Everything in the wording closes the door on doubt about the outcome. Yet the sentence is spoken now, in the recitation of the surah, before the Day it describes. The Muyassar and at-Tabari both say that those addressed denied al-wa'id, Allah's threat. A threat announced before it falls is also a warning, and a warning means something only to someone who still has time to act on it.",
            "bn": "বিধেয় শব্দটি কর্তাবাচক বিশেষ্য, জোর দেওয়া হয়েছে দ্বিগুণ, আর গাছগুলোর নামও বলে দেওয়া হয়েছে সঙ্গে সঙ্গে। শব্দের প্রতিটি অংশ পরিণতি নিয়ে সন্দেহের দরজা বন্ধ করে দেয়। তবু বাক্যটি বলা হচ্ছে এখনই, সূরার তিলাওয়াতে, যে দিনের বর্ণনা দিচ্ছে তা আসার আগে। মুয়াসসার আর তাবারী দুজনেই বলেন, সম্বোধিত লোকেরা আল ওয়াঈদ, আল্লাহর সতর্কবাণীকে মিথ্যা বলেছিল। যে শাস্তির কথা আসার আগেই জানানো হয়, তা একটা সাবধানবাণীও। আর সাবধানবাণীর অর্থ আছে কেবল তার কাছে, যার হাতে এখনো কাজ করার সময় আছে।"
          },
          {
            "en": "So the verse has two kinds of hearers. For the deniers it describes, it completes a sentence they began with their own question about being raised. For anyone reciting it today, it is a sentence still being read, with the Day not yet come. Reading it well means letting the certainty of its wording sharpen the reader's own care, not using that certainty to measure the distance between oneself and others. A meal named this far in advance can be heard as a call never to come near that table.",
            "bn": "তাই আয়াতের শ্রোতা দুই ধরনের। যে অস্বীকারকারীদের কথা আয়াতে আছে, তাদের বেলায় এটি সেই বাক্যের শেষ অংশ, যার শুরু তারা নিজেরাই করেছিল পুনরুত্থান নিয়ে প্রশ্ন তুলে। আর আজ যে এটি তিলাওয়াত করে, তার কাছে বাক্যটি এখনো পড়া হচ্ছে, সেই দিন এখনো আসেনি। ভালোভাবে পড়ার মানে হলো শব্দের এই নিশ্চয়তা দিয়ে নিজের সাবধানতাকে আরও ধারালো করা, নিজের আর অন্যদের মধ্যে দূরত্ব মাপা নয়। এত আগে থেকে যে খাবারের কথা জানিয়ে দেওয়া হলো, তাকে শোনা যায় সেই দস্তরখানের ধারেকাছেও না যাওয়ার ডাক হিসেবে।"
          }
        ]
      }
    ]
  },
  "56:53": {
    "sections": [
      {
        "h": {
          "en": "From Eating to Filling",
          "bn": "খাওয়া থেকে পেট ভরানো"
        },
        "p": [
          {
            "en": "Fa-mali'una minha l-butun: and filling the bellies from it. The verse has three words and no subject of its own. It continues the sentence that opened in 56:51, then indeed you, O you who are astray and deny, and whose predicate came in 56:52, you will surely be eaters from trees of zaqqum. Here a second predicate is joined on with the letter fa. The eating named in the previous verse does not stop at a taste; it goes on until the bellies are full. The next two verses are joined on with the same letter.",
            "bn": "ফামালিউনা মিনহাল বুতুন: আর তা দিয়ে পেট ভর্তি করবে। আয়াতটি তিনটি শব্দের, এর নিজস্ব কোনো কর্তা নেই। বাক্যটা শুরু হয়েছিল ৫৬:৫১ আয়াতে: তারপর তোমরা, হে পথভ্রষ্ট মিথ্যারোপকারীরা। তাদের সম্পর্কে প্রথম খবরটা এসেছিল ৫৬:৫২ আয়াতে: তোমরা অবশ্যই জাক্কুম গাছ থেকে খাবে। এখানে ফা অক্ষর দিয়ে জুড়ে দেওয়া হলো দ্বিতীয় খবর। আগের আয়াতের খাওয়া এক কামড়ে থামে না, চলতে থাকে পেট ভরে যাওয়া পর্যন্ত। পরের দুটি আয়াতও জুড়েছে এই একই অক্ষর দিয়ে।"
          },
          {
            "en": "The Muyassar reads 56:52 to 56:55 as one passage and paraphrases them in a single run: eating from the zaqqum, filling the bellies, drinking scalding water on top of it, drinking like thirsty camels. Ibn Kathir quotes 56:51 to 56:53 together before his comment, and at-Tabari's entry on 56:51 already explains this verse. Read as a group, the four verses move in steps, and this verse is the step at which the eating reaches its full extent. The participle mali'una, like akiluna before it, names those addressed by what they will be doing.",
            "bn": "মুয়াসসার ৫৬:৫২ থেকে ৫৬:৫৫ পর্যন্ত আয়াতগুলোকে এক অংশ ধরে এক টানে ব্যাখ্যা করে: জাক্কুম থেকে খাওয়া, পেট ভরানো, তার উপর ফুটন্ত পানি পান করা, পিপাসার্ত উটের মতো পান করা। ইবন কাসীর মন্তব্যের আগে ৫৬:৫১ থেকে ৫৬:৫৩ একসঙ্গে উদ্ধৃত করেন। আর তাবারী ৫৬:৫১ আয়াতের আলোচনাতেই এ আয়াতের ব্যাখ্যা দিয়ে ফেলেন। চারটি আয়াত একসঙ্গে পড়লে দেখা যায়, দৃশ্যটা ধাপে ধাপে এগোয়। এ আয়াত সেই ধাপ, যেখানে খাওয়া তার শেষ সীমায় পৌঁছায়। আগের আয়াতের আকিলূনা, মানে যারা খাবে, আর এখানকার মালিউনা, মানে যারা ভরাবে, দুটো শব্দই একই ধাঁচের। যাদের সম্বোধন করা হচ্ছে, তাদের চেনানো হচ্ছে তারা যা করবে তা দিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Bellies Without a Pronoun",
          "bn": "সর্বনাম ছাড়া পেট"
        },
        "p": [
          {
            "en": "The verse says al-butun, the bellies, with the definite article and no possessive. Your bellies is the sense, since the address in 56:51 is to you, and the translation on this site supplies the word. The commentators make the same move in their paraphrases, each in his own grammatical person. The Muyassar writes butunakum, your bellies, keeping the second person of the address. At-Tabari writes fa-mali'una min al-shajar al-zaqqum butunahum, filling their bellies from the zaqqum trees, and Ibn Kathir writes hatta yamla'u minha butunahum, until they fill their bellies from it.",
            "bn": "আয়াতে আছে আল-বুতুন, পেটগুলো। শব্দটার সঙ্গে নির্দিষ্টবাচক আল আছে, কিন্তু কার পেট তা বলা নেই। অর্থ অবশ্য তোমাদের পেট, কারণ ৫৬:৫১ আয়াতে সম্বোধন তোমাদেরকেই। এ সাইটের অনুবাদেও শব্দটা জুড়ে দেওয়া হয়েছে। তাফসীরকারেরাও নিজের নিজের ভাষ্যে একই কাজ করেন, যার যার মতো করে। মুয়াসসার লেখে বুতুনাকুম, তোমাদের পেট, অর্থাৎ সম্বোধনের ধরনটা ধরে রাখে। তাবারী লেখেন, তারা জাক্কুম গাছ থেকে নিজেদের পেট ভরাবে। আর ইবন কাসীরের ভাষায়: যতক্ষণ না তারা তা দিয়ে নিজেদের পেট ভরিয়ে ফেলে।"
          },
          {
            "en": "These are paraphrases, and they explain the sense without changing the wording. The verse itself keeps the bellies in the general form, and none of the commentaries consulted for it remarks on the article, so nothing further is built on it here. What all of them repeat is the verb. Each paraphrase keeps the idea of filling: mali'una in the Muyassar and at-Tabari, yamla'u in Ibn Kathir. Not one of them softens it into eating a little or tasting. The verse speaks of full bellies, and the commentators leave them full.",
            "bn": "এগুলো ব্যাখ্যামূলক ভাষ্য। অর্থ খুলে বলে, শব্দ বদলায় না। আয়াত নিজে পেটের কথা বলেছে সাধারণভাবে। আর এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আল নিয়ে কিছু বলেনি। তাই এর উপর এখানে আর কিছু দাঁড় করানো হচ্ছে না। সবাই যা বারবার বলেছেন, তা হলো ক্রিয়াটা। প্রতিটি ভাষ্যে ভরানোর কথাটাই টিকে আছে: মুয়াসসার আর তাবারীতে মালিউনা, ইবন কাসীরে ইয়ামলাউ। একজনও একে নরম করে একটু খাওয়া বা চেখে দেখা বানাননি। আয়াত বলছে ভরা পেটের কথা, তাফসীরকারেরাও পেট ভরাই রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Feminine Points",
          "bn": "স্ত্রীলিঙ্গ সর্বনামের ঠিকানা"
        },
        "p": [
          {
            "en": "Minha, from it, is a feminine pronoun. What does it refer to? The word for the trees in 56:52 is shajar, a collective, and at-Tabari reports that the grammarians differed over why a feminine pronoun follows it. The first view he records was looked at in this site's study of 56:52: shajar can be treated as either gender, and the feminine comes from taking it as shajara, a single tree, since that word can stand for a whole kind. The text filed under this verse carries the rest of his report.",
            "bn": "মিনহা, তা থেকে। এখানে সর্বনামটা স্ত্রীলিঙ্গ। প্রশ্ন হলো, এটা কোন শব্দের দিকে ফিরছে? ৫৬:৫২ আয়াতে গাছের জন্য শব্দ এসেছে শাজার, যা সমষ্টিবাচক। তাবারী জানান, এর পরে স্ত্রীলিঙ্গ সর্বনাম কেন এল, তা নিয়ে আরবি ভাষাবিদদের মধ্যে মতভেদ হয়েছে। তাঁর উল্লেখ করা প্রথম মতটি এ সাইটের ৫৬:৫২ আয়াতের আলোচনায় দেখা হয়েছে। সে মতে শাজার শব্দটি দুই লিঙ্গেই চলে। আর স্ত্রীলিঙ্গ এসেছে শব্দটিকে শাজারা, মানে একটি গাছ ধরে নেওয়ায়, কারণ এ শব্দ গোটা জাতকেও বোঝাতে পারে। তাঁর বাকি আলোচনা এসেছে এ আয়াতের অংশে।"
          },
          {
            "en": "There he gives the view of a grammarian of Kufa. Minha means from the tree, shajara. Had the verse said minhu, with a masculine pronoun, that too would have been correct, the pronoun then going back to shajar. As it stands, the feminine is a reference to shajar as well, because shajar is treated as feminine and as masculine, just as tamr, dates, is. On this account nothing irregular has happened: the word for the trees allows either pronoun, and the verse has used one of the two.",
            "bn": "সেখানে তিনি কুফার এক ভাষাবিদের মত তুলে ধরেন। মিনহা মানে গাছটি থেকে, অর্থাৎ শাজারা থেকে। আয়াতে যদি পুংলিঙ্গ সর্বনাম দিয়ে মিনহু বলা হতো, সেটাও শুদ্ধ হতো, তখন সর্বনাম ফিরত শাজার শব্দের দিকে। আর এখন যে স্ত্রীলিঙ্গ এসেছে, তা-ও শাজারকেই বোঝায়। কারণ শাজার শব্দ স্ত্রীলিঙ্গেও চলে, পুংলিঙ্গেও চলে, ঠিক যেমন চলে তামর, মানে খেজুর। এ ব্যাখ্যায় অস্বাভাবিক কিছু ঘটেনি। গাছের শব্দটা দুই সর্বনামই নিতে পারে, আয়াত তার একটি বেছে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Meaning One Way, Wording Another",
          "bn": "অর্থে এক লিঙ্গ, শব্দে আরেক"
        },
        "p": [
          {
            "en": "At-Tabari then gives his own judgement: the correct view, in his words, is the second. In fa-mali'una minha, the pronoun means the shajar and is made feminine for the meaning. Then in the very next verse, fa-sharibuna 'alayhi, drinking on top of it, the pronoun is masculine, following the outward wording of shajar. One collective noun is referred to twice, once by what it means and once by how it is spoken, and at-Tabari sees no clash between the two pronouns. On his reading the verse and its neighbour are two sides of one usage.",
            "bn": "এরপর তাবারী নিজের রায় দেন। তাঁর ভাষায়, সঠিক মত দ্বিতীয়টি। ফামালিউনা মিনহা কথায় সর্বনামটি শাজারকেই বোঝায়, তবে অর্থের দিকে তাকিয়ে তাকে স্ত্রীলিঙ্গ করা হয়েছে। আবার ঠিক পরের আয়াতে, ফাশারিবূনা আলাইহি, তার উপর পান করবে, সেখানে সর্বনাম পুংলিঙ্গ, কারণ সেখানে খেয়াল রাখা হয়েছে শাজার শব্দের বাহ্যিক রূপের দিকে। একই সমষ্টিবাচক শব্দের দিকে দুবার ইঙ্গিত করা হলো। একবার তার অর্থ ধরে, আরেকবার তার উচ্চারিত রূপ ধরে। তাবারী দুই সর্বনামের মধ্যে কোনো বিরোধ দেখেন না। তাঁর পাঠে এ আয়াত আর পরের আয়াত একই ভাষারীতির দুই দিক।"
          },
          {
            "en": "Al-Qurtubi, on this verse, gives a shorter account with a different emphasis, close to the first words of the Kufan view. Minha, he says, means from the tree, li-anna al-maqsud min al-shajar shajara, because what is intended by shajar is a tree. Where at-Tabari has the feminine follow the meaning of the collective, al-Qurtubi has it follow the single tree that the collective stands for. Both agree that the pronoun refers to the zaqqum and to nothing else. They differ in how they get there, and each is left here as he states it.",
            "bn": "কুরতুবী এ আয়াতে ছোট একটি ব্যাখ্যা দেন, তবে জোরটা একটু অন্য জায়গায়। তাঁর কথা কুফার ভাষাবিদের মতের শুরুর অংশের কাছাকাছি। তিনি বলেন, মিনহা মানে গাছটি থেকে, কারণ শাজার বলে উদ্দেশ্য একটি গাছ। তাবারীর মতে স্ত্রীলিঙ্গ এসেছে সমষ্টিবাচক শব্দের অর্থ ধরে। কুরতুবীর মতে এসেছে সেই একক গাছ ধরে, যার প্রতিনিধি এই সমষ্টিবাচক শব্দ। দুজনেই একমত যে সর্বনামটি জাক্কুমকেই বোঝায়, অন্য কিছুকে নয়। পার্থক্য শুধু সেখানে পৌঁছানোর পথে। দুজনের কথাই এখানে রাখা হলো যেভাবে তাঁরা বলেছেন।"
          },
          {
            "en": "Al-Qurtubi also comments on the phrase in 56:52 that this verse completes. The first min in min shajarin may be za'ida, an added particle, so that the verse would amount to eaters of trees of zaqqum. Or the object may be left unstated, as if it said eaters, from trees of zaqqum, of food. Either way, min zaqqum describes shajar, though he notes that its grammatical case works out differently under each reading. For this verse the result is simple: whether the trees or a food drawn from them, minha brings the filling back to the zaqqum.",
            "bn": "যে বাক্যাংশকে এ আয়াত পূর্ণ করে, ৫৬:৫২ আয়াতের সেই কথাটি নিয়েও কুরতুবী মন্তব্য করেন। মিন শাজারিন কথার প্রথম মিন হতে পারে অতিরিক্ত অব্যয়। তাহলে অর্থ দাঁড়ায়: জাক্কুম গাছই তারা খাবে। আবার হতে পারে খাওয়ার বস্তুটা উহ্য রাখা হয়েছে, যেন বলা হয়েছে: জাক্কুম গাছ থেকে খাবার খাবে। দুই অবস্থাতেই মিন জাক্কুম কথাটি শাজারের বিশেষণ। তবে তিনি জানান, কোন পাঠ ধরা হচ্ছে তার উপর নির্ভর করে শব্দটির বিভক্তি বদলায়। এ আয়াতের জন্য ফলাফল সহজ। গাছ নিজেই হোক বা তা থেকে নেওয়া খাবার, মিনহা পেট ভরানোকে ফিরিয়ে আনে জাক্কুমের কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Words Shared With al-Saffat",
          "bn": "সাফফাতের সঙ্গে মিলে যাওয়া তিন শব্দ"
        },
        "p": [
          {
            "en": "The verse has a near twin. In 37:66, in the passage on the tree in al-Saffat, the Qur'an says fa-innahum la-akiluna minha fa-mali'una minha l-butun: and indeed they will be eating from it and filling the bellies from it. The last three words there are the three words of this verse. The differences lie around them. Al-Saffat speaks of them rather than to you, and it names the tree with the singular shajara: shajaratu z-zaqqum in 37:62, innaha shajaratun in 37:64. There the feminine minha follows a feminine word, and it comes twice.",
            "bn": "এ আয়াতের প্রায় হুবহু একটি জোড়া আছে। সূরা সাফফাতে গাছটির আলোচনায় ৩৭:৬৬ আয়াতে কুরআন বলে: ফাইন্নাহুম লাআকিলূনা মিনহা ফামালিউনা মিনহাল বুতুন, তারা তা থেকে খাবে আর তা দিয়ে পেট ভরাবে। সেখানকার শেষ তিনটি শব্দ আর এ আয়াতের তিনটি শব্দ একই। পার্থক্য আশপাশে। সাফফাতে কথা বলা হয়েছে তাদের সম্পর্কে, সরাসরি সম্বোধনে নয়। আর সেখানে গাছের নাম এসেছে একবচন শাজারা দিয়ে: ৩৭:৬২ আয়াতে শাজারাতুয যাক্কুম, ৩৭:৬৪ আয়াতে ইন্নাহা শাজারাতুন। তাই সেখানে স্ত্রীলিঙ্গ মিনহা এসেছে স্ত্রীলিঙ্গ শব্দের পরেই, তাও দুবার।"
          },
          {
            "en": "The pronoun of the drink differs too. Al-Saffat goes on in 37:67: thumma inna lahum 'alayha la-shawban min hamim, then on top of it they will have a mixture of scalding water, with 'alayha, feminine. Al-Waqi'ah, which used the collective shajar, goes on with 'alayhi, masculine. The commentaries consulted for this verse do not set the two passages side by side, so this is an observation from the wording alone, which anyone can check. It sits easily with at-Tabari's account: in these two passages, the collective shajar takes both pronouns, the singular shajara only the feminine.",
            "bn": "পানীয়ের বেলায় সর্বনামও আলাদা। সাফফাত ৩৭:৬৭ আয়াতে এগিয়ে যায় এভাবে: সুম্মা ইন্না লাহুম আলাইহা লাশাওবাম মিন হামীম, তারপর তার উপর তাদের জন্য থাকবে ফুটন্ত পানির মিশ্রণ। এখানে আলাইহা, স্ত্রীলিঙ্গ। আর ওয়াকিআ, যেখানে এসেছে সমষ্টিবাচক শাজার, এগিয়ে যায় আলাইহি দিয়ে, পুংলিঙ্গ। এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই দুই অংশকে পাশাপাশি রেখে দেখায়নি। তাই এটা শুধু শব্দ থেকে করা একটা পর্যবেক্ষণ, যে কেউ মিলিয়ে দেখতে পারেন। তাবারীর ব্যাখ্যার সঙ্গে এটা সহজেই মেলে। এই দুই জায়গায় সমষ্টিবাচক শাজার দুই সর্বনামই নিয়েছে, আর একবচন শাজারা নিয়েছে কেবল স্ত্রীলিঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "Seized Before They Eat",
          "bn": "খাওয়ার আগে পাকড়াও"
        },
        "p": [
          {
            "en": "Ibn Kathir's note on this verse is a single sentence, and its verbs are passive: wa-dhalika annahum yuqbaduna wa-yusjaruna hatta ya'kulu min shajar al-zaqqum hatta yamla'u minha butunahum. That is, they are seized, and yusjarun, until they eat from the zaqqum trees, until they fill their bellies from it. The second verb is the one the Qur'an uses in 40:72 of those in the Fire: thumma fi n-nari yusjarun. Ibn Kathir does not gloss it, so it is left untranslated here rather than given a sense the fetched text does not state.",
            "bn": "এ আয়াতে ইবন কাসীরের মন্তব্য মাত্র একটি বাক্যের, আর তার ক্রিয়াগুলো কর্মবাচ্যে। তিনি লেখেন: তাদের পাকড়াও করা হবে, আর ইউসজারূন, যতক্ষণ না তারা জাক্কুম গাছ থেকে খায়, যতক্ষণ না তা দিয়ে নিজেদের পেট ভরিয়ে ফেলে। দ্বিতীয় ক্রিয়াটি কুরআন ব্যবহার করেছে ৪০:৭২ আয়াতে, জাহান্নামবাসীদের প্রসঙ্গে: সুম্মা ফিন নারি ইউসজারূন। ইবন কাসীর শব্দটির অর্থ খুলে বলেননি। তাই এখানেও এর অনুবাদ করা হলো না। সংগ্রহ করা লেখায় যে অর্থ নেই, তা চাপিয়ে দেওয়ার চেয়ে এটাই ভালো।"
          },
          {
            "en": "What the sentence does make plain is the shape of the scene. In his wording the eating is something that happens to them, not an appetite indulged, and two hatta clauses mark a limit reached in two stages: first the eating, then bellies full. Al-Baghawi, on this verse, does no more than repeat its words. None of the commentaries consulted for 56:53 attaches a hadith to it, so no narration is quoted here; the narration about zaqqum and its grading are discussed in the study of 44:43, and the reader is pointed there.",
            "bn": "বাক্যটি যা স্পষ্ট করে, তা হলো দৃশ্যের গড়ন। তাঁর ভাষায় খাওয়াটা তাদের সঙ্গে ঘটানো হচ্ছে, তারা রুচি মিটিয়ে খাচ্ছে না। আর দুবার আসা হাত্তা, মানে যতক্ষণ না, দুই ধাপে একটা সীমায় পৌঁছানো দেখায়: আগে খাওয়া, তারপর পেট ভরে যাওয়া। বাগাভী এ আয়াতে আয়াতের শব্দগুলো আবার উল্লেখ করা ছাড়া আর কিছু বলেননি। ৫৬:৫৩ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত হলো না। জাক্কুম বিষয়ক বর্ণনাটি আর তার মান নিয়ে আলোচনা আছে ৪৪:৪৩ আয়াতের পাঠে, পাঠককে সেখানে দেখতে বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hunger That Burns Within",
          "bn": "ভেতরে জ্বলতে থাকা ক্ষুধা"
        },
        "p": [
          {
            "en": "Why would anyone fill himself with a food the commentators count among the ugliest of trees? The Muyassar's answer, noted in the study of 56:52, is li-shiddat al-ju', from the severity of hunger. As-Sa'di, on this verse, gives the fullest answer among the sources. What made them eat it, hideous as it is, was al-ju' al-mufrit, an excessive hunger, alladhi yaltahibu fi akbadihim, which blazes in their livers, wa-takadu tanqati'u minhu af'idatuhum, and from which their hearts are almost torn apart.",
            "bn": "যে গাছকে তাফসীরকারেরা সবচেয়ে কুৎসিত গাছগুলোর একটি বলেছেন, তা দিয়ে কেউ পেট ভরাবে কেন? মুয়াসসারের উত্তর, যা ৫৬:৫২ আয়াতের পাঠে এসেছে: ক্ষুধার তীব্রতার কারণে। এ আয়াতে সবচেয়ে বিস্তারিত উত্তর দেন সা'দী। তিনি বলেন, এত জঘন্য হওয়া সত্ত্বেও যা তাদের এটা খেতে বাধ্য করেছে, তা হলো সীমাছাড়া ক্ষুধা। সে ক্ষুধা তাদের কলিজায় দাউদাউ করে জ্বলে, আর তার জ্বালায় তাদের অন্তর যেন ছিঁড়ে যাওয়ার উপক্রম হয়।"
          },
          {
            "en": "He then turns the description back on itself. Hadha al-ta'am alladhi yadfa'una bihi al-ju': this is the food with which they try to push the hunger away, and it is the food that la yusminu wa-la yughni min ju', neither nourishes nor avails against hunger. Those last words are the Qur'an's own, from 88:7, where they describe dari', named in 88:6 as the only food of those that passage speaks of. As-Sa'di borrows them here. The food fills the belly and leaves the hunger it was eaten for unanswered.",
            "bn": "তারপর তিনি বর্ণনাটাকে তার নিজের দিকেই ঘুরিয়ে দেন। এই সেই খাবার, যা দিয়ে তারা ক্ষুধা ঠেকাতে চায়। অথচ এটাই সেই খাবার, যা পুষ্টি দেয় না, ক্ষুধাও মেটায় না। শেষ কথাটুকু কুরআনেরই, ৮৮:৭ আয়াত থেকে নেওয়া। সেখানে এ বর্ণনা দাড়ী' নামের খাবারের, ৮৮:৬ আয়াত যাকে বলেছে ওই আয়াতে উল্লিখিত লোকদের একমাত্র খাবার। সা'দী কথাটা এখানে ধার করে এনেছেন। খাবারে পেট ভরে, কিন্তু যে ক্ষুধার জন্য খাওয়া, সে ক্ষুধা থেকেই যায়।"
          },
          {
            "en": "So the verse holds two things together. The bellies are full, as every paraphrase insists, and the hunger is not met, as as-Sa'di's borrowed words say. The next verses add thirst: the Muyassar describes water at the extreme of heat that does not quench thirst, drunk in quantity like camels that are never quenched because of an illness that afflicts them. Those verses have their own study. Here it is enough to see that the filling answers nothing, and that what follows it is a thirst of the same kind.",
            "bn": "তাই আয়াতটি দুটি জিনিস একসঙ্গে ধরে রাখে। পেট ভরা, প্রতিটি ভাষ্য যেটা জোর দিয়ে বলে। আবার ক্ষুধা মেটে না, সা'দীর ধার করা কথাগুলো যেটা বলে। পরের আয়াতগুলো যোগ করে পিপাসা। মুয়াসসার বর্ণনা দেয় চরম গরম পানির, যা পিপাসা মেটায় না। তারা তা পান করবে প্রচুর পরিমাণে, সেই পিপাসার্ত উটের মতো, যারা কোনো রোগের কারণে কখনো তৃপ্ত হয় না। সে আয়াতগুলোর আলাদা পাঠ আছে। এখানে এটুকু দেখাই যথেষ্ট যে পেট ভরানো কিছুই মেটায় না, আর তার পরে আসে একই ধরনের পিপাসা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Picture That Names No One",
          "bn": "যে ছবি কারও নাম নেয় না"
        },
        "p": [
          {
            "en": "The verse describes the end of those named in 56:51, the astray who deny, whom at-Tabari places among the companions of the left. It describes what the text describes. It licenses nothing against any living person or community, and it gives no one the right to say of a neighbour, a relative or a people that this meal is waiting for them. How each life ends is known to Allah alone, and the passage marks a course of straying and denial, not a group a reader may fill with names.",
            "bn": "আয়াতটি বর্ণনা করছে ৫৬:৫১ আয়াতে যাদের কথা বলা হয়েছে তাদের পরিণতি: পথভ্রষ্ট মিথ্যারোপকারীরা, তাবারী যাদের বাম দিকের লোকদের মধ্যে গণ্য করেন। আয়াত যা বলে, শুধু তা-ই বলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। প্রতিবেশী, আত্মীয় বা কোনো জাতি সম্পর্কে কেউ বলতে পারে না যে এই খাবার তাদের জন্য অপেক্ষা করছে। কার জীবন কীভাবে শেষ হবে, তা কেবল আল্লাহই জানেন। আয়াত দেখায় পথভ্রষ্টতা আর অস্বীকারের একটা পথ, এমন কোনো দল নয় যাতে পাঠক নাম বসাতে পারে।"
          },
          {
            "en": "What the verse may fairly do is turn the reader inward. Its scene is a hunger met by something that fills and does not nourish, and a reader may recognise that pattern in this life, where a person can keep reaching for what leaves him as empty as before. That is a reflection drawn from the picture, not a commentator's reading. The scene itself is told before the Day comes, while anyone who hears it can still turn, with whatever hunger he carries, towards Allah and the guidance He sent.",
            "bn": "আয়াত যা ন্যায্যভাবে করতে পারে, তা হলো পাঠককে নিজের দিকে ফেরানো। এর দৃশ্যে ক্ষুধার সামনে আসে এমন জিনিস, যা পেট ভরায় কিন্তু পুষ্টি দেয় না। এ দুনিয়াতেও পাঠক এই ধরনটা চিনতে পারেন। মানুষ বারবার এমন কিছুর দিকে হাত বাড়ায়, যা তাকে আগের মতোই ফাঁকা রেখে দেয়। এটা ছবি থেকে টানা একটা চিন্তা, কোনো তাফসীরকারের ব্যাখ্যা নয়। দৃশ্যটা শোনানো হচ্ছে সেই দিন আসার আগে। যে শোনে, সে এখনো ফিরতে পারে। যে ক্ষুধাই বয়ে বেড়াক, তা নিয়ে ফিরতে পারে আল্লাহর দিকে আর তাঁর পাঠানো হিদায়াতের দিকে।"
          }
        ]
      }
    ]
  },
  "56:60": {
    "sections": [
      {
        "h": {
          "en": "Death Enters the Argument",
          "bn": "যুক্তিতে মৃত্যুর প্রবেশ"
        },
        "p": [
          {
            "en": "Nahnu qaddarna baynakumu al-mawta wa ma nahnu bi-masbuqin: We have decreed death among you, and We are not to be outrun. The verse arrives in the middle of a case. 56:57 opens it: We created you, so why do you not affirm the truth? 56:58 and 56:59 press it on the drop a man emits: is it you who create it, or are We the Creator? Ma'arif al-Qur'an calls 56:57 the start of a series of arguments for Allah's Oneness and His power to raise the dead, the first drawn from a human being's birth from a drop.",
            "bn": "নাহনু কাদ্দারনা বাইনাকুমুল মাউতা ওয়া মা নাহনু বিমাসবূকীন: তোমাদের মধ্যে মৃত্যু আমিই নির্ধারণ করেছি, আর আমাকে কেউ পেছনে ফেলতে পারে না। আয়াতটি এসেছে একটা চলমান যুক্তির মাঝখানে। ৫৬:৫৭ সেই যুক্তি শুরু করে: আমিই তোমাদের সৃষ্টি করেছি, তবে কেন তোমরা সত্য মেনে নাও না? ৫৬:৫৮ ও ৫৬:৫৯ কথাটা চেপে ধরে মানুষের নিক্ষিপ্ত বীর্যবিন্দু দিয়ে: তা কি তোমরা সৃষ্টি কর, নাকি আমিই স্রষ্টা? মাআরিফুল কুরআনের মতে ৫৬:৫৭ থেকেই শুরু হয় আল্লাহর একত্ব আর মৃতকে জীবিত করার ক্ষমতার পক্ষে একের পর এক প্রমাণ। প্রথম প্রমাণটা নেওয়া হয়েছে এক ফোঁটা থেকে মানুষের জন্ম থেকে।"
          },
          {
            "en": "Al-Qurtubi names what this verse adds. He calls it an argument as well, ihtijaj: the One who is able to cause death is able to create, and once He is able to create He is able to raise. Death is set here not as a bare fact about mortals but as a further piece of evidence in the same case. After 56:62 the passage turns to the seed that is sown, then to the water brought down from the clouds in 56:69, then to the fire. Ma'arif reads those three as the food, water and fire on which life on earth depends.",
            "bn": "এ আয়াত নতুন কী যোগ করে, কুরতুবী তা নাম ধরে বলেন। তাঁর ভাষায় এটিও এক ইহতিজাজ, অর্থাৎ যুক্তি-প্রমাণ। যিনি মৃত্যু ঘটাতে পারেন, তিনি সৃষ্টিও করতে পারেন। আর যিনি সৃষ্টি করতে পারেন, তিনি আবার ওঠাতেও পারেন। তাই মৃত্যুর কথা এখানে মানুষের নশ্বরতা নিয়ে নিছক একটি তথ্য নয়, একই মামলার আরেকটি প্রমাণ। ৫৬:৬২-এর পর আলোচনা চলে যায় বোনা বীজের দিকে, তারপর ৫৬:৬৯ আয়াতে মেঘ থেকে নামানো পানির দিকে, তারপর আগুনের দিকে। মাআরিফুল কুরআন এই তিনটিকে দেখে খাদ্য, পানি আর আগুন হিসেবে, যার উপর পৃথিবীতে মানুষের জীবন টিকে আছে।"
          },
          {
            "en": "Ibn Kathir's abridged English commentary says the series answers those who denied the Resurrection, and quotes their words from 56:47: when we die and become dust and bones, shall we then be raised? The verses just before had described their meal from the tree of zaqqum (56:52), called their accommodation on the Day of Recompense (56:56). The verse describes what the text describes, a people condemned for that denial, and it licenses nothing against any living person or community. Its question is put to each reader's own heart.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর বলে, এই প্রমাণগুলো জবাব দেয় পুনরুত্থান অস্বীকারকারীদের। সেখানে ৫৬:৪৭ থেকে তাদের কথাও উদ্ধৃত হয়েছে: আমরা যখন মরে মাটি আর হাড় হয়ে যাব, তখনো কি আমাদের আবার ওঠানো হবে? এর ঠিক আগের আয়াতগুলো তাদের খাবারের বর্ণনা দিয়েছে। যাক্কুম গাছ থেকে খাওয়া (৫৬:৫২), আর প্রতিফল দিবসে সেটাই তাদের আপ্যায়ন (৫৬:৫৬)। আয়াতটি কেবল তা-ই বর্ণনা করে, যা পাঠে আছে: এক অস্বীকারের জন্য নিন্দিত একদল মানুষ। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। এর প্রশ্নটা প্রত্যেক পাঠকের নিজের অন্তরের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hastened for Some, Delayed for Others",
          "bn": "কারও আগে, কারও পরে"
        },
        "p": [
          {
            "en": "At-Tabari glosses qaddarna baynakumu al-mawt as: We decreed death among you, O people, hastening it for some and delaying it for others until a named term. He adds that the people of interpretation said the like, and gives Mujahid's gloss through two chains: al-musta'khir wa al-musta'jil, the one delayed and the one hastened. On this reading the decree is not one date shared by everybody. It is an allotment, a term set for each person, and the order in which those terms fall belongs to Him.",
            "bn": "তাবারী কাদ্দারনা বাইনাকুমুল মাউত-এর ব্যাখ্যা দেন এভাবে: হে মানুষ, তোমাদের মধ্যে মৃত্যু আমিই নির্ধারণ করেছি। কারও জন্য তা এগিয়ে এনেছি, কারও জন্য পিছিয়ে দিয়েছি এক নির্দিষ্ট মেয়াদ পর্যন্ত। তিনি জানান, তাফসীরের আলেমরাও এমনটাই বলেছেন। এরপর দুটি সনদে মুজাহিদের ব্যাখ্যা আনেন: আল-মুসতা'খির ওয়াল-মুসতা'জিল, যার মৃত্যু পিছিয়ে দেওয়া হয় আর যার মৃত্যু এগিয়ে আনা হয়। এই পাঠে ফয়সালাটা সবার জন্য একটি তারিখ নয়। প্রত্যেকের জন্য আলাদা মেয়াদ ঠিক করা আছে, আর কার মেয়াদ কখন ফুরাবে, সেই ক্রম কেবল তাঁরই হাতে।"
          },
          {
            "en": "Al-Baghawi gives Muqatil's version of the same thought in concrete terms: among you is one who reaches extreme old age, and among you is one who dies a child or a young man. Ibn Kathir, in his Arabic commentary, puts it in one verb: sarrafnahu baynakum, We dealt it out among you. Ma'arif al-Qur'an says Allah predetermines the time of each human death and has fixed a point up to which a person may live, and it warns against the fancy that power and free will can be enjoyed without end.",
            "bn": "একই কথা বাগাভী আনেন মুকাতিলের মুখে, একেবারে চোখে দেখা ভাষায়: তোমাদের কেউ পৌঁছে যায় চরম বার্ধক্যে, আবার কেউ মারা যায় শিশু বয়সে বা ভরা যৌবনে। ইবন কাসীর তাঁর আরবি তাফসীরে পুরো কথাটা বলেন একটি ক্রিয়ায়: সাররাফনাহু বাইনাকুম, অর্থাৎ আমি তা তোমাদের মধ্যে বণ্টন করে দিয়েছি। মাআরিফুল কুরআন বলে, প্রত্যেক মানুষের মৃত্যুর সময় আল্লাহ আগেই ঠিক করে রেখেছেন। কতদিন সে বাঁচবে, তার একটা সীমাও বেঁধে দেওয়া আছে। তাই ক্ষমতা আর নিজের ইচ্ছামতো চলার সুযোগ চিরকাল ভোগ করা যাবে, এমন ভ্রমে ডুবে থাকতে সেখানে নিষেধ করা হয়েছে।"
          },
          {
            "en": "Read this way, baynakum, among you, carries real weight. The deaths around a person come out of the order he would have chosen: the infant before the grandfather, the strong before the sick. The commentators do not explain that order; they place it inside the decree. What a reader may draw from it is modest and practical. Nobody's place in the sequence has been announced, so nobody may assume that his own turn is far off.",
            "bn": "এভাবে পড়লে বাইনাকুম, অর্থাৎ তোমাদের মধ্যে, শব্দটির ভার অনেক। মানুষের চারপাশে মৃত্যু আসে তার পছন্দের ক্রম মেনে নয়। দাদার আগে চলে যায় শিশু, রোগীর আগে সুস্থ-সবল মানুষ। তাফসীরকারেরা এই ক্রমের কারণ ব্যাখ্যা করেন না, তাঁরা একে রাখেন তাকদীরের ভেতরে। পাঠক এখান থেকে যা নিতে পারেন, তা ছোট কিন্তু কাজের কথা। এই সারিতে কার জায়গা কোথায়, তা কাউকে জানানো হয়নি। তাই নিজের পালা অনেক দূরে, এমন ধরে নেওয়ার সুযোগ কারও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Equal in Heaven and Earth",
          "bn": "আসমান-জমিনে সবাই সমান"
        },
        "p": [
          {
            "en": "A second gloss comes from ad-Dahhak, and four of the commentaries carry it. Ibn Kathir in Arabic and in the abridged English, al-Qurtubi and al-Baghawi all report him: Allah made the dwellers of the heavens and the dwellers of the earth equal in it. Here the stress falls on the evenness of the decree rather than on its timing. Death is not kept for the weak, the wicked or the poor. The dwellers of the heavens share it with the dwellers of the earth.",
            "bn": "দ্বিতীয় ব্যাখ্যাটি দাহহাকের, আর চারটি তাফসীর তা বহন করে। ইবন কাসীরের আরবি ও সংক্ষিপ্ত ইংরেজি তাফসীর, কুরতুবী আর বাগাভী সবাই তাঁর কথা উদ্ধৃত করেন: আল্লাহ মৃত্যুর ব্যাপারে আসমানবাসী আর জমিনবাসীকে সমান করে দিয়েছেন। এখানে জোর সময়ের উপর নয়, ফয়সালার সমতার উপর। মৃত্যু দুর্বল, পাপী বা গরিবের জন্য তোলা নেই। জমিনের বাসিন্দাদের মতো আসমানের বাসিন্দারাও এর ভাগীদার।"
          },
          {
            "en": "Al-Baghawi draws a consequence for the verb: on ad-Dahhak's reading, qaddarna means qadayna, We decreed. Al-Qurtubi lists further glosses: it is said, We decreed; it is said, We wrote. He calls the meanings close and states their shared upshot in a line: no one remains but He, Mighty and Majestic. Al-Baghawi and Ibn Kathir set ad-Dahhak beside the other gloss without ranking them. One stresses the timing of death across lives, the other its evenness across creation.",
            "bn": "বাগাভী এখান থেকে ক্রিয়াটির অর্থ টানেন: দাহহাকের পাঠে কাদ্দারনা মানে কাদাইনা, অর্থাৎ আমি ফয়সালা করে দিয়েছি। কুরতুবী আরও কয়েকটি ব্যাখ্যা উল্লেখ করেন। কেউ বলেছেন, আমি ফয়সালা করেছি। কেউ বলেছেন, আমি লিখে দিয়েছি। তাঁর মতে অর্থগুলো কাছাকাছি, আর সবগুলোর শেষ কথা এক লাইনে: মহান পরাক্রমশালী আল্লাহ ছাড়া কেউ টিকে থাকবে না। বাগাভী ও ইবন কাসীর দাহহাকের ব্যাখ্যা অন্য ব্যাখ্যাটির পাশেই রাখেন, কোনোটিকে এগিয়ে দেন না। একটি জোর দেয় জীবনে জীবনে মৃত্যুর সময়ের উপর, অন্যটি গোটা সৃষ্টিতে তার সমতার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "With a Shadda or Without",
          "bn": "তাশদীদসহ, তাশদীদ ছাড়া"
        },
        "p": [
          {
            "en": "The verb itself comes in two readings. Al-Qurtubi reports that Mujahid, Humayd, Ibn Muhaysin and Ibn Kathir read qadarna, with the dal light, and that the rest read qaddarna, with the dal doubled. Al-Baghawi names only Ibn Kathir for the light form, and says of the pair that they are two dialect forms, lughatan. The Ibn Kathir named here is the Makkan reader rather than the commentator quoted elsewhere in this article. The received text shown with this verse carries the doubled form.",
            "bn": "ক্রিয়াটি নিজেই দুই রকম কিরাআতে পড়া হয়েছে। কুরতুবী জানান, মুজাহিদ, হুমাইদ, ইবন মুহাইসিন ও ইবন কাসীর পড়েছেন কাদারনা, দাল হরফে তাশদীদ ছাড়া। বাকিরা পড়েছেন কাদ্দারনা, তাশদীদসহ। বাগাভী হালকা পাঠের জন্য কেবল ইবন কাসীরের নাম নেন, আর দুটি পাঠ সম্পর্কে বলেন: এগুলো দুটি আঞ্চলিক রূপ, লুগাতান। এখানে যে ইবন কাসীরের কথা, তিনি মক্কার কারী। এই লেখার অন্যত্র যে তাফসীরকারের কথা আসছে, তিনি নন। এই আয়াতের সঙ্গে যে প্রচলিত পাঠ দেখানো হয়, তাতে আছে তাশদীদসহ রূপটি।"
          },
          {
            "en": "Neither commentator builds a separate meaning on the lighter form. Al-Baghawi's word for the pair, two dialects, tells the reader that nothing is lost either way: the decreeing, the apportioning and the writing all stay in view. The point is small, but it shows how these commentators treat such variants. They record them, name the readers, and say plainly when the meaning does not move, which leaves the weight of the verse where its sentence puts it.",
            "bn": "হালকা পাঠের উপর দুজনের কেউই আলাদা কোনো অর্থ দাঁড় করান না। বাগাভী দুটিকে বলেছেন দুই আঞ্চলিক রূপ। এ থেকে পাঠক বোঝেন, যেভাবেই পড়া হোক, কিছু হারায় না। ফয়সালা, বণ্টন আর লিখে রাখা, সব অর্থই চোখের সামনে থাকে। ব্যাপারটা ছোট, তবু এতে দেখা যায় এমন ভিন্ন পাঠ এই তাফসীরকারেরা কীভাবে সামলান। তাঁরা পাঠটা লিখে রাখেন, কারীদের নাম বলেন, আর অর্থ না বদলালে সে কথাও সোজাসুজি জানিয়ে দেন। ফলে আয়াতের ভার থেকে যায় সেখানেই, যেখানে বাক্যটি তা রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Readings of Masbuqin",
          "bn": "মাসবূকীনের তিন রকম পাঠ"
        },
        "p": [
          {
            "en": "Wa ma nahnu bi-masbuqin. Masbuq is he who is outstripped, got ahead of, as al-Qurtubi's paraphrase, no one would outstrip Us, makes plain. The commentaries fetched for this verse fill the clause in three ways. At-Tabari keeps it with the decree of death: We are not outstripped, O people, in your persons and your terms, so that something in them slips past Us in the life and death We decreed. Rather, he says, nothing moves ahead of Our appointed term, and nothing is held back from it.",
            "bn": "ওয়া মা নাহনু বিমাসবূকীন। মাসবূক হলো সে, যাকে কেউ পেছনে ফেলে এগিয়ে গেছে। কুরতুবীর ব্যাখ্যার ভাষা, কেউ আমাকে ছাড়িয়ে যেতে পারত না, কথাটা পরিষ্কার করে দেয়। এই আয়াতের জন্য সংগৃহীত তাফসীরগুলো বাক্যটির তিনটি ভিন্ন অর্থ করে। তাবারী একে রাখেন মৃত্যুর ফয়সালার সঙ্গেই। তাঁর ব্যাখ্যায়: হে মানুষ, তোমাদের প্রাণ আর মেয়াদের ব্যাপারে কেউ আমাকে ছাড়িয়ে যেতে পারে না যে জীবন-মৃত্যুর যে ফয়সালা আমি করেছি, তার কিছু আমার নাগাল এড়িয়ে যাবে। বরং আমার নির্ধারিত মেয়াদ থেকে কিছুই এগোয় না, কিছুই পিছায় না।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi read it as a matter of being overpowered. Al-Qurtubi: if We wished to replace your likes, no one would outstrip Us, that is, no one would overcome Us; bi-masbuqin means bi-maghlubin, overcome. Al-Baghawi joins two words: not overcome, and not unable to destroy you and put others like you in your place. Ma'arif al-Qur'an renders the clause in the same direction: We cannot be frustrated from replacing you with others like you.",
            "bn": "কুরতুবী ও বাগাভী একে পড়েন পরাজিত হওয়ার অর্থে। কুরতুবীর ভাষায়: আমি যদি তোমাদের বদলে তোমাদের মতো অন্যদের আনতে চাই, কেউ আমাকে ছাড়িয়ে যেতে পারবে না, মানে কেউ আমাকে হারাতে পারবে না। বিমাসবূকীন মানে বিমাগলূবীন, পরাভূত। বাগাভী দুটি শব্দ একসঙ্গে আনেন: আমি পরাভূত নই, আর তোমাদের ধ্বংস করে তোমাদের জায়গায় তোমাদের মতো অন্যদের আনতেও অক্ষম নই। মাআরিফুল কুরআনও বাক্যটির অনুবাদ করে একই দিকে: তোমাদের বদলে তোমাদের মতো অন্যদের আনা থেকে আমাকে কেউ ব্যর্থ করতে পারবে না।"
          },
          {
            "en": "Ibn Kathir in Arabic gives the third and plainest gloss: wa ma nahnu bi-'ajizin, and We are not unable; the abridged English says, We are never unable. The Muyassar says the same: We are not unable to change your creation on the Day of Resurrection. So the clause is read as no one escaping the term He set (at-Tabari), as no rival overtaking Him in replacing a people (al-Qurtubi, al-Baghawi), and as no incapacity in Him at all (Ibn Kathir, the Muyassar). The sources leave the three standing, and so does this article.",
            "bn": "ইবন কাসীর আরবিতে তৃতীয় এবং সবচেয়ে সরল ব্যাখ্যাটি দেন: ওয়া মা নাহনু বি'আজিযীন, আমি অক্ষম নই। সংক্ষিপ্ত ইংরেজি তাফসীরের ভাষায়, আমি কখনোই অক্ষম নই। মুয়াসসারও একই কথা বলে: কিয়ামতের দিন তোমাদের সৃষ্টি বদলে দিতে আমি অক্ষম নই। তাহলে বাক্যটির পাঠ দাঁড়ায় তিনটি। তাবারীর মতে, তাঁর বেঁধে দেওয়া মেয়াদ কেউ এড়াতে পারে না। কুরতুবী ও বাগাভীর মতে, এক জাতিকে বদলে দেওয়ার কাজে কোনো প্রতিপক্ষ তাঁকে ছাড়িয়ে যেতে পারে না। ইবন কাসীর ও মুয়াসসারের মতে, তাঁর মধ্যে কোনো অক্ষমতাই নেই। উৎসগুলো তিনটিকেই রেখে দিয়েছে, এই লেখাও তা-ই করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence Crosses the Break",
          "bn": "বাক্যটি আয়াতের সীমা পেরোয়"
        },
        "p": [
          {
            "en": "The verse ends, but its sentence does not. 56:61 continues: 'ala an nubaddila amthalakum wa nunshi'akum fi ma la ta'lamun, from changing your likenesses and producing you in what you do not know. At-Tabari quotes wa ma nahnu bi-masbuqin 'ala an nubaddila amthalakum as one phrase, and the Muyassar explains both verses in a single sentence. Whichever sense the reader gives masbuqin, the clause is completed only on the far side of the verse number.",
            "bn": "আয়াত শেষ হয়, কিন্তু বাক্য শেষ হয় না। ৫৬:৬১ কথাটা টেনে নিয়ে যায়: 'আলা আন নুবাদ্দিলা আমছালাকুম ওয়া নুনশিআকুম ফী মা লা তা'লামূন, অর্থাৎ তোমাদের মতো সত্তাগুলোকে বদলে দেওয়া আর তোমরা জানো না এমন অবস্থায় তোমাদের নতুন করে গড়া থেকে। তাবারী ওয়া মা নাহনু বিমাসবূকীন 'আলা আন নুবাদ্দিলা আমছালাকুম পুরোটা এক টানে উদ্ধৃত করেন। মুয়াসসারও দুই আয়াতের ব্যাখ্যা দেয় একটিমাত্র বাক্যে। মাসবূকীনের যে অর্থই ধরা হোক, বাক্যটা পূর্ণ হয় আয়াত-চিহ্নের ওপারে গিয়ে।"
          },
          {
            "en": "The commentators then divide over nubaddila amthalakum. Al-Baghawi reads it as replacement: We are not unable to destroy you and bring others like you in your place. Ma'arif al-Qur'an reads it the same way: Allah can remove a person at any time and create another people in his place. Ibn Kathir's abridged English reads it as a change in the same people: to change your current shapes, on the Day of Resurrection. The Muyassar agrees with him: to change your creation on the Day of Resurrection.",
            "bn": "এরপর নুবাদ্দিলা আমছালাকুম নিয়ে তাফসীরকারদের পথ আলাদা হয়ে যায়। বাগাভী একে পড়েন বদলি অর্থে: তোমাদের ধ্বংস করে তোমাদের জায়গায় তোমাদের মতো অন্যদের আনতে আমি অক্ষম নই। মাআরিফুল কুরআনও একই পথে চলে। তার ভাষায়, আল্লাহ যেকোনো সময় একজনকে সরিয়ে তার জায়গায় আরেক জাতি সৃষ্টি করতে পারেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর একে পড়ে একই মানুষের পরিবর্তন হিসেবে: কিয়ামতের দিন তোমাদের এখনকার আকৃতি বদলে দেওয়া। মুয়াসসারও তাঁর সঙ্গে একমত: কিয়ামতের দিন তোমাদের সৃষ্টি বদলে দেওয়া।"
          },
          {
            "en": "The two readings face different ways. One is a warning about this world: the generation that denies can be swept aside and another set in its place. The other is a statement about the next: the same people will be raised, but not in the shape they now wear. Both answer the denial quoted in 56:47, one through power over the living and one through power over the dead. The sources give no ruling between them, and none is given here.",
            "bn": "দুই পাঠ দুই দিকে মুখ করে আছে। একটি এই দুনিয়া নিয়ে সতর্কবাণী: যে প্রজন্ম অস্বীকার করে, তাদের সরিয়ে অন্যদের বসিয়ে দেওয়া যায়। অন্যটি পরকাল নিয়ে একটি ঘোষণা: সেই একই মানুষদের ওঠানো হবে, তবে এখনকার চেহারায় নয়। দুটিই ৫৬:৪৭-এ উদ্ধৃত অস্বীকারের জবাব। একটি জবাব দেয় জীবিতদের উপর তাঁর ক্ষমতা দিয়ে, অন্যটি মৃতদের উপর তাঁর ক্ষমতা দিয়ে। উৎসগুলো এর মধ্যে কোনো রায় দেয়নি, এখানেও দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Forms Not Yet Known",
          "bn": "যে আকৃতি এখনো অজানা"
        },
        "p": [
          {
            "en": "Wa nunshi'akum fi ma la ta'lamun: and produce you in what you do not know. Ibn Kathir's abridged English glosses it as shapes and forms. The Muyassar says attributes and states that you do not know, and sets them on the Day of Resurrection. Ma'arif al-Qur'an widens it: Allah can reshape a person in a form now unknown to him, whether by his turning to dust after death or by being changed into an animal shape by way of punishment, as happened in past nations.",
            "bn": "ওয়া নুনশিআকুম ফী মা লা তা'লামূন: আর তোমাদের গড়ব এমন অবস্থায়, যা তোমরা জানো না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এর অর্থ করে আকৃতি ও রূপ। মুয়াসসার বলে, এমন গুণ ও অবস্থা, যা তোমরা জানো না, আর একে রাখে কিয়ামতের দিনে। মাআরিফুল কুরআন অর্থটা আরও প্রশস্ত করে। আল্লাহ মানুষকে এমন রূপ দিতে পারেন, যা এখন তার অজানা। মৃত্যুর পর মাটি হয়ে যাওয়া হতে পারে সেই রূপ। আবার অতীতের কিছু জাতির বেলায় যেমন ঘটেছিল, শাস্তি হিসেবে পশুর আকৃতিতে বদলে যাওয়াও হতে পারে।"
          },
          {
            "en": "Ma'arif names those past nations as people turned into monkeys and swine. The verse describes what the text describes, a punishment that befell particular people in their own history, and it licenses nothing against any living person or community. Then 56:62 closes the unit: you have known the first creation, so why do you not remember? Ibn Kathir's abridged English sets beside it 36:78 and 36:79, where whoever asks who will revive rotten bones is told: He who produced them the first time.",
            "bn": "মাআরিফুল কুরআন সেই অতীত জাতিগুলোর কথা বলে এভাবে: কাউকে বানর, কাউকে শূকরে পরিণত করা হয়েছিল। আয়াতটি কেবল তা-ই বর্ণনা করে, যা পাঠে আছে: নির্দিষ্ট কিছু মানুষের উপর তাদের নিজেদের ইতিহাসে নেমে আসা এক শাস্তি। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। এরপর ৫৬:৬২ অংশটির সমাপ্তি টানে: প্রথম সৃষ্টির কথা তো তোমরা জেনেছ, তবু কেন মনে আনো না? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এর পাশে রাখে ৩৬:৭৮ ও ৩৬:৭৯। সেখানে যে প্রশ্ন তোলে, পচে যাওয়া হাড়ে কে প্রাণ দেবে, তাকে বলা হয়: যিনি প্রথমবার এগুলো সৃষ্টি করেছেন, তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside a Measured Term",
          "bn": "মাপা মেয়াদের ভেতরে জীবন"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is quoted here. Elsewhere the Qur'an states the certainty itself, every soul shall taste death (3:185, 21:35), and those verses have their own articles; no commentary fetched here cites them on 56:60. What this verse adds is the speaker. We decreed it, and We are not outrun: death is set out as His act, measured and dealt out, not as an accident that befalls bodies.",
            "bn": "এই আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হচ্ছে না। কুরআনের অন্যত্র নিশ্চয়তার কথাটা সরাসরিই আছে: প্রত্যেক প্রাণকে মৃত্যুর স্বাদ নিতে হবে (৩:১৮৫, ২১:৩৫)। সেই আয়াতগুলোর নিজস্ব আলোচনা আছে, আর এখানে সংগৃহীত কোনো তাফসীর ৫৬:৬০-এর ব্যাখ্যায় সেগুলো উল্লেখ করেনি। এ আয়াত যা যোগ করে, তা হলো বক্তার পরিচয়। আমিই তা নির্ধারণ করেছি, আর আমাকে কেউ পেছনে ফেলতে পারে না। মৃত্যু এখানে তাঁর কাজ, মেপে ঠিক করা আর ভাগ করে দেওয়া। শরীরের উপর হঠাৎ এসে পড়া কোনো দুর্ঘটনা নয়।"
          },
          {
            "en": "Its teaching for a reader comes straight from the glosses. If death is hastened for some and delayed for others, as at-Tabari and Mujahid say, then no one knows his place in the line, and the young cannot lean on their youth. If it is made equal for the dwellers of heaven and earth, as ad-Dahhak says, then no rank exempts anyone. And if He who decreed it cannot be outrun or overcome, then the end of a life is not the end of His reach over it.",
            "bn": "পাঠকের জন্য এর শিক্ষা সরাসরি এই ব্যাখ্যাগুলো থেকেই আসে। তাবারী ও মুজাহিদ যেমন বলেন, মৃত্যু যদি কারও জন্য এগিয়ে আনা হয় আর কারও জন্য পিছিয়ে দেওয়া হয়, তাহলে সারিতে নিজের জায়গা কেউ জানে না। তরুণেরাও তাদের যৌবনের উপর ভরসা করে বসে থাকতে পারে না। দাহহাক যেমন বলেন, আসমান-জমিনের সব বাসিন্দাকে যদি এতে সমান করা হয়, তাহলে কোনো মর্যাদাই কাউকে রেহাই দেয় না। আর যিনি এর ফয়সালা করেছেন, তাঁকে যদি কেউ ছাড়িয়ে যেতে বা হারাতে না পারে, তাহলে জীবনের শেষ মানে মানুষের উপর তাঁর নাগালের শেষ নয়।"
          },
          {
            "en": "The passage turns all of this into a question rather than a threat: so why do you not affirm, so why do you not remember? A reader answers it by spending the measured days on what is worth carrying to the appointment. The same surah soon swears that this is a noble Qur'an (56:77), the book in which the question is asked, and the answer begins with taking that book seriously while each person's set term is still running.",
            "bn": "এই অংশ পুরো কথাটাকে হুমকি হিসেবে নয়, প্রশ্ন হিসেবে সামনে রাখে: তবে কেন সত্য মেনে নাও না, তবে কেন মনে আনো না? পাঠক এর জবাব দেন মাপা দিনগুলো এমন কাজে খরচ করে, যা নির্ধারিত সেই সময়ে সঙ্গে নিয়ে যাওয়ার মতো। একটু পরেই একই সূরা শপথ করে বলে, এ এক সম্মানিত কুরআন (৫৬:৭৭)। প্রশ্নটা করা হয়েছে এই কিতাবেই। তাই জবাবের শুরু হলো, প্রত্যেকের বেঁধে দেওয়া মেয়াদ ফুরানোর আগেই এই কিতাবকে গুরুত্বের সঙ্গে নেওয়া।"
          }
        ]
      }
    ]
  },
  "56:62": {
    "sections": [
      {
        "h": {
          "en": "Where the Case Comes to Rest",
          "bn": "যুক্তি যেখানে এসে থামে"
        },
        "p": [
          {
            "en": "Wa-laqad 'alimtumu an-nash'ata al-ula fa-lawla tadhakkarun: and you have already known the first creation, so why do you not remember? Six words close the passage that 56:57 opened with We have created you, so why do you not believe? The two verses face each other. Each turns on the listener's own making, and each ends in fa-lawla, the particle that asks why something has not been done. What changes is the response demanded: there, to affirm the truth; here, to remember.",
            "bn": "ওয়া লাকাদ আলিমতুমুন নাশআতাল উলা ফালাওলা তাযাক্কারূন: তোমরা তো প্রথম সৃষ্টির কথা জেনেছ, তবু কেন মনে আনো না? মাত্র ছয়টি শব্দে শেষ হয় সেই আলোচনা, যা ৫৬:৫৭ শুরু করেছিল এই কথায়: আমিই তোমাদের সৃষ্টি করেছি, তবে কেন বিশ্বাস করো না? দুটি আয়াত যেন মুখোমুখি দাঁড়িয়ে। দুটোরই কেন্দ্রে শ্রোতার নিজের সৃষ্টি, দুটোই শেষ হয় ফালাওলা দিয়ে, যা জানতে চায় কাজটা কেন হলো না। বদলায় শুধু দাবিটা। সেখানে চাওয়া হয়েছিল সত্যকে মেনে নেওয়া, এখানে চাওয়া হচ্ছে মনে আনা।"
          },
          {
            "en": "Who is being asked? At-Tabari reads the address as general, glossing the verse with ayyuha an-nas, O people, both at its opening and at fa-lawla tadhakkarun. The abridged English Ibn Kathir opens the whole passage, 56:57 to 56:62, by tying it to the deniers quoted in 56:47, who asked whether, once dust and bones, they would be raised. Ma'arif al-Qur'an likewise says this set of verses warns those who deny the Day of Judgment and life after death. The two framings sit together: the argument answers a denial, and at-Tabari lets it reach every hearer.",
            "bn": "প্রশ্নটা কাকে করা হচ্ছে? তাবারী সম্বোধনটাকে সবার জন্য ধরেন। আয়াতের শুরুতে এবং ফালাওলা তাযাক্কারূন অংশে, দুই জায়গাতেই তিনি ব্যাখ্যায় যোগ করেন আইয়ুহান নাস, হে মানুষ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫৬:৫৭ থেকে ৫৬:৬২ পর্যন্ত গোটা অংশের আলোচনা শুরু করে ৫৬:৪৭ আয়াতে উদ্ধৃত অস্বীকারকারীদের কথা দিয়ে। তারা জানতে চেয়েছিল, মাটি আর হাড় হয়ে যাওয়ার পর কি আবার ওঠানো হবে? মাআরিফুল কুরআনও বলে, এই আয়াতগুলো সতর্ক করছে তাদের, যারা বিচারদিবস আর মৃত্যুর পরের জীবন অস্বীকার করে। দুই দৃষ্টিভঙ্গি পাশাপাশি চলে। যুক্তিটা এক অস্বীকারের জবাব, আর তাবারী তা পৌঁছে দেন প্রত্যেক শ্রোতার কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Appealing to What Is Conceded",
          "bn": "যা মেনে নেওয়া, তার কাছেই আবেদন"
        },
        "p": [
          {
            "en": "The verb is 'alimtum, you have known, in the past tense: the knowledge is already in hand. The verse does not ask the listener to accept a claim on report. It points to something he holds without being told. At-Tabari spells out what that is: the first bringing-into-being, al-ihdatha al-ula, which We brought about for you, when before it you were nothing. Al-Baghawi says the same in fewer words: the first making, al-khilqa al-ula, when you were nothing.",
            "bn": "ক্রিয়াটি আলিমতুম, তোমরা জেনেছ। অতীত কালের ক্রিয়া, অর্থাৎ জ্ঞানটা আগে থেকেই হাতে আছে। আয়াতটি শ্রোতাকে শোনা কথার উপর কিছু মেনে নিতে বলছে না। সে এমন জিনিসের দিকে আঙুল তুলছে, যা কেউ বলে না দিলেও শ্রোতা জানে। সেটা কী, তাবারী খুলে বলেন: প্রথম অস্তিত্বদান, আল-ইহদাসাতুল উলা, যা আমি তোমাদের দিয়েছি, অথচ তার আগে তোমরা কিছুই ছিলে না। বাগাভী একই কথা বলেন আরও সংক্ষেপে: প্রথম গড়ন, আল-খিলকাতুল উলা, যখন তোমরা কিছুই ছিলে না।"
          },
          {
            "en": "Ibn Kathir widens the inventory. You have known, he paraphrases, that Allah brought you into being after you were not a thing worth mentioning, created you, and gave you hearing, sight and hearts. Set beside the verse, the list makes a quiet point: the evidence is not far away. It is the very faculty with which the listener hears the question. Whoever disputes a second making does so with ears, eyes and a heart that he did not make the first time.",
            "bn": "ইবন কাসীর তালিকাটা আরও বড় করেন। তাঁর ব্যাখ্যায় কথাটা এমন: তোমরা জানো, তোমরা উল্লেখ করার মতো কিছুই ছিলে না, তারপর আল্লাহ তোমাদের অস্তিত্বে এনেছেন, সৃষ্টি করেছেন, আর দিয়েছেন শোনার শক্তি, দেখার শক্তি ও হৃদয়। আয়াতের পাশে রাখলে তালিকাটা চুপচাপ একটা কথা বলে যায়। প্রমাণ দূরে কোথাও নেই। যে কান দিয়ে শ্রোতা প্রশ্নটা শুনছে, প্রমাণ সেই কানটাই। দ্বিতীয়বার সৃষ্টির কথা যে অস্বীকার করে, সে তা করে এমন কান, চোখ আর হৃদয় দিয়ে, যা প্রথমবার সে নিজে বানায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Glosses for the Beginning",
          "bn": "শুরুর তিন ব্যাখ্যা"
        },
        "p": [
          {
            "en": "What exactly is the first creation? The commentators consulted for this verse give three answers. The first is the plainest: your own coming into existence from nothing. At-Tabari reports it from Mujahid through two chains that meet at Ibn Abi Najih, in the words idh lam takunu shay'an, when you were nothing, and says the people of interpretation held the like of his own reading. Al-Baghawi and the Muyassar gloss the phrase in the same way.",
            "bn": "প্রথম সৃষ্টি বলতে ঠিক কী বোঝানো হয়েছে? এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তাতে তিনটি উত্তর পাওয়া যায়। প্রথমটা সবচেয়ে সোজা: শূন্য থেকে তোমার নিজের অস্তিত্বে আসা। তাবারী এটি মুজাহিদ থেকে বর্ণনা করেন দুই সনদে, যা ইবন আবী নাজীহের কাছে গিয়ে মিলেছে। মুজাহিদের কথাটা ছিল ইয লাম তাকূনূ শাইআন, যখন তোমরা কিছুই ছিলে না। তাবারী আরও বলেন, তাফসীরকারেরা তাঁর ব্যাখ্যার কাছাকাছি কথাই বলেছেন। বাগাভী আর মুয়াসসারও শব্দটার ব্যাখ্যা দেন এভাবেই।"
          },
          {
            "en": "Al-Qurtubi fills that nothing in with stages. The first creation, he writes, is when you were created from a nutfah, then from an 'alaqah, then from a mudghah, when you were nothing, and he credits this to Mujahid and others. Here the beginning is not a single moment but a course a person passes through before birth. It also lets the verse look back to 56:58 and 56:59, which have just set before the listener the drop that is emitted.",
            "bn": "কুরতুবী সেই শূন্যতাকে কয়েকটি ধাপে ভাগ করে দেখান। তাঁর ভাষায় প্রথম সৃষ্টি হলো যখন তোমাদের বানানো হয়েছিল নুতফা থেকে, তারপর আলাকা থেকে, তারপর মুদগা থেকে, অথচ তোমরা কিছুই ছিলে না। এ ব্যাখ্যা তিনি মুজাহিদ ও অন্যদের নামে উল্লেখ করেন। এখানে শুরু মানে একটি মুহূর্ত নয়, জন্মের আগে মানুষ যে পথ পার হয়ে আসে সেই পুরো পথ। এতে আয়াতটি পেছনে ফিরে ৫৬:৫৮ ও ৫৬:৫৯ আয়াতের সঙ্গে মিলে যায়, যেখানে এইমাত্র শ্রোতার সামনে রাখা হয়েছে নিক্ষিপ্ত বীর্যের কথা।"
          },
          {
            "en": "The third answer looks further back. At-Tabari reports from Qatada, by two routes, that the first creation is the creation of Adam (AS), and in one of them Qatada adds: you will not ask anyone among creation but he will tell you that Allah created Adam from clay. That line explains why the verse can call it known. At-Tabari also reports Abu 'Imran al-Jawni, reciting the verse, saying it is the creation of Adam, and al-Qurtubi names Qatada and ad-Dahhak for this reading. The sources set the readings side by side, and so does this article.",
            "bn": "তৃতীয় উত্তর আরও পেছনে তাকায়। তাবারী কাতাদা থেকে দুই সূত্রে বর্ণনা করেন, প্রথম সৃষ্টি মানে আদম (আঃ)-এর সৃষ্টি। একটি সূত্রে কাতাদা আরও বলেন: সৃষ্টিজগতের যাকেই জিজ্ঞেস করবে, সে-ই জানাবে যে আল্লাহ আদমকে মাটি থেকে বানিয়েছেন। আয়াতটি কেন একে জানা বিষয় বলতে পারে, এ কথায় তা বোঝা যায়। তাবারী আবু ইমরান আল-জাওনীর কথাও আনেন। তিনি আয়াতটি তিলাওয়াত করে বলেছিলেন, এটা আদমের সৃষ্টি। কুরতুবী এ ব্যাখ্যার জন্য কাতাদা ও দাহহাকের নাম নেন। তাফসীরকারেরা ব্যাখ্যাগুলো পাশাপাশি রেখেছেন, এ লেখাও সেভাবেই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question in Fa-lawla",
          "bn": "ফালাওলার ভেতরের প্রশ্ন"
        },
        "p": [
          {
            "en": "Fa-lawla tadhakkarun. At-Tabari, al-Qurtubi and the Muyassar all render lawla here with halla, a word that asks why something has not been done, and Ibn Kathir does the same. The demand is tadhakkarun, to remember and take to heart. It is not a request to learn something new. A thing is known and lies unused, and the verse asks why it has not been carried into the very question the deniers were asking about dust and bones.",
            "bn": "ফালাওলা তাযাক্কারূন। তাবারী, কুরতুবী আর মুয়াসসার, তিনজনই এখানে লাওলার অর্থ করেন হাল্লা দিয়ে। শব্দটা জানতে চায়, কাজটা কেন করা হলো না। ইবন কাসীরও একই শব্দ ব্যবহার করেন। দাবিটা হলো তাযাক্কারূন, মনে আনা, অন্তরে গেঁথে নেওয়া। নতুন কিছু শেখার অনুরোধ এটা নয়। একটা জিনিস জানা আছে, কিন্তু পড়ে আছে অকেজো হয়ে। আয়াতটি জিজ্ঞেস করে, মাটি আর হাড় নিয়ে অস্বীকারকারীরা যে প্রশ্ন তুলছিল, সেই প্রশ্নের ভেতরে এই জানাটা কেন নিয়ে যাওয়া হলো না?"
          },
          {
            "en": "The sources agree on where the remembering should arrive, and each says it in his own words. At-Tabari: that He who produced you the first time, when you were nothing, is not prevented from restoring you alive after your death and passing away. Al-Baghawi puts it in Allah's own voice: that I am able to restore you as I was able to bring you into being. The Muyassar names it as Allah's power to bring you into being once more.",
            "bn": "মনে আনার পর কোন সিদ্ধান্তে পৌঁছানোর কথা, সে বিষয়ে সূত্রগুলো একমত, তবে প্রত্যেকে বলেন নিজের ভাষায়। তাবারীর কথা: যিনি প্রথমবার তোমাদের অস্তিত্বে এনেছেন, যখন তোমরা কিছুই ছিলে না, তোমাদের মৃত্যু আর বিলীন হয়ে যাওয়ার পর জীবিত অবস্থায় ফিরিয়ে আনা তাঁর জন্য অসম্ভব নয়। বাগাভী কথাটা রাখেন আল্লাহর নিজের জবানে: আমি যেমন তোমাদের প্রথমবার বানাতে পেরেছি, তেমনি ফিরিয়ে আনতেও পারি। মুয়াসসার বলে, তোমাদের আরেকবার অস্তিত্বে আনার যে ক্ষমতা আল্লাহর আছে, সেটাই মনে আনার বিষয়।"
          },
          {
            "en": "As-Sa'di names the method itself. Allah, he writes, referred them to reasoning from the first creation to the other creation, an-nash'a al-ukhra, and he states the conclusion as a rule: He who is able to begin your creation is able to restore you. On this reading the verse does not answer the deniers with a description of the Hour. It hands them the premise they already hold and leaves them to draw the inference themselves.",
            "bn": "সা'দী পদ্ধতিটার নামই বলে দেন। তাঁর ভাষায়, আল্লাহ তাদের পাঠিয়ে দিয়েছেন প্রথম সৃষ্টি থেকে পরের সৃষ্টি, আন-নাশআতুল উখরা, পর্যন্ত যুক্তি টানার দিকে। সিদ্ধান্তটা তিনি নিয়মের মতো করে বলেন: যিনি তোমাদের সৃষ্টির সূচনা করতে পারেন, তিনি তোমাদের ফিরিয়েও আনতে পারেন। এই পাঠে আয়াতটি কিয়ামতের বিবরণ দিয়ে অস্বীকারকারীদের জবাব দেয় না। যে ভিত্তি তারা আগেই মানে, সেটাই তাদের হাতে তুলে দেয়, আর ফলটা নিজেদের বের করে নিতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "All the More So",
          "bn": "তাহলে তো আরও সহজে"
        },
        "p": [
          {
            "en": "Ibn Kathir sharpens the inference. He who had power over this creation, he says, which is the beginning, al-bada'a, has power over the other creation, which is the return, al-i'ada, bi-tariq al-awla wa-l-ahra: all the more so, with greater reason still. The second making is not treated as an equal feat to be proved afresh, but as following from the first. He then cites 30:27: it is He who begins creation, then repeats it, and that is easier for Him.",
            "bn": "ইবন কাসীর যুক্তিটাকে আরও ধারালো করেন। তাঁর কথায়, যিনি এই সৃষ্টির উপর ক্ষমতা রাখেন, যা হলো সূচনা, আল-বাদাআ, তিনি পরের সৃষ্টির উপরও ক্ষমতা রাখেন, যা হলো ফিরিয়ে আনা, আল-ইআদা। আর তা বিতারীকিল আওলা ওয়াল আহরা, অর্থাৎ আরও বেশি যুক্তিসংগতভাবে। দ্বিতীয় সৃষ্টিকে এখানে আলাদা করে প্রমাণ করার মতো সমান কঠিন কাজ ধরা হয়নি। সেটা প্রথমটার ভেতর থেকেই বেরিয়ে আসে। তারপর তিনি ৩০:২৭ উদ্ধৃত করেন: তিনিই সৃষ্টির সূচনা করেন, তারপর আবার তা করবেন, আর সেটা তাঁর জন্য আরও সহজ।"
          },
          {
            "en": "His next citation, 19:67, uses the same root as this verse's last word: does man not remember, yadhkuru, that We created him before, when he was nothing? Then come 36:77 to 36:79, where man forgets his own creation and asks who will give life to bones that have crumbled, and is told: He will give them life who produced them, ansha'aha, the first time. That verb shares its root with an-nash'a here, so the answer in Ya-Sin speaks in this verse's vocabulary.",
            "bn": "তাঁর পরের উদ্ধৃতি ১৯:৬৭, যেখানে এ আয়াতের শেষ শব্দটির ধাতুই ফিরে আসে: মানুষ কি মনে করে না, ইয়াযকুরু, যে আমি তাকে আগে সৃষ্টি করেছি, অথচ সে কিছুই ছিল না? তারপর আসে ৩৬:৭৭ থেকে ৩৬:৭৯। সেখানে মানুষ নিজের সৃষ্টির কথা ভুলে গিয়ে জানতে চায়, পচে গলে যাওয়া হাড়ে কে প্রাণ দেবে? জবাব আসে: তিনিই প্রাণ দেবেন, যিনি প্রথমবার এগুলো বানিয়েছেন, আনশাআহা। এ ক্রিয়ার ধাতু আর এখানকার আন-নাশআর ধাতু একই। তাই সূরা ইয়াসীনের জবাব এ আয়াতের শব্দভান্ডারেই কথা বলে।"
          },
          {
            "en": "Last, he cites 75:36 to 75:40, which runs through the drop of semen emitted, the clinging clot, the fashioning and the pairing into male and female, and closes: is not that One able to give life to the dead? Read together, these passages show the argument of this verse recurring in one shape. Each sets the beginning a person cannot deny beside the return he denies, and leaves him to close the gap between them.",
            "bn": "সবশেষে তিনি আনেন ৭৫:৩৬ থেকে ৭৫:৪০। সেখানে একে একে আসে নিক্ষিপ্ত বীর্যের ফোঁটা, ঝুলে থাকা রক্তপিণ্ড, গড়ন আর সুঠাম করা, তারপর নর ও নারী জোড়া বানানো। শেষ প্রশ্নটা: তিনি কি মৃতকে জীবিত করতে সক্ষম নন? একসঙ্গে পড়লে বোঝা যায়, এ আয়াতের যুক্তিটা কুরআনে একই চেহারায় বারবার আসে। প্রতিবার মানুষের সামনে রাখা হয় এমন শুরু, যা সে অস্বীকার করতে পারে না, আর তার পাশে এমন ফেরা, যা সে অস্বীকার করে। মাঝের ফাঁকটুকু ভরাট করার ভার থাকে তারই উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "A Long Vowel and a Saying",
          "bn": "এক কিরাআত, এক উক্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a difference in recitation. The general reading, he says, is an-nash'a, with the short form. Mujahid, al-Hasan, Ibn Kathir and Abu 'Amr read an-nasha'a, with the vowel drawn long, and he refers back to his explanation of the word under al-'Ankabut rather than repeating it. The Ibn Kathir in this list is named among readers of the text, not as the commentator cited elsewhere in this article. Al-Qurtubi does not stop on the difference here.",
            "bn": "কুরতুবী তিলাওয়াতের একটি পার্থক্য উল্লেখ করেন। তাঁর ভাষায় সাধারণ কিরাআত হলো আন-নাশআ, হ্রস্ব রূপে। মুজাহিদ, হাসান, ইবন কাসীর ও আবু আমর পড়েছেন আন-নাশাআ, স্বরটা টেনে দীর্ঘ করে। শব্দটির ব্যাখ্যা তিনি এখানে আবার দেন না, পাঠককে ফিরিয়ে দেন সূরা আনকাবূতে দেওয়া আলোচনার দিকে। এই তালিকার ইবন কাসীরের নাম এসেছে কিরাআতের ইমামদের মধ্যে। এ লেখার অন্য জায়গায় যে তাফসীরকারের কথা আনা হয়েছে, তিনি সেই ব্যক্তি নন। কুরতুবী এখানে পার্থক্যটা নিয়ে আর কিছু বলেন না।"
          },
          {
            "en": "He also quotes a saying introduced only as fi al-khabar, in the report, without naming a speaker, a chain or a collection: astonishing, utterly astonishing, is the one who denies the other creation while he sees the first; and astonishing is the one who affirms the latter creation yet does not strive for the abode that lasts. Because he names no collection for it, it is given here as al-Qurtubi's quotation and not as a hadith.",
            "bn": "কুরতুবী একটি উক্তিও উদ্ধৃত করেন, যার আগে শুধু বলেন ফিল খাবার, অর্থাৎ বর্ণনায় আছে। বক্তার নাম, সনদ বা কোনো হাদিসগ্রন্থের উল্লেখ তিনি করেননি। উক্তিটা এই: চরম বিস্ময় সেই লোককে নিয়ে, যে প্রথম সৃষ্টি চোখের সামনে দেখেও পরের সৃষ্টিকে মিথ্যা বলে। আর বিস্ময় সেই লোককে নিয়েও, যে পরের সৃষ্টিকে সত্য বলে মানে, অথচ চিরস্থায়ী আবাসের জন্য চেষ্টা করে না। উৎস হিসেবে তিনি কোনো হাদিসগ্রন্থের নাম দেননি, তাই এখানে একে হাদিস হিসেবে নয়, কুরতুবীর উদ্ধৃতি হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Denial, Not a Verdict",
          "bn": "তাদের অস্বীকার, কারও উপর রায় নয়"
        },
        "p": [
          {
            "en": "The verse is spoken against a stated position, the denial quoted in 56:47, and the abridged Ibn Kathir describes those it refutes as people who deny the Resurrection. The verse speaks only of what it names: a group in this passage who said the raising could not happen, and an argument put to them. It licenses nothing against any living person or community. It does not tell the reader which of his neighbours is a denier, and it gives no warrant for treating anyone as one.",
            "bn": "আয়াতটি একটি ঘোষিত অবস্থানের জবাব, ৫৬:৪৭ আয়াতে উদ্ধৃত সেই অস্বীকার। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ যাদের খণ্ডন করা হচ্ছে, তাদের বর্ণনা দেয় পুনরুত্থান অস্বীকারকারী হিসেবে। আয়াতটি শুধু তা-ই বলে, যা পাঠে আছে: এ অংশে এক দল লোক, যারা বলেছিল আবার ওঠানো সম্ভব নয়, আর তাদের সামনে রাখা একটি যুক্তি। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। প্রতিবেশীদের মধ্যে কে অস্বীকারকারী, তা আয়াতটি পাঠককে বলে দেয় না। কাউকে সেভাবে গণ্য করার অধিকারও দেয় না।"
          },
          {
            "en": "None of the tafsirs consulted for this verse attaches a hadith from the collections to it, and none gives a cause of revelation, so neither is offered here. What the sources do give is enough: a premise everyone holds, a conclusion the deniers refused, and a single question asking why the one has not led to the other. That question is best put first to oneself, since the forgetting that 36:78 describes is not confined to those who argue.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই হাদিসগ্রন্থের কোনো হাদিস এর সঙ্গে যুক্ত করেনি। নাজিলের কোনো প্রেক্ষাপটও কেউ উল্লেখ করেনি। তাই এখানে দুটোর কোনোটাই আনা হলো না। সূত্রগুলো যা দেয়, তা-ই যথেষ্ট: এমন ভিত্তি যা সবাই মানে, এমন সিদ্ধান্ত যা অস্বীকারকারীরা মানেনি, আর একটিমাত্র প্রশ্ন, প্রথমটা দ্বিতীয়টায় পৌঁছাল না কেন? এ প্রশ্ন আগে নিজেকেই করা ভালো। কারণ ৩৬:৭৮ আয়াত যে ভুলে যাওয়ার কথা বলে, তা শুধু তর্ককারীদের মধ্যে সীমাবদ্ধ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Between Two Makings",
          "bn": "দুই সৃষ্টির মাঝের জীবন"
        },
        "p": [
          {
            "en": "Remembering, in this verse, is not recollection of an experience. Nobody can recall his own fashioning. The sources speak of a knowledge held as fact, whether of a beginning from nothing, from a drop, or from Adam's clay, and the verse asks for it to be brought into view. A person can know all of this and still plan a life as if the record ends at the grave. The verse treats that as a lapse of memory rather than a lack of information.",
            "bn": "এ আয়াতে মনে আনা মানে কোনো অভিজ্ঞতার স্মৃতি ফিরিয়ে আনা নয়। নিজেকে গড়ার মুহূর্ত কারও মনে থাকে না। সূত্রগুলো যে জ্ঞানের কথা বলে, তা জানা তথ্য। শুরুটা শূন্য থেকে হোক, এক ফোঁটা থেকে হোক, কিংবা আদমের মাটি থেকে, আয়াতটি চায় সেই জানাটা চোখের সামনে আনা হোক। মানুষ এসব জেনেও জীবনের হিসাব এমনভাবে কষতে পারে, যেন কবরেই খাতা বন্ধ। আয়াতটি একে তথ্যের অভাব বলে না, বলে মনে না রাখার ভুল।"
          },
          {
            "en": "The second half of the saying al-Qurtubi quotes turns the question towards those who already believe. Affirming the latter creation is not the same as striving for the lasting abode. The verse's own logic exposes the same gap. If the first creation shows that the second will come, then the second is not a doctrine to be kept at arm's length. It is a destination, and knowing where a road ends changes the way it is walked.",
            "bn": "কুরতুবী যে উক্তিটি উদ্ধৃত করেন, তার দ্বিতীয় অংশ প্রশ্নটা ঘুরিয়ে দেয় বিশ্বাসীদের দিকে। পরের সৃষ্টিকে সত্য বলে মানা এক কথা, চিরস্থায়ী আবাসের জন্য খাটা আরেক কথা। আয়াতের নিজের যুক্তিও এই ফাঁকটা ধরিয়ে দেয়। প্রথম সৃষ্টি যদি দেখিয়ে দেয় যে দ্বিতীয়টা আসবেই, তবে দ্বিতীয়টা দূরে সরিয়ে রাখার মতো কোনো তত্ত্ব নয়। সেটা গন্তব্য। আর পথ কোথায় গিয়ে শেষ হবে তা জানা থাকলে, পথ চলার ধরনটাই বদলে যায়।"
          },
          {
            "en": "In practice the verse asks for a habit. When the return feels far off, go back to the beginning: you were not, and then you were, and none of it was your doing. The One who managed that has said He will do it again. Let that memory sit where decisions are made, in how time is spent, how others are treated and what is put off for later, and not only where beliefs are listed.",
            "bn": "কাজের ভাষায় আয়াতটি একটা অভ্যাস চায়। ফিরে যাওয়ার দিনটা যখন অনেক দূরের মনে হয়, তখন শুরুর দিকে ফিরে তাকান। আপনি ছিলেন না, তারপর হলেন, আর তার কিছুই আপনার হাতে ছিল না। যিনি সেটা করেছেন, তিনি বলেছেন আবারও করবেন। এই কথাটা শুধু বিশ্বাসের তালিকায় ফেলে রাখবেন না। রাখুন সেখানে, যেখানে সিদ্ধান্ত হয়: সময় কীভাবে খরচ হবে, মানুষের সঙ্গে কেমন আচরণ হবে, কোন কাজ পরের জন্য ফেলে রাখা হবে।"
          }
        ]
      }
    ]
  },
  "56:65": {
    "sections": [
      {
        "h": {
          "en": "Sown, Then Held in Suspense",
          "bn": "বোনা হলো, তারপর ঝুলে রইল"
        },
        "p": [
          {
            "en": "56:63 asks the listeners to consider what they sow, and 56:64 asks who makes it grow: is it you, or are We the Grower? This verse does not wait for an answer. It moves straight to a condition: law nasha'u la-ja'alnahu hutaman, if We willed, We would make it debris. The pronoun in ja'alnahu, it, points back to the crop of the two verses before. The second sign of the passage, the field, therefore ends not on a harvest but on the picture of one that never comes in.",
            "bn": "৫৬:৬৩ শ্রোতাদের বলে, যা তোমরা বোনো তা ভেবে দেখো। ৫৬:৬৪ জানতে চায়, একে গজিয়ে তোলো কি তোমরা, নাকি উৎপাদনকারী আমি? এ আয়াত উত্তরের অপেক্ষা করে না। সোজা চলে যায় একটা শর্তে: লাও নাশাউ লাজাআলনাহু হুতামা, আমি চাইলে একে খড়কুটা বানিয়ে দিতাম। জাআলনাহু শব্দের শেষের সর্বনাম, এটি, আগের দুই আয়াতের সেই ফসলের দিকেই ইঙ্গিত করে। তাই এই অংশের দ্বিতীয় নিদর্শন, অর্থাৎ ক্ষেত, শেষ হয় ফসল কাটার ছবিতে নয়, বরং এমন এক ফসলের ছবিতে যা কখনো ঘরে ওঠে না।"
          },
          {
            "en": "Ibn Kathir reads the condition against what actually happened. We made it grow, he paraphrases, by Our gentleness and mercy, and kept it for you as a mercy to you; had We willed, We would have dried it out before it ripened and was ready to be reaped. The Muyassar gives the whole group in a single sweep: you plough, but it is We who settle the seed in its place and make it sprout, and had We willed We would have made that crop broken stalks with no use as food.",
            "bn": "ইবন কাসীর শর্তটাকে মিলিয়ে দেখেন বাস্তবে যা ঘটেছে তার সঙ্গে। তাঁর ভাষায়, আমিই একে গজিয়ে তুলেছি নিজের কোমলতা আর রহমতে, আর তোমাদের প্রতি দয়া করে টিকিয়ে রেখেছি। চাইলে পাকার আর কাটার উপযোগী হওয়ার আগেই একে শুকিয়ে দিতাম। মুয়াসসার পুরো আয়াতগুচ্ছ এক নিঃশ্বাসে বলে দেয়: তোমরা জমি চষো, কিন্তু বীজকে মাটিতে স্থির করি আর অঙ্কুরিত করি আমিই। আমি চাইলে সেই ফসলকে এমন ভাঙা খড় বানিয়ে দিতাম, যা খাবার হিসেবে কোনো কাজে আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Straw Without a Grain",
          "bn": "দানাহীন খড়"
        },
        "p": [
          {
            "en": "Al-Qurtubi's first gloss on hutam is mutakassiran, broken, and he names the crop as the thing broken. He then defines the noun: withered, perished stalks of no use for food or nourishment. At-Tabari uses almost the same words: hashim, dry fragments that give no benefit as food or sustenance. Al-Baghawi reports from 'Ata' a more concrete picture, straw with no wheat in it. As-Sa'di widens the object of the verb to the tilled crop and the fruit it carries, made crumbled fragments with neither use nor provision in them.",
            "bn": "হুতামের প্রথম ব্যাখ্যায় কুরতুবী বলেন মুতাকাসসিরা, ভাঙাচোরা। আর যা ভাঙছে, তা হলো ফসল। এরপর তাঁর সংজ্ঞায় হুতাম হলো শুকিয়ে নষ্ট হয়ে যাওয়া খড়, যা খাবার বা পুষ্টি কোনো কাজেই আসে না। তাবারীর শব্দও প্রায় একই: হাশীম, শুকনো টুকরো, খাদ্য বা জীবিকা হিসেবে যার কোনো উপকার নেই। বাগাভী আতা থেকে আরও স্পষ্ট এক ছবি আনেন: এমন খড়, যাতে গমের একটি দানাও নেই। সা'দী ক্রিয়ার কর্মকে আরও বড় করে দেখেন। চষা জমির ফসল আর তাতে ধরা ফল, সবই হয়ে যায় চূর্ণ টুকরো, যাতে না আছে উপকার, না রিজিক।"
          },
          {
            "en": "Notice what the verse does not threaten. It does not say the seed would fail to sprout. The crop is allowed to rise, to be seen, to be counted on, and only then is it imagined broken. Ibn Kathir's paraphrase places the loss at the last stage, before it ripens and is harvested. That is the hardest point at which to lose a field, when every expense has already been paid. As-Sa'di says as much on the next clause: the loss comes after you have toiled over it and spent heavily on it.",
            "bn": "আয়াতটি কোন ভয় দেখায় না, সেটাও লক্ষ করার মতো। বীজ অঙ্কুরিত হবে না, এমন কথা বলে না। ফসল মাথা তোলে, চোখে পড়ে, মানুষ তার উপর ভরসা করে বসে, আর তারপরই কল্পনায় তা ভেঙে পড়ে। ইবন কাসীরের ব্যাখ্যাও ক্ষতিটাকে রাখে শেষ ধাপে: পাকার আর কাটার আগেই। ক্ষেত হারানোর এর চেয়ে কঠিন সময় আর নেই, কারণ তখন সব খরচ মেটানো হয়ে গেছে। পরের অংশে সা'দীও একই কথা বলেন: এ ক্ষতি আসে তোমরা তাতে খাটার আর অনেক খরচ করার পর।"
          }
        ]
      },
      {
        "h": {
          "en": "Left Standing Over the Field",
          "bn": "ক্ষেতের পাশে থমকে থাকা"
        },
        "p": [
          {
            "en": "Fa-zaltum comes next, and you would remain. Al-Baghawi and al-Qurtubi both explain the form: its root shape is zalaltum, and one of the two lams was dropped to lighten it. Al-Qurtubi adds that the common reading opens the za', while 'Abdullah read it with a kasra, fa-ziltum, a reading Harun reported from Husayn from Abu Bakr. Either way the verb describes staying in a state. At-Tabari renders it fa-aqamtum, you would stay on, and as-Sa'di as fa-sirtum, you would become, because it was made debris.",
            "bn": "এরপর আসে ফাযালতুম, অর্থাৎ তোমরা থেকে যেতে। বাগাভী আর কুরতুবী দুজনেই শব্দের গড়নটা বুঝিয়ে দেন। মূল রূপ যালালতুম, উচ্চারণ হালকা করতে দুটি লামের একটি বাদ পড়েছে। কুরতুবী আরও জানান, সাধারণ কিরাআতে যা-তে যবর, কিন্তু আবদুল্লাহ পড়েছেন যের দিয়ে, ফাযিলতুম। এ কিরাআত হারূন বর্ণনা করেছেন হুসাইন থেকে, তিনি আবূ বকর থেকে। যেভাবেই পড়া হোক, ক্রিয়াটি কোনো অবস্থায় আটকে থাকার কথা বলে। তাবারী এর অর্থ করেন ফাআকামতুম, তোমরা পড়ে থাকতে। সা'দী করেন ফাসিরতুম, ফসল খড়কুটা হয়ে যাওয়ার কারণে তোমরা হয়ে যেতে।"
          },
          {
            "en": "The grammar paints a scene. The farmers are not pictured moving on to the next season or the next plan. They stay where the loss found them, and what they do there is named by one word, tafakkahun. Al-Qurtubi notes that the word has a second dialect form, tafakkanun, and quotes al-Farra' that the nun belongs to the speech of 'Ukl; he adds from the Sihah that tafakkun means regret over what has slipped away. What, then, are they doing as they stand there? The commentators do not agree.",
            "bn": "ব্যাকরণ এখানে একটা দৃশ্য আঁকে। কৃষকদের দেখানো হয় না যে তারা পরের মৌসুম বা নতুন পরিকল্পনার দিকে এগিয়ে যাচ্ছে। ক্ষতি তাদের যেখানে ধরেছে, তারা সেখানেই থমকে আছে। আর সেখানে তারা কী করছে, তা বলা হয়েছে একটিমাত্র শব্দে: তাফাক্কাহূন। কুরতুবী জানান, শব্দটির আরেকটি আঞ্চলিক রূপ আছে, তাফাক্কানূন। ফাররার উদ্ধৃতি দিয়ে বলেন, নূন দিয়ে বলাটা উকল গোত্রের ভাষা। সিহাহ থেকে যোগ করেন, তাফাক্কুন মানে হাতছাড়া হয়ে যাওয়া জিনিসের জন্য আফসোস। তাহলে সেখানে দাঁড়িয়ে তারা আসলে কী করছে? এ প্রশ্নে তাফসীরকারেরা একমত নন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder, Blame, Regret and Grief",
          "bn": "বিস্ময়, দোষারোপ, আফসোস, দুঃখ"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying that the interpreters differed. The first group: you would marvel at the calamity that struck your crop when it burned and perished. He gives this with chains to Ibn 'Abbas, Mujahid and Qatada, each saying only ta'ajjabun, you would marvel. At the end of his list the same sense returns from Ibn Zayd: marvel when your tilth was dealt with as it was, after which he recites 56:66 and 56:67. Al-Baghawi attributes the same sense, marvelling at what befell your crop, to 'Ata', al-Kalbi and Muqatil.",
            "bn": "তাবারী শুরুতেই জানান, ব্যাখ্যাকারেরা এখানে ভিন্নমত পোষণ করেছেন। প্রথম দলের মতে অর্থ: ফসল পুড়ে নষ্ট হয়ে যাওয়ার যে বিপদ তোমাদের উপর এল, তাতে তোমরা হতবাক হয়ে থাকতে। ইবন আব্বাস (রাঃ), মুজাহিদ আর কাতাদা পর্যন্ত সনদসহ তিনি এ মত আনেন। তাঁদের প্রত্যেকের কথা একটিই: তাআজ্জাবূন, তোমরা বিস্মিত হতে। তালিকার শেষে একই অর্থ আবার আসে ইবন যায়দ থেকে: তোমাদের ক্ষেতের যে দশা হলো, তা দেখে বিস্মিত হতে। এরপর তিনি তিলাওয়াত করেন ৫৬:৬৬ ও ৫৬:৬৭। বাগাভী একই অর্থ, অর্থাৎ ফসলের দশা দেখে বিস্ময়, আতা, কালবী আর মুকাতিলের মত বলে উল্লেখ করেন।"
          },
          {
            "en": "A second group, in at-Tabari, reads it as blame. 'Ikrimah says talawamun, you would reproach each other, which at-Tabari explains as blaming each other for neglecting obedience to your Lord until the loss of the crop reached you. A third reads it as regret. Al-Hasan says tandamun, which at-Tabari explains as regret for past disobedience that made Allah's punishment due; he also reports tandamun from Qatada by a second chain, so Qatada stands in both lists. Yaman, in al-Qurtubi and al-Baghawi, makes it regret over what you spent, citing 18:42.",
            "bn": "তাবারীর বর্ণনায় দ্বিতীয় দল একে দোষারোপ অর্থে নেন। ইকরিমা বলেন তালাওয়ামূন, তোমরা একে অন্যকে দোষ দিতে। তাবারীর ব্যাখ্যায়, রবের আনুগত্যে গাফিলতির জন্য, যার ফলে ফসল হারানোর এ বিপদ তোমাদের ধরল। তৃতীয় দল একে আফসোস অর্থে নেন। হাসান বলেন তানদামূন, আর তাবারী বোঝান: অতীতের সেই নাফরমানির জন্য আফসোস, যা আল্লাহর শাস্তিকে অবধারিত করেছে। কাতাদা থেকেও তিনি আরেক সনদে তানদামূন আনেন, তাই কাতাদার নাম দুই তালিকাতেই আছে। কুরতুবী আর বাগাভীর বর্ণনায় ইয়ামান একে বলেন খরচের জন্য আফসোস। প্রমাণ হিসেবে আনেন ১৮:৪২।"
          },
          {
            "en": "Others name grief. Ibn Kaysan says tahzanun, you would grieve, and al-Qurtubi remarks that the meanings lie close together. Al-Kisa'i, in al-Baghawi, calls it longing for what has passed. Ibn Kathir reports from Mujahid that they would be stricken and grieve over the crop they had missed, then says this returns to the first meaning, marvelling at the cause for which they were struck in their wealth, and that this is the choice of Ibn Jarir. As-Sa'di, without naming anyone, glosses it as regret and sorrow over what has befallen you.",
            "bn": "কেউ কেউ বলেন দুঃখের কথা। ইবন কায়সান বলেন তাহযানূন, তোমরা দুঃখে ভেঙে পড়তে। কুরতুবীর মন্তব্য, অর্থগুলো কাছাকাছি। বাগাভীর বর্ণনায় কিসাঈ বলেন, যা চলে গেছে তার জন্য হা-হুতাশ। ইবন কাসীর মুজাহিদ থেকে আনেন, ফসল হাতছাড়া হওয়ায় তারা আঘাত পেয়ে দুঃখ করত। তারপর বলেন, এ অর্থ গিয়ে মেলে প্রথমটার সঙ্গে: যে কারণে তাদের সম্পদে আঘাত এল, তা নিয়ে বিস্ময়। তিনি জানান, এটাই ইবন জারীরের পছন্দ। সা'দী কারও নাম না নিয়ে ব্যাখ্যা করেন: যে বিপদ এল, তার জন্য আফসোস আর মনস্তাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Facing Two Ways",
          "bn": "দুই দিকে মুখ ফেরানো শব্দ"
        },
        "p": [
          {
            "en": "The word itself pulls in two directions. Al-Kisa'i, as both Ibn Kathir and al-Baghawi report him, counts tafakkaha among the addad, words that carry a meaning and its opposite: the Arabs say tafakkahtu for I enjoyed myself, and tafakkahtu for I grieved. Al-Qurtubi gives the cheerful sense too: tafakkahtu bi-sh-shay', I took pleasure in a thing. He adds, under it is said, that tafakkuh is talk about what does not concern you, hence fukaha for jesting, while fakaha is the quality of a man who is light-hearted and fond of jokes.",
            "bn": "শব্দটা নিজেই দুই দিকে টানে। ইবন কাসীর আর বাগাভী দুজনেই কিসাঈর কথা আনেন: তাফাক্কাহা শব্দটি আদদাদ শ্রেণির, অর্থাৎ যে শব্দ একটি অর্থ আর তার বিপরীত দুটোই বহন করে। আরবরা তাফাক্কাহতু বলে আনন্দ উপভোগ বোঝাতে, আবার দুঃখ পাওয়া বোঝাতেও। কুরতুবীও আনন্দের অর্থটি দেন: তাফাক্কাহতু বিশ-শাই, কোনো জিনিস উপভোগ করলাম। 'বলা হয়' কথাটি জুড়ে তিনি আরও আনেন, তাফাক্কুহ মানে অপ্রয়োজনীয় বিষয়ে কথা বলা। সে থেকেই রসিকতাকে বলা হয় ফুকাহা। আর ফাকাহা হলো সেই মানুষের গুণ, যার মন হালকা আর যে ঠাট্টা-মশকরা ভালোবাসে।"
          },
          {
            "en": "At-Tabari builds his choice on that talkative sense. The soundest view, he says, is that fa-zaltum means you would stay on marvelling at what struck your crop, and its root is tafakkuh bi-l-hadith: when one man tells another something that amazes him and keeps him occupied. So the picture is of people making each other marvel at what has befallen them. Ibn Kathir arrives at a similar scene: you would vary your talk, saying at one moment one thing and at another something else, and the next two verses give what is said.",
            "bn": "তাবারী তাঁর পছন্দের মত দাঁড় করান কথা বলার এই অর্থের উপর। তাঁর মতে সবচেয়ে সঠিক কথা: ফাযালতুম মানে ফসলের উপর যা নামল তা নিয়ে তোমরা বিস্মিত হয়েই থাকতে। মূলে আছে তাফাক্কুহ বিল-হাদীস, অর্থাৎ একজন আরেকজনকে এমন কথা শোনায় যাতে সে অবাক হয়, তাতেই মজে থাকে। তাই দৃশ্যটা এমন: যে বিপদ এসেছে, তা নিয়ে তারা একে অন্যকে অবাক করে চলেছে। ইবন কাসীরও প্রায় একই দৃশ্যে পৌঁছান। তোমরা নানা রকম কথা বলতে, একবার এক কথা, আরেকবার আরেক কথা। আর সেসব কথা কী, তা জানায় পরের দুই আয়াত।"
          },
          {
            "en": "As-Sa'di uses the cheerful sense differently. With the crop broken, he says, your joy, your delight and your tafakkuh would vanish, so the word that once named their pleasure in the field now names what they are left with. The difference stays open. At-Tabari judges marvelling the soundest reading; as-Sa'di gives regret and sorrow; 'Ikrimah gives mutual blame. This page leaves the choice where the commentators left it. Each reading pictures people standing over a ruined field and talking, and none of them pictures the field being restored.",
            "bn": "সা'দী আনন্দের অর্থটা কাজে লাগান অন্যভাবে। তাঁর কথায়, ফসল ভেঙে পড়লে তোমাদের খুশি, আনন্দ আর তাফাক্কুহ সবই মিলিয়ে যেত। মানে, যে শব্দে একসময় ক্ষেত নিয়ে তাদের আনন্দের কথা বলা হতো, সেই শব্দেই এখন বলা হচ্ছে তাদের হাতে কী রইল। মতভেদটা খোলাই থাকে। তাবারী বিস্ময়কে সবচেয়ে সঠিক মনে করেন, সা'দী বলেন আফসোস আর মনস্তাপ, ইকরিমা বলেন পরস্পরকে দোষারোপ। তাফসীরকারেরা যেখানে প্রশ্নটা রেখে গেছেন, এ লেখাও সেখানেই রাখল। প্রতিটি অর্থেই ছবিটা এক: নষ্ট ক্ষেতের পাশে দাঁড়িয়ে মানুষ কথা বলছে, আর কোনো অর্থেই ক্ষেত আর ফিরে আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ruined, Punished or Unlucky",
          "bn": "সর্বনাশ, শাস্তি, নাকি কপালের দোষ"
        },
        "p": [
          {
            "en": "The words the farmers speak in 56:66 arrive without a verb of saying. At-Tabari points to the omission: the sense is you would remain marvelling, saying: inna la-mughramun. The word saying was left out because the context makes it plain. Al-Qurtubi and al-Baghawi report that Abu Bakr, from 'Asim, read a-inna with two hamzas, as a question, and al-Qurtubi adds that 'Asim had it from Zirr ibn Hubaysh; the others read it as a statement. In that reading the farmers ask aloud: are we really ruined?",
            "bn": "৫৬:৬৬ আয়াতে কৃষকদের কথাগুলো আসে 'বলা' ক্রিয়া ছাড়াই। তাবারী এই বাদ পড়াটা দেখিয়ে দেন। অর্থ হলো, তোমরা বিস্মিত হয়ে থাকতে আর বলতে: ইন্না লামুগরামূন। 'বলতে' শব্দটা বাদ দেওয়া হয়েছে, কারণ প্রসঙ্গ থেকেই তা বোঝা যায়। কুরতুবী আর বাগাভী জানান, আবূ বকর আসিম থেকে পড়েছেন আ-ইন্না, দুই হামযা দিয়ে, প্রশ্ন হিসেবে। কুরতুবী যোগ করেন, আসিম এটা পেয়েছেন যির ইবন হুবাইশ থেকে। বাকিরা পড়েছেন সংবাদ হিসেবে। প্রশ্নের কিরাআতে কৃষকেরা যেন জোরে জিজ্ঞেস করছে: আমরা কি সত্যিই সর্বনাশে পড়লাম?"
          },
          {
            "en": "Mughramun gathers several glosses. Mujahid and 'Ikrimah say mula'un bina, something has fastened on us, and al-Qurtubi ties this to gharam as harm that clings. Qatada, with Ibn 'Abbas in al-Qurtubi, says mu'adhdhabun, punished, and at-Tabari prefers this because gharam among the Arabs means punishment, citing a line of al-A'sha. Mujahid is also reported as saying thrown into harm, and Muqatil ibn Hayyan as saying destroyed. Ad-Dahhak and Ibn Kaysan take it from ghurm: the mughram is one whose wealth went without return, so we have lost the seed we sowed.",
            "bn": "মুগরামূন শব্দের কয়েকটি ব্যাখ্যা আছে। মুজাহিদ আর ইকরিমা বলেন মূলাউন বিনা, কিছু একটা আমাদের পেছনে লেগে গেছে। কুরতুবী এর সূত্র মেলান গারামের সঙ্গে, যার অর্থ লেগে থাকা অনিষ্ট। কাতাদা বলেন মুআযযাবূন, শাস্তিপ্রাপ্ত। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ)-ও তাঁর সঙ্গে আছেন। তাবারী এ মতই পছন্দ করেন, কারণ আরবদের কাছে গারাম মানে শাস্তি। প্রমাণে তিনি আশার একটি পঙক্তি আনেন। মুজাহিদ থেকে আরেক বর্ণনায় আছে, অনিষ্টের মুখে নিক্ষিপ্ত। মুকাতিল ইবন হাইয়ান বলেন, ধ্বংসপ্রাপ্ত। দাহহাক আর ইবন কায়সান শব্দটা নেন গুরম থেকে। মুগরাম সেই লোক, যার সম্পদ চলে গেছে কোনো বিনিময় ছাড়া। অর্থাৎ যে বীজ বুনেছিলাম, তা পুরোটাই গচ্চা গেল।"
          },
          {
            "en": "As-Sa'di puts it simply: we have been diminished, and a calamity has swept over us. The English rendering in debt sits nearest to the reading of ad-Dahhak and Ibn Kaysan. Then 56:67 corrects the first complaint with bal, rather: nahnu mahrumun, we are deprived. The Muyassar says deprived of provision. Ibn Kathir reports Qatada as muharafun, people with whom no wealth stays and for whom no profit comes, and Mujahid as majdudun, people with no share of fortune. He presents the two sayings as alternating: now the first, now the second.",
            "bn": "সা'দী সহজ কথায় বলেন: আমাদের ক্ষতি হয়ে গেল, এক বিপদ এসে সব ভাসিয়ে নিল। ইংরেজি অনুবাদের 'ঋণগ্রস্ত' কথাটা দাহহাক আর ইবন কায়সানের ব্যাখ্যার সবচেয়ে কাছাকাছি। এরপর ৫৬:৬৭ প্রথম অভিযোগটা শুধরে নেয় বাল দিয়ে, অর্থাৎ বরং: নাহনু মাহরূমূন, আমরা বঞ্চিত। মুয়াসসার বলে, রিজিক থেকে বঞ্চিত। ইবন কাসীর কাতাদা থেকে আনেন মুহারাফূন, যাদের হাতে সম্পদ টেকে না, লাভও আসে না। আর মুজাহিদ থেকে মাজদূদূন, ভাগ্যে যাদের কোনো হিস্যা নেই। তাঁর উপস্থাপনায় দুটি কথা পালা করে আসে: একবার প্রথমটা, আরেকবার দ্বিতীয়টা।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks for What Was Spared",
          "bn": "যা রক্ষা পেল, তার শোকর"
        },
        "p": [
          {
            "en": "Al-Qurtubi says the verse alerts its hearers to two things. The first is the favour He showed them in their crops by not making them debris, so that they would thank Him. The second is a lesson about themselves: just as He makes the crop debris when He wills, so He destroys them when He wills, that they might take heed and hold back. The verse, then, is about the field and about the farmer at once. Ibn Kathir's paraphrase points the same way: the harvest that stood was kept for you as a mercy.",
            "bn": "কুরতুবী বলেন, আয়াতটি শ্রোতাদের দুটি বিষয়ে সজাগ করে। প্রথমটি সেই নিয়ামত, যা তিনি তাদের ফসলে দিয়েছেন, ফসলকে খড়কুটা না বানিয়ে, যাতে তারা তাঁর শোকর করে। দ্বিতীয়টি তাদের নিজেদের ব্যাপারে শিক্ষা। তিনি যেমন চাইলে ফসলকে খড়কুটা বানান, তেমনি চাইলে তাদেরও ধ্বংস করেন, যাতে তারা উপদেশ নেয় আর বিরত থাকে। তাই আয়াতটি একসঙ্গে ক্ষেতের কথা, কৃষকের কথাও। ইবন কাসীরের ব্যাখ্যাও একই দিকে ইশারা করে: যে ফসল দাঁড়িয়ে আছে, তা তোমাদের জন্য রহমত হিসেবে টিকিয়ে রাখা হয়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an, on the group, describes the farmer's part as real but limited: he ploughs, enriches and softens the soil so that a shoot will not be held back by hard ground, and tends it once it sprouts. He is not, it says, the cause of the shoot pushing out of the seed, and a man absorbed in such secondary causes can lose sight of his Creator. None of the commentaries consulted attaches a hadith to this verse itself, so none is cited here, and none is borrowed from neighbouring verses.",
            "bn": "মাআরিফুল কুরআন আয়াতগুচ্ছের আলোচনায় কৃষকের ভূমিকাকে সত্য বলে, তবে সীমিত। সে জমি চষে, সার দেয়, মাটি নরম করে, যাতে শক্ত মাটিতে চারা আটকে না যায়। অঙ্কুর বের হলে তার যত্ন নেয়। কিন্তু বীজ ফুঁড়ে চারা বের করে আনার কারণ সে নয়। আর এসব বাহ্যিক উপায়ে যে মানুষ ডুবে থাকে, সে নিজের সৃষ্টিকর্তাকেই ভুলে যেতে পারে। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে সরাসরি কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি, পাশের আয়াত থেকেও ধার করে আনা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Harvest Fails",
          "bn": "ফসল যখন মার খায়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks in a condition, if We willed, and it names no field, no season and no people. Some early readers, al-Hasan and 'Ikrimah among them, picture the farmers regretting or blaming each other for sins, but that is their reading of a hypothetical. The verse licenses no one to point at a farmer whose crop has failed, or a region struck by drought, and call it a punishment. That judgement is not handed to any reader. What the verse hands the reader is a question about his own field.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি কথা বলে শর্তের ভাষায়, আমি চাইলে, আর এতে কোনো ক্ষেত, কোনো মৌসুম বা কোনো জনগোষ্ঠীর নাম নেই। হাসান আর ইকরিমার মতো কয়েকজন প্রাচীন ব্যাখ্যাকার কৃষকদের ছবি আঁকেন গুনাহের জন্য আফসোস বা পরস্পরকে দোষারোপ করা মানুষ হিসেবে। কিন্তু সেটা একটা কাল্পনিক অবস্থার ব্যাখ্যা। যার ফসল নষ্ট হয়েছে, বা যে এলাকায় খরা নেমেছে, তার দিকে আঙুল তুলে একে শাস্তি বলার অনুমতি এ আয়াত কাউকে দেয় না। এ রায় কোনো পাঠকের হাতে দেওয়া হয়নি। পাঠকের হাতে আয়াত দেয় তার নিজের ক্ষেত নিয়ে একটা প্রশ্ন।"
          },
          {
            "en": "Read that way, the verse is about dependence. The ploughing, the seed, the expense and the waiting are yours; the growing and the keeping never were. Every meal is a harvest that was allowed to stand. Notice too what the farmers in 56:66 and 56:67 talk about: ruin, punishment, bad luck, deprivation. Their words circle their own loss and never reach Him who made the field grow. When something you built is spoiled, the verse leaves you free to choose other first words, and to turn back to the Giver.",
            "bn": "এভাবে পড়লে আয়াতটির কথা নির্ভরতা নিয়ে। জমি চষা, বীজ, খরচ, অপেক্ষা, এসব আপনার। কিন্তু গজিয়ে তোলা আর টিকিয়ে রাখা কখনো আপনার হাতে ছিল না। প্রতিটি খাবার এমন এক ফসল, যাকে দাঁড়িয়ে থাকতে দেওয়া হয়েছে। ৫৬:৬৬ ও ৫৬:৬৭ আয়াতে কৃষকেরা কী নিয়ে কথা বলে, সেটাও খেয়াল করুন: সর্বনাশ, শাস্তি, কপালের দোষ, বঞ্চনা। তাদের কথা নিজেদের ক্ষতির চারপাশেই ঘোরে, ক্ষেত যিনি গজিয়েছেন, তাঁর কাছে পৌঁছায় না। নিজের গড়া কিছু নষ্ট হলে আপনার সামনে পথ খোলা: মুখের প্রথম কথাগুলো অন্য রকম হতে পারে, আর ফিরে যাওয়া যায় দাতার কাছে।"
          }
        ]
      }
    ]
  },
  "56:69": {
    "sections": [
      {
        "h": {
          "en": "Third in a Line of Signs",
          "bn": "নিদর্শনের সারিতে তৃতীয়"
        },
        "p": [
          {
            "en": "This verse finishes a question that the verse before it begins. 56:68 opens afa-ra'aytumu al-ma'a alladhi tashrabun: have you considered the water that you drink? 56:69 presses it: a-antum anzaltumuhu min al-muzni am nahnu al-munzilun, is it you who brought it down from the rain-clouds, or are We the ones who send it down? The pronoun at the end of anzaltumuhu, it, points back to that water. The two verses work as a single question in two steps: first look at the water, then ask where it came from.",
            "bn": "আগের আয়াতে যে প্রশ্নের শুরু, এ আয়াতে তার শেষ। ৫৬:৬৮ শুরু হয় আফারাআইতুমুল মা-আল্লাযী তাশরাবূন দিয়ে: যে পানি তোমরা পান কর, তা কি ভেবে দেখেছ? ৫৬:৬৯ প্রশ্নটা আরও চেপে ধরে: আ-আনতুম আনযালতুমূহু মিনাল মুযনি আম নাহনুল মুনযিলূন। মেঘ থেকে তা কি তোমরা নামিয়েছ, নাকি আমিই বর্ষণকারী? আনযালতুমূহু শব্দের শেষের 'হু' মানে 'তা', আর তা ফিরে যায় ওই পানির দিকেই। দুই আয়াত মিলে আসলে একটাই প্রশ্ন, দুই ধাপে। আগে পানির দিকে তাকানো, তারপর প্রশ্ন, এটা এল কোথা থেকে?"
          },
          {
            "en": "The same shape appears four times in this stretch of the surah. 56:58 and 56:59 ask about the drop a man emits, 56:63 and 56:64 about what you sow, 56:68 and 56:69 about the water, and 56:71 and 56:72 about the fire you kindle. Each pair opens with afa-ra'aytum, have you considered, and then sets a-antum, is it you, against am nahnu, or is it We. Ma'arif al-Qur'an, on the group from 56:63 to 56:72, explains the order: next to food, water is the most important thing on which human life depends.",
            "bn": "সূরার এ অংশে একই ছাঁচ এসেছে চারটি জোড়ায়। ৫৬:৫৮ ও ৫৬:৫৯ প্রশ্ন তোলে মানুষের নিক্ষিপ্ত বীর্যবিন্দু নিয়ে, ৫৬:৬৩ ও ৫৬:৬৪ যা তোমরা বপন কর তা নিয়ে, ৫৬:৬৮ ও ৫৬:৬৯ পানি নিয়ে, আর ৫৬:৭১ ও ৫৬:৭২ যে আগুন তোমরা জ্বালাও তা নিয়ে। প্রতিটি জোড়া শুরু হয় আফারাআইতুম দিয়ে, অর্থাৎ ভেবে দেখেছ কি? তারপর মুখোমুখি দাঁড় করায় আ-আনতুম আর আম নাহনু, তোমরা, নাকি আমি। ৫৬:৬৩ থেকে ৫৬:৭২ পর্যন্ত পুরো অংশের আলোচনায় মাআরিফুল কুরআন এই ক্রমের কারণ বলে দেয়: খাদ্যের পরে মানুষের জীবন সবচেয়ে বেশি নির্ভর করে পানির উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question That Answers Itself",
          "bn": "যে প্রশ্নে উত্তর লুকানো"
        },
        "p": [
          {
            "en": "Ibn Kathir, in his Arabic tafsir, glosses the second half of the verse in a short line: yaqulu bal nahnu al-munzilun, He is saying: rather, We are the ones who send it down. The question carries its own answer. The abridged English of Ibn Kathir, on the same group of verses, turns it into a plain statement: Allah is stating that indeed He is the One Who causes the rain to fall. Neither version leaves the first option open; it is raised only so that the listener can set it aside.",
            "bn": "ইবন কাসীর তাঁর আরবি তাফসীরে আয়াতের দ্বিতীয় অংশ ব্যাখ্যা করেন ছোট্ট এক বাক্যে: ইয়াকূলু বাল নাহনুল মুনযিলূন। অর্থাৎ তিনি বলছেন, বরং আমিই তা বর্ষণ করি। প্রশ্নের ভেতরেই উত্তর বসানো। একই আয়াতগুচ্ছে ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ কথাটাকে সরাসরি ঘোষণায় রূপ দেয়: আল্লাহ জানিয়ে দিচ্ছেন, বৃষ্টি নামান একমাত্র তিনিই। কোনো সংস্করণেই প্রথম বিকল্পটা খোলা থাকে না। সেটা তোলা হয়েছে শুধু এজন্য, যাতে শ্রোতা নিজেই তা বাতিল করে দেয়।"
          },
          {
            "en": "Al-Muyassar, which treats 56:68 and 56:69 together, fills in what each step implies. Have you considered the water that you drink in order to live by it? Did you send it down from the clouds to its resting place in the earth, or are We the ones who sent it down as a mercy to you? Two additions stand out. The water is drunk to stay alive, and its sending is called rahma, mercy. Its journey also has an end point, qarar al-ard, the place in the ground where it settles.",
            "bn": "মুয়াসসার ৫৬:৬৮ ও ৫৬:৬৯ একসঙ্গে ব্যাখ্যা করে, আর প্রতিটি ধাপের ভেতরের কথা খুলে দেয়। যে পানি তোমরা বেঁচে থাকার জন্য পান কর, তা কি ভেবে দেখেছ? মেঘ থেকে মাটির বুকে তার ঠিকানা পর্যন্ত তা কি তোমরা নামিয়েছ, নাকি আমিই তোমাদের প্রতি রহমত হিসেবে তা নামিয়েছি? এখানে দুটি কথা যোগ হয়েছে। পানি পান করা হয় প্রাণ বাঁচাতে, আর তা পাঠানোকে বলা হয়েছে রহমত। পানির যাত্রারও একটা শেষ বিন্দু আছে: কারারুল আরদ, মাটির সেই জায়গা যেখানে তা গিয়ে থিতু হয়।"
          },
          {
            "en": "The wording also sets a verb against a noun. The first option, anzaltumuhu, credits the listeners with a past act; the reply, al-munzilun, names those who send down, the same shape as al-khaliqun in 56:59, az-zari'un in 56:64 and al-munshi'un in 56:72. None of the commentators consulted for this verse remarks on the shift, so it is offered only as what the wording shows: the question asks about a deed, and the answer replies with a description of the Doer, as though the sending were what He is known by.",
            "bn": "শব্দচয়নেও একটা বৈপরীত্য আছে: একদিকে ক্রিয়া, অন্যদিকে বিশেষ্য। প্রথম বিকল্প আনযালতুমূহু শ্রোতাদের নামে অতীতের একটা কাজ চাপায়। আর উত্তর আল-মুনযিলূন নাম দেয় তাঁদের, যাঁরা বর্ষণ করেন। ৫৬:৫৯-এর আল-খালিকূন, ৫৬:৬৪-এর আয-যারিঊন আর ৫৬:৭২-এর আল-মুনশিঊন একই গড়নের। এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এই পরিবর্তন নিয়ে কিছু বলেনি। তাই কথাটা রাখা হলো শুধু শব্দের চেহারা থেকে যা দেখা যায় সেটুকু হিসেবে। প্রশ্নটা জানতে চায় একটা কাজের কথা, আর উত্তর দেয় কর্তার পরিচয়, যেন বর্ষণ করাই তাঁর পরিচয়ের অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Word Muzn Covers",
          "bn": "মুযন শব্দের পরিধি"
        },
        "p": [
          {
            "en": "Every commentator consulted for this verse gives al-muzn the same core gloss: al-sahab, the clouds. Ibn Kathir reports it from Ibn Abbas (RA), Mujahid and others. At-Tabari gives it with chains from Qatada, who says min al-muzn means from the clouds, and from Ibn Zayd, who says al-muzn is the name of the clouds. Al-Baghawi says the clouds and adds that the singular is muzna; al-Qurtubi gives the same singular and calls the gloss the view of Ibn Abbas, Mujahid and others.",
            "bn": "এ আয়াতের যত তাফসীর দেখা হয়েছে, সবগুলোতেই আল-মুযনের মূল অর্থ একই: আস-সাহাব, অর্থাৎ মেঘ। ইবন কাসীর এ অর্থ বর্ণনা করেন ইবন আব্বাস (রাঃ), মুজাহিদ ও আরও অনেকের সূত্রে। তাবারী সনদসহ আনেন কাতাদার কথা: মিনাল মুযন মানে মেঘ থেকে। আর ইবন যায়দের কথা: আল-মুযন হলো মেঘেরই নাম। বাগাভীও বলেন মেঘ, সঙ্গে জানান এর একবচন মুযনা। কুরতুবীও একই একবচন দেন, আর এই অর্থকে বলেন ইবন আব্বাস, মুজাহিদ ও অন্যদের মত।"
          },
          {
            "en": "Two further reports widen the word. At-Tabari carries a report from Ibn Abbas (RA), through the chain that begins with Muhammad ibn Sa'd, that al-muzn is the sky and the clouds, al-sama' wa al-sahab. Al-Qurtubi records the same pair from Ibn Abbas and from ath-Thawri, after giving the plain gloss first. So Ibn Abbas is reported with both glosses. The sources set them side by side without ranking them, and they are kept that way here: clouds alone in some reports, sky and clouds in others.",
            "bn": "আরও দুটি বর্ণনা শব্দটার পরিধি বাড়িয়ে দেয়। তাবারী মুহাম্মাদ ইবন সা'দ থেকে শুরু হওয়া সনদে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন: আল-মুযন মানে আকাশ ও মেঘ, আস-সামা ওয়াস সাহাব। কুরতুবী সাধারণ অর্থটা আগে বলে নিয়ে তারপর ইবন আব্বাস ও সাওরী থেকে এই জোড়া অর্থই উল্লেখ করেন। ফলে ইবন আব্বাসের নামে দুই অর্থই বর্ণিত আছে। উৎসগুলো দুটিকে পাশাপাশি রেখেছে, কোনোটিকে অগ্রাধিকার দেয়নি। এখানেও তা-ই রাখা হলো: কিছু বর্ণনায় শুধু মেঘ, কিছুতে আকাশ ও মেঘ।"
          },
          {
            "en": "Al-Qurtubi then quotes the lexicon as-Sihah, where Abu Zayd says al-muzna is the white cloud, al-sahaba al-bayda', with the plural muzn, and that al-muzna is also a fall of rain, al-matra. As-Sa'di defines al-muzn as the clouds and the rain together, al-sahab wa al-matar. The range therefore runs from the cloud, to a white cloud, to the sky with its clouds, to the rain itself. None of these sources goes on to describe how the rain forms. Their interest, like the verse's, is in who sends it.",
            "bn": "এরপর কুরতুবী আস-সিহাহ অভিধান থেকে উদ্ধৃত করেন আবু যায়দের কথা: আল-মুযনা মানে সাদা মেঘ, আস-সাহাবাতুল বাইদা, বহুবচনে মুযন। আবার আল-মুযনা মানে এক পশলা বৃষ্টিও, আল-মাতরা। সা'দী আল-মুযনের সংজ্ঞা দেন মেঘ ও বৃষ্টি দুটো মিলিয়ে, আস-সাহাব ওয়াল মাতার। অর্থের পরিসর তাই মেঘ থেকে সাদা মেঘ, সেখান থেকে মেঘসহ আকাশ, আর শেষে খোদ বৃষ্টি পর্যন্ত। বৃষ্টি কীভাবে তৈরি হয়, এসব উৎসের কোনোটিই সে বর্ণনায় যায়নি। আয়াতের মতো তাদেরও আগ্রহ একটাই: বৃষ্টি পাঠান কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain-Cloud Water in Verse",
          "bn": "কবিতার পঙ্‌ক্তিতে মেঘের পানি"
        },
        "p": [
          {
            "en": "Al-Qurtubi supports the gloss with a line of Arabic poetry: fa-nahnu ka-ma'i al-muzni ma fi nisabina kahamun wa la fina yu'addu bakhilu. Rendered closely, it says: we are like the water of the muzn; in our stock there is none dull, and none among us is counted a miser. The poet sets rain-cloud water beside two boasts, that his people have no dullness in them and no meanness. For al-Qurtubi the line does lexical work: it shows that the Arabs used muzn for the clouds that give such water.",
            "bn": "এই অর্থের পক্ষে কুরতুবী একটি আরবি কবিতার পঙ্‌ক্তি আনেন: ফানাহনু কামা-ইল মুযনি মা ফী নিসাবিনা কাহামুন ওয়ালা ফীনা ইউআদ্দু বাখীলু। কাছাকাছি অনুবাদে: আমরা মুযনের পানির মতো। আমাদের বংশে কোনো ভোঁতা লোক নেই, আর আমাদের মধ্যে কাউকে কৃপণ বলে গণ্য করা হয় না। কবি মেঘের পানির পাশে দুটি গর্ব বসিয়েছেন: তাঁর লোকদের মধ্যে জড়তা নেই, কৃপণতাও নেই। কুরতুবীর কাছে পঙ্‌ক্তিটির কাজ শব্দের অর্থ প্রমাণ করা। আরবরা যে এমন পানি দেওয়া মেঘকেই মুযন বলত, পঙ্‌ক্তিটি তা দেখিয়ে দেয়।"
          },
          {
            "en": "A second line, quoted for the sense a fall of rain, begins a-lam tara anna Allaha anzala muzna: have you not seen that Allah sent down a muzna? Here too al-Qurtubi's purpose is to show the word in use. Yet the poet's own sentence already gives the sending to Allah, with anzala, the verb the verse itself uses in anzaltumuhu and al-munzilun. The question the Qur'an puts to its listeners is answered, in the very evidence for its vocabulary, the way the verse expects it to be answered.",
            "bn": "'এক পশলা বৃষ্টি' অর্থের প্রমাণে কুরতুবী আরেকটি পঙ্‌ক্তি আনেন। তার শুরু: আলাম তারা আন্নাল্লাহা আনযালা মুযনা, তুমি কি দেখোনি, আল্লাহ এক পশলা মুযনা নামিয়েছেন? এখানেও কুরতুবীর উদ্দেশ্য শব্দটার ব্যবহার দেখানো। তবু খেয়াল করার মতো বিষয়, কবি নিজেই বৃষ্টি নামানোর কাজটা আল্লাহর বলে ধরেছেন। ক্রিয়াটাও সেই আনযালা, যা আয়াতে এসেছে আনযালতুমূহু আর আল-মুনযিলূন শব্দে। কুরআন শ্রোতাকে যে প্রশ্ন করে, তার উত্তর মিলে যায় খোদ শব্দার্থের প্রমাণের ভেতরেই। আর উত্তরটা ঠিক তেমনই, যেমনটা আয়াত আশা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Cloud to River",
          "bn": "মেঘ থেকে নদীতে"
        },
        "p": [
          {
            "en": "As-Sa'di follows the water after it falls. Allah sends it down, he writes, and from it come the rivers running on the face of the earth and within it, al-anhar al-jariya 'ala wajh al-ard wa fi batniha, and the gushing pools, al-ghudran al-mutadaffiqa. The drink named in 56:68 is therefore not only rain caught as it falls. The commentator traces the river on the surface, the water hidden beneath the ground and the brimming pool back to the same sending from the muzn.",
            "bn": "পানি পড়ার পরে কোথায় যায়, সা'দী সেটাও অনুসরণ করেন। তিনি লেখেন, আল্লাহ তা নামিয়ে দেন, আর তা থেকেই হয় নদীগুলো, যা বয়ে চলে মাটির উপর দিয়ে আর মাটির ভেতরেও: আল-আনহারুল জারিয়া আলা ওয়াজহিল আরদি ওয়া ফী বাতনিহা। তা থেকেই হয় উপচে পড়া জলাশয়, আল-গুদরানুল মুতাদাফফিকা। কাজেই ৫৬:৬৮-এ যে পানীয়ের কথা, তা শুধু আকাশ থেকে পড়ার মুহূর্তে ধরা বৃষ্টি নয়। উপরের নদী, মাটির নিচে লুকানো পানি আর ভরা জলাশয়, সবকিছুর উৎস তিনি খুঁজে পান মুযন থেকে সেই একই বর্ষণে।"
          },
          {
            "en": "He then names a further favour: Allah made the water 'adhb furat, sweet and fresh, so that souls find it easy to swallow, tusighuhu al-nufus. Al-Muyassar's resting place in the earth sits beside this. Together the two describe a single course: down from the cloud, into the ground and the rivers, and back up into a glass that a person can drink without effort. The listener plays a part only at the last stage, in drawing and drinking, and the verse asks him to see everything before it.",
            "bn": "এরপর তিনি আরেকটি অনুগ্রহের কথা বলেন: আল্লাহ পানিকে করেছেন আযবুন ফুরাত, মিঠা ও সুপেয়, যাতে প্রাণ তা সহজে গিলতে পারে, তুসীগুহুন নুফূস। মুয়াসসারের 'মাটির বুকে ঠিকানা' কথাটা এর পাশেই বসে। দুটি ব্যাখ্যা মিলে একটাই পথের ছবি আঁকে। মেঘ থেকে নিচে নামা, মাটি আর নদীতে ঢোকা, তারপর আবার উঠে এসে এমন এক গ্লাসে পৌঁছানো, যা মানুষ অনায়াসে পান করতে পারে। শ্রোতার ভূমিকা কেবল শেষ ধাপে, পানি তোলা আর পান করায়। আয়াত চায় তার আগের সবটুকু সে দেখুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Once You Know, Then What",
          "bn": "জানার পরে কী করবেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws the consequence at the close of the verse. On am nahnu al-munzilun he writes: once you know that I sent it down, why do you not thank Me by devoting your worship sincerely to Me? And why do you deny My power to bring you back, al-i'ada? The question about water is made to carry two further questions. The first concerns gratitude, which the next verse names outright. The second concerns the raising of the dead, which runs through this whole stretch of the surah.",
            "bn": "আয়াতের শেষে কুরতুবী এর পরিণতির কথা টানেন। আম নাহনুল মুনযিলূন প্রসঙ্গে তিনি লেখেন: যখন জানলে যে আমিই তা নামিয়েছি, তখন কেন খাঁটিভাবে আমার ইবাদত করে আমার শোকর আদায় কর না? আর আবার ফিরিয়ে আনার ব্যাপারে আমার ক্ষমতা, আল-ই'আদা, কেন অস্বীকার কর? পানির প্রশ্নটা এভাবে আরও দুটি প্রশ্ন বহন করে। প্রথমটি শোকর নিয়ে, যার কথা পরের আয়াত সরাসরি বলে দেয়। দ্বিতীয়টি মৃতদের পুনরুত্থান নিয়ে, যা সূরার এই পুরো অংশ জুড়ে চলছে।"
          },
          {
            "en": "The second question ties the verse to the start of the passage. 56:57 says nahnu khalaqnakum fa-lawla tusaddiqun: We created you, so why do you not affirm the truth? 56:62 then reminds the listeners that they have known the first creation, and asks whether they will not take heed. Al-Qurtubi's reading places the water inside that same case. The listener already concedes that he does not send rain; al-Qurtubi's question asks him to let that admission lead on to the next, about the power to bring him back.",
            "bn": "দ্বিতীয় প্রশ্নটা আয়াতকে এই অংশের শুরুর সঙ্গে বেঁধে দেয়। ৫৬:৫৭ বলে: নাহনু খালাকনাকুম ফালাওলা তুসাদ্দিকূন, আমিই তোমাদের সৃষ্টি করেছি, তবে কেন তোমরা সত্য বলে মানছ না? এরপর ৫৬:৬২ মনে করিয়ে দেয়, প্রথম সৃষ্টির কথা তো তোমরা জেনেছ, তবু কি উপদেশ নেবে না? কুরতুবীর ব্যাখ্যা পানিকেও সেই যুক্তির ভেতরে বসিয়ে দেয়। শ্রোতা তো আগেই মেনে নেয় যে বৃষ্টি সে নামায় না। কুরতুবীর প্রশ্ন চায়, এই স্বীকারোক্তি তাকে পরের স্বীকারোক্তিতে নিয়ে যাক: তাকে আবার ফিরিয়ে আনার ক্ষমতাও তাঁরই।"
          },
          {
            "en": "Ma'arif al-Qur'an, introducing the whole group, frames the problem as unawareness. Man, it says, was lost in the secondary or extrinsic causes and lost sight of his real Creator and Master, the primary cause. No reader of the verse supposes that he himself fills the clouds. The danger is quieter: the familiarity of the glass hides its Sender. The question repairs that by naming both options aloud, so that the listener has to give the answer himself, and an answer spoken by the listener is harder to forget.",
            "bn": "পুরো আয়াতগুচ্ছের ভূমিকায় মাআরিফুল কুরআন সমস্যাটাকে দেখে উদাসীনতা হিসেবে। তার ভাষায়, মানুষ গৌণ ও বাহ্যিক কারণের মধ্যে হারিয়ে গিয়েছিল, আর ভুলে গিয়েছিল তার আসল স্রষ্টা ও মালিককে, যিনি মূল কারণ। আয়াতের কোনো পাঠকই ভাবে না যে মেঘ সে নিজে ভরে তোলে। বিপদটা আরও নিঃশব্দ। গ্লাসটা এত চেনা যে তার প্রেরণকারী আড়ালে পড়ে যান। প্রশ্নটা দুটি বিকল্পই জোরে উচ্চারণ করে এই আড়াল সরিয়ে দেয়। শ্রোতাকে উত্তরটা নিজের মুখে দিতে হয়, আর নিজের মুখের উত্তর ভোলা কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Fresh Water and the Next Verse",
          "bn": "মিঠা পানি ও পরের আয়াত"
        },
        "p": [
          {
            "en": "The verse after this, 56:70, completes the sign: law nasha'u ja'alnahu ujajan fa-lawla tashkurun, if We willed, We could make it bitter, so why are you not grateful? The abridged English Ibn Kathir explains ujaj as salty, sour, undrinkable and unfit for growing plants, and paraphrases the closing question: why do you not appreciate the favour Allah does for you by sending down the rain fresh, ready to consume? The verse studied here settles who sends the water; the next asks what that knowledge should produce.",
            "bn": "এর পরের আয়াত, ৫৬:৭০, নিদর্শনটা সম্পূর্ণ করে: লাও নাশাউ জা'আলনাহু উজাজান ফালাওলা তাশকুরূন। আমি চাইলে তা তেতো করে দিতে পারতাম, তবে কেন তোমরা শোকর কর না? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ উজাজের ব্যাখ্যা দেয়: লোনা, টক, পানের অযোগ্য, ফসল ফলানোরও অনুপযোগী। শেষের প্রশ্নটাকে সে এভাবে বলে: আল্লাহ যে তোমাদের জন্য মিঠা, পানের উপযোগী বৃষ্টি নামিয়ে অনুগ্রহ করেন, তার কদর কেন কর না? এ আয়াত মীমাংসা করে পানি পাঠান কে। পরের আয়াত জানতে চায়, এই জানার ফল কী হওয়া উচিত।"
          },
          {
            "en": "Ibn Kathir supports the point with 16:10 and 16:11: it is He who sends down water from the sky; from it you drink, and from it grows the vegetation on which you pasture your cattle; with it He causes to grow for you crops, olives, date palms, grapes and every kind of fruit. Commenting later on 56:74, he names the contrast the passage holds: He created the fresh, tasty water, and had He willed, He would have created it salty like seawater.",
            "bn": "ইবন কাসীর কথাটার সমর্থনে আনেন ১৬:১০ ও ১৬:১১: তিনিই আকাশ থেকে পানি নামান। তা থেকে তোমরা পান কর, আর তা থেকেই জন্মায় গাছপালা, যেখানে তোমরা পশু চরাও। তা দিয়েই তিনি তোমাদের জন্য উৎপন্ন করেন ফসল, জয়তুন, খেজুর, আঙুর আর সব রকমের ফল। পরে ৫৬:৭৪-এর আলোচনায় তিনি এই অংশের ভেতরের বৈপরীত্যটা নাম ধরে বলেন: তিনি সৃষ্টি করেছেন মিঠা, সুস্বাদু পানি, আর চাইলে তা সমুদ্রের পানির মতো লোনা করে সৃষ্টি করতে পারতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Drinking With the Question",
          "bn": "প্রশ্নটা সঙ্গে নিয়ে পান করা"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it. Ibn Kathir's abridged commentary on the group carries narrations on the sowing and on the fire, but none on the water, so no narration is cited here, and none is borrowed from elsewhere to fill the space. The verse stands on its own question, and the commentators answer it with the meaning of a word, a line of poetry and the course the water takes after it falls.",
            "bn": "এ আয়াতের যত তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস যুক্ত করেনি। আয়াতগুচ্ছের উপর ইবন কাসীরের সংক্ষিপ্ত ভাষ্যে বীজ বপন আর আগুন নিয়ে বর্ণনা আছে, কিন্তু পানি নিয়ে নেই। তাই এখানে কোনো বর্ণনা উদ্ধৃত হয়নি, আর ফাঁক ভরাতে অন্য জায়গা থেকে ধার করেও আনা হয়নি। আয়াতটি দাঁড়িয়ে আছে নিজের প্রশ্নের উপর। তাফসীরকারেরা তার উত্তর দেন একটি শব্দের অর্থ দিয়ে, কবিতার একটি পঙ্‌ক্তি দিয়ে, আর পড়ার পরে পানি কোন পথে যায় তার বিবরণ দিয়ে।"
          },
          {
            "en": "The question is put to whoever drinks, and that includes every reader in every age. Water drawn from a tap, a well or a bottle has passed through hands and pipes, and it is easy to let the credit stop there. The verse does not deny the pipes. It asks where the water was before them, and it allows only the answer it has already given: from the muzn, sent down by Allah. Each drink then becomes a small occasion for the thanks al-Qurtubi asks for.",
            "bn": "প্রশ্নটা করা হয়েছে যে পান করে তাকেই, আর তাতে সব যুগের প্রত্যেক পাঠক পড়ে যান। কল, কুয়া বা বোতল থেকে যে পানি আসে, তা অনেক হাত আর পাইপ পেরিয়ে আসে। কৃতিত্বটা সেখানেই থামিয়ে দেওয়া সহজ। আয়াত পাইপগুলোকে অস্বীকার করে না। সে জানতে চায়, এগুলোর আগে পানি কোথায় ছিল। আর উত্তর হিসেবে সে মানে শুধু সেটাই, যা সে আগেই দিয়ে রেখেছে: মুযন থেকে, আল্লাহর নামানো। তখন প্রতিটি চুমুক হয়ে ওঠে সেই শোকরের ছোট্ট উপলক্ষ, যা কুরতুবী চেয়েছেন।"
          },
          {
            "en": "There is a simple way to keep the question alive. Before drinking, recall that you did not make this water and could not have made it. After drinking, say al-hamdu lillah and mean it as your reply to am nahnu al-munzilun. Al-Qurtubi joins that thanks to sincere worship, so the gratitude is meant to reach beyond the tongue. It is a recognition, repeated many times a day, that the Sender of the rain is owed the whole of your worship, and not only your praise.",
            "bn": "প্রশ্নটা জাগিয়ে রাখার সহজ একটা উপায় আছে। পান করার আগে মনে করুন, এই পানি আপনি বানাননি, বানাতে পারতেনও না। পান করার পরে আলহামদু লিল্লাহ বলুন, আর মনে রাখুন এটাই আম নাহনুল মুনযিলূন প্রশ্নের জবাবে আপনার উত্তর। কুরতুবী এই শোকরকে খাঁটি ইবাদতের সঙ্গে জুড়ে দিয়েছেন। তাই কৃতজ্ঞতা শুধু মুখের কথায় থেমে থাকার জিনিস নয়। দিনে বহুবার ফিরে আসা এক স্বীকৃতি এটা: যিনি বৃষ্টি পাঠান, শুধু প্রশংসা নয়, আপনার পুরো ইবাদতই তাঁর পাওনা।"
          }
        ]
      }
    ]
  },
  "56:77": {
    "sections": [
      {
        "h": {
          "en": "Where the Oath Lands",
          "bn": "শপথ যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Innahu la-qur'anun karim: indeed, it is a noble Qur'an. Three Arabic words, and they arrive at the end of a build-up. In 56:75 Allah swears by the places where the stars set, and in 56:76 He says that this is a mighty oath, if only you knew. Ma'arif al-Qur'an sets out the structure plainly: verses 75 and 76 are the oath, and the set of verses beginning here is its subject, the jawab al-qasam, the thing the oath is sworn to establish. This verse is where the whole oath comes to rest.",
            "bn": "ইন্নাহু লা-কুরআনুন কারীম: নিশ্চয়ই এ সম্মানিত কুরআন। আরবিতে মাত্র তিনটি শব্দ, কিন্তু আসে লম্বা এক প্রস্তুতির শেষে। ৫৬:৭৫ আয়াতে আল্লাহ তারকারাজির অস্ত যাওয়ার জায়গাগুলোর শপথ করেন। ৫৬:৭৬ আয়াতে বলেন, তোমরা যদি জানতে, এ এক বড় শপথ। মাআরিফুল কুরআন গঠনটা সোজা করে বুঝিয়ে দেয়। ৭৫ ও ৭৬ নম্বর আয়াত হলো শপথ, আর এখান থেকে শুরু হওয়া আয়াতগুলো তার বিষয়বস্তু, যাকে বলে জাওয়াবুল কাসাম। অর্থাৎ যে কথা প্রতিষ্ঠা করতে শপথটা করা হয়েছে। পুরো শপথ এসে থামে এই আয়াতে।"
          },
          {
            "en": "At-Tabari restates the whole in a single sentence: Allah, exalted be His mention, says, I swear by the positions of the stars that this Qur'an is a noble Qur'an. He adds a note on the first word: the ha in innahu, the it, refers to the Qur'an. Al-Baghawi says the same in his own terms. Innahu, he writes, means this Book, and it is mawdi' al-qasam, the point the oath is aimed at. As-Sa'di names what is sworn to as the affirming of the Qur'an: that it is true, with no doubt in it and no uncertainty touching it.",
            "bn": "তাবারী পুরো কথাটা এক বাক্যে বলে দেন। আল্লাহ বলছেন, আমি নক্ষত্রের অবস্থানস্থলের শপথ করছি যে এই কুরআন সম্মানিত কুরআন। প্রথম শব্দটি নিয়ে তিনি একটি টীকাও দেন: ইন্নাহু শব্দের 'হু' সর্বনামটি কুরআনকে বোঝায়। বাগাভীও একই কথা বলেন নিজের ভাষায়। তাঁর মতে ইন্নাহু মানে এই কিতাব, আর এটাই মাওদিউল কাসাম, শপথের লক্ষ্য। সা'দী শপথের বিষয়কে বলেন কুরআনের সত্যতা প্রতিষ্ঠা। কুরআন সত্য, তাতে কোনো সন্দেহ নেই, কোনো দ্বিধাও তাকে ছুঁতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Cut Alike",
          "bn": "একই ছাঁচে দুই আয়াত"
        },
        "p": [
          {
            "en": "Set 56:76 beside 56:77 and the two are built on one frame. Wa-innahu la-qasamun ... 'azim: and it is a mighty oath. Innahu la-qur'anun karim: it is a noble Qur'an. Each opens with innahu, each carries the stressing la- on its noun, and each closes on an adjective of worth. Ibn Kathir draws the line between them in a sentence: this is a great vow that Allah is making, and if you knew the greatness of the vow, you would know the greatness of what the vow is about. The weight of the oath is meant to be felt in its answer.",
            "bn": "৫৬:৭৬ আর ৫৬:৭৭ পাশাপাশি রাখলে দেখা যায়, দুটি একই ছাঁচে গড়া। ওয়া ইন্নাহু লা-কাসামুন ... আযীম: আর নিশ্চয়ই এ বড় শপথ। ইন্নাহু লা-কুরআনুন কারীম: নিশ্চয়ই এ সম্মানিত কুরআন। দুটোই শুরু হয় ইন্নাহু দিয়ে, দুটোরই বিশেষ্যের আগে জোর দেওয়ার 'লা', আর দুটোই শেষ হয় মর্যাদা বোঝানো এক বিশেষণে। ইবন কাসীর এক বাক্যে দুটোকে জুড়ে দেন। আল্লাহ এখানে এক মহা শপথ করছেন। শপথটা কত বড় তা জানলে তোমরা বুঝতে, যে বিষয়ে শপথ, সেটা কত বড়। শপথের ভারটা আসলে টের পাওয়া যায় তার জবাবে।"
          },
          {
            "en": "The link shows in the Arabic of Ibn Kathir too. He glosses the verse as: this Qur'an revealed to Muhammad ﷺ is kitabun 'azim, a mighty Book, using for the Book the very adjective 56:76 gave the oath. Al-Qurtubi's entry opens with two remarks on that mighty oath. One, which he attributes to Ibn 'Abbas and others, takes the pronoun to mean the Qur'an, so that it is the Qur'an that is the mighty oath; the other says that what Allah swears by is mighty. He then calls innahu la-qur'anun karim the naming of what is sworn to.",
            "bn": "ইবন কাসীরের আরবি ভাষ্যেও যোগসূত্রটা চোখে পড়ে। তিনি আয়াতের ব্যাখ্যা করেন এভাবে: মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া এই কুরআন কিতাবুন আযীম, এক মহান কিতাব। ৫৬:৭৬ আয়াত শপথকে যে বিশেষণ দিয়েছিল, কিতাবের জন্য তিনি ঠিক সেটাই ব্যবহার করেন। কুরতুবীর আলোচনা শুরু হয় সেই বড় শপথ নিয়ে দুটি মন্তব্য দিয়ে। একটি মত তিনি ইবন আব্বাস ও অন্যদের নামে আনেন: সর্বনামটি কুরআনকে বোঝায়, অর্থাৎ কুরআনই সেই বড় শপথ। অন্য মত হলো, আল্লাহ যার শপথ করেন তা-ই বড়। এরপর তিনি ইন্নাহু লা-কুরআনুন কারীমকে বলেন শপথের বিষয়ের উল্লেখ।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering the Charges Made",
          "bn": "অভিযোগের জবাব"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the oath as a rebuttal before it is a statement. The la in fala uqsimu, he says, is not an extra letter without meaning, as some commentators hold; it opens an oath whose point is a denial. The sense becomes: No, I swear by the positions of the stars, the matter is not as you claim about the Qur'an, that it comes of magic or sorcery; rather it is an honourable Qur'an. He cites Ibn Jarir reporting some scholars of Arabic: fala means the matter is not as you have claimed, and then the oath is renewed.",
            "bn": "ইবন কাসীরের পাঠে শপথটা আগে প্রতিবাদ, তারপর ঘোষণা। ফালা উকসিমু-র 'লা' তাঁর মতে অর্থহীন বাড়তি অক্ষর নয়, যদিও কিছু তাফসীরকার তা-ই বলেন। এখানে 'লা' দিয়ে এমন শপথ শুরু হয়েছে, যার মূল কথাই অস্বীকার। তখন অর্থ দাঁড়ায়: না, নক্ষত্রের অবস্থানস্থলের শপথ করে বলছি, তোমরা কুরআনকে জাদু বা জাদুবিদ্যার ফল বলে যে দাবি করো, ব্যাপারটা তেমন নয়। বরং এ সম্মানিত কুরআন। তিনি ইবন জারীরের সূত্রে কিছু আরবি ভাষাবিদের মতও আনেন: ফালা মানে, তোমরা যা দাবি করেছ, ব্যাপারটা তেমন নয়। তারপর নতুন করে শপথ শুরু হয়।"
          },
          {
            "en": "Al-Qurtubi lists what karim is set against: the Qur'an is not sihr, magic; not kahana, soothsaying; and not muftara, something fabricated. Ma'arif al-Qur'an says the verse refutes the pagans' assumption that a human being forged the Book, or that it is speech inspired by the devil. Ibn Kathir, reaching 56:80 in the same passage, adds poetry: a revelation from the Lord of all that exists, not magic, sorcery or poetry as they say. Each commentator names the charge in his own words, and the verse answers every one of them with a single adjective.",
            "bn": "কারীম শব্দটি কীসের বিপরীতে দাঁড়িয়ে, কুরতুবী তার তালিকা দেন। কুরআন সিহর বা জাদু নয়, কাহানা বা গণকের কথা নয়, মুফতারা বা বানানো কথাও নয়। মাআরিফুল কুরআন বলে, মুশরিকদের ধারণা ছিল কোনো মানুষ এ কিতাব বানিয়েছে, কিংবা এটা শয়তানের প্ররোচিত কথা। আয়াতটি সেই ধারণা খণ্ডন করে। একই আলোচনায় ৫৬:৮০ আয়াতে পৌঁছে ইবন কাসীর কবিতার কথাও যোগ করেন। এটা জগৎসমূহের রবের পক্ষ থেকে নাজিল হওয়া বাণী, তারা যেমন বলে তেমন জাদু, জাদুবিদ্যা বা কবিতা নয়। প্রত্যেক তাফসীরকার অভিযোগটা বলেন নিজের ভাষায়। আয়াত সবগুলোর জবাব দেয় একটি বিশেষণে।"
          },
          {
            "en": "These were the charges made against the Qur'an by those who rejected it when it came down, and the commentators name them to show what the oath answers. The verse speaks only of what it names. It licenses nothing against any living person or community, and gives no one a warrant to treat a questioner or a doubter today as the target of these lines. What it hands the reader is a claim about the Book, made with the weight of an oath, and not a verdict on people. The rest of this article stays with that claim.",
            "bn": "নাজিলের সময় যারা কুরআনকে প্রত্যাখ্যান করেছিল, এগুলো ছিল তাদের তোলা অভিযোগ। শপথটা কীসের জবাব, তা দেখাতেই তাফসীরকারেরা অভিযোগগুলোর নাম নেন। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আজ কেউ প্রশ্ন তুললে বা সন্দেহ করলে তাকে এই আয়াতের নিশানা বানানোর অধিকারও কাউকে দেয় না। পাঠকের হাতে আয়াতটি তুলে দেয় কিতাব সম্পর্কে একটি দাবি, শপথের ভার দিয়ে বলা। মানুষের উপর কোনো রায় নয়। এই লেখার বাকিটা সেই দাবি নিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "Karim as Rank and Honour",
          "bn": "কারীম মানে মর্যাদা"
        },
        "p": [
          {
            "en": "What does karim mean here? The commentators give more than one answer, and they are best heard one at a time. A first group of glosses speaks of rank. Ibn Kathir, as already seen, says kitabun 'azim, a mighty Book, and the English abridgement renders it a Glorious Book. Al-Baghawi says 'azizun mukram, mighty and held in honour, and gives the reason in a clause: because it is the speech of Allah. Ma'arif al-Qur'an calls it a noble and glorious Book. In each of these, karim names the Qur'an's standing, what it is worth and how high it sits.",
            "bn": "এখানে কারীম মানে কী? তাফসীরকারেরা একাধিক উত্তর দেন, আর সেগুলো একটা একটা করে শোনাই ভালো। প্রথম দলের ব্যাখ্যা মর্যাদা নিয়ে। ইবন কাসীর বলেন কিতাবুন আযীম, মহান কিতাব, যা আগেই দেখা গেছে। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণে আছে গৌরবময় কিতাব। বাগাভী বলেন আযীযুন মুকরাম, প্রবল এবং সম্মানিত। কারণটাও তিনি এক কথায় দেন: কারণ এটা আল্লাহর কালাম। মাআরিফুল কুরআন একে বলে সম্মানিত ও গৌরবময় কিতাব। এই প্রতিটি ব্যাখ্যায় কারীম শব্দ কুরআনের অবস্থান বোঝায়, তার মূল্য কত আর তার আসন কত উঁচু।"
          },
          {
            "en": "Al-Qurtubi gathers several of these into one line. After setting karim against magic, soothsaying and fabrication, he goes on: rather it is a Qur'an karim, mahmud, noble and praised, which Allah made a miracle for His Prophet ﷺ. Here the honour is tied to the Qur'an's function as a sign, the proof given to the Messenger. Read together, these glosses describe a Book that deserves esteem because of whose speech it is and what it was sent to prove. None of them is a statement about what the Qur'an gives; that comes in the next set.",
            "bn": "কুরতুবী এগুলোর কয়েকটাকে একটি বাক্যে জড়ো করেন। কারীমকে জাদু, গণকের কথা আর বানানো কথার বিপরীতে দাঁড় করিয়ে তিনি বলেন, বরং এ কুরআন কারীম ও মাহমূদ, সম্মানিত ও প্রশংসিত। আল্লাহ একে তাঁর নবী ﷺ-এর মুজিযা বানিয়েছেন। এখানে সম্মান জুড়ে আছে নিদর্শন হিসেবে কুরআনের ভূমিকার সঙ্গে, রাসূলকে দেওয়া প্রমাণ হিসেবে। একসঙ্গে পড়লে এই ব্যাখ্যাগুলো এমন এক কিতাবের ছবি আঁকে, যা সম্মান পাওয়ার যোগ্য। কারণ এটা কার কালাম, আর কী প্রমাণ করতে পাঠানো। কুরআন কী দেয়, সে কথা এদের কোনোটাতেই নেই। সেটা আসে পরের দলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Karim as Abundant Giving",
          "bn": "কারীম মানে অঢেল দান"
        },
        "p": [
          {
            "en": "A second group of glosses reads karim as generosity. As-Sa'di says it means kathir al-khayr, abundant in good, and ghazir al-'ilm, copious in knowledge, and then widens the claim: every good and every knowledge is drawn from the Book of Allah and derived from it. The Muyassar uses nearly the same words. This Qur'an revealed to Muhammad ﷺ, it says, is 'azim al-manafi', great in its benefits, kathir al-khayr, abundant in good, and ghazir al-'ilm, copious in knowledge. In this reading the noble Book is the one that gives, and gives much.",
            "bn": "দ্বিতীয় দলের ব্যাখ্যায় কারীম মানে দানশীলতা। সা'দী বলেন, এর অর্থ কাসীরুল খাইর, অনেক কল্যাণের অধিকারী, আর গাযীরুল ইলম, অগাধ জ্ঞানের ভাণ্ডার। তারপর দাবিটা তিনি আরও বড় করেন: সব কল্যাণ আর সব জ্ঞান আল্লাহর কিতাব থেকেই নেওয়া হয়, তা থেকেই বের করে আনা হয়। মুয়াসসারও প্রায় একই শব্দ ব্যবহার করে। মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া এই কুরআন আযীমুল মানাফি, উপকারে মহান। কাসীরুল খাইর, কল্যাণে ভরপুর। গাযীরুল ইলম, জ্ঞানে অগাধ। এই পাঠে সম্মানিত কিতাব সেটাই, যে দেয়, আর অনেক দেয়।"
          },
          {
            "en": "Al-Baghawi, after his gloss of honour, reports a second view from some of ahl al-ma'ani, the scholars of meanings: al-karim is that whose nature is to give much good. So in his short entry both families stand together, honour first and giving second, with the second carried by a named group of scholars. Al-Qurtubi has a gloss of the same kind among his reports: karim because of the noble qualities of character and the meanings of things it contains. Here the generosity is in its content, in what a reader finds when the Book is opened.",
            "bn": "বাগাভী সম্মানের ব্যাখ্যা দেওয়ার পর আহলুল মাআনী, অর্থাৎ অর্থবিশারদ কিছু আলেমের আরেকটি মত আনেন। আল-কারীম সেই, যার স্বভাবই অনেক কল্যাণ দেওয়া। তাই তাঁর ছোট্ট আলোচনাতেই দুই দল পাশাপাশি দাঁড়িয়ে। আগে সম্মান, পরে দান, আর দ্বিতীয়টা এসেছে একদল আলেমের নামে। কুরতুবীর বর্ণিত মতগুলোর মধ্যেও এই ধরনের একটি ব্যাখ্যা আছে। কারীম, কারণ এতে আছে উত্তম চরিত্রের কথা আর নানা বিষয়ের গভীর অর্থ। এখানে দানশীলতা তার বিষয়বস্তুতে। কিতাব খুললে পাঠক যা পায়, তাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Honoured in Whose Eyes",
          "bn": "সম্মান কার কাছে"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds a dimension the others do not: karim to whom. The Qur'an, he writes, is karim 'ala al-mu'minin, honoured among the believers, because it is the speech of their Lord and the healing of their breasts. And it is karim 'ala ahl al-sama', honoured among the people of heaven, because it is the revelation of their Lord and His wahy. So the honour is not only a quality the Book holds in itself. It is also the regard in which two communities hold it, one on earth and one above, each for its own reason.",
            "bn": "কুরতুবী এমন একটা দিক যোগ করেন, যা অন্যদের লেখায় নেই: কারীম, কিন্তু কার কাছে? তিনি বলেন, কুরআন মুমিনদের কাছে সম্মানিত। কারণ এটা তাদের রবের কালাম, তাদের অন্তরের শিফা। আবার আসমানবাসীদের কাছেও সম্মানিত। কারণ এটা তাদের রবের নাজিল করা বাণী, তাঁর ওহি। তাই সম্মান শুধু কিতাবের নিজের ভেতরের কোনো গুণ নয়। দুটি দল একে যে চোখে দেখে, সেটাও এই সম্মানের অংশ। একটি দল জমিনে, অন্যটি উপরে, আর প্রত্যেকের কারণ আলাদা।"
          },
          {
            "en": "He then lists further views, each introduced with qila, it is said. One: karim because it honours the one who memorises it and magnifies the one who recites it. Another: karim meaning not created. He reports the second without developing it, and this article does the same. The first turns the word around. Elsewhere the reader honours the Book; in this gloss the Book honours its reader. Al-Qurtubi gives no ranking among these views, and his qila marks each as a report he is passing on, not a conclusion he is drawing.",
            "bn": "এরপর তিনি আরও কয়েকটি মত আনেন, প্রতিটির শুরুতে 'কীলা', অর্থাৎ বলা হয়েছে। একটি মত: কারীম, কারণ যে একে মুখস্থ রাখে, এ তাকে সম্মানিত করে, আর যে তিলাওয়াত করে, তাকে মর্যাদা দেয়। আরেকটি মত: কারীম মানে যা সৃষ্ট নয়। দ্বিতীয় মতটি তিনি বিস্তারিত না করে শুধু উল্লেখ করেন, এই লেখাও তাই করছে। প্রথম মতটি শব্দের দিক উল্টে দেয়। অন্য জায়গায় পাঠক কিতাবকে সম্মান করে। এই ব্যাখ্যায় কিতাব সম্মান দেয় পাঠককে। মতগুলোর মধ্যে কুরতুবী কোনো ক্রম ঠিক করেন না। 'কীলা' দিয়ে বোঝান, এগুলো তাঁর বর্ণনা করা মত, তাঁর টানা সিদ্ধান্ত নয়।"
          },
          {
            "en": "So the word stands with its glosses around it: mighty and glorious in Ibn Kathir; mighty, honoured and generous in al-Baghawi; abundant in good and copious in knowledge in as-Sa'di and the Muyassar; noble and glorious in Ma'arif al-Qur'an; and in al-Qurtubi praised, a miracle, honoured among believers and the people of heaven, rich in noble character, ennobling its bearer. The commentators do not set these against one another, and this article does not choose among them. Each is a door into the one word, and the word is wide enough to hold them all.",
            "bn": "তাহলে শব্দটি দাঁড়িয়ে আছে তার ব্যাখ্যাগুলো চারপাশে নিয়ে। ইবন কাসীরের কাছে মহান ও গৌরবময়। বাগাভীর কাছে প্রবল, সম্মানিত, দানশীল। সা'দী আর মুয়াসসারের কাছে কল্যাণে ভরপুর, জ্ঞানে অগাধ। মাআরিফুল কুরআনের কাছে সম্মানিত ও গৌরবময়। আর কুরতুবীর কাছে প্রশংসিত, মুজিযা, মুমিন ও আসমানবাসীদের কাছে সম্মানিত, উত্তম চরিত্রের কথায় সমৃদ্ধ, ধারককে মর্যাদা দানকারী। তাফসীরকারেরা এগুলোকে পরস্পরের বিরুদ্ধে দাঁড় করান না। এই লেখাও এদের মধ্যে কোনোটাকে বেছে নেয় না। প্রতিটি ব্যাখ্যা একই শব্দে ঢোকার একেকটি দরজা, আর শব্দটি এত প্রশস্ত যে সবগুলোই তাতে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept, Then Sent Down",
          "bn": "সংরক্ষিত, তারপর নাজিল"
        },
        "p": [
          {
            "en": "The sentence does not stop at karim. The next verses go on to say where this Qur'an is kept: fi kitabin maknun, in a protected Book, of which 56:79 then speaks further, and in 56:80 that it is a revelation from the Lord of the worlds. Ma'arif al-Qur'an reads the protected Book as the Preserved Tablet. The Muyassar describes it as a book guarded and hidden from the eyes of creatures, the book that is in the hands of the angels. The commentators' discussion of 56:79 and its words belongs to that verse, and this article does not take it up.",
            "bn": "বাক্যটি কারীম শব্দে এসে থেমে যায় না। পরের আয়াতগুলো বলে এই কুরআন কোথায় রাখা আছে: ফী কিতাবিম মাকনূন, সুরক্ষিত এক কিতাবে। ৫৬:৭৯ আয়াত সে বিষয়ে আরও কথা বলে। আর ৫৬:৮০ আয়াত বলে, এটা জগৎসমূহের রবের পক্ষ থেকে নাজিল হওয়া। মাআরিফুল কুরআন সুরক্ষিত কিতাব বলতে লাওহে মাহফূজ বোঝে। মুয়াসসারের বর্ণনায় সেটি এমন কিতাব, যা সংরক্ষিত, সৃষ্টির চোখের আড়ালে লুকানো, ফেরেশতাদের হাতে থাকা কিতাব। ৫৬:৭৯ আয়াত আর তার শব্দগুলো নিয়ে তাফসীরকারদের আলোচনা সেই আয়াতেরই বিষয়। এই লেখা সেখানে যাচ্ছে না।"
          },
          {
            "en": "No hadith in the tafsir texts consulted for this verse is attached to it. The one Prophetic report in Ibn Kathir's passage, the narration of Zayd ibn Khalid about the morning after rain at al-Hudaybiyah, belongs to his explanation of 56:82, and the words of 'A'ishah he quotes are given only to illustrate an Arabic usage of la. Neither is cited here as bearing on 56:77. No occasion of revelation is given for the verse in these sources either. Its setting is its place in the passage: the answer to an oath, between the stars and the protected Book.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিতেই এর সঙ্গে কোনো হাদিস জোড়া হয়নি। ইবন কাসীরের আলোচনায় হাদিস একটিই: হুদাইবিয়ায় বৃষ্টির রাতের পরের সকাল নিয়ে যায়েদ ইবন খালিদ (রাঃ)-এর বর্ণনা। তবে সেটা তাঁর ৫৬:৮২ আয়াতের ব্যাখ্যার অংশ। আর আয়িশা (রাঃ)-এর যে কথা তিনি উদ্ধৃত করেন, তা শুধু আরবিতে 'লা' শব্দের এক ব্যবহার বোঝাতে। ৫৬:৭৭ আয়াতের প্রসঙ্গে এর কোনোটাই এখানে আনা হচ্ছে না। এসব সূত্রে আয়াতটির কোনো শানে নুযূলও দেওয়া নেই। এর প্রেক্ষাপট হলো এই অংশে এর জায়গা: একটি শপথের জবাব, তারকারাজি আর সুরক্ষিত কিতাবের মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Esteem That Opens the Book",
          "bn": "যে সম্মান কিতাব খোলায়"
        },
        "p": [
          {
            "en": "The two families of glosses ask different things of a reader, and the verse's one word asks both. If karim is rank, the Qur'an is to be approached as one approaches something high: with care, with attention, with the sense that these are the words of the Lord of the worlds. If karim is generosity, the Qur'an is to be approached as one approaches a generous giver: expecting to be given, coming back again, asking for more. A reader who keeps only the first may honour a Book he rarely opens. A reader who keeps only the second may take from it without regard.",
            "bn": "ব্যাখ্যার দুই দল পাঠকের কাছে দুই রকম জিনিস চায়, আর আয়াতের একটি শব্দ চায় দুটোই। কারীম যদি মর্যাদা হয়, তবে কুরআনের কাছে যেতে হবে উঁচু কোনো কিছুর কাছে যাওয়ার মতো করে। যত্ন নিয়ে, মনোযোগ দিয়ে, এই বোধ নিয়ে যে এগুলো জগৎসমূহের রবের কথা। কারীম যদি দানশীলতা হয়, তবে যেতে হবে দাতার কাছে যাওয়ার মতো করে। কিছু পাওয়ার আশা নিয়ে, বারবার ফিরে এসে, আরও চেয়ে। যে শুধু প্রথমটা রাখে, সে এমন কিতাবকে সম্মান করতে পারে, যা সে কমই খোলে। যে শুধু দ্বিতীয়টা রাখে, সে সম্মান ছাড়াই তা থেকে নিতে পারে।"
          },
          {
            "en": "As-Sa'di's line is worth carrying away: every good and every knowledge is drawn from the Book of Allah. That is a claim about where to look. And al-Qurtubi's gloss turns the relation round once more: the Book honours the one who memorises it and magnifies the one who recites it. A mighty oath was sworn to say this Qur'an is karim. The passage then asks, at 56:81, whether it is to this discourse that people are indifferent. The question can be put to oneself before any other: is my own regard for the Book, and my own use of it, worthy of what was sworn?",
            "bn": "সা'দীর একটি কথা মনে রেখে দেওয়ার মতো: সব কল্যাণ আর সব জ্ঞান আল্লাহর কিতাব থেকেই নেওয়া। কোথায় খুঁজতে হবে, এ তারই দাবি। আর কুরতুবীর বর্ণিত ব্যাখ্যা সম্পর্কটা আরেকবার উল্টে দেয়: যে কুরআন মুখস্থ রাখে, কুরআন তাকে সম্মানিত করে। যে তিলাওয়াত করে, তাকে মর্যাদা দেয়। এই কুরআন কারীম, এ কথা বলতে বড় এক শপথ করা হয়েছে। এরপর ৫৬:৮১ আয়াতে প্রশ্ন আসে, তবুও কি তোমরা এ বাণীকে তুচ্ছ মনে করছ? প্রশ্নটা অন্য কারও আগে নিজেকেই করা যায়। কিতাবের প্রতি আমার সম্মান আর তার সঙ্গে আমার ব্যবহার কি সেই শপথের যোগ্য?"
          }
        ]
      }
    ]
  },
  "56:84-85": {
    "sections": [
      {
        "h": {
          "en": "A Room at the Final Breath",
          "bn": "শেষ নিঃশ্বাসের ঘর"
        },
        "p": [
          {
            "en": "The scene opens in 56:83 with falawla idha balaghati al-hulqum: then why, when it reaches the throat. The verb has no named subject. Ibn Kathir, in the abridged English, supplies it as the soul, and explains al-hulqum as the throat at the time of death. These two verses then fill the room. Wa antum hina'idhin tanzurun: and you, at that hour, are looking on. Wa nahnu aqrabu ilayhi minkum wa lakin la tubsirun: and We are nearer to him than you, but you do not see.",
            "bn": "দৃশ্যটা শুরু হয় ৫৬:৮৩ আয়াতে: ফালাওলা ইযা বালাগাতিল হুলকূম, তাহলে কেন, যখন তা কণ্ঠনালীতে পৌঁছে যায়। ক্রিয়ার কর্তা এখানে নাম ধরে বলা হয়নি। সংক্ষিপ্ত ইংরেজি ইবন কাসীরে কর্তা হিসেবে প্রাণের কথা আছে, আর হুলকূমের ব্যাখ্যা মৃত্যুর সময়ের কণ্ঠনালী। এরপর এই দুই আয়াত ঘরটা ভরে তোলে। ওয়া আনতুম হীনাইযিন তানযুরূন: আর তোমরা তখন তাকিয়ে থাকো। ওয়া নাহনু আকরাবু ইলাইহি মিনকুম ওয়া লাকিল লা তুবসিরূন: আর আমি তোমাদের চেয়ে তার বেশি নিকটে, কিন্তু তোমরা দেখতে পাও না।"
          },
          {
            "en": "Ibn Kathir sets the passage beside a parallel scene from Surat al-Qiyamah, which he quotes in full: when the soul reaches the collarbones, and it is said, who will cure him, and he is certain that it is the parting, and leg is wound about leg, to your Lord on that Day is the procession, 75:26 to 75:30. The abridged English moves from those verses straight to the words Allah said here. In both scenes people stand around the dying, and in both the question of who can help him hangs in the air.",
            "bn": "ইবন কাসীর এই অংশের পাশে রাখেন সূরা কিয়ামাহর অনুরূপ এক দৃশ্য, পুরোটা উদ্ধৃত করে: প্রাণ যখন কণ্ঠার হাড়ে এসে পৌঁছায়, আর বলা হয়, কে আছে তাকে বাঁচানোর, আর সে নিশ্চিত হয় যে এ বিদায়ের ক্ষণ, আর এক পায়ের নলা জড়িয়ে যায় অন্য নলার সাথে, সেদিন যাত্রা তোমার রবের দিকে। আয়াতগুলো ৭৫:২৬ থেকে ৭৫:৩০। সংক্ষিপ্ত ইংরেজি সংস্করণ এ আয়াতগুলো থেকে সরাসরি চলে যায় এখানে আল্লাহর বলা কথায়। দুই দৃশ্যেই মুমূর্ষুকে ঘিরে মানুষ দাঁড়িয়ে আছে। দুই দৃশ্যেই প্রশ্নটা ঝুলে থাকে, তাকে কে বাঁচাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes Fixed, Hands Empty",
          "bn": "চোখ স্থির, হাত খালি"
        },
        "p": [
          {
            "en": "What are the watchers looking at? Ibn Kathir answers plainly: at al-muhtadar, the dying person, and at what he endures of sakarat al-mawt, the stupors of death. As-Sa'di says the same in fewer words: you look at the dying person in this state. Al-Muyassar places the look at an-naz', the drawing out of the soul, when you are present and looking at him. In these notes the looking is literal, eyes on a body and on the struggle that can be seen in it.",
            "bn": "যারা তাকিয়ে আছে, তারা দেখছে কী? ইবন কাসীরের জবাব সোজা: মুহতাদার, অর্থাৎ মুমূর্ষু মানুষটিকে, আর সাকারাতুল মাওত, মৃত্যুযন্ত্রণার যে ঘোর সে সইছে তা। সা'দী কম কথায় একই কথা বলেন: এ অবস্থায় তোমরা মুমূর্ষুকে দেখছ। মুয়াসসার তাকানোটাকে রাখে নায'-এর সময়ে, যখন প্রাণ টেনে বের করা হচ্ছে, আর তোমরা উপস্থিত থেকে তার দিকে চেয়ে আছ। এসব ব্যাখ্যায় তাকানোটা আক্ষরিক। চোখ একটা দেহের উপর, আর সেই দেহে যে কষ্ট দেখা যায় তার উপর।"
          },
          {
            "en": "Al-Baghawi and al-Qurtubi add a time to the look. Al-Baghawi: you, O family of the dead man, look at him, for when his soul will come out. Al-Qurtubi gives the same reading through Ibn Abbas (RA): those of the dying man's family who are present, yantazirun, waiting for when his soul will leave. The verse says tanzurun; the gloss reaches for yantazirun, the verb of waiting from the same root. The look becomes a vigil, and the vigil has only a single ending.",
            "bn": "বাগাভী আর কুরতুবী তাকানোর সাথে সময় জুড়ে দেন। বাগাভী বলেন: হে মৃতের পরিবার, তোমরা তার দিকে তাকিয়ে আছ, কখন তার প্রাণ বের হবে। কুরতুবী একই ব্যাখ্যা আনেন ইবন আব্বাস (রাঃ)-এর সূত্রে: মুমূর্ষুর পরিবারের যারা উপস্থিত, তারা ইয়ানতাযিরূন, অপেক্ষা করছে কখন তার প্রাণ বেরিয়ে যাবে। আয়াতে আছে তানযুরূন, আর ব্যাখ্যায় এসেছে ইয়ানতাযিরূন, একই ধাতুর অপেক্ষা করা অর্থের ক্রিয়া। তাকানোটা তখন হয়ে যায় রাত জেগে পাহারা দেওয়ার মতো। আর সেই পাহারার শেষ একটাই।"
          },
          {
            "en": "Both also record a second reading, introduced with qila, it is said: tanzurun amri wa sultani, you are looking at My command and My authority. Al-Baghawi completes the thought: you cannot push it away, and you own nothing. Al-Qurtubi sets another qila beside the first: you look at the dead man and are able to do nothing for him. On every reading the eyes of the watchers rest on something their hands cannot reach, whether a body in distress or a command already in motion.",
            "bn": "দুজনেই 'কীলা' (বলা হয়) দিয়ে আরেকটি ব্যাখ্যাও আনেন: তানযুরূন আমরী ওয়া সুলতানী, তোমরা আমার হুকুম আর আমার কর্তৃত্ব দেখছ। বাগাভী কথাটা শেষ করেন এভাবে: তোমরা তা ঠেকাতে পারো না, কোনো কিছুরই মালিক তোমরা নও। কুরতুবী তার পাশে আরেকটি কীলা রাখেন: তোমরা মৃতের দিকে তাকিয়ে আছ, অথচ তার জন্য কিছুই করতে পারো না। যে ব্যাখ্যাই ধরা হোক, পাহারাদারদের চোখ পড়ে থাকে এমন কিছুর উপর, যা তাদের হাতের নাগালের বাইরে। হয় যন্ত্রণায় কাতর একটি দেহ, নয়তো চলতে শুরু করা এক হুকুম।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to All, Meant for Some",
          "bn": "সবাইকে বলা, উদ্দেশ্য কয়েকজন"
        },
        "p": [
          {
            "en": "At-Tabari reads the you of the verse with care. Those of their families who attend them at that time look at them, he says, and the address comes out general, to everyone, while what is meant is whoever attends the dying man from his family and others. That, he explains, is known in the speech of the Arabs: a group is addressed with an act as though all were his kin, while some are meant, absent or present, as in you killed so-and-so, when the killer was a single person among them.",
            "bn": "আয়াতের তোমরা শব্দটা তাবারী সাবধানে পড়েন। তিনি বলেন, সে সময় তাদের পরিবারের যারা পাশে থাকে, তারাই তাদের দিকে তাকায়। সম্বোধন বেরিয়েছে সাধারণভাবে, সবার উদ্দেশে, কিন্তু উদ্দেশ্য তারা, যারা মুমূর্ষুর পাশে উপস্থিত থাকে, পরিবারের হোক বা বাইরের। তাঁর ব্যাখ্যায় আরবদের কথায় এটা পরিচিত রীতি। একটা দলকে এমনভাবে কাজের কথা বলা হয় যেন সবাই তার আপনজন, অথচ বোঝানো হয় তাদের কাউকে, সে অনুপস্থিত হোক বা উপস্থিত। যেমন বলা হয়, তোমরা অমুককে হত্যা করেছ, অথচ হত্যাকারী তাদের মধ্যে একজন মাত্র।"
          },
          {
            "en": "On at-Tabari's reading the verse does not speak only to the crowd at a single bedside. It speaks to a whole community, some of whom will be in that room on any given night. Al-Qurtubi records, last and with qila, a reading that turns the address around entirely: it is spoken to the person who is himself in the throes. If what has come upon you is not from Allah, why did you not keep the soul in yourself? The watcher and the watched are, in the end, the same people at different hours.",
            "bn": "তাবারীর এ ব্যাখ্যা অনুযায়ী আয়াতটি কোনো এক শয্যার পাশে দাঁড়ানো ভিড়ের সাথেই শুধু কথা বলছে না। কথা বলছে গোটা এক সমাজের সাথে, যার কেউ না কেউ যেকোনো রাতে সেই ঘরে থাকবে। কুরতুবী সবশেষে, কীলা দিয়ে, এমন এক ব্যাখ্যা আনেন যা সম্বোধনটাই উল্টে দেয়। এ কথা বলা হচ্ছে তাকে, যে নিজেই মৃত্যুযন্ত্রণায় আছে। তোমার উপর যা এসেছে তা যদি আল্লাহর পক্ষ থেকে না হয়, তবে নিজের প্রাণটা নিজের ভেতরে ধরে রাখলে না কেন? শেষ পর্যন্ত যে তাকিয়ে থাকে আর যার দিকে তাকানো হয়, তারা একই মানুষ, শুধু সময় আলাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearer in What Sense",
          "bn": "কোন অর্থে নিকটতর"
        },
        "p": [
          {
            "en": "Wa nahnu aqrabu ilayhi minkum. Who is meant by We here, and nearer in what way, is where the commentators divide. Al-Qurtubi's first gloss is bil-qudrati wal-'ilmi war-ru'yah: by power, knowledge and sight. Al-Baghawi gives the same three, in the order knowledge, power and sight. Ma'arif al-Qur'an takes this line alone: Allah is nearer to the dying person than the people around him in terms of knowledge and power, fully aware of his inner and outer state and in complete control of him.",
            "bn": "ওয়া নাহনু আকরাবু ইলাইহি মিনকুম। এখানে আমি বলতে কাকে বোঝানো হয়েছে, আর নৈকট্যটা কোন অর্থে, এখানেই তাফসীরকারদের পথ আলাদা হয়ে যায়। কুরতুবীর প্রথম ব্যাখ্যা বিল কুদরাতি ওয়াল ইলমি ওয়ার রু'ইয়াহ: ক্ষমতায়, জ্ঞানে আর দেখায়। বাগাভীও এই তিনটিই আনেন, তবে ক্রমটা জ্ঞান, ক্ষমতা, দেখা। মাআরিফুল কুরআন কেবল এই পথটাই নেয়। তার কথায়, জ্ঞান আর ক্ষমতার দিক থেকে আল্লাহ মুমূর্ষুর চারপাশের লোকদের চেয়ে তার বেশি নিকটে। তার ভেতর-বাইরের সব অবস্থা তিনি পুরোপুরি জানেন, আর তার উপর তাঁর কর্তৃত্ব পূর্ণ।"
          },
          {
            "en": "The second reading takes the nearness as that of the angels who take the soul. At-Tabari gives it as his only gloss: Our messengers who seize his soul are nearer to him than you. Ibn Kathir's Arabic note is a single word, bi-mala'ikatina, with Our angels, and al-Muyassar says the same. Al-Qurtubi and al-Baghawi each record this reading as well, under qila: Our messengers who take charge of seizing it, in al-Qurtubi's wording, and who seize his soul, in al-Baghawi's.",
            "bn": "দ্বিতীয় ব্যাখ্যায় নৈকট্যটা সেই ফেরেশতাদের, যারা প্রাণ কবজ করেন। তাবারী এটাকেই একমাত্র ব্যাখ্যা হিসেবে দেন: আমার দূতেরা, যারা তার রূহ কবজ করে, তারা তোমাদের চেয়ে তার বেশি নিকটে। ইবন কাসীরের আরবি টীকা মাত্র একটি শব্দ, বিমালাইকাতিনা, আমার ফেরেশতাদের মাধ্যমে। মুয়াসসারও একই কথা বলে। কুরতুবী আর বাগাভী দুজনেই কীলা দিয়ে এই ব্যাখ্যাটাও উল্লেখ করেন। কুরতুবীর ভাষায়, আমার দূতেরা, যারা তা কবজ করার দায়িত্বে আছে। বাগাভীর ভাষায়, যারা তার রূহ কবজ করে।"
          },
          {
            "en": "As-Sa'di does not choose. His gloss joins both: We are nearer to him than you, bi-'ilmina wa mala'ikatina, by Our knowledge and by Our angels. This article leaves the readings where the commentators leave them. The English rendering on this page carries a bracket, [i.e., Our angels], and that bracket is the translator's choice, not a source; the Bengali rendering instead brackets the pronoun ilayhi as the soul. Neither bracket settles a question that the tafsirs themselves keep open.",
            "bn": "সা'দী কোনোটা বেছে নেন না। তাঁর ব্যাখ্যায় দুটোই একসাথে: আমি তোমাদের চেয়ে তার বেশি নিকটে, বিইলমিনা ওয়া মালাইকাতিনা, আমার জ্ঞানে আর আমার ফেরেশতাদের মাধ্যমে। এ লেখাও ব্যাখ্যাগুলোকে সেখানেই রাখছে, যেখানে তাফসীরকারেরা রেখেছেন। এ পাতার ইংরেজি অনুবাদে বন্ধনীতে আছে, অর্থাৎ আমার ফেরেশতারা। সেটা অনুবাদকের বেছে নেওয়া, কোনো সূত্র নয়। আর বাংলা অনুবাদ ইলাইহি সর্বনামটাকে বন্ধনীতে প্রাণ বলে ধরেছে। তাফসীরগুলো নিজেরাই যে প্রশ্ন খোলা রেখেছে, কোনো বন্ধনী তার মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Messengers Who Do Not Fail",
          "bn": "দায়িত্বে অবহেলা নেই যাঁদের"
        },
        "p": [
          {
            "en": "For the reading of the angels, Ibn Kathir cites 6:61 and 6:62, in his Arabic and in the abridged English alike: He is the subjugator over His servants, and He sends guardians over you, until, when death comes to any of you, Our messengers take him, and they do not fail in their duty; then they are returned to Allah, their true Lord. The plural, rusuluna, Our messengers, puts a company at the moment of death. On this reading the room is fuller than the watchers know.",
            "bn": "ফেরেশতাদের ব্যাখ্যার পক্ষে ইবন কাসীর ৬:৬১ ও ৬:৬২ আয়াত উদ্ধৃত করেন, আরবিতেও, সংক্ষিপ্ত ইংরেজিতেও: তিনি তাঁর বান্দাদের উপর পরাক্রমশালী, তিনি তোমাদের উপর রক্ষক পাঠান। অবশেষে তোমাদের কারও মৃত্যু এলে আমার দূতেরা তাকে তুলে নেয়, আর তারা দায়িত্বে কোনো ত্রুটি করে না। তারপর তাদের ফিরিয়ে নেওয়া হয় আল্লাহর কাছে, যিনি তাদের প্রকৃত অভিভাবক। রুসুলুনা, আমার দূতেরা, শব্দটা বহুবচন। মৃত্যুর মুহূর্তে তাই একদল দূতের উপস্থিতি। এ ব্যাখ্যায় ঘরটা পাহারাদারদের জানার চেয়েও বেশি ভরা।"
          },
          {
            "en": "For the reading of knowledge, al-Qurtubi quotes, right after his first gloss, a saying he attributes to 'Amir ibn 'Abd Qays: I have not looked at anything without seeing Allah nearer to me than it. These are a man's own words, not the Prophet's ﷺ, and al-Qurtubi does not present them as a hadith. No commentary consulted here attaches a hadith to these two verses, so none is quoted here. What the commentators bring to the verses instead is other verses and, here, the words of a man who tried to live by them.",
            "bn": "জ্ঞানের ব্যাখ্যার পক্ষে কুরতুবী তাঁর প্রথম ব্যাখ্যার ঠিক পরেই একটি উক্তি আনেন, যা তিনি আমির ইবন আবদ কায়স-এর বলে উল্লেখ করেন: আমি যে জিনিসের দিকেই তাকিয়েছি, আল্লাহকে আমার কাছে সেটার চেয়ে বেশি নিকটে দেখেছি। এটা একজন মানুষের নিজের কথা, নবী ﷺ-এর কথা নয়, আর কুরতুবী একে হাদিস হিসেবে উপস্থাপন করেন না। যেসব তাফসীর দেখা হয়েছে, তার কোনোটাই এই দুই আয়াতের সাথে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস উদ্ধৃত হলো না। তাফসীরকারেরা এর বদলে এনেছেন অন্য আয়াত, আর এখানে এমন একজনের কথা, যিনি এসব আয়াত মেনে জীবন কাটাতে চেয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "They Look Yet Do Not See",
          "bn": "চোখ খোলা, তবু অদেখা"
        },
        "p": [
          {
            "en": "Two verbs of sight face each other across the pair. Tanzurun in 56:84 is from nazar, turning the eyes towards something. La tubsirun in 56:85 negates absara, to see, to perceive what is there. The watchers do the first completely and fail at the second. That pairing is this article's own observation from the wording; no commentator consulted here draws it out. What the commentators do say, each in his own way, is what it is that goes unseen.",
            "bn": "এই দুই আয়াতে দেখার দুটি ক্রিয়া মুখোমুখি দাঁড়িয়ে। ৫৬:৮৪ আয়াতের তানযুরূন এসেছে নাযার থেকে, কোনো কিছুর দিকে চোখ ফেরানো। ৫৬:৮৫ আয়াতের লা তুবসিরূন হলো আবসারা-র নেতিবাচক রূপ। আবসারা মানে দেখা, যা আছে তা চোখে ধরা। পাহারাদারেরা প্রথম কাজটা পুরোপুরি করে, দ্বিতীয়টায় ব্যর্থ হয়। এই জোড়টা এ লেখার নিজস্ব পর্যবেক্ষণ, শব্দ থেকে টানা। যেসব তাফসীর দেখা হয়েছে, তার কোনোটাই একে আলাদা করে তুলে ধরেনি। তাফসীরকারেরা যা বলেন, তা হলো অদেখা জিনিসটা আসলে কী।"
          },
          {
            "en": "Ibn Kathir: la tarawnahum, you do not see them, meaning the angels, and al-Muyassar and al-Qurtubi say the same. Ma'arif al-Qur'an, keeping to its reading of knowledge and power, says the people around are unable to see Him. Al-Baghawi's note on la tubsirun is two words, alladhina hadaruhu, those who were present at him. His wording leaves open whether it names who fails to see, the family in the room, or what goes unseen, those who came to the dying man. This article does not settle it.",
            "bn": "ইবন কাসীর বলেন: লা তারাওনাহুম, তোমরা তাদের দেখো না, অর্থাৎ ফেরেশতাদের। মুয়াসসার আর কুরতুবীও একই কথা বলেন। মাআরিফুল কুরআন জ্ঞান আর ক্ষমতার ব্যাখ্যাতেই থাকে। তার কথায়, চারপাশের লোকেরা তাঁকে দেখতে পায় না। লা তুবসিরূন নিয়ে বাগাভীর টীকা মাত্র দুই শব্দের: আল্লাযীনা হাদারূহু, যারা তার কাছে উপস্থিত হয়েছে। তাঁর ভাষা থেকে বোঝা যায় না, এ দুই শব্দ কাদের কথা বলছে। যারা দেখতে পায় না তাদের, অর্থাৎ ঘরের পরিবারকে? নাকি যাদের দেখা যায় না তাদের, অর্থাৎ মুমূর্ষুর কাছে যারা এসেছে? এ লেখা বিষয়টির মীমাংসা করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Claim of Control Answered",
          "bn": "নিয়ন্ত্রণের দাবির জবাব"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two readings, each with qila, that hear the scene as a reply. In the first it answers those who said of their brothers, had they been with us they would not have died or been killed, words found at 3:156: did they bring back the soul of any of them when it reached the throat? In the second: why did you not hold his soul in his body, with all your eagerness for his life to be prolonged and your love for him to stay? That reading, in his text, answers the saying we die and live, and nothing destroys us but time, found at 45:24.",
            "bn": "কুরতুবী কীলা দিয়ে আরও দুটি ব্যাখ্যা উল্লেখ করেন, যেখানে দৃশ্যটা একটা জবাব। প্রথমটায় জবাব তাদের প্রতি, যারা নিজেদের ভাইদের সম্পর্কে বলেছিল, তারা আমাদের কাছে থাকলে মরত না, নিহতও হতো না। কথাগুলো আছে ৩:১৫৬ আয়াতে। প্রশ্ন হলো, তাদের কারও প্রাণ কণ্ঠে পৌঁছালে তারা কি তা ফিরিয়ে দিতে পেরেছিল? দ্বিতীয়টায়: তার আয়ু দীর্ঘ হোক, এ নিয়ে তোমাদের এত আগ্রহ, তাকে ধরে রাখার এত ভালোবাসা, তবু তার প্রাণ দেহে আটকে রাখলে না কেন? কুরতুবীর বর্ণনায় এ ব্যাখ্যা তাদের কথার জবাব, আমরা মরি আর বাঁচি, কাল ছাড়া কিছুই আমাদের ধ্বংস করে না। কথাটা আছে ৪৫:২৪ আয়াতে।"
          },
          {
            "en": "Ma'arif al-Qur'an frames the passage the same way. Denial of the Resurrection, it says, amounts in a way to a claim that people's lives and souls are under their own control, and the dying person is the example that refutes it: his near and dear ones want him to live longer, and none of them can intervene. At-Tabari, on 56:85, also records a grammarian of Basra who hears the passage as answering those who claimed they could avoid death. Where that challenge lands belongs to 56:86 and 56:87.",
            "bn": "মাআরিফুল কুরআন অংশটাকে একইভাবে দেখে। তার কথায়, পুনরুত্থান অস্বীকার করা এক অর্থে এই দাবি করা যে মানুষের জীবন আর প্রাণ তার নিজের নিয়ন্ত্রণে। মুমূর্ষু মানুষটি সেই দাবি খণ্ডনের উদাহরণ। তার আপনজনেরা চায় সে আরও বাঁচুক, অথচ তাদের কেউ বাধা দিতে পারে না। তাবারীও ৫৬:৮৫ আয়াতের আলোচনায় বসরার এক ভাষাবিদের মত উল্লেখ করেন। তাঁর মতে অংশটা তাদের জবাব, যারা দাবি করত তারা মৃত্যু এড়াতে পারে। সেই চ্যালেঞ্জ কোথায় গিয়ে দাঁড়ায়, তা ৫৬:৮৬ ও ৫৬:৮৭ আয়াতের বিষয়।"
          },
          {
            "en": "Where this article speaks of deniers, it means those whom the verses and their commentators describe: people who denied the return and claimed a hold on life they did not have. The verses speak only of what they name and license nothing against any living person or community. Nor do they license a reading of anyone's death. What watchers see at a bedside, ease or struggle, is not offered here as evidence of the dying person's standing with Allah. The verses say only that the watchers cannot see what is nearest.",
            "bn": "এ লেখায় যেখানে অস্বীকারকারীদের কথা এসেছে, সেখানে বোঝানো হয়েছে তাদের, যাদের কথা আয়াতগুলো আর তাফসীরকারেরা বলেছেন: যারা ফিরে যাওয়াকে অস্বীকার করত আর জীবনের উপর এমন দখল দাবি করত যা তাদের ছিল না। আয়াতগুলো যা বর্ণনা করে তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু বলার অনুমতি এগুলো দেয় না। কারও মৃত্যুকে ব্যাখ্যা করার অনুমতিও দেয় না। শয্যার পাশে দাঁড়িয়ে মানুষ যা দেখে, স্বস্তি হোক বা কষ্ট, তা এখানে আল্লাহর কাছে মুমূর্ষুর অবস্থানের প্রমাণ হিসেবে আনা হয়নি। আয়াত শুধু বলে, যা সবচেয়ে কাছে, পাহারাদারেরা তা দেখতে পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Learning From the Bedside Chair",
          "bn": "শয্যার পাশের চেয়ার থেকে শেখা"
        },
        "p": [
          {
            "en": "The pair seats the reader in the chair of the onlooker before it puts him in the bed. Most people sit beside a dying relative before they die themselves, and the verses use that experience rather than an abstraction. The love in the room is real and the closeness is real, and neither reaches. Whichever gloss of nearness is taken, power and knowledge or the messengers who take the soul, the people in the room are neither the nearest presence nor the ones deciding.",
            "bn": "এই দুই আয়াত পাঠককে বিছানায় শোয়ানোর আগে বসায় পাশের চেয়ারে, যে তাকিয়ে থাকে তার জায়গায়। বেশির ভাগ মানুষ নিজে মারা যাওয়ার আগে কোনো মুমূর্ষু আপনজনের পাশে বসে। আয়াত কোনো তত্ত্ব দিয়ে নয়, সেই অভিজ্ঞতা দিয়েই কথা বলে। ঘরের ভালোবাসা সত্যি, কাছে থাকাটাও সত্যি, অথচ কোনোটাই পৌঁছায় না। নৈকট্যের যে ব্যাখ্যাই নেওয়া হোক, ক্ষমতা আর জ্ঞান, কিংবা প্রাণ কবজকারী দূতেরা, ঘরের মানুষগুলো সবচেয়ে নিকটের উপস্থিতিও নয়, সিদ্ধান্তদাতাও নয়।"
          },
          {
            "en": "What follows from that is practical. The limit of human control is best learned in the chair, while there is still time to act on the lesson, not in the bed. Visiting the sick, sitting with the dying, washing and burying a relative: each sets that limit in front of the eyes, and the verses ask whether we see it or only look at it. The sentence that opened at 56:83 still waits for its closing clause, and that clause belongs to the verses that follow.",
            "bn": "এ থেকে যা আসে, তা একেবারে বাস্তব। মানুষের নিয়ন্ত্রণের সীমা শেখার ভালো জায়গা ওই চেয়ার, বিছানা নয়, কারণ তখনো শিক্ষাটা কাজে লাগানোর সময় থাকে। অসুস্থকে দেখতে যাওয়া, মুমূর্ষুর পাশে বসা, আপনজনকে গোসল দিয়ে দাফন করা, এর প্রতিটিই সেই সীমাকে চোখের সামনে এনে রাখে। আয়াত জানতে চায়, আমরা কি সেটা দেখি, নাকি শুধু তাকিয়েই থাকি। ৫৬:৮৩ আয়াতে যে বাক্য শুরু হয়েছিল, তার শেষ অংশ এখনো বাকি। সেটা পরের আয়াতগুলোর বিষয়।"
          }
        ]
      }
    ]
  },
  "56:91": {
    "sections": [
      {
        "h": {
          "en": "The Second Branch Answered",
          "bn": "দ্বিতীয় শর্তের জবাব"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah returns near its close to the division it began with. At the opening, 56:7 sorts people into three kinds; near the end the same three are named again, this time at the bedside of a dying person. Ma'arif al-Qur'an reads 56:88 to 56:94 as that summary: the foremost, the companions of the right, and the deniers who went astray. Our verse answers the second branch. 56:90 sets the condition, wa-amma in kana min ashab al-yamin, and if he was of the companions of the right, and 56:91 gives the answer in five words.",
            "bn": "সূরা ওয়াকিআ শেষের কাছে এসে আবার ফিরে যায় সেই ভাগে, যা দিয়ে সে শুরু করেছিল। শুরুতে ৫৬:৭ আয়াত মানুষকে তিনটি ভাগে ভাগ করে। শেষের দিকে সেই তিন দলের নাম আবার আসে, এবার মৃত্যুপথযাত্রী এক মানুষের শিয়রে। মাআরিফুল কুরআন ৫৬:৮৮ থেকে ৫৬:৯৪ পর্যন্ত আয়াতগুলোকে সেই সারকথা হিসেবেই পড়ে: অগ্রগামীরা, ডান দিকের দল, আর পথভ্রষ্ট অস্বীকারকারীরা। আমাদের আয়াত দ্বিতীয় শাখার জবাব। ৫৬:৯০ আয়াত শর্তটা রাখে, ওয়া আম্মা ইন কানা মিন আসহাবিল ইয়ামীন, আর সে যদি ডান দিকের দলের হয়। ৫৬:৯১ আয়াত জবাব দেয় পাঁচ শব্দে।"
          },
          {
            "en": "Fa-salamun laka min ashab al-yamin. Word by word: then peace, for you, from the companions of the right. The Muyassar gives the plainest sense in a single line: if the one who died was of the companions of the right, it is said to him, safety for you and security, because you are of the companions of the right. Nearly every part of that line is read in several ways by the other commentators: who the you is, who speaks the peace, what kind of peace it is, and how the small word min fits the sentence. This article keeps their answers side by side.",
            "bn": "ফাসালামুল লাকা মিন আসহাবিল ইয়ামীন। শব্দে শব্দে: তবে শান্তি, তোমার জন্য, ডান দিকের দল থেকে। মুয়াসসার সবচেয়ে সরল অর্থটা দেয় একটি লাইনেই: মৃত ব্যক্তি যদি ডান দিকের দলের হয়, তাকে বলা হবে, তোমার জন্য নিরাপত্তা ও নিশ্চিন্তি, কারণ তুমি ডান দিকের দলের লোক। অন্য তাফসীরকারেরা এই লাইনের প্রায় প্রতিটি অংশ একাধিকভাবে পড়েন। এই তুমি কে, শান্তির কথাটা কে বলে, শান্তিটা কোন ধরনের, আর ছোট্ট শব্দ মিন বাক্যে কীভাবে বসে। এ প্রবন্ধ তাঁদের উত্তরগুলো পাশাপাশি রাখবে, কোনোটিকে বেছে নেবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "To Whom Laka Is Said",
          "bn": "লাকা বলা হচ্ছে কাকে"
        },
        "p": [
          {
            "en": "On the first reading, laka is the dying believer himself. Ibn Kathir says the angels give them this good news, saying to one of them: salam laka, that is, no harm is on you, you are going to safety, you are of the companions of the right. As-Sa'di likewise has it said to one of them. At-Tabari's preferred reading speaks to the same person: you are safe from Allah's punishment and from what you dislike, because you are of the companions of the right. On these readings the peace is spoken to the one whose life is ending.",
            "bn": "প্রথম ব্যাখ্যায় লাকা মানে মৃত্যুপথযাত্রী মুমিন নিজে। ইবন কাসীর বলেন, ফেরেশতারা তাদের এই সুসংবাদ দেয়। তাদের একজনকে বলে: সালামুল লাকা, অর্থাৎ তোমার কোনো ক্ষতি নেই, তুমি নিরাপত্তার দিকে চলেছ, তুমি ডান দিকের দলের লোক। সা'দীও বলেন, তাদের একজনকে এ কথা বলা হবে। তাবারী যে ব্যাখ্যাকে সবচেয়ে সঠিক মনে করেন, সেটিও একই মানুষকে সম্বোধন করে: আল্লাহর শাস্তি থেকে আর যা তুমি অপছন্দ করো তা থেকে তুমি নিরাপদ, কারণ তুমি ডান দিকের দলের। এসব ব্যাখ্যায় শান্তির কথা বলা হচ্ছে তাকেই, যার জীবন শেষ হয়ে আসছে।"
          },
          {
            "en": "Al-Qurtubi opens with a different addressee. His first gloss reads: you will see from them nothing but the safety you love, so do not be anxious about them, for they are safe from Allah's punishment. A variant he records, you are spared grief over them, he says has the same meaning. Two further views name the Prophet ﷺ outright: that the companions of the right pray for you, O Muhammad, that Allah send blessing and peace upon you; and that they greet you, O Muhammad. Al-Baghawi begins the same way: safety for you, O Muhammad, from them, so do not be anxious about them.",
            "bn": "কুরতুবীর শুরুতে সম্বোধন অন্য একজনের প্রতি। তাঁর প্রথম ব্যাখ্যা: তুমি তাদের কাছ থেকে তোমার প্রিয় নিরাপত্তা ছাড়া আর কিছু দেখবে না, তাই তাদের নিয়ে দুশ্চিন্তা কোরো না, কারণ তারা আল্লাহর শাস্তি থেকে নিরাপদ। আরেকটি রূপ তিনি উল্লেখ করেন: তাদের নিয়ে দুঃখ থেকে তুমি মুক্ত। তাঁর মতে দুটির অর্থ এক। আরও দুটি মতে সরাসরি নবী ﷺ-এর নাম আসে। একটি হলো, ডান দিকের দল তোমার জন্য দোয়া করে, হে মুহাম্মাদ, যেন আল্লাহ তোমার উপর রহমত ও শান্তি বর্ষণ করেন। অন্যটি, তারা তোমাকে সালাম দেয়, হে মুহাম্মাদ। বাগাভীও শুরু করেন এভাবে: তাদের পক্ষ থেকে তোমার জন্য নিরাপত্তা, হে মুহাম্মাদ, তাই তাদের নিয়ে দুশ্চিন্তা কোরো না।"
          },
          {
            "en": "Neither of them stops there. Al-Qurtubi's list goes on to a reading addressed to the believer: salimta ayyuha al-'abd, you are safe, O servant, from what you dislike, for you are of the companions of the right. Al-Baghawi brings al-Farra' and others with both sides in one sentence: it is granted to you that they are of the companions of the right, or it is said to the companion of the right, it is granted to you that you are of them. So laka may be the one dying, or the Prophet ﷺ hearing about him. The commentators consulted here carry both, and neither is chosen here.",
            "bn": "দুজনের কেউই সেখানে থামেন না। কুরতুবীর তালিকায় পরে আসে মুমিনকে সম্বোধন করা একটি ব্যাখ্যা: সালিমতা আইয়ুহাল আবদ, হে বান্দা, যা তুমি অপছন্দ করো তা থেকে তুমি নিরাপদ, কারণ তুমি ডান দিকের দলের। বাগাভী ফাররা ও অন্যদের মত আনেন, যেখানে এক বাক্যেই দুই দিক আছে। হয় নবীকে বলা হচ্ছে, তোমার কাছে স্বীকৃত যে তারা ডান দিকের দলের। নয়তো ডান দিকের লোকটিকে বলা হচ্ছে, তোমার কাছে স্বীকৃত যে তুমি তাদেরই একজন। তাহলে লাকা হতে পারে মৃত্যুপথযাত্রী নিজে, আবার হতে পারেন নবী ﷺ, যাঁকে তার খবর দেওয়া হচ্ছে। সংগৃহীত তাফসীরগুলোতে দুটিই আছে, এখানে কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Greeting Reaches Him",
          "bn": "কার সালাম তার কাছে পৌঁছায়"
        },
        "p": [
          {
            "en": "If the peace is a greeting, someone must be giving it. Ibn Kathir names the angels, and cites 'Ikrimah: the angels greet him with salam and tell him that he is of the companions of the right. Ibn Kathir calls this a good meaning and sets it beside 41:30 to 41:32, where the angels descend on those who said our Lord is Allah and then stood firm, telling them not to fear and not to grieve, and to receive good news of the Garden they were promised. On this reading the five words are the angels' message at the moment of passing.",
            "bn": "শান্তির কথাটা যদি সালাম হয়, তবে কেউ না কেউ তা দিচ্ছে। ইবন কাসীর বলেন ফেরেশতাদের কথা, আর উদ্ধৃত করেন ইকরিমাকে: ফেরেশতারা তাকে সালাম দেয় আর জানিয়ে দেয় যে সে ডান দিকের দলের। ইবন কাসীর একে সুন্দর অর্থ বলেন। তিনি একে রাখেন ৪১:৩০ থেকে ৪১:৩২ আয়াতের পাশে। সেখানে যারা বলেছে আমাদের রব আল্লাহ, তারপর অবিচল থেকেছে, তাদের উপর ফেরেশতারা নেমে আসে। তারা বলে, ভয় কোরো না, দুঃখ কোরো না, আর যে জান্নাতের ওয়াদা তোমাদের দেওয়া হয়েছিল তার সুসংবাদ নাও। এই ব্যাখ্যায় পাঁচ শব্দের আয়াতটি বিদায়ের মুহূর্তে ফেরেশতাদের বার্তা।"
          },
          {
            "en": "At-Tabari's chain from Qatadah gives two speakers at once: salam min 'ind Allah, peace from Allah, and the angels of Allah greeted him. Ibn Kathir reports Qatadah and Ibn Zayd together: he was kept safe from Allah's punishment, and Allah's angels greeted him. In at-Tabari's own chain, though, Ibn Zayd says only that he was safe from what he dislikes. As-Sa'di adds a speaker of a different kind: peace that reaches you from your brothers, the companions of the right, who greet him and welcome him when he arrives among them. On that reading, min ashab al-yamin names those who say the salam.",
            "bn": "কাতাদা থেকে তাবারীর সনদে একসঙ্গে দুজন বক্তা আসে: সালামুম মিন ইনদিল্লাহ, আল্লাহর পক্ষ থেকে শান্তি, আর আল্লাহর ফেরেশতারা তাকে সালাম দিয়েছে। ইবন কাসীর কাতাদা আর ইবন যায়দকে একসঙ্গে উদ্ধৃত করেন: সে আল্লাহর শাস্তি থেকে নিরাপদ থেকেছে, আর আল্লাহর ফেরেশতারা তাকে সালাম দিয়েছে। কিন্তু তাবারীর নিজের সনদে ইবন যায়দের কথা শুধু এটুকু: যা সে অপছন্দ করে, তা থেকে সে নিরাপদ। সা'দী আনেন ভিন্ন ধরনের বক্তা। তাঁর ভাষায়, তোমার ভাইদের, অর্থাৎ ডান দিকের দলের পক্ষ থেকে তোমার কাছে শান্তি পৌঁছায়। সে যখন তাদের মাঝে গিয়ে পৌঁছায়, তারা তাকে সালাম দেয়, স্বাগত জানায়। এই অর্থে মিন আসহাবিল ইয়ামীন বলে দেয়, সালামটা কারা দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Deathbed, Grave and Rising",
          "bn": "মৃত্যুশয্যা, কবর আর পুনরুত্থান"
        },
        "p": [
          {
            "en": "Al-Qurtubi's last view is that he is greeted with salam as an honour, and on this view he records three opinions about where the greeting happens. The first is at the taking of his soul in this world, when the angel of death greets him; al-Qurtubi attributes this to ad-Dahhak. He adds Ibn Mas'ud's words: when the angel of death comes to take the soul of the believer, he says, your Lord sends you salam. Al-Qurtubi notes that he has already discussed this under 16:32, the verse on those whom the angels take in death while they are good.",
            "bn": "কুরতুবীর শেষ মতটি হলো, সম্মান জানাতে তাকে সালাম দেওয়া হয়। এই মতের ভিত্তিতে সালাম কোথায় দেওয়া হয়, সে বিষয়ে তিনি তিনটি অভিমত উল্লেখ করেন। প্রথমটি দুনিয়াতে তার রূহ কবজের সময়, যখন মালাকুল মাউত তাকে সালাম দেন। কুরতুবী এ মত দাহহাকের বলে উল্লেখ করেন। সঙ্গে আনেন ইবন মাসঊদ (রাঃ)-এর কথা: মালাকুল মাউত যখন মুমিনের রূহ কবজ করতে আসেন, তখন বলেন, তোমার রব তোমাকে সালাম পাঠিয়েছেন। কুরতুবী জানান, এ বিষয়ে তিনি আগেই আলোচনা করেছেন ১৬:৩২ আয়াতে, যেখানে আছে পবিত্র অবস্থায় ফেরেশতারা যাদের মৃত্যু ঘটায় তাদের কথা।"
          },
          {
            "en": "The second opinion places the greeting at the questioning in the grave, where Munkar and Nakir greet him. The third places it at his raising on the Day of Resurrection, when the angels greet him before he has arrived. Then al-Qurtubi gives his own view, introduced with qultu, I say: he may be greeted at all three places, an honour after an honour, and Allah knows best. Ibn Mas'ud's words reach this article only as al-Qurtubi quotes them, without a chain, and they are a Companion's saying, not a hadith of the Prophet ﷺ; they are reported here as his citation and no more.",
            "bn": "দ্বিতীয় অভিমত অনুযায়ী সালাম আসে কবরে প্রশ্নের সময়, যখন মুনকার ও নাকীর তাকে সালাম দেন। তৃতীয় অভিমতে তা আসে কিয়ামতের দিন পুনরুত্থানের সময়, তার পৌঁছানোর আগেই ফেরেশতারা তাকে সালাম দেন। এরপর কুরতুবী 'কুলতু' (আমি বলি) বলে নিজের মত জানান: হতে পারে তিনটি জায়গাতেই তাকে সালাম দেওয়া হয়, সম্মানের পর সম্মান, আর আল্লাহই ভালো জানেন। ইবন মাসঊদ (রাঃ)-এর কথা এ প্রবন্ধে এসেছে কেবল কুরতুবীর উদ্ধৃতির মাধ্যমে, কোনো সনদ ছাড়া। এটি একজন সাহাবীর কথা, নবী ﷺ-এর হাদিস নয়। তাই একে এখানে শুধু তাঁর উদ্ধৃতি হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Safe From What He Feared",
          "bn": "যে ভয় ছিল, তা থেকে নিরাপদ"
        },
        "p": [
          {
            "en": "In these commentaries salam carries a second sense beside the greeting, the state of being safe, and several of them lean on it. The Muyassar's gloss pairs salamah with amn, safety with security. Ibn Kathir's words for the angels' message are la ba'sa 'alayk, no harm is on you, and anta ila salamah, you are headed to safety. As-Sa'di offers as his second reading: peace for you from afflictions, trials and punishment, because you are of the companions of the right, those who were kept safe from al-dhunub al-mubiqat, the sins that destroy. Here salam is less a word said than a condition granted.",
            "bn": "এই তাফসীরগুলোতে সালামের সম্ভাষণ ছাড়াও আরেকটি অর্থ আছে: নিরাপদ থাকার অবস্থা। কয়েকজন তাফসীরকার এই অর্থটির উপরই ভর দেন। মুয়াসসারের ব্যাখ্যায় সালামাহর পাশে আসে আমন, নিরাপত্তার সঙ্গে নিশ্চিন্তি। ইবন কাসীর ফেরেশতাদের বার্তাকে বলেন লা বা'সা আলাইক, তোমার কোনো ক্ষতি নেই, আর আনতা ইলা সালামাহ, তুমি নিরাপত্তার পথে। সা'দীর দ্বিতীয় ব্যাখ্যা: বিপদ, পরীক্ষা আর শাস্তি থেকে তোমার জন্য নিরাপত্তা, কারণ তুমি ডান দিকের দলের। তারা আয-যুনূবুল মূবিকাত, ধ্বংস ডেকে আনা গুনাহগুলো থেকে বেঁচে ছিল। এখানে সালাম মুখে বলা কোনো কথার চেয়ে বেশি, এ হলো দান করা এক অবস্থা।"
          },
          {
            "en": "At-Tabari, after laying out the views, states which he holds soundest: salam laka innaka min ashab al-yamin, peace for you, for you are of the companions of the right. He closes with what that means: you are safe from Allah's punishment and from what you dislike, because you are of the companions of the right. Al-Baghawi cites Muqatil with a gloss of a different kind: that Allah passes over their bad deeds and accepts their good ones. The two senses are not set against each other in the sources; Ibn Kathir holds both together, the angels bringing good news and the news being that no harm is on you.",
            "bn": "সবগুলো মত সাজিয়ে দেওয়ার পর তাবারী জানান কোনটিকে তিনি সবচেয়ে সঠিক মনে করেন: সালামুল লাকা ইন্নাকা মিন আসহাবিল ইয়ামীন, তোমার জন্য শান্তি, কারণ তুমি ডান দিকের দলের। এর অর্থও তিনি বলে দেন: আল্লাহর শাস্তি থেকে আর যা তুমি অপছন্দ করো তা থেকে তুমি নিরাপদ, কারণ তুমি ডান দিকের দলের। বাগাভী মুকাতিলের এক ভিন্ন ধরনের ব্যাখ্যা আনেন: আল্লাহ তাদের মন্দ কাজগুলো ক্ষমা করে দেন আর ভালো কাজগুলো কবুল করেন। উৎসগুলোতে এ দুই অর্থকে পরস্পরের বিপরীতে দাঁড় করানো হয়নি। ইবন কাসীর দুটিকে একসঙ্গে রাখেন: ফেরেশতারা সুসংবাদ আনে, আর সুসংবাদটা হলো, তোমার কোনো ক্ষতি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dropped Word, Understood",
          "bn": "উহ্য শব্দ, বোঝা অর্থ"
        },
        "p": [
          {
            "en": "At-Tabari reports that the grammarians differed. Some Basrans read it with a verb understood: fa-yuqalu, then it is said, peace to you. A Kufan read musallam laka annaka min ashab al-yamin, it is granted to you that you are of the companions of the right, with the word anna dropped and its meaning intended. The comparison is a man who says, I am travelling shortly, and hears, you are believed: travelling shortly. Ibn Kathir gives this in al-Bukhari's name, adding that at-Tabari related it from some Arabic scholars and leaned towards it, a note placed after the prayer reading below, so which reading it points to is left open.",
            "bn": "তাবারী জানান, বাক্যের গঠন নিয়ে ব্যাকরণবিদদের মধ্যে মতভেদ ছিল। বসরার কিছু ব্যাকরণবিদ এখানে একটি উহ্য ক্রিয়া ধরেন: ফাইউকালু, তখন বলা হবে, তোমার জন্য শান্তি। কুফার একজন পড়েন মুসাল্লামুল লাকা আন্নাকা মিন আসহাবিল ইয়ামীন, তোমার কাছে স্বীকৃত যে তুমি ডান দিকের দলের। তাঁর মতে আন্না শব্দটি উহ্য, তবে অর্থে সেটি আছে। তিনি তুলনা দেন এমন লোকের সঙ্গে, যে বলে, আমি শিগগিরই সফরে যাচ্ছি। জবাবে তাকে বলা হয়, তোমার কথা মেনে নিলাম, তুমি শিগগিরই সফরে যাচ্ছ। ইবন কাসীর একই ব্যাখ্যা ও একই তুলনা আনেন বুখারীর নামে। তিনি আরও জানান, ইবন জারীর, অর্থাৎ তাবারী, কিছু আরবি ভাষাবিদ থেকে এটি বর্ণনা করেছেন এবং এর দিকেই ঝুঁকেছেন। তবে এ কথাটি এসেছে দোয়া হিসেবে পড়ার পাঠটির পরে, যা নিচে আসছে। তাই এটি কোন পাঠের দিকে ইঙ্গিত করছে, তা খোলাই রাখা হলো।"
          },
          {
            "en": "The same Kufan adds a second possibility: the phrase may work like a prayer for him, as in suqyan laka min al-rijal, may you be given water among men, and he says that if salam is read in the nominative it is a prayer. Another grammarian in at-Tabari's list treats it as one utterance, salam laka min al-qawm, peace to you from among the people. Al-Baghawi records a further gloss: laka means 'alayka, peace upon you from the companions of the right.",
            "bn": "কুফার সেই একই ব্যাকরণবিদ আরেকটি সম্ভাবনার কথা বলেন। বাক্যটি তার জন্য দোয়ার মতোও কাজ করতে পারে, যেমন বলা হয় সুকইয়ান লাকা মিনার রিজাল, লোকদের মাঝে তুমি পানি পাও। তিনি বলেন, সালাম শব্দকে পেশ দিয়ে পড়লে তা দোয়া। তাবারীর তালিকায় আরেকজন ব্যাকরণবিদ একে একটিমাত্র বাক্য ধরেন: সালামুল লাকা মিনাল কাওম, লোকদের মধ্য থেকে তোমার প্রতি শান্তি। বাগাভী আরও একটি ব্যাখ্যা উল্লেখ করেন: লাকা মানে আলাইকা, ডান দিকের দলের পক্ষ থেকে তোমার উপর শান্তি।"
          },
          {
            "en": "A last question is the particle fa, which seems to answer two conditions at once, amma and in. Al-Qurtubi reports that for al-Mubarrad the answer to in is left out and understood from what precedes it, as when one says, you are a wrongdoer if you did it. For al-Akhfash the fa answers amma and stands in for the answer to in as well. Az-Zajjaj explains amma as moving from one thing to another. At-Tabari's own preference is that min carries the sense of the dropped innaka, so the sentence reads: peace for you, for you are of the companions of the right.",
            "bn": "শেষ প্রশ্নটি ফা অব্যয় নিয়ে। মনে হয় এটি একসঙ্গে দুটি শর্তের জবাব দিচ্ছে, আম্মা আর ইন। কুরতুবী জানান, মুবাররাদের মতে ইন-এর জবাব উহ্য, আগের কথা থেকেই তা বোঝা যায়। যেমন কেউ বলে, তুমি জালিম, যদি কাজটা করে থাকো। আখফাশের মতে ফা আম্মার জবাব, আর সেটিই ইন-এর জবাবের জায়গাও পূরণ করে। যাজ্জাজ আম্মার অর্থ বলেন একটি বিষয় ছেড়ে আরেকটি বিষয়ে যাওয়া। তাবারীর নিজের পছন্দ হলো, উহ্য ইন্নাকা শব্দের অর্থ মিন শব্দটিই বহন করে। তখন বাক্যটি দাঁড়ায়: তোমার জন্য শান্তি, কারণ তুমি ডান দিকের দলের।"
          }
        ]
      },
      {
        "h": {
          "en": "No Narration, No Verdict",
          "bn": "হাদিসও নেই, রায়ও নেই"
        },
        "p": [
          {
            "en": "None of the commentaries consulted here attaches a hadith of the Prophet ﷺ to this verse, and none gives a cause of revelation for it. The narrations Ibn Kathir brings in this passage are tied to the neighbouring verses on the foremost and on the deniers, not to these five words, so none is quoted here. The nearest thing to a report on 56:91 itself is Ibn Mas'ud's saying in al-Qurtubi, given above as a Companion's word cited without a chain.",
            "bn": "সংগৃহীত তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি, শানে নুযূলও বলেনি। এ অংশে ইবন কাসীর যে বর্ণনাগুলো আনেন, সেগুলো পাশের আয়াতগুলোর, অর্থাৎ অগ্রগামী আর অস্বীকারকারীদের প্রসঙ্গের। এই পাঁচ শব্দের সঙ্গে সেগুলোর যোগ নেই, তাই এখানে কোনোটিই উদ্ধৃত হলো না। খোদ ৫৬:৯১ আয়াত নিয়ে সবচেয়ে কাছের বর্ণনা হলো কুরতুবীর উদ্ধৃত ইবন মাসঊদ (রাঃ)-এর কথা, যা ওপরে এসেছে সনদ ছাড়া একজন সাহাবীর উক্তি হিসেবে।"
          },
          {
            "en": "The verse names a rank, not a person. It speaks only of what it names: the passing of someone who was of the companions of the right, and the peace said to him. It licenses nothing about any living person or community. It lets no one declare anyone alive to be among the companions of the right, and the branch that follows in 56:92 lets no one place anyone among the deniers. Ma'arif al-Qur'an calls the companions of the right the general body of believers; who is among them at the end is known to Allah alone.",
            "bn": "আয়াতটি একটি স্তরের নাম বলে, কোনো মানুষের নাম নয়। পাঠে যা আছে, আয়াত সেটুকুই বর্ণনা করে: ডান দিকের দলের এক মানুষের বিদায়, আর তাকে বলা শান্তির কথা। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের ব্যাপারে এটি কোনো কিছুর অনুমতি দেয় না। কোনো জীবিত মানুষকে ডান দিকের দলের বলে ঘোষণা করার অধিকার এটি কাউকে দেয় না। আর ৫৬:৯২ আয়াতে পরের যে শাখা আসে, তা-ও কাউকে অস্বীকারকারীদের মধ্যে ফেলার অধিকার দেয় না। মাআরিফুল কুরআন ডান দিকের দলকে বলে সাধারণ মুমিনদের দল। শেষ পর্যন্ত কে তাদের মধ্যে থাকবে, তা একমাত্র আল্লাহই জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Peace Below the Highest Rank",
          "bn": "সর্বোচ্চ স্তরের নিচেও শান্তি"
        },
        "p": [
          {
            "en": "The companions of the right are not the foremost. Ibn Kathir describes the near ones of 56:88 as those who kept the obligations and the recommended acts and avoided the forbidden, the disliked and even some of the permitted, and he places the companions of the right below their rank. Yet the first word that rank receives is peace. As-Sa'di describes them as kept safe from the sins that destroy. Muqatil, in al-Baghawi, speaks of bad deeds passed over and good deeds accepted, a gloss that assumes there were bad deeds to pass over.",
            "bn": "ডান দিকের দল অগ্রগামীদের স্তরে নয়। ইবন কাসীর ৫৬:৮৮ আয়াতের নৈকট্যপ্রাপ্তদের বর্ণনা দেন এভাবে: তারা ফরজ ও মুস্তাহাব আমল পালন করেছে, আর হারাম, মাকরূহ, এমনকি কিছু হালাল জিনিস থেকেও দূরে থেকেছে। ডান দিকের দলকে তিনি রাখেন তাদের নিচের স্তরে। তবু এই স্তরের প্রথম পাওনা শান্তি। সা'দী তাদের বর্ণনা করেন ধ্বংস ডেকে আনা গুনাহ থেকে বেঁচে থাকা মানুষ হিসেবে। বাগাভীর উদ্ধৃত মুকাতিল বলেন, তাদের মন্দ কাজ ক্ষমা করা হয় আর ভালো কাজ কবুল করা হয়। এ ব্যাখ্যা ধরেই নেয় যে ক্ষমা করার মতো মন্দ কাজও তাদের ছিল।"
          },
          {
            "en": "Still, the verse is conditional: in kana, if he was. That condition is settled by a life before it reaches a deathbed, and the people standing round the dying in 56:86 and 56:87 cannot bring the soul back. The reader hears the verse while the condition is still open. The salam believers give each other in this world is the same word. Saying it with meaning, and living so that others are safe from us, may be a way of preparing for the greeting this verse describes.",
            "bn": "তবু আয়াতটি শর্তযুক্ত: ইন কানা, যদি সে হয়ে থাকে। মৃত্যুশয্যায় পৌঁছানোর আগেই গোটা জীবন দিয়ে এই শর্তের মীমাংসা হয়ে যায়। ৫৬:৮৬ ও ৫৬:৮৭ আয়াতে মৃত্যুপথযাত্রীর চারপাশে যারা দাঁড়িয়ে, তারা প্রাণটাকে ফিরিয়ে আনতে পারে না। পাঠক কিন্তু আয়াতটি শুনছেন এমন সময়ে, যখন শর্তটি এখনো খোলা। দুনিয়াতে মুমিনেরা একে অন্যকে যে সালাম দেয়, সেটিও একই শব্দ। অর্থ বুঝে তা বলা, আর এমনভাবে বাঁচা যাতে অন্যেরা আমাদের থেকে নিরাপদ থাকে, হয়তো এ আয়াতের সেই সালামের জন্য প্রস্তুতিরই একটা পথ।"
          }
        ]
      }
    ]
  }
});
