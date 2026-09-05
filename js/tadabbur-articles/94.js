/**
 * Tadabbur long-form articles — surah 94.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "94:5-6": {
    "sections": [
      {
        "h": {
          "en": "With, Not After",
          "bn": "সাথে, পরে নয়"
        },
        "p": [
          {
            "en": "The wording is precise and often softened in translation. Fa inna ma'al-'usri yusra: so indeed, with hardship is ease. The preposition is ma'a, with, not ba'da, after. The Quran does use the other construction elsewhere, in 65:7, where Allah says He will bring about ease after hardship. Here the choice of ma'a places the relief alongside the difficulty rather than only at its conclusion.",
            "bn": "শব্দচয়ন এখানে নির্ভুল, অথচ অনুবাদে প্রায়ই তা নরম হয়ে যায়। ফা-ইন্না মা'আল 'উসরি ইউসরা — নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি। ব্যবহৃত অব্যয়টি 'মা'আ' — অর্থাৎ 'সাথে', 'বা'দা' বা 'পরে' নয়। কুরআন অন্যত্র অন্য গঠনটিও ব্যবহার করেছে — 65:7-এ, যেখানে আল্লাহ বলেন তিনি কষ্টের পরে স্বস্তি এনে দেবেন। এখানে 'মা'আ' বেছে নেওয়ায় স্বস্তিটি কেবল কষ্টের শেষে নয়, বরং তার পাশেই স্থাপিত হয়।"
          },
          {
            "en": "Then the sentence is repeated word for word. Arabic repetition of this kind functions as emphasis and as confirmation, closing off the possibility that the first statement was conditional or partial. The commentators treat the second occurrence as making the promise firm rather than as adding new information, which is why translations that render it identically are being faithful to the text.",
            "bn": "এরপর বাক্যটি হুবহু পুনরাবৃত্ত হয়। আরবিতে এ ধরনের পুনরাবৃত্তি জোর দেওয়ার ও নিশ্চিত করার কাজ করে, আর প্রথম বাক্যটি শর্তসাপেক্ষ বা আংশিক ছিল — এমন সম্ভাবনা বন্ধ করে দেয়। মুফাসসিরগণ দ্বিতীয়বারের উল্লেখটিকে নতুন তথ্য যোগ করা নয়, বরং প্রতিশ্রুতিটিকে দৃঢ় করা হিসেবেই দেখেন; সে কারণেই যেসব অনুবাদ দুবার একই বাক্য রাখে, সেগুলোই মূল পাঠের প্রতি বিশ্বস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "One Hardship, Two Eases",
          "bn": "এক কষ্ট, দুই স্বস্তি"
        },
        "p": [
          {
            "en": "There is a famous grammatical observation attached to these two verses. Al-'usr appears both times with the definite article, so classical usage takes the second mention to refer to the same hardship already named. Yusr appears both times without it, and an indefinite noun repeated is normally taken as a second, different instance. The conclusion drawn is that one hardship is met by two eases.",
            "bn": "এই দুই আয়াতের সঙ্গে একটি বিখ্যাত ব্যাকরণগত পর্যবেক্ষণ জড়িয়ে আছে। 'আল-উসর' দুবারই এসেছে নির্দিষ্টতাবাচক অব্যয়সহ, ফলে ধ্রুপদী ব্যবহারে দ্বিতীয়বারের উল্লেখটিকে আগেই উল্লিখিত সেই একই কষ্ট বলে ধরা হয়। আর 'ইউসর' দুবারই এসেছে অনির্দিষ্টভাবে, আর অনির্দিষ্ট বিশেষ্য পুনরাবৃত্ত হলে সাধারণত তাকে দ্বিতীয় ও ভিন্ন একটি বিষয় ধরা হয়। এ থেকে যে সিদ্ধান্ত টানা হয় তা হলো: এক কষ্টের মোকাবিলায় দুটি স্বস্তি।"
          },
          {
            "en": "This is relayed from 'Umar ibn al-Khattab (RA) and from al-Hasan al-Basri among the early generations, and it is repeated across the classical commentaries. It should be presented for what it is: an inference from the grammar of the two verses, held by a great many scholars, rather than a text with an independent chain of its own. Taken that way it is a sound and comforting observation without needing to be dressed as a hadith.",
            "bn": "এটি পূর্ববর্তী প্রজন্মের মধ্যে উমর ইবনুল খাত্তাব (রাঃ) ও হাসান বসরী থেকে বর্ণিত, আর ধ্রুপদী তাফসীরগুলোতে বারবার পুনরাবৃত্ত হয়েছে। একে যা তা-ই বলে উপস্থাপন করা উচিত: দুই আয়াতের ব্যাকরণ থেকে টানা একটি সিদ্ধান্ত, যা বহু আলিম গ্রহণ করেছেন — স্বতন্ত্র সনদসম্পন্ন কোনো বর্ণনা নয়। এভাবে নিলে এটি একটি যথার্থ ও সান্ত্বনাদায়ক পর্যবেক্ষণ, যাকে হাদীসের পোশাক পরানোর প্রয়োজন নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Evidence Before Promise",
          "bn": "প্রতিশ্রুতির আগে প্রমাণ"
        },
        "p": [
          {
            "en": "The promise does not arrive on its own. Surah ash-Sharh is Makkan and addressed to the Prophet ﷺ, and the four verses before it are a list of things already done for him. In 94:1-4 Allah asks whether He did not expand his breast, and remove from him his burden which had weighed down his back, and raise high his mention. Only after that record does the general promise follow.",
            "bn": "প্রতিশ্রুতিটি একা আসে না। সূরা আশ-শারহ মক্কী এবং নবী ﷺ-কে উদ্দেশ করে নাযিল; এর আগের চারটি আয়াত তাঁর জন্য ইতিমধ্যে করা কাজগুলোর তালিকা। 94:1-4-এ আল্লাহ জিজ্ঞেস করেন, তিনি কি তাঁর বক্ষ প্রশস্ত করে দেননি? তাঁর পিঠ ভারী করে রাখা বোঝাটি কি নামিয়ে দেননি? আর তাঁর মর্যাদাকে কি উঁচু করেননি? এই বিবরণের পরেই কেবল আসে সাধারণ প্রতিশ্রুতিটি।"
          },
          {
            "en": "The order matters for how the verses are used. This is not an abstract assurance offered to someone with no history. It is a conclusion drawn from a record: relief has already come before, in ways that were not visible in advance, so the pattern can be trusted again. Many people find the surah works best when read from its first verse rather than quoted from its fifth.",
            "bn": "আয়াতগুলো কীভাবে ব্যবহার করা হবে, তার জন্য এই ক্রমটি গুরুত্বপূর্ণ। এটি কোনো ইতিহাসহীন মানুষকে দেওয়া বিমূর্ত আশ্বাস নয়। এটি একটি বিবরণ থেকে টানা সিদ্ধান্ত: স্বস্তি আগেও এসেছে, এমনভাবে যা আগে থেকে দেখা যায়নি; তাই ধরনটির ওপর আবারও ভরসা করা যায়। বহু মানুষ দেখেন, পঞ্চম আয়াত থেকে উদ্ধৃত করার চেয়ে সূরাটি প্রথম আয়াত থেকে পড়লেই তা সবচেয়ে ভালো কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Comes Next",
          "bn": "এরপর যা আসে"
        },
        "p": [
          {
            "en": "The surah does not end at the promise. Verses 94:7-8 continue: so when you have finished, exert yourself, and to your Lord direct your longing. The commentators offer different applications of what is finished and what is then taken up, but the shape is agreed. Ease is not described as a reward that ends the work; it is the point at which the next effort begins.",
            "bn": "সূরাটি প্রতিশ্রুতিতে শেষ হয় না। 94:7-8 আয়াত বলে চলে: অতএব যখন তুমি অবসর পাও, তখন কঠোর পরিশ্রম করো, আর তোমার রবের দিকেই আগ্রহ নিবদ্ধ করো। কোন কাজটি শেষ হলো আর এরপর কোনটি ধরা হবে, তার প্রয়োগে মুফাসসিরগণ ভিন্ন ভিন্ন ব্যাখ্যা দেন, তবে কাঠামোটি নিয়ে মতৈক্য আছে। স্বস্তিকে এমন পুরস্কার হিসেবে বর্ণনা করা হয়নি যা কাজ শেষ করে দেয়; এটি সেই বিন্দু, যেখান থেকে পরবর্তী পরিশ্রম শুরু হয়।"
          },
          {
            "en": "That ending guards the verse against a passive reading. Being told that ease accompanies hardship is not being told to wait for conditions to improve. The same surah that promises relief closes by commanding exertion, which is why the classical scholars read tawakkul and effort as belonging together here in the same way as they do in 3:159.",
            "bn": "এই সমাপ্তিটিই আয়াতটিকে নিষ্ক্রিয় পাঠ থেকে রক্ষা করে। কষ্টের সঙ্গেই স্বস্তি আছে — এ কথা শোনার অর্থ পরিস্থিতি ভালো হওয়ার অপেক্ষায় বসে থাকা নয়। যে সূরা স্বস্তির প্রতিশ্রুতি দেয়, সেই সূরাই শেষ হয় পরিশ্রমের আদেশ দিয়ে; সে কারণেই ধ্রুপদী আলিমগণ এখানে তাওয়াক্কুল ও চেষ্টাকে একসঙ্গেই পড়েন — ঠিক যেভাবে 3:159-এ পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Not Promised",
          "bn": "যা প্রতিশ্রুত নয়"
        },
        "p": [
          {
            "en": "Accuracy here is a kindness. The verses promise that ease accompanies hardship. They do not specify what form the ease will take, when it will be recognised, or that it will restore what was lost. A person who reads them as a guarantee that a diagnosis will reverse or a marriage will be saved may be left feeling that Allah broke a promise He did not make.",
            "bn": "এখানে নির্ভুলতাই দয়া। আয়াত দুটি প্রতিশ্রুতি দেয় যে কষ্টের সঙ্গে স্বস্তি থাকে। এগুলো নির্দিষ্ট করে না যে স্বস্তিটি কোন রূপে আসবে, কখন তা চেনা যাবে, কিংবা যা হারিয়েছে তা ফিরিয়ে দেবে কি না। যিনি একে এই নিশ্চয়তা হিসেবে পড়েন যে রোগনির্ণয় উল্টে যাবে বা সংসারটি টিকে যাবে, তিনি শেষে অনুভব করতে পারেন যে আল্লাহ এমন এক প্রতিশ্রুতি ভেঙেছেন যা তিনি কখনো দেননি।"
          },
          {
            "en": "Very often the ease that arrives first is internal: strength that was not there last month, help from an unexpected person, a night of sleep, a lightening of the fear even while the situation holds. The companions in the years of hardship in Makkah were not given quick relief, and the boycott in the valley lasted a long time before it ended. It did end.",
            "bn": "অধিকাংশ সময় সবচেয়ে আগে যে স্বস্তি আসে তা ভেতরের: গত মাসে যে শক্তি ছিল না তা, অপ্রত্যাশিত কারও সাহায্য, একটি ঘুমের রাত, কিংবা পরিস্থিতি অপরিবর্তিত থাকা সত্ত্বেও ভয়ের ভার কিছুটা হালকা হওয়া। মক্কার কঠিন বছরগুলোতে সাহাবীদের দ্রুত মুক্তি দেওয়া হয়নি, আর উপত্যকার সেই বয়কট শেষ হওয়ার আগে বহুদিন টিকেছিল। তবু তা শেষ হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding On Meanwhile",
          "bn": "ইতিমধ্যে ধরে রাখা"
        },
        "p": [
          {
            "en": "Muslim records the Prophet ﷺ saying that the affair of the believer is wholly good, and that this is for no one but the believer: if ease comes he is grateful and that is good for him, and if hardship comes he is patient and that is good for him. The hadith does not deny that the two states differ. It gives each of them a usable response.",
            "bn": "মুসলিমে বর্ণিত আছে, নবী ﷺ বলেছেন — মুমিনের ব্যাপারটি পুরোটাই কল্যাণকর, আর এটি মুমিন ছাড়া আর কারও জন্য নয়: তার কাছে স্বস্তি এলে সে শোকর করে, আর তা তার জন্য কল্যাণকর; আর কষ্ট এলে সে ধৈর্য ধরে, আর তা-ও তার জন্য কল্যাণকর। হাদীসটি অস্বীকার করে না যে অবস্থা দুটি ভিন্ন। এটি প্রতিটির জন্য একটি ব্যবহারযোগ্য জবাব দেয়।"
          },
          {
            "en": "Practically, hardship is usually survived in units smaller than the whole. A supplication transmitted from the Prophet ﷺ asks Allah to make what is difficult easy, since He alone makes the difficult easy when He wills. Alongside that, take the next required step only, keep the obligatory prayers even when they feel empty, tell one trustworthy person, and accept treatment and help without treating them as a failure of faith.",
            "bn": "বাস্তবে কষ্ট সাধারণত পুরোটা একসঙ্গে নয়, ছোট ছোট অংশে পার হতে হয়। নবী ﷺ থেকে বর্ণিত একটি দোয়ায় আল্লাহর কাছে চাওয়া হয় যেন তিনি কঠিন বিষয়টিকে সহজ করে দেন, কারণ তিনি চাইলেই কেবল কঠিন সহজ হয়। এর পাশাপাশি কেবল পরবর্তী প্রয়োজনীয় পদক্ষেপটুকু নিন, শূন্য লাগলেও ফরয নামাযগুলো ধরে রাখুন, বিশ্বস্ত একজনকে কথাটি বলুন, আর চিকিৎসা ও সাহায্যকে ঈমানের ব্যর্থতা না ভেবে গ্রহণ করুন।"
          }
        ]
      }
    ]
  }
});
