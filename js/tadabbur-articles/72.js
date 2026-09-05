/**
 * Tadabbur long-form articles — surah 72.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "72:18": {
    "sections": [
      {
        "h": {
          "en": "Where the Verse Sits",
          "bn": "আয়াতটি কোথায় বসে আছে"
        },
        "p": [
          {
            "en": "Surah al-Jinn opens with the report of a company of jinn who heard the Quran, and from 72:16 onwards the surah runs a chain of clauses opening with anna, that. That if they had kept straight on the way, abundant water would have been given them. 72:17 then breaks the pattern to add a purpose and a warning: whoever turns away from the remembrance of his Lord will be put into arduous punishment. Then this one. The commentators differ over where the jinn's own report ends and the address to the Prophet ﷺ begins.",
            "bn": "সূরা আল-জিন শুরু হয় একদল জিনের বিবরণ দিয়ে, যারা কুরআন শুনেছিল; আর 72:16 থেকে সূরাটি একের পর এক এমন বাক্য চালায় যেগুলো শুরু হয় 'আন্না' — অর্থাৎ 'এই যে' — দিয়ে। এই যে, তারা সোজা পথে অবিচল থাকলে তাদের প্রচুর পানি দেওয়া হতো। 72:17 সেই ধারা ছেড়ে যোগ করে উদ্দেশ্য ও সতর্কবাণী: যে তার প্রতিপালকের স্মরণ থেকে মুখ ফিরিয়ে নেয়, তাকে কঠিন শাস্তিতে ঢোকানো হবে। তারপর এই আয়াতটি। জিনদের নিজেদের বিবরণ কোথায় শেষ হয়েছে আর নবী ﷺ-কে সম্বোধন কোথায় শুরু হয়েছে, তা নিয়ে মুফাসসিরগণের মতভেদ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Al-Masajid",
          "bn": "'আল-মাসাজিদ' শব্দটি"
        },
        "p": [
          {
            "en": "Al-masajid is the plural of masjid, an Arabic noun of place built from sajada, to prostrate: the place where prostration happens. The plural appears six times in the Quran. 2:114 condemns those who prevent Allah's name being mentioned in them, 2:187 mentions retreat inside them, 9:17 and 9:18 speak of who may tend them, and 22:40 lists them after monasteries, churches and synagogues. In those five the reference is plainly to buildings.",
            "bn": "'আল-মাসাজিদ' হলো 'মাসজিদ'-এর বহুবচন — 'সাজাদা' (সিজদা করা) থেকে গঠিত আরবি স্থানবাচক বিশেষ্য, অর্থাৎ যেখানে সিজদা হয় সেই জায়গা। বহুবচন রূপটি কুরআনে ছয়বার এসেছে। 2:114 তাদের নিন্দা করে যারা সেখানে আল্লাহর নাম স্মরণে বাধা দেয়, 2:187-এ আসে সেখানে ই'তিকাফের কথা, 9:17 ও 9:18 বলে কারা সেগুলোর রক্ষণাবেক্ষণ করতে পারে, আর 22:40 সেগুলোর নাম নেয় খ্রিষ্টান সন্ন্যাসাশ্রম, গির্জা ও ইহুদি উপাসনালয়ের পরে। এই পাঁচ জায়গায় ইঙ্গিত স্পষ্টভাবেই ইমারতের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Classical Readings",
          "bn": "প্রাচীন ব্যাখ্যাগুলো"
        },
        "p": [
          {
            "en": "Here the mufassirun record more than one reading, and the tradition has never collapsed them into one. The most widespread takes the word as it reads in those other five places: the buildings raised for the worship of Allah, all of them, which is why this verse is carved on so many mosque walls. A second reading narrows it to al-Masjid al-Haram in particular, since the people first addressed circled that house while calling on names other than Allah.",
            "bn": "এখানে মুফাসসিরগণ একাধিক ব্যাখ্যা লিপিবদ্ধ করেছেন, আর ঐতিহ্য কখনোই সেগুলোকে একটিতে মিলিয়ে ফেলেনি। সবচেয়ে প্রচলিত ব্যাখ্যা শব্দটিকে ওই পাঁচ জায়গার মতোই ধরে: আল্লাহর ইবাদতের জন্য নির্মিত ইমারতসমূহ, সবগুলোই — এ কারণেই আয়াতটি এত মসজিদের দেয়ালে খোদাই করা থাকে। দ্বিতীয় ব্যাখ্যা একে সংকুচিত করে বিশেষভাবে মসজিদুল হারামে, কারণ যাদের উদ্দেশে কথাটি প্রথম বলা হয়, তারা সেই ঘর তাওয়াফ করত আল্লাহ ছাড়া অন্য নাম ডাকতে ডাকতে।"
          },
          {
            "en": "A third reading leaves architecture behind altogether. On that view al-masajid are the places of prostration on the body itself, the limbs a person sets on the ground when he goes down. A fourth takes the word as the acts or the occasions of prostration rather than any location at all. These are not ranked here, because the classical works do not rank them uniformly, and because each of them arrives at the same prohibition in the second half of the verse.",
            "bn": "তৃতীয় ব্যাখ্যা ইমারতের প্রসঙ্গ পুরোপুরি ছেড়ে দেয়। সেই পাঠ অনুযায়ী 'আল-মাসাজিদ' হলো দেহেরই সিজদার জায়গাগুলো — সিজদায় যাওয়ার সময় মানুষ যে অঙ্গগুলো মাটিতে রাখে। চতুর্থ ব্যাখ্যা শব্দটিকে কোনো স্থান নয়, বরং সিজদার কাজ বা সময় হিসেবে নেয়। এখানে এগুলোর কোনো ক্রম নির্ধারণ করা হচ্ছে না, কারণ প্রাচীন গ্রন্থগুলোও এক অভিন্ন ক্রম দেয় না, আর কারণ প্রতিটি ব্যাখ্যাই আয়াতের দ্বিতীয়ার্ধে গিয়ে একই নিষেধাজ্ঞায় পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seven Bones",
          "bn": "সাতটি হাড়"
        },
        "p": [
          {
            "en": "The third reading rests on a hadith. Al-Bukhari and Muslim narrate from Ibn Abbas (RA) that the Prophet ﷺ said he had been commanded to prostrate on seven bones: the forehead, and he pointed with his hand to his nose, the two hands, the two knees, and the ends of the two feet. Read into our verse, that turns the sentence portable. If the places of prostration are parts of you, then what belongs to Allah is not left behind at the door.",
            "bn": "তৃতীয় ব্যাখ্যাটি দাঁড়িয়ে আছে একটি হাদীসের উপর। ইমাম বুখারী ও ইমাম মুসলিম ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমাকে সাতটি হাড়ের উপর সিজদা করার নির্দেশ দেওয়া হয়েছে — কপাল, আর তিনি হাত দিয়ে নিজের নাকের দিকে ইশারা করলেন, দুই হাত, দুই হাঁটু এবং দুই পায়ের অগ্রভাগ। এই ব্যাখ্যা আয়াতের ভেতরে বসালে বাক্যটি বহনযোগ্য হয়ে যায়। সিজদার জায়গাগুলো যদি আপনারই অঙ্গ হয়, তবে যা আল্লাহর, তা দরজার বাইরে ফেলে আসা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Call Anyone With Him",
          "bn": "তাঁর সঙ্গে কাউকে ডেকো না"
        },
        "p": [
          {
            "en": "The second half is a consequence drawn from the first. The Arabic states a plain fact — the masajid are for Allah — and then comes fa, and so: do not call upon anyone along with Allah. The object is ahadan, indefinite, and an indefinite noun under a negation in Arabic means not one, of any kind whatever. The verse does not forbid calling on a particular rival that the audience had in mind. It forbids the entire category.",
            "bn": "আয়াতের দ্বিতীয়ার্ধ প্রথমার্ধ থেকে টানা একটি পরিণতি। আরবি প্রথমে একটি সরল সত্য ঘোষণা করে — মাসজিদগুলো আল্লাহর জন্য — তারপর আসে 'ফা', অর্থাৎ 'কাজেই': আল্লাহর সঙ্গে অন্য কাউকে ডেকো না। কর্মপদটি 'আহাদান', যা অনির্দিষ্ট; আর আরবিতে নেতিবাচক বাক্যে অনির্দিষ্ট বিশেষ্যের অর্থ দাঁড়ায় — একজনও নয়, কোনো ধরনেরই নয়। আয়াতটি শ্রোতাদের মনে থাকা কোনো নির্দিষ্ট প্রতিদ্বন্দ্বীকে ডাকতে নিষেধ করছে না। এটি গোটা শ্রেণিটিকেই নিষেধ করছে।"
          },
          {
            "en": "Notice the verb. Tad'u is from du'a, calling and asking, which is wider than the prescribed prayer. Notice too that the prohibition is not phrased as instead of Allah but ma'a Allah, along with Allah, so the failure being closed off is the addition rather than the substitution. 72:20 then puts the same vocabulary into the Prophet's own mouth: say, I call only upon my Lord, and I do not associate anyone with Him.",
            "bn": "ক্রিয়াপদটি লক্ষ করুন। 'তাদ্‌ঊ' এসেছে 'দুআ' থেকে — ডাকা ও চাওয়া, যা নির্ধারিত সালাতের চেয়ে ব্যাপক। আরও লক্ষ করুন, নিষেধাজ্ঞাটি 'আল্লাহর পরিবর্তে' বলে নয়, বলা হয়েছে 'মাআল্লাহ' — আল্লাহর সঙ্গে; কাজেই যে ভুলটি বন্ধ করা হচ্ছে তা প্রতিস্থাপন নয়, বরং সংযোজন। এরপর 72:20 একই শব্দভাণ্ডার তুলে দেয় স্বয়ং নবী ﷺ-এর মুখে: বলো, আমি কেবল আমার প্রতিপালককেই ডাকি, আর তাঁর সঙ্গে কাউকে শরিক করি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Inside and Outside",
          "bn": "ইমারতের ভেতরে ও বাইরে"
        },
        "p": [
          {
            "en": "The readings converge on one discipline. Inside the building it is the easier half: a mosque is not a place to be seen in, to lobby in, or to attach one's hopes in to any name but His. Outside it the third reading keeps the question open all day — the same limbs, the same Owner, and the same question about where the heart's asking actually goes at the moment it wants something badly.",
            "bn": "ব্যাখ্যাগুলো এসে মেলে একটিই অনুশীলনে। ইমারতের ভেতরে অংশটি সহজতর: মসজিদ এমন জায়গা নয় যেখানে নিজেকে দেখানো যায়, দলবাজি করা যায়, কিংবা তাঁর নাম ছাড়া অন্য কোনো নামে আশা বাঁধা যায়। আর বাইরে গেলে তৃতীয় ব্যাখ্যাটি প্রশ্নটিকে সারা দিন খোলা রাখে — সেই একই অঙ্গ, সেই একই মালিক, আর সেই একই প্রশ্ন: যে মুহূর্তে হৃদয় তীব্রভাবে কিছু চায়, তখন তার চাওয়াটি আসলে কোথায় যায়।"
          }
        ]
      }
    ]
  }
});
