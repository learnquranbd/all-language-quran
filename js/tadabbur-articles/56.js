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
  }
});
