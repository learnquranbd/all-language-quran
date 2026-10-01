/**
 * Tadabbur long-form articles — surah 27.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "27:3": {
    "sections": [
      {
        "h": {
          "en": "Three Marks After the Promise",
          "bn": "প্রতিশ্রুতির পরেই তিন চিহ্ন"
        },
        "p": [
          {
            "en": "The two verses before this one have named the Qur'an guidance and good news for the believers. This verse does not pause; it tells you at once who those believers are. Ibn Kathir reads 27:1 to 27:3 as one movement: the guidance and glad tidings of the Qur'an are reached by whoever believes in it, follows it, affirms it, and acts on what is in it. Then he lists the very acts the verse lists. The promise of 27:2 is not left hanging in the air; it is handed a face.",
            "bn": "আগের দুই আয়াত কুরআনকে বলেছে মু'মিনদের জন্য পথের দিশা ও সুসংবাদ। এ আয়াত আর থামে না, সঙ্গে সঙ্গে বলে দেয় সেই মু'মিনরা কারা। ইবন কাসীর ২৭:১ থেকে ২৭:৩ কে এক টানে পড়েন: কুরআনের দিশা ও সুসংবাদ পায় সে-ই, যে এতে বিশ্বাস করে, এর অনুসরণ করে, একে সত্য মানে আর এর ভেতরের কথা অনুযায়ী আমল করে। এরপর তিনি সেই আমলগুলোই গোনেন যা আয়াত গোনে। ২৭:২-এর প্রতিশ্রুতি শূন্যে ঝুলে থাকে না, তাকে একটা চেহারা ধরিয়ে দেওয়া হয়।"
          },
          {
            "en": "So the three marks are not a random checklist. They are the Qur'an's own answer to a question the good news raises: good news for whom? Ibn Kathir names the content of that certainty too, the resurrection after death, the recompense for every deed good and bad, Paradise and Hell. He ties the passage to 41:44, where this same Qur'an is guidance and healing for those who believe and heaviness in the ears of those who do not. The believer is defined by response, not by nearness to the Book.",
            "bn": "তাই তিনটি চিহ্ন এলোমেলো কোনো তালিকা নয়। সুসংবাদ যে প্রশ্ন তোলে, এ তারই জবাব: সুসংবাদ কাদের জন্য? ইবন কাসীর সেই নিশ্চয়তার বিষয়বস্তুও বলে দেন, মৃত্যুর পর পুনরুত্থান, প্রতিটি ভালো-মন্দ কাজের প্রতিদান, জান্নাত আর জাহান্নাম। তিনি আয়াতটিকে জুড়ে দেন ৪১:৪৪-এর সঙ্গে, যেখানে এই একই কুরআন বিশ্বাসীদের জন্য দিশা ও শিফা, আর অবিশ্বাসীদের কানে বোঝা। মু'মিনকে চেনানো হয় তার সাড়া দিয়ে, কিতাবের কাছাকাছি থাকা দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Claim That Needs Proof",
          "bn": "দাবি নয়, প্রমাণ লাগে"
        },
        "p": [
          {
            "en": "As-Sa'di opens his comment with an objection he raises against himself. Suppose many people claim to be believers, is the claim accepted from anyone who makes it, or must there be evidence? Evidence, he answers, and that is the truth. So Allah states the mark of the believers. On this reading the verse is quietly answering a challenge: faith is not established by saying 'I believe.' The Giver of the good news sets out what a believer looks like, and that picture is made of deeds and firm conviction, not of mere assertion.",
            "bn": "সাদী তাঁর আলোচনা শুরু করেন নিজের তোলা এক আপত্তি দিয়ে। ধরুন অনেকেই দাবি করল তারা মু'মিন, তবে কি যে-ই দাবি করবে তার কথাই মেনে নেওয়া হবে, নাকি প্রমাণ লাগবে? প্রমাণই লাগবে, তিনি বলেন, আর সেটাই সত্য। তাই আল্লাহ মু'মিনদের চিহ্ন বলে দিলেন। এ পড়া অনুযায়ী আয়াতটি চুপচাপ এক চ্যালেঞ্জের জবাব দিচ্ছে: 'আমি বিশ্বাস করি' বলা মাত্রই ঈমান প্রমাণ হয়ে যায় না। যিনি সুসংবাদ দেন, তিনিই এঁকে দেন মু'মিন দেখতে কেমন, আর সেই ছবি গড়া আমল ও দৃঢ় বিশ্বাস দিয়ে, নিছক মুখের দাবি দিয়ে নয়।"
          },
          {
            "en": "That is why the verse reaches for the two most public acts and the one most private certainty. Prayer and zakah can be seen; the certainty of the Hereafter cannot. Between them they cover the whole person, the body that bows and the hand that gives, and the heart that knows where it is going. A claim that stops at the tongue leaves all three untested. As-Sa'di's point is that the Qur'an refuses to let faith stay a claim; it asks the claim to show itself in a life.",
            "bn": "এ কারণেই আয়াতটি বেছে নেয় সবচেয়ে প্রকাশ্য দুটি আমল আর সবচেয়ে গোপন একটি নিশ্চয়তা। নামায আর যাকাত চোখে পড়ে, আখিরাতের নিশ্চয়তা পড়ে না। এ দুইয়ে মিলে গোটা মানুষটাকে ধরে, যে দেহ রুকু করে আর যে হাত দান করে, আর যে অন্তর জানে সে কোথায় চলেছে। দাবি যদি জিভেই থেমে যায়, তিনটিই অপরীক্ষিত থেকে যায়। সাদীর কথা হলো, কুরআন ঈমানকে দাবি হয়ে থাকতে দেয় না, দাবিকে জীবন দিয়ে নিজেকে দেখিয়ে দিতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing the Prayer",
          "bn": "নামায কায়েম করা"
        },
        "p": [
          {
            "en": "The verb is yuqimun, from iqama, to set a thing upright and keep it standing. At-Tabari reads it as establishing the prescribed prayer bi-hududiha, within its limits, its times, its conditions, the bounds Allah set on it. The word is not 'they pray'; it is 'they stand the prayer up.' A prayer can be performed and still not stand, the way a wall can be built and still lean. To establish it is to give it its full form and keep it from collapsing into habit.",
            "bn": "ক্রিয়াটি 'ইউকীমূন', এসেছে 'ইকামা' থেকে, যার মানে কোনো জিনিসকে সোজা করে দাঁড় করিয়ে রাখা। তাবারী একে পড়েন ফরয নামায কায়েম করা হিসেবে, 'বিহুদূদিহা', তার সীমার ভেতরে, অর্থাৎ তার সময়, শর্ত আর আল্লাহর বেঁধে দেওয়া সীমা মেনে। শব্দটা 'তারা নামায পড়ে' নয়, 'তারা নামাযটা দাঁড় করায়'। নামায আদায় হয়েও না-দাঁড়াতে পারে, যেমন দেয়াল গেঁথে উঠেও হেলে থাকতে পারে। কায়েম করা মানে তাকে তার পুরো রূপ দেওয়া আর অভ্যাসে গুঁড়িয়ে পড়তে না দেওয়া।"
          },
          {
            "en": "As-Sa'di takes the standing in two directions at once. Outwardly, whoever establishes the prayer performs its visible acts, its pillars, its conditions, its obligations, down to what is merely recommended. Inwardly, he brings its spirit, which as-Sa'di calls khushu': a stillness of heart that comes from being present to the nearness of Allah and weighing what the worshipper is saying and doing. The outward without the inward is a body without breath; the inward is, in his words, the very soul of the prayer.",
            "bn": "সাদী এই দাঁড় করানোকে একসঙ্গে দুই দিকে নেন। বাইরের দিকে, যে নামায কায়েম করে সে তার দৃশ্যমান কাজগুলো আদায় করে, তার রুকন, শর্ত, ওয়াজিব, এমনকি মুস্তাহাব পর্যন্ত। ভেতরের দিকে সে আনে নামাযের প্রাণ, যাকে সাদী বলেন খুশু: অন্তরের এক স্থিরতা, যা জন্মায় আল্লাহর নৈকট্যকে হাজির মনে করা থেকে আর নামাযি যা বলছে ও করছে তা মেপে দেখা থেকে। ভেতর ছাড়া বাইরেটা নিঃশ্বাসহীন দেহ, আর ভেতরটাই তাঁর ভাষায় নামাযের আসল রুহ।"
          },
          {
            "en": "Put the two together and 'establish' stops being a formality. It asks for a prayer offered on time and in form, and offered awake, with the mind inside the words rather than running ahead of them. This is the first mark because it is the most repeated act of a Muslim's day; five times over, it either stands or sags. As-Sa'di's reading makes it a daily test of whether faith has reached the heart or stayed on the limbs.",
            "bn": "দুটি মিলালে 'কায়েম' আর নিছক নিয়মরক্ষা থাকে না। এ চায় এমন নামায যা সময়মতো ও বিধিমতো আদায় হয়, আবার জেগে থেকে আদায় হয়, মন থাকে কথার ভেতর, তিন কদম আগে ছুটে নয়। এটি প্রথম চিহ্ন, কারণ এটি মুসলিমের দিনের সবচেয়ে বেশিবার ফিরে আসা আমল, দিনে পাঁচবার হয় তা দাঁড়ায় নয়তো ঝুলে পড়ে। সাদীর পড়া একে বানিয়ে তোলে রোজকার এক পরীক্ষা, ঈমান অন্তরে পৌঁছেছে নাকি অঙ্গেই আটকে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Zakah to a Rightful Hand",
          "bn": "যাকাত পৌঁছে হকদারের হাতে"
        },
        "p": [
          {
            "en": "The second mark is wa-yu'tuna az-zakah: and they give the zakah. At-Tabari reads it as paying the obligatory charity; al-Muyassar adds the detail the word carries, the prescribed zakah handed to those entitled to it, li-mustahiqqiha, its rightful recipients. The verb is i'ta', actual giving, a hand that opens. As-Sa'di too marks it as the obligatory zakah paid to those who deserve it. The mark is not a good intention about wealth but wealth that has actually left you and reached someone the law of Allah named.",
            "bn": "দ্বিতীয় চিহ্ন 'ওয়া ইউ'তূনায যাকাত', আর তারা যাকাত দেয়। তাবারী একে পড়েন ফরয যাকাত আদায় করা হিসেবে; মুয়াসসার শব্দটার বয়ে আনা বিশদটা জুড়ে দেন, নির্ধারিত যাকাত তুলে দেওয়া হয় যারা তার হকদার তাদের হাতে, 'লিমুসতাহিক্কিহা'। ক্রিয়াটি 'ঈতা', সত্যিকারের দেওয়া, একটা খুলে যাওয়া হাত। সাদীও একে চিহ্নিত করেন হকদারকে দেওয়া ফরয যাকাত হিসেবে। চিহ্নটা সম্পদ নিয়ে ভালো নিয়ত নয়, বরং এমন সম্পদ যা সত্যিই আপনার কাছ থেকে বেরিয়ে আল্লাহর নাম-করা কারও কাছে পৌঁছেছে।"
          },
          {
            "en": "At-Tabari also preserves a second reading of the word, introduced with wa-qila, 'and it is said': that it means purifying the body from the filth of sins. He notes he has explained this elsewhere and does not press it here. Reported as a minority view, it is worth keeping as the commentators kept it, a reminder that zakah shares a root with tazkiya, purification. On either reading the point converges: the second mark is something the self gives up, whether wealth from the hand or sin from the body.",
            "bn": "তাবারী শব্দটার আরেকটা পড়াও রেখে দেন, 'ওয়া কীলা' বলে আনা, 'আর বলা হয়': এর মানে গুনাহের ময়লা থেকে দেহকে পাক করা। তিনি জানান এ কথা অন্যত্র বুঝিয়েছেন, এখানে জোর দেন না। সংখ্যালঘু মত হিসেবে আনা, তবু তাফসীরকারেরা যেভাবে রেখেছেন সেভাবে রাখার মতো, কারণ যাকাত আর তাজকিয়া বা পরিশুদ্ধির মূল এক। যে পড়াই নিন, কথাটা এক জায়গায় মেলে: দ্বিতীয় চিহ্ন এমন কিছু যা নিজের কাছ থেকে ছেড়ে দিতে হয়, হাত থেকে সম্পদ হোক কি দেহ থেকে গুনাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty as the Engine",
          "bn": "নিশ্চয়তাই মূল চালিকাশক্তি"
        },
        "p": [
          {
            "en": "Now the third mark, and the verse's hinge: wa-hum bil-akhirati hum yuqinun, and of the Hereafter they are certain. At-Tabari draws the line explicitly. Along with their establishing the prayer and giving the obligatory zakah, he says, they are certain of the return to Allah after death. And because of that certainty they humble themselves in obedience to Him, out of hope for His abundant reward and fear of His severe punishment. The certainty is not a fourth item on the list; it is why the first two happen.",
            "bn": "এবার তৃতীয় চিহ্ন, আর এটিই আয়াতের কব্জা: 'ওয়া হুম বিল আখিরাতি হুম ইউকিনূন', আর আখিরাত নিয়ে তারা নিশ্চিত। তাবারী সম্পর্কটা স্পষ্ট করে টানেন। নামায কায়েম আর ফরয যাকাত আদায়ের পাশাপাশি, তিনি বলেন, তারা মৃত্যুর পর আল্লাহর কাছে ফিরে যাওয়া নিয়ে নিশ্চিত। আর সেই নিশ্চয়তার কারণেই তারা তাঁর আনুগত্যে বিনম্র হয়, তাঁর বিপুল প্রতিদানের আশায় আর কঠিন শাস্তির ভয়ে। নিশ্চয়তা তালিকার চতুর্থ কোনো জিনিস নয়, এটিই কারণ কেন প্রথম দুটি ঘটে।"
          },
          {
            "en": "He makes the point sharper by its opposite. Such people, he writes, are not like those who deny the resurrection and do not care whether they did well or ill, obeyed or disobeyed, because the denier, if he does good, hopes for no reward, and if he does evil, fears no punishment. Strip certainty of the Hereafter out, and the motive for both prayer and charity falls away with it. The engine is removed and the machine coasts to a stop.",
            "bn": "বিপরীত দিক দিয়ে তিনি কথাটা আরও ধারালো করেন। এরা, তিনি লেখেন, তাদের মতো নয় যারা পুনরুত্থান অস্বীকার করে আর গ্রাহ্যই করে না তারা ভালো করল না মন্দ, মানল না অমান্য, কারণ অস্বীকারকারী ভালো করলেও কোনো প্রতিদানের আশা রাখে না, আর মন্দ করলেও কোনো শাস্তির ভয় পায় না। আখিরাতের নিশ্চয়তা তুলে নিন, নামায আর দানের তাগিদও তার সঙ্গে খসে পড়ে। চালিকাশক্তি সরে গেলে যন্ত্রটা গড়িয়ে গড়িয়ে থেমে যায়।"
          },
          {
            "en": "As-Sa'di reaches the same place by another road. Their certainty of the Hereafter, he writes, requires the perfection of their striving for it and their wariness of whatever brings on punishment, and then he adds a line that could stand over the whole verse: wa-hadha aslu kulli khayr, and this is the root of all good. Make the return to God certain and good works follow as fruit follows a root. This is why the verse saves certainty for last: it is the ground the other two grow from.",
            "bn": "সাদী অন্য পথে একই জায়গায় পৌঁছান। আখিরাতের নিশ্চয়তা, তিনি লেখেন, দাবি করে তার জন্য পূর্ণ চেষ্টা আর যা শাস্তি ডেকে আনে তা থেকে সাবধানতা। তারপর জোড়েন এমন এক কথা যা গোটা আয়াতের ওপরে বসানো যায়: 'ওয়া হাজা আসলু কুল্লি খাইর', আর এটিই সকল কল্যাণের মূল। আল্লাহর কাছে ফেরাকে নিশ্চিত করুন, নেক আমল ফলবে যেমন মূল থেকে ফল ফলে। এ কারণেই আয়াত নিশ্চয়তাকে শেষের জন্য রাখে, এ-ই সেই মাটি যেখান থেকে বাকি দুটি গজায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge That Moves You",
          "bn": "যে জ্ঞান নাড়িয়ে দেয়"
        },
        "p": [
          {
            "en": "It is worth asking what yaqin names, since the verse chose it over the plainer word for belief. As-Sa'di defines it: faith that has climbed to the degree of certainty, which he calls al-'ilm at-tamm, complete knowledge that reaches all the way into the heart and there calls to action. Not every knowledge moves the one who holds it; a man can know a fact and sit still. Yaqin is the kind that cannot sit still, knowledge that has arrived in the heart and set the hands working.",
            "bn": "জিজ্ঞেস করার মতো, 'ইয়াকীন' শব্দটা কী বোঝায়, যেহেতু আয়াত সাধারণ বিশ্বাসের শব্দ ছেড়ে একেই বেছে নিল। সাদী এর সংজ্ঞা দেন: এমন ঈমান যা নিশ্চয়তার স্তরে উঠে গেছে, যাকে তিনি বলেন 'আল-ইলমুত তাম্ম', পূর্ণ জ্ঞান, যা একেবারে অন্তরে পৌঁছে সেখান থেকে আমলের ডাক দেয়। সব জ্ঞান তার মালিককে নাড়ায় না, মানুষ একটা তথ্য জেনেও বসে থাকতে পারে। ইয়াকীন সেই জাতের, যা স্থির বসে থাকতে পারে না, যে জ্ঞান অন্তরে পৌঁছে হাত দুটোকে কাজে লাগিয়ে দিয়েছে।"
          },
          {
            "en": "That is the difference between the two groups the passage will set side by side. The believer's certainty reaches the heart and shows in the limbs. The denier's refusal, at-Tabari said, leaves him indifferent to good and evil alike. One knows the return and lives braced for it; the other does not and drifts. The verse does not ask only whether you believe the Hereafter is coming. It asks whether that belief has travelled from your head to your heart to your hands.",
            "bn": "এটিই সেই তফাত, যে দুই দলকে আয়াত পাশাপাশি রাখবে। মু'মিনের নিশ্চয়তা অন্তরে পৌঁছায় আর অঙ্গে ধরা পড়ে। অস্বীকারকারীর প্রত্যাখ্যান, তাবারী বললেন, তাকে ভালো-মন্দ দুয়ের ব্যাপারেই উদাসীন করে রাখে। একজন ফেরাটা জানে আর তার জন্য প্রস্তুত হয়ে বাঁচে; অন্যজন জানে না আর ভেসে বেড়ায়। আয়াত শুধু জিজ্ঞেস করে না আপনি আখিরাত আসছে কিনা বিশ্বাস করেন। জিজ্ঞেস করে, সেই বিশ্বাস কি মাথা থেকে অন্তরে, অন্তর থেকে হাতে পৌঁছেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Religion in One Sitting",
          "bn": "এক বৈঠকে পুরো দ্বীন"
        },
        "p": [
          {
            "en": "No tafsir fetched for this verse attaches a particular hadith to it, so what follows is a sound narration that illuminates the three marks rather than a narration tied to the verse. In Sahih al-Bukhari, Abu Hurayra reports that the angel Jibril came to the Prophet ﷺ and asked him what faith is. He answered that faith is to believe in Allah, His angels, the meeting with Him, His messengers, and to believe in the resurrection. Then Jibril asked what Islam is.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর নির্দিষ্ট কোনো হাদীস এর সঙ্গে জোড়েনি, তাই নিচের হাদীসটি তিনটি চিহ্নকে আলোকিত করে বটে, আয়াতের সঙ্গে বাঁধা নয়। সহীহ বুখারীতে আবু হুরায়রা (রাঃ) বর্ণনা করেন, জিবরীল (আঃ) নবী ﷺ-এর কাছে এসে জিজ্ঞেস করলেন ঈমান কী। তিনি বললেন, ঈমান হলো আল্লাহর প্রতি, তাঁর ফেরেশতাদের প্রতি, তাঁর সাক্ষাতের প্রতি, তাঁর রাসূলদের প্রতি বিশ্বাস রাখা আর পুনরুত্থানে বিশ্বাস রাখা। এরপর জিবরীল (আঃ) জিজ্ঞেস করলেন ইসলাম কী।"
          },
          {
            "en": "Islam, the Prophet ﷺ answered, is to worship Allah alone, to establish the prayer, to pay the obligatory zakah, and to fast Ramadan. Set the two answers beside our verse and the fit is exact. The two public acts the verse names, standing the prayer and giving the zakah, are named here under Islam; the certainty the verse names is named here under faith, as belief in the meeting with Allah and the resurrection. At the end the Prophet ﷺ said this was Jibril, come to teach the people their religion.",
            "bn": "ইসলাম, নবী ﷺ বললেন, হলো এক আল্লাহর ইবাদত করা, নামায কায়েম করা, ফরয যাকাত আদায় করা আর রমজানের রোজা রাখা। দুই জবাব আমাদের আয়াতের পাশে রাখুন, মিলটা হুবহু। আয়াত যে দুই প্রকাশ্য আমলের নাম নেয়, নামায দাঁড় করানো ও যাকাত দেওয়া, এখানে তা আসে ইসলামের অধীনে; আয়াত যে নিশ্চয়তার নাম নেয়, এখানে তা আসে ঈমানের অধীনে, আল্লাহর সাক্ষাৎ ও পুনরুত্থানে বিশ্বাস হিসেবে। শেষে নবী ﷺ বললেন, ইনি জিবরীল, মানুষকে তাদের দ্বীন শেখাতে এসেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Three Marks",
          "bn": "তিন চিহ্ন বয়ে নেওয়া"
        },
        "p": [
          {
            "en": "This is not a verse about anyone else. It describes the believer, and al-Qurtubi notes that the same description opened Surah al-Baqara, where he says its meaning was already set out. The portrait recurs because it is the Qur'an's standing picture of a believer. Read here, at the head of an-Naml, it hands the good news of 27:2 its conditions. The question it leaves is not about the deniers of the next verse but about the reader: do these three marks describe me?",
            "bn": "এ আয়াত অন্য কারও নিয়ে নয়। এ মু'মিনকেই আঁকে, আর কুরতুবী মনে করিয়ে দেন একই বর্ণনা সূরা বাকারার শুরুতেও এসেছে, যেখানে তাঁর মতে এর মানে আগেই বলা হয়েছে। ছবিটা বারবার ফেরে, কারণ এ-ই কুরআনের ধরা-বাঁধা মু'মিনের ছবি। এখানে, আন-নামলের মাথায় পড়লে, এ ২৭:২-এর সুসংবাদকে তার শর্ত ধরিয়ে দেয়। যে প্রশ্ন রেখে যায় তা পরের আয়াতের অস্বীকারকারীদের নিয়ে নয়, পাঠককে নিয়ে: এই তিনটি চিহ্ন কি আমাকে বোঝায়?"
          },
          {
            "en": "The verse gives a way to check. Take the certainty first, since it is the root: is the return to Allah real enough to me to change what I do today? Then look for its fruit. Does my prayer stand, upright and awake, or merely get done? Does my zakah leave my hand and reach a rightful one? As-Sa'di called certainty of the Hereafter the root of all good. The test of whether I have it is whether anything at all is growing from it.",
            "bn": "আয়াত মিলিয়ে দেখার একটা পথও দেয়। আগে নিন নিশ্চয়তাটা, যেহেতু এটিই মূল: আল্লাহর কাছে ফেরা কি আমার কাছে এতটা সত্য যে তা আজকের কাজ বদলে দেয়? তারপর তার ফল খুঁজুন। আমার নামায কি দাঁড়ায়, সোজা ও জাগ্রত, নাকি শুধু আদায় হয়ে যায়? আমার যাকাত কি হাত থেকে বেরিয়ে কোনো হকদারের কাছে পৌঁছায়? সাদী আখিরাতের নিশ্চয়তাকে বললেন সকল কল্যাণের মূল। আমার তা আছে কিনা তার পরীক্ষা হলো, তা থেকে কিছু গজাচ্ছে কিনা।"
          }
        ]
      }
    ]
  },
  "27:19": {
    "sections": [
      {
        "h": {
          "en": "The Man at His Height",
          "bn": "সর্বোচ্চ শিখরে দাঁড়ানো মানুষ"
        },
        "p": [
          {
            "en": "27:15 records that Dawud and Sulayman (AS) were given knowledge, and that both said: praise be to Allah, who has favoured us over many of His believing servants. In 27:16 Sulayman (AS) inherits Dawud (AS) and announces that they have been taught the language of birds and given from all things. 27:17 gathers his armies of jinn, men and birds, marshalled in ranks. The man in this verse stands at the top of everything a man can be handed.",
            "bn": "27:15 জানায় যে দাউদ ও সুলাইমান (আঃ)-কে জ্ঞান দেওয়া হয়েছিল, আর তাঁরা দুজনেই বলেছিলেন: সকল প্রশংসা আল্লাহর, যিনি তাঁর বহু মুমিন বান্দার ওপর আমাদের মর্যাদা দিয়েছেন। 27:16 আয়াতে সুলাইমান (আঃ) দাউদ (আঃ)-এর উত্তরাধিকারী হন এবং ঘোষণা করেন যে তাঁদের পক্ষীকুলের ভাষা শেখানো হয়েছে এবং সবকিছু থেকেই দেওয়া হয়েছে। 27:17 তাঁর জিন, মানুষ ও পাখির বাহিনীকে সারিবদ্ধভাবে সমবেত করে। এই আয়াতের মানুষটি দাঁড়িয়ে আছেন এমন সবকিছুর শীর্ষে, যা একজন মানুষকে দেওয়া সম্ভব।"
          },
          {
            "en": "Then the column reaches a valley. 27:18 lets a single ant speak: enter your dwellings, so that Sulayman and his soldiers do not crush you while they perceive not. The Quran stops there, and so should we; the additions that circulate about what else she said are not in the text. What is in the text is remarkable enough — a warning about the king, spoken within earshot of the king.",
            "bn": "এরপর বাহিনীটি একটি উপত্যকায় পৌঁছায়। 27:18 একটি মাত্র পিঁপড়াকে কথা বলতে দেয়: তোমরা নিজেদের বাসস্থানে ঢুকে পড়, যাতে সুলাইমান ও তাঁর সৈন্যদল তাদের অজান্তে তোমাদের পিষে না ফেলে। কুরআন সেখানেই থামে, আমাদেরও থামা উচিত; সে আর কী বলেছিল বলে যেসব সংযোজন প্রচলিত আছে, তা পাঠে নেই। পাঠে যা আছে তা-ই যথেষ্ট বিস্ময়কর — বাদশাহকে নিয়ে একটি সতর্কবার্তা, বাদশাহর শোনার দূরত্বেই উচ্চারিত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Excuse Inside the Warning",
          "bn": "সতর্কবার্তার ভেতরের ওজর"
        },
        "p": [
          {
            "en": "Read her sentence again and watch its final clause. She does not accuse. She warns her own kind of a real danger and, in the same breath, clears the ones who would cause it: while they perceive not. A creature small enough to be stepped on without being noticed still declined to read intention into the feet above her, and said so publicly.",
            "bn": "তার বাক্যটি আবার পড়ুন, আর শেষ অংশটি লক্ষ করুন। সে অভিযোগ করে না। সে নিজের জাতিকে একটি বাস্তব বিপদের কথা জানায় এবং একই নিঃশ্বাসে যারা সেই বিপদ ঘটাবে তাদের নির্দোষ ঘোষণা করে: তাদের অজান্তে। যে প্রাণী এত ছোট যে তাকে মাড়িয়ে গেলেও কেউ টের পায় না, সে-ও তার ওপরের পায়ের ভেতরে কোনো উদ্দেশ্য আরোপ করতে রাজি হলো না, এবং কথাটি প্রকাশ্যেই বলল।"
          },
          {
            "en": "That clause is what Sulayman (AS) smiles at. He is not flattered at being feared. as-Sa'di reads his wonder as directed at two things: how well she looked after her own kind, and how well she put what she had to say. A ruler who can be delighted by competence in a creature that owes him nothing has kept something rare intact.",
            "bn": "এই অংশটিতেই সুলাইমান (আঃ) হাসেন। ভয় পাওয়ার বিষয় হয়ে ওঠায় তিনি তুষ্ট হন না। আস-সা'দী তাঁর বিস্ময়কে দুটি জিনিসের দিকে নির্দেশিত হিসেবে পড়েন: সে কত ভালোভাবে নিজের জাতির দেখাশোনা করল, আর কত সুন্দরভাবে নিজের কথাটি বলল। যে শাসক এমন এক প্রাণীর দক্ষতায় আনন্দিত হতে পারেন, যে প্রাণীর কাছে তাঁর কোনো পাওনা নেই — তিনি দুর্লভ কিছু একটা অক্ষত রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "He Smiled, Not Laughed",
          "bn": "তিনি মুচকি হাসলেন, অট্টহাসি নয়"
        },
        "p": [
          {
            "en": "Fa-tabassama dahikan min qawliha — so he smiled, amused at her speech. Arabic distinguishes the smile from the open laugh, and the verse names the smile first. as-Sa'di reads this as the balance the prophets kept. Unrestrained laughter belongs to frivolity, and never smiling at what is genuinely delightful belongs to harshness and pride; the Prophet ﷺ too, he notes, laughed mostly by smiling.",
            "bn": "ফাতাবাসসামা দাহিকান মিন কাওলিহা — তিনি তার কথায় খুশি হয়ে মুচকি হাসলেন। আরবি ভাষা মুচকি হাসিকে খোলা অট্টহাসি থেকে আলাদা করে, আর আয়াতটি আগে মুচকি হাসিরই নাম নেয়। আস-সা'দী এটিকে নবীদের রক্ষা করা ভারসাম্য হিসেবে পড়েন। লাগামহীন অট্টহাসি লঘুচিত্ততার লক্ষণ, আর সত্যিই আনন্দদায়ক কিছুতে কখনো না হাসা রূঢ়তা ও অহংকারের লক্ষণ; তিনি উল্লেখ করেন, নবী ﷺ-এর হাসিও বেশিরভাগ সময় ছিল মুচকি হাসি।"
          },
          {
            "en": "Something opens here that is easy to miss. The man had every excuse to be irritated — he had just been described, in public, as a hazard to be hidden from. He treated the correction as a pleasure. Power that can hear itself named a danger and smile is power still standing under something larger. The prayer that follows comes out of exactly that opening.",
            "bn": "এখানে এমন কিছু খুলে যায় যা সহজেই চোখ এড়িয়ে যায়। বিরক্ত হওয়ার সব অজুহাত লোকটির ছিল — প্রকাশ্যেই তাঁকে এমন এক বিপদ হিসেবে বর্ণনা করা হলো, যার থেকে লুকিয়ে থাকতে হয়। তিনি সেই সংশোধনকে আনন্দ হিসেবে গ্রহণ করলেন। যে ক্ষমতা নিজেকে বিপদ নামে ডাকতে শুনেও হাসতে পারে, সেই ক্ষমতা এখনো নিজের চেয়ে বড় কিছুর অধীনে দাঁড়িয়ে আছে। এর পরের দোয়াটি ঠিক এই খুলে যাওয়া জায়গা থেকেই বের হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shape of the Prayer",
          "bn": "দোয়াটির গঠন"
        },
        "p": [
          {
            "en": "The du'a runs on two imperatives addressed to Allah: awzi'ni, enable me, and adkhilni, admit me. The first governs two clauses — that I give thanks for the favour You bestowed on me and on my parents, and that I do a righteous deed You approve. The second asks for entry among His righteous servants, and asks for it by His mercy. The same opening words appear in 46:15 in the mouth of a believer reaching forty.",
            "bn": "দোয়াটি দাঁড়িয়ে আছে আল্লাহকে উদ্দেশ করা দুটি আদেশসূচক ক্রিয়ার ওপর: আওযি'নী — আমাকে সামর্থ্য দাও, আর আদখিলনী — আমাকে প্রবেশ করাও। প্রথমটি দুটি বাক্যাংশকে পরিচালনা করে — যেন আমি সেই অনুগ্রহের শোকর আদায় করি যা তুমি আমাকে ও আমার পিতামাতাকে দিয়েছ, আর যেন আমি এমন সৎকাজ করি যাতে তুমি সন্তুষ্ট হও। দ্বিতীয়টি তাঁর সৎকর্মশীল বান্দাদের মধ্যে প্রবেশ চায়, আর তা চায় তাঁর রহমতের মাধ্যমেই। একই সূচনা-শব্দগুলো 46:15 আয়াতে চল্লিশে পৌঁছানো এক মুমিনের মুখেও আসে।"
          },
          {
            "en": "Notice what is not asked for. No enlargement of the kingdom, no victory, no lengthened life. A man commanding jinn, men and birds asks to be made grateful and to be let in among the righteous. Later in the same surah, 27:40 shows him applying the same reading to a greater wonder: this is from the favour of my Lord, to test me whether I am grateful or ungrateful.",
            "bn": "লক্ষ করুন, কী চাওয়া হয়নি। রাজ্যের বিস্তার নয়, বিজয় নয়, দীর্ঘ আয়ু নয়। যে মানুষ জিন, মানুষ ও পাখিদের ওপর কর্তৃত্ব করেন, তিনি চান কৃতজ্ঞ হওয়ার সামর্থ্য এবং সৎকর্মশীলদের কাতারে ঠাঁই। একই সূরার পরের অংশে 27:40 দেখায় তিনি আরও বড় এক বিস্ময়ের ক্ষেত্রেও একই পাঠ প্রয়োগ করছেন: এটি আমার রবের অনুগ্রহ, আমাকে পরীক্ষা করার জন্য — আমি কৃতজ্ঞ হই, না অকৃতজ্ঞ।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude You Have to Ask For",
          "bn": "কৃতজ্ঞতা, যা চেয়ে নিতে হয়"
        },
        "p": [
          {
            "en": "The strangest clause is the first one: enable me to be grateful. Gratitude is treated as a capacity Allah grants, not a reflex that arrives automatically with the gift. That is a sober admission from a prophet at the height of his power. If thankfulness followed blessing by nature, the most favoured people would be the most thankful, and 34:13 would not have to report that few of His servants are.",
            "bn": "সবচেয়ে অদ্ভুত অংশটি প্রথমটিই: আমাকে কৃতজ্ঞ হওয়ার সামর্থ্য দাও। কৃতজ্ঞতাকে এখানে দেখা হয়েছে আল্লাহর দেওয়া এক সামর্থ্য হিসেবে, দানের সাথে আপনাআপনি আসা কোনো স্বাভাবিক প্রতিক্রিয়া হিসেবে নয়। ক্ষমতার শিখরে দাঁড়ানো এক নবীর পক্ষ থেকে এটি এক সংযত স্বীকারোক্তি। কৃতজ্ঞতা যদি নিয়ামতের পিছু পিছু স্বভাবতই আসত, তবে সবচেয়ে বেশি অনুগ্রহপ্রাপ্তরাই হতেন সবচেয়ে বেশি কৃতজ্ঞ, আর 34:13 আয়াতকে জানাতে হতো না যে তাঁর বান্দাদের অল্পই কৃতজ্ঞ।"
          },
          {
            "en": "The favour named runs through two generations — upon me and upon my parents. What reached him had passed through them first, so he counts it once for both. 14:7 states the return on this kind of accounting: if you are grateful, I will surely increase you. 31:12 states the other side of it: whoever is grateful is grateful for his own benefit, and whoever denies the favour — Allah is Free of need and Praiseworthy.",
            "bn": "যে অনুগ্রহের নাম নেওয়া হয়েছে তা দুই প্রজন্মের ভেতর দিয়ে বয়ে গেছে — আমার ওপর এবং আমার পিতামাতার ওপর। তাঁর কাছে যা পৌঁছেছে তা আগে তাঁদের ভেতর দিয়ে গেছে, তাই তিনি একবারেই দুজনের জন্য তা গোনেন। 14:7 এই ধরনের হিসাবের প্রতিদান জানায়: যদি তোমরা কৃতজ্ঞতা প্রকাশ কর, আমি অবশ্যই তোমাদের বাড়িয়ে দেব। 31:12 এর অন্য দিকটি বলে: যে কৃতজ্ঞ হয় সে নিজের কল্যাণেই কৃতজ্ঞ হয়, আর যে অকৃতজ্ঞ হয় — আল্লাহ অমুখাপেক্ষী, প্রশংসিত।"
          }
        ]
      }
    ]
  },
  "27:40": {
    "sections": [
      {
        "h": {
          "en": "Two Offers, One Throne",
          "bn": "দুটি প্রস্তাব, একটি সিংহাসন"
        },
        "p": [
          {
            "en": "The scene is set two verses earlier. In 27:38 Sulayman (AS) asks his assembly which of them will bring him the queen's throne before her people arrive in submission, and in 27:39 an 'ifrit of the jinn answers first: I will bring it to you before you rise from your place, and I am strong and trustworthy for it. Then this verse gives a second offer that alters only the measure of time — before your glance returns to you. Formidable strength has been outbid, and outbid by a margin the eye itself supplies.",
            "bn": "দৃশ্যটির প্রস্তুতি শুরু হয় দুই আয়াত আগে। 27:38 আয়াতে সুলাইমান (আঃ) তাঁর পারিষদদের জিজ্ঞেস করেন, রানীর লোকজন আত্মসমর্পণ করে আসার আগে কে তাঁর সিংহাসনটি এনে দিতে পারবে; আর 27:39 আয়াতে জিনদের এক ইফরীত প্রথমে জবাব দেয়: আপনি আপনার জায়গা থেকে ওঠার আগেই আমি তা এনে দেব, এ কাজে আমি শক্তিশালী ও আস্থাভাজন। এরপর এই আয়াতটি দ্বিতীয় একটি প্রস্তাব দেয়, যেখানে কেবল সময়ের মাপটিই বদলে যায় — আপনার দৃষ্টি আপনার দিকে ফিরে আসার আগেই। ভয়ংকর শক্তিকে হারিয়ে দেওয়া হলো, আর হারানোর ব্যবধানটুকু জোগাল চোখ নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man the Quran Leaves Unnamed",
          "bn": "যাকে কুরআন নাম দেয়নি"
        },
        "p": [
          {
            "en": "The speaker is described and not named: alladhi 'indahu 'ilmun min al-kitab, the one who had knowledge from the Scripture. Reports circulate that supply him with a name, and they differ from one another; none of them is established, and the Book that could have settled the matter declined to. What it gives instead is the description, and the description is carrying weight that a name would only have drawn attention away from.",
            "bn": "বক্তার পরিচয় দেওয়া হয়েছে বর্ণনা দিয়ে, নাম দিয়ে নয়: আল্লাযী ইনদাহু ইলমুন মিনাল কিতাব — যার কাছে কিতাবের জ্ঞান ছিল। তাঁকে নাম দিয়ে চিহ্নিত করার বর্ণনা প্রচলিত আছে, আর সেগুলো একে অন্যের সাথে মেলে না; কোনোটিই প্রমাণিত নয়, এবং যে কিতাব বিষয়টি মীমাংসা করে দিতে পারত সে তা করেনি। তার বদলে কুরআন দেয় বর্ণনাটি, আর সেই বর্ণনাই এমন ভার বহন করছে যা থেকে একটি নাম কেবল মনোযোগই সরিয়ে নিত।"
          },
          {
            "en": "Set the two descriptions side by side. One is 'ifritun min al-jinn, an 'ifrit from among the jinn; the other is 'ilmun min al-kitab, a knowledge from the Book. Both nouns are indefinite, and both are followed by min, which reads here as partitive — a portion drawn from something larger. A share of strength has been outrun by a share of revealed knowledge, and not by the Scripture entire, nor by a figure the Quran considered worth introducing to us.",
            "bn": "বর্ণনা দুটি পাশাপাশি রাখুন। একটি হলো ইফরীতুন মিনাল জিন্ন — জিনদের মধ্য থেকে এক ইফরীত; অন্যটি ইলমুন মিনাল কিতাব — কিতাব থেকে কিছু জ্ঞান। দুটি বিশেষ্যই অনির্দিষ্ট, আর দুটির পরেই আসে 'মিন', যা এখানে অংশবাচক হিসেবেই পড়া যায় — বড় কিছু থেকে নেওয়া একটি অংশ। শক্তির একটি অংশকে ছাড়িয়ে গেল ওহীর জ্ঞানের একটি অংশ — গোটা কিতাব নয়, আর এমন কেউও নন যাঁকে পরিচয় করিয়ে দেওয়া কুরআন প্রয়োজন মনে করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gift Read as a Test",
          "bn": "নিয়ামতকে পরীক্ষা হিসেবে পড়া"
        },
        "p": [
          {
            "en": "When Sulayman (AS) saw it mustaqirran 'indahu, settled and at rest in his presence, he spoke. His first move is to assign an origin: hadha min fadli rabbi, this is from the favour of my Lord. His second is to assign a purpose, and the verb he reaches for is bala, to try: liyabluwani a-ashkuru am akfur, to test me whether I will be grateful or ungrateful. At no point does he treat the wonder as a payment owed to his rank.",
            "bn": "সুলাইমান (আঃ) যখন সেটিকে দেখলেন মুসতাকিররান ইনদাহু — তাঁর সামনে স্থিরভাবে রক্ষিত — তখন তিনি কথা বললেন। তাঁর প্রথম কাজ উৎস নির্ধারণ করা: হাযা মিন ফাদলি রব্বী — এটা আমার প্রতিপালকের অনুগ্রহ। দ্বিতীয় কাজ উদ্দেশ্য নির্ধারণ করা, আর সেখানে তিনি যে ক্রিয়াপদটি বেছে নেন তা হলো 'বালা', অর্থাৎ পরীক্ষা করা: লিইয়াবলুওয়ানী আআশকুরু আম আকফুর — আমাকে পরীক্ষা করার জন্য, আমি কৃতজ্ঞ হই না অকৃতজ্ঞ। কোথাও তিনি এই বিস্ময়কর ঘটনাকে নিজের মর্যাদার প্রাপ্য পাওনা হিসেবে দেখেন না।"
          },
          {
            "en": "That is an unusual sentence for a moment of triumph, and it is why the verse is worth living with. A test is something a person can fail. By naming both answers in one breath — shukr and kufr — he keeps the second one visible at exactly the hour when a man is least likely to think it could apply to him. Earlier in this same surah, 27:19 shows the same instinct at a far smaller wonder: he asks to be enabled to give thanks.",
            "bn": "বিজয়ের মুহূর্তের জন্য এটি অস্বাভাবিক এক বাক্য, আর এ কারণেই আয়াতটি নিয়ে বেঁচে থাকা মূল্যবান। পরীক্ষা এমন জিনিস যাতে মানুষ ব্যর্থও হতে পারে। এক নিঃশ্বাসে দুটি সম্ভাব্য উত্তরের নাম নিয়ে — শুকর ও কুফর — তিনি দ্বিতীয়টিকে ঠিক সেই মুহূর্তে চোখের সামনে রাখেন, যখন মানুষ সবচেয়ে কম ভাবে যে ওটা তার ক্ষেত্রে খাটতে পারে। এই সূরারই আগের অংশে, 27:19 আয়াতে, অনেক ছোট এক বিস্ময়ের সামনে একই প্রবণতা দেখা যায়: তিনি কৃতজ্ঞতা আদায়ের শক্তি চেয়ে দোয়া করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Gratitude Has One Beneficiary",
          "bn": "কৃতজ্ঞতার উপকারভোগী একজনই"
        },
        "p": [
          {
            "en": "The verse then leaves the palace and states a law: wa man shakara fa-innama yashkuru li-nafsih. Innama is the Arabic tool for restriction — only this, and nothing besides. Whoever gives thanks does so for himself alone. Nothing travels upward and arrives as a benefit; the entire return on gratitude is deposited in the account of the one who offered it. The clause about ingratitude is built the same way and reaches the same conclusion from the other side.",
            "bn": "এরপর আয়াতটি প্রাসাদ ছেড়ে বেরিয়ে এসে একটি বিধান ঘোষণা করে: ওয়া মান শাকারা ফাইন্নামা ইয়াশকুরু লিনাফসিহ। 'ইন্নামা' আরবিতে সীমাবদ্ধকরণের হাতিয়ার — কেবল এটাই, এর বাইরে কিছু নয়। যে কৃতজ্ঞতা প্রকাশ করে, সে কেবল নিজের জন্যই করে। উপরের দিকে কিছুই যায় না যা সেখানে গিয়ে উপকার হয়ে পৌঁছায়; কৃতজ্ঞতার পুরো মুনাফাটাই জমা হয় যে তা আদায় করল তারই হিসাবে। অকৃতজ্ঞতা সম্পর্কিত বাক্যটিও একই কাঠামোয় গড়া, আর অন্য দিক থেকে একই সিদ্ধান্তে পৌঁছায়।"
          },
          {
            "en": "And whoever is ungrateful — then indeed my Lord is Ghaniyyun Karim, free of all need, generous. The same law is stated in 31:12, in the counsel that comes with Luqman's wisdom, and there it closes on Ghaniyyun Hamid, Free of need, Praiseworthy. Musa (AS) gives a third version in 14:8 — if you and everyone on the earth disbelieve, Allah is Free of need, Praiseworthy. Freedom from need is constant across all three; the name set beside it changes.",
            "bn": "আর যে অকৃতজ্ঞ হয় — নিশ্চয়ই আমার প্রতিপালক গানিয়্যুন কারীম, অভাবমুক্ত ও মহানুভব। একই বিধান বলা হয়েছে 31:12 আয়াতে, লুকমানকে দেওয়া প্রজ্ঞার সঙ্গে আসা উপদেশে, আর সেখানে বাক্যটি শেষ হয় গানিয়্যুন হামীদ — অভাবমুক্ত, প্রশংসিত — নামে। মূসা (আঃ) তৃতীয় একটি রূপ দেন 14:8 আয়াতে: তোমরা এবং পৃথিবীর সবাই যদি অস্বীকার করো, তবু আল্লাহ অভাবমুক্ত, প্রশংসিত। তিন জায়গাতেই অভাবমুক্ততা অপরিবর্তিত; পাশে বসানো নামটি বদলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Is Added to Him",
          "bn": "তাঁর সাথে কিছুই যোগ হয় না"
        },
        "p": [
          {
            "en": "Sahih Muslim records a hadith qudsi narrated by Abu Dharr (RA) in which Allah says: O My servants, if the first of you and the last of you, your humans and your jinn, were upon the most God-fearing heart of any one man among you, that would add nothing to My dominion; and if they were upon the most wicked heart among you, that would take nothing from it. These, He says, are only your deeds, which He records for you and then repays.",
            "bn": "সহীহ মুসলিমে আবু যার (রাঃ) থেকে বর্ণিত একটি হাদীসে কুদসী আছে, যাতে আল্লাহ বলেন: হে আমার বান্দারা, তোমাদের প্রথম ও শেষ জন, তোমাদের মানুষ ও তোমাদের জিন যদি সকলে তোমাদের মধ্যকার সবচেয়ে মুত্তাকী ব্যক্তির হৃদয়ের মতো হয়ে যায়, তাতে আমার রাজত্বে কিছুই যোগ হবে না; আর যদি তারা সকলে তোমাদের মধ্যকার সবচেয়ে পাপিষ্ঠ হৃদয়ের মতো হয়ে যায়, তাতেও তা থেকে কিছুই কমবে না। তিনি বলেন, এগুলো তো তোমাদেরই আমল, যা তিনি লিখে রাখেন এবং পরে পুরোপুরি ফিরিয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence You Say First",
          "bn": "প্রথম যে বাক্যটি আপনি বলেন"
        },
        "p": [
          {
            "en": "Lived, this verse is about the first sentence spoken after something goes remarkably well. The order Sulayman (AS) used is available to anyone: name the source, name the test, then get back to the work. Which of those is said first decides what the success becomes, because the competing sentence — I did this — has no second clause and closes the matter down. 14:7 attaches a promise of increase to the answer this verse asks for.",
            "bn": "বাস্তব জীবনে এই আয়াতটি সেই প্রথম বাক্যটি নিয়ে, যা কোনো কাজ অসাধারণভাবে সফল হওয়ার পর আমরা উচ্চারণ করি। সুলাইমান (আঃ) যে ক্রমটি ব্যবহার করেছেন তা যে কারও নাগালে: উৎসের নাম নিন, পরীক্ষার নাম নিন, তারপর কাজে ফিরে যান। এর কোনটি আগে বলা হলো তা-ই ঠিক করে দেয় সাফল্যটি শেষ পর্যন্ত কী হয়ে দাঁড়াবে, কারণ প্রতিদ্বন্দ্বী বাক্যটি — 'এটা আমি করেছি' — এর কোনো দ্বিতীয় অংশ নেই, এটি প্রসঙ্গটাই বন্ধ করে দেয়। 14:7 আয়াত এই আয়াতের চাওয়া উত্তরটির সাথে বৃদ্ধির প্রতিশ্রুতি জুড়ে দেয়।"
          }
        ]
      }
    ]
  },
  "27:62": {
    "sections": [
      {
        "h": {
          "en": "Five Questions in a Row",
          "bn": "পরপর পাঁচটি প্রশ্ন"
        },
        "p": [
          {
            "en": "27:59 sets the challenge: praise be to Allah, and peace upon His servants whom He has chosen — is Allah better, or what they associate with Him? Five verses then answer it in the same shape. 27:60 to 27:64 each open with amman, or He who, and each carries the same refrain near its end: is there a deity with Allah? Creation and the rain that grows gardens; the earth made stable with its rivers, mountains and the barrier between the two seas; this verse; guidance through the darknesses of land and sea; originating creation and repeating it.",
            "bn": "27:59 আয়াত চ্যালেঞ্জটি রাখে: সমস্ত প্রশংসা আল্লাহর, আর শান্তি বর্ষিত হোক তাঁর সেই বান্দাদের উপর যাঁদের তিনি বেছে নিয়েছেন — আল্লাহ শ্রেষ্ঠ, না তারা যা শরিক করে তা? এরপর পাঁচটি আয়াত একই আকারে তার জবাব দেয়। 27:60 থেকে 27:64 পর্যন্ত প্রতিটি শুরু হয় 'আম্‌মান' দিয়ে — 'নাকি তিনি, যিনি' — আর প্রতিটিতেই শেষের দিকে ফিরে আসে একই ধুয়া: আল্লাহর সঙ্গে কি আর কোনো ইলাহ আছে? সৃষ্টি ও বাগান জন্মানো বৃষ্টি; যমীনকে স্থির করা, তাতে নদী, পাহাড় ও দুই সমুদ্রের মাঝে আড়াল; এই আয়াতটি; স্থল ও সমুদ্রের অন্ধকারে পথ দেখানো; সৃষ্টির সূচনা ও তার পুনরাবৃত্তি।"
          },
          {
            "en": "27:62 is the third of the five, and it is the odd one. The other four point outward at the sky, the ground, the sea, the whole arc of creation. This one points at a single human being in trouble. Between rivers and mountains on one side and winds and resurrection on the other, the Quran inserts a man at the end of his options — and treats the answer he received as evidence of exactly the same order.",
            "bn": "27:62 আয়াতটি এই পাঁচটির মধ্যে তৃতীয়, আর এটিই বেমানান একটি। বাকি চারটি বাইরের দিকে আঙুল তোলে — আকাশ, মাটি, সমুদ্র, সৃষ্টির গোটা বৃত্তের দিকে। এটি আঙুল তোলে বিপদে পড়া একজন মানুষের দিকে। একদিকে নদী ও পাহাড়, অন্যদিকে বাতাস ও পুনরুত্থান — এর মাঝখানে কুরআন বসিয়ে দেয় এমন একজনকে, যার আর কোনো উপায় বাকি নেই; আর সে যে সাড়া পেয়েছিল, তাকে গণ্য করে ঠিক একই মাপের প্রমাণ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Mudtarr",
          "bn": "আল-মুদতার্‌র"
        },
        "p": [
          {
            "en": "The word is not the ordinary one for a needy or unhappy person. Al-mudtarr comes from a form that means to be compelled, driven, forced into a position by something outside your control. He is not merely suffering; he has been pushed to the point where no option is left. The same form appears in 2:173 for the person forced by necessity to eat what is otherwise forbidden — the law's own word for a human being at the end of his choices.",
            "bn": "শব্দটি অভাবী বা দুঃখী মানুষের সাধারণ শব্দ নয়। 'আল-মুদতার্‌র' এসেছে এমন এক গঠন থেকে, যার অর্থ বাধ্য হওয়া, তাড়িত হওয়া, নিজের নিয়ন্ত্রণের বাইরের কিছুর চাপে কোনো অবস্থানে ঠেলে যাওয়া। সে কেবল কষ্ট পাচ্ছে না; তাকে এমন জায়গায় ঠেলে দেওয়া হয়েছে যেখানে আর কোনো উপায় অবশিষ্ট নেই। এই একই গঠন 2:173 আয়াতে আসে সেই মানুষটির জন্য, যে নিরুপায় হয়ে অন্যথায় হারাম এমন জিনিস খেতে বাধ্য হয় — শরীয়তের নিজের শব্দ, যা বোঝায় এমন মানুষকে যার বাছাই ফুরিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Condition Is the Call",
          "bn": "একমাত্র শর্ত ডাকা"
        },
        "p": [
          {
            "en": "Idha da'ahu — when he calls upon Him. That is the whole qualification. The verse attaches no clause about his record, his consistency or even his creed; it names a condition, not a character. The mufassirun draw the consequence that the promise here is made to desperation as such, and the Quran shows it working that way in 29:65, where people call on Allah with complete sincerity on a ship and associate others with Him again once they are safely ashore.",
            "bn": "ইযা দাআহু — যখন সে তাঁকে ডাকে। শর্ত এটুকুই। আয়াতটি তার আমলনামা, তার নিয়মানুবর্তিতা, এমনকি তার আকীদা নিয়েও কোনো শর্ত জোড়ে না; এটি একটি অবস্থার নাম নেয়, চরিত্রের নয়। মুফাসসিরগণ এ থেকে সিদ্ধান্ত টানেন যে এখানে প্রতিশ্রুতিটি দেওয়া হয়েছে নিরুপায়তাকেই, আর কুরআন 29:65 আয়াতে তা কার্যত দেখিয়েও দেয় — যেখানে মানুষ নৌযানে পূর্ণ একনিষ্ঠতায় আল্লাহকে ডাকে, আর নিরাপদে তীরে পৌঁছেই আবার শরিক করে বসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Acts, One Power",
          "bn": "তিনটি কাজ, এক শক্তি"
        },
        "p": [
          {
            "en": "The verse names three things and not one: He responds to the desperate one when he calls upon Him, He removes the evil, and He makes you inheritors of the earth. The first two are worth separating. Responding is listed apart from relieving, which means the answer is an act in its own right — something has already happened when the call is received, before anything visible changes on the outside.",
            "bn": "আয়াতটি একটি নয়, তিনটি জিনিসের নাম নেয়: তিনি নিরুপায়ের ডাকে সাড়া দেন যখন সে তাঁকে ডাকে, তিনি অনিষ্ট দূর করেন, আর তিনি তোমাদের যমীনের উত্তরাধিকারী বানান। প্রথম দুটিকে আলাদা করে দেখা দরকার। 'সাড়া দেওয়া'-কে 'কষ্ট দূর করা' থেকে আলাদা করে উল্লেখ করা হয়েছে, অর্থাৎ সাড়া দেওয়া নিজেই একটি স্বতন্ত্র কাজ — ডাকটি পৌঁছানোমাত্র কিছু একটা ঘটে গেছে, বাইরে দৃশ্যমান কিছু বদলানোরও আগে।"
          },
          {
            "en": "The third clause looks like it belongs to a different subject, until you see what joins them. Making you khulafa' of the earth is the handing of the world from one generation to the next, the theme 6:165 states directly. The commentators tie the three together as one power seen at two scales: the hand that lifts one man's distress at night is the hand that moves whole peoples off the stage and seats others in their place.",
            "bn": "তৃতীয় বাক্যাংশটিকে দেখে মনে হয় যেন অন্য প্রসঙ্গের, যতক্ষণ না বোঝা যায় কী এদের জুড়ে রেখেছে। তোমাদের যমীনের 'খুলাফা' বানানো মানে এক প্রজন্মের হাত থেকে আরেক প্রজন্মের হাতে দুনিয়া তুলে দেওয়া — 6:165 আয়াত যে কথাটি সরাসরি বলে। মুফাসসিরগণ তিনটিকে এক শক্তির দুই মাপ হিসেবে গাঁথেন: রাতের বেলা যে হাত একজন মানুষের বিপদ সরায়, সেই হাতই গোটা জাতিকে মঞ্চ থেকে সরিয়ে সেখানে অন্যদের বসিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Little Do You Remember",
          "bn": "তোমরা অতি অল্পই স্মরণ করো"
        },
        "p": [
          {
            "en": "Each of the five questions closes differently. 27:60 ends that they are a people who ascribe equals; 27:61 that most of them do not know; 27:63 exalts Allah above what they associate; 27:64 demands that they produce their proof. This one ends: little do you remember. The rebuke has been chosen to match the evidence. The other questions point at things you must go and look at; this one points at something you already lived through.",
            "bn": "পাঁচটি প্রশ্নের প্রত্যেকটির সমাপ্তি ভিন্ন। 27:60 আয়াত শেষ হয় এই বলে যে তারা এমন এক জাতি যারা সমকক্ষ দাঁড় করায়; 27:61 আয়াত বলে তাদের অধিকাংশই জানে না; 27:63 আয়াত তারা যা শরিক করে তার ঊর্ধ্বে আল্লাহকে ঘোষণা করে; 27:64 আয়াত তাদের প্রমাণ হাজির করতে বলে। আর এটি শেষ হয়: তোমরা অতি অল্পই স্মরণ করো। ভর্ৎসনাটি প্রমাণের সঙ্গে মিলিয়ে বেছে নেওয়া। বাকি প্রশ্নগুলো এমন জিনিসের দিকে আঙুল তোলে যা তোমাকে গিয়ে দেখতে হবে; এটি আঙুল তোলে এমন কিছুর দিকে, যার ভেতর দিয়ে তুমি নিজেই গিয়েছ।"
          },
          {
            "en": "Tadhakkur is not learning; it is retrieval of something already held. Nearly every reader has been the mudtarr at least once — a night, a diagnosis, a phone call — and has been answered. The failure the verse names is not ignorance of the evidence but mislaying it. Relief has a way of erasing its own occasion, and a rescue that is not remembered proves nothing, because it is no longer in the room when the question is asked.",
            "bn": "'তাযাক্কুর' মানে নতুন করে শেখা নয়; এটি আগে থেকেই ধরে রাখা কিছুকে ফিরিয়ে আনা। প্রায় প্রত্যেক পাঠকই অন্তত একবার 'মুদতার্‌র' হয়েছে — কোনো এক রাত, কোনো এক রোগনির্ণয়, কোনো এক ফোনকল — আর সাড়া পেয়েছে। আয়াতটি যে ব্যর্থতার নাম নেয় তা প্রমাণ না জানা নয়, প্রমাণ হারিয়ে ফেলা। স্বস্তি নিজের উপলক্ষটিকেই মুছে ফেলতে জানে; আর যে উদ্ধার মনে থাকে না তা কিছুই প্রমাণ করে না, কারণ প্রশ্নটি যখন করা হয় তখন সে আর ঘরে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking From the Corner",
          "bn": "কোণঠাসা অবস্থা থেকে চাওয়া"
        },
        "p": [
          {
            "en": "40:60 gives the command and the promise in one short sentence: call upon Me, I will respond to you. This verse supplies the case where the promise is most visible and the caller least presentable. That is worth taking personally. The condition we are most ashamed of — out of options, out of dignity, asking because there is nothing else left — is the condition the Quran chose to name when it wanted to describe how Allah answers.",
            "bn": "40:60 আয়াত আদেশ ও প্রতিশ্রুতি দুটোই একটি ছোট বাক্যে দেয়: তোমরা আমাকে ডাকো, আমি সাড়া দেব। এই আয়াতটি সেই অবস্থাটি জোগায় যেখানে প্রতিশ্রুতিটি সবচেয়ে স্পষ্ট, আর ডাকার লোকটি সবচেয়ে অপ্রস্তুত। কথাটি নিজের গায়ে মেখে নেওয়ার মতো। যে অবস্থার জন্য আমরা সবচেয়ে বেশি লজ্জিত — উপায় ফুরিয়েছে, মর্যাদা ফুরিয়েছে, চাইছি কেবল আর কিছুই বাকি নেই বলে — আল্লাহ কীভাবে সাড়া দেন তা বোঝাতে গিয়ে কুরআন ঠিক সেই অবস্থাটিরই নাম নিয়েছে।"
          }
        ]
      }
    ]
  }
});
