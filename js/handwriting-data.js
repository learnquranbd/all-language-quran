/**
 * Handwriting — DATA MODULE
 * Extracted from js/handwriting.js.
 * Globals: HW_LETTER_TIPS, HW_CONFUSABLES, HW_WRITING_BASICS, HW_PRACTICE_WORDS,
 *   HW_HARAKAT, HW_FATIHA_STROKES, HW_KHAT_STYLES.
 * Loaded BEFORE js/handwriting.js in index.html.
 */

const HW_LETTER_TIPS = {
  'ا': {
    en: 'One stroke: start at the top and pull straight down to the baseline. Keep it perfectly vertical — the most common mistake is adding a hook at the base or letting the stroke slant.',
    bn: 'এক টানেই লেখা: উপর থেকে শুরু করে সোজা লাইন পর্যন্ত নামুন। একদম খাড়া রাখুন। সবচেয়ে বেশি যে ভুল হয়: নিচে বাঁক জুড়ে দেওয়া, বা দাগটা হেলে যাওয়া।'
  },
  'ب': {
    en: 'Start at the right of the shallow bowl, sweep left, then slightly up to close. Add 1 dot below the centre of the bowl. Common mistake: making the bowl too deep, or placing the dot above instead of below.',
    bn: 'অগভীর বাটির ডান দিক থেকে শুরু করে বাঁ দিকে টানুন, শেষে একটু উপরে তুলে বন্ধ করুন। বাটির মাঝখানের নিচে ১টি নুকতা দিন। সাধারণ ভুল: বাটি বেশি গভীর করা, বা নুকতা নিচে না দিয়ে উপরে দেওয়া।'
  },
  'ت': {
    en: 'Identical bowl to Bā — the body is the same shape. Add 2 dots above. The dots alone distinguish Bā (1 below), Tā (2 above), and Thā (3 above); students must learn to place them precisely.',
    bn: 'বাটি হুবহু বা-এর মতো, শরীরের আকৃতি একই। উপরে ২টি নুকতা দিন। শুধু নুকতাই বা (নিচে ১), তা (উপরে ২) আর সা (উপরে ৩)-কে আলাদা করে; তাই নুকতা ঠিক জায়গায় বসানো শিখতে হবে।'
  },
  'ث': {
    en: 'Same bowl as Bā and Tā. Add 3 dots in a triangle formation above. Draw the body first, then place all three dots carefully — two on the bottom row, one at the apex.',
    bn: 'বাটি বা ও তা-এর মতোই। উপরে তিনকোনা করে ৩টি নুকতা দিন। আগে শরীর লিখুন, তারপর তিনটি নুকতা যত্ন করে বসান: নিচের সারিতে দুটি, মাথায় একটি।'
  },
  'ج': {
    en: 'A deep hook: start at the upper-right, curve left and descend well below the baseline, then hook right. Add 1 dot inside or just below the hook. Common mistake: not descending below the baseline, or leaving out the dot (which makes it Ḥā).',
    bn: 'গভীর বাঁক: উপরের ডান দিক থেকে শুরু করে বাঁ দিকে বেঁকে লাইনের বেশ নিচে নামুন, তারপর ডান দিকে বাঁক দিন। বাঁকের ভেতরে বা ঠিক নিচে ১টি নুকতা দিন। সাধারণ ভুল: লাইনের নিচে না নামা, বা নুকতা বাদ দেওয়া (তাতে হা হয়ে যায়)।'
  },
  'ح': {
    en: 'Exactly the same hook as Jīm — no dot at all. Students must resist adding a dot. The key to distinguishing Jīm (dot below), Ḥā (no dot), and Khā (dot above) is dot position alone.',
    bn: 'বাঁক হুবহু জিমের মতো, কিন্তু কোনো নুকতা নেই। নুকতা দেওয়ার ঝোঁক সামলাতে হবে। জিম (নিচে নুকতা), হা (নুকতা নেই) আর খা (উপরে নুকতা) চেনার একমাত্র উপায় নুকতার জায়গা।'
  },
  'خ': {
    en: 'Same hook as Jīm and Ḥā. Add 1 dot above the top of the hook. Common mistake: placing the dot below (making it look like Jīm) — always check whether the dot goes above or below.',
    bn: 'বাঁক জিম ও হা-এর মতোই। বাঁকের মাথার উপরে ১টি নুকতা দিন। সাধারণ ভুল: নুকতা নিচে দেওয়া, তাতে জিমের মতো দেখায়। প্রতিবার দেখে নিন নুকতা উপরে যাবে, না নিচে।'
  },
  'د': {
    en: 'A right-facing wedge: start at the top, slant gently down and right, then turn left along the baseline. Non-connector — it does not join to the following letter. Common mistake: adding a leftward tail as if connecting forward.',
    bn: 'ডান দিকে মুখ করা কোণাচে আকৃতি: উপর থেকে শুরু করে আলতো করে নিচে ও ডানে নামুন, তারপর লাইন ধরে বাঁ দিকে টানুন। দাল পরের হরফের সাথে জোড়া লাগে না। সাধারণ ভুল: সামনে জোড়া দেওয়ার মতো বাঁ দিকে লেজ বাড়ানো।'
  },
  'ذ': {
    en: 'Same wedge as Dāl. Add 1 dot above the body. Non-connector. The dot is the only visible difference from Dāl; do not let it sit to the side — it must be directly above.',
    bn: 'কোণাচে আকৃতি দালের মতোই। শরীরের উপরে ১টি নুকতা দিন। যালও পরের হরফের সাথে জোড়া লাগে না। দাল থেকে চোখে পড়ার মতো পার্থক্য শুধু এই নুকতা; পাশে নয়, ঠিক উপরে বসাতে হবে।'
  },
  'ر': {
    en: 'A smooth downward curve: begin just above the baseline at the upper-right, sweep down and curl left, finishing below the baseline. Non-connector. Common mistake: making it too angular or too shallow.',
    bn: 'মসৃণভাবে নিচে নামা বাঁক: উপরের ডান দিকে লাইনের একটু উপর থেকে শুরু করে নিচে নেমে বাঁ দিকে বাঁকুন, লাইনের নিচে শেষ করুন। রা পরের হরফের সাথে জোড়া লাগে না। সাধারণ ভুল: বেশি কোণাচে বা বেশি চ্যাপ্টা করা।'
  },
  'ز': {
    en: 'Same downward curve as Rā — bodies are identical. Add 1 dot above. Non-connector. Rā and Zāy are among the most confused pairs; the single dot on Zāy is the only difference.',
    bn: 'নিচে নামা বাঁক হুবহু রা-এর মতো, শরীর একই। উপরে ১টি নুকতা দিন। যা-ও পরের হরফের সাথে জোড়া লাগে না। রা আর যা সবচেয়ে বেশি গুলিয়ে ফেলা জোড়াগুলোর একটি; পার্থক্য শুধু যা-এর একটি নুকতা।'
  },
  'س': {
    en: 'Three small equal teeth followed by a long sweeping tail curving down, left and up. Write right-to-left: start with the three even teeth on the right, then sweep the tail. Common mistake: uneven teeth, or teeth that are too tall.',
    bn: 'তিনটি ছোট সমান দাঁত, তারপর লম্বা লেজ নিচে নেমে বাঁয়ে ঘুরে উপরে ওঠে। ডান থেকে বাঁয়ে লিখুন: ডানে তিনটি সমান দাঁত দিয়ে শুরু করে তারপর লেজ টানুন। সাধারণ ভুল: দাঁত অসমান হওয়া, বা বেশি লম্বা হওয়া।'
  },
  'ش': {
    en: 'Identical three-tooth body to Sīn. Add 3 dots (triangle) above the teeth. Draw the body first, then the dots. Common mistake: mixing up Sīn (no dots) and Shīn (3 dots above).',
    bn: 'তিন দাঁতের শরীর হুবহু সিনের মতো। দাঁতের উপরে তিনকোনা করে ৩টি নুকতা দিন। আগে শরীর, তারপর নুকতা। সাধারণ ভুল: সিন (নুকতা নেই) আর শিন (উপরে ৩টি নুকতা) গুলিয়ে ফেলা।'
  },
  'ص': {
    en: 'A closed oval followed by a small tooth, with a tail extending left. Ṣād has an oval body — not teeth like Sīn. No dot. Common mistake: leaving the oval open, or skipping the small tooth.',
    bn: 'একটি বন্ধ ডিমের মতো গোল অংশ, তারপর ছোট একটি দাঁত, আর বাঁ দিকে লেজ। সোয়াদের শরীর গোল, সিনের মতো দাঁতওয়ালা নয়। কোনো নুকতা নেই। সাধারণ ভুল: গোল অংশ খোলা রাখা, বা ছোট দাঁতটি বাদ দেওয়া।'
  },
  'ض': {
    en: 'Same oval body as Ṣād. Add 1 dot above the oval. Ḍād is historically one of Arabic\'s most distinctive sounds. Common mistake: omitting the dot, or placing it inside the oval.',
    bn: 'গোল শরীর সোয়াদের মতোই। গোল অংশের উপরে ১টি নুকতা দিন। দোয়াদ ঐতিহাসিকভাবে আরবির সবচেয়ে স্বতন্ত্র ধ্বনিগুলোর একটি। সাধারণ ভুল: নুকতা বাদ দেওয়া, বা গোল অংশের ভেতরে দেওয়া।'
  },
  'ط': {
    en: 'A closed oval (loop) with a vertical stroke rising from the left end of the oval. Draw the oval first (right-to-left), then add the upright stroke from the top down. Common mistake: making the loop too small relative to the upstroke.',
    bn: 'একটি বন্ধ গোল ফাঁস, তার বাঁ প্রান্ত থেকে একটি খাড়া দাগ উপরে উঠে গেছে। আগে ফাঁসটি লিখুন (ডান থেকে বাঁয়ে), তারপর উপর থেকে নিচে খাড়া দাগটি দিন। সাধারণ ভুল: খাড়া দাগের তুলনায় ফাঁস বেশি ছোট করা।'
  },
  'ظ': {
    en: 'Same closed oval and upstroke as Ṭā. Add 1 dot above the oval, beside the vertical stroke. The only visible difference from Ṭā is this single dot — place it clearly above the loop, to the right of the upstroke.',
    bn: 'বন্ধ ফাঁস আর খাড়া দাগ হুবহু তোয়ার মতো। গোল অংশের উপরে, খাড়া দাগের পাশে ১টি নুকতা দিন। তোয়া থেকে চোখে পড়ার মতো পার্থক্য শুধু এই একটি নুকতা; ফাঁসের স্পষ্টভাবে উপরে, খাড়া দাগের ডান পাশে বসান।'
  },
  'ع': {
    en: 'Start with a small upward hook at the top-right, sweep down and around forming a teardrop/eye shape, then extend the tail down-left below the baseline. Common mistake: making the eye too large, or the opening hook too closed.',
    bn: 'উপরের ডান দিকে ছোট একটি উপরমুখী বাঁক দিয়ে শুরু করুন, নিচে নেমে ঘুরিয়ে চোখের (বা অশ্রুবিন্দুর) মতো আকৃতি বানান, তারপর লেজ নিচে-বাঁয়ে লাইনের নিচে নামিয়ে দিন। সাধারণ ভুল: চোখ বেশি বড় করা, বা শুরুর বাঁকটা বেশি বন্ধ করে ফেলা।'
  },
  'غ': {
    en: 'Exactly the same shape as ʿAyn. Add 1 dot above the hook opening. The dot must sit clearly above the letter, not inside it. Common mistake: confusing ʿAyn (no dot) with Ghayn (1 dot above).',
    bn: 'আকৃতি হুবহু আইনের মতো। বাঁকের খোলা মুখের উপরে ১টি নুকতা দিন। নুকতা হরফের স্পষ্টভাবে উপরে থাকবে, ভেতরে নয়। সাধারণ ভুল: আইন (নুকতা নেই) আর গাইন (উপরে ১টি নুকতা) গুলিয়ে ফেলা।'
  },
  'ف': {
    en: 'A loop/circle sitting on the baseline, with a connecting tail to the left. Add 1 dot above the circle. The circle is shallow and rests on the line. Common mistake: confusing with Qāf — Fā has 1 dot and sits on the baseline; Qāf has 2 dots and descends.',
    bn: 'লাইনের ওপর বসা ছোট গোল ফাঁস, বাঁ দিকে জোড়ার লেজ। গোল অংশের উপরে ১টি নুকতা দিন। গোলটি অগভীর, লাইনের ওপরেই থাকে। সাধারণ ভুল: ক্বাফের সাথে গুলিয়ে ফেলা। ফা-এর নুকতা ১টি, লাইনের ওপর বসে; ক্বাফের নুকতা ২টি, নিচে নামে।'
  },
  'ق': {
    en: 'A deeper, rounder cup that descends below the baseline. Add 2 dots above. Distinguish from Fā: Qāf has 2 dots above and its cup descends; Fā has 1 dot and stays on the baseline.',
    bn: 'আরও গভীর ও গোল বাটি, লাইনের নিচে নেমে যায়। উপরে ২টি নুকতা দিন। ফা থেকে আলাদা করুন: ক্বাফের উপরে ২টি নুকতা, বাটি নিচে নামে; ফা-এর ১টি নুকতা, লাইনের ওপরেই থাকে।'
  },
  'ك': {
    en: 'A curved arch with a small diagonal inner mark — a stroke unique to Kāf, like a tiny hamza inside. Draw the outer arch first (right-to-left), then add the inner diagonal. Common mistake: forgetting the inner mark entirely.',
    bn: 'বাঁকানো খিলান, ভেতরে ছোট একটি তেরছা চিহ্ন। এই চিহ্ন শুধু কাফেরই থাকে, দেখতে ভেতরে বসানো ছোট্ট হামযার মতো। আগে বাইরের খিলান লিখুন (ডান থেকে বাঁয়ে), তারপর ভেতরের তেরছা দাগ দিন। সাধারণ ভুল: ভেতরের চিহ্নটি একেবারে ভুলে যাওয়া।'
  },
  'ل': {
    en: 'A tall hook: begin at the top of the tall upstroke, pull it down to the baseline, then sweep the tail below the line to the left and up. Common mistake: making the upward portion too short, or skipping the upstroke.',
    bn: 'লম্বা বাঁক: লম্বা খাড়া দাগের মাথা থেকে শুরু করে লাইন পর্যন্ত নামুন, তারপর লেজটি লাইনের নিচ দিয়ে বাঁয়ে ঘুরিয়ে উপরে তুলুন। সাধারণ ভুল: উপরের অংশ বেশি ছোট করা, বা খাড়া দাগটাই বাদ দেওয়া।'
  },
  'م': {
    en: 'A small, tight circle/knot — the tightest loop in the Arabic alphabet — with a tail descending below the baseline. Write the circle clockwise, then bring the tail down. Common mistake: making the circle too large or the tail too short.',
    bn: 'ছোট, আঁটসাঁট গোল মাথা (আরবি হরফগুলোর মধ্যে সবচেয়ে ছোট ফাঁস), লেজ লাইনের নিচে নামে। গোলটি ঘড়ির কাঁটার দিকে লিখুন, তারপর লেজ নামান। সাধারণ ভুল: গোল বেশি বড় করা, বা লেজ বেশি ছোট করা।'
  },
  'ن': {
    en: 'Similar to Bā but with a deeper, more rounded bowl that dips below the baseline. Add 1 dot above the centre. Common mistake: making it too shallow (it looks like Bā), or placing the dot below.',
    bn: 'বা-এর মতো, তবে বাটি আরও গভীর ও গোল, লাইনের নিচে নেমে যায়। মাঝখানের উপরে ১টি নুকতা দিন। সাধারণ ভুল: বেশি অগভীর করা (তাতে বা-এর মতো দেখায়), বা নুকতা নিচে দেওয়া।'
  },
  'و': {
    en: 'A small rounded head (like a tiny circle) at the top with a tail curving down and to the left. Non-connector. Draw the head first, then sweep the tail downward. Common mistake: making the head too large, or joining it to the next letter.',
    bn: 'উপরে ছোট গোল মাথা (ছোট্ট বৃত্তের মতো), লেজ নিচে ও বাঁ দিকে বেঁকে নামে। ওয়াও পরের হরফের সাথে জোড়া লাগে না। আগে মাথা লিখুন, তারপর লেজ নিচে টানুন। সাধারণ ভুল: মাথা বেশি বড় করা, বা পরের হরফের সাথে জুড়ে দেওয়া।'
  },
  'ه': {
    en: 'In initial and medial forms: two joined oval loops — a larger upper oval and a smaller lower oval. Write the upper loop first, then close the lower. Common mistake: making both loops the same size (the lower should be smaller and sit inside/below).',
    bn: 'শুরুর ও মাঝের রূপে: জোড়া লাগানো দুটি গোল ফাঁস, উপরেরটি বড়, নিচেরটি ছোট। আগে উপরের ফাঁস লিখুন, তারপর নিচেরটি বন্ধ করুন। সাধারণ ভুল: দুটি ফাঁস সমান করা (নিচেরটি ছোট হবে, ভেতরে বা নিচে বসবে)।'
  },
  'ي': {
    en: 'A bowl similar to Bā/Nūn, but with 2 dots below (not above). The bowl descends below the baseline. Common mistake: placing the 2 dots above (making it look like Tā) — always check: Yā dots go below.',
    bn: 'বাটি বা/নুনের মতো, কিন্তু নুকতা ২টি, নিচে (উপরে নয়)। বাটি লাইনের নিচে নামে। সাধারণ ভুল: ২টি নুকতা উপরে দেওয়া, তাতে তা-এর মতো দেখায়। মনে রাখুন: ইয়ার নুকতা সবসময় নিচে।'
  },
};

/**
 * Groups of visually similar Arabic letters.
 * Students commonly confuse letters within each group;
 * only dots (or their absence) distinguish them.
 */
const HW_CONFUSABLES = [
  {
    letters: ['ب', 'ت', 'ث', 'ن', 'ي'],
    label: { en: 'Bā / Tā / Thā / Nūn / Yā', bn: 'বা / তা / সা / নুন / ইয়া' },
    tip: {
      en: 'All share a curved bowl. Tell them apart by dots: Bā = 1 dot below; Tā = 2 dots above; Thā = 3 dots above; Nūn = 1 dot above (deeper bowl, dips below baseline); Yā = 2 dots below (bowl below baseline).',
      bn: 'সবগুলোর বাটি একই রকম বাঁকা। নুকতা দেখে আলাদা করুন: বা = নিচে ১টি; তা = উপরে ২টি; সা = উপরে ৩টি; নুন = উপরে ১টি (বাটি বেশি গভীর, লাইনের নিচে নামে); ইয়া = নিচে ২টি (বাটি লাইনের নিচে)।'
    }
  },
  {
    letters: ['ج', 'ح', 'خ'],
    label: { en: 'Jīm / Ḥā / Khā', bn: 'জিম / হা / খা' },
    tip: {
      en: 'All share the same deep hook descending below the baseline. Jīm = 1 dot below/inside the hook; Ḥā = no dot at all; Khā = 1 dot above the hook.',
      bn: 'তিনটিরই একই গভীর বাঁক, লাইনের নিচে নেমে যায়। জিম = বাঁকের নিচে বা ভেতরে ১টি নুকতা; হা = কোনো নুকতা নেই; খা = বাঁকের উপরে ১টি নুকতা।'
    }
  },
  {
    letters: ['د', 'ذ'],
    label: { en: 'Dāl / Dhāl', bn: 'দাল / যাল' },
    tip: {
      en: 'Same wedge shape; both are non-connectors. Dhāl has 1 dot directly above; Dāl has none.',
      bn: 'আকৃতি একই রকম কোণাচে; দুটির কোনোটিই পরের হরফের সাথে জোড়া লাগে না। যালের ঠিক উপরে ১টি নুকতা; দালে নুকতা নেই।'
    }
  },
  {
    letters: ['ر', 'ز'],
    label: { en: 'Rā / Zāy', bn: 'রা / যায়' },
    tip: {
      en: 'Same downward curve; both are non-connectors descending below the baseline. Zāy has 1 dot above; Rā has none.',
      bn: 'নিচে নামা বাঁক একই রকম; দুটিই পরের হরফের সাথে জোড়া লাগে না, আর দুটিই লাইনের নিচে নামে। যায়ের উপরে ১টি নুকতা; রা-তে নেই।'
    }
  },
  {
    letters: ['س', 'ش'],
    label: { en: 'Sīn / Shīn', bn: 'সিন / শিন' },
    tip: {
      en: 'Both have three teeth and a curved sweeping tail. Shīn adds 3 dots (triangle) above the teeth; Sīn has no dots.',
      bn: 'দুটিতেই তিনটি দাঁত আর বাঁকানো লম্বা লেজ। শিনের দাঁতের উপরে তিনকোনা করে ৩টি নুকতা; সিনে কোনো নুকতা নেই।'
    }
  },
  {
    letters: ['ص', 'ض'],
    label: { en: 'Ṣād / Ḍād', bn: 'সোয়াদ / দোয়াদ' },
    tip: {
      en: 'Both have a closed oval body (not teeth), with a leftward tail. Ḍād adds 1 dot above the oval; Ṣād has none.',
      bn: 'দুটির শরীরই বন্ধ, ডিমের মতো গোল (দাঁত নয়), লেজ বাঁ দিকে। দোয়াদের গোল অংশের উপরে ১টি নুকতা; সোয়াদে নেই।'
    }
  },
  {
    letters: ['ط', 'ظ'],
    label: { en: 'Ṭā / Ẓā', bn: 'তোয়া / যোয়া' },
    tip: {
      en: 'Both have a closed oval with a vertical stroke rising from its left end. Ẓā adds 1 dot above the oval, beside the vertical stroke; Ṭā has none.',
      bn: 'দুটিতেই বন্ধ গোল ফাঁস, তার বাঁ প্রান্ত থেকে খাড়া দাগ উপরে উঠে গেছে। যোয়ার গোল অংশের উপরে, খাড়া দাগের পাশে ১টি নুকতা; তোয়াতে নেই।'
    }
  },
  {
    letters: ['ع', 'غ'],
    label: { en: 'ʿAyn / Ghayn', bn: 'আইন / গাইন' },
    tip: {
      en: 'Same teardrop/eye shape with a descending tail. Ghayn adds 1 dot above the opening hook; ʿAyn has none.',
      bn: 'আকৃতি একই, চোখের (বা অশ্রুবিন্দুর) মতো, লেজ নিচে নামে। গাইনের উপরের খোলা বাঁকের ওপর ১টি নুকতা; আইনে নেই।'
    }
  },
  {
    letters: ['ف', 'ق'],
    label: { en: 'Fā / Qāf', bn: 'ফা / ক্বাফ' },
    tip: {
      en: 'Both have a circular body. Fā: 1 dot above, circle sits on the baseline (shallow cup). Qāf: 2 dots above, deeper cup descends below the baseline.',
      bn: 'দুটির শরীরই গোল। ফা: উপরে ১টি নুকতা, গোল অংশ লাইনের ওপর বসে (অগভীর বাটি)। ক্বাফ: উপরে ২টি নুকতা, বাটি বেশি গভীর, লাইনের নিচে নামে।'
    }
  },
  {
    letters: ['ك', 'ل'],
    label: { en: 'Kāf / Lām', bn: 'কাফ / লাম' },
    tip: {
      en: 'Both are tall letters that rise well above the line, and in their initial/medial forms both begin as a tall upright stroke — so beginners confuse them. Kāf has a bent "shoulder" at the top (and, in isolated/final form, a small hamza-like mark inside); Lām is a plain smooth upstroke with no inner mark, ending in a rounded tail that curls below the baseline in isolated/final form.',
      bn: 'দুটিই লম্বা হরফ, লাইনের অনেক উপরে ওঠে। শুরুর ও মাঝের রূপে দুটিই লম্বা খাড়া দাগ দিয়ে শুরু হয়, তাই নতুনরা গুলিয়ে ফেলে। কাফের (ك) মাথায় একটা বাঁকানো "কাঁধ" থাকে (একক ও শেষের রূপে ভেতরে ছোট হামযার মতো চিহ্নও থাকে)। লাম (ل) মসৃণ খাড়া দাগ, ভেতরে কোনো চিহ্ন নেই; একক ও শেষের রূপে লাইনের নিচে গোল হয়ে বেঁকে যাওয়া লেজে শেষ হয়।'
    }
  },
  {
    letters: ['ا', 'ل'],
    label: { en: 'Alif / Lām', bn: 'আলিফ / লাম' },
    tip: {
      en: 'Both are tall vertical strokes. Alif (ا) is perfectly straight and is a non-connector — it never joins the following letter. Lām (ل) connects on both sides and, in isolated/final form, sweeps into a rounded bowl-tail at the base, whereas Alif has no tail at all.',
      bn: 'দুটিই লম্বা খাড়া দাগ। আলিফ (ا) একদম সোজা, আর পরের হরফের সাথে কখনো জোড়া লাগে না। লাম (ل) দুই পাশেই জোড়া লাগে, আর একক ও শেষের রূপে নিচে গিয়ে গোল বাটির মতো লেজ হয়; আলিফের কোনো লেজই নেই।'
    }
  },
  {
    letters: ['ه', 'ة'],
    label: { en: 'Hā / Tā marbūṭa', bn: 'হা / তা মারবূতা' },
    tip: {
      en: 'Tā marbūṭa (ة) is the Hā (ه) shape with 2 dots added above; it appears only at the end of a word to mark the feminine, and is read as "t" (or a soft "h" when pausing). Hā (ه) has no dots and can occur anywhere in a word. The two dots are the only difference.',
      bn: 'তা মারবূতা (ة) হলো হা-এর (ه) আকৃতি, উপরে ২টি নুকতা যোগ করা। এটি শুধু শব্দের শেষে আসে, স্ত্রীলিঙ্গ বোঝাতে, আর পড়া হয় "ত" (থামলে নরম "হ")। হা-তে (ه) কোনো নুকতা নেই, শব্দের যেকোনো জায়গায় বসতে পারে। পার্থক্য শুধু ওই ২টি নুকতা।'
    }
  },
  {
    letters: ['ى', 'ي'],
    label: { en: 'Alif maqṣūra / Yā', bn: 'আলিফ মাকসূরা / ইয়া' },
    tip: {
      en: 'Both share the same final bowl that dips below the baseline. Yā (ي) carries 2 dots below; alif maqṣūra (ى) — a final "long-a" written like a dotless yā — has no dots. The presence or absence of the two lower dots is the only thing that tells them apart.',
      bn: 'দুটিরই শেষের বাটি একই, লাইনের নিচে নামে। ইয়ার (ي) নিচে ২টি নুকতা থাকে। আলিফ মাকসূরা (ى) শব্দের শেষে লম্বা "আ", লেখা হয় নুকতা ছাড়া ইয়ার মতো; এতে কোনো নুকতা নেই। নিচের দুটি নুকতা আছে কি নেই, শুধু তা দেখেই এদের চেনা যায়।'
    }
  },
  {
    letters: ['و', 'ر', 'ز'],
    label: { en: 'Wāw / Rā / Zāy', bn: 'ওয়াও / রা / যায়' },
    tip: {
      en: 'All three have a tail curving down and to the left, and all are non-connectors. Wāw (و) begins with a small closed rounded head at the top before the tail; Rā (ر) and Zāy (ز) have no head — just a plain downward curve (Zāy adds 1 dot above, Rā none). A poorly-closed wāw head is easily mistaken for a rā.',
      bn: 'তিনটিরই লেজ নিচে ও বাঁ দিকে বেঁকে নামে, আর তিনটিই পরের হরফের সাথে জোড়া লাগে না। ওয়াও (و) শুরু হয় উপরে ছোট, বন্ধ গোল মাথা দিয়ে, তারপর লেজ। রা (ر) ও যায় (ز)-এর কোনো মাথা নেই, শুধু নিচে নামা বাঁক (যায়ের উপরে ১টি নুকতা, রা-তে নেই)। ওয়াওয়ের মাথা ঠিকমতো বন্ধ না হলে সহজেই রা বলে ভুল হয়।'
    }
  },
  {
    letters: ['ء', 'ع'],
    label: { en: 'Hamza / ʿAyn', bn: 'হামযা / আইন' },
    tip: {
      en: 'The hamza (ء) is a small standalone glottal-stop mark shaped like the head of ʿAyn (ع) — historically it derives from a miniature ʿayn. ʿAyn is a full-size letter with a teardrop/eye head and a descending tail that connects to its neighbours; hamza is tiny, sits above, below or beside its carrier, and never connects.',
      bn: 'হামযা (ء) একটি ছোট, আলাদা চিহ্ন; এটি গলার ভেতরে শ্বাস আটকে উচ্চারণের (হালকা ঝাঁকুনির) চিহ্ন, দেখতে আইনের (ع) মাথার মতো। ঐতিহাসিকভাবে এটি ছোট্ট আইন থেকেই এসেছে। আইন পূর্ণ আকারের হরফ: চোখের মতো মাথা আর নিচে নামা লেজ, আশপাশের হরফের সাথে জোড়া লাগে। হামযা খুব ছোট, তার বাহক হরফের উপরে, নিচে বা পাশে বসে, কখনো জোড়া লাগে না।'
    }
  },
  {
    letters: ['ف', 'غ'],
    label: { en: 'Fā / Ghayn (medial forms)', bn: 'ফা / গাইন (মধ্য রূপ)' },
    tip: {
      en: 'In isolated form they look nothing alike, but in joined medial position both reduce to a small head with a single dot above: medial Fā (ـفـ) is a hollow, rounded loop sitting on the baseline, while medial Ghayn (ـغـ) has a closed wedge-shaped head (the filled "eye" of ʿAyn). Check whether the head is a hollow circle (Fā) or a solid closed wedge (Ghayn).',
      bn: 'একক রূপে এদের কোনো মিল নেই। কিন্তু শব্দের মাঝে জোড়া অবস্থায় দুটিই হয়ে যায় উপরে একটি নুকতাওয়ালা ছোট মাথা। মাঝের ফা (ـفـ) লাইনের ওপর বসা ফাঁপা গোল ফাঁস; মাঝের গাইনের (ـغـ) মাথা বন্ধ, কোণাচে (আইনের ভরাট "চোখ")। দেখে নিন মাথাটি ফাঁপা গোল (ফা), নাকি ভরাট কোণাচে (গাইন)।'
    }
  },
];

/**
 * Foundational Arabic writing principles — displayed in the teaching panel
 * as expandable sections. Content is bilingual {en, bn}.
 */
const HW_WRITING_BASICS = [
  {
    icon: '➡️',
    title: { en: 'Right-to-Left Direction', bn: 'ডান থেকে বামে' },
    body: {
      en: 'Arabic is written from right to left. Every letter, word, and line begins at the right margin and flows left. When tracing, always start your pen on the right side of the letter. The numbered guide dots in this app follow this direction — dot ① is always the starting point on the right.',
      bn: 'আরবি লেখা হয় ডান থেকে বাঁয়ে। প্রতিটি হরফ, শব্দ ও লাইন ডান মার্জিন থেকে শুরু হয়ে বাঁ দিকে যায়। হরফের ওপর দিয়ে হাত ঘুরিয়ে লেখার (ট্রেস) সময় সবসময় হরফের ডান দিক থেকে কলম শুরু করুন। এই অ্যাপের নম্বর দেওয়া গাইড-বিন্দুগুলোও এই দিকেই চলে: ① সবসময় ডানে, শুরুর জায়গা।'
    }
  },
  {
    icon: '📏',
    title: { en: 'Baseline Placement', bn: 'লাইনের ওপর হরফ বসানো' },
    body: {
      en: 'Arabic letters rest on — not below — the baseline, like English print. The body of each letter anchors to this line. Some letters have descending tails or bowls that dip below it (Jīm, Ḥā, Khā, Mīm, Nūn, Qāf, Yā, Rā, Zāy, Wāw), but their heads remain at baseline level. On ruled paper, use the lower rule as your baseline and write upward from it.',
      bn: 'ইংরেজি ছাপার অক্ষরের মতোই আরবি হরফ লাইনের ওপর বসে, লাইনের নিচে নয়। প্রতিটি হরফের শরীর এই লাইনে ভর দিয়ে থাকে। কিছু হরফের লেজ বা বাটি লাইনের নিচে নেমে যায় (জিম, হা, খা, মিম, নুন, ক্বাফ, ইয়া, রা, যায়, ওয়াও), কিন্তু তাদের মাথা লাইনের সমানেই থাকে। লাইন টানা খাতায় নিচের দাগটিকে মূল লাইন ধরুন, আর সেখান থেকে ওপরের দিকে লিখুন।'
    }
  },
  {
    icon: '⚫',
    title: { en: 'The Dot System (النقاط)', bn: 'নুকতার নিয়ম (النقاط)' },
    body: {
      en: 'Arabic uses 1, 2, or 3 dots — placed above or below the letter skeleton (rasm) — to distinguish letters that share the same base shape. These pairs/groups differ only by dots: Bā·Tā·Thā (and Nūn·Yā in initial/medial form), Jīm·Ḥā·Khā, Dāl·Dhāl, Rā·Zāy, Sīn·Shīn, Ṣād·Ḍād, Ṭā·Ẓā, ʿAyn·Ghayn, Fā·Qāf (except in final and isolated form, where Qāf’s deeper, rounder cup drops below the line), Hā·Tā marbūṭa, alif maqṣūra·Yā. In Quran copying, correct dot placement is a religious and legal obligation.',
      bn: 'যেসব হরফের মূল আকৃতি একই, সেগুলো আলাদা করতে আরবিতে ১, ২ বা ৩টি নুকতা ব্যবহার হয়; নুকতা বসে হরফের কাঠামোর (রসম) উপরে বা নিচে। এই জোড়া বা দলগুলো শুধু নুকতায় আলাদা: বা·তা·সা (শুরুর ও মাঝের রূপে নুন·ইয়াও), জিম·হা·খা, দাল·যাল, রা·যায়, সিন·শিন, সোয়াদ·দোয়াদ, তোয়া·যোয়া, আইন·গাইন, ফা·ক্বাফ (তবে শেষ ও একক রূপে ক্বাফের গভীর, গোল বাটি লাইনের নিচে নামে), হা·তা মারবূতা, আলিফ মাকসূরা·ইয়া। কুরআন লেখায় নুকতা ঠিক জায়গায় বসানো দ্বীন ও শরিয়ত দুই দিক থেকেই জরুরি দায়িত্ব।'
    }
  },
  {
    icon: '🔗',
    title: { en: 'Connecting Letters', bn: 'হরফের জোড়া' },
    body: {
      en: 'Most Arabic letters connect to both neighbours (they have four shapes: isolated, initial, medial, final). Six letters only connect to the preceding letter — not the following one: Alif (ا), Dāl (د), Dhāl (ذ), Rā (ر), Zāy (ز), Wāw (و). When one appears mid-word, it "breaks" the word into two visual clusters. Practice all four connection shapes in the "Forms" section above.',
      bn: 'বেশিরভাগ আরবি হরফ দুই পাশের হরফের সাথেই জোড়া লাগে (এদের চারটি রূপ: একক, শুরুর, মাঝের, শেষের)। ছয়টি হরফ শুধু আগের হরফের সাথে জোড়া লাগে, পরেরটির সাথে নয়: আলিফ (ا), দাল (د), যাল (ذ), রা (ر), যায় (ز), ওয়াও (و)। শব্দের মাঝখানে এদের কোনোটি এলে শব্দটি চোখে দুই টুকরা হয়ে "ভেঙে" যায়। জোড়ার চারটি রূপই উপরের "অক্ষরের রূপ" অংশে অনুশীলন করুন।'
    }
  },
  {
    icon: '🌟',
    title: { en: 'Essential Ligatures: Lām-Alif & Allāh', bn: 'জরুরি দুই জোড়া রূপ: লাম-আলিফ ও আল্লাহ' },
    body: {
      en: 'Two ligatures are mandatory and must be memorised as single units: (1) Lām-Alif (لا) — whenever Lām (ل) is followed by Alif (ا) they merge into a single joined form. This occurs hundreds of times in the Quran. (2) Allāh (الله) — Lām-Lām-Hā merge into a special calligraphic shape with a shadda and a small upright alif above it. Never write these as separate strokes; always practise them as one connected unit.',
      bn: 'দুটি জোড়া রূপ বাধ্যতামূলক, আর এগুলো একটি করে একক হিসেবেই মুখস্থ করতে হবে: (১) লাম-আলিফ (لا): লাম (ل)-এর পরে আলিফ (ا) এলেই দুটি মিলে একটি জোড়া রূপ হয়। কুরআনে এটি শত শত বার আসে। (২) আল্লাহ (الله): লাম-লাম-হা মিলে একটি বিশেষ নকশাদার আকৃতি হয়, উপরে তাশদীদ আর তার ওপরে ছোট খাড়া আলিফ। এগুলো কখনো আলাদা আলাদা টানে লিখবেন না; সবসময় একটি জোড়া একক হিসেবে অনুশীলন করুন।'
    }
  },
  {
    icon: '📐',
    title: { en: 'Letter Proportions: the Alif as Ruler', bn: 'অক্ষরের অনুপাত: আলিফই মাপকাঠি' },
    body: {
      en: 'Classical calligraphers measure every letter against the alif. In Naskh the alif stands roughly 4–5 rhombic pen-dots tall; other tall letters (Lām, Kāf, Ṭā) rise to about the same height, while bowls like Bā stay low and wide. Before a practice session, write one careful alif and use it as your ruler for the whole line — consistent proportions matter far more than speed.',
      bn: 'প্রথাগত ক্যালিগ্রাফাররা প্রতিটি হরফ মাপেন আলিফ দিয়ে। নাসখে আলিফ মোটামুটি কলমের ৪–৫টি হীরা-আকৃতির বিন্দুর সমান উঁচু; অন্য লম্বা হরফগুলো (লাম, কাফ, তোয়া) প্রায় একই উচ্চতায় ওঠে, আর বা-এর মতো বাটিওয়ালা হরফ থাকে নিচু ও চওড়া। অনুশীলনের শুরুতে যত্ন করে একটি আলিফ লিখুন, আর পুরো লাইনে সেটাকেই মাপকাঠি বানান। দ্রুত লেখার চেয়ে মাপ ঠিক রাখা অনেক বেশি জরুরি।'
    }
  },
  {
    icon: '✒️',
    title: { en: 'Holding the Pen: the Qalam Angle', bn: 'কলম ধরা: কলমের কোণ' },
    body: {
      en: 'Traditional Arabic script is written with a chisel-edged reed pen (qalam) whose flat nib is held at a steady angle to the baseline. Keeping this one angle fixed is what makes the horizontal strokes broad and the upright strokes thinner. With a pencil or ballpoint you can imitate the effect: press slightly heavier on the flat sweeps and lighter on upright strokes, and never rotate your grip mid-letter.',
      bn: 'প্রথাগত আরবি লিপি লেখা হয় চ্যাপ্টা, বাটালির মতো মুখের খাগের কলম (ক্বলম) দিয়ে। এর চ্যাপ্টা নিব লাইনের সাথে একটি নির্দিষ্ট কোণে ধরে রাখা হয়। এই একটি কোণ স্থির রাখার কারণেই আড়াআড়ি টান চওড়া হয়, আর খাড়া টান সরু। পেনসিল বা বলপেনেও এই ভাব আনা যায়: চ্যাপ্টা টানে একটু বেশি চাপ দিন, খাড়া টানে হালকা; আর হরফ লেখার মাঝপথে কখনো কলম ধরার ভঙ্গি ঘোরাবেন না।'
    }
  },
  {
    icon: '↔️',
    title: { en: 'Spacing Between Words', bn: 'শব্দের মাঝে ফাঁক' },
    body: {
      en: 'Keep connected letters snug against each other, and leave about one letter-width of space between words. Non-connectors (ا د ذ ر ز و) create small internal gaps inside a word — those internal gaps must stay clearly smaller than the gaps between words, otherwise readers will see one word as two. Even spacing is what makes a page of Arabic look calm and professional.',
      bn: 'জোড়া লাগা হরফগুলো গায়ে গায়ে রাখুন, আর দুই শব্দের মাঝে মোটামুটি একটি হরফের সমান ফাঁক দিন। যে হরফগুলো পরের হরফের সাথে জোড়া লাগে না (ا د ذ ر ز و), সেগুলো শব্দের ভেতরেও ছোট ফাঁক তৈরি করে। শব্দের ভেতরের এই ফাঁক অবশ্যই দুই শব্দের মাঝের ফাঁকের চেয়ে স্পষ্টভাবে ছোট রাখতে হবে, নইলে পাঠক এক শব্দকে দুই শব্দ ভাববেন। সমান ফাঁক রাখলেই আরবি লেখার পাতা শান্ত আর দক্ষ হাতের লেখা মনে হয়।'
    }
  },
  {
    icon: '🔢',
    title: { en: 'Order of Writing: Skeleton → Dots → Vowels', bn: 'লেখার ক্রম: কাঠামো → নুকতা → হরকত' },
    body: {
      en: 'Write the bare letter skeleton (rasm) of the whole word first, moving strictly right-to-left without lifting the pen at connections. Only then go back and add the dots (also right-to-left), and add the harakat last. This is the traditional scribal order used in Quran copying — it keeps connections fluid, and finishing all dots before vowels prevents a kasra being mistaken for a letter dot below.',
      bn: 'আগে পুরো শব্দের খালি কাঠামো (রসম) লিখুন, কঠোরভাবে ডান থেকে বাঁয়ে, জোড়ার জায়গায় কলম না তুলে। তারপর ফিরে গিয়ে নুকতা দিন (এটাও ডান থেকে বাঁয়ে), সবশেষে হরকত। কুরআন লেখায় লিপিকারদের এটাই প্রথাগত ক্রম। এতে জোড়াগুলো মসৃণ থাকে; আর হরকতের আগে সব নুকতা শেষ করলে যেরকে নিচের নুকতা বলে ভুল হয় না।'
    }
  },
];

/**
 * Recommended practice-word sequence for early learners.
 * Starts with Basmalah components (the most recited phrase in Arabic),
 * then moves to short high-frequency Quran words, building stroke variety.
 */
const HW_PRACTICE_WORDS = [
  { arabic: 'بِ',         translit: 'Bi',        note: { en: 'Bā + kasra — the opening "In"', bn: 'কাসরা সহ বা — শুরুর "বি"' } },
  { arabic: 'اسْمِ',      translit: 'smi',       note: { en: 'Name (Ism) — Alif·Sīn·Mīm', bn: 'নাম (ইসম) — আলিফ·সিন·মিম' } },
  { arabic: 'اللَّهِ',    translit: 'Allāhi',    note: { en: 'Allāh — lām·lām·hā ligature', bn: 'আল্লাহ — লাম·লাম·হা লিগেচার' } },
  { arabic: 'الرَّحْمَٰنِ', translit: 'al-Raḥmāni', note: { en: 'The Most Merciful', bn: 'পরম দয়ালু' } },
  { arabic: 'الرَّحِيمِ', translit: 'al-Raḥīmi', note: { en: 'The Most Compassionate', bn: 'পরম করুণাময়' } },
  { arabic: 'قُلْ',       translit: 'Qul',       note: { en: 'Say! — Qāf·Lām (frequent Quran command)', bn: 'বলুন! — কাফ·লাম (কুরআনের বারবার আদেশ)' } },
  { arabic: 'رَبّ',       translit: 'Rabb',      note: { en: 'Lord — Rā·Bā (with shadda)', bn: 'রব — রা·বা (শাদ্দা সহ)' } },
  { arabic: 'نُور',       translit: 'Nūr',       note: { en: 'Light — Nūn·Wāw·Rā', bn: 'আলো — নুন·ওয়াও·রা' } },
  { arabic: 'بَاب',       translit: 'Bāb',       note: { en: 'Door — Bā·Alif·Bā', bn: 'দরজা — বা·আলিফ·বা' } },
  { arabic: 'دَار',       translit: 'Dār',       note: { en: 'House/abode — Dāl·Alif·Rā', bn: 'ঘর — দাল·আলিফ·রা' } },
  { arabic: 'يَد',        translit: 'Yad',       note: { en: 'Hand — Yā·Dāl', bn: 'হাত — ইয়া·দাল' } },
  { arabic: 'عَيْن',      translit: 'ʿAyn',      note: { en: 'Eye / spring — ʿAyn·Yā·Nūn', bn: 'চোখ/ঝর্ণা — আইন·ইয়া·নুন' } },
  { arabic: 'قَلَم',      translit: 'Qalam',     note: { en: 'Pen — Qāf·Lām·Mīm (Quran 96:4)', bn: 'কলম — কাফ·লাম·মিম (কুরআন ৯৬:৪)' } },
  { arabic: 'كِتَاب',     translit: 'Kitāb',     note: { en: 'Book — Kāf·Tā·Alif·Bā', bn: 'বই — কাফ·তা·আলিফ·বা' } },
  { arabic: 'أَحَد',      translit: 'Aḥad',      note: { en: 'One (Sūrat al-Ikhlāṣ) — Alif·Ḥā·Dāl', bn: 'এক (সূরা ইখলাস) — আলিফ·হা·দাল' } },
  { arabic: 'صَمَد',      translit: 'Ṣamad',     note: { en: 'Eternal (Sūrat al-Ikhlāṣ) — Ṣād·Mīm·Dāl', bn: 'চিরস্থায়ী (সূরা ইখলাস) — সোয়াদ·মিম·দাল' } },
  { arabic: 'سَمَاء',     translit: 'Samāʾ',     note: { en: 'Sky — Sīn·Mīm·Alif·Hamza', bn: 'আকাশ — সিন·মিম·আলিফ·হামযা' } },
  { arabic: 'أَرْض',      translit: 'Arḍ',       note: { en: 'Earth — Alif·Rā·Ḍād', bn: 'পৃথিবী — আলিফ·রা·দোয়াদ' } },
  { arabic: 'مَاء',       translit: 'Māʾ',       note: { en: 'Water — Mīm·Alif·Hamza', bn: 'পানি — মিম·আলিফ·হামযা' } },
  { arabic: 'حَقّ',       translit: 'Ḥaqq',      note: { en: 'Truth/right — Ḥā·Qāf (shadda)', bn: 'সত্য — হা·কাফ (শাদ্দা)' } },
  { arabic: 'سَلَام',     translit: 'Salām',     note: { en: 'Peace — Sīn·Lām·Alif·Mīm', bn: 'শান্তি — সিন·লাম·আলিফ·মিম' } },
  { arabic: 'لا إِلَٰهَ', translit: 'Lā ilāha',  note: { en: 'No deity — Lā·Alif·Lām·Hā (Shahāda)', bn: 'কোনো ইলাহ নেই — শাহাদার প্রথম অংশ' } },
  { arabic: 'إِلَّا اللَّهُ', translit: 'illallāh', note: { en: 'Except Allāh (Shahāda)', bn: 'আল্লাহ ছাড়া (শাহাদা)' } },
  { arabic: 'أُمّ',        translit: 'Umm',       note: { en: 'Mother — Alif·Mīm (shadda)', bn: 'মা — আলিফ·মিম (শাদ্দা)' } },
  { arabic: 'قَمَر',      translit: 'Qamar',     note: { en: 'Moon — Qāf·Mīm·Rā', bn: 'চাঁদ — কাফ·মিম·রা' } },
  { arabic: 'شَمْس',      translit: 'Shams',     note: { en: 'Sun — Shīn·Mīm·Sīn', bn: 'সূর্য — শিন·মিম·সিন' } },
  { arabic: 'نَجْم',      translit: 'Najm',      note: { en: 'Star — Nūn·Jīm·Mīm', bn: 'তারা — নুন·জিম·মিম' } },
  { arabic: 'جَنَّة',      translit: 'Jannah',    note: { en: 'Garden / Paradise — Jīm·Nūn·tā marbūṭa (shadda)', bn: 'বাগান/জান্নাত — জিম·নুন·তা মারবূতা (শাদ্দা)' } },
  { arabic: 'نَار',       translit: 'Nār',       note: { en: 'Fire — Nūn·Alif·Rā', bn: 'আগুন — নুন·আলিফ·রা' } },
  { arabic: 'عِلْم',      translit: 'ʿIlm',      note: { en: 'Knowledge — ʿAyn·Lām·Mīm', bn: 'জ্ঞান — আইন·লাম·মিম' } },
  { arabic: 'دِين',       translit: 'Dīn',       note: { en: 'Religion / way of life — Dāl·Yā·Nūn', bn: 'ধর্ম/জীবনব্যবস্থা — দাল·ইয়া·নুন' } },
  { arabic: 'مَلِك',      translit: 'Malik',     note: { en: 'King — Mīm·Lām·Kāf (Quran 114:2)', bn: 'রাজা — মিম·লাম·কাফ (কুরআন ১১৪:২)' } },
  { arabic: 'حَمْد',      translit: 'Ḥamd',      note: { en: 'Praise — Ḥā·Mīm·Dāl (al-ḥamdu lillāh)', bn: 'প্রশংসা — হা·মিম·দাল (আলহামদুলিল্লাহ)' } },
  { arabic: 'أَب',        translit: 'Ab',        note: { en: 'Father — Alif(hamza)·Bā; alif is a non-connector, so the two letters stand apart', bn: 'বাবা — আলিফ(হামযা)·বা; আলিফ নন-কানেক্টর, তাই অক্ষর দুটি আলাদা থাকে' } },
  { arabic: 'أَخ',        translit: 'Akh',       note: { en: 'Brother — Alif(hamza)·Khā; practise placing the dot above the final khā hook', bn: 'ভাই — আলিফ(হামযা)·খা; শেষ খা-এর হুকের উপরে বিন্দু বসানো অনুশীলন করুন' } },
  { arabic: 'يَوْم',      translit: 'Yawm',      note: { en: 'Day — Yā·Wāw·Mīm; wāw is a non-connector, so the mīm starts fresh after a small gap', bn: 'দিন — ইয়া·ওয়াও·মিম; ওয়াও নন-কানেক্টর, তাই ছোট ফাঁকের পরে মিম নতুন করে শুরু হয়' } },
  { arabic: 'لَيْل',      translit: 'Layl',      note: { en: 'Night — Lām·Yā·Lām; medial yā shrinks to a small tooth with 2 dots below', bn: 'রাত — লাম·ইয়া·লাম; মধ্য ইয়া নিচে ২ বিন্দুসহ ছোট দাঁতে পরিণত হয়' } },
  { arabic: 'رَسُول',     translit: 'Rasūl',     note: { en: 'Messenger — Rā·Sīn·Wāw·Lām; keep the three sīn teeth small and even before the wāw', bn: 'রাসূল — রা·সিন·ওয়াও·লাম; ওয়াওয়ের আগে সিনের তিনটি দাঁত ছোট ও সমান রাখুন' } },
  { arabic: 'رَحْمَة',    translit: 'Raḥmah',    note: { en: 'Mercy — Rā·Ḥā·Mīm·tā marbūṭa; the medial mīm is a tight knot before the final ة', bn: 'রহমত — রা·হা·মিম·তা মারবূতা; শেষ ة-এর আগে মধ্য মিম একটি শক্ত গিঁট' } },
  { arabic: 'صَلَاة',     translit: 'Ṣalāh',     note: { en: 'Prayer — Ṣād·Lām-Alif·tā marbūṭa; practise the lām-alif ligature and the 2-dot final ة', bn: 'নামায/সালাত — সোয়াদ·লাম-আলিফ·তা মারবূতা; লাম-আলিফ লিগেচার ও ২-বিন্দুর শেষ ة অনুশীলন করুন' } },
  { arabic: 'زَكَاة',     translit: 'Zakāh',     note: { en: 'Charity — Zāy·Kāf·Alif·tā marbūṭa; zāy is a non-connector, then kāf joins on to the alif', bn: 'যাকাত — যায়·কাফ·আলিফ·তা মারবূতা; যায় নন-কানেক্টর, তারপর কাফ আলিফের সাথে যুক্ত হয়' } },
  { arabic: 'حَيَاة',     translit: 'Ḥayāh',     note: { en: 'Life — Ḥā·Yā·Alif·tā marbūṭa; medial yā is a small 2-dot tooth between ḥā and alif', bn: 'জীবন — হা·ইয়া·আলিফ·তা মারবূতা; হা ও আলিফের মাঝে মধ্য ইয়া নিচে ২-বিন্দুর ছোট দাঁত' } },
  { arabic: 'قُرْآن',     translit: 'Qurʾān',    note: { en: 'Quran — Qāf·Rā·Alif-madda·Nūn; the madda (~) over the alif marks hamza + long ā', bn: 'কুরআন — কাফ·রা·আলিফ-মাদ্দা·নুন; আলিফের উপরের মাদ্দা (~) হামযা + দীর্ঘ আ বোঝায়' } },
  { arabic: 'مُؤْمِن',    translit: 'Muʾmin',    note: { en: 'Believer — Mīm·Wāw·Mīm·Nūn; after ḍamma the hamza sits on a wāw carrier (ؤ)', bn: 'মুমিন — মিম·ওয়াও·মিম·নুন; দাম্মার পরে হামযা ওয়াও বাহকের (ؤ) উপরে বসে' } },
  { arabic: 'شَيْء',      translit: 'Shayʾ',     note: { en: 'Thing — Shīn·Yā·Hamza; the final hamza sits alone on the line with no carrier', bn: 'বস্তু/জিনিস — শিন·ইয়া·হামযা; শেষ হামযা কোনো বাহক ছাড়া লাইনের উপরে একা বসে' } },
  { arabic: 'نَبِيّ',     translit: 'Nabiyy',    note: { en: 'Prophet — Nūn·Bā·Yā (shadda); bā becomes a small 1-dot tooth, and the final yā is doubled', bn: 'নবী — নুন·বা·ইয়া (শাদ্দা); বা ছোট ১-বিন্দুর দাঁত হয়, আর শেষ ইয়া শাদ্দায় দ্বিগুণ' } },
  { arabic: 'مَكَّة',     translit: 'Makkah',    note: { en: 'Makkah — Mīm·Kāf (shadda)·tā marbūṭa; medial kāf has no inner mark, but keep its slanted top stroke', bn: 'মক্কা — মিম·কাফ (শাদ্দা)·তা মারবূতা; মধ্য কাফে ভেতরের চিহ্ন নেই, তবে উপরের তির্যক টানটি রাখুন' } },
  { arabic: 'بِسْمِ اللَّهِ', translit: 'Bismillāh', note: { en: 'In the name of Allāh — note that the alif of اسْم is dropped when joined to بِ in this phrase', bn: 'আল্লাহর নামে — লক্ষ্য করুন: এই বাক্যাংশে بِ-এর সাথে যুক্ত হলে اسْم-এর আলিফ বাদ পড়ে' } },
];

/**
 * The 8 short-vowel and consonant-rest diacritics (harakat + sukūn + shadda + three tanwīn).
 * Each entry documents: symbol (Unicode combining character), bilingual name, placement rule,
 * the sound produced, and the most common placement mistake made by beginners.
 */
const HW_HARAKAT = [
  {
    symbol: 'بَ',
    mark: '\u064E',
    name: { en: 'Fatḥa (فَتْحَة)', bn: 'ফাতহা (فَتْحَة)' },
    placement: {
      en: 'Placed above the letter it vocalises — a small diagonal stroke slanting right-to-left.',
      bn: 'যে অক্ষরকে স্বরযুক্ত করে তার উপরে — ডান থেকে বামে হেলানো ছোট তির্যক রেখা।'
    },
    sound: {
      en: 'Short /a/ as in "bat". بَ = ba, تَ = ta, كَ = ka.',
      bn: 'সংক্ষিপ্ত /আ/ — "ব্যাট"-এর মতো। بَ = বা, تَ = তা, كَ = কা।'
    },
    mistake: {
      en: 'Written below the letter (swapped with kasra); or drawn too long — making it look like a small alif.',
      bn: 'অক্ষরের নিচে লেখা (কাসরার সাথে অদলবদল); বা অতিরিক্ত লম্বা করা — ছোট আলিফের মতো দেখায়।'
    }
  },
  {
    symbol: 'بِ',
    mark: '\u0650',
    name: { en: 'Kasra (كَسْرَة)', bn: 'কাসরা (كَسْرَة)' },
    placement: {
      en: 'Placed below the letter — a small diagonal stroke slanting right-to-left, mirroring the fatḥa.',
      bn: 'অক্ষরের নিচে — ডান থেকে বামে হেলানো ছোট তির্যক রেখা, ফাতহার প্রতিফলন।'
    },
    sound: {
      en: 'Short /i/ as in "bit". بِ = bi, تِ = ti, كِ = ki.',
      bn: 'সংক্ষিপ্ত /ই/ — "বিট"-এর মতো। بِ = বি, تِ = তি, كِ = কি।'
    },
    mistake: {
      en: 'Written above instead of below; or placed beneath a letter that already has a sub-dot, causing confusion with the dot of Bā, Yā, or Jīm.',
      bn: 'নিচের পরিবর্তে উপরে লেখা; বা নিচে বিন্দু আছে এমন অক্ষরের নিচে (বা, ইয়া, জিমের বিন্দুর সাথে গুলিয়ে ফেলা)।'
    }
  },
  {
    symbol: 'بُ',
    mark: '\u064F',
    name: { en: 'Ḍamma (ضَمَّة)', bn: 'দাম্মা (ضَمَّة)' },
    placement: {
      en: 'Placed above the letter — shaped like a tiny wāw (و), curling to the left.',
      bn: 'অক্ষরের উপরে — ছোট ওয়াওয়ের (و) মতো, বামে বাঁকানো।'
    },
    sound: {
      en: 'Short /u/ as in "put". بُ = bu, تُ = tu, كُ = ku.',
      bn: 'সংক্ষিপ্ত /উ/ — "বুট"-এর মতো। بُ = বু, تُ = তু, كُ = কু।'
    },
    mistake: {
      en: 'Drawn too large — mistaken for the letter wāw itself; or placed to the side of the letter rather than above it.',
      bn: 'অতিরিক্ত বড় আঁকলে ওয়াও অক্ষরের মতো দেখায়; বা অক্ষরের পাশে বসানো, উপরে নয়।'
    }
  },
  {
    symbol: 'بْ',
    mark: '\u0652',
    name: { en: 'Sukūn (سُكُون)', bn: 'সুকুন (سُكُون)' },
    placement: {
      en: 'Placed above the letter — a small hollow circle (◦), indicating no following vowel.',
      bn: 'অক্ষরের উপরে — একটি ছোট ফাঁকা বৃত্ত (◦), পরবর্তী স্বর নেই বলে জানায়।'
    },
    sound: {
      en: 'No vowel — the consonant rests. بْ = B (no vowel follows). Critical for correct tajwīd.',
      bn: 'কোনো স্বর নেই — ব্যঞ্জনধ্বনি বিশ্রামে। بْ = ব্ (পরে কোনো স্বর নেই)। সঠিক তাজওয়ীদের জন্য গুরুত্বপূর্ণ।'
    },
    mistake: {
      en: 'Confused with ḍamma (ḍamma is filled and curls; sukūn is a small open circle). Beginners often omit it entirely, producing incorrect vowel chains.',
      bn: 'দাম্মার সাথে মিলিয়ে ফেলা (দাম্মা ভরা ও বাঁকা; সুকুন ছোট খোলা বৃত্ত)। শিক্ষার্থীরা প্রায়ই এটি সম্পূর্ণ বাদ দেন।'
    }
  },
  {
    symbol: 'بّ',
    mark: '\u0651',
    name: { en: 'Shadda (شَدَّة)', bn: 'শাদ্দা (شَدَّة)' },
    placement: {
      en: 'Placed above the letter, with a fatḥa or ḍamma written above it (a kasra goes under it or below the letter). Shaped like a small ش without dots.',
      bn: 'অক্ষরের উপরে; ফাতহা বা দাম্মা এর উপরে লেখা হয় (কাসরা এর নিচে বা অক্ষরের নিচে)। ছোট বিন্দুহীন শিনের (ش) মতো।'
    },
    sound: {
      en: 'Gemination — the consonant is doubled/held. رَبَّنَا = Rabbanā (held bā). Mispronouncing shadda is a tajwīd error.',
      bn: 'দ্বিগুণ ব্যঞ্জন — অক্ষরটি দীর্ঘক্ষণ ধরা হয়। رَبَّنَا = রাব্বানা (দীর্ঘ বা)। শাদ্দা ভুল উচ্চারণ তাজওয়ীদ ত্রুটি।'
    },
    mistake: {
      en: 'Written below or omitted entirely. When shadda + fatḥa combine (ـَّ), the fatḥa sits above the shadda — beginners often reverse this stack.',
      bn: 'নিচে লেখা বা বাদ দেওয়া। শাদ্দা + ফাতহা একত্রে (ـَّ) হলে ফাতহা শাদ্দার উপরে — শিক্ষার্থীরা প্রায়ই এই ক্রম উল্টে দেন।'
    }
  },
  {
    symbol: 'بً',
    mark: '\u064B',
    name: { en: 'Tanwīn Fatḥa (ـً)', bn: 'তানউইন ফাতহা (ـً)' },
    placement: {
      en: 'Two fatḥa strokes above the letter. In most words, it is written on a final alif (ـاً); the second stroke sits slightly higher.',
      bn: 'অক্ষরের উপরে দুটি ফাতহা রেখা। বেশিরভাগ শব্দে শেষ আলিফে লেখা হয় (ـاً); দ্বিতীয় রেখা সামান্য উঁচুতে।'
    },
    sound: {
      en: 'Indefinite accusative suffix "-an". كِتَاباً = kitāban. Common in Quranic grammar.',
      bn: 'অনির্দিষ্ট প্রত্যয় "-আন"। كِتَاباً = কিতাবান। কুরআনের ব্যাকরণে সাধারণ।'
    },
    mistake: {
      en: 'Writing only one stroke — making it look like a fatḥa. The two strokes must be distinct and parallel.',
      bn: 'একটিমাত্র রেখা লেখা — ফাতহার মতো দেখায়। দুটি রেখা সুস্পষ্ট ও সমান্তরাল হতে হবে।'
    }
  },
  {
    symbol: 'بٍ',
    mark: '\u064D',
    name: { en: 'Tanwīn Kasra (ـٍ)', bn: 'তানউইন কাসরা (ـٍ)' },
    placement: {
      en: 'Two kasra strokes below the letter, mirroring tanwīn fatḥa.',
      bn: 'অক্ষরের নিচে দুটি কাসরা রেখা, তানউইন ফাতহার প্রতিফলন।'
    },
    sound: {
      en: 'Indefinite genitive suffix "-in". كِتَابٍ = kitābin. Marks the noun as indefinite in the genitive case.',
      bn: 'অনির্দিষ্ট প্রত্যয় "-ইন"। كِتَابٍ = কিতাবিন। বিশেষ্যকে অনির্দিষ্ট সম্বন্ধ কারকে চিহ্নিত করে।'
    },
    mistake: {
      en: 'Writing only one stroke (looks like kasra); or placing it above instead of below.',
      bn: 'একটিমাত্র রেখা লেখা (কাসরার মতো দেখায়); বা নিচের পরিবর্তে উপরে বসানো।'
    }
  },
  {
    symbol: 'بٌ',
    mark: '\u064C',
    name: { en: 'Tanwīn Ḍamma (ـٌ)', bn: 'তানউইন দাম্মা (ـٌ)' },
    placement: {
      en: 'Two ḍamma (wāw-like) strokes above the letter, side by side.',
      bn: 'অক্ষরের উপরে পাশাপাশি দুটি দাম্মা (ওয়াওয়ের মতো) রেখা।'
    },
    sound: {
      en: 'Indefinite nominative suffix "-un". كِتَابٌ = kitābun. The subject of a sentence is typically in this case.',
      bn: 'অনির্দিষ্ট প্রত্যয় "-উন"। كِتَابٌ = কিতাবুন। বাক্যের কর্তা সাধারণত এই কারকে থাকে।'
    },
    mistake: {
      en: 'Drawing only one wāw-shape (confused with ḍamma); or placed below instead of above.',
      bn: 'একটিমাত্র ওয়াওয়ের আকৃতি আঁকা (দাম্মার সাথে গুলিয়ে ফেলা); বা উপরের পরিবর্তে নিচে বসানো।'
    }
  },
];

/**
 * Al-Fātiḥa verse-by-verse stroke guide.
 * For each of the 7 verses: Arabic text, transliteration, and 4–6 focus letters
 * with bilingual stroke tips relevant to that verse's specific letter combinations.
 */
const HW_FATIHA_STROKES = [
  {
    verse: 1,
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translit: 'Bismi llāhi r-raḥmāni r-raḥīm',
    meaning: { en: 'In the name of Allāh, the Most Gracious, the Most Merciful', bn: 'আল্লাহর নামে, যিনি পরম দয়ালু, পরম করুণাময়' },
    focusLetters: [
      {
        letter: 'ب', context: 'بِسْمِ',
        tip: { en: 'The opening Bā carries a kasra below — write the short initial tooth first, add the dot below it, then place the kasra beneath that.', bn: 'শুরুর বা-এর নিচে যের আছে। আগে শুরুর ছোট দাঁতটি লিখুন, তার নিচে নুকতা দিন, তারপর নুকতারও নিচে যের বসান।' }
      },
      {
        letter: 'س', context: 'بِسْمِ',
        tip: { en: 'S\u012Bn\'s three teeth must be equal in height and evenly spaced — rush makes them look like a single zigzag rather than three distinct cusps.', bn: 'সিনের তিনটি দাঁত সমান উঁচু হবে, মাঝের ফাঁকও সমান থাকবে। তাড়াহুড়া করলে তিনটি আলাদা দাঁত না হয়ে একটা আঁকাবাঁকা রেখার মতো দেখায়।' }
      },
      {
        letter: 'ل', context: 'اللَّهِ',
        tip: { en: 'The divine name Allāh has its own ligature (not Lām-Alif لا): the two lāms merge into a double upstroke before the final hā. Practice the ligature as a single fluid movement.', bn: 'আল্লাহ নামের নিজস্ব জোড়া রূপ আছে (এটা লাম-আলিফ لا নয়): দুই লাম মিলে পাশাপাশি দুটি খাড়া টান হয়, তারপর শেষে হা। পুরো জোড়া রূপটি না থেমে এক টানে লেখার অনুশীলন করুন।' }
      },
      {
        letter: 'ح', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Ḥā in Raḥmān is initial (after Rā): the hook stays on the baseline and the upstroke must be tight. Carrying a sukūn above it (حْ) means the consonant rests — do not add a vowel stroke.', bn: 'রাহমানের হা শুরুর রূপে বসে (রা-এর পরে)। এর বাঁকটি লাইনের ওপরেই থাকে, আর ওপরে ওঠার টান আঁটসাঁট হবে। উপরে সাকিন (حْ) থাকলে হরফটি হরকত ছাড়া স্থির থাকে, তাই কোনো হরকত যোগ করবেন না।' }
      },
      {
        letter: 'م', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Mīm in the middle of Raḥmān connects medially — its tight knot must be closed cleanly before the joining stroke continues. An open loop makes it look like a reversed nūn.', bn: 'রাহমানের মাঝের মিম দুই পাশে জোড়া লাগে। জোড়ার টান সামনে নেওয়ার আগে মিমের ছোট গোল মাথাটি পরিষ্কার করে বন্ধ করুন। মাথা খোলা থাকলে উল্টো নুনের মতো দেখায়।' }
      },
      {
        letter: 'ي', context: 'الرَّحِيمِ',
        tip: { en: 'Yā in Raḥīm carries a long vowel (ī) expressed by the yā itself. In medial position it has no descending tail — write the curved connector and place the 2 dots below at the end.', bn: 'রাহিমের ইয়া নিজেই দীর্ঘ \'ঈ\' ধ্বনি দেয়। মাঝের রূপে এর নিচে নামা লেজ থাকে না। বাঁকানো জোড়ার টানটি লিখুন, শেষে নিচে ২টি নুকতা দিন।' }
      }
    ]
  },
  {
    verse: 2,
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translit: 'Al-ḥamdu lillāhi rabbi l-ʿālamīn',
    meaning: { en: 'All praise is due to Allāh, Lord of all the worlds', bn: 'সমস্ত প্রশংসা আল্লাহর, যিনি সকল জগতের প্রতিপালক' },
    focusLetters: [
      {
        letter: 'ح', context: 'الْحَمْدُ',
        tip: { en: 'In al-Ḥamdu, Alif-Lām is followed by Ḥā with a fatḥa, then Mīm with a sukūn: al-ḥam-du. The medial Ḥā stays on the baseline — add no dot, or the word looks like Jīm (which has a dot below).', bn: 'আল-হামদুতে আলিফ-লামের পরে যবরসহ হা, তারপর সাকিনসহ মিম: আল-হাম-দু। মাঝের হা লাইনের ওপরেই থাকে। কোনো নুকতা দেবেন না, দিলে শব্দটি জিমের মতো দেখাবে (জিমের নিচে নুকতা থাকে)।' }
      },
      {
        letter: 'د', context: 'الْحَمْدُ',
        tip: { en: 'Dāl at the end of al-ḥamdu is a non-connector — the wedge stroke ends completely before the next letter Lām begins. Do not extend a forward-join stroke.', bn: 'আল-হামদুর শেষের দাল পরের হরফের সাথে জোড়া লাগে না। পরের হরফ লাম শুরুর আগেই দালের কোণাচে টান পুরোপুরি শেষ হয়ে যায়। সামনে জোড়ার টান বাড়াবেন না।' }
      },
      {
        letter: 'ر', context: 'رَبِّ',
        tip: { en: 'Rā in Rabb is a non-connector with a fatḥa above. The smooth downward curve must not become angular. Because the next letter Bā immediately follows, leave a small gap — Rā does not join forward.', bn: 'রাব্বের রা পরের হরফের সাথে জোড়া লাগে না, উপরে যবর। এর নিচে নামা বাঁকটি মসৃণ হবে, কোণাচে নয়। ঠিক পরেই বা আসে, তাই মাঝে ছোট ফাঁক রাখুন; রা সামনে জোড়া লাগে না।' }
      },
      {
        letter: 'ب', context: 'رَبِّ',
        tip: { en: 'Bā in Rabb carries a shadda (doubled) + kasra below. Write the bowl, add the sub-dot, place the shadda above the bowl, then the kasra below the shadda position — three marks stacked precisely.', bn: 'রাব্বের বা-তে তাশদীদ (হরফটি দুবার) আর নিচে যের। আগে বাটি লিখুন, নিচে নুকতা দিন, বাটির উপরে তাশদীদ বসান, তারপর তাশদীদের জায়গা বরাবর নিচে যের দিন। তিনটি চিহ্ন ঠিক ঠিক জায়গায় বসবে।' }
      },
      {
        letter: 'ع', context: 'الْعَالَمِينَ',
        tip: { en: 'ʿAyn in ʿĀlamīn follows the Lām, so it is medial: a small closed eye that stays on the baseline. The fatḥa sits above it. Do not add a dot; its absence is what makes the letter read as ʿAyn (Ghayn has the same shape with a dot above).', bn: 'আলামিনের আইন লামের পরে আসে, তাই এটি মাঝের রূপ: ছোট বন্ধ চোখের মতো, লাইনের ওপরেই থাকে। উপরে যবর। নুকতা দেবেন না; নুকতা নেই বলেই হরফটি আইন হিসেবে পড়া হয় (গাইনের আকৃতি একই, শুধু উপরে একটা নুকতা)।' }
      },
      {
        letter: 'ن', context: 'الْعَالَمِينَ',
        tip: { en: 'Final Nūn in ʿĀlamīn: the bowl dips below the baseline and the single dot sits above. In final position the tail curls up on the left — do not add a forward stroke.', bn: 'আলামিনের শেষের নুন: বাটি লাইনের নিচে নেমে যায়, একটি নুকতা উপরে। শেষের রূপে লেজ বাঁ দিকে উপরে বেঁকে ওঠে। সামনে কোনো টান বাড়াবেন না।' }
      }
    ]
  },
  {
    verse: 3,
    arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
    translit: 'Ar-raḥmāni r-raḥīm',
    meaning: { en: 'The Most Gracious, the Most Merciful', bn: 'পরম দয়ালু, পরম করুণাময়' },
    focusLetters: [
      {
        letter: 'ر', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Rā here carries a shadda (doubled) + fatḥa. Write the Rā curve first, then place the shadda above, then the fatḥa above the shadda — a fatḥa or ḍamma always tops the shadda stack.', bn: 'এখানে রা-তে তাশদীদ (হরফটি দুবার) ও যবর। আগে রা-এর বাঁক লিখুন, তারপর উপরে তাশদীদ, তারপর তাশদীদের উপরে যবর। যবর বা পেশ সবসময় তাশদীদের ওপরে বসে।' }
      },
      {
        letter: 'ح', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Practice writing ar-raḥmān in its three connected pieces, lifting the pen after Alif and after Rā: Alif → Lām-Rā → Ḥā-Mīm-Nūn, with a small dagger alif above the Mīm. The Nūn bowl is the deepest point.', bn: 'আর-রাহমান শব্দটি তিন টুকরায় লেখার অনুশীলন করুন; আলিফের পরে আর রা-এর পরে কলম তুলুন: আলিফ → লাম-রা → হা-মিম-নুন। মিমের উপরে ছোট খাড়া আলিফ বসবে। নুনের বাটি সবচেয়ে নিচে নামে।' }
      },
      {
        letter: 'م', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Mīm in Raḥmān is in medial position — it has no descending tail. The knot is tight and the exit stroke runs leftward straight into the next letter.', bn: 'রাহমানের মিম মাঝের রূপে, তাই নামা লেজ নেই। গোল মাথাটি আঁটসাঁট, আর বের হওয়ার টান সোজা বাঁ দিকে গিয়ে পরের হরফে মেশে।' }
      },
      {
        letter: 'ي', context: 'الرَّحِيمِ',
        tip: { en: 'In Raḥīm the Yā expresses the long /ī/ vowel. Its medial form is a short tooth on the connecting line, with its 2 dots below; it has no descending tail in this position.', bn: 'রাহিমে ইয়া দীর্ঘ /ঈ/ ধ্বনি দেয়। এর মাঝের রূপ জোড়ার রেখার ওপর একটি ছোট দাঁত, নিচে দুটি নুকতা; এই রূপে নিচে নামা লেজ থাকে না।' }
      },
      {
        letter: 'ن', context: 'الرَّحْمَٰنِ',
        tip: { en: 'Final Nūn in Raḥmān carries a kasra (ni). Write the bowl so it dips clearly below the baseline, add the single dot above, then place the kasra beneath — three marks in precise sequence. Students often place the kasra before the dot, reversing the dots-before-vowels order.', bn: 'রাহমানের শেষের নুনে যের (নি)। বাটিটি লাইনের নিচে স্পষ্ট করে নামিয়ে লিখুন, উপরে একটি নুকতা দিন, তারপর নিচে যের। তিনটি চিহ্ন ঠিক এই ক্রমে। ছাত্ররা প্রায়ই নুকতার আগে যের দিয়ে ফেলে; এতে \'আগে নুকতা, পরে হরকত\' নিয়মটা উল্টে যায়।' }
      },
      {
        letter: 'ل', context: 'الرَّحْمَٰنِ',
        tip: { en: 'The article Lām connects directly to the following Rā — Rā is a non-connector only forward: it accepts the join from Lām, but nothing joins after it. Lām provides the connection; Rā ends the piece. Practice Lām-to-Rā as one stroke, then lift the pen after the Rā.', bn: 'আল-এর লাম সরাসরি পরের রা-এর সাথে জোড়া লাগে। রা শুধু সামনের দিকে জোড়া লাগে না: লামের জোড়া সে নেয়, কিন্তু তার পরে কিছু জোড়া লাগে না। লাম জোড়া দেয়, রা টুকরাটি শেষ করে। লাম থেকে রা এক টানে লেখার অনুশীলন করুন, তারপর রা-এর পরে কলম তুলুন।' }
      }
    ]
  },
  {
    verse: 4,
    arabic: 'مَالِكِ يَوْمِ الدِّينِ',
    translit: 'Māliki yawmi d-dīn',
    meaning: { en: 'Master of the Day of Judgement', bn: 'বিচার দিনের মালিক' },
    focusLetters: [
      {
        letter: 'م', context: 'مَالِكِ',
        tip: { en: 'Mālik opens with an initial Mīm carrying a fatḥa. In initial position the Mīm knot has a forward-connecting exit stroke going left — make the knot compact before extending.', bn: 'মালিক শুরু হয় যবরসহ শুরুর রূপের মিম দিয়ে। শুরুর রূপে মিমের গোল মাথা থেকে জোড়ার টান বাঁ দিকে এগিয়ে যায়। টান লম্বা করার আগে মাথাটি ছোট ও আঁটসাঁট করুন।' }
      },
      {
        letter: 'ك', context: 'مَالِكِ',
        tip: { en: 'Kāf in Mālik: draw the outer arch first (right-to-left), then add the small diagonal inner mark unique to Kāf. In final position the arch drops to the baseline — do not skip the inner mark.', bn: 'মালিকের কাফ: আগে বাইরের খিলানটি টানুন (ডান থেকে বামে), তারপর ভেতরের ছোট তেরছা চিহ্নটি দিন, যা শুধু কাফেরই থাকে। শেষের রূপে খিলানটি লাইনে নেমে আসে। ভেতরের চিহ্নটি বাদ দেবেন না।' }
      },
      {
        letter: 'و', context: 'يَوْمِ',
        tip: { en: 'Wāw in Yawm is a non-connector. The small rounded head and the descending tail must be proportionate — a head that is too large unbalances the word. The sukūn above confirms no vowel follows.', bn: 'ইয়াওমের ওয়াও পরের হরফের সাথে জোড়া লাগে না। ছোট গোল মাথা আর নিচে নামা লেজের মাপ মিলিয়ে লিখুন; মাথা বেশি বড় হলে শব্দের ভারসাম্য নষ্ট হয়। উপরের সাকিন বলে দেয়, এখানে কোনো হরকত নেই।' }
      },
      {
        letter: 'د', context: 'الدِّينِ',
        tip: { en: 'Dāl in al-Dīn carries a shadda above the Dāl itself (Dīn = Dāl + shadda + long ī). The Dāl wedge is a non-connector; the shadda sits precisely above the peak of the wedge.', bn: 'আদ-দিনের দালে, দালের ঠিক উপরেই তাশদীদ (দীন = দাল + তাশদীদ + দীর্ঘ ঈ)। দালের কোণাচে আকৃতি পরের হরফের সাথে জোড়া লাগে না; তাশদীদ বসে ঠিক কোণার চূড়ার উপরে।' }
      },
      {
        letter: 'ن', context: 'الدِّينِ',
        tip: { en: 'Final Nūn in al-Dīn closes the verse. Its bowl descends below the baseline and the tail curls outward. The kasra goes below the Nūn, while the Nūn’s own dot sits above, inside the curve: keep the two marks apart.', bn: 'আদ-দিনের শেষের নুন দিয়ে আয়াত শেষ হয়। এর বাটি লাইনের নিচে নামে, লেজ বাইরের দিকে বেঁকে যায়। যের বসে নুনের নিচে, আর নুনের নিজের নুকতা উপরে, বাঁকের ভেতরে: দুটি চিহ্ন আলাদা রাখুন।' }
      }
    ]
  },
  {
    verse: 5,
    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    translit: 'Iyyāka naʿbudu wa-iyyāka nastaʿīn',
    meaning: { en: 'You alone we worship, and You alone we ask for help', bn: 'আমরা কেবল তোমারই ইবাদত করি এবং কেবল তোমার কাছেই সাহায্য চাই' },
    focusLetters: [
      {
        letter: 'ي', context: 'إِيَّاكَ',
        tip: { en: 'Yā in Iyyāka carries a shadda (doubled Yā) + fatḥa, then an alif follows. In initial position after hamza, the Yā body is a short flat curve — the shadda sits above it confirming the geminated yy sound.', bn: 'ইয়্যাকার ইয়া-তে তাশদীদ (দুই ইয়া) ও যবর, তারপর আলিফ। হামযার পরে শুরুর রূপে ইয়ার শরীর ছোট, চ্যাপ্টা একটি বাঁক। উপরের তাশদীদ জানিয়ে দেয়, ইয়া দ্বিগুণ করে পড়তে হবে।' }
      },
      {
        letter: 'ع', context: 'نَعْبُدُ',
        tip: { en: 'ʿAyn in Naʿbudu is medial — in medial position it lacks the descending tail; instead it flows into a connecting exit. The small closed eye shape must remain visible, not collapsed.', bn: 'নাবুদুর আইন মাঝের রূপে। এই রূপে নামা লেজ থাকে না; তার বদলে জোড়ার টানে মিশে সামনে চলে যায়। ছোট বন্ধ চোখের আকৃতিটা যেন স্পষ্ট দেখা যায়, চুপসে না যায়।' }
      },
      {
        letter: 'ب', context: 'نَعْبُدُ',
        tip: { en: 'Bā in Naʿbudu carries a ḍamma above — the small wāw-like curl sits above the medial tooth. The sub-dot of Bā and the ḍamma above must both be present; neither can be omitted in careful Quran writing.', bn: 'নাবুদুর বা-তে উপরে পেশ: ওয়াওয়ের মতো ছোট বাঁকটি মাঝের দাঁতের উপরে বসে। বা-এর নিচের নুকতা আর উপরের পেশ দুটোই থাকতে হবে; যত্ন করে কুরআন লিখলে কোনোটাই বাদ দেওয়া যায় না।' }
      },
      {
        letter: 'س', context: 'نَسْتَعِينُ',
        tip: { en: 'Sīn in Nastaʿīn carries a sukūn above (سْ) — the three teeth still need to be even; do not rush them because the word is long. The sukūn confirms the Sīn rests without a vowel.', bn: 'নাসতাঈনের সিনের উপরে সাকিন (سْ)। তবুও তিনটি দাঁত সমান হতে হবে; শব্দটি লম্বা বলে তাড়াহুড়া করবেন না। সাকিন বলে দেয়, সিন হরকত ছাড়া স্থির।' }
      },
      {
        letter: 'ن', context: 'نَسْتَعِينُ',
        tip: { en: 'Final Nūn in Nastaʿīn carries a ḍamma (indicative verb ending). Its bowl descends below the baseline. The single dot above must be placed after completing the bowl — do not add it mid-stroke.', bn: 'নাসতাঈনের শেষের নুনে পেশ (ক্রিয়ার মারফূ রূপ)। বাটি লাইনের নিচে নামে। বাটি পুরো লেখা শেষ হলে তবেই উপরে একটি নুকতা দিন; টানের মাঝখানে দেবেন না।' }
      }
    ]
  },
  {
    verse: 6,
    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    translit: 'Ihdinā ṣ-ṣirāṭa l-mustaqīm',
    meaning: { en: 'Guide us to the straight path', bn: 'আমাদের সরল পথ দেখাও' },
    focusLetters: [
      {
        letter: 'ص', context: 'الصِّرَاطَ',
        tip: { en: 'Ṣād in aṣ-Ṣirāṭ carries a shadda. The oval of Ṣād is closed — keep the loop clean. The shadda sits above the body, not inside the oval.', bn: 'আস-সিরাতের সোয়াদে তাশদীদ। সোয়াদের ডিমের মতো গোল অংশটি বন্ধ, ফাঁসটি পরিষ্কার রাখুন। তাশদীদ বসে শরীরের উপরে, গোল অংশের ভেতরে নয়।' }
      },
      {
        letter: 'ط', context: 'الصِّرَاطَ',
        tip: { en: 'Ṭā in aṣ-Ṣirāṭ: the closed oval loop and the rising vertical stroke are both essential. Draw the loop first (going right-to-left), close it, then add the upright stroke at its left end, from the top down.', bn: 'আস-সিরাতের তোয়া: বন্ধ গোল ফাঁস আর খাড়া টান, দুটোই জরুরি। আগে ফাঁসটি লিখুন (ডান থেকে বামে) ও বন্ধ করুন, তারপর এর বাঁ প্রান্তে উপর থেকে নিচে খাড়া টানটি দিন।' }
      },
      {
        letter: 'س', context: 'الْمُسْتَقِيمَ',
        tip: { en: 'Sīn in Mustaqīm is in medial position — the teeth are followed immediately by a connecting stroke to the Tā. Keep the teeth small and even; the medial connecting exit is lower than the tooth tops.', bn: 'মুসতাকিমের সিন মাঝের রূপে: দাঁতগুলোর পরেই তা-এর সাথে জোড়ার টান। দাঁত ছোট ও সমান রাখুন; জোড়ার টান দাঁতের মাথার চেয়ে নিচে থাকে।' }
      },
      {
        letter: 'ق', context: 'الْمُسْتَقِيمَ',
        tip: { en: 'Qāf in Mustaqīm is medial: a small loop on the baseline (no descending cup) that carries 2 dots above. In medial position the loop has a forward-connecting exit — ensure the two dots are placed only after the whole medial body is written.', bn: 'মুসতাকিমের ক্বাফ মাঝের রূপে: লাইনের ওপর ছোট ফাঁস (নিচে নামা বাটি নেই), উপরে ২টি নুকতা। এই রূপে ফাঁস থেকে সামনে জোড়ার টান বের হয়। পুরো শরীর লেখা শেষ হলে তবেই নুকতা দুটি দিন।' }
      },
      {
        letter: 'م', context: 'الْمُسْتَقِيمَ',
        tip: { en: 'Final Mīm in Mustaqīm: in final position the Mīm knot has a descending tail going below the baseline (unlike its medial form). The fatḥa above the Mīm is its own vowel; the long ī before it is carried by the Yā.', bn: 'মুসতাকিমের শেষের মিম: শেষের রূপে মিমের গোল মাথা থেকে লেজ লাইনের নিচে নামে (মাঝের রূপে এমন হয় না)। মিমের উপরের যবর মিমেরই হরকত; এর আগের দীর্ঘ ঈ-ধ্বনিটি দেয় ইয়া।' }
      }
    ]
  },
  {
    verse: 7,
    arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    translit: 'Ṣirāṭa lladhīna anʿamta ʿalayhim ghayri l-maghḍūbi ʿalayhim wa-lā ḍ-ḍāllīn',
    meaning: { en: 'The path of those whom You have blessed — not of those who earned anger, nor of those who are astray', bn: 'তাদের পথ যাদের তুমি নেয়ামত দিয়েছ — তাদের নয় যারা গযব পেয়েছে এবং তাদেরও নয় যারা পথভ্রষ্ট' },
    focusLetters: [
      {
        letter: 'ذ', context: 'الَّذِينَ',
        tip: { en: 'Dhāl in alladhīna: same wedge as Dāl, with 1 dot directly above. In connected words the non-connector property means the following Yā begins a new attachment point — leave a clear break.', bn: 'আল্লাযিনার যাল: দালের মতোই কোণাচে আকৃতি, ঠিক উপরে ১টি নুকতা। যাল পরের হরফের সাথে জোড়া লাগে না, তাই শব্দের ভেতরেও পরের ইয়া নতুন করে শুরু হয়। মাঝে স্পষ্ট ফাঁক রাখুন।' }
      },
      {
        letter: 'ع', context: 'أَنْعَمْتَ',
        tip: { en: 'ʿAyn in Anʿamta is medial: the eye shape is compact and the connecting exit runs left. The fatḥa above the ʿAyn must be written after closing the eye-opening — do not let it drift into the opening.', bn: 'আনআমতার আইন মাঝের রূপে: চোখের আকৃতি ছোট, জোড়ার টান বাঁ দিকে যায়। চোখের মুখ বন্ধ করার পরে আইনের উপরে যবর দিন; যবর যেন খোলা অংশে ঢুকে না পড়ে।' }
      },
      {
        letter: 'غ', context: 'غَيْرِ',
        tip: { en: 'Ghayn in Ghayri opens the word. Its hook shape is identical to ʿAyn but carries 1 dot above the hook opening. Make the dot visible above — not inside or beside the hook.', bn: 'গাইরির গাইন দিয়ে শব্দ শুরু। এর বাঁকানো আকৃতি হুবহু আইনের মতো, তবে বাঁকের মুখের উপরে ১টি নুকতা। নুকতাটি উপরে স্পষ্ট করে দিন, বাঁকের ভেতরে বা পাশে নয়।' }
      },
      {
        letter: 'ض', context: 'الْمَغْضُوبِ',
        tip: { en: 'Ḍād in al-Maghḍūb: the oval of Ḍād (like Ṣād) is closed, with 1 dot above. In connected position, the exit tail turns left. A common error is placing the dot inside the oval.', bn: 'আল-মাগদুবের দোয়াদ: সোয়াদের মতো দোয়াদের গোল অংশও বন্ধ, উপরে ১টি নুকতা। জোড়া অবস্থায় বের হওয়ার লেজ বাঁ দিকে ঘোরে। অনেকেই ভুল করে গোল অংশের ভেতরে নুকতা দেয়।' }
      },
      {
        letter: 'ل', context: 'الضَّالِّينَ',
        tip: { en: 'Lām in aḍ-Ḍāllīn carries a shadda — the doubled Lām creates a geminate. Write the Lām upstroke, then place the shadda cleanly above. The kasra below confirms the /i/ vowel before the final Nūn.', bn: 'আদ-দাল্লিনের লামে তাশদীদ, অর্থাৎ লাম দ্বিগুণ হয়। আগে লামের খাড়া টান লিখুন, তারপর উপরে পরিষ্কার করে তাশদীদ বসান। নিচের যের জানিয়ে দেয়, শেষের নুনের আগে /ই/ ধ্বনি আছে।' }
      }
    ]
  },
];

/**
 * Overview of the five major Arabic calligraphic scripts encountered in Quranic contexts.
 * Each style includes bilingual notes on its characteristics and typical usage.
 * Sources: standard Arabic calligraphy scholarship; King Fahd Complex mushaf typography notes.
 */
const HW_KHAT_STYLES = [
  {
    name: { en: 'Naskh (نَسْخ)', bn: 'নাসখ (نَسْخ)' },
    emoji: '📄',
    notes: [
      {
        en: 'The dominant script for printed Qurans and modern Arabic typography. Its rounded, upright letterforms and consistent proportions make it the most legible style for extended reading.',
        bn: 'ছাপা কুরআন আর আধুনিক আরবি ছাপার হরফে এই লিপিই সবচেয়ে বেশি চলে। হরফগুলো গোলগাল ও সোজা, মাপও সব জায়গায় এক রকম; তাই একটানা অনেকক্ষণ পড়ার জন্য এটিই সবচেয়ে সহজপাঠ্য ধারা।'
      },
      {
        en: 'Letters rest clearly on the baseline; ascenders (Alif, Lām, Kāf) are moderate in height. Dots are compact and precisely placed. Beginners learning Quran writing start with Naskh because its proportions are taught systematically in madrasas worldwide.',
        bn: 'হরফগুলো স্পষ্টভাবে লাইনের ওপর বসে; লম্বা হরফগুলো (আলিফ, লাম, কাফ) মাঝারি উঁচু। নুকতা ছোট, ঠিক জায়গামতো বসানো। কুরআন লেখা শেখা শুরু হয় নাসখ দিয়েই, কারণ সারা বিশ্বের মাদ্রাসায় এর মাপজোখ নিয়ম মেনে ধাপে ধাপে শেখানো হয়।'
      },
      {
        en: 'Distinguishing trait: the pen is held at a steep angle; bowls (Bā, Nūn, Qāf) are shallow and smooth; the Mīm knot is the tightest loop in the script.',
        bn: 'চেনার উপায়: কলম ধরা হয় খাড়া কোণে; বাটিগুলো (বা, নুন, ক্বাফ) অগভীর ও মসৃণ; মিমের গোল মাথা এই লিপির সবচেয়ে ছোট, আঁটসাঁট ফাঁস।'
      }
    ]
  },
  {
    name: { en: 'Uthmani / Madinah Script (الرسم العثماني)', bn: 'উসমানি / মদিনার লিপি (الرسم العثماني)' },
    emoji: '🕌',
    notes: [
      {
        en: 'The Uthmani rasm is the consonantal spelling of the codices copied under Caliph Uthman in the 7th century. Modern mushafs follow it, the best known being the Madinah Mushaf printed by the King Fahd Complex for the Printing of the Holy Quran (مجمع الملك فهد). Its spelling conventions differ from modern standard Arabic orthography.',
        bn: 'উসমানি রসম হলো খ্রিস্টীয় ৭ম শতকে খলিফা উসমান (রাঃ)-এর সময়ে অনুলিপি করা মুসহাফগুলোর ব্যঞ্জনবর্ণের কাঠামোর বানানরীতি। আধুনিক মুসহাফগুলো এটি মেনে চলে; সবচেয়ে পরিচিত হলো বাদশাহ ফাহদ কুরআন মুদ্রণ কমপ্লেক্সের (مجمع الملك فهد) ছাপা মদিনা মুসহাফ। এর বানানরীতি আধুনিক প্রমিত আরবি বানান থেকে আলাদা।'
      },
      {
        en: 'Distinguishing traits: the māddah sign (آ) appears on Alif as a wavy stroke; certain words are written with an elevated or missing Alif (e.g. الرَّحْمَٰنِ) following early Quranic orthography; small extra signs (pause marks, a little circle over silent letters) are added on top of the base Naskh letterforms.',
        bn: 'চেনার উপায়: আলিফের ওপর মাদ্দ-চিহ্ন (آ) ঢেউখেলানো দাগ হিসেবে বসে; প্রথম যুগের কুরআনের বানান মেনে কিছু শব্দে আলিফ উঁচুতে ছোট করে লেখা হয়, বা বাদ যায় (যেমন الرَّحْمَٰنِ); আর মূল নাসখ হরফের ওপরে বাড়তি ছোট চিহ্ন থাকে (ওয়াকফের চিহ্ন, উচ্চারণ হয় না এমন হরফের ওপর ছোট গোল)।'
      },
      {
        en: 'For handwriting practice: the Uthmani letterforms are identical to Naskh in stroke construction — the differences are in diacritic placement and orthographic conventions, not in the letter shapes themselves. Mastering Naskh strokes gives you the foundation for Uthmani copying.',
        bn: 'হাতের লেখা অনুশীলনের দিক থেকে: উসমানি হরফ টানার নিয়মে হুবহু নাসখের মতো। পার্থক্য হরকত-চিহ্ন বসানো আর বানানরীতিতে, হরফের আকৃতিতে নয়। নাসখের টানগুলো রপ্ত হলে উসমানি লিপিতে কুরআন লেখার ভিত তৈরি হয়ে যায়।'
      }
    ]
  },
  {
    name: { en: 'Kūfī (كُوفِي)', bn: 'কুফি (كُوفِي)' },
    emoji: '🏛️',
    notes: [
      {
        en: 'Generally regarded as the first Arabic script formalised into a regular, monumental style, named after the city of Kufa (Iraq); the looser Ḥijāzī hand is older. It is characterised by angular, geometric letterforms with strong horizontal baselines and bold vertical strokes. Many early Quranic manuscripts (1st–2nd century AH) were written in Kūfī; the very earliest use the slanted Ḥijāzī script.',
        bn: 'সাধারণত একে নিয়ম বেঁধে সুশৃঙ্খল, স্মারক রূপ পাওয়া প্রথম আরবি লিপি ধরা হয়; নাম এসেছে ইরাকের কুফা শহর থেকে। কম নিয়মবাঁধা হিজাযি লিপি এর চেয়ে পুরোনো। হরফগুলো কোণাচে, জ্যামিতিক; লাইনের আড়াআড়ি টান জোরালো, খাড়া টান মোটা। প্রথম যুগের অনেক কুরআনের পাণ্ডুলিপি (হিজরি ১ম–২য় শতাব্দী) কুফিতে লেখা; তবে একেবারে প্রথম দিকেরগুলো হেলানো হিজাযি লিপিতে।'
      },
      {
        en: 'Distinguishing traits: letters like Alif and Lām are perfectly vertical and meet the baseline at sharp right angles; rounded letters (Mīm, ʿAyn) are squared off; no descenders — even Nūn and Qāf sit on the baseline without a downward curve.',
        bn: 'চেনার উপায়: আলিফ, লামের মতো হরফ একদম খাড়া, লাইনের সাথে সমকোণে মেলে; গোল হরফগুলো (মিম, আইন) চারকোনা করে লেখা হয়; কোনো হরফ লাইনের নিচে নামে না, এমনকি নুন আর ক্বাফও নিচে না বেঁকে লাইনের ওপরেই বসে।'
      },
      {
        en: 'Used today in: mosque tile inscriptions, book covers, national emblems, and decorative architectural friezes. Not the standard for Quran text study — but recognising its forms helps students appreciate the history of Quranic script transmission.',
        bn: 'আজকাল দেখা যায়: মসজিদের টাইলে লেখা, বইয়ের প্রচ্ছদ, জাতীয় প্রতীক আর দালানের নকশাদার কারুকাজে। কুরআন পড়া ও শেখার প্রচলিত লিপি এটি নয়; তবে এর আকৃতি চিনলে কুরআনের লিপি কীভাবে যুগে যুগে হাতবদল হয়ে এসেছে, সেই ইতিহাস শিক্ষার্থীরা ভালো বুঝতে পারে।'
      }
    ]
  },
  {
    name: { en: 'Thuluth (ثُلُث)', bn: 'ছুলুছ (ثُلُث)' },
    emoji: '🖊️',
    notes: [
      {
        en: 'Thuluth ("one third") is regarded as the "mother of Arabic scripts" — its proportional system informed all later cursive styles. Characterised by large, sweeping letterforms; tall ascenders; dramatic curves; and elaborate final flourishes.',
        bn: 'ছুলুছ ("এক-তৃতীয়াংশ")-কে বলা হয় "আরবি লিপির মা"; এর মাপের নিয়ম থেকেই পরের সব টানা লিপি গড়ে উঠেছে। চেনার উপায়: বড়, প্রবাহমান হরফ; লম্বা খাড়া হরফ; চোখে পড়ার মতো বাঁক; আর শেষে কারুকাজ করা টান।'
      },
      {
        en: 'Distinguishing traits: letters can be stacked vertically (ligature stacking) in ways impossible in Naskh; the pen is held at a steep angle like Naskh, but the nib is broader; serifs and decorative terminals appear on many strokes. One explanation of the name: its nib is one-third the width of the large ṭūmār pen.',
        bn: 'চেনার উপায়: হরফ একটার ওপর আরেকটা সাজিয়ে লেখা যায়, যা নাসখে সম্ভব নয়; কলম নাসখের মতোই খাড়া কোণে ধরা হয়, তবে নিব আরও চওড়া; অনেক টানের মাথায় আর শেষে নকশার ছোঁয়া থাকে। নামের একটি ব্যাখ্যা: এর নিব বড় তূমার কলমের এক-তৃতীয়াংশ চওড়া।'
      },
      {
        en: 'Used for: mosque domes and friezes, Quran chapter headings (surah titles), certificate headings, and any calligraphy where grandeur is intended. Not used for running Quran text due to its complexity — but surah titles in most mushafs are in Thuluth.',
        bn: 'যেখানে ব্যবহার হয়: মসজিদের গম্বুজ ও দেয়ালের নকশা, কুরআনের সূরার শিরোনাম, সনদের শিরোনাম, আর যেখানেই লেখায় জাঁকজমক আনতে চাওয়া হয়। জটিল বলে কুরআনের মূল পাঠ এতে লেখা হয় না; তবে বেশিরভাগ মুসহাফে সূরার নাম ছুলুছেই লেখা।'
      }
    ]
  },
  {
    name: { en: 'Nastaʿlīq (نَسْتَعْلِيق)', bn: 'নাসতালিক (نَسْتَعْلِيق)' },
    emoji: '🌸',
    notes: [
      {
        en: 'A hybrid style combining Naskh and Taʿlīq (an earlier Persian chancellery script). Developed in Persia in the 8th–9th century AH (14th–15th CE) and became the prestige script for Persian, Urdu, and Pashto writing. Its name reflects its dual parentage: Naskh + Taʿlīq.',
        bn: 'নাসখ আর তালিক (পারস্যের রাজদরবারের পুরোনো একটি লিপি) মিলিয়ে তৈরি মিশ্র ধারা। পারস্যে হিজরি ৮ম–৯ম শতাব্দীতে (খ্রিস্টীয় ১৪শ–১৫শ) এর জন্ম, পরে ফারসি, উর্দু ও পশতু লেখার মর্যাদার লিপি হয়ে ওঠে। নামেই এর দুই উৎসের পরিচয়: নাসখ + তালিক।'
      },
      {
        en: 'Distinguishing traits: strong diagonal slant (letters lean toward the lower-left); thick downstrokes contrast with thin horizontal strokes; bowls (Bā, Nūn) are dramatically deep and tilted; words often appear to cascade diagonally across the line.',
        bn: 'চেনার উপায়: হরফগুলো জোরালোভাবে নিচে-বাঁ দিকে হেলে থাকে; নিচে নামা টান মোটা, আড়াআড়ি টান সরু; বাটিগুলো (বা, নুন) অনেক গভীর ও কাত হয়ে থাকে; শব্দগুলো প্রায়ই লাইনের ওপর দিয়ে কোনাকুনি ধাপে ধাপে নেমে যাচ্ছে বলে মনে হয়।'
      },
      {
        en: 'Quranic usage: Urdu and Persian translations printed beside the Quran are often in Nastaʿlīq, but South Asian mushafs (the "Taj" mushaf) use a heavier Indo-Pak Naskh. The dominant global standard for the Quran remains Naskh/Uthmani. Recognising Nastaʿlīq is important for South Asian and Iranian Muslims.',
        bn: 'কুরআনে ব্যবহার: কুরআনের পাশে ছাপা উর্দু ও ফারসি অনুবাদ প্রায়ই নাসতালিকে থাকে, তবে দক্ষিণ এশিয়ার মুসহাফে ("তাজ" মুসহাফ) ব্যবহার হয় মোটা ইন্দো-পাক নাসখ। সারা বিশ্বে কুরআনের প্রধান লিপি এখনও নাসখ/উসমানি। দক্ষিণ এশিয়া ও ইরানের মুসলমানদের জন্য নাসতালিক চেনা জরুরি।'
      }
    ]
  },
];

/**
 * Tips for writing in the Kūfī calligraphic style.
 * Kūfī is angular and geometric — no curves, all strokes are straight lines at 90° or 45°.
 * Each entry covers one letter or ligature with bilingual guidance.
 */
const HW_KUFI_TIPS = [
  {
    letter: 'ا',
    tipEn: 'Kufi Alif is a perfectly vertical stroke with a flat horizontal serif at the base and a flat cap at the top — no curves at all. Height equals the module unit (rhombus dot) repeated five times. Common mistake: curving the foot, which makes it look like a Naskh Alif.',
    tipBn: 'কুফি আলিফ সম্পূর্ণ উল্লম্ব রেখা — নিচে সমতল অনুভূমিক সেরিফ ও উপরে সমতল ক্যাপ, কোনো বক্ররেখা নেই। উচ্চতা মডিউল একক (রম্বাস বিন্দু) পাঁচ গুণ সমান। ভুল: পাদস্থান বাঁকালে নাসখ আলিফের মতো দেখায়।'
  },
  {
    letter: 'ب',
    tipEn: 'Kufi Ba is a flat horizontal bar on the baseline with strict right angles at both ends — no curved bowl. The bar should be slightly wider than one module unit. Place the sub-dot directly below the centre of the bar.',
    tipBn: 'কুফি বা বেসলাইনে সমতল অনুভূমিক বার, উভয় প্রান্তে সমকোণ — কোনো বাঁকা বাটি নেই। বার একটি মডিউল এককের চেয়ে সামান্য চওড়া হওয়া উচিত। উপ-বিন্দু সরাসরি বারের কেন্দ্রের নিচে।'
  },
  {
    letter: 'ل',
    tipEn: 'Kufi Lam is a tall, perfectly straight vertical stroke with a clear horizontal foot extending slightly left. All joints are 90° — no curves anywhere. Height typically matches the Alif. The foot must not taper or curve.',
    tipBn: 'কুফি লাম লম্বা, সম্পূর্ণ সোজা উল্লম্ব রেখা, সামান্য বামে প্রসারিত স্পষ্ট অনুভূমিক পাদস্থান সহ। সমস্ত কোণ ৯০° — কোথাও বক্ররেখা নেই। উচ্চতা সাধারণত আলিফের সমান। পাদস্থান সরু বা বাঁকা হওয়া উচিত নয়।'
  },
  {
    letter: 'م',
    tipEn: 'Kufi Mim is a closed diamond or compact square on the baseline, built in four straight strokes: top bar (right-to-left), left vertical (down), base bar (left-to-right), right vertical (up to close). No rounded loops at all.',
    tipBn: 'কুফি মিম বেসলাইনে বন্ধ হীরা বা সংহত বর্গ, চারটি সোজা রেখায়: উপরের বার (ডান থেকে বাম), বাম উল্লম্ব (নিচে), ভিত্তি বার (বাম থেকে ডান), ডান উল্লম্ব (বন্ধ করতে উপরে)। কোনো গোলাকার লুপ নেই।'
  },
  {
    letter: 'ن',
    tipEn: 'Kufi Nun is a flat horizontal bar on the baseline — like Ba but slightly shorter. It does not descend below the baseline as in Naskh. Its single dot sits above the centre of the bar. Keep the bar perfectly level.',
    tipBn: 'কুফি নুন বেসলাইনে সমতল অনুভূমিক বার — বার মতো কিন্তু সামান্য ছোট। নাসখের মতো বেসলাইনের নিচে নামে না। এর একটি বিন্দু বারের কেন্দ্রের উপরে। বার সম্পূর্ণ সমতল রাখুন।'
  },
  {
    letter: 'ع',
    tipEn: 'Kufi Ayn is an angular bracket or sharp V-shape — not a curved eye as in Naskh. The opening faces right; both arms meet at a pointed apex. All joints are 90° or 45°. The medial Kufi form is a simple right-angle connector.',
    tipBn: 'কুফি আইন কোণাকুণি বন্ধনী বা তীক্ষ্ণ V-আকৃতি — নাসখের মতো বাঁকা চোখ নয়। খোলা মুখ ডানদিকে, উভয় বাহু একটি তীক্ষ্ণ শীর্ষে মেলে। সমস্ত কোণ ৯০° বা ৪৫°। মধ্যবর্তী কুফি রূপ একটি সরল সমকোণ সংযোগকারী।'
  },
  {
    letter: 'ص',
    tipEn: 'Kufi Sad is a closed rectangle, built entirely with straight horizontal and vertical lines. The right-side entry is a short vertical tab — not a curve. The exit tail is a short horizontal bar extending left at baseline level.',
    tipBn: 'কুফি সোয়াদ বন্ধ আয়তক্ষেত্র, সম্পূর্ণ সোজা অনুভূমিক ও উল্লম্ব রেখায়। ডান প্রবেশ একটি ছোট উল্লম্ব ট্যাব — বক্ররেখা নয়। বের হওয়ার লেজ বেসলাইন স্তরে বামে প্রসারিত ছোট অনুভূমিক বার।'
  },
  {
    letter: 'لا',
    tipEn: 'The Kufi Lam-Alif ligature forms a symmetrical open triangle. Both strokes rise from a shared baseline point: Lam rises straight up and Alif leans slightly outward. Both arms must be equal in length. No cross-bar — it is an open V.',
    tipBn: 'কুফি লাম-আলিফ লিগেচার প্রতিসমতিক খোলা ত্রিভুজ তৈরি করে। উভয় রেখা একটি ভাগ করা বেসলাইন বিন্দু থেকে ওঠে: লাম সরাসরি উপরে, আলিফ সামান্য বাইরে হেলে। উভয় বাহু দৈর্ঘ্যে সমান। কোনো ক্রস-বার নেই — এটি একটি খোলা V।'
  },
  {
    letter: 'ك',
    tipEn: 'Kufi Kaf is a stepped double-bar form: a wide horizontal base topped by a shorter bar at mid-height, joined on the right by a right-angle vertical. The inner diagonal mark of Naskh Kaf does not appear in Kufi — only the two stepped bars.',
    tipBn: 'কুফি কাফ ধাপযুক্ত দ্বি-বার আকৃতি: মধ্য-উচ্চতায় ছোট বার সহ প্রশস্ত অনুভূমিক ভিত্তি, ডান দিকে সমকোণ উল্লম্ব দ্বারা সংযুক্ত। নাসখ কাফের ভেতরের তির্যক চিহ্ন কুফিতে দেখা যায় না — কেবল দুটি ধাপযুক্ত বার।'
  },
  {
    letter: 'ه',
    tipEn: 'Kufi Ha in isolated form is a small closed square above the baseline, drawn in four straight strokes. No rounded loops. In connected forms it reduces to a small square tab attached to the connecting line. Keep all four sides equal in length.',
    tipBn: 'বিচ্ছিন্ন রূপে কুফি হা বেসলাইনের উপরে ছোট বন্ধ বর্গ, চারটি সোজা রেখায়। কোনো গোলাকার লুপ নেই। সংযুক্ত রূপে এটি সংযোগকারী রেখার সাথে সংযুক্ত ছোট বর্গাকার ট্যাবে পরিণত হয়। চারটি বাহু সমান রাখুন।'
  },
];

/**
 * Arabic-Indic numerals (٠–٩) as used in Quran verse markers and traditional Arabic texts.
 * Each entry includes the digit (0–9), the Arabic-Indic glyph, bilingual names, and a writing tip.
 */
const HW_NUMBERS = [
  {
    digit: 0,
    arabicNumeral: '٠',
    name_en: 'Sifr (zero)',
    name_bn: 'সিফর (শূন্য)',
    tip_en: 'A small dot or tiny diamond, much smaller than the Western zero. It must be visibly smaller than the surrounding letter-height. Common mistake: drawing it as a ring, which is the Arabic five (٥).',
    tip_bn: 'ছোট বিন্দু বা ক্ষুদ্র হীরা, পশ্চিমা শূন্যের চেয়ে অনেক ছোট। পার্শ্ববর্তী অক্ষরের উচ্চতার চেয়ে ছোট হতে হবে। ভুল: গোল রিং আঁকা, যা আরবি পাঁচ (٥)।'
  },
  {
    digit: 1,
    arabicNumeral: '١',
    name_en: 'Wahid (one)',
    name_bn: 'ওয়াহিদ (এক)',
    tip_en: 'A short vertical stroke, similar to Alif but much smaller and without serifs. Keep it straight and compact — it should be clearly shorter than any Alif beside it.',
    tip_bn: 'ছোট উল্লম্ব রেখা, আলিফের মতো কিন্তু অনেক ছোট ও সেরিফ ছাড়া। সোজা ও সংহত রাখুন — পাশের যেকোনো আলিফের চেয়ে স্পষ্টভাবে ছোট হওয়া উচিত।'
  },
  {
    digit: 2,
    arabicNumeral: '٢',
    name_en: 'Ithnan (two)',
    name_bn: 'ইছনান (দুই)',
    tip_en: 'A vertical stem with one small hook at the top — no base bar. In Quran printing it often appears slightly stylised. Keep the hook small and the stem straight.',
    tip_bn: 'উপরে একটি ছোট হুকসহ খাড়া দণ্ড — নিচে কোনো বার নেই। কুরআন মুদ্রণে প্রায়ই সামান্য শৈলীযুক্ত দেখায়। হুক ছোট ও দণ্ড সোজা রাখুন।'
  },
  {
    digit: 3,
    arabicNumeral: '٣',
    name_en: 'Thalatha (three)',
    name_bn: 'ছালাছা (তিন)',
    tip_en: 'A vertical stem with two small teeth at the top — one more than ٢. Common mistake: making the teeth different sizes or tilting the stem; the teeth must be even.',
    tip_bn: 'উপরে দুটি ছোট দাঁতসহ খাড়া দণ্ড — ٢-এর চেয়ে একটি বেশি। ভুল: দাঁত অসমান করা বা দণ্ড কাত করা; দাঁতগুলি সমান হতে হবে।'
  },
  {
    digit: 4,
    arabicNumeral: '٤',
    name_en: 'Arba\u02BFa (four)',
    name_bn: 'আরবাআ (চার)',
    tip_en: 'Resembles a backwards-3 or an epsilon (ε): a concave arc opening right, with a small horizontal notch at the midpoint. In Quran verse markers it is often stylised — keep the two arcs equal in size.',
    tip_bn: 'উল্টো-৩ বা এপসিলনের (ε) মতো: ডান দিকে খোলা অবতল চাপ, মধ্যবিন্দুতে ছোট অনুভূমিক খাঁজ সহ। কুরআন আয়াত চিহ্নে প্রায়ই শৈলীযুক্ত — দুটি চাপ সমান আকারের রাখুন।'
  },
  {
    digit: 5,
    arabicNumeral: '٥',
    name_en: 'Khamsa (five)',
    name_bn: 'খামসা (পাঁচ)',
    tip_en: 'A small circle or teardrop, sometimes with a slight point. The circle must be clean and fully closed. Its hollow round body is what tells it apart from zero (a dot) — do not shrink it.',
    tip_bn: 'ছোট বৃত্ত বা অশ্রু আকৃতি, কখনো সামান্য সূচালো। বৃত্ত পরিষ্কার ও সম্পূর্ণ বন্ধ হতে হবে। এর ফাঁপা গোল শরীরই শূন্য (একটি বিন্দু) থেকে পার্থক্য — একে ছোট করবেন না।'
  },
  {
    digit: 6,
    arabicNumeral: '٦',
    name_en: 'Sitta (six)',
    name_bn: 'সিত্তা (ছয়)',
    tip_en: 'A straight stem with a short stroke at its top — not a curved head like Western 6. Draw the top stroke first, then bring the stem straight down to the baseline.',
    tip_bn: 'উপরে ছোট টানসহ সোজা দণ্ড — পশ্চিমা ৬-এর মতো বাঁকা মাথা নয়। প্রথমে উপরের টান আঁকুন, তারপর দণ্ডটি সোজা বেসলাইনে নামান।'
  },
  {
    digit: 7,
    arabicNumeral: '٧',
    name_en: 'Sab\u02BFa (seven)',
    name_bn: 'সাব্আ (সাত)',
    tip_en: 'A plain V-shape — no bar across the top. Draw it in one stroke: down one arm to the point, then up the other. Keep the V balanced, with both arms the same height.',
    tip_bn: 'সাধারণ V-আকৃতি — উপরে কোনো বার নেই। একটি টানে আঁকুন: এক বাহু বেয়ে নিচের বিন্দুতে নেমে অন্য বাহু বেয়ে উপরে। V সুষম রাখুন, দুই বাহু সমান উঁচু।'
  },
  {
    digit: 8,
    arabicNumeral: '٨',
    name_en: 'Thamaniya (eight)',
    name_bn: 'ছামানিয়া (আট)',
    tip_en: 'An upside-down V (Λ) or downward-opening arc — not two loops like Western 8. Draw a smooth arch like an upturned cup. Both lower endpoints must be at the same height.',
    tip_bn: 'উল্টো V (Λ) বা নিচের দিকে খোলা চাপ — পশ্চিমা ৮-এর মতো দুটি লুপ নয়। উপুড় করা কাপের মতো মসৃণ খিলান আঁকুন। নিচের দুটি শেষ বিন্দু একই উচ্চতায় হতে হবে।'
  },
  {
    digit: 9,
    arabicNumeral: '٩',
    name_en: 'Tis\u02BFa (nine)',
    name_bn: 'তিস্আ (নয়)',
    tip_en: 'Shaped much like a Western 9: a small round head at the top, with a stem dropping down to the baseline. The head must be fully closed — an open head makes it hard to read.',
    tip_bn: 'অনেকটা পশ্চিমা ৯-এর মতো: উপরে ছোট গোল মাথা, নিচে বেসলাইন পর্যন্ত নামা দণ্ড সহ। মাথা সম্পূর্ণ বন্ধ হতে হবে — খোলা মাথা পড়া কঠিন করে।'
  },
];

/**
 * Common Quranic words for handwriting practice.
 * Each entry includes the Arabic word, transliteration, bilingual meaning,
 * an array of constituent letter names, and bilingual stroke tips.
 */
const HW_COMMON_WORDS = [
  {
    word: '\u0627\u0644\u0644\u0647',
    translit: 'All\u0101h',
    meaningEn: 'God; the one God',
    meaningBn: 'আল্লাহ; একমাত্র ইলাহ',
    letters: ['Alif', 'Lam', 'Lam', 'Ha'],
    tipEn: 'The divine name contains a unique double-Lam cluster before the final Ha. Practice the two Lams as one continuous upward movement. The final Ha is small and sits tightly after the second Lam. The small upright stroke over the shadda is a dagger alif (standing fatḥa) — write it as a short vertical stroke above the second Lam.',
    tipBn: 'আল্লাহ নামে শেষের হা-এর আগে দুই লামের একটি বিশেষ জোড়া আছে। দুই লাম না থেমে এক টানে ওপরের দিকে লেখার অনুশীলন করুন। শেষের হা ছোট, দ্বিতীয় লামের ঠিক পরে গা ঘেঁষে বসে। তাশদীদের ওপরের ছোট খাড়া দাগটি হলো খাড়া আলিফ (খাড়া যবর); দ্বিতীয় লামের ওপরে ছোট খাড়া দাগ হিসেবে লিখুন।'
  },
  {
    word: '\u0631\u064e\u0628\u0651',
    translit: 'Rabb',
    meaningEn: 'Lord; Sustainer',
    meaningBn: 'রব; প্রতিপালক',
    letters: ['Ra', 'Ba (shadda)'],
    tipEn: 'A very short word: Ra (non-connector) followed by Ba with shadda. Because Ra does not connect forward, Ba begins a fresh stroke. Write the Ba bowl, add the sub-dot, then place the shadda above the bowl. Do not let the gap between Ra and Ba become too wide.',
    tipBn: 'খুব ছোট শব্দ: রা (পরের হরফের সাথে জোড়া লাগে না), তারপর তাশদীদসহ বা। রা সামনে জোড়া লাগে না বলে বা নতুন টানে শুরু হয়। বা-এর বাটি লিখুন, নিচে নুকতা দিন, তারপর বাটির উপরে তাশদীদ। রা আর বা-এর মাঝের ফাঁক যেন বেশি বড় না হয়।'
  },
  {
    word: '\u0643\u0650\u062a\u064e\u0627\u0628',
    translit: 'Kit\u0101b',
    meaningEn: 'Book; scripture',
    meaningBn: 'কিতাব; গ্রন্থ',
    letters: ['Kaf', 'Ta', 'Alif', 'Ba'],
    tipEn: 'Initial Kaf has no inner mark: it is a tall upright with a slanted top stroke — beginners often omit that top stroke. Ta body is identical to Ba; distinguish them by the two dots above (Ta) versus one dot below (Ba). The long Alif in the middle is a non-connector. The last Ba stands alone after the Alif and closes with its sub-dot.',
    tipBn: 'শুরুর কাফে ভেতরের চিহ্ন থাকে না: লম্বা খাড়া দাগ, মাথায় একটা তেরছা টান। নতুনরা প্রায়ই এই ওপরের টানটা বাদ দেয়। তা-এর শরীর হুবহু বা-এর মতো; পার্থক্য শুধু নুকতায়: তা-এর উপরে দুটি, বা-এর নিচে একটি। মাঝের লম্বা আলিফ পরের হরফের সাথে জোড়া লাগে না। শেষের বা আলিফের পরে আলাদা বসে, নিচের নুকতা দিয়ে শেষ হয়।'
  },
  {
    word: '\u0631\u064e\u0633\u064f\u0648\u0644',
    translit: 'Ras\u016Bl',
    meaningEn: 'Messenger; prophet sent with scripture',
    meaningBn: 'রাসুল; কিতাবসহ প্রেরিত নবি',
    letters: ['Ra', 'Sin', 'Waw', 'Lam'],
    tipEn: 'The word has two non-connectors (Ra and Waw), breaking it into three segments: Ra | Sin-Waw | Lam. Pay attention to Sin\'s three even teeth before Waw. Because Waw also does not connect forward, the last Lam is written in its isolated form.',
    tipBn: 'শব্দটিতে দুটি হরফ (রা ও ওয়াও) পরের হরফের সাথে জোড়া লাগে না, তাই শব্দটি তিন টুকরায় ভাগ হয়: রা | সিন-ওয়াও | লাম। ওয়াওয়ের আগে সিনের তিনটি সমান দাঁতে খেয়াল রাখুন। ওয়াও সামনে জোড়া লাগে না বলে শেষের লাম একক রূপে লেখা হয়।'
  },
  {
    word: '\u0646\u064e\u0628\u0650\u064a\u0651',
    translit: 'Nab\u012By\u0304',
    meaningEn: 'Prophet',
    meaningBn: 'নবি; আল্লাহর বার্তাবাহক',
    letters: ['Nun', 'Ba', 'Ya (shadda)'],
    tipEn: 'Initial Nun is a short tooth with one dot above. Ba in medial position has no descending tail. Final Ya carries a shadda — write the Ya bowl with two dots below, then add the shadda above the bowl. The shadda confirms the geminated yy sound.',
    tipBn: 'শুরুর নুন একটি ছোট দাঁত, উপরে একটি নুকতা। মাঝের বা-এর নামা লেজ নেই। শেষের ইয়া-তে তাশদীদ: নিচে দুটি নুকতাসহ ইয়ার বাটি লিখুন, তারপর বাটির উপরে তাশদীদ দিন। তাশদীদ বলে দেয়, ইয়া দ্বিগুণ করে পড়তে হবে।'
  },
  {
    word: '\u0645\u064f\u0624\u0645\u0650\u0646',
    translit: 'Mu\u02BEmin',
    meaningEn: 'Believer; one who has faith',
    meaningBn: 'মুমিন; ইমানদার',
    letters: ['Mim', 'Hamza on Waw', 'Mim', 'Nun'],
    tipEn: 'The hamza rests on a Waw seat (\u0624) — draw the small Waw body first, then add the hamza above it. The second Mim, after the non-connecting Waw, is in initial position with no tail. Final Nun bowl dips below the baseline. Both Mims must look identical: compact closed knots.',
    tipBn: 'হামযা বসে ওয়াওয়ের ওপর (ؤ): আগে ওয়াওয়ের ছোট শরীর লিখুন, তারপর উপরে হামযা দিন। ওয়াও পরের হরফের সাথে জোড়া লাগে না, তাই দ্বিতীয় মিম শুরুর রূপে বসে, কোনো লেজ নেই। শেষের নুনের বাটি লাইনের নিচে নামে। দুটি মিম একই রকম দেখাবে: ছোট, বন্ধ গোল মাথা।'
  },
  {
    word: '\u0645\u064f\u0633\u0652\u0644\u0650\u0645',
    translit: 'Muslim',
    meaningEn: 'Muslim; one who submits to God',
    meaningBn: 'মুসলিম; আল্লাহর কাছে আত্মসমর্পণকারী',
    letters: ['Mim', 'Sin', 'Lam', 'Mim'],
    tipEn: 'Sin in medial position has three small teeth connecting directly to Lam. Keep the teeth even — do not let them blur into a single horizontal bar. Lam connects to the final Mim whose tail descends below the baseline.',
    tipBn: 'মাঝের সিনের তিনটি ছোট দাঁত সরাসরি লামের সাথে জোড়া লাগে। দাঁতগুলো সমান রাখুন; মিলেমিশে যেন একটা সোজা দাগ না হয়ে যায়। লাম জোড়া লাগে শেষের মিমের সাথে, যার লেজ লাইনের নিচে নামে।'
  },
  {
    word: '\u0635\u064e\u0644\u064e\u0627\u0629',
    translit: '\u1E62al\u0101t',
    meaningEn: 'Prayer; the ritual salah',
    meaningBn: 'সালাত; নামাজ',
    letters: ['Sad', 'Lam', 'Alif', 'Ta marbuta'],
    tipEn: 'Sad opens with its closed oval. Lam rises tall from the Sad exit. The long Alif is a non-connector. The Ta marbuta (\u0629) looks like Ha with two dots above — draw the Ha-shape first, then add both dots.',
    tipBn: 'শুরুতে সোয়াদের বন্ধ গোল অংশ। সোয়াদ থেকে বেরিয়ে লাম লম্বা হয়ে ওঠে। লম্বা আলিফ পরের হরফের সাথে জোড়া লাগে না। তা-মারবুতা (ة) দেখতে উপরে দুই নুকতাওয়ালা হা-এর মতো: আগে হা-এর আকৃতি লিখুন, তারপর দুটি নুকতাই দিন।'
  },
  {
    word: '\u0635\u064e\u0648\u0652\u0645',
    translit: '\u1E62awm',
    meaningEn: 'Fasting; the act of sawm',
    meaningBn: 'সওম; রোজা',
    letters: ['Sad', 'Waw', 'Mim'],
    tipEn: 'Sad connects to Waw, which is a non-connector. Because Waw does not connect forward, the final Mim begins as an isolated form. The final Mim tail descends below the baseline. Practice the Sad-to-Waw connection as a single fluid movement.',
    tipBn: 'সোয়াদ জোড়া লাগে ওয়াওয়ের সাথে, আর ওয়াও পরের হরফের সাথে জোড়া লাগে না। তাই শেষের মিম একক রূপে শুরু হয়। শেষের মিমের লেজ লাইনের নিচে নামে। সোয়াদ থেকে ওয়াও পর্যন্ত জোড়াটি না থেমে এক টানে লেখার অনুশীলন করুন।'
  },
  {
    word: '\u0632\u064e\u0643\u064e\u0627\u0629',
    translit: 'Zak\u0101t',
    meaningEn: 'Almsgiving; obligatory charity',
    meaningBn: 'যাকাত; ফরজ দান',
    letters: ['Zay', 'Kaf', 'Alif', 'Ta marbuta'],
    tipEn: 'Zay is a non-connector, so Kaf begins fresh as an initial form. Initial Kaf has no inner mark; its slanted top stroke is often omitted by beginners — include it every time. Kaf connects to the long Alif (non-connector). Ta marbuta closes the word.',
    tipBn: 'যা (ز) পরের হরফের সাথে জোড়া লাগে না, তাই কাফ নতুন করে শুরুর রূপে লেখা হয়। শুরুর কাফে ভেতরের চিহ্ন থাকে না; এর ওপরের তেরছা টান নতুনরা প্রায়ই বাদ দেয়, প্রতিবার দেবেন। কাফ জোড়া লাগে লম্বা আলিফের সাথে (আলিফ পরের হরফের সাথে জোড়া লাগে না)। শেষে তা-মারবুতা।'
  },
  {
    word: '\u062d\u064e\u062c\u0651',
    translit: '\u1E24ajj',
    meaningEn: 'Pilgrimage; the Hajj',
    meaningBn: 'হজ; মক্কায় হজের সফর',
    letters: ['Ha', 'Jim (shadda)'],
    tipEn: 'Only two letters. Initial Ha sits on the baseline with no dot — adding a dot would make it Jim or Kha. Jim carries a shadda and one dot below the hook: write the hook body first, add the dot inside, then the shadda above the hook opening.',
    tipBn: 'মাত্র দুটি হরফ। শুরুর হা লাইনের ওপরেই বসে, কোনো নুকতা নেই; নুকতা দিলে জিম বা খা হয়ে যাবে। জিমে তাশদীদ, আর বাঁকের নিচে একটি নুকতা: আগে বাঁকানো শরীর লিখুন, ভেতরে নুকতা দিন, তারপর বাঁকের মুখের উপরে তাশদীদ।'
  },
  {
    word: '\u0635\u064e\u0628\u0652\u0631',
    translit: '\u1E62abr',
    meaningEn: 'Patience; steadfast endurance',
    meaningBn: 'সবর; ধৈর্য',
    letters: ['Sad', 'Ba', 'Ra'],
    tipEn: 'Sad connects to Ba (medial), which connects to the non-connector Ra. Ra ends the word with its downward curve below the baseline. The Ba carries a sukun above — draw the tooth and sub-dot, then place the sukun above the tooth confirming no vowel follows Ba.',
    tipBn: 'সোয়াদ জোড়া লাগে মাঝের বা-এর সাথে, বা জোড়া লাগে রা-এর সাথে (রা পরের হরফের সাথে জোড়া লাগে না)। রা লাইনের নিচে নামা বাঁক দিয়ে শব্দ শেষ করে। বা-তে সাকিন: দাঁত আর নিচের নুকতা লিখুন, তারপর দাঁতের উপরে সাকিন দিন; এতে বোঝা যায় বা-তে কোনো হরকত নেই।'
  },
  {
    word: '\u062a\u064e\u0642\u0652\u0648\u064e\u0649',
    translit: 'Taqw\u0101',
    meaningEn: 'God-consciousness; piety',
    meaningBn: 'তাকওয়া; আল্লাহভীতি',
    letters: ['Ta', 'Qaf', 'Waw', 'Alif maqsura'],
    tipEn: 'Ta (two dots above) connects to Qaf. Medial Qaf is a small loop on the baseline (no descending bowl) with two dots above and a forward-connecting exit. Waw is a non-connector. The final Alif maqsura (\u0649) looks like Ya without dots — do not add dots or it becomes Ya.',
    tipBn: 'তা (উপরে দুটি নুকতা) জোড়া লাগে ক্বাফের সাথে। মাঝের ক্বাফ লাইনের ওপর ছোট ফাঁস (নিচে নামা বাটি নেই), উপরে দুটি নুকতা, সামনে জোড়ার টান। ওয়াও পরের হরফের সাথে জোড়া লাগে না। শেষের আলিফ মাকসুরা (ى) দেখতে নুকতা ছাড়া ইয়ার মতো; নুকতা দেবেন না, দিলে ইয়া হয়ে যাবে।'
  },
  {
    word: '\u0625\u064a\u0645\u064e\u0627\u0646',
    translit: '\u012Am\u0101n',
    meaningEn: 'Faith; sincere belief',
    meaningBn: 'ইমান; বিশ্বাস',
    letters: ['Alif with hamza below', 'Ya', 'Mim', 'Alif', 'Nun'],
    tipEn: 'Opens with Alif + hamza below (\u0625): write the Alif stroke, add the hamza beneath it, then the kasra under the hamza. The Ya, after the non-connecting Alif, is in initial position: a short tooth with 2 dots below. Mim connects to the long Alif (non-connector). Final Nun closes with its bowl below the baseline.',
    tipBn: 'শুরুতে আলিফ, নিচে হামযা (إ): আলিফের দাগ টানুন, নিচে হামযা দিন, তারপর হামযার নিচে যের। আলিফ পরের হরফের সাথে জোড়া লাগে না, তাই ইয়া শুরুর রূপে বসে: ছোট দাঁত, নিচে দুটি নুকতা। মিম জোড়া লাগে লম্বা আলিফের সাথে (আলিফ সামনে জোড়া দেয় না)। শেষের নুন লাইনের নিচে নামা বাটি দিয়ে শেষ হয়।'
  },
  {
    word: '\u0639\u0650\u0644\u0652\u0645',
    translit: '\u02BFilm',
    meaningEn: 'Knowledge; learning',
    meaningBn: 'ইলম; জ্ঞান',
    letters: ['Ayn', 'Lam', 'Mim'],
    tipEn: 'Opens with Ayn in initial position — the eye-opening faces right, wide and clear. The kasra below Ayn confirms the /i/ vowel. Lam rises tall from the medial exit. Final Mim tail descends below the baseline. This three-letter root is one of the most important in Quranic vocabulary.',
    tipBn: 'শুরুতে আইন, শুরুর রূপে: চোখের মুখ ডান দিকে খোলা, চওড়া ও স্পষ্ট। আইনের নিচের যের বলে দেয়, এখানে /ই/ ধ্বনি। আইনের জোড়ার টান থেকে লাম লম্বা হয়ে ওঠে। শেষের মিমের লেজ লাইনের নিচে নামে। তিন হরফের এই ধাতু কুরআনের সবচেয়ে গুরুত্বপূর্ণ ধাতুগুলোর একটি।'
  },
  {
    word: '\u0631\u064e\u062d\u0652\u0645\u064e\u0629',
    translit: 'Ra\u1E25ma',
    meaningEn: 'Mercy; compassion',
    meaningBn: 'রহমত; দয়া',
    letters: ['Ra', 'Ha', 'Mim', 'Ta marbuta'],
    tipEn: 'Ra (non-connector) is followed by Ha — because Ra does not connect forward, Ha begins as an initial form. The initial Ha stays on the baseline, with no dot. Mim connects to the Ta marbuta. The two dots of Ta marbuta must sit above the Ha-shaped body, not inside it.',
    tipBn: 'রা (পরের হরফের সাথে জোড়া লাগে না), তারপর হা। রা সামনে জোড়া লাগে না বলে হা শুরুর রূপে লেখা হয়। শুরুর হা লাইনের ওপরেই থাকে, কোনো নুকতা নেই। মিম জোড়া লাগে তা-মারবুতার সাথে। তা-মারবুতার দুটি নুকতা হা-আকৃতির শরীরের উপরে বসবে, ভেতরে নয়।'
  },
  {
    word: '\u0642\u064f\u0631\u0652\u0622\u0646',
    translit: 'Qur\u02BE\u0101n',
    meaningEn: 'The Quran; the recitation',
    meaningBn: 'কুরআন; আল্লাহর বাণী',
    letters: ['Qaf', 'Ra', 'Alif with maddah', 'Nun'],
    tipEn: 'Initial Qaf is a small loop on the baseline with two dots above. Ra (non-connector) follows with a sukun. The Alif with maddah (\u0622) indicates the long /\u0101/ sound after hamza — draw the Alif, then add the wavy maddah stroke above it. Final Nun closes with its bowl below the baseline.',
    tipBn: 'শুরুর ক্বাফ লাইনের ওপর ছোট ফাঁস, উপরে দুটি নুকতা। এরপর সাকিনসহ রা (পরের হরফের সাথে জোড়া লাগে না)। মাদ্দ-চিহ্নসহ আলিফ (آ) বোঝায় হামযার পরে লম্বা /আ/ ধ্বনি: আগে আলিফ লিখুন, তারপর উপরে ঢেউখেলানো মাদ্দ-চিহ্ন দিন। শেষের নুন লাইনের নিচে নামা বাটি দিয়ে শেষ হয়।'
  },
  {
    word: '\u0630\u0650\u0643\u0652\u0631',
    translit: 'Dhikr',
    meaningEn: 'Remembrance of God',
    meaningBn: 'যিকর; আল্লাহর স্মরণ',
    letters: ['Dhal', 'Kaf', 'Ra'],
    tipEn: 'Dhal (non-connector) is the same wedge as Dal but with one dot directly above. Because Dhal does not connect forward, Kaf begins as an initial form. Kaf connects to the non-connector Ra. Only Dhal breaks the word, so it is written in two pieces: Dhal | Kaf-Ra.',
    tipBn: 'যাল (পরের হরফের সাথে জোড়া লাগে না) দেখতে দালের মতোই কোণাচে, শুধু ঠিক উপরে একটি নুকতা। যাল সামনে জোড়া লাগে না বলে কাফ শুরুর রূপে লেখা হয়। কাফ জোড়া লাগে রা-এর সাথে (রাও সামনে জোড়া দেয় না)। শব্দটি শুধু যালের পরে ভাঙে, তাই দুই টুকরায় লেখা হয়: যাল | কাফ-রা।'
  },
  {
    word: '\u062f\u064f\u0639\u064e\u0627\u0621',
    translit: 'Du\u02BF\u0101\u02BE',
    meaningEn: 'Supplication; personal prayer',
    meaningBn: 'দুআ; মোনাজাত',
    letters: ['Dal', 'Ayn', 'Alif', 'Hamza'],
    tipEn: 'Dal (non-connector) is followed by Ayn in initial form — wide eye-opening facing right. The long Alif (non-connector) follows. The final standalone hamza (\u0621) is a small curved mark on the baseline — do not confuse it with Ayn or Waw. The word has two non-connectors, producing three stroke-groups.',
    tipBn: 'দাল (পরের হরফের সাথে জোড়া লাগে না), তারপর শুরুর রূপের আইন: চোখের মুখ ডান দিকে চওড়া খোলা। এরপর লম্বা আলিফ, এটিও সামনে জোড়া দেয় না। শেষের একা হামযা (ء) লাইনের ওপর ছোট বাঁকা চিহ্ন; একে আইন বা ওয়াওয়ের সাথে গুলিয়ে ফেলবেন না। জোড়া না-লাগা দুটি হরফের কারণে শব্দটি তিন টুকরায় লেখা হয়।'
  },
  {
    word: '\u0623\u064e\u062f\u064e\u0628',
    translit: '\u02BEAdab',
    meaningEn: 'Etiquette; proper conduct',
    meaningBn: 'আদব; শিষ্টাচার',
    letters: ['Alif with hamza above', 'Dal', 'Ba'],
    tipEn: 'Alif carries a hamza above (\u0623): write the Alif stroke, then add the hamza at the very top — keep it small and clearly above the Alif tip. Dal (non-connector) follows. Because Dal does not connect forward, Ba stands alone in its isolated form; its single dot below closes the word.',
    tipBn: 'আলিফের উপরে হামযা (أ): আলিফের দাগ টানুন, তারপর একদম মাথায় হামযা দিন। হামযা ছোট রাখুন, আলিফের ডগার স্পষ্টভাবে উপরে। এরপর দাল, যা পরের হরফের সাথে জোড়া লাগে না। তাই বা একক রূপে আলাদা বসে; নিচের একটি নুকতা দিয়ে শব্দ শেষ হয়।'
  },
  {
    word: '\u0646\u064f\u0648\u0631',
    translit: 'N\u016Br',
    meaningEn: 'Light; divine light',
    meaningBn: 'নুর; আলো',
    letters: ['Nun', 'Waw', 'Ra'],
    tipEn: 'Initial Nun is a short tooth with one dot above, joined to the Waw. Waw (non-connector) follows — a small rounded head with a descending tail. Ra (non-connector) ends the word. Because Waw does not connect forward, the word is written in two pieces: Nun-Waw | Ra.',
    tipBn: 'শুরুর নুন একটি ছোট দাঁত, উপরে একটি নুকতা, ওয়াওয়ের সাথে জোড়া। এরপর ওয়াও (পরের হরফের সাথে জোড়া লাগে না): ছোট গোল মাথা, নিচে নামা লেজ। রা (এটিও সামনে জোড়া দেয় না) দিয়ে শব্দ শেষ। ওয়াও সামনে জোড়া লাগে না বলে শব্দটি দুই টুকরায় লেখা হয়: নুন-ওয়াও | রা।'
  },
  {
    word: '\u0647\u064f\u062f\u064e\u0649',
    translit: 'Hud\u0101',
    meaningEn: 'Guidance; divine guidance',
    meaningBn: 'হুদা; সঠিক পথ দেখানো',
    letters: ['Ha', 'Dal', 'Alif maqsura'],
    tipEn: 'Ha in initial position has a forward-connecting exit stroke. Dal (non-connector) follows. The final Alif maqsura (\u0649) looks exactly like Ya without dots — write the Ya-shaped body but add no dots at all. Adding dots incorrectly produces Ya.',
    tipBn: 'শুরুর হা থেকে সামনে জোড়ার টান বের হয়। এরপর দাল (পরের হরফের সাথে জোড়া লাগে না)। শেষের আলিফ মাকসুরা (ى) দেখতে হুবহু নুকতা ছাড়া ইয়ার মতো: ইয়ার আকৃতির শরীর লিখুন, কিন্তু একটি নুকতাও দেবেন না। ভুল করে নুকতা দিলে ইয়া হয়ে যায়।'
  },
  {
    word: '\u0634\u064f\u0643\u0652\u0631',
    translit: 'Shukr',
    meaningEn: 'Gratitude; thankfulness',
    meaningBn: 'শুকর; কৃতজ্ঞতা',
    letters: ['Shin', 'Kaf', 'Ra'],
    tipEn: 'Shin has the same three-tooth body as Sin but with three dots above in a triangular formation — two on the lower row, one at the apex. In initial position the teeth connect forward to Kaf. Kaf connects to the non-connector Ra.',
    tipBn: 'শিনের শরীর সিনের মতোই তিন দাঁতের, তবে উপরে তিনকোনা করে তিনটি নুকতা: নিচের সারিতে দুটি, মাথায় একটি। শুরুর রূপে দাঁতগুলো সামনে কাফের সাথে জোড়া লাগে। কাফ জোড়া লাগে রা-এর সাথে, আর রা পরের হরফের সাথে জোড়া লাগে না।'
  },
  {
    word: '\u0639\u0650\u0628\u064e\u0627\u062f\u064e\u0629',
    translit: '\u02BFIb\u0101da',
    meaningEn: 'Worship; servitude to God',
    meaningBn: 'ইবাদাত; আল্লাহর বন্দেগি',
    letters: ['Ayn', 'Ba', 'Alif', 'Dal', 'Ta marbuta'],
    tipEn: 'Ayn (initial) connects to Ba (medial). Ba connects to the long Alif (non-connector), which then splits the word. Dal (non-connector) stands alone, and an isolated Ta marbuta closes. With two non-connectors, the word breaks into three segments: Ayn-Ba-Alif | Dal | Ta marbuta.',
    tipBn: 'শুরুর আইন জোড়া লাগে মাঝের বা-এর সাথে। বা জোড়া লাগে লম্বা আলিফের সাথে; আলিফ পরের হরফের সাথে জোড়া লাগে না, তাই এখানে শব্দ ভাঙে। দালও সামনে জোড়া দেয় না, তাই সে আলাদা বসে; শেষে একক তা-মারবুতা। জোড়া না-লাগা দুটি হরফের কারণে শব্দটি তিন টুকরা: আইন-বা-আলিফ | দাল | তা-মারবুতা।'
  },
  {
    word: '\u0625\u0650\u0633\u0652\u0644\u064e\u0627\u0645',
    translit: 'Isl\u0101m',
    meaningEn: 'Islam; submission to God',
    meaningBn: 'ইসলাম; আল্লাহর কাছে আত্মসমর্পণের ধর্ম',
    letters: ['Alif with hamza below', 'Sin', 'Lam', 'Alif', 'Mim'],
    tipEn: 'Opens with Alif + hamza below (\u0625) + kasra. Sin in initial position has three even teeth connecting forward to Lam. Lam connects to the long Alif (non-connector). The last Mim stands alone after the Alif, its tail descending below the baseline. Both Alifs in the word must be perfectly vertical.',
    tipBn: 'শুরুতে আলিফ, নিচে হামযা (إ) ও যের। শুরুর রূপের সিনের তিনটি সমান দাঁত সামনে লামের সাথে জোড়া লাগে। লাম জোড়া লাগে লম্বা আলিফের সাথে (আলিফ পরের হরফের সাথে জোড়া লাগে না)। শেষের মিম আলিফের পরে আলাদা বসে, লেজ লাইনের নিচে নামে। শব্দের দুটি আলিফই একদম খাড়া হতে হবে।'
  },
];

/**
 * Common mistakes children make when learning to write Arabic letters.
 * Each entry describes the mistake and its correction, bilingually.
 */
const HW_MISTAKES_KIDS = [
  {
    mistakeEn: 'Writing from left to right instead of right to left.',
    mistakeBn: 'ডান থেকে বাঁয়ে না লিখে বাঁ থেকে ডানে লেখা।',
    correctEn: 'Arabic is always written from right to left. Start at the right edge of the line and move leftward. Use pre-ruled practice sheets with the right margin clearly marked until the direction feels natural.',
    correctBn: 'আরবি সবসময় ডান থেকে বাঁয়ে লেখা হয়। লাইনের ডান প্রান্ত থেকে শুরু করে বাঁ দিকে এগোন। দিকটা অভ্যাস না হওয়া পর্যন্ত আগে থেকে লাইন টানা অনুশীলনের খাতা ব্যবহার করুন, যাতে ডান দিকের মার্জিন স্পষ্ট দাগ দেওয়া থাকে।'
  },
  {
    mistakeEn: 'Omitting dots entirely — writing Ba, Ta, and Tha as the same bare shape.',
    mistakeBn: 'নুকতা একেবারে বাদ দেওয়া: বা, তা আর সা-কে নুকতা ছাড়া একই আকৃতিতে লেখা।',
    correctEn: 'Dots are not optional decoration — they distinguish entirely different letters and change word meanings. Always complete the letter bodies first, then go back and add every dot before the vowel marks.',
    correctBn: 'নুকতা শুধু সাজানোর জিনিস নয়, চাইলে বাদ দেওয়া যায় না। নুকতা দিয়েই একেবারে আলাদা হরফ চেনা যায়, আর নুকতা বদলালে শব্দের অর্থও বদলে যায়। সবসময় আগে হরফের শরীর পুরো লিখুন, তারপর ফিরে গিয়ে হরকত দেওয়ার আগে প্রতিটি নুকতা দিন।'
  },
  {
    mistakeEn: 'Placing dots in the wrong position: above Ba instead of below, or below Ta instead of above.',
    mistakeBn: 'নুকতা ভুল জায়গায় দেওয়া: বা-এর নুকতা নিচে না দিয়ে উপরে, বা তা-এর নুকতা উপরে না দিয়ে নিচে।',
    correctEn: 'Ba has exactly 1 dot below the bowl. Ta has exactly 2 dots above. Tha has exactly 3 dots above. Remember: Ba = 1 below; Ta = 2 above; Tha = 3 above. Never mix these up — the dot count and position are the only difference between these three letters.',
    correctBn: 'বা-এর বাটির নিচে ঠিক ১টি নুকতা। তা-এর উপরে ঠিক ২টি। সা-এর উপরে ঠিক ৩টি। মনে রাখুন: বা = নিচে ১; তা = উপরে ২; সা = উপরে ৩। এগুলো কখনো গুলিয়ে ফেলবেন না; এই তিন হরফের মধ্যে পার্থক্য শুধু নুকতার সংখ্যা আর জায়গায়।'
  },
  {
    mistakeEn: 'Making Ha, Jim, and Kha all look identical by misplacing or forgetting their dots.',
    mistakeBn: 'নুকতা ভুল জায়গায় দিয়ে বা ভুলে গিয়ে হা, জিম আর খা-কে একই রকম করে ফেলা।',
    correctEn: 'All three share the same hook body. Ha has no dot at all. Jim has 1 dot below (inside or just under the hook). Kha has 1 dot above the hook opening. Write the hook first, then decide: zero dots, one below, or one above.',
    correctBn: 'তিনটির শরীরই একই বাঁক। হা-তে কোনো নুকতা নেই। জিমের ১টি নুকতা নিচে (বাঁকের ভেতরে বা ঠিক নিচে)। খা-এর ১টি নুকতা বাঁকের খোলা মুখের উপরে। আগে বাঁক লিখুন, তারপর ঠিক করুন: নুকতা নেই, নিচে একটি, নাকি উপরে একটি।'
  },
  {
    mistakeEn: 'Connecting non-connector letters (Alif, Dal, Dhal, Ra, Zay, Waw) to the following letter.',
    mistakeBn: 'যে হরফগুলো পরের হরফের সাথে জোড়া লাগে না (আলিফ, দাল, যাল, রা, যা, ওয়াও), সেগুলোকে পরের হরফের সাথে জুড়ে দেওয়া।',
    correctEn: 'Six Arabic letters never connect to the letter after them. After writing any of these six, lift the pen completely and begin the next letter as if starting fresh. A connecting stroke after these letters is always an error.',
    correctBn: 'আরবির ছয়টি হরফ কখনো পরের হরফের সাথে জোড়া লাগে না। এই ছয়টির যেকোনোটি লেখার পরে কলম পুরোপুরি তুলে নিন, তারপর পরের হরফটি নতুন করে শুরু করুন। এই হরফগুলোর পরে জোড়ার টান দেওয়া সবসময়ই ভুল।'
  },
  {
    mistakeEn: 'Making Alif slanted or curved instead of keeping it perfectly vertical.',
    mistakeBn: 'আলিফ একদম খাড়া না রেখে হেলিয়ে বা বাঁকিয়ে লেখা।',
    correctEn: 'Alif must be a perfectly vertical stroke. Use the edge of a ruler or the margin line as a visual guide. A slanted Alif looks like a Waw tail or an Alif maqsura. Check vertical alignment after every single Alif until the habit is formed.',
    correctBn: 'আলিফ হবে একদম খাড়া একটি দাগ। চোখের আন্দাজের জন্য স্কেলের ধার বা মার্জিনের লাইন কাজে লাগান। হেলানো আলিফ দেখতে ওয়াওয়ের লেজ বা আলিফ মাকসুরার মতো লাগে। অভ্যাস না হওয়া পর্যন্ত প্রতিটি আলিফ লেখার পরে দেখে নিন, সেটা খাড়া হলো কি না।'
  },
  {
    mistakeEn: 'Drawing the teeth of Sin and Shin unevenly — different heights or spacing.',
    mistakeBn: 'সিন ও শিনের দাঁত অসমান করে লেখা: উচ্চতা বা ফাঁক এক রকম না হওয়া।',
    correctEn: 'Sin and Shin each have exactly three teeth of equal height and equal spacing. Draw them slowly and deliberately. A useful drill: draw three tiny equal humps as a warm-up before writing the full letter. Uneven teeth are one of the most common errors in early Arabic writing.',
    correctBn: 'সিন আর শিন দুটোরই ঠিক তিনটি দাঁত, সমান উঁচু আর সমান দূরে দূরে। ধীরে, মন দিয়ে লিখুন। ভালো একটি অনুশীলন: পুরো হরফ লেখার আগে হাত সড়গড় করতে তিনটি ছোট সমান ঢিবি আঁকুন। আরবি লেখার শুরুর দিকে অসমান দাঁত সবচেয়ে বেশি হওয়া ভুলগুলোর একটি।'
  },
  {
    mistakeEn: 'Using the isolated letter form everywhere, regardless of position in a word.',
    mistakeBn: 'শব্দের কোথায় বসছে না দেখে সব জায়গায় হরফের একক রূপ ব্যবহার করা।',
    correctEn: 'Most Arabic letters have four forms: isolated, initial (start of word), medial (middle), and final (end). Using the isolated form mid-word breaks the word apart and looks unnatural. Learn and practise all four forms of every letter from the beginning.',
    correctBn: 'বেশিরভাগ আরবি হরফের চারটি রূপ আছে: একক, শুরুর (শব্দের শুরুতে), মাঝের (মাঝখানে) আর শেষের (শেষে)। শব্দের মাঝখানে একক রূপ বসালে শব্দটা ভেঙে যায়, দেখতেও অস্বাভাবিক লাগে। শুরু থেকেই প্রতিটি হরফের চারটি রূপ শিখুন ও অনুশীলন করুন।'
  },
  {
    mistakeEn: 'Omitting the hamza mark on Alif, writing plain Alif where hamzated Alif is required.',
    mistakeBn: 'আলিফের হামযা বাদ দেওয়া: যেখানে হামযাওয়ালা আলিফ লাগবে, সেখানে খালি আলিফ লেখা।',
    correctEn: 'Hamza changes both the pronunciation and the meaning of a word. A plain Alif (ا) is different from Alif with hamza above (أ) or below (إ). In Quran copying, omitting hamza is a serious error. Practice writing the hamza as a small backward-c shape, clearly separate from the Alif body.',
    correctBn: 'হামযা শব্দের উচ্চারণ আর অর্থ দুটোই বদলে দেয়। খালি আলিফ (ا) আর উপরে হামযাওয়ালা (أ) বা নিচে হামযাওয়ালা (إ) আলিফ এক নয়। কুরআন লেখায় হামযা বাদ দেওয়া বড় ভুল। হামযাকে ছোট, উল্টো c-এর মতো আকৃতিতে লেখার অনুশীলন করুন, আলিফের শরীর থেকে স্পষ্ট আলাদা রেখে।'
  },
  {
    mistakeEn: 'Placing harakat (vowel marks) on top of each other in the wrong order.',
    mistakeBn: 'একাধিক হরকত (যবর, যের, পেশ ইত্যাদি) ভুল ক্রমে একটার ওপর আরেকটা বসানো।',
    correctEn: 'When a letter has both a shadda and a fatha or damma, the shadda is written first (closest to the letter) and the vowel sits above the shadda. The correct stack from bottom to top is: letter — shadda — vowel. A kasra never goes on top: it sits under the shadda or below the letter.',
    correctBn: 'কোনো হরফে তাশদীদের সাথে যবর বা পেশ থাকলে আগে তাশদীদ লিখুন (হরফের সবচেয়ে কাছে), হরকত বসবে তাশদীদের উপরে। নিচ থেকে উপরে সঠিক ক্রম: হরফ, তারপর তাশদীদ, তারপর হরকত। যের কখনো উপরে বসে না: তা বসে তাশদীদের নিচে, অথবা হরফের নিচে।'
  },
  {
    mistakeEn: 'Leaving the Mim knot open so it looks like a reversed Nun or a Qaf.',
    mistakeBn: 'মিমের গোল মাথা খোলা রাখা, ফলে উল্টো নুন বা ক্বাফের মতো দেখায়।',
    correctEn: 'The Mim knot must be a fully closed loop in all its forms. An open or gap-showing loop is one of the most common Mim errors. After completing the circular stroke, close it deliberately before drawing the connecting tail or exit stroke.',
    correctBn: 'সব রূপেই মিমের গোল মাথা পুরোপুরি বন্ধ হতে হবে। মাথা খোলা থাকা বা ফাঁক দেখা যাওয়া মিমের সবচেয়ে বেশি হওয়া ভুলগুলোর একটি। গোল টান শেষ করে, জোড়ার লেজ বা বের হওয়ার টান দেওয়ার আগে মাথাটা ভেবেচিন্তে বন্ধ করুন।'
  },
  {
    mistakeEn: 'Confusing Nun and Ba because their bowls look similar — forgetting that Nun\'s bowl is deeper and its dot is above.',
    mistakeBn: 'বাটি দেখতে কাছাকাছি বলে নুন আর বা গুলিয়ে ফেলা; ভুলে যাওয়া যে নুনের বাটি বেশি গভীর আর নুকতা উপরে।',
    correctEn: 'Ba has a shallow bowl resting on the baseline with 1 dot below. Nun has a deeper bowl that dips below the baseline with 1 dot above. The dot position (above vs below) and the bowl depth are the two reliable differences. Always check both before moving on.',
    correctBn: 'বা-এর বাটি অগভীর, লাইনের ওপর বসে, নিচে ১টি নুকতা। নুনের বাটি বেশি গভীর, লাইনের নিচে নেমে যায়, উপরে ১টি নুকতা। নুকতার জায়গা (উপরে না নিচে) আর বাটির গভীরতা, এই দুটিই নির্ভরযোগ্য পার্থক্য। পরের হরফে যাওয়ার আগে দুটোই মিলিয়ে নিন।'
  },
  {
    mistakeEn: 'Writing the Sin/Shin teeth as a single zigzag line instead of three distinct rounded cusps.',
    mistakeBn: 'সিন/শিনের দাঁত তিনটি আলাদা গোল চূড়া না করে একটা আঁকাবাঁকা দাগ বানিয়ে ফেলা।',
    correctEn: 'Each tooth of Sin and Shin is a small gentle curve with a clear valley between it and its neighbour. A zigzag produces angular points rather than smooth cusps, which is wrong in Naskh. Slow down and draw each cusp separately: up, over the top, down into the valley, up again.',
    correctBn: 'সিন ও শিনের প্রতিটি দাঁত একটি ছোট, নরম বাঁক; পাশের দাঁতের সাথে মাঝখানে স্পষ্ট একটি খাঁজ থাকে। আঁকাবাঁকা দাগে মসৃণ চূড়ার বদলে সূচালো কোণ তৈরি হয়, নাসখ লিপিতে যা ভুল। ধীরে লিখুন, প্রতিটি চূড়া আলাদা করে: উপরে উঠুন, মাথা পেরিয়ে খাঁজে নামুন, আবার উঠুন।'
  },
];
