/**
 * Tadabbur long-form articles — surah 3.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "3:6": {
    "sections": [
      {
        "h": {
          "en": "Known, Then Formed",
          "bn": "আগে জানা, তারপর গড়া"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and it opens on who Allah is before it turns to any argument. 3:2 names Him the Ever-Living, the Self-Sustaining; 3:3 and 3:4 say He sent down the Book confirming what came before it, as He had sent the Torah and the Gospel. 3:5 then says that nothing in the earth or in the heaven is hidden from Allah, and our verse follows directly: it is He who forms you in the wombs however He wills. After it, 3:7 returns to the Book, with its precise and its unspecific verses.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা। কোনো বিতর্কে যাওয়ার আগে সূরাটি শুরু হয় আল্লাহ কে, সেই পরিচয় দিয়ে। ৩:২ আয়াত তাঁকে বলে চিরঞ্জীব, সবকিছুর ধারক। ৩:৩ ও ৩:৪ আয়াত বলে, তিনি আগের কিতাবের সত্যায়নকারী হিসেবে এই কিতাব নাজিল করেছেন, যেমন আগে নাজিল করেছিলেন তাওরাত ও ইঞ্জিল। এরপর ৩:৫ আয়াত বলে, যমীনে বা আসমানে কোনো কিছুই আল্লাহর কাছে গোপন নয়। আর ঠিক তার পরেই আমাদের আয়াত: তিনিই গর্ভে তোমাদের আকৃতি দেন যেভাবে ইচ্ছা করেন। এর পরে ৩:৭ আয়াত আবার কিতাবের কথায় ফেরে, তার সুস্পষ্ট আর অস্পষ্ট আয়াতগুলোর কথায়।"
          },
          {
            "en": "Ibn Ishaq relates that the opening of this surah, a little over eighty verses, came down concerning the Christian delegation from Najran, who came to Madinah and argued with the Prophet ﷺ about Isa (AS). The commentators who follow that report hear in 3:5 and 3:6 a pointed pair of statements, and their reading is taken up below. Even without the occasion, the order of the two verses teaches something: first the knowledge from which nothing is hidden, then the forming of each human being in the one place no human eye could reach.",
            "bn": "ইবনে ইসহাক বর্ণনা করেন, এই সূরার শুরুর আশির কিছু বেশি আয়াত নাজিল হয়েছিল নাজরানের খ্রিস্টান প্রতিনিধিদলকে কেন্দ্র করে। তারা মদিনায় এসে ঈসা (আঃ)-কে নিয়ে নবী ﷺ-এর সঙ্গে বিতর্ক করেছিল। যে মুফাসসিরগণ এই বর্ণনা ধরে এগোন, তাঁরা ৩:৫ ও ৩:৬ আয়াতে দুটি তীক্ষ্ণ ঘোষণা শোনেন। তাঁদের ব্যাখ্যা নিচে আসছে। শানে নুযুল বাদ দিলেও দুই আয়াতের ক্রম নিজেই কিছু শেখায়। আগে আসে সেই জ্ঞান, যা থেকে কিছুই গোপন নয়। তারপর আসে প্রতিটি মানুষকে এমন এক জায়গায় গড়ার কথা, যেখানে কোনো মানুষের চোখ পৌঁছায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Form, Womb, As He Wills",
          "bn": "আকৃতি, গর্ভ, তাঁর ইচ্ছা"
        },
        "p": [
          {
            "en": "Yusawwirukum is from the root s-w-r, which gives surah in the sense of a form or image. The same root gives al-Musawwir, the Fashioner, in 59:24, the name that comes after the Creator and the Producer. Where a word for creating would say that you were brought into being, this word says that you were given a particular shape. The verb is in the present tense, so the forming is described as something He goes on doing, in every womb and in every generation, not as a single act finished long ago.",
            "bn": "‘ইউসাওয়িরুকুম’ এসেছে স-ও-র মূল থেকে। এই মূল থেকেই ‘সূরাত’, মানে আকৃতি বা চেহারা। একই মূল থেকে এসেছে ‘আল-মুসাওয়ির’, আকৃতিদাতা, ৫৯:২৪ আয়াতে স্রষ্টা আর উদ্ভাবকের পরে যে নামটি আসে। সৃষ্টির শব্দ হলে বোঝাত আপনাকে অস্তিত্বে আনা হয়েছে। এই শব্দ বলছে, আপনাকে একটা নির্দিষ্ট গড়ন দেওয়া হয়েছে। ক্রিয়াটি বর্তমান কালের। তাই আকৃতি দেওয়াকে দেখানো হয়েছে এমন কাজ হিসেবে যা তিনি করেই চলেছেন, প্রতিটি গর্ভে, প্রতিটি প্রজন্মে। বহু আগে একবার সেরে ফেলা কোনো কাজ হিসেবে নয়।"
          },
          {
            "en": "Al-arham is the plural of rahim, the womb, from the root r-h-m, the root of rahmah, mercy. The lexicographers list both under that one root, and an Arabic ear hears the kinship without being told. Then comes kayfa yasha', however He wills. The phrase places the decision about each person's form with the One who wills, not with chance, and not with the parents who wait without any power over what they will be given.",
            "bn": "‘আল-আরহাম’ হলো ‘রাহিম’ শব্দের বহুবচন, যার অর্থ গর্ভ। মূল র-হ-ম, রহমত শব্দেরও মূল এটাই। অভিধানবিদরা দুটো শব্দকে একই মূলের নিচে রাখেন, আর আরবি জানা কান কেউ না বলে দিলেও আত্মীয়তাটা শুনতে পায়। তারপর আসে ‘কাইফা ইয়াশা’, যেভাবে তিনি ইচ্ছা করেন। এই কথাটি প্রত্যেক মানুষের আকৃতির সিদ্ধান্ত রেখে দেয় তাঁর হাতে, যিনি ইচ্ছা করেন। সিদ্ধান্তটা কোনো আকস্মিকতার নয়। অপেক্ষায় থাকা বাবা-মায়েরও নয়, কী পাবেন সে ব্যাপারে যাঁদের কোনো ক্ষমতা নেই।"
          },
          {
            "en": "The verse ends with a sentence that does not describe the womb at all: la ilaha illa huwa al-'Aziz al-Hakim, there is no deity except Him, the Exalted in Might, the Wise. The movement is from an act to a conclusion. Because He alone forms, He alone is to be worshipped. The two closing names can be heard against what was just said: might, to shape without anyone able to prevent it, and wisdom, in the particular shape that each person is given.",
            "bn": "আয়াত শেষ হয় এমন একটি বাক্যে, যা গর্ভের বর্ণনাই দেয় না: ‘লা ইলাহা ইল্লা হুয়াল আযীযুল হাকীম’, তিনি ছাড়া কোনো ইলাহ নেই, তিনি মহাপরাক্রমশালী, প্রজ্ঞাময়। কথা এগোয় একটা কাজ থেকে একটা উপসংহারে। আকৃতি যেহেতু একমাত্র তিনিই দেন, ইবাদতও একমাত্র তাঁরই প্রাপ্য। শেষের দুটি নাম সদ্য বলা কথার পাশে রেখে শোনা যায়। পরাক্রম, কারণ তিনি গড়েন আর কেউ বাধা দিতে পারে না। প্রজ্ঞা, কারণ প্রত্যেককে যে বিশেষ গড়ন দেওয়া হয়, তার ভেতরেই তা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Drew",
          "bn": "মুফাসসিরগণ যা বের করেছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir explains the forming as He wills as male or female, fair or plain, wretched or blessed. He then draws a conclusion about Isa (AS). Allah formed him in the womb and created him as He willed, as He created all people, so how could he be divine, as the Christians hold, when he passed from one stage to another inside a womb? Ibn Kathir sets 39:6 beside the verse, where Allah creates you in the wombs of your mothers, creation after creation, within three darknesses.",
            "bn": "ইবনে কাসীর ‘যেভাবে ইচ্ছা আকৃতি দেন’ কথাটির ব্যাখ্যা করেন এভাবে: ছেলে বা মেয়ে, সুদর্শন বা সাধারণ, হতভাগা বা সৌভাগ্যবান। এরপর তিনি ঈসা (আঃ) সম্পর্কে একটা উপসংহার টানেন। আল্লাহ তাঁকেও গর্ভে আকৃতি দিয়েছেন, নিজের ইচ্ছামতো সৃষ্টি করেছেন, যেমন সব মানুষকে করেছেন। তাহলে গর্ভের ভেতর এক পর্যায় থেকে আরেক পর্যায় পেরিয়ে আসা একজন কীভাবে ইলাহ হতে পারেন, যেমনটা খ্রিস্টানরা বিশ্বাস করে? ইবনে কাসীর আয়াতটির পাশে রাখেন ৩৯:৬ আয়াত, যেখানে আল্লাহ তোমাদের মায়েদের গর্ভে সৃষ্টি করেন, পর্যায়ের পর পর্যায়ে, তিন অন্ধকারের ভেতরে।"
          },
          {
            "en": "At-Tabari brings the same reading from Muhammad ibn Ja'far ibn az-Zubayr, in the line of reports that tie the surah's opening to Najran. Isa (AS) was among those formed in the wombs, the report says, and the delegation did not dispute this, just as the rest of the children of Adam were formed; so how could he be a god, having been in that place? The argument is built on a fact both sides accepted, not on a claim the other side rejected, which is why the verse can state it without further proof.",
            "bn": "আত-তাবারী একই ব্যাখ্যা আনেন মুহাম্মাদ ইবনে জা'ফর ইবনুয যুবাইর থেকে, সেই বর্ণনাধারায় যা সূরার শুরুকে নাজরানের সঙ্গে যুক্ত করে। বর্ণনায় বলা হয়েছে, ঈসা (আঃ)-ও গর্ভে আকৃতি পাওয়াদের একজন ছিলেন, আর প্রতিনিধিদল এ কথা অস্বীকার করত না। আদমসন্তানদের বাকি সবার মতোই তাঁকে গড়া হয়েছিল। তাহলে যিনি সেই অবস্থার ভেতর দিয়ে এসেছেন, তিনি কীভাবে ইলাহ হন? যুক্তিটা দাঁড়িয়ে আছে এমন এক সত্যের ওপর যা দুই পক্ষই মানত। অপর পক্ষ মানে না এমন কোনো দাবির ওপর নয়। এ কারণেই আয়াত আর কোনো প্রমাণ না দিয়ে কথাটা বলে দিতে পারে।"
          },
          {
            "en": "As-Sa'di reads 3:5 and 3:6 together as one statement about knowledge. The knowledge that takes in everything, open and hidden, includes the unborn child in the womb, which no created eye reaches. And He does not only know it; He directs it with the gentlest care and measures it out, forming it complete or lacking, fair or plain, male or female. On this reading the verse is not about power alone. The One who knows the hidden place is the One who works in it.",
            "bn": "আস-সা'দী ৩:৫ ও ৩:৬ আয়াতকে একসঙ্গে পড়েন, জ্ঞান সম্পর্কে একটিই ঘোষণা হিসেবে। যে জ্ঞান প্রকাশ্য-গোপন সবকিছু ঘিরে রাখে, তার মধ্যে গর্ভের ভেতরের অজাত শিশুও আছে, যেখানে কোনো সৃষ্টির চোখ পৌঁছায় না। তিনি শুধু জানেনই না। পরম যত্নে তার দেখভাল করেন, মাপমতো গড়েন, পূর্ণাঙ্গ বা অপূর্ণ, সুদর্শন বা সাধারণ, ছেলে বা মেয়ে করে। এই ব্যাখ্যায় আয়াতটি শুধু ক্ষমতার কথা নয়। যিনি গোপন জায়গাটি জানেন, সেখানে কাজও করেন তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Written Before the First Deed",
          "bn": "প্রথম আমলের আগেই লেখা"
        },
        "p": [
          {
            "en": "The narration most often read beside this verse is the report of Abdullah ibn Mas'ud (RA) in al-Bukhari. In its wording, the Prophet ﷺ said that the creation of each of you is gathered in his mother's belly for forty days, then he is a clot for a like period, then a lump of flesh for a like period. Then Allah sends an angel, who is commanded with four matters and told to write his deeds, his provision, his term, and whether he is wretched or blessed. Then the spirit is breathed into him.",
            "bn": "এই আয়াতের পাশে সবচেয়ে বেশি যে হাদিসটি পড়া হয়, তা বুখারীতে আবদুল্লাহ ইবনে মাসউদ (রাঃ)-এর বর্ণনা। সেই বর্ণনার ভাষায় নবী ﷺ বলেছেন, তোমাদের প্রত্যেকের সৃষ্টি মায়ের পেটে চল্লিশ দিন ধরে জমা হয়। তারপর সমান সময় সে থাকে জমাট রক্তপিণ্ড হয়ে, তারপর সমান সময় মাংসপিণ্ড হয়ে। এরপর আল্লাহ একজন ফেরেশতা পাঠান, তাঁকে চারটি বিষয়ের হুকুম দেওয়া হয়। তাঁকে বলা হয়, লেখো তার আমল, তার রিজিক, তার আয়ু, আর সে হতভাগা হবে না সৌভাগ্যবান। তারপর তার ভেতরে রূহ ফুঁকে দেওয়া হয়।"
          },
          {
            "en": "The hadith adds what the verse leaves unsaid. The forming is not only of a body. Before the child has done anything, its provision and its term are written and its deeds are known. That removes no responsibility, and the same narration goes on to warn that a person may act for a long time in one direction and then what was written overtakes him. What it removes is the illusion that anyone arranged his own beginning, or can be sure of his own end.",
            "bn": "আয়াত যা খুলে বলেনি, হাদিসটি তা যোগ করে। গড়া হচ্ছে শুধু একটা শরীর নয়। শিশুটি কিছু করার আগেই তার রিজিক আর আয়ু লেখা হয়ে যায়, তার আমলও জানা থাকে। এতে কারও দায় কমে না। একই বর্ণনা সামনে গিয়ে সতর্ক করে, মানুষ দীর্ঘদিন এক দিকে আমল করে যেতে পারে, তারপর যা লেখা ছিল তা তাকে ধরে ফেলে। হাদিসটি যা ভেঙে দেয় তা হলো এই ভ্রম যে, কেউ নিজের শুরুটা নিজে সাজিয়েছে, কিংবা নিজের শেষটা নিয়ে নিশ্চিত থাকতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Verses on the Womb",
          "bn": "গর্ভ নিয়ে আরও আয়াত"
        },
        "p": [
          {
            "en": "39:6 describes the same forming from within: creation after creation, within three darknesses, and, like our verse, it moves straight from the womb to there is no deity except Him, then asks how you are turned away. 82:7-8 speaks to the single person: He created you, proportioned you and balanced you, and in whatever form He willed He assembled you. 40:64 and 64:3 both say that He formed you and perfected your forms, the first beside the good things He provides, the second beside the final return to Him.",
            "bn": "৩৯:৬ আয়াত একই গড়ার কথা বলে ভেতর থেকে দেখে: পর্যায়ের পর পর্যায়ে, তিন অন্ধকারের ভেতরে। আর আমাদের আয়াতের মতোই গর্ভের কথা থেকে সরাসরি চলে যায় এই কথায় যে তিনি ছাড়া কোনো ইলাহ নেই, তারপর জিজ্ঞেস করে, তোমাদের কোন্ দিকে ফিরিয়ে নেওয়া হচ্ছে? ৮২:৭-৮ আয়াত কথা বলে একজন একজন মানুষের সঙ্গে: তিনি তোমাকে সৃষ্টি করেছেন, সুঠাম করেছেন, ভারসাম্যপূর্ণ করেছেন, আর যে আকৃতিতে চেয়েছেন সেভাবে গঠন করেছেন। ৪০:৬৪ ও ৬৪:৩ দুটি আয়াতই বলে, তিনি তোমাদের আকৃতি দিয়েছেন, আর সেই আকৃতিকে সুন্দর করেছেন। প্রথমটিতে এ কথার পাশে আছে পবিত্র রিজিকের কথা, দ্বিতীয়টিতে তাঁর কাছে শেষ ফিরে যাওয়ার কথা।"
          },
          {
            "en": "23:14 lists the stages, from the clinging clot to the lump to bones clothed with flesh, and then another creation, and it ends: so blessed is Allah, the best of creators. 53:32 draws a moral from the same fact. He was most knowing of you when you were fetuses in your mothers' wombs, so do not claim yourselves to be pure. The One who saw you before anyone else did is not impressed by what you now say about yourself.",
            "bn": "২৩:১৪ আয়াত পর্যায়গুলো গুনে দেখায়: জমাট রক্ত থেকে মাংসপিণ্ড, তারপর হাড়, তারপর হাড়ের ওপর মাংসের আবরণ, তারপর এক নতুন সৃষ্টি। আর শেষ হয় এই কথায়: সর্বোত্তম স্রষ্টা আল্লাহ কতই না বরকতময়। ৫৩:৩২ আয়াত একই সত্য থেকে একটা শিক্ষা বের করে। তোমরা যখন মায়েদের গর্ভে ভ্রূণ ছিলে, তিনি তখনই তোমাদের সবচেয়ে ভালো জানতেন। কাজেই নিজেদের পবিত্র বলে দাবি করো না। কেউ দেখার আগে যিনি আপনাকে দেখেছেন, এখন নিজের সম্পর্কে আপনি যা বলেন, তাতে তিনি মুগ্ধ হন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With a Given Form",
          "bn": "পাওয়া আকৃতি নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "The first place this verse is lived is in front of a mirror. Someone who takes it seriously treats his face, height and build as the decision of the Wise, neither a flaw to resent nor a trophy to display. That does not forbid caring for the body; it changes the tone of the looking. Comparison with other people loses its edge when both faces were shaped by the same Lord, each however He willed.",
            "bn": "এই আয়াত যাপনের প্রথম জায়গা আয়নার সামনে। যে একে গুরুত্ব দেয়, সে নিজের চেহারা, উচ্চতা, গড়নকে দেখে প্রজ্ঞাময়ের সিদ্ধান্ত হিসেবে। এমন কোনো খুঁত হিসেবে নয় যা নিয়ে ক্ষোভ পুষতে হবে। আবার এমন কোনো ট্রফি হিসেবেও নয় যা দেখিয়ে বেড়াতে হবে। শরীরের যত্ন নেওয়া এতে নিষেধ হয় না। বদলে যায় তাকানোর সুরটা। দুটি চেহারাই যখন একই রব গড়েছেন, যেভাবে যাকে চেয়েছেন, তখন অন্যের সঙ্গে তুলনার ধারটা ভোঁতা হয়ে যায়।"
          },
          {
            "en": "The second place is in how we receive children and other people. Parents waiting for a child, and families given a child with a disability, live inside this verse. The form was not an accident, and the child is not a mistake. To mock anyone's body is to mock a decision Allah made. And for someone carrying a hard limit of his own, the verse names the Exalted in Might and the Wise over that limit, which is a ground for patience rather than bitterness.",
            "bn": "দ্বিতীয় জায়গা হলো সন্তানকে আর অন্য মানুষকে আমরা কীভাবে গ্রহণ করি। যে বাবা-মা সন্তানের অপেক্ষায় আছেন, যে পরিবার প্রতিবন্ধী সন্তান পেয়েছে, তাঁরা এই আয়াতের ভেতরেই বাস করছেন। আকৃতিটা দুর্ঘটনা নয়, শিশুটিও কোনো ভুল নয়। কারও শরীর নিয়ে ঠাট্টা করা মানে আল্লাহর নেওয়া একটা সিদ্ধান্ত নিয়ে ঠাট্টা করা। আর যে নিজে কোনো কঠিন সীমাবদ্ধতা বয়ে বেড়াচ্ছে, আয়াত সেই সীমাবদ্ধতার ওপরে মহাপরাক্রমশালী ও প্রজ্ঞাময়ের নাম রেখে দেয়। এটা তিক্ততার নয়, সবরের ভিত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prostration Du'a",
          "bn": "সিজদার একটি দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah gives a du'a for prostration that uses this verse's own root. Muslim records from Ali (RA), describing the Prophet's ﷺ prayer, that in sujud he would say: O Allah, to You I have prostrated, in You I have believed, and to You I have submitted; my face has prostrated to the One who created it and formed it, and opened its hearing and its sight; blessed is Allah, the best of creators. The word for formed it, sawwarahu, comes from the same root as yusawwirukum.",
            "bn": "সুন্নাহতে সিজদার এমন একটি দোয়া আছে, যাতে এই আয়াতেরই মূল শব্দ আছে। মুসলিম আলী (রাঃ) থেকে নবী ﷺ-এর নামাজের বিবরণে বর্ণনা করেন, সিজদায় তিনি বলতেন: হে আল্লাহ, আপনার জন্যই সিজদা করেছি, আপনার ওপরই ঈমান এনেছি, আপনার কাছেই আত্মসমর্পণ করেছি। আমার চেহারা সিজদা করেছে তাঁকে, যিনি একে সৃষ্টি করেছেন, আকৃতি দিয়েছেন, আর এর কান ও চোখ খুলে দিয়েছেন। সর্বোত্তম স্রষ্টা আল্লাহ বরকতময়। ‘আকৃতি দিয়েছেন’ বোঝাতে এখানে শব্দ ‘সাওয়ারাহু’, আমাদের আয়াতের ‘ইউসাওয়িরুকুম’-এর মূল থেকেই।"
          },
          {
            "en": "The placing of the words teaches as much as the words. A face that was formed in a womb it could never see is pressed to the ground before the One who formed it, and the du'a ends on the same words that close 23:14. You can say it in your own sujud, in Arabic, and let it carry the meaning of this verse each time your forehead touches the ground.",
            "bn": "দোয়ার শব্দগুলো যেমন শেখায়, দোয়াটি কোথায় পড়া হয় সেটাও তেমনি শেখায়। যে চেহারা এমন এক গর্ভে গড়া হয়েছিল যা সে কোনোদিন দেখতে পায়নি, সেই চেহারা মাটিতে রাখা হয় তাঁর সামনে, যিনি তাকে গড়েছেন। আর দোয়াটি শেষ হয় ঠিক সেই কথায়, যে কথায় ২৩:১৪ আয়াত শেষ হয়েছে। নিজের সিজদায় আরবিতে এটি পড়তে পারেন। প্রতিবার কপাল মাটিতে ঠেকলে দোয়াটি এই আয়াতের অর্থ বয়ে আনুক।"
          }
        ]
      },
      {
        "h": {
          "en": "For Parents and Teachers",
          "bn": "বাবা-মা ও শিক্ষকদের জন্য"
        },
        "p": [
          {
            "en": "With a child, begin with the child's own hands and face. Ask who decided the colour of their eyes and the shape of their fingers, and then read them the first words of the verse. Then read 3:5 and ask whether anything about them was hidden from Allah when they were too small for anyone to see. The pairing of knowing and forming is simple enough for a young child and deep enough to return to for years.",
            "bn": "শিশুর সঙ্গে শুরু করুন তার নিজের হাত আর চেহারা দিয়ে। জিজ্ঞেস করুন, তার চোখের রং আর আঙুলের গড়ন কে ঠিক করেছেন। তারপর আয়াতের প্রথম অংশটা পড়ে শোনান। এরপর ৩:৫ আয়াত পড়ে জিজ্ঞেস করুন, সে যখন এত ছোট ছিল যে কেউ তাকে দেখতে পেত না, তখন তার কোনো কিছু কি আল্লাহর কাছে গোপন ছিল? জানা আর গড়া, এই জোড়াটা ছোট শিশুর বোঝার মতো সহজ। আবার এত গভীর যে বছরের পর বছর এর কাছে ফেরা যায়।"
          },
          {
            "en": "In a study circle, set the verse beside the reading of Ibn Kathir and at-Tabari about Isa (AS), and ask what kind of argument it is: one that rests on a fact both sides accept rather than on a claim the other side denies. Then turn it inward. Ask what members of the circle would say differently about their own bodies, or about anyone they have laughed at, if they truly believed each form was shaped however He wills.",
            "bn": "পাঠচক্রে আয়াতটি রাখুন ঈসা (আঃ) সম্পর্কে ইবনে কাসীর ও আত-তাবারীর ব্যাখ্যার পাশে। জিজ্ঞেস করুন, এটা কেমন যুক্তি। যুক্তিটা দাঁড়িয়ে আছে দুই পক্ষই মানে এমন এক সত্যের ওপর, অপর পক্ষ অস্বীকার করে এমন দাবির ওপর নয়। তারপর প্রশ্নটা নিজেদের দিকে ফেরান। প্রত্যেকের আকৃতি তিনি যেভাবে চেয়েছেন সেভাবেই গড়া, এ কথা সত্যিই বিশ্বাস করলে নিজের শরীর নিয়ে, কিংবা যাকে নিয়ে কখনো হেসেছেন তাকে নিয়ে, চক্রের সদস্যরা কী অন্যভাবে বলতেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Mirror",
          "bn": "আয়নার সামনে প্রশ্ন"
        },
        "p": [
          {
            "en": "When I look in the mirror, do I see a decision of the Wise or a list of complaints? If Allah knew me fully before I had done anything, what am I still trying to present to Him as better than it is? The verse moves from the womb to there is no deity except Him; what in my life still competes for the place that belongs to the One who formed me?",
            "bn": "আয়নায় তাকালে আমি কী দেখি, প্রজ্ঞাময়ের একটা সিদ্ধান্ত, নাকি অভিযোগের একটা তালিকা? কিছু করার আগেই আল্লাহ যদি আমাকে পুরোপুরি জানতেন, তাহলে এখনো নিজের কোন জিনিসটা তাঁর সামনে আসলের চেয়ে ভালো করে দেখাতে চাইছি? আয়াত গর্ভের কথা থেকে সোজা চলে যায় এই ঘোষণায় যে তিনি ছাড়া কোনো ইলাহ নেই। আমার জীবনে কোন জিনিস এখনো সেই জায়গার দাবিদার, যা আমার স্রষ্টার প্রাপ্য?"
          },
          {
            "en": "Whose body have I spoken about carelessly, as though its shape were a joke rather than a decision Allah made? And when I run into a limit I was born with, can I name the Exalted in Might and the Wise over it, and carry it with patience instead of resentment? Which child in my care needs to hear from me, this week, that the way they were made was not a mistake?",
            "bn": "কার শরীর নিয়ে আমি অবহেলায় কথা বলেছি, যেন তার গড়নটা একটা ঠাট্টার বিষয়, আল্লাহর নেওয়া সিদ্ধান্ত নয়? আর জন্ম থেকে পাওয়া কোনো সীমাবদ্ধতার সামনে পড়লে আমি কি তার ওপরে মহাপরাক্রমশালী ও প্রজ্ঞাময়ের নাম রাখতে পারি? ক্ষোভ নিয়ে নয়, সবর নিয়ে কি সেটা বহন করতে পারি? আমার দেখাশোনায় থাকা কোন শিশুর এই সপ্তাহেই আমার মুখ থেকে শোনা দরকার যে, তাকে যেভাবে গড়া হয়েছে তাতে কোনো ভুল নেই?"
          }
        ]
      }
    ]
  },
  "3:8": {
    "sections": [
      {
        "h": {
          "en": "After the Verse of Firm Roots",
          "bn": "দৃঢ়মূল জ্ঞানের আয়াতের পরে"
        },
        "p": [
          {
            "en": "This prayer does not float free; it answers the verse directly before it. In 3:7 the Book is divided into muhkam verses, clear and decisive, and mutashabih verses that resemble one another, and two kinds of readers are described: those in whose hearts is zaygh, a swerving, who chase the ambiguous seeking discord, and those firmly rooted in knowledge who say, we believe in it, all of it is from our Lord. Verse 3:8 is the prayer of that second group, placed on their tongues by revelation itself.",
            "bn": "এই দোয়াটি শূন্যে ভাসমান নয়; এটি ঠিক আগের আয়াতের জবাব। 3:7 আয়াতে কিতাবকে ভাগ করা হয়েছে মুহকাম আয়াতে — যা স্পষ্ট ও চূড়ান্ত — এবং মুতাশাবিহ আয়াতে, যেগুলো পরস্পরের সদৃশ; আর দুই ধরনের পাঠকের বর্ণনা এসেছে: যাদের অন্তরে আছে যায়গ — এক ধরনের বক্রতা — তারা ফিতনা খুঁজতে অস্পষ্ট আয়াতের পেছনে ছোটে; আর যারা জ্ঞানে দৃঢ়মূল, তারা বলে, আমরা এতে ঈমান এনেছি, সবই আমাদের রবের পক্ষ থেকে। আয়াত 3:8 সেই দ্বিতীয় দলের দোয়া, যা ওহী নিজেই তাদের জবানে তুলে দিয়েছে।"
          },
          {
            "en": "The wording of the prayer picks up the very root the previous verse used for the diseased heart. La tuzigh qulubana, do not let our hearts swerve, echoes fi qulubihim zaygh, in their hearts is a swerving, from 3:7 itself. Having just been shown the portrait of hearts that tilt toward ambiguity, the believers immediately ask to be protected from that same tilt. The next verse, 3:9, keeps the horizon in view: our Lord, surely You will gather mankind for a Day about which there is no doubt.",
            "bn": "দোয়ার শব্দচয়ন সেই একই মূল ধাতু তুলে নেয়, যা আগের আয়াতে ব্যাধিগ্রস্ত অন্তরের জন্য ব্যবহৃত হয়েছিল। লা তুযিগ কুলূবানা — আমাদের অন্তরগুলোকে বাঁকতে দেবেন না — এটি 3:7 আয়াতের ফী কুলূবিহিম যায়গ — তাদের অন্তরে বক্রতা আছে — এই কথারই প্রতিধ্বনি। অস্পষ্টতার দিকে হেলে পড়া অন্তরের চিত্র দেখানো মাত্রই মুমিনরা সেই একই হেলে পড়া থেকে সুরক্ষা চেয়ে বসে। পরের আয়াত 3:9 দিগন্তটিকে সামনে রাখে: হে আমাদের রব, নিশ্চয়ই আপনি মানুষকে এমন এক দিনে সমবেত করবেন, যাতে কোনো সন্দেহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Prayer Asks",
          "bn": "দোয়াটি যেভাবে চায়"
        },
        "p": [
          {
            "en": "Ba'da idh hadaytana, after You have guided us, concedes two things at once: that guidance was His act, not our achievement, and that having received it does not secure it. Then comes a request for more than protection: wa hab lana min ladunka rahmah, grant us mercy from Your own presence. Min ladunka, from what is with You, asks for something unearned, drawn from His treasury rather than from our deserving. The young men of the cave asked with the same words in 18:10 as well.",
            "bn": "বা'দা ইয হাদাইতানা — আপনি আমাদের হেদায়েত দেওয়ার পর — একসাথে দুটি কথা স্বীকার করে: হেদায়েত ছিল তাঁরই কাজ, আমাদের অর্জন নয়; আর তা পেয়ে যাওয়া মানেই তা নিরাপদ হয়ে যাওয়া নয়। এরপর আসে সুরক্ষার চেয়েও বেশি কিছুর আবেদন: ওয়া হাব লানা মিন লাদুনকা রাহমাহ — আপনার নিজের সন্নিধি থেকে আমাদের রহমত দান করুন। মিন লাদুনকা — আপনার কাছে যা আছে তা থেকে — এমন কিছু চায় যা অনার্জিত, যা আমাদের প্রাপ্যতা থেকে নয় বরং তাঁর ভান্ডার থেকে আসে। গুহার যুবকরাও 18:10 আয়াতে একই শব্দে চেয়েছিল।"
          },
          {
            "en": "The prayer closes by naming Allah al-Wahhab, the Bestower, the One who gives gift after gift without compensation and without being diminished. The commentators observe that a request is strengthened by the name that matches it: the one asking for an unearned gift calls on the One whose way is unearned giving. Nothing in the sentence bargains. It does not promise works in exchange; it simply describes the Giver accurately and holds out its hands.",
            "bn": "দোয়াটি শেষ হয় আল্লাহকে আল-ওয়াহহাব নামে ডেকে — মহাদাতা, যিনি কোনো বিনিময় ছাড়াই এবং নিজে বিন্দুমাত্র না কমে উপহারের পর উপহার দিয়ে যান। মুফাসসিরগণ লক্ষ করেন, আবেদনের সাথে মিলে যাওয়া নাম আবেদনকে শক্তিশালী করে: যে অনার্জিত দান চাইছে, সে তাঁকেই ডাকছে যাঁর রীতিই হলো অনার্জিত দান। বাক্যটির কোথাও কোনো দর-কষাকষি নেই। এটি বিনিময়ে আমলের প্রতিশ্রুতি দেয় না; কেবল দাতাকে যথাযথভাবে বর্ণনা করে দুই হাত পেতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turning of Hearts",
          "bn": "অন্তরের ঘুরে যাওয়া"
        },
        "p": [
          {
            "en": "The Arabic word for heart, qalb, shares its root with taqallub, turning over, and the scholars have long heard in the name a description: the heart is the organ that turns. Al-Bukhari records that the Prophet ﷺ would frequently swear by the words: no, by the Turner of hearts. At-Tirmidhi records his frequent supplication: O Turner of hearts, make my heart firm upon Your religion. The man whose guidance was most secure asked most often for firmness.",
            "bn": "অন্তরের আরবি শব্দ কালব-এর মূল ধাতু তাকাল্লুব — উল্টে যাওয়া — এর সাথে অভিন্ন, আর আলিমগণ বহুকাল ধরে এই নামের মধ্যেই একটি বর্ণনা শুনে এসেছেন: অন্তর সেই অঙ্গ যা ঘুরে যায়। বুখারী বর্ণনা করেন, নবী ﷺ প্রায়ই এই শব্দে শপথ করতেন: না, অন্তরসমূহের পরিবর্তনকারীর শপথ। তিরমিযী তাঁর বহুল-পঠিত দোয়াটি বর্ণনা করেন: হে অন্তরসমূহের পরিবর্তনকারী, আমার অন্তরকে আপনার দ্বীনের উপর দৃঢ় রাখুন। যাঁর হেদায়েত ছিল সবচেয়ে সুরক্ষিত, তিনিই দৃঢ়তার জন্য সবচেয়ে বেশি চেয়েছেন।"
          },
          {
            "en": "That fact reorders our assumptions. If the Prophet ﷺ pleaded for steadiness, then steadiness is not a certificate issued once but a state maintained from above, and the person who feels safely past the possibility of swerving has misread how hearts work. The verse assumes believers who know their own instability, which is why it is a prayer and not a boast. Asking is itself the posture of the firmly rooted.",
            "bn": "এই সত্য আমাদের ধারণাগুলোকে নতুন করে সাজায়। নবী ﷺ যদি অবিচলতার জন্য মিনতি করে থাকেন, তবে অবিচলতা একবার ইস্যু করা কোনো সনদ নয়, বরং উপর থেকে রক্ষণাবেক্ষণ করা একটি অবস্থা; আর যে ব্যক্তি নিজেকে বাঁক নেওয়ার সম্ভাবনার ঊর্ধ্বে নিরাপদ ভাবে, সে অন্তর কীভাবে কাজ করে তা ভুল পড়েছে। আয়াতটি এমন মুমিনদের ধরে নেয় যারা নিজেদের অস্থিরতা জানে — এ কারণেই এটি দোয়া, অহংকার নয়। চাওয়াটাই দৃঢ়মূলদের ভঙ্গি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা আহরণ করেন"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as proof that remaining guided is a continuing mercy, renewed from Allah moment by moment, not a possession transferred once into our keeping. The Quran says elsewhere, in 8:24, that Allah comes in between a man and his heart, and in 14:27 that Allah keeps firm those who believe with the firm word, in this life and in the Hereafter. Firmness has a source, and the verse teaches us to apply to the source directly.",
            "bn": "আস-সা'দী আয়াতটিকে এই প্রমাণ হিসেবে পড়েন যে হেদায়েতের উপর টিকে থাকা এক চলমান রহমত, যা আল্লাহর পক্ষ থেকে মুহূর্তে মুহূর্তে নবায়ন হয় — একবার আমাদের জিম্মায় হস্তান্তরিত কোনো সম্পত্তি নয়। কুরআন অন্যত্র বলে, 8:24 আয়াতে, আল্লাহ মানুষ ও তার অন্তরের মাঝখানে অন্তরায় হন; আর 14:27 আয়াতে, আল্লাহ মুমিনদের সুদৃঢ় বাণী দিয়ে দুনিয়ার জীবনে ও আখিরাতে অবিচল রাখেন। দৃঢ়তার একটি উৎস আছে, আর আয়াতটি আমাদের শেখায় সরাসরি সেই উৎসের কাছেই আবেদন করতে।"
          },
          {
            "en": "Ibn Kathir sets the prayer against its foil: those who chase the ambiguous are seeking fitnah, while the rooted ask to be kept from deviation. The difference between the two groups is not intelligence but intention and dependence. One group interrogates the Book to unsettle; the other submits to it and then, knowing their own hearts, asks the Author to hold them steady. The verse locates safety not in cleverness but in asking.",
            "bn": "ইবনে কাসীর দোয়াটিকে তার বিপরীত চিত্রের পাশে রাখেন: যারা অস্পষ্টের পেছনে ছোটে তারা ফিতনা খুঁজছে, আর দৃঢ়মূলরা চাইছে বিচ্যুতি থেকে রক্ষা। দুই দলের পার্থক্য বুদ্ধিমত্তায় নয়, নিয়তে ও নির্ভরতায়। এক দল কিতাবকে জেরা করে অস্থিরতা ছড়াতে; অন্য দল তার কাছে আত্মসমর্পণ করে এবং নিজেদের অন্তরকে চেনে বলেই এর প্রেরককে বলে তাদের স্থির রাখতে। আয়াতটি নিরাপত্তাকে চতুরতায় নয়, চাওয়ার মধ্যে খুঁজে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Family of Prayers",
          "bn": "দোয়ার এক পরিবার"
        },
        "p": [
          {
            "en": "Surah Al Imran returns to this register at its close, where 3:191-194 record believers who reflect on creation and then plead: our Lord, forgive us our sins and take our souls with the righteous. The soldiers of Talut prayed in the same shape in 2:250, asking for patience to be poured over them before the battle began. In each case the request is for something inward — steadiness, patience, forgiveness — asked of the only One who governs inward things.",
            "bn": "সূরা আলে ইমরান তার শেষভাগে আবার এই সুরে ফেরে, যেখানে 3:191-194 এমন মুমিনদের কথা লিপিবদ্ধ করে যারা সৃষ্টি নিয়ে চিন্তা করে তারপর মিনতি করে: হে আমাদের রব, আমাদের গুনাহ ক্ষমা করুন এবং নেককারদের সাথে আমাদের মৃত্যু দিন। তালূতের সৈনিকরাও 2:250 আয়াতে একই ধাঁচে দোয়া করেছিল — যুদ্ধ শুরুর আগে তাদের উপর ধৈর্য ঢেলে দেওয়ার আবেদন। প্রতিটি ক্ষেত্রেই চাওয়া হচ্ছে অন্তর্গত কিছু — অবিচলতা, ধৈর্য, ক্ষমা — আর চাওয়া হচ্ছে একমাত্র তাঁর কাছে, যিনি অন্তর্গত বিষয়গুলোর নিয়ন্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Making It Daily",
          "bn": "প্রতিদিনের অভ্যাসে"
        },
        "p": [
          {
            "en": "The lived form of this verse is simple: pray it, in Arabic or in your own tongue, at fixed points — after the obligatory prayers, on waking, before decisions that could bend you. Then watch for small swerves early: the prayer skipped without regret, the content that feeds doubt consumed without any appetite for the answer. Swerving rarely announces itself; it accumulates.",
            "bn": "এই আয়াতের যাপিত রূপটি সরল: এটি দোয়া হিসেবে পড়ুন, আরবিতে বা নিজের ভাষায়, নির্দিষ্ট কিছু মুহূর্তে — ফরয নামাযের পর, ঘুম থেকে উঠে, এমন সিদ্ধান্তের আগে যা আপনাকে বাঁকিয়ে দিতে পারে। তারপর ছোট ছোট বাঁকগুলোর দিকে আগেভাগে নজর রাখুন: অনুশোচনা ছাড়াই ছেড়ে দেওয়া নামায, জবাব জানার কোনো আগ্রহ ছাড়াই গেলা সন্দেহ-উসকানো বিষয়বস্তু। বাঁক খুব কমই নিজের ঘোষণা দেয়; তা জমতে থাকে।"
          },
          {
            "en": "And when you notice steadiness in yourself — a temptation that lost its pull, a habit of worship that took root — the verse trains you to file it correctly: as a gift from the Bestower, not a personal trait. Gratitude for firmness and fear of losing it belong together, and both are folded into this one sentence. The believer says it, means it, and says it again tomorrow.",
            "bn": "আর যখন নিজের মধ্যে অবিচলতা টের পান — কোনো প্রলোভন যার টান হারিয়ে গেছে, কোনো ইবাদতের অভ্যাস যা শিকড় গেড়েছে — আয়াতটি আপনাকে তা সঠিক খাতায় লিখতে শেখায়: মহাদাতার দান হিসেবে, ব্যক্তিগত গুণ হিসেবে নয়। দৃঢ়তার জন্য কৃতজ্ঞতা আর তা হারানোর ভয় একসাথে থাকে, আর দুটোই এই একটি বাক্যে ভাঁজ করা আছে। মুমিন এটি বলে, অন্তর থেকে বলে, এবং আগামীকাল আবার বলে।"
          }
        ]
      }
    ]
  },
  "3:14-15": {
    "sections": [
      {
        "h": {
          "en": "From One Battle to Every Heart",
          "bn": "এক যুদ্ধ থেকে প্রতিটি অন্তরে"
        },
        "p": [
          {
            "en": "These two verses belong to the opening movement of Surah Al Imran, which is Madinan. 3:10 has said that the wealth and children of those who disbelieve will not avail them against Allah at all, and 3:13 recalls the two armies that met, when Allah supported with His victory whom He willed. Our passage then widens the view from one battlefield to every human heart. It lists what people love, measures it, and in 3:15 offers something better.",
            "bn": "এই দুটি আয়াত সূরা আলে ইমরানের শুরুর অংশের, আর সূরাটি মাদানি। ৩:১০ আয়াত বলেছে, যারা কুফরি করে তাদের ধন-সম্পদ আর সন্তান আল্লাহর সামনে তাদের কোনো কাজেই আসবে না। ৩:১৩ আয়াত মনে করিয়ে দেয় সেই দুই বাহিনীর কথা যারা মুখোমুখি হয়েছিল, যখন আল্লাহ যাকে চেয়েছেন নিজের সাহায্যে শক্তি দিয়েছেন। এরপর আমাদের অংশটি দৃষ্টি এক যুদ্ধক্ষেত্র থেকে ছড়িয়ে দেয় প্রতিটি মানুষের অন্তরে। মানুষ যা ভালোবাসে তার তালিকা দেয়, সেটা মাপে, আর ৩:১৫ আয়াতে এর চেয়ে উত্তম কিছুর প্রস্তাব রাখে।"
          },
          {
            "en": "The passage runs on past 3:15. 3:16 gives the words of those who fear Allah, and 3:17 describes them as patient, true, obedient, spending in Allah's way and seeking forgiveness before dawn. So the reader who has just been told of something better is shown, at once, the people who chose it and what their nights look like.",
            "bn": "অংশটি ৩:১৫ আয়াতে থেমে থাকে না। ৩:১৬ আয়াতে আছে আল্লাহভীরুদের মুখের কথা। ৩:১৭ আয়াত তাদের বর্ণনা দেয়: তারা ধৈর্যশীল, সত্যবাদী, অনুগত, আল্লাহর পথে খরচকারী, আর শেষ রাতে ইস্তিগফারকারী। অর্থাৎ যে পাঠক এইমাত্র উত্তম কিছুর খবর শুনল, তাকে সঙ্গে সঙ্গে দেখানো হলো সেই মানুষদের, যারা ওটাই বেছে নিয়েছে, আর তাদের রাতগুলো কেমন কাটে।"
          },
          {
            "en": "Ibn Ishaq's report places the whole opening of the surah in the setting of the Najran delegation, and Ibn Kathir also brings a report that when 3:14 came down, Umar (RA) said, O Allah, now that You have made it beautiful for us?, and the next verse came down. Even so, the force of these verses lies in where they stand and in what follows them.",
            "bn": "ইবনে ইসহাকের বর্ণনা সূরার পুরো শুরুর অংশটিকে নাজরানের প্রতিনিধিদলের প্রেক্ষাপটে রাখে। ইবনে কাসীর আরেকটি বর্ণনাও আনেন: ৩:১৪ আয়াত নাজিল হলে উমর (রাঃ) বলেছিলেন, হে আল্লাহ, আপনি যখন এটাকে আমাদের জন্য সুশোভিত করেছেন, তাহলে এখন? তখন পরের আয়াতটি নাজিল হয়। তবু এই আয়াতগুলোর জোর তাদের অবস্থানে, আর তাদের পরে যা আসে তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beautified, Desired, Enjoyed",
          "bn": "সুশোভিত, কাম্য, ভোগের সামগ্রী"
        },
        "p": [
          {
            "en": "The passage opens with zuyyina, it has been made beautiful, in the passive, and the one who beautifies is not named. What is beautified is hubb ash-shahawat, the love of desired things. The verse does not only say that the objects were made attractive; it says that the love of them was. Az-Zamakhshari observes that the things listed are called shahawat, desires, as if they were nothing but the craving itself, a way of stressing how strongly the heart is drawn to them.",
            "bn": "অংশটি শুরু হয় ‘যুইয়িনা’ দিয়ে, সুশোভিত করা হয়েছে, কর্মবাচ্যে। কে সুশোভিত করেছে, তার নাম বলা হয়নি। কী সুশোভিত করা হয়েছে? ‘হুব্বুশ শাহাওয়াত’, কাম্য জিনিসগুলোর ভালোবাসা। আয়াত শুধু বলে না যে জিনিসগুলো আকর্ষণীয় করা হয়েছে। বলে, সেগুলোর প্রতি ভালোবাসাটাকেই সুন্দর করে দেখানো হয়েছে। আয-যামাখশারী লক্ষ করেন, তালিকার জিনিসগুলোকেই বলা হয়েছে ‘শাহাওয়াত’, অর্থাৎ কামনা। যেন এগুলো কামনা ছাড়া আর কিছুই নয়। এভাবে বোঝানো হয়েছে, অন্তর এগুলোর দিকে কত জোরে টানে।"
          },
          {
            "en": "The list is concrete. An-nisa' and al-banin, women and sons; al-qanatir al-muqantarah, heaps upon heaps, a noun and its adjective from one root so that the heap seems to grow as it is heard; of gold and silver; al-khayl al-musawwamah, horses that the commentators explain as branded, or grazing freely, or of fine appearance; cattle; and harth, tilled land. It is the estate of a wealthy man of that society, named item by item, and without contempt.",
            "bn": "তালিকাটা একেবারে বাস্তব। ‘আন-নিসা’ ও ‘আল-বানীন’, নারী ও পুত্রসন্তান। ‘আল-কানাতীরুল মুকানতারাহ’, স্তূপের ওপর স্তূপ। বিশেষ্য আর তার বিশেষণ একই মূল থেকে, তাই শুনতে শুনতেই স্তূপটা যেন উঁচু হতে থাকে। সোনা আর রুপার স্তূপ। ‘আল-খাইলুল মুসাওয়ামাহ’, মুফাসসিরগণ এর ব্যাখ্যা করেছেন চিহ্ন দেওয়া ঘোড়া, কিংবা খোলা মাঠে চরে বেড়ানো ঘোড়া, কিংবা দেখতে সুন্দর ঘোড়া। তারপর গবাদিপশু, আর ‘হারস’, চাষের জমি। সেই সমাজের এক ধনী মানুষের সম্পত্তির হিসাব, একটা একটা করে নাম ধরে বলা, কোনো তাচ্ছিল্য ছাড়াই।"
          },
          {
            "en": "Then the measure: dhalika mata'u al-hayati ad-dunya, that is the enjoyment of worldly life. Mata' is something enjoyed and made use of for a while, which then runs out; Ibn Kathir explains these things as the delights of this life that will soon perish. The word does not deny the enjoyment; it gives it a size and a purpose. It is like what a traveller uses along the way. And the verse ends wa Allahu 'indahu husnu al-ma'ab, and with Allah is the best return. Ma'ab comes from the root of coming back and names the place one returns to, the opposite of provision used up on the road.",
            "bn": "তারপর আসে মাপ: ‘যালিকা মাতাউল হায়াতিদ দুনইয়া’, এসব দুনিয়ার জীবনের ভোগের সামগ্রী। ‘মাতা’ মানে ভোগের সামগ্রী, যা কিছুদিন কাজে লাগে, তারপর ফুরিয়ে যায়। ইবনে কাসীর বলেছেন, এগুলো দুনিয়ার ভোগের জিনিস, যা শিগগিরই শেষ হয়ে যাবে। শব্দটা ভোগকে অস্বীকার করে না। তাকে একটা মাপ আর একটা উদ্দেশ্য দেয়। মুসাফির পথে যা ব্যবহার করে, এ যেন তেমনই। আর আয়াত শেষ হয় ‘ওয়াল্লাহু ইনদাহু হুসনুল মাআব’ দিয়ে, আর আল্লাহর কাছেই উত্তম প্রত্যাবর্তনস্থল। ‘মাআব’ এসেছে ফিরে আসার মূল থেকে। এর মানে সেই জায়গা, যেখানে মানুষ ফিরে যায়। পথে খরচ হয়ে ফুরিয়ে যাওয়া পাথেয়র ঠিক উল্টো।"
          }
        ]
      },
      {
        "h": {
          "en": "Shall I Tell You?",
          "bn": "আমি কি খবর দেব?"
        },
        "p": [
          {
            "en": "3:15 does not scold. The Prophet ﷺ is told to ask a question: a-unabbi'ukum bi-khayrin min dhalikum, shall I inform you of something better than that? The question takes the listener's desire seriously and outbids it. Then comes the answer, for those who fear Allah, with their Lord: gardens beneath which rivers flow, where they abide eternally, and purified spouses, and ridwanun min Allah, approval from Allah.",
            "bn": "৩:১৫ আয়াত ধমক দেয় না। নবী ﷺ-কে একটা প্রশ্ন করতে বলা হয়: ‘আউনাব্বিউকুম বিখাইরিম মিন যালিকুম’, আমি কি তোমাদের এর চেয়ে উত্তম কিছুর খবর দেব? প্রশ্নটা শ্রোতার চাওয়াকে হালকা করে দেখে না, বরং তার চেয়ে বড় কিছু সামনে রাখে। তারপর আসে উত্তর: যারা আল্লাহকে ভয় করে, তাদের জন্য তাদের রবের কাছে আছে এমন বাগান যার নিচ দিয়ে নদী বয়ে যায়, যেখানে তারা চিরকাল থাকবে। আছে পবিত্র সঙ্গী। আর আছে ‘রিদওয়ানুম মিনাল্লাহ’, আল্লাহর সন্তুষ্টি।"
          },
          {
            "en": "The two verses answer each other. 3:14 closes on 'indahu, with Him is the best return, and 3:15 places the gardens 'inda rabbihim, with their Lord. The world's list had women and horses and farmland; the answer has spouses made pure and gardens with rivers, and then something the first list has nothing to match. Ridwan comes last and stands alone, and 9:72 says of it that approval from Allah is greater.",
            "bn": "দুটি আয়াত একটা আরেকটার জবাব দেয়। ৩:১৪ আয়াত শেষ হয় ‘ইনদাহু’ দিয়ে, তাঁরই কাছে উত্তম প্রত্যাবর্তনস্থল। আর ৩:১৫ আয়াত বাগানগুলো রাখে ‘ইনদা রাব্বিহিম’, তাদের রবের কাছে। দুনিয়ার তালিকায় ছিল নারী, ঘোড়া, ফসলের জমি। জবাবের তালিকায় আছে পবিত্র করা সঙ্গী, নদী বয়ে চলা বাগান। তারপর এমন একটা জিনিস, যার সমতুল্য কিছু প্রথম তালিকায় একেবারেই নেই। রিদওয়ান আসে সবার শেষে, একা দাঁড়িয়ে। আর ৯:৭২ আয়াত এর সম্পর্কে বলে, আল্লাহর সন্তুষ্টিই সবচেয়ে বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Beautified, and What For",
          "bn": "কে সুশোভিত করল, কেন"
        },
        "p": [
          {
            "en": "On who did the beautifying, al-Qurtubi records two positions. One holds that Allah made these things beautiful as a test, as 18:7 says: We have made that which is on the earth adornment for it, that We may test them. The other, which he reports from al-Hasan al-Basri, holds that Satan beautified them. The two readings need not exclude each other. The attraction is created and turned into a trial, and the whisper toward excess and forgetfulness works on what was created.",
            "bn": "সুশোভিত কে করল, এ প্রশ্নে আল-কুরতুবী দুটি মত উল্লেখ করেন। একটি মত হলো, আল্লাহ পরীক্ষার জন্য এসব সুন্দর করেছেন, যেমন ১৮:৭ আয়াতে আছে: যমীনের ওপর যা কিছু আছে তা আমি তার শোভা বানিয়েছি, যাতে তাদের পরীক্ষা করতে পারি। অন্য মতটি তিনি হাসান বসরী থেকে উল্লেখ করেন, শয়তানই এসব সুশোভিত করেছে। দুটি ব্যাখ্যা একটা আরেকটাকে বাতিল করে দেয়, এমন নয়। আকর্ষণটা আল্লাহরই সৃষ্টি, আর তিনিই একে পরীক্ষা বানিয়েছেন। আর বাড়াবাড়ি ও গাফিলতির দিকে যে ওয়াসওয়াসা, সেটা কাজ করে এই সৃষ্টির ওপরই।"
          },
          {
            "en": "Ibn Kathir judges each item by the intention behind it. Love of women for chastity and children is sought, and he brings the hadith on the best enjoyment of this world; love of sons for boasting is blamed, but for increasing the ummah of those who worship Allah it is praised. Wealth gathered for pride over the weak is blamed, and wealth spent on kin and good causes is praised. Horses, he says, are kept by some in Allah's way, by some for pride, by some for need. The objects stay the same; the heart's use of them does not.",
            "bn": "ইবনে কাসীর প্রতিটি জিনিসকে বিচার করেন তার পেছনের নিয়ত দিয়ে। পবিত্র থাকা আর সন্তান লাভের জন্য নারীর প্রতি ভালোবাসা কাম্য, আর এখানে তিনি দুনিয়ার উত্তম সামগ্রী সংক্রান্ত হাদিসটি আনেন। পুত্রসন্তানের ভালোবাসা যদি গর্ব করার জন্য হয়, তা নিন্দনীয়। আর যদি আল্লাহর ইবাদতকারী উম্মাহ বাড়ানোর জন্য হয়, তা প্রশংসনীয়। দুর্বলের ওপর অহংকার করার জন্য জমানো সম্পদ নিন্দনীয়, আত্মীয়স্বজন আর ভালো কাজে খরচ করা সম্পদ প্রশংসনীয়। ঘোড়া, তিনি বলেন, কেউ রাখে আল্লাহর পথে, কেউ গর্বের জন্য, কেউ প্রয়োজনে। জিনিসগুলো একই থাকে। বদলায় সেগুলো নিয়ে অন্তরের আচরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best Enjoyment and the Last Gift",
          "bn": "উত্তম সামগ্রী, শেষ উপহার"
        },
        "p": [
          {
            "en": "Muslim records from Abdullah ibn Amr (RA) that the Messenger of Allah ﷺ said that the world is enjoyment, and the best enjoyment of the world is a righteous woman. The hadith uses the verse's own word, mata', and does what Ibn Kathir describes. It does not call marriage a snare. It places a righteous spouse at the top of what the world has to offer, and so shows what turns one of the listed desires into a blessing.",
            "bn": "মুসলিম আবদুল্লাহ ইবনে আমর (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন, দুনিয়া হলো ভোগের সামগ্রী, আর দুনিয়ার সবচেয়ে উত্তম সামগ্রী নেককার স্ত্রী। হাদিসটি আয়াতেরই শব্দ ‘মাতা’ ব্যবহার করে, আর ইবনে কাসীর যা বলেছেন ঠিক সেটাই করে। বিয়েকে ফাঁদ বলে না। বরং দুনিয়া যা দিতে পারে তার শীর্ষে রাখে একজন নেককার জীবনসঙ্গীকে। এভাবে দেখিয়ে দেয়, তালিকার একটি কামনা কিসে নিয়ামত হয়ে ওঠে।"
          },
          {
            "en": "Al-Bukhari records from Abu Sa'id al-Khudri (RA) that Allah will ask the people of Paradise whether they are content, and when they say they are, He will ask whether He should not give them something better than that. He will then tell them that He causes His approval to descend upon them and will never be displeased with them after it. That is the ridwan of 3:15 seen from inside the Garden. Everything on the first list can be lost; this gift is promised never to be withdrawn.",
            "bn": "বুখারী আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন, আল্লাহ জান্নাতবাসীদের জিজ্ঞেস করবেন তারা সন্তুষ্ট কি না। তারা যখন বলবে তারা সন্তুষ্ট, তিনি জিজ্ঞেস করবেন, তোমাদের কি এর চেয়ে উত্তম কিছু দেব না? তারপর জানাবেন, তিনি তাদের ওপর নিজের সন্তুষ্টি নাজিল করছেন, আর এরপর আর কখনো তাদের ওপর অসন্তুষ্ট হবেন না। জান্নাতের ভেতর থেকে দেখা ৩:১৫ আয়াতের রিদওয়ান এটাই। প্রথম তালিকার সবকিছুই হারিয়ে যেতে পারে। এই উপহারের ব্যাপারে প্রতিশ্রুতি, এটা কোনোদিন ফিরিয়ে নেওয়া হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Adornment Elsewhere in the Book",
          "bn": "কিতাবের অন্যত্র শোভার কথা"
        },
        "p": [
          {
            "en": "18:46 compresses the same teaching: wealth and children are adornment of the worldly life, and enduring good deeds are better with your Lord for reward and for hope. 57:20 calls the life of this world amusement, adornment, boasting and competition in wealth and children, like rain whose growth pleases the tillers and then turns yellow and becomes debris. 8:28 and 64:15 name wealth and children plainly as a trial, and add that with Allah is a great reward.",
            "bn": "১৮:৪৬ আয়াত একই শিক্ষা অল্প কথায় বলে: ধন-সম্পদ আর সন্তান দুনিয়ার জীবনের শোভা, আর স্থায়ী নেক আমল তোমার রবের কাছে প্রতিদানেও উত্তম, আশার দিক থেকেও উত্তম। ৫৭:২০ আয়াত দুনিয়ার জীবনকে বলে খেলা, সাজসজ্জা, পরস্পর গর্ব আর ধন-সন্তানে আধিক্যের প্রতিযোগিতা। যেন বৃষ্টি, যার ফসল চাষিকে খুশি করে, তারপর হলুদ হয়ে যায়, তারপর খড়কুটো। ৮:২৮ ও ৬৪:১৫ আয়াত সোজাসুজি বলে, ধন-সম্পদ আর সন্তান পরীক্ষা, আর আল্লাহর কাছে আছে মহাপুরস্কার।"
          },
          {
            "en": "9:24 turns the list into a test of rank: if fathers, sons, brothers, wives, relatives, wealth, trade and dwellings are dearer to you than Allah, His Messenger and striving in His cause, then wait until Allah brings His command. And 87:16-17 states the whole difficulty in two short verses: but you prefer the worldly life, while the Hereafter is better and more enduring.",
            "bn": "৯:২৪ আয়াত তালিকাটাকে বানিয়ে দেয় অগ্রাধিকারের পরীক্ষা: বাবা, সন্তান, ভাই, স্ত্রী, আত্মীয়, অর্জিত সম্পদ, মন্দার ভয় করা ব্যবসা আর পছন্দের বাসস্থান যদি আল্লাহ, তাঁর রাসূল আর তাঁর পথে সংগ্রামের চেয়ে তোমাদের কাছে প্রিয় হয়, তবে অপেক্ষা করো, যতক্ষণ না আল্লাহ তাঁর ফয়সালা নিয়ে আসেন। আর ৮৭:১৬-১৭ আয়াত পুরো সমস্যাটা বলে দেয় দুটি ছোট আয়াতে: কিন্তু তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও, অথচ আখিরাত উত্তম ও স্থায়ী।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Pull",
          "bn": "টানটার নাম দেওয়া"
        },
        "p": [
          {
            "en": "The verse is lived first by honest naming. Ask which item on its list has the strongest pull on you this year: a marriage you hope for, a child's future, savings, a vehicle you are proud of, or land. Naming it does not make it sinful. It makes it visible, and what is visible can be ranked. The verse's own method is to grant the beauty first and then state the size.",
            "bn": "এই আয়াত যাপনের প্রথম ধাপ হলো সৎভাবে নাম দেওয়া। নিজেকে জিজ্ঞেস করুন, এ বছর তালিকার কোন জিনিসটা আপনাকে সবচেয়ে বেশি টানছে। হতে পারে প্রত্যাশিত একটা বিয়ে, সন্তানের ভবিষ্যৎ, সঞ্চয়, গর্বের একটা গাড়ি, কিংবা জমি। নাম দিলেই সেটা গুনাহ হয়ে যায় না। বরং চোখের সামনে আসে, আর যা চোখের সামনে থাকে তাকে তার জায়গায় বসানো যায়। আয়াতের নিজের পদ্ধতিও এটাই: আগে সৌন্দর্যটা স্বীকার করা, তারপর তার মাপটা বলে দেওয়া।"
          },
          {
            "en": "Then comes the practice of the better offer. When a choice sets something on the list against the approval of Allah, a prayer time against a deal, a lawful limit against a gain, recall the question of 3:15 and give yourself its answer. And look at 3:17 for what the people who chose better did with their nights: they sought forgiveness before dawn. A few minutes before Fajr are a small and concrete place to begin.",
            "bn": "তারপর আসে উত্তম প্রস্তাবটা কাজে লাগানোর অভ্যাস। কোনো সিদ্ধান্তে যখন তালিকার কোনো জিনিস আল্লাহর সন্তুষ্টির মুখোমুখি দাঁড়ায়, যেমন নামাজের সময় বনাম একটা লেনদেন, কিংবা হালালের সীমা বনাম একটা লাভ, তখন ৩:১৫ আয়াতের প্রশ্নটা মনে করুন, আর নিজেকেই তার জবাব দিন। আর ৩:১৭ আয়াতে দেখুন, যারা উত্তমটা বেছে নিয়েছিল তারা রাত কীভাবে কাটাত: শেষ রাতে ইস্তিগফার করত। ফজরের আগের কয়েক মিনিট, শুরু করার জন্য ছোট কিন্তু বাস্তব একটা জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Du'a of Those Who Chose",
          "bn": "যারা বেছে নিল তাদের দোয়া"
        },
        "p": [
          {
            "en": "The passage supplies its own du'a. 3:16 records what those who fear Allah say: Rabbana innana amanna faghfir lana dhunubana wa qina 'adhab an-nar, Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire. It is the prayer of people who have just been shown both lists and have chosen, and who still do not rely on their own record.",
            "bn": "অংশটি নিজেই দোয়া শিখিয়ে দেয়। ৩:১৬ আয়াতে আছে আল্লাহভীরুরা যা বলে: ‘রাব্বানা ইন্নানা আমান্না ফাগফির লানা যুনূবানা ওয়াকিনা আযাবান নার’, হে আমাদের রব, আমরা ঈমান এনেছি, তাই আমাদের গুনাহ মাফ করে দিন আর আমাদের জাহান্নামের আজাব থেকে বাঁচান। এ দোয়া তাদের, যাদের সামনে এইমাত্র দুটো তালিকাই রাখা হয়েছে আর যারা বেছে নিয়েছে। তবু নিজেদের আমলনামার ওপর তারা ভরসা করে বসে থাকে না।"
          },
          {
            "en": "Its order is worth keeping: first a statement of faith, then a request for forgiveness, then a request for protection. It asks for nothing on the first list, neither wealth nor children nor land, only to be forgiven and kept from the Fire. Said in the hour before dawn, where 3:17 places the seeking of forgiveness, it turns the whole passage from something read into something done.",
            "bn": "দোয়াটির ক্রম মনে রাখার মতো। আগে ঈমানের ঘোষণা, তারপর মাফ চাওয়া, তারপর রক্ষা চাওয়া। প্রথম তালিকার কোনো কিছুই এতে চাওয়া হয়নি, না সম্পদ, না সন্তান, না জমি। চাওয়া শুধু মাফ পাওয়া আর আগুন থেকে বাঁচা। ৩:১৭ আয়াত ইস্তিগফারকে যে সময়ে রেখেছে, ফজরের আগের সেই সময়ে দোয়াটি পড়লে পুরো অংশটা শুধু পড়ার বিষয় থাকে না, আমলের বিষয় হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking Stock of the Heart",
          "bn": "অন্তরের হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "Which of the things this verse names has the strongest hold on my heart right now, and have I ever admitted it to myself? Do I use what I have as provision for a journey, or have I quietly made it the destination? If someone asked me, shall I tell you of something better, would I really want to hear the answer? Which blessing on the list do I talk about most, and thank Allah for least?",
            "bn": "এই আয়াতে যেসব জিনিসের নাম এসেছে, তার কোনটা এই মুহূর্তে আমার অন্তরকে সবচেয়ে শক্ত করে ধরে আছে, আর সেটা কি কখনো নিজের কাছে স্বীকার করেছি? যা আমার আছে তা কি পথের পাথেয় হিসেবে ব্যবহার করি, নাকি চুপচাপ একে গন্তব্য বানিয়ে ফেলেছি? কেউ যদি জিজ্ঞেস করে, এর চেয়ে উত্তম কিছুর খবর দেব কি, আমি কি সত্যিই উত্তরটা শুনতে চাইব? তালিকার কোন নিয়ামতের কথা আমি সবচেয়ে বেশি বলি, অথচ তার জন্য আল্লাহর শুকরিয়া সবচেয়ে কম আদায় করি?"
          },
          {
            "en": "When did I last let go of something I love for the approval of Allah? Are my family and my wealth a road to Him, or the reason I forget Him? If the thing I named first were taken from me tomorrow, what would remain of my hope? And what would my nights look like if I were one of the people 3:17 describes, who seek forgiveness before dawn?",
            "bn": "আল্লাহর সন্তুষ্টির জন্য প্রিয় কিছু শেষ কবে ছেড়েছি? আমার পরিবার আর সম্পদ কি তাঁর দিকে যাওয়ার পথ, নাকি তাঁকে ভুলে থাকার কারণ? যে জিনিসটার নাম আমি সবার আগে নিয়েছি, সেটা যদি কাল আমার কাছ থেকে নিয়ে নেওয়া হয়, তাহলে আমার আশার কী বাকি থাকবে? আর ৩:১৭ আয়াতে যাদের বর্ণনা আছে, যারা শেষ রাতে ইস্তিগফার করে, আমি তাদের একজন হলে আমার রাতগুলো কেমন হতো?"
          }
        ]
      }
    ]
  },
  "3:18-19": {
    "sections": [
      {
        "h": {
          "en": "The Ground Beneath the Argument",
          "bn": "বিতর্কের নিচের জমিন"
        },
        "p": [
          {
            "en": "These two verses come after 3:15-17, which described those who fear Allah and seek forgiveness before dawn, and before 3:20, where the Prophet ﷺ is told what to say if they argue with him: I have submitted myself to Allah, and so have those who follow me. The surah is Madinan, and Ibn Ishaq relates that its opening, a little over eighty verses, came down concerning the Christian delegation from Najran. Between the portrait of the God-fearing and the instruction on disputes, this passage states the ground both of them stand on.",
            "bn": "এই দুটি আয়াত এসেছে ৩:১৫-১৭ আয়াতের পরে, যেখানে আল্লাহভীরু আর শেষ রাতে ইস্তিগফারকারীদের বর্ণনা ছিল। আর ৩:২০ আয়াতের আগে, যেখানে নবী ﷺ-কে বলে দেওয়া হয়েছে তারা তর্ক করলে কী বলতে হবে: আমি আল্লাহর কাছে আত্মসমর্পণ করেছি, আর যারা আমার অনুসরণ করে তারাও। সূরাটি মাদানি। ইবনে ইসহাক বর্ণনা করেন, এর শুরুর আশির কিছু বেশি আয়াত নাজিল হয়েছিল নাজরানের খ্রিস্টান প্রতিনিধিদলকে কেন্দ্র করে। আল্লাহভীরুদের ছবি আর বিতর্কের নির্দেশনার মাঝখানে এই অংশ বলে দেয়, দুটোই কোন জমিনের ওপর দাঁড়িয়ে।"
          },
          {
            "en": "What follows keeps the passage tied to history. 3:21 to 3:25 speak of those who disbelieve in Allah's signs, of a party who turn away when they are invited to the Book of Allah to judge between them, and of a Day when every soul will be paid in full what it earned. So the testimony of 3:18 is not an abstract creed. It is set down in the middle of a surah about argument, about Scripture and those entrusted with it, and about how people who already have knowledge still divide.",
            "bn": "এরপর যা আসে, তা অংশটিকে ইতিহাসের সঙ্গে বেঁধে রাখে। ৩:২১ থেকে ৩:২৫ আয়াত বলে তাদের কথা, যারা আল্লাহর আয়াত অস্বীকার করে। বলে এমন একদলের কথা, যাদের আল্লাহর কিতাবের দিকে ডাকা হয় যাতে তা তাদের মধ্যে ফয়সালা করে, আর তারা মুখ ফিরিয়ে নেয়। আর বলে সেই দিনের কথা, যেদিন প্রত্যেককে তার অর্জনের পুরো প্রতিদান দেওয়া হবে। তাই ৩:১৮ আয়াতের সাক্ষ্য কোনো বিমূর্ত আকিদার বাক্য নয়। একে বসানো হয়েছে এমন এক সূরার মাঝখানে, যার বিষয় বিতর্ক, কিতাব আর তার আমানতদার, আর জ্ঞান পাওয়ার পরও মানুষ কীভাবে ভাগ হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Testimony, Justice, Submission",
          "bn": "সাক্ষ্য, ইনসাফ, আত্মসমর্পণ"
        },
        "p": [
          {
            "en": "Shahida Allah: Allah testifies. A shahadah is a statement made on the basis of seeing and knowing, and here the witness is the One who knows everything. What He testifies to is the sentence at the centre of the religion: that there is no deity except Him. The angels are joined to the testimony, and then ulu al-'ilm, those of knowledge. Knowledge, not rank or lineage, is what earns a human being a place in that line of witnesses.",
            "bn": "‘শাহিদাল্লাহ’: আল্লাহ সাক্ষ্য দেন। শাহাদাহ হলো দেখে ও জেনে দেওয়া বক্তব্য, আর এখানে সাক্ষী তিনি, যিনি সবকিছু জানেন। তিনি সাক্ষ্য দিচ্ছেন দ্বীনের কেন্দ্রের সেই বাক্যের পক্ষে: তিনি ছাড়া কোনো ইলাহ নেই। ফেরেশতাদের এই সাক্ষ্যে যুক্ত করা হয়েছে, তারপর ‘উলুল ইলম’, জ্ঞানের অধিকারীদের। সাক্ষীদের এই সারিতে মানুষকে জায়গা করে দেয় জ্ঞান। পদমর্যাদা নয়, বংশও নয়।"
          },
          {
            "en": "Qa'iman bil-qist describes Allah as maintaining justice, upholding it continually rather than establishing it once. Ibn Kathir reads it as a hal describing Allah's state: He is always and in every state like this. This app's Bengali translation attaches it to those of knowledge instead. Then the verse repeats la ilaha illa huwa before closing with the Exalted in Might, the Wise. The first occurrence is the content of the testimony, and the second, coming after justice is named, sounds as its confirmation. In 3:19 the weight falls on ad-din, a word that covers religion, obedience and recompense, and on al-Islam, from the root s-l-m, surrender and soundness.",
            "bn": "‘কাইমাম বিল কিসত’ আল্লাহর পরিচয় দেয় ইনসাফ ধরে রাখা সত্তা হিসেবে। একবার প্রতিষ্ঠা করে সরে যাওয়া নয়, প্রতিনিয়ত তা বজায় রাখা। ইবনে কাসীর শব্দটিকে আল্লাহর অবস্থা বোঝানো ‘হাল’ হিসেবে পড়েন, অর্থাৎ তিনি সদা ও সর্বাবস্থায় এমনই। তাফসীরে আহসানুল বায়ানও অনুবাদ করেছে ‘তিনি ন্যায় প্রতিষ্ঠাকারী’। তবে এই অ্যাপের বাংলা অনুবাদে শব্দগুচ্ছটি জ্ঞানীদের সঙ্গে জুড়ে পড়া হয়েছে: ‘ন্যায়নীতিতে প্রতিষ্ঠিত জ্ঞানীগণ’। তারপর আয়াত আবার বলে ‘লা ইলাহা ইল্লা হুয়া’, আর শেষ হয় মহাপরাক্রমশালী ও প্রজ্ঞাময় নামে। প্রথমবারের কথাটা সাক্ষ্যের বিষয়বস্তু। দ্বিতীয়বার আসে ইনসাফের উল্লেখের পরে, আর শোনায় তার সত্যায়নের মতো। ৩:১৯ আয়াতে ভার পড়ে ‘আদ-দ্বীন’ শব্দের ওপর, যার অর্থের মধ্যে ধর্ম, আনুগত্য আর প্রতিদান সবই পড়ে। আর ‘আল-ইসলাম’ শব্দের ওপর, স-ল-ম মূল থেকে, যার অর্থ আত্মসমর্পণ, আবার নিরাপদ ও অক্ষত থাকা।"
          },
          {
            "en": "The second half of 3:19 names a failure precisely. Those given the Scripture did not differ except after knowledge had come to them, baghyan baynahum, out of rivalry among themselves. Baghy is to go beyond a limit, to seek to be over another. The construction of negation and exception, ma and then illa, shuts out every other explanation. The division did not come from a lack of knowledge. It came afterwards, and it came from within.",
            "bn": "৩:১৯ আয়াতের দ্বিতীয় অর্ধেক এক ব্যর্থতার নাম দেয় একেবারে নিখুঁতভাবে। যাদের কিতাব দেওয়া হয়েছিল, তারা মতভেদ করেছে কেবল জ্ঞান আসার পরে, ‘বাগইয়াম বাইনাহুম’, নিজেদের মধ্যে রেষারেষি থেকে। ‘বাগই’ মানে সীমা ছাড়িয়ে যাওয়া, অন্যের ওপরে উঠতে চাওয়া। না-বাচক শব্দ ‘মা’ আর তারপর ব্যতিক্রমের ‘ইল্লা’, এই গঠন অন্য সব ব্যাখ্যার দরজা বন্ধ করে দেয়। ভাগ হওয়াটা জ্ঞানের অভাব থেকে আসেনি। এসেছে জ্ঞান আসার পরে, আর এসেছে ভেতর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Scholars, Two Readings",
          "bn": "দুই মুফাসসির, দুই কিরাআত"
        },
        "p": [
          {
            "en": "Ibn Kathir notes that Allah is sufficient as a witness, the most truthful and most just of witnesses, and says that joining the people of knowledge to the angels here is a great distinction for the scholars. On 3:19 he explains that no religion is accepted from anyone besides Islam, which is following the messengers in what Allah sent each of them with in their time, until they were sealed by Muhammad ﷺ; after his mission, it is following him. He sets 3:85 beside it, where whoever desires other than Islam as religion, it will never be accepted from him.",
            "bn": "ইবনে কাসীর মনে করিয়ে দেন, সাক্ষী হিসেবে আল্লাহই যথেষ্ট, তিনি সাক্ষীদের মধ্যে সবচেয়ে সত্যবাদী ও সবচেয়ে ন্যায়পরায়ণ। আর বলেন, এখানে ফেরেশতাদের সঙ্গে জ্ঞানীদের যুক্ত করা আলিমদের জন্য বড় মর্যাদা। ৩:১৯ আয়াতে তিনি ব্যাখ্যা করেন, ইসলাম ছাড়া কারও কাছ থেকে কোনো দ্বীন কবুল করা হয় না। আর ইসলাম হলো প্রত্যেক যুগে আল্লাহ রাসূলদের যা দিয়ে পাঠিয়েছেন তার অনুসরণ, মুহাম্মাদ ﷺ-কে দিয়ে রাসূলদের ধারা শেষ হওয়া পর্যন্ত। তাঁর আগমনের পরে ইসলাম মানে তাঁর অনুসরণ। তিনি এর পাশে রাখেন ৩:৮৫ আয়াত: কেউ ইসলাম ছাড়া অন্য কোনো দ্বীন চাইলে তা কখনো কবুল করা হবে না।"
          },
          {
            "en": "At-Tabari explains al-Islam as submission to Allah with humility and obedience. On the second half of the verse he relays differing views on which community is meant, the Jews or the Christians, and the verse's own words, those who were given the Scripture, can cover whoever received a Book and divided over it. He reads baghy as envy and the wish to dominate one another, which is why the verse places the division after the proof arrived and not before.",
            "bn": "আত-তাবারী ‘আল-ইসলাম’ শব্দের ব্যাখ্যা করেন বিনয় ও আনুগত্যের সঙ্গে আল্লাহর কাছে আত্মসমর্পণ হিসেবে। আয়াতের দ্বিতীয় অর্ধেকে কোন সম্প্রদায়ের কথা বলা হয়েছে, এ নিয়ে তিনি ভিন্ন ভিন্ন মত উল্লেখ করেন: ইহুদি নাকি খ্রিস্টান। আয়াতের নিজের শব্দ, যাদের কিতাব দেওয়া হয়েছিল, এমন যে কাউকেই ধরতে পারে, যে কিতাব পেয়ে তা নিয়ে ভাগ হয়ে গেছে। ‘বাগই’ শব্দকে তিনি পড়েন হিংসা আর একে অন্যের ওপর কর্তৃত্বের আকাঙ্ক্ষা হিসেবে। এ কারণেই আয়াত বিভক্তিকে রেখেছে প্রমাণ আসার পরে, আগে নয়।"
          },
          {
            "en": "One of the canonical readings, that of al-Kisa'i, recites the opening of 3:19 as anna ad-dina rather than inna ad-dina. On that reading the clause is grammatically joined to the testimony of 3:18: Allah testifies that there is no deity except Him, and that the religion with Allah is Islam. The other readers begin 3:19 as a fresh statement. Both are recited, and between them the two verses can be heard as a single testimony and as a testimony followed by what it requires.",
            "bn": "কুরআনের স্বীকৃত কিরাআতগুলোর একটিতে, কারী আল-কিসাঈর কিরাআতে, ৩:১৯ আয়াতের শুরু পড়া হয় ‘আন্নাদ দ্বীনা’, ‘ইন্নাদ দ্বীনা’ নয়। এই পাঠে বাক্যটি ব্যাকরণের দিক থেকে ৩:১৮ আয়াতের সাক্ষ্যের সঙ্গে জুড়ে যায়: আল্লাহ সাক্ষ্য দেন যে তিনি ছাড়া কোনো ইলাহ নেই, এবং আল্লাহর কাছে দ্বীন হলো ইসলাম। অন্য কারীরা ৩:১৯ আয়াত শুরু করেন নতুন বক্তব্য হিসেবে। দুটো পাঠই তিলাওয়াত করা হয়। দুটো মিলিয়ে আয়াত দুটি শোনা যায় একটিমাত্র সাক্ষ্য হিসেবেও, আবার একটি সাক্ষ্য আর তার দাবি হিসেবেও।"
          }
        ]
      },
      {
        "h": {
          "en": "What This Islam Is",
          "bn": "এই ইসলাম কী"
        },
        "p": [
          {
            "en": "Muslim records from Umar ibn al-Khattab (RA) the report of the man in very white clothes who came to the Prophet ﷺ and asked him about Islam, and whom the Prophet ﷺ later named as Jibril (AS). The Prophet ﷺ answered that Islam is to testify that there is no deity but Allah and that Muhammad is the Messenger of Allah, to establish the prayer, to give the zakah, to fast Ramadan, and to make the pilgrimage to the House if you are able. The testimony of 3:18 is the first pillar of the religion named in 3:19.",
            "bn": "মুসলিম উমর ইবনুল খাত্তাব (রাঃ) থেকে সেই ধবধবে সাদা পোশাকের মানুষটির ঘটনা বর্ণনা করেন, যিনি নবী ﷺ-এর কাছে এসে ইসলাম সম্পর্কে জানতে চেয়েছিলেন। পরে নবী ﷺ জানিয়ে দেন, তিনি ছিলেন জিবরীল (আঃ)। নবী ﷺ উত্তর দিয়েছিলেন, ইসলাম হলো এই সাক্ষ্য দেওয়া যে আল্লাহ ছাড়া কোনো ইলাহ নেই আর মুহাম্মাদ আল্লাহর রাসূল, নামাজ কায়েম করা, যাকাত দেওয়া, রমজানের রোজা রাখা, আর সামর্থ্য থাকলে বাইতুল্লাহর হজ করা। ৩:১৮ আয়াতের সাক্ষ্যই ৩:১৯ আয়াতে নাম নেওয়া দ্বীনের প্রথম স্তম্ভ।"
          },
          {
            "en": "A second narration explains how one religion runs through many prophets. Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said he is the closest of people to Isa son of Maryam (AS), and that the prophets are brothers of one father, their mothers different and their religion one. The laws differed from one messenger to the next, and the submission did not. That is why Ibn Kathir can say that in every age Islam meant following the messenger of that age.",
            "bn": "দ্বিতীয় হাদিসটি ব্যাখ্যা করে, এক দ্বীন কীভাবে বহু নবীর ভেতর দিয়ে বয়ে গেছে। বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, মারইয়ামের পুত্র ঈসা (আঃ)-এর সবচেয়ে কাছের মানুষ তিনি। আর নবীরা এক পিতার সন্তান ভাই, তাঁদের মা ভিন্ন ভিন্ন, আর তাঁদের দ্বীন এক। এক রাসূল থেকে আরেক রাসূলে শরিয়ত বদলেছে, আত্মসমর্পণ বদলায়নি। এ কারণেই ইবনে কাসীর বলতে পারেন, প্রত্যেক যুগে ইসলাম মানে ছিল সেই যুগের রাসূলের অনুসরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "One Religion, Many Messengers",
          "bn": "এক দ্বীন, বহু রাসূল"
        },
        "p": [
          {
            "en": "3:85, later in the same surah, states the consequence plainly: whoever desires other than Islam as religion, it will never be accepted from him. 3:67 applies the word to Ibrahim (AS), who was neither a Jew nor a Christian but one inclining toward truth, a Muslim. 10:84 has Musa (AS) telling his people to rely on Allah if they are Muslims, and in 3:52 the disciples of Isa (AS) say that they have believed in Allah, and call on him to bear witness that they are Muslims.",
            "bn": "একই সূরার পরের দিকে ৩:৮৫ আয়াত ফলাফলটা সোজাসুজি বলে: কেউ ইসলাম ছাড়া অন্য দ্বীন চাইলে তা কখনো কবুল করা হবে না। ৩:৬৭ আয়াত এই শব্দটি প্রয়োগ করে ইবরাহীম (আঃ)-এর ওপর: তিনি ইহুদি ছিলেন না, খ্রিস্টানও না, ছিলেন একনিষ্ঠ, আত্মসমর্পণকারী মুসলিম। ১০:৮৪ আয়াতে মূসা (আঃ) নিজের কওমকে বলেন, তোমরা মুসলিম হলে আল্লাহর ওপর ভরসা করো। আর ৩:৫২ আয়াতে ঈসা (আঃ)-এর হাওয়ারিরা বলেন, তাঁরা আল্লাহর ওপর ঈমান এনেছেন, আর ঈসা (আঃ)-কে সাক্ষী থাকতে বলেন যে তাঁরা মুসলিম।"
          },
          {
            "en": "On the dividing, 42:14 and 45:17 repeat the diagnosis almost word for word: they did not become divided, or did not differ, except after knowledge had come to them, out of jealous animosity between themselves. 98:4 says those given the Scripture did not become divided until clear evidence had come to them. And on the testimony, 4:166 says that Allah bears witness to what He has revealed, that the angels bear witness too, and that Allah is sufficient as Witness.",
            "bn": "বিভক্তির ব্যাপারে ৪২:১৪ ও ৪৫:১৭ আয়াত প্রায় একই ভাষায় রোগটা ধরিয়ে দেয়: তারা ভাগ হয়েছে, বা মতভেদ করেছে, কেবল জ্ঞান আসার পরে, নিজেদের মধ্যে বাড়াবাড়ি আর জেদের কারণে। ৯৮:৪ আয়াত বলে, যাদের কিতাব দেওয়া হয়েছিল তারা বিভক্ত হয়েছে সুস্পষ্ট প্রমাণ আসার পরেই। আর সাক্ষ্যের ব্যাপারে ৪:১৬৬ আয়াত বলে, আল্লাহ নিজে সাক্ষ্য দেন তিনি যা নাজিল করেছেন তার পক্ষে, ফেরেশতারাও সাক্ষ্য দেয়, আর সাক্ষী হিসেবে আল্লাহই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining the Witnesses",
          "bn": "সাক্ষীদের সারিতে দাঁড়ানো"
        },
        "p": [
          {
            "en": "The verse changes what the shahadah feels like on the tongue. When you say la ilaha illa Allah in the prayer, after the adhan or on waking, you are not originating a claim. You are adding your voice to a testimony Allah has already given and the angels already bear. That makes it humbler, because you are the last and least of the witnesses, and firmer, because you are not standing alone.",
            "bn": "এই আয়াত জিহ্বায় শাহাদাহর অনুভূতিটাই বদলে দেয়। নামাজে, আজানের পরে কিংবা ঘুম থেকে উঠে যখন ‘লা ইলাহা ইল্লাল্লাহ’ বলেন, তখন আপনি নিজে নতুন কোনো দাবি তুলছেন না। আল্লাহ যে সাক্ষ্য আগেই দিয়েছেন আর ফেরেশতারা যে সাক্ষ্য দিয়ে চলেছেন, তাতে নিজের কণ্ঠ যোগ করছেন। এতে কথাটা হয় আরও বিনয়ী, কারণ সাক্ষীদের মধ্যে আপনি সবার শেষে আর সবচেয়ে ছোট। আবার আরও দৃঢ়ও হয়, কারণ আপনি একা দাঁড়িয়ে নেই।"
          },
          {
            "en": "The second half of 3:19 is a warning to people with knowledge, which includes anyone who has studied even a little. When a disagreement with another believer grows heated, ask honestly whether the heat comes from evidence or from wanting to be over the other person. Say what you hold and why, and give up the pleasure of winning. The verse places the ruin of communities that had Scripture not in ignorance but in rivalry after knowledge.",
            "bn": "৩:১৯ আয়াতের দ্বিতীয় অর্ধেক জ্ঞানওয়ালাদের জন্য সতর্কবাণী, আর যে সামান্যও পড়াশোনা করেছে সে-ও এর মধ্যে পড়ে। অন্য কোনো মুমিনের সঙ্গে মতভেদ যখন উত্তপ্ত হয়ে ওঠে, সৎভাবে নিজেকে জিজ্ঞেস করুন, উত্তাপটা দলিল থেকে আসছে, নাকি অন্যজনের ওপরে থাকার ইচ্ছা থেকে। আপনি কী মনে করেন আর কেন, সেটা বলুন। জিতে যাওয়ার মজাটা ছেড়ে দিন। কিতাব পাওয়া জাতিগুলোর সর্বনাশ আয়াত খুঁজে পায় অজ্ঞতায় নয়, জ্ঞান আসার পরের রেষারেষিতে।"
          },
          {
            "en": "And qa'iman bil-qist gives a daily measure. The One you testify to maintains justice, so a testimony to Him that sits comfortably beside injustice in your own dealings contradicts itself. Check the small places first: a wage paid late, a word shaded in your own favour, a relative treated unfairly in a division of property or of attention. Setting those right is part of what the testimony asks.",
            "bn": "আর ‘কাইমাম বিল কিসত’ প্রতিদিনের একটা মাপকাঠি দেয়। আপনি যাঁর পক্ষে সাক্ষ্য দেন, তিনি ইনসাফ ধরে রাখেন। তাই নিজের লেনদেনে অবিচার রেখে তাঁর পক্ষে সাক্ষ্য দিলে সাক্ষ্যটা নিজেই নিজের বিরোধিতা করে। আগে ছোট জায়গাগুলো দেখুন: দেরিতে দেওয়া মজুরি, নিজের দিকে একটু হেলিয়ে বলা কথা, সম্পত্তি বা মনোযোগ ভাগ করতে গিয়ে কোনো আত্মীয়ের প্রতি অবিচার। এগুলো ঠিক করা সেই সাক্ষ্যেরই দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Written Among the Witnesses",
          "bn": "সাক্ষীদের সঙ্গে লিখে নিন"
        },
        "p": [
          {
            "en": "The Quran supplies the right prayer for someone who has heard this passage. 3:53 records the disciples of Isa (AS) saying: Rabbana amanna bima anzalta wa-ttaba'na ar-rasula faktubna ma'a ash-shahidin, Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses. Its last word comes from the same root as shahida in 3:18. Having heard that Allah, the angels and those of knowledge bear witness, the believer asks to be written in their company.",
            "bn": "এই অংশ যে শুনেছে, তার জন্য কুরআন নিজেই উপযুক্ত দোয়া দিয়ে রেখেছে। ৩:৫৩ আয়াতে ঈসা (আঃ)-এর হাওয়ারিদের দোয়া আছে: ‘রাব্বানা আমান্না বিমা আনযালতা ওয়াত্তাবা'নার রাসূলা ফাকতুবনা মাআশ শাহিদীন’, হে আমাদের রব, আপনি যা নাজিল করেছেন তার ওপর আমরা ঈমান এনেছি আর রাসূলের অনুসরণ করেছি, তাই আমাদের সাক্ষ্যদানকারীদের সঙ্গে লিখে নিন। এর শেষ শব্দটি ৩:১৮ আয়াতের ‘শাহিদা’ শব্দের মূল থেকেই। আল্লাহ, ফেরেশতা আর জ্ঞানীরা সাক্ষ্য দেন, এ কথা শোনার পর মুমিন চায় তাকেও তাঁদের সঙ্গে লিখে নেওয়া হোক।"
          },
          {
            "en": "12:101 supplies the ending such a life asks for. Yusuf (AS), at the height of his authority in Egypt and reunited with his family, prays: tawaffani musliman wa alhiqni bis-salihin, cause me to die a Muslim and join me with the righteous. Said together, the two supplications ask to be counted among the witnesses now, and to be found in submission at the end, which is exactly the path that runs from 3:18 into 3:19.",
            "bn": "১২:১০১ আয়াত দেয় এমন জীবনের কাঙ্ক্ষিত সমাপ্তির দোয়া। ইউসুফ (আঃ), যখন তাঁর হাতে ক্ষমতা আর পরিবার আবার তাঁর কাছে, তখন দোয়া করেন: ‘তাওয়াফফানী মুসলিমাও ওয়া আলহিকনী বিস সালিহীন’, আমাকে মুসলিম অবস্থায় মৃত্যু দিন আর নেককারদের সঙ্গে মিলিয়ে দিন। দুটো দোয়া একসঙ্গে পড়লে চাওয়া হয় এখন সাক্ষীদের মধ্যে গণ্য হওয়া, আর শেষে আত্মসমর্পিত অবস্থায় পাওয়া যাওয়া। ৩:১৮ থেকে ৩:১৯ আয়াতে যাওয়ার পথটাও ঠিক এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Witness Stands",
          "bn": "সাক্ষী কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "When I say there is no deity except Allah, do I say it as a claim of my own, or as my place in a testimony already given? Has what I have learned made me gentler, or has it handed me a new way to feel above others? In my last hard disagreement with another believer, was I following the evidence, or was I trying to win?",
            "bn": "আল্লাহ ছাড়া কোনো ইলাহ নেই, এ কথা আমি কীভাবে বলি? নিজের একটা দাবি হিসেবে, নাকি আগে থেকে দেওয়া এক সাক্ষ্যে নিজের জায়গা হিসেবে? যা শিখেছি তা কি আমাকে নরম করেছে, নাকি অন্যদের চেয়ে নিজেকে বড় ভাবার নতুন একটা উপায় হাতে তুলে দিয়েছে? অন্য কোনো মুমিনের সঙ্গে আমার শেষ কঠিন মতভেদে আমি কি দলিলের পেছনে ছিলাম, নাকি জিততে চাইছিলাম?"
          },
          {
            "en": "Is my Islam a name I carry, or a submission that shows in what I did today? Where in my dealings have I let injustice sit next to a testimony to the One who maintains justice? And if my life were taken today, would I be found in the state Yusuf (AS) asked to be found in when he prayed to die a Muslim?",
            "bn": "আমার ইসলাম কি কেবল একটা নাম যা আমি বয়ে বেড়াই, নাকি এমন আত্মসমর্পণ যা আজকের কাজে দেখা গেছে? আমার লেনদেনের কোন জায়গায় আমি অবিচারকে বসতে দিয়েছি ইনসাফ ধরে রাখা সত্তার পক্ষে দেওয়া সাক্ষ্যের ঠিক পাশে? আর আজই যদি আমার জীবন নিয়ে নেওয়া হয়, ইউসুফ (আঃ) মুসলিম অবস্থায় মৃত্যুর যে দোয়া করেছিলেন, আমাকে কি সেই অবস্থায় পাওয়া যাবে?"
          }
        ]
      }
    ]
  },
  "3:26-27": {
    "sections": [
      {
        "h": {
          "en": "A Du'a You Are Told to Say",
          "bn": "যে দোয়া বলতে বলা হয়েছে"
        },
        "p": [
          {
            "en": "The passage begins with qul, say. That single word changes its status. This is not a description of Allah that a reader may admire; it is a script placed in the mouth, words the believer is instructed to use. Then Allahumma, the vocative form Arabic reserves for addressing Allah — not ya Allah but Allahumma, a heavier and more formal call. The verse is teaching not only what to believe about sovereignty but how to speak to its Owner.",
            "bn": "অংশটি শুরু হয় কুল দিয়ে — বলো। এই একটি শব্দই এর মর্যাদা বদলে দেয়। এটি আল্লাহ সম্পর্কে এমন কোনো বর্ণনা নয় যা পাঠক কেবল প্রশংসা করবে; এটি মুখে তুলে দেওয়া একটি পাঠ, যে শব্দগুলো ব্যবহার করতে মুমিনকে নির্দেশ দেওয়া হয়েছে। এরপর আল্লাহুম্মা, আরবি যে সম্বোধনরূপটি কেবল আল্লাহর জন্যই রাখে — ইয়া আল্লাহ নয়, আল্লাহুম্মা, ভারী ও অধিকতর আনুষ্ঠানিক ডাক। আয়াত কেবল রাজত্ব সম্পর্কে কী বিশ্বাস করতে হবে তা শেখায় না, তার মালিকের সাথে কীভাবে কথা বলতে হবে তাও শেখায়।"
          },
          {
            "en": "Malik al-mulk is the title given: Owner of all dominion. Malik is the possessor, mulk is kingship or dominion itself, so the phrase means the One who owns kingship — not a king among kings but the Owner of the very thing kings hold. Everything a ruler has, he has on loan from the One being addressed. That is established before a single request is made.",
            "bn": "মালিকুল-মুলক — এই উপাধিটিই দেওয়া হয়েছে: সমস্ত রাজত্বের মালিক। মালিক অর্থ অধিকারী, আর মুলক অর্থ রাজত্ব নিজেই; তাই বাক্যাংশটির অর্থ, যিনি রাজত্বেরই মালিক — বাদশাহদের মধ্যে একজন বাদশাহ নন, বরং বাদশাহরা যা ধরে আছে তারই মালিক। শাসকের যা কিছু আছে, সবই যাঁকে সম্বোধন করা হচ্ছে তাঁর কাছ থেকে ধার নেওয়া। একটিও আবেদন করার আগেই এটি স্থির করে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Given, and Torn Away",
          "bn": "দেওয়া, আর ছিনিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Four movements follow in two pairs. Tu'ti al-mulka man tasha', You give dominion to whom You will; wa tanzi'u al-mulka mimman tasha', and You tear dominion away from whom You will. Nazaa is not a gentle taking. It is the verb for pulling something out by force, the way a stake is wrenched from the ground. The Arabic does not pretend that the fall of the powerful is quiet.",
            "bn": "এরপর আসে দুই জোড়ায় চারটি গতি। তু’তিল-মুলকা মান তাশা, তুমি যাকে ইচ্ছা রাজত্ব দাও; ওয়া তানযি‘উল-মুলকা মিম্মান তাশা, আর যার কাছ থেকে ইচ্ছা রাজত্ব ছিনিয়ে নাও। নাযা‘আ কোনো কোমল নেওয়া নয়। এটি সেই ক্রিয়া যা বোঝায় জোর করে কিছু উপড়ে ফেলা, যেভাবে মাটি থেকে খুঁটি টেনে তোলা হয়। ক্ষমতাবানের পতন যে নিঃশব্দ, আরবি তা দাবি করে না।"
          },
          {
            "en": "Then the pair that touches ordinary people: wa tu'izzu man tasha' wa tudhillu man tasha'. You give izzah to whom You will and dhillah to whom You will. Izzah is honour with strength in it — dignity that cannot be taken; dhillah is the state of being lowered. Four times the phrase man tasha', whomever You will, is repeated. The repetition removes any suggestion of a rule that could be worked out and exploited.",
            "bn": "এরপর সেই জোড়া যা সাধারণ মানুষকে স্পর্শ করে: ওয়া তু‘ইয্যু মান তাশা ওয়া তুযিল্লু মান তাশা। তুমি যাকে ইচ্ছা ইয্‌যত দাও, আর যাকে ইচ্ছা যিল্লতি দাও। ইয্‌যত হলো শক্তিমিশ্রিত সম্মান — এমন মর্যাদা যা কেড়ে নেওয়া যায় না; আর যিল্লতি হলো নিচু করে দেওয়া অবস্থা। চারবার পুনরাবৃত্ত হলো মান তাশা — যাকে তুমি ইচ্ছা করো। এই পুনরাবৃত্তি এমন কোনো নিয়মের ইঙ্গিত মুছে দেয় যা হিসাব করে বের করে কাজে লাগানো যেত।"
          }
        ]
      },
      {
        "h": {
          "en": "In Your Hand Is the Good",
          "bn": "কল্যাণ তোমারই হাতে"
        },
        "p": [
          {
            "en": "After four verbs, two of which describe removal and humbling, comes biyadika al-khayr — in Your hand is the good. Only good is ascribed. The commentators note this carefully: although the pairs include tearing away and abasing, the address does not attribute evil to Allah, and they take it as a lesson in the adab, the etiquette, of how He is spoken to and spoken of.",
            "bn": "চারটি ক্রিয়ার পরে, যার দুটি ছিনিয়ে নেওয়া ও নিচু করার কথা বলে, আসে বিয়াদিকাল-খায়র — কল্যাণ তোমারই হাতে। কেবল কল্যাণকেই আরোপ করা হলো। মুফাসসিরগণ বিষয়টি বিশেষভাবে লক্ষ্য করেন: যদিও জোড়াগুলোর মধ্যে ছিনিয়ে নেওয়া ও অপদস্থ করা আছে, সম্বোধনটি আল্লাহর প্রতি অকল্যাণ আরোপ করে না; আর তাঁরা একে আদব-এর শিক্ষা হিসেবে নেন, অর্থাৎ তাঁর সাথে ও তাঁকে নিয়ে কীভাবে কথা বলতে হয় তার শিষ্টাচার।"
          },
          {
            "en": "There is a second lesson underneath the etiquette. Losing rank, losing money, being brought low — from inside, none of these feels like khayr. The verse insists that the hand they come from holds only good, which shifts the question from what happened to what it is for. The clause closes innaka ala kulli shay'in qadir, You are over all things capable, sealing the address with power so that the confidence has something to rest on.",
            "bn": "এই শিষ্টাচারের নিচে আরেকটি শিক্ষা আছে। মর্যাদা হারানো, অর্থ হারানো, নিচে নেমে যাওয়া — ভেতর থেকে এর কোনোটিই খায়র বলে মনে হয় না। আয়াত জোর দিয়ে বলে, যে হাত থেকে এগুলো আসে সেই হাতে কেবল কল্যাণই আছে; ফলে প্রশ্নটি ‘কী ঘটল’ থেকে সরে গিয়ে ‘কীসের জন্য ঘটল’ হয়ে যায়। বাক্যাংশটি শেষ হয় ইন্নাকা ‘আলা কুল্লি শাইয়িন কাদীর দিয়ে — তুমি সবকিছুর ওপর ক্ষমতাবান; ক্ষমতার ঘোষণা দিয়ে সম্বোধন সিলমোহর করা হয়, যাতে আস্থার দাঁড়ানোর জায়গা থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Night, Day, Life, Death",
          "bn": "রাত, দিন, জীবন, মৃত্যু"
        },
        "p": [
          {
            "en": "In 3:27 the same power is shown at a scale nobody disputes. Tuliju al-layla fin-nahar wa tuliju an-nahara fil-layl — You make the night enter into the day and the day enter into the night. Walaja means to slip inside gradually. This is not a switch being thrown; it is the slow lengthening of one at the expense of the other across a year, a change so gradual that no one can name the day it happened.",
            "bn": "3:27 আয়াতে একই ক্ষমতা দেখানো হয় এমন মাপে যা নিয়ে কারো বিতর্ক নেই। তূলিজুল-লাইলা ফিন-নাহার ওয়া তূলিজুন-নাহারা ফিল-লাইল — তুমি রাতকে দিনে প্রবেশ করাও, আর দিনকে রাতে প্রবেশ করাও। ওয়ালাজা মানে ধীরে ধীরে ভেতরে ঢুকে পড়া। এটি সুইচ টিপে দেওয়া নয়; এটি সারা বছর ধরে একটির খরচে অন্যটির ধীর দীর্ঘায়ন — এমন ধীর পরিবর্তন যে কেউ বলতে পারে না কোন দিন তা ঘটল।"
          },
          {
            "en": "Then: wa tukhriju al-hayya min al-mayyit wa tukhriju al-mayyita min al-hayy, You bring the living out of the dead and the dead out of the living — the same statement Allah makes of Himself in 6:95, where it is set beside the splitting of the seed. And the passage ends wa tarzuqu man tasha'u bighayri hisab, You provide for whom You will without reckoning. Bighayri hisab is not merely generosity; it means the provision is not audited by anything we would recognise as a scale.",
            "bn": "এরপর: ওয়া তুখরিজুল-হাইয়া মিনাল-মাইয়িতি ওয়া তুখরিজুল-মাইয়িতা মিনাল-হাইয়, তুমি মৃত থেকে জীবিতকে বের করো আর জীবিত থেকে মৃতকে — একই কথা আল্লাহ নিজের সম্পর্কে বলেন 6:95 আয়াতে, যেখানে তা বীজ বিদীর্ণ করার পাশে রাখা হয়েছে। আর অংশটি শেষ হয় ওয়া তারযুকু মান তাশাউ বিগাইরি হিসাব দিয়ে — তুমি যাকে ইচ্ছা বেহিসাব রিজিক দাও। বিগাইরি হিসাব কেবল উদারতা নয়; এর মানে সেই রিজিক আমাদের চেনা কোনো মাপকাঠিতে যাচাই হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits, and Why",
          "bn": "কোথায় বসেছে, আর কেন"
        },
        "p": [
          {
            "en": "The verses fall in a passage of Ali Imran addressed to a community negotiating its place among stronger neighbours. Just before, 3:25 pictures the day when every soul is paid in full for what it earned. Just after, 3:28 warns believers against taking disbelievers as allies in preference to believers. Between a reminder of final accounting and a caution about alliances stands a declaration that honour is not in the gift of anyone whose favour might be sought.",
            "bn": "আয়াতগুলো আলে ইমরানের এমন এক অংশে পড়ে যা এমন এক সমাজকে সম্বোধন করছে, যে নিজের চেয়ে শক্তিশালী প্রতিবেশীদের মাঝে নিজের অবস্থান নিয়ে দর-কষাকষি করছে। ঠিক আগে, 3:25 সেই দিনের ছবি আঁকে যেদিন প্রত্যেককে তার উপার্জনের পূর্ণ প্রতিদান দেওয়া হবে। ঠিক পরে, 3:28 মুমিনদের সতর্ক করে মুমিনদের বাদ দিয়ে অবিশ্বাসীদের অভিভাবক বানানো থেকে। চূড়ান্ত হিসাবের স্মরণ আর মৈত্রীর সতর্কবার্তার মাঝখানে দাঁড়িয়ে আছে এই ঘোষণা যে, সম্মান তাদের দানের বিষয় নয় যাদের অনুগ্রহ চাওয়া হচ্ছে।"
          },
          {
            "en": "That reading is confirmed elsewhere: 63:8 states that izzah belongs to Allah, to His Messenger and to the believers. No sound report fixes a specific occasion of revelation for 3:26-27, and the commentators do not need one; the verses read as a general instruction in how a believer is to understand power. The majority treat them as a du'a in form as well as content, since the passage is framed as direct address from beginning to end.",
            "bn": "এই পাঠ অন্যত্রও নিশ্চিত হয়: 63:8 বলে, ইয্‌যত আল্লাহর, তাঁর রাসূলের ও মুমিনদের। 3:26-27 আয়াতের জন্য কোনো সহীহ বর্ণনা নির্দিষ্ট শানে নুযূল নির্ধারণ করে না, আর মুফাসসিরদের তার প্রয়োজনও নেই; আয়াতগুলো পড়া হয় ক্ষমতাকে মুমিন কীভাবে বুঝবে তার সাধারণ নির্দেশনা হিসেবে। অধিকাংশই এগুলোকে বিষয়বস্তুর পাশাপাশি রূপেও দোয়া হিসেবেই দেখেন, কারণ গোটা অংশটিই শুরু থেকে শেষ পর্যন্ত সরাসরি সম্বোধনে গাঁথা।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "আজ যেভাবে এটি জীবনে আসে"
        },
        "p": [
          {
            "en": "Because it opens with qul, this is one of the passages most naturally taken up as a personal du'a — memorised, said after prayer, said before a decision that depends on someone else's approval. Reciting it is a way of putting a name to the fear underneath a request. Most anxiety about work, money and standing is anxiety about who holds these things, and the verse answers that question before you ask for anything.",
            "bn": "কুল দিয়ে শুরু হওয়ায় এটি সেই অংশগুলোর একটি যা সবচেয়ে স্বাভাবিকভাবেই ব্যক্তিগত দোয়া হিসেবে গ্রহণ করা হয় — মুখস্থ করা, নামাজের পরে বলা, এমন কোনো সিদ্ধান্তের আগে বলা যা অন্য কারও অনুমোদনের ওপর নির্ভর করে। এটি পাঠ করা আসলে আবেদনের নিচে লুকিয়ে থাকা ভয়টির নাম ধরে ডাকার একটি উপায়। কাজ, অর্থ ও মর্যাদা নিয়ে বেশিরভাগ উদ্বেগ আসলে এই উদ্বেগ যে এগুলো কার হাতে; আর আয়াত কিছু চাওয়ার আগেই সেই প্রশ্নের জবাব দিয়ে দেয়।"
          },
          {
            "en": "It also works in both directions of fortune. In a rise it is a check: what was given can be wrenched away, and the pairing is stated in one breath. In a fall it is a rope: the same hand holds both, and only good is in it. Practically, that means less negotiating with people over what is not theirs to grant, and less bitterness at those who seem to have been given more. Their portion came from where yours does.",
            "bn": "ভাগ্যের দুই দিকেই এটি কাজ করে। উত্থানে এটি লাগাম: যা দেওয়া হয়েছে তা ছিনিয়েও নেওয়া যায়, আর জোড়াটি এক নিঃশ্বাসেই বলা হয়েছে। পতনে এটি দড়ি: একই হাত দুটোই ধরে আছে, আর সেই হাতে কেবল কল্যাণ। বাস্তবে এর মানে, যা দেওয়া মানুষের এখতিয়ারেই নেই তা নিয়ে মানুষের সাথে কম দর-কষাকষি, আর যাদের বেশি দেওয়া হয়েছে বলে মনে হয় তাদের প্রতি কম তিক্ততা। তাদের ভাগও সেখান থেকেই এসেছে যেখান থেকে তোমারটি আসে।"
          }
        ]
      }
    ]
  },
  "3:31": {
    "sections": [
      {
        "h": {
          "en": "A Claim Put to the Test",
          "bn": "একটি দাবির পরীক্ষা"
        },
        "p": [
          {
            "en": "Surah Al Imran came down in Madinah, in years of long argument with communities who insisted that they loved Allah and stood near to Him. Into that argument drops a short verse with the force of a rule. It opens with qul, Say — a command to the Prophet ﷺ to announce it aloud: if you love Allah, then follow me, and Allah will love you. A claim of loving Allah costs nothing to make; this verse quietly attaches a price to it.",
            "bn": "সূরা আলে ইমরান নাযিল হয় মদীনায়, এমন সব সম্প্রদায়ের সঙ্গে দীর্ঘ বিতর্কের বছরগুলোতে, যারা জোর দিয়ে বলত যে তারা আল্লাহকে ভালোবাসে এবং তাঁর নিকটে আছে। সেই বিতর্কের মধ্যে নেমে আসে একটি ছোট আয়াত, যার শক্তি একটি বিধানের মতো। এটি শুরু হয় 'কুল' — বলুন — দিয়ে; নবী ﷺ-কে প্রকাশ্যে ঘোষণার নির্দেশ: তোমরা যদি আল্লাহকে ভালোবাসো, তবে আমাকে অনুসরণ করো, আল্লাহ তোমাদের ভালোবাসবেন। আল্লাহকে ভালোবাসার দাবি করতে কিছুই খরচ হয় না; এই আয়াত নীরবে সেই দাবির সঙ্গে একটি মূল্য জুড়ে দেয়।"
          },
          {
            "en": "Ibn Kathir relates from al-Hasan al-Basri that people claimed to love Allah, so Allah tested them by this verse. Ibn Kathir then adds his own famous judgment: this noble verse rules against everyone who claims to love Allah yet does not walk the way of Muhammad ﷺ. The test is not there to shame anyone. It is there to rescue love from remaining a mood, and to turn it into something that can actually be lived.",
            "bn": "ইবনে কাসীর হাসান আল-বাসরী থেকে বর্ণনা করেন যে মানুষ আল্লাহকে ভালোবাসার দাবি করেছিল, তাই আল্লাহ এই আয়াত দিয়ে তাদের পরীক্ষা করলেন। এরপর ইবনে কাসীর নিজের বিখ্যাত রায়টি যোগ করেন: এই মহিমান্বিত আয়াত তার বিরুদ্ধে ফয়সালা দেয়, যে আল্লাহকে ভালোবাসার দাবি করে অথচ মুহাম্মাদ ﷺ-এর পথে চলে না। পরীক্ষাটি কাউকে লজ্জা দেওয়ার জন্য নয়। এটি আছে ভালোবাসাকে নিছক একটি অনুভূতির স্তরে পড়ে থাকা থেকে উদ্ধার করতে, আর তাকে এমন কিছুতে পরিণত করতে যা সত্যিই যাপন করা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grammar of the Promise",
          "bn": "প্রতিশ্রুতির ব্যাকরণ"
        },
        "p": [
          {
            "en": "The hinge of the verse is a single imperative verb: fattabi'uni, then follow me. The response, yuhbibkumu Allah, Allah will love you, is cast in the form Arabic uses for a result that follows directly from obeying a command. Notice also who loves whom. The sentence begins with your claimed love for Allah and answers with something greater — Allah's love for you. The commentators pause here: being loved by Him is a higher station than merely loving.",
            "bn": "আয়াতটির কব্জা একটি আদেশসূচক ক্রিয়াপদ: 'ফাত্তাবিউনী' — তবে আমাকে অনুসরণ করো। এর জবাব 'ইউহবিবকুমুল্লাহ' — আল্লাহ তোমাদের ভালোবাসবেন — আরবিতে সেই গঠনে বসানো, যা কোনো আদেশ পালনের সরাসরি ফল বোঝাতে ব্যবহৃত হয়। আরও লক্ষ করুন, কে কাকে ভালোবাসে। বাক্যটি শুরু হয় আল্লাহর প্রতি আপনার দাবিকৃত ভালোবাসা দিয়ে, আর উত্তর দেয় আরও বড় কিছু দিয়ে — আপনার প্রতি আল্লাহর ভালোবাসা। মুফাসসিরগণ এখানে থামেন: তাঁর ভালোবাসা পাওয়া কেবল ভালোবাসার চেয়ে উঁচু মর্যাদা।"
          },
          {
            "en": "Forgiveness is stitched to the promise: wa yaghfir lakum dhunubakum, and He will forgive you your sins. Then the verse closes with two names in their intensive forms, Ghafur and Rahim — vastly forgiving, constantly merciful. The order matters. The one who sets out to follow the Prophet ﷺ will still stumble, and the verse anticipates that before it happens. The path being described is for people who fail and return, not for people who never fall.",
            "bn": "প্রতিশ্রুতির সঙ্গে ক্ষমা সেলাই করে দেওয়া হয়েছে: 'ওয়া ইয়াগফির লাকুম যুনূবাকুম' — আর তিনি তোমাদের গুনাহ ক্ষমা করবেন। এরপর আয়াত শেষ হয় তীব্রতাবোধক গঠনের দুটি নামে — গাফূর ও রাহীম — অপার ক্ষমাশীল, নিরন্তর দয়ালু। এই ক্রমটি অর্থবহ। যে নবী ﷺ-কে অনুসরণে নামে, সে-ও হোঁচট খাবে, আর আয়াতটি তা ঘটার আগেই সেই কথা ধরে রাখে। এখানে যে পথের বর্ণনা, তা তাদের জন্য যারা ব্যর্থ হয়ে ফিরে আসে — তাদের জন্য নয় যারা কখনো পড়েই না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Following, Not Feeling",
          "bn": "অনুভূতি নয়, অনুসরণ কেন"
        },
        "p": [
          {
            "en": "The Quran consistently measures love by conduct. In 2:165 the believers are described as ashaddu hubban lillah, most intense in love for Allah, in a verse contrasting them with people who give created things the devotion He is owed. In 9:24 the Prophet ﷺ is told to warn those whose families, wealth, trade and homes are dearer to them than Allah, His Messenger and striving in His cause. In each place love is weighed by what a person actually prefers when interests collide.",
            "bn": "কুরআন ধারাবাহিকভাবে ভালোবাসাকে আচরণ দিয়ে মাপে। 2:165 আয়াতে মুমিনদের বর্ণনা করা হয়েছে 'আশাদ্দু হুব্বাল লিল্লাহ' — আল্লাহর প্রতি প্রগাঢ়তম ভালোবাসার অধিকারী — এমন এক আয়াতে যা তাদের বিপরীতে রাখে সেই লোকদের, যারা আল্লাহর প্রাপ্য নিষ্ঠা সৃষ্টিকে দিয়ে দেয়। 9:24 আয়াতে নবী ﷺ-কে বলা হয়েছে তাদের সতর্ক করতে, যাদের কাছে পরিবার, সম্পদ, ব্যবসা ও বাসস্থান আল্লাহ, তাঁর রাসূল ও তাঁর পথে সংগ্রামের চেয়ে প্রিয়। প্রতিটি জায়গায় ভালোবাসা মাপা হয় এই দিয়ে যে স্বার্থের সংঘাতে মানুষ আসলে কোনটিকে প্রাধান্য দেয়।"
          },
          {
            "en": "The Prophet ﷺ set the same standard for love of himself. Al-Bukhari narrates from Anas (RA) that he said: none of you believes until I am dearer to him than his father, his child and all of mankind. That is not a demand for emotion manufactured on command; it is a description of what happens when a person grasps who the Messenger ﷺ is and what reached them through him. Love of that kind naturally issues in following.",
            "bn": "নিজের প্রতি ভালোবাসার জন্যও নবী ﷺ একই মানদণ্ড রেখেছেন। বুখারী আনাস (রাঃ) থেকে বর্ণনা করেন, তিনি বলেছেন: তোমাদের কেউ মুমিন হবে না, যতক্ষণ না আমি তার কাছে তার পিতা, তার সন্তান ও সমস্ত মানুষের চেয়ে প্রিয় হই। এটি হুকুম করে আবেগ তৈরির দাবি নয়; এটি সেই অবস্থার বর্ণনা, যা ঘটে যখন কেউ উপলব্ধি করে রাসূল ﷺ কে এবং তাঁর মাধ্যমে তার কাছে কী পৌঁছেছে। এমন ভালোবাসা স্বাভাবিকভাবেই অনুসরণে গড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Next Verse Closes the Loop",
          "bn": "পরের আয়াত বৃত্তটি পূর্ণ করে"
        },
        "p": [
          {
            "en": "The verse that follows, 3:32, commands: say, obey Allah and the Messenger — and then warns that if they turn away, Allah does not love the disbelievers. Read together, the pair leaves no gap for a love that refuses obedience. The first verse states the positive law, that following brings Allah's love; the second states its shadow, that turning away forfeits it. Between them, love has been moved from the realm of words into the realm of decisions.",
            "bn": "পরবর্তী আয়াত 3:32 নির্দেশ দেয়: বলুন, আল্লাহ ও রাসূলের আনুগত্য করো — তারপর সতর্ক করে যে তারা মুখ ফিরিয়ে নিলে আল্লাহ কাফিরদের ভালোবাসেন না। একসঙ্গে পড়লে এই জোড়া এমন কোনো ভালোবাসার জায়গা রাখে না, যা আনুগত্য অস্বীকার করে। প্রথম আয়াতটি ইতিবাচক বিধান বলে — অনুসরণ আল্লাহর ভালোবাসা আনে; দ্বিতীয়টি বলে তার ছায়া — মুখ ফেরালে তা হারায়। এ দুয়ের মাঝে ভালোবাসা কথার জগৎ থেকে সিদ্ধান্তের জগতে সরে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Following Looks Like",
          "bn": "অনুসরণ দেখতে কেমন"
        },
        "p": [
          {
            "en": "Ittiba', following, is not imitation of dress alone or admiration from a distance. The commentators describe it as taking the Prophet ﷺ as the pattern in worship, dealings and character — praying as he prayed, trading honestly as he demanded, restraining the tongue as he taught. It also has a guarding edge: whoever truly follows does not add to the religion acts of devotion he never sanctioned. Sincerity aims the deed at Allah; conformity to the Sunnah gives the deed its correct shape.",
            "bn": "ইত্তিবা — অনুসরণ — কেবল পোশাকের অনুকরণ বা দূর থেকে মুগ্ধতা নয়। মুফাসসিরগণ এর বর্ণনা দেন এভাবে: ইবাদতে, লেনদেনে ও চরিত্রে নবী ﷺ-কে আদর্শ হিসেবে গ্রহণ করা — তিনি যেভাবে নামায পড়েছেন সেভাবে পড়া, তিনি যেমন দাবি করেছেন তেমন সততায় ব্যবসা করা, তিনি যেমন শিখিয়েছেন তেমনভাবে জিহ্বা সংযত রাখা। এর একটি রক্ষাকারী ধারও আছে: যে সত্যিকার অনুসরণ করে, সে দ্বীনে এমন ইবাদত যোগ করে না যা তিনি কখনো অনুমোদন করেননি। ইখলাস আমলকে আল্লাহর দিকে তাক করে; সুন্নাহর অনুসরণ আমলকে দেয় তার সঠিক আকৃতি।"
          },
          {
            "en": "This is why the scholars kept returning to this verse whenever devotion drifted into invention. The question it teaches us to ask is disarmingly concrete: is this act, this habit, this stance something the Prophet ﷺ did, commanded or approved? The verse does not ask how warm the feeling behind the act was. It asks whose footsteps the act is walking in, and it promises that the footsteps of the Messenger ﷺ lead to being loved by Allah.",
            "bn": "এ কারণেই আলিমগণ বারবার এই আয়াতে ফিরে এসেছেন, যখনই ভক্তি নতুন উদ্ভাবনের দিকে ভেসে গেছে। আয়াতটি আমাদের যে প্রশ্ন করতে শেখায় তা অবাক করা রকমের বাস্তব: এই কাজ, এই অভ্যাস, এই অবস্থান — এটি কি নবী ﷺ করেছেন, আদেশ করেছেন বা অনুমোদন করেছেন? আয়াতটি জিজ্ঞেস করে না কাজের পেছনের অনুভূতি কতটা উষ্ণ ছিল। এটি জিজ্ঞেস করে কাজটি কার পদাঙ্ক ধরে হাঁটছে, আর প্রতিশ্রুতি দেয় যে রাসূল ﷺ-এর পদাঙ্ক আল্লাহর ভালোবাসা পাওয়ার দিকে নিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Verse",
          "bn": "আয়াতটি যাপন করা"
        },
        "p": [
          {
            "en": "The practical entry point is small: choose one Sunnah you currently neglect — the manner of eating, the words before sleeping, the two rak'ahs before Fajr — and adopt it deliberately because he ﷺ did it. Done with that intention, an ordinary habit becomes an act of love with a promise attached. Then let the verse audit you gently over time: when my preference and his teaching part ways, which one do I actually follow?",
            "bn": "বাস্তবে শুরু করার জায়গাটি ছোট: এমন একটি সুন্নাহ বেছে নিন যা আপনি এখন অবহেলা করছেন — খাওয়ার আদব, ঘুমের আগের বাক্যগুলো, ফজরের আগের দুই রাকাত — আর তা সচেতনভাবে গ্রহণ করুন এই কারণে যে তিনি ﷺ তা করতেন। এই নিয়তে করলে একটি সাধারণ অভ্যাস হয়ে ওঠে প্রতিশ্রুতিযুক্ত এক ভালোবাসার আমল। তারপর আয়াতটিকে ধীরে ধীরে নিজের হিসাব নিতে দিন: আমার পছন্দ আর তাঁর শিক্ষা যখন আলাদা পথে যায়, আমি আসলে কোনটি অনুসরণ করি?"
          },
          {
            "en": "And hold on to the direction the promise flows. The verse does not leave you straining to produce love for a distant Lord; it shows you a road at whose end Allah loves you, forgives you and is named to you as Ghafur and Rahim. Every step of following is met from the other side. Few sentences in the Quran offer an exchange this generous for something this concrete, and it stands open to whoever begins today.",
            "bn": "আর প্রতিশ্রুতি কোন দিকে প্রবাহিত তা ধরে রাখুন। আয়াতটি আপনাকে দূরের কোনো প্রভুর জন্য ভালোবাসা তৈরির টানাপোড়েনে ফেলে রাখে না; এটি এমন এক পথ দেখায় যার শেষে আল্লাহ আপনাকে ভালোবাসেন, ক্ষমা করেন এবং নিজেকে পরিচয় দেন গাফূর ও রাহীম নামে। অনুসরণের প্রতিটি পদক্ষেপের জবাব আসে অন্য প্রান্ত থেকে। এত বাস্তব কিছুর বিনিময়ে এত উদার লেনদেনের প্রস্তাব কুরআনে খুব কম বাক্যেই আছে, আর যে আজ শুরু করে তার জন্য তা খোলা।"
          }
        ]
      }
    ]
  },
  "3:38": {
    "sections": [
      {
        "h": {
          "en": "There, in the Prayer Chamber",
          "bn": "সেখানেই, ইবাদতকক্ষে"
        },
        "p": [
          {
            "en": "The verse opens with a word of place. Hunalika, there, at that spot. What happened there is told in 3:37: Maryam had been placed in Zakariyya's (AS) care, and every time he entered upon her in the mihrab he found provision with her. He asked where it came from, and she answered that it was from Allah, who provides for whom He wills without reckoning.",
            "bn": "আয়াতটি শুরু হয় স্থানবাচক একটি শব্দ দিয়ে। হুনালিকা — সেখানে, ঠিক সেই জায়গায়। সেখানে কী ঘটেছিল তা বলা আছে 3:37-এ: মারইয়ামকে যাকারিয়া (আঃ)-এর তত্ত্বাবধানে রাখা হয়েছিল, আর তিনি যতবারই মিহরাবে তাঁর কাছে প্রবেশ করতেন, ততবারই তাঁর কাছে রিযিক দেখতে পেতেন। তিনি জিজ্ঞেস করতেন এ কোথা থেকে এলো, আর মারইয়াম উত্তর দিতেন — এ আল্লাহর পক্ষ থেকে, যিনি যাকে ইচ্ছা বেহিসাব রিযিক দেন।"
          },
          {
            "en": "So the prayer of 3:38 is not offered in a vacuum. It is offered on the spot where he had just been shown, repeatedly and without explanation, that provision does not depend on the usual channels. The verse ties his asking to that seeing with a single adverb, and the commentators read hunalika as covering the moment as well as the place: seeing that, he prayed then.",
            "bn": "কাজেই 3:38-এর দোয়া শূন্যে ভেসে থাকা কোনো প্রার্থনা নয়। এটি করা হয় ঠিক সেই জায়গায় দাঁড়িয়ে, যেখানে তাঁকে বারবার এবং কোনো ব্যাখ্যা ছাড়াই দেখানো হয়েছিল যে রিযিক চেনা পথের ওপর নির্ভর করে না। আয়াতটি একটিমাত্র ক্রিয়াবিশেষণ দিয়ে তাঁর চাওয়াকে সেই দেখার সঙ্গে বেঁধে দেয়; আর মুফাসসিরগণ হুনালিকা-কে স্থানের পাশাপাশি মুহূর্ত অর্থেও পড়েন: তা দেখেই তিনি তখন দোয়া করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Fruit Out of Season",
          "bn": "অসময়ের ফল"
        },
        "p": [
          {
            "en": "Ibn Kathir relates that what Zakariyya (AS) found with Maryam was fruit out of its season — the fruits of summer in winter and of winter in summer. That detail is why the sight moved him rather than merely pleasing him. He was not watching generosity; he was watching the ordinary rules of when a thing can arrive being set aside in a corner of the sanctuary he served in.",
            "bn": "ইবনে কাসীর বর্ণনা করেন, যাকারিয়া (আঃ) মারইয়ামের কাছে যা পেতেন তা ছিল অসময়ের ফল — শীতে গ্রীষ্মের ফল আর গ্রীষ্মে শীতের ফল। এই বিশদটুকুর কারণেই দৃশ্যটি তাঁকে কেবল খুশি করেনি, নাড়া দিয়েছিল। তিনি দেখছিলেন না নিছক দানশীলতা; তিনি দেখছিলেন — কোন জিনিস কখন আসতে পারে, সেই চেনা নিয়মটিই সরিয়ে রাখা হচ্ছে সেই ইবাদতগৃহেরই এক কোণে, যেখানে তিনি খিদমত করতেন।"
          },
          {
            "en": "His own situation is stated in his own words two verses later. In 3:40 he says he has reached old age and his wife is barren. A man in that position had every reason to treat what he saw as belonging to someone else's story. Instead he drew the general rule out of the particular case, and applied for its benefit himself.",
            "bn": "তাঁর নিজের অবস্থার কথা তাঁরই মুখে আসে দুই আয়াত পরে। 3:40-এ তিনি বলেন, তিনি বার্ধক্যে পৌঁছেছেন এবং তাঁর স্ত্রী বন্ধ্যা। এমন অবস্থায় থাকা একজন মানুষের কাছে যথেষ্ট কারণ ছিল যা দেখলেন তাকে অন্য কারও গল্পের অংশ ভেবে সরে যাওয়ার। তার বদলে তিনি বিশেষ ঘটনাটি থেকে সাধারণ নিয়মটি বের করে আনলেন, আর নিজের জন্যই তার সুফল প্রার্থনা করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Good Offspring",
          "bn": "উত্তম সন্তান"
        },
        "p": [
          {
            "en": "Hab li min ladunka dhurriyyatan tayyibah. Two qualifiers sit on this request and neither is about size. Min ladunka names the source: from what is with You. Tayyibah names the kind: wholesome, pure, good — the same adjective the Quran uses of speech, of food and of a life. He specifies quality and leaves everything else, including number and sex, unmentioned.",
            "bn": "হাব লী মিন লাদুনকা যুররিয়্যাতান তাইয়িবাহ। এই আবেদনের ওপর দুটি বিশেষণ বসে আছে, আর কোনোটিই পরিমাণ নিয়ে নয়। মিন লাদুনকা উৎসের নাম বলে: তোমার কাছে যা আছে তা থেকে। তাইয়িবাহ ধরনটির নাম বলে: পবিত্র, বিশুদ্ধ, উত্তম — কুরআন এই একই বিশেষণ ব্যবহার করে কথার জন্য, খাদ্যের জন্য এবং জীবনের জন্য। তিনি গুণ নির্দিষ্ট করে দেন, আর আরবিতে সংখ্যা বা লিঙ্গ কিছুই উল্লেখ করেন না।"
          },
          {
            "en": "The word dhurriyyah is worth weighing too. It means offspring in the sense of a line continuing, not simply a child in the house. Zakariyya (AS) was a servant of the sanctuary with no one to carry the work on, and what he asks for is a good continuation. Ibn Kathir glosses tayyibah plainly as righteous offspring, which is the only kind of continuation worth having.",
            "bn": "যুররিয়্যাহ শব্দটিও ওজন করার মতো। এর অর্থ সন্তান — তবে বংশধারার ধারাবাহিকতা অর্থে, নিছক ঘরের একটি শিশু অর্থে নয়। যাকারিয়া (আঃ) ছিলেন ইবাদতগৃহের একজন খাদিম, যাঁর কাজটি এগিয়ে নেওয়ার কেউ ছিল না; আর তিনি চান একটি উত্তম ধারাবাহিকতা। ইবনে কাসীর তাইয়িবাহ-এর অর্থ সরাসরিই করেন সৎকর্মশীল সন্তান — আর কেবল এমন ধারাবাহিকতারই মূল্য আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearer of Supplication",
          "bn": "দোয়া শ্রবণকারী"
        },
        "p": [
          {
            "en": "The prayer closes on a reason: innaka Sami'u ad-du'a, indeed You are the Hearer of supplication. This is not a claim that this particular request will be granted. It is a participle describing what Allah always is, offered as the ground on which any request can be made at all. The asking rests on a permanent attribute rather than on a private expectation.",
            "bn": "দোয়াটি শেষ হয় একটি কারণ দিয়ে: ইন্নাকা সামীউদ দুআ — নিশ্চয় তুমি দোয়া শ্রবণকারী। এটি এই দাবি নয় যে এই নির্দিষ্ট চাওয়াটি মঞ্জুর হবে। এটি একটি কর্তৃবাচক বিশেষণ, যা বলে আল্লাহ সর্বদা কী — আর তা পেশ করা হয় সেই ভিত্তি হিসেবে, যার ওপর দাঁড়িয়ে আদৌ কিছু চাওয়া যায়। চাওয়াটি দাঁড়িয়ে আছে একটি স্থায়ী গুণের ওপর, কোনো ব্যক্তিগত প্রত্যাশার ওপর নয়।"
          },
          {
            "en": "The phrase Sami' ad-du'a occurs in exactly two verses of the Quran. The other is 14:39, where Ibrahim (AS) uses it after Isma'il and Ishaq had been given to him in old age. One prophet says it before the answer comes and one says it after. The description does not change with the outcome, which is precisely why it can be leaned on beforehand.",
            "bn": "সামীউদ দুআ বাক্যাংশটি কুরআনের ঠিক দুটি আয়াতে এসেছে। অন্যটি 14:39, যেখানে ইবরাহীম (আঃ) এটি ব্যবহার করেন বার্ধক্যে ইসমাঈল ও ইসহাক পাওয়ার পর। একজন নবী এটি বলেন উত্তর আসার আগে, আরেকজন বলেন উত্তর আসার পরে। ফলাফলের সঙ্গে বর্ণনাটি বদলায় না — আর ঠিক এ কারণেই আগেভাগেই এর ওপর ভর দেওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer Arrives Mid-Prayer",
          "bn": "নামাযের মধ্যেই উত্তর"
        },
        "p": [
          {
            "en": "3:39 gives the response, and its setting is exact: the angels called him while he was standing praying in the mihrab. He was not waiting for a reply somewhere else; he was in the middle of worship in the same chamber. The news is of Yahya, described as confirming a word from Allah, honourable, chaste, and a prophet from among the righteous.",
            "bn": "3:39 উত্তরটি দেয়, আর তার পরিবেশ একেবারে নির্দিষ্ট: ফেরেশতারা তাঁকে ডাকলেন যখন তিনি মিহরাবে দাঁড়িয়ে নামায পড়ছিলেন। তিনি অন্য কোথাও বসে জবাবের অপেক্ষা করছিলেন না; তিনি ছিলেন সেই একই কক্ষে, ইবাদতের মাঝখানে। সুসংবাদটি ইয়াহইয়াকে নিয়ে — যাঁর বর্ণনা দেওয়া হয়েছে আল্লাহর পক্ষ থেকে আসা এক কালিমার সত্যায়নকারী, সম্মানিত, সংযমী, আর সৎকর্মশীলদের মধ্য থেকে একজন নবী হিসেবে।"
          },
          {
            "en": "Then in 3:40 comes a very human sentence from the man who had just prayed: my Lord, how will I have a boy, when old age has reached me and my wife is barren? The answer given is not an explanation but a correction of scale: kadhalika, such is Allah; He does what He wills. The obstacle is not denied. It is simply placed in a smaller category.",
            "bn": "এরপর 3:40-এ যিনি সবে দোয়া করলেন, তাঁর মুখ থেকেই আসে খুব মানবিক একটি বাক্য: হে আমার প্রতিপালক, আমার ছেলে হবে কীভাবে, আমি তো বার্ধক্যে পৌঁছেছি আর আমার স্ত্রী বন্ধ্যা? যে উত্তর আসে তা ব্যাখ্যা নয়, বরং মাপকাঠির সংশোধন: কাযালিকা — আল্লাহ এমনই; তিনি যা ইচ্ছা করেন তা-ই করেন। বাধাটিকে অস্বীকার করা হয় না। কেবল তাকে একটি ছোট শ্রেণিতে বসিয়ে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sign That Was a Silence",
          "bn": "যে নিদর্শন ছিল নীরবতা"
        },
        "p": [
          {
            "en": "In 3:41 he asks for a sign and is given one: you will not speak to the people for three days except by gesture. Alongside it comes an instruction in the same breath — and remember your Lord much, and glorify Him in the evening and the morning. The tongue that could not be used for conversation was left entirely available for dhikr.",
            "bn": "3:41-এ তিনি একটি নিদর্শন চান এবং তা দেওয়া হয়: তিন দিন তুমি ইশারা ছাড়া মানুষের সঙ্গে কথা বলতে পারবে না। এর সঙ্গেই একই নিঃশ্বাসে আসে একটি নির্দেশ — আর তোমার প্রতিপালককে অধিক স্মরণ করো, এবং সকাল-সন্ধ্যায় তাঁর পবিত্রতা ঘোষণা করো। যে জিহ্বা কথাবার্তার জন্য ব্যবহার করা যাচ্ছিল না, তা পুরোপুরি খোলা রইল যিকরের জন্য।"
          },
          {
            "en": "The passage leaves a usable pattern. When you see Allah's generosity land on somebody else, treat it as evidence about the Giver rather than as a verdict about yourself. Ask for the quality of what you want and not the quantity. Ground the request in something true about Allah instead of in your own case. Then keep worshipping in the place you asked from.",
            "bn": "অংশটি একটি ব্যবহারযোগ্য কাঠামো রেখে যায়। আল্লাহর দান যখন অন্য কারও ওপর নামতে দেখেন, তখন তাকে নিজের সম্পর্কে রায় না ভেবে দাতার সম্পর্কে প্রমাণ হিসেবে নিন। যা চান তার পরিমাণ নয়, গুণটি চান। আবেদনটি নিজের অবস্থার ওপর নয়, আল্লাহ সম্পর্কে সত্য কোনো কথার ওপর দাঁড় করান। তারপর যে জায়গা থেকে চেয়েছিলেন, সেখানেই ইবাদত চালিয়ে যান।"
          }
        ]
      }
    ]
  },
  "3:45": {
    "sections": [
      {
        "h": {
          "en": "Three Times, O Maryam",
          "bn": "তিনবার ডাক: হে মারইয়াম"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and this verse stands inside the family history the surah has been telling since 3:33, where Allah chose Adam, Nuh, the family of Ibrahim and the family of Imran. The birth of Maryam and her upbringing in the care of Zakariyya (AS) fill 3:35-37, and his own prayer and its answer fill 3:38-41. Then the angels turn to her. In 3:42, 3:43 and 3:45 they address her by name, O Maryam, and each time something new opens: her choosing, her worship, and now the news.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা। ৩:৩৩ আয়াত থেকে সূরাটি একটি পরিবারের ইতিহাস বলে আসছে: আল্লাহ বেছে নিয়েছিলেন আদম, নূহ, ইবরাহীমের বংশ আর ইমরানের বংশকে। ৩:৩৫-৩৭ আয়াতে আছে মারইয়ামের জন্ম আর যাকারিয়া (আঃ)-র তত্ত্বাবধানে তাঁর বেড়ে ওঠা, ৩:৩৮-৪১ আয়াতে যাকারিয়া (আঃ)-র দোয়া আর তার জবাব। তারপর ফেরেশতারা ফেরেন মারইয়ামের দিকে। ৩:৪২, ৩:৪৩ আর ৩:৪৫ আয়াতে তাঁরা তাঁকে নাম ধরে ডাকেন, হে মারইয়াম। প্রতিবার খুলে যায় নতুন কিছু: আগে তাঁর মনোনয়ন, তারপর তাঁর ইবাদত, আর এবার সুসংবাদ।"
          },
          {
            "en": "3:44, addressed to the Prophet ﷺ, has just said that this is news of the unseen, and that he was not present when they cast their pens to decide who would take charge of Maryam. So the annunciation arrives framed as knowledge nobody in Madinah could have gathered for himself. No separate occasion of revelation is reported for this verse. Ibn Ishaq relates that the opening part of the surah, eighty and some verses, came down concerning the Christian delegation from Najran, who had come to argue about Isa (AS).",
            "bn": "ঠিক আগের আয়াত, ৩:৪৪, নবী ﷺ-কে বলছে: এগুলো অদৃশ্যের খবর। মারইয়ামের দায়িত্ব কে নেবে তা ঠিক করতে তারা যখন কলম নিক্ষেপ করছিল, তিনি সেখানে উপস্থিত ছিলেন না। ফলে সুসংবাদের এই বর্ণনা আসে এমন জ্ঞান হয়ে, যা মদিনার কেউ নিজে জোগাড় করতে পারত না। এই আয়াতের আলাদা কোনো শানে নুযুল বর্ণিত নেই। ইবনে ইসহাক বর্ণনা করেন, সূরার শুরুর অংশ, আশির কিছু বেশি আয়াত, নাজরানের খ্রিস্টান প্রতিনিধিদলকে কেন্দ্র করে নাযিল হয়েছিল। তারা এসেছিল ঈসা (আঃ)-কে নিয়ে বিতর্ক করতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word, a Title, a Name",
          "bn": "কালিমা, উপাধি, নাম"
        },
        "p": [
          {
            "en": "Allah gives you good tidings bi-kalimatin minhu, of a word from Him. Kalimah in Arabic can mean a single word or a whole utterance, and here it stands for a person who does not yet exist. The grammar carries the point quietly: kalimah is feminine, yet the pronoun in ismuhu, his name, is masculine. The sentence begins with a word and, before it ends, is speaking of a boy. A word from Allah has already been heard once in this passage, in 3:39, in the news given to Zakariyya (AS) about Yahya (AS).",
            "bn": "আল্লাহ তোমাকে সুসংবাদ দিচ্ছেন বি-কালিমাতিম মিনহু, তাঁর পক্ষ থেকে এক কালিমার। আরবিতে কালিমা মানে একটি শব্দও হতে পারে, পুরো একটি কথাও। এখানে তা দাঁড়িয়ে আছে এমন এক মানুষের জায়গায়, যিনি এখনো অস্তিত্বে আসেননি। আরবি ব্যাকরণ বিষয়টা চুপচাপ ধরিয়ে দেয়। কালিমা শব্দটি স্ত্রীলিঙ্গ, অথচ ইসমুহু, অর্থাৎ তাঁর নাম, শব্দটির সর্বনাম পুংলিঙ্গ। বাক্য শুরু হয় একটি কথা দিয়ে, আর শেষ হওয়ার আগেই বলতে থাকে এক ছেলের কথা। আল্লাহর পক্ষ থেকে কালিমার উল্লেখ এই অংশে আগেও একবার এসেছে, ৩:৩৯ আয়াতে, যাকারিয়া (আঃ)-কে ইয়াহইয়া (আঃ)-র সুসংবাদ দেওয়ার সময়।"
          },
          {
            "en": "Then comes a name in three parts. Al-Masih is a title, Isa is the name, and ibn Maryam ties him to his mother, which is striking in a sentence spoken to that mother: the angels tell Maryam that her son will be known by her name. A Christian reader will recognise the Messiah and the Word from his own scripture. The Quran uses both titles, and the verses around them give them their sense here: a child brought into being by the command of Allah, as 3:47 goes on to set out.",
            "bn": "এরপর তিন অংশের একটি নাম। আল-মাসীহ উপাধি, ঈসা নাম, আর ইবনু মারইয়াম তাঁকে বেঁধে দেয় তাঁর মায়ের সঙ্গে। কথাটা বলা হচ্ছে সেই মাকেই, তাই ব্যাপারটা চোখে পড়ার মতো: ফেরেশতারা মারইয়ামকে জানাচ্ছেন, তাঁর ছেলে পরিচিত হবেন তাঁরই নামে। একজন খ্রিস্টান পাঠক মাসীহ আর বাণী, এই দুটি উপাধি নিজের ধর্মগ্রন্থ থেকেই চেনেন। কুরআনও দুটিই ব্যবহার করে, আর আশপাশের আয়াত এখানে তাদের অর্থ ঠিক করে দেয়: আল্লাহর হুকুমে অস্তিত্বে আসা এক সন্তান, যেমনটা ৩:৪৭ আয়াত খুলে বলে।"
          },
          {
            "en": "Wajihan fi ad-dunya wal-akhirah: the word comes from the root w-j-h, the root of wajh, face, and the lexicons give wajih as a person of rank and regard. Wa min al-muqarrabin, and among those brought near, is from the root q-r-b, the word 56:11 uses of the foremost. Then listen to the answer each of two people in this passage receives to the question how. Zakariyya (AS) is told in 3:40 that Allah does what He wills. Maryam is told in 3:47 that Allah creates what He wills, and 3:59 uses that second verb again of Adam.",
            "bn": "ওয়াজীহান ফিদ-দুনইয়া ওয়াল-আখিরাহ। শব্দটি এসেছে ও-জ-হ মূল থেকে, যে মূল থেকে ওয়াজহ, অর্থাৎ চেহারা। অভিধানে ওয়াজীহ মানে পদমর্যাদা ও কদরওয়ালা মানুষ। ওয়া মিনাল মুকাররাবীন, আর নৈকট্যপ্রাপ্তদের একজন। এর মূল ক-র-ব, আর ৫৬:১১ আয়াত অগ্রগামীদের বেলায় এই শব্দই ব্যবহার করে। এবার শুনুন, এমনটা কীভাবে হবে, এই প্রশ্নের জবাবে এই অংশের দুজন মানুষ কী শোনেন। ৩:৪০ আয়াতে যাকারিয়া (আঃ)-কে বলা হয়, আল্লাহ যা চান তা করেন। ৩:৪৭ আয়াতে মারইয়ামকে বলা হয়, আল্লাহ যা চান তা সৃষ্টি করেন। আরবিতে এই দ্বিতীয় ক্রিয়াটিই ৩:৫৯ আয়াতে আবার আসে আদমের বেলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word and the Standing",
          "bn": "কালিমা আর মর্যাদা"
        },
        "p": [
          {
            "en": "Ibn Kathir reports from Ibn Abbas (RA), Mujahid, Qatadah and a number of others that the word from Allah which Yahya (AS) would confirm, in 3:39, is Isa (AS) himself. On our verse he explains a word from Him as a child whose existence would come about through a word from Allah: He would say to him Be, and he would be. The passage supports that reading in its own voice, since 3:47 closes on exactly that command, and 3:59 repeats it of Adam.",
            "bn": "ইবনে কাসীর ইবনে আব্বাস (রাঃ), মুজাহিদ, কাতাদা এবং আরও কয়েকজনের সূত্রে উল্লেখ করেন, ৩:৩৯ আয়াতে আল্লাহর যে কালিমাকে ইয়াহইয়া (আঃ) সত্য বলে মেনে নেবেন, তিনি স্বয়ং ঈসা (আঃ)। আমাদের আয়াতে তাঁর পক্ষ থেকে এক কালিমার ব্যাখ্যায় তিনি বলেন: এমন এক সন্তান, যাঁর অস্তিত্ব আসবে আল্লাহর একটি কথায়। আল্লাহ তাঁকে বলবেন হও, আর তিনি হয়ে যাবেন। এই অংশ নিজের ভাষাতেই এ ব্যাখ্যার পক্ষে দাঁড়ায়। ৩:৪৭ আয়াত শেষ হয় ঠিক এই হুকুমে, আর ৩:৫৯ আয়াত আদমের বেলায় সেটাই আবার বলে।"
          },
          {
            "en": "At-Tabari explains wajih as one who has standing and rank, honoured in the sight of Allah. Ibn Kathir gives the two worlds the verse names their content: in this world, standing through the revelation and the law Allah gave him; in the Hereafter, intercession with Allah for those He permits, accepted from him. Neither commentator lets the honour drift from its source. The standing is with Allah and from Allah, and the next words of the verse place him among those whom Allah brings near.",
            "bn": "ইমাম তাবারি ওয়াজীহ শব্দের ব্যাখ্যা করেন এভাবে: যাঁর মর্যাদা ও পদ আছে, আল্লাহর কাছে যিনি সম্মানিত। ইবনে কাসীর আয়াতে উল্লিখিত দুই জগতের অর্থ খুলে দেন। দুনিয়ায় তাঁর মর্যাদা আল্লাহর দেওয়া ওহি ও শরিয়তের কারণে। আখিরাতে আল্লাহ যাদের জন্য অনুমতি দেবেন, তিনি তাদের জন্য সুপারিশ করবেন, আর সেই সুপারিশ কবুল হবে। দুই মুফাসসিরের কেউই সম্মানকে তার উৎস থেকে আলাদা হতে দেন না। মর্যাদা আল্লাহর কাছে, আল্লাহরই দেওয়া। আর আয়াতের পরের কথাগুলো তাঁকে রাখে সেই মানুষদের মধ্যে, যাঁদের আল্লাহ কাছে টেনে নেন।"
          },
          {
            "en": "On the title al-Masih the commentators give more than one reason, and the verse itself settles none of them: that he passed his hand over the sick and they were healed, that he travelled widely through the land, or that he was anointed with blessing. The last name in the verse needs no commentator. Ibn Maryam, son of Maryam, is how the Quran names him again and again, and 3:47 gives the reason in Maryam's own question: no man had touched her.",
            "bn": "আল-মাসীহ উপাধির কারণ নিয়ে মুফাসসিরগণ একাধিক কথা বলেছেন, আর আয়াত নিজে এর কোনোটিকেই চূড়ান্ত করে না। কেউ বলেছেন, তিনি অসুস্থের গায়ে হাত বুলিয়ে দিতেন আর তারা সেরে উঠত। কেউ বলেছেন, তিনি দেশজুড়ে অনেক ঘুরেছেন। কারও মতে তাঁকে বরকতে অভিষিক্ত করা হয়েছিল। আয়াতের শেষ নামটির জন্য অবশ্য কোনো ব্যাখ্যাকারের দরকার পড়ে না। ইবনু মারইয়াম, মারইয়ামের পুত্র, কুরআন তাঁকে বারবার এই নামেই ডাকে। কারণটা ৩:৪৭ আয়াতে মারইয়ামের নিজের প্রশ্নেই আছে: কোনো পুরুষ তাঁকে স্পর্শ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Servant, Messenger, Word",
          "bn": "বান্দা, রসূল, কালিমা"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Ubadah ibn as-Samit (RA) that the Prophet ﷺ said: whoever bears witness that there is no god but Allah alone, without partner, and that Muhammad is His servant and His Messenger, and that Isa is the servant of Allah and His Messenger, and His word which He conveyed to Maryam, and a spirit from Him, and that Paradise is true and the Fire is true, Allah will admit him to Paradise, whatever deeds he had.",
            "bn": "সহিহ বুখারিতে উবাদা ইবনুস সামিত (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: যে ব্যক্তি সাক্ষ্য দেয় যে আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই; মুহাম্মাদ তাঁর বান্দা ও রসূল; ঈসা আল্লাহর বান্দা ও রসূল, আর তাঁর কালিমা যা তিনি মারইয়ামের প্রতি পৌঁছে দিয়েছেন, আর তাঁর পক্ষ থেকে এক রূহ; জান্নাত সত্য, জাহান্নাম সত্য; আল্লাহ তাকে জান্নাতে প্রবেশ করাবেন, তার আমল যেমনই হোক।"
          },
          {
            "en": "The narration sets the titles of 3:45 inside the testimony itself. Isa (AS) is given the same two words given to the Prophet ﷺ, servant and messenger, and then the words that are his alone, word and spirit. A Muslim does not hold these as concessions; they are part of what a Muslim bears witness to. Sahih al-Bukhari also records from Abu Hurayrah (RA) that the Prophet ﷺ said: I am the closest of people to Isa son of Maryam in this world and the Hereafter; the prophets are brothers from one father, their mothers are different and their religion is one.",
            "bn": "এই হাদিস ৩:৪৫ আয়াতের উপাধিগুলোকে সাক্ষ্যের ভেতরেই বসিয়ে দেয়। নবী ﷺ-কে যে দুটি শব্দে পরিচয় দেওয়া হয়েছে, বান্দা ও রসূল, ঈসা (আঃ)-কেও দেওয়া হয়েছে সেই দুটিই। তারপর আসে কেবল তাঁরই দুটি পরিচয়, কালিমা ও রূহ। একজন মুসলিম এগুলোকে ছাড় দেওয়া কথা মনে করে না, এগুলো তার সাক্ষ্যেরই অংশ। সহিহ বুখারিতে আবু হুরায়রা (রাঃ) থেকে আরও বর্ণিত, নবী ﷺ বলেছেন: দুনিয়া ও আখিরাতে মারইয়ামের পুত্র ঈসার সবচেয়ে ঘনিষ্ঠ মানুষ আমি। নবীরা বৈমাত্রেয় ভাই, তাঁদের মা ভিন্ন ভিন্ন, আর তাঁদের দ্বীন এক।"
          }
        ]
      },
      {
        "h": {
          "en": "Where He Is Named Again",
          "bn": "আরও যেখানে তাঁর নাম"
        },
        "p": [
          {
            "en": "Other verses carry the announcement further. 3:59 gives the comparison the whole passage leans on: the example of Isa with Allah is like that of Adam, whom He created from dust and then said to him Be, and he was. 19:30 records his words from the cradle, the fulfilment of 3:46: I am the servant of Allah; He has given me the Scripture and made me a prophet. 4:171 repeats two of our verse's titles, calling the Messiah a messenger of Allah and His word directed to Maryam.",
            "bn": "আরও কিছু আয়াত এই সুসংবাদকে এগিয়ে নিয়ে যায়। ৩:৫৯ আয়াত সেই তুলনাটি দেয়, যার ওপর পুরো অংশ দাঁড়িয়ে: আল্লাহর কাছে ঈসার দৃষ্টান্ত আদমের মতো, যাঁকে তিনি মাটি থেকে গড়ে বললেন হও, আর তিনি হয়ে গেলেন। ৩:৪৬ আয়াতের প্রতিশ্রুতি পূর্ণ হয় ১৯:৩০ আয়াতে, দোলনা থেকে বলা তাঁর কথায়: আমি আল্লাহর বান্দা, তিনি আমাকে কিতাব দিয়েছেন আর নবী বানিয়েছেন। ৪:১৭১ আয়াত আমাদের আয়াতের দুটি উপাধি আবার আনে: মাসীহ আল্লাহর রসূল, আর তাঁর কালিমা, যা তিনি মারইয়ামের প্রতি পাঠিয়েছিলেন।"
          },
          {
            "en": "19:34-35 set the name and the dispute side by side: that is Isa son of Maryam, the word of truth about which they are in dispute; it is not for Allah to take a son, and when He decrees a matter He only says to it Be, and it is. And 5:110 turns the promise of 3:46 into a favour Allah recounts to him: you spoke to the people in the cradle and in maturity. What the angels announced to the mother, Allah Himself recalls to the son.",
            "bn": "১৯:৩৪-৩৫ আয়াত নাম আর বিতর্ক পাশাপাশি রাখে: ইনিই মারইয়ামের পুত্র ঈসা, সেই সত্য কথা, যাঁকে নিয়ে লোকেরা সন্দেহে পড়ে আছে। সন্তান গ্রহণ করা আল্লাহর কাজ নয়। তিনি কোনো কিছু স্থির করলে শুধু বলেন হও, আর তা হয়ে যায়। আর ৫:১১০ আয়াত ৩:৪৬ আয়াতের প্রতিশ্রুতিকে বানিয়ে দেয় এমন এক নিয়ামত, যা আল্লাহ তাঁকে মনে করিয়ে দেন: তুমি দোলনায় থেকে আর পরিণত বয়সে মানুষের সঙ্গে কথা বলেছ। মায়ের কাছে ফেরেশতারা যা ঘোষণা করেছিলেন, ছেলেকে তা স্মরণ করিয়ে দেন আল্লাহ নিজে।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour You Cannot Take",
          "bn": "যে সম্মান কেড়ে নেওয়া যায় না"
        },
        "p": [
          {
            "en": "The verse describes one of the most honoured of people, and every honour in it is received. He is given a name, given standing, brought near. For a believer that reorders ambition. Standing with people can be chased, bargained for and lost; standing with Allah is given to whom He chooses and kept by worship. Maryam heard this news after years of worship in the sanctuary, and 3:43, two verses earlier, had told her to be devoutly obedient to her Lord, to prostrate and to bow with those who bow.",
            "bn": "আয়াতটি সবচেয়ে সম্মানিত মানুষদের একজনের বর্ণনা দেয়, অথচ তার প্রতিটি সম্মান তাঁকে দেওয়া হয়েছে। নাম দেওয়া হয়েছে, মর্যাদা দেওয়া হয়েছে, কাছে টেনে নেওয়া হয়েছে। একজন মুমিনের উচ্চাকাঙ্ক্ষা এতে নতুন করে সাজে। মানুষের কাছে কদর পাওয়ার পেছনে দৌড়ানো যায়, দরদাম করা যায়, আবার তা হারিয়েও যায়। আল্লাহর কাছে মর্যাদা তিনি যাকে চান তাকে দেন, আর তা টিকে থাকে ইবাদতে। মারইয়াম এই খবর পেয়েছিলেন ইবাদতখানায় বছরের পর বছর কাটানোর পর। দুই আয়াত আগে, ৩:৪৩ আয়াতে, তাঁকে বলা হয়েছিল প্রতিপালকের অনুগত হতে, সিজদা করতে, রুকুকারীদের সঙ্গে রুকু করতে।"
          },
          {
            "en": "In a week, that can mean one act of worship nobody will ever see, and letting that be enough. In a hard season, when help arrives by a route that makes no sense, it means answering as Maryam answered Zakariyya (AS) in 3:37: it is from Allah. And with a Christian neighbour or colleague, it means your honour for Isa (AS) should be audible in how you name him, with peace upon him, and in how you speak of his mother, chosen above the women of the worlds in 3:42.",
            "bn": "সপ্তাহের হিসাবে এর মানে হতে পারে এমন একটি আমল, যা কেউ কখনো দেখবে না, আর সেটুকুতেই সন্তুষ্ট থাকা। কঠিন সময়ে যখন সাহায্য আসে এমন পথে যার কোনো ব্যাখ্যা নেই, তখন মারইয়াম যেমন ৩:৩৭ আয়াতে যাকারিয়া (আঃ)-কে বলেছিলেন, তেমন বলা: এটা আল্লাহর পক্ষ থেকে। আর খ্রিস্টান প্রতিবেশী বা সহকর্মীর সঙ্গে কথা বলার সময় ঈসা (আঃ)-র প্রতি আপনার সম্মান যেন কানে শোনা যায়। তাঁর নামের সঙ্গে সালাম জুড়ে দিন, আর তাঁর মায়ের কথা বলুন সেই মর্যাদায়, যা ৩:৪২ আয়াত তাঁকে দিয়েছে: সারা জগতের নারীদের ওপর মনোনীত।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Brought Near",
          "bn": "কাছে টেনে নেওয়ার দোয়া"
        },
        "p": [
          {
            "en": "The verse holds no supplication of its own, so what follows is a du'a composed in its vocabulary, not a transmitted one: O Allah, give us standing with You in this world and the Hereafter, place us among those You bring near, and let every honour we carry be one You have given. It borrows wajih and muqarrabin and asks for nothing the verse did not name. Make it as your own words, and never pass it on as a narration.",
            "bn": "আয়াতে নিজস্ব কোনো দোয়া নেই। তাই নিচের দোয়াটি আয়াতের শব্দ থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, দুনিয়া ও আখিরাতে আমাদের তোমার কাছে মর্যাদা দাও, যাদের তুমি কাছে টেনে নাও আমাদের তাদের মধ্যে রাখো, আর আমাদের প্রতিটি সম্মান যেন তোমারই দেওয়া হয়। এতে ওয়াজীহ আর মুকাররাবীন শব্দ দুটি ধার নেওয়া হয়েছে, আয়াতে নেই এমন কিছু চাওয়া হয়নি। নিজের দোয়া হিসেবেই করুন, কখনো হাদিস বা বর্ণনা বলে চালাবেন না।"
          },
          {
            "en": "The same passage does hold a Quranic supplication, a few verses earlier. When Maryam was born, her mother said in 3:36: I seek refuge for her in You, and for her descendants, from Satan, the expelled. That prayer named her descendants, and the son announced in 3:45 is hers. A parent can make the same request over a child today, in the verse's words, asking protection for the child and for everyone who comes after.",
            "bn": "তবে এই অংশেই, কয়েক আয়াত আগে, কুরআনের একটি দোয়া আছে। মারইয়ামের জন্মের পর তাঁর মা ৩:৩৬ আয়াতে বলেছিলেন: আমি তাকে আর তার বংশধরদের বিতাড়িত শয়তান থেকে তোমার আশ্রয়ে সঁপে দিলাম। সেই দোয়ায় তাঁর বংশধরদের কথা ছিল, আর ৩:৪৫ আয়াতে যে ছেলের সুসংবাদ, তিনি মারইয়ামেরই সন্তান। আজও একজন বাবা বা মা নিজের সন্তানের জন্য আয়াতের কথায় একই দোয়া করতে পারেন, সন্তান আর তার পরে যারা আসবে তাদের সবার জন্য আশ্রয় চেয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Good News Asks",
          "bn": "সুসংবাদ যে প্রশ্ন রেখে যায়"
        },
        "p": [
          {
            "en": "Which honour in my life have I been trying to take, when the only honour this verse knows is one that is given? When I speak of Isa (AS) with someone who loves him in a different way, do I sound like a person who honours him, or like a person winning an argument? Maryam heard the news after years of worship. Which worship in my week would I want to be found in when news, good or hard, arrives?",
            "bn": "জীবনের কোন সম্মানটা আমি নিজে কেড়ে নিতে চাইছি, যখন এই আয়াত কেবল দেওয়া সম্মানকেই চেনে? যিনি ঈসা (আঃ)-কে ভিন্নভাবে ভালোবাসেন, তাঁর সঙ্গে ঈসা (আঃ)-র কথা বলার সময় আমাকে কি সম্মানকারী মনে হয়, নাকি তর্কে জিততে চাওয়া কেউ? মারইয়াম সুসংবাদ পেয়েছিলেন বহু বছরের ইবাদতের পর। খবর ভালো হোক বা কঠিন, আমার সপ্তাহের কোন ইবাদতের মধ্যে থাকা অবস্থায় আমি তা পেতে চাই?"
          },
          {
            "en": "The angels told a mother that her son would carry her name. How do I speak of the mothers whose faith shaped the people I most admire, my own mother included? And the verse describes a whole life before it has begun: standing in this world, standing in the next, nearness to Allah. If my life were described in advance by what Allah might give it, which of those three am I actually working towards today?",
            "bn": "ফেরেশতারা এক মাকে জানালেন, তাঁর ছেলে বহন করবেন তাঁরই নাম। যাঁদের আমি সবচেয়ে বেশি শ্রদ্ধা করি, তাঁদের যে মায়েরা ঈমান দিয়ে গড়ে তুলেছেন, নিজের মাসহ, তাঁদের কথা আমি কীভাবে বলি? আয়াতটি একটি জীবন শুরু হওয়ার আগেই তার বর্ণনা দিয়ে দেয়: দুনিয়ায় মর্যাদা, আখিরাতে মর্যাদা, আল্লাহর নৈকট্য। আল্লাহ আমার জীবনকে কী দিতে পারেন সেই হিসেবে যদি আগেই তার বর্ণনা দেওয়া হতো, এই তিনটির কোনটির দিকে আমি আজ সত্যিই কাজ করছি?"
          }
        ]
      }
    ]
  },
  "3:49": {
    "sections": [
      {
        "h": {
          "en": "A Messenger to the Children of Israel",
          "bn": "বনী ইসরাঈলের কাছে রসূল"
        },
        "p": [
          {
            "en": "This verse continues the angels' announcement to Maryam without a break. 3:48 has just said that Allah will teach her son the writing and wisdom, the Torah and the Gospel, and 3:49 opens on the next item in that list, wa rasulan, and a messenger to the Children of Israel. Then the Arabic moves straight from the angels' words into his own, with no separate verb of saying, and Isa (AS) is speaking to the people he was sent to. Within one verse the announcement to his mother becomes his own address.",
            "bn": "এই আয়াত মারইয়ামের প্রতি ফেরেশতাদের ঘোষণাকে কোনো বিরতি ছাড়াই এগিয়ে নেয়। ৩:৪৮ আয়াত সবে বলেছে, আল্লাহ তাঁর ছেলেকে কিতাব, হিকমত, তাওরাত ও ইঞ্জিল শেখাবেন। ৩:৪৯ আয়াত শুরু হয় সেই তালিকার পরের কথায়, ওয়া রাসূলান, আর বনী ইসরাঈলের কাছে রসূল। তারপর আরবিতে আলাদা কোনো বলার ক্রিয়া ছাড়াই কথা ফেরেশতাদের মুখ থেকে চলে যায় তাঁর নিজের মুখে। ঈসা (আঃ) কথা বলছেন সেই মানুষদের সঙ্গে, যাদের কাছে তাঁকে পাঠানো হয়েছে। এক আয়াতের মধ্যেই মায়ের কাছে দেওয়া সুসংবাদ হয়ে যায় ছেলের নিজের ভাষণ।"
          },
          {
            "en": "3:50-51 carry his words on: he has come confirming the Torah that was before him and making lawful some of what had been forbidden to them, and he closes on this: Allah is my Lord and your Lord, so worship Him; that is the straight path. So the signs of 3:49 sit between two statements of servanthood, a messenger at the start and a worshipper of his Lord at the end. No separate occasion of revelation is reported for the verse; it belongs to the account that 3:62 will call the true narration.",
            "bn": "৩:৫০-৫১ আয়াতে তাঁর কথা চলতে থাকে: তিনি এসেছেন আগের তাওরাতকে সত্যায়ন করতে, আর তাদের জন্য হারাম করা কিছু জিনিস হালাল করে দিতে। শেষ করেন এই কথায়: আল্লাহ আমার রব, তোমাদেরও রব, অতএব তাঁর ইবাদত করো, এটাই সরল পথ। ফলে ৩:৪৯ আয়াতের নিদর্শনগুলো দাঁড়িয়ে আছে দাসত্বের দুটি ঘোষণার মাঝখানে। শুরুতে তিনি রসূল, শেষে তিনি নিজের রবের ইবাদতকারী। এই আয়াতের আলাদা কোনো শানে নুযুল বর্ণিত নেই। এটি সেই বর্ণনার অংশ, যাকে ৩:৬২ আয়াত বলবে সত্য বৃত্তান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Shape, Breathe, Heal",
          "bn": "গড়া, ফুঁ দেওয়া, সারিয়ে তোলা"
        },
        "p": [
          {
            "en": "His own verbs are all in the first person: akhluqu, I shape; anfukhu, I breathe; ubri'u, I heal; uhyi, I give life; unabbi'ukum, I inform you. The first is from the root kh-l-q, which usually names creation. Here its object is a likeness, ka-hay'at at-tayr, like the form of a bird, and the commentators read the verb in its sense of shaping and measuring out, which is how the translations render it: I design, I form. The life that follows is not in that verb. It arrives with bi-idhni Allah.",
            "bn": "আরবিতে তাঁর নিজের কাজের ক্রিয়াগুলো সবই আমি দিয়ে বলা: আখলুকু, আমি গড়ি; আনফুখু, আমি ফুঁ দিই; উবরিউ, আমি সারিয়ে তুলি; উহয়ী, আমি জীবন দিই; উনাব্বিউকুম, আমি তোমাদের জানিয়ে দিই। প্রথম ক্রিয়াটির মূল খ-ল-ক, যা সাধারণত সৃষ্টির কথা বলে। এখানে ক্রিয়াটির কর্ম একটি আকৃতি, কা-হাইআতিত তাইর, পাখির আকৃতির মতো। মুফাসসিরগণ ক্রিয়াটিকে পড়েন গড়ে তোলা ও মাপমতো আকার দেওয়ার অর্থে, অনুবাদেও তাই আছে: গঠন করব। এরপর যে প্রাণ আসে, তা এই ক্রিয়ার ভেতরে নেই। তা আসে বি-ইযনিল্লাহ, আল্লাহর অনুমতিতে।"
          },
          {
            "en": "Bi-idhni Allah, by permission of Allah, comes twice in the Arabic of this verse: once after the clay becomes a bird, and once after the healing of the blind and the leper and the giving of life to the dead. Its placement matters. It does not stand at the start as a formula. It comes after the results, at the moment a listener would be most tempted to credit the man in front of him. Al-akmah is one born blind, as the translations have it, and al-abras a skin disease they render as leprosy.",
            "bn": "বি-ইযনিল্লাহ, আল্লাহর অনুমতিতে, এই আয়াতের আরবিতে এসেছে দু'বার। একবার মাটির আকৃতি পাখি হয়ে যাওয়ার পর, আরেকবার জন্মান্ধ ও কুষ্ঠরোগীকে সারিয়ে তোলা আর মৃতকে জীবন দেওয়ার পর। কোথায় বসেছে, সেটাই গুরুত্বপূর্ণ। কথাটা শুরুতে কোনো রীতিমাফিক বাক্য হিসেবে আসেনি। এসেছে ফলাফলের পরে, ঠিক যে মুহূর্তে শ্রোতার মন চাইবে সামনে দাঁড়ানো মানুষটিকে কৃতিত্ব দিতে। আল-আকমাহ মানে জন্মান্ধ, অনুবাদেও তাই আছে। আল-আবরাস এক ধরনের চর্মরোগ, অনুবাদে যাকে কুষ্ঠ বলা হয়েছে।"
          },
          {
            "en": "The verse closes on a condition: inna fi dhalika la-ayatan lakum in kuntum mu'minin, indeed in that is a sign for you, if you are believers. Ayah, sign, is the word the Quran also uses of its own verses, and it appears near the verse's start, bi-ayatin min rabbikum, with a sign from your Lord. So the wonders are framed at both ends as a sign. A sign is not a destination but a pointer, and the condition says who will follow where it points.",
            "bn": "আয়াত শেষ হয় একটি শর্তে: ইন্না ফী যালিকা লা-আয়াতাল লাকুম ইন কুনতুম মুমিনীন, নিশ্চয়ই এতে তোমাদের জন্য নিদর্শন আছে, যদি তোমরা মুমিন হও। আয়াত শব্দের অর্থ নিদর্শন, আর কুরআন নিজের বাক্যগুলোকেও এই নামেই ডাকে। আয়াতের শুরুর দিকেও শব্দটি এসেছে: বি-আয়াতিম মির রাব্বিকুম, তোমাদের রবের পক্ষ থেকে নিদর্শন নিয়ে। ফলে দুই প্রান্তেই এই বিস্ময়গুলোকে বলা হয়েছে নিদর্শন। নিদর্শন কোনো গন্তব্য নয়, পথের ইশারা। আর শর্তটি বলে দেয়, সেই ইশারা ধরে কারা এগোবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs Suited to Their Age",
          "bn": "যুগের উপযোগী নিদর্শন"
        },
        "p": [
          {
            "en": "Ibn Kathir notes, from a number of scholars, that Allah sent every prophet with signs suited to the people of his time. The people of Musa's (AS) age prized magic, so he was given signs that overcame the magicians. The age of Isa (AS) prized medicine, so he was given healing no physician could match: sight for the born blind, the leper cured, the dead raised. And the Prophet ﷺ came to a people who prized eloquence, and was given a Book they could not answer.",
            "bn": "ইবনে কাসীর একদল আলেমের সূত্রে উল্লেখ করেন, আল্লাহ প্রত্যেক নবীকে তাঁর যুগের মানুষের উপযোগী নিদর্শন দিয়ে পাঠিয়েছেন। মূসা (আঃ)-র যুগে জাদুর কদর ছিল, তাই তাঁকে এমন নিদর্শন দেওয়া হয়েছিল যা জাদুকরদের হার মানায়। ঈসা (আঃ)-র যুগে চিকিৎসার কদর ছিল, তাই তাঁকে দেওয়া হয়েছিল এমন আরোগ্য, যার সমকক্ষ কোনো চিকিৎসক ছিল না: জন্মান্ধ দৃষ্টি পায়, কুষ্ঠরোগী সেরে ওঠে, মৃত জীবিত হয়। আর নবী ﷺ এসেছিলেন এমন এক জাতির কাছে, যারা ভাষার অলংকারকে সবচেয়ে বড় মনে করত। তাঁকে দেওয়া হলো এমন এক কিতাব, যার জবাব তারা দিতে পারেনি।"
          },
          {
            "en": "Tafsir al-Jalalayn explains the repetition of by permission of Allah as closing off any thought of divinity in him. On the last sign, I inform you of what you eat and what you store in your houses, at-Tabari gathers early reports in which Isa (AS) would tell people what had been eaten and set aside at home. The reports differ in detail. What they share is the point of the clause: this was knowledge of the unseen, which a man could hold only if Allah gave it to him.",
            "bn": "তাফসীরে জালালাইন বলে, আল্লাহর অনুমতিতে কথাটি দু'বার আনা হয়েছে যাতে তাঁর মধ্যে ইলাহ হওয়ার কোনো ধারণা জায়গা না পায়। শেষ নিদর্শন, তোমরা যা খাও আর ঘরে যা জমিয়ে রাখো তা আমি জানিয়ে দিই, এর ব্যাখ্যায় ইমাম তাবারি প্রাথমিক যুগের কিছু বর্ণনা একত্র করেছেন। সেগুলোতে আছে, ঈসা (আঃ) মানুষকে বলে দিতেন ঘরে কী খাওয়া হয়েছে আর কী তুলে রাখা হয়েছে। বর্ণনাগুলোর খুঁটিনাটি আলাদা। মিল একটি জায়গায়, আর সেটাই এই অংশের মূল কথা: এ ছিল অদৃশ্যের জ্ঞান, যা আল্লাহ না দিলে কোনো মানুষের কাছে থাকতে পারে না।"
          },
          {
            "en": "Healing the blind and the leper and raising the dead are among the signs the Najran delegation cited, in Ibn Ishaq's account, as evidence that Isa (AS) was more than a man. The verse reads the same facts another way. The Quran does not deny the miracles; it is one of the sources that records them. The difference is over what they prove, and the verse gives its answer in the phrase it will not drop, by permission of Allah, and in the words that follow in 3:51: Allah is my Lord and your Lord.",
            "bn": "ইবনে ইসহাকের বর্ণনায় নাজরানের প্রতিনিধিদল দাবি করেছিল, ঈসা (আঃ) মানুষের চেয়ে বেশি কিছু। প্রমাণ হিসেবে তারা যেসব নিদর্শন তুলেছিল, তার মধ্যে ছিল জন্মান্ধ ও কুষ্ঠরোগীকে সারিয়ে তোলা আর মৃতকে জীবিত করা। আয়াতটি একই ঘটনাগুলোকে পড়ে অন্যভাবে। কুরআন মুজিযাগুলো অস্বীকার করে না, বরং যেসব উৎসে এগুলো লেখা আছে, কুরআন তার একটি। মতভেদ হলো এগুলো কী প্রমাণ করে তা নিয়ে। আয়াত তার জবাব দেয় সেই কথায়, যা সে কখনো ছাড়ে না: আল্লাহর অনুমতিতে। আর জবাব দেয় ৩:৫১ আয়াতের কথায়: আল্লাহ আমার রব, তোমাদেরও রব।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Prophet Was Given Signs",
          "bn": "প্রত্যেক নবীকে নিদর্শন দেওয়া হয়েছিল"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said: there was no prophet among the prophets but he was given signs the like of which people believed in, and what I was given was only revelation which Allah revealed to me, so I hope that I will have the most followers of them on the Day of Resurrection. The narration does not diminish the signs of Isa (AS). It places them in a line of prophets, each given what his people could see.",
            "bn": "সহিহ বুখারিতে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: নবীদের মধ্যে এমন কোনো নবী নেই, যাঁকে এমন নিদর্শন দেওয়া হয়নি যার মতো নিদর্শন দেখে মানুষ ঈমান এনেছে। আর আমাকে যা দেওয়া হয়েছে, তা কেবল ওহি, যা আল্লাহ আমার প্রতি পাঠিয়েছেন। তাই আমি আশা করি, কিয়ামতের দিন তাঁদের মধ্যে আমার অনুসারীই হবে সবচেয়ে বেশি। এই হাদিস ঈসা (আঃ)-র নিদর্শনকে ছোট করে না। বরং তা সেগুলোকে নবীদের এক ধারাবাহিকতায় বসায়, যেখানে প্রত্যেককে দেওয়া হয়েছে তাঁর জাতি যা দেখতে পারত।"
          },
          {
            "en": "Read beside 3:49, the narration draws out what the verse itself says: signs are given, and given for a purpose, that people believe. The signs of Isa (AS) were seen by those who stood in front of him. The sign given to the Prophet ﷺ is recited, and anyone can hear it now. Neither is a prophet's own achievement. No narration in the two Sahihs adds detail to the account of the clay bird, so this article adds none, and leaves the popular elaborations where they lie.",
            "bn": "৩:৪৯ আয়াতের পাশে রেখে পড়লে হাদিসটি আয়াতের নিজের কথাই স্পষ্ট করে: নিদর্শন দেওয়া হয়, আর দেওয়া হয় একটি উদ্দেশ্যে, যাতে মানুষ ঈমান আনে। ঈসা (আঃ)-র নিদর্শন দেখেছিল তাঁর সামনে দাঁড়ানো মানুষেরা। নবী ﷺ-কে দেওয়া নিদর্শন তেলাওয়াত করা হয়, যে কেউ আজও তা শুনতে পারে। কোনোটিই কোনো নবীর নিজের অর্জন নয়। মাটির পাখির ঘটনায় বুখারি ও মুসলিমের কোনো বর্ণনা বাড়তি বিবরণ যোগ করে না। তাই এই লেখাও কিছু যোগ করছে না, আর লোকমুখে চলা কাহিনিগুলো যেখানে আছে সেখানেই থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Signs, Retold",
          "bn": "একই নিদর্শন, আবার বলা"
        },
        "p": [
          {
            "en": "5:110 retells the signs of 3:49 in Allah's own voice, as favours He recounts to Isa (AS), and its Arabic attaches with My permission four times: twice to the bird, once to the healing, once to bringing forth the dead. What 3:49 says in the voice of the messenger, 5:110 confirms from the One who gave the permission. 40:78 then states the rule for every messenger: it was not for any messenger to bring a sign except by permission of Allah.",
            "bn": "৫:১১০ আয়াত ৩:৪৯ আয়াতের নিদর্শনগুলো আবার বলে আল্লাহর নিজের ভাষায়, নিয়ামত হিসেবে, যা তিনি ঈসা (আঃ)-কে মনে করিয়ে দেন। সেখানে আরবিতে আমার অনুমতিতে কথাটি এসেছে চারবার: দু'বার পাখির বেলায়, একবার আরোগ্যের বেলায়, একবার মৃতকে বের করে আনার বেলায়। ৩:৪৯ আয়াত যা রসূলের মুখে বলে, ৫:১১০ আয়াত তা নিশ্চিত করে সেই সত্তার পক্ষ থেকে, যিনি অনুমতি দিয়েছিলেন। আর ৪০:৭৮ আয়াত সব রসূলের জন্য নিয়মটি বলে দেয়: আল্লাহর অনুমতি ছাড়া কোনো নিদর্শন নিয়ে আসা কোনো রসূলের পক্ষে সম্ভব নয়।"
          },
          {
            "en": "43:63-64 give the message the signs served: I have come to you with wisdom and to make clear some of what you differ over, so fear Allah and obey me; indeed Allah is my Lord and your Lord, so worship Him. 5:75 says it without ornament: the Messiah, son of Maryam, was not but a messenger, messengers had passed on before him, and he and his mother both used to eat food. And 61:6 records him announcing a messenger to come after him, whose name is Ahmad.",
            "bn": "৪৩:৬৩-৬৪ আয়াত বলে দেয় নিদর্শনগুলো কোন বার্তার সেবায় ছিল: আমি তোমাদের কাছে হিকমত নিয়ে এসেছি, আর এসেছি তোমরা যেসব বিষয়ে মতভেদ করো তার কিছু স্পষ্ট করতে, তাই আল্লাহকে ভয় করো আর আমার কথা মানো; আল্লাহই আমার রব, তোমাদেরও রব, অতএব তাঁর ইবাদত করো। ৫:৭৫ আয়াত কোনো অলংকার ছাড়াই বলে: মারইয়ামের পুত্র মাসীহ একজন রসূল ছাড়া কিছু নন, তাঁর আগেও রসূলগণ গত হয়েছেন, আর তিনি ও তাঁর মা দুজনেই খাবার খেতেন। আর ৬১:৬ আয়াতে আছে, তিনি তাঁর পরে আসা এক রসূলের সুসংবাদ দিচ্ছেন, যাঁর নাম আহমাদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Letting the Credit Pass Through",
          "bn": "কৃতিত্ব যেন আল্লাহর কাছে পৌঁছায়"
        },
        "p": [
          {
            "en": "Most people will never shape a bird from clay, but nearly everyone is given some small power over another person's good: a doctor's skill, a teacher's patience, a parent's hand on a feverish child. The verse gives a pattern for holding that power. Do the work fully, as Isa (AS) shaped the clay and breathed into it, and then say where the result came from. A doctor who says after a good recovery that it was by Allah's permission has not been merely modest. She has been accurate.",
            "bn": "মাটি দিয়ে পাখি গড়ার সুযোগ বেশির ভাগ মানুষের কখনো আসবে না। কিন্তু প্রায় সবাইকে অন্যের কল্যাণের ওপর ছোট্ট কিছু ক্ষমতা দেওয়া হয়: ডাক্তারের দক্ষতা, শিক্ষকের ধৈর্য, জ্বরে ভোগা সন্তানের কপালে বাবা-মায়ের হাত। আয়াতটি সেই ক্ষমতা ধরে রাখার একটা ধরন শিখিয়ে দেয়। ঈসা (আঃ) যেমন মাটি গড়েছেন আর তাতে ফুঁ দিয়েছেন, তেমনি নিজের কাজটা পুরোপুরি করুন। তারপর মুখে বলুন ফলটা কোথা থেকে এল। রোগী ভালোভাবে সেরে ওঠার পর যে ডাক্তার বলেন, আল্লাহর অনুমতিতে হয়েছে, তিনি শুধু বিনয় দেখাননি। তিনি সত্যি কথাটাই বলেছেন।"
          },
          {
            "en": "In a hard season of illness the verse also sets expectations. Healing came through a messenger's hands and still came by permission, which means the means are real and the outcome is not ours. So take the medicine and make the du'a, and do not let either one pretend to be the other. And when you see a gift in someone else, a skill, a recovery, a success, let it do what a sign does: point past the person to the One who permitted it.",
            "bn": "অসুখের কঠিন সময়ে আয়াতটি প্রত্যাশাও ঠিক করে দেয়। আরোগ্য এসেছিল একজন রসূলের হাত দিয়ে, তবু এসেছিল অনুমতিতেই। অর্থাৎ উপায় বাস্তব, কিন্তু ফলাফল আমাদের হাতে নয়। তাই ওষুধ খান, দোয়াও করুন, আর কোনোটিকে অন্যটির জায়গা নিতে দেবেন না। আর অন্য কারও মধ্যে যখন কোনো নিয়ামত দেখেন, একটা দক্ষতা, একটা আরোগ্য, একটা সাফল্য, তাকে নিদর্শনের কাজটাই করতে দিন। মানুষটিকে পেরিয়ে তা যেন ইশারা করে সেই সত্তার দিকে, যিনি অনুমতি দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Over the Sick",
          "bn": "অসুস্থের জন্য দোয়া"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Aishah (RA) that when the Prophet ﷺ came to a sick person, or a sick person was brought to him, he would say: remove the harm, Lord of mankind, and heal, for You are the Healer; there is no healing but Your healing, a healing that leaves no illness behind. Its centre, no healing but Your healing, is the truth 3:49 states twice in its Arabic in the words by permission of Allah.",
            "bn": "সহিহ বুখারিতে আয়েশা (রাঃ) থেকে বর্ণিত, নবী ﷺ কোনো অসুস্থ মানুষের কাছে গেলে, অথবা কোনো অসুস্থকে তাঁর কাছে আনা হলে বলতেন: হে মানুষের রব, কষ্ট দূর করে দাও, আরোগ্য দাও, তুমিই আরোগ্যদাতা; তোমার আরোগ্য ছাড়া কোনো আরোগ্য নেই, এমন আরোগ্য দাও যা কোনো রোগ বাকি রাখে না। এর কেন্দ্রে যে কথা, তোমার আরোগ্য ছাড়া কোনো আরোগ্য নেই, ৩:৪৯ আয়াত আরবিতে সেই সত্যই দু'বার বলে: আল্লাহর অনুমতিতে।"
          },
          {
            "en": "Beside it stands the prayer of the disciples in 3:53, four verses on, spoken when Isa (AS) asked who would be his supporters for Allah: our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses. It asks for what 3:49 hoped the signs would produce, a belief that follows, and it asks to be written down among the witnesses. It can be made as it stands, in the Quran's own words.",
            "bn": "এর পাশে রাখা যায় ৩:৫৩ আয়াতে হাওয়ারিদের দোয়া, চার আয়াত পরে। ঈসা (আঃ) যখন জানতে চাইলেন আল্লাহর পথে কারা তাঁর সাহায্যকারী হবে, তখন তারা বলেছিল: হে আমাদের রব, তুমি যা নাযিল করেছ আমরা তাতে ঈমান এনেছি, রসূলের অনুসরণ করেছি, অতএব আমাদের সাক্ষ্যদাতাদের মধ্যে লিখে নাও। ৩:৪৯ আয়াত নিদর্শনের কাছে যা আশা করেছিল, এই দোয়া ঠিক তাই চায়: এমন ঈমান যা অনুসরণে গড়ায়। আর চায় সাক্ষীদের তালিকায় নাম লেখা হোক। কুরআনের নিজের ভাষায় দোয়াটি যেমন আছে তেমনই করা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where My Gifts Point",
          "bn": "আমার গুণ কোন দিকে ইশারা করে"
        },
        "p": [
          {
            "en": "What ability of mine do I quietly treat as mine, rather than as something that works only by Allah's permission? When I help someone recover, learn or succeed, where does the credit go in my own heart, before it goes anywhere in my speech? The wonders of Isa (AS) were a sign, if you are believers. What have I seen this year that should have pointed me towards Allah, and did I let it?",
            "bn": "আমার কোন গুণকে আমি চুপচাপ নিজের বলে ধরে নিই, অথচ তা কাজ করে কেবল আল্লাহর অনুমতিতে? কাউকে সুস্থ হতে, শিখতে বা সফল হতে সাহায্য করলে মুখে কিছু বলার আগে আমার মনের ভেতরে কৃতিত্বটা কার কাছে যায়? ঈসা (আঃ)-র বিস্ময়কর কাজগুলো ছিল নিদর্শন, যদি তোমরা মুমিন হও। এ বছর এমন কী দেখেছি, যা আমাকে আল্লাহর দিকে নিয়ে যাওয়ার কথা ছিল, আর আমি কি তা হতে দিয়েছি?"
          },
          {
            "en": "5:110 records that some who saw his clear proofs said this is nothing but obvious magic. What makes me think that seeing more would change me, if what I have already seen has not? And when I take medicine and make du'a together, do I hold the two in their right places, the means as real and the healing as Allah's alone? Whom could I sit beside this week and make that du'a over?",
            "bn": "৫:১১০ আয়াতে আছে, তাঁর সুস্পষ্ট নিদর্শন দেখেও কেউ কেউ বলেছিল, এ তো স্পষ্ট জাদু ছাড়া কিছু নয়। যা দেখেছি তাতেই যদি না বদলাই, তবে আরও দেখলে বদলে যাব, এমন ভাবনা আমার কোথা থেকে আসে? আর ওষুধ খাওয়া আর দোয়া করা একসঙ্গে চললে কি দুটিকে তাদের ঠিক জায়গায় রাখি, উপায়কে বাস্তব আর আরোগ্যকে কেবল আল্লাহর বলে? এই সপ্তাহে কার পাশে বসে আমি সেই দোয়াটি পড়তে পারি?"
          }
        ]
      }
    ]
  },
  "3:55": {
    "sections": [
      {
        "h": {
          "en": "After the Best of Planners",
          "bn": "শ্রেষ্ঠ কৌশলীর কথার পরে"
        },
        "p": [
          {
            "en": "The verse comes straight after 3:54: they planned, and Allah planned, and Allah is the best of planners. Before that, 3:52-53 tell how Isa (AS) sensed disbelief among his people and asked who would be his supporters for Allah, and how the disciples answered that they believed and asked to be written among the witnesses. The planners of 3:54 are those who disbelieved in him. 3:55 opens with idh qala Allah, when Allah said, and shows the better plan in Allah's own words to Isa (AS).",
            "bn": "আয়াতটি আসে ঠিক ৩:৫৪ আয়াতের পরে: তারা কৌশল করল, আল্লাহও কৌশল করলেন, আর আল্লাহই শ্রেষ্ঠ কৌশলী। তার আগে ৩:৫২-৫৩ আয়াতে আছে, ঈসা (আঃ) নিজের জাতির মধ্যে অবিশ্বাস টের পেয়ে জানতে চাইলেন, আল্লাহর পথে কারা তাঁর সাহায্যকারী হবে। হাওয়ারিরা জবাব দিল, তারা ঈমান এনেছে, আর চাইল তাদের নাম সাক্ষীদের মধ্যে লেখা হোক। ৩:৫৪ আয়াতে কৌশল করেছিল তারা, যারা তাঁকে অস্বীকার করেছিল। ৩:৫৫ আয়াত শুরু হয় ইয কালাল্লাহু দিয়ে, যখন আল্লাহ বললেন, আর ঈসা (আঃ)-র প্রতি আল্লাহর নিজের কথায় দেখায় সেই উত্তম কৌশল।"
          },
          {
            "en": "After it, 3:56-57 divide the outcome: a severe punishment in this world and the Hereafter for those who disbelieved, and full reward for those who believed and did righteous deeds. 3:58 tells the Prophet ﷺ that this is recited to him from the verses and the wise message, and 3:59 turns to the comparison with Adam. Ibn Ishaq places the opening part of the surah in the argument with the Christians of Najran, but no occasion of revelation is reported for this verse on its own.",
            "bn": "এর পরে ৩:৫৬-৫৭ আয়াত পরিণতি ভাগ করে দেয়। যারা অস্বীকার করেছিল, তাদের জন্য দুনিয়া ও আখিরাতে কঠোর শাস্তি। যারা ঈমান এনে সৎকাজ করেছিল, তাদের জন্য পূর্ণ প্রতিদান। ৩:৫৮ আয়াত নবী ﷺ-কে জানায়, এসব তাঁকে পড়ে শোনানো হচ্ছে আয়াত আর প্রজ্ঞাময় বাণী থেকে। আর ৩:৫৯ আয়াত ফেরে আদমের সঙ্গে তুলনায়। ইবনে ইসহাক সূরার শুরুর অংশকে নাজরানের খ্রিস্টানদের সঙ্গে বিতর্কের প্রেক্ষাপটে রাখেন, তবে শুধু এই আয়াতের জন্য আলাদা কোনো শানে নুযুল বর্ণিত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking, Raising, Purifying",
          "bn": "তুলে নেওয়া, উঠিয়ে নেওয়া, পবিত্র করা"
        },
        "p": [
          {
            "en": "Inni mutawaffika. The root w-f-y carries the sense of fullness, of a debt paid in full or a thing received entire, and tawaffa means to take something completely. The Quran uses the verb of death, and also of sleep: 6:60 says it is He who takes your souls by night, and 39:42 says Allah takes the souls at the time of their death, and those that do not die during their sleep. So the word itself holds more than one kind of taking, and the commentators' discussion turns on which is meant here.",
            "bn": "ইন্নী মুতাওয়াফফীকা। ও-ফ-ই মূলে আছে পূর্ণতার ভাব: ঋণ পুরোপুরি শোধ হওয়া, কোনো জিনিস পুরোটা হাতে পাওয়া। তাওয়াফফা মানে কিছু সম্পূর্ণভাবে নিয়ে নেওয়া। কুরআন এই ক্রিয়া মৃত্যুর বেলায় ব্যবহার করে, ঘুমের বেলায়ও করে। ৬:৬০ আয়াত বলে, তিনিই রাতে তোমাদের প্রাণ নিয়ে নেন। ৩৯:৪২ আয়াত বলে, আল্লাহ মৃত্যুর সময় প্রাণ নিয়ে নেন, আর যারা মরেনি তাদের প্রাণ নেন ঘুমের সময়। ফলে শব্দটির ভেতরেই একাধিক রকম নিয়ে নেওয়ার অর্থ আছে, আর মুফাসসিরদের আলোচনা এখানে কোনটি উদ্দেশ্য তা নিয়েই।"
          },
          {
            "en": "Then wa rafi'uka ilayya, and raising you to Me, and wa mutahhiruka min alladhina kafaru, and purifying you from those who disbelieved. The speaker is Allah throughout: I take, I raise, I purify, I place, and at the end, to Me is your return and I will judge. Isa (AS) does not act once in the verse. Everything that happens to him is Allah's doing, and that is the answer to a plot. The plotters acted in 3:54, and after that the verse speaks only of what Allah will do.",
            "bn": "তারপর ওয়া রাফিউকা ইলাইয়্যা, আর তোমাকে আমার কাছে উঠিয়ে নেব; ওয়া মুতাহহিরুকা মিনাল্লাযীনা কাফারূ, আর অবিশ্বাসীদের থেকে তোমাকে পবিত্র করব। পুরো আয়াতে বক্তা আল্লাহ: আমি নেব, আমি ওঠাব, আমি পবিত্র করব, আমি রাখব, আর শেষে, আমার কাছেই তোমাদের ফেরা, আমিই ফয়সালা করব। আয়াতে ঈসা (আঃ) একবারও নিজে কিছু করেন না। তাঁর সঙ্গে যা ঘটে, সবই আল্লাহর কাজ, আর ষড়যন্ত্রের জবাব এটাই। ষড়যন্ত্রকারীরা কাজ করেছিল ৩:৫৪ আয়াতে, তার পরে এই আয়াত শুধু বলে আল্লাহ কী করবেন।"
          },
          {
            "en": "This app's English translation renders the first promise I will take you, while its Bengali translation renders it I will fulfil the promise made with you, and adds in brackets that Allah would take him from the world without death, which is the reading at-Tabari prefers, set out below. The fourth promise, placing those who follow you above those who disbelieve, ends on ila yawm al-qiyamah, until the Day of Resurrection. That limit sends the whole matter forward to the sentence that follows, where the return and the judgement are named.",
            "bn": "এই অ্যাপের ইংরেজি অনুবাদে প্রথম প্রতিশ্রুতির অর্থ করা হয়েছে, আমি তোমাকে তুলে নেব। আর বাংলা অনুবাদে অর্থ করা হয়েছে, আমি তোমার সাথে কৃত ওয়াদা পূর্ণ করব, আর বন্ধনীতে একটি ব্যাখ্যা জুড়ে দেওয়া হয়েছে: মৃত্যু ছাড়াই দুনিয়া থেকে কবজ করে নেওয়া। এটাই সেই ব্যাখ্যা, যাকে ইমাম তাবারি অগ্রাধিকার দেন, নিচে তা আসছে। চতুর্থ প্রতিশ্রুতি, তোমার অনুসারীদের অবিশ্বাসীদের ওপরে রাখা, শেষ হয় ইলা ইয়াওমিল কিয়ামাহ দিয়ে, কিয়ামত পর্যন্ত। এই সময়সীমা পুরো বিষয়টিকে এগিয়ে দেয় পরের বাক্যের দিকে, যেখানে ফিরে যাওয়া আর ফয়সালার কথা বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taken Whole, or Taken in Sleep",
          "bn": "পুরোপুরি তুলে নেওয়া, নাকি ঘুমের মধ্যে"
        },
        "p": [
          {
            "en": "At-Tabari lays out the readings. Some early authorities said the taking is the taking of sleep, that Allah raised him while he slept. Others said it means taking him from the earth, whole and alive. A report from Ibn Abbas (RA), through Ali ibn Abi Talhah, gives it as causing to die, and others held that the order of the words is not the order of events. At-Tabari prefers the reading that Allah took him from the earth and raised him, because of the many reports from the Prophet ﷺ that Isa (AS) will descend.",
            "bn": "ইমাম তাবারি ব্যাখ্যাগুলো সাজিয়ে দেন। প্রাথমিক যুগের কেউ কেউ বলেছেন, এখানে নিয়ে নেওয়া মানে ঘুমের মধ্যে নেওয়া, আল্লাহ তাঁকে ঘুমন্ত অবস্থায় উঠিয়ে নিয়েছেন। অন্যরা বলেছেন, এর মানে তাঁকে জীবিত ও পূর্ণ অবস্থায় পৃথিবী থেকে নিয়ে নেওয়া। আলী ইবনে আবী তালহার সূত্রে ইবনে আব্বাস (রাঃ) থেকে একটি বর্ণনায় এর অর্থ মৃত্যু দেওয়া। আবার কারও মতে শব্দের ক্রম আর ঘটনার ক্রম এক নয়। তাবারি অগ্রাধিকার দেন এই ব্যাখ্যাকে যে আল্লাহ তাঁকে পৃথিবী থেকে নিয়ে উঠিয়ে নিয়েছেন, কারণ ঈসা (আঃ) নেমে আসবেন, নবী ﷺ থেকে এমন বর্ণনা অনেক।"
          },
          {
            "en": "Ibn Kathir reports that most scholars take the taking here to be sleep, and cites 6:60 and 39:42 for that use of the verb. He also mentions Qatadah's view that the sentence puts first what happens last, and the report from Ibn Abbas (RA). The readings differ over the word and converge on the event. Neither commentator holds that Isa (AS) was killed by those who plotted against him, and both read 3:55 beside 4:157-158: they did not kill him, nor did they crucify him; rather, Allah raised him to Himself.",
            "bn": "ইবনে কাসীর জানান, অধিকাংশ আলেম এখানে নিয়ে নেওয়াকে ঘুম অর্থে নিয়েছেন, আর ক্রিয়াটির এই ব্যবহারের প্রমাণ হিসেবে তিনি ৬:৬০ ও ৩৯:৪২ আয়াত উল্লেখ করেন। তিনি কাতাদার মতও উল্লেখ করেন যে বাক্যে পরে ঘটবে এমন কথা আগে এসেছে, আর উল্লেখ করেন ইবনে আব্বাস (রাঃ)-র বর্ণনাও। ব্যাখ্যাগুলো শব্দ নিয়ে ভিন্ন, ঘটনায় এসে মিলে যায়। দুই মুফাসসিরের কেউই মনে করেন না যে ষড়যন্ত্রকারীরা ঈসা (আঃ)-কে হত্যা করেছিল। দুজনেই ৩:৫৫ আয়াত পড়েন ৪:১৫৭-১৫৮ আয়াতের পাশে রেখে: তারা তাঁকে হত্যাও করেনি, ক্রুশেও চড়ায়নি; বরং আল্লাহ তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন।"
          },
          {
            "en": "On the promise that those who follow him will be above those who disbelieve, Ibn Kathir reads it as having come to pass in history. In his reading, once the Prophet ﷺ was sent, those who believed in him and in all the messengers before him became the true followers of every prophet, and it was this community that the promise then placed above those who disbelieved. The verse itself then closes the question it has opened: to Me is your return, and I will judge between you concerning that in which you used to differ.",
            "bn": "তোমার অনুসারীরা অবিশ্বাসীদের ওপরে থাকবে, এই প্রতিশ্রুতিকে ইবনে কাসীর পড়েন বাস্তবে ঘটে যাওয়া কথা হিসেবে। তাঁর ব্যাখ্যায়, নবী ﷺ প্রেরিত হওয়ার পর যারা তাঁর ওপর এবং তাঁর আগের সকল রসূলের ওপর ঈমান আনে, তারাই প্রকৃত অর্থে সব নবীর অনুসারী, আর এই প্রতিশ্রুতি অনুসারে এই উম্মতকেই অবিশ্বাসীদের ওপরে স্থান দেওয়া হয়। তারপর আয়াত নিজেই তার খোলা প্রশ্নটির সমাপ্তি টানে: আমার কাছেই তোমাদের ফিরে আসা, আর যে বিষয়ে তোমরা মতভেদ করতে, তার ফয়সালা আমিই করব।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Son of Maryam Descends",
          "bn": "যখন মারইয়ামের পুত্র নেমে আসবেন"
        },
        "p": [
          {
            "en": "The narrations at-Tabari leans on are the reports of the return of Isa (AS). Sahih al-Bukhari records from Abu Hurayrah (RA) that the Messenger of Allah ﷺ said: how will you be when the son of Maryam descends among you, and your imam is from among you? The question is put to the Prophet's ﷺ own community. It does not describe a stranger arriving. It describes a prophet coming back to people who already believe in him, and it asks them how they will be.",
            "bn": "ইমাম তাবারি যেসব বর্ণনার ওপর ভর দেন, সেগুলো ঈসা (আঃ)-র ফিরে আসার বর্ণনা। সহিহ বুখারিতে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, আল্লাহর রসূল ﷺ বলেছেন: তোমাদের অবস্থা কেমন হবে, যখন মারইয়ামের পুত্র তোমাদের মধ্যে নেমে আসবেন, আর তোমাদের ইমাম হবেন তোমাদেরই একজন? প্রশ্নটি করা হয়েছে নবী ﷺ-এর নিজের উম্মতকে। এতে কোনো অচেনা মানুষের আগমনের কথা নেই। আছে এমন এক নবীর ফিরে আসার কথা, যাঁর ওপর এই মানুষেরা আগে থেকেই ঈমান রাখে। আর প্রশ্নটা তাদেরই: সেদিন তোমরা কেমন থাকবে?"
          },
          {
            "en": "In another narration in Sahih al-Bukhari, also from Abu Hurayrah (RA), the Prophet ﷺ said that the son of Maryam would soon descend among them as a just judge, and after reporting it Abu Hurayrah recited 4:159: there is none from the People of the Scripture but that he will surely believe in him before his death. At-Tabari, at that verse, prefers the reading that the death meant is the death of Isa (AS). Read together, the verse and the narrations describe an account that is not yet finished.",
            "bn": "সহিহ বুখারির আরেক বর্ণনায়, সেটিও আবু হুরায়রা (রাঃ) থেকে, নবী ﷺ বলেছেন, মারইয়ামের পুত্র শিগগিরই তাদের মধ্যে ন্যায়বিচারক হয়ে নেমে আসবেন। হাদিসটি বর্ণনা করার পর আবু হুরায়রা (রাঃ) ৪:১৫৯ আয়াত তেলাওয়াত করেন: আহলে কিতাবের মধ্যে এমন কেউ নেই, যে তাঁর মৃত্যুর আগে তাঁর ওপর ঈমান আনবে না। ইমাম তাবারি সেই আয়াতের ব্যাখ্যায় অগ্রাধিকার দেন এই মতকে যে এখানে মৃত্যু বলতে ঈসা (আঃ)-র মৃত্যু বোঝানো হয়েছে। আয়াত আর বর্ণনা একসঙ্গে পড়লে বোঝা যায়, এই বৃত্তান্ত এখনো শেষ হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Killed, Raised, Returning",
          "bn": "নিহত নন, উত্থিত, ফিরে আসবেন"
        },
        "p": [
          {
            "en": "4:157-158 give the fullest statement: they did not kill him, nor did they crucify him, but another was made to resemble him to them, and those who differ over it are in doubt; rather, Allah raised him to Himself. Here the Islamic and Christian accounts part most clearly, and it can be said plainly and without heat. Christians hold that Jesus, as they name Isa (AS), died on the cross and rose again, and that belief is at the centre of their faith. Muslims hold, from these verses, that he was neither killed nor crucified, and that Allah raised him.",
            "bn": "৪:১৫৭-১৫৮ আয়াতে কথাটি সবচেয়ে পূর্ণভাবে এসেছে: তারা তাঁকে হত্যা করেনি, ক্রুশেও চড়ায়নি, বরং আরেকজনকে তাদের সামনে তাঁর সদৃশ করে দেওয়া হয়েছিল। যারা এ নিয়ে মতভেদ করে, তারা সন্দেহে আছে। বরং আল্লাহ তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন। ইসলামি আর খ্রিস্টীয় বিবরণ এখানেই সবচেয়ে স্পষ্টভাবে আলাদা হয়ে যায়, আর কথাটা বলা যায় সোজাসুজি, উত্তেজনা ছাড়াই। খ্রিস্টানরা বিশ্বাস করেন, ঈসা (আঃ), যাঁকে তাঁরা যিশু বলেন, ক্রুশে মারা গিয়ে আবার জীবিত হয়েছেন, আর এই বিশ্বাস তাঁদের ধর্মের কেন্দ্রে। মুসলিমরা এই আয়াতগুলোর ভিত্তিতে বিশ্বাস করেন, তিনি নিহতও হননি, ক্রুশবিদ্ধও হননি, আল্লাহ তাঁকে উঠিয়ে নিয়েছেন।"
          },
          {
            "en": "5:117 has Isa (AS) speak of it himself before Allah: I was a witness over them as long as I was among them, but when You took me up, You were the Observer over them. The Arabic verb there comes from the same root as mutawaffika. 43:61 says that he will be a sign for knowledge of the Hour. And 19:33 gathers every stage of his life under Allah's peace: the day he was born, the day he will die, and the day he is raised alive.",
            "bn": "৫:১১৭ আয়াতে ঈসা (আঃ) নিজেই আল্লাহর সামনে এ কথা বলেন: যতদিন আমি তাদের মধ্যে ছিলাম, তাদের ওপর সাক্ষী ছিলাম; আর যখন তুমি আমাকে উঠিয়ে নিলে, তখন তুমিই ছিলে তাদের তত্ত্বাবধায়ক। আরবিতে সেখানকার ক্রিয়াটি মুতাওয়াফফীকা শব্দের মূল থেকেই এসেছে। ৪৩:৬১ আয়াত বলে, তিনি কিয়ামতের এক নিদর্শন। আর ১৯:৩৩ আয়াত তাঁর জীবনের প্রতিটি পর্বকে আল্লাহর শান্তির ছায়ায় রাখে: যেদিন তিনি জন্মেছেন, যেদিন তিনি মারা যাবেন, আর যেদিন জীবিত হয়ে উঠবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When Others Plot",
          "bn": "যখন অন্যরা ষড়যন্ত্র করে"
        },
        "p": [
          {
            "en": "Most believers will never face a plot against their life, but many will face a plan against their name, their livelihood or their peace. The passage gives the order of things. 3:54 grants that people plan; it does not call their plans unreal. It says Allah plans too, and His plan is better, and 3:55 shows that the better plan may look nothing like the rescue we would have drawn up. Isa (AS) was not handed a victory on the plotters' terms. He was taken beyond their reach.",
            "bn": "বেশির ভাগ মুমিনকে কখনো প্রাণনাশের ষড়যন্ত্রের মুখে পড়তে হবে না। কিন্তু অনেককেই পড়তে হবে সুনাম, রুজি বা শান্তির বিরুদ্ধে কারও পরিকল্পনার মুখে। এই অংশ বিষয়গুলোর ক্রম ঠিক করে দেয়। ৩:৫৪ আয়াত মেনে নেয় যে মানুষ পরিকল্পনা করে, তাদের পরিকল্পনাকে অবাস্তব বলে না। বলে, আল্লাহও পরিকল্পনা করেন, আর তাঁরটাই উত্তম। ৩:৫৫ আয়াত দেখায়, সেই উত্তম পরিকল্পনা আমাদের কল্পনার উদ্ধারের মতো না-ও দেখাতে পারে। ঈসা (আঃ)-কে ষড়যন্ত্রকারীদের শর্তে জয় দেওয়া হয়নি। তাঁকে তাদের নাগালের বাইরে তুলে নেওয়া হয়েছে।"
          },
          {
            "en": "The last sentence of the verse is the one to live by in any long disagreement, including disagreement between religions: to Me is your return, and I will judge between you in what you used to differ over. A Muslim can state the Islamic belief about Isa (AS) with full conviction and still leave the final verdict where the verse leaves it. That frees the conversation. You are not required to win it today, only to speak truly and kindly, because the Judge is not you.",
            "bn": "দীর্ঘ যেকোনো মতভেদে, ধর্মে ধর্মে মতভেদেও, জীবনের পথ দেখায় আয়াতের শেষ বাক্যটি: আমার কাছেই তোমাদের ফিরে আসা, আর যে বিষয়ে তোমরা মতভেদ করতে, তার ফয়সালা আমিই করব। একজন মুসলিম ঈসা (আঃ) সম্পর্কে ইসলামের বিশ্বাস পূর্ণ দৃঢ়তায় বলতে পারেন, আবার চূড়ান্ত রায়টা সেখানেই রেখে দিতে পারেন, যেখানে আয়াত রেখেছে। এতে আলাপটা হালকা হয়ে যায়। আজই আপনাকে জিততে হবে না। আপনাকে শুধু সত্য বলতে হবে, সদয়ভাবে বলতে হবে, কারণ বিচারক আপনি নন।"
          }
        ]
      },
      {
        "h": {
          "en": "Guide Me Where They Differed",
          "bn": "মতভেদের জায়গায় পথ দেখাও"
        },
        "p": [
          {
            "en": "Sahih Muslim records from Aishah (RA) that when the Prophet ﷺ stood to pray at night he would open his prayer with: O Allah, Lord of Jibril, Mika'il and Israfil, Originator of the heavens and the earth, Knower of the unseen and the seen, You judge between Your servants concerning that in which they differ; guide me by Your leave to the truth in what is differed over; indeed, You guide whom You will to a straight path.",
            "bn": "সহিহ মুসলিমে আয়েশা (রাঃ) থেকে বর্ণিত, নবী ﷺ রাতে নামাজে দাঁড়ালে এই দোয়া দিয়ে নামাজ শুরু করতেন: হে আল্লাহ, জিবরাঈল, মীকাঈল ও ইসরাফীলের রব, আসমান ও জমিনের স্রষ্টা, অদৃশ্য ও দৃশ্যের জ্ঞানী, তোমার বান্দারা যে বিষয়ে মতভেদ করে, তুমিই তার ফয়সালা করো; যে বিষয়ে মতভেদ হয়েছে, তোমার অনুমতিতে আমাকে তার সত্যের দিকে পথ দেখাও; নিশ্চয়ই তুমি যাকে চাও সরল পথে পরিচালিত করো।"
          },
          {
            "en": "Its middle phrase is the wording of 39:46, and it is close to the closing words of 3:55, turned from a statement into a request. Where 3:55 says Allah will judge between people in what they differed over, the du'a asks to be guided to the truth in that very place, now, before the judgement comes. It suits anyone who has studied a disputed question and wants the truth more than the victory. It can be learned in Arabic and understood in any language.",
            "bn": "দোয়ার মাঝের অংশটি ৩৯:৪৬ আয়াতের ভাষা, আর ৩:৫৫ আয়াতের শেষ কথাগুলোর খুব কাছাকাছি। পার্থক্য হলো, সেখানে কথাটি ঘোষণা, এখানে প্রার্থনা। ৩:৫৫ আয়াত বলে, মানুষ যে বিষয়ে মতভেদ করত, আল্লাহ তার ফয়সালা করবেন। দোয়াটি চায় ঠিক সেই জায়গাতেই এখনই সত্যের পথ, ফয়সালার দিন আসার আগে। যে মানুষ কোনো বিতর্কিত প্রশ্ন নিয়ে পড়াশোনা করেছেন আর জয়ের চেয়ে সত্যকে বেশি চান, দোয়াটি তাঁর জন্য। আরবিতে মুখস্থ করা যায়, আর যেকোনো ভাষায় এর অর্থ বুঝে নেওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaving the Verdict to Allah",
          "bn": "রায় আল্লাহর হাতে ছেড়ে দেওয়া"
        },
        "p": [
          {
            "en": "Where in my life am I waiting for a rescue that looks like my own plan, when Allah's may look like something else entirely? Who has planned against me, and have I started to believe that their plan is the last word? The verse sets a limit, until the Day of Resurrection, and then a judgement. Which argument am I treating as though it must be settled before then, and settled by me?",
            "bn": "জীবনের কোথায় আমি এমন উদ্ধারের অপেক্ষায় আছি, যা দেখতে আমার নিজের পরিকল্পনার মতো, অথচ আল্লাহর পরিকল্পনা হতে পারে একেবারে অন্যরকম? কে আমার বিরুদ্ধে পরিকল্পনা করেছে, আর আমি কি ভাবতে শুরু করেছি যে তাদের পরিকল্পনাই শেষ কথা? আয়াত একটি সময়সীমা দেয়, কিয়ামত পর্যন্ত, তারপর ফয়সালা। কোন তর্ককে আমি এমনভাবে দেখছি যেন তা তার আগেই মিটতে হবে, আর মেটাতে হবে আমাকেই?"
          },
          {
            "en": "When I speak about Isa (AS) with someone who believes he died and rose again, can I say what I believe with conviction and still speak as one who will stand beside that person before the same Judge? And when the night-prayer du'a asks to be guided to the truth where people differed, do I actually want that, even if it costs me something I had assumed?",
            "bn": "যিনি বিশ্বাস করেন ঈসা (আঃ) মারা গিয়ে আবার জীবিত হয়েছেন, তাঁর সঙ্গে কথা বলার সময় আমি কি নিজের বিশ্বাস দৃঢ়ভাবে বলতে পারি, আবার এমনভাবেও বলতে পারি যেন একই বিচারকের সামনে আমরা পাশাপাশি দাঁড়াব? আর রাতের নামাজের দোয়া যখন মতভেদের জায়গায় সত্যের পথ চায়, আমি কি সত্যিই তা চাই, এমনকি যদি তার জন্য এতদিনের কোনো ধারণা ছাড়তে হয়?"
          }
        ]
      }
    ]
  },
  "3:64": {
    "sections": [
      {
        "h": {
          "en": "After the Offer of Mubahalah",
          "bn": "মুবাহালার প্রস্তাবের পরে"
        },
        "p": [
          {
            "en": "The verse follows the passage about Isa (AS) that reaches its height in 3:61, the offer of mutual invocation, and closes in 3:62-63: this is the true narration, there is no deity except Allah, and if they turn away, Allah knows the corrupters. 3:64 opens again with qul, say, and speaks to a wider circle, ya ahl al-kitab, O People of the Scripture. 3:65 keeps the same address and turns to Ibrahim (AS), and 3:67 says he was neither a Jew nor a Christian but one inclining towards truth, a Muslim.",
            "bn": "আয়াতটি আসে ঈসা (আঃ)-কে নিয়ে সেই অংশের পরে, যা ৩:৬১ আয়াতে মুবাহালার প্রস্তাবে চূড়ায় ওঠে আর ৩:৬২-৬৩ আয়াতে শেষ হয়: এটাই সত্য বৃত্তান্ত, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর তারা মুখ ফিরিয়ে নিলে আল্লাহ বিশৃঙ্খলা সৃষ্টিকারীদের জানেন। ৩:৬৪ আয়াত আবার শুরু হয় কুল, বলো, দিয়ে, আর কথা বলে আরও বড় পরিসরে: ইয়া আহলাল কিতাব, হে আহলে কিতাব। ৩:৬৫ আয়াত একই সম্বোধন ধরে রেখে ইবরাহীম (আঃ)-এর দিকে ফেরে, আর ৩:৬৭ আয়াত বলে, তিনি ইহুদিও ছিলেন না, খ্রিস্টানও ছিলেন না, ছিলেন সত্যের দিকে একনিষ্ঠ একজন মুসলিম।"
          },
          {
            "en": "Ibn Ishaq places the opening part of the surah in the visit of the Christian delegation from Najran, and the sirah records how that visit ended, in a written treaty rather than a curse. At-Tabari records that some early authorities took the address of this verse to be to the Jews of Madinah and others to the Christians of Najran. The wording itself, People of the Scripture, names no single community, and the Prophet ﷺ himself carried it further, quoting it in full in a letter to an emperor.",
            "bn": "ইবনে ইসহাক সূরার শুরুর অংশকে নাজরানের খ্রিস্টান প্রতিনিধিদলের আগমনের প্রেক্ষাপটে রাখেন। সীরাতে আছে সেই সফর কীভাবে শেষ হয়েছিল: অভিশাপে নয়, লিখিত চুক্তিতে। ইমাম তাবারি উল্লেখ করেন, প্রাথমিক যুগের কেউ কেউ মনে করতেন এই আয়াতের সম্বোধন মদিনার ইহুদিদের প্রতি, আবার কেউ মনে করতেন নাজরানের খ্রিস্টানদের প্রতি। আয়াতের ভাষা, আহলে কিতাব, কোনো একক সম্প্রদায়ের নাম নেয় না। আর নবী ﷺ নিজে একে আরও দূরে পৌঁছে দিয়েছেন, এক সম্রাটের কাছে পাঠানো চিঠিতে পুরো আয়াতটি উদ্ধৃত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Held Level",
          "bn": "সমান এক কথা"
        },
        "p": [
          {
            "en": "Ta'alaw, come. Its root is '-l-w, the root of height, and some lexicographers explain the call as first meaning come up, spoken from higher ground, before it became the ordinary word for come. Kalimatin sawa', a word that is level: sawa' is what stands at an equal distance from both sides, and at-Tabari glosses it as just. Kalimah, as elsewhere in the Quran, can mean a whole statement, and the statement follows at once, in three clauses.",
            "bn": "তাআলাও, এসো। এর মূল আ-ল-ও, উচ্চতার মূল। কোনো কোনো অভিধানবিদ ব্যাখ্যা করেন, ডাকটির আদি অর্থ ছিল উঠে এসো, উঁচু জায়গা থেকে ডাকা, পরে তা এসো অর্থের সাধারণ শব্দ হয়ে যায়। কালিমাতিন সাওয়া, এমন এক কথা যা সমান। সাওয়া মানে যা দুই পক্ষ থেকে সমান দূরত্বে দাঁড়িয়ে, আর ইমাম তাবারি এর অর্থ করেন ন্যায্য। কুরআনের অন্য জায়গার মতো এখানেও কালিমা মানে পুরো একটি বক্তব্য হতে পারে। আর বক্তব্যটি সঙ্গে সঙ্গেই আসে, তিনটি অংশে।"
          },
          {
            "en": "Alla na'buda illa Allah, that we worship none but Allah; wa la nushrika bihi shay'a, and associate nothing with Him; wa la yattakhidha ba'duna ba'dan arbaban min dun Allah, and that none of us take one another as lords besides Allah. The first two verbs are in the first person plural, and the third has ba'duna ba'dan, some of us and others, as its subject, which includes the speakers. The clauses do not only describe what the listeners must give up. They describe what the believers are held to in the same breath.",
            "bn": "আল্লা নাবুদা ইল্লাল্লাহ, আমরা আল্লাহ ছাড়া কারও ইবাদত করব না; ওয়া লা নুশরিকা বিহী শাইআ, তাঁর সঙ্গে কিছুকে শরিক করব না; ওয়া লা ইয়াত্তাখিযা বাদুনা বাদান আরবাবাম মিন দূনিল্লাহ, আল্লাহকে ছেড়ে আমাদের কেউ কাউকে রব বানাবে না। আরবিতে প্রথম দুটি ক্রিয়া আমরা দিয়ে বলা। তৃতীয়টির কর্তা বাদুনা বাদান, আমাদের একে অন্যকে, আর তার ভেতরে বক্তারাও আছেন। অংশগুলো শুধু শ্রোতাদের কী ছাড়তে হবে তা বলে না। একই নিঃশ্বাসে বলে, মুমিনরা নিজেরা কিসে বাঁধা।"
          },
          {
            "en": "Then the verse closes: fa-in tawallaw fa-qulu ishhadu bi-anna muslimun, and if they turn away, then say, bear witness that we are Muslims. In the Arabic the verse opens with qul, say, addressed to the Prophet ﷺ alone, and closes with qulu, say, addressed to the believers together. The response to refusal is not a curse, a threat or an insult. It is a testimony about oneself, and the only thing it asks of the other side is that they witness it.",
            "bn": "তারপর আয়াত শেষ হয়: ফা-ইন তাওয়াল্লাও ফা-কূলুশহাদূ বি-আন্না মুসলিমূন, আর তারা মুখ ফিরিয়ে নিলে বলো, সাক্ষী থাকো, আমরা মুসলিম। আরবিতে আয়াতের শুরুর কুল, বলো, একা নবী ﷺ-কে বলা। আর শেষের কূলূ, বলো, সব মুমিনকে একসঙ্গে বলা। প্রত্যাখ্যানের জবাব কোনো অভিশাপ নয়, হুমকি নয়, অপমানও নয়। জবাব হলো নিজের সম্পর্কে একটি সাক্ষ্য, আর অন্য পক্ষের কাছে তা শুধু এটুকু চায় যে তারা সাক্ষী থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Lords Besides Allah",
          "bn": "আল্লাহকে ছেড়ে রব"
        },
        "p": [
          {
            "en": "On the third clause at-Tabari cites Ibn Jurayj, who explained it as some of us not obeying others in disobedience to Allah, and Ikrimah, who explained it as some prostrating to others. The first explanation makes lordship a matter of obedience, not only of worship in its narrow sense: to obey any person against Allah is to give him a place that belongs to Allah. 9:31 uses the same phrase, lords besides Allah, of scholars and monks, which is why the commentators read the two verses together.",
            "bn": "তৃতীয় অংশের ব্যাখ্যায় ইমাম তাবারি ইবনে জুরাইজের কথা আনেন: আল্লাহর নাফরমানির কাজে আমরা একে অন্যের আনুগত্য করব না। আর আনেন ইকরিমার ব্যাখ্যা: একে অন্যকে সিজদা করা। প্রথম ব্যাখ্যা রব বানানোকে শুধু সংকীর্ণ অর্থের ইবাদতে আটকে রাখে না, আনুগত্যের প্রশ্ন বানিয়ে দেয়। আল্লাহর বিরুদ্ধে কারও আনুগত্য করা মানে তাকে এমন জায়গা দেওয়া, যা কেবল আল্লাহর। ৯:৩১ আয়াত আলেম ও দরবেশদের বেলায় একই কথা ব্যবহার করে, আল্লাহকে ছেড়ে রব। এ কারণেই মুফাসসিরগণ দুটি আয়াত একসঙ্গে পড়েন।"
          },
          {
            "en": "Ibn Kathir says the address includes the Jews, the Christians and whoever follows their way, and that the word is one of equity in which both sides stand level. He also raises a question of dating. This verse is quoted in the letter to Heraclius, sent after Hudaybiyyah, while the Najran delegation is usually placed later, and he offers more than one way of reconciling the two without insisting on any one of them. As-Sa'di describes the word as the one on which all the prophets and messengers agreed.",
            "bn": "ইবনে কাসীর বলেন, এই সম্বোধনের মধ্যে আছে ইহুদি, খ্রিস্টান এবং তাদের পথ অনুসরণকারী সবাই, আর কথাটি ন্যায্যতার কথা, যেখানে দুই পক্ষ সমান। তিনি সময় নিয়ে একটি প্রশ্নও তোলেন। হুদাইবিয়ার পরে হিরাক্লিয়াসের কাছে পাঠানো চিঠিতে এই আয়াত উদ্ধৃত হয়েছে, অথচ নাজরানের প্রতিনিধিদলের আগমন সাধারণত ধরা হয় তার পরে। দুটিকে মেলানোর একাধিক উপায় তিনি দেখান, কোনো একটির ওপর জোর দেন না। আর আল্লামা সাদি বলেন, এটাই সেই কথা, যাতে সব নবী ও রসূল একমত ছিলেন।"
          },
          {
            "en": "Ar-Razi reads the placement as deliberate. The passage had already offered argument, in the comparison of Isa (AS) with Adam, and then the mutual invocation. After that, the address turns to the fairest ground there is, a proposition that no sound mind could call unjust. As-Sa'di's point, set out above, carries it further: the call is not a new demand invented for an argument, but a return to the ground every messenger stood on.",
            "bn": "ইমাম রাযি আয়াতের অবস্থানকে ইচ্ছাকৃত বলে পড়েন। এই অংশ আগেই যুক্তি দিয়েছে, আদমের সঙ্গে ঈসা (আঃ)-র তুলনায়, তারপর দিয়েছে মুবাহালার প্রস্তাব। এরপর সম্বোধন ফেরে সবচেয়ে ন্যায্য ভিত্তির দিকে, এমন এক বক্তব্যে, যাকে কোনো সুস্থ বিবেক অন্যায্য বলতে পারে না। আগে উল্লেখ করা আল্লামা সাদির কথা একে আরও এগিয়ে নেয়। এই ডাক কোনো তর্কের জন্য বানানো নতুন দাবি নয়। এ হলো সেই ভিত্তিতে ফিরে আসা, যার ওপর প্রত্যেক রসূল দাঁড়িয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Letter to an Emperor",
          "bn": "এক সম্রাটের কাছে চিঠি"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 7 records, from Abdullah ibn Abbas (RA) via Abu Sufyan, the letter the Prophet ﷺ sent to Heraclius. It opens: In the name of Allah, the Most Gracious, the Most Merciful. From Muhammad, the servant of Allah and His Messenger, to Heraclius, the great one of the Romans. Peace be upon whoever follows the guidance. It calls him to accept Islam and be safe, tells him Allah will give him his reward twice, and warns that if he turns away, upon him is the sin of the arisiyyin, the common people of his realm. Then it quotes this verse, from 'O People of the Scripture' to its end.",
            "bn": "সহিহ বুখারির ৭ নম্বর হাদিসে আবদুল্লাহ ইবনে আব্বাস (রাঃ) আবু সুফিয়ানের মুখে শুনে সেই চিঠির কথা বর্ণনা করেছেন, যা নবী ﷺ হিরাক্লিয়াসের কাছে পাঠিয়েছিলেন। চিঠির শুরু: পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে। আল্লাহর বান্দা ও তাঁর রসূল মুহাম্মাদের পক্ষ থেকে রোমের মহান ব্যক্তি হিরাক্লিয়াসের প্রতি। যে হেদায়াতের অনুসরণ করে, তার ওপর শান্তি। এরপর চিঠি তাঁকে ইসলাম গ্রহণ করে নিরাপদ হতে বলে, জানায় যে আল্লাহ তাঁকে দ্বিগুণ প্রতিদান দেবেন, আর সতর্ক করে যে মুখ ফিরিয়ে নিলে আরিসিয়্যিন অর্থাৎ তাঁর রাজ্যের সাধারণ প্রজাদের গুনাহ তাঁর ওপর বর্তাবে। তারপর চিঠিতে এই আয়াতটি উদ্ধৃত হয়, 'হে আহলে কিতাব' থেকে শেষ পর্যন্ত।"
          },
          {
            "en": "The letter shows how the Prophet ﷺ himself used the verse. He named himself first as the servant of Allah. He addressed a Christian emperor with a title of respect. And the one passage of the Quran he set before an emperor was this invitation to a word held in common, ending with the believers' own testimony. The letter's promise of a reward twice sits beside 28:54, where those given the Scripture before, who believe, are given their reward twice.",
            "bn": "চিঠিটি দেখায়, নবী ﷺ নিজে আয়াতটি কীভাবে ব্যবহার করেছেন। নিজের পরিচয় দিয়েছেন সবার আগে আল্লাহর বান্দা বলে। একজন খ্রিস্টান সম্রাটকে সম্বোধন করেছেন সম্মানসূচক উপাধিতে। আর একজন সম্রাটের সামনে কুরআনের যে একটি অংশ তিনি রেখেছেন, তা অভিন্ন এক কথার এই আমন্ত্রণ, যা শেষ হয় মুমিনদের নিজেদের সাক্ষ্যে। চিঠির দ্বিগুণ প্রতিদানের কথার পাশে রাখা যায় ২৮:৫৪ আয়াত, যেখানে আগে কিতাব পাওয়া যারা ঈমান আনে, তাদের প্রতিদান দু'বার দেওয়ার কথা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Arguing in the Best Way",
          "bn": "সর্বোত্তম পন্থায় আলোচনা"
        },
        "p": [
          {
            "en": "29:46 is the closest companion: do not argue with the People of the Scripture except in a way that is best, except for those who commit injustice among them, and say, we believe in what was revealed to us and revealed to you, and our God and your God is one. 3:79-80 give the third clause its sharpest form: it is not for a human being to whom Allah gave the Scripture and prophethood to tell people to be his servants rather than Allah's, nor to order them to take angels and prophets as lords.",
            "bn": "সবচেয়ে কাছের সঙ্গী ২৯:৪৬ আয়াত: আহলে কিতাবের সঙ্গে সর্বোত্তম পন্থা ছাড়া তর্ক করো না, তবে তাদের মধ্যে যারা জুলুম করে তারা ছাড়া; আর বলো, আমাদের প্রতি যা নাযিল হয়েছে আর তোমাদের প্রতি যা নাযিল হয়েছে, আমরা তাতে ঈমান এনেছি, আমাদের ইলাহ আর তোমাদের ইলাহ একই। ৩:৭৯-৮০ আয়াত তৃতীয় অংশটিকে সবচেয়ে ধারালো রূপ দেয়: আল্লাহ যাকে কিতাব ও নবুওয়াত দিয়েছেন, এমন কোনো মানুষের পক্ষে মানুষকে আল্লাহর বদলে নিজের বান্দা হতে বলা সম্ভব নয়, আর ফেরেশতা ও নবীদের রব বানাতে আদেশ করাও নয়।"
          },
          {
            "en": "9:31 names the danger the verse guards against: taking scholars and monks as lords besides Allah, and also the Messiah, son of Maryam, though they were commanded only to worship one God. 42:15 gives the posture to hold: Allah is our Lord and your Lord; for us are our deeds and for you your deeds; Allah will bring us together. And 60:8 keeps the relationship human: Allah does not forbid kindness and justice towards those who have not fought you over religion or driven you from your homes.",
            "bn": "৯:৩১ আয়াত সেই বিপদের নাম বলে, যা থেকে এই আয়াত সাবধান করে: আল্লাহকে ছেড়ে আলেম ও দরবেশদের রব বানানো, আর মারইয়ামের পুত্র মাসীহকেও, অথচ তাদের আদেশ দেওয়া হয়েছিল কেবল এক ইলাহের ইবাদত করতে। ৪২:১৫ আয়াত অবস্থানটা শিখিয়ে দেয়: আল্লাহ আমাদেরও রব, তোমাদেরও রব; আমাদের কাজ আমাদের, তোমাদের কাজ তোমাদের; আল্লাহ আমাদের সবাইকে একত্র করবেন। আর ৬০:৮ আয়াত সম্পর্কটাকে মানবিক রাখে: যারা ধর্মের কারণে তোমাদের সঙ্গে যুদ্ধ করেনি, ঘর থেকে বের করে দেয়নি, তাদের প্রতি সদয় ও ন্যায্য হতে আল্লাহ নিষেধ করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Common Ground, Named Honestly",
          "bn": "অভিন্ন ভিত্তি, সৎভাবে বলা"
        },
        "p": [
          {
            "en": "The verse is a method for conversation across faiths, in three steps. Start where you can honestly call the other person to stand with you, since the verse treats worship of Allah alone as ground both sides can be invited to. Name the difference plainly, as the verse names worship, association and lordship, instead of blurring it to keep the peace. Then accept the other person's answer. If they turn away, you are told what to say about yourself, not what to say about them.",
            "bn": "আয়াতটি ভিন্ন ধর্মের মানুষের সঙ্গে আলাপের একটি পদ্ধতি, তিন ধাপে। শুরু করুন সেখান থেকে, যেখানে অন্যজনকে সৎভাবে পাশে দাঁড়াতে ডাকা যায়, কারণ আয়াতটি এক আল্লাহর ইবাদতকে এমন ভিত্তি ধরে, যার দিকে দুই পক্ষকেই ডাকা যায়। তারপর পার্থক্যটা সোজাসুজি বলুন, যেমন আয়াত ইবাদত, শিরক আর রব বানানোর কথা স্পষ্ট বলেছে। শান্তি রাখার নামে তা ঝাপসা করবেন না। শেষে অন্যজনের জবাব মেনে নিন। তারা মুখ ফিরিয়ে নিলে আপনাকে বলা হয়েছে নিজের সম্পর্কে কী বলবেন, তাদের সম্পর্কে নয়।"
          },
          {
            "en": "In practice, that might be an interfaith evening where you speak of Isa (AS) with the honour the Quran gives him, and still explain why Muslims pray to Allah alone. It might be a colleague who asks what Muslims believe and receives a clear answer without a sneer. The verse is also a mirror. Its third clause asks whether you have made any person, a scholar, a leader, an elder in your own family, into someone whose word overrides the word of Allah.",
            "bn": "বাস্তবে এর মানে হতে পারে কোনো আন্তঃধর্মীয় আলোচনায় ঈসা (আঃ)-র কথা বলা সেই সম্মানে, যা কুরআন তাঁকে দিয়েছে, আবার ব্যাখ্যাও করা কেন মুসলিমরা কেবল আল্লাহর কাছেই প্রার্থনা করে। হতে পারে এমন সহকর্মী, যিনি জানতে চেয়েছেন মুসলিমরা কী বিশ্বাস করে, আর বিদ্রূপ ছাড়া একটি স্পষ্ট জবাব পেয়েছেন। আয়াতটি আয়নাও বটে। এর তৃতীয় অংশ জিজ্ঞেস করে, আপনি কি কাউকে, কোনো আলেম, নেতা বা পরিবারের কোনো মুরব্বিকে, এমন জায়গায় বসিয়েছেন যেখানে তাঁর কথা আল্লাহর কথাকে ছাপিয়ে যায়?"
          }
        ]
      },
      {
        "h": {
          "en": "Bear Witness That We Are Muslims",
          "bn": "সাক্ষী থাকো, আমরা মুসলিম"
        },
        "p": [
          {
            "en": "The verse ends with a declaration rather than a request, and a believer can make it his own: ishhadu bi-anna muslimun, bear witness that we are Muslims. The disciples of Isa (AS) said almost the same in 3:52: we have believed in Allah, and bear witness that we are Muslims. And 5:111 records their answer when Allah inspired them to believe in Him and His messenger: we have believed, so bear witness that we are Muslims. The same testimony runs from his disciples to this verse.",
            "bn": "আয়াত শেষ হয় একটি ঘোষণায়, প্রার্থনায় নয়, আর একজন মুমিন তা নিজের করে নিতে পারেন: ইশহাদূ বি-আন্না মুসলিমূন, সাক্ষী থাকো, আমরা মুসলিম। ঈসা (আঃ)-র হাওয়ারিরা ৩:৫২ আয়াতে প্রায় একই কথা বলেছিল: আমরা আল্লাহর ওপর ঈমান এনেছি, সাক্ষী থাকুন যে আমরা মুসলিম। আর ৫:১১১ আয়াতে আছে, আল্লাহ যখন তাদের অন্তরে তাঁর ও তাঁর রসূলের ওপর ঈমান আনার কথা ঢেলে দিলেন, তারা বলল: আমরা ঈমান এনেছি, সাক্ষী থাকুন যে আমরা মুসলিম। একই সাক্ষ্য তাঁর হাওয়ারিদের মুখ থেকে এই আয়াত পর্যন্ত বয়ে এসেছে।"
          },
          {
            "en": "What follows is a supplication composed from the verse's own clauses, not a transmitted du'a: O Allah, let us worship none but You, associate nothing with You, and take no one as lord besides You; keep us firm when others turn away and gentle when we invite, and let us meet You as Muslims. It asks for the three clauses as a way of life, and for the two manners the verse teaches, fairness in the call and steadiness in the answer.",
            "bn": "নিচের দোয়াটি আয়াতের নিজের অংশগুলো থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আমরা যেন তুমি ছাড়া কারও ইবাদত না করি, তোমার সঙ্গে কিছুকে শরিক না করি, তোমাকে ছেড়ে কাউকে রব না বানাই; অন্যরা মুখ ফিরিয়ে নিলে আমাদের অটল রাখো, ডাকার সময় কোমল রাখো, আর মুসলিম অবস্থায় তোমার সাক্ষাৎ দাও। দোয়াটি তিনটি অংশকে জীবনের পথ হিসেবে চায়, আর চায় আয়াতের শেখানো দুটি আদব: ডাকে ন্যায্যতা, জবাবে অটলতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Before I Invite Anyone",
          "bn": "কাউকে ডাকার আগে"
        },
        "p": [
          {
            "en": "When faith comes up in conversation, do I begin with what I share with the other person, or with what I think is wrong with them? Can I name a difference in belief plainly and still leave the other person their dignity? When someone turns away from what I have said, is my last word a testimony about myself or a parting shot at them? And would I be content if my side of the conversation were quoted back to me word for word?",
            "bn": "কথায় কথায় ঈমানের প্রসঙ্গ এলে আমি কি শুরু করি অন্যজনের সঙ্গে যা মিলে তা দিয়ে, নাকি তার মধ্যে যা ভুল মনে করি তা দিয়ে? বিশ্বাসের পার্থক্য সোজাসুজি বলেও কি অন্যজনের মর্যাদা অটুট রাখতে পারি? আমার কথা শুনে কেউ মুখ ফিরিয়ে নিলে আমার শেষ কথাটা কি নিজের সম্পর্কে সাক্ষ্য, নাকি তার দিকে ছোড়া খোঁচা? আর আলাপে আমার বলা কথাগুলো হুবহু আমাকে পড়ে শোনানো হলে কি আমি স্বস্তি পাব?"
          },
          {
            "en": "The third clause binds me as much as anyone. Whose word, in my life, has quietly come to outrank the word of Allah: a teacher, a leader, a custom of my community, or my own desire? And before I call anyone to worship Allah alone, how much of my own worship is truly for Him alone, in private as well as in public?",
            "bn": "তৃতীয় অংশটি অন্য সবার মতো আমাকেও বাঁধে। আমার জীবনে কার কথা চুপচাপ আল্লাহর কথার ওপরে উঠে গেছে: কোনো শিক্ষক, কোনো নেতা, সমাজের কোনো রীতি, নাকি আমার নিজের খেয়াল? আর কাউকে এক আল্লাহর ইবাদতে ডাকার আগে, একা থাকার সময় আর সবার সামনে, আমার নিজের ইবাদতের কতটা সত্যিই কেবল তাঁর জন্য?"
          }
        ]
      }
    ]
  },
  "3:67-68": {
    "sections": [
      {
        "h": {
          "en": "A Dispute Over a Father",
          "bn": "এক পিতাকে নিয়ে বিবাদ"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and much of its first half speaks to the People of the Book directly. At 3:64 the Prophet ﷺ is told to invite them to a word equitable between both sides: that we worship none but Allah and do not take one another as lords besides Allah. 3:65 then asks why they argue about Ibrahim (AS) when the Torah and the Gospel were revealed only after him, and 3:66 asks why they dispute over what they have no knowledge of. Our two verses give the answer those questions were leading toward.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা, আর এর প্রথম অর্ধেকের বড় অংশ সরাসরি আহলে কিতাবকে সম্বোধন করে। ৩:৬৪ আয়াতে নবী ﷺ-কে বলা হয়, তাদের এমন এক কথার দিকে ডাকুন যা দুই পক্ষের কাছেই সমান: আমরা আল্লাহ ছাড়া কারও ইবাদত করব না, আর আল্লাহকে বাদ দিয়ে একে অন্যকে রব বানাব না। এরপর ৩:৬৫ আয়াত প্রশ্ন তোলে, ইবরাহীম (আঃ)-কে নিয়ে তোমরা কেন তর্ক করো, অথচ তাওরাত আর ইঞ্জিল নাযিল হয়েছে তাঁর পরে? ৩:৬৬ আয়াত জিজ্ঞেস করে, যে বিষয়ে তোমাদের জ্ঞানই নেই, তা নিয়ে কেন বিবাদ? প্রশ্নগুলো যে জবাবের দিকে এগোচ্ছিল, আমাদের দুটি আয়াত সেই জবাব।"
          },
          {
            "en": "Ibn Ishaq relates, with a chain to Ibn Abbas (RA), how the passage came down. Christians of Najran and Jewish rabbis gathered before the Messenger of Allah ﷺ and disputed in his presence. The rabbis said that Ibrahim had been a Jew, and the Christians said that he had been a Christian, and Allah revealed these verses about them. At-Tabari transmits the report and Ibn Kathir quotes it at 3:65. It is a report of the sirah rather than a hadith of the two Sahihs, and it is the account the commentators build on.",
            "bn": "ইবনে ইসহাক ইবনে আব্বাস (রাঃ) পর্যন্ত সনদ দিয়ে বর্ণনা করেন, অংশটি কীভাবে নাযিল হলো। নাজরানের খ্রিস্টানরা আর ইহুদি আলেমরা রাসূলুল্লাহ ﷺ-এর সামনে জড়ো হয়ে তাঁর উপস্থিতিতেই বিতর্ক শুরু করে। আলেমরা বলল, ইবরাহীম ছিলেন ইহুদি। খ্রিস্টানরা বলল, তিনি ছিলেন খ্রিস্টান। তখন আল্লাহ তাদের ব্যাপারে এই আয়াতগুলো নাযিল করেন। তাবারি বর্ণনাটি সনদসহ এনেছেন, ইবনে কাসীর ৩:৬৫ আয়াতের আলোচনায় তা উদ্ধৃত করেছেন। বর্ণনাটি সিরাতের, বুখারি-মুসলিমের হাদিস নয়; তবে মুফাসসিররা এর ওপরই আলোচনা দাঁড় করান।"
          },
          {
            "en": "The dispute was not about a stranger. Both communities claimed a real bond with Ibrahim (AS), and the passage answers with care. What it rebukes in 3:66 is arguing without knowledge. It also keeps distinguishing within the People of the Book: 3:75 opens by saying that some of them return a great amount entrusted to them, and 3:113 says plainly that they are not all the same. The question these verses press is not who owns Ibrahim, but who is actually walking his road.",
            "bn": "বিবাদটা কোনো অচেনা মানুষকে নিয়ে ছিল না। দুই সম্প্রদায়ই ইবরাহীম (আঃ)-এর সঙ্গে নিজেদের সত্যিকারের সম্পর্ক দাবি করত, আর আয়াতগুলো জবাব দেয় সাবধানে। ৩:৬৬ আয়াত যে জিনিসটার নিন্দা করে, তা হলো না জেনে তর্ক করা। আহলে কিতাবের ভেতরেও কুরআন পার্থক্য করে চলে। ৩:৭৫ আয়াত শুরুই হয় এই কথায় যে তাদের কারও কাছে বিপুল সম্পদ আমানত রাখলেও সে ফিরিয়ে দেয়, আর ৩:১১৩ আয়াত সোজা বলে, তারা সবাই এক রকম নয়। আয়াতগুলোর আসল প্রশ্ন তাই এই নয় যে ইবরাহীম কার, বরং তাঁর পথে সত্যিই কে হাঁটছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hanif, Muslim, and Nearness",
          "bn": "হানিফ, মুসলিম আর নৈকট্য"
        },
        "p": [
          {
            "en": "3:67 is built as a denial, an affirmation and a further denial. Ma kana Ibrahimu yahudiyyan wa la nasraniyyan: Ibrahim was neither a Jew nor a Christian. Wa lakin kana hanifan musliman: but he was hanif and muslim. Wa ma kana min al-mushrikin: and he was not of the polytheists. The first denial answers the two claims made in Madinah. The last closes a door that stood open in Makkah, where the House that Ibrahim (AS) raised held idols, as a narration below records.",
            "bn": "৩:৬৭ আয়াতের গঠন এমন: প্রথমে অস্বীকার, তারপর স্বীকার, শেষে আবার অস্বীকার। মা কানা ইবরাহীমু ইয়াহুদিয়্যান ওয়া লা নাসরানিয়্যান: ইবরাহীম ইহুদি ছিলেন না, খ্রিস্টানও না। ওয়া লাকিন কানা হানিফান মুসলিমান: বরং তিনি ছিলেন হানিফ, মুসলিম। ওয়া মা কানা মিনাল মুশরিকিন: আর তিনি মুশরিকদের দলে ছিলেন না। প্রথম অস্বীকার মদিনার দুই দাবির জবাব। শেষেরটি মক্কার দরজাও বন্ধ করে দেয়, কারণ ইবরাহীম (আঃ) যে ঘর তুলেছিলেন সেখানে তখন মূর্তি রাখা ছিল। নিচের একটি বর্ণনায় সে কথা আসছে।"
          },
          {
            "en": "Hanif comes from the root h-n-f. Ar-Raghib, in al-Mufradat, defines hanaf as a leaning away from error toward what is straight, and sets it against janaf, a leaning away from what is straight toward error. The word names a direction, not a membership. Ibn Kathir sets this verse beside 2:135, and there he quotes Muhammad ibn Ka'b al-Qurazi that the hanif is the one on the straight path, and Abu Qilabah that the hanif believes in all the messengers, from the first of them to the last.",
            "bn": "হানিফ শব্দের মূল হা-নুন-ফা। রাগিব ইসফাহানি আল-মুফরাদাত গ্রন্থে বলেন, হানাফ মানে ভুল থেকে সরে সোজা পথের দিকে ঝোঁকা। এর উল্টো জানাফ, অর্থাৎ সোজা পথ থেকে সরে ভুলের দিকে ঝোঁকা। শব্দটা তাই দিক বোঝায়, কোনো দলের সদস্যপদ নয়। ইবনে কাসীর এই আয়াতের পাশে ২:১৩৫ আয়াত রাখেন। সেখানে তিনি মুহাম্মাদ ইবনে কা'ব আল-কুরাযির কথা আনেন, হানিফ সে-ই যে সোজা পথে আছে। আর আনেন আবু কিলাবার কথা, হানিফ সে-ই, যে প্রথম থেকে শেষ পর্যন্ত সব রাসূলের ওপর ঈমান রাখে।"
          },
          {
            "en": "Muslim is the participle of aslama, to submit, and the Quran has already used that verb of Ibrahim himself: at 2:131 his Lord told him to submit, and he answered that he had submitted to the Lord of the worlds. 3:68 turns on another root, w-l-y, which carries nearness. It opens with inna awla an-nas bi-Ibrahim, the most worthy of Ibrahim among the people, and closes with Allahu waliyyu al-mu'minin, Allah is the Ally of the believers. Nearness to Ibrahim and nearness to Allah are named from one root.",
            "bn": "মুসলিম শব্দটি আসলামা ক্রিয়া থেকে, যার অর্থ আত্মসমর্পণ করা। কুরআন ইবরাহীমের বেলায় এই ক্রিয়াটি আগেই ব্যবহার করেছে। ২:১৩১ আয়াতে তাঁর রব তাঁকে বললেন, আত্মসমর্পণ করো; তিনি জবাব দিলেন, আমি জগতসমূহের রবের কাছে আত্মসমর্পণ করলাম। ৩:৬৮ আয়াত দাঁড়িয়ে আছে আরেকটি মূলের ওপর, ওয়াও-লাম-ইয়া, যার ভেতরে নৈকট্যের অর্থ। আয়াতের শুরু ইন্না আওলান নাসি বি-ইবরাহীম, মানুষের মধ্যে ইবরাহীমের সবচেয়ে ঘনিষ্ঠ হকদার। শেষ আল্লাহু ওয়ালিয়্যুল মুমিনিন, আল্লাহ মুমিনদের অভিভাবক। ইবরাহীমের নৈকট্য আর আল্লাহর নৈকট্য, দুটোই বলা হয়েছে এক মূলের শব্দে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Drew Out",
          "bn": "মুফাসসিররা যা বের করে এনেছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reads 3:66 as a rebuke of arguing without knowledge. Had the two communities disputed about their own religions, of which they did have knowledge, and the law given to them, it would have been better for them. Instead they argued about a man whose life came before both of their scriptures, so they are told to refer what they do not know to the One who knows the seen and the unseen. The fault he names is a method, and it is one any community can fall into.",
            "bn": "ইবনে কাসীর ৩:৬৬ আয়াতকে পড়েন না জেনে তর্ক করার নিন্দা হিসেবে। দুই সম্প্রদায় যদি নিজেদের ধর্ম আর তাদেরকে দেওয়া শরিয়ত নিয়ে তর্ক করত, যে বিষয়ে তাদের জ্ঞান ছিল, তবে সেটা তাদের জন্য ভালো হতো। তারা বরং তর্ক করল এমন এক মানুষকে নিয়ে, যাঁর জীবন তাদের দুই কিতাবেরই আগে। তাই তাদের বলা হলো, যা জানো না তা ছেড়ে দাও তাঁর হাতে, যিনি দৃশ্য-অদৃশ্য সব জানেন। ইবনে কাসীর যে দোষ ধরিয়ে দেন তা একটা পদ্ধতির দোষ, আর যেকোনো সম্প্রদায়ই তাতে পড়তে পারে।"
          },
          {
            "en": "The commentators raise an objection a careful reader will feel. If Ibrahim cannot be called a Jew because the Torah came after him, how can he be called a Muslim when the Quran came after him too? The answer lies in the words the verse chose. It does not make him the follower of a later book. It calls him hanif and muslim, a direction and a submission, not the name of a community formed around a later scripture. In the argument of 3:65 the other two names depend on scriptures revealed after him.",
            "bn": "মুফাসসিররা একটা আপত্তি তোলেন, যা মনোযোগী পাঠকের মনেও জাগবে। তাওরাত পরে এসেছে বলে যদি ইবরাহীমকে ইহুদি বলা না যায়, তবে কুরআনও তো পরে এসেছে, তাঁকে মুসলিম বলা যায় কীভাবে? জবাব আছে আয়াতের শব্দ বাছাইয়ে। আয়াত তাঁকে পরের কোনো কিতাবের অনুসারী বানায় না। তাঁকে বলে হানিফ আর মুসলিম, একটি দিক আর একটি আত্মসমর্পণ, পরে নাযিল হওয়া কোনো কিতাবকে ঘিরে গড়ে ওঠা দলের নাম নয়। ৩:৬৫ আয়াতের যুক্তিতে অন্য দুটি নাম নির্ভর করে তাঁর পরে নাযিল হওয়া কিতাবের ওপর।"
          },
          {
            "en": "On 3:68 Ibn Kathir names the groups. The people with the best claim to Ibrahim are those who followed his religion, and this Prophet, Muhammad ﷺ, and his Companions of the Muhajirun and the Ansar and those who followed their lead. He explains the closing words as Allah being the Protector of all who believe in His messengers. In the Urdu and Bengali renderings of his tafsir, the first group is those who followed Ibrahim in his own time, and the list runs on until the Day of Judgment. So the verse can refuse a label and still leave the road open to anyone.",
            "bn": "৩:৬৮ আয়াতে ইবনে কাসীর দলগুলোর নাম বলেন। ইবরাহীমের ওপর সবচেয়ে বেশি হক তাদের, যারা তাঁর দ্বীনের অনুসরণ করেছে, আর এই নবী মুহাম্মাদ ﷺ ও তাঁর সাহাবিদের, অর্থাৎ মুহাজির ও আনসারদের, এবং যারা তাঁদের পথ ধরেছে তাদের। শেষ কথাটির ব্যাখ্যায় তিনি বলেন, আল্লাহ তাঁর রাসূলদের ওপর ঈমান আনা সবার অভিভাবক। তাঁর তাফসীরের উর্দু ও বাংলা অনুবাদ অনুযায়ী প্রথম দলটি হলো তারা, যারা ইবরাহীমের যুগে তাঁর অনুসরণ করেছে, আর তালিকাটি গড়িয়ে যায় কিয়ামত পর্যন্ত। এভাবেই আয়াত একটা তকমা ফিরিয়ে দিয়েও পথটা সবার জন্য খোলা রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Narrations in al-Bukhari",
          "bn": "বুখারির দুটি বর্ণনা"
        },
        "p": [
          {
            "en": "No narration in the two Sahihs is given as the occasion of this verse. Two narrations in Sahih al-Bukhari, though, stand close beside it. The first, from Abdullah ibn Umar (RA), concerns Zayd ibn Amr ibn Nufayl, a man of Quraysh who would not take part in the idol worship of his people. He travelled to ash-Sham asking about religion, and he put his question first to a scholar of the Jews and then to a scholar of the Christians.",
            "bn": "বুখারি-মুসলিমের কোনো বর্ণনাকে এই আয়াতের শানে নুযুল বলা হয়নি। তবে সহিহ বুখারির দুটি বর্ণনা আয়াতটির খুব কাছাকাছি দাঁড়িয়ে আছে। প্রথমটি আবদুল্লাহ ইবনে উমর (রাঃ) থেকে, যায়েদ ইবনে আমর ইবনে নুফাইলকে নিয়ে। তিনি ছিলেন কুরাইশের লোক, নিজের গোত্রের মূর্তিপূজায় শরিক হতেন না। দ্বীনের খোঁজে তিনি শাম দেশে গেলেন। সেখানে প্রথমে এক ইহুদি আলেমকে, তারপর এক খ্রিস্টান আলেমকে নিজের প্রশ্নটা করলেন।"
          },
          {
            "en": "When Zayd asked each scholar whether he knew of any other way, both gave the same answer: to be hanif, the religion of Ibrahim, who was neither a Jew nor a Christian and worshipped none but Allah. Zayd went out, raised his hands and said: O Allah, I bear witness that I am upon the religion of Ibrahim. What stays with the reader is who gave that description. It came from scholars of the two communities themselves, and it is the description 3:67 gives.",
            "bn": "যায়েদ প্রত্যেক আলেমকে জিজ্ঞেস করলেন, আর কোনো পথের কথা কি আপনার জানা আছে? দুজনেই একই উত্তর দিলেন: হানিফ হওয়া, অর্থাৎ ইবরাহীমের দ্বীন। তিনি ইহুদি ছিলেন না, খ্রিস্টানও ছিলেন না, আর আল্লাহ ছাড়া কারও ইবাদত করতেন না। যায়েদ বাইরে এসে দুই হাত তুলে বললেন, হে আল্লাহ, আমি সাক্ষ্য দিচ্ছি যে আমি ইবরাহীমের দ্বীনের ওপর আছি। পাঠকের মনে যা থেকে যায় তা হলো, ইবরাহীমের এই পরিচয় কারা দিয়েছিলেন। দিয়েছিলেন ওই দুই সম্প্রদায়েরই আলেমরা, আর ৩:৬৭ আয়াতও ঠিক এই পরিচয়ই দেয়।"
          },
          {
            "en": "The second, from Ibn Abbas (RA), speaks to the verse's last clause. When the Prophet ﷺ came to Makkah he refused to enter the House while the idols were in it, and ordered them brought out. Among them were images of Ibrahim and Isma'il (AS) holding divining arrows. The Prophet ﷺ said that those who had placed them there knew well that the two had never drawn lots with arrows at all, and he entered only after the House was cleared. The House of the hanif had been filled with exactly what Ibrahim had never been.",
            "bn": "দ্বিতীয়টি ইবনে আব্বাস (রাঃ) থেকে, আয়াতের শেষ অংশটির সঙ্গে মেলে। নবী ﷺ মক্কায় এসে মূর্তি ভেতরে থাকা অবস্থায় কাবাঘরে ঢুকতে রাজি হলেন না, সেগুলো বের করে আনার হুকুম দিলেন। বের করা জিনিসের মধ্যে ছিল ইবরাহীম ও ইসমাঈল (আঃ)-এর ছবি, হাতে ভাগ্য নির্ধারণের তীর। নবী ﷺ বললেন, যারা এগুলো সেখানে রেখেছিল তারা ভালো করেই জানত, এই দুজন কখনো তীর দিয়ে ভাগ্য যাচাই করেননি। ঘর খালি হওয়ার পরই নবী ﷺ ভেতরে গেলেন। হানিফের ঘর ভরে ছিল ঠিক সেই জিনিসে, যা ইবরাহীম (আঃ) কখনো ছিলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else He Is Called Hanif",
          "bn": "আর কোথায় তাঁকে হানিফ বলা হয়েছে"
        },
        "p": [
          {
            "en": "2:135 gives the earlier form of the same answer: they say, be Jews or Christians and you will be guided, and the reply is the religion of Ibrahim, inclining toward truth, who was not of the polytheists. 16:120 describes him as devoutly obedient to Allah and inclining toward truth, and 16:121 adds that he was grateful for His favours and that Allah chose him and guided him to a straight path. Those are the traits a follower is actually asked to share.",
            "bn": "২:১৩৫ আয়াতে একই জবাবের আগের রূপ: তারা বলে, ইহুদি বা খ্রিস্টান হয়ে যাও, পথ পাবে; জবাবে বলা হয় ইবরাহীমের দ্বীনের কথা, যিনি একনিষ্ঠ ছিলেন আর মুশরিকদের কেউ ছিলেন না। ১৬:১২০ আয়াত তাঁকে বলে আল্লাহর প্রতি বিনয়াবনত ও একনিষ্ঠ। ১৬:১২১ আয়াত যোগ করে, তিনি আল্লাহর নিয়ামতের শোকর করতেন, আর আল্লাহ তাঁকে বেছে নিয়ে সরল পথ দেখিয়েছিলেন। অনুসারীর কাছে আসলে এই গুণগুলোই চাওয়া হয়।"
          },
          {
            "en": "16:123 then tells the Prophet ﷺ to follow the religion of Ibrahim, inclining toward truth, which is the bond our passage names when it counts this Prophet among the nearest to him. 22:78 calls the believers' religion the religion of your father Ibrahim and says that Allah named you Muslims before and in this revelation. And 3:95, later in this same surah, closes the argument with a command: say, Allah has told the truth, so follow the religion of Ibrahim, inclining toward truth.",
            "bn": "১৬:১২৩ আয়াতে নবী ﷺ-কে ওহি করে বলা হয়, একনিষ্ঠ ইবরাহীমের পথ অনুসরণ করুন। আমাদের অংশটি যখন এই নবীকে ইবরাহীমের সবচেয়ে কাছের মানুষদের মধ্যে গোনে, তখন এই বন্ধনের কথাই বলে। ২২:৭৮ আয়াত মুমিনদের দ্বীনকে বলে তোমাদের পিতা ইবরাহীমের দ্বীন, আর জানায় আল্লাহ আগেও তোমাদের নাম রেখেছেন মুসলিম, এই কিতাবেও। একই সূরার পরের দিকে ৩:৯৫ আয়াত তর্কের ইতি টানে একটি হুকুম দিয়ে: বলুন, আল্লাহ সত্য বলেছেন, তাই একনিষ্ঠভাবে ইবরাহীমের অনুসরণ করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking His Road Today",
          "bn": "আজকের দিনে তাঁর পথে হাঁটা"
        },
        "p": [
          {
            "en": "The first practice is honesty about labels. Every community, Muslims included, is tempted to claim a righteous forebear and stop there. The verse measures nearness by following, so the useful question is not whose name I carry but whose habits I keep. The Quran shows Ibrahim (AS) breaking with his people's idols, asking to be made one who keeps up the prayer, and hurrying to feed his guests. A week measured against things like these tells a believer more than any title can.",
            "bn": "প্রথম আমল হলো তকমার ব্যাপারে সৎ থাকা। মুসলিমসহ প্রত্যেক সম্প্রদায়েরই লোভ হয় কোনো নেককার পূর্বপুরুষকে নিজেদের বলে দাবি করে থেমে যেতে। আয়াত নৈকট্য মাপে অনুসরণ দিয়ে। তাই কাজের প্রশ্ন এটা নয় যে আমি কার নাম বহন করি, বরং কার অভ্যাসগুলো ধরে রাখি। কুরআন দেখায়, ইবরাহীম (আঃ) নিজের জাতির মূর্তির সঙ্গে সম্পর্ক ছিন্ন করছেন, দোয়া করছেন যেন তাঁকে নামাজ কায়েমকারী বানানো হয়, আর মেহমানদের খাওয়াতে তাড়াহুড়ো করছেন। এমন জিনিস দিয়ে একটা সপ্তাহ মাপলে যেকোনো উপাধির চেয়ে বেশি জানা যায়।"
          },
          {
            "en": "The second is the method of 3:66. When talk turns to another faith, at work, online or at the family table, speak only about what you actually know, and report what others hold in the way they hold it. Arguing over what one has no knowledge of is exactly what this passage rebukes, and the rebuke does not change its target because the speaker is a Muslim. Where you do not know, say so, and leave the matter with the One who knows while you do not.",
            "bn": "দ্বিতীয় আমল ৩:৬৬ আয়াতের পদ্ধতি। কাজের জায়গায়, অনলাইনে বা পরিবারের খাবার টেবিলে যখন অন্য কোনো ধর্মের কথা ওঠে, তখন শুধু ততটুকুই বলুন যতটুকু সত্যিই জানেন। অন্যরা যা বিশ্বাস করে, তা সেভাবেই তুলে ধরুন যেভাবে তারা নিজেরা বিশ্বাস করে। না জেনে তর্ক করাই এই অংশে নিন্দিত, আর বক্তা মুসলিম হলে সেই নিন্দা বদলে যায় না। যেখানে জানেন না, সেখানে সেটা স্বীকার করুন। বিষয়টা ছেড়ে দিন তাঁর কাছে, যিনি জানেন আর আমরা জানি না।"
          },
          {
            "en": "The third is in the prayer itself. A Muslim who opens the salah with the supplication given below, and who asks for blessing on Muhammad ﷺ as blessing came upon Ibrahim (AS) and his family, joins those two names every day. That is not ornament. It is a daily reminder that the line from Ibrahim runs through submission, and that the one praying is being asked to belong to that line by the way he lives, not only by the words he says.",
            "bn": "তৃতীয় আমল খোদ নামাজের ভেতরে। যে মুসলিম নিচের দোয়াটি দিয়ে নামাজ শুরু করেন, আর মুহাম্মাদ ﷺ-এর ওপর রহমত চান যেমন রহমত এসেছিল ইবরাহীম (আঃ) ও তাঁর পরিবারের ওপর, তিনি প্রতিদিন এই দুই নাম একসঙ্গে উচ্চারণ করেন। এটা সাজসজ্জা নয়। প্রতিদিনের মনে করিয়ে দেওয়া যে ইবরাহীমের ধারা চলে আত্মসমর্পণের পথ ধরে। নামাজির কাছে চাওয়া হচ্ছে, তিনি সেই ধারার অংশ হোন শুধু মুখের কথায় নয়, জীবনযাপনের ধরনে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Face Turned Toward Him",
          "bn": "তাঁর দিকে ফেরানো মুখ"
        },
        "p": [
          {
            "en": "Sahih Muslim records from Ali (RA) that when the Prophet ﷺ stood for prayer he would begin with a supplication that takes up the words of Ibrahim (AS) at 6:79: I have turned my face toward the One who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah. Both of our verse's descriptions are in it, hanif and not of the polytheists, spoken at the very threshold of worship.",
            "bn": "সহিহ মুসলিমে আলি (রাঃ) থেকে বর্ণিত, নবী ﷺ নামাজে দাঁড়ালে এমন একটি দোয়া দিয়ে শুরু করতেন, যাতে আছে ৬:৭৯ আয়াতে ইবরাহীম (আঃ)-এর কথাগুলো: আমি একনিষ্ঠ হয়ে আমার মুখ ফেরালাম তাঁর দিকে, যিনি আসমান আর জমিন সৃষ্টি করেছেন, আর আমি মুশরিকদের কেউ নই। আমাদের আয়াতের দুটি বর্ণনাই এতে আছে, হানিফ হওয়া আর মুশরিক না হওয়া। আর তা উচ্চারিত হয় ইবাদতের একেবারে দরজায় দাঁড়িয়ে।"
          },
          {
            "en": "Alongside it, a short supplication in the vocabulary of 3:67-68, offered as such and not as a transmitted wording: O Allah, make me hanif and muslim, turned from what is crooked toward You and submitting to You. Keep me far from associating anything with You. Place me among those who truly follow Ibrahim and this Prophet ﷺ, and be my Ally, for You are the Ally of the believers.",
            "bn": "এর পাশাপাশি ৩:৬৭-৬৮ আয়াতের শব্দ থেকে গড়া একটি ছোট দোয়া। এটি বর্ণিত কোনো দোয়া নয়, আয়াতের ভাষায় সাজানো: হে আল্লাহ, আমাকে হানিফ ও মুসলিম বানাও, বাঁকা পথ ছেড়ে তোমার দিকে ফেরা আর তোমার কাছে আত্মসমর্পিত। তোমার সঙ্গে কিছু শরিক করা থেকে আমাকে দূরে রাখো। যারা সত্যিই ইবরাহীম আর এই নবী ﷺ-এর অনুসরণ করে, আমাকে তাদের মধ্যে রাখো। তুমি আমার অভিভাবক হও, কারণ তুমিই মুমিনদের অভিভাবক।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Road",
          "bn": "পথে বয়ে নেওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "Which name do I lean on, a family, a school of thought, a community or a well-known teacher, in place of actually following the way it stands for? If my direction over the past month were drawn as a line, would it lean toward what is straight or away from it? Is there something I rely on besides Allah that I would never call worship, but that I treat as if it could save me?",
            "bn": "কোন নামের ওপর আমি ভর দিই, পরিবার, মাযহাব, সম্প্রদায় নাকি কোনো নামকরা উস্তাদ, অথচ সেই নাম যে পথের কথা বলে তা আসলে অনুসরণ করি না? গত এক মাসে আমার চলার দিকটা যদি একটা রেখা হিসেবে আঁকা হতো, সেটা কি সোজার দিকে হেলে থাকত, নাকি সোজা থেকে দূরে? আল্লাহ ছাড়া এমন কিছুর ওপর কি ভরসা করি, যাকে কখনো ইবাদত বলব না, অথচ আচরণ করি যেন সে-ই আমাকে বাঁচাবে?"
          },
          {
            "en": "When I last spoke about another faith, did I speak from knowledge, or did I argue about what I did not know? Ibrahim (AS) is described as hanif and muslim before any other title the verse could have given him. If the people who know me best described me in two words, what would those words be, and would I be glad to hear them on the Day I meet my Lord?",
            "bn": "শেষবার অন্য কোনো ধর্ম নিয়ে যখন কথা বলেছি, তখন কি জেনে বলেছি, নাকি না জেনে তর্ক করেছি? আয়াত ইবরাহীম (আঃ)-কে আর যেকোনো উপাধি দিতে পারত, কিন্তু প্রথমে বলেছে হানিফ আর মুসলিম। যারা আমাকে সবচেয়ে ভালো চেনে, তারা যদি দুই শব্দে আমার বর্ণনা দেয়, শব্দ দুটো কী হবে? যেদিন রবের সামনে দাঁড়াব, সেদিন কি সেই শব্দ দুটো শুনে আমি খুশি হব?"
          }
        ]
      }
    ]
  },
  "3:76-77": {
    "sections": [
      {
        "h": {
          "en": "A Claim and Its Answer",
          "bn": "একটি দাবি, একটি জবাব"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and this part of it is addressed to and about the People of the Book. 3:75 opens by describing two kinds among them. One, entrusted with a great amount, returns it; another, entrusted with a single coin, will not return it unless you keep standing over him. The verse gives the second man's reason: they say there is no blame upon us concerning the unlearned, and they speak untruth about Allah while they know it. Our passage begins with the reply.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা, আর এই অংশের কথা আহলে কিতাবকে নিয়ে, তাদের উদ্দেশেই। ৩:৭৫ আয়াত শুরু হয় তাদের মধ্যকার দুই ধরনের মানুষের বর্ণনা দিয়ে। একজনের কাছে বিপুল সম্পদ আমানত রাখলে সে ফিরিয়ে দেয়। আরেকজনের কাছে একটা দিনার রাখলেও সে ফেরত দেয় না, যতক্ষণ না আপনি তার মাথার ওপর দাঁড়িয়ে থাকেন। দ্বিতীয়জনের যুক্তিও আয়াত জানিয়ে দেয়: তারা বলে, নিরক্ষরদের ব্যাপারে আমাদের কোনো দায় নেই। আর জেনেশুনে তারা আল্লাহর নামে মিথ্যা বলে। আমাদের অংশটি শুরু হয় এর জবাব দিয়ে।"
          },
          {
            "en": "3:76 begins with bala, the Arabic word that contradicts a negative statement, and the negative in front of it is that claim of no blame. Yes, there is: whoever fulfils his commitment and fears Allah, then Allah loves those who fear Him. 3:77 then describes the reverse case in full. After it, 3:78 turns to a party who twist the Scripture with their tongues, and 3:79 to what no prophet could ever tell people. Trust with people and trust with revelation run side by side through these verses.",
            "bn": "৩:৭৬ আয়াতের প্রথম শব্দ বালা। আরবিতে এই শব্দ কোনো নেতিবাচক কথাকে খণ্ডন করে, আর এর ঠিক আগের নেতিবাচক কথাটি হলো, আমাদের কোনো দায় নেই। জবাব: হ্যাঁ, আছে। যে নিজের ওয়াদা পূরণ করে আর আল্লাহকে ভয় করে চলে, আল্লাহ এমন মুত্তাকিদের ভালোবাসেন। এরপর ৩:৭৭ আয়াত উল্টো চিত্রটা পুরোপুরি এঁকে দেয়। তার পরে ৩:৭৮ আয়াত বলে এমন একদলের কথা, যারা জিহ্বা বাঁকিয়ে কিতাব বিকৃত করে। ৩:৭৯ আয়াত বলে, কোনো নবী মানুষকে কী কখনো বলতে পারেন না। মানুষের আমানত আর ওহির আমানত, দুটোই পাশাপাশি চলে এই আয়াতগুলোয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Covenant, Oaths, a Small Price",
          "bn": "অঙ্গীকার, কসম আর সামান্য দাম"
        },
        "p": [
          {
            "en": "The verse names two things that are sold. 'Ahd Allah is the covenant of Allah, what He has bound a person to. Ayman is the plural of yamin, the right hand, and Lisan al-Arab records the explanation that an oath came to be called yamin because when people swore to one another each struck his right hand on the other's. So the pair covers both directions of a promise: what a person owes his Lord, and what he has sworn, by his Lord, to other people.",
            "bn": "আয়াত দুটি জিনিসের নাম বলে, যা বেচে দেওয়া হয়। আহদুল্লাহ মানে আল্লাহর অঙ্গীকার, তিনি মানুষকে যা মানতে বেঁধে দিয়েছেন। আইমান হলো ইয়ামিনের বহুবচন, যার অর্থ ডান হাত। লিসানুল আরবে এই ব্যাখ্যা লিপিবদ্ধ আছে যে কসমকে ইয়ামিন বলা হয় কারণ মানুষ পরস্পর কসম খাওয়ার সময় একে অন্যের ডান হাতে নিজের ডান হাত মারত। জোড়াটা তাই ওয়াদার দুই দিকই ধরে: রবের প্রতি মানুষের যা দায়, আর রবের নামে মানুষকে সে যা কসম করে দিয়েছে।"
          },
          {
            "en": "Yashtaruna bi-'ahdi Allah... thamanan qalilan: they exchange the covenant of Allah for a small price. In this construction the thing handed over carries the preposition bi, so the covenant is what leaves their hands and the price is what they take. Ibn Kathir explains the price as the small things of this short life that soon comes to an end. Nothing is said about how large the gain looked at the time. Whatever it was, the verse has already named it small.",
            "bn": "ইয়াশতারুনা বি-আহদিল্লাহি... সামানান কালিলা: তারা আল্লাহর অঙ্গীকারের বিনিময়ে সামান্য দাম নেয়। এই গঠনে যে জিনিসটা হাতছাড়া হয় তার আগে বসে বি অব্যয়। তাই অঙ্গীকারটা তাদের হাত থেকে বেরিয়ে যায়, আর দামটা তারা হাতে পায়। ইবনে কাসীর এই দামের ব্যাখ্যা করেন দুনিয়ার ক্ষণস্থায়ী, দ্রুত ফুরিয়ে যাওয়া জীবনের তুচ্ছ জিনিস বলে। সেই সময় লাভটা কত বড় দেখাচ্ছিল, আয়াত সে কথা তোলে না। যা-ই হোক, আয়াত আগেই তার নাম দিয়ে দিয়েছে সামান্য।"
          },
          {
            "en": "Then the verse piles denial on denial. La khalaqa lahum fi al-akhirah: no share for them in the Hereafter, khalaq being a portion or lot. Wa la yukallimuhum Allah: Allah will not speak to them. Wa la yanzuru ilayhim yawm al-qiyamah: nor look at them on the Day of Resurrection. Wa la yuzakkihim: nor purify them. Only after these four does the verse affirm anything, and what it affirms is a painful punishment. 2:174 uses two of the same denials, speech and purifying; 3:77 adds the share and the look.",
            "bn": "এরপর আয়াত একের পর এক অস্বীকার সাজায়। লা খালাকা লাহুম ফিল আখিরাহ: আখিরাতে তাদের কোনো অংশ নেই, খালাক মানে ভাগ বা হিস্যা। ওয়া লা ইউকাল্লিমুহুমুল্লাহ: আল্লাহ তাদের সঙ্গে কথা বলবেন না। ওয়া লা ইয়ানযুরু ইলাইহিম ইয়াওমাল কিয়ামাহ: কিয়ামতের দিন তাদের দিকে তাকাবেন না। ওয়া লা ইউযাক্কিহিম: তাদের পবিত্রও করবেন না। এই চারটির পরেই শুধু আয়াত কিছু একটা নিশ্চিত করে, আর তা হলো যন্ত্রণাদায়ক শাস্তি। ২:১৭৪ আয়াতে এর দুটি আছে, কথা না বলা আর পবিত্র না করা; ৩:৭৭ আয়াত যোগ করে অংশ আর দৃষ্টি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir and Ibn Abbas",
          "bn": "ইবনে কাসীর ও ইবনে আব্বাস"
        },
        "p": [
          {
            "en": "Ibn Kathir first reads the passage in its setting. Fulfilling the commitment in 3:76 includes the covenant Allah took from the People of the Book to believe in Muhammad ﷺ when he was sent, the same covenant He took from all the prophets and their nations. Those in 3:77, in that reading, preferred the small things of this life to what they had promised Allah: following him, and making known the description of him in their books. He then turns to the narrations, which widen the verse to every false oath.",
            "bn": "ইবনে কাসীর প্রথমে অংশটি পড়েন তার প্রেক্ষাপটে। ৩:৭৬ আয়াতে ওয়াদা পূরণের মধ্যে পড়ে সেই অঙ্গীকারও, যা আল্লাহ আহলে কিতাবের কাছ থেকে নিয়েছিলেন: মুহাম্মাদ ﷺ প্রেরিত হলে তাঁর ওপর ঈমান আনবে। একই অঙ্গীকার তিনি নিয়েছিলেন সব নবী আর তাঁদের উম্মতের কাছ থেকে। এই পাঠে ৩:৭৭ আয়াতের লোকেরা আল্লাহকে দেওয়া কথার চেয়ে দুনিয়ার তুচ্ছ জিনিসকে বেশি দাম দিয়েছে। কথা ছিল নবী ﷺ-এর অনুসরণ করবে আর নিজেদের কিতাবে তাঁর যে বর্ণনা আছে তা মানুষকে জানাবে। এরপর তিনি হাদিসগুলো আনেন, যা আয়াতটিকে প্রতিটি মিথ্যা কসম পর্যন্ত ছড়িয়ে দেয়।"
          },
          {
            "en": "On the four denials Ibn Kathir is precise. Allah will not speak to them with words of kindness, nor look at them with any mercy, nor purify them of their sins and impurities; rather, they are sent to the Fire. The qualifier matters. The Quran does record Allah addressing people in the Fire, as in 23:108, where He tells them to remain despised there and not to speak to Him. What is withheld in 3:77 is the speech and the look of mercy.",
            "bn": "চারটি অস্বীকারের ব্যাখ্যায় ইবনে কাসীর খুব নির্দিষ্ট। আল্লাহ তাদের সঙ্গে দয়ার কথা বলবেন না, রহমতের দৃষ্টিতে তাকাবেন না, গুনাহ আর অপবিত্রতা থেকে তাদের পবিত্র করবেন না; বরং তাদের পাঠানো হবে জাহান্নামে। এই শর্তটুকু গুরুত্বপূর্ণ। কুরআনে আল্লাহ জাহান্নামিদের উদ্দেশে কথা বলছেন, এমন বর্ণনাও আছে। ২৩:১০৮ আয়াতে তিনি তাদের বলেন, লাঞ্ছিত হয়ে সেখানেই পড়ে থাকো, আমার সঙ্গে কথা বোলো না। ৩:৭৭ আয়াতে যা আটকে রাখা হয়েছে, তা রহমতের কথা আর রহমতের দৃষ্টি।"
          },
          {
            "en": "Under 3:75 Ibn Kathir brings a report from Abd ar-Razzaq that shows how the Companions heard this passage. A man told Ibn Abbas (RA) that on campaigns they would take chickens and sheep belonging to the protected non-Muslims, telling themselves there was no sin in it. Ibn Abbas answered that this was exactly what the People of the Book had said, there is no blame upon us concerning the unlearned, and that once such people pay the jizyah their property is not lawful except with their consent.",
            "bn": "৩:৭৫ আয়াতের আলোচনায় ইবনে কাসীর আবদুর রাযযাকের একটি বর্ণনা আনেন, যাতে বোঝা যায় সাহাবিরা এই অংশকে কীভাবে শুনতেন। এক লোক ইবনে আব্বাস (রাঃ)-কে জানাল, অভিযানে গিয়ে তারা মুসলিম শাসনের নিরাপত্তায় থাকা অমুসলিমদের (জিম্মি) মুরগি-ছাগল নিয়ে নেয়, আর মনে করে এতে কোনো গুনাহ নেই। ইবনে আব্বাস বললেন, আহলে কিতাবও ঠিক এই কথাই বলেছিল: নিরক্ষরদের ব্যাপারে আমাদের কোনো দায় নেই। তিনি আরও বললেন, তারা জিযিয়া দিলে তাদের সম্মতি ছাড়া তাদের সম্পদ তোমাদের জন্য হালাল নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath That Takes a Right",
          "bn": "যে কসম অন্যের হক কেড়ে নেয়"
        },
        "p": [
          {
            "en": "Both Sahihs record from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said that whoever swears a false oath to take the wealth of a Muslim man will meet Allah while He is angry with him, and that Allah sent down 3:77 confirming it. Al-Ash'ath ibn Qays (RA) said the verse came down about him. He had a dispute with another man over a property; the Prophet ﷺ asked him for witnesses; he had none, and the Prophet ﷺ said the matter would rest on the other man's oath. Al-Ash'ath protested that the man would simply swear.",
            "bn": "বুখারি ও মুসলিম দুই গ্রন্থেই আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: যে ব্যক্তি কোনো মুসলিমের সম্পদ হাতিয়ে নিতে মিথ্যা কসম খায়, সে আল্লাহর সঙ্গে এমন অবস্থায় সাক্ষাৎ করবে যে তিনি তার ওপর রাগান্বিত। আর আল্লাহ এর সত্যায়ন করে ৩:৭৭ আয়াত নাযিল করেন। আশআস ইবনে কায়স (রাঃ) বলেন, আয়াতটি তাঁকে নিয়েই নাযিল হয়েছে। এক ব্যক্তির সঙ্গে একটি সম্পত্তি নিয়ে তাঁর বিবাদ ছিল। নবী ﷺ তাঁর কাছে সাক্ষী চাইলেন। সাক্ষী না থাকায় নবী ﷺ বললেন, তাহলে ফয়সালা হবে অন্যজনের কসমে। আশআস আপত্তি করলেন, সে তো অনায়াসে কসম খেয়ে ফেলবে।"
          },
          {
            "en": "Al-Bukhari also records from Abdullah ibn Abi Awfa (RA) that a man set out his goods in the market and swore by Allah that he had been offered for them what he had not been offered, to draw a Muslim buyer in, and the verse came down. Sound reports can give a verse more than one occasion, and neither report narrows this one to a single community. Both are about what a person does with an oath when money is on the table.",
            "bn": "বুখারি আবদুল্লাহ ইবনে আবি আওফা (রাঃ) থেকেও বর্ণনা করেছেন: এক লোক বাজারে মাল সাজিয়ে আল্লাহর কসম খেয়ে বলল, এর জন্য তাকে এত দাম দিতে চাওয়া হয়েছে, অথচ কেউ তা চায়নি। উদ্দেশ্য ছিল একজন মুসলিম ক্রেতাকে ফাঁদে ফেলা। তখন আয়াতটি নাযিল হয়। একটি আয়াতের একাধিক শানে নুযুল সহিহ বর্ণনায় আসতে পারে। দুটি বর্ণনার কোনোটিই আয়াতটিকে এক সম্প্রদায়ে সীমাবদ্ধ করে না। দুটিই এ নিয়ে যে টাকার প্রশ্ন সামনে এলে মানুষ কসমের সঙ্গে কী আচরণ করে।"
          },
          {
            "en": "Sahih Muslim records from Abu Dharr (RA) that the Prophet ﷺ said there are three whom Allah will not speak to on the Day of Resurrection, nor look at, nor purify, and theirs is a painful punishment. The Prophet ﷺ said it three times, and Abu Dharr said: they have failed and lost; who are they, O Messenger of Allah? The Prophet ﷺ answered: the one who lets his garment trail, the one who reminds people of what he gave, and the one who sells his goods by a false oath. The hadith speaks in the verse's own denials.",
            "bn": "সহিহ মুসলিমে আবু যর (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: তিন ধরনের মানুষের সঙ্গে আল্লাহ কিয়ামতের দিন কথা বলবেন না, তাদের দিকে তাকাবেন না, তাদের পবিত্রও করবেন না, আর তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। নবী ﷺ কথাটা তিনবার বললেন। আবু যর বললেন, তারা ব্যর্থ হলো, ক্ষতিগ্রস্ত হলো; ইয়া রাসূলাল্লাহ, তারা কারা? নবী ﷺ বললেন: যে কাপড় ঝুলিয়ে টেনে চলে, যে দান করে খোঁটা দেয়, আর যে মিথ্যা কসম খেয়ে নিজের মাল বিক্রি করে। হাদিসটি কথা বলে আয়াতেরই অস্বীকারগুলোর ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Keep the Same Word",
          "bn": "একই কথা রাখে যে আয়াতগুলো"
        },
        "p": [
          {
            "en": "16:91 commands believers to fulfil the covenant of Allah once they have taken it and not to break oaths after confirming them, since they have made Allah a witness over themselves. 16:95 then repeats our verse's phrase as a prohibition: do not exchange the covenant of Allah for a small price, for what is with Allah is better for you, if only you knew. 17:34 adds that every commitment is something a person will be questioned about.",
            "bn": "১৬:৯১ আয়াত মুমিনদের হুকুম দেয়, আল্লাহর অঙ্গীকার একবার করলে তা পূরণ করো, আর পাকা করার পর কসম ভেঙো না, কারণ তোমরা আল্লাহকে নিজেদের ওপর সাক্ষী বানিয়েছ। ১৬:৯৫ আয়াত আমাদের আয়াতের কথাটিকেই নিষেধ হিসেবে আবার বলে: আল্লাহর অঙ্গীকার সামান্য দামে বেচো না, আল্লাহর কাছে যা আছে তা-ই তোমাদের জন্য উত্তম, যদি জানতে। ১৭:৩৪ আয়াত যোগ করে, প্রতিটি ওয়াদা নিয়ে জিজ্ঞাসাবাদ হবে।"
          },
          {
            "en": "5:89, after setting out the expiation for oaths, adds a short command: guard your oaths. And 3:199, near the end of this same surah, gives the counterpart to our verse from within the People of the Book: among them are those who believe in Allah and in what was revealed to you and to them, humbly submissive to Allah, who do not exchange the verses of Allah for a small price, and their reward is with their Lord.",
            "bn": "৫:৮৯ আয়াত কসমের কাফফারার বিধান জানানোর পর একটি ছোট হুকুম যোগ করে: তোমাদের কসম রক্ষা করো। আর এই সূরারই শেষের দিকে ৩:১৯৯ আয়াত আহলে কিতাবের ভেতর থেকেই আমাদের আয়াতের বিপরীত ছবি দেখায়। তাদের মধ্যে এমন লোক আছে, যারা আল্লাহর ওপর ঈমান রাখে, তোমাদের ওপর যা নাযিল হয়েছে আর তাদের ওপর যা নাযিল হয়েছে তার ওপরও। তারা আল্লাহর প্রতি বিনয়াবনত, আল্লাহর আয়াত সামান্য দামে বেচে না। তাদের প্রতিদান তাদের রবের কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "In the Market and the Courtroom",
          "bn": "বাজারে আর বিচারের জায়গায়"
        },
        "p": [
          {
            "en": "The market man in Ibn Abi Awfa's report has modern relatives: the seller who invents a higher offer to push a buyer, the listing that says barely used, the review written by the shop. None of them may swear aloud, but a sworn claim is the sharpest form of the same trade. The practice the verse asks for is simple to state and costly to keep: say about your goods only what is true, even when a small lie would close the sale today.",
            "bn": "ইবনে আবি আওফার বর্ণনার সেই বিক্রেতার আজকের দিনেও আত্মীয় আছে। কেউ ক্রেতাকে চাপ দিতে বানিয়ে বলে, আরেকজন আরও বেশি দিতে চেয়েছিল। কেউ বিজ্ঞাপনে লেখে প্রায় নতুন। কেউ নিজের দোকানের রিভিউ নিজেই লেখে। এদের কেউ হয়তো মুখে কসম খায় না, কিন্তু কসম খেয়ে বলা দাবি একই কারবারের সবচেয়ে ধারালো রূপ। আয়াত যে আমল চায় তা বলা সহজ, রাখা কঠিন: নিজের মাল সম্পর্কে শুধু সত্যটাই বলুন, একটা ছোট মিথ্যায় আজকের বিক্রিটা পাকা হয়ে গেলেও।"
          },
          {
            "en": "Al-Ash'ath's dispute shows the other place oaths live: courts, inheritance quarrels, workplace complaints, signed statements. The Prophet ﷺ let a case rest on an oath when there were no witnesses, which means a false oath can actually win. That is exactly why the warning is so heavy. A believer signs no document and gives no statement he knows to be false, and in a family dispute he would rather lose a share of land than meet his Lord with it.",
            "bn": "আশআস (রাঃ)-এর বিবাদ দেখায়, কসমের আরেক ঠিকানা কোথায়: আদালত, মিরাসের ঝগড়া, অফিসের অভিযোগ, সই করা জবানবন্দি। সাক্ষী না থাকলে নবী ﷺ ফয়সালা কসমের ওপর ছেড়ে দিয়েছিলেন। এর মানে মিথ্যা কসমে সত্যিই মামলা জেতা যায়। ঠিক এই কারণেই সতর্কবাণী এত ভারী। মুমিন জেনেশুনে মিথ্যা কোনো কাগজে সই করেন না, মিথ্যা জবানবন্দি দেন না। পারিবারিক বিবাদে এক টুকরো জমি হারানো তাঁর কাছে সহজ, সেই জমি নিয়ে রবের সামনে দাঁড়ানোর চেয়ে।"
          },
          {
            "en": "And the claim of 3:75 has to be refused at home. Ibn Abbas (RA) did not let Muslims excuse themselves with an exception for outsiders, and neither may we: a non-Muslim colleague, a customer we will never see again, the state, a large company. Keep one standard of honesty for everyone. Promises to Allah belong here too, the vow made in a hard hour and the resolve made after a sin, because the verse names the covenant of Allah before it names oaths to people.",
            "bn": "৩:৭৫ আয়াতের দাবিটাকে নিজেদের বেলাতেও বাতিল করতে হবে। ইবনে আব্বাস (রাঃ) মুসলিমদের বাইরের লোকদের বেলায় ছাড় নিতে দেননি, আমরাও নিতে পারি না। অমুসলিম সহকর্মী, আর কখনো দেখা হবে না এমন গ্রাহক, রাষ্ট্র, বড় কোনো কোম্পানি, সবার জন্য সততার মাপ একটাই। আল্লাহকে দেওয়া ওয়াদাও এর মধ্যে পড়ে। বিপদের সময়ের মানত, গুনাহের পর তওবার সংকল্প, সবই। কারণ আয়াত মানুষকে দেওয়া কসমের আগে আল্লাহর অঙ্গীকারের নাম নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Taqwa and Enough",
          "bn": "তাকওয়া আর যথেষ্টতার দোয়া"
        },
        "p": [
          {
            "en": "Sahih Muslim records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: O Allah, I ask You for guidance, taqwa, chastity and sufficiency. It is not a supplication the commentators attach to this verse, but it asks for exactly what the verse's two people differ in. Taqwa is the word of 3:76, and sufficiency is what makes a small price stop looking large.",
            "bn": "সহিহ মুসলিমে আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণিত, নবী ﷺ বলতেন: হে আল্লাহ, আমি তোমার কাছে হেদায়েত, তাকওয়া, পবিত্রতা আর অভাবমুক্তি চাই। মুফাসসিররা এই দোয়াকে এই আয়াতের সঙ্গে জুড়ে দেননি। তবু আয়াতের দুই ধরনের মানুষের তফাত যে জিনিসগুলোয়, দোয়াটি ঠিক সেগুলোই চায়। তাকওয়া ৩:৭৬ আয়াতেরই শব্দ। আর মন অভাবমুক্ত হলে সামান্য দাম আর বড় দেখায় না।"
          },
          {
            "en": "Alongside it, a supplication in the vocabulary of 3:76-77, offered as such and not as a transmitted wording: O Allah, make me of those who fulfil their commitment and fear You, whom You love. Do not let me sell Your covenant or my word for any price. Do not withhold from me Your speech, Your look and Your purifying on the Day of Resurrection, and protect me from a painful punishment.",
            "bn": "এর পাশাপাশি ৩:৭৬-৭৭ আয়াতের শব্দে সাজানো একটি দোয়া, এটি বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আমাকে তাদের মধ্যে রাখো, যারা ওয়াদা পূরণ করে আর তোমাকে ভয় করে, যাদের তুমি ভালোবাসো। কোনো দামেই যেন তোমার অঙ্গীকার বা আমার কথা বেচে না দিই। কিয়ামতের দিন তোমার কথা, তোমার দৃষ্টি আর তোমার পবিত্র করা থেকে আমাকে বঞ্চিত কোরো না। আর যন্ত্রণাদায়ক শাস্তি থেকে আমাকে রক্ষা করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Next Sale",
          "bn": "পরের বেচাকেনার আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there anyone I treat as fair game, a stranger, a large company, someone of another faith, in a way I would never treat my own family? When I last said something is true, I promise, or wallahi, did I need the oath because the plain statement would not have been believed? What small price has pulled at me this month, and did I notice how small it was?",
            "bn": "এমন কেউ কি আছে, যার সঙ্গে ঠকানোকে আমি দোষের মনে করি না, অচেনা লোক, বড় কোম্পানি, অন্য ধর্মের কেউ, অথচ নিজের পরিবারের সঙ্গে কখনো এমন করতাম না? শেষবার যখন বলেছি সত্যি বলছি বা ওয়াল্লাহি, তখন কি কসমটা লেগেছিল কারণ সাদা কথায় কেউ বিশ্বাস করত না? এই মাসে কোন সামান্য দাম আমাকে টেনেছে, আর আমি কি খেয়াল করেছি সেটা কত সামান্য ছিল?"
          },
          {
            "en": "Is there a promise I made to Allah in a difficult hour that I have not kept since the hour passed? If I stood on the Day of Resurrection and Allah did not look at me, which of my deals today would have been worth it? And what would it take for me to be among those of whom 3:76 says simply that Allah loves them?",
            "bn": "কঠিন সময়ে আল্লাহকে এমন কোনো ওয়াদা কি দিয়েছিলাম, সময় পার হওয়ার পর যা আর রাখিনি? কিয়ামতের দিন দাঁড়িয়ে যদি দেখি আল্লাহ আমার দিকে তাকাচ্ছেন না, তবে আজকের কোন লেনদেনটা তার যোগ্য ছিল? আর ৩:৭৬ আয়াত যাদের সম্পর্কে সোজা বলে যে আল্লাহ তাদের ভালোবাসেন, তাদের একজন হতে আমাকে কী করতে হবে?"
          }
        ]
      }
    ]
  },
  "3:81-82": {
    "sections": [
      {
        "h": {
          "en": "A Covenant Called to Mind",
          "bn": "মনে করিয়ে দেওয়া এক অঙ্গীকার"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and here it is still addressing the People of the Book. Just before, 3:79 says that no human being to whom Allah gives the Scripture and prophethood would then tell people to be his servants rather than Allah's, and 3:80 adds that he would never order them to take the angels and the prophets as lords. Having said what no prophet would ever ask, the Quran turns in 3:81 to what every prophet was asked, opening with wa idh, and when, to call a scene to mind.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা, আর এখানেও কথা চলছে আহলে কিতাবকে উদ্দেশ করে। ঠিক আগে ৩:৭৯ আয়াত বলে, আল্লাহ যে মানুষকে কিতাব আর নবুওয়াত দেন, সে কখনো লোকদের বলবে না যে আল্লাহকে ছেড়ে আমার বান্দা হয়ে যাও। ৩:৮০ আয়াত যোগ করে, সে কখনো তোমাদের ফেরেশতা আর নবীদের রব বানাতে হুকুম দেবে না। কোনো নবী কী কখনো চাইবেন না, তা বলার পর ৩:৮১ আয়াতে কুরআন ফেরে সেই কথায়, যা প্রত্যেক নবীর কাছে চাওয়া হয়েছিল। শুরু হয় ওয়া ইয, অর্থাৎ স্মরণ করো সেই সময়ের কথা, এই শব্দে।"
          },
          {
            "en": "3:82 closes the scene: whoever turns away after that, they are the defiantly disobedient. The verses after it carry the covenant forward to its followers. 3:83 asks whether it is other than the religion of Allah they desire, and 3:84 gives the believers the words of their answer, faith in what was sent to Ibrahim, Musa, Isa and the prophets, without distinction between any of them. Ibn Kathir gives no separate occasion of revelation for 3:81-82; their setting is the surah's long address.",
            "bn": "৩:৮২ আয়াত দৃশ্যটির ইতি টানে: এরপর যে মুখ ফিরিয়ে নেবে, তারাই ফাসিক। পরের আয়াতগুলো অঙ্গীকারটিকে নিয়ে যায় অনুসারীদের কাছে। ৩:৮৩ আয়াত প্রশ্ন করে, তারা কি আল্লাহর দ্বীন ছাড়া অন্য কিছু চায়? আর ৩:৮৪ আয়াত মুমিনদের মুখে জবাবের ভাষা তুলে দেয়: ইবরাহীম, মূসা, ঈসা আর সব নবীর ওপর যা নাযিল হয়েছে তার প্রতি ঈমান, তাঁদের কারও মধ্যে পার্থক্য না করে। ৩:৮১-৮২ আয়াতের আলাদা কোনো শানে নুযুল ইবনে কাসীর উল্লেখ করেন না; এদের প্রেক্ষাপট সূরার দীর্ঘ সেই সম্বোধনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Mithaq, Isr and Iqrar",
          "bn": "মিসাক, ইসর আর ইকরার"
        },
        "p": [
          {
            "en": "Mithaq comes from the root w-th-q, to bind something fast, and the covenant in this verse is one Allah takes, akhadha, as a binding is taken from someone. Its terms are conditional: whatever I have given you of Scripture and wisdom, and then there comes to you a messenger confirming what is with you. The phrase musaddiqun li-ma ma'akum is the same one 2:41 uses when the Children of Israel are told to believe in what was sent down confirming what is with them.",
            "bn": "মিসাক শব্দের মূল ওয়াও-সা-ক্বাফ, যার অর্থ কিছু শক্ত করে বাঁধা। আয়াতের অঙ্গীকার আল্লাহ গ্রহণ করেন, আখাযা, যেভাবে কারও কাছ থেকে বাঁধন নেওয়া হয়। শর্তগুলো এমন: আমি তোমাদের কিতাব আর হিকমত যা-ই দিয়েছি, তারপর যদি তোমাদের কাছে এমন রাসূল আসেন, যিনি তোমাদের কাছে যা আছে তার সত্যায়ন করেন। মুসাদ্দিকুল লিমা মাআকুম কথাটি ২:৪১ আয়াতেও আছে, যেখানে বনি ইসরাইলকে বলা হয়, তোমাদের কাছে যা আছে তার সত্যায়নকারী হিসেবে যা নাযিল হয়েছে তার ওপর ঈমান আনো।"
          },
          {
            "en": "The obligation is la-tu'minunna bihi wa la-tansurunnah. Each verb carries the lam of oath and the heavy nun of emphasis, so the sense is: you shall surely believe in him, and you shall surely support him. Belief alone is not the whole of it. Nusrah, standing with him, is named alongside it with the same force. Then Allah asks a question, a-aqrartum, have you acknowledged? Iqrar is from q-r-r, to make a thing settle and stay fixed, and the prophets answer with the same word: aqrarna, we have acknowledged.",
            "bn": "দায়িত্বটি হলো লাতুমিনুন্না বিহি ওয়া লাতানসুরুন্নাহ। দুটি ক্রিয়ার প্রতিটিতে আছে কসমের লাম আর জোর দেওয়ার ভারী নুন। অর্থ দাঁড়ায়: তোমরা অবশ্যই তাঁর ওপর ঈমান আনবে, আর অবশ্যই তাঁকে সাহায্য করবে। শুধু ঈমানেই শেষ নয়। নুসরাহ, অর্থাৎ তাঁর পাশে দাঁড়ানো, একই জোরে পাশাপাশি বলা হয়েছে। এরপর আল্লাহ প্রশ্ন করেন, আ-আকরারতুম, তোমরা কি স্বীকার করলে? ইকরার শব্দের মূল ক্বাফ-রা-রা, কোনো কিছুকে স্থির করে বসিয়ে দেওয়া। নবীরা জবাব দেন সেই শব্দেই: আকরারনা, আমরা স্বীকার করলাম।"
          },
          {
            "en": "Between question and answer stands isri, My isr. Ibn Kathir reports from Ibn Abbas, Mujahid, ar-Rabi', Qatadah and as-Suddi that it means My covenant, and from Ibn Ishaq that it is the responsibility of My covenant which you took on. The same word is the burden asked away in 2:286 and the burden lifted in 7:157. A covenant, in this vocabulary, is something that weighs on the one who carries it. The scene ends with Allah saying: then bear witness, and I am with you among the witnesses.",
            "bn": "প্রশ্ন আর জবাবের মাঝখানে আছে ইসরি, আমার ইসর। ইবনে কাসীর ইবনে আব্বাস, মুজাহিদ, রাবি, কাতাদা ও সুদ্দি থেকে বর্ণনা করেন, এর অর্থ আমার অঙ্গীকার। আর ইবনে ইসহাক থেকে, আমার যে অঙ্গীকারের দায় তোমরা কাঁধে নিলে। একই শব্দ ২:২৮৬ আয়াতে সেই ভার, যা চাপিয়ে না দিতে দোয়া করা হয়, আর ৭:১৫৭ আয়াতে সেই ভার, যা নামিয়ে দেওয়া হয়। এই ভাষায় অঙ্গীকার এমন জিনিস, যা বহনকারীর কাঁধে ওজন হয়ে থাকে। দৃশ্য শেষ হয় আল্লাহর কথায়: তাহলে সাক্ষী থাকো, আর আমিও তোমাদের সঙ্গে সাক্ষীদের একজন।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Messenger Is Meant",
          "bn": "কোন রাসূলের কথা বলা হয়েছে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports a statement of Ali ibn Abi Talib and his cousin Abdullah ibn Abbas (RA): Allah never sent a prophet without taking his pledge that if Muhammad ﷺ were sent in that prophet's lifetime, the prophet would believe in him and support him, and He commanded each prophet to take the same pledge from his nation. In this reading the messenger of 3:81 is named by the history that followed, and the covenant reaches past each prophet to those who followed him.",
            "bn": "ইবনে কাসীর আলি ইবনে আবি তালিব (রাঃ) আর তাঁর চাচাতো ভাই আবদুল্লাহ ইবনে আব্বাস (রাঃ)-এর একটি বক্তব্য উল্লেখ করেন। আল্লাহ যখনই কোনো নবী পাঠিয়েছেন, তাঁর কাছ থেকে অঙ্গীকার নিয়েছেন যে তাঁর জীবদ্দশায় মুহাম্মাদ ﷺ প্রেরিত হলে তিনি তাঁর ওপর ঈমান আনবেন ও তাঁকে সাহায্য করবেন। আর প্রত্যেক নবীকে হুকুম দিয়েছেন নিজের উম্মতের কাছ থেকেও একই অঙ্গীকার নিতে। এই পাঠে ৩:৮১ আয়াতের রাসূল কে, তা বলে দেয় পরের ইতিহাস। আর অঙ্গীকার প্রত্যেক নবীকে ছাড়িয়ে পৌঁছে যায় তাঁর অনুসারীদের কাছে।"
          },
          {
            "en": "Ibn Kathir then reports a second reading from Tawus, al-Hasan al-Basri and Qatadah: Allah took the pledge from the prophets that they would believe in one another. He states that this does not contradict what Ali and Ibn Abbas said. The general pledge, each prophet confirming the one who comes after him, contains the particular one, and the last in the line is the one every earlier prophet was bound to. The difference between the two readings is one of scope, and Ibn Kathir holds them together.",
            "bn": "এরপর ইবনে কাসীর তাউস, হাসান বসরি আর কাতাদা থেকে দ্বিতীয় একটি ব্যাখ্যা আনেন: আল্লাহ নবীদের কাছ থেকে অঙ্গীকার নিয়েছিলেন যে তাঁরা একে অন্যের ওপর ঈমান আনবেন। ইবনে কাসীর বলেন, এই কথা আলি ও ইবনে আব্বাসের বক্তব্যের বিরোধী নয়। সাধারণ অঙ্গীকার, অর্থাৎ প্রত্যেক নবী তাঁর পরে আসা নবীকে সত্যায়ন করবেন, তার ভেতরেই বিশেষ অঙ্গীকারটি আছে। আর ধারার শেষজনের প্রতিই আগের সব নবী অঙ্গীকারবদ্ধ। দুই ব্যাখ্যার পার্থক্য পরিসরের, আর ইবনে কাসীর দুটোকে একসঙ্গে ধরে রাখেন।"
          },
          {
            "en": "On 3:82 Ibn Kathir says the one who turns away is whoever turns from fulfilling this pledge and covenant, and such people are the fasiqun. Read with the statement of Ali and Ibn Abbas, in which each prophet takes the pledge from his nation, the warning reaches those who came after the prophets. Ibn Kathir draws from the passage the rank of Muhammad ﷺ as the final prophet, the one who would have to be obeyed in any age he appeared, and he recalls that on the night of the Isra' it was the Prophet ﷺ who led the prophets in prayer.",
            "bn": "৩:৮২ আয়াত সম্পর্কে ইবনে কাসীর বলেন, মুখ ফেরানো লোক সে-ই, যে এই অঙ্গীকার পূরণ থেকে সরে যায়, আর তারাই ফাসিক। আলি ও ইবনে আব্বাসের বক্তব্যে প্রত্যেক নবী নিজের উম্মতের কাছ থেকেও অঙ্গীকার নেন। সেই আলোয় পড়লে সতর্কবাণী পৌঁছে যায় নবীদের পরে আসা মানুষদের কাছে। এই অংশ থেকে ইবনে কাসীর মুহাম্মাদ ﷺ-এর মর্যাদার কথা বের করেন। তিনি শেষ নবী, যে যুগেই আসতেন, আনুগত্য তাঁরই প্রাপ্য হতো। ইবনে কাসীর মনে করিয়ে দেন, ইসরার রাতে নবীদের নামাজে ইমামতি নবী ﷺ-ই করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night the Line Met",
          "bn": "যে রাতে ধারাটি মিলিত হলো"
        },
        "p": [
          {
            "en": "No sound hadith narrates the scene of the covenant itself. Two narrations show what keeping it looked like. Sahih Muslim records from Abu Hurayrah (RA) that on the night of the Isra' the Prophet ﷺ saw himself among a group of the prophets, and that when the time for prayer came, he led them. The prophets who had been bound to believe in and support him stood behind him, and that is the relationship 3:81 describes, made visible in a single prayer.",
            "bn": "অঙ্গীকারের দৃশ্যটি নিয়ে কোনো সহিহ হাদিস নেই। তবে দুটি বর্ণনা দেখায়, অঙ্গীকার রক্ষা দেখতে কেমন। সহিহ মুসলিমে আবু হুরাইরা (রাঃ) থেকে বর্ণিত, ইসরার রাতে নবী ﷺ নিজেকে নবীদের একটি দলের মধ্যে দেখলেন। নামাজের সময় হলে নবী ﷺ তাঁদের ইমামতি করলেন। যে নবীরা তাঁর ওপর ঈমান আনতে আর তাঁকে সাহায্য করতে অঙ্গীকারবদ্ধ ছিলেন, তাঁরা দাঁড়ালেন তাঁর পেছনে। ৩:৮১ আয়াত যে সম্পর্কের কথা বলে, একটিমাত্র নামাজে তা চোখের সামনে এসে দাঁড়াল।"
          },
          {
            "en": "Sahih al-Bukhari carries the ascent through the heavens, where he met prophets in heaven after heaven. Most of them welcomed him as a righteous brother and a righteous prophet; Adam and Ibrahim (AS) welcomed him as a righteous son. Nobody in that account guards a place against the newcomer. Each greets the messenger who came confirming what was with them, and that welcome is, in effect, the answer, we have acknowledged, given again in person.",
            "bn": "সহিহ বুখারিতে আছে আসমানে আরোহণের বর্ণনা, যেখানে এক আসমানের পর আরেক আসমানে তিনি নবীদের সাক্ষাৎ পান। বেশির ভাগ নবী তাঁকে স্বাগত জানান নেককার ভাই আর নেককার নবী বলে। আদম ও ইবরাহীম (আঃ) স্বাগত জানান নেককার পুত্র বলে। সেই বর্ণনায় কেউ নতুন আগন্তুকের সামনে নিজের জায়গা আগলে দাঁড়ান না। প্রত্যেকেই বরণ করেন সেই রাসূলকে, যিনি তাঁদের কাছে থাকা জিনিসের সত্যায়ন করতে এসেছেন। সেই অভ্যর্থনাই যেন আকরারনা, আমরা স্বীকার করলাম, এই জবাবের সামনাসামনি পুনরাবৃত্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Covenant Across the Quran",
          "bn": "কুরআনজুড়ে এই অঙ্গীকার"
        },
        "p": [
          {
            "en": "33:7 names the covenant again and puts the Prophet ﷺ inside it: Allah took from the prophets their covenant, and from you, and from Nuh, Ibrahim, Musa and Isa son of Maryam, a solemn covenant. 61:6 shows a prophet keeping it in words, as Isa (AS) tells the Children of Israel that he confirms the Torah before him and brings good tidings of a messenger to come after him, whose name is Ahmad.",
            "bn": "৩৩:৭ আয়াত আবার এই অঙ্গীকারের কথা বলে, আর নবী ﷺ-কেও তার ভেতরে রাখে: আল্লাহ নবীদের কাছ থেকে অঙ্গীকার নিয়েছিলেন, আপনার কাছ থেকেও, আর নূহ, ইবরাহীম, মূসা ও মারইয়ামপুত্র ঈসার কাছ থেকে, দৃঢ় অঙ্গীকার। ৬১:৬ আয়াতে দেখা যায় একজন নবী কথায় তা রক্ষা করছেন। ঈসা (আঃ) বনি ইসরাইলকে বলেন, তিনি তাঁর আগের তাওরাতের সত্যায়ন করেন, আর তাঁর পরে আসা এক রাসূলের সুসংবাদ দেন, যাঁর নাম আহমাদ।"
          },
          {
            "en": "7:157 uses the two words of our verse on the followers' side: those who believed in the unlettered prophet, honoured him and supported him, nasaruhu, are the successful, and he relieves them of their burden, their isr. 5:48 says the Book sent to him confirms the Scripture before it. And 2:285 gives the believers' own creed in the covenant's spirit: we make no distinction between any of His messengers.",
            "bn": "৭:১৫৭ আয়াত আমাদের আয়াতের দুটি শব্দই ব্যবহার করে অনুসারীদের দিক থেকে। যারা উম্মি নবীর ওপর ঈমান এনেছে, তাঁকে সম্মান করেছে আর সাহায্য করেছে, নাসারুহু, তারাই সফল। আর তিনি তাদের কাঁধ থেকে ভার, তাদের ইসর, নামিয়ে দেন। ৫:৪৮ আয়াত বলে, তাঁর ওপর নাযিল হওয়া কিতাব আগের কিতাবের সত্যায়ন করে। আর ২:২৮৫ আয়াতে মুমিনদের নিজস্ব আকিদা এই অঙ্গীকারেরই সুরে: আমরা তাঁর রাসূলদের কারও মধ্যে পার্থক্য করি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Behind the One Who Confirms",
          "bn": "সত্যায়নকারীর পাশে দাঁড়ানো"
        },
        "p": [
          {
            "en": "The first practice is in speech. A Muslim cannot mention Musa, Isa, Ibrahim or any prophet (AS) carelessly, because the covenant bound each of them to the messenger who came confirming him. Say the honorific, teach children their stories from the Quran rather than from rumour, and do not set one prophet against another in argument. Honouring them is part of keeping faith with the covenant they kept.",
            "bn": "প্রথম আমল কথাবার্তায়। মুসলিম মূসা, ঈসা, ইবরাহীম বা কোনো নবী (আঃ)-এর নাম অবহেলায় নিতে পারেন না, কারণ এই অঙ্গীকার তাঁদের প্রত্যেককে বেঁধে দিয়েছিল সেই রাসূলের সঙ্গে, যিনি তাঁকে সত্যায়ন করতে আসবেন। নাম নিলে সম্মানসূচক দোয়াটি বলুন। শিশুদের তাঁদের কাহিনি শেখান কুরআন থেকে, লোকমুখে শোনা কথা থেকে নয়। তর্কের সময় এক নবীকে আরেক নবীর বিপরীতে দাঁড় করাবেন না। তাঁদের সম্মান করা সেই অঙ্গীকারের প্রতি বিশ্বস্ত থাকারই অংশ, যা তাঁরা রক্ষা করেছেন।"
          },
          {
            "en": "The second is how truth is received. The prophets were bound to support a messenger who was not from their own following. For us that means accepting a correction that confirms what Allah revealed even when it comes from a younger colleague, another mosque, or a group we do not belong to. And it means support, not only agreement: la-tansurunnah asks for help with hands and time, not a nod from a distance.",
            "bn": "দ্বিতীয় আমল সত্যকে গ্রহণ করার ধরনে। নবীরা এমন রাসূলকে সাহায্য করতে অঙ্গীকারবদ্ধ ছিলেন, যিনি তাঁদের নিজেদের অনুসারীদের ভেতর থেকে আসেননি। আমাদের জন্য এর মানে, আল্লাহর নাযিল করা কথার সঙ্গে মেলে এমন সংশোধন মেনে নেওয়া, তা বয়সে ছোট সহকর্মী, অন্য মসজিদ বা যে দলের আমরা নই, তাদের কাছ থেকে এলেও। আর এর মানে সাহায্য করা, শুধু একমত হওয়া নয়। লাতানসুরুন্নাহ চায় হাত আর সময় দিয়ে পাশে দাঁড়ানো, দূর থেকে মাথা নাড়া নয়।"
          },
          {
            "en": "The third is the weight of saying yes. Before you acknowledge anything, a contract, a pledge to a community, the vows of a marriage, remember that iqrar was followed by bear witness, and that Allah counts Himself among the witnesses. 3:82 does not condemn those who never agreed. It condemns turning away after that, which is why a believer is slow to promise and slower still to walk away from a promise once made.",
            "bn": "তৃতীয় আমল হ্যাঁ বলার ভার বোঝা। কোনো কিছু স্বীকার করার আগে, চুক্তি হোক, কোনো জামাতের কাছে অঙ্গীকার হোক বা বিয়ের প্রতিশ্রুতি, মনে রাখুন ইকরারের পরই এসেছিল সাক্ষী থাকো, আর আল্লাহ নিজেকে সাক্ষীদের একজন বলেছেন। ৩:৮২ আয়াত তাদের নিন্দা করে না, যারা কখনো রাজিই হয়নি। নিন্দা করে রাজি হওয়ার পর মুখ ফেরানোর। তাই মুমিন ওয়াদা করতে ধীর, আর ওয়াদা করে সরে যেতে আরও বেশি ধীর।"
          }
        ]
      },
      {
        "h": {
          "en": "Write Us Among the Witnesses",
          "bn": "আমাদের সাক্ষীদের দলে লিখে নাও"
        },
        "p": [
          {
            "en": "The Quran itself supplies the supplication, from the followers of a prophet who kept this covenant. When Isa (AS) asked who would be his supporters for Allah, 3:52 records the disciples answering that they were the supporters of Allah, and 3:53 continues their prayer: Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses. Their word ansar is from the root of la-tansurunnah, and their closing request answers Allah's I am with you among the witnesses.",
            "bn": "দোয়াটি কুরআনই দিয়ে দেয়, এমন এক নবীর অনুসারীদের মুখে, যিনি এই অঙ্গীকার রক্ষা করেছেন। ঈসা (আঃ) যখন জিজ্ঞেস করলেন আল্লাহর পথে কারা তাঁর সাহায্যকারী, ৩:৫২ আয়াত জানায় হাওয়ারিরা বলেছিলেন, আমরাই আল্লাহর সাহায্যকারী। ৩:৫৩ আয়াতে তাঁদের দোয়া: হে আমাদের রব, তুমি যা নাযিল করেছ তার ওপর আমরা ঈমান এনেছি, আর রাসূলের অনুসরণ করেছি, তাই আমাদের সাক্ষীদের দলে লিখে নাও। তাঁদের আনসার শব্দটি লাতানসুরুন্নাহর মূল থেকেই। আর তাঁদের শেষ চাওয়াটি জবাব দেয় আল্লাহর সেই কথার, আমিও তোমাদের সঙ্গে সাক্ষীদের একজন।"
          },
          {
            "en": "Alongside it, a short supplication in the vocabulary of 3:81-82, offered as such and not as a transmitted wording: O Allah, I acknowledge Your covenant and take on its weight. Make me one who believes in Your messengers and supports what they brought, and do not let me turn away after I have acknowledged. Be my witness, and You suffice as a witness.",
            "bn": "এর পাশাপাশি ৩:৮১-৮২ আয়াতের শব্দে সাজানো একটি ছোট দোয়া, এটি বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আমি তোমার অঙ্গীকার স্বীকার করছি, আর তার ভার কাঁধে নিচ্ছি। আমাকে এমন বানাও, যে তোমার রাসূলদের ওপর ঈমান রাখে আর তাঁরা যা এনেছেন তার পাশে দাঁড়ায়। স্বীকার করার পর আমাকে মুখ ফেরাতে দিয়ো না। তুমি আমার সাক্ষী থাকো, সাক্ষী হিসেবে তুমিই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Weigh",
          "bn": "ওজন করে দেখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When a truth reaches me through someone I would rather not learn from, do I weigh the truth or the messenger? Is there anyone doing good work for Allah's religion whom I agree with in private but never actually support? Which of my commitments, to my family, my community or my Lord, did I accept lightly because I did not stop to feel its weight?",
            "bn": "যার কাছ থেকে শিখতে মন চায় না, তার মুখে সত্য এলে আমি কি সত্যটা ওজন করি, নাকি বাহককে? আল্লাহর দ্বীনের জন্য ভালো কাজ করছে এমন কেউ কি আছে, যার সঙ্গে মনে মনে আমি একমত, অথচ কখনো সত্যি সাহায্য করিনি? পরিবার, সমাজ বা রবের প্রতি আমার কোন দায়িত্বটা আমি হালকাভাবে নিয়েছিলাম, কারণ তার ভার বুঝতে একটু থামিনি?"
          },
          {
            "en": "If Allah is among the witnesses to what I have agreed to, what have I said yes to that I am now quietly walking away from? And when I say the names of the prophets, Musa, Isa, Ibrahim (AS), do I say them as a man speaks of brothers of his own Prophet ﷺ, or as a man speaks of strangers?",
            "bn": "আমি যা মেনে নিয়েছি তার সাক্ষী যদি আল্লাহ হন, তবে কোন হ্যাঁ থেকে আমি এখন চুপচাপ সরে যাচ্ছি? আর যখন নবীদের নাম নিই, মূসা, ঈসা, ইবরাহীম (আঃ), তখন কি সেভাবে নিই যেভাবে কেউ নিজের নবী ﷺ-এর ভাইদের কথা বলে, নাকি যেভাবে অচেনা মানুষের কথা বলে?"
          }
        ]
      }
    ]
  },
  "3:83-85": {
    "sections": [
      {
        "h": {
          "en": "A Question Before the Verdict",
          "bn": "রায়ের আগে একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "These three verses follow directly on the covenant of the prophets in 3:81-82, where Allah bound every prophet to believe in and support the messenger who came confirming what was with them. 3:83 opens with a-fa-ghayra din Allah yabghun, and its fa ties it to that scene: so, after all this, is it other than the religion of Allah they desire? It adds that everything in the heavens and the earth has submitted to Him, willingly or by compulsion, and that to Him they will be returned.",
            "bn": "এই তিনটি আয়াত সরাসরি আসে ৩:৮১-৮২ আয়াতে নবীদের অঙ্গীকারের পরে। সেখানে আল্লাহ প্রত্যেক নবীকে বেঁধে দিয়েছিলেন, তাঁদের কাছে যা আছে তার সত্যায়ন করতে যে রাসূল আসবেন, তাঁর ওপর ঈমান আনতে ও তাঁকে সাহায্য করতে। ৩:৮৩ আয়াত শুরু হয় আফাগাইরা দীনিল্লাহি ইয়াবগুন দিয়ে, আর এর ফা অক্ষরটি আয়াতকে ওই দৃশ্যের সঙ্গে জুড়ে দেয়: এত কিছুর পরেও কি তারা আল্লাহর দ্বীন ছাড়া অন্য কিছু চায়? আয়াত যোগ করে, আসমান আর জমিনে যা কিছু আছে সবই ইচ্ছায় বা অনিচ্ছায় তাঁর কাছে আত্মসমর্পণ করেছে, আর তাঁর কাছেই সবাই ফিরবে।"
          },
          {
            "en": "3:84 then gives the Prophet ﷺ the words of the believers' answer: we have believed in Allah and in what was revealed to us and to Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants, and in what was given to Musa, Isa and the prophets from their Lord, making no distinction between any of them, and to Him we are Muslims. Only after the question and the answer does 3:85 give its verdict. The next verse, 3:86, turns to those who disbelieve after believing, and 3:89 keeps the door open for those who repent and put right.",
            "bn": "এরপর ৩:৮৪ আয়াত নবী ﷺ-কে মুমিনদের জবাবের ভাষা শিখিয়ে দেয়: আমরা ঈমান এনেছি আল্লাহর ওপর, আর যা নাযিল হয়েছে আমাদের ওপর, ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁদের বংশধরদের ওপর, আর মূসা, ঈসা ও নবীদের তাঁদের রবের পক্ষ থেকে যা দেওয়া হয়েছে তার ওপর। তাঁদের কারও মধ্যে আমরা পার্থক্য করি না, আর আমরা তাঁরই কাছে আত্মসমর্পিত। প্রশ্ন আর জবাবের পরেই কেবল ৩:৮৫ আয়াত রায় দেয়। পরের আয়াত ৩:৮৬ কথা বলে ঈমানের পর কুফরিতে ফিরে যাওয়াদের নিয়ে, আর ৩:৮৯ আয়াত খোলা রাখে তাদের জন্য দরজা, যারা তওবা করে নিজেদের শুধরে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeking, Submitting, Losing",
          "bn": "খোঁজা, আত্মসমর্পণ, ক্ষতি"
        },
        "p": [
          {
            "en": "Two verbs frame the passage from the same root, b-gh-y, to seek or desire. 3:83 asks what they yabghun, desire, and 3:85 speaks of whoever yabtaghi, seeks, a religion other than Islam. The passage treats religion as something a person goes looking for, and it asks what the search is really aimed at. Between those two verbs stand everything in creation that has already submitted and a community declaring that it believes in every prophet.",
            "bn": "অংশটির দুই প্রান্তে একই মূলের দুটি ক্রিয়া, বা-গাইন-ইয়া, অর্থ খোঁজা বা চাওয়া। ৩:৮৩ আয়াত জিজ্ঞেস করে তারা কী ইয়াবগুন, অর্থাৎ চায়। আর ৩:৮৫ আয়াত বলে তার কথা, যে ইসলাম ছাড়া অন্য দ্বীন ইয়াবতাগি, অর্থাৎ খোঁজে। অংশটি দ্বীনকে দেখে এমন জিনিস হিসেবে, যার খোঁজে মানুষ বের হয়। আর প্রশ্ন করে, সেই খোঁজ আসলে কীসের দিকে। দুই ক্রিয়ার মাঝখানে দাঁড়িয়ে আছে আত্মসমর্পিত গোটা সৃষ্টি, আর একটি জামাত, যারা ঘোষণা দিচ্ছে সব নবীর ওপর ঈমানের।"
          },
          {
            "en": "A second root runs through all three verses, s-l-m. In 3:83 everything in the heavens and the earth aslama, has submitted, to Him, tau'an wa karhan, willingly or by compulsion. In 3:84 the believers say nahnu lahu muslimun, to Him we are Muslims. In 3:85 the word is al-islam. Read in sequence, the Islam of 3:85 is not the submission creation gives willingly or by compulsion, which 3:83 describes; it is the willing submission 3:84 puts into the believers' mouths, the submission of those who believe in all the prophets.",
            "bn": "তিনটি আয়াতজুড়ে চলে আরেকটি মূল, সিন-লাম-মিম। ৩:৮৩ আয়াতে আসমান-জমিনের সবকিছু তাঁর কাছে আসলামা, আত্মসমর্পণ করেছে, তাওআন ওয়া কারহান, ইচ্ছায় বা অনিচ্ছায়। ৩:৮৪ আয়াতে মুমিনরা বলে নাহনু লাহু মুসলিমুন, আমরা তাঁরই কাছে আত্মসমর্পিত। ৩:৮৫ আয়াতের শব্দ আল-ইসলাম। ক্রম ধরে পড়লে ৩:৮৫ আয়াতের ইসলাম গোটা সৃষ্টির সেই আত্মসমর্পণ নয়, যা ৩:৮৩ আয়াতের ভাষায় ইচ্ছায় বা অনিচ্ছায় ঘটে; এটি সেই খুশিমনের আত্মসমর্পণ, যা ৩:৮৪ আয়াত মুমিনদের মুখে তুলে দেয়, সব নবীর ওপর ঈমান আনা মানুষদের আত্মসমর্পণ।"
          },
          {
            "en": "The verdict uses lan, the particle that negates the future with emphasis: fa-lan yuqbala minhu, it will never be accepted from him. The verse ends wa huwa fi al-akhirati min al-khasirin, and in the Hereafter he will be among the losers. Ar-Raghib explains khusr and khusran as a loss in one's capital. The image fits a verse about seeking: a person spends a whole life's capital on a search, and the loss is that what he brings back is not accepted.",
            "bn": "রায়ে আছে লান অব্যয়, যা ভবিষ্যতের ক্ষেত্রে জোর দিয়ে না বলে: ফালান ইউকবালা মিনহু, তার কাছ থেকে তা কখনো কবুল করা হবে না। আয়াত শেষ হয় ওয়া হুয়া ফিল আখিরাতি মিনাল খাসিরিন দিয়ে, আর আখিরাতে সে ক্ষতিগ্রস্তদের একজন। রাগিব ইসফাহানি খুসর আর খুসরান শব্দের ব্যাখ্যা করেন মূলধন কমে যাওয়া বলে। খোঁজার কথা বলা আয়াতে ছবিটা খুব মানায়। মানুষ সারা জীবনের পুঁজি একটা খোঁজে ঢেলে দেয়, আর ক্ষতিটা হলো, যা নিয়ে ফেরে তা কবুল হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir, Mujahid and Ibn Abbas",
          "bn": "ইবনে কাসীর, মুজাহিদ ও ইবনে আব্বাস"
        },
        "p": [
          {
            "en": "On 3:83 Ibn Kathir explains the two kinds of submission. The believer submits to Allah in heart and body. The disbeliever submits to Him unwillingly, in body only, because he lives under Allah's power and control, which cannot be resisted. He sets the verse beside 13:15 and 16:48-50, where everything in the heavens and the earth prostrates to Allah. He reports that Mujahid likened the verse to 31:25, where those who worship others still answer that Allah created the heavens and the earth, and that Ibn Abbas said of it: when He took the covenant from them.",
            "bn": "৩:৮৩ আয়াতে ইবনে কাসীর দুই ধরনের আত্মসমর্পণের কথা বলেন। মুমিন আল্লাহর কাছে আত্মসমর্পণ করে মন আর শরীর দুটো দিয়েই। কাফির আত্মসমর্পণ করে অনিচ্ছায়, শুধু শরীর দিয়ে, কারণ সে আল্লাহর এমন ক্ষমতা আর নিয়ন্ত্রণের অধীনে, যা ঠেকানো যায় না। তিনি আয়াতটিকে রাখেন ১৩:১৫ আর ১৬:৪৮-৫০ আয়াতের পাশে, যেখানে আসমান-জমিনের সবকিছু আল্লাহকে সিজদা করে। তিনি বর্ণনা করেন, মুজাহিদ আয়াতটিকে তুলনা করেছেন ৩১:২৫ আয়াতের সঙ্গে, যেখানে অন্যের পূজারিরাও স্বীকার করে যে আসমান-জমিন আল্লাহই সৃষ্টি করেছেন। আর ইবনে আব্বাস এ সম্পর্কে বলেছেন: যখন তিনি তাদের কাছ থেকে অঙ্গীকার নিয়েছিলেন।"
          },
          {
            "en": "On 3:84 Ibn Kathir says the believers believe in every prophet Allah sent and every Book He revealed and disbelieve in none of them, and he glosses the Descendants as the tribes that came from the twelve sons of Ya'qub (AS). On 3:85 he explains other than Islam as other than what Allah has legislated, and he supports it with the hadith given below. In his reading, then, the verdict concerns the religion itself: whether a person follows what Allah has legislated or seeks another way.",
            "bn": "৩:৮৪ আয়াতে ইবনে কাসীর বলেন, মুমিনরা আল্লাহর পাঠানো প্রত্যেক নবী আর নাযিল করা প্রত্যেক কিতাবের ওপর ঈমান রাখে, কোনোটিকেই অস্বীকার করে না। আসবাত বা বংশধরদের ব্যাখ্যায় তিনি বলেন, ইয়াকুব (আঃ)-এর বারো ছেলে থেকে আসা গোত্রগুলো। ৩:৮৫ আয়াতে ইসলাম ছাড়া অন্য কিছুর ব্যাখ্যা তিনি করেন, আল্লাহ যা বিধান করেছেন তার বাইরের কিছু। এর সমর্থনে তিনি নিচের হাদিসটি আনেন। তাঁর পাঠে তাই রায়টি দ্বীন নিয়েই: মানুষ আল্লাহর বিধান মেনে চলে, নাকি অন্য পথ খোঁজে।"
          },
          {
            "en": "At 2:62, which promises reward to those among the believers, Jews, Christians and Sabians who believed in Allah and the Last Day and did good, Ibn Kathir reports from Ali ibn Abi Talhah that Ibn Abbas (RA) said Allah revealed 3:85 after it. Ibn Kathir explains the statement: no way and no deed is accepted from anyone unless it agrees with the law of Muhammad ﷺ after Allah sent him; before that, everyone who followed the messenger of his own time was on guidance and salvation.",
            "bn": "২:৬২ আয়াত প্রতিদানের ওয়াদা দেয় মুমিন, ইহুদি, খ্রিস্টান ও সাবিঈদের মধ্যে তাদের, যারা আল্লাহ ও শেষ দিবসে ঈমান এনেছে আর নেক আমল করেছে। সেখানে ইবনে কাসীর আলি ইবনে আবি তালহার সূত্রে ইবনে আব্বাস (রাঃ)-এর কথা আনেন, এর পরে আল্লাহ ৩:৮৫ আয়াত নাযিল করেন। ইবনে কাসীর কথাটির ব্যাখ্যা দেন এভাবে: আল্লাহ মুহাম্মাদ ﷺ-কে পাঠানোর পর কারও কোনো পথ বা আমল কবুল হবে না, যদি না তা তাঁর শরিয়তের সঙ্গে মেলে। তার আগে যে-ই নিজের যুগের রাসূলের অনুসরণ করেছে, সে ছিল হেদায়েত আর মুক্তির পথে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Religion, One Measure",
          "bn": "এক দ্বীন, এক মাপকাঠি"
        },
        "p": [
          {
            "en": "The hadith Ibn Kathir attaches is from Aisha (RA). Al-Bukhari records it in the wording: whoever introduces into this matter of ours what is not in it, it is rejected. Sahih Muslim carries it too, and adds a second wording from her: whoever does a deed that is not in accordance with our matter, it is rejected. The verse rejects a religion other than Islam; the hadith applies the same measure inside Islam, to acts of worship that were never part of what the Prophet ﷺ brought.",
            "bn": "ইবনে কাসীর যে হাদিসটি জুড়ে দেন, তা আয়েশা (রাঃ) থেকে বর্ণিত। বুখারিতে এর ভাষা: যে আমাদের এই বিষয়ে এমন কিছু নতুন ঢোকায় যা এতে নেই, তা প্রত্যাখ্যাত। সহিহ মুসলিমেও হাদিসটি আছে, সঙ্গে তাঁর কাছ থেকে আরেকটি ভাষা: যে এমন আমল করে যা আমাদের বিষয়ের সঙ্গে মেলে না, তা প্রত্যাখ্যাত। আয়াত ইসলাম ছাড়া অন্য দ্বীনকে প্রত্যাখ্যান করে। হাদিস একই মাপকাঠি খাটায় ইসলামের ভেতরেও, এমন ইবাদতের ওপর যা নবী ﷺ-এর আনা দ্বীনের অংশ কখনো ছিল না।"
          },
          {
            "en": "A second narration explains how 3:84 and 3:85 fit together. Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said the prophets are brothers of one father, their mothers are different and their religion is one. The religion every prophet brought was one submission; the laws given to each differed, as 5:48 says. That is why the believers can name Musa and Isa (AS) with honour in 3:84 and still hear, one verse later, that only Islam is accepted.",
            "bn": "দ্বিতীয় একটি বর্ণনা বুঝিয়ে দেয়, ৩:৮৪ আর ৩:৮৫ আয়াত কীভাবে একসঙ্গে খাপ খায়। বুখারি আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: নবীরা এক পিতার সন্তান ভাই, তাঁদের মা ভিন্ন ভিন্ন, আর তাঁদের দ্বীন একটাই। প্রত্যেক নবী যে দ্বীন এনেছেন তা একই আত্মসমর্পণ। আলাদা ছিল প্রত্যেককে দেওয়া শরিয়ত, যেমন ৫:৪৮ আয়াত বলে। এ কারণেই মুমিনরা ৩:৮৪ আয়াতে মূসা ও ঈসা (আঃ)-এর নাম সম্মানের সঙ্গে নিতে পারে, আর এক আয়াত পরেই শুনতে পারে যে শুধু ইসলামই কবুল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Beside the Verdict",
          "bn": "রায়ের পাশের আয়াতগুলো"
        },
        "p": [
          {
            "en": "3:19, earlier in this surah, states the principle first: the religion in the sight of Allah is Islam, and those given the Scripture differed only after knowledge had come to them, out of jealous animosity. 2:136 gives the believers the same declaration as 3:84, almost word for word. And 13:15 repeats the picture of 3:83 with a detail of its own: whoever is in the heavens and the earth prostrates to Allah, willingly or by compulsion, and their shadows too, morning and afternoon.",
            "bn": "এই সূরার শুরুর দিকে ৩:১৯ আয়াত মূল কথাটি আগেই বলে রেখেছে: আল্লাহর কাছে দ্বীন হলো ইসলাম, আর কিতাবপ্রাপ্তরা জ্ঞান আসার পরই মতভেদ করেছে, পরস্পরের প্রতি বিদ্বেষে। ২:১৩৬ আয়াত মুমিনদের মুখে ৩:৮৪ আয়াতের প্রায় হুবহু একই ঘোষণা দেয়। আর ১৩:১৫ আয়াত ৩:৮৩ আয়াতের ছবিটা আবার আঁকে, নিজের একটা বাড়তি খুঁটিনাটিসহ: আসমান-জমিনে যা কিছু আছে সবই ইচ্ছায় বা অনিচ্ছায় আল্লাহকে সিজদা করে, আর সকাল-সন্ধ্যায় তাদের ছায়াগুলোও।"
          },
          {
            "en": "5:48 tells the Prophet ﷺ that the Book sent to him confirms the Scripture before it, that to each a law and a method were prescribed, and that all will return to Allah, who will inform them about what they differed over. 17:15 adds a principle of justice that belongs beside any verse about the Hereafter: no bearer of burdens bears the burden of another, and Allah never punishes until He has sent a messenger.",
            "bn": "৫:৪৮ আয়াত নবী ﷺ-কে জানায়, তাঁর ওপর নাযিল হওয়া কিতাব আগের কিতাবের সত্যায়ন করে, প্রত্যেকের জন্য নির্ধারিত হয়েছে একটি শরিয়ত ও একটি পথ, আর সবাই আল্লাহর কাছেই ফিরবে, যিনি তাদের মতভেদের বিষয়গুলো জানিয়ে দেবেন। ১৭:১৫ আয়াত যোগ করে ন্যায়ের এমন এক নীতি, যা আখিরাত নিয়ে যেকোনো আয়াতের পাশে থাকা দরকার: কেউ অন্যের বোঝা বইবে না, আর রাসূল না পাঠানো পর্যন্ত আল্লাহ শাস্তি দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing the Willing Way",
          "bn": "খুশিমনে মেনে নেওয়ার পথ"
        },
        "p": [
          {
            "en": "3:83 says every created thing already submits, willingly or by compulsion. Your heartbeat, your ageing and the hour of your death are not waiting for your consent. The only choice left to a person is whether to submit willingly as well. When a decree arrives that you cannot change, an illness, a loss, a closed door, the practical question is whether you will bow to it only in body, as the unwilling do, or in heart and body together, as Ibn Kathir describes the believer.",
            "bn": "৩:৮৩ আয়াত বলে, সৃষ্টির প্রতিটি জিনিস ইচ্ছায় বা অনিচ্ছায় আগে থেকেই আত্মসমর্পিত। আপনার হৃৎস্পন্দন, বয়স বাড়া, মৃত্যুর সময়, কোনোটাই আপনার সম্মতির অপেক্ষায় বসে নেই। মানুষের হাতে বাকি থাকে শুধু একটা বাছাই: খুশিমনেও আত্মসমর্পণ করবে কি না। এমন কোনো তাকদির যখন আসে যা বদলানো যায় না, অসুখ, ক্ষতি বা বন্ধ হয়ে যাওয়া কোনো দরজা, তখন আসল প্রশ্ন হলো, আপনি কি অনিচ্ছুকদের মতো শুধু শরীর দিয়ে মাথা নোয়াবেন, নাকি ইবনে কাসীরের বর্ণিত মুমিনের মতো মন আর শরীর দুটো দিয়েই?"
          },
          {
            "en": "3:85 speaks of seeking, so check what you seek. Take one act of worship you do every day and learn how the Prophet ﷺ did it, so that your prayer, your dhikr and your fasting match what was brought rather than what was merely inherited or invented. The hadith of Aisha (RA) is not a warning only for others. It is a reason to learn the Sunnah of the things you already do.",
            "bn": "৩:৮৫ আয়াত খোঁজার কথা বলে, তাই দেখে নিন আপনি কী খুঁজছেন। প্রতিদিন করেন এমন একটি ইবাদত বেছে নিন, আর শিখুন নবী ﷺ সেটা কীভাবে করতেন। যাতে আপনার নামাজ, জিকির আর রোজা মেলে তাঁর আনা দ্বীনের সঙ্গে, শুধু বাপ-দাদার কাছ থেকে পাওয়া বা কারও বানানো রীতির সঙ্গে নয়। আয়েশা (রাঃ)-এর হাদিস শুধু অন্যদের জন্য সতর্কবাণী নয়। নিজে যা আগে থেকেই করছেন, তার সুন্নাহ শেখার কারণও এটাই।"
          },
          {
            "en": "With neighbours and colleagues of other faiths, let 3:84 shape your speech as much as 3:85 shapes your belief. Speak of Musa and Isa (AS) with honour, because you believe in what was given to them. Quote 3:85 inside its passage, never as a slogan pulled out to wound. And leave the final reckoning of any individual where 3:83 puts it: to Him they will be returned, and 17:15 reminds us that He punishes no one before a messenger has come.",
            "bn": "অন্য ধর্মের প্রতিবেশী আর সহকর্মীদের সঙ্গে ৩:৮৫ আয়াত যেমন আপনার বিশ্বাস গড়ে, ৩:৮৪ আয়াত তেমনি আপনার কথাবার্তা গড়ুক। মূসা ও ঈসা (আঃ)-এর কথা বলুন সম্মানের সঙ্গে, কারণ তাঁদের যা দেওয়া হয়েছিল আপনি তাতে ঈমান রাখেন। ৩:৮৫ আয়াত উদ্ধৃত করুন তার পুরো প্রসঙ্গসহ, আঘাত দেওয়ার জন্য টেনে বের করা স্লোগান হিসেবে কখনো নয়। আর কোনো নির্দিষ্ট মানুষের শেষ হিসাব ছেড়ে দিন সেখানে, যেখানে ৩:৮৩ আয়াত রেখেছে: তাঁর কাছেই সবাই ফিরবে। ১৭:১৫ আয়াতও মনে করিয়ে দেয়, রাসূল আসার আগে তিনি কাউকে শাস্তি দেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "To Die in Submission",
          "bn": "আত্মসমর্পিত অবস্থায় মৃত্যু"
        },
        "p": [
          {
            "en": "The Quran gives the supplication in the mouth of a prophet. At 12:101 Yusuf (AS), after the long road of his life has come to rest, addresses his Lord as Creator of the heavens and the earth and his Protector in this world and the Hereafter, and asks: cause me to die a Muslim and join me with the righteous. Our verse ends with the losers in the Hereafter; his prayer asks for the opposite end, from the root the passage has used three times.",
            "bn": "দোয়াটি কুরআন দিয়েছে একজন নবীর মুখে। ১২:১০১ আয়াতে ইউসুফ (আঃ), জীবনের দীর্ঘ পথ পাড়ি দেওয়ার পর, তাঁর রবকে ডাকেন আসমান-জমিনের স্রষ্টা আর দুনিয়া ও আখিরাতে তাঁর অভিভাবক বলে। তারপর চান: আমাকে মুসলিম অবস্থায় মৃত্যু দাও, আর নেককারদের সঙ্গে মিলিয়ে দাও। আমাদের আয়াত শেষ হয় আখিরাতের ক্ষতিগ্রস্তদের কথায়। তাঁর দোয়া চায় ঠিক উল্টো পরিণতি, সেই মূলের শব্দেই, যা এই অংশ তিনবার ব্যবহার করেছে।"
          },
          {
            "en": "Alongside it, a short supplication in the vocabulary of 3:83-85, offered as such and not as a transmitted wording: O Allah, to You belongs the submission of all that is in the heavens and the earth. Make my submission willing, in heart and body. I believe in what You revealed to all Your prophets and I make no distinction between them. Accept from me what I bring, and do not make me among the losers in the Hereafter.",
            "bn": "এর পাশাপাশি ৩:৮৩-৮৫ আয়াতের শব্দে সাজানো একটি ছোট দোয়া, এটি বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আসমান-জমিনের সবকিছুর আত্মসমর্পণ তোমারই জন্য। আমার আত্মসমর্পণকে খুশিমনের করে দাও, মন আর শরীর দুটো দিয়েই। তোমার সব নবীর ওপর তুমি যা নাযিল করেছ তাতে আমি ঈমান রাখি, তাঁদের মধ্যে পার্থক্য করি না। আমি যা নিয়ে আসি তা কবুল করো, আর আখিরাতে আমাকে ক্ষতিগ্রস্তদের একজন বানিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions on the Search",
          "bn": "খোঁজ নিয়ে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "When I say I am a Muslim, do I mean a name I was given or a submission I choose each day? Where does my life submit to Allah only because it has no choice, and what would it take to make that submission willing? Is there an act of worship I do out of habit whose source I have never checked against what the Prophet ﷺ brought?",
            "bn": "যখন বলি আমি মুসলিম, তখন কি পাওয়া একটা নামের কথা বলি, নাকি প্রতিদিন বেছে নেওয়া এক আত্মসমর্পণের কথা? আমার জীবনের কোথায় আল্লাহর কাছে মাথা নোয়ানো শুধু উপায় নেই বলে, আর সেটাকে খুশিমনের করতে কী লাগবে? এমন কোনো ইবাদত কি করি অভ্যাসবশে, যার উৎস নবী ﷺ-এর আনা দ্বীনের সঙ্গে মিলিয়ে কখনো দেখিনি?"
          },
          {
            "en": "Do I speak of the prophets of the Jews and the Christians as prophets I believe in, or as figures who belong to someone else? If my life's capital were counted on the Day I return to Him, what would I have spent it seeking, and would I be glad to have it accepted as it is?",
            "bn": "ইহুদি আর খ্রিস্টানদের নবীদের কথা কি আমি বলি এমন নবী হিসেবে, যাঁদের ওপর আমার ঈমান আছে, নাকি অন্য কারও মানুষ হিসেবে? যেদিন তাঁর কাছে ফিরব, সেদিন যদি আমার জীবনের পুঁজির হিসাব হয়, দেখা যাবে আমি তা কী খুঁজতে খরচ করেছি? আর যেমন আছে তেমনভাবে কবুল হলে কি আমি খুশি হব?"
          }
        ]
      }
    ]
  },
  "3:92": {
    "sections": [
      {
        "h": {
          "en": "Never, Until",
          "bn": "কখনোই নয়, যতক্ষণ না"
        },
        "p": [
          {
            "en": "Lan tanalu al-birra hatta tunfiqu mimma tuhibbun. Lan is the strongest negation Arabic has for the future, so the verse does not say it is difficult to reach birr without this; it says it will not happen. Birr is the broad word for goodness that the Quran uses for the whole of righteousness, and it is the same root used for good treatment of parents. The verse then attaches a single condition to it.",
            "bn": "'লান তানালুল বিররা হাত্তা তুনফিকূ মিম্মা তুহিব্বূন'। 'লান' হলো ভবিষ্যতের জন্য আরবির সবচেয়ে জোরালো নেতিবাচক শব্দ, তাই আয়াতটি বলছে না যে এটি ছাড়া বিরর-এ পৌঁছানো কঠিন; বলছে, তা ঘটবেই না। 'বিরর' হলো কল্যাণের সেই ব্যাপক শব্দ যা কুরআন গোটা পুণ্যের অর্থে ব্যবহার করে, আর পিতামাতার সাথে সদাচরণের জন্যও একই ধাতু ব্যবহৃত হয়। এরপর আয়াতটি তার সাথে একটিমাত্র শর্ত জুড়ে দেয়।"
          },
          {
            "en": "The condition is precise: mimma tuhibbun, from what you love. Min here is partitive, meaning a portion of it, not the whole of it. So the demand is not that a person strip himself of everything he values; it is that the category he gives from must be the category he loves. 2:177 makes the same requirement part of its definition of birr, listing those who give wealth in spite of love for it, and 76:8 says the same of feeding others.",
            "bn": "শর্তটি সুনির্দিষ্ট: 'মিম্মা তুহিব্বূন' — তোমরা যা ভালোবাসো তা থেকে। এখানে 'মিন' অংশবাচক, অর্থাৎ তার একটি অংশ, পুরোটা নয়। তাই দাবিটি এই নয় যে মানুষ তার মূল্যবান সবকিছু থেকে নিজেকে খালি করে ফেলবে; দাবি হলো, সে যে শ্রেণির জিনিস থেকে দেবে সেটি হতে হবে তার প্রিয় শ্রেণিরই। 2:177 আয়াত বিরর-এর সংজ্ঞার মধ্যেই একই শর্ত রাখে, যেখানে তাদের কথা আছে যারা সম্পদের প্রতি ভালোবাসা সত্ত্বেও তা দান করে; আর 76:8 আয়াত খাদ্য খাওয়ানোর ক্ষেত্রেও একই কথা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Two Verses",
          "bn": "দুই আয়াতের মাঝখানে"
        },
        "p": [
          {
            "en": "The verse immediately before it, 3:91, describes those who die in disbelief and says that the earth filled with gold would not be accepted from one of them as a ransom. Then comes this verse, telling believers that they will not reach birr until they spend from what they love. An entire planet of gold buys nothing in one line; a beloved thing given away buys everything in the next. In the standard division of the Quran, the third juz ends here.",
            "bn": "ঠিক আগের আয়াত 3:91 তাদের বর্ণনা দেয় যারা কুফরির ওপর মারা যায়, আর বলে যে তাদের কারও কাছ থেকে পৃথিবীভরা স্বর্ণও মুক্তিপণ হিসেবে গ্রহণ করা হবে না। তারপর আসে এই আয়াত, যা মুমিনদের বলে যে তারা প্রিয় জিনিস থেকে ব্যয় না করা পর্যন্ত বিরর-এ পৌঁছাবে না। এক লাইনে গোটা এক গ্রহভরা স্বর্ণ কিছুই কেনে না; পরের লাইনে একটি প্রিয় জিনিস দিয়ে দেওয়া সবকিছু কিনে ফেলে। কুরআনের প্রচলিত বিভাজনে তৃতীয় পারা এখানেই শেষ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Abu Talha and Bayruha",
          "bn": "আবু তালহা ও বাইরুহা"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both relate from Anas (RA) that Abu Talha (RA) was the wealthiest of the Ansar of Madinah in palm groves, and that the property dearest to him was Bayruha, which faced the mosque; the Prophet ﷺ used to enter it and drink from its good water. When this verse came down, Abu Talha came to the Prophet ﷺ and said that the dearest of his wealth to him was Bayruha, that it was charity for Allah, and that he hoped for its righteousness and its store with Allah.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম উভয়েই আনাস (রাঃ) থেকে বর্ণনা করেন যে খেজুরবাগানের দিক থেকে আবু তালহা (রাঃ) ছিলেন মদীনার আনসারদের মধ্যে সবচেয়ে ধনী, আর তাঁর কাছে সবচেয়ে প্রিয় সম্পত্তি ছিল বাইরুহা, যা মসজিদের মুখোমুখি ছিল; নবী ﷺ সেখানে ঢুকতেন এবং তার সুস্বাদু পানি পান করতেন। এই আয়াত নাযিল হলে আবু তালহা নবী ﷺ-এর কাছে এসে বললেন, তাঁর সম্পদের মধ্যে সবচেয়ে প্রিয় বাইরুহা, তা আল্লাহর জন্য সদকা, আর তিনি আল্লাহর কাছে তার পুণ্য ও সঞ্চয় প্রত্যাশা করেন।"
          },
          {
            "en": "He asked the Prophet ﷺ to place it wherever Allah showed him. The Prophet ﷺ said that this was profitable wealth, and directed him to give it to his nearest relatives; Abu Talha divided it among his relatives and his cousins. Two things in the narration are easy to miss. He gave the property he actually used and enjoyed, not a spare one — and the reward went straight back into his own family, which the Prophet ﷺ chose for him rather than leaving to sentiment.",
            "bn": "তিনি নবী ﷺ-কে বললেন, আল্লাহ তাঁকে যেখানে দেখান সেখানেই যেন তা ব্যয় করেন। নবী ﷺ বললেন, এ তো লাভজনক সম্পদ; আর তিনি তাঁকে নির্দেশ দিলেন তা নিকটাত্মীয়দের দিয়ে দিতে; আবু তালহা তা তাঁর আত্মীয় ও চাচাতো ভাইদের মধ্যে ভাগ করে দিলেন। বর্ণনাটির দুটি জিনিস সহজেই চোখ এড়িয়ে যায়। তিনি সেই সম্পত্তিই দিলেন যা তিনি সত্যিই ব্যবহার করতেন ও উপভোগ করতেন, বাড়তি কোনোটি নয় — আর প্রতিদানটি সোজা তাঁর নিজের পরিবারেই ফিরে গেল, যা নবী ﷺ তাঁর জন্য বেছে দিলেন, আবেগের ওপর ছেড়ে দিলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Does Not Ask",
          "bn": "আয়াতটি যা চায় না"
        },
        "p": [
          {
            "en": "Because min means a portion, the verse never asks anyone to empty his hands. 17:29 warns against the hand stretched wide open until its owner sits blamed and stripped, and 2:267 forbids the opposite error of picking out the defective to give away, something you would not accept yourself except with your eyes shut. Read together, the three verses set a floor and a ceiling: give from the good, give from what you love, and do not ruin yourself doing it.",
            "bn": "যেহেতু 'মিন' মানে একটি অংশ, আয়াতটি কাউকে কখনোই হাত খালি করে ফেলতে বলে না। 17:29 আয়াত সতর্ক করে সেই হাত সম্পর্কে যা এতটাই মেলে ধরা হয় যে তার মালিক তিরস্কৃত ও নিঃস্ব হয়ে বসে থাকে; আর 2:267 আয়াত নিষেধ করে উল্টো ভুলটি — দান করার জন্য নিকৃষ্ট জিনিস বেছে নেওয়া, যা আপনি নিজেই চোখ বন্ধ না করে গ্রহণ করতেন না। তিনটি আয়াত একসাথে পড়লে একটি মেঝে ও একটি ছাদ তৈরি হয়: উত্তম থেকে দাও, প্রিয় থেকে দাও, আর তা করতে গিয়ে নিজেকে ধ্বংস কোরো না।"
          }
        ]
      },
      {
        "h": {
          "en": "And Allah Is Knowing of It",
          "bn": "আর আল্লাহ সে বিষয়ে অবগত"
        },
        "p": [
          {
            "en": "The closing clause covers whatever you spend of anything at all: indeed, Allah is Knowing of it. That is not a decorative ending. Two people can hand over the same sum, one from a surplus he will not miss and one from something he had to talk himself into letting go, and no ledger on earth can tell the two apart. This clause says the difference is registered. It is also the only reassurance the giver needs, since 2:264 has already ruled out reminding anyone of what you gave.",
            "bn": "সমাপ্তি বাক্যটি আপনি যা-ই ব্যয় করুন তার সবকিছুকে ঢেকে নেয়: নিশ্চয়ই আল্লাহ সে বিষয়ে অবগত। এটি নিছক অলংকার নয়। দুজন মানুষ একই পরিমাণ অর্থ তুলে দিতে পারে — একজন এমন উদ্বৃত্ত থেকে যার অভাব সে টেরই পাবে না, আর একজন এমন কিছু থেকে যা ছাড়তে নিজেকে বোঝাতে হয়েছে — আর পৃথিবীর কোনো হিসাবের খাতা দুটিকে আলাদা করতে পারবে না। এই বাক্যটি বলছে, পার্থক্যটি লিপিবদ্ধ হচ্ছে। দাতার জন্য এটিই একমাত্র প্রয়োজনীয় আশ্বাস, কারণ 2:264 আয়াত আগেই দানের খোঁটা দেওয়াকে নাকচ করে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Finding Your Own Bayruha",
          "bn": "নিজের বাইরুহা খুঁজে পাওয়া"
        },
        "p": [
          {
            "en": "The question the verse asks is answerable in a minute. Not what can you afford, but what would you rather not give: the good hours of a weekend, the item you keep for guests, the savings marked for a plan you are attached to. Abu Talha's answer was a garden he drank from. The verse does not tell anyone which one it is, because each person already knows, and knowing is what makes the giving count.",
            "bn": "আয়াতটি যে প্রশ্ন করে তার উত্তর এক মিনিটেই দেওয়া যায়। প্রশ্নটি এই নয় যে আপনি কতটা দিতে সক্ষম, বরং এই যে কোনটি দিতে আপনার সবচেয়ে বেশি আপত্তি: ছুটির দিনের সবচেয়ে ভালো ঘণ্টাগুলো, অতিথিদের জন্য তুলে রাখা জিনিসটি, কোনো প্রিয় পরিকল্পনার জন্য সরিয়ে রাখা সঞ্চয়। আবু তালহার উত্তর ছিল সেই বাগান যার পানি তিনি পান করতেন। আয়াতটি কাউকে বলে দেয় না কোনটি তার — কারণ প্রত্যেকেই তা আগে থেকেই জানে, আর এই জানাটিই দানকে গণনায় তোলে।"
          }
        ]
      }
    ]
  },
  "3:102-103": {
    "sections": [
      {
        "h": {
          "en": "Taqwa in Full Measure",
          "bn": "যথাযথ তাকওয়া"
        },
        "p": [
          {
            "en": "O you who believe, fear Allah as He deserves to be feared — haqqa tuqatihi. The early authorities gloss the phrase: that He be obeyed and not disobeyed, remembered and not forgotten, thanked and not denied. The standard is deliberately absolute; it names what Allah deserves rather than what we manage. And it addresses believers, because taqwa is not the entry requirement of faith but its lifelong work.",
            "bn": "হে ঈমানদারগণ, আল্লাহকে ভয় করো যেমন ভয় করা তাঁর প্রাপ্য — হাক্কা তুকাতিহি। প্রাথমিক যুগের ইমামগণ বাক্যটির ব্যাখ্যা দেন: তাঁর আনুগত্য করা হবে, অবাধ্যতা নয়; তাঁকে স্মরণ করা হবে, ভোলা নয়; তাঁর শোকর করা হবে, অস্বীকার নয়। মানদণ্ডটি ইচ্ছাকৃতভাবেই চূড়ান্ত; এটি নাম নেয় আল্লাহর প্রাপ্যের, আমাদের সাধ্যের নয়। আর সম্বোধন মুমিনদের, কারণ তাকওয়া ঈমানে প্রবেশের শর্ত নয় — ঈমানের আজীবনের কাজ।"
          },
          {
            "en": "The scholars discuss how this absolute standard sits with 64:16 — fear Allah as much as you are able. Some early authorities held that the later verse explains the first: Allah does not demand the impossible; He points the effort. What He deserves names the direction; what you can bear sets the pace. The believer keeps the full standard in view precisely so that his best effort keeps climbing toward it, never settling early.",
            "bn": "এই চূড়ান্ত মানদণ্ড 64:16 আয়াতের সঙ্গে — সাধ্যমতো আল্লাহকে ভয় করো — কীভাবে মেলে, আলিমগণ তা আলোচনা করেছেন। কোনো কোনো প্রাথমিক ইমাম বলেছেন, পরের আয়াতটি প্রথমটির ব্যাখ্যা: আল্লাহ অসম্ভব দাবি করেন না; তিনি প্রচেষ্টার লক্ষ্য দেখিয়ে দেন। তাঁর প্রাপ্য নির্ধারণ করে দিক; আপনার সাধ্য নির্ধারণ করে গতি। মুমিন পূর্ণ মানদণ্ডটি চোখের সামনে রাখে ঠিক এ জন্যই — যেন তার সর্বোচ্চ চেষ্টা সেদিকে উঠতেই থাকে, আগে থেকে থেমে না যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Die Only as Muslims",
          "bn": "মুসলিম অবস্থাতেই মৃত্যু"
        },
        "p": [
          {
            "en": "And do not die except as Muslims. No one chooses the hour of death, so the command cannot be about the moment itself; the commentators read it as a command about the whole life that leads there. Remain in the state you would be willing to die in. Whoever holds to Islam in every ordinary day has obeyed the verse, because death then finds him where the verse requires him to be.",
            "bn": "আর মুসলিম না হয়ে মৃত্যুবরণ কোরো না। মৃত্যুর ক্ষণ কেউ বেছে নেয় না, তাই আদেশটি সেই মুহূর্তটি নিয়ে হতে পারে না; মুফাসসিরগণ একে পড়েন সেখানে পৌঁছানো গোটা জীবনের আদেশ হিসেবে। সেই অবস্থায় থাকো, যে অবস্থায় মরতে তুমি রাজি। যে প্রতিটি সাধারণ দিনে ইসলাম আঁকড়ে থাকে, সে আয়াতটি মান্য করেছে — কারণ মৃত্যু তখন তাকে সেখানেই পায়, আয়াত তাকে যেখানে থাকতে বলেছে।"
          },
          {
            "en": "The two commands of 3:102 belong together. Taqwa is the daily discipline; dying upon Islam is the destination it protects. A person who postpones obedience is gambling on a schedule he has never once controlled. The verse quietly removes the gamble: since the end may come at any time, the only guaranteed way to die as a Muslim is to live as one continuously.",
            "bn": "3:102 আয়াতের দুই আদেশ একসঙ্গেই থাকে। তাকওয়া প্রতিদিনের অনুশীলন; ইসলামের ওপর মৃত্যু সেই গন্তব্য যা এই অনুশীলন রক্ষা করে। যে আনুগত্য পিছিয়ে দেয়, সে বাজি ধরছে এমন এক সময়সূচির ওপর যা সে একবারও নিয়ন্ত্রণ করেনি। আয়াতটি নীরবে বাজিটাই তুলে নেয়: শেষ যেহেতু যেকোনো সময় আসতে পারে, মুসলিম হয়ে মরার একমাত্র নিশ্চিত উপায় — নিরবচ্ছিন্নভাবে মুসলিম হয়ে বাঁচা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rope of Allah",
          "bn": "আল্লাহর রজ্জু"
        },
        "p": [
          {
            "en": "Then 3:103: and hold firmly, all together, to the rope of Allah, and do not become divided. The commentators explain the rope as the covenant of Allah, His religion, and above all the Quran; the explanations differ in wording and meet in substance, since the Quran is where the covenant and the religion are held. A rope is what you grip when you cannot stand on your own — the image assumes a fall is possible.",
            "bn": "তারপর 3:103: আর তোমরা সবাই মিলে আল্লাহর রজ্জু দৃঢ়ভাবে ধরো এবং বিভক্ত হয়ো না। মুফাসসিরগণ রজ্জুর ব্যাখ্যা করেন আল্লাহর অঙ্গীকার, তাঁর দ্বীন, আর সর্বোপরি কুরআন হিসেবে; ব্যাখ্যাগুলো শব্দে ভিন্ন হলেও মর্মে মিলে যায়, কারণ অঙ্গীকার ও দ্বীন ধরা থাকে কুরআনেই। রজ্জু সেটিই যা মানুষ আঁকড়ে ধরে যখন নিজের পায়ে দাঁড়াতে পারে না — চিত্রটিই ধরে নেয় যে পড়ে যাওয়া সম্ভব।"
          },
          {
            "en": "The command has two parts that must not be separated: hold firmly, and do so all together, jami'an. It is possible to grip the religion in a way that shreds the community — every faction certain, every bond cut. The verse rules that out by grammar: the holding it commands is collective, one rope and many hands, and letting go of each other is treated as a way of letting go of it.",
            "bn": "আদেশটির দুটি অংশ, যাদের আলাদা করা চলবে না: দৃঢ়ভাবে ধরো, এবং সবাই মিলে ধরো — জামীআন। দ্বীনকে এমনভাবে আঁকড়ে ধরাও সম্ভব যাতে জামাত ছিন্নভিন্ন হয়ে যায় — প্রতিটি দল নিশ্চিত, প্রতিটি বন্ধন কাটা। আয়াতটি ব্যাকরণ দিয়েই তা নাকচ করে: যে ধরা এটি আদেশ করে তা সম্মিলিত — এক রজ্জু, বহু হাত — আর পরস্পরকে ছেড়ে দেওয়াকে গণ্য করা হয় রজ্জুটিকেই ছেড়ে দেওয়ার এক রূপ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enemies Made Brothers",
          "bn": "শত্রু থেকে ভাই"
        },
        "p": [
          {
            "en": "Then the reminder: remember Allah's favour upon you, when you were enemies and He joined your hearts, and you became, by His favour, brothers. The first hearers were the Aws and the Khazraj of Madinah, tribes with generations of raids and a devastating war behind them; the books of sira relate how easily old verses of boasting could stir the old rage even after Islam. The Quran calls what replaced that rage a favour — ni'mah — not an achievement.",
            "bn": "তারপর সেই স্মরণ: তোমাদের ওপর আল্লাহর অনুগ্রহ মনে করো — তোমরা ছিলে পরস্পরের শত্রু, তিনি তোমাদের হৃদয়গুলো জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেলে। প্রথম শ্রোতারা ছিল মদীনার আউস ও খাযরাজ — প্রজন্মের পর প্রজন্মের হানাহানি আর এক বিধ্বংসী যুদ্ধ যাদের পেছনে; সীরাতের কিতাবসমূহ বর্ণনা করে, ইসলামের পরেও গর্বের পুরোনো কবিতা কত সহজে পুরোনো ক্রোধ জাগিয়ে তুলতে পারত। সেই ক্রোধের জায়গায় যা এলো, কুরআন তাকে বলে অনুগ্রহ — নিয়ামত — কোনো অর্জন নয়।"
          },
          {
            "en": "And He saved you when you were on the edge of a pit of the Fire. The image is exact: not in the pit, but on its rim, one step from falling. 8:63 adds that if you had spent all that is in the earth, you could not have joined their hearts, but Allah joined them. Reconciliation on that scale is presented as something only He does — which is why unity, once given, must be guarded like the gift it is.",
            "bn": "আর তিনি তোমাদের বাঁচালেন যখন তোমরা ছিলে আগুনের গর্তের কিনারায়। চিত্রটি নিখুঁত: গর্তের ভেতরে নয়, তার কিনারায় — পতন থেকে এক পা দূরে। 8:63 যোগ করে: পৃথিবীর সবকিছু ব্যয় করলেও তুমি তাদের হৃদয়গুলো জুড়তে পারতে না, কিন্তু আল্লাহ তাদের জুড়ে দিয়েছেন। এই মাপের মিলনকে উপস্থাপন করা হয়েছে এমন কিছু হিসেবে যা কেবল তিনিই করেন — সে জন্যই ঐক্য, একবার দেওয়া হলে, রক্ষা করতে হয় ঠিক যেমন উপহার রক্ষা করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warning That Follows",
          "bn": "পরবর্তী সতর্কবাণী"
        },
        "p": [
          {
            "en": "Two verses later, 3:105 turns the favour into a warning: do not be like those who became divided and differed after the clear proofs had come to them. Division, in this passage, is not a management problem; it is a religious failure with a history — communities before us split after knowledge, not before it. Knowledge without the rope becomes a weapon factions use on each other.",
            "bn": "দুই আয়াত পরে 3:105 অনুগ্রহটিকে সতর্কবাণীতে ফেরায়: তাদের মতো হয়ো না, যারা স্পষ্ট প্রমাণ আসার পর বিভক্ত হয়েছে ও মতভেদ করেছে। এই অংশে বিভক্তি কোনো ব্যবস্থাপনার সমস্যা নয়; এটি এক দ্বীনি ব্যর্থতা, যার ইতিহাস আছে — আমাদের আগের জাতিগুলো ভাগ হয়েছে জ্ঞান আসার পরে, আগে নয়। রজ্জুবিহীন জ্ঞান হয়ে ওঠে সেই অস্ত্র, যা দলগুলো পরস্পরের ওপর চালায়।"
          },
          {
            "en": "This is why 49:10 gives believers their standing rule — the believers are but brothers, so make peace between your brothers. The Prophet ﷺ himself included 3:102 in the sermon of need he taught his companions, recited to this day at marriages. The unity these verses command is tested not at gatherings but in disagreements, when holding the rope together means staying in the room with a brother who is wrong.",
            "bn": "এ জন্যই 49:10 মুমিনদের স্থায়ী নিয়মটি দেয় — মুমিনরা তো ভাই ভাই, সুতরাং তোমাদের ভাইদের মধ্যে মীমাংসা করে দাও। নবী ﷺ নিজে 3:102 আয়াতটিকে অন্তর্ভুক্ত করেছেন সাহাবীদের শেখানো প্রয়োজনের খুতবায়, যা আজও বিবাহে পঠিত হয়। এই আয়াতগুলোর আদেশ করা ঐক্যের পরীক্ষা হয় সমাবেশে নয়, মতবিরোধে — যখন একসঙ্গে রজ্জু ধরে থাকা মানে ভুল করা ভাইটির সঙ্গে একই ঘরে থেকে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Practicing the Two Commands",
          "bn": "দুই নির্দেশের অনুশীলন"
        },
        "p": [
          {
            "en": "The passage leaves two disciplines, one vertical and one horizontal. Vertically: keep taqwa's full standard in sight and close the gap daily — a missed prayer restored, a doubtful income left, a tongue restrained. Horizontally: treat every fraying bond in your family and community as your assignment, because the verse makes division everyone's emergency, not a spectator sport.",
            "bn": "অংশটি দুটি অনুশীলন রেখে যায় — একটি ঊর্ধ্বমুখী, একটি পারস্পরিক। ঊর্ধ্বমুখী: তাকওয়ার পূর্ণ মানদণ্ড দৃষ্টিতে রাখুন এবং ফাঁকটুকু প্রতিদিন কমান — ছুটে যাওয়া নামায ফিরিয়ে আনা, সন্দেহজনক উপার্জন ছেড়ে দেওয়া, জিহ্বা সংযত করা। পারস্পরিক: পরিবার ও সমাজের প্রতিটি ছিঁড়তে-বসা বন্ধনকে নিজের দায়িত্ব গণ্য করুন, কারণ আয়াতটি বিভক্তিকে বানিয়েছে সবার জরুরি অবস্থা — দর্শক হয়ে দেখার বিষয় নয়।"
          },
          {
            "en": "Begin where the verse begins, with the rope itself. A household that reads the Quran together is holding the rope together in the most literal sense available. From there, one act of repair — a call to an estranged relative, a settled quarrel, an apology that costs pride — obeys 3:103 more truly than any amount of lamenting disunity. He joined hearts once as a favour; He is asked, in every such act, to do it again.",
            "bn": "শুরু করুন যেখান থেকে আয়াত শুরু করে — রজ্জুটি থেকেই। যে পরিবার একসঙ্গে কুরআন পড়ে, তারা সবচেয়ে আক্ষরিক অর্থেই একসঙ্গে রজ্জু ধরে আছে। সেখান থেকে একটি মেরামতের কাজ — দূরে সরে যাওয়া আত্মীয়কে একটি ফোন, একটি মিটমাট হওয়া ঝগড়া, অহংকারের মূল্যে একটি ক্ষমাপ্রার্থনা — অনৈক্যের জন্য যত খেদই করা হোক তার চেয়ে সত্যভাবে 3:103 মান্য করে। তিনি একবার অনুগ্রহ করে হৃদয় জুড়ে দিয়েছিলেন; এমন প্রতিটি কাজে তাঁর কাছে চাওয়া হয় — তিনি যেন আবার তা করেন।"
          }
        ]
      }
    ]
  },
  "3:106-107": {
    "sections": [
      {
        "h": {
          "en": "Where the Warning Leads",
          "bn": "সতর্কবাণী যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Surah Al Imran is Madinan, and from 3:100 onward a run of verses speaks to the believers directly. 3:100 warns that obeying a party of those given the Scripture would turn them back into disbelievers after their belief. 3:102-103 command taqwa and holding together to the rope of Allah. 3:104 asks for a community that calls to good. 3:105 forbids being like those who divided and differed after clear proofs had come to them, and ends: those will have a great punishment. Our passage begins with the very next word, yawma, on the Day.",
            "bn": "সূরা আলে ইমরান মাদানি সূরা। ৩:১০০ আয়াত থেকে একটানা কয়েকটি আয়াত সরাসরি মুমিনদের সঙ্গে কথা বলে। ৩:১০০ আয়াত সতর্ক করে, কিতাবপ্রাপ্তদের একটি দলের কথা মানলে তারা ঈমানের পর আবার কুফরিতে ফিরিয়ে নেবে। ৩:১০২-১০৩ আয়াত তাকওয়ার আর সবাই মিলে আল্লাহর রজ্জু আঁকড়ে ধরার হুকুম দেয়। ৩:১০৪ আয়াত চায় এমন একটি দল, যারা কল্যাণের দিকে ডাকবে। ৩:১০৫ আয়াত নিষেধ করে তাদের মতো হতে, যারা স্পষ্ট প্রমাণ আসার পরও বিভক্ত হয়েছে ও মতভেদ করেছে, আর শেষ হয় এই কথায়: তাদের জন্য আছে মহাশাস্তি। ঠিক পরের শব্দ দিয়েই আমাদের আয়াতের শুরু: ইয়াওমা, সেদিন।"
          },
          {
            "en": "The passage does not repeat its call to unity here. It shows the end of both roads. The opening word can be read as naming when the great punishment of 3:105 falls, so the warning and the Day run on as one thought across the verse break. After our two verses, 3:108 says these are the verses of Allah, recited in truth, and that Allah wants no injustice for anyone, and 3:109 that all matters return to Him. No particular occasion of revelation is established for these two verses; their meaning comes from where they stand.",
            "bn": "ঐক্যের ডাক এখানে আর নতুন করে দেওয়া হয়নি। আয়াত দেখায় দুই পথের শেষ মাথা। শুরুর শব্দটিকে এভাবে পড়া যায় যে, ৩:১০৫ আয়াতের সেই মহাশাস্তি কখন আসবে, সেটাই এখানে বলা হচ্ছে। তাহলে সতর্কবাণী আর সেই দিন আয়াতের সীমা পেরিয়ে একটাই কথা হয়ে যায়। আমাদের দুই আয়াতের পর ৩:১০৮ আয়াত বলে, এগুলো আল্লাহর আয়াত, সত্যসহ পড়ে শোনানো, আর আল্লাহ কারও প্রতি যুলম চান না। ৩:১০৯ আয়াত বলে, সব বিষয় তাঁর দিকেই ফিরে যায়। এই দুই আয়াতের নাজিলের কোনো নির্দিষ্ট প্রেক্ষাপট প্রমাণিত নয়। এদের অর্থ বোঝা যায় এদের অবস্থান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faces That Change Colour",
          "bn": "যে মুখের রং বদলায়"
        },
        "p": [
          {
            "en": "Tabyaddu and taswaddu come from ibyadda and iswadda, a verb pattern Arabic keeps for colours and visible marks, and both describe a change: faces will become white, faces will become black. Wujuh, faces, has no definite article, so it means some faces and other faces. The face is where a person is recognised, and where joy and shame show before any word is spoken. On that Day what was hidden in the heart is written on the most visible part of a person.",
            "bn": "তাবইয়াদ্দু আর তাসওয়াদ্দু এসেছে ইবইয়াদ্দা আর ইসওয়াদ্দা থেকে। আরবিতে ক্রিয়ার এই গড়ন রাখা হয় রং আর চোখে পড়া চিহ্নের জন্য, আর দুটোই বদলে যাওয়ার কথা বলে: কিছু মুখ সাদা হয়ে যাবে, কিছু মুখ কালো হয়ে যাবে। উজূহ, মুখগুলো, শব্দটি নির্দিষ্ট করা হয়নি, তাই অর্থ দাঁড়ায় কিছু মুখ আর অন্য কিছু মুখ। মুখ দেখেই মানুষকে চেনা যায়। কোনো কথা বলার আগেই আনন্দ আর লজ্জা ফুটে ওঠে মুখে। সেদিন অন্তরে যা লুকানো ছিল, তা লেখা হয়ে যাবে মানুষের সবচেয়ে খোলা জায়গায়।"
          },
          {
            "en": "The order is worth noticing. 3:106 names the whitening first, then turns to the blackened faces first, and 3:107 closes with the whitened faces in mercy, so the passage opens and ends on light. The blackened faces are met with a question, akafartum ba'da imanikum, did you disbelieve after your belief? The same words, ba'da imanikum, after your belief, appeared six verses earlier in 3:100, where the believers were warned that they could be turned back into disbelief. The warning of 3:100 becomes the question of 3:106.",
            "bn": "ক্রমটা খেয়াল করার মতো। ৩:১০৬ আয়াত প্রথমে বলে সাদা হওয়ার কথা, তারপর বিস্তারিত বলার সময় আগে ধরে কালো মুখগুলোকে। আর ৩:১০৭ আয়াত শেষ হয় রহমতের ভেতর থাকা সাদা মুখগুলো দিয়ে। ফলে পুরো অংশটা শুরুও হয় আলোয়, শেষও হয় আলোয়। কালো মুখগুলোর সামনে আসে একটি প্রশ্ন: আকাফারতুম বাদা ঈমানিকুম, ঈমান আনার পর তোমরা কি কুফরি করেছিলে? বাদা ঈমানিকুম, তোমাদের ঈমানের পর, এই একই শব্দ ছয় আয়াত আগে ৩:১০০ আয়াতে এসেছিল। সেখানে মুমিনদের সতর্ক করা হয়েছিল যে তাদের কুফরিতে ফিরিয়ে নেওয়া যেতে পারে। ৩:১০০ আয়াতের সতর্কবাণীই ৩:১০৬ আয়াতে প্রশ্ন হয়ে ফিরে আসে।"
          },
          {
            "en": "The whitened faces are asked nothing. Fa-fi rahmati Allah: they are within the mercy of Allah. Mercy is named where a reader might expect the word Paradise, and al-Muyassar and Ibn Kathir both explain it as Paradise. The believer is not described as receiving mercy from outside but as being inside it. Then hum fiha khalidun, they abide in it forever. The mercy of that Day is not a visit or a reprieve. It is a home that will not be taken away.",
            "bn": "সাদা মুখগুলোকে কিছুই জিজ্ঞেস করা হয় না। ফা-ফী রাহমাতিল্লাহ: তারা আল্লাহর রহমতের ভেতরে। পাঠক যেখানে জান্নাত শব্দটা আশা করতে পারতেন, সেখানে বলা হয়েছে রহমত। তাফসীরে মুয়াসসার আর ইবনে কাসীর দুজনেই এর ব্যাখ্যা করেছেন জান্নাত বলে। মুমিনকে এখানে বাইরে থেকে রহমত পাওয়া মানুষ হিসেবে দেখানো হয়নি, দেখানো হয়েছে রহমতের ভেতরে থাকা মানুষ হিসেবে। তারপর: হুম ফীহা খালিদূন, তারা সেখানে চিরকাল থাকবে। সেদিনের রহমত কোনো সাময়িক সফর বা ক্ষণিকের ছাড় নয়। এ এমন ঘর, যা আর কখনো কেড়ে নেওয়া হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Belief Came First?",
          "bn": "কার ঈমান আগে ছিল?"
        },
        "p": [
          {
            "en": "The question implies that belief came before the disbelief, and the commentators ask whose belief is meant. Ibn Kathir reports from Ibn Abbas (RA) that on that Day the faces of the people of the Sunnah and the Jama'ah will whiten and the faces of the people of innovation and division will blacken, a reading that follows closely on the warning against division in 3:105. Ibn Kathir also cites al-Hasan al-Basri, who said that those asked this question are the hypocrites, and he adds that the words taste the punishment for what you used to reject fit every disbeliever.",
            "bn": "প্রশ্নটি ধরে নেয় যে কুফরির আগে ঈমান ছিল। তাই মুফাসসিরগণ জানতে চেয়েছেন, কার ঈমানের কথা বলা হচ্ছে। ইবনে কাসীর ইবনে আব্বাস (রাঃ)-এর কথা উল্লেখ করেন: সেদিন সুন্নাহ ও জামাআতের অনুসারীদের মুখ সাদা হবে, আর বিদআত ও বিভক্তির লোকদের মুখ কালো হবে। এই ব্যাখ্যা ৩:১০৫ আয়াতের বিভক্তিবিরোধী সতর্কবাণীর সঙ্গে ঘনিষ্ঠভাবে মেলে। ইবনে কাসীর হাসান বসরির কথাও আনেন। তাঁর মতে, যাদের এই প্রশ্ন করা হবে তারা মুনাফিক। ইবনে কাসীর আরও বলেন, তোমাদের কুফরির কারণে শাস্তির স্বাদ নাও, এই কথা প্রত্যেক কাফিরের বেলায় খাটে।"
          },
          {
            "en": "At-Tabari records a further reading from Ubayy ibn Ka'b (RA), who took the earlier belief to be the testimony all the children of Adam gave when their Lord asked, am I not your Lord, the covenant 7:172 describes. On that reading the question reaches every disbeliever, reminding him of a yes he once said. Al-Muyassar describes the blackened faces as those who denied His Messenger and disobeyed His command.",
            "bn": "ইমাম তাবারি উবাই ইবনে কাব (রাঃ)-এর আরেকটি ব্যাখ্যা উল্লেখ করেন। তাঁর মতে আগের ঈমান হলো সেই সাক্ষ্য, যা আদম সন্তানেরা সবাই দিয়েছিল যখন তাদের রব জিজ্ঞেস করেছিলেন, আমি কি তোমাদের রব নই? ৭:১৭২ আয়াতে এই অঙ্গীকারের কথা আছে। এই ব্যাখ্যায় প্রশ্নটি প্রত্যেক কাফিরের কাছে পৌঁছে যায়, আর তাকে মনে করিয়ে দেয় একদিন সে হ্যাঁ বলেছিল। তাফসীরে মুয়াসসার কালো মুখের লোকদের বর্ণনা দেয় এভাবে: যারা তাঁর রসূলকে মিথ্যা বলেছে আর তাঁর হুকুম অমান্য করেছে।"
          },
          {
            "en": "These readings differ over who is meant, not over what the verse condemns. Whether the first belief was the covenant of 7:172, a profession on the tongue, or a faith once truly held and later abandoned, the question rebukes the loss of something that had been theirs. What none of the commentators draws from it is licence for a believer to name particular people today whose faces will blacken. The verse describes the Day, and 3:109 has already said to whom every matter returns.",
            "bn": "ব্যাখ্যাগুলোর পার্থক্য হলো কাদের কথা বলা হচ্ছে তা নিয়ে, আয়াত কী নিন্দা করছে তা নিয়ে নয়। আগের ঈমান ৭:১৭২ আয়াতের অঙ্গীকার হোক, মুখের দাবি হোক, বা একসময় সত্যিই ধারণ করে পরে ছেড়ে দেওয়া ঈমান হোক, প্রশ্নটি তিরস্কার করে নিজের জিনিস হারিয়ে ফেলাকে। কিন্তু কোনো মুফাসসির এ থেকে এই অনুমতি বের করেননি যে একজন মুমিন আজ নির্দিষ্ট মানুষের নাম ধরে বলবে, এদের মুখ কালো হবে। আয়াত সেই দিনের বর্ণনা দেয়। আর প্রতিটি বিষয় কার কাছে ফিরে যায়, ৩:১০৯ আয়াত তা আগেই বলে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Light From the Water of Wudu",
          "bn": "অজুর পানির আলো"
        },
        "p": [
          {
            "en": "In explaining the whitened and blackened faces, Ibn Kathir cites the words of Ibn Abbas (RA) and al-Hasan al-Basri. A sound hadith also describes how the faces of this ummah will be known on the Day of Resurrection. Sahih al-Bukhari records from Abu Hurayrah (RA) that he heard the Prophet ﷺ say that his ummah will be called on that Day with bright faces, hands and feet, from the traces of wudu.",
            "bn": "সাদা আর কালো মুখের ব্যাখ্যায় ইবনে কাসীর ইবনে আব্বাস (রাঃ) আর হাসান বসরির কথা উল্লেখ করেছেন। একটি সহিহ হাদিস আরও বলে, কিয়ামতের দিন এই উম্মতের মুখ কীভাবে চেনা যাবে। সহিহ বুখারিতে আবু হুরায়রা (রাঃ) বর্ণনা করেছেন, তিনি নবী ﷺ-কে বলতে শুনেছেন: কিয়ামতের দিন তাঁর উম্মতকে ডাকা হবে উজ্জ্বল মুখ, হাত আর পা নিয়ে, অজুর চিহ্নের কারণে।"
          },
          {
            "en": "The hadith is not a commentary on 3:106 and is not offered as one. What it adds is a picture drawn from ordinary life. The light on a believer's face on that Day has a history, and the history is made of water poured over the face five times a day, often in a hurry, often half-awake before dawn. 3:107 can sound far away. The hadith brings it close: what shines then is being washed now, one prayer at a time.",
            "bn": "হাদিসটি ৩:১০৬ আয়াতের তাফসীর নয়, সেভাবে এখানে আনাও হয়নি। হাদিসটি যা যোগ করে তা হলো রোজকার জীবন থেকে নেওয়া একটি ছবি। সেদিন মুমিনের মুখের আলোর একটা ইতিহাস আছে। সে ইতিহাস গড়া দিনে পাঁচবার মুখে ঢালা পানি দিয়ে, প্রায়ই তাড়াহুড়োয়, প্রায়ই ফজরের আগে আধো ঘুমে। ৩:১০৭ আয়াতের কথা অনেক দূরের মনে হতে পারে। হাদিসটি তাকে কাছে নিয়ে আসে। সেদিন যা ঝলমল করবে, তা আজ ধোয়া হচ্ছে, এক এক নামাজে।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Faces of That Day",
          "bn": "সেদিনের আরও কিছু মুখ"
        },
        "p": [
          {
            "en": "The Quran returns to faces on the Day more than once. 75:22-25 sets radiant faces looking at their Lord beside contorted faces expecting something backbreaking, so the radiance stands next to the sight of their Lord. 80:38-42 describes bright faces laughing and rejoicing at good news, and other faces covered with dust and overcast by blackness, and names the second group the disbelievers, the wicked. 10:26-27 promises that no darkness or humiliation will cover the faces of those who did good, while the faces of those who earned evil will look as if covered with pieces of the night.",
            "bn": "কুরআন সেই দিনের মুখের কথা একাধিকবার বলেছে। ৭৫:২২-২৫ আয়াত পাশাপাশি রাখে উজ্জ্বল মুখ, যা তাদের রবের দিকে তাকিয়ে থাকবে, আর বিবর্ণ মুখ, যা কোমর ভাঙা কোনো আচরণের আশঙ্কা করবে। উজ্জ্বল মুখের পাশেই সেখানে রবের দিকে তাকিয়ে থাকার কথা। ৮০:৩৮-৪২ আয়াতে আছে হাসিমুখ, সুসংবাদে উৎফুল্ল চেহারা, আর ধুলোমাখা মুখ, যা কালিমায় ঢাকা। দ্বিতীয় দলের নাম সেখানে বলে দেওয়া হয়েছে: কাফির, পাপাচারী। ১০:২৬-২৭ আয়াত কথা দেয়, যারা ভালো কাজ করেছে তাদের মুখ কোনো কালিমা বা লাঞ্ছনা ঢাকবে না। আর যারা মন্দ কামাই করেছে, তাদের মুখ যেন রাতের টুকরো দিয়ে ঢাকা।"
          },
          {
            "en": "39:60 names one cause of the blackening: on the Day of Resurrection you will see those who lied about Allah with their faces blackened, and it asks whether Hell is not the residence of the arrogant. 57:12 gives the other side a light of its own: the believing men and believing women with their light running before them and on their right, hearing good tidings of gardens. Read together, these verses show that the whitening of 3:106 is not a figure of speech only. It is how the truth of a life appears when nothing can be hidden.",
            "bn": "৩৯:৬০ আয়াত কালো হওয়ার একটি কারণ বলে দেয়: কিয়ামতের দিন তুমি দেখবে, যারা আল্লাহর নামে মিথ্যা বলেছে তাদের মুখ কালো। তারপর প্রশ্ন করে, অহংকারীদের ঠিকানা কি জাহান্নামে নয়? ৫৭:১২ আয়াত অন্য পক্ষকে দেয় তাদের নিজস্ব আলো: মুমিন নারী-পুরুষ, তাদের আলো ছুটে চলছে সামনে আর ডানে, আর তারা শুনছে জান্নাতের সুসংবাদ। আয়াতগুলো একসঙ্গে পড়লে বোঝা যায়, ৩:১০৬ আয়াতের সাদা হওয়া কেবল কথার অলংকার নয়। যখন কিছুই আর লুকানো যাবে না, তখন একটা জীবনের সত্য এভাবেই চেহারায় ফুটে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarding the Ending Now",
          "bn": "শেষটা আজই পাহারা দেওয়া"
        },
        "p": [
          {
            "en": "The verse asks about disbelief after belief, so the danger it names is not only rejection from the start but erosion. Few people decide to abandon their faith. Far more let it thin out: a prayer delayed until it is missed, a Quran that stays on the shelf for months, a circle of friends that slowly makes the religion feel strange. Living with this verse means noticing the slide early. Once a month, ask plainly what you did for Allah a year ago that you no longer do, and restore one thing.",
            "bn": "আয়াতটি প্রশ্ন করে ঈমানের পর কুফরি নিয়ে। তাই এর সতর্কতা শুধু শুরু থেকে অস্বীকারের বিরুদ্ধে নয়, ধীরে ধীরে ক্ষয়ে যাওয়ার বিরুদ্ধেও। খুব কম মানুষই ঠিক করে ঈমান ছেড়ে দেবে। বেশির ভাগ মানুষ ঈমানকে পাতলা হতে দেয়। নামাজ পিছোতে পিছোতে কাজা হয়ে যায়, কুরআন মাসের পর মাস তাকে পড়ে থাকে, বন্ধুদের আড্ডা ধীরে ধীরে দ্বীনকেই অচেনা করে তোলে। এই আয়াত নিয়ে বাঁচা মানে পিছলে পড়াটা শুরুতেই টের পাওয়া। মাসে একবার সোজাসুজি নিজেকে জিজ্ঞেস করুন: এক বছর আগে আল্লাহর জন্য যা করতাম, এখন কী আর করি না? তারপর অন্তত একটি জিনিস ফিরিয়ে আনুন।"
          },
          {
            "en": "The passage also sets this Day directly after the command not to divide. So living it includes how you speak about other Muslims: refusing to turn a disagreement into a split, declining to pass on the rumour that hardens two groups against each other, praying in congregation with people you differ from. And the hadith of wudu gives a daily practice. Wash the face slowly and fully, and let the water be a small reminder of the face you hope to bring before Allah.",
            "bn": "এই অংশ সেই দিনের কথা রেখেছে বিভক্ত না হওয়ার হুকুমের ঠিক পরে। তাই এ নিয়ে বাঁচার মধ্যে পড়ে অন্য মুসলিমদের নিয়ে আপনি কীভাবে কথা বলেন। মতভেদকে ভাঙনে পরিণত হতে না দেওয়া, দুই দলকে একে অন্যের বিরুদ্ধে শক্ত করে তোলে এমন গুজব আর না ছড়ানো, যাদের সঙ্গে মতের অমিল তাদের সঙ্গেও এক জামাআতে নামাজ পড়া। আর অজুর হাদিস দেয় রোজকার একটি আমল। ধীরে ধীরে, পুরোপুরি মুখ ধুয়ে নিন। পানিটুকু হোক সেই মুখের ছোট্ট স্মারক, যে মুখ নিয়ে আপনি আল্লাহর সামনে দাঁড়াতে চান।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Bright Face",
          "bn": "উজ্জ্বল মুখের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The same surah already holds a supplication that answers this passage, spoken by those firm in knowledge in 3:8: our Lord, let not our hearts deviate after You have guided us, and grant us from Yourself mercy; indeed, You are the Bestower. It asks for exactly what 3:106-107 describe: protection from turning away after guidance, and mercy from Allah Himself. It is the Quran's own wording, and a believer can make it his daily prayer.",
            "bn": "এই অংশের জবাব দেয় এমন একটি দোয়া একই সূরায় আগে থেকেই আছে। ৩:৮ আয়াতে জ্ঞানে দৃঢ় মানুষেরা বলে: হে আমাদের রব, হেদায়াত দেওয়ার পর আমাদের অন্তরগুলোকে বাঁকা করে দিয়ো না, আর তোমার কাছ থেকে আমাদের রহমত দাও, নিশ্চয়ই তুমিই মহাদাতা। ৩:১০৬-১০৭ আয়াত যা বর্ণনা করে, দোয়াটি ঠিক তা-ই চায়: হেদায়াতের পর মুখ ফিরিয়ে নেওয়া থেকে রক্ষা, আর সরাসরি আল্লাহর কাছ থেকে রহমত। এ কুরআনেরই ভাষা, আর একজন মুমিন একে নিজের রোজকার দোয়া বানিয়ে নিতে পারেন।"
          },
          {
            "en": "What follows is a short supplication composed in the vocabulary of the verses themselves, not a transmitted du'a: O Allah, whiten our faces on the Day when faces whiten and faces blacken. Do not let us disbelieve after our belief. Keep us together upon Your rope, and place us within Your mercy, to abide in it forever. It carries four requests, each taken from a phrase of the passage and the verses just before it.",
            "bn": "নিচের দোয়াটি আয়াতগুলোর নিজের শব্দ দিয়ে সাজানো ছোট একটি দোয়া, হাদিসে বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, যেদিন কিছু মুখ সাদা হবে আর কিছু মুখ কালো হবে, সেদিন আমাদের মুখ সাদা করে দিয়ো। ঈমান আনার পর আমাদের কুফরিতে যেতে দিয়ো না। তোমার রজ্জুর ওপর আমাদের একসঙ্গে রাখো, আর আমাদের তোমার রহমতের ভেতর রাখো, সেখানে চিরকাল থাকার জন্য। এতে চারটি চাওয়া আছে, প্রতিটি নেওয়া এই অংশের বা তার ঠিক আগের আয়াতগুলোর কোনো না কোনো কথা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What My Face Is Becoming",
          "bn": "আমার মুখ কী হয়ে উঠছে"
        },
        "p": [
          {
            "en": "If the Day showed on my face what my heart is holding on to right now, what would people see? What have I let slip from the faith I practised a few years ago, without ever deciding to let it go, and what would it take to pick it up again this week? When I think of believers I disagree with, do I think of them as people I will stand beside on that Day, or only as a faction to be defeated?",
            "bn": "আজ এই মুহূর্তে আমার অন্তর যা আঁকড়ে আছে, সেই দিন যদি তা আমার মুখে ফুটিয়ে তোলে, মানুষ কী দেখবে? কয়েক বছর আগে যে ঈমান নিয়ে আমল করতাম, তার কোন অংশ ছেড়ে দেব বলে ঠিক না করেই হাত থেকে ফসকে যেতে দিয়েছি? এই সপ্তাহে তা আবার তুলে নিতে কী লাগবে? যেসব মুমিনের সঙ্গে আমার মতের অমিল, তাদের কথা ভাবলে কি ভাবি সেদিন এদের পাশেই দাঁড়াব, নাকি শুধু হারিয়ে দেওয়ার মতো একটা দল হিসেবে দেখি?"
          },
          {
            "en": "Am I leaning on the memory that I once believed sincerely, as if that settles the ending, or am I still guarding that belief as something that can be lost? And when I make wudu tomorrow morning, will I wash my face as a chore to be finished, or as the face I hope will be found, on that Day, within the mercy of Allah?",
            "bn": "একসময় আন্তরিকভাবে ঈমান এনেছিলাম, সেই স্মৃতির ওপর কি ভর দিয়ে আছি, যেন তাতেই শেষটা নিশ্চিত হয়ে গেছে? নাকি এখনো সেই ঈমানকে এমন কিছু ভেবে পাহারা দিই, যা হারিয়ে যেতে পারে? আর কাল সকালে অজু করার সময় কি মুখ ধোব শুধু একটা কাজ সারার মতো করে? নাকি ধোব সেই মুখ হিসেবে, যাকে সেদিন আল্লাহর রহমতের ভেতর পাওয়া যাবে বলে আমি আশা করি?"
          }
        ]
      }
    ]
  },
  "3:113-115": {
    "sections": [
      {
        "h": {
          "en": "A Pause Inside a Rebuke",
          "bn": "তিরস্কারের মাঝখানে একটু থামা"
        },
        "p": [
          {
            "en": "The passage before these verses is severe. 3:110 tells the believers they are the best nation produced for mankind, then says that if the People of the Scripture had believed it would have been better for them: among them are believers, but most of them are defiantly disobedient. 3:111 says they will not harm the believers beyond annoyance, and 3:112 describes humiliation that clings to those who rejected the verses of Allah and killed the prophets without right. Then, before the next rebuke, 3:113 opens with two words, laysu sawa', they are not all the same.",
            "bn": "এই আয়াতগুলোর আগের অংশ কঠোর। ৩:১১০ আয়াত মুমিনদের বলে, মানবজাতির জন্য তাদের আবির্ভাব সর্বোত্তম উম্মত হিসেবে। তারপর বলে, আহলে কিতাব ঈমান আনলে তাদের জন্যই ভালো হতো। তাদের মধ্যে কেউ কেউ মুমিন, কিন্তু তাদের অধিকাংশই ফাসিক। ৩:১১১ আয়াত বলে, সামান্য কষ্ট দেওয়ার বেশি তারা মুমিনদের ক্ষতি করতে পারবে না। আর ৩:১১২ আয়াত বলে সেই লাঞ্ছনার কথা, যা আঁকড়ে থাকে তাদের, যারা আল্লাহর আয়াত অস্বীকার করেছে আর অন্যায়ভাবে নবীদের হত্যা করেছে। তারপর পরের তিরস্কার আসার আগে ৩:১১৩ আয়াত শুরু হয় দুটি শব্দে: লাইসূ সাওয়া, তারা সবাই সমান নয়।"
          },
          {
            "en": "The pause is short, three verses, and the surah resumes at 3:116 with those who disbelieve and at 3:118 with a warning about intimates. Ibn Kathir reports from Muhammad ibn Ishaq, and from al-Awfi on the authority of Ibn Abbas (RA), that these verses came down about scholars of the People of the Scripture who believed, such as Abdullah ibn Salam, Asad ibn Ubayd, Tha'labah ibn Sa'yah and Usayd ibn Sa'yah (RA). The passage unfolds what 3:110 had already said in a phrase: among them are believers.",
            "bn": "বিরতিটা ছোট, মাত্র তিন আয়াতের। ৩:১১৬ আয়াতে সূরা আবার ফেরে কাফিরদের কথায়, আর ৩:১১৮ আয়াতে আসে অন্তরঙ্গ বন্ধু বানানো নিয়ে সতর্কবাণী। ইবনে কাসীর মুহাম্মাদ ইবনে ইসহাক থেকে, এবং আওফির সূত্রে ইবনে আব্বাস (রাঃ) থেকে উল্লেখ করেন, এই আয়াতগুলো নাজিল হয়েছে আহলে কিতাবের সেই আলেমদের সম্পর্কে যারা ঈমান এনেছিলেন। যেমন আবদুল্লাহ ইবনে সালাম, আসাদ ইবনে উবাইদ, সালাবা ইবনে সাইয়া আর উসাইদ ইবনে সাইয়া (রাঃ)। ৩:১১০ আয়াত এক কথায় যা বলে রেখেছিল, তাদের মধ্যে কেউ কেউ মুমিন, এই অংশ সেটাই খুলে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Upright Through the Night",
          "bn": "রাতভর সোজা হয়ে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Sawa' is the word 3:64 used for a word held level between two sides. Here it is negated: the People of the Scripture do not all stand at the same level. Ummatun qa'imah is a community that stands, from the root q-w-m. Al-Muyassar explains it as upright upon the command of Allah, and Ibn Kathir as those who stand for what is right and act on the Book. The word holds both the posture of prayer and the steadiness of a life, and the rest of the verse gives both.",
            "bn": "সাওয়া সেই শব্দ, যা ৩:৬৪ আয়াত ব্যবহার করেছিল দুই পক্ষের মাঝে সমান এক কথার জন্য। এখানে শব্দটি আসে না-বাচক হয়ে: আহলে কিতাবের সবাই এক স্তরে দাঁড়িয়ে নেই। উম্মাতুন কাইমাহ মানে দাঁড়িয়ে থাকা একটি দল, মূল ক-ও-ম থেকে। তাফসীরে মুয়াসসার এর ব্যাখ্যা করে আল্লাহর হুকুমের ওপর সোজা থাকা বলে। ইবনে কাসীর বলেন, যারা হকের পক্ষে দাঁড়ায় আর কিতাব অনুযায়ী আমল করে। শব্দটির ভেতরে আছে নামাজে দাঁড়ানোর ভঙ্গি আর জীবনের দৃঢ়তা দুটোই। আয়াতের বাকি অংশ দুটোরই বর্ণনা দেয়।"
          },
          {
            "en": "Yatluna ayat Allah ana' al-layl: they recite the verses of Allah in the hours of the night. Ana' is a plural, the night's hours one after another, not a single late moment. Wa hum yasjudun, while they prostrate, is a circumstantial clause: the reciting happens inside the prayer. Ibn Kathir explains it as night prayer in which they recite. 3:114 then lists their faith and conduct: belief in Allah and the Last Day, enjoining right, forbidding wrong, and hastening in good deeds. Three of them, belief in Allah, enjoining right and forbidding wrong, are the very qualities 3:110 gave the believers.",
            "bn": "ইয়াতলূনা আয়াতিল্লাহি আনাআল লাইল: তারা রাতের প্রহরে প্রহরে আল্লাহর আয়াত তেলাওয়াত করে। আনা বহুবচন, রাতের একের পর এক প্রহর, গভীর রাতের কোনো একটি মুহূর্ত নয়। ওয়া হুম ইয়াসজুদূন, সিজদারত অবস্থায়, এটি অবস্থা বোঝানো বাক্যাংশ। অর্থাৎ তেলাওয়াত হচ্ছে নামাজের ভেতরেই। ইবনে কাসীর এর ব্যাখ্যা দেন রাতের নামাজ বলে, যাতে তারা কুরআন পড়ে। ৩:১১৪ আয়াত এরপর তাদের ঈমান আর আচরণের তালিকা দেয়: আল্লাহ ও শেষ দিনে ঈমান, ভালো কাজের আদেশ, মন্দ কাজে নিষেধ, আর নেক কাজে ছুটে যাওয়া। এর তিনটি গুণ, আল্লাহর ওপর ঈমান, ভালো কাজের আদেশ আর মন্দ কাজে নিষেধ, ঠিক সেগুলোই, যা ৩:১১০ আয়াত মুমিনদের দিয়েছিল।"
          },
          {
            "en": "Then 3:115: wa ma yaf'alu min khayrin fa-lan yukfaruh, whatever good they do, it will never be denied them. Yukfaruh is from k-f-r, whose root sense is to cover, the root of kufr. Their good will not be covered over or left unacknowledged. Al-Muyassar explains that it will not be lost with Allah, but will be appreciated and rewarded. The verse closes, wallahu 'alimun bil-muttaqin, Allah knows the God-fearing, so no good done in private escapes Him.",
            "bn": "তারপর ৩:১১৫ আয়াত: ওয়া মা ইয়াফআলূ মিন খাইরিন ফালাই ইউকফারূহ, তারা যে ভালো কাজই করুক, তা কখনো অস্বীকার করা হবে না। ইউকফারূহ এসেছে ক-ফ-র থেকে, যার মূল অর্থ ঢেকে দেওয়া। কুফরও এই মূল থেকেই। তাদের ভালো কাজ ঢেকে রাখা হবে না, অস্বীকৃতও থাকবে না। তাফসীরে মুয়াসসার বলে, আল্লাহর কাছে তা হারাবে না, বরং তার কদর করা হবে আর প্রতিদান দেওয়া হবে। আয়াত শেষ হয়: ওয়াল্লাহু আলীমুম বিল মুত্তাকীন, আল্লাহ মুত্তাকীদের ভালো করে জানেন। তাই গোপনে করা কোনো ভালো কাজও তাঁর অজানা থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Being Praised",
          "bn": "কাদের প্রশংসা করা হচ্ছে"
        },
        "p": [
          {
            "en": "Ibn Kathir, following the report from Ibn Ishaq, reads the community as those of the People of the Scripture who embraced Islam, and he sets the verse beside 3:199, near the end of the surah, which praises those among them who believe in Allah, in what was revealed to the believers and in what was revealed to them. Al-Muyassar likewise describes them as upright upon Allah's command and believing in His Messenger Muhammad ﷺ, standing at night reciting the Quran.",
            "bn": "ইবনে কাসীর ইবনে ইসহাকের বর্ণনা অনুসরণ করে এই দলকে বোঝেন আহলে কিতাবের সেই লোকদের, যারা ইসলাম গ্রহণ করেছিলেন। তিনি আয়াতটিকে রাখেন সূরার শেষ দিকের ৩:১৯৯ আয়াতের পাশে। সেখানে প্রশংসা করা হয়েছে তাদের মধ্যে যারা আল্লাহর ওপর, মুমিনদের প্রতি যা নাজিল হয়েছে তার ওপর, আর তাদের প্রতি যা নাজিল হয়েছে তার ওপর ঈমান রাখে। তাফসীরে মুয়াসসারও তাদের বর্ণনা দেয় আল্লাহর হুকুমের ওপর সোজা থাকা, তাঁর রসূল মুহাম্মাদ ﷺ-এর ওপর ঈমান আনা, রাতে দাঁড়িয়ে কুরআন তেলাওয়াত করা মানুষ হিসেবে।"
          },
          {
            "en": "The passage also reads as a portrait of qualities, and 7:159 gives a like portrait: among the people of Musa (AS) is a community which guides by truth and by it establishes justice. The word hastening deserves a pause: they do not merely do good, they rush to it. Al-Muyassar explains it as hurrying to do good deeds, and says that whatever good this believing community does, little or much, will not be lost with Allah.",
            "bn": "এই অংশকে কিছু গুণের ছবি হিসেবেও পড়া যায়, আর ৭:১৫৯ আয়াতে আছে তেমনই আরেকটি ছবি: মূসা (আঃ)-এর সম্প্রদায়ের মধ্যে একটি দল আছে, যারা সত্য দিয়ে পথ দেখায় আর সত্য দিয়েই ইনসাফ করে। ছুটে যাওয়া শব্দটিতে একটু থামা দরকার। তারা শুধু ভালো কাজ করে না, ভালো কাজের দিকে দৌড়ায়। তাফসীরে মুয়াসসার এর ব্যাখ্যা দেয় ভালো কাজে এগিয়ে যাওয়া বলে। সেখানে আরও বলা হয়েছে, এই ঈমানদার দলটি কম হোক বা বেশি, যে ভালো কাজই করুক, তা আল্লাহর কাছে হারাবে না।"
          },
          {
            "en": "Whichever reading is taken, the text itself keeps two things side by side. The rebuke that came before is not withdrawn by laysu sawa', and the praise in these verses is not cancelled by that rebuke. The Quran holds both at once, and it names the ground of the praise: faith in Allah and the Last Day, worship, and good conduct. The verse passes no verdict on any community living today, and it gives no one licence to generalise about one.",
            "bn": "যে ব্যাখ্যাই নেওয়া হোক, আয়াতের ভাষা নিজেই দুটো জিনিস পাশাপাশি রাখে। লাইসূ সাওয়া বলার ফলে আগের তিরস্কার ফিরিয়ে নেওয়া হয়নি। আবার সেই তিরস্কারের কারণে এই আয়াতগুলোর প্রশংসাও বাতিল হয়নি। কুরআন দুটোকেই একসঙ্গে ধরে রাখে, আর প্রশংসার ভিত্তিও বলে দেয়: আল্লাহ ও শেষ দিনে ঈমান, ইবাদত, আর ভালো আচরণ। আজকের কোনো সম্প্রদায় সম্পর্কে আয়াত কোনো রায় দেয় না, আর কাউকে কোনো সম্প্রদায় নিয়ে ঢালাও কথা বলার অনুমতিও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reward Given Twice",
          "bn": "দুবার দেওয়া প্রতিদান"
        },
        "p": [
          {
            "en": "The report naming Abdullah ibn Salam (RA) and his companions is one Ibn Kathir cites from Ibn Ishaq and, through al-Awfi, from Ibn Abbas (RA). A sound hadith speaks to the promise of 3:115. Sahih al-Bukhari records from Abu Musa al-Ash'ari (RA) that the Prophet ﷺ said three people will have their reward twice. The first he named is a man of the People of the Scripture who believed in his own prophet and then believed in Muhammad ﷺ.",
            "bn": "আবদুল্লাহ ইবনে সালাম (রাঃ) ও তাঁর সঙ্গীদের নাম যে বর্ণনায় আছে, ইবনে কাসীর তা এনেছেন ইবনে ইসহাক থেকে, আর আওফির সূত্রে ইবনে আব্বাস (রাঃ) থেকে। ৩:১১৫ আয়াতের প্রতিশ্রুতির সঙ্গে মেলে এমন একটি সহিহ হাদিস আছে। সহিহ বুখারিতে আবু মূসা আশআরি (রাঃ) বর্ণনা করেছেন, নবী ﷺ বলেছেন, তিন ধরনের মানুষ দুবার প্রতিদান পাবে। তিনি প্রথম যার কথা বলেন, সে আহলে কিতাবের এমন একজন, যে নিজের নবীর ওপর ঈমান এনেছিল, তারপর মুহাম্মাদ ﷺ-এর ওপর ঈমান আনল।"
          },
          {
            "en": "The hadith echoes 28:54, where those given the Scripture before, who believed when the Quran was recited to them, are promised their reward twice for their patience. It also shows what 3:115 means in practice. The years such a person spent in sincere worship under his earlier prophet are not erased when he follows the last Messenger ﷺ. They are counted. Allah does not cover over a good deed; He multiplies it.",
            "bn": "হাদিসটি মিলে যায় ২৮:৫৪ আয়াতের সঙ্গে। সেখানে যাদের আগে কিতাব দেওয়া হয়েছিল, আর কুরআন শুনে যারা ঈমান এনেছিল, তাদের ধৈর্যের জন্য দুবার প্রতিদানের ওয়াদা দেওয়া হয়েছে। হাদিসটি দেখায় ৩:১১৫ আয়াতের কথা বাস্তবে কেমন। এমন মানুষ আগের নবীর অনুসারী হিসেবে আন্তরিক ইবাদতে যে বছরগুলো কাটিয়েছে, শেষ রসূল ﷺ-কে মেনে নেওয়ার পর সেগুলো মুছে যায় না। সেগুলো হিসাবে ধরা হয়। আল্লাহ কোনো ভালো কাজ ঢেকে দেন না, তিনি তা বাড়িয়ে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Voices From Across the Book",
          "bn": "কুরআনের নানা জায়গা থেকে একই সুর"
        },
        "p": [
          {
            "en": "3:199 is the passage's twin at the close of the surah: among the People of the Scripture are those who believe in Allah and what was revealed to you and to them, humbly submissive, who do not sell His verses for a small price, and their reward is with their Lord. 28:52-54 gives their own words when the Quran is recited: we have believed in it, it is the truth from our Lord, and even before it we were Muslims. 17:107-109 describes those given knowledge before it falling on their faces in prostration and weeping as it increases them in humility.",
            "bn": "৩:১৯৯ আয়াত সূরার শেষে এই অংশের যমজ: আহলে কিতাবের মধ্যে এমন লোক আছে যারা আল্লাহর ওপর, তোমাদের প্রতি যা নাজিল হয়েছে তার ওপর, আর তাদের প্রতি যা নাজিল হয়েছে তার ওপর ঈমান রাখে। তারা আল্লাহর সামনে বিনয়ী, সামান্য দামে তাঁর আয়াত বিক্রি করে না, আর তাদের প্রতিদান তাদের রবের কাছে। ২৮:৫২-৫৪ আয়াত শোনায় কুরআন শুনে তাদের নিজেদের কথা: আমরা এতে ঈমান এনেছি, এ আমাদের রবের পক্ষ থেকে সত্য, আর এর আগেও আমরা মুসলিম ছিলাম। ১৭:১০৭-১০৯ আয়াতে আছে, আগে যাদের জ্ঞান দেওয়া হয়েছিল তারা কুরআন শুনে কাঁদতে কাঁদতে সিজদায় লুটিয়ে পড়ে, আর তা তাদের বিনয় বাড়িয়ে দেয়।"
          },
          {
            "en": "7:159 shows the same fairness in another surah: among the people of Musa (AS) is a community that guides by truth and establishes justice by it. And 3:75, earlier in this surah, makes the point in the language of trust: some of the People of the Scripture would return a heap of wealth entrusted to them, and some would not return a single coin unless you kept after them. In each place the Quran judges people one by one, by what they believe and what they do.",
            "bn": "৭:১৫৯ আয়াত আরেক সূরায় একই ইনসাফ দেখায়: মূসা (আঃ)-এর সম্প্রদায়ের মধ্যে একটি দল আছে, যারা সত্য দিয়ে পথ দেখায় আর সত্য দিয়ে ইনসাফ কায়েম করে। আর এই সূরারই আগে ৩:৭৫ আয়াত একই কথা বলে আমানতের ভাষায়: আহলে কিতাবের কেউ কেউ গচ্ছিত রাখা সোনার স্তূপও ফিরিয়ে দেবে, আবার কেউ কেউ পেছনে লেগে না থাকলে একটা দিনারও ফেরত দেবে না। প্রতিটি জায়গায় কুরআন মানুষকে মাপে একজন একজন করে, তারা কী বিশ্বাস করে আর কী করে তা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fairness in Ordinary Speech",
          "bn": "রোজকার কথায় ইনসাফ"
        },
        "p": [
          {
            "en": "The first thing this passage changes is how a believer talks. When a conversation turns to another community, a news story, or a neighbour's faith, the Quran's own habit is some of them, not all of them. Keep that word. Before sharing a post that condemns a whole people, ask whether you would say laysu sawa' about them, and whether you are willing to. If Allah, in a passage of rebuke, stops to name the upright, a believer has no warrant to be less fair.",
            "bn": "এই অংশ প্রথম যা বদলায়, তা হলো একজন মুমিনের কথা বলার ধরন। আলাপ যখন অন্য কোনো সম্প্রদায়, কোনো খবর বা প্রতিবেশীর ধর্মের দিকে যায়, কুরআনের নিজের অভ্যাস হলো তাদের কেউ কেউ, সবাই নয়। এই শব্দটা ধরে রাখুন। গোটা একটা জাতিকে দোষারোপ করা কোনো পোস্ট শেয়ার করার আগে নিজেকে জিজ্ঞেস করুন, তাদের সম্পর্কে আপনি কি লাইসূ সাওয়া বলতেন, আর বলতে রাজি কি না। আল্লাহ নিজে তিরস্কারের মাঝখানে থেমে সৎ মানুষদের কথা বলেছেন। একজন মুমিনের এর চেয়ে কম ইনসাফ করার কোনো অধিকার নেই।"
          },
          {
            "en": "The second change is a mirror. The qualities praised here are a checklist for any believer: some hours of the night given to recitation in prayer, even two rak'ahs before witr; faith in the Last Day that shapes spending; a word of good counsel offered gently; and the habit of hastening, paying the debt today and visiting the sick person this evening rather than someday. And 3:115 answers the quiet discouragement of unnoticed good: it is not covered over. Allah knows it.",
            "bn": "দ্বিতীয় পরিবর্তন হলো আয়নার মতো। এখানে যে গুণগুলোর প্রশংসা, সেগুলো যেকোনো মুমিনের জন্য একটা তালিকা। রাতের কিছু সময় নামাজে তেলাওয়াতে দেওয়া, বিতরের আগে দুই রাকাত হলেও। শেষ দিনের ওপর এমন ঈমান, যা খরচের ধরন ঠিক করে দেয়। নরমভাবে একটা ভালো পরামর্শ দেওয়া। আর ছুটে যাওয়ার অভ্যাস: ঋণটা আজই শোধ করা, অসুস্থ মানুষটিকে কোনো একদিন নয়, আজ সন্ধ্যাতেই দেখতে যাওয়া। আর কেউ টের পায় না বলে ভালো কাজে যে নীরব হতাশা আসে, ৩:১১৫ আয়াত তার জবাব দেয়: কাজটা ঢেকে রাখা হবে না। আল্লাহ তা জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Among the Righteous",
          "bn": "সৎকর্মশীলদের দলে"
        },
        "p": [
          {
            "en": "The passage ends its praise with ula'ika min as-salihin, those are among the righteous, and the Quran records prophets asking for exactly that company. Yusuf (AS) closes his prayer in 12:101 with cause me to die a Muslim and join me with the righteous, and Ibrahim (AS) asks in 26:83, my Lord, grant me authority and join me with the righteous. Both use the same word, as-salihin. A believer can make either prayer his own, in the Quran's own words.",
            "bn": "অংশটি প্রশংসা শেষ করে এই কথায়: উলাইকা মিনাস সালিহীন, তারা সৎকর্মশীলদের অন্তর্ভুক্ত। আর কুরআনে নবীরা ঠিক এই সঙ্গই চেয়েছেন। ১২:১০১ আয়াতে ইউসুফ (আঃ) তাঁর দোয়া শেষ করেন এভাবে: আমাকে মুসলিম অবস্থায় মৃত্যু দাও আর সৎকর্মশীলদের সঙ্গে মিলিয়ে দাও। ২৬:৮৩ আয়াতে ইবরাহীম (আঃ) চান: হে আমার রব, আমাকে প্রজ্ঞা দাও আর সৎকর্মশীলদের সঙ্গে মিলিয়ে দাও। দুটো দোয়াতেই একই শব্দ, আস সালিহীন। একজন মুমিন কুরআনের নিজের ভাষায় যেকোনোটি নিজের দোয়া বানিয়ে নিতে পারেন।"
          },
          {
            "en": "What follows is a supplication composed from the vocabulary of these three verses, not a transmitted du'a: O Allah, make me upright upon Your command. Let me recite Your verses in the hours of the night and prostrate to You. Make me quick to do good, count me among the righteous, and do not let any good I do be lost with You. It holds five requests, and each is a phrase of the passage turned into a request.",
            "bn": "নিচের দোয়াটি এই তিন আয়াতের শব্দ দিয়ে সাজানো, হাদিসে বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আমাকে তোমার হুকুমের ওপর সোজা রাখো। রাতের প্রহরে আমাকে তোমার আয়াত তেলাওয়াত করতে আর তোমাকে সিজদা করতে দাও। ভালো কাজে আমাকে তৎপর করো, আমাকে সৎকর্মশীলদের মধ্যে গণ্য করো, আর আমার কোনো ভালো কাজ তোমার কাছে হারিয়ে যেতে দিয়ো না। এতে পাঁচটি চাওয়া আছে, আর প্রতিটি এই অংশেরই কোনো কথাকে দোয়ায় রূপ দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Where My Own Nights Go",
          "bn": "আমার রাতগুলো কোথায় যায়"
        },
        "p": [
          {
            "en": "When I speak about people of another faith, would a listener hear the Quran's fairness in my words, or a verdict the Quran itself refused to give? If someone described my nights honestly, would recitation and prostration be anywhere in the description? Which good deed have I been postponing for weeks, telling myself I will get to it, when the praised are those who hasten?",
            "bn": "অন্য ধর্মের মানুষ নিয়ে যখন কথা বলি, শ্রোতা কি আমার কথায় কুরআনের ইনসাফ শুনতে পায়, নাকি এমন রায়, যা কুরআন নিজেই দেয়নি? কেউ যদি সৎভাবে আমার রাতগুলোর বর্ণনা দেয়, সেখানে কি তেলাওয়াত আর সিজদার কোনো জায়গা থাকবে? কোন ভালো কাজটা আমি সপ্তাহের পর সপ্তাহ পিছিয়ে রেখেছি, নিজেকে বলছি পরে করব, অথচ প্রশংসা তো তাদের যারা ছুটে যায়?"
          },
          {
            "en": "When a good deed of mine goes unseen and unthanked, do I feel it was wasted, or do I remember that it will never be denied? And when I judge people, including fellow Muslims, do I look at their faith and their deeds, or only at the group they belong to? Would I want to be judged the way I judge them?",
            "bn": "আমার কোনো ভালো কাজ যখন কারও চোখে পড়ে না, কেউ ধন্যবাদও দেয় না, তখন কি মনে হয় কাজটা বৃথা গেল? নাকি মনে পড়ে, তা কখনো অস্বীকার করা হবে না? আর মানুষকে বিচার করার সময়, মুসলিম ভাইবোনদেরও, আমি কি তাদের ঈমান আর আমল দেখি, নাকি শুধু দেখি তারা কোন দলের লোক? আমি যেভাবে তাদের বিচার করি, কেউ আমাকে সেভাবে বিচার করুক, তা কি আমি চাইব?"
          }
        ]
      }
    ]
  },
  "3:116-117": {
    "sections": [
      {
        "h": {
          "en": "After the Upright, the Other Side",
          "bn": "সৎ দলের পরে অন্য পক্ষ"
        },
        "p": [
          {
            "en": "These two verses follow directly on 3:113-115, which praised an upright community among the People of the Scripture and promised that none of its good would be denied. 3:116 turns to the other side of that promise: inna alladhina kafaru, indeed those who disbelieve. Its opening is almost word for word the opening of 3:10, near the start of the surah. There the verse ends that they are fuel for the Fire; here it ends that they are companions of the Fire, abiding in it forever. The surah states the principle early and returns to it.",
            "bn": "এই দুই আয়াত আসে ঠিক ৩:১১৩-১১৫ আয়াতের পরে। সেখানে আহলে কিতাবের একটি সৎ দলের প্রশংসা করা হয়েছে, আর কথা দেওয়া হয়েছে তাদের কোনো ভালো কাজ অস্বীকার করা হবে না। ৩:১১৬ আয়াত সেই প্রতিশ্রুতির উল্টো দিকে ফেরে: ইন্নাল্লাযীনা কাফারূ, নিশ্চয়ই যারা কুফরি করে। এর শুরুটা প্রায় হুবহু সূরার শুরুর দিকের ৩:১০ আয়াতের শুরুর মতো। সেখানে আয়াত শেষ হয় এই কথায় যে তারা আগুনের ইন্ধন। এখানে শেষ হয় এই কথায় যে তারা আগুনের বাসিন্দা, সেখানে চিরকাল থাকবে। সূরা নীতিটা শুরুতেই বলে রাখে, তারপর আবার তার কাছে ফিরে আসে।"
          },
          {
            "en": "No particular occasion of revelation is established for these verses. Ibn Kathir takes those who disbelieve here to be the idolaters, and the passage sits just before the long account of Uhud that begins at 3:121. Ibn Kathir's own account of that battle records that the Quraysh spent the profit of the caravan that had escaped at Badr on raising the army. That is not the occasion of this verse, but it is a clear picture of what it describes: wealth poured out in this worldly life, against the truth, and lost.",
            "bn": "এই আয়াতগুলোর নাজিলের কোনো নির্দিষ্ট প্রেক্ষাপট প্রমাণিত নয়। ইবনে কাসীর এখানে কাফির বলতে মুশরিকদের বুঝেছেন। অংশটি রয়েছে উহুদের দীর্ঘ বিবরণের ঠিক আগে, যা শুরু হয় ৩:১২১ আয়াতে। সেই যুদ্ধের বিবরণে ইবনে কাসীর নিজেই উল্লেখ করেছেন, বদরের সময় যে কাফেলা বেঁচে গিয়েছিল, তার লাভের টাকা কুরাইশরা খরচ করেছিল বাহিনী গড়তে। এটি এই আয়াতের নাজিলের প্রেক্ষাপট নয়। তবে আয়াত যা বর্ণনা করে, এটি তার স্পষ্ট ছবি: দুনিয়ার জীবনে সত্যের বিরুদ্ধে ঢেলে দেওয়া সম্পদ, যা শেষে হারিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wind That Carries Frost",
          "bn": "হিম বয়ে আনা বাতাস"
        },
        "p": [
          {
            "en": "Lan tughniya 'anhum: lan is the strongest negation of the future, never, and aghna is to suffice someone, to make him free of need. Their wealth and children will never make them free of need min Allah, before Allah, and shay'an, indefinite, closes the verse's first clause: not in the smallest thing. Wealth and children are named together because they are what a person counts on when he pictures his security, the money that protects him and the family that stands behind him.",
            "bn": "লান তুগনিয়া আনহুম। লান ভবিষ্যৎকে সবচেয়ে জোরালোভাবে নাকচ করে: কখনোই না। আর আগনা মানে কারও জন্য যথেষ্ট হওয়া, তাকে অভাবমুক্ত করা। আল্লাহর সামনে তাদের ধনসম্পদ আর সন্তান কখনো তাদের অভাব মেটাবে না। প্রথম বাক্যাংশের শেষ শব্দ শাইআন, অনির্দিষ্ট: সামান্যতম কিছুতেও না। ধনসম্পদ আর সন্তানের নাম একসঙ্গে এসেছে, কারণ মানুষ নিজের নিরাপত্তার ছবি আঁকে এই দুটো দিয়ে: যে টাকা তাকে রক্ষা করে, আর যে পরিবার তার পেছনে দাঁড়ায়।"
          },
          {
            "en": "Then the parable: mathalu ma yunfiquna fi hadhihi al-hayati ad-dunya ka-mathali rihin fiha sirr, the example of what they spend in this worldly life is like a wind in which there is sirr. Ibn Kathir reports that Ibn Abbas (RA), Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah and others explained sirr as intense cold, and that Ata' said cold and snow. Ibn Abbas and Mujahid are also reported to have said fire. Ibn Kathir reconciles the two: severe cold, above all with snow, burns crops the way fire does.",
            "bn": "তারপর দৃষ্টান্ত: মাসালু মা ইউনফিকূনা ফী হাযিহিল হায়াতিদ দুনইয়া কামাসালি রীহিন ফীহা সির্র, এই দুনিয়ার জীবনে তারা যা খরচ করে তার দৃষ্টান্ত এমন বাতাসের মতো, যাতে আছে সির্র। ইবনে কাসীর উল্লেখ করেন, ইবনে আব্বাস (রাঃ), ইকরিমা, সাঈদ ইবনে জুবাইর, হাসান, কাতাদা এবং আরও অনেকে সির্র-এর ব্যাখ্যা করেছেন তীব্র ঠান্ডা বলে। আতা বলেছেন, ঠান্ডা আর তুষার। ইবনে আব্বাস আর মুজাহিদ থেকে আগুন অর্থও বর্ণিত আছে। ইবনে কাসীর দুটোকে মিলিয়ে দেন: প্রচণ্ড ঠান্ডা, বিশেষ করে তুষারসহ, ফসলকে পুড়িয়ে দেয় ঠিক আগুনের মতো।"
          },
          {
            "en": "Asabat hartha qawmin zalamu anfusahum fa-ahlakatah: it struck the tilled field of a people who wronged themselves and destroyed it. The root z-l-m, wronging, comes three times in this one verse: they wronged themselves, Allah did not wrong them, and they wrong themselves. In the last clause the Arabic places anfusahum, themselves, before its verb, which throws the weight onto it. The injustice in the story is real, and it has a single address.",
            "bn": "আসাবাত হারসা কাওমিন যালামূ আনফুসাহুম ফাআহলাকাতহ: বাতাসটি এমন লোকদের চাষের ক্ষেতে আঘাত হানল, যারা নিজেদের ওপর যুলম করেছিল, আর ক্ষেতটা ধ্বংস করে দিল। যুলমের মূল য-ল-ম এই এক আয়াতেই তিনবার এসেছে: তারা নিজেদের ওপর যুলম করেছিল, আল্লাহ তাদের ওপর যুলম করেননি, আর তারা নিজেরাই নিজেদের ওপর যুলম করে। শেষ বাক্যাংশে আরবি আনফুসাহুম, নিজেদের, শব্দটিকে ক্রিয়ার আগে বসিয়েছে, তাতে জোর পড়ে ওই শব্দেই। গল্পে যুলম সত্যিই আছে, কিন্তু তার ঠিকানা একটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Frost Destroys",
          "bn": "হিম কী ধ্বংস করে"
        },
        "p": [
          {
            "en": "Ibn Kathir, citing Mujahid, al-Hasan and as-Suddi, reads the parable as being about what the disbelievers spend in this life. The calamity strikes a crop ready for harvest and takes it from its owner exactly when he needs it most. So too, he says, Allah removes the reward of the disbelievers' good deeds, just as the harvest of the wrongdoers was destroyed for their sins, since neither was built on a firm foundation. Al-Muyassar describes the spending as what they give in ways of good, hoping for its reward, and finding none in the Hereafter.",
            "bn": "ইবনে কাসীর মুজাহিদ, হাসান আর সুদ্দির উদ্ধৃতি দিয়ে দৃষ্টান্তটিকে পড়েন দুনিয়ার জীবনে কাফিরদের খরচ নিয়ে। বিপদটা আঘাত হানে কাটার জন্য তৈরি ফসলে, আর মালিকের কাছ থেকে তা কেড়ে নেয় ঠিক যখন তার সবচেয়ে বেশি দরকার। তিনি বলেন, একইভাবে আল্লাহ কাফিরদের ভালো কাজের প্রতিদান মুছে দেন, যেমন যালিমদের ফসল তাদের গুনাহের কারণে ধ্বংস হয়েছিল। কারণ দুটোর কোনোটাই মজবুত ভিত্তির ওপর গড়া ছিল না। তাফসীরে মুয়াসসার খরচটার বর্ণনা দেয় ভালো খাতে তাদের দান হিসেবে, যার প্রতিদান তারা আশা করত, অথচ আখিরাতে কিছুই পাবে না।"
          },
          {
            "en": "The Quran itself names a further kind of spending that meets the same end. 8:36 says that those who disbelieve spend their wealth to avert people from the way of Allah; they will spend it, then it will become a regret for them, then they will be overcome. Al-Muyassar's reading speaks of giving in ways of good, and 8:36 of spending against the truth, but both describe wealth that reaches the Day with nothing to show.",
            "bn": "একই পরিণতির আরেক রকম খরচের কথা কুরআন নিজেই বলেছে। ৮:৩৬ আয়াত বলে, যারা কুফরি করে তারা আল্লাহর পথ থেকে মানুষকে ফেরাতে সম্পদ খরচ করে। তারা খরচ করতেই থাকবে, তারপর তা তাদের আফসোসের কারণ হবে, তারপর তারা পরাজিত হবে। তাফসীরে মুয়াসসারের ব্যাখ্যা ভালো খাতে দান নিয়ে, আর ৮:৩৬ আয়াতের কথা সত্যের বিরুদ্ধে খরচ নিয়ে। কিন্তু দুটোই এমন সম্পদের কথা বলে, যা সেই দিনে পৌঁছে দেখানোর মতো কিছুই রাখে না।"
          },
          {
            "en": "The verse ends by closing off any complaint: wa ma zalamahumu Allah, Allah did not wrong them. Nine verses earlier 3:108 said that Allah wants no injustice for anyone, and the parable does not break that promise. The frost did not fall on a field that deserved better. It fell on a harvest planted without faith, and the loss was the fruit of what its owners had chosen.",
            "bn": "আয়াত শেষ হয় সব অভিযোগের পথ বন্ধ করে দিয়ে: ওয়া মা যালামাহুমুল্লাহ, আল্লাহ তাদের ওপর যুলম করেননি। নয় আয়াত আগে ৩:১০৮ আয়াত বলেছে, আল্লাহ কারও প্রতি যুলম চান না। দৃষ্টান্তটি সেই কথা ভাঙে না। হিমটা এমন ক্ষেতে পড়েনি, যার আরও ভালো কিছু প্রাপ্য ছিল। পড়েছে ঈমান ছাড়া বোনা ফসলে, আর ক্ষতিটা তার মালিকদের নিজেদের বেছে নেওয়া পথেরই ফল।"
          }
        ]
      },
      {
        "h": {
          "en": "Feeding the Poor Without Faith",
          "bn": "ঈমান ছাড়া গরিবকে খাওয়ানো"
        },
        "p": [
          {
            "en": "Sahih Muslim records from A'ishah (RA) that she asked the Prophet ﷺ about Ibn Jud'an, who in the days of ignorance used to keep the ties of kinship and feed the poor: would that benefit him? He answered that it would not benefit him, because he never once said, my Lord, forgive me my sins on the Day of Recompense. Ibn Kathir brings this narration under 3:91, whose theme is the same: the good of one who dies in disbelief is not accepted from him.",
            "bn": "সহিহ মুসলিমে আয়েশা (রাঃ) বর্ণনা করেছেন, তিনি নবী ﷺ-কে ইবনে জুদআন সম্পর্কে জিজ্ঞেস করেছিলেন। জাহিলি যুগে সে আত্মীয়তার সম্পর্ক রক্ষা করত আর গরিবদের খাওয়াত। এসব কি তার কোনো কাজে আসবে? নবী ﷺ জবাব দিলেন, তার কোনো কাজে আসবে না, কারণ সে কখনো একদিনও বলেনি, হে আমার রব, প্রতিদান দিবসে আমার গুনাহ মাফ করে দিয়ো। ইবনে কাসীর এই বর্ণনাটি এনেছেন ৩:৯১ আয়াতের আলোচনায়, যার বিষয়ও একই: কুফরি অবস্থায় যে মারা যায়, তার ভালো কাজ তার কাছ থেকে কবুল করা হয় না।"
          },
          {
            "en": "The hadith does not say the feeding was worthless in itself. It says what was missing: a single turning to Allah in hope of forgiveness, the faith that would have given the good somewhere to go. And the door was open. Sahih al-Bukhari records that Hakim ibn Hizam (RA) asked about the charity and kindness to kin he had done before Islam, and the Prophet ﷺ told him that he had embraced Islam along with all the good he had done before. Good deeds done before faith are kept when faith comes.",
            "bn": "হাদিসটি বলে না যে খাওয়ানোটা নিজে মূল্যহীন ছিল। হাদিস বলে কী ছিল না: মাফের আশায় একবারও আল্লাহর দিকে ফেরা, সেই ঈমান, যা ভালো কাজটাকে কোথাও পৌঁছে দিত। অথচ দরজা খোলা ছিল। সহিহ বুখারিতে আছে, হাকীম ইবনে হিযাম (রাঃ) জানতে চেয়েছিলেন ইসলামের আগে তিনি যে দান আর আত্মীয়দের প্রতি সদাচরণ করেছিলেন, তার কী হবে। নবী ﷺ তাঁকে বললেন, আগে যত ভালো কাজ করেছেন, সেগুলো সঙ্গে নিয়েই আপনি ইসলাম গ্রহণ করেছেন। ঈমান এলে ঈমানের আগের ভালো কাজও রক্ষা পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ashes, Mirage and a Burnt Garden",
          "bn": "ছাই, মরীচিকা আর পুড়ে যাওয়া বাগান"
        },
        "p": [
          {
            "en": "The Quran gives the deeds of disbelief several images, each adding a shade. 14:18 compares them to ashes the wind blows hard on a stormy day, so that they can keep nothing of what they earned. 24:39 calls them a mirage in a lowland: the thirsty man thinks it is water until he reaches it and finds nothing, and finds Allah before him, who pays him his account in full. 2:264 describes the spender who gives to be seen and does not believe in Allah and the Last Day as dust on a smooth rock that a downpour washes bare.",
            "bn": "কুফরির আমলের জন্য কুরআন কয়েকটি ছবি দিয়েছে, প্রতিটি নতুন একটা দিক যোগ করে। ১৪:১৮ আয়াত সেগুলোকে তুলনা করে ঝড়ের দিনে বাতাসে প্রবল বেগে উড়ে যাওয়া ছাইয়ের সঙ্গে, ফলে নিজেদের উপার্জনের কিছুই তারা ধরে রাখতে পারে না। ২৪:৩৯ আয়াত সেগুলোকে বলে মরুভূমির মরীচিকা: পিপাসার্ত মানুষ ভাবে পানি, কাছে গিয়ে দেখে কিছুই নেই, আর সেখানে পায় আল্লাহকে, যিনি তার হিসাব পুরোপুরি চুকিয়ে দেন। ২:২৬৪ আয়াত লোক দেখানোর জন্য দান করা, আল্লাহ ও শেষ দিনে ঈমান না রাখা লোককে তুলনা করে মসৃণ পাথরের ওপরের মাটির সঙ্গে, যা প্রবল বৃষ্টি ধুয়ে সাফ করে দেয়।"
          },
          {
            "en": "2:265-266 set the two harvests side by side. Spending that seeks the approval of Allah is a garden on high ground that yields double, and even a drizzle is enough for it; while the man in 2:266 loses his garden to a whirlwind with fire in it, in his old age and with weak children. And 26:88-89 names the only thing that avails on the Day when wealth and children do not: coming to Allah with a sound heart.",
            "bn": "২:২৬৫-২৬৬ আয়াত দুই রকম ফসল পাশাপাশি রাখে। আল্লাহর সন্তুষ্টি চেয়ে করা খরচ উঁচু জমির বাগানের মতো, যা দ্বিগুণ ফল দেয়, আর প্রবল বৃষ্টি না হলে হালকা বৃষ্টিই তার জন্য যথেষ্ট। আর ২:২৬৬ আয়াতের লোকটি নিজের বাগান হারায় আগুনে ভরা ঘূর্ণিবাতাসে, এমন সময় যখন সে বৃদ্ধ আর তার সন্তানেরা দুর্বল। আর ২৬:৮৮-৮৯ আয়াত বলে দেয়, যেদিন ধনসম্পদ আর সন্তান কোনো কাজে আসবে না, সেদিন একটা জিনিসই কাজে আসবে: সুস্থ অন্তর নিয়ে আল্লাহর কাছে আসা।"
          }
        ]
      },
      {
        "h": {
          "en": "Planting on Firm Ground",
          "bn": "মজবুত জমিতে চাষ"
        },
        "p": [
          {
            "en": "A believer reads this warning about disbelievers and still finds a mirror in it. The frost struck spending that had no faith behind it, so the question for a believer is what stands behind his own. Before giving, pause for a moment and name the intention: this is for Allah. Give some charity where no one will know, so that at least part of your harvest was never planted for praise. Review your regular giving once a year and ask which of it you would still do if nobody ever thanked you.",
            "bn": "কাফিরদের নিয়ে এই সতর্কবাণী পড়েও একজন মুমিন এতে নিজের আয়না খুঁজে পান। হিম আঘাত করেছিল এমন খরচে, যার পেছনে ঈমান ছিল না। তাই মুমিনের প্রশ্ন হলো, তার নিজের খরচের পেছনে কী দাঁড়িয়ে আছে। দান করার আগে এক মুহূর্ত থেমে নিয়তটা মনে মনে বলুন: এটা আল্লাহর জন্য। কিছু দান এমন জায়গায় করুন, যেখানে কেউ জানবে না, যাতে আপনার ফসলের অন্তত একটা অংশ কখনো প্রশংসার জন্য বোনা না হয়। বছরে একবার নিয়মিত দানগুলোর হিসাব নিন, আর জিজ্ঞেস করুন, কেউ কখনো ধন্যবাদ না দিলেও এর কোনগুলো আমি করতাম।"
          },
          {
            "en": "The verse also loosens the grip of the two great securities. Save, provide for your family, and raise your children well, but do not let a bank balance or a strong family stand in your mind where reliance on Allah should be. When a loss comes, begin where 3:117 ends: before blaming others, ask honestly whether you wronged yourself somewhere, and repent of it. That question is not despair. It is the first step back to firm ground.",
            "bn": "আয়াতটি নিরাপত্তার বড় দুই ভরসার ওপর আমাদের মুঠোও আলগা করে দেয়। সঞ্চয় করুন, পরিবারের খরচ জোগান, সন্তানদের ভালোভাবে মানুষ করুন। কিন্তু ব্যাংকের হিসাব বা শক্তপোক্ত পরিবারকে মনের সেই জায়গায় বসতে দেবেন না, যেখানে থাকার কথা আল্লাহর ওপর ভরসার। ক্ষতি এলে শুরু করুন সেখান থেকে, যেখানে ৩:১১৭ আয়াত শেষ হয়েছে। অন্যকে দোষ দেওয়ার আগে সৎভাবে জিজ্ঞেস করুন, কোথাও নিজের ওপর যুলম করেছি কি না, আর তার জন্য তওবা করুন। এই প্রশ্ন হতাশা নয়। এটি মজবুত জমিতে ফেরার প্রথম ধাপ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer of Ibrahim",
          "bn": "ইবরাহীম (আঃ)-এর দোয়া"
        },
        "p": [
          {
            "en": "The Quran's own prayer for this theme belongs to Ibrahim (AS). In 26:87-89 he asks: do not disgrace me on the Day they are resurrected, the Day when neither wealth nor children will benefit, except the one who comes to Allah with a sound heart. It takes the very two things 3:116 says will not avail, and asks for the one thing that will. A believer can recite it as it stands, in the Quran's words.",
            "bn": "এই বিষয়ে কুরআনের নিজস্ব দোয়াটি ইবরাহীম (আঃ)-এর। ২৬:৮৭-৮৯ আয়াতে তিনি চান: পুনরুত্থানের দিন আমাকে অপমানিত করো না, সেই দিন, যেদিন ধনসম্পদ আর সন্তান কোনো কাজে আসবে না, কেবল সে ছাড়া যে সুস্থ অন্তর নিয়ে আল্লাহর কাছে আসবে। ৩:১১৬ আয়াত যে দুটো জিনিসকে অকেজো বলেছে, দোয়াটি ঠিক সেই দুটোর কথাই বলে, আর চায় সেই একটি জিনিস, যা কাজে আসবে। একজন মুমিন কুরআনের ভাষাতেই দোয়াটি পড়তে পারেন।"
          },
          {
            "en": "What follows is a short supplication composed in the vocabulary of 3:116-117, not a transmitted du'a: O Allah, let nothing I own or love stand between me and You. Accept what I spend for Your sake, protect my harvest from the frost, and do not let me wrong myself. It holds four requests, and each answers a phrase of the two verses.",
            "bn": "নিচের দোয়াটি ৩:১১৬-১১৭ আয়াতের শব্দ দিয়ে সাজানো ছোট একটি দোয়া, হাদিসে বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আমার মালিকানার বা ভালোবাসার কোনো কিছুকে আমার আর তোমার মাঝখানে দাঁড়াতে দিয়ো না। তোমার জন্য যা খরচ করি তা কবুল করো, আমার ফসলকে হিমের হাত থেকে রক্ষা করো, আর আমাকে নিজের ওপর যুলম করতে দিয়ো না। এতে চারটি চাওয়া আছে, প্রতিটি এই দুই আয়াতের কোনো না কোনো কথার জবাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting What Will Last",
          "bn": "যা টিকবে তার হিসাব"
        },
        "p": [
          {
            "en": "If everything I own and everyone who stands behind me were taken out of the picture, what would I still be relying on? Of all I spent last month, how much had any intention for Allah behind it, and how much was habit, image or simple convenience? Is there a good deed I do mainly because people expect it of me, and could I renew my intention in it today?",
            "bn": "আমার সব সম্পদ আর আমার পেছনে দাঁড়ানো সব মানুষকে যদি ছবি থেকে সরিয়ে দেওয়া হয়, তখনো আমি কিসের ওপর ভরসা করব? গত মাসে যা খরচ করেছি, তার কতটার পেছনে আল্লাহর জন্য কোনো নিয়ত ছিল, আর কতটা ছিল অভ্যাস, ভাবমূর্তি বা শুধু সুবিধা? এমন কোনো ভালো কাজ কি আছে যা মূলত করি মানুষ আশা করে বলে? আজই কি সেই কাজে নিয়তটা নতুন করে নিতে পারি?"
          },
          {
            "en": "When something I built fails, do I say that life has wronged me, or do I look for where I wronged myself? Which of my gifts this year would still stand if that frost came tomorrow? And if my heart were weighed tomorrow, stripped of every possession and every relationship, would it be the sound heart that alone benefits on that Day?",
            "bn": "আমার গড়া কিছু যখন ভেঙে পড়ে, আমি কি বলি জীবন আমার ওপর অবিচার করেছে, নাকি খুঁজি কোথায় নিজের ওপর যুলম করেছি? এ বছর যা দান করেছি, তার কোনগুলো কাল সেই হিম নেমে এলেও টিকে থাকবে? আর কাল যদি আমার অন্তরকে মাপা হয়, সব সম্পদ আর সব সম্পর্ক ছাড়িয়ে, তাহলে কি তা হবে সেই সুস্থ অন্তর, যা সেদিন একমাত্র কাজে আসবে?"
          }
        ]
      }
    ]
  },
  "3:133-134": {
    "sections": [
      {
        "h": {
          "en": "A Race, Not a Stroll",
          "bn": "দৌড়, পায়চারি নয়"
        },
        "p": [
          {
            "en": "Sari'u — race, hurry. The verse does not invite a leisurely drift toward forgiveness and Paradise; it commands the pace of people who fear missing something. And the order of the two prizes is exact: forgiveness first, then a Garden as wide as the heavens and the earth. The commentators note that maghfirah precedes Jannah because the soul must be cleared before it is honored — no one enters the Garden dragging unforgiven wrongs.",
            "bn": "সারিঊ — দৌড়াও, তাড়াতাড়ি করো। আয়াতটি ক্ষমা ও জান্নাতের দিকে আয়েশি হাঁটার আমন্ত্রণ নয়; এটি আদেশ করে সেই গতির, যা কিছু হারিয়ে ফেলার ভয়ে থাকা মানুষের। আর পুরস্কার দুটির ক্রম একেবারে মাপা: আগে ক্ষমা, তারপর আসমান ও যমীনের মতো প্রশস্ত এক জান্নাত। মুফাসসিরগণ লক্ষ করেন, মাগফিরাত জান্নাতের আগে এসেছে, কারণ সম্মানিত হওয়ার আগে আত্মাকে পরিচ্ছন্ন হতে হয় — ক্ষমা-না-পাওয়া অন্যায় টেনে নিয়ে কেউ জান্নাতে ঢোকে না।"
          },
          {
            "en": "The width like the heavens and the earth — stated again in 57:21 — is given so that no one fears the Garden filling up before he arrives. A race for limited seats breeds rivalry; this race has room for every runner, so the only competitor is one's own delay. The verse was revealed in the passage surrounding Uhud, to a community that had just learned how suddenly life can end and how urgent deeds therefore are.",
            "bn": "আসমান ও যমীনের মতো প্রশস্ততা — যা 57:21 আয়াতেও এসেছে — বলা হয়েছে এই জন্য, যেন কেউ ভয় না পায় যে পৌঁছানোর আগেই জান্নাত ভরে যাবে। সীমিত আসনের দৌড় রেষারেষি জন্মায়; এই দৌড়ে প্রতিটি দৌড়বিদের জায়গা আছে, তাই একমাত্র প্রতিদ্বন্দ্বী নিজের দেরি। আয়াতটি নাযিল হয়েছে উহুদ-সংলগ্ন অনুচ্ছেদে — এমন এক সম্প্রদায়ের কাছে, যারা সবেমাত্র শিখেছে জীবন কত হঠাৎ শেষ হতে পারে, আর আমল তাই কতটা জরুরি।"
          }
        ]
      },
      {
        "h": {
          "en": "Spending in Ease and Hardship",
          "bn": "সচ্ছলতা ও অনটনে ব্যয়"
        },
        "p": [
          {
            "en": "Then the verse describes whom the Garden was prepared for, and the first mark of the muttaqin is financial: those who spend in sarra and darra, in ease and in hardship. Giving from surplus is generosity; giving from shortage is trust. The pairing removes the most common exemption people grant themselves — I will give when things improve — by making hard times part of the definition, not an excused absence from it.",
            "bn": "এরপর আয়াতটি বর্ণনা করে জান্নাত কাদের জন্য প্রস্তুত, আর মুত্তাকীদের প্রথম চিহ্নটি আর্থিক: যারা ব্যয় করে 'সাররা' ও 'দাররা'-য় — সচ্ছলতায় ও অনটনে। উদ্বৃত্ত থেকে দেওয়া দানশীলতা; ঘাটতি থেকে দেওয়া ভরসা। এই জোড়টি মানুষ নিজেকে যে ছাড়টি সবচেয়ে বেশি দেয় — অবস্থা ভালো হলে দেব — সেটিই তুলে নেয়; কঠিন সময়কে সংজ্ঞার অংশ বানিয়ে, সংজ্ঞা থেকে মাফ-পাওয়া অনুপস্থিতি নয়।"
          },
          {
            "en": "Placing charity first in a list about self-mastery is itself instructive. Money is where intention meets measurable cost, so it serves as the entry-level test of sincerity: easier to monitor than anger, harder to fake than words. The one who passes it in both weathers has trained the reflex the rest of the verse requires — releasing what the self wants to hold.",
            "bn": "আত্মসংযমের তালিকায় দানকে প্রথমে রাখাটাই শিক্ষণীয়। টাকা-পয়সাই সেই জায়গা যেখানে নিয়ত মাপা যায় এমন মূল্যের মুখোমুখি হয়; তাই এটি ইখলাসের প্রাথমিক পরীক্ষা: রাগের চেয়ে নজর রাখা সহজ, কথার চেয়ে জাল করা কঠিন। যে দুই আবহাওয়াতেই এতে উত্তীর্ণ, সে আয়াতের বাকি অংশের দরকারি প্রতিবর্তটাই রপ্ত করে ফেলেছে — নফস যা ধরে রাখতে চায় তা ছেড়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Swallowing the Rage",
          "bn": "ক্রোধ গিলে ফেলা"
        },
        "p": [
          {
            "en": "Wal-kazimina al-ghayz — and those who swallow their rage. Kazm is the word for tying shut a waterskin filled to the brim; the image is of anger fully present, pressing against its container, and deliberately held. The verse does not praise people who feel nothing. It praises people who feel the heat and choose not to pour it out — a decision made in the exact seconds when pouring it out would feel most justified.",
            "bn": "ওয়াল-কাযিমীনাল গায়য — আর যারা নিজেদের ক্রোধ গিলে ফেলে। 'কাযম' শব্দটি ব্যবহৃত হয় কানায় কানায় ভরা মশকের মুখ বেঁধে ফেলার অর্থে; চিত্রটি এমন ক্রোধের, যা পুরোপুরি উপস্থিত, পাত্রের গায়ে চাপ দিচ্ছে, তবু সজ্ঞানে ধরে রাখা। আয়াতটি তাদের প্রশংসা করে না যারা কিছুই অনুভব করে না। প্রশংসা করে তাদের, যারা উত্তাপ টের পায় তবু ঢেলে না দেওয়া বেছে নেয় — ঠিক সেই সেকেন্ডগুলোতে নেওয়া সিদ্ধান্ত, যখন ঢেলে দেওয়াটাই সবচেয়ে ন্যায্য মনে হয়।"
          },
          {
            "en": "The Prophet ﷺ defined strength by this verse's standard: the strong man is not the one who overcomes others in wrestling, but the one who controls himself at the moment of anger — agreed upon in al-Bukhari and Muslim. And in the sunan collections he ﷺ promised that whoever restrains rage while able to act on it will be called before creation on the Day of Judgment and given his choice of reward. The ability to strike is part of the virtue; helplessness is not kazm.",
            "bn": "নবী ﷺ শক্তির সংজ্ঞা দিয়েছেন এই আয়াতের মানদণ্ডেই: বলবান সে নয় যে কুস্তিতে অন্যদের হারায়, বরং সে-ই, যে রাগের মুহূর্তে নিজেকে সামলায় — বুখারী ও মুসলিমে ঐকমত্যে বর্ণিত। আর সুনান সংকলনগুলোতে তিনি ﷺ প্রতিশ্রুতি দিয়েছেন: যে ব্যক্তি প্রয়োগের ক্ষমতা থাকা সত্ত্বেও ক্রোধ সংবরণ করে, কিয়ামতের দিন তাকে সৃষ্টিকুলের সামনে ডেকে তার পুরস্কার বেছে নিতে দেওয়া হবে। আঘাত করার সামর্থ্যটাই গুণটির অংশ; অসহায়ত্ব 'কাযম' নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon, Then Excellence",
          "bn": "ক্ষমা, তারপর ইহসান"
        },
        "p": [
          {
            "en": "The sequence climbs. Swallowing rage is internal — the wrong is absorbed but perhaps not forgotten. The next rung, wal-afina an-nas, pardoning people, releases the claim itself: the account is closed, nothing is held for later. Then the verse seals with a higher rung still: and Allah loves the muhsinin, those who do excellence — who go beyond closing the account to answering the wrong with good, the practice 41:34 commands when it says repel with that which is better.",
            "bn": "ধারাক্রমটি ওপরে ওঠে। ক্রোধ গিলে ফেলা অভ্যন্তরীণ ব্যাপার — অন্যায়টা হজম হলো, কিন্তু হয়তো ভোলা হলো না। পরের ধাপ, 'ওয়াল-আফীনা আনিন-নাস' — মানুষকে ক্ষমাকারীরা — দাবিটাই ছেড়ে দেয়: হিসাব বন্ধ, পরের জন্য কিছুই জমা নেই। তারপর আয়াতটি শেষ হয় আরও উঁচু এক ধাপে: আর আল্লাহ মুহসিনদের ভালোবাসেন — যারা হিসাব বন্ধ করেই থামে না, বরং অন্যায়ের জবাব দেয় কল্যাণ দিয়ে; সেই অনুশীলন, যার আদেশ 41:34 দেয় — প্রতিহত করো তা দিয়ে যা উত্তম।"
          },
          {
            "en": "Read as a ladder, the verse is merciful to beginners. It does not demand warm feelings toward the offender on day one. It asks first for a shut mouth, then for a released claim, then — for those who can — for active good. Each rung is rewarded, and the top rung carries the Quran's highest incentive, stated as a fact rather than a promise: Allah loves the people who live there.",
            "bn": "সিঁড়ি হিসেবে পড়লে আয়াতটি নবিসদের প্রতি দয়ালু। এটি প্রথম দিনেই অপরাধীর প্রতি উষ্ণ অনুভূতি দাবি করে না। এটি চায় প্রথমে বন্ধ মুখ, তারপর ছেড়ে দেওয়া দাবি, তারপর — যারা পারে তাদের জন্য — সক্রিয় কল্যাণ। প্রতিটি ধাপেরই প্রতিদান আছে, আর শীর্ষ ধাপটি বহন করে কুরআনের সর্বোচ্চ প্রণোদনা — প্রতিশ্রুতি হিসেবে নয়, ঘোষিত সত্য হিসেবে: যারা সেখানে বাস করে, আল্লাহ তাদের ভালোবাসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door That Stays Open",
          "bn": "যে দরজা খোলা থাকে"
        },
        "p": [
          {
            "en": "The portrait continues into 3:135: the same muttaqin, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness for their sins — and who forgives sins except Allah — and do not knowingly persist. The people of the Garden are not sinless; they are quick to return. The passage thus protects its own readers from despair: falling does not disqualify a racer, but lying where one fell does.",
            "bn": "চিত্রটি 3:135 পর্যন্ত গড়ায়: সেই মুত্তাকীরাই, যখন কোনো অশ্লীল কাজ করে ফেলে বা নিজেদের ওপর জুলুম করে, আল্লাহকে স্মরণ করে ও নিজেদের গুনাহের জন্য ক্ষমা চায় — আর আল্লাহ ছাড়া কে গুনাহ ক্ষমা করে — এবং জেনেশুনে তাতে লেগে থাকে না। জান্নাতের মানুষরা নিষ্পাপ নয়; তারা দ্রুত ফিরে আসে। অনুচ্ছেদটি এভাবে তার পাঠকদের হতাশা থেকেও বাঁচায়: পড়ে যাওয়া দৌড়বিদকে বাতিল করে না — পড়ে থাকাটাই করে।"
          },
          {
            "en": "Living the verses means picking the rung within reach today. Set a small recurring charity that survives tight months. In the next flash of anger, buy ten seconds — the interval kazm actually occupies. Choose one old grievance and close its account. None of these is dramatic, which is exactly the verse's point: the race to a Garden wider than the heavens is run in increments this small.",
            "bn": "আয়াতগুলো যাপন করা মানে আজ নাগালের মধ্যে থাকা ধাপটি বেছে নেওয়া। এমন একটি ছোট নিয়মিত সাদাকা চালু করুন, যা টানাটানির মাসেও টিকে থাকে। পরের বার রাগ ঝলসে উঠলে দশটি সেকেন্ড কিনে নিন — 'কাযম' আসলে ওই ব্যবধানটুকুই দখল করে। একটি পুরোনো ক্ষোভ বেছে নিয়ে তার হিসাব বন্ধ করুন। এগুলোর কোনোটিই নাটকীয় নয় — আর সেটাই আয়াতের মূল কথা: আসমানের চেয়ে প্রশস্ত জান্নাতের দৌড়টি দৌড়ানো হয় এত ছোট ছোট ধাপেই।"
          }
        ]
      }
    ]
  },
  "3:139": {
    "sections": [
      {
        "h": {
          "en": "A Verse Spoken Into Defeat",
          "bn": "পরাজয়ের মুহূর্তে বলা এক আয়াত"
        },
        "p": [
          {
            "en": "Surah Al Imran devotes a long passage to the battle of Uhud, and 3:139 stands inside it as consolation. In the third year after the Hijrah the Muslims suffered a painful reversal: archers left the position the Prophet ﷺ had assigned to them, the tide turned, and beloved companions were killed. Muslim relates from Anas (RA) that on that day the Prophet's ﷺ head was gashed and one of his teeth was broken. The verse speaks directly into that grief.",
            "bn": "সূরা আলে ইমরান উহুদ যুদ্ধ নিয়ে একটি দীর্ঘ অংশ রেখেছে, আর 3:139 আয়াতটি তার ভেতরে সান্ত্বনা হয়ে দাঁড়িয়ে আছে। হিজরতের তৃতীয় বছরে মুসলিমরা এক বেদনাদায়ক বিপর্যয়ের মুখে পড়েন: তীরন্দাজরা নবী ﷺ-এর নির্ধারিত অবস্থান ছেড়ে দেন, মোড় ঘুরে যায়, আর প্রিয় সাহাবিগণ শহীদ হন। মুসলিম আনাস (রাঃ) থেকে বর্ণনা করেন, সেদিন নবী ﷺ-এর মাথা জখম হয় এবং তাঁর একটি দাঁত ভেঙে যায়। আয়াতটি সরাসরি সেই শোকের ভেতরেই কথা বলে।"
          },
          {
            "en": "The verses just before it widen the lens. 3:137 says that ways of life have passed before you, so travel the earth and see what end came to the deniers. 3:140 answers the wound directly: if a wound has touched you, a like wound touched the other people, and such days We rotate among mankind. Defeat, the passage insists, is neither new nor final; it is a turn of the days, and the turning has a purpose.",
            "bn": "ঠিক আগের আয়াতগুলো দৃষ্টিকে প্রশস্ত করে। 3:137 আয়াতে বলা হয়েছে, তোমাদের আগে বহু জীবনধারা গত হয়েছে, তাই পৃথিবীতে ভ্রমণ করো এবং দেখো অস্বীকারকারীদের পরিণাম কী হয়েছিল। 3:140 আয়াত ক্ষতটির সরাসরি জবাব দেয়: তোমাদের যদি আঘাত লেগে থাকে, তবে ওই সম্প্রদায়কেও অনুরূপ আঘাত লেগেছে, আর এই দিনগুলো আমি মানুষের মধ্যে পালাক্রমে ঘুরিয়ে দিই। এই অংশটি জোর দিয়ে বলে, পরাজয় নতুনও নয়, চূড়ান্তও নয়; এটি দিনের পালাবদল, আর সেই পালাবদলের একটি উদ্দেশ্য আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Prohibitions, Two Directions",
          "bn": "দুটি নিষেধ, দুটি দিক"
        },
        "p": [
          {
            "en": "The command itself is two prohibitions: wa la tahinu wa la tahzanu — do not weaken and do not grieve. Both are verbs in the form of prohibition, and each has its own territory. Tahinu comes from wahn, an inner slackness and feebleness; commentators note that weakness attaches to the task still ahead, the resolve that must not sag. Grief, hazan, clings instead to what is already behind — the losses at Uhud that could not be undone.",
            "bn": "নির্দেশটি নিজেই দুটি নিষেধ: ওয়া লা তাহিনু ওয়া লা তাহযানু — দুর্বল হয়ো না এবং দুঃখ করো না। দুটিই নিষেধসূচক ক্রিয়াপদ, আর প্রতিটির নিজস্ব এলাকা আছে। তাহিনু এসেছে ওয়াহন থেকে — ভেতরের শিথিলতা ও অক্ষমতা; মুফাসসিরগণ লক্ষ করেন, দুর্বলতা জড়িয়ে থাকে সামনের কাজের সঙ্গে — সেই সংকল্পের সঙ্গে, যা ঝুলে পড়া চলবে না। আর দুঃখ, হুযন, আঁকড়ে থাকে যা পেছনে চলে গেছে তার সঙ্গে — উহুদের সেই ক্ষতিগুলো, যা আর ফেরানো যায় না।"
          },
          {
            "en": "Read this way, the verse closes both doors through which a setback drains a person: paralysis about the future, and mourning over the past that never ends. It does not deny the pain, and it does not demand that no tear fall. In 9:40 the Prophet ﷺ says to his companion in the cave, do not grieve, indeed Allah is with us. The prohibition is not of feeling sorrow; it is of letting sorrow rule what a believer does next.",
            "bn": "এভাবে পড়লে দেখা যায়, বিপর্যয় যে দুটি দরজা দিয়ে মানুষকে নিঃশেষ করে, আয়াতটি দুটিই বন্ধ করে দেয়: ভবিষ্যৎ নিয়ে অবশ হয়ে যাওয়া, আর অতীত নিয়ে এমন শোক যা কখনো শেষ হয় না। এটি ব্যথাকে অস্বীকার করে না, আর কোনো অশ্রু ঝরবে না — এমন দাবিও করে না। 9:40 আয়াতে নবী ﷺ গুহায় তাঁর সঙ্গীকে বলেন, দুঃখ কোরো না, নিশ্চয়ই আল্লাহ আমাদের সঙ্গে আছেন। নিষেধটি দুঃখ অনুভব করার বিরুদ্ধে নয়; নিষেধ হলো, মুমিনের পরবর্তী পদক্ষেপের ওপর দুঃখকে কর্তৃত্ব করতে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "You Are the Uppermost",
          "bn": "তোমরাই শ্রেষ্ঠ"
        },
        "p": [
          {
            "en": "Then comes the reason: wa antumu al-a'lawna, and you are the uppermost. The word is not a verb promising a future victory; it is a plural adjective in a nominal sentence, a statement of present standing. Even on the evening of a lost battle, the believers are already the higher ones — higher in cause, in direction, and in what awaits them. The verse relocates superiority from the scoreboard of the day to the reality of faith.",
            "bn": "তারপর আসে কারণটি: ওয়া আনতুমুল আ'লাওনা — আর তোমরাই শ্রেষ্ঠ। শব্দটি ভবিষ্যৎ বিজয়ের প্রতিশ্রুতি দেওয়া কোনো ক্রিয়াপদ নয়; এটি নামবাচক বাক্যে বহুবচন বিশেষণ — বর্তমান মর্যাদার ঘোষণা। এমনকি হেরে যাওয়া যুদ্ধের সন্ধ্যায়ও মুমিনরা ইতিমধ্যেই উচ্চতর — উদ্দেশ্যে, অভিমুখে এবং যা তাদের অপেক্ষায় আছে তাতে। আয়াতটি শ্রেষ্ঠত্বকে দিনের ফলাফলের হিসাব থেকে সরিয়ে ঈমানের বাস্তবতায় স্থাপন করে।"
          },
          {
            "en": "The condition seals it: in kuntum mu'minin, if you are believers. As-Sa'di explains that faith itself is the ground of this height, so the sentence is also a quiet summons — secure the condition, and the standing follows. Nearly the same wording returns in 47:35 where the believers are told not to weaken and call for peace while they are the uppermost and Allah is with them. The pairing of weakness and standing is deliberate in both places.",
            "bn": "শর্তটি বিষয়টিকে চূড়ান্ত করে: ইন কুনতুম মুমিনীন — যদি তোমরা মুমিন হও। আস-সা'দী ব্যাখ্যা করেন, ঈমানই এই উচ্চতার ভিত্তি; তাই বাক্যটি একই সঙ্গে এক নীরব আহ্বানও — শর্তটি নিশ্চিত করো, মর্যাদা আপনিই আসবে। প্রায় একই শব্দবিন্যাস ফিরে আসে 47:35 আয়াতে, যেখানে মুমিনদের বলা হয়েছে দুর্বল না হতে এবং সন্ধির আহ্বান না জানাতে, যখন তারাই শ্রেষ্ঠ এবং আল্লাহ তাদের সঙ্গে আছেন। দুর্বলতা ও মর্যাদার এই জুটি দুই জায়গাতেই ইচ্ছাকৃত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Root Elsewhere",
          "bn": "একই মূল শব্দ অন্যত্র"
        },
        "p": [
          {
            "en": "A few verses later, 3:146 praises the many devoted men who fought beside prophets before: they did not weaken — ma wahanu — for what struck them in the path of Allah, nor did they lose strength, nor did they give in. The same root, wahn, frames the whole passage. Weakness, in the Quran's usage here, is not a matter of numbers or equipment; it is a state of heart that surrenders before the body must.",
            "bn": "কয়েক আয়াত পরে 3:146 আয়াত সেই বহু নিবেদিতপ্রাণ মানুষের প্রশংসা করে, যারা আগের নবীদের পাশে থেকে লড়েছিলেন: আল্লাহর পথে তাদের ওপর যা আঘাত হেনেছিল তাতে তারা দুর্বল হননি — মা ওয়াহানু — শক্তিও হারাননি, নতিও স্বীকার করেননি। একই মূল শব্দ, ওয়াহন, পুরো অংশটিকে ঘিরে রেখেছে। কুরআনের এখানকার ব্যবহারে দুর্বলতা সংখ্যা বা সরঞ্জামের বিষয় নয়; এটি হৃদয়ের এমন এক অবস্থা, যা শরীর বাধ্য হওয়ার আগেই আত্মসমর্পণ করে বসে।"
          },
          {
            "en": "A hadith in the collection of Abu Dawud, from Thawban (RA), uses the same word for a later age: nations will invite one another against this ummah as diners are invited to a dish — not because the Muslims will be few, for they will be many, but because wahn will be cast into their hearts. Asked what wahn is, the Prophet ﷺ answered: love of this world and dislike of death. The diagnosis of the verse and of the hadith is one — the decisive weakness is internal.",
            "bn": "আবু দাউদের সংকলনে সাওবান (রাঃ) থেকে বর্ণিত একটি হাদীস পরবর্তী এক যুগের জন্য একই শব্দ ব্যবহার করে: জাতিগুলো এই উম্মাহর বিরুদ্ধে একে অপরকে ডাকবে, যেভাবে খাবারের পাত্রের দিকে ভোজনকারীদের ডাকা হয় — মুসলিমরা সংখ্যায় কম হবে বলে নয়, কারণ তারা অনেক হবে, বরং তাদের হৃদয়ে ওয়াহন ঢেলে দেওয়া হবে বলে। ওয়াহন কী — জিজ্ঞেস করা হলে নবী ﷺ উত্তর দেন: দুনিয়ার ভালোবাসা ও মৃত্যুর প্রতি অনীহা। আয়াত ও হাদীসের রোগনির্ণয় একটিই — নির্ধারক দুর্বলতা ভেতরের।"
          }
        ]
      },
      {
        "h": {
          "en": "A Measure Setbacks Cannot Touch",
          "bn": "যে মাপকাঠি বিপর্যয় ছুঁতে পারে না"
        },
        "p": [
          {
            "en": "Notice where the verse locates worth. If superiority belonged to results, the community at Uhud would have had to call itself inferior that evening, and every believer since would rise and fall with the day's outcome. By binding the height to iman, the verse gives a measure that a failed venture, a lost position, or a hard year cannot touch. What is being graded is fidelity, not fortune, and fidelity remains fully in the believer's hands.",
            "bn": "লক্ষ করুন, আয়াতটি মূল্য কোথায় স্থাপন করে। শ্রেষ্ঠত্ব যদি ফলাফলের অধীন হতো, তবে উহুদের সন্ধ্যায় সেই জামাতকে নিজেদের নিকৃষ্ট বলতে হতো, আর তখন থেকে প্রতিটি মুমিন দিনের ফলাফলের সঙ্গে উঠত আর নামত। উচ্চতাকে ঈমানের সঙ্গে বেঁধে দিয়ে আয়াতটি এমন এক মাপকাঠি দেয়, যা ব্যর্থ উদ্যোগ, হারানো পদ বা কঠিন একটি বছর ছুঁতে পারে না। যা যাচাই হচ্ছে তা বিশ্বস্ততা, ভাগ্য নয় — আর বিশ্বস্ততা পুরোপুরি মুমিনের নিজের হাতে।"
          },
          {
            "en": "In 41:30 the angels descend upon those who said our Lord is Allah and then stood firm: do not fear and do not grieve, and receive the good news of the Garden you were promised. Fear looks forward, grief looks back, and steadfastness is guarded from both. What was said to a bruised army after Uhud is said again, at the end, to every soul that held its course to the finish.",
            "bn": "41:30 আয়াতে ফেরেশতারা তাদের ওপর অবতীর্ণ হন, যারা বলেছিল আমাদের রব আল্লাহ এবং তারপর অবিচল থেকেছে: ভয় কোরো না, দুঃখও কোরো না, আর যে জান্নাতের প্রতিশ্রুতি তোমাদের দেওয়া হয়েছিল তার সুসংবাদ নাও। ভয় সামনের দিকে তাকায়, দুঃখ পেছনের দিকে, আর অবিচলতা দুটো থেকেই সুরক্ষিত। উহুদের পরে আহত এক বাহিনীকে যা বলা হয়েছিল, শেষ প্রান্তে এসে তা-ই আবার বলা হয় প্রতিটি প্রাণকে, যে শেষ পর্যন্ত নিজের পথ ধরে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Verse",
          "bn": "আয়াতটি যেভাবে যাপন করা যায়"
        },
        "p": [
          {
            "en": "Living 3:139 begins with naming the setback honestly, as the surah names Uhud, and then refusing the two responses it forbids. Grief is given its moment; it is not given the steering wheel. Weakness is answered by returning to the assigned post — the very thing whose abandonment caused the wound. For most readers the post is not a hillside with a bow, but a prayer kept on time, a family duty, work done with excellence.",
            "bn": "3:139 আয়াত যাপন শুরু হয় বিপর্যয়টিকে সৎভাবে নাম ধরে চেনা দিয়ে — যেমন সূরাটি উহুদকে চেনায় — তারপর আয়াতটি যে দুটি প্রতিক্রিয়া নিষেধ করে তা প্রত্যাখ্যান করা দিয়ে। দুঃখকে তার মুহূর্তটুকু দেওয়া হয়; কিন্তু চালকের আসন দেওয়া হয় না। দুর্বলতার জবাব হলো নির্ধারিত অবস্থানে ফিরে যাওয়া — যে অবস্থান ছেড়ে দেওয়াই ক্ষতটির কারণ হয়েছিল। অধিকাংশ পাঠকের জন্য সেই অবস্থান ধনুক হাতে কোনো পাহাড়ের ঢাল নয়, বরং সময়মতো রক্ষা করা নামায, পারিবারিক দায়িত্ব, উৎকর্ষের সঙ্গে করা কাজ।"
          },
          {
            "en": "The verse also disciplines how we read our own defeats. 3:140 names divine purposes behind the alternation of days — that Allah may make the believers known and take martyrs from among them — so a setback becomes material to work with, not a verdict to accept. The believer's question after a loss shifts from what is wrong with me to what is being asked of me now. Do not weaken, do not grieve, take the next faithful step; the height is already yours if the faith is.",
            "bn": "আয়াতটি আমাদের নিজেদের পরাজয় পড়ার পদ্ধতিকেও শৃঙ্খলায় আনে। 3:140 আয়াত দিনগুলোর পালাবদলের পেছনে আল্লাহর উদ্দেশ্য উল্লেখ করে — যেন আল্লাহ মুমিনদের প্রকাশ করে দেন এবং তাদের মধ্য থেকে শহীদ গ্রহণ করেন — ফলে বিপর্যয় হয়ে ওঠে কাজে লাগানোর উপকরণ, মেনে নেওয়ার রায় নয়। ক্ষতির পরে মুমিনের প্রশ্ন বদলে যায় — আমার কী দোষ থেকে এখন আমার কাছে কী চাওয়া হচ্ছে-তে। দুর্বল হয়ো না, দুঃখ কোরো না, পরবর্তী বিশ্বস্ত পদক্ষেপটি নাও; ঈমান যদি তোমার হয়, উচ্চতা এখনই তোমার।"
          }
        ]
      }
    ]
  },
  "3:145": {
    "sections": [
      {
        "h": {
          "en": "Inside the Uhud Argument",
          "bn": "উহুদের আলোচনার ভেতরে"
        },
        "p": [
          {
            "en": "A long passage in Surah Aal Imran works through the battle of Uhud and what it exposed in the community. The verse immediately before this one, 3:144, confronts the rumour that had spread on the field that the Prophet ﷺ had been killed: Muhammad is only a messenger, messengers have passed away before him, so would you turn back on your heels? This verse then goes underneath the rumour to the fear that gave it its force, which is the fear of dying.",
            "bn": "সূরা আলে ইমরানের একটি দীর্ঘ অংশ উহুদের যুদ্ধ এবং তা মুসলিম সমাজের ভেতরের যা কিছু প্রকাশ করে দিয়েছিল, তা নিয়ে আলোচনা করে। ঠিক আগের আয়াত 3:144 সেই গুজবের মুখোমুখি হয় যা যুদ্ধক্ষেত্রে ছড়িয়ে পড়েছিল — নবী ﷺ নিহত হয়েছেন: মুহাম্মাদ একজন রাসূল মাত্র, তাঁর আগেও বহু রাসূল গত হয়েছেন, তবে কি তোমরা উল্টো পায়ে ফিরে যাবে? এরপর এই আয়াতটি গুজবের নিচে গিয়ে সেই ভয়ে পৌঁছায় যা গুজবকে শক্তি দিয়েছিল, আর তা হলো মৃত্যুভয়।"
          },
          {
            "en": "Al-Bukhari records how heavily that preceding verse landed years later. When the Prophet ﷺ died, Abu Bakr (RA) came out to the stunned Muslims and recited it to them, and Umar (RA) said that when he heard Abu Bakr recite it his legs would not carry him and he fell to the ground, knowing that the Prophet ﷺ had truly died. The community's steadiness at that moment came from a verse that had been revealed for exactly that moment, years in advance.",
            "bn": "ইমাম বুখারী বর্ণনা করেন, আগের সেই আয়াতটি বহু বছর পরে কত ভারীভাবে পড়েছিল। নবী ﷺ যখন ইন্তিকাল করেন, আবু বকর (রাঃ) হতভম্ব মুসলিমদের সামনে বেরিয়ে এসে আয়াতটি তাদের পড়ে শোনান, আর উমার (রাঃ) বলেন, আবু বকরকে তা পড়তে শুনে তাঁর পা তাঁকে আর বইতে পারছিল না এবং তিনি মাটিতে বসে পড়েন, বুঝতে পেরে যে নবী ﷺ সত্যিই ইন্তিকাল করেছেন। সেই মুহূর্তে সমাজের স্থিরতা এসেছিল এমন এক আয়াত থেকে, যা ঠিক সেই মুহূর্তের জন্যই বহু বছর আগে নাযিল হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Decree With a Date",
          "bn": "তারিখসহ লিখিত ফয়সালা"
        },
        "p": [
          {
            "en": "Wa ma kana li nafsin an tamuta illa bi idhnillahi kitaban mu'ajjalan. The last two words carry the whole argument. Kitab is something written down; mu'ajjal is from ajal, a term with a fixed end. So the sentence says more than that Allah permits each death. It says the permission is already recorded, and recorded with its time attached. 63:11 states the negative half plainly, that Allah will never delay a soul once its term has come, and 7:34 extends the same rule from individuals to whole nations.",
            "bn": "'ওয়া মা কানা লিনাফসিন আন তামূতা ইল্লা বিইযনিল্লাহি কিতাবাম মুআজ্জালা।' শেষ দুই শব্দই পুরো যুক্তিটি বহন করে। 'কিতাব' মানে যা লিখে রাখা হয়েছে; 'মুআজ্জাল' এসেছে 'আজাল' থেকে, অর্থাৎ নির্ধারিত শেষসীমাযুক্ত মেয়াদ। তাই বাক্যটি কেবল এটুকু বলে না যে আল্লাহ প্রতিটি মৃত্যুর অনুমতি দেন। এটি বলে, সেই অনুমতি আগেই লিপিবদ্ধ, আর লিপিবদ্ধ হয়েছে তার সময়সহ। 63:11 আয়াতে নেতিবাচক দিকটি স্পষ্ট করে বলা হয়েছে — নির্ধারিত সময় এসে গেলে আল্লাহ কাউকে অবকাশ দেন না; আর 7:34 আয়াতে একই বিধান ব্যক্তি থেকে গোটা জাতির ক্ষেত্রে বিস্তৃত করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Fear Cannot Buy",
          "bn": "ভয় যা কিনতে পারে না"
        },
        "p": [
          {
            "en": "Later in the same passage the Quran quotes the muttering that followed the defeat. Some said that if they had had any say in the matter, their dead would not have been killed where they fell; 3:154 gives the answer, that even had they stayed inside their houses, those for whom killing was written would have gone out to the very places where they lay down. The point is not that precaution is pointless. It is that precaution buys safety, and never buys lifespan.",
            "bn": "একই আলোচনার পরবর্তী অংশে কুরআন পরাজয়ের পরের গুঞ্জনটি উদ্ধৃত করে। কেউ কেউ বলেছিল, বিষয়টিতে তাদের কিছু বলার অধিকার থাকলে তাদের নিহতরা যেখানে পড়ে ছিল সেখানে নিহত হতো না; 3:154 আয়াতে এর জবাব আছে — তারা নিজেদের ঘরে থাকলেও যাদের জন্য নিহত হওয়া লেখা ছিল, তারা ঠিক সেই জায়গাগুলোর দিকেই বেরিয়ে পড়ত যেখানে তারা শুয়ে পড়েছিল। কথাটা এই নয় যে সতর্কতা অর্থহীন। কথাটা এই যে সতর্কতা নিরাপত্তা কিনতে পারে, আয়ু কখনো কিনতে পারে না।"
          },
          {
            "en": "That distinction is what makes the verse usable. The Quran commands caution in its own right; 4:71 tells the believers to take their precaution before going out. What it removes is the bargain we quietly try to strike, in which avoiding a duty is expected to purchase extra years. Since the term is already written, the fear that keeps a person from what is right is paying a price for nothing at all.",
            "bn": "এই পার্থক্যটিই আয়াতটিকে ব্যবহারযোগ্য করে তোলে। কুরআন নিজেই সতর্কতার নির্দেশ দেয়; 4:71 আয়াতে মুমিনদের বলা হয়েছে বেরোনোর আগে সতর্কতা অবলম্বন করতে। যা সরিয়ে দেওয়া হয় তা হলো সেই নীরব সওদা, যেখানে দায়িত্ব এড়িয়ে বাড়তি কিছু বছর কিনে নেওয়ার আশা করা হয়। যেহেতু মেয়াদ আগেই লেখা, তাই যে ভয় মানুষকে সঠিক কাজ থেকে আটকে রাখে, সে ভয় কোনো কিছুর বিনিময় ছাড়াই মূল্য দিয়ে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Desires, Is Given",
          "bn": "যে চায়, তাকে দেওয়া হয়"
        },
        "p": [
          {
            "en": "The second half of the verse changes the subject from length of life to purpose of life. Whoever desires the reward of this world, We give him of it; whoever desires the reward of the Hereafter, We give him of it. Both clauses use the same partitive word, min, meaning some of it — a portion, not the whole. Neither seeker is promised everything he wants, and the difference between them is not effort. It is the direction of the wanting.",
            "bn": "আয়াতের দ্বিতীয় অংশ প্রসঙ্গ বদলে জীবনের দৈর্ঘ্য থেকে জীবনের উদ্দেশ্যে নিয়ে যায়। যে দুনিয়ার প্রতিদান চায়, আমি তাকে তা থেকে দিই; যে আখিরাতের প্রতিদান চায়, আমি তাকে তা থেকে দিই। দুই বাক্যাংশেই একই অংশবাচক শব্দ 'মিন' ব্যবহৃত হয়েছে, যার অর্থ তা থেকে কিছু — একটি অংশ, পুরোটা নয়। কোনো প্রার্থীকেই তার চাওয়া সবকিছুর প্রতিশ্রুতি দেওয়া হয়নি, আর তাদের মধ্যে পার্থক্য পরিশ্রমের নয়। পার্থক্য চাওয়ার দিকের।"
          },
          {
            "en": "Elsewhere the Quran finishes the comparison that this verse leaves symmetrical. 42:20 says that whoever desires the harvest of the Hereafter has it increased for him, while the one who wants only this world is given from it and has no share in the Hereafter at all. 17:18-19 is blunter still about the two roads. Read together, they show that the worldly portion is real but capped, while the other is real and enlarged.",
            "bn": "কুরআন অন্যত্র সেই তুলনাটি সম্পূর্ণ করে, যা এই আয়াতে সমান্তরাল রাখা হয়েছে। 42:20 আয়াতে বলা হয়েছে, যে আখিরাতের ফসল চায় তার জন্য তা বাড়িয়ে দেওয়া হয়, আর যে কেবল দুনিয়া চায় তাকে তা থেকে দেওয়া হয় এবং আখিরাতে তার কোনো অংশই থাকে না। 17:18-19 আয়াতে দুই পথ নিয়ে আরও কঠোরভাবে বলা হয়েছে। একসঙ্গে পড়লে দেখা যায়, দুনিয়ার অংশটি বাস্তব কিন্তু সীমাবদ্ধ, আর অন্যটি বাস্তব এবং বর্ধিত।"
          }
        ]
      },
      {
        "h": {
          "en": "And We Will Reward the Grateful",
          "bn": "আর কৃতজ্ঞদের প্রতিদান দেব"
        },
        "p": [
          {
            "en": "The verse closes on sanajzi ash-shakirin, and We will reward the grateful — the same promise that closed 3:144 one verse earlier. Two consecutive verses ending on gratitude, in the middle of an account of a defeat, is a deliberate choice. The alternative that 3:144 had named was turning back on the heels, and that is ingratitude in its practical form. The grateful, in this context, are simply those who stayed.",
            "bn": "আয়াতটি শেষ হয় 'সানাজযিশ শাকিরীন' দিয়ে — আর আমি কৃতজ্ঞদের প্রতিদান দেব; ঠিক এক আয়াত আগে 3:144 আয়াতও একই প্রতিশ্রুতি দিয়ে শেষ হয়েছিল। একটি পরাজয়ের বিবরণের মাঝখানে পরপর দুই আয়াত কৃতজ্ঞতার কথা দিয়ে শেষ হওয়া উদ্দেশ্যপ্রণোদিত। 3:144 আয়াতে যে বিকল্পটির নাম নেওয়া হয়েছিল তা হলো উল্টো পায়ে ফিরে যাওয়া, আর ব্যবহারিক রূপে সেটিই অকৃতজ্ঞতা। এই প্রসঙ্গে কৃতজ্ঞ তারাই, যারা টিকে থেকেছে।"
          },
          {
            "en": "So the verse hands its reader two settled facts and one open question. The facts are that the day of death is fixed and that both kinds of seeker are supplied. The question is which reward is actually being sought, and the honest test of it is not what a person says but what he arranges his week around. A fixed term makes that question urgent rather than gloomy, because it is the one thing about the arrangement that cannot be renegotiated later.",
            "bn": "তাই আয়াতটি পাঠকের হাতে দুটি নিশ্চিত সত্য আর একটি খোলা প্রশ্ন তুলে দেয়। সত্য দুটি হলো: মৃত্যুর দিন নির্ধারিত, আর দুই ধরনের প্রার্থীকেই দেওয়া হয়। প্রশ্নটি হলো, আসলে কোন প্রতিদান চাওয়া হচ্ছে; আর তার সৎ পরীক্ষা মানুষের কথা নয়, বরং সে তার সপ্তাহটি কীসের চারপাশে সাজায় তা-ই। নির্ধারিত মেয়াদ এই প্রশ্নটিকে বিষণ্ন নয়, জরুরি করে তোলে — কারণ গোটা ব্যবস্থাটির মধ্যে কেবল ওই একটি জিনিসই পরে আর নতুন করে আলোচনা করা যায় না।"
          }
        ]
      }
    ]
  },
  "3:146-148": {
    "sections": [
      {
        "h": {
          "en": "Many Stood Here Before",
          "bn": "এখানে আগেও অনেকে দাঁড়িয়েছেন"
        },
        "p": [
          {
            "en": "These three verses sit in the middle of the long passage in which Al Imran, a Madinan surah, goes back over the battle of Uhud. Just before them, 3:144 answers the cry that the Prophet ﷺ had been killed, and 3:145 says that no soul dies except by Allah's permission, at a term already written. Then the address turns from argument to example. Instead of explaining the defeat once more, the Quran points its wounded listeners backwards, to the companions of earlier prophets who had stood where they were now standing.",
            "bn": "এই তিনটি আয়াত সূরা আলে ইমরানের সেই দীর্ঘ অংশের মাঝখানে, যেখানে মাদানি এই সূরা উহুদ যুদ্ধের দিনটিকে আবার খুলে দেখে। ঠিক আগে ৩:১৪৪ আয়াত জবাব দেয় সেই গুজবের, যে নবী ﷺ নিহত হয়েছেন। ৩:১৪৫ আয়াত বলে, আল্লাহর অনুমতি ছাড়া কেউ মরে না, আর প্রত্যেকের মেয়াদ লেখা আছে। এরপর কথার ধরন বদলে যায়, যুক্তি থেকে দৃষ্টান্তে। পরাজয়ের ব্যাখ্যা আবার না দিয়ে কুরআন আহত শ্রোতাদের পেছনে তাকাতে বলে। দেখায় আগের নবীদের সঙ্গীদের, যাঁরা একদিন ঠিক এই জায়গাতেই দাঁড়িয়েছিলেন।"
          },
          {
            "en": "After the three verses, 3:149 warns that obeying the disbelievers would turn the believers back on their heels, and 3:152 returns to the day itself and what went wrong on it. The placement is careful. Between the rumour of a death and the plain account of the reversal, the listener is shown how faithful people have always carried a wound. The verses name no particular prophet and no particular battle. The picture is left open, so that every later generation can find a place to stand inside it.",
            "bn": "এই তিন আয়াতের পরে ৩:১৪৯ আয়াত সতর্ক করে, কাফিরদের কথা মানলে তারা মুমিনদের উল্টো পায়ে ফিরিয়ে দেবে। আর ৩:১৫২ আয়াত ফিরে যায় সেই দিনে, সেদিন কী ভুল হয়েছিল সেই কথায়। জায়গাটা ভেবেচিন্তে বাছা। মৃত্যুর গুজব আর বিপর্যয়ের সোজা বিবরণের মাঝখানে শ্রোতাকে দেখানো হয়, ঈমানদার মানুষ চিরকাল কীভাবে আঘাত বয়ে নিয়েছেন। আয়াতগুলো কোনো নির্দিষ্ট নবী বা নির্দিষ্ট যুদ্ধের নাম নেয় না। ছবিটা খোলা রাখা হয়েছে, যাতে পরের প্রতিটি প্রজন্ম এর ভেতরে নিজের জায়গা খুঁজে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ribbiyyun and Three Refusals",
          "bn": "রিব্বিয়্যূন আর তিনটি না"
        },
        "p": [
          {
            "en": "Wa ka'ayyin min nabiyyin: and how many a prophet. Ka'ayyin points to a large number without counting it. Ribbiyyun kathir, many ribbiyyun, is the word the app renders religious scholars. Ibn Kathir gathers what the early authorities said about it: Ibn Mas'ud (RA) is reported to have explained it as thousands; Ibn Abbas (RA), Mujahid, Qatadah and others as large bands; and al-Hasan al-Basri as scholars, patient and devout. The explanations do not cancel one another. The men beside those prophets were many, and they were people of their Lord.",
            "bn": "ওয়া কাআইয়্যিম মিন নাবিয়্যিন, আর কত নবী! কাআইয়্যিন শব্দটি গুনে না দেখিয়ে বিরাট সংখ্যার দিকে ইশারা করে। রিব্বিয়্যূনা কাসীর, বহু রিব্বিয়্যূন। অ্যাপের ইংরেজি অনুবাদ একে বলেছে ধর্মজ্ঞ আলেম। ইবনে কাসীর এ শব্দ নিয়ে পূর্বসূরিদের কথা একত্র করেছেন। ইবনে মাসউদ (রাঃ) থেকে বর্ণিত, এর অর্থ হাজার হাজার। ইবনে আব্বাস (রাঃ), মুজাহিদ, কাতাদা প্রমুখ বলেছেন বড় বড় দল। আর হাসান বসরি বলেছেন ধৈর্যশীল, মুত্তাকি আলেম। ব্যাখ্যাগুলো একটা আরেকটাকে বাতিল করে না। সেই নবীদের পাশে যাঁরা ছিলেন, তাঁরা সংখ্যায়ও ছিলেন অনেক, আবার ছিলেন তাঁদের রবের একান্ত লোক।"
          },
          {
            "en": "Then come three verbs, each negated: fa ma wahanu, wa ma da'ufu, wa mastakanu. They did not lose heart, they did not weaken, and they did not give in. Read in order, they trace the road a defeat usually travels: first the heart sags, then strength and effort thin out, and at last a person lowers himself before the enemy. Ibn Kathir reports Ibn Abbas (RA) explaining the last verb as they were not humbled, and as-Suddi and Ibn Zayd as they did not give in to the enemy. These people closed that road at its first gate.",
            "bn": "এরপর আসে তিনটি ক্রিয়া, প্রতিটির আগে না: ফামা ওয়াহানূ, ওয়ামা দাআফূ, ওয়ামাসতাকানূ। তাঁরা হিম্মত হারাননি, দুর্বল হননি, মাথাও নোয়াননি। ক্রম ধরে পড়লে দেখা যায়, পরাজয় সাধারণত কোন পথে এগোয়। প্রথমে মন ভেঙে পড়ে, তারপর শক্তি আর চেষ্টা ক্ষয়ে যায়, শেষে মানুষ শত্রুর সামনে নিজেকে নত করে দেয়। ইবনে কাসীর জানান, শেষ ক্রিয়াটির অর্থ ইবনে আব্বাস (রাঃ) করেছেন তাঁরা অপদস্থ হননি, আর সুদ্দি ও ইবনে যায়দ করেছেন তাঁরা শত্রুর কাছে হার মানেননি। এই মানুষগুলো সেই পথ প্রথম দরজাতেই বন্ধ করে দিয়েছিলেন।"
          },
          {
            "en": "The first verse closes on wallahu yuhibbu as-sabirin, and Allah loves the steadfast. It never claims these people were not hurt. It says lima asabahum fi sabilillah, for what struck them in the way of Allah, so the wound is admitted in the same sentence as the refusals. Sabr here is not the absence of injury. It is what the three refusals add up to once injury has already arrived, and the verse names it as something Allah loves rather than something He merely tolerates.",
            "bn": "প্রথম আয়াত শেষ হয় ওয়াল্লাহু ইউহিব্বুস সাবিরীন দিয়ে, আল্লাহ ধৈর্যশীলদের ভালোবাসেন। আয়াত কোথাও দাবি করে না যে তাঁদের গায়ে আঘাত লাগেনি। বরং বলে লিমা আসাবাহুম ফী সাবীলিল্লাহ, আল্লাহর পথে তাঁদের ওপর যা এসে পড়েছিল। তিনটি না যে বাক্যে, আঘাতের স্বীকারও সেই বাক্যেই। তাই এখানে সবর মানে আঘাত না পাওয়া নয়। আঘাত এসে যাওয়ার পরে ওই তিনটি না মিলে যা দাঁড়ায়, সেটাই সবর। আর আয়াত একে বলেছে আল্লাহর ভালোবাসার জিনিস, কেবল সয়ে নেওয়ার জিনিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fought Beside Him, or Lost Him",
          "bn": "তাঁর পাশে লড়াই, নাকি তাঁকে হারানো"
        },
        "p": [
          {
            "en": "The verb at the centre is recited in two ways among the canonical readings: qatala, fought, which the app's translation follows, and qutila, was killed. Ibn Kathir sets out the explanations side by side. One, which he says at-Tabari chose, is that many prophets and many of their companions were killed in earlier times. Another is that many prophets saw their companions killed before their eyes. A third he cites from Ibn Ishaq's Sirah: a prophet was killed, and the many devoted men with him did not lose heart after he was gone.",
            "bn": "আয়াতের কেন্দ্রের ক্রিয়াটি স্বীকৃত কিরাআতগুলোতে দুইভাবে পড়া হয়: কাতালা, লড়াই করেছেন, অ্যাপের অনুবাদ এটাই অনুসরণ করেছে; আর কুতিলা, নিহত হয়েছেন। ইবনে কাসীর ব্যাখ্যাগুলো পাশাপাশি রাখেন। একটি ব্যাখ্যা, যা তাঁর ভাষ্যে ইমাম তাবারি গ্রহণ করেছেন, হলো আগের যুগে বহু নবী ও তাঁদের বহু সঙ্গী নিহত হয়েছেন। আরেকটি হলো, বহু নবী নিজের চোখের সামনে সঙ্গীদের নিহত হতে দেখেছেন। তৃতীয়টি তিনি এনেছেন ইবনে ইসহাকের সীরাত থেকে: একজন নবী নিহত হলেন, আর তাঁর সঙ্গের আল্লাহভক্ত বহু মানুষ তাঁর চলে যাওয়ার পরেও হিম্মত হারাননি।"
          },
          {
            "en": "Ibn Kathir adds that as-Suhayli agreed with Ibn Ishaq's explanation and defended it strongly, and it fits the hour closely. A cry had gone up on the field that the Prophet ﷺ was dead, and 3:144 had just asked whether they would turn back if he died or was killed. On this reading the answer is a precedent: earlier companions lost their prophet and kept to his path. Qatadah and ar-Rabi' ibn Anas, also cited by Ibn Kathir, took nor did they weaken to mean after their prophet was killed. On any of the readings, the lesson stands.",
            "bn": "ইবনে কাসীর আরও জানান, সুহাইলি ইবনে ইসহাকের ব্যাখ্যার সঙ্গে একমত হয়ে জোরালোভাবে তা সমর্থন করেছেন। সময়টার সঙ্গেও ব্যাখ্যাটি খুব মেলে। ময়দানে রব উঠেছিল যে নবী ﷺ আর নেই, আর ৩:১৪৪ আয়াত সবে জিজ্ঞেস করেছে, তিনি মারা গেলে বা নিহত হলে তোমরা কি পিছু ফিরবে? এই ব্যাখ্যায় জবাবটা একটা নজির। আগের সঙ্গীরা নিজেদের নবীকে হারিয়েও তাঁর পথে অটল ছিলেন। ইবনে কাসীর কাতাদা ও রাবি ইবনে আনাসের কথাও আনেন: তাঁরা দুর্বল হননি মানে নবী নিহত হওয়ার পরেও। যে ব্যাখ্যাই ধরা হোক, শিক্ষাটা একই থাকে।"
          },
          {
            "en": "On 3:148 Ibn Kathir explains the reward of this world as victory, triumph and a good end, with the excellent reward of the Hereafter added on top of those gains. The commentators have long noticed that only the Hereafter's reward is qualified with husn, goodness, which marks it as the greater of the two. The portrait also closes on a different word from the one it opened with. 3:146 ended by calling these men steadfast; 3:148 ends with wallahu yuhibbu al-muhsinin, and Allah loves the doers of good.",
            "bn": "৩:১৪৮ আয়াতের ব্যাখ্যায় ইবনে কাসীর বলেন, দুনিয়ার প্রতিদান মানে সাহায্য, বিজয় আর শুভ পরিণতি, আর এসব লাভের ওপরে যোগ হয়েছে আখিরাতের উত্তম প্রতিদান। মুফাসসিরগণ বহু আগেই লক্ষ করেছেন, দুটি প্রতিদানের মধ্যে কেবল আখিরাতেরটির সঙ্গে হুসন, উত্তমতা, শব্দটি জোড়া হয়েছে। এতে বোঝা যায়, দুটির মধ্যে ওটিই বড়। ছবিটা যে শব্দে শুরু হয়েছিল, শেষ হয় অন্য শব্দে। ৩:১৪৬ আয়াত এই মানুষদের বলেছে ধৈর্যশীল। আর ৩:১৪৮ আয়াত শেষ হয় ওয়াল্লাহু ইউহিব্বুল মুহসিনীন দিয়ে, আল্লাহ সৎকর্মশীলদের ভালোবাসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Man Who Did Not Give In",
          "bn": "যিনি হার মানেননি"
        },
        "p": [
          {
            "en": "No hadith explains these verses word by word, but al-Bukhari preserves a scene from Uhud that shows the portrait in a single man. Anas ibn Malik (RA) relates that his uncle, Anas ibn an-Nadr (RA), had missed Badr and had said that if Allah let him witness fighting beside the Prophet ﷺ, Allah would see what he would do. At Uhud, when the Muslims fell back, he said: O Allah, I apologise to You for what these have done, meaning his companions, and I disown what those have done, meaning the idolaters.",
            "bn": "এই আয়াতগুলোর শব্দ ধরে ধরে ব্যাখ্যা করে এমন কোনো হাদিস নেই। তবে ইমাম বুখারি উহুদের একটি দৃশ্য সংরক্ষণ করেছেন, যেখানে পুরো ছবিটা একজন মানুষের মধ্যে ধরা পড়ে। আনাস ইবনে মালিক (রাঃ) বর্ণনা করেন, তাঁর চাচা আনাস ইবনে নাদর (রাঃ) বদরে উপস্থিত থাকতে পারেননি। তিনি বলেছিলেন, আল্লাহ যদি নবী ﷺ-এর সঙ্গে কোনো যুদ্ধে শরিক হওয়ার সুযোগ দেন, আল্লাহ দেখবেন তিনি কী করেন। উহুদে মুসলিমরা যখন পিছু হটলেন, তিনি বললেন: হে আল্লাহ, এরা যা করেছে তার জন্য তোমার কাছে ওজর পেশ করছি, অর্থাৎ তাঁর সাথিরা; আর ওরা যা করেছে তা থেকে নিজেকে মুক্ত ঘোষণা করছি, অর্থাৎ মুশরিকরা।"
          },
          {
            "en": "Then he went forward. He met Sa'd ibn Mu'adh (RA) and told him that he could smell Paradise from beyond Uhud, and he fought until he was killed. Anas (RA) said they found more than eighty wounds of sword, spear and arrow on his body, and that only his sister recognised him, by his fingers. In the same report Anas (RA) says they used to think that 33:23 had come down about him and men like him. His heart did not sag, his strength did not thin, and he did not give in.",
            "bn": "তারপর তিনি সামনে এগিয়ে গেলেন। সা'দ ইবনে মুআয (রাঃ)-এর সঙ্গে দেখা হলে বললেন, উহুদের ওপাশ থেকে তিনি জান্নাতের সুবাস পাচ্ছেন। এরপর লড়তে লড়তে শহীদ হলেন। আনাস (রাঃ) বলেন, তাঁর দেহে তলোয়ার, বর্শা আর তীরের আশিটিরও বেশি আঘাত পাওয়া গিয়েছিল। তাঁর বোন ছাড়া কেউ তাঁকে চিনতে পারেননি, আর বোন চিনেছিলেন আঙুল দেখে। একই বর্ণনায় আনাস (রাঃ) বলেন, তাঁদের ধারণা ছিল ৩৩:২৩ আয়াত তাঁর ও তাঁর মতো মানুষদের ব্যাপারেই নাযিল হয়েছে। তাঁর মন ভাঙেনি, শক্তি ক্ষয়ে যায়নি, আর তিনি হার মানেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Firm Feet Elsewhere in the Book",
          "bn": "কুরআনের অন্যত্র অবিচল পা"
        },
        "p": [
          {
            "en": "2:250 is the nearest echo. Talut's small army, going out to face Jalut and his soldiers, said: our Lord, pour upon us patience, plant firmly our feet and give us victory over the disbelieving people. The last two requests match 3:147 closely. The difference is at the start: Talut's men ask first for patience, while the companions of the prophets ask first for forgiveness. 2:214 adds that such shaking is the ordinary road, since those before were shaken until the messenger and the believers with him asked when Allah's help would come, and were told it is near.",
            "bn": "সবচেয়ে কাছের প্রতিধ্বনি ২:২৫০ আয়াত। জালূত ও তার সৈন্যদের মুখোমুখি হতে বেরিয়ে তালূতের ছোট বাহিনী বলেছিল: হে আমাদের রব, আমাদের ওপর ধৈর্য ঢেলে দাও, আমাদের পা অবিচল রাখো, আর কাফির সম্প্রদায়ের বিরুদ্ধে আমাদের জয় দাও। শেষের দুটি চাওয়া ৩:১৪৭ আয়াতের সঙ্গে প্রায় হুবহু মেলে। পার্থক্য শুরুতে। তালূতের লোকেরা প্রথমে চেয়েছেন ধৈর্য, আর নবীদের সঙ্গীরা প্রথমে চেয়েছেন মাফ। ২:২১৪ আয়াত জানায়, এমন কেঁপে ওঠাই স্বাভাবিক পথ। আগের লোকেরাও এতটা কেঁপে উঠেছিলেন যে রসূল ও তাঁর সঙ্গের মুমিনরা বলেছিলেন, আল্লাহর সাহায্য কখন আসবে? জবাব এসেছিল, তা নিকটেই।"
          },
          {
            "en": "33:23, which Anas (RA) linked to his uncle, praises believers who were true to what they promised Allah: some have fulfilled their vow, some are still waiting, and none of them changed at all. 8:45 turns the portrait into a command for every later army: when you meet a force, stand firm and remember Allah much, so that you may succeed. And 3:139, a few verses before this passage, had already told the same community not to weaken and not to grieve, for they would be uppermost if they were believers.",
            "bn": "৩৩:২৩ আয়াত, যাকে আনাস (রাঃ) তাঁর চাচার সঙ্গে যুক্ত করেছেন, সেই মুমিনদের প্রশংসা করে যাঁরা আল্লাহকে দেওয়া কথা সত্য করে দেখিয়েছেন। কেউ অঙ্গীকার পূর্ণ করে চলে গেছেন, কেউ এখনও অপেক্ষায়, আর তাঁরা কেউ একটুও বদলাননি। ৮:৪৫ আয়াত এই ছবিকে পরের সব বাহিনীর জন্য আদেশে পরিণত করে: কোনো দলের মুখোমুখি হলে অবিচল থাকো আর আল্লাহকে বেশি বেশি স্মরণ করো, যাতে সফল হতে পারো। আর এই অংশের কয়েক আয়াত আগে ৩:১৩৯ আয়াত একই সমাজকে বলে দিয়েছিল, দুর্বল হয়ো না, দুঃখ করো না; তোমরা মুমিন হলে তোমরাই ওপরে থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgiveness Before Victory",
          "bn": "বিজয়ের আগে মাফ"
        },
        "p": [
          {
            "en": "3:147 opens with a restriction: wa ma kana qawlahum illa an qalu, their words were nothing but that they said. In an hour of injury the verse records no complaint from them about allies, leaders or the enemy's numbers. The only speech it preserves is a prayer, and the prayer begins with their own sins and their own israf, which at-Tafsir al-Muyassar explains as whatever they had overstepped in the matter of their religion. They looked for the cause of weakness inside before they asked for help against anyone outside.",
            "bn": "৩:১৪৭ আয়াত শুরু হয় একটি সীমা টেনে: ওয়ামা কানা কাওলাহুম ইল্লা আন কালূ, তাঁদের কথা এ ছাড়া আর কিছুই ছিল না। আঘাতের সেই সময়ে মিত্র, নেতা বা শত্রুর সংখ্যা নিয়ে তাঁদের কোনো অভিযোগ আয়াত উল্লেখ করে না। আয়াত তাঁদের একটি কথাই সংরক্ষণ করেছে, একটি দোয়া। আর দোয়াটি শুরু হয়েছে নিজেদের গুনাহ আর নিজেদের ইসরাফ দিয়ে। আত-তাফসীরুল মুয়াসসার ইসরাফের ব্যাখ্যা করেছে দ্বীনের ব্যাপারে তাঁদের দ্বারা যে সীমালঙ্ঘন ঘটেছে তা। বাইরের কারও বিরুদ্ধে সাহায্য চাওয়ার আগে তাঁরা দুর্বলতার কারণ খুঁজেছেন নিজেদের ভেতরে।"
          },
          {
            "en": "Carried into ordinary life, that is a method for a bad season. When a project collapses, a marriage is strained, or a community loses ground, the first speech is istighfar rather than the search for someone to blame. The second is a request for firm feet, meaning the strength to be back at the task tomorrow. Only then comes the request for the outcome. A week lived this way might mean a fixed time each morning for istighfar, and the next day's duties kept even while the result is still unknown.",
            "bn": "সাধারণ জীবনে এটা খারাপ সময় পার করার একটা পদ্ধতি। কোনো উদ্যোগ ভেঙে পড়লে, সংসারে টান ধরলে, বা কোনো সমাজ পিছিয়ে পড়লে প্রথম কথা হবে ইস্তিগফার, দোষ চাপানোর মতো কাউকে খোঁজা নয়। দ্বিতীয় কথা অবিচল পা চাওয়া, অর্থাৎ কাল আবার কাজে ফিরে আসার শক্তি। ফলাফল চাওয়া আসবে তার পরে। এভাবে একটা সপ্তাহ কাটানো মানে হতে পারে প্রতিদিন সকালে ইস্তিগফারের জন্য একটা নির্দিষ্ট সময় রাখা। আর ফল কী হবে না জেনেও পরদিনের দায়িত্বগুলো ঠিকঠাক পালন করে যাওয়া।"
          },
          {
            "en": "The verses also free a person from a quiet trap. Many feel they must first be clean of sin before they may ask Allah for help. These people named their sins and their excess in the same breath as they asked for victory, and 3:148 says Allah gave them the reward of both worlds and loves them as doers of good. Admitting a fault did not disqualify them from help. In this passage it was the first step towards it, and nothing in the verses suggests the order was accidental.",
            "bn": "আয়াতগুলো মানুষকে একটা নীরব ফাঁদ থেকেও মুক্ত করে। অনেকে মনে করেন, আল্লাহর কাছে সাহায্য চাওয়ার আগে আগে গুনাহ থেকে পুরোপুরি পাক হতে হবে। অথচ এই মানুষগুলো যে নিঃশ্বাসে বিজয় চেয়েছেন, সেই নিঃশ্বাসেই নিজেদের গুনাহ আর বাড়াবাড়ির কথা বলেছেন। আর ৩:১৪৮ আয়াত বলছে, আল্লাহ তাঁদের দুই জগতের প্রতিদান দিয়েছেন এবং সৎকর্মশীল হিসেবে তাঁদের ভালোবাসেন। দোষ স্বীকার করায় তাঁরা সাহায্যের অযোগ্য হয়ে যাননি। এই অংশে সেটাই ছিল সাহায্যের প্রথম ধাপ, আর ক্রমটা যে এলোমেলো ছিল, আয়াতে তার কোনো ইঙ্গিত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Prayer on Our Tongues",
          "bn": "তাঁদের দোয়া আমাদের মুখে"
        },
        "p": [
          {
            "en": "The du'a here is the verse itself, and it can be said exactly as it stands: Rabbana ighfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafirin. Our Lord, forgive us our sins and the excess in our affairs, plant firmly our feet, and give us victory over the disbelieving people. It holds three requests, and the first of them asks forgiveness for two things, sins and excess. Allah preserved these words from people He says He loves.",
            "bn": "এখানে দোয়া হলো আয়াতটি নিজেই, আর যেমন আছে তেমনই পড়া যায়: রাব্বানাগফির লানা যুনূবানা ওয়া ইসরাফানা ফী আমরিনা ওয়া সাব্বিত আকদামানা ওয়ানসুরনা আলাল কাওমিল কাফিরীন। হে আমাদের রব, আমাদের গুনাহ আর আমাদের কাজে আমাদের বাড়াবাড়ি মাফ করে দাও, আমাদের পা অবিচল রাখো, আর কাফির সম্প্রদায়ের বিরুদ্ধে আমাদের সাহায্য করো। এতে চাওয়া তিনটি, আর প্রথম চাওয়াটিতে মাফ চাওয়া হয়েছে দুটি জিনিসের জন্য: গুনাহ আর বাড়াবাড়ি। যাঁদের আল্লাহ ভালোবাসেন বলে জানিয়েছেন, তাঁদের মুখের এই কথাগুলো তিনি নিজেই সংরক্ষণ করেছেন।"
          },
          {
            "en": "It suits more than a battlefield. Firm feet are needed in a hospital corridor, before a hard conversation, and in the week after a failure. The people against whom help is asked, in the verse, are those who reject Allah, not a rival at work or a difficult relative, and the prayer should be kept to that meaning. A believer who says it in sujud, or after an obligatory prayer, is asking in words that were first spoken by wounded people and then kept in the Book for every wounded person after them.",
            "bn": "দোয়াটি শুধু যুদ্ধের ময়দানের জন্য নয়। হাসপাতালের করিডোরে, কঠিন কোনো আলাপের আগে, ব্যর্থতার পরের সপ্তাহে, সব জায়গাতেই অবিচল পা দরকার। তবে আয়াতে যাদের বিরুদ্ধে সাহায্য চাওয়া হয়েছে, তারা আল্লাহকে অস্বীকারকারী। কর্মস্থলের প্রতিদ্বন্দ্বী বা ঝামেলার কোনো আত্মীয় নয়, আর দোয়াটিকে সেই অর্থেই রাখা উচিত। সিজদায় বা ফরজ নামাজের পরে কেউ এ দোয়া পড়লে তিনি চাইছেন এমন কথায়, যা প্রথম বলেছিলেন আহত মানুষেরা। তারপর তাঁদের পরের প্রতিটি আহত মানুষের জন্য কথাগুলো কিতাবে রেখে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for a Wounded Season",
          "bn": "আহত সময়ের প্রশ্ন"
        },
        "p": [
          {
            "en": "When something I care about has been struck, what are the first words that actually leave my mouth: blame, complaint, or a prayer? Of the three refusals in 3:146, which is hardest for me: keeping my heart from sagging, keeping my effort from thinning, or refusing to give in to the pressure around me? And do I ever put off asking Allah for help because I do not yet feel clean enough to ask?",
            "bn": "প্রিয় কিছুতে আঘাত এলে আমার মুখ থেকে সত্যি সত্যি প্রথম কোন কথাটা বেরোয়: দোষারোপ, অভিযোগ, নাকি দোয়া? ৩:১৪৬ আয়াতের তিনটি না-এর মধ্যে কোনটা আমার জন্য সবচেয়ে কঠিন: মন ভেঙে পড়তে না দেওয়া, চেষ্টা ঢিলে হতে না দেওয়া, নাকি চারপাশের চাপের কাছে হার না মানা? আর নিজেকে এখনও যথেষ্ট পাক মনে হয় না বলে আমি কি কখনো আল্লাহর কাছে সাহায্য চাওয়া পিছিয়ে দিই?"
          },
          {
            "en": "Who in my own life, a parent, a teacher, a friend, has carried a wound without weakening, and have I ever told them what it taught me? If my words in my last hard hour had been preserved the way theirs were, would I want them read back to me? And which task waiting for me tomorrow needs firm feet far more than it needs a good result?",
            "bn": "আমার নিজের জীবনে কে, বাবা-মা, কোনো শিক্ষক বা বন্ধু, আঘাত বয়ে নিয়েও দুর্বল হননি? আর তাঁর কাছ থেকে কী শিখেছি, সেটা কি কখনো তাঁকে জানিয়েছি? আমার শেষ কঠিন সময়ে বলা কথাগুলো যদি তাঁদের কথার মতো সংরক্ষিত থাকত, সেগুলো কি আমি আবার শুনতে চাইতাম? আর কাল আমার সামনে কোন কাজটা আছে, যেখানে ভালো ফলের চেয়ে অবিচল পা অনেক বেশি দরকার?"
          }
        ]
      }
    ]
  },
  "3:152": {
    "sections": [
      {
        "h": {
          "en": "A Promise Kept, Then a Turn",
          "bn": "পূরণ হওয়া ওয়াদা, তারপর মোড়"
        },
        "p": [
          {
            "en": "The verse comes inside Al Imran's long reading of Uhud, directly after a promise. 3:150 says Allah is the protector of the believers and the best of helpers, and 3:151 says He will cast terror into the hearts of those who disbelieve. Then 3:152 turns to the day itself and begins with what had really happened at its start: Allah had fulfilled His promise. The Quran does not let the defeat erase the opening hours of the battle, when the believers were pressing forward and the enemy line was giving way.",
            "bn": "আয়াতটি সূরা আলে ইমরানে উহুদ নিয়ে দীর্ঘ আলোচনার ভেতরে, ঠিক একটি ওয়াদার পরে। ৩:১৫০ আয়াত বলে, আল্লাহই মুমিনদের অভিভাবক, তিনিই শ্রেষ্ঠ সাহায্যকারী। ৩:১৫১ আয়াত বলে, তিনি কাফিরদের অন্তরে ভয় ঢেলে দেবেন। এরপর ৩:১৫২ আয়াত সেই দিনের কথায় ফেরে, আর শুরু করে দিনের শুরুতে আসলে যা ঘটেছিল তা দিয়ে: আল্লাহ তাঁর ওয়াদা পূরণ করেছিলেন। পরাজয়ের কারণে কুরআন যুদ্ধের প্রথম প্রহরগুলো মুছে যেতে দেয় না। সেই প্রহরে মুমিনরা সামনে এগোচ্ছিলেন, আর শত্রুর সারি ভেঙে পড়ছিল।"
          },
          {
            "en": "What follows keeps to the same day. 3:153 pictures the believers climbing away without looking aside at anyone while the Messenger ﷺ called them from behind; 3:154 sends drowsiness upon a party of them as security; and 3:155 says that Allah has already forgiven those who turned back. The seerah fills in the scene the verse compresses. Sahih al-Bukhari 3039 records that fifty archers were set on a low hill under Abdullah ibn Jubayr (RA) and told not to leave it until word was sent to them.",
            "bn": "পরের আয়াতগুলোও সেই দিনেই থাকে। ৩:১৫৩ আয়াত দেখায়, মুমিনরা কারও দিকে না তাকিয়ে ওপরের দিকে উঠে যাচ্ছেন, আর রসূল ﷺ পেছন থেকে তাঁদের ডাকছেন। ৩:১৫৪ আয়াতে আল্লাহ তাঁদের একদলের ওপর প্রশান্তির তন্দ্রা নামিয়ে দেন। আর ৩:১৫৫ আয়াত বলে, যাঁরা পিছু ফিরেছিলেন, আল্লাহ তাঁদের মাফ করে দিয়েছেন। আয়াত যে দৃশ্য সংক্ষেপে বলে, সীরাত তা ভরাট করে। সহিহ বুখারির ৩০৩৯ নম্বর হাদিসে আছে, আবদুল্লাহ ইবনে জুবাইর (রাঃ)-এর নেতৃত্বে পঞ্চাশজন তীরন্দাজকে একটি নিচু টিলায় রাখা হয়েছিল। বলা হয়েছিল, খবর না পাঠানো পর্যন্ত তাঁরা যেন জায়গা না ছাড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Losing Heart, Disputing, Disobeying",
          "bn": "সাহস হারানো, মতভেদ, অবাধ্যতা"
        },
        "p": [
          {
            "en": "Idh tahussunahum bi-idhnihi: when you were cutting them down by His permission. Ibn Kathir glosses it as slaying your enemies, and adds that Allah had allowed it. Then comes hatta idha, until when, and three verbs in a row: fashiltum, you lost courage, as Ibn Abbas (RA) explained it; wa tanaza'tum fil-amr, and you disputed about the order; wa 'asaytum, and you disobeyed. The first is a state of the heart, the second a quarrel among people, the third an act. The verse names each one without adding a single insult.",
            "bn": "ইয তাহুসসূনাহুম বি-ইযনিহী: যখন তোমরা তাঁর অনুমতিতে তাদের কচুকাটা করছিলে। ইবনে কাসীর এর অর্থ করেছেন শত্রুদের হত্যা করা, আর যোগ করেছেন যে আল্লাহই তা করতে দিয়েছিলেন। এরপর আসে হাত্তা ইযা, অবশেষে যখন, আর পরপর তিনটি ক্রিয়া। ফাশিলতুম, তোমরা সাহস হারালে, ইবনে আব্বাস (রাঃ) এভাবেই ব্যাখ্যা করেছেন। ওয়া তানাযাতুম ফিল আমর, আর নির্দেশ নিয়ে মতভেদ করলে। ওয়া আসাইতুম, আর অবাধ্য হলে। প্রথমটি অন্তরের অবস্থা, দ্বিতীয়টি মানুষে মানুষে টানাপোড়েন, তৃতীয়টি একটি কাজ। আয়াত তিনটিরই নাম নেয়, কিন্তু একটিও গালমন্দ যোগ করে না।"
          },
          {
            "en": "Then a phrase fixes the timing: min ba'di ma arakum ma tuhibbun, after He had shown you what you love. Ibn Kathir explains what they loved as victory over the disbelievers. The failure did not come while the battle hung in doubt; it came at the moment the battle seemed won. The grammarians have also noticed that the sentence opened by until when does not state in so many words what followed, and they differ over where its answer lies. The reader, who knows how the day ended, supplies it.",
            "bn": "এরপর একটি বাক্যাংশ সময়টা বেঁধে দেয়: মিম বাদি মা আরাকুম মা তুহিব্বূন, তোমরা যা ভালোবাস তা তিনি তোমাদের দেখিয়ে দেওয়ার পরে। ইবনে কাসীর বলেন, সেই প্রিয় জিনিসটি ছিল কাফিরদের ওপর বিজয়। অর্থাৎ ভুলটা হয়নি যখন যুদ্ধের ফল অনিশ্চিত ছিল। হয়েছে ঠিক তখন, যখন যুদ্ধ জেতা হয়ে গেছে বলে মনে হচ্ছিল। আরবি ব্যাকরণবিদরা আরও লক্ষ করেছেন, অবশেষে যখন দিয়ে শুরু হওয়া বাক্যটি এরপর কী ঘটল তা স্পষ্ট শব্দে বলে না। এর জবাব কোথায়, তা নিয়ে তাঁদের মধ্যে মতভেদ আছে। দিনটা কীভাবে শেষ হয়েছিল পাঠক জানেন, তাই ফাঁকটা তিনি নিজেই পূরণ করে নেন।"
          },
          {
            "en": "The verse opens with wa laqad sadaqakumullahu wa'dah, and Allah had certainly fulfilled His promise to you, and near its end it says wa laqad 'afa 'ankum, and He has certainly pardoned you. The same emphatic laqad stands at both points. Between the kept promise and the pardon lies everything that went wrong, and both ends are stated with equal force. Nothing that happened in the middle is allowed to cancel the promise that came before it or the pardon that came after it.",
            "bn": "আয়াত শুরু হয় ওয়া লাকাদ সাদাকাকুমুল্লাহু ওয়াদাহ দিয়ে, আল্লাহ অবশ্যই তোমাদের সঙ্গে তাঁর ওয়াদা পূরণ করেছিলেন। আর শেষের দিকে বলে ওয়া লাকাদ আফা আনকুম, আর তিনি অবশ্যই তোমাদের মাফ করে দিয়েছেন। দুই জায়গাতেই আছে জোর দেওয়ার একই শব্দ, লাকাদ। পূরণ হওয়া ওয়াদা আর মাফের মাঝখানে পড়ে আছে ভুল হয়ে যাওয়া সবকিছু। কিন্তু দুই প্রান্তের কথাই বলা হয়েছে সমান জোরে। মাঝখানে যা ঘটেছে, তা আগের ওয়াদাকেও বাতিল করতে পারে না, পরের মাফকেও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Wanted What",
          "bn": "কে কী চেয়েছিলেন"
        },
        "p": [
          {
            "en": "Minkum man yuridu ad-dunya wa minkum man yuridu al-akhirah: among you are some who want this world and some who want the Hereafter. Ibn Kathir says the first refers to those who went after the spoils when they saw the enemy routed, and the commentators take the second to include Abdullah ibn Jubayr (RA) and the few who stayed on the hill with him. The verse itself names no one. It describes two motives inside a single army, and it leaves the sorting of individual hearts to Allah.",
            "bn": "মিনকুম মাই ইউরীদুদ দুনইয়া ওয়া মিনকুম মাই ইউরীদুল আখিরাহ: তোমাদের কেউ চায় দুনিয়া, আর কেউ চায় আখিরাত। ইবনে কাসীর বলেন, প্রথম দল তাঁরা, যাঁরা শত্রুকে পালাতে দেখে গনিমতের দিকে ছুটেছিলেন। আর মুফাসসিরগণ দ্বিতীয় দলের মধ্যে ধরেন আবদুল্লাহ ইবনে জুবাইর (রাঃ) ও তাঁর সঙ্গে টিলায় থেকে যাওয়া অল্প কয়েকজনকে। আয়াত নিজে কারও নাম নেয় না। একই বাহিনীর ভেতরের দুটি উদ্দেশ্যের কথা বলে, আর কার অন্তরে কী ছিল, সেই বাছাই আল্লাহর হাতে ছেড়ে দেয়।"
          },
          {
            "en": "Imam Ahmad records from Abdullah ibn Mas'ud (RA) that he had not thought any of the Companions of the Prophet ﷺ wanted this world until this verse came down about them on the day of Uhud. The remark is not an accusation thrown at others. It is a Companion's own honesty about his community, and it shows how the Companions (RA) received the verse: as a mirror held up to all of them, not as a charge against a few, and not as a reason to think less of one another afterwards.",
            "bn": "ইমাম আহমদ আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, তিনি ভাবতেই পারেননি নবী ﷺ-এর সাহাবিদের কেউ দুনিয়া চাইতে পারেন, যতক্ষণ না উহুদের দিন তাঁদের ব্যাপারে এই আয়াত নাযিল হলো। কথাটি অন্যের দিকে ছুড়ে দেওয়া কোনো অভিযোগ নয়। এ হলো নিজের সমাজ সম্পর্কে একজন সাহাবির নিজের সততা। এতে বোঝা যায় সাহাবিগণ (রাঃ) আয়াতটিকে কীভাবে নিয়েছিলেন: সবার সামনে ধরা আয়না হিসেবে। কয়েকজনের বিরুদ্ধে অভিযোগ হিসেবে নয়, পরে একে অন্যকে ছোট ভাবার কারণ হিসেবেও নয়।"
          },
          {
            "en": "Thumma sarafakum 'anhum li-yabtaliyakum: then He turned you back from them, that He might test you. The turning is attributed to Allah, while 3:165 says of the same disaster that it is from yourselves and 3:166 that it came by Allah's permission; the passage holds both. On the pardon, Ibn Kathir says Allah forgave the error they committed, adding, with Allah knows best, that the enemy was many and well supplied while the Muslims were few. At-Tafsir al-Muyassar says Allah knew their regret and repentance, and so pardoned them.",
            "bn": "সুম্মা সারাফাকুম আনহুম লিয়াবতালিয়াকুম: তারপর তিনি তোমাদের তাদের কাছ থেকে ফিরিয়ে দিলেন, তোমাদের পরীক্ষা করার জন্য। ফিরিয়ে দেওয়ার কাজটি এখানে আল্লাহর দিকে সম্পর্কিত। অথচ একই বিপর্যয় সম্পর্কে ৩:১৬৫ আয়াত বলে, তা তোমাদের নিজেদের থেকেই, আর ৩:১৬৬ আয়াত বলে, তা আল্লাহর অনুমতিতে। এই অংশ দুটিকেই একসঙ্গে ধরে রাখে। মাফ প্রসঙ্গে ইবনে কাসীর বলেন, আল্লাহ তাঁদের ভুল মাফ করেছেন। আর আল্লাহই ভালো জানেন বলে যোগ করেন, শত্রু ছিল সংখ্যায় বেশি, রসদে ভরপুর, আর মুসলিমরা ছিলেন অল্প। আত-তাফসীরুল মুয়াসসার বলে, আল্লাহ তাঁদের অনুশোচনা ও তওবা জানতেন, তাই মাফ করে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports, Two Lessons",
          "bn": "দুটি বর্ণনা, দুটি শিক্ষা"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari 3039 carries the account of al-Bara' ibn Azib (RA). The Prophet ﷺ placed fifty archers under Abdullah ibn Jubayr (RA) and told them to hold their place even if they saw birds snatching at the army, and not to leave it, whether the Muslims were winning or losing, until he sent for them. When the enemy broke and fled, some of the archers called out for the spoils and said that their companions had already won. Ibn Jubayr (RA) asked them whether they had forgotten what the Messenger ﷺ had told them.",
            "bn": "সহিহ বুখারির ৩০৩৯ নম্বর হাদিসে আছে বারা ইবনে আযিব (রাঃ)-এর বর্ণনা। নবী ﷺ আবদুল্লাহ ইবনে জুবাইর (রাঃ)-এর অধীনে পঞ্চাশজন তীরন্দাজ রাখলেন। বললেন, পাখিরা বাহিনীকে ছোঁ মেরে নিয়ে যাচ্ছে দেখলেও যেন তাঁরা জায়গা না ছাড়েন। মুসলিমরা জিতুক বা হারুক, তিনি লোক না পাঠানো পর্যন্ত যেন সেখানেই থাকেন। শত্রু ভেঙে পালাতে শুরু করলে তীরন্দাজদের কয়েকজন গনিমতের জন্য ডাক দিলেন, বললেন তাঁদের সাথিরা তো জিতেই গেছে। ইবনে জুবাইর (রাঃ) তাঁদের জিজ্ঞেস করলেন, রসূল ﷺ তোমাদের কী বলেছিলেন, তা কি ভুলে গেলে?"
          },
          {
            "en": "They answered that they would go down and take their share. In the report the dispute the verse names is visible: Ibn Jubayr (RA) held to the order as it was given, and the others took it to be over once victory had come. Al-Bara' (RA) says that when they went, the Muslims were turned back, and that seventy of them were killed that day, which agrees with the roll of about seventy that Ibn Ishaq gives. The verse and the Companion's report tell the same story, and neither of them softens it.",
            "bn": "তাঁরা জবাব দিলেন, তাঁরা নেমে গিয়ে নিজেদের ভাগ নেবেন। বর্ণনাটিতে আয়াতের বলা মতভেদটা স্পষ্ট দেখা যায়। ইবনে জুবাইর (রাঃ) নির্দেশটাকে ধরে রাখলেন যেমন দেওয়া হয়েছিল, আর অন্যরা ভাবলেন বিজয় আসার সঙ্গে সঙ্গে নির্দেশের মেয়াদ ফুরিয়েছে। বারা (রাঃ) বলেন, তাঁরা চলে যেতেই মুসলিমরা পিছু হটতে বাধ্য হলেন, আর সেদিন তাঁদের সত্তরজন শহীদ হলেন। ইবনে ইসহাক শহীদদের যে তালিকা দেন, প্রায় সত্তরজনের, তার সঙ্গে এটি মেলে। আয়াত আর সাহাবির বর্ণনা একই ঘটনা বলে, আর কোনোটিই তা নরম করে না।"
          },
          {
            "en": "Al-Bukhari also records how a Companion handled this history when someone tried to use it. A man from Egypt asked Abdullah ibn Umar (RA) whether Uthman (RA) had turned back on the day of Uhud, missed Badr, and been absent from the Pledge of Ridwan. Told yes, he said Allahu akbar. Ibn Umar (RA) then explained each point. Of Uhud he said: I bear witness that Allah has pardoned him and forgiven him. He gave the reasons for the other two, and told the man to take those answers away with him.",
            "bn": "ইমাম বুখারি আরও বর্ণনা করেছেন, কেউ এই ইতিহাসকে কাজে লাগাতে চাইলে একজন সাহাবি কীভাবে তা সামলেছেন। মিসরের এক লোক আবদুল্লাহ ইবনে উমর (রাঃ)-কে জিজ্ঞেস করল, উসমান (রাঃ) কি উহুদের দিন পিছু ফিরেছিলেন, বদরে অনুপস্থিত ছিলেন, আর বাইআতুর রিদওয়ানে ছিলেন না? হ্যাঁ শুনে লোকটি বলল, আল্লাহু আকবার। তখন ইবনে উমর (রাঃ) একে একে সব ব্যাখ্যা করলেন। উহুদ সম্পর্কে বললেন: আমি সাক্ষ্য দিচ্ছি, আল্লাহ তাঁকে মাফ করেছেন, ক্ষমা করে দিয়েছেন। বাকি দুটির কারণও জানালেন। তারপর লোকটিকে বললেন, এই জবাবগুলো সঙ্গে নিয়ে যাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Dispute and Courage Together",
          "bn": "মতভেদ আর সাহস, একসঙ্গে"
        },
        "p": [
          {
            "en": "8:46 is the closest sister, and it shares two of this verse's roots: obey Allah and His Messenger, and do not dispute, wa la tanaza'u, and so lose courage, fa-tafshalu, and your strength depart; and be patient, for Allah is with the patient. In al-Anfal, the surah of Badr, this comes as a warning in advance. In 3:152 the same two words describe what actually happened at Uhud. Al-Anfal warns that dispute leads to loss of courage; Al Imran reports the two side by side.",
            "bn": "সবচেয়ে কাছের সঙ্গী ৮:৪৬ আয়াত, আর এই আয়াতের দুটি মূল সেখানেও আছে: আল্লাহ ও তাঁর রসূলের আনুগত্য করো, ওয়া লা তানাযাউ, পরস্পরে বিবাদ করো না, ফাতাফশালূ, করলে সাহস হারাবে, আর তোমাদের শক্তি চলে যাবে; আর ধৈর্য ধরো, আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন। বদরের সূরা আল-আনফালে কথাটি এসেছে আগাম সতর্কবাণী হিসেবে। আর ৩:১৫২ আয়াতে সেই দুটি শব্দই বলে উহুদে বাস্তবে কী ঘটেছিল। আনফাল সতর্ক করে, বিবাদ সাহস কেড়ে নেয়। আলে ইমরান দুটিকে পাশাপাশি রেখে ঘটনাটা জানায়।"
          },
          {
            "en": "3:155 repeats the pardon for those who turned back when the two armies met, adding that it was Satan who made them slip because of some of what they had earned, and that Allah is Forgiving and Forbearing. 42:30 gives the general rule behind both verses: whatever strikes you of disaster is for what your hands have earned, but He pardons much. And 3:159, a few verses on, tells the Prophet ﷺ to pardon these same people, to ask forgiveness for them, and to consult them in the matter.",
            "bn": "৩:১৫৫ আয়াত দুই বাহিনী মুখোমুখি হওয়ার দিন যাঁরা পিছু ফিরেছিলেন, তাঁদের মাফের কথা আবার বলে। সঙ্গে জানায়, তাঁদের কিছু কাজের কারণে শয়তান তাঁদের পা পিছলে দিয়েছিল, আর আল্লাহ ক্ষমাশীল, সহনশীল। ৪২:৩০ আয়াত দুটি আয়াতের পেছনের সাধারণ নিয়মটা বলে দেয়: তোমাদের ওপর যে বিপদই আসে, তা তোমাদের হাতের কামাই, তবে তিনি অনেক কিছুই মাফ করে দেন। আর কয়েক আয়াত পরে ৩:১৫৯ আয়াত নবী ﷺ-কে বলে, এই মানুষদেরই মাফ করে দিন, তাঁদের জন্য ক্ষমা চান, আর কাজে তাঁদের সঙ্গে পরামর্শ করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hour of Success",
          "bn": "সাফল্যের প্রহর"
        },
        "p": [
          {
            "en": "The verse places the slip after Allah had shown them what they loved, and that is worth carrying into ordinary life. Discipline is easiest to keep while the outcome is uncertain and hardest once it seems settled. The student relaxes the week good results come back, a business cuts corners the year profits arrive, and someone who has just recovered from an illness drops the routine that helped him recover. The hour of success needs more watchfulness than the hour of danger, not less.",
            "bn": "আয়াত ভুলটাকে রেখেছে আল্লাহ তাঁদের প্রিয় জিনিস দেখিয়ে দেওয়ার পরে। সাধারণ জীবনেও কথাটা মনে রাখার মতো। ফল যখন অনিশ্চিত, তখন শৃঙ্খলা ধরে রাখা সহজ। ফল যখন নিশ্চিত মনে হয়, তখনই সবচেয়ে কঠিন। ভালো ফল আসার সপ্তাহে ছাত্র ঢিলে দেয়। লাভের বছরে ব্যবসা নিয়মের ফাঁক খোঁজে। সদ্য অসুখ থেকে সেরে ওঠা মানুষ সেই নিয়ম ছেড়ে দেন, যা তাঁকে সারিয়ে তুলেছিল। বিপদের প্রহরের চেয়ে সাফল্যের প্রহরে সতর্কতা বেশি দরকার, কম নয়।"
          },
          {
            "en": "The verse also shows how disagreement goes wrong. Discussing an instruction is not a sin in itself; people have to understand what they have been told. It becomes a step towards failure when it is used to reopen a clear order at the very moment the order becomes inconvenient. A team, a family or a masjid committee can ask one plain question when a rule starts to feel unnecessary: has the reason for it truly passed, or has only our patience with it passed?",
            "bn": "আয়াতটি দেখায়, মতভেদ কোথায় গিয়ে বিপথে যায়। কোনো নির্দেশ নিয়ে আলোচনা করা নিজে গুনাহ নয়; কী বলা হয়েছে, মানুষকে তা বুঝতে হয়। বিপদ তখন, যখন স্পষ্ট একটা নির্দেশকে ঠিক সেই মুহূর্তে আবার খোলা হয়, যখন সেটা মানতে অসুবিধা লাগছে। তখন মতভেদ ব্যর্থতার একটা ধাপ হয়ে দাঁড়ায়। কোনো নিয়ম অদরকারি মনে হতে শুরু করলে একটা দল, একটা পরিবার বা মসজিদ কমিটি নিজেদের একটা সোজা প্রশ্ন করতে পারে: নিয়মটার কারণ কি সত্যিই ফুরিয়েছে, নাকি ফুরিয়েছে শুধু আমাদের ধৈর্য?"
          },
          {
            "en": "And the verse teaches how to speak about a failure, including other people's. It names what was done, not who did it, and it ends by pardoning and by calling the people believers. A community that tells its hard history this way can learn from it without shaming anyone. The same holds inside a home: once a wrong has been admitted and forgiven, dragging it into every later argument does something the Quran declined to do even about Uhud.",
            "bn": "আর আয়াতটি শেখায় ভুল নিয়ে কীভাবে কথা বলতে হয়, অন্যের ভুল হলেও। কী করা হয়েছিল তার নাম নেয়, কে করেছিল তার নয়। শেষ করে মাফ দিয়ে, আর মানুষগুলোকে মুমিন বলে ডেকে। নিজের কঠিন ইতিহাস যে সমাজ এভাবে বলে, সে কাউকে লজ্জা না দিয়েও তা থেকে শিখতে পারে। ঘরের ভেতরেও একই কথা। একবার কোনো অন্যায় স্বীকার করা হলো আর মাফ পাওয়া গেল, তারপর প্রতিটি ঝগড়ায় সেটা টেনে আনা মানে এমন কাজ করা, যা কুরআন উহুদের ব্যাপারেও করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "For Those Who Came Before",
          "bn": "যাঁরা আগে চলে গেছেন তাঁদের জন্য"
        },
        "p": [
          {
            "en": "No transmitted du'a is attached to this verse, but 59:10 gives the Quran's own words for the attitude it teaches towards earlier believers: Rabbana ighfir lana wa li-ikhwaninalladhina sabaquna bil-iman wa la taj'al fi qulubina ghillan lilladhina amanu, rabbana innaka ra'ufun rahim. Our Lord, forgive us and our brothers who preceded us in faith, and put no resentment in our hearts towards those who have believed. Our Lord, You are Kind and Merciful.",
            "bn": "এই আয়াতের সঙ্গে বর্ণিত কোনো দোয়া নেই। তবে আগের ঈমানদারদের ব্যাপারে আয়াত যে মনোভাব শেখায়, তার ভাষা কুরআন নিজেই দিয়েছে ৫৯:১০ আয়াতে: রাব্বানাগফির লানা ওয়া লিইখওয়ানিনাল্লাযীনা সাবাকূনা বিল ঈমান, ওয়া লা তাজআল ফী কুলূবিনা গিল্লাল লিল্লাযীনা আমানূ, রাব্বানা ইন্নাকা রাঊফুর রাহীম। হে আমাদের রব, আমাদের মাফ করো, আর আমাদের সেই ভাইদেরও, যাঁরা ঈমানে আমাদের আগে গেছেন। আর ঈমানদারদের প্রতি আমাদের অন্তরে কোনো বিদ্বেষ রেখো না। হে আমাদের রব, তুমি বড়ই স্নেহশীল, পরম দয়ালু।"
          },
          {
            "en": "A reader may add a supplication composed from 3:152's own vocabulary, which is not a transmitted du'a: O Allah, You keep Your promise. When You show us what we love, keep us from losing heart, from disputing Your command, and from disobeying it. Make us of those who want the Hereafter, and pardon us as You pardoned them, for You are full of bounty to the believers.",
            "bn": "এর সঙ্গে ৩:১৫২ আয়াতের নিজের শব্দ দিয়ে বানানো একটি দোয়া যোগ করা যায়, যা বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, তুমি তোমার ওয়াদা পূরণ করো। আমাদের প্রিয় জিনিস যখন দেখাবে, তখন আমাদের সাহস হারানো থেকে, তোমার আদেশ নিয়ে বিবাদ থেকে, আর তার অবাধ্যতা থেকে বাঁচিয়ে রেখো। আমাদের তাদের দলে রাখো যারা আখিরাত চায়। আর তাঁদের যেমন মাফ করেছ, আমাদেরও তেমনি মাফ করো, কারণ মুমিনদের প্রতি তুমি অনুগ্রহশীল।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions After Winning",
          "bn": "জেতার পরের প্রশ্ন"
        },
        "p": [
          {
            "en": "When things are finally going well, which instruction, from Allah, from a doctor, from my own earlier resolve, am I most tempted to treat as no longer needed? In my last disagreement over a clear instruction, was I trying to understand it, or looking for a way out of it? And if the motives behind my last good deed were divided the way this verse divides an army, how much of me was wanting this world?",
            "bn": "অবশেষে সব যখন ভালোর দিকে যায়, তখন কোন নির্দেশটাকে, আল্লাহর হোক, ডাক্তারের হোক, বা আমার নিজের আগের সংকল্পের, আর দরকার নেই ভাবতে সবচেয়ে বেশি ইচ্ছে হয়? স্পষ্ট কোনো নির্দেশ নিয়ে সর্বশেষ মতভেদে আমি কি তা বুঝতে চাইছিলাম, নাকি বেরোনোর পথ খুঁজছিলাম? আর এই আয়াত যেভাবে একটি বাহিনীর উদ্দেশ্য ভাগ করে দেখায়, সেভাবে আমার সর্বশেষ ভালো কাজটার উদ্দেশ্য ভাগ করলে, আমার কতটা দুনিয়া চাইছিল?"
          },
          {
            "en": "When I speak of the failures of people who came before me, in history or in my own family, do I speak as this verse speaks, naming the act and leaving their standing with Allah? Is there a fault of my own that I have sincerely repented of and still keep reopening, as if His pardon had never been given? And who in my life needs to hear from me that an old account between us is closed?",
            "bn": "ইতিহাসে হোক বা নিজের পরিবারে, আমার আগের মানুষদের ভুল নিয়ে যখন কথা বলি, তখন কি এই আয়াতের মতো বলি? কাজটার নাম নিই, আর তাঁদের মর্যাদার বিচার আল্লাহর হাতে ছেড়ে দিই? নিজের এমন কোনো দোষ কি আছে, যার জন্য আন্তরিক তওবা করেছি, অথচ বারবার খুঁড়ে বের করি, যেন তাঁর মাফ কখনো আসেইনি? আর আমার জীবনে কাকে আমার মুখ থেকে শোনা দরকার যে আমাদের মাঝের পুরোনো হিসাবটা বন্ধ হয়ে গেছে?"
          }
        ]
      }
    ]
  },
  "3:159": {
    "sections": [
      {
        "h": {
          "en": "Softness Called a Mercy",
          "bn": "কোমলতাকে বলা হলো রহমত"
        },
        "p": [
          {
            "en": "The verse begins by tracing a character trait back to its source: fa bima rahmatin minallahi linta lahum, it is by a mercy from Allah that you were lenient with them. The Prophet's ﷺ gentleness is not presented as a natural temperament he happened to have, but as something granted. The verb linta comes from lin, softness, the word used for pliable material that does not break when pressure is applied to it.",
            "bn": "আয়াতটি শুরু হয় একটি চারিত্রিক গুণকে তার উৎস পর্যন্ত টেনে নিয়ে গিয়ে: ফাবিমা রাহমাতিম মিনাল্লাহি লিনতা লাহুম — আল্লাহর পক্ষ থেকে রহমতের কারণেই আপনি তাদের প্রতি কোমল হয়েছেন। নবী ﷺ-এর কোমলতাকে তাঁর সহজাত স্বভাব হিসেবে নয়, বরং প্রদত্ত এক দান হিসেবে উপস্থাপন করা হয়েছে। 'লিনতা' ক্রিয়াপদটি এসেছে 'লীন' থেকে, যার অর্থ কোমলতা — সেই শব্দ, যা এমন নমনীয় বস্তুর জন্য ব্যবহৃত হয় যা চাপ পড়লে ভেঙে যায় না।"
          },
          {
            "en": "Then the counterfactual: had you been fazzan ghalizal-qalb, they would have dispersed from around you. The two words are not synonyms. Fazz describes coarseness in speech and manner, what a person hears; ghaliz al-qalb is hardness of heart, what a person is. The verse names both the surface and the source, and the consequence of either is the same: infaddu, they would scatter away from you.",
            "bn": "এরপর আসে বিপরীত সম্ভাবনার কথা: আপনি যদি 'ফায্‌য' ও 'গালীযুল কাল্‌ব' হতেন, তবে তারা আপনার চারপাশ থেকে সরে যেত। শব্দ দুটি সমার্থক নয়। 'ফায্‌য' বোঝায় কথায় ও আচরণে রুক্ষতা — অর্থাৎ মানুষ যা শোনে; আর 'গালীযুল কাল্‌ব' মানে হৃদয়ের কঠোরতা — অর্থাৎ মানুষ যা। আয়াত উপরিভাগ ও উৎস দুটোরই নাম নেয়, আর দুটোরই পরিণতি এক: 'ইনফাদ্দূ' — তারা আপনার চারপাশ থেকে ছত্রভঙ্গ হয়ে যেত।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken After Uhud",
          "bn": "উহুদের পরে বলা কথা"
        },
        "p": [
          {
            "en": "This is one of the clearest contexts in the Quran. The verse lies inside the long treatment of the battle of Uhud in Surah Al Imran, roughly 3:121-179, where the Muslims suffered heavy loss after a group of archers left the position they had been ordered to hold. The people the Prophet ﷺ is told to be gentle with, pardon, and consult are the same people whose error had just cost the community dearly.",
            "bn": "কুরআনে প্রেক্ষাপট সবচেয়ে স্পষ্ট যে কয়েকটি জায়গায়, এটি তার একটি। আয়াতটি সূরা আলে ইমরানে উহুদ যুদ্ধ নিয়ে দীর্ঘ আলোচনার ভেতরে — মোটামুটি 3:121-179-এর মধ্যে — অবস্থিত, যেখানে একদল তীরন্দাজ নির্ধারিত অবস্থান ছেড়ে যাওয়ার পর মুসলিমরা ভারী ক্ষতির মুখে পড়েন। নবী ﷺ-কে যাদের প্রতি কোমল হতে, যাদের ক্ষমা করতে ও যাদের সঙ্গে পরামর্শ করতে বলা হচ্ছে, তারা ঠিক সেই মানুষগুলোই যাদের ভুলের মূল্য সমাজটি সবেমাত্র দিয়েছে।"
          },
          {
            "en": "That timing gives the command on consultation its edge. Going out from Madinah to meet the enemy had itself been the outcome of consultation, and the Prophet ﷺ had personally inclined otherwise. A defeat followed. The verse that comes after this episode does not withdraw the practice of shura; it commands it. Consultation is being established as a permanent method, not as a technique that is kept only while it produces the results people wanted.",
            "bn": "এই সময়টিই পরামর্শের আদেশটিকে ধার দেয়। শত্রুর মোকাবিলায় মদীনা থেকে বেরিয়ে যাওয়াটাই ছিল পরামর্শেরই ফল, আর নবী ﷺ ব্যক্তিগতভাবে ভিন্ন মতের দিকে ঝুঁকেছিলেন। এরপর এলো পরাজয়। এই ঘটনার পরে নাযিল হওয়া আয়াতটি শূরার চর্চা তুলে নেয় না; বরং তার আদেশ দেয়। পরামর্শকে প্রতিষ্ঠিত করা হচ্ছে একটি স্থায়ী পদ্ধতি হিসেবে — এমন কোনো কৌশল হিসেবে নয়, যা কেবল ততক্ষণই রাখা হয় যতক্ষণ তা কাঙ্ক্ষিত ফল দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Commands and a Turn",
          "bn": "তিনটি আদেশ ও একটি মোড়"
        },
        "p": [
          {
            "en": "The instructions arrive in a deliberate order. Fa'fu 'anhum, pardon them, deals with what they owe you personally. Wastaghfir lahum, and seek forgiveness for them, deals with what they owe Allah, and it asks the wronged party to pray for the wrongdoer. Wa shawirhum fil-amr, and consult them in the matter, restores them to full standing. Pardon that stops short of restored trust is not what this sequence describes.",
            "bn": "নির্দেশগুলো আসে সুচিন্তিত ক্রমে। 'ফা'ফু আনহুম' — তাদের ক্ষমা করে দিন — এটি তোমার প্রতি তাদের যে দায়, তার নিষ্পত্তি করে। 'ওয়াস্তাগফির লাহুম' — আর তাদের জন্য ক্ষমা প্রার্থনা করুন — এটি আল্লাহর প্রতি তাদের যে দায়, তা নিয়ে; আর এখানে ক্ষতিগ্রস্ত পক্ষকেই বলা হচ্ছে অপরাধীর জন্য দোয়া করতে। 'ওয়া শাবিরহুম ফিল আমর' — আর কাজে তাদের সঙ্গে পরামর্শ করুন — এটি তাদের পূর্ণ মর্যাদায় ফিরিয়ে আনে। যে ক্ষমা আস্থা ফিরিয়ে দেওয়ার আগেই থেমে যায়, এই ধারাবাহিকতা তার কথা বলছে না।"
          },
          {
            "en": "Then the turn: fa idha 'azamta fatawakkal 'alallah, and when you have resolved, rely upon Allah. The commentators note the shift from consulting the many — shawirhum, consult them — to a resolve that is yours alone, 'azamta in the singular. Everyone is consulted; one person decides. Reliance is placed after the decision, not instead of it, which is why the classical scholars treat tawakkul as the companion of effort rather than its replacement. Allah loves those who rely upon Him, the verse concludes.",
            "bn": "এরপর মোড়: ফা-ইযা 'আযামতা ফাতাওয়াক্কাল 'আলাল্লাহ — আর যখন আপনি সংকল্প করে ফেলবেন, তখন আল্লাহর ওপর ভরসা করুন। মুফাসসিরগণ লক্ষ করেন, 'শাবিরহুম' — অনেকের সঙ্গে পরামর্শ — থেকে ভাষা সরে যায় 'আযামতা'-য়, যে সংকল্প একার। পরামর্শ নেওয়া হয় সবার, সিদ্ধান্ত নেন একজন। ভরসা রাখা হয় সিদ্ধান্তের পরে — সিদ্ধান্তের বদলে নয়; এ কারণেই ধ্রুপদী আলিমগণ তাওয়াক্কুলকে চেষ্টার বিকল্প নয়, বরং সঙ্গী হিসেবে দেখেন। আয়াত শেষ হয় এই কথায় যে আল্লাহ ভরসাকারীদের ভালোবাসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How He ﷺ Consulted",
          "bn": "তিনি ﷺ কীভাবে পরামর্শ করতেন"
        },
        "p": [
          {
            "en": "At-Tirmidhi reports from Abu Hurayrah (RA) that he never saw anyone consult his companions more than the Prophet ﷺ did. The seerah records bear this out. Ibn Ishaq's account, preserved by Ibn Hisham, describes Salman al-Farisi (RA) proposing a trench around Madinah, a tactic unknown to the Arabs, and the proposal being adopted. The defence of the city that year was built on advice taken from a man who was not an Arab at all.",
            "bn": "তিরমিযী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে তিনি নবী ﷺ-এর চেয়ে বেশি সাহাবীদের সঙ্গে পরামর্শ করতে আর কাউকে দেখেননি। সীরাতের বিবরণও তা-ই বলে। ইবনে হিশামের মাধ্যমে সংরক্ষিত ইবনে ইসহাকের বর্ণনায় আছে, সালমান ফারসী (রাঃ) মদীনার চারপাশে পরিখা খননের প্রস্তাব দেন — যে কৌশল আরবদের অজানা ছিল — এবং প্রস্তাবটি গৃহীত হয়। সে বছর শহরের প্রতিরক্ষা দাঁড়িয়েছিল এমন একজনের পরামর্শের ওপর, যিনি আরবই ছিলেন না।"
          },
          {
            "en": "Al-Bukhari relates that at Hudaybiyah, when the companions were slow to act after a treaty they found bitter, Umm Salamah (RA) advised the Prophet ﷺ to go out and perform the rites himself without addressing anyone, and that when he did so the people followed. Consultation in his practice was not limited to a council of the senior, and it was not a formality performed before a decision he had already fixed.",
            "bn": "বুখারী বর্ণনা করেন, হুদায়বিয়ায় যখন সাহাবীরা তিক্ত মনে হওয়া এক সন্ধির পর কাজে এগোতে দেরি করছিলেন, তখন উম্মে সালামা (রাঃ) নবী ﷺ-কে পরামর্শ দেন যে তিনি যেন কাউকে কিছু না বলে নিজেই বেরিয়ে গিয়ে কাজগুলো সম্পন্ন করেন; আর তিনি তা করলে মানুষ তাঁকে অনুসরণ করে। তাঁর আমলে পরামর্শ কেবল প্রবীণদের পরিষদে সীমিত ছিল না, আর তা আগেই স্থির করা সিদ্ধান্তের আগে সেরে নেওয়া কোনো আনুষ্ঠানিকতাও ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Scholars Take From It",
          "bn": "আলিমগণ যা গ্রহণ করেন"
        },
        "p": [
          {
            "en": "The majority hold that al-amr, the matter, refers to affairs on which no revelation has settled the question, which is where judgement is genuinely needed. Some early authorities read the command as binding on the Prophet ﷺ himself, so that consultation was a duty rather than a courtesy even for the one receiving revelation. That reading is what later scholars leaned on when arguing that leadership without consultation departs from the prophetic pattern.",
            "bn": "অধিকাংশ আলিমের মত হলো, 'আল-আমর' বলতে সেসব বিষয় বোঝানো হয়েছে যেগুলোর মীমাংসা ওহী করে দেয়নি — অর্থাৎ যেখানে প্রকৃতপক্ষে বিচারবুদ্ধির প্রয়োজন। প্রাচীন কিছু কর্তৃপক্ষ আদেশটিকে স্বয়ং নবী ﷺ-এর ওপর অবশ্যপালনীয় হিসেবে পড়েছেন, ফলে ওহীপ্রাপ্ত ব্যক্তির জন্যও পরামর্শ ছিল সৌজন্য নয়, কর্তব্য। পরবর্তী আলিমগণ এই পাঠের ওপরই ভর করেছেন যখন তাঁরা বলেছেন যে পরামর্শহীন নেতৃত্ব নববী রীতি থেকে সরে যায়।"
          },
          {
            "en": "They also read the opening clause as an argument about method in calling people to Islam. If harshness would have emptied the space around the Prophet ﷺ himself, whose truthfulness was being confirmed by revelation, then no caller since has a stronger case for severity. Ibn Kathir and others relate the verse in connection with the wider Quranic instruction to invite with wisdom and good exhortation, as in 16:125.",
            "bn": "তাঁরা আয়াতের প্রথম অংশটিকেও ইসলামের দাওয়াতের পদ্ধতি নিয়ে একটি যুক্তি হিসেবে পড়েন। কঠোরতা যদি স্বয়ং নবী ﷺ-এর চারপাশটাই খালি করে দিত — যাঁর সত্যবাদিতা ওহী দ্বারা নিশ্চিত হচ্ছিল — তবে তাঁর পরে কোনো দাঈর পক্ষেই রূঢ়তার পক্ষে শক্তিশালী যুক্তি থাকে না। ইবনে কাসীরসহ অন্যরা আয়াতটিকে কুরআনের বৃহত্তর নির্দেশনার সঙ্গে যুক্ত করেন — যেমন 16:125-এ হিকমত ও উত্তম উপদেশ দিয়ে আহ্বান করার কথা বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "In Everyday Authority",
          "bn": "দৈনন্দিন কর্তৃত্বে"
        },
        "p": [
          {
            "en": "Most people exercise authority somewhere: over a team, a classroom, a household, a volunteer group. The verse offers a usable sequence for the moment after something has gone wrong. Deal with the personal grievance first, so that the correction is not carrying resentment. Then bring the person back into the conversation rather than quietly writing them off. Then decide, and stop relitigating the decision in front of everyone.",
            "bn": "প্রায় সবাই কোথাও না কোথাও কর্তৃত্ব চর্চা করে: কোনো দল, শ্রেণিকক্ষ, পরিবার কিংবা স্বেচ্ছাসেবী গোষ্ঠীর ওপর। কিছু একটা ভুল হয়ে যাওয়ার পরের মুহূর্তটির জন্য আয়াতটি একটি ব্যবহারযোগ্য ক্রম দেয়। আগে ব্যক্তিগত অভিযোগটি মিটিয়ে ফেলুন, যাতে সংশোধনের সঙ্গে ক্ষোভ মিশে না থাকে। তারপর মানুষটিকে নিঃশব্দে বাতিল করে না দিয়ে আলোচনায় ফিরিয়ে আনুন। এরপর সিদ্ধান্ত নিন, আর সবার সামনে বারবার সেই সিদ্ধান্তের বিচার খুলে বসবেন না।"
          },
          {
            "en": "The verse also sets a diagnostic that is uncomfortable to apply honestly. If people around you go quiet, stop volunteering information, or leave, the verse suggests looking first at tone rather than at their commitment. And it locates gentleness in the right place: not as a personality type some are lucky to have, but as a mercy that can be asked for, practised, and lost through neglect.",
            "bn": "আয়াতটি এমন একটি পরীক্ষাও দাঁড় করায়, যা সৎভাবে প্রয়োগ করা অস্বস্তিকর। আপনার চারপাশের মানুষ যদি চুপ হয়ে যায়, তথ্য দেওয়া বন্ধ করে দেয়, কিংবা সরে যায় — আয়াতটি ইঙ্গিত দেয়, তাদের নিষ্ঠার দিকে তাকানোর আগে নিজের কথার সুরের দিকে তাকাতে। আর এটি কোমলতাকে সঠিক জায়গায় বসায়: এটি কারও ভাগ্যক্রমে পাওয়া স্বভাব নয়, বরং এমন এক রহমত যা চাওয়া যায়, চর্চা করা যায়, এবং অবহেলায় হারিয়েও ফেলা যায়।"
          }
        ]
      }
    ]
  },
  "3:160": {
    "sections": [
      {
        "h": {
          "en": "The Reason Behind the Command",
          "bn": "নির্দেশের পেছনের কারণ"
        },
        "p": [
          {
            "en": "The verse immediately before this one ends with an instruction: when you have resolved upon a matter, rely upon Allah, for Allah loves those who rely. 3:159 gives the command; this verse, following directly, gives the reason. Reliance is not asked for here because it steadies the nerves, nor because effort is somehow unworthy of a believer. It is asked for because of a plain fact about how outcomes are actually produced, and the verse states that fact in two halves.",
            "bn": "ঠিক আগের আয়াতটি শেষ হয় একটি নির্দেশ দিয়ে: যখন কোনো বিষয়ে সংকল্প করবে, তখন আল্লাহর ওপর ভরসা করো, কারণ আল্লাহ ভরসাকারীদের ভালোবাসেন। 3:159 আয়াতে নির্দেশ, আর ঠিক পরে আসা এই আয়াতে সেই নির্দেশের কারণ। এখানে ভরসা করতে বলা হয়নি এ কারণে যে তাতে স্নায়ু স্থির হয়, কিংবা পরিশ্রম মুমিনের জন্য কোনোভাবে নিচু কিছু বলে। বলা হয়েছে পরিণতি আসলে কীভাবে তৈরি হয় সে সম্পর্কে একটি সরল বাস্তবতার কারণে, আর আয়াতটি সেই বাস্তবতাকে দুই ভাগে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nasr and Khidhlan",
          "bn": "নাসর ও খিযলান"
        },
        "p": [
          {
            "en": "In yansurkumullahu fala ghaliba lakum. Nasr is help given to someone who is contending against an opponent, not assistance in general. Its opposite in the verse is yakhdhulkum, from khidhlan, and that word is not neutral absence either. Khidhlan is withdrawing support from someone who was counting on it and had a claim to it. So the two possibilities in the verse are not help and nothing; they are being backed and being left, and both are described as acts.",
            "bn": "'ইন ইয়ানসুরকুমুল্লাহু ফালা গালিবা লাকুম।' 'নাসর' মানে প্রতিপক্ষের বিরুদ্ধে লড়ছে এমন কাউকে দেওয়া সাহায্য, সাধারণভাবে যেকোনো সহায়তা নয়। আয়াতে এর বিপরীতে আছে 'ইয়াখযুলকুম', যা এসেছে 'খিযলান' থেকে, আর সে শব্দটিও নিরপেক্ষ অনুপস্থিতি নয়। 'খিযলান' মানে এমন কারও কাছ থেকে সমর্থন প্রত্যাহার করা, যে তার ওপর ভরসা করছিল এবং যার তাতে দাবি ছিল। তাই আয়াতের দুই সম্ভাবনা সাহায্য ও শূন্যতা নয়; সম্ভাবনা দুটি হলো পাশে থাকা আর ছেড়ে দেওয়া, আর দুটিকেই কাজ হিসেবে বর্ণনা করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Statement and a Question",
          "bn": "একটি বিবৃতি ও একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "The two halves are not built the same way, and the difference is the point. The first is a flat statement: there is no one who can overcome you. The second is a question: who then is there to help you after Him? A statement invites disagreement; a question shaped like this leaves the reader with nothing to say back, because any name he could offer is itself something Allah made and sustains. The verse wins the second half by refusing to argue it.",
            "bn": "দুই অর্ধেক একইভাবে গড়া নয়, আর এই পার্থক্যটিই মূল কথা। প্রথমটি সরল বিবৃতি: কেউ তোমাদের ওপর বিজয়ী হতে পারবে না। দ্বিতীয়টি প্রশ্ন: তবে তাঁর পরে কে আছে যে তোমাদের সাহায্য করবে? বিবৃতি দ্বিমতের সুযোগ দেয়; কিন্তু এমন আকারের প্রশ্ন পাঠকের হাতে ফিরিয়ে বলার মতো কিছু রাখে না, কারণ সে যে নামই দিতে পারত, তা-ও তো আল্লাহরই সৃষ্টি ও তাঁরই রক্ষণাধীন। আয়াতটি দ্বিতীয় অর্ধেকে জেতে তর্কই না করে।"
          },
          {
            "en": "It is also worth noticing who is being addressed. This is not a threat aimed at enemies; it is a caution given to the believers themselves, in a surah that has just walked through a battle in which they were badly hurt. The same sentence that removes fear of the strong removes confidence in the self. Nothing is left in the middle between those two, which is exactly why the verse ends where it does.",
            "bn": "কাকে সম্বোধন করা হচ্ছে, তাও লক্ষ করার মতো। এটি শত্রুদের উদ্দেশে কোনো হুমকি নয়; এটি স্বয়ং মুমিনদের প্রতি সতর্কবার্তা — এমন এক সূরায়, যা এইমাত্র এমন এক যুদ্ধের ভেতর দিয়ে হেঁটে এলো যেখানে তারা মারাত্মকভাবে আহত হয়েছিল। যে বাক্য শক্তিমানের ভয় সরায়, সেই একই বাক্য নিজের ওপর আত্মবিশ্বাসও সরিয়ে দেয়। এ দুইয়ের মাঝখানে কিছুই অবশিষ্ট থাকে না, আর ঠিক এ কারণেই আয়াতটি যেখানে শেষ হয় সেখানেই শেষ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Let the Believers Rely",
          "bn": "মুমিনরা যেন ভরসা করে"
        },
        "p": [
          {
            "en": "Wa 'ala Allahi falyatawakkali al-mu'minun. The verb carries the lam of command: let them rely. Tawakkul is therefore an action a person performs, not a mood that arrives when circumstances improve. As-Sa'di defines it as the heart's reliance upon Allah in obtaining what benefits and repelling what harms, together with genuine trust in Him. The definition has two parts, and people who quote it usually keep only the second.",
            "bn": "'ওয়া আলাল্লাহি ফালইয়াতাওয়াক্কালিল মুমিনূন।' ক্রিয়াপদটি আদেশের 'লাম' বহন করে: তারা যেন ভরসা করে। তাই তাওয়াক্কুল এমন একটি কাজ যা মানুষ সম্পাদন করে, পরিস্থিতি ভালো হলে যে মেজাজ আপনি এসে যায় তা নয়। আস-সা'দী একে সংজ্ঞায়িত করেন এভাবে: কল্যাণ অর্জনে ও ক্ষতি প্রতিহত করায় অন্তরের আল্লাহর ওপর নির্ভরতা, তাঁর প্রতি প্রকৃত আস্থাসহ। সংজ্ঞাটির দুটি অংশ আছে, আর যাঁরা এটি উদ্ধৃত করেন তাঁরা সাধারণত কেবল দ্বিতীয়টিই রাখেন।"
          },
          {
            "en": "The verse also ties reliance to faith by naming the ones commanded: the believers. 5:23 makes the tie explicit in the words of two God-fearing men to a hesitating people, rely upon Allah if you are believers. And the same closing formula has already appeared earlier in this surah, at 3:122, after an account of two groups who nearly lost their nerve. The refrain is placed each time beside a moment of weakness rather than a moment of triumph.",
            "bn": "আয়াতটি যাদের নির্দেশ দেওয়া হচ্ছে তাদের নাম নিয়েই ভরসাকে ঈমানের সঙ্গে বেঁধে দেয়: মুমিনগণ। 5:23 আয়াতে দুইজন আল্লাহভীরু ব্যক্তির কথায় সম্পর্কটি স্পষ্ট করা হয়েছে, যা তাঁরা এক দ্বিধাগ্রস্ত জাতিকে বলেছিলেন — আল্লাহর ওপর ভরসা করো, যদি তোমরা মুমিন হও। আর এই সূরারই আগের অংশে 3:122 আয়াতে একই সমাপ্তি-বাক্য এসেছে, এমন দুই দলের বিবরণের পরে যারা প্রায় সাহস হারিয়ে ফেলেছিল। প্রতিবারই এই ধুয়াটি বসানো হয়েছে দুর্বলতার মুহূর্তের পাশে, বিজয়ের মুহূর্তের পাশে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Substitute for Means",
          "bn": "উপায়ের বিকল্প নয়"
        },
        "p": [
          {
            "en": "The verse's own neighbourhood blocks the lazy reading. 3:159 commands consultation and firm resolve before it commands reliance, so the order is deliberate: take counsel, decide, act, and rely. 4:71 instructs the believers to take their precaution when they go out. And this very surah traces the reverse case in 3:152, where the reversal at Uhud followed disputing over the order and disobeying it after they had been shown what they loved.",
            "bn": "আয়াতটির নিজের প্রতিবেশই অলস পাঠকে আটকে দেয়। 3:159 আয়াতে ভরসার নির্দেশের আগে পরামর্শ ও দৃঢ় সংকল্পের নির্দেশ আছে, তাই ক্রমটি উদ্দেশ্যপ্রণোদিত: পরামর্শ করো, সিদ্ধান্ত নাও, কাজ করো, আর ভরসা করো। 4:71 আয়াতে মুমিনদের নির্দেশ দেওয়া হয়েছে বেরোনোর সময় সতর্কতা অবলম্বন করতে। আর এই সূরাই 3:152 আয়াতে বিপরীত ঘটনাটির সূত্র ধরিয়ে দেয়, যেখানে উহুদের বিপর্যয় এসেছিল নির্দেশ নিয়ে বিতর্ক ও তা অমান্য করার পরে — তারা যা ভালোবাসে তা দেখিয়ে দেওয়ার পরেও।"
          },
          {
            "en": "So reliance replaces anxiety about the result, never work on the causes. Lived out, the verse cuts in two directions at once. When a person is strong, it tells him his advantages did not create his success, so arrogance has nothing to stand on. When he is outmatched, it tells him the shortfall was never the deciding factor, so despair has nothing to stand on either. 3:126 states the conclusion of both halves plainly: victory is only from Allah, the Exalted in Might, the Wise.",
            "bn": "তাই ভরসা ফলাফল নিয়ে উদ্বেগের জায়গা নেয়, কারণ নিয়ে পরিশ্রমের জায়গা কখনোই নয়। জীবনে প্রয়োগ করলে আয়াতটি একসঙ্গে দুই দিকেই কাটে। মানুষ যখন শক্তিশালী, তখন এটি তাকে বলে যে তার সুবিধাগুলো তার সাফল্য তৈরি করেনি, ফলে অহংকারের দাঁড়ানোর জায়গা থাকে না। আর সে যখন সংখ্যায় ও শক্তিতে পিছিয়ে, তখন এটি তাকে বলে যে সেই ঘাটতিই কখনো নির্ণায়ক ছিল না, ফলে হতাশারও দাঁড়ানোর জায়গা থাকে না। 3:126 আয়াতে দুই অর্ধেকের সিদ্ধান্তই স্পষ্ট করে বলা হয়েছে: সাহায্য কেবল আল্লাহরই কাছ থেকে, যিনি পরাক্রমশালী, প্রজ্ঞাময়।"
          }
        ]
      }
    ]
  },
  "3:173": {
    "sections": [
      {
        "h": {
          "en": "Who Is Being Described",
          "bn": "কাদের বর্ণনা দেওয়া হচ্ছে"
        },
        "p": [
          {
            "en": "This verse does not begin a new subject; it continues a sentence. 3:172 describes those who responded to Allah and the Messenger after injury had already struck them, promising a great reward to those among them who did good and feared Allah. The people in this verse are that same group — men who had already been wounded and who went out again. Commentators relate the passage to the march out to Hamra' al-Asad following Uhud; others relate it to the later appointment at Badr, and the wording itself does not decide between them.",
            "bn": "এই আয়াত নতুন কোনো প্রসঙ্গ শুরু করে না; এটি একটি বাক্যের ধারাবাহিকতা। 3:172 আয়াতে তাদের বর্ণনা আছে, যারা আঘাতপ্রাপ্ত হওয়ার পরেও আল্লাহ ও রাসূলের ডাকে সাড়া দিয়েছিল, আর তাদের মধ্যে যারা সৎকাজ করে ও তাকওয়া অবলম্বন করে তাদের জন্য মহা প্রতিদানের প্রতিশ্রুতি দেওয়া হয়েছে। এই আয়াতের লোকেরা সেই একই দল — যারা আগেই আহত হয়েছিল এবং আবার বেরিয়ে পড়েছিল। মুফাসসিরগণ কেউ অংশটিকে উহুদের পরের হামরাউল আসাদের অভিযানের সঙ্গে যুক্ত করেন; কেউ আবার পরবর্তী বদরের নির্ধারিত সাক্ষাতের সঙ্গে যুক্ত করেন, আর শব্দগুলো নিজে থেকে এ দুটির মধ্যে ফয়সালা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The People Have Gathered",
          "bn": "লোকেরা জড়ো হয়েছে"
        },
        "p": [
          {
            "en": "Alladhina qala lahumu an-nasu inna an-nasa qad jama'u lakum fakhshawhum. The word an-nas, the people, appears twice in one line, once for the messengers of the news and once for the army they described. The Quran names neither. What it does name comes two verses later: 3:175 says that it is only Satan who frightens you of his supporters, so do not fear them but fear Me, if you are believers. The report may have been accurate; the fear it was designed to produce had a different author.",
            "bn": "'আল্লাযীনা ক্বালা লাহুমুন নাসু ইন্নান নাসা ক্বাদ জামাঊ লাকুম ফাখশাওহুম।' এক লাইনে 'আন-নাস' অর্থাৎ 'লোকেরা' শব্দটি দুইবার আসে — একবার খবরদাতাদের জন্য, একবার তারা যে বাহিনীর কথা বলছিল তার জন্য। কুরআন কারও নাম নেয় না। তবে যার নাম নেয় তা আসে দুই আয়াত পরে: 3:175 আয়াতে বলা হয়েছে, ওটা তো শয়তানই, সে তোমাদের তার বন্ধুদের ভয় দেখায়; তোমরা তাদের ভয় করো না, আমাকেই ভয় করো, যদি তোমরা মুমিন হও। খবরটি হয়তো সঠিকই ছিল; কিন্তু তা যে ভয়টি তৈরি করতে চেয়েছিল, তার রচয়িতা ছিল অন্য কেউ।"
          }
        ]
      },
      {
        "h": {
          "en": "It Increased Them in Faith",
          "bn": "তা তাদের ঈমান বাড়িয়ে দিল"
        },
        "p": [
          {
            "en": "Fazadahum imanan — so it increased them in faith. The grammar is worth pausing over: the thing that does the increasing is the frightening report itself. The same sentence spoken to two men empties one and fills the other, which means the outcome was never in the news. 8:2 lists exactly this among the marks of the believers, that when His verses are recited their faith is increased and upon their Lord they rely. 33:22 records the same reaction at the Trench, where the sight of the massed confederates increased them only in faith and acceptance.",
            "bn": "'ফাযাদাহুম ঈমানা' — ফলে তা তাদের ঈমান বাড়িয়ে দিল। ব্যাকরণটির ওপর একটু থামা দরকার: যে জিনিসটি বৃদ্ধি ঘটাচ্ছে তা স্বয়ং ওই ভীতিকর খবরটিই। একই বাক্য দুই ব্যক্তিকে বললে একজনকে খালি করে দেয় আর অন্যজনকে ভরে দেয়; অর্থাৎ পরিণতিটি কখনোই খবরের ভেতরে ছিল না। 8:2 আয়াতে ঠিক এটিই মুমিনদের লক্ষণের মধ্যে গণ্য করা হয়েছে — তাঁর আয়াত তিলাওয়াত করা হলে তাদের ঈমান বাড়ে এবং তারা তাদের রবের ওপর ভরসা করে। 33:22 আয়াতে খন্দকের সময়ে একই প্রতিক্রিয়া লিপিবদ্ধ আছে, যেখানে সম্মিলিত বাহিনীকে দেখে তাদের ঈমান ও আনুগত্যই কেবল বৃদ্ধি পেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Hasbunallahu wa Ni'mal Wakil",
          "bn": "হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল"
        },
        "p": [
          {
            "en": "Their answer is four words in Arabic and contains no request. Hasb means what suffices, the amount that closes an account and leaves nothing owing, so hasbunallah says Allah is our sufficiency. A wakil is not a helper who lends a hand; he is the one to whom a matter is handed over entirely to manage on your behalf. Ni'mal wakil, how excellent the One entrusted, is praise of the manager rather than instruction about the outcome.",
            "bn": "তাদের জবাবটি আরবিতে চারটি শব্দের, আর তাতে কোনো আবেদন নেই। 'হাসব' মানে যা যথেষ্ট, যে পরিমাণ হিসাব চুকিয়ে দেয় এবং কিছুই বাকি রাখে না; তাই 'হাসবুনাল্লাহ' মানে আল্লাহই আমাদের যথেষ্টতা। 'ওয়াকীল' এমন সাহায্যকারী নন যিনি হাত লাগান; তিনি সেই সত্তা, যাঁর কাছে বিষয়টি সম্পূর্ণভাবে সঁপে দেওয়া হয় আপনার পক্ষে পরিচালনার জন্য। 'নি'মাল ওয়াকীল' অর্থাৎ কতই না উত্তম সেই কর্মবিধায়ক — এটি পরিণতি নিয়ে নির্দেশ নয়, বরং যাঁর হাতে ভার দেওয়া হলো তাঁর প্রশংসা।"
          },
          {
            "en": "Notice what the sentence does not do. It does not ask for the enemy to be scattered or for the danger to pass. It states a relationship and leaves the outcome inside it. 65:3 gives the general rule behind the moment: whoever relies upon Allah, then He is sufficient for him. 39:36 asks the same thing as a question — is Allah not sufficient for His servant? — and puts it, tellingly, immediately alongside people making threats.",
            "bn": "লক্ষ করুন বাক্যটি কী করে না। এটি শত্রু ছত্রভঙ্গ হওয়ার জন্য বা বিপদ কেটে যাওয়ার জন্য কিছু চায় না। এটি একটি সম্পর্ক ঘোষণা করে আর পরিণতিকে সেই সম্পর্কের ভেতরে রেখে দেয়। 65:3 আয়াতে এই মুহূর্তের পেছনের সাধারণ বিধানটি আছে: যে আল্লাহর ওপর ভরসা করে, তিনিই তার জন্য যথেষ্ট। 39:36 আয়াতে একই কথা প্রশ্ন আকারে আছে — আল্লাহ কি তাঁর বান্দার জন্য যথেষ্ট নন? — আর তা রাখা হয়েছে, বেশ তাৎপর্যপূর্ণভাবে, হুমকি দেওয়া লোকদের প্রসঙ্গের ঠিক পাশেই।"
          }
        ]
      },
      {
        "h": {
          "en": "As al-Bukhari Reports It",
          "bn": "বুখারী যেভাবে বর্ণনা করেন"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Ibn Abbas (RA) that hasbunallahu wa ni'mal wakil was said by Ibrahim (AS) when he was cast into the fire, and that it was said by Muhammad ﷺ when they said to him, indeed the people have gathered against you so fear them, and it increased them in faith and they said, sufficient for us is Allah and He is the best Disposer of affairs. The report names two occasions and keeps them apart, and it is worth quoting in that shape rather than fusing them into one scene.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন যে 'হাসবুনাল্লাহু ওয়া নি'মাল ওয়াকীল' কথাটি ইবরাহীম (আঃ) বলেছিলেন যখন তাঁকে আগুনে নিক্ষেপ করা হয়েছিল, আর কথাটি মুহাম্মাদ ﷺ বলেছিলেন যখন তাঁদের বলা হয়েছিল, লোকেরা তোমাদের বিরুদ্ধে জড়ো হয়েছে, কাজেই তাদের ভয় করো — তখন তা তাদের ঈমান বাড়িয়ে দিল এবং তারা বলল, আমাদের জন্য আল্লাহই যথেষ্ট এবং তিনি কতই না উত্তম কর্মবিধায়ক। বর্ণনাটি দুটি উপলক্ষের নাম নেয় এবং সেগুলোকে আলাদা রাখে, আর দুটিকে এক দৃশ্যে মিশিয়ে না ফেলে ঠিক এই আকারেই উদ্ধৃত করা উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "What Came Back With Them",
          "bn": "তারা কী নিয়ে ফিরল"
        },
        "p": [
          {
            "en": "3:174 records the sequel: they returned with favour from Allah and bounty, no harm having touched them, and they had pursued the pleasure of Allah. The order in the passage is the lesson. The words were said while the danger was still credible and the outcome still unknown; the safety is reported afterwards. Had the sentence been spoken only once the threat had dissolved, it would have been a comment on the news rather than an answer to it.",
            "bn": "3:174 আয়াতে পরবর্তী ঘটনা লিপিবদ্ধ: তারা আল্লাহর নিয়ামত ও অনুগ্রহসহ ফিরে এলো, কোনো অনিষ্ট তাদের স্পর্শ করেনি, আর তারা আল্লাহর সন্তুষ্টিরই অনুসরণ করেছিল। অংশটির ক্রমই এখানে শিক্ষা। কথাগুলো বলা হয়েছিল যখন বিপদ তখনো বিশ্বাসযোগ্য আর পরিণতি তখনো অজানা; নিরাপত্তার কথা এসেছে পরে। হুমকি মিলিয়ে যাওয়ার পরে যদি বাক্যটি বলা হতো, তবে তা খবরের জবাব না হয়ে খবরের ওপর মন্তব্য হয়ে যেত।"
          },
          {
            "en": "That is how the phrase is meant to be used. It belongs at the start of a frightening hour, not at the end of it, and it is said about the specific thing that has frightened you rather than in general. Said early, it settles the question of who is handling the matter and frees the person to do the next sensible thing. Said late, it is only relief wearing the clothes of trust.",
            "bn": "বাক্যটির ব্যবহার এভাবেই উদ্দিষ্ট। এর জায়গা ভীতিকর ঘণ্টাটির শুরুতে, শেষে নয়; আর তা বলা হয় ঠিক যে জিনিসটি আপনাকে ভয় পাইয়েছে তার ব্যাপারে, ঢালাওভাবে নয়। আগেভাগে বললে তা এই প্রশ্নটি মীমাংসা করে দেয় যে বিষয়টি কে সামলাচ্ছেন, আর মানুষকে পরবর্তী বুদ্ধিমানের কাজটি করার জন্য মুক্ত করে দেয়। দেরিতে বললে তা কেবল স্বস্তি — ভরসার পোশাক পরা।"
          }
        ]
      }
    ]
  },
  "3:185": {
    "sections": [
      {
        "h": {
          "en": "The Sentence No One Escapes",
          "bn": "যে রায় কেউ এড়ায় না"
        },
        "p": [
          {
            "en": "Kullu nafsin dha'iqatu al-mawt — every soul will taste death. The subject is universal by construction: every soul, without exception for rank, piety or usefulness. Even the Prophet ﷺ is told elsewhere, in 39:30, indeed you will die and indeed they will die. The verb taste is deliberate. A taste is brief and passes; the verse names death as something undergone and gone through, not a wall but a doorway with something on the other side.",
            "bn": "কুল্লু নাফসিন যাইকাতুল মাউত — প্রতিটি প্রাণ মৃত্যুর স্বাদ গ্রহণ করবে। গঠনগতভাবেই বিষয়টি সর্বজনীন: প্রতিটি প্রাণ — পদমর্যাদা, তাকওয়া বা প্রয়োজনীয়তার কোনো ব্যতিক্রম ছাড়া। এমনকি নবী ﷺ-কেও অন্যত্র, 39:30 আয়াতে, বলা হয়েছে: নিশ্চয়ই তুমি মরবে এবং নিশ্চয়ই তারাও মরবে। 'স্বাদ' ক্রিয়াটি ইচ্ছাকৃত। স্বাদ ক্ষণিকের, কেটে যায়; আয়াতটি মৃত্যুকে বলে এমন কিছু যা পার হয়ে যেতে হয় — দেয়াল নয়, বরং এক দরজা, যার ওপারে কিছু আছে।"
          },
          {
            "en": "The verse stands in the aftermath of Uhud, where the community buried seventy of its best, and near the passage declaring in 3:169 that those killed in Allah's way are not to be thought of as dead but alive with their Lord, receiving provision. Against that backdrop the verse is not morbid; it levels the field. The martyr and the tyrant both taste death; what distinguishes them is everything that comes after the taste.",
            "bn": "আয়াতটি দাঁড়িয়ে আছে উহুদের পরবর্তী সময়ে — যখন সম্প্রদায়টি তাদের শ্রেষ্ঠ সত্তরজনকে দাফন করেছে — এবং সেই অনুচ্ছেদের কাছেই, যেখানে 3:169 ঘোষণা করে: আল্লাহর পথে নিহতদের মৃত ভেবো না, বরং তারা জীবিত, তাদের রবের কাছে রিযিকপ্রাপ্ত। এই পটভূমিতে আয়াতটি বিষণ্ণতার নয়; এটি মাঠ সমতল করে। শহীদ ও জালিম — দুজনেই মৃত্যুর স্বাদ নেয়; তাদের আলাদা করে স্বাদের পরে যা আসে, তার সবটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "Wages Paid in Full — Later",
          "bn": "মজুরি পূর্ণ পরিশোধ — পরে"
        },
        "p": [
          {
            "en": "And you will only be paid your wages in full on the Day of Resurrection. The word tuwaffawna means to be paid completely, with nothing withheld. The verse thereby explains this world's most troubling feature: accounts here never quite balance. The generous die unthanked, the cruel die comfortable, and the best deeds often cost the most. The Quran's answer is not that the ledger is wrong but that it has not been closed yet.",
            "bn": "আর কিয়ামতের দিনেই কেবল তোমাদের মজুরি পূর্ণ মাত্রায় দেওয়া হবে। 'তুওয়াফফাওনা' শব্দের অর্থ পুরোপুরি পরিশোধ পাওয়া — কিছুই আটকে না রেখে। আয়াতটি এভাবে দুনিয়ার সবচেয়ে পীড়াদায়ক বৈশিষ্ট্যটির ব্যাখ্যা দেয়: এখানে হিসাব কখনোই ঠিকঠাক মেলে না। দানশীল মরে অকৃতজ্ঞতা নিয়ে, নিষ্ঠুর মরে আরামে, আর শ্রেষ্ঠ কাজগুলোর দামই প্রায়ই সবচেয়ে বেশি। কুরআনের জবাব এই নয় যে খাতাটা ভুল — বরং খাতাটা এখনো বন্ধ হয়নি।"
          },
          {
            "en": "For the one wronged, this clause is patience with a date attached; for the one doing good in obscurity, it is a guarantee that nothing evaporates, in step with 99:7-8 — whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it. Partial payments may arrive in this life, but the verse relocates the settlement, and therefore the scorekeeping, to a Day that misses nothing.",
            "bn": "মজলুমের জন্য এই অংশটি তারিখসহ ধৈর্য; আর যে নীরবে-নিভৃতে ভালো কাজ করে, তার জন্য নিশ্চয়তা — কিছুই উবে যায় না; 99:7-8 এর সঙ্গে তাল মিলিয়ে: যে অণু পরিমাণ ভালো করবে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করবে সে-ও তা দেখবে। আংশিক পরিশোধ এ জীবনেও আসতে পারে, কিন্তু আয়াতটি চূড়ান্ত নিষ্পত্তিকে — আর তাই হিসাব রাখাটাকেও — সরিয়ে নেয় এমন এক দিনে, যার নজর কিছুই এড়ায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nudged Away From the Fire",
          "bn": "আগুন থেকে সরিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Then the verse defines success, and the definition is worth reading slowly: whoever is zuhziha — drawn away, nudged aside — from the Fire and admitted to the Garden, he has attained the triumph. Zahzahah is removal by degrees, an inch at a time, as if the Fire's pull were close enough that escaping it is itself the headline. Success is stated in its minimum honest form: out of the Fire, into the Garden — that one has won, faza.",
            "bn": "এরপর আয়াতটি সাফল্যের সংজ্ঞা দেয়, আর সংজ্ঞাটি ধীরে পড়ার মতো: যাকে আগুন থেকে 'যুহযিহা' — টেনে সরানো, একটু একটু করে সরিয়ে নেওয়া — হলো এবং জান্নাতে প্রবেশ করানো হলো, সে-ই সফলকাম। 'যাহযাহা' মানে ধাপে ধাপে সরানো, এক ইঞ্চি করে — যেন আগুনের টান এতই কাছে যে তা থেকে রেহাই পাওয়াটাই মূল শিরোনাম। সাফল্য বলা হয়েছে তার ন্যূনতম সৎ রূপে: আগুনের বাইরে, জান্নাতের ভেতরে — সে-ই জিতেছে, 'ফাযা'।"
          },
          {
            "en": "Every other scoreboard is silently retired by that sentence. Wealth accumulated, positions reached, followers counted — none of them appear in the Quran's definition of the win. A person can lose every worldly contest and win absolutely, or sweep every worldly contest and lose absolutely. The verse hands its reader the only final metric and leaves him to re-rank his current pursuits against it.",
            "bn": "ওই এক বাক্যেই অন্য সব স্কোরবোর্ড নীরবে অবসরে যায়। জমানো সম্পদ, ছোঁয়া পদ, গোনা অনুসারী — কুরআনের জয়ের সংজ্ঞায় এদের কেউ নেই। মানুষ দুনিয়ার প্রতিটি প্রতিযোগিতায় হেরেও চূড়ান্তভাবে জিততে পারে, আবার প্রতিটিতে জিতেও চূড়ান্তভাবে হারতে পারে। আয়াতটি পাঠকের হাতে একমাত্র চূড়ান্ত মাপকাঠিটি তুলে দেয়, আর তার বর্তমান ব্যস্ততাগুলোকে সেই মাপে নতুন করে সাজানোর ভার তাকে দিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Merchandise of Delusion",
          "bn": "প্রতারণার পণ্য"
        },
        "p": [
          {
            "en": "The verse closes by naming the world: the life of this world is nothing but mata' al-ghurur, the enjoyment of delusion. Mata' is a trader's word — goods, provisions, the stock a traveler uses along the way. The world is real enjoyment; the verse does not deny that. The indictment is in the second word: ghurur, deception. The commentators, as-Sa'di among them, direct the charge at a specific error — the world deceives the one who takes it as the destination and lets it eclipse the Hereafter.",
            "bn": "আয়াতটি শেষ হয় দুনিয়ার নাম ধরে: দুনিয়ার জীবন 'মাতাউল গুরূর' — প্রতারণার ভোগসামগ্রী — ছাড়া কিছু নয়। 'মাতা' ব্যবসায়ীর শব্দ — মালপত্র, রসদ, পথিক পথে যা ব্যবহার করে। দুনিয়া সত্যিকারের ভোগ্যবস্তু; আয়াত তা অস্বীকার করে না। অভিযোগটা দ্বিতীয় শব্দে: 'গুরূর' — ধোঁকা। মুফাসসিরগণ — তাঁদের মধ্যে আস-সা'দীও — অভিযোগটি তাক করেন একটি নির্দিষ্ট ভুলের দিকে: দুনিয়া তাকেই ধোঁকা দেয়, যে একে গন্তব্য ধরে নেয় এবং একে আখিরাত ঢেকে দিতে দেয়।"
          },
          {
            "en": "The Quran elsewhere details the mechanism: 57:20 lists the world's phases — play, amusement, adornment, boasting, rivalry in wealth and children — then compares it to rain whose growth delights and then withers. The deception is not in the goods but in the packaging that whispers permanence. A traveler may use the provisions gladly; he is deceived only if he mistakes the roadside inn for home.",
            "bn": "কুরআন অন্যত্র কৌশলটির খুঁটিনাটি দেয়: 57:20 দুনিয়ার পর্যায়গুলো গোনে — খেলা, কৌতুক, সাজসজ্জা, অহংকার, ধনসম্পদ ও সন্তানে প্রতিযোগিতা — তারপর একে তুলনা করে সেই বৃষ্টির সঙ্গে, যার ফলানো ফসল মুগ্ধ করে, তারপর শুকিয়ে যায়। ধোঁকাটা পণ্যে নয়, মোড়কে — যা ফিসফিস করে বলে: এ চিরস্থায়ী। পথিক রসদ সানন্দে ব্যবহার করতেই পারে; সে প্রতারিত কেবল তখনই, যখন পথের সরাইখানাকে সে বাড়ি বলে ভুল করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With the End in View",
          "bn": "শেষকে সামনে রেখে বাঁচা"
        },
        "p": [
          {
            "en": "The verse belongs to a family: 21:35 repeats that every soul tastes death and adds that We test you with evil and with good as a trial; 62:8 warns that the death you flee will meet you. The Quran keeps returning to mortality not to darken life but to focus it. Remembering the end works like a deadline works: it converts vague intentions into scheduled acts, and it drains urgency from things that will not matter at the settlement.",
            "bn": "আয়াতটি একটি পরিবারের সদস্য: 21:35 আবার বলে প্রতিটি প্রাণ মৃত্যুর স্বাদ নেবে, আর যোগ করে — আমরা তোমাদের পরীক্ষা করি মন্দ ও ভালো দিয়ে, পরীক্ষারূপে; 62:8 সতর্ক করে — যে মৃত্যু থেকে পালাও তা তোমার সঙ্গে সাক্ষাৎ করবেই। কুরআন মরণশীলতায় বারবার ফেরে জীবনকে অন্ধকার করতে নয়, ফোকাসে আনতে। শেষের স্মরণ কাজ করে সময়সীমার মতো: এটি অস্পষ্ট নিয়তগুলোকে সূচিবদ্ধ কাজে বদলে দেয়, আর যেসব জিনিস চূড়ান্ত নিষ্পত্তিতে ধরা হবে না, সেগুলোর তাড়া নিঃশেষ করে দেয়।"
          },
          {
            "en": "A concrete exercise: hold one current ambition up against the verse's three clauses. Will it survive the taste of death? Will it count when wages are paid in full? Does it move me an inch away from the Fire? Ambitions that pass may be pursued wholeheartedly; those that fail all three deserve, at minimum, less of the heart than they currently occupy. That periodic audit is this verse turned into a habit.",
            "bn": "একটি সুনির্দিষ্ট অনুশীলন: বর্তমান কোনো একটি উচ্চাশাকে আয়াতের তিনটি অংশের সামনে ধরুন। এটি কি মৃত্যুর স্বাদের পরেও টিকবে? মজুরি পূর্ণ পরিশোধের দিন এটি কি গণনায় আসবে? এটি কি আমাকে আগুন থেকে এক ইঞ্চিও সরায়? যে উচ্চাশা উত্তীর্ণ হয়, তার পেছনে পূর্ণ মন দিয়েই ছোটা যায়; যা তিনটিতেই ফেল করে, তার প্রাপ্য অন্তত এটুকু — হৃদয়ে সে এখন যতটা জায়গা দখল করে আছে, তার চেয়ে কম। এই পর্যায়ক্রমিক নিরীক্ষাই আয়াতটি অভ্যাসে রূপান্তরিত হওয়া।"
          }
        ]
      }
    ]
  },
  "3:186": {
    "sections": [
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "আয়াতটি কোথায় দাঁড়িয়ে আছে"
        },
        "p": [
          {
            "en": "Surah Al Imran gives its long middle stretch to the aftermath of Uhud — the wounds, the rumours, the question of why a community with Allah's Messenger in it should lose a battle. This verse arrives near the end of that stretch. The verse immediately before it, 3:185, says that every soul will taste death and that full payment comes only on the Day of Resurrection. The one immediately after it, 3:187, recalls the covenant taken from those given the Scripture to make it clear and not conceal it.",
            "bn": "সূরা আলে ইমরানের দীর্ঘ মধ্যভাগটি উহুদের পরবর্তী পরিস্থিতির জন্য বরাদ্দ — ক্ষত, গুজব, আর এই প্রশ্ন যে আল্লাহর রাসূল ﷺ যাদের মধ্যে আছেন সেই সম্প্রদায় কেন একটি যুদ্ধে হারবে। এই আয়াতটি সেই অংশের শেষদিকে আসে। ঠিক আগের আয়াত 3:185 বলে, প্রতিটি প্রাণ মৃত্যুর স্বাদ নেবে এবং পূর্ণ প্রতিদান কেবল কিয়ামতের দিনেই হাতে দেওয়া হবে। ঠিক পরের আয়াত 3:187 স্মরণ করায় সেই অঙ্গীকার, যা কিতাবপ্রাপ্তদের কাছ থেকে নেওয়া হয়েছিল — তারা তা মানুষের কাছে স্পষ্ট করে বলবে, গোপন করবে না।"
          },
          {
            "en": "Read in that order, the placement is itself an argument. Accounts are settled later, not here. Expect to be tested and expect to be insulted. And much of the insulting will come from people who were themselves entrusted with a Book and hid it. A reader who reaches this verse from 3:185 already knows where the settlement happens, and that is what turns patience under abuse from a heroic gesture into a reasonable one.",
            "bn": "এই ক্রমে পড়লে অবস্থানটিই একটি যুক্তি হয়ে ওঠে। হিসাব চুকে যায় পরে, এখানে নয়। পরীক্ষার প্রত্যাশা করো, আর অপমানেরও প্রত্যাশা করো। আর সেই অপমানের অনেকটা আসবে এমন লোকদের কাছ থেকে, যাদের নিজেদেরই একটি কিতাব দেওয়া হয়েছিল আর তারা তা গোপন করেছে। যে পাঠক 3:185 আয়াত থেকে এই আয়াতে পৌঁছায়, সে আগেই জানে হিসাব কোথায় চুকবে; আর এটিই অপমানের মুখে ধৈর্যকে বীরত্বের ভঙ্গি থেকে সরিয়ে যুক্তিসংগত আচরণে পরিণত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Certainties, Not Two Risks",
          "bn": "দুটি নিশ্চয়তা, দুটি আশঙ্কা নয়"
        },
        "p": [
          {
            "en": "The Arabic does not say you may be tested. Both verbs carry the emphatic lam in front and the heavy nun at the end — la-tublawunna, la-tasma'unna — the form Arabic uses to swear to something. That takes away the option of treating the trial as an accident that happened to you in particular. Being tested in wealth and in one's own self, and hearing a great deal of hurtful speech, are stated in the grammar of an oath rather than of a forecast.",
            "bn": "আরবিতে বলা হয়নি 'তোমরা পরীক্ষিত হতে পারো'। দুটি ক্রিয়াপদের আগে জোর দেওয়ার লাম আর শেষে ভারী নূন — লাতুবলাউন্না, ওয়া লাতাসমাউন্না — আরবি এই গঠনেই কসম করে। এটি পরীক্ষাকে 'বিশেষভাবে আমারই সঙ্গে ঘটে যাওয়া দুর্ঘটনা' ভাবার সুযোগটি কেড়ে নেয়। সম্পদে ও নিজের সত্তায় পরীক্ষিত হওয়া, আর প্রচুর কষ্টদায়ক কথা শোনা — এ দুটির কথা বলা হয়েছে পূর্বাভাসের ভাষায় নয়, কসমের ব্যাকরণে।"
          },
          {
            "en": "Notice what is named. Two areas of testing: amwal, possessions, and anfus, the selves — which the commentators take to cover body, health, family and life itself. Then something of a different kind, not a loss but a sound. You will hear much abuse, and it is traced to two sources, those given the Scripture before you and those who associate partners with Allah. Two arenas of loss, two mouths of injury, and only then what to do about any of it.",
            "bn": "লক্ষ করুন কী কী নাম নেওয়া হলো। পরীক্ষার দুটি ক্ষেত্র: 'আমওয়াল' — সম্পদ, আর 'আনফুস' — নিজেরা, যা মুফাসসিরগণ দেহ, স্বাস্থ্য, পরিবার ও জীবন পর্যন্ত বিস্তৃত বলে ধরেন। তারপর ভিন্ন ধরনের একটি জিনিস — কোনো ক্ষতি নয়, একটি শব্দ। তোমরা প্রচুর কটূক্তি শুনবে, আর তার উৎস হিসেবে দুই পক্ষের নাম আসে: তোমাদের আগে যাদের কিতাব দেওয়া হয়েছে, এবং যারা আল্লাহর সঙ্গে শরিক করে। ক্ষতির দুটি ক্ষেত্র, আঘাতের দুটি মুখ, আর তার পরেই এসবের ব্যাপারে কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adha, and Who Said It",
          "bn": "আযা, আর কে বলেছিল"
        },
        "p": [
          {
            "en": "The word for what will be heard is adha, and the choice is deliberate. Adha is harm that wounds without destroying: annoyance, insult, mockery, the low constant friction of being talked about. The same word carries the promise in 3:111 that the opponents of the believers will not harm them beyond adha. One verse says the abuse is certain; the other says it is bounded. What is guaranteed to arrive is also guaranteed not to be fatal.",
            "bn": "যা শোনা যাবে তার জন্য ব্যবহৃত শব্দটি হলো 'আযা', আর নির্বাচনটি ইচ্ছাকৃত। আযা এমন ক্ষতি যা আহত করে কিন্তু ধ্বংস করে না: বিরক্তি, অপমান, বিদ্রূপ, নিজেকে নিয়ে কথা হওয়ার নিচু অথচ অবিরাম ঘর্ষণ। এই একই শব্দ 3:111 আয়াতের প্রতিশ্রুতিতেও আছে — বিরোধীরা মুমিনদের আযা ছাড়া বেশি কিছু ক্ষতি করতে পারবে না। একটি আয়াত বলে কটূক্তি নিশ্চিত; অন্যটি বলে তার একটি সীমা আছে। যা আসবেই বলে নিশ্চিত করা হয়েছে, তা প্রাণঘাতী নয় বলেও নিশ্চিত করা হয়েছে।"
          },
          {
            "en": "Al-Wahidi and Ibn Kathir relate that the verse came down with the poet Ka'b ibn al-Ashraf in view, who lampooned the Prophet ﷺ and the believers in verse and stirred the Quraysh against them. Al-Bukhari preserves a scene of the same kind from Usamah ibn Zayd (RA): the Prophet ﷺ passed a gathering in Madinah and was spoken to insultingly by Abdullah ibn Ubayy, and when he afterwards told Sa'd ibn Ubadah (RA) what had been said, it was Sa'd who asked him to pardon the man and overlook it — and he did. The report cites this verse for that practice of bearing abuse and pardoning.",
            "bn": "আল-ওয়াহিদী ও ইবনে কাসীর বর্ণনা করেন, আয়াতটি নাযিল হয়েছিল কবি কা'ব ইবনুল আশরাফকে সামনে রেখে, যে কবিতায় নবী ﷺ ও মুমিনদের ব্যঙ্গ করত এবং কুরাইশকে তাদের বিরুদ্ধে উস্কে দিত। ইমাম বুখারী উসামা ইবনে যায়েদ (রাঃ) থেকে একই ধরনের একটি দৃশ্য সংরক্ষণ করেছেন: নবী ﷺ মদীনায় একটি মজলিসের পাশ দিয়ে যান, সেখানে আবদুল্লাহ ইবনে উবাই তাঁকে অপমানজনক কথা বলে; পরে তিনি সা'দ ইবনে উবাদা (রাঃ)-কে কথাটি জানালে সা'দ (রাঃ)-ই তাঁকে লোকটিকে ক্ষমা করতে ও উপেক্ষা করতে অনুরোধ করেন, আর নবী ﷺ ক্ষমা করে দেন। বর্ণনাটি অপমান সহ্য করা ও ক্ষমা করার সেই আচরণকেই এই আয়াতের সঙ্গে যুক্ত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience Paired With Taqwa",
          "bn": "ধৈর্যের সঙ্গে তাকওয়া"
        },
        "p": [
          {
            "en": "The response the verse names is a pair, not a single virtue: if you are patient and are mindful of Allah. Patience on its own can curdle. A person can absorb an insult in silence and store it, and what is being practised then is not sabr but postponement. Taqwa keeps the silence honest — it guards the tongue afterwards and forbids the private retaliation.",
            "bn": "আয়াতটি যে প্রতিক্রিয়ার নাম নেয় তা একটি জোড়া, একক কোনো গুণ নয়: যদি তোমরা ধৈর্য ধরো এবং তাকওয়া অবলম্বন করো। ধৈর্য একা থাকলে তা টকে যেতে পারে। মানুষ চুপচাপ একটি অপমান হজম করে তা জমিয়ে রাখতে পারে, আর তখন যা চর্চা করা হচ্ছে তা সবর নয়, স্থগিতকরণ। তাকওয়াই সেই নীরবতাকে সৎ রাখে — এটি পরে জিহ্বাকে পাহারা দেয় আর গোপন প্রতিশোধ নিষেধ করে।"
          },
          {
            "en": "As-Sa'di reads the pairing as the religion stated in short: bearing what is disliked, and staying inside what Allah permits while bearing it. The verse does not ask for the abuse to be enjoyed, and it does not ask for the loss of wealth to feel light. It asks for two things a person can actually do while still hurting — hold, and stay within the limits.",
            "bn": "আস-সা'দী এই জোড়াকে সংক্ষেপে গোটা দ্বীনের বিবৃতি হিসেবে পড়েন: অপছন্দনীয় জিনিস বহন করা, আর বহন করার সময় আল্লাহ যা অনুমোদন করেছেন তার ভেতরে থাকা। আয়াতটি কটূক্তি উপভোগ করতে বলে না, সম্পদের ক্ষতিকে হালকা মনে হতে বলে না। এটি এমন দুটি জিনিস চায় যা মানুষ ব্যথা নিয়েও সত্যিই করতে পারে — নিজেকে ধরে রাখা, আর সীমার ভেতরে থাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Matter of Firm Resolve",
          "bn": "দৃঢ় সংকল্পের কাজ"
        },
        "p": [
          {
            "en": "The verdict at the end is that this is min azm al-umur, of the matters of firm resolve. Azm is the settled decision that cuts hesitation off. To place patience under abuse among the matters of azm is to say it belongs with what a person decides, not with the moods a person happens to be in. The same phrase appears in 31:17 where Luqman tells his son to be patient over whatever befalls him, and again in 42:43 of the one who is patient and forgives.",
            "bn": "শেষে রায়টি হলো, এটি 'মিন আযমিল উমূর' — দৃঢ় সংকল্পের কাজগুলোর একটি। 'আযম' হলো সেই স্থির সিদ্ধান্ত যা দ্বিধাকে কেটে ফেলে। কটূক্তির মুখে ধৈর্যকে আযমের কাজের মধ্যে রাখা মানে বলা যে, এটি মানুষের সিদ্ধান্তের সঙ্গে যুক্ত, তার মুহূর্তের মেজাজের সঙ্গে নয়। একই বাক্যাংশ 31:17 আয়াতে আসে, যেখানে লুকমান তাঁর পুত্রকে বিপদে ধৈর্য ধরতে বলেন; আর আবার 42:43 আয়াতে, তার জন্য যে ধৈর্য ধরে ও ক্ষমা করে।"
          },
          {
            "en": "Three settings, one verdict. A father teaching a child, a community under insult, and an individual who has been wronged and chooses to pardon — in each the Quran calls this a matter of firm resolve. That quietly corrects the way patience is usually pictured. It is not the stillness of somebody with no options; it is the deliberate act of somebody who had an option and closed it. Practically, the verse's own order is the order to follow: expect it, recognise its size, hold your reaction, stay inside what Allah allows, and leave the settlement where 3:185 put it.",
            "bn": "তিনটি প্রেক্ষাপট, একটি রায়। সন্তানকে শেখানো এক পিতা, কটূক্তির মুখে থাকা এক সম্প্রদায়, আর অন্যায়ের শিকার হয়েও ক্ষমা বেছে নেওয়া এক ব্যক্তি — প্রতিটিতেই কুরআন এটিকে দৃঢ় সংকল্পের কাজ বলে। এটি নীরবে সেই ছবিটি শুধরে দেয় যেভাবে ধৈর্যকে সাধারণত কল্পনা করা হয়। এটি উপায়হীন মানুষের নিশ্চলতা নয়; এটি সেই মানুষের ইচ্ছাকৃত কাজ যার উপায় ছিল এবং সে তা বন্ধ করে দিয়েছে। ব্যবহারিকভাবে আয়াতের নিজের ক্রমটিই অনুসরণের ক্রম: প্রত্যাশা করো, আকার চিনে নাও, প্রতিক্রিয়া ধরে রাখো, আল্লাহর অনুমোদিত সীমার ভেতরে থাকো, আর হিসাব চুকানোর কাজটি সেখানেই রেখে দাও যেখানে 3:185 আয়াত তা রেখে দিয়েছে।"
          }
        ]
      }
    ]
  },
  "3:189": {
    "sections": [
      {
        "h": {
          "en": "The Sentence After the Boasters",
          "bn": "আত্মপ্রশংসাকারীদের পরের বাক্যটি"
        },
        "p": [
          {
            "en": "This verse arrives directly after a hard one. 3:188 describes people who rejoice in what they have done and love to be praised for what they did not do, and it tells the Prophet ﷺ not to reckon them safe from punishment. Then, with only the connective wa, and, comes the statement of who actually owns everything: and to Allah belongs the dominion of the heavens and the earth, and Allah is over all things competent.",
            "bn": "এই আয়াতটি আসে একটি কঠিন আয়াতের ঠিক পরেই। 3:188 আয়াত এমন মানুষদের বর্ণনা দেয় যারা নিজেদের কৃতকর্মে আনন্দিত হয় এবং যা করেনি তার জন্য প্রশংসিত হতে ভালোবাসে, আর নবী ﷺ-কে বলে তাদের শাস্তি থেকে নিরাপদ মনে না করতে। এরপর কেবল একটি 'ওয়া' — 'আর' — সংযোজক নিয়েই আসে এই ঘোষণা যে আসলে সবকিছুর মালিক কে: আসমান ও যমীনের সার্বভৌমত্ব আল্লাহরই, আর আল্লাহ সকল বিষয়ের ওপর ক্ষমতাবান।"
          },
          {
            "en": "Put side by side, the two verses are a single movement. One describes the human appetite for credit — being seen as the source of what is good, whether or not one was. The other states the ownership of the whole estate in a line short enough to memorise. Nothing is argued; the claim simply stops having anywhere to stand, because there is no unowned corner from which a person could have produced anything on his own account.",
            "bn": "পাশাপাশি রাখলে আয়াত দুটি একটিই গতি। একটি বর্ণনা করে কৃতিত্বের প্রতি মানুষের ক্ষুধা — ভালো যা কিছু, তার উৎস হিসেবে দেখা যাওয়ার আকাঙ্ক্ষা, সে সত্যিই উৎস হোক বা না হোক। অন্যটি গোটা সম্পত্তির মালিকানা ঘোষণা করে এমন এক বাক্যে যা মুখস্থ করা যায়। কোনো তর্ক করা হয় না; দাবিটির দাঁড়ানোর জায়গাই আর থাকে না, কারণ এমন কোনো মালিকহীন কোণ নেই যেখান থেকে কেউ নিজের হিসাবে কিছু উৎপন্ন করতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Mulk, Not Merely Contents",
          "bn": "মুলক, কেবল ভেতরের জিনিস নয়"
        },
        "p": [
          {
            "en": "The word is mulk, and it is worth separating from ownership of property. Mulk is sovereignty: the right to command, to dispose, to give and to withhold. The Quran also says, in 2:255 among other places, that to Him belongs whatever is in the heavens and whatever is on the earth — the contents. Here the object is different. What belongs to Him is the dominion of the heavens and the earth themselves, the running of the thing and not only its inventory.",
            "bn": "শব্দটি 'মুলক', আর একে সম্পত্তির মালিকানা থেকে আলাদা করা দরকার। 'মুলক' মানে সার্বভৌমত্ব: আদেশ দেওয়ার, ব্যবস্থা নেওয়ার, দেওয়ার ও আটকে রাখার অধিকার। কুরআন অন্যত্র, যেমন 2:255 আয়াতে, বলে যে আসমান ও যমীনে যা কিছু আছে সবই তাঁর — অর্থাৎ ভেতরের জিনিসগুলো। এখানে বিষয়টি ভিন্ন। তাঁর অধিকারে রয়েছে স্বয়ং আসমান ও যমীনের সার্বভৌমত্ব — কেবল তালিকাটি নয়, গোটা ব্যবস্থাটি চালানোর ক্ষমতা।"
          },
          {
            "en": "The word order carries a claim too. Arabic can put the phrase to Allah before its subject, and that fronting is one of the standard ways the language expresses restriction. The commentators render the verse accordingly: to Allah alone belongs the dominion. It is not that He is the greatest of the owners. It is that the category has one member, and every other holding inside it is borrowed and temporary.",
            "bn": "শব্দের ক্রমও একটি দাবি বহন করে। আরবি 'আল্লাহর জন্য' অংশটিকে কর্তার আগে বসাতে পারে, আর এই আগে বসানো ভাষাটির সীমাবদ্ধতা প্রকাশের একটি প্রচলিত উপায়। মুফাসসিরগণ সেই অনুযায়ীই অনুবাদ করেন: সার্বভৌমত্ব কেবল আল্লাহরই। কথাটি এই নয় যে তিনি মালিকদের মধ্যে সর্বশ্রেষ্ঠ। কথাটি এই যে, এই শ্রেণিতে সদস্য একজনই, আর এর ভেতরের অন্য প্রতিটি মালিকানা ধার করা ও সাময়িক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sentence That Recurs",
          "bn": "যে বাক্যটি বারবার ফিরে আসে"
        },
        "p": [
          {
            "en": "This statement is not unique to Al Imran; the Quran returns to it and continues it differently each time. 24:42 follows it with and to Allah is the destination. 45:27 follows it with the Day the Hour arrives, when the falsifiers will lose. 5:120 widens it to whatever is within them, and 57:2 pairs it with giving life and causing death. The sentence functions as a premise, and different conclusions are drawn from it in different places.",
            "bn": "এই বাক্যটি কেবল আলে ইমরানেরই নয়; কুরআন বারবার এতে ফিরে আসে এবং প্রতিবার ভিন্নভাবে এগিয়ে নেয়। 24:42 আয়াত এর পরে বলে, আর ফিরে যেতে হবে আল্লাহরই কাছে। 45:27 আয়াত এর পরে আনে সেই দিনের কথা যেদিন কিয়ামত সংঘটিত হবে ও মিথ্যাশ্রয়ীরা ক্ষতিগ্রস্ত হবে। 5:120 আয়াত একে প্রসারিত করে 'এদের মাঝে যা কিছু আছে' পর্যন্ত, আর 57:2 আয়াত একে জোড়ে জীবন ও মৃত্যু দেওয়ার সঙ্গে। বাক্যটি কাজ করে একটি ভিত্তিবাক্য হিসেবে, আর ভিন্ন ভিন্ন জায়গায় তা থেকে ভিন্ন সিদ্ধান্ত টানা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Right and Reach Together",
          "bn": "অধিকার ও নাগাল একসঙ্গে"
        },
        "p": [
          {
            "en": "The verse then adds a second attribute: wa Allahu 'ala kulli shay'in qadir. Qudrah is not raw force but power exactly equal to the thing it is exercised on, and kulli shay'in, every thing, sets no boundary for it. Ownership and capability are being stated in one breath, and they answer two different doubts. A sovereign without power holds a title; power without right is simply the strongest party in the room.",
            "bn": "এরপর আয়াতটি দ্বিতীয় একটি গুণ যোগ করে: 'ওয়াল্লাহু আলা কুল্লি শাইইন কাদীর'। 'কুদরাত' নিছক শক্তি নয়, বরং যে বিষয়ে তা প্রয়োগ করা হচ্ছে তার সঙ্গে ঠিক সমান ক্ষমতা; আর 'কুল্লি শাইইন', অর্থাৎ প্রতিটি জিনিস, এর কোনো সীমা রাখে না। মালিকানা ও সামর্থ্য একই নিঃশ্বাসে ঘোষিত হচ্ছে, আর তারা দুটি আলাদা সংশয়ের উত্তর দেয়। ক্ষমতাহীন সার্বভৌম কেবল একটি উপাধি ধরে থাকেন; আর অধিকারহীন ক্ষমতা মানে ঘরের মধ্যে সবচেয়ে শক্তিশালী পক্ষটি, এর বেশি কিছু নয়।"
          },
          {
            "en": "That pairing is what makes the verse usable in fear. Surah Al Imran is largely a surah of pressure — 3:186 has already promised that the believers will be tested in their possessions and in themselves, and will hear much abuse. Against that, this verse does not promise that the pressure will lift. It relocates the question of who is finally in charge of it, which is a different and steadier kind of relief.",
            "bn": "এই জোড়াই আয়াতটিকে ভয়ের মুহূর্তে ব্যবহারযোগ্য করে তোলে। সূরা আলে ইমরান মূলত চাপের সূরা — 3:186 আয়াত আগেই জানিয়ে দিয়েছে যে মুমিনরা তাদের ধন ও প্রাণের ব্যাপারে পরীক্ষিত হবে এবং অনেক দুঃখজনক কথা শুনবে। তার বিপরীতে এই আয়াত প্রতিশ্রুতি দেয় না যে চাপ সরে যাবে। বরং এটি সরিয়ে দেয় সেই প্রশ্নের জায়গাটি — চূড়ান্তভাবে এর দায়িত্বে কে; আর সেটি ভিন্ন ও অনেক স্থির ধরনের স্বস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Is Placed Before",
          "bn": "এটি কীসের আগে বসানো"
        },
        "p": [
          {
            "en": "The verse is also a doorway. Immediately after it, 3:190-191 opens the closing passage of the surah: in the creation of the heavens and the earth and the alternation of night and day are signs for those of understanding, who remember Allah standing, sitting and lying on their sides and reflect on that creation. Ownership is declared first; then the reader is invited to walk out and look at what has just been declared owned.",
            "bn": "আয়াতটি একটি দরজাও বটে। এর ঠিক পরেই 3:190-191 আয়াত সূরার সমাপনী অংশ শুরু করে: আসমান ও যমীনের সৃষ্টিতে এবং রাত ও দিনের আবর্তনে জ্ঞানবানদের জন্য নিদর্শন রয়েছে, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে এবং সেই সৃষ্টি নিয়ে চিন্তা করে। প্রথমে মালিকানা ঘোষিত হয়; তারপর পাঠককে আমন্ত্রণ জানানো হয় বাইরে গিয়ে দেখতে, যা সবেমাত্র কারও মালিকানাধীন বলে ঘোষিত হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under Borrowed Power",
          "bn": "ধার করা ক্ষমতার নিচে বাস"
        },
        "p": [
          {
            "en": "Held honestly, the verse does two things at once, and they pull in opposite directions until you notice they are the same. It shrinks whoever is currently frightening you, because whatever authority he holds is on loan from the One who owns the whole of it. And it shrinks your own claim on what you have gathered, since the same lease covers you. Fear and pride are both deflated by one sentence about who the owner is.",
            "bn": "সৎভাবে ধরলে আয়াতটি একসঙ্গে দুটি কাজ করে, আর সে দুটি বিপরীত দিকে টানে — যতক্ষণ না বোঝা যায় যে তারা আসলে একই কাজ। এটি ছোট করে দেয় তাকে, যে এই মুহূর্তে আপনাকে ভয় দেখাচ্ছে, কারণ তার হাতে যে কর্তৃত্বই থাকুক তা ধার করা সেই সত্তার কাছ থেকে, যিনি এর সবটুকুর মালিক। আবার এটি ছোট করে দেয় আপনি যা জমিয়েছেন তার ওপর আপনার নিজের দাবিকেও, কারণ একই ইজারা আপনার ক্ষেত্রেও খাটে। মালিক কে — এই এক বাক্যেই ভয় ও অহংকার দুটোরই হাওয়া বেরিয়ে যায়।"
          }
        ]
      }
    ]
  },
  "3:190-191": {
    "sections": [
      {
        "h": {
          "en": "Where the Surah Turns",
          "bn": "সূরা যেখানে মোড় নেয়"
        },
        "p": [
          {
            "en": "These verses open the closing passage of Surah Al Imran, a surah spent largely in argument and aftermath: the long dialogue with the Christian delegation of Najran, the wound of Uhud and its lessons for a community under pressure. At 3:190 the register changes. The proofs are no longer quoted or debated; they are hung overhead. Whoever remained unmoved by every earlier argument still stands beneath the alternation of night and day, and that alone, the verse says, is sign enough.",
            "bn": "এই আয়াতগুলো দিয়ে সূরা আলে ইমরানের সমাপ্তি অংশ শুরু হয় — এমন এক সূরা, যার বড় অংশ কেটেছে যুক্তিতর্ক ও তার পরিণতিতে: নাজরানের খ্রিস্টান প্রতিনিধি দলের সঙ্গে দীর্ঘ সংলাপ, উহুদের ক্ষত এবং চাপে থাকা একটি সম্প্রদায়ের জন্য তার শিক্ষা। 3:190-এ সুর বদলে যায়। প্রমাণ আর উদ্ধৃত বা বিতর্কিত হয় না; তা টাঙিয়ে দেওয়া হয় মাথার ওপরে। আগের সব যুক্তিতে যে অটল থেকেছে, সেও তো রাত-দিনের পালাবদলের নিচেই দাঁড়িয়ে — আর আয়াত বলছে, কেবল সেটুকুই যথেষ্ট নিদর্শন।"
          },
          {
            "en": "The claim is precise. In the creation of the heavens and the earth and in the ikhtilaf, the turning about, of night and day there are ayat, signs. The Quran uses the same word for its own verses and for daybreak: both are communications from the same Author, and both can be passed over without being read. Then the verse names its audience — not everyone, but ulul-albab, those who reach the kernel of things and are not satisfied with husks.",
            "bn": "দাবিটি সুনির্দিষ্ট। আসমান ও যমীনের সৃষ্টিতে এবং রাত-দিনের ইখতিলাফে — পালাবদলে — রয়েছে আয়াত, নিদর্শন। কুরআন নিজের বাক্যগুলোর জন্য আর ভোরের আলো ফোটার জন্য একই শব্দ ব্যবহার করে: দুটিই একই রচয়িতার বার্তা, আর দুটিই না পড়ে পার হয়ে যাওয়া সম্ভব। এরপর আয়াত তার শ্রোতাদের নাম নেয় — সবাই নয়, বরং উলুল আলবাব: যারা জিনিসের মর্মে পৌঁছায়, খোসায় সন্তুষ্ট থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The People of the Kernel",
          "bn": "মর্মে পৌঁছানো মানুষ"
        },
        "p": [
          {
            "en": "Lubb in Arabic is the kernel of a nut, what remains when the husk is stripped away, and the commentators read ulul-albab accordingly: minds that press past the surface of things to what they actually mean. The description that follows in 3:191 gives these people two habits, joined in a single breath. They remember Allah standing, sitting and lying on their sides, and they reflect on the creation of the heavens and the earth. Dhikr and fikr, remembrance and thought, work as one act.",
            "bn": "আরবিতে লুব্ব মানে বাদামের শাঁস — খোসা ছাড়ালে যা থাকে; মুফাসসিরগণ উলুল আলবাব শব্দটিকে সেভাবেই পড়েন: এমন মন, যা জিনিসের উপরিতল পেরিয়ে তার প্রকৃত অর্থে পৌঁছায়। 3:191-এ যে বর্ণনা আসে, তাতে এই মানুষদের দুটি অভ্যাস এক নিঃশ্বাসে জোড়া হয়েছে। তারা দাঁড়িয়ে, বসে ও কাত হয়ে শুয়ে আল্লাহকে স্মরণ করে, আর আসমান-যমীনের সৃষ্টি নিয়ে চিন্তা করে। যিকর ও ফিকর — স্মরণ ও চিন্তা — একটিই কাজ হয়ে চলে।"
          },
          {
            "en": "The three postures cover a whole human life. Standing, sitting and lying down leave no state out: work, rest, health, illness, old age. The same three postures appear in 4:103, where believers are told to remember Allah after prayer in exactly these positions. Remembrance, in other words, is not confined to the prayer mat, and reflection is not confined to scholars. Whoever can still look up at the night sky owns the whole laboratory this verse describes.",
            "bn": "এই তিন ভঙ্গি একটি মানবজীবনের পুরোটাই ঢেকে দেয়। দাঁড়ানো, বসা ও শোয়া কোনো অবস্থাকেই বাদ রাখে না: কাজ, বিশ্রাম, সুস্থতা, অসুস্থতা, বার্ধক্য। একই তিন ভঙ্গি 4:103-এও এসেছে, যেখানে মুমিনদের বলা হয়েছে নামাযের পর ঠিক এই অবস্থাগুলোতে আল্লাহকে স্মরণ করতে। অর্থাৎ স্মরণ জায়নামাযে সীমাবদ্ধ নয়, আর চিন্তা আলিমদের একচেটিয়া নয়। যে এখনো রাতের আকাশের দিকে তাকাতে পারে, এই আয়াতে বর্ণিত পুরো গবেষণাগারটিই তার।"
          }
        ]
      },
      {
        "h": {
          "en": "Thinking That Becomes Prayer",
          "bn": "যে ভাবনা দোয়া হয়ে ওঠে"
        },
        "p": [
          {
            "en": "Their reflection does not stop at wonder; it issues in speech. Our Lord, You did not create this batilan — aimlessly, for nothing. The reasoning is compressed but complete: if the heavens are not pointless, then human life is not pointless, and if life is not pointless, it is heading toward a reckoning. So the very next words are a plea: glory be to You, protect us from the punishment of the Fire. Fear here is a conclusion drawn from evidence, not a mood.",
            "bn": "তাদের চিন্তা বিস্ময়ে থেমে থাকে না; তা কথায় পরিণত হয়। হে আমাদের রব, আপনি এসব বাতিল — উদ্দেশ্যহীনভাবে, অনর্থক — সৃষ্টি করেননি। যুক্তিটি সংক্ষিপ্ত কিন্তু সম্পূর্ণ: আসমান যদি অর্থহীন না হয়, তবে মানবজীবনও অর্থহীন নয়; আর জীবন অর্থহীন না হলে তা এগোচ্ছে এক হিসাব-নিকাশের দিকে। তাই এর পরের কথাগুলোই একটি আকুতি: আপনি পবিত্র, আমাদের আগুনের শাস্তি থেকে রক্ষা করুন। এখানে ভয় কোনো মেজাজ নয় — প্রমাণ থেকে টানা সিদ্ধান্ত।"
          },
          {
            "en": "The prayer keeps going through 3:192-194: shame at the fate of wrongdoers, the confession that they heard a caller calling to faith and answered, the request that Allah grant what He promised through His messengers. And 3:195 records the response — their Lord answers them: I do not let the work of any worker among you be lost, male or female. A meditation that began with eyes on the sky ends with Allah Himself speaking back.",
            "bn": "দোয়াটি 3:192-194 জুড়ে চলতে থাকে: জালিমদের পরিণতির লজ্জা, এই স্বীকারোক্তি যে তারা ঈমানের দিকে ডাকা এক আহ্বানকারীকে শুনে সাড়া দিয়েছে, আর এই প্রার্থনা যে আল্লাহ তাঁর রাসূলদের মাধ্যমে যা প্রতিশ্রুতি দিয়েছেন তা যেন দেন। আর 3:195-এ উত্তরটি লিপিবদ্ধ — তাদের রব তাদের ডাকে সাড়া দেন: তোমাদের কোনো আমলকারীর আমল আমি নষ্ট করি না, সে পুরুষ হোক বা নারী। আকাশের দিকে চোখ রেখে শুরু হওয়া ধ্যান শেষ হয় স্বয়ং আল্লাহর প্রত্যুত্তরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night He Recited It",
          "bn": "যে রাতে তিনি এটি তিলাওয়াত করেন"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Ibn Abbas (RA) that he spent a night in the house of his aunt Maymunah (RA), the wife of the Prophet ﷺ, deliberately watching how the Prophet ﷺ prayed at night. The Prophet ﷺ slept into the night, then woke, wiped the sleep from his face, and recited the closing verses of Surah Al Imran, these among them. Then he made ablution and stood in prayer.",
            "bn": "ইমাম বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন: তিনি এক রাত তাঁর খালা, নবী ﷺ-এর স্ত্রী মাইমুনা (রাঃ)-এর ঘরে কাটান — ইচ্ছা করেই দেখার জন্য, নবী ﷺ রাতে কীভাবে নামায পড়েন। নবী ﷺ রাতের কিছু অংশ ঘুমালেন, তারপর জেগে উঠে মুখ থেকে ঘুমের রেশ মুছলেন এবং সূরা আলে ইমরানের শেষ আয়াতগুলো — এগুলোসহ — তিলাওয়াত করলেন। এরপর অযু করে নামাযে দাঁড়ালেন।"
          },
          {
            "en": "The placement is instructive. These are verses he ﷺ reached for at the moment between sleep and standing, when the sky is dark and the heart is unguarded. The verse commends those who remember Allah lying on their sides, and here is the Prophet ﷺ doing exactly that, moving from recitation on his bedding to reflection to washing to prayer — the verse's whole sequence of remembrance, thought and worship, enacted before dawn.",
            "bn": "এই অবস্থানটিই শিক্ষা। ঘুম আর দাঁড়ানোর মাঝের মুহূর্তে — যখন আকাশ অন্ধকার আর হৃদয় অরক্ষিত — তিনি ﷺ এই আয়াতগুলোর দিকেই হাত বাড়াতেন। আয়াত প্রশংসা করে তাদের, যারা কাত হয়ে শুয়েও আল্লাহকে স্মরণ করে — আর নবী ﷺ ঠিক তা-ই করছেন: বিছানায় তিলাওয়াত থেকে চিন্তা, চিন্তা থেকে অযু, অযু থেকে নামায — আয়াতের পুরো ধারাটি, স্মরণ, ভাবনা ও ইবাদত, ভোরের আগেই বাস্তবায়িত।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking as an Act of Worship",
          "bn": "দেখাও যখন ইবাদত"
        },
        "p": [
          {
            "en": "What this verse makes possible is a form of worship that requires no book in hand: looking, done properly. 2:164 lists the same materials — heavens, earth, night, day, rain, ships, winds — as signs for a people who use reason, and 41:53 promises that Allah will keep showing His signs in the horizons and in people's own selves. The created world is not scenery behind the religious life. For the people of understanding it is a text, read continually.",
            "bn": "এই আয়াত এমন এক ইবাদত সম্ভব করে, যার জন্য হাতে কোনো কিতাব লাগে না: ঠিকভাবে তাকানো। 2:164 একই উপকরণের তালিকা দেয় — আসমান, যমীন, রাত, দিন, বৃষ্টি, জাহাজ, বাতাস — বুদ্ধি ব্যবহারকারী মানুষদের জন্য নিদর্শন হিসেবে; আর 41:53 প্রতিশ্রুতি দেয়, আল্লাহ দিগন্তে এবং মানুষের নিজেদের মধ্যে তাঁর নিদর্শন দেখাতে থাকবেন। সৃষ্টিজগৎ ধর্মীয় জীবনের পেছনের দৃশ্যপট নয়। বোধসম্পন্নদের জন্য এটি একটি পাঠ্য — যা অবিরাম পড়তে হয়।"
          },
          {
            "en": "The practice, then, is deliberately small. Actually look at the sky you walk under; let the regularity of night and day register as maintenance, not accident; and when the thought arrives that none of this is aimless, finish the movement the way 3:191 finishes it — with speech to the One who made it, and with the request these people make: our Lord, You did not create this in vain, so protect us from the Fire.",
            "bn": "অনুশীলনটি তাই ইচ্ছা করেই ছোট। যে আকাশের নিচে হাঁটছেন, সত্যিই তার দিকে তাকান; রাত-দিনের নিয়মিততাকে দুর্ঘটনা নয়, রক্ষণাবেক্ষণ হিসেবে মনে গেঁথে নিন; আর যখন এই ভাবনা আসে যে এসবের কিছুই উদ্দেশ্যহীন নয়, তখন 3:191 যেভাবে শেষ করে সেভাবেই গতিটি সম্পূর্ণ করুন — যিনি এসব বানিয়েছেন তাঁর সঙ্গে কথা বলে, আর এই মানুষদের প্রার্থনাটি দিয়ে: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি, তাই আমাদের আগুন থেকে রক্ষা করুন।"
          }
        ]
      }
    ]
  },
  "3:200": {
    "sections": [
      {
        "h": {
          "en": "The Seal of Al Imran",
          "bn": "আলে ইমরানের সমাপ্তি-মোহর"
        },
        "p": [
          {
            "en": "Surah Al Imran ends with a single verse of commands to all who believe: be patient, out-endure, remain stationed, and be mindful of Allah, so that you may succeed. The surah it seals has debated with the People of the Book, walked slowly through the wound of Uhud, and taught how victory and defeat are to be read. Its final sentence compresses that whole education into marching orders — everything learned must now be held, and held longer than the pressure lasts.",
            "bn": "সূরা আলে ইমরান শেষ হয় সকল মুমিনের প্রতি আদেশবাহী একটিমাত্র আয়াত দিয়ে: ধৈর্য ধরো, ধৈর্যে অন্যদের ছাড়িয়ে যাও, মোর্চায় অবিচল থাকো, আর আল্লাহকে ভয় করো — যেন তোমরা সফল হও। যে সূরাটিকে এটি মোহর দেয়, তা আহলে কিতাবের সাথে বিতর্ক করেছে, উহুদের ক্ষতের ভেতর দিয়ে ধীরে হেঁটেছে, আর শিখিয়েছে জয়-পরাজয় কীভাবে পড়তে হয়। এর শেষ বাক্যটি সেই পুরো শিক্ষাকে সংকুচিত করে অভিযানের নির্দেশে পরিণত করে — যা শেখা হয়েছে তা এখন ধরে রাখতে হবে, এবং চাপ যতক্ষণ থাকে তার চেয়ে বেশিক্ষণ ধরে রাখতে হবে।"
          },
          {
            "en": "Just before it, 3:190-194 describes the people of understanding who remember Allah standing, sitting and on their sides, and in 3:195 their Lord answers them. Then the surah turns from those private devotions to public endurance. The ones whose nights are filled with remembrance are the same ones commanded, in daylight, to hold the line — the pairing the Quran keeps making, as in 2:153 where believers are told to seek help through patience and prayer together.",
            "bn": "ঠিক আগেই 3:190-194 আয়াতগুলোতে বর্ণিত হয়েছে বোধসম্পন্ন সেই মানুষদের কথা, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে, আর 3:195 আয়াতে তাদের রব তাদের ডাকে সাড়া দেন। এরপর সূরাটি সেই একান্ত ইবাদত থেকে প্রকাশ্য সহনশীলতার দিকে মোড় নেয়। যাদের রাত স্মরণে ভরা, দিনের আলোয় তাদেরই আদেশ দেওয়া হয় সারিতে অটল থাকার — কুরআন এই জুটি বারবার গড়ে, যেমন 2:153 আয়াতে মুমিনদের বলা হয়েছে ধৈর্য ও নামায দুটির মাধ্যমেই সাহায্য চাইতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ladder of Patience",
          "bn": "ধৈর্যের সিঁড়ি"
        },
        "p": [
          {
            "en": "The first two imperatives share the root of sabr. Isbiru is the plain form: be patient in yourself. As-Sa'di explains it across its three fields — patience upon obedience, patience away from sin, and patience under painful decrees. Sabiru is a form that implies another party: outlast them, hold on longer than whoever presses against you, as one endurance is matched against another. The sequence is a ladder — first master your own soul, then outlast whatever stands opposed to it.",
            "bn": "প্রথম দুটি আদেশ সবরের একই মূল থেকে। ইসবিরু সরল রূপ: নিজের ভেতরে ধৈর্য ধরো। আস-সা'দী এর তিনটি ক্ষেত্র ব্যাখ্যা করেন — আনুগত্যের ওপর ধৈর্য, গুনাহ থেকে দূরে থাকার ধৈর্য, আর কষ্টদায়ক ফয়সালার নিচে ধৈর্য। সাবিরু এমন এক রূপ যা অপর পক্ষের ইঙ্গিত দেয়: তাদের ছাড়িয়ে যাও, যে তোমার ওপর চাপ দেয় তার চেয়ে বেশিক্ষণ টিকে থাকো — যেন এক সহনশীলতার মোকাবিলায় আরেক সহনশীলতা। ক্রমটি একটি সিঁড়ি — আগে নিজের নফসকে আয়ত্ত করো, তারপর যা কিছু তার বিরুদ্ধে দাঁড়ায় তাকে টিকে থাকায় হারাও।"
          },
          {
            "en": "The third command, rabitu, comes from ribat, the tethering of horses at a frontier post; 8:60 uses the same root for the mounts kept ready against danger. Its plain sense is to remain stationed where safety requires, prepared before the need arrives. Muslim relates from Abu Hurayrah (RA) that the Prophet ﷺ also named an everyday ribat: perfecting wudu when it is difficult, many steps to the mosque, and waiting for prayer after prayer. The frontier, in that light, runs through ordinary days.",
            "bn": "তৃতীয় আদেশ রাবিতু এসেছে রিবাত থেকে — সীমান্ত-চৌকিতে ঘোড়া বেঁধে রাখা; 8:60 আয়াতে একই মূল ব্যবহৃত হয়েছে বিপদের বিরুদ্ধে প্রস্তুত রাখা বাহনের জন্য। এর সরল অর্থ: নিরাপত্তা যেখানে দাবি করে সেখানে মোতায়েন থাকা, প্রয়োজন আসার আগেই প্রস্তুত। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ প্রতিদিনের এক রিবাতেরও নাম দিয়েছেন: কষ্টের সময়ও পূর্ণাঙ্গ ওযু করা, মসজিদের দিকে অনেক পদক্ষেপ, আর এক নামাযের পর আরেক নামাযের অপেক্ষা। সেই আলোয় দেখা যায়, সীমান্তরেখা সাধারণ দিনগুলোর ভেতর দিয়েই চলে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Memory of Uhud",
          "bn": "উহুদের স্মৃতি"
        },
        "p": [
          {
            "en": "The surah has already shown what leaving a station costs. Al-Bukhari relates from al-Bara (RA) that at Uhud the Prophet ﷺ posted fifty archers under Abdullah ibn Jubayr (RA) and ordered them not to leave their place whatever they saw happening; when most of them abandoned it for the spoils, the battle turned against the Muslims. The long passage beginning at 3:121 walks through that day, showing that the wound came from within the ranks rather than from the enemy's strength.",
            "bn": "মোর্চা ছাড়ার মূল্য কী, সূরাটি আগেই দেখিয়েছে। বুখারী বারা (রাঃ) থেকে বর্ণনা করেন, উহুদে নবী ﷺ আবদুল্লাহ ইবনে জুবাইর (রাঃ)-এর অধীনে পঞ্চাশজন তীরন্দাজ মোতায়েন করেন এবং আদেশ দেন, যা-ই ঘটতে দেখুক তারা যেন নিজেদের জায়গা না ছাড়ে; তাদের অধিকাংশ গনীমতের জন্য জায়গা ছেড়ে দিলে যুদ্ধ মুসলিমদের বিপক্ষে মোড় নেয়। 3:121 থেকে শুরু হওয়া দীর্ঘ অনুচ্ছেদটি সেই দিনের ভেতর দিয়ে হাঁটে — দেখায়, ক্ষতটা এসেছিল নিজেদের সারির ভেতর থেকে, শত্রুর শক্তি থেকে নয়।"
          },
          {
            "en": "Read after that history, rabitu lands with particular weight: stay at your post. The post differs from person to person — a duty, a trust, a household, a prayer kept on time — but the test is one, whether a person holds position when holding is dull or costly and leaving looks small. The surah's final command answers the surah's central wound. What was lost at Uhud by abandoning a station is guarded, ever after, by the standing order to remain at one.",
            "bn": "সেই ইতিহাসের পরে পড়লে রাবিতু বিশেষ ভার নিয়ে নামে: নিজের মোর্চায় থাকো। মোর্চা মানুষভেদে আলাদা — একটি দায়িত্ব, একটি আমানত, একটি সংসার, সময়মতো রক্ষিত একটি নামায — কিন্তু পরীক্ষা একটাই: ধরে রাখা যখন একঘেয়ে বা ব্যয়বহুল, আর ছেড়ে দেওয়া দেখতে ছোট, তখন মানুষ অবস্থান ধরে রাখে কি না। সূরার শেষ আদেশটি সূরার কেন্দ্রীয় ক্ষতের জবাব। মোর্চা ছেড়ে দেওয়ায় উহুদে যা হারিয়েছিল, তা চিরকালের জন্য পাহারা দেয় মোর্চায় থেকে যাওয়ার এই স্থায়ী আদেশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Taqwa Under the Whole",
          "bn": "সবকিছুর নিচে তাকওয়া"
        },
        "p": [
          {
            "en": "The fourth command, wattaqullah, be mindful of Allah, is not one more item on a list but the ground beneath the other three. Patience can be spent on pride and endurance on reputation; taqwa aims the whole effort at Allah, so that holding out becomes worship rather than mere temperament. Placed last, it seals the sequence the way intention seals a deed — the same outward actions, differently aimed, become a different thing before Allah.",
            "bn": "চতুর্থ আদেশ — ওয়াত্তাকুল্লাহ, আল্লাহকে ভয় করো — তালিকার আরেকটি বিষয় নয়, বরং বাকি তিনটির নিচের ভিত। ধৈর্য অহংকারে খরচ হতে পারে, সহনশীলতা সুনামে; তাকওয়া গোটা প্রচেষ্টাকে আল্লাহর দিকে তাক করে, যেন টিকে থাকা কেবল মেজাজ না থেকে ইবাদত হয়ে ওঠে। শেষে রাখা এই আদেশটি ক্রমটিকে মোহর দেয়, যেভাবে নিয়ত মোহর দেয় আমলকে — একই বাহ্যিক কাজ, ভিন্ন লক্ষ্যে, আল্লাহর কাছে ভিন্ন জিনিস হয়ে যায়।"
          },
          {
            "en": "The verse ends: la'allakum tuflihun, that you may succeed. In the language of tafsir, falah is attaining what one hopes for and escaping what one fears. It is not promised as an instant payout; it is set as the direction of the whole path, the harvest of the four commands held together. Surah al-Mu'minun opens with the same word in 23:1, then lists habits — prayer, restraint, guarded trusts — every one of them a form of staying at a post.",
            "bn": "আয়াত শেষ হয়: লা'আল্লাকুম তুফলিহুন — যেন তোমরা সফল হও। তাফসীরের ভাষায় ফালাহ হলো যা আশা করা হয় তা পাওয়া আর যা ভয় করা হয় তা থেকে রক্ষা পাওয়া। এটি তাৎক্ষণিক প্রাপ্তি হিসেবে প্রতিশ্রুত নয়; এটি স্থির হয়েছে পুরো পথের অভিমুখ হিসেবে — চারটি আদেশ একসাথে ধরে রাখার ফসল। সূরা আল-মুমিনুন একই শব্দ দিয়ে 23:1 আয়াতে শুরু হয়, তারপর তালিকা দেয় কিছু অভ্যাসের — নামায, সংযম, রক্ষিত আমানত — যার প্রতিটিই এক-একটি মোর্চায় টিকে থাকার রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Endurance in Company",
          "bn": "সঙ্ঘবদ্ধ সহনশীলতা"
        },
        "p": [
          {
            "en": "All four commands are plural, addressed to a community that endures together. Steadfastness is easier in company; one person's steadiness steadies the next, and out-endurance was never meant to be a private contest. Surah al-Asr makes the same point in 103:3 by counting mutual counsel to truth and to patience among the only things that rescue a person from loss. Whoever wants to keep this verse should therefore watch their company, because posts are held in ranks, not alone.",
            "bn": "চারটি আদেশই বহুবচনে — এমন এক সম্প্রদায়ের প্রতি, যারা একসাথে সহ্য করে। সঙ্গ পেলে অবিচলতা সহজ হয়; একজনের স্থিরতা পরের জনকে স্থির করে, আর ধৈর্যে ছাড়িয়ে যাওয়া কখনোই একার প্রতিযোগিতা হওয়ার কথা ছিল না। সূরা আল-আসর 103:3 আয়াতে একই কথা বলে — সত্যের ও ধৈর্যের পারস্পরিক উপদেশকে গণনা করে সেই অল্প কয়েকটি জিনিসের মধ্যে, যা মানুষকে ক্ষতি থেকে বাঁচায়। তাই যে এই আয়াত ধরে রাখতে চায়, তার উচিত নিজের সঙ্গের দিকে খেয়াল রাখা — কারণ মোর্চা রক্ষা হয় সারিবদ্ধভাবে, একা নয়।"
          },
          {
            "en": "Lived day by day, the verse offers its own order as a method. Begin with plain patience over what today actually demands. Measure yourself not against your tiredness but against the pressure, which also tires. Choose one post — a prayer time, a responsibility, a boundary — and refuse to leave it quietly. Keep the aim clean with taqwa. The verse binds success to nothing exotic: only to staying, a little longer, where Allah has placed you.",
            "bn": "দিনে দিনে যাপন করলে আয়াতটি নিজের ক্রমকেই একটি পদ্ধতি হিসেবে দেয়। শুরু করো সরল ধৈর্য দিয়ে — আজ প্রকৃতপক্ষে যা দাবি করে তার ওপর। নিজেকে মাপো নিজের ক্লান্তি দিয়ে নয়, চাপ দিয়ে — কারণ চাপও ক্লান্ত হয়। একটি মোর্চা বেছে নাও — একটি নামাযের সময়, একটি দায়িত্ব, একটি সীমারেখা — এবং চুপিচুপি তা ছাড়তে অস্বীকার করো। তাকওয়া দিয়ে লক্ষ্য পরিচ্ছন্ন রাখো। আয়াতটি সফলতাকে অদ্ভুত কিছুর সাথে বাঁধেনি — কেবল এর সাথে: আল্লাহ তোমাকে যেখানে রেখেছেন, সেখানে আরেকটু বেশিক্ষণ থেকে যাওয়া।"
          }
        ]
      }
    ]
  }
});
