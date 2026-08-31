/**
 * Long-form articles for the Companions module — keyed by the `id` used in
 * js/sahaba-data.js.
 *
 * The module's own `summaryEn` averages 107 words. These are the full
 * biographies behind it, 700-950 words in 5-7 sections, English and Bengali.
 *
 * Loaded by js/article-view.js on first detail open, not with the tab.
 *
 * Not every companion has one: the module carries 127 entries and these are
 * written for the most significant, so `article-view` treats a missing id as
 * "no article" and the detail page renders exactly as it did before.
 *
 * Conventions, all enforced by `npm test`:
 *   - sections: [{ h: {en, bn}, p: [{en, bn}, ...] }]
 *   - verse references are written bare in the prose; js/ayah-autolink.js makes
 *     them tappable, and the suite bounds-checks every one in both languages.
 *   - no HTML and no markdown in any string.
 *
 * On the caliphs and the fitnah: what is agreed is stated, what is disputed is
 * attributed as disputed, and no party is editorialised against. These pages
 * are read by Sunni and Shia learners alike.
 */

const SAHABA_ARTICLES = {
  talha_ibn_ubaydillah: {
    sections: [
      {
        h: { en: "A Merchant of Banu Taym", bn: "বনু তাইমের এক ব্যবসায়ী" },
        p: [
          {
            en: "Talha ibn Ubaydillah (RA) belonged to Banu Taym, the same small clan of Quraysh that produced Abu Bakr (RA). He was a cloth merchant who travelled the caravan road north to Syria, and he was young when Abu Bakr (RA) put Islam before him. He accepted without argument. The two of them paid for that quickly: Nawfal ibn Khuwaylid bound them together with a single rope and left them in the sun, and Makkah called them the two tied as one.",
            bn: "তালহা ইবনে উবাইদুল্লাহ (রাঃ) ছিলেন বনু তাইম গোত্রের, কুরাইশের সেই ছোট শাখা যেখান থেকে আবু বকর (রাঃ)ও এসেছিলেন। তিনি ছিলেন কাপড়ের ব্যবসায়ী, যিনি সিরিয়ার দিকে কাফেলার পথে যাতায়াত করতেন। যৌবনেই আবু বকর (রাঃ) তাঁর সামনে ইসলাম পেশ করেন, আর তিনি কোনো তর্ক ছাড়াই তা গ্রহণ করেন। এর মূল্য দ্রুতই দিতে হয়: নাওফাল ইবনে খুওয়াইলিদ দুজনকে একই রশিতে বেঁধে রোদে ফেলে রাখে, আর মক্কার লোকে তাঁদের ডাকতে শুরু করে 'একসঙ্গে বাঁধা দুজন' নামে।",
          },
          {
            en: "When the Prophet Muhammad ﷺ and Abu Bakr (RA) made the hijrah, Talha was on his way home from a trading journey to Syria. He met them on the road and gave them white garments to wear into Madinah. It is a small detail that says much: his trade was never separate from the mission. In Madinah he took his place among the Muhajirun and never left the Prophet's ﷺ side again.",
            bn: "রাসূলুল্লাহ ﷺ ও আবু বকর (রাঃ) যখন হিজরত করছিলেন, তালহা তখন সিরিয়ার ব্যবসা সেরে ফিরছিলেন। পথেই তাঁদের সাক্ষাৎ পান এবং মদিনায় প্রবেশের জন্য তাঁদের সাদা পোশাক উপহার দেন। ছোট এই ঘটনাটিই তাঁর পরিচয় বলে দেয়—তাঁর ব্যবসা কখনো দ্বীনের মিশন থেকে আলাদা ছিল না। মদিনায় তিনি মুহাজিরদের কাতারে দাঁড়ান এবং এরপর নবীজি ﷺ-এর পাশ ছাড়েননি।",
          },
        ],
      },
      {
        h: { en: "The Badr He Did Not Fight", bn: "যে বদরে তিনি লড়েননি" },
        p: [
          {
            en: "Talha was not present on the field at Badr. The Prophet ﷺ had sent him with Sa'id ibn Zayd (RA) up the northern road to watch for the Quraysh caravan, and by the time the two returned the battle had already been fought and won. Talha grieved over it. The Prophet ﷺ assigned him a share of the spoils and told him his reward was that of a man who had stood in the ranks, because obedience on an errand and in a battle line is one obedience.",
            bn: "বদরের ময়দানে তালহা উপস্থিত ছিলেন না। নবীজি ﷺ তাঁকে ও সাঈদ ইবনে যায়েদ (রাঃ)-কে উত্তরের পথে কুরাইশ কাফেলার খোঁজে পাঠিয়েছিলেন; তাঁরা যখন ফিরে আসেন, যুদ্ধ তখন শেষ ও বিজয় অর্জিত। এতে তালহা ব্যথিত হন। নবীজি ﷺ তাঁকে গনিমতের অংশ দেন এবং জানান যে তাঁর প্রতিদানও যুদ্ধের কাতারে দাঁড়ানো ব্যক্তির মতোই—কারণ দায়িত্ব পালনের আনুগত্য আর যুদ্ধের কাতারের আনুগত্য একই আনুগত্য।",
          },
          {
            en: "A man may be handed the unglamorous task while others take the famous one, and the ledger of Allah records intention rather than fame. Talha never used the missed battle as a grievance. He simply waited for the next call, and when it came at Uhud a year later he gave an answer so complete that the Muslims were still repeating it generations afterwards.",
            bn: "কারও ভাগে পড়ে অনালোচিত দায়িত্ব, কারও ভাগে বিখ্যাত ময়দান; কিন্তু আল্লাহর হিসাবের খাতায় লেখা হয় নিয়ত ও আনুগত্য, খ্যাতি নয়। তালহা এই না-পাওয়া যুদ্ধকে কখনো অভিযোগে পরিণত করেননি। তিনি কেবল পরবর্তী ডাকের অপেক্ষা করেছেন—আর এক বছর পর উহুদে সেই ডাক এলে তিনি এমন জবাব দিয়েছিলেন, প্রজন্মের পর প্রজন্ম মুসলিমরা যা বলাবলি করেছে।",
          },
        ],
      },
      {
        h: { en: "That Day Was Talha's", bn: "সেই দিনটি ছিল তালহার" },
        p: [
          {
            en: "At Uhud the Muslim line broke and the Prophet ﷺ was left exposed with a handful of men. Talha stood in front of him and took what was aimed at him. He put out his hand to catch the blows and arrows, and it was cut and crippled and never worked again. Qays ibn Abi Hazim, who saw it years later, said simply that he had seen the paralysed hand with which Talha had shielded the Prophet ﷺ on the day of Uhud.",
            bn: "উহুদে মুসলিম কাতার ভেঙে পড়ে এবং নবীজি ﷺ মুষ্টিমেয় কয়েকজন সঙ্গী নিয়ে উন্মুক্ত হয়ে পড়েন। তালহা তাঁর সামনে দাঁড়িয়ে যান এবং নবীজির দিকে ছুটে আসা আঘাত নিজে গ্রহণ করেন। তীর ও তরবারির আঘাত ঠেকাতে হাত বাড়িয়ে দেন, ফলে সেই হাত কেটে অবশ হয়ে যায় এবং আর কখনো স্বাভাবিকভাবে কাজ করেনি। কায়স ইবনে আবি হাযিম, যিনি বহু বছর পর তা দেখেছিলেন, শুধু বলেছেন—আমি সেই অবশ হাতটি দেখেছি, যা দিয়ে তালহা উহুদের দিন নবীজি ﷺ-কে আড়াল করেছিলেন।",
          },
          {
            en: "He also carried the Prophet ﷺ up onto a rock ledge when the ground below had become impossible to hold, and he went on fighting after wounds that would have ended most men. Abu Bakr (RA), who was there, would say afterwards that the whole of that day belonged to Talha. It is reported, though not by the strongest chain, that the Prophet ﷺ later said whoever wished to look upon a martyr walking about on the earth should look at Talha, and the companions read 33:23 with his face in mind.",
            bn: "নিচের জমিন ধরে রাখা যখন অসম্ভব হয়ে পড়ে, তখন তিনি নবীজি ﷺ-কে পাথরের ধাপে তুলে দেন, এবং এমন সব আঘাত নিয়ে লড়াই চালিয়ে যান যা অধিকাংশ মানুষের পক্ষে সহ্য করা সম্ভব নয়। আবু বকর (রাঃ), যিনি সেদিন উপস্থিত ছিলেন, পরে বলতেন—সেই গোটা দিনটি ছিল তালহার। বর্ণিত আছে—যদিও সনদটি সবচেয়ে শক্তিশালী নয়—নবীজি ﷺ বলেছিলেন, কেউ যদি জমিনে হেঁটে বেড়ানো কোনো শহীদকে দেখতে চায়, সে যেন তালহাকে দেখে; আর সাহাবিগণ 33:23 আয়াতটি পড়তেন তাঁর চেহারা মনে করে।",
          },
        ],
      },
      {
        h: { en: "Talha the Open-Handed", bn: "উদারহস্ত তালহা" },
        p: [
          {
            en: "In Madinah his trade grew large, and so did his giving. He was known as Talha the Good and Talha the Open-Handed, names earned by habit rather than by a single gesture. He paid off other men's debts, married off the daughters of families who could not afford it, and carried the poor of his clan on his own account. Wealth in his hands behaved like water in a channel: it arrived, it moved, and it did not stand still.",
            bn: "মদিনায় তাঁর ব্যবসা বড় হয়, আর সঙ্গে বড় হয় তাঁর দান। তিনি পরিচিত হন 'তালহা আল-খাইর' ও 'তালহা আল-জুদ' নামে—এই নাম একটিমাত্র বড় দানে নয়, বরং অভ্যাসে অর্জিত। তিনি অন্যের ঋণ শোধ করে দিতেন, যেসব পরিবার পারত না তাদের মেয়েদের বিয়ের ব্যবস্থা করতেন, নিজ গোত্রের দরিদ্রদের ভার নিজের কাঁধে নিতেন। তাঁর হাতে সম্পদ আচরণ করত খালের পানির মতো—আসত, বয়ে যেত, থামত না।",
          },
          {
            en: "The biographers record a night when a large sum came in from the sale of land and he could not sleep for the weight of it. His wife asked what was wrong. He answered that a man like him should be thinking of his Lord, and here was all this money sitting in his house. He rose, called for it to be distributed before morning, and only then slept. Generosity in his life was not an overflow from surplus but a way of keeping his heart free.",
            bn: "জীবনীকাররা এমন এক রাতের কথা লিখেছেন, যখন জমি বিক্রির বিপুল অর্থ ঘরে আসে আর সেই ভারে তাঁর ঘুম আসে না। স্ত্রী তাঁকে অস্থির দেখে কারণ জানতে চান। তিনি বলেন, আমার মতো একজনের তো তার প্রভুর কথা ভাবার কথা, অথচ এত টাকা আমার ঘরে পড়ে আছে। তিনি উঠে পড়েন, ভোর হওয়ার আগেই সবটুকু বিলিয়ে দিতে বলেন, তারপর ঘুমান। তাঁর জীবনে দান ছিল না উদ্বৃত্তের উপচে পড়া, বরং হৃদয়কে মুক্ত রাখার উপায়।",
          },
        ],
      },
      {
        h: { en: "Counsel in the Caliphates", bn: "খিলাফতকালে পরামর্শদাতা" },
        p: [
          {
            en: "Under Abu Bakr (RA) and Umar (RA) he was one of the senior voices consulted on the affairs of the growing state. When Umar (RA) lay dying he named six men from whom the next caliph must be chosen, and Talha was among them, placing him in the highest rank of trust the community had. He was one of the ten given the glad tidings of Paradise in the Prophet's ﷺ own lifetime.",
            bn: "আবু বকর (রাঃ) ও উমর (রাঃ)-এর সময়ে ক্রমবর্ধমান রাষ্ট্রের বিষয়ে যে কজন প্রবীণের পরামর্শ নেওয়া হতো, তিনি ছিলেন তাঁদের একজন। উমর (রাঃ) মৃত্যুশয্যায় ছয়জনের নাম বলে যান, যাঁদের মধ্য থেকেই পরবর্তী খলিফা নির্বাচিত হবেন—তালহা ছিলেন তাঁদের একজন। এতে বোঝা যায়, তৎকালীন উম্মাহর কাছে আস্থার সর্বোচ্চ স্তরেই তাঁর অবস্থান ছিল। নবীজি ﷺ-এর জীবদ্দশাতেই জান্নাতের সুসংবাদপ্রাপ্ত দশজনের একজন ছিলেন তিনি।",
          },
          {
            en: "What is striking is how little he used that standing. He held no province, built no faction, and left behind no campaign of his own to be remembered by. His reputation rested on two things the community could see with its own eyes: a hand that did not work, and a house that money passed through without stopping. Rank came to him; he did not go out to collect it.",
            bn: "লক্ষণীয় হলো, এই মর্যাদা তিনি কতটা কম ব্যবহার করেছেন। তিনি কোনো প্রদেশের শাসক হননি, কোনো দল গড়েননি, নিজের নামে স্মরণীয় কোনো অভিযানও রেখে যাননি। তাঁর সুনাম দাঁড়িয়ে ছিল এমন দুটি জিনিসের ওপর, যা উম্মাহ নিজ চোখেই দেখত—একটি অকেজো হাত, আর এমন একটি ঘর যার ভেতর দিয়ে অর্থ কেবল বয়ে যেত, থামত না। মর্যাদা তাঁর কাছে এসেছে; তিনি মর্যাদা কুড়াতে বের হননি।",
          },
        ],
      },
      {
        h: { en: "The Camel, and Silence", bn: "জামাল, এবং নীরবতা" },
        p: [
          {
            en: "After the killing of Uthman (RA) the community fell into a dispute it had never faced before. Talha rode out to Basra with Aisha (RA) and az-Zubayr (RA), seeking that the killers be brought to justice, and Ali (RA) came out to restore order. The two camps talked, and were close to settlement, when fighting broke out. Talha was struck by an arrow in that confusion and died of the wound in the year 36 after the hijrah.",
            bn: "উসমান (রাঃ)-এর হত্যার পর উম্মাহ এমন এক বিরোধে পড়ে, যার মুখোমুখি সে আগে কখনো হয়নি। তালহা আয়েশা (রাঃ) ও যুবাইর (রাঃ)-এর সঙ্গে বসরার দিকে যাত্রা করেন, হত্যাকারীদের বিচারের দাবিতে; আর আলী (রাঃ) বের হন শৃঙ্খলা ফিরিয়ে আনতে। দুই পক্ষ আলোচনা করেছিল এবং মীমাংসার কাছাকাছি পৌঁছেছিল, এমন সময় লড়াই বেধে যায়। সেই বিশৃঙ্খলার মধ্যে তালহা তীরবিদ্ধ হন এবং হিজরি ৩৬ সালে সেই ক্ষতেই ইন্তেকাল করেন।",
          },
          {
            en: "Ali (RA) is reported to have stood over the fallen and grieved for them, and he hoped that he and Talha and az-Zubayr would be among those of whom Allah says that He removed whatever was in their breasts of resentment, as in 15:47. The settled way of Ahl as-Sunnah is to say no more than that: these were men of Badr and Uhud, they judged and their reward is with Allah, and our part is the prayer of 59:10 for those who came before us in faith.",
            bn: "বর্ণিত আছে, আলী (রাঃ) নিহতদের পাশে দাঁড়িয়ে শোক প্রকাশ করেন এবং আশা করেন যে তিনি, তালহা ও যুবাইর সেই বান্দাদের অন্তর্ভুক্ত হবেন, যাঁদের বুকের ভেতরের বিদ্বেষ আল্লাহ দূর করে দিয়েছেন—যেমন 15:47-এ এসেছে। আহলুস সুন্নাহর সুস্থির অবস্থান এর বেশি কিছু বলে না: এঁরা ছিলেন বদর ও উহুদের মানুষ; তাঁরা ইজতিহাদ করেছেন, তাঁদের প্রতিদান আল্লাহর কাছে; আর আমাদের কাজ হলো 59:10-এর দোয়া—যাঁরা ঈমানে আমাদের অগ্রগামী, তাঁদের জন্য ক্ষমা প্রার্থনা।",
          },
        ],
      },
    ],
  },
  az_zubayr_ibn_al_awwam: {
    sections: [
      {
        h: { en: "Born Into the House", bn: "নবীর ঘরানারই সন্তান" },
        p: [
          {
            en: "Az-Zubayr ibn al-Awwam (RA) stood inside the Prophet's ﷺ own family twice over. His father al-Awwam was the brother of Khadijah (RA), and his mother Safiyyah bint Abd al-Muttalib was the Prophet's ﷺ aunt. He lost his father young, and Safiyyah raised him hard and plain, so that he grew up quick with a sword and slow to complain. He accepted Islam while still a boy, among the first handful of believers in Makkah.",
            bn: "যুবাইর ইবনুল আওয়াম (রাঃ) দুই দিক থেকেই নবীজি ﷺ-এর পরিবারভুক্ত ছিলেন। তাঁর পিতা আল-আওয়াম ছিলেন খাদিজা (রাঃ)-এর ভাই, আর তাঁর মা সাফিয়্যা বিনতে আবদুল মুত্তালিব ছিলেন নবীজি ﷺ-এর ফুফু। অল্প বয়সেই পিতাকে হারান, আর সাফিয়্যা তাঁকে কঠোর ও সাদাসিধেভাবে মানুষ করেন—ফলে তিনি বড় হন তরবারিতে দ্রুত আর অভিযোগে ধীর হয়ে। বালক বয়সেই তিনি ইসলাম গ্রহণ করেন, মক্কার প্রথম মুষ্টিমেয় ঈমানদারদের একজন হিসেবে।",
          },
          {
            en: "His paternal uncle tried to break him. He would wrap the boy in a mat and hold smoke beneath him until he could not breathe, telling him to return to the gods of his people. Az-Zubayr's answer never changed: he would not go back to disbelief, not ever. A child who has already decided that under smoke is not a child who will hesitate later under steel.",
            bn: "তাঁর চাচা তাঁকে ভাঙার চেষ্টা করেন। বালকটিকে চাটাইয়ে মুড়ে নিচে ধোঁয়া দিতেন, যতক্ষণ না দম আটকে আসে, আর বলতেন নিজ সম্প্রদায়ের দেবতাদের কাছে ফিরে যেতে। যুবাইরের জবাব কখনো বদলায়নি—তিনি কুফরিতে ফিরবেন না, কোনোদিনই না। যে শিশু ধোঁয়ার নিচেই সিদ্ধান্ত নিয়ে ফেলেছে, লোহার নিচে সে আর দ্বিধা করে না।",
          },
        ],
      },
      {
        h: { en: "The First Sword Drawn", bn: "প্রথম উত্তোলিত তরবারি" },
        p: [
          {
            en: "A rumour ran through Makkah one day that the Prophet ﷺ had been seized. Az-Zubayr did not wait to verify it. He drew his sword and went through the streets of the city, a boy against the whole of Quraysh, until he met the Prophet ﷺ in the upper part of Makkah. Asked what he was doing, he said he had heard the Messenger of Allah ﷺ had been taken. The Prophet ﷺ prayed for him and for his sword.",
            bn: "একদিন মক্কায় গুজব ছড়ায় যে নবীজি ﷺ-কে ধরে নেওয়া হয়েছে। যুবাইর যাচাইয়ের অপেক্ষা করেননি। তরবারি হাতে তিনি শহরের রাস্তায় বেরিয়ে পড়েন—গোটা কুরাইশের বিরুদ্ধে একা এক কিশোর—যতক্ষণ না মক্কার উপরিভাগে নবীজি ﷺ-এর সাক্ষাৎ পান। কী করছেন জিজ্ঞাসা করা হলে তিনি বলেন, শুনেছি আল্লাহর রাসূল ﷺ-কে ধরে নেওয়া হয়েছে। নবীজি ﷺ তাঁর জন্য ও তাঁর তরবারির জন্য দোয়া করেন।",
          },
          {
            en: "That is the moment for which he is remembered as the first man to unsheathe a sword in Islam. What matters in it is not the blade but the reflex. Others heard the same rumour and waited to see how it would turn out. Az-Zubayr moved, alone, without a plan and without the numbers, because someone he loved was in danger. The whole of his later life is that same reflex, grown up and given an army.",
            bn: "এই মুহূর্তটির জন্যই তিনি স্মরণীয়—ইসলামের পথে সর্বপ্রথম তরবারি কোষমুক্তকারী হিসেবে। এখানে গুরুত্বপূর্ণ তরবারি নয়, বরং তাৎক্ষণিক প্রতিক্রিয়া। একই গুজব অন্যরাও শুনেছিল এবং পরিণতি দেখার অপেক্ষা করেছিল। যুবাইর একা এগিয়ে গিয়েছিলেন—পরিকল্পনা ছাড়া, সংখ্যাবল ছাড়া—কারণ তাঁর প্রিয় একজন বিপদে ছিলেন। তাঁর পরবর্তী গোটা জীবন সেই একই প্রতিক্রিয়া, কেবল পরিণত হয়ে এবং একটি সেনাবাহিনী হাতে পেয়ে।",
          },
        ],
      },
      {
        h: { en: "Two Migrations, Then Badr", bn: "দুই হিজরত, তারপর বদর" },
        p: [
          {
            en: "He emigrated to Abyssinia when persecution grew heavy, returned, and then made the hijrah to Madinah. He fought at Badr, and at Uhud he was among those who held their ground when the line collapsed. On the day after Uhud, when the Prophet ﷺ called the wounded out again to pursue the enemy to Hamra al-Asad, az-Zubayr went out with them, and 3:172 was revealed about those who answered Allah and the Messenger after injury had touched them.",
            bn: "নির্যাতন যখন ভারী হয়ে ওঠে তখন তিনি আবিসিনিয়ায় হিজরত করেন, পরে ফিরে আসেন এবং এরপর মদিনায় হিজরত করেন। তিনি বদরে লড়েন, আর উহুদে কাতার ভেঙে পড়ার পরও যাঁরা জায়গা ছাড়েননি তিনি তাঁদের একজন। উহুদের পরদিন নবীজি ﷺ যখন আহতদের নিয়েই শত্রুর পিছু ধাওয়ায় হামরাউল আসাদের দিকে ডাক দেন, যুবাইর তাঁদের সঙ্গে বের হন; আর আঘাত পাওয়ার পরও আল্লাহ ও রাসূলের ডাকে সাড়া দেওয়া সেই মানুষদের সম্পর্কেই 3:172 নাযিল হয়।",
          },
          {
            en: "He carried the scars of these years openly. His son later said that his father's body was covered in the marks of spear and sword, so that the wounds looked like eyelets in his skin, and that he had received them at Badr, Uhud, Khandaq and the campaigns that followed. He was not a commander who watched from a distance; he was in the line where the fighting was worst, and his body kept the record.",
            bn: "এই বছরগুলোর ক্ষতচিহ্ন তিনি খোলাখুলি বহন করেছেন। তাঁর ছেলে পরে বলতেন, তাঁর পিতার দেহ বর্শা ও তরবারির দাগে এমনভাবে ঢাকা ছিল যে চামড়ায় যেন ছিদ্রের সারি বসানো; আর এসব তিনি পেয়েছেন বদর, উহুদ, খন্দক ও পরবর্তী অভিযানগুলোতে। তিনি দূরে দাঁড়িয়ে দেখা সেনাপতি ছিলেন না; যেখানে লড়াই সবচেয়ে কঠিন সেখানেই তিনি থাকতেন, আর তাঁর দেহই ছিল তার দলিল।",
          },
        ],
      },
      {
        h: { en: "The Disciple at Khandaq", bn: "খন্দকের হাওয়ারি" },
        p: [
          {
            en: "During the siege of Madinah, with the trench dug and the allied armies camped outside, the Prophet ﷺ needed to know what Banu Qurayzah were doing behind the Muslim lines. He asked who would go and bring him news. Az-Zubayr volunteered. The Prophet ﷺ asked again, and again az-Zubayr answered, and a third time the same. Then the Prophet ﷺ said that every prophet has a disciple, and that his disciple was az-Zubayr.",
            bn: "মদিনা অবরোধের সময়, খন্দক খোঁড়া শেষ এবং মিত্রবাহিনী বাইরে শিবির ফেলেছে—তখন নবীজি ﷺ-এর জানা দরকার ছিল, মুসলিম কাতারের পেছনে বনু কুরাইজা কী করছে। তিনি জিজ্ঞাসা করেন, কে গিয়ে খবর নিয়ে আসবে। যুবাইর এগিয়ে আসেন। নবীজি ﷺ আবার জিজ্ঞাসা করেন, আবারও যুবাইরই সাড়া দেন; তৃতীয়বারও তা-ই। তখন নবীজি ﷺ বলেন, প্রত্যেক নবীর একজন হাওয়ারি থাকে, আর আমার হাওয়ারি হলো যুবাইর।",
          },
          {
            en: "The word hawari carries the sense of a devoted helper who is trusted with the errands nobody else wants. It was not given for eloquence or for scholarship. It was given for the willingness to ride out alone at night, through the camps of an enemy that outnumbered the Muslims many times over, and to come back with the truth rather than with what would please.",
            bn: "'হাওয়ারি' শব্দটি বোঝায় এমন নিবেদিত সহযোগীকে, যাঁকে সেসব দায়িত্ব দেওয়া হয় যা আর কেউ নিতে চায় না। এই উপাধি দেওয়া হয়নি বাগ্মিতা বা পাণ্ডিত্যের জন্য। দেওয়া হয়েছিল এই প্রস্তুতির জন্য যে তিনি রাতের অন্ধকারে একা বেরিয়ে যাবেন—মুসলিমদের চেয়ে বহুগুণ বড় শত্রুশিবিরের ভেতর দিয়ে—আর ফিরে আসবেন সত্য খবর নিয়ে, মনভোলানো খবর নিয়ে নয়।",
          },
        ],
      },
      {
        h: { en: "Yarmuk and the Road to Egypt", bn: "ইয়ারমুক ও মিসরের পথ" },
        p: [
          {
            en: "In the caliphate of Umar (RA) he fought at Yarmuk against the Byzantines, where he is remembered for charging clean through the enemy formation and back again. Later, when Amr ibn al-As (RA) wrote to Umar (RA) asking for reinforcements in Egypt, Umar sent az-Zubayr among the men he chose, and he took a leading part in the long siege of the great fortress on the Nile, going up a scaling ladder ahead of the assault.",
            bn: "উমর (রাঃ)-এর খিলাফতকালে তিনি ইয়ারমুকে বাইজেন্টাইনদের বিরুদ্ধে লড়েন, যেখানে শত্রুব্যূহ ভেদ করে ওপারে গিয়ে আবার ফিরে আসার জন্য তিনি স্মরণীয়। পরে আমর ইবনুল আস (রাঃ) যখন মিসরে সাহায্য চেয়ে উমর (রাঃ)-কে লেখেন, উমর যাঁদের বেছে পাঠান তাঁদের মধ্যে যুবাইরও ছিলেন; নীলনদের তীরের বিশাল দুর্গের দীর্ঘ অবরোধে তিনি অগ্রণী ভূমিকা নেন এবং আক্রমণের আগেই সিঁড়ি বেয়ে দুর্গপ্রাচীরে ওঠেন।",
          },
          {
            en: "His trade and his share of the conquests made him wealthy, and he invested it in land and property across the growing empire. But he also carried a great deal of debt, because men left their money with him for safekeeping and he would take it as a loan so that he would be responsible for it if it were lost. It was a costly kind of honesty, and it outlived him.",
            bn: "ব্যবসা এবং বিজয়ের অংশ তাঁকে সম্পদশালী করে, আর তিনি তা বিস্তারিত সাম্রাজ্যজুড়ে জমি ও সম্পত্তিতে খাটাতেন। তবে তাঁর ঘাড়ে বিপুল ঋণও ছিল, কারণ মানুষ আমানত হিসেবে টাকা তাঁর কাছে রাখতে চাইলে তিনি তা ঋণ হিসেবে গ্রহণ করতেন—যাতে হারিয়ে গেলে দায় তাঁরই থাকে। এটি ছিল ব্যয়বহুল এক সততা, আর তা তাঁর মৃত্যুর পরও টিকে ছিল।",
          },
        ],
      },
      {
        h: { en: "He Left the Field", bn: "তিনি ময়দান ছেড়ে যান" },
        p: [
          {
            en: "When the community split after the killing of Uthman (RA), az-Zubayr rode to Basra with Talha (RA) and Aisha (RA), seeking justice for that killing, and Ali (RA) came out against them. Before the fighting began Ali (RA) reminded him of something the Prophet ﷺ had once said to him about that day. Az-Zubayr recognised it, and turned his horse and left the field rather than fight. He was pursued and killed while he was apart from the battle.",
            bn: "উসমান (রাঃ)-এর হত্যার পর উম্মাহ যখন বিভক্ত হয়, যুবাইর তালহা (রাঃ) ও আয়েশা (রাঃ)-এর সঙ্গে বসরায় যান সেই হত্যার বিচারের দাবিতে, আর আলী (রাঃ) তাঁদের মোকাবিলায় বের হন। লড়াই শুরুর আগে আলী (রাঃ) তাঁকে সেই দিনটি নিয়ে নবীজি ﷺ-এর একটি কথা স্মরণ করিয়ে দেন। যুবাইর তা চিনতে পারেন, ঘোড়া ঘুরিয়ে লড়াই না করেই ময়দান ছেড়ে চলে যান। যুদ্ধ থেকে দূরে থাকা অবস্থাতেই তাঁকে পিছু নিয়ে হত্যা করা হয়।",
          },
          {
            en: "His last instruction to his son Abdullah was about the debt: pay it, and if you cannot manage, then ask my Master for help. Asked who that was, he said Allah. Abdullah later said he never faced a difficulty in that debt without saying, O Master of az-Zubayr, settle his debt, and it was settled. When Ali (RA) was shown his sword he wept over it and said it had long driven grief from the face of the Messenger of Allah ﷺ.",
            bn: "ছেলে আবদুল্লাহকে তাঁর শেষ নির্দেশ ছিল ঋণ নিয়ে: তা পরিশোধ করো, আর না পারলে আমার মাওলার কাছে সাহায্য চেয়ো। কে সেই মাওলা জিজ্ঞাসা করা হলে তিনি বলেন, আল্লাহ। আবদুল্লাহ পরে বলতেন, সেই ঋণে যতবার সংকটে পড়েছি, বলেছি—হে যুবাইরের মাওলা, তাঁর ঋণ শোধ করে দিন; আর তা শোধ হয়ে গেছে। আলী (রাঃ)-এর সামনে তাঁর তরবারি আনা হলে তিনি কেঁদে ফেলেন এবং বলেন, এই তরবারি বহুবার আল্লাহর রাসূল ﷺ-এর চেহারা থেকে দুশ্চিন্তা দূর করেছে।",
          },
        ],
      },
    ],
  },
  abdur_rahman_ibn_awf: {
    sections: [
      {
        h: { en: "A New Name, A New Life", bn: "নতুন নাম, নতুন জীবন" },
        p: [
          {
            en: "He was born into Banu Zuhrah and given a name that tied him to the idols of his people. The Prophet ﷺ changed it to Abdur-Rahman, servant of the Most Merciful, and the new name turned out to describe the man. He came to Islam in the first days, through Abu Bakr (RA), before the Muslims had a house to meet in safely, and he was counted among the earliest eight to believe.",
            bn: "তাঁর জন্ম বনু যুহরা গোত্রে, আর তাঁকে এমন নাম দেওয়া হয়েছিল যা তাঁর সম্প্রদায়ের মূর্তির সঙ্গে জড়িত। নবীজি ﷺ তা বদলে রাখেন 'আবদুর রহমান'—পরম দয়াময়ের বান্দা; আর এই নামই শেষপর্যন্ত মানুষটির পরিচয় হয়ে ওঠে। তিনি ইসলাম গ্রহণ করেন একেবারে প্রথম দিনগুলোতে, আবু বকর (রাঃ)-এর মাধ্যমে—তখনো মুসলিমদের নিরাপদে মিলিত হওয়ার মতো কোনো ঘরও ছিল না; তিনি গণ্য হন প্রথম আটজন ঈমানদারের একজন হিসেবে।",
          },
          {
            en: "He emigrated to Abyssinia with the persecuted believers and later made the hijrah to Madinah, arriving with nothing. Everything he had built in Makkah stayed behind. He was a trader by instinct and by training, and he had just lost his capital, his customers and his city in a single journey. What he did next became one of the most quoted scenes of the migration.",
            bn: "নির্যাতিত ঈমানদারদের সঙ্গে তিনি আবিসিনিয়ায় হিজরত করেন এবং পরে মদিনায় হিজরত করেন—শূন্য হাতে। মক্কায় গড়ে তোলা সবকিছু পেছনেই থেকে যায়। তিনি ছিলেন স্বভাবে ও প্রশিক্ষণে ব্যবসায়ী, অথচ একটিমাত্র সফরে হারিয়েছেন পুঁজি, ক্রেতা আর নিজের শহর। এরপর তিনি যা করলেন, তা হিজরতের সবচেয়ে বেশি উদ্ধৃত দৃশ্যগুলোর একটি হয়ে আছে।",
          },
        ],
      },
      {
        h: { en: "Show Me the Market", bn: "আমাকে বাজারটা দেখিয়ে দিন" },
        p: [
          {
            en: "The Prophet ﷺ paired each Muhajir with an Ansari brother, and Abdur-Rahman was paired with Sa'd ibn ar-Rabi (RA). Sa'd offered to divide his wealth with him in half and to help him marry. Abdur-Rahman answered that Allah should bless him in his family and his wealth, and asked instead to be shown the way to the marketplace. It is recorded in Sahih al-Bukhari, and it is one of the few times a man has refused half a fortune in a single sentence.",
            bn: "নবীজি ﷺ প্রত্যেক মুহাজিরকে একজন আনসারি ভাইয়ের সঙ্গে ভ্রাতৃত্ববন্ধনে বাঁধেন; আবদুর রহমানের ভাই হন সাদ ইবনুর রাবি (রাঃ)। সাদ তাঁকে নিজের সম্পদ অর্ধেক ভাগ করে দিতে এবং বিয়ের ব্যবস্থা করে দিতে চান। আবদুর রহমান বলেন, আল্লাহ আপনার পরিবার ও সম্পদে বরকত দিন; এর বদলে তিনি চান কেবল বাজারের পথটুকু দেখিয়ে দেওয়া হোক। ঘটনাটি সহিহ বুখারিতে বর্ণিত—একটিমাত্র বাক্যে অর্ধেক সম্পদ ফিরিয়ে দেওয়ার নজির ইতিহাসে খুব বেশি নেই।",
          },
          {
            en: "He went to the market of Banu Qaynuqa and began with cheese and clarified butter, small goods with a quick turn. Within a short time he had enough to marry, and he came to the Prophet ﷺ with the trace of saffron still on him from the wedding. The Prophet ﷺ told him to hold a wedding feast, even if only with one sheep. That is the entire arc of his rebuilding: he asked for access, not for assistance.",
            bn: "তিনি বনু কাইনুকার বাজারে যান এবং পনির ও ঘি দিয়ে শুরু করেন—অল্প পুঁজির, দ্রুত বিক্রির পণ্য। অল্প সময়ের মধ্যেই বিয়ে করার মতো সঙ্গতি হয়ে যায়, আর বিয়ের জাফরানের চিহ্ন গায়ে নিয়েই তিনি নবীজি ﷺ-এর কাছে আসেন। নবীজি ﷺ তাঁকে ওয়ালিমার আয়োজন করতে বলেন, একটি বকরি দিয়ে হলেও। তাঁর পুনর্গঠনের পুরো গল্পটাই এই: তিনি সাহায্য চাননি, চেয়েছিলেন সুযোগ।",
          },
        ],
      },
      {
        h: { en: "Blessing in Honest Trade", bn: "সৎ ব্যবসায় বরকত" },
        p: [
          {
            en: "His trade prospered to a degree that astonished those around him. He said of himself that he had only to lift a stone and he expected to find gold or silver beneath it. He dealt in what people actually needed, kept his word exactly, and did not chase a profit that required a lie. In the Islamic view the market is not a lower place than the mosque; it is where honesty is tested in public, every day, for money.",
            bn: "তাঁর ব্যবসায় এমন উন্নতি হয় যা আশপাশের মানুষকে বিস্মিত করত। তিনি নিজের সম্পর্কে বলতেন, আমি যেন একটি পাথর তুললেই তার নিচে সোনা বা রুপা পাওয়ার আশা করি। তিনি এমন পণ্যের ব্যবসা করতেন যা মানুষের সত্যিই প্রয়োজন, কথা রাখতেন অক্ষরে অক্ষরে, আর মিথ্যা বলে অর্জনযোগ্য মুনাফার পেছনে ছুটতেন না। ইসলামের দৃষ্টিতে বাজার মসজিদের চেয়ে নিচু কোনো জায়গা নয়; বরং এখানেই প্রতিদিন প্রকাশ্যে, অর্থের বিনিময়ে সততার পরীক্ষা হয়।",
          },
          {
            en: "He fought at Badr, and at Uhud he was wounded so badly in the leg that he limped for the rest of his life. On the expedition to Tabuk the Prophet ﷺ arrived late for the dawn prayer and found Abdur-Rahman already leading it, so he prayed the remaining part behind him. Few men in history have been led in prayer by the Messenger of Allah ﷺ, and Abdur-Rahman was one.",
            bn: "তিনি বদরে লড়েন; উহুদে পায়ে এমন গুরুতর আঘাত পান যে সারাজীবন খুঁড়িয়ে হাঁটতেন। তাবুক অভিযানে নবীজি ﷺ ফজরের জামাতে দেরিতে পৌঁছে দেখেন আবদুর রহমান ইতিমধ্যেই ইমামতি করছেন; তাই তিনি অবশিষ্ট অংশ তাঁর পেছনেই আদায় করেন। ইতিহাসে খুব কম মানুষই আছেন যাঁদের ইমামতিতে আল্লাহর রাসূল ﷺ নামাজ পড়েছেন—আবদুর রহমান তাঁদের একজন।",
          },
        ],
      },
      {
        h: { en: "Giving by the Caravan", bn: "কাফেলা ধরে ধরে দান" },
        p: [
          {
            en: "As his wealth grew, so did the scale on which he gave it away. He once sent an entire caravan of seven hundred camels into Madinah and gave it away complete, animals and loads together. He freed slaves, equipped fighters with mounts and gear, and set aside property for the Mothers of the Believers after the Prophet ﷺ had died. He was living out 3:92, which tells the believers they will not attain righteousness until they spend from what they love.",
            bn: "সম্পদ যত বেড়েছে, দানের পরিসরও তত বেড়েছে। একবার তিনি সাতশো উটের গোটা একটি কাফেলা মদিনায় পাঠিয়ে সবটাই দান করে দেন—উট ও মালামাল একসঙ্গে। তিনি দাস মুক্ত করতেন, যোদ্ধাদের বাহন ও সরঞ্জাম দিতেন, আর নবীজি ﷺ-এর ইন্তেকালের পর উম্মুল মুমিনিনদের জন্য সম্পত্তি বরাদ্দ করেন। তিনি যেন 3:92 আয়াতটিই বাস্তবে যাপন করছিলেন—যা বলে, তোমরা কখনো পুণ্যে পৌঁছাতে পারবে না যতক্ষণ না প্রিয় বস্তু থেকে ব্যয় করো।",
          },
          {
            en: "Wealth frightened him rather than pleasing him. Food was once brought to him while he was fasting and he wept and would not eat, saying that Musab ibn Umayr (RA) was better than him and had died with nothing but a cloak too short to cover him, and that he feared their good things had been given to them early in this world. A man who gives out of fear of Allah gives differently from a man who gives out of surplus.",
            bn: "সম্পদ তাঁকে আনন্দ নয়, বরং ভয় দিত। একবার রোজা অবস্থায় তাঁর সামনে খাবার আনা হলে তিনি কেঁদে ফেলেন এবং খেতে পারেননি; বলেন, মুসআব ইবনে উমাইর (রাঃ) আমার চেয়ে উত্তম ছিলেন, অথচ তিনি এমন এক চাদর ছাড়া কিছুই রেখে যাননি যা তাঁর দেহও ঢাকত না—আমার আশঙ্কা হয়, আমাদের ভালো জিনিসগুলো দুনিয়াতেই আগেভাগে দিয়ে দেওয়া হয়েছে। আল্লাহভীতি থেকে যে দান করে, তার দান উদ্বৃত্ত থেকে দান করা মানুষের মতো নয়।",
          },
        ],
      },
      {
        h: { en: "The Shura and Uthman", bn: "শূরা ও উসমান (রাঃ)" },
        p: [
          {
            en: "When Umar (RA) was stabbed he named six men and told them to choose a caliph from among themselves within three days. Abdur-Rahman was one of the six. His first act was to remove himself from consideration, which left him free to act as the arbiter, and the others agreed to accept his decision. He then spent three days and nights doing something the community had never seen before.",
            bn: "উমর (রাঃ) আহত হলে তিনি ছয়জনের নাম বলে যান এবং তিন দিনের মধ্যে তাঁদের মধ্য থেকেই খলিফা নির্বাচনের নির্দেশ দেন। আবদুর রহমান ছিলেন সেই ছয়জনের একজন। প্রথম কাজেই তিনি নিজেকে প্রার্থিতা থেকে সরিয়ে নেন, ফলে সালিস হিসেবে কাজ করার সুযোগ পান; বাকিরা তাঁর সিদ্ধান্ত মেনে নিতে সম্মত হন। এরপর তিন দিন-রাত ধরে তিনি এমন কিছু করেন যা উম্মাহ আগে কখনো দেখেনি।",
          },
          {
            en: "He consulted, house by house. He asked the senior companions, then the commanders, then ordinary men in the streets and women behind their doors, and even travellers passing through Madinah, until he had heard the city. Then he took Uthman (RA) by the hand in the mosque and gave him the pledge, and the people followed. The reports say he barely slept in those nights. He died in the caliphate of Uthman (RA), one of the ten given the glad tidings of Paradise.",
            bn: "তিনি ঘরে ঘরে গিয়ে পরামর্শ নেন। প্রবীণ সাহাবিদের জিজ্ঞাসা করেন, তারপর সেনাপতিদের, তারপর রাস্তার সাধারণ মানুষকে, ঘরের ভেতরের নারীদের, এমনকি মদিনায় আসা পথিকদেরও—যতক্ষণ না গোটা শহরের কথা শোনা হয়ে যায়। এরপর মসজিদে তিনি উসমান (রাঃ)-এর হাত ধরে বাইআত দেন, আর মানুষ তাঁকে অনুসরণ করে। বর্ণনায় আছে, সেই রাতগুলোতে তিনি প্রায় ঘুমাননি। উসমান (রাঃ)-এর খিলাফতকালেই তিনি ইন্তেকাল করেন—জান্নাতের সুসংবাদপ্রাপ্ত দশজনের একজন হয়ে।",
          },
        ],
      },
    ],
  },
  sad_ibn_abi_waqqas: {
    sections: [
      {
        h: { en: "This Is My Uncle", bn: "এ আমার মামা" },
        p: [
          {
            en: "Sa'd ibn Abi Waqqas (RA) came from Banu Zuhrah, the clan of the Prophet's ﷺ mother Aminah, and the Prophet ﷺ would present him to people by saying that this was his maternal uncle. He accepted Islam as a teenager, among the first small group, and he made arrows with his own hands before he ever fired one for the faith. Archery would shape both his early reputation and the great battle of his old age.",
            bn: "সাদ ইবনে আবি ওয়াক্কাস (রাঃ) ছিলেন বনু যুহরা গোত্রের—নবীজি ﷺ-এর মা আমিনার গোত্র; নবীজি ﷺ মানুষের সামনে তাঁকে পরিচয় করিয়ে দিতেন এই বলে যে ইনি আমার মামা। কিশোর বয়সেই তিনি ইসলাম গ্রহণ করেন, একেবারে প্রথম ছোট দলটির সঙ্গে; আর ঈমানের পথে তীর ছোড়ার আগেই নিজ হাতে তীর বানাতে জানতেন। তীরন্দাজিই তাঁর তারুণ্যের খ্যাতি আর বার্ধক্যের মহাযুদ্ধ—দুটোই গড়ে দিয়েছে।",
          },
          {
            en: "In those Makkan years the believers around the Prophet ﷺ were mostly the poor and the young. Sa'd narrated that the chiefs of Quraysh demanded the Prophet ﷺ drive such men away before they would sit with him, and Allah forbade it in 6:52, ordering that those who call upon their Lord morning and evening not be turned away. Sa'd knew from the beginning that this religion would not be traded for the approval of powerful men.",
            bn: "মক্কার সেই বছরগুলোতে নবীজি ﷺ-এর আশপাশের ঈমানদারদের অধিকাংশই ছিলেন গরিব ও তরুণ। সাদ বর্ণনা করেছেন, কুরাইশ নেতারা দাবি করেছিল—এদের তাড়িয়ে দিলে তবেই তারা নবীজির সঙ্গে বসবে; আল্লাহ 6:52 আয়াতে তা নিষেধ করে দেন এবং আদেশ দেন, যারা সকাল-সন্ধ্যায় তাদের প্রভুকে ডাকে তাদের যেন দূরে সরিয়ে না দেওয়া হয়। সাদ শুরু থেকেই জানতেন, ক্ষমতাবানদের সন্তুষ্টির বিনিময়ে এই দ্বীন বিক্রি হবে না।",
          },
        ],
      },
      {
        h: { en: "The First Arrow", bn: "প্রথম তীর" },
        p: [
          {
            en: "He used to say of himself that he was the first Arab to shoot an arrow in the path of Allah. It happened in the early days of the fighting, before Badr, when the Muslims of Madinah began to send out small scouting parties. There was nothing glorious about it: a handful of men, a few mounts, and an enemy far stronger. Someone had to be the first to shoot, and it was Sa'd.",
            bn: "তিনি নিজের সম্পর্কে বলতেন, আল্লাহর পথে সর্বপ্রথম তীর নিক্ষেপকারী আরব আমিই। ঘটনাটি ঘটে বদরের আগে, লড়াইয়ের একেবারে গোড়ার দিনগুলোতে, যখন মদিনার মুসলিমরা ছোট ছোট টহল দল পাঠাতে শুরু করেন। এতে জাঁকজমকের কিছু ছিল না: মুষ্টিমেয় কজন মানুষ, কয়েকটি বাহন, আর বহু গুণ শক্তিশালী শত্রু। কাউকে না কাউকে প্রথম তীরটি ছুড়তে হতো—আর সেই মানুষটি ছিলেন সাদ।",
          },
          {
            en: "Being first is a particular kind of test. There is no precedent to lean on and no one ahead of you to blame if it goes wrong. Sa'd spent his life in that position: first to shoot, first among the young men to face down his own mother over faith, and later the commander sent against an empire with an army that had never fought one. He seems never to have asked for a safer place in the line.",
            bn: "প্রথম হওয়া একধরনের বিশেষ পরীক্ষা। ভর করার মতো কোনো নজির থাকে না, ভুল হলে দায় চাপানোর মতো কেউ সামনে থাকে না। সাদের গোটা জীবনই কেটেছে এই অবস্থানে: প্রথম তীরন্দাজ, ঈমানের প্রশ্নে নিজ মায়ের মুখোমুখি দাঁড়ানো প্রথম তরুণদের একজন, আর পরে এমন এক বাহিনী নিয়ে সাম্রাজ্যের বিরুদ্ধে প্রেরিত সেনাপতি যে বাহিনী কখনো সাম্রাজ্যের মুখোমুখি হয়নি। কাতারে নিরাপদ কোনো জায়গা তিনি কোনোদিন চেয়েছেন বলে জানা যায় না।",
          },
        ],
      },
      {
        h: { en: "His Mother's Hunger Strike", bn: "মায়ের অনশন" },
        p: [
          {
            en: "His mother took the hardest route available to her. She swore she would not eat, drink or speak to him until he left Muhammad ﷺ, and she held to it until people had to force water into her mouth. Sa'd loved her deeply, and she knew it. She was not threatening his life; she was offering him her own, and asking him to weigh it against his faith.",
            bn: "তাঁর মা বেছে নেন সবচেয়ে কঠিন পথটি। তিনি শপথ করেন, মুহাম্মদ ﷺ-কে না ছাড়া পর্যন্ত তিনি খাবেন না, পান করবেন না, ছেলের সঙ্গে কথাও বলবেন না; আর তা এমনভাবে ধরে রাখেন যে শেষে লোকজনকে জোর করে তাঁর মুখে পানি দিতে হয়। সাদ মাকে গভীরভাবে ভালোবাসতেন, আর মা তা জানতেন। তিনি ছেলের জীবনের হুমকি দেননি; নিজের জীবনটাই সামনে রেখে বলেছিলেন—ঈমানের সঙ্গে একে ওজন করে দেখো।",
          },
          {
            en: "Sa'd told her that if she had a hundred souls and they left her one by one, he would still not leave this religion, so she could eat or not as she chose. She ate. The narration in Sahih Muslim gives 29:8 as the verse revealed over it, enjoining kindness to parents and forbidding obedience to them in associating partners with Allah, and the commentators read 31:14-15 alongside it for its parallel wording. Kindness is owed always; obedience has a limit.",
            bn: "সাদ তাঁকে বলেন, আপনার যদি একশোটি প্রাণও থাকত আর একটি একটি করে বেরিয়ে যেত, তবুও আমি এই দ্বীন ছাড়তাম না; তাই আপনি চাইলে খান, না চাইলে খাবেন না। মা খেয়েছিলেন। সহিহ মুসলিমের বর্ণনায় এ প্রসঙ্গে নাযিল হওয়া আয়াত হিসেবে 29:8 উল্লেখ করা হয়েছে, যেখানে পিতামাতার প্রতি সদাচরণের আদেশ আছে এবং আল্লাহর সঙ্গে শিরকের প্রশ্নে তাঁদের আনুগত্য নিষিদ্ধ করা হয়েছে; আর মুফাসসিরগণ সমার্থক শব্দচয়নের কারণে 31:14-15 আয়াতকেও এর পাশে রেখে পড়েন। সদাচরণ সবসময়ের দাবি; আনুগত্যের একটি সীমা আছে।",
          },
        ],
      },
      {
        h: { en: "Shoot, Sa'd, Shoot", bn: "ছোড়ো, সাদ, ছোড়ো" },
        p: [
          {
            en: "At Uhud, when the Muslim line broke and the Prophet ﷺ was left with a few men around him, Sa'd stood and shot. The Prophet ﷺ was handing him arrows from the ground and saying, shoot, may my father and mother be your ransom. Ali (RA) said afterwards that he never heard the Prophet ﷺ offer both his parents as a ransom for anyone else. Sa'd kept shooting until the enemy pulled back from that part of the field.",
            bn: "উহুদে যখন মুসলিম কাতার ভেঙে যায় এবং নবীজি ﷺ-এর চারপাশে অল্প কয়েকজন থাকেন, সাদ দাঁড়িয়ে তীর ছুড়ছিলেন। নবীজি ﷺ মাটি থেকে তীর তুলে তাঁর হাতে দিচ্ছিলেন আর বলছিলেন—ছোড়ো, আমার পিতা-মাতা তোমার জন্য উৎসর্গিত হোক। আলী (রাঃ) পরে বলেছেন, আর কারও জন্য নবীজি ﷺ-কে নিজের পিতা-মাতা দুজনকেই উৎসর্গ করতে তিনি শোনেননি। শত্রু ময়দানের ওই অংশ থেকে পিছু হটা পর্যন্ত সাদ তীর ছুড়ে যান।",
          },
          {
            en: "The Prophet ﷺ also supplicated for him that Allah answer him when he called. Sa'd took that seriously for the rest of his life. He was known among the companions as a man whose supplication was answered, and, knowing it, he was careful with his tongue and slow to pray against anyone, because a weapon that never misses must be handled with more care, not less.",
            bn: "নবীজি ﷺ তাঁর জন্য এই দোয়াও করেন যে, সাদ যখন ডাকে আল্লাহ যেন সাড়া দেন। বাকি জীবন সাদ এই কথাটিকে গুরুত্বের সঙ্গে নিয়েছেন। সাহাবিদের মধ্যে তিনি পরিচিত ছিলেন এমন একজন হিসেবে যাঁর দোয়া কবুল হয়; আর এটি জানার কারণেই তিনি জিহ্বা সামলে চলতেন, কারও বিরুদ্ধে দোয়া করতে চাইতেন না—কেননা যে অস্ত্র কখনো লক্ষ্যভ্রষ্ট হয় না, তা আরও বেশি সতর্কতায় ধরতে হয়, কম নয়।",
          },
        ],
      },
      {
        h: { en: "Qadisiyyah and the New City", bn: "কাদিসিয়্যা ও নতুন শহর" },
        p: [
          {
            en: "Umar (RA) chose him to command the army sent against the Persian Empire. At al-Qadisiyyah Sa'd was too ill to sit on a horse, so he directed the battle from a raised position overlooking the field, sending his orders down through a deputy. The fighting ran for days and ended in a victory that opened the road to the Persian capital and changed the map of the region permanently.",
            bn: "উমর (রাঃ) পারস্য সাম্রাজ্যের বিরুদ্ধে প্রেরিত বাহিনীর সেনাপতি হিসেবে তাঁকে মনোনীত করেন। কাদিসিয়্যায় সাদ এতটাই অসুস্থ ছিলেন যে ঘোড়ায় বসতে পারতেন না; তাই ময়দানের দিকে মুখ করা উঁচু একটি জায়গা থেকে যুদ্ধ পরিচালনা করেন এবং একজন প্রতিনিধির মাধ্যমে নিচে নির্দেশ পাঠাতেন। কয়েক দিন ধরে চলা এই যুদ্ধ শেষ হয় এমন বিজয়ে, যা পারস্যের রাজধানীর পথ খুলে দেয় এবং অঞ্চলের মানচিত্র চিরতরে বদলে দেয়।",
          },
          {
            en: "Afterwards he laid out Kufa as a garrison city, with quarters for the tribes and a mosque at its centre, and governed it for Umar (RA). Complaints came, as they always do, and Umar (RA) removed him — while stating plainly that he was not removing him for incompetence or dishonesty. Sa'd accepted the decision without protest, and Umar (RA) still named him among the six from whom the next caliph was to be chosen.",
            bn: "এরপর তিনি কুফাকে সেনানিবাস-নগরী হিসেবে গড়ে তোলেন—গোত্রভিত্তিক মহল্লা আর কেন্দ্রে মসজিদ; উমর (রাঃ)-এর পক্ষে তিনিই তা শাসন করেন। অভিযোগ আসে, যেমন সবসময় আসে; উমর (রাঃ) তাঁকে সরিয়ে দেন—তবে স্পষ্ট করে বলে দেন যে অযোগ্যতা বা অসততার কারণে তিনি তাঁকে সরাচ্ছেন না। সাদ কোনো আপত্তি ছাড়াই সিদ্ধান্ত মেনে নেন, আর উমর (রাঃ) তবু তাঁকে সেই ছয়জনের মধ্যে রাখেন যাঁদের মধ্য থেকে পরবর্তী খলিফা নির্বাচিত হবেন।",
          },
        ],
      },
      {
        h: { en: "A Supplication That Was Answered", bn: "যে দোয়া কবুল হয়েছিল" },
        p: [
          {
            en: "One of the Kufan complaints was that he did not pray properly. Sa'd replied that he prayed with them exactly as the Messenger of Allah ﷺ prayed, lengthening the first two units and shortening the last. The accuser, a man of that city, persisted in what he had said. Sa'd then prayed that if the man was lying and had stood up only to be seen, Allah would lengthen his life, lengthen his poverty and expose him to trials.",
            bn: "কুফাবাসীর একটি অভিযোগ ছিল, তিনি ঠিকমতো নামাজ পড়ান না। সাদ উত্তর দেন, আমি তাদের নিয়ে ঠিক সেভাবেই নামাজ পড়ি যেভাবে আল্লাহর রাসূল ﷺ পড়তেন—প্রথম দুই রাকাত দীর্ঘ করি, আর শেষের অংশ সংক্ষিপ্ত করি। অভিযোগকারী, সেই শহরেরই একজন, নিজের কথায় অটল থাকে। তখন সাদ দোয়া করেন—এই লোক যদি মিথ্যা বলে থাকে এবং কেবল লোক-দেখানোর জন্যই দাঁড়িয়ে থাকে, তবে আল্লাহ যেন তার আয়ু দীর্ঘ করেন, দারিদ্র্য দীর্ঘ করেন এবং তাকে ফিতনার মুখে ফেলেন।",
          },
          {
            en: "Years later that man was seen as a very old beggar, his eyebrows fallen over his eyes, saying of himself that he was an old man afflicted, struck by the supplication of Sa'd. When civil war came between the Muslims, Sa'd refused to take part on any side and asked instead for a sword that could tell a believer from a disbeliever. He died near Madinah, among the last of the ten promised Paradise, asking to be buried in a woollen cloak he had kept from the day of Badr.",
            bn: "বহু বছর পর সেই লোককে দেখা যায় অতি বৃদ্ধ এক ভিক্ষুক হিসেবে, চোখের ওপর ভ্রু ঝুলে পড়েছে; সে নিজের সম্পর্কে বলত—আমি এক বিপদগ্রস্ত বৃদ্ধ, সাদের দোয়া আমাকে ধরেছে। মুসলিমদের মধ্যে গৃহযুদ্ধ বেধে গেলে সাদ কোনো পক্ষেই অংশ নিতে অস্বীকার করেন এবং বলেন, আমাকে এমন তরবারি দাও যা মুমিন আর কাফিরের পার্থক্য বুঝতে পারে। মদিনার কাছেই তিনি ইন্তেকাল করেন—জান্নাতের সুসংবাদপ্রাপ্ত দশজনের সর্বশেষদের একজন হয়ে; অসিয়ত করে যান, বদরের দিন থেকে রেখে দেওয়া পশমি চাদরেই যেন তাঁকে দাফন করা হয়।",
          },
        ],
      },
    ],
  },
  abu_ubaydah_ibn_al_jarrah: {
    sections: [
      {
        h: { en: "The Trustworthy One", bn: "উম্মাহর আমিন" },
        p: [
          {
            en: "Amir ibn Abdullah ibn al-Jarrah, known to history by his kunya Abu Ubaydah, came to Islam through Abu Bakr (RA) in the first days, when believing meant losing your place in Makkah. He was thin, quiet and unremarkable to look at, and companions who knew him described a man who never raised his voice and never pushed himself forward. The Prophet ﷺ said that every nation has a trustworthy one, and that the trustworthy one of this ummah is Abu Ubaydah ibn al-Jarrah.",
            bn: "আমির ইবনে আবদুল্লাহ ইবনুল জাররাহ, ইতিহাসে যিনি পরিচিত তাঁর কুনিয়া আবু উবাইদা নামে, ইসলাম গ্রহণ করেন একেবারে প্রথম দিনগুলোতে আবু বকর (রাঃ)-এর মাধ্যমে—যখন ঈমান আনার অর্থ ছিল মক্কায় নিজের অবস্থান হারানো। তিনি ছিলেন কৃশকায়, স্বল্পভাষী, দেখতে সাধারণ; যাঁরা তাঁকে চিনতেন তাঁরা বলতেন, এমন একজন মানুষ যিনি কখনো গলা চড়াতেন না, নিজেকে সামনে ঠেলে দিতেন না। নবীজি ﷺ বলেছেন, প্রত্যেক জাতির একজন আমিন থাকে, আর এই উম্মাহর আমিন হলেন আবু উবাইদা ইবনুল জাররাহ।",
          },
          {
            en: "That title was not ceremonial. When the Christians of Najran came to Madinah and asked the Prophet ﷺ to send back with them a trustworthy man to judge between them, it was Abu Ubaydah he sent. Trustworthiness in his case meant something practical: money, treaties and the lives of non-Muslims under Muslim rule could be placed in his hands and would come back exactly as they were described.",
            bn: "এই উপাধি নিছক আনুষ্ঠানিক ছিল না। নাজরানের খ্রিস্টানরা যখন মদিনায় এসে নবীজি ﷺ-এর কাছে অনুরোধ করে যে তাদের সঙ্গে একজন বিশ্বস্ত লোক পাঠানো হোক যিনি তাদের মধ্যে ফয়সালা করবেন, তখন নবীজি ﷺ আবু উবাইদাকেই পাঠান। তাঁর ক্ষেত্রে বিশ্বস্ততা মানে ছিল খুবই বাস্তব কিছু: অর্থ, চুক্তি এবং মুসলিম শাসনের অধীন অমুসলিমদের জীবন তাঁর হাতে তুলে দেওয়া যেত, আর তা ফিরে আসত ঠিক যেমন বলা হয়েছিল তেমনই।",
          },
        ],
      },
      {
        h: { en: "Badr's Hardest Test", bn: "বদরের কঠিনতম পরীক্ষা" },
        p: [
          {
            en: "He emigrated to Abyssinia and then to Madinah, and stood in the ranks at Badr. His own father was on the other side, in the army of Quraysh, and kept seeking him out in the fighting. Abu Ubaydah turned away from him again and again, refusing the encounter. It is commonly related that his father would not be avoided any longer and that Abu Ubaydah killed him, though the report is not established and a number of scholars reject it.",
            bn: "তিনি আবিসিনিয়ায় এবং পরে মদিনায় হিজরত করেন, আর বদরের কাতারে দাঁড়ান। তাঁর নিজের পিতা ছিলেন অপর পক্ষে, কুরাইশ বাহিনীতে, এবং লড়াইয়ের মধ্যে বারবার ছেলেকে খুঁজছিলেন। আবু উবাইদা বারবার তাঁর সামনে থেকে সরে যান, মুখোমুখি হতে চাননি। বহুল প্রচলিত একটি বর্ণনায় আছে, শেষপর্যন্ত যখন আর এড়ানো গেল না, তখন আবু উবাইদার হাতেই তাঁর পিতা নিহত হন—তবে বর্ণনাটি প্রমাণিত নয় এবং বেশ কয়েকজন আলিম তা প্রত্যাখ্যান করেছেন।",
          },
          {
            en: "The early commentators cite 58:22 in connection with him: you will not find a people who believe in Allah and the Last Day showing affection to those who oppose Allah and His Messenger, even if they are their fathers, their sons, their brothers or their kindred. The verse does not command cruelty to relatives; the Quran commands the opposite in ordinary life. It settles which loyalty rules when a man is standing on a battlefield and the two claims cannot both be met.",
            bn: "প্রাচীন মুফাসসিরগণ তাঁর প্রসঙ্গে 58:22 আয়াতটি উল্লেখ করেছেন: আল্লাহ ও শেষ দিনে বিশ্বাসী এমন কোনো সম্প্রদায় আপনি পাবেন না যারা আল্লাহ ও তাঁর রাসূলের বিরোধিতাকারীদের ভালোবাসে, তারা তাদের পিতা, পুত্র, ভাই বা আত্মীয় হলেও। আয়াতটি আত্মীয়ের প্রতি নিষ্ঠুরতার আদেশ দেয় না; স্বাভাবিক জীবনে কুরআন বরং এর উল্টোটাই আদেশ করে। এটি কেবল নিষ্পত্তি করে দেয়—যুদ্ধের ময়দানে দাঁড়িয়ে দুই দাবি একসঙ্গে রক্ষা করা অসম্ভব হলে কোন আনুগত্য অগ্রাধিকার পাবে।",
          },
        ],
      },
      {
        h: { en: "Two Teeth at Uhud", bn: "উহুদে দুটি দাঁত" },
        p: [
          {
            en: "At Uhud, two rings of the Prophet's ﷺ helmet had been driven into his cheek. Abu Ubaydah gripped them with his teeth and pulled them out, and each ring took a front tooth with it. He did not treat the loss as a wound but as a mark, and those who met him afterwards remembered the gap in his smile as belonging to that day.",
            bn: "উহুদে নবীজি ﷺ-এর শিরস্ত্রাণের দুটি কড়া তাঁর গালে গেঁথে গিয়েছিল। আবু উবাইদা দাঁত দিয়ে সেগুলো ধরে টেনে বের করেন, আর প্রতিটি কড়ার সঙ্গে তাঁর একটি করে সামনের দাঁত উঠে আসে। এই ক্ষতিকে তিনি আঘাত নয়, বরং একটি চিহ্ন হিসেবেই দেখতেন; পরবর্তীকালে যাঁরা তাঁর সাক্ষাৎ পেয়েছেন, তাঁরা তাঁর হাসির সেই ফাঁককে ওই দিনেরই স্মারক হিসেবে মনে রাখতেন।",
          },
          {
            en: "His humility was equally practised. On the expedition of Dhat as-Salasil the command was given to Amr ibn al-As (RA), who was junior to him in Islam, and when a dispute arose Abu Ubaydah deferred, reminding the men that the Prophet ﷺ had told them not to differ. He was capable of leading and equally capable of not leading, which is the rarer of the two abilities.",
            bn: "তাঁর বিনয়ও ছিল সমান অনুশীলিত। যাতুস সালাসিল অভিযানে নেতৃত্ব দেওয়া হয় আমর ইবনুল আস (রাঃ)-কে, যিনি ইসলামে তাঁর চেয়ে পরবর্তী; মতভেদ দেখা দিলে আবু উবাইদা নিজেই ছাড় দেন এবং সবাইকে মনে করিয়ে দেন যে নবীজি ﷺ তাঁদের পরস্পরে বিরোধ করতে নিষেধ করেছেন। তিনি নেতৃত্ব দিতে সক্ষম ছিলেন, আবার নেতৃত্ব না দিতেও সমান সক্ষম—দুটির মধ্যে দ্বিতীয়টিই দুর্লভ।",
          },
        ],
      },
      {
        h: { en: "Commander in Sham", bn: "শামের সেনাপতি" },
        p: [
          {
            en: "Umar (RA), on becoming caliph, placed Abu Ubaydah over all the armies in Syria in place of Khalid ibn al-Walid (RA). The historians record that Abu Ubaydah held the letter back rather than announce it in the middle of a battle, and that he then treated Khalid with such respect that the change caused no rupture between them. He led the conquest of Damascus, Homs and the cities beyond, and he was present when Jerusalem was surrendered by treaty.",
            bn: "খলিফা হওয়ার পর উমর (রাঃ) সিরিয়ার সমগ্র বাহিনীর দায়িত্ব খালিদ ইবনুল ওয়ালিদ (রাঃ)-এর স্থলে আবু উবাইদাকে দেন। ঐতিহাসিকরা লিখেছেন, তিনি যুদ্ধের মাঝখানে ঘোষণা না দিয়ে চিঠিটি আটকে রাখেন, এবং পরে খালিদের সঙ্গে এমন সম্মানের আচরণ করেন যে এই পরিবর্তন তাঁদের মধ্যে কোনো ফাটল তৈরি করেনি। তিনি দামেস্ক, হিমস ও তার পরবর্তী নগরগুলো বিজয়ের নেতৃত্ব দেন, আর চুক্তির মাধ্যমে জেরুজালেমের আত্মসমর্পণের সময়ও উপস্থিত ছিলেন।",
          },
          {
            en: "Power did not change how he lived. When Umar (RA) came to Syria and visited his house, he found almost nothing in it — a sword, a shield and his saddle. Asked why he had taken nothing for himself when the treasuries of provinces passed through his hands, he answered in the manner of his whole life, that this was enough to reach the morning with. The soldiers under him ate what he ate.",
            bn: "ক্ষমতা তাঁর জীবনযাপন বদলাতে পারেনি। উমর (রাঃ) সিরিয়ায় এসে তাঁর ঘরে গিয়ে প্রায় কিছুই পাননি—একটি তরবারি, একটি ঢাল আর তাঁর জিন। প্রদেশের রাজকোষ যাঁর হাত দিয়ে যায় তিনি নিজের জন্য কিছুই নেননি কেন—জিজ্ঞাসা করা হলে তিনি সারা জীবনের ভঙ্গিতেই উত্তর দেন যে সকাল পর্যন্ত পৌঁছানোর জন্য এটুকুই যথেষ্ট। তাঁর অধীন সৈনিকরা তা-ই খেত যা তিনি খেতেন।",
          },
        ],
      },
      {
        h: { en: "The Plague of Amwas", bn: "আমওয়াসের মহামারি" },
        p: [
          {
            en: "In the year 18 after the hijrah a plague broke out in Syria at a place called Amwas. Umar (RA) had set out for the province and halted at Sargh when the news reached him. He consulted the Muhajirun and the Ansar, and decided to turn back. Abu Ubaydah asked him whether he was fleeing from the decree of Allah. Umar (RA) answered that yes, they were fleeing from the decree of Allah to the decree of Allah.",
            bn: "হিজরি ১৮ সালে সিরিয়ার আমওয়াস নামক স্থানে মহামারি ছড়িয়ে পড়ে। উমর (রাঃ) প্রদেশের উদ্দেশে রওনা হয়ে সারগ নামক জায়গায় থেমেছিলেন, তখনই খবরটি তাঁর কাছে পৌঁছায়। তিনি মুহাজির ও আনসারদের সঙ্গে পরামর্শ করে ফিরে যাওয়ার সিদ্ধান্ত নেন। আবু উবাইদা জিজ্ঞাসা করেন, আপনি কি আল্লাহর ফয়সালা থেকে পালাচ্ছেন? উমর (রাঃ) উত্তর দেন, হ্যাঁ—আমরা আল্লাহর এক ফয়সালা থেকে আল্লাহরই আরেক ফয়সালার দিকে পালাচ্ছি।",
          },
          {
            en: "Then Abdur-Rahman ibn Awf (RA) reported the Prophet's ﷺ instruction: if you hear of it in a land, do not go to it, and if it breaks out where you are, do not leave in flight from it. Umar (RA) later wrote calling Abu Ubaydah to Madinah. Abu Ubaydah understood that the letter was meant to save his life, and asked to be excused, saying he would not leave the army of the Muslims.",
            bn: "এরপর আবদুর রহমান ইবনে আওফ (রাঃ) নবীজি ﷺ-এর নির্দেশ বর্ণনা করেন: কোনো ভূখণ্ডে এর কথা শুনলে সেখানে যেয়ো না, আর তোমরা যেখানে আছ সেখানে ছড়িয়ে পড়লে পালিয়ে বেরিয়ে এসো না। পরে উমর (রাঃ) চিঠি লিখে আবু উবাইদাকে মদিনায় ডেকে পাঠান। আবু উবাইদা বুঝতে পারেন, চিঠিটির উদ্দেশ্য তাঁর জীবন বাঁচানো; তাই তিনি অব্যাহতি চান এবং বলেন, মুসলিম বাহিনীকে ছেড়ে তিনি যাবেন না।",
          },
        ],
      },
      {
        h: { en: "He Stayed With Them", bn: "তিনি তাদের সঙ্গেই থেকে যান" },
        p: [
          {
            en: "He moved the camp to healthier ground to slow the spread, and he stayed. The plague took thousands, and it took him. Before he died he gathered the army and left them a short counsel: establish the prayer, fast the month, give charity, perform hajj and umrah, advise one another, and be sincere to your leaders and do not deceive them. Then he appointed Mu'adh ibn Jabal (RA) over them and died where his men were dying.",
            bn: "সংক্রমণের গতি কমাতে তিনি শিবির অপেক্ষাকৃত স্বাস্থ্যকর জায়গায় সরিয়ে নেন, আর নিজে থেকে যান। মহামারি হাজার হাজার মানুষকে নিয়ে যায়, নিয়ে যায় তাঁকেও। মৃত্যুর আগে তিনি বাহিনীকে জড়ো করে সংক্ষিপ্ত উপদেশ দেন: নামাজ কায়েম করো, রমজানের রোজা রাখো, সদকা দাও, হজ ও উমরা করো, একে অপরকে উপদেশ দাও, আর নেতাদের প্রতি আন্তরিক থাকো, তাদের সঙ্গে প্রতারণা করো না। এরপর তিনি মুআয ইবনে জাবাল (রাঃ)-কে তাদের দায়িত্ব দেন এবং যেখানে তাঁর সৈনিকরা মরছিল সেখানেই ইন্তেকাল করেন।",
          },
          {
            en: "Umar (RA), when his own death came and men asked him to name a successor, said that if Abu Ubaydah were alive he would have appointed him and answered for him before his Lord. That is the measure of the man: not the cities he took, which were many, but that the strictest of caliphs would have handed him the whole ummah without hesitation.",
            bn: "উমর (রাঃ)-এর নিজের মৃত্যুকাল যখন ঘনিয়ে আসে এবং লোকেরা উত্তরসূরির নাম বলতে বলেন, তিনি বলেন—আবু উবাইদা জীবিত থাকলে আমি তাঁকেই নিযুক্ত করতাম এবং আমার প্রভুর সামনে তাঁর ব্যাপারে জবাব দিতাম। মানুষটির প্রকৃত পরিমাপ এখানেই: তিনি কতগুলো নগর জয় করেছেন তাতে নয়—সেগুলো অনেক—বরং এতে যে, খলিফাদের মধ্যে সবচেয়ে কঠোরজন বিনা দ্বিধায় গোটা উম্মাহ তাঁর হাতে তুলে দিতেন।",
          },
        ],
      },
    ],
  },
  khalid_ibn_al_walid: {
    sections: [
      {
        h: { en: "On the Wrong Side", bn: "ভুল পক্ষে দাঁড়িয়ে" },
        p: [
          {
            en: "Khalid ibn al-Walid (RA) was a son of Banu Makhzum, the clan that supplied Quraysh with its cavalry, and he was already their finest horseman before Islam reached him. At Uhud he commanded the Makkan right wing. He watched the archers abandon the hill the Prophet ﷺ had ordered them to hold, saw the gap open behind the Muslim line, and took his riders through it. What had been a Muslim victory turned in an hour into their hardest day.",
            bn: "খালিদ ইবনুল ওয়ালিদ (রাঃ) ছিলেন বনু মাখযুমের সন্তান—কুরাইশের অশ্বারোহী বাহিনী যে গোত্র থেকে আসত; ইসলাম তাঁর কাছে পৌঁছানোর আগেই তিনি ছিলেন তাদের সেরা অশ্বারোহী। উহুদে তিনি মক্কার ডান বাহুর নেতৃত্বে ছিলেন। নবীজি ﷺ যে টিলা ধরে রাখতে তীরন্দাজদের নির্দেশ দিয়েছিলেন, তাঁদের তা ছেড়ে যেতে দেখে এবং মুসলিম কাতারের পেছনে ফাঁক তৈরি হতে দেখে তিনি সেই পথেই অশ্বারোহীদের নিয়ে ঢুকে পড়েন। যা ছিল মুসলিমদের বিজয়, এক ঘণ্টায় তা তাঁদের কঠিনতম দিনে পরিণত হয়।",
          },
          {
            en: "The Quran addresses that reverse directly in 3:152, telling the believers that Allah had fulfilled His promise to them until they lost courage and disputed over the command and disobeyed after He had shown them what they loved. The lesson was recorded against the Muslims, not against Khalid. But it is worth remembering that the man who exposed that disobedience so ruthlessly would soon be fighting on the other side of the same banner.",
            bn: "কুরআন সেই বিপর্যয়ের কথা সরাসরি বলেছে 3:152 আয়াতে—আল্লাহ তোমাদের প্রতি তাঁর ওয়াদা সত্য করেই দেখিয়েছিলেন, যতক্ষণ না তোমরা সাহস হারালে, নির্দেশ নিয়ে বিতণ্ডা করলে এবং তিনি তোমাদের প্রিয় বস্তু দেখানোর পর অবাধ্য হলে। শিক্ষাটি লেখা হয়েছে মুসলিমদের বিরুদ্ধে, খালিদের বিরুদ্ধে নয়। তবু মনে রাখার মতো বিষয়, যে মানুষটি এত নির্মমভাবে সেই অবাধ্যতার মূল্য আদায় করে নিয়েছিলেন, তিনিই অচিরে একই পতাকার অন্য পাশে দাঁড়িয়ে লড়বেন।",
          },
        ],
      },
      {
        h: { en: "The Turning", bn: "মোড় ফেরা" },
        p: [
          {
            en: "He was at Hudaybiyah too, sent out with cavalry to intercept the Muslims on the road, and he watched them pray in ranks under threat of attack. Between that treaty and the year 8 after the hijrah something settled in him. He rode to Madinah with Amr ibn al-As (RA) and Uthman ibn Talhah (RA) and gave his pledge. The Prophet ﷺ received him with the words that praise belongs to Allah who guided him, and said he had always seen in Khalid an intelligence that he hoped would lead him only to good.",
            bn: "হুদাইবিয়ায়ও তিনি ছিলেন—মুসলিমদের পথ আটকাতে অশ্বারোহী নিয়ে পাঠানো হয়েছিল তাঁকে; সেখানে তিনি দেখেন, আক্রমণের হুমকির মধ্যেও তাঁরা কাতারবন্দি হয়ে নামাজ পড়ছেন। ওই সন্ধি আর হিজরি ৮ সনের মাঝামাঝি সময়ে তাঁর ভেতরে কিছু একটা থিতু হয়। তিনি আমর ইবনুল আস (রাঃ) ও উসমান ইবনে তালহা (রাঃ)-এর সঙ্গে মদিনায় গিয়ে বাইআত করেন। নবীজি ﷺ তাঁকে গ্রহণ করেন এই বলে যে, সমস্ত প্রশংসা আল্লাহর যিনি তোমাকে পথ দেখিয়েছেন; আর বলেন, খালিদের মধ্যে তিনি সবসময় এমন বুদ্ধি দেখেছেন যা তাঁকে কেবল কল্যাণের দিকেই নিয়ে যাবে বলে তাঁর আশা ছিল।",
          },
          {
            en: "Khalid asked forgiveness for the years he had spent fighting against the truth. He was told that Islam erases what came before it. That principle mattered far beyond one man: the community was about to absorb whole tribes that had fought it, and the standard set with Khalid became the standard for all of them.",
            bn: "সত্যের বিরুদ্ধে লড়ে কাটানো বছরগুলোর জন্য খালিদ ক্ষমা প্রার্থনা করেন। তাঁকে জানানো হয়, ইসলাম তার পূর্ববর্তী সবকিছু মুছে দেয়। এই নীতির গুরুত্ব একজন মানুষের চেয়ে অনেক বড় ছিল: উম্মাহ তখন এমন সব গোত্রকে বুকে টেনে নিতে চলেছে যারা তার বিরুদ্ধেই লড়েছে, আর খালিদের ক্ষেত্রে যে মানদণ্ড স্থির হলো, তা-ই হয়ে গেল সবার জন্য মানদণ্ড।",
          },
        ],
      },
      {
        h: { en: "A Sword of Allah", bn: "আল্লাহর এক তরবারি" },
        p: [
          {
            en: "At Mu'tah in the year 8 a small Muslim force met an army many times its size. The Prophet ﷺ had named three commanders in order, and all three fell: Zayd ibn Harithah (RA), then Ja'far ibn Abi Talib (RA), then Abdullah ibn Rawahah (RA). The banner was then taken up by Khalid, who had been a Muslim for only months. He reorganised the ranks, held the enemy off, and brought the army out alive.",
            bn: "হিজরি ৮ সনে মুতায় এক ক্ষুদ্র মুসলিম বাহিনী বহুগুণ বড় এক সেনাদলের মুখোমুখি হয়। নবীজি ﷺ ক্রমানুসারে তিনজন সেনাপতির নাম বলে দিয়েছিলেন, আর তিনজনই শহীদ হন: যায়েদ ইবনে হারিসা (রাঃ), এরপর জাফর ইবনে আবি তালিব (রাঃ), এরপর আবদুল্লাহ ইবনে রাওয়াহা (রাঃ)। এরপর পতাকা তুলে নেন খালিদ, যিনি তখন মাত্র কয়েক মাসের মুসলিম। তিনি কাতার নতুন করে সাজান, শত্রুকে ঠেকিয়ে রাখেন এবং বাহিনীকে জীবিত ফিরিয়ে আনেন।",
          },
          {
            en: "Khalid said afterwards that nine swords broke in his hand that day and nothing was left him but a Yemeni blade. In Madinah, before any messenger arrived, the Prophet ﷺ announced the deaths of the three from the pulpit and then said that the banner was taken up by a sword among the swords of Allah, and that Allah granted them relief. That is the origin of the name Sayf Allah, and it came from the Prophet ﷺ himself.",
            bn: "খালিদ পরে বলেছেন, সেদিন তাঁর হাতে নয়টি তরবারি ভেঙে যায়, শেষে ইয়েমেনি একটি ফলা ছাড়া কিছুই টেকেনি। মদিনায়, কোনো বার্তাবাহক পৌঁছানোর আগেই, নবীজি ﷺ মিম্বার থেকে তিন সেনাপতির শাহাদাতের সংবাদ দেন এবং বলেন—এরপর পতাকা তুলে নিয়েছে আল্লাহর তরবারিগুলোর একটি তরবারি, আর আল্লাহ তাদের মুক্তি দিয়েছেন। 'সাইফুল্লাহ' নামের উৎস এটিই, আর তা এসেছে স্বয়ং নবীজি ﷺ-এর মুখ থেকে।",
          },
        ],
      },
      {
        h: { en: "Not Above Correction", bn: "সংশোধনের ঊর্ধ্বে নন" },
        p: [
          {
            en: "After the conquest of Makkah the Prophet ﷺ sent him to Banu Jadhimah to call them to Islam, not to fight them. The tribe used an old word to say they had entered the religion, Khalid's men misread it or chose to, and captives were killed. When the news reached Madinah the Prophet ﷺ raised his hands and said twice that he was innocent before Allah of what Khalid had done.",
            bn: "মক্কা বিজয়ের পর নবীজি ﷺ তাঁকে বনু জাযিমার কাছে পাঠান ইসলামের দাওয়াত দিতে, যুদ্ধ করতে নয়। গোত্রটি দ্বীনে প্রবেশের কথা বোঝাতে পুরোনো একটি শব্দ ব্যবহার করে; খালিদের লোকেরা তা ভুল বোঝে—কিংবা ভুল বোঝাকেই বেছে নেয়—আর বন্দিদের হত্যা করা হয়। খবর মদিনায় পৌঁছালে নবীজি ﷺ দুই হাত তুলে দুবার বলেন, খালিদ যা করেছে তা থেকে আমি আল্লাহর কাছে দায়মুক্ত।",
          },
          {
            en: "He sent Ali (RA) with money to pay compensation for every life and every loss, down to the smallest item, until the tribe was satisfied. Khalid was not dismissed, and the Prophet ﷺ continued to employ him. Both halves of that response matter: a great commander was publicly disowned in his error and publicly kept in service afterwards. Rank in Islam never placed a man above being corrected.",
            bn: "নবীজি ﷺ আলী (রাঃ)-কে অর্থ দিয়ে পাঠান, যাতে প্রতিটি প্রাণ ও প্রতিটি ক্ষতির—এমনকি সামান্যতম জিনিসেরও—ক্ষতিপূরণ দেওয়া হয়, যতক্ষণ না গোত্রটি সন্তুষ্ট হয়। খালিদকে দায়িত্ব থেকে সরানো হয়নি, নবীজি ﷺ পরেও তাঁকে কাজে লাগিয়েছেন। এই জবাবের দুটি দিকই গুরুত্বপূর্ণ: একজন মহান সেনাপতির ভুলকে প্রকাশ্যে অস্বীকার করা হলো, আবার প্রকাশ্যেই তাঁকে দায়িত্বে রাখা হলো। ইসলামে মর্যাদা কখনো কাউকে সংশোধনের ঊর্ধ্বে তোলেনি।",
          },
        ],
      },
      {
        h: { en: "Ridda, Iraq, Yarmuk", bn: "রিদ্দা, ইরাক, ইয়ারমুক" },
        p: [
          {
            en: "When the Prophet ﷺ died and tribes across Arabia broke away, Abu Bakr (RA) sent Khalid against the strongest of them. He defeated Tulayhah, and at al-Butah his handling of Malik ibn Nuwayrah and his people drew sharp criticism from Umar (RA), who pressed for his dismissal. Abu Bakr (RA) refused, saying he would not sheathe a sword that Allah had drawn against the disbelievers. Khalid then faced Musaylimah's army at Yamamah in the bloodiest battle of that war.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর আরবজুড়ে গোত্রগুলো যখন বিচ্ছিন্ন হতে শুরু করে, আবু বকর (রাঃ) তাদের সবচেয়ে শক্তিশালীদের বিরুদ্ধে খালিদকে পাঠান। তিনি তুলাইহাকে পরাজিত করেন; এরপর আল-বুতাহে মালিক ইবনে নুওয়াইরা ও তাঁর লোকদের ব্যাপারে খালিদের পদক্ষেপের কড়া সমালোচনা করেন উমর (রাঃ) এবং তাঁকে অপসারণের জন্য চাপ দেন। আবু বকর (রাঃ) রাজি হননি; বলেন, আল্লাহ কাফিরদের বিরুদ্ধে যে তরবারি কোষমুক্ত করেছেন, আমি তা খাপে ভরব না। এরপর খালিদ ইয়ামামায় মুসাইলিমার বাহিনীর মুখোমুখি হন—সেই যুদ্ধের সবচেয়ে রক্তক্ষয়ী লড়াইয়ে।",
          },
          {
            en: "He then carried the war into Iraq, and when Syria needed him he crossed a waterless stretch of desert with his cavalry to arrive where no army was expected. Ajnadayn, Damascus and finally Yarmuk followed, where the Byzantine field army in Syria was broken and the province passed out of Roman hands. He was never defeated in a battle he commanded.",
            bn: "এরপর তিনি যুদ্ধ নিয়ে যান ইরাকে; আর সিরিয়ায় যখন তাঁকে প্রয়োজন হয়, অশ্বারোহী নিয়ে পানিহীন মরুভূমি পাড়ি দিয়ে এমন জায়গায় পৌঁছান যেখানে কোনো বাহিনীর আগমন কেউ কল্পনাও করেনি। এরপর আজনাদাইন, দামেস্ক এবং সবশেষে ইয়ারমুক—যেখানে সিরিয়ায় বাইজেন্টাইন বাহিনীর মেরুদণ্ড ভেঙে যায় এবং প্রদেশটি রোমান হাত থেকে বেরিয়ে আসে। নিজের নেতৃত্বে পরিচালিত কোনো যুদ্ধে তিনি কখনো পরাজিত হননি।",
          },
        ],
      },
      {
        h: { en: "Removed, and Obedient", bn: "অপসারিত, এবং অনুগত" },
        p: [
          {
            en: "Umar (RA), once caliph, removed him from supreme command and later from his governorship altogether. He wrote to the provinces that he had not dismissed Khalid out of anger or for any treachery, but because people had become dazzled by him and he feared they would come to rely on the commander rather than on Allah. Khalid heard the order and obeyed it, saying that if Umar had appointed another over him then he heard and obeyed.",
            bn: "খলিফা হওয়ার পর উমর (রাঃ) তাঁকে প্রধান সেনাপতির পদ থেকে এবং পরে প্রদেশের দায়িত্ব থেকেও সরিয়ে দেন। তিনি প্রদেশগুলোতে লিখে পাঠান যে ক্রোধ বা বিশ্বাসঘাতকতার কারণে তিনি খালিদকে সরাননি, বরং মানুষ তাঁকে নিয়ে এতটাই মুগ্ধ হয়ে পড়েছিল যে তাঁর আশঙ্কা হয়েছিল—তারা আল্লাহর বদলে সেনাপতির ওপর ভরসা করতে শুরু করবে। খালিদ নির্দেশ শুনে তা মেনে নেন এবং বলেন, উমর যদি আমার ওপর অন্য কাউকে নিযুক্ত করেন, আমি শুনলাম এবং মানলাম।",
          },
          {
            en: "He went on fighting under Abu Ubaydah (RA) with the same energy he had shown in command. He died in his bed at Homs, and the words attributed to him there are famous: that he had fought in so many battles that there was no place on his body without the mark of a sword or an arrow, and yet here he lay dying as a camel dies. Umar (RA) said that the women of Banu Makhzum might weep for him, for they did not lie.",
            bn: "এরপর তিনি আবু উবাইদা (রাঃ)-এর অধীনে সেই একই প্রাণশক্তি নিয়ে লড়ে গেছেন, যা তিনি নেতৃত্বে থাকাকালে দেখিয়েছেন। হিমসে নিজ শয্যায় তিনি ইন্তেকাল করেন, আর সেখানে বলা তাঁর কথাগুলো বিখ্যাত: আমি এত যুদ্ধে লড়েছি যে আমার দেহে এমন জায়গা নেই যেখানে তরবারি বা তীরের দাগ নেই, অথচ আজ আমি শয্যায় শুয়ে উটের মতো মরছি। উমর (রাঃ) বলেন, বনু মাখযুমের নারীরা তাঁর জন্য কাঁদতে পারে, কারণ তারা মিথ্যা বলে না।",
          },
        ],
      },
    ],
  },
  musab_ibn_umayr: {
    sections: [
      {
        h: { en: "The Best-Dressed Youth", bn: "মক্কার সেরা পোশাকের যুবক" },
        p: [
          {
            en: "Musab ibn Umayr (RA) grew up in Banu Abd ad-Dar, a clan of standing in Makkah, and his mother spent on him without limit. He wore the finest cloth in the city and the best perfume, and the young men of Makkah copied what he wore. The Prophet ﷺ said of him later that he had known no young man in Makkah more favoured by his parents than Musab.",
            bn: "মুসআব ইবনে উমাইর (রাঃ) বড় হয়েছেন বনু আবদুদ দার গোত্রে, যা ছিল মক্কার মর্যাদাবান একটি বংশ; তাঁর মা তাঁর পেছনে অকাতরে ব্যয় করতেন। শহরের সবচেয়ে দামি কাপড় আর সেরা সুগন্ধি ছিল তাঁর গায়ে, আর মক্কার তরুণেরা তাঁর পোশাকের অনুকরণ করত। নবীজি ﷺ পরে তাঁর সম্পর্কে বলেছেন, মক্কায় পিতামাতার এত আদরে বেড়ে ওঠা যুবক তিনি আর দেখেননি।",
          },
          {
            en: "It is worth pausing on what that means. He was not a man with nothing to lose who found dignity in a new religion. He had everything the society around him valued: family, money, appearance, standing. Whatever he gained by accepting Islam, it was not status, and he could see that from the first day.",
            bn: "এই কথার অর্থ নিয়ে একটু থামা দরকার। তিনি এমন কেউ ছিলেন না যাঁর হারানোর কিছু নেই, যিনি নতুন ধর্মে মর্যাদা খুঁজে পেয়েছেন। তাঁর কাছে সেই সমাজের মূল্যবান সবকিছুই ছিল: বংশ, অর্থ, রূপ, সম্মান। ইসলাম গ্রহণে তিনি যা-ই পেয়ে থাকুন, সেটি সামাজিক মর্যাদা ছিল না—আর তা তিনি প্রথম দিন থেকেই দেখতে পাচ্ছিলেন।",
          },
        ],
      },
      {
        h: { en: "A Secret and a Prison", bn: "গোপন ঈমান ও বন্দিত্ব" },
        p: [
          {
            en: "He heard the Prophet ﷺ at the house of al-Arqam and accepted Islam there, then kept it hidden from his family. He was seen praying, and word reached his mother and his clan. They confined him and cut him off, and the cloth and the perfume ended. When it became impossible to stay, he emigrated to Abyssinia with the believers who fled the persecution, and returned to Makkah afterwards.",
            bn: "আরকামের ঘরে তিনি নবীজি ﷺ-এর কথা শোনেন এবং সেখানেই ইসলাম গ্রহণ করেন, তারপর তা পরিবারের কাছে গোপন রাখেন। একদিন তাঁকে নামাজরত অবস্থায় দেখে ফেলা হয়, আর খবর পৌঁছে যায় তাঁর মা ও গোত্রের কাছে। তাঁরা তাঁকে আটকে রাখেন ও সম্পর্ক ছিন্ন করেন; দামি কাপড় আর সুগন্ধির অধ্যায় সেখানেই শেষ। থাকা যখন অসম্ভব হয়ে ওঠে, তিনি নির্যাতিত ঈমানদারদের সঙ্গে আবিসিনিয়ায় হিজরত করেন এবং পরে মক্কায় ফিরে আসেন।",
          },
          {
            en: "The companions who saw him after those years remembered the sight for the rest of their lives: the young man of the finest clothes now in a patched cloak of skin, and grown men lowering their heads because they could not look at him without weeping. He himself made nothing of it. He had made the exchange knowingly and did not go back to count what he had paid.",
            bn: "ওই বছরগুলোর পর যাঁরা তাঁকে দেখেছেন, সেই দৃশ্য তাঁরা সারা জীবন মনে রেখেছেন: সবচেয়ে দামি পোশাকের সেই যুবক এখন চামড়ার তালি দেওয়া চাদরে, আর বয়স্ক মানুষেরা মাথা নিচু করে ফেলছেন, কারণ কান্না ছাড়া তাঁর দিকে তাকানো যাচ্ছিল না। তিনি নিজে এ নিয়ে কোনো কথা তোলেননি। বিনিময়টি তিনি জেনেশুনেই করেছিলেন, আর কী মূল্য দিয়েছেন তা গুনতে ফিরে যাননি।",
          },
        ],
      },
      {
        h: { en: "Sent to Madinah", bn: "মদিনায় প্রেরিত" },
        p: [
          {
            en: "After the first pledge at Aqaba, a delegation from Yathrib asked the Prophet ﷺ to send someone to teach them the Quran and the religion. He sent Musab. There were older men available, and men of greater tribal weight, but the task needed a teacher rather than a chief, and Musab was chosen. In Madinah he was known simply as the reciter, and he taught in the courtyards of the two great tribes of the city.",
            bn: "আকাবার প্রথম শপথের পর ইয়াসরিব থেকে আসা প্রতিনিধিদল নবীজি ﷺ-এর কাছে অনুরোধ করে, তাদের কুরআন ও দ্বীন শেখানোর জন্য কাউকে পাঠানো হোক। তিনি পাঠান মুসআবকে। বয়সে প্রবীণ এবং গোত্রীয় প্রভাবে বড় লোকও ছিলেন, কিন্তু এই কাজে দরকার ছিল একজন শিক্ষক, সরদার নয়—আর বেছে নেওয়া হলো মুসআবকে। মদিনায় তিনি পরিচিত ছিলেন কেবল 'কারি' নামে, আর শহরের দুই বড় গোত্রের আঙিনায় বসেই তিনি শেখাতেন।",
          },
          {
            en: "His method has been preserved because of one afternoon. Usayd ibn Hudayr came at him with a spear and told him to leave the people alone. Musab answered that he should sit and listen, and if he liked what he heard he could accept it, and if not they would leave him in peace. Usayd sat, listened, and washed and prayed before he stood up again.",
            bn: "একটি বিকেলের কারণে তাঁর পদ্ধতিটি সংরক্ষিত হয়ে আছে। উসাইদ ইবনে হুদাইর বর্শা হাতে তাঁর দিকে এগিয়ে এসে বলেন, আমাদের লোকদের ছেড়ে দাও। মুসআব উত্তর দেন—আপনি বসুন, শুনুন; ভালো লাগলে গ্রহণ করবেন, না লাগলে আমরা আপনাকে আর বিরক্ত করব না। উসাইদ বসেন, শোনেন, এবং ওঠার আগেই গোসল করে নামাজ পড়েন।",
          },
        ],
      },
      {
        h: { en: "A City Enters Islam", bn: "একটি শহরের ইসলাম গ্রহণ" },
        p: [
          {
            en: "Sa'd ibn Mu'adh, the chief of Banu Abd al-Ashhal, came next, angry and armed, and heard the same offer and the same words. He accepted, went back to his clan and asked them what they thought of his standing among them. They said he was their best. He told them that their men and women were forbidden to speak to him until they believed in Allah and His Messenger. By evening the whole clan had entered Islam.",
            bn: "এরপর আসেন বনু আবদুল আশহালের নেতা সাদ ইবনে মুআয—ক্রুদ্ধ, অস্ত্র হাতে; তিনিও একই প্রস্তাব আর একই কথা শোনেন। তিনি ইসলাম গ্রহণ করেন, নিজ গোত্রে ফিরে গিয়ে জিজ্ঞাসা করেন, তাদের কাছে তাঁর মর্যাদা কেমন। তারা বলে, আপনি আমাদের মধ্যে শ্রেষ্ঠ। তখন তিনি ঘোষণা দেন, তোমাদের কোনো নারী-পুরুষের সঙ্গে আমার কথা বলা নিষিদ্ধ, যতক্ষণ না তোমরা আল্লাহ ও তাঁর রাসূলে ঈমান আনো। সন্ধ্যার মধ্যেই গোটা গোত্র ইসলামে প্রবেশ করে।",
          },
          {
            en: "The following year Musab brought more than seventy men and women of Madinah to the Prophet ﷺ at Aqaba, and they gave the pledge that made the hijrah possible. A city that had been at war with itself for generations had been prepared to receive the Prophet ﷺ, and it had been done by a young man with no army, no wealth and no tribal claim on anyone there.",
            bn: "পরের বছর মুসআব মদিনার সত্তরেরও বেশি নারী-পুরুষকে আকাবায় নবীজি ﷺ-এর কাছে নিয়ে আসেন, আর তাঁরা সেই শপথ করেন যা হিজরতকে সম্ভব করে তোলে। প্রজন্মের পর প্রজন্ম ধরে গৃহযুদ্ধে জর্জরিত একটি শহর নবীজি ﷺ-কে বরণ করার জন্য প্রস্তুত হয়ে গেল—আর তা করলেন এমন এক যুবক, যাঁর সেখানে কোনো সেনাবাহিনী ছিল না, সম্পদ ছিল না, কারও ওপর গোত্রীয় দাবিও ছিল না।",
          },
        ],
      },
      {
        h: { en: "The Banner at Uhud", bn: "উহুদের পতাকা" },
        p: [
          {
            en: "He carried the banner of the Muslims at Badr and again at Uhud. When the line broke at Uhud and the enemy cavalry drove in towards the Prophet ﷺ, Musab stood with the banner where he was. His right hand was struck off and he took the banner in his left. That hand was struck off too, and he held the banner against his chest with his arms until he was killed.",
            bn: "বদরে এবং আবার উহুদে তিনি মুসলিমদের পতাকা বহন করেন। উহুদে কাতার ভেঙে যাওয়ার পর শত্রু অশ্বারোহীরা যখন নবীজি ﷺ-এর দিকে ধেয়ে আসে, মুসআব পতাকা হাতে নিজের জায়গাতেই দাঁড়িয়ে থাকেন। তাঁর ডান হাত কেটে ফেলা হলে তিনি বাঁ হাতে পতাকা নেন। সেই হাতও কেটে ফেলা হলে তিনি দুই বাহু দিয়ে পতাকা বুকে চেপে ধরে রাখেন—যতক্ষণ না তাঁকে হত্যা করা হয়।",
          },
          {
            en: "The man who killed him believed he had killed the Prophet ﷺ, and rode off to tell the Quraysh so. The resemblance mattered: Musab had put himself in the place where the banner and the Prophet's ﷺ safety were the same target. The false report of the Prophet's ﷺ death that shook the Muslim army that day came from the body of Musab lying on the field.",
            bn: "যে ব্যক্তি তাঁকে হত্যা করে, সে ভেবেছিল সে নবীজি ﷺ-কেই হত্যা করেছে, আর তা জানাতেই কুরাইশদের দিকে ছুটে যায়। এই সাদৃশ্যটি গুরুত্বপূর্ণ: মুসআব নিজেকে এমন জায়গায় দাঁড় করিয়েছিলেন যেখানে পতাকা আর নবীজি ﷺ-এর নিরাপত্তা একই লক্ষ্যবস্তু হয়ে উঠেছিল। সেদিন মুসলিম বাহিনীকে কাঁপিয়ে দেওয়া নবীজির শাহাদাতের সেই মিথ্যা সংবাদ ছড়িয়েছিল ময়দানে পড়ে থাকা মুসআবের দেহ থেকেই।",
          },
        ],
      },
      {
        h: { en: "A Cloak Too Short", bn: "যে চাদর ছোট পড়েছিল" },
        p: [
          {
            en: "Khabbab ibn al-Aratt (RA) narrated that Musab was killed at Uhud and left nothing behind but a single striped cloak. When they covered his head with it, his feet were exposed, and when they covered his feet, his head was exposed. The Prophet ﷺ told them to cover his head with it and to put idhkhir grass over his feet. The man whose clothing had been the talk of Makkah was buried in a garment that would not reach.",
            bn: "খাব্বাব ইবনুল আরাত (রাঃ) বর্ণনা করেছেন, মুসআব উহুদে শহীদ হন এবং একটি ডোরাকাটা চাদর ছাড়া কিছুই রেখে যাননি। সেটি দিয়ে মাথা ঢাকলে পা বেরিয়ে পড়ত, আর পা ঢাকলে বেরিয়ে পড়ত মাথা। নবীজি ﷺ নির্দেশ দেন, চাদর দিয়ে মাথা ঢেকে দাও আর পায়ের ওপর ইযখির ঘাস দিয়ে দাও। যাঁর পোশাক ছিল গোটা মক্কার আলোচনার বিষয়, তাঁকে দাফন করা হলো এমন কাপড়ে যা তাঁর দেহটুকুও ঢাকতে পারেনি।",
          },
          {
            en: "In the same report the companions recite 33:23, that among the believers are men true to the covenant they made with Allah, some who have fulfilled their vow and some still waiting. Years later, when a rich table was set before Abdur-Rahman ibn Awf (RA), he wept and could not eat, saying Musab was better than him and had died with nothing. That is the shadow Musab cast over the generation that outlived him.",
            bn: "একই বর্ণনায় সাহাবিগণ 33:23 আয়াতটি পাঠ করেন—মুমিনদের মধ্যে এমন লোক আছে যারা আল্লাহর সঙ্গে করা অঙ্গীকারে সত্য প্রমাণিত হয়েছে; কেউ তার প্রতিশ্রুতি পূর্ণ করেছে, কেউ এখনো অপেক্ষায়। বহু বছর পর আবদুর রহমান ইবনে আওফ (রাঃ)-এর সামনে সমৃদ্ধ খাবার রাখা হলে তিনি কেঁদে ফেলেন, খেতে পারেন না, আর বলেন—মুসআব আমার চেয়ে উত্তম ছিলেন, অথচ তিনি কিছুই না রেখে চলে গেছেন। তাঁর পরে বেঁচে থাকা প্রজন্মের ওপর মুসআব এমনই ছায়া ফেলে গিয়েছিলেন।",
          },
        ],
      },
    ],
  },
  jafar_ibn_abi_talib: {
    sections: [
      {
        h: { en: "A Son of Abu Talib", bn: "আবু তালিবের এক পুত্র" },
        p: [
          {
            en: "Jafar ibn Abi Talib (RA) was the son of the Prophet's ﷺ uncle and the elder brother of Ali (RA). When drought and debt pressed Abu Talib hard, the family was divided among relatives who could carry them, and Jafar was taken into the house of al-Abbas. The Prophet ﷺ himself said to him that he resembled him in his appearance and in his character.",
            bn: "জাফর ইবনে আবি তালিব (রাঃ) ছিলেন নবীজি ﷺ-এর চাচার পুত্র এবং আলী (রাঃ)-এর বড় ভাই। দুর্ভিক্ষ ও ঋণের চাপে আবু তালিব যখন কঠিন সময়ে পড়েন, তখন পরিবারের সদস্যদের সামর্থ্যবান আত্মীয়দের মধ্যে ভাগ করে দেওয়া হয়, আর জাফরকে নেন আব্বাস। নবীজি ﷺ নিজেই তাঁকে বলেছিলেন, চেহারায় ও স্বভাবে তুমি আমারই সদৃশ হয়েছ।",
          },
          {
            en: "He accepted Islam early, together with his wife Asma bint Umays (RA), while Quraysh still thought the matter could be crushed by pressure on individual families. Being of Banu Hashim gave him a measure of shelter, but it did not spare the weaker Muslims around him, and it is the fate of those weaker believers that explains what he did next.",
            bn: "স্ত্রী আসমা বিনতে উমাইস (রাঃ)-সহ তিনি আগেভাগেই ইসলাম গ্রহণ করেন, তখনো কুরাইশ ভাবত পরিবারভিত্তিক চাপ দিয়েই বিষয়টি দমিয়ে দেওয়া যাবে। বনু হাশিমের সদস্য হওয়ায় তিনি কিছুটা নিরাপত্তা পেয়েছিলেন, কিন্তু তা তাঁর চারপাশের দুর্বল মুসলিমদের রক্ষা করেনি; আর সেই দুর্বল ঈমানদারদের পরিণতিই ব্যাখ্যা করে তিনি এরপর কী করেছিলেন।",
          },
        ],
      },
      {
        h: { en: "Across the Sea", bn: "সমুদ্র পেরিয়ে" },
        p: [
          {
            en: "The Prophet ﷺ told the persecuted believers to go to Abyssinia, to a king in whose land no one was wronged. Jafar led the larger group that crossed, and he became their spokesman and their responsibility. They had left tribe, trade and home, and were living as refugees in a Christian kingdom whose language and law they did not know.",
            bn: "নবীজি ﷺ নির্যাতিত ঈমানদারদের আবিসিনিয়ায় যেতে বলেন—এমন এক বাদশাহর দেশে, যাঁর রাজ্যে কারও ওপর জুলুম হয় না। যে বড় দলটি সমুদ্র পাড়ি দেয় তার নেতৃত্বে ছিলেন জাফর; তিনিই হন তাঁদের মুখপাত্র ও তাঁদের দায়িত্বশীল। তাঁরা গোত্র, ব্যবসা ও ঘর ছেড়ে এসে এক খ্রিস্টান রাজ্যে উদ্বাস্তু হিসেবে বাস করছিলেন, যার ভাষা ও আইন তাঁদের জানা ছিল না।",
          },
          {
            en: "Quraysh would not leave them there. They sent two envoys with valuable gifts for the Najashi and his commanders, arguing that these were young fools who had abandoned the religion of their people and should be handed back. The generals were persuaded. The king refused to surrender anyone without first hearing them, and summoned the Muslims to his court.",
            bn: "কুরাইশ তাঁদের সেখানে ছেড়ে দিতে রাজি ছিল না। তারা মূল্যবান উপহারসহ দুজন দূত পাঠায় নাজ্জাশি ও তাঁর সেনাপতিদের কাছে, যুক্তি দেখায় যে এরা নির্বোধ কিছু তরুণ, যারা নিজেদের সম্প্রদায়ের ধর্ম ছেড়েছে, তাই এদের ফিরিয়ে দেওয়া হোক। সেনাপতিরা রাজি হয়ে যান। কিন্তু বাদশাহ তাঁদের কথা না শুনে কাউকে হস্তান্তর করতে অস্বীকার করেন এবং মুসলিমদের দরবারে ডেকে পাঠান।",
          },
        ],
      },
      {
        h: { en: "The Speech Before the King", bn: "বাদশাহর সামনে সেই ভাষণ" },
        p: [
          {
            en: "Jafar spoke for them. He said that they had been a people of ignorance who worshipped idols, ate carrion, committed shameful deeds, cut off their relatives and mistreated their neighbours, the strong among them devouring the weak; until Allah sent them a Messenger from among themselves whose lineage, truthfulness, trustworthiness and chastity they knew. He called them to worship Allah alone, to speak truth, to keep trusts, to join family ties and to leave what is forbidden.",
            bn: "তাঁদের পক্ষে কথা বলেন জাফর। তিনি বলেন, আমরা ছিলাম মূর্খতার এক জাতি—মূর্তিপূজা করতাম, মৃত পশু খেতাম, অশ্লীল কাজ করতাম, আত্মীয়তা ছিন্ন করতাম, প্রতিবেশীর সঙ্গে খারাপ ব্যবহার করতাম, আর আমাদের সবল দুর্বলকে গ্রাস করত; এরপর আল্লাহ আমাদের মধ্য থেকেই একজন রাসূল পাঠালেন, যাঁর বংশ, সত্যবাদিতা, আমানতদারি ও পবিত্রতা আমাদের জানা ছিল। তিনি আমাদের ডাকলেন এক আল্লাহর ইবাদতের দিকে, সত্য বলার, আমানত রক্ষার, আত্মীয়তা বজায় রাখার এবং নিষিদ্ধ কাজ ছাড়ার দিকে।",
          },
          {
            en: "The Najashi asked whether he had anything of what had been revealed. Jafar recited from Surah Maryam, the passage from 19:16-33 in which Maryam withdraws from her people, the child is given to her, and the infant Isa (AS) speaks from the cradle declaring himself a servant of Allah given the Book and made a prophet. The king wept until his beard was wet, and his bishops wept with him.",
            bn: "নাজ্জাশি জিজ্ঞাসা করেন, যা নাযিল হয়েছে তার কিছু কি তোমার কাছে আছে? জাফর সূরা মারইয়াম থেকে তিলাওয়াত করেন—19:16-33 আয়াতগুলো, যেখানে মারইয়াম নিজ সম্প্রদায় থেকে সরে যান, তাঁকে সন্তান দান করা হয়, আর দোলনা থেকে শিশু ঈসা (আঃ) কথা বলে ঘোষণা করেন যে তিনি আল্লাহর বান্দা, তাঁকে কিতাব দেওয়া হয়েছে ও নবী করা হয়েছে। বাদশাহ কাঁদতে থাকেন যতক্ষণ না তাঁর দাড়ি ভিজে যায়, আর তাঁর সঙ্গে কাঁদেন তাঁর ধর্মযাজকেরাও।",
          },
        ],
      },
      {
        h: { en: "A Line on the Ground", bn: "মাটিতে আঁকা এক রেখা" },
        p: [
          {
            en: "The Najashi said that what Jafar had brought and what Isa (AS) had brought came from one lamp. He returned the gifts of Quraysh and refused to hand over a single Muslim. Asked about Isa (AS) directly, Jafar gave the answer of the Quran without softening it: a servant of Allah, His Messenger, His word and a spirit from Him, cast into Maryam. The king drew a line on the ground and said the difference between them did not exceed that line.",
            bn: "নাজ্জাশি বলেন, জাফর যা নিয়ে এসেছেন আর ঈসা (আঃ) যা নিয়ে এসেছেন—দুটিই একই প্রদীপ থেকে আসা। তিনি কুরাইশের উপহার ফিরিয়ে দেন এবং একজন মুসলিমকেও হস্তান্তর করতে অস্বীকার করেন। ঈসা (আঃ) সম্পর্কে সরাসরি জিজ্ঞাসা করা হলে জাফর কুরআনের জবাবই দেন, কোনো নরম করা ছাড়াই: তিনি আল্লাহর বান্দা, তাঁর রাসূল, তাঁর কালিমা ও তাঁর পক্ষ থেকে এক রূহ, যা মারইয়ামের প্রতি অর্পিত হয়েছিল। বাদশাহ মাটিতে একটি রেখা টেনে বলেন, আমাদের দুইয়ের পার্থক্য এই রেখাটুকুর বেশি নয়।",
          },
          {
            en: "The Quran describes such hearts in 5:82-83: nearest in affection to the believers are those who say we are Christians, because among them are priests and monks and they are not arrogant, and when they hear what was revealed to the Messenger you see their eyes overflow with tears from the truth they recognise. When the Najashi later died, the Prophet ﷺ prayed the funeral prayer for him in Madinah though his body was in another land.",
            bn: "এমন হৃদয়ের বর্ণনা কুরআনে এসেছে 5:82-83 আয়াতে: বিশ্বাসীদের প্রতি ভালোবাসায় নিকটতম তারাই, যারা বলে আমরা খ্রিস্টান—কারণ তাদের মধ্যে আছে পণ্ডিত ও সংসারবিরাগী, আর তারা অহংকার করে না; আর রাসূলের প্রতি যা নাযিল হয়েছে তা শুনলে আপনি দেখবেন, চেনা সত্যের কারণে তাদের চোখ অশ্রুতে উপচে পড়ছে। নাজ্জাশি পরে ইন্তেকাল করলে নবীজি ﷺ মদিনায় তাঁর গায়েবানা জানাজা আদায় করেন, যদিও তাঁর দেহ ছিল অন্য দেশে।",
          },
        ],
      },
      {
        h: { en: "Father of the Poor", bn: "দরিদ্রদের অভিভাবক" },
        p: [
          {
            en: "The Muslims stayed in Abyssinia for years, and Jafar's children were born there. He returned only after the conquest of Khaybar, and the Prophet ﷺ met him with an embrace and said he did not know which of the two he was more delighted by, the conquest of Khaybar or the coming of Jafar. He had been away for the whole of the Madinan struggle, and he was welcomed as if he had never left.",
            bn: "মুসলিমরা বছরের পর বছর আবিসিনিয়ায় থেকে যান, আর জাফরের সন্তানরা সেখানেই জন্ম নেয়। তিনি ফিরে আসেন খায়বার বিজয়ের পর; নবীজি ﷺ তাঁকে জড়িয়ে ধরে বলেন, আমি জানি না কোনটিতে আমি বেশি আনন্দিত—খায়বার বিজয়ে, না জাফরের আগমনে। মদিনার গোটা সংগ্রামকালেই তিনি দূরে ছিলেন, তবু তাঁকে বরণ করা হলো যেন তিনি কখনো দূরে যাননি।",
          },
          {
            en: "Abu Hurayrah (RA), who lived in poverty himself in those years, said that the best of people towards the poor was Jafar ibn Abi Talib. He would take them to his house and feed them whatever he had, and if there was nothing, he would bring out an empty vessel of butter for them to split open and lick clean. They called him the father of the poor.",
            bn: "আবু হুরায়রা (রাঃ), যিনি নিজেই সেই বছরগুলোতে দারিদ্র্যে কাটিয়েছেন, বলেছেন—দরিদ্রদের প্রতি সবচেয়ে উত্তম ছিলেন জাফর ইবনে আবি তালিব। তিনি তাঁদের নিজের ঘরে নিয়ে যেতেন এবং যা থাকত তা-ই খাওয়াতেন; কিছু না থাকলে ঘিয়ের খালি পাত্রটিই বের করে দিতেন, যাতে তাঁরা তা ভেঙে ভেতরটা চেটে নিতে পারেন। মানুষ তাঁকে ডাকত দরিদ্রদের অভিভাবক বলে।",
          },
        ],
      },
      {
        h: { en: "Mu'tah and Two Wings", bn: "মুতা ও দুটি ডানা" },
        p: [
          {
            en: "At Mu'tah the Prophet ﷺ appointed Zayd ibn Harithah (RA) to command, and said that if Zayd fell then Jafar, and if Jafar fell then Abdullah ibn Rawahah (RA). When Zayd was killed Jafar took the banner. He dismounted and hamstrung his own horse so that he could not be tempted to withdraw on it, and fought on foot until his right hand was cut off, then his left, and then he was killed.",
            bn: "মুতায় নবীজি ﷺ সেনাপতি নিযুক্ত করেন যায়েদ ইবনে হারিসা (রাঃ)-কে এবং বলেন, যায়েদ শহীদ হলে জাফর, আর জাফর শহীদ হলে আবদুল্লাহ ইবনে রাওয়াহা (রাঃ)। যায়েদ শহীদ হলে জাফর পতাকা তুলে নেন। তিনি ঘোড়া থেকে নেমে নিজ হাতেই ঘোড়াটির পায়ের রগ কেটে দেন, যাতে তাতে চড়ে পিছু হটার প্রলোভন না থাকে; এরপর পায়ে হেঁটেই লড়েন—যতক্ষণ না তাঁর ডান হাত কেটে যায়, তারপর বাঁ হাত, আর তারপর তিনি শহীদ হন।",
          },
          {
            en: "Ibn Umar (RA) said they counted fifty wounds on his body, and not one of them in his back. The Prophet ﷺ said that Allah had given him two wings in place of his arms, with which he flies in Paradise, and he is remembered as at-Tayyar, the one who flies. He also told the household to prepare food for Jafar's family, because something had come upon them that would occupy them. The Quran's word on such men stands in 3:169: do not think them dead; they are alive with their Lord.",
            bn: "ইবনে উমর (রাঃ) বলেছেন, তাঁরা তাঁর দেহে পঞ্চাশটি ক্ষত গুনেছেন, আর তার একটিও পিঠে ছিল না। নবীজি ﷺ জানান, আল্লাহ তাঁর দুই হাতের বদলে তাঁকে দুটি ডানা দিয়েছেন, যা দিয়ে তিনি জান্নাতে উড়ে বেড়ান; তাই তিনি স্মরণীয় 'আত-তাইয়ার' নামে। তিনি পরিবারকে নির্দেশ দেন জাফরের ঘরের জন্য খাবার তৈরি করতে, কারণ তাঁদের ওপর এমন কিছু নেমে এসেছে যা তাঁদের ব্যস্ত রাখবে। এমন মানুষদের সম্পর্কে কুরআনের কথা 3:169-এ—তাদের মৃত মনে করো না; তারা তাদের প্রভুর কাছে জীবিত।",
          },
        ],
      },
    ],
  },
  zayd_ibn_harithah: {
    sections: [
      {
        h: { en: "Taken From His People", bn: "স্বজনদের কাছ থেকে ছিনিয়ে নেওয়া" },
        p: [
          {
            en: "Zayd ibn Harithah (RA) was born to a family of Banu Kalb in the north of Arabia. As a boy he travelled with his mother to visit her people, and raiders took him on the road. He was carried to the market at Ukaz and sold, and he passed through hands until he reached the household of Khadijah (RA), who gave him to the Prophet ﷺ. His father searched for him for years and did not know whether he was alive.",
            bn: "যায়েদ ইবনে হারিসা (রাঃ)-এর জন্ম আরবের উত্তরাঞ্চলে বনু কালব গোত্রের এক পরিবারে। বালক বয়সে তিনি মায়ের সঙ্গে নানার বাড়ি যাচ্ছিলেন, পথেই লুটেরারা তাঁকে ধরে নিয়ে যায়। তাঁকে উকাযের বাজারে নিয়ে বিক্রি করা হয়, আর হাতবদল হতে হতে তিনি পৌঁছান খাদিজা (রাঃ)-এর গৃহে; খাদিজা তাঁকে নবীজি ﷺ-কে দিয়ে দেন। তাঁর পিতা বছরের পর বছর তাঁকে খুঁজেছেন, জানতেই পারেননি ছেলে বেঁচে আছে কি না।",
          },
          {
            en: "This was an ordinary story in that world. Children disappeared into slavery and families grieved without recourse, and no one expected the ending to be anything else. What makes Zayd's life remarkable is not that he was freed, but what he chose to do with his freedom when it was finally offered to him in public, with witnesses, and with his own father standing there.",
            bn: "সেই যুগে এটি ছিল খুব সাধারণ এক গল্প। শিশুরা দাসত্বের ভেতর হারিয়ে যেত, পরিবার শোক করত কিন্তু কিছুই করার থাকত না, আর কেউ এর অন্য কোনো পরিণতির আশাও করত না। যায়েদের জীবনকে অসাধারণ করেছে এটা নয় যে তিনি মুক্তি পেয়েছিলেন, বরং এটাই যে—যখন সাক্ষীদের সামনে, প্রকাশ্যে, নিজের পিতাকে উপস্থিত রেখে তাঁকে মুক্তির প্রস্তাব দেওয়া হলো, তখন তিনি কী বেছে নিয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "The Choice He Made", bn: "তিনি যে সিদ্ধান্ত নিলেন" },
        p: [
          {
            en: "Pilgrims from his tribe recognised him in Makkah and carried word home. His father and uncle came with ransom money to buy him back. The Prophet ﷺ told them that Zayd could go with them freely and without payment if he wished, but that they should let the young man choose for himself. They agreed, certain of the answer.",
            bn: "তাঁর গোত্রের কিছু হাজি মক্কায় তাঁকে চিনে ফেলে এবং খবর পৌঁছে দেয় বাড়িতে। তাঁর পিতা ও চাচা মুক্তিপণের অর্থ নিয়ে তাঁকে ফিরিয়ে নিতে আসেন। নবীজি ﷺ তাঁদের বলেন, যায়েদ চাইলে কোনো অর্থ ছাড়াই স্বাধীনভাবে তাঁদের সঙ্গে যেতে পারে; তবে সিদ্ধান্তটি যেন যুবকটিকেই নিতে দেওয়া হয়। তাঁরা রাজি হন—উত্তর কী হবে, সে বিষয়ে তাঁরা নিশ্চিত ছিলেন।",
          },
          {
            en: "Zayd chose to stay. He told his father that he had seen from this man something that would not let him prefer anyone to him, and that he would not leave him for the whole world. The Prophet ﷺ then took him out to the Hijr beside the Ka'bah and declared before Quraysh that Zayd was his son, that they would inherit from one another. His father went home satisfied, and the freed boy became a member of the household by declaration.",
            bn: "যায়েদ থেকে যাওয়াই বেছে নেন। তিনি পিতাকে বলেন, এই মানুষটির কাছ থেকে আমি এমন কিছু দেখেছি যে তাঁর ওপরে আর কাউকে আমি প্রাধান্য দিতে পারি না; গোটা দুনিয়ার বিনিময়েও আমি তাঁকে ছাড়ব না। এরপর নবীজি ﷺ তাঁকে কাবার পাশে হিজরে নিয়ে গিয়ে কুরাইশের সামনে ঘোষণা দেন যে যায়েদ তাঁর পুত্র, তাঁরা একে অপরের উত্তরাধিকারী হবেন। তাঁর পিতা সন্তুষ্ট হয়ে ফিরে যান, আর মুক্ত হওয়া সেই বালক ঘোষণার মাধ্যমে ঘরের সদস্য হয়ে যান।",
          },
        ],
      },
      {
        h: { en: "Among the First", bn: "প্রথমদের একজন" },
        p: [
          {
            en: "When revelation came, Zayd was inside the house where it came, and he was among the earliest to believe. He was there through the years of ridicule and boycott. When the Prophet ﷺ went to Ta'if seeking a hearing and was driven out with stones by the town's children, it was Zayd who was with him on that road and who put himself in the way of the stones.",
            bn: "ওহি যখন নাযিল হয়, যায়েদ ছিলেন সেই ঘরেই যেখানে তা নাযিল হয়েছিল; আর তিনি ছিলেন প্রথম ঈমান আনয়নকারীদের একজন। বিদ্রূপ ও বয়কটের বছরগুলোতেও তিনি পাশেই ছিলেন। নবীজি ﷺ যখন কথা শোনানোর আশায় তায়েফে যান এবং শহরের ছেলেরা পাথর মেরে তাঁকে তাড়িয়ে দেয়, সেই পথে তাঁর সঙ্গে ছিলেন যায়েদ—আর তিনিই নিজেকে পাথরের সামনে বাধা হিসেবে দাঁড় করিয়েছিলেন।",
          },
          {
            en: "People called him Zayd ibn Muhammad. It was the natural way to speak of a man declared a son in front of the city, and it was how the companions themselves referred to him for years. Nobody objected, because adoption in that form was the custom of all Arabia and carried the full weight of lineage with it.",
            bn: "লোকে তাঁকে ডাকত 'যায়েদ ইবনে মুহাম্মদ' নামে। যাঁকে গোটা শহরের সামনে পুত্র বলে ঘোষণা করা হয়েছে, তাঁর ক্ষেত্রে এটাই ছিল স্বাভাবিক সম্বোধন; সাহাবিগণও বছরের পর বছর তাঁকে এভাবেই ডেকেছেন। কেউ আপত্তি করেনি, কারণ এই ধরনের দত্তকগ্রহণ গোটা আরবেরই প্রচলিত রীতি ছিল এবং তা বংশপরিচয়ের পূর্ণ মর্যাদা বহন করত।",
          },
        ],
      },
      {
        h: { en: "Call Them By Their Fathers", bn: "তাদের পিতৃপরিচয়েই ডাকো" },
        p: [
          {
            en: "Then the Quran ended that custom. In 33:4 Allah states that He has not made adopted sons into real sons, that this is only a saying of your mouths; and 33:5 commands that they be called after their fathers, as that is more just with Allah, while making clear that if their fathers are unknown they remain your brothers in faith. Zayd was called Zayd ibn Harithah again from that day.",
            bn: "এরপর কুরআন সেই রীতির অবসান ঘটায়। 33:4 আয়াতে আল্লাহ জানান, তিনি দত্তক পুত্রদের প্রকৃত পুত্র বানাননি; এটি কেবল তোমাদের মুখের কথা। আর 33:5 আয়াতে আদেশ করা হয়, তাদের পিতৃপরিচয়েই ডাকো, কারণ তা আল্লাহর কাছে অধিক ন্যায়সংগত; সঙ্গে এটাও স্পষ্ট করা হয় যে পিতৃপরিচয় জানা না থাকলে তারা তোমাদের দ্বীনি ভাই। সেদিন থেকে যায়েদকে আবার ডাকা হয় 'যায়েদ ইবনে হারিসা' নামে।",
          },
          {
            en: "The change was not a demotion. It restored to Zayd a real lineage and a real father, and it protected the rights of every orphan and foundling after him by separating care from the fiction of descent. But it left a legal question that had to be answered in practice: if an adopted son is not a son, then his former wife is not a daughter-in-law, and the taboo attached to her had no basis in the law of Allah.",
            bn: "এই পরিবর্তন কোনো অবনমন ছিল না। এটি যায়েদকে ফিরিয়ে দেয় তাঁর প্রকৃত বংশ ও প্রকৃত পিতা, আর প্রতিপালনকে বংশপরিচয়ের কল্পকাহিনি থেকে আলাদা করে পরবর্তী প্রতিটি এতিম ও কুড়িয়ে পাওয়া শিশুর অধিকার রক্ষা করে। তবে এতে একটি আইনি প্রশ্ন থেকে যায়, যার উত্তর বাস্তবে দিতে হতো: দত্তক পুত্র যদি প্রকৃত পুত্র না হয়, তবে তার সাবেক স্ত্রীও পুত্রবধূ নয়—আর তাকে ঘিরে থাকা নিষেধের ধারণার কোনো ভিত্তি আল্লাহর বিধানে নেই।",
          },
        ],
      },
      {
        h: { en: "The Verse That Names Him", bn: "যে আয়াতে তাঁর নাম" },
        p: [
          {
            en: "The Prophet ﷺ had married Zayd to Zaynab bint Jahsh (RA), his own cousin, partly to show that a freed man and a woman of noble Quraysh were equal in Islam. The marriage did not go well. Zayd came more than once wanting to divorce her, and each time the Prophet ﷺ told him to keep his wife and fear Allah, though Allah had already made known to him that Zaynab would become his own wife.",
            bn: "নবীজি ﷺ যায়েদকে বিয়ে দিয়েছিলেন নিজের ফুফাতো বোন যায়নাব বিনতে জাহশ (রাঃ)-এর সঙ্গে, আংশিকভাবে এটি দেখাতেই যে ইসলামে একজন মুক্ত দাস আর কুরাইশের অভিজাত এক নারী সমান। বিয়েটি সুখের হয়নি। যায়েদ একাধিকবার এসে বিচ্ছেদের ইচ্ছা প্রকাশ করেন, আর প্রতিবারই নবীজি ﷺ তাঁকে বলেন—স্ত্রীকে ধরে রাখো এবং আল্লাহকে ভয় করো; যদিও আল্লাহ তখনই তাঁকে জানিয়ে দিয়েছিলেন যে যায়নাব পরে তাঁরই স্ত্রী হবেন।",
          },
          {
            en: "The divorce came, and 33:37 was revealed. It censures the Prophet ﷺ for keeping that knowledge to himself out of concern for what people would say, and states that when Zayd had no further need of her, Allah married her to him so that the believers would have no difficulty over the former wives of their adopted sons. The verse names Zayd, and he is the only companion named in the Quran at all.",
            bn: "শেষপর্যন্ত বিচ্ছেদ ঘটে, আর নাযিল হয় 33:37। এতে লোকে কী বলবে সেই ভয়ে নবীজি ﷺ-এর ওই জ্ঞান নিজের মধ্যে গোপন রাখার বিষয়ে তিরস্কার করা হয় এবং বলা হয়, যায়েদ যখন তার কাছ থেকে প্রয়োজন মিটিয়ে নিল, তখন আল্লাহ তাকে আপনার সঙ্গে বিবাহবন্ধনে দিলেন—যাতে দত্তক পুত্রদের সাবেক স্ত্রীদের ব্যাপারে মুমিনদের কোনো সংকোচ না থাকে। আয়াতটিতে যায়েদের নাম এসেছে, আর গোটা কুরআনে তিনিই একমাত্র সাহাবি যাঁর নাম উল্লেখ করা হয়েছে।",
          },
          {
            en: "Aisha (RA) said that if the Prophet ﷺ had concealed anything of what was revealed to him, he would have concealed this verse. He did not; it stands in the Book, a public correction of the one who delivered it, which is itself an argument for the truth of what he brought. The passage closes in 33:40 with the declaration that Muhammad ﷺ is not the father of any of your men, but the Messenger of Allah and the seal of the prophets.",
            bn: "আয়েশা (রাঃ) বলেছেন, নবীজি ﷺ-এর প্রতি যা নাযিল হয়েছে তার কিছু যদি তিনি গোপন করতেন, তবে এই আয়াতটিই গোপন করতেন। তিনি করেননি; আয়াতটি কিতাবেই রয়ে গেছে—যিনি তা পৌঁছে দিয়েছেন তাঁর প্রতিই প্রকাশ্য এক সংশোধন, যা নিজেই তাঁর আনা বাণীর সত্যতার এক প্রমাণ। অনুচ্ছেদটি শেষ হয় 33:40 আয়াতে—মুহাম্মদ ﷺ তোমাদের কোনো পুরুষের পিতা নন, বরং আল্লাহর রাসূল ও নবীদের সমাপ্তিকারী।",
          },
        ],
      },
      {
        h: { en: "Commander at Mu'tah", bn: "মুতার সেনাপতি" },
        p: [
          {
            en: "Zayd led more expeditions than any other companion in the Prophet's ﷺ lifetime. Aisha (RA) said that the Prophet ﷺ never sent him out in an army without putting him in command of it. His son Usamah (RA) grew up equally beloved, and would himself be given command of an army while still very young.",
            bn: "নবীজি ﷺ-এর জীবদ্দশায় অন্য যেকোনো সাহাবির চেয়ে বেশি অভিযানে নেতৃত্ব দিয়েছেন যায়েদ। আয়েশা (রাঃ) বলেছেন, নবীজি ﷺ তাঁকে কোনো বাহিনীতে পাঠিয়ে থাকলে সেখানে সেনাপতি না করে পাঠাননি। তাঁর ছেলে উসামা (রাঃ)ও একইভাবে প্রিয়পাত্র হয়ে বড় হন, আর অল্প বয়সেই একটি বাহিনীর নেতৃত্ব পান।",
          },
          {
            en: "At Mu'tah in the year 8 he was placed over an army that included Jafar ibn Abi Talib (RA), a cousin of the Prophet ﷺ, and Abdullah ibn Rawahah (RA), a poet and leader of the Ansar. Nobody disputed it. Zayd carried the banner into an impossible engagement and was killed first of the three. In Madinah the Prophet ﷺ announced the deaths from the pulpit with tears in his eyes. His life is the plainest commentary on 49:13, that the most honoured of you with Allah is the most God-fearing.",
            bn: "হিজরি ৮ সনে মুতায় তাঁকে এমন এক বাহিনীর সেনাপতি করা হয়, যেখানে ছিলেন নবীজি ﷺ-এর চাচাতো ভাই জাফর ইবনে আবি তালিব (রাঃ) এবং আনসার নেতা ও কবি আবদুল্লাহ ইবনে রাওয়াহা (রাঃ)। কেউ এ নিয়ে আপত্তি করেনি। যায়েদ এক অসম লড়াইয়ে পতাকা নিয়ে এগিয়ে যান এবং তিনজনের মধ্যে সবার আগে শহীদ হন। মদিনায় নবীজি ﷺ চোখে অশ্রু নিয়ে মিম্বার থেকে শাহাদাতের সংবাদ দেন। তাঁর জীবনই 49:13 আয়াতের সবচেয়ে সরল ব্যাখ্যা—তোমাদের মধ্যে আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি আল্লাহভীরু।",
          },
        ],
      },
    ],
  },
  ammar_ibn_yasir: {
    sections: [
      {
        h: { en: "A Family Without Protection", bn: "আশ্রয়হীন এক পরিবার" },
        p: [
          {
            en: "Ammar's father Yasir came up to Makkah from Yemen looking for a lost brother, stayed, and became a client of one of the men of Banu Makhzum. He married Sumayyah, and Ammar was born to them in a city where a man's safety depended entirely on the tribe that would avenge him. The family of Yasir had no such tribe. They were protected only by the goodwill of the household they were attached to.",
            bn: "আম্মারের পিতা ইয়াসির হারিয়ে যাওয়া এক ভাইয়ের খোঁজে ইয়েমেন থেকে মক্কায় আসেন, থেকে যান এবং বনু মাখযুমের এক ব্যক্তির আশ্রিত হন। তিনি সুমাইয়াকে বিয়ে করেন, আর এমন এক শহরে তাঁদের ঘরে আম্মারের জন্ম হয়—যেখানে মানুষের নিরাপত্তা পুরোপুরি নির্ভর করত সেই গোত্রের ওপর, যারা তার প্রতিশোধ নেবে। ইয়াসিরের পরিবারের এমন কোনো গোত্র ছিল না। যে ঘরের সঙ্গে তাঁরা যুক্ত ছিলেন, কেবল তাদের সদিচ্ছাই ছিল তাঁদের রক্ষাকবচ।",
          },
          {
            en: "When Islam came, that goodwill ended. Abdullah ibn Mas'ud (RA) said that seven people declared Islam openly in those first days, and two of them were of this one house: Ammar and his mother Sumayyah (RA). The chiefs of Quraysh could not touch a man of Banu Hashim without consequences. They could do whatever they liked to Yasir and his family.",
            bn: "ইসলাম আসার পর সেই সদিচ্ছার অবসান ঘটে। আবদুল্লাহ ইবনে মাসউদ (রাঃ) বলেছেন, শুরুর দিনগুলোতে সাতজন প্রকাশ্যে ইসলাম ঘোষণা করেছিলেন, আর তাঁদের দুজনই ছিলেন এই একটি ঘরের: আম্মার ও তাঁর মা সুমাইয়া (রাঃ)। কুরাইশ নেতারা বনু হাশিমের কোনো ব্যক্তিকে বিনা পরিণামে স্পর্শ করতে পারত না। কিন্তু ইয়াসির ও তাঁর পরিবারের সঙ্গে তারা যা খুশি তা-ই করতে পারত।",
          },
        ],
      },
      {
        h: { en: "Patience, Family of Yasir", bn: "ধৈর্য ধরো, ইয়াসিরের পরিবার" },
        p: [
          {
            en: "They were taken out into the open ground of Makkah in the heat of the day. Ammar was laid on the burning sand and iron was placed on him, and he was pushed under water until he could not breathe. The Prophet ﷺ passed them while this was being done and could do nothing to stop it. He said to them, patience, family of Yasir, for your appointed place is Paradise.",
            bn: "দিনের প্রখর উত্তাপে তাঁদের মক্কার খোলা প্রান্তরে নিয়ে যাওয়া হতো। আম্মারকে জ্বলন্ত বালুতে শুইয়ে তাঁর ওপর লোহা চাপিয়ে দেওয়া হতো, আর দম বন্ধ হয়ে আসা পর্যন্ত পানিতে চেপে ধরা হতো। এসব চলাকালে নবীজি ﷺ তাঁদের পাশ দিয়ে যান, কিন্তু তা থামানোর সাধ্য তাঁর ছিল না। তিনি তাঁদের বলেন—ধৈর্য ধরো, ইয়াসিরের পরিবার; তোমাদের নির্ধারিত ঠিকানা জান্নাত।",
          },
          {
            en: "Sumayyah refused to yield and was killed by Abu Jahl with a thrust of a spear, the first person to be martyred in Islam. Yasir died under the same treatment. Ammar was left alive, a young man who had watched both his parents killed for a religion that at that point had no state, no army and no worldly prospect of victory.",
            bn: "সুমাইয়া নতিস্বীকার করতে অস্বীকার করেন, আর আবু জাহলের বর্শার আঘাতে তিনি নিহত হন—ইসলামের ইতিহাসে প্রথম শহীদ। একই নির্যাতনে ইয়াসিরও শহীদ হন। বেঁচে থাকেন আম্মার—এমন এক তরুণ, যিনি নিজ চোখে দেখেছেন এমন এক দ্বীনের জন্য তাঁর পিতা-মাতা দুজনকেই হত্যা করা হলো, যে দ্বীনের তখনো কোনো রাষ্ট্র ছিল না, বাহিনী ছিল না, বিজয়ের কোনো পার্থিব সম্ভাবনাও ছিল না।",
          },
        ],
      },
      {
        h: { en: "Words Wrung Out By Force", bn: "জোর করে আদায় করা কথা" },
        p: [
          {
            en: "The torture continued on him until, at the end of his strength, he said what they demanded and spoke words of disbelief with his tongue in order to be released. He came to the Prophet ﷺ afterwards in pieces, weeping, certain that he had destroyed himself. The Prophet ﷺ asked him how he found his heart. He said he found it at rest, firm upon faith. The Prophet ﷺ told him that if they did it again, he should do the same again.",
            bn: "নির্যাতন তাঁর ওপর চলতেই থাকে; শেষপর্যন্ত শক্তি ফুরিয়ে গেলে মুক্তি পাওয়ার জন্য তিনি তাদের দাবিমতো মুখে কুফরি বাক্য উচ্চারণ করে ফেলেন। এরপর তিনি ভেঙে পড়া অবস্থায়, কাঁদতে কাঁদতে নবীজি ﷺ-এর কাছে আসেন—নিশ্চিত যে তিনি নিজেকে ধ্বংস করে ফেলেছেন। নবীজি ﷺ জিজ্ঞাসা করেন, তোমার হৃদয়কে কেমন পাচ্ছ? তিনি বলেন, হৃদয়কে পাচ্ছি প্রশান্ত, ঈমানে অবিচল। নবীজি ﷺ বলেন, তারা আবার এমন করলে তুমিও আবার তেমনই কোরো।",
          },
          {
            en: "Then came 16:106, which excludes from the ruling on disbelief the one who is compelled while his heart is content with faith, and reserves the wrath of Allah for the one who opens his breast to disbelief willingly. The verse gave the ummah a permanent principle. Allah judges what a man holds, not what has been forced out of him under unbearable pressure, and 16:110 goes on to promise that your Lord, to those who emigrated after being persecuted and then strove and were patient, is forgiving and merciful.",
            bn: "এরপর নাযিল হয় 16:106—যেখানে কুফরের বিধান থেকে সেই ব্যক্তিকে বাদ দেওয়া হয় যাকে বাধ্য করা হয়েছে অথচ তার হৃদয় ঈমানে প্রশান্ত; আর আল্লাহর ক্রোধ নির্ধারিত হয় তার জন্য, যে স্বেচ্ছায় কুফরের জন্য বুক খুলে দেয়। আয়াতটি উম্মাহকে একটি স্থায়ী নীতি দিয়েছে: আল্লাহ বিচার করেন মানুষ অন্তরে যা ধারণ করে তা দিয়ে, অসহনীয় চাপে জোর করে বের করে নেওয়া কথা দিয়ে নয়। আর 16:110 আয়াতে প্রতিশ্রুতি এসেছে—যারা নির্যাতিত হওয়ার পর হিজরত করেছে, এরপর সংগ্রাম করেছে ও ধৈর্য ধরেছে, তোমার প্রভু তাদের জন্য ক্ষমাশীল ও দয়াময়।",
          },
        ],
      },
      {
        h: { en: "Two Bricks at a Time", bn: "একসঙ্গে দুটি ইট" },
        p: [
          {
            en: "He emigrated to Madinah and worked on the building of the Prophet's ﷺ mosque. The others carried one brick at a time; Ammar carried two, one for himself and one for the Prophet ﷺ. The Prophet ﷺ brushed the dust from his head and said the words that would be remembered for the rest of Ammar's long life: that a transgressing party would kill him, that he would be calling them to Paradise while they called him to the Fire.",
            bn: "তিনি মদিনায় হিজরত করেন এবং নবীজি ﷺ-এর মসজিদ নির্মাণের কাজে যোগ দেন। অন্যরা একবারে একটি করে ইট বইছিলেন; আম্মার বইছিলেন দুটি—একটি নিজের জন্য, একটি নবীজি ﷺ-এর জন্য। নবীজি ﷺ তাঁর মাথা থেকে ধুলো ঝেড়ে দিয়ে সেই কথাগুলো বলেন, যা আম্মারের দীর্ঘ জীবনের বাকিটা সময় স্মরণ করা হবে—তোমাকে হত্যা করবে এক সীমালঙ্ঘনকারী দল; তুমি তাদের ডাকবে জান্নাতের দিকে আর তারা তোমাকে ডাকবে আগুনের দিকে।",
          },
          {
            en: "He was also the occasion of a permanent ruling in worship. Sent on an errand with Umar (RA), he became in need of a full bath and no water was available, so he rolled himself in the dust as best he understood. On returning he described it, and the Prophet ﷺ taught him that it was enough to strike the earth with the hands and wipe the face and the hands. Millions have prayed by that ruling since.",
            bn: "ইবাদতের একটি স্থায়ী বিধানের উপলক্ষও হয়েছিলেন তিনি। উমর (রাঃ)-এর সঙ্গে এক কাজে গিয়ে তাঁর গোসল ফরজ হয়ে যায়, অথচ পানি পাওয়া যাচ্ছিল না; তিনি নিজের বোঝা অনুযায়ী মাটিতে গড়াগড়ি দেন। ফিরে এসে ঘটনাটি বললে নবীজি ﷺ তাঁকে শিখিয়ে দেন যে হাত দুটি মাটিতে মেরে মুখমণ্ডল ও দুই হাত মাসেহ করাই যথেষ্ট। এরপর থেকে কোটি কোটি মানুষ এই বিধান অনুসারেই নামাজ পড়েছে।",
          },
        ],
      },
      {
        h: { en: "A Long Life of Service", bn: "সেবায় কাটানো দীর্ঘ জীবন" },
        p: [
          {
            en: "Ammar fought at Badr, at Uhud and in the campaigns that followed, and lived on into the age of the caliphs. Umar (RA) appointed him governor over Kufa, writing to its people that he was sending them one of the choice companions of Muhammad ﷺ. He held the office plainly, with no wealth taken from it, and he was removed from it later without complaint.",
            bn: "আম্মার বদর, উহুদ ও পরবর্তী অভিযানগুলোতে লড়েছেন এবং খলিফাদের যুগ পর্যন্ত বেঁচে ছিলেন। উমর (রাঃ) তাঁকে কুফার শাসক নিযুক্ত করেন এবং সেখানকার লোকদের লিখে পাঠান যে তিনি তাঁদের কাছে মুহাম্মদ ﷺ-এর নির্বাচিত সঙ্গীদের একজনকে পাঠাচ্ছেন। তিনি সাদাসিধেভাবেই দায়িত্ব পালন করেন, সেখান থেকে কোনো সম্পদ নেননি; পরে তাঁকে সেই দায়িত্ব থেকে অপসারণ করা হয়, আর তিনি কোনো অভিযোগ করেননি।",
          },
          {
            en: "He carried no bitterness from what had been done to his family, and he was known instead for blunt honesty and for a fierce dislike of flattery. Those who kept his company in Kufa and Madinah described a man in his old age who still lived as if the sands of Makkah were behind him and Paradise ahead of him, and who had no interest at all in the intervening comforts.",
            bn: "নিজের পরিবারের ওপর ঘটে যাওয়া নির্যাতনের কোনো তিক্ততা তিনি বয়ে বেড়াননি; বরং তিনি পরিচিত ছিলেন স্পষ্টভাষিতার জন্য এবং তোষামোদের প্রতি তীব্র অপছন্দের জন্য। কুফা ও মদিনায় যাঁরা তাঁর সঙ্গ পেয়েছেন, তাঁরা বর্ণনা করেছেন বার্ধক্যেও এমন এক মানুষকে, যিনি এমনভাবে জীবন কাটাতেন যেন মক্কার সেই বালু তাঁর পেছনে আর জান্নাত সামনে—আর মাঝখানের আরাম-আয়েশে তাঁর কোনো আগ্রহই ছিল না।",
          },
        ],
      },
      {
        h: { en: "Siffin, and Restraint", bn: "সিফফিন, এবং সংযম" },
        p: [
          {
            en: "In the year 37 after the hijrah, when the Muslims had fallen into civil war, Ammar went out with Ali (RA) at Siffin and was killed there at about ninety years of age. The men who were present knew the hadith, and it is reported that many on the field took the word of the Prophet ﷺ about the transgressing party to have come to pass. It caused great disquiet, as it was bound to.",
            bn: "হিজরি ৩৭ সালে, মুসলিমরা যখন গৃহযুদ্ধে জড়িয়ে পড়েছে, আম্মার আলী (রাঃ)-এর সঙ্গে সিফফিনে যান এবং প্রায় নব্বই বছর বয়সে সেখানেই নিহত হন। উপস্থিত লোকেরা হাদিসটি জানতেন, আর বর্ণিত আছে যে ময়দানের অনেকেই ধরে নেন, সীমালঙ্ঘনকারী দল সম্পর্কে নবীজি ﷺ-এর কথা সত্য হয়ে গেছে। স্বাভাবিকভাবেই এতে গভীর অস্বস্তি ছড়িয়ে পড়ে।",
          },
          {
            en: "Ahl as-Sunnah speak of that war with restraint. Those who fought in it were companions and men of ijtihad; some judged rightly and some judged wrongly, and their affair is with Allah, who knows what we do not. What is not disputed is Ammar himself: a man tortured for faith before there was any reward in it, excused by a verse of the Quran, described by the Prophet ﷺ as filled with faith, and taken in the end on the side the Prophet ﷺ had already named.",
            bn: "আহলুস সুন্নাহ সেই যুদ্ধ নিয়ে সংযমের সঙ্গে কথা বলেন। যাঁরা এতে অংশ নিয়েছেন তাঁরা ছিলেন সাহাবি ও ইজতিহাদকারী; কেউ সঠিক সিদ্ধান্তে পৌঁছেছেন, কেউ ভুল করেছেন—আর তাঁদের বিষয়টি আল্লাহর কাছে, যিনি জানেন যা আমরা জানি না। যা নিয়ে কোনো বিতর্ক নেই তা হলো আম্মার নিজেই: এমন এক মানুষ, যাঁকে ঈমানের জন্য নির্যাতন করা হয়েছে তখন, যখন এতে কোনো পার্থিব প্রতিদান ছিল না; যাঁকে কুরআনের একটি আয়াত অব্যাহতি দিয়েছে; যাঁকে নবীজি ﷺ ঈমানে পরিপূর্ণ বলে বর্ণনা করেছেন; আর যাঁর মৃত্যু এসেছে সেই পক্ষেই, নবীজি ﷺ যা আগেই বলে গিয়েছিলেন।",
          },
        ],
      },
    ],
  },
  abu_bakr_as_siddiq: {
    sections: [
      {
        h: { en: "Before the Message", bn: "বার্তা আসার আগে" },
        p: [
          {
            en: "His name was Abdullah ibn Abi Quhafah, of the clan of Banu Taym, and he traded in cloth on a modest scale but stood high in the esteem of Makkah. Quraysh counted him their finest genealogist, a man who knew the descent and character of every household in the valley, and they brought their disputes to him. The historians record that he never drank wine in the age of ignorance and never bowed to an idol.",
            bn: "তাঁর নাম ছিল আবদুল্লাহ ইবনে আবি কুহাফা, বনু তাইম গোত্রের সন্তান। তিনি কাপড়ের ছোট আকারের ব্যবসা করতেন, কিন্তু মক্কার সমাজে তাঁর মর্যাদা ছিল উঁচু। কুরাইশ তাঁকে গণ্য করত তাদের শ্রেষ্ঠ বংশতত্ত্ববিদ হিসেবে—উপত্যকার প্রতিটি ঘরের বংশ ও চরিত্র তাঁর জানা ছিল, তাই বিবাদের মীমাংসা নিয়ে লোকে তাঁর কাছেই আসত। ঐতিহাসিকগণ লিখেছেন, জাহিলি যুগেও তিনি কখনো মদ স্পর্শ করেননি, কোনো মূর্তির সামনে মাথা নত করেননি।",
          },
          {
            en: "He was slightly younger than Muhammad ﷺ and had known him closely long before the revelation began. That prior knowledge explains what followed. Others weighed the claim; Abu Bakr (RA) weighed the man who made it. Told that his friend said an angel had come to him in the cave of Hira, he answered that if Muhammad ﷺ had said it then it was true, and entered Islam without asking for a sign.",
            bn: "তিনি ছিলেন মুহাম্মাদ ﷺ-এর চেয়ে সামান্য ছোট, আর ওহি নাজিলের বহু আগে থেকেই তাঁকে ঘনিষ্ঠভাবে চিনতেন। এই পূর্বপরিচয়ই পরবর্তী ঘটনার ব্যাখ্যা দেয়। অন্যরা দাবিটিকে ওজন করেছিল; আবু বকর (রাঃ) ওজন করেছিলেন দাবিদার মানুষটিকে। যখন তাঁকে জানানো হলো যে তাঁর বন্ধু বলছেন হেরা গুহায় তাঁর কাছে ফেরেশতা এসেছেন, তিনি উত্তর দিলেন—মুহাম্মাদ ﷺ যদি বলে থাকেন, তবে তা সত্য; কোনো নিদর্শন বা প্রমাণ না চেয়েই তিনি ইসলামে প্রবেশ করলেন।",
          },
        ],
      },
      {
        h: { en: "The First to Answer", bn: "সাড়া দিলেন সর্বপ্রথম" },
        p: [
          {
            en: "He was the first free adult man to accept the message, and he did not keep it to himself. Uthman ibn Affan, az-Zubayr ibn al-Awwam, Abd ar-Rahman ibn Awf, Sa'd ibn Abi Waqqas and Talhah ibn Ubaydullah all came to Islam through him, and every one of them is among the ten given the glad tidings of Paradise. In those first years the believers could be gathered in one small room.",
            bn: "স্বাধীন প্রাপ্তবয়স্ক পুরুষদের মধ্যে তিনিই প্রথম এই বার্তা গ্রহণ করেন, আর তা নিজের মধ্যে গোপন রাখেননি। উসমান ইবনে আফফান, যুবাইর ইবনুল আওয়াম, আবদুর রহমান ইবনে আউফ, সাদ ইবনে আবি ওয়াক্কাস ও তালহা ইবনে উবাইদুল্লাহ—সবাই তাঁর মাধ্যমেই ইসলামে আসেন, এবং এঁদের প্রত্যেকেই জান্নাতের সুসংবাদপ্রাপ্ত দশজনের অন্তর্ভুক্ত। সেই প্রথম বছরগুলোতে ঈমানদারদের একটি ছোট কক্ষেই জড়ো করা যেত।",
          },
          {
            en: "The title as-Siddiq, the one who confirms the truth, was fixed to him after the Night Journey. Quraysh hurried to him expecting that this at last would break the friendship, telling him his companion claimed to have travelled to Jerusalem and returned before morning. He said that if he had said it, he had spoken the truth, and that he already believed him in something greater than this: in news of heaven reaching him morning and evening.",
            bn: "‘আস-সিদ্দিক’—সত্যায়নকারী—উপাধিটি তাঁর সঙ্গে স্থায়ীভাবে যুক্ত হয় ইসরা ও মিরাজের পর। কুরাইশ ছুটে এসেছিল এই ভেবে যে এবার অন্তত বন্ধুত্বটা ভাঙবে; তারা বলল, তোমার সঙ্গী দাবি করছেন তিনি রাতারাতি বাইতুল মাকদিসে গিয়ে ফিরে এসেছেন। তিনি বললেন, তিনি যদি বলে থাকেন তবে সত্যই বলেছেন; আর আমি তো এর চেয়েও বড় বিষয়ে তাঁকে বিশ্বাস করি—সকাল-সন্ধ্যায় আকাশ থেকে তাঁর কাছে সংবাদ আসে, সে কথায়।",
          },
        ],
      },
      {
        h: { en: "Buying Freedom", bn: "মুক্তি কিনে নেওয়া" },
        p: [
          {
            en: "When the persecution fell hardest on those with no clan to protect them, he answered it with his purse. He bought and freed Bilal ibn Rabah, Amir ibn Fuhayrah and a number of enslaved women who were being tortured for their faith. His father objected that he was wasting money on the weak, and that had he freed strong men they would have defended him. He replied that he wanted nothing but what is with God.",
            bn: "নির্যাতনের সবচেয়ে ভারী বোঝা যখন সেই মানুষদের ওপর পড়ল যাদের রক্ষা করার মতো কোনো গোত্র ছিল না, তখন তিনি নিজের অর্থ দিয়ে তার জবাব দিলেন। বিলাল ইবনে রাবাহ, আমির ইবনে ফুহাইরা এবং ঈমানের কারণে নির্যাতিত কয়েকজন দাসীকে তিনি কিনে মুক্ত করে দেন। তাঁর পিতা আপত্তি করলেন—দুর্বলদের পেছনে অর্থ নষ্ট হচ্ছে, শক্তিশালীদের মুক্ত করলে তারা তোমাকে রক্ষা করত। তিনি উত্তর দিলেন, আমি কেবল আল্লাহর কাছে যা আছে তা-ই চাই।",
          },
          {
            en: "The Quran praises the freeing of a neck as the steep ascent most people decline to climb in 90:12-13, and the commentators have long read the closing verses of Surah al-Layl, 92:17-21, as describing this man: the one who gives his wealth to purify himself, owing no favour that must be repaid, seeking only his Lord's face. He entered Islam a wealthy trader and reached Madinah with very little left.",
            bn: "কুরআন 90:12-13-এ দাসমুক্তিকে সেই কঠিন গিরিপথ বলেছে যা অধিকাংশ মানুষ পাড়ি দিতে চায় না; আর মুফাসসিরগণ দীর্ঘকাল ধরে সূরা আল-লাইলের শেষ আয়াতগুলোকে—92:17-21—ঠিক এই মানুষটিরই বর্ণনা হিসেবে পড়েছেন: যে নিজেকে পবিত্র করতে সম্পদ দান করে, যার ওপর কারো কোনো প্রতিদানযোগ্য অনুগ্রহ নেই, যে কেবল তার প্রতিপালকের সন্তুষ্টি চায়। তিনি ইসলামে এসেছিলেন সম্পদশালী ব্যবসায়ী হিসেবে, আর মদিনায় পৌঁছেছিলেন প্রায় শূন্য হাতে।",
          },
        ],
      },
      {
        h: { en: "The Cave and the Road", bn: "গুহা ও পথ" },
        p: [
          {
            en: "When permission for the Hijra came he had already prepared two mounts. The journey was a family undertaking: his son Abdullah carried news out of Makkah at night, his freedman Amir ibn Fuhayrah brought milk and wiped out the tracks with his flock, and his daughter Asma carried the provisions. They hid three nights in the cave of Thawr while search parties came so near that footsteps could be heard above them.",
            bn: "হিজরতের অনুমতি এলে তাঁর দুটি বাহন আগে থেকেই প্রস্তুত ছিল। যাত্রাটি ছিল পুরো পরিবারের কাজ: পুত্র আবদুল্লাহ রাতে মক্কার খবর বয়ে আনতেন, মুক্ত করা গোলাম আমির ইবনে ফুহাইরা দুধ পৌঁছে দিতেন এবং ছাগলের পাল দিয়ে পায়ের চিহ্ন মুছে দিতেন, আর কন্যা আসমা পাথেয় বহন করতেন। তিন রাত তাঁরা সাওর গুহায় লুকিয়ে ছিলেন, আর অনুসন্ধানকারীরা এত কাছে এসে পড়েছিল যে মাথার ওপরে পায়ের শব্দ শোনা যেত।",
          },
          {
            en: "The Quran preserves that night in 9:40, calling him the second of two when they were in the cave and recording the words spoken to him: do not grieve, God is with us. The narrations stress that his fear was never for himself. In Madinah he stood at the Prophet's side at Badr and Hudaybiyah, led the pilgrimage in the ninth year, and in the final illness was ordered to lead the prayer.",
            bn: "কুরআন সেই রাতটিকে ধরে রেখেছে 9:40 আয়াতে—তাঁকে বলা হয়েছে ‘দুজনের দ্বিতীয়জন, যখন তারা গুহায় ছিল’—এবং সেখানে উচ্চারিত কথাটিও সংরক্ষিত: বিষণ্ণ হয়ো না, আল্লাহ আমাদের সঙ্গে আছেন। বর্ণনাগুলো জোর দিয়ে বলে, তাঁর ভয় কখনো নিজের জন্য ছিল না। মদিনায় তিনি বদর ও হুদাইবিয়ায় নবীজি ﷺ-এর পাশে ছিলেন, নবম হিজরিতে হজের নেতৃত্ব দেন, আর নবীজির শেষ অসুস্থতায় তাঁকেই মানুষের নামাজে ইমামতির নির্দেশ দেওয়া হয়।",
          },
        ],
      },
      {
        h: { en: "The Day of the Great Loss", bn: "মহাবিয়োগের দিন" },
        p: [
          {
            en: "On the day the Prophet ﷺ died, Madinah lost its footing, and Umar (RA) stood in the mosque denying the news. Abu Bakr (RA) came in, uncovered the blessed face, kissed his forehead, then went out and said: whoever used to worship Muhammad, Muhammad has died; whoever worships God, God is living and never dies. He recited 3:144, and Umar (RA) later said it was as though he had never heard the verse.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের দিন মদিনা যেন পায়ের নিচের মাটি হারিয়ে ফেলল। উমর (রাঃ) মসজিদে দাঁড়িয়ে সংবাদটি অস্বীকার করছিলেন। আবু বকর (রাঃ) ভেতরে গিয়ে পবিত্র মুখমণ্ডলের কাপড় সরালেন, কপালে চুম্বন করলেন, তারপর বেরিয়ে এসে বললেন: যে মুহাম্মাদের ইবাদত করত, মুহাম্মাদ ইন্তেকাল করেছেন; আর যে আল্লাহর ইবাদত করে, আল্লাহ চিরঞ্জীব, তিনি কখনো মরেন না। এরপর তিনি 3:144 তিলাওয়াত করলেন, আর উমর (রাঃ) পরে বলেছেন, মনে হচ্ছিল আয়াতটি তিনি আগে কখনো শোনেননি।",
          },
          {
            en: "While the burial was still pending, the Ansar gathered in the roofed portico of Banu Sa'idah to decide who should lead. Abu Bakr (RA) went to them with Umar (RA) and Abu Ubaydah (RA); after a hard discussion the pledge of allegiance was given to him there, and completed publicly in the mosque next day. Muslims have differed ever since over how the succession should have been settled.",
            bn: "দাফন তখনো সম্পন্ন হয়নি, এরই মধ্যে আনসারগণ বনু সাইদার ছাউনিতে জড়ো হলেন নেতৃত্ব নির্ধারণের জন্য। আবু বকর (রাঃ) উমর (রাঃ) ও আবু উবাইদা (রাঃ)-কে নিয়ে সেখানে গেলেন; কঠিন আলোচনার পর সেখানেই তাঁর হাতে বাইআত হয়, আর পরদিন মসজিদে প্রকাশ্যে তা সম্পূর্ণ হয়। উত্তরাধিকারের প্রশ্নটি কীভাবে মীমাংসিত হওয়া উচিত ছিল তা নিয়ে মুসলিমরা তখন থেকেই ভিন্নমত পোষণ করেছেন।",
          },
        ],
      },
      {
        h: { en: "Two Years That Held", bn: "যে দুই বছর ধরে রাখল" },
        p: [
          {
            en: "His caliphate lasted barely two years and it began in crisis. Tribes across Arabia withheld the zakat, false claimants to prophethood raised armies, and senior Companions urged him to keep Usamah's expedition at home. He refused to recall an army the Prophet ﷺ had dispatched, and he refused to treat the zakat as negotiable, saying he would fight anyone who separated what God had joined in the prayer and the alms.",
            bn: "তাঁর খিলাফত টিকেছিল সবে দুই বছর, আর তার শুরুটাই ছিল সংকট দিয়ে। আরবজুড়ে গোত্রগুলো জাকাত দিতে অস্বীকার করল, ভুয়া নবুয়তের দাবিদাররা সৈন্য জড়ো করল, আর প্রবীণ সাহাবিগণ পরামর্শ দিলেন উসামার বাহিনীকে মদিনায় ধরে রাখতে। নবীজি ﷺ যে বাহিনী পাঠিয়েছেন তা ফিরিয়ে আনতে তিনি অস্বীকার করলেন, আর জাকাতকে দরকষাকষির বিষয় বানাতেও রাজি হলেন না—তিনি বললেন, নামাজ ও জাকাতের মধ্যে আল্লাহ যা জুড়ে দিয়েছেন কেউ তা আলাদা করলে তার বিরুদ্ধে তিনি লড়বেন।",
          },
          {
            en: "The heaviest cost came at Yamamah, where many who had memorised the Quran were killed. Umar (RA) urged that the revelation be gathered into one written collection before more reciters died. Abu Bakr (RA) hesitated to do what the Prophet ﷺ had not done, then accepted, and set Zayd ibn Thabit to the task; Zayd said that moving a mountain would have been lighter. The pages he assembled passed to Umar (RA) and then to Hafsah (RA).",
            bn: "সবচেয়ে ভারী মূল্য দিতে হলো ইয়ামামায়, যেখানে কুরআনের বহু হাফিজ শহীদ হন। উমর (রাঃ) তাগিদ দিলেন, আরও কারি চলে যাওয়ার আগেই ওহিকে একটি লিখিত সংকলনে একত্র করা হোক। নবীজি ﷺ যা করেননি তা করতে আবু বকর (রাঃ) প্রথমে দ্বিধা করলেন, পরে সম্মত হলেন এবং যায়েদ ইবনে সাবিতকে এই কাজে নিযুক্ত করলেন; যায়েদ বলেছেন, একটি পাহাড় সরানোও এর চেয়ে হালকা হতো। তাঁর সংকলিত সহিফা পরে উমর (রাঃ) এবং তারপর হাফসা (রাঃ)-এর কাছে রক্ষিত হয়।",
          },
          {
            en: "He died in the year thirteen after the Hijra, at the age of sixty-three. Before his death he consulted the leading Companions and named Umar (RA) as his successor in a written document, asked the people to forgive him any wrong, and directed that what he had taken from the public treasury be repaid from his own property. He was buried beside the Prophet ﷺ, in Aishah's chamber.",
            bn: "হিজরি তেরো সালে তেষট্টি বছর বয়সে তিনি ইন্তেকাল করেন। মৃত্যুর আগে তিনি প্রবীণ সাহাবিদের সঙ্গে পরামর্শ করে লিখিত দলিলে উমর (রাঃ)-কে উত্তরসূরি মনোনীত করেন, মানুষের কাছে নিজের কোনো ত্রুটির জন্য ক্ষমা চান, এবং নির্দেশ দেন যে রাষ্ট্রীয় কোষাগার থেকে তিনি যা নিয়েছেন তা যেন তাঁর নিজের সম্পত্তি থেকে ফেরত দেওয়া হয়। তাঁকে দাফন করা হয় নবীজি ﷺ-এর পাশে, কন্যা আয়িশা (রাঃ)-এর কক্ষে।",
          },
        ],
      },
    ],
  },
  umar_ibn_al_khattab: {
    sections: [
      {
        h: { en: "A Hard Man of Quraysh", bn: "কুরাইশের কঠিন মানুষ" },
        p: [
          {
            en: "Umar ibn al-Khattab belonged to Banu Adi, a clan whose traditional duty was to carry Quraysh's embassies to other tribes. He was tall, physically formidable, literate at a time when few Makkans could write, and known for a temper that made men give way to him. Everything that later made him a great administrator, his memory for detail and his refusal to be moved once he judged a thing right, first served the opposition.",
            bn: "উমর ইবনুল খাত্তাব ছিলেন বনু আদি গোত্রের সন্তান, যে গোত্রের পুরোনো দায়িত্ব ছিল অন্য গোত্রের কাছে কুরাইশের দূত হয়ে যাওয়া। তিনি ছিলেন দীর্ঘদেহী, শারীরিকভাবে ভয়জাগানো, এবং এমন এক সময়ে লেখাপড়া জানতেন যখন মক্কায় খুব কম মানুষই লিখতে পারত; তাঁর মেজাজের সামনে লোকে পথ ছেড়ে দিত। পরবর্তীকালে যা তাঁকে বড় প্রশাসক বানিয়েছিল—খুঁটিনাটি মনে রাখার ক্ষমতা আর সঠিক বলে বুঝলে অবিচল থাকা—তা প্রথমে কাজে লেগেছিল ইসলামের বিরোধিতাতেই।",
          },
          {
            en: "For several years he was among the most dangerous enemies the small community faced. He struck believers who were within his reach, including a slave woman of his own clan, and he treated the new religion as a betrayal of the fathers and of the order that held Makkah together. The sources do not soften this period; his own later speech returns to it with grief rather than with pride.",
            bn: "কয়েক বছর ধরে তিনি ছিলেন ছোট্ট মুসলিম সমাজের সবচেয়ে বিপজ্জনক শত্রুদের একজন। হাতের নাগালে যেসব ঈমানদারকে পেতেন তাঁদের প্রহার করতেন—নিজের গোত্রের এক দাসীও তার মধ্যে ছিলেন—আর নতুন ধর্মটিকে তিনি দেখতেন পিতৃপুরুষ ও মক্কার সমাজব্যবস্থার প্রতি বিশ্বাসঘাতকতা হিসেবে। সূত্রগুলো এই অধ্যায়টিকে নরম করে দেখায় না; বরং তাঁর নিজের পরবর্তী বক্তব্যেও এই প্রসঙ্গ ফিরে আসে গর্ব নয়, অনুশোচনার সুরে।",
          },
        ],
      },
      {
        h: { en: "The Turning", bn: "মোড় ঘুরে যাওয়া" },
        p: [
          {
            en: "Ibn Ishaq records that he set out one day intending violence against the Prophet ﷺ and was told on the way that his own sister and brother-in-law had accepted Islam. He went to their house, struck them, and then saw the page they had been reading. Something in the recitation stopped him. He washed, read it again, and went from there to the house at Safa to declare his belief.",
            bn: "ইবনে ইসহাক লিখেছেন, একদিন তিনি নবীজি ﷺ-এর বিরুদ্ধে সহিংস উদ্দেশ্য নিয়ে বেরিয়েছিলেন, আর পথে জানতে পারলেন যে তাঁর নিজের বোন ও ভগ্নিপতিই ইসলাম গ্রহণ করেছেন। তিনি তাঁদের ঘরে গিয়ে তাঁদের আঘাত করলেন, তারপর চোখ পড়ল সেই পাতাটির ওপর যা তাঁরা পড়ছিলেন। তিলাওয়াতের ভেতরের কিছু একটা তাঁকে থামিয়ে দিল। তিনি গোসল করলেন, আবার পড়লেন, এবং সেখান থেকেই সাফার সেই ঘরে গিয়ে নিজের ঈমান ঘোষণা করলেন।",
          },
          {
            en: "The effect on the community was immediate. Abdullah ibn Mas'ud (RA) said that the Muslims were unable to pray openly at the Ka'bah until Umar (RA) became Muslim. He was given the title al-Faruq, the one who separates truth from falsehood. From that point he was rarely far from the Prophet ﷺ, present at Badr, Uhud, the Trench, Hudaybiyah and the conquest, and among the few whose counsel was regularly sought.",
            bn: "মুসলিম সমাজে এর প্রভাব পড়ল সঙ্গে সঙ্গে। আবদুল্লাহ ইবনে মাসউদ (রাঃ) বলেছেন, উমর (রাঃ) মুসলিম না হওয়া পর্যন্ত আমরা কাবার পাশে প্রকাশ্যে নামাজ পড়তে পারতাম না। তাঁকে দেওয়া হলো ‘আল-ফারুক’ উপাধি—যিনি সত্য ও মিথ্যার মধ্যে পার্থক্য করে দেন। এরপর থেকে তিনি খুব কমই নবীজি ﷺ-এর কাছ থেকে দূরে থেকেছেন: বদর, উহুদ, খন্দক, হুদাইবিয়া ও মক্কা বিজয়ে উপস্থিত ছিলেন, আর যাঁদের পরামর্শ নিয়মিত চাওয়া হতো তিনি তাঁদের একজন।",
          },
        ],
      },
      {
        h: { en: "Opinions the Quran Confirmed", bn: "কুরআন যেসব অভিমত সমর্থন করল" },
        p: [
          {
            en: "Anas ibn Malik (RA) narrates that Umar (RA) said his view agreed with his Lord in three matters. He had suggested that the standing place of Ibrahim be taken as a place of prayer, and 2:125 came down. He had suggested that the Prophet's wives be screened, and the verse of the covering came in 33:53. And when some of the wives differed with the Prophet ﷺ, the words he had spoken to them appeared almost exactly in 66:5.",
            bn: "আনাস ইবনে মালিক (রাঃ) বর্ণনা করেছেন, উমর (রাঃ) বলতেন তিনটি বিষয়ে তাঁর অভিমত তাঁর প্রতিপালকের সিদ্ধান্তের সঙ্গে মিলে গিয়েছিল। তিনি প্রস্তাব করেছিলেন মাকামে ইবরাহিমকে নামাজের স্থান হিসেবে গ্রহণ করা হোক, আর নাজিল হলো 2:125। তিনি প্রস্তাব করেছিলেন উম্মুল মুমিনীনদের জন্য পর্দার ব্যবস্থা হোক, আর এলো পর্দার আয়াত 33:53। আর নবীজি ﷺ-এর কয়েকজন স্ত্রীর সঙ্গে মতভেদের সময় তিনি তাঁদের যে কথা বলেছিলেন, তা প্রায় হুবহু এসে গেল 66:5-এ।",
          },
          {
            en: "These agreements were not claims of authority but signs of how carefully he had absorbed the direction of the revelation. He was equally quick to submit when his own judgement was overruled, as at Hudaybiyah, where he questioned the terms of the treaty openly and then spent years giving charity and fasting in expiation for the sharpness of his objection.",
            bn: "এই মিলগুলো কোনো কর্তৃত্বের দাবি ছিল না, বরং এই ইঙ্গিত যে তিনি ওহির গতিমুখ কতটা মনোযোগ দিয়ে আত্মস্থ করেছিলেন। আবার নিজের মত খারিজ হলে তিনি ততটাই দ্রুত মেনে নিতেন—যেমন হুদাইবিয়ায়, যেখানে তিনি প্রকাশ্যে সন্ধির শর্ত নিয়ে প্রশ্ন তুলেছিলেন, আর তারপর বহু বছর ধরে দান ও রোজার মাধ্যমে সেই কঠোর আপত্তির কাফফারা আদায় করেছেন।",
          },
        ],
      },
      {
        h: { en: "The Shape of a State", bn: "একটি রাষ্ট্রের কাঠামো" },
        p: [
          {
            en: "He became caliph on the death of Abu Bakr (RA) and led for about a decade. In that time Muslim armies took Damascus and Jerusalem, broke the Persian field armies at al-Qadisiyyah, and entered Egypt. He came in person to receive Jerusalem and granted its people a written guarantee of their lives, churches and crosses, a document later generations preserved as a model of terms offered to a conquered city.",
            bn: "আবু বকর (রাঃ)-এর ইন্তেকালের পর তিনি খলিফা হন এবং প্রায় এক দশক নেতৃত্ব দেন। এই সময়ে মুসলিম বাহিনী দামেস্ক ও জেরুজালেম অধিকার করে, আল-কাদিসিয়ায় পারস্যের বাহিনীকে পরাস্ত করে এবং মিসরে প্রবেশ করে। জেরুজালেম গ্রহণ করতে তিনি নিজে উপস্থিত হন এবং সেখানকার মানুষকে তাদের জীবন, গির্জা ও ক্রুশের নিরাপত্তার লিখিত অঙ্গীকার দেন—পরবর্তী প্রজন্ম সেই দলিলকে বিজিত নগরীর প্রতি আচরণের আদর্শ হিসেবে সংরক্ষণ করেছে।",
          },
          {
            en: "Behind the campaigns he was building institutions. He fixed the Hijri calendar from the year of the migration, established the diwan register of stipends, organised the treasury, appointed judges independent of governors, laid out garrison cities, and instituted the night patrol of Madinah. He questioned returning governors publicly about their conduct and their wealth, and dismissed commanders at the height of their success to remind the army where victory came from.",
            bn: "অভিযানের আড়ালে তিনি গড়ে তুলছিলেন প্রতিষ্ঠান। হিজরতের বছর থেকে তিনি হিজরি সন নির্ধারণ করেন, ভাতার জন্য ‘দিওয়ান’ নিবন্ধন চালু করেন, কোষাগার সংগঠিত করেন, গভর্নরদের থেকে স্বাধীন বিচারক নিয়োগ দেন, সেনানিবাস-নগরী গড়ে তোলেন এবং মদিনায় রাতের টহল চালু করেন। ফিরে আসা গভর্নরদের তিনি প্রকাশ্যে তাঁদের আচরণ ও সম্পদ সম্পর্কে জিজ্ঞাসাবাদ করতেন, আর সাফল্যের শীর্ষে থাকা সেনাপতিকেও অব্যাহতি দিতেন—যাতে বাহিনী মনে রাখে বিজয় আসে কোথা থেকে।",
          },
        ],
      },
      {
        h: { en: "Justice and Hard Years", bn: "ন্যায়বিচার ও দুর্বছর" },
        p: [
          {
            en: "The famine remembered as the Year of Ashes tested him hardest. He wrote to the governors of Egypt and Syria for grain, organised relief in Madinah, and refused butter and meat until the people had them, saying he would not be a poor guardian if he did not taste what they tasted. In the same crisis he suspended the punishment for theft, judging that a hungry population could not be held to it.",
            bn: "যে দুর্ভিক্ষ ‘আমুর রামাদা’ বা ছাইয়ের বছর নামে স্মরণীয়, সেটিই তাঁকে সবচেয়ে কঠিন পরীক্ষায় ফেলে। তিনি মিসর ও সিরিয়ার গভর্নরদের কাছে খাদ্যশস্যের জন্য চিঠি লেখেন, মদিনায় ত্রাণ সংগঠিত করেন, এবং মানুষ না পাওয়া পর্যন্ত নিজে ঘি ও গোশত স্পর্শ করেননি—তিনি বলতেন, মানুষ যা চাখছে তা না চাখলে তিনি মন্দ অভিভাবকই হবেন। একই সংকটে তিনি চুরির শাস্তি স্থগিত রাখেন, এই বিবেচনায় যে ক্ষুধার্ত একটি জনগোষ্ঠীকে তার অধীন রাখা যায় না।",
          },
          {
            en: "Travelling to Syria when plague broke out at Amwas, he consulted the emigrants and the Ansar and finally turned the party back. Abu Ubaydah (RA) asked whether he was fleeing from the decree of God; he answered that he was fleeing from the decree of God to the decree of God, and Abd ar-Rahman ibn Awf (RA) then reported the Prophet's instruction neither to enter a land under plague nor to flee from it.",
            bn: "সিরিয়ার পথে আমওয়াসে মহামারি ছড়িয়ে পড়ার খবর পেয়ে তিনি মুহাজির ও আনসারদের সঙ্গে পরামর্শ করে অবশেষে কাফেলা ফিরিয়ে নেন। আবু উবাইদা (রাঃ) জিজ্ঞেস করলেন, আপনি কি আল্লাহর ফয়সালা থেকে পালাচ্ছেন? তিনি উত্তর দিলেন, আমি আল্লাহর এক ফয়সালা থেকে তাঁরই অন্য ফয়সালার দিকে পালাচ্ছি। এরপর আবদুর রহমান ইবনে আউফ (রাঃ) নবীজি ﷺ-এর নির্দেশ শোনালেন—মহামারিগ্রস্ত ভূখণ্ডে প্রবেশ করো না, আর সেখান থেকে পালিয়েও এসো না।",
          },
        ],
      },
      {
        h: { en: "Struck at Dawn", bn: "ফজরে আঘাত" },
        p: [
          {
            en: "He was stabbed while leading the dawn prayer by Abu Lu'lu'ah, an enslaved craftsman who had brought a grievance to him days earlier. Mortally wounded, he refused to name a successor outright and instead appointed six of the surviving Companions to choose one of themselves within three days, forbidding his own son from being a candidate.",
            bn: "ফজরের নামাজে ইমামতিরত অবস্থায় তাঁকে ছুরিকাঘাত করে আবু লুলুআ নামের এক দাস কারিগর, যে কয়েক দিন আগেই তাঁর কাছে একটি অভিযোগ নিয়ে এসেছিল। মরণাহত অবস্থায় তিনি সরাসরি কোনো উত্তরসূরির নাম ঘোষণা করতে অস্বীকার করেন; বরং জীবিত সাহাবিদের মধ্য থেকে ছয়জনকে নিযুক্ত করেন, যাঁরা তিন দিনের মধ্যে নিজেদের ভেতর থেকে একজনকে বেছে নেবেন—আর নিজের পুত্রকে প্রার্থী হতে নিষেধ করে দেন।",
          },
          {
            en: "He sent his son to ask Aishah (RA) for permission to be buried beside the Prophet ﷺ and Abu Bakr (RA), instructing him to present it as a request and not as the demand of a caliph, and to bring him back to the common graveyard if she declined. She agreed. He died in the year twenty-three after the Hijra, leaving a state that spanned three empires' territory and a household that owned almost nothing.",
            bn: "তিনি পুত্রকে পাঠালেন আয়িশা (রাঃ)-এর কাছে, নবীজি ﷺ ও আবু বকর (রাঃ)-এর পাশে দাফনের অনুমতি চাইতে—নির্দেশ দিলেন যেন তা খলিফার দাবি হিসেবে নয়, একজন প্রার্থীর অনুরোধ হিসেবে পেশ করা হয়, আর তিনি রাজি না হলে যেন সাধারণ কবরস্থানেই তাঁকে নেওয়া হয়। তিনি অনুমতি দিলেন। হিজরি তেইশ সালে তিনি ইন্তেকাল করেন, রেখে যান তিনটি সাম্রাজ্যের ভূখণ্ডজুড়ে বিস্তৃত এক রাষ্ট্র আর এমন এক ঘর যার প্রায় কিছুই ছিল না।",
          },
        ],
      },
    ],
  },
  uthman_ibn_affan: {
    sections: [
      {
        h: { en: "The Quiet Merchant", bn: "নীরব বণিক" },
        p: [
          {
            en: "Uthman ibn Affan came from Banu Umayyah, one of the wealthiest and most powerful houses of Quraysh. He was a cloth and grain merchant who traded as far as Syria, literate, well travelled, and remembered above all for a modesty that struck everyone who met him. The narrations describe a man who disliked crowds and loud speech, and who would draw his garment about him even when alone in his house.",
            bn: "উসমান ইবনে আফফান এসেছিলেন বনু উমাইয়া থেকে, কুরাইশের অন্যতম ধনী ও প্রভাবশালী পরিবার। তিনি ছিলেন কাপড় ও শস্যের ব্যবসায়ী, সিরিয়া পর্যন্ত যাঁর বাণিজ্য পৌঁছাত; লেখাপড়া জানতেন, বহু দেশ ঘুরেছিলেন, কিন্তু সবচেয়ে বেশি স্মরণীয় ছিলেন তাঁর লজ্জাশীলতার জন্য, যা তাঁর সঙ্গে দেখা হওয়া প্রত্যেককেই স্পর্শ করত। বর্ণনাগুলোতে পাওয়া যায় এমন এক মানুষের ছবি, যিনি ভিড় ও উচ্চস্বর অপছন্দ করতেন এবং ঘরে একা থাকলেও নিজের পোশাক গুছিয়ে রাখতেন।",
          },
          {
            en: "He accepted Islam early, through Abu Bakr (RA), and married the Prophet's daughter Ruqayyah (RA). When persecution grew unbearable the two of them emigrated to Abyssinia, then returned and later migrated to Madinah. After Ruqayyah (RA) died he married her sister Umm Kulthum (RA), and from this he is known as Dhun-Nurayn, the possessor of two lights, a distinction no other Companion shares.",
            bn: "তিনি আবু বকর (রাঃ)-এর মাধ্যমে প্রথম দিকেই ইসলাম গ্রহণ করেন এবং নবীকন্যা রুকাইয়া (রাঃ)-কে বিয়ে করেন। নির্যাতন অসহনীয় হয়ে উঠলে তাঁরা দুজন আবিসিনিয়ায় হিজরত করেন, পরে ফিরে এসে মদিনায় হিজরত করেন। রুকাইয়া (রাঃ)-এর ইন্তেকালের পর তিনি তাঁর বোন উম্মে কুলসুম (রাঃ)-কে বিয়ে করেন, আর এ কারণেই তিনি ‘জুন-নূরাইন’—দুই জ্যোতির অধিকারী—নামে পরিচিত, যে মর্যাদা আর কোনো সাহাবির নেই।",
          },
        ],
      },
      {
        h: { en: "Wealth Turned Outward", bn: "সম্পদ ফিরিয়ে দেওয়া" },
        p: [
          {
            en: "Madinah's drinking water came largely from a well called Rumah, owned by a man who sold it by the skin. Uthman (RA) bought the well and made it free for every Muslim. When the mosque grew too small for the worshippers he purchased the neighbouring land and paid for its extension himself, and in years of shortage he turned entire trade caravans over to the poor of the city rather than sell the grain at a profit.",
            bn: "মদিনার পানীয় জলের বড় উৎস ছিল ‘রুমা’ নামের একটি কূপ, যার মালিক মশক হিসেবে পানি বিক্রি করত। উসমান (রাঃ) কূপটি কিনে প্রত্যেক মুসলিমের জন্য উন্মুক্ত করে দেন। মুসল্লিদের তুলনায় মসজিদ ছোট হয়ে এলে তিনি পাশের জমি কিনে নিজের অর্থেই সম্প্রসারণের ব্যয় বহন করেন; আর দুর্ভিক্ষের বছরে গোটা বাণিজ্য-কাফেলা মুনাফায় বিক্রি না করে শহরের গরিবদের মধ্যে বিলিয়ে দেন।",
          },
          {
            en: "The clearest example came at Tabuk, where an army had to be raised for a distant march in scorching heat with almost no resources. Uthman (RA) equipped hundreds of mounts with their saddles and provisions and brought a great sum of money to the Prophet ﷺ, who turned it over in his hands and said that nothing Uthman did after that day would harm him, though the chain of that report is criticised.",
            bn: "সবচেয়ে স্পষ্ট উদাহরণ তাবুকে, যেখানে প্রচণ্ড গরমে দূরের অভিযানের জন্য প্রায় সম্বলহীন অবস্থায় সেনাবাহিনী গড়তে হয়েছিল। উসমান (রাঃ) জিন ও রসদসহ শত শত বাহনের ব্যবস্থা করেন এবং নবীজি ﷺ-এর কাছে বিপুল পরিমাণ অর্থ এনে দেন; নবীজি ﷺ হাতে করে তা উল্টেপাল্টে দেখে বলেন, এদিনের পর উসমান যা-ই করুক, তা তার ক্ষতি করবে না—যদিও এই বর্ণনার সনদ সমালোচিত।",
          },
        ],
      },
      {
        h: { en: "The Pledge Beneath the Tree", bn: "গাছের নিচে বাইআত" },
        p: [
          {
            en: "At Hudaybiyah the Prophet ﷺ needed an envoy to carry his message into Makkah, and chose Uthman (RA) because his clan could shield him. He was detained there, and word reached the camp that he had been killed. The Prophet ﷺ called the Muslims to pledge that they would not flee, and took their hands one by one under a tree, then struck one of his own hands against the other and said this is for Uthman.",
            bn: "হুদাইবিয়ায় নবীজি ﷺ-এর প্রয়োজন হলো এমন এক দূতের যিনি তাঁর বার্তা নিয়ে মক্কায় যেতে পারবেন; তিনি উসমান (রাঃ)-কে বেছে নিলেন, কারণ তাঁর গোত্র তাঁকে রক্ষা করতে পারবে। তিনি সেখানে আটক হলেন, আর শিবিরে খবর পৌঁছাল যে তাঁকে হত্যা করা হয়েছে। নবীজি ﷺ মুসলিমদের ডাকলেন এই বাইআতের জন্য যে তাঁরা পালাবেন না; একটি গাছের নিচে একে একে সবার হাত নিলেন, তারপর নিজের এক হাত অন্য হাতে রেখে বললেন, এটি উসমানের পক্ষ থেকে।",
          },
          {
            en: "God's approval of that pledge is recorded in 48:18, and it remained the seal upon Uthman's standing in the community. He is also among those described in 9:100 as the foremost of the emigrants and the helpers, of whom God says He is pleased with them and they with Him. These are not partisan claims; they are verses the whole community recites.",
            bn: "সেই বাইআতের প্রতি আল্লাহর সন্তুষ্টি লিপিবদ্ধ আছে 48:18-এ, আর তা উম্মাহর মধ্যে উসমান (রাঃ)-এর মর্যাদার ওপর মোহরের মতো থেকে গেছে। 9:100-এ মুহাজির ও আনসারদের মধ্যে যাঁদের অগ্রগামী বলা হয়েছে এবং যাঁদের সম্পর্কে আল্লাহ বলেছেন তিনি তাঁদের প্রতি সন্তুষ্ট এবং তাঁরাও তাঁর প্রতি—তিনি তাঁদেরই একজন। এগুলো কোনো দলীয় দাবি নয়; এগুলো সেই আয়াত যা গোটা উম্মাহ তিলাওয়াত করে।",
          },
        ],
      },
      {
        h: { en: "One Book for One Ummah", bn: "এক উম্মাহর জন্য এক গ্রন্থ" },
        p: [
          {
            en: "The act for which he is most remembered began as a report from the frontier. Hudhayfah ibn al-Yaman (RA), campaigning in Armenia and Azerbaijan with troops drawn from Iraq and Syria, heard soldiers disputing over recitation and came to Uthman (RA) alarmed, urging him to save the community before it differed over its Book as earlier communities had differed over theirs.",
            bn: "যে কাজের জন্য তিনি সবচেয়ে বেশি স্মরণীয়, তার সূচনা হয়েছিল সীমান্ত থেকে আসা এক সংবাদে। হুযাইফা ইবনুল ইয়ামান (রাঃ) ইরাক ও সিরিয়ার সৈন্যদের নিয়ে আর্মেনিয়া ও আজারবাইজানে অভিযানে ছিলেন; সেখানে তিনি সৈন্যদের কিরাআত নিয়ে বিতর্ক করতে শুনে উদ্বিগ্ন হয়ে উসমান (রাঃ)-এর কাছে আসেন এবং তাগিদ দেন—আগের জাতিগুলো যেমন নিজেদের কিতাব নিয়ে মতভেদে পড়েছিল, উম্মাহ তেমন হওয়ার আগেই একে রক্ষা করুন।",
          },
          {
            en: "Uthman (RA) sent for the pages Abu Bakr (RA) had collected, kept with Hafsah (RA), and commissioned Zayd ibn Thabit (RA) with three men of Quraysh to copy them into standard volumes, ruling that where usage differed the wording of Quraysh should be written. Copies were sent to the main cities with a reciter for each, and the variant private collections were withdrawn. Ali ibn Abi Talib (RA) is reported to have defended the decision, saying that had he been in charge he would have done the same.",
            bn: "উসমান (রাঃ) আবু বকর (রাঃ)-এর সংকলিত সহিফা আনালেন, যা হাফসা (রাঃ)-এর কাছে রক্ষিত ছিল, এবং যায়েদ ইবনে সাবিত (রাঃ)-কে কুরাইশের তিনজন সঙ্গীসহ দায়িত্ব দিলেন সেগুলো থেকে প্রমিত মুসহাফ অনুলিপি করতে; নির্দেশ দিলেন, উচ্চারণে পার্থক্য হলে কুরাইশের ভাষায় লিখতে হবে। প্রধান নগরগুলোতে একজন করে কারিসহ অনুলিপি পাঠানো হয়, আর ব্যক্তিগত ভিন্ন সংকলনগুলো প্রত্যাহার করা হয়। বর্ণিত আছে, আলী ইবনে আবি তালিব (রাঃ) এই সিদ্ধান্তের পক্ষে বলেছিলেন—দায়িত্ব তাঁর হাতে থাকলে তিনিও একই কাজ করতেন।",
          },
          {
            en: "Every printed Quran in the world today descends from that standard, and the surviving early copies confirm it. The promise in 15:9 that God has sent down the Reminder and is Himself its guardian was fulfilled, in the ordinary course of history, through an elderly caliph who acted at once on a soldier's warning and left the community a single agreed text rather than a set of regional traditions.",
            bn: "আজ পৃথিবীর প্রতিটি মুদ্রিত কুরআন সেই প্রমিত মুসহাফেরই ধারাবাহিকতা, আর টিকে থাকা প্রাচীন অনুলিপিগুলোও তা নিশ্চিত করে। 15:9-এ আল্লাহর যে অঙ্গীকার—তিনিই এই উপদেশ নাজিল করেছেন এবং তিনিই এর সংরক্ষক—ইতিহাসের স্বাভাবিক পথেই তা বাস্তবায়িত হলো এক বৃদ্ধ খলিফার মাধ্যমে, যিনি এক সৈনিকের সতর্কবাণীতে সঙ্গে সঙ্গে সাড়া দিয়ে উম্মাহকে আঞ্চলিক নানা ধারা নয়, বরং একটিমাত্র স্বীকৃত গ্রন্থ দিয়ে গেলেন।",
          },
        ],
      },
      {
        h: { en: "The Years of Complaint", bn: "অভিযোগের বছরগুলো" },
        p: [
          {
            en: "His caliphate lasted about twelve years. The first half was prosperous and expansive: Muslim rule reached Khurasan and North Africa, and the first Muslim fleet was built. In the second half, discontent gathered. Complaints centred on the appointment of relatives to governorships, the handling of state lands and revenues, and the conduct of particular governors, one of whom he removed after the charge against him was proved.",
            bn: "তাঁর খিলাফত চলে প্রায় বারো বছর। প্রথমার্ধ ছিল সমৃদ্ধ ও সম্প্রসারণের কাল: মুসলিম শাসন খোরাসান ও উত্তর আফ্রিকা পর্যন্ত পৌঁছায় এবং প্রথম মুসলিম নৌবহর গড়ে ওঠে। দ্বিতীয়ার্ধে অসন্তোষ জমতে থাকে। অভিযোগ ছিল মূলত আত্মীয়দের গভর্নর নিয়োগ, রাষ্ট্রীয় জমি ও রাজস্ব ব্যবস্থাপনা এবং কয়েকজন নির্দিষ্ট গভর্নরের আচরণ নিয়ে—যাঁদের একজনকে অভিযোগ প্রমাণিত হওয়ার পর তিনি অপসারণ করেন।",
          },
          {
            en: "The sources differ sharply on how far the grievances were genuine, how far they were inflamed by agitators, and how much responsibility rests with the caliph's leniency towards his kin. What is agreed is that delegations came from Egypt, Kufa and Basra, that negotiations were held and promises given, and that a forged letter ordering the punishment of the returning Egyptians turned a protest into a siege.",
            bn: "অভিযোগগুলো কতটা প্রকৃত ছিল, কতটা উসকানিদাতাদের হাতে বিকৃত হয়েছিল, আর আত্মীয়দের প্রতি খলিফার নমনীয়তার দায় কতখানি—এ নিয়ে সূত্রগুলোর মধ্যে তীব্র মতভেদ রয়েছে। যেটিতে সবাই একমত তা হলো: মিসর, কুফা ও বসরা থেকে প্রতিনিধিদল আসে, আলোচনা হয় ও প্রতিশ্রুতি দেওয়া হয়, এবং ফিরে যাওয়া মিসরীয়দের শাস্তির নির্দেশ-সংবলিত একটি জাল চিঠি প্রতিবাদকে অবরোধে পরিণত করে।",
          },
        ],
      },
      {
        h: { en: "The House Under Siege", bn: "অবরুদ্ধ গৃহ" },
        p: [
          {
            en: "For weeks his house in Madinah was surrounded and his water cut off. Companions and their sons came armed to defend him, and he ordered them to sheathe their weapons and go home, saying he would not be the first to have Muslim blood shed for his sake. He refused equally to resign an office he believed God had placed upon him and to fight the men outside his door.",
            bn: "সপ্তাহের পর সপ্তাহ মদিনায় তাঁর ঘর ঘেরাও করে রাখা হয় এবং পানি বন্ধ করে দেওয়া হয়। সাহাবিগণ ও তাঁদের সন্তানেরা অস্ত্র নিয়ে তাঁকে রক্ষা করতে আসেন, কিন্তু তিনি তাঁদের অস্ত্র কোষবদ্ধ করে ঘরে ফিরে যেতে নির্দেশ দেন—তিনি বলেন, তাঁর কারণে প্রথম মুসলিম রক্ত ঝরুক তা তিনি চান না। যে দায়িত্ব আল্লাহ তাঁর ওপর অর্পণ করেছেন বলে তিনি বিশ্বাস করতেন তা ছাড়তেও তিনি অস্বীকার করেন, আবার দরজার বাইরের মানুষদের সঙ্গে লড়তেও।",
          },
          {
            en: "In Dhul-Hijjah of the thirty-fifth year after the Hijra intruders entered over the wall and killed him while he sat fasting with the Quran open before him. He was an old man, well past eighty. His killing was the first fracture inside the community itself, and the disputes that followed shaped Muslim history; the mainstream position of the scholars has been to hold his blood unlawfully shed and to leave the judgement of those involved to God.",
            bn: "হিজরি পঁয়ত্রিশ সালের জিলহজে অনুপ্রবেশকারীরা দেয়াল টপকে ভেতরে ঢুকে তাঁকে হত্যা করে, তখন তিনি রোজা রেখে সামনে খোলা কুরআন নিয়ে বসে ছিলেন। তিনি ছিলেন আশি পেরোনো বৃদ্ধ। তাঁর হত্যাকাণ্ড ছিল উম্মাহর ভেতরে প্রথম ফাটল, আর তার পরের বিবাদগুলো মুসলিম ইতিহাসের গতিপথ নির্ধারণ করে দেয়; আলেমদের মূলধারার অবস্থান হলো—তাঁর রক্ত অন্যায়ভাবে ঝরানো হয়েছে, আর এতে জড়িতদের বিচার আল্লাহর হাতে সোপর্দ করা।",
          },
        ],
      },
    ],
  },
  ali_ibn_abi_talib: {
    sections: [
      {
        h: { en: "Raised in That House", bn: "সেই ঘরেই বেড়ে ওঠা" },
        p: [
          {
            en: "Ali was the son of Abu Talib, the uncle who had raised the Prophet ﷺ and who protected him for years in Makkah. During a period of hardship in the valley, the Prophet ﷺ took the boy into his own household to lighten his uncle's burden, so Ali grew up in the house where the revelation would first be believed, alongside Khadijah (RA) and her daughters.",
            bn: "আলী ছিলেন আবু তালিবের পুত্র—সেই চাচার, যিনি নবীজি ﷺ-কে লালন-পালন করেছিলেন এবং বহু বছর মক্কায় তাঁকে রক্ষা করেছেন। উপত্যকায় দুর্দিনের সময় নবীজি ﷺ চাচার বোঝা হালকা করতে বালকটিকে নিজের ঘরে নিয়ে আসেন; ফলে আলী বেড়ে ওঠেন সেই ঘরেই, যেখানে ওহিতে সর্বপ্রথম বিশ্বাস স্থাপিত হবে—খাদিজা (রাঃ) ও তাঁর কন্যাদের সঙ্গে।",
          },
          {
            en: "He was still a child when he saw the Prophet ﷺ and Khadijah (RA) praying and asked what they were doing. He accepted Islam as the first of the young, keeping it from his father at first out of caution. When the Prophet ﷺ was commanded in 26:214 to warn his nearest kin and gathered the clan, Ali was the only one of them who stood with him.",
            bn: "তিনি তখনো শিশু, যখন নবীজি ﷺ ও খাদিজা (রাঃ)-কে নামাজ পড়তে দেখে জিজ্ঞেস করেন তাঁরা কী করছেন। কিশোরদের মধ্যে সর্বপ্রথম তিনি ইসলাম গ্রহণ করেন, সতর্কতাবশত প্রথমে তা পিতার কাছে গোপন রাখেন। যখন 26:214-এ নবীজি ﷺ-কে নিকটাত্মীয়দের সতর্ক করার নির্দেশ দেওয়া হয় এবং তিনি গোত্রকে একত্র করেন, তখন তাঁদের মধ্যে একমাত্র আলীই তাঁর পাশে দাঁড়িয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "The Night of the Bed", bn: "বিছানার সেই রাত" },
        p: [
          {
            en: "On the night the Quraysh surrounded the Prophet's house intending to kill him, Ali lay down in his bed and wrapped himself in his cloak so the watchers would think he was still inside. It was a calculated risk of his own life, and he took it as a young man. In the morning, when the plot failed, he stayed behind in Makkah for several days.",
            bn: "যে রাতে কুরাইশ নবীজি ﷺ-কে হত্যার উদ্দেশ্যে তাঁর ঘর ঘিরে রেখেছিল, সেই রাতে আলী তাঁর বিছানায় শুয়ে চাদর মুড়ি দিয়ে থাকেন, যাতে পাহারাদাররা মনে করে তিনি ভেতরেই আছেন। এটি ছিল নিজের জীবনের হিসাব করা ঝুঁকি, আর তা তিনি নিয়েছিলেন তরুণ বয়সে। সকালে ষড়যন্ত্র ব্যর্থ হলে তিনি আরও কয়েক দিন মক্কায় থেকে যান।",
          },
          {
            en: "He stayed to return the deposits people had left with the Prophet ﷺ for safekeeping, since even those plotting his death still trusted him with their valuables. Only when every trust was handed back did Ali set out on foot for Madinah. The detail is worth pausing on: the migration was not complete until the property of enemies had been returned to them.",
            bn: "তিনি থেকে গিয়েছিলেন সেই আমানতগুলো ফিরিয়ে দিতে, যা মানুষ নিরাপদে রাখার জন্য নবীজি ﷺ-এর কাছে গচ্ছিত রেখেছিল—কারণ যারা তাঁকে হত্যার ষড়যন্ত্র করছিল, তারাও নিজেদের মূল্যবান জিনিস তাঁর কাছেই রাখত। প্রতিটি আমানত ফেরত দেওয়ার পরই আলী পায়ে হেঁটে মদিনার পথে রওনা হন। বিষয়টি একটু থেমে ভাববার মতো: শত্রুদের সম্পদ তাদের কাছে ফিরিয়ে না দেওয়া পর্যন্ত হিজরত সম্পূর্ণ হয়নি।",
          },
        ],
      },
      {
        h: { en: "Standard-Bearer and Son-in-Law", bn: "পতাকাবাহী ও জামাতা" },
        p: [
          {
            en: "In Madinah he married Fatimah (RA), selling his armour to provide the dower, and their household became the line through which the Prophet's descendants continue. He fought at Badr as one of the three who came forward for single combat, was wounded at Uhud, and stood at the Trench. The Prophet ﷺ counted him among the People of the Cloak when 33:33 was revealed, and took him as one of the party for the mutual imprecation described in 3:61.",
            bn: "মদিনায় তিনি ফাতিমা (রাঃ)-কে বিয়ে করেন, মোহরের অর্থ জোগাতে নিজের বর্ম বিক্রি করে দেন; আর তাঁদের ঘর থেকেই চলে আসছে নবীবংশের ধারা। বদরে তিনি দ্বন্দ্বযুদ্ধে অগ্রসর হওয়া তিনজনের একজন ছিলেন, উহুদে আহত হন এবং খন্দকে অবিচল থাকেন। 33:33 নাজিল হলে নবীজি ﷺ তাঁকে ‘আহলে কিসা’র অন্তর্ভুক্ত করেন, আর 3:61-এ বর্ণিত মুবাহালার দলে তিনি তাঁকে সঙ্গে নেন।",
          },
          {
            en: "At Khaybar the Prophet ﷺ said he would give the banner to a man who loved God and His Messenger and whom they loved, and called for Ali, whose eyes were inflamed; he wiped them and they were healed, and the fortress fell. When the army left for Tabuk and Ali was placed over Madinah, he was told: are you not content to be to me as Harun was to Musa (AS), except that there is no prophet after me.",
            bn: "খায়বারে নবীজি ﷺ বলেছিলেন, আগামীকাল তিনি পতাকা দেবেন এমন একজনকে যে আল্লাহ ও তাঁর রাসুলকে ভালোবাসে এবং যাকে তাঁরাও ভালোবাসেন; তারপর তিনি আলীকে ডাকলেন, যাঁর চোখ তখন প্রদাহে আক্রান্ত। নবীজি ﷺ চোখে হাত বুলিয়ে দিলেন, তা সেরে গেল, আর দুর্গের পতন হলো। তাবুকের অভিযানে সেনাবাহিনী রওনা হলে আলীকে মদিনার দায়িত্বে রাখা হয় এবং বলা হয়: তুমি কি এতে সন্তুষ্ট নও যে তুমি আমার কাছে তেমন, যেমন মুসা (আঃ)-এর কাছে হারুন (আঃ) ছিলেন—তবে আমার পরে কোনো নবী নেই।",
          },
        ],
      },
      {
        h: { en: "Knowledge and Judgement", bn: "জ্ঞান ও বিচারবুদ্ধি" },
        p: [
          {
            en: "He was among the scribes of revelation and wrote out the treaty at Hudaybiyah with his own hand. Umar (RA) said plainly that Ali was the best judge among them, and questions of inheritance, oaths and difficult claims were referred to him throughout the caliphates that preceded his own. He also washed and prepared the Prophet's body for burial.",
            bn: "তিনি ছিলেন ওহি লেখকদের একজন এবং হুদাইবিয়ার সন্ধিপত্র নিজ হাতে লিখেছিলেন। উমর (রাঃ) স্পষ্টভাবেই বলতেন, তাঁদের মধ্যে আলীই শ্রেষ্ঠ বিচারক; তাঁর নিজের খিলাফতের আগের খলিফাদের আমলেও উত্তরাধিকার, শপথ ও জটিল দাবির প্রশ্নগুলো তাঁর কাছেই পাঠানো হতো। নবীজি ﷺ-এর দেহ গোসল করানো ও দাফনের প্রস্তুতিও তিনিই সম্পন্ন করেন।",
          },
          {
            en: "Muslims agree in honouring him and differ over the question of succession: Shia Muslims hold that he was designated to lead the community immediately after the Prophet ﷺ, while Sunni Muslims hold that the community's choice of Abu Bakr (RA) was valid and that Ali (RA) accepted it. This article states the agreed record and leaves the disputed question named as disputed.",
            bn: "মুসলিমরা তাঁকে সম্মান করার ব্যাপারে একমত, আর উত্তরাধিকারের প্রশ্নে ভিন্নমত পোষণ করেন: শিয়া মুসলিমরা মনে করেন নবীজি ﷺ-এর পরপরই উম্মাহর নেতৃত্বের জন্য তিনি মনোনীত ছিলেন, আর সুন্নি মুসলিমরা মনে করেন আবু বকর (রাঃ)-কে বেছে নেওয়ার সিদ্ধান্তটি বৈধ ছিল এবং আলী (রাঃ) তা মেনে নিয়েছিলেন। এই লেখায় স্বীকৃত ঘটনাবলি উল্লেখ করা হলো, আর বিতর্কিত প্রশ্নটিকে বিতর্কিত হিসেবেই চিহ্নিত রাখা হলো।",
          },
        ],
      },
      {
        h: { en: "A Caliphate in Storm", bn: "ঝড়ের ভেতরে খিলাফত" },
        p: [
          {
            en: "He was given the pledge in Madinah after Uthman (RA) was killed, and inherited a community already torn. He moved the seat of government to Kufa, closer to the armies and the frontier. His caliphate lasted less than five years and almost all of it was spent trying to hold together people who agreed on the faith and disagreed on what justice now required.",
            bn: "উসমান (রাঃ)-এর হত্যাকাণ্ডের পর মদিনায় তাঁর হাতে বাইআত হয়, আর তিনি উত্তরাধিকার হিসেবে পান ইতিমধ্যেই বিভক্ত এক উম্মাহ। তিনি রাজধানী কুফায় স্থানান্তর করেন, যা সেনাবাহিনী ও সীমান্তের কাছাকাছি। তাঁর খিলাফত পাঁচ বছরও পূর্ণ হয়নি, আর তার প্রায় পুরোটাই কেটেছে এমন মানুষদের একত্রে ধরে রাখার চেষ্টায়, যাঁরা ঈমানে একমত ছিলেন কিন্তু ন্যায়বিচার এখন কী দাবি করে তা নিয়ে দ্বিমত ছিলেন।",
          },
          {
            en: "On the reading of the majority of Ahl as-Sunnah the disagreement was over timing and method, not over right and wrong: some insisted that the killers of Uthman (RA) be punished at once, while Ali (RA) held that the state must first be stabilised before retribution could be enforced against men embedded in the army. From that came the Battle of the Camel, in which Talhah (RA) was struck down on the field and az-Zubayr (RA) was killed after he had left it, and then Siffin against Mu'awiyah (RA), and after the arbitration the Kharijites broke away and declared both sides unbelievers.",
            bn: "আহলুস সুন্নাহর অধিকাংশের পাঠ অনুযায়ী মতভেদটি ছিল সময় ও পদ্ধতি নিয়ে, ন্যায়-অন্যায় নিয়ে নয়: কেউ কেউ দাবি করছিলেন উসমান (রাঃ)-এর হত্যাকারীদের এখনই শাস্তি দিতে হবে, আর আলী (রাঃ) মনে করতেন সেনাবাহিনীর ভেতরে মিশে থাকা এই মানুষদের বিরুদ্ধে কিসাস কার্যকর করার আগে রাষ্ট্রকে স্থিতিশীল করা দরকার। এ থেকেই ঘটে উটের যুদ্ধ, যাতে তালহা (রাঃ) ময়দানেই আহত হয়ে নিহত হন, আর যুবাইর (রাঃ) ময়দান ছেড়ে চলে যাওয়ার পর নিহত হন; এরপর মুয়াবিয়া (রাঃ)-এর বিরুদ্ধে সিফফিন, আর সালিশির পর খারিজিরা বিচ্ছিন্ন হয়ে উভয় পক্ষকেই কাফির ঘোষণা করে।",
          },
        ],
      },
      {
        h: { en: "Killed in the Mosque", bn: "মসজিদে নিহত" },
        p: [
          {
            en: "He fought the Kharijites at Nahrawan and afterwards forbade the killing of any of them who did not take up arms. It was a Kharijite, Abd ar-Rahman ibn Muljam, who struck him with a poisoned sword as he came to the dawn prayer in the mosque of Kufa in Ramadan of the fortieth year after the Hijra. He lived two days, instructing that his assailant be held and dealt with justly and not mutilated.",
            bn: "নাহরাওয়ানে তিনি খারিজিদের বিরুদ্ধে যুদ্ধ করেন এবং পরে নির্দেশ দেন, তাদের মধ্যে যারা অস্ত্র ধরেনি তাদের কাউকে হত্যা করা যাবে না। খারিজিদেরই একজন—আবদুর রহমান ইবনে মুলজিম—হিজরি চল্লিশ সালের রমজানে কুফার মসজিদে ফজরের নামাজে আসার সময় বিষমাখা তরবারি দিয়ে তাঁকে আঘাত করে। তিনি দুই দিন বেঁচে ছিলেন এবং নির্দেশ দিয়ে যান, আঘাতকারীকে আটক রেখে ন্যায়সংগতভাবে বিচার করা হোক, অঙ্গহানি যেন না করা হয়।",
          },
          {
            en: "He left almost no property. His speeches and letters shaped Arabic prose for centuries, and both major branches of the community trace much of their learning to him. Of the whole generation that lived through those wars, the counsel most often quoted is the prayer of 59:10, that God forgive those who came before in faith and leave no rancour in the hearts of those who follow, and the command in 49:9-10 to make peace between believers who fight.",
            bn: "তিনি প্রায় কোনো সম্পত্তিই রেখে যাননি। তাঁর ভাষণ ও পত্রাবলি শতাব্দীজুড়ে আরবি গদ্যকে গড়ে দিয়েছে, আর উম্মাহর উভয় প্রধান ধারা নিজেদের জ্ঞানের বড় অংশের সূত্র তাঁর কাছেই খুঁজে পায়। সেই যুদ্ধগুলোর ভেতর দিয়ে যাওয়া গোটা প্রজন্ম সম্পর্কে সবচেয়ে বেশি উদ্ধৃত হয় 59:10-এর দোয়া—হে আমাদের প্রতিপালক, আমাদের ও ঈমানে অগ্রগামী আমাদের ভাইদের ক্ষমা করুন এবং আমাদের অন্তরে বিদ্বেষ রাখবেন না—এবং 49:9-10-এর সেই নির্দেশ, লড়াইরত ঈমানদারদের মধ্যে মীমাংসা করে দাও।",
          },
        ],
      },
    ],
  },
  khadijah_bint_khuwaylid: {
    sections: [
      {
        h: { en: "A Woman of Standing", bn: "মর্যাদাসম্পন্না নারী" },
        p: [
          {
            en: "Khadijah bint Khuwaylid belonged to Banu Asad, a respected clan of Quraysh, and by the time Makkah knew her name she was managing one of the city's larger trading concerns in her own right. Twice widowed, she did not travel with her caravans but hired men on commission to take her goods north to Syria and south to Yemen, and she judged those men closely before entrusting them with anything.",
            bn: "খাদিজা বিনতে খুওয়াইলিদ ছিলেন কুরাইশের সম্মানিত গোত্র বনু আসাদের সন্তান, আর মক্কা যখন তাঁর নাম জানল ততদিনে তিনি নিজের নামেই শহরের অন্যতম বড় বাণিজ্য পরিচালনা করছেন। দুইবার বিধবা হওয়া এই নারী নিজে কাফেলার সঙ্গে যেতেন না; বরং কমিশনের বিনিময়ে লোক নিয়োগ করতেন, যারা তাঁর পণ্য উত্তরে সিরিয়া ও দক্ষিণে ইয়েমেনে নিয়ে যেত—এবং কিছু হাতে তুলে দেওয়ার আগে তিনি সেই মানুষদের ভালোভাবে যাচাই করে নিতেন।",
          },
          {
            en: "She hired the young Muhammad ﷺ for a journey to Syria because his reputation for honesty was already established in a city where that was rare. Her servant Maysarah returned with an account of his conduct on the road, and she sent a proposal of marriage through a friend. He was twenty-five, and the sources usually give her age as forty, though a minority report makes her younger. He remained married to her alone for as long as she lived.",
            bn: "সিরিয়ার একটি সফরের জন্য তিনি তরুণ মুহাম্মাদ ﷺ-কে নিয়োগ করেন, কারণ এমন এক শহরে যেখানে সততা ছিল দুর্লভ, সেখানে তাঁর সততার সুনাম আগেই প্রতিষ্ঠিত ছিল। তাঁর কর্মচারী মাইসারা পথের আচরণের বিবরণ নিয়ে ফিরে এলে তিনি এক বান্ধবীর মাধ্যমে বিবাহের প্রস্তাব পাঠান। তখন তাঁর বয়স পঁচিশ, আর সূত্রগুলোতে সাধারণত খাদিজা (রাঃ)-এর বয়স চল্লিশ বলা হয়; যদিও একটি সংখ্যালঘু বর্ণনায় তাঁকে এর চেয়ে কমবয়সী বলা হয়েছে। তিনি বেঁচে থাকা পর্যন্ত নবীজি ﷺ আর কাউকে বিয়ে করেননি।",
          },
        ],
      },
      {
        h: { en: "He Will Never Disgrace You", bn: "আল্লাহ কখনো আপনাকে অপমানিত করবেন না" },
        p: [
          {
            en: "Their marriage lasted about twenty-five years and produced all of his children but one. She knew his habit of withdrawing to the cave of Hira, and she provisioned those retreats herself. So when he came down the mountain after the first words of 96:1-5 were given to him, shaking and asking to be covered, she was the one person on earth already prepared for something to happen to him.",
            bn: "তাঁদের দাম্পত্য চলে প্রায় পঁচিশ বছর, আর একজন ছাড়া নবীজি ﷺ-এর সব সন্তানই তাঁর গর্ভজাত। হেরা গুহায় গিয়ে নবীজির নিভৃতে থাকার অভ্যাস তিনি জানতেন এবং সেই নির্জনবাসের পাথেয় নিজেই জোগাতেন। তাই 96:1-5-এর প্রথম বাণী লাভের পর নবীজি ﷺ যখন কাঁপতে কাঁপতে পাহাড় থেকে নেমে এসে নিজেকে ঢেকে দিতে বললেন, তখন পৃথিবীতে একমাত্র তিনিই ছিলেন যিনি এমন কিছু ঘটার জন্য আগে থেকেই প্রস্তুত ছিলেন।",
          },
          {
            en: "She covered him, and when he told her he feared for himself she answered with an argument, not a comfort: never, by God, God will never disgrace you. You keep the ties of kinship, you carry the burden of the weak, you give to the destitute, you honour the guest and you help those struck by calamity. She reasoned from his character to God's dealing with him, and she was the first human being to believe.",
            bn: "তিনি তাঁকে ঢেকে দিলেন, আর যখন নবীজি ﷺ বললেন তিনি নিজের জন্য আশঙ্কা করছেন, তখন খাদিজা (রাঃ) সান্ত্বনা নয়, যুক্তি দিয়ে উত্তর দিলেন: কখনোই নয়, আল্লাহর কসম, আল্লাহ কখনো আপনাকে অপমানিত করবেন না। আপনি আত্মীয়তার বন্ধন রক্ষা করেন, দুর্বলের ভার বহন করেন, নিঃস্বকে দান করেন, অতিথিকে সম্মান করেন এবং বিপদগ্রস্তকে সাহায্য করেন। তিনি নবীজির চরিত্র থেকে যুক্তি টেনে আল্লাহর আচরণ নিয়ে সিদ্ধান্তে এলেন, আর মানুষের মধ্যে সর্বপ্রথম ঈমান আনলেন।",
          },
          {
            en: "She then took him to her cousin Waraqah ibn Nawfal, an old blind Christian who had studied the earlier scriptures. Waraqah said that what had come to him was the same messenger that came to Musa (AS), and warned him that his people would drive him out. Not long after, the revelation continued with 74:1-5 and the mission began in earnest.",
            bn: "এরপর তিনি নবীজি ﷺ-কে নিয়ে গেলেন তাঁর চাচাতো ভাই ওয়ারাকা ইবনে নাওফালের কাছে, যিনি ছিলেন এক বৃদ্ধ অন্ধ খ্রিস্টান এবং পূর্ববর্তী কিতাব অধ্যয়ন করেছিলেন। ওয়ারাকা বললেন, যিনি তাঁর কাছে এসেছেন তিনি সেই একই দূত যিনি মুসা (আঃ)-এর কাছে এসেছিলেন; আর সতর্ক করলেন যে তাঁর সম্প্রদায় তাঁকে বের করে দেবে। এর কিছু পরেই 74:1-5 নাজিল হয় এবং দাওয়াতের কাজ পুরোদমে শুরু হয়।",
          },
        ],
      },
      {
        h: { en: "Wealth Spent on a Message", bn: "বার্তার পেছনে ব্যয়িত সম্পদ" },
        p: [
          {
            en: "From that day her fortune stopped being a family estate and became the working capital of a religion. It fed the earliest believers, many of them slaves and poor men with no protection, and it bought freedom and food and shelter for people who had nothing to give back. She asked for no acknowledgement of it and none is recorded in her lifetime.",
            bn: "সেদিন থেকে তাঁর সম্পদ আর কেবল পারিবারিক সম্পত্তি রইল না, হয়ে উঠল একটি দ্বীনের কর্মচালিকা পুঁজি। তা দিয়ে খাওয়ানো হতো প্রথম যুগের ঈমানদারদের, যাঁদের অনেকেই ছিলেন দাস কিংবা রক্ষাহীন দরিদ্র; তা দিয়ে কেনা হতো মুক্তি, খাদ্য ও আশ্রয়—এমন মানুষের জন্য, যাঁদের প্রতিদান দেওয়ার কিছুই ছিল না। তিনি এর জন্য কোনো স্বীকৃতি চাননি, আর তাঁর জীবদ্দশায় কোথাও তা লিপিবদ্ধও হয়নি।",
          },
          {
            en: "The words of 93:6-8, which remind the Prophet ﷺ that God found him poor and enriched him, are read by the commentators against this background. The enrichment came through a marriage, and the wealth was returned to God through the same marriage. By the end of it she owned very little of what she had begun with.",
            bn: "93:6-8-এর বাণী—যেখানে নবীজি ﷺ-কে স্মরণ করিয়ে দেওয়া হয়েছে যে আল্লাহ তাঁকে অভাবগ্রস্ত পেয়ে সচ্ছল করেছেন—মুফাসসিরগণ এই প্রেক্ষাপটেই পড়েন। সচ্ছলতা এসেছিল একটি বিবাহের মাধ্যমে, আর সেই সম্পদ আল্লাহর পথে ফিরিয়ে দেওয়া হয়েছিল সেই একই বিবাহের মাধ্যমেই। জীবনের শেষে শুরু করার সময় যা ছিল, তার সামান্যই তাঁর হাতে অবশিষ্ট ছিল।",
          },
        ],
      },
      {
        h: { en: "Three Years in the Valley", bn: "উপত্যকার তিন বছর" },
        p: [
          {
            en: "When Quraysh could neither silence the Prophet ﷺ nor persuade Banu Hashim to surrender him, they imposed a total boycott: no trade, no marriage, no dealings of any kind. The clan withdrew into a narrow valley on the edge of Makkah and stayed there for about three years. Food entered only by smuggling, and the sources record the sound of children crying from hunger carrying out of the ravine.",
            bn: "কুরাইশ যখন নবীজি ﷺ-কে থামাতে পারল না, আবার বনু হাশিমকেও তাঁকে সমর্পণ করতে রাজি করাতে পারল না, তখন তারা পূর্ণ বয়কট আরোপ করল: কোনো বেচাকেনা নয়, কোনো বিবাহ নয়, কোনো লেনদেন নয়। গোত্রটি মক্কার প্রান্তের এক সংকীর্ণ উপত্যকায় আশ্রয় নেয় এবং প্রায় তিন বছর সেখানেই থাকে। খাদ্য ঢুকত কেবল গোপনে, আর সূত্রগুলো লিখেছে, ক্ষুধায় শিশুদের কান্নার শব্দ গিরিপথ ছাড়িয়ে বাইরে ভেসে আসত।",
          },
          {
            en: "Khadijah (RA) went in with them. She was an elderly woman who had lived her whole life in comfort, and she spent those years in a stone shelter on scarce food. The boycott was eventually broken by men of Quraysh who were ashamed of it, but her health did not recover. She died within months of leaving the valley, in the tenth year of the mission.",
            bn: "খাদিজা (রাঃ) তাঁদের সঙ্গেই ভেতরে গেলেন। তিনি ছিলেন বৃদ্ধা, সারাজীবন কাটিয়েছেন স্বাচ্ছন্দ্যে; সেই বছরগুলো কাটল পাথরের আশ্রয়ে, স্বল্প খাবারে। কুরাইশেরই কিছু মানুষ লজ্জিত হয়ে অবশেষে বয়কট ভেঙে দেন, কিন্তু তাঁর স্বাস্থ্য আর ফিরে আসেনি। উপত্যকা থেকে বেরিয়ে আসার কয়েক মাসের মধ্যেই, নবুয়তের দশম বছরে, তিনি ইন্তেকাল করেন।",
          },
        ],
      },
      {
        h: { en: "The Year of Sorrow", bn: "শোকের বছর" },
        p: [
          {
            en: "Abu Talib died in the same period. The Prophet ﷺ lost in one year the uncle who shielded him from the outside and the wife who steadied him within, and the year is called the Year of Sorrow for that reason. Makkah turned openly hostile after it; he went to Ta'if seeking a hearing and was driven out with stones.",
            bn: "একই সময়ে আবু তালিবও ইন্তেকাল করেন। এক বছরের মধ্যে নবীজি ﷺ হারালেন সেই চাচাকে যিনি বাইরের আঘাত থেকে তাঁকে আড়াল করতেন, আর সেই স্ত্রীকে যিনি ভেতর থেকে তাঁকে স্থির রাখতেন—এ কারণেই বছরটির নাম ‘আমুল হুজন’, শোকের বছর। এরপর মক্কা প্রকাশ্যে বৈরী হয়ে ওঠে; তিনি কথা শোনানোর আশায় তায়েফে যান এবং পাথর ছুড়ে তাঁকে তাড়িয়ে দেওয়া হয়।",
          },
          {
            en: "Bukhari records that Jibril (AS) came to the Prophet ﷺ and said that Khadijah (RA) was approaching with a vessel of food or drink, and that he should convey to her the greeting of peace from her Lord and from him, and give her glad tidings of a house in Paradise of hollowed pearl, in which there would be no noise and no weariness. Few human beings have received a greeting of peace from God delivered by name.",
            bn: "বুখারিতে বর্ণিত, জিবরিল (আঃ) নবীজি ﷺ-এর কাছে এসে বললেন, খাদিজা (রাঃ) খাবার বা পানীয়ের পাত্র নিয়ে আসছেন; আপনি তাঁকে তাঁর প্রতিপালকের পক্ষ থেকে এবং আমার পক্ষ থেকে সালাম পৌঁছে দিন, আর জান্নাতে মুক্তার তৈরি একটি ঘরের সুসংবাদ দিন, যেখানে কোনো কোলাহল থাকবে না, কোনো ক্লান্তিও নয়। নাম ধরে আল্লাহর পক্ষ থেকে সালাম পাওয়ার সৌভাগ্য খুব কম মানুষেরই হয়েছে।",
          },
        ],
      },
      {
        h: { en: "Remembered to the End", bn: "শেষ পর্যন্ত স্মরণে" },
        p: [
          {
            en: "He never stopped mentioning her. He would slaughter a sheep and send portions to her friends, and he would speak of her so often that Aishah (RA) said she was never jealous of any of his wives as she was of a woman she had never met. Once, when she pressed the point, he answered that God had not given him better than her.",
            bn: "তিনি কখনো তাঁর কথা বলা বন্ধ করেননি। ছাগল জবাই করে তার অংশ তিনি খাদিজা (রাঃ)-এর বান্ধবীদের কাছে পাঠাতেন, আর এত বেশি তাঁর কথা বলতেন যে আয়িশা (রাঃ) বলেছেন, নবীজির কোনো স্ত্রীর প্রতি তাঁর এমন ঈর্ষা হয়নি যেমন হয়েছিল এমন একজনের প্রতি যাঁকে তিনি কখনো দেখেননি। একবার তিনি এ নিয়ে জোর দিলে নবীজি ﷺ উত্তর দেন, আল্লাহ আমাকে তাঁর চেয়ে উত্তম কাউকে দেননি।",
          },
          {
            en: "The reason he gave is the summary of her life: she believed in him when people rejected him, she trusted him when they called him a liar, she supported him with her wealth when they denied him everything, and God gave him children through her. She never saw the Hijra, never saw Madinah, never saw a mosque built or an army returning in victory. What she saw was one man saying something impossible, and she staked everything she owned on it.",
            bn: "তিনি যে কারণ দিয়েছিলেন, তা-ই তাঁর জীবনের সারসংক্ষেপ: মানুষ যখন তাঁকে প্রত্যাখ্যান করেছে তখন তিনি বিশ্বাস করেছেন, মানুষ যখন তাঁকে মিথ্যাবাদী বলেছে তখন তিনি আস্থা রেখেছেন, মানুষ যখন সবকিছু থেকে বঞ্চিত করেছে তখন নিজের সম্পদ দিয়ে তিনি পাশে দাঁড়িয়েছেন, আর আল্লাহ তাঁর মাধ্যমেই নবীজিকে সন্তান দিয়েছেন। তিনি হিজরত দেখেননি, মদিনা দেখেননি, মসজিদ নির্মিত হতে বা বিজয়ী বাহিনী ফিরতে দেখেননি। তিনি দেখেছিলেন কেবল একজন মানুষকে, যিনি অসম্ভব এক কথা বলছেন—আর তাতেই তিনি নিজের সর্বস্ব বাজি রেখেছিলেন।",
          },
        ],
      },
    ],
  },
  aishah_bint_abi_bakr: {
    sections: [
      {
        h: { en: "Born Into the Faith", bn: "ঈমানের ঘরেই জন্ম" },
        p: [
          {
            en: "Aishah bint Abi Bakr was born in Makkah into a household that was already Muslim. She used to say that she never knew her parents except practising this religion, and that not a day passed without the Prophet ﷺ visiting them at one end of the day or the other. Her earliest memories were of persecution, of her father's departure, and of the migration to Madinah.",
            bn: "আয়িশা বিনতে আবু বকর (রাঃ) মক্কায় জন্মগ্রহণ করেন এমন এক ঘরে যা তখনই মুসলিম। তিনি বলতেন, আমি আমার বাবা-মাকে কখনো এই দ্বীন পালন করা ছাড়া দেখিনি; আর এমন একটি দিনও যেত না যেদিন নবীজি ﷺ দিনের কোনো না কোনো প্রান্তে আমাদের কাছে আসতেন না। তাঁর সবচেয়ে পুরোনো স্মৃতিগুলো নির্যাতনের, পিতার হিজরতের এবং মদিনায় চলে আসার।",
          },
          {
            en: "Her marriage to the Prophet ﷺ was contracted in Makkah and she came to his house in Madinah. Her chamber adjoined the mosque, so she lived at the exact point where the private life of the Prophet ﷺ and the public life of the community met. That position, more than anything else, explains the shape of her later scholarship.",
            bn: "নবীজি ﷺ-এর সঙ্গে তাঁর বিবাহ সম্পন্ন হয় মক্কায়, আর তিনি মদিনায় নবীজির ঘরে আসেন। তাঁর কক্ষটি ছিল মসজিদ ঘেঁষে, ফলে তিনি ঠিক সেই বিন্দুতে বাস করতেন যেখানে নবীজি ﷺ-এর ব্যক্তিজীবন আর উম্মাহর সামষ্টিক জীবন মিলিত হয়েছে। অন্য যেকোনো কিছুর চেয়ে এই অবস্থানই তাঁর পরবর্তী জ্ঞানচর্চার রূপ ব্যাখ্যা করে।",
          },
        ],
      },
      {
        h: { en: "The Teacher of the Companions", bn: "সাহাবিদের শিক্ষিকা" },
        p: [
          {
            en: "She narrated more than two thousand hadith, which places her among the seven most prolific narrators in Islam and makes her the only woman among them. Her transmissions cover prayer, purification, fasting, pilgrimage, inheritance, marriage and divorce, along with a great deal of the Prophet's conduct inside his own home, which nobody outside the household was in a position to report at all.",
            bn: "তিনি দুই হাজারেরও বেশি হাদিস বর্ণনা করেছেন, যা তাঁকে ইসলামের সাতজন সর্বাধিক বর্ণনাকারীর কাতারে বসিয়েছে—আর তাঁদের মধ্যে তিনিই একমাত্র নারী। তাঁর বর্ণনাগুলো ছড়িয়ে আছে নামাজ, পবিত্রতা, রোজা, হজ, উত্তরাধিকার, বিবাহ ও তালাকের বিধানে, এবং নবীজি ﷺ-এর গৃহাভ্যন্তরীণ আচরণের বিশাল এক অংশে—যা ঘরের বাইরের কেউ বর্ণনা করতে পারতেন না।",
          },
          {
            en: "Senior Companions came to her with their difficulties. Abu Musa al-Ash'ari (RA) said that they never faced a problem and asked Aishah (RA) about it without finding knowledge of it with her. Her students included Urwah ibn az-Zubayr and al-Qasim ibn Muhammad, both of them among the leading jurists of the following generation, and Masruq and Amrah bint Abd ar-Rahman, through whom much of her teaching entered the schools of law.",
            bn: "প্রবীণ সাহাবিগণ নিজেদের জটিলতা নিয়ে তাঁর কাছে আসতেন। আবু মুসা আল-আশআরি (রাঃ) বলেছেন, আমরা এমন কোনো সমস্যায় পড়িনি যে বিষয়ে আয়িশা (রাঃ)-কে জিজ্ঞেস করেছি আর তাঁর কাছে তার জ্ঞান পাইনি। তাঁর ছাত্রদের মধ্যে ছিলেন উরওয়া ইবনুয যুবাইর ও কাসিম ইবনে মুহাম্মাদ—দুজনই পরবর্তী প্রজন্মের শীর্ষস্থানীয় ফকিহ—এবং মাসরুক ও আমরা বিনতে আবদির রহমান, যাঁদের মাধ্যমে তাঁর শিক্ষার বড় অংশ ফিকহের মাযহাবগুলোতে প্রবেশ করে।",
          },
        ],
      },
      {
        h: { en: "She Corrected the Record", bn: "তিনি সংশোধন করতেন" },
        p: [
          {
            en: "Her scholarship was critical, not merely retentive. When she was told of a report that the dead are punished for the weeping of the living, she said the narrator had misremembered the setting, and answered from the Quran: no bearer of burdens bears the burden of another, in 35:18. She used the same method repeatedly, weighing a report against the Book and against what she knew of the circumstances.",
            bn: "তাঁর জ্ঞানচর্চা ছিল যাচাইমূলক, কেবল মুখস্থ রাখার নয়। মৃতকে জীবিতদের কান্নার কারণে শাস্তি দেওয়া হয়—এমন একটি বর্ণনার কথা শুনে তিনি বললেন, বর্ণনাকারী প্রসঙ্গটি ঠিকভাবে মনে রাখতে পারেননি; আর জবাব দিলেন কুরআন থেকে: কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না—35:18। এই পদ্ধতিই তিনি বারবার প্রয়োগ করেছেন, বর্ণনাকে কিতাবের সঙ্গে এবং প্রেক্ষাপট সম্পর্কে নিজের জানার সঙ্গে মিলিয়ে দেখে।",
          },
          {
            en: "Rulings still practised daily came through her. On one journey a necklace of hers was lost, the search delayed the army in a place with no water, and the verse permitting purification with clean earth was given, in 5:6. Usayd ibn Hudayr (RA) said to her afterwards that this was not the first blessing the family of Abu Bakr had brought to the Muslims.",
            bn: "আজও প্রতিদিন পালিত অনেক বিধান তাঁর মাধ্যমেই এসেছে। এক সফরে তাঁর একটি হার হারিয়ে যায়, খোঁজাখুঁজিতে বাহিনী এমন এক জায়গায় আটকে পড়ে যেখানে পানি ছিল না, আর তখনই পবিত্র মাটি দিয়ে তায়াম্মুমের অনুমতির আয়াত নাজিল হয়—5:6। উসাইদ ইবনে হুদাইর (রাঃ) পরে তাঁকে বলেছিলেন, মুসলিমদের জন্য আবু বকরের পরিবার থেকে আসা এটিই প্রথম বরকত নয়।",
          },
        ],
      },
      {
        h: { en: "The Month of the Slander", bn: "অপবাদের সেই মাস" },
        p: [
          {
            en: "Returning from an expedition she went out to look for a lost necklace and the caravan moved off without realising her howdah was empty. Safwan ibn al-Mu'attal (RA), who had fallen behind the army, found her, said nothing beyond the words of return to God, and led her camel until they reached the troops. On that, men in Madinah built a slander, and the head of the hypocrites spread it.",
            bn: "এক অভিযান থেকে ফেরার পথে তিনি হারিয়ে যাওয়া একটি হার খুঁজতে বেরিয়েছিলেন, আর কাফেলা তাঁর হাওদা খালি আছে বুঝতে না পেরেই রওনা হয়ে যায়। সাফওয়ান ইবনুল মুআত্তাল (রাঃ), যিনি বাহিনীর পেছনে পড়ে ছিলেন, তাঁকে দেখতে পান, ‘ইন্না লিল্লাহ’ ছাড়া আর কিছুই বলেননি, এবং সৈন্যদের কাছে না পৌঁছা পর্যন্ত তাঁর উটের রশি ধরে চলেন। এরই ওপর ভিত্তি করে মদিনার কিছু মানুষ অপবাদ গড়ে তোলে, আর মুনাফিকদের প্রধান তা ছড়িয়ে দেয়।",
          },
          {
            en: "She fell ill and knew nothing of it for weeks. When she learned, she wept until she thought her liver would burst, and went to her parents' house. Her narration of that month, preserved in full in the Sahih collections, is one of the most detailed first-person accounts in early Islamic literature, and she does not spare herself in it: she describes her fear, her anger and her sense of abandonment plainly.",
            bn: "তিনি অসুস্থ হয়ে পড়েছিলেন এবং কয়েক সপ্তাহ ধরে এ ব্যাপারে কিছুই জানতেন না। জানার পর তিনি এমনভাবে কেঁদেছিলেন যে মনে হচ্ছিল কলিজা ফেটে যাবে, আর চলে গেলেন বাবা-মায়ের ঘরে। সেই মাসের ঘটনা নিয়ে তাঁর বর্ণনা—সহিহ গ্রন্থগুলোতে যা পূর্ণাঙ্গভাবে সংরক্ষিত—প্রাথমিক ইসলামি সাহিত্যের সবচেয়ে বিস্তারিত আত্মকথনগুলোর একটি; আর সেখানে তিনি নিজেকে রেয়াত করেননি: নিজের ভয়, ক্ষোভ ও একাকিত্বের অনুভূতি তিনি স্পষ্টভাবেই বলেছেন।",
          },
          {
            en: "When the Prophet ﷺ finally came and asked her to repent if she had done wrong, she asked her father to answer for her, and he said he did not know what to say; her mother said the same. Reaching for the words of Ya'qub (AS), she could not recall his name, so she said the father of Yusuf (AS): beautiful patience, and God alone is the one whose help is sought, quoting 12:18. Before the gathering broke up, ten verses were revealed, 24:11-20, declaring her innocence.",
            bn: "অবশেষে নবীজি ﷺ এসে যখন বললেন, অন্যায় করে থাকলে তওবা করো, তখন তিনি পিতাকে তাঁর পক্ষ থেকে জবাব দিতে বললেন; পিতা বললেন, আমি কী বলব বুঝতে পারছি না। মাও একই কথা বললেন। এরপর ইয়াকুব (আঃ)-এর কথাগুলো বলতে গিয়ে তিনি তাঁর নামটিই মনে করতে পারলেন না, তাই বললেন—ইউসুফ (আঃ)-এর পিতা: সুন্দর ধৈর্য, আর আল্লাহই একমাত্র সাহায্যস্থল—উদ্ধৃত করলেন 12:18। মজলিস ভাঙার আগেই দশটি আয়াত নাজিল হলো, 24:11-20, যা তাঁর নির্দোষিতা ঘোষণা করল।",
          },
        ],
      },
      {
        h: { en: "How the Quran Handled It", bn: "কুরআন যেভাবে বিষয়টি নিল" },
        p: [
          {
            en: "The verses do not merely clear a name. They open by telling the believers that this affair, which felt like ruin, is good for them, and then they legislate: do not repeat what you have not verified, do not carry a rumour on your tongues while treating it as a light matter, and require four witnesses before an accusation of this kind is heard at all.",
            bn: "আয়াতগুলো কেবল একটি নাম নিষ্কলঙ্ক করে না। শুরুতেই ঈমানদারদের বলা হয়, এই ঘটনা—যা ধ্বংস বলে মনে হচ্ছিল—তোমাদের জন্যই কল্যাণকর; এরপর বিধান দেওয়া হয়: যা যাচাই করোনি তা পুনরাবৃত্তি করো না, গুজবকে হালকা বিষয় ভেবে জিহ্বায় বয়ে বেড়িয়ো না, আর এ ধরনের অভিযোগ শোনার আগেই চারজন সাক্ষী দাবি করো।",
          },
          {
            en: "One consequence was immediate. Abu Bakr (RA) had been supporting a relative who joined in the slander and swore never to help him again; 24:22 asked whether they would not rather love that God forgive them, and he resumed the support at once. Aishah (RA) herself said afterwards that she had never thought God would reveal Quran about her, only that the Prophet ﷺ might see a dream clearing her.",
            bn: "একটি ফল দেখা গেল সঙ্গে সঙ্গেই। আবু বকর (রাঃ) এমন এক আত্মীয়কে সহায়তা করতেন যিনি অপবাদ রটনায় শামিল হয়েছিলেন, আর তিনি শপথ করেছিলেন আর কখনো সাহায্য করবেন না; 24:22 জিজ্ঞেস করল—তোমরা কি চাও না যে আল্লাহ তোমাদের ক্ষমা করুন? তিনি সঙ্গে সঙ্গে সহায়তা ফিরিয়ে দিলেন। আয়িশা (রাঃ) নিজে পরে বলেছেন, তিনি কখনো ভাবেননি তাঁকে নিয়ে কুরআন নাজিল হবে; কেবল আশা করেছিলেন নবীজি ﷺ হয়তো স্বপ্নে তাঁর নির্দোষিতা দেখবেন।",
          },
        ],
      },
      {
        h: { en: "Forty Years of Teaching", bn: "শিক্ষাদানের চল্লিশ বছর" },
        p: [
          {
            en: "The Prophet ﷺ died in her chamber and was buried there. She lived nearly half a century after him, refusing to remarry, teaching from behind a curtain to men and openly to women, issuing legal opinions, and correcting narrations that reached her in distorted form. The instruction in 33:34 to remember what is recited in the houses of the Prophet's wives describes what she spent her life doing.",
            bn: "নবীজি ﷺ তাঁরই কক্ষে ইন্তেকাল করেন এবং সেখানেই সমাহিত হন। তিনি এরপর প্রায় অর্ধশতাব্দী বেঁচে ছিলেন—আর বিয়ে করেননি, পর্দার আড়াল থেকে পুরুষদের এবং সরাসরি নারীদের শিক্ষা দিয়েছেন, ফতোয়া দিয়েছেন, আর বিকৃত রূপে তাঁর কাছে পৌঁছানো বর্ণনাগুলো সংশোধন করেছেন। 33:34-এ নবীপত্নীদের ঘরে যা তিলাওয়াত করা হয় তা স্মরণ রাখার যে নির্দেশ, তা-ই ছিল তাঁর সারাজীবনের কাজ।",
          },
          {
            en: "She was drawn into the conflict that followed the killing of Uthman (RA), going out to Basra to press for the pursuit of his killers, and the Battle of the Camel was fought there. Ali (RA) sent her back to Madinah under honourable escort. It is widely related, though the reports are contested, that she grieved over having gone out at all. She died in Madinah and was buried in al-Baqi.",
            bn: "উসমান (রাঃ)-এর হত্যাকাণ্ডের পরের সংঘাতে তিনিও জড়িয়ে পড়েন—হত্যাকারীদের বিচারের দাবিতে বসরা পর্যন্ত যান, আর সেখানেই সংঘটিত হয় উটের যুদ্ধ। আলী (রাঃ) সম্মানজনক পাহারায় তাঁকে মদিনায় ফিরিয়ে দেন। ব্যাপকভাবে বর্ণিত—যদিও বর্ণনাগুলো নিয়ে মতভেদ আছে—বের হওয়ার সিদ্ধান্তটির জন্য তিনি পরে দুঃখ করতেন। তিনি মদিনায় ইন্তেকাল করেন এবং জান্নাতুল বাকিতে সমাহিত হন।",
          },
        ],
      },
    ],
  },
  fatimah_az_zahra: {
    sections: [
      {
        h: { en: "The Youngest Daughter", bn: "কনিষ্ঠ কন্যা" },
        p: [
          {
            en: "Fatimah was born in Makkah to the Prophet ﷺ and Khadijah (RA), the youngest of their daughters. She grew up inside the opposition rather than beside it: her childhood was the years of open hostility, the boycott of Banu Hashim in the valley, and the death of her mother while she was still young. She is remembered as resembling her father closely in the way she walked and spoke.",
            bn: "ফাতিমা (রাঃ) মক্কায় জন্মগ্রহণ করেন নবীজি ﷺ ও খাদিজা (রাঃ)-এর ঘরে, তাঁদের কন্যাদের মধ্যে সর্বকনিষ্ঠ। তিনি বেড়ে উঠেছিলেন বিরোধিতার পাশে নয়, তার ভেতরেই: তাঁর শৈশব মানেই প্রকাশ্য শত্রুতার বছরগুলো, উপত্যকায় বনু হাশিমের বয়কট, আর অল্প বয়সেই মায়ের মৃত্যু। বলা হয়, চলাফেরা ও কথা বলার ভঙ্গিতে তিনি ছিলেন পিতার সবচেয়ে কাছাকাছি।",
          },
          {
            en: "Ibn Mas'ud (RA) narrates that while the Prophet ﷺ was prostrating near the Ka'bah, men of Quraysh threw the filth of a slaughtered camel onto his back and laughed until they fell over one another. He did not raise his head. Fatimah came, still a girl, removed it from him and turned on the men with her tongue. She had learned early that no one else was going to defend her father.",
            bn: "ইবনে মাসউদ (রাঃ) বর্ণনা করেছেন, নবীজি ﷺ কাবার পাশে সিজদারত অবস্থায় ছিলেন, তখন কুরাইশের কিছু লোক জবাই করা উটের নাড়িভুঁড়ি তাঁর পিঠে ফেলে দেয় এবং হাসতে হাসতে একে অপরের গায়ে ঢলে পড়ে। তিনি মাথা তোলেননি। ফাতিমা এলেন—তখনো বালিকা—তাঁর পিঠ থেকে তা সরিয়ে দিলেন এবং তীব্র ভাষায় ওই লোকদের ভর্ৎসনা করলেন। তিনি অল্প বয়সেই বুঝে গিয়েছিলেন, তাঁর পিতাকে রক্ষা করার আর কেউ নেই।",
          },
        ],
      },
      {
        h: { en: "A Household of Little", bn: "স্বল্পতার সংসার" },
        p: [
          {
            en: "After the migration she married Ali ibn Abi Talib (RA), a cousin as poor as she was. The dower was raised by selling his armour, and the furnishings of the house are listed in the narrations without embarrassment: a sheepskin, a water-skin, a hand-mill, a cushion stuffed with palm fibre. Their children were al-Hasan, al-Husayn, Zaynab and Umm Kulthum.",
            bn: "হিজরতের পর তিনি বিয়ে করেন আলী ইবনে আবি তালিব (রাঃ)-কে, যিনি ছিলেন তাঁরই মতো দরিদ্র এক চাচাতো ভাই। মোহরের অর্থ এসেছিল তাঁর বর্ম বিক্রি করে, আর ঘরের আসবাবের তালিকা বর্ণনাগুলোতে কোনো সংকোচ ছাড়াই দেওয়া আছে: একটি ভেড়ার চামড়া, একটি মশক, একটি হাতে-চালানো যাঁতা, খেজুরের ছোবড়ায় ভরা একটি বালিশ। তাঁদের সন্তান ছিলেন হাসান, হুসাইন, যায়নাব ও উম্মে কুলসুম।",
          },
          {
            en: "She ground grain herself until her hands blistered and carried water until the strap of the skin marked her chest, and she swept and cooked in a house with no help. This was not an accident of poverty alone; it was the standard her father held his own family to while the wealth of conquered lands began to reach Madinah.",
            bn: "তিনি নিজ হাতে যাঁতায় শস্য পিষতেন—হাতে ফোসকা পড়ে যেত; মশক বয়ে পানি আনতেন—বুকে দাগ বসে যেত; আর কোনো সাহায্যকারী ছাড়াই ঘর ঝাড়ু দিতেন, রান্না করতেন। এটি কেবল দারিদ্র্যের দুর্ঘটনা ছিল না; এটি ছিল সেই মানদণ্ড, যা তাঁর পিতা নিজের পরিবারের জন্য বহাল রেখেছিলেন—তখন বিজিত ভূখণ্ডের সম্পদ মদিনায় আসতে শুরু করেছে।",
          },
          {
            en: "She was not kept away from the hard days either. Sahl ibn Sa'd (RA) describes her at Uhud, washing the blood from her father's face while Ali (RA) poured water, and when the bleeding would not stop she burnt a piece of matting and pressed the ash into the wound. The scene says as much about her as any praise of her: she was there, and she knew what to do.",
            bn: "কঠিন দিনগুলো থেকেও তাঁকে দূরে রাখা হয়নি। সাহল ইবনে সাদ (রাঃ) বর্ণনা করেছেন উহুদের দৃশ্য: আলী (রাঃ) পানি ঢালছেন, আর ফাতিমা (রাঃ) পিতার মুখ থেকে রক্ত ধুয়ে দিচ্ছেন; রক্তপাত বন্ধ না হওয়ায় তিনি একটি চাটাইয়ের টুকরো পুড়িয়ে সেই ছাই ক্ষতস্থানে চেপে ধরেন। এই দৃশ্যটি তাঁর সম্পর্কে যেকোনো প্রশংসার চেয়ে বেশি কথা বলে: তিনি ঘটনাস্থলে ছিলেন, আর তিনি জানতেন কী করতে হবে।",
          },
        ],
      },
      {
        h: { en: "Better Than a Servant", bn: "খাদেমের চেয়ে উত্তম" },
        p: [
          {
            en: "When captives came to Madinah and servants were being distributed, Ali (RA) suggested she go and ask her father for one, since the mill had worn her hands raw. She went and did not find him, and left the request with Aishah (RA). He came to them that night, after they had gone to bed, and sat down between them.",
            bn: "মদিনায় বন্দিরা এলে এবং খাদেম বণ্টন করা হচ্ছিল, তখন আলী (রাঃ) পরামর্শ দিলেন তিনি যেন পিতার কাছে গিয়ে একজন খাদেম চান—কারণ যাঁতা ঘুরিয়ে তাঁর হাতের চামড়া উঠে গেছে। তিনি গেলেন, কিন্তু পিতাকে পেলেন না; আয়িশা (রাঃ)-এর কাছে অনুরোধটি রেখে এলেন। সেই রাতে তাঁরা শুয়ে পড়ার পর নবীজি ﷺ তাঁদের কাছে এলেন এবং দুজনের মাঝখানে বসলেন।",
          },
          {
            en: "He said he would teach them something better than what they had asked for: when you take to your beds, say Subhan Allah thirty-three times, al-Hamdu lillah thirty-three times, and Allahu akbar thirty-four times. Ali (RA) later said he never left it after that night. The Prophet ﷺ did not deny that the work was hard. He offered her something he considered worth more than relief from it.",
            bn: "তিনি বললেন, তোমরা যা চেয়েছ তার চেয়ে উত্তম একটি জিনিস কি আমি শিখিয়ে দেব না? যখন বিছানায় যাবে, তেত্রিশবার সুবহানাল্লাহ, তেত্রিশবার আলহামদুলিল্লাহ এবং চৌত্রিশবার আল্লাহু আকবার বলবে। আলী (রাঃ) পরে বলেছেন, সেই রাতের পর তিনি তা কখনো ছাড়েননি। নবীজি ﷺ অস্বীকার করেননি যে কাজটি কঠিন; তিনি কেবল এমন কিছু দিলেন যাকে তিনি সেই কষ্ট থেকে মুক্তির চেয়েও বেশি মূল্যবান মনে করতেন।",
          },
        ],
      },
      {
        h: { en: "Nearness Without Privilege", bn: "নৈকট্য, সুবিধা নয়" },
        p: [
          {
            en: "When 26:214 commanded him to warn his nearest kin, he called the clans of Quraysh by name and finished with his own daughter: O Fatimah, daughter of Muhammad, ask me of my wealth what you wish, for I can avail you nothing against God. It is one of the strongest statements in the hadith literature against the idea that lineage substitutes for deeds, and it was said to the person he loved most.",
            bn: "যখন 26:214 তাঁকে নিকটাত্মীয়দের সতর্ক করার নির্দেশ দিল, তিনি কুরাইশের গোত্রগুলোকে নাম ধরে ডাকলেন এবং শেষ করলেন নিজের কন্যাকে দিয়ে: হে ফাতিমা, মুহাম্মাদের কন্যা, আমার সম্পদ থেকে যা ইচ্ছা চেয়ে নাও, কিন্তু আল্লাহর সামনে আমি তোমার কোনো কাজে আসব না। বংশপরিচয় আমলের বিকল্প—এই ধারণার বিরুদ্ধে হাদিস সাহিত্যের সবচেয়ে জোরালো বক্তব্যগুলোর একটি এটি; আর তা বলা হয়েছিল তাঁর সবচেয়ে প্রিয় মানুষটিকেই।",
          },
          {
            en: "At the same time her place in his household was formally marked. Aishah (RA) narrates that he went out one morning wearing a cloak of black hair, and gathered al-Hasan, al-Husayn, Fatimah and Ali under it, and then recited 33:33 about God's will to remove impurity from the People of the House and purify them completely.",
            bn: "একই সঙ্গে তাঁর পরিবারে তাঁর অবস্থান আনুষ্ঠানিকভাবেই চিহ্নিত হয়েছিল। আয়িশা (রাঃ) বর্ণনা করেছেন, এক সকালে নবীজি ﷺ কালো পশমের একটি চাদর গায়ে বের হলেন, তারপর হাসান, হুসাইন, ফাতিমা ও আলীকে সেই চাদরের নিচে একত্র করলেন এবং তিলাওয়াত করলেন 33:33—আহলে বাইত থেকে অপবিত্রতা দূর করে তাঁদের সম্পূর্ণরূপে পবিত্র করার আল্লাহর ইচ্ছার কথা।",
          },
        ],
      },
      {
        h: { en: "Part of Me", bn: "আমার অংশ" },
        p: [
          {
            en: "The Prophet ﷺ said that Fatimah is a part of him, and that whoever angers her angers him. When she came to him he would rise for her, take her hand, kiss her and seat her in his own place, and she did the same for him. The narrations of the household describe a relationship that did not change when he became a head of state.",
            bn: "নবীজি ﷺ বলেছেন, ফাতিমা আমার একটি অংশ; যে তাকে ক্রুদ্ধ করল, সে আমাকেই ক্রুদ্ধ করল। তিনি এলে নবীজি ﷺ উঠে দাঁড়াতেন, তাঁর হাত ধরতেন, চুম্বন করতেন এবং নিজের জায়গায় বসাতেন; আর ফাতিমাও পিতার জন্য তা-ই করতেন। ঘরের বর্ণনাগুলো এমন এক সম্পর্কের ছবি আঁকে, রাষ্ট্রপ্রধান হওয়ার পরও যাতে কোনো পরিবর্তন আসেনি।",
          },
          {
            en: "During his final illness she came to him and he whispered something to her and she wept. Then he whispered again and she laughed. Afterwards she explained: he had told her he would not recover from this illness, and she had wept; then he told her that she would be the first of his family to follow him, and that she would be the mistress of the women of the believers, and she had laughed.",
            bn: "তাঁর শেষ অসুস্থতার সময় ফাতিমা (রাঃ) তাঁর কাছে এলেন; নবীজি ﷺ তাঁর কানে কিছু বললেন, আর তিনি কেঁদে ফেললেন। তারপর আবার কিছু বললেন, আর তিনি হেসে উঠলেন। পরে তিনি ব্যাখ্যা করলেন: নবীজি ﷺ প্রথমে বলেছিলেন এই অসুস্থতা থেকে তিনি আর সুস্থ হবেন না, তাই তিনি কেঁদেছিলেন; এরপর বলেছিলেন যে পরিবারের মধ্যে সর্বপ্রথম তিনিই তাঁর সঙ্গে মিলিত হবেন এবং তিনি হবেন ঈমানদার নারীদের নেত্রী—তাই তিনি হেসেছিলেন।",
          },
        ],
      },
      {
        h: { en: "The First to Follow", bn: "সর্বপ্রথম অনুগামিনী" },
        p: [
          {
            en: "The Prophet ﷺ died a few days later. Anas ibn Malik (RA) reports that she said on that day: O my father, he has answered a Lord who called him; O my father, the garden of Firdaws is his resting place; O my father, to Jibril we announce his death. Afterwards she did not laugh again, and the narrations say she was rarely seen without grief on her face.",
            bn: "কয়েক দিন পরেই নবীজি ﷺ ইন্তেকাল করেন। আনাস ইবনে মালিক (রাঃ) বর্ণনা করেছেন, সেদিন তিনি বলেছিলেন: হে আমার পিতা, তিনি সেই প্রতিপালকের ডাকে সাড়া দিলেন যিনি তাঁকে ডেকেছেন; হে আমার পিতা, ফিরদাউসের বাগানই তাঁর ঠিকানা; হে আমার পিতা, জিবরিলের কাছে আমরা তাঁর বিয়োগসংবাদ পৌঁছাই। এরপর তিনি আর কখনো হাসেননি, আর বর্ণনায় আছে, তাঁর মুখে শোকের ছাপ ছাড়া তাঁকে খুব কমই দেখা গেছে।",
          },
          {
            en: "She lived six months after him and died in Madinah, still a young woman, and was buried in al-Baqi. What her father had told her in that whisper came true exactly. Through her sons the descendants of the Prophet ﷺ continue in every land, and the household she kept, without a servant and without complaint, remains the model held up whenever Muslims speak of nearness to him.",
            bn: "তিনি পিতার পরে ছয় মাস বেঁচে ছিলেন এবং তরুণী বয়সেই মদিনায় ইন্তেকাল করেন; সমাহিত হন জান্নাতুল বাকিতে। সেই ফিসফিসানিতে পিতা তাঁকে যা বলেছিলেন, তা অক্ষরে অক্ষরে সত্য হলো। তাঁর দুই পুত্রের মাধ্যমেই নবীজি ﷺ-এর বংশধারা আজ প্রতিটি দেশে বিস্তৃত; আর খাদেমহীন, অভিযোগহীন যে সংসারটি তিনি চালিয়েছিলেন, নবীজির নৈকট্যের কথা উঠলেই মুসলিমরা সেই দৃষ্টান্তটিই তুলে ধরেন।",
          },
        ],
      },
    ],
  },
  hamza_ibn_abd_al_muttalib: {
    sections: [
      {
        h: { en: "Uncle and Foster-Brother", bn: "চাচা ও দুধভাই" },
        p: [
          {
            en: "Hamza ibn Abd al-Muttalib was an uncle of the Prophet ﷺ, close to him in age, and also his foster-brother, since both were nursed by Thuwaybah. He grew up as one of the notable young men of Quraysh, known for physical strength, for hunting, and for the kind of standing in the clan that meant an insult to his family could not be ignored.",
            bn: "হামজা ইবনে আবদুল মুত্তালিব ছিলেন নবীজি ﷺ-এর চাচা, বয়সে তাঁর কাছাকাছি, আবার দুধভাইও—কারণ দুজনকেই দুধ পান করিয়েছিলেন সুওয়াইবা। তিনি বেড়ে ওঠেন কুরাইশের উল্লেখযোগ্য তরুণদের একজন হিসেবে; পরিচিত ছিলেন শারীরিক শক্তি, শিকারদক্ষতা এবং গোত্রে এমন এক অবস্থানের জন্য, যার অর্থ তাঁর পরিবারের প্রতি অপমান কখনো উপেক্ষা করা যেত না।",
          },
          {
            en: "For the first years of the message he stood outside it. He was not among the persecutors, but he had not accepted the new religion either, and his nephew was being publicly humiliated in the city where their family had held the right of watering the pilgrims and the duty of feeding them for generations. The sources leave him in that position for some time, neither hostile nor committed.",
            bn: "দাওয়াতের প্রথম বছরগুলোতে তিনি এর বাইরেই ছিলেন। তিনি নির্যাতকদের দলে ছিলেন না, আবার নতুন দ্বীন গ্রহণও করেননি; অথচ তাঁর ভাতিজা প্রকাশ্যে অপদস্থ হচ্ছিলেন সেই শহরে, যেখানে প্রজন্মের পর প্রজন্ম ধরে তাঁদেরই পরিবারের হাতে ছিল হাজিদের পানি পান করানো ও তাঁদের খাওয়ানোর দায়িত্ব। সূত্রগুলো তাঁকে বেশ কিছুকাল এই অবস্থানেই রাখে—বৈরীও নন, অঙ্গীকারবদ্ধও নন।",
          },
        ],
      },
      {
        h: { en: "The Day at as-Safa", bn: "সাফার সেই দিন" },
        p: [
          {
            en: "Ibn Hisham records that he returned from hunting one day, bow still on his shoulder, and a woman near the Ka'bah told him what Abu Jahl had said and done to Muhammad ﷺ at as-Safa while he sat silent under it. Hamza went straight to the assembly, struck Abu Jahl with the bow, and said: will you insult him when I follow his religion and say what he says? Strike me back if you can.",
            bn: "ইবনে হিশাম লিখেছেন, একদিন শিকার থেকে ফিরছিলেন তিনি, কাঁধে তখনো ধনুক; কাবার কাছে এক নারী তাঁকে জানালেন সাফার পাশে আবু জাহল মুহাম্মাদ ﷺ-কে কী বলেছে ও করেছে, আর তিনি তা নীরবে সহ্য করেছেন। হামজা সোজা সেই মজলিসে গিয়ে ধনুক দিয়ে আবু জাহলকে আঘাত করে বললেন: তোমরা তাঁকে গালি দেবে, অথচ আমি তাঁর দ্বীনের অনুসারী এবং তিনি যা বলেন আমিও তা-ই বলি? পারলে আমাকে ফিরিয়ে আঘাত করো।",
          },
          {
            en: "The sira is candid that this began as clan pride, and equally candid that it did not stay there. He went home unsettled, asked God to guide him if this was truth, and afterwards went to the Prophet ﷺ and accepted Islam without reservation. Quraysh understood at once what had changed: a man they could not touch now stood with the man they had been touching freely.",
            bn: "সিরাত অকপটেই বলে যে এর শুরুটা ছিল গোত্রীয় অহংকার থেকে, আবার ততটাই অকপটে বলে যে তা সেখানেই থেমে থাকেনি। তিনি অস্থির মনে ঘরে ফেরেন, আল্লাহর কাছে প্রার্থনা করেন—এটি যদি সত্য হয় তবে তাঁকে যেন পথ দেখানো হয়; এরপর নবীজি ﷺ-এর কাছে গিয়ে নিঃশর্তভাবে ইসলাম গ্রহণ করেন। কুরাইশ সঙ্গে সঙ্গেই বুঝে গেল কী বদলে গেছে: যাঁকে তারা স্পর্শ করতে পারত না, তিনি এখন সেই মানুষটির পাশে দাঁড়িয়েছেন যাঁকে তারা অবাধে আঘাত করত।",
          },
        ],
      },
      {
        h: { en: "First Banner, First Battle", bn: "প্রথম পতাকা, প্রথম যুদ্ধ" },
        p: [
          {
            en: "After the migration he was among the first the Prophet ﷺ entrusted with a banner on the expeditions sent out from Madinah. At Badr, when the Quraysh champions Utbah, Shaybah and al-Walid stepped forward and called for opponents from among their equals, the Prophet ﷺ sent out Hamza, Ali (RA) and Ubaydah ibn al-Harith (RA). Hamza cut down the man who faced him and then turned to help the others.",
            bn: "হিজরতের পর মদিনা থেকে পাঠানো অভিযানগুলোতে নবীজি ﷺ যাঁদের হাতে সর্বপ্রথম পতাকা তুলে দেন, তিনি তাঁদের একজন। বদরে যখন কুরাইশের বীর উতবা, শাইবা ও ওয়ালিদ সামনে এগিয়ে এসে নিজেদের সমমানের প্রতিদ্বন্দ্বী চাইল, নবীজি ﷺ পাঠালেন হামজা, আলী (রাঃ) ও উবাইদা ইবনুল হারিস (রাঃ)-কে। হামজা তাঁর প্রতিপক্ষকে ভূপাতিত করেন, তারপর অন্যদের সাহায্যে এগিয়ে যান।",
          },
          {
            en: "Badr ended in a defeat Quraysh had not imagined, and among their dead were the fathers, brothers and sons of the men who would command at Uhud the following year. Hind bint Utbah lost her father there, and others lost as much. Vengeance in Arabia was a family obligation, not a private feeling, and Hamza's name stood at the top of the list carried back to Makkah for settling.",
            bn: "বদর শেষ হলো এমন এক পরাজয় দিয়ে, যা কুরাইশ কল্পনাও করেনি; তাদের নিহতদের মধ্যে ছিলেন সেই মানুষদের পিতা, ভাই ও পুত্র, যাঁরা পরের বছর উহুদে নেতৃত্ব দেবেন। হিন্দ বিনতে উতবা সেখানে পিতাকে হারান, আরও অনেকে হারান ততটাই। আরবে প্রতিশোধ ছিল পারিবারিক দায়, ব্যক্তিগত অনুভূতি নয়; আর মক্কায় ফিরিয়ে নেওয়া সেই হিসাবের তালিকার একেবারে ওপরে ছিল হামজার নাম।",
          },
        ],
      },
      {
        h: { en: "The Day of Uhud", bn: "উহুদের দিন" },
        p: [
          {
            en: "At Uhud he fought in the front of the Muslim line while the battle was still going their way. Wahshi ibn Harb, an enslaved Abyssinian promised his freedom if he killed Hamza, had no interest in the fighting itself; he waited behind a rock, watching only for him, and threw the short spear of his people when the chance came. Hamza fell, and Wahshi went back and sat down, having come for nothing else.",
            bn: "উহুদে যুদ্ধের গতি যতক্ষণ মুসলিমদের অনুকূলে ছিল, ততক্ষণ তিনি ছিলেন সামনের কাতারে। ওয়াহশি ইবনে হারব—হাবশি এক দাস, যাকে হামজাকে হত্যা করলে মুক্তির প্রতিশ্রুতি দেওয়া হয়েছিল—যুদ্ধ নিয়ে তার কোনো আগ্রহই ছিল না; সে এক পাথরের আড়ালে অপেক্ষা করছিল, চোখ কেবল তাঁর দিকেই, আর সুযোগ পেয়েই ছুড়ে দিল নিজেদের ছোট বর্শাটি। হামজা লুটিয়ে পড়লেন, আর ওয়াহশি ফিরে গিয়ে বসে পড়ল—সে তো আর কিছুর জন্য আসেইনি।",
          },
          {
            en: "The body was mutilated after the fighting ended. When the Prophet ﷺ found him he stood a long time and the narrators say they had never seen him so grieved. His sister Safiyyah (RA) came looking for her brother; az-Zubayr (RA) was sent to turn her back, and she said she had heard what had happened and would bear it with patience and seek the reward. She was allowed through, and she prayed for him.",
            bn: "যুদ্ধ শেষ হওয়ার পর তাঁর দেহ বিকৃত করা হয়। নবীজি ﷺ তাঁকে দেখে দীর্ঘক্ষণ দাঁড়িয়ে ছিলেন; বর্ণনাকারীরা বলেছেন, এতটা শোকার্ত তাঁরা তাঁকে আর কখনো দেখেননি। তাঁর বোন সাফিয়্যা (রাঃ) ভাইকে খুঁজতে এলেন; যুবাইর (রাঃ)-কে পাঠানো হলো তাঁকে ফিরিয়ে দিতে, কিন্তু তিনি বললেন, যা হয়েছে তা তিনি শুনেছেন এবং ধৈর্য ধরবেন ও প্রতিদান কামনা করবেন। তাঁকে যেতে দেওয়া হলো, আর তিনি ভাইয়ের জন্য দোয়া করলেন।",
          },
        ],
      },
      {
        h: { en: "Grief Held in Check", bn: "সংযত শোক" },
        p: [
          {
            en: "The sira records that words of retaliation in kind were spoken in the first shock, and reports that 16:126 came down over it: if you punish, punish with the like of what you were made to suffer, but if you are patient it is better for the patient. That occasion of revelation is disputed, an-Nahl being a Makkan surah. The Prophet ﷺ then forbade mutilation outright, and that prohibition has stood in Islamic law ever since, made permanent out of the worst provocation the community had faced.",
            bn: "সিরাত বলে, প্রথম আঘাতের ধাক্কায় সমপরিমাণ প্রতিশোধের কথা উচ্চারিত হয়েছিল, আর বর্ণনা আছে যে এ প্রসঙ্গে নাজিল হয় 16:126: যদি প্রতিশোধ নাও, তবে ততটুকুই নাও যতটুকু কষ্ট তোমাদের দেওয়া হয়েছে; আর ধৈর্য ধরলে তা ধৈর্যশীলদের জন্যই উত্তম। এই শানে নুযুল নিয়ে মতভেদ আছে, কারণ সূরা নাহল মাক্কি। এরপর নবীজি ﷺ অঙ্গহানি সম্পূর্ণরূপে নিষিদ্ধ করেন, আর ইসলামি বিধানে সেই নিষেধাজ্ঞা আজও অটুট—উম্মাহর সবচেয়ে বড় উসকানির মুহূর্তেই তা স্থায়ী করা হলো।",
          },
          {
            en: "The martyrs of Uhud were buried where they fell, unwashed, in their blood and their clothes, two to a grave, with the one who had memorised more of the Quran placed towards the qiblah. About them and the fallen of that day the Quran says in 3:169 not to think of those killed in the way of God as dead; rather they are alive with their Lord, provided for.",
            bn: "উহুদের শহীদদের দাফন করা হয় যেখানে তাঁরা পড়েছিলেন সেখানেই—গোসল ছাড়া, নিজেদের রক্ত ও কাপড়সহ, এক কবরে দুজন করে; আর যিনি কুরআনের বেশি অংশ মুখস্থ রাখতেন তাঁকে রাখা হতো কিবলার দিকে। তাঁদের ও সেদিনের শহীদদের সম্পর্কেই কুরআন বলে 3:169-এ: আল্লাহর পথে নিহতদের মৃত মনে করো না; বরং তাঁরা জীবিত, তাঁদের প্রতিপালকের কাছে রিজিকপ্রাপ্ত।",
          },
        ],
      },
      {
        h: { en: "Chief of the Martyrs", bn: "শহীদদের সরদার" },
        p: [
          {
            en: "Returning to Madinah the Prophet ﷺ passed houses where women were weeping for their dead and remarked that Hamza had no women to weep for him. The Ansar heard it, and their women came to his door to mourn his uncle; he thanked them and told them to return, and it is reported that he disliked such wailing being made a custom afterwards.",
            bn: "মদিনায় ফেরার পথে নবীজি ﷺ এমন কিছু ঘরের পাশ দিয়ে যাচ্ছিলেন যেখানে নারীরা নিজেদের নিহতদের জন্য কাঁদছিলেন; তিনি বললেন, হামজার জন্য কাঁদার মতো নিজের কোনো নারী নেই। আনসারগণ তা শুনলেন, আর তাঁদের নারীরা এসে তাঁর দরজায় চাচার জন্য শোক প্রকাশ করলেন; তিনি তাঁদের ধন্যবাদ জানিয়ে ফিরে যেতে বললেন, আর বর্ণিত আছে যে এমন বিলাপকে পরবর্তীতে রীতিতে পরিণত করা তিনি পছন্দ করেননি।",
          },
          {
            en: "He is remembered as Asad Allah, the Lion of God, and as the chief of the martyrs. Years later Wahshi came to Madinah and accepted Islam; the Prophet ﷺ asked him to describe the killing, then told him to keep his face away, and he did. That Islam had room for the man who killed Hamza is part of the story of Hamza, and neither half of it is told without the other.",
            bn: "তিনি স্মরণীয় ‘আসাদুল্লাহ’—আল্লাহর সিংহ—এবং শহীদদের সরদার হিসেবে। বছর কয়েক পর ওয়াহশি মদিনায় এসে ইসলাম গ্রহণ করে; নবীজি ﷺ তাকে হত্যার বর্ণনা দিতে বলেন, তারপর বলেন তার মুখ যেন তাঁর সামনে না আসে—আর সে তা-ই করত। হামজাকে যে হত্যা করেছিল ইসলামে তারও ঠাঁই হয়েছিল—এটিও হামজার কাহিনিরই অংশ, আর একটি অংশ ছাড়া অন্যটি বলা হয় না।",
          },
        ],
      },
    ],
  },
  bilal_ibn_rabah: {
    sections: [
      {
        h: { en: "A Slave in Makkah", bn: "মক্কার এক দাস" },
        p: [
          {
            en: "Bilal ibn Rabah was born into slavery in Makkah, his mother Hamamah an Abyssinian woman. He belonged to Umayyah ibn Khalaf of Banu Jumah, one of the more brutal of the Makkan chiefs, and in a society organised entirely around clan protection he had none. A man with no tribe had no one to demand compensation if he was injured and no one to fear if he was killed.",
            bn: "বিলাল ইবনে রাবাহর জন্ম মক্কায়, দাসত্বের ভেতরে; তাঁর মা হামামা ছিলেন হাবশি নারী। তিনি ছিলেন বনু জুমাহর উমাইয়া ইবনে খালাফের অধীন—মক্কার সবচেয়ে নিষ্ঠুর নেতাদের একজন; আর যে সমাজ পুরোপুরি গোত্রীয় রক্ষাব্যবস্থার ওপর দাঁড়িয়ে, সেখানে তাঁর কোনো গোত্র ছিল না। যার গোত্র নেই, আহত হলে তার পক্ষে ক্ষতিপূরণ দাবি করার কেউ থাকে না, আর নিহত হলে ভয় পাওয়ার মতোও কেউ থাকে না।",
          },
          {
            en: "He accepted Islam very early, among the first handful of believers, at a time when doing so brought him no advantage of any kind and every foreseeable harm. Ibn Mas'ud (RA) counted him among the small group who declared their faith openly while the rest were still concealing it, which for a man in his position meant standing entirely exposed, with no clan behind him and an owner who could do as he liked.",
            bn: "তিনি খুব প্রথম দিকেই ইসলাম গ্রহণ করেন, হাতেগোনা প্রথম ঈমানদারদের একজন হিসেবে—এমন সময়ে, যখন এতে তাঁর কোনো ধরনের সুবিধাই ছিল না, বরং সম্ভাব্য সব ক্ষতিই ছিল। ইবনে মাসউদ (রাঃ) তাঁকে সেই ছোট দলটির মধ্যে গণ্য করেছেন যাঁরা প্রকাশ্যে ঈমান ঘোষণা করেছিলেন, যখন বাকিরা তা গোপন রাখছিলেন—আর তাঁর অবস্থানের একজন মানুষের জন্য এর অর্থ ছিল সম্পূর্ণ অরক্ষিত হয়ে দাঁড়ানো: পেছনে কোনো গোত্র নেই, আর মালিক যা খুশি তা-ই করতে পারে।",
          },
        ],
      },
      {
        h: { en: "Ahad, Ahad", bn: "আহাদ, আহাদ" },
        p: [
          {
            en: "Umayyah took him out at midday, when the sand of Makkah is at its hottest, laid him on his back on it, and had a great rock placed on his chest. The demand was simple and repeated: renounce, and name al-Lat and al-Uzza as gods. The narrations report that all he answered, through it, was one word twice over: Ahad, Ahad. One. One.",
            bn: "উমাইয়া তাঁকে বের করে আনত দুপুরবেলা, যখন মক্কার বালি সবচেয়ে উত্তপ্ত; সেই বালির ওপর চিত করে শুইয়ে বুকের ওপর চাপিয়ে দিত বিশাল এক পাথর। দাবিটি ছিল সহজ এবং বারবার একই: ঈমান ত্যাগ করো, আর লাত ও উজ্জাকে উপাস্য বলে স্বীকার করো। বর্ণনাগুলো বলে, এর ভেতরেও তাঁর একমাত্র জবাব ছিল একটি শব্দ, দুবার: আহাদ, আহাদ। এক। এক।",
          },
          {
            en: "Ibn Ishaq adds that boys were let loose to drag him through the streets of Makkah with a rope round his neck, and that he kept saying the same word. The word matters. He was not arguing theology under torture; he was stating the one fact that made the whole system standing over him illegitimate, and he would not trade it for relief.",
            bn: "ইবনে ইসহাক আরও লিখেছেন, ছেলেদের ছেড়ে দেওয়া হতো তাঁকে গলায় রশি বেঁধে মক্কার পথে পথে টেনে নিয়ে যেতে, আর তিনি একই শব্দ বলে যেতেন। শব্দটি গুরুত্বপূর্ণ। নির্যাতনের নিচে তিনি ধর্মতত্ত্ব নিয়ে তর্ক করছিলেন না; তিনি কেবল সেই একটি সত্য উচ্চারণ করছিলেন, যা তাঁর ওপর দাঁড়িয়ে থাকা গোটা ব্যবস্থাটিকেই অবৈধ করে দেয়—আর সেই সত্যকে তিনি স্বস্তির বিনিময়ে ছাড়েননি।",
          },
        ],
      },
      {
        h: { en: "Bought and Set Free", bn: "কিনে মুক্ত করা" },
        p: [
          {
            en: "Abu Bakr (RA) passed while this was being done and bought him, then freed him on the spot. He did the same for several others who had no protection. The Quran describes exactly this act in 90:12-13, where the steep path that most refuse to climb is defined first of all as the freeing of a neck, and the commentators read 92:17-21 as describing the man who did it here.",
            bn: "এসব চলাকালেই আবু বকর (রাঃ) সেখান দিয়ে যাচ্ছিলেন; তিনি তাঁকে কিনে নেন এবং সঙ্গে সঙ্গেই মুক্ত করে দেন। রক্ষাহীন আরও কয়েকজনের জন্যও তিনি একই কাজ করেন। কুরআন ঠিক এই কাজটিরই বর্ণনা দেয় 90:12-13-এ, যেখানে অধিকাংশ মানুষ যে কঠিন গিরিপথ পাড়ি দিতে অস্বীকার করে তার প্রথম সংজ্ঞাই হলো একটি দাসমুক্তি; আর মুফাসসিরগণ 92:17-21-কে পড়েন এখানে যিনি তা করলেন তাঁরই বর্ণনা হিসেবে।",
          },
          {
            en: "The change was not from one owner to another. Bilal (RA) emerged a free man in a community that had just been told, and would be told again in 49:13, that the most honoured of people before God is the one most conscious of Him, and that lineage exists for recognition and not for ranking. Within a few years he would be standing above the men who had once owned him.",
            bn: "পরিবর্তনটি এক মালিকের হাত থেকে আরেক মালিকের হাতে যাওয়া ছিল না। বিলাল (রাঃ) বেরিয়ে এলেন স্বাধীন মানুষ হিসেবে—এমন এক সমাজে, যাকে সদ্য বলা হয়েছে এবং 49:13-এ আবারও বলা হবে যে আল্লাহর কাছে সবচেয়ে সম্মানিত সেই ব্যক্তি যে সবচেয়ে বেশি তাঁকে ভয় করে, আর বংশপরিচয় দেওয়া হয়েছে পরিচয়ের জন্য, মর্যাদার ক্রম নির্ধারণের জন্য নয়। কয়েক বছরের মধ্যেই তিনি দাঁড়াবেন সেই মানুষদের মাথার ওপরে, যারা একদিন তাঁর মালিক ছিল।",
          },
        ],
      },
      {
        h: { en: "The Voice of the Mosque", bn: "মসজিদের কণ্ঠ" },
        p: [
          {
            en: "In Madinah the community needed a way to gather people for prayer. A horn was suggested, and a bell, and a fire on a height, and none was adopted. Then Abdullah ibn Zayd (RA) came with words he had been shown in a dream, and Umar (RA) said he had seen the same. The Prophet ﷺ told him to teach the words to Bilal, because his voice carried further.",
            bn: "মদিনায় মানুষকে নামাজে জড়ো করার একটি উপায় দরকার হলো। প্রস্তাব এলো শিঙা বাজানোর, ঘণ্টা বাজানোর, উঁচু জায়গায় আগুন জ্বালানোর—কোনোটিই গৃহীত হলো না। এরপর আবদুল্লাহ ইবনে যায়েদ (রাঃ) এলেন স্বপ্নে দেখানো কিছু বাক্য নিয়ে, আর উমর (রাঃ) বললেন তিনিও একই স্বপ্ন দেখেছেন। নবীজি ﷺ তাঁকে বললেন, বাক্যগুলো বিলালকে শিখিয়ে দাও—কারণ তার কণ্ঠ আরও দূরে পৌঁছায়।",
          },
          {
            en: "So the first voice to call Muslims to prayer belonged to a former slave, and it was heard five times a day by everyone in the city, including men who had bought and sold people like him. He also woke the household, carried the Prophet's staff and water for his ablution, and travelled with him on campaign. The office became his so completely that he is known simply as the muezzin of the Messenger of God.",
            bn: "ফলে মুসলিমদের নামাজের প্রথম আহ্বানটি ধ্বনিত হলো এক সাবেক দাসের কণ্ঠে, আর শহরের সবাই তা শুনত দিনে পাঁচবার—তাদের মধ্যে ছিল সেই লোকেরাও, যারা তাঁর মতো মানুষ কেনাবেচা করত। তিনি ঘরের মানুষদের জাগাতেন, নবীজি ﷺ-এর লাঠি ও অজুর পানি বহন করতেন এবং অভিযানে তাঁর সঙ্গী হতেন। দায়িত্বটি এমনভাবে তাঁরই হয়ে গেল যে তিনি পরিচিতই হলেন সহজভাবে—আল্লাহর রাসুলের মুয়াজ্জিন।",
          },
        ],
      },
      {
        h: { en: "Above the Ka'bah", bn: "কাবার ছাদে" },
        p: [
          {
            en: "At Badr he saw Umayyah ibn Khalaf among the enemy and called out that this was the head of disbelief and that he would not survive if Umayyah survived; his old master was killed in the fighting. Eight years after the migration the Muslims entered Makkah without a battle. The idols inside the Ka'bah were broken, and the Prophet ﷺ ordered Bilal (RA) to climb onto its roof and give the call to prayer.",
            bn: "বদরে তিনি শত্রুদলের মধ্যে উমাইয়া ইবনে খালাফকে দেখতে পেয়ে চিৎকার করে বলেছিলেন, এই তো কুফরের প্রধান—সে বাঁচলে আমি যেন না বাঁচি; সেই যুদ্ধেই তাঁর পুরোনো মনিব নিহত হয়। হিজরতের আট বছর পর মুসলিমরা বিনা যুদ্ধে মক্কায় প্রবেশ করেন। কাবার ভেতরের মূর্তিগুলো ভেঙে ফেলা হয়, আর নবীজি ﷺ বিলাল (রাঃ)-কে নির্দেশ দেন কাবার ছাদে উঠে আজান দিতে।",
          },
          {
            en: "He stood on the roof of the House and said God is the greatest over the city that had held him down on its sand. Some of the Quraysh remarked bitterly on who had been chosen for it. The point was not lost on anyone: the man they had considered property was now the voice of the sanctuary, and the change had been made deliberately and in public.",
            bn: "তিনি আল্লাহর ঘরের ছাদে দাঁড়িয়ে ‘আল্লাহু আকবার’ বললেন—সেই শহরের ওপরে, যে শহর তাঁকে বালির ওপর চেপে ধরে রেখেছিল। কুরাইশের কেউ কেউ তিক্তভাবে মন্তব্য করল, এ কাজের জন্য কাকে বেছে নেওয়া হলো। বিষয়টি কারও চোখ এড়ায়নি: যাকে তারা সম্পত্তি মনে করত, সে-ই এখন হারামের কণ্ঠস্বর—আর এই পরিবর্তন ঘটানো হয়েছে সচেতনভাবে, সবার সামনে।",
          },
        ],
      },
      {
        h: { en: "After the Voice Stopped", bn: "কণ্ঠ থেমে যাওয়ার পর" },
        p: [
          {
            en: "The Prophet ﷺ once told him he had heard the sound of his sandals ahead of him in Paradise and asked what deed he most relied on. Bilal (RA) said he knew of nothing except that he never performed ablution at any hour of the day or night without praying with it whatever was written for him. A habit, kept quietly, was what the question turned out to be about.",
            bn: "একবার নবীজি ﷺ তাঁকে বলেছিলেন, তিনি জান্নাতে নিজের সামনে তাঁর জুতোর শব্দ শুনতে পেয়েছেন; আর জিজ্ঞেস করলেন, কোন আমলের ওপর তিনি সবচেয়ে বেশি ভরসা করেন। বিলাল (রাঃ) বললেন, তিনি এমন কিছু জানেন না—কেবল এটুকু যে দিন বা রাতের যে সময়েই তিনি অজু করেছেন, সেই অজু দিয়ে তাঁর জন্য যতটুকু নির্ধারিত ছিল ততটুকু নামাজ পড়েছেন। দেখা গেল, প্রশ্নটির উত্তর ছিল নীরবে ধরে রাখা একটি অভ্যাসেই।",
          },
          {
            en: "When the Prophet ﷺ died, the voice that had called Madinah to prayer for a decade could not do it again. The historians record that he could not complete the call, and that he asked leave to go out to the frontier in Syria, where he spent his last years. He died there and is buried in Damascus, far from the sand he had been laid on.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর যে কণ্ঠ এক দশক ধরে মদিনাকে নামাজে ডেকেছে, সেই কণ্ঠ আর তা পারল না। ঐতিহাসিকগণ লিখেছেন, তিনি আজান শেষ করতে পারতেন না; শেষে সিরিয়ার সীমান্তে চলে যাওয়ার অনুমতি চেয়ে নেন এবং সেখানেই কাটান জীবনের শেষ বছরগুলো। সেখানেই তিনি ইন্তেকাল করেন এবং দামেস্কে সমাহিত হন—যে বালির ওপর তাঁকে শুইয়ে রাখা হয়েছিল, তা থেকে বহু দূরে।",
          },
        ],
      },
    ],
  },
  salman_al_farsi: {
    sections: [
      {
        h: { en: "The Fire He Tended", bn: "যে আগুন তিনি জ্বালিয়ে রাখতেন" },
        p: [
          {
            en: "Salman told his own story, and it is preserved at length in the Musnad of Ahmad. He was a Persian from Jayy, near Isfahan, the son of a landowner who loved him so much that he kept him at home like a girl, and his duty was to tend the fire in his father's house and never let it go out.",
            bn: "সালমান (রাঃ) নিজের কাহিনি নিজেই বলে গেছেন, আর তা দীর্ঘ পরিসরে সংরক্ষিত আছে ইমাম আহমাদের মুসনাদে। তিনি ছিলেন ইস্পাহানের কাছে জাই অঞ্চলের এক পারস্যবাসী, এক জমিদারের ছেলে; পিতা তাঁকে এতটাই ভালোবাসতেন যে মেয়েদের মতো ঘরেই আটকে রাখতেন। তাঁর দায়িত্ব ছিল পিতার ঘরের আগুন জ্বালিয়ে রাখা—কখনো তা নিভতে না দেওয়া।",
          },
          {
            en: "Sent out once on an errand, he passed a church, heard the people praying inside, and stayed until sunset watching them. He decided that what they had was better than what he had. His father chained his leg to keep him at home. He escaped with a caravan going to Syria, and from that day he never saw his family again.",
            bn: "একদিন কোনো কাজে বাইরে পাঠানো হলে তিনি একটি গির্জার পাশ দিয়ে যাচ্ছিলেন, ভেতরে মানুষের প্রার্থনার শব্দ শুনলেন এবং সূর্য ডোবা পর্যন্ত সেখানে দাঁড়িয়ে তাদের দেখলেন। তিনি সিদ্ধান্ত নিলেন, তাদের কাছে যা আছে তা তাঁর কাছে যা আছে তার চেয়ে উত্তম। পিতা তাঁকে ঘরে আটকে রাখতে পায়ে শিকল পরিয়ে দিলেন। সিরিয়াগামী এক কাফেলার সঙ্গে তিনি পালিয়ে যান, আর সেদিনের পর পরিবারকে তিনি আর কখনো দেখেননি।",
          },
        ],
      },
      {
        h: { en: "From Teacher to Teacher", bn: "এক শিক্ষক থেকে আরেক শিক্ষকে" },
        p: [
          {
            en: "In Damascus he attached himself to a bishop and served him, and found him to be a man who hoarded the charity given for the poor. When he died and the people were about to bury him with honour, Salman told them what he had seen and showed them the hoard. The next man he served he loved, and stayed with him until his death.",
            bn: "দামেস্কে তিনি এক বিশপের সঙ্গী হয়ে তাঁর সেবা করতে থাকেন, আর দেখতে পান যে তিনি গরিবদের জন্য দেওয়া দান নিজের কাছে জমিয়ে রাখেন। তিনি মারা গেলে মানুষ যখন তাঁকে সম্মানের সঙ্গে দাফন করতে যাচ্ছিল, সালমান তাদের যা দেখেছেন তা জানান এবং সোনা-রুপার সেই ভান্ডার দেখিয়ে দেন। এরপর যাঁর সেবায় তিনি নিযুক্ত হন তাঁকে তিনি ভালোবেসেছিলেন এবং তাঁর মৃত্যু পর্যন্ত সঙ্গে ছিলেন।",
          },
          {
            en: "That pattern repeated for years. Each teacher, dying, sent him on to another: to Mosul, then Nasibin, then Ammuriyah in the land of Rum. The last of them told him the time of a prophet sent with the religion of Ibrahim (AS) had come, that he would emigrate to a land of date palms between two tracts of black stone, that he would eat a gift but not charity, and that between his shoulders was the seal of prophethood.",
            bn: "বছরের পর বছর এই ধারা চলল। প্রত্যেক শিক্ষক মৃত্যুর সময় তাঁকে পাঠিয়ে দিতেন আরেকজনের কাছে: মসুল, তারপর নাসিবিন, তারপর রোম দেশের আম্মুরিয়া। তাঁদের শেষজন তাঁকে বলে যান, ইবরাহিম (আঃ)-এর দ্বীন নিয়ে প্রেরিত এক নবীর সময় ঘনিয়ে এসেছে; তিনি হিজরত করবেন দুই কালো পাথুরে প্রান্তরের মাঝখানে খেজুরবাগানের এক ভূমিতে; তিনি উপহার গ্রহণ করবেন কিন্তু সদকা খাবেন না; আর তাঁর দুই কাঁধের মাঝে থাকবে নবুয়তের মোহর।",
          },
        ],
      },
      {
        h: { en: "Sold on the Road", bn: "পথেই বিক্রি" },
        p: [
          {
            en: "He paid men of the Banu Kalb with his cattle to carry him towards Arabia. On the way they sold him as a slave. A Jewish man bought him, and later a cousin of his from Banu Qurayzah took him to Yathrib. Salman said that the moment he saw the town he recognised the description he had been given, and he stayed there working the palms and saying nothing.",
            bn: "নিজের গবাদিপশু দিয়ে তিনি বনু কালবের কিছু লোককে রাজি করান তাঁকে আরবের দিকে নিয়ে যেতে। পথে তারা তাঁকে দাস হিসেবে বিক্রি করে দেয়। এক ইহুদি ব্যক্তি তাঁকে কেনেন, পরে বনু কুরাইজার তাঁর এক আত্মীয় তাঁকে ইয়াসরিবে নিয়ে আসেন। সালমান (রাঃ) বলেছেন, শহরটি দেখামাত্রই তিনি সেই বর্ণনা চিনতে পারেন যা তাঁকে দেওয়া হয়েছিল; আর তিনি সেখানে খেজুরবাগানে কাজ করতে থাকেন, কাউকে কিছু না বলে।",
          },
          {
            en: "When the Prophet ﷺ arrived in Madinah, Salman tested the three signs. He brought food as charity and the Prophet ﷺ told the Companions to eat and did not eat. He brought food as a gift and he ate with them. Then, at a funeral, Salman walked behind him looking at his back; the Prophet ﷺ understood, let the cloak fall from his shoulders, and Salman saw the seal and wept over it.",
            bn: "নবীজি ﷺ মদিনায় পৌঁছালে সালমান (রাঃ) তিনটি নিদর্শন যাচাই করেন। তিনি সদকা হিসেবে খাবার নিয়ে এলেন; নবীজি ﷺ সাহাবিদের খেতে বললেন, নিজে খেলেন না। এরপর উপহার হিসেবে খাবার আনলেন; তিনি সবার সঙ্গে খেলেন। তারপর এক জানাজায় সালমান তাঁর পেছনে পেছনে হাঁটছিলেন, দৃষ্টি তাঁর পিঠের দিকে; নবীজি ﷺ বুঝতে পেরে কাঁধ থেকে চাদর সরিয়ে দিলেন, আর সালমান মোহরটি দেখে কেঁদে ফেললেন।",
          },
        ],
      },
      {
        h: { en: "Buying Himself Back", bn: "নিজেকেই ফিরে কেনা" },
        p: [
          {
            en: "He accepted Islam, but slavery kept him out of Badr and Uhud. The Prophet ﷺ told him to contract with his owner for his freedom. The terms were heavy: a large number of palm shoots to be planted and a quantity of gold. The Companions gathered the shoots between them, and the Prophet ﷺ planted them with his own hand, and every one of them took root.",
            bn: "তিনি ইসলাম গ্রহণ করলেন, কিন্তু দাসত্বের কারণে বদর ও উহুদে অংশ নিতে পারলেন না। নবীজি ﷺ তাঁকে বললেন মালিকের সঙ্গে মুক্তির চুক্তি করতে। শর্ত ছিল ভারী: বিপুলসংখ্যক খেজুরের চারা রোপণ করে দিতে হবে, সঙ্গে নির্দিষ্ট পরিমাণ স্বর্ণ। সাহাবিগণ নিজেদের মধ্যে চারাগুলো জোগাড় করলেন, আর নবীজি ﷺ নিজ হাতে সেগুলো রোপণ করলেন—প্রতিটি চারাই শিকড় ধরল।",
          },
          {
            en: "The gold came from a piece the Prophet ﷺ gave him from what had reached him, and it covered the debt. Salman (RA) came out of it a free man, at an age when most men are settled, having spent his youth in servitude in a language not his own. From that point he was present with the community, and the first great test came almost at once.",
            bn: "স্বর্ণের ব্যবস্থা হলো নবীজি ﷺ-এর কাছে আসা সম্পদ থেকে দেওয়া এক টুকরো দিয়ে, আর তাতেই ঋণ শোধ হয়ে গেল। সালমান (রাঃ) সেখান থেকে বেরিয়ে এলেন স্বাধীন মানুষ হিসেবে—এমন এক বয়সে, যখন বেশিরভাগ মানুষ থিতু হয়ে যায়; যৌবনটা কেটেছে পরভাষার দেশে দাসত্বে। এরপর থেকে তিনি উম্মাহর সঙ্গেই ছিলেন, আর প্রথম বড় পরীক্ষাটি এলো প্রায় সঙ্গে সঙ্গেই।",
          },
        ],
      },
      {
        h: { en: "The Trench", bn: "পরিখা" },
        p: [
          {
            en: "In the fifth year after the migration a coalition of Quraysh and their allies marched on Madinah with a force the city could not meet in the open. Salman (RA) said that in Persia, when they were besieged, they would dig a trench around themselves. The Prophet ﷺ accepted the plan, and the whole community dug for days along the exposed northern side, the Prophet ﷺ carrying earth with them.",
            bn: "হিজরতের পঞ্চম বছরে কুরাইশ ও তাদের মিত্রদের এক জোট মদিনার দিকে অগ্রসর হয়—এমন এক বাহিনী নিয়ে, যাদের সঙ্গে খোলা ময়দানে লড়া শহরটির পক্ষে সম্ভব ছিল না। সালমান (রাঃ) বললেন, পারস্যে অবরোধের মুখে পড়লে আমরা নিজেদের চারপাশে পরিখা খনন করতাম। নবীজি ﷺ পরিকল্পনাটি গ্রহণ করলেন, আর গোটা সমাজ দিনের পর দিন খনন করল উন্মুক্ত উত্তর দিক ঘেঁষে—নবীজি ﷺ নিজেও তাঁদের সঙ্গে মাটি বইলেন।",
          },
          {
            en: "The trench held. The cavalry that made the coalition formidable could not cross it, the siege dragged on into cold and hunger, their alliance broke apart, and a wind scattered their camp. The Quran describes the fear and the deliverance of those weeks in Surah al-Ahzab, and says in 33:25 that God turned back those who disbelieved in their rage, having gained no good, and sufficed the believers in the fighting.",
            bn: "পরিখা টিকে গেল। যে অশ্বারোহী বাহিনী জোটটিকে ভয়ংকর করে তুলেছিল, তারা তা পার হতে পারল না; অবরোধ দীর্ঘ হলো শীত আর ক্ষুধার ভেতরে, তাদের জোট ভেঙে গেল, আর এক ঝড়ে তাদের শিবির ছত্রভঙ্গ হয়ে গেল। সেই সপ্তাহগুলোর ভয় ও মুক্তির বর্ণনা কুরআন দিয়েছে সূরা আল-আহযাবে, আর 33:25-এ বলেছে—আল্লাহ কাফিরদের ক্রোধসহ ফিরিয়ে দিয়েছেন, তারা কোনো কল্যাণ লাভ করেনি, আর যুদ্ধে আল্লাহই ঈমানদারদের জন্য যথেষ্ট হয়েছেন।",
          },
          {
            en: "While the digging went on, the Muhajirun said Salman is one of us and the Ansar said Salman is one of us. The sira records, though not by the strongest chain, that the Prophet ﷺ ended the argument by saying: Salman is of us, the People of the House. A Persian with no tribe in Arabia was given the only lineage that counted.",
            bn: "খননের সময় মুহাজিরগণ বললেন, সালমান আমাদের একজন; আর আনসারগণ বললেন, সালমান আমাদের একজন। সিরাতে আছে—যদিও সনদটি সবচেয়ে শক্তিশালী নয়—নবীজি ﷺ বিতর্কটি থামিয়ে দিলেন এই বলে: সালমান আমাদেরই একজন, আহলে বাইতের অন্তর্ভুক্ত। আরবে গোত্রহীন এক পারস্যবাসীকে দেওয়া হলো একমাত্র সেই বংশপরিচয়, যা প্রকৃতপক্ষে গণ্য।",
          },
        ],
      },
      {
        h: { en: "Faith at the Pleiades", bn: "সুরাইয়ায় ঈমান" },
        p: [
          {
            en: "Abu Hurayrah (RA) narrates that when 62:3 was recited, mentioning others who have not yet joined the believers, the Companions asked who they were. The Prophet ﷺ placed his hand on Salman (RA) and said that if faith were at the Pleiades, men from among these would reach it. Whole peoples who had not yet heard the message were being pointed to through one man sitting there.",
            bn: "আবু হুরায়রা (রাঃ) বর্ণনা করেছেন, 62:3 তিলাওয়াত করা হলে—যেখানে ঈমানদারদের সঙ্গে এখনো মিলিত হয়নি এমন অন্যদের কথা এসেছে—সাহাবিগণ জিজ্ঞেস করলেন তাঁরা কারা। নবীজি ﷺ সালমান (রাঃ)-এর ওপর হাত রেখে বললেন, ঈমান যদি সুরাইয়া নক্ষত্রেও থাকত, এদেরই কিছু মানুষ তা পৌঁছে নিয়ে আসত। তখনো যে জাতিগুলোর কাছে বার্তা পৌঁছায়নি, একজন উপবিষ্ট মানুষের দিকে ইঙ্গিত করেই তাদের দেখানো হলো।",
          },
          {
            en: "He is remembered too for a piece of practical wisdom. Visiting his brother Abu ad-Darda (RA) and finding him fasting continuously and praying all night while neglecting his wife, he told him: your Lord has a right over you, your body has a right over you, your family has a right over you; give to each its due. The Prophet ﷺ, told of it, said Salman had spoken the truth.",
            bn: "একটি বাস্তবজ্ঞানের কথার জন্যও তিনি স্মরণীয়। ভাই আবু দারদা (রাঃ)-এর কাছে গিয়ে দেখলেন তিনি একটানা রোজা রাখছেন, সারা রাত নামাজে দাঁড়াচ্ছেন, অথচ স্ত্রীর হক আদায় করছেন না। সালমান তাঁকে বললেন: তোমার ওপর তোমার প্রতিপালকের হক আছে, তোমার শরীরের হক আছে, তোমার পরিবারের হক আছে—প্রত্যেককে তার প্রাপ্য দাও। নবীজি ﷺ তা শুনে বললেন, সালমান সত্যই বলেছে।",
          },
          {
            en: "Umar (RA) later appointed him governor of Mada'in, the old Persian capital, so he returned to his birth country as its ruler. He refused a salary, lived on what he earned plaiting palm leaves, wore a cloak he also slept in, and left almost nothing behind. He died there in the caliphate of Uthman (RA), a long life away from the fire he had once been told never to let go out.",
            bn: "পরে উমর (রাঃ) তাঁকে মাদায়েনের গভর্নর নিযুক্ত করেন—পারস্যের সেই পুরোনো রাজধানীতে; জন্মভূমিতে তিনি ফিরলেন তার শাসক হয়ে। তিনি বেতন নিতে অস্বীকার করেন, খেজুরপাতা বুনে যা আয় হতো তাতেই চলতেন, যে চাদর গায়ে দিতেন তাতেই ঘুমাতেন, আর রেখে গেলেন প্রায় কিছুই না। উসমান (রাঃ)-এর খিলাফতকালে সেখানেই তিনি ইন্তেকাল করেন—সেই আগুন থেকে বহু দূরে, বহু দীর্ঘ এক জীবন পেরিয়ে, যা কখনো নিভতে না দিতে তাঁকে বলা হয়েছিল।",
          },
        ],
      },
    ],
  },
  abdullah_ibn_masud: {
    sections: [
      {
        h: { en: "A Shepherd Boy of Hudhayl", bn: "হুযাইলের এক রাখাল বালক" },
        p: [
          {
            en: "He belonged to Hudhayl, a tribe of no weight in Makkah, and hired himself out as a shepherd to Uqbah ibn Abi Mu'ayt. He was small in build and thin in the leg, and in a city that weighed a man by his clan and his caravans he counted for nothing. His whole standing was that he kept another man's flock honestly, and it was out on the pasture that two strangers came upon him and asked for milk.",
            bn: "তিনি ছিলেন হুযাইল গোত্রের, মক্কায় যে গোত্রের কোনো ওজন ছিল না; উকবা ইবনে আবি মুআইতের ছাগপাল চরিয়ে তিনি জীবিকা নির্বাহ করতেন। দেহে ছোটখাটো, পায়ে সরু—আর যে শহর মানুষকে মাপত তার গোত্র ও বাণিজ্য-কাফেলা দিয়ে, সেখানে তাঁর কোনো মূল্যই ছিল না। তাঁর একমাত্র পরিচয় ছিল, অন্যের পাল তিনি আমানতদারির সাথে রাখতেন; আর সেই খোলা চারণভূমিতেই দুই অপরিচিত পথিক এসে তাঁর কাছে দুধ চেয়েছিলেন।",
          },
          {
            en: "He refused, saying the animals were a trust and not his to give — and that answer, more than anything he owned, is why the story is remembered. As he himself related, the Prophet ﷺ then took a young ewe that had never borne, wiped its udder, and it gave milk that they drank. The boy asked to be taught what he had just heard, and was told he was a boy already taught. He entered Islam while the believers could still be counted on two hands.",
            bn: "তিনি অস্বীকার করে বলেন, এই পশু আমানত, দেওয়ার অধিকার আমার নেই—তাঁর সম্পদের চেয়ে এই উত্তরটিই তাঁকে ইতিহাসে স্মরণীয় করেছে। তিনি নিজেই বর্ণনা করেছেন, এরপর নবীজি ﷺ এমন একটি অল্পবয়সী ভেড়ি নেন যা কখনো বাচ্চা দেয়নি, তার স্তনে হাত বুলান, আর তা থেকে দুধ পাওয়া যায় ও তাঁরা তা পান করেন। বালকটি সেই কথাগুলো শেখানোর আবেদন করলে তাঁকে বলা হয়, তুমি তো শিখানো বালক। মুমিনদের সংখ্যা তখন দুই হাতে গোনা যেত।",
          },
        ],
      },
      {
        h: { en: "The First Voice at the Ka'bah", bn: "কাবার সামনে প্রথম কণ্ঠ" },
        p: [
          {
            en: "For years the Quran had been read in closed houses and lowered voices. The believers in Makkah agreed among themselves that Quraysh had never once heard it recited openly, and that someone would have to be the first. Abdullah offered himself. They objected that he had no clan strong enough to avenge him if he were harmed, and that the men they feared would answer him with their fists. He replied that Allah would protect him, and went in the morning.",
            bn: "বছরের পর বছর কুরআন পড়া হয়েছে বন্ধ ঘরে, নিচু স্বরে। মক্কার মুমিনগণ নিজেদের মধ্যে আলোচনা করে দেখলেন, কুরাইশ একবারও প্রকাশ্যে কুরআন শোনেনি, আর কাউকে না কাউকে প্রথম হতে হবে। আবদুল্লাহ নিজেকে পেশ করলেন। সঙ্গীরা আপত্তি তুললেন—তাঁর পেছনে এমন শক্তিশালী গোত্র নেই যারা আঘাতের প্রতিশোধ নিতে পারে, আর যাদের তাঁরা ভয় করেন তারা জবাব দেবে হাতের মার দিয়ে। তিনি বললেন, আল্লাহই তাঁকে রক্ষা করবেন—এবং সকালেই বেরিয়ে পড়লেন।",
          },
          {
            en: "He stood at the Station of Ibrahim while the chiefs sat in their circles, and he raised his voice with 55:1-4 — the Most Merciful, who taught the Quran, created man, taught him clear speech. They struck him in the face until it was cut and swollen. He came back and said that the enemies of Allah had never been more contemptible in his eyes, and that he would go again the next morning if they wished.",
            bn: "মাকামে ইবরাহিমের পাশে দাঁড়িয়ে, নেতারা যখন নিজেদের মজলিসে বসা, তিনি উচ্চস্বরে পড়লেন 55:1-4—পরম করুণাময়, যিনি কুরআন শিক্ষা দিয়েছেন, মানুষ সৃষ্টি করেছেন, তাকে ভাষা শিখিয়েছেন। তারা তাঁর মুখে আঘাত করতে থাকল, মুখ কেটে ফুলে গেল। ফিরে এসে তিনি বললেন, আল্লাহর শত্রুরা তাঁর চোখে কখনো এত তুচ্ছ মনে হয়নি; আর তাঁরা চাইলে পরদিন সকালেই তিনি আবার যাবেন।",
          },
        ],
      },
      {
        h: { en: "Keeper of the Sandals and Cushion", bn: "জুতা ও বালিশের রক্ষক" },
        p: [
          {
            en: "In Madinah he became the Prophet's ﷺ shadow. He carried his sandals, held his tooth-stick and his water for ablution, and arranged his cushion, so that Madinah called him the keeper of the sandals and the cushion. He went in and out of the household so freely that strangers took him for one of the family, and he was told that his permission to enter was that he lift the curtain and listen until forbidden.",
            bn: "মদিনায় তিনি হয়ে উঠলেন নবীজি ﷺ-এর ছায়াসঙ্গী। তিনি তাঁর জুতা বহন করতেন, মিসওয়াক ও অজুর পানি এগিয়ে দিতেন, বালিশ গুছিয়ে দিতেন—এ কারণেই মদিনা তাঁকে ডাকত জুতা ও বালিশের রক্ষক বলে। ঘরে তাঁর যাতায়াত এতটাই স্বাভাবিক ছিল যে অপরিচিতজন তাঁকে পরিবারেরই একজন ভাবত; তাঁকে বলা হয়েছিল, তাঁর প্রবেশের অনুমতি এটাই যে তিনি পর্দা তুলে শুনবেন, যতক্ষণ না নিষেধ করা হয়।",
          },
          {
            en: "That closeness was schooling as much as service. He heard the Quran in the order it came down and knew the circumstance of each passage, so that he could say of every surah he recited where it was revealed and about what. Once his thin legs were exposed by the wind and some of the companions laughed; the Prophet ﷺ told them that those two legs were heavier in the scale on the Day of Judgement than the mountain of Uhud.",
            bn: "এই নৈকট্য যতটা খিদমত, ততটাই ছিল শিক্ষা। তিনি কুরআন শুনেছেন নাজিলের ক্রমেই, জানতেন প্রতিটি অংশের প্রেক্ষাপট—তাই যে সুরাই তিনি পড়তেন, বলতে পারতেন তা কোথায় ও কী বিষয়ে নাজিল হয়েছে। একদিন বাতাসে তাঁর সরু পা দুটি অনাবৃত হলে কিছু সাহাবি হেসে ফেলেন; নবীজি ﷺ বললেন, কিয়ামতের দিন মিজানে এই পা দুটি উহুদ পাহাড়ের চেয়েও ভারী হবে।",
          },
        ],
      },
      {
        h: { en: "Recite It as It Came Down", bn: "যেভাবে নাজিল হয়েছে সেভাবেই পড়ো" },
        p: [
          {
            en: "The Prophet ﷺ named four men and said, take the Quran from them, and began with Ibn Umm Abd — Abdullah ibn Masud. It is also reported that he ﷺ said whoever wished to recite the Quran fresh, as it was sent down, should recite it in the reading of Ibn Umm Abd. Ibn Masud held that no verse had been revealed without his knowing where and why, and no one who knew him disputed it.",
            bn: "নবীজি ﷺ চারজনের নাম নিয়ে বলেছিলেন, তাঁদের কাছ থেকে কুরআন শেখো—আর শুরু করেছিলেন ইবনে উম্মে আবদ, অর্থাৎ আবদুল্লাহ ইবনে মাসউদকে দিয়ে। তাঁর ﷺ থেকে এও বর্ণিত যে, যে ব্যক্তি কুরআনকে নাজিলের সময়কার সজীবতায় পড়তে চায়, সে যেন ইবনে উম্মে আবদের কিরাআতে পড়ে। ইবনে মাসউদ বলতেন, এমন কোনো আয়াত নেই যার নাজিলের স্থান ও কারণ তাঁর জানা নেই—আর যাঁরা তাঁকে চিনতেন, কেউ তা অস্বীকার করেননি।",
          },
          {
            en: "One day the Prophet ﷺ asked him to recite. He said, shall I recite to you when it was revealed to you? The Prophet ﷺ answered that he loved to hear it from another. So he read from Surah an-Nisa until he reached 4:41 — how will it be when We bring from every nation a witness, and bring you against these as a witness — and the Prophet ﷺ said, that is enough. Abdullah looked up and found his eyes overflowing.",
            bn: "একদিন নবীজি ﷺ তাঁকে তিলাওয়াত করতে বললেন। তিনি বললেন, আপনার ওপরই যা নাজিল হয়েছে, তা আমি আপনাকে শোনাব? নবীজি ﷺ বললেন, অন্যের কণ্ঠে শুনতে তাঁর ভালো লাগে। তিনি সুরা নিসা পড়তে থাকলেন, যতক্ষণ না পৌঁছালেন 4:41-এ—তখন কী অবস্থা হবে, যখন আমি প্রত্যেক জাতি থেকে একজন সাক্ষী আনব এবং আপনাকে আনব তাদের ওপর সাক্ষীরূপে। নবীজি ﷺ বললেন, যথেষ্ট। আবদুল্লাহ তাকিয়ে দেখলেন, তাঁর দুই চোখ অশ্রুতে ভেসে যাচ্ছে।",
          },
        ],
      },
      {
        h: { en: "Badr and the Little Shepherd", bn: "বদর ও সেই ছোট রাখাল" },
        p: [
          {
            en: "At Badr the man who had ordered him beaten in Makkah met him again. Abu Jahl lay mortally wounded among the fallen, and it was Abdullah who found him and set his foot on his neck. The dying chief looked up and asked whether the little shepherd had climbed so high. He answered him and finished him, and carried his head back to the Prophet ﷺ, who praised Allah when he saw it.",
            bn: "বদরে সেই লোকটির সঙ্গে তাঁর আবার দেখা হলো, যার হুকুমে মক্কায় তাঁকে মারা হয়েছিল। আবু জাহল মরণাপন্ন অবস্থায় নিহতদের মাঝে পড়ে ছিল; আবদুল্লাহই তাকে খুঁজে পেয়ে তার গলার ওপর পা রাখলেন। মৃত্যুপথযাত্রী নেতা তাকিয়ে জিজ্ঞেস করল, সেই ছোট রাখাল কি এতটা উঁচুতে উঠে গেছে? তিনি জবাব দিলেন, তাকে শেষ করলেন এবং তার মাথা নিয়ে নবীজি ﷺ-এর কাছে ফিরলেন; নবীজি ﷺ তা দেখে আল্লাহর প্রশংসা করলেন।",
          },
          {
            en: "The scene closed a circle that had opened on a hillside outside Makkah. The boy with no clan, who had been struck in the face for reading 55:1-4 aloud, stood at the end of the first battle over the body of the man who had led that persecution. He fought in every campaign after it, and lived to see the religion he had recited in a swollen mouth carried out of Arabia altogether.",
            bn: "এই দৃশ্যে বৃত্তটি সম্পূর্ণ হলো, যার সূচনা হয়েছিল মক্কার বাইরের এক পাহাড়ি ঢালে। গোত্রহীন সেই বালক, যাকে প্রকাশ্যে 55:1-4 পড়ার অপরাধে মুখে আঘাত করা হয়েছিল, প্রথম যুদ্ধের শেষে দাঁড়িয়ে রইলেন সেই ব্যক্তির দেহের পাশে যে ওই নির্যাতনের নেতৃত্ব দিয়েছিল। এরপরের প্রতিটি অভিযানে তিনি অংশ নেন এবং দেখে যান, ফোলা মুখে তিনি যে দ্বীন তিলাওয়াত করেছিলেন, তা আরব ছাড়িয়ে দূরদেশে পৌঁছে গেছে।",
          },
        ],
      },
      {
        h: { en: "The School He Left in Kufa", bn: "কুফায় রেখে যাওয়া তাঁর পাঠশালা" },
        p: [
          {
            en: "Umar (RA) sent him to Kufa as teacher and keeper of the treasury and wrote to its people that he was giving them a man he would rather have kept for himself. Abdullah taught there for years, and the circle that formed around him produced Alqamah, al-Aswad and Masruq, and through them the fiqh and recitation of Iraq for generations afterwards. He would not let his students take a ruling on his authority alone if he was unsure of it.",
            bn: "উমর (রাঃ) তাঁকে শিক্ষক ও বাইতুল মালের দায়িত্ব দিয়ে কুফায় পাঠান এবং সেখানকার লোকদের লিখে জানান যে, এমন একজনকে তিনি তাদের দিচ্ছেন যাঁকে নিজের কাছেই রাখতে চেয়েছিলেন। আবদুল্লাহ বছরের পর বছর সেখানে পড়িয়েছেন; তাঁকে ঘিরে গড়ে ওঠা হালকা থেকে বেরিয়ে এসেছেন আলকামা, আল-আসওয়াদ ও মাসরুক—আর তাঁদের মাধ্যমেই যুগ যুগ ধরে ইরাকের ফিকহ ও কিরাআতের ধারা প্রবাহিত হয়েছে। কোনো মাসআলায় নিজে নিশ্চিত না হলে তিনি ছাত্রদের তাঁর কথার ওপর নির্ভর করতে দিতেন না।",
          },
          {
            en: "Asked once about a matter he did not know, he said that whoever has knowledge should speak, and whoever does not should say that Allah knows best — for it is part of knowledge to say I do not know, and he recited 38:86, that the Prophet ﷺ asked no reward and was not one to pretend. That restraint is what made his school trusted. He died in Madinah about twenty years after the Prophet ﷺ.",
            bn: "একবার অজানা বিষয়ে জিজ্ঞাসিত হলে তিনি বলেন, যার জানা আছে সে বলুক, আর যার নেই সে বলুক আল্লাহই ভালো জানেন—কারণ 'আমি জানি না' বলাও জ্ঞানেরই অংশ; এরপর তিনি পড়েন 38:86, যে নবীজি ﷺ কোনো প্রতিদান চাননি এবং তিনি ভান করার লোক নন। এই সংযমই তাঁর পাঠশালাকে আস্থাভাজন করেছিল। নবীজি ﷺ-এর প্রায় বিশ বছর পর তিনি মদিনায় ইন্তেকাল করেন।",
          },
        ],
      },
    ],
  },
  abu_hurayrah: {
    sections: [
      {
        h: { en: "The Man of the Kitten", bn: "বিড়ালছানার সেই মানুষ" },
        p: [
          {
            en: "He came from Daws in the mountains of the south, an orphan of a poor house, and even his own name is reported in so many forms that he used to say he was not certain of it himself. What stuck to him instead was a kunyah given for a small thing: he used to carry a kitten in his sleeve while tending his people's flock, and the Prophet ﷺ called him the father of the kitten. He carried that name for the rest of his life.",
            bn: "তিনি এসেছিলেন দক্ষিণের পাহাড়ি অঞ্চলের দাউস গোত্র থেকে—দরিদ্র ঘরের এক এতিম; এমনকি তাঁর নিজের নামও এত রকমভাবে বর্ণিত যে তিনি বলতেন, নামটি নিয়ে তিনি নিজেই নিশ্চিত নন। বরং তাঁর সঙ্গে লেগে থাকল এক ছোট ঘটনার সূত্রে পাওয়া উপনাম: গোত্রের পাল চরানোর সময় তিনি জামার আস্তিনে একটি বিড়ালছানা নিয়ে ঘুরতেন, আর নবীজি ﷺ তাঁকে ডাকলেন বিড়ালছানার পিতা বলে। আজীবন তিনি সেই নামই বহন করেছেন।",
          },
          {
            en: "He reached Madinah while the army was away at Khaybar, so his companionship of the Prophet ﷺ lasted only about three or four years. Everything he is known for was gathered in that short window. He did not enter Islam early, he fought in no famous battle before it, and he owned nothing; what he had was time, and he spent every hour of it in one place.",
            bn: "খায়বারে সেনাদল রওনা হয়ে যাওয়ার সময় তিনি মদিনায় পৌঁছান, ফলে নবীজি ﷺ-এর সাহচর্য তিনি পেয়েছেন কেবল তিন-চার বছর। যে সব কারণে তিনি পরিচিত, তার সবই সংগৃহীত হয়েছে ওই স্বল্প সময়ের ভেতর। তিনি আগেভাগে ইসলাম গ্রহণ করেননি, এর আগের কোনো বিখ্যাত যুদ্ধে ছিলেন না, আর সম্পদও তাঁর কিছুই ছিল না; যা ছিল তা হলো সময়—আর সেই সময়ের প্রতিটি ঘণ্টা তিনি ব্যয় করেছেন একটিমাত্র জায়গায়।",
          },
        ],
      },
      {
        h: { en: "Hunger on the Bench", bn: "সুফফার চাতালে ক্ষুধা" },
        p: [
          {
            en: "He lived on the raised bench at the back of the mosque with the poor of the Suffah, men with no house, no family in the city and no trade. He said of those days that he would press his stomach against the ground to dull the hunger, and tie a stone over it. He fell unconscious between the pulpit and Aishah's (RA) chamber more than once from hunger, and passers-by assumed he was mad and put a foot on his neck to cure him.",
            bn: "তিনি থাকতেন মসজিদের পেছনের উঁচু চাতালে—আহলে সুফফার দরিদ্রদের সঙ্গে, যাঁদের ঘর ছিল না, শহরে আত্মীয় ছিল না, ব্যবসাও ছিল না। সেই দিনগুলো সম্পর্কে তিনি বলতেন, ক্ষুধার যন্ত্রণা কমাতে তিনি পেট মাটিতে চেপে ধরতেন, পেটে পাথর বাঁধতেন। ক্ষুধায় তিনি একাধিকবার মিম্বর ও আয়েশা (রাঃ)-এর কক্ষের মাঝখানে অজ্ঞান হয়ে পড়েছেন, আর পথচারীরা ধরে নিত তিনি উন্মাদ হয়ে গেছেন এবং সারিয়ে তোলার জন্য তাঁর ঘাড়ে পা রাখত।",
          },
          {
            en: "The famine was not incidental to his learning; it was the price of it. He explained later that he had no field to water and no goods to sell, so while others left the mosque he stayed. Poverty bought him a seat that wealth could not buy, and it is the reason a man who arrived four years before the end knows more of the Prophet's ﷺ daily speech than men who had walked beside him for twenty.",
            bn: "এই অনাহার তাঁর জ্ঞানার্জনের আনুষঙ্গিক ঘটনা ছিল না, বরং ছিল তার মূল্য। পরে তিনি ব্যাখ্যা করেছেন—তাঁর সেচ দেওয়ার মতো জমি ছিল না, বেচার মতো পণ্য ছিল না, তাই অন্যরা যখন মসজিদ ছেড়ে যেতেন, তিনি থেকে যেতেন। দারিদ্র্য তাঁকে এমন আসন কিনে দিয়েছিল যা সম্পদ দিয়ে কেনা যেত না; আর এ কারণেই শেষের চার বছর আগে আসা একজন মানুষ নবীজি ﷺ-এর দৈনন্দিন কথা এমনদের চেয়েও বেশি জানতেন, যাঁরা বিশ বছর তাঁর পাশে হেঁটেছেন।",
          },
        ],
      },
      {
        h: { en: "Why He Narrated So Much", bn: "কেন তিনি এত বর্ণনা করলেন" },
        p: [
          {
            en: "People asked him in his own lifetime why he had so much to report. His answer, preserved in Sahih al-Bukhari, was plain: the Muhajirun were occupied with their trade in the markets and the Ansar with their land and property, while he clung to the Prophet ﷺ on an empty stomach, present when they were absent and remembering when they forgot. It was not a claim to superiority. It was an account of how he had spent his hours.",
            bn: "তাঁর জীবদ্দশাতেই লোকেরা জিজ্ঞেস করেছে, তাঁর কাছে বর্ণনার এত ভাণ্ডার কেন। সহিহ বুখারিতে সংরক্ষিত তাঁর উত্তরটি সরল: মুহাজিরগণ ব্যস্ত থাকতেন বাজারের ব্যবসায়, আনসারগণ জমি ও সম্পত্তি নিয়ে, আর তিনি খালি পেটে নবীজি ﷺ-এর সঙ্গে লেগে থাকতেন—তাঁরা যখন অনুপস্থিত তিনি তখন উপস্থিত, তাঁরা যখন ভুলে যেতেন তিনি তখন মনে রাখতেন। এটি নিজের শ্রেষ্ঠত্বের দাবি ছিল না; ছিল কেবল সময় ব্যয়ের হিসাব।",
          },
          {
            en: "He also said that were it not for two verses in the Book of Allah he would never have narrated a single hadith, and he recited 2:159, the warning against concealing the clear guidance that has been revealed. And when he once complained of forgetting, he was told to spread his garment; he spread it, gathered it to his chest when the Prophet ﷺ finished speaking, and said he never forgot anything after that day.",
            bn: "তিনি আরও বলতেন, আল্লাহর কিতাবের দুটি আয়াত না থাকলে তিনি একটি হাদিসও বর্ণনা করতেন না; এরপর তিনি পড়তেন 2:159—নাজিলকৃত সুস্পষ্ট হিদায়াত গোপন করার বিরুদ্ধে কঠিন সতর্কবাণী। আর একবার ভুলে যাওয়ার অভিযোগ করলে তাঁকে বলা হয় চাদর বিছিয়ে দিতে; তিনি বিছিয়ে দিলেন, নবীজি ﷺ কথা শেষ করার পর তা বুকে জড়িয়ে নিলেন—এবং বলতেন, সেদিনের পর তিনি আর কিছুই ভোলেননি।",
          },
        ],
      },
      {
        h: { en: "A Du'a for His Mother", bn: "মায়ের জন্য এক দোয়া" },
        p: [
          {
            en: "His mother had come with him from Daws but refused Islam, and one day she said something about the Prophet ﷺ that he could not bear to hear. He came to the mosque weeping and asked the Prophet ﷺ to pray for her guidance, and he prayed, O Allah, guide the mother of Abu Hurayrah. He ran home in joy, found the door shut and heard water, and she came out saying the words of faith.",
            bn: "তাঁর মা দাউস থেকে তাঁর সঙ্গেই এসেছিলেন, কিন্তু ইসলাম গ্রহণ করেননি; একদিন তিনি নবীজি ﷺ সম্পর্কে এমন কিছু বললেন যা শোনা তাঁর পক্ষে অসহনীয় ছিল। কাঁদতে কাঁদতে তিনি মসজিদে এসে নবীজি ﷺ-এর কাছে মায়ের হিদায়াতের জন্য দোয়া চাইলেন, আর নবীজি ﷺ দোয়া করলেন—হে আল্লাহ, আবু হুরায়রার মাকে হিদায়াত দিন। আনন্দে ছুটে বাড়ি ফিরে তিনি দরজা বন্ধ পেলেন, পানির শব্দ শুনলেন, আর মা বেরিয়ে এসে ঈমানের কালিমা উচ্চারণ করলেন।",
          },
          {
            en: "He went back and asked for one more supplication: that he and his mother be made beloved to the believing servants of Allah. That prayer, he believed, was answered in every generation that has read his name in a chain of narration since. He served her until she died, and would stand at her door and greet her before entering, in the manner the Quran commands towards parents in 17:23.",
            bn: "তিনি ফিরে গিয়ে আরেকটি দোয়া চাইলেন—যেন তিনি ও তাঁর মা আল্লাহর মুমিন বান্দাদের কাছে প্রিয় হয়ে যান। তিনি বিশ্বাস করতেন, প্রতিটি যুগে যাঁরা কোনো সনদে তাঁর নাম পড়েছেন, তাঁদের মাধ্যমেই সেই দোয়া কবুল হয়েছে। মায়ের মৃত্যু পর্যন্ত তিনি তাঁর সেবা করেছেন; ঘরে ঢোকার আগে দরজায় দাঁড়িয়ে সালাম দিতেন—ঠিক যেভাবে 17:23-এ কুরআন পিতামাতার প্রতি আচরণের নির্দেশ দিয়েছে।",
          },
        ],
      },
      {
        h: { en: "The Objection and the Answer", bn: "আপত্তি ও তার জবাব" },
        p: [
          {
            en: "The objection to him is old and should be stated honestly: how could a man of three or four years in the Prophet's ﷺ company transmit more than companions of twenty? Some in his own time asked him to slow down, and Aishah (RA) questioned the pace at which he reported. He did not resent it; he replied that she was occupied with the mirror and the household while he was occupied with nothing at all.",
            bn: "তাঁর বিরুদ্ধে আপত্তিটি পুরোনো, আর তা সততার সাথেই বলা উচিত: তিন-চার বছর নবীজি ﷺ-এর সাহচর্য পাওয়া একজন মানুষ কীভাবে বিশ বছরের সাহাবিদের চেয়েও বেশি বর্ণনা করতে পারেন? তাঁর সমকালেই কেউ কেউ তাঁকে ধীরে বলতে অনুরোধ করেছেন, আর আয়েশা (রাঃ) তাঁর বর্ণনার গতি নিয়ে প্রশ্ন তুলেছেন। তিনি তাতে অসন্তুষ্ট হননি; বলেছেন, তিনি ব্যস্ত ছিলেন আয়না ও সংসার নিয়ে, আর তিনি নিজে ব্যস্ত ছিলেন কিছু নিয়েই নয়।",
          },
          {
            en: "The scholars answer it on solid ground. The figure of over five thousand counts every chain separately, so the distinct reports are far fewer. Much of what he transmitted he took from senior companions and then reported, as the critics of hadith well knew and recorded. He was examined like everyone else: his narrations were compared, cross-checked and graded, and senior companions themselves narrated from him. Volume alone was never his proof, and the men who built the science of hadith never treated it as one.",
            bn: "আলেমগণ এর জবাব দিয়েছেন দৃঢ় ভিত্তির ওপর। পাঁচ হাজারের বেশি বলে যে সংখ্যা, তাতে প্রতিটি সনদ আলাদা করে গোনা হয়েছে—ফলে স্বতন্ত্র মূল বর্ণনার সংখ্যা অনেক কম। তাঁর বর্ণিত বহু হাদিস তিনি প্রবীণ সাহাবিদের কাছ থেকে নিয়ে বর্ণনা করেছেন, যা হাদিস-সমালোচকগণ ভালোভাবেই জানতেন ও লিপিবদ্ধ করেছেন। সবার মতো তাঁকেও যাচাই করা হয়েছে: তাঁর বর্ণনা মিলিয়ে দেখা হয়েছে, তুলনা করা হয়েছে, মান নির্ধারণ করা হয়েছে—আর প্রবীণ সাহাবিগণ নিজেরাই তাঁর থেকে বর্ণনা করেছেন। কেবল সংখ্যা কখনোই তাঁর প্রমাণ ছিল না, আর হাদিসশাস্ত্রের নির্মাতারাও তা প্রমাণ হিসেবে নেননি।",
          },
        ],
      },
      {
        h: { en: "What He Left the Ummah", bn: "উম্মাহকে তিনি যা দিয়ে গেলেন" },
        p: [
          {
            en: "Umar (RA) appointed him over Bahrayn and later called him to account, as he did with all his governors, and he returned to teaching. Hundreds of students narrated from him in Madinah, and through them nearly every chapter of law and worship carries something he heard. He fasted often, prayed by night in shifts with his family, and kept the poverty of the Suffah in his habits long after he no longer needed to.",
            bn: "উমর (রাঃ) তাঁকে বাহরাইনের দায়িত্ব দেন এবং পরে সব গভর্নরের মতো তাঁর কাছেও হিসাব চান; এরপর তিনি আবার শিক্ষকতায় ফেরেন। মদিনায় শত শত ছাত্র তাঁর থেকে বর্ণনা করেছেন, আর তাঁদের মাধ্যমেই ফিকহ ও ইবাদতের প্রায় প্রতিটি অধ্যায়ে তাঁর শোনা কিছু না কিছু রয়ে গেছে। তিনি অধিক রোজা রাখতেন, পরিবারের সঙ্গে পালা করে রাত জেগে নামাজ পড়তেন, আর প্রয়োজন ফুরিয়ে যাওয়ার বহু পরেও সুফফার সেই সাদাসিধে জীবন ধরে রেখেছিলেন।",
          },
          {
            en: "He said near the end that he had memorised two vessels of knowledge from the Prophet ﷺ; one he had poured out among the people, and had he poured out the other his throat would have been cut — meaning what he knew of coming trials and the men who would cause them. He died in Madinah, and the sunnah as later generations received it is unimaginable without the years he spent hungry in the back of a mosque.",
            bn: "জীবনের শেষভাগে তিনি বলেছেন, নবীজি ﷺ থেকে তিনি দুই ভাণ্ডার জ্ঞান মুখস্থ রেখেছেন; একটি তিনি মানুষের মাঝে ঢেলে দিয়েছেন, আর অন্যটি ঢেলে দিলে তাঁর গলা কেটে ফেলা হতো—অর্থাৎ আসন্ন ফিতনা ও তার কুশীলবদের সম্পর্কে তাঁর জানা বিষয়গুলো। তিনি মদিনায় ইন্তেকাল করেন; আর পরবর্তী প্রজন্ম যে সুন্নাহ পেয়েছে, মসজিদের পেছনে ক্ষুধার্ত অবস্থায় কাটানো তাঁর সেই বছরগুলো ছাড়া তা কল্পনাই করা যায় না।",
          },
        ],
      },
    ],
  },
  abdullah_ibn_abbas: {
    sections: [
      {
        h: { en: "Born in the Years of Siege", bn: "অবরোধের বছরগুলোতে জন্ম" },
        p: [
          {
            en: "He was born to al-Abbas ibn Abd al-Muttalib in the years when Banu Hashim were shut into their quarter and boycotted by Quraysh, a few years before the Hijrah. He was therefore a child of the household of the Prophet ﷺ by blood and by daily contact, and his mother Umm al-Fadl was among the earliest women to accept Islam. He grew up seeing revelation arrive, not hearing about it from a distance.",
            bn: "তাঁর জন্ম আল-আব্বাস ইবনে আবদুল মুত্তালিবের ঘরে—সেই বছরগুলোতে, যখন বনু হাশিমকে তাদের মহল্লায় আবদ্ধ করে কুরাইশ বয়কট চালিয়েছিল; হিজরতের কয়েক বছর আগে। ফলে রক্তের সম্পর্কে ও প্রতিদিনের সান্নিধ্যে তিনি ছিলেন নবীজি ﷺ-এর পরিবারেরই সন্তান, আর তাঁর মা উম্মুল ফদল ছিলেন সর্বপ্রথম ইসলাম গ্রহণকারী নারীদের একজন। তিনি বড় হয়েছেন ওহি নাজিল হতে দেখে—দূর থেকে তার খবর শুনে নয়।",
          },
          {
            en: "He was still a boy when the Prophet ﷺ died — the reports place him at about thirteen — and this is the fact that makes his later standing remarkable. He did not have decades of companionship to draw on. He had a handful of years as a child, an exact memory, and after that a lifetime of hunting down what the older men knew and testing it.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের সময় তিনি ছিলেন বালক—বর্ণনাগুলো তাঁর বয়স আনুমানিক তেরো বলে; আর এই তথ্যটিই তাঁর পরবর্তী মর্যাদাকে বিস্ময়কর করে তোলে। দীর্ঘ কয়েক দশকের সাহচর্য তাঁর ছিল না। ছিল শৈশবের হাতেগোনা কয়েকটি বছর, নিখুঁত এক স্মৃতিশক্তি, আর তারপর সারাটি জীবন—প্রবীণদের জানা বিষয়গুলো খুঁজে বের করা ও যাচাই করার সাধনা।",
          },
        ],
      },
      {
        h: { en: "The Du'a That Made Him", bn: "যে দোয়া তাঁকে গড়ে দিল" },
        p: [
          {
            en: "One night he stayed in the house of his aunt Maymunah (RA) and set out the water for the Prophet's ﷺ ablution before he woke. When the Prophet ﷺ found it ready he asked who had prepared it, and then embraced the boy and prayed for him: O Allah, give him understanding of the religion. It is also reported that he prayed, and teach him the interpretation of the Book.",
            bn: "এক রাতে তিনি তাঁর খালা মাইমুনা (রাঃ)-এর ঘরে থেকে যান এবং নবীজি ﷺ জাগার আগেই তাঁর অজুর পানি প্রস্তুত করে রাখেন। নবীজি ﷺ পানি প্রস্তুত পেয়ে জিজ্ঞেস করলেন, কে রেখেছে; এরপর বালকটিকে বুকে জড়িয়ে দোয়া করলেন—হে আল্লাহ, তাকে দ্বীনের গভীর জ্ঞান দান করুন। এও বর্ণিত আছে যে তিনি দোয়া করেছিলেন, আর তাকে কিতাবের ব্যাখ্যা শিক্ষা দিন।",
          },
          {
            en: "That same night he stood to pray at the Prophet's ﷺ left side, and the Prophet ﷺ took him gently by the ear and moved him round to the right. A small correction, remembered for a lifetime, and typical of how he learned: he watched everything closely and reported it exactly, down to the number of rak'ahs and the words of the supplication that followed them.",
            bn: "সেই রাতেই তিনি নবীজি ﷺ-এর বাঁ পাশে দাঁড়িয়ে নামাজ শুরু করেন, আর নবীজি ﷺ কোমলভাবে তাঁর কান ধরে ঘুরিয়ে ডান পাশে দাঁড় করিয়ে দেন। ছোট্ট একটি সংশোধন, যা তিনি সারাজীবন মনে রেখেছেন—আর এটিই ছিল তাঁর শেখার ধরন: তিনি সবকিছু গভীর মনোযোগে দেখতেন এবং হুবহু বর্ণনা করতেন, এমনকি রাকাতের সংখ্যা ও তারপর পঠিত দোয়ার শব্দগুলো পর্যন্ত।",
          },
        ],
      },
      {
        h: { en: "Dust on His Cloak", bn: "চাদরের ওপর ধুলো" },
        p: [
          {
            en: "After the Prophet ﷺ died he told a young Ansari that the companions were many and would not last forever, and proposed that they go together and learn from them. The young man saw no need for it. Abdullah went alone. He would walk to the house of a companion who had heard a hadith he wanted, and if the man was resting he would not knock.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর তিনি এক তরুণ আনসারিকে বলেছিলেন—সাহাবিগণ এখন বহু, কিন্তু তাঁরা চিরকাল থাকবেন না; চলো আমরা একসঙ্গে তাঁদের কাছ থেকে শিখি। তরুণটি এর প্রয়োজন দেখেননি। আবদুল্লাহ একাই বেরিয়ে পড়লেন। যাঁর কাছে তাঁর কাঙ্ক্ষিত কোনো হাদিস আছে, সেই সাহাবির বাড়িতে গিয়ে দেখতেন তিনি বিশ্রামে আছেন—তখন তিনি দরজায় কড়া নাড়তেন না।",
          },
          {
            en: "He would spread his cloak at the threshold and wait in the wind until the man woke and came out, astonished, saying: cousin of the Messenger of Allah, why did you not send for me? He answered that knowledge is more deserving of being visited than of being summoned. Years later, when crowds gathered at his own door, the same Ansari saw it and said that this boy had been wiser than he was.",
            bn: "চৌকাঠে নিজের চাদর বিছিয়ে বাতাসের মধ্যে অপেক্ষা করতেন, যতক্ষণ না লোকটি ঘুম থেকে উঠে বিস্মিত হয়ে বেরিয়ে এসে বলতেন—হে আল্লাহর রাসূলের চাচাতো ভাই, আমাকে ডেকে পাঠালেন না কেন? তিনি বলতেন, জ্ঞানকে ডেকে আনার চেয়ে তার কাছে যাওয়াই তার হক। বহু বছর পর যখন তাঁর নিজের দরজায় মানুষের ভিড় জমত, সেই আনসারি তা দেখে বলেছিলেন—এই বালকটি আমার চেয়ে বেশি বুদ্ধিমান ছিল।",
          },
        ],
      },
      {
        h: { en: "Seated Among the Elders", bn: "প্রবীণদের মজলিসে আসন" },
        p: [
          {
            en: "Umar (RA) used to seat him in his council with the veterans of Badr, and some of them resented it, asking why this youth sat with them when they had sons his age. Umar answered by asking the gathering about the surah beginning with the coming of the help of Allah and the opening. They said it was a command to praise Allah and seek His forgiveness when victory came.",
            bn: "উমর (রাঃ) তাঁকে বদরের প্রবীণ যোদ্ধাদের সঙ্গে নিজের পরামর্শসভায় বসাতেন; তাঁদের কেউ কেউ তাতে অসন্তুষ্ট হয়ে প্রশ্ন তুলতেন—আমাদের ঘরে তো এই বয়সী ছেলে আছে, তবু এই তরুণ আমাদের সঙ্গে বসে কেন? উমর জবাব দিলেন সভাকে একটি প্রশ্ন করে—আল্লাহর সাহায্য ও বিজয় আসার কথা দিয়ে শুরু হওয়া সুরাটি সম্পর্কে। তাঁরা বললেন, বিজয় এলে আল্লাহর প্রশংসা ও ক্ষমা প্রার্থনার নির্দেশ এতে রয়েছে।",
          },
          {
            en: "Then he turned to Abdullah, who said it was the announcement of the Prophet's ﷺ approaching death, made known to him in 110:1-3: when the help came and the people entered the religion in crowds, his task was complete and he was told to prepare to meet his Lord. Umar said that he knew of it only what the boy had said, and no one questioned the seating again.",
            bn: "এরপর তিনি আবদুল্লাহর দিকে ফিরলেন, আর তিনি বললেন—এটি ছিল নবীজি ﷺ-এর আসন্ন বিদায়ের ঘোষণা, যা 110:1-3-এ তাঁকে জানানো হয়েছিল: সাহায্য এসে গেলে ও মানুষ দলে দলে দ্বীনে প্রবেশ করলে তাঁর কাজ পূর্ণ হলো, আর তাঁকে বলা হলো প্রভুর সাক্ষাতের প্রস্তুতি নিতে। উমর বললেন, তিনি নিজেও এ বিষয়ে তা-ই জানেন যা এই বালক বলল—এরপর আসন নিয়ে আর কেউ প্রশ্ন তোলেনি।",
          },
        ],
      },
      {
        h: { en: "The Ocean and the Interpreter", bn: "সমুদ্র ও কুরআনের ব্যাখ্যাকার" },
        p: [
          {
            en: "The names the ummah gave him say what it thought of him: al-Bahr, the ocean, for the depth he could be drawn from without emptying, and Tarjuman al-Quran, the interpreter of the Quran. His method was disciplined. He explained the Book first by the Book, then by what the Prophet ﷺ had said, then by the circumstances of revelation he had verified from those present, and only then by the plain speech of the Arabs.",
            bn: "উম্মাহ তাঁকে যে উপাধিগুলো দিয়েছে, তাতেই বোঝা যায় তাঁর সম্পর্কে ধারণা কী ছিল: 'আল-বাহর'—সমুদ্র, কারণ যত তোলা হোক তা নিঃশেষ হতো না; আর 'তারজুমানুল কুরআন'—কুরআনের ব্যাখ্যাকার। তাঁর পদ্ধতি ছিল সুশৃঙ্খল। তিনি কিতাবের ব্যাখ্যা করতেন প্রথমে কিতাব দিয়ে, তারপর নবীজি ﷺ-এর বক্তব্য দিয়ে, তারপর উপস্থিত সাহাবিদের কাছ থেকে যাচাই করা শানে নুজুল দিয়ে, আর সবশেষে আরবদের প্রচলিত ভাষা-প্রয়োগ দিয়ে।",
          },
          {
            en: "He knew the limits of the method too, and would recite 3:7 on those who are firm in knowledge and say they believe in it, all of it being from their Lord. When the Haruriyyah broke away over verses they had taken out of place, he was sent to argue with them, and he did it verse by verse until a large number of them abandoned the position and returned.",
            bn: "এই পদ্ধতির সীমাও তিনি জানতেন, আর পড়তেন 3:7—যাঁরা জ্ঞানে সুগভীর, তাঁরা বলেন, আমরা এতে ঈমান আনলাম, সবই আমাদের প্রভুর পক্ষ থেকে। হারুরিয়্যা দল যখন প্রসঙ্গচ্যুত কিছু আয়াতকে ধরে বিচ্ছিন্ন হয়ে গেল, তখন তাঁকে তাদের সঙ্গে আলোচনা করতে পাঠানো হয়; তিনি আয়াতের পর আয়াত ধরে যুক্তি দিলেন, আর তাদের একটি বড় অংশ নিজেদের অবস্থান ছেড়ে ফিরে এল।",
          },
        ],
      },
      {
        h: { en: "The School of Makkah", bn: "মক্কার পাঠশালা" },
        p: [
          {
            en: "He settled to teaching in Makkah, and the circle around him became the first great school of tafsir. Mujahid, Ikrimah, Ata ibn Abi Rabah, Sa'id ibn Jubayr and Tawus all came out of it, and the tafsir literature that later generations wrote is largely built on what they carried from him. He is credited with roughly sixteen hundred narrations besides.",
            bn: "শেষজীবনে তিনি মক্কায় শিক্ষকতায় স্থিত হন, আর তাঁকে ঘিরে গড়ে ওঠা হালকাই হয়ে ওঠে তাফসিরের প্রথম বড় পাঠশালা। মুজাহিদ, ইকরিমা, আতা ইবনে আবি রাবাহ, সাঈদ ইবনে জুবাইর ও তাউস—সবাই এসেছেন এই হালকা থেকে; আর পরবর্তী যুগে লেখা তাফসিরগ্রন্থগুলোর ভিত মূলত তাঁদের বহন করা সেই জ্ঞান। এ ছাড়া প্রায় ষোলোশ হাদিস বর্ণনার কৃতিত্বও তাঁর।",
          },
          {
            en: "He lost his sight in his last years and withdrew from the conflicts of the time to Ta'if, where he died. Muhammad ibn al-Hanafiyyah, praying over him, said that on that day the rabbani of this ummah had died. The boy who had laid his cloak in the dust to wait at other men's doors had become the door that everyone else came to.",
            bn: "শেষ বয়সে তিনি দৃষ্টিশক্তি হারান এবং সে সময়ের সংঘাত থেকে সরে গিয়ে তায়েফে চলে যান; সেখানেই তাঁর ইন্তেকাল হয়। মুহাম্মাদ ইবনুল হানাফিয়্যা তাঁর জানাজায় বলেছিলেন, আজ এই উম্মাহর রব্বানি আলিম চলে গেলেন। যে বালক অন্যের দরজায় অপেক্ষা করতে ধুলোয় চাদর বিছিয়ে দিতেন, তিনিই হয়ে উঠলেন সেই দরজা, যেখানে সবাই এসে দাঁড়াত।",
          },
        ],
      },
    ],
  },
  muadh_ibn_jabal: {
    sections: [
      {
        h: { en: "A Young Man of the Khazraj", bn: "খাযরাজের এক তরুণ" },
        p: [
          {
            en: "He was a young man of the Khazraj in Yathrib, tall, striking in appearance and known for open-handedness, when the delegation went out at night to the hill of Aqabah to give the Prophet ﷺ their pledge. He was among the youngest there. He returned to a city that had not yet accepted Islam and took part in breaking up the idols of his own people's houses.",
            bn: "ইয়াসরিবের খাযরাজ গোত্রের এক তরুণ—দীর্ঘদেহী, সুদর্শন এবং উদারতার জন্য পরিচিত—তিনি সেই প্রতিনিধিদলে ছিলেন, যারা রাতের অন্ধকারে আকাবার পাহাড়ে গিয়ে নবীজি ﷺ-এর হাতে বাইআত করে। উপস্থিতদের মধ্যে তিনিই ছিলেন সবচেয়ে কমবয়সীদের একজন। ফিরে এলেন এমন এক শহরে যা তখনো ইসলাম গ্রহণ করেনি, আর নিজ গোত্রের ঘরে ঘরে থাকা মূর্তি ভাঙার কাজে অংশ নিলেন।",
          },
          {
            en: "When the Prophet ﷺ came to Madinah, Muadh attached himself to him and fought at Badr while still in his early twenties. What set him apart was not the sword. He memorised the Quran in the Prophet's ﷺ lifetime and was already giving legal answers to people while the Prophet ﷺ was alive — a thing very few of the young companions did.",
            bn: "নবীজি ﷺ মদিনায় আসার পর মুয়াজ তাঁর সঙ্গে লেগে থাকেন এবং কুড়ির কোঠার শুরুতেই বদরের যুদ্ধে অংশ নেন। কিন্তু তাঁকে আলাদা করেছিল তরবারি নয়। নবীজি ﷺ-এর জীবদ্দশাতেই তিনি কুরআন মুখস্থ করেন এবং তাঁর জীবদ্দশাতেই মানুষকে শরয়ি মাসআলার জবাব দিতেন—তরুণ সাহাবিদের মধ্যে খুব কমজনই যা করতেন।",
          },
        ],
      },
      {
        h: { en: "Most Learned in Lawful and Unlawful", bn: "হালাল-হারামে সর্বাধিক জ্ঞানী" },
        p: [
          {
            en: "The Prophet ﷺ named four men from whom the Quran should be taken, and Muadh was one of them. He also said, in a report transmitted in the Sunan, that the most knowledgeable of his ummah concerning the lawful and the unlawful was Muadh ibn Jabal. That is a precise praise. It is not about memory or eloquence but about the hardest branch of knowledge: knowing where the line falls in a real case.",
            bn: "নবীজি ﷺ চারজনের নাম নিয়ে বলেছিলেন, তাঁদের কাছ থেকে কুরআন শেখো—মুয়াজ তাঁদের একজন। সুনানের গ্রন্থে বর্ণিত আরেকটি হাদিসে তিনি বলেছেন, হালাল ও হারাম সম্পর্কে তাঁর উম্মতের মধ্যে সর্বাধিক জ্ঞানী মুয়াজ ইবনে জাবাল। প্রশংসাটি খুবই সুনির্দিষ্ট। এটি স্মৃতিশক্তি বা বাগ্মিতার প্রশংসা নয়, বরং জ্ঞানের সবচেয়ে কঠিন শাখার—বাস্তব ঘটনায় সীমারেখা কোথায় পড়ে, তা চেনার।",
          },
          {
            en: "That was the qualification the community needed most as it grew beyond Madinah. New peoples were entering Islam with their own customs, contracts and disputes, and someone had to say what stood and what fell. Muadh had the two things the work requires: the texts by heart, and the temperament to apply them without harshness. He was consulted in his youth by men twice his age.",
            bn: "মদিনার সীমা ছাড়িয়ে সমাজ যত বিস্তৃত হচ্ছিল, ঠিক এই যোগ্যতাটিরই প্রয়োজন ছিল সবচেয়ে বেশি। নতুন নতুন জনগোষ্ঠী নিজেদের প্রথা, চুক্তি ও বিবাদ নিয়ে ইসলামে প্রবেশ করছিল, আর কাউকে না কাউকে বলতে হতো কোনটি টিকবে আর কোনটি বাতিল হবে। মুয়াজের কাছে কাজটির জন্য প্রয়োজনীয় দুটি জিনিসই ছিল—দলিল মুখস্থ, আর কঠোরতা ছাড়া তা প্রয়োগ করার মেজাজ। তরুণ বয়সেই তাঁর দ্বিগুণ বয়সী মানুষ তাঁর পরামর্শ নিতেন।",
          },
        ],
      },
      {
        h: { en: "Sent to Yemen", bn: "ইয়েমেনে প্রেরণ" },
        p: [
          {
            en: "The Prophet ﷺ sent him to Yemen as teacher, judge and governor. His instructions are preserved in the two Sahihs and they are a manual of how to enter a society without breaking it. You are going to a people of the Book, he was told; let the first thing you call them to be the witness that there is no god but Allah and that I am the Messenger of Allah.",
            bn: "নবীজি ﷺ তাঁকে শিক্ষক, বিচারক ও গভর্নর হিসেবে ইয়েমেনে পাঠান। তাঁকে দেওয়া নির্দেশনা সহিহ বুখারি ও মুসলিমে সংরক্ষিত, আর তা যেন একটি সমাজে প্রবেশের—তাকে ভেঙে না ফেলে—পূর্ণাঙ্গ নির্দেশিকা। তোমাকে বলা হলো, তুমি আহলে কিতাব এক জাতির কাছে যাচ্ছ; সর্বপ্রথম তাদের ডাকো এই সাক্ষ্যের দিকে যে আল্লাহ ছাড়া কোনো ইলাহ নেই এবং আমি আল্লাহর রাসূল।",
          },
          {
            en: "If they obey in that, teach them that Allah has obliged five prayers in each day and night. If they obey in that, teach them that Allah has obliged a charity taken from their rich and returned to their poor. Then two warnings: do not take the choicest of their property, and beware the supplication of the wronged, for between it and Allah there is no barrier. He was also told to make matters easy and not hard, to give glad tidings and not drive people away.",
            bn: "তারা তা মানলে শেখাও, আল্লাহ দিনরাতে পাঁচ ওয়াক্ত নামাজ ফরজ করেছেন। তারা তা মানলে শেখাও, আল্লাহ এমন সদকা ফরজ করেছেন যা তাদের ধনীদের কাছ থেকে নিয়ে তাদের দরিদ্রদের মাঝেই ফিরিয়ে দেওয়া হবে। এরপর দুটি সতর্কবার্তা: তাদের সম্পদের সবচেয়ে উৎকৃষ্ট অংশ নিয়ো না, আর মজলুমের বদদোয়াকে ভয় করো—কারণ তার ও আল্লাহর মাঝে কোনো পর্দা নেই। তাঁকে আরও বলা হয়েছিল, সহজ করো, কঠিন করো না; সুসংবাদ দাও, বিতৃষ্ণা সৃষ্টি করো না।",
          },
        ],
      },
      {
        h: { en: "How Will You Judge?", bn: "কীভাবে বিচার করবে?" },
        p: [
          {
            en: "The books of Sunan record an exchange at his departure that later generations of jurists returned to again and again. The Prophet ﷺ asked him how he would judge when a case came before him. He said, by the Book of Allah. And if you do not find it there? By the sunnah of the Messenger of Allah. And if you do not find it there either? He said, I will exert my own judgement and spare no effort.",
            bn: "বিদায়ের সময়ের একটি সংলাপ সুনানের গ্রন্থগুলোতে বর্ণিত, যেখানে পরবর্তী যুগের ফকিহগণ বারবার ফিরে গেছেন। নবীজি ﷺ জিজ্ঞেস করলেন, তোমার সামনে কোনো মামলা এলে তুমি কীভাবে বিচার করবে? তিনি বললেন, আল্লাহর কিতাব দিয়ে। যদি সেখানে না পাও? আল্লাহর রাসূলের সুন্নাহ দিয়ে। যদি সেখানেও না পাও? তিনি বললেন, আমি নিজের ইজতিহাদ প্রয়োগ করব এবং কোনো চেষ্টা বাকি রাখব না।",
          },
          {
            en: "Whatever the strength of its chain, jurists have taken the order it describes as sound in itself, because it is the order the Quran and the sunnah themselves establish. Text first, then the practice of the Prophet ﷺ, then careful reasoning within their bounds — never reasoning that overrides them. It is the same discipline the Quran points to in 4:59, where disputes are referred back to Allah and the Messenger.",
            bn: "এর সনদের শক্তি যেমনই হোক, ফকিহগণ এতে বর্ণিত ধারাক্রমকে নিজস্বভাবেই সঠিক গণ্য করেছেন—কারণ এই ধারাক্রম কুরআন ও সুন্নাহ নিজেই প্রতিষ্ঠা করেছে। প্রথমে নস, তারপর নবীজি ﷺ-এর আমল, তারপর সেই সীমার ভেতরে সতর্ক যুক্তি—কখনোই এমন যুক্তি নয় যা এদের ওপরে যায়। কুরআন 4:59-এ এই একই শৃঙ্খলার দিকেই ইঙ্গিত করেছে, যেখানে বিরোধ মীমাংসার জন্য আল্লাহ ও রাসূলের দিকে ফিরিয়ে দিতে বলা হয়েছে।",
          },
        ],
      },
      {
        h: { en: "The Advice on the Road", bn: "পথের নির্দেশনা" },
        p: [
          {
            en: "The Prophet ﷺ walked out with him as he set off, Muadh riding and the Prophet ﷺ on foot beside his mount. He told him that perhaps he would not meet him again after this year, and that perhaps he would pass by his mosque and his grave. Muadh wept at parting from the Messenger of Allah ﷺ, and it happened as he had been told.",
            bn: "রওনা হওয়ার সময় নবীজি ﷺ তাঁর সঙ্গে কিছুদূর হেঁটে গেলেন—মুয়াজ ছিলেন সওয়ারিতে, আর নবীজি ﷺ তাঁর বাহনের পাশে পায়ে হেঁটে। তিনি বললেন, হয়তো এ বছরের পর তোমার সঙ্গে আর দেখা হবে না; হয়তো তুমি আমার মসজিদ ও আমার কবরের পাশ দিয়ে যাবে। আল্লাহর রাসূল ﷺ থেকে বিচ্ছেদের কষ্টে মুয়াজ কেঁদে ফেললেন—আর ঘটলও ঠিক যেমনটি তাঁকে বলা হয়েছিল।",
          },
          {
            en: "On another occasion the Prophet ﷺ took him by the hand and said, Muadh, by Allah I love you; then do not fail to say at the end of every prayer: O Allah, help me to remember You, to thank You, and to worship You well. A man entrusted with authority over a province was given, as his parting equipment, an instruction to keep his own heart in order first.",
            bn: "আরেকবার নবীজি ﷺ তাঁর হাত ধরে বললেন, হে মুয়াজ, আল্লাহর কসম আমি তোমাকে ভালোবাসি; তাই প্রতি নামাজের শেষে এই দোয়া পড়তে ভুলো না—হে আল্লাহ, আপনার স্মরণ, আপনার শোকর এবং আপনার সুন্দর ইবাদতে আমাকে সাহায্য করুন। একটি প্রদেশের কর্তৃত্ব যাঁর হাতে দেওয়া হলো, বিদায়ের সরঞ্জাম হিসেবে তাঁকে দেওয়া হলো নিজের অন্তরটিকে আগে ঠিক রাখার নির্দেশ।",
          },
        ],
      },
      {
        h: { en: "The Plague of Amwas", bn: "আমওয়াসের মহামারি" },
        p: [
          {
            en: "After the Prophet ﷺ died he returned from Yemen and later went to Syria, teaching in its towns as the region came into Islam. There the plague of Amwas struck the army and the settled population alike and killed a great number of the companions. Muadh lost members of his own household to it before it reached him.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর তিনি ইয়েমেন থেকে ফিরে আসেন এবং পরে সিরিয়ায় যান; অঞ্চলটি যখন ইসলামের ছায়ায় আসছে, তিনি তার শহরে শহরে শিক্ষা দিতে থাকেন। সেখানেই আমওয়াসের মহামারি সেনাবাহিনী ও স্থানীয় জনগণ—উভয়ের ওপর আঘাত হানে এবং বহুসংখ্যক সাহাবি এতে ইন্তেকাল করেন। তাঁকে স্পর্শ করার আগেই মুয়াজ নিজের ঘরের কয়েকজনকে হারান।",
          },
          {
            en: "He died in it, still a young man, in the caliphate of Umar (RA), who counted his loss among the heaviest the ummah had suffered. What he had asked for at the end was not recovery. He is remembered as saying that he sought from Allah the portion He had decreed, and welcoming death as a visitor long expected. Yemen kept his teaching; so did Syria; and the method he was asked about on the road became the working shape of Islamic jurisprudence.",
            bn: "তরুণ বয়সেই তিনি সেই মহামারিতে ইন্তেকাল করেন—উমর (রাঃ)-এর খিলাফতকালে; উমর তাঁর এই বিয়োগকে উম্মাহর সবচেয়ে ভারী ক্ষতিগুলোর একটি বলে গণ্য করতেন। শেষ মুহূর্তে তিনি আরোগ্য চাননি। বর্ণিত আছে, তিনি আল্লাহর নির্ধারিত অংশটুকুই প্রার্থনা করেছেন এবং মৃত্যুকে বরণ করেছেন বহুপ্রতীক্ষিত এক অতিথির মতো। ইয়েমেন তাঁর শিক্ষা ধরে রেখেছে, সিরিয়াও; আর পথের ওপর তাঁকে যে পদ্ধতির কথা জিজ্ঞেস করা হয়েছিল, তা-ই হয়ে উঠেছে ইসলামি ফিকহের কার্যকর কাঠামো।",
          },
        ],
      },
    ],
  },
  sumayyah_bint_khayyat: {
    sections: [
      {
        h: { en: "A Woman Without a Clan", bn: "গোত্রহীন এক নারী" },
        p: [
          {
            en: "Makkah ran on protection. A man was safe not because of law but because his clan would answer for him, and anyone outside that arrangement lived at the mercy of those inside it. Sumayyah bint Khayyat stood entirely outside it. She was a freed slave in the house of Abu Hudhayfah ibn al-Mughirah of Makhzum, with no lineage in the city to speak for her.",
            bn: "মক্কা চলত আশ্রয়ের নিয়মে। কোনো ব্যক্তি নিরাপদ থাকত আইনের কারণে নয়, বরং তার গোত্র তার পক্ষে জবাব দেবে—এই কারণে; আর এই ব্যবস্থার বাইরে যে থাকত, তাকে বাঁচতে হতো ভেতরের লোকদের দয়ায়। সুমাইয়া বিনতে খাইয়াত ছিলেন পুরোপুরি এর বাইরে। তিনি ছিলেন মাখজুম গোত্রের আবু হুযাইফা ইবনুল মুগিরার ঘরের এক মুক্ত-দাসী, শহরে তাঁর পক্ষে কথা বলার মতো কোনো বংশ ছিল না।",
          },
          {
            en: "Her husband Yasir had come to Makkah from Yemen looking for a lost brother, stayed, and lived under that same household's protection. Their son Ammar was born there. The family's safety rested on one man's goodwill, and when he was gone there was nothing between them and whoever chose to harm them. This is the position from which she heard the call to Islam and accepted it.",
            bn: "তাঁর স্বামী ইয়াসির ইয়েমেন থেকে হারিয়ে যাওয়া এক ভাইয়ের খোঁজে মক্কায় এসেছিলেন, থেকে গিয়েছিলেন এবং সেই একই পরিবারের আশ্রয়ে জীবন কাটাচ্ছিলেন। সেখানেই তাঁদের পুত্র আম্মারের জন্ম। পরিবারটির নিরাপত্তা নির্ভর করত একজন মানুষের সদিচ্ছার ওপর; সে মানুষটি চলে গেলে তাঁদের ও ক্ষতিসাধনে ইচ্ছুক যে কারও মাঝে আর কিছুই রইল না। ঠিক এই অবস্থান থেকেই তিনি ইসলামের ডাক শুনলেন এবং তা গ্রহণ করলেন।",
          },
        ],
      },
      {
        h: { en: "Among the First to Declare It", bn: "প্রকাশ্যে ঘোষণাকারীদের প্রথম সারিতে" },
        p: [
          {
            en: "It is narrated from Abdullah ibn Masud (RA) that seven people declared Islam openly at the start: the Messenger of Allah ﷺ, Abu Bakr (RA), Ammar (RA) and his mother Sumayyah, Suhayb (RA), Bilal (RA) and al-Miqdad (RA). Look at that list and the pattern is unmistakable. Apart from the first two, they are the people the city could touch — slaves, freed slaves and men without tribes.",
            bn: "আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণিত, শুরুর দিকে সাতজন প্রকাশ্যে ইসলাম ঘোষণা করেছিলেন: আল্লাহর রাসূল ﷺ, আবু বকর (রাঃ), আম্মার (রাঃ) ও তাঁর মা সুমাইয়া, সুহাইব (রাঃ), বিলাল (রাঃ) ও মিকদাদ (রাঃ)। এই তালিকার দিকে তাকালে ধরনটি স্পষ্ট হয়ে ওঠে। প্রথম দুজন ছাড়া বাকিরা সবাই এমন মানুষ, যাদের গায়ে শহরটি হাত তুলতে পারত—দাস, মুক্ত-দাস আর গোত্রহীন লোকজন।",
          },
          {
            en: "Quraysh could argue with a nobleman, threaten a merchant, and boycott a whole clan behind its walls. What it did to the clanless was of another kind altogether, and everyone in Makkah understood the difference. Sumayyah made her declaration knowing exactly what it exposed her to, and she made it as an older woman, with a husband and a grown son who would be exposed along with her.",
            bn: "কুরাইশ কোনো অভিজাতের সঙ্গে তর্ক করত, ব্যবসায়ীকে হুমকি দিত, গোটা গোত্রকে তার মহল্লায় আটকে বয়কট করত। কিন্তু গোত্রহীনদের সঙ্গে তারা যা করত তা ছিল সম্পূর্ণ ভিন্ন ধরনের, আর মক্কার সবাই সেই পার্থক্যটি বুঝত। সুমাইয়া তাঁর ঘোষণাটি দিয়েছিলেন ঠিক এটুকু জেনেই যে তা তাঁকে কিসের মুখে ফেলে দিচ্ছে; আর ঘোষণার সময় তিনি ছিলেন বয়সে প্রবীণা, সঙ্গে ছিলেন এক স্বামী ও এক প্রাপ্তবয়স্ক পুত্র, যাঁরাও তাঁর সঙ্গেই বিপদের মুখে পড়বেন।",
          },
        ],
      },
      {
        h: { en: "The Sands at Midday", bn: "দুপুরের উত্তপ্ত বালুতে" },
        p: [
          {
            en: "The family of Yasir were taken out to the open ground of Makkah in the heat of the day, when the sand burns, and were tormented there to force them to renounce what they had said. The reports are restrained about the detail and there is no need to go beyond them. The demand was simple and was repeated daily: say a word against your Lord and go home.",
            bn: "ইয়াসিরের পরিবারকে দুপুরের প্রচণ্ড উত্তাপে মক্কার খোলা প্রান্তরে বের করে আনা হতো, যখন বালু জ্বলে ওঠে; সেখানে তাঁদের নির্যাতন করা হতো, যাতে তাঁরা নিজেদের স্বীকারোক্তি প্রত্যাহার করেন। বর্ণনাগুলো বিস্তারিত বিবরণে সংযত, আর তার বাইরে যাওয়ার প্রয়োজনও নেই। দাবিটি ছিল সরল এবং প্রতিদিন পুনরাবৃত্ত: প্রভুর বিরুদ্ধে একটি কথা বলো, তারপর ঘরে ফিরে যাও।",
          },
          {
            en: "They did not say it. The Prophet ﷺ passed by them while it was happening and could do nothing to stop it — he had no power in Makkah in those years — and he said to them: patience, family of Yasir, for your appointed place is Paradise. That is the whole of the comfort available at that moment, and it was enough for them.",
            bn: "তাঁরা তা বলেননি। ঘটনাটি ঘটার সময় নবীজি ﷺ তাঁদের পাশ দিয়ে যান, কিন্তু তা থামানোর কোনো ক্ষমতা তাঁর ছিল না—সেই বছরগুলোতে মক্কায় তাঁর কোনো শক্তি ছিল না—আর তিনি তাঁদের বললেন: ধৈর্য ধরো, হে ইয়াসিরের পরিবার, তোমাদের নির্ধারিত ঠিকানা জান্নাত। ওই মুহূর্তে যতটুকু সান্ত্বনা সম্ভব ছিল, এটুকুই; আর তাঁদের জন্য তা যথেষ্ট ছিল।",
          },
        ],
      },
      {
        h: { en: "The First Blood", bn: "প্রথম রক্ত" },
        p: [
          {
            en: "Abu Jahl came to her himself and killed her with a spear when she would not turn back. She was the first person to die for this religion. It should be said plainly and left there; the accounts do not linger over it and neither should we. Her husband Yasir died under the same torment, and their son Ammar survived them both.",
            bn: "তিনি যখন ফিরে যেতে অস্বীকার করলেন, আবু জাহল নিজে এসে বর্শা দিয়ে তাঁকে হত্যা করল। এই দ্বীনের পথে তিনিই প্রথম প্রাণ দিলেন। কথাটি সরলভাবে বলে সেখানেই থেমে যাওয়া উচিত; বর্ণনাগুলো এ নিয়ে দীর্ঘায়িত হয়নি, আমাদেরও হওয়া উচিত নয়। তাঁর স্বামী ইয়াসির একই নির্যাতনে মারা যান, আর তাঁদের পুত্র আম্মার দুজনকেই হারিয়ে বেঁচে থাকেন।",
          },
          {
            en: "Ammar was pressed until he uttered with his tongue what his heart refused, and came to the Prophet ﷺ in distress. He was asked how he found his heart, and answered, firm in faith. The Prophet ﷺ told him that if they returned he should say it again, and 16:106 was revealed for exactly this case: excepting one who is compelled while his heart is at rest with faith.",
            bn: "আম্মারকে এতটাই চাপ দেওয়া হয় যে তাঁর অন্তর যা অস্বীকার করছিল, মুখে তা উচ্চারণ করে ফেলেন; এরপর তিনি ব্যথিত হৃদয়ে নবীজি ﷺ-এর কাছে আসেন। তাঁকে জিজ্ঞেস করা হলো, অন্তরকে কেমন পেয়েছ? তিনি বললেন, ঈমানে অবিচল। নবীজি ﷺ বললেন, তারা আবার এমন করলে তুমি আবারও তা বলে দিয়ো; আর ঠিক এই ঘটনার জন্যই নাজিল হয় 16:106—তবে সে ছাড়া, যাকে বাধ্য করা হয় অথচ তার অন্তর ঈমানে প্রশান্ত।",
          },
        ],
      },
      {
        h: { en: "What Her Steadfastness Established", bn: "তাঁর অবিচলতা যা প্রতিষ্ঠা করল" },
        p: [
          {
            en: "Two things were settled in that open ground. The first is the concession in 16:106: a believer under compulsion who speaks with the tongue while the heart holds firm has not lost his faith. The religion did not demand of Ammar what his mother gave. The door of ease was opened by the same event that produced the first martyr.",
            bn: "ওই খোলা প্রান্তরে দুটি বিষয় নিষ্পন্ন হয়ে গেল। প্রথমটি 16:106-এর অবকাশ: বাধ্য অবস্থায় থাকা কোনো মুমিন যদি মুখে কিছু বলে অথচ অন্তর অবিচল থাকে, তবে তার ঈমান নষ্ট হয় না। আম্মারের কাছে দ্বীন তা দাবি করেনি, যা তাঁর মা দিয়েছিলেন। যে ঘটনা প্রথম শহীদ উপহার দিল, সেই ঘটনাতেই খুলে গেল সহজতার দরজা।",
          },
          {
            en: "The second is that the first name on the ummah's roll of martyrs belongs to a poor, elderly, clanless woman. Honour in this religion was fixed at its very beginning by taqwa and nothing else, exactly as 49:13 states. The Quran also describes the tyrants of the trench, who resented the believers only because they believed in Allah, in 85:8 — the same grievance and the same answer.",
            bn: "দ্বিতীয়টি হলো, উম্মাহর শহীদ-তালিকার প্রথম নামটি এক দরিদ্র, প্রবীণা, গোত্রহীন নারীর। এই দ্বীনে মর্যাদার মাপকাঠি একেবারে শুরুতেই নির্ধারিত হয়ে গেল তাকওয়া দিয়ে, আর কিছু দিয়ে নয়—ঠিক যেমনটি 49:13 বলে। কুরআন 85:8-এ গর্তের সেই অত্যাচারীদের কথাও বলেছে, যারা মুমিনদের প্রতি বিদ্বেষ পোষণ করেছিল কেবল এ কারণে যে তারা আল্লাহর ওপর ঈমান এনেছিল—একই অভিযোগ, আর একই জবাব।",
          },
        ],
      },
      {
        h: { en: "How She Is Remembered", bn: "তাঁকে যেভাবে স্মরণ করা হয়" },
        p: [
          {
            en: "Her son lived to become one of the most respected men of the ummah, and people would point him out as the son of Sumayyah. It was never used as an insult by the believers; among them it was a title. When Ammar was killed decades later at Siffin, those who remembered the Prophet's ﷺ words about him understood the whole arc of that family's trial.",
            bn: "তাঁর পুত্র বেঁচে থেকে উম্মাহর সবচেয়ে সম্মানিত ব্যক্তিদের একজন হন, আর মানুষ তাঁকে দেখিয়ে বলত—ইনি সুমাইয়ার ছেলে। মুমিনদের মুখে এটি কখনো কটাক্ষ ছিল না; তাঁদের কাছে এটি ছিল উপাধি। কয়েক দশক পরে সিফফিনে আম্মার নিহত হলে, নবীজি ﷺ তাঁর সম্পর্কে যা বলেছিলেন তা যাঁদের মনে ছিল, তাঁরা সেই পরিবারের পরীক্ষার পূর্ণ পরিক্রমাটি বুঝতে পেরেছিলেন।",
          },
          {
            en: "Nothing survives of her possessions, her words or her grave. What survives is a decision, made repeatedly under pressure, by someone who had no earthly reason to expect anything from it. Every believer since who has been asked to trade conviction for safety stands in a line that begins with her, and the Quran's question in 29:2 — do people think they will be left to say we believe without being tested — was answered in her lifetime.",
            bn: "তাঁর সম্পদ, তাঁর কথা কিংবা তাঁর কবর—কিছুই টিকে নেই। যা টিকে আছে তা একটি সিদ্ধান্ত, চাপের মুখে বারবার নেওয়া—এমন একজনের, যাঁর পার্থিব কোনো প্রত্যাশার কারণই ছিল না। এরপর থেকে যত মুমিনকে নিরাপত্তার বিনিময়ে বিশ্বাস বিকিয়ে দিতে বলা হয়েছে, তাঁরা সবাই দাঁড়িয়ে আছেন এমন এক সারিতে যার শুরু তাঁকে দিয়ে; আর কুরআনের প্রশ্ন 29:2—মানুষ কি মনে করে, 'আমরা ঈমান এনেছি' বললেই তাদের পরীক্ষা ছাড়া ছেড়ে দেওয়া হবে—তার উত্তর মিলে গিয়েছিল তাঁর জীবদ্দশাতেই।",
          },
        ],
      },
    ],
  },
  said_ibn_zayd: {
    sections: [
      {
        h: { en: "Son of a Seeker", bn: "এক অন্বেষকের পুত্র" },
        p: [
          {
            en: "His father was Zayd ibn Amr ibn Nufayl, one of the few men in Makkah who had rejected idolatry before the Prophet ﷺ was sent. Sahih al-Bukhari preserves the account of him leaning his back against the Ka'bah and telling Quraysh that not one of them was on the religion of Ibrahim except himself. He refused to eat what had been slaughtered for the idols and said so to their faces.",
            bn: "তাঁর পিতা ছিলেন যায়িদ ইবনে আমর ইবনে নুফাইল—মক্কার সেই অল্প কয়েকজনের একজন, যাঁরা নবীজি ﷺ প্রেরিত হওয়ার আগেই মূর্তিপূজা প্রত্যাখ্যান করেছিলেন। সহিহ বুখারিতে সংরক্ষিত আছে, তিনি কাবার গায়ে পিঠ ঠেকিয়ে কুরাইশকে বলতেন—তোমাদের একজনও ইবরাহিমের দ্বীনের ওপর নেই, আমি ছাড়া। মূর্তির নামে জবাই করা পশুর গোশত খেতে তিনি অস্বীকার করতেন এবং তাদের মুখের ওপরই তা বলে দিতেন।",
          },
          {
            en: "Zayd searched Syria and beyond for the pure monotheism of Ibrahim (AS) and died before the revelation came. His son Said later asked the Prophet ﷺ about him, and was told that he would be raised on the Day of Resurrection as a nation by himself. Said therefore came to Islam already carrying a household memory of refusing the crowd, which is a rarer inheritance than wealth.",
            bn: "যায়িদ ইবরাহিম (আঃ)-এর বিশুদ্ধ একত্ববাদের খোঁজে সিরিয়া ও তার বাইরেও ঘুরেছেন, আর ওহি নাজিলের আগেই ইন্তেকাল করেছেন। পরে তাঁর পুত্র সাঈদ নবীজি ﷺ-এর কাছে তাঁর সম্পর্কে জিজ্ঞেস করলে বলা হয়, কিয়ামতের দিন তাঁকে একাই একটি উম্মত হিসেবে ওঠানো হবে। ফলে সাঈদ ইসলামে এসেছিলেন এমন এক পারিবারিক স্মৃতি নিয়ে, যেখানে সংখ্যাগরিষ্ঠের বিরুদ্ধে দাঁড়ানোর অভ্যাস ছিল—আর এই উত্তরাধিকার সম্পদের চেয়েও দুর্লভ।",
          },
        ],
      },
      {
        h: { en: "Two Houses, One Faith", bn: "দুই ঘর, এক ঈমান" },
        p: [
          {
            en: "He was among the earliest to accept Islam, in the years when the whole community met in secret. He married Fatimah bint al-Khattab, the sister of Umar (RA), and she accepted the religion with him. The two of them kept it hidden, learning the Quran from Khabbab ibn al-Aratt (RA), who came to their house to teach them what had been revealed.",
            bn: "তিনি ছিলেন সর্বপ্রথম ইসলাম গ্রহণকারীদের একজন—সেই বছরগুলোতে, যখন গোটা জামাত গোপনে মিলিত হতো। তিনি বিয়ে করেছিলেন উমর (রাঃ)-এর বোন ফাতিমা বিনতে আল-খাত্তাবকে, আর তিনিও তাঁর সঙ্গে দ্বীন গ্রহণ করেন। দুজনেই তা গোপন রাখতেন এবং খাব্বাব ইবনুল আরাত (রাঃ)-এর কাছে কুরআন শিখতেন, যিনি নাজিলকৃত অংশ শেখাতে তাঁদের ঘরে আসতেন।",
          },
          {
            en: "It was a dangerous arrangement. Umar at that time was among the fiercest opponents of the Prophet ﷺ in Makkah, and his sister and her husband were holding a class in the new religion inside his own family. They knew what discovery would cost, and they carried on regardless, which is the whole reason the next scene was possible.",
            bn: "ব্যবস্থাটি ছিল বিপজ্জনক। তখন উমর ছিলেন মক্কায় নবীজি ﷺ-এর সবচেয়ে কঠোর বিরোধীদের একজন, আর তাঁরই পরিবারের ভেতরে তাঁর বোন ও ভগ্নিপতি নতুন দ্বীনের পাঠ চালিয়ে যাচ্ছিলেন। ধরা পড়লে কী মূল্য দিতে হবে তা তাঁরা জানতেন, তবু চালিয়ে গেছেন—আর এ কারণেই পরের দৃশ্যটি সম্ভব হয়েছিল।",
          },
        ],
      },
      {
        h: { en: "The Morning Umar Came", bn: "যে সকালে উমর এলেন" },
        p: [
          {
            en: "Umar set out one day intending to kill the Prophet ﷺ and was told on the way to look to his own household first. He turned to his sister's house and heard recitation from inside. When he forced his way in and demanded to know what they had been reading, there was a struggle, and his sister was struck and bled — and she told him plainly that they would not leave their religion whatever he did.",
            bn: "একদিন উমর নবীজি ﷺ-কে হত্যার সংকল্প নিয়ে বেরোলেন, আর পথে তাঁকে বলা হলো—আগে নিজের ঘরের খবর নাও। তিনি বোনের বাড়ির দিকে ফিরলেন এবং ভেতর থেকে তিলাওয়াতের শব্দ শুনলেন। জোর করে ঢুকে যখন জানতে চাইলেন তাঁরা কী পড়ছিলেন, তখন ধস্তাধস্তি হয়, বোন আঘাত পান ও রক্ত ঝরে—আর তিনি স্পষ্ট বলে দেন, তুমি যা-ই করো, আমরা আমাদের দ্বীন ছাড়ব না।",
          },
          {
            en: "The sight of the blood stopped him. He asked for the sheet they had been reading; she would not give it until he washed himself. He washed, and read the opening of Surah Taha, coming to 20:14 — I am Allah, there is no god but I, so worship Me and establish the prayer for My remembrance. He asked to be taken to the Prophet ﷺ, and Khabbab, who had hidden in the house, came out and guided him.",
            bn: "রক্ত দেখে তিনি থেমে গেলেন। যে পাতাটি তাঁরা পড়ছিলেন তা চাইলেন; বোন তা দিতে রাজি হলেন না, যতক্ষণ না তিনি গোসল করে আসেন। তিনি ধুয়ে এসে সুরা তা-হা-র শুরুটা পড়লেন, পৌঁছালেন 20:14-এ—আমিই আল্লাহ, আমি ছাড়া কোনো ইলাহ নেই, সুতরাং আমারই ইবাদত করো এবং আমার স্মরণে নামাজ কায়েম করো। তিনি নবীজি ﷺ-এর কাছে নিয়ে যেতে বললেন; ঘরে লুকিয়ে থাকা খাব্বাব বেরিয়ে এসে তাঁকে পথ দেখালেন।",
          },
        ],
      },
      {
        h: { en: "The Scout Who Missed Badr", bn: "যে প্রহরী বদর পাননি" },
        p: [
          {
            en: "Said migrated to Madinah and was sent out with Talhah ibn Ubaydullah (RA) to watch the northern road for news of the Quraysh caravan. They were still away when the two armies met at Badr, and returned to find the battle over. The Prophet ﷺ gave them both a share of the spoils and counted them among the people of Badr, since they had been on his errand.",
            bn: "সাঈদ মদিনায় হিজরত করেন এবং তালহা ইবনে উবাইদুল্লাহ (রাঃ)-এর সঙ্গে উত্তরের পথে কুরাইশের কাফেলার খবর পর্যবেক্ষণে প্রেরিত হন। দুই বাহিনী যখন বদরে মুখোমুখি হয়, তাঁরা তখনো বাইরে; ফিরে এসে দেখেন যুদ্ধ শেষ। নবীজি ﷺ তাঁদের দুজনকেই গনিমতের অংশ দেন এবং বদরের অংশগ্রহণকারীদের মধ্যেই গণ্য করেন, কারণ তাঁরা তাঁরই নির্দেশে বাইরে ছিলেন।",
          },
          {
            en: "It is a small episode with a large point in it. He obeyed the order he was given rather than the battle he wanted, and was credited with what he had missed. He was present at Uhud and the campaigns that followed, and after the Prophet ﷺ he fought in Syria, at Yarmuk and at the taking of Damascus, over which he was briefly placed in charge.",
            bn: "ছোট ঘটনা, কিন্তু এর ভেতরের শিক্ষা বড়। তিনি নিজের কাঙ্ক্ষিত যুদ্ধের চেয়ে প্রাপ্ত নির্দেশকে অগ্রাধিকার দিয়েছিলেন, আর যা তিনি পাননি তারই সওয়াব তাঁর নামে লেখা হলো। উহুদ ও তার পরবর্তী অভিযানগুলোতে তিনি উপস্থিত ছিলেন; নবীজি ﷺ-এর পর সিরিয়ায় ইয়ারমুক ও দামেস্ক বিজয়ে অংশ নেন, আর দামেস্কের দায়িত্বে তিনি স্বল্প সময়ের জন্য নিযুক্তও হয়েছিলেন।",
          },
        ],
      },
      {
        h: { en: "One of the Ten", bn: "দশজনের একজন" },
        p: [
          {
            en: "He is one of the ten companions given the glad tidings of Paradise, and it is Said himself who narrates the hadith naming all ten. When he reached his own name in the list he would say it last and without emphasis, and some of those who heard him noticed that he named the other nine readily and mentioned himself only when asked.",
            bn: "তিনি জান্নাতের সুসংবাদপ্রাপ্ত দশ সাহাবির একজন, আর এই দশজনের নাম উল্লেখ করা হাদিসটির বর্ণনাকারী সাঈদ নিজেই। তালিকায় নিজের নাম আসতে তিনি তা বলতেন সবার শেষে, কোনো জোর না দিয়ে; শ্রোতাদের কেউ কেউ লক্ষ করেছেন, বাকি নয়জনের নাম তিনি সহজেই বলতেন, আর নিজের নাম বলতেন কেবল জিজ্ঞেস করা হলে।",
          },
          {
            en: "He kept out of the disputes that followed the killing of Uthman (RA), living quietly on his land at al-Aqiq outside Madinah. He held no office in those years and sought none, and those who met him remembered him for a settled dislike of taking anything that was not clearly his, whether it was property, precedence or praise.",
            bn: "উসমান (রাঃ)-এর শাহাদাতের পর যে বিবাদ শুরু হয়, তা থেকে তিনি নিজেকে সরিয়ে রাখেন এবং মদিনার বাইরে আল-আকিকে নিজের জমিতে নীরব জীবন কাটান। সেই বছরগুলোতে তিনি কোনো পদে ছিলেন না, চানওনিও; আর যাঁরা তাঁর সাক্ষাৎ পেয়েছেন, তাঁরা তাঁকে মনে রেখেছেন এমন একজন হিসেবে যিনি স্পষ্টভাবে নিজের নয় এমন কিছু নেওয়াকে দৃঢ়ভাবে অপছন্দ করতেন—তা সম্পদ হোক, অগ্রাধিকার হোক কিংবা প্রশংসা।",
          },
        ],
      },
      {
        h: { en: "The Claim Over His Land", bn: "তাঁর জমি নিয়ে দাবি" },
        p: [
          {
            en: "A woman named Arwa took him before the governor of Madinah claiming he had taken part of her land into his own. He said he would never have done it after what he had heard from the Prophet ﷺ: whoever takes a handspan of land unjustly will have it collared around his neck from seven earths. Then he offered her the whole disputed piece rather than argue further.",
            bn: "আরওয়া নামের এক নারী মদিনার শাসকের কাছে তাঁর বিরুদ্ধে অভিযোগ করেন যে, তিনি তাঁর জমির কিছু অংশ নিজের ভেতরে ঢুকিয়ে নিয়েছেন। তিনি বললেন, নবীজি ﷺ থেকে যা তিনি শুনেছেন তার পর এমন কাজ তিনি কখনোই করতেন না—যে ব্যক্তি অন্যায়ভাবে এক বিঘত জমি নেয়, কিয়ামতের দিন সাত জমিন থেকে তা তার গলায় বেড়ি করে পরানো হবে। এরপর তিনি বিতর্ক না বাড়িয়ে বিতর্কিত পুরো অংশটিই তাঁকে ছেড়ে দিতে চাইলেন।",
          },
          {
            en: "He then made a supplication: O Allah, if she is lying, take away her sight and make her death in her own land. Muslim records in his Sahih that she went blind, and that she later fell into a pit on that land and died there. He himself died at al-Aqiq and was carried into Madinah for burial. A man of the ten, remembered above all for refusing to hold a handspan of ground that was not his.",
            bn: "এরপর তিনি দোয়া করলেন: হে আল্লাহ, সে যদি মিথ্যা বলে থাকে, তবে তার দৃষ্টি কেড়ে নিন এবং তার মৃত্যু তার নিজের জমিতেই ঘটান। ইমাম মুসলিম তাঁর সহিহতে বর্ণনা করেছেন, সে অন্ধ হয়ে যায় এবং পরে সেই জমিরই এক গর্তে পড়ে মারা যায়। তিনি নিজে আল-আকিকে ইন্তেকাল করেন এবং দাফনের জন্য তাঁকে মদিনায় আনা হয়। দশজনের একজন—যাঁকে সবচেয়ে বেশি স্মরণ করা হয় এ কারণেই যে, নিজের নয় এমন এক বিঘত জমিও তিনি রাখতে রাজি হননি।",
          },
        ],
      },
    ],
  },
  asma_bint_abi_bakr: {
    sections: [
      {
        h: { en: "A Household Divided", bn: "বিভক্ত এক পরিবার" },
        p: [
          {
            en: "Asma (RA) was the elder daughter of Abu Bakr (RA) and accepted Islam while the believers in Makkah were still few enough to be counted. Her family split along the line of faith: her father and her sister Aishah (RA) with the Prophet ﷺ, her grandfather Abu Quhafah and her mother Qutaylah still on the old religion. She married az-Zubayr ibn al-Awwam (RA), a young man as poor then as he was famous later.",
            bn: "আসমা (রাঃ) ছিলেন আবু বকর (রাঃ)-এর বড় কন্যা; ইসলাম গ্রহণ করেন এমন সময়, যখন মক্কার মুমিনদের সংখ্যা গুনে ফেলা যেত। ঈমানের রেখা ধরে তাঁর পরিবার দুই ভাগ হয়ে গিয়েছিল: পিতা ও বোন আয়েশা (রাঃ) নবীজি ﷺ-এর সঙ্গে, আর দাদা আবু কুহাফা ও মা কুতাইলা তখনো পুরোনো ধর্মে। তিনি বিয়ে করেন যুবাইর ইবনুল আওয়াম (রাঃ)-কে, যিনি তখন যতটা দরিদ্র ছিলেন, পরে ততটাই খ্যাতিমান হন।",
          },
          {
            en: "This is worth holding in mind before the famous scenes. The courage she is remembered for was not exercised among allies. It was exercised inside a house where some of the people she owed obedience and affection to were on the other side, and where every act of help she gave to the Muslims had to be concealed from her own kin.",
            bn: "বিখ্যাত ঘটনাগুলোর আগে এই দিকটি মনে রাখা দরকার। যে সাহসের জন্য তিনি স্মরণীয়, তা তিনি দেখিয়েছেন বন্ধুদের ভিড়ে নয়। দেখিয়েছেন এমন এক ঘরে, যেখানে যাঁদের প্রতি তাঁর আনুগত্য ও স্নেহের দায় ছিল তাঁদের কেউ কেউ ছিলেন উল্টো দিকে; আর মুসলিমদের জন্য করা প্রতিটি সহযোগিতা গোপন রাখতে হতো নিজের আত্মীয়দের কাছ থেকেই।",
          },
        ],
      },
      {
        h: { en: "The One of Two Waistbands", bn: "দুই কোমরবন্ধের অধিকারিণী" },
        p: [
          {
            en: "When the Prophet ﷺ and her father left Makkah and hid in the cave of Thawr, someone had to feed them without being followed. Asma carried the food out. On the night of departure she prepared the provisions and found there was nothing to tie the bag and the waterskin with, so she took off her waistband, tore it in two, and used one half for each.",
            bn: "নবীজি ﷺ ও তাঁর পিতা মক্কা ছেড়ে সাওর গুহায় আত্মগোপন করলে, কাউকে না কাউকে খাবার পৌঁছাতে হতো—তাও কেউ যেন পিছু নিতে না পারে। আসমাই সেই খাবার বয়ে নিতেন। রওনার রাতে তিনি পাথেয় প্রস্তুত করে দেখলেন, থলে ও মশক বাঁধার মতো কিছু নেই; তাই নিজের কোমরবন্ধ খুলে দুই ভাগ করে ছিঁড়ে ফেললেন এবং এক অংশ দিয়ে থলে, আরেক অংশ দিয়ে মশক বাঁধলেন।",
          },
          {
            en: "The Prophet ﷺ named her for it: Dhat an-Nitaqayn, the one of the two waistbands. Later, when Quraysh came looking, Abu Jahl himself came to the door and struck her across the face when she would not say where her father had gone. She was pregnant at the time and she did not tell them. The Hijrah, which the Quran describes in 9:40, was supplied by a young woman walking out of the city with a bag on her hip.",
            bn: "এ কারণেই নবীজি ﷺ তাঁকে নাম দিলেন 'যাতুন নিতাকাইন'—দুই কোমরবন্ধের অধিকারিণী। পরে কুরাইশ খোঁজ করতে এলে আবু জাহল নিজেই দরজায় এসে দাঁড়ায়, আর পিতা কোথায় গেছেন তা বলতে অস্বীকার করায় তাঁর গালে আঘাত করে। তিনি তখন অন্তঃসত্ত্বা, তবু কিছুই বলেননি। কুরআন 9:40-এ যে হিজরতের বর্ণনা দিয়েছে, তার রসদ জুগিয়েছিলেন কোমরে থলে বেঁধে শহর থেকে বেরিয়ে যাওয়া এক তরুণী।",
          },
        ],
      },
      {
        h: { en: "Stones in the Niche", bn: "কুলুঙ্গিতে পাথর" },
        p: [
          {
            en: "Abu Bakr had taken all the money in the house with him, some five or six thousand dirhams, leaving his family nothing. His father Abu Quhafah, who was blind and not yet a Muslim, came to the house and said that Abu Bakr had grieved them by taking himself and his wealth away at once. Asma told him he had left them a good deal.",
            bn: "আবু বকর ঘরের সব অর্থ—আনুমানিক পাঁচ-ছয় হাজার দিরহাম—সঙ্গে নিয়ে গিয়েছিলেন, পরিবারের জন্য কিছুই রাখেননি। তাঁর পিতা আবু কুহাফা, যিনি দৃষ্টিহীন এবং তখনো মুসলিম হননি, ঘরে এসে বললেন—আবু বকর একসঙ্গে নিজেকে ও নিজের সম্পদ সরিয়ে নিয়ে তোমাদের কষ্টে ফেলেছে। আসমা বললেন, তিনি তো আমাদের জন্য অনেক কিছুই রেখে গেছেন।",
          },
          {
            en: "She had put stones into the niche where the money was kept and covered them with a cloth. She took her grandfather's hand and laid it on the covered heap, and the old man felt the weight and was satisfied and said it was good that he had left them that. She said afterwards that she did it only to settle the old man's heart. It is a small deception in a hard week, told by her, and it kept an anxious blind man from despair.",
            bn: "টাকা রাখার কুলুঙ্গিতে তিনি পাথর ভরে তার ওপর কাপড় ঢেকে রেখেছিলেন। দাদার হাত ধরে সেই ঢাকা স্তূপের ওপর রাখলেন; বৃদ্ধ ভার অনুভব করে সন্তুষ্ট হলেন এবং বললেন, ভালোই হয়েছে যে সে তোমাদের জন্য এটুকু রেখে গেছে। পরে তিনি বলেছেন, বৃদ্ধ মানুষটির মন শান্ত করতেই তিনি এটি করেছিলেন। কঠিন এক সপ্তাহের ছোট্ট এক কৌশল, তাঁর নিজেরই বর্ণনায়—যা এক উদ্বিগ্ন দৃষ্টিহীন মানুষকে হতাশা থেকে বাঁচিয়েছিল।",
          },
        ],
      },
      {
        h: { en: "Work, Poverty and a Mother", bn: "শ্রম, দারিদ্র্য ও এক মা" },
        p: [
          {
            en: "In Madinah she gave birth to Abdullah ibn az-Zubayr, the first child born to the Muhajirun there, and the Prophet ﷺ took him and blessed him. Her married life was hard work. Zubayr had a horse and a piece of land the Prophet ﷺ had granted him two-thirds of a farsakh out of the city; she ground the fodder, watered the horse and carried date-stones on her head from that land until the Prophet ﷺ met her on the road and offered her a ride.",
            bn: "মদিনায় তিনি জন্ম দেন আবদুল্লাহ ইবনুয যুবাইরকে—সেখানে মুহাজিরদের ঘরে জন্ম নেওয়া প্রথম সন্তান; নবীজি ﷺ তাঁকে কোলে নিয়ে দোয়া করেন। তাঁর দাম্পত্যজীবন ছিল কঠোর পরিশ্রমের। যুবাইরের ছিল একটি ঘোড়া এবং শহর থেকে দুই-তৃতীয়াংশ ফরসাখ দূরে নবীজি ﷺ-এর দেওয়া এক টুকরো জমি; তিনি ঘোড়ার খাবার পিষতেন, পানি খাওয়াতেন এবং সেই জমি থেকে মাথায় করে খেজুরের আঁটি বয়ে আনতেন—একদিন পথে নবীজি ﷺ তাঁকে দেখে বাহনে তুলে নিতে চান।",
          },
          {
            en: "Her mother Qutaylah, still not a Muslim, came to Madinah to visit her with gifts, and Asma would not let her into the house or accept from her until she had asked the Prophet ﷺ. She was told to keep the ties and treat her well, and 60:8 is recited in this connection: Allah does not forbid you from dealing kindly and justly with those who did not fight you over religion nor drive you from your homes.",
            bn: "তাঁর মা কুতাইলা, যিনি তখনো মুসলিম হননি, উপহার নিয়ে মদিনায় তাঁর সঙ্গে দেখা করতে আসেন; আসমা নবীজি ﷺ-কে জিজ্ঞেস না করা পর্যন্ত তাঁকে ঘরে ঢুকতে দেননি, উপহারও নেননি। তাঁকে বলা হলো, আত্মীয়তার সম্পর্ক রক্ষা করো ও তাঁর সঙ্গে সদাচরণ করো; আর এ প্রসঙ্গেই পড়া হয় 60:8—দ্বীনের কারণে যারা তোমাদের সঙ্গে যুদ্ধ করেনি এবং তোমাদের ঘরছাড়া করেনি, তাদের সঙ্গে সদয় ও ন্যায়সংগত আচরণ করতে আল্লাহ নিষেধ করেন না।",
          },
        ],
      },
      {
        h: { en: "The Last Meeting", bn: "শেষ সাক্ষাৎ" },
        p: [
          {
            en: "Seventy years later her son Abdullah held Makkah against the army of al-Hajjaj, and by the end almost everyone had left him. He came to his mother, who was near a hundred and had lost her sight, and told her that the people had deserted him and that he had been offered whatever he wanted of the world if he would surrender, and asked her what she thought.",
            bn: "সত্তর বছর পর তাঁর পুত্র আবদুল্লাহ হাজ্জাজের বাহিনীর বিরুদ্ধে মক্কা রক্ষায় দাঁড়ালেন, আর শেষদিকে প্রায় সবাই তাঁকে ছেড়ে চলে গেল। তিনি মায়ের কাছে এলেন—যাঁর বয়স তখন প্রায় একশো এবং যিনি দৃষ্টিশক্তি হারিয়েছেন—বললেন, লোকেরা তাঁকে ছেড়ে গেছে, আত্মসমর্পণ করলে দুনিয়ার যা চান তাই দেওয়ার প্রস্তাব এসেছে; এরপর জানতে চাইলেন তাঁর মতামত।",
          },
          {
            en: "She answered that he knew himself best: if he was upon the truth and had called people to it, he should not let the boys of Banu Umayyah play with him, and if he wanted the world he was a wretched servant who had destroyed himself and those with him. He said he feared they would mutilate his body. She said that a slaughtered sheep is not hurt by the skinning. He said this was exactly what he had come to hear.",
            bn: "তিনি বললেন, নিজের অবস্থা তুমিই ভালো জানো: যদি তুমি সত্যের ওপর থাকো এবং মানুষকে সেদিকেই ডেকে থাকো, তবে বনু উমাইয়ার ছেলেদের তোমাকে নিয়ে খেলতে দিয়ো না; আর যদি দুনিয়াই চাও, তবে তুমি নিকৃষ্ট বান্দা—নিজেকে ও সঙ্গীদের ধ্বংস করলে। তিনি বললেন, আশঙ্কা হয় তারা আমার দেহ বিকৃত করবে। মা বললেন, জবাই করা বকরির চামড়া ছাড়ানোয় তার কষ্ট হয় না। তিনি বললেন, এ কথাটিই শুনতে তিনি এসেছিলেন।",
          },
          {
            en: "She embraced him and felt armour under his clothes, and told him that was not the dress of a man who wants martyrdom; he said he had only worn it to settle her heart, and took it off. He went out and was killed, and his body was hung up. When al-Hajjaj came to her at last she was unbroken, and within days of her son's burial she died. She had lived through the whole of it, from the cave to the gibbet, and had not once advised safety.",
            bn: "তিনি পুত্রকে জড়িয়ে ধরে পোশাকের নিচে বর্ম অনুভব করলেন এবং বললেন, শাহাদাত-প্রত্যাশীর পোশাক তো এটি নয়; তিনি বললেন, কেবল আপনার মন শান্ত করতেই পরেছিলাম—এরপর খুলে ফেললেন। বেরিয়ে গিয়ে তিনি নিহত হন এবং তাঁর দেহ ঝুলিয়ে রাখা হয়। অবশেষে হাজ্জাজ তাঁর কাছে এলে তিনি ছিলেন অবিচল; আর পুত্রের দাফনের কয়েক দিনের মধ্যেই তিনি ইন্তেকাল করেন। গুহা থেকে শুরু করে সেই ফাঁসিকাঠ পর্যন্ত পুরোটাই তিনি দেখে গেছেন—এবং একবারও নিরাপত্তার পরামর্শ দেননি।",
          },
        ],
      },
    ],
  },
  nusaybah_bint_kab_umm_umarah: {
    sections: [
      {
        h: { en: "The Night at Aqabah", bn: "আকাবার সেই রাত" },
        p: [
          {
            en: "She was Nusaybah bint Ka'b of the Banu Najjar, known as Umm Umarah. In the season of pilgrimage a delegation from Yathrib slipped away at night to a ravine at Aqabah to pledge themselves to the Prophet ﷺ and to protect him as they would protect their own women and children. More than seventy men were there. Two women were there, and she was one of them.",
            bn: "তিনি ছিলেন বনু নাজ্জার গোত্রের নুসাইবা বিনতে কাব, পরিচিত ছিলেন উম্মে উমারা নামে। হজের মৌসুমে ইয়াসরিব থেকে আসা একটি প্রতিনিধিদল রাতের আঁধারে আকাবার গিরিসংকটে গিয়ে নবীজি ﷺ-এর হাতে বাইআত করে এবং প্রতিশ্রুতি দেয়, নিজেদের নারী-সন্তানকে যেভাবে রক্ষা করে সেভাবেই তাঁকে রক্ষা করবে। সেখানে ছিলেন সত্তরেরও বেশি পুরুষ। নারী ছিলেন দুজন—তিনি তাঁদের একজন।",
          },
          {
            en: "Her husband and her two sons, Abdullah and Habib, pledged with her. The Quran describes the pledge women give the Prophet ﷺ in 60:12, and the substance of hers was that she had bound herself to a cause with an obligation of defence attached to it. Everything she later did at Uhud and at Yamamah was the keeping of a promise given that night.",
            bn: "তাঁর স্বামী ও দুই পুত্র—আবদুল্লাহ ও হাবিব—তাঁর সঙ্গে বাইআত করেন। নারীরা নবীজি ﷺ-এর হাতে যে বাইআত করেন, কুরআন তার বর্ণনা দিয়েছে 60:12-এ; আর তাঁর বাইআতের মর্ম ছিল, তিনি নিজেকে এমন এক কাজের সঙ্গে বেঁধে ফেলেছেন যার সঙ্গে রক্ষার দায়িত্বও যুক্ত। উহুদ ও ইয়ামামায় তিনি পরে যা করেছেন, তার সবই ছিল সেই রাতের প্রতিশ্রুতি রক্ষা।",
          },
        ],
      },
      {
        h: { en: "Uhud: Water Skin to Sword", bn: "উহুদ: মশক থেকে তরবারি" },
        p: [
          {
            en: "She went out to Uhud at the start of the day carrying a waterskin, to give the fighters drink and to tend the wounded. That was the work she had come for. Then the archers left the hill, the cavalry came round behind the army, the lines broke, and the men who had been advancing were suddenly running. In the confusion the Prophet ﷺ was left with only a handful around him.",
            bn: "দিনের শুরুতে তিনি মশক কাঁধে নিয়ে উহুদে যান—যোদ্ধাদের পানি পান করাতে ও আহতদের সেবা করতে। এ কাজেই তিনি এসেছিলেন। এরপর তিরন্দাজরা টিলা ছেড়ে নেমে এল, অশ্বারোহী বাহিনী পেছন দিক থেকে ঘুরে এল, সারি ভেঙে গেল, আর যারা এগোচ্ছিল তারা হঠাৎ পালাতে লাগল। এই বিশৃঙ্খলায় নবীজি ﷺ-এর চারপাশে রইলেন মাত্র হাতেগোনা কয়েকজন।",
          },
          {
            en: "She put the waterskin down and went in. She took up a sword, and took a shield from a man who was leaving the field with it, and fought in the ring of defenders around the Prophet ﷺ. He said afterwards that he did not look to his right or his left at Uhud without seeing her fighting in front of him.",
            bn: "তিনি মশক নামিয়ে রেখে যুদ্ধে ঢুকে পড়লেন। একটি তরবারি তুলে নিলেন, আর ময়দান ছেড়ে যাওয়া এক লোকের হাত থেকে ঢাল নিয়ে নবীজি ﷺ-এর চারপাশের রক্ষাব্যূহে যোগ দিলেন। পরে তিনি বলেছেন, উহুদের দিন তিনি ডানে-বাঁয়ে যেদিকেই তাকিয়েছেন, দেখেছেন এই নারী তাঁর সামনে লড়ছেন।",
          },
        ],
      },
      {
        h: { en: "Thirteen Wounds", bn: "তেরোটি ক্ষত" },
        p: [
          {
            en: "Ibn Sa'd counts thirteen wounds on her from that day. The worst was on her shoulder, a deep cut from Ibn Qami'ah, the man who had come for the Prophet ﷺ and struck her when she blocked him. She struck at him repeatedly but he was wearing two coats of mail. Her son Abdullah was wounded beside her; she bound his arm and told him to get up and fight.",
            bn: "ইবনে সাদের গণনায় সেদিন তাঁর দেহে ছিল তেরোটি ক্ষত। সবচেয়ে গুরুতরটি ছিল কাঁধে—ইবনে কামিয়ার গভীর আঘাত; সে নবীজি ﷺ-কে লক্ষ্য করে এসেছিল, আর তিনি বাধা দিলে তাঁকেই আঘাত করে। তিনি তাকে বারবার আঘাত করেন, কিন্তু তার গায়ে ছিল দুই স্তরের বর্ম। পাশেই তাঁর পুত্র আবদুল্লাহ আহত হন; তিনি ছেলের হাত বেঁধে দিয়ে বললেন, ওঠো, লড়ো।",
          },
          {
            en: "Her shoulder wound took about a year to heal. While she was still being treated, the Prophet ﷺ said that the standing of Umm Umarah that day was better than the standing of such and such a man. She asked him to pray that she be his companion in Paradise; he prayed it for her and her family, and she said afterwards that she no longer cared what befell her in this world.",
            bn: "কাঁধের ক্ষত সারতে প্রায় এক বছর লেগেছিল। চিকিৎসাধীন থাকা অবস্থাতেই নবীজি ﷺ বলেন, সেদিন উম্মে উমারার অবস্থান অমুক অমুক ব্যক্তির অবস্থানের চেয়ে উত্তম ছিল। তিনি নবীজি ﷺ-এর কাছে দোয়া চাইলেন, যেন জান্নাতে তিনি তাঁর সঙ্গী হন; নবীজি ﷺ তাঁর ও তাঁর পরিবারের জন্য সেই দোয়া করলেন—আর তিনি বললেন, এরপর দুনিয়ায় তাঁর কী ঘটল তা নিয়ে আর কোনো পরোয়া নেই।",
          },
        ],
      },
      {
        h: { en: "The Years Between", bn: "মাঝের বছরগুলো" },
        p: [
          {
            en: "She was not a woman of one day. She was present at Hudaybiyah, at Khaybar, at the umrah of the following year and at Hunayn, doing the same work: water, wounds, and fighting when the fighting reached her. Her name appears in the accounts of these expeditions without any fuss, as an ordinary part of the army's roll.",
            bn: "তিনি এক দিনের নারী ছিলেন না। হুদাইবিয়ায়, খায়বারে, পরের বছরের উমরায় এবং হুনাইনে তিনি উপস্থিত ছিলেন—কাজও ছিল একই: পানি, আহতদের সেবা, আর লড়াই যখন তাঁর কাছ পর্যন্ত পৌঁছাত তখন লড়াই। এসব অভিযানের বিবরণে তাঁর নাম আসে কোনো আড়ম্বর ছাড়াই, বাহিনীর তালিকার স্বাভাবিক অংশ হিসেবে।",
          },
          {
            en: "After the Prophet ﷺ died, Musaylimah in Yamamah claimed prophethood, and her son Habib was sent to him as a messenger. He was asked whether he accepted Musaylimah as a messenger of Allah, and answered that he could not hear the question; he was then killed by degrees, limb after limb, and did not change his answer.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর ইয়ামামায় মুসাইলিমা নবুয়তের দাবি করে, আর তাঁর পুত্র হাবিবকে দূত হিসেবে তার কাছে পাঠানো হয়। তাকে জিজ্ঞেস করা হলো, সে কি মুসাইলিমাকে আল্লাহর রাসূল বলে মানে? তিনি জবাব দিলেন, এ প্রশ্ন তিনি শুনতেই পাচ্ছেন না; এরপর তাঁকে ধীরে ধীরে, অঙ্গের পর অঙ্গ কেটে হত্যা করা হয়—আর তিনি নিজের জবাব বদলাননি।",
          },
        ],
      },
      {
        h: { en: "The Day of Yamamah", bn: "ইয়ামামার দিন" },
        p: [
          {
            en: "When Abu Bakr (RA) sent the army against Musaylimah, she asked to go with it and was permitted. She went into that battle looking for the man who had killed her son. The fighting at Yamamah was the hardest of the wars of that period, and she was in the worst of it, taking wound after wound until her hand was severed from her arm.",
            bn: "আবু বকর (রাঃ) যখন মুসাইলিমার বিরুদ্ধে বাহিনী পাঠান, তিনি সঙ্গে যাওয়ার অনুমতি চাইলেন এবং অনুমতি পেলেন। সেই যুদ্ধে তিনি নেমেছিলেন নিজের ছেলের হত্যাকারীকে খুঁজতে। ইয়ামামার লড়াই ছিল সে সময়ের সবচেয়ে কঠিন যুদ্ধ, আর তিনি ছিলেন তার সবচেয়ে ভয়ংকর অংশে—একের পর এক আঘাত সহ্য করেছেন, শেষে হাতটি বাহু থেকে বিচ্ছিন্ন হয়ে যায়।",
          },
          {
            en: "Musaylimah was killed in that garden and she lived to see it. She came back to Madinah with one hand and without her son, and Abu Bakr came to her house to ask after her. She had given at Aqabah a pledge to defend, and she had now paid it in her own body twice over.",
            bn: "সেই বাগানেই মুসাইলিমা নিহত হয়, আর তিনি তা দেখে যেতে পেরেছিলেন। এক হাত নিয়ে, সন্তানকে হারিয়ে তিনি মদিনায় ফেরেন; আবু বকর (রাঃ) নিজে তাঁর বাড়িতে এসে খোঁজ নেন। আকাবায় তিনি রক্ষার যে প্রতিশ্রুতি দিয়েছিলেন, এবার তা নিজের দেহ দিয়ে দুইবার পরিশোধ করলেন।",
          },
        ],
      },
      {
        h: { en: "How She Should Be Read", bn: "তাঁকে যেভাবে পড়া উচিত" },
        p: [
          {
            en: "It is easy to make her a symbol and lose the person. The accounts show a woman who did the ordinary duties of her community for years, and who, when the line broke and the person she had sworn to protect stood exposed, did not stand still. The heroism is continuous with the service; it is not a separate thing.",
            bn: "তাঁকে প্রতীক বানিয়ে ফেলে মানুষটিকে হারিয়ে ফেলা সহজ। বর্ণনাগুলো দেখায় এমন এক নারীকে, যিনি বছরের পর বছর নিজের সমাজের সাধারণ দায়িত্বগুলো পালন করেছেন; আর সারি যখন ভেঙে গেল এবং যাঁকে রক্ষার শপথ নিয়েছিলেন তিনি যখন অরক্ষিত হয়ে পড়লেন, তখন তিনি স্থির দাঁড়িয়ে থাকেননি। এই বীরত্ব সেই সেবারই ধারাবাহিকতা, আলাদা কিছু নয়।",
          },
          {
            en: "The Quran's praise of the believers who kept faith with what they had promised Allah, in 33:23, is recited over the men of Uhud, and her conduct that day belongs to the same description. She died in the years of the first caliphs, having outlived a son and a hand, and the community that remembered Uhud remembered who had stood in front.",
            bn: "আল্লাহকে দেওয়া প্রতিশ্রুতি যাঁরা রক্ষা করেছেন, কুরআনে তাঁদের যে প্রশংসা 33:23-এ এসেছে, তা উহুদের পুরুষদের প্রসঙ্গে পড়া হয়; সেদিনকার তাঁর আচরণও একই বর্ণনার অন্তর্ভুক্ত। প্রথম খলিফাদের যুগেই তিনি ইন্তেকাল করেন—এক পুত্র ও এক হাতের চেয়ে বেশি দিন বেঁচে থেকে; আর যে সমাজ উহুদকে মনে রেখেছে, তারা মনে রেখেছে সেদিন সামনে কে দাঁড়িয়েছিলেন।",
          },
        ],
      },
    ],
  },
  umm_salamah: {
    sections: [
      {
        h: { en: "Hind of the Makhzum", bn: "মাখজুমের হিন্দ" },
        p: [
          {
            en: "Her name was Hind bint Abi Umayyah, of the Banu Makhzum, one of the strongest clans in Makkah, and her husband Abu Salamah was a cousin and foster-brother of the Prophet ﷺ. They were among the earliest believers, and when the persecution grew they were among the first to leave for Abyssinia. They came back when news reached them that Makkah had softened, found it had not, and lived under pressure again.",
            bn: "তাঁর নাম ছিল হিন্দ বিনতে আবি উমাইয়া, মক্কার অন্যতম শক্তিশালী গোত্র বনু মাখজুমের কন্যা; আর তাঁর স্বামী আবু সালামা ছিলেন নবীজি ﷺ-এর চাচাতো ভাই ও দুধ-ভাই। তাঁরা ছিলেন প্রথম দিকের মুমিনদের অন্তর্ভুক্ত, আর নির্যাতন বেড়ে গেলে সর্বপ্রথম যাঁরা আবিসিনিয়ায় যান তাঁদের একজন। মক্কা নরম হয়েছে—এমন খবরে ফিরে এসে দেখলেন তা সত্য নয়, আর আবারও চাপের মধ্যেই দিন কাটাতে লাগলেন।",
          },
          {
            en: "She was a woman of standing, intelligence and plain speech, and none of that protected her from what came next. Her clan was powerful, but she had chosen a religion that clan opposed, and the great houses of Makkah reserved a particular resentment for their own daughters and sons who had left them for it. Migration, when it came, would cost her more than most.",
            bn: "তিনি ছিলেন মর্যাদাবতী, বুদ্ধিমতী ও স্পষ্টভাষী—কিন্তু এর কোনোটিই তাঁকে পরবর্তী বিপদ থেকে রক্ষা করেনি। তাঁর গোত্র ছিল শক্তিশালী, অথচ তিনি বেছে নিয়েছিলেন এমন এক দ্বীন যার বিরোধিতা করছিল সেই গোত্রই; আর মক্কার অভিজাত পরিবারগুলো নিজেদের ঘরের ছেলেমেয়েদের দলত্যাগের প্রতি বিশেষ বিদ্বেষ পুষে রাখত। হিজরত যখন এল, তার মূল্য তাঁকে দিতে হলো অধিকাংশের চেয়ে বেশি।",
          },
        ],
      },
      {
        h: { en: "A Year at al-Abtah", bn: "আবতাহে একটি বছর" },
        p: [
          {
            en: "When Abu Salamah set out for Madinah with her and their small son, her own clan stopped them and took her from him, saying they would not let their daughter be carried through the land. His clan then refused to leave the child with her, and they pulled the boy between them so roughly that his arm was dislocated. Her husband went on alone.",
            bn: "আবু সালামা যখন স্ত্রী ও শিশুপুত্রকে নিয়ে মদিনার পথে রওনা হলেন, শহরের প্রান্তেই তাঁর নিজের গোত্র তাঁদের আটকে দিয়ে স্ত্রীকে ছিনিয়ে নেয় এবং বলে, তারা তাদের মেয়েকে দেশে দেশে টেনে নিয়ে যেতে দেবে না। এরপর স্বামীর গোত্র বলল, সন্তানকে তার কাছে রাখা যাবে না; দুই পক্ষের টানাটানিতে শিশুটির হাত জোড়া থেকে সরে যায়। স্বামী একাই মদিনার পথে চলে গেলেন।",
          },
          {
            en: "She was left in Makkah without either. She said afterwards that she went out every morning to al-Abtah and wept there until nightfall for about a year, until a man of her clan saw her and asked why they would not let this poor woman go. They released her, the child was returned, and she set out alone with him on a camel.",
            bn: "মক্কায় তিনি রয়ে গেলেন—স্বামী নেই, সন্তানও নেই। পরে তিনি বলেছেন, প্রতিদিন সকালে তিনি আবতাহে গিয়ে বসতেন এবং সন্ধ্যা পর্যন্ত কাঁদতেন; প্রায় এক বছর ধরে এটাই ছিল তাঁর দিনযাপন—শেষে তাঁর গোত্রেরই এক ব্যক্তি তা দেখে বলল, এই অসহায় নারীকে যেতে দিচ্ছ না কেন? তাঁকে ছেড়ে দেওয়া হলো, সন্তানকেও ফিরিয়ে দেওয়া হলো, আর তিনি একা উটে চড়ে ছেলেকে নিয়ে মদিনার পথে বেরোলেন।",
          },
          {
            en: "Uthman ibn Talhah met her on the road, learned she was travelling alone, and led her camel all the way to Quba without exchanging a word beyond what was necessary, then turned back to Makkah. She used to say that she knew no household in Islam that had been afflicted as the household of Abu Salamah was, and no companion nobler than the man who escorted her.",
            bn: "পথে উসমান ইবনে তালহার সঙ্গে দেখা হলে তিনি জানলেন যে এই নারী একা যাচ্ছেন; এরপর প্রয়োজনের বাইরে একটি কথাও না বলে তিনি কুবা পর্যন্ত তাঁর উটের রশি ধরে নিয়ে গেলেন, তারপর মক্কায় ফিরে গেলেন। উম্মে সালামা বলতেন, ইসলামে আবু সালামার পরিবারের মতো বিপদগ্রস্ত কোনো পরিবার তিনি দেখেননি, আর তাঁকে পৌঁছে দেওয়া সেই মানুষটির চেয়ে ভদ্র সঙ্গীও তিনি পাননি।",
          },
        ],
      },
      {
        h: { en: "The Du'a She Doubted", bn: "যে দোয়ায় তাঁর সংশয় ছিল" },
        p: [
          {
            en: "Abu Salamah was wounded at Uhud, seemed to recover, and then the wound reopened and he died of it. She had heard the Prophet ﷺ say that no servant is struck by an affliction and says, we belong to Allah and to Him we return; O Allah, reward me in my affliction and give me better than it in exchange — except that Allah gives him something better. The words are those of 2:156.",
            bn: "উহুদে আবু সালামা আহত হন, আপাতদৃষ্টিতে সেরে উঠছিলেন, এরপর ক্ষত আবার খুলে যায় এবং তাতেই তিনি ইন্তেকাল করেন। উম্মে সালামা নবীজি ﷺ থেকে শুনেছিলেন—কোনো বান্দা বিপদে পড়ে যদি বলে, 'আমরা আল্লাহরই এবং তাঁরই দিকে ফিরে যাব; হে আল্লাহ, আমার এই বিপদে আমাকে প্রতিদান দিন এবং এর বদলে উত্তম কিছু দিন,' তবে আল্লাহ অবশ্যই তাকে উত্তম কিছু দেন। কথাগুলোর উৎস 2:156।",
          },
          {
            en: "She said the prayer, thinking as she said it, who could be better for me than Abu Salamah? She said it anyway. When her waiting period ended, Abu Bakr (RA) and Umar (RA) proposed and she declined; then the Prophet ﷺ sent to her, and she pleaded her age, her children and her jealous nature. He answered each objection and married her, and the exchange was better, exactly as promised.",
            bn: "তিনি দোয়াটি পড়লেন, আর পড়তে পড়তেই মনে মনে ভাবলেন—আবু সালামার চেয়ে উত্তম আমার জন্য আর কে হতে পারে? তবু তিনি দোয়াটি পড়লেন। ইদ্দত শেষ হলে আবু বকর (রাঃ) ও উমর (রাঃ) বিয়ের প্রস্তাব দেন, তিনি রাজি হননি; এরপর নবীজি ﷺ প্রস্তাব পাঠালে তিনি নিজের বয়স, সন্তান ও আত্মমর্যাদাবোধের কথা তুললেন। নবীজি ﷺ প্রতিটি আপত্তির জবাব দিয়ে তাঁকে বিবাহ করেন—আর তিনি বলতেন, প্রতিশ্রুতি অনুযায়ী বিনিময়টি সত্যিই উত্তম হয়েছিল।",
          },
        ],
      },
      {
        h: { en: "A Mother of the Believers", bn: "উম্মুল মুমিনীন" },
        p: [
          {
            en: "As one of the wives of the Prophet ﷺ she became a mother of the believers, a status the Quran states in 33:6, and she took the teaching side of it seriously. She narrated a great many hadith, particularly on prayer, fasting, the rites of hajj and the manners of the household, and afterwards gave verdicts to those who came to ask.",
            bn: "নবীজি ﷺ-এর স্ত্রী হিসেবে তিনি হলেন উম্মুল মুমিনীন—কুরআন 33:6-এ যে মর্যাদার কথা বলেছে; আর এর শিক্ষকতার দিকটি তিনি অত্যন্ত গুরুত্বের সঙ্গে নিয়েছিলেন। তিনি বহু হাদিস বর্ণনা করেছেন—বিশেষত নামাজ, রোজা, হজের আহকাম ও পারিবারিক শিষ্টাচার বিষয়ে; আর নবীজি ﷺ-এর পর যাঁরা জিজ্ঞেস করতে আসতেন তাঁদের ফতোয়া দিতেন।",
          },
          {
            en: "She asked questions herself. The Sunan report that she asked why the men were mentioned in the Quran and the women were not, and that 33:35 was revealed, listing the submitting men and the submitting women, the believing men and the believing women, through to those who remember Allah much. The same connection is made with 3:195, that Allah does not let the work of any worker among them be lost, male or female.",
            bn: "তিনি নিজেও প্রশ্ন করতেন। সুনানের বর্ণনায় আছে, তিনি জিজ্ঞেস করেছিলেন—কুরআনে পুরুষদের উল্লেখ আছে, নারীদের নেই কেন; এরপর নাজিল হয় 33:35, যেখানে আত্মসমর্পণকারী পুরুষ ও নারী, মুমিন পুরুষ ও নারী থেকে শুরু করে আল্লাহকে অধিক স্মরণকারীদের পর্যন্ত তালিকা রয়েছে। একই প্রসঙ্গে 3:195-ও উল্লেখ করা হয়—আল্লাহ তাঁদের কোনো কর্মীর শ্রম বিনষ্ট করেন না, সে পুরুষ হোক বা নারী।",
          },
        ],
      },
      {
        h: { en: "The Counsel at Hudaybiyah", bn: "হুদাইবিয়ায় পরামর্শ" },
        p: [
          {
            en: "At Hudaybiyah the Muslims were stopped short of Makkah and a treaty was made on terms that felt like defeat: they would go home without the umrah, return the following year, and hand back anyone who came to them from Quraysh. The companions were shaken. When the Prophet ﷺ told them to rise, sacrifice their animals and shave their heads, not one of them moved, and he repeated it three times.",
            bn: "হুদাইবিয়ায় মুসলিমদের মক্কার আগেই থামিয়ে দেওয়া হয় এবং এমন শর্তে সন্ধি হয় যা পরাজয়ের মতো মনে হচ্ছিল: উমরা না করেই তাঁরা ফিরে যাবেন, পরের বছর আসবেন, আর কুরাইশ থেকে কেউ এলে তাকে ফেরত দিতে হবে। সাহাবিগণ মর্মাহত হয়ে পড়েন। নবীজি ﷺ যখন বললেন—ওঠো, কোরবানি করো, মাথা মুণ্ডন করো—কেউ নড়ল না; তিনি তিনবার কথাটি বললেন।",
          },
          {
            en: "He went into his tent and told Umm Salamah what had happened. Her advice, preserved in Sahih al-Bukhari, was this: go out, do not speak a word to any of them, sacrifice your own camel and call your barber to shave you. He went out, said nothing, sacrificed and shaved — and the whole camp rose and did the same, some of them almost trampling each other in their haste.",
            bn: "তিনি নিজের তাঁবুতে গিয়ে উম্মে সালামাকে ঘটনাটি জানালেন। সহিহ বুখারিতে সংরক্ষিত তাঁর পরামর্শ ছিল: বেরিয়ে যান, কারও সঙ্গে একটি কথাও বলবেন না, নিজের উটটি কোরবানি করুন আর নাপিতকে ডেকে মাথা মুণ্ডন করান। তিনি বেরিয়ে গেলেন, কিছুই বললেন না, কোরবানি করলেন ও মাথা মুণ্ডন করলেন—আর গোটা শিবির উঠে দাঁড়িয়ে একই কাজ করল, তাড়াহুড়ায় কেউ কেউ প্রায় একে অন্যের ওপর গিয়ে পড়ল।",
          },
          {
            en: "She had understood what a direct order was not reaching: they were not disobeying so much as stunned, and needed to see the thing done before they could do it. The treaty held, and the Quran called it a clear victory in 48:1. Few moments in the Seerah turn a decision of that weight on a woman's counsel, and the sources record this one plainly.",
            bn: "মানুষ সম্পর্কে তিনি এমন একটি সত্য বুঝেছিলেন, যা সরাসরি নির্দেশে ধরা পড়ছিল না: তাঁরা অবাধ্য হচ্ছিলেন না, বরং হতভম্ব হয়ে গিয়েছিলেন; কাজটি করার আগে তাঁদের তা করতে দেখা দরকার ছিল। সন্ধি টিকে গেল, আর কুরআন 48:1-এ একে বলল সুস্পষ্ট বিজয়। সিরাতের যে অল্প কয়েকটি মুহূর্তে এত গুরুভার সিদ্ধান্ত একজন নারীর পরামর্শে মোড় নিয়েছে, এটি তার একটি—আর উৎসগ্রন্থগুলো তা লিপিবদ্ধ করেছে কোনো সংকোচ ছাড়াই।",
          },
        ],
      },
      {
        h: { en: "The Longest Life", bn: "দীর্ঘতম জীবন" },
        p: [
          {
            en: "She outlived all the other wives of the Prophet ﷺ and saw the community pass through the caliphates and into open conflict. She kept her distance from the factions and used her position to counsel restraint, and people continued to come to her for rulings and for what she remembered of the Prophet's ﷺ practice at home, which few others could supply.",
            bn: "নবীজি ﷺ-এর অন্য সব স্ত্রীর চেয়ে তিনি দীর্ঘজীবী হন এবং দেখে যান কীভাবে সমাজ খিলাফতের ধারা পেরিয়ে প্রকাশ্য সংঘাতে গিয়ে পৌঁছাল। দলাদলি থেকে তিনি নিজেকে দূরে রাখেন এবং নিজের অবস্থান কাজে লাগিয়ে সংযমের পরামর্শ দেন; আর মানুষ তাঁর কাছে আসতেই থাকে ফতোয়ার জন্য এবং ঘরের ভেতরে নবীজি ﷺ-এর আমল সম্পর্কে তাঁর স্মৃতির জন্য, যা খুব কম মানুষই জানাতে পারতেন।",
          },
          {
            en: "Her life is worth stating whole: a woman of a proud clan, twice a migrant, held a year from her husband and child, widowed by a battle wound, then raised to the household of the Prophet ﷺ, finally the voice that saved a treaty when everyone else had frozen. Patience and judgement are not two different virtues in her story; they are the same person at different hours.",
            bn: "তাঁর জীবনের পূর্ণ আকৃতিটি একবারে বলা দরকার: এক অভিজাত গোত্রের নারী, দুইবারের মুহাজির, এক বছর স্বামী-সন্তান থেকে বিচ্ছিন্ন, যুদ্ধের আঘাতে বিধবা, এরপর নবীজি ﷺ-এর পরিবারে উন্নীত, আর সবশেষে সেই কণ্ঠ—যা সবাই যখন স্তব্ধ, তখন একটি সন্ধিকে রক্ষা করল। তাঁর জীবনে ধৈর্য ও প্রজ্ঞা আলাদা দুটি গুণ নয়; একই মানুষ, ভিন্ন ভিন্ন সময়ে।",
          },
        ],
      },
    ],
  },
  umm_ayman_barakah: {
    sections: [
      {
        h: { en: "Barakah of the House of Abdullah", bn: "আবদুল্লাহর ঘরের বারাকা" },
        p: [
          {
            en: "Her name was Barakah, an Abyssinian woman in the household of Abdullah ibn Abd al-Muttalib. When he died before his son was born, the little that he left passed to the child, and she was part of that household. So the Prophet ﷺ was born into a house where the person who would look after him day to day was a woman with no family of her own in Makkah.",
            bn: "তাঁর নাম ছিল বারাকা—আবদুল্লাহ ইবনে আবদুল মুত্তালিবের ঘরের এক হাবশি নারী। পুত্রের জন্মের আগেই আবদুল্লাহ ইন্তেকাল করলে তাঁর রেখে যাওয়া সামান্য সম্পদ সন্তানের ভাগে আসে, আর সেই ঘরেরই একজন ছিলেন তিনি। ফলে নবীজি ﷺ এমন এক ঘরে জন্ম নিলেন, যেখানে প্রতিদিনের দেখাশোনার দায়িত্ব যাঁর ওপর, মক্কায় তাঁর নিজের বলতে কোনো পরিবারই ছিল না।",
          },
          {
            en: "She cared for him from infancy, and later served his mother Aminah. There is no drama in this part of the story; there is only years of ordinary, unpaid, unremarked work — feeding a child, watching him, walking him to and from the houses of relatives — of a kind that history usually loses entirely, and would have lost here too if the child had not been who he was.",
            bn: "শৈশব থেকেই তিনি তাঁর দেখাশোনা করেছেন, পরে সেবা করেছেন তাঁর মা আমিনার। গল্পের এই অংশে কোনো নাটকীয়তা নেই; আছে কেবল বছরের পর বছর সাধারণ, বিনা পারিশ্রমিকের, অনুল্লেখিত শ্রম—শিশুকে খাওয়ানো, চোখে চোখে রাখা, আত্মীয়দের বাড়িতে নিয়ে যাওয়া-আসা—যে ধরনের শ্রম ইতিহাস সাধারণত পুরোপুরি হারিয়ে ফেলে; এখানেও হারাত, যদি না সেই শিশুটি তিনিই হতেন।",
          },
        ],
      },
      {
        h: { en: "The Road Back from al-Abwa", bn: "আবওয়া থেকে ফেরার পথ" },
        p: [
          {
            en: "Aminah took her son to Madinah to visit his father's relatives and her husband's grave, with Barakah travelling with them. On the journey home Aminah fell ill and died at al-Abwa, between Makkah and Madinah. The child was six years old. It was Barakah who buried the mother's memory in him and brought him the rest of the way back to Makkah, to his grandfather.",
            bn: "আমিনা তাঁর পুত্রকে নিয়ে মদিনায় যান—স্বামীর আত্মীয়দের সঙ্গে দেখা করতে ও তাঁর কবর জিয়ারত করতে; সঙ্গে ছিলেন বারাকা। ফেরার পথে আমিনা অসুস্থ হয়ে পড়েন এবং মক্কা ও মদিনার মাঝপথে আবওয়ায় ইন্তেকাল করেন। শিশুটির বয়স তখন ছয়। বারাকাই তাঁর ভেতরে মায়ের স্মৃতি ধরে রাখলেন এবং বাকি পথটুকু পাড়ি দিয়ে তাঁকে মক্কায় দাদার কাছে পৌঁছে দিলেন।",
          },
          {
            en: "The Quran addresses that period of his life directly in 93:6 — did He not find you an orphan and give shelter? Shelter in this world arrives through people, and for those years it arrived largely through her. She stayed with him through the death of his grandfather two years later, and into the house of Abu Talib, and did not leave.",
            bn: "কুরআন তাঁর জীবনের এই পর্বকে সরাসরি সম্বোধন করেছে 93:6-এ—তিনি কি আপনাকে এতিম অবস্থায় পাননি, অতঃপর আশ্রয় দেননি? দুনিয়ায় আশ্রয় আসে মানুষের হাত ধরেই, আর সেই বছরগুলোতে তা মূলত এসেছিল তাঁরই হাত ধরে। দুই বছর পর দাদার মৃত্যুর সময়ও তিনি সঙ্গে ছিলেন, আবু তালিবের ঘরেও গেলেন—ছেড়ে যাননি।",
          },
        ],
      },
      {
        h: { en: "The Remnant of My Family", bn: "আমার পরিবারের অবশিষ্ট" },
        p: [
          {
            en: "When the Prophet ﷺ married Khadijah (RA) he freed her, and the early biographers record that he used to say of her, she is the remnant of my family. That is a heavy sentence from a man who had lost his father, mother and grandfather in childhood. She was not a servant retained out of duty; she was the last living link to the household he was born into.",
            bn: "নবীজি ﷺ খাদিজা (রাঃ)-কে বিয়ে করার পর তাঁকে মুক্ত করে দেন; আর প্রাচীন জীবনীকারগণ লিখেছেন, তিনি তাঁর সম্পর্কে বলতেন—ইনি আমার পরিবারের অবশিষ্ট। যে মানুষটি শৈশবেই পিতা, মাতা ও দাদাকে হারিয়েছেন, তাঁর মুখে কথাটি অত্যন্ত ভারী। তিনি দায়িত্ববোধ থেকে রেখে দেওয়া কোনো সেবিকা ছিলেন না; ছিলেন সেই ঘরের শেষ জীবিত সূত্র, যে ঘরে নবীজি ﷺ জন্মেছিলেন।",
          },
          {
            en: "It is reported, though the chain is criticised, that he said whoever wishes to marry a woman of the people of Paradise should marry Umm Ayman, and Zayd ibn Harithah (RA) married her. Their son was Usama ibn Zayd (RA), whom the Prophet ﷺ loved and whom the community called the beloved son of the beloved. She had come into that household with nothing and ended as the mother of the man the Prophet ﷺ put in command of an army.",
            bn: "বর্ণিত আছে—যদিও এর সনদ সমালোচিত—তিনি বলেছিলেন, যে ব্যক্তি জান্নাতি কোনো নারীকে বিয়ে করতে চায়, সে যেন উম্মে আইমানকে বিয়ে করে; আর যায়েদ ইবনে হারিসা (রাঃ) তাঁকে বিয়ে করেন। তাঁদের পুত্র উসামা ইবনে যায়েদ (রাঃ), যাঁকে নবীজি ﷺ ভালোবাসতেন এবং সমাজ যাঁকে ডাকত 'প্রিয়জনের প্রিয় পুত্র' বলে। শূন্য হাতে যে ঘরে তিনি এসেছিলেন, সেখানেই শেষ হলো এমন একজনের মা হিসেবে, যাঁকে নবীজি ﷺ একটি বাহিনীর সেনাপতি নিযুক্ত করেছিলেন।",
          },
        ],
      },
      {
        h: { en: "Two Migrations on Foot", bn: "পায়ে হেঁটে দুই হিজরত" },
        p: [
          {
            en: "She accepted Islam at the beginning and made both migrations, first to Abyssinia and then to Madinah. She was no longer young when she made the second, and she made the desert crossing on foot. Nothing about her position obliged her to go. She had no property at stake and no clan honour to defend; she went because the household she belonged to was going.",
            bn: "একেবারে শুরুতেই তিনি ইসলাম গ্রহণ করেন এবং দুটি হিজরতই করেন—প্রথমে আবিসিনিয়ায়, পরে মদিনায়। দ্বিতীয়বার যখন যান তখন তিনি আর তরুণী নন, আর মরুপথটুকু তিনি পাড়ি দিয়েছিলেন পায়ে হেঁটে। তাঁর অবস্থানের দিক থেকে যাওয়ার কোনো বাধ্যবাধকতা তাঁর ছিল না। ঝুঁকিতে পড়ার মতো সম্পদ ছিল না, রক্ষা করার মতো গোত্রীয় সম্মানও ছিল না; তিনি গিয়েছিলেন কারণ যে ঘরের তিনি, সেই ঘরই যাচ্ছিল।",
          },
          {
            en: "In Madinah she was among the women who went out with the army to carry water and treat the wounded, and she is named in the accounts of Uhud and Khaybar doing that work. Her son Ayman, from her first marriage, was killed at Hunayn. Her husband Zayd was killed at Mutah. She buried, in the space of a few years, most of what she had.",
            bn: "মদিনায় তিনি ছিলেন সেই নারীদের একজন, যাঁরা বাহিনীর সঙ্গে বেরিয়ে পানি বহন করতেন ও আহতদের সেবা করতেন; উহুদ ও খায়বারের বিবরণে এই কাজে তাঁর নাম এসেছে। প্রথম স্বামীর ঘরের পুত্র আইমান হুনাইনে শহীদ হন। স্বামী যায়েদ শহীদ হন মুতায়। কয়েক বছরের ব্যবধানে নিজের প্রায় সবটুকুই তাঁকে কবরে রেখে আসতে হয়েছিল।",
          },
        ],
      },
      {
        h: { en: "I Weep for the Revelation", bn: "আমি কাঁদি ওহির জন্য" },
        p: [
          {
            en: "After the Prophet ﷺ died, Abu Bakr (RA) said to Umar (RA): let us go and visit Umm Ayman as the Messenger of Allah ﷺ used to visit her. When they came to her she wept, and they said to her, why do you weep? What is with Allah is better for His Messenger. This exchange is preserved in Sahih Muslim, and her answer is one of the most quoted sentences in the Seerah.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর আবু বকর (রাঃ) উমর (রাঃ)-কে বললেন: চলো, আমরা উম্মে আইমানকে দেখতে যাই—যেমনটি আল্লাহর রাসূল ﷺ তাঁকে দেখতে যেতেন। তাঁরা কাছে এলে তিনি কাঁদতে লাগলেন, আর তাঁরা বললেন, আপনি কাঁদছেন কেন? আল্লাহর কাছে যা আছে তা তো তাঁর রাসূলের জন্য উত্তম। এই কথোপকথন সহিহ মুসলিমে সংরক্ষিত, আর তাঁর জবাবটি সিরাতের সবচেয়ে বেশি উদ্ধৃত বাক্যগুলোর একটি।",
          },
          {
            en: "She said she was not weeping because she did not know that what is with Allah is better for His Messenger, but she wept because the revelation from heaven had ceased. Hearing it, both of them wept with her. She had understood what the loss actually was. The Book was complete, as 5:3 announced on the farewell pilgrimage, and the door through which it had come was now closed.",
            bn: "তিনি বললেন, তিনি এ কারণে কাঁদছেন না যে আল্লাহর কাছে যা আছে তা তাঁর রাসূলের জন্য উত্তম—এটি তাঁর অজানা; বরং তিনি কাঁদছেন এ কারণে যে আকাশ থেকে ওহি আসা বন্ধ হয়ে গেছে। এ কথা শুনে তাঁরা দুজনও তাঁর সঙ্গে কেঁদে ফেললেন। ক্ষতিটি আসলে কী, তা তিনি বুঝেছিলেন। কিতাব পূর্ণ হয়ে গেছে—বিদায় হজে 5:3 যা ঘোষণা করেছিল—আর যে দরজা দিয়ে তা আসত, সে দরজা এখন বন্ধ।",
          },
        ],
      },
      {
        h: { en: "What Service Is Worth", bn: "খিদমতের মূল্য" },
        p: [
          {
            en: "She lived on into the caliphate that followed and died in Madinah. She never led an army, gave no legal verdicts and narrated only a small number of hadith. Her place in this history rests on something else entirely: she took charge of an orphan and did not let go of him, and the man she raised called her the remnant of his family and visited her all his life.",
            bn: "পরবর্তী খিলাফতকাল পর্যন্ত তিনি বেঁচে ছিলেন এবং মদিনায় ইন্তেকাল করেন। তিনি কোনো বাহিনীর নেতৃত্ব দেননি, ফতোয়া দেননি, হাদিসও বর্ণনা করেছেন অল্প কয়েকটি। এই ইতিহাসে তাঁর স্থান দাঁড়িয়ে আছে সম্পূর্ণ ভিন্ন এক ভিত্তির ওপর: তিনি একটি এতিম শিশুর দায়িত্ব নিয়েছিলেন এবং তাকে ছেড়ে যাননি; আর তিনি যাঁকে লালন করেছেন, তিনি তাঁকে বলতেন নিজের পরিবারের অবশিষ্ট এবং আজীবন তাঁকে দেখতে যেতেন।",
          },
          {
            en: "The Quran teaches the believer to pray for those who raised him in 17:24 — my Lord, have mercy on them as they brought me up when I was small. Umm Ayman is the standing proof in this religion that quiet service is not a lesser rank. The people who feed and carry and stay are counted, and in her case they are counted first, in the household where all of it began.",
            bn: "যাঁরা লালন-পালন করেছেন তাঁদের জন্য দোয়া করতে কুরআন মুমিনকে শেখায় 17:24-এ—হে আমার প্রতিপালক, তাঁদের প্রতি দয়া করুন, যেমন তাঁরা শৈশবে আমাকে লালন করেছেন। এই দ্বীনে উম্মে আইমান হলেন সেই স্থায়ী প্রমাণ যে, নীরব খিদমত নিচু কোনো স্তর নয়। যাঁরা খাওয়ান, বয়ে নেন এবং পাশে থেকে যান—তাঁদেরও গোনা হয়; আর তাঁর ক্ষেত্রে গোনা হয়েছে সবার আগে, ঠিক সেই ঘরেই যেখান থেকে সবকিছুর শুরু।",
          },
        ],
      },
    ],
  },
  ubayy_ibn_kab: {
    sections: [
      {
        h: { en: "A Literate Man of the Khazraj", bn: "খাযরাজের এক লিখতে-জানা মানুষ" },
        p: [
          {
            en: "Ubayy ibn Kab (RA) belonged to Banu Najjar, a clan of the Khazraj in Yathrib, and he had something rare among the Arabs of his day: he could write. Literacy was scarce enough in Madinah that a man who possessed it was known for it. He was among the Ansar who met the Prophet ﷺ at the second pledge of al-Aqabah, and when the Prophet ﷺ arrived in the city, that skill was put to work almost at once.",
            bn: "উবাই ইবনে কাব (রাঃ) ছিলেন ইয়াসরিবের খাযরাজ গোত্রের বনু নাজ্জার শাখার লোক। সে যুগের আরবদের মধ্যে বিরল একটা গুণ তাঁর ছিল: তিনি লিখতে জানতেন। মদিনায় লেখাপড়া জানা মানুষ এত কম ছিল যে, যে জানত তাকে সবাই সেই পরিচয়েই চিনত। আকাবার দ্বিতীয় বাইআতে যেসব আনসার নবীজি ﷺ-এর হাতে হাত রেখেছিলেন, তিনি তাঁদের একজন। নবীজি ﷺ মদিনায় পৌঁছানোর প্রায় সঙ্গে সঙ্গেই তাঁর ওই গুণটা কাজে লেগে গেল।",
          },
          {
            en: "He fought at Badr and at Uhud and in the campaigns that followed. But the work that shaped his life was quieter than any battlefield. He wrote down revelation as it came, he memorised what he wrote, and he recited it back until the wording was fixed in him. The Prophet ﷺ gave him the kunyah Abu al-Mundhir, and that is the name he is called by in some of the best-known reports about him.",
            bn: "তিনি বদরে লড়েছেন, উহুদে লড়েছেন, পরের অভিযানগুলোতেও ছিলেন। তবে তাঁর জীবনকে যে কাজটা গড়ে দিয়েছে, তা কোনো যুদ্ধক্ষেত্রের চেয়ে অনেক নিরিবিলি। ওহি নাজিল হলে তিনি তা লিখে রাখতেন, যা লিখতেন তা মুখস্থ করতেন, আর বারবার পড়ে শোনাতেন যতক্ষণ না শব্দগুলো তাঁর ভেতরে বসে যায়। নবীজি ﷺ তাঁকে আবুল মুনযির উপনামে ডাকতেন। তাঁকে নিয়ে সবচেয়ে পরিচিত কয়েকটি বর্ণনায় এই নামেই তাঁর উল্লেখ আছে।",
          },
        ],
      },
      {
        h: { en: "Take the Quran from Four", bn: "চারজনের কাছ থেকে কুরআন নাও" },
        p: [
          {
            en: "Sahih al-Bukhari 3808 records that the Prophet ﷺ named four men and told the Muslims to take the Quran from them: Abdullah ibn Masud, Salim the freed slave of Abu Hudhayfah, Muadh ibn Jabal, and Ubayy ibn Kab. Two of the four were Muhajirun and two were Ansar. The instruction was not a compliment paid in passing. It was a decision about where the reading of the Book would come from after him.",
            bn: "সহিহ বুখারি ৩৮০৮-এ আছে, নবীজি ﷺ চারজনের নাম নিয়ে বলেছেন, তাঁদের কাছ থেকে কুরআন নাও: আবদুল্লাহ ইবনে মাসউদ, আবু হুযাইফার আজাদকৃত গোলাম সালিম, মুআয ইবনে জাবাল আর উবাই ইবনে কাব। চারজনের দুজন মুহাজির, দুজন আনসার। কথাটা চলতি পথে দেওয়া কোনো প্রশংসা ছিল না। এ ছিল একটা সিদ্ধান্ত: তাঁর পরে কুরআনের পাঠ কোন হাত ধরে আসবে, তা ঠিক করে দেওয়া।",
          },
          {
            en: "Umar ibn al-Khattab (RA) later said plainly that Ubayy was the best reciter among them, a judgement Bukhari preserves alongside Umar's assessment of other Companions in other fields. Coming from a caliph who was not given to loose praise, and who was himself in daily contact with the reciters of Madinah, it settled the matter for the generation that followed.",
            bn: "উমর ইবনুল খাত্তাব (রাঃ) পরে সোজাসুজি বলেছেন, তাঁদের মধ্যে উবাই সবচেয়ে ভালো পড়েন। বুখারি এ কথাটা সংরক্ষণ করেছেন, সঙ্গে অন্য ক্ষেত্রে অন্য সাহাবিদের নিয়ে উমরের মূল্যায়নও। যে খলিফা এমনি এমনি প্রশংসা করতেন না, আর যিনি নিজে প্রতিদিন মদিনার কারিদের সঙ্গে ওঠাবসা করতেন, তাঁর মুখের এ কথা পরের প্রজন্মের জন্য বিষয়টা মিটিয়ে দিয়েছিল।",
          },
          {
            en: "Jami at-Tirmidhi 3791 preserves a hadith in which the Prophet ﷺ named Companions for what each of them led the ummah in, and Ubayy is named there as the best of them in reciting the Book of Allah. Set beside the instruction in Bukhari 3808, it means his standing in recitation rests on two separate reports rather than on the reputation of a later age.",
            bn: "জামে তিরমিজি ৩৭৯১-এ এমন একটি হাদিস আছে, যেখানে নবীজি ﷺ নাম ধরে বলেছেন কে কোন বিষয়ে উম্মতের অগ্রগামী। সেখানে আল্লাহর কিতাব পড়ায় সবার সেরা বলা হয়েছে উবাইকে। বুখারি ৩৮০৮-এর নির্দেশের পাশে রাখলে বোঝা যায়, তিলাওয়াতে তাঁর মর্যাদা দাঁড়িয়ে আছে আলাদা দুটি বর্ণনার ওপর, পরের যুগের গড়া কোনো খ্যাতির ওপর নয়।",
          },
        ],
      },
      {
        h: { en: "A Surah Recited to Him", bn: "তাঁকে শোনানো এক সূরা" },
        p: [
          {
            en: "The report in Sahih al-Bukhari 3809 and Sahih Muslim 799 is one of the most striking in the entire literature of the Companions. The Prophet ﷺ said to Ubayy that Allah had commanded him to recite Surah al-Bayyinah to him, the surah that opens at 98:1. Ubayy asked whether Allah had mentioned him by name. He was told yes. And he wept.",
            bn: "সহিহ বুখারি ৩৮০৯ ও সহিহ মুসলিম ৭৯৯-এর বর্ণনাটা সাহাবিদের গোটা সাহিত্যের মধ্যে সবচেয়ে চমকপ্রদগুলোর একটি। নবীজি ﷺ উবাইকে বললেন, আল্লাহ তাঁকে আদেশ দিয়েছেন তাঁর সামনে সূরা আল-বাইয়িনাহ পড়তে — যে সূরা শুরু হয় ৯৮:১ দিয়ে। উবাই জিজ্ঞেস করলেন, আল্লাহ কি আমার নাম ধরে বলেছেন? তাঁকে বলা হলো, হ্যাঁ। আর তিনি কেঁদে ফেললেন।",
          },
          {
            en: "Consider what the moment contains. A man is told that his name was spoken above the heavens, in an instruction given to the Messenger of Allah ﷺ about him personally. He does not swell with it. He weeps. The tears are the reason the story is remembered as it is: the honour was received the way an honour of that size ought to be received.",
            bn: "মুহূর্তটার ভেতরে কী আছে, একবার ভাবুন। একজন মানুষ জানতে পারছেন, আসমানের উপরে তাঁর নাম উচ্চারিত হয়েছে, আর তা এসেছে খোদ রাসূলুল্লাহ ﷺ-কে দেওয়া এক আদেশের ভেতরে, তাঁকে নিয়েই। তিনি এতে ফুলে ওঠেন না। তিনি কাঁদেন। এই কান্নার কারণেই ঘটনাটা এভাবে মনে রাখা হয়েছে। এত বড় সম্মান যেভাবে গ্রহণ করা উচিত, তিনি ঠিক সেভাবেই গ্রহণ করেছিলেন।",
          },
        ],
      },
      {
        h: { en: "The Greatest Verse in the Book", bn: "কিতাবের সবচেয়ে বড় আয়াত" },
        p: [
          {
            en: "Sahih Muslim 810 records that the Prophet ﷺ asked him which verse of the Book of Allah he considered the greatest. Ubayy answered that it was 2:255, the Verse of the Throne. The Prophet ﷺ struck him on the chest and said, may knowledge be pleasant for you, Abu al-Mundhir. It is the exchange of a teacher who already knows the answer and wants to hear his student find it.",
            bn: "সহিহ মুসলিম ৮১০-এ আছে, নবীজি ﷺ তাঁকে জিজ্ঞেস করলেন, আল্লাহর কিতাবের কোন আয়াতটি তোমার কাছে সবচেয়ে বড়? উবাই বললেন, ২:২৫৫, আয়াতুল কুরসি। নবীজি ﷺ তাঁর বুকে হাত রেখে বললেন, হে আবুল মুনযির, ইলম তোমার জন্য সহজ হোক। এ যেন সেই শিক্ষকের কথোপকথন, যিনি উত্তরটা জানেন, তবু ছাত্রের মুখ থেকেই শুনতে চান।",
          },
          {
            en: "The question is worth noticing as much as the answer. The Prophet ﷺ did not ask him to recite something, or to report a ruling. He asked for a judgement about the Quran itself, and he asked it of a man whose whole life was spent inside the text. Ubayy had earned the right to have an opinion about the Book, and the Prophet ﷺ treated him as someone who had.",
            bn: "উত্তরটার মতোই প্রশ্নটাও লক্ষ করার মতো। নবীজি ﷺ তাঁকে কিছু পড়ে শোনাতে বলেননি, কোনো মাসআলা জানতেও চাননি। তিনি চেয়েছিলেন কুরআন নিয়েই একটা মূল্যায়ন, আর তা চেয়েছিলেন এমন একজনের কাছে যাঁর গোটা জীবন কেটেছে এই কিতাবের ভেতরে। কুরআন নিয়ে মত দেওয়ার অধিকার উবাই অর্জন করেছিলেন, আর নবীজি ﷺ তাঁকে সেই অধিকারওয়ালা মানুষ হিসেবেই দেখেছেন।",
          },
        ],
      },
      {
        h: { en: "Master of the Reciters", bn: "কারিদের সর্দার" },
        p: [
          {
            en: "The title he carried, Sayyid al-Qurra, was not decorative. In the caliphates of Abu Bakr (RA) and Umar (RA) the community was working out how the Quran would be preserved, taught, and read aloud across an expanding territory, and Ubayy was among the men that work ran through. When a question about recitation reached Madinah, he was one of the few whose answer closed it.",
            bn: "সাইয়িদুল কুররা, অর্থাৎ কারিদের সর্দার। উপাধিটা সাজসজ্জার জন্য ছিল না। আবু বকর (রাঃ) ও উমর (রাঃ)-এর খিলাফতকালে মুসলিম সমাজ ঠিক করছিল, ছড়িয়ে পড়া বিশাল ভূখণ্ডে কুরআন কীভাবে সংরক্ষিত হবে, কীভাবে শেখানো হবে, কীভাবে পড়া হবে। সেই কাজ যাঁদের হাত ধরে এগোত, উবাই তাঁদের একজন। তিলাওয়াত নিয়ে কোনো প্রশ্ন মদিনায় এলে যে কজনের জবাবে বিষয়টা মিটে যেত, তিনি তাঁদের ভেতরে ছিলেন।",
          },
          {
            en: "The year of his death is disputed among the historians, and the reports do not agree closely enough to state one with confidence. What is not disputed is what he left. The chains by which the Quran is recited today run back through the reciters of Madinah, and his name stands in them. A man who could write, in a city where few could, spent that ability on one Book and is remembered for nothing else.",
            bn: "তিনি কোন সনে ইন্তেকাল করেছেন, ঐতিহাসিকদের মধ্যে তা নিয়ে মতভেদ আছে; বর্ণনাগুলো এতটা মেলে না যে নিশ্চিত করে একটা সন বলা যায়। যা নিয়ে মতভেদ নেই তা হলো তিনি কী রেখে গেছেন। আজ যেসব সনদ ধরে কুরআন পড়া হয়, সেগুলো মদিনার কারিদের হাত ঘুরেই এসেছে, আর সেখানে তাঁর নাম আছে। যে শহরে হাতেগোনা কজন লিখতে জানত, সেখানকার এক লিখতে-জানা মানুষ তাঁর গোটা সামর্থ্য একটা কিতাবেই ঢেলে দিয়েছিলেন। তাঁকে আর কোনো পরিচয়ে মনে রাখা হয় না।",
          },
        ],
      },
    ],
  },

  zayd_ibn_thabit: {
    sections: [
      {
        h: { en: "Turned Away at Badr", bn: "বদরে ফিরিয়ে দেওয়া হলো" },
        p: [
          {
            en: "Zayd ibn Thabit (RA) was a boy of the Khazraj, about eleven when the Prophet ﷺ reached Madinah. His father had been killed before the Hijrah, and the family brought the child forward as one who had already memorised a number of surahs. When the army assembled for Badr he presented himself and was sent home. He was too small to carry a sword, and the Prophet ﷺ would not take him.",
            bn: "যায়েদ ইবনে সাবিত (রাঃ) ছিলেন খাযরাজের এক বালক, নবীজি ﷺ যখন মদিনায় পৌঁছান তখন তাঁর বয়স এগারোর কাছাকাছি। হিজরতের আগেই তাঁর বাবা নিহত হয়েছিলেন। পরিবার ছেলেটিকে সামনে নিয়ে আসে এই পরিচয়ে যে, সে এরই মধ্যে বেশ কিছু সূরা মুখস্থ করে ফেলেছে। বদরের জন্য বাহিনী জড়ো হলে তিনি নিজেকে পেশ করেন, আর তাঁকে ঘরে ফিরিয়ে দেওয়া হয়। তলোয়ার বইবার মতো শরীর তাঁর ছিল না, নবীজি ﷺ তাঁকে নেননি।",
          },
          {
            en: "Being refused a place in the ranks turned out to decide his life. The boy who could not fight went back to what he could do, which was read and write and remember. Within a few years he was the one the Prophet ﷺ called when revelation came down and needed to be recorded, and the men who had gone to Badr were reciting from what he had written.",
            bn: "কাতারে জায়গা না পাওয়াই শেষ পর্যন্ত তাঁর জীবনের মোড় ঠিক করে দিল। যে ছেলেটি লড়তে পারল না, সে ফিরে গেল যা পারে তাতেই — পড়া, লেখা আর মনে রাখা। কয়েক বছরের মধ্যেই ওহি নাজিল হয়ে লিখে রাখার দরকার পড়লে নবীজি ﷺ তাঁকেই ডাকতেন। আর যাঁরা বদরে গিয়েছিলেন, তাঁরা পড়তেন এই ছেলেটিরই লেখা থেকে।",
          },
        ],
      },
      {
        h: { en: "Learn Their Writing", bn: "ওদের লেখা শিখে নাও" },
        p: [
          {
            en: "Letters were arriving in Madinah in languages the Prophet ﷺ did not read, and replies had to go out in them. Sunan Abi Dawud 3645 and Jami at-Tirmidhi 2715 record that he instructed Zayd to learn the writing of the Jews, because he did not trust them over his correspondence. Zayd learned it, and at-Tirmidhi's report says it took him little more than a fortnight.",
            bn: "মদিনায় এমন ভাষায় চিঠি আসছিল যা নবীজি ﷺ পড়তেন না, অথচ জবাবও যেতে হতো সেই ভাষাতেই। সুনানে আবু দাউদ ৩৬৪৫ ও জামে তিরমিজি ২৭১৫-এ আছে, তিনি যায়েদকে ইহুদিদের লেখা শিখে নিতে বলেন, কারণ নিজের চিঠিপত্রের ব্যাপারে তিনি তাদের ওপর ভরসা করতেন না। যায়েদ তা শিখে ফেলেন। তিরমিজির বর্ণনা বলছে, তাতে তাঁর দুই সপ্তাহের কিছু বেশি সময় লেগেছিল।",
          },
          {
            en: "The detail is easy to pass over and worth stopping on. A community at war, surrounded, short of everything, sent a teenager to learn a foreign script so that its correspondence would be secure. It is a decision about competence, and about not leaving a critical function in the hands of people whose interests ran the other way.",
            bn: "কথাটা চোখ এড়িয়ে যায় সহজেই, অথচ থামার মতো। যুদ্ধরত একটা সমাজ, চারদিক থেকে ঘেরা, সব কিছুরই টানাটানি — সেই সমাজ এক কিশোরকে পাঠাল বিদেশি লিপি শিখতে, যাতে নিজেদের চিঠিপত্র নিরাপদ থাকে। এ সিদ্ধান্ত যোগ্যতা নিয়ে, আর একটা জরুরি কাজ এমন মানুষের হাতে ফেলে না রাখা নিয়ে যাদের স্বার্থ উল্টো দিকে।",
          },
          {
            en: "From then on he wrote the letters that went out of Madinah and read the ones that came in. The same hand that took down revelation drafted correspondence to tribes and to rulers beyond Arabia. It is worth remembering that the two duties sat with one young man, and that nobody in the sources thought it necessary to explain why he had been chosen for both.",
            bn: "এরপর থেকে মদিনা থেকে যত চিঠি বেরিয়েছে তিনিই লিখেছেন, আর যত চিঠি এসেছে তিনিই পড়েছেন। যে হাত ওহি লিখে রাখত, সেই হাতেই খসড়া হতো গোত্রপ্রধান আর আরবের বাইরের শাসকদের কাছে যাওয়া চিঠির। মনে রাখার মতো ব্যাপার এই যে দুটো দায়িত্বই ছিল একজন তরুণের কাঁধে, আর কেন তাঁকেই দুটোর জন্য বাছা হলো, সূত্রগুলোর কেউই তা ব্যাখ্যা করার দরকার মনে করেনি।",
          },
        ],
      },
      {
        h: { en: "Heavier Than Moving a Mountain", bn: "পাহাড় সরানোর চেয়েও ভারী" },
        p: [
          {
            en: "After the Prophet ﷺ died, many of the reciters were killed at the battle of Yamamah, and Umar (RA) went to Abu Bakr (RA) with a fear that the Quran would go with them. Sahih al-Bukhari 4679 records that Abu Bakr sent for Zayd and told him he was a young man of sound mind whom nobody suspected, and that he had written the revelation for the Messenger of Allah ﷺ. He was to search out the Quran and collect it.",
            bn: "নবীজি ﷺ-এর ইন্তেকালের পর ইয়ামামার যুদ্ধে বহু কারি শহিদ হন। উমর (রাঃ) আবু বকর (রাঃ)-এর কাছে গিয়ে আশঙ্কা প্রকাশ করেন, কুরআনও তাঁদের সঙ্গে চলে যেতে পারে। সহিহ বুখারি ৪৬৭৯-এ আছে, আবু বকর যায়েদকে ডেকে পাঠান আর বলেন, তুমি বুদ্ধিমান তরুণ, তোমাকে কেউ সন্দেহ করে না, আর তুমি রাসূলুল্লাহ ﷺ-এর জন্য ওহি লিখেছ। তোমাকেই কুরআন খুঁজে বের করে এক জায়গায় জড়ো করতে হবে।",
          },
          {
            en: "Zayd's answer is preserved in the same report. By Allah, he said, if they had ordered me to move a mountain it would not have been heavier upon me than what they ordered me to do. He then collected the Quran from palm stalks, thin white stones, and the memories of men, and found the closing verses of Surah at-Tawbah with Abu Khuzaymah al-Ansari (RA) and no one else.",
            bn: "যায়েদের জবাবটাও একই বর্ণনায় রাখা আছে। তিনি বলেন, আল্লাহর কসম, ওঁরা যদি আমাকে একটা পাহাড় সরাতে বলতেন, তা-ও আমার কাছে এর চেয়ে ভারী লাগত না। এরপর তিনি খেজুরের ডাল, পাতলা সাদা পাথর আর মানুষের মুখস্থ থেকে কুরআন জড়ো করেন। সূরা তাওবার শেষ আয়াতগুলো তিনি পান কেবল আবু খুযাইমা আল-আনসারি (রাঃ)-এর কাছে, আর কারও কাছে নয়।",
          },
        ],
      },
      {
        h: { en: "One Reading for the Ummah", bn: "উম্মতের জন্য একটাই পাঠ" },
        p: [
          {
            en: "A generation later the armies of Islam had reached Armenia and Azerbaijan, and Muslims from different regions were disputing over recitation. Sahih al-Bukhari 4987 records that Uthman (RA) appointed a committee: Zayd with Abdullah ibn az-Zubayr, Said ibn al-As, and Abd ar-Rahman ibn al-Harith. Where the three Qurayshis differed with Zayd, they were to write it in the tongue of Quraysh, since the Quran had come down in it.",
            bn: "এক প্রজন্ম পরে ইসলামের বাহিনী আর্মেনিয়া ও আজারবাইজানে পৌঁছে গেছে, আর নানা অঞ্চলের মুসলিমরা তিলাওয়াত নিয়ে বিতর্কে জড়াচ্ছে। সহিহ বুখারি ৪৯৮৭-এ আছে, উসমান (রাঃ) একটি কমিটি গঠন করেন: যায়েদের সঙ্গে আবদুল্লাহ ইবনে যুবায়ের, সাইদ ইবনুল আস আর আবদুর রহমান ইবনুল হারিস। কুরাইশ বংশের এই তিনজনের সঙ্গে যায়েদের মতভেদ হলে কুরাইশের ভাষাতেই লিখতে বলা হয়, কারণ কুরআন সেই ভাষাতেই নাজিল হয়েছিল।",
          },
          {
            en: "Note who was placed where. Zayd was an Ansari, not of Quraysh, and he was the one the other three were measured against. He had done the first collection under Abu Bakr and he was asked to do the second under Uthman, twenty years apart, by two caliphs with different problems in front of them. Both reached the same conclusion about who should hold the work.",
            bn: "কাকে কোথায় রাখা হলো, তা খেয়াল করার মতো। যায়েদ ছিলেন আনসারি, কুরাইশ নন; অথচ বাকি তিনজনকে মাপা হচ্ছিল তাঁরই নিরিখে। প্রথম সংকলন তিনি করেছিলেন আবু বকরের সময়ে, দ্বিতীয়টি করতে বলা হলো উসমানের সময়ে — মাঝখানে কুড়ি বছরের ব্যবধান, আর দুই খলিফার সামনে দুরকম সমস্যা। কাজটা কার হাতে থাকা উচিত, দুজনেই একই সিদ্ধান্তে পৌঁছেছিলেন।",
          },
        ],
      },
      {
        h: { en: "The Law of Shares", bn: "মিরাসের হিসাব" },
        p: [
          {
            en: "Alongside the Quran he became the community's authority on inheritance, the branch of law the Arabs called fara'id. Jami at-Tirmidhi 3791 preserves a hadith naming several Companions for what each excelled in, and Zayd is named there as the most knowledgeable in the laws of inheritance. It is exacting work, full of fractions and orders of precedence, and it suited the man who had counted the verses of a book.",
            bn: "কুরআনের পাশাপাশি তিনি হয়ে ওঠেন উত্তরাধিকার আইনে সমাজের সবচেয়ে বড় কর্তৃপক্ষ, আরবরা যাকে বলত ফারায়েজ। জামে তিরমিজি ৩৭৯১-এ এমন একটি হাদিস আছে, যেখানে কে কোন বিষয়ে শ্রেষ্ঠ তা ধরে ধরে বলা হয়েছে। সেখানে মিরাসের বিধানে সবচেয়ে জ্ঞানী বলা হয়েছে যায়েদকেই। কাজটা নিখুঁত হিসাবের — ভগ্নাংশ আর অগ্রাধিকারের ক্রমে ঠাসা। যে মানুষ একটা কিতাবের আয়াত গুনেছেন, তাঁর সঙ্গে এ কাজ মিলে গিয়েছিল।",
          },
          {
            en: "He lived on in Madinah, teaching, and the sources place his death in the middle decades of the first century after the Hijrah without agreeing on the year. Ibn Abbas (RA) is reported to have held his mount for him out of respect. The boy sent home from Badr ended as the man whose handwriting the ummah still reads.",
            bn: "তিনি মদিনাতেই থেকে গিয়েছিলেন, শিক্ষকতা করে। হিজরি প্রথম শতকের মাঝামাঝি দশকগুলোতে তাঁর ইন্তেকাল হয় বলে সূত্রগুলো বলে, তবে সন নিয়ে তারা একমত নয়। বর্ণিত আছে, ইবনে আব্বাস (রাঃ) সম্মান দেখিয়ে তাঁর বাহনের রশি ধরে দাঁড়াতেন। বদর থেকে ঘরে ফিরিয়ে দেওয়া সেই বালকটিই শেষ পর্যন্ত সেই মানুষ, যাঁর হাতের লেখা উম্মত আজও পড়ে।",
          },
        ],
      },
    ],
  },

  anas_ibn_malik: {
    sections: [
      {
        h: { en: "A Mother's Gift", bn: "মায়ের দেওয়া উপহার" },
        p: [
          {
            en: "When the Prophet ﷺ arrived in Madinah, Umm Sulaym (RA) brought her son to him. The boy was about ten. She had no wealth to offer and she gave what she had, saying that this was Anas, a clever boy, and that he would serve him. Anas ibn Malik (RA) stayed in that household for ten years, until the Prophet ﷺ died and the boy had become a young man.",
            bn: "নবীজি ﷺ মদিনায় পৌঁছালে উম্মে সুলাইম (রাঃ) নিজের ছেলেকে তাঁর কাছে নিয়ে আসেন। ছেলেটির বয়স তখন দশের কাছাকাছি। দেওয়ার মতো সম্পদ তাঁর ছিল না, যা ছিল তা-ই দিলেন। বললেন, এ আমার আনাস, বুদ্ধিমান ছেলে; সে আপনার খেদমত করবে। আনাস ইবনে মালিক (রাঃ) সেই ঘরেই থেকে যান দশ বছর — নবীজি ﷺ-এর ইন্তেকাল পর্যন্ত, ততদিনে বালকটি তরুণ হয়ে উঠেছেন।",
          },
          {
            en: "Ten years is long enough to see a man on his worst days. Anas was in the house through the loss of children, through the year of the trench, through hunger and rumour and the deaths of friends. What he reported of those years is not a list of miracles. It is mostly small domestic detail, and it is the closest thing the ummah has to a daily record of the Prophet ﷺ at home.",
            bn: "দশ বছর এমন সময়, যাতে একজন মানুষকে তার সবচেয়ে খারাপ দিনগুলোতেও দেখা হয়ে যায়। সন্তান হারানোর শোক, খন্দকের বছর, ক্ষুধা, গুজব, বন্ধুদের মৃত্যু — সবটার ভেতরেই আনাস ওই ঘরে ছিলেন। সেসব বছর নিয়ে তিনি যা বলেছেন, তা মুজিজার ফিরিস্তি নয়। বেশিরভাগই ঘরোয়া ছোট ছোট কথা। ঘরের ভেতরের নবীজি ﷺ-এর দৈনন্দিন ছবির যতটা কাছে উম্মত পৌঁছাতে পেরেছে, তা এই বর্ণনাগুলো দিয়েই।",
          },
        ],
      },
      {
        h: { en: "Never Once Uff", bn: "একবারও উফ নয়" },
        p: [
          {
            en: "The narration in Sahih al-Bukhari 6038 and Sahih Muslim 2309 is his own testimony. He served the Messenger of Allah ﷺ for ten years, and the Prophet ﷺ never once said uff to him, never asked of anything he did why did you do that, and never asked of anything he left undone why did you not do that. The word uff is the smallest sound of irritation the language has.",
            bn: "সহিহ বুখারি ৬০৩৮ ও সহিহ মুসলিম ২৩০৯-এর বর্ণনাটা তাঁর নিজের সাক্ষ্য। তিনি দশ বছর রাসূলুল্লাহ ﷺ-এর খেদমত করেছেন, আর নবীজি ﷺ তাঁকে একবারও উফ বলেননি। তাঁর করা কোনো কাজ নিয়ে জিজ্ঞেস করেননি, এটা কেন করলে; আর না-করা কোনো কাজ নিয়েও বলেননি, ওটা কেন করলে না। ভাষায় বিরক্তি বোঝানোর সবচেয়ে ছোট শব্দটাই হলো উফ।",
          },
          {
            en: "Consider who is speaking. A servant is the person best placed to have complaints, and a boy servant over ten years would have broken and forgotten and delayed a great deal. The claim is not that Anas made no mistakes. The claim is about what happened afterwards, every time, for ten years, in a house that no outsider was watching.",
            bn: "কে কথা বলছেন, তা ভাবুন। অভিযোগ করার সুযোগ সবচেয়ে বেশি থাকে খাদেমেরই। আর দশ বছরে একটা বালক-খাদেমের হাতে কত জিনিস ভেঙেছে, কত কাজ ভুলে গেছে, কত দেরি হয়েছে, তার হিসাব নেই। দাবিটা এই নয় যে আনাসের কোনো ভুল হয়নি। দাবিটা এই যে ভুলের পর প্রতিবার কী হয়েছিল — দশ বছর ধরে, এমন এক ঘরে যেখানে বাইরের কেউ দেখছিল না।",
          },
        ],
      },
      {
        h: { en: "The Du'a and What Came of It", bn: "সেই দোয়া আর তার ফল" },
        p: [
          {
            en: "Umm Sulaym asked the Prophet ﷺ to make du'a for her servant boy. Sahih al-Bukhari 6344 and Sahih Muslim 2480 record what he asked for: that Allah increase Anas in wealth and children, and bless him in what He gave. Three requests, made for a boy who owned nothing, by a man who had refused wealth for himself.",
            bn: "উম্মে সুলাইম নবীজি ﷺ-কে অনুরোধ করেন, তাঁর খাদেম ছেলেটির জন্য দোয়া করতে। সহিহ বুখারি ৬৩৪৪ ও সহিহ মুসলিম ২৪৮০-তে আছে তিনি কী চেয়েছিলেন: আল্লাহ যেন আনাসের সম্পদ ও সন্তান বাড়িয়ে দেন, আর যা দেন তাতে বরকত দেন। তিনটি চাওয়া — এমন এক বালকের জন্য যার কিছুই ছিল না, আর চাইলেন এমন একজন যিনি নিজের জন্য সম্পদ নিতে চাননি।",
          },
          {
            en: "Anas lived to report the answer himself. He said his land bore fruit twice in the year when the land of others bore once, and that he had buried more than a hundred of his own descendants. He also lived past ninety, into a time when the men who had prayed behind the Prophet ﷺ were almost all gone. Every clause of the du'a came back to him in his own lifetime.",
            bn: "দোয়ার জবাবটা আনাস নিজেই বলে গেছেন। তিনি বলতেন, অন্যদের জমিতে যখন বছরে একবার ফল ধরত, তাঁর জমিতে ধরত দুবার। আর তিনি নিজের হাতে নিজের একশোরও বেশি বংশধরকে দাফন করেছেন। বয়স তাঁর নব্বই পেরিয়েছিল; ততদিনে নবীজি ﷺ-এর পেছনে নামাজ পড়া মানুষগুলো প্রায় সবাই চলে গেছেন। দোয়ার প্রতিটি কথাই তাঁর জীবদ্দশাতেই ফিরে এসেছিল।",
          },
        ],
      },
      {
        h: { en: "The Man He Described", bn: "যাঁকে তিনি বর্ণনা করেছেন" },
        p: [
          {
            en: "Because he was in the house, the physical description of the Prophet ﷺ that the ummah carries comes largely through him. Sahih al-Bukhari 3547 preserves his account: neither excessively tall nor short, neither stark white nor deep brown, his hair neither tightly curled nor altogether straight. It is the report of somebody who had looked at a face every day for a decade and was asked, long afterwards, to say what it was like.",
            bn: "তিনি ঘরের ভেতরেই থাকতেন বলে নবীজি ﷺ-এর চেহারার যে বর্ণনা উম্মতের কাছে আছে, তার বেশিরভাগই তাঁর সূত্রে। সহিহ বুখারি ৩৫৪৭-এ তাঁর বলা কথাটা রাখা আছে: তিনি খুব লম্বাও ছিলেন না, বেঁটেও নন; একেবারে ধবধবে সাদাও নন, গাঢ় বাদামিও নন; চুল খুব কোঁকড়াও ছিল না, একেবারে সোজাও নয়। এ সেই মানুষের বর্ণনা, যিনি দশ বছর ধরে রোজ একটা মুখ দেখেছেন, আর অনেক পরে তাঁকে জিজ্ঞেস করা হয়েছে, মুখটা কেমন ছিল।",
          },
          {
            en: "Bukhari 3561 carries a sentence of a different kind. Anas said he never touched silk or brocade softer than the palm of the Prophet ﷺ, and never smelled a fragrance more pleasant than his scent. The man saying it had spent his working life holding that hand, fetching, carrying, being sent on errands. He was not describing a stranger from a distance.",
            bn: "বুখারি ৩৫৬১-এ অন্য ধরনের একটা কথা আছে। আনাস বলেছেন, নবীজি ﷺ-এর হাতের তালুর চেয়ে নরম রেশম বা পশমি কাপড় তিনি কখনো ছোঁননি, আর তাঁর শরীরের ঘ্রাণের চেয়ে সুন্দর ঘ্রাণ কখনো পাননি। যিনি কথাটা বলছেন, তাঁর কাজের জীবনটাই কেটেছে ওই হাত ধরে — এটা আনতে, ওটা নিতে, ফরমাশ খাটতে। তিনি দূর থেকে দেখা কোনো অচেনা মানুষের বর্ণনা দিচ্ছিলেন না।",
          },
        ],
      },
      {
        h: { en: "Abu Umayr and the Bird", bn: "আবু উমাইর আর সেই পাখি" },
        p: [
          {
            en: "Anas had a small brother called Abu Umayr who kept a nughayr, a little bird, and the bird died. Sahih al-Bukhari 6129 and Sahih Muslim 2150 record that the Prophet ﷺ used to see the child and ask him, O Abu Umayr, what happened to the nughayr. He teased a grieving boy about a dead sparrow, by name, more than once.",
            bn: "আনাসের ছোট এক ভাই ছিল, নাম আবু উমাইর। তার একটা ছোট্ট পাখি ছিল, নুগাইর; পাখিটা মরে যায়। সহিহ বুখারি ৬১২৯ ও সহিহ মুসলিম ২১৫০-এ আছে, নবীজি ﷺ ছেলেটিকে দেখলেই জিজ্ঞেস করতেন, হে আবু উমাইর, নুগাইরটার কী হলো? শোকে ডুবে থাকা এক শিশুকে তিনি তার মরা পাখিটা নিয়ে ঠাট্টা করতেন, নাম ধরে ডেকে, একবার নয়, বারবার।",
          },
          {
            en: "The scholars who wrote on manners returned to this narration again and again, because of how much it settles at once: that a prophet had time for a child, that a child's grief is real grief, that gentle humour is not beneath the highest station. Anas is the one who preserved it. He noticed what a boy in that house was in the best position to notice.",
            bn: "আদব-আখলাক নিয়ে যাঁরা লিখেছেন, তাঁরা বারবার এই বর্ণনায় ফিরে এসেছেন। কারণ এতটুকু ঘটনায় একসঙ্গে অনেক কিছু মিটে যায়: একজন নবীর হাতে শিশুর জন্য সময় ছিল, শিশুর শোকও সত্যিকারের শোক, আর কোমল রসিকতা সর্বোচ্চ মর্যাদার সঙ্গে বেমানান নয়। কথাটা ধরে রেখেছেন আনাসই। ওই ঘরের একটা বালক যা সবচেয়ে ভালো খেয়াল করতে পারত, তিনি তা-ই খেয়াল করেছেন।",
          },
        ],
      },
      {
        h: { en: "What He Carried to Basra", bn: "বসরায় তিনি যা নিয়ে গেলেন" },
        p: [
          {
            en: "After the conquests he settled in Basra, then a new garrison town filling with people who had never seen Madinah. He became the reason that city had a link to the Prophet ﷺ at all. Students came to him for sixty years, and the count of narrations traced to him runs into the thousands, placing him among the most prolific narrators of hadith in the ummah.",
            bn: "বিজয়ের পর তিনি বসরায় বসতি গড়েন। তখন সেটি নতুন এক সেনানগর, ভরে উঠছে এমন মানুষে যারা মদিনা কখনো চোখেই দেখেনি। ওই শহরের সঙ্গে নবীজি ﷺ-এর যোগসূত্র বলতে যা কিছু, তা তাঁর কারণেই। ষাট বছর ধরে ছাত্ররা তাঁর কাছে এসেছে। তাঁর সূত্রে বর্ণিত হাদিসের সংখ্যা হাজারে গিয়ে ঠেকে, যা তাঁকে উম্মতের সবচেয়ে বেশি বর্ণনাকারীদের কাতারে বসিয়ে দেয়।",
          },
          {
            en: "He was among the last Companions to die, and he knew it. He is reported to have kept a hair of the Prophet ﷺ and to have asked that it be buried with him. A man who had been handed over as a boy because his mother had nothing else to give spent the remaining eighty years handing the same thing on.",
            bn: "সবার শেষে যাঁরা ইন্তেকাল করেন, তিনি তাঁদের একজন, আর কথাটা তিনি জানতেন। বর্ণিত আছে, নবীজি ﷺ-এর একটি চুল তিনি যত্ন করে রেখে দিয়েছিলেন আর অসিয়ত করেছিলেন যেন তা তাঁর সঙ্গেই দাফন করা হয়। মায়ের দেওয়ার মতো আর কিছু ছিল না বলে যে বালকটিকে তুলে দেওয়া হয়েছিল, বাকি আশি বছর ধরে তিনি সেই একই জিনিস অন্যের হাতে তুলে দিয়ে গেছেন।",
          },
        ],
      },
    ],
  },
  abu_ayyub_al_ansari: {
    sections: [
      {
        h: { en: "Where the Camel Knelt", bn: "উট যেখানে বসল" },
        p: [
          {
            en: "His name was Khalid ibn Zayd, of Banu Najjar of the Khazraj, and he had given his pledge at the second meeting of al-Aqabah before the Prophet ﷺ ever set foot in Madinah. When the Prophet ﷺ finally rode into the city, every clan wanted him to stay with them, and each took hold of his camel. He told them to leave her, for she was under orders. She walked on and knelt in an open yard, and the nearest door was Abu Ayyub's.",
            bn: "তাঁর নাম খালিদ ইবনে যায়েদ, খাযরাজের বনু নাজ্জার শাখার লোক। নবীজি ﷺ মদিনায় পা রাখার আগেই আকাবার দ্বিতীয় বৈঠকে তিনি বাইআত দিয়েছিলেন। নবীজি ﷺ যখন শেষ পর্যন্ত শহরে ঢুকলেন, প্রতিটি গোত্র চাইল তিনি তাদের ঘরেই উঠুন; সবাই উটের রশি ধরল। তিনি বললেন, ওকে ছেড়ে দাও, ও আদেশপ্রাপ্ত। উটটি হেঁটে গিয়ে খোলা এক আঙিনায় বসে পড়ল। সবচেয়ে কাছের দরজাটা ছিল আবু আইয়ুবের।",
          },
          {
            en: "He carried the baggage inside before anyone could argue. The Prophet ﷺ stayed in that house for months while the mosque and the living quarters were built. The sirah writers record that Abu Ayyub had given the upper floor to his guest and taken the lower for himself, then could not bear the thought of walking above the Messenger of Allah ﷺ and begged him to change places.",
            bn: "কেউ কিছু বলার আগেই তিনি মালপত্র ঘরে তুলে নিলেন। মসজিদ আর বসতঘর তৈরি হওয়া পর্যন্ত নবীজি ﷺ কয়েক মাস ওই বাড়িতেই ছিলেন। সিরাতের লেখকেরা লিখেছেন, আবু আইয়ুব মেহমানকে উপরতলা ছেড়ে দিয়ে নিজে নিচতলায় নেমেছিলেন। পরে রাসূলুল্লাহ ﷺ-এর মাথার উপর দিয়ে হাঁটার কথা ভেবে তিনি স্থির থাকতে পারলেন না, আর অনুরোধ করলেন জায়গা বদল করতে।",
          },
        ],
      },
      {
        h: { en: "Where the Fingers Had Been", bn: "আঙুল যেখানে পড়েছিল" },
        p: [
          {
            en: "Sahih Muslim 2053 preserves what that household was like. Abu Ayyub would send up food, and when the dish came back he would look for the place where the Prophet's ﷺ fingers had rested and eat from exactly there. One evening a dish went up with garlic in it and came back untouched. He asked whether it was forbidden. He was told no, but that the Prophet ﷺ disliked it.",
            bn: "সহিহ মুসলিম ২০৫৩-এ ওই সংসারের ছবিটা ধরা আছে। আবু আইয়ুব উপরে খাবার পাঠাতেন, আর থালা ফিরে এলে খুঁজতেন নবীজি ﷺ-এর আঙুল কোথায় পড়েছিল, তারপর ঠিক ওই জায়গা থেকেই খেতেন। এক সন্ধ্যায় রসুন দেওয়া একটা তরকারি উপরে গেল আর অস্পৃষ্ট অবস্থায় ফিরে এল। তিনি জিজ্ঞেস করলেন, এটা কি হারাম? তাঁকে বলা হলো, না, তবে নবীজি ﷺ এটি অপছন্দ করেন।",
          },
          {
            en: "Abu Ayyub said in that case he disliked it too. The Prophet ﷺ told him to eat it, since he himself was not as they were: he was in converse with one they did not converse with. It is a small exchange about an onion, and it is why we know that the Prophet's ﷺ abstention here was about the company of the angel and not a ruling laid on the ummah.",
            bn: "আবু আইয়ুব বললেন, তাহলে আমিও অপছন্দ করি। নবীজি ﷺ তাঁকে খেতে বললেন, কারণ তিনি নিজে তাঁদের মতো নন — তাঁকে এমন একজনের সঙ্গে কথা বলতে হয়, যাঁর সঙ্গে তাঁদের কথা বলতে হয় না। পেঁয়াজ-রসুন নিয়ে ছোট্ট এই কথাবার্তাটুকুর কারণেই আমরা জানি, নবীজি ﷺ-এর ওই বিরত থাকা ছিল ফেরেশতার সাহচর্যের কারণে, উম্মতের ওপর চাপানো কোনো বিধান নয়।",
          },
        ],
      },
      {
        h: { en: "He Knew What the Verse Meant", bn: "আয়াতটার মানে তিনি জানতেন" },
        p: [
          {
            en: "Years later, on a campaign in Byzantine territory, a Muslim charged alone deep into the enemy ranks. Men watching called out that he had thrown himself into destruction, quoting 2:195. Abu Ayyub stopped them. Sunan Abi Dawud 2512 and Jami at-Tirmidhi 2972 record his answer: that verse was revealed about us, the company of the Ansar, and we know best what it means.",
            bn: "বহু বছর পরে বাইজেন্টাইন এলাকায় এক অভিযানে এক মুসলিম একা শত্রুর কাতারের ভেতরে ঢুকে পড়েন। যাঁরা দেখছিলেন, তাঁরা ২:১৯৫ উদ্ধৃত করে বলে উঠলেন, সে নিজেকে ধ্বংসে ফেলে দিল। আবু আইয়ুব তাঁদের থামালেন। সুনানে আবু দাউদ ২৫১২ ও জামে তিরমিজি ২৯৭২-এ তাঁর জবাব আছে: আয়াতটা আমাদের ব্যাপারেই নাজিল হয়েছিল, আমরা আনসারদের দল; এর মানে আমরাই সবচেয়ে ভালো জানি।",
          },
          {
            en: "He explained it. When Allah gave Islam strength and its helpers grew many, we said quietly among ourselves that our properties had gone to ruin and it was time to stay home and repair them. Then the verse came down. The destruction it warned against was sitting with our wealth and leaving the fighting, not charging the enemy. He had been there when it was revealed and he corrected the reading on the spot.",
            bn: "তারপর তিনি খুলে বললেন। আল্লাহ যখন ইসলামকে শক্তি দিলেন আর সাহায্যকারীর সংখ্যা বেড়ে গেল, আমরা নিজেদের মধ্যে চুপিচুপি বলাবলি করলাম, আমাদের সম্পত্তি তো নষ্ট হয়ে যাচ্ছে; এবার ঘরে বসে ওগুলো ঠিক করা দরকার। তখনই আয়াতটা নাজিল হলো। যে ধ্বংসের কথা সেখানে বলা হয়েছে, তা হলো সম্পদ আঁকড়ে বসে থেকে জিহাদ ছেড়ে দেওয়া, শত্রুর ওপর ঝাঁপিয়ে পড়া নয়। নাজিলের সময় তিনি সেখানেই ছিলেন, আর ভুল ব্যাখ্যাটা সঙ্গে সঙ্গেই শুধরে দিলেন।",
          },
        ],
      },
      {
        h: { en: "What He Passed On", bn: "তিনি যা পৌঁছে দিলেন" },
        p: [
          {
            en: "A man once asked the Prophet ﷺ for a deed that would take him to Paradise, and Abu Ayyub was there to hear the answer. Sahih al-Bukhari 1396 and Sahih Muslim 13 record it through him: worship Allah and associate nothing with Him, establish the prayer, give the zakah, and keep the ties of kinship. Four things, given to a man who had asked for a short road.",
            bn: "একবার এক ব্যক্তি নবীজি ﷺ-এর কাছে এমন একটি আমল জানতে চাইলেন যা তাঁকে জান্নাতে নিয়ে যাবে। আবু আইয়ুব সেখানেই ছিলেন, জবাবটা শুনেছেন। সহিহ বুখারি ১৩৯৬ ও সহিহ মুসলিম ১৩-এ কথাটা তাঁরই সূত্রে এসেছে: আল্লাহর ইবাদত করো, তাঁর সঙ্গে কিছু শরিক কোরো না, নামাজ কায়েম করো, যাকাত দাও, আর আত্মীয়তার বন্ধন রক্ষা করো। ছোট রাস্তা চেয়েছিলেন যিনি, তাঁকে দেওয়া হলো চারটি কাজ।",
          },
          {
            en: "Another narration of his shaped how Muslims quarrel. Sahih al-Bukhari 6077 and Sahih Muslim 2560 carry it: it is not lawful for a Muslim to cut off his brother for more than three nights, so that they meet and this one turns away and that one turns away, and the better of the two is the one who gives the greeting first.",
            bn: "তাঁর আরেকটি বর্ণনা মুসলিমদের ঝগড়ার ধরনই বদলে দিয়েছে। সহিহ বুখারি ৬০৭৭ ও সহিহ মুসলিম ২৫৬০-এ তা আছে: কোনো মুসলিমের জন্য তিন রাতের বেশি নিজের ভাইয়ের সঙ্গে কথা বন্ধ রাখা বৈধ নয়; তারা মুখোমুখি হয়, একজন এদিকে মুখ ফেরায়, আরেকজন ওদিকে। তাদের মধ্যে উত্তম সে-ই, যে আগে সালাম দেয়।",
          },
        ],
      },
      {
        h: { en: "An Old Man on a Ship", bn: "জাহাজে এক বৃদ্ধ" },
        p: [
          {
            en: "He had fought at Badr, at Uhud, at the Trench and in the campaigns after them, and he was a very old man when a Muslim army sailed against Constantinople. He went with it. The historians record that his health broke during the siege and that he asked to be carried as far forward into enemy ground as the army could reach, and buried there.",
            bn: "তিনি লড়েছিলেন বদরে, উহুদে, খন্দকে আর তার পরের অভিযানগুলোতে। কনস্টান্টিনোপলের দিকে যখন মুসলিম বাহিনী জাহাজে রওনা দিল, তিনি তখন খুবই বৃদ্ধ। তিনি সঙ্গে গেলেন। ঐতিহাসিকেরা লিখেছেন, অবরোধের সময় তাঁর শরীর ভেঙে পড়ে। তিনি অনুরোধ করেন, বাহিনী শত্রুর ভূখণ্ডে যতদূর পৌঁছাতে পারে ততদূর তাঁকে বয়ে নিয়ে গিয়ে সেখানেই দাফন করা হোক।",
          },
          {
            en: "They buried him by the walls of the city. A man who had opened his door to a stranger in Madinah closed his life at the far edge of the Muslim advance, having asked for no comfort and no return. The house he gave away for seven months is the reason his name is known; the grave he chose is the reason it stayed known.",
            bn: "তাঁকে নগরপ্রাচীরের পাশেই দাফন করা হলো। মদিনায় যে মানুষটি এক আগন্তুকের জন্য নিজের দরজা খুলে দিয়েছিলেন, তিনি জীবন শেষ করলেন মুসলিম অগ্রযাত্রার একেবারে শেষ প্রান্তে, কোনো আরাম বা প্রতিদান না চেয়ে। সাত মাসের জন্য ছেড়ে দেওয়া সেই ঘরটার কারণেই তাঁর নাম মানুষ জানে; আর নিজের বেছে নেওয়া কবরটার কারণেই নামটা আজও টিকে আছে।",
          },
        ],
      },
    ],
  },

  sad_ibn_muadh: {
    sections: [
      {
        h: { en: "A Chief Who Came Angry", bn: "রাগ নিয়ে আসা এক সর্দার" },
        p: [
          {
            en: "Sa'd ibn Mu'adh (RA) was chief of Banu Abd al-Ashhal, a clan of the Aws, and he was in his thirties when Mus'ab ibn Umayr (RA) came to Madinah to teach the few who had accepted Islam. Sa'd went out to stop him, carrying a spear and using hard words. Mus'ab answered quietly: sit and listen, and if you are pleased with it take it, and if you dislike it we will keep it away from you.",
            bn: "সাদ ইবনে মুআয (রাঃ) ছিলেন আওসের বনু আবদুল আশহাল শাখার সর্দার। মুসআব ইবনে উমাইর (রাঃ) যখন মদিনায় এসে অল্প কজন নওমুসলিমকে শিক্ষা দিচ্ছিলেন, সাদের বয়স তখন ত্রিশের ঘরে। তাঁকে থামাতে সাদ বর্শা হাতে বেরিয়ে এলেন, মুখে কড়া কথা। মুসআব শান্তভাবে বললেন, বসুন, শুনুন; পছন্দ হলে গ্রহণ করবেন, আর অপছন্দ হলে আমরা এটি আপনার কাছ থেকে দূরে সরিয়ে রাখব।",
          },
          {
            en: "He sat, and he listened, and he accepted. Then he went back to his people and did the thing only a chief could do. Ibn Hisham records that he told them their speech was forbidden to him until they believed in Allah and His Messenger. By the evening there was not a man or woman of Banu Abd al-Ashhal who had not entered Islam.",
            bn: "তিনি বসলেন, শুনলেন, আর গ্রহণ করলেন। তারপর নিজের লোকদের কাছে ফিরে গিয়ে এমন কাজ করলেন যা কেবল একজন সর্দারই পারেন। ইবনে হিশাম লিখেছেন, তিনি তাঁদের বললেন, আল্লাহ ও তাঁর রাসূলের ওপর ঈমান না আনা পর্যন্ত তোমাদের সঙ্গে কথা বলা আমার জন্য হারাম। সন্ধ্যার মধ্যেই বনু আবদুল আশহালের এমন কোনো নারী বা পুরুষ রইল না, যে ইসলামে প্রবেশ করেনি।",
          },
        ],
      },
      {
        h: { en: "Answering for the Ansar", bn: "আনসারদের হয়ে জবাব" },
        p: [
          {
            en: "At Badr the Prophet ﷺ asked the people for their view. He had asked twice and the Muhajirun had answered twice, and he asked again. Ibn Ishaq records that Sa'd understood who was meant: the Ansar had pledged to defend him in Madinah, not to march out to war, and the Prophet ﷺ was asking whether that pledge stretched.",
            bn: "বদরে নবীজি ﷺ লোকদের কাছে তাঁদের মত জানতে চাইলেন। দুবার জিজ্ঞেস করেছেন, দুবারই মুহাজিররা জবাব দিয়েছেন; তবু তিনি আবার জিজ্ঞেস করলেন। ইবনে ইসহাক লিখেছেন, সাদ বুঝে ফেললেন কাদের উদ্দেশে বলা হচ্ছে। আনসাররা বাইআত দিয়েছিলেন মদিনায় তাঁকে রক্ষা করার, বাইরে গিয়ে যুদ্ধ করার নয়। নবীজি ﷺ জানতে চাইছিলেন, সেই বাইআত এতদূর পর্যন্ত যায় কি না।",
          },
          {
            en: "Sa'd answered for them. We have believed you, he said, and we have testified that what you brought is the truth, and we have given you our pledge to hear and obey. Go where you wish; we are with you. By the One who sent you with the truth, if you put this sea before us and plunged into it, we would plunge in with you, and not one man of us would stay behind.",
            bn: "সাদ তাঁদের হয়ে জবাব দিলেন। বললেন, আমরা আপনাকে বিশ্বাস করেছি, সাক্ষ্য দিয়েছি যে আপনি যা এনেছেন তা-ই সত্য, আর শোনা ও মানার বাইআত দিয়েছি। আপনি যেদিকে চান যান, আমরা আপনার সঙ্গে আছি। যিনি আপনাকে সত্যসহ পাঠিয়েছেন তাঁর কসম, আপনি যদি এই সমুদ্র সামনে রেখে তাতে ঝাঁপ দেন, আমরাও আপনার সঙ্গে ঝাঁপ দেব; আমাদের একজনও পেছনে থাকবে না।",
          },
          {
            en: "The Prophet ﷺ was gladdened by the speech and the army moved. It is worth seeing what Sa'd actually did there. He was not volunteering himself; he was committing men who had made a narrower pledge, and he did it in public, in their hearing, staking his standing among them on his reading of what they would accept. They did not contradict him.",
            bn: "কথাগুলো শুনে নবীজি ﷺ খুশি হলেন, আর বাহিনী রওনা দিল। সাদ আসলে সেখানে কী করলেন, তা দেখার মতো। তিনি কেবল নিজেকে এগিয়ে দেননি; তিনি এমন মানুষদের নামে কথা দিয়েছেন যাঁরা এর চেয়ে সংকীর্ণ একটা বাইআত করেছিলেন। আর কাজটা করেছেন প্রকাশ্যে, তাঁদেরই সামনে, নিজের মর্যাদা বাজি রেখে — তাঁরা কী মানবেন সে সম্পর্কে তাঁর নিজের বোঝার ওপর ভরসা করে। কেউ তাঁর কথার প্রতিবাদ করেননি।",
          },
        ],
      },
      {
        h: { en: "The Arrow at the Trench", bn: "খন্দকের সেই তির" },
        p: [
          {
            en: "At the Battle of the Trench an arrow opened a vein in his arm. Sahih al-Bukhari 4122 records that the Prophet ﷺ had a tent pitched for him inside the mosque so that he could visit him without going far. Lying in it, Sa'd made a du'a that has been repeated ever since: O Allah, if any of the war with Quraysh remains, keep me alive for it.",
            bn: "খন্দকের যুদ্ধে একটি তির তাঁর হাতের শিরা কেটে দেয়। সহিহ বুখারি ৪১২২-এ আছে, নবীজি ﷺ মসজিদের ভেতরেই তাঁর জন্য একটি তাঁবু খাটাতে বলেন, যাতে দূরে না গিয়েই তাঁকে দেখে আসা যায়। সেখানে শুয়ে সাদ যে দোয়াটি করেছিলেন, তা আজও পড়া হয়: হে আল্লাহ, কুরাইশের সঙ্গে যুদ্ধের কিছু যদি বাকি থাকে, আমাকে তার জন্য বাঁচিয়ে রাখুন।",
          },
          {
            en: "The rest of the du'a is the part that was answered. And if You have ended the war between us and them, then make this a martyrdom, and do not let me die until my eyes are cooled by what becomes of Banu Qurayza. He had not asked to be healed. He had asked to see one thing settled first, and to be taken afterwards.",
            bn: "দোয়ার বাকি অংশটাই কবুল হয়েছিল। আর আপনি যদি আমাদের ও তাদের মধ্যকার যুদ্ধ শেষ করে দিয়ে থাকেন, তবে একে শাহাদাত বানিয়ে দিন; আর বনু কুরাইজার পরিণতি দেখে চোখ জুড়ানোর আগে আমাকে মৃত্যু দেবেন না। তিনি সুস্থতা চাননি। চেয়েছিলেন একটা বিষয়ের মীমাংসা আগে দেখে যেতে, তারপর তাঁকে তুলে নেওয়া হোক।",
          },
        ],
      },
      {
        h: { en: "Rise for Your Chief", bn: "তোমাদের সর্দারের জন্য উঠে দাঁড়াও" },
        p: [
          {
            en: "When Banu Qurayza came down from their forts after the siege, they asked that Sa'd judge between them, and the Prophet ﷺ agreed. Sahih al-Bukhari 3043 and Sahih Muslim 1768 record that as the wounded man was brought in on a donkey the Prophet ﷺ said to the Ansar, rise for your chief. Sa'd gave his judgement, and it went against them.",
            bn: "অবরোধের পর বনু কুরাইজা তাদের দুর্গ থেকে নেমে এসে চাইল, সাদই তাদের ব্যাপারে ফয়সালা দিন; নবীজি ﷺ রাজি হলেন। সহিহ বুখারি ৩০৪৩ ও সহিহ মুসলিম ১৭৬৮-এ আছে, আহত মানুষটিকে গাধার পিঠে করে আনা হলে নবীজি ﷺ আনসারদের বললেন, তোমাদের সর্দারের জন্য উঠে দাঁড়াও। সাদ ফয়সালা দিলেন, আর তা গেল তাদেরই বিপক্ষে।",
          },
          {
            en: "The Prophet ﷺ told him he had judged by the ruling of Allah. It is worth being plain about what this means and does not mean. Sa'd was not asked for mercy or for revenge; he was asked to rule, by the law of a treaty that had been broken during a siege, and the ruling he gave was accepted as correct by the one man in Madinah entitled to say so.",
            bn: "নবীজি ﷺ তাঁকে বললেন, তুমি আল্লাহর হুকুম অনুযায়ীই ফয়সালা করেছ। এর মানে কী আর কী নয়, তা পরিষ্কার করে বলা দরকার। সাদের কাছে দয়া বা প্রতিশোধ চাওয়া হয়নি; চাওয়া হয়েছিল বিচার — অবরোধের মধ্যে ভেঙে ফেলা এক চুক্তির আইনে। আর সেই ফয়সালাকে সঠিক বলে মেনে নিয়েছিলেন মদিনার সেই একজন, যাঁর তা বলার অধিকার ছিল।",
          },
        ],
      },
      {
        h: { en: "The Throne Shook", bn: "আরশ কেঁপে উঠল" },
        p: [
          {
            en: "His wound reopened after the judgement and he died of it. Sahih al-Bukhari 3803 and Sahih Muslim 2468 record the words of the Prophet ﷺ: the Throne of the Most Merciful shook at the death of Sa'd ibn Mu'adh. Bukhari 3249 preserves another, said of a piece of silk that the Companions were admiring — the handkerchiefs of Sa'd in Paradise are better than this.",
            bn: "ফয়সালার পর তাঁর ক্ষত আবার খুলে যায়, আর তাতেই তিনি ইন্তেকাল করেন। সহিহ বুখারি ৩৮০৩ ও সহিহ মুসলিম ২৪৬৮-এ নবীজি ﷺ-এর কথাটা আছে: সাদ ইবনে মুআযের মৃত্যুতে রহমানের আরশ কেঁপে উঠেছে। বুখারি ৩২৪৯-এ আরেকটি কথা আছে, সাহাবিরা একটি রেশমি কাপড়ের প্রশংসা করছিলেন, তখন তিনি বলেন, জান্নাতে সাদের রুমাল এর চেয়ে উত্তম।",
          },
          {
            en: "He had been a Muslim for about six years. In that time he brought an entire clan into Islam, spoke for the Ansar at the decision that made Badr possible, took an arrow at the Trench, judged the case that ended the siege, and died of the wound. Very few lives are that short and that complete.",
            bn: "মুসলিম হিসেবে তিনি বেঁচেছিলেন প্রায় ছয় বছর। এই সময়ের মধ্যে তিনি গোটা একটা গোত্রকে ইসলামে এনেছেন, বদর সম্ভব করে তোলা সেই সিদ্ধান্তে আনসারদের হয়ে কথা বলেছেন, খন্দকে তির খেয়েছেন, অবরোধ শেষ করে দেওয়া মামলার ফয়সালা দিয়েছেন, আর সেই ক্ষততেই ইন্তেকাল করেছেন। এত ছোট আর এত পূর্ণ জীবন খুব কমই মেলে।",
          },
        ],
      },
    ],
  },

  hudhayfah_ibn_al_yaman: {
    sections: [
      {
        h: { en: "Sent Home from Badr", bn: "বদর থেকে ফিরিয়ে দেওয়া" },
        p: [
          {
            en: "Hudhayfah (RA) and his father al-Yaman were on their way to join the Prophet ﷺ before Badr when Quraysh seized them and made them promise not to fight. They came and told him what they had promised. Sahih Muslim 1787 records his answer: go back, we will keep our promise to them and seek Allah's help against them. Two more men would have mattered at Badr, and he sent them away rather than break a word.",
            bn: "বদরের আগে হুযাইফা (রাঃ) ও তাঁর বাবা আল-ইয়ামান নবীজি ﷺ-এর সঙ্গে যোগ দিতে যাচ্ছিলেন, পথে কুরাইশ তাঁদের ধরে ফেলে আর যুদ্ধ না করার অঙ্গীকার নেয়। তাঁরা এসে নবীজি ﷺ-কে অঙ্গীকারের কথা জানালেন। সহিহ মুসলিম ১৭৮৭-এ তাঁর জবাব আছে: তোমরা ফিরে যাও; আমরা তাদের দেওয়া কথা রাখব আর তাদের বিরুদ্ধে আল্লাহর সাহায্য চাইব। বদরে বাড়তি দুজন মানুষের দাম ছিল অনেক, তবু কথা ভাঙার চেয়ে তিনি তাঁদের ফিরিয়ে দিলেন।",
          },
          {
            en: "At Uhud his father was killed in the confusion by Muslims who did not recognise him. Sahih al-Bukhari 3290 records that Hudhayfah called out to them, but they had already struck. He said, may Allah forgive you, and gave the blood money that was due to him away in charity. He was a young man, and he had just lost his father to his own side, and that was his response.",
            bn: "উহুদে বিশৃঙ্খলার মধ্যে তাঁর বাবাকে মুসলিমরাই চিনতে না পেরে হত্যা করে ফেলেন। সহিহ বুখারি ৩২৯০-এ আছে, হুযাইফা চেঁচিয়ে তাঁদের থামাতে চেয়েছিলেন, কিন্তু ততক্ষণে আঘাত হয়ে গেছে। তিনি বললেন, আল্লাহ আপনাদের মাফ করুন। আর তাঁর প্রাপ্য রক্তমূল্য তিনি দান করে দিলেন। বয়সে তরুণ, সদ্য নিজেদের লোকের হাতেই বাবাকে হারিয়েছেন — এই ছিল তাঁর প্রতিক্রিয়া।",
          },
        ],
      },
      {
        h: { en: "The Night of the Trench", bn: "খন্দকের সেই রাত" },
        p: [
          {
            en: "On the worst night of the siege of Madinah, with a freezing wind tearing the confederate camp apart, the Prophet ﷺ asked who would go and bring back news of the enemy. Sahih Muslim 1788 records that he asked three times and nobody moved, because of the cold and the hunger and the fear. On the third asking he named Hudhayfah, and Hudhayfah could not refuse a man who had named him.",
            bn: "মদিনা অবরোধের সবচেয়ে কঠিন রাতে, যখন বরফের মতো ঠান্ডা বাতাস মিত্রবাহিনীর শিবির ছিঁড়েখুঁড়ে দিচ্ছে, নবীজি ﷺ জানতে চাইলেন কে গিয়ে শত্রুর খবর নিয়ে আসবে। সহিহ মুসলিম ১৭৮৮-এ আছে, তিনি তিনবার জিজ্ঞেস করলেন, কেউ নড়ল না — ঠান্ডা, ক্ষুধা আর ভয়ে। তৃতীয়বারে তিনি হুযাইফার নাম ধরে ডাকলেন। নাম ধরে ডাকলে তো আর না বলা যায় না।",
          },
          {
            en: "He crossed to the enemy camp and sat down among them in the dark, unrecognised. Abu Sufyan was warming himself at a fire and Hudhayfah could have put an arrow in him. He did not, because the instruction had been to bring news and not to stir anything up. He came back and reported that the wind had broken them and they were leaving. He had obeyed the limit he was given.",
            bn: "তিনি শত্রুশিবিরে পৌঁছে অন্ধকারে তাদের মাঝেই বসে পড়লেন, কেউ চিনল না। আবু সুফিয়ান আগুন পোহাচ্ছিলেন; হুযাইফা চাইলে তাঁকে তির মারতে পারতেন। তিনি মারলেন না, কারণ নির্দেশ ছিল কেবল খবর আনার, কিছু বাধিয়ে না দেওয়ার। ফিরে এসে তিনি জানালেন, ঝড় তাদের ভেঙে দিয়েছে, তারা চলে যাচ্ছে। তাঁকে যে সীমা বেঁধে দেওয়া হয়েছিল, তিনি তা মেনেছিলেন।",
          },
        ],
      },
      {
        h: { en: "Keeper of the Secret", bn: "গোপন কথার রক্ষক" },
        p: [
          {
            en: "The Prophet ﷺ told him the names of the hypocrites of Madinah, and he told no one. The title he carries in the books, keeper of the secret of the Messenger of Allah ﷺ, is about a burden rather than a privilege: he lived among people knowing what he knew about some of them, and he prayed behind them and traded with them and said nothing.",
            bn: "নবীজি ﷺ তাঁকে মদিনার মুনাফিকদের নাম বলে দিয়েছিলেন, আর তিনি তা কাউকে বলেননি। কিতাবগুলোতে তাঁর উপাধি রাসূলুল্লাহ ﷺ-এর গোপন কথার রক্ষক। ওটা সুবিধার নয়, ভারের। তিনি মানুষের মধ্যেই থাকতেন, তাদের কারও কারও সম্পর্কে যা জানতেন তা জেনেই; তাদের পেছনে নামাজ পড়তেন, তাদের সঙ্গে কেনাবেচা করতেন, আর মুখ খুলতেন না।",
          },
          {
            en: "The biographers record that Umar (RA) used to watch him at funerals, and if Hudhayfah did not attend a man's janazah, Umar would stay away too. A caliph who had every means of investigation available to him chose instead to read one man's silence. That is a measure of how completely the secret was kept.",
            bn: "জীবনীকারেরা লিখেছেন, উমর (রাঃ) জানাজায় তাঁর দিকে নজর রাখতেন। হুযাইফা যদি কারও জানাজায় না দাঁড়াতেন, উমরও সরে যেতেন। তদন্তের সব উপায় হাতে থাকা এক খলিফা বেছে নিয়েছিলেন একজন মানুষের নীরবতা পড়ে নেওয়াকে। গোপন কথাটা কতটা পুরোপুরি রক্ষিত ছিল, এতেই তা বোঝা যায়।",
          },
        ],
      },
      {
        h: { en: "Asking About Evil", bn: "অনিষ্ট নিয়ে প্রশ্ন" },
        p: [
          {
            en: "Sahih al-Bukhari 3606 and Sahih Muslim 1847 preserve his own explanation of how he studied. People used to ask the Messenger of Allah ﷺ about good, he said, and I used to ask him about evil, for fear that it would reach me. It is a different way of learning the religion, and it produced the clearest early reports the ummah has about discord to come.",
            bn: "সহিহ বুখারি ৩৬০৬ ও সহিহ মুসলিম ১৮৪৭-এ তিনি নিজেই বলেছেন কীভাবে শিখতেন। তিনি বলেন, মানুষ রাসূলুল্লাহ ﷺ-কে কল্যাণ নিয়ে জিজ্ঞেস করত, আর আমি জিজ্ঞেস করতাম অনিষ্ট নিয়ে, এই ভয়ে যে তা আমাকে পেয়ে বসতে পারে। দ্বীন শেখার এ এক ভিন্ন পথ। আসন্ন ফিতনা নিয়ে উম্মতের হাতে সবচেয়ে স্পষ্ট প্রাচীন বর্ণনাগুলো এই পথেই এসেছে।",
          },
          {
            en: "He asked what a man should do when there is no united body and no leader to hold to. He was told to keep away from all those factions, even if he had to bite on the root of a tree until death reached him in that state. The answer is bleak and it is practical, and it exists because one Companion kept asking the question everyone else was avoiding.",
            bn: "তিনি জিজ্ঞেস করলেন, যদি কোনো ঐক্যবদ্ধ দল না থাকে আর ধরে রাখার মতো কোনো নেতাও না থাকে, তখন মানুষ কী করবে? তাঁকে বলা হলো, ওই সব দল থেকে দূরে থাকো, যদি গাছের শিকড় কামড়ে ধরে থাকতে হয় তবু — যতক্ষণ না ওই অবস্থাতেই মৃত্যু আসে। জবাবটা কঠিন, আর কাজেরও। এ আছে কেবল এই কারণে যে একজন সাহাবি বারবার সেই প্রশ্নটাই করেছিলেন, যা বাকি সবাই এড়িয়ে যাচ্ছিল।",
          },
        ],
      },
      {
        h: { en: "Mada'in and Nahawand", bn: "মাদায়েন আর নাহাওয়ান্দ" },
        p: [
          {
            en: "In the wars with Persia he served as a commander, and when an-Nu'man ibn Muqarrin (RA) was killed at Nahawand the command passed to him in the middle of the fighting and the battle was carried. Umar (RA) afterwards made him governor of Mada'in, the old Persian capital, a city used to the arrival of satraps. The people came out along the road to see what sort of man Madinah had sent them.",
            bn: "পারস্যের যুদ্ধগুলোতে তিনি সেনাপতির দায়িত্ব পালন করেন। নাহাওয়ান্দে নুমান ইবনে মুকাররিন (রাঃ) শহিদ হলে নেতৃত্ব তাঁর হাতে আসে, আর যুদ্ধটা জয়ের দিকে এগিয়ে যায়। এরপর উমর (রাঃ) তাঁকে পুরনো পারস্য রাজধানী মাদায়েনের গভর্নর নিয়োগ করেন। শহরের লোক বেরিয়ে এল বিশাল কোনো মানুষের আগমনের অপেক্ষায়।",
          },
          {
            en: "He arrived on a donkey, eating bread and salt, with his legs hanging down. There was nothing to look at. He died in the year after Uthman (RA) was killed, at the opening of the discord he had spent his life asking about, and the reports say he was relieved to be taken before he had to live through much of it.",
            bn: "তিনি এলেন গাধার পিঠে চড়ে, পা দুলিয়ে, হাতে রুটি আর লবণ। দেখার মতো কিছুই ছিল না। উসমান (রাঃ) নিহত হওয়ার পরের বছরেই তিনি ইন্তেকাল করেন — ঠিক সেই ফিতনার মুখে, সারা জীবন যা নিয়ে তিনি প্রশ্ন করে এসেছেন। বর্ণনায় আছে, বেশিটা দেখার আগেই তুলে নেওয়া হয়েছে বলে তিনি স্বস্তি বোধ করেছিলেন।",
          },
          {
            en: "Put the pieces together and one shape appears. He was turned back from a battle for the sake of a promise, forgave the men who killed his father, went out alone into an enemy camp and came back without firing, carried names he never spoke, and governed a conquered capital on a donkey. Every one of those is a case of holding something he had the power to spend.",
            bn: "টুকরোগুলো পাশাপাশি রাখলে একটাই আকৃতি ফুটে ওঠে। একটা কথা রাখার জন্য তিনি যুদ্ধ থেকে ফিরে গেছেন, বাবার হত্যাকারীদের মাফ করে দিয়েছেন, একা শত্রুশিবিরে ঢুকে অস্ত্র না চালিয়েই ফিরে এসেছেন, এমন কিছু নাম বয়ে বেড়িয়েছেন যা কোনোদিন মুখে আনেননি, আর বিজিত এক রাজধানী শাসন করেছেন গাধার পিঠে চড়ে। প্রতিটাই এমন কিছু ধরে রাখার ঘটনা, যা খরচ করে ফেলার ক্ষমতা তাঁর ছিল।",
          },
        ],
      },
    ],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SAHABA_ARTICLES };
