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
  }
});
