/**
 * Tadabbur long-form articles — surah 75.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "75:2": {
    "sections": [
      {
        "h": {
          "en": "A Second Oath, a Soul",
          "bn": "দ্বিতীয় কসম, এক মন"
        },
        "p": [
          {
            "en": "Wa la uqsimu bin-nafsil-lawwama: and I swear by the self-reproaching soul. The verse is four Arabic words, as long as the verse before it, and it repeats that verse's opening, la uqsimu, now joined by wa, and. In 75:1 the oath is by the Day of Resurrection; here it is by a soul. The surah then turns straight to the doubter: does man think that We will not assemble his bones? (75:3). The two oaths stand at the threshold of that question.",
            "bn": "ওয়া লা উকসিমু বিন-নাফসিল লাওয়ামা: আর আমি কসম করছি সেই মনের, যে নিজেকে ধিক্কার দেয়। আয়াতটি আরবিতে চারটি শব্দ, আগের আয়াতের সমান। আগের আয়াতের শুরুটাই এখানে ফিরে এসেছে, লা উকসিমু, সঙ্গে শুধু ওয়া, অর্থাৎ আর। ৭৫:১ আয়াতে কসম ক্বিয়ামত দিবসের, এখানে এক মনের। তারপরই সূরা সোজা চলে যায় সন্দেহকারীর দিকে: মানুষ কি মনে করে, আমি তার হাড়গুলো জোড়া লাগাতে পারব না? (৭৫:৩)। কসম দুটি দাঁড়িয়ে আছে সেই প্রশ্নের দোরগোড়ায়।"
          },
          {
            "en": "Al-Muyassar reads 75:2 to 75:4 as a single thought. Allah swore by the Day of reckoning and recompense, and swore by the believing, God-fearing soul that blames its owner for leaving acts of obedience and for committing ruinous sins, that people will be raised. The thing sworn to is not spoken in the verse; al-Muyassar supplies it from what follows. As-Sa'di sees a fitting pair: in these two verses Allah has joined an oath by the recompense, an oath upon the recompense, and an oath by the soul that deserves it.",
            "bn": "মুয়াসসার ৭৫:২ থেকে ৭৫:৪ পর্যন্ত আয়াতগুলোকে একটানা একটি কথা হিসেবে পড়ে। আল্লাহ কসম করেছেন হিসাব ও প্রতিদানের দিনের, আর কসম করেছেন সেই মুমিন, মুত্তাকি মনের, যে ইবাদত ছেড়ে দিলে আর ধ্বংসাত্মক গুনাহ করে বসলে তার মালিককে দোষ দেয়। কসমটা কী নিয়ে, তা আয়াতে বলা নেই। মুয়াসসার পরের আয়াত থেকে তা বের করে আনে: মানুষকে আবার জীবিত করে ওঠানো হবেই। সা'দী এখানে চমৎকার এক জোড় দেখেন। এ দুই আয়াতে আল্লাহ একসঙ্গে কসম করেছেন প্রতিদানের, কসম করেছেন প্রতিদান নিয়েই, আর কসম করেছেন সেই মনের, যে প্রতিদানের হকদার।"
          }
        ]
      },
      {
        "h": {
          "en": "Is the Soul Sworn By?",
          "bn": "মনের কসম, নাকি কসম নয়?"
        },
        "p": [
          {
            "en": "The first disagreement is whether this verse is an oath at all. At-Tabari reports from Qatada that Allah swore by both together, the Day and the soul, and the Ibn Kathir abridgement adds that the same is reported from Ibn Abbas and Sa'id ibn Jubayr. Others held that He swore by the Day of Resurrection and did not swear by the reproaching soul, so that the verse means: and I do not swear by the reproaching soul. At-Tabari gives this second view from al-Hasan, through Qatada.",
            "bn": "প্রথম মতভেদ হলো, এ আয়াত আদৌ কসম কি না। তাবারী কাতাদা থেকে বর্ণনা করেন, আল্লাহ দুটিরই কসম করেছেন, দিনেরও, মনেরও। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ যোগ করে, একই কথা ইবন আব্বাস (রাঃ) ও সাঈদ ইবন জুবাইর থেকেও বর্ণিত। অন্যদের মত ভিন্ন। তাঁদের কথা, আল্লাহ কসম করেছেন ক্বিয়ামত দিবসের, ধিক্কারদাতা মনের কসম করেননি। তখন আয়াতের অর্থ দাঁড়ায়: আর আমি ধিক্কারদাতা মনের কসম করছি না। এই দ্বিতীয় মতটি তাবারী এনেছেন হাসান থেকে, কাতাদার সূত্রে।"
          },
          {
            "en": "Al-Qurtubi records the same split. One view he reports is that Allah swore by the Day of Resurrection to magnify its standing, and did not swear by the soul. He notes that the reciters do not differ over how this second verse is read, and that on the reading of the reciter Ibn Kathir, who read the first verse differently, the first is an oath and the second is not. Another view he reports makes the second la a fresh rebuttal followed by a fresh oath by the soul. He then quotes ath-Tha'labi: the sound view is that He swore by both.",
            "bn": "কুরতুবীর কাছেও একই বিভাজন। তিনি এক মত উল্লেখ করেন: আল্লাহ ক্বিয়ামত দিবসের মর্যাদা বড় করে দেখাতে তার কসম করেছেন, মনের কসম করেননি। তিনি জানান, এই দ্বিতীয় আয়াত কীভাবে পড়া হবে তা নিয়ে কারীদের মধ্যে কোনো মতভেদ নেই। কারী ইবন কাসীর অবশ্য প্রথম আয়াতটি ভিন্নভাবে পড়েছেন, আর সেই কিরাআত অনুযায়ী প্রথমটি কসম, দ্বিতীয়টি নয়। কুরতুবী আরেকটি মতও আনেন। সে মতে দ্বিতীয় লা নতুন করে আরেকটি প্রতিবাদ, তারপর মনের নামে নতুন কসম। শেষে তিনি সা'লাবীর কথা উদ্ধৃত করেন: সঠিক কথা হলো, আল্লাহ দুটিরই কসম করেছেন।"
          },
          {
            "en": "At-Tabari takes the side of both oaths and argues for it. The authorities are agreed, he says, that 75:1 is an oath, so 75:2, built the same way, is an oath too, unless some proof shows that one is an oath and the other a plain statement. He adds that every reciter reads this verse with la standing apart from uqsimu, and he rejects as impermissible the reading of the first verse with the lam joined to the verb. Al-Baghawi likewise calls the view that He swore by both the sound one.",
            "bn": "তাবারী দুই কসমের পক্ষেই দাঁড়ান, আর তার পক্ষে যুক্তিও দেন। তাঁর কথা, ৭৫:১ যে কসম, তাতে প্রামাণ্য আলিমরা একমত। তাহলে একই গড়নের ৭৫:২-ও কসম, যতক্ষণ না কোনো দলিল দেখায় যে একটি কসম আর অন্যটি নিছক বিবরণ। তিনি আরও বলেন, সব কারীই এ আয়াতে লা-কে উকসিমু থেকে আলাদা করে পড়েন। প্রথম আয়াতে লাম-কে ক্রিয়ার সঙ্গে জুড়ে পড়ার কিরাআতকে তিনি অগ্রহণযোগ্য বলে বাতিল করেন। বাগাভীও বলেন, আল্লাহ দুটিরই কসম করেছেন, এ মতটিই সঠিক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Work of a Small La",
          "bn": "ছোট্ট এক লা-এর কাজ"
        },
        "p": [
          {
            "en": "If both are oaths, why does each open with la, which usually means no? Al-Baghawi reports three answers. His own is that la is a connective with no negating force in either verse: I swear by the Day and by the soul. Abu Bakr ibn Ayyash, as al-Baghawi quotes him, called it an emphasis of the oath, as when a speaker says la wallahi, no, by Allah. Al-Farra', as al-Baghawi gives him, held that la rebuts the talk of the denying polytheists, and then the oath begins afresh.",
            "bn": "দুটিই যদি কসম হয়, তবে প্রতিটির শুরুতে লা কেন, যার সাধারণ অর্থ না? বাগাভী তিনটি জবাব আনেন। তাঁর নিজের মত, দুই আয়াতেই লা একটি সংযোজক শব্দ, তাতে না-বোধক কোনো অর্থ নেই। অর্থ দাঁড়ায়: আমি কসম করছি দিনের, আর কসম করছি মনের। বাগাভীর উদ্ধৃতিতে আবু বকর ইবন আইয়াশ একে বলেছেন কসমের জোর বাড়ানো, যেমন কেউ বলে, লা ওয়াল্লাহি, না, আল্লাহর কসম। আর বাগাভীর বর্ণনায় ফাররার মত, অস্বীকারকারী মুশরিকদের কথার প্রতিবাদ এই লা। তারপর নতুন করে কসম শুরু।"
          },
          {
            "en": "At-Tabari prefers the rebuttal. La answers something a people had already said, and he grounds this in ordinary speech: when someone says la wallahi, I did not do it, the la rejects the other's words and wallahi begins the oath. So the sense is: No, the matter is not as you say, people, that Allah will not raise His servants alive after their death; I swear by the Day of Resurrection. The Ibn Kathir abridgement explains la as emphasis of a negation, here the refutation of the ignorant who claim that bodies will not be raised.",
            "bn": "তাবারী প্রতিবাদের ব্যাখ্যাটিকেই অগ্রাধিকার দেন। তাঁর মতে লা কোনো সম্প্রদায়ের আগে বলা কথার জবাব। এর ভিত্তি তিনি খোঁজেন মানুষের রোজকার কথায়। কেউ যখন বলে, লা ওয়াল্লাহি, আমি এ কাজ করিনি, তখন লা অন্যের কথাকে নাকচ করে, আর ওয়াল্লাহি দিয়ে কসম শুরু হয়। তাই অর্থ দাঁড়ায়: না, হে লোকেরা, ব্যাপারটা তোমাদের কথামতো নয় যে মৃত্যুর পর আল্লাহ তাঁর বান্দাদের আবার জীবিত করবেন না। আমি কসম করছি ক্বিয়ামত দিবসের। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ লা-কে দেখে না-বোধক কথায় জোর দেওয়া হিসেবে। এখানে সেই না হলো অজ্ঞদের দাবি খণ্ডন, যারা বলে দেহ আর ওঠানো হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Lawwama, Much Given to Blame",
          "bn": "লাওয়ামা: বারবার দোষ ধরে যে"
        },
        "p": [
          {
            "en": "Lawwama comes from lawm, blame, in a form that stresses frequency. Al-Qurtubi lists the senses. It may mean the soul that blames, la'ima; or the soul possessed of blame; or the soul that blames itself for what it blames in others. On these readings, he says, the word is praise, and an oath by it is fitting. He also gives, from Ibn Abbas, malumah madhmumah, blamed and censured, which is dispraise; that, he notes, is the reading of those who deny the verse is an oath, since a disobedient soul has no standing to be sworn by.",
            "bn": "লাওয়ামা শব্দটি এসেছে লাওম থেকে, যার অর্থ দোষারোপ। শব্দের গড়নেই বারবার করার জোর আছে। কুরতুবী অর্থগুলো সাজিয়ে দেন। হতে পারে এর মানে দোষারোপকারী মন, লাইমা। হতে পারে দোষারোপের অধিকারী মন। কিংবা সেই মন, যে অন্যের যে দোষ ধরে, সে দোষে নিজেকেও ধরে। এসব অর্থে শব্দটি প্রশংসা, আর তার কসম করা মানানসই। ইবন আব্বাস (রাঃ) থেকে তিনি আরেকটি অর্থও আনেন: মালূমা মাযমূমা, অর্থাৎ নিন্দিত ও ধিক্কৃত। এটা নিন্দাসূচক। কুরতুবী জানান, যারা আয়াতটিকে কসম মানেন না, এটা তাঁদেরই ব্যাখ্যা, কারণ নাফরমান মনের এমন মর্যাদা নেই যে তার কসম করা হবে।"
          },
          {
            "en": "The early explanations, as at-Tabari collects them, start from there. Sa'id ibn Jubayr and Ikrima both said: it blames over good and over evil. Al-Baghawi adds from them that it has no patience in ease or in hardship. Sa'id asked Ibn Abbas about the verse, and he answered: it is an-nafs al-la'um, the soul much given to blame. Mujahid said it regrets what has passed and blames itself for it. Al-Baghawi gives his wording as a soul that says: if only I had done it, if only I had not.",
            "bn": "তাবারী প্রথম যুগের ব্যাখ্যাগুলো একসঙ্গে জড়ো করেন, আর সেগুলো শুরু হয় এখান থেকেই। সাঈদ ইবন জুবাইর ও ইকরিমা দুজনেই বলেছেন: এ মন ভালো আর মন্দ, দুয়ের জন্যই দোষ ধরে। বাগাভী তাঁদের সূত্রে যোগ করেন, সুখে বা দুঃখে, কোনো অবস্থাতেই সে ধৈর্য ধরতে পারে না। সাঈদ আয়াতটি নিয়ে ইবন আব্বাস (রাঃ)-কে জিজ্ঞেস করেছিলেন। তিনি উত্তর দেন: আন-নাফসুল লাউম, অর্থাৎ খুব দোষ ধরা মন। মুজাহিদ বলেছেন, যা চলে গেছে তার জন্য সে অনুতপ্ত হয় আর নিজেকে দোষ দেয়। বাগাভী তাঁর কথাটা আনেন এভাবে: এ মন বলে, ইশ, যদি করতাম! ইশ, যদি না করতাম!"
          },
          {
            "en": "Al-Qurtubi gives Mujahid's line in a fuller shape: it blames itself for an evil deed, asking why it did it, and for a good deed, asking why it did not do more. Al-Farra' widens the circle to everyone. In al-Qurtubi's and al-Baghawi's reports, he said there is no soul, righteous or wicked, that does not blame itself. The one who did well blames itself for not doing more; the one who did wrong blames itself for not having held back. The blame is the same word; what it looks back on differs.",
            "bn": "কুরতুবী মুজাহিদের কথাটা আরও খুলে বলেন। মন্দ কাজের জন্য এ মন নিজেকে দোষ দেয়, কেন করলাম। ভালো কাজের জন্যও দোষ দেয়, কেন আরও বেশি করলাম না। ফাররা বৃত্তটাকে বড় করে সবাইকে ভেতরে নিয়ে আসেন। কুরতুবী ও বাগাভীর বর্ণনায় তিনি বলেছেন, নেককার হোক বা বদকার, এমন কোনো মন নেই যে নিজেকে দোষ দেয় না। যে ভালো করেছে, সে নিজেকে দোষ দেয়, কেন আরও বেশি করেনি। যে মন্দ করেছে, সে নিজেকে দোষ দেয়, কেন নিজেকে সামলে রাখেনি। দোষারোপ একই, শুধু পেছনে ফিরে সে কী দেখছে, সেটা আলাদা।"
          }
        ]
      },
      {
        "h": {
          "en": "What Did I Mean by That?",
          "bn": "আসলে কী চেয়েছিলাম?"
        },
        "p": [
          {
            "en": "A first group of readings makes the soul a believer's. Al-Qurtubi attributes it to Ibn Abbas, Mujahid, al-Hasan and others: the believer is never seen except blaming himself, reproaching himself over what he meant. He quotes al-Hasan in full: By Allah, it is the soul of the believer. You never see the believer but blaming himself: what did I mean by my words? What did I mean by my eating? What did I mean by what I said to myself? And the wicked man does not hold himself to account.",
            "bn": "এক ধারার ব্যাখ্যায় এ মন মুমিনের মন। কুরতুবী এই মত দেন ইবন আব্বাস (রাঃ), মুজাহিদ, হাসান ও আরও অনেকের নামে: মুমিনকে আপনি সবসময় নিজেকে দোষ দিতেই দেখবেন, নিজের নিয়ত নিয়ে নিজেকেই তিরস্কার করছে। হাসানের কথাটা তিনি পুরোটাই উদ্ধৃত করেন: আল্লাহর কসম, এ মুমিনের মন। মুমিনকে আপনি নিজেকে দোষ দেওয়া ছাড়া দেখবেন না। আমার এ কথায় আমি কী চেয়েছিলাম? এ খাওয়ায় কী চেয়েছিলাম? মনে মনে যা বললাম, তাতে কী চেয়েছিলাম? আর পাপাচারী নিজের হিসাব নেয় না।"
          },
          {
            "en": "Al-Baghawi has the same saying with a sharper close: the wicked man goes straight ahead, neither holding himself to account nor reproaching himself. Al-Muyassar, as already seen, takes this line: the believing, God-fearing soul that blames its owner for leaving obedience and doing ruinous sins. Ma'arif al-Qur'an, citing Ibn Abbas and al-Hasan al-Basri, says the oath honours believing souls that take account of their deeds and regret their shortcomings. Here the blame is the believer's own daily habit, and the oath raises its worth.",
            "bn": "বাগাভী একই কথা আনেন, তবে শেষটা আরও ধারালো: পাপাচারী সোজা সামনে এগিয়ে যায়, নিজের হিসাবও নেয় না, নিজেকে তিরস্কারও করে না। মুয়াসসারও, আগেই দেখা গেছে, এ ধারার: সেই মুমিন, মুত্তাকি মন, যে ইবাদত ছাড়লে আর ধ্বংসাত্মক গুনাহ করলে মালিককে দোষ দেয়। মাআরিফুল কুরআন ইবন আব্বাস (রাঃ) ও হাসান বসরীর বরাতে বলে, এ কসম সেই মুমিন মনগুলোর সম্মান, যারা নিজের আমলের হিসাব নেয় আর ত্রুটির জন্য অনুতপ্ত হয়। এ ব্যাখ্যায় দোষ ধরাটা মুমিনের রোজকার অভ্যাস, আর কসম তার মর্যাদা বাড়িয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Blame That Arrives Too Late",
          "bn": "যে আফসোস আসে দেরিতে"
        },
        "p": [
          {
            "en": "Other reports place the blame later. Ibn Kathir, in his Arabic tafsir, relates that Juwaybir said word had reached them from al-Hasan: there is nobody among the people of the heavens and the earth who will not blame himself on the Day of Resurrection. So al-Hasan is cited for both readings, the believer's daily self-reproach and the universal blame of that Day, by different routes, and neither report is ranked here above the other. Muqatil, in al-Qurtubi and al-Baghawi, made it the disbeliever's soul, blaming itself in the next life and grieving over what it neglected in the matter of Allah.",
            "bn": "অন্য কিছু বর্ণনা দোষারোপের সময়টা পিছিয়ে দেয়। ইবন কাসীর তাঁর আরবি তাফসীরে জুওয়াইবিরের সূত্রে আনেন, হাসান থেকে তাঁদের কাছে কথাটা পৌঁছেছে: আসমান ও জমিনের বাসিন্দাদের মধ্যে এমন কেউ নেই, যে ক্বিয়ামতের দিন নিজেকে দোষ দেবে না। তাহলে হাসানের নামে দুটি ব্যাখ্যাই এসেছে, ভিন্ন ভিন্ন সূত্রে। একটি মুমিনের প্রতিদিনের আত্মসমালোচনা, অন্যটি সেদিন সবার নিজেকে দোষ দেওয়া। এখানে কোনোটিকে অন্যটির উপরে রাখা হচ্ছে না। কুরতুবী ও বাগাভীর বর্ণনায় মুকাতিলের মত, এটি কাফিরের মন। আখিরাতে সে নিজেকে দোষ দেবে, আর আল্লাহর ব্যাপারে যা অবহেলা করেছে তার জন্য হা-হুতাশ করবে।"
          },
          {
            "en": "Two more early glosses lean the same way. Qatada said lawwama means al-fajira, the wicked soul; at-Tabari, Ibn Kathir and al-Baghawi all carry it. Ibn Abbas, in the report through Ali ibn Abi Talha, said al-madhmuma, the censured soul; at-Tabari and Ibn Kathir carry that. On these readings the verse describes the state of a soul before its Lord, the kind of soul the surah goes on to address in 75:3. It licenses nothing against any living person or community, and hands no reader a verdict on anyone else's soul.",
            "bn": "প্রথম যুগের আরও দুটি ব্যাখ্যা একই দিকে ঝোঁকে। কাতাদা বলেছেন, লাওয়ামা মানে আল-ফাজিরা, পাপাচারী মন। তাবারী, ইবন কাসীর ও বাগাভী তিনজনই কথাটা এনেছেন। আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) বলেছেন, আল-মাযমূমা, নিন্দিত মন। তাবারী ও ইবন কাসীর এটা এনেছেন। এসব ব্যাখ্যায় আয়াতটি রবের সামনে এক মনের অবস্থা বর্ণনা করে, যে ধরনের মনকে সূরা ৭৫:৩ আয়াতে সম্বোধন করে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। অন্য কারও মন সম্পর্কে রায় দেওয়ার অধিকারও কোনো পাঠককে দেয় না।"
          },
          {
            "en": "As-Sa'di holds the readings together. The lawwama, he says, is every soul, good and wicked alike. It is so called for its frequent wavering and self-blame and its failure to hold to any state, and because at death it blames its owner for what it did. Yet the believer's soul blames its owner in this world, for neglect or for falling short in some right owed, or for heedlessness. At-Tabari and al-Baghawi, on the Day in 75:1, cite al-Mughira ibn Shu'ba: people say the Resurrection, but a person's resurrection is his death.",
            "bn": "সা'দী ব্যাখ্যাগুলোকে এক সুতোয় গাঁথেন। তাঁর মতে লাওয়ামা হলো সব মন, ভালো হোক বা মন্দ। নাম লাওয়ামা, কারণ সে বারবার দোলাচলে পড়ে, বারবার নিজেকে দোষ দেয়, কোনো এক অবস্থায় স্থির থাকে না। আরেক কারণ, মৃত্যুর সময় সে তার মালিককে তার কাজের জন্য দোষ দেয়। তবে মুমিনের মন দুনিয়াতেই মালিককে দোষ দেয়, অবহেলার জন্য, কারও হক আদায়ে ত্রুটির জন্য, কিংবা গাফলতির জন্য। ৭৫:১ আয়াতের দিন প্রসঙ্গে তাবারী ও বাগাভী মুগীরা ইবন শু'বা (রাঃ)-এর কথা আনেন: লোকে ক্বিয়ামত ক্বিয়ামত বলে, অথচ মানুষের ক্বিয়ামত তো তার মৃত্যু।"
          }
        ]
      },
      {
        "h": {
          "en": "Near Meanings, Tabari's Verdict",
          "bn": "কাছাকাছি অর্থ, তাবারীর রায়"
        },
        "p": [
          {
            "en": "At-Tabari closes his survey with a judgement. These sayings, he writes, though their wording differs, are close in meaning, and the sense most like the apparent text of the revelation is that it blames its owner over good and evil and regrets what has passed. Ibn Kathir ends his Arabic entry with the same verdict, quoted from at-Tabari. The verdict is theirs. The believer's daily self-reproach, the blame every soul will feel on the Day, and the denier's late regret all stay in the record, each with its names.",
            "bn": "তাবারী তাঁর পর্যালোচনা শেষ করেন এক রায় দিয়ে। তিনি লেখেন, এসব কথার শব্দ আলাদা হলেও অর্থ কাছাকাছি। আর নাজিল হওয়া আয়াতের বাহ্যিক অর্থের সঙ্গে সবচেয়ে বেশি মেলে এই অর্থ: এ মন ভালো-মন্দ দুয়ের জন্যই মালিককে দোষ দেয়, আর যা চলে গেছে তার জন্য অনুতপ্ত হয়। ইবন কাসীরও তাঁর আরবি তাফসীরে তাবারীর এই রায় উদ্ধৃত করে আলোচনা শেষ করেন। রায়টা তাঁদের। মুমিনের প্রতিদিনের আত্মসমালোচনা, সেদিন প্রতিটি মনের নিজেকে দোষ দেওয়া, আর অবিশ্বাসীর দেরিতে আসা আফসোস, তিনটি ব্যাখ্যাই যার যার বর্ণনাকারীর নামসহ সংরক্ষিত থাকে।"
          },
          {
            "en": "The verses that follow give the oath its target. Man thinks his bones will not be gathered (75:3); Allah is able even to shape his fingertips again (75:4); yet man wants to go on in wrongdoing ahead of him (75:5) and asks when the Day will be (75:6). Later in the surah, 75:14 says that man will be a witness over himself. None of the tafsirs consulted for this verse attaches a hadith to it, and al-Hasan's words above are his own, not a hadith of the Prophet ﷺ.",
            "bn": "পরের আয়াতগুলো দেখিয়ে দেয়, কসম কোন দিকে তাক করা। মানুষ ভাবে, তার হাড়গুলো আর জোড়া লাগানো হবে না (৭৫:৩)। অথচ আল্লাহ তার আঙুলের ডগা পর্যন্ত আবার নিখুঁত করে গড়তে সক্ষম (৭৫:৪)। তবু মানুষ সামনেও পাপাচার চালিয়ে যেতে চায় (৭৫:৫), আর জিজ্ঞেস করে, সেই দিন কবে (৭৫:৬)। সূরার পরের দিকে ৭৫:১৪ আয়াত বলে, মানুষ নিজেই নিজের উপর সাক্ষী। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেয়নি। উপরে হাসানের যে কথা এসেছে, তা তাঁর নিজের কথা, নবী ﷺ-এর হাদিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Later Map of the Self",
          "bn": "পরের যুগে আঁকা নফসের নকশা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an adds a scheme it credits to Sufi terminology. The noble Sufis, it says, describe three stages of the self. First is an-nafs al-ammara, the self that urges evil, with 12:53 as proof. Second is an-nafs al-lawwama, reached by doing good and by discipline and striving: aware of its flaws, regretting them, not yet cut off from them. Third is an-nafs al-mutma'inna, the self at peace, the Qur'an's own word at 89:27. This is Ma'arif's report of the Sufis; none of the other commentaries consulted here gives it.",
            "bn": "মাআরিফুল কুরআন এখানে একটি নকশা যোগ করে, আর সেটাকে সুফিদের পরিভাষা বলেই পরিচয় দেয়। তার বর্ণনায় সম্মানিত সুফিরা নফসের তিনটি স্তরের কথা বলেন। প্রথম স্তর আন-নাফসুল আম্মারা, যে মন মন্দের দিকে ঠেলে, প্রমাণ ১২:৫৩। দ্বিতীয় স্তর আন-নাফসুল লাওয়ামা। নেক আমল আর রিয়াযত-মুজাহাদার মধ্য দিয়ে মন এখানে পৌঁছায়। নিজের ত্রুটি সে চেনে, তার জন্য আফসোস করে, তবে সেগুলো থেকে এখনো পুরোপুরি মুক্ত হয়নি। তৃতীয় স্তর আন-নাফসুল মুতমাইন্না, প্রশান্ত মন, শব্দটি কুরআনেরই, ৮৯:২৭ আয়াতে। এটি মাআরিফুল কুরআনের মুখে সুফিদের কথা। এখানে দেখা অন্য কোনো তাফসীরে এ নকশা নেই।"
          },
          {
            "en": "Across every reading the soul in this verse is a soul that looks back at itself. What the commentators separate is the timing and the fruit. Al-Hasan's believer asks what he meant while there is still time to mean better. Muqatil's soul asks too, but in the next life, where the asking can only grieve. Mujahid and al-Farra' show that even good deeds leave room for the question why not more. Set between the Day and the doubter of 75:3, the verse puts the reader's own conscience on the stand.",
            "bn": "যে ব্যাখ্যাই ধরি, এ আয়াতের মন এমন মন, যে পেছন ফিরে নিজের দিকে তাকায়। তাফসীরকারদের তফাত দুই জায়গায়: কখন তাকায়, আর তাতে কী ফল হয়। হাসানের মুমিন নিজেকে জিজ্ঞেস করে, কী চেয়েছিলাম? তখনো তার হাতে সময় আছে নিয়তটা শুধরে নেওয়ার। মুকাতিলের মনও প্রশ্ন করে, তবে আখিরাতে, যেখানে প্রশ্ন শুধু হা-হুতাশই বাড়ায়। মুজাহিদ ও ফাররা দেখান, নেক আমলের পরেও প্রশ্ন থাকে: আরও কেন করলাম না? ক্বিয়ামত দিবস আর ৭৫:৩ আয়াতের সন্দেহকারীর মাঝখানে বসানো এ আয়াত পাঠকের নিজের বিবেককেই কাঠগড়ায় দাঁড় করায়।"
          }
        ]
      }
    ]
  },
  "75:7": {
    "sections": [
      {
        "h": {
          "en": "A Scene Instead of a Date",
          "bn": "তারিখের বদলে একটি দৃশ্য"
        },
        "p": [
          {
            "en": "Fa-idha bariqa al-basar: so when the sight is dazzled. Three Arabic words, and the opening particle fa ties them to what came just before. In 75:5 man wants to go on sinning in the days ahead of him, and in 75:6 he asks, ayyana yawm al-qiyamah, when is the Day of Resurrection? At-Tabari reads that question as procrastination: he asks it while putting off his repentance, and so Allah made the matter clear to him with this verse and the two after it. Al-Qurtubi likewise says the verse carries the sense of an answer to what man asked.",
            "bn": "ফা ইযা বারিকাল বাসার: অতঃপর যখন দৃষ্টি ধাঁধিয়ে যাবে। আরবিতে মাত্র তিনটি শব্দ। শুরুর 'ফা' অব্যয়টি এগুলোকে ঠিক আগের কথার সঙ্গে বেঁধে দেয়। ৭৫:৫ আয়াতে মানুষ সামনের দিনগুলোতেও গুনাহ করে যেতে চায়, আর ৭৫:৬ আয়াতে সে জিজ্ঞেস করে, আইয়্যানা ইয়াওমুল কিয়ামাহ, কিয়ামত কবে? তাবারীর চোখে এ প্রশ্ন আসলে টালবাহানা। তওবা পিছিয়ে রাখতে রাখতেই সে এমন জিজ্ঞেস করে। তাই আল্লাহ এ আয়াত আর পরের দুই আয়াত দিয়ে বিষয়টা তার সামনে খুলে দিলেন। কুরতুবীও বলেন, মানুষ যা জানতে চেয়েছিল, আয়াতটিতে তারই জবাবের অর্থ রয়েছে।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, treats the question as denial, a rejection of the Day's very existence rather than a wish to learn its hour. Whatever the motive, the reply refuses the terms on which it was asked. No year is named and no count of days is given. Instead the asker is shown what will happen to the very faculty with which he looked at the world and doubted. His question was about time; the answer is about him, and about his own eyes.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য এ প্রশ্নকে বলে অস্বীকারের প্রশ্ন। দিনটার সময় জানার ইচ্ছা নয়, দিনটার অস্তিত্বকেই নাকচ করা। উদ্দেশ্য যা-ই হোক, প্রশ্নটা যে ছকে করা হয়েছিল, জবাব সে ছকে ধরা দেয় না। কোনো সালের নাম আসে না, দিনের কোনো হিসাবও না। তার বদলে প্রশ্নকারীকে দেখানো হয়, যে চোখ দিয়ে সে দুনিয়ার দিকে তাকিয়ে সন্দেহ করত, সেই চোখের কী দশা হবে। তার প্রশ্ন ছিল সময় নিয়ে। জবাবটা তাকে নিয়ে, তার নিজের চোখ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Bariqa or Baraqa",
          "bn": "বারিকা, না বারাকা"
        },
        "p": [
          {
            "en": "The verb was read in two ways. Al-Qurtubi reports that Nafi', and Aban transmitting from Asim, read baraqa, with a fatha on the ra, while the rest read bariqa, with a kasra. Al-Baghawi gives the same division by place: the people of Madinah read baraqa and the others bariqa, and he adds that the two are simply two dialectal forms of the word. The written text is identical either way. What differs is a single short vowel, and with it a shade of the picture.",
            "bn": "ক্রিয়াটি দুইভাবে পড়া হয়েছে। কুরতুবী জানান, নাফি' এবং আসিম থেকে বর্ণনাকারী আবান পড়েছেন বারাকা, অর্থাৎ 'রা' অক্ষরে যবর দিয়ে। বাকিরা পড়েছেন বারিকা, যের দিয়ে। বাগাভী একই ভাগ দেখান অঞ্চল ধরে: মদীনাবাসীরা পড়েন বারাকা, অন্যরা বারিকা। তিনি যোগ করেন, এ দুটি আসলে একই শব্দের দুই আঞ্চলিক রূপ। লেখায় শব্দ হুবহু এক। তফাত কেবল একটি হ্রস্ব স্বরে, আর তাতে ছবিটার রঙে সামান্য বদল আসে।"
          },
          {
            "en": "Ibn Kathir begins from the other side. He cites Abu Amr ibn al-Ala on bariqa with the kasra, glossed as hara, to be bewildered, and then notes that others read it with the fatha, which he says is close in meaning to the first. Al-Qurtubi also records the same note of convergence: it has been said that the kasra and the fatha are two dialects with a single meaning. The commentators record a real variation in reading without treating it as a quarrel, and each reading adds its own shade to the same scene.",
            "bn": "ইবন কাসীর শুরু করেন উল্টো দিক থেকে। তিনি আবু আমর ইবনুল আলার কথা আনেন: যের দিয়ে বারিকা, মানে হা-রা, দিশেহারা হয়ে যাওয়া। তারপর বলেন, অন্যরা যবর দিয়ে পড়েছেন, আর অর্থে তা প্রথমটির কাছাকাছি। কুরতুবীও এই মিলের কথা উল্লেখ করেন: কেউ কেউ বলেছেন, যের আর যবর দুই আঞ্চলিক রূপ, অর্থ একই। তাফসীরকারেরা তাই কিরাআতের সত্যিকারের ভিন্নতা লিখে রাখেন, কিন্তু তাকে বিবাদ বানান না। প্রতিটি কিরাআত একই দৃশ্যে নিজের একটা রং যোগ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes With Nowhere to Rest",
          "bn": "চোখ থামার জায়গা পায় না"
        },
        "p": [
          {
            "en": "Take the kasra reading first. Al-Qurtubi gives its sense as tahayyara fa-lam yatrif, it was bewildered and did not blink, a gloss he credits to Abu Amr, al-Zajjaj and others. Al-Farra and al-Khalil, as he quotes them, define bariqa as to be terrified, stunned and bewildered, and he adds that the Arabs say of a man struck dumb with confusion, qad bariqa fa-huwa bariq. Al-Baghawi quotes the same pair of philologists: bariqa means alarmed and bewildered at the wonders the person sees.",
            "bn": "প্রথমে যেরওয়ালা কিরাআত। কুরতুবী এর অর্থ দেন তাহাইয়ারা ফালাম ইয়াতরিফ: দিশেহারা হয়ে গেল, পলক পড়ল না। এ ব্যাখ্যা তিনি আবু আমর, যাজ্জাজ ও অন্যদের নামে আনেন। তাঁর উদ্ধৃতিতে ফাররা ও খলীল বারিকার সংজ্ঞা দেন এভাবে: ভয় পাওয়া, হতবাক হওয়া, দিশা হারানো। কুরতুবী আরও জানান, বিভ্রান্তিতে বোবা হয়ে যাওয়া মানুষকে আরবরা বলে, কাদ বারিকা ফাহুয়া বারিক। বাগাভীও এই দুই ভাষাবিদের কথা আনেন: বারিকা মানে যে আশ্চর্য জিনিস চোখে পড়ে, তাতে আতঙ্কিত ও দিশেহারা হওয়া।"
          },
          {
            "en": "Al-Qurtubi supports this with poetry. He cites Dhu al-Rumma: were Mayy to show herself unveiled to the eyes of Luqman the Wise, he would almost bariqa, almost be stunned out of his composure. From al-Farra he quotes a line urging a wounded man not to bariqa at the number of his wounds, which al-Qurtubi explains as do not panic. In both lines the word names a person overwhelmed by what is in front of him. The trouble is not that the eye cannot see; it is that it sees too much.",
            "bn": "কুরতুবী কবিতা দিয়ে এ অর্থের সমর্থন আনেন। যুর রুম্মার পঙক্তি: মাইয়া যদি জ্ঞানী লুকমানের চোখের সামনে মুখ খোলা অবস্থায় এসে দাঁড়াত, তিনিও প্রায় বারিকা হয়ে যেতেন, হতবাক হয়ে স্থিরতা হারাতেন। ফাররা থেকে তিনি আরেকটি পঙক্তি আনেন, যেখানে আহত লোককে বলা হচ্ছে, জখমের সংখ্যা দেখে বারিকা হয়ো না। কুরতুবী এর মানে করেন, ঘাবড়ে যেয়ো না। দুই পঙক্তিতেই শব্দটা এমন মানুষের কথা বলে, সামনের জিনিস যাকে কাবু করে ফেলেছে। সমস্যা এই নয় যে চোখ দেখতে পায় না। সমস্যা হলো, সে বড় বেশি দেখে ফেলে।"
          },
          {
            "en": "Ibn Kathir draws the picture out with another verse. Abu Amr's sense, he says, resembles la yartaddu ilayhim tarfuhum, their gaze does not return to them, in 14:43: they look this way and that in fright, and their sight cannot settle on anything because of the severity of the terror. Al-Muyassar puts the whole of it in a line: the sight is bewildered and stunned, in fright at what it sees of the horrors of the Day of Resurrection. The eye keeps moving, but it finds nowhere to stop.",
            "bn": "ইবন কাসীর আরেকটি আয়াত দিয়ে ছবিটা আরও খুলে দেন। তিনি বলেন, আবু আমরের এ অর্থ ১৪:৪৩ আয়াতের সঙ্গে মেলে: লা ইয়ারতাদ্দু ইলাইহিম তারফুহুম, তাদের দৃষ্টি তাদের দিকে ফিরে আসবে না। ভয়ে তারা এদিক-ওদিক তাকাবে, আতঙ্কের তীব্রতায় কোনো কিছুর উপর তাদের চোখ স্থির হবে না। মুয়াসসার পুরো কথাটা এক লাইনে বলে: কিয়ামতের বিভীষিকা দেখে ভয়ে দৃষ্টি দিশেহারা ও হতবাক হয়ে যাবে। চোখ নড়তেই থাকে, কিন্তু থামার কোনো জায়গা পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wide Open and Unblinking",
          "bn": "বিস্ফারিত, পলকহীন চোখ"
        },
        "p": [
          {
            "en": "The fatha reading turns the picture slightly. Al-Qurtubi explains baraqa as lama'a basaruhu min shiddati shukhusihi: his sight glints from the intensity of its fixed stare, so that you see him not blinking. Abu Ubayda, as al-Qurtubi reports, says baraqa means to split the eyes open and widen them, and quotes a line of al-Kilabi in which a man given a gift of camels baraqa, opened his eyes wide. Al-Baghawi joins the two senses: baraqa is to split the eye and open it, from al-bariq, which is glittering.",
            "bn": "যবরওয়ালা কিরাআত ছবিটাকে একটু ঘুরিয়ে দেয়। কুরতুবী বারাকার ব্যাখ্যা দেন লামাআ বাসারুহু মিন শিদ্দাতি শুখূসিহি: স্থির দৃষ্টির তীব্রতায় তার চোখ চকচক করে, দেখবেন সে পলক ফেলছে না। কুরতুবীর বর্ণনায় আবু উবায়দা বলেন, বারাকা মানে চোখ ফেড়ে বড় করে খোলা। প্রমাণ হিসেবে তিনি কিলাবীর এক পঙক্তি আনেন: উট উপহার পেয়ে লোকটি বারাকা করল, অর্থাৎ চোখ বড় বড় করে তাকাল। বাগাভী দুটি অর্থ জুড়ে দেন: বারাকা মানে চোখ ফেড়ে খুলে রাখা, শব্দটা এসেছে আল-বারীক থেকে, যার মানে ঝিলিক।"
          },
          {
            "en": "Here the commentators also say what the eye is staring at. Qatadah and Muqatil, in al-Baghawi, say the sight stares without blinking at the wonders it used to deny in the world. As-Sa'di, without pausing on the readings, says that when the Resurrection comes the eyes flash from the immense terror and stare without blinking, and he quotes 14:42 and 14:43: a day on which eyes will stare, heads raised, their gaze not returning to them and their hearts empty. Ma'arif al-Qur'an renders bariqa as dazzled and unable to see consistently.",
            "bn": "চোখ কীসের দিকে তাকিয়ে আছে, তাফসীরকারেরা সেটাও বলেন। বাগাভীর উদ্ধৃতিতে কাতাদা ও মুকাতিল বলেন, দুনিয়াতে যেসব আশ্চর্য বিষয় সে অস্বীকার করত, সেগুলোর দিকে দৃষ্টি পলকহীন হয়ে আটকে থাকবে। সা'দী কিরাআতের আলোচনায় না গিয়ে বলেন, কিয়ামত যখন আসবে, প্রচণ্ড আতঙ্কে চোখ ঝলসে উঠবে আর পলক না ফেলে তাকিয়ে থাকবে। সঙ্গে তিনি ১৪:৪২ ও ১৪:৪৩ উদ্ধৃত করেন: সেদিন চোখ স্থির হয়ে যাবে, মাথা উঁচু, দৃষ্টি তাদের দিকে ফিরবে না, অন্তর থাকবে শূন্য। মাআরিফুল কুরআন বারিকার অর্থ করে, চোখ ধাঁধিয়ে যাওয়া আর ঠিকমতো দেখতে না পারা।"
          },
          {
            "en": "Notice what both readings share. Al-Qurtubi glosses the kasra as bewildered and not blinking, and the fatha as glinting from a stare in which you see no blink. Qatadah and Muqatil use the same phrase, la yatrif, and so does as-Sa'di. The blink is the smallest rest the eye has, a fraction of a second in which it may close on what it sees. In this scene even that is gone. Whether the eye roams or locks in place, it has lost the power to look away.",
            "bn": "খেয়াল করুন, দুই কিরাআতের মধ্যে মিলটা কোথায়। কুরতুবী যেরের অর্থ করেন দিশেহারা ও পলকহীন, আর যবরের অর্থ এমন স্থির দৃষ্টির ঝিলিক যাতে পলক পড়তে দেখা যায় না। কাতাদা ও মুকাতিলও একই কথা বলেন, লা ইয়াতরিফ, সা'দীও তাই। পলক চোখের সবচেয়ে ছোট বিশ্রাম। চোখের পলকটুকুর জন্য সামনের দৃশ্যের উপর চোখ একটু বুজে আসে। এ দৃশ্যে সেটুকুও নেই। চোখ ঘুরে বেড়াক বা আটকে থাকুক, অন্যদিকে তাকানোর ক্ষমতা সে হারিয়ে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "At Death or at the Rising",
          "bn": "মৃত্যুকালে, নাকি পুনরুত্থানে"
        },
        "p": [
          {
            "en": "When does the sight do this? Here the commentators genuinely differ, and the difference is worth keeping. Al-Qurtubi reports that Mujahid and others said this happens at death, while al-Hasan said it is on the Day of Resurrection. Al-Baghawi also records the view that it happens at death, introducing it with qil, it has been said, and he adds al-Kalbi's narrower placement: the eyes of the disbelievers are dazzled when they see Hell. Neither al-Qurtubi nor al-Baghawi rules between these views; each sets them side by side.",
            "bn": "দৃষ্টির এ দশা কখন হবে? এখানে তাফসীরকারদের মধ্যে সত্যিকারের মতভেদ আছে, আর সেই মতভেদ ধরে রাখা দরকার। কুরতুবী জানান, মুজাহিদ ও অন্যরা বলেছেন, এটা মৃত্যুর সময়ে ঘটবে। আর হাসান বলেছেন, এটা কিয়ামতের দিন। বাগাভীও মৃত্যুকালের মতটি উল্লেখ করেন 'কীল', অর্থাৎ 'বলা হয়েছে' শব্দ দিয়ে। সঙ্গে তিনি কালবীর আরও সীমিত মতটি আনেন: জাহান্নাম দেখে কাফিরদের চোখ ধাঁধিয়ে যাবে। কুরতুবী বা বাগাভী কেউই এ মতগুলোর মধ্যে রায় দেন না, দুজনই মতগুলো পাশাপাশি রেখে দেন।"
          },
          {
            "en": "The other works read the verse with the Day in view. As-Sa'di opens with idha kanat al-qiyamah, when the Resurrection comes; Ibn Kathir says the eyes will be dazzled, humbled, bewildered and abased on the Day of Resurrection; al-Muyassar and Ma'arif al-Qur'an both speak of its horrors and its scenes. The verses that follow, about the moon and the sun in 75:8 and 75:9, belong to that larger scene, and this article leaves them for their own place. Both placements are on record, and both are left standing here.",
            "bn": "বাকি তাফসীরগুলো আয়াতটি পড়ে কিয়ামতের দিনকে সামনে রেখে। সা'দী শুরুই করেন ইযা কানাতিল কিয়ামাহ, যখন কিয়ামত আসবে, এই কথায়। ইবন কাসীর বলেন, কিয়ামতের দিন চোখ ধাঁধিয়ে যাবে, অবনত হবে, দিশা হারাবে, লাঞ্ছিত হবে। মুয়াসসার আর মাআরিফুল কুরআন দুটিই সেদিনের বিভীষিকা ও দৃশ্যের কথা বলে। পরের আয়াত দুটি, ৭৫:৮ ও ৭৫:৯, চাঁদ ও সূর্যের কথা বলে। সেগুলো এই বড় দৃশ্যেরই অংশ, তবে সেগুলোর আলোচনা হবে নিজ নিজ জায়গায়। দুটি মতই বর্ণিত আছে, আর এখানেও দুটিই রইল।"
          },
          {
            "en": "For a reader, the two placements do not compete so much as nest inside each other. If the moment is at death, it comes to each person alone and on no announced day, which is nearer than any answer to when. If it is at the Rising, it comes to everyone together, and no one is excused from it. Either way, the man who asked to be told the hour has been given something more useful than a date: a reason not to wait any longer.",
            "bn": "পাঠকের কাছে দুই মত পরস্পরের প্রতিদ্বন্দ্বী নয়, বরং একটার ভেতরে আরেকটা বসানো। মুহূর্তটা যদি মৃত্যুর সময়ে হয়, তবে তা আসে প্রত্যেকের কাছে আলাদা করে, কোনো ঘোষিত দিন ছাড়াই। 'কবে' প্রশ্নের যেকোনো উত্তরের চেয়ে তা কাছে। আর যদি পুনরুত্থানের দিনে হয়, তবে আসে সবার কাছে একসঙ্গে, কেউ রেহাই পায় না। যেটাই হোক, যে লোক সময়টা জানতে চেয়েছিল, সে তারিখের চেয়ে কাজের জিনিস পেয়ে গেছে: আর দেরি না করার একটা কারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongue Asks, Eyes Answer",
          "bn": "জিভে প্রশ্ন, চোখে জবাব"
        },
        "p": [
          {
            "en": "There is a fitting turn in this. The man of 75:6 asked with his tongue; he is answered through his eyes. He looked at the world and saw nothing in it that pointed beyond it, and the words of Qatadah and Muqatil fix on exactly that: the wonders he used to deny. The faculty he trusted to judge what was real becomes the faculty that can no longer look away, or can no longer settle. Whichever reading is followed, sight stops being something he directs and becomes something that happens to him.",
            "bn": "এখানে একটা মানানসই মোড় আছে। ৭৫:৬ আয়াতের লোকটি প্রশ্ন করেছিল জিভ দিয়ে, জবাব পায় চোখ দিয়ে। দুনিয়ার দিকে সে তাকিয়েছিল, কিন্তু এর ওপারের দিকে ইশারা করে এমন কিছু তাতে দেখেনি। কাতাদা ও মুকাতিলের কথাও ঠিক সেখানেই আঙুল রাখে: যেসব আশ্চর্য বিষয় সে অস্বীকার করত। কোনটা সত্য, তা যাচাই করতে যে চোখের উপর সে ভরসা করত, সেই চোখই আর অন্যদিকে ফিরতে পারে না, কিংবা কোথাও স্থির হতে পারে না। যে কিরাআতই ধরা হোক, দৃষ্টি তখন আর তার হুকুমে চলে না। দৃষ্টি তখন তার উপর ঘটে যাওয়া এক অবস্থা।"
          },
          {
            "en": "At-Tabari, in a report on 75:6 that runs back to Qatadah, includes a saying attributed to Umar ibn al-Khattab: whoever is asked about the Day of Resurrection, let him recite this surah. It is a Companion's saying, not a hadith of the Prophet ﷺ, and at-Tabari gives it no grading. None of the commentaries consulted for this verse attaches a sound prophetic hadith to 75:7 itself, so this article cites none. By Umar's counsel, the surah is its own reply to the question.",
            "bn": "৭৫:৬ আয়াতের আলোচনায় তাবারী কাতাদা পর্যন্ত পৌঁছানো এক বর্ণনায় উমর ইবনুল খাত্তাব (রাঃ)-এর নামে একটি কথা আনেন: কিয়ামত সম্পর্কে যাকে জিজ্ঞেস করা হয়, সে যেন এই সূরা পড়ে শোনায়। এটা একজন সাহাবীর কথা, নবী ﷺ-এর হাদিস নয়, আর তাবারী এর কোনো মান নির্ধারণ করেননি। এ আয়াতের জন্য দেখা তাফসীরগুলোর কোনোটিই ৭৫:৭ আয়াতের সঙ্গে সরাসরি কোনো সহীহ হাদিস জুড়ে দেয়নি, তাই এ লেখাও কোনো হাদিস উদ্ধৃত করছে না। উমর (রাঃ)-এর পরামর্শ অনুযায়ী, প্রশ্নের জবাব এই সূরা নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Describing, Not Accusing",
          "bn": "বর্ণনা, অভিযোগ নয়"
        },
        "p": [
          {
            "en": "A plain word is needed here. The verse speaks only of what it names: the sight of the human being of 75:5 and 75:6, at the moment of death or on the Day, and al-Kalbi in al-Baghawi narrows it to the eyes of disbelievers before Hell. It licenses nothing against any living person or community. It hands nobody the right to name who will stare in terror and who will be spared, or to read that terror into a neighbour's face. The verse speaks to its reader about its reader.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: ৭৫:৫ ও ৭৫:৬ আয়াতের মানুষটির দৃষ্টি, মৃত্যুর মুহূর্তে কিংবা কিয়ামতের দিনে। বাগাভীর উদ্ধৃতিতে কালবী একে আরও সীমিত করে জাহান্নামের সামনে কাফিরদের চোখের কথা বলেন। কিন্তু কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। কে আতঙ্কে চেয়ে থাকবে আর কে রেহাই পাবে, তা ঠিক করে দেওয়ার অধিকার এ আয়াত কাউকে দেয় না। প্রতিবেশীর চেহারায় সেই আতঙ্ক খুঁজে বেড়ানোরও না। আয়াতটি পাঠককে তার নিজের কথাই শোনায়।"
          },
          {
            "en": "That is how the passage frames it too. Its subject throughout is al-insan, the human being, not a named people, and its questions are put to whoever hears them. Read this way, the dazzled sight is less a portrait of others than a mirror. The asker who says when may be any of us, at the moment we push a duty into an undated later. The verse does not ask us to identify him in someone else; it asks whether, in some corner of our own life, we have become him.",
            "bn": "অংশটি নিজেও বিষয়টা এভাবেই সাজায়। গোটা অংশে কথা হচ্ছে আল-ইনসান, অর্থাৎ মানুষকে নিয়ে, নাম ধরে কোনো জাতিকে নিয়ে নয়। এর প্রশ্নগুলো যে শোনে তার দিকেই ছোড়া। এভাবে পড়লে ধাঁধিয়ে যাওয়া দৃষ্টি অন্যদের ছবি নয়, বরং আয়না। যে প্রশ্নকারী 'কবে' বলে, সে আমাদের যে কেউ হতে পারে, যখনই আমরা কোনো দায়িত্বকে তারিখহীন এক 'পরে'-তে ঠেলে দিই। আয়াত চায় না আমরা অন্য কারও মধ্যে তাকে খুঁজে বের করি। আয়াত জানতে চায়, নিজের জীবনের কোনো কোণে আমরাই কি সেই লোক হয়ে গেছি?"
          }
        ]
      },
      {
        "h": {
          "en": "While the Eyes Still Obey",
          "bn": "চোখ যতদিন কথা শোনে"
        },
        "p": [
          {
            "en": "The question of 75:6 is still asked, sometimes aloud and more often silently, by anyone who means to set things right later. The verse does not answer it with a date, and a date would only let the postponing run on until the deadline. It answers with a condition of the self. The sight that today is free to look wherever it chooses will, at death or at the Rising, be either bewildered or fixed. The time to choose what the eyes look at is now.",
            "bn": "৭৫:৬ আয়াতের প্রশ্ন আজও করা হয়, কখনো মুখে, বেশির ভাগ সময় মনে মনে। যে-ই ভাবে পরে সব ঠিক করে নেবে, সে-ই এ প্রশ্ন করে। আয়াত এর জবাব তারিখ দিয়ে দেয় না। তারিখ পেলে তো টালবাহানা সময়সীমা পর্যন্ত চলতেই থাকত। জবাব আসে মানুষের নিজের এক অবস্থা দিয়ে। যে দৃষ্টি আজ যেদিকে খুশি তাকাতে পারে, মৃত্যুকালে বা পুনরুত্থানের দিনে তা হয় দিশেহারা হবে, নয়তো আটকে যাবে। চোখ কীসের দিকে তাকাবে, তা বেছে নেওয়ার সময় এখনই।"
          },
          {
            "en": "The verses that follow, 75:10 and 75:12, carry the scene to the cry for a place to flee and to the reply that the place of settling that Day is with your Lord. For the reader, the lesson of 75:7 is quieter. Look now, steadily and by choice, at what you will someday be unable to look away from. Turn the eyes from what corrodes toward what reminds. Then the question when loses its power to delay, because readiness no longer waits for its answer.",
            "bn": "পরের আয়াতগুলো, ৭৫:১০ ও ৭৫:১২, দৃশ্যটাকে নিয়ে যায় পালানোর জায়গা খোঁজার আর্তনাদে, আর সেই জবাবে যে সেদিন ঠাঁই কেবল আপনার রবের কাছে। পাঠকের জন্য ৭৫:৭ আয়াতের শিক্ষা আরও নীরব। যে জিনিস থেকে একদিন চোখ ফেরাতে পারবেন না, আজ নিজের ইচ্ছায়, স্থির চোখে তার দিকে তাকান। যা ভেতরটা ক্ষইয়ে দেয়, তা থেকে চোখ সরিয়ে যা মনে করিয়ে দেয়, তার দিকে ফেরান। তখন 'কবে' প্রশ্নটা আর দেরির অজুহাত হতে পারে না, কারণ প্রস্তুতি তখন আর তার জবাবের অপেক্ষায় বসে থাকে না।"
          }
        ]
      }
    ]
  },
  "75:14": {
    "sections": [
      {
        "h": {
          "en": "Rather, After the Reckoning",
          "bn": "হিসাবের পরেই 'বরং'"
        },
        "p": [
          {
            "en": "Five Arabic words: bal al-insanu 'ala nafsihi basira. They close a run of short verses about the Day. The moon darkens, the sun and moon are brought together, and man asks, ayna al-mafarr, where is the escape? Kalla, la wazar: no, there is no refuge. To your Lord that Day is the place of settling. Then 75:13: man will be informed that Day of what he sent ahead and what he kept back. Our verse opens with bal, rather, and turns that last statement on its head.",
            "bn": "আরবিতে মাত্র পাঁচটি শব্দ: বালিল ইনসানু আলা নাফসিহী বাসীরাহ। কিয়ামতের দিন নিয়ে ছোট ছোট আয়াতের একটা ধারা এখানে এসে থামে। চাঁদ আলো হারায়, সূর্য আর চাঁদকে একসঙ্গে জুড়ে দেওয়া হয়। মানুষ জিজ্ঞেস করে, আইনাল মাফার্‌র, পালানোর জায়গা কোথায়? জবাব আসে, কাল্লা লা ওয়াযার: না, কোনো আশ্রয় নেই। সেদিন ঠাঁই শুধু আপনার রবের কাছে। তারপর ৭৫:১৩: সেদিন মানুষকে জানানো হবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে এসেছে। আমাদের আয়াত শুরু হয় 'বাল' দিয়ে, মানে 'বরং', আর আগের কথাটাকেই উল্টে দেয়।"
          },
          {
            "en": "At-Tabari, on 75:13, records several readings of what was sent ahead and kept back: deeds done before death and a practice left behind for others to follow, the first and last of a person's deeds, obedience offered and the rights of Allah neglected. He declines to narrow it and concludes that man is told of all of it. Then comes bal. Being told is not the whole story. Ma'arif al-Qur'an says each deed will be shown for the sake of fairness and justice, though this will not really be necessary, because every man knows what he does.",
            "bn": "৭৫:১৩ আয়াতে 'আগে পাঠানো আর পেছনে রাখা' কথাটার কয়েকটি ব্যাখ্যা তাবারী লিপিবদ্ধ করেন। মৃত্যুর আগে করা আমল, আর রেখে যাওয়া এমন রীতি যা পরে অন্যরা মেনে চলে। কারও আমলের শুরু আর শেষ। আদায় করা আনুগত্য, আর নষ্ট করা আল্লাহর হক। তিনি কোনো একটিতে অর্থ সীমিত করেন না। তাঁর সিদ্ধান্ত, মানুষকে এর সবই জানানো হবে। এরপরই আসে 'বাল'। জানিয়ে দেওয়াটাই পুরো কথা নয়। মাআরিফুল কুরআন বলে, ন্যায় ও ইনসাফের খাতিরে প্রতিটি আমল তাকে দেখানো হবে, যদিও আসলে তার প্রয়োজন পড়বে না। কারণ প্রত্যেক মানুষ জানে সে কী করে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Letter, Several Pictures",
          "bn": "এক হরফে কয়েকটি ছবি"
        },
        "p": [
          {
            "en": "Basira usually means insight, the seeing of the heart. Ma'arif al-Qur'an gives it two senses here: seeing, and evidence or proof, as with its plural basa'ir in 6:104. The puzzle is the ending. Basira carries the feminine ta marbuta, yet it is said of al-insan, a masculine noun. The commentators did not let this pass, and their accounts of a single letter turn into different pictures of who is watching whom. Each account below is credited to the person the sources name.",
            "bn": "বাসীরাহ শব্দের সাধারণ অর্থ অন্তর্দৃষ্টি, মনের চোখে দেখা। মাআরিফুল কুরআন এখানে এর দুটি অর্থ ধরে: দেখা, আর দলিল বা প্রমাণ। যেমন ৬:১০৪ আয়াতে এর বহুবচন 'বাসায়ির'। প্রশ্ন জাগে শব্দের শেষ হরফ নিয়ে। বাসীরাহর শেষে স্ত্রীলিঙ্গের গোল তা, অথচ শব্দটা বলা হয়েছে 'আল-ইনসান' সম্পর্কে, যা পুংলিঙ্গ। তাফসীরকারেরা বিষয়টা এড়িয়ে যাননি। একটিমাত্র হরফের ব্যাখ্যা থেকে তৈরি হয়েছে আলাদা আলাদা ছবি: কে কার উপর নজর রাখছে। নিচের প্রতিটি ব্যাখ্যা সেই নামেই দেওয়া হলো, যার নামে সূত্রগুলো তা উল্লেখ করেছে।"
          },
          {
            "en": "One answer is that the letter intensifies. Al-Qurtubi reports people who call it the ha of exaggeration, the ending heard in dahiya, 'allama and rawiya, words for someone very shrewd, very learned or a great transmitter, and he names this the view of Abu 'Ubayd. Al-Baghawi gives the same and calls this ending the proof of the reading witness. At-Tabari lists it without a name, comparing rawiya and 'allama. On this reading man is not merely a witness over himself. He is a sharp and thorough one.",
            "bn": "একটি জবাব হলো, হরফটি অর্থে জোর আনে। কুরতুবী কিছু লোকের মত আনেন, যাঁরা একে বলেন 'মুবালাগার হা', অর্থাৎ আধিক্য বোঝানোর হরফ। দাহিয়া, আল্লামা, রাবিয়া শব্দের শেষে এটাই শোনা যায়, যার মানে খুব চতুর, খুব জ্ঞানী, বড় বর্ণনাকারী। কুরতুবী একে আবু উবাইদের মত বলে উল্লেখ করেন। বাগাভীও একই কথা বলেন, আর এই হরফকেই 'সাক্ষী' অর্থের দলিল বলেন। তাবারী কারও নাম না নিয়ে মতটি উল্লেখ করেন, রাবিয়া ও আল্লামার সঙ্গে তুলনা টেনে। এ পাঠে মানুষ নিজের উপর শুধু সাক্ষী নয়। সে তীক্ষ্ণ চোখের, পুরোপুরি ওয়াকিফহাল সাক্ষী।"
          },
          {
            "en": "A second answer is grammatical. Al-Akhfash, in al-Qurtubi, says the verse makes man himself the basira, as you might tell someone, you are a proof against yourself; at-Tabari gives the same comparison from some Basran grammarians. A third answer, which al-Qurtubi credits to al-Qutabi and others and al-Baghawi also gives, is that al-insan here means his limbs, so the ending fits them. A fourth supplies a hidden noun, 'ayn basira, a seeing eye, and al-Qurtubi quotes a line of poetry recited by al-Farra': as though over the man of sense there were a seeing eye.",
            "bn": "দ্বিতীয় জবাবটি ব্যাকরণের। কুরতুবীর বর্ণনায় আখফাশ বলেন, আয়াতটি মানুষকেই বাসীরাহ বানিয়ে দিয়েছে, যেমন কাউকে বলা হয়: তুমি নিজেই নিজের বিরুদ্ধে প্রমাণ। তাবারীও এই তুলনা দেন, বসরার কয়েকজন ব্যাকরণবিদের বরাতে। তৃতীয় জবাব কুরতুবী দেন কুতাবী ও অন্যদের নামে, বাগাভীও তা উল্লেখ করেন। এখানে 'ইনসান' মানে তার অঙ্গপ্রত্যঙ্গ, তাই শেষ হরফটি সেগুলোর সঙ্গেই মেলে। চতুর্থ জবাবে একটি উহ্য শব্দ ধরা হয়: আইনুন বাসীরাহ, দেখতে পাওয়া চোখ। কুরতুবী এখানে ফাররার আবৃত্তি করা একটি কবিতার চরণ উদ্ধৃত করেন: যেন বুদ্ধিমান মানুষের উপর আছে এক দেখতে পাওয়া চোখ।"
          }
        ]
      },
      {
        "h": {
          "en": "Limbs, or the Self Alone",
          "bn": "অঙ্গপ্রত্যঙ্গ, নাকি নিজেই"
        },
        "p": [
          {
            "en": "At-Tabari leads with the limbs. His own paraphrase: rather, man has over himself, from himself, watchers who observe his deeds and bear witness against him. He supports it with Ibn 'Abbas through 'Ali ibn Abi Talha: his hearing, his sight, his hands, his feet and his limbs. Ibn Kathir carries the same report, and al-Baghawi gives this reading from 'Ikrimah, Muqatil and al-Kalbi. In al-Qurtubi, Ibn 'Abbas spells it out: his hands for what they seized, his feet for where they walked, his eyes for what they looked at.",
            "bn": "তাবারী শুরু করেন অঙ্গপ্রত্যঙ্গের ব্যাখ্যা দিয়ে। তাঁর নিজের ভাষায়: বরং মানুষের উপর তার নিজের ভেতর থেকেই পাহারাদার আছে, যারা তার আমলের উপর নজর রাখে আর তার বিরুদ্ধে সাক্ষ্য দেয়। এর পক্ষে তিনি আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: তার কান, তার চোখ, তার দুই হাত, দুই পা আর অঙ্গপ্রত্যঙ্গ। ইবন কাসীরও একই বর্ণনা আনেন। বাগাভী এই ব্যাখ্যা দেন ইকরিমা, মুকাতিল ও কালবীর নামে। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) খুলে বলেন: হাত সাক্ষ্য দেবে কী ধরেছে, পা সাক্ষ্য দেবে কোথায় হেঁটেছে, চোখ সাক্ষ্য দেবে কী দেখেছে।"
          },
          {
            "en": "Al-Qurtubi names the textual proof for this reading: 24:24, the day their tongues, their hands and their feet will testify against them about what they used to do. The second reading keeps the witness inside the person. At-Tabari reports it from Ibn 'Abbas through al-'Awfi's chain: man is a witness over himself, alone. From Qatada: a witness against it with its deeds. From Ibn Zayd, who recited 17:14: read your book; your own self suffices this Day as reckoner against you. Al-Baghawi adds Abu al-'Aliyah and 'Ata' to this side.",
            "bn": "এ ব্যাখ্যার পক্ষে কুরআনের দলিলও কুরতুবী উল্লেখ করেন: ২৪:২৪, যেদিন তাদের জিভ, হাত আর পা তাদের কৃতকর্মের ব্যাপারে তাদের বিরুদ্ধে সাক্ষ্য দেবে। দ্বিতীয় ব্যাখ্যায় সাক্ষী মানুষের ভেতরের সত্তাই। তাবারী এটি আনেন আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে: মানুষ একাই নিজের উপর সাক্ষী। কাতাদা থেকে: নিজের আমলসহ নিজের বিরুদ্ধে সাক্ষী। ইবন যায়দ থেকে, যিনি পড়েছিলেন ১৭:১৪: তোমার আমলনামা পড়ো, আজ তোমার হিসাব নিতে তুমি নিজেই যথেষ্ট। বাগাভী এই পক্ষে আবুল আলিয়া ও আতার নামও যোগ করেন।"
          },
          {
            "en": "Ibn Kathir takes this second line: he is a witness over himself, knowing what he did, even if he excuses himself and denies; he too quotes 17:14. As-Sa'di glosses basira as witness and reckoner, and the Muyassar calls man a clear proof against himself, binding him to what he did or left undone. Al-Qurtubi also reports, from as-Suddi and ad-Dahhak, that the basira are the two recording angels. Ibn 'Abbas is cited for both main readings, through two different chains. The commentators carry both, and this article does not choose between them.",
            "bn": "ইবন কাসীর এই দ্বিতীয় পথ ধরেন: সে নিজের উপর সাক্ষী, জানে সে কী করেছে, যদিও অজুহাত দেয় আর অস্বীকার করে। তিনিও ১৭:১৪ উদ্ধৃত করেন। সা'দী বাসীরাহর অর্থ করেন সাক্ষী ও হিসাবরক্ষক। মুয়াসসার বলে, মানুষ নিজের বিরুদ্ধে স্পষ্ট প্রমাণ, যা তাকে তার করা ও না-করা কাজের দায়ে বেঁধে রাখে। কুরতুবী সুদ্দী ও দাহহাক থেকে আরেকটি মতও আনেন: বাসীরাহ মানে আমল লেখার দুই ফেরেশতা। লক্ষ করুন, প্রধান দুই ব্যাখ্যার দুটিতেই ইবন আব্বাস (রাঃ)-এর নাম আছে, দুই আলাদা সূত্রে। তাফসীরকারেরা দুটিই রেখেছেন। এ লেখাও কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Excuses, or Drawn Curtains",
          "bn": "অজুহাত, নাকি টানা পর্দা"
        },
        "p": [
          {
            "en": "The next verse, 75:15, completes the sentence: wa law alqa ma'adhirahu, even if he throws down his ma'adhir. Most of those al-Qurtubi lists take the word as excuses: Mujahid, Qatada, Sa'id ibn Jubayr, Ibn Zayd, Abu al-'Aliyah, 'Ata', al-Farra', as-Suddi and Muqatil. Though he pleads and argues for himself, a witness within him belies his excuse. Muqatil says whatever excuse or argument he put forward would not help him, and al-Qurtubi sets beside it 40:52, the day their excuses will not benefit the wrongdoers.",
            "bn": "পরের আয়াত ৭৫:১৫ বাক্যটি শেষ করে: ওয়া লাও আলকা মাআযীরাহ, যদিও সে তার 'মাআযীর' সামনে ফেলে দেয়। কুরতুবী যাঁদের নাম দেন, তাঁদের বেশির ভাগ শব্দটির অর্থ করেন অজুহাত: মুজাহিদ, কাতাদা, সাঈদ ইবন জুবাইর, ইবন যায়দ, আবুল আলিয়া, আতা, ফাররা, সুদ্দী ও মুকাতিল। সে যতই নিজের পক্ষে সাফাই গায় আর তর্ক করে, তার ভেতরের এক সাক্ষী তার অজুহাতকে মিথ্যা প্রমাণ করে। মুকাতিল বলেন, যে অজুহাত বা যুক্তিই সে পেশ করুক, তাতে তার কোনো লাভ হবে না। কুরতুবী এর পাশে রাখেন ৪০:৫২: যেদিন জালিমদের অজুহাত তাদের কোনো কাজে আসবে না।"
          },
          {
            "en": "A second sense comes from dialect. Ad-Dahhak, in al-Qurtubi, says that in the speech of Yemen a curtain is called a mi'dhar, and az-Zajjaj agrees that ma'adhir are curtains. The verse then means: even if he lets down his curtains to hide what he does, his own self is a witness against him. Al-Qurtubi's own judgement is that the more apparent meaning is pleading his case and apologising for the sin, and he points to 6:23, where the idolaters swear they never associated partners with Allah. Al-Qurtubi also relays, via al-Mawardi, a third report from Ibn 'Abbas: even if he stripped off his clothes. Ma'arif al-Qur'an glosses mi'dhar as excuse.",
            "bn": "দ্বিতীয় অর্থটি এসেছে আঞ্চলিক ভাষা থেকে। কুরতুবীর বর্ণনায় দাহহাক বলেন, ইয়েমেনের ভাষায় পর্দাকে বলা হয় মি'যার। যাজ্জাজও একমত যে মাআযীর মানে পর্দা। তখন আয়াতের অর্থ দাঁড়ায়: নিজের কাজ লুকাতে সে পর্দা টেনে দিলেও তার নিজের সত্তাই তার বিরুদ্ধে সাক্ষী। তবে কুরতুবীর নিজের রায়, বেশি স্পষ্ট অর্থ হলো নিজের পক্ষে যুক্তি দেখানো আর গুনাহর জন্য অজুহাত পেশ করা। এর দলিল হিসেবে তিনি দেখান ৬:২৩, যেখানে মুশরিকরা কসম খেয়ে বলে, আমরা কখনো শিরক করিনি। কুরতুবী মাওয়ার্দীর বরাতে ইবন আব্বাস (রাঃ)-এর একটি তৃতীয় ব্যাখ্যাও আনেন: যদিও সে গায়ের কাপড় খুলে ফেলে। মাআরিফুল কুরআন মি'যারের অর্থ করে অজুহাত।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Thigh Speaks",
          "bn": "যখন উরু কথা বলে"
        },
        "p": [
          {
            "en": "To support the excuses reading, al-Qurtubi points to a narration he introduces as being in the Sahih, in which a man says: my Lord, I believed in You, in Your Book and Your messengers, I prayed, fasted and gave charity, and he praises himself as well as he can. It is in Sahih Muslim (2968), from Abu Hurayrah (RA), at the end of a long hadith about the Lord meeting His servants on the Day. Muslim placed it in his Sahih. The man is told that a witness will now be brought, and he wonders who could testify against him.",
            "bn": "অজুহাতের ব্যাখ্যার পক্ষে কুরতুবী একটি বর্ণনার দিকে ইঙ্গিত করেন, যেটিকে তিনি 'সহীহ'-তে আছে বলে উল্লেখ করেন। তাতে এক ব্যক্তি বলে: হে রব, আমি আপনার উপর, আপনার কিতাব ও রাসূলদের উপর ঈমান এনেছি, নামাজ পড়েছি, রোজা রেখেছি, সদকা দিয়েছি। যতটা পারে, সে নিজের প্রশংসা করে যায়। হাদিসটি সহীহ মুসলিমে (২৯৬৮) আছে, আবু হুরায়রা (রাঃ) থেকে। কিয়ামতের দিন রবের সঙ্গে বান্দাদের সাক্ষাৎ নিয়ে এক দীর্ঘ হাদিসের শেষ অংশ এটি। ইমাম মুসলিম একে তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন। লোকটিকে বলা হয়, এখন তোমার বিরুদ্ধে সাক্ষী আনা হবে। সে মনে মনে ভাবে, কে আমার বিরুদ্ধে সাক্ষ্য দেবে?"
          },
          {
            "en": "Then, in the English rendering at quranx.com, 'his mouth would be sealed and it would be said to his thighs, to his flesh and to his bones to speak', and they speak of his deeds. The hadith gives the reason: 'it would be done so that he should not be able to make any excuse for himself.' It ends by naming him a hypocrite with whom Allah is displeased. The hadith describes what Allah does with that man on that Day. It gives nobody licence to call any living person a hypocrite.",
            "bn": "এরপর, কুরআনএক্স ওয়েবসাইটের ইংরেজি অনুবাদের ভাষায়, তার মুখে মোহর মেরে দেওয়া হবে, আর তার উরু, তার গোশত ও তার হাড়কে বলা হবে: কথা বলো। তখন সেগুলো তার আমলের কথা বলে দেবে। হাদিসটি কারণও জানিয়ে দেয়: এমন করা হবে যাতে সে নিজের পক্ষে কোনো অজুহাত দাঁড় করাতে না পারে। শেষে বলা হয়েছে, সে মুনাফিক, আর তার উপর আল্লাহ অসন্তুষ্ট। হাদিসটি সেদিন ওই ব্যক্তির সঙ্গে আল্লাহ কী করবেন, তার বর্ণনা। আজ বেঁচে থাকা কোনো মানুষকে মুনাফিক বলে দেওয়ার অনুমতি এটি কাউকে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Speck and a Beam",
          "bn": "কুটো আর কড়িকাঠ"
        },
        "p": [
          {
            "en": "The same five words also gave the early commentators a mirror for this life. Qatada, in at-Tabari and in Ibn Kathir, said: if you wish, by Allah, you will see him seeing clearly the faults and sins of people, heedless of his own sins. Al-Hasan, in al-Qurtubi, reads basira the same way: seeing the faults of others, ignorant of the faults of himself. Here the word turns almost into irony. The faculty of seeing is real and sharp. It is simply pointed in the wrong direction.",
            "bn": "এই পাঁচটি শব্দ আগের যুগের তাফসীরকারদের হাতে এ দুনিয়ার জন্যও একটা আয়না তুলে দিয়েছিল। তাবারী ও ইবন কাসীরের বর্ণনায় কাতাদা বলেন: আল্লাহর কসম, চাইলে দেখবে, মানুষের দোষ আর গুনাহ সে পরিষ্কার দেখে, অথচ নিজের গুনাহ সম্পর্কে বেখবর। কুরতুবীর বর্ণনায় হাসানও বাসীরাহকে এভাবেই পড়েন: অন্যের দোষ দেখতে পটু, নিজের দোষের ব্যাপারে অজ্ঞ। এখানে শব্দটা প্রায় বিদ্রূপের সুর পায়। দেখার শক্তি সত্যিই আছে, ধারালোও। শুধু তার মুখ ভুল দিকে ফেরানো।"
          },
          {
            "en": "Qatada then adds a saying introduced with kana yuqal, it used to be said: that in the Injil it is written, son of Adam, you see the speck in your brother's eye and do not see the beam in your own. At-Tabari's chain has a trunk lying across the eye; Ibn Kathir's has a log. Neither presents it as a hadith, and it is not offered here as one. The commentators carried it because it fits the verse: an eye that is sharp when it looks outward and blind when it looks within.",
            "bn": "এরপর কাতাদা একটি কথা যোগ করেন, শুরু করেন 'কানা ইউকাল', অর্থাৎ 'বলা হতো' দিয়ে: ইঞ্জিলে লেখা আছে, হে আদম সন্তান, তুমি ভাইয়ের চোখের কুটোটা দেখো, অথচ নিজের চোখের কড়িকাঠটা দেখো না। তাবারীর সূত্রে আছে চোখে আড়াআড়ি পড়ে থাকা গাছের গুঁড়ি। ইবন কাসীরের সূত্রে আছে কাঠের টুকরো। কেউই একে হাদিস হিসেবে পেশ করেননি, এখানেও তা হাদিস হিসেবে আনা হচ্ছে না। তাফসীরকারেরা কথাটা এনেছেন, কারণ এটি আয়াতের সঙ্গে মিলে যায়: যে চোখ বাইরে তাকালে ধারালো, ভেতরে তাকালে অন্ধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Lies Against Himself",
          "bn": "নিজের বিরুদ্ধে কেউ মিথ্যা বলে না"
        },
        "p": [
          {
            "en": "Al-Qurtubi quotes the judge Abu Bakr ibn al-'Arabi drawing a legal point from 75:14 and 75:15: the verses are evidence that a person's admission against himself is accepted, because it is his own testimony against himself, and on this there is no disagreement. He also points to 9:102, where others acknowledge their sins. The reason he gives is short. Such a report is free of suspicion, because a sane person does not lie against himself. Al-Qurtubi then sets out the law of acknowledgement at length, which belongs in the books of fiqh rather than here.",
            "bn": "কুরতুবী কাজী আবু বকর ইবনুল আরাবীর একটি ফিকহি সিদ্ধান্ত উদ্ধৃত করেন, যা তিনি ৭৫:১৪ ও ৭৫:১৫ থেকে বের করেছেন। এ দুই আয়াত প্রমাণ করে, নিজের বিরুদ্ধে মানুষের স্বীকারোক্তি গ্রহণযোগ্য। কারণ সেটা নিজের বিরুদ্ধে তার নিজেরই সাক্ষ্য, আর এ নিয়ে কোনো মতভেদ নেই। তিনি ৯:১০২ আয়াতের দিকেও ইঙ্গিত করেন, যেখানে আরও কিছু লোক নিজেদের গুনাহ স্বীকার করে। যুক্তিটা তিনি দেন অল্প কথায়। এমন কথায় সন্দেহের জায়গা থাকে না, কেননা সুস্থবুদ্ধির মানুষ নিজের বিরুদ্ধে মিথ্যা বলে না। এরপর কুরতুবী স্বীকারোক্তির বিধান বিস্তারিত আলোচনা করেন। সে আলোচনার জায়গা ফিকহের কিতাব, এই লেখা নয়।"
          },
          {
            "en": "A small story in al-Qurtubi brings the point down to everyday manners. A man came to Ibrahim an-Nakha'i to excuse himself, and an-Nakha'i told him: I have excused you without your excusing yourself; excuses are mixed with lies. It is a hard sentence, and a useful one. Read beside the verse, it is not a ban on explaining oneself to people. It is a caution that the habit of explaining can slide, sentence by sentence, into a story the speaker no longer checks against what he knows.",
            "bn": "কুরতুবীতে ছোট একটি ঘটনা কথাটাকে প্রতিদিনের আচরণে নামিয়ে আনে। এক লোক ইবরাহীম নাখাঈর কাছে এসে নিজের পক্ষে অজুহাত দিচ্ছিল। নাখাঈ তাকে বললেন: তুমি অজুহাত দেওয়ার আগেই আমি তোমাকে মাফ করে দিয়েছি, অজুহাতের সঙ্গে মিথ্যা মিশে থাকে। কথাটা কঠিন, তবে কাজের। আয়াতের পাশে রেখে পড়লে বোঝা যায়, মানুষের কাছে নিজের অবস্থা বুঝিয়ে বলা নিষেধ নয়। সতর্কতা অন্য জায়গায়। সাফাই দেওয়ার অভ্যাস ধীরে ধীরে, বাক্যের পর বাক্যে, এমন এক গল্প হয়ে দাঁড়াতে পারে, যা বক্তা আর নিজের জানা সত্যের সঙ্গে মিলিয়ে দেখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing Before Being Shown",
          "bn": "দেখানোর আগেই দেখা"
        },
        "p": [
          {
            "en": "Put the readings side by side and they agree on more than they dispute. Whether the witness is the self, the limbs or the recording angels, the person is not hidden from Him who judges, and not hidden from himself. Ma'arif al-Qur'an brings in 18:49: they will find what they did present before them. The verse does not ask for some new faculty. It asks that the seeing already in us be turned inward while it can still change something, before the record is read out.",
            "bn": "ব্যাখ্যাগুলো পাশাপাশি রাখলে দেখা যায়, অমিলের চেয়ে মিলই বেশি। সাক্ষী নিজের সত্তা হোক, অঙ্গপ্রত্যঙ্গ হোক, কিংবা আমল লেখার ফেরেশতা, মানুষ বিচারকের কাছে লুকানো নয়, নিজের কাছেও নয়। মাআরিফুল কুরআন এখানে ১৮:৪৯ আনে: তারা যা করেছে, সব সামনে হাজির পাবে। আয়াতটি নতুন কোনো শক্তি চায় না। চায়, যে দেখার চোখ আমাদের আগে থেকেই আছে, তাকে ভেতরের দিকে ফেরানো হোক। আমলনামা পড়ে শোনানোর আগে, যখন এখনো কিছু বদলানো যায়।"
          },
          {
            "en": "A few small practices follow. When a fault of mine comes to light, let the plain sentence come before the explanation: I did this. When someone else's fault comes to mind, ask first whether the same thing lives in me. At the end of the day, let the hands, eyes and feet give a short account of where they went and what they did, and take what they report to Allah in istighfar. An admission made now, in private, costs far less than a witness who speaks later without being asked.",
            "bn": "এখান থেকে কয়েকটা ছোট অভ্যাস বেরিয়ে আসে। নিজের কোনো দোষ ধরা পড়লে ব্যাখ্যার আগে সোজা কথাটা বলুন: কাজটা আমি করেছি। অন্যের দোষ মনে এলে আগে নিজেকে জিজ্ঞেস করুন, একই জিনিস আমার মধ্যেও আছে কি না। দিনের শেষে হাত, চোখ আর পা-কে সংক্ষেপে হিসাব দিতে দিন, কোথায় গেছে, কী করেছে। তারা যা জানায়, তা নিয়ে ইস্তিগফারে আল্লাহর কাছে ফিরুন। এখন নিভৃতে দোষ স্বীকার করার খেসারত অনেক কম। পরে না চাইতেই যে সাক্ষী মুখ খুলবে, তার খেসারত অনেক বেশি।"
          }
        ]
      }
    ]
  },
  "75:20": {
    "sections": [
      {
        "h": {
          "en": "Four Words Resume the Thread",
          "bn": "চার শব্দে আবার মূল কথায়"
        },
        "p": [
          {
            "en": "Kalla bal tuhibbuna al-'ajila: no, rather you love the immediate. In Arabic the verse is four words, and it is half of a sentence; the next verse, wa-tadharuna al-akhira, and you leave the Hereafter, completes it. Kalla is a word of rejection, and bal turns from what is rejected to what is really going on. The verse therefore does two things in a breath: it refuses a claim, and it names the motive behind the claim.",
            "bn": "কাল্লা বাল তুহিব্বূনাল আজিলাহ: না, বরং তোমরা ভালোবাসো যা তাড়াতাড়ি আসে। আরবিতে আয়াতটি মাত্র চারটি শব্দের, আর এটি একটি বাক্যের অর্ধেক। বাকিটা আসে পরের আয়াতে, ওয়া তাযারূনাল আখিরাহ: আর তোমরা আখিরাতকে ছেড়ে দাও। কাল্লা প্রত্যাখ্যানের শব্দ। বাল সেখান থেকে মোড় ঘুরিয়ে দেখায় আসলে কী ঘটছে। এক নিঃশ্বাসে আয়াতটি তাই দুটি কাজ করে। একটি দাবি নাকচ করে, আর সেই দাবির পেছনের টানটা খুলে দেখায়।"
          },
          {
            "en": "The verse also comes straight after a passage of a different kind. In 75:16 to 75:19 Allah tells His Messenger ﷺ not to move his tongue in haste with the revelation, since gathering it, reciting it and explaining it are Allah's own charge. Ma'arif al-Qur'an calls those four verses a consolation set inside the surah, and says that after them the surah reverts to its basic theme, the Resurrection and the conditions of the Hereafter. On that reading, 75:20 is where the main thread picks up again.",
            "bn": "আয়াতটি আসে ভিন্ন ধরনের একটি অংশের ঠিক পরে। ৭৫:১৬ থেকে ৭৫:১৯ আয়াতে আল্লাহ তাঁর রাসূল ﷺ-কে বলেন, ওহি নিয়ে তাড়াহুড়া করে জিভ নাড়াবেন না। তা একত্র করা, পড়িয়ে দেওয়া আর বুঝিয়ে দেওয়া আল্লাহর নিজের দায়িত্ব। মাআরিফুল কুরআন এই চারটি আয়াতকে সূরার ভেতরে বসানো এক সান্ত্বনা বলে। তার মতে এর পরেই সূরা ফিরে যায় মূল বিষয়ে, অর্থাৎ পুনরুত্থান আর আখিরাতের অবস্থার বর্ণনায়। এ পাঠে ৭৫:২০ সেই জায়গা, যেখান থেকে মূল সুতোটা আবার ধরা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Kalla Refuses",
          "bn": "কাল্লা কী নাকচ করে"
        },
        "p": [
          {
            "en": "At-Tabari and the Muyassar tie the kalla to the denial that fills the surah before the parenthesis. At-Tabari, whose comment on these words is served together with 75:21, glosses it: the matter is not as you say, O people, that you will not be raised after death and will not be repaid for your deeds. The Muyassar says nearly the same, addressed to the idolaters: it is not as you claimed, that there is no raising and no recompense.",
            "bn": "তাবারী আর মুয়াসসার কাল্লাকে জুড়ে দেন সেই অস্বীকারের সঙ্গে, যা মাঝের চার আয়াতের আগে গোটা সূরা জুড়ে চলছিল। তাবারীর এ অংশের ব্যাখ্যা এসেছে ৭৫:২১-এর সঙ্গে একসাথে। তিনি বলেন: হে লোকসকল, তোমরা যা বলো ব্যাপারটা তেমন নয়। তোমরা বলো, মৃত্যুর পর তোমাদের ওঠানো হবে না, কাজের প্রতিদানও দেওয়া হবে না। মুয়াসসার মুশরিকদের সম্বোধন করে প্রায় একই কথা বলে: তোমরা যা দাবি করেছ, পুনরুত্থান নেই, প্রতিফলও নেই, ব্যাপারটা তেমন নয়।"
          },
          {
            "en": "Ibn Kathir does not dwell on the kalla but draws the line of cause directly. What carries them to deny the Day of Resurrection, he says, and to oppose the true revelation and the mighty Qur'an sent down to the Messenger ﷺ, is this love of the immediate; their whole concern is the present abode, and they are distracted and busied away from the Hereafter. As-Sa'di frames it more widely: this is what produced your heedlessness and your turning away from Allah's admonition and His reminder.",
            "bn": "ইবন কাসীর কাল্লা নিয়ে আলাদা করে থামেন না, সরাসরি কারণের রেখাটা টানেন। তাঁর কথায়, কিয়ামতের দিনকে মিথ্যা বলা আর রাসূল ﷺ-এর উপর নাজিল হওয়া সত্য ওহি ও মহান কুরআনের বিরোধিতা করার পেছনে আছে এই তাড়াতাড়ি পাওয়ার ভালোবাসা। তাদের সব চিন্তা এই সামনের দুনিয়া নিয়ে। আখিরাত থেকে তারা উদাসীন, অন্য কাজে মগ্ন। সা'দী কথাটা আরও বড় পরিসরে বলেন: এটাই তোমাদের গাফলতির কারণ, আল্লাহর উপদেশ আর তাঁর স্মরণ করিয়ে দেওয়া থেকে মুখ ফিরিয়ে নেওয়ার কারণ।"
          },
          {
            "en": "Al-Qurtubi records two other ways of hearing it. He cites Ibn 'Abbas, without a chain, as saying the kalla means that Abu Jahl does not believe in the Qur'an's interpretation and its explanation, which hooks the word to bayanahu, its explanation, at the end of 75:19. Then, under qila, it is said, he gives a second sense: kalla, they do not pray and do not give zakat, meaning the disbelievers of Makkah. The texts consulted here let these stand beside the main reading without ranking them.",
            "bn": "কুরতুবী কাল্লা বোঝার আরও দুটি ধরন উল্লেখ করেন। সনদ ছাড়া তিনি ইবন আব্বাস (রাঃ)-এর বরাতে আনেন: কাল্লার অর্থ, আবু জাহল কুরআনের তাফসীর আর তার বয়ানে ঈমান আনে না। এতে শব্দটি জুড়ে যায় ৭৫:১৯-এর শেষ শব্দ বায়ানাহু, অর্থাৎ তার ব্যাখ্যার সঙ্গে। তারপর 'কীল', অর্থাৎ 'বলা হয়' বলে তিনি দ্বিতীয় অর্থ দেন: কাল্লা, তারা নামাজ পড়ে না, যাকাতও দেয় না। এখানে উদ্দেশ্য মক্কার কাফিররা। যেসব তাফসীর দেখা হয়েছে, সেগুলো এ দুটি মতকে মূল ব্যাখ্যার পাশেই রেখে দেয়, কোনোটিকে এগিয়ে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Addressed Here",
          "bn": "সম্বোধন কাদের প্রতি"
        },
        "p": [
          {
            "en": "The you in tuhibbuna is read with different breadth. Al-Qurtubi names it outright: rather you love, O disbelievers of the people of Makkah, the immediate. Al-Baghawi, on the following verse, also says the meaning is the disbelievers of Makkah, and the Muyassar addresses the company of idolaters. On this line the verse speaks to a particular audience in Makkah who denied the raising and were confronted with it.",
            "bn": "তুহিব্বূনা শব্দের 'তোমরা' বলতে কতজনকে বোঝানো হয়েছে, তা একেক তাফসীরে একেক রকম। কুরতুবী সরাসরি নাম বলেন: বরং হে মক্কাবাসী কাফিররা, তোমরা তাড়াতাড়ি পাওয়ার জিনিস ভালোবাসো। পরের আয়াতের আলোচনায় বাগাভীও বলেন, উদ্দেশ্য মক্কার কাফিররা। আর মুয়াসসার সম্বোধন করে মুশরিকদের দলকে। এই ধারায় আয়াতটি মক্কার এক নির্দিষ্ট শ্রোতার উদ্দেশে, যারা পুনরুত্থান অস্বীকার করত আর সে কথার মুখোমুখি হয়েছিল।"
          },
          {
            "en": "At-Tabari words it more broadly. Allah, he says, is speaking to His servants who are addressed by this Qur'an and who prefer the adornment of worldly life to the Hereafter, and he puts the rebuttal in the form O people. As-Sa'di grounds the verse in a trait of the human being as such: the pleasures of this world are immediate, and man is passionately fond of the immediate. These are differences of scope, not contradictions; the texts leave both in place, and so does this article.",
            "bn": "তাবারী কথাটা বলেন আরও বিস্তৃতভাবে। তাঁর ভাষায়, আল্লাহ কথা বলছেন তাঁর সেই বান্দাদের সঙ্গে, যাদের এই কুরআন দিয়ে সম্বোধন করা হয়েছে আর যারা দুনিয়ার জীবনের চাকচিক্যকে আখিরাতের উপর প্রাধান্য দেয়। খণ্ডনটাও তিনি রাখেন 'হে লোকসকল' রূপে। সা'দী আয়াতটির ভিত্তি খোঁজেন মানুষের স্বভাবে। দুনিয়ার মজা তাৎক্ষণিক, আর মানুষ তাৎক্ষণিকের প্রতি প্রবলভাবে আসক্ত। এগুলো পরিসরের পার্থক্য, পরস্পরবিরোধ নয়। তাফসীরগুলো দুটিকেই জায়গা দেয়, এই লেখাও দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "You Love, or They Love",
          "bn": "তোমরা, নাকি তারা"
        },
        "p": [
          {
            "en": "There are two readings of the verb. Al-Qurtubi reports that the people of Madinah and the Kufans read tuhibbuna and tadharuna with ta, as direct address, and that the rest read yuhibbuna and yadharuna with ya, as a report about them. Abu 'Ubayd chose the ta, but said that were it not for his dislike of differing from those readers, he would have read ya, since man is mentioned before. Abu Hatim chose the ya. Al-Baghawi records the same split between Madinah and Kufah and the others.",
            "bn": "ক্রিয়াটির দুটি কিরাআত আছে। কুরতুবী জানান, মদীনাবাসী আর কূফার কারীরা তুহিব্বূনা ও তাযারূনা পড়েছেন 'তা' দিয়ে, সরাসরি সম্বোধন হিসেবে। বাকিরা পড়েছেন ইউহিব্বূনা ও ইয়াযারূনা, 'ইয়া' দিয়ে, তাদের সম্পর্কে খবর হিসেবে। আবু উবায়দ 'তা' বেছে নিয়েছিলেন। তবে বলেছিলেন, ওই কারীদের বিপরীতে যাওয়া অপছন্দ না হলে তিনি 'ইয়া' পড়তেন, কারণ আগে মানুষের উল্লেখ এসেছে। আবু হাতিম বেছে নেন 'ইয়া'। বাগাভীও মদীনা ও কূফা বনাম অন্যদের এই একই ভাগ উল্লেখ করেন।"
          },
          {
            "en": "Each reading has its logic in al-Qurtubi. With ya, the verb points back to 75:13, man will be informed that Day, where man means people. With ta, Allah faces them with the rebuke directly, which al-Qurtubi calls more effective for the purpose, and he sets beside it 76:27, these people love the immediate and leave behind them a heavy Day. Al-Baghawi explains the ta as standing for say to them, O Muhammad: rather you love and you leave. Either way, the charge is the same.",
            "bn": "কুরতুবী দুই কিরাআতেরই যুক্তি দেখান। 'ইয়া' পড়লে ক্রিয়াটি ফিরে যায় ৭৫:১৩-এর দিকে, সেদিন মানুষকে জানিয়ে দেওয়া হবে, যেখানে মানুষ মানে লোকজন। 'তা' পড়লে আল্লাহ তাদের মুখোমুখি দাঁড়িয়ে তিরস্কার করছেন। কুরতুবীর মতে উদ্দেশ্য সাধনে এটাই বেশি জোরালো। পাশে তিনি রাখেন ৭৬:২৭: এরা তাড়াতাড়ি পাওয়ার জিনিস ভালোবাসে আর পেছনে ফেলে রাখে এক ভারী দিন। বাগাভী 'তা'-কে ব্যাখ্যা করেন এভাবে: হে মুহাম্মাদ, তাদের বলুন, বরং তোমরা ভালোবাসো আর ছেড়ে দাও। যেভাবেই পড়া হোক, অভিযোগ একটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Near Now, Lasting Later",
          "bn": "এখন হাতের কাছে, পরে চিরস্থায়ী"
        },
        "p": [
          {
            "en": "Al-'ajila is literally the hastening one, the thing that comes quickly. Al-Qurtubi glosses it as the abode of this world and the life in it; the Muyassar as this world and its adornment. At-Tabari pairs it with its opposite: your love of the immediate world, al-dunya al-'ajila, and your preferring its desires to the deferred Hereafter, ajil al-akhira, and its bliss. Then he compresses it into one line: you believe in the immediate and you deny the deferred.",
            "bn": "আল-আজিলাহ শব্দের আক্ষরিক অর্থ যা দ্রুত আসে। কুরতুবী এর ব্যাখ্যা দেন দুনিয়ার ঘর আর তাতে বেঁচে থাকা জীবন বলে। মুয়াসসার বলে দুনিয়া আর তার সাজসজ্জা। তাবারী শব্দটিকে দাঁড় করান তার বিপরীতের পাশে। তোমাদের ভালোবাসা তাৎক্ষণিক দুনিয়ার প্রতি, আর তার কামনাকে তোমরা প্রাধান্য দাও বিলম্বিত আখিরাত ও তার নিয়ামতের উপর। তারপর একটিমাত্র বাক্যে সব গুটিয়ে আনেন: তোমরা তাৎক্ষণিকে বিশ্বাস করো, আর বিলম্বিতকে মিথ্যা বলো।"
          },
          {
            "en": "As-Sa'di explains why the pull is so strong. The world's bliss and pleasures are immediate, and the human being is enamoured of the immediate, while the lasting bliss of the Hereafter is delayed. For that reason, he says, you grew heedless of it and left it, as if you had not been created for it, and as if this abode were the abode of settled dwelling, on which the most precious years of a life are spent and for which people strive through the hours of night and day.",
            "bn": "টানটা এত জোরালো কেন, সা'দী তা বুঝিয়ে দেন। দুনিয়ার নিয়ামত আর মজা হাতের কাছে, আর মানুষ হাতের কাছের জিনিসে মুগ্ধ। অথচ আখিরাতের স্থায়ী নিয়ামত আসবে পরে। তাঁর ভাষায়, এ কারণেই তোমরা তা থেকে গাফিল হয়েছ, তাকে ছেড়ে দিয়েছ, যেন তোমাদের তার জন্য সৃষ্টিই করা হয়নি। যেন এই ঘরটাই চিরকাল থাকার ঘর, যার পেছনে জীবনের সবচেয়ে দামি বছরগুলো খরচ হয়, আর যার জন্য দিনরাত ছোটাছুটি চলে।"
          },
          {
            "en": "The next verse finishes the thought. Al-Qurtubi reads wa-tadharuna al-akhira as you leave the Hereafter and the work for it, and notes that in some commentary al-akhira here means the Garden. Al-Baghawi, on the ya reading, explains it as choosing this world over the final outcome and working for it. Ibn Kathir says their concern is only the present abode, while they are heedless and distracted from what comes after.",
            "bn": "পরের আয়াত চিন্তাটা শেষ করে। কুরতুবী ওয়া তাযারূনাল আখিরাহ-র অর্থ করেন: তোমরা আখিরাত আর তার জন্য আমল ছেড়ে দাও। তিনি এটাও জানান যে কোনো কোনো তাফসীরে এখানে আখিরাত মানে জান্নাত। বাগাভী 'ইয়া' কিরাআতের ব্যাখ্যায় বলেন, তারা শেষ পরিণামের উপর দুনিয়াকে বেছে নেয় আর তার জন্যই খাটে। ইবন কাসীর বলেন, তাদের সব মনোযোগ এই সামনের ঘরে, আর পরে যা আসছে তা থেকে তারা উদাসীন ও অন্যমনস্ক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charge Is Preference",
          "bn": "দোষটা প্রাধান্য দেওয়ায়"
        },
        "p": [
          {
            "en": "It would be easy to hear this verse as a condemnation of ordinary life: of earning, eating, family and rest. The commentators consulted here do not read it that way. The words they reach for are ithar, preferring, and tark, leaving. At-Tabari speaks of preferring this world's desires to the Hereafter; as-Sa'di of preferring it to the Hereafter so that you leave the work for it. The fault named is a ranking turned upside down, and the abandonment that follows.",
            "bn": "আয়াতটি শুনে মনে হতে পারে, সাধারণ জীবনটাই এখানে নিন্দিত: রোজগার, খাওয়া-পরা, পরিবার, বিশ্রাম। যেসব তাফসীর দেখা হয়েছে, সেগুলো আয়াতটিকে এভাবে পড়ে না। তাঁরা যে শব্দগুলো বেছে নেন তা হলো ঈসার, অর্থাৎ প্রাধান্য দেওয়া, আর তরক, অর্থাৎ ছেড়ে দেওয়া। তাবারী বলেন দুনিয়ার কামনাকে আখিরাতের উপর প্রাধান্য দেওয়ার কথা। সা'দী বলেন দুনিয়াকে আখিরাতের উপর রাখা, ফলে আখিরাতের আমল ছেড়ে দেওয়ার কথা। দোষ হলো অগ্রাধিকার উল্টে ফেলা, তারপর আখিরাতকে ছেড়ে দেওয়া।"
          },
          {
            "en": "Ibn Kathir's word is similar: their only concern, their himma, is the present world. That is a description of a heart with nothing beyond the near, not of a person who also enjoys the near. As-Sa'di's phrase as if you had not been created for it locates the error exactly: treating this abode as the place of settled dwelling. The verse al-Qurtubi sets beside this one, 76:27, speaks in the same terms: they love the immediate and leave behind them a heavy Day.",
            "bn": "ইবন কাসীরের শব্দও কাছাকাছি: তাদের একমাত্র চিন্তা, তাদের হিম্মত, এই সামনের দুনিয়া। এটা এমন এক অন্তরের ছবি, যার কাছের জিনিসের বাইরে আর কিছু নেই। কাছের জিনিস উপভোগ করেও যে আরও দূরে তাকায়, তার ছবি এটা নয়। সা'দীর কথা, যেন তোমাদের তার জন্য সৃষ্টিই করা হয়নি, ভুলটা ঠিক কোথায় তা দেখিয়ে দেয়। ভুলটা হলো এই ঘরকে চিরস্থায়ী ঠিকানা ভাবা। কুরতুবী যে আয়াতটিকে এর পাশে রাখেন, সেই ৭৬:২৭-ও একই ভাষায় কথা বলে: তারা তাড়াতাড়ি পাওয়ার জিনিস ভালোবাসে আর পেছনে ফেলে রাখে এক ভারী দিন।"
          },
          {
            "en": "The Qur'an states the same ranking elsewhere in the plain language of preference. In 87:16 and 87:17 it says: but you prefer the worldly life, while the Hereafter is better and more enduring. Nothing in that sentence calls the worldly life worthless; it says which of the two is better and which lasts. That is the scale the commentators apply to 75:20 and 75:21. The love being rebuked is a love that has displaced its betters, not every pleasure a person takes in the gifts of this life.",
            "bn": "কুরআন অন্য জায়গাতেও একই অগ্রাধিকারের কথা বলে, সোজা প্রাধান্য দেওয়ার ভাষায়। ৮৭:১৬ ও ৮৭:১৭ আয়াতে আছে: কিন্তু তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও, অথচ আখিরাতই উত্তম ও বেশি স্থায়ী। এ বাক্যে দুনিয়ার জীবনকে মূল্যহীন বলা হয়নি। বলা হয়েছে, দুইয়ের মধ্যে কোনটা উত্তম আর কোনটা টিকে থাকে। ৭৫:২০ ও ৭৫:২১-এ তাফসীরকারেরা এই মাপকাঠিই প্রয়োগ করেন। যে ভালোবাসার নিন্দা করা হচ্ছে, তা নিজের চেয়ে বড় জিনিসকে সরিয়ে জায়গা দখল করেছে। এ জীবনের নিয়ামতে মানুষ যে আনন্দ পায়, তার সবটাই এ নিন্দার আওতায় পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Haste Behind, Haste Ahead",
          "bn": "আগে-পরে দুই তাড়াহুড়া"
        },
        "p": [
          {
            "en": "None of the commentators consulted for this verse attaches a sound hadith to it. Ibn Kathir does cite, from Ahmad and noting it is also in al-Bukhari and Muslim, Ibn 'Abbas's account of the Prophet ﷺ moving his lips to keep pace with the revelation, but he attaches it to 75:16 to 75:19, and it belongs to that passage. The two passages do share a root in the Arabic: li-ta'jala bihi, to hasten with it, in 75:16, and al-'ajila here. None of the commentators consulted here builds anything on that, and neither does this article.",
            "bn": "এই আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদিস জুড়ে দেয়নি। ইবন কাসীর অবশ্য আহমাদ থেকে ইবন আব্বাস (রাঃ)-এর বর্ণনা আনেন, আর জানান যে বুখারী ও মুসলিমেও তা আছে। ওহির সঙ্গে তাল রাখতে নবী ﷺ ঠোঁট নাড়াতেন, বর্ণনাটি সে বিষয়ে। তবে তিনি তা জুড়েছেন ৭৫:১৬ থেকে ৭৫:১৯ আয়াতের সঙ্গে, আর বর্ণনাটি সেই অংশেরই। আরবিতে দুই অংশে একটি ধাতু মিলে যায়: ৭৫:১৬-এ লিতা'জালা বিহী, তা নিয়ে তাড়াহুড়া করতে, আর এখানে আল-আজিলাহ। আনা তাফসীরগুলোর কেউ এর উপর কিছু দাঁড় করাননি, এই লেখাও করছে না।"
          },
          {
            "en": "Something else needs saying plainly. Where the commentators name the addressees as the idolaters or the disbelievers of Makkah, and where al-Qurtubi's report names Abu Jahl, the verse speaks only of what it names: people of that time who denied the raising and were answered by revelation. It licenses nothing against any living person or community. No reader is given the right to point at a neighbour and accuse him of loving the immediate. The verse is a mirror, held up first to whoever is reading it.",
            "bn": "আরেকটা কথা সোজাসুজি বলা দরকার। তাফসীরকারেরা যেখানে সম্বোধিতদের মুশরিক বা মক্কার কাফির বলে চিহ্নিত করেন, আর কুরতুবীর বর্ণনা যেখানে আবু জাহলের নাম নেয়, সেখানে আয়াতটি শুধু তা-ই বলে যা তাফসীরে আছে। সে যুগের কিছু মানুষ পুনরুত্থান অস্বীকার করেছিল, আর ওহি তাদের জবাব দিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। প্রতিবেশীর দিকে আঙুল তুলে তাকে 'তাড়াতাড়ির প্রেমিক' বলার অধিকার কোনো পাঠকের নেই। আয়াতটি এক আয়না, যা প্রথমে ধরা হয় পাঠকের নিজের সামনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Look of the Clear-Sighted",
          "bn": "দূরদর্শীর চোখে দেখা"
        },
        "p": [
          {
            "en": "As-Sa'di closes his comment with an invitation rather than a verdict. Had you preferred the Hereafter to this world, he says, and looked at outcomes with the look of the clear-sighted and the intelligent, you would have succeeded and gained a profit with no loss in it, and won a triumph with no misery attached. The word he uses, al-basir, recalls 75:14 a few verses earlier, where man is a witness, basira, against himself. He knows his own choices.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শেষ করেন রায় দিয়ে নয়, আহ্বান দিয়ে। তিনি বলেন, তোমরা যদি দুনিয়ার উপর আখিরাতকে প্রাধান্য দিতে, আর বুদ্ধিমান দূরদর্শীর মতো পরিণামের দিকে তাকাতে, তবে সফল হতে। এমন লাভ পেতে যাতে কোনো ক্ষতি নেই, এমন বিজয় যার সঙ্গে কোনো দুর্ভাগ্য নেই। তিনি যে শব্দটি ব্যবহার করেন, আল-বাসীর, তা মনে করিয়ে দেয় কয়েক আয়াত আগের ৭৫:১৪-কে। সেখানে বলা হয়েছে, মানুষ নিজের সম্পর্কে নিজেই বাসীরাহ, সব দেখে। নিজের বাছাইগুলো সে নিজেই জানে।"
          },
          {
            "en": "That is where the verse leaves a reader today. The immediate is not hidden from anyone; it is what fills the day. The question is what has been quietly set aside to make room for it: a prayer delayed until it is lost, a reminder heard and filed away, a deed postponed because its reward cannot be seen yet. The verse names the love and the leaving together. Loosening the second does not require hating the first, only seeing past it.",
            "bn": "আজকের পাঠককে আয়াতটি এখানে এনে দাঁড় করায়। তাৎক্ষণিক জিনিস কারও কাছে লুকানো নয়, দিনটা তো তাতেই ভরা। প্রশ্ন হলো, তার জন্য জায়গা করতে চুপচাপ কী সরিয়ে রাখা হয়েছে। হয়তো এমন নামাজ, যা পেছাতে পেছাতে হাতছাড়া হয়ে যায়। হয়তো এমন উপদেশ, যা শুনে তুলে রাখা হয়। কিংবা এমন আমল, যা পিছিয়ে যায় কারণ তার প্রতিদান এখনো চোখে পড়ে না। আয়াতটি ভালোবাসা আর ছেড়ে দেওয়া, দুটোর কথা একসঙ্গে বলে। দ্বিতীয়টা আলগা করতে প্রথমটাকে ঘৃণা করতে হয় না। শুধু তার ওপারে তাকাতে হয়।"
          }
        ]
      }
    ]
  },
  "75:23": {
    "sections": [
      {
        "h": {
          "en": "Two Words a Letter Apart",
          "bn": "এক অক্ষরের ব্যবধান"
        },
        "p": [
          {
            "en": "Wujuhun yawma'idhin nadira, ila rabbiha nazira: faces, that Day, will be radiant, looking at their Lord. Each verse is three Arabic words, and the two closing words differ by a single letter: nadira is written with dad, nazira with za'. The first says how the faces appear, the second where they are turned. At-Tabari explains nadira as handsome and beautiful from bliss, citing the Arabs' saying that a face nadura when blessing has made it fair.",
            "bn": "উজূহুঁই ইয়াওমাইযিন নাদিরাহ, ইলা রাব্বিহা নাযিরাহ: সেদিন কিছু মুখ উজ্জ্বল হবে, তাদের রবের দিকে তাকিয়ে থাকবে। প্রতিটি আয়াত আরবিতে তিনটি শব্দের। শেষ দুটি শব্দের তফাত কেবল এক অক্ষরে: নাদিরাহ লেখা হয় দোয়াদ দিয়ে, নাযিরাহ যোয়া দিয়ে। প্রথম শব্দ বলে মুখগুলো দেখতে কেমন, দ্বিতীয়টি বলে সেগুলো কোন দিকে ফেরানো। তাবারী নাদিরাহর অর্থ করেন নিয়ামতের কারণে সুন্দর ও সুশ্রী। প্রমাণ দেন আরবদের বুলি থেকে: নিয়ামত কারও চেহারা সুন্দর করে দিলে বলা হয় তার মুখ নাদুরা হয়েছে।"
          },
          {
            "en": "At-Tabari lists the early glosses with their chains. Al-Hasan said handsome. Mujahid, in several reports, said the brightness of the faces is their beauty, and in one, that it comes from joy, bliss and delight; through Ibn Abi Najih he said simply, overjoyed. Ibn Zayd said soft with ease. Ibn Kathir gathers the sense as splendid, radiant, glowing and delighted with goodness.",
            "bn": "প্রথম যুগের ব্যাখ্যাগুলো তাবারী সনদসহ সাজিয়ে দেন। হাসান বলেছেন, সুন্দর। মুজাহিদের কয়েকটি বর্ণনায় আছে, মুখের ঔজ্জ্বল্য মানে তার সৌন্দর্য। একটিতে আছে, এ ঔজ্জ্বল্য আসে আনন্দ, নিয়ামত আর পরিতৃপ্তি থেকে। ইবন আবী নাজীহের সূত্রে তিনি শুধু বলেছেন, খুশিতে ভরা। ইবন যায়দ বলেছেন, আরামে কোমল। ইবন কাসীর সব মিলিয়ে অর্থ করেন ঝলমলে, দীপ্ত, উজ্জ্বল আর কল্যাণে আনন্দিত।"
          },
          {
            "en": "The commentators also join the two words in a single sentence. At-Tabari, al-Baghawi and Ibn Kathir all carry al-Hasan's line on the pair: the faces look at the Creator, and it is their right to be radiant while they look at the Creator. The line ties the shine of the first verse to the gaze of the second. As-Sa'di says something close: when they see Him their faces grow brighter, and they gain beauty upon their beauty.",
            "bn": "তাফসীরকারেরা দুটি শব্দকে একটি বাক্যেও গেঁথেছেন। তাবারী, বাগাভী আর ইবন কাসীর তিনজনই হাসানের কথাটি এনেছেন: মুখগুলো স্রষ্টার দিকে তাকাবে, আর যে মুখ স্রষ্টার দিকে তাকিয়ে আছে, তার উজ্জ্বল হওয়াই তো সাজে। প্রথম আয়াতের দীপ্তিকে কথাটি দ্বিতীয় আয়াতের দৃষ্টির সঙ্গে বেঁধে দেয়। সা'দীর কথাও কাছাকাছি। তিনি বলেন, তাঁকে দেখার পর তাদের মুখ আরও উজ্জ্বল হবে, সৌন্দর্যের উপর আরও সৌন্দর্য যোগ হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eyes Upon the Creator",
          "bn": "স্রষ্টার দিকে চোখ"
        },
        "p": [
          {
            "en": "Ila rabbiha nazira. Al-Qurtubi glosses rabbiha as their Creator and Owner, and nazira as looking at their Lord, and adds: on this are the majority of scholars. Ibn Kathir is more direct: they will see Him with their own eyes. The Muyassar, on both verses, says the faces of the people of happiness will be shining and beautiful, seeing their Creator and delighting in it.",
            "bn": "ইলা রাব্বিহা নাযিরাহ। কুরতুবী রাব্বিহার ব্যাখ্যা দেন তাদের স্রষ্টা ও মালিক, আর নাযিরাহর অর্থ করেন তাদের রবের দিকে তাকিয়ে থাকবে। সঙ্গে বলেন, অধিকাংশ আলিম এ মতেই আছেন। ইবন কাসীর আরও সোজা কথায় বলেন, তারা তাঁকে নিজের চোখে দেখবে। মুয়াসসার দুই আয়াত একসঙ্গে ব্যাখ্যা করে: সৌভাগ্যবানদের মুখ সেদিন দীপ্ত ও সুন্দর থাকবে। তারা দেখবে তাদের স্রষ্টাকে, আর সে দেখায় আনন্দ পাবে।"
          },
          {
            "en": "At-Tabari opens the dispute with this side: some said it means that they look at their Lord. Under it he gives Ikrima, through Yazid an-Nahwi: they look at their Lord, a real looking. He gives al-Hasan's line, and Atiyya al-Awfi: they look at Allah, their sight does not encompass Him because of His greatness, while His sight encompasses them, and that, Atiyya said, is the meaning of 6:103, vision does not reach Him.",
            "bn": "মতভেদের আলোচনা তাবারী শুরু করেন এ পক্ষ দিয়ে: কেউ কেউ বলেছেন, এর অর্থ তারা তাদের রবের দিকে তাকাবে। এর নিচে তিনি আনেন ইয়াযীদ আন-নাহবীর সূত্রে ইকরিমার কথা: তারা সত্যিকার অর্থেই তাদের রবের দিকে তাকাবে। তারপর আসে হাসানের কথা, আর আতিয়্যা আল-আওফীর ব্যাখ্যা। আতিয়্যা বলেন, তারা আল্লাহর দিকে তাকাবে, কিন্তু তাঁর মহত্ত্বের কারণে তাদের দৃষ্টি তাঁকে বেষ্টন করতে পারবে না, অথচ তাঁর দৃষ্টি তাদের ঘিরে রাখবে। তাঁর মতে ৬:১০৩ আয়াতের কথা, দৃষ্টি তাঁকে নাগালে পায় না, এর অর্থ এটাই।"
          },
          {
            "en": "Al-Baghawi cites Ibn Abbas: they look at their Lord openly, without a veil. As-Sa'di adds ranks: some see Him every morning and evening, some once each Friday, and when they see Him they forget the bliss they are in. Ma'arif al-Qur'an, citing Mazhari, gives similar ranks, names the Mu'tazilites and Kharijites as denying the vision, and says Ahlus-sunnah hold unanimously that He will be seen, beyond space, direction, shape or form.",
            "bn": "বাগাভী ইবন আব্বাস (রাঃ)-এর কথা আনেন: তারা পর্দা ছাড়া প্রকাশ্যে তাদের রবের দিকে তাকাবে। সা'দী এর সঙ্গে স্তরের কথা যোগ করেন। কেউ তাঁকে দেখবে প্রতিদিন সকাল-সন্ধ্যায়, কেউ প্রতি জুমায় একবার। আর যখন দেখবে, তখন যে নিয়ামতের মধ্যে আছে তা-ও ভুলে যাবে। মাআরিফুল কুরআন মাযহারীর বরাতে প্রায় একই স্তরের কথা বলে। মু'তাযিলা ও খারিজিদের নাম করে জানায়, তারা এ দর্শন অস্বীকার করে। আর বলে, আহলুস সুন্নাহ একমত যে তাঁকে দেখা যাবে, তবে স্থান, দিক, আকার বা আকৃতির ঊর্ধ্বে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Read It as Waiting",
          "bn": "যাঁরা অপেক্ষা অর্থে পড়েছেন"
        },
        "p": [
          {
            "en": "Then at-Tabari gives the other side in its own words: others said, rather, its meaning is that they wait for the reward from their Lord. Through Mansur, Mujahid said: it waits for the reward from Him. Through Sufyan and Mansur, in several chains: it waits for the reward from its Lord, and in one of them Mujahid adds, none of His creation sees Him. Through al-A'mash, he said it waits for His provision and His bounty, and in another report, for what its Lord has ordered for it.",
            "bn": "এরপর তাবারী অন্য পক্ষের কথা তাদের নিজের ভাষায় তুলে ধরেন: অন্যরা বলেছেন, বরং এর অর্থ তারা তাদের রবের কাছ থেকে প্রতিদানের অপেক্ষায় থাকবে। মানসূরের সূত্রে মুজাহিদ বলেছেন, তাঁর কাছ থেকে প্রতিদানের অপেক্ষা করবে। সুফইয়ান ও মানসূরের কয়েকটি সূত্রে আছে, রবের কাছ থেকে প্রতিদানের অপেক্ষা করবে। এর একটিতে মুজাহিদ যোগ করেন, তাঁর সৃষ্টির কেউ তাঁকে দেখে না। আ'মাশের সূত্রে তিনি বলেছেন, তাঁর রিযিক ও অনুগ্রহের অপেক্ষা করবে। আরেক বর্ণনায় আছে, রব তার জন্য যা হুকুম করেছেন তার অপেক্ষা করবে।"
          },
          {
            "en": "At-Tabari also keeps a short exchange. The narrator told Mujahid that people were saying, in a hadith, that they would see their Lord; Mujahid answered: He sees, and nothing sees Him. Beside Mujahid, at-Tabari names Abu Salih, through Isma'il ibn Abi Khalid: it waits for the reward. Ibn Kathir confirms both names, noting that Ibn Jarir reported the waiting reading from Mujahid by more than one route, and that Abu Salih said the same.",
            "bn": "তাবারী ছোট একটি কথোপকথনও রেখে দিয়েছেন। বর্ণনাকারী মুজাহিদকে বললেন, লোকেরা একটি হাদিসের বরাতে বলছে যে তারা তাদের রবকে দেখবে। মুজাহিদ জবাব দিলেন, তিনি দেখেন, কিন্তু কিছুই তাঁকে দেখে না। মুজাহিদের পাশাপাশি তাবারী ইসমাঈল ইবন আবী খালিদের সূত্রে আবূ সালিহের নাম আনেন। তাঁর কথা: প্রতিদানের অপেক্ষা করবে। ইবন কাসীরও দুজনের নাম নিশ্চিত করেন। তিনি জানান, অপেক্ষার এ অর্থ ইবন জারীর মুজাহিদ থেকে একাধিক সূত্রে বর্ণনা করেছেন, আর আবূ সালিহও একই কথা বলেছেন।"
          },
          {
            "en": "Al-Qurtubi first reports the reading without a name: it was said that the looking here is waiting for the reward they have with Allah. He says it was reported from Ibn Umar and Mujahid, that Ikrima said it means waiting for their Lord's command, and that al-Mawardi related it from Ibn Umar and Ikrima as well. Then he adds: it is not known except from Mujahid alone. Those who held it, he says, argued from 6:103, vision does not reach Him.",
            "bn": "কুরতুবী প্রথমে কারও নাম না নিয়ে মতটি উল্লেখ করেন: বলা হয়েছে, এখানে তাকানো মানে আল্লাহর কাছে তাদের জন্য যে প্রতিদান রাখা আছে তার অপেক্ষা। তিনি জানান, এ কথা ইবন উমর (রাঃ) ও মুজাহিদ থেকে বর্ণিত হয়েছে। ইকরিমা বলেছেন, রবের আদেশের অপেক্ষা। মাওয়ারদী এটি ইবন উমর (রাঃ) ও ইকরিমা থেকেও উল্লেখ করেছেন। এরপর কুরতুবী নিজে যোগ করেন, এ মত মুজাহিদ ছাড়া আর কারও থেকে পরিচিত নয়। যাঁরা এ মত নিয়েছেন, তাঁরা দলিল নিয়েছেন ৬:১০৩ আয়াত থেকে: দৃষ্টি তাঁকে নাগালে পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Two Were Weighed",
          "bn": "দুই মতের পাল্লা"
        },
        "p": [
          {
            "en": "At-Tabari states his own preference plainly. The more correct of the two sayings in our view, he writes, is the one reported from al-Hasan and Ikrima: that it means they look at their Creator. He adds that a report from the Prophet ﷺ came with that meaning, and gives it from Ibn Umar: the highest of the people of the Garden in rank is the one who looks at the face of Allah twice every day; then he recited this verse.",
            "bn": "তাবারী নিজের পছন্দ স্পষ্ট করে বলেন। তাঁর ভাষায়, দুই মতের মধ্যে আমাদের কাছে বেশি সঠিক হলো হাসান ও ইকরিমা থেকে বর্ণিত মতটি: এর অর্থ তারা তাদের স্রষ্টার দিকে তাকাবে। তিনি আরও বলেন, নবী ﷺ থেকে এ অর্থেই একটি বর্ণনা এসেছে, এবং ইবন উমর (রাঃ) থেকে সেটি উদ্ধৃত করেন: জান্নাতবাসীদের মধ্যে মর্যাদায় সবচেয়ে উঁচু সে, যে প্রতিদিন দুবার আল্লাহর চেহারার দিকে তাকাবে। তারপর তিনি এ আয়াত তিলাওয়াত করেন।"
          },
          {
            "en": "Al-Qurtubi is sharper. He calls the waiting reading very weak, outside what the apparent sense of the verse and the reports require. He then quotes two scholars of language. Ath-Tha'labi says that when the Arabs mean waiting they say nazartuhu, with no preposition, as in hal yanzuruna illa as-sa'a, are they waiting for anything but the Hour (43:66); for reflection they say nazartu fihi; but when looking is joined to ila and the face is mentioned, it can only mean seeing with the eye. Al-Azhari calls Mujahid's reading a mistake on the same grounds.",
            "bn": "কুরতুবী আরও কড়া। তিনি অপেক্ষার মতটিকে বলেন খুবই দুর্বল, আয়াতের বাহ্যিক অর্থ আর হাদিসগুলো যা দাবি করে তার বাইরে। এরপর তিনি দুজন ভাষাবিদের কথা আনেন। সা'লাবী বলেন, আরবরা অপেক্ষা বোঝাতে চাইলে বলে নাযারতুহু, মাঝে কোনো অব্যয় ছাড়া। যেমন ৪৩:৬৬ আয়াতে: হাল ইয়ানযুরূনা ইল্লাস সা'আহ, তারা কি কেবল কিয়ামতেরই অপেক্ষা করছে? চিন্তা বোঝাতে বলে নাযারতু ফীহি। কিন্তু তাকানো যখন ইলা অব্যয়ের সঙ্গে আসে, আর সঙ্গে মুখের উল্লেখ থাকে, তখন অর্থ কেবল চোখে দেখা। আযহারীও একই যুক্তিতে মুজাহিদের মতকে ভুল বলেছেন।"
          },
          {
            "en": "On 6:103, al-Qurtubi answers that it concerns this world. He also reports from Abu Nasr al-Qushayri a related view, that ila here is the singular of ala', blessings; al-Qushayri rejects it as void, since that singular is written with alif, not ya'. Ibn Kathir sets the same view beside Mujahid's and Abu Salih's waiting for reward, and says whoever holds it has gone far afield and is wrong. He points to 83:15, from their Lord that Day they will be veiled, and quotes ash-Shafi'i: the wicked were veiled only because He knew the righteous would see Him.",
            "bn": "৬:১০৩ আয়াতের ব্যাপারে কুরতুবীর জবাব, সেটি দুনিয়ার কথা। তিনি আবূ নাসর আল-কুশাইরী থেকে কাছাকাছি আরেকটি মতও উল্লেখ করেন। সে মতে এখানে ইলা শব্দটি আলা'-এর একবচন, যার অর্থ নিয়ামত। কুশাইরী একে বাতিল বলেন, কারণ সে একবচন লেখা হয় আলিফ দিয়ে, ইয়া দিয়ে নয়। ইবন কাসীর এ মতকে মুজাহিদ ও আবূ সালিহের প্রতিদানের অপেক্ষার মতের পাশে রাখেন। তাঁর মতে, যে এ কথা বলে সে অনেক দূরে সরে গেছে এবং ভুল করেছে। তিনি ৮৩:১৫ আয়াতের দিকে ইশারা করেন: সেদিন তারা তাদের রব থেকে আড়ালে থাকবে। সঙ্গে শাফেয়ীর কথা আনেন: পাপীদের আড়াল করা হয়েছে এ কারণেই যে, তিনি জানতেন নেককারেরা তাঁকে দেখবে।"
          },
          {
            "en": "This article reports that weighing without adding to it. On one side stand al-Hasan, Ikrima and Atiyya al-Awfi, with what al-Qurtubi calls the majority; on the other, Mujahid and Abu Salih, with a waiting for reward, provision or command. Every commentator here who states a view prefers the first, at-Tabari among them, while at-Tabari, al-Qurtubi and Ibn Kathir still keep the second by name.",
            "bn": "এ লেখা তাফসীরগুলোর সেই ওজনের খবর দেয়, নিজে তাতে কিছু যোগ করে না। এক দিকে হাসান, ইকরিমা ও আতিয়্যা আল-আওফী, আর কুরতুবী যাকে অধিকাংশের মত বলেছেন। অন্য দিকে মুজাহিদ ও আবূ সালিহ, যাঁদের কাছে এর অর্থ প্রতিদান, রিযিক বা আদেশের অপেক্ষা। এখানে যত তাফসীরকার নিজের মত জানিয়েছেন, সবাই প্রথমটিকে অগ্রাধিকার দিয়েছেন, তাবারীও তাঁদের একজন। তবু তাবারী, কুরতুবী ও ইবন কাসীর দ্বিতীয় মতটি নাম ধরেই সংরক্ষণ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "As You See This Moon",
          "bn": "এই চাঁদ যেমন দেখো"
        },
        "p": [
          {
            "en": "Al-Bukhari records Jarir's hadith as no. 554: Qais narrated that Jarir said, \"We were with the Prophet ﷺ and he looked at the moon, full moon, and said, 'Certainly you will see your Lord as you see this moon and you will have no trouble in seeing Him. So if you can avoid missing (through sleep or business, etc.) a prayer before the sunrise (Fajr) and a prayer before sunset ('Asr), you must do so.' He then recited: And celebrate the praises of your Lord before the rising of the sun and before its setting (50:39).\" Isma'il said, \"Offer those prayers and do not miss them.\"",
            "bn": "বুখারী জারীর (রাঃ)-এর হাদিসটি বর্ণনা করেছেন ৫৫৪ নম্বরে। কায়স বলেন, জারীর (রাঃ) বলেছেন: আমরা নবী ﷺ-এর কাছে ছিলাম। তিনি চাঁদের দিকে তাকালেন, পূর্ণিমার চাঁদ, আর বললেন, নিশ্চয় তোমরা তোমাদের রবকে দেখবে, যেমন এই চাঁদ দেখছ। তাঁকে দেখতে তোমাদের কোনো কষ্ট হবে না। কাজেই সূর্য ওঠার আগের নামাজ (ফজর) আর সূর্য ডোবার আগের নামাজ (আসর) যদি (ঘুম বা ব্যস্ততা ইত্যাদির কারণে) ছুটে যাওয়া থেকে বাঁচাতে পারো, তবে অবশ্যই তা করো। তারপর তিনি তিলাওয়াত করলেন: আর সূর্য ওঠার আগে ও অস্ত যাওয়ার আগে তোমার রবের প্রশংসাসহ তাসবীহ পাঠ কর (৫০:৩৯)। ইসমাঈল বলেন, এ দুই নামাজ আদায় করো, কিছুতেই ছুটতে দিয়ো না।"
          },
          {
            "en": "It stands in al-Bukhari's Sahih, the collector's own standard. Two things should be marked. The hadith does not mention this verse: the passage recited in it is 50:39, and the link to 75:23 is made by Ibn Kathir and al-Qurtubi, as evidence for reading nazira as seeing. And its instruction is practical: the promise of the vision is followed at once by a call to guard the dawn and afternoon prayers.",
            "bn": "হাদিসটি বুখারীর সহীহ গ্রন্থে আছে, আর সেটাই সংকলকের নিজের মানদণ্ড। দুটি কথা আলাদা করে বলা দরকার। হাদিসে এ আয়াতের উল্লেখ নেই। নবী ﷺ এতে যে আয়াত তিলাওয়াত করেছেন তা ৫০:৩৯। ৭৫:২৩ আয়াতের সঙ্গে এর সংযোগ টেনেছেন ইবন কাসীর ও কুরতুবী, নাযিরাহকে দেখা অর্থে পড়ার দলিল হিসেবে। আর হাদিসের নির্দেশটা একেবারে বাস্তব। দর্শনের প্রতিশ্রুতির পরপরই আসে ফজর আর আসরের নামাজ হেফাজতের ডাক।"
          },
          {
            "en": "One report does recite this verse. At-Tirmidhi records (no. 3330) from Ibn Umar that the Messenger of Allah ﷺ said: \"Indeed the least of the people of Paradise in rank, is the one who shall look at his gardens, his wives, his servants, and his beds from the distance of a thousand years, and the noblest of them with Allah is the one who shall look at His Face morning and night.\" Then he recited 75:22 and 75:23. At-Tirmidhi himself calls it gharib, and notes that others narrated it from Ibn Umar as his own saying, not raised to the Prophet ﷺ.",
            "bn": "একটি বর্ণনায় অবশ্য এ আয়াতই তিলাওয়াত হয়েছে। তিরমিযী (৩৩৩০ নম্বরে) ইবন উমর (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: মর্যাদায় জান্নাতবাসীদের মধ্যে সবচেয়ে নিচু সে, যে হাজার বছরের পথের দূরত্ব পর্যন্ত তার বাগান, স্ত্রী, সেবক আর পালঙ্ক দেখবে। আর আল্লাহর কাছে তাদের মধ্যে সবচেয়ে সম্মানিত সে, যে সকাল-সন্ধ্যা তাঁর চেহারার দিকে তাকাবে। তারপর তিনি ৭৫:২২ ও ৭৫:২৩ তিলাওয়াত করেন। তিরমিযী নিজে একে গরীব বলেছেন। তিনি আরও জানান, অন্যরা এটি ইবন উমর (রাঃ)-এর নিজের কথা হিসেবে বর্ণনা করেছেন, নবী ﷺ পর্যন্ত পৌঁছাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Faces Bracing for a Blow",
          "bn": "আঘাতের অপেক্ষায় মুখ"
        },
        "p": [
          {
            "en": "The next two verses give the other side of the Day: and faces, that Day, will be basira, thinking that a faqira will be done to them. At-Tabari explains basira as changed in colour, darkened and grim, and Mujahid, in his report, as scowling. Ibn Kathir adds Qatada's gloomy and as-Suddi's their colour will change. Tazunnu, he says, means they will be certain, and faqira is a disaster in Mujahid's word and an evil in Qatada's.",
            "bn": "পরের দুই আয়াত সেদিনের অন্য ছবি দেখায়: আর কিছু মুখ সেদিন হবে বাসিরাহ, তারা ধারণা করবে যে তাদের সঙ্গে ফাকিরাহ করা হবে। তাবারী বাসিরাহর ব্যাখ্যা দেন রং বদলে যাওয়া, কালো হয়ে যাওয়া, বিকৃত। মুজাহিদের বর্ণনায় এর অর্থ ভ্রূকুটি করা। ইবন কাসীর যোগ করেন কাতাদার ব্যাখ্যা, বিষণ্ণ, আর সুদ্দীর ব্যাখ্যা, তাদের রং বদলে যাবে। তিনি বলেন, তাযুন্নু মানে তারা নিশ্চিত হবে। ফাকিরাহ মুজাহিদের ভাষায় বিপর্যয়, কাতাদার ভাষায় অনিষ্ট।"
          },
          {
            "en": "Ibn Kathir sets the contrast beside its parallels: the day some faces turn white and some turn black (3:106), the faces bright and laughing against the dust-stained ones (80:38 to 80:42), the humbled faces and the joyful ones in surah 88. In 75:23 the bright faces are turned towards their Lord; in 75:25 the dark faces are turned towards what they dread.",
            "bn": "ইবন কাসীর এ বৈপরীত্যকে অন্য আয়াতের পাশে রাখেন। যেদিন কিছু মুখ সাদা হবে আর কিছু মুখ কালো (৩:১০৬)। কিছু মুখ উজ্জ্বল ও হাস্যোজ্জ্বল, আর কিছু মুখ ধুলোমলিন (৮০:৩৮ থেকে ৮০:৪২)। সূরা গাশিয়াতে (৮৮) অবনত মুখ আর আনন্দিত মুখ। ৭৫:২৩ আয়াতে উজ্জ্বল মুখগুলো তাদের রবের দিকে ফেরানো। ৭৫:২৫ আয়াতে মলিন মুখগুলো চেয়ে আছে যে আঘাতের ভয় করছে তার দিকে।"
          },
          {
            "en": "This needs saying plainly. These verses describe two groups of faces on the Day of Resurrection, as the text describes them. They give no licence to look at any living person, by face, colour or fortune, and place them in either group, and no licence against any community. The question they put is aimed inward, at the reader's own face and where it is turned.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ আয়াতগুলো কিয়ামতের দিনের দুই দল মুখের বর্ণনা দেয়, ঠিক যেভাবে কুরআন তা বর্ণনা করেছে। কোনো জীবিত মানুষের চেহারা, গায়ের রং বা ভাগ্য দেখে তাকে এর কোনো দলে ফেলার অনুমতি এ আয়াত দেয় না। কোনো সম্প্রদায়ের বিরুদ্ধেও কিছুর অনুমতি দেয় না। এর প্রশ্নটা ভেতরের দিকে তাক করা: পাঠকের নিজের মুখ, আর সে মুখ কোন দিকে ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Loving What Comes Quickly",
          "bn": "তাড়াতাড়ির মোহ"
        },
        "p": [
          {
            "en": "The scene does not arrive alone. It follows kalla bal tuhibbuna al-'ajila, wa tadharuna al-akhira: no, rather you love the immediate and leave the Hereafter (75:20 and 75:21). Ibn Kathir reads those verses as the cause of the denial: their only concern is the present life, and it has distracted them from what is to come. The Hereafter that 75:21 says is left behind is where these faces stand.",
            "bn": "দৃশ্যটি একা আসে না। এর আগে আছে কাল্লা বাল তুহিব্বূনাল আজিলাহ, ওয়া তাযারূনাল আখিরাহ: না, বরং তোমরা ত্বরিত পাওয়াকে ভালোবাস আর আখিরাতকে ছেড়ে দাও (৭৫:২০ ও ৭৫:২১)। ইবন কাসীর এ দুই আয়াতকে অস্বীকারের কারণ হিসেবে পড়েন। তাদের একমাত্র চিন্তা দুনিয়ার জীবন, আর তা-ই তাদের আখিরাত থেকে ভুলিয়ে রেখেছে। ৭৫:২১ আয়াত যে আখিরাতকে পেছনে ফেলে রাখার কথা বলে, এই মুখগুলো দাঁড়িয়ে আছে সেখানেই।"
          },
          {
            "en": "As-Sa'di sharpens the contrast: when they see Him, they forget the bliss they are in. In the report at-Tirmidhi grades gharib, the lowest of the Garden's people surveys his gardens and couches across a thousand years' journey, and the most honoured looks at His face. The immediate that 75:20 says people love is small beside either.",
            "bn": "সা'দীর কথা বৈপরীত্যটা আরও তীক্ষ্ণ করে: তাঁকে দেখার পর তারা যে নিয়ামতে আছে তা-ও ভুলে যাবে। তিরমিযী যে বর্ণনাকে গরীব বলেছেন, তাতে জান্নাতের সবচেয়ে নিচু মর্যাদার মানুষ হাজার বছরের পথ জুড়ে তার বাগান আর পালঙ্ক দেখবে, আর সবচেয়ে সম্মানিত জন তাকাবে তাঁর চেহারার দিকে। ৭৫:২০ আয়াত যে ত্বরিত পাওয়ার ভালোবাসার কথা বলে, এ দুইয়ের পাশে তা নিতান্ত ছোট।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Gaze Rests Today",
          "bn": "চোখ আজ কোথায় থামে"
        },
        "p": [
          {
            "en": "Jarir's hadith ends where ordinary life begins. The vision is promised, and the very next instruction concerns two prayers: the one before sunrise, when sleep pulls hardest, and the one before sunset, when the day's business is loudest. Isma'il, the narrator, put it simply: offer them, do not miss them. The hadith ties the highest hope to the most regular of disciplines, kept twice a day.",
            "bn": "জারীর (রাঃ)-এর হাদিস শেষ হয় সেখানে, যেখান থেকে রোজকার জীবন শুরু। দর্শনের প্রতিশ্রুতি আসে, আর ঠিক তার পরের নির্দেশ দুই নামাজ নিয়ে। একটি সূর্য ওঠার আগে, যখন ঘুম সবচেয়ে বেশি টানে। আরেকটি সূর্য ডোবার আগে, যখন দিনের ব্যস্ততা সবচেয়ে বেশি। বর্ণনাকারী ইসমাঈল কথাটা সহজ করে বলেছেন: এ দুই নামাজ আদায় করো, ছুটতে দিয়ো না। এভাবে হাদিসটি সবচেয়ে বড় আশাকে বেঁধে দেয় দিনে দুবারের নিয়মিত আমলের সঙ্গে।"
          },
          {
            "en": "It is worth asking, then, where my own gaze rests. A face turned towards something all day is slowly shaped by it. The verse describes faces turned to their Lord on a Day still to come, and bright because of it. That Day cannot be arranged. What can be chosen, between today's Fajr and today's 'Asr, is where the eyes and the heart are pointed, and what they are learning to want.",
            "bn": "তাহলে প্রশ্নটা নিজেকে করা দরকার: আমার চোখ কোথায় গিয়ে থামে? সারাদিন যে মুখ কোনো কিছুর দিকে ফেরানো থাকে, সে জিনিস ধীরে ধীরে সেই মুখকে গড়ে তোলে। আয়াতটি বলে আগামী এক দিনের কথা, যেদিন কিছু মুখ রবের দিকে ফেরানো থাকবে, আর সে কারণেই উজ্জ্বল হবে। সেদিনটা কেউ নিজে সাজিয়ে নিতে পারে না। কিন্তু আজকের ফজর আর আজকের আসরের মাঝখানে চোখ আর মন কোন দিকে তাক করা থাকবে, কীসের জন্য ব্যাকুল হতে শিখবে, সেটা বেছে নেওয়া যায়।"
          }
        ]
      }
    ]
  },
  "75:31": {
    "sections": [
      {
        "h": {
          "en": "A Verdict After the Deathbed",
          "bn": "মৃত্যুশয্যার পরের রায়"
        },
        "p": [
          {
            "en": "Fa-la saddaqa wa la salla: so he neither affirmed nor prayed. Four Arabic words, and they arrive straight after a scene as stark as any in the Qur'an. In 75:26 to 75:30 the soul climbs to the collarbones, someone asks who can treat him, the dying man is sure that this is the parting, one shank is wound about the other, and on that Day the drive is to your Lord. The verse that follows does not describe the death any further. It turns and reads out what the life contained.",
            "bn": "ফালা সাদ্দাকা ওয়ালা সাল্লা: সে সত্য বলে মানেনি, নামাজও পড়েনি। আরবিতে মাত্র চারটি শব্দ, আর তা আসে কুরআনের অন্যতম কঠিন এক দৃশ্যের ঠিক পরে। ৭৫:২৬ থেকে ৭৫:৩০ আয়াতে প্রাণ উঠে আসে কণ্ঠার হাড় পর্যন্ত। কেউ জানতে চায়, কে আছে ঝাড়ফুঁক করার? মুমূর্ষু মানুষটি বুঝে যায়, এই বিদায়। একটা পায়ের নলা জড়িয়ে যায় আরেকটার সঙ্গে, আর সেদিন যাত্রা তোমার রবের দিকে। পরের আয়াত মৃত্যুর বর্ণনা আর বাড়ায় না। সে মুখ ফেরায় জীবনের দিকে, আর পড়ে শোনায় সেখানে কী ছিল।"
          },
          {
            "en": "Ma'arif al-Qur'an, commenting on that deathbed passage, says that at this point neither repentance nor a righteous deed is accepted from him, and that a wise person must therefore make amends before the moment arrives. Read against that, the verse is a closed account. What it lists are not deeds done but deeds never done: an affirmation that never came and a prayer that was never stood. The next verse, 75:32, then supplies what filled the empty space: he denied, and he turned away.",
            "bn": "মৃত্যুশয্যার ওই অংশের আলোচনায় মাআরিফুল কুরআন বলে, এই পর্যায়ে তার তওবাও কবুল হয় না, নেক আমলও না। তাই বুদ্ধিমান মানুষের উচিত সেই মুহূর্ত আসার আগেই নিজেকে শুধরে নেওয়া। এই কথার আলোয় আয়াতটি যেন বন্ধ হয়ে যাওয়া এক হিসাবের খাতা। এতে যা লেখা, তা করা কাজ নয়, না-করা কাজ। এমন এক স্বীকৃতি যা কখনো আসেনি, এমন এক নামাজ যাতে কখনো দাঁড়ানো হয়নি। পরের আয়াত, ৭৫:৩২, জানিয়ে দেয় ফাঁকা জায়গাটা কী দিয়ে ভরা ছিল: সে মিথ্যা বলে উড়িয়ে দিয়েছিল আর মুখ ফিরিয়ে নিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Grammarians on La",
          "bn": "'লা' নিয়ে দুই ব্যাকরণবিদ"
        },
        "p": [
          {
            "en": "The negation is unusual. Arabic ordinarily denies a past action with lam and the jussive: lam yusaddiq, he did not affirm. Here the past verb is negated with la. Al-Qurtubi records two grammarians who explain it differently. Al-Kisa'i says that la here carries the sense of lam, but that it comes paired with something else: the Arabs say la Abdullah is going out, nor so-and-so, and nobody says I passed a man la doing good without adding nor doing well.",
            "bn": "নাকচের ধরনটা একটু অস্বাভাবিক। আরবিতে অতীতের কাজ অস্বীকার করতে সাধারণত 'লাম' বসে, যেমন লাম ইউসাদ্দিক, সে মানেনি। এখানে অতীত ক্রিয়ার আগে বসেছে 'লা'। কুরতুবী দুজন ব্যাকরণবিদের কথা আনেন, যাঁরা একে দুইভাবে ব্যাখ্যা করেন। কিসাঈ বলেন, এখানে 'লা' আসলে 'লাম'-এর অর্থ দিচ্ছে, তবে সে একা আসে না, আরেকটা 'লা'-এর সঙ্গে জোড়া বেঁধে আসে। আরবরা বলে, আবদুল্লাহ বেরোচ্ছে না, অমুকও না। কিন্তু শুধু 'এক লোকের পাশ দিয়ে গেলাম যে ভালো কাজ করে না' বলে থামে না, সঙ্গে জুড়ে দেয় 'আর সুন্দর আচরণও করে না'।"
          },
          {
            "en": "Al-Akhfash reads fa-la saddaqa simply as lam yusaddiq and sets no condition that something must follow. He points to fa-la iqtahama al-'aqabah in 90:11, to the Arab saying la dhahaba for he did not go, and to a line of Zuhayr, holding that the particle negates the past as it negates the future. Yet the passage, just after al-Kisa'i's words, sets 90:11 apart as a different case, a question with its alif dropped: why did he not attempt the steep path? Al-Qurtubi records both views without settling them, and so does this article.",
            "bn": "আখফাশ ফালা সাদ্দাকা-কে সরাসরি লাম ইউসাদ্দিক অর্থে নেন, পরে আরেকটা কিছু আসতেই হবে, এমন শর্ত রাখেন না। প্রমাণ হিসেবে তিনি আনেন ৯০:১১ আয়াতের ফালাক তাহামাল আকাবাহ, আরবদের মুখের কথা 'লা যাহাবা' যার মানে সে যায়নি, আর কবি যুহাইরের একটি চরণ। তাঁর মতে এই অব্যয় যেমন ভবিষ্যৎকে নাকচ করে, তেমনি অতীতকেও করে। অথচ কুরতুবীর একই আলোচনায়, কিসাঈর কথার ঠিক পরে, ৯০:১১-কে আলাদা ধরনের বলা হয়েছে। সেখানে প্রশ্নবোধক আলিফ উহ্য, অর্থ হলো: সে কেন দুর্গম গিরিপথে ঝাঁপ দিল না? কুরতুবী কোনো মীমাংসা ছাড়াই দুটো মত রেখে দেন, এই লেখাও তা-ই করছে।"
          },
          {
            "en": "Whichever account one takes, the verse itself does pair its negations, and the pairing carries meaning. Two things are denied together, one after the other, neither allowed to stand alone. On al-Kisa'i's rule the second la completes the first, so the sentence is not finished until both failures have been named. The structure mirrors the claim. Affirmation without prayer, or prayer without affirmation, would each be a different verse. This one names the absence of both, and the doubled la holds them in a single breath.",
            "bn": "যে ব্যাখ্যাই নেওয়া হোক, আয়াত নিজে কিন্তু দুটো নাকচকে জোড়া বেঁধেছে, আর সেই জোড়ার একটা অর্থ আছে। দুটি জিনিস একসঙ্গে অস্বীকার করা হয়েছে, একটার পরে আরেকটা, কোনোটাকে একা দাঁড়াতে দেওয়া হয়নি। কিসাঈর নিয়ম ধরলে দ্বিতীয় 'লা' প্রথমটাকে পূর্ণ করে। দুটো ব্যর্থতার নাম না আসা পর্যন্ত বাক্যটা শেষ হয় না। গঠনটাই বক্তব্যের ছবি। নামাজ ছাড়া সত্য মেনে নেওয়া, কিংবা সত্য না মেনে নামাজ, এ দুটো হতো আলাদা আয়াতের বিষয়। এখানে দুটোরই অনুপস্থিতির কথা, আর জোড়া 'লা' দুটোকে এক নিঃশ্বাসে ধরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Affirmed, or Gave Away?",
          "bn": "মেনে নেওয়া, নাকি দান করা?"
        },
        "p": [
          {
            "en": "Saddaqa, with the doubled middle letter, means to hold something true and to say so. Most of the commentators consulted here take it in that sense and differ only on its object. At-Tabari: he did not affirm the Book of Allah. Al-Baghawi: he did not affirm the Qur'an. Al-Qurtubi carries the line of Ibn Abbas as the Message, and quotes Qatadah as the Book of Allah. The Muyassar names the Messenger and the Qur'an. As-Sa'di widens it to all six: Allah, His angels, His books, His messengers, the Last Day, and the decree, its good and its evil.",
            "bn": "সাদ্দাকা, মাঝের অক্ষরে তাশদীদ, মানে কোনো কিছুকে সত্য বলে মেনে নেওয়া এবং মুখে তা স্বীকার করা। এখানে যে তাফসীরগুলো পড়া হয়েছে, তার বেশিরভাগ এই অর্থই নেয়। তফাত শুধু কী মেনে নেওয়ার কথা, সেখানে। তাবারী বলেন, সে আল্লাহর কিতাবকে সত্য বলে মানেনি। বাগাভী বলেন, কুরআনকে মানেনি। কুরতুবী ইবন আব্বাস (রাঃ)-এর সূত্রে বলেন রিসালাতের কথা, আর কাতাদা থেকে আনেন আল্লাহর কিতাব। মুয়াসসার উল্লেখ করে রাসূল ও কুরআন। সা'দী একে ছড়িয়ে দেন ঈমানের ছয়টি বিষয়ে: আল্লাহ, তাঁর ফেরেশতা, তাঁর কিতাবসমূহ, তাঁর রাসূলগণ, শেষ দিবস, আর তাকদীর, তার ভালো ও মন্দ।"
          },
          {
            "en": "Al-Qurtubi then records a different reading, introduced only as it was said, with no name attached. On it, the verb points to wealth: he did not give from his property as a store laid up with Allah, and he did not perform the prayers Allah had commanded. The root s-d-q is the root of sadaqah, charity, which is what makes the reading possible. Al-Qurtubi gives it as one view among several. None of the other commentators consulted for this verse adopts it, and its source stays unnamed in the text.",
            "bn": "এরপর কুরতুবী ভিন্ন একটি ব্যাখ্যা আনেন, শুধু 'বলা হয়েছে' বলে, কারও নাম ছাড়াই। সে ব্যাখ্যায় ক্রিয়াটি সম্পদের দিকে ইঙ্গিত করে। অর্থাৎ সে নিজের মাল থেকে এমন কিছু দেয়নি যা আল্লাহর কাছে সঞ্চয় হয়ে থাকত, আর আল্লাহ যে নামাজের হুকুম দিয়েছেন তাও আদায় করেনি। স-দ-ক ধাতু থেকেই সাদাকা শব্দ, যার মানে দান। এই মিলের কারণেই ব্যাখ্যাটি সম্ভব হয়েছে। কুরতুবী একে কয়েকটি মতের একটি হিসেবেই রাখেন। এ আয়াতে যে তাফসীরগুলো পড়া হয়েছে, তার আর কোনোটি এটি গ্রহণ করেনি, আর এর উৎসের নামও লেখায় নেই।"
          },
          {
            "en": "So the reading stays where al-Qurtubi left it: recorded, unattributed, one possibility among several, and this article builds nothing on it. The verse's own neighbour leans the other way. In 75:32 the opposite verb arrives, kadhdhaba, he called it a lie, and denial is the natural reverse of assent, not of giving. That pairing is visible in the text itself. The main line of every commentator named above is clear: saddaqa here is assent, and its absence is the first of the two failures.",
            "bn": "তাই ব্যাখ্যাটি থাকছে কুরতুবী যেখানে রেখেছেন সেখানেই: উল্লেখ আছে, বক্তার নাম নেই, কয়েকটি সম্ভাবনার একটি। এই লেখা এর উপর কিছু দাঁড় করাচ্ছে না। আয়াতের প্রতিবেশীও অন্য দিকে ঝোঁকে। ৭৫:৩২ আয়াতে আসে বিপরীত ক্রিয়া, কাযযাবা, সে মিথ্যা বলে উড়িয়ে দিল। মিথ্যা বলা তো স্বীকার করার উল্টো, দান করার উল্টো নয়। এই জোড়াটা আয়াতের গায়েই দেখা যায়। ওপরে যাঁদের নাম এসেছে, তাঁদের সবার মূল কথা এক: এখানে সাদ্দাকা মানে স্বীকৃতি, আর তার অভাবই দুই ব্যর্থতার প্রথমটি।"
          }
        ]
      },
      {
        "h": {
          "en": "No Good Within or Without",
          "bn": "ভেতরেও নেই, বাইরেও নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a report about the disbeliever who, in the life of this world, denied the truth with his heart and turned away from acting on it with his body. He uses a pair of rhyming words, qalb and qalib, heart and frame, and draws the conclusion in a short line: so there is no good in him, inwardly or outwardly. Al-Qurtubi records the same division as one of the views he lists: he did not believe with his heart, and he did not act with his body.",
            "bn": "ইবন কাসীরের মতে আয়াতটি সেই কাফিরের খবর দিচ্ছে, যে দুনিয়ার জীবনে অন্তর দিয়ে সত্যকে মিথ্যা বলেছিল, আর দেহ দিয়ে সে অনুযায়ী কাজ করা থেকে মুখ ফিরিয়ে নিয়েছিল। তিনি ব্যবহার করেন ছন্দ মেলানো দুটি শব্দ, কালব আর কালিব, অন্তর আর দেহ। উপসংহার টানেন ছোট্ট এক বাক্যে: তাই তার মধ্যে কোনো কল্যাণ নেই, না ভেতরে, না বাইরে। কুরতুবী যে মতগুলো তালিকা করেন, তার একটিতেও একই ভাগ: সে অন্তরে ঈমান আনেনি, শরীর দিয়ে আমলও করেনি।"
          },
          {
            "en": "This is the shape of the verse. Saddaqa belongs to the inner life, salla to the outer, and Ibn Kathir's wording maps the next verse the same way: the denial was in the heart, the turning away was from deeds. At-Tabari, carrying his comment on into 75:32, explains the turning as going back from obedience to Allah. The two halves are not offered as alternatives, one of which might excuse the other. A person is one thing, heart and frame together, and the verse reads both columns of the account before it closes.",
            "bn": "আয়াতের গড়নটাই এমন। সাদ্দাকা অন্তরের জগতের কাজ, সাল্লা বাইরের। ইবন কাসীরের ভাষাও পরের আয়াতকে একইভাবে ভাগ করে: মিথ্যা বলাটা ছিল অন্তরে, আর মুখ ফেরানোটা ছিল আমল থেকে। তাবারী নিজের ব্যাখ্যা ৭৫:৩২ পর্যন্ত টেনে নিয়ে বলেন, মুখ ফেরানো মানে আল্লাহর আনুগত্য থেকে পিছু হটা। দুটি অংশকে বিকল্প হিসেবে রাখা হয়নি, যেন একটা থাকলে অন্যটার ঘাটতি মাফ হয়ে যায়। মানুষ একটাই সত্তা, অন্তর আর দেহ মিলিয়ে। হিসাব বন্ধ করার আগে আয়াত দুটো ঘরই পড়ে দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer He Never Stood",
          "bn": "যে নামাজে সে দাঁড়ায়নি"
        },
        "p": [
          {
            "en": "On salla the commentators consulted here are close. At-Tabari: he did not pray to Him any prayer. Al-Qurtubi quotes Qatadah: he did not pray to Allah. The Muyassar specifies the obligatory prayers owed to Allah, and al-Qurtubi's unnamed view speaks of the prayers Allah had commanded him. In the line he gives from Ibn Abbas, al-Qurtubi widens the word a little: he neither prayed, nor called on his Lord, nor invoked blessing on His Messenger. Salla, on that gloss, covers several ways of turning to Allah. None of the tafsirs consulted for this verse attaches a hadith to it.",
            "bn": "সাল্লা শব্দে এখানকার তাফসীরগুলো কাছাকাছি। তাবারী বলেন, সে তাঁর উদ্দেশে কোনো নামাজই পড়েনি। কুরতুবী কাতাদার কথা আনেন: সে আল্লাহর জন্য নামাজ পড়েনি। মুয়াসসার নির্দিষ্ট করে বলে, আল্লাহর প্রতি ফরজ নামাজগুলো সে আদায় করেনি। কুরতুবীর নামহীন মতটিও বলে, আল্লাহ যে নামাজের হুকুম দিয়েছিলেন। ইবন আব্বাস (রাঃ)-এর সূত্রে যে ব্যাখ্যা কুরতুবী দেন, সেখানে শব্দটা একটু বড় হয়: সে নামাজ পড়েনি, রবের কাছে দোয়া করেনি, তাঁর রাসূলের উপর দরূদও পাঠায়নি। সে ব্যাখ্যায় সাল্লা মানে একাধিক রূপে আল্লাহর দিকে ফেরা। এ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটিই এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man, or Every Man",
          "bn": "একজন মানুষ, নাকি যে-কেউ"
        },
        "p": [
          {
            "en": "Who is he? Al-Qurtubi gives two answers. The first: he did not affirm and did not pray means Abu Jahl, and al-Qurtubi calls this the view of Ibn Abbas. The second, introduced as it was said: the verse goes back to al-insan, the human being of the opening of the surah, which is a generic noun covering the kind. Al-Baghawi names Abu Jahl without discussion. Neither gives a chain for the identification in the text consulted here, so it stands as a reported view, not an established occasion of revelation.",
            "bn": "লোকটি কে? কুরতুবী দুটো উত্তর দেন। প্রথমটি: সে মানেনি, নামাজও পড়েনি, এ কথা আবু জাহলের ব্যাপারে, আর কুরতুবী একে ইবন আব্বাস (রাঃ)-এর মত বলে উল্লেখ করেন। দ্বিতীয়টি আসে 'বলা হয়েছে' দিয়ে: আয়াতটি ফিরে যায় সূরার শুরুর আল-ইনসান, অর্থাৎ মানুষের দিকে। শব্দটি জাতিবাচক, গোটা মানবজাতিকে বোঝায়। বাগাভী কোনো আলোচনা ছাড়াই আবু জাহলের নাম বলেন। এখানে পড়া লেখায় দুজনের কেউই এই শনাক্তকরণের কোনো সনদ দেননি। তাই এটি বর্ণিত একটি মত হিসেবেই থাকছে, প্রতিষ্ঠিত শানে নুযূল হিসেবে নয়।"
          },
          {
            "en": "The others keep the subject general. At-Tabari explains the verse without a name. Ibn Kathir calls him the disbeliever, and the Muyassar says the disbeliever did not believe. Ibn Kathir does bring Abu Jahl in, but two verses later, on awla laka fa-awla in 75:34 and 75:35. He records from an-Nasa'i, through Sa'id ibn Jubayr, that Ibn Abbas said the Messenger ﷺ spoke those words to Abu Jahl and then the verse came down; and from Qatadah, through Ibn Abi Hatim, a fuller account that begins: they claim. The text consulted gives no grading for either.",
            "bn": "বাকিরা বিষয়টিকে সাধারণ রাখেন। তাবারী কারও নাম ছাড়াই আয়াতের ব্যাখ্যা দেন। ইবন কাসীর বলেন কাফির, আর মুয়াসসার বলে, কাফির ঈমান আনেনি। ইবন কাসীর আবু জাহলের প্রসঙ্গ আনেন ঠিকই, তবে দুই আয়াত পরে, ৭৫:৩৪ ও ৭৫:৩৫ আয়াতের আওলা লাকা ফাআওলা-র আলোচনায়। তিনি নাসাঈ থেকে সাঈদ ইবন জুবাইরের সূত্রে আনেন, ইবন আব্বাস (রাঃ) বলেছেন, রাসূল ﷺ কথাগুলো আবু জাহলকে বলেছিলেন, তারপর আয়াত নাজিল হয়। আর ইবন আবী হাতিমের সূত্রে কাতাদা থেকে আনেন আরও বিস্তারিত এক বর্ণনা, যার শুরু 'তারা দাবি করে' দিয়ে। এখানে পড়া লেখায় দুটোর কোনোটিরই মান উল্লেখ নেই।"
          },
          {
            "en": "Those reports belong to 75:34 and 75:35, and they are noted here only so that the identification is not overstated. Even where a name is given, the verse speaks only of what it names: a man whose life, read out at his death, held neither affirmation nor prayer. It licenses nothing against any living person or community, and no reader is entitled to decide whose deathbed it will be. The generic reading recorded by al-Qurtubi points the other way, toward the reader. Al-insan is anyone, which means the question can come home.",
            "bn": "ওই বর্ণনাগুলো ৭৫:৩৪ ও ৭৫:৩৫ আয়াতের, এখানে উল্লেখ করা হলো শুধু এজন্য যে শনাক্তকরণটা যেন বাড়িয়ে বলা না হয়। নাম যেখানে এসেছে, সেখানেও আয়াত বর্ণনা করে কেবল তার নিজের বিষয়টুকু: এমন এক মানুষ, মৃত্যুর মুহূর্তে যার জীবনের খাতায় না ছিল সত্যের স্বীকৃতি, না নামাজ। এ আয়াত কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না। কার মৃত্যুশয্যা এমন হবে, সে ফয়সালা করার অধিকার কোনো পাঠকের নেই। কুরতুবী যে জাতিবাচক অর্থটি উল্লেখ করেছেন, তা বরং পাঠকের দিকেই ইশারা করে। আল-ইনসান মানে যে-কেউ, তাই প্রশ্নটা নিজের ঘরেও ফিরে আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty Comes Too Late",
          "bn": "নিশ্চিত বিশ্বাস যখন দেরিতে আসে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the passage with a prayer of his own: may Allah make us firm at that time with the firm word. Then, on kalla in 75:26, he gives a reading in which the word is a rebuke: O son of Adam, you will not be able to deny then what I told you of; it will be something you witness with your own eyes. At the collarbone, in other words, everyone affirms. The man of 75:31 did not lack proof at the end. He lacked the affirmation that counts, the one given before the seeing.",
            "bn": "ইবন কাসীর এই অংশ শুরু করেন নিজের একটি দোয়া দিয়ে: আল্লাহ যেন সেই সময়ে আমাদের অটল বাণী দিয়ে দৃঢ় রাখেন। তারপর ৭৫:২৬ আয়াতের কাল্লা শব্দে তিনি এমন এক ব্যাখ্যা দেন, যেখানে শব্দটি তিরস্কার: হে আদম সন্তান, যে কথা আমি তোমাকে জানিয়েছিলাম, সেই সময় তা আর অস্বীকার করতে পারবে না, নিজের চোখেই দেখবে। অর্থাৎ কণ্ঠার কাছে পৌঁছে সবাই মেনে নেয়। ৭৫:৩১ আয়াতের মানুষটির শেষ মুহূর্তে প্রমাণের অভাব ছিল না। অভাব ছিল সেই স্বীকৃতির, যার দাম আছে: দেখার আগে যে স্বীকৃতি দেওয়া হয়।"
          },
          {
            "en": "That is why the verse looks backward. Fa-la saddaqa does not say he refused to believe at the very end; it says that across his life he never affirmed. The same holds for prayer. No one stands for salah with one leg wound about the other. The surah places the record directly after the deathbed so that the reader sees the order of things: the hour at the collarbone settles nothing new. It only reveals what the earlier hours, the healthy and ordinary ones, were used for.",
            "bn": "এ কারণেই আয়াতের দৃষ্টি পেছনের দিকে। ফালা সাদ্দাকা বলছে না যে একেবারে শেষ মুহূর্তে সে মানতে অস্বীকার করেছিল। বলছে, গোটা জীবনে সে কখনো মেনে নেয়নি। নামাজের বেলাতেও তাই। একটা পা আরেক পায়ে জড়িয়ে যাওয়ার মুহূর্তে কেউ নামাজে দাঁড়ায় না। সূরাটি মৃত্যুশয্যার ঠিক পরে আমলনামা রেখেছে, যাতে পাঠক ক্রমটা দেখতে পান। কণ্ঠার কাছের সেই সময় নতুন কিছুর মীমাংসা করে না। সে শুধু খুলে দেখায়, আগের সুস্থ, সাধারণ সময়গুলো কী কাজে লেগেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Both Columns, Every Day",
          "bn": "প্রতিদিন দুই ঘরের হিসাব"
        },
        "p": [
          {
            "en": "For a reader who already believes and prays, the verse is not an accusation but a measure. It names two things that the end will look for, and both are daily. Affirmation is not a single event in the past; it is renewed whenever a verse is heard and accepted, whenever a command is taken as true rather than argued away. Prayer is not a habit a person has or lacks in general; it is this Dhuhr and this Fajr, stood or let slip. The account is being written in small entries.",
            "bn": "যে পাঠক ঈমান এনেছেন এবং নামাজ পড়েন, তাঁর জন্য আয়াতটি অভিযোগ নয়, মাপকাঠি। এখানে এমন দুটি জিনিসের নাম, শেষ মুহূর্ত যা খুঁজবে, আর দুটোই রোজকার। সত্য মেনে নেওয়া অতীতের কোনো একদিনের ঘটনা নয়। প্রতিবার কোনো আয়াত শুনে মেনে নিলে, কোনো হুকুমকে তর্কে উড়িয়ে না দিয়ে সত্য বলে গ্রহণ করলে, স্বীকৃতিটা নতুন হয়। নামাজও এমন কোনো অভ্যাস নয় যা মোটের উপর আছে বা নেই। প্রশ্ন হলো এই যোহর, এই ফজর, পড়া হলো নাকি ছুটে গেল। হিসাবের খাতা লেখা হচ্ছে ছোট ছোট অঙ্কে।"
          },
          {
            "en": "The verse also warns against keeping one column and neglecting the other. Prayer without real assent becomes a performance; assent that never reaches the body stays a private opinion. Ibn Kathir's pairing of heart and frame is a reminder that the two are meant to move together. Since the soul is still far from the collarbone, the reader can do what the man in the verse never did: affirm what has come from Allah, and stand for the next prayer when its time comes, while there is time.",
            "bn": "একটা ঘর পূরণ করে অন্য ঘর ফেলে রাখার বিপদ নিয়েও আয়াতটি সাবধান করে। সত্যিকারের স্বীকৃতি ছাড়া নামাজ হয়ে যায় লোক দেখানো অনুষ্ঠান। আর যে স্বীকৃতি কখনো দেহের আমলে পৌঁছায় না, তা থেকে যায় নিছক ব্যক্তিগত মত। ইবন কাসীর অন্তর আর দেহকে যেভাবে জোড়া বেঁধেছেন, তা মনে করিয়ে দেয় যে দুটির চলার কথা একসঙ্গে। প্রাণ এখনো কণ্ঠা থেকে দূরে। তাই আয়াতের মানুষটি যা কখনো করেনি, পাঠক তা করতে পারেন: আল্লাহর কাছ থেকে যা এসেছে তা মেনে নেওয়া, আর পরের নামাজের ওয়াক্ত এলে দাঁড়িয়ে যাওয়া, সময় থাকতেই।"
          }
        ]
      }
    ]
  },
  "75:36": {
    "sections": [
      {
        "h": {
          "en": "The Same Question Twice",
          "bn": "একই প্রশ্ন দু'বার"
        },
        "p": [
          {
            "en": "The phrase ayahsabu al-insanu, does man think, occurs exactly twice in the Quran, and both times in this surah. The first is 75:3, asking whether he thinks We will not assemble his bones. The last is this verse, asking whether he thinks he will be left suda. Surah al-Qiyamah opens with a doubt about the body and closes with a doubt about the point of it.",
            "bn": "'আ ইয়াহসাবুল ইনসান', মানুষ কি মনে করে? কুরআনে কথাটি ঠিক দু'বার এসেছে, আর দু'বারই এই সূরায়। প্রথমবার ৭৫:৩ আয়াতে: সে কি মনে করে, আমি তার হাড়গুলো একত্র করব না? শেষবার এই আয়াতে: সে কি মনে করে, তাকে 'সুদা' ছেড়ে দেওয়া হবে? সূরা আল-কিয়ামাহ শুরু হয় দেহ নিয়ে সন্দেহ দিয়ে, আর শেষ হয় সেই দেহের উদ্দেশ্য নিয়ে সন্দেহ দিয়ে।"
          },
          {
            "en": "The placement is pointed. 75:31 and 75:32 describe a man who neither believed nor prayed but denied and turned away, and 75:33 has him walking back to his people swaggering. 75:34 and 75:35 pronounce woe over him twice. The question of this verse lands directly after that portrait. The man who strutted home is asked what exactly he imagined the arrangement was.",
            "bn": "আয়াতটি কোথায় বসেছে, সেটাও লক্ষ করার মতো। ৭৫:৩১ ও ৭৫:৩২ আয়াতে এমন এক লোকের কথা, যে ঈমানও আনেনি, নামাজও পড়েনি, বরং মিথ্যা বলে উড়িয়ে দিয়েছে আর মুখ ফিরিয়ে নিয়েছে। ৭৫:৩৩ আয়াতে সে দম্ভভরে নিজের লোকদের কাছে ফিরে যায়। ৭৫:৩৪ ও ৭৫:৩৫ আয়াতে তার জন্য দু'বার দুর্ভোগের ঘোষণা আসে। ঠিক এই ছবির পরেই আসে এ আয়াতের প্রশ্ন। যে লোক বুক ফুলিয়ে ঘরে ফিরেছিল, তাকেই জিজ্ঞেস করা হচ্ছে: সে আসলে ব্যাপারটা কী ভেবে বসে ছিল?"
          }
        ]
      },
      {
        "h": {
          "en": "Suda",
          "bn": "সুদা"
        },
        "p": [
          {
            "en": "The word suda occurs once in the whole Quran, here. It describes livestock turned loose with no herdsman — a camel left to graze where it likes, unclaimed, uncounted, answerable to nobody. Ibn Kathir's gloss is compact: left neglected, neither commanded nor forbidden. The app renders it left neglected, and that is the sense to hold: not unloved, but unsupervised.",
            "bn": "'সুদা' শব্দটি গোটা কুরআনে একবারই এসেছে, এখানেই। শব্দটি বলা হয় রাখাল ছাড়া ছেড়ে দেওয়া পশুকে। যেমন এমন উট, যে যেখানে খুশি চরে বেড়ায়। সে বেওয়ারিশ, কেউ তাকে গুনে রাখে না, কারও কাছে তার জবাবদিহি নেই। ইবন কাসীরের ব্যাখ্যা ছোট্ট: অবহেলায় ছেড়ে দেওয়া, যাকে আদেশও করা হয় না, নিষেধও না। অ্যাপের অনুবাদে আছে 'এমনি ছেড়ে দেওয়া', আর অর্থটা এভাবেই ধরতে হবে। কথাটা ভালোবাসা না পাওয়ার নয়, দেখভাল না থাকার।"
          },
          {
            "en": "That distinction changes what the verse is accusing us of. It is not asking whether anyone thinks Allah does not exist, and it is not asking whether anyone doubts the resurrection outright. It is asking whether a person quietly assumes that his own life, unlike everything else, has been left running without instructions and will not be collected at the end.",
            "bn": "এই পার্থক্যে বদলে যায় আয়াতের অভিযোগটাও। আয়াত জানতে চাইছে না, কেউ মনে করে কি না যে আল্লাহ নেই। কেউ সরাসরি পুনরুত্থানে সন্দেহ করে কি না, প্রশ্নটা তা-ও নয়। প্রশ্নটা হলো, মানুষ কি মনে মনে চুপচাপ ধরে নেয় যে আর সবকিছুর বেলায় না হলেও তার নিজের জীবনটা কোনো নির্দেশ ছাড়াই চলতে দেওয়া হয়েছে, আর শেষে কেউ তাকে ফিরিয়ে নেবে না?"
          }
        ]
      },
      {
        "h": {
          "en": "It Is a Question",
          "bn": "এ আয়াত প্রশ্ন করে"
        },
        "p": [
          {
            "en": "The verse never states that man will not be left neglected. It asks whether he thinks he will be. That form matters. An assertion can be argued with from the outside; a question of this shape makes the listener produce the claim himself and then look at it, which is far harder to shrug off, because the belief being examined is one he has never said aloud.",
            "bn": "আয়াতটি কোথাও ঘোষণা করে না যে মানুষকে অবহেলায় ছেড়ে দেওয়া হবে না। শুধু জিজ্ঞেস করে, সে কি তা-ই মনে করে? এই ধরনটাই আসল কথা। কোনো ঘোষণার সঙ্গে বাইরে দাঁড়িয়ে তর্ক করা যায়। কিন্তু এমন প্রশ্নে শ্রোতাকে নিজের মনেই দাবিটা গুছিয়ে বলতে হয়, তারপর সেটার দিকে তাকাতে হয়। একে ঝেড়ে ফেলা অনেক কঠিন, কারণ যে বিশ্বাস যাচাই হচ্ছে, তা সে কখনো মুখে বলেনি।"
          },
          {
            "en": "The Quran then declines to answer with an assertion either. 75:37 to 75:39 trace the reader's own origin step by step — a drop of fluid, then a clinging clot, then a form created and proportioned, then made into the two mates, male and female. And 75:40 closes the surah with one more question: is not that One able to give life to the dead? A doubt about purpose is answered with evidence about power.",
            "bn": "এরপরও কুরআন জবাব দেয় না ঘোষণা দিয়ে। ৭৫:৩৭ থেকে ৭৫:৩৯ আয়াত পাঠকের নিজের সৃষ্টির ধাপগুলো একে একে দেখায়। প্রথমে এক ফোঁটা তরল, তারপর লেগে থাকা এক রক্তপিণ্ড। তারপর আল্লাহ তাকে আকৃতি দিলেন, সুবিন্যস্ত করলেন, আর তা থেকে বানালেন জোড়া, পুরুষ ও নারী। আর ৭৫:৪০ আয়াত সূরা শেষ করে আরেকটি প্রশ্ন দিয়ে: সেই সত্তা কি মৃতকে জীবিত করতে সক্ষম নন? উদ্দেশ্য নিয়ে সন্দেহের জবাব আসে ক্ষমতার প্রমাণ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Was Made in Play",
          "bn": "কিছুই খেলাচ্ছলে বানানো হয়নি"
        },
        "p": [
          {
            "en": "The principle behind the question is stated flatly elsewhere. 21:16 and 44:38 both deny that the heavens, the earth and what lies between them were created in play, and 44:39 adds that they were created only in truth. 38:27 says the same and then names the alternative honestly: that assumption belongs to those who disbelieve. This verse takes a rule already applied to the sky and applies it to one person.",
            "bn": "প্রশ্নটার পেছনের নীতি কুরআন অন্য জায়গায় সোজাসুজি বলে দিয়েছে। ২১:১৬ ও ৪৪:৩৮, দুই আয়াতেই আছে: আল্লাহ আসমান, যমীন আর এ দুয়ের মাঝের কোনো কিছুই খেলার ছলে সৃষ্টি করেননি। ৪৪:৩৯ আয়াত যোগ করে, তিনি এগুলো সৃষ্টি করেছেন কেবল সত্যের ভিত্তিতে। ৩৮:২৭ আয়াতেও একই কথা, তারপর উল্টো ধারণাটা কার, তা খোলাখুলি বলে দেয়: এ ধারণা কাফিরদের। যে নিয়ম আকাশের বেলায় আগেই খাটানো হয়েছে, এ আয়াত সেটাই খাটায় একজন মানুষের ওপর।"
          },
          {
            "en": "23:115 puts the identical challenge in the second person plural, asking a whole audience whether they thought they were created uselessly and would not be returned. Read side by side, the two verses close the gap that heedlessness lives in: a universe with a purpose does not contain one exempt species, and a species with a purpose does not contain one exempt afternoon.",
            "bn": "২৩:১১৫ আয়াত হুবহু একই প্রশ্ন রাখে, তবে 'তোমরা' বলে গোটা শ্রোতামণ্ডলীকে সম্বোধন করে: তোমরা কি ভেবেছিলে, তোমাদের অনর্থক সৃষ্টি করা হয়েছে, আর তোমাদের ফিরিয়ে আনা হবে না? দুটি আয়াত পাশাপাশি পড়লে সেই ফাঁকটুকু বন্ধ হয়ে যায়, যেখানে গাফলতি লুকিয়ে থাকে। যে বিশ্বজগতের উদ্দেশ্য আছে, সেখানে কোনো একটি সৃষ্টিও ছাড় পায় না। আর যে মানবজাতির উদ্দেশ্য আছে, তার জীবনের একটা বিকেলও ছাড় পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Bites",
          "bn": "খোঁচাটা যেখানে লাগে"
        },
        "p": [
          {
            "en": "Because suda means unsupervised rather than sinful, the verse reaches past the obvious failures. Most people have some region of life they treat as off the record — how they speak when tired, what they do with an idle hour, the standard they hold to when no one whose opinion matters is watching. That region is exactly what the question is about.",
            "bn": "'সুদা' মানে গুনাহগার নয়, দেখভালহীন। তাই আয়াতটি চোখে পড়ার মতো ব্যর্থতাগুলো ছাড়িয়েও পৌঁছে যায়। বেশির ভাগ মানুষের জীবনেই এমন একটা কোণ থাকে, যাকে সে হিসাবের বাইরে বলে ধরে নেয়। ক্লান্ত থাকলে সে কেমন করে কথা বলে, অবসরের একটা ঘণ্টা কীভাবে কাটায়, যার মতামতের দাম আছে এমন কেউ না দেখলে নিজেকে কোন মাপে রাখে। প্রশ্নটা ঠিক সেই কোণটা নিয়েই।"
          },
          {
            "en": "The remedy the surah offers is not more anxiety but a better memory. Someone took that much trouble over your making, working from a drop of fluid to a finished human being, and the verses that follow the question say so in order. Such care does not lose interest halfway. Live the ordinary hours as claimed hours, and the question stops being frightening and starts being steadying.",
            "bn": "সূরাটি যে ওষুধ দেয়, তা বাড়তি দুশ্চিন্তা নয়, বরং ভালো করে মনে রাখা। আপনাকে বানাতে একজন এতটা যত্ন নিয়েছেন, এক ফোঁটা তরল থেকে ধাপে ধাপে পূর্ণ মানুষ পর্যন্ত। প্রশ্নটির পরের আয়াতগুলো ক্রম ধরে ঠিক সে কথাই বলে। এমন যত্ন যিনি নেন, তিনি মাঝপথে আগ্রহ হারান না। সাধারণ ঘণ্টাগুলোও এমনভাবে কাটান, যেন সেগুলোর মালিক আছেন, সেগুলো বেওয়ারিশ নয়। তখন প্রশ্নটা আর ভয় দেখাবে না, বরং মনকে স্থির রাখবে।"
          }
        ]
      }
    ]
  }
});
