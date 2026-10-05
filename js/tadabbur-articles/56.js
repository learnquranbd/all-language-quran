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
          "bn": "দ্বিতীয় 'যখন'-এর শুরু"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah opens on a single condition: idha waqa'ati al-waqi'ah, when the Event befalls (56:1). Two short verses follow, that nothing can belie its befalling and that it brings some low and raises others (56:2 and 56:3). Then a second condition begins, in four words: idha rujjati al-ardu rajjan, when the earth is shaken, a shaking. The verb rujjat is passive, so the earth is acted upon rather than acting, and the verbal noun rajjan closes the verse on the same root.",
            "bn": "সূরা আল-ওয়াকিআ খোলে একটিমাত্র শর্ত দিয়ে: ইযা ওয়াকাআতিল ওয়াকিআ, যখন সেই ঘটনা ঘটে যাবে (৫৬:১)। এরপর দুটি ছোট আয়াত। তার সংঘটনকে কেউ মিথ্যা বলতে পারবে না, আর তা কাউকে নামাবে, কাউকে ওঠাবে (৫৬:২ ও ৫৬:৩)। তারপর চারটি শব্দে শুরু হয় দ্বিতীয় শর্ত: ইযা রুজ্জাতিল আরদু রাজ্জা, যখন পৃথিবীকে প্রবল কাঁপুনিতে কাঁপানো হবে। রুজ্জাত ক্রিয়াটি কর্মবাচ্যে। পৃথিবী এখানে নিজে কিছু করছে না, তার উপর কিছু করা হচ্ছে। আয়াতের শেষ শব্দ রাজ্জা একই ধাতুর মাসদার, তাই আয়াতটি শেষও হয় সেই ধাতুতেই।"
          },
          {
            "en": "The next two verses carry the scene further: the mountains are crumbled and become scattered dust (56:5 and 56:6). After that, people become three kinds (56:7), and those groups are named in the verses that follow. This article stays with the shaking of the earth and leaves the mountains and the three groups to their own verses. What the commentators fetched for this verse say about it is not long, but it is exact, and it falls into four parts: the word, the reports, the pictures, and the grammar.",
            "bn": "পরের দুটি আয়াত দৃশ্যটাকে আরও এগিয়ে নেয়। পাহাড় চূর্ণ হয়ে বিক্ষিপ্ত ধুলায় পরিণত হবে (৫৬:৫ ও ৫৬:৬)। তারপর মানুষ তিনটি দলে ভাগ হবে (৫৬:৭), আর পরের আয়াতগুলোতে সেই দলগুলোর নাম আসে। এ লেখা থাকবে শুধু পৃথিবীর কাঁপুনি নিয়ে। পাহাড় আর তিন দলের কথা তাদের নিজ নিজ আয়াতের জন্য তোলা রইল। এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলোর আলোচনা লম্বা নয়, তবে নিখুঁত। তা চারটি ভাগে সাজানো যায়: শব্দের অর্থ, পূর্বসূরিদের বর্ণনা, উপমার ছবি, আর বাক্যগঠন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Root Means Motion",
          "bn": "ধাতুর মূল অর্থ নড়াচড়া"
        },
        "p": [
          {
            "en": "Al-Baghawi states the base meaning plainly: the root of rajj in the language is tahrik, setting something in motion, and the Arabs say rajajtuhu fa-rtajja, I moved it and it moved. Al-Qurtubi gives the verb with its forms, rajjahu yarujjuhu rajjan, meaning he moved it and shook it. He also records the phrase naqatun rajja', which he explains as a she-camel with a great hump, and he leaves that entry as it stands, without tying it to the verse.",
            "bn": "বাগাভী মূল অর্থটা সোজা ভাষায় বলেন। ভাষায় রাজ্জ শব্দের মূল হলো তাহরীক, অর্থাৎ কোনো কিছুকে নাড়ানো। আরবরা বলে রাজাজতুহু ফারতাজ্জা: আমি তাকে নাড়ালাম, আর সে নড়ে উঠল। কুরতুবী ক্রিয়াটির রূপগুলো দেখান, রাজ্জাহু ইয়ারুজ্জুহু রাজ্জান, মানে সে তাকে নাড়াল ও কাঁপাল। তিনি নাকাতুন রাজ্জা কথাটিও উল্লেখ করেন, যার ব্যাখ্যা দেন বড় কুঁজওয়ালা উটনী। তবে এ তথ্যটুকু তিনি যেমন আছে তেমনই রেখে দেন, আয়াতের সঙ্গে জোড়া লাগান না।"
          },
          {
            "en": "At-Tabari takes his illustration from archery. He glosses the verse as: when the earth is quaked and moved with a moving, and explains the word from the Arab saying that the arrow yartajju in the target, meaning that it quivers and shudders. An arrow that has struck its mark and trembles there is the image he chooses. As-Sa'di, the briefest of all, gives two verbs: it was moved, and it convulsed. Four commentators, and each one places motion at the centre of the word.",
            "bn": "তাবারী উদাহরণ নেন তীর ছোড়া থেকে। তাঁর ব্যাখ্যায় আয়াতের অর্থ: যখন পৃথিবীতে ভূকম্পন ঘটানো হবে আর তাকে প্রবলভাবে নাড়ানো হবে। শব্দটা তিনি বোঝান আরবদের একটি কথা দিয়ে: তীর লক্ষ্যবস্তুতে ইয়ারতাজ্জু করছে, মানে থরথর করে কাঁপছে। লক্ষ্যে গেঁথে গিয়ে যে তীর কাঁপতে থাকে, তাবারী সেই ছবিটাই বেছে নেন। সা'দী সবার চেয়ে সংক্ষেপে বলেন, দুটি ক্রিয়ায়: তাকে নাড়ানো হলো, আর সে টলে উঠল। চারজন তাফসীরকার, আর প্রত্যেকেই শব্দটির কেন্দ্রে রাখেন নড়াচড়াকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Quaked, Say the Early Voices",
          "bn": "পূর্বসূরিদের ভাষায় ভূকম্পন"
        },
        "p": [
          {
            "en": "At-Tabari then names those who said the same, each with his chain. From Ibn Abbas, through Ali ibn Abi Talha: zalzalaha, He quaked it. From Mujahid, through Ibn Abi Najih: zulzilat, it was quaked. From Qatada he gives two transmissions with slightly different wording, one through Sa'id, zulzilat zalzalatan, it was quaked with a quaking, and one through Ma'mar, zulzilat zilzalan. He introduces the list by saying that the people of interpretation said the like of what he had said.",
            "bn": "এরপর তাবারী সনদসহ জানান, আর কারা একই কথা বলেছেন। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) বলেছেন: যালযালাহা, তিনি তাকে প্রকম্পিত করলেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেছেন: যুলযিলাত, তাকে প্রকম্পিত করা হলো। কাতাদা থেকে তিনি দুটি বর্ণনা আনেন, শব্দে সামান্য তফাত। সাঈদের সূত্রে: যুলযিলাত যালযালাতান, এক কম্পনে তাকে কাঁপানো হলো। মা'মারের সূত্রে: যুলযিলাত যিলযালান। তালিকাটা শুরুর আগে তাবারী বলে নেন, তিনি যা বলেছেন, ব্যাখ্যাকারেরাও সে রকমই বলেছেন।"
          },
          {
            "en": "Ibn Kathir gathers the same names in one line: Ibn Abbas, Mujahid, Qatada and more than one other said it means zulzilat zilzalan, quaked with a quaking, and his printed text adds shadidan, violent, in brackets. Al-Qurtubi gives the gloss zulzilat wa-hurrikat, quaked and moved, from Mujahid and others. He also preserves one further line from Ibn Abbas: ar-rajjah is a violent movement for which a sound is heard. In that report, then, the shaking is not silent.",
            "bn": "ইবন কাসীর একই নামগুলো এক লাইনে জড়ো করেন। ইবন আব্বাস (রাঃ), মুজাহিদ, কাতাদা আর আরও অনেকে বলেছেন, এর অর্থ যুলযিলাত যিলযালান, এক কম্পনে কাঁপানো হলো। তাঁর ছাপা পাঠে বন্ধনীর ভেতরে শাদীদান শব্দটি যোগ করা, মানে প্রচণ্ড। কুরতুবী মুজাহিদ ও অন্যদের থেকে অর্থ আনেন: যুলযিলাত ওয়া হুররিকাত, কাঁপানো হলো আর নাড়ানো হলো। ইবন আব্বাস (রাঃ)-এর আরেকটি কথাও তিনি সংরক্ষণ করেন: আর-রাজ্জা হলো এমন প্রচণ্ড নড়াচড়া, যার শব্দ শোনা যায়। এ বর্ণনা অনুযায়ী কাঁপুনিটা তাই নিঃশব্দ নয়।"
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
            "bn": "ইবন কাসীর এ নড়াচড়ার বর্ণনা দেন এভাবে: পৃথিবী তার দৈর্ঘ্য আর প্রস্থ জুড়ে কেঁপে উঠবে, টলতে থাকবে। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণে কথাটা এসেছে আরেকটু ভিন্ন রূপে: তার গোটা উপরিভাগ জুড়ে আর গভীর তলদেশ পর্যন্ত। তিনি রাবী ইবন আনাসের যে কথা উদ্ধৃত করেন, তাতে আছে সবচেয়ে ঘরোয়া ছবিটি। চালনিতে যা থাকে তা নিয়ে চালনি যেমন ঝাঁকুনি খায়, তেমনি পৃথিবীও তার ভেতরের সবকিছু নিয়ে ঝাঁকুনি খাবে। গোটা জমিন নড়ছে, সঙ্গে নড়ছে তার বুকে যা আছে সবই।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report a second picture, under the words the commentators said: the earth shakes as a child is rocked in the cradle, until everything on it collapses. Al-Qurtubi's wording goes on: and everything on it breaks, of the mountains and other things. Al-Baghawi has every building on it collapsing, and everything on it, mountains and others, breaking. The two texts differ by a word, a building in one and whatever is on it in the other, and agree on the outcome.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই আরেকটি ছবি আনেন, 'মুফাসসিরগণ বলেছেন' কথাটি দিয়ে। দোলনায় শিশু যেমন দোলে, পৃথিবী তেমনি দুলবে, যতক্ষণ না তার উপরের সবকিছু ধসে পড়ে। কুরতুবীর ভাষ্য আরও এগোয়: পাহাড়সহ তার উপরের সব জিনিস ভেঙে পড়বে। বাগাভীর ভাষ্যে ধসে পড়ে তার উপরের প্রতিটি দালান, আর পাহাড়সহ উপরের সবকিছু ভেঙে যায়। দুই পাঠে তফাত একটি শব্দের। একটিতে 'দালান', অন্যটিতে 'যা কিছু আছে'। পরিণতির ব্যাপারে দুটিই এক।"
          },
          {
            "en": "The Muyassar, which treats 56:4 to 56:6 as one sentence, gives only this for the present verse: when the earth is moved with a severe moving. Its gloss then runs on to the mountains, which belong to the next verse. The cradle image deserves a moment's attention, because a cradle is made to rock a sleeping child gently. In the commentators' picture the same motion is pushed until nothing on the surface of the earth is left standing.",
            "bn": "মুয়াসসার ৫৬:৪ থেকে ৫৬:৬ পর্যন্ত একটিমাত্র বাক্যে ব্যাখ্যা করে। এ আয়াতের জন্য তাতে আছে শুধু এটুকু: যখন পৃথিবীকে প্রচণ্ডভাবে নাড়ানো হবে। এরপর ব্যাখ্যা চলে যায় পাহাড়ের দিকে, যা পরের আয়াতের বিষয়। দোলনার ছবিটা নিয়ে একটু থামা দরকার। দোলনা তো বানানোই হয় ঘুমন্ত শিশুকে আলতো করে দোলানোর জন্য। মুফাসসিরদের ছবিতে সেই দোলাই এত তীব্র হয় যে জমিনের উপর আর কিছুই দাঁড়িয়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Trembling Before Its Lord",
          "bn": "রবের ভয়ে কম্পমান জমিন"
        },
        "p": [
          {
            "en": "Al-Kalbi, quoted by both al-Qurtubi and al-Baghawi, gives a reason rather than a picture. When Allah reveals to the earth, he says, it convulses in fear of Allah. The word he uses for the fear is faraq. On this reading the shaking is not only something done to the earth from outside; it is also the earth's own response to a command from its Lord, and the passive verb of the verse sits beside an earth that answers.",
            "bn": "কালবীর কথা কুরতুবী আর বাগাভী দুজনেই উদ্ধৃত করেন। তিনি ছবি দেন না, কারণ বলেন। আল্লাহ যখন পৃথিবীর কাছে ওহী পাঠাবেন, তখন আল্লাহর ভয়ে সে কেঁপে উঠবে। ভয় বোঝাতে তিনি যে শব্দ ব্যবহার করেন, তা হলো ফারাক। এ ব্যাখ্যায় কাঁপুনিটা শুধু বাইরে থেকে পৃথিবীর উপর চাপানো কিছু নয়। রবের হুকুমে পৃথিবীর নিজের সাড়াও এর ভেতরে আছে। আয়াতের কর্মবাচ্য ক্রিয়ার পাশে তাই দাঁড়িয়ে যায় এক সাড়া দেওয়া পৃথিবী।"
          },
          {
            "en": "The reading invites a comparison that the commentators leave to the reader. The earth, in al-Kalbi's line, receives a command and trembles. People receive many words, a whole surah of them, and can listen without being moved at all. Neither the verse nor al-Kalbi draws that contrast; it is a question for the one reciting, not a claim about the text. What his line gives is an earth that responds to its Lord when He addresses it.",
            "bn": "এ ব্যাখ্যা একটা তুলনার দিকে ইঙ্গিত দেয়, যা মুফাসসিরগণ পাঠকের হাতেই ছেড়ে দেন। কালবীর কথায় পৃথিবী একটি হুকুম পায়, আর কেঁপে ওঠে। মানুষ পায় অনেক কথা, পুরো একটা সূরা, তবু শুনে যেতে পারে একটুও না নড়ে। এ তুলনা আয়াতও করে না, কালবীও করেন না। এ প্রশ্ন তিলাওয়াতকারীর নিজের জন্য, আয়াতের অর্থ হিসেবে দাবি নয়। কালবীর কথা যা দেয় তা হলো এমন এক পৃথিবী, রব সম্বোধন করলে যে সাড়া দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Second When Attaches",
          "bn": "দ্বিতীয় 'যখন' কোথায় বাঁধা"
        },
        "p": [
          {
            "en": "Of the commentators fetched for this verse, al-Qurtubi alone asks how this second idha relates to the first. He begins by stating that its position is accusative as a badal, a substitute, for idha waqa'at in 56:1. A substitute stands in the place of what it replaces, so on this reading the second clause names the same time as the first: the Event befalls, and that is when the earth is shaken.",
            "bn": "এ আয়াতের জন্য সংগৃহীত তাফসীরগুলোর মধ্যে শুধু কুরতুবীই প্রশ্ন তোলেন, দ্বিতীয় ইযা-র সঙ্গে প্রথমটির সম্পর্ক কী। তিনি শুরুতেই বলেন, এর অবস্থান নসবের, আর তা ৫৬:১ আয়াতের ইযা ওয়াকাআত-এর বদল। বদল মানে যার জায়গায় বসে, তারই স্থান নেয়। এ পাঠে তাই দ্বিতীয় বাক্যাংশ প্রথমটির সময়কেই আবার নাম দেয়। সেই ঘটনা যখন ঘটবে, ঠিক তখনই পৃথিবী কাঁপবে।"
          },
          {
            "en": "He then allows a second option: that it is governed by khafidatun rafi'ah in 56:3, so that the Event lowers and raises at the time when the earth is shaken and the mountains crumbled. He gives the reason for this reading as well: at that moment what is high is brought low, and what is low is raised. A third view, introduced with it has been said and credited to az-Zajjaj and al-Jurjani, reads the sense as: the Event befalls when the earth is shaken.",
            "bn": "এরপর তিনি দ্বিতীয় একটি সম্ভাবনাও মেনে নেন। ৫৬:৩ আয়াতের খাফিদাতুর রাফিআ শব্দ দুটিই একে নিয়ন্ত্রণ করতে পারে। তখন অর্থ দাঁড়ায়: পৃথিবী যখন কাঁপবে আর পাহাড় চূর্ণ হবে, সেই সময়ে ঘটনাটি নামাবে আর ওঠাবে। এ পাঠের কারণও তিনি বলে দেন। তখন যা উঁচু তা নিচু হবে, যা নিচু তা উঁচু হবে। তৃতীয় মতটি তিনি আনেন 'বলা হয়েছে' দিয়ে, আর তা যাজ্জাজ ও জুরজানীর বলে উল্লেখ করেন। তাতে অর্থ: পৃথিবী যখন কাঁপবে, তখন সেই ঘটনা ঘটবে।"
          },
          {
            "en": "A fourth view, also under it has been said, supplies an unstated verb: remember when the earth is shaken. Al-Qurtubi states the substitute reading first, permits the second, and reports the last two as views of others, without refuting any of them; this article leaves the matter where he leaves it. The other commentators fetched for this verse explain its words without addressing its grammar, so on this question the record gathered here is al-Qurtubi's alone.",
            "bn": "চতুর্থ মতটিও আসে 'বলা হয়েছে' দিয়ে। তাতে একটি অনুক্ত ক্রিয়া ধরে নেওয়া হয়: স্মরণ করো, যখন পৃথিবী কাঁপবে। কুরতুবী প্রথমে বদলের পাঠটা নিজে বলেন, দ্বিতীয়টাকে বৈধ বলেন, আর শেষ দুটি অন্যদের মত হিসেবে উল্লেখ করেন। কোনোটিকেই তিনি খণ্ডন করেন না। এ লেখাও বিষয়টা সেখানেই রাখছে, যেখানে তিনি রেখেছেন। অন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো শব্দের ব্যাখ্যা দেয়, বাক্যগঠনে যায় না। তাই এ প্রশ্নে এখানে যা আছে, তা কেবল কুরতুবীর।"
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
            "en": "The verse ends on rajjan, the verbal noun of its own verb. Al-Qurtubi's comment on it is short: rajjan is a masdar, and it is evidence of the repetition of the quaking. He does not describe it as emphasis; he reads it as a sign that the shaking comes more than once. None of the other commentators fetched for this verse comments on the verbal noun as such, so this observation, too, rests on him alone.",
            "bn": "আয়াতটি শেষ হয় রাজ্জান শব্দে, যা তার নিজের ক্রিয়ারই মাসদার। এ নিয়ে কুরতুবীর মন্তব্য ছোট: রাজ্জান মাসদার, আর তা প্রমাণ করে যে কম্পন বারবার হবে। তিনি একে জোর দেওয়ার উপায় বলেন না। তাঁর পাঠে এটি ইঙ্গিত দেয় যে কাঁপুনি একবারে শেষ হবে না। সংগৃহীত অন্য কোনো তাফসীর এই মাসদার নিয়ে আলাদা করে কিছু বলে না। তাই এ পর্যবেক্ষণটিও কেবল তাঁর।"
          },
          {
            "en": "Their glosses do, however, keep the same doubled shape. At-Tabari writes hurrikat tahrikan, moved with a moving; Qatada, in Ma'mar's transmission, says zulzilat zilzalan; Ibn Kathir writes hurrikat tahrikan; and the Muyassar has tahrikan shadidan, a severe moving. The commentators explain a doubled phrase with doubled phrases of their own. That is an observation about their wording only, not a ruling that any of them makes about the verse.",
            "bn": "তবে তাঁদের ব্যাখ্যার ভাষাতেও সেই একই দ্বিরুক্ত গড়ন থেকে গেছে। তাবারী লেখেন হুররিকাত তাহরীকান, নাড়ানোর মতো করে নাড়ানো হলো। মা'মারের সূত্রে কাতাদা বলেন যুলযিলাত যিলযালান। ইবন কাসীর লেখেন হুররিকাত তাহরীকান। মুয়াসসারে আছে তাহরীকান শাদীদান, প্রচণ্ড নাড়ানি। দ্বিরুক্ত শব্দবন্ধের ব্যাখ্যা তাঁরা দিয়েছেন নিজেদেরই দ্বিরুক্ত শব্দবন্ধে। এটুকু শুধু তাঁদের ভাষা নিয়ে একটা লক্ষ করার বিষয়। আয়াত নিয়ে তাঁদের কারও কোনো সিদ্ধান্ত এটা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quaking Named Elsewhere",
          "bn": "অন্য আয়াতে একই কম্পন"
        },
        "p": [
          {
            "en": "Ibn Kathir, in both the Arabic and the English abridgement, sets two verses beside this verse with the words: and this is like His saying. The first is 99:1, which the abridgement renders: when the earth is shaken with its earthquake. The second is 22:1: O mankind, have taqwa of your Lord; verily, the earthquake of the Hour is a terrible thing. No other commentator fetched for this verse adds a cross-reference, so these two parallels are his.",
            "bn": "ইবন কাসীর, আরবি মূলে আর ইংরেজি সংক্ষেপে দুই জায়গাতেই, এ আয়াতের পাশে আরও দুটি আয়াত রাখেন। ভূমিকা হিসেবে বলেন: এটা তাঁর এই বাণীর মতো। প্রথমটি ৯৯:১: যখন পৃথিবী তার প্রবল কম্পনে প্রকম্পিত হবে। দ্বিতীয়টি ২২:১: হে মানুষ, তোমাদের রবকে ভয় করো, নিশ্চয়ই কিয়ামতের কম্পন এক ভয়ংকর ব্যাপার। সংগৃহীত অন্য কোনো তাফসীর এ আয়াতের জন্য আর কোনো আয়াতের উল্লেখ করে না। এই দুটি মিল তাই তাঁরই দেখানো।"
          },
          {
            "en": "The second parallel changes the register. In 56:4 the quaking is described and nothing is commanded. In 22:1 the same kind of quaking is named a terrible thing and set directly after a command, to have taqwa of one's Lord. Ibn Kathir does not draw out the link, but placing the verses side by side lets the reader hear the shaking of 56:4 next to that instruction. Read together, the description does not stand alone as spectacle.",
            "bn": "দ্বিতীয় মিলটি সুর বদলে দেয়। ৫৬:৪ আয়াতে কম্পনের বর্ণনা আছে, কোনো হুকুম নেই। ২২:১ আয়াতে একই ধরনের কম্পনকে বলা হয়েছে ভয়ংকর ব্যাপার, আর তা এসেছে সরাসরি একটি হুকুমের পরে: নিজের রবকে ভয় করো। ইবন কাসীর যোগসূত্রটা খুলে বলেন না। তবে আয়াত দুটি পাশাপাশি রাখায় পাঠক ৫৬:৪ আয়াতের কাঁপুনি শোনেন সেই হুকুমের পাশে। একসঙ্গে পড়লে বর্ণনাটা আর নিছক দৃশ্য হয়ে থাকে না।"
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
            "en": "No hadith attaches to this verse in the commentaries fetched for it. Al-Qurtubi cites a narration about travelling by sea when it heaves, but only to show how the verb is used of waves; it is not about this verse, it was not confirmed here, and it is not quoted. Ibn Kathir's opening report concerns the surah as a whole, not this verse. The note from Ma'arif al-Qur'an in this group speaks to 56:3 alone, so it is not used.",
            "bn": "সংগৃহীত তাফসীরগুলোতে এ আয়াতের সঙ্গে যুক্ত কোনো হাদীস নেই। কুরতুবী সমুদ্র উত্তাল থাকার সময় সমুদ্রযাত্রা নিয়ে একটি বর্ণনা আনেন। তবে তা শুধু দেখানোর জন্য যে ঢেউয়ের বেলায় ক্রিয়াটি কীভাবে ব্যবহৃত হয়। বর্ণনাটি এ আয়াত নিয়ে নয়, এখানে যাচাই করা হয়নি, তাই উদ্ধৃতও করা হলো না। ইবন কাসীর সূরার শুরুতে যে বর্ণনা আনেন, তা পুরো সূরা নিয়ে, এ আয়াত নিয়ে নয়। এ দলের মধ্যে মাআরিফুল কুরআনের আলোচনা কেবল ৫৬:৩ আয়াত নিয়ে, তাই তা এখানে নেওয়া হয়নি।"
          },
          {
            "en": "The verse describes the earth at the onset of the Day of Resurrection, which Ibn Kathir names al-Waqi'ah. It is not a statement about the tremors that strike regions of the world now. It gives no basis for treating any such event as a sign of the times, and no licence to read any disaster as aimed at the people it struck. The commentators' language stays with the Day itself, and the reading here stays there with them.",
            "bn": "আয়াতটি বলছে কিয়ামতের সূচনায় পৃথিবীর অবস্থার কথা। ইবন কাসীর সেই দিনকেই বলেন আল-ওয়াকিআ। আজ পৃথিবীর নানা অঞ্চলে যে ভূমিকম্প হয়, এ আয়াত তার বিবরণ নয়। এমন কোনো ঘটনাকে যুগের আলামত বানানোর ভিত্তি এ আয়াত দেয় না। কোনো দুর্যোগকে আক্রান্ত মানুষদের বিরুদ্ধে নির্দেশিত বলে পড়ার অনুমতিও দেয় না। মুফাসসিরদের ভাষা থেকেছে সেই দিনটির ভেতরেই, এ লেখাও সেখানেই থাকছে।"
          },
          {
            "en": "What remains for the reader is the picture itself: the ground that holds everything, moved by its Lord. The arrow trembling in its target, the sieve, the cradle, the sound in Ibn Abbas's report, each makes the most familiar thing in human life unfamiliar. The surah will go on to ask who goes where once the ground has moved. This verse asks only that the reader notice what they stand on, and whose command could set it trembling.",
            "bn": "পাঠকের জন্য থেকে যায় ছবিটা নিজেই: যে জমিন সবকিছু ধরে রাখে, তাকেই নাড়িয়ে দিচ্ছেন তার রব। লক্ষ্যে গেঁথে কাঁপতে থাকা তীর, চালনি, দোলনা, ইবন আব্বাস (রাঃ)-এর বর্ণনায় সেই শব্দ। প্রতিটি ছবি মানুষের জীবনের সবচেয়ে চেনা জিনিসটাকে অচেনা করে তোলে। মাটি নড়ে ওঠার পর কে কোথায় যাবে, সূরাটি সামনে সে কথা বলবে। এ আয়াত শুধু চায়, পাঠক খেয়াল করুক সে কিসের উপর দাঁড়িয়ে আছে। আর কার হুকুমে তা কেঁপে উঠতে পারে।"
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
          "bn": "তৃতীয় দলটি আসে সবার শেষে"
        },
        "p": [
          {
            "en": "Surah al-Waqi'ah has just told its listeners that they will become three kinds (56:7). Two are named at once, each followed by a phrase of wonder: the companions of the right, what are the companions of the right (56:8), and the companions of the left, what are the companions of the left (56:9). The third closes the list in two Arabic words, wa-s-sabiqun as-sabiqun: and the forerunners, the forerunners. At-Tabari opens his comment by placing them. They are the third pair, az-zawj ath-thalith, of the three the surah announced.",
            "bn": "সূরা ওয়াকিআ একটু আগেই শ্রোতাদের জানিয়েছে, তারা তিনটি ভাগে ভাগ হয়ে যাবে (৫৬:৭)। দুটি দলের নাম আসে সঙ্গে সঙ্গে, প্রত্যেকটির পরে বিস্ময়ের এক বাক্য। ডান দিকের দল, কেমন সে ডান দিকের দল (৫৬:৮)। বাম দিকের দল, কেমন সে বাম দিকের দল (৫৬:৯)। তৃতীয় দলটি তালিকা শেষ করে মাত্র দুটি আরবি শব্দে: ওয়াস-সাবিকূনাস-সাবিকূন, আর অগ্রবর্তীরা, অগ্রবর্তীরা। তাবারী তাঁর আলোচনা শুরু করেন এদের জায়গা চিনিয়ে দিয়ে। সূরা যে তিন দলের ঘোষণা দিয়েছে, এরা তার তৃতীয় দল, আয-যাওজুস-সালিস।"
          },
          {
            "en": "Ibn Kathir, in the abridged English rendering of his commentary, describes this third category as the foremost and nearest before Allah, in a better grade and status than those on the right and nearer to Him. He calls them the chiefs of those on the right, because they include the Messengers, Prophets, true believers and martyrs, and he says they are fewer in number. He also joins the three groups to another verse that divides people three ways: some wrong themselves, some keep a middle course, and some are, by Allah's leave, foremost in good deeds (35:32).",
            "bn": "ইবন কাসীরের তাফসীরের সংক্ষিপ্ত ইংরেজি রূপে এই তৃতীয় দলের পরিচয় এভাবে: এরা আল্লাহর কাছে সবচেয়ে অগ্রগামী ও সবচেয়ে নিকটবর্তী। মর্যাদা আর স্তরে এরা ডান দিকের দলের চেয়েও উঁচুতে, আল্লাহর আরও কাছে। তিনি এদের বলেন ডান দিকের দলের নেতা, কারণ এদের মধ্যে আছেন রাসূলগণ, নবীগণ, সত্যনিষ্ঠ মুমিন আর শহীদগণ। সংখ্যায় এরা কম, সে কথাও তিনি বলেন। তিনটি দলকে তিনি আরেকটি আয়াতের সঙ্গে মিলিয়ে দেখান, যেখানে মানুষ তিন ভাগে ভাগ হয়েছে। কেউ নিজের উপর জুলুম করে, কেউ মাঝামাঝি পথে চলে, আর কেউ আল্লাহর অনুমতিতে নেক কাজে সবার আগে (৩৫:৩২)।"
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
            "bn": "দুবার আসা শব্দটি কীভাবে কাজ করছে, কুরতুবী তার দুটি বিশ্লেষণ উল্লেখ করেন। প্রথমটি তিনি আনেন 'বলা হয়' কথাটি দিয়ে। এ মতে প্রথম আস-সাবিকূন উদ্দেশ্য, দ্বিতীয়টি তাওকীদ, অর্থাৎ জোর দেওয়ার জন্য পুনরাবৃত্তি। আর বিধেয় আসে পরের আয়াতে: উলাইকাল মুকাররাবূন, তারাই নৈকট্যপ্রাপ্ত (৫৬:১১)। দ্বিতীয় বিশ্লেষণটি তিনি দেন যাজ্জাজের নামে। তাঁর মতে প্রথম আস-সাবিকূন উদ্দেশ্য, দ্বিতীয়টিই তার বিধেয়। অর্থটাও যাজ্জাজ বলে দেন: আল্লাহর আনুগত্যে যারা আগে ছুটেছে, আল্লাহর রহমতের দিকেও তারাই আগে।"
          },
          {
            "en": "At-Tabari likewise gives two ways to explain why the forerunners stand in the nominative, and he lists both without preferring one. In the first, the first word is made nominative by the second, and the sense becomes the forerunners, the first ones, as one says the foremost, the first. In the second, it is made nominative by ula'ika al-muqarrabun, so the sentence runs on into 56:11. Explaining that phrase, he says these are the ones whom Allah brings near to Himself on the Day of Resurrection, when He admits them to Paradise.",
            "bn": "তাবারীও দেখান, আস-সাবিকূন শব্দটি কেন কর্তৃকারকে, তার দুটি ব্যাখ্যা হতে পারে। দুটিই তিনি উল্লেখ করেন, কোনো একটিকে অগ্রাধিকার না দিয়ে। এক ব্যাখ্যায় দ্বিতীয় শব্দটিই প্রথমটিকে কর্তৃকারকে এনেছে। তখন অর্থ দাঁড়ায়: অগ্রবর্তীরা, যারা প্রথম। যেমন লোকে বলে, সবার আগে যে, সে-ই প্রথম। অন্য ব্যাখ্যায় শব্দটি কর্তৃকারকে এসেছে উলাইকাল মুকাররাবূনের কারণে, ফলে বাক্যটি গড়িয়ে যায় ৫৬:১১ পর্যন্ত। সেই অংশের ব্যাখ্যায় তিনি বলেন, এরা তারাই, কিয়ামতের দিন জান্নাতে প্রবেশ করানোর সময় আল্লাহ যাদের নিজের কাছে টেনে নেবেন।"
          },
          {
            "en": "These are distinct readings of the same two words, and the commentators fetched here keep them side by side as alternatives. In one, the doubling is an emphasis that waits for its predicate in the next verse. In another, it is a complete sentence, in which going ahead here is matched by going ahead there. In a third, the second word carries the sense of being first. This article reports them as the commentators gave them and adds no reading of its own.",
            "bn": "একই দুটি শব্দের এগুলো আলাদা আলাদা পাঠ। এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো এদের পাশাপাশি রেখেছে বিকল্প হিসেবে। এক পাঠে পুনরাবৃত্তিটা জোর দেওয়ার জন্য, বিধেয়ের জন্য তা অপেক্ষা করে পরের আয়াত পর্যন্ত। আরেক পাঠে এটি নিজেই পূর্ণ বাক্য: এখানে যে আগে, সেখানেও সে আগে। তৃতীয় পাঠে দ্বিতীয় শব্দটির মধ্যে আছে প্রথম হওয়ার অর্থ। তাফসীরকারেরা যেভাবে দিয়েছেন, এ লেখা সেভাবেই তা তুলে ধরছে। নিজের কোনো পাঠ যোগ করছে না।"
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
            "bn": "কয়েকজন তাফসীরকার আয়াতটি পড়েছেন দুনিয়া আর আখিরাতের এক মিল হিসেবে। মুয়াসসার কথাটা বলে এক বাক্যে: দুনিয়ায় নেক কাজের দিকে যারা আগে ছোটে, আখিরাতে উঁচু মর্যাদার দিকেও তারাই আগে। সা'দীও প্রায় একই কথা বলেন, শুধু জান্নাতে প্রবেশের কথাটা স্পষ্ট করে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, হিজরতে যারা আগে, আখিরাতেও তারাই আগে। রাবী ইবন আনাস থেকে বর্ণনা করেন, দুনিয়ায় রাসূল ﷺ-এর ডাকে যারা আগে সাড়া দিয়েছে, শেষ ঠিকানায় জান্নাতের দিকেও তারাই আগে।"
          },
          {
            "en": "Ibn Kathir grounds the same reading in two commands. They were foremost, he says, in doing good as Allah commanded them: hasten to forgiveness from your Lord and a Garden as wide as the heavens and the earth (3:133), and race towards forgiveness from your Lord and a Garden as wide as the sky and the earth (57:21). Whoever goes ahead in this world and is first to good, he says, will in the Hereafter be among those ahead to honour, for the reward is of the same kind as the deed, and as you treat others, so you are treated.",
            "bn": "ইবন কাসীর এ পাঠের ভিত্তি খোঁজেন দুটি আদেশে। তাঁর কথায়, আল্লাহ যেমন হুকুম করেছেন, তেমনি এরা নেক কাজে সবার আগে ছিল। একটি আদেশ: তোমাদের রবের মাগফিরাত আর আসমান-জমিনের মতো প্রশস্ত জান্নাতের দিকে দ্রুত এগিয়ে যাও (৩:১৩৩)। অন্যটি: তোমাদের রবের মাগফিরাত আর আসমান-জমিনের মতো প্রশস্ত জান্নাতের দিকে পাল্লা দিয়ে ছোটো (৫৭:২১)। তিনি বলেন, দুনিয়ায় যে আগে এগিয়েছে, কল্যাণের দিকে প্রথম ছুটেছে, আখিরাতে সে সম্মানের দিকে অগ্রবর্তীদের দলে থাকবে। কারণ প্রতিদান আমলের ধরন অনুযায়ীই হয়। যেমন করবে, তেমন পাবে।"
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
            "en": "On who exactly is meant, the sources fetched for this verse give a long list, and none presents it as a ranking. Muhammad ibn Ka'b and Abu Hazrah Ya'qub ibn Mujahid, in Ibn Kathir, say they are the Prophets; Ma'arif al-Qur'an gives that view under the name of Mujahid. As-Suddi says they are the people of 'Illiyyin. Al-Hasan and Qatadah say they come from every nation, which al-Qurtubi words as those ahead to faith from every nation. Al-Baghawi has 'Ikrimah say those ahead to Islam, and Muqatil those ahead to answering the Prophets with faith.",
            "bn": "ঠিক কারা উদ্দেশ্য, এ আয়াতের জন্য দেখা তাফসীরগুলো তার লম্বা তালিকা দেয়, আর কোনোটিই তালিকাটিকে মর্যাদার ক্রম হিসেবে সাজায় না। ইবন কাসীরের বর্ণনায় মুহাম্মাদ ইবন কা'ব আর আবু হাযরা ইয়াকুব ইবন মুজাহিদ বলেন, এরা নবীগণ। মাআরিফুল কুরআন একই মত দেয় মুজাহিদের নামে। সুদ্দী বলেন, এরা ইল্লিয়্যীনের অধিবাসী। হাসান ও কাতাদা বলেন, এরা প্রত্যেক উম্মত থেকে আসবে। কুরতুবী তাঁদের কথাটা বলেন এভাবে: প্রত্যেক উম্মতের মধ্যে যারা ঈমানে আগে। বাগাভীর বর্ণনায় ইকরিমা বলেন, যারা ইসলামে আগে। আর মুকাতিল বলেন, যারা ঈমান এনে নবীদের ডাকে আগে সাড়া দিয়েছে।"
          },
          {
            "en": "Muhammad ibn Sirin says they are those who prayed towards both qiblas, and al-Qurtubi and al-Baghawi both give his proof: the first forerunners among the Emigrants and the Helpers (9:100). Others name a single deed. Ali ibn Abi Talib, in al-Qurtubi and al-Baghawi, says the five daily prayers; ad-Dahhak says jihad; Mujahid, in al-Qurtubi, says jihad and being first to set out for prayer. 'Uthman ibn Abi Sawda, in at-Tabari and Ibn Kathir, says the first of them to go to the mosques and the quickest to go out in the way of Allah.",
            "bn": "মুহাম্মাদ ইবন সীরীন বলেন, এরা তারা, যারা দুই কিবলার দিকেই নামাজ পড়েছে। কুরতুবী ও বাগাভী দুজনেই তাঁর দলিলটাও দেন: মুহাজির ও আনসারদের মধ্যে প্রথম অগ্রবর্তীরা (৯:১০০)। অন্যরা নির্দিষ্ট একটি আমলের নাম নেন। কুরতুবী ও বাগাভীর বর্ণনায় আলী ইবন আবী তালিব (রাঃ) বলেন, পাঁচ ওয়াক্ত নামাজে যারা আগে। দাহহাক বলেন জিহাদে। কুরতুবীর বর্ণনায় মুজাহিদ বলেন জিহাদে, আর নামাজের জন্য সবার আগে বেরিয়ে পড়ায়। তাবারী ও ইবন কাসীরের বর্ণনায় উসমান ইবন আবী সাওদা বলেন, মসজিদে যারা সবার আগে যায়, আর আল্লাহর পথে যারা সবচেয়ে দ্রুত বেরিয়ে পড়ে।"
          },
          {
            "en": "Sa'id ibn Jubayr, in both al-Qurtubi and al-Baghawi, says those quick to repentance and to acts of piety, citing the command to hasten to forgiveness (3:133) and the praise of those who hasten in good things and are foremost in them (23:61). Ibn Kaysan, in al-Baghawi, widens it to all that Allah calls to, and al-Qurazi there says to every good. Ka'b, as al-Baghawi reports, says they are the people of the Qur'an, crowned on the Day of Resurrection. Al-Qurtubi ends his list with it is said: everyone ahead to anything of righteousness.",
            "bn": "কুরতুবী ও বাগাভী দুজনের বর্ণনাতেই সাঈদ ইবন জুবাইর বলেন, যারা তওবায় আর নেক আমলে দ্রুত। দলিল হিসেবে তিনি আনেন মাগফিরাতের দিকে দ্রুত এগোনোর আদেশ (৩:১৩৩), আর তাদের প্রশংসা, যারা কল্যাণের কাজে দ্রুত ছোটে এবং তাতে সবার আগে থাকে (২৩:৬১)। বাগাভীর বর্ণনায় ইবন কাইসান পরিধিটা বাড়িয়ে দেন: আল্লাহ যেদিকেই ডাকেন, সেদিকে যারা আগে। সেখানেই কুরাযী বলেন, সব ধরনের কল্যাণে যারা আগে। বাগাভী কা'ব থেকে বর্ণনা করেন, এরা কুরআনের ধারক, কিয়ামতের দিন যাদের মাথায় মুকুট থাকবে। কুরতুবী তালিকা শেষ করেন 'বলা হয়' দিয়ে: নেক কাজের যেকোনো একটিতে যে আগে, সে-ই এর অন্তর্ভুক্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Names From Earlier Nations",
          "bn": "আগের উম্মতগুলোর কয়েকটি নাম"
        },
        "p": [
          {
            "en": "Two reports name individual forerunners, and both are attributed to Ibn Abbas. Ibn Kathir cites, through Ibn Abi Hatim, that they are Yusha' ibn Nun, who went ahead to Musa (AS); the believer of the town in Surah Ya-Sin, who went ahead to 'Isa (AS); and Ali ibn Abi Talib, who went ahead to Muhammad ﷺ. Al-Qurtubi, citing al-Mawardi and opening with it is said, gives four: Hizqil, the believer of Pharaoh's family, from the nation of Musa (AS); Habib an-Najjar of Antioch, from the nation of 'Isa (AS); and Abu Bakr and 'Umar from this ummah.",
            "bn": "দুটি বর্ণনায় নির্দিষ্ট কয়েকজন অগ্রবর্তীর নাম এসেছে, আর দুটিই ইবন আব্বাস (রাঃ)-এর নামে। ইবন কাসীর ইবন আবী হাতিমের সূত্রে উল্লেখ করেন: এরা ইউশা ইবন নূন, যিনি মূসা (আঃ)-এর প্রতি ঈমানে আগে ছিলেন। সূরা ইয়াসীনে বর্ণিত জনপদের সেই মুমিন, যিনি ঈসা (আঃ)-এর প্রতি আগে ছিলেন। আর আলী ইবন আবী তালিব (রাঃ), যিনি মুহাম্মাদ ﷺ-এর প্রতি আগে ছিলেন। কুরতুবী মাওয়ার্দীর বরাতে, 'বলা হয়' দিয়ে শুরু করে, চারজনের নাম দেন। মূসা (আঃ)-এর উম্মত থেকে ফিরাউন-পরিবারের মুমিন হিযকীল, ঈসা (আঃ)-এর উম্মত থেকে আন্তাকিয়ার হাবীব নাজ্জার, আর এই উম্মত থেকে আবু বকর ও উমর (রাঃ)।"
          },
          {
            "en": "The two lists differ, and this article keeps both as reported, without choosing between them or weighing their chains. Each names people who were first to believe in a prophet in their own time, which is how the reports themselves describe them. Neither commentator offers his list as the whole meaning; Ibn Kathir, a few lines later, says that all these sayings are sound. Nothing in either report, or in the verse, licenses a claim that any living group or community is, or is not, among the forerunners.",
            "bn": "দুটি তালিকা এক নয়। এ লেখা দুটিকেই বর্ণনা অনুযায়ী রাখছে, কোনোটিকে বেছে না নিয়ে, সনদও না মেপে। প্রতিটি তালিকায় এমন মানুষের নাম আছে, যাঁরা নিজ নিজ সময়ে একজন নবীর প্রতি সবার আগে ঈমান এনেছিলেন। বর্ণনাগুলো নিজেরাই তাঁদের এভাবে পরিচয় দেয়। কোনো তাফসীরকারই নিজের তালিকাকে আয়াতের পুরো অর্থ বলে পেশ করেননি। ইবন কাসীর কয়েক লাইন পরেই বলেন, এসব মতের সবগুলোই সঠিক। কোনো বর্ণনা, কিংবা আয়াতটি নিজে, এমন দাবির সুযোগ দেয় না যে আজকের কোনো দল বা গোষ্ঠী অগ্রবর্তীদের মধ্যে আছে, কিংবা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Commentators Weigh In",
          "bn": "দুই তাফসীরকারের নিজস্ব রায়"
        },
        "p": [
          {
            "en": "At-Tabari states his own reading before he lists anyone else's. The forerunners, he says, are the third pair, those who went ahead to faith in Allah and His Messenger, and they are the first Emigrants, al-muhajirun al-awwalun. He adds that the people of interpretation said something similar. He then reports the differing narrations: Qatadah on every nation, Ibn Sirin on the two qiblas, and 'Uthman ibn Abi Sawda on the mosques and the way of Allah. He gives his own conclusion and the others' side by side, and does not argue against theirs.",
            "bn": "অন্যদের মত আনার আগেই তাবারী নিজের পাঠটা বলে দেন। তাঁর কথায়, অগ্রবর্তীরা হলো তৃতীয় দল, যারা আল্লাহ ও তাঁর রাসূলের প্রতি ঈমানে আগে ছিল। আর এরা হলো প্রথম যুগের মুহাজিররা, আল-মুহাজিরূনাল আওয়ালূন। তিনি যোগ করেন, তাফসীরের আলেমরাও এর কাছাকাছি কথা বলেছেন। তারপর তিনি ভিন্ন ভিন্ন বর্ণনা উল্লেখ করেন। কাতাদা বলেন প্রত্যেক উম্মতের কথা, ইবন সীরীন দুই কিবলার কথা, আর উসমান ইবন আবী সাওদা মসজিদ ও আল্লাহর পথের কথা। নিজের সিদ্ধান্ত আর অন্যদের মত তিনি পাশাপাশি রাখেন, তাঁদের বিরুদ্ধে যুক্তি দেন না।"
          },
          {
            "en": "Ibn Kathir, after listing the views, gives his judgement in a sentence: all these sayings are sound, because what is meant by the forerunners is those who hasten to do good deeds as they were commanded. Ma'arif al-Qur'an reports that conclusion and adds that the opinions do not conflict with one another, since the forerunners are those foremost in faith and righteous deeds in this world, and so foremost in the Hereafter in the reward that fits them. The two positions are reported here as each scholar gave them, without a ranking between them.",
            "bn": "মতগুলো একে একে উল্লেখ করার পর ইবন কাসীর একটিমাত্র বাক্যে রায় দেন: এ সব কথাই সঠিক। কারণ অগ্রবর্তী বলতে বোঝানো হয়েছে তাদের, যারা হুকুম অনুযায়ী নেক কাজে দ্রুত এগিয়ে যায়। মাআরিফুল কুরআন তাঁর এই সিদ্ধান্ত উল্লেখ করে, আর যোগ করে যে মতগুলোর মধ্যে কোনো বিরোধ নেই। কেননা অগ্রবর্তী তারাই, যারা দুনিয়ায় ঈমান ও নেক আমলে সবার আগে ছিল। তাই আখিরাতে তাদের উপযুক্ত প্রতিদানেও তারা সবার আগে। দুই আলেমের অবস্থান এখানে রাখা হলো যাঁর যেমন, দুটির মধ্যে কোনো ক্রম না টেনে।"
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
            "bn": "তাবারী ইবন যায়দের একটি পাঠ সংরক্ষণ করেছেন, যা তিন দলকে মানুষের ভেতরের দিকে ফিরিয়ে দেয়। তিনি বলেন, প্রবৃত্তিকে আমি তিনটি ভাগে পেয়েছি। একজনের ভেতরে প্রবৃত্তি জ্ঞানকে দাবিয়ে রাখে, জ্ঞান সেখানে লাঞ্ছিত। সে জাহান্নামের দলের লোক। আরেকজনের ব্যাপারে আল্লাহ কল্যাণ চাইলে সে জেগে ওঠে, প্রবৃত্তির বিরুদ্ধে জ্ঞানের সহায় হয়। শেষে আল্লাহ জ্ঞানকেই জয়ী করেন, আর তার আমলের সমাপ্তি হয় সেভাবেই। তৃতীয়জন সবার সেরা। তার জ্ঞান দিয়ে আল্লাহ তার প্রবৃত্তিকে এমন হেয় করে দিয়েছেন যে প্রবৃত্তি জেতার কিংবা কোনো ভাগ পাওয়ার আশাই করে না।"
          },
          {
            "en": "Ibn Zayd then maps them onto the surah: two pairs in Paradise and one in the Fire, the forerunner being the one in whom knowledge overcomes desire. Al-Qurtubi gives a similar threefold picture from Shumait ibn al-'Ajlan. One man starts out in good in his youth and keeps to it until he leaves the world: he is the forerunner brought near. Another spends his early life in sins and long heedlessness, then returns in repentance and dies on it: he is of the companions of the right. A third starts in sins and never leaves them: he is of the companions of the left.",
            "bn": "এরপর ইবন যায়দ এদের সূরার সঙ্গে মিলিয়ে দেন। দুই দল জান্নাতে, এক দল জাহান্নামে। আর অগ্রবর্তী সে-ই, যার ভেতরে জ্ঞান প্রবৃত্তির উপর বিজয়ী। কুরতুবী শুমাইত ইবন আজলান থেকে তিন রকম মানুষের প্রায় একই রকম ছবি আনেন। একজন কৈশোর থেকেই ভালো কাজ শুরু করে, দুনিয়া ছাড়া পর্যন্ত তাতে লেগে থাকে। সে-ই নৈকট্যপ্রাপ্ত অগ্রবর্তী। আরেকজন জীবনের শুরুটা কাটায় গুনাহে আর দীর্ঘ গাফলতিতে, তারপর তওবা করে ফেরে, আর সে অবস্থাতেই তার মৃত্যু হয়। সে ডান দিকের দলের। তৃতীয়জন গুনাহ দিয়ে শুরু করে, আর কখনো তা ছাড়ে না। সে বাম দিকের দলের।"
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
            "en": "Ibn Kathir and Ma'arif al-Qur'an cite a report from the Musnad of Imam Ahmad, through 'A'ishah, about who are the forerunners on the Day of Resurrection, and al-Qurtubi mentions a similar wording through al-Mahdawi. This article could not confirm that report on a fetched hadith page with its collector's grading, so its wording is not quoted here. Ibn Kathir also cites a saying of 'Abdullah ibn 'Amr about the angels, and at-Tabari a narration through al-Hasan; neither is used. No sound hadith attached to this verse has been confirmed for this article.",
            "bn": "ইবন কাসীর ও মাআরিফুল কুরআন ইমাম আহমাদের মুসনাদ থেকে আয়েশা (রাঃ)-এর সূত্রে একটি বর্ণনা আনেন, কিয়ামতের দিন অগ্রবর্তী কারা, সে বিষয়ে। কুরতুবীও মাহদাভীর বরাতে কাছাকাছি শব্দে তা উল্লেখ করেন। সংকলকের নিজের মানসহ কোনো হাদীস-পৃষ্ঠায় এ লেখা বর্ণনাটি যাচাই করতে পারেনি। তাই এর ভাষ্য এখানে উদ্ধৃত হলো না। ইবন কাসীর ফেরেশতাদের নিয়ে আবদুল্লাহ ইবন আমর (রাঃ)-এর একটি উক্তিও আনেন, আর তাবারী আনেন হাসানের সূত্রে একটি বর্ণনা। এর কোনোটিই ব্যবহার করা হয়নি। এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদীস এ লেখার জন্য নিশ্চিত করা যায়নি।"
          },
          {
            "en": "The verse also opens onto what comes next. The following verse names the forerunners al-muqarrabun, those brought near (56:11), in the Gardens of Bliss (56:12), and the surah then speaks of a large company of the earlier peoples and a few of the later ones (56:13 and 56:14). Those verses carry their own discussions, and this article leaves them to their place. Here the verse names the third group, and the commentators' answers to who they are run from the Prophets and named believers to anyone who hastens to good.",
            "bn": "আয়াতটি সামনের আলোচনার দরজাও খুলে দেয়। পরের আয়াত অগ্রবর্তীদের নাম দেয় আল-মুকাররাবূন, নৈকট্যপ্রাপ্ত (৫৬:১১), যারা থাকবে নিয়ামতে ভরা জান্নাতে (৫৬:১২)। তারপর সূরা বলে, এদের বড় একটি দল আগের লোকদের মধ্য থেকে, আর অল্প কয়েকজন পরের লোকদের মধ্য থেকে (৫৬:১৩ ও ৫৬:১৪)। ওই আয়াতগুলোর নিজস্ব আলোচনা আছে, এ লেখা সেগুলো তাদের জায়গাতেই রেখে দিচ্ছে। এখানে আয়াতটি তৃতীয় দলের নাম ঘোষণা করে। আর এরা কারা, সে প্রশ্নে তাফসীরকারদের জবাব নবীগণ ও নির্দিষ্ট কয়েকজন মুমিন থেকে শুরু করে পৌঁছে যায় কল্যাণের দিকে দ্রুত ছুটে চলা যেকোনো মানুষ পর্যন্ত।"
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
            "bn": "সূরা আল-ওয়াকিআ মানুষকে তিনটি দলে ভাগ করে, তারপর অগ্রগামীদের কথা বলে: তারা নৈকট্যপ্রাপ্ত, নিয়ামতে ভরা জান্নাতে থাকবে (৫৬:১১ ও ৫৬:১২)। ঠিক আগের আয়াত দুটি তাদের বসিয়ে দেয় কারুকাজ করা আসনে, হেলান দিয়ে, মুখোমুখি (৫৬:১৫ ও ৫৬:১৬)। স্থির সেই দৃশ্যে ৫৬:১৭ প্রথম নড়াচড়া আনে, আরবিতে মাত্র চারটি শব্দে: ইয়াতূফু আলাইহিম উইলদানুম মুখাল্লাদূন, চিরকিশোরেরা তাদের মাঝে ঘুরে ঘুরে আসবে। কিশোরেরা হাতে কী নিয়ে আসবে, তা আছে পরের আয়াতে: পানপাত্র, জগ আর প্রবাহিত ঝর্ণার পেয়ালা (৫৬:১৮)।"
          },
          {
            "en": "At-Tabari names the subject plainly: the youths go round these forerunners whom Allah has brought near in the Gardens of Pleasure. So the verse is not a general picture of Paradise. It continues the description of one group, the forerunners first named at 56:10. That placement shapes the reading. The seated ones do not move; others move around them. Two words then carry the weight of the verse, wildan and mukhalladun, and nearly everything the commentators say about it is an attempt to explain one of those two words.",
            "bn": "কারা সেবা পাবে, তাবারী তা সোজাসুজি বলে দেন: আল্লাহ যে অগ্রগামীদের নিয়ামতে ভরা জান্নাতে নিজের নৈকট্য দিয়েছেন, কিশোরেরা তাদেরই চারপাশে ঘুরবে। কাজেই আয়াতটি জান্নাতের সাধারণ কোনো ছবি নয়। এটি একটি নির্দিষ্ট দলের বর্ণনার ধারাবাহিকতা, যাদের প্রথম উল্লেখ ৫৬:১০ আয়াতে। এই অবস্থান থেকেই পাঠের দিক ঠিক হয়। যারা বসে আছে তারা নড়ে না, অন্যরা তাদের ঘিরে চলাফেরা করে। এরপর আয়াতের পুরো ভার দুটি শব্দের উপর: উইলদান আর মুখাল্লাদূন। তাফসীরকারেরা এ আয়াত নিয়ে যা বলেছেন, তার প্রায় সবই এই দুটির কোনো একটির ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Going Round in Service",
          "bn": "সেবায় ঘুরে ঘুরে আসা"
        },
        "p": [
          {
            "en": "Yatufu describes going round, circulating among people. The commentators say at once what the going round is for. Al-Baghawi glosses it in two words, lil-khidmah, for service. The Muyassar says the same, that youths go round them li-khidmatihim, to serve them, and carries its sentence straight on into the vessels of the next verse. As-Sa'di widens it a little: they go round the people of the Garden to serve them and to see to their needs.",
            "bn": "ইয়াতূফু মানে ঘুরে ঘুরে আসা, মানুষের মাঝে চলাফেরা করা। এই ঘোরাফেরা কিসের জন্য, তাফসীরকারেরা সঙ্গে সঙ্গেই তা বলে দেন। বাগাভী দুই শব্দে ব্যাখ্যা করেন: লিল-খিদমাহ, সেবার জন্য। মুয়াসসারও একই কথা বলে, কিশোরেরা তাদের চারপাশে ঘুরবে লি-খিদমাতিহিম, তাদের সেবা করতে। তারপর বাক্যটি সোজা চলে যায় পরের আয়াতের পানপাত্রের দিকে। সা'দী কথাটা একটু বিস্তৃত করেন: জান্নাতবাসীদের সেবা করতে আর তাদের প্রয়োজন মেটাতে তারা ঘুরে বেড়াবে।"
          },
          {
            "en": "The sources speak of this service only as part of the honour of those who receive it. Al-Qurtubi states the purpose of the scene at the close of his comment: the people of the Garden are in the most complete joy and blessing, and blessing is only completed when servants and youths surround a person. On his reading the verse does not open a separate subject. It finishes a picture of ease that began with the couches and the faces turned towards each other.",
            "bn": "উৎসগুলো এই সেবার কথা বলে কেবল সেবাপ্রাপ্তদের সম্মানের অংশ হিসেবে। কুরতুবী তাঁর ব্যাখ্যার শেষে দৃশ্যটির উদ্দেশ্য বলে দেন। জান্নাতবাসীরা থাকবে পরিপূর্ণ আনন্দ আর নিয়ামতের মধ্যে। আর নিয়ামত তখনই পূর্ণ হয়, যখন সেবক ও কিশোরেরা মানুষকে ঘিরে রাখে। তাঁর পাঠে আয়াতটি নতুন কোনো বিষয় খোলে না। আসন আর মুখোমুখি বসা মুখগুলো দিয়ে স্বস্তির যে ছবি শুরু হয়েছিল, এ আয়াত সেটিকেই পূর্ণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Young, Fair and Hidden",
          "bn": "কম বয়স, রূপ আর আড়াল"
        },
        "p": [
          {
            "en": "Wildan is explained by most of the commentators with another word, ghilman, youths or boys: al-Qurtubi, al-Baghawi and the Muyassar all use it. As-Sa'di describes them rather than defining them: young in years, at the utmost of beauty and radiance. Ibn Kathir's English abridgement renders the phrase immortal boys, and Ma'arif al-Qur'an, whose comment covers 56:15 to 56:17 together, gives the same rendering. The verse itself says nothing more about them.",
            "bn": "বেশির ভাগ তাফসীরকার উইলদান শব্দটি বোঝান আরেকটি শব্দ দিয়ে: গিলমান, অর্থাৎ কিশোর বা বালক। কুরতুবী, বাগাভী আর মুয়াসসার, তিনজনই এ শব্দ ব্যবহার করেছেন। সা'দী সংজ্ঞা না দিয়ে তাদের বর্ণনা দেন: বয়সে ছোট, রূপে আর উজ্জ্বলতায় চূড়ান্ত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে শব্দ দুটির অনুবাদ অমর কিশোর। মাআরিফুল কুরআন ৫৬:১৫ থেকে ৫৬:১৭ পর্যন্ত একসঙ্গে আলোচনা করে, সেখানেও একই অনুবাদ। এর বাইরে আয়াত তাদের সম্পর্কে আর কিছু বলে না।"
          },
          {
            "en": "As-Sa'di then reaches for another verse to describe them, quoting the words ka-annahum lu'lu'un maknun, as though they were hidden pearls. The phrase is from 52:24, where youths of their own go round the people of the Garden. He explains maknun as covered, so that nothing reaches them that would change them. In his comment the hidden pearl and the word mukhalladun point the same way: these youths are kept exactly as they are.",
            "bn": "এরপর সা'দী তাদের বর্ণনায় আরেকটি আয়াতের শব্দ টেনে আনেন: কাআন্নাহুম লু'লুউম মাকনূন, যেন তারা লুকিয়ে রাখা মুক্তা। কথাটি ৫২:২৪ আয়াতের, যেখানে জান্নাতবাসীদের নিজস্ব কিশোরেরা তাদের চারপাশে ঘুরে বেড়ায়। মাকনূনের অর্থ তিনি বলেন ঢেকে রাখা, যাতে বদলে দেওয়ার মতো কিছু তাদের ছুঁতে না পারে। তাঁর ব্যাখ্যায় লুকানো মুক্তা আর মুখাল্লাদূন শব্দ একই দিকে ইশারা করে: এই কিশোরেরা যেমন আছে, ঠিক তেমনই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Age That Never Moves",
          "bn": "যে বয়স আর এগোয় না"
        },
        "p": [
          {
            "en": "Mukhalladun is where the commentators spread out. The shortest gloss is Mujahid's, which at-Tabari gives with its chain through Ibn Abi Najih: la yamutun, they do not die. Al-Qurtubi gives it under Mujahid's name too. At-Tabari's own paraphrase adds a second element: youths of a single age, who do not change and do not die. Al-Baghawi joins three verbs together, they do not die, do not grow old and do not change, and the Muyassar keeps two of them: they do not age and they do not die.",
            "bn": "মুখাল্লাদূন শব্দে এসে তাফসীরকারদের ব্যাখ্যা নানা দিকে ছড়িয়ে পড়ে। সবচেয়ে ছোট ব্যাখ্যাটি মুজাহিদের। তাবারী ইবন আবী নাজীহের সূত্রে তা বর্ণনা করেন: লা ইয়ামূতূন, তারা মরবে না। কুরতুবীও একই ব্যাখ্যা দেন, মুজাহিদের নামেই। তাবারীর নিজের ভাষ্যে আরেকটি দিক যোগ হয়: একই বয়সের কিশোর, যারা বদলায় না, মরেও না। বাগাভী তিনটি ক্রিয়া একসঙ্গে রাখেন: তারা মরবে না, বুড়ো হবে না, বদলাবে না। মুয়াসসার রাখে দুটি: তারা বার্ধক্যে পৌঁছাবে না, মরবেও না।"
          },
          {
            "en": "Others stress age rather than death. Al-Qurtubi reports from al-Hasan and al-Kalbi that they do not grow old and do not change, and he supports it with a line of Imru' al-Qays in which mukhallad describes a fortunate man of few worries, who does not spend his nights in fear. Ibn Kathir, in the Arabic, says they are kept in a single state: they do not grow older than it, do not turn grey and do not change. His English abridgement and Ma'arif al-Qur'an both say they will never grow up, get old or change in shape.",
            "bn": "কেউ কেউ মৃত্যুর চেয়ে বয়সের দিকটিতে জোর দেন। কুরতুবী হাসান আর কালবী থেকে বর্ণনা করেন: তারা বুড়ো হবে না, বদলাবেও না। এর সমর্থনে তিনি ইমরুল কায়সের একটি পঙ্‌ক্তি আনেন। সেখানে মুখাল্লাদ বলা হয়েছে এমন সৌভাগ্যবান মানুষকে, যার দুশ্চিন্তা কম, ভয়ে যার রাত কাটে না। ইবন কাসীর আরবিতে বলেন, তাদের রাখা হবে একই অবস্থায়: সেখান থেকে তারা বড় হবে না, চুল পাকবে না, বদলাবে না। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণ আর মাআরিফুল কুরআন দুটোতেই আছে: তারা কখনো বড় হবে না, বুড়ো হবে না, চেহারাও বদলাবে না।"
          },
          {
            "en": "Two sources tie the meaning to Arabic usage. Al-Baghawi quotes al-Farra': the Arabs say of a man who has grown old without his hair greying, innahu la-mukhallad. At-Tabari cites the same usage without naming al-Farra', and adds that the word is formed from khuld, lasting permanence. Al-Baghawi also reports Ibn Kaysan: youths who are not moved from one state to another. As-Sa'di gathers these strands into one sentence: created for remaining and for permanence, they do not age, do not change, and do not grow beyond the years they have.",
            "bn": "দুটি উৎস অর্থটিকে আরবদের মুখের ভাষার সঙ্গে মিলিয়ে দেখায়। বাগাভী ফাররার কথা উদ্ধৃত করেন: কেউ বয়সে বড় হলো অথচ চুল পাকল না, আরবরা তাকে বলে ইন্নাহূ লা-মুখাল্লাদ। তাবারীও একই ব্যবহারের উল্লেখ করেন, তবে ফাররার নাম নেন না। সঙ্গে যোগ করেন, শব্দটি এসেছে খুলদ থেকে, যার মানে চিরস্থায়িত্ব। বাগাভী ইবন কায়সানের কথাও আনেন: এমন কিশোর, যাদের এক অবস্থা থেকে আরেক অবস্থায় সরানো হয় না। সা'দী সব সুতো এক বাক্যে বাঁধেন: থেকে যাওয়ার জন্য, চিরকালের জন্যই তাদের সৃষ্টি। তারা বুড়ো হয় না, বদলায় না, নিজের বয়স ছাড়িয়েও যায় না।"
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
            "bn": "ব্যাখ্যার দ্বিতীয় ধারাটি মুখাল্লাদূনকে সময়ের কথা হিসেবে না পড়ে সাজসজ্জার কথা হিসেবে পড়ে। কুরতুবী ও বাগাভী দুজনেই সাঈদ ইবন জুবাইরের মত আনেন: এর মানে মুকাররাতূন, কানে দুল পরা। কুরতুবী বলেন, কানের দুলকে বলা হয় খুলদা, আর পুরো এক প্রস্থ গয়নাকেও একই নামে ডাকা হয়। বাগাভী এর পেছনের ক্রিয়াটি দেখান: খাল্লাদা জারিয়াতাহূ, অর্থাৎ কোনো মেয়েকে খুলদ পরিয়ে সাজানো, আর খুলদ মানে কানের দুল। তাবারী কারও নাম না নিয়ে মতটি লিখেছেন 'অন্যরা বলেছেন' বলে: মুকাররাতূন মুসাওয়ারূন, কানে দুল আর হাতে কাঁকন পরা।"
          },
          {
            "en": "Al-Qurtubi lists further variants under qila, it was said. One is musawwarun, wearing bracelets, with something similar reported from al-Farra' and a line of verse in which women are described as mukhalladat with silver. Another takes muqarratun in the sense of girded, wearing belts. 'Ikrimah gives a different gloss altogether: mukhalladun means mun'amun, kept in comfort and ease. Al-Qurtubi sets these readings side by side with the ones about age and death, and he does not choose among them or say that any one is weaker than the others.",
            "bn": "কুরতুবী 'বলা হয়েছে' শিরোনামে আরও কয়েকটি মত আনেন। একটি হলো মুসাওয়ারূন, হাতে কাঁকন পরা। ফাররা থেকেও এর কাছাকাছি কথা এসেছে, সঙ্গে একটি পঙ্‌ক্তি, যেখানে নারীদের বলা হয়েছে রুপার গয়নায় মুখাল্লাদাত। আরেকটি মতে মুকাররাতূনের মানে কোমরবন্ধ পরা। ইকরিমার ব্যাখ্যা একেবারে ভিন্ন: মুখাল্লাদূন মানে মুনআমূন, আরাম আর স্বাচ্ছন্দ্যে রাখা। কুরতুবী এই মতগুলো বয়স ও মৃত্যুর ব্যাখ্যাগুলোর পাশাপাশি রেখেছেন। কোনোটি বেছে নেননি, কোনোটিকে দুর্বলও বলেননি।"
          },
          {
            "en": "At-Tabari is the one commentator here who weighs the two lines against each other. The more correct reading, he says, is that of those who explained it as not changing and not dying, because that is the more evident of the word's two meanings, and he supports it with the usage about a man who ages without greying. That is his preference, stated as his; the other sources list their glosses without ranking them, and so does this article.",
            "bn": "এখানে একমাত্র তাবারীই দুই ধারার মধ্যে তুলনা করে রায় দেন। তাঁর মতে বেশি সঠিক তাদের কথা, যারা ব্যাখ্যা করেছেন: তারা বদলাবে না, মরবেও না। কারণ শব্দটির দুই অর্থের মধ্যে এটিই বেশি স্পষ্ট। সমর্থনে তিনি আবার আনেন সেই বয়স্ক লোকের কথা, যার চুল পাকেনি। এটি তাঁর পছন্দ, এবং তাঁর পছন্দ হিসেবেই এখানে রইল। বাকি উৎসগুলো ক্রম ঠিক না করে শুধু ব্যাখ্যাগুলো তুলে ধরে, এই প্রবন্ধও তা-ই করে।"
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
            "bn": "উইলদান কারা, এ প্রশ্নে তাফসীরকারেরা একাধিক ভিন্ন উত্তর লিপিবদ্ধ করেছেন। কুরতুবী 'বলা হয়েছে' বলে একটি মত আনেন: একই বয়সের কিছু কিশোর, যাদের আল্লাহ জান্নাতবাসীদের জন্যই সৃষ্টি করেছেন, জন্ম ছাড়াই, যেন তারা তাঁর ইচ্ছামতো তাদের চারপাশে ঘোরে। মাআরিফুল কুরআন কাছাকাছি একটি মতকে বলে অগ্রগণ্য মত: জান্নাতের হুরদের মতো জান্নাতের কিশোরেরাও জান্নাতেই জন্ম নেবে এবং জান্নাতবাসীদের সেবক হবে।"
          },
          {
            "en": "Al-Qurtubi then reports two views that identify the youths with children of this world. 'Ali ibn Abi Talib and al-Hasan al-Basri: the wildan here are the children of the Muslims who die young, having no good deed and no bad deed. Salman al-Farisi: the children of the polytheists are the servants of the people of the Garden. Right after this al-Qurtubi gives a reason from al-Hasan: they had no good deeds to be rewarded for and no bad deeds to be punished for, so they were placed in this position. He states no preference among these views.",
            "bn": "এরপর কুরতুবী এমন দুটি মত আনেন, যাতে এই কিশোরদের দুনিয়ার শিশুদের সঙ্গে মেলানো হয়েছে। আলী ইবন আবী তালিব (রাঃ) ও হাসান বসরীর মতে, এখানে উইলদান হলো মুসলমানদের সেই সন্তানেরা, যারা ছোট বয়সে মারা যায়, যাদের কোনো নেকিও নেই, গুনাহও নেই। সালমান ফারসী (রাঃ)-এর মতে, মুশরিকদের শিশুরাই জান্নাতবাসীদের সেবক। ঠিক এর পরে কুরতুবী হাসানের একটি যুক্তি আনেন: তাদের এমন নেকি ছিল না যার প্রতিদান দেওয়া হবে, এমন গুনাহও ছিল না যার শাস্তি দেওয়া হবে, তাই তাদের এই অবস্থানে রাখা হয়েছে। এই মতগুলোর কোনোটিকে কুরতুবী অগ্রাধিকার দেননি।"
          },
          {
            "en": "Al-Baghawi reports al-Hasan differently. In his text al-Hasan says they are the children of the people of this world, who had no good deeds to be rewarded for and no bad deeds to be punished for, and that because there is no birth in the Garden they are the servants of its people. So al-Hasan appears in al-Qurtubi with the children of the Muslims and in al-Baghawi with the children of the people of this world, while al-Baghawi's no birth in the Garden and al-Qurtubi's without birth sit differently from Ma'arif's born in Paradise. Each is recorded here as its source gives it, and none is reconciled.",
            "bn": "বাগাভী হাসানের কথা আনেন অন্যভাবে। তাঁর বর্ণনায় হাসান বলেন, এরা দুনিয়াবাসীদের সন্তান। তাদের এমন নেকি ছিল না যার প্রতিদান মিলবে, এমন গুনাহও ছিল না যার শাস্তি হবে। আর জান্নাতে যেহেতু কোনো জন্ম নেই, তাই তারাই জান্নাতবাসীদের সেবক। ফলে কুরতুবীর বর্ণনায় হাসানের নাম আসে মুসলমানদের সন্তানের সঙ্গে, আর বাগাভীর বর্ণনায় দুনিয়াবাসীদের সন্তানের সঙ্গে। বাগাভীর 'জান্নাতে জন্ম নেই' আর কুরতুবীর 'জন্ম ছাড়াই', এ দুটিও মাআরিফের 'জান্নাতে জন্ম নেবে' কথার সঙ্গে মেলে না। প্রতিটি মত এখানে তার উৎস যেভাবে দিয়েছে সেভাবেই রইল, কোনোটিকে অন্যটির সঙ্গে মেলানো হয়নি।"
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
            "bn": "প্রশ্নটি খুব স্পর্শকাতর একটি জায়গা ছুঁয়ে যায়: যে শিশুরা হিসাবের বয়সে পৌঁছানোর আগেই মারা যায়, যাদের মধ্যে অবিশ্বাসীদের সন্তানও আছে, তাদের কী হবে। আয়াত এর উত্তর দেয় না। আয়াত বলে শুধু উইলদানের কথা আর তাদের সেবার কথা। মুমিনদের সন্তান হোক বা অন্য কারও, কোনো শিশুর নাম আয়াতের শব্দে নেই। এসব এসেছে উপরের বর্ণনাগুলো থেকে, আর সেগুলো একটি আরেকটির সঙ্গে মেলে না। কোনো শিশুর পরিণতি এই প্রবন্ধ নিশ্চিত করে বলে না। তাফসীরকারদের মতভেদ যেখানে আছে, তাঁরা যেভাবে রেখে গেছেন সেভাবেই রইল।"
          },
          {
            "en": "No fetched commentary on this verse attaches a sound hadith of the Prophet ﷺ to it. Salman al-Farisi's statement in al-Qurtubi is a Companion's saying, given without a chain or a grading. A report attributing the same content to the Prophet ﷺ was not found in any source fetched for this verse or confirmed on a hadith page, so it is not quoted and nothing rests on it. Ma'arif al-Qur'an says hadith narratives indicate thousands of such servants for each person in Paradise, but names no narration; that too stays unconfirmed.",
            "bn": "এ আয়াতের যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো সহীহ হাদীস এর সঙ্গে যুক্ত করেনি। কুরতুবীতে সালমান ফারসী (রাঃ)-এর যে কথা আছে, সেটি একজন সাহাবীর উক্তি, সেখানে কোনো সনদ বা মান উল্লেখ নেই। একই কথা নবী ﷺ-এর নামে বর্ণিত কোনো রেওয়ায়েত এ আয়াতের কোনো উৎসে পাওয়া যায়নি, কোনো হাদীসের পাতায়ও তা যাচাই হয়নি। তাই তা এখানে উদ্ধৃত হয়নি, কোনো কথাও তার উপর দাঁড়িয়ে নেই। মাআরিফুল কুরআন বলে, হাদীসের বর্ণনা থেকে বোঝা যায় প্রত্যেক জান্নাতবাসীর এমন হাজার হাজার সেবক থাকবে। কিন্তু কোনো বর্ণনার নাম সে দেয় না, তাই সেটিও অযাচাইকৃত রইল।"
          },
          {
            "en": "What the sources share is narrower, and still rich. Youths go round those brought near in order to serve them, and in most of the commentators' own glosses time does not alter them: they do not die, do not age, do not change. On the question of where the youths come from, early scholars gave different answers. A reader loses nothing by holding it as they did, as a matter reported and not settled, and by returning to what the verse plainly says.",
            "bn": "উৎসগুলো যেখানে একমত, সে জায়গাটা ছোট, তবু তাতে অনেক কিছু আছে। কিশোরেরা নৈকট্যপ্রাপ্তদের চারপাশে ঘুরবে তাদের সেবা করতে। আর বেশির ভাগ তাফসীরকারের নিজের ব্যাখ্যায় সময় তাদের গায়ে হাত দেয় না: তারা মরে না, বুড়ো হয় না, বদলায় না। কিশোরেরা কোথা থেকে আসে, সে প্রশ্নে প্রথম দিকের আলেমরা ভিন্ন ভিন্ন উত্তর দিয়েছেন। তাঁরা যেভাবে প্রশ্নটি ধরে রেখেছিলেন, পাঠকও সেভাবে ধরে রাখলে কিছু হারান না: বর্ণিত বিষয় হিসেবে, মীমাংসিত বিষয় হিসেবে নয়। তারপর ফিরে আসা যায় আয়াত যা স্পষ্ট বলে, সেখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blessing Is Completed",
          "bn": "নিয়ামত যেখানে পূর্ণ হয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi's closing sentence gives the verse its point: blessing is completed when a person is surrounded by those who serve him. Set beside 56:15 and 56:16, the picture is of companions seated at ease, facing one another, while what they need is carried round to them. In this world even the person who is served must ask, wait and arrange. The reward of those brought near is drawn partly as rest from that. They are served, by youths whom the commentators describe with dignity and beauty, not with pity.",
            "bn": "কুরতুবীর শেষ বাক্যটিই আয়াতের মূল কথা ধরিয়ে দেয়: সেবা করার মানুষ যখন চারপাশ ঘিরে থাকে, তখনই নিয়ামত পূর্ণ হয়। ৫৬:১৫ ও ৫৬:১৬ আয়াতের পাশে রাখলে ছবিটা দাঁড়ায় এমন: সঙ্গীরা আরামে মুখোমুখি বসে আছে, আর যা দরকার তা ঘুরে ঘুরে তাদের কাছে আসছে। দুনিয়ায় যে সেবা পায়, তাকেও চাইতে হয়, অপেক্ষা করতে হয়, ব্যবস্থা করতে হয়। নৈকট্যপ্রাপ্তদের প্রতিদানের একটি দিক হলো এসব থেকে বিশ্রাম। তাদের সেবা করে এমন কিশোরেরা, যাদের তাফসীরকারেরা বর্ণনা করেছেন মর্যাদা আর সৌন্দর্য দিয়ে, করুণার চোখে নয়।"
          },
          {
            "en": "For a reader here the verse works better as a quiet mirror than as a puzzle. Most people both serve and are served: at home, at work, in shops and kitchens. Those who wait on us grow tired, grow older and change, as we do; the verse promises those brought near a service untouched by any of that. Meanwhile the dignity with which the commentators describe these youths is a reminder of how to treat those who serve us now, and the open question of their origin is a lesson in saying only what the text says.",
            "bn": "এই দুনিয়ার পাঠকের কাছে আয়াতটি সমাধান করার মতো ধাঁধা নয়, বরং নীরব এক আয়না হতে পারে। বেশির ভাগ মানুষ একই সঙ্গে সেবা করে আর সেবা পায়: ঘরে, কর্মস্থলে, দোকানে, রান্নাঘরে। যারা আমাদের সেবা করে, তারা আমাদের মতোই ক্লান্ত হয়, বয়সে বাড়ে, বদলে যায়। আয়াত নৈকট্যপ্রাপ্তদের এমন সেবার কথা দেয়, যাতে এসবের কিছুই লাগে না। এদিকে তাফসীরকারেরা যে মর্যাদা দিয়ে এই কিশোরদের বর্ণনা করেছেন, তা মনে করিয়ে দেয়, আজ যারা আমাদের সেবা করে তাদের সঙ্গে কেমন আচরণ করা উচিত। আর তাদের উৎস নিয়ে খোলা প্রশ্নটি শেখায়, পাঠ যা বলে শুধু ততটুকুই বলতে।"
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
            "bn": "ওয়া হূরুন ঈন: মাত্র দুটি শব্দ, সূরা ওয়াকিআর এই অংশের সবচেয়ে ছোট আয়াত। একটা তালিকা এখানে শেষ হচ্ছে। শুরু হয়েছিল অগ্রগামীদের আসন দিয়ে, যে দলটির কথা সূরা ৫৬:১০ আয়াতে এনেছে। তারপর এসেছে ঘুরিয়ে পরিবেশন করা পেয়ালা, ইচ্ছেমতো বেছে নেওয়া ফল আর মন যা চায় সেই পাখির গোশত, যা ৫৬:২১ আয়াতে গিয়ে থামে। মুয়াসসার ৫৬:২০ থেকে ৫৬:২৪ পর্যন্ত এক অংশ হিসেবে পড়ে, আর এক বাক্যে সরল অর্থটা বলে দেয়: আর তাদের জন্য থাকবে বড় বড় চোখের নারী, ঝিনুকের ভেতরে সযত্নে রাখা মুক্তার মতো, স্বচ্ছ আর সুন্দর।"
          },
          {
            "en": "The Muyassar ends where 56:24 ends: all of this is a reward for the righteous deeds they used to do in the world. The pearls belong to 56:23 and the reward to 56:24, and each has its own page; here they only frame the two words. Two of the eight commentaries fetched for this page pass over the verse itself. Ma'arif al-Qur'an, in its group of 56:21 to 56:26, speaks only of the birds' meat, and Ibn Kathir's abridged English moves from the birds straight to the pearls. What follows rests on the other six.",
            "bn": "মুয়াসসার থামে সেখানে, যেখানে ৫৬:২৪ আয়াত থামে: এ সবই দুনিয়াতে তাদের করা নেক আমলের প্রতিদান। মুক্তার উপমা ৫৬:২৩ আয়াতের বিষয়, আর প্রতিদানের কথা ৫৬:২৪ আয়াতের। দুটোর জন্যই আলাদা পাতা আছে। এখানে তারা কেবল দুই শব্দের চারপাশে ফ্রেমের কাজ করছে। এই পাতার জন্য আনা আটটি তাফসীরের দুটি আয়াতটিকে পাশ কাটিয়ে গেছে। মাআরিফুল কুরআন ৫৬:২১ থেকে ৫৬:২৬ এক সঙ্গে আলোচনা করেছে, কিন্তু কথা বলেছে কেবল পাখির গোশত নিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য পাখির কথা থেকে সরাসরি চলে গেছে মুক্তার কথায়। পরের আলোচনা বাকি ছয়টির উপর দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Clear White, Deep Dark",
          "bn": "স্বচ্ছ সাদা, গাঢ় কালো"
        },
        "p": [
          {
            "en": "At-Tabari defines each word by its singular. Hur is the plural of hawra', and he explains her as she whose eye is pure in its white and intense in its black. 'In is the plural of 'ayna', and she is wide of eye, in beauty. Both words, then, are about the eyes in his account: the first about the contrast of their white and dark, the second about their size. Neither gloss reaches beyond the eye, and he adds nothing more to the pair.",
            "bn": "তাবারী প্রতিটি শব্দের অর্থ বলেন তার একবচন ধরে। হূর হলো হাওরা-র বহুবচন। হাওরা তিনি বলেন তাকে, যার চোখের সাদা অংশ স্বচ্ছ আর কালো অংশ খুব গাঢ়। ঈন হলো আইনা-র বহুবচন, অর্থাৎ সুন্দর বড় চোখের অধিকারিণী। তাঁর ব্যাখ্যায় তাই দুটি শব্দই চোখ নিয়ে। প্রথমটি চোখের সাদা আর কালোর বৈপরীত্য নিয়ে, দ্বিতীয়টি চোখের আকার নিয়ে। দুই ব্যাখ্যার কোনোটিই চোখের বাইরে যায় না, আর এ জোড়া শব্দে তিনি এর বেশি কিছু যোগ করেন না।"
          },
          {
            "en": "As-Sa'di reads the verse as and for them are hur 'in, and his glosses are a little fuller. The hawra' is the one in whose eye there is kohl and charm, beauty and splendour. The 'in are those with beautiful, large eyes. Then he gives a reason for the choice of feature: beauty of the eye in a woman is among the greatest signs of her beauty and loveliness. In his reading the verse speaks of the whole person through the eye, and stops there.",
            "bn": "সা'দী আয়াতটি পড়েন এভাবে: আর তাদের জন্য থাকবে হূরুন ঈন। তাঁর ব্যাখ্যা একটু বিস্তারিত। হাওরা সেই নারী, যার চোখে আছে সুরমার কালো আভা আর লাবণ্য, সৌন্দর্য আর দীপ্তি। ঈন মানে যাদের চোখ সুন্দর ও বড়। এরপর তিনি বলেন, এই বৈশিষ্ট্যটিই কেন বেছে নেওয়া হলো: নারীর চোখের সৌন্দর্য তার রূপ আর লাবণ্যের সবচেয়ে বড় প্রমাণগুলোর একটি। তাঁর পাঠে আয়াতটি চোখের মধ্য দিয়ে পুরো মানুষটির কথা বলে, আর সেখানেই থেমে যায়।"
          },
          {
            "en": "Al-Baghawi closes his entry with a report of how the words were explained: hur 'in, white, with large eyes. Here the whiteness seems to belong to the women themselves, where at-Tabari placed it in the white of the eye. The Muyassar keeps to the second word only: women with wide eyes. Across the four, the agreement is on the eye, wide and clear; the small difference is whether hur speaks of the eye's whiteness or of the person's. The sources leave it there, and so does this page.",
            "bn": "বাগাভী তাঁর আলোচনা শেষ করেন শব্দ দুটির একটি প্রচলিত ব্যাখ্যা উদ্ধৃত করে: হূরুন ঈন মানে শুভ্র, বড় বড় চোখের অধিকারিণী। এখানে শুভ্রতা যেন নারীদের নিজেদের, অথচ তাবারী শুভ্রতা রেখেছিলেন চোখের সাদা অংশে। মুয়াসসার শুধু দ্বিতীয় শব্দটি ধরে: বড় বড় চোখের নারী। চারটি ভাষ্যেরই মিল চোখের ব্যাপারে, চোখ বড় আর স্বচ্ছ। পার্থক্য সামান্য: হূর শব্দটি চোখের শুভ্রতার কথা বলে, নাকি মানুষটির শুভ্রতার। উৎসগুলো এখানেই থামে, এ পাতাও থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa Hurun 'In, a Fresh Clause",
          "bn": "পেশ দিয়ে পড়া: নতুন বাক্য"
        },
        "p": [
          {
            "en": "The words were read in different ways, and the commentators record it. At-Tabari reports that some readers of Medina, Mecca and Kufa, and some of the people of Basra, read them in the nominative, wa hurun 'in, as the start of a new clause. Their reasoning, as he gives it: the hur are not among the things carried round, so the words cannot share the case of the fruit and the meat. The nominative means, he says, and with them are hur 'in, or and they have hur 'in.",
            "bn": "শব্দ দুটি একাধিকভাবে পড়া হয়েছে, আর তাফসীরকারেরা তা লিখে রেখেছেন। তাবারী জানান, মদীনা, মক্কা ও কূফার কিছু কারী এবং বসরার কিছু লোক শব্দ দুটি পেশ দিয়ে পড়েছেন: ওয়া হূরুন ঈন, নতুন এক বাক্যের শুরু হিসেবে। তাবারীর বর্ণনায় তাঁদের যুক্তি এই: হূরদের তো ঘুরিয়ে পরিবেশন করা হয় না। তাই ফল আর গোশতের সঙ্গে এ শব্দ দুটির বিভক্তি এক হতে পারে না। তাঁর ভাষায় পেশের অর্থ দাঁড়ায়: আর তাদের কাছে থাকবে হূরুন ঈন, অথবা তাদের জন্য থাকবে হূরুন ঈন।"
          },
          {
            "en": "Al-Qurtubi calls the nominative the reading of the majority, and says it was the choice of Abu 'Ubayd and Abu Hatim, with the sense and with them are hur 'in, again because the hur are not carried round. He adds two grammarians' routes to it. Al-Akhfash takes it by sense: they have cups, and they have hur 'in. Or the words join thullah, the multitude of 56:13, whose predicate is on couches inlaid, in 56:15; an indefinite may open the clause here because its adjective specifies it.",
            "bn": "কুরতুবী পেশ দিয়ে পড়াকে বলেন অধিকাংশের কিরাআত, আর জানান, আবু উবাইদ ও আবু হাতিম এটিই বেছে নিয়েছেন। অর্থ: আর তাদের কাছে থাকবে হূরুন ঈন। কারণ সেই একই, হূরদের ঘুরিয়ে পরিবেশন করা হয় না। এরপর তিনি ব্যাকরণবিদদের দুটি পথ উল্লেখ করেন। আখফাশ অর্থের দিক থেকে ধরেন: তাদের জন্য পেয়ালা আছে, তাদের জন্য হূরুন ঈনও আছে। অথবা শব্দ দুটি যুক্ত হবে ৫৬:১৩ আয়াতের সুল্লাহ, অর্থাৎ বড় দলের সঙ্গে, যার বিধেয় ৫৬:১৫ আয়াতের খচিত আসনের কথা। বিশেষণ শব্দটিকে নির্দিষ্ট করে দেয়, তাই অনির্দিষ্ট শব্দ দিয়েও এখানে বাক্য শুরু হতে পারে।"
          },
          {
            "en": "Ibn Kathir in Arabic says only that some read the nominative, meaning and for them therein are hur 'in. As-Sa'di's gloss, and for them are hur 'in, follows the same reading. Al-Baghawi says the rest of the readers took the nominative, and gives it a different sense: and hur 'in will go round among them, making the hur the ones who move about. He then cites al-Akhfash for the sense they have hur 'in. So even one vowel carries two explanations: something they possess, or those who come round to them.",
            "bn": "ইবন কাসীর আরবী তাফসীরে শুধু বলেন, কেউ কেউ পেশ দিয়ে পড়েছেন, যার অর্থ: আর সেখানে তাদের জন্য থাকবে হূরুন ঈন। সা'দীর ব্যাখ্যাও এই কিরাআত ধরেই: আর তাদের জন্য থাকবে হূরুন ঈন। বাগাভী বলেন, বাকি কারীরা পেশ দিয়ে পড়েছেন, কিন্তু অর্থ দেন ভিন্ন: আর হূরুন ঈন তাদের মাঝে ঘুরে বেড়াবে। অর্থাৎ ঘুরে আসছে হূররাই। এরপর তিনি আখফাশের কথা আনেন: তাদের জন্য আছে হূরুন ঈন। ফলে একটিমাত্র স্বরচিহ্নের ভেতরেও দুটি ব্যাখ্যা পাওয়া যায়। হয় তারা এমন কিছু যা ওদের কাছে থাকবে, নয়তো তারাই ঘুরে ঘুরে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa Hurin 'In, Following the List",
          "bn": "যের দিয়ে পড়া: তালিকার অনুসরণে"
        },
        "p": [
          {
            "en": "The other reading puts both words in the genitive, wa hurin 'in. At-Tabari assigns it to most of the readers of Kufa and some of Medina. Al-Qurtubi names Hamza and al-Kisa'i among those who read it, along with others. Al-Baghawi names three: Abu Ja'far, Hamza and al-Kisa'i, reading the ra' and the nun with kasra, as if the verse said wa bi-hurin 'in, and with hur 'in, under the same preposition that governs the cups and jugs of 56:18.",
            "bn": "অন্য কিরাআতে দুটি শব্দই যের দিয়ে পড়া হয়: ওয়া হূরিন ঈন। তাবারী এটি কূফার অধিকাংশ কারী এবং মদীনার কিছু কারীর কিরাআত বলে উল্লেখ করেন। কুরতুবী যাঁরা এভাবে পড়েছেন তাঁদের মধ্যে হামযা ও কিসাঈর নাম নেন, সঙ্গে আরও কয়েকজন। বাগাভী তিনজনের নাম বলেন: আবু জা'ফর, হামযা ও কিসাঈ। তাঁরা রা আর নূন যের দিয়ে পড়েছেন, যেন আয়াতটি বলছে ওয়া বিহূরিন ঈন, অর্থাৎ হূরুন ঈনসহ। যে অব্যয়টি ৫৬:১৮ আয়াতের পেয়ালা আর কেটলির আগে বসেছে, সেটিই যেন এখানে কাজ করছে।"
          },
          {
            "en": "At-Tabari explains the genitive as following the case of what comes before it, the fruit and the meat, even though the hur are not among the things carried round. Because the intended meaning was well known, the last word followed the first in case. He cites a line of poetry: when the fair women come out one day and thin the brows and the eyes. Only brows are thinned; eyes are lined with kohl. The poet joined them in grammar because the listener knew the sense.",
            "bn": "তাবারীর ব্যাখ্যায় যের এসেছে আগের শব্দগুলোর, মানে ফল আর গোশতের, বিভক্তির অনুসরণে। অথচ হূররা ঘুরিয়ে পরিবেশন করার জিনিসের মধ্যে পড়ে না। উদ্দিষ্ট অর্থটা সবার জানা ছিল, তাই শেষের শব্দ বিভক্তিতে প্রথমের পিছু নিয়েছে। প্রমাণ হিসেবে তিনি একটি কবিতার চরণ আনেন: সুন্দরী নারীরা যেদিন বেরিয়ে আসে আর ভ্রু ও চোখ সরু করে আঁকে। ভ্রু-ই কেবল সরু করে আঁকা হয়, চোখে দেওয়া হয় সুরমা। কবি ব্যাকরণে দুটিকে এক করেছেন, কারণ শ্রোতা অর্থটা বুঝত।"
          },
          {
            "en": "He adds a second line, in which one hears a rumbling of the innards and, of the hands, a roughness, though roughness cannot be heard. Al-Baghawi gives the same account in brief: the genitive follows the cups and jugs, the fruit and the birds' meat, in grammar, though the meanings differ, because the hur are not carried round; he cites the same verse about brows and eyes. Then, under it was said, he gives a smoother sense: they are honoured with fruit, the meat of birds and hur 'in.",
            "bn": "তিনি আরেকটি চরণ আনেন, যেখানে বলা হয়েছে, তার পেট থেকে গুড়গুড় শব্দ শোনা যায়, আর হাতের রুক্ষতাও। অথচ রুক্ষতা তো কানে শোনার জিনিস নয়। বাগাভী একই কথা সংক্ষেপে বলেন। ব্যাকরণে যের এসেছে পেয়ালা, কেটলি, ফল আর পাখির গোশতের অনুসরণে, যদিও অর্থ আলাদা, কারণ হূরদের ঘুরিয়ে পরিবেশন করা হয় না। তিনিও ভ্রু আর চোখের সেই চরণটি উদ্ধৃত করেন। এরপর 'বলা হয়' কথাটি দিয়ে তিনি আরও সহজ একটি অর্থ আনেন: ফল, পাখির গোশত আর হূরুন ঈন দিয়ে তাদের সম্মানিত করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Joined to Cups or to Gardens",
          "bn": "পেয়ালার সঙ্গে, নাকি বাগানের সঙ্গে"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out where the genitive may attach. Al-Zajjaj, as he reports, joins it to bi-akwab, with cups, and carries it on the meaning: they take their delight in cups, fruit, meat and hur. Or it joins jannat, the gardens of delight in 56:12, so that they are in the gardens of delight and among the hur, with a governing word understood: in the companionship of hur. Al-Farra' takes it as following in form only, though the meanings differ, since the hur are not carried round.",
            "bn": "যের কোথায় যুক্ত হতে পারে, কুরতুবী তা গুছিয়ে বলেন। তাঁর বর্ণনায় যাজ্জাজ একে যুক্ত করেন বিআকওয়াব, অর্থাৎ পেয়ালাসহ, শব্দের সঙ্গে, আর অর্থের দিক থেকে ধরেন: তারা আনন্দ উপভোগ করবে পেয়ালা, ফল, গোশত আর হূরদের সঙ্গে। অথবা এটি যুক্ত হবে ৫৬:১২ আয়াতের জান্নাতিন নাঈম, অর্থাৎ নিয়ামতের বাগানের সঙ্গে। তখন অর্থ হবে, তারা নিয়ামতের বাগানে থাকবে আর থাকবে হূরদের মাঝে। এখানে একটি শব্দ উহ্য ধরা হয়: হূরদের সাহচর্যে। ফাররা একে দেখেন শুধু শব্দগত অনুসরণ হিসেবে, অর্থ আলাদা হলেও, কারণ হূরদের ঘুরিয়ে পরিবেশন করা হয় না।"
          },
          {
            "en": "Qutrub, also in al-Qurtubi, goes the other way. He joins the words to the cups and jugs plainly, with no appeal to meaning, and says it is not to be denied that the hur be brought round to them and that there be delight for them in that. So the same genitive, in one commentary, is read as form only by al-Farra' and as sense as well by Qutrub. Al-Qurtubi places the two views side by side and does not decide between them.",
            "bn": "কুরতুবীর তাফসীরেই কুতরুব উল্টো পথ ধরেন। তিনি শব্দ দুটিকে সরাসরি পেয়ালা আর কেটলির সঙ্গে যুক্ত করেন, অর্থের আশ্রয় নেন না। তাঁর কথা, হূরদের তাদের কাছে নিয়ে আসা হবে আর তাতে তাদের আনন্দ থাকবে, এটা অস্বীকার করার কিছু নেই। ফলে একই তাফসীরে একই যের ফাররার কাছে কেবল শব্দের ব্যাপার, আর কুতরুবের কাছে অর্থেরও। কুরতুবী দুই মত পাশাপাশি রাখেন, কোনোটির পক্ষে রায় দেন না।"
          },
          {
            "en": "Ibn Kathir in Arabic gives the genitive two possibilities. The first is grammatical following, and he quotes the run of verses from the boys going round in 56:17 down to wa hurin 'in, comparing 5:6, wipe your heads and your feet, and 76:21, green garments of fine silk and brocade. The second is that the hur are among those the immortal boys bring round, but in the palaces and tents, not in the open company of each other, the servants bringing the hur to them there. He closes with: and Allah knows best.",
            "bn": "ইবন কাসীর আরবী তাফসীরে যেরের দুটি সম্ভাবনা দেখান। প্রথমটি ব্যাকরণগত অনুসরণ। এর প্রমাণে তিনি ৫৬:১৭ আয়াতে কিশোরদের ঘুরে বেড়ানোর কথা থেকে ওয়া হূরিন ঈন পর্যন্ত পুরো অংশটি উদ্ধৃত করেন, আর তুলনা টানেন দুটি আয়াতের সঙ্গে: ৫:৬ আয়াতের 'তোমাদের মাথা ও পা মাসেহ করো', এবং ৭৬:২১ আয়াতের 'সবুজ মিহি রেশম ও মোটা রেশমের পোশাক'। দ্বিতীয় সম্ভাবনা হলো, চিরকিশোররা যাদের নিয়ে ঘুরে আসে, হূররাও তাদের মধ্যে। তবে তা প্রাসাদ আর তাঁবুর ভেতরে, পরস্পরের প্রকাশ্য মজলিসে নয়। সেবকেরা সেখানেই হূরদের তাদের কাছে নিয়ে আসবে। তিনি শেষ করেন এ কথায়: আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third Vowel, Rarely Read",
          "bn": "তৃতীয় স্বরচিহ্ন, বিরল কিরাআত"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his entry by saying the words were read with three endings: nominative, accusative and genitive. The accusative, wa huran 'inan, he assigns to al-Ash'hab al-'Uqayli, an-Nakha'i and 'Isa ibn 'Umar ath-Thaqafi, and says it is so in the codex of Ubayy. It rests on a verb understood, as if the verse said: and they are given in marriage to hur 'in. He adds that taking the accusative by sense is also good, because to have something carried round to them means to be given it.",
            "bn": "কুরতুবী তাঁর আলোচনা শুরু করেন এ কথা দিয়ে যে শব্দ দুটি তিনটি ভিন্ন শেষ-স্বরে পড়া হয়েছে: পেশ, যবর আর যের। যবরের কিরাআত, ওয়া হূরান ঈনান, তিনি আশহাব উকাইলী, নাখঈ এবং ঈসা ইবন উমর সাকাফীর বলে উল্লেখ করেন। তিনি আরও বলেন, উবাই (রাঃ)-এর মুসহাফেও এভাবেই আছে। এর ভিত্তি একটি উহ্য ক্রিয়া, যেন আয়াতটি বলছে: আর হূরুন ঈনের সঙ্গে তাদের বিয়ে দেওয়া হবে। তিনি যোগ করেন, অর্থের দিক থেকে যবর ধরাও ভালো, কারণ কোনো কিছু তাদের কাছে ঘুরিয়ে আনার মানেই তা তাদের দেওয়া।"
          },
          {
            "en": "Only al-Qurtubi among the six records this third reading. At-Tabari and al-Baghawi report two readings, and Ibn Kathir in Arabic discusses the nominative and the genitive. The page records the accusative as al-Qurtubi reports it, with its readers and its grammar, and goes no further. What the three endings share is plain from his own account: in each, the hur are part of what is given to the people of this passage, whether as what they have, what they are given or what is listed with their delights.",
            "bn": "ছয়টি তাফসীরের মধ্যে কেবল কুরতুবীই এই তৃতীয় কিরাআত উল্লেখ করেছেন। তাবারী আর বাগাভী দুটি কিরাআতের কথা বলেন, আর ইবন কাসীর আরবী তাফসীরে আলোচনা করেন পেশ আর যের নিয়ে। কুরতুবী যেভাবে বর্ণনা করেছেন, যবরের কিরাআত এ পাতায় ঠিক সেভাবেই রাখা হলো, কারীদের নাম আর ব্যাকরণসহ, এর বেশি নয়। তাঁর নিজের বর্ণনা থেকেই তিনটি স্বরচিহ্নের মিলটা স্পষ্ট। প্রতিটিতেই হূররা এ অংশে বর্ণিত লোকদের দেওয়া নিয়ামতের অংশ। কখনো তারা ওদের কাছে থাকবে, কখনো ওদের দেওয়া হবে, কখনো ওদের অন্য নিয়ামতের সঙ্গে এক তালিকায় আসবে।"
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
            "bn": "পেশের পক্ষে যে কারণ দেওয়া হয়েছিল, অর্থাৎ হূরদের ঘুরিয়ে পরিবেশন করা হয় না, তা বিনা জবাবে থাকেনি। কুরতুবী কিসাঈর জবাব উদ্ধৃত করেন: যে পেশ দিয়ে পড়ে আর এই কারণ দেখায়, ফল আর গোশতের বেলাতেও তাকে একই কথা মানতে হবে। কারণ সেগুলোও ঘুরিয়ে পরিবেশন করা হয় না, ঘোরানো হয় শুধু পানীয়। কুরতুবী ও বাগাভী যেরের কারীদের মধ্যে কিসাঈর নামও নিয়েছেন। তবু কুরতুবী পেশকে অধিকাংশের কিরাআত আর আবু উবাইদ ও আবু হাতিমের পছন্দ হিসেবেই উল্লেখ করেন, আর দুটোকেই লিপিবদ্ধ রাখেন।"
          },
          {
            "en": "At-Tabari gives the verdict in his own voice. The right view, he says, is that these are two well-known readings, each read by a body of readers, and their meanings are close, so whichever of the two a reader recites, he is correct. Neither reading is set aside, and neither is ranked above the other in his entry. The page follows him in that. The grammarians argued over attachment and case; at-Tabari's own judgement is that the meanings stay close either way.",
            "bn": "তাবারী রায় দেন নিজের ভাষায়। তাঁর মতে সঠিক কথা হলো, এ দুটি সুপরিচিত কিরাআত। প্রত্যেকটি একদল কারী পড়েছেন, আর দুটির অর্থও কাছাকাছি। তাই যে কেউ যেকোনোটি পড়ুক, সে ঠিকই পড়ছে। তাঁর আলোচনায় কোনো কিরাআত বাদ পড়েনি, কোনোটিকে অন্যটির উপরে রাখাও হয়নি। এ পাতাও তাঁকেই অনুসরণ করছে। ব্যাকরণবিদেরা শব্দ কোথায় যুক্ত হবে আর কোন বিভক্তি হবে, তা নিয়ে তর্ক করেছেন। তবে তাবারীর নিজের বিচারে, যেভাবেই পড়া হোক, অর্থ কাছাকাছিই থাকে।"
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
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, so none is cited here. Nor does any of them discuss whether the hur are women of this world made new or beings created in Paradise; that question is not raised in these entries on this verse, and the page leaves it unopened. What they do say is said with restraint. They speak of the eye, its clearness, its dark and its width, and of beauty and charm, and they say no more than that.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হচ্ছে না। হূররা কি দুনিয়ার নারীদেরই নতুন করে সৃষ্টি করা রূপ, নাকি জান্নাতেই সৃষ্ট আলাদা সত্তা, এ প্রশ্নও এই আয়াতের আলোচনায় কেউ তোলেননি। এ পাতাও প্রশ্নটি খুলছে না। তাঁরা যা বলেছেন, সংযমের সঙ্গে বলেছেন। কথা বলেছেন চোখ নিয়ে, তার স্বচ্ছতা, তার কালো আর তার বিস্তার নিয়ে, আর সৌন্দর্য ও লাবণ্য নিয়ে। এর বেশি কিছু বলেননি।"
          },
          {
            "en": "The two words do not stand alone for long. The next verse gives them a likeness, pearls kept hidden, and the one after names the whole list a reward for what they used to do. Those verses have their own pages. Here the order is enough: couches, cups, fruit, meat and then the hur, each named briefly, each a gift. The Muyassar's last clause, a reward for the righteous deeds they used to do in the world, is where the passage itself is heading.",
            "bn": "শব্দ দুটি বেশিক্ষণ একা দাঁড়িয়ে থাকে না। পরের আয়াত তাদের একটি উপমা দেয়, লুকিয়ে রাখা মুক্তা। তার পরের আয়াত পুরো তালিকাকে বলে তাদের আমলের প্রতিদান। সেই আয়াতগুলোর আলাদা পাতা আছে। এখানে ক্রমটুকুই যথেষ্ট: আসন, পেয়ালা, ফল, গোশত, তারপর হূর। প্রতিটির নাম অল্প কথায়, প্রতিটিই উপহার। মুয়াসসারের শেষ কথাটি, দুনিয়াতে তাদের করা নেক আমলের প্রতিদান, এ অংশ নিজেই সেদিকে এগোচ্ছে।"
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
          "bn": "ডান দিকের দ্বিতীয় গাছ"
        },
        "p": [
          {
            "en": "Wa-talhin mandud: two words in the Arabic, and the second tree in the garden of the companions of the right. The passage turned to them at 56:27 with a question that magnifies them: the companions of the right, what are the companions of the right? Then 56:28 began the answer: among lote trees, sidr, with their thorns removed. This verse is joined to the verse before by its opening wa, so the companions of the right are among talh as well, a talh that is mandud. Everything weighed below hangs on those two nouns.",
            "bn": "ওয়া তালহিম মানদূদ: আরবীতে মাত্র দুটি শব্দ, আর ডান দিকের দলের বাগানে এটি দ্বিতীয় গাছ। ৫৬:২৭ আয়াতে তাদের দিকে ফেরা হয়েছে এমন এক প্রশ্নে, যা তাদের মর্যাদাকে বড় করে তোলে: ডান দিকের দল, কী চমৎকার সেই ডান দিকের দল! উত্তর শুরু হয় ৫৬:২৮ আয়াতে: তারা থাকবে কাঁটা ছাড়ানো সিদর বা বরই গাছের মাঝে। এ আয়াত শুরুর 'ওয়া' দিয়ে আগের আয়াতের সঙ্গে জোড়া। তাই ডান দিকের লোকেরা তালহ গাছের মাঝেও থাকবে, আর সে তালহ হবে মানদূদ। নিচের পুরো আলোচনা ঝুলে আছে এই দুটি শব্দের উপর।"
          },
          {
            "en": "The site's English renders the verse: And [banana] trees layered [with fruit]. Both brackets are the translator's additions. The Arabic names neither banana nor fruit, and the first bracket takes one side of a real disagreement among the commentators. The site's Bengali goes the same way, saying kola, banana, in plain text, with the fruit set in tiers. That choice has wide support, as the next section shows. Still, it is a reading of talh, not the word itself, and the other reading has its own names behind it.",
            "bn": "সাইটের ইংরেজি অনুবাদে আয়াতটির অর্থ: আর থরে থরে সাজানো কলা গাছ। তবে সেখানে 'কলা' আর 'ফলে' শব্দ দুটো বন্ধনীর ভেতরে, কারণ দুটোই অনুবাদকের যোগ করা। আরবীতে কলার নামও নেই, ফলের নামও নেই। প্রথম বন্ধনীটা তাফসীরকারদের এক সত্যিকারের মতভেদে একটা পক্ষ বেছে নিয়েছে। সাইটের বাংলা অনুবাদও একই পথে গেছে, বন্ধনী ছাড়াই লিখেছে কলা গাছ, যাতে থরে থরে সাজানো কলা। এ ব্যাখ্যার পেছনে সমর্থন অনেক, পরের অংশে তা দেখা যাবে। তবু এটা তালহ শব্দের একটা ব্যাখ্যা, শব্দটা নিজে নয়। অন্য ব্যাখ্যার পেছনেও নিজস্ব নাম আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Banana, Say Most Reports",
          "bn": "বেশির ভাগ বর্ণনায় কলা"
        },
        "p": [
          {
            "en": "As for the people of interpretation among the Companions and the Followers, at-Tabari writes, they say it is al-mawz, the banana. He then lays out the chains. Ibn Abbas (RA) is asked about the talh again and again through Abu Sa'id ar-Raqashi, and each time answers that it is the banana; a man of Basra heard him say the same. Ali (RA) is reported, through al-Kalbi, saying it is the banana. Ata', Qasama and Qatada say so too, and in one chain Qatada's words are: we used to be told it is the banana.",
            "bn": "তাবারী লেখেন, সাহাবী ও তাবেয়ীদের মধ্যে যাঁরা তাফসীর করেছেন, তাঁরা বলেন এটা আল-মাওয, অর্থাৎ কলা। এরপর তিনি একে একে সনদগুলো সাজান। আবু সাঈদ আর-রাকাশীর সূত্রে বারবার দেখা যায়, ইবন আব্বাস (রাঃ)-কে তালহ সম্পর্কে জিজ্ঞেস করা হয়েছে, আর প্রতিবারই তিনি বলেছেন, এটা কলা। বসরার এক লোকও তাঁকে একই কথা বলতে শুনেছে। কালবীর সূত্রে আলী (রাঃ) থেকেও বর্ণিত, এটা কলা। আতা, কাসামা আর কাতাদাও তা-ই বলেন। এক সনদে কাতাদার কথাটা এরকম: আমাদের বলা হতো, এটা কলা।"
          },
          {
            "en": "Mujahid's wording is warmer: mawzukum, your bananas, and at-Tabari records a reason with it that a later section takes up. Ibn Zayd is the most careful voice on the list. Allah knows best, he says, except that the people of Yemen call the banana talh. Ibn Kathir, in Arabic, brings the same view through Ibn Abi Hatim from Abu Sa'id, then adds that it is reported from Ibn Abbas, Abu Hurayra, al-Hasan, Ikrima, Qasama ibn Zuhayr, Qatada and Abu Hazra, and was said by Mujahid and Ibn Zayd.",
            "bn": "মুজাহিদের শব্দটা আরও আপন: মাওযুকুম, তোমাদের কলা। তাবারী এর সঙ্গে তাঁর একটা কারণও লিখে রেখেছেন, যা পরের এক অংশে আসবে। তালিকায় সবচেয়ে সাবধানী কণ্ঠ ইবন যায়দের। তিনি বলেন, আল্লাহই ভালো জানেন, তবে ইয়েমেনের লোকেরা কলাকে তালহ বলে। ইবন কাসীর তাঁর আরবী তাফসীরে ইবন আবী হাতিমের সূত্রে আবু সাঈদ থেকে একই মত আনেন। তারপর যোগ করেন, এ মত বর্ণিত হয়েছে ইবন আব্বাস, আবু হুরায়রা, হাসান, ইকরিমা, কাসামা ইবন যুহাইর, কাতাদা ও আবু হাযরা থেকে। মুজাহিদ ও ইবন যায়দও এ কথা বলেছেন।"
          },
          {
            "en": "Al-Qurtubi opens his note with the same answer: talh is the banana tree, its singular talha, said by most commentators, Ali and Ibn Abbas among them. Al-Baghawi says the same in fewer words. The Muyassar paraphrases the verse as bananas stacked one upon another, and Ma'arif al-Qur'an says talh refers to the banana tree. So the site's translation stands on a wide base. The question is whether that base is the only one, and the texts themselves say it is not.",
            "bn": "কুরতুবীও তাঁর আলোচনা শুরু করেন একই উত্তরে: তালহ মানে কলা গাছ, একবচনে তালহা। অধিকাংশ তাফসীরকার এ কথা বলেছেন, তাঁদের মধ্যে আছেন আলী ও ইবন আব্বাস। বাগাভীও অল্প কথায় তা-ই বলেন। মুয়াসসার আয়াতের অর্থ করেছে একটার উপর আরেকটা সাজানো কলা। মাআরিফুল কুরআনও বলে, তালহ মানে কলা গাছ। অর্থাৎ সাইটের অনুবাদ দাঁড়িয়ে আছে চওড়া ভিতের উপর। প্রশ্ন হলো, ভিত কি এই একটাই? তাফসীরের পাঠগুলো নিজেরাই বলে, না।"
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
            "bn": "তাবারী নিজেই তাফসীরকারদের মতের আগে আরেকটা কণ্ঠ বসিয়েছেন। মা'মার ইবনুল মুসান্না, অর্থাৎ আবু উবায়দা বলতেন, আরবদের কাছে তালহ হলো অনেক কাঁটাওয়ালা বিশাল গাছ। সাক্ষী হিসেবে তিনি এক উটচালকের কবিতা আনতেন: পথপ্রদর্শক উটনীকে সুখবর দিয়ে বলল, কাল তুমি তালহ দেখতে পাবে। কুরতুবী ও বাগাভী একই সংজ্ঞা দিয়েছেন ফাররা ও আবু উবায়দা দুজনের নামে। কুরতুবী কবির নাম বলেছেন জা'দী, আর সিদ্ধান্ত টেনেছেন: অনেক কাঁটাওয়ালা যেকোনো বিশাল গাছই তালহ।"
          },
          {
            "en": "Ibn Kathir in Arabic gives the tree its home: great trees found in the land of the Hijaz, of the thorny kind called 'idah, singular talha, a tree with many thorns. The English abridgment calls it a large thorny shrub that grew in the Hijaz. As-Sa'di takes this side and does not mention the banana at all. The talh is well known, he writes: large trees that grow in the open desert, whose branches are stacked with delicious, longed-for fruit. In his reading the tree is familiar, and the fruit is the gift.",
            "bn": "ইবন কাসীর তাঁর আরবী তাফসীরে গাছটার ঠিকানাও দেন: হিজাযের মাটিতে জন্মানো বিশাল গাছ, ইদাহ নামের কাঁটাগাছের জাত, একবচনে তালহা, প্রচুর কাঁটা তার। ইংরেজি সংক্ষেপে একে বলা হয়েছে হিজাযে জন্মানো বড় কাঁটাঝোপ। সা'দী এই পক্ষই নেন, কলার কথা মুখেই আনেন না। তিনি লেখেন, তালহ সবার চেনা, খোলা মরুভূমিতে জন্মানো বড় বড় গাছ। এখানে তার ডালে ডালে থরে থরে সাজানো সুস্বাদু, লোভনীয় ফল। তাঁর ব্যাখ্যায় গাছটা পরিচিত, উপহার হলো ফল।"
          },
          {
            "en": "How can a tree known for its thorns be a reward? Al-Qurtubi records the answer of az-Zajjaj: it may be in Paradise with its thorns removed. Az-Zajjaj also likens it to the umm ghaylan tree, which has a blossom of very fine scent. The hearers, he says, were addressed and promised what they loved, something like it, except that its excellence over the tree of this world is as the excellence of everything in Paradise over everything here. The familiar shape stays; the measure changes.",
            "bn": "যে গাছ কাঁটার জন্য পরিচিত, সেটা পুরস্কার হয় কী করে? কুরতুবী এর জবাবে যাজ্জাজের কথা এনেছেন: হতে পারে জান্নাতে তার কাঁটা সরিয়ে দেওয়া হয়েছে। যাজ্জাজ একে উম্মে গায়লান গাছের সঙ্গেও তুলনা করেন, যার ফুলের সুবাস খুব মনোরম। তিনি বলেন, শ্রোতাদের যা প্রিয় ছিল, তার মতো জিনিসেরই প্রতিশ্রুতি দেওয়া হয়েছে। তফাত শুধু এই, দুনিয়ার গাছের চেয়ে এর শ্রেষ্ঠত্ব ঠিক ততখানি, দুনিয়ার সবকিছুর চেয়ে জান্নাতের সবকিছুর শ্রেষ্ঠত্ব যতখানি। চেনা আকৃতি থাকে, মাপটা বদলে যায়।"
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
            "bn": "একটা মাঝামাঝি মতও আছে, তবে কথাটা কার, সে বিষয়ে সূত্রগুলো একমত নয়। ইবন কাসীর ইবন আব্বাস থেকে বর্ণনা করেন: জান্নাতের তালহ দেখতে দুনিয়ার তালহের মতো, কিন্তু তার ফল মধুর চেয়েও মিষ্টি। কুরতুবী প্রায় একই বাক্য দিয়েছেন সুদ্দীর নামে। যিনিই বলে থাকুন, কথাটা মরুভূমির চেনা গাছটাকে রেখে দেয়, বদলে দেয় তার ফলন। যাজ্জাজের কাঁটাহীন তালহ আর সা'দীর ফলভরা ডালের সঙ্গে এর মিল স্পষ্ট।"
          },
          {
            "en": "Al-Hasan is a second case. Ibn Kathir counts him among those from whom the banana is reported. Al-Qurtubi and al-Baghawi report him saying the opposite: it is not the banana, but a tree with cool shade, moist shade in al-Qurtubi's wording and pleasant shade in al-Baghawi's. This article does not choose between the two lines of report. It notes only that they give al-Hasan different answers, and that his answer as al-Qurtubi and al-Baghawi give it rests on shade rather than fruit.",
            "bn": "হাসানের ব্যাপারটাও এমন। ইবন কাসীর তাঁকে সেই দলে গুনেছেন, যাঁদের থেকে কলার ব্যাখ্যা বর্ণিত। অথচ কুরতুবী আর বাগাভী তাঁর মুখে উল্টো কথা বর্ণনা করেন: এটা কলা নয়, বরং শীতল ছায়াওয়ালা এক গাছ। কুরতুবীর ভাষায় ছায়াটা স্নিগ্ধ-আর্দ্র, বাগাভীর ভাষায় মনোরম। এ লেখা দুই ধারার বর্ণনার কোনোটাকে বেছে নিচ্ছে না। শুধু এটুকু লক্ষ করছে যে দুই ধারা হাসানের মুখে দুই রকম উত্তর দেয়। আর কুরতুবী ও বাগাভীর বর্ণনায় তাঁর উত্তরের ভর ফলের উপর নয়, ছায়ার উপর।"
          },
          {
            "en": "Ibn Kathir closes with the remark that Ibn Jarir, that is at-Tabari, related no explanation but the banana. In at-Tabari's own text the commentators' explanations are indeed all the banana, yet he sets Abu Ubayda's account of the thorny tree before them as what talh means among the Arabs. In the passage fetched for this verse, he does not say in his own voice which of the two he prefers. So the disagreement stays open here, with names on both sides and no verdict added.",
            "bn": "ইবন কাসীর শেষ করেন এই মন্তব্যে: ইবন জারীর, মানে তাবারী, কলা ছাড়া আর কোনো ব্যাখ্যা উল্লেখ করেননি। তাবারীর নিজের লেখায় তাফসীরকারদের সব ব্যাখ্যা সত্যিই কলা। তবে তাঁদের আগে তিনি আবু উবায়দার বক্তব্যও রেখেছেন যে আরবদের কাছে তালহ মানে কাঁটাওয়ালা বিশাল গাছ। এ আয়াতের জন্য সংগ্রহ করা অংশে তিনি নিজের ভাষায় বলেননি দুটোর কোনটা তাঁর পছন্দ। তাই মতভেদটা এখানে খোলাই থাকছে। দুই দিকেই নাম আছে, কোনো রায় যোগ করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Packed From Root to Crown",
          "bn": "গোড়া থেকে মাথা অবধি ঠাসা"
        },
        "p": [
          {
            "en": "Mandud comes from nadd, which al-Qurtubi defines as packing things close; the mandud is what has been packed. At-Tabari explains it as something whose parts have been set one upon another and gathered together, and he says the commentators said the like. Ibn Abbas: some of it on some. Mujahid: mutarakim, heaped up. Ibn Kathir adds as-Suddi's gloss, masfuf, set in rows. The Muyassar's paraphrase, stacked one on another, follows the same line.",
            "bn": "মানদূদ শব্দের মূলে আছে নাদ্দ। কুরতুবী এর অর্থ বলেন গায়ে গায়ে ঠেসে সাজানো, আর মানদূদ মানে যা এভাবে সাজানো হয়েছে। তাবারীর ব্যাখ্যায়, এর এক অংশ আরেক অংশের উপর রাখা, সব একসঙ্গে জড়ো করা। তিনি বলেন, তাফসীরকারেরাও এমনই বলেছেন। ইবন আব্বাস বলেছেন: একটার উপর আরেকটা। মুজাহিদ বলেছেন: মুতারাকিম, স্তূপ করা। ইবন কাসীর যোগ করেন সুদ্দীর ব্যাখ্যা: মাসফূফ, সারি সারি সাজানো। মুয়াসসারের ভাষ্যও একই পথে: একটার উপর আরেকটা সাজানো।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi draw the picture in full. The mandud is the tree laden with fruit from its beginning to its end, so that no bare trunk shows; it is packed solid. Al-Qurtubi cites a line of an-Nabigha for the word. Both then report Masruq: the trees of Paradise, from their roots to their branches, are fruit, all of it. Al-Qurtubi's version goes on: whenever a fruit is eaten, a better one returns in its place.",
            "bn": "কুরতুবী আর বাগাভী ছবিটা পুরোপুরি আঁকেন। মানদূদ হলো সেই গাছ, যা শুরু থেকে শেষ পর্যন্ত ফলে ভরা। তার কাণ্ডের কোনো খালি অংশ চোখে পড়ে না, পুরোটাই ঠাসা। শব্দটির সাক্ষী হিসেবে কুরতুবী নাবিগার একটা পঙ্‌ক্তি আনেন। দুজনেই এরপর মাসরূকের কথা বর্ণনা করেন: জান্নাতের গাছগুলো শিকড় থেকে ডালপালা পর্যন্ত পুরোটাই ফল। কুরতুবীর বর্ণনায় আরও আছে: যখনই একটা ফল খাওয়া হয়, তার জায়গায় আরও সুন্দর একটা ফল ফিরে আসে।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the image that suits the banana reading: clustered, fruit piled on top of each other as in a bunch of bananas. On the desert-tree reading, the same word describes a tree that carries thorns in this world and, as az-Zajjaj and as-Sa'di picture it, carries fruit in Paradise. Either way, mandud does one job. It takes a tree the hearer already knows and fills it, without a gap, from the bottom to the top.",
            "bn": "মাআরিফুল কুরআন কলার ব্যাখ্যার সঙ্গে মানানসই একটা ছবি দেয়: গুচ্ছবদ্ধ, এক কাঁদি কলার মতো ফলের উপর ফল। মরুভূমির গাছের ব্যাখ্যায় একই শব্দ বলে এমন গাছের কথা, দুনিয়াতে যার গায়ে কাঁটা, আর যাজ্জাজ ও সা'দীর ছবিতে জান্নাতে যার গায়ে ফল। দুই ব্যাখ্যাতেই মানদূদের কাজ একটাই। শ্রোতার চেনা একটা গাছ নিয়ে সেটাকে নিচ থেকে উপর পর্যন্ত ফাঁকহীনভাবে ভরে দেওয়া।"
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
            "bn": "তাবারী প্রথমে জানান, আয়াতটি পড়া হয় 'হা' অক্ষর দিয়ে, তালহ, আর বড় বড় শহরের মুসহাফে এভাবেই লেখা। এরপর তিনি বর্ণনা করেন, আলী ইবন আবী তালিব (রাঃ) পড়তেন ওয়া তাল'ইম মানদূদ, 'আইন' দিয়ে। তাল' শব্দটা কুরআন খেজুর গাছের বেলায় ব্যবহার করেছে, ২৬:১৪৮ ও ৫০:১০ আয়াতে। হাসান ইবন সা'দের সূত্রে কায়স ইবন সা'দ থেকে একটি সনদে আছে: আলীর সামনে এক লোক তালহ পড়ল। তিনি বললেন, তালহের এখানে কী কাজ? এ তো তাল' মানদূদ। তারপর তিনি পড়লেন, তাল'উহা হাদীম।"
          },
          {
            "en": "They asked him: shall we not change it? He answered: the Qur'an is not to be stirred up today, nor altered. Al-Baghawi gives the same exchange through Mujalid, with the questioner pointing out that the copy has ha'. Al-Qurtubi calls Ali's reading contrary to the mushaf and quotes al-Qushayri: he preferred it, but did not see fit to put it in the mushaf against the script that had been agreed. Al-Qurtubi also gives Abu Bakr al-Anbari's chain, where Qays is named Qays ibn 'Ubad and the narrator Mujalid is unsure whether Qays recited it or heard it recited.",
            "bn": "লোকেরা জিজ্ঞেস করল, আমরা কি তা বদলে দেব না? তিনি জবাব দিলেন, কুরআনকে আজ নাড়াচাড়া করা হবে না, বদলানোও হবে না। বাগাভী মুজালিদের সূত্রে একই কথোপকথন আনেন। সেখানে প্রশ্নকারী মনে করিয়ে দেন, মুসহাফে তো 'হা' দিয়ে লেখা। কুরতুবী আলীর পাঠকে মুসহাফের বিপরীত বলেছেন। তিনি কুশাইরীর কথা উদ্ধৃত করেন: আলী এ পাঠ পছন্দ করেছিলেন, কিন্তু সর্বসম্মত লিপির বিরুদ্ধে গিয়ে তা মুসহাফে বসানো উচিত মনে করেননি। কুরতুবী আবু বকর আল-আনবারীর সনদও দেন। সেখানে কায়সের পুরো নাম কায়স ইবন উবাদ। আর বর্ণনাকারী মুজালিদ নিশ্চিত নন, কায়স নিজে পড়েছিলেন নাকি অন্য কেউ পড়ছিল।"
          },
          {
            "en": "Abu Bakr al-Anbari, as al-Qurtubi reports him, reads the answer differently from al-Qushayri: Ali returned to what is in the mushaf, knew it to be right, and let go of what he had said in haste. Ibn Kathir brings the report through Ibn Abi Hatim from an unnamed shaykh of Hamdan, and notes that on this reading the phrase would describe the sidr, thornless, with its tal' full of fruit. Al-Jawhari, he adds, counts talh as a dialect form of tal'. None of these sources grades the reports, and this article adds no grading.",
            "bn": "কুরতুবীর বর্ণনায় আবু বকর আল-আনবারী জবাবটা কুশাইরীর চেয়ে ভিন্নভাবে বোঝেন। তাঁর মতে আলী মুসহাফে যা আছে, সেদিকেই ফিরে গিয়েছিলেন। বুঝেছিলেন সেটাই সঠিক, আর তাড়াহুড়ায় যা বলে ফেলেছিলেন, তা ছেড়ে দিয়েছিলেন। ইবন কাসীর বর্ণনাটা আনেন ইবন আবী হাতিমের সূত্রে, হামদানের এক অনামা শায়খ থেকে। তিনি বলেন, এ পাঠ ধরলে কথাটা হবে সিদর গাছেরই বর্ণনা: কাঁটাহীন, আর তার তাল' ফলে ভরা। তিনি আরও জানান, জাওহারীর মতে তালহ হলো তাল' শব্দের একটা আঞ্চলিক রূপ। এ সূত্রগুলোর কোনোটি বর্ণনাগুলোর মান নির্ণয় করেনি, এ লেখাও কোনো মান যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shade of Wajj",
          "bn": "ওয়াজ্জের সেই ছায়া"
        },
        "p": [
          {
            "en": "Mujahid's gloss comes with a reason. At-Tabari reports him twice, once explaining talh as your bananas and once explaining mandud as heaped up, and both times he adds that they used to admire Wajj and its shade from its talh and its sidr. Ibn Kathir reads this as Quraysh being reminded, because they admired Wajj and its shade of talh and sidr. The fetched texts name Wajj as a place and do not describe it further, so neither does this article.",
            "bn": "মুজাহিদের ব্যাখ্যার সঙ্গে একটা কারণও আছে। তাবারী তাঁর কথা দুবার এনেছেন। একবার তালহের ব্যাখ্যায়, তোমাদের কলা। আরেকবার মানদূদের ব্যাখ্যায়, স্তূপ করা। দুবারই তিনি যোগ করেছেন, তারা ওয়াজ্জ আর তার তালহ ও সিদর গাছের ছায়া দেখে মুগ্ধ হতো। ইবন কাসীর এর অর্থ করেছেন এভাবে: এ দিয়ে কুরাইশকে মনে করিয়ে দেওয়া হচ্ছে, কারণ ওয়াজ্জ আর তার তালহ ও সিদরের ছায়া তাদের মুগ্ধ করত। সংগৃহীত পাঠগুলো ওয়াজ্জকে একটা জায়গার নাম হিসেবেই উল্লেখ করে, এর বেশি কিছু বলে না। এ লেখাও তাই বেশি কিছু বলছে না।"
          },
          {
            "en": "This sits well with az-Zajjaj's remark that the hearers were promised what they loved, something like it, raised as far above it as Paradise is above this world. Sidr and talh stand side by side in 56:28 and 56:29, as they stand side by side in Mujahid's Wajj. Whether the talh is the banana or the desert tree, the promise is spoken in trees the first hearers knew, and then made better than anything they had known.",
            "bn": "যাজ্জাজের কথার সঙ্গে এটা ভালোভাবে মেলে: শ্রোতাদের যা প্রিয় ছিল, তার মতো জিনিসের প্রতিশ্রুতি দেওয়া হয়েছে, তবে জান্নাত যতখানি দুনিয়ার উপরে, ততখানি উপরে তুলে। ৫৬:২৮ ও ৫৬:২৯ আয়াতে সিদর আর তালহ পাশাপাশি দাঁড়িয়ে, যেমন পাশাপাশি দাঁড়িয়ে মুজাহিদের ওয়াজ্জে। তালহ কলা হোক বা মরুর গাছ, প্রতিশ্রুতিটা এসেছে প্রথম শ্রোতাদের চেনা গাছের ভাষায়। তারপর সেই গাছকে বানানো হয়েছে তাদের জানা যেকোনো কিছুর চেয়ে উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "Left for Neighbouring Verses",
          "bn": "পাশের আয়াতগুলোর জন্য তোলা"
        },
        "p": [
          {
            "en": "No hadith with a collector's grading is attached to this verse in the texts fetched for it. Ibn Kathir's English abridgment, under the neighbouring verse on the sidr, relates a report that a bedouin asked about the talh and its thorns, with an answer that each thorn becomes a fruit; but the fetched text names no collection and gives no grading, so it is not quoted here. No occasion of revelation is given for the verse either.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা পাঠগুলোতে সংকলকের মানসহ কোনো হাদীস এর সঙ্গে যুক্ত পাওয়া যায়নি। ইবন কাসীরের ইংরেজি সংক্ষেপে পাশের সিদরের আয়াতের আলোচনায় একটা বর্ণনা আছে। সেখানে এক বেদুইন তালহ আর তার কাঁটা নিয়ে প্রশ্ন করেন, আর উত্তরে বলা হয় প্রতিটি কাঁটার জায়গায় ফল হবে। কিন্তু সংগৃহীত পাঠে কোনো সংকলনের নাম নেই, মানও উল্লেখ নেই। তাই সেটি এখানে উদ্ধৃত করা হয়নি। আয়াতটির কোনো শানে নুযূলও পাঠগুলোতে আসেনি।"
          },
          {
            "en": "What follows, shade spread wide, water poured out, abundant fruit neither cut off nor forbidden, and raised couches, belongs to 56:30 to 56:34 and to their own study. Read with 56:28, this verse gives the companions of the right a garden of known trees made perfect: thorns taken away, fruit packed close. The commentators did not agree on which tree the talh is. Through every gloss of mandud, they did agree that it is full.",
            "bn": "এরপর আসছে বিস্তৃত ছায়া, প্রবাহিত পানি, অফুরন্ত ও অবারিত প্রচুর ফল, আর উঁচু বিছানা। সেগুলো ৫৬:৩০ থেকে ৫৬:৩৪ আয়াতের বিষয়, তাদের নিজস্ব আলোচনায় আসবে। ৫৬:২৮ আয়াতের সঙ্গে মিলিয়ে পড়লে এ আয়াত ডান দিকের লোকদের দেয় চেনা গাছের এক নিখুঁত বাগান: কাঁটা সরানো, ফল ঠাসা। তালহ ঠিক কোন গাছ, তা নিয়ে তাফসীরকারেরা একমত হননি। কিন্তু মানদূদের প্রতিটি ব্যাখ্যায় তাঁরা এক কথায় মিলেছেন: গাছটা ভরা।"
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
            "bn": "ইন্না আনশা'নাহুন্না ইনশা'আ: নিশ্চয়ই আমি তাদের সৃষ্টি করেছি, এক বিশেষ সৃষ্টি। আরবিতে শব্দ মাত্র তিনটি। তৃতীয় শব্দটি দ্বিতীয়টিরই ক্রিয়াবাচক বিশেষ্য, অর্থাৎ ক্রিয়ার পরে বসেছে তার নিজেরই মূল শব্দ। আয়াতটি সূরা ওয়াকিয়ার সেই অংশে, যেখানে ডান দিকের লোকদের কথা চলছে। এর আগে এসেছে বিস্তৃত ছায়া, বয়ে চলা পানি, আর এমন প্রচুর ফল যা ফুরায় না, নিষিদ্ধও হয় না। তারপর ৫৬:৩৪ আয়াতে ফুরুশ মারফূ'আ, উঁচু বিছানা। এর পরে ৫৬:৩৬ থেকে ৫৬:৩৮ আয়াত একই \"তাদের\" কথা টেনে নিয়ে যায়, তাদের আরও বর্ণনা দেয় এবং জানায় তারা কাদের জন্য।"
          },
          {
            "en": "The pronoun is the puzzle. The suffix -hunna is feminine plural, \"them\" for a group of women, yet no group of women has been named in the verses just before. Who are they? The commentators fetched for this verse give more than one answer, and they also differ over where the pronoun finds what it points back to. This article sets out each answer with the names that carry it. It does not pick one, because the fetched sources do not agree on one, and the verse itself leaves its \"them\" unnamed.",
            "bn": "ধাঁধাটা সর্বনামে। হুন্না প্রত্যয়টি স্ত্রীলিঙ্গ বহুবচন, অর্থাৎ একদল নারীকে বোঝাতে \"তাদের\"। অথচ ঠিক আগের আয়াতগুলোতে কোনো নারীদলের নাম আসেনি। তাহলে এরা কারা? এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো একাধিক উত্তর দেয়। সর্বনামটি পেছনের কোন শব্দের দিকে ফিরছে, তা নিয়েও তাদের মত আলাদা। এ লেখায় প্রতিটি উত্তর তার প্রবক্তাদের নামসহ তুলে ধরা হবে। কোনো একটিকে বেছে নেওয়া হবে না। কারণ সংগৃহীত উৎসগুলো এক উত্তরে একমত নয়, আর আয়াত নিজেও তার \"তাদের\" নাম বলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Glossing the Verb Insha'",
          "bn": "ইনশা ক্রিয়ার ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse as: We created them a creation and brought them into being. He reports from Qatada the plain wording, We created them a creation, and adds that the people of interpretation said the same. Al-Qurtubi pairs two verbs: We created them a creation and originated them an origination, using ibda', the word for bringing something about without a prior model. Ma'arif al-Qur'an begins more simply, saying only that insha' means to create. The abridged English Ibn Kathir renders the phrase as a special creation.",
            "bn": "তাবারী আয়াতের অর্থ করেন এভাবে: আমি তাদের সৃষ্টি করেছি এবং অস্তিত্বে এনেছি। কাতাদা থেকে তিনি সরল কথাটি বর্ণনা করেন: আমি তাদের সৃষ্টি করেছি। সঙ্গে জানান, ব্যাখ্যাকারেরা এ কথাই বলেছেন। কুরতুবী পাশাপাশি দুটি ক্রিয়া আনেন: আমি তাদের সৃষ্টি করেছি এবং নতুনভাবে উদ্ভাবন করেছি। এখানে তিনি ইবদা শব্দ ব্যবহার করেন, যার মানে আগের কোনো নমুনা ছাড়াই কিছু বানানো। মাআরিফুল কুরআন শুরু করে আরও সহজে, শুধু বলে যে ইনশা মানে সৃষ্টি করা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ শব্দগুচ্ছটির অনুবাদ করেছে এক বিশেষ সৃষ্টি।"
          },
          {
            "en": "Al-Baghawi calls it khalqan jadidan, a new creation. Al-Muyassar and as-Sa'di use almost the same sentence: Allah produced the women of the people of Paradise in a coming-into-being other than the one they had in this world, a complete one that does not admit of perishing. Al-Muyassar's note is grouped over 56:35 to 56:38, so its wording covers the following verses too. None of the fetched commentators stops to explain why the verbal noun is added after the verb, so this article offers no reason on their behalf.",
            "bn": "বাগাভী একে বলেন খালকান জাদীদান, নতুন সৃষ্টি। মুয়াসসার আর সা'দী প্রায় একই বাক্য ব্যবহার করেন। তাঁদের ভাষায়, আল্লাহ জান্নাতবাসীদের নারীদের এমনভাবে গড়েছেন যা দুনিয়ায় তাদের প্রথম গড়ন থেকে ভিন্ন। সে গড়ন পূর্ণাঙ্গ, তাতে বিনাশের কোনো সুযোগ নেই। মুয়াসসারের টীকাটি ৫৬:৩৫ থেকে ৫৬:৩৮ আয়াত একসঙ্গে ধরে লেখা, তাই এর কথা পরের আয়াতগুলোকেও ছুঁয়ে যায়। ক্রিয়ার পরে তার মূল শব্দটি কেন আবার এল, সংগৃহীত কোনো তাফসীর তা ব্যাখ্যা করেনি। তাই এ লেখাও তাঁদের হয়ে কোনো কারণ দাঁড় করাচ্ছে না।"
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
            "bn": "তাবারী ও ইবন কাসীর দুজনেই দুই ব্যাকরণবিদের মত উদ্ধৃত করেন। আখফাশ বলেছেন, সর্বনামটি এমন নারীদের বোঝায় যাদের কথা আগে আসেনি। আবু উবায়দা বলেছেন, তাদের কথা আগেই এসেছে: ওয়া হূরুন ঈন, কা-আমসালিল লু'লুইল মাকনূন। অর্থাৎ ৫৬:২২ ও ৫৬:২৩ আয়াতে বর্ণিত ডাগর চোখের সঙ্গিনীরা, যাদের তুলনা লুকানো মুক্তার সঙ্গে। এরপর ইবন কাসীর নিজের ব্যাখ্যা দেন। সর্বনামটি এমন কিছুর দিকে ফিরেছে যার নাম আসেনি। তবে প্রসঙ্গ, অর্থাৎ ফুরুশের উল্লেখ, সেই নারীদের দিকেই ইঙ্গিত করে যারা তাতে থাকবে। তাই নাম বলার দরকার পড়েনি। তুলনা হিসেবে তিনি আনেন ৩৮:৩১ ও ৩৮:৩২ আয়াত, যেখানে সূর্যের নাম না এলেও সূর্যই বোঝানো হয়েছে।"
          },
          {
            "en": "Al-Qurtubi goes a step further. The Arabs, he notes, call a woman firash, libas and izar, and Allah says hunna libasun lakum, they are a garment for you, at 2:187. On this reading the furush of 56:34 may themselves be a figure for women. He gives two reasons the pronoun can stand without an earlier noun: the women are already included among the companions of the right, and furush is a figure for them. Ma'arif al-Qur'an likewise says that if firash means the women of Paradise, the antecedent is obvious.",
            "bn": "কুরতুবী আরেক ধাপ এগিয়ে যান। তিনি জানান, আরবরা নারীকে ফিরাশ, লিবাস ও ইযার বলে ডাকে। আল্লাহও ২:১৮৭ আয়াতে বলেছেন, হুন্না লিবাসুল লাকুম: তারা তোমাদের পোশাক। এ পাঠে ৫৬:৩৪ আয়াতের ফুরুশ শব্দটি নিজেই নারীদের রূপক হতে পারে। আগের কোনো বিশেষ্য ছাড়াই সর্বনাম কেন বসতে পারে, তার দুটি কারণ তিনি দেখান। প্রথমত, নারীরা আগেই ডান দিকের লোকদের মধ্যে শামিল। দ্বিতীয়ত, ফুরুশ তাদেরই রূপক। মাআরিফুল কুরআনও বলে, ফিরাশ বলতে যদি জান্নাতের নারীদের বোঝানো হয়, তাহলে সর্বনামের উদ্দিষ্ট শব্দটি স্পষ্ট।"
          },
          {
            "en": "The two readings of furush differ in a small but real way. In the abridged English Ibn Kathir, the furush of 56:34 are couches, high, soft and comfortable, and the women are those upon them, implied by them. In al-Qurtubi's figure, the furush may be the women. Ma'arif al-Qur'an keeps both doors open: the women were mentioned at a distance, in 56:22 and 56:23, and even if firash means beds, the talk of couches and comforts gives the pronoun its setting. Which way 56:34 is read belongs to that verse; here it only frames the question.",
            "bn": "ফুরুশের এ দুই পাঠে পার্থক্য ছোট, কিন্তু সত্যিকারের। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ৫৬:৩৪ আয়াতের ফুরুশ হলো উঁচু, নরম ও আরামদায়ক বিছানা। নারীরা সেখানে বিছানার উপরের মানুষ, বিছানার উল্লেখ থেকেই যাদের বোঝা যায়। কুরতুবীর রূপকে ফুরুশ নিজেই নারী হতে পারে। মাআরিফুল কুরআন দুই পথই খোলা রাখে। নারীদের কথা দূরে, ৫৬:২২ ও ৫৬:২৩ আয়াতে এসেছে। আর ফিরাশ মানে বিছানা হলেও বিছানা ও আরাম-আয়েশের কথা সর্বনামকে তার প্রেক্ষাপট দিয়ে দেয়। ৫৬:৩৪ কীভাবে পড়া হবে, সে আলোচনা সেই আয়াতের। এখানে তা শুধু প্রশ্নটির পটভূমি।"
          }
        ]
      },
      {
        "h": {
          "en": "Made Without Being Born",
          "bn": "জন্ম ছাড়াই যাদের গড়া"
        },
        "p": [
          {
            "en": "The first answer reads \"them\" as al-hur al-'in. Al-Qurtubi states it directly: on this reading they are the hur 'in, meaning We created them without birth. Abu 'Ubayda's antecedent points the same way, back to the hur of 56:22. Ma'arif al-Qur'an includes this sense too: the houris are created without being born biologically. On this reading insha' is a making with no earlier life behind it, since those described were never born into this world. The two words of 56:22 and the readings of them are taken up in that verse's own article.",
            "bn": "প্রথম উত্তরে \"তাদের\" মানে আল-হূরুল ঈন। কুরতুবী তা সরাসরি বলেন: এ পাঠে তারা হূর ঈন, অর্থাৎ আমি তাদের জন্ম ছাড়াই সৃষ্টি করেছি। আবু উবায়দার দেখানো উদ্দিষ্ট শব্দও একই দিকে যায়, ৫৬:২২ আয়াতের হূরের দিকে। মাআরিফুল কুরআনেও এ অর্থ আছে: হূরদের সৃষ্টি জৈবিক জন্ম ছাড়াই। এ পাঠে ইনশা এমন এক সৃষ্টি, যার পেছনে আগের কোনো জীবন নেই। কারণ যাদের কথা বলা হচ্ছে, তারা কখনো এ দুনিয়ায় জন্ম নেয়নি। ৫৬:২২ আয়াতের দুটি শব্দ ও তার বিভিন্ন পাঠ নিয়ে আলোচনা আছে সেই আয়াতের নিজস্ব লেখায়।"
          },
          {
            "en": "Both translations on this site fill the gap with a bracket, and brackets belong to the translator, not to the Arabic. The Bengali reads \"that is, those hur\", which takes the side of this first answer. The English reads \"the women of Paradise\", a wider phrase that Ma'arif al-Qur'an also uses as its umbrella term, yet it still supplies a referent the verse itself leaves unspoken. The English \"[new] creation\" is a bracket as well, close to al-Baghawi's khalqan jadidan. A reader should know the brackets choose where the verse does not.",
            "bn": "এ সাইটের দুই অনুবাদই ফাঁকটা বন্ধনী দিয়ে পূরণ করেছে। বন্ধনীর কথা অনুবাদকের, আরবি পাঠের নয়। বাংলায় লেখা আছে \"অর্থাৎ ঐ হুরদেরকে\"। এটি প্রথম উত্তরের পক্ষ নেয়। ইংরেজিতে আছে \"জান্নাতের নারীরা\"। কথাটা আরও প্রশস্ত, মাআরিফুল কুরআনও সব অর্থ মিলিয়ে এ শব্দই ব্যবহার করে। তবু আয়াত যাদের নাম মুখে আনেনি, এ বন্ধনী তাদের একটা পরিচয় জুড়ে দেয়। ইংরেজির \"[নতুন] সৃষ্টি\" কথাটিও বন্ধনী, যা বাগাভীর খালকান জাদীদানের কাছাকাছি। পাঠকের জানা দরকার, আয়াত যেখানে বেছে নেয়নি, বন্ধনী সেখানে বেছে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Back From Old Age",
          "bn": "বার্ধক্য থেকে ফিরিয়ে আনা"
        },
        "p": [
          {
            "en": "The second answer reads \"them\" as the believing women of this world. Al-Qurtubi gives it under another \"it is said\": the women of the children of Adam, created a new creation, and that new creation is a return; We brought them back to the state of youth and complete beauty. He adds that the old woman and the young girl are made in a single making. Al-Baghawi reports Ibn 'Abbas: these are the human women, the old and grey, whom Allah creates after decrepitude in another creation.",
            "bn": "দ্বিতীয় উত্তরে \"তাদের\" মানে এ দুনিয়ার ঈমানদার নারীরা। কুরতুবী এটিও আনেন \"বলা হয়েছে\" দিয়ে। তাঁর ভাষায়, এরা আদম সন্তানদের নারী। তাদের নতুন করে সৃষ্টি করা হবে, আর সে নতুন সৃষ্টি আসলে ফিরিয়ে আনা। আল্লাহ তাদের ফিরিয়ে দেবেন যৌবন আর পূর্ণ সৌন্দর্যের অবস্থায়। তিনি আরও বলেন, বৃদ্ধা আর কিশোরী, দুজনকেই গড়া হবে একই রকম করে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: এরা মানুষের ঘরের নারী, বয়সের ভারে নুয়ে পড়া, চুল পাকা। জরাগ্রস্ত হওয়ার পর আল্লাহ তাদের আরেক সৃষ্টিতে গড়বেন।"
          },
          {
            "en": "Ibn Kathir's own gloss follows the same line. After reporting al-Akhfash and Abu 'Ubayda, he explains inna ansha'nahunna as: We brought them back in the final coming-into-being, after they had been old women with tired, watering eyes. The abridged English puts it as: in the other life, after they became old in this life, they were brought back. Al-Muyassar and as-Sa'di speak of a coming-into-being other than the one these women had in this world, so their wording also assumes an earlier life here. What 56:36 and 56:37 then add belongs to those verses.",
            "bn": "ইবন কাসীরের নিজের ব্যাখ্যাও এ পথেই চলে। আখফাশ ও আবু উবায়দার মত উল্লেখ করার পর তিনি ইন্না আনশা'নাহুন্নার অর্থ করেন এভাবে: পরকালের সৃষ্টিতে আমি তাদের ফিরিয়ে এনেছি, অথচ দুনিয়ায় তারা ছিল বৃদ্ধা, চোখ ক্লান্ত আর পানি-ঝরা। সংক্ষিপ্ত ইংরেজি সংস্করণের ভাষায়: এ জীবনে বুড়ো হয়ে যাওয়ার পর পরকালে তাদের ফিরিয়ে আনা হয়েছে। মুয়াসসার ও সা'দী বলেন এমন এক গড়নের কথা, যা দুনিয়ায় এই নারীদের গড়ন থেকে আলাদা। তাই তাঁদের কথাতেও ধরে নেওয়া আছে যে এখানে তাদের আগের একটা জীবন ছিল। ৫৬:৩৬ ও ৫৬:৩৭ আয়াত এরপর যা যোগ করে, তা সেই আয়াতগুলোর আলোচনা।"
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
            "bn": "মাআরিফুল কুরআন দুটির মধ্যে একটিকে বেছে নেয় না, বরং দুটিকে একসঙ্গে রাখে। তার ব্যাখ্যা অনুযায়ী আল্লাহ জান্নাতের নারীদের গড়েছেন বিশেষভাবে। হূরদের সৃষ্টি জন্ম ছাড়াই। আর দুনিয়ার যে নারীরা জান্নাতে যাবেন, তাদের নতুন করে গড়া হবে। এখানে যারা বৃদ্ধা ছিলেন বা যাদের রূপ ছিল না, তারা সেখানে হবেন তরুণী, সুন্দরী ও লাবণ্যময়ী। এটাও এক রকম বিচার, তবে একটি উৎসের বিচার, যা দুই উত্তরকেই একসঙ্গে সত্য ধরে। অন্যদিকে কুরতুবী দুই উত্তর পরপর সাজান, প্রত্যেকটি \"বলা হয়েছে\" দিয়ে শুরু করেন, আর কোনোটিকে প্রাধান্য দেন না।"
          },
          {
            "en": "Ibn Kathir, as seen above, glosses the verse with the restoration of women who grew old, while still reporting Abu 'Ubayda's pointer back to the hur. At-Tabari, in the text fetched here, records both grammarians and the plain gloss, and does not set one answer above the other in words. So the disagreement stands as the sources leave it. On one reading the verse speaks of beings made for the Garden; on the other it speaks of women who lived, aged and believed in this world. Neither reading is weakened by the other's existence.",
            "bn": "ইবন কাসীর, ওপরে যেমন দেখা গেল, আয়াতের ব্যাখ্যা করেন বৃদ্ধ হয়ে যাওয়া নারীদের ফিরিয়ে আনার অর্থে। তবে হূরের দিকে আবু উবায়দার ইঙ্গিতটিও তিনি উদ্ধৃত করেন। এখানে সংগৃহীত লেখায় তাবারী দুই ব্যাকরণবিদের মত আর সরল ব্যাখ্যাটি লিখে রাখেন। কোনো উত্তরকে অন্যটির ওপরে তিনি স্পষ্ট কথায় স্থান দেন না। তাই মতভেদটি উৎসগুলো যেভাবে রেখেছে, সেভাবেই থাকছে। এক পাঠে আয়াত বলছে জান্নাতের জন্য গড়া সৃষ্টির কথা। অন্য পাঠে বলছে এমন নারীদের কথা, যারা এ দুনিয়ায় বেঁচেছেন, বুড়ো হয়েছেন, ঈমান এনেছেন। একটি পাঠ আছে বলে অন্যটি দুর্বল হয়ে যায় না।"
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
            "en": "The narration most cited for the second answer comes from Anas, and the commentators trace it to at-Tirmidhi. It is in his Jami' as number 3296, on the page fetched for this article. At-Tirmidhi himself calls it gharib, says it is known as the Prophet's word only through Musa ibn 'Ubayda, and states that Musa ibn 'Ubayda and Yazid ibn Aban ar-Raqashi are weakened in hadith. Ibn Kathir reports the same verdict. Since the collector himself weakens it, this article names it for its grading and does not build on its wording.",
            "bn": "দ্বিতীয় উত্তরের পক্ষে সবচেয়ে বেশি উদ্ধৃত বর্ণনাটি আনাস (রাঃ) থেকে, আর তাফসীরকারেরা একে তিরমিযীর বরাতে আনেন। এ লেখার জন্য যে পাতা সংগ্রহ করা হয়েছে, তাতে বর্ণনাটি তাঁর জামি গ্রন্থে ৩২৯৬ নম্বরে আছে। তিরমিযী নিজেই একে গরীব বলেছেন। তিনি জানান, নবী ﷺ-এর কথা হিসেবে এটি শুধু মূসা ইবন উবায়দার সূত্রেই জানা যায়। তিনি আরও বলেন, মূসা ইবন উবায়দা ও ইয়াযীদ ইবন আবান রাকাশী হাদীসে দুর্বল বলে গণ্য। ইবন কাসীরও একই রায় উদ্ধৃত করেন। সংকলক নিজেই যেহেতু একে দুর্বল বলেছেন, এ লেখা শুধু এর মান জানিয়ে নামটুকু উল্লেখ করছে, এর ভাষার ওপর কিছু দাঁড় করাচ্ছে না।"
          },
          {
            "en": "Another report, about an old woman, reaches al-Baghawi and Ibn Kathir through at-Tirmidhi. It is in his ash-Shama'il as number 239, in these words: al-Hasan al-Basri said, \"An old woman came to the Prophet and said: 'O Messenger of Allah, beseech Allah to let me enter the Garden!' He replied: 'O Mother of So-and-so, no old woman will enter the Garden!' She turned away weeping, so he said: 'Tell her that she will not enter it as an old woman, for Allah says: We have created them a new creation, and made them virgins, loving, equal in age.'\"",
            "bn": "দ্বিতীয় বর্ণনাটি এক বৃদ্ধার ঘটনা, যা বাগাভী ও ইবন কাসীর তিরমিযীর সূত্রে আনেন। তাঁর শামায়েল গ্রন্থে এটি ২৩৯ নম্বরে আছে, এই ভাষায়: হাসান বসরী বলেন, এক বৃদ্ধা নবী ﷺ-এর কাছে এসে বললেন, \"হে আল্লাহর রাসূল, আল্লাহর কাছে দোয়া করুন, তিনি যেন আমাকে জান্নাতে প্রবেশ করান।\" তিনি বললেন, \"হে অমুকের মা, কোনো বৃদ্ধা জান্নাতে প্রবেশ করবে না।\" বৃদ্ধা কাঁদতে কাঁদতে ফিরে চললেন। তখন তিনি বললেন, \"তাঁকে জানিয়ে দাও, তিনি বৃদ্ধা অবস্থায় সেখানে প্রবেশ করবেন না। কেননা আল্লাহ বলেন: আমি তাদের সৃষ্টি করেছি নতুন সৃষ্টিতে, আর তাদের করেছি কুমারী, প্রেমময়ী, সমবয়সী।\""
          },
          {
            "en": "The page shows no grading from at-Tirmidhi, and the chain ends with al-Hasan al-Basri, who does not say which Companion told him; al-Baghawi and Ibn Kathir carry it by the same route. It is given here as the collection gives it, and no stronger. Other reports could not be confirmed on a fetched page: Umm Salama's questions, which Ibn Kathir takes from at-Tabarani and al-Qurtubi gives without a chain; the report of Salama ibn Yazid in at-Tabari and Ibn Kathir; and al-Bayhaqi's report from 'A'isha cited by Ma'arif al-Qur'an. They are named, not quoted.",
            "bn": "পাতায় তিরমিযীর কোনো মান-নির্ণয় দেখা যায় না। আর সনদ থেমে গেছে হাসান বসরীতে, কোন সাহাবী তাঁকে বলেছেন তা তিনি জানাননি। বাগাভী ও ইবন কাসীরও একই পথে বর্ণনাটি এনেছেন। তাই সংকলনে যেভাবে আছে, এখানে ঠিক সেভাবেই দেওয়া হলো, তার চেয়ে মজবুত করে নয়। আরও কিছু বর্ণনা সংগৃহীত কোনো পাতায় যাচাই করা যায়নি। যেমন উম্মে সালামা (রাঃ)-এর প্রশ্নগুলো, যা ইবন কাসীর তাবারানী থেকে নিয়েছেন আর কুরতুবী সনদ ছাড়া এনেছেন। তাবারী ও ইবন কাসীরে সালামা ইবন ইয়াযীদের বর্ণনা। আর মাআরিফুল কুরআনে উদ্ধৃত আয়েশা (রাঃ) থেকে বায়হাকীর বর্ণনা। এগুলোর শুধু নাম বলা হলো, উদ্ধৃতি দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Age Cannot Keep",
          "bn": "বয়স যা আটকে রাখতে পারে না"
        },
        "p": [
          {
            "en": "Whichever answer a reader holds, the verb is Allah's, and the making it names is, in the words of al-Muyassar and as-Sa'di, complete and not open to perishing. That is the plain gift of the verse for anyone who has watched a mother or grandmother grow frail. Decline is real here; it is not final there. The verse says this in three words and moves on, and the commentators fetched for it speak of these women with the same brevity. A reader does well to keep that restraint, and to speak of them with dignity.",
            "bn": "পাঠক যে উত্তরই গ্রহণ করুন, সৃষ্টির কাজটা আল্লাহর। আর সে সৃষ্টি, মুয়াসসার ও সা'দীর ভাষায়, পূর্ণাঙ্গ, তাতে বিনাশ নেই। যিনি নিজের মা বা নানিকে দিনে দিনে দুর্বল হতে দেখেছেন, তাঁর জন্য আয়াতের সোজা উপহার এটাই। এখানে ক্ষয় সত্য, কিন্তু সেখানে তা শেষ কথা নয়। আয়াত কথাটি বলে মাত্র তিনটি শব্দে, তারপর এগিয়ে যায়। সংগৃহীত তাফসীরগুলোও এই নারীদের কথা বলে একই রকম সংযমে। পাঠকের জন্যও ভালো এই সংযম ধরে রাখা, আর তাঁদের কথা বলা মর্যাদার সঙ্গে।"
          },
          {
            "en": "There is also a duty in it. If old age is not the last word in the Garden, it should not be treated as the last word here either. The old among us are not finished people, and the fear that age disqualifies a person, the fear the old woman of the Shama'il voiced through her tears, deserves a gentle answer. The next verses, 56:36 to 56:38, go on to say more about these women and whom they are for: the companions of the right. Being among them is the work of this life, while there is time.",
            "bn": "এর মধ্যে একটা দায়িত্বও আছে। জান্নাতে বার্ধক্য যদি শেষ কথা না হয়, এখানেও তাকে শেষ কথা ভাবা উচিত নয়। আমাদের মাঝের বয়স্ক মানুষেরা ফুরিয়ে যাওয়া মানুষ নন। বয়স হলে বুঝি সব শেষ, এই ভয় শামায়েলের সেই বৃদ্ধা কাঁদতে কাঁদতে প্রকাশ করেছিলেন। এমন ভয়ের জবাব হওয়া উচিত কোমল। পরের আয়াতগুলো, ৫৬:৩৬ থেকে ৫৬:৩৮, এই নারীদের সম্পর্কে আরও বলে, আর জানায় তারা কাদের জন্য: ডান দিকের লোকদের জন্য। তাদের দলে শামিল হওয়ার কাজ এ জীবনেই, যতক্ষণ সময় আছে।"
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
            "bn": "ওয়া আসহাবুশ শিমালি মা আসহাবুশ শিমাল: আর বাম দিকের দল, কী বাম দিকের দল! আরবিতে আয়াতটি পাঁচ শব্দের, আর তার মধ্যে নামটি এসেছে দুবার। ঠিক আগে ৫৬:৩৯ ও ৫৬:৪০ আয়াতে ডান দিকের দলের বর্ণনা শেষ হয়েছে এই কথায় যে, তারা হবে পূর্ববর্তীদের মধ্য থেকে একদল আর পরবর্তীদের মধ্য থেকেও একদল। ইবন কাসীর আয়াতটির জায়গা চিনিয়ে দেন একটিমাত্র যোগসূত্রে। তাঁর কথায়, ডান দিকের দলের অবস্থা বলার পর আল্লাহ তার সঙ্গে জুড়ে দিলেন বাম দিকের দলের কথা।"
          },
          {
            "en": "That clause sets the frame for this article. The right-hand group was introduced at 56:27, and the verses after it describe their shade, water and fruit. The present verse opens the matching account of the other side, and the description itself runs from 56:42 onward. The article stays with the five words: the name, the people it covers, and the question that follows the name. What these people suffer, and why, belongs to the verses that come next, and those verses are only pointed to here.",
            "bn": "এই যোগসূত্রই এ লেখার কাঠামো ঠিক করে দেয়। ডান দিকের দলের কথা শুরু হয়েছিল ৫৬:২৭ আয়াতে। তার পরের আয়াতগুলোতে এসেছে তাদের ছায়া, পানি আর ফলের বর্ণনা। এ আয়াত খোলে অপর পক্ষের হিসাব, আর সেই বর্ণনা চলে ৫৬:৪২ থেকে সামনের দিকে। আমরা থাকব এই পাঁচ শব্দের ভেতরেই: নামটা কী, কাদের কথা বলছে, আর নামের পরে যে প্রশ্ন আসে তার মানে কী। তারা কী ভোগ করবে আর কেন, সে কথা পরের আয়াতগুলোর। এখানে শুধু সেদিকে ইশারা করা হবে।"
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
            "en": "Why are they called the companions of the left? The commentaries fetched for this verse give two explanations. Al-Qurtubi begins by saying that Allah here mentions the stations of the people of the Fire, and that He named them companions of the left because they take their books with their left hands. On his reading the name comes from the hand: the left is the side by which each of them receives his book, and the name stays with them because of it.",
            "bn": "তাদের বাম দিকের দল বলা হলো কেন? এ আয়াতের যে তাফসীরগুলো আনা হয়েছে, তাতে দুটি ব্যাখ্যা পাওয়া যায়। কুরতুবী শুরুতেই বলেন, আল্লাহ এখানে জাহান্নামবাসীদের ঠিকানার কথা তুলছেন। আর তাদের নাম রেখেছেন বাম দিকের দল, কারণ তারা নিজেদের কিতাব নেবে বাম হাতে। তাঁর ব্যাখ্যায় নামটা এসেছে হাত থেকে। প্রত্যেকে নিজের কিতাব হাতে পায় বাম দিক দিয়ে, আর সেই কারণেই নামটা তাদের সঙ্গে জুড়ে থাকে।"
          },
          {
            "en": "At-Tabari explains the name by a direction of travel. The companions of the left, he says, are those who are taken along the left-hand side, from the place where the reckoning is held to the Fire. In his wording the left is a road rather than a hand. People stand for the reckoning, and then one group is led away on the left-hand path, and the path ends in the Fire. The name describes the way they are taken.",
            "bn": "তাবারী নামটা বোঝান চলার দিক দিয়ে। তাঁর কথায়, বাম দিকের দল তারাই, যাদের হিসাবের জায়গা থেকে বাম পাশের পথ ধরে জাহান্নামের দিকে নিয়ে যাওয়া হবে। তাঁর ভাষায় বাম মানে হাত নয়, পথ। মানুষ দাঁড়াবে হিসাবের জন্য। তারপর একটি দলকে বাম দিকের রাস্তায় নিয়ে যাওয়া হবে, আর সে রাস্তা গিয়ে থামবে আগুনে। নামটা আসলে তাদের নিয়ে যাওয়ার পথের বর্ণনা।"
          },
          {
            "en": "The two explanations sit side by side, and neither commentator, in the note fetched here, argues against the other. One reads the left as the hand that receives the book; the other reads it as the direction in which the group is led. Both end in the same place, since al-Qurtubi speaks of the stations of the people of the Fire and at-Tabari of the road to it. This article keeps both and does not choose between them, and it adds no further explanation that these notes do not give.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি থাকে। এখানে আনা তাফসীরে দুজনের কেউ অন্যজনের কথা খণ্ডন করেননি। একজনের কাছে বাম মানে সেই হাত, যে হাতে কিতাব আসে। অন্যজনের কাছে বাম মানে সেই দিক, যেদিকে দলটিকে নিয়ে যাওয়া হয়। দুটো ব্যাখ্যাই থামে এক জায়গায়। কুরতুবী বলেন জাহান্নামবাসীদের ঠিকানার কথা, তাবারী বলেন সেখানে যাওয়ার পথের কথা। এ লেখা দুটোই রাখছে, কোনোটিকে বেছে নিচ্ছে না। আর এই তাফসীরগুলোতে নেই এমন কোনো ব্যাখ্যাও যোগ করছে না।"
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
            "bn": "নামটা কোথা থেকে এল, সা'দী তা ব্যাখ্যা করেন না। তিনি বলেন কাদের কথা হচ্ছে: বাম দিকের দল হলো জাহান্নামবাসী, অশুভ আমলের লোক। কথার প্রথম অংশ বাকি দুজনের সঙ্গে মেলে, তাঁরাও এই দলকে আগুনেই রাখেন। দ্বিতীয় অংশে সা'দী নিজের একটা কথা যোগ করেন। তাঁর ব্যাখ্যায় দলটির পরিচয় শুধু শেষ ঠিকানা দিয়ে নয়, তাদের করা কাজ দিয়েও। নামটা তাই বাঁধা থাকে গন্তব্যের সঙ্গে, আমলের সঙ্গেও।"
          },
          {
            "en": "Earlier in the surah, at 56:9, a group was named with a different Arabic word, al-mash'ama. The notes fetched for the present verse do not draw a line between that name and this one, and none of them refers back to 56:9. So this article does not join the two, and leaves that question to the commentary on the earlier verse. What the notes here do say is enough for the present verse: a group in the Fire, named by a hand or a road, and marked by its deeds.",
            "bn": "সূরার শুরুর দিকে ৫৬:৯ আয়াতে একটি দলের নাম এসেছে ভিন্ন এক আরবি শব্দে, আল-মাশআমা। এ আয়াতের জন্য আনা তাফসীরগুলো সেই নামের সঙ্গে এই নামের কোনো সম্পর্ক টানে না। তাদের কেউ ৫৬:৯ আয়াতের দিকে ফিরেও তাকায় না। তাই এ লেখা দুটি নামকে এক করছে না। সে প্রশ্ন আগের আয়াতের তাফসীরের জন্য থাকল। এ আয়াতের জন্য তাফসীরগুলো যা বলে, তা-ই যথেষ্ট: আগুনের একটি দল, যাদের নাম এসেছে হাত বা পথ থেকে, আর যাদের চিহ্ন তাদের আমল।"
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
            "bn": "আয়াতের দ্বিতীয় অর্ধেক নামটার উপর দাঁড়ানো এক প্রশ্ন: মা আসহাবুশ শিমাল, কী বাম দিকের দল! নামটার জায়গায় কোনো সর্বনাম বসেনি, পুরো নামটাই আবার এসেছে। ইবন কাসীরের আরবি তাফসীর প্রশ্নটাকে সহজ কথায় খুলে বলে: বাম দিকের দল কীসের মধ্যে আছে? তাঁর পাঠে প্রশ্নটা তারা কারা তা নিয়ে নয়। সেটা তো নামেই বলা হয়ে গেছে। প্রশ্নটা তাদের অবস্থা নিয়ে, তারা কোন হালে পড়েছে তা নিয়ে।"
          },
          {
            "en": "The abridged English Ibn Kathir puts it in nearly the same way: meaning, what is the condition of those on the left. It then adds that Allah explains His own question in the words that follow, beginning with the scorching wind of 56:42. On this reading the verse is the first half of a thought that the next verses complete. Al-Baghawi's note on this verse, as fetched, only repeats the verse's own words, so no reading is taken from him here.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরও প্রায় একই কথা বলে: অর্থাৎ, বাম দিকের দলের অবস্থা কী। তারপর যোগ করে, আল্লাহ নিজেই পরের কথাগুলোতে নিজের প্রশ্নের ব্যাখ্যা দিয়েছেন, শুরু করেছেন ৫৬:৪২ আয়াতের জ্বলন্ত হাওয়া দিয়ে। এভাবে পড়লে আয়াতটি এক ভাবনার প্রথম অর্ধেক, আর বাকিটা পূর্ণ করে পরের আয়াতগুলো। বাগাভীর যে তাফসীর এ আয়াতের জন্য আনা হয়েছে, তাতে শুধু আয়াতের শব্দগুলোই আবার লেখা। তাই এখানে তাঁর নামে কোনো ব্যাখ্যা দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder, Weight and Ruin",
          "bn": "বিস্ময়, ভার আর সর্বনাশ"
        },
        "p": [
          {
            "en": "At-Tabari reads the question as wonder. Allah says it, in his words, making His Prophet Muhammad wonder at the people of the Fire. The question then asks what is theirs and what has been prepared for them. He supports this with a report through his own chain, Bishr from Yazid from Sa'id, reaching Qatada, who glossed the verse with the same words: what is theirs, and what has been prepared for them. On this reading the question looks ahead to what awaits them.",
            "bn": "তাবারী প্রশ্নটাকে পড়েন বিস্ময় হিসেবে। তাঁর ভাষায়, আল্লাহ কথাটা বলছেন তাঁর নবী মুহাম্মাদ ﷺ-কে জাহান্নামবাসীদের ব্যাপারে বিস্মিত করতে। প্রশ্নটার মানে তখন দাঁড়ায়: তাদের জন্য কী আছে, তাদের জন্য কী তৈরি রাখা হয়েছে? এর পক্ষে তিনি নিজের সনদে একটি বর্ণনা আনেন। বিশর থেকে ইয়াযীদ, ইয়াযীদ থেকে সাঈদ, আর সাঈদ থেকে কাতাদা। কাতাদা আয়াতের ব্যাখ্যায় হুবহু এ কথাই বলেছেন: তাদের জন্য কী আছে, আর কী তৈরি রাখা হয়েছে। এ পাঠে প্রশ্নটা তাকিয়ে আছে সামনে, তাদের জন্য যা অপেক্ষা করছে সেদিকে।"
          },
          {
            "en": "Al-Qurtubi gives the question a different weight. Having named them, he says, Allah made the mention of them grave in affliction and punishment, and then said: what are the companions of the left. For him the question magnifies what is about to fall on them. The Muyassar turns it into an exclamation: and the companions of the left, how evil is their state, their recompense! In its wording the question already carries its own verdict, before the details arrive.",
            "bn": "কুরতুবী প্রশ্নটাকে দেন অন্য রকম ভার। তাঁর কথায়, নাম নেওয়ার পর আল্লাহ বিপদ আর শাস্তির প্রসঙ্গে তাদের উল্লেখকে ভারী করে তুললেন, তারপর বললেন: কী বাম দিকের দল! তাঁর কাছে প্রশ্নটা তাদের উপর যা আসছে তার ভয়াবহতা বড় করে দেখায়। মুয়াসসার প্রশ্নটাকে বিস্ময়ের বাক্যে বদলে দেয়: আর বাম দিকের দল, কত মন্দ তাদের অবস্থা, তাদের প্রতিফল! এ ভাষায় খুঁটিনাটি আসার আগেই প্রশ্নটার ভেতরে রায়টা বসে আছে।"
          },
          {
            "en": "Set together, the notes stress different things. At-Tabari and Qatada stress wonder and what has been prepared; al-Qurtubi stresses the gravity of the punishment; Ibn Kathir stresses their condition; the Muyassar exclaims at how evil that condition is. None of the notes ranks one sense above another, and they do not exclude each other. The two translations on this site show the same range: the English keeps the question, what are the companions of the left, while the Bengali renders it as an exclamation at how wretched they are.",
            "bn": "সব একসঙ্গে রাখলে দেখা যায়, প্রত্যেকে জোর দিয়েছেন আলাদা জায়গায়। তাবারী আর কাতাদা জোর দেন বিস্ময়ে আর তাদের জন্য যা তৈরি রাখা হয়েছে তাতে। কুরতুবী জোর দেন শাস্তির ভয়াবহতায়। ইবন কাসীর জোর দেন তাদের অবস্থায়, আর মুয়াসসার বিস্ময় প্রকাশ করে সে অবস্থা কত মন্দ তা নিয়ে। কোনো তাফসীর একটি অর্থকে অন্যটির উপরে রাখেনি, আর অর্থগুলো একে অন্যকে বাদও দেয় না। এই সাইটের দুই অনুবাদেও একই বিস্তার দেখা যায়। ইংরেজি অনুবাদ প্রশ্নটাকে প্রশ্নই রেখেছে, আর বাংলা অনুবাদ বলেছে বিস্ময়ের সুরে: কত হতভাগ্য বামদিকের দল!"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Comes Next",
          "bn": "উত্তর আসে পরের আয়াতে"
        },
        "p": [
          {
            "en": "Two of the notes show plainly that the verse is answered by what follows it. The Muyassar's gloss covers 56:41 to 56:44 in one sentence: after its exclamation it goes straight on to a hot wind from the heat of Hell that seizes their breath, water that boils, and shade from smoke of intense blackness. Ibn Kathir in English, as noted above, says that Allah explains His statement with the words in Samum. Neither treats 56:41 as a closed sentence; both let the question run into the verses that answer it.",
            "bn": "দুটি তাফসীর স্পষ্ট দেখায়, আয়াতটির উত্তর আসে তার পরের কথায়। মুয়াসসার ৫৬:৪১ থেকে ৫৬:৪৪ পর্যন্ত একটি বাক্যে ব্যাখ্যা করে। বিস্ময়ের কথাটা বলেই সোজা চলে যায় জাহান্নামের তাপ থেকে আসা গরম হাওয়ার কথায়, যা তাদের দম আটকে দেয়। তারপর ফুটন্ত পানি, আর ঘন কালো ধোঁয়ার ছায়া। ইবন কাসীরের ইংরেজি তাফসীর, যেমন আগে বলা হলো, জানায় যে আল্লাহ নিজের কথার ব্যাখ্যা দিয়েছেন ফী সামূম শব্দ দিয়ে। দুজনের কেউই ৫৬:৪১ আয়াতকে বন্ধ বাক্য ধরেননি। দুজনেই প্রশ্নটাকে বয়ে নিয়ে গেছেন উত্তরের আয়াতগুলো পর্যন্ত।"
          },
          {
            "en": "Those verses are ground for later articles in this series. 56:42 to 56:44 name the scorching wind, the scalding water and the shade of black smoke that is neither cool nor beneficial. 56:45 and 56:46 give reasons: their indulgence in affluence before that, and their persistence in the great violation. 56:47 reports their denial of being raised again once they have become dust and bones. Each will be read in its own place. Here it is enough to see that the question of 56:41 is not left hanging.",
            "bn": "ওই আয়াতগুলো এ ধারার পরের লেখাগুলোর বিষয়। ৫৬:৪২ থেকে ৫৬:৪৪ আয়াতে আছে জ্বলন্ত হাওয়া, ফুটন্ত পানি আর কালো ধোঁয়ার ছায়ার কথা, যা শীতলও নয়, উপকারীও নয়। ৫৬:৪৫ ও ৫৬:৪৬ আয়াত কারণ জানায়: এর আগে তারা ভোগবিলাসে ডুবে ছিল, আর বড় গুনাহে অটল ছিল। ৫৬:৪৭ আয়াত তুলে ধরে তাদের অস্বীকার, মাটি আর হাড় হয়ে যাওয়ার পর আবার উঠানো হবে, এ কথা তারা মানত না। প্রতিটি আয়াত পড়া হবে তার নিজের জায়গায়। এখানে এটুকু দেখাই যথেষ্ট যে ৫৬:৪১ আয়াতের প্রশ্ন ঝুলে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Verdict on Anyone Alive",
          "bn": "জীবিত কারও বিচার নয়"
        },
        "p": [
          {
            "en": "Because this verse names a condemned group, one thing must be said plainly. The verse describes what the text describes: a group on the Day of Reckoning, named by the left, whose end the following verses set out. It licenses nothing against any living person or community. It names no sect, nation, family or party, and no reader has warrant to place anyone alive today among the companions of the left. The commentators fetched here speak of the place of reckoning and the Fire, and none of them applies the name to a group in this world.",
            "bn": "আয়াতটি যেহেতু শাস্তিপ্রাপ্ত এক দলের নাম নেয়, একটা কথা সোজাসুজি বলা দরকার। আয়াত বর্ণনা করে কেবল তা-ই, যা আয়াতে আছে: হিসাবের দিনের এক দল, যাদের নাম বাম দিক দিয়ে, আর যাদের পরিণতি পরের আয়াতগুলো খুলে বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। কোনো মাযহাব, জাতি, পরিবার বা দলের নাম এতে নেই। আজ বেঁচে থাকা কাউকে বাম দিকের দলে বসানোর অধিকার কোনো পাঠকের নেই। এখানে আনা তাফসীরকারেরা কথা বলেন হিসাবের জায়গা আর জাহান্নাম নিয়ে। তাঁদের কেউ এ নাম দুনিয়ার কোনো দলের উপর চাপাননি।"
          },
          {
            "en": "As-Sa'di's gloss points the reader the other way, towards deeds. If the group is marked by ill-omened deeds, the fitting use of the verse is for each reader to examine their own deeds, not to sort other people into sides. Whoever reads the companions of the left and thinks first of an opponent has turned a warning addressed to every listener into a weapon aimed at someone else. That is a misuse of the verse, and nothing in the notes fetched for it supports such a reading.",
            "bn": "সা'দীর ব্যাখ্যা পাঠককে উল্টো দিকে ফেরায়, আমলের দিকে। দলটির চিহ্ন যদি অশুভ আমল হয়, তবে আয়াতের সঠিক ব্যবহার হলো নিজের আমল যাচাই করা। অন্য মানুষকে এ পক্ষে-ও পক্ষে ভাগ করা নয়। বাম দিকের দলের কথা পড়ে যার মনে প্রথমেই কোনো প্রতিপক্ষের মুখ ভাসে, সে প্রত্যেক শ্রোতার জন্য আসা সতর্কবাণীকে বানিয়ে ফেলেছে অন্যের দিকে তাক করা অস্ত্র। এটা আয়াতের অপব্যবহার। এ আয়াতের জন্য আনা তাফসীরের কোথাও এমন পাঠের পক্ষে কিছু নেই।"
          },
          {
            "en": "No hadith is attached to this verse in the notes fetched for it. At-Tabari's only report is the gloss of Qatada quoted above, which explains the meaning and is not a saying of the Prophet ﷺ. Ma'arif al-Qur'an's note for this group of verses discusses 56:39 and 56:40, and the narration it cites concerns those verses, not this one. Narrations sometimes linked with the right and the left could not be confirmed on a fetched page with their collector's grading, so they are left out.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোতে আয়াতটির সঙ্গে জোড়া কোনো হাদীস নেই। তাবারীর একমাত্র বর্ণনা কাতাদার সেই ব্যাখ্যা, যা উপরে এসেছে। সেটা অর্থের ব্যাখ্যা, নবী ﷺ-এর বাণী নয়। মাআরিফুল কুরআন এই আয়াতগুচ্ছের আলোচনায় কথা বলে ৫৬:৩৯ ও ৫৬:৪০ আয়াত নিয়ে, আর সেখানে উদ্ধৃত বর্ণনাটি ওই আয়াতগুলোর, এ আয়াতের নয়। ডান আর বাম নিয়ে কখনো কখনো যে বর্ণনাগুলো আনা হয়, সংকলকের নিজের মানসহ কোনো আনা পাতায় সেগুলো নিশ্চিত করা যায়নি। তাই সেগুলো বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked While Deeds Remain",
          "bn": "আমলের সময় থাকতেই প্রশ্ন"
        },
        "p": [
          {
            "en": "The question in this verse reaches its hearers before the Day it describes. At-Tabari reads it as wonder put to the Prophet ﷺ about the people of the Fire, and the wonder travels with the verse to everyone who recites it. A question that does not wait for an answer makes the reader pause, and the pause has its use: before the description begins, there is a moment to ask which way one's own deeds are leaning, and whether that can still be changed.",
            "bn": "এ আয়াতের প্রশ্ন শ্রোতার কাছে পৌঁছায় সেই দিনের আগেই, যে দিনের কথা সে বলছে। তাবারী একে পড়েন জাহান্নামবাসীদের ব্যাপারে নবী ﷺ-এর সামনে রাখা বিস্ময় হিসেবে। আর সেই বিস্ময় আয়াতের সঙ্গে চলে আসে প্রত্যেক তিলাওয়াতকারীর কাছে। যে প্রশ্ন উত্তরের অপেক্ষা করে না, তা পাঠককে থামিয়ে দেয়। এই থামারও একটা কাজ আছে। বর্ণনা শুরুর আগে এক মুহূর্ত পাওয়া যায় নিজেকে জিজ্ঞেস করার: আমার আমল কোন দিকে ঝুঁকে আছে, আর তা এখনো বদলানো যায় কি না।"
          },
          {
            "en": "Both readings of the name leave room for that question. If the left is the hand that receives the book, the book is still being written while life lasts. If the left is the road from the place of reckoning, the steps towards it are taken now. As-Sa'di's mention of deeds makes the same point from another side. The verses just before this one described the companions of the right; the way to their side is by deeds, and the time for deeds is the present one.",
            "bn": "নামটার দুই ব্যাখ্যাই এ প্রশ্নের জায়গা রাখে। বাম মানে যদি সেই হাত হয়, যে হাতে কিতাব আসে, তবে জীবন যতদিন আছে, কিতাবের লেখা ততদিন চলছে। বাম মানে যদি হিসাবের জায়গা থেকে শুরু হওয়া পথ হয়, তবে সে পথের দিকে পা ফেলা হচ্ছে এখনই। সা'দী আমলের কথা তুলে একই কথা বলেন অন্য দিক থেকে। ঠিক আগের আয়াতগুলোতে এসেছে ডান দিকের দলের বর্ণনা। তাদের দলে পৌঁছানোর পথ আমল, আর আমলের সময় এই বর্তমানটাই।"
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
          "bn": "তৃতীয় যে কথা তাদের সম্পর্কে"
        },
        "p": [
          {
            "en": "Wa-kanu yaquluna a-idha mitna wa-kunna turaban wa-'izaman a-inna la-mab'uthun: and they used to say, when we die and become dust and bones, are we indeed to be resurrected? The verse has nine Arabic words, and most of them are a quotation. The speakers are the companions of the left, the group whose name the surah asked about in 56:41 and whose torment 56:42 to 56:44 describe: scorching wind, scalding water and a shade of black smoke. Then three verses turn back to their life before, and each begins with the verb kanu, they were.",
            "bn": "ওয়া কানূ ইয়াকূলূনা আইযা মিতনা ওয়া কুন্না তুরাবাও ওয়া ইযামান আইন্না লামাবঊসূন: আর তারা বলত, আমরা যখন মরে যাব আর মাটি ও হাড় হয়ে যাব, তখন কি সত্যিই আমাদের আবার ওঠানো হবে? আয়াতে আরবি শব্দ নয়টি, তার বেশির ভাগই কারও মুখের উদ্ধৃতি। বক্তারা বাম দিকের দল। ৫৬:৪১ আয়াতে সূরা তাদের নাম নিয়েই প্রশ্ন তুলেছিল, আর ৫৬:৪২ থেকে ৫৬:৪৪ আয়াতে এসেছে তাদের আযাব: আগুনে হাওয়া, ফুটন্ত পানি, কালো ধোঁয়ার ছায়া। এরপর তিনটি আয়াত ফিরে যায় তাদের আগের জীবনে। তিনটিরই শুরু একই ক্রিয়া দিয়ে: কানূ, তারা ছিল।"
          },
          {
            "en": "Ibn Kathir's English abridgement introduces 56:45 with the words that Allah then stated they deserve this end. They indulged in luxury, he writes, enjoying life's pleasures and satisfying their lusts in the life of the world, all the while ignoring what the Messengers brought to them. On 56:46 he reports that the great sin in which they persisted means idolatry, according to Ibn Abbas and others; that gloss belongs to 56:46 and is left there. Then 56:47 adds a third thing about them, and this time it is something they said.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৫৬:৪৫ আয়াত শুরু করে এই বলে যে, আল্লাহ এরপর জানালেন তারা কেন এ পরিণতির যোগ্য। তাঁর ভাষায়, দুনিয়ার জীবনে তারা ভোগবিলাসে মজে ছিল, মজা লুটত আর কামনা মেটাত, অথচ রাসূলরা যা নিয়ে এসেছিলেন তার দিকে ফিরেও তাকাত না। ৫৬:৪৬ আয়াতে যে বড় গুনাহে তারা অটল ছিল, ইবন আব্বাস ও অন্যদের সূত্রে তিনি তার অর্থ বলেন শিরক। সে ব্যাখ্যা ৫৬:৪৬ আয়াতের, সেখানেই থাক। ৫৬:৪৭ আয়াত তাদের সম্পর্কে তৃতীয় একটি কথা যোগ করে, আর এবার সেটা তাদের মুখের কথা।"
          },
          {
            "en": "The same abridgement quotes 56:47 and 56:48 as one sentence and comments in one line: they said this while denying and rejecting the idea that resurrection will ever occur. Ibn Kathir's Arabic note on 56:47 is shorter still. They say it, he writes, mukadhdhibina bihi mustab'idina li-wuqu'ih: denying it, and deeming its occurrence far-off. Those two ideas, denial and distance, run through nearly every note fetched for this verse, and the sections below follow them one commentator at a time.",
            "bn": "একই সংক্ষিপ্ত তাফসীর ৫৬:৪৭ ও ৫৬:৪৮ আয়াতকে একটি বাক্য হিসেবে উদ্ধৃত করে, আর মন্তব্য করে এক লাইনে: পুনরুত্থান কখনো ঘটবে, এ ধারণাকে অস্বীকার ও প্রত্যাখ্যান করেই তারা কথাটা বলত। ৫৬:৪৭ আয়াতে ইবন কাসীরের আরবি টীকা আরও ছোট। তিনি লেখেন, তারা কথাটা বলে মুকাযযিবীনা বিহী মুসতাবইদীনা লিউকূইহ: একে মিথ্যা বলে, আর এর ঘটাকে দূরের অসম্ভব ব্যাপার মনে করে। অস্বীকার আর দূরত্ব, এ দুটি ধারণা এ আয়াতের জন্য আনা প্রায় সব টীকাতেই আছে। নিচের অংশগুলো একে একে তাফসীরকারদের ধরে সেগুলো দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Graves, Dust and Crumbling Bones",
          "bn": "কবর, মাটি আর ঝুরঝুরে হাড়"
        },
        "p": [
          {
            "en": "The sentence sets out the stages it doubts. Idha mitna: when we have died. Wa-kunna turaban wa-'izaman: and have become dust and bones. Then the question: a-inna la-mab'uthun, shall we indeed be raised? At-Tabari opens his note by naming the attitude behind the words. They said it, he writes, kufran minhum bil-ba'th, out of disbelief in the raising, wa-inkaran li-ihya'i Allahi khalqahu min ba'di mamatihim: and in denial that Allah gives life to His creation after their death.",
            "bn": "বাক্যটি যে ধাপগুলো নিয়ে সন্দেহ করে, সেগুলো একে একে বলে দেয়। ইযা মিতনা: যখন আমরা মরে যাব। ওয়া কুন্না তুরাবাও ওয়া ইযামা: আর মাটি ও হাড় হয়ে যাব। তারপর প্রশ্ন: আইন্না লামাবঊসূন, সত্যিই কি আমাদের ওঠানো হবে? তাবারী টীকার শুরুতেই কথার পেছনের মনোভাবটা ধরিয়ে দেন। তাঁর ভাষায়, তারা এ কথা বলত কুফরান মিনহুম বিলবাস, পুনরুত্থানে অবিশ্বাস থেকে। আর ইনকারান লিইহইয়াইল্লাহি খালকাহূ মিম বাদি মামাতিহিম: মৃত্যুর পর আল্লাহ তাঁর সৃষ্টিকে আবার জীবন দেবেন, এ কথা অস্বীকার করে।"
          },
          {
            "en": "He then restates their question in fuller words: a-idha kunna turaban fi quburina min ba'di mamatina, wa-'izaman nakhira, a-inna la-mab'uthuna minha ahya'an kama kunna qabla l-mamat? When we are dust in our graves after our death, and crumbling bones, shall we be raised from them alive, as we were before death? Two details are his: the graves, and the word nakhira, crumbling. His last phrase names exactly what they denied. It was not some vague survival, but a return to life, alive as they had been.",
            "bn": "তারপর তিনি তাদের প্রশ্নটা আরও খুলে বলেন: আইযা কুন্না তুরাবান ফী কুবূরিনা মিম বাদি মামাতিনা, ওয়া ইযামান নাখিরাহ, আইন্না লামাবঊসূনা মিনহা আহইয়াআন কামা কুন্না কাবলাল মামাত? মৃত্যুর পর আমরা যখন কবরে মাটি হয়ে যাব, হাড়গুলো হবে ঝুরঝুরে, তখন কি সেখান থেকে আমাদের জীবিত ওঠানো হবে, মৃত্যুর আগে যেমন ছিলাম তেমন? কবর আর নাখিরাহ, মানে ঝুরঝুরে, এ দুটি তাঁর যোগ করা। শেষ অংশে তিনি ঠিক কোন জিনিসটা তারা অস্বীকার করত তা বলে দেন। কোনো ঝাপসা টিকে থাকা নয়, বরং আগের মতোই জীবিত হয়ে ফেরা।"
          },
          {
            "en": "The Muyassar puts the question first: a-nub'athu idha mitna wa-sirna turaban wa-'izaman baliya? Shall we be raised when we have died and become dust and worn-out bones? Its word for the bones, baliya, means worn out and decayed. As-Sa'di uses a verb from the same root for the speakers themselves: wa-qad balina, when we have decayed. At-Tabari, the Muyassar and as-Sa'di all describe a body that has come apart, and in each of them the doubt is voiced from that point.",
            "bn": "মুয়াসসার প্রশ্নটাকে সামনে নিয়ে আসে: আনুবআসু ইযা মিতনা ওয়া সিরনা তুরাবাও ওয়া ইযামান বালিয়াহ? আমরা মরে মাটি আর জীর্ণ হাড় হয়ে গেলে কি আমাদের ওঠানো হবে? হাড়ের জন্য তার শব্দ বালিয়াহ, যার অর্থ জীর্ণ, ক্ষয়ে যাওয়া। সা'দী একই ধাতুর ক্রিয়া ব্যবহার করেন বক্তাদের নিজেদের জন্যই: ওয়া কাদ বালীনা, যখন আমরা পচে-গলে গেছি। তাবারী, মুয়াসসার আর সা'দী, তিনজনের বর্ণনাতেই দেহটা ভেঙেচুরে শেষ। সন্দেহের কথাটা উচ্চারিত হয় ঠিক সেখান থেকে।"
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
            "bn": "এ আয়াতে বাগাভীর টীকায় অর্থের কোনো ব্যাখ্যা নেই। আছে শুধু আয়াতটি কীভাবে পড়া হয়, তার বিবরণ। বাক্যে প্রশ্ন বসতে পারে দুই জায়গায়: শুরুতে আইযা, আর ওঠানোর শব্দের আগে আইন্না। তিনি জানান, আবু জাফর, নাফে', কিসাঈ ও ইয়াকুব আইযা পড়েন প্রশ্নবোধক রূপে, আর ইন্না পড়েন প্রশ্ন ছাড়া। বাকিরা দুই জায়গাতেই প্রশ্ন রেখে পড়েন। তিনি যতটুকু বলেন, পার্থক্য কেবল ওই দ্বিতীয় শব্দে, আর কিছুতে নয়।"
          },
          {
            "en": "The Arabic printed on this site, a-idha and then a-inna, carries the question in both places, which matches al-Baghawi's second group. He sets the two readings side by side and does not prefer either. He also says nothing about a difference of meaning between them, and none of the other notes fetched for this verse discusses the variant at all. So the article draws nothing further from it. What the commentators do discuss is the attitude behind the words, and that is the subject of the next section.",
            "bn": "এই সাইটে ছাপা আরবি পাঠে আছে আইযা, তারপর আইন্না, অর্থাৎ দুই জায়গাতেই প্রশ্ন। বাগাভীর দ্বিতীয় দলের পাঠের সঙ্গে এটাই মেলে। তিনি দুটি পাঠ পাশাপাশি রাখেন, কোনোটাকে অগ্রাধিকার দেন না। দুই পাঠে অর্থের কোনো তফাত হয় কি না, সে বিষয়েও তিনি কিছু বলেন না। এ আয়াতের জন্য আনা অন্য কোনো টীকাও এ পাঠভেদ নিয়ে আলোচনা করে না। তাই এ লেখা এখান থেকে আর কিছু টানে না। তাফসীরকারেরা যা নিয়ে কথা বলেন, তা হলো এ কথার পেছনের মনোভাব। পরের অংশ সেটা নিয়েই।"
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
            "bn": "আয়াতটির উপর কুরতুবীর পুরো টীকা একটিমাত্র বাক্য: হাযা ইসতিবআদুম মিনহুম লিআমরিল বাসি ওয়া তাকযীবুল লাহু। এটা পুনরুত্থানের ব্যাপারটাকে তাদের দূরের জিনিস ভাবা, আর একে মিথ্যা বলা। মুয়াসসারের টীকাও শেষ হয় হুবহু এই বাক্যে। ইসতিবআদ এসেছে দূরত্ব বোঝানো ধাতু থেকে। এখানে এর মানে কোনো কিছুকে এত দূরের ভাবা যে তা কোনোদিন ঘটবে বলেই মনে হয় না। বক্তারা পুনরুত্থানের বিরুদ্ধে যুক্তি সাজায় না। ব্যাপারটাকে দূরে সরিয়ে রাখে, যতক্ষণ না সেটা অসম্ভব দেখায়।"
          },
          {
            "en": "The pairing recurs across the notes. Ibn Kathir has mukadhdhibina and mustab'idina, denying and deeming far-off. As-Sa'di writes kanu yunkiruna l-ba'th, fa-yaquluna stib'adan li-wuqu'ih: they used to deny the raising, and so they would say this as deeming its occurrence far-off. At-Tabari has kufr and inkar, disbelief and denial. None of the notes fetched here reads the question as a sincere inquiry. Nor does any of them attach an occasion of revelation to the verse or name a particular speaker in history.",
            "bn": "টীকাগুলোতে এই জোড়া বারবার ফিরে আসে। ইবন কাসীরে আছে মুকাযযিবীনা আর মুসতাবইদীনা, মিথ্যা বলা আর দূরের ভাবা। সা'দী লেখেন কানূ ইউনকিরূনাল বাস, ফাইয়াকূলূনাসতিবআদান লিউকূইহ: তারা পুনরুত্থান অস্বীকার করত, তাই একে ঘটার পক্ষে দূরের ভেবে এ কথা বলত। তাবারীতে আছে কুফর আর ইনকার, অবিশ্বাস আর অস্বীকার। এখানে আনা কোনো টীকাই প্রশ্নটাকে সত্যিকারের জিজ্ঞাসা হিসেবে পড়ে না। কোনোটি আয়াতের সঙ্গে শানে নুযূলও জোড়ে না, ইতিহাসের নির্দিষ্ট কোনো বক্তার নামও নেয় না।"
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
            "en": "As-Sa'di restates the question with a different opening word: kayfa nub'athu ba'da mawtina wa-qad balina, fa-kunna turaban wa-'izaman? How shall we be raised after our death, when we have decayed and become dust and bones? His paraphrase turns their whether into a how, the question of someone who cannot picture the thing at all. In the text as fetched, a bracketed phrase follows: hadha mina l-muhal, this is among the impossible. The brackets stand in the printed text, and it does not say who added them, so the phrase is reported here exactly as it stands.",
            "bn": "সা'দী প্রশ্নটা নতুন করে বলেন ভিন্ন একটি শব্দ দিয়ে শুরু করে: কাইফা নুবআসু বাদা মাওতিনা ওয়া কাদ বালীনা, ফাকুন্না তুরাবাও ওয়া ইযামা? মৃত্যুর পর আমরা যখন পচে-গলে মাটি আর হাড় হয়ে গেছি, তখন কীভাবে আমাদের ওঠানো হবে? তাঁর ব্যাখ্যায় তাদের 'হবে কি না' হয়ে যায় 'কীভাবে'। এ প্রশ্ন এমন মানুষের, যে জিনিসটা কল্পনাই করতে পারে না। যে পাঠ আনা হয়েছে, তাতে এরপর বন্ধনীর ভেতর একটি বাক্যাংশ: হাযা মিনাল মুহাল, এটা অসম্ভব ব্যাপারগুলোর একটি। বন্ধনী ছাপা পাঠেই আছে, কে যোগ করেছেন তা বলা নেই। তাই কথাটা এখানে হুবহু যেমন আছে তেমনই রাখা হলো।"
          },
          {
            "en": "As-Sa'di also quotes 56:47 together with 56:48 and then repeats the closing words: a-inna la-mab'uthun, a-wa-aba'una l-awwalun, shall we indeed be raised, and our forefathers of old too? Ibn Kathir's English abridgement likewise quotes the two verses as one sentence. The forefathers belong to 56:48, and the study of that verse belongs there. For this verse it is enough to see that both commentators hear one continuous speech, and that the doubt reaches back beyond the speakers to the generations before them.",
            "bn": "সা'দী ৫৬:৪৭ আয়াতকে ৫৬:৪৮ আয়াতের সঙ্গে মিলিয়ে উদ্ধৃত করেন, তারপর শেষ কথাগুলো আবার বলেন: আইন্না লামাবঊসূন, আওয়া আবাউনাল আওয়ালূন? সত্যিই কি আমাদের ওঠানো হবে, আর আমাদের আগের বাপদাদাদেরও? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীরও দুটি আয়াতকে এক বাক্য হিসেবে উদ্ধৃত করে। বাপদাদাদের কথা ৫৬:৪৮ আয়াতের, তার আলোচনাও সেখানেই। এ আয়াতের জন্য এটুকু দেখাই যথেষ্ট যে দুজন তাফসীরকারই একে একটানা এক বক্তব্য হিসেবে শোনেন। আর সন্দেহটা বক্তাদের ছাড়িয়ে পৌঁছে যায় তাদের আগের প্রজন্ম পর্যন্ত।"
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
            "bn": "সূরা প্রশ্নটাকে ঝুলিয়ে রাখে না। ৫৬:৪৯ ও ৫৬:৫০ আয়াতে আসে আদেশ: বলুন, আগের ও পরের সবাইকে অবশ্যই একত্র করা হবে এক নির্দিষ্ট দিনের নির্ধারিত সময়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এর ব্যাখ্যায় বলে, নবী ﷺ-কে বলতে বলা হচ্ছে যে আদম সন্তানদের আগের ও পরের সব প্রজন্মকে কিয়ামতের দিন একত্র করা হবে, একজনও বাদ পড়বে না। তিনি যোগ করেন, সে সময় একেবারে নির্ধারিত। তা দেরিতেও আসবে না, আগেও না।"
          },
          {
            "en": "Those verses have their own study, and here they serve only as the frame. The order is what matters for this verse: the doubters add their forefathers of old to the question, and the reply begins with the former and the later together. Further on, from 56:57 to 56:62, the surah sets out an argument from the first creation, which the article on 56:60 treats as a single argument running across six verses. That argument belongs to those verses and is not drawn into this one.",
            "bn": "ওই আয়াতগুলোর নিজস্ব আলোচনা আছে, এখানে সেগুলো কেবল কাঠামো হিসেবে আসে। এ আয়াতের জন্য জরুরি হলো ক্রমটা। সন্দেহকারীরা প্রশ্নের সঙ্গে তাদের পূর্বপুরুষদেরও জুড়ে দেয়, আর জবাব শুরুই হয় আগের ও পরের সবাইকে একসঙ্গে ধরে। আরও সামনে, ৫৬:৫৭ থেকে ৫৬:৬২ আয়াতে, সূরা প্রথম সৃষ্টি থেকে একটি যুক্তি দাঁড় করায়। ৫৬:৬০ আয়াতের লেখায় সেটাকে ছয়টি আয়াত জুড়ে চলা একটিই যুক্তি হিসেবে দেখা হয়েছে। সে যুক্তি ওই আয়াতগুলোর, এখানে টানা হচ্ছে না।"
          },
          {
            "en": "Two absences should be stated. Ma'arif al-Qur'an's note for the group from 56:39 to 56:48 speaks only to the earlier and later companies of 56:39 and 56:40, and says nothing about this verse, so nothing from it is used here. The hadith it cites in that note concerns a group of the Ummah remaining on the truth, which is not attached to 56:47. No note fetched for this verse attaches a hadith to it, so none is quoted. The verse is read here through its words and its commentators alone.",
            "bn": "দুটি অনুপস্থিতির কথা বলে রাখা দরকার। মাআরিফুল কুরআন ৫৬:৩৯ থেকে ৫৬:৪৮ আয়াতের দলের জন্য যে টীকা দেয়, তা কেবল ৫৬:৩৯ ও ৫৬:৪০ আয়াতের আগের ও পরের দল নিয়ে। এ আয়াত নিয়ে তাতে কিছু নেই, তাই সেখান থেকে কিছু নেওয়া হয়নি। ওই টীকায় যে হাদীস আছে, তা উম্মাহর একটি দলের সত্যের উপর টিকে থাকা নিয়ে, ৫৬:৪৭ আয়াতের সঙ্গে তার যোগ নেই। এ আয়াতের জন্য আনা কোনো টীকা এর সঙ্গে কোনো হাদীস জোড়ে না, তাই কোনো হাদীস উদ্ধৃত হয়নি। আয়াতটি এখানে পড়া হলো কেবল এর শব্দ আর তাফসীরকারদের মাধ্যমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Words, No One Else's",
          "bn": "তাদের কথা, অন্য কারও নয়"
        },
        "p": [
          {
            "en": "Because the verse quotes a condemned group, one thing must be said plainly. The verse describes what the text describes: the companions of the left, quoted in their denial, whose end the surrounding verses set out. It licenses nothing against any living person or community. It names no nation, sect, family or party, and no reader has warrant to point at anyone alive today and call them these deniers. The commentators fetched here speak of the companions of the left and the Fire, and none applies the quotation to a group in this world.",
            "bn": "আয়াতটি যেহেতু শাস্তিপ্রাপ্ত এক দলের কথা উদ্ধৃত করে, একটা কথা সোজাসুজি বলা দরকার। আয়াত বর্ণনা করে কেবল তা-ই, যা আয়াতে আছে: বাম দিকের দল, তাদের অস্বীকারের কথাসহ, যাদের পরিণতি আশপাশের আয়াতগুলো খুলে বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। এতে কোনো জাতি, মাযহাব, পরিবার বা দলের নাম নেই। আজ বেঁচে থাকা কারও দিকে আঙুল তুলে তাকে এই অস্বীকারকারীদের একজন বলার অধিকার কোনো পাঠকের নেই। এখানে আনা তাফসীরকারেরা কথা বলেন বাম দিকের দল আর জাহান্নাম নিয়ে। তাঁদের কেউ এ উদ্ধৃতি দুনিয়ার কোনো দলের উপর চাপাননি।"
          },
          {
            "en": "The surah itself models a different response. When the question is voiced, the reply in 56:49 is a command to say something, and further on comes an argument. Someone who hears a doubt about the return today, from a friend, a student or their own heart, is not looking at the companions of the left. The verse asks the reader to recognise the habit of pushing the raising far away, and to watch for it in themselves first, not to sort the people around them into the saved and the lost.",
            "bn": "সূরা নিজেই অন্য রকম আচরণের নমুনা দেখায়। প্রশ্নটা ওঠার পর ৫৬:৪৯ আয়াতে জবাব আসে কিছু বলার আদেশ হিসেবে, আর আরও সামনে আসে যুক্তি। আজ কেউ বন্ধু, ছাত্র বা নিজের মনের কাছ থেকে আখিরাত নিয়ে সন্দেহের কথা শুনলে, সে বাম দিকের দলের দিকে তাকিয়ে নেই। আয়াত পাঠককে বলে পুনরুত্থানকে দূরে ঠেলে দেওয়ার অভ্যাসটা চিনতে, আর সবার আগে নিজের ভেতরে সেটা খুঁজতে। চারপাশের মানুষকে নাজাতপ্রাপ্ত আর হতভাগা, এ দুই ভাগে সাজানো তার কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Return Feels Remote",
          "bn": "ফেরার দিন যখন দূরে মনে হয়"
        },
        "p": [
          {
            "en": "The word the commentators share, istib'ad, names something a person can do without ever speaking the words of this verse. A believer would not say that the raising is impossible. Yet the same distancing can live in a schedule that has no room for preparing, in a comfort that makes the meeting with Allah feel like someone else's concern, in the thought that there is always time later. The verse's frame shows how the three belong together: luxury, persistence in wrong, and a return kept far away.",
            "bn": "তাফসীরকারদের সবার ব্যবহার করা শব্দ ইসতিবআদ এমন একটা জিনিসের নাম, যা এ আয়াতের কথাগুলো মুখে না এনেও করা যায়। একজন মুমিন বলবে না যে পুনরুত্থান অসম্ভব। তবু দূরে সরিয়ে রাখার সেই একই ভাব থেকে যেতে পারে এমন দিনলিপিতে, যেখানে প্রস্তুতির কোনো জায়গা নেই। থাকতে পারে এমন আরামে, যা আল্লাহর সঙ্গে সাক্ষাৎকে অন্য কারও চিন্তা বানিয়ে দেয়। কিংবা এই ভাবনায় যে পরে তো সময় আছেই। আয়াতের আশপাশ দেখায় তিনটি কীভাবে একসঙ্গে চলে: ভোগবিলাস, অন্যায়ে অটল থাকা, আর ফেরার দিনকে দূরে রাখা।"
          },
          {
            "en": "At-Tabari's paraphrase ended on the words ahya'an kama kunna, alive as we were. That is the claim the speakers could not accept, and it is the claim the reader is invited to take seriously: to be raised whole, as yourself, and to answer for what you did. The surah asked about the companions of the left in 56:41 while there is still time to answer with deeds. Their own words in 56:47 show the habit that led them there. The fitting response is to bring that day near, in practice as well as in belief.",
            "bn": "তাবারীর ব্যাখ্যা শেষ হয়েছিল আহইয়াআন কামা কুন্না কথাটায়, আগের মতোই জীবিত। বক্তারা ঠিক এই কথাটাই মেনে নিতে পারেনি। পাঠককে আহ্বান জানানো হয় এটাকেই গুরুত্ব দিতে: পুরোপুরি নিজের মতো করেই আবার ওঠানো হবে, আর নিজের কাজের হিসাব দিতে হবে। ৫৬:৪১ আয়াতে সূরা বাম দিকের দল নিয়ে প্রশ্ন তুলেছিল, এখনো আমল দিয়ে জবাব দেওয়ার সময় আছে। ৫৬:৪৭ আয়াতে তাদের নিজেদের কথা দেখায় কোন অভ্যাস তাদের সেখানে নিয়ে গেছে। সঠিক জবাব হলো সেই দিনটাকে কাছে টেনে আনা, বিশ্বাসে যেমন, তেমনি রোজকার আমলে।"
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
            "bn": "লাআকিলূনা মিন শাজারিম মিন জাক্কূম: তোমরা অবশ্যই জাক্কুম গাছ থেকে খাবে। আয়াতে পাঁচটি শব্দ, অথচ এর নিজস্ব কোনো কর্তা নেই। কর্তা আছে ৫৬:৫১ আয়াতে: সুম্মা ইন্নাকুম আইয়ুহাদ দাল্লূনাল মুকাযযিবূন, তারপর হে পথভ্রষ্ট অস্বীকারকারীরা, তোমরা। দুটি আয়াত মিলে একটিই বাক্য। ৫৬:৫১-এ ইন্না আর তার পরের সম্বোধিত লোকদের দিয়ে বাক্য শুরু হয়, আর তাদের সম্পর্কে আসল কথাটা আসে এখানে এসে। শ্রোতাকে তাই পুরো একটি আয়াত অপেক্ষা করতে হয়। তাবারী ৫৬:৫১-এর ব্যাখ্যা শেষ করেন ৫৬:৫২-এর শব্দগুলো জুড়ে দিয়ে।"
          },
          {
            "en": "The word that carries the news is akiluna, eaters, a participle rather than a verb in the future tense. The English translation on this site renders it as will be eating, which is the sense, but the Arabic names the people by what they will be doing, as if the state were already theirs. Ibn Kathir's note on these verses gives the same picture in plain terms: they will be seized and made to eat from the zaqqum tree until their stomachs become full. The single letter in front of the participle is the next thing to look at.",
            "bn": "খবরটা বহন করছে আকিলূন শব্দটি, যার মানে খাদকেরা। শব্দটি ভবিষ্যৎ কালের ক্রিয়া নয়, কর্তাবাচক বিশেষ্য। এ সাইটের ইংরেজি অনুবাদ এটাকে লিখেছে will be eating, অর্থের দিক থেকে যা ঠিক। কিন্তু আরবি এখানে মানুষগুলোকে চিনিয়ে দেয় তাদের কাজ দিয়েই, যেন অবস্থাটা আগে থেকেই তাদের গায়ে লেগে আছে। ইবন কাসীর এই আয়াতগুলোর আলোচনায় ছবিটা সোজা কথায় বলেন: তাদের ধরে আনা হবে, আর জাক্কুম গাছ থেকে খেতে বাধ্য করা হবে, যতক্ষণ না পেট ভরে যায়। শব্দটির সামনে বসা ছোট্ট একটি হরফ এবার দেখার পালা।"
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
            "bn": "হরফটি লাআকিলূন শব্দের লাম, যা ইন্না দিয়ে শুরু হওয়া বাক্যে আরও জোর যোগ করে। এ অংশে এই জোড়া আগেও দুবার এসেছে। ৫৬:৪৭ আয়াতে অস্বীকারকারীরা জিজ্ঞেস করে, আইন্না লামাবঊসূন, আমাদের কি সত্যিই ওঠানো হবে? অবিশ্বাস প্রকাশ করতে তারা ইন্না আর লাম দুটোই ব্যবহার করেছিল। ৫৬:৪৯ ও ৫৬:৫০ আয়াতে জবাবও একই গড়নে: ইন্নাল আউয়ালীনা ওয়াল আখিরীনা লামাজমূঊন, পূর্ববর্তী আর পরবর্তী সবাইকে অবশ্যই একত্র করা হবে। এবার তৃতীয়টি: ইন্নাকুম লাআকিলূন, তোমরা অবশ্যই খাবে।"
          },
          {
            "en": "The three words that receive the lam are all plural participles. Mab'uthun and majmu'un, raised and gathered, name what will be done to people; akilun, eaters, names what they will do. The question took a form of certainty and put it to doubt. The reply keeps that form and removes the doubt, first for everyone, then for those who asked. None of the commentaries fetched for this verse remarks on the lam or on this echo, so it is offered here as a reading of the passage's own wording, which anyone can check against the Arabic, and not as any mufassir's view.",
            "bn": "লাম যে তিনটি শব্দের সামনে বসেছে, তিনটিই বহুবচনের বিশেষ্য-রূপ। মাবঊসূন আর মাজমূঊন বলে মানুষের সঙ্গে কী করা হবে: ওঠানো হবে, একত্র করা হবে। আকিলূন বলে তারা নিজেরা কী করবে: খাবে। প্রশ্নকারীরা নিশ্চয়তার একটা গড়ন নিয়ে তাতে সন্দেহ ঢেলেছিল। জবাব গড়নটা রেখে সন্দেহটা সরিয়ে দিল, প্রথমে সবার বেলায়, তারপর প্রশ্নকারীদের বেলায়। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, তার কোনোটিই লাম বা এই প্রতিধ্বনি নিয়ে কিছু বলেনি। তাই কথাটা এখানে রাখা হলো আয়াতগুলোর নিজের শব্দ থেকে করা পাঠ হিসেবে, যা আরবির সঙ্গে মিলিয়ে যে কেউ যাচাই করতে পারেন। কোনো মুফাসসিরের মত হিসেবে নয়।"
          },
          {
            "en": "The study of 56:47 looked at how the question pushed the raising far away. Here the point is only that its own grammar is handed back. A doubter who said shall we indeed be raised hears, in the reply, indeed you will. The thumma at the head of 56:51 marks a step forward after the gathering of 56:50: first all are brought together, then the people addressed are told what follows for them. The gathering and the eating are not two separate threats; they are two stages of one answer.",
            "bn": "৫৬:৪৭-এর আলোচনায় দেখা হয়েছিল প্রশ্নটা কীভাবে পুনরুত্থানকে দূরে ঠেলে দিত। এখানে কথা শুধু এটুকু যে, প্রশ্নের নিজের ব্যাকরণই তাদের হাতে ফিরিয়ে দেওয়া হয়েছে। যে সন্দেহ নিয়ে বলেছিল, আমাদের কি সত্যিই ওঠানো হবে, সে জবাবে শোনে, তোমরা অবশ্যই। ৫৬:৫১-এর শুরুর সুম্মা শব্দটি ৫৬:৫০-এর একত্র হওয়ার পরের ধাপ বোঝায়। আগে সবাইকে জড়ো করা হবে, তারপর সম্বোধিত লোকদের জানানো হবে তাদের জন্য কী অপেক্ষা করছে। একত্র হওয়া আর খাওয়া আলাদা দুটি হুমকি নয়, একই জবাবের দুটি ধাপ।"
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
            "bn": "ইন্নাকুম, অর্থাৎ তোমরা বলতে কারা? তাবারী সরাসরি বলেন: আল্লাহ কথা বলছেন আসহাবুশ শিমাল, বাম দিকের দলের সঙ্গে। ৫৬:৪১ থেকে সূরা এদের কথাই বলে আসছে। দুটি উপাধির ব্যাখ্যা তিনি দেন এভাবে: আদ দাল্লূনা আন তারীকিল হুদা, হিদায়াতের পথ থেকে যারা সরে গেছে; আর আল মুকাযযিবূনা বি ওয়াঈদিল্লাহি ওয়া ওয়া'দিহ, যারা আল্লাহর সতর্কবাণী ও তাঁর প্রতিশ্রুতিকে মিথ্যা বলে। মুয়াসসার প্রায় হুবহু একই শব্দ ব্যবহার করে। ইবন কাসীর ৫৬:৪৯-এর 'বলো' আদেশটি বোঝেন মুহাম্মাদ ﷺ-এর প্রতি সম্বোধন হিসেবে। তাই প্রথম শ্রোতাদের কাছে কথাগুলো পৌঁছেছিল জবাব হিসেবে, যা তাঁকে দিতে বলা হয়েছিল।"
          },
          {
            "en": "The other notes name what was denied in different terms. Al-Qurtubi has al-mukadhdhibun bi-l-ba'th, those who deny the resurrection, which ties the verse to the question of 56:47. As-Sa'di writes that they deny the Messenger ﷺ and the truth, the promise and the threat he brought, and he adds a phrase to the first title: astray from the road of guidance, al-tabi'un li-tariq al-rada, following the road of ruin. The order of the two titles is worth noticing. Straying is named before denying, as if the denial were where the drift ended.",
            "bn": "কী অস্বীকার করা হয়েছিল, অন্য তাফসীরগুলো তা ভিন্ন ভাষায় বলে। কুরতুবী লেখেন আল মুকাযযিবূনা বিল বা'স, যারা পুনরুত্থানকে মিথ্যা বলে। এতে আয়াতটি ৫৬:৪৭-এর প্রশ্নের সঙ্গে জুড়ে যায়। সা'দী বলেন, তারা রাসূল ﷺ-কে এবং তিনি যে সত্য, প্রতিশ্রুতি ও সতর্কবাণী এনেছিলেন তা অস্বীকার করে। প্রথম উপাধির সঙ্গে তিনি একটা কথা যোগ করেন: হিদায়াতের পথ থেকে সরে যাওয়া, আত তাবিঊনা লি তারীকির রাদা, ধ্বংসের পথের অনুসারী। দুটি উপাধির ক্রমটাও লক্ষ করার মতো। পথ হারানোর কথা আগে, অস্বীকারের কথা পরে, যেন ধীরে ধীরে সরে যাওয়ার শেষ ঠিকানা অস্বীকার।"
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
            "bn": "মিন শাজারিম মিন জাক্কূম, এই অংশে একই ছোট্ট শব্দ দুবার এসেছে, আর দুটির কাজ আলাদা। প্রথম মিন খাওয়াকে তার উৎসের সঙ্গে বাঁধে: তারা খাবে গাছ থেকে। শাজার শব্দটি বোঝাতে গিয়ে তাবারী রোজকার কথা থেকে একটা তুলনা দেন: আখাযতু মিনাশ শা', আমি ভেড়ার পাল থেকে নিলাম। বক্তা একটা পশু বোঝাতে পারে, একাধিকও বোঝাতে পারে, দুটোই চলে। তাঁর উদাহরণে প্রথম মিন সেই কাজই করছে, যা সাধারণ আরবিতে করে। বড় কোনো ভাণ্ডার থেকে নেওয়া বোঝায়, কতটা নেওয়া হলো তা বেঁধে দেয় না।"
          },
          {
            "en": "The second min answers a different question: trees of what kind? Al-Jalalayn answers briefly: min zaqqum is the explication of shajar, that is, it names which trees are meant. The trees are not left vague; they are identified at once. This is the only grammatical comment on the phrase among the sources fetched for this verse. Al-Baghawi's entry on 56:52 repeats the verse and adds nothing, and the Tanwir al-Miqbas, the commentary carried under Ibn Abbas's name, renders the phrase as a tree called Zaqqum.",
            "bn": "দ্বিতীয় মিন অন্য প্রশ্নের উত্তর দেয়: কোন গাছ? জালালাইন অল্প কথায় বলে দেন, মিন জাক্কূম হলো শাজার শব্দের ব্যাখ্যা, মানে কোন গাছ বোঝানো হচ্ছে তা চিনিয়ে দেয়। গাছগুলোকে অস্পষ্ট রাখা হয়নি, সঙ্গে সঙ্গে নাম বলে দেওয়া হয়েছে। এ আয়াতের জন্য আনা উৎসগুলোর মধ্যে বাক্যাংশটির ব্যাকরণ নিয়ে এটুকুই একমাত্র মন্তব্য। বাগাভী ৫৬:৫২-এর জায়গায় শুধু আয়াতটি উদ্ধৃত করেন, আর কিছু যোগ করেন না। ইবন আব্বাসের নামে প্রচলিত তাফসীর তানবীরুল মিকবাস বাক্যাংশটির অর্থ করে: জাক্কুম নামের একটি গাছ।"
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
            "bn": "তাবারী শব্দে একটা ভিন্নতার কথা উল্লেখ করেন। আবদুল্লাহ (রাঃ)-এর কিরাআতে, তাবারী তাঁকে এই নামেই উল্লেখ করেন, বাক্যাংশটি লাআকিলূনা মিন শাজারাতিম মিন জাক্কূম। সমষ্টিবাচক শাজারের জায়গায় সেখানে একবচন শাজারা, একটি গাছ। তাবারী একে অর্থের পরিবর্তন মনে করেন না। তাঁর ভাষায়, শাজার আর শাজারার অর্থ এক। কারণ হিসেবে তিনি ভেড়ার পালের সেই তুলনাটাই দেন: একটি গাছ বোঝানো হোক বা একাধিক, শব্দে দুটোরই অবকাশ আছে। এ সাইটে ছাপা পাঠ শাজারিন। আবদুল্লাহ (রাঃ)-এর পাঠ এখানে পাশে রাখা হলো শুধু তাবারীর বর্ণনা অনুযায়ী।"
          },
          {
            "en": "The same question of number comes back a verse later, and at-Tabari takes it up in his entry on 56:51. The pronoun in fa-mali'una minha l-butun, filling the bellies from it, is feminine, while the one in fa-sharibuna 'alayhi, drinking on top of it, is masculine. He reports that the grammarians differed over this. The view he sets out first is that shajar is used as both genders, and the feminine comes from taking it as shajara, since that word can point to a whole kind. Arabs say a bitter tree grew near us, meaning many.",
            "bn": "সংখ্যার প্রশ্নটা এক আয়াত পরেই আবার ফিরে আসে, আর তাবারী ৫৬:৫১-এর আলোচনায় তা তোলেন। ফামালিঊনা মিনহাল বুতূন, তা দিয়ে পেট ভরবে, এখানে মিনহা সর্বনামটি স্ত্রীলিঙ্গ। অথচ ফাশারিবূনা আলাইহি, তার উপর পান করবে, এখানে সর্বনাম পুংলিঙ্গ। তিনি জানান, ভাষাবিদেরা এ নিয়ে ভিন্নমত পোষণ করেছেন। প্রথমে তিনি যে মত আনেন তা হলো, শাজার শব্দ দুই লিঙ্গেই চলে। আর স্ত্রীলিঙ্গ এসেছে একে শাজারা ধরে নেওয়ায়, কারণ ওই শব্দও গোটা একটা জাতকে বোঝাতে পারে। যেমন আরবরা বলে, আমাদের কাছে একটা তেতো গাছ গজিয়েছে, অথচ বোঝায় অনেকগুলো।"
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
            "bn": "এ আয়াতের তাফসীরগুলো গাছটি সম্পর্কে অল্পই বলে, আর যখন বলে, তখন অন্য জায়গার দিকে ইশারা করে। কুরতুবী দুটি কথা বলেন: কারীহুল মানযার, কারীহুত তা'ম, দেখতে জঘন্য, খেতে জঘন্য। তারপর যোগ করেন, এটি সেই গাছ যার উল্লেখ আছে সূরা আস সাফফাতে। সা'দী একে বলেন সবচেয়ে কুৎসিত আর সবচেয়ে দুর্গন্ধময় গাছ। মুয়াসসারের ভাষায়, সবচেয়ে কুৎসিত গাছগুলোর একটি। মাওদূদী শুধু পাঠককে সূরা আস সাফফাতে তাঁর টীকার দিকে পাঠিয়ে দেন। সূরা এখানে গাছটির নাম বলে, বিস্তারিত বিবরণ রেখে দেয় সেই অংশগুলোর জন্য, যেখানে তা লম্বা করে আলোচিত।"
          },
          {
            "en": "This site has studied those passages. The article on 37:63 follows the tree in al-Saffat, where it is made a trial for the wrongdoers, and the article on 44:43 takes up where it grows and whose food it is. That second article also quotes the narration about a single drop of zaqqum falling into this world, with its collector's grading. None of the commentaries fetched for 56:52 attaches a hadith to this verse, so no narration is quoted here, and the reader is pointed to 44:43 for that narration.",
            "bn": "এ সাইটে সেই অংশগুলোর আলোচনা আগেই হয়েছে। ৩৭:৬৩-এর প্রবন্ধে গাছটিকে দেখা হয়েছে সূরা আস সাফফাতে, যেখানে একে জালিমদের জন্য পরীক্ষা বানানো হয়েছে। ৪৪:৪৩-এর প্রবন্ধে আলোচনা হয়েছে গাছটি কোথায় জন্মায় আর কাদের খাবার। দুনিয়ায় জাক্কুমের এক ফোঁটা পড়ার বর্ণনাটিও সেখানে উদ্ধৃত হয়েছে, সংকলকের দেওয়া মানসহ। ৫৬:৫২-এর জন্য আনা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো বর্ণনা উদ্ধৃত হলো না, সেটির জন্য পাঠককে ৪৪:৪৩ দেখতে বলা হচ্ছে।"
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
            "bn": "যে গাছকে তাফসীরকারেরা খেতে জঘন্য বলেন, তা থেকে কেউ খাবে কেন? মুয়াসসার ৫৬:৫২ থেকে ৫৬:৫৫ পর্যন্ত আয়াতগুলোর ব্যাখ্যা দেয় একসঙ্গে, আর পরের আয়াতে পেট ভরানোর সঙ্গে একটা কারণ জুড়ে দেয়: লিশিদ্দাতিল জূ', ক্ষুধার তীব্রতার কারণে। এই ব্যাখ্যা অনুযায়ী খাওয়াটা রুচির পছন্দ নয়। এক দিকে কুরতুবীর কারীহুত তা'ম আর সা'দীর সবচেয়ে দুর্গন্ধময় গাছ, অন্য দিকে ক্ষুধা, আর জিতে যায় ক্ষুধাই। আয়াত নিজে শুধু খাওয়ার কথা বলে। কারণটা এসেছে তাফসীর থেকে, আয়াতের শব্দে তা বলা নেই।"
          },
          {
            "en": "The verses that follow carry the scene forward, and they are left to their own study: bellies filled, scalding water drunk on top, drinking like thirsty camels, and then 56:56, hadha nuzuluhum yawm al-din, this is their hospitality on the Day of Recompense. Ibn Kathir sets that last word beside 18:107, where the Gardens of Firdaws are the nuzul of those who believe and do good. Read back from 56:56, the trees of zaqqum open a welcome that is no welcome at all. That is as far as this article goes into the neighbouring verses.",
            "bn": "পরের আয়াতগুলো দৃশ্যটাকে সামনে নিয়ে যায়, আর সেগুলোর আলোচনা তাদের নিজেদের জায়গার জন্য রাখা হলো: পেট ভরানো, তার উপর ফুটন্ত পানি পান, পিপাসার্ত উটের মতো পান করা, তারপর ৫৬:৫৬, হাযা নুযুলুহুম ইয়াওমাদ দীন, প্রতিফল দিবসে এই তাদের আপ্যায়ন। ইবন কাসীর এই শেষ শব্দটিকে রাখেন ১৮:১০৭ আয়াতের পাশে, যেখানে ফিরদাউসের বাগান হলো ঈমান এনে সৎকাজ করা লোকদের নুযুল। ৫৬:৫৬ থেকে পেছন ফিরে পড়লে জাক্কুম গাছ এমন এক আপ্যায়নের শুরু, যা আসলে কোনো আপ্যায়নই নয়। প্রতিবেশী আয়াতগুলো নিয়ে এ প্রবন্ধ এর বেশি এগোবে না।"
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
            "en": "The address in 56:51 is to the astray, the deniers, and at-Tabari places it among the companions of the left. The verse describes what the text describes: the end of a group marked by its straying and its denial, told in the Qur'an's own words. It licenses nothing against any living person or community. It does not tell a reader who belongs among the astray, and it gives nobody the right to say of a neighbour, a relative or a people that zaqqum is waiting for them.",
            "bn": "৫৬:৫১ আয়াতের সম্বোধন পথভ্রষ্ট অস্বীকারকারীদের প্রতি, আর তাবারী তাদের গণ্য করেন বাম দিকের দলের মধ্যে। আয়াতটি সেটুকুই বর্ণনা করে, যা পাঠে আছে: পথ হারানো আর অস্বীকারে চিহ্নিত একটি দলের পরিণতি, কুরআনের নিজের ভাষায়। এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। কে পথভ্রষ্টদের মধ্যে পড়ে, আয়াত পাঠককে তা বলে দেয় না। প্রতিবেশী, আত্মীয় বা কোনো জাতির ব্যাপারে জাক্কুম তাদের অপেক্ষায় আছে, এ কথা বলার অধিকারও আয়াত কাউকে দেয় না।"
          },
          {
            "en": "What the verse does show is how a person comes to be addressed this way. At-Tabari's gloss, denying Allah's threat and His promise, and as-Sa'di's, following the road of ruin, both describe a course that is taken, not a mark someone is born with. The reader's share in the verse is to ask whether any part of that road runs through his own days, and to leave the naming of others to Allah, who alone knows how each life ends and where each heart stands.",
            "bn": "আয়াত যা দেখায় তা হলো, একজন মানুষ কীভাবে এমন সম্বোধনের পাত্র হয়ে ওঠে। তাবারীর ব্যাখ্যায় তারা আল্লাহর সতর্কবাণী ও প্রতিশ্রুতিকে মিথ্যা বলে, আর সা'দীর ব্যাখ্যায় তারা ধ্বংসের পথের অনুসারী। দুটি ব্যাখ্যাই বলে বেছে নেওয়া এক পথের কথা, জন্মগত কোনো দাগের কথা নয়। আয়াতে পাঠকের ভাগ হলো নিজেকে জিজ্ঞেস করা, সেই পথের কোনো অংশ তার নিজের দিনগুলোর ভেতর দিয়ে গেছে কি না। আর অন্যদের নাম ঠিক করার কাজটা ছেড়ে দেওয়া আল্লাহর হাতে, যিনি একাই জানেন কার জীবন কীভাবে শেষ হবে আর কার অন্তর কোথায় দাঁড়িয়ে।"
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
            "bn": "বিধেয় শব্দটি কর্তাবাচক বিশেষ্য, জোর দেওয়া হয়েছে দ্বিগুণ, আর গাছগুলোর নামও বলে দেওয়া হয়েছে সঙ্গে সঙ্গে। শব্দের প্রতিটি অংশ পরিণতি নিয়ে সন্দেহের দরজা বন্ধ করে দেয়। তবু বাক্যটি বলা হচ্ছে এখনই, সূরার তিলাওয়াতে, যে দিনের বর্ণনা দিচ্ছে তা আসার আগে। মুয়াসসার আর তাবারী দুজনেই বলেন, সম্বোধিত লোকেরা আল ওয়াঈদ, আল্লাহর সতর্কবাণীকে মিথ্যা বলেছিল। যে শাস্তির কথা আসার আগেই জানানো হয়, তা একটা সাবধানবাণীও। আর সাবধানবাণীর অর্থ আছে কেবল তার কাছে, যার হাতে এখনো কাজ করার সময় আছে।"
          },
          {
            "en": "So the verse has two kinds of hearers. For the deniers it describes, it completes a sentence they began with their own question about being raised. For anyone reciting it today, it is a sentence still being read, with the Day not yet come. Reading it well means letting the certainty of its wording sharpen the reader's own care, not using that certainty to measure the distance between oneself and others. A meal named this far in advance can be heard as a call never to come near that table.",
            "bn": "তাই আয়াতের শ্রোতা দুই ধরনের। যে অস্বীকারকারীদের কথা আয়াত বলে, তাদের জন্য এটি সেই বাক্যের সমাপ্তি, যা তারা নিজেরাই শুরু করেছিল পুনরুত্থান নিয়ে প্রশ্ন তুলে। আর আজ যে এটি তিলাওয়াত করে, তার জন্য এটি এখনো পড়া চলছে এমন এক বাক্য, সেই দিন এখনো আসেনি। ভালোভাবে পড়ার মানে হলো, শব্দের নিশ্চয়তা দিয়ে নিজের সাবধানতা ধারালো করা, নিজের আর অন্যদের মধ্যে দূরত্ব মাপা নয়। এত আগে যে খাবারের নাম জানানো হলো, তাকে শোনা যায় সেই দস্তরখানের কাছেও না যাওয়ার ডাক হিসেবে।"
          }
        ]
      }
    ]
  },
  "56:60": {
    "sections": [
      {
        "h": {
          "en": "One Argument, Six Verses",
          "bn": "একটি যুক্তি, ছয় আয়াত"
        },
        "p": [
          {
            "en": "This verse is a step in an argument that begins at 56:57 and closes at 56:62. 56:57 states the thesis: We created you, so why do you not affirm the truth? 56:58 and 56:59 press it on the drop a man emits — is it you who creates it, or are We the Creator? Then death enters, and 56:62 closes: you have known the first creation, so will you not remember?",
            "bn": "এই আয়াতটি এমন এক যুক্তির ধাপ, যা শুরু হয় 56:57-এ আর শেষ হয় 56:62-এ। 56:57 মূল কথাটি রাখে: আমিই তোমাদের সৃষ্টি করেছি, তবে তোমরা সত্য মেনে নাও না কেন? 56:58 ও 56:59 সেটিকে চেপে ধরে মানুষের নির্গত শুক্রবিন্দুর প্রসঙ্গে — তোমরা কি তা সৃষ্টি কর, নাকি আমিই স্রষ্টা? এরপর আসে মৃত্যুর কথা, আর 56:62 শেষ করে: তোমরা প্রথম সৃষ্টি সম্পর্কে জেনেছ, তবু কি অনুধাবন করবে না?"
          },
          {
            "en": "56:63 then opens a fresh sign, the crops you sow, so the unit ends at 62. Reading the verse inside that unit changes it. It is not placed here as a meditation on mortality. It is the second exhibit in a case about who controls the beginning and the end of a life, offered to people who accepted the beginning and denied that there could be a second one.",
            "bn": "এরপর 56:63 নতুন একটি নিদর্শন শুরু করে — তোমরা যে ফসল বোনো, সেটির প্রসঙ্গ; তাই অংশটি ৬২ আয়াতেই শেষ। এই অংশের ভেতরে রেখে পড়লে আয়াতটির চেহারা বদলে যায়। এটি এখানে মৃত্যু নিয়ে ভাবনার জন্য বসানো হয়নি। এটি সেই মামলার দ্বিতীয় প্রমাণ, যার বিষয় হলো জীবনের শুরু ও শেষ কার হাতে — আর তা পেশ করা হয়েছে এমন মানুষদের সামনে, যারা শুরুটা মেনে নিয়েও দ্বিতীয় কোনো শুরুর সম্ভাবনা অস্বীকার করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "We Measured It Out",
          "bn": "আমিই তা মেপে দিয়েছি"
        },
        "p": [
          {
            "en": "Nahnu qaddarna baynakumu al-mawt. The pronoun nahnu is placed before the verb, and in Arabic that fronting restricts the act to the one named — the same pronoun that carried the challenge of 56:59, or are We the Creator. The verb is from qadar, to measure out an amount, rather than merely to permit or to schedule. What is claimed is not only that death happens but that its quantity was set.",
            "bn": "নাহনু কাদ্দারনা বাইনাকুমুল-মাউত। সর্বনাম 'নাহনু' বসানো হয়েছে ক্রিয়ার আগে, আর আরবিতে এই অগ্রবর্তন কাজটিকে কেবল উল্লিখিত সত্তার মধ্যেই সীমাবদ্ধ করে — এই একই সর্বনাম 56:59-এর চ্যালেঞ্জটিও বহন করেছিল: নাকি আমিই স্রষ্টা। ক্রিয়াপদটি এসেছে 'কাদার' থেকে, অর্থাৎ পরিমাণ মেপে দেওয়া; কেবল অনুমতি দেওয়া বা সময়সূচি ঠিক করা নয়। দাবিটি কেবল এই নয় যে মৃত্যু ঘটে, বরং এই যে তার পরিমাণ আগেই নির্ধারিত।"
          },
          {
            "en": "Baynakum, among you, is doing quiet work too. The decree is described as distributed across a population rather than fixed as one date for everybody. That is why the deaths around us arrive out of order, the old outliving the young, and why no pattern can be extracted from them. Each portion was measured separately, and the measuring was not published.",
            "bn": "'বাইনাকুম' অর্থাৎ 'তোমাদের মধ্যে' — এই শব্দটিও নীরবে কাজ করছে। ফয়সালাটিকে বর্ণনা করা হয়েছে একটি জনগোষ্ঠীর মধ্যে বণ্টিত হিসেবে, সবার জন্য একটিমাত্র তারিখ হিসেবে নয়। এ কারণেই আমাদের চারপাশের মৃত্যুগুলো ক্রম মেনে আসে না, বৃদ্ধ বেঁচে থাকেন তরুণের চেয়ে বেশি, আর এ কারণেই এর ভেতর থেকে কোনো নিয়ম বের করা যায় না। প্রতিটি ভাগ আলাদাভাবে মাপা হয়েছে, আর সেই মাপ প্রকাশ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Gets in Front",
          "bn": "কেউ আগে যেতে পারে না"
        },
        "p": [
          {
            "en": "Wa ma nahnu bimasbuqin. Masbuq is the passive participle of sabaqa, to get ahead of, to outstrip, to arrive first. So the clause denies that anything can get in front of Him in this matter — not by evading the appointment, not by bringing it forward, not by outrunning it. The image is a race in which one competitor cannot be overtaken.",
            "bn": "ওয়া মা নাহনু বিমাসবূক্বীন। 'মাসবূক' হলো 'সাবাকা' ক্রিয়ার কর্মবাচ্য বিশেষণ, যার অর্থ আগে বেড়ে যাওয়া, ছাড়িয়ে যাওয়া, আগে পৌঁছানো। অর্থাৎ বাক্যটি অস্বীকার করে যে এ বিষয়ে কেউ তাঁর আগে যেতে পারে — নির্ধারিত সময় এড়িয়ে নয়, তা এগিয়ে এনে নয়, তাকে ছাড়িয়ে দৌড়েও নয়। ছবিটি এমন এক দৌড়ের, যেখানে এক প্রতিযোগীকে কোনোভাবেই পেছনে ফেলা যায় না।"
          },
          {
            "en": "It is worth noticing what the clause does not say. It does not say death is unavoidable, which everyone already grants; the deniers in this passage had just insisted that death is the only certainty there is. It says that the One who set it cannot be forestalled. The subject of the sentence is not our helplessness. It is His unhindered reach.",
            "bn": "বাক্যটি যা বলে না, সেটিও লক্ষণীয়। এটি বলে না যে মৃত্যু অনিবার্য — সে কথা তো সবাই মানে; এই অংশের অস্বীকারকারীরা মাত্রই জোর দিয়ে বলেছিল, মৃত্যুই একমাত্র নিশ্চিত ব্যাপার। এটি বলে, যিনি তা নির্ধারণ করেছেন তাঁকে ঠেকানো যায় না। বাক্যটির বিষয়বস্তু আমাদের অসহায়ত্ব নয়; বিষয়বস্তু হলো তাঁর অবাধ নাগাল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence Crosses the Break",
          "bn": "বাক্যটি আয়াতের সীমা পেরোয়"
        },
        "p": [
          {
            "en": "The verse stops, but the sentence does not. 56:61 begins 'ala an nubaddila amthalakum wa nunshi'akum fi ma la ta'lamun, and that opening attaches directly to masbuqin: We cannot be prevented from changing your likenesses and bringing you into being in what you do not know. The claim about death is only the first half of a claim about replacement.",
            "bn": "আয়াতটি থামে, কিন্তু বাক্যটি থামে না। 56:61 শুরু হয় 'আলা আন নুবাদ্দিলা আমছালাকুম ওয়া নুনশিআকুম ফী মা লা তা'লামূন — আর এই সূচনা সরাসরি যুক্ত হয় 'মাসবূক্বীন'-এর সঙ্গে: তোমাদের সদৃশ সত্তাগুলো বদলে দেওয়া আর তোমরা যা জান না এমন রূপে তোমাদের সৃষ্টি করা থেকে আমাকে ঠেকানো যায় না। মৃত্যু সম্পর্কিত দাবিটি আসলে প্রতিস্থাপন সম্পর্কিত একটি দাবির প্রথমার্ধ মাত্র।"
          },
          {
            "en": "The commentators read that continuation in two ways: that one generation is exchanged for others like it, and that the same people are remade in a form they have no experience of. Either way death has become a hinge rather than a wall. The verse the deniers would have quoted against resurrection turns out, when its sentence is allowed to finish, to be an argument for it.",
            "bn": "মুফাসসিরগণ এই ধারাবাহিকতাকে দুভাবে পড়েন: এক প্রজন্মকে তাদেরই মতো অন্যদের দিয়ে বদলে দেওয়া, এবং সেই একই মানুষদেরই এমন এক রূপে নতুন করে গড়া যার কোনো অভিজ্ঞতা তাদের নেই। যেভাবেই পড়া হোক, মৃত্যু তখন দেয়াল নয়, কব্জা হয়ে ওঠে। যে আয়াতটিকে অস্বীকারকারীরা পুনরুত্থানের বিরুদ্ধে উদ্ধৃত করত, বাক্যটিকে শেষ হতে দিলে সেটিই হয়ে দাঁড়ায় পুনরুত্থানের পক্ষে যুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Closed and What Is Open",
          "bn": "যা বন্ধ আর যা খোলা"
        },
        "p": [
          {
            "en": "Two variables are on the table and the verse settles one of them. The length is measured out and cannot be argued with; 35:11 says the same thing from the other side, that no lifespan is extended or shortened except that it is in a register. Effort spent on that variable is spent on a closed account, however sincerely it is spent.",
            "bn": "টেবিলে দুটি চলক আছে, আর আয়াতটি তার একটির নিষ্পত্তি করে দেয়। আয়ু মেপে দেওয়া, তা নিয়ে তর্কের সুযোগ নেই; 35:11 অন্য দিক থেকে একই কথা বলে — কারও আয়ু বাড়ানো বা কমানো হয় না, তা কিতাবে লেখা থাকা ছাড়া। এই চলকের পেছনে ব্যয় করা প্রচেষ্টা যত আন্তরিকই হোক, তা ব্যয় হয় একটি বন্ধ হিসাবে।"
          },
          {
            "en": "The other variable is untouched by the decree. What is carried to the appointment was never fixed in advance, and the same passage that closes the first opens the second by asking whether we will remember. The certainty of the end is presented as clarifying rather than crushing: one question is answered for us so that our attention can go to the one that is not.",
            "bn": "অন্য চলকটিতে এই ফয়সালা হাত দেয়নি। সেই নির্ধারিত সাক্ষাতে কে কী নিয়ে যাবে, তা আগে থেকে ঠিক করা ছিল না; আর যে অংশটি প্রথম চলকটি বন্ধ করে দেয়, সেই অংশই 'তোমরা কি অনুধাবন করবে না' জিজ্ঞেস করে দ্বিতীয়টি খুলে দেয়। সমাপ্তির নিশ্চয়তাকে উপস্থাপন করা হয়েছে ভেঙে দেওয়ার বদলে স্পষ্ট করে দেওয়া কিছু হিসেবে: একটি প্রশ্নের উত্তর আমাদের হয়ে দিয়ে দেওয়া হয়েছে, যাতে মনোযোগ যেতে পারে সেই প্রশ্নটির দিকে যার উত্তর দেওয়া হয়নি।"
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
          "bn": "শপথ যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Innahu la-qur'anun karim: indeed, it is a noble Qur'an. Three Arabic words, and they arrive at the end of a build-up. In 56:75 Allah swears by the places where the stars set, and in 56:76 He says that this is a mighty oath, if only you knew. Ma'arif al-Qur'an sets out the structure plainly: verses 75 and 76 are the oath, and the set of verses beginning here is its subject, the jawab al-qasam, the thing the oath is sworn to establish. This verse is where the whole oath comes to rest.",
            "bn": "ইন্নাহু লা-কুরআনুন কারীম: নিশ্চয়ই এ সম্মানিত কুরআন। আরবিতে মাত্র তিনটি শব্দ, কিন্তু আসে লম্বা এক প্রস্তুতির শেষে। ৫৬:৭৫ আয়াতে আল্লাহ তারকারাজির অস্ত যাওয়ার জায়গাগুলোর শপথ করেন। ৫৬:৭৬ আয়াতে বলেন, তোমরা যদি জানতে, এ এক বড় শপথ। মাআরিফুল কুরআন গঠনটা সোজা করে বুঝিয়ে দেয়। ৭৫ ও ৭৬ নম্বর আয়াত হলো শপথ, আর এখান থেকে শুরু হওয়া আয়াতগুলো তার বিষয়বস্তু, যাকে বলে জাওয়াবুল কাসাম। অর্থাৎ যে কথা প্রতিষ্ঠা করতে শপথটা করা হয়েছে। পুরো শপথ এসে থামে এই আয়াতে।"
          },
          {
            "en": "At-Tabari restates the whole in a single sentence: Allah, exalted be His mention, says, I swear by the positions of the stars that this Qur'an is a noble Qur'an. He adds a note on the first word: the ha in innahu, the it, refers to the Qur'an. Al-Baghawi says the same in his own terms. Innahu, he writes, means this Book, and it is mawdi' al-qasam, the point the oath is aimed at. As-Sa'di names what is sworn to as the affirming of the Qur'an: that it is true, with no doubt in it and no uncertainty touching it.",
            "bn": "তাবারী পুরো কথাটা এক বাক্যে বলে দেন। আল্লাহ বলছেন, আমি নক্ষত্রের অবস্থানস্থলের শপথ করছি যে এই কুরআন সম্মানিত কুরআন। প্রথম শব্দটি নিয়ে তিনি একটি টীকাও দেন: ইন্নাহু শব্দের 'হু' সর্বনামটি কুরআনকে বোঝায়। বাগাভীও একই কথা বলেন নিজের ভাষায়। তাঁর মতে ইন্নাহু মানে এই কিতাব, আর এটাই মাওদিউল কাসাম, শপথের লক্ষ্য। সা'দী শপথের বিষয়কে বলেন কুরআনের সত্যতা প্রতিষ্ঠা। কুরআন সত্য, তাতে কোনো সন্দেহ নেই, কোনো দ্বিধাও তাকে ছুঁতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Cut Alike",
          "bn": "একই ছাঁচে দুই আয়াত"
        },
        "p": [
          {
            "en": "Set 56:76 beside 56:77 and the two are built on one frame. Wa-innahu la-qasamun ... 'azim: and it is a mighty oath. Innahu la-qur'anun karim: it is a noble Qur'an. Each opens with innahu, each carries the stressing la- on its noun, and each closes on an adjective of worth. Ibn Kathir draws the line between them in a sentence: this is a great vow that Allah is making, and if you knew the greatness of the vow, you would know the greatness of what the vow is about. The weight of the oath is meant to be felt in its answer.",
            "bn": "৫৬:৭৬ আর ৫৬:৭৭ পাশাপাশি রাখলে দেখা যায়, দুটি একই ছাঁচে গড়া। ওয়া ইন্নাহু লা-কাসামুন ... আযীম: আর নিশ্চয়ই এ বড় শপথ। ইন্নাহু লা-কুরআনুন কারীম: নিশ্চয়ই এ সম্মানিত কুরআন। দুটোই শুরু হয় ইন্নাহু দিয়ে, দুটোরই বিশেষ্যের আগে জোর দেওয়ার 'লা', আর দুটোই শেষ হয় মর্যাদা বোঝানো এক বিশেষণে। ইবন কাসীর এক বাক্যে দুটোকে জুড়ে দেন। আল্লাহ এখানে এক মহা শপথ করছেন। শপথটা কত বড় তা জানলে তোমরা বুঝতে, যে বিষয়ে শপথ, সেটা কত বড়। শপথের ভার টের পাওয়ার কথা তার জবাবে গিয়ে।"
          },
          {
            "en": "The link shows in the Arabic of Ibn Kathir too. He glosses the verse as: this Qur'an revealed to Muhammad ﷺ is kitabun 'azim, a mighty Book, using for the Book the very adjective 56:76 gave the oath. Al-Qurtubi's entry opens with two remarks on that mighty oath. One, which he attributes to Ibn 'Abbas and others, takes the pronoun to mean the Qur'an, so that it is the Qur'an that is the mighty oath; the other says that what Allah swears by is mighty. He then calls innahu la-qur'anun karim the naming of what is sworn to.",
            "bn": "ইবন কাসীরের আরবি ভাষ্যেও যোগসূত্রটা চোখে পড়ে। তিনি আয়াতের ব্যাখ্যা করেন এভাবে: মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া এই কুরআন কিতাবুন আযীম, এক মহান কিতাব। ৫৬:৭৬ আয়াত শপথকে যে বিশেষণ দিয়েছিল, কিতাবের জন্য তিনি ঠিক সেটাই ব্যবহার করেন। কুরতুবীর আলোচনা শুরু হয় সেই বড় শপথ নিয়ে দুটি মন্তব্য দিয়ে। একটি মত তিনি ইবন আব্বাস ও অন্যদের নামে আনেন: সর্বনামটি কুরআনকে বোঝায়, অর্থাৎ কুরআনই সেই বড় শপথ। অন্য মত হলো, আল্লাহ যার শপথ করেন তা-ই বড়। এরপর তিনি ইন্নাহু লা-কুরআনুন কারীমকে বলেন শপথের বিষয়ের উল্লেখ।"
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
            "bn": "ইবন কাসীরের পাঠে শপথটা আগে প্রতিবাদ, তারপর ঘোষণা। ফালা উকসিমু-র 'লা' তাঁর মতে অর্থহীন বাড়তি অক্ষর নয়, যদিও কিছু তাফসীরকার তা-ই বলেন। এখানে 'লা' দিয়ে এমন শপথ শুরু হয়েছে, যার মূল কথাই অস্বীকার। তখন অর্থ দাঁড়ায়: না, আমি নক্ষত্রের অবস্থানস্থলের শপথ করছি, কুরআন নিয়ে তোমরা যা দাবি করো, যে এটা জাদু বা জাদুবিদ্যার ফল, ব্যাপারটা তেমন নয়। বরং এ সম্মানিত কুরআন। তিনি ইবন জারীরের সূত্রে কিছু আরবি ভাষাবিদের মতও আনেন: ফালা মানে, তোমরা যা দাবি করেছ ব্যাপার তা নয়। তারপর নতুন করে শপথ শুরু হয়।"
          },
          {
            "en": "Al-Qurtubi lists what karim is set against: the Qur'an is not sihr, magic; not kahana, soothsaying; and not muftara, something fabricated. Ma'arif al-Qur'an says the verse refutes the pagans' assumption that a human being forged the Book, or that it is speech inspired by the devil. Ibn Kathir, reaching 56:80 in the same passage, adds poetry: a revelation from the Lord of all that exists, not magic, sorcery or poetry as they say. Each commentator names the charge in his own words, and the verse answers every one of them with a single adjective.",
            "bn": "কারীম শব্দটি কীসের বিপরীতে দাঁড়িয়ে, কুরতুবী তার তালিকা দেন। কুরআন সিহর বা জাদু নয়, কাহানা বা গণকের কথা নয়, মুফতারা বা বানানো কথাও নয়। মাআরিফুল কুরআন বলে, মুশরিকদের ধারণা ছিল কোনো মানুষ এ কিতাব বানিয়েছে, কিংবা এটা শয়তানের প্ররোচিত কথা। আয়াতটি সেই ধারণা খণ্ডন করে। একই আলোচনায় ৫৬:৮০ আয়াতে পৌঁছে ইবন কাসীর কবিতার কথাও যোগ করেন। এটা জগৎসমূহের রবের পক্ষ থেকে নাজিল হওয়া বাণী, তারা যেমন বলে তেমন জাদু, জাদুবিদ্যা বা কবিতা নয়। প্রত্যেক তাফসীরকার অভিযোগটা বলেন নিজের ভাষায়। আয়াত সবগুলোর জবাব দেয় একটি বিশেষণে।"
          },
          {
            "en": "These were the charges made against the Qur'an by those who rejected it when it came down, and the commentators name them to show what the oath answers. The verse describes what the text describes. It licenses nothing against any living person or community, and gives no one a warrant to treat a questioner or a doubter today as the target of these lines. What it hands the reader is a claim about the Book, made with the weight of an oath, and not a verdict on people. The rest of this article stays with that claim.",
            "bn": "নাজিলের সময় যারা কুরআনকে প্রত্যাখ্যান করেছিল, এগুলো ছিল তাদের তোলা অভিযোগ। শপথটা কীসের জবাব, তা দেখাতেই তাফসীরকারেরা অভিযোগগুলোর নাম নেন। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আজ কেউ প্রশ্ন তুললে বা সন্দেহ করলে তাকে এই আয়াতের নিশানা বানানোর অধিকারও কাউকে দেয় না। পাঠকের হাতে আয়াতটি তুলে দেয় কিতাব সম্পর্কে একটি দাবি, শপথের ভার দিয়ে বলা। মানুষের উপর কোনো রায় নয়। এই লেখার বাকিটা সেই দাবি নিয়েই।"
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
            "bn": "এখানে কারীম মানে কী? তাফসীরকারেরা একাধিক উত্তর দেন, আর সেগুলো একটা একটা করে শোনাই ভালো। প্রথম দলের ব্যাখ্যা মর্যাদা নিয়ে। ইবন কাসীর বলেন কিতাবুন আযীম, মহান কিতাব, যা আগেই দেখা গেছে। তাঁর তাফসীরের ইংরেজি সংক্ষিপ্ত সংস্করণে আছে গৌরবময় কিতাব। বাগাভী বলেন আযীযুন মুকরাম, প্রবল এবং সম্মানিত। কারণটাও তিনি এক কথায় দেন: কারণ এটা আল্লাহর কালাম। মাআরিফুল কুরআন একে বলে সম্মানিত ও গৌরবময় কিতাব। এই প্রতিটি ব্যাখ্যায় কারীম শব্দ কুরআনের অবস্থান বোঝায়, তার মূল্য কত আর তার আসন কত উঁচু।"
          },
          {
            "en": "Al-Qurtubi gathers several of these into one line. After setting karim against magic, soothsaying and fabrication, he goes on: rather it is a Qur'an karim, mahmud, noble and praised, which Allah made a miracle for His Prophet ﷺ. Here the honour is tied to the Qur'an's function as a sign, the proof given to the Messenger. Read together, these glosses describe a Book that deserves esteem because of whose speech it is and what it was sent to prove. None of them is a statement about what the Qur'an gives; that comes in the next set.",
            "bn": "কুরতুবী এগুলোর কয়েকটাকে একটি বাক্যে জড়ো করেন। কারীমকে জাদু, গণকের কথা আর বানানো কথার বিপরীতে দাঁড় করিয়ে তিনি বলেন, বরং এ কুরআন কারীম ও মাহমূদ, সম্মানিত ও প্রশংসিত। আল্লাহ একে তাঁর নবী ﷺ-এর মুজিযা বানিয়েছেন। এখানে সম্মান জুড়ে আছে নিদর্শন হিসেবে কুরআনের ভূমিকার সঙ্গে, রাসূলকে দেওয়া প্রমাণ হিসেবে। একসঙ্গে পড়লে এই ব্যাখ্যাগুলো এমন এক কিতাবের ছবি আঁকে, যা সম্মান পাওয়ার যোগ্য। কারণ এটা কার কালাম, আর কী প্রমাণ করতে পাঠানো। কুরআন কী দেয়, সে কথা এদের কোনোটাতেই নেই। সেটা আসে পরের দলে।"
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
            "bn": "দ্বিতীয় দলের ব্যাখ্যায় কারীম মানে দানশীলতা। সা'দী বলেন, এর অর্থ কাসীরুল খাইর, অনেক কল্যাণের অধিকারী, আর গাযীরুল ইলম, অগাধ জ্ঞানের ভাণ্ডার। তারপর দাবিটা তিনি আরও বড় করেন: সব কল্যাণ আর সব জ্ঞান আল্লাহর কিতাব থেকেই নেওয়া হয়, তা থেকেই বের করে আনা হয়। মুয়াসসারও প্রায় একই শব্দ ব্যবহার করে। মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া এই কুরআন আযীমুল মানাফি, উপকারে মহান। কাসীরুল খাইর, কল্যাণে ভরপুর। গাযীরুল ইলম, জ্ঞানে অগাধ। এই পাঠে সম্মানিত কিতাব সেটাই, যে দেয়, আর অনেক দেয়।"
          },
          {
            "en": "Al-Baghawi, after his gloss of honour, reports a second view from some of ahl al-ma'ani, the scholars of meanings: al-karim is that whose nature is to give much good. So in his short entry both families stand together, honour first and giving second, with the second carried by a named group of scholars. Al-Qurtubi has a gloss of the same kind among his reports: karim because of the noble qualities of character and the meanings of things it contains. Here the generosity is in its content, in what a reader finds when the Book is opened.",
            "bn": "বাগাভী সম্মানের ব্যাখ্যা দেওয়ার পর আহলুল মাআনী, অর্থাৎ অর্থবিশারদ কিছু আলেমের আরেকটি মত আনেন। আল-কারীম সেই, যার স্বভাবই অনেক কল্যাণ দেওয়া। তাই তাঁর ছোট্ট আলোচনাতেই দুই দল পাশাপাশি দাঁড়িয়ে। আগে সম্মান, পরে দান, আর দ্বিতীয়টা এসেছে একদল আলেমের নামে। কুরতুবীর বর্ণিত মতগুলোর মধ্যেও এই ধরনের একটি ব্যাখ্যা আছে। কারীম, কারণ এতে আছে উত্তম চরিত্রের কথা আর নানা বিষয়ের গভীর অর্থ। এখানে দানশীলতা তার বিষয়বস্তুতে। কিতাব খুললে পাঠক যা পায়, তাতেই।"
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
            "bn": "কুরতুবী এমন একটা দিক যোগ করেন, যা অন্যদের লেখায় নেই: কারীম, কিন্তু কার কাছে? তিনি বলেন, কুরআন মুমিনদের কাছে সম্মানিত। কারণ এটা তাদের রবের কালাম, তাদের অন্তরের শিফা। আবার আসমানবাসীদের কাছেও সম্মানিত। কারণ এটা তাদের রবের নাজিল করা বাণী, তাঁর ওহি। তাই সম্মান শুধু কিতাবের নিজের ভেতরের কোনো গুণ নয়। দুটি দল একে যে চোখে দেখে, সেটাও এই সম্মানের অংশ। একটি দল জমিনে, অন্যটি উপরে, আর প্রত্যেকের কারণ আলাদা।"
          },
          {
            "en": "He then lists further views, each introduced with qila, it is said. One: karim because it honours the one who memorises it and magnifies the one who recites it. Another: karim meaning not created. He reports the second without developing it, and this article does the same. The first turns the word around. Elsewhere the reader honours the Book; in this gloss the Book honours its reader. Al-Qurtubi gives no ranking among these views, and his qila marks each as a report he is passing on, not a conclusion he is drawing.",
            "bn": "এরপর তিনি আরও কয়েকটি মত আনেন, প্রতিটির শুরুতে 'কীলা', অর্থাৎ বলা হয়েছে। একটি মত: কারীম, কারণ যে একে মুখস্থ রাখে, এ তাকে সম্মানিত করে, আর যে তিলাওয়াত করে, তাকে মর্যাদা দেয়। আরেকটি মত: কারীম মানে যা সৃষ্ট নয়। দ্বিতীয় মতটি তিনি বিস্তারিত না করে শুধু উল্লেখ করেন, এই লেখাও তাই করছে। প্রথম মতটি শব্দের দিক উল্টে দেয়। অন্য জায়গায় পাঠক কিতাবকে সম্মান করে। এই ব্যাখ্যায় কিতাব সম্মান দেয় পাঠককে। মতগুলোর মধ্যে কুরতুবী কোনো ক্রম ঠিক করেন না। 'কীলা' দিয়ে বোঝান, এগুলো তাঁর বর্ণনা করা মত, তাঁর টানা সিদ্ধান্ত নয়।"
          },
          {
            "en": "So the word stands with its glosses around it: mighty and glorious in Ibn Kathir; mighty, honoured and generous in al-Baghawi; abundant in good and copious in knowledge in as-Sa'di and the Muyassar; noble and glorious in Ma'arif al-Qur'an; and in al-Qurtubi praised, a miracle, honoured among believers and the people of heaven, rich in noble character, ennobling its bearer. The commentators do not set these against one another, and this article does not choose among them. Each is a door into the one word, and the word is wide enough to hold them all.",
            "bn": "তাহলে শব্দটি দাঁড়িয়ে আছে তার ব্যাখ্যাগুলো চারপাশে নিয়ে। ইবন কাসীরের কাছে মহান ও গৌরবময়। বাগাভীর কাছে প্রবল, সম্মানিত, দানশীল। সা'দী আর মুয়াসসারের কাছে কল্যাণে ভরপুর, জ্ঞানে অগাধ। মাআরিফুল কুরআনের কাছে সম্মানিত ও গৌরবময়। আর কুরতুবীর কাছে প্রশংসিত, মুজিযা, মুমিন ও আসমানবাসীদের কাছে সম্মানিত, উত্তম চরিত্রের কথায় সমৃদ্ধ, ধারককে মর্যাদা দানকারী। তাফসীরকারেরা এগুলোকে পরস্পরের বিরুদ্ধে দাঁড় করান না। এই লেখাও এদের মধ্যে কোনোটাকে বেছে নেয় না। প্রতিটি ব্যাখ্যা একই শব্দে ঢোকার একেকটি দরজা, আর শব্দটি এত প্রশস্ত যে সবগুলোই তাতে ধরে।"
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
            "bn": "বাক্যটি কারীম শব্দে এসে থেমে যায় না। পরের আয়াতগুলো বলে এই কুরআন কোথায় রাখা আছে: ফী কিতাবিম মাকনূন, সুরক্ষিত এক কিতাবে। ৫৬:৭৯ আয়াত সে বিষয়ে আরও কথা বলে। আর ৫৬:৮০ আয়াত বলে, এটা জগৎসমূহের রবের পক্ষ থেকে নাজিল হওয়া। মাআরিফুল কুরআন সুরক্ষিত কিতাব বলতে লাওহে মাহফূজ বোঝে। মুয়াসসারের বর্ণনায় সেটি এমন কিতাব, যা সংরক্ষিত, সৃষ্টির চোখের আড়ালে লুকানো, ফেরেশতাদের হাতে থাকা কিতাব। ৫৬:৭৯ আয়াত আর তার শব্দগুলো নিয়ে তাফসীরকারদের আলোচনা সেই আয়াতেরই বিষয়। এই লেখা সেখানে যাচ্ছে না।"
          },
          {
            "en": "No hadith in the tafsir texts fetched for this verse is attached to it. The one Prophetic report in Ibn Kathir's passage, the narration of Zayd ibn Khalid about the morning after rain at al-Hudaybiyah, belongs to his explanation of 56:82, and the words of 'A'ishah he quotes are given only to illustrate an Arabic usage of la. Neither is cited here as bearing on 56:77. No occasion of revelation is given for the verse in these sources either. Its setting is its place in the passage: the answer to an oath, between the stars and the protected Book.",
            "bn": "এই আয়াতের জন্য সংগ্রহ করা তাফসীরের লেখাগুলোতে কোনো হাদীস এই আয়াতের সঙ্গে যুক্ত করা হয়নি। ইবন কাসীরের আলোচনায় একটিই হাদীস আছে। হুদাইবিয়ায় বৃষ্টির রাতের পরের সকাল নিয়ে যায়েদ ইবন খালিদ (রাঃ)-এর বর্ণনা। সেটা তাঁর ৫৬:৮২ আয়াতের ব্যাখ্যার অংশ। আর আয়িশা (রাঃ)-এর যে কথা তিনি উদ্ধৃত করেন, তা শুধু আরবিতে 'লা' শব্দের এক ব্যবহার বোঝাতে। ৫৬:৭৭ আয়াতের প্রসঙ্গে এর কোনোটাই এখানে আনা হচ্ছে না। এসব সূত্রে আয়াতটির কোনো শানে নুযূলও দেওয়া নেই। এর প্রেক্ষাপট তার অবস্থান। একটি শপথের জবাব, তারকারাজি আর সুরক্ষিত কিতাবের মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Esteem That Opens the Book",
          "bn": "যে সম্মান কিতাব খোলায়"
        },
        "p": [
          {
            "en": "The two families of glosses ask different things of a reader, and the verse's one word asks both. If karim is rank, the Qur'an is to be approached as one approaches something high: with care, with attention, with the sense that these are the words of the Lord of the worlds. If karim is generosity, the Qur'an is to be approached as one approaches a generous giver: expecting to be given, coming back again, asking for more. A reader who keeps only the first may honour a Book he rarely opens. A reader who keeps only the second may take from it without regard.",
            "bn": "ব্যাখ্যার দুই দল পাঠকের কাছে দুই রকম জিনিস চায়, আর আয়াতের একটি শব্দ চায় দুটোই। কারীম যদি মর্যাদা হয়, তবে কুরআনের কাছে যেতে হবে উঁচু কোনো কিছুর কাছে যাওয়ার মতো করে। যত্ন নিয়ে, মনোযোগ দিয়ে, এই বোধ নিয়ে যে এগুলো জগৎসমূহের রবের কথা। কারীম যদি দানশীলতা হয়, তবে যেতে হবে দাতার কাছে যাওয়ার মতো করে। কিছু পাওয়ার আশা নিয়ে, বারবার ফিরে এসে, আরও চেয়ে। যে শুধু প্রথমটা রাখে, সে এমন কিতাবকে সম্মান করতে পারে, যা সে কমই খোলে। যে শুধু দ্বিতীয়টা রাখে, সে সম্মান ছাড়াই তা থেকে নিতে পারে।"
          },
          {
            "en": "As-Sa'di's line is worth carrying away: every good and every knowledge is drawn from the Book of Allah. That is a claim about where to look. And al-Qurtubi's gloss turns the relation round once more: the Book honours the one who memorises it and magnifies the one who recites it. A mighty oath was sworn to say this Qur'an is karim. The passage then asks, at 56:81, whether it is to this discourse that people are indifferent. The question can be put to oneself before any other: is my own regard for the Book, and my own use of it, worthy of what was sworn?",
            "bn": "সা'দীর একটি কথা মনে রেখে দেওয়ার মতো: সব কল্যাণ আর সব জ্ঞান আল্লাহর কিতাব থেকেই নেওয়া। কোথায় খুঁজতে হবে, এ তারই দাবি। আর কুরতুবীর বর্ণিত ব্যাখ্যা সম্পর্কটা আরেকবার উল্টে দেয়: যে কুরআন মুখস্থ রাখে, কুরআন তাকে সম্মানিত করে। যে তিলাওয়াত করে, তাকে মর্যাদা দেয়। এই কুরআন কারীম, এ কথা বলতে বড় এক শপথ করা হয়েছে। এরপর ৫৬:৮১ আয়াতে প্রশ্ন আসে, তবুও কি তোমরা এ বাণীকে তুচ্ছ মনে করছ? প্রশ্নটা অন্য কারও আগে নিজেকেই করা যায়। কিতাবের প্রতি আমার সম্মান আর তার সঙ্গে আমার ব্যবহার কি সেই শপথের যোগ্য?"
          }
        ]
      }
    ]
  }
});
