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
          "bn": "প্রশ্ন, রায় নয়"
        },
        "p": [
          {
            "en": "Surah al-Ma'un opens in four words: a-ra'ayta alladhi yukadhdhibu bid-din. Ibn Kathir reads the address as spoken to the Prophet ﷺ — have you seen the one who denies the Recompense — and explains that din here means the Hereafter, the reckoning and the final reward. The form is a question, and a question does something a statement cannot: it hands the listener the job of looking, and of recognising what he sees.",
            "bn": "সূরা আল-মাঊন শুরু হয় চারটি শব্দে: 'আরাআইতাল্লাযী ইউকাযযিবু বিদ্‌দীন'। ইবনে কাসীরের মতে কথাটি নবী ﷺ-কে উদ্দেশ করে বলা: তুমি কি তাকে দেখেছ, যে কর্মফলকে অস্বীকার করে? তিনি বুঝিয়ে দেন, এখানে 'দীন' মানে আখিরাত, হিসাব আর শেষ প্রতিদান। কথাটি এসেছে প্রশ্নের আকারে, আর প্রশ্ন এমন কিছু করে যা সাধারণ বক্তব্য পারে না: তাকিয়ে দেখার আর যা চোখে পড়ছে তা চিনে নেওয়ার ভার সে শ্রোতার হাতেই তুলে দেয়।"
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
            "bn": "সূরাটি চাইলে আকীদার কথা দিয়ে জবাব দিতে পারত; জবাব দিয়েছে আচরণ দিয়ে। ১০৭:২ বলছে, এ সেই লোক, যে এতিমকে ধাক্কা দিয়ে তাড়িয়ে দেয়। ইবনে কাসীরের ব্যাখ্যায় এর মানে: এতিমের ওপর জুলুম করা, তার হক আটকে রাখা, তাকে খেতে না দেওয়া, তার সঙ্গে সদয় ব্যবহার না করা। ১০৭:৩ যোগ করে, সে মিসকীনকে খাওয়াতে উৎসাহও দেয় না। দ্বিতীয় অভিযোগটি খেয়াল করুন: অভিযোগ এই নয় যে সে খাওয়ায় না; অভিযোগ হলো, খাওয়ানোর জন্য সে উৎসাহটুকুও দেয় না। এই না-করাটাই প্রমাণ।"
          },
          {
            "en": "Ibn Kathir sets this beside 89:17-18, where the charge is that you do not honour the orphan and do not urge one another to feed the poor. The same pairing appears in 69:33-34, which describes a man who did not believe in Allah the Most Great and did not urge the feeding of the poor. Three separate places join disbelief in the Reckoning to a hand that closes toward the weak, which makes the link a Quranic principle rather than an image.",
            "bn": "ইবনে কাসীর এর পাশে রাখেন ৮৯:১৭-১৮ আয়াত, যেখানে অভিযোগ হলো: তোমরা এতিমকে সম্মান করো না, আর মিসকীনকে খাওয়াতে একে অপরকে উৎসাহ দাও না। একই জোড়া আছে ৬৯:৩৩-৩৪ আয়াতেও। সেখানে এমন এক লোকের কথা, যে মহান আল্লাহর প্রতি ঈমান আনত না এবং মিসকীনকে খাওয়াতে উৎসাহ দিত না। তিনটি আলাদা জায়গায় কুরআন হিসাব দিবসকে অস্বীকার করার সঙ্গে জুড়ে দিয়েছে দুর্বলের সামনে বন্ধ হয়ে যাওয়া হাতকে। তাই এই সম্পর্ক নিছক উপমা নয়, কুরআনের একটি নীতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Then the Sting",
          "bn": "তারপর আসল খোঁচা"
        },
        "p": [
          {
            "en": "Anyone who stops at 107:1 misses where the surah is going. 107:4 is two words — fa-waylun lil-musallin — and they turn the whole thing around: so woe to those who pray. Not to those who abandoned prayer; to those who perform it. The fa at the front makes it a consequence of what came before, which means the denial described in the opening verses is now being found inside the congregation rather than outside it.",
            "bn": "যে ১০৭:১-এ এসে থেমে যায়, সে বুঝতেই পারে না সূরাটি কোন দিকে যাচ্ছে। ১০৭:৪ মাত্র দুটি শব্দ, 'ফাওয়াইলুল লিল মুসাল্লীন', আর এই দুই শব্দই পুরো কথাটা উল্টে দেয়: অতএব দুর্ভোগ সেই নামাজিদের জন্য। যারা নামাজ ছেড়ে দিয়েছে তাদের জন্য নয়; যারা নামাজ পড়ে তাদের জন্য। শুরুর 'ফা' একে আগের কথার পরিণতি বানিয়ে দেয়। অর্থাৎ প্রথম আয়াতগুলোতে যে অস্বীকারের কথা এসেছে, তা এখন পাওয়া যাচ্ছে জামাতের বাইরে নয়, ভেতরেই।"
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
            "bn": "১০৭:৫ তাদের পরিচয় দেয়: 'আল্লাযীনা হুম আন সালাতিহিম সাহূন', যারা নিজেদের নামাজের ব্যাপারে উদাসীন। ইবনে কাসীর আতা ইবনে দীনারের একটি কথা উদ্ধৃত করেছেন: সব প্রশংসা আল্লাহর, যিনি বলেছেন 'আন সালাতিহিম সাহূন', অর্থাৎ নামাজের ব্যাপারে উদাসীন; বলেননি, যারা নামাজের ভেতরে অন্যমনস্ক। এই একটি অব্যয়ই সবাইকে বাঁচিয়ে দিয়েছে। নামাজের মধ্যে মন অন্যদিকে চলে যাওয়া প্রত্যেক মুসল্লিরই চেনা অভিজ্ঞতা। কিন্তু নামাজের ব্যাপারে উদাসীন হওয়া একটা সিদ্ধান্ত, আর সেটা নেওয়া হয় নামাজের বাইরে।"
          },
          {
            "en": "Ibn Kathir then lists what the heedlessness can be: leaving the prayer altogether, praying it entirely outside its time, habitually delaying it to the end of its window, failing its conditions and pillars, or praying without humility and attention. He says the wording takes in all of these, and that whoever has any of these traits has a share of the verse, while whoever has all of them has completed his share of it.",
            "bn": "তারপর ইবনে কাসীর গুনে দেখান, এই উদাসীনতা কী কী রূপে আসতে পারে: নামাজ একেবারে ছেড়ে দেওয়া; ওয়াক্ত পুরোপুরি পার করে পড়া; অভ্যাসবশত ওয়াক্তের একেবারে শেষ পর্যন্ত দেরি করা; নামাজের শর্ত ও রুকন ঠিকমতো আদায় না করা; কিংবা বিনয় আর মনোযোগ ছাড়া পড়া। তিনি বলেন, আয়াতের ভাষা এর সবগুলোকেই শামিল করে। যার মধ্যে এর কোনো একটি আছে, আয়াতের একটা ভাগ তার ওপরও বর্তায়। আর যার মধ্যে সবগুলোই আছে, আয়াতে তার ভাগ পুরোপুরি পূর্ণ হয়ে গেছে।"
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
            "bn": "১০৭:৬ উদ্দেশ্যটা খুলে বলে: 'আল্লাযীনা হুম ইউরাঊন', যারা লোক দেখানোর জন্য করে। কুরআন ৪:১৪২ আয়াতে মুনাফিকদের বেলায়ও এই একই ক্রিয়া ব্যবহার করেছে: তারা নামাজে দাঁড়ায় আলস্য নিয়ে, মানুষকে দেখানোর জন্য। এরপর ১০৭:৭ মাত্র দুটি শব্দে সূরাটি শেষ করে: 'ওয়া ইয়ামনাঊনাল মাঊন', আর তারা ছোটখাটো সাহায্যটুকুও আটকে রাখে। ইবনে মাসঊদ (রাঃ)-কে জিজ্ঞেস করা হয়েছিল, 'মাঊন' কী? তিনি বলেন: মানুষ একে অপরকে যা দেয়, যেমন কুড়াল, হাঁড়ি, বালতি।"
          },
          {
            "en": "That is a startling place for a surah about denying the Day of Judgement to end. Not at a great crime, but at a neighbour turned away from the door over a borrowed pot that would have come back intact. The argument has come full circle: the man in 107:1 denies the Reckoning, and the proof offered is never a doctrine he stated. It is a series of small refusals that cost him almost nothing to make.",
            "bn": "কিয়ামতকে অস্বীকার করা নিয়ে যে সূরা, তার শেষটা এখানে এসে হওয়া সত্যিই চমকে দেয়। কোনো বড় অপরাধে নয়; সূরা শেষ হয় এক প্রতিবেশীর কাছে, যে একটা হাঁড়ি ধার চাইতে এসে দরজা থেকে ফিরে গেছে, অথচ হাঁড়িটা অক্ষতই ফেরত আসত। কথাটা ঘুরে এসে শুরুতেই মিলেছে: ১০৭:১-এর লোকটি হিসাব দিবসকে অস্বীকার করে, কিন্তু সূরাটি প্রমাণ হিসেবে কোথাও তার মুখে বলা কোনো আকীদা হাজির করে না। হাজির করে একের পর এক ছোট ছোট 'না', যা বলতে তার প্রায় কিছুই খরচ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah as a Checklist",
          "bn": "সূরাটি যেন নিজেকে যাচাইয়ের তালিকা"
        },
        "p": [
          {
            "en": "Read as a whole, the seven verses give a test with two halves that most people would rather keep apart. The first half asks how the weak are treated when nothing is owed and nothing is watching. The second asks what the prayer is actually for — whether it is guarded when nobody would notice its absence, and whether it is prayed at its time or squeezed in at the end.",
            "bn": "পুরো সূরাটা একসঙ্গে পড়লে সাতটি আয়াতে একটা পরীক্ষা পাওয়া যায়, যার দুটি অংশ বেশির ভাগ মানুষ আলাদা করে রাখতেই পছন্দ করে। প্রথম অংশের প্রশ্ন: যখন কারও কাছে কোনো দায় নেই, কেউ দেখছেও না, তখন মানুষ দুর্বলের সঙ্গে কেমন ব্যবহার করে? দ্বিতীয় অংশের প্রশ্ন: নামাজ আসলে কীসের জন্য? যেখানে নামাজ না পড়লে কেউ টেরও পেত না, সেখানেও কি তা যত্ন করে রক্ষা করা হয়? আর তা কি ওয়াক্তমতো পড়া হয়, নাকি একেবারে শেষ মুহূর্তে কোনোমতে সেরে ফেলা হয়?"
          },
          {
            "en": "The repair the surah implies is unusually cheap. Lend the thing. Answer the message. Take the food over. Urge somebody else to help even where you cannot. And guard one prayer this week at its first time for no reason anyone can see, since al-Ma'un's whole complaint is about deeds that were done for an audience and kindnesses that were withheld because there wasn't one.",
            "bn": "সূরাটি যে প্রতিকারের ইঙ্গিত দেয়, তার খরচ আশ্চর্য রকম কম। জিনিসটা ধার দিন। মেসেজের উত্তর দিন। খাবারটা পৌঁছে দিন। নিজে না পারলেও অন্য কাউকে সাহায্য করতে উৎসাহ দিন। আর এ সপ্তাহে অন্তত এক ওয়াক্ত নামাজ আউয়াল ওয়াক্তে পড়ুন, এমনভাবে যে এর পেছনে কোনো কারণ কারও চোখে পড়বে না। কারণ আল-মাঊনের পুরো অভিযোগটাই এমন আমল নিয়ে, যা করা হয়েছিল লোক দেখানোর জন্য, আর এমন উপকার নিয়ে, যা আটকে রাখা হয়েছিল দেখার কেউ ছিল না বলে।"
          }
        ]
      }
    ]
  }
});
