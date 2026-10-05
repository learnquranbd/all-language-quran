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
