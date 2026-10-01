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
  "27:7": {
    "sections": [
      {
        "h": {
          "en": "Lost on a Winter Road",
          "bn": "শীতের রাতে পথহারা"
        },
        "p": [
          {
            "en": "The scene opens on a journey. After years in Madyan, Mūsā (AS) set out with his family toward Egypt, and somewhere along the way the road was lost. At-Tabari and as-Sa'di place the moment on a dark, cold night; al-Baghawi says it fell in the depth of winter. As-Sa'di reads the verse's own wording as proof of their state: a man wandering off the track, he and his family gripped by a biting cold. Nothing here is grand. A family is simply lost and freezing in the dark.",
            "bn": "ঘটনাটা শুরু হয় এক সফর দিয়ে। মাদইয়ানে কয়েক বছর কাটিয়ে মূসা (আঃ) পরিবার নিয়ে মিসরের দিকে রওনা দেন, আর পথের কোথাও গিয়ে রাস্তা হারিয়ে যায়। তাবারী ও সা'দী মুহূর্তটিকে রাখেন এক অন্ধকার শীতল রাতে; বাগভী বলেন, তা ঘটেছিল কনকনে শীতের মধ্যে। সা'দী আয়াতের শব্দ থেকেই তাঁদের অবস্থার প্রমাণ পান: একজন মানুষ পথ ভুলে ঘুরছেন, আর তিনি ও তাঁর পরিবার কাঁপছেন তীব্র শীতে। এখানে বড় কিছু নেই। একটি পরিবার কেবল অন্ধকারে পথহারা আর শীতে জমে যাওয়া।"
          },
          {
            "en": "Just before this, the verse told the Prophet ﷺ that he receives the Qur'ān from One Wise and Knowing (27:6). At-Tabari notes that the opening word here, idh, hangs on that very description, and al-Qurtubi spells out the invitation behind it: take, Muhammad, from the traces of His wisdom and knowledge this account of Mūsā. So the story arrives not as idle history but as a sample of what the Wise and Knowing chooses to disclose. It begins, deliberately, with a man at his lowest and least remarkable.",
            "bn": "এর ঠিক আগে আয়াত নবী ﷺ-কে বলেছে, তিনি কুরআন পাচ্ছেন এমন একজনের কাছ থেকে যিনি মহাবিজ্ঞ ও সর্বজ্ঞ (২৭:৬)। তাবারী বলেন, এখানকার শুরুর শব্দ 'ইয' যুক্ত হয়ে আছে সেই গুণের সঙ্গেই। কুরতুবী সেই আহ্বানটি খুলে বলেন: হে মুহাম্মাদ, তাঁর হিকমত ও ইলমের নিদর্শন থেকে মূসার এই কাহিনি গ্রহণ করো। তাই কাহিনিটি আসে অলস ইতিহাস হিসেবে নয়, বরং মহাবিজ্ঞ সর্বজ্ঞ যা প্রকাশ করতে চান তারই নমুনা হিসেবে। আর তা শুরু হয় ইচ্ছা করেই এমন একজনকে দিয়ে যিনি তখন নিজের সবচেয়ে নিচু আর অনুল্লেখ্য অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fire Far Off",
          "bn": "দূরে দেখা আগুন"
        },
        "p": [
          {
            "en": "Then comes the word that carries the whole mood: ānastu nāran, I have perceived a fire. Al-Qurtubi glosses it as seeing it from a distance, at-Tabari as either seeing or sensing it. Ibn Kathir fills in the picture: from the side of the mountain Mūsā made out a fire blazing and flaring in the dark. A cold, lost traveller does not merely register a flame on the horizon; he fastens on to it. Whatever he had been feeling a moment before, the fire turns him outward toward hope, and everything he says next is built on it.",
            "bn": "তারপর আসে সেই শব্দ যা গোটা আবহটা বহন করে: আনাসতু নারান, আমি আগুন টের পেয়েছি। কুরতুবী এর অর্থ করেন দূর থেকে দেখা, তাবারী বলেন দেখা কিংবা অনুভব করা। ইবন কাসীর ছবিটা পূর্ণ করেন: পাহাড়ের পাশ থেকে মূসা অন্ধকারে জ্বলতে আর দাউদাউ করতে থাকা এক আগুন দেখতে পান। শীতার্ত, পথহারা মুসাফির দিগন্তের আগুনকে কেবল চোখে দেখে ছেড়ে দেয় না; সে ওটা আঁকড়ে ধরে। খানিক আগে যা-ই অনুভব করে থাকুন, আগুন তাঁকে বাইরে আশার দিকে ফেরায়, আর এরপর তিনি যা বলেন সবই এর উপর গড়া।"
          },
          {
            "en": "A fire in an empty night promises two things at once. It is heat, and it is a sign that someone is near who might know the road. That is exactly how the commentators read what follows. Al-Muyassar paraphrases his hope as news that would point them to the way, and warmth to drive off the cold. Mūsā has not reached the fire yet; he is still looking at it from far off. Yet already his mind runs to what he can carry back to the people waiting behind him in the dark.",
            "bn": "খালি রাতে আগুন একসঙ্গে দুটি জিনিসের আশ্বাস দেয়। তা তাপ, আবার তা এই ইঙ্গিতও যে কাছেই কেউ আছে যে পথ চেনে। পরের কথাগুলো তাফসীরকারেরা ঠিক এভাবেই পড়েন। মুয়াসসার তাঁর আশাকে ব্যাখ্যা করেন এভাবে: এমন খবর যা পথ দেখাবে, আর শীত তাড়ানোর মতো তাপ। মূসা তখনো আগুনের কাছে পৌঁছাননি; তিনি তা দূর থেকেই দেখছেন। তবু এখনই তাঁর মন ছুটছে সেদিকে, অন্ধকারে পেছনে অপেক্ষারত মানুষগুলোর কাছে তিনি কী নিয়ে ফিরতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "News of the Way",
          "bn": "আগে পথের খবর"
        },
        "p": [
          {
            "en": "Notice the order of his two hopes. The first thing he names is not warmth but news: sa-ātīkum minhā bi-khabarin, I will bring you from it some news. Ibn Kathir and al-Baghawi agree on what that news is about, the way. They had lost the road, al-Baghawi says, so Mūsā tells his family to stay put while he goes to bring back word of it. The most pressing thing for a lost family is not comfort. It is direction. He reaches for that first.",
            "bn": "খেয়াল করুন তাঁর দুটি আশার ক্রম। প্রথমে তিনি যা বলেন তা তাপ নয়, খবর: সাআতীকুম মিনহা বিখাবার, আমি সেখান থেকে তোমাদের জন্য খবর আনব। ইবন কাসীর ও বাগভী একমত যে এই খবর কী নিয়ে, পথ নিয়ে। বাগভী বলেন, তাঁরা পথ হারিয়েছিলেন, তাই মূসা পরিবারকে এক জায়গায় থাকতে বলে পথের খবর আনতে যান। পথহারা পরিবারের কাছে সবচেয়ে জরুরি জিনিস আরাম নয়। তা হলো দিশা। আর সেদিকেই তিনি আগে হাত বাড়ান।"
          },
          {
            "en": "There is a quiet confidence in how he says it. Not perhaps I will find something, but I will bring you news from it, a settled hope spoken to frightened people who needed steadying. At-Tabari supplies the implied instruction folded into the promise: stay where you are. He asks them to hold still and trust him to return. A man who is himself lost and cold still carries the weight of those depending on him, and his first move is to calm them and go looking on their behalf.",
            "bn": "তিনি কীভাবে কথাটা বলেন তাতে এক শান্ত আত্মবিশ্বাস আছে। 'হয়তো কিছু পাব' নয়, বরং 'আমি সেখান থেকে তোমাদের খবর আনব', ভীত মানুষগুলোকে শান্ত করার জন্য বলা এক স্থির আশা। তাবারী প্রতিশ্রুতির ভেতরে লুকানো নির্দেশটি ধরিয়ে দেন: তোমরা নিজ জায়গায় থাকো। তিনি তাঁদের স্থির থাকতে আর ফেরার ভরসা রাখতে বলেন। যে নিজেই পথহারা আর শীতার্ত, সে-ও নিজের উপর নির্ভরশীলদের ভার বয়ে চলে, আর তাঁর প্রথম কাজ তাঁদের শান্ত করে তাঁদের হয়ে খোঁজে বেরোনো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Brand for the Cold",
          "bn": "শীত তাড়ানোর মশাল"
        },
        "p": [
          {
            "en": "His second hope he calls a shihāb qabas, a burning brand. Al-Qurtubi explains both words: a shihāb is anything giving light, a star or a kindled stick, while a qabas is what you take from live embers. Al-Baghawi cites that a qabas is a piece of fire, and quotes az-Zajjāj that the Arabs called any bright white thing a shihāb. At-Tabari renders the phrase as a flame of fire he would kindle and carry. The image is homely: a lost man hoping to scoop up a glowing ember and bring it home.",
            "bn": "তাঁর দ্বিতীয় আশাকে তিনি বলেন শিহাব কাবাস, জ্বলন্ত এক মশাল। কুরতুবী দুটো শব্দই বুঝিয়ে দেন: শিহাব মানে আলো দেয় এমন যেকোনো কিছু, তারা হোক বা জ্বলন্ত কাঠি, আর কাবাস হলো জীবন্ত অঙ্গার থেকে যা তুলে নেওয়া হয়। বাগভী বলেন কাবাস মানে আগুনের টুকরো, আর যাজ্জাজ থেকে আনেন যে আরবরা যেকোনো উজ্জ্বল সাদা জিনিসকে শিহাব বলত। তাবারী বাক্যটির অর্থ করেন আগুনের শিখা, যা তিনি জ্বালিয়ে বয়ে আনবেন। ছবিটা একেবারে ঘরোয়া: এক পথহারা মানুষ আশা করছেন জ্বলন্ত অঙ্গার তুলে ঘরে নিয়ে যেতে।"
          },
          {
            "en": "Here the reciters divide, and the commentators keep the difference as a difference. At-Tabari and al-Qurtubi record that the Kūfan readers voweled the phrase so that qabas describes the brand, while the Madinan and Baṣran readers joined the words so it means a flame taken from an ember. Both are established readings, at-Tabari says, and whoever recites either is correct; the two senses sit close together. It is the kind of careful preserving of variants the early scholars did not smooth over, and the meaning survives both ways: a scrap of living fire.",
            "bn": "এখানে ক্বারীরা ভিন্ন হন, আর তাফসীরকারেরা পার্থক্যটাকে পার্থক্য হিসেবেই রাখেন। তাবারী ও কুরতুবী লেখেন, কুফার ক্বারীরা শব্দগুচ্ছে এমন হরকত দেন যাতে কাবাস মশালের গুণ বোঝায়, আর মদীনা ও বসরার ক্বারীরা শব্দ জুড়ে দেন যাতে অর্থ দাঁড়ায় অঙ্গার থেকে নেওয়া শিখা। তাবারী বলেন দুই পাঠই প্রতিষ্ঠিত, আর যে যেটাই পড়ুক সে সঠিক; দুটি অর্থ কাছাকাছিই থাকে। এ যেন পাঠভেদকে যত্ন করে ধরে রাখা, যা আগেকার আলিমরা চাপা দেননি, আর অর্থ দুই পথেই টিকে থাকে: জীবন্ত আগুনের এক টুকরো।"
          },
          {
            "en": "The clause ends with laʿallakum taṣṭalūn, that you may warm yourselves. Every commentator reads it the same plain way: to take the chill off the body. Al-Qurtubi lingers on it with a line of old verse — fire is the fruit of winter, and whoever would eat winter's fruit, let him warm himself at it. The detail keeps the whole scene human. Before there is any prophet or any voice from the fire, there is a father promising his family that he will bring back something to stop their shivering.",
            "bn": "বাক্যটি শেষ হয় লাআল্লাকুম তাসতালূন দিয়ে, যাতে তোমরা আগুন পোহাতে পার। প্রত্যেক তাফসীরকার এটিকে একইভাবে সাদামাটা পড়েন: শরীর থেকে শীত তাড়ানো। কুরতুবী এর উপর একটু থামেন পুরোনো এক কবিতার লাইন এনে, আগুন শীতের ফল, আর যে শীতের ফল খেতে চায় সে যেন তাতে ওম নেয়। এই খুঁটিনাটি গোটা দৃশ্যটাকে মানবিক রাখে। কোনো নবী বা আগুন থেকে আসা কোনো আওয়াজ আসার আগে এখানে আছেন এক বাবা, যিনি পরিবারকে কথা দিচ্ছেন কাঁপুনি থামানোর মতো কিছু নিয়ে ফিরবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Means and Reliance Together",
          "bn": "চেষ্টা আর ভরসা একসাথে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'ān draws the first lesson out of all this plainly: taking the natural means to meet a need is not opposed to trusting Allah. Mūsā faced two necessities, it says, to recover the road he had forgotten and to warm himself against the cold, and he acted, setting off toward the fire. Yet he made no boast of success. His words breathe servitude and hope in Allah, not confidence in his own cleverness. The striving is real, but the reliance underneath it rests on Allah, not on the effort itself.",
            "bn": "মাআরিফুল কুরআন এ সবকিছু থেকে প্রথম শিক্ষাটি সোজা করে টেনে আনে: প্রয়োজন মেটাতে স্বাভাবিক উপায় ধরা আল্লাহর উপর ভরসার বিরোধী নয়। মাআরিফ বলে, মূসার সামনে ছিল দুটি প্রয়োজন, ভুলে যাওয়া পথ খুঁজে পাওয়া আর শীত থেকে বাঁচতে একটু তাপ নেওয়া, আর তিনি কাজে নামেন, আগুনের দিকে পা বাড়ান। তবু তিনি সফলতার কোনো দম্ভ করেননি। তাঁর কথায় ঝরে বান্দাসুলভ বিনয় আর আল্লাহর উপর আশা, নিজের চতুরতায় ভরসা নয়। চেষ্টা সত্যি, কিন্তু তার নিচে যে নির্ভরতা তা আল্লাহর উপর, চেষ্টার উপর নয়।"
          },
          {
            "en": "Ma'arif adds a thought it credits to an earlier commentary: perhaps the wisdom in showing him the fire was that this single sight answered both his needs at once — it stood at the place where he would be given the road, and it was fire to warm by. What looked like a small mercy on a cold night was quietly arranged to carry far more than warmth. A man takes a step toward meeting an ordinary need, and finds the step was laid for him.",
            "bn": "মাআরিফ আগেকার এক তাফসীরের বরাতে একটি ভাবনা যোগ করে: হয়তো তাঁকে আগুন দেখানোর হিকমত এই যে এই একটি দৃশ্যই তাঁর দুই প্রয়োজন একসঙ্গে মিটিয়ে দিল। আগুনটা ছিল ঠিক সেই জায়গায় যেখানে তাঁকে পথ দেওয়া হবে, আর তা ছিল পোহানোর মতো আগুনও। শীতের রাতে যাকে মনে হয়েছিল ছোট এক রহমত, তা নীরবে এমনভাবে সাজানো ছিল যে ওম ছাড়াও আরও অনেক বেশি কিছু বয়ে আনল। মানুষ এক সাধারণ প্রয়োজনের দিকে এক কদম বাড়ায়, আর দেখে কদমটা তার জন্যই বিছিয়ে রাখা ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent for a Spark",
          "bn": "স্ফুলিঙ্গের খোঁজে গিয়ে"
        },
        "p": [
          {
            "en": "And it turned out just as he said, but far beyond what he meant. Ibn Kathir writes that Mūsā came back from that fire with tremendous news and kindled from it a tremendous light. He had gone hoping for directions and an ember; he returned carrying revelation and the light of prophethood. The small words he spoke to his family, news and a burning brand, were answered in a currency he had not imagined. The errand was real, and it was also the doorway to the single greatest meeting of his life.",
            "bn": "আর ঘটল ঠিক যেমন তিনি বলেছিলেন, তবে যা বুঝিয়েছিলেন তার চেয়ে অনেক বেশি। ইবন কাসীর লেখেন, মূসা সেই আগুন থেকে ফিরলেন বিশাল এক খবর নিয়ে, আর তা থেকে জ্বালিয়ে আনলেন বিশাল এক আলো। তিনি গিয়েছিলেন পথের দিশা আর এক টুকরো অঙ্গারের আশায়; ফিরলেন ওহি আর নবুয়তের আলো বয়ে। পরিবারকে বলা তাঁর ছোট কথাগুলো, খবর আর জ্বলন্ত মশাল, জবাব পেল এমন মুদ্রায় যা তিনি কল্পনাও করেননি। কাজটা সত্যি ছিল, আবার তা ছিল তাঁর জীবনের সবচেয়ে বড় সাক্ষাতের দরজাও।"
          },
          {
            "en": "As-Sa'di and Ibn Kathir both frame this verse as the threshold of everything that follows: the beginning of revelation to Mūsā, his being chosen as a messenger, and Allah speaking to him directly. What the fire itself turned out to be, and the words that came from it, belong to the verses just ahead. For now the point is only the shape of it. Allah drew His chosen servant to the greatest encounter of his life through the most ordinary human wants: warmth, and the way home on a dark road.",
            "bn": "সা'দী ও ইবন কাসীর দুজনেই এই আয়াতকে পরবর্তী সবকিছুর দোরগোড়া হিসেবে দেখেন: মূসার কাছে ওহির সূচনা, তাঁকে রাসূল হিসেবে বেছে নেওয়া, আর আল্লাহর সরাসরি তাঁর সঙ্গে কথা বলা। আগুনটা আসলে কী ছিল, আর তা থেকে যে কথা এসেছিল, সেসব সামনের আয়াতগুলোর বিষয়। এখন কথা কেবল এর আকারটুকু নিয়ে। আল্লাহ তাঁর মনোনীত বান্দাকে তাঁর জীবনের সবচেয়ে বড় সাক্ষাতের দিকে টেনে আনলেন সবচেয়ে সাধারণ মানবিক চাওয়ার ভেতর দিয়ে: একটুখানি ওম, আর অন্ধকার পথে ঘরে ফেরার দিশা।"
          }
        ]
      },
      {
        "h": {
          "en": "How He Named His Wife",
          "bn": "স্ত্রীকে যেভাবে সম্বোধন"
        },
        "p": [
          {
            "en": "There is a smaller courtesy tucked into the wording. Ma'arif al-Qur'ān notices that Mūsā speaks to his family in the plural, stay, that you may warm yourselves, although the commentary holds that only his wife, a daughter of Shuʿayb (AS), was with him. The plural here is a mark of respect, the way dignified people will address a single person in the plural. Ma'arif notes that the Prophet ﷺ too would speak to his wives in such terms. Even cold and lost, Mūsā's speech keeps its gentleness.",
            "bn": "শব্দচয়নের ভেতরে লুকিয়ে আছে এক ছোট ভদ্রতা। মাআরিফুল কুরআন লক্ষ করে, মূসা পরিবারকে বহুবচনে সম্বোধন করেন, থাকো, যাতে তোমরা আগুন পোহাতে পার, যদিও তাফসীর বলে তাঁর সঙ্গে ছিলেন কেবল স্ত্রী, শুআইব (আঃ)-এর এক কন্যা। এখানে বহুবচন সম্মানের চিহ্ন, যেভাবে মর্যাদাবান মানুষ একজনকেও বহুবচনে সম্বোধন করেন। মাআরিফ বলে, নবী ﷺ-ও স্ত্রীদের এমন ভাষায় কথা বলতেন। শীতার্ত আর পথহারা হয়েও মূসার কথায় কোমলতা অটুট থাকে।"
          },
          {
            "en": "Ma'arif draws a second observation from the word ahl, family. The verse could have named his wife, but it uses the broader word for his household instead. From this the commentary takes a point of manners: when a man speaks of his wife among others, it is finer to refer to her obliquely, my family is of such a view, than to use her name in a gathering. It is a small thing, but it shows how much the Qur'ān's wording teaches even where it seems only to be telling a story.",
            "bn": "মাআরিফ 'আহল', অর্থাৎ পরিবার শব্দটি থেকে আরেকটি পর্যবেক্ষণ টানে। আয়াত চাইলে তাঁর স্ত্রীর নাম নিতে পারত, কিন্তু তা না করে ব্যবহার করে পরিবারের জন্য ব্যাপক শব্দটি। এ থেকে তাফসীর এক আদবের কথা নেয়: কেউ যখন অন্যদের মাঝে নিজের স্ত্রীর কথা বলে, তখন তার নাম ধরে না বলে আড়ালে ইঙ্গিতে বলা বেশি শোভন, যেমন 'আমার পরিবারের মত এমন', গণজমায়েতে নাম ধরে বলার চেয়ে। ছোট ব্যাপার, তবু তা দেখায় কুরআনের শব্দ কত কিছু শেখায়, এমনকি যেখানে মনে হয় সে কেবল কাহিনি বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bird That Flies Out",
          "bn": "যে পাখি উড়ে বেরোয়"
        },
        "p": [
          {
            "en": "None of the commentaries attaches a specific hadith to this verse, so what follows is a general narration on the attitude the verse displays, not a report tied to the event. At-Tirmidhi records from ʿUmar ibn al-Khaṭṭāb (RA) that the Prophet ﷺ said: if you relied upon Allah as He should be relied upon, He would provide for you as He provides for the birds — they go out in the morning hungry and come back in the evening full. At-Tirmidhi graded it hasan ṣaḥīḥ and said he knew it only by this chain.",
            "bn": "কোনো তাফসীরই এই আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদীস জোড়েনি, তাই যা আসছে তা আয়াতের দেখানো মনোভাব নিয়ে একটি সাধারণ বর্ণনা, ঘটনার সঙ্গে বাঁধা কোনো রেওয়ায়েত নয়। তিরমিযী উমর ইবনুল খাত্তাব (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: তোমরা যদি আল্লাহর উপর যথাযথভাবে ভরসা করতে, তিনি তোমাদের রিজিক দিতেন যেভাবে পাখিদের দেন, তারা সকালে খালি পেটে বেরোয় আর সন্ধ্যায় ভরা পেটে ফেরে। তিরমিযী একে হাসান সহীহ বলেছেন আর বলেছেন তিনি এটি কেবল এই সূত্রেই জানেন।"
          },
          {
            "en": "The point of the image is easy to miss. The bird is provided for, but it does not wait in the nest; it flies out at dawn and returns filled at dusk. Reliance on Allah is not stillness; it is going out to look, as Mūsā went out toward the fire, while the heart leans on the Provider rather than on the wings that carry it. That is the balance this verse holds. Do the plain work your need requires, and leave its outcome, small or staggering, to Allah.",
            "bn": "ছবিটার মূল কথা সহজেই চোখ এড়িয়ে যায়। পাখির রিজিকের ব্যবস্থা আছে, তবু সে বাসায় বসে থাকে না; ভোরে উড়ে বেরোয় আর সন্ধ্যায় ভরা পেটে ফেরে। আল্লাহর উপর ভরসা মানে বসে থাকা নয়; তা হলো খুঁজতে বেরোনো, যেমন মূসা আগুনের দিকে বেরিয়েছিলেন, আর মন ভর করে যিনি রিজিক দেন তাঁর উপর, বয়ে নিয়ে যাওয়া ডানার উপর নয়। এই আয়াত সেই ভারসাম্যটাই ধরে রাখে। আপনার প্রয়োজন যে সাধারণ কাজ দাবি করে তা করুন, আর তার ফল, ছোট হোক বা বিরাট, আল্লাহর হাতে ছেড়ে দিন।"
          }
        ]
      }
    ]
  },
  "27:12": {
    "sections": [
      {
        "h": {
          "en": "Into the Fold of the Garment",
          "bn": "জামার ফাঁকে হাত"
        },
        "p": [
          {
            "en": "After the staff, a second sign. God tells Moses (AS), wa-adkhil yadaka fi jaybika, and put your hand into your jayb, the opening of your garment at the breast. At-Tabari explains why that opening and not a sleeve: Moses wore a midraʿa of wool, and on the authority of Mujahid, he was to put the palm alone into the jayb because the garment reached only partway down his arm. Had it had a full sleeve, at-Tabari adds, he would have been told to put his hand there instead.",
            "bn": "লাঠির পরে দ্বিতীয় নিদর্শন। আল্লাহ মূসা (আঃ)-কে বলেন, ওয়াআদখিল ইয়াদাকা ফী জাইবিক, অর্থাৎ তোমার জামার বুকের ফাঁকে হাত ঢুকাও। তাবারী ব্যাখ্যা করেন, কেন আস্তিন নয়, বরং এই ফাঁক। মূসা পরেছিলেন পশমের তৈরি এক আঙরাখা। মুজাহিদের সূত্রে তিনি বলেন, হাতের তালুটাই জামার ফাঁকে ঢোকানোর কথা, কারণ জামাটা হাতের অর্ধেক পর্যন্তই নামত। তাবারী যোগ করেন, পুরো আস্তিন থাকলে আল্লাহ সেখানেই হাত ঢোকাতে বলতেন।"
          },
          {
            "en": "Al-Baghawi draws the same picture: the woolen garment had no sleeve and no fastenings, so the breast-opening was the natural place for the hand to go. At-Tabari also records, from Ibn Masʿud (RA), that Moses came before Pharaoh in a woolen cloak of this kind. The detail matters. The sign is not worked with a hidden instrument or a far-off wonder. It is his own hand, drawn from his own clothing, in plain sight, so that no onlooker could claim a trick.",
            "bn": "বাগাভীও একই ছবি আঁকেন। পশমি জামাটার কোনো আস্তিন ছিল না, কোনো বোতামও ছিল না, তাই হাত ঢোকানোর স্বাভাবিক জায়গা ছিল বুকের ফাঁক। তাবারী ইবনে মাসঊদ (রাঃ)-এর সূত্রে আরও বলেন, মূসা এমন পশমি আলখাল্লা পরেই ফেরাউনের সামনে এসেছিলেন। খুঁটিনাটিটা গুরুত্বপূর্ণ। নিদর্শনটা কোনো লুকানো যন্ত্র দিয়ে বা দূরের কোনো বিস্ময় দিয়ে ঘটানো হয় না। এ তাঁর নিজের হাত, নিজের পোশাক থেকে বের করা, সবার চোখের সামনে, যাতে কেউ একে কারসাজি বলতে না পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "White, and Free of Harm",
          "bn": "শুভ্র, কোনো রোগ নয়"
        },
        "p": [
          {
            "en": "Then the promise: takhruj bayḍaʾa min ghayri suʾ, it will come out white, without any harm. At-Tabari reads bayḍaʾ as coming out white, unlike Moses's own colour, and he glosses min ghayri suʾ in a single word: min ghayri baraṣ, without leprosy. That gloss is the heart of the verse. He keeps the two ideas carefully apart: the colour changes, but the hand stays sound. White is the sign, and harm is precisely what the sign is not. The whiteness could be mistaken for the pallor of disease, so the Qur'an states at once what it is not.",
            "bn": "তারপর প্রতিশ্রুতি, তাখরুজ বাইদাআ মিন গাইরি সূ, অর্থাৎ হাত বের হয়ে আসবে সাদা হয়ে, কোনো দোষ ছাড়া। তাবারী বলেন, হাত বের হয় সাদা হয়ে, মূসার নিজের রঙের মতো নয়। আর মিন গাইরি সূ কথাটির মানে তিনি এক শব্দে দেন, মিন গাইরি বারাস, অর্থাৎ কুষ্ঠ ছাড়া। এই ব্যাখ্যাটাই আয়াতের প্রাণ। তিনি দুটি কথা যত্ন নিয়ে আলাদা রাখেন, রঙ বদলায় কিন্তু হাত থাকে সুস্থ। সাদা হলো নিদর্শন, আর দোষ ঠিক সেটাই যা এই নিদর্শন নয়। সাদা রঙকে কেউ রোগের ফ্যাকাশে ভাব ভেবে ভুল করতে পারত, তাই কুরআন সঙ্গে সঙ্গে বলে দেয় এটা কী নয়।"
          },
          {
            "en": "As-Sa'di is emphatic: no leprosy and no defect, but rather a whiteness whose radiance dazzles whoever looks at it. Al-Muyassar says the hand comes out white as snow, with no baraṣ. Al-Baghawi has it flashing like lightning, and Ibn Kathir describes it coming out white and shining as if it were a piece of the moon, gleaming like a sudden flash of lightning. Snow, the moon, a flash of lightning: the commentators reach for different images, but each of them is an image of brilliance, and none is an image of sickness. The verse hands the reader light, and takes the language of disease away.",
            "bn": "সাদীর কথা জোরালো। কুষ্ঠ নয়, কোনো খুঁতও নয়, বরং এমন শুভ্রতা যার ঝলক দেখা মানুষকে চমকে দেয়। মুয়াসসার বলেন, হাত বরফের মতো সাদা হয়ে বের হয়, কোনো কুষ্ঠ ছাড়া। বাগাভীর বর্ণনায় তা বিদ্যুতের মতো ঝিলিক দেয়। ইবনে কাসীর বলেন, হাত বের হয় সাদা ও উজ্জ্বল হয়ে, যেন চাঁদের একটা টুকরো, হঠাৎ চমকে ওঠা বিদ্যুতের মতো। বরফ, চাঁদ, বিদ্যুতের ঝিলিক, তাফসীরকারেরা আলাদা আলাদা ছবি বেছে নেন, তবে প্রতিটিই উজ্জ্বলতার ছবি, রোগের নয়। আয়াত পাঠকের হাতে আলো তুলে দেয়, আর কেড়ে নেয় রোগের ভাষা।"
          },
          {
            "en": "So let it be said plainly, in case the old misreading ever returns: the white hand of Moses (AS) is a shining miracle, a mark of honour and divine power, and not leprosy, not a blemish, not disease of any kind. The clause min ghayri suʾ exists for exactly this reason, to close the door on that error before it can open. A sign of God is guarded even in its very wording.",
            "bn": "তাই সোজা কথায় বলে রাখা ভালো, পুরনো ভুল ব্যাখ্যা যদি কখনো ফিরে আসে। মূসা (আঃ)-এর শুভ্র হাত এক ঝলমলে মুজিজা, সম্মান ও আল্লাহর কুদরতের নিদর্শন। এটা কুষ্ঠ নয়, খুঁত নয়, কোনো রকম রোগও নয়। মিন গাইরি সূ কথাটা ঠিক এই কারণেই রাখা, যাতে ভুলটা মাথা তোলার আগেই দরজা বন্ধ হয়ে যায়। আল্লাহর নিদর্শন তার শব্দের মধ্যেও সুরক্ষিত থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Among the Nine",
          "bn": "নয়ের মধ্যে দুটি"
        },
        "p": [
          {
            "en": "The verse places the hand fi tisʿi ayat, among nine signs. Ibn Kathir reads the sentence directly: these two, the staff of the previous verse and this hand, are two of nine signs with which God supports Moses and which He makes a proof, a burhan, for him before Pharaoh and his people. The sign is never given for its own sake. It is credentials, handed to a man about to stand before a king.",
            "bn": "আয়াত হাতটিকে রাখে ফী তিসঈ আয়াত, অর্থাৎ নয়টি নিদর্শনের মধ্যে। ইবনে কাসীর বাক্যটা সরাসরি পড়েন, এই দুটি, আগের আয়াতের লাঠি আর এই হাত, সেই নয়টি নিদর্শনের দুটি, যা দিয়ে আল্লাহ মূসাকে শক্তি জোগান আর ফেরাউন ও তার সম্প্রদায়ের সামনে তাঁর জন্য প্রমাণ, বুরহান, বানান। নিদর্শন কখনো নিজের জন্য দেওয়া হয় না। এ যেন পরিচয়পত্র, এক বাদশাহর সামনে দাঁড়াতে যাওয়া মানুষের হাতে তুলে দেওয়া।"
          },
          {
            "en": "On the grammar, al-Qurtubi cites an-Nahhas: the best of what was said is that this one sign is counted as included within nine. Al-Qurtubi gathers other readings of the particle fi but settles on the plain sense, that the hand is one of a set of nine. Al-Mahdawi gives the sense as: throw down your staff and put in your hand, so these are two signs among the nine. The grammar is discussed, yet the reading itself is agreed. Ibn Kathir ties the set to another verse, 17:101, where God says He gave Moses nine clear signs. The number, then, is fixed by revelation at nine.",
            "bn": "ব্যাকরণ নিয়ে কুরতুবী নাহহাসের বরাত দেন, সবচেয়ে ভালো কথা এই যে এই একটি নিদর্শন নয়ের ভেতরে ধরা। কুরতুবী ফী অব্যয়টির অন্য পাঠগুলোও জড়ো করেন, তবে সাদামাটা অর্থেই থামেন, হাত নয়টির একটি দলভুক্ত। মাহদাভী অর্থটা দেন এভাবে, তোমার লাঠি ফেলো আর হাত ঢোকাও, এই দুটি নয়টির মধ্যে দুটি নিদর্শন। ব্যাকরণ নিয়ে আলোচনা হলেও পাঠ নিয়ে মতৈক্য আছে। ইবনে কাসীর এই দলটিকে আরেক আয়াতের সঙ্গে জোড়েন, ১৭:১০১, যেখানে আল্লাহ বলেন তিনি মূসাকে নয়টি সুস্পষ্ট নিদর্শন দিয়েছেন। সুতরাং সংখ্যাটা ওহির মাধ্যমে নয়টিতেই স্থির।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Scholars Counted",
          "bn": "যা তাঁরা গুনেছেন"
        },
        "p": [
          {
            "en": "What those nine are, the commentators do not fully agree on, and it is worth seeing the disagreement rather than inventing a tidy list. At-Tabari reports from Ibn Zayd that the nine are the staff, the hand, the locusts, the lice, the frogs, the flood, the blood, the stone, and the ṭams, the blotting-out that struck Pharaoh's people in their property. Ibn Zayd adds that these are the very signs God names across the Qur'an, each recorded in its own place. At-Tabari presents the list as this report and not as the only possible count, and that restraint is itself deliberate.",
            "bn": "সেই নয়টি কী, তা নিয়ে তাফসীরকারেরা পুরোপুরি একমত নন, আর একটা গোছানো তালিকা বানিয়ে নেওয়ার চেয়ে মতপার্থক্যটা দেখে নেওয়াই ভালো। তাবারী ইবনে যায়েদের সূত্রে বলেন, নয়টি হলো লাঠি, হাত, পঙ্গপাল, উকুন, ব্যাঙ, তুফান, রক্ত, পাথর, আর তামস, অর্থাৎ ফেরাউনের লোকদের সম্পদে পড়া ধ্বংসের ছাপ। ইবনে যায়েদ যোগ করেন, এগুলো সেই নিদর্শন যা আল্লাহ কুরআনের নানা জায়গায় উল্লেখ করেছেন, প্রতিটি তার নিজের জায়গায় লেখা। তাবারী তালিকাটা এই বর্ণনা হিসেবে তোলেন, একমাত্র সম্ভব গণনা হিসেবে নয়, আর এই সংযমও ইচ্ছাকৃত।"
          },
          {
            "en": "Al-Qurtubi counts the hand as one of ten and names the remaining nine as the splitting, the staff, the locusts, the lice, the flood, the blood, the frogs, the years of famine, and the ṭams. Al-Muyassar gives yet another set: with the hand, the staff, the famine-years, the loss of crops, the flood, the locusts, the lice, the frogs, and the blood. Set the lists beside each other and a shared spine appears: the staff, the flood, the locusts, the lice, the frogs, and the blood recur in every version, while the stone, the splitting, the famine-years, and the lost crops come and go.",
            "bn": "কুরতুবী হাতকে দশটির একটি ধরে বাকি নয়টির নাম দেন, ফালাক, লাঠি, পঙ্গপাল, উকুন, তুফান, রক্ত, ব্যাঙ, দুর্ভিক্ষের বছরগুলো, আর তামস। মুয়াসসার আরেক রকম তালিকা দেন, হাতের সঙ্গে লাঠি, দুর্ভিক্ষের বছর, ফসলের ক্ষতি, তুফান, পঙ্গপাল, উকুন, ব্যাঙ, আর রক্ত। তালিকাগুলো পাশাপাশি রাখলে একটা সাধারণ মেরুদণ্ড দেখা যায়, লাঠি, তুফান, পঙ্গপাল, উকুন, ব্যাঙ আর রক্ত প্রতিটি বর্ণনাতেই ফেরে, আর পাথর, ফালাক, দুর্ভিক্ষের বছর ও নষ্ট ফসল আসে যায়।"
          },
          {
            "en": "A sound report adds a different sense of the phrase altogether. At-Tirmidhi records, grading it hasan sahih, that when two Jews asked the Prophet ﷺ about the nine signs, he listed nine commands: do not associate anything with God, do not steal, do not commit unlawful intercourse, and the like. That narration explains the words of 17:101, and the commentators here do not place it on this verse. It shows the inventory is a matter of reported views. The honest reading keeps the number and leaves the list open.",
            "bn": "একটি সহীহ বর্ণনা কথাটির একদম আলাদা একটা মানে যোগ করে। তিরমিযী নিজে একে হাসান সহীহ বলে বর্ণনা করেন, দুই ইহুদি নবী ﷺ-কে নয়টি নিদর্শন সম্পর্কে জিজ্ঞেস করলে তিনি নয়টি আদেশ গুনে দেন, আল্লাহর সঙ্গে কিছু শরিক করো না, চুরি করো না, ব্যভিচার করো না, এমন আরও। এই বর্ণনা ১৭:১০১ আয়াতের কথা ব্যাখ্যা করে, আর এখানকার তাফসীরকারেরা একে এই আয়াতের সঙ্গে জোড়েন না। এতে বোঝা যায়, তালিকাটা বর্ণিত নানা মতের ব্যাপার। খাঁটি পাঠ সংখ্যাটা ধরে রাখে, তালিকাটা খোলা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Proof Meant to Overwhelm",
          "bn": "যে প্রমাণ অকাট্য"
        },
        "p": [
          {
            "en": "Ibn Kathir calls this hand a dalil bahir, a dazzling and overpowering proof of God's power to do whatever He wills, and a confirmation of the truth of him to whom the miracle is given. A proof, in that sense, is not merely an argument offered to the mind; it is a fact set before the eyes, something that simply happens and cannot be talked away. Read it beside the staff and the pattern is clear. God does not send Moses to Pharaoh with a claim and an argument alone. He equips him first, and the equipping is itself proof that speaks for itself.",
            "bn": "ইবনে কাসীর এই হাতকে বলেন দালীল বাহির, অর্থাৎ আল্লাহর কুদরতের এক চমকপ্রদ, অকাট্য প্রমাণ, আর যাকে মুজিজা দেওয়া হয়েছে তার সত্যতার সাক্ষ্য। এই অর্থে প্রমাণ কেবল মনের সামনে পেশ করা যুক্তি নয়, এ চোখের সামনে ঘটে যাওয়া বাস্তব, যা কথা দিয়ে উড়িয়ে দেওয়া যায় না। লাঠির পাশে রেখে পড়লে ছবিটা পরিষ্কার হয়ে ওঠে। আল্লাহ মূসাকে ফেরাউনের কাছে শুধু দাবি আর যুক্তি নিয়ে পাঠান না। আগে তাকে সাজিয়ে দেন, আর সেই সাজসজ্জাই এমন প্রমাণ যা নিজেই কথা বলে।"
          },
          {
            "en": "This is the quiet lesson of the verse. The messenger's task is enormous, so the proof is made enormous to match it. God's own description of these signs, as Ibn Kathir frames the story, is of mighty and dazzling signs and overwhelming proof, sent ahead of the confrontation. A proof of that weight leaves no honest excuse. Whatever answer a heart might give, it cannot honestly say that it was shown too little.",
            "bn": "এটাই আয়াতের চাপা শিক্ষা। রসূলের কাজটা বিশাল, তাই প্রমাণটাও তার মাপে বিশাল করে দেওয়া হয়। ইবনে কাসীর যেভাবে কাহিনিটা তোলেন, আল্লাহর নিজের বর্ণনায় এগুলো শক্তিশালী ও চমকপ্রদ নিদর্শন, অকাট্য প্রমাণ, মুখোমুখি হওয়ার আগেই পাঠানো। এত ভারী প্রমাণের পর সৎ কোনো অজুহাত আর টেকে না। অন্তর যা-ই জবাব দিক, সৎভাবে এ কথা বলতে পারে না যে তাকে যথেষ্ট দেখানো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to Face Power",
          "bn": "ক্ষমতার মুখোমুখি পাঠানো"
        },
        "p": [
          {
            "en": "ila firʿawna wa-qawmihi, to Pharaoh and his people. Al-Farra', as both at-Tabari and al-Qurtubi record, notes that the sentence has an implied verb the listener is trusted to supply: you are sent, you are dispatched, to Pharaoh and his people. The words lean on what the hearer already knows. At-Tabari illustrates the device with a line of old Arabic verse in which a word is dropped because the listener supplies it without any effort. The ellipsis is a mark of eloquence, not of haste. Arabic speech does this often, and the Qur'an leaves the gap open because no one could miss what fills it.",
            "bn": "ইলা ফিরআউনা ওয়া কাওমিহি, অর্থাৎ ফেরাউন ও তার সম্প্রদায়ের কাছে। ফাররা, তাবারী ও কুরতুবী দুজনেই যেমন উদ্ধৃত করেন, বলেন বাক্যে একটা ক্রিয়া উহ্য আছে, যা শ্রোতা নিজেই বুঝে নেবে, তুমি প্রেরিত, তুমি পাঠানো হয়েছ ফেরাউন ও তার সম্প্রদায়ের কাছে। কথাটা শ্রোতার জানা জিনিসের উপর ভর দেয়। তাবারী পুরনো এক আরবি কবিতার পঙ্‌ক্তি দিয়ে বিষয়টা দেখান, যেখানে একটা শব্দ ফেলে দেওয়া হয় কারণ শ্রোতা তা নিজে থেকেই পূরণ করে নেয়। এই উহ্যতা তাড়াহুড়া নয়, বরং বাগ্মিতার চিহ্ন। আরবি ভাষায় এমন হয় প্রায়ই, আর কুরআন ফাঁকটা খোলা রাখে কারণ এতে কী বসবে তা কারও চোখ এড়ায় না।"
          },
          {
            "en": "Stand back and see the scale. One man in a coarse woolen cloak is sent to the most powerful ruler of his age, and not to the ruler alone but to a whole people behind him. He carries no army and no court. He carries signs. The smallness of the messenger against the size of the errand is answered entirely by the size of what God has placed in his hand.",
            "bn": "একটু দূরে দাঁড়িয়ে মাপটা দেখুন। মোটা পশমি আলখাল্লা পরা একজন মানুষকে পাঠানো হচ্ছে যুগের সবচেয়ে ক্ষমতাধর শাসকের কাছে, শুধু শাসকের কাছে নয়, তার পেছনে থাকা গোটা জাতির কাছে। তার সঙ্গে কোনো সৈন্য নেই, কোনো দরবার নেই। সঙ্গে আছে শুধু নিদর্শন। কাজের বিশালতার তুলনায় দূতের ক্ষুদ্রতার জবাব পুরোটাই আসে আল্লাহ তার হাতে যা তুলে দিয়েছেন তার বিশালতা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Who Broke Faith",
          "bn": "যে জাতি হক ছাড়ল"
        },
        "p": [
          {
            "en": "The verse ends with a verdict: innahum kanu qawman fasiqin, they were a people defiantly disobedient. At-Tabari explains fasiqin here as kafirin, disbelievers in God, meaning Pharaoh and his people, the Copts. Al-Qurtubi reads it as those who had left the obedience of God. As-Sa'di unfolds it: they transgressed through their idolatry, their insolence, their lording it over God's servants, and their arrogance in the land without any right. The word itself names a going-out, a stepping outside the bounds of obedience, which is exactly how the tyrant behaves, setting his own will above every law he did not make and above every servant he could reach.",
            "bn": "আয়াত শেষ হয় এক রায় দিয়ে, ইন্নাহুম কানূ কাওমান ফাসিকীন, তারা ছিল নাফরমান এক সম্প্রদায়। তাবারী এখানে ফাসিকীন মানে বলেন কাফিরীন, অর্থাৎ আল্লাহর সঙ্গে কুফরিকারী, ফেরাউন আর তার কিবতি সম্প্রদায়। কুরতুবী পড়েন, যারা আল্লাহর আনুগত্য ছেড়ে বেরিয়ে গেছে। সাদী কথাটা খুলে বলেন, তারা সীমা ছাড়িয়েছিল তাদের শিরক দিয়ে, তাদের ঔদ্ধত্য দিয়ে, আল্লাহর বান্দাদের উপর মাতব্বরি করে, আর অন্যায়ভাবে জমিনে অহংকার করে। শব্দটা নিজেই মানে বেরিয়ে যাওয়া, আনুগত্যের সীমা থেকে বের হয়ে পড়া, আর স্বৈরশাসক ঠিক তাই করে, নিজের ইচ্ছাকে প্রতিটি আইনের উপরে বসিয়ে দেয়, হাতের নাগালে পাওয়া প্রতিটি বান্দার উপরেও।"
          },
          {
            "en": "This must be said as plainly as the matter of the white hand. The verse describes the people it describes, a named ruler and his court, in their own time, and it licenses nothing against any living person or community. Fasiq here is God's own judgement on a specific tyranny that He Himself named. It is not a word for anyone to pin on a neighbour, a rival, or a people they happen to dislike, and to borrow the verdict for that is to misuse it.",
            "bn": "শুভ্র হাতের ব্যাপারটার মতোই এ কথাটাও সোজাসুজি বলা দরকার। আয়াত সেই জাতির বর্ণনা দেয় যাদের কথা সে বলছে, নাম ধরে এক শাসক আর তার দরবার, তাদের নিজেদের যুগে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। এখানে ফাসিক শব্দটা আল্লাহর নিজের নাম ধরে দেওয়া এক নির্দিষ্ট জুলুমের উপর তাঁর রায়। এটা কারও প্রতিবেশী, প্রতিদ্বন্দ্বী বা অপছন্দের কোনো জাতির গায়ে সেঁটে দেওয়ার শব্দ নয়, আর সে কাজে রায়টা ধার করা মানে তার অপব্যবহার।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Sign Is Shown",
          "bn": "নিদর্শন সামনে এলে"
        },
        "p": [
          {
            "en": "Set the pieces together and the verse becomes a pattern, not just a scene. God chooses a man, equips him with signs that argue for themselves, names their nature so they cannot be twisted, and only then sends him to confront power. The equipping comes before the command. None of the commentators consulted attaches a particular hadith to this verse itself, so the weight of it rests on the signs the verse names.",
            "bn": "টুকরোগুলো একসঙ্গে রাখলে আয়াতটা শুধু একটা দৃশ্য থাকে না, হয়ে ওঠে একটা ধারা। আল্লাহ একজন মানুষকে বেছে নেন, এমন নিদর্শন দিয়ে সাজান যা নিজেরাই যুক্তি দেয়, সেগুলোর স্বরূপ বলে দেন যাতে বিকৃত করা না যায়, আর তারপরই তাকে ক্ষমতার মুখোমুখি হতে পাঠান। সাজানোটা আসে আদেশের আগে। এখানে যেসব তাফসীর দেখা হয়েছে, কেউই এই আয়াতের সঙ্গে আলাদা কোনো হাদিস জোড়েননি, তাই এর ভার আয়াতের নাম-করা নিদর্শনগুলোর উপরেই থাকে।"
          },
          {
            "en": "That leaves the reader with a plain and personal question. When a truth is set before you as clearly as a hand lit white in the dark, the test is no longer whether the proof is enough, for it was made to be enough. The test is honesty: whether you will follow what you have been shown, or spend your effort looking for a reason not to. The verse does not ask whether the proof was strong, for it was overwhelming by design; it asks what you will do once you can no longer pretend you did not see. The sign was given so that nothing honest could refuse it.",
            "bn": "এতে পাঠকের সামনে থাকে সোজা আর ব্যক্তিগত একটা প্রশ্ন। সত্য যখন আপনার সামনে অন্ধকারে জ্বলে ওঠা শুভ্র হাতের মতো পরিষ্কার হয়ে দাঁড়ায়, তখন প্রশ্নটা আর এই থাকে না যে প্রমাণ যথেষ্ট কিনা, কারণ সেটা তো যথেষ্ট করেই দেওয়া হয়েছে। প্রশ্নটা হয়ে যায় সততার, আপনি কি যা দেখানো হলো তা মানবেন, নাকি না মানার একটা কারণ খুঁজতে শক্তি খরচ করবেন। আয়াত জিজ্ঞেস করে না প্রমাণ জোরালো ছিল কিনা, কারণ তা ইচ্ছা করেই অকাট্য করা হয়েছিল। আয়াত শুধু জিজ্ঞেস করে, দেখে ফেলার পর আর না দেখার ভান করতে না পারলে আপনি কী করবেন। নিদর্শন এ কারণেই দেওয়া হয়েছিল, যাতে সৎ কিছু তা অস্বীকার করতে না পারে।"
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
  "27:24": {
    "sections": [
      {
        "h": {
          "en": "News From a Far Country",
          "bn": "দূর দেশ থেকে খবর"
        },
        "p": [
          {
            "en": "The hoopoe had been missing at the muster, and Sulayman (AS) had promised a reckoning. Then, Ibn Kathir notes, the bird was gone only a short while before it returned with a claim: I have grasped what you have not grasped, and I bring certain news from Sheba. Sheba, he adds, was Himyar, a kingdom in Yemen. A bird that owed its king an account opens not with an excuse but with intelligence its king lacked. The small creature has crossed a border and seen a whole civilisation at prayer.",
            "bn": "পাখিদের হাজিরার সময় হুদহুদকে পাওয়া যায়নি, আর সুলাইমান (আঃ) তাকে জবাবদিহির কথা বলেছিলেন। ইবন কাসীর বলেন, পাখিটা বেশিক্ষণ অনুপস্থিত থাকেনি, অল্প সময়েই ফিরে এসে বলল: আপনি যা জানেন না আমি তা জেনে এসেছি, সাবা থেকে নিশ্চিত খবর নিয়ে এসেছি। সাবা ছিল হিমইয়ার, ইয়েমেনের এক রাজ্য। যে পাখির উপর বাদশাহর কাছে জবাব দেওয়ার দায়, সে অজুহাত দিয়ে শুরু করল না, বরং এমন খবর দিল যা বাদশাহরই অজানা। ছোট্ট প্রাণীটা সীমানা পেরিয়ে গোটা এক সভ্যতাকে উপাসনায় রত দেখে এসেছে।"
          },
          {
            "en": "What it found, al-Hasan al-Basri says in Ibn Kathir's telling, was a woman ruling that people, given every advantage a monarch could want, seated on a tremendous throne of gold and jewels. The bird does not dwell on her wealth. In this verse it moves straight to what her wealth is bent toward. She and her nation, it reports, bow down to the sun in place of Allah. The richest court the hoopoe has ever seen is organised around the wrong direction of worship.",
            "bn": "সে যা দেখেছে, ইবন কাসীরের বর্ণনায় হাসান বসরী বলেন, তা হলো এক নারী ওই জাতির উপর রাজত্ব করছে, যাকে বাদশাহির সব সুবিধাই দেওয়া হয়েছে, আর সে বসে আছে সোনা-জহরতে গড়া বিশাল এক সিংহাসনে। পাখিটা তার ঐশ্বর্য নিয়ে পড়ে থাকে না। এই আয়াতে সে সোজা চলে যায় সেই প্রশ্নে, এত ঐশ্বর্য কোন দিকে ঝুঁকে আছে। সে জানায়, ওই নারী আর তার জাতি আল্লাহকে বাদ দিয়ে সূর্যকে সেজদা করছে। হুদহুদের দেখা সবচেয়ে সম্পদশালী দরবারটি গড়ে উঠেছে উপাসনার ভুল দিক ঘিরে।"
          },
          {
            "en": "The verse is the hoopoe's own speech, and it is unusually complete. It states what the people do, names who dressed it for them, and traces what that dressing did to them, all in a single breath: Satan adorned their deeds, so he barred them from the way, so they are not guided. Before Sulayman (AS) will act, before any letter is sent, the bird has laid out not only a sin but the mechanism by which a sin keeps its hold. The rest of this reflection follows that chain.",
            "bn": "আয়াতটি হুদহুদের নিজের মুখের কথা, আর তা অস্বাভাবিকভাবে পূর্ণাঙ্গ। এক নিঃশ্বাসে সে বলে দেয় তিনটি জিনিস: লোকেরা কী করছে, কে তাদের জন্য সেটা সাজিয়ে দিয়েছে, আর সেই সাজানো তাদের কী করেছে। শয়তান তাদের আমল শোভন করে দিয়েছে, তাই সে তাদের পথ থেকে আটকে দিয়েছে, তাই তারা পথ পায় না। সুলাইমান (আঃ) কিছু করার আগে, কোনো চিঠি পাঠানোর আগেই পাখিটা শুধু একটা গুনাহ নয়, গুনাহ যে কৌশলে মানুষকে ধরে রাখে সেটাও খুলে দিয়েছে। এই ভাবনার বাকিটা সেই শিকল ধরেই এগোবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Nation Facing the Sun",
          "bn": "সূর্যের দিকে ফেরা এক জাতি"
        },
        "p": [
          {
            "en": "At-Tabari reads the opening plainly: the hoopoe found this woman, the queen of Sheba, and her people of Sheba, prostrating to the sun, worshipping it in place of Allah. Ibn Kathir passes on what the historians described of their setting. The queen's palace was pierced with windows along the east wall and the west, built so that the sun would enter at its rising and depart at its setting, and the people would prostrate to it morning and evening. The architecture itself had been turned into an instrument of the error.",
            "bn": "তাবারী শুরুর কথাটা সোজাভাবে পড়েন: হুদহুদ এই নারীকে, অর্থাৎ সাবার রানিকে, আর তার জাতিকে দেখল আল্লাহকে বাদ দিয়ে সূর্যকে সেজদা করতে, সূর্যেরই ইবাদত করতে। তাদের পরিবেশ নিয়ে ঐতিহাসিকেরা যা বলেছেন, ইবন কাসীর তা তুলে ধরেন। রানির প্রাসাদের পুব আর পশ্চিম দেয়ালে এমনভাবে জানালা কাটা ছিল যে সূর্য উঠত এক দিক দিয়ে ঢুকে, আর ডুবত অন্য দিক দিয়ে বেরিয়ে, আর লোকেরা সকাল-সন্ধ্যায় তাকে সেজদা করত। স্থাপত্যটাকেই বানানো হয়েছিল ভুলের যন্ত্র করে।"
          },
          {
            "en": "The commentators do not agree on the exact creed. Al-Qurtubi relays that it was said they worshipped the sun because, as narrated, they were heretics, and that it was also said they were Magians who worshipped the lights. Ma'arif al-Qur'an records that they were star-worshippers, and that some held them to be Zoroastrians who revere fire and every form of light. The reports differ on the label; they agree on the direction. A created, blazing thing had been given the place that belongs to its Creator alone.",
            "bn": "ঠিক কোন ধর্ম, তা নিয়ে তাফসীরকারেরা একমত নন। কুরতুবী বলেন, বলা হয় তারা সূর্যের উপাসক ছিল কারণ বর্ণনামতে তারা ছিল যিনদিক, আবার এও বলা হয় তারা ছিল মাজুসি, যারা আলোর পূজা করে। মাআরিফুল কুরআন লেখে, তারা ছিল তারকা-উপাসক, আর কারও মতে তারা ছিল অগ্নি ও সব ধরনের আলোর পূজারি অগ্নিপূজক। বিবরণগুলো নামে আলাদা, কিন্তু দিকের ব্যাপারে এক। সৃষ্ট এক জ্বলন্ত বস্তুকে সেই আসন দেওয়া হয়েছিল যা কেবল তার স্রষ্টার।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Deed Was Dressed",
          "bn": "আমল যেভাবে সাজানো হলো"
        },
        "p": [
          {
            "en": "The spine of the verse is a single verb: wa-zayyana lahum ash-shaytan a'malahum, and Satan adorned their deeds for them. At-Tabari unpacks it with two words of his own. Iblis beautified their worship of the sun and their prostration to it in place of Allah, and he made it beloved to them. Beautified, and made beloved: the work is done not against their will but through their liking. The enemy did not drag them to the sun. He made the sun look worth facing.",
            "bn": "আয়াতের মেরুদণ্ড একটি ক্রিয়া: ওয়া যায়্যানা লাহুমুশ শায়ত্বানু আমালাহুম, আর শয়তান তাদের জন্য তাদের আমল সাজিয়ে দিয়েছে। তাবারী নিজের দুটি শব্দ দিয়ে এটা খোলেন। ইবলিস তাদের কাছে সূর্যের উপাসনা আর আল্লাহকে বাদ দিয়ে তাকে সেজদা করাটা সুন্দর করে দিয়েছে, আর সেটা তাদের কাছে প্রিয় করে তুলেছে। সুন্দর করা, আবার প্রিয় করা: কাজটা তাদের ইচ্ছার বিরুদ্ধে নয়, বরং তাদের পছন্দের ভেতর দিয়েই হয়েছে। শত্রু তাদের টেনে সূর্যের কাছে নেয়নি। সে সূর্যকেই মুখ ফেরানোর যোগ্য করে দেখিয়েছে।"
          },
          {
            "en": "Notice what Satan did not do. Al-Muyassar says plainly that he beautified for them the evil deeds they were doing. He did not relabel their worship as good while they knew it to be evil; he changed how the evil itself appeared, so the same act now wore a pleasing face. This is the quiet method the verse exposes. Falsehood is rarely sold as falsehood. It is dressed, lit well, and set at the angle where it looks like devotion.",
            "bn": "খেয়াল করুন, শয়তান কী করেনি। মুয়াসসার সাফ বলে, সে তাদের জন্য তাদের করা মন্দ আমলগুলোকে সুন্দর করে দিয়েছে। তারা জেনেশুনে মন্দ করছে এমন অবস্থায় সে উপাসনাকে ভালো বলে চালায়নি, বরং মন্দটা দেখতে কেমন, সেটাই বদলে দিয়েছে, যাতে একই কাজ এবার মনোরম চেহারা পরে। আয়াত এই নীরব কৌশলটাই ধরিয়ে দেয়। মিথ্যাকে খুব কমই মিথ্যা বলে বেচা হয়। তাকে সাজানো হয়, ভালো আলোয় রাখা হয়, আর এমন কোণে বসানো হয় যেখানে তাকে ইবাদত বলে মনে হয়।"
          },
          {
            "en": "That is why the trap is so hard to see from inside it. A person who knows he is sinning still has a thread to pull; his conscience has not gone silent. But when the deed has been adorned, the alarm that should sound has been switched off at the source. The people of Sheba were not wringing their hands over a guilt they could feel. They were content, even devout, bowing to a thing that could neither hear them nor see them.",
            "bn": "এ কারণেই ফাঁদটা ভেতর থেকে চেনা এত কঠিন। যে জানে সে গুনাহ করছে, তার হাতে অন্তত একটা সুতো থাকে টেনে ধরার, তার বিবেক তখনো চুপ হয়ে যায়নি। কিন্তু আমল যখন সাজানো হয়ে যায়, যে সতর্কঘণ্টা বাজার কথা, তা গোড়াতেই বন্ধ করে দেওয়া হয়। সাবার লোকেরা কোনো অনুভব করা অপরাধবোধে হাত কচলাচ্ছিল না। তারা বরং তৃপ্ত, এমনকি ভক্তিভরে, এমন এক বস্তুকে সেজদা করছিল যা তাদের শুনতেও পায় না, দেখতেও পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Beauty Becomes a Barrier",
          "bn": "সৌন্দর্য যখন বাধা হয়"
        },
        "p": [
          {
            "en": "The verse does not leave the adorning as a private feeling. It draws a consequence: fa-saddahum ani s-sabil, so he barred them from the way. At-Tabari makes the link explicit. By that very adorning, Satan prevented them from following the straight road, which is the religion of Allah that He sent His prophets to carry. The beauty was not decoration laid beside the road; it was the thing standing across it. What made the sin attractive is precisely what kept the truth out.",
            "bn": "আয়াত সাজানোটাকে নিছক মনের ভেতরের ব্যাপার করে ছেড়ে দেয় না। সে একটা পরিণতি টানে: ফাসাদ্দাহুম আনিস সাবীল, তাই সে তাদের পথ থেকে আটকে দিয়েছে। তাবারী সংযোগটা স্পষ্ট করেন। ঠিক সেই সাজানোর মাধ্যমেই শয়তান তাদের সোজা পথে চলা থেকে ঠেকিয়েছে, যে পথ হলো আল্লাহর সেই দ্বীন, নবীদের দিয়ে যা তিনি পাঠিয়েছেন। সৌন্দর্য পথের পাশে রাখা সাজসজ্জা ছিল না, সেটাই ছিল পথ আটকে দাঁড়ানো জিনিস। গুনাহকে যা আকর্ষণীয় করেছিল, সেটাই সত্যকে বাইরে আটকে রেখেছিল।"
          },
          {
            "en": "And which way is it? Al-Qurtubi answers: the way of tawhid, the oneness of God, and he draws a sharp conclusion from it. By this, he says, Allah made clear that whatever is not the path of tawhid is not, in truth, a path that benefits at all. Ibn Kathir reads sabil the same way, as the way of truth. A road that does not lead to the Creator is not a slower road to Him. In the verse's logic it is no road home.",
            "bn": "আর কোন পথ সেটা? কুরতুবী জবাব দেন: তাওহীদের পথ, আল্লাহর একত্বের পথ। এ থেকে তিনি একটা ধারালো সিদ্ধান্তে পৌঁছান। তিনি বলেন, এর মাধ্যমে আল্লাহ বুঝিয়ে দিলেন, তাওহীদের পথ ছাড়া অন্য যা কিছু, তা সত্যিকার অর্থে কোনো কাজে আসা পথই নয়। ইবন কাসীরও সাবীলকে একইভাবে পড়েন, সত্যের পথ হিসেবে। যে পথ স্রষ্টার কাছে পৌঁছায় না, তা তাঁর দিকে যাওয়ার ধীর কোনো পথ নয়। আয়াতের যুক্তিতে সেটা ঘরে ফেরার পথই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Mistaking the Wrong for Truth",
          "bn": "ভুলকে সত্য ভেবে বসা"
        },
        "p": [
          {
            "en": "As-Sa'di reaches the heart of it in a single line. These people, he says, are idolaters who worship the sun; and when Satan adorned their deeds, the result was that they saw what they were upon as the truth. That is the hinge of the whole verse. The problem is no longer that they are doing wrong. It is that the wrong has been so dressed that it now reads to them as right, and a person defends what he believes is right with a clear conscience.",
            "bn": "সাদী এক বাক্যেই আসল জায়গায় হাত রাখেন। এই লোকেরা, তিনি বলেন, মুশরিক, সূর্যের উপাসক; আর শয়তান যখন তাদের আমল সাজিয়ে দিল, ফল হলো এই যে তারা নিজেরা যার উপর আছে তাকেই সত্য বলে দেখল। এটাই গোটা আয়াতের মোড়। সমস্যা আর এই নয় যে তারা অন্যায় করছে। সমস্যা হলো অন্যায়টা এমনভাবে সাজানো যে এখন তা তাদের কাছে সঠিক বলে ঠেকছে, আর মানুষ যা সঠিক মনে করে তা সে পরিষ্কার বিবেকে আঁকড়ে রাখে।"
          },
          {
            "en": "From this as-Sa'di draws the verse's hardest sentence. They are not guided, he explains, because whoever sees that what he is upon is the truth holds no prospect of guidance until his very belief changes. Guidance here is not blocked by stubbornness about a known fault. It is blocked by sincerity aimed in the wrong direction. You cannot correct a man's course by pointing out his error when he has been persuaded his error is the destination.",
            "bn": "এখান থেকেই সাদী আয়াতের সবচেয়ে কঠিন কথাটা বের করেন। তিনি বলেন, তারা পথ পায় না কারণ যে নিজের অবস্থানকেই সত্য ভাবে, তার বিশ্বাস না বদলানো পর্যন্ত তার হেদায়েতের কোনো আশা নেই। এখানে হেদায়েত কোনো জানা দোষ নিয়ে একগুঁয়েমির কারণে আটকায় না। আটকায় ভুল দিকে তাক করা আন্তরিকতার কারণে। যাকে বোঝানো হয়েছে তার ভুলটাই তার গন্তব্য, তাকে ভুল ধরিয়ে দিয়ে পথ শোধরানো যায় না।"
          },
          {
            "en": "At-Tabari describes the same closed loop from another side. Because Satan had adorned the sun-prostration and the disbelief for them, he writes, they do not find the way of truth and do not walk it; instead they keep wavering inside their misguidance. The adornment does not only stop them leaving. It keeps them circling, mistaking motion for progress. A heart that has lost the ability to name its own fault cannot repent of what it no longer counts as a fault.",
            "bn": "তাবারী একই বদ্ধ চক্রটা আরেক দিক থেকে আঁকেন। তিনি লেখেন, শয়তান যেহেতু তাদের কাছে সূর্যকে সেজদা করা আর কুফরকে সাজিয়ে দিয়েছিল, তাই তারা সত্যের পথ খুঁজে পায় না, সে পথে চলেও না, বরং নিজেদের ভ্রষ্টতার ভেতরেই ঘুরপাক খেতে থাকে। সাজানোটা শুধু বেরিয়ে যাওয়া ঠেকায় না। সেটা তাদের চক্কর কাটায়, নড়াচড়াকেই এগিয়ে যাওয়া ভাবায়। যে মন নিজের দোষের নাম আর বলতে পারে না, সে যাকে দোষ বলেই গোনে না, তা থেকে তওবা করবে কী করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bird That Named Shirk",
          "bn": "যে পাখি শিরক চিনল"
        },
        "p": [
          {
            "en": "There is a quiet rebuke in who carries this report. A nation with a throne of gold cannot tell that the sun is only a lamp, yet a small bird knows at a glance that prostration belongs to Allah alone. Ibn Kathir connects the verse to another: among His signs are the night and the day, the sun and the moon; do not prostrate to the sun or the moon, but prostrate to Allah who created them, if it is truly Him you worship (41:37). The hoopoe had grasped what a kingdom had missed.",
            "bn": "এই খবর কে বয়ে আনল, তাতেই একটা চুপচাপ ভর্ৎসনা আছে। সোনার সিংহাসনওয়ালা এক জাতি বুঝতে পারে না যে সূর্য নিছক একটা প্রদীপ, অথচ এক ছোট্ট পাখি এক নজরেই জানে সেজদা কেবল আল্লাহরই প্রাপ্য। ইবন কাসীর আয়াতটিকে আরেক আয়াতের সঙ্গে মেলান: তাঁর নিদর্শনের মধ্যে আছে রাত ও দিন, সূর্য ও চাঁদ; সূর্য বা চাঁদকে সেজদা কোরো না, বরং সেজদা করো সেই আল্লাহকে যিনি এগুলো সৃষ্টি করেছেন, যদি সত্যিই তাঁরই ইবাদত করে থাকো (৪১:৩৭)। গোটা এক রাজ্য যা ধরতে পারেনি, হুদহুদ তা ধরে ফেলেছে।"
          },
          {
            "en": "Ibn Kathir adds that because the hoopoe was calling to what is good, to the worship of Allah alone, it would have been wrong to kill it. He cites a narration recorded by Abu Dawud (no. 5267), from Ibn Abbas, that the Prophet (ﷺ) forbade the killing of four creatures: ants, bees, hoopoes, and sparrow-hawks. The bird the king had threatened to slaughter turns out to be, in the law that came later, protected. Its instinct for the truth earned the small creature a dignity the verse quietly honours.",
            "bn": "ইবন কাসীর যোগ করেন, হুদহুদ যেহেতু ভালোর দিকে ডাকছিল, কেবল আল্লাহর ইবাদতের দিকে, তাই তাকে মেরে ফেলা ঠিক হতো না। তিনি আবু দাউদে (নং ৫২৬৭) ইবন আব্বাস থেকে বর্ণিত একটি হাদিস আনেন, নবী ﷺ চারটি প্রাণী মারতে নিষেধ করেছেন: পিঁপড়া, মৌমাছি, হুদহুদ আর শিকরে বাজ। যে পাখিকে বাদশাহ জবাই করার হুমকি দিয়েছিলেন, পরে আসা বিধানে সেই পাখিই সুরক্ষিত। সত্যের প্রতি তার সহজাত টানই ছোট্ট প্রাণীটিকে এমন মর্যাদা এনে দিল, যা আয়াত নীরবে সম্মান জানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Verse Does Not Allow",
          "bn": "এ আয়াত যা অনুমোদন করে না"
        },
        "p": [
          {
            "en": "This must be said plainly, in both languages. The verse describes what the hoopoe saw: a particular people, at a particular time, prostrating to the sun, and the heart-mechanism by which Satan held them there. It condemns the shirk, the worship of a creature in place of the Creator. It does not license contempt for any living person or community, and nothing in it may be turned into a weapon against a neighbour, a nation, or a faith tradition today. The verse indicts an act and its hidden engine, not a people as such.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াত বর্ণনা করে হুদহুদ যা দেখেছে: এক নির্দিষ্ট জাতি, এক নির্দিষ্ট সময়ে, সূর্যকে সেজদা করছে, আর শয়তান কোন অন্তরের কৌশলে তাদের সেখানে ধরে রেখেছে। আয়াত নিন্দা করে শিরকের, স্রষ্টাকে বাদ দিয়ে সৃষ্টির উপাসনার। এটি আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর প্রতি অবজ্ঞার অনুমতি দেয় না, আর এর কোনো কিছুকেই কোনো প্রতিবেশী, জাতি বা ধর্মের বিরুদ্ধে অস্ত্র বানানো যায় না। আয়াত একটি কাজ আর তার গোপন চালিকাশক্তিকে দোষ দেয়, গোটা একটা জাতিকে নয়।"
          },
          {
            "en": "The story itself guards against that misuse. This same people of Sheba does not stay where the hoopoe found them; the surah goes on to their queen's own turning, and the door the verse seems to shut is not sealed. Misguidance here is a present state that Satan's adorning produced, not a sentence pronounced on a race. As-Sa'di's note cuts both ways: guidance waits on a change of belief, and belief can change. The verse names a condition precisely so that it can be left behind.",
            "bn": "কাহিনিটা নিজেই এই অপব্যবহার থেকে বাঁচায়। সাবার এই জাতি হুদহুদ যেখানে তাদের পেল সেখানেই থেমে থাকে না; সূরা এগিয়ে যায় তাদের রানির নিজের ফিরে আসার দিকে, আর আয়াত যে দরজা বন্ধ করছে বলে মনে হয়, তা আঁটকে দেওয়া নয়। এখানে পথভ্রষ্টতা শয়তানের সাজানোয় তৈরি একটা বর্তমান অবস্থা, কোনো জাতির উপর ঘোষিত রায় নয়। সাদীর কথাটা দুই দিকেই কাটে: হেদায়েত বিশ্বাস বদলের অপেক্ষায় থাকে, আর বিশ্বাস বদলাতে পারে। আয়াত অবস্থাটা ঠিক এজন্যই চিনিয়ে দেয়, যাতে তা পেছনে ফেলে আসা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mirror of a Dressed Fault",
          "bn": "সাজানো দোষের আয়না"
        },
        "p": [
          {
            "en": "Turned toward ourselves, the verse stops being about sun-worshippers far away. Few of us bow to a star. But all of us are capable of the thing underneath it: letting a fault be dressed until it reads as a virtue. The temper we call honesty, the hoarding we call prudence, the neglect we call being busy, the pride we call having standards. Satan's oldest craft is not to make us love what we know is wrong. It is to retitle the wrong so the conscience files it under right.",
            "bn": "নিজেদের দিকে ফেরালে আয়াতটা আর দূরের সূর্য-উপাসকদের কথা থাকে না। আমাদের খুব কম জনই কোনো তারাকে সেজদা করি। কিন্তু এর তলার জিনিসটা আমরা সবাই করতে পারি: একটা দোষকে সাজিয়ে নেওয়া যতক্ষণ না তা গুণ বলে ঠেকে। যে মেজাজকে বলি সততা, যে কুক্ষিগত করাকে বলি হিসেবি হওয়া, যে অবহেলাকে বলি ব্যস্ততা, যে অহংকারকে বলি মান রাখা। শয়তানের সবচেয়ে পুরনো কৌশল আমাদের জানা অন্যায়কে ভালোবাসানো নয়। বরং অন্যায়ের নাম বদলে দেওয়া, যাতে বিবেক তাকে ঠিকের ঘরে তুলে রাখে।"
          },
          {
            "en": "The escape is the very thing adornment works to prevent: an honest second look. Ask what a fair outsider would call the habit I have given a flattering name, and whether I have waved away the people who tried to tell me. The people of Sheba were devout and content and entirely lost. May Allah keep us from the comfort of a sin we have stopped being able to see, and return us to the way that leads to Him alone.",
            "bn": "মুক্তির পথ ঠিক সেই জিনিস, সাজানো যা আটকাতে চায়: একটা সৎ দ্বিতীয় দৃষ্টি। নিজেকে জিজ্ঞেস করুন, যে অভ্যাসকে আমি সুন্দর নাম দিয়েছি, নিরপেক্ষ কেউ তাকে কী বলত, আর যারা আমাকে সত্যটা বলতে চেয়েছিল তাদের আমি উড়িয়ে দিইনি তো। সাবার লোকেরা ভক্ত ছিল, তৃপ্ত ছিল, আর পুরোপুরি পথহারা ছিল। আল্লাহ আমাদের এমন গুনাহের স্বস্তি থেকে রক্ষা করুন যা আমরা আর দেখতে পাই না, আর ফিরিয়ে আনুন সেই পথে যা কেবল তাঁরই দিকে নিয়ে যায়।"
          }
        ]
      }
    ]
  },
  "27:34": {
    "sections": [
      {
        "h": {
          "en": "A Queen Answers Her Chiefs",
          "bn": "সভাসদদের জবাবে রানী"
        },
        "p": [
          {
            "en": "In 27:33 the chiefs of Sheba answer their queen bluntly: we are men of strength and great might, but the command is yours, so see what you will command. They are offering her war. At-Tabari reads her reply in 27:34 against exactly that offer. She spoke, he says, to the leading men of her people after they had presented themselves to fight Sulayman if she gave the word. Al-Baghawi frames her words the same way, as an answer to their readiness for battle. She does not take what they offer.",
            "bn": "২৭:৩৩ আয়াতে সাবার সভাসদরা তাদের রানীকে সাফ জানিয়ে দেয়, আমরা শক্তিশালী আর কঠোর যোদ্ধা, তবে সিদ্ধান্ত আপনারই, দেখুন আপনি কী হুকুম দেন। তারা আসলে যুদ্ধেরই প্রস্তাব দিচ্ছে। তাবারী ২৭:৩৪ আয়াতে তার জবাবকে ঠিক এই প্রস্তাবের মুখেই পড়েন। তিনি বলেন, রানী এ কথা বলেছিল তার জাতির প্রধানদের উদ্দেশে, যখন তারা নিজেরাই এগিয়ে এসেছিল, সে হুকুম দিলেই সুলাইমানের বিরুদ্ধে লড়বে বলে। বাগভীও তার কথাকে একইভাবে দেখেন, লড়াইয়ের জন্য তাদের ওই প্রস্তুতির জবাব হিসেবে। সে তাদের প্রস্তাবে রাজি হয় না।"
          },
          {
            "en": "Al-Qurtubi notices what her chiefs have just done. For all the strength and ferocity they displayed, they handed the decision back to her, and she alone will weigh it. In her speech al-Qurtubi hears three things at once: fear for her people, caution, and a reckoning with how grave Sulayman's affair truly is. She is not posturing. She is a ruler measuring a threat she may not be able to meet, and refusing to let her soldiers' confidence make the choice for her. Al-Qurtubi's point is that her words are weighed, not panicked; she respects the gravity of the matter enough to slow down and think.",
            "bn": "কুরতুবী খেয়াল করেন তার সভাসদরা এইমাত্র কী করল। এত শক্তি আর হিংস্রতা দেখিয়েও তারা সিদ্ধান্তটা তার হাতেই ফিরিয়ে দিল, আর সে একাই তা ওজন করবে। তার কথায় কুরতুবী একসঙ্গে তিনটি জিনিস শোনেন, জাতির জন্য ভয়, সতর্কতা, আর সুলাইমানের ব্যাপারটা কতটা গুরুতর তার হিসাব। সে ভান করছে না। সে এমন এক শাসক যে এমন হুমকি মাপছে, যা সামলানোর সাধ্য হয়তো তার নেই, আর নিজের সেনাদের আত্মবিশ্বাসকে সে সিদ্ধান্ত নিতে দিচ্ছে না। কুরতুবীর বক্তব্য এটাই, তার কথা মাপা, ভীত নয়, ব্যাপারটার গুরুত্বকে সে এতটা মানে যে একটু থেমে ভেবে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When Kings Enter a City",
          "bn": "রাজারা জনপদে ঢুকলে"
        },
        "p": [
          {
            "en": "Her sentence opens with a law of conquest. Kings, when they enter a city, ruin it. At-Tabari glosses the entering as coming anwatan wa-ghalaba, by force and by overpowering, and the ruin as plain wreckage: afsaduha means kharrabuha, they lay the place waste. He cites Ibn Abbas for the same reading, that to enter a town by force is to destroy it. Al-Baghawi and the Muyassar both keep that word anwa in view, so the picture is not a king arriving in peace but an army breaking in.",
            "bn": "তার বাক্যের শুরুতেই আছে বিজয়ের এক নিয়ম। রাজারা যখন কোনো জনপদে ঢোকে, সেটিকে ধ্বংস করে ছাড়ে। তাবারী এই ঢোকাকে ব্যাখ্যা করেন আনওয়াতান ওয়া গালাবা বলে, অর্থাৎ জোর করে ও পরাভূত করে ঢোকা, আর ধ্বংসকে বলেন সোজা বিনাশ, আফসাদূহা মানে খাররাবূহা, তারা জনপদটিকে চুরমার করে দেয়। তিনি একই অর্থে ইবন আব্বাসের বরাত দেন, কোনো জনপদে জোর করে ঢোকা মানেই তাকে ধ্বংস করা। বাগভী আর মুয়াসসার দুজনেই ওই আনওয়া শব্দটিকে সামনে রাখেন, তাই ছবিটা শান্তিতে আসা কোনো রাজার নয়, বরং জোর করে ভেতরে ঢুকে পড়া এক বাহিনীর।"
          },
          {
            "en": "The Muyassar reads a purpose into the pattern. This, it says, is the settled, unbroken habit of kings, done so that people will fear them. As-Sadi fills in what the ruin looks like on the ground: killing, taking captives, plundering wealth, and tearing down homes. None of this is rhetoric from a frightened woman. It is an accurate forecast of what a victorious army did to a conquered city in her world, set out so her council can see the price of the fight they are urging. She is not describing a distant horror but the ordinary arithmetic of conquest her advisers know as well as she does.",
            "bn": "মুয়াসসার এই ধরনটার পেছনে একটা উদ্দেশ্যও পড়ে নেন। এটা, সে বলে, রাজাদের বাঁধা ও অটুট অভ্যাস, মানুষ যেন তাদের ভয় পায় সেজন্যই তারা এমন করে। সা'দী খুলে বলেন মাটিতে এই ধ্বংস দেখতে কেমন, হত্যা, বন্দি করা, সম্পদ লুট, আর ঘরবাড়ি গুঁড়িয়ে দেওয়া। এর কিছুই কোনো ভীত নারীর বাগাড়ম্বর নয়। তার দুনিয়ায় বিজয়ী বাহিনী পরাজিত জনপদের সঙ্গে যা করত, এ তারই নিখুঁত পূর্বাভাস, যেন তার সভা দেখে নিতে পারে তারা যে লড়াইয়ের জন্য চাপ দিচ্ছে তার দাম কত। সে কোনো দূরের ভয়ংকর ছবি আঁকছে না, এ তো বিজয়ের সেই চেনা হিসাব, যা তার উপদেষ্টারাও তার মতোই জানে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Honoured Brought Low",
          "bn": "সম্মানিতরা হয় অপমানিত"
        },
        "p": [
          {
            "en": "The second half of the verse names the human cost: and they render the honoured of its people humbled. At-Tabari explains this as enslaving the free, taking free people and making them slaves. Ibn Kathir is sharper still: the conquerors single out the rulers and soldiers who held the town and humiliate them utterly, whether by killing them or by dragging them off as captives. The dignity that had stood highest is the dignity deliberately broken. The target is chosen with care: not the common people first, but the chiefs, the officers, the men whose standing could rally a resistance. Break them, and the rest fall quiet.",
            "bn": "আয়াতের দ্বিতীয় অংশে মানুষের দিক থেকে দামটা বলা হয়, আর তারা সেখানকার সম্মানিতদের করে ছাড়ে অপমানিত। তাবারী একে ব্যাখ্যা করেন স্বাধীন মানুষদের দাস বানানো হিসেবে, মুক্ত মানুষগুলোকে ধরে এনে গোলাম করা। ইবন কাসীর আরও কড়া ভাষায় বলেন, বিজয়ীরা বেছে বেছে ধরে সেই শাসক আর যোদ্ধাদের, যারা জনপদটাকে ধরে রেখেছিল, আর তাদের চূড়ান্ত অপমান করে, হয় মেরে ফেলে, নয়তো বন্দি করে টেনে নিয়ে যায়। যে মর্যাদা ছিল সবার উপরে, ইচ্ছা করেই সেই মর্যাদাকে ভেঙে দেওয়া হয়। লক্ষ্যটা বেছে নেওয়া হয় ভেবেচিন্তে, সাধারণ মানুষ আগে নয়, বরং প্রধানেরা, কর্মকর্তারা, যাদের মর্যাদা প্রতিরোধ গড়ে তুলতে পারত। তাদের ভেঙে দাও, বাকিরা চুপ হয়ে যায়।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi add the motive behind the cruelty. The nobles and the great men are humbled, they say, so that the affair will fall into order for the conquerors, and none are left with the standing to resist them. As-Sadi puts the same point another way: the chiefs and lords, the honoured of a people, are made the lowest among them. Bilqis is telling her council that a lost war does not only cost lives; it unmakes the whole rank of a society. Those who might have led a recovery are silenced first, so that defeat becomes not a single lost battle but the collapse of a people's standing.",
            "bn": "কুরতুবী আর বাগভী এই নিষ্ঠুরতার পেছনের উদ্দেশ্যটাও যোগ করেন। সম্ভ্রান্ত আর বড় মানুষদের অপমানিত করা হয়, তারা বলেন, যাতে বিজয়ীদের জন্য গোটা ব্যবস্থাটা সোজা হয়ে যায়, আর বাধা দেওয়ার মতো মর্যাদা কারও হাতে না থাকে। সা'দী একই কথা বলেন অন্যভাবে, জাতির নেতা আর প্রধানেরা, যারা ছিল সম্মানিত, তাদেরই বানানো হয় সবচেয়ে নিচু। বিলকীস তার সভাকে বলছে, হেরে যাওয়া যুদ্ধ কেবল প্রাণ কাড়ে না, একটা সমাজের গোটা মর্যাদার স্তরটাই ভেঙে দেয়। যারা ঘুরে দাঁড়ানোর নেতৃত্ব দিতে পারত, তাদেরই সবার আগে স্তব্ধ করা হয়, যাতে পরাজয় কেবল একটা হেরে যাওয়া লড়াই না থেকে গোটা জাতির মর্যাদার ধস হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Says Thus",
          "bn": "শেষ কথা কার মুখে"
        },
        "p": [
          {
            "en": "The verse closes with wa-kadhalika yafalun, and thus do they do, and the commentators split over whose voice that is. On the first reading it is still Bilqis speaking, rounding off her own point. Al-Qurtubi reports this view and names Ibn Shajara for it: the whole sentence is hers, and its sense is that Sulayman too will do this if he enters our land. On this reading the closing words are her warning driven home, not a new speaker at all. Ibn Shajara fixes the stop after the closing words, so the warning and its echo both belong to the queen, pressing her chiefs to weigh the danger.",
            "bn": "আয়াত শেষ হয় ওয়া কাযালিকা ইয়াফআলূন দিয়ে, আর এরাও তাই করে, আর এই কণ্ঠ কার, তা নিয়ে তাফসীরকারেরা দুই ভাগে ভাগ হয়ে যান। প্রথম পাঠে এটা তখনো বিলকীসেরই কথা, নিজের বক্তব্যটা সে গুছিয়ে শেষ করছে। কুরতুবী এই মত তুলে ধরেন আর এর জন্য ইবন শাজারার নাম নেন, গোটা বাক্যটাই রানীর, আর এর মানে সুলাইমানও তাই করবে যদি সে আমাদের দেশে ঢোকে। এই পাঠে শেষ কথাগুলো তার সতর্কবাণীরই জোরালো সমাপ্তি, নতুন কোনো বক্তা নয়। ইবন শাজারা থামার জায়গা রাখেন একেবারে শেষ কথাগুলোর পরে, যাতে সতর্কবাণী আর তার প্রতিধ্বনি দুটোই রানীর হয়, যা তার সভাসদদের সামনের বিপদ ভেবে দেখতে চাপ দেয়।"
          },
          {
            "en": "On the second reading her report ends a beat earlier, at the honoured people humbled, and the closing words are God's own confirmation of what she said. At-Tabari takes this line: the account from the woman of Sheba stops there, and then God says, and thus do they do, meaning kings do just as she described. Al-Baghawi says simply that God confirmed her words. Ibn Kathir records from Ibn Abbas that Bilqis said her part, and then the Lord said, and thus do they do.",
            "bn": "দ্বিতীয় পাঠে তার বর্ণনা শেষ হয় একটু আগেই, সম্মানিত মানুষদের অপমানিত করার কথায়, আর শেষ কথাগুলো তখন আল্লাহর নিজের সত্যায়ন, রানী যা বলেছে তারই সমর্থন। তাবারী এই পথ ধরেন, সাবার নারীর বর্ণনা সেখানেই থামে, তারপর আল্লাহ বলেন, আর এরাও তাই করে, অর্থাৎ রাজারা ঠিক তেমনটাই করে যেমন সে বলেছে। বাগভী সহজ করে বলেন, আল্লাহ তার কথাকে সত্য বলে মেনে নিয়েছেন। ইবন কাসীর ইবন আব্বাস থেকে আনেন যে বিলকীস তার অংশটুকু বলল, তারপর রব বললেন, আর এরাও তাই করে।"
          },
          {
            "en": "Al-Qurtubi strengthens the second reading with a point about the pause. Ibn al-Anbari holds that the honoured made humbled is a complete stop, after which God speaks to confirm her. He likens it to Surah al-Araf, where Pharaoh's chiefs finish accusing Musa and then a new speaker, Pharaoh himself, asks what they command in 7:110. Ibn Abbas, also in al-Qurtubi, reads the divine words as teaching the Prophet ﷺ and his community this truth about kings. This article names these readings and settles between them nowhere; each rests on careful attention to the text.",
            "bn": "কুরতুবী দ্বিতীয় পাঠটিকে আরও জোর দেন থামার জায়গা নিয়ে একটি কথা দিয়ে। ইবন আনবারী মনে করেন, সম্মানিতদের অপমানিত করার কথায় বাক্যটি পুরোপুরি শেষ, এরপর আল্লাহ কথা বলেন রানীর কথাকে সত্যায়ন করতে। তিনি এর সঙ্গে মিল টানেন সূরা আরাফের, যেখানে ফিরআউনের সভাসদরা মূসার বিরুদ্ধে অভিযোগ শেষ করে, তারপর নতুন এক বক্তা, খোদ ফিরআউন, ৭:১১০ আয়াতে জিজ্ঞেস করে তারা কী পরামর্শ দেয়। ইবন আব্বাস, তিনিও কুরতুবীর বরাতে, এই ঐশী কথাকে পড়েন নবী ﷺ ও তাঁর উম্মতকে রাজাদের সম্পর্কে এই সত্য শেখানো হিসেবে। এই লেখা মতগুলোর নাম বলে, কোনো পক্ষ নেয় না, প্রতিটি পাঠই দাঁড়িয়ে আছে আয়াতের প্রতি মনোযোগী পাঠের উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "The Test Before the Sword",
          "bn": "তরবারির আগে যাচাই"
        },
        "p": [
          {
            "en": "Why does she refuse the war her generals offer? As-Sadi reads the whole speech as persuasion: she is talking her council down from their opinion and laying bare the evil end of fighting. The Muyassar agrees, calling her words a warning against meeting Sulayman with open hostility. She is not frozen by fear. She has looked at what a war would do to Sheba, found the plan unsound, and said so to the very men who proposed it, which takes a steadier nerve than ordering the attack would have.",
            "bn": "নিজের সেনাপতিদের দেওয়া যুদ্ধের প্রস্তাব সে কেন ফিরিয়ে দেয়? সা'দী গোটা বক্তব্যটিকেই পড়েন বোঝানো হিসেবে, সে তার সভাকে তাদের মত থেকে সরিয়ে আনছে আর যুদ্ধের খারাপ পরিণতিটা খুলে দেখাচ্ছে। মুয়াসসারও একমত, তার কথাকে বলে সুলাইমানের সঙ্গে খোলা শত্রুতায় নামার বিরুদ্ধে সতর্কবাণী। সে ভয়ে জমে যায়নি। যুদ্ধ সাবার কী করবে তা সে দেখে নিয়েছে, পরিকল্পনাটাকে অসার পেয়েছে, আর যারা এটা দিয়েছিল তাদের মুখের উপরেই তা বলে দিয়েছে। এর জন্য আক্রমণের হুকুম দেওয়ার চেয়ে বেশি স্থির স্নায়ু লাগে।"
          },
          {
            "en": "And she has a plan in place of war. As-Sadi reports her reasoning: she will not submit to this man before she has tested him, sending someone to uncover his situation and weigh it, so that she and her people act with clear sight rather than in the dark. In 27:35 she announces the test itself, that she will send to them and watch what her messengers bring back. The decision to verify before committing is the hinge the whole story turns on. As-Sadi's word for her aim is clarity, basira, acting on insight rather than on guesswork or on the heat of the moment.",
            "bn": "আর যুদ্ধের বদলে তার হাতে পরিকল্পনা আছে। সা'দী তার যুক্তিটা তুলে ধরেন, এই লোককে যাচাই না করে সে আত্মসমর্পণ করবে না, কাউকে পাঠাবে তার অবস্থা জেনে আসতে আর তা ভেবে দেখতে, যাতে সে ও তার জাতি অন্ধকারে নয়, স্পষ্ট দৃষ্টিতে কাজ করতে পারে। ২৭:৩৫ আয়াতে সে যাচাইয়ের ঘোষণাটাই দেয়, সে তাদের কাছে পাঠাবে আর দেখবে তার দূতেরা কী নিয়ে ফেরে। সিদ্ধান্তে ঝাঁপিয়ে পড়ার আগে যাচাই করে নেওয়া, গোটা কাহিনি এই কবজার উপরেই ঘোরে। সা'দীর ভাষায় তার লক্ষ্য হলো স্বচ্ছতা, বাসীরা, অনুমান বা মুহূর্তের উত্তেজনা নয়, বুঝে নিয়ে কাজ করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Trust in Being Asked",
          "bn": "পরামর্শ চাওয়ার আমানত"
        },
        "p": [
          {
            "en": "Her restraint grows out of a habit the surah has already shown: she consults. In 27:32 she tells her chiefs she decides no matter until they are present with her, and Maarif al-Quran notes that she reassured them this way before asking their counsel, which won their loyalty. Qatadah, whom Maarif relays from al-Qurtubi, put her council at 313 men, each standing for 10,000 others. Consultation, Maarif adds, is a Sunnah; even the Prophet ﷺ, who received revelation, was told in 3:159 to consult his companions.",
            "bn": "তার এই সংযম গড়ে ওঠে এমন অভ্যাস থেকে, যা সূরা আগেই দেখিয়েছে, সে পরামর্শ করে। ২৭:৩২ আয়াতে সে তার সভাসদদের বলে, তাদের উপস্থিতি ছাড়া সে কোনো বিষয়ে সিদ্ধান্ত নেয় না, আর মাআরিফুল কুরআন বলে, পরামর্শ চাওয়ার আগে সে এভাবেই তাদের আশ্বস্ত করেছিল, যা তাদের আনুগত্য জিতে নিয়েছিল। কাতাদা, যাঁকে মাআরিফ কুরতুবীর বরাতে আনে, তার সভার সংখ্যা বলেছেন ৩১৩ জন, প্রত্যেকে আরও ১০,০০০ লোকের প্রতিনিধি। মাআরিফ যোগ করে, পরামর্শ করা সুন্নত, এমনকি নবী ﷺ, যিনি ওহি পেতেন, তাঁকেও ৩:১৫৯ আয়াতে বলা হয়েছে সাহাবিদের সঙ্গে পরামর্শ করতে।"
          },
          {
            "en": "The Prophet ﷺ gave that duty of counsel its weight in a hadith recorded by at-Tirmidhi, no. 2822, from Abu Hurayrah: whoever is consulted is a trustee. At-Tirmidhi graded the report hasan. The saying cuts in both directions. The adviser carries a trust and owes an honest view, while the leader who asks, as this queen does, treats her people as worth consulting rather than as tools to command. Bilqis asks, she listens, and only then does she decide, and the Quran lets her wisdom stand. The hadith lifts asking for counsel above mere courtesy into a bond of trust between a leader and the people.",
            "bn": "পরামর্শের এই দায়িত্বকে নবী ﷺ ওজন দিয়েছেন এক হাদীসে, যা তিরমিযী নং ২৮২২-এ আবু হুরায়রা থেকে এনেছেন, যার কাছে পরামর্শ চাওয়া হয়, সে আমানতদার। তিরমিযী এই বর্ণনাকে হাসান বলেছেন। কথাটা দুদিকেই কাটে। পরামর্শদাতা আমানত বহন করে, তাকে সৎ মত দিতে হয়, আর যে নেতা জিজ্ঞেস করে, এই রানী যেমন করছে, সে তার মানুষদের হুকুমের হাতিয়ার না ভেবে পরামর্শের যোগ্য বলে গণ্য করে। বিলকীস জিজ্ঞেস করে, শোনে, তারপরই সিদ্ধান্ত নেয়, আর কুরআন তার প্রজ্ঞাকে টিকে থাকতে দেয়। হাদীসটি পরামর্শ চাওয়াকে নিছক ভদ্রতার ঊর্ধ্বে তুলে নেতা আর মানুষের মধ্যে আস্থার বন্ধনে পরিণত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prudence as an Open Door",
          "bn": "বিচক্ষণতা যে দরজা খোলে"
        },
        "p": [
          {
            "en": "The Quran does not hide its admiration for her. Qatadah, as Ibn Kathir relays, said: may God have mercy on her and be pleased with her, how wise she was as a Muslim, and how wise she had been before that as an idolater. Her caution is honoured, not excused. It was never cowardice. It was a refusal to let wounded pride, or the eagerness of her soldiers, make a decision that would fall on the heads of her whole people. That the praise falls on a ruler still outside the faith makes it sharper, not softer; the text honours her judgement on its own terms.",
            "bn": "কুরআন তার প্রতি তার মুগ্ধতা লুকায় না। কাতাদা, ইবন কাসীরের বরাতে, বলেছেন, আল্লাহ তার উপর রহম করুন ও তার উপর সন্তুষ্ট হোন, মুসলিম হিসেবে সে কতই না বিচক্ষণ ছিল, আর তার আগে মূর্তিপূজারি থাকা অবস্থায়ও সে কত বিচক্ষণ ছিল। তার সতর্কতাকে সম্মান জানানো হয়েছে, কোনো অজুহাত দিয়ে পাশ কাটানো হয়নি। এটা কখনোই কাপুরুষতা ছিল না। এটা ছিল আহত অহংকার কিংবা সেনাদের উত্তেজনাকে এমন সিদ্ধান্ত নিতে না দেওয়ার দৃঢ়তা, যে সিদ্ধান্তের ভার গিয়ে পড়ত তার গোটা জাতির মাথায়। প্রশংসাটা এমন এক শাসককে দেওয়া, যে তখনো ঈমানের বাইরে, এতে কথাটা নরম নয়, বরং আরও ধারালো হয়, লেখা তার বিচারবুদ্ধিকে তার নিজের জায়গাতেই সম্মান জানায়।"
          },
          {
            "en": "And here the lesson opens outward. The very restraint that spared Sheba a war became the road she travelled toward the truth. Because she chose to verify rather than to fight, she kept open the path that would, later in the surah, bring her to faith instead of to ruin. A rash war would have closed that door along with the city gates. Prudence held it open. Her wisdom was not merely good politics; under God's arrangement it was the first step of her guidance.",
            "bn": "আর এখানেই শিক্ষাটা বাইরের দিকে খুলে যায়। যে সংযম সাবাকে যুদ্ধ থেকে বাঁচাল, সেটিই হয়ে উঠল সত্যের দিকে তার হাঁটার পথ। লড়াই না বেছে যাচাই বেছে নেওয়ায় সে সেই পথটা খোলা রাখল, যা সূরার পরের দিকে তাকে ধ্বংসের বদলে ঈমানের কাছে নিয়ে আসবে। হঠকারী যুদ্ধ শহরের ফটকের সঙ্গে সেই দরজাটাও বন্ধ করে দিত। বিচক্ষণতা তা খোলা রাখল। তার প্রজ্ঞা নিছক ভালো রাজনীতি ছিল না, আল্লাহর ব্যবস্থাপনায় তা ছিল তার হেদায়েতের প্রথম ধাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "What Her Caution Asks",
          "bn": "তার সতর্কতা যা চায়"
        },
        "p": [
          {
            "en": "The verse hands the reader a way to weigh a decision. Before answering force with force, count the ruin it brings: the land wrecked, the honoured dragged low, a whole order of life unmade. Bilqis names that cost out loud, in front of the people most eager to pay it, before anyone lifts a weapon. In our own far smaller quarrels the cost is rarely spoken at all; we reach for the response and discover the wreckage only afterward. The verse models saying the price first. Naming the cost aloud is itself an act of leadership, because it forces everyone present to own the choice together.",
            "bn": "আয়াতটি পাঠকের হাতে সিদ্ধান্ত ওজন করার উপায় তুলে দেয়। শক্তির জবাব শক্তি দিয়ে দেওয়ার আগে তার ধ্বংসের হিসাব করুন, বিধ্বস্ত জনপদ, সম্মানিতদের টেনে নামানো, গোটা জীবনব্যবস্থার ভেঙে পড়া। বিলকীস সেই দাম মুখে বলে দেয়, যারা তা দিতে সবচেয়ে উদগ্রীব তাদের সামনেই, কেউ অস্ত্র তোলার আগে। আমাদের নিজেদের ঢের ছোট ঝগড়ায় দামটা প্রায় মুখেই আসে না, আমরা জবাব দিতে ঝাঁপাই, ধ্বংসটা টের পাই পরে। আয়াত শেখায়, দামটা আগে বলে নিতে। দাম মুখে বলে দেওয়া নিজেই নেতৃত্বের কাজ, কারণ এতে উপস্থিত সবাই মিলে সিদ্ধান্তের দায় নিতে বাধ্য হয়।"
          },
          {
            "en": "It also sets counsel and testing before action. She gathered her advisers, then verified her reading of the man before she moved, and only then committed. This is not weakness or endless delay; it is disciplined patience. Seek the counsel you owe the people around you, test what you think you know of a person or a situation, and refuse to let either your pride or the loudest voices in the room make the choice. Her true strength was that she could have fought, and chose first to understand.",
            "bn": "সে কাজের আগে পরামর্শ ও যাচাইকেও সামনে রাখে। প্রথমে উপদেষ্টাদের জড়ো করে, তারপর নড়ার আগে লোকটা সম্পর্কে নিজের ধারণা যাচাই করে নেয়, তারপরই পথে নামে। এটা দুর্বলতা বা অনন্ত দেরি নয়, এটা সুশৃঙ্খল ধৈর্য। চারপাশের মানুষের প্রতি যে পরামর্শের দায় আছে তা নিন, কোনো মানুষ বা পরিস্থিতি সম্পর্কে যা জানেন বলে ভাবছেন তা যাচাই করুন, আর নিজের অহংকার কিংবা ঘরের সবচেয়ে উঁচু গলাগুলোকে সিদ্ধান্ত নিতে দেবেন না। তার আসল শক্তি এটাই, সে লড়তে পারত, তবু আগে বুঝে নিতে চাইল।"
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
  "27:42": {
    "sections": [
      {
        "h": {
          "en": "She Walks Into the Test",
          "bn": "পরীক্ষার ভেতরে তাঁর পা"
        },
        "p": [
          {
            "en": "When she arrives, the throne is already waiting for her, and it is not quite the throne she left behind. On Sulayman's order it had been disguised, nakkirū lahā 'arshahā. Ibn Kathir reports the commentators on what this meant. Ibn Abbas said some of its adornments were removed; Mujahid said its colours were switched, so that red was made yellow and green made red; Qatadah said it was turned about, with things added and things taken away. Then the question is put to her, as the verse records it, a-hākadhā 'arshuki, is your throne like this?",
            "bn": "যখন তিনি এসে পৌঁছালেন, সিংহাসনটি তখন তাঁর জন্য অপেক্ষা করছে, আর তা ঠিক সেই সিংহাসন নয় যা তিনি রেখে এসেছিলেন। সুলাইমানের নির্দেশে তার আকৃতি বদলে দেওয়া হয়েছিল, নাক্কিরূ লাহা আরশাহা। ইবন কাসীর এ নিয়ে তাফসীরকারদের কথা তুলে ধরেন। ইবন আব্বাস বলেন, এর কিছু সাজসজ্জা সরিয়ে নেওয়া হয়েছিল। মুজাহিদ বলেন, এর রং পাল্টে দেওয়া হয়েছিল, লাল করা হয়েছিল হলুদ আর সবুজ করা হয়েছিল লাল। কাতাদা বলেন, একে উল্টেপাল্টে দেওয়া হয়েছিল, কিছু জুড়ে আর কিছু সরিয়ে। তারপর তাঁকে প্রশ্ন করা হলো, যেমন আয়াত বলছে, আহাকাযা আরশুকি, এটা কি তোমার সিংহাসন?"
          },
          {
            "en": "Ibn Kathir explains the purpose. Sulayman wanted to see whether she would recognise the throne and how composed she would be before it, whether she would rush to say it was hers or rush to say it was not. The question looks simple and is not. The thing in front of her has been altered on purpose, so a flat yes would be wrong and a flat no would be wrong. Everything now turns on a single thing: how a careful person answers when both of the plain words have been closed off to her.",
            "bn": "উদ্দেশ্যটা ইবন কাসীর খুলে বলেন। সুলাইমান দেখতে চেয়েছিলেন, রানি সিংহাসনটি চিনতে পারেন কি না, আর তার সামনে তিনি কতটা স্থির থাকেন। তিনি কি তাড়াহুড়ো করে বলবেন এটা তাঁরই, নাকি তাড়াহুড়ো করে বলবেন এটা তাঁর নয়। প্রশ্নটা দেখতে সহজ, আসলে নয়। সামনের জিনিসটা ইচ্ছে করেই বদলে দেওয়া হয়েছে, তাই সরাসরি হ্যাঁ ভুল হতো, সরাসরি না-ও ভুল হতো। এখন সবকিছু নির্ভর করছে একটা বিষয়ের উপর, সতর্ক মানুষ কী বলে যখন দুটো সোজা জবাবই তার জন্য বন্ধ হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for Both Cases",
          "bn": "দুই দিকেই সত্য যে কথা"
        },
        "p": [
          {
            "en": "Her answer is two words in the Arabic, ka-annahu huwa, as though it were it. At-Tabari glosses the phrase simply, shabbahathu bihi, she likened it to the throne, she said it was like the thing she knew. He records Qatadah saying the same, that she merely drew the resemblance, and he adds a detail that matters, wa-kānat qad tarakathu khalfahā, she had left it behind her, back in her own land. The throne she knew was far away, and the thing before her resembled it but had been changed. So she reached for a word that fit the resemblance without settling the fact.",
            "bn": "তাঁর জবাব আরবিতে দুটি শব্দের, কাআন্নাহু হুয়া, এ যেন সেটাই। তাবারী কথাটার সহজ ব্যাখ্যা দেন, শাব্বাহাতহু বিহি, তিনি সিংহাসনটিকে ওর সঙ্গে মিলিয়ে বললেন, বললেন এটা তাঁর চেনা জিনিসটার মতো। তিনি কাতাদা থেকেও একই কথা আনেন, যে রানি কেবল মিলটুকু দেখিয়েছিলেন, আর একটা জরুরি কথা জুড়ে দেন, ওয়া কানাত কাদ তারাকাতহু খালফাহা, তিনি সিংহাসনটি নিজের দেশে পেছনে ফেলে এসেছিলেন। যে সিংহাসন তাঁর চেনা তা বহু দূরে, আর সামনের জিনিসটা তার মতো হলেও বদলে দেওয়া। তাই তিনি এমন এক কথা বেছে নিলেন, যা মিল বোঝায় অথচ সত্যকে চূড়ান্ত করে না।"
          },
          {
            "en": "As-Sa'di draws out the care in it. She did not say huwa, it is it, because she could see the alteration and disguise in it. Nor did she deny that it was it, because she recognised it all the same. Instead, in his words, she brought a wording that could carry both possibilities and stayed truthful in either case, lafẓin muḥtamilin li'l-amrayn ṣādiqin 'alā'l-ḥālayn. If it was her throne, she had not lied; if it was not, she had not lied. The sentence was built to survive whatever turned out to be true.",
            "bn": "এর ভেতরের সতর্কতা আস-সাদি টেনে বের করেন। তিনি বলেননি হুয়া, এটাই সেটা, কারণ তাতে বদল আর ছদ্মবেশ তাঁর চোখে পড়ছিল। আবার অস্বীকারও করেননি যে এটা সেটা নয়, কারণ তিনি একে চিনতে পারছিলেন। বরং আস-সাদির ভাষায়, তিনি এমন এক কথা আনলেন যা দুই সম্ভাবনাই ধারণ করে আর দুই অবস্থাতেই সত্য থাকে, লাফযিন মুহতামিলিন লিল-আমরাইন সাদিকিন আলাল-হালাইন। সিংহাসন তাঁর হলেও তিনি মিথ্যা বলেননি, না হলেও মিথ্যা বলেননি। কথাটা এমনভাবেই গড়া, যাতে শেষ পর্যন্ত যা-ই সত্য হোক তা টিকে যায়।"
          },
          {
            "en": "Ibn Kathir frames the same restraint from two sides. She did not hurry to say this was her throne, li-bu'di masāfatihi 'anhā, because of how far hers lay from where she now stood. And she did not hurry to say it was something else, because of the marks and features she still saw in it, even though it had been changed and disguised. So she said ka-annahu huwa, it resembles it, it is close to it. Between two hasty claims she found the single honest word that matched what she actually knew.",
            "bn": "ইবন কাসীর একই সংযমকে দুই দিক থেকে দেখান। রানি তাড়াহুড়ো করে বলেননি এটা তাঁর সিংহাসন, লি-বুদি মাসাফাতিহি আনহা, কারণ তাঁর সিংহাসন যেখানে ছিল তা এখান থেকে বহু দূর। আবার তাড়াহুড়ো করে বলেননি এটা অন্য কিছু, কারণ বদল আর ছদ্মবেশ দেওয়ার পরও তিনি তাতে চেনা ছাপ আর গুণ দেখতে পাচ্ছিলেন। তাই বললেন কাআন্নাহু হুয়া, এটা ওর মতো, ওর কাছাকাছি। দুটি তাড়াহুড়ো দাবির মাঝখানে তিনি সেই একটিমাত্র সৎ কথা খুঁজে নিলেন, যা তাঁর সত্যিকার জানার সঙ্গে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why They Call It Intelligence",
          "bn": "একে কেন বুদ্ধি বলা হয়"
        },
        "p": [
          {
            "en": "The commentators do not treat this as a lucky dodge; they treat it as a mark of mind. Ibn Kathir says of her that she had steadiness and reason, understanding and shrewdness and firm resolve, thabāt wa-'aql wa-lubb wa-dahā' wa-ḥazm. Of the answer itself he says, hādhā ghāyatun fi'dh-dhakā' wa'l-ḥazm, this is the very height of intelligence and resolve. The praise is striking. A short, hedged sentence, spoken by someone under pressure in a foreign court, is read by the commentator as the sharpest thing she could have said.",
            "bn": "তাফসীরকারেরা একে ভাগ্যের জোরে বেঁচে যাওয়া বলে দেখেন না, দেখেন বুদ্ধির ছাপ হিসেবে। ইবন কাসীর তাঁর সম্পর্কে বলেন, তাঁর ছিল স্থিরতা আর বিবেক, বোধ আর চতুরতা আর দৃঢ় সংকল্প, সাবাত ওয়া আকল ওয়া লুব্ব ওয়া দাহা ওয়া হাযম। আর জবাবটি নিয়ে তিনি বলেন, হাযা গায়াতুন ফিয-যাকা ওয়াল-হাযম, এ হলো বুদ্ধি আর সংকল্পের চূড়ান্ত নমুনা। প্রশংসাটা চমকে দেওয়ার মতো। ভিন দেশের দরবারে চাপের মুখে বলা এক ছোট, মেপে বলা কথাকে তাফসীরকার পড়ছেন তাঁর বলা সবচেয়ে ধারালো কথা হিসেবে।"
          },
          {
            "en": "Others say the same in their own words. As-Sa'di calls the answer min dhakā'ihā wa-fiṭnatihā, a product of her intelligence and quick understanding. Al-Qurtubi writes that because she neither affirmed nor denied, fa-'alima Sulaymān kamāla 'aqlihā, Sulayman came to know the completeness of her reason. Al-Qurtubi also cites Ikrima, who said simply, kānat ḥakīma, she was wise. On this the sources agree. The test was not only of whether she would be guided, but of what kind of mind was being brought to the truth, and the mind proved to be a serious mind.",
            "bn": "অন্যরাও নিজেদের ভাষায় একই কথা বলেন। আস-সাদি এই জবাবকে বলেন মিন যাকাইহা ওয়া ফিতনাতিহা, তাঁর বুদ্ধি আর তীক্ষ্ণ বোঝার ফসল। কুরতুবী লেখেন, যেহেতু তিনি স্বীকারও করেননি অস্বীকারও করেননি, ফা-আলিমা সুলাইমান কামালা আকলিহা, সুলাইমান তাঁর বিবেকের পূর্ণতা বুঝে নিলেন। কুরতুবী ইকরিমা থেকেও আনেন, যিনি সোজা বলেন, কানাত হাকীমা, তিনি ছিলেন বিচক্ষণ। এ জায়গায় সূত্রগুলো একমত। পরীক্ষা শুধু এটা ছিল না যে তিনি পথ পাবেন কি না, বরং সত্যের কাছে কেমন এক মনকে আনা হচ্ছে, আর সেই মন প্রমাণ করল সে গভীর।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Fears, One Answer",
          "bn": "দুই ভয়, এক জবাব"
        },
        "p": [
          {
            "en": "Al-Baghawi gives the answer a moral shape, through Ikrima. She did not say na'am, yes, lam taqul na'am khawfan an takdhib, for fear that she would be lying, since the throne had been changed and she could not be certain. And she did not say la, no, khawfan min at-takdhīb, for fear of being shown false, since it might after all be hers. Two different fears pulled at the two easy answers, and both answers were closed to an honest speaker. What was left was the true middle, it is as though it were it.",
            "bn": "বাগাভী ইকরিমার মাধ্যমে এই জবাবকে একটা নৈতিক রূপ দেন। রানি বলেননি নাআম, হ্যাঁ, লাম তাকুল নাআম খাওফান আন তাকযিব, এই ভয়ে যে তাহলে মিথ্যা বলা হতো, কারণ সিংহাসন বদলে গেছে আর তিনি নিশ্চিত হতে পারছিলেন না। আবার বলেননি লা, না, খাওফান মিন আত-তাকযীব, মিথ্যুক প্রমাণিত হওয়ার ভয়ে, কারণ এটা শেষ পর্যন্ত তাঁরই হতে পারত। দুই আলাদা ভয় দুই সোজা জবাবকে টেনে ধরছিল, আর সৎ মানুষের জন্য দুটো জবাবই বন্ধ ছিল। বাকি রইল সত্যিকারের মাঝপথ, এ যেন সেটাই।"
          },
          {
            "en": "There is a second reading of the same words. Al-Baghawi and al-Qurtubi both report Muqatil saying 'arafathu wa-lākin shabbahat 'alayhim kamā shabbahū 'alayhā, she recognised it, but she clouded her answer to them just as they had clouded the throne for her, giving back ambiguity for ambiguity. Al-Baghawi notes a further view, introduced with qīl, it is said, that the throne genuinely confused her because she had left it locked away at home. Whether she was matching their game or honestly unsure, the wording she chose is the same, and it binds her to nothing she cannot stand behind.",
            "bn": "একই কথার আরেকটি পাঠও আছে। বাগাভী আর কুরতুবী দুজনেই মুকাতিল থেকে আনেন, আরাফাতহু ওয়া লাকিন শাব্বাহাত আলাইহিম কামা শাব্বাহূ আলাইহা, তিনি একে চিনেছিলেন, তবে তাদের সামনে জবাবটাকে ঘোলাটে করলেন ঠিক যেমন তারা তাঁর জন্য সিংহাসনটাকে ঘোলাটে করেছিল, ধোঁয়াশার বদলে ধোঁয়াশা ফিরিয়ে দিয়ে। বাগাভী আরেকটি মত টুকে রাখেন, কীল অর্থাৎ বলা হয়, যে সিংহাসন সত্যিই তাঁকে বিভ্রান্ত করেছিল কারণ তিনি একে ঘরে তালাবদ্ধ রেখে এসেছিলেন। তিনি তাদের খেলা মেলাচ্ছিলেন, নাকি সত্যিই অনিশ্চিত ছিলেন, বেছে নেওয়া কথাটা একই, আর তা তাঁকে এমন কোনো কথায় বাঁধে না যার পেছনে তিনি দাঁড়াতে পারবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Voice Is Speaking",
          "bn": "কথাটা আসলে কার মুখের"
        },
        "p": [
          {
            "en": "The verse then adds a sentence whose speaker the commentators genuinely dispute, wa-ūtīnā'l-'ilma min qablihā wa-kunnā muslimīn, and we were given the knowledge before her, and we were submitters. On one reading it is Sulayman speaking. At-Tabari reports it from Mujahid, Sulaymān yaqūluhu, Sulayman says it, and Ibn Kathir carries the same from Mujahid. On this reading Sulayman marvels at her and gives thanks: the knowledge of Allah and of His power over whatever He wills was given to us before this queen, and we had already submitted to Him before her.",
            "bn": "এরপর আয়াত এমন এক বাক্য জোড়ে, যার বক্তা কে তা নিয়ে তাফসীরকারদের সত্যিকার মতভেদ আছে, ওয়া-উতীনাল-ইলমা মিন কাবলিহা ওয়া কুন্না মুসলিমীন, আর এর আগেই আমাদের জ্ঞান দেওয়া হয়েছিল আর আমরা ছিলাম আত্মসমর্পণকারী। একটি পাঠে এটা সুলাইমানের কথা। তাবারী মুজাহিদ থেকে আনেন, সুলাইমান ইয়াকূলুহু, সুলাইমান এটা বলছেন, আর ইবন কাসীরও মুজাহিদ থেকে একই কথা আনেন। এই পাঠে সুলাইমান রানিকে দেখে বিস্মিত হন আর শোকর আদায় করেন, আল্লাহ আর তিনি যা চান তার উপর তাঁর ক্ষমতার জ্ঞান এই রানির আগেই আমাদের দেওয়া হয়েছিল, আর তাঁর কাছে আমরা আগে থেকেই আত্মসমর্পণ করেছিলাম।"
          },
          {
            "en": "On a second reading the words are hers. Al-Qurtubi reports, qīla huwa min qawl Bilqīs, it is said this is from the speech of Bilqis: we were given knowledge of the truth of Sulayman's prophethood before this sign in the throne, and we had become submissive to his command. As-Sa'di offers the same as a possibility, that she means she had learned of Sulayman's kingdom and his power before the moment she saw the throne fetched from afar, so she yielded and came submitting. On this reading the sentence is her own confession of a dawning faith.",
            "bn": "দ্বিতীয় পাঠে কথাগুলো তাঁরই। কুরতুবী আনেন, কীলা হুয়া মিন কাওল বিলকীস, বলা হয় এটা বিলকীসের কথা, সিংহাসনের এই নিদর্শনের আগেই আমাদের সুলাইমানের নবুয়্যতের সত্যতার জ্ঞান দেওয়া হয়েছিল, আর আমরা তাঁর নির্দেশের অনুগত হয়ে গিয়েছিলাম। আস-সাদিও এটাকে এক সম্ভাবনা হিসেবে রাখেন, যে রানি বোঝাচ্ছেন সুলাইমানের রাজ্য আর ক্ষমতার কথা তিনি দূর থেকে সিংহাসন আনার এই মুহূর্তের আগেই জেনেছিলেন, তাই নত হয়ে আত্মসমর্পণ করতে এসেছিলেন। এই পাঠে বাক্যটি তাঁর ভেতরে জেগে ওঠা ঈমানের নিজের স্বীকারোক্তি।"
          },
          {
            "en": "Al-Qurtubi lists still more: that the words belong to Sulayman's people, or that the knowledge meant is knowledge of her own coming in submission, given before she arrived. He closes the question where an honest commentator closes it, wallāhu a'lam, and Allah knows best. The point for a reader is not to force a verdict the scholars themselves withheld. Whether the voice is the prophet's gratitude or the queen's first confession, the same truth stands inside the sentence: knowledge came first, and the submission followed from it.",
            "bn": "কুরতুবী আরও কয়েকটি মত সাজান, যে কথাগুলো সুলাইমানের লোকদের, কিংবা যে জ্ঞানের কথা বলা হচ্ছে তা রানির নিজের নত হয়ে আসার জ্ঞান, যা তাঁর পৌঁছানোর আগেই দেওয়া হয়েছিল। সৎ তাফসীরকার যেখানে প্রশ্নটা থামান তিনিও সেখানেই থামেন, ওয়াল্লাহু আলাম, আল্লাহই ভালো জানেন। পাঠকের কাজ এমন কোনো রায় চাপিয়ে দেওয়া নয়, যা আলেমরা নিজেরাই আটকে রেখেছেন। বক্তা নবীর কৃতজ্ঞতা হোক বা রানির প্রথম স্বীকারোক্তি, বাক্যের ভেতরের একই সত্য টিকে থাকে, জ্ঞান এলো আগে, আর আত্মসমর্পণ এলো তা থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge Handed as a Gift",
          "bn": "জ্ঞান এলো দান হয়ে"
        },
        "p": [
          {
            "en": "Whoever the speaker, the verb is worth pausing on: ūtīnā, we were given, not we earned or we acquired. Knowledge here arrives as something handed over. Al-Muyassar reads the scene this way: it became clear to Sulayman that she had hit the mark in her answer, and she had already come to know the power of Allah and the soundness of Sulayman's prophethood, 'alimat qudrata'llāh wa-ṣiḥḥata nubuwwati Sulaymān. Her careful honesty did not manufacture that knowledge on its own; it received it, recognised it, and refused to overstate it.",
            "bn": "বক্তা যিনিই হোন, ক্রিয়াটি থামিয়ে ভাবার মতো, উতীনা, আমাদের দেওয়া হয়েছিল, আমরা অর্জন করেছি বা আমরা পেয়ে নিয়েছি নয়। এখানে জ্ঞান আসছে হাতে তুলে দেওয়া কিছু হিসেবে। মুয়াসসার দৃশ্যটি এভাবে পড়েন, সুলাইমানের কাছে স্পষ্ট হলো যে রানি তাঁর জবাবে ঠিক জায়গায় লেগেছেন, আর তিনি আগেই আল্লাহর ক্ষমতা আর সুলাইমানের নবুয়্যতের সত্যতা জেনে ফেলেছিলেন, আলিমাত কুদরাতাল্লাহ ওয়া সিহহাতা নুবুওয়্যাতি সুলাইমান। তাঁর সতর্ক সততা নিজে থেকে সেই জ্ঞান তৈরি করেনি, বরং তা গ্রহণ করেছে, চিনেছে, আর তা নিয়ে বাড়িয়ে বলতে অস্বীকার করেছে।"
          },
          {
            "en": "The Prophet ﷺ tied understanding of the religion to that same giving hand. In Sahih al-Bukhari he said, man yuridi'llāhu bihi khayran yufaqqihhu fi'd-dīn, when Allah wills good for someone, He gives him understanding of the religion, and then, innamā anā qāsim wa'llāhu yu'ṭī, I am only a distributor, and it is Allah who gives. Understanding is His gift, not a trophy of the clever. That frame fits the verse exactly. The queen's intelligence was real, and the commentators praised it, yet the knowledge that moved her toward the truth was given, and the Giver of it is thanked.",
            "bn": "নবী ﷺ দীনের বোঝাপড়াকেও সেই একই দানকারী হাতের সঙ্গে বেঁধেছেন। সহীহ বুখারীতে তিনি বলেন, মান ইউরিদিল্লাহু বিহি খায়রান ইউফাক্কিহহু ফিদ-দীন, আল্লাহ যার কল্যাণ চান তাকে দীনের বোঝ দান করেন, এরপর, ইন্নামা আনা কাসিম ওয়াল্লাহু ইউতী, আমি তো কেবল বণ্টনকারী, আর দেন আল্লাহ। বোঝাপড়া তাঁর দান, চালাক মানুষের জেতা পুরস্কার নয়। এই কাঠামো আয়াতটির সঙ্গে হুবহু মেলে। রানির বুদ্ধি সত্যি ছিল, তাফসীরকারেরা তার প্রশংসাও করেছেন, তবু যে জ্ঞান তাঁকে সত্যের দিকে নাড়িয়েছিল তা দান করা হয়েছিল, আর যিনি তা দিয়েছেন তাঁরই শোকর করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Steps Before the Surrender",
          "bn": "আত্মসমর্পণের আগের ধাপগুলো"
        },
        "p": [
          {
            "en": "Read as a sequence, her small choices make a road. First she refuses the two easy lies and tells the exact truth she can stand behind. Then she lets herself recognise what she is seeing, the power behind the throne and the prophethood it points to, instead of arguing it away. The verse records knowledge given and submission following. None of this is yet her final word, and the account is not finished here; what matters is the shape of the approach. Careful honesty clears the ground, honest recognition builds on it, and only then does surrender become possible.",
            "bn": "ধারাবাহিকভাবে পড়লে তাঁর ছোট ছোট সিদ্ধান্ত মিলে একটা পথ তৈরি করে। প্রথমে তিনি দুটি সহজ মিথ্যা এড়িয়ে ঠিক ততটুকু সত্য বলেন যার পেছনে তিনি দাঁড়াতে পারেন। তারপর যা দেখছেন তা চিনে নিতে নিজেকে ছাড় দেন, সিংহাসনের পেছনের ক্ষমতা আর তা যে নবুয়্যতের দিকে ইশারা করছে তা তর্ক করে উড়িয়ে না দিয়ে। আয়াত বলছে জ্ঞান দেওয়া হলো আর আত্মসমর্পণ এলো তার পেছনে। এর কোনোটাই এখনো তাঁর শেষ কথা নয়, আর কাহিনি এখানে শেষও হয় না। আসল কথা এগিয়ে আসার ধরনটা। সতর্ক সততা জমি সাফ করে, সৎ চিনে নেওয়া তার উপর গড়ে ওঠে, আর কেবল তখনই আত্মসমর্পণ সম্ভব হয়।"
          },
          {
            "en": "This is why the order in the sentence repays attention: knowledge before, submission after. Faith in the Qur'an is rarely a leap in the dark; it is more often a yielding to what a person has been given to see. A person who will not lie about small things, who will not claim certainty he lacks or deny what he half knows, has already begun to keep faith with the truth. The queen's road runs through exactly that discipline. Her story continues beyond this verse, but here the lesson is that honesty and received knowledge are the steps, and in that order.",
            "bn": "এ কারণেই বাক্যের ক্রম মন দিয়ে দেখার মতো, জ্ঞান আগে, আত্মসমর্পণ পরে। কুরআনে ঈমান খুব কমই অন্ধকারে ঝাঁপ দেওয়া। বরং প্রায়ই তা হলো যা দেখার সুযোগ দেওয়া হয়েছে তার কাছে নত হওয়া। যে মানুষ ছোট ছোট বিষয়ে মিথ্যা বলে না, যে নিজের নেই এমন নিশ্চয়তা দাবি করে না আর যা আধা-চেনা তা অস্বীকারও করে না, সে সত্যের সঙ্গে ওয়াদা রাখা শুরু করে দিয়েছে। রানির পথ ঠিক এই নিয়মের ভেতর দিয়ে যায়। তাঁর গল্প এই আয়াতের পরেও চলে, তবে এখানকার শিক্ষা হলো, সততা আর দান-করা জ্ঞানই ধাপ, আর এই ক্রমেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Her Caution Leaves Us",
          "bn": "তাঁর সতর্কতা আমাদের যা শেখায়"
        },
        "p": [
          {
            "en": "For a reader, the first gift of this verse is permission to say I am not sure. The queen is praised, by every commentator who touches the line, for a sentence that declines to overclaim. We are trained to fear the hedged answer as weakness, yet here it is the mark of the strongest mind in the room. When the honest answer can only be a qualified answer, that qualified answer is the honest response, and giving it is not timidity but discipline. Refusing the easy yes and the false no is a habit worth building long before any throne is set in front of you.",
            "bn": "পাঠকের জন্য এই আয়াতের প্রথম দান হলো, নিশ্চিত নই বলার অনুমতি। যে তাফসীরকারই এই পঙ্‌ক্তি ছুঁয়েছেন, তিনিই রানির প্রশংসা করেছেন এমন এক কথার জন্য, যা বাড়িয়ে বলতে রাজি নয়। আমাদের শেখানো হয় মেপে বলা জবাবকে দুর্বলতা বলে ভয় পেতে, অথচ এখানে তা দরবারের সবচেয়ে শক্ত মনের ছাপ। যখন সৎ জবাবটাই কেবল শর্তসাপেক্ষ হতে পারে, তখন সেই শর্তসাপেক্ষ জবাবই সৎ জবাব, আর তা দেওয়া ভীরুতা নয়, সংযম। সহজ হ্যাঁ আর মিথ্যা না এড়িয়ে চলা এমন এক অভ্যাস, যা সামনে সিংহাসন রাখার অনেক আগেই গড়ে তোলা দরকার।"
          },
          {
            "en": "The second gift is the reminder of where knowledge comes from. The clever answer did not save her; the given knowledge drew her. If understanding is on loan, then the response to learning something true is not pride but gratitude, and the response to not yet knowing is not bluffing but patience. Hold what you have been shown honestly, name only what you are sure of, and let what you are given lead where it leads. That is the posture the verse praises, and it quietly asks the same of anyone who reads it.",
            "bn": "দ্বিতীয় দান হলো জ্ঞান কোথা থেকে আসে তা মনে করিয়ে দেওয়া। চালাক জবাব তাঁকে বাঁচায়নি, দান-করা জ্ঞানই তাঁকে টেনেছিল। বোঝাপড়া যদি ধার হয়, তবে সত্য কিছু জানার জবাব অহংকার নয় শোকর, আর এখনো না জানার জবাব ভান নয় ধৈর্য। যা দেখানো হয়েছে তা সততার সঙ্গে ধরে রাখুন, কেবল যা নিয়ে নিশ্চিত তা-ই বলুন, আর যা দেওয়া হয়েছে তাকে যেখানে নিয়ে যায় সেখানে যেতে দিন। আয়াত এই ভঙ্গিরই প্রশংসা করে, আর যে একে পড়ে তার কাছেই চুপিসারে এটা চায়।"
          }
        ]
      }
    ]
  },
  "27:52": {
    "sections": [
      {
        "h": {
          "en": "A Finger at the Ruins",
          "bn": "ধ্বংসস্তূপের দিকে আঙুল"
        },
        "p": [
          {
            "en": "Fa-tilka buyutuhum khawiyatan: so those are their houses, standing empty. The opening word fa-tilka points, the way a hand points at something in plain view. At-Tabari reads khawiyatan as khaliyatan minhum, empty of them, with no one of them left inside, for Allah had destroyed them and wiped them out. Al-Muyassar says the same in a single line: those dwellings empty, not one of them in them, because Allah destroyed them for their wrong. The verse does not pause to describe the people. It takes you to the place they lived and lets the emptiness do the speaking.",
            "bn": "ফাতিলকা বুইউতুহুম খাবিয়াতান: এই তো তাদের ঘরদোর, পড়ে আছে খালি। শুরুর শব্দ ফাতিলকা আঙুল তোলে, ঠিক যেমন হাত কোনো দেখা-যাওয়া জিনিসের দিকে তোলে। তাবারী খাবিয়াতান-এর অর্থ করেন খালিয়াতান মিনহুম, তাদের থেকে শূন্য, ভেতরে তাদের কেউই আর নেই, কারণ আল্লাহ তাদের ধ্বংস করে নিশ্চিহ্ন করে দিয়েছেন। মুয়াসসার এক লাইনে একই কথা বলেন: সেই বাসস্থানগুলো খালি, তাদের একজনও সেখানে নেই, কারণ তাদের জুলুমের কারণে আল্লাহ তাদের ধ্বংস করেছেন। আয়াতটি লোকগুলোর বর্ণনায় থামে না। এটি আপনাকে তাদের বাসস্থানে নিয়ে যায়, আর কথা বলতে দেয় সেই শূন্যতাকে।"
          },
          {
            "en": "This is the aftermath, not the event. The verses just before told how the leaders of Thamud plotted and how the plot was answered; this verse walks you out to the site afterwards and leaves you standing among the walls. What remains is evidence. A house outlasts the hands that raised it, so the ruin becomes a witness that stays behind to testify long after the voices inside it fell silent. The Qur'an is not taking you sightseeing. It is holding up an exhibit and asking the living to read what is written in it.",
            "bn": "এটি ঘটনার পর, ঘটনা নিজে নয়। ঠিক আগের আয়াতগুলো বলেছিল সামূদের নেতারা কীভাবে চক্রান্ত করেছিল আর সেই চক্রান্তের কী জবাব এসেছিল। এই আয়াত তার পরের দৃশ্যে আপনাকে নিয়ে যায়, দাঁড় করিয়ে দেয় দেয়ালগুলোর মাঝে। যা পড়ে আছে, সেটাই প্রমাণ। ঘর যে হাতে গড়া, সেই হাতের চেয়ে বেশি দিন টেকে। তাই ধ্বংসস্তূপ হয়ে দাঁড়ায় এক সাক্ষী, ভেতরের কণ্ঠগুলো নীরব হয়ে যাওয়ার অনেক পরেও যে থেকে যায় সাক্ষ্য দিতে। কুরআন আপনাকে বেড়াতে নিয়ে যাচ্ছে না। এটি একটা নিদর্শন তুলে ধরে জীবিতদের বলছে, এতে যা লেখা তা পড়ো।"
          }
        ]
      },
      {
        "h": {
          "en": "Walls Fallen on Roofs",
          "bn": "ছাদের উপর ধসে পড়া দেয়াল"
        },
        "p": [
          {
            "en": "As-Sa'di fills in the picture that the single word khawiya carries. Their houses, he writes, had their walls caved in upon their roofs, left desolate of the ones who had lived in them and emptied of those who used to come down and stay there. The order he chooses is deliberate: not roofs fallen onto walls but walls collapsed over the roofs, a structure turned inside out and heaped on itself. A standing house holds its shape against gravity every single day. Take away the life inside it, and the shape it was straining to keep is the first thing to go.",
            "bn": "খাবিয়া শব্দটি যে ছবি বহন করে, সাদী তা খুলে দেন। তিনি লেখেন, তাদের ঘরগুলোর দেয়াল ছাদের উপর ধসে পড়েছে, যারা সেখানে থাকত তাদের শূন্য হয়ে, আর যারা নেমে এসে আস্তানা গাড়ত তাদের থেকে খালি হয়ে। তিনি যে ক্রম বেছে নেন তা ভেবেচিন্তে: দেয়ালের উপর ছাদ নয়, ছাদের উপর দেয়াল ধসে পড়া, যেন গোটা কাঠামো উল্টে নিজের উপরেই স্তূপ হয়ে গেছে। দাঁড়িয়ে থাকা ঘর প্রতিদিন মাধ্যাকর্ষণের বিরুদ্ধে নিজের আকার ধরে রাখে। ভেতরের প্রাণটুকু সরিয়ে নিন, যে আকার ধরে রাখতে সে এত টানাপোড়েন করছিল, সেটাই আগে যায়।"
          },
          {
            "en": "The other commentators keep to the plainer sense of emptiness. Al-Baghawi glosses khawiya simply as khaliya, empty. Al-Qurtubi gives it as empty of its people, in ruin, with no dweller in it, and then spends his comment on how the word is read. The common reading takes khawiyatan in the accusative as a circumstantial state, which al-Farra and an-Nahhas set out; al-Kisa'i and Abu 'Ubayda parse that same accusative by a different route; and 'Isa ibn 'Umar, Nasr ibn 'Asim and al-Jahdari read it in the nominative, as the predicate that tells you simply what those houses now are.",
            "bn": "বাকি তাফসীরকারেরা খালি হওয়ার সহজ অর্থেই থাকেন। বাগাভী খাবিয়া-কে সোজা খালিয়া, অর্থাৎ খালি বলে বুঝিয়ে দেন। কুরতুবী বলেন, বাসিন্দাশূন্য, বিরান, ভেতরে কোনো অধিবাসী নেই। এরপর তাঁর আলোচনার পুরোটা যায় শব্দটি কীভাবে পড়া হয় তাতে। প্রচলিত কিরাতে খাবিয়াতান পড়া হয় হাল হিসেবে নাসব অবস্থায়, যা ফাররা ও নাহহাস ব্যাখ্যা করেন। কিসাঈ ও আবু উবাইদা সেই একই নাসবকে অন্য পথে বিশ্লেষণ করেন। আর ঈসা ইবন উমর, নাসর ইবন আসিম ও জাহদারী একে পড়েন রফা অবস্থায়, খবর হিসেবে, যা সোজা জানিয়ে দেয় সেই ঘরগুলো এখন কী।"
          },
          {
            "en": "The two readings are not rivals. Whether you hear \"empty\" or \"collapsed upon itself,\" the point holds: a home is the most settled thing a person builds, and here it is the clearest wreck. The verse does not reach for a dramatic ruin to shock you. It reaches for the ordinary one, the house, the thing almost everyone means to keep and hand on, and shows it standing open to the wind.",
            "bn": "দুই কিরাত পরস্পরের প্রতিদ্বন্দ্বী নয়। আপনি 'খালি' শুনুন বা 'নিজের উপর ধসে পড়া', কথাটা একই থাকে: মানুষ যা গড়ে তার মধ্যে ঘরই সবচেয়ে থিতু জিনিস, আর এখানে সেটাই সবচেয়ে স্পষ্ট ধ্বংসাবশেষ। আয়াতটি আপনাকে চমকে দিতে নাটকীয় কোনো ধ্বংসস্তূপ বেছে নেয় না। বেছে নেয় সাধারণটিকে, ঘর, যা প্রায় সবাই ধরে রাখতে আর পরের হাতে তুলে দিতে চায়, আর দেখায় সেটি হাওয়ার মুখে খোলা পড়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "By It, Not After It",
          "bn": "এর কারণে, এর পরে নয়"
        },
        "p": [
          {
            "en": "Bi-ma zalamu: because of the wrong they did. The weight of the clause sits on the small word bi, the particle of cause. The houses are not empty after their wrongdoing, as if the two things merely happened in that order; they are empty by it, with the wrong named as the very thing that emptied them. At-Tabari reads the phrase as bi-zulmihim anfusahum, by their wronging of their own selves, through their shirk with Allah and their belying of the messenger He sent to them.",
            "bn": "বিমা জালামূ: কারণ তারা জুলুম করেছিল। পুরো বাক্যের ভার চেপে আছে ছোট্ট শব্দ বি-এর উপর, যা কারণ বোঝানোর অক্ষর। ঘরগুলো তাদের জুলুমের পরে খালি নয়, যেন দুটি ঘটনা কেবল এই ক্রমে ঘটেছে। সেগুলো খালি জুলুমের কারণে, আর যে জিনিস খালি করেছে তার নামই দেওয়া হয়েছে এই জুলুম। তাবারী বাক্যটির অর্থ করেন বিজুলমিহিম আনফুসাহুম, নিজেদের উপর জুলুম করার কারণে, আল্লাহর সঙ্গে শিরক করে আর তাঁর পাঠানো রাসূলকে মিথ্যা বলে।"
          },
          {
            "en": "The commentators name what the wrong consisted of. For at-Tabari and al-Muyassar it is associating partners with Allah and calling the messenger a liar. As-Sa'di adds their baghy, their overreach and transgression in the land, and calls the ruin the very outcome of it: this, he says, is the end their wrong came to. Al-Baghawi ties it to their zulm and their kufr together. Across all of them the sentence reads the same way. The wrong was not punished only from outside; it worked its way through from inside until the structure it had built had nothing left to stand on.",
            "bn": "জুলুমটা কী দিয়ে গড়া, তাফসীরকারেরা তা নাম ধরে বলেন। তাবারী ও মুয়াসসারের কাছে তা হলো আল্লাহর সঙ্গে শরিক করা আর রাসূলকে মিথ্যাবাদী বলা। সাদী এর সঙ্গে যোগ করেন তাদের বাগয, অর্থাৎ জমিনে সীমা ছাড়ানো আর বাড়াবাড়ি, আর এই ধ্বংসকে বলেন ঠিক তারই পরিণতি। তিনি বলেন, এটাই তাদের জুলুমের শেষ ঠিকানা। বাগাভী একে বাঁধেন তাদের জুলুম আর কুফর, দুটোকে একসঙ্গে। সবার কথা একই সুরে পড়া যায়। জুলুমের শাস্তি কেবল বাইরে থেকে আসেনি। সেটা ভেতর থেকে কাজ করে গেছে, শেষে যে কাঠামো তারা গড়েছিল তার দাঁড়ানোর মতো কিছুই রইল না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath, a Counter-Plan",
          "bn": "এক শপথ, এক পাল্টা কৌশল"
        },
        "p": [
          {
            "en": "To see whose ruins these are, step back a few verses. Ibn Kathir recounts that nine men, the leaders of Thamud, swore a mutual oath by Allah to fall on Salih (AS) and his household by night and kill them, then to tell his next of kin that they had witnessed nothing of the killing and were telling the truth. Mujahid said they took the oath to destroy him, yet were themselves destroyed, they and their people all together, before they could ever reach him.",
            "bn": "এগুলো কাদের ধ্বংসাবশেষ তা বুঝতে কয়েক আয়াত পিছিয়ে যান। ইবন কাসীর বর্ণনা করেন, ৯ জন লোক, সামূদের নেতারা, আল্লাহর নামে পরস্পর শপথ করেছিল রাতের বেলা সালিহ (আঃ) ও তাঁর পরিবারের উপর ঝাঁপিয়ে পড়ে তাদের হত্যা করবে, তারপর তাঁর অভিভাবককে বলবে তারা এই হত্যাকাণ্ডের কিছুই দেখেনি আর তারা সত্যবাদী। মুজাহিদ বলেন, তারা তাঁকে ধ্বংস করার শপথ নিয়েছিল, অথচ তাঁর কাছে পৌঁছানোর আগেই তারা নিজেরাই ধ্বংস হলো, তারা আর তাদের গোটা সম্প্রদায় একসঙ্গে।"
          },
          {
            "en": "The Qur'an sets their plan beside Allah's in a single breath: they plotted a plot, and We planned a plan, while they perceived not. Ibn Kathir carries a report that the nine went out to a cave near Salih's place of prayer, meaning to ambush him there and then go on to finish his family. Allah sent down upon them a rock that sealed the mouth of the cave while they were still inside. Their people did not know where they had gone, and the plotters did not know what had become of their people.",
            "bn": "কুরআন তাদের কৌশলকে আল্লাহর কৌশলের পাশে রাখে একই নিঃশ্বাসে: তারা এক চক্রান্ত করেছিল, আর আমিও এক কৌশল করেছিলাম, অথচ তারা টের পায়নি। ইবন কাসীর এমন এক বর্ণনা আনেন যে, ৯ জন সালিহর নামাজের জায়গার কাছে এক গুহায় গিয়েছিল, সেখানে তাঁকে ঘায়েল করে তারপর তাঁর পরিবারকে শেষ করার মতলবে। আল্লাহ তাদের উপর এক পাথর নামিয়ে দিলেন, যা গুহার মুখ বন্ধ করে দিল যখন তারা ভেতরে। তাদের সম্প্রদায় জানল না তারা কোথায় গেল, আর চক্রান্তকারীরা জানল না তাদের সম্প্রদায়ের কী হলো।"
          },
          {
            "en": "Whatever the exact detail of these reports, the frame they give the empty houses is itself the lesson. The ruin is not the record of bad luck arriving out of a clear sky. It is the record of a scheme that was sure of itself, certain it had covered every angle, met by a plan it never once saw coming. The houses are what that scheme left behind when it was done.",
            "bn": "এসব বর্ণনার খুঁটিনাটি যা-ই হোক, তারা খালি ঘরগুলোকে যে কাঠামোয় বসায়, সেটাই শিক্ষা। এই ধ্বংস পরিষ্কার আকাশ থেকে নেমে আসা দুর্ভাগ্যের হিসাব নয়। এটি এমন এক ফন্দির হিসাব, যে নিজের উপর নিশ্চিত ছিল, ভেবেছিল সব দিক সামলে রেখেছে, অথচ এমন এক কৌশলের মুখে পড়ল যা সে একবারও আসতে দেখেনি। সেই ফন্দি শেষ হয়ে গেলে পেছনে যা থেকে গেল, এই ঘরগুলো তা-ই।"
          }
        ]
      },
      {
        "h": {
          "en": "Clipping the Silver Coins",
          "bn": "রুপার মুদ্রা কেটে নেওয়া"
        },
        "p": [
          {
            "en": "One detail in Ibn Kathir's comment is worth pausing on. When the Qur'an calls the nine men those who caused corruption in the land and would not reform, he reports from 'Ata ibn Abi Rabah that they \"used to break silver coins,\" clipping pieces off them before passing them on. He adds, from Sa'id ibn al-Musayyib, that cutting gold and silver coins is itself part of spreading corruption on the earth. What is meant, Ibn Kathir says, is that it was these men's nature to corrupt by every means they could find.",
            "bn": "ইবন কাসীরের আলোচনার একটি খুঁটিনাটিতে একটু থামা দরকার। কুরআন যখন ৯ জনকে বলে, যারা দেশে ফাসাদ সৃষ্টি করত আর সংশোধন করত না, তখন তিনি আতা ইবন আবি রাবাহ থেকে বর্ণনা করেন যে তারা 'রুপার মুদ্রা কেটে নিত', হাতবদলের আগে তা থেকে টুকরো ছেঁটে ফেলত। তিনি সাঈদ ইবনুল মুসাইয়িব থেকে যোগ করেন, সোনা-রুপার মুদ্রা কাটা নিজেই জমিনে ফাসাদ ছড়ানোর অংশ। ইবন কাসীর বলেন, এর মানে এই লোকগুলোর স্বভাবই ছিল যত পথ পায় তত পথেই নষ্ট করা।"
          },
          {
            "en": "It is a striking way to read fasad. The great crime of this people was slaughtering the she-camel and plotting murder, yet the corruption is traced right down to the quiet shaving of coins in a marketplace. Wrong on the scale that empties a whole city does not arrive all at once. It grows out of small dishonesties that a person lets pass because each looks too minor to matter. The houses fell in the end because of a direction the people were already walking in long before.",
            "bn": "ফাসাদকে পড়ার এটা এক চমকপ্রদ পথ। এই সম্প্রদায়ের বড় অপরাধ ছিল উটনীকে জবাই করা আর হত্যার চক্রান্ত, তবু ফাসাদের সূত্র টানা হয়েছে ঠিক নিচে, বাজারে চুপচাপ মুদ্রা ছাঁটা পর্যন্ত। যে মাপের অন্যায় গোটা শহর খালি করে দেয়, তা একবারে এসে পড়ে না। তা বেড়ে ওঠে ছোট ছোট অসততা থেকে, যেগুলো মানুষ পাত্তা দেয় না, কারণ প্রতিটিকে মনে হয় এতই তুচ্ছ যে ধরার মতো নয়। ঘরগুলো শেষে ভাঙল এমন এক পথে চলার কারণে, যে পথে সম্প্রদায়টি অনেক আগে থেকেই হাঁটছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Sign Is For",
          "bn": "নিদর্শনটি কাদের জন্য"
        },
        "p": [
          {
            "en": "Inna fi dhalika la-ayatan li-qawmin ya'lamun: indeed in that is a sign for people who know. The ruin is called an aya, the very word the Qur'an uses for its own verses and for a miracle. A thing standing in the world is meant to be read like a line of scripture. Al-Baghawi says the sign is for a people who know Our power. At-Tabari makes it sharper still: it is a lesson and a warning for those who know what We did to Thamud, meaning the people of Muhammad ﷺ, who were belying him just as Thamud had belied Salih (AS).",
            "bn": "ইন্না ফী যালিকা লাআয়াতান লিকাওমিন ইয়ালামূন: নিশ্চয় এতে জ্ঞানী সম্প্রদায়ের জন্য নিদর্শন আছে। ধ্বংসস্তূপকে বলা হয়েছে আয়াত, কুরআন যে শব্দ নিজের আয়াত আর মুজিজার জন্য ব্যবহার করে ঠিক সেই শব্দ। দুনিয়ায় দাঁড়িয়ে থাকা কোনো জিনিস যেন কিতাবের এক লাইনের মতো পড়ার জন্যই রাখা। বাগাভী বলেন, নিদর্শনটি সেই সম্প্রদায়ের জন্য যারা আমার কুদরত জানে। তাবারী কথাটাকে আরও ধারালো করেন: এটি শিক্ষা আর সতর্কবার্তা তাদের জন্য যারা জানে আমি সামূদের সঙ্গে কী করেছি, অর্থাৎ মুহাম্মদ ﷺ-এর সম্প্রদায়, যারা তাঁকে মিথ্যা বলছিল ঠিক যেমন সামূদ সালিহ (আঃ)-কে মিথ্যা বলেছিল।"
          },
          {
            "en": "As-Sa'di draws the condition out further. The sign, he says, is for a people who know the realities and ponder Allah's dealings with His friends and with His enemies, and so take the lesson, coming to know that the end of wrongdoing is ruin and destruction. A ruin is silent to the crowd that walks past it without looking. It becomes a sign only to the person who stops, reads it, and lets what it says change how he weighs his own road home.",
            "bn": "সাদী শর্তটাকে আরও খুলে আনেন। তিনি বলেন, নিদর্শনটি সেই সম্প্রদায়ের জন্য যারা সত্যগুলো জানে, আর আল্লাহ তাঁর বন্ধু ও শত্রুদের সঙ্গে যা করেন তা নিয়ে গভীরভাবে ভাবে, এভাবে শিক্ষা নেয় আর বুঝে নেয় যে জুলুমের শেষ হলো ধ্বংস আর বিনাশ। যে ভিড় না তাকিয়ে পাশ দিয়ে চলে যায়, তাদের কাছে ধ্বংসস্তূপ নীরব। এটি নিদর্শন হয়ে ওঠে কেবল তার কাছে, যে থামে, পড়ে, আর সেটি যা বলে তাকে নিজের পথ মাপার মাপকাঠি বদলে দিতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Passing Through Weeping",
          "bn": "কাঁদতে কাঁদতে পার হওয়া"
        },
        "p": [
          {
            "en": "The Prophet's own conduct showed what it looks like to read these ruins rightly. Muslim records from 'Abdullah ibn 'Umar that, as they passed with the Messenger of Allah ﷺ through al-Hijr, the dwellings of Thamud, he said, \"Do not enter upon the dwellings of those who wronged themselves except weeping, lest there befall you the like of what befell them,\" and then he urged his mount on and hurried until he had left the valley behind him. The report is in Sahih Muslim, the collection its author confined to what he held to be sound.",
            "bn": "এই ধ্বংসাবশেষ ঠিকভাবে পড়া কেমন, নবী ﷺ-এর নিজের আচরণই তা দেখিয়েছে। মুসলিম আবদুল্লাহ ইবন উমর (রাঃ) থেকে বর্ণনা করেন, তাঁরা যখন রাসূলুল্লাহ ﷺ-এর সঙ্গে হিজর, অর্থাৎ সামূদের বাসস্থানের পাশ দিয়ে যাচ্ছিলেন, তখন তিনি বললেন, 'যারা নিজেদের উপর জুলুম করেছে তাদের বাসস্থানে কাঁদতে কাঁদতে ছাড়া ঢুকো না, পাছে তাদের যা হয়েছিল তেমন কিছু তোমাদেরও হয়', তারপর তিনি তাঁর বাহনকে তাড়া দিলেন আর দ্রুত এগিয়ে গেলেন যতক্ষণ না উপত্যকাটা পেছনে ফেলে এলেন। বর্ণনাটি সহীহ মুসলিমে আছে, যে সংকলনকে এর লেখক কেবল তাঁর কাছে সহীহ বলে বিবেচিত বর্ণনাতেই সীমাবদ্ধ রেখেছিলেন।"
          },
          {
            "en": "Notice how exactly the hadith meets the verse. The Qur'an says the houses are empty bi-ma zalamu, by the wrong they did; the Prophet ﷺ calls their people alladhina zalamu anfusahum, those who wronged their own selves, the very same word. And his response to the ruins was not to study them coolly from a distance but to weep and to move through quickly, the way a man moves past a warning he has taken fully to heart. The sign was read, and the reading of it changed his pace.",
            "bn": "খেয়াল করুন, হাদিসটি কত হুবহু আয়াতের সঙ্গে মিলে যায়। কুরআন বলে ঘরগুলো খালি বিমা জালামূ, তাদের করা জুলুমের কারণে। নবী ﷺ তাদের সম্প্রদায়কে বলেন আল্লাযীনা জালামূ আনফুসাহুম, যারা নিজেদের উপর জুলুম করেছে, ঠিক একই শব্দ। আর ধ্বংসাবশেষের প্রতি তাঁর সাড়া ছিল না দূর থেকে ঠান্ডা মাথায় সেগুলো পর্যবেক্ষণ করা। তিনি কাঁদলেন আর দ্রুত পার হয়ে গেলেন, যেভাবে মানুষ এমন এক সতর্কবাণী পেরিয়ে যায় যা সে মন থেকে মেনে নিয়েছে। নিদর্শনটি পড়া হলো, আর সেই পড়াই তাঁর চলার গতি বদলে দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Saved and the Ruined",
          "bn": "যারা বাঁচল, যারা ধ্বংস হলো"
        },
        "p": [
          {
            "en": "The verse right after the ruins turns toward mercy: and We saved those who believed and were mindful of Allah (27:53). As-Sa'di had already set this up, saying that the one who ponders Allah's dealings learns both halves of the lesson at once, that the end of wrongdoing is ruin, and that the end of faith and justice is deliverance and triumph. The empty houses are only one half of the sign. The other half walked out of that valley alive, and the next verse names them, so the warning is never left standing as only a threat.",
            "bn": "ধ্বংসস্তূপের ঠিক পরের আয়াতটি রহমতের দিকে মোড় নেয়: আর যারা ঈমান এনেছিল ও আল্লাহকে ভয় করত তাদের আমি রক্ষা করেছিলাম (২৭:৫৩)। সাদী আগেই এটি গুছিয়ে রেখেছিলেন, বলেছিলেন, যে আল্লাহর কাজকারবার নিয়ে ভাবে সে শিক্ষার দুই অংশই একসঙ্গে পায়: জুলুমের শেষ ধ্বংস, আর ঈমান ও ইনসাফের শেষ মুক্তি ও সফলতা। খালি ঘরগুলো নিদর্শনের একটি অংশ মাত্র। অন্য অংশটি সেই উপত্যকা থেকে জীবিত বেরিয়ে এসেছিল, আর পরের আয়াত তাদের নাম ধরে বলে, যাতে সতর্কবাণী কখনো নিছক হুমকি হয়ে না থাকে।"
          },
          {
            "en": "One thing has to be said plainly. This verse reports what became of Thamud, a people the Qur'an itself condemns for their wrong, and it licenses nothing against any living person or community. Ruins warn the living; they do not arm anyone to sit in judgement over a neighbour, a family, or a people as though they were Thamud. The sign points inward, not outward. It asks the one who reads it what he himself is building, and on what, and whether what he is raising would stand if the ground under it were ever truly tested.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। এই আয়াত সামূদের পরিণতির বর্ণনা দেয়, যে সম্প্রদায়কে কুরআন নিজেই তাদের জুলুমের জন্য নিন্দা করেছে, আর এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। ধ্বংসাবশেষ জীবিতদের সতর্ক করে। প্রতিবেশী, পরিবার বা কোনো সম্প্রদায়কে সামূদ ধরে নিয়ে তাদের বিচারে বসার অস্ত্র এটি কাউকে দেয় না। নিদর্শনটি ভেতরের দিকে আঙুল তোলে, বাইরের দিকে নয়। যে পড়ে, তাকে জিজ্ঞেস করে সে নিজে কী গড়ছে, কীসের উপর গড়ছে, আর যা তুলছে তার নিচের জমিন সত্যিই পরীক্ষিত হলে সেটা দাঁড়িয়ে থাকবে কি না।"
          }
        ]
      }
    ]
  },
  "27:54": {
    "sections": [
      {
        "h": {
          "en": "Lot Among the Signs",
          "bn": "নিদর্শনের সারিতে লূত"
        },
        "p": [
          {
            "en": "This verse opens the story of Lot within Sūrat an-Naml, set down just after the account of Thamūd and the schemers of their city. The scene now shifts. And remember Lot, when he said to his people. At-Tabari reads the opening words as We sent Lot to his people, when he said to them, O my people. Al-Qurtubi tells us who those people were: they were the people of Sodom. To them Lot puts a single question, and the whole of 27:54 is that question and nothing else.",
            "bn": "সূরা নমলের ভেতরে লূত (আঃ)-এর কাহিনি শুরু হয় এই আয়াত দিয়ে, সামূদ জাতি আর তাদের শহরের ষড়যন্ত্রকারীদের বৃত্তান্তের ঠিক পরেই। এবার দৃশ্য বদলে যায়। আর স্মরণ কর লূতকে, যখন সে তার সম্প্রদায়কে বলল। তাবারী শুরুর কথাগুলো পড়েন এভাবে: আমি লূতকে তার সম্প্রদায়ের কাছে পাঠিয়েছিলাম, যখন সে তাদের বলল, হে আমার সম্প্রদায়। কুরতুবী জানান এই সম্প্রদায় কারা ছিল: তারা ছিল সদোম নগরের অধিবাসী। তাদের কাছে লূত একটিমাত্র প্রশ্ন রাখেন, আর গোটা ২৭:৫৪ আয়াত সেই প্রশ্ন ছাড়া আর কিছুই নয়।"
          },
          {
            "en": "The question runs: Do you commit the immorality while you are seeing? Ibn Kathir and at-Tabari agree on the deed named here as the fāḥisha, the approaching of males instead of females, which, they say, none among the children of Adam had done before this people. Eight Arabic words carry the whole charge, and its sharpest word is the last, tubṣirūn, while you see. Lot is not only forbidding; he is asking how a thing this plainly wrong can be done by people whose eyes are wide open. Every commentary we have turns on that final verb.",
            "bn": "প্রশ্নটি এই: তোমরা কি দেখে-শুনে এই অশ্লীল কাজ কর? এখানে যাকে ফাহিশা বলা হয়েছে সেই কাজটি নিয়ে ইবন কাসীর ও তাবারী একমত, তা হলো নারীদের বদলে পুরুষদের কাছে যাওয়া। তাঁদের মতে, আদম সন্তানদের মধ্যে কেউই এই সম্প্রদায়ের আগে এ কাজ করেনি। আটটি আরবি শব্দ গোটা অভিযোগটি বহন করে, আর এর সবচেয়ে ধারালো শব্দ শেষেরটি, তুবসিরূন, অর্থাৎ দেখতে দেখতে। লূত শুধু নিষেধই করছেন না; তিনি জিজ্ঞেস করছেন, এত স্পষ্ট একটা অন্যায় কী করে এমন লোকেরা করতে পারে যাদের চোখ খোলা। আমাদের হাতে থাকা প্রতিটি তাফসীর ওই শেষ ক্রিয়ার উপরেই আবর্তিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Final Verb",
          "bn": "শেষ ক্রিয়ার দুই পাঠ"
        },
        "p": [
          {
            "en": "The commentators split the verb tubṣirūn two ways, and the split is worth keeping as a real difference. The first reading takes it inwardly: while you see means while you perceive and know that this is a vile deed. At-Tabari, al-Baghawi and al-Muyassar all read it so; the Muyassar renders the phrase while you know its ugliness. On this reading the eye that sees is the eye of understanding, and the charge is that the people sinned with full knowledge of what they were doing.",
            "bn": "তাফসীরকারেরা তুবসিরূন ক্রিয়াটিকে দুই ভাবে বোঝেন, আর এই ভিন্নতাটুকু আসল পার্থক্য হিসেবে ধরে রাখার মতো। প্রথম পাঠটি একে ভেতরের দিক থেকে নেয়: দেখে-শুনে মানে তোমরা বুঝতে পারছ ও জানছ যে এটা এক জঘন্য কাজ। তাবারী, বাগভী আর মুয়াসসার সবাই এভাবেই পড়েন; মুয়াসসার কথাটিকে দেন এভাবে, তোমরা এর কুৎসিততা জানতে জানতে। এই পাঠে যে চোখ দেখছে তা বোঝার চোখ, আর অভিযোগটা হলো, লোকেরা পুরোপুরি জেনেবুঝেই গুনাহ করছিল।"
          },
          {
            "en": "The second reading takes it outwardly. Al-Qurtubi and al-Baghawi both report it with the words it is said: that while you see means you see each other, every man watching his neighbour, doing this in the open and in company. Al-Qurtubi adds that they would not even conceal themselves, out of sheer insolence and defiance. Ibn Kathir joins the two pictures: you see each other, he writes, and you commit the evil openly in your gatherings. So the first reading faults their knowledge, the second their shamelessness, and the verse holds room for both.",
            "bn": "দ্বিতীয় পাঠটি একে বাইরের দিক থেকে দেখে। কুরতুবী ও বাগভী দুজনেই 'বলা হয়েছে' কথাটি দিয়ে এটি উল্লেখ করেন: দেখে-শুনে মানে তোমরা একে অপরকে দেখছ, প্রত্যেকে পাশের জনের দিকে তাকিয়ে, প্রকাশ্যে আর দলবেঁধে এ কাজ করছ। কুরতুবী আরও বলেন, নিছক ঔদ্ধত্য আর নাফরমানির কারণে তারা নিজেদের আড়ালও করত না। ইবন কাসীর দুটি ছবিকে একসঙ্গে আনেন: তোমরা একে অপরকে দেখছ, তিনি লেখেন, আর নিজেদের জমায়েতে প্রকাশ্যে অন্যায় করছ। তাই প্রথম পাঠ তাদের জ্ঞানকে দায়ী করে, দ্বিতীয় পাঠ তাদের নির্লজ্জতাকে, আর আয়াত দুটি অর্থকেই ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing That It Is Vile",
          "bn": "দেখেও যে অন্যায়"
        },
        "p": [
          {
            "en": "Follow the first reading further, for it carries a hard idea. At-Tabari explains while you see as while you perceive that it is an immorality, and he grounds that perception in a fact: you know that none came to this before you. The deed is not something they drifted into by custom or inheritance; they are its inventors, and they know it. Al-Qurtubi presses the point into a verdict. Because they see that it is a fāḥisha, he writes, their sin is the greater for it. Knowledge does not lighten the offence here; it weighs it down.",
            "bn": "প্রথম পাঠটা আরেকটু অনুসরণ করুন, কারণ এতে এক কঠিন ভাবনা লুকিয়ে আছে। তাবারী দেখে-শুনে কথাটি বোঝান এভাবে, তোমরা বুঝতে পারছ যে এটা এক অশ্লীলতা, আর এই বোঝাকে তিনি একটি সত্যের উপর দাঁড় করান: তোমরা জানো, এর আগে কেউ এ কাজে আসেনি। এ কাজ তারা রীতি বা উত্তরাধিকার সূত্রে ভেসে ভেসে পায়নি; তারাই এর উদ্ভাবক, আর তা তারা জানে। কুরতুবী কথাটিকে এক রায়ে পরিণত করেন। তারা যেহেতু দেখছে যে এটা ফাহিশা, তিনি লেখেন, এ কারণে তাদের গুনাহ আরও বড়। এখানে জ্ঞান অপরাধকে হালকা করে না; বরং ভারী করে তোলে।"
          },
          {
            "en": "As-Sa'di gathers the same reading into its fullest form. He calls the deed the hideous act that sound minds and the upright nature recoil from, and that every revealed law has judged ugly. Then, of while you see, he says: you see that, and you know its ugliness, and still you set yourselves against the truth and committed it, out of wrongdoing on your part and brazenness towards Allah. Three things stand in that sentence. The wrong was known. It was chosen against knowledge. And the choice was not weakness but defiance aimed, in the end, at God Himself.",
            "bn": "সা'দী একই পাঠকে তার পূর্ণতম রূপে জড়ো করেন। তিনি কাজটিকে বলেন সেই কুৎসিত কাণ্ড, সুস্থ বিবেক আর সরল স্বভাব যা থেকে পিছিয়ে যায়, আর প্রতিটি নাযিলকৃত শরীয়ত যাকে জঘন্য বলে রায় দিয়েছে। তারপর দেখে-শুনে প্রসঙ্গে তিনি বলেন: তোমরা তা দেখছ, এর কুৎসিততা জানছ, তবু সত্যের বিরুদ্ধে গোঁ ধরে তা করে বসেছ, নিজেদের জুলুম থেকে আর আল্লাহর সামনে ধৃষ্টতা থেকে। এই এক বাক্যে তিনটি জিনিস দাঁড়িয়ে আছে। অন্যায়টা জানা ছিল। জেনেশুনেই তা বেছে নেওয়া হয়েছে। আর সেই বেছে নেওয়া দুর্বলতা নয়, বরং শেষ বিচারে স্বয়ং আল্লাহর দিকেই তাক করা নাফরমানি।"
          },
          {
            "en": "Al-Baghawi states the plain version of this reading: while you see means you know that it is an immorality. The Muyassar says it almost identically, while you know its ugliness, and then names the result, that they thereby opposed Allah's command and disobeyed His messenger. Put together, these commentators describe a particular kind of sin, the kind done by a person who could give you, if asked, an accurate account of exactly what is wrong with it. That is the sin the first reading exposes: not blindness, but a clear sight that changes nothing in the hand.",
            "bn": "বাগভী এই পাঠের সোজা রূপটি বলেন: দেখে-শুনে মানে তোমরা জানো যে এটা এক অশ্লীলতা। মুয়াসসার প্রায় একই কথা বলেন, তোমরা এর কুৎসিততা জানতে জানতে, আর তারপর ফলটাও নাম ধরে বলেন, এর দ্বারা তারা আল্লাহর হুকুমের বিরোধিতা করল আর তাঁর রাসূলের নাফরমানি করল। সব মিলিয়ে এই তাফসীরকারেরা এক বিশেষ ধরনের গুনাহের ছবি আঁকেন, যে গুনাহ এমন একজন করে যে জিজ্ঞেস করলে আপনাকে ঠিকঠাক বলে দিতে পারবে এতে ঠিক কী দোষ। প্রথম পাঠ এই গুনাহকেই সামনে আনে: অন্ধত্ব নয়, বরং এমন স্পষ্ট দৃষ্টি যা হাতের কাজে কিছুই বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sin Without a Curtain",
          "bn": "পর্দাহীন গুনাহ"
        },
        "p": [
          {
            "en": "The second reading looks at where the deed was done, not only at what was known. Al-Qurtubi's it is said has it that they did this within sight of each other, each looking on. And he adds the detail that fixes the picture: they would not screen themselves from view, out of insolence and rebellion. Al-Baghawi reports the same, in nearly the same words, that they saw each other and would not hide, out of sheer defiance. A wrong that once at least sought the dark had, in them, stopped bothering to.",
            "bn": "দ্বিতীয় পাঠ শুধু কী জানা ছিল তা নয়, কাজটা কোথায় করা হতো সেদিকেও তাকায়। কুরতুবীর 'বলা হয়েছে' অনুসারে তারা একে অপরের চোখের সামনেই এটা করত, প্রত্যেকে তাকিয়ে থাকত। আর তিনি সেই খুঁটিনাটিটা জুড়ে দেন যা ছবিটাকে থিতু করে: ঔদ্ধত্য আর বিদ্রোহের কারণে তারা নিজেদের আড়াল করত না। বাগভী প্রায় একই ভাষায় একই কথা বলেন, তারা একে অপরকে দেখত আর লুকাত না, নিছক নাফরমানি থেকে। যে অন্যায় একসময় অন্তত অন্ধকার খুঁজত, তাদের মধ্যে তা আর সেই কষ্টটুকুও করত না।"
          },
          {
            "en": "Ibn Kathir carries this furthest. Commenting on while you see, he writes that each of them saw the other, and he glosses the scene in a telling phrase: and you commit the evil in your assembly. The word he uses is nādī, the public gathering, the council where a town does its business in full view. A sin had moved out of the private room and into the meeting hall. It was no longer a thing done and then regretted, but a thing done and displayed, before an audience that neither looked away nor objected to it.",
            "bn": "ইবন কাসীর একে সবচেয়ে দূর পর্যন্ত নিয়ে যান। দেখে-শুনে প্রসঙ্গে তিনি লেখেন, তাদের প্রত্যেকে অন্যকে দেখত, আর দৃশ্যটাকে তিনি এক তাৎপর্যপূর্ণ কথায় ধরেন: আর তোমরা তোমাদের মজলিসে এই অন্যায় কর। তিনি যে শব্দটি ব্যবহার করেন তা নাদী, অর্থাৎ প্রকাশ্য জমায়েত, সেই মজলিস যেখানে একটা জনপদ সবার চোখের সামনে নিজের কাজকারবার সারে। গুনাহ তখন ঘরের কোণ থেকে বেরিয়ে মজলিসের মাঝখানে চলে এসেছে। তা আর এমন কিছু ছিল না যা করে পরে আফসোস হয়, বরং এমন কিছু যা করে দেখানো হয়, এমন শ্রোতার সামনে যারা না চোখ সরাত, না আপত্তি করত।"
          }
        ]
      },
      {
        "h": {
          "en": "When Shame Departs",
          "bn": "লজ্জা যখন চলে যায়"
        },
        "p": [
          {
            "en": "None of the commentaries gathered for this verse attaches a hadith to it, and that is worth saying plainly rather than filling the gap with a weak report. But the second reading, the reading about sinning in the open, meets a theme the Prophet ﷺ spoke of often: ḥayāʾ, the sense of shame that makes a person recoil from the ugly. The people of Lot had lost exactly this. Their defiance was not only of a law outside them; it was the silencing of a guard within, the inner reluctance that makes a wrong seek cover in the first place.",
            "bn": "এই আয়াতের জন্য জড়ো করা কোনো তাফসীরই এর সঙ্গে কোনো হাদীস জুড়ে দেয় না, আর দুর্বল কোনো বর্ণনা দিয়ে শূন্যস্থানটা ভরাট না করে কথাটা সোজাসুজি বলে নেওয়াই ভালো। তবে দ্বিতীয় পাঠ, প্রকাশ্যে গুনাহ করা নিয়ে যে পাঠ, নবী ﷺ-এর বারবার বলা একটি বিষয়ের সঙ্গে মেলে: হায়া, সেই লজ্জাবোধ যা মানুষকে কুৎসিত জিনিস থেকে পিছিয়ে দেয়। লূতের সম্প্রদায় ঠিক এটাই হারিয়ে ফেলেছিল। তাদের নাফরমানি শুধু বাইরের কোনো আইনের বিরুদ্ধে ছিল না; তা ছিল ভেতরের এক প্রহরীকে চুপ করিয়ে দেওয়া, সেই ভেতরকার দ্বিধা যা প্রথমেই অন্যায়কে আড়াল খুঁজতে বাধ্য করে।"
          },
          {
            "en": "The Prophet ﷺ said, as al-Bukhari records in his Ṣaḥīḥ on the authority of Abu Mas'ud: Among the words people received from the earliest prophethood is this, if you feel no shame, then do as you wish. The wording is Bukhari's, and its soundness rests on his having placed it in the Ṣaḥīḥ; this is a general principle about ḥayāʾ, not a narration reported about the people of Lot. Read with our verse, its force is plain. Shame is the brake. Where it still works, a person hides a wrong, which at least concedes it is wrong.",
            "bn": "নবী ﷺ বলেছেন, যেমনটি বুখারী তাঁর সহীহ গ্রন্থে আবু মাসঊদ (রাঃ) থেকে বর্ণনা করেন: আগের নবুয়তের বাণী থেকে মানুষ যা পেয়েছে তার একটি হলো, যদি তোমার লজ্জা না থাকে, তবে যা খুশি করো। শব্দগুলো বুখারীর, আর এর সহীহ হওয়া নির্ভর করছে তিনি একে তাঁর সহীহতে স্থান দিয়েছেন তার উপর; এটি হায়া নিয়ে একটি সাধারণ নীতিবাক্য, লূতের সম্প্রদায় সম্পর্কে বর্ণিত কোনো হাদীস নয়। আমাদের আয়াতের সঙ্গে পড়লে এর জোর স্পষ্ট হয়। লজ্জা হলো ব্রেক। যেখানে তা এখনো কাজ করে, সেখানে মানুষ অন্যায়কে লুকায়, আর তাতে অন্তত এটুকু মানা হয় যে কাজটা অন্যায়।"
          },
          {
            "en": "Take the brake away, and the sequence the second reading described follows on its own. First the wrong is done in private, with some unease. Then the unease wears thin, and it is done without it. Then, with nothing left to make it hide, it is done in the open, in the assembly, as the people of Lot did. The hadith names the end of that road without flinching: when shame is gone, nothing fences off conduct any longer, and a person simply does as he wishes. The verse shows a people who had arrived there.",
            "bn": "ব্রেকটা সরিয়ে নিন, তাহলে দ্বিতীয় পাঠে বর্ণিত ধাপগুলো নিজে থেকেই চলে আসে। প্রথমে অন্যায়টা গোপনে করা হয়, খানিকটা অস্বস্তি নিয়ে। তারপর অস্বস্তিটা ক্ষয়ে যায়, আর তা ছাড়াই কাজটা হয়। তারপর লুকানোর আর কোনো তাগিদ না থাকায় তা প্রকাশ্যে হয়, মজলিসে হয়, যেমনটা লূতের সম্প্রদায় করত। হাদীসটি সেই পথের শেষ মাথা নির্দ্বিধায় নাম ধরে বলে: লজ্জা চলে গেলে আর কিছুই আচরণকে ঘিরে বেড়া দেয় না, মানুষ কেবল যা খুশি তাই করে। আয়াতটি এমন এক সম্প্রদায়কে দেখায় যারা সেখানেই পৌঁছে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Conduct, Not a People",
          "bn": "আচরণ, কোনো জাতি নয়"
        },
        "p": [
          {
            "en": "This needs saying as plainly as the verse itself speaks. What the verse condemns is a conduct, the fāḥisha, as the Qur'an frames it; it is not a verdict handed to anyone on a modern social category, and not a charge against any living person or community. The commentators here describe what the text describes, a people and their deeds, and the account licenses nothing against anyone alive today. No reader is given a slur to use, a caricature to repeat, or a person to accuse. To treat the verse as permission for any of that is to misread it.",
            "bn": "কথাটা আয়াত যতটা সোজাসুজি বলে, ততটাই সোজাসুজি বলা দরকার। আয়াত যার নিন্দা করছে তা একটি আচরণ, সেই ফাহিশা, কুরআন যেভাবে একে ধরে; এটি কোনো আধুনিক সামাজিক শ্রেণির উপর বসানো কোনো রায় নয়, আর আজ বেঁচে থাকা কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো অভিযোগও নয়। এখানকার তাফসীরকারেরা যা লেখা আছে তা-ই বর্ণনা করেন, একটি সম্প্রদায় আর তাদের কাজ, আর এই বৃত্তান্ত আজ জীবিত কারও বিরুদ্ধে কিছুরই অনুমতি দেয় না। কোনো পাঠককে ব্যবহার করার মতো কটূক্তি, ছড়ানোর মতো বিদ্রূপ, কিংবা অভিযুক্ত করার মতো কোনো মানুষ দেওয়া হয়নি। আয়াতকে এসবের অনুমতি ভাবা মানে একে ভুল পড়া।"
          },
          {
            "en": "And whatever judgement the deed deserves is not the reader's to carry out. In Islam a matter like this belongs to Allah, who alone knows and alone requites, and, in this world, to lawful authority acting under due process, never to private hands. The verse gives no warrant for anyone to threaten, expose, harm or take the law upon a neighbour. Lot himself only spoke and warned; he raised a question, not a mob. The dignity every human being is owed stands untouched by this passage. What it asks of me is to look honestly at my own open-eyed wrongs, not to hunt for someone else's.",
            "bn": "আর কাজটি যে বিচারই দাবি করুক, তা কার্যকর করা পাঠকের কাজ নয়। ইসলামে এমন বিষয় আল্লাহরই হাতে, যিনি একাই জানেন আর একাই প্রতিফল দেন, আর এ দুনিয়ায় তা যথাযথ বিচারপ্রক্রিয়ার অধীনে কাজ করা বৈধ কর্তৃপক্ষের হাতে, কখনোই ব্যক্তির নিজের হাতে নয়। প্রতিবেশীকে হুমকি দেওয়া, ফাঁস করা, ক্ষতি করা বা তার উপর নিজে আইন তুলে নেওয়া, কোনো কিছুরই অনুমতি এ আয়াত দেয় না। লূত নিজে কেবল বলেছিলেন আর সতর্ক করেছিলেন; তিনি একটি প্রশ্ন তুলেছিলেন, কোনো জনতা জড়ো করেননি। প্রতিটি মানুষের প্রাপ্য মর্যাদা এ আয়াতে অক্ষতই থাকে। আয়াত আমার কাছে যা চায় তা হলো নিজের দেখে-শুনে করা অন্যায়গুলোর দিকে সৎভাবে তাকানো, অন্য কারও অন্যায় খুঁজে বেড়ানো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Eye That Is Watched",
          "bn": "যে চোখ নিজেও দেখা হয়"
        },
        "p": [
          {
            "en": "Hold the two readings together and a single thought appears. The people saw, by knowledge and by eye; they knew the deed and they watched each other do it. But a question hides inside their seeing: if they could see, who was seeing them? As-Sa'di had already named their fault as brazenness towards Allah, and brazenness assumes a presence one is being brazen before. The verse speaks of eyes that were open to everything except the one gaze that mattered. They watched one another and forgot that they themselves were watched.",
            "bn": "দুটি পাঠকে একসঙ্গে ধরলে একটি ভাবনা ফুটে ওঠে। লোকেরা দেখত, জ্ঞানে আর চোখে দুভাবেই; তারা কাজটা জানত আর একে অপরকে তা করতে দেখত। কিন্তু তাদের এই দেখার ভেতরে একটা প্রশ্ন লুকিয়ে: তারা যদি দেখতে পারত, তবে তাদের দেখছিল কে? সা'দী আগেই তাদের দোষকে বলেছিলেন আল্লাহর সামনে ধৃষ্টতা, আর ধৃষ্টতা মানেই এমন একজনের উপস্থিতি ধরে নেওয়া যাঁর সামনে ধৃষ্টতা করা হচ্ছে। আয়াত এমন চোখের কথা বলে যা সব কিছুর প্রতি খোলা ছিল, কেবল একমাত্র যে দৃষ্টি আসল ছিল তা ছাড়া। তারা একে অপরকে দেখত, আর ভুলে যেত যে তারা নিজেরাই দেখা হচ্ছিল।"
          },
          {
            "en": "This is where the verse stops being about them and starts being about the reader. Every sin I commit, I commit while seeing, in both of the verse's senses: I know what it is, and I do it before a Witness who never looks away. The people of Lot are an extreme, a people who had silenced even the shame of other men's eyes. Most of us are not there. But the smaller version is near at hand whenever I do a known wrong and comfort myself that no one saw, having forgotten the only Seer whose sight is never absent.",
            "bn": "এখানেই আয়াত তাদের নিয়ে থেমে পাঠকের কথা বলতে শুরু করে। আমি যে গুনাহই করি, তা করি দেখে-শুনেই, আয়াতের দুই অর্থেই: আমি জানি এটা কী, আর আমি তা করি এমন এক সাক্ষীর সামনে যিনি কখনো চোখ সরান না। লূতের সম্প্রদায় এক চরম উদাহরণ, যে সম্প্রদায় অন্য মানুষের চোখের লজ্জাটুকুও চুপ করিয়ে দিয়েছিল। আমাদের বেশিরভাগ ততটা দূর যাইনি। কিন্তু ছোট সংস্করণটা হাতের কাছেই থাকে, যখনই আমি কোনো জানা অন্যায় করি আর নিজেকে সান্ত্বনা দিই যে কেউ তো দেখেনি, সেই একমাত্র দ্রষ্টাকে ভুলে যাঁর দৃষ্টি কখনো অনুপস্থিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Question Home",
          "bn": "প্রশ্নটা নিজের ঘরে"
        },
        "p": [
          {
            "en": "So the verse hands me Lot's question, with my own name in it. Do you commit the wrong while you see? The sins I should fear most are not the ones I fall into unawares, but the ones I walk toward with open eyes, having first talked myself past something I already knew. I call a clear thing unclear so I can keep doing it. I promise to stop later. I tell myself this once does not count. Each of these is a small exercise in sinning while seeing, and the verse names it for what it is.",
            "bn": "তাই আয়াত আমার হাতে লূতের সেই প্রশ্নটা তুলে দেয়, যাতে আমার নিজের নাম বসানো। তুমি কি দেখে-শুনে অন্যায় কর? যে গুনাহগুলোকে আমার সবচেয়ে বেশি ভয় পাওয়া উচিত, সেগুলো না-জেনে পড়ে যাওয়া গুনাহ নয়, বরং সেগুলো যেদিকে আমি খোলা চোখে এগিয়ে যাই, আগে নিজেকে বুঝিয়ে যা আগে থেকেই জানতাম তা পাশ কাটিয়ে। স্পষ্ট জিনিসকে অস্পষ্ট বলি, যাতে করে যেতে পারি। পরে ছাড়ব বলে কথা দিই। নিজেকে বলি, এবারেরটা ধরা হবে না। এর প্রতিটিই দেখে-শুনে গুনাহ করার ছোট্ট মহড়া, আর আয়াত একে তার আসল নামেই ডাকে।"
          },
          {
            "en": "The people in the story did not stop, and the sūra goes on to tell what came of them. That ending is not mine to borrow as a threat against anyone. What is mine is the warning folded into the question itself, before any punishment is named: a wrong seen clearly and done anyway is the heaviest kind, and the shame that would once have hidden it is worth guarding as a mercy. The honest answer to are you doing it while you see is often yes. The verse asks it so that, this time, I might stop.",
            "bn": "কাহিনির লোকেরা থামেনি, আর সূরা এরপর বলে চলে তাদের পরিণতি কী হলো। সেই পরিণতি ধার করে কারও বিরুদ্ধে হুমকি বানানো আমার কাজ নয়। আমার কাজ হলো প্রশ্নটার ভেতরেই ভাঁজ করা সতর্কবাণী, কোনো শাস্তির নাম আসার আগেই: স্পষ্ট দেখে তবু করা অন্যায়ই সবচেয়ে ভারী ধরনের, আর যে লজ্জা একসময় একে লুকিয়ে রাখত তা রহমত জেনে আগলে রাখার মতো। তুমি কি দেখে-শুনে করছ, এর সৎ উত্তর প্রায়ই হ্যাঁ। আয়াত প্রশ্নটা করে এই আশায় যে এবার হয়তো আমি থামব।"
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
  },
  "27:67": {
    "sections": [
      {
        "h": {
          "en": "A Question Asked Twice",
          "bn": "প্রশ্নটি করা হলো দুবার"
        },
        "p": [
          {
            "en": "Wa-qala alladhina kafaru: and those who disbelieve say. Al-Qurtubi and al-Baghawi name the speakers as the polytheists of Makkah. What they say is a-idha kunna turaban wa-abauna a-inna la-mukhrajun: when we and our forefathers are dust, will we really be brought out? The Arabic carries two interrogative particles, one at the head and one in the middle, and that doubling is the point. This is not a single question but a question laid over a question, the tone of a man who finds the whole idea beneath a straight answer.",
            "bn": "ওয়া কালাল্লাযীনা কাফারু: আর যারা অবিশ্বাস করে তারা বলে। কুরতুবী ও বাগাভী উভয়েই বক্তাদের চিহ্নিত করেন মক্কার মুশরিক বলে। তারা বলে, আ-ইযা কুন্না তুরাবাঁও ওয়া আবাউনা আ-ইন্না লামুখরাজুন: আমরা আর আমাদের বাপ-দাদারা যখন মাটি হয়ে যাব, তখনো কি সত্যিই আমাদের বের করে তোলা হবে? আরবি বাক্যটিতে প্রশ্নবোধক শব্দ বসেছে দুটি, একটি বাক্যের শুরুতে আর একটি তার মাঝখানে। এই দুবার বসাটাই আসল কথা। এটা একটামাত্র প্রশ্ন নয়, প্রশ্নের উপর চাপানো আরেক প্রশ্ন। যে লোক গোটা ব্যাপারটাকে সোজা জবাবের অযোগ্য মনে করে, এ তারই সুর।"
          },
          {
            "en": "The early reciters differ over how to voice the line. Al-Baghawi and al-Qurtubi record that the readers of Madinah pronounced the first clause flat and only the second as a question, while others made both clauses questions, and a few read the second as a plain statement rather than a question at all. The grammarians argued the matter at length. But al-Qurtubi settles what the dispute does not touch: by whichever reading, the sense underneath is inkar, denial. The vowels move; the refusal does not.",
            "bn": "আদি কারীগণ আয়াতটি কীভাবে পড়বেন তা নিয়ে মতভেদ করেন। বাগাভী ও কুরতুবী লিখেছেন, মদীনার কারীগণ প্রথম অংশটি প্রশ্ন ছাড়াই পড়তেন, কেবল দ্বিতীয়টিকে প্রশ্ন ধরতেন; আবার কেউ কেউ দুটি অংশকেই প্রশ্ন বানাতেন, আর অল্প কয়েকজন দ্বিতীয়টিকে প্রশ্ন নয়, সোজা বিবৃতি হিসেবে পড়তেন। ব্যাকরণবিদেরা এ নিয়ে দীর্ঘ তর্ক করেছেন। কিন্তু কুরতুবী যে কথাটা স্থির করে দেন তা এ তর্কের বাইরে: যেভাবেই পড়া হোক, ভেতরের অর্থ একটাই, ইনকার, মানে অস্বীকার। স্বরধ্বনি বদলায়, কিন্তু প্রত্যাখ্যানটা বদলায় না।"
          },
          {
            "en": "The Qur'an keeps the exact shape of their mockery, both particles and all, rather than smoothing it into a polite question. There is a reason for that. A reply is sharper when it is aimed at the real words a person said and not at a tidier version of them. By preserving the scorn whole, the verse lets the answer, which the surrounding passage has already supplied, come down on precisely the attitude that produced the sneer. We are meant to hear the contempt before we hear it refuted.",
            "bn": "কুরআন তাদের ঠাট্টার হুবহু ছাঁদটা ধরে রাখে, দুটো প্রশ্নবোধকসহ, ভদ্র একটা প্রশ্নে মসৃণ করে দেয় না। এর একটা কারণ আছে। মানুষ ঠিক যে কথাটা বলেছে, তার জবাব সেই কথার গায়ে বসলে বেশি ধারালো হয়, গোছানো কোনো সংস্করণের গায়ে নয়। উপহাসটা আস্ত রেখে দেওয়ায় আয়াতটি সুযোগ দেয়, যেন জবাব ঠিক সেই মনোভাবের উপর এসে পড়ে যা থেকে ঠাট্টাটা জন্মেছিল। আর সেই জবাব আশপাশের আয়াত আগেই দিয়ে রেখেছে। আমাদের আগে অবজ্ঞাটা শুনতে বলা হচ্ছে, তারপর তার খণ্ডন।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Body Is Dust",
          "bn": "দেহ মাটি হয়ে যাওয়ার পর"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the Arabic, says the verse reports the deniers of resurrection among the polytheists reckoning it far-fetched that bodies would be remade after they had become bones, crumbled remains and dust. At-Tabari puts their question plainly: will we be brought out of our graves, alive and in our former form, after death, after we have become dust in them and decayed away? The Muyassar keeps the same plain shape. All three read the line as istibʿad, a reckoning that the thing is simply too remote to happen.",
            "bn": "ইবনে কাসীর আরবিতে বলেন, আয়াতটি জানাচ্ছে মুশরিকদের মধ্যকার পুনরুত্থান-অস্বীকারকারীদের কথা, যারা মনে করত দেহ হাড় হয়ে, গুঁড়ো হয়ে, মাটি হয়ে যাওয়ার পর আবার গড়া হওয়া একেবারেই অসম্ভবের কাছাকাছি। তাবারী তাদের প্রশ্নটা সোজা কথায় খুলে বলেন: মরে যাওয়ার পর, কবরের ভেতরে মাটি হয়ে গলে-পচে যাওয়ার পরও কি আমাদের জীবিত অবস্থায়, আগের চেহারায় বের করে তোলা হবে? মুয়াসসারও একই সাদামাটা ছাঁদ ধরে রাখে। তিনজনই আয়াতটিকে পড়েন ইসতিবআদ হিসেবে, অর্থাৎ ব্যাপারটাকে ঘটার পক্ষে বড্ড দূরের মনে করা।"
          },
          {
            "en": "The horror driving the question is physical and concrete. To them a corpse is not merely dead; it is scattered, mixed into the earth, finally indistinguishable from the ground it lies in. Once a body has reached that state, the deniers treat the matter as closed. Notice too the words and our forefathers. They reach back deliberately to generations so long gone that nothing of them remains to point at, piling distance on distance. The further back the example lies, the more absurd the promise of raising is meant to sound.",
            "bn": "প্রশ্নটার পেছনে যে আতঙ্ক কাজ করছে তা শরীরী আর বাস্তব। তাদের কাছে লাশ কেবল মৃত নয়; তা ছড়িয়ে গেছে, মাটির সঙ্গে মিশে গেছে, শেষে যে মাটিতে শুয়ে আছে তা থেকে আর আলাদা করা যায় না। দেহ একবার এ অবস্থায় পৌঁছলে তারা ব্যাপারটাকে চুকে যাওয়া ধরে নেয়। খেয়াল করুন, তারা বলছে আমাদের বাপ-দাদারাও। তারা ইচ্ছে করেই এত আগের প্রজন্মের দিকে হাত বাড়ায় যাদের কিছুই আর দেখিয়ে দেওয়ার মতো টিকে নেই, দূরত্বের উপর দূরত্ব চাপায়। উদাহরণটা যত পেছনের, ওঠানোর ওয়াদাটা তত বেশি অবাস্তব শোনানোর মতলব।"
          },
          {
            "en": "There is a buried irony in reaching for the forefathers. The deniers summon the long dead to make the raising sound impossible: look how completely they are gone. But the more utterly a thing has returned to dust, the more plainly its remaking would show whose power is at work. What they offer as their strongest case against resurrection is, read the other way, the very place a resurrection would be most visible. Their proof against God is a proof waiting to be read forwards.",
            "bn": "বাপ-দাদাদের টেনে আনার মধ্যে একটা চাপা পরিহাস আছে। তারা বহুকাল আগের মৃতদের ডেকে আনে ওঠানোকে অসম্ভব শোনাতে: দেখো, এরা কেমন নিশ্চিহ্ন হয়ে গেছে। কিন্তু কোনো জিনিস যত পুরোপুরি মাটি হয়ে গেছে, তাকে আবার গড়া হলে তত স্পষ্ট হয়ে উঠবে কার শক্তি এখানে কাজ করছে। পুনরুত্থানের বিরুদ্ধে তারা যা সবচেয়ে জোরালো প্রমাণ বলে পেশ করে, উল্টো দিক থেকে পড়লে সেটাই সেই জায়গা যেখানে পুনরুত্থান সবচেয়ে চোখে পড়ার আর সবচেয়ে অস্বীকার-করা-কঠিন হতো। আল্লাহর বিরুদ্ধে তাদের প্রমাণ আসলে উল্টো করে পড়ার অপেক্ষায় থাকা এক প্রমাণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Measuring Power by Our Own",
          "bn": "নিজের মাপে তাঁর শক্তি মাপা"
        },
        "p": [
          {
            "en": "As-Sa'di gives the sentence its diagnosis in a single line. This, he says, is what they reckoned far-fetched and impossible, and they did it by measuring the power of the Perfect in power against their own weak power. That is the whole machinery of the denial laid bare. A human cannot reassemble a body out of scattered dust, so he concludes the thing cannot be done at all. The limit is real, but it is the speaker's own limit, quietly transferred onto God as though it were His.",
            "bn": "সাদী আয়াতটির নির্ণয় এক লাইনে ধরিয়ে দেন। তিনি বলেন, এটাকেই তারা দূরের ও অসম্ভব মনে করেছে, আর এ কাজ তারা করেছে যাঁর শক্তি পরিপূর্ণ তাঁর শক্তিকে নিজেদের দুর্বল শক্তির মাপে মেপে। অস্বীকারের গোটা যন্ত্রটাই এখানে খোলা পড়ে আছে। মানুষ ছড়ানো মাটি থেকে দেহ জোড়া দিতে পারে না, তাই সে ঠিক করে ফেলে কাজটা মোটেই করা সম্ভব নয়। সীমাটা সত্যি, কিন্তু সেটা বক্তার নিজের সীমা। সে চুপচাপ সেই সীমা আল্লাহর ঘাড়ে চাপিয়ে দেয়, যেন ওটা তাঁরই সীমা।"
          },
          {
            "en": "This is the error worth naming, because it does not stay with resurrection. Whenever I decide something is impossible because I cannot picture how it would be done, I repeat the deniers' move at the grave: I take the edge of my own capacity for the edge of what can be. There is a deeper inconsistency in it too. They already accept one creation, their own existence proves it, yet deny the second, which is by every measure the lighter task. The tadabbur is to catch myself doing exactly this elsewhere.",
            "bn": "এই ভুলটার নাম ধরে বলা দরকার, কারণ এটা কেবল পুনরুত্থানে আটকে থাকে না। নিজে কীভাবে হবে কল্পনা করতে পারি না বলে কোনো কিছুকে যখন অসম্ভব বলে বসি, তখন কবরের পাশে অস্বীকারকারীরা যা করেছিল আমিও ঠিক তা-ই করি: নিজের সামর্থ্যের সীমাটাকেই সম্ভবের সীমা ধরে নিই। এর ভেতরে আরও গভীর একটা অসঙ্গতি আছে। একটা সৃষ্টি তো তারা মেনেই নিয়েছে, তাদের নিজেদের থাকাই তার প্রমাণ; অথচ দ্বিতীয়টা অস্বীকার করছে, যা সব মাপেই হালকা কাজ। তাদাব্বুর হলো অন্য জায়গায় নিজেকে ঠিক এটা করতে দেখা মাত্র ধরে ফেলা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Six Verses Back",
          "bn": "ছয় আয়াত আগেই রাখা জবাব"
        },
        "p": [
          {
            "en": "The passage does not leave the sneer hanging; it answered it before the sneer was spoken. Six verses earlier the same surah names God as the Maker who begins creation and then repeats it (27:64), a-man yabdau al-khalqa thumma yuʿiduh. The reply is folded into those two verbs. The Lord who first shaped the body out of nothing is the Lord now asked to restore it, and restoring what you yourself made is not the heavier task. Their question answers itself the moment it is set beside that line.",
            "bn": "আয়াতের ধারা ঠাট্টাটাকে ঝুলিয়ে রাখে না; ঠাট্টা বলার আগেই সে জবাব দিয়ে রেখেছে। ছয়টি আয়াত আগে এই সূরাই আল্লাহকে চিনিয়ে দেয় সেই সত্তা বলে যিনি সৃষ্টির সূচনা করেন, অতঃপর তার পুনরাবৃত্তি করেন (২৭:৬৪), আম্মাঁও ইয়াবদাউল খালকা সুম্মা ইউঈদুহ। জবাবটা এই দুটো ক্রিয়ার ভাঁজে রাখা। যিনি শূন্য থেকে দেহটা শুরু করেছিলেন, এখন তাঁকেই জিজ্ঞেস করা হচ্ছে তিনি আবার তা গড়তে পারেন কিনা। অথচ নিজের বানানো জিনিস আবার গড়া দুই কাজের ভারীটা নয়। ওই আয়াতের পাশে রাখলেই অস্বীকারকারীদের প্রশ্ন নিজের জবাব নিজেই দিয়ে দেয়।"
          },
          {
            "en": "Ibn Kathir, in the abridged commentary, reads this whole stretch under the heading of resurrection and its refutation. The refutation he means is not an argument carried in from outside the subject. It is creation itself, already standing in plain view before the deniers. Every body that was once nothing and now walks and talks is a standing proof that the Maker can make. The dust changes nothing about the Lord who gathered it into a living person the first time; the raw material being doubted is raw material He has handled before.",
            "bn": "ইবনে কাসীর সংক্ষিপ্ত তাফসীরে গোটা এই অংশটা পড়েন পুনরুত্থান ও তার খণ্ডন শিরোনামের নিচে। তিনি যে খণ্ডনের কথা বলছেন তা বিষয়ের বাইরে থেকে টেনে আনা নতুন কোনো যুক্তি নয়। তা সৃষ্টি নিজেই, যা অস্বীকারকারীদের সামনে পরিষ্কার চোখের সামনেই দাঁড়িয়ে আছে। যে দেহ একসময় কিছুই ছিল না আর এখন হাঁটছে-কথা বলছে, সে নিজেই এক দাঁড়ানো প্রমাণ যে স্রষ্টা গড়তে পারেন। যিনি প্রথমবার মাটিকে জড়ো করে জীবন্ত মানুষ বানিয়েছিলেন, এই মাটি তাঁর কাছে নতুন কিছু বদলায় না; যে কাঁচামাল নিয়ে সন্দেহ, সেই কাঁচামাল তিনি আগেও হাতে নিয়েছেন।"
          },
          {
            "en": "Notice as well the order the surah chose. It did not wait for the deniers to speak and then scramble to argue back. It laid the proof down first, in 27:64, and only afterward let their question be heard at all. So the reader who has been following the passage is already holding the answer when the scorn arrives. The denial is permitted to speak, but it speaks into a room where its own refutation is already standing against the wall, waiting. That arrangement is itself part of the teaching.",
            "bn": "সূরা যে ক্রমটা বেছেছে সেটাও লক্ষ করুন। অস্বীকারকারীরা কথা বলবে, তারপর তাড়াহুড়ো করে জবাব দিতে হবে, এমন নয়। সে আগে প্রমাণটা রেখে দিয়েছে, ২৭:৬৪ আয়াতে, আর তার পরেই কেবল তাদের প্রশ্নটা শোনার সুযোগ দিয়েছে। ফলে যে পাঠক আয়াতের ধারা ধরে এগোচ্ছিলেন, ঠাট্টাটা আসার সময় জবাবটা তাঁর হাতেই রয়েছে। অস্বীকারকে কথা বলতে দেওয়া হয়, কিন্তু সে এমন এক ঘরে কথা বলে যেখানে তার নিজের খণ্ডন আগে থেকেই দেয়ালে হেলান দিয়ে অপেক্ষা করছে। এই সাজানোটাই শিক্ষার একটা অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "First Creation, No Harder",
          "bn": "প্রথম সৃষ্টি কঠিনতর নয়"
        },
        "p": [
          {
            "en": "The point is put most sharply in a sacred hadith. Al-Bukhari records, from Abu Hurayrah (may Allah be pleased with him), that the Prophet ﷺ reported Allah as saying: the son of Adam has denied Me, though he had no right to, and abused Me, though he had no right to. As for his denial, it is his saying that I will not re-create him as I first created him; yet the first creation is no easier for Me than restoring him. The report sits in Bukhari's Sahih, sound by his own collection.",
            "bn": "কথাটা সবচেয়ে ধারালোভাবে এসেছে এক হাদীসে কুদসীতে। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ জানান আল্লাহ বলেছেন: আদম-সন্তান আমাকে মিথ্যা বলেছে, অথচ তার সে অধিকার ছিল না; আর সে আমাকে গালি দিয়েছে, অথচ তারও অধিকার তার ছিল না। আমাকে মিথ্যা বলা মানে তার এই কথা যে, প্রথমবার যেভাবে সৃষ্টি করেছি সেভাবে আমি তাকে আবার সৃষ্টি করব না; অথচ প্রথম সৃষ্টি আমার কাছে তাকে আবার ফিরিয়ে আনার চেয়ে সহজ নয়। বর্ণনাটি বুখারীর সহীহতে রয়েছে আর তাঁর নিজের সংকলন অনুসারে সহীহ।"
          },
          {
            "en": "The hadith answers 27:67 almost word for word. The deniers' certainty rests on a hidden assumption, that remaking must be harder than making, and the hadith declares that assumption plainly false. For the One whose power has no edge, again costs nothing that first did not already cost; it is called easier only in the way human minds grade effort, never in a way that limits Him. The question the Makkans asked with a sneer meets a flat, unflinching reply in the saying of the Prophet ﷺ.",
            "bn": "হাদীসটি ২৭:৬৭ আয়াতের জবাব দেয় প্রায় শব্দে শব্দে। অস্বীকারকারীদের নিশ্চয়তা দাঁড়িয়ে আছে একটা গোপন ধরে-নেওয়ার উপর, যে আবার গড়া প্রথমবার গড়ার চেয়ে কঠিন হতেই হবে; আর হাদীসটি সোজাসুজি ঘোষণা করে ওই ধরে-নেওয়াটা খাঁটি মিথ্যা। যাঁর শক্তির কোনো কিনারা নেই, তাঁর কাছে আবার করায় এমন কোনো খরচ নেই যা প্রথমবারে ছিল না। সহজ বলা যায় কেবল সেভাবে, যেভাবে মানুষের মন পরিশ্রমের কমবেশি হিসেব করে, তাঁকে সীমিত করার কোনো অর্থে নয়। মক্কাবাসী যে প্রশ্ন ঠাট্টা করে ছুঁড়েছিল, নবী ﷺ-এর বাণীতে তার এক নির্দ্বিধায় সোজা জবাব অপেক্ষা করছিল।"
          },
          {
            "en": "There is a second denial named in the same hadith, set beside the first: the claim that God has taken a child. The Prophet ﷺ reported both as things said against God without any right. The pairing is worth sitting with. To deny the raising and to assign God a child are, at root, one error wearing two faces, fitting the Creator into categories drawn from creatures, who are born, tire, and cannot gather their dead. The sneer and that other claim grow from the same soil: a God imagined down to our size.",
            "bn": "একই হাদীসে প্রথমটার ঠিক পাশে আরেকটা অস্বীকারের নাম এসেছে: এই দাবি যে আল্লাহ সন্তান নিয়েছেন। নবী ﷺ দুটোকেই আল্লাহর বিরুদ্ধে অনধিকার বলা কথা হিসেবে জানিয়েছেন। জোড়াটা নিয়ে একটু থামা দরকার। পুনরুত্থান অস্বীকার করা আর আল্লাহর জন্য সন্তান সাব্যস্ত করা মূলে একই ভুল, দুই চেহারায়। দুটোই স্রষ্টাকে সৃষ্টির মাপকাঠিতে ফেলা, যে সৃষ্টি জন্মায়, ক্লান্ত হয়, নিজের মৃতদের জড়ো করতে পারে না। এই ঠাট্টা আর ওই অন্য দাবি একই মাটিতে গজায়: আল্লাহকে আমাদের মাপে নামিয়ে কল্পনা করা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Posture, Not a People",
          "bn": "কোনো জাতি নয়, এক মনোভাব"
        },
        "p": [
          {
            "en": "A word of care here. The verse quotes the Makkan polytheists, and the commentators name them, but it describes only what the text describes and licenses nothing against any living person or community. Its target is not a race, a tribe or a people to point to today. Its target is a stance: the flat refusal to believe what one cannot personally perform or picture. That stance has no address and no bloodline, and a believer can drift into it without ever once saying the words the Makkans said aloud.",
            "bn": "এখানে একটা সতর্ক কথা দরকার। আয়াতটি মক্কার মুশরিকদের কথা উদ্ধৃত করে, আর তাফসীরকারেরা তাদের সেভাবেই চিহ্নিত করেন; কিন্তু আয়াতটি কেবল যা বর্ণিত তা-ই বর্ণনা করে, আর আজকের কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কোনো অনুমতি দেয় না। এর নিশানা কোনো বর্ণ, গোত্র বা আঙুল তুলে দেখানোর মতো কোনো জাতি নয়। এর নিশানা একটা মনোভাব: যা নিজে করতে বা কল্পনা করতে পারি না তা মেনে না নেওয়ার সরাসরি অস্বীকার। এই মনোভাবের কোনো ঠিকানা নেই, কোনো রক্তের ধারা নেই। মক্কাবাসীরা মুখে যে কথা বলেছিল তা একবারও না বলে একজন মুমিনও এর ভেতরে পা রাখতে পারে।"
          },
          {
            "en": "That is why the verse repays reading inward rather than outward. It is easy to hear those who disbelieve and at once picture somebody else, safely outside the faith. But the mechanism it exposes, shrinking God quietly to the size of my own experience, is a temptation that lives inside belief as much as outside it. Taking the line as a mirror held to my own certainties, not as a verdict on other people, is what keeps it working on the only person I can actually mend.",
            "bn": "ঠিক এ কারণেই আয়াতটি বাইরে না তাকিয়ে ভেতরে তাকিয়ে পড়লে বেশি ফল দেয়। যারা অবিশ্বাস করে কথাটা শুনে সঙ্গে সঙ্গে অন্য কাউকে কল্পনা করা সহজ, এমন কাউকে যে নিরাপদে ঈমানের বাইরে। কিন্তু আয়াতটি যে কল আমাদের দেখিয়ে দেয়, অর্থাৎ আল্লাহকে চুপচাপ নিজের অভিজ্ঞতার মাপে ছোট করে ফেলা, সেটা ঈমানের ভেতরেও ঠিক ততটাই টানে যতটা বাইরে। লাইনটাকে অন্যের উপর নামিয়ে দেওয়া রায় না ধরে নিজের নিশ্চয়তাগুলোর সামনে ধরা আয়না হিসেবে নিলে তবেই সেটা সেই একজনের উপর কাজ করে যাকে আমি আসলে শুধরাতে পারি।"
          }
        ]
      },
      {
        "h": {
          "en": "Blind to What Comes",
          "bn": "যা আসছে তাতে অন্ধ"
        },
        "p": [
          {
            "en": "The scorn does not appear from nowhere. Just before it, the surah says that none in the heavens and earth knows the unseen except Allah, and that these people do not even perceive when they will be raised (27:65). Then, more pointedly still, it says their knowledge concerning the Hereafter has run out; rather they are in doubt about it; rather they are, concerning it, blind (27:66). Ma'arif al-Qur'an notes that the commentators divide over the key verb, some reading it as knowledge completed too late, others as knowledge simply lost.",
            "bn": "ঠাট্টাটা শূন্য থেকে আসে না। তার ঠিক আগে সূরা বলে, আল্লাহ ছাড়া আসমান ও যমীনের কেউই অদৃশ্যের খবর রাখে না, আর এই লোকেরা টেরও পায় না কখন তাদের ওঠানো হবে (২৭:৬৫)। তারপর আরও সরাসরি: আখিরাত সম্পর্কে তাদের জ্ঞান ফুরিয়ে গেছে; বরং তারা এ নিয়ে সন্দেহে; বরং এ ব্যাপারে তারা অন্ধ (২৭:৬৬)। মাআরিফুল কুরআন জানায়, মূল ক্রিয়াটি নিয়ে তাফসীরকারেরা দুভাগ, কেউ পড়েন অনেক দেরিতে জ্ঞান পূর্ণ হওয়া অর্থে, কেউ পড়েন জ্ঞান একেবারে হারিয়ে যাওয়া অর্থে।"
          },
          {
            "en": "Either way, the speech of 27:67 flows out of that blindness. A man who cannot see the Hereafter at all will naturally find talk of it absurd, and mistake his own blindness for clear sight. His complaint runs further, that this was promised to him and his fathers long ago, but its root is here, in an eye shut rather than an argument weighed. Denial dressed as plain common sense is denial all the same, and the surah has already named the condition behind it.",
            "bn": "যেভাবেই হোক, ২৭:৬৭ আয়াতের কথা সোজা এই অন্ধত্ব থেকেই বেরিয়ে আসে। যে লোক আখিরাত আদৌ দেখতে পায় না, সে স্বাভাবিকভাবেই তা নিয়ে কথা অবাস্তব মনে করবে, আর নিজের অন্ধত্বকেই পরিষ্কার দৃষ্টি ভেবে ভুল করবে। তার অভিযোগ আরেকটু এগিয়ে যায়, যে এই ওয়াদা তাকে আর তার বাপ-দাদাকে বহু আগেই দেওয়া হয়েছিল; কিন্তু এর মূল এখানেই, এক বন্ধ চোখে, কোনো মেপে-দেখা যুক্তিতে নয়। যে অস্বীকার নিজেকে সোজা সাধারণ বুদ্ধি সাজিয়ে তোলে, সে তবু অস্বীকারই; আর সূরা এর পেছনের রোগটা আগেই নাম ধরে বলে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Question Home",
          "bn": "প্রশ্নটি ঘরে নিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "Strip the sneer away and a real question is left standing, one worth asking seriously without the contempt: will I be brought out? The Qur'an's answer is yes, and it rests that yes on something already visible, the creation I am standing inside of this moment. So the honest form of the question quietly turns around on the one who asks it. The useful question was never can this happen. The useful question, once the answer is in hand, is given that it will, how then should these days be spent?",
            "bn": "ঠাট্টাটা সরিয়ে নিলে একটা সত্যিকারের প্রশ্ন দাঁড়িয়ে থাকে, অবজ্ঞা ছাড়া গুরুত্ব দিয়ে করার মতো প্রশ্ন: আমাকে কি বের করে তোলা হবে? কুরআনের জবাব হ্যাঁ, আর সেই হ্যাঁ সে দাঁড় করায় এমন কিছুর উপর যা এখনই চোখের সামনে, অর্থাৎ যে সৃষ্টির ভেতরে আমি এ মুহূর্তে দাঁড়িয়ে আছি। ফলে প্রশ্নটার সৎ রূপ চুপচাপ ঘুরে যায় প্রশ্নকর্তার দিকেই। আসল প্রশ্ন কখনোই এটা ছিল না যে এটা ঘটতে পারে কিনা। জবাব হাতে এলে আসল প্রশ্ন হয়: যেহেতু ঘটবেই, তাহলে এই দিনগুলো কীভাবে কাটানো উচিত?"
          },
          {
            "en": "The deniers measured God against themselves and shrank Him to fit the measure. The believer is asked to do the reverse: to let the certainty of being raised enlarge how the hours are lived, not cut God down to the span of a human hand. Dust is not an argument against God. For the Maker who once shaped a whole person out of it, dust is only raw material He has worked before, and will work again. The grave, in the end, is a door, and He holds the latch on both its sides.",
            "bn": "অস্বীকারকারীরা আল্লাহকে নিজেদের মাপে মেপে সেই মাপে এঁটে যেতে ছোট করে ফেলেছিল। মুমিনকে বলা হয় উল্টোটা করতে, আল্লাহকে মানুষের হাতের মাপে ছেঁটে না ফেলে ওঠানো হওয়ার নিশ্চয়তা দিয়ে নিজের ঘণ্টাগুলোর কাটানোকে বড় করে নিতে। মাটি আল্লাহর বিরুদ্ধে কোনো যুক্তি নয়। যিনি একবার এই মাটি থেকেই গোটা মানুষ গড়েছেন, তাঁর কাছে মাটি কেবল আগে-ব্যবহার-করা কাঁচামাল, যা তিনি আবারও কাজে লাগাবেন। কবর শেষ বিচারে একটা দরজা, আর সে দরজার খিল তাঁরই হাতে, দুই পাশেই।"
          }
        ]
      }
    ]
  },
  "27:75-76": {
    "sections": [
      {
        "h": {
          "en": "Two Verses, One Thread",
          "bn": "দুই আয়াত, এক সুতো"
        },
        "p": [
          {
            "en": "The card holds two verses the surah sets side by side. The first, 27:75, says that there is nothing hidden (ghā'ibah) in the heavens and the earth except that it is in a clear Record (kitāb mubīn). The second, 27:76, says that this Qur'an relates to the Children of Israel most of what they differ over. Read apart, they look as if they change the subject between them: one is about God's knowledge, the other about a scripture settling an old quarrel. Read together, they are a single argument, and the first half carries the second.",
            "bn": "কার্ডটি ধরে রেখেছে এমন দুটি আয়াত, যা সূরা পাশাপাশি রেখেছে। প্রথমটি, ২৭:৭৫, বলছে আকাশ ও যমীনে এমন কোনো অদৃশ্য (গায়েবা) বিষয় নেই যা এক সুস্পষ্ট কিতাবে (কিতাবুম মুবীন) লেখা নেই। দ্বিতীয়টি, ২৭:৭৬, বলছে এই কুরআন বানী ইসরাঈলের কাছে তাদের মতভেদের অধিকাংশ বিবৃত করে। আলাদা করে পড়লে মনে হয় মাঝখানে প্রসঙ্গ বদলে গেছে। একটি আল্লাহর জ্ঞান নিয়ে, অন্যটি এক পুরোনো বিবাদ মীমাংসা করা কিতাব নিয়ে। একসঙ্গে পড়লে দুটি এক যুক্তি, আর প্রথম অংশ দ্বিতীয়কে বহন করে।"
          },
          {
            "en": "The thread is this: the right to settle a dispute belongs to whoever knows. The first verse establishes a knowledge that misses nothing; the second spends it. The surah has just quoted the deniers taunting the Prophet, asking when the promised reckoning would come (27:71). These two verses answer under the surface. The One whose Record holds every hidden thing is exactly the One able to tell a divided people the truth about what they kept arguing over, and to make His scripture the deciding voice rather than one more side in the fight.",
            "bn": "সুতোটি এই: বিবাদ মীমাংসার অধিকার তাঁরই যিনি জানেন। প্রথম আয়াত এমন জ্ঞান প্রতিষ্ঠা করে যা কিছুই বাদ দেয় না, আর দ্বিতীয় আয়াত তা কাজে লাগায়। সূরাটি একটু আগেই অস্বীকারকারীদের কটাক্ষ তুলে ধরেছে, যারা জিজ্ঞেস করছিল প্রতিশ্রুত হিসাব কবে আসবে (২৭:৭১)। এই দুই আয়াত ভেতরে ভেতরে তার জবাব দেয়। যাঁর কিতাব প্রতিটি অদৃশ্য বিষয় ধরে রাখে, তিনিই এক বিভক্ত জাতিকে তাদের দীর্ঘ বিবাদের সত্য কথাটা বলতে পারেন। আর নিজের কিতাবকে বানাতে পারেন ফয়সালার কণ্ঠ, ঝগড়ার আর একটি পক্ষ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Slips the Record",
          "bn": "কিছুই নথির বাইরে নয়"
        },
        "p": [
          {
            "en": "Begin with the hidden thing itself. Al-Baghawi reads ghā'ibah broadly: every concealed thing, a kept secret, a hidden matter, anything absent from sight. As-Sa'di calls it a secret of the upper and lower world, whether plain or buried. At-Tabari and Ibn Kathir both carry the word of Ibn Abbas, that it means there is nothing in the heaven and the earth, secret or open, but that Allah knows it. So the subject is not a special category of hidden things. It is the whole of what escapes a creature's eye.",
            "bn": "শুরু করি অদৃশ্য বিষয়টি দিয়েই। বাগাভী গায়েবা শব্দটিকে পড়েন বিস্তৃত অর্থে: প্রতিটি গোপন জিনিস, লুকানো কথা, আড়ালে থাকা বিষয়, দৃষ্টির বাইরের যেকোনো কিছু। সা'দী একে বলেন ঊর্ধ্ব ও নিম্ন জগতের গোপন রহস্য, প্রকাশ্য হোক বা চাপা থাকুক। তাবারী আর ইবন কাসীর দুজনেই ইবন আব্বাস (রাঃ)-এর কথা তুলে আনেন যে, আকাশ ও যমীনে গোপন বা প্রকাশ্য এমন কিছুই নেই যা আল্লাহ জানেন না। তাই এখানে আলোচ্য কোনো বিশেষ শ্রেণির লুকানো জিনিস নয়। বান্দার চোখের আড়ালে যা কিছু থাকে, তার পুরোটাই।"
          },
          {
            "en": "Now the Record. At-Tabari identifies the clear Book as the Umm al-Kitāb, the Mother of the Book, in which the Lord has fixed everything that comes to be, from the start of creation to the Day of Resurrection. Al-Baghawi and al-Qurtubi name it al-Lawḥ al-Maḥfūẓ, the Preserved Tablet in which Allah set down what He willed, al-Qurtubi adding that it is so that those of His angels He wills may know by it. The hidden is not lost in a void; it is written in a single ledger that predates the world.",
            "bn": "এবার সেই কিতাব। তাবারী সুস্পষ্ট কিতাবকে চিহ্নিত করেন উম্মুল কিতাব, অর্থাৎ মূল কিতাব হিসেবে, যেখানে রব সৃষ্টির সূচনা থেকে কিয়ামত পর্যন্ত ঘটতে চলা সবকিছু লিখে রেখেছেন। বাগাভী আর কুরতুবী একে বলেন লাওহে মাহফুজ, সেই সুরক্ষিত ফলক যেখানে আল্লাহ তাঁর ইচ্ছামতো সবকিছু লিপিবদ্ধ করেছেন। কুরতুবী যোগ করেন, এ এমন যেন তাঁর ইচ্ছার ফেরেশতারা তা থেকে জানতে পারে। অদৃশ্য জিনিস কোনো শূন্যতায় হারিয়ে যায় না। তা লেখা আছে এক খাতায়, যা পৃথিবীরও আগের।"
          },
          {
            "en": "What makes the Record mubīn, clear? At-Tabari answers that it makes plain to whoever looks into it and reads what the Lord has fixed there. Al-Muyassar and as-Sa'di press the scope: the Book has encompassed all that was and all that will be, so that every event, visible or hidden, matches exactly what is written in the Preserved Tablet. The word clear, then, does not mean the Record is open for public reading. It means it is exhaustive and exact, leaving nothing vague and nothing out.",
            "bn": "কিসে কিতাবটি মুবীন, মানে সুস্পষ্ট? তাবারী বলেন, যে এতে দৃষ্টি দেয় আর রব যা লিখে রেখেছেন তা পড়ে, তার কাছে এ সব স্পষ্ট করে দেয়। মুয়াসসার আর সা'দী এর ব্যাপ্তিতে জোর দেন: এই কিতাব যা কিছু ঘটেছে আর যা কিছু ঘটবে সবই ঘিরে রেখেছে, তাই প্রতিটি ঘটনা, প্রকাশ্য হোক বা গোপন, লাওহে মাহফুজে লেখা জিনিসের সঙ্গে হুবহু মেলে। তাহলে সুস্পষ্ট মানে এই নয় যে কিতাবটি সবার পড়ার জন্য খোলা। মানে এটি পূর্ণাঙ্গ ও নিখুঁত, কিছুই অস্পষ্ট রাখে না, কিছুই বাদ দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Hidden Thing Is",
          "bn": "অদৃশ্য বলতে কী"
        },
        "p": [
          {
            "en": "Al-Qurtubi records that the commentators did not all read al-ghā'ibah the same way. He reports al-Hasan as holding that the hidden thing here is the Hour, the Resurrection itself. He cites an-Naqqāsh for a second reading, that it is what is kept from them of the punishment of heaven and earth. And he gives Ibn Shajarah a third and widest sense: everything Allah has hidden and made absent from His creation, a general meaning, with the feminine ending of ghā'ibah pointing to a whole class rather than one item. These are kept here as a difference, with no verdict laid over them.",
            "bn": "কুরতুবী লিখে রাখেন যে, গায়েবা শব্দটি তাফসীরকারেরা একইভাবে পড়েননি। তিনি হাসান থেকে আনেন যে, এখানে অদৃশ্য বিষয় মানে কিয়ামত, পুনরুত্থান নিজেই। দ্বিতীয় একটি পাঠের জন্য তিনি নাক্কাশের উদ্ধৃতি দেন, যে এ হলো আকাশ ও যমীনের যে শাস্তি তাদের থেকে আড়াল রাখা হয়েছে। আর ইবন শাজারাকে দেন তৃতীয় ও সবচেয়ে ব্যাপক অর্থ: আল্লাহ তাঁর সৃষ্টি থেকে যা কিছু গোপন করেছেন ও আড়াল করেছেন তার সবই। এটি সাধারণ অর্থ, আর গায়েবা শব্দের স্ত্রীবাচক শেষাংশ একটি জিনিস নয়, বরং পুরো একটি শ্রেণির দিকে ইঙ্গিত করে। এগুলো এখানে মতভেদ হিসেবেই রাখা হলো, কোনো রায় চাপানো হলো না।"
          },
          {
            "en": "Al-Qurtubi then ties the verse to the moment that produced it. Everything stands fixed in the Record at an appointed term, he says, which Allah brings out when its time arrives; so the punishment the deniers kept demanding ahead of schedule has a set term that will neither be brought forward nor held back. This is why the verse is not an abstract boast about knowledge. It is a direct answer to the taunt a few lines earlier, when they asked when this promise would be fulfilled if the Prophet spoke the truth (27:71). The date is written; their impatience does not move it.",
            "bn": "এরপর কুরতুবী আয়াতটিকে সেই পরিস্থিতির সঙ্গে জুড়ে দেন যা একে এনেছিল। তিনি বলেন, প্রতিটি জিনিস কিতাবে একটি নির্ধারিত সময়সহ লেখা আছে, যা আল্লাহ সময় এলে বের করে আনেন। তাই অস্বীকারকারীরা যে শাস্তি বারবার সময়ের আগে চাইছিল, তার একটি নির্দিষ্ট কাল আছে, যা না এগোবে না পিছোবে। এজন্যই এ আয়াত জ্ঞান নিয়ে কোনো বিমূর্ত গর্ব নয়। এটি কয়েক লাইন আগের সেই কটাক্ষের সরাসরি জবাব, যখন তারা জিজ্ঞেস করেছিল নবী সত্যবাদী হলে এ প্রতিশ্রুতি কবে পূরণ হবে (২৭:৭১)। তারিখ লেখা হয়ে গেছে, তাদের অস্থিরতা তা নড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Fifty Thousand Years",
          "bn": "পঞ্চাশ হাজার বছর"
        },
        "p": [
          {
            "en": "The commentators name the Record the Preserved Tablet, but they attach no particular hadith to this verse. A sound narration recorded by Muslim puts a scale on it. ʿAbdullāh ibn ʿAmr reported that he heard the Messenger of Allah ﷺ say, 'Allah ordained the measures of the creation fifty thousand years before He created the heavens and the earth, as His Throne was over the water.' It belongs to Muslim's Sahih and he places it among the soundest; the figure is not a span to calculate but a way of saying the writing came first.",
            "bn": "তাফসীরকারেরা কিতাবটিকে লাওহে মাহফুজ বলেন, তবে এই আয়াতের সঙ্গে কোনো নির্দিষ্ট হাদীস যুক্ত করেন না। মুসলিমের বর্ণিত একটি সহীহ হাদীস এর একটা মাপ দেয়। আবদুল্লাহ ইবন আমর (রাঃ) বর্ণনা করেন যে, তিনি রাসূলুল্লাহ ﷺ-কে বলতে শুনেছেন, ‘আল্লাহ আসমান ও যমীন সৃষ্টির পঞ্চাশ হাজার বছর আগে সৃষ্টির ভাগ্য নির্ধারণ করে রেখেছেন, আর তখন তাঁর আরশ ছিল পানির উপর।’ এটি মুসলিমের সহীহতে আছে আর তিনি একে সবচেয়ে বিশুদ্ধদের মধ্যে রাখেন। সংখ্যাটি হিসাব কষার কোনো মেয়াদ নয়, বরং এ বলার একটা ধরন যে লেখাটা আগে এসেছে।"
          },
          {
            "en": "This is set beside the verse, not read into it: it is a general narration about Allah's prior writing of all decrees, not one the mufassirūn cite on 27:75. Still, it says the same thing with a date on it. What the verse calls a clear Record, the hadith calls a writing older than the sky itself. For the one reading, the lesson lands close to home. The outcome you fear, and the one you hope for, were not drafted yesterday in response to your effort; they were set down before the ground you stand on was made.",
            "bn": "এটি আয়াতের পাশে রাখা হলো, আয়াতের ভেতরে ঢোকানো হলো না। এটি আল্লাহর আগে থেকে সব তাকদীর লিখে রাখার একটি সাধারণ বর্ণনা, মুফাসসিরগণ যা ২৭:৭৫-এর সঙ্গে উদ্ধৃত করেননি। তবু এটি একই কথা বলে, সঙ্গে একটা সময়ও জুড়ে দেয়। আয়াত যাকে বলে সুস্পষ্ট কিতাব, হাদীস তাকে বলে আসমানেরও আগের এক লেখা। যে পড়ছে, তার জন্য শিক্ষাটা কাছেই এসে পড়ে। আপনি যে পরিণতিকে ভয় পান, আর যেটির আশা করেন, তা গতকাল আপনার চেষ্টার জবাবে লেখা হয়নি। আপনি যে মাটিতে দাঁড়িয়ে, তা বানানোরও আগে তা লিপিবদ্ধ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "From Knowing to Settling",
          "bn": "জানা থেকে ফয়সালা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an draws the bridge between the two verses out in the open. The weight of any report, it says, rests on the truthfulness of the one who brings it; and the informant here is the Qur'an, whose truthfulness is beyond doubt or contradiction. In matters over which the scholars of the Children of Israel had differed so sharply that they could not resolve them, the only authority able to overrule is the one superior in knowledge and standing. That is why the two verses sit in this order.",
            "bn": "মাআরিফুল কুরআন দুই আয়াতের মধ্যকার সেতুটি খোলাখুলি টেনে দেয়। এটি বলে, যেকোনো খবরের ওজন নির্ভর করে যে আনে তার সত্যবাদিতার উপর। আর এখানে খবরদাতা হলো কুরআন, যার সত্যতা নিয়ে কোনো সন্দেহ বা দ্বিমতের অবকাশ নেই। বানী ইসরাঈলের আলেমরা যেসব বিষয়ে এত তীব্রভাবে মতভেদ করেছিল যে মীমাংসা করতে পারেনি, সেখানে একমাত্র সেই কর্তৃপক্ষই রায় দিতে পারে যে জ্ঞানে ও মর্যাদায় সবার উপরে। এজন্যই আয়াত দুটি এই ক্রমে বসে আছে।"
          },
          {
            "en": "The first verse comes first because the Record that misses nothing is the knowledge that qualifies its Author to decide. As-Sa'di reads the second as an announcement of the Qur'an's haymanah, its standing watch over the earlier Books: it details and clarifies what had grown confused and disputed among the Children of Israel, so that its telling removed the ambiguity and marked off the right from the matters in question. Knowing and settling are one motion here. Only the One who holds the whole ledger can close the account.",
            "bn": "প্রথম আয়াত আগে আসে, কারণ যে কিতাব কিছুই বাদ দেয় না সেই জ্ঞানই এর রচয়িতাকে ফয়সালার যোগ্য করে। সা'দী দ্বিতীয় আয়াতকে পড়েন কুরআনের হাইমানার ঘোষণা হিসেবে, অর্থাৎ পূর্ববর্তী কিতাবগুলোর উপর এর তত্ত্বাবধানের কথা। বানী ইসরাঈলের মধ্যে যা জট পাকিয়ে বিবাদে রূপ নিয়েছিল, কুরআন তা বিশদ করে স্পষ্ট করে দেয়, যাতে এর বিবরণ অস্পষ্টতা দূর করে আর বিতর্কিত বিষয় থেকে সঠিকটা আলাদা করে দেখায়। জানা আর ফয়সালা এখানে একই চলা। পুরো খাতা যাঁর হাতে, কেবল তিনিই হিসাব বন্ধ করতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Most, Not All",
          "bn": "অধিকাংশ, সবটা নয়"
        },
        "p": [
          {
            "en": "The verse says the Qur'an settles akthar, most, of what they differ over, and not all. At-Tabari and al-Muyassar read it plainly as the truth in most of the things they had disputed. Al-Baghawi names the field those things belong to: most of what they differ over of the matter of religion, min amr ad-dīn. The reading stays with questions of religious weight. On the strength of these commentators, the verse does not claim to arbitrate every trivial disagreement a people ever had; it claims the ones that decide their faith.",
            "bn": "আয়াত বলছে কুরআন তাদের মতভেদের আকসার, মানে অধিকাংশ মীমাংসা করে, সবটা নয়। তাবারী আর মুয়াসসার একে সোজাসুজি পড়েন তাদের বিতর্কিত বেশিরভাগ বিষয়ের সত্য হিসেবে। বাগাভী সেই বিষয়গুলো কোন জগতের তা চিহ্নিত করে দেন: তাদের মতভেদের অধিকাংশ দ্বীনের বিষয় নিয়ে, মিন আমরিদ্দীন। পাঠটি থেকে যায় দ্বীনি গুরুত্বের প্রশ্নগুলোর সঙ্গে। এই তাফসীরকারদের ভিত্তিতে আয়াতটি কোনো জাতির জীবনের প্রতিটি তুচ্ছ মতভেদ মেটানোর দাবি করে না। যেগুলো তাদের ঈমানের ফয়সালা করে, এটি সেগুলোর দাবি করে।"
          },
          {
            "en": "Al-Qurtubi describes the state the verse spoke into. They had differed in so many things, he says, that some of them cursed others, and the verse came down over that. Its meaning, he adds, is that the Qur'an makes plain to them what they differed over if they would take it, including what they had altered of the Torah and the Gospel and the rulings that had dropped out of their books. Al-Kalbi, cited by al-Baghawi, paints the same scene: the People of the Book had split into parties, each attacking the other, and the Qur'an came to clarify what divided them.",
            "bn": "কুরতুবী বর্ণনা করেন কোন পরিস্থিতিতে আয়াতটি নেমেছিল। তিনি বলেন, তারা এত বিষয়ে মতভেদ করেছিল যে একদল আরেক দলকে অভিশাপ দিত, আর তারই প্রেক্ষিতে আয়াত নাজিল হয়। তিনি যোগ করেন, এর অর্থ হলো কুরআন তাদের মতভেদের বিষয়গুলো স্পষ্ট করে দেয় যদি তারা তা গ্রহণ করত। এর মধ্যে আছে তাওরাত ও ইঞ্জিলের যা তারা বদলে ফেলেছিল আর তাদের কিতাব থেকে যেসব বিধান ঝরে গিয়েছিল। বাগাভীর উদ্ধৃত কালবী একই দৃশ্য আঁকেন: আহলে কিতাব নানা দলে ভাগ হয়ে একে অপরকে আক্রমণ করছিল, আর কুরআন এল তাদের বিভক্তির বিষয়গুলো স্পষ্ট করতে।"
          },
          {
            "en": "That the claim is most, not all, is itself a kind of precision. A book promising to resolve literally every difference would overreach, and overreach is the mark of a false witness rather than a truthful witness. The Qur'an's claim is measured: it speaks the deciding word where faith turns on it, and leaves the rest where it lies. For the reader the restraint is a lesson by itself. Truth does not need to win every argument in the room to be trusted on the few that actually matter, and a voice that insists on winning all of them is usually not after truth at all.",
            "bn": "দাবিটা যে অধিকাংশ, সবটা নয়, এটাও একধরনের নিখুঁততা। প্রতিটি মতভেদ মেটানোর প্রতিশ্রুতি দেওয়া কিতাব বাড়াবাড়ি করত, আর বাড়াবাড়ি মিথ্যা সাক্ষীর চিহ্ন, সত্য সাক্ষীর নয়। কুরআনের দাবি মেপে বলা: যেখানে ঈমান এর উপর নির্ভর করে সেখানে ফয়সালার কথা বলে, বাকিটা যেখানে আছে সেখানেই রাখে। পাঠকের জন্য এই সংযম নিজেই এক শিক্ষা। ঘরের প্রতিটি তর্কে জেতার দরকার নেই সত্যের, যে কটা সত্যিই গুরুত্বপূর্ণ সেগুলোতে আস্থা পেতে। আর যে কণ্ঠ সবকটা জিততে চায়, সে সাধারণত সত্যের পেছনে ছোটে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Middle Word on ʿĪsā",
          "bn": "ঈসা (আঃ) প্রসঙ্গে মধ্যপন্থী কথা"
        },
        "p": [
          {
            "en": "Both at-Tabari and Ibn Kathir give the clearest single example of the disputes the Qur'an settled: ʿĪsā (AS). The Children of Israel had split sharply over him. Ibn Kathir describes two opposite errors in that old argument, a denial on one side and an overstatement on the other, each pulling away from the centre. Into that, he says, the Qur'an came with the just middle word, the true and balanced statement: that ʿĪsā (AS) is a servant among the servants of Allah, and one of His noble prophets and messengers, peace be upon him.",
            "bn": "তাবারী আর ইবন কাসীর দুজনেই কুরআন যেসব বিবাদ মীমাংসা করেছে তার সবচেয়ে স্পষ্ট একটি উদাহরণ দেন: ঈসা (আঃ)। বানী ইসরাঈল তাঁকে নিয়ে তীব্রভাবে বিভক্ত হয়ে গিয়েছিল। ইবন কাসীর সেই পুরোনো বিবাদে দুটি বিপরীত ভুলের বর্ণনা দেন, একদিকে অস্বীকার আর অন্যদিকে অতিরঞ্জন, দুটোই কেন্দ্র থেকে টেনে সরায়। তিনি বলেন, সেখানে কুরআন এল ন্যায্য মধ্যপন্থী কথা নিয়ে, সেই সত্য ও ভারসাম্যপূর্ণ বক্তব্য: ঈসা (আঃ) আল্লাহর বান্দাদের মধ্যে একজন বান্দা, আর তাঁর সম্মানিত নবী ও রাসূলদের একজন, তাঁর উপর শান্তি বর্ষিত হোক।"
          },
          {
            "en": "Ibn Kathir points to 19:34 for that very verdict, where the Qur'an says, 'That is ʿĪsā, son of Maryam, the word of truth about which they are in doubt.' The pattern is worth carrying away. The Qur'an's way with a heated dispute is not to side with whoever shouts loudest, nor to split the difference for the sake of peace. It names the balanced truth, the one that honours the prophet fully without raising him past the rank Allah gave him. The deciding word is not the middle of the two camps; it is the truth both camps had left.",
            "bn": "ইবন কাসীর ঠিক সেই রায়ের জন্য ১৯:৩৪ আয়াতের দিকে ইঙ্গিত করেন, যেখানে কুরআন বলে, ‘এই তো মারইয়াম-তনয় ঈসা, সত্য কথা, যে বিষয়ে তারা সন্দেহ করছে।’ ধরনটা মনে রাখার মতো। উত্তপ্ত বিবাদে কুরআনের পথ হলো না যে সবচেয়ে জোরে চিৎকার করে তার পক্ষ নেওয়া, না শান্তির খাতিরে মাঝামাঝি একটা রফা করা। এটি ভারসাম্যপূর্ণ সত্যটা বলে দেয়, যা নবীকে পূর্ণ সম্মান দেয় অথচ আল্লাহর দেওয়া মর্যাদার উপরে তাঁকে তোলে না। ফয়সালার কথাটা দুই পক্ষের মাঝামাঝি নয়। এটি সেই সত্য যা দুই পক্ষই ছেড়ে এসেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Against a People",
          "bn": "কোনো জাতির বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly, in both languages. The verse is about a book settling a question of doctrine; it is not a verdict handed down on a people. It says the Qur'an clarifies most of what was disputed. It licenses nothing: no contempt, no suspicion, no hostility toward Jews or Christians, and nothing against any living person or community today. The commentators' talk of denial and overstatement describes positions taken in an old argument over scripture, not a permission to treat a present neighbour as an enemy. To read it as such is to turn a verse about truth into an excuse for harm.",
            "bn": "কথাটা দুই ভাষাতেই সোজাসুজি বলা দরকার। আয়াতটি এক কিতাব কর্তৃক আকীদার প্রশ্ন মীমাংসা নিয়ে, কোনো জাতির উপর দেওয়া রায় নয়। এটি বলছে কুরআন বিতর্কিত বিষয়ের অধিকাংশ স্পষ্ট করে দেয়। এটি কোনো কিছুরই অনুমতি দেয় না: ইহুদি বা খ্রিস্টানদের প্রতি কোনো অবজ্ঞা, সন্দেহ বা বিদ্বেষ নয়, আর আজকের কোনো জীবিত ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে কিছু নয়। তাফসীরকারদের অস্বীকার ও অতিরঞ্জনের আলোচনা কিতাব নিয়ে এক পুরোনো বিবাদের অবস্থান বর্ণনা করে, বর্তমান প্রতিবেশীকে শত্রু গণ্য করার অনুমতি নয়। একে তেমন ভাবা মানে সত্যের একটি আয়াতকে ক্ষতির অজুহাতে বদলে ফেলা।"
          },
          {
            "en": "So the verse turns back on whoever holds it. The arc of the passage moves on from here to the believers and to Allah's own judgement between people, but that is the ground of the verses that follow (27:77 and 27:78), not of these two. What these two leave with the reader is narrower and more personal. The Qur'an comes from the One whose Record holds every hidden thing, and it is able to decide. So what am I still disputing that it has already settled, and will I let the Author of the Record close the account, or keep arguing my side of it?",
            "bn": "তাই আয়াতটি ফিরে আসে যে একে ধরে আছে তার দিকে। অনুচ্ছেদের ধারা এখান থেকে এগিয়ে যায় মু'মিনদের দিকে আর মানুষের মধ্যে আল্লাহর নিজের ফয়সালার দিকে, তবে সেটা পরের আয়াতগুলোর জমিন (২৭:৭৭ ও ২৭:৭৮), এই দুটির নয়। এই দুই আয়াত পাঠকের হাতে যা রেখে যায় তা আরও সংকীর্ণ ও আরও ব্যক্তিগত। কুরআন এসেছে একমাত্র সেই সত্তার কাছ থেকে যাঁর কিতাব প্রতিটি অদৃশ্য বিষয় ধরে রাখে, আর এটি ফয়সালা করতে সক্ষম। তাহলে কী নিয়ে আমি এখনো তর্ক করছি যা এটি আগেই মিটিয়ে দিয়েছে? আমি কি কিতাবের রচয়িতাকে হিসাব বন্ধ করতে দেব, নাকি নিজের পক্ষ নিয়ে তর্ক করে যাব?"
          }
        ]
      }
    ]
  },
  "27:82": {
    "sections": [
      {
        "h": {
          "en": "When the Word Falls Due",
          "bn": "যখন কথা অবধারিত হয়"
        },
        "p": [
          {
            "en": "The verse opens on a hinge: wa-idha waqaʿa al-qawl ʿalayhim, and when the word befalls them. At-Tabari gathers what the early readers meant by this word. Mujahid takes waqaʿa as became binding and due upon them. Ibn Jurayj is blunter: the word here is the punishment itself. Qatada reads it as the wrath becoming due. However they phrase it, they agree the verse begins at a threshold, the moment a long-deferred sentence is finally entered against a people who have used up their reprieve.",
            "bn": "আয়াতটা শুরু হয় এক সন্ধিক্ষণে: ওয়া ইযা ওয়াকাআল কাওলু আলাইহিম, অর্থাৎ যখন কথা তাদের উপর আপতিত হবে। এই কথা বলতে পূর্বসূরিরা কী বুঝেছেন, তাবারী তা একত্র করেন। মুজাহিদের মতে ওয়াকাআ মানে তাদের উপর অবধারিত ও বাধ্যতামূলক হয়ে যাওয়া। ইবন জুরাইজ আরও সোজা বলেন, এখানে কথা মানে শাস্তি নিজেই। কাতাদাহ পড়েন, আল্লাহর গজব অবধারিত হওয়া। শব্দ যেভাবেই বসুক, সবাই একমত যে আয়াতটা এক দোরগোড়ায় শুরু হয়। বহুদিনের মুলতবি করা রায় শেষমেশ কার্যকর হচ্ছে এমন এক জাতির উপর, যারা অবকাশটুকু ফুরিয়ে ফেলেছে।"
          },
          {
            "en": "Al-Qurtubi asks when that threshold is reached. From Ibn Umar and Abu Saʿid al-Khudri he reports that the wrath falls due once people stop commanding good and forbidding wrong, letting the last restraint on a society slip. Ibn Masʿud draws it darker still: the word befalls them at the death of the scholars, the loss of knowledge, and the Qurʾan being lifted away, until people forget even to say there is no god but Allah and drift back into the talk of ignorance.",
            "bn": "এই দোরগোড়ায় কখন পৌঁছানো যায়, কুরতুবী সে প্রশ্ন তোলেন। ইবন উমর ও আবু সাঈদ খুদরি (রাঃ) থেকে তিনি আনেন: মানুষ যখন ভালোর আদেশ আর মন্দের নিষেধ ছেড়ে দেয়, সমাজের শেষ লাগামটুকুও যখন খসে পড়ে, তখন গজব অবধারিত হয়। ইবন মাসউদ (রাঃ) ছবিটা আরও অন্ধকার করে আঁকেন। আলেমদের মৃত্যু, ইলমের বিদায় আর কুরআন তুলে নেওয়ার সময়েই কথা তাদের উপর আপতিত হয়। মানুষ তখন লা ইলাহা ইল্লাল্লাহ বলতেও ভুলে যায়, ফিরে যায় জাহেলি যুগের কথাবার্তায়।"
          },
          {
            "en": "Both at-Tabari and al-Qurtubi preserve a sixth reading, from Abu al-ʿAliya, that moved him when he first grasped it. Allah had revealed to Nuh (AS) that none of his people would believe except those who already had. An-Nahhas calls this a fine answer: a people are reprieved only so long as faith is still possible among them, and once that possibility closes, the word falls due. Al-Qurtubi then steps back and says all of these views, considered carefully, come down to a single meaning.",
            "bn": "তাবারী ও কুরতুবী দুজনেই ষষ্ঠ একটি ব্যাখ্যা রক্ষা করেছেন, আবুল আলিয়ার সূত্রে, যা প্রথম বুঝতে পেরে তিনি নিজেই নড়ে উঠেছিলেন। আল্লাহ নূহ (আঃ)-এর কাছে ওহি পাঠিয়েছিলেন যে তাঁর জাতির মধ্যে আর কেউ ঈমান আনবে না, যারা এনেছে তারা ছাড়া। নাহহাস একে চমৎকার জবাব বলেন: কোনো জাতিকে অবকাশ দেওয়া হয় কেবল ততক্ষণ, যতক্ষণ তাদের মধ্যে ঈমানের সম্ভাবনা থাকে। সেই সম্ভাবনা ফুরালেই কথা অবধারিত হয়। এরপর কুরতুবী একটু পিছিয়ে দাঁড়িয়ে বলেন, ভালো করে ভাবলে এসব ব্যাখ্যা আসলে একই অর্থে এসে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Out of the Ground",
          "bn": "মাটি থেকে বের করা"
        },
        "p": [
          {
            "en": "Then the response: akhrajna lahum dabbatan mina al-ard, We bring out for them a creature from the earth. The verb is akhrajna, We produce it, not it is born; as-Sa'di notes it is a creature issuing out of the ground, not descending from the sky. Al-Muyassar sets the scene: in the last age, when people have sunk into disobedience and turned from Allah's law, He brings up from the earth one of the great signs of the Hour. Ibn Kathir fixes the same timing, the hour of a corrupted and altered religion.",
            "bn": "তারপর আসে জবাব: আখরাজনা লাহুম দাব্বাতাম মিনাল আরদ, আমি তাদের জন্য যমীন থেকে একটি জন্তু বের করব। ক্রিয়াটি আখরাজনা, অর্থাৎ আমি তাকে বের করি, সে জন্মায় না। সাদী ধরিয়ে দেন, এ জন্তু মাটি ফুঁড়ে বেরিয়ে আসা কিছু, আসমান থেকে নেমে আসা নয়। মুয়াসসার পরিবেশটা সাজিয়ে দেন: শেষ যুগে মানুষ যখন নাফরমানিতে ডুবে গিয়ে আল্লাহর বিধান থেকে মুখ ফিরিয়ে নেয়, তখন তিনি যমীন থেকে কিয়ামতের অন্যতম বড় নিদর্শন তুলে আনেন। ইবন কাসীর একই সময়কে চিহ্নিত করেন, দ্বীন যখন বিকৃত আর বদলে যাওয়া অবস্থায়।"
          },
          {
            "en": "Where does it come from? At-Tabari relays that the earth meant is Makkah, and from Ibn Umar that it climbs from a cleft in al-Safa. Yet these are reports around the verse, not its words; the Qurʾan names no place. As-Sa'di draws the honest line: this is the well-known beast foretold for the end of time, a portent the hadiths mention often, but no proof has reached us of its shape or its kind. The verse says only that Allah brings it out and that its speaking breaks every familiar order.",
            "bn": "কোথা থেকে আসে এ জন্তু? তাবারী বর্ণনা করেন, যে যমীনের কথা বলা হয়েছে তা মক্কা, আর ইবন উমর (রাঃ) থেকে আনেন যে তা সাফা পাহাড়ের ফাটল থেকে উঠে আসে। তবে এগুলো আয়াতকে ঘিরে বর্ণনা, আয়াতের নিজের কথা নয়। কুরআন কোনো স্থানের নাম বলেনি। সাদী সৎ সীমারেখাটা টেনে দেন: এ সেই প্রসিদ্ধ জন্তু, শেষ যুগের জন্য যার কথা বলা হয়েছে, হাদিসে বারবার আসা কিয়ামতের আলামত। কিন্তু তার আকৃতি বা জাত কী, তার কোনো প্রমাণ আমাদের কাছে পৌঁছায়নি। আয়াত শুধু এটুকু বলে যে আল্লাহ তাকে বের করেন আর তার কথা বলা চেনা সব নিয়ম ভেঙে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Scholars Left Unsaid",
          "bn": "যা আলেমরা বলেননি"
        },
        "p": [
          {
            "en": "Here the sources turn generous, and this is exactly where a reader must grow careful. Al-Qurtubi, al-Baghawi and Ibn Kathir all relay vivid portraits of the beast, traced to Ibn al-Zubayr and others: a head like a bull, an eye like a pig, limbs gathered from many animals, carrying the staff of Musa (AS) and the ring of Sulayman (AS), making the believer's face shine and the disbeliever's go dark. These are reports the commentators pass along, weighing their chains, not clauses the verse itself sets down.",
            "bn": "এখানে এসে উৎসগুলো উদার হয়ে ওঠে, আর ঠিক এখানেই পাঠককে সতর্ক হতে হয়। কুরতুবী, বাগভী ও ইবন কাসীর সবাই জন্তুটির রঙিন বর্ণনা আনেন, ইবন জুবাইর ও অন্যদের সূত্রে: মাথা ষাঁড়ের মতো, চোখ শূকরের মতো, নানা প্রাণীর অঙ্গ জোড়া দেওয়া শরীর, সঙ্গে মূসা (আঃ)-এর লাঠি আর সুলাইমান (আঃ)-এর আংটি, যা মুমিনের চেহারা উজ্জ্বল করে আর কাফিরের চেহারা কালো করে দেয়। এগুলো তাফসীরকারদের বর্ণনা, যার সনদ তাঁরা যাচাই করেন। আয়াত নিজে এসব কথা বলেনি।"
          },
          {
            "en": "The careful scholars say so themselves. Ma'arif al-Qurʾan states flatly that Ibn Kathir relates many things about the beast's appearance and doings, most of them not trustworthy, so one should hold only to what the Qurʾan and sound hadith establish and set the rest aside as neither reliable nor useful. As-Sa'di had already drawn the same boundary: no evidence fixes its form or its kind. The restraint is not a gap in the lesson; the restraint is the lesson.",
            "bn": "সতর্ক আলেমরা নিজেরাই তা বলেন। মাআরিফুল কুরআন সাফ বলে দেয়, ইবন কাসীর জন্তুটির চেহারা ও কাজকর্ম নিয়ে অনেক কিছু বর্ণনা করেছেন, যার বেশির ভাগই নির্ভরযোগ্য নয়। তাই কুরআন আর সহিহ হাদিস যা প্রতিষ্ঠিত করে কেবল তাকেই ধরা উচিত, বাকিটা অনির্ভর ও অকেজো বলে সরিয়ে রাখা উচিত। সাদী আগেই একই সীমা টেনে রেখেছিলেন: এর আকৃতি বা জাত কোনো প্রমাণেই নির্ধারিত নয়। এই সংযম শিক্ষার ঘাটতি নয়, এই সংযমই শিক্ষা।"
          },
          {
            "en": "Al-Qurtubi even records a dispute over whether the beast is an animal at all: some later commentators held it to be a speaking man who would debate the people of innovation and unbelief. He rejects this through his teacher in al-Mufhim, on two grounds. Such a debater would be no special, order-breaking sign, and so not one of the portents listed in the hadith; and to call a learned, virtuous man a beast insults both plain speech and the honour owed to scholars. So even the identity stays open, and no honest reader hardens the picture.",
            "bn": "জন্তুটা আদৌ প্রাণী কিনা, সে নিয়ে বিতর্কও কুরতুবী তুলে ধরেন। পরবর্তী কিছু তাফসীরকার মনে করতেন, এ আসলে কথা বলা একজন মানুষ, যে বিদআতি আর কাফিরদের সঙ্গে বিতর্ক করবে। নিজের উস্তাদের আল-মুফহিম গ্রন্থের সূত্রে কুরতুবী এ মত খারিজ করেন, দুটি কারণে। এমন বিতার্কিক কোনো বিশেষ, নিয়ম-ভাঙা নিদর্শন হতেন না, তাই হাদিসে গোনা আলামতগুলোরও একটি হতেন না। আর একজন আলেম, সজ্জন মানুষকে জন্তু নাম দেওয়া সোজা কথা আর আলেমদের মর্যাদা দুইয়েরই অপমান। তাই পরিচয়টুকুও খোলা থাকে, কোনো সৎ পাঠক ছবিটা পাকা করে ফেলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb Read Both Ways",
          "bn": "এক ক্রিয়া, দুই পাঠ"
        },
        "p": [
          {
            "en": "The whole weight of the drama rests on one word, tukallimuhum. At-Tabari reports that the general reciters of the great cities read it tukallimuhum, with a doubled lam, from kalam, meaning it addresses and informs them; he says he permits no reading but theirs. From Ibn Abbas he gives the sense as tuhaddithuhum, it speaks to them, and al-Qurtubi notes the reading of Ubayy, tunabbiʾuhum, it tells them, which points the same way. On this reading the beast opens its mouth and makes an announcement.",
            "bn": "গোটা নাটকের ভার যে শব্দটির উপর, তা হলো তুকাল্লিমুহুম। তাবারী জানান, বড় শহরগুলোর সাধারণ ক্বারীরা পড়েন তুকাল্লিমুহুম, লামে শদ্দা দিয়ে, কালাম থেকে, অর্থাৎ সে তাদের সঙ্গে কথা বলে ও সংবাদ দেয়। তিনি বলেন, এ ছাড়া অন্য কোনো পাঠ তিনি মানেন না। ইবন আব্বাস (রাঃ) থেকে তিনি অর্থ দেন তুহাদ্দিসুহুম, সে তাদের সঙ্গে কথা বলে। কুরতুবী আনেন উবাই (রাঃ)-এর পাঠ তুনাব্বিউহুম, সে তাদের জানিয়ে দেয়, যা একই দিকে ইঙ্গিত করে। এ পাঠে জন্তুটা মুখ খুলে ঘোষণা দেয়।"
          },
          {
            "en": "A second, lighter reading changes everything. Al-Baghawi lists Saʿid ibn Jubayr, ʿAsim al-Jahdari and Abu Rajaʾ al-ʿUtaridi reading taklimuhum, with a single light lam, from al-kalm, which means the wound; ʿIkrima glosses it as it marks them. At-Tabari records the same reading from Abu Zurʿa. On this reading the beast delivers no speech at all but sets a brand on the faces it touches, a mark no one can rub away or argue against.",
            "bn": "আরেকটি হালকা পাঠ গোটা ছবিটাই বদলে দেয়। বাগভী তালিকা দেন সাঈদ ইবন জুবাইর, আসিম জাহদারি ও আবু রাজা উতারিদির, যাঁরা পড়েন তাকলিমুহুম, হালকা এক লাম দিয়ে, কালম থেকে, যার অর্থ ক্ষত বা জখম। ইকরিমা এর ব্যাখ্যা দেন, সে তাদের গায়ে দাগ বসিয়ে দেয়। তাবারী একই পাঠ আনেন আবু যুরআ থেকে। এ পাঠে জন্তুটা কোনো ভাষণ দেয় না, বরং যে চেহারা সে ছোঁয় তাতে বসিয়ে দেয় এমন ছাপ, যা কেউ মুছতেও পারে না, নিয়েও তর্ক করতে পারে না।"
          },
          {
            "en": "Then Ibn Abbas folds the two together. Abu al-Jawzaʾ asked him which reading was right, tukallimuhum or taklimuhum, and he answered, by Allah, it does both: it speaks to the believer and it marks the unbeliever. Al-Baghawi, al-Qurtubi and Ibn Kathir all preserve this, and Ibn Kathir calls it a fine view with no contradiction in it. The two readings are not rivals; between them they divide the work, a word of welcome for the believing face and a seal of exposure for the other.",
            "bn": "এরপর ইবন আব্বাস (রাঃ) দুই পাঠকে এক করে দেন। আবুল জাওযা তাঁকে জিজ্ঞেস করেছিলেন কোন পাঠ সঠিক, তুকাল্লিমুহুম নাকি তাকলিমুহুম। তিনি জবাব দেন, আল্লাহর কসম, সে দুটোই করে: মুমিনের সঙ্গে কথা বলে, আর কাফিরের গায়ে দাগ বসায়। বাগভী, কুরতুবী ও ইবন কাসীর সবাই এ কথা রক্ষা করেছেন, আর ইবন কাসীর একে চমৎকার মত বলেন, যাতে কোনো অসংগতি নেই। দুই পাঠ পরস্পরের প্রতিদ্বন্দ্বী নয়। দুইয়ে মিলে কাজ ভাগ করে নেয়, বিশ্বাসী চেহারার জন্য অভ্যর্থনার কথা, অন্য চেহারার জন্য ফাঁস করে দেওয়ার মোহর।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Creature Says",
          "bn": "জন্তুটি যা বলবে"
        },
        "p": [
          {
            "en": "What would it actually say? Al-Baghawi gathers the views. As-Suddi held that it pronounces the falsehood of every religion but Islam. Others said its speech is to name each person present as a believer or an unbeliever. A third group read its words as the verse's own closing clause. Muqatil had it speak plain Arabic, declaring that the people had no certainty in the signs and that the people of Makkah had not believed the Qurʾan or the Resurrection.",
            "bn": "জন্তুটা আসলে কী বলবে? বাগভী মতগুলো একত্র করেন। সুদ্দী মনে করতেন, সে ইসলাম ছাড়া প্রতিটি ধর্মের বাতিল হওয়ার ঘোষণা দেবে। কেউ বলেন, তার কথা হবে উপস্থিত প্রত্যেককে চিনিয়ে দেওয়া: এ মুমিন, ও কাফির। তৃতীয় একদল তার কথা বলতে বোঝেন আয়াতের শেষ বাক্যটাকেই। মুকাতিল বলেন, সে স্পষ্ট আরবিতে কথা বলবে, জানিয়ে দেবে যে মানুষ নিদর্শনে দৃঢ় বিশ্বাস রাখেনি আর মক্কার লোকেরা কুরআন ও পুনরুত্থান বিশ্বাস করেনি।"
          },
          {
            "en": "Ibn Kathir reads it more simply. From Ibn Abbas, al-Hasan and Qatada, and also from Ali, he reports that it addresses people in ordinary speech, the way people speak among themselves. ʿAtaʾ al-Khurasani held that its words are the verse's own clause, that the people had no certainty; at-Tabari chose this. Here the two part company: Ibn Kathir says that taking the clause as the beast's literal speech carries a difficulty not hidden from view, and leaves it there without forcing a verdict.",
            "bn": "ইবন কাসীর ব্যাপারটা আরও সরলভাবে পড়েন। ইবন আব্বাস (রাঃ), হাসান ও কাতাদাহ থেকে, আর আলি (রাঃ) থেকেও তিনি আনেন যে সে মানুষের সঙ্গে সাধারণ কথাবার্তাই বলবে, মানুষ যেভাবে নিজেদের মধ্যে কথা বলে। আতা খুরাসানি মনে করতেন, তার কথা আয়াতের সেই বাক্যই, যে মানুষ দৃঢ় বিশ্বাস রাখেনি। তাবারী এ মতই বেছে নেন। এখানেই দুজনের পথ আলাদা হয়ে যায়। আয়াতের বাক্যটিকে জন্তুর আক্ষরিক কথা ধরা নিয়ে ইবন কাসীর বলেন, এতে এমন অসুবিধা আছে যা চোখ এড়ায় না, আর তিনি কোনো রায় চাপিয়ে না দিয়ে কথাটা সেখানেই রেখে দেন।"
          },
          {
            "en": "Another fork runs through the clause itself. At-Tabari notes that the reciters of Kufa read anna with a fatha, so the beast speaks to them that the people had no certainty, making the words the content of its message. The reciters of the Hijaz, Syria and Basra read inna with a kasra, a fresh sentence: indeed the people had no certainty in Our signs. Al-Baghawi adds the sense, that they had no certainty before the beast ever emerged. At-Tabari rules both readings sound and close in meaning.",
            "bn": "আরেকটা ভাগ চলে গেছে বাক্যটার ভেতর দিয়েই। তাবারী জানান, কুফার ক্বারীরা আন্না পড়েন যবর দিয়ে, ফলে জন্তু তাদের বলে যে মানুষ দৃঢ় বিশ্বাস রাখেনি, আর তখন কথাগুলো হয় তার বার্তার বিষয়বস্তু। হিজাজ, সিরিয়া ও বসরার ক্বারীরা ইন্না পড়েন যের দিয়ে, নতুন বাক্য হিসেবে: নিশ্চয় মানুষ আমার নিদর্শনে দৃঢ় বিশ্বাস রাখেনি। বাগভী অর্থটা জুড়ে দেন, জন্তু বেরোনোর আগেই তারা দৃঢ় বিশ্বাস রাখেনি। তাবারী দুই পাঠকেই সহিহ ও কাছাকাছি অর্থের বলে রায় দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Charge It Delivers",
          "bn": "যে অভিযোগ সে শোনায়"
        },
        "p": [
          {
            "en": "The charge the creature carries is precise: that the people were not certain of Our signs. As-Sa'di reads the whole episode from that clause. Because people's knowledge and certainty in Allah's signs had grown weak, Allah brings out this astonishing sign to make plain to them the very thing they had kept doubting. There is a hard irony in it. The indictment is not that they were shown nothing, but that signs were set before them and never settled into certainty.",
            "bn": "জন্তুটা যে অভিযোগ বহন করে তা নিখুঁত: মানুষ আমার নিদর্শনে দৃঢ় বিশ্বাস রাখেনি। সাদী গোটা ঘটনাটাই এই বাক্য থেকে পড়েন। আল্লাহর নিদর্শনে মানুষের জ্ঞান আর দৃঢ় বিশ্বাস যখন দুর্বল হয়ে পড়েছিল, তখন তিনি এই বিস্ময়কর নিদর্শন বের করে আনেন, যাতে যে জিনিস নিয়ে তারা সন্দেহ পুষে রেখেছিল তা তাদের কাছে স্পষ্ট হয়ে যায়। এর ভেতরে এক কঠিন পরিহাস লুকানো। অভিযোগ এই নয় যে তাদের কিছুই দেখানো হয়নি, বরং নিদর্শন তাদের সামনেই ছিল, কিন্তু তা কখনো দৃঢ় বিশ্বাসে থিতু হয়নি।"
          },
          {
            "en": "The verse sits inside a run on exactly this theme. Just before, Allah tells His Prophet ﷺ that he cannot make the dead hear nor guide the blind from their error (27:80 and 27:81): certainty was never his to force. Soon after, when the decree befalls the wrongdoers, they will not speak at all (27:85), while here it is the beast that speaks and they who are exposed. At the gathering they are asked whether they denied His signs without ever encompassing them in knowledge (27:83 and 27:84).",
            "bn": "আয়াতটা ঠিক এই বিষয়ের ধারাবাহিকতার ভেতরে বসে আছে। একটু আগেই আল্লাহ তাঁর নবী ﷺ-কে বলেন, তিনি মৃতকে শোনাতে পারবেন না, অন্ধকে তার গুমরাহি থেকে পথ দেখাতে পারবেন না (২৭:৮০ ও ২৭:৮১), দৃঢ় বিশ্বাস জোর করে আদায়ের জিনিস কখনো ছিল না। এর কিছু পরেই, জালিমদের উপর ফায়সালা নেমে এলে তারা কোনো কথাই বলতে পারবে না (২৭:৮৫), অথচ এখানে জন্তুই কথা বলে আর তারা ধরা পড়ে যায়। সমাবেশে তাদের জিজ্ঞেস করা হবে, জ্ঞানে আয়ত্ত না করেই তারা কি আমার নিদর্শনকে অস্বীকার করেছিল (২৭:৮৩ ও ২৭:৮৪)।"
          }
        ]
      },
      {
        "h": {
          "en": "When Belief Comes Too Late",
          "bn": "যখন বিশ্বাস বড় দেরিতে আসে"
        },
        "p": [
          {
            "en": "This is why the sign is terminal. Al-Qurtubi explains that its emergence marks the point where Allah no longer accepts faith from any disbeliever, when only believers and disbelievers remain as Allah already knows them to be. Ma'arif al-Qurʾan, citing the earlier scholars, puts it in practice: once the beast appears, the duty of calling to good and forbidding wrong falls away, and after it no disbeliever will enter Islam. The door that stood open through all of history quietly shuts.",
            "bn": "এজন্যই এ নিদর্শন চূড়ান্ত। কুরতুবী ব্যাখ্যা করেন, এর আগমন সেই মুহূর্তকে চিহ্নিত করে যখন আল্লাহ আর কোনো কাফিরের ঈমান কবুল করেন না, যখন কেবল মুমিন আর কাফিররাই থেকে যায়, আল্লাহ যেভাবে আগে থেকেই তাদের জানেন। মাআরিফুল কুরআন পূর্ববর্তী আলেমদের উদ্ধৃত করে কাজের কথায় নামে: জন্তু বেরিয়ে এলে ভালোর আদেশ আর মন্দের নিষেধের দায়িত্ব খসে পড়ে, আর তারপর কোনো কাফির আর ইসলামে প্রবেশ করবে না। গোটা ইতিহাসজুড়ে খোলা থাকা দরজাটা তখন চুপচাপ বন্ধ হয়ে যায়।"
          },
          {
            "en": "A sound hadith seals the point. Al-Qurtubi cites it from Sahih Muslim, where Abu Hurayra (RA) reports that the Messenger of Allah ﷺ said: 'Three things, when they appear, faith will not benefit a soul that had not believed before, or earned good through its faith: the rising of the sun from its place of setting, the Dajjal, and the beast of the earth.' Muslim placed it in his Sahih, so the grading is his own authentication. The beast stands in the same list as the sun turned backward.",
            "bn": "একটি সহিহ হাদিস কথাটায় সিলমোহর বসিয়ে দেয়। কুরতুবী তা সহিহ মুসলিম থেকে উদ্ধৃত করেন, যেখানে আবু হুরায়রা (রাঃ) বর্ণনা করেন যে রাসুলুল্লাহ ﷺ বলেছেন: তিনটি জিনিস যখন বেরিয়ে আসবে, তখন এমন কারও ঈমান কাজে আসবে না যে আগে ঈমান আনেনি, কিংবা ঈমানের মধ্যে কোনো কল্যাণ অর্জন করেনি: পশ্চিম দিক থেকে সূর্য ওঠা, দাজ্জাল আর যমীনের জন্তু। মুসলিম একে নিজের সহিহ গ্রন্থে রেখেছেন, তাই এর তাসহিহ তাঁরই করা। জন্তুটা সেই একই তালিকায়, যেখানে আছে উল্টো দিকে সূর্য ওঠা।"
          },
          {
            "en": "The logic is quiet and exact. Faith has worth because it is given while the unseen is still unseen, when a heart weighs what it cannot touch and decides to trust. Let the sun climb from the west, let the earth open and a creature address the crowd by name, and belief is no longer a venture; it is surrender to the undeniable. There is no reward in conceding what can no longer be refused. The age of compelled signs pays nothing, and the verse warns against banking on it.",
            "bn": "যুক্তিটা শান্ত আর নিখুঁত। ঈমানের মূল্য এজন্যই যে তা দেওয়া হয় অদৃশ্য যতক্ষণ অদৃশ্য থাকে ততক্ষণ, যখন মন এমন কিছু ওজন করে যা ছোঁয়া যায় না আর সেটাকেই বিশ্বাস করার সিদ্ধান্ত নেয়। সূর্য পশ্চিমে উঠুক, মাটি ফেটে একটা জন্তু ভিড়ের সবাইকে নাম ধরে ডাকুক, তখন বিশ্বাস আর কোনো ঝুঁকির ব্যাপার থাকে না। তা হয়ে যায় অনিবার্যের কাছে নিছক আত্মসমর্পণ। যা আর অস্বীকার করা যায় না, তা মেনে নেওয়ায় কোনো প্রতিদান নেই। বাধ্য করা নিদর্শনের যুগ কিছুই দেয় না, আর আয়াত সেই যুগের উপর ভরসা করার বিরুদ্ধে সতর্ক করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mercy in the Delay",
          "bn": "দেরির ভেতরের রহমত"
        },
        "p": [
          {
            "en": "Read the verse for its tense, and a mercy opens inside the warning. None of this has happened yet. The ground under your feet is quiet, the sun came up this morning where it always has, and the signs around you still need a believing heart to be read as signs. The very next verse asks whether they do not see the night made for rest and the day for sight, calling these signs for a people who believe (27:86). That ordinary morning is the reprieve, still running.",
            "bn": "আয়াতটা তার কাল ধরে পড়ুন, তখন সতর্কবাণীর ভেতরেই রহমত খুলে যায়। এর কিছুই এখনো ঘটেনি। আপনার পায়ের নিচের মাটি চুপচাপ, সূর্য আজ সকালেও যেখান থেকে ওঠে সেখান থেকেই উঠেছে, আর চারপাশের নিদর্শনগুলো নিদর্শন হিসেবে পড়তে এখনো বিশ্বাসী মন লাগে। পরের আয়াতই জিজ্ঞেস করে, তারা কি দেখে না যে রাত বানানো হয়েছে বিশ্রামের জন্য আর দিন দেখার জন্য, আর এগুলোকে বলে বিশ্বাসী সম্প্রদায়ের জন্য নিদর্শন (২৭:৮৬)। সেই সাদামাটা সকালটাই অবকাশ, যা এখনো চলছে।"
          },
          {
            "en": "So the lesson is not a monster to picture but a clock to read. On the day the earth gives up a speaking creature, everyone will believe, and no belief will weigh a thing at all. The kindness hidden in this verse is that the earth is still silent, that certainty is still something a quiet heart chooses rather than something a sign forces upon it. Settle now, while it is still yours to settle, what that day would otherwise tear from you too late. The open window is the whole gift.",
            "bn": "তাই এ শিক্ষা কল্পনা করার মতো কোনো দানব নয়, পড়ার মতো ঘড়ি। যেদিন মাটি কথা বলা জন্তু উগরে দেবে, সেদিন সবাই বিশ্বাস করবে, অথচ কারও বিশ্বাসের কোনো ওজনই থাকবে না। এ আয়াতে লুকানো দয়া এটাই যে মাটি এখনো নীরব, দৃঢ় বিশ্বাস এখনো এমন কিছু যা শান্ত মন বেছে নেয়, কোনো নিদর্শন জোর করে চাপিয়ে দেয় না। যতক্ষণ থিতু করা আপনার হাতে, এখনই থিতু করে ফেলুন সেটুকু, যা সেদিন অনেক দেরিতে আপনার কাছ থেকে ছিনিয়ে নেওয়া হতো। খোলা এই জানালাটাই গোটা উপহার।"
          }
        ]
      }
    ]
  },
  "27:92": {
    "sections": [
      {
        "h": {
          "en": "The Third Thing Commanded",
          "bn": "তৃতীয় যে নির্দেশ"
        },
        "p": [
          {
            "en": "The declaration began in the verse before. The Prophet is told to say that he was commanded only to worship the Lord of this city, who made it sacred, and to be among those who submit (27:91). Our verse adds the third item to the same list: and to recite the Qur'an (27:92). Al-Qurtubi reads the words as 'and I was commanded to recite the Qur'an,' supplying the governing verb from the sentence before it, so that reciting takes its place beside worship and submission as something ordered rather than chosen.",
            "bn": "ঘোষণাটি শুরু হয়েছে আগের আয়াতেই। নবী ﷺ-কে বলতে বলা হয়েছে, তাঁকে কেবল এই নগরীর রবের ইবাদাত করার নির্দেশ দেওয়া হয়েছে, যিনি একে সম্মানিত করেছেন, আর তাঁকে আত্মসমর্পণকারীদের অন্তর্ভুক্ত হতে বলা হয়েছে (২৭:৯১)। আমাদের আয়াত সেই একই তালিকায় তৃতীয় কাজটি যোগ করে: আর যেন কুরআন তিলাওয়াত করি (২৭:৯২)। কুরতুবী কথাগুলো এভাবে পড়েন, আমাকে কুরআন তিলাওয়াত করার নির্দেশ দেওয়া হয়েছে। তিনি আগের বাক্য থেকে ক্রিয়াটি এনে বসান, যাতে তিলাওয়াত ইবাদাত ও আত্মসমর্পণের পাশে এক আদিষ্ট কাজ হিসেবেই দাঁড়ায়, বেছে নেওয়া কিছু নয়।"
          },
          {
            "en": "Ibn Kathir fixes what reciting means here. To recite the Qur'an, he writes, is to recite it to the people, to convey it to them, and he lines the phrase up with other verses where the same verb carries that sense: 'This We recite to you of the signs and the wise reminder' (3:58), and 'We recite to you from the account of Moses and Pharaoh in truth' (28:3). The reciting is outward, a handing over. From it he draws the Prophet's own summary of his task: I am a conveyer and a warner.",
            "bn": "এখানে তিলাওয়াত মানে কী, ইবন কাসীর তা স্পষ্ট করেন। কুরআন তিলাওয়াত করা মানে, তিনি লেখেন, তা মানুষের কাছে পড়ে শোনানো, তাদের কাছে পৌঁছে দেওয়া। একই ক্রিয়া যেসব আয়াতে এই অর্থে এসেছে, তিনি সেগুলোর সঙ্গে কথাটি মিলিয়ে দেন: এই আমি তোমার কাছে তিলাওয়াত করছি নিদর্শন ও প্রজ্ঞাময় উপদেশ থেকে (৩:৫৮), আর আমি তোমার কাছে মূসা (আঃ) ও ফিরআউনের বৃত্তান্ত থেকে সত্যসহ তিলাওয়াত করছি (২৮:৩)। তিলাওয়াত তাই বাইরের দিকে মুখ করা, হাতে তুলে দেওয়া। এ থেকে তিনি নবীর ﷺ নিজের কাজের সারকথা টেনে আনেন: আমি পৌঁছে দেওয়ার লোক ও সতর্ককারী।"
          },
          {
            "en": "The grammarians add a note worth keeping. Al-Qurtubi reports a reading question around the word, and al-Farra' mentions a variant recitation, 'wa an itlu,' though an-Nahhas answers that he knows of nobody who recited it and that it runs against every codex. The point for a reader is small but steadying: the received text is 'wa an atluwa,' reciting as a standing command, not a passing suggestion. The Qur'an is meant to be carried on the tongue, continually, not read once and set down.",
            "bn": "ব্যাকরণবিদরা একটি কথা যোগ করেন যা রেখে দেওয়ার মতো। কুরতুবী শব্দটি ঘিরে এক পঠন-প্রশ্নের কথা বলেন, আর ফাররা উল্লেখ করেন এক ভিন্ন কিরাআত, ওয়া আন ইতলু, যদিও নাহহাস জবাব দেন যে এমন কাউকে তিনি জানেন না যে এটি পড়েছে, আর তা প্রতিটি মুসহাফের বিপরীত। পাঠকের জন্য কথাটি ছোট, কিন্তু স্থির করে দেয়: গৃহীত পাঠ হলো ওয়া আন আতলুওয়া, তিলাওয়াত এক স্থায়ী নির্দেশ হিসেবে, কোনো ক্ষণিক পরামর্শ নয়। কুরআন জিহ্বায় অবিরত বয়ে বেড়ানোর জিনিস, একবার পড়ে রেখে দেওয়ার নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "To Recite Is to Deliver",
          "bn": "তিলাওয়াত মানে পৌঁছে দেওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di turns the phrase toward its purpose. I was also commanded, he has the Prophet say, to recite the Qur'an to you, so that you may be guided by it, follow it, and come to know its words and its meanings. Then he adds the line that settles the whole verse: this is what is upon me, and I have carried it out. The recitation is the Prophet's assignment; being guided by it is the listener's. As-Sa'di keeps the two clearly apart, and most of this article lives in that gap.",
            "bn": "সাদী কথাটিকে তার উদ্দেশ্যের দিকে ঘুরিয়ে দেন। নবীকে ﷺ দিয়ে তিনি বলান, আমাকে আরও নির্দেশ দেওয়া হয়েছে তোমাদের কাছে কুরআন তিলাওয়াত করতে, যাতে তোমরা তা দিয়ে পথ পাও, তা অনুসরণ করো, আর তার শব্দ ও অর্থ জেনে নাও। তারপর তিনি সেই বাক্যটি যোগ করেন যা গোটা আয়াতের মীমাংসা করে দেয়: এটুকুই আমার দায়িত্ব, আর আমি তা আদায় করে দিয়েছি। তিলাওয়াত নবীর ﷺ ভাগের কাজ, আর তা দিয়ে পথ পাওয়া শ্রোতার ভাগের। সাদী দুটিকে স্পষ্ট আলাদা রাখেন, আর এই লেখার বেশিটাই সেই ফাঁকটুকুতে বাস করে।"
          },
          {
            "en": "Al-Baghawi says the same from the other side. Whoever is guided, he writes, the benefit of his guidance returns to him; and of the Prophet he says there is nothing upon him except the conveying. Al-Muyassar puts it most plainly of all: whoever is guided by what the Qur'an contains and follows what was brought, its good and its reward belong to himself. The verse is not describing a bargain struck between a preacher and his audience. It is describing where the profit of guidance actually lands when it lands at all.",
            "bn": "বাগভী একই কথা বলেন অন্য দিক থেকে। যে পথ পায়, তিনি লেখেন, তার হেদায়েতের উপকার তার নিজের কাছেই ফিরে আসে; আর নবীর ﷺ সম্পর্কে তিনি বলেন, পৌঁছে দেওয়া ছাড়া তাঁর উপর আর কিছু নেই। মুয়াসসার কথাটি বলেন সবচেয়ে সোজা করে: কুরআনে যা আছে তা দিয়ে যে পথ পায় আর যা আনা হয়েছে তা মানে, তার ভালো ও প্রতিদান তার নিজেরই। আয়াতটি কোনো প্রচারক ও তার শ্রোতার মধ্যে করা দর-কষাকষির বর্ণনা দিচ্ছে না। এটি বলছে, হেদায়েতের মুনাফা আসলে কোথায় গিয়ে পড়ে, যদি আদৌ পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gain Comes Back",
          "bn": "লাভ ফেরে নিজের ঘরে"
        },
        "p": [
          {
            "en": "Then the hinge of the verse: whoever is guided is only guided for himself. At-Tabari unfolds it word by word. Whoever is guided means whoever follows me and believes in me and in what I brought, and so walks the road of right conduct. Is only guided for himself means that by this following and this faith he walks the way of what is sound for his own sake, because through belief he secures safety from God's punishment in this world and His chastisement in the next. The good of it never leaves the person who chose it.",
            "bn": "এরপর আয়াতের মূল বাঁক: যে পথ পায়, সে কেবল নিজের জন্যই পথ পায়। তাবারী একে শব্দে শব্দে খোলেন। যে পথ পায় মানে যে আমাকে অনুসরণ করে, আমার উপর আর আমি যা এনেছি তার উপর ঈমান আনে, আর এভাবে সঠিক আচরণের পথে চলে। কেবল নিজের জন্যই পথ পায় মানে এই অনুসরণ ও এই ঈমানের মধ্য দিয়ে সে নিজের স্বার্থেই সঠিক পথে চলে, কারণ ঈমানের দরুন সে দুনিয়ায় আল্লাহর শাস্তি আর আখিরাতে তাঁর আযাব থেকে নিরাপদ হয়। এর কল্যাণ কখনো সেই মানুষটিকে ছেড়ে যায় না, যে তা বেছে নিয়েছে।"
          },
          {
            "en": "As-Sa'di says the fruit of it comes back to him; al-Baghawi, that the benefit returns to him; al-Muyassar, that its good and reward are his own. Four readings, one point: guidance is not a favour the guided person does for the caller who reached him. It is a gift he accepts for his own sake. The caller is not enriched when someone accepts, and loses nothing of his own when someone refuses. This matters, because much of the pain of calling others to good comes from quietly forgetting it.",
            "bn": "সাদী বলেন, এর ফল তার কাছেই ফিরে আসে; বাগভী বলেন, উপকার তার দিকেই ফেরে; মুয়াসসার বলেন, এর ভালো ও প্রতিদান তারই। চারটি পাঠ, একটি কথা: হেদায়েত সেই আহ্বানকারীর প্রতি কোনো অনুগ্রহ নয় যে তার কাছে পৌঁছেছিল। এটি এমন এক দান যা সে নিজের স্বার্থেই গ্রহণ করে। কেউ গ্রহণ করলে আহ্বানকারী ধনী হয়ে যায় না, আর কেউ ফিরিয়ে দিলে তার নিজের কিছুই কমে না। কথাটি জরুরি, কারণ অন্যকে কল্যাণের দিকে ডাকার কষ্টের অনেকটাই আসে এটি চুপচাপ ভুলে যাওয়া থেকে।"
          },
          {
            "en": "There is a mercy hidden in this arithmetic. If guidance were something we could hand to others, we would spend our lives frustrated by the hearts that stayed shut and quietly proud over the hearts that opened, as if we had opened them. The verse takes both the frustration and the pride away. None is saved by our effort, and none is lost by our failure. We offer; God guides; whoever accepts gathers the harvest for himself. It leaves the caller lighter and far more honest about his own small place.",
            "bn": "এই হিসাবের ভেতরে একটি রহমত লুকিয়ে আছে। হেদায়েত যদি এমন কিছু হতো যা আমরা অন্যকে হাতে তুলে দিতে পারতাম, তবে আমরা জীবন কাটিয়ে দিতাম যে হৃদয়গুলো বন্ধ থেকে গেল তাদের নিয়ে হতাশায়, আর যে হৃদয়গুলো খুলে গেল তাদের নিয়ে চুপচাপ গর্বে, যেন আমরাই সেগুলো খুলেছি। আয়াতটি হতাশা ও গর্ব দুটিই সরিয়ে নেয়। আমাদের চেষ্টায় কেউ বাঁচে না, আর আমাদের ব্যর্থতায় কেউ হারায় না। আমরা দিই; আল্লাহ পথ দেখান; যে গ্রহণ করে সে নিজের জন্যই ফসল ঘরে তোলে। এতে আহ্বানকারী হালকা হয়, আর নিজের ছোট জায়গাটা নিয়ে অনেক বেশি সৎ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Straying Falls on the Self",
          "bn": "গুমরাহি নিজের কাঁধেই"
        },
        "p": [
          {
            "en": "The other half follows: and whoever strays. At-Tabari reads straying here as turning from the straight path by denying me and denying what I brought from God. Then he expands the warner's own words into a speech to the Quraysh: I have warned you of God's punishment for disobeying Him. If you accept and hold back from the idolatry He hates, it is your own shares of good you win; and if you refuse and call it a lie, it is against yourselves that you have offended. The straying, like the guidance, lands on the self.",
            "bn": "এবার অন্য অর্ধেক: আর যে গুমরাহ হয়। তাবারী এখানে গুমরাহিকে পড়েন সোজা পথ থেকে সরে যাওয়া হিসেবে, যা ঘটে আমাকে আর আমি আল্লাহর কাছ থেকে যা এনেছি তা অস্বীকার করে। তারপর তিনি সতর্ককারীর কথাগুলোকে কুরাইশের উদ্দেশে এক ভাষণে বিস্তৃত করেন: আমি তোমাদের আল্লাহর অবাধ্যতার শাস্তি সম্পর্কে সতর্ক করেছি। তোমরা যদি মেনে নাও আর তিনি যে শিরককে ঘৃণা করেন তা থেকে সরে আসো, তবে নিজেদের কল্যাণের ভাগই তোমরা জিতে নিলে; আর যদি অস্বীকার করো আর একে মিথ্যা বলো, তবে নিজেদের বিরুদ্ধেই অপরাধ করলে। গুমরাহিও হেদায়েতের মতো নিজের উপরই এসে পড়ে।"
          },
          {
            "en": "There is one more line in at-Tabari that is easy to pass over. After the warning he has the Prophet add: and I have conveyed to you what I was commanded to convey, and I have given you sincere counsel. The verse does not leave the caller bitter or vengeful toward the person who turned away. It leaves him clear: the message was delivered, the advice was honest, the door was held open to the end. What the hearer did with it is now a matter between the hearer and his Lord.",
            "bn": "তাবারীতে আরও একটি কথা আছে যা সহজেই চোখ এড়িয়ে যায়। সতর্ক করার পর তিনি নবীকে ﷺ দিয়ে যোগ করান: আর আমাকে যা পৌঁছাতে বলা হয়েছিল তা তোমাদের পৌঁছে দিয়েছি, আর তোমাদের আন্তরিক উপদেশ দিয়েছি। আয়াতটি আহ্বানকারীকে, যে মুখ ফিরিয়ে নিল তার প্রতি, তেতো বা প্রতিশোধপরায়ণ করে ছাড়ে না। এটি তাকে পরিষ্কার করে ছাড়ে: বার্তা পৌঁছে গেছে, উপদেশ সৎ ছিল, দরজা শেষ পর্যন্ত খোলা রাখা হয়েছিল। শ্রোতা তা দিয়ে কী করল, সেটি এখন শ্রোতা আর তার রবের মধ্যকার ব্যাপার।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Is Not His to Give",
          "bn": "হেদায়েত তার হাতে নয়"
        },
        "p": [
          {
            "en": "Say: I am only one of the warners. Al-Muyassar and as-Sa'di both close their comment on the verse with the same blunt sentence: and guidance is not in my hand at all. The Prophet can recite, warn, convey, and plead; he cannot place faith inside a chest. Al-Baghawi glosses 'the warners' as those who make others afraid of what is coming, and repeats that nothing lies upon the Prophet except the conveying. The verse draws a hard line between the work a messenger is given and the result that belongs to God alone.",
            "bn": "বলো, আমি তো সতর্ককারীদের একজন। মুয়াসসার আর সাদী দুজনেই আয়াতের ব্যাখ্যা শেষ করেন একই স্পষ্ট বাক্যে: আর হেদায়েত আমার হাতে একটুও নেই। নবী ﷺ তিলাওয়াত করতে পারেন, সতর্ক করতে পারেন, পৌঁছে দিতে পারেন, অনুনয় করতে পারেন; কিন্তু কোনো বুকের ভেতর ঈমান বসিয়ে দিতে পারেন না। বাগভী সতর্ককারী কথাটির অর্থ করেন, যারা আগত শাস্তি নিয়ে অন্যদের ভয় জাগায়, আর আবার বলেন, পৌঁছে দেওয়া ছাড়া নবীর ﷺ উপর কিছু নেই। আয়াতটি রাসূলকে দেওয়া কাজ আর কেবল আল্লাহরই হাতে থাকা ফলের মাঝে এক কঠিন সীমারেখা টেনে দেয়।"
          },
          {
            "en": "Notice what the commentators do not do here. None of them reaches for another passage to prove the point; they simply let the words stand as they are. A warner warns. He does not force, and the verse never asks him to. His peace, and the boundary of his duty, is the warning honestly delivered. Whether the warned heart softens or hardens is named in the same breath as something kept outside his hands, placed back where guidance was already said to belong, with the person himself.",
            "bn": "খেয়াল করুন, তাফসীরকারেরা এখানে কী করেন না। তাঁদের কেউই কথাটি প্রমাণ করতে অন্য কোনো আয়াতের দিকে হাত বাড়ান না; তাঁরা কেবল শব্দগুলোকে যেমন আছে তেমন থাকতে দেন। সতর্ককারী সতর্ক করেন। তিনি জোর খাটান না, আর আয়াতও তাঁকে তা করতে বলে না। তাঁর স্বস্তি আর তাঁর দায়িত্বের সীমা হলো সৎভাবে পৌঁছে দেওয়া সতর্কবাণী। যে হৃদয়কে সতর্ক করা হলো তা নরম হবে না শক্ত হবে, সেটিও একই নিঃশ্বাসে এমন কিছু বলে রাখা হয় যা তাঁর হাতের বাইরে, যা হেদায়েতের সঙ্গেই আগে জুড়ে দেওয়া হয়েছিল, মানুষটির নিজের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Line of Warners",
          "bn": "সতর্ককারীদের এক সারিতে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads 'I am only one of the warners' as the Prophet placing himself in a long line. I have a pattern to follow, he writes, in the messengers who warned their peoples, discharged what was theirs to deliver, and were cleared of the trust laid on them; the reckoning of their nations rests with God. He anchors this in two verses: 'upon you is only the delivery, and upon Us is the reckoning' (13:40), and 'you are only a warner, and God is Guardian over all things' (11:12).",
            "bn": "ইবন কাসীর পড়েন, আমি তো সতর্ককারীদের একজন কথাটি দিয়ে নবী ﷺ নিজেকে এক দীর্ঘ সারিতে বসাচ্ছেন। আমার সামনে অনুসরণের নমুনা আছে, তিনি লেখেন, সেই রাসূলগণে যাঁরা নিজ নিজ জাতিকে সতর্ক করেছেন, যা পৌঁছানোর ছিল তা আদায় করেছেন, আর তাঁদের উপর রাখা আমানত থেকে মুক্ত হয়েছেন; তাঁদের জাতিগুলোর হিসাব আল্লাহর কাছে। তিনি একে দুটি আয়াতে বাঁধেন: তোমার উপর কেবল পৌঁছে দেওয়া, আর আমাদের উপর হিসাব (১৩:৪০), আর তুমি তো কেবল সতর্ককারী, আর আল্লাহ সব কিছুর উপর কর্মবিধায়ক (১১:১২)।"
          },
          {
            "en": "The duty Ibn Kathir describes was not sealed with the Prophet; he handed it on. Al-Bukhari records in his Sahih, from Abdullah ibn Amr, that the Prophet said, 'Convey from me, even if it is a single verse; and relate from the Children of Israel, there is no harm in it; and whoever lies against me deliberately, let him take his seat in the Fire.' The reciting of 27:92 becomes, in that command, every believer's share: pass on what reached you, however little, and leave the rest where this verse already left it.",
            "bn": "ইবন কাসীর যে দায়িত্বের কথা বলেন তা নবীর ﷺ সঙ্গেই শেষ হয়ে যায়নি; তিনি তা হাতে তুলে দিয়ে গেছেন। বুখারী তাঁর সহীহ-তে আবদুল্লাহ ইবন আমর থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, আমার পক্ষ থেকে পৌঁছে দাও, যদি একটি আয়াতও হয়; আর বনী ইসরাঈল থেকে বর্ণনা করো, তাতে দোষ নেই; আর যে ইচ্ছা করে আমার নামে মিথ্যা বলে, সে যেন জাহান্নামে তার ঠিকানা বানিয়ে নেয়। ২৭:৯২ আয়াতের তিলাওয়াত সেই নির্দেশে প্রতিটি মুমিনের ভাগ হয়ে ওঠে: তোমার কাছে যা পৌঁছেছে তা আগে বাড়িয়ে দাও, যত অল্পই হোক, আর বাকিটা সেখানেই রেখে দাও যেখানে এ আয়াত আগেই রেখে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "When They Turn Away",
          "bn": "সে যখন ফিরে যায়"
        },
        "p": [
          {
            "en": "Lift the verse out of Mecca for a moment and it reads like counsel for anyone who carries truth to someone who will not take it: a parent, a teacher, a friend who keeps praying for a brother who has drifted. The verse divides the weight exactly. Your part is the reciting, the telling, the honest and patient conveying. Their response is their own, falling to their own benefit or their own loss. You were never handed the second half of it, so there is no way for you to fail at it.",
            "bn": "আয়াতটিকে কিছুক্ষণের জন্য মক্কা থেকে তুলে আনুন, তখন তা এমন যে কারও জন্যই উপদেশ হয়ে ওঠে যে সত্য বয়ে নিয়ে যায় এমন কারও কাছে যে তা নেবে না: একজন বাবা-মা, একজন শিক্ষক, এমন এক বন্ধু যে দূরে সরে যাওয়া ভাইয়ের জন্য দোয়া করে যায়। আয়াতটি বোঝাটা ঠিকঠিকভাবে ভাগ করে দেয়। আপনার ভাগ হলো তিলাওয়াত, বলা, সৎ ও ধৈর্যভরে পৌঁছে দেওয়া। তার সাড়া তার নিজের, তার নিজের কল্যাণে বা নিজের ক্ষতিতে গিয়ে পড়ে। দ্বিতীয় অর্ধেকটা আপনার হাতে কখনো দেওয়াই হয়নি, তাই তাতে ব্যর্থ হওয়ার কোনো পথই আপনার নেই।"
          },
          {
            "en": "This is not a licence for laziness in calling others; the commentators are careful that the Prophet first recited, warned, conveyed, and counselled sincerely. The release comes only after the work is truly done. But once it is done, the verse lifts away a burden that was never ours: the burden of another person's heart. Carrying it does not help them and quietly damages us, turning a calm invitation into anxious pressure. Hand that weight back to the God who kept it for Himself, and keep doing your own part well.",
            "bn": "এটি অন্যকে ডাকার কাজে অলসতার কোনো অনুমতি নয়; তাফসীরকারেরা খেয়াল রাখেন যে নবী ﷺ আগে তিলাওয়াত করেছেন, সতর্ক করেছেন, পৌঁছে দিয়েছেন, আন্তরিকভাবে উপদেশ দিয়েছেন। মুক্তি আসে কেবল কাজটি সত্যিই শেষ হওয়ার পর। কিন্তু একবার তা শেষ হলে আয়াতটি এমন এক বোঝা নামিয়ে দেয় যা কখনো আমাদের ছিল না: আরেক মানুষের হৃদয়ের বোঝা। তা বয়ে বেড়ানো তাকে সাহায্য করে না, আর চুপচাপ আমাদেরই ক্ষতি করে, শান্ত আহ্বানকে উদ্বিগ্ন চাপে বদলে দেয়। সেই বোঝা সেই আল্লাহর কাছেই ফিরিয়ে দিন যিনি তা নিজের জন্য রেখে দিয়েছেন, আর নিজের ভাগের কাজটি ভালোভাবে করে যান।"
          },
          {
            "en": "Hold the two halves together and a strange steadiness appears. The reciting is yours, so do it well, patiently, without resentment when it is refused. The result is God's, so you may set it down at night and sleep. A caller who learns this verse stops measuring himself by other people's choices. He measures himself instead by his own faithfulness, which is the only measure the verse ever placed in his hands, and the only one he will be asked about.",
            "bn": "দুই অর্ধেক একসঙ্গে ধরে রাখুন, তখন এক অদ্ভুত স্থিরতা দেখা দেয়। তিলাওয়াত আপনার, তাই তা ভালোভাবে করুন, ধৈর্যের সঙ্গে, ফিরিয়ে দিলেও বিরক্তি ছাড়া। ফল আল্লাহর, তাই রাতে তা নামিয়ে রেখে আপনি ঘুমাতে পারেন। যে আহ্বানকারী এ আয়াত শেখে, সে অন্যের পছন্দ দিয়ে নিজেকে মাপা বন্ধ করে দেয়। সে বরং নিজেকে মাপে নিজের বিশ্বস্ততা দিয়ে, যা একমাত্র মাপকাঠি এ আয়াত কখনো তার হাতে দিয়েছিল, আর যার সম্পর্কেই তাকে জিজ্ঞেস করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ending on Praise",
          "bn": "শেষ হয় প্রশংসায়"
        },
        "p": [
          {
            "en": "The surah does not end on the straying or the Fire. Its last verse turns the Prophet back to praise: and say, all praise belongs to God; He will show you His signs, and you will recognize them; and your Lord is not unaware of what you do (27:93). Ibn Kathir reads the praise as praise for justice: God punishes none until the case against him has been made plain, the warning delivered, every excuse removed. The warner's honest work is itself a part of that mercy, not a thing apart from it.",
            "bn": "সূরাটি গুমরাহি বা আগুনের উপর শেষ হয় না। এর শেষ আয়াত নবীকে ﷺ আবার প্রশংসার দিকে ফেরায়: আর বলো, সব প্রশংসা আল্লাহরই; তিনি শীঘ্রই তোমাদের তাঁর নিদর্শন দেখাবেন, আর তোমরা তা চিনে নেবে; আর তোমরা যা করো তা থেকে তোমার রব অমনোযোগী নন (২৭:৯৩)। ইবন কাসীর এই প্রশংসাকে পড়েন ইনসাফের প্রশংসা হিসেবে: আল্লাহ কাউকেই শাস্তি দেন না যতক্ষণ না তার বিরুদ্ধে যুক্তি স্পষ্ট করা হয়, সতর্কবাণী পৌঁছানো হয়, প্রতিটি অজুহাত সরিয়ে দেওয়া হয়। সতর্ককারীর সৎ কাজটিই সেই রহমতের অংশ, এর থেকে আলাদা কিছু নয়।"
          },
          {
            "en": "The sign He promises to show, Ibn Kathir notes, is the same promise as 'We will show them Our signs on the horizons and within themselves until it becomes clear to them that it is the truth' (41:53). The verse the Prophet was told to recite will be confirmed by what people live to see. So the warner is left with a quiet dignity: he says his piece, praises his Lord, and trusts that the signs will yet speak in the places where his own words were refused.",
            "bn": "যে নিদর্শন তিনি দেখাবেন বলে ওয়াদা করেছেন, ইবন কাসীর মনে করিয়ে দেন, তা সেই একই ওয়াদা: আমি তাদের আমাদের নিদর্শন দেখাব দিগন্তে আর তাদের নিজেদের ভেতরে, যতক্ষণ না তাদের কাছে স্পষ্ট হয়ে যায় যে এটিই সত্য (৪১:৫৩)। নবীকে ﷺ যে আয়াত তিলাওয়াত করতে বলা হয়েছিল, মানুষ বেঁচে থেকে যা দেখবে তা-ই একদিন সেটিকে সত্য প্রমাণ করবে। তাই সতর্ককারীর হাতে থেকে যায় এক শান্ত মর্যাদা: তিনি নিজের কথাটি বলেন, রবের প্রশংসা করেন, আর ভরসা রাখেন যে তাঁর নিজের কথা যেখানে ফিরিয়ে দেওয়া হয়েছিল সেখানে নিদর্শনগুলোই একদিন কথা বলবে।"
          }
        ]
      }
    ]
  }
});
