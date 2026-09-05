/**
 * Tadabbur long-form articles — surah 20.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "20:7-8": {
    "sections": [
      {
        "h": {
          "en": "The Opening Before the Story",
          "bn": "কাহিনির আগের ভূমিকা"
        },
        "p": [
          {
            "en": "Surah Taha begins with reassurance rather than argument: 20:2 says the Quran was not sent down upon the Prophet ﷺ that he be distressed. Then the surah establishes who is speaking. 20:4 calls it a revelation from Him who created the earth and the highest heavens; 20:5 places ar-Rahman above the Throne, established; 20:6 gives Him what is in the heavens, what is on the earth, what is between them and what is beneath the soil.",
            "bn": "সূরা ত্বা-হা শুরু হয় যুক্তি দিয়ে নয়, আশ্বাস দিয়ে: 20:2 আয়াত বলে, কুরআন নবী ﷺ-এর উপর নাযিল করা হয়নি যে তিনি কষ্ট পাবেন। এরপর সূরাটি প্রতিষ্ঠা করে, কে কথা বলছেন। 20:4 আয়াত একে বলে সেই সত্তার পক্ষ থেকে নাযিলকৃত, যিনি যমীন ও সুউচ্চ আসমানসমূহ সৃষ্টি করেছেন; 20:5 আয়াত আর-রাহমানকে আরশের উপর সমুন্নত বলে; আর 20:6 আয়াত তাঁকে দেয় আসমানসমূহে যা আছে, যমীনে যা আছে, এ দুইয়ের মাঝে যা আছে এবং মাটির নিচে যা আছে — সবকিছু।"
          },
          {
            "en": "Notice the direction of that sweep: outward and then downward, ending under the ground. Our verses turn the same sweep inward. Having covered every place a thing could be hidden, the surah moves to the one place people still assume is private — inside a person. Then 20:9 begins: and has the story of Musa (AS) reached you? These two verses are the seal on the preamble, set just before the surah's long narrative starts.",
            "bn": "এই বিস্তারের দিকটি লক্ষ করুন: বাইরের দিকে, তারপর নিচের দিকে — শেষ হচ্ছে মাটির নিচে গিয়ে। আমাদের আয়াত দুটি সেই একই বিস্তারকে ভেতরের দিকে ঘুরিয়ে দেয়। কোনো কিছু লুকিয়ে থাকতে পারে এমন প্রতিটি জায়গা ঢেকে নেওয়ার পর সূরাটি সেই একটিমাত্র জায়গায় আসে, যাকে মানুষ এখনো নিজের ব্যক্তিগত বলে ধরে নেয় — মানুষের ভেতরটা। এরপর 20:9 আয়াত শুরু হয়: মূসা (আঃ)-এর কাহিনি কি তোমার কাছে পৌঁছেছে? এই দুটি আয়াত ভূমিকার উপর সিলমোহর, সূরার দীর্ঘ কাহিনি শুরু হওয়ার ঠিক আগে বসানো।"
          }
        ]
      },
      {
        "h": {
          "en": "If You Speak Aloud",
          "bn": "যদি তুমি সরবে বলো"
        },
        "p": [
          {
            "en": "Wa in tajhar bil-qawl — and if you speak aloud. The answer to that condition is where the verse becomes strange: then indeed He knows the secret and what is more hidden. It does not say that He hears you if you raise your voice. It drops far below the level you were shouting at. Raising the voice is what we do for someone who might not catch it; the sentence removes the reason for it without ever telling us to be quiet.",
            "bn": "ওয়া ইন তাজহার বিল-কাওল — আর যদি তুমি সরবে কথা বলো। এই শর্তের জবাবটিই আয়াতটিকে অদ্ভুত করে তোলে: তবে নিশ্চয়ই তিনি গোপন কথা জানেন এবং তারও চেয়ে গোপন যা তা-ও জানেন। বলা হয়নি যে তুমি গলা তুললে তিনি শুনতে পান। বাক্যটি বরং তুমি যে স্তরে চিৎকার করছিলে তারও অনেক নিচে নেমে যায়। গলা তোলা তো তার জন্যই, যে হয়তো ধরতে পারবে না; বাক্যটি চুপ করতে না বলেই সেই গলা তোলার কারণটিকে সরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Secret and What Is More Hidden",
          "bn": "গোপন ও তারও গোপন"
        },
        "p": [
          {
            "en": "As-sirr wa akhfa. The commentators genuinely differ over what lies below the secret, and at-Tabari collects several answers from the early authorities. One is that as-sirr is what a person conceals from other people, while akhfa is what he conceals inside himself. Another takes as-sirr as the words spoken under the breath and akhfa as the thought never spoken at all. A third makes akhfa what the person does not yet know about himself — the intention that has not yet surfaced.",
            "bn": "আস-সির্‌র ওয়া আখফা। গোপনের নিচে কী আছে তা নিয়ে মুফাসসিরগণের মধ্যে সত্যিকারের মতভেদ আছে, আর আত-তাবারী পূর্বসূরিদের থেকে কয়েকটি জবাব একত্র করেন। একটি মত: 'সির্‌র' হলো মানুষ অন্যদের থেকে যা গোপন রাখে, আর 'আখফা' হলো সে নিজের ভেতরে যা গোপন রাখে। আরেক মত 'সির্‌র' বলতে বোঝে চাপা গলায় বলা কথা, আর 'আখফা' বলতে বোঝে কখনো উচ্চারিতই হয়নি এমন ভাবনা। তৃতীয় মতে 'আখফা' হলো মানুষ নিজের সম্পর্কে যা এখনো জানে না — যে নিয়ত এখনো ভেসে ওঠেনি।"
          },
          {
            "en": "The word itself allows a further reading, taken by some as a past-tense verb rather than a comparative, so that the sense becomes what He has concealed. It is honest to leave the question open, because the views agree on the direction. Whatever floor you can imagine under your own awareness, His knowledge is already beneath it. The verse does not define the hidden thing; it refuses to let you locate a level at which you are alone.",
            "bn": "শব্দটি আরেকটি পাঠও অনুমোদন করে: কেউ কেউ 'আখফা'-কে তুলনাবাচক নয়, বরং অতীতকালের ক্রিয়াপদ হিসেবে নেন, ফলে অর্থ দাঁড়ায় — তিনি যা গোপন করে রেখেছেন। প্রশ্নটি খোলা রাখাই সৎ, কারণ মতগুলো দিক নিয়ে একমত। নিজের সচেতনতার নিচে তুমি যত গভীর মেঝেই কল্পনা করো, তাঁর জ্ঞান তারও নিচে আগে থেকেই আছে। আয়াতটি গোপন জিনিসটির সংজ্ঞা দেয় না; এটি কেবল অস্বীকার করে যে এমন কোনো স্তর তুমি খুঁজে পাবে যেখানে তুমি একা।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Names Come Next",
          "bn": "এরপর নামগুলো কেন"
        },
        "p": [
          {
            "en": "After a sentence like that, you might expect a warning. Instead comes the next verse, 20:8, which reads: Allah — there is no deity except Him; to Him belong the most beautiful names. The reply to total exposure is not a threat but an introduction. The One who has just been described as seeing everything inside you is the same One whose every name is husna, most beautiful; and three verses earlier, at 20:5, the surah had already called Him ar-Rahman.",
            "bn": "এমন একটি বাক্যের পর তুমি হয়তো কোনো হুঁশিয়ারি আশা করবে। কিন্তু আসে পরের আয়াতটি, 20:8 আয়াত, যেখানে বলা হয়: আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই; সবচেয়ে সুন্দর নামগুলো তাঁরই। সম্পূর্ণ উন্মোচনের জবাব কোনো হুমকি নয়, বরং একটি পরিচয়। এইমাত্র যাঁকে তোমার ভেতরের সবকিছু দেখেন বলে বর্ণনা করা হলো, তিনিই সেই সত্তা যাঁর প্রতিটি নাম 'হুসনা' — সবচেয়ে সুন্দর; আর তিন আয়াত আগেই, 20:5 আয়াতে, সূরাটি তাঁকে আর-রাহমান বলে ডেকেছে।"
          },
          {
            "en": "The phrase al-asma al-husna occurs in exactly four places in the Quran: here, and again in 7:180, 17:110 and 59:24 — no more than that. Its appearance at this point does specific work. Knowledge without mercy would make concealment the only sane strategy; mercy without knowledge would make honesty pointless. Placing the two clauses back to back leaves one reasonable response, which is to bring the hidden thing to Him rather than away from Him.",
            "bn": "'আল-আসমাউল হুসনা' কথাটি কুরআনে ঠিক চারটি জায়গায় আসে: এখানে, আর 7:180, 17:110 ও 59:24 আয়াতে — এর বেশি কোথাও নয়। ঠিক এই জায়গায় এর উপস্থিতি নির্দিষ্ট একটি কাজ করে। রহমত ছাড়া কেবল জ্ঞান থাকলে লুকিয়ে থাকাই হতো একমাত্র বুদ্ধিমান কৌশল; আর জ্ঞান ছাড়া কেবল রহমত থাকলে সততার কোনো মানেই থাকত না। বাক্য দুটিকে পিঠোপিঠি বসিয়ে দেওয়ায় একটিমাত্র যুক্তিসংগত জবাব থাকে — গোপন জিনিসটিকে তাঁর কাছ থেকে দূরে নয়, তাঁর কাছেই নিয়ে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What Taha Does With It",
          "bn": "ত্বা-হা এটি দিয়ে কী করে"
        },
        "p": [
          {
            "en": "The placement pays off almost at once. Musa (AS) and Harun (AS) are sent to the most powerful man alive, told at 20:44 to speak to him with gentle speech, and they are afraid. The answer given to them at 20:46 is: fear not, indeed I am with you both; I hear and I see. The same two faculties the preamble insisted upon are now offered as protection. Knowledge that felt like exposure in 20:7 has become company by the time 20:46 is reached.",
            "bn": "এই অবস্থানের ফল প্রায় সঙ্গে সঙ্গেই মেলে। মূসা (আঃ) ও হারূন (আঃ)-কে পাঠানো হয় তখনকার সবচেয়ে ক্ষমতাবান মানুষটির কাছে, 20:44 আয়াতে তাঁদের বলা হয় তার সঙ্গে নম্র কথা বলতে — আর তাঁরা ভয় পান। 20:46 আয়াতে তাঁদের যে জবাব দেওয়া হয় তা হলো: ভয় করো না, নিশ্চয়ই আমি তোমাদের দুজনের সঙ্গে আছি; আমি শুনি ও দেখি। ভূমিকায় যে দুটি গুণের উপর জোর দেওয়া হয়েছিল, সে দুটিই এখন নিরাপত্তা হিসেবে দেওয়া হচ্ছে। 20:7 আয়াতে যে জ্ঞান উন্মোচনের মতো লাগছিল, 20:46 আয়াতে পৌঁছাতে পৌঁছাতে তা হয়ে ওঠে সঙ্গ।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under an Open Sky",
          "bn": "খোলা আকাশের নিচে বাঁচা"
        },
        "p": [
          {
            "en": "The first consequence is that hiding is wasted effort. Not wrong, exactly — wasted. A reputation managed carefully before people is managed before an audience that already has the file. The energy spent on the performance is the energy this verse quietly frees, and what it frees it redirects into ikhlas: doing the thing for the One who was going to see it either way.",
            "bn": "প্রথম ফলাফল হলো, লুকানো মানে শ্রমের অপচয়। ঠিক 'অন্যায়' নয় — অপচয়। মানুষের সামনে যত্ন করে সাজানো সুনাম আসলে এমন এক দর্শকের সামনে সাজানো হচ্ছে, যাঁর কাছে নথিটি আগে থেকেই আছে। এই অভিনয়ে যে শক্তি খরচ হয়, এই আয়াতটি নীরবে সেই শক্তিটুকুই মুক্ত করে দেয়; আর যা মুক্ত করে তা ঢেলে দেয় ইখলাসে — কাজটি তাঁর জন্যই করা, যিনি যেভাবেই হোক দেখতেনই।"
          },
          {
            "en": "The second is that du'a can drop its explanations. You are not briefing someone on a situation He is missing; you are naming, in front of Him, something He already holds. That changes the tone of asking more than it changes the words. And when the thing inside you is one you are ashamed of, 20:8 is already positioned as the reply: the file is open, and its Holder is called by the most beautiful names there are.",
            "bn": "দ্বিতীয় ফলাফল হলো, দোয়া তার ব্যাখ্যাগুলো নামিয়ে রাখতে পারে। তুমি এমন কাউকে পরিস্থিতি বুঝিয়ে বলছ না, যিনি কিছু জানেন না; তুমি বরং তাঁর সামনে সেই জিনিসটির নাম নিচ্ছ, যা আগে থেকেই তাঁর হাতে। এটি চাওয়ার শব্দগুলোর চেয়ে চাওয়ার সুরটাই বেশি বদলে দেয়। আর তোমার ভেতরের যে জিনিসটির জন্য তুমি লজ্জিত, তার জবাব হিসেবে 20:8 আয়াত আগে থেকেই বসানো আছে: নথিটি খোলা, আর তার অধিকারীকে ডাকা হয় জগতের সবচেয়ে সুন্দর নামগুলো দিয়ে।"
          }
        ]
      }
    ]
  },
  "20:25-28": {
    "sections": [
      {
        "h": {
          "en": "A Prayer Before a Task",
          "bn": "কাজের আগে এক দোয়া"
        },
        "p": [
          {
            "en": "The setting is the night of Musa's (AS) commissioning. Travelling with his family, he saw a fire on the side of Mount Tur, approached it for an ember or directions, and was addressed by his Lord — chosen, taught tawhid, shown the signs of the staff and the hand. Then came the assignment, in 20:24 — go to Pharaoh, for he has transgressed. One man, a fugitive from Egypt with a killing on his record there, sent to the most powerful tyrant of his age.",
            "bn": "প্রেক্ষাপট মূসা (আঃ)-এর দায়িত্বপ্রাপ্তির রাত। পরিবার নিয়ে সফরের পথে তিনি তূর পাহাড়ের পাশে একটি আগুন দেখেন, একটু আঙরা বা পথের খোঁজে সেদিকে এগিয়ে যান, আর তাঁর রব তাঁকে সম্বোধন করেন — তিনি মনোনীত হন, তাওহীদ শেখানো হয়, লাঠি ও হাতের নিদর্শন দেখানো হয়। তারপর আসে দায়িত্ব, 20:24 আয়াতে: ফেরাউনের কাছে যাও, সে সীমালঙ্ঘন করেছে। একজন মানুষ — মিসর থেকে পলাতক, সেখানে যার নামে একটি হত্যার ঘটনা লেখা — তাঁকে পাঠানো হচ্ছে তাঁর যুগের সবচেয়ে ক্ষমতাধর স্বৈরাচারীর কাছে।"
          },
          {
            "en": "His response is the prayer of 20:25-28 — my Lord, expand for me my chest, ease for me my task, and untie a knot from my tongue, that they may understand my speech. Notice what he does not ask for first — no army, no immunity, no plan of approach. Before any resource in the world, he asks for a change inside himself. The commentators hold this up as the model opening move for anyone handed work that feels larger than they are.",
            "bn": "তাঁর সাড়া হলো 20:25-28 আয়াতের দোয়া: হে আমার রব, আমার বক্ষ আমার জন্য প্রশস্ত করে দিন, আমার কাজ আমার জন্য সহজ করে দিন, আর আমার জিহ্বার জড়তার গিঁট খুলে দিন, যেন তারা আমার কথা বোঝে। লক্ষ করুন, তিনি প্রথমে কী চাননি — কোনো সৈন্যদল নয়, নিরাপত্তার নিশ্চয়তা নয়, এগোনোর কোনো পরিকল্পনাও নয়। দুনিয়ার যেকোনো উপকরণের আগে তিনি চাইলেন নিজের ভেতরের একটি পরিবর্তন। মুফাসসিরগণ একে তুলে ধরেন আদর্শ প্রথম পদক্ষেপ হিসেবে — এমন যে-কারও জন্য, যার হাতে নিজের চেয়ে বড় মনে হওয়া কাজ তুলে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Chest, Task, Tongue",
          "bn": "বক্ষ, কাজ, জিহ্বা"
        },
        "p": [
          {
            "en": "The order of the three requests is its own lesson. First the chest: sharh as-sadr, the expansion of the breast, which the commentators explain as the capacity to receive what is coming without constriction — fear, resentment, and hurry all crowd a narrow chest. Second the task: ease in the external affair. Third the tongue: the instrument of the specific mission, which was speech to a king. Inner state, then circumstances, then tools — the sequence runs from the center outward.",
            "bn": "তিনটি চাওয়ার ক্রমটিই নিজে এক শিক্ষা। প্রথমে বক্ষ: 'শারহুস-সাদর' — বুকের প্রসারণ, যাকে মুফাসসিরগণ ব্যাখ্যা করেন সংকীর্ণতা ছাড়াই সামনে যা আসছে তা ধারণের সামর্থ্য হিসেবে — ভয়, ক্ষোভ আর তাড়াহুড়ো সবই সরু বুকে ভিড় করে। দ্বিতীয়ত কাজ: বাইরের বিষয়ের সহজতা। তৃতীয়ত জিহ্বা: নির্দিষ্ট মিশনটির যন্ত্র, কারণ কাজটি ছিল এক রাজার সঙ্গে কথা বলা। ভেতরের অবস্থা, তারপর পরিস্থিতি, তারপর হাতিয়ার — ক্রমটি কেন্দ্র থেকে বাইরের দিকে চলে।"
          },
          {
            "en": "Each request also names its beneficiary honestly. Expand for me my chest, ease for me my task — the repeated li, for me, concedes that the asker is the weak point, not the assignment. And the purpose clause at the end, yafqahu qawli, that they may understand my speech, aims the whole prayer at the audience's comprehension rather than the speaker's comfort. He wants eloquence not to be admired but to be understood, which is the difference between an orator and a messenger.",
            "bn": "প্রতিটি চাওয়া তার উপকারভোগীর নামও সততার সঙ্গে নেয়। আমার বক্ষ আমার জন্য প্রশস্ত করুন, আমার কাজ আমার জন্য সহজ করুন — বারবার আসা 'লী' — আমার জন্য — স্বীকার করে নেয় যে দুর্বল জায়গাটি প্রার্থনাকারী নিজে, দায়িত্বটি নয়। আর শেষের উদ্দেশ্য-বাক্য, 'ইয়াফকাহু কাওলি' — যেন তারা আমার কথা বোঝে — গোটা দোয়াটিকে তাক করে শ্রোতার বোধগম্যতার দিকে, বক্তার স্বাচ্ছন্দ্যের দিকে নয়। তিনি বাগ্মিতা চান প্রশংসিত হতে নয়, বোঝা যেতে — আর এটিই বক্তা ও বার্তাবাহকের পার্থক্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Knot in the Tongue",
          "bn": "জিহ্বার গিঁট"
        },
        "p": [
          {
            "en": "Musa (AS) had some impediment in his speech; the Quran attests it without describing its cause. In 26:13 he says my chest tightens and my tongue does not move freely, and in 28:34 he asks for Harun (AS) because he is more eloquent than me in speech. A widely repeated story attributes the impediment to a burning coal in childhood, but it does not rest on evidence that meets the standard of this module, so it is left aside here.",
            "bn": "মূসা (আঃ)-এর কথায় কোনো এক প্রকার জড়তা ছিল; কুরআন তা নিশ্চিত করে, কিন্তু তার কারণ বর্ণনা করে না। 26:13 আয়াতে তিনি বলেন, আমার বক্ষ সংকুচিত হয়ে আসে এবং আমার জিহ্বা সাবলীল চলে না; আর 28:34 আয়াতে তিনি হারূন (আঃ)-কে চেয়ে নেন, কারণ — সে কথায় আমার চেয়ে বেশি স্পষ্টভাষী। ছেলেবেলায় জ্বলন্ত কয়লা মুখে দেওয়ার একটি বহুল-প্রচারিত গল্প এই জড়তার কারণ হিসেবে বলা হয়, কিন্তু তা এই মডিউলের মান অনুযায়ী প্রমাণে দাঁড়ায় না, তাই এখানে তা বাদ রাখা হলো।"
          },
          {
            "en": "The commentators, Ibn Kathir among them, notice the measure of the request: he asked for a knot to be untied — the wording indicates removal sufficient for the mission, that they may understand my speech — not for ornamental eloquence. He requested what the task required and left the rest. There is manners with Allah in that restraint, and also self-knowledge: the goal was Pharaoh's comprehension of the truth, and every word of the request is subordinated to it.",
            "bn": "মুফাসসিরগণ — ইবনে কাসীর তাঁদের একজন — চাওয়াটির পরিমাপ লক্ষ করেন: তিনি একটি গিঁট খুলে দিতে বলেছেন — শব্দচয়নটি নির্দেশ করে মিশনের জন্য যতটুকু দরকার ততটুকু অপসারণ, 'যেন তারা আমার কথা বোঝে' — আলংকারিক বাগ্মিতা নয়। কাজে যা লাগে তিনি তা-ই চেয়েছেন, বাকিটা ছেড়ে দিয়েছেন। এই সংযমে আল্লাহর সঙ্গে আদব আছে, আত্মজ্ঞানও আছে: লক্ষ্য ছিল ফেরাউনের কাছে সত্য বোধগম্য হওয়া, আর চাওয়ার প্রতিটি শব্দ সেই লক্ষ্যের অধীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Granted, and Then Some",
          "bn": "কবুল, এবং আরও বেশি"
        },
        "p": [
          {
            "en": "The prayer does not stop at the tongue. In 20:29-32 Musa (AS) asks for a helper from his own family, Harun (AS) his brother, to share the burden and strengthen him. Asking for help is placed inside the prayer, not after it — competence in this story includes knowing what you cannot carry alone. The answer arrives in 20:36 with no conditions attached: you have been granted your request, O Musa. Every clause, chest to brother, is approved in one sentence.",
            "bn": "দোয়াটি জিহ্বায় থামে না। 20:29-32 আয়াতে মূসা (আঃ) নিজের পরিবার থেকে একজন সাহায্যকারী চান — তাঁর ভাই হারূন (আঃ) — বোঝা ভাগ করতে ও তাঁকে শক্তি জোগাতে। সাহায্য চাওয়াটা দোয়ার ভেতরেই রাখা, দোয়ার পরে নয় — এই কাহিনিতে যোগ্যতার মধ্যে এটাও পড়ে যে, একা কী বইতে পারবে না তা জানা। উত্তর আসে 20:36 আয়াতে, কোনো শর্ত ছাড়াই: হে মূসা, তোমার চাওয়া তোমাকে দেওয়া হলো। বক্ষ থেকে ভাই — প্রতিটি অনুচ্ছেদ এক বাক্যে মঞ্জুর।"
          },
          {
            "en": "There is a quiet comparison the mufassirun draw with the Prophet Muhammad ﷺ. What Musa (AS) asked for at the start of his mission, the expansion of the chest, was given to the final Prophet ﷺ unasked, as 94:1 states: did We not expand for you your chest? One prophet requests the provision and receives it; the other finds it already granted. Both accounts teach the same origin of capacity — it comes from Allah, whether petitioned or pre-installed.",
            "bn": "মুফাসসিরগণ এখানে নবী মুহাম্মাদ ﷺ-এর সঙ্গে একটি নীরব তুলনা টানেন। মূসা (আঃ) তাঁর মিশনের শুরুতে যা চেয়ে নিয়েছিলেন — বক্ষের প্রসারণ — শেষ নবী ﷺ-কে তা না চাইতেই দেওয়া হয়েছিল, যেমন 94:1 বলে: আমি কি তোমার জন্য তোমার বক্ষ প্রশস্ত করে দিইনি? এক নবী এই সম্বল প্রার্থনা করে পান; অন্যজন পান আগে থেকেই মঞ্জুর হয়ে থাকা অবস্থায়। দুটি বিবরণই সামর্থ্যের একই উৎস শেখায় — তা আসে আল্লাহর কাছ থেকে, চেয়ে নেওয়া হোক বা আগেই বসিয়ে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Using the Prayer Today",
          "bn": "আজ এই দোয়ার ব্যবহার"
        },
        "p": [
          {
            "en": "This du'a has become the standing prayer of Muslims before anything daunting — an exam, an interview, a difficult conversation, public speech, a new responsibility. Its fit is exact because its logic is general: every hard task has an inner face, an outer face and an instrument, and the prayer covers the three in order. Whoever says it is also repeating a piece of history — borrowing the words a prophet (AS) used on the night his life turned.",
            "bn": "এই দোয়া মুসলিমদের কাছে যেকোনো ভয় জাগানো কিছুর আগের নিয়মিত প্রার্থনা হয়ে উঠেছে — পরীক্ষা, সাক্ষাৎকার, কঠিন কথোপকথন, জনসমক্ষে বক্তৃতা, নতুন দায়িত্ব। এর খাপ খাওয়া এত নিখুঁত, কারণ এর যুক্তি সর্বজনীন: প্রতিটি কঠিন কাজের একটি ভেতরের দিক, একটি বাইরের দিক আর একটি হাতিয়ার থাকে, আর দোয়াটি ক্রম ধরে তিনটিই ঢেকে দেয়। যে এটি বলে, সে ইতিহাসের একটি টুকরোও পুনরাবৃত্তি করে — সেই শব্দগুলো ধার করে, যা এক নবী (আঃ) ব্যবহার করেছিলেন তাঁর জীবন-মোড়ানো রাতে।"
          },
          {
            "en": "The deeper habit it trains is the order of resort. Musa's (AS) first act between receiving the task and attempting it was du'a; planning came after, in the request for Harun (AS). Most of us reverse this — we plan, worry, draft and rehearse, and pray somewhere near the end if at all. The verse sequence suggests the inversion is costly, because the resource that actually decides such encounters, the state of the chest, is not one we can engineer ourselves.",
            "bn": "এটি যে গভীরতর অভ্যাস গড়ে তোলে তা হলো শরণাপন্ন হওয়ার ক্রম। দায়িত্ব পাওয়া ও তাতে হাত দেওয়ার মাঝখানে মূসা (আঃ)-এর প্রথম কাজ ছিল দোয়া; পরিকল্পনা এসেছে পরে, হারূন (আঃ)-কে চাওয়ার মধ্যে। আমরা অধিকাংশই এটি উল্টো করি — পরিকল্পনা করি, দুশ্চিন্তা করি, খসড়া বানাই, মহড়া দিই, আর দোয়া করি শেষের দিকে কোথাও — যদি আদৌ করি। আয়াতগুলোর ক্রম ইঙ্গিত দেয়, এই উল্টানোর দাম চড়া; কারণ এমন মুখোমুখি মুহূর্তগুলোর আসল নিষ্পত্তি করে যে সম্বল — বক্ষের অবস্থা — তা আমরা নিজেরা বানিয়ে নিতে পারি না।"
          }
        ]
      }
    ]
  },
  "20:82": {
    "sections": [
      {
        "h": {
          "en": "Where the Promise Is Placed",
          "bn": "প্রতিশ্রুতিটি যেখানে বসানো"
        },
        "p": [
          {
            "en": "Surah Ta-Ha is Makkan, and this verse falls inside the account of Musa (AS). Just before it, 20:80-81 reminds the Children of Israel that they were delivered from their enemy, given the appointment at the mount and sent manna and quails, and then warns them to eat of the good things without transgressing, lest His anger descend. The tone at that point is severe. Verse 20:82 answers it in the first person.",
            "bn": "সূরা ত্বা-হা মক্কী, আর এই আয়াতটি পড়ে মূসা (আঃ)-এর বৃত্তান্তের ভেতরে। এর ঠিক আগে 20:80-81 আয়াত বনী ইসরাঈলকে স্মরণ করিয়ে দেয় যে তাদের শত্রুর কবল থেকে উদ্ধার করা হয়েছিল, তূরের পাশে প্রতিশ্রুতির সময় দেওয়া হয়েছিল এবং মান্না ও সালওয়া পাঠানো হয়েছিল; তারপর সতর্ক করে যে উত্তম রিযিক থেকে খাও, তবে সীমালঙ্ঘন করো না, নইলে তাঁর ক্রোধ নেমে আসবে। সেখানে সুরটি কঠোর। 20:82 আয়াত তার উত্তর দেয় উত্তম পুরুষে।"
          },
          {
            "en": "What follows is more striking still. The very next verse, 20:83, turns to Musa (AS) with the question of why he hastened ahead of his people, and the passage then tells what happened while he was away: in 20:85 his people are tried and led astray by as-Samiri, and in 20:88 the calf is produced. The offer of forgiveness is set down immediately before the account of the worst lapse in the surah.",
            "bn": "এরপর যা আসে তা আরও তাৎপর্যপূর্ণ। ঠিক পরের আয়াত 20:83 মূসা (আঃ)-এর দিকে ফিরে জিজ্ঞেস করে, তিনি কেন সম্প্রদায়কে পেছনে ফেলে তাড়াহুড়া করলেন; এরপর অংশটি বলে তাঁর অনুপস্থিতিতে কী ঘটেছিল: 20:85 আয়াতে তাঁর সম্প্রদায় পরীক্ষিত হয় ও সামিরী তাদের বিপথগামী করে, আর 20:88 আয়াতে গো-বৎসের প্রতিকৃতি বের করা হয়। ক্ষমার প্রস্তাবটি বসানো হয়েছে সূরার সবচেয়ে বড় বিচ্যুতির বর্ণনার ঠিক আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ghaffar, Not Ghafir",
          "bn": "গাফ্‌ফার, গাফির নয়"
        },
        "p": [
          {
            "en": "Arabic could have said ghafir, one who forgives — the plain participle, true of anyone who has forgiven once. The verse says ghaffar, which is the intensive pattern, describing forgiveness as a settled and repeated characteristic rather than an occasional act. In English the distinction is the difference between forgiver and Perpetual Forgiver, and it carries the whole weight of the sentence. An emphatic lam is fixed to it as well: la-ghaffar.",
            "bn": "আরবি বলতে পারত 'গাফির' — ক্ষমাকারী; সাধারণ কর্তৃবাচক বিশেষণ, যা একবার ক্ষমা করেছেন এমন যে কারও ক্ষেত্রেই খাটে। আয়াতটি বলে 'গাফ্‌ফার', যা অতিশয়তাবাচক ছাঁচ — ক্ষমাকে বর্ণনা করে কদাচিৎ ঘটা কাজ হিসেবে নয়, বরং স্থায়ী ও পুনরাবৃত্ত বৈশিষ্ট্য হিসেবে। বাংলায় পার্থক্যটি গাফির ও গাফ্‌ফার-এর পার্থক্য, আর বাক্যটির গোটা ভারই তার ওপর। এর সঙ্গে জোরের 'লাম'-ও যুক্ত: 'লাগাফ্‌ফার'।"
          },
          {
            "en": "The same intensive form appears where a caller needs it most. In 71:10 Nuh (AS) urges his people to ask forgiveness of their Lord because He is ghaffar, and in 40:42 the believer of Pharaoh's household says he is calling his people to the Mighty, the ghaffar. In each case the form is doing pastoral work: it answers the person who assumes he has already used up whatever allowance was available to him.",
            "bn": "একই অতিশয়তাবাচক রূপটি আসে ঠিক সেখানে, যেখানে আহ্বানকারীর তা সবচেয়ে বেশি দরকার। 71:10 আয়াতে নূহ (আঃ) তাঁর সম্প্রদায়কে রবের কাছে ক্ষমা চাইতে বলেন, কারণ তিনি গাফ্‌ফার; আর 40:42 আয়াতে ফিরআউনের পরিবারের সেই মুমিন বলেন যে তিনি তাঁর সম্প্রদায়কে ডাকছেন মহাপরাক্রান্ত ও গাফ্‌ফারের দিকে। প্রতিটি ক্ষেত্রেই রূপটি একটি চিকিৎসার কাজ করছে: এটি উত্তর দেয় সেই মানুষকে, যে ধরে নিয়েছে তার জন্য বরাদ্দ যেটুকু ছিল তা সে ইতিমধ্যেই ফুরিয়ে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Conditions in Order",
          "bn": "ক্রমান্বয়ে চারটি শর্ত"
        },
        "p": [
          {
            "en": "Count them in the Arabic and there are four: taba, he repented; wa amana, and believed; wa amila salihan, and did righteous work; thumma ihtada, then was guided. Three are strung together with the simple conjunction wa. The fourth is joined with thumma, and thumma in Arabic implies an interval — something that comes afterwards, with time between. The grammar itself separates the turn from whatever is supposed to follow the turn.",
            "bn": "আরবিতে গুনলে শর্ত চারটি: 'তাবা' — সে তওবা করল; 'ওয়া আমানা' — আর ঈমান আনল; 'ওয়া আমিলা সালিহান' — আর সৎকাজ করল; 'সুম্মাহ্‌তাদা' — অতঃপর হিদায়াতপ্রাপ্ত হলো। প্রথম তিনটি জোড়া হয়েছে সাধারণ সংযোজক 'ওয়া' দিয়ে। চতুর্থটি জোড়া হয়েছে 'সুম্মা' দিয়ে, আর আরবিতে 'সুম্মা' একটি ব্যবধান বোঝায় — এমন কিছু যা পরে আসে, মাঝখানে সময় রেখে। ব্যাকরণ নিজেই ফিরে আসাকে আলাদা করে দেয় সেই জিনিস থেকে, যা ফিরে আসার পরে হওয়ার কথা।"
          },
          {
            "en": "The first three appear together elsewhere without the fourth. 25:70 promises that for those who repent, believe and do righteous work Allah will replace their evil deeds with good. So the addition here is deliberate, and it is the addition that has occupied the commentators. Everything distinctive about 20:82 is carried by two words at its end.",
            "bn": "প্রথম তিনটি অন্যত্রও একসঙ্গে আসে, চতুর্থটি ছাড়াই। 25:70 আয়াত প্রতিশ্রুতি দেয় যে যারা তওবা করে, ঈমান আনে ও সৎকাজ করে, আল্লাহ তাদের মন্দ কাজগুলোকে ভালো দিয়ে বদলে দেবেন। অর্থাৎ এখানে সংযোজনটি ইচ্ছাকৃত, আর সেই সংযোজন নিয়েই মুফাসসিরগণ ব্যস্ত থেকেছেন। 20:82 আয়াতের যা কিছু স্বাতন্ত্র্য, তা বহন করছে শেষের দুটি শব্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "What Thumma Ihtada Means",
          "bn": "'সুম্মাহ্‌তাদা' মানে কী"
        },
        "p": [
          {
            "en": "The mufassirun genuinely differ here, and it is more useful to see the range than to be handed one answer. The reading most of them give is continuance: he held to that path and remained upright on it, so that death found him upon faith. On this reading the fourth condition is not a new deed at all. It is the durability of the first three, and its test is what a person is still doing years later.",
            "bn": "এখানে মুফাসসিরগণের মধ্যে প্রকৃত মতভেদ আছে, আর একটিমাত্র উত্তর হাতে ধরিয়ে দেওয়ার চেয়ে মতগুলোর পরিসর দেখা বেশি কাজে দেয়। তাঁদের অধিকাংশ যে পাঠটি দেন তা হলো অবিচলতা: সে ওই পথ ধরে রাখল ও তার ওপর সোজা রইল, যাতে মৃত্যু তাকে ঈমানের ওপরই পায়। এই পাঠে চতুর্থ শর্তটি নতুন কোনো আমলই নয়। এটি প্রথম তিনটির স্থায়িত্ব, আর এর পরীক্ষা হলো — বছর কয়েক পরেও মানুষটি কী করছে।"
          },
          {
            "en": "Others report a narrower sense: that ihtida here is holding to the guidance as it was taught, keeping to the Sunnah rather than to what a person devises for himself. A third reading takes it as arriving at certainty — knowing, and no longer doubting, that this road leads where it claims to. The three do not cancel each other, and all three agree on one thing: the fourth term describes what happens after the turn, not the turn itself.",
            "bn": "অন্যরা আরও সংকীর্ণ একটি অর্থ বর্ণনা করেন: এখানে 'ইহতিদা' মানে হিদায়াতকে যেভাবে শেখানো হয়েছে সেভাবেই ধরে রাখা, অর্থাৎ নিজের বানানো পথ নয়, সুন্নাহ আঁকড়ে থাকা। তৃতীয় একটি পাঠ একে বোঝে নিশ্চয়তায় পৌঁছানো হিসেবে — জেনে ফেলা, এবং আর সন্দেহ না করা, যে এই পথ যেখানে পৌঁছানোর দাবি করে সেখানেই পৌঁছায়। তিনটি পাঠ পরস্পরকে বাতিল করে না, আর তিনটিই একটি বিষয়ে একমত: চতুর্থ পদটি বর্ণনা করে ফিরে আসার পরে যা ঘটে, ফিরে আসাটিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Despairs, One Verse",
          "bn": "দুই ধরনের নিরাশা, এক আয়াত"
        },
        "p": [
          {
            "en": "The verse guards against opposite errors at the same time. Ghaffar answers the person who has decided his record disqualifies him; the four conditions answer the person who treats forgiveness as a formality that costs nothing. 39:53 does the first half at greater length, forbidding despair of Allah's mercy and stating that He forgives sins altogether. This verse supplies the other half, and it does so without softening either one.",
            "bn": "আয়াতটি একই সঙ্গে দুটি বিপরীত ভুল থেকে পাহারা দেয়। 'গাফ্‌ফার' উত্তর দেয় সেই মানুষকে, যে ঠিক করে নিয়েছে তার আমলনামা তাকে অযোগ্য করে দিয়েছে; আর চারটি শর্ত উত্তর দেয় সেই মানুষকে, যে ক্ষমাকে বিনা মূল্যের একটি আনুষ্ঠানিকতা মনে করে। 39:53 আয়াত প্রথম অর্ধেকটি আরও বিস্তারিতভাবে করে — আল্লাহর রহমত থেকে নিরাশ হতে নিষেধ করে ও জানায় যে তিনি সমস্ত পাপ ক্ষমা করেন। এই আয়াতটি জোগায় বাকি অর্ধেক, আর তা করে কোনোটিকেই নরম না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Fourth Word",
          "bn": "চতুর্থ শব্দটি নিয়ে বাঁচা"
        },
        "p": [
          {
            "en": "Because thumma implies an interval, the fourth condition can only be met in ordinary time — in the weeks after the intention, when nothing feels dramatic. That is where repentance is usually lost, and it is lost to the same details that produced the sin: the company kept, the hours left empty, the device within reach. Changing those is unimpressive work, and it is the work the word is asking for.",
            "bn": "যেহেতু 'সুম্মা' একটি ব্যবধান বোঝায়, তাই চতুর্থ শর্তটি পূরণ হতে পারে কেবল সাধারণ সময়েই — নিয়ত করার পরের সপ্তাহগুলোতে, যখন নাটকীয় কিছুই মনে হয় না। সেখানেই সাধারণত তওবা হারিয়ে যায়, আর হারায় সেই একই খুঁটিনাটির কাছে যা পাপটি তৈরি করেছিল: যাদের সঙ্গ, যে সময়গুলো খালি পড়ে থাকে, হাতের নাগালের যন্ত্রটি। এগুলো বদলানো চমকহীন কাজ, আর শব্দটি সেই কাজটিই চাইছে।"
          },
          {
            "en": "The same surah supplies the shape of it. 20:132 tells the Prophet ﷺ to enjoin prayer upon his family and to be steadfast in it, then removes the anxiety underneath by saying that Allah asks no provision from him but provides for him. Steadfastness there is attached to a repeated act, not to a mood — which is exactly how the fourth condition of 20:82 becomes something a person can actually keep.",
            "bn": "একই সূরা এর আকৃতিটিও জোগায়। 20:132 আয়াত নবী ﷺ-কে বলে পরিবারকে নামাযের নির্দেশ দিতে ও তাতে অবিচল থাকতে, তারপর নিচের দুশ্চিন্তাটি সরিয়ে দেয় এই বলে যে আল্লাহ তাঁর কাছে রিযিক চান না, বরং তিনিই তাঁকে রিযিক দেন। সেখানে অবিচলতা যুক্ত একটি পুনরাবৃত্ত কাজের সঙ্গে, কোনো মনোভাবের সঙ্গে নয় — আর ঠিক এভাবেই 20:82 আয়াতের চতুর্থ শর্তটি এমন কিছু হয়ে ওঠে যা মানুষ সত্যিই ধরে রাখতে পারে।"
          }
        ]
      }
    ]
  },
  "20:114": {
    "sections": [
      {
        "h": {
          "en": "The True King",
          "bn": "প্রকৃত বাদশাহ"
        },
        "p": [
          {
            "en": "Fa-ta'ala Allahu al-Malik al-Haqq: exalted is Allah, the King, the Real. The sentence lands at the end of a passage about the Quran itself — 20:113 says He sent it down as an Arabic Quran and turned its warnings through different forms, so that people might gain taqwa or that it might awaken remembrance in them. The exaltation sets the scale: the Book under discussion is the speech of the true Sovereign, not one voice among many.",
            "bn": "'ফাতা'আলাল্লাহুল মালিকুল হাক্ক' — মহিমান্বিত আল্লাহ, বাদশাহ, প্রকৃত সত্য। বাক্যটি এসে পড়ে খোদ কুরআন সম্পর্কিত একটি অনুচ্ছেদের শেষে — 20:113 বলে, তিনি এটিকে আরবি কুরআনরূপে নাযিল করেছেন এবং এর সতর্কবাণীগুলো নানা রূপে ঘুরিয়ে-ফিরিয়ে বলেছেন, যাতে মানুষ তাকওয়া অর্জন করে অথবা তা তাদের মধ্যে স্মরণ জাগিয়ে দেয়। এই মহিমা-ঘোষণা মাপকাঠি ঠিক করে দেয়: যে কিতাব নিয়ে কথা হচ্ছে তা প্রকৃত বাদশাহর বাণী — অনেক কণ্ঠের মধ্যে একটি কণ্ঠ নয়।"
          },
          {
            "en": "The pairing of the two names deserves a pause. Kings of the earth hold a kingship that is borrowed, partial and ending; al-Haqq is the One whose kingship simply is. Surah Ta-Ha has already shown the alternative at length in Pharaoh, a king whose claim collapsed before Musa (AS). Between the false king defeated and the true King exalted, the surah places one small command about how to receive knowledge.",
            "bn": "নাম দুটির জোড় একটু থেমে ভাবার দাবি রাখে। পৃথিবীর রাজাদের রাজত্ব ধার করা, আংশিক ও ফুরিয়ে যাওয়ার; আর আল-হাক্ক তিনিই, যাঁর রাজত্ব স্রেফ আছে — এমনিই। সূরা ত্বা-হা এর বিকল্পটি আগেই বিস্তারিত দেখিয়েছে ফিরআউনের মধ্যে — এক রাজা, মূসা (আঃ)-এর সামনে যার দাবি ভেঙে পড়েছিল। পরাজিত মিথ্যা রাজা আর মহিমান্বিত প্রকৃত বাদশাহর মাঝখানে সূরাটি বসিয়ে দেয় ছোট্ট একটি নির্দেশ — জ্ঞান কীভাবে গ্রহণ করতে হয় সে সম্পর্কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Hasten",
          "bn": "তাড়াহুড়ো কোরো না"
        },
        "p": [
          {
            "en": "And do not hasten with the Quran before its revelation to you is completed. The Prophet ﷺ would move his tongue with the revelation as it came down, eager to secure it, fearing it might slip away. Al-Bukhari narrates from Ibn Abbas (RA) that this is what 75:16-19 addressed: do not move your tongue with it to hasten it; upon Us is its collection and its recitation. The commentators read our verse alongside that passage — the same eagerness, the same gentle correction.",
            "bn": "আর তোমার প্রতি এর ওহী সম্পূর্ণ হওয়ার আগে কুরআন নিয়ে তাড়াহুড়ো কোরো না। ওহী নাযিল হওয়ার সময় নবী ﷺ তাঁর জিহ্বা নাড়াতেন — তা ধরে রাখার আগ্রহে, হারিয়ে যাওয়ার ভয়ে। বুখারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, 75:16-19 এই বিষয়টিই সম্বোধন করেছিল: তাড়াতাড়ি আয়ত্ত করতে এর সঙ্গে তোমার জিহ্বা নাড়িয়ো না; এর সংরক্ষণ ও পাঠ আমাদেরই দায়িত্বে। মুফাসসিরগণ আমাদের আয়াতটিকে সেই অনুচ্ছেদের পাশে রেখে পড়েন — সেই একই আগ্রহ, সেই একই কোমল সংশোধন।"
          },
          {
            "en": "The reassurance behind the command is carried elsewhere too: 87:6 promises, We shall make you recite, and you will not forget. The Prophet ﷺ was not being told to care less about the Quran; he was being told that its preservation did not rest on his hurry. Revelation had a Sender, a schedule and a guarantee, and the receiver's task was to listen fully until his portion was complete.",
            "bn": "নির্দেশটির পেছনের আশ্বাসও অন্যত্র বহন করা হয়েছে: 87:6 প্রতিশ্রুতি দেয় — আমরা তোমাকে পড়াব, আর তুমি ভুলবে না। নবী ﷺ-কে কুরআনের প্রতি কম যত্নবান হতে বলা হচ্ছিল না; বলা হচ্ছিল, এর সংরক্ষণ তাঁর তাড়াহুড়োর ওপর নির্ভর করে না। ওহীর একজন প্রেরক ছিলেন, একটি সময়সূচি ছিল, একটি নিশ্চয়তা ছিল — আর গ্রহীতার কাজ ছিল নিজের অংশ সম্পূর্ণ হওয়া পর্যন্ত পুরোপুরি শোনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Say: My Lord, Increase Me",
          "bn": "বলো: হে আমার রব, আমাকে বাড়িয়ে দাও"
        },
        "p": [
          {
            "en": "Then the remedy for eagerness is given, and it is not suppression but redirection: wa qul rabbi zidni 'ilma — and say, My Lord, increase me in knowledge. Ibn Hajar remarks, commenting on this verse in Fath al-Bari, that Allah did not command His Prophet ﷺ to ask for increase in anything except knowledge. Not wealth, not ease, not standing — knowledge alone is the thing whose growth is made a standing request on the tongue of the best of creation.",
            "bn": "তারপর আগ্রহের প্রতিকার দেওয়া হয়, আর তা দমন নয় — মুখ ঘুরিয়ে দেওয়া: 'ওয়া কুল রাব্বি যিদনী ইলমা' — বলো, হে আমার রব, আমার জ্ঞান বাড়িয়ে দাও। ইবনে হাজার 'ফাতহুল বারী'-তে এই আয়াতের ব্যাখ্যায় মন্তব্য করেন, আল্লাহ তাঁর নবী ﷺ-কে জ্ঞান ছাড়া আর কোনো কিছুর বৃদ্ধি চাইতে নির্দেশ দেননি। সম্পদ নয়, স্বাচ্ছন্দ্য নয়, মর্যাদা নয় — একমাত্র জ্ঞানই সেই জিনিস, যার বৃদ্ধিকে সৃষ্টির সেরা মানুষের জিহ্বায় স্থায়ী প্রার্থনা বানিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "The form matters: zidni, increase me, is a verb of continuation. It concedes that knowledge already exists and asks that it keep growing, which makes this a du'a that never expires. The one who knew most among creation was ordered to keep asking; the commentators draw the obvious edge of that: whoever thinks he has finished learning has misread his own position more badly than any other student.",
            "bn": "শব্দরূপটিও গুরুত্বপূর্ণ: 'যিদনী' — আমাকে বাড়িয়ে দাও — ধারাবাহিকতার ক্রিয়া। এটি মেনে নেয় যে জ্ঞান ইতিমধ্যে আছে, এবং চায় তা বাড়তে থাকুক — ফলে এ এমন এক দোয়া যার মেয়াদ কখনো ফুরোয় না। সৃষ্টির মধ্যে যিনি সবচেয়ে বেশি জানতেন, তাঁকেই চাইতে থাকার নির্দেশ দেওয়া হয়েছিল; মুফাসসিরগণ এর স্পষ্ট ধারটি তুলে ধরেন: যে ভাবে তার শেখা শেষ, সে নিজের অবস্থান অন্য যেকোনো ছাত্রের চেয়ে বেশি ভুল পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Receiving at Its Own Pace",
          "bn": "জ্ঞান গ্রহণের নিজস্ব গতি"
        },
        "p": [
          {
            "en": "Tabari records more than one understanding of the hastening: that the Prophet ﷺ should not recite ahead of Jibril (AS) before a passage was complete, and that he should not ask for revelation ahead of its sending. Both come back to one discipline: receiving must not outrun what has been given. Knowledge from Allah arrives measured, and the measure is His; the student's ambition is honoured, but its timing is not his to set.",
            "bn": "তাড়াহুড়োটির একাধিক ব্যাখ্যা তাবারী লিপিবদ্ধ করেন: নবী ﷺ যেন কোনো অংশ সম্পূর্ণ হওয়ার আগে জিবরীল (আঃ)-এর আগে আগে না পড়েন, এবং যেন ওহী পাঠানোর আগে তা চেয়ে না বসেন। দুটোই ফিরে আসে একটি শৃঙ্খলায়: গ্রহণ যেন প্রদত্তকে ছাড়িয়ে না যায়। আল্লাহর কাছ থেকে জ্ঞান আসে মাপা হয়ে, আর মাপটি তাঁরই; ছাত্রের উচ্চাকাঙ্ক্ষা সম্মানিত, কিন্তু তার সময় নির্ধারণ ছাত্রের হাতে নয়।"
          },
          {
            "en": "The order within the verse is its own lesson. First the King is exalted, then the hurry is restrained, then the asking is commanded. Sound learning keeps that sequence: reverence for the One who gives knowledge, patience with the pace at which it is given, and hunger turned into supplication. The arrangement guards the learner against the two familiar failures — studying without reverence, and concluding before the matter is complete.",
            "bn": "আয়াতের ভেতরের ক্রমটিই একটি শিক্ষা। প্রথমে বাদশাহর মহিমা ঘোষণা, তারপর তাড়াহুড়োর লাগাম, তারপর চাওয়ার নির্দেশ। সুস্থ শিক্ষা সেই ক্রমই রক্ষা করে: যিনি জ্ঞান দেন তাঁর প্রতি সম্ভ্রম, যে গতিতে তা দেওয়া হয় তার প্রতি ধৈর্য, আর ক্ষুধাকে প্রার্থনায় রূপান্তর। এই বিন্যাস শিক্ষার্থীকে দুটি চেনা ব্যর্থতা থেকে রক্ষা করে — সম্ভ্রম ছাড়া পড়া, আর বিষয় সম্পূর্ণ হওয়ার আগে সিদ্ধান্তে পৌঁছানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge Elsewhere in the Quran",
          "bn": "কুরআনের অন্যত্র জ্ঞান"
        },
        "p": [
          {
            "en": "The Quran consistently ranks knowledge as a gift rather than a possession. 12:76 states that above every possessor of knowledge there is one more knowing. 4:113 reminds the Prophet ﷺ that Allah taught him what he did not know, and calls His favour upon him great. And 2:255 fixes the proportion: creatures encompass nothing of His knowledge except what He wills. Rabbi zidni 'ilma is the prayer of someone who has understood those proportions.",
            "bn": "কুরআন ধারাবাহিকভাবে জ্ঞানকে সম্পত্তি নয়, উপহার হিসেবে স্থান দেয়। 12:76 বলে, প্রত্যেক জ্ঞানীর ওপরে আছেন আরও অধিক জ্ঞানী। 4:113 নবী ﷺ-কে স্মরণ করিয়ে দেয়, আল্লাহ তাঁকে শিখিয়েছেন যা তিনি জানতেন না, এবং তাঁর প্রতি আল্লাহর অনুগ্রহকে বলে মহান। আর 2:255 অনুপাত ঠিক করে দেয়: সৃষ্টিরা তাঁর জ্ঞানের কিছুই আয়ত্ত করতে পারে না, তিনি যা চান তা ছাড়া। 'রাব্বি যিদনী ইলমা' সেই মানুষের দোয়া, যে এই অনুপাতগুলো বুঝেছে।"
          },
          {
            "en": "35:28 adds the test of whether knowledge is working: it is those with knowledge among His servants who fear Allah. Increase in 'ilm that does not increase awe is increase in information only. The du'a of this verse asks for the kind that benefits — the kind the Prophet ﷺ himself would request in the morning: Ibn Majah relates from Umm Salamah (RA) that he would ask after Fajr for beneficial knowledge, wholesome provision and accepted deeds.",
            "bn": "35:28 যোগ করে জ্ঞান কাজ করছে কি না তার পরীক্ষা: তাঁর বান্দাদের মধ্যে জ্ঞানীরাই আল্লাহকে ভয় করে। যে ইলমের বৃদ্ধি ভয়ভক্তি বাড়ায় না, তা শুধু তথ্যের বৃদ্ধি। এই আয়াতের দোয়া চায় সেই জ্ঞান, যা উপকারে আসে — যে জ্ঞান নবী ﷺ নিজে সকালে চাইতেন: ইবনে মাজাহ উম্মে সালামা (রাঃ) থেকে বর্ণনা করেন, তিনি ফজরের পর চাইতেন উপকারী জ্ঞান, পবিত্র রিযিক ও কবুলযোগ্য আমল।"
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
            "en": "Practically, the verse sets a habit at both ends of learning. Before it: the du'a, said in the words revealed for it, rabbi zidni 'ilma. After it: restraint — not passing on what is half-heard, not ruling on what is half-read, not summarising a matter before it has finished being said. In an age that rewards the fastest answer, the verse quietly sides with the one who waits until the matter — or the other person — has completed.",
            "bn": "ব্যবহারিকভাবে আয়াতটি শেখার দুই প্রান্তেই একটি অভ্যাস বসিয়ে দেয়। আগে: দোয়া — তার জন্য নাযিল হওয়া শব্দেই, 'রাব্বি যিদনী ইলমা'। পরে: সংযম — অর্ধেক শোনা কথা ছড়িয়ে না দেওয়া, অর্ধেক পড়া বিষয়ে রায় না দেওয়া, কথা শেষ হওয়ার আগে সারাংশ না বানানো। যে যুগ দ্রুততম উত্তরকে পুরস্কৃত করে, সেখানে আয়াতটি নীরবে তার পক্ষ নেয়, যে অপেক্ষা করে — বিষয়টি, কিংবা সামনের মানুষটি, শেষ করা পর্যন্ত।"
          },
          {
            "en": "And it keeps the learner's ceiling honest. The request has no finishing point, because knowledge has no finishing point; what ends is only the learner's patience or humility. The one who says this du'a daily is confessing that yesterday's understanding was not enough, and asking that today's be more — which is exactly the posture the true King taught the best of His creation ﷺ to keep.",
            "bn": "আর এটি শিক্ষার্থীর সীমাকে সৎ রাখে। এই চাওয়ার কোনো শেষবিন্দু নেই, কারণ জ্ঞানের কোনো শেষবিন্দু নেই; শেষ হয় কেবল শিক্ষার্থীর ধৈর্য বা বিনয়। যে প্রতিদিন এই দোয়া বলে, সে স্বীকার করছে গতকালের বোঝাপড়া যথেষ্ট ছিল না, আর চাইছে আজকেরটা যেন আরও বেশি হয় — ঠিক এই অবস্থানটিই প্রকৃত বাদশাহ তাঁর সৃষ্টির সেরা মানুষ ﷺ-কে ধরে রাখতে শিখিয়েছিলেন।"
          }
        ]
      }
    ]
  },
  "20:124": {
    "sections": [
      {
        "h": {
          "en": "The Half It Answers",
          "bn": "যে অর্ধেকের জবাব এটি"
        },
        "p": [
          {
            "en": "The verse is one half of a pair. 20:123 closes Adam's story with the descent and a promise: whoever follows My guidance will not go astray and will not be wretched — la yadillu wa la yashqa, two denials. Ibn Kathir reports Ibn Abbas (RA) reading them as not misguided in this life and not distressed in the Hereafter. Our verse answers with two afflictions in the same order: a constricted living now, and a blind raising then.",
            "bn": "আয়াতটি একটি জোড়ার এক অর্ধেক। 20:123 আদমের কাহিনি শেষ করে অবতরণ ও একটি প্রতিশ্রুতি দিয়ে: যে আমার হেদায়েত অনুসরণ করবে সে পথভ্রষ্ট হবে না এবং দুর্ভাগা হবে না — লা ইয়াদিল্লু ওয়া লা ইয়াশকা, দুটি অস্বীকৃতি। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, তিনি এ দুটিকে পড়েছেন এভাবে: এই জীবনে পথভ্রষ্ট নয়, আর আখিরাতে দুর্দশাগ্রস্ত নয়। আমাদের আয়াতটি একই ক্রমে দুটি বিপর্যয় দিয়ে জবাব দেয়: এখন সংকুচিত জীবিকা, আর তখন অন্ধ অবস্থায় উত্থান।"
          },
          {
            "en": "The pair sits at the end of a surah preoccupied with forgetting. 20:115 says that a covenant was taken from Adam before, and he forgot, and We found no determination in him. The same word returns at the close of this very exchange, in 20:126, where the man is told that he forgot the signs and is therefore forgotten today. Between those two forgettings the whole human story, as this surah tells it, is contained.",
            "bn": "জোড়াটি বসে আছে এমন এক সূরার শেষে যা ভুলে যাওয়া নিয়ে আচ্ছন্ন। 20:115 বলে, ইতঃপূর্বে আদমের কাছ থেকে অঙ্গীকার নেওয়া হয়েছিল, কিন্তু সে ভুলে গেল, আর আমি তার মধ্যে দৃঢ়সংকল্প পাইনি। একই শব্দ ফিরে আসে ঠিক এই কথোপকথনের শেষে, 20:126-এ, যেখানে সেই ব্যক্তিকে বলা হয় যে সে নিদর্শনগুলো ভুলে গিয়েছিল, তাই আজ তাকেই ভুলে যাওয়া হচ্ছে। এই দুই ভুলে যাওয়ার মাঝখানেই ধরা আছে গোটা মানব-কাহিনি, অন্তত এই সূরা যেভাবে তা বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A'rada: Turning the Side",
          "bn": "আ'রাদা: পাশ ফিরিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Wa man a'rada 'an dhikri — and whoever turns away from My remembrance. A'rada is built on 'ard, the side: to give something your side instead of your face. It is not a word for denial or open rejection. A person can hold the creed intact and still be described here, because what the verb reports is a body angled elsewhere. Ibn Kathir glosses it as opposing His command and what He revealed, neglecting it, and taking guidance from something other than it.",
            "bn": "ওয়া মান আ'রাদা 'আন যিকরী — আর যে আমার স্মরণ থেকে মুখ ফিরিয়ে নেয়। 'আ'রাদা' গড়া হয়েছে ''আরদ' থেকে, যার অর্থ পাশ: কোনো কিছুকে মুখ না দিয়ে পাশ দেখানো। এটি অস্বীকার বা প্রকাশ্য প্রত্যাখ্যানের শব্দ নয়। কেউ আকীদা অক্ষুণ্ন রেখেও এই বর্ণনার ভেতরে পড়তে পারে, কারণ ক্রিয়াপদটি যা জানায় তা হলো অন্যদিকে ঘুরে থাকা একটি শরীর। ইবনে কাসীর এর ব্যাখ্যা করেন: তাঁর আদেশ ও তাঁর নাযিলকৃত বিধানের বিরোধিতা করা, তা অবহেলা করা, আর তা ছাড়া অন্য কিছু থেকে পথনির্দেশ নেওয়া।"
          },
          {
            "en": "And dhikri is His remembrance in both of the directions the phrase allows — the Quran He sent down as a reminder, and the servant's own remembering of Him. The commentators do not treat the two as rivals, since a person who has turned from the one has already turned from the other. What the verse describes is not a single act but a direction, held long enough that it has become a way of standing.",
            "bn": "আর 'যিকরী' শব্দটি তাঁর স্মরণ — বাক্যাংশটি যে দুই অর্থের অনুমতি দেয় তার দুটোতেই: তিনি স্মারক হিসেবে যে কুরআন নাযিল করেছেন, আর বান্দার নিজের তাঁকে স্মরণ করা। মুফাসসিরগণ এ দুটিকে প্রতিদ্বন্দ্বী হিসেবে দেখেন না, কারণ যে একটি থেকে মুখ ফিরিয়েছে সে অন্যটি থেকেও ইতোমধ্যেই ফিরিয়েছে। আয়াতটি যা বর্ণনা করে তা একটি কাজ নয়, একটি দিক — যা এত দীর্ঘ সময় ধরে রাখা হয়েছে যে তা দাঁড়ানোরই একটি ধরন হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Danka",
          "bn": "দানকা"
        },
        "p": [
          {
            "en": "The consequence is ma'ishatan danka. Ma'ishah is what a person lives on and how he lives, which is why translators render it both as life and as livelihood — the word carries both. Dank is narrowness and constriction, the opposite of spaciousness, and the grammarians note that it is a verbal noun pressed into service as a description, which is why it does not take the feminine ending that would ordinarily follow ma'ishah.",
            "bn": "পরিণামটি হলো 'মাঈশাতান দানকা'। 'মাঈশাহ' মানে মানুষ যা দিয়ে বাঁচে এবং যেভাবে বাঁচে — এ কারণেই অনুবাদকেরা একে কখনো 'জীবন', কখনো 'জীবিকা' বলে অনুবাদ করেন; শব্দটি দুটোই বহন করে। 'দানক' মানে সংকীর্ণতা ও সংকোচন, প্রশস্ততার বিপরীত; আর ব্যাকরণবিদরা লক্ষ করেন যে এটি একটি ক্রিয়াবাচক বিশেষ্য যাকে বিশেষণের কাজে লাগানো হয়েছে — এ কারণেই 'মাঈশাহ'-র পরে যে স্ত্রীবাচক প্রত্যয় সাধারণত আসত, তা এখানে আসেনি।"
          },
          {
            "en": "Ibn Kathir's gloss is specific. Such a person's life will be hard in this world, with no tranquillity and no expansion of the breast; his chest will be constrained by his misguidance, and even if outwardly he wears what he likes, eats what he likes and lives where he wants, he will not be at ease, because his heart lacks certainty and he is left in agitation and doubt. The narrowness described there is not a bank balance. It is a room to breathe in.",
            "bn": "ইবনে কাসীরের ব্যাখ্যা সুনির্দিষ্ট। এমন মানুষের জীবন এই দুনিয়ায় কঠিন হবে — কোনো প্রশান্তি নেই, বুকের কোনো প্রশস্ততা নেই; তার বক্ষ সংকুচিত থাকবে তার গোমরাহির কারণে। বাইরে থেকে সে যা খুশি পরুক, যা খুশি খাক, যেখানে খুশি থাকুক — সে স্বস্তিতে থাকবে না, কারণ তার হৃদয়ে দৃঢ় প্রত্যয় নেই এবং সে অস্থিরতা ও সংশয়ের মধ্যে পড়ে থাকে। সেখানে যে সংকীর্ণতার কথা বলা হয়েছে তা ব্যাংকের হিসাব নয়। তা হলো নিঃশ্বাস নেওয়ার মতো জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised Blind, and What Follows",
          "bn": "অন্ধ অবস্থায় উত্থান, আর তারপর"
        },
        "p": [
          {
            "en": "Wa nahshuruhu yawmal-qiyamati a'ma — and We will gather him on the Day of Resurrection blind. Ibn Kathir reports Mujahid, Abu Salih and as-Suddi explaining the blindness as having no argument left to offer, and Ikrimah as being blind to everything except the Fire. He sets beside it 17:97, which describes people gathered upon their faces, blind and dumb and deaf. The blindness is not an added cruelty but a shape that matches what came before it.",
            "bn": "ওয়া নাহশুরুহু ইয়াওমাল-কিয়ামাতি আ'মা — আর কিয়ামতের দিন আমি তাকে অন্ধ অবস্থায় উঠাব। ইবনে কাসীর মুজাহিদ, আবু সালিহ ও আস-সুদ্দী থেকে বর্ণনা করেন যে এই অন্ধত্বের অর্থ কোনো যুক্তি বাকি না থাকা, আর ইকরিমা থেকে বর্ণনা করেন যে সে জাহান্নাম ছাড়া সবকিছুর ব্যাপারেই অন্ধ থাকবে। তিনি এর পাশে রাখেন 17:97, যেখানে মানুষদের উপুড় মুখে একত্র করার কথা আছে — অন্ধ, বোবা ও বধির অবস্থায়। এই অন্ধত্ব বাড়তি নিষ্ঠুরতা নয়, বরং এমন এক আকৃতি যা তার আগের ঘটনার সঙ্গে মিলে যায়।"
          },
          {
            "en": "20:125 then gives the man a line of his own: my Lord, why have You raised me blind when I used to see? 20:126 answers in his own vocabulary: thus did Our signs come to you, and you forgot them; and thus are you today forgotten. 20:127 generalises the case and adds that the punishment of the Hereafter is more severe and more lasting. Stopping at our verse leaves a bare threat; read on, and the man is walked through the argument himself.",
            "bn": "এরপর 20:125 সেই ব্যক্তিকে নিজের একটি কথা বলার সুযোগ দেয়: হে আমার রব, আমাকে কেন অন্ধ অবস্থায় উঠালেন, অথচ আমি তো দেখতে পেতাম? 20:126 জবাব দেয় তারই শব্দভাণ্ডারে: এভাবেই আমার নিদর্শনগুলো তোমার কাছে এসেছিল আর তুমি সেগুলো ভুলে গিয়েছিলে; আর এভাবেই আজ তোমাকে ভুলে যাওয়া হচ্ছে। 20:127 বিষয়টিকে সাধারণীকরণ করে এবং যোগ করে যে আখিরাতের শাস্তি আরও কঠিন ও আরও স্থায়ী। আমাদের আয়াতে থেমে গেলে থাকে নিছক এক হুমকি; পড়ে গেলে দেখা যায়, লোকটিকে যুক্তির ভেতর দিয়ে নিজেই হাঁটানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Opposite of Narrow",
          "bn": "সংকীর্ণতার বিপরীত"
        },
        "p": [
          {
            "en": "13:28 states the same law from the other side: hearts come to rest by the remembrance of Allah. Set beside each other, the two verses show that the choice is not between remembrance and neutrality; it is between a heart that has somewhere to settle and one that has nowhere, in identical outward circumstances. That is why the constriction can arrive inside a comfortable life, and why the relief can arrive inside a hard one.",
            "bn": "13:28 একই বিধান বলে অন্য দিক থেকে: আল্লাহর স্মরণেই হৃদয় প্রশান্তি পায়। দুটি আয়াত পাশাপাশি রাখলে দেখা যায়, নির্বাচনটি স্মরণ আর নিরপেক্ষতার মধ্যে নয়; নির্বাচনটি এমন এক হৃদয় আর অন্য এক হৃদয়ের মধ্যে — একটির থিতু হওয়ার জায়গা আছে, অন্যটির নেই, অথচ বাইরের পরিস্থিতি হুবহু এক। এ কারণেই সংকীর্ণতা আরামদায়ক জীবনের ভেতরেও আসতে পারে, আর স্বস্তি আসতে পারে কঠিন জীবনের ভেতরেও।"
          },
          {
            "en": "The surah supplies its own remedy a few verses later. 20:130 tells the Prophet ﷺ to be patient over what they say and to exalt his Lord with praise before the rising of the sun and before its setting, and during the hours of the night and at the ends of the day, so that he may be pleased. Remembrance there is not a mood but an appointment. The practical answer to a life gone tight is usually one fixed time reclaimed and kept.",
            "bn": "সূরাটি নিজেই কয়েক আয়াত পরে তার প্রতিকার দেয়। 20:130 নবী ﷺ-কে বলে, তারা যা বলে তাতে ধৈর্য ধরতে এবং সূর্যোদয়ের আগে ও সূর্যাস্তের আগে, রাতের প্রহরগুলোতে ও দিনের প্রান্তভাগে তাঁর রবের প্রশংসাসহ তাঁর মহিমা ঘোষণা করতে — যাতে তিনি সন্তুষ্ট হন। সেখানে স্মরণ কোনো মেজাজ নয়, একটি নির্ধারিত সাক্ষাৎ। সংকুচিত হয়ে যাওয়া জীবনের ব্যবহারিক জবাব সাধারণত একটিই — একটি নির্দিষ্ট সময় ফিরিয়ে নেওয়া এবং তা ধরে রাখা।"
          }
        ]
      }
    ]
  },
  "20:132": {
    "sections": [
      {
        "h": {
          "en": "Where the Command Lands",
          "bn": "নির্দেশটি কোথায় এসে পড়ে"
        },
        "p": [
          {
            "en": "This verse closes a short run of instructions near the end of Surah Ta-Ha. 20:130 tells the Prophet ﷺ to be patient over what they say and to exalt his Lord before sunrise, before sunset, during the night and at the ends of the day. The verse immediately before ours, 20:131, then says: do not stretch your eyes toward what We have given various groups of them to enjoy, the splendour of this life, by which We test them; your Lord's provision is better and more lasting.",
            "bn": "এই আয়াতটি সূরা ত্বা-হা-র শেষদিকের ছোট একটি নির্দেশ-ধারার সমাপ্তি টানে। 20:130 নবী ﷺ-কে বলে, তারা যা বলে তাতে ধৈর্য ধরতে এবং সূর্যোদয়ের আগে, সূর্যাস্তের আগে, রাতের বেলা ও দিনের প্রান্তগুলোয় তাঁর প্রতিপালকের মহিমা ঘোষণা করতে। এরপর আমাদের আয়াতের ঠিক আগের আয়াত 20:131 বলে: তাদের বিভিন্ন দলকে ভোগ করার জন্য আমি যা দিয়েছি সেদিকে চোখ মেলে তাকিও না, তা এই জীবনের শোভা, যা দিয়ে আমি তাদের পরীক্ষা করি; তোমার প্রতিপালকের রিযিকই উত্তম ও অধিক স্থায়ী।"
          },
          {
            "en": "So the sequence is patience, then a warning against envying what others have been given, then this command about prayer and provision. That is one continuous argument, not three separate topics. Having just been told not to look sideways at other people's comfort, the Prophet ﷺ is told to turn inward to his own household and its prayer, and is then answered on the very anxiety that comparison feeds.",
            "bn": "অর্থাৎ ক্রমটি হলো — ধৈর্য, তারপর অন্যদের যা দেওয়া হয়েছে তাতে ঈর্ষা না করার সতর্কতা, তারপর সালাত ও রিযিক নিয়ে এই নির্দেশ। এটি একটিই ধারাবাহিক যুক্তি, আলাদা তিনটি প্রসঙ্গ নয়। অন্যের আরাম-আয়েশের দিকে আড়চোখে না তাকাতে বলার ঠিক পরেই নবী ﷺ-কে বলা হচ্ছে নিজের ঘর ও তার সালাতের দিকে ফিরতে, আর তারপর সেই দুশ্চিন্তারই জবাব দেওয়া হচ্ছে যাকে তুলনা করাই খাওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Command Your Ahl",
          "bn": "তোমার আহলকে আদেশ দাও"
        },
        "p": [
          {
            "en": "The wording is wa'mur ahlaka bis-salah. It is not merely pray with your family; it is order them to it. Ahl means the household, the people under your roof and in your care. The same two words appear in 19:55, where Isma'il (AS) used to enjoin prayer and zakah upon his ahl and was pleasing to his Lord. That verse sets the duty and the commendation in a single breath, which says something about the weight it carries.",
            "bn": "শব্দবিন্যাসটি হলো ওয়ামুর আহলাকা বিস-সালাহ। এর অর্থ কেবল পরিবারের সঙ্গে নামায পড়া নয়; এর অর্থ তাদেরকে এর আদেশ দেওয়া। আহল মানে গৃহপরিজন, যারা আপনার ছাদের নিচে ও আপনার দায়িত্বে আছে। ঠিক এই দুটি শব্দই আসে 19:55 আয়াতে, যেখানে ইসমাঈল (আঃ) তাঁর আহলকে সালাত ও যাকাতের আদেশ দিতেন এবং তিনি তাঁর প্রতিপালকের কাছে সন্তুষ্টির পাত্র ছিলেন। সেই আয়াতটি দায়িত্ব ও প্রশংসাকে এক নিঃশ্বাসেই পাশাপাশি রাখে, যা এই দায়িত্বের ওজন সম্পর্কে অনেক কিছু বলে।"
          },
          {
            "en": "66:6 widens the same responsibility and fixes its order: protect yourselves and your families from a Fire. Yourself first, then them. A father who commands the prayer and is not seen praying has given his household an instruction and taken away the reason to follow it. Abu Dawud narrates from Amr ibn Shu'ayb, from his father, from his grandfather, the instruction to have children pray from the age of seven, which shows the command being applied patiently and by stages rather than all at once.",
            "bn": "66:6 একই দায়িত্বকে আরও প্রশস্ত করে এবং তার ক্রম ঠিক করে দেয়: নিজেদেরকে ও নিজেদের পরিবারকে আগুন থেকে রক্ষা কর। আগে নিজে, তারপর তারা। যে বাবা সালাতের আদেশ দেন অথচ যাঁকে নামায পড়তে দেখা যায় না, তিনি ঘরকে একটি নির্দেশ দিলেন আর তা মানার কারণটিই সরিয়ে নিলেন। আবু দাউদ আমর ইবনে শুআইব থেকে, তিনি তাঁর পিতা থেকে, তিনি তাঁর দাদা থেকে বর্ণনা করেন সাত বছর বয়স থেকে শিশুদের নামায পড়তে বলার নির্দেশ, যা দেখায় এই আদেশ একসঙ্গে নয়, ধৈর্য ধরে ধাপে ধাপে প্রয়োগ করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Istabir, Not Simply Isbir",
          "bn": "ইসতাবির, নিছক ইসবির নয়"
        },
        "p": [
          {
            "en": "The next word is wastabir. Arabic could have said isbir, be patient, and the surah used that very root two verses earlier, in 20:130 above. Instead it uses a heavier form of the same root, one that adds letters and adds effort with them: brace yourself and keep bracing. Patience here is not a mood that settles on a person. It is something worked at, renewed each time it runs out.",
            "bn": "পরের শব্দটি ওয়াসতাবির। আরবি চাইলে বলতে পারত ইসবির — ধৈর্য ধর — আর সূরাটি দুই আয়াত আগে 20:130 আয়াতেই এই ধাতুটি ব্যবহার করেছে। এর বদলে এখানে একই ধাতুর ভারী একটি রূপ এসেছে, যা অক্ষর বাড়ায় এবং তার সঙ্গে পরিশ্রমও বাড়ায়: নিজেকে শক্ত কর এবং শক্ত করেই রাখো। এখানে ধৈর্য এমন কোনো মেজাজ নয় যা মানুষের উপর এমনিতেই এসে বসে। এটি এমন কিছু যা নিয়ে খাটতে হয়, আর ফুরিয়ে গেলে বারবার নতুন করে জোগাড় করতে হয়।"
          },
          {
            "en": "Note also what the perseverance is aimed at. The wording is wastabir alayha, persevere upon it, and the pronoun goes back to the prayer, not to the family. You are not told to endure your household's resistance; you are told to keep at the prayer itself. That shifts the target usefully. The household is far more often moved by a parent who simply does not miss it than by a parent who argues about it.",
            "bn": "কীসের উপর এই অবিচলতা, সেদিকেও লক্ষ করুন। শব্দবিন্যাসটি ওয়াসতাবির আলাইহা — তার উপর অবিচল থাকো — আর সর্বনামটি ফিরে যায় সালাতের দিকে, পরিবারের দিকে নয়। আপনাকে বলা হয়নি ঘরের লোকদের অনীহা সহ্য করতে; বলা হয়েছে সালাতটিই ধরে রাখতে। এতে লক্ষ্যবস্তুটি কাজের মতো করে বদলে যায়। যে অভিভাবক নামায কেবল কখনো ছাড়েন না, তিনি ঘরকে সাধারণত তার চেয়ে অনেক বেশি নাড়ান যিনি নামায নিয়ে তর্ক করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "We Do Not Ask for Provision",
          "bn": "আমি তোমার কাছে রিযিক চাই না"
        },
        "p": [
          {
            "en": "Then the verse answers an objection nobody voices out loud: I would pray more if I were not so busy earning. La nas'aluka rizqan, nahnu narzuquka. We do not ask you for provision; We provide for you. Ibn Kathir's gloss is direct — establish the prayer, and We will not burden you with the worry of your sustenance. The relationship is stated in the only order that makes sense: nothing is being extracted from you, something is being given to you.",
            "bn": "এরপর আয়াতটি এমন এক আপত্তির জবাব দেয় যা কেউ মুখে বলে না: রুজির পেছনে এত ব্যস্ত না থাকলে আমি আরও নামায পড়তাম। লা নাসআলুকা রিযকান, নাহনু নারযুকুকা। আমি তোমার কাছে রিযিক চাই না; আমিই তোমাকে রিযিক দিই। ইবনে কাসীরের ব্যাখ্যা সরাসরি — সালাত কায়েম কর, আর আমি তোমার জীবিকার দুশ্চিন্তার বোঝা তোমার উপর চাপাব না। সম্পর্কটি এমন এক ক্রমে বলা হয়েছে যা ছাড়া অন্য কিছু অর্থবহ নয়: তোমার কাছ থেকে কিছু আদায় করা হচ্ছে না, তোমাকে কিছু দেওয়া হচ্ছে।"
          },
          {
            "en": "51:58 names Him ar-Razzaq, the Provider, possessor of strength. 65:2-3 promises that whoever fears Allah is given a way out and provided from where he did not expect. None of this cancels work; the Quran nowhere treats earning as blameworthy. What it cancels is the assumption that prayer and provision compete for the same hours, so that time given to one is taken from the other.",
            "bn": "51:58 তাঁকে আর-রাযযাক নামে ডাকে — রিযিকদাতা, মহাশক্তির অধিকারী। 65:2-3 প্রতিশ্রুতি দেয়, যে আল্লাহকে ভয় করে তাকে উত্তরণের পথ দেওয়া হয় এবং এমন জায়গা থেকে রিযিক দেওয়া হয় যা সে ধারণাও করেনি। এর কোনোটিই পরিশ্রমকে বাতিল করে না; কুরআন কোথাও উপার্জনকে দোষণীয় বলে না। যা বাতিল হয় তা হলো এই ধারণা যে সালাত ও রিযিক একই ঘণ্টাগুলোর জন্য প্রতিযোগিতা করছে, ফলে একটিকে দেওয়া সময় অন্যটি থেকে কেটে নেওয়া হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Outcome Belongs to Taqwa",
          "bn": "উত্তম পরিণাম তাকওয়ার"
        },
        "p": [
          {
            "en": "The verse ends wal-aqibatu lit-taqwa. Aqibah is what comes at the end of a thing, its final upshot rather than its middle. And the outcome is assigned not to the clever or the well placed but to taqwa, the God-consciousness that keeps a person from what displeases Him. Read that as a measure and it quietly disqualifies most of the scoreboards we actually use, because it refuses to judge anything by where it currently stands.",
            "bn": "আয়াতটি শেষ হয় ওয়াল-আকিবাতু লিত-তাকওয়া দিয়ে। আকিবাহ মানে কোনো কিছুর শেষে যা আসে, তার মাঝপথ নয় বরং শেষ পরিণতি। আর সেই পরিণাম বরাদ্দ হয়েছে চতুর বা সুবিধাজনক অবস্থানে থাকা লোকদের জন্য নয়, বরং তাকওয়ার জন্য — সেই আল্লাহভীতির জন্য যা মানুষকে তাঁর অপছন্দনীয় কাজ থেকে ফিরিয়ে রাখে। এটিকে মাপকাঠি হিসেবে পড়লে তা নীরবে আমাদের ব্যবহৃত অধিকাংশ হিসাবের খাতাকে বাতিল করে দেয়, কারণ এটি কোনো কিছুকেই তার বর্তমান অবস্থান দিয়ে বিচার করতে রাজি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Inside the House",
          "bn": "ঘরের ভেতরে"
        },
        "p": [
          {
            "en": "The practical shape of the verse is unglamorous. Fix the times in the home so that prayer is what the household organises itself around rather than what it fits in. Call people by name when the time comes, gently and every time, and accept that this is a long work. And when the rent or the fees are the thing keeping you awake, let 20:14 stand beside this verse: establish prayer for My remembrance, said to Musa (AS) before he was given anything else.",
            "bn": "আয়াতটির ব্যবহারিক রূপ চটকদার কিছু নয়। ঘরে সময়গুলো এমনভাবে ঠিক করুন যাতে সালাতকে ঘিরেই পরিবার নিজেকে গোছায়, সালাতকে ফাঁক খুঁজে ঢোকাতে না হয়। সময় হলে নাম ধরে ডাকুন, কোমলভাবে এবং প্রতিবার, আর মেনে নিন যে এটি দীর্ঘ কাজ। আর যখন ভাড়া বা বেতনের চিন্তাই আপনার ঘুম কেড়ে নেয়, তখন এই আয়াতের পাশে 20:14 আয়াতটিকে দাঁড় করান: আমাকে স্মরণ করার জন্য সালাত কায়েম কর — মূসা (আঃ)-কে এ কথা বলা হয়েছিল তাঁকে অন্য কিছু দেওয়ার আগেই।"
          }
        ]
      }
    ]
  }
});
