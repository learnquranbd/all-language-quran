/**
 * Tadabbur long-form articles — surah 87.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "87:14-17": {
    "sections": [
      {
        "h": {
          "en": "Success, Declared",
          "bn": "সাফল্য ঘোষিত"
        },
        "p": [
          {
            "en": "Qad aflaha man tazakka — truly he has succeeded who purifies himself. The particle qad with the past tense announces the matter as settled: this person has already succeeded; the result is in. Falah is the Quran's word for genuine success — thriving, attaining, lasting — the same word the adhan calls to five times a day: hayya alal-falah. Surah al-A'la, which opens in 87:1 by commanding glorification of the name of the Lord Most High, here defines what winning actually is.",
            "bn": "কাদ আফলাহা মান তাযাক্কা — নিশ্চিতই সে সফল হয়েছে, যে নিজেকে পবিত্র করেছে। অতীত কালের ক্রিয়ার সাথে কাদ শব্দটি বিষয়টিকে মীমাংসিত ঘোষণা করে: এই মানুষটি ইতিমধ্যেই সফল; ফলাফল এসে গেছে। ফালাহ হলো প্রকৃত সাফল্যের জন্য কুরআনের শব্দ — সমৃদ্ধ হওয়া, অর্জন করা, টিকে থাকা — সেই একই শব্দ, যার দিকে আযান দিনে পাঁচবার ডাকে: হাইয়া আলাল-ফালাহ। সূরা আল-আ'লা, যা 87:1 আয়াতে মহান সর্বোচ্চ রবের নামের তাসবীহর নির্দেশ দিয়ে শুরু হয়, এখানে সংজ্ঞা দেয় — জেতা আসলে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Verbs in Order",
          "bn": "ক্রমে তিন ক্রিয়া"
        },
        "p": [
          {
            "en": "The definition has three verbs in sequence: purified himself, tazakka; remembered the name of his Lord, dhakara isma rabbihi; and prayed, fa-salla. The commentators read the order as instructive: cleansing comes first — from shirk, from sins, from the diseases of the heart — then remembrance fills the cleaned space, and prayer carries the remembrance into the limbs. The fa before salla binds prayer tightly to remembrance: the prayer meant here flows from a heart already turned.",
            "bn": "সংজ্ঞাটিতে পরপর তিনটি ক্রিয়া: নিজেকে পবিত্র করল — তাযাক্কা; তার রবের নাম স্মরণ করল — যাকারা ইসমা রাব্বিহি; আর নামায পড়ল — ফাসাল্লা। মুফাসসিরগণ এই ক্রমকে শিক্ষণীয় হিসেবে পড়েন: আগে পরিশুদ্ধি — শিরক থেকে, গুনাহ থেকে, অন্তরের ব্যাধি থেকে — তারপর স্মরণ সেই পরিষ্কার জায়গাটি ভরে তোলে, আর নামায সেই স্মরণকে অঙ্গ-প্রত্যঙ্গে বয়ে নেয়। সাল্লার আগের ফা নামাযকে স্মরণের সাথে শক্ত করে বাঁধে: এখানে যে নামাযের কথা, তা এমন অন্তর থেকে প্রবাহিত হয় যা আগেই ফিরেছে।"
          },
          {
            "en": "Some early commentators, as al-Qurtubi records, connected these verses to the charity given at the end of Ramadan and the Eid prayer that follows it — purification through sadaqat al-fitr, remembrance in the takbirs, then the prayer. The wording itself remains general, and the general reading stands: any purifying, any remembering, any praying enters the verse. The specific application shows how concretely the early generations read their Quran — they looked for days on the calendar where the three verbs lined up.",
            "bn": "কিছু প্রাচীন মুফাসসির, যেমন আল-কুরতুবী লিপিবদ্ধ করেন, এই আয়াতগুলোকে যুক্ত করেছেন রমযানের শেষে দেওয়া দানের সাথে এবং তার পরের ঈদের নামাযের সাথে — সাদাকাতুল ফিতরের মাধ্যমে পরিশুদ্ধি, তাকবীরে স্মরণ, তারপর নামায। শব্দগুলো নিজে অবশ্য সাধারণই রয়ে গেছে, আর সাধারণ পাঠটিই বহাল: যেকোনো পবিত্রকরণ, যেকোনো স্মরণ, যেকোনো নামায আয়াতটিতে ঢোকে। নির্দিষ্ট প্রয়োগটি দেখায় প্রথম প্রজন্মগুলো তাদের কুরআন কতটা হাতে-কলমে পড়ত — তারা পঞ্জিকায় এমন দিন খুঁজত যেখানে তিনটি ক্রিয়া এক সারিতে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Honest Diagnosis",
          "bn": "সৎ রোগনির্ণয়"
        },
        "p": [
          {
            "en": "Then the surah turns from definition to diagnosis: bal tu'thirun al-hayata ad-dunya — rather, you prefer the life of this world. The verb is athara, to prefer, to choose one thing over another; the charge is not that people use the world but that, choice after choice, they rank it first. The address is plural and undefended; the Quran states it as a plain fact about us. No argument is offered, because none is needed — our calendars and accounts testify.",
            "bn": "তারপর সূরাটি সংজ্ঞা থেকে রোগনির্ণয়ে ফেরে: বাল তু'সিরূনাল-হায়াতাদ-দুনইয়া — বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও। ক্রিয়াটি আসারা — প্রাধান্য দেওয়া, এক জিনিসকে আরেকটির উপরে বেছে নেওয়া; অভিযোগটি এই নয় যে মানুষ দুনিয়া ব্যবহার করে, বরং এই যে, পছন্দের পর পছন্দে তারা একেই প্রথমে রাখে। সম্বোধন বহুবচনে, কোনো আত্মপক্ষ ছাড়া; কুরআন এটিকে আমাদের সম্পর্কে সরল সত্য হিসেবেই বলে। কোনো যুক্তি হাজির করা হয় না, কারণ দরকারও নেই — আমাদের সময়সূচি আর হিসাবের খাতাই সাক্ষ্য দেয়।"
          },
          {
            "en": "The correction follows in the same breath: wal-akhiratu khayrun wa abqa — while the Hereafter is better and more lasting. Two comparatives, each aimed at one leg of the preference. We choose the world because it seems good: the Hereafter is better. We cling to it because it is here: the Hereafter lasts. 42:36 makes the same pairing — what is with Allah is better and more enduring for those who believe and rely upon their Lord.",
            "bn": "সংশোধনটি আসে একই নিঃশ্বাসে: ওয়াল-আখিরাতু খাইরুন ওয়া আবকা — অথচ আখিরাত উত্তম ও অধিক স্থায়ী। দুটি তুলনাবাচক শব্দ, প্রতিটির নিশানা প্রাধান্যের এক-একটি পা। আমরা দুনিয়া বেছে নিই কারণ তা ভালো মনে হয়: আখিরাত উত্তম। আমরা তা আঁকড়ে ধরি কারণ তা হাতের কাছে: আখিরাত টিকে থাকে। 42:36 একই জোড় তৈরি করে — আল্লাহর কাছে যা আছে তা উত্তম ও অধিক স্থায়ী, তাদের জন্য যারা ঈমান আনে ও তাদের রবের উপর ভরসা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "In the First Scriptures",
          "bn": "প্রাচীন সহীফাসমূহে"
        },
        "p": [
          {
            "en": "The surah then discloses the age of this teaching: indeed this is in the former scriptures, the scriptures of Ibrahim (AS) and Musa (AS), as 87:18-19 declare. The commentators discuss what this points back to; the nearest passage is this very definition of success and diagnosis of preference. The claim is quietly enormous: the core spiritual arithmetic — purify, remember, pray, and do not trade the lasting for the immediate — was not new with the Quran. It is the oldest message there is, restated.",
            "bn": "এরপর সূরাটি এই শিক্ষার বয়স প্রকাশ করে: নিশ্চয়ই এ কথা আছে পূর্ববর্তী সহীফাগুলোতে — ইবরাহীম (আঃ) ও মূসা (আঃ)-এর সহীফায় — 87:18-19। এই ইঙ্গিত কোন কথার দিকে, তা নিয়ে মুফাসসিরগণ আলোচনা করেন; নিকটতম অনুচ্ছেদটি হলো সাফল্যের এই সংজ্ঞা আর প্রাধান্যের এই রোগনির্ণয়ই। দাবিটি নীরবে বিশাল: মূল আধ্যাত্মিক পাটিগণিত — পবিত্র হও, স্মরণ করো, নামায পড়ো, আর স্থায়ীকে তাৎক্ষণিকের বিনিময়ে বেচে দিয়ো না — কুরআনের সাথে নতুন আসেনি। এ হলো প্রাচীনতম বার্তা, নতুন করে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Surah He Kept Close",
          "bn": "যে সূরা তিনি কাছে রাখতেন"
        },
        "p": [
          {
            "en": "Muslim records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ used to recite Sabbih isma rabbika al-a'la and Hal ataka hadithul-ghashiyah in the two Eid prayers and in the Friday prayer, and when Eid and Friday fell on the same day he recited them both in both. The choice means the ummah's largest regular gatherings repeatedly heard success redefined. On the days most given to celebration and appearance, the congregation was told again what winning is: purification, remembrance, prayer.",
            "bn": "মুসলিম নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ দুই ঈদের নামাযে ও জুমার নামাযে সাব্বিহিসমা রাব্বিকাল-আ'লা এবং হাল আতাকা হাদীসুল-গাশিয়াহ পড়তেন, আর ঈদ ও জুমা একই দিনে পড়লে দুটিতেই দুটিই পড়তেন। এই বাছাইয়ের মানে — উম্মাহর সবচেয়ে বড় নিয়মিত সমাবেশগুলো বারবার শুনেছে সাফল্যের নতুন সংজ্ঞা। যে দিনগুলো সবচেয়ে বেশি উদযাপন ও সাজসজ্জার, সেই দিনগুলোতেই জামাতকে আবার বলা হয়েছে জেতা কাকে বলে: পরিশুদ্ধি, স্মরণ, নামায।"
          }
        ]
      },
      {
        "h": {
          "en": "Running the Definition",
          "bn": "সংজ্ঞাটি চালু করা"
        },
        "p": [
          {
            "en": "The three verbs convert directly into a day's architecture. Purify: keep tawbah current, and let charity clean what wealth accumulates. Remember: attach the name of your Lord to thresholds — waking, eating, leaving, returning. Pray: guard the five, and let them be the remembrance walking. Then use the diagnosis as a lens on small choices: in each trade-off between the immediate and the lasting, notice which way the hand reaches. The preference is corrected in increments, not in proclamations.",
            "bn": "তিনটি ক্রিয়া সরাসরি একটি দিনের স্থাপত্যে রূপ নেয়। পবিত্র করুন: তাওবা হালনাগাদ রাখুন, আর সম্পদ যা জমায় দান তা পরিষ্কার করুক। স্মরণ করুন: আপনার রবের নাম চৌকাঠগুলোতে জুড়ে দিন — ঘুম ভাঙা, খাওয়া, বেরোনো, ফেরা। নামায পড়ুন: পাঁচ ওয়াক্ত পাহারা দিন, আর সেগুলোই হোক হেঁটে চলা স্মরণ। তারপর রোগনির্ণয়টিকে ছোট ছোট পছন্দের লেন্স বানান: তাৎক্ষণিক আর স্থায়ীর প্রতিটি দর-কষাকষিতে খেয়াল করুন হাত কোন দিকে বাড়ে। প্রাধান্যের সংশোধন হয় কিস্তিতে কিস্তিতে, ঘোষণায় নয়।"
          },
          {
            "en": "The verse's tense is also its comfort. Success is declared already attained by whoever does these things — not deferred until wealth, recognition or ease arrive. A person of modest means who purifies, remembers and prays has succeeded, in the present tense, on the authority of the One who defines the term. What remains is the choice the surah names, made freshly each day, between the thing in the hand and the thing that endures.",
            "bn": "আয়াতের কালই তার সান্ত্বনা। যে এই কাজগুলো করে, তার সাফল্য ইতিমধ্যে অর্জিত বলে ঘোষিত — সম্পদ, স্বীকৃতি বা স্বাচ্ছন্দ্য আসা পর্যন্ত মুলতবি নয়। সামান্য সামর্থ্যের যে মানুষ পবিত্র হয়, স্মরণ করে ও নামায পড়ে, সে সফল — বর্তমান কালে, সেই সত্তার কর্তৃত্বে যিনি শব্দটির সংজ্ঞা দেন। বাকি থাকে সূরাটির নাম-করা সেই পছন্দ, যা প্রতিদিন নতুন করে করতে হয় — হাতের জিনিস আর টিকে-থাকা জিনিসের মধ্যে।"
          }
        ]
      }
    ]
  }
});
