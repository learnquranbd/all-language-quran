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
          "bn": "সাথে, পরে নয়"
        },
        "p": [
          {
            "en": "The wording is precise and often softened in translation. Fa inna ma'al-'usri yusra: so indeed, with hardship is ease. The preposition is ma'a, with, not ba'da, after. The Quran does use the other construction elsewhere, in 65:7, where Allah says He will bring about ease after hardship. Here the choice of ma'a places the relief alongside the difficulty rather than only at its conclusion.",
            "bn": "শব্দটা এখানে মেপে বাছাই করা, অথচ অনুবাদে প্রায়ই এর ধার কমে যায়। ফা-ইন্না মা'আল 'উসরি ইউসরা: নিশ্চয়ই কষ্টের সাথেই আছে স্বস্তি। অব্যয়টি হলো 'মা'আ', মানে 'সাথে'; 'বা'দা', মানে 'পরে', নয়। কুরআন অন্য জায়গায় ওই দ্বিতীয় গঠনটিও ব্যবহার করেছে। ৬৫:৭-এ আল্লাহ বলেন, তিনি কষ্টের পরে স্বস্তি দেবেন। কিন্তু এখানে 'মা'আ' শব্দটি স্বস্তিকে বসিয়ে দেয় কষ্টের পাশেই, শুধু তার শেষে নয়।"
          },
          {
            "en": "Then the sentence is repeated word for word. Arabic repetition of this kind functions as emphasis and as confirmation, closing off the possibility that the first statement was conditional or partial. The commentators treat the second occurrence as making the promise firm rather than as adding new information, which is why translations that render it identically are being faithful to the text.",
            "bn": "এরপর বাক্যটি হুবহু আবার আসে। আরবিতে এমন পুনরাবৃত্তি জোর দেয়, কথাটিকে পাকা করে। প্রথম বাক্যটি শর্তসাপেক্ষ বা আংশিক ছিল, এমন সন্দেহের আর জায়গা থাকে না। মুফাসসিরগণ দ্বিতীয়বারের কথাটিকে নতুন তথ্য হিসেবে দেখেন না, দেখেন প্রতিশ্রুতিকে দৃঢ় করা হিসেবে। তাই যেসব অনুবাদ দুবারই একই বাক্য রাখে, সেগুলোই মূলের প্রতি বিশ্বস্ত।"
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
            "bn": "এই দুই আয়াত নিয়ে ব্যাকরণের একটি বিখ্যাত পর্যবেক্ষণ আছে। 'আল-উসর' দুবারই এসেছে নির্দিষ্টবাচক 'আল' সহ, তাই ধ্রুপদী আরবি রীতিতে দ্বিতীয়বারের উল্লেখকে আগের সেই একই কষ্ট ধরা হয়। অন্যদিকে 'ইউসর' দুবারই এসেছে 'আল' ছাড়া। অনির্দিষ্ট বিশেষ্য আবার এলে সাধারণত তাকে আলাদা, দ্বিতীয় আরেকটি ধরা হয়। এ থেকে সিদ্ধান্ত টানা হয়: এক কষ্টের বিপরীতে দুই স্বস্তি।"
          },
          {
            "en": "This is relayed from 'Umar ibn al-Khattab (RA) and from al-Hasan al-Basri among the early generations, and it is repeated across the classical commentaries. It should be presented for what it is: an inference from the grammar of the two verses, held by a great many scholars, rather than a text with an independent chain of its own. Taken that way it is a sound and comforting observation without needing to be dressed as a hadith.",
            "bn": "প্রথম যুগে উমর ইবনুল খাত্তাব (রাঃ) ও হাসান বসরী থেকে কথাটি বর্ণিত হয়েছে, আর ধ্রুপদী তাফসীরগুলোতে বারবার এসেছে। তবে কথাটিকে তার আসল পরিচয়েই তুলে ধরা উচিত। এটি দুই আয়াতের ব্যাকরণ থেকে টানা সিদ্ধান্ত, বহু আলিম যা মেনেছেন; আলাদা সনদওয়ালা কোনো বর্ণনা নয়। এভাবে নিলে এটি সঠিক ও সান্ত্বনার একটি পর্যবেক্ষণ, একে হাদিসের পোশাক পরানোর দরকার নেই।"
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
            "bn": "প্রতিশ্রুতিটি একা আসেনি। সূরা আশ-শারহ মক্কী, আর এর সম্বোধন নবী ﷺ-এর প্রতি। এর আগের চারটি আয়াত হলো তাঁর জন্য আগেই করে দেওয়া কাজের তালিকা। ৯৪:১-৪-এ আল্লাহ জিজ্ঞেস করেন: তিনি কি তাঁর বক্ষ প্রশস্ত করে দেননি? যে বোঝা তাঁর পিঠ ভারী করে রেখেছিল, তা কি নামিয়ে দেননি? তাঁর আলোচনাকে কি উঁচু করেননি? এই তালিকার পরেই আসে সাধারণ প্রতিশ্রুতিটি।"
          },
          {
            "en": "The order matters for how the verses are used. This is not an abstract assurance offered to someone with no history. It is a conclusion drawn from a record: relief has already come before, in ways that were not visible in advance, so the pattern can be trusted again. Many people find the surah works best when read from its first verse rather than quoted from its fifth.",
            "bn": "আয়াতগুলো কীভাবে কাজে লাগানো হবে, সেখানে এই ক্রমের গুরুত্ব আছে। এ এমন কাউকে দেওয়া শূন্যে ভাসা আশ্বাস নয়, যার পেছনে কোনো ইতিহাস নেই। এ হলো আগের হিসাব দেখে টানা সিদ্ধান্ত: স্বস্তি আগেও এসেছে, এমন পথে যা আগে থেকে চোখে পড়েনি। তাই এই ধারার ওপর আবারও ভরসা রাখা যায়। অনেকের অভিজ্ঞতা, সূরাটি পঞ্চম আয়াত থেকে উদ্ধৃত না করে প্রথম আয়াত থেকে পড়লেই সবচেয়ে বেশি কাজ দেয়।"
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
            "bn": "সূরাটি প্রতিশ্রুতিতেই থেমে যায় না। ৯৪:৭-৮ আয়াতে আছে: অতএব যখন তুমি অবসর পাও, তখন কঠোর পরিশ্রম করো, আর তোমার রবের দিকেই আগ্রহ নিবদ্ধ করো। কী শেষ হলো আর তারপর কী ধরতে হবে, তা নিয়ে মুফাসসিরগণ ভিন্ন ভিন্ন প্রয়োগ বলেছেন, কিন্তু মূল কাঠামো নিয়ে সবাই একমত। স্বস্তি এখানে কাজ শেষ করে দেওয়ার পুরস্কার নয়; এ সেই মুহূর্ত, যেখান থেকে পরের চেষ্টা শুরু হয়।"
          },
          {
            "en": "That ending guards the verse against a passive reading. Being told that ease accompanies hardship is not being told to wait for conditions to improve. The same surah that promises relief closes by commanding exertion, which is why the classical scholars read tawakkul and effort as belonging together here in the same way as they do in 3:159.",
            "bn": "এই সমাপ্তিই আয়াতটিকে নিষ্ক্রিয় পাঠ থেকে বাঁচায়। কষ্টের সঙ্গে স্বস্তি আছে, এ কথার মানে এই নয় যে অবস্থা ভালো হওয়ার অপেক্ষায় বসে থাকতে হবে। যে সূরা স্বস্তির প্রতিশ্রুতি দেয়, সেই সূরাই শেষ হয় পরিশ্রমের আদেশ দিয়ে। তাই ধ্রুপদী আলিমগণ এখানে তাওয়াক্কুল আর চেষ্টাকে একসঙ্গে পড়েন, ঠিক যেমন পড়েন ৩:১৫৯-এ।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Not Promised",
          "bn": "যার প্রতিশ্রুতি নেই"
        },
        "p": [
          {
            "en": "Accuracy here is a kindness. The verses promise that ease accompanies hardship. They do not specify what form the ease will take, when it will be recognised, or that it will restore what was lost. A person who reads them as a guarantee that a diagnosis will reverse or a marriage will be saved may be left feeling that Allah broke a promise He did not make.",
            "bn": "এখানে নির্ভুল থাকাটাই দয়া। আয়াত দুটি কথা দেয়, কষ্টের সঙ্গে স্বস্তি থাকে। কিন্তু সেই স্বস্তি কী রূপে আসবে, কখন তা চেনা যাবে, কিংবা যা হারিয়ে গেছে তা ফিরিয়ে দেবে কি না, সেটা বলে না। কেউ যদি আয়াত দুটিকে এই নিশ্চয়তা ভেবে পড়েন যে ধরা পড়া রোগ সেরে যাবে বা সংসারটা টিকে যাবে, শেষে তাঁর মনে হতে পারে, আল্লাহ এমন এক প্রতিশ্রুতি ভেঙেছেন যা তিনি কখনো দেননি।"
          },
          {
            "en": "Very often the ease that arrives first is internal: strength that was not there last month, help from an unexpected person, a night of sleep, a lightening of the fear even while the situation holds. The companions in the years of hardship in Makkah were not given quick relief, and the boycott in the valley lasted a long time before it ended. It did end.",
            "bn": "অনেক সময়ই সবার আগে যে স্বস্তি আসে, তা ভেতরের: গত মাসে যে শক্তি ছিল না, সেই শক্তি; অপ্রত্যাশিত কারও কাছ থেকে সাহায্য; এক রাতের ঘুম; কিংবা অবস্থা না বদলালেও ভয়টা কিছুটা হালকা হয়ে যাওয়া। মক্কার কষ্টের বছরগুলোতে সাহাবীরা দ্রুত মুক্তি পাননি, আর উপত্যকার সেই বয়কট শেষ হতে অনেক দিন লেগেছিল। তবু তা শেষ হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding On Meanwhile",
          "bn": "এর মধ্যে টিকে থাকা"
        },
        "p": [
          {
            "en": "Muslim records the Prophet ﷺ saying that the affair of the believer is wholly good, and that this is for no one but the believer: if ease comes he is grateful and that is good for him, and if hardship comes he is patient and that is good for him. The hadith does not deny that the two states differ. It gives each of them a usable response.",
            "bn": "মুসলিমে বর্ণিত, নবী ﷺ বলেছেন: মুমিনের সব ব্যাপারই কল্যাণকর, আর এটা মুমিন ছাড়া আর কারও ভাগ্যে নেই। স্বস্তি এলে সে শোকর করে, আর তা তার জন্য কল্যাণ; কষ্ট এলে সে সবর করে, আর তা-ও তার জন্য কল্যাণ। হাদিসটি অস্বীকার করে না যে দুই অবস্থা আলাদা। বরং প্রতিটির জন্য কাজে লাগানোর মতো একটা জবাব দিয়ে দেয়।"
          },
          {
            "en": "Practically, hardship is usually survived in units smaller than the whole. A supplication transmitted from the Prophet ﷺ asks Allah to make what is difficult easy, since He alone makes the difficult easy when He wills. Alongside that, take the next required step only, keep the obligatory prayers even when they feel empty, tell one trustworthy person, and accept treatment and help without treating them as a failure of faith.",
            "bn": "বাস্তবে কষ্ট সাধারণত একবারে পুরোটা নয়, ছোট ছোট ভাগে পার করতে হয়। নবী ﷺ থেকে বর্ণিত একটি দোয়ায় আল্লাহর কাছে চাওয়া হয়, তিনি যেন কঠিনকে সহজ করে দেন, কারণ তিনি চাইলে একমাত্র তিনিই কঠিনকে সহজ করেন। এর পাশাপাশি শুধু সামনের জরুরি পদক্ষেপটুকু নিন। মন শূন্য লাগলেও ফরজ নামাজগুলো ধরে রাখুন। বিশ্বস্ত একজনকে খুলে বলুন। আর চিকিৎসা ও সাহায্য নিন, এগুলোকে ঈমানের ব্যর্থতা ভাববেন না।"
          }
        ]
      }
    ]
  }
});
