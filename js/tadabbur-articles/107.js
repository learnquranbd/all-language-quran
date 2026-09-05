/**
 * Tadabbur long-form articles — surah 107.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "107:1": {
    "sections": [
      {
        "h": {
          "en": "A Question, Not a Verdict",
          "bn": "একটি প্রশ্ন, রায় নয়"
        },
        "p": [
          {
            "en": "Surah al-Ma'un opens in four words: a-ra'ayta alladhi yukadhdhibu bid-din. Ibn Kathir reads the address as spoken to the Prophet ﷺ — have you seen the one who denies the Recompense — and explains that din here means the Hereafter, the reckoning and the final reward. The form is a question, and a question does something a statement cannot: it hands the listener the job of looking, and of recognising what he sees.",
            "bn": "সূরা আল-মাঊন শুরু হয় চার শব্দে: 'আরাআইতাল্লাযী ইউকাযযিবু বিদ্‌দীন'। ইবনে কাসীর সম্বোধনটিকে পড়েন নবী ﷺ-এর উদ্দেশে বলা হিসেবে — তুমি কি তাকে দেখেছ, যে কর্মফলকে অস্বীকার করে — আর ব্যাখ্যা করেন, এখানে 'দীন' মানে আখিরাত, হিসাব ও চূড়ান্ত প্রতিদান। গঠনটি প্রশ্নবোধক, আর প্রশ্ন এমন একটি কাজ করে যা বিবৃতি পারে না: তা শ্রোতার হাতেই তুলে দেয় তাকিয়ে দেখার এবং যা দেখছে তা চিনে নেওয়ার দায়িত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "The Evidence Is Behaviour",
          "bn": "প্রমাণ হলো আচরণ"
        },
        "p": [
          {
            "en": "The surah could have answered with a creed and instead answers with conduct. 107:2 says that is the one who drives away the orphan — Ibn Kathir glosses it as oppressing him and withholding his due, not feeding him and not being kind to him. 107:3 adds that he does not urge the feeding of the poor. Note the second charge carefully: not that he fails to feed, but that he does not even encourage it. The omission itself is the evidence.",
            "bn": "সূরাটি চাইলে কোনো আকীদা দিয়ে জবাব দিতে পারত, কিন্তু জবাব দেয় আচরণ দিয়ে। 107:2 বলে, সে-ই সেই লোক যে এতিমকে ধাক্কা দিয়ে সরিয়ে দেয় — ইবনে কাসীর এর ব্যাখ্যা করেন তার ওপর জুলুম করা ও তার প্রাপ্য আটকে রাখা, তাকে না খাওয়ানো ও তার সঙ্গে সদয় না হওয়া হিসেবে। 107:3 যোগ করে, সে মিসকীনকে খাওয়াতে উৎসাহও দেয় না। দ্বিতীয় অভিযোগটি মন দিয়ে দেখুন: সে খাওয়াতে ব্যর্থ হয় — এটুকু নয়, বরং সে উৎসাহ পর্যন্ত দেয় না। এই না-করাটিই প্রমাণ।"
          },
          {
            "en": "Ibn Kathir sets this beside 89:17-18, where the charge is that you do not honour the orphan and do not urge one another to feed the poor. The same pairing appears in 69:33-34, which describes a man who did not believe in Allah the Most Great and did not urge the feeding of the poor. Three separate places join disbelief in the Reckoning to a hand that closes toward the weak, which makes the link a Quranic principle rather than an image.",
            "bn": "ইবনে কাসীর এর পাশে রাখেন 89:17-18, যেখানে অভিযোগ হলো — তোমরা এতিমকে সম্মান করো না এবং একে অপরকে মিসকীনকে খাওয়াতে উৎসাহ দাও না। একই জোড়া দেখা যায় 69:33-34-এ, যা এমন একজনের বর্ণনা দেয় যে মহান আল্লাহর প্রতি ঈমান আনত না এবং মিসকীনকে খাওয়াতে উৎসাহ দিত না। তিনটি আলাদা জায়গায় হিসাব দিবসের অস্বীকৃতিকে যুক্ত করা হয়েছে দুর্বলের প্রতি বন্ধ হয়ে যাওয়া হাতের সঙ্গে — ফলে সংযোগটি কেবল উপমা নয়, একটি কুরআনি নীতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Sting",
          "bn": "এরপর হুলটি"
        },
        "p": [
          {
            "en": "Anyone who stops at 107:1 misses where the surah is going. 107:4 is two words — fa-waylun lil-musallin — and they turn the whole thing around: so woe to those who pray. Not to those who abandoned prayer; to those who perform it. The fa at the front makes it a consequence of what came before, which means the denial described in the opening verses is now being found inside the congregation rather than outside it.",
            "bn": "যে কেউ 107:1-এ থেমে যায়, সে সূরাটির গন্তব্য হারিয়ে ফেলে। 107:4 মাত্র দুই শব্দ — 'ফাওয়াইলুল লিল মুসাল্লীন' — আর তা গোটা বিষয়টিকে ঘুরিয়ে দেয়: অতএব দুর্ভোগ সেই নামায আদায়কারীদের। যারা নামায ছেড়ে দিয়েছে তাদের নয়; যারা তা আদায় করে তাদের। শুরুর 'ফা' একে আগের কথার পরিণতি বানিয়ে দেয়; অর্থাৎ শুরুর আয়াতগুলোতে বর্ণিত অস্বীকৃতিটি এখন খুঁজে পাওয়া যাচ্ছে জামাতের বাইরে নয়, ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "About Their Prayer, Not In It",
          "bn": "নামায নিয়ে, নামাযের ভেতরে নয়"
        },
        "p": [
          {
            "en": "107:5 identifies them: alladhina hum an salatihim sahun, those who are heedless about their prayer. Ibn Kathir preserves the remark of Ata ibn Dinar: all praise is due to Allah, who said an salatihim sahun and did not say those who are absent-minded in their prayer. The preposition saves everyone. Distraction that arrives inside the prayer is the common experience of every worshipper; heedlessness about the prayer is a decision made outside it.",
            "bn": "107:5 তাদের চিনিয়ে দেয়: 'আল্লাযীনা হুম আন সালাতিহিম সাহূন' — যারা নিজেদের নামায সম্পর্কে উদাসীন। ইবনে কাসীর আতা ইবনে দীনারের মন্তব্যটি ধরে রাখেন: সমস্ত প্রশংসা আল্লাহর, যিনি বলেছেন 'আন সালাতিহিম সাহূন', আর বলেননি 'যারা তাদের নামাযের ভেতরে অন্যমনস্ক'। অব্যয়টিই সবাইকে বাঁচিয়ে দেয়। নামাযের ভেতরে এসে পড়া অমনোযোগিতা প্রত্যেক মুসল্লিরই সাধারণ অভিজ্ঞতা; কিন্তু নামায সম্পর্কে উদাসীনতা এমন এক সিদ্ধান্ত, যা নেওয়া হয় নামাযের বাইরে।"
          },
          {
            "en": "Ibn Kathir then lists what the heedlessness can be: leaving the prayer altogether, praying it entirely outside its time, habitually delaying it to the end of its window, failing its conditions and pillars, or praying without humility and attention. He says the wording takes in all of these, and that whoever has any of these traits has a share of the verse, while whoever has all of them has completed his share of it.",
            "bn": "এরপর ইবনে কাসীর তালিকা দেন, এই উদাসীনতা কী কী হতে পারে: নামায একেবারেই ছেড়ে দেওয়া, নির্ধারিত ওয়াক্তের সম্পূর্ণ বাইরে পড়া, অভ্যাসগতভাবে ওয়াক্তের একেবারে শেষে ঠেলে দেওয়া, শর্ত ও রুকন পূর্ণ না করা, কিংবা বিনয় ও মনোযোগ ছাড়া পড়া। তিনি বলেন, আয়াতের শব্দগুলো এসবই ধারণ করে; আর যার মধ্যে এর কোনো একটি বৈশিষ্ট্য আছে, সে আয়াতটির একটি ভাগ পায় — আর যার মধ্যে সবগুলোই আছে, সে তার ভাগ পূর্ণ করে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, and the Withheld Bucket",
          "bn": "লোক-দেখানো, আর আটকে রাখা বালতি"
        },
        "p": [
          {
            "en": "107:6 names the motive: alladhina hum yura'un, those who make a show. It is the same verb the Quran uses of the hypocrites in 4:142, who stand for prayer sluggishly to be seen by people. Then 107:7 ends the surah in two words: wa yamna'una al-ma'un, and they withhold small assistance. Ibn Mas'ud (RA), asked what al-ma'un is, answered: it is what people give one another, like an axe, a pot and a bucket.",
            "bn": "107:6 উদ্দেশ্যটির নাম বলে দেয়: 'আল্লাযীনা হুম ইউরাঊন' — যারা লোক-দেখানোর জন্য করে। কুরআন 4:142-এ মুনাফিকদের সম্পর্কে এই ক্রিয়াটিই ব্যবহার করে, যারা মানুষকে দেখানোর জন্য আলস্যভরে নামাযে দাঁড়ায়। এরপর 107:7 সূরাটি শেষ করে দুই শব্দে: 'ওয়া ইয়ামনাঊনাল মাঊন' — আর তারা সামান্য সাহায্যটুকুও আটকে রাখে। ইবনে মাসঊদ (রাঃ)-কে জিজ্ঞেস করা হয়েছিল 'মাঊন' কী; তিনি উত্তর দিলেন: এ হলো মানুষ একে অপরকে যা দেয় — যেমন কুড়াল, হাঁড়ি আর বালতি।"
          },
          {
            "en": "That is a startling place for a surah about denying the Day of Judgement to end. Not at a great crime, but at a neighbour turned away from the door over a borrowed pot that would have come back intact. The argument has come full circle: the man in 107:1 denies the Reckoning, and the proof offered is never a doctrine he stated. It is a series of small refusals that cost him almost nothing to make.",
            "bn": "কিয়ামত অস্বীকার নিয়ে লেখা একটি সূরার শেষ হওয়ার জন্য জায়গাটি চমকে দেওয়ার মতো। কোনো বিরাট অপরাধে নয়, বরং ধার চাওয়া একটি হাঁড়ির জন্য দরজা থেকে ফিরিয়ে দেওয়া এক প্রতিবেশীতে — যে হাঁড়িটি অক্ষত অবস্থায়ই ফেরত আসত। যুক্তিটি বৃত্ত পূর্ণ করেছে: 107:1-এর লোকটি হিসাব দিবসকে অস্বীকার করে, আর প্রমাণ হিসেবে কখনোই তার মুখে বলা কোনো মতবাদ পেশ করা হয় না। পেশ করা হয় একগুচ্ছ ছোট ছোট প্রত্যাখ্যান, যেগুলো করতে তার প্রায় কিছুই খরচ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah as a Checklist",
          "bn": "সূরাটি একটি তালিকা হিসেবে"
        },
        "p": [
          {
            "en": "Read as a whole, the seven verses give a test with two halves that most people would rather keep apart. The first half asks how the weak are treated when nothing is owed and nothing is watching. The second asks what the prayer is actually for — whether it is guarded when nobody would notice its absence, and whether it is prayed at its time or squeezed in at the end.",
            "bn": "সম্পূর্ণ হিসেবে পড়লে সাতটি আয়াত এমন এক পরীক্ষা দেয়, যার দুই অর্ধেককে অধিকাংশ মানুষ আলাদা রাখতেই পছন্দ করে। প্রথম অর্ধেক জিজ্ঞেস করে, কোনো দায় নেই এবং কেউ দেখছে না — এমন অবস্থায় দুর্বলের সঙ্গে আচরণ কেমন হয়। দ্বিতীয় অর্ধেক জিজ্ঞেস করে, নামায আসলে কীসের জন্য — তা কি তখনও রক্ষা করা হয় যখন তার অনুপস্থিতি কেউ খেয়ালই করত না, আর তা কি ওয়াক্তে পড়া হয়, নাকি একেবারে শেষে ঠেসে ঢোকানো হয়।"
          },
          {
            "en": "The repair the surah implies is unusually cheap. Lend the thing. Answer the message. Take the food over. Urge somebody else to help even where you cannot. And guard one prayer this week at its first time for no reason anyone can see, since al-Ma'un's whole complaint is about deeds that were done for an audience and kindnesses that were withheld because there wasn't one.",
            "bn": "সূরাটি যে সংশোধনের ইঙ্গিত দেয়, তা অস্বাভাবিকভাবে সস্তা। জিনিসটি ধার দিন। বার্তার উত্তর দিন। খাবারটুকু পৌঁছে দিন। যেখানে নিজে পারছেন না, সেখানে অন্যকে সাহায্যের জন্য উৎসাহ দিন। আর এই সপ্তাহে অন্তত একটি নামায প্রথম ওয়াক্তে পড়ুন এমনভাবে, যার কোনো দৃশ্যমান কারণ কেউ দেখতে পাবে না — কারণ আল-মাঊনের গোটা অভিযোগই সেসব আমল নিয়ে, যা দর্শকের জন্য করা হয়েছিল, আর সেসব ইহসান নিয়ে, যা দর্শক ছিল না বলেই আটকে রাখা হয়েছিল।"
          }
        ]
      }
    ]
  }
});
