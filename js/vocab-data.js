/**
 * Quranic Vocabulary Data
 *
 * The 50 highest-frequency words of the Quran (function words plus the most
 * common nouns and verbs). Source: high-frequency Quranic wordlists
 * (Quranic Arabic Corpus and similar frequency studies).
 * Occurrence counts are APPROXIMATE, rounded, and often cover the whole root
 * or all inflected forms of the word.
 *
 * Entry shape:
 *   {
 *     arabic:   fully voweled Arabic form,
 *     translit: simple Latin transliteration,
 *     count:    approximate occurrences in the Quran,
 *     meanings: { en, bn, fr, id, ur, tr, ar } — short glosses per UI language
 *               (ar is a simple Arabic synonym / gloss)
 *   }
 */

const VOCAB_WORDS = [
  // ---- Particles, pronouns and other function words ----
  {
    arabic: 'مِنْ', translit: 'min', count: 3200,
    meanings: { en: 'from, of', bn: 'থেকে', fr: 'de, depuis', id: 'dari', ur: 'سے', tr: '-den, -dan', ar: 'لِلابْتِدَاء' , zh: '从，来自', ja: 'から、より', hi: 'से, का', es: 'de, desde', ru: 'из, от', de: 'von, aus', fa: 'از', ms: 'dari, daripada'}
  },
  {
    arabic: 'مَا', translit: 'mā', count: 2150,
    meanings: { en: 'what; not', bn: 'যা; না', fr: 'ce que ; ne pas', id: 'apa; tidak', ur: 'جو؛ نہیں', tr: 'ne; değil', ar: 'الَّذِي / نَفْي' , zh: '什么；不', ja: '何；ない', hi: 'क्या; नहीं', es: 'lo que; no', ru: 'что; не', de: 'was; nicht', fa: 'آنچه؛ نه', ms: 'apa; tidak'}
  },
  {
    arabic: 'لَا', translit: 'lā', count: 1800,
    meanings: { en: 'no, not', bn: 'না', fr: 'non, ne pas', id: 'tidak', ur: 'نہیں', tr: 'hayır, değil', ar: 'نَفْي' , zh: '不，非', ja: 'いいえ、ない', hi: 'नहीं, न', es: 'no', ru: 'нет, не', de: 'nein, nicht', fa: 'نه، نیست', ms: 'tidak, bukan'}
  },
  {
    arabic: 'فِي', translit: 'fī', count: 1700,
    meanings: { en: 'in', bn: 'মধ্যে', fr: 'dans', id: 'di dalam', ur: 'میں', tr: 'içinde', ar: 'دَاخِلَ' , zh: '在…里', ja: '〜の中に'}
  },
  {
    arabic: 'إِنَّ', translit: 'inna', count: 1680,
    meanings: { en: 'indeed, surely', bn: 'নিশ্চয়ই', fr: 'certes', id: 'sesungguhnya', ur: 'بےشک', tr: 'şüphesiz', ar: 'لِلتَّوْكِيد' , zh: '确实，的确', ja: '本当に、確かに', hi: 'बेशक, यक़ीनन', es: 'ciertamente, en verdad', ru: 'воистину, поистине', de: 'wahrlich, gewiss', fa: 'به‌راستی، بی‌گمان', ms: 'sesungguhnya, pasti'}
  },
  {
    arabic: 'عَلَىٰ', translit: 'ʿalā', count: 1440,
    meanings: { en: 'on, upon', bn: 'উপরে', fr: 'sur', id: 'di atas', ur: 'پر', tr: 'üzerine', ar: 'فَوْقَ' , zh: '在…上', ja: '〜の上に', hi: 'पर, ऊपर', es: 'sobre, encima de', ru: 'на, над', de: 'auf, über', fa: 'بر، روی', ms: 'pada, di atas'}
  },
  {
    arabic: 'الَّذِينَ', translit: 'alladhīna', count: 1080,
    meanings: { en: 'those who', bn: 'যারা', fr: 'ceux qui', id: 'orang-orang yang', ur: 'جو لوگ', tr: 'onlar ki', ar: 'جَمْعُ الَّذِي' , zh: '那些人', ja: '〜する者たち', hi: 'वे जो', es: 'los que', ru: 'те, которые', de: 'diejenigen, die', fa: 'کسانی که', ms: 'orang-orang yang'}
  },
  {
    arabic: 'إِلَىٰ', translit: 'ilā', count: 740,
    meanings: { en: 'to, towards', bn: 'দিকে', fr: 'vers', id: 'ke, menuju', ur: 'کی طرف', tr: '-e doğru', ar: 'نَحْوَ' , zh: '到，向', ja: '〜へ、〜の方へ', hi: 'तक, की तरफ़', es: 'a, hacia', ru: 'к, по направлению к', de: 'zu, hin zu', fa: 'به، به سوی', ms: 'ke, kepada'}
  },
  {
    arabic: 'إِنْ', translit: 'in', count: 690,
    meanings: { en: 'if', bn: 'যদি', fr: 'si', id: 'jika', ur: 'اگر', tr: 'eğer', ar: 'لِلشَّرْط' , zh: '如果', ja: 'もし'}
  },
  {
    arabic: 'ذَٰلِكَ', translit: 'dhālika', count: 520,
    meanings: { en: 'that', bn: 'সেটি', fr: 'cela', id: 'itu', ur: 'وہ (اشارہ)', tr: 'şu, o', ar: 'إِشَارَةٌ لِلْبَعِيد' , zh: '那个', ja: 'それ、その', hi: 'वह', es: 'eso, aquello', ru: 'тот, то', de: 'jenes', fa: 'آن', ms: 'itu'}
  },
  {
    arabic: 'هُوَ', translit: 'huwa', count: 480,
    meanings: { en: 'he, it', bn: 'সে, তিনি', fr: 'il, lui', id: 'dia', ur: 'وہ', tr: 'o', ar: 'ضَمِيرُ الْغَائِب' , zh: '他，它', ja: '彼、それ'}
  },
  {
    arabic: 'إِذَا', translit: 'idhā', count: 400,
    meanings: { en: 'when', bn: 'যখন', fr: 'lorsque', id: 'apabila', ur: 'جب', tr: '-dığı zaman', ar: 'حِينَ' , zh: '当…时', ja: '〜の時', hi: 'जब', es: 'cuando', ru: 'когда', de: 'wenn', fa: 'هنگامی که', ms: 'apabila'}
  },
  {
    arabic: 'كُلُّ', translit: 'kull', count: 360,
    meanings: { en: 'every, all', bn: 'প্রত্যেক, সব', fr: 'chaque, tout', id: 'setiap, semua', ur: 'ہر، سب', tr: 'her, bütün', ar: 'جَمِيع' , zh: '每个，所有', ja: '全ての', hi: 'हर, सब', es: 'cada, todo', ru: 'каждый, все', de: 'jeder, alle', fa: 'هر، همه', ms: 'setiap, semua'}
  },
  {
    arabic: 'ثُمَّ', translit: 'thumma', count: 340,
    meanings: { en: 'then', bn: 'তারপর', fr: 'ensuite', id: 'kemudian', ur: 'پھر', tr: 'sonra', ar: 'بَعْدَ ذَٰلِك' , zh: '然后', ja: 'それから', hi: 'फिर', es: 'luego', ru: 'затем', de: 'dann', fa: 'سپس', ms: 'kemudian'}
  },
  {
    arabic: 'أَوْ', translit: 'aw', count: 280,
    meanings: { en: 'or', bn: 'অথবা', fr: 'ou', id: 'atau', ur: 'یا', tr: 'veya', ar: 'لِلتَّخْيِير' , zh: '或者', ja: 'または'}
  },

  // ---- Prepositions / adverbs of place and time ----
  {
    arabic: 'بَيْنَ', translit: 'bayna', count: 265,
    meanings: { en: 'between', bn: 'মাঝে', fr: 'entre', id: 'di antara', ur: 'درمیان', tr: 'arasında', ar: 'وَسَطَ' , zh: '之间', ja: '間', hi: 'बीच', es: 'entre', ru: 'между', de: 'zwischen', fa: 'میان', ms: 'antara'}
  },
  {
    arabic: 'قَبْلَ', translit: 'qabla', count: 240,
    meanings: { en: 'before', bn: 'আগে', fr: 'avant', id: 'sebelum', ur: 'سے پہلے', tr: 'önce', ar: 'ضِدُّ بَعْد' , zh: '之前', ja: '前', hi: 'पहले', es: 'antes', ru: 'до, перед', de: 'vor', fa: 'پیش از', ms: 'sebelum'}
  },
  {
    arabic: 'عِنْدَ', translit: 'ʿinda', count: 200,
    meanings: { en: 'with, at', bn: 'কাছে', fr: 'auprès de', id: 'di sisi', ur: 'کے پاس', tr: 'yanında, katında', ar: 'لَدَى' , zh: '在…跟前', ja: '〜のそばに', hi: 'पास, के यहाँ', es: 'con, junto a', ru: 'у, при', de: 'bei, mit', fa: 'نزد، کنار', ms: 'di sisi, pada'}
  },
  {
    arabic: 'بَعْدَ', translit: 'baʿda', count: 195,
    meanings: { en: 'after', bn: 'পরে', fr: 'après', id: 'sesudah', ur: 'کے بعد', tr: 'sonra', ar: 'عَقِبَ' , zh: '之后', ja: '後', hi: 'बाद', es: 'después', ru: 'после', de: 'nach', fa: 'پس از', ms: 'selepas'}
  },
  {
    arabic: 'غَيْرُ', translit: 'ghayr', count: 150,
    meanings: { en: 'other than', bn: 'ছাড়া, ভিন্ন', fr: 'autre que', id: 'selain', ur: 'کے سوا', tr: 'başka, gayrı', ar: 'سِوَى' , zh: '除…之外', ja: '以外', hi: 'के सिवा', es: 'distinto de', ru: 'кроме, другой', de: 'außer, anders als', fa: 'جز، غیر از', ms: 'selain'}
  },

  // ---- Key verbs ----
  {
    arabic: 'قَالَ', translit: 'qāla', count: 1720,
    meanings: { en: 'he said', bn: 'সে বলল', fr: 'il a dit', id: 'dia berkata', ur: 'اس نے کہا', tr: 'dedi', ar: 'تَكَلَّمَ' , zh: '他说', ja: '彼は言った', hi: 'उसने कहा', es: 'dijo', ru: 'он сказал', de: 'er sagte', fa: 'گفت', ms: 'dia berkata'}
  },
  {
    arabic: 'كَانَ', translit: 'kāna', count: 1360,
    meanings: { en: 'he was', bn: 'সে ছিল', fr: 'il était', id: 'dia adalah', ur: 'وہ تھا', tr: 'idi, oldu', ar: 'وُجِدَ' , zh: '他是', ja: '彼はいた', hi: 'वह था', es: 'fue, era', ru: 'он был', de: 'er war', fa: 'بود', ms: 'dia adalah'}
  },
  {
    arabic: 'عَلِمَ', translit: 'ʿalima', count: 850,
    meanings: { en: 'he knew', bn: 'সে জানল', fr: 'il a su', id: 'dia mengetahui', ur: 'اس نے جانا', tr: 'bildi', ar: 'عَرَفَ' , zh: '他知道', ja: '彼は知った', hi: 'उसने जाना', es: 'supo', ru: 'он знал', de: 'er wusste', fa: 'دانست', ms: 'dia mengetahui'}
  },
  {
    arabic: 'آمَنَ', translit: 'āmana', count: 540,
    meanings: { en: 'he believed', bn: 'ঈমান আনল', fr: 'il a cru', id: 'dia beriman', ur: 'ایمان لایا', tr: 'iman etti', ar: 'صَدَّقَ' , zh: '他归信', ja: '彼は信じた', hi: 'वह ईमान लाया', es: 'creyó', ru: 'он уверовал', de: 'er glaubte', fa: 'ایمان آورد', ms: 'dia beriman'}
  },
  {
    arabic: 'كَفَرَ', translit: 'kafara', count: 520,
    meanings: { en: 'he disbelieved', bn: 'কুফরি করল', fr: 'il a mécru', id: 'dia kafir', ur: 'کفر کیا', tr: 'inkâr etti', ar: 'جَحَدَ' , zh: '他不信', ja: '彼は不信仰になった', hi: 'उसने कुफ़्र किया', es: 'descreyó', ru: 'он не уверовал', de: 'er war ungläubig', fa: 'کفر ورزید', ms: 'dia kufur'}
  },
  {
    arabic: 'عَمِلَ', translit: 'ʿamila', count: 360,
    meanings: { en: 'he did, worked', bn: 'সে আমল করল', fr: 'il a œuvré', id: 'dia beramal', ur: 'عمل کیا', tr: 'yaptı', ar: 'فَعَلَ' , zh: '他做（善功）', ja: '彼は行った', hi: 'उसने किया, अमल किया', es: 'hizo, obró', ru: 'он делал, трудился', de: 'er tat, wirkte', fa: 'انجام داد، عمل کرد', ms: 'dia melakukan, beramal'}
  },
  {
    arabic: 'جَاءَ', translit: 'jāʾa', count: 280,
    meanings: { en: 'he came', bn: 'সে এল', fr: 'il est venu', id: 'dia datang', ur: 'وہ آیا', tr: 'geldi', ar: 'أَتَى' , zh: '他来了', ja: '彼は来た', hi: 'वह आया', es: 'vino', ru: 'он пришёл', de: 'er kam', fa: 'آمد', ms: 'dia datang'}
  },
  {
    arabic: 'خَلَقَ', translit: 'khalaqa', count: 260,
    meanings: { en: 'he created', bn: 'সৃষ্টি করলেন', fr: 'il a créé', id: 'dia menciptakan', ur: 'پیدا کیا', tr: 'yarattı', ar: 'أَوْجَدَ' , zh: '他创造', ja: '彼は創造した', hi: 'उसने पैदा किया', es: 'creó', ru: 'он сотворил', de: 'er erschuf', fa: 'آفرید', ms: 'dia mencipta'}
  },
  {
    arabic: 'أَنْزَلَ', translit: 'anzala', count: 190,
    meanings: { en: 'he sent down', bn: 'নাযিল করলেন', fr: 'il a fait descendre', id: 'dia menurunkan', ur: 'نازل کیا', tr: 'indirdi', ar: 'أَهْبَطَ' , zh: '他降示', ja: '彼は下した', hi: 'उसने उतारा', es: 'hizo descender', ru: 'он ниспослал', de: 'er sandte herab', fa: 'فرو فرستاد', ms: 'dia menurunkan'}
  },
  {
    arabic: 'سَمِعَ', translit: 'samiʿa', count: 185,
    meanings: { en: 'he heard', bn: 'সে শুনল', fr: 'il a entendu', id: 'dia mendengar', ur: 'اس نے سنا', tr: 'işitti', ar: 'أَدْرَكَ بِالْأُذُن' , zh: '他听见', ja: '彼は聞いた', hi: 'उसने सुना', es: 'oyó', ru: 'он услышал', de: 'er hörte', fa: 'شنید', ms: 'dia mendengar'}
  },

  // ---- Key nouns ----
  {
    arabic: 'اللَّهُ', translit: 'Allāh', count: 2700,
    meanings: { en: 'Allah, God', bn: 'আল্লাহ', fr: 'Allah, Dieu', id: 'Allah', ur: 'اللہ', tr: 'Allah', ar: 'الْإِلَٰهُ الْحَقّ' , zh: '安拉，真主', ja: 'アッラー', hi: 'अल्लाह', es: 'Allah', ru: 'Аллах', de: 'Allah', fa: 'الله، معبود راستین', ms: 'Allah'}
  },
  {
    arabic: 'رَبٌّ', translit: 'rabb', count: 975,
    meanings: { en: 'Lord', bn: 'প্রতিপালক', fr: 'Seigneur', id: 'Tuhan', ur: 'رب', tr: 'Rab', ar: 'الْمَالِكُ الْمُدَبِّر' , zh: '主，养育者', ja: '主、養育者', hi: 'रब', es: 'Señor', ru: 'Господь', de: 'Herr', fa: 'پروردگار', ms: 'Tuhan'}
  },
  {
    arabic: 'أَرْضٌ', translit: 'arḍ', count: 460,
    meanings: { en: 'earth, land', bn: 'পৃথিবী, ভূমি', fr: 'terre', id: 'bumi', ur: 'زمین', tr: 'yer, arz', ar: 'ضِدُّ السَّمَاء' , zh: '大地', ja: '大地', hi: 'ज़मीन, धरती', es: 'tierra, país', ru: 'земля, страна', de: 'Erde, Land', fa: 'زمین، سرزمین', ms: 'bumi, tanah'}
  },
  {
    arabic: 'يَوْمٌ', translit: 'yawm', count: 400,
    meanings: { en: 'day', bn: 'দিন', fr: 'jour', id: 'hari', ur: 'دن', tr: 'gün', ar: 'نَهَار' , zh: '日子，天', ja: '日、日曜', hi: 'दिन', es: 'día', ru: 'день', de: 'Tag', fa: 'روز', ms: 'hari'}
  },
  {
    arabic: 'قَوْمٌ', translit: 'qawm', count: 380,
    meanings: { en: 'people, nation', bn: 'জাতি, সম্প্রদায়', fr: 'peuple', id: 'kaum', ur: 'قوم', tr: 'kavim, topluluk', ar: 'جَمَاعَةُ النَّاس' , zh: '民族，宗族', ja: '民、民族', hi: 'क़ौम, लोग', es: 'pueblo, nación', ru: 'люди, народ', de: 'Volk, Leute', fa: 'قوم، ملت', ms: 'kaum, bangsa'}
  },
  {
    arabic: 'آيَةٌ', translit: 'āyah', count: 380,
    meanings: { en: 'sign, verse', bn: 'নিদর্শন, আয়াত', fr: 'signe, verset', id: 'tanda, ayat', ur: 'نشانی، آیت', tr: 'ayet, işaret', ar: 'عَلَامَة' , zh: '迹象，节文', ja: '印、節', hi: 'निशानी, आयत', es: 'signo, aleya', ru: 'знамение, аят', de: 'Zeichen, Vers', fa: 'نشانه، آیه', ms: 'tanda, ayat'}
  },
  {
    arabic: 'رَسُولٌ', translit: 'rasūl', count: 330,
    meanings: { en: 'messenger', bn: 'রাসূল', fr: 'messager', id: 'rasul, utusan', ur: 'رسول', tr: 'elçi, resul', ar: 'مُرْسَل' , zh: '使者', ja: '使徒、使者', hi: 'रसूल', es: 'mensajero', ru: 'посланник', de: 'Gesandter', fa: 'فرستاده، رسول', ms: 'rasul'}
  },
  {
    arabic: 'عَذَابٌ', translit: 'ʿadhāb', count: 320,
    meanings: { en: 'punishment', bn: 'শাস্তি', fr: 'châtiment', id: 'azab, siksa', ur: 'عذاب', tr: 'azap', ar: 'عُقُوبَة' , zh: '惩罚', ja: '懲罰', hi: 'अज़ाब', es: 'castigo', ru: 'наказание', de: 'Strafe', fa: 'عذاب', ms: 'azab'}
  },
  {
    arabic: 'سَمَاءٌ', translit: 'samāʾ', count: 310,
    meanings: { en: 'sky, heaven', bn: 'আকাশ', fr: 'ciel', id: 'langit', ur: 'آسمان', tr: 'gök', ar: 'مَا عَلَاك' , zh: '天空，天', ja: '天', hi: 'आसमान, फ़लक', es: 'firmamento, cielo', ru: 'небо, небеса', de: 'Himmel', fa: 'آسمان', ms: 'langit, petala langit'}
  },
  {
    arabic: 'نَفْسٌ', translit: 'nafs', count: 295,
    meanings: { en: 'soul, self', bn: 'আত্মা, নিজ', fr: 'âme', id: 'jiwa, diri', ur: 'نفس، جان', tr: 'nefis, can', ar: 'الذَّات / الرُّوح' , zh: '灵魂，自我', ja: '魂、自己', hi: 'जान, नफ़्स', es: 'alma, uno mismo', ru: 'душа, сам', de: 'Seele, Selbst', fa: 'جان، خود', ms: 'jiwa, diri'}
  },
  {
    arabic: 'حَقٌّ', translit: 'ḥaqq', count: 285,
    meanings: { en: 'truth, right', bn: 'সত্য, অধিকার', fr: 'vérité, droit', id: 'kebenaran, hak', ur: 'حق، سچ', tr: 'hak, gerçek', ar: 'ضِدُّ الْبَاطِل' , zh: '真理，权利', ja: '真理、権利', hi: 'हक़, सच', es: 'verdad, derecho', ru: 'истина, право', de: 'Wahrheit, Recht', fa: 'حق، درست', ms: 'kebenaran, hak'}
  },
  {
    arabic: 'شَيْءٌ', translit: 'shayʾ', count: 280,
    meanings: { en: 'thing', bn: 'বস্তু, জিনিস', fr: 'chose', id: 'sesuatu', ur: 'چیز', tr: 'şey', ar: 'مَوْجُود' , zh: '事物', ja: '物事', hi: 'चीज़', es: 'cosa', ru: 'вещь', de: 'Ding', fa: 'چیز', ms: 'sesuatu'}
  },
  {
    arabic: 'عَبْدٌ', translit: 'ʿabd', count: 275,
    meanings: { en: 'servant, slave', bn: 'বান্দা', fr: 'serviteur', id: 'hamba', ur: 'بندہ', tr: 'kul', ar: 'خَادِم / مَمْلُوك' , zh: '仆人，奴仆', ja: '僕、奴隷', hi: 'बंदा, ग़ुलाम', es: 'siervo, esclavo', ru: 'раб, слуга', de: 'Diener, Sklave', fa: 'بنده، برده', ms: 'hamba, abdi'}
  },
  {
    arabic: 'كِتَابٌ', translit: 'kitāb', count: 260,
    meanings: { en: 'book, scripture', bn: 'কিতাব', fr: 'livre', id: 'kitab', ur: 'کتاب', tr: 'kitap', ar: 'مَكْتُوب' , zh: '经典，天经', ja: '書物、啓典', hi: 'किताब', es: 'libro, escritura', ru: 'книга, Писание', de: 'Buch, Schrift', fa: 'کتاب، نوشته‌ی آسمانی', ms: 'kitab, kitab suci'}
  },
  {
    arabic: 'خَيْرٌ', translit: 'khayr', count: 185,
    meanings: { en: 'good, better', bn: 'কল্যাণ, ভালো', fr: 'bien, meilleur', id: 'kebaikan', ur: 'بھلائی', tr: 'hayır, iyilik', ar: 'ضِدُّ الشَّرّ' , zh: '好，善', ja: '善、良い', hi: 'भलाई, बेहतर', es: 'bien, mejor', ru: 'благо, лучше', de: 'Gutes, besser', fa: 'خیر، بهتر', ms: 'kebaikan, lebih baik'}
  },
  {
    arabic: 'جَنَّةٌ', translit: 'jannah', count: 145,
    meanings: { en: 'garden, Paradise', bn: 'জান্নাত, বাগান', fr: 'paradis, jardin', id: 'surga', ur: 'جنت', tr: 'cennet', ar: 'بُسْتَانُ النَّعِيم' , zh: '天园，乐园', ja: '楽園、天園', hi: 'बाग़, जन्नत', es: 'jardín, Paraíso', ru: 'сад, Рай', de: 'Garten, Paradies', fa: 'باغ، بهشت', ms: 'kebun, syurga'}
  },
  {
    arabic: 'نَارٌ', translit: 'nār', count: 145,
    meanings: { en: 'fire, Hellfire', bn: 'আগুন, জাহান্নাম', fr: 'feu, Enfer', id: 'api, neraka', ur: 'آگ، دوزخ', tr: 'ateş', ar: 'لَهَبٌ مُحْرِق' , zh: '火狱', ja: '火獄', hi: 'आग, जहन्नम', es: 'fuego, el Fuego del Infierno', ru: 'огонь, Адский огонь', de: 'Feuer, Höllenfeuer', fa: 'آتش، دوزخ', ms: 'api, neraka'}
  },
  {
    arabic: 'قَلْبٌ', translit: 'qalb', count: 130,
    meanings: { en: 'heart', bn: 'হৃদয়, অন্তর', fr: 'cœur', id: 'hati', ur: 'دل', tr: 'kalp', ar: 'فُؤَاد' , zh: '心', ja: '心', hi: 'दिल', es: 'corazón', ru: 'сердце', de: 'Herz', fa: 'دل', ms: 'hati'}
  },
  {
    arabic: 'رَحْمَةٌ', translit: 'raḥmah', count: 115,
    meanings: { en: 'mercy', bn: 'রহমত, দয়া', fr: 'miséricorde', id: 'rahmat', ur: 'رحمت', tr: 'rahmet', ar: 'رَأْفَة' , zh: '慈悯', ja: '慈悲、慈愛', hi: 'रहमत', es: 'misericordia', ru: 'милость', de: 'Barmherzigkeit', fa: 'رحمت', ms: 'rahmat'}
  },
  {
    arabic: 'صَلَاةٌ', translit: 'ṣalāh', count: 99,
    meanings: { en: 'prayer', bn: 'নামায, সালাত', fr: 'prière', id: 'salat', ur: 'نماز', tr: 'namaz', ar: 'دُعَاء / عِبَادَة' , zh: '拜功，礼拜', ja: '礼拝、サラート', hi: 'नमाज़', es: 'oración', ru: 'намаз', de: 'Gebet', fa: 'نماز', ms: 'solat'}
  },

  // ---- High-frequency Quranic nouns and concepts ----
  {
    arabic: 'صَبْرٌ', translit: 'ṣabr', count: 103,
    meanings: { en: 'patience, endurance', bn: 'ধৈর্য, সবর', fr: 'patience', id: 'sabar', ur: 'صبر', tr: 'sabır', ar: 'تَحَمُّل' , zh: '忍耐，坚忍', ja: '忍耐、サブル', hi: 'सब्र, बर्दाश्त', es: 'paciencia, constancia', ru: 'терпение, стойкость', de: 'Geduld, Standhaftigkeit', fa: 'صبر، شکیبایی', ms: 'sabar, ketabahan'}
  },
  {
    arabic: 'ظُلْمٌ', translit: 'ẓulm', count: 315,
    meanings: { en: 'wrongdoing, injustice', bn: 'অত্যাচার, যুলুম', fr: 'injustice, tort', id: 'kezaliman', ur: 'ظلم', tr: 'zulüm', ar: 'جَوْر' , zh: '不义，压迫', ja: '不正、暴虐', hi: 'ज़ुल्म, नाइंसाफ़ी', es: 'iniquidad, injusticia', ru: 'несправедливость, беззаконие', de: 'Unrecht, Ungerechtigkeit', fa: 'ستم، بی‌عدالتی', ms: 'kezaliman, ketidakadilan'}
  },
  {
    arabic: 'شُكْرٌ', translit: 'shukr', count: 75,
    meanings: { en: 'gratitude, thankfulness', bn: 'কৃতজ্ঞতা, শোকর', fr: 'gratitude', id: 'syukur', ur: 'شکر', tr: 'şükür', ar: 'امْتِنَان' , zh: '感谢，感恩', ja: '感謝、シュクル', hi: 'शुक्र, एहसानमंदी', es: 'gratitud, agradecimiento', ru: 'благодарность, признательность', de: 'Dankbarkeit, Dank', fa: 'شکر، سپاسگزاری', ms: 'syukur, kesyukuran'}
  },
  {
    arabic: 'صِدْقٌ', translit: 'ṣidq', count: 155,
    meanings: { en: 'truth, sincerity', bn: 'সততা, সত্যবাদিতা', fr: 'vérité, sincérité', id: 'kejujuran', ur: 'صدق، سچائی', tr: 'doğruluk', ar: 'ضِدُّ الْكَذِب' , zh: '诚实，真诚', ja: '誠実、真実', hi: 'सच, सच्चाई', es: 'verdad, sinceridad', ru: 'правдивость, искренность', de: 'Wahrheit, Aufrichtigkeit', fa: 'راستی، صداقت', ms: 'kebenaran, kejujuran'}
  },
  {
    arabic: 'نَبِيٌّ', translit: 'nabiyy', count: 75,
    meanings: { en: 'prophet', bn: 'নবী', fr: 'prophète', id: 'nabi', ur: 'نبی', tr: 'nebi, peygamber', ar: 'مُنْبِئٌ عَنِ اللَّه' , zh: '先知', ja: '預言者、ナビー', hi: 'नबी', es: 'profeta', ru: 'пророк', de: 'Prophet', fa: 'پیامبر', ms: 'nabi'}
  },
  {
    arabic: 'سَبِيلٌ', translit: 'sabīl', count: 176,
    meanings: { en: 'way, path', bn: 'পথ, রাস্তা', fr: 'voie, chemin', id: 'jalan', ur: 'راستہ، سبیل', tr: 'yol, sebil', ar: 'طَرِيق' , zh: '道路，途径', ja: '道、方法', hi: 'राह, रास्ता', es: 'camino, senda', ru: 'путь, дорога', de: 'Weg, Pfad', fa: 'راه، مسیر', ms: 'jalan, laluan'}
  },
  {
    arabic: 'أُمَّةٌ', translit: 'ummah', count: 64,
    meanings: { en: 'community, nation', bn: 'উম্মত, জাতি', fr: 'communauté, nation', id: 'umat', ur: 'امت', tr: 'ümmet', ar: 'جَمَاعَةٌ مُتَّحِدَة' , zh: '民族，社群', ja: 'ウンマ、共同体', hi: 'उम्मत, क़ौम', es: 'comunidad, nación', ru: 'община, народ', de: 'Gemeinschaft, Umma', fa: 'امت، ملت', ms: 'umat, bangsa'}
  },
  {
    arabic: 'رِزْقٌ', translit: 'rizq', count: 123,
    meanings: { en: 'provision, sustenance', bn: 'রিযিক, জীবিকা', fr: 'provision, subsistance', id: 'rezeki', ur: 'رزق', tr: 'rızık', ar: 'قُوتٌ مِنَ اللَّه' , zh: '给养，赐予', ja: 'リズク、糧', hi: 'रोज़ी, रिज़्क़', es: 'provisión, sustento', ru: 'удел, пропитание', de: 'Versorgung, Lebensunterhalt', fa: 'روزی، معاش', ms: 'rezeki, sara hidup'}
  },
  {
    arabic: 'سَلَامٌ', translit: 'salām', count: 140,
    meanings: { en: 'peace, safety', bn: 'সালাম, শান্তি', fr: 'paix, salut', id: 'salam, kedamaian', ur: 'سلام، امن', tr: 'selam, barış', ar: 'أَمَان' , zh: '平安，和平', ja: '平和、サラーム', hi: 'सलामती, अमन', es: 'paz, seguridad', ru: 'мир, безопасность', de: 'Frieden, Sicherheit', fa: 'سلام، ایمنی', ms: 'kesejahteraan, keselamatan'}
  },
  {
    arabic: 'قُرْآنٌ', translit: 'qurʾān', count: 70,
    meanings: { en: 'the Quran, recitation', bn: 'কুরআন, পাঠ', fr: 'le Coran', id: 'Al-Quran', ur: 'قرآن', tr: 'Kur\'an', ar: 'كَلَامُ اللَّه' , zh: '古兰经', ja: 'クルアーン', hi: 'क़ुरआन, पढ़ना', es: 'el Corán, recitación', ru: 'Коран, чтение', de: 'der Koran, Lesung', fa: 'قرآن، خواندن', ms: 'al-Quran, bacaan'}
  },
  {
    arabic: 'تَوْبَةٌ', translit: 'tawbah', count: 87,
    meanings: { en: 'repentance, return to God', bn: 'তওবা, অনুতাপ', fr: 'repentance', id: 'taubat', ur: 'توبہ', tr: 'tövbe', ar: 'رُجُوعٌ إِلَى اللَّه' , zh: '悔过，回归', ja: '悔悟、タウバ', hi: 'तौबा, अल्लाह की तरफ़ लौटना', es: 'arrepentimiento, retorno a Allah', ru: 'покаяние, возвращение к Аллаху', de: 'Reue, Umkehr zu Allah', fa: 'توبه، بازگشت به سوی الله', ms: 'taubat, kembali kepada Allah'}
  },
  {
    arabic: 'فِتْنَةٌ', translit: 'fitnah', count: 60,
    meanings: { en: 'trial, temptation, affliction', bn: 'ফিতনা, পরীক্ষা', fr: 'épreuve, tentation', id: 'fitnah, cobaan', ur: 'فتنہ', tr: 'fitne', ar: 'ابْتِلَاء' , zh: '考验，迷乱', ja: 'フィトナ、試練', hi: 'आज़माइश, फ़ितना, मुसीबत', es: 'prueba, tentación, aflicción', ru: 'испытание, искушение, смута', de: 'Prüfung, Versuchung, Heimsuchung', fa: 'آزمایش، فریب، گرفتاری', ms: 'ujian, godaan, musibah'}
  },
  {
    arabic: 'صِرَاطٌ', translit: 'ṣirāṭ', count: 45,
    meanings: { en: 'path, road', bn: 'সিরাত, পথ', fr: 'voie, chemin', id: 'jalan lurus', ur: 'صراط', tr: 'sırat, yol', ar: 'طَرِيقٌ مُسْتَقِيم' , zh: '正路，道路', ja: 'スィラート、道', hi: 'रास्ता, सड़क', es: 'senda, camino', ru: 'путь, дорога', de: 'Weg, Pfad', fa: 'راه، جاده', ms: 'jalan, lorong'}
  },
  {
    arabic: 'مَلَكٌ', translit: 'malak', count: 88,
    meanings: { en: 'angel', bn: 'ফেরেশতা, মালাক', fr: 'ange', id: 'malaikat', ur: 'فرشتہ', tr: 'melek', ar: 'رَسُولٌ رُوحَانِيّ' , zh: '天使', ja: '天使、マラク', hi: 'फ़रिश्ता', es: 'ángel', ru: 'ангел', de: 'Engel', fa: 'فرشته', ms: 'malaikat'}
  },
  {
    arabic: 'إِيمَانٌ', translit: 'īmān', count: 279,
    meanings: { en: 'faith, belief', bn: 'ঈমান, বিশ্বাস', fr: 'foi, croyance', id: 'iman', ur: 'ایمان', tr: 'iman', ar: 'تَصْدِيقٌ وَإِذْعَان' , zh: '信仰，伊玛尼', ja: 'イーマン、信仰', hi: 'ईमान, यक़ीन', es: 'fe, creencia', ru: 'вера, убеждённость', de: 'Glaube, Iman', fa: 'ایمان، باور', ms: 'iman, kepercayaan'}
  },
  {
    arabic: 'حِكْمَةٌ', translit: 'ḥikmah', count: 210,
    meanings: { en: 'wisdom', bn: 'হিকমত, প্রজ্ঞা', fr: 'sagesse', id: 'hikmah, kebijaksanaan', ur: 'حکمت', tr: 'hikmet', ar: 'صَوَابُ الرَّأْي' , zh: '智慧', ja: 'ヒクマ、知恵', hi: 'हिकमत', es: 'sabiduría', ru: 'мудрость', de: 'Weisheit', fa: 'حکمت', ms: 'hikmah'}
  },
  {
    arabic: 'فَضْلٌ', translit: 'faḍl', count: 90,
    meanings: { en: 'grace, bounty, favor', bn: 'অনুগ্রহ, ফযল', fr: 'grâce, bienfait', id: 'karunia, keutamaan', ur: 'فضل، احسان', tr: 'lütuf, fazilet', ar: 'إِنْعَام' , zh: '恩典，恩惠', ja: '恩寵、ファドル', hi: 'फ़ज़्ल, मेहरबानी, एहसान', es: 'gracia, merced, favor', ru: 'милость, щедрость, благо', de: 'Huld, Gunst, Gnade', fa: 'فضل، بخشش، لطف', ms: 'kurnia, limpahan, kelebihan'}
  },
  {
    arabic: 'مَغْفِرَةٌ', translit: 'maghfirah', count: 234,
    meanings: { en: 'forgiveness, pardon', bn: 'মাগফিরাত, ক্ষমা', fr: 'pardon', id: 'ampunan', ur: 'مغفرت، بخشش', tr: 'mağfiret', ar: 'عَفْو' , zh: '饶恕，宽恕', ja: '赦免、マグフィラ', hi: 'माफ़ी, बख़्शिश', es: 'perdón, absolución', ru: 'прощение, помилование', de: 'Vergebung, Verzeihung', fa: 'آمرزش، گذشت', ms: 'keampunan, kemaafan'}
  },
  {
    arabic: 'بُشْرَىٰ', translit: 'bushrā', count: 122,
    meanings: { en: 'glad tidings, good news', bn: 'সুসংবাদ, বুশরা', fr: 'bonne nouvelle', id: 'kabar gembira', ur: 'خوشخبری، بشارت', tr: 'müjde', ar: 'خَبَرٌ سَارّ' , zh: '好消息，喜讯', ja: '吉報、ブシュラー', hi: 'ख़ुशख़बरी, अच्छी ख़बर', es: 'buenas nuevas, buena noticia', ru: 'благая весть, радостная весть', de: 'frohe Botschaft, gute Nachricht', fa: 'مژده، خبر خوش', ms: 'khabar gembira, berita baik'}
  },
  {
    arabic: 'نَذِيرٌ', translit: 'nadhīr', count: 60,
    meanings: { en: 'warner, admonisher', bn: 'সতর্ককারী, নাযির', fr: 'avertisseur', id: 'pemberi peringatan', ur: 'ڈرانے والا', tr: 'uyarıcı, nezir', ar: 'مُحَذِّر' , zh: '警告者', ja: '警告者、ナザィール', hi: 'डराने वाला, ख़बरदार करने वाला', es: 'advertidor, amonestador', ru: 'предостерегающий, увещеватель', de: 'Warner, Ermahner', fa: 'بیم‌دهنده، هشداردهنده', ms: 'pemberi peringatan, penasihat'}
  },
  {
    arabic: 'نَعِيمٌ', translit: 'naʿīm', count: 21,
    meanings: { en: 'bliss, comfort', bn: 'নেয়ামত, পরম সুখ', fr: 'délices, bonheur', id: 'kenikmatan', ur: 'نعمت، راحت', tr: 'nimet', ar: 'بَهْجَةٌ وَرَفَاهِيَة' , zh: '喜乐，安逸', ja: '至福、ナイーム', hi: 'ऐश, आराम', es: 'delicia, bienestar', ru: 'блаженство, благоденствие', de: 'Wonne, Behaglichkeit', fa: 'نعمت، آسایش', ms: 'kenikmatan, kesenangan'}
  },
  {
    arabic: 'أَمَانَةٌ', translit: 'amānah', count: 6,
    meanings: { en: 'trust, integrity', bn: 'আমানত, বিশ্বস্ততা', fr: 'confiance, honnêteté', id: 'amanah', ur: 'امانت', tr: 'emanet', ar: 'وَدِيعَة' , zh: '信托，诚信', ja: 'アマーナ、信託', hi: 'अमानत, दियानत', es: 'depósito confiado, integridad', ru: 'доверие, честность', de: 'anvertrautes Gut, Redlichkeit', fa: 'امانت، درستکاری', ms: 'amanah, integriti'}
  },
  {
    arabic: 'مُؤْمِنٌ', translit: 'muʾmin', count: 230,
    meanings: { en: 'believer, faithful', bn: 'মুমিন, বিশ্বাসী', fr: 'croyant', id: 'mukmin, orang beriman', ur: 'مومن', tr: 'mümin', ar: 'مُصَدِّقٌ بِاللَّه' , zh: '信士', ja: 'ムウミン、信者', hi: 'मोमिन, ईमान वाला', es: 'creyente, fiel', ru: 'верующий, верный', de: 'Gläubiger, Glaubender', fa: 'مؤمن، باایمان', ms: 'mukmin, orang beriman'}
  },
  {
    arabic: 'بَاطِلٌ', translit: 'bāṭil', count: 36,
    meanings: { en: 'falsehood, vain', bn: 'বাতিল, মিথ্যা', fr: 'faux, vain', id: 'batil', ur: 'باطل، جھوٹ', tr: 'bâtıl, yanlış', ar: 'ضِدُّ الْحَقّ' , zh: '虚伪，错误', ja: '虚偽、バーティル', hi: 'झूठ, बेकार', es: 'falsedad, vano', ru: 'ложь, тщетный', de: 'Falsches, Nichtiges', fa: 'باطل، بیهوده', ms: 'kebatilan, sia-sia'}
  },
  {
    arabic: 'عَهْدٌ', translit: 'ʿahd', count: 95,
    meanings: { en: 'covenant, promise', bn: 'প্রতিশ্রুতি, চুক্তি', fr: 'pacte, promesse', id: 'janji, perjanjian', ur: 'عہد، وعدہ', tr: 'ahit, söz', ar: 'مِيثَاق' , zh: '契约，盟约', ja: '誓約、アフド', hi: 'अहद, वादा', es: 'pacto, promesa', ru: 'завет, обещание', de: 'Bund, Versprechen', fa: 'پیمان، وعده', ms: 'perjanjian, janji'}
  },
  {
    arabic: 'وَحْيٌ', translit: 'waḥy', count: 78,
    meanings: { en: 'revelation, inspiration', bn: 'ওহী, প্রত্যাদেশ', fr: 'révélation', id: 'wahyu', ur: 'وحی', tr: 'vahiy', ar: 'إِلْهَامٌ إِلَهِيّ' , zh: '启示，天启', ja: 'ワヒー、啓示', hi: 'वह्य, इल्हाम', es: 'revelación, inspiración', ru: 'откровение, внушение', de: 'Offenbarung, Eingebung', fa: 'وحی، الهام', ms: 'wahyu, ilham'}
  },
  {
    arabic: 'نِعْمَةٌ', translit: 'niʿmah', count: 34,
    meanings: { en: 'blessing, favor', bn: 'নিয়ামত, আশীর্বাদ', fr: 'bienfait, faveur', id: 'nikmat', ur: 'نعمت', tr: 'nimet, lütuf', ar: 'إِنْعَام' , zh: '恩赐，恩德', ja: '恩恵、ニウマ', hi: 'नेमत, एहसान', es: 'gracia, favor', ru: 'благодеяние, милость', de: 'Gabe, Gunst', fa: 'نعمت، لطف', ms: 'nikmat, kurnia'}
  },
  {
    arabic: 'حَمْدٌ', translit: 'ḥamd', count: 68,
    meanings: { en: 'praise, thanksgiving', bn: 'প্রশংসা, হামদ', fr: 'louange', id: 'pujian, alhamdulillah', ur: 'حمد، تعریف', tr: 'hamd, şükür', ar: 'ثَنَاءٌ عَلَى اللَّه' , zh: '赞美，颂扬', ja: 'ハムド、賛美', hi: 'तारीफ़, शुक्र', es: 'alabanza, acción de gracias', ru: 'хвала, благодарение', de: 'Lob, Dank', fa: 'ستایش، سپاس', ms: 'pujian, kesyukuran'}
  },
  {
    arabic: 'حَسَنَةٌ', translit: 'ḥasanah', count: 167,
    meanings: { en: 'good deed, blessing', bn: 'সৎকাজ, হাসানাহ', fr: 'bonne action, bénédiction', id: 'amal baik, kebaikan', ur: 'نیکی، بھلائی', tr: 'iyilik, hasene', ar: 'عَمَلٌ صَالِح' , zh: '善行，赐福', ja: '善行、ハサナ', hi: 'नेकी, भलाई', es: 'buena obra, bien', ru: 'доброе дело, благо', de: 'gute Tat, Segen', fa: 'کار نیک، نعمت', ms: 'kebaikan, nikmat'}
  },
  {
    arabic: 'فَوْزٌ', translit: 'fawz', count: 40,
    meanings: { en: 'success, triumph', bn: 'সাফল্য, মুক্তি', fr: 'succès, triomphe', id: 'keberhasilan, kemenangan', ur: 'کامیابی، نجات', tr: 'kurtuluş, zafer', ar: 'نَجَاح' , zh: '成功，胜利', ja: '成功、ファウズ', hi: 'कामयाबी, जीत', es: 'éxito, triunfo', ru: 'успех, торжество', de: 'Erfolg, Triumph', fa: 'کامیابی، پیروزی', ms: 'kejayaan, kemenangan'}
  },

  // ---- More high-frequency verbs ----
  {
    arabic: 'جَعَلَ', translit: 'jaʿala', count: 340,
    meanings: { en: 'he made, placed', bn: 'সে বানাল, রাখল', fr: 'il a fait, placé', id: 'dia menjadikan', ur: 'اس نے بنایا', tr: 'yaptı, kıldı', ar: 'صَيَّرَ' , zh: '他使，安置', ja: '彼は作った、定めた', hi: 'उसने बनाया, रखा', es: 'hizo, puso', ru: 'он сделал, поместил', de: 'er machte, setzte', fa: 'قرار داد، گذاشت', ms: 'dia menjadikan, meletakkan'}
  },
  {
    arabic: 'كَذَّبَ', translit: 'kadhdhaba', count: 280,
    meanings: { en: 'he denied, belied', bn: 'সে মিথ্যা প্রতিপন্ন করল', fr: 'il a démenti', id: 'dia mendustakan', ur: 'اس نے جھٹلایا', tr: 'yalanladı', ar: 'أَنْكَرَ وَكَذَّب' , zh: '他否认，斥为谎言', ja: '彼は嘘とした', hi: 'उसने झुठलाया, झूठा कहा', es: 'desmintió, negó', ru: 'он счёл ложью, отверг', de: 'er leugnete, erklärte für Lüge', fa: 'تکذیب کرد، دروغ شمرد', ms: 'dia mengingkari, mendustakan'}
  },
  {
    arabic: 'أَخَذَ', translit: 'akhadha', count: 270,
    meanings: { en: 'he took, seized', bn: 'সে নিল, ধরল', fr: 'il a pris, saisi', id: 'dia mengambil', ur: 'اس نے لیا، پکڑا', tr: 'aldı, yakaladı', ar: 'تَنَاوَلَ / أَمْسَكَ' , zh: '他拿取，抓住', ja: '彼は取った、捕らえた', hi: 'उसने लिया, पकड़ा', es: 'tomó, agarró', ru: 'он взял, схватил', de: 'er nahm, ergriff', fa: 'گرفت، فرو گرفت', ms: 'dia mengambil, menangkap'}
  },
  {
    arabic: 'أَرَادَ', translit: 'arāda', count: 140,
    meanings: { en: 'he wanted, willed', bn: 'সে চাইল', fr: 'il a voulu', id: 'dia menghendaki', ur: 'اس نے چاہا', tr: 'istedi, diledi', ar: 'شَاءَ' , zh: '他想要，意欲', ja: '彼は望んだ', hi: 'उसने चाहा, इरादा किया', es: 'quiso, deseó', ru: 'он хотел, пожелал', de: 'er wollte, beabsichtigte', fa: 'خواست، اراده کرد', ms: 'dia mahu, menghendaki'}
  },
  {
    arabic: 'عَبَدَ', translit: 'ʿabada', count: 140,
    meanings: { en: 'he worshipped', bn: 'সে ইবাদত করল', fr: 'il a adoré', id: 'dia menyembah', ur: 'اس نے عبادت کی', tr: 'ibadet etti, kulluk etti', ar: 'تَذَلَّلَ لِلَّه' , zh: '他崇拜', ja: '彼は崇拝した', hi: 'उसने इबादत की', es: 'adoró', ru: 'он поклонялся', de: 'er diente, betete an', fa: 'پرستید', ms: 'dia menyembah'}
  },
  {
    arabic: 'دَخَلَ', translit: 'dakhala', count: 125,
    meanings: { en: 'he entered', bn: 'সে প্রবেশ করল', fr: 'il est entré', id: 'dia masuk', ur: 'وہ داخل ہوا', tr: 'girdi', ar: 'وَلَجَ' , zh: '他进入', ja: '彼は入った', hi: 'वह दाख़िल हुआ', es: 'entró', ru: 'он вошёл', de: 'er trat ein', fa: 'وارد شد', ms: 'dia masuk'}
  },
  {
    arabic: 'رَزَقَ', translit: 'razaqa', count: 120,
    meanings: { en: 'he provided, sustained', bn: 'তিনি রিযিক দিলেন', fr: 'il a pourvu', id: 'dia memberi rezeki', ur: 'اس نے رزق دیا', tr: 'rızıklandırdı', ar: 'أَعْطَى الْقُوت' , zh: '他供给', ja: '彼は糧を与えた', hi: 'उसने रोज़ी दी, पाला', es: 'proveyó, sustentó', ru: 'он наделил, питал', de: 'er versorgte, unterhielt', fa: 'روزی داد، معاش داد', ms: 'dia memberi rezeki, menyara'}
  },
  {
    arabic: 'نَصَرَ', translit: 'naṣara', count: 120,
    meanings: { en: 'he helped, aided', bn: 'তিনি সাহায্য করলেন', fr: 'il a secouru', id: 'dia menolong', ur: 'اس نے مدد کی', tr: 'yardım etti', ar: 'أَعَانَ' , zh: '他援助', ja: '彼は助けた', hi: 'उसने मदद की, साथ दिया', es: 'ayudó, auxilió', ru: 'он помог, оказал поддержку', de: 'er half, unterstützte', fa: 'یاری کرد، کمک کرد', ms: 'dia menolong, membantu'}
  },
  {
    arabic: 'غَفَرَ', translit: 'ghafara', count: 95,
    meanings: { en: 'he forgave', bn: 'তিনি ক্ষমা করলেন', fr: 'il a pardonné', id: 'dia mengampuni', ur: 'اس نے بخشا', tr: 'bağışladı', ar: 'سَتَرَ الذَّنْب' , zh: '他饶恕', ja: '彼は赦した', hi: 'उसने माफ़ किया', es: 'perdonó', ru: 'он простил', de: 'er vergab', fa: 'آمرزید', ms: 'dia mengampunkan'}
  },
  {
    arabic: 'ضَرَبَ', translit: 'ḍaraba', count: 58,
    meanings: { en: 'he struck; set forth', bn: 'সে আঘাত করল; উপমা দিল', fr: 'il a frappé; proposé', id: 'dia memukul; membuat (perumpamaan)', ur: 'اس نے مارا؛ مثال دی', tr: 'vurdu; örnek verdi', ar: 'صَكَّ / أَوْرَدَ مَثَلًا' , zh: '他打；设（比喻）', ja: '彼は打った；例を挙げた', hi: 'उसने मारा; (मिसाल) बयान की', es: 'golpeó; propuso', ru: 'он ударил; привёл (притчу)', de: 'er schlug; prägte (ein Gleichnis)', fa: 'زد؛ (مثل) زد', ms: 'dia memukul; membuat (perumpamaan)'}
  },

  // ---- More high-frequency nouns ----
  {
    arabic: 'نَاسٌ', translit: 'nās', count: 240,
    meanings: { en: 'people, mankind', bn: 'মানুষ, লোকজন', fr: 'les gens, l’humanité', id: 'manusia', ur: 'لوگ، انسان', tr: 'insanlar', ar: 'الْبَشَر' , zh: '人们，人类', ja: '人々、人類', hi: 'लोग, इंसान', es: 'gente, humanidad', ru: 'люди, человечество', de: 'Menschen, Menschheit', fa: 'مردم، انسان‌ها', ms: 'manusia, umat manusia'}
  },
  {
    arabic: 'أَمْرٌ', translit: 'amr', count: 250,
    meanings: { en: 'command; matter', bn: 'আদেশ; বিষয়', fr: 'ordre; affaire', id: 'perintah; urusan', ur: 'حکم؛ معاملہ', tr: 'emir; iş', ar: 'حُكْمٌ / شَأْن' , zh: '命令；事务', ja: '命令；事柄', hi: 'हुक्म; मामला', es: 'orden; asunto', ru: 'повеление; дело', de: 'Befehl; Angelegenheit', fa: 'فرمان؛ کار', ms: 'perintah; urusan'}
  },
  {
    arabic: 'مَالٌ', translit: 'māl', count: 86,
    meanings: { en: 'wealth, property', bn: 'ধন-সম্পদ', fr: 'biens, richesse', id: 'harta', ur: 'مال، دولت', tr: 'mal, servet', ar: 'مَا يُمْلَك' , zh: '财产，财富', ja: '財産、富', hi: 'माल, दौलत', es: 'riqueza, bienes', ru: 'богатство, имущество', de: 'Besitz, Vermögen', fa: 'مال، دارایی', ms: 'harta, kekayaan'}
  },
  {
    arabic: 'بَيْتٌ', translit: 'bayt', count: 65,
    meanings: { en: 'house, home', bn: 'ঘর, গৃহ', fr: 'maison', id: 'rumah', ur: 'گھر', tr: 'ev', ar: 'مَسْكَن' , zh: '房屋，家', ja: '家', hi: 'घर, मकान', es: 'casa, hogar', ru: 'дом, жилище', de: 'Haus, Heim', fa: 'خانه، سرا', ms: 'rumah, kediaman'}
  },
  {
    arabic: 'عَدُوٌّ', translit: 'ʿaduww', count: 45,
    meanings: { en: 'enemy', bn: 'শত্রু', fr: 'ennemi', id: 'musuh', ur: 'دشمن', tr: 'düşman', ar: 'خَصْمٌ مُعَادٍ' , zh: '敌人', ja: '敵', hi: 'दुश्मन', es: 'enemigo', ru: 'враг', de: 'Feind', fa: 'دشمن', ms: 'musuh'}
  },
  {
    arabic: 'كَلِمَةٌ', translit: 'kalimah', count: 42,
    meanings: { en: 'word, statement', bn: 'শব্দ, কথা, কালিমা', fr: 'parole, mot', id: 'kata, kalimat', ur: 'کلمہ، بات', tr: 'kelime, söz', ar: 'لَفْظٌ ذُو مَعْنًى' , zh: '话语，词', ja: '言葉', hi: 'बात, कलिमा', es: 'palabra, declaración', ru: 'слово, изречение', de: 'Wort, Aussage', fa: 'کلمه، سخن', ms: 'kalimah, perkataan'}
  },
  {
    arabic: 'ذَنْبٌ', translit: 'dhanb', count: 39,
    meanings: { en: 'sin, offense', bn: 'পাপ, গুনাহ', fr: 'péché', id: 'dosa', ur: 'گناہ', tr: 'günah', ar: 'إِثْم' , zh: '罪过', ja: '罪', hi: 'गुनाह, क़ुसूर', es: 'pecado, falta', ru: 'грех, проступок', de: 'Sünde, Vergehen', fa: 'گناه، خطا', ms: 'dosa, kesalahan'}
  },
  {
    arabic: 'رُوحٌ', translit: 'rūḥ', count: 24,
    meanings: { en: 'spirit, soul', bn: 'রূহ, আত্মা', fr: 'esprit', id: 'roh', ur: 'روح', tr: 'ruh', ar: 'مَا بِهِ الْحَيَاة' , zh: '精神，灵', ja: '霊、魂', hi: 'रूह, जान', es: 'espíritu, alma', ru: 'дух, душа', de: 'Geist, Seele', fa: 'روح، جان', ms: 'roh, jiwa'}
  },
  {
    arabic: 'مَلِكٌ', translit: 'malik', count: 13,
    meanings: { en: 'king, sovereign', bn: 'রাজা, বাদশাহ', fr: 'roi', id: 'raja', ur: 'بادشاہ', tr: 'kral, hükümdar', ar: 'ذُو الْمُلْك' , zh: '国王，君主', ja: '王、君主', hi: 'बादशाह, हाकिम', es: 'rey, soberano', ru: 'царь, властелин', de: 'König, Herrscher', fa: 'پادشاه، فرمانروا', ms: 'raja, penguasa'}
  },

  // ---- Divine names & key adjectives ----
  {
    arabic: 'عَظِيمٌ', translit: 'ʿaẓīm', count: 107,
    meanings: { en: 'great, mighty', bn: 'মহান, বিরাট', fr: 'immense, grandiose', id: 'agung, besar', ur: 'عظیم، بہت بڑا', tr: 'büyük, azametli', ar: 'كَبِيرُ الشَّأْن' , zh: '伟大的', ja: '偉大な', hi: 'बड़ा, अज़ीम', es: 'grande, inmenso', ru: 'великий, могучий', de: 'gewaltig, mächtig', fa: 'بزرگ، باعظمت', ms: 'agung, besar'}
  },
  {
    arabic: 'عَزِيزٌ', translit: 'ʿazīz', count: 99,
    meanings: { en: 'mighty, Almighty', bn: 'পরাক্রমশালী, সম্মানিত', fr: 'puissant, tout-puissant', id: 'Maha Perkasa', ur: 'زبردست، غالب', tr: 'aziz, üstün', ar: 'قَوِيٌّ غَالِب' , zh: '万能的，尊贵的', ja: '偉力ある者', hi: 'ताक़तवर, सब पर ग़ालिब', es: 'poderoso, el Poderoso', ru: 'могущественный, Могущественный', de: 'mächtig, Allmächtiger', fa: 'نیرومند، شکست‌ناپذیر', ms: 'perkasa, Maha Perkasa'}
  },
  {
    arabic: 'حَكِيمٌ', translit: 'ḥakīm', count: 97,
    meanings: { en: 'wise, All-Wise', bn: 'প্রজ্ঞাময়, হাকীম', fr: 'sage', id: 'Maha Bijaksana', ur: 'حکمت والا، حکیم', tr: 'hikmet sahibi, hakîm', ar: 'ذُو الْحِكْمَة' , zh: '至睿的，明智的', ja: '英明な者', hi: 'समझदार, हिकमत वाला', es: 'sabio, el Sabio', ru: 'мудрый, Мудрый', de: 'weise, Allweiser', fa: 'دانا به حکمت، حکیم', ms: 'bijaksana, Maha Bijaksana'}
  },
  {
    arabic: 'سَمِيعٌ', translit: 'samīʿ', count: 47,
    meanings: { en: 'All-Hearing', bn: 'সর্বশ্রোতা', fr: 'qui entend tout', id: 'Maha Mendengar', ur: 'سب سننے والا', tr: 'her şeyi işiten', ar: 'كَثِيرُ السَّمْع' , zh: '全聪的', ja: '全聴者', hi: 'सब कुछ सुनने वाला', es: 'el que todo lo oye', ru: 'Всеслышащий', de: 'Allhörender', fa: 'شنوا', ms: 'Maha Mendengar'}
  },
  {
    arabic: 'بَصِيرٌ', translit: 'baṣīr', count: 42,
    meanings: { en: 'All-Seeing', bn: 'সর্বদ্রষ্টা', fr: 'qui voit tout', id: 'Maha Melihat', ur: 'سب دیکھنے والا', tr: 'her şeyi gören', ar: 'كَثِيرُ الْبَصَر' , zh: '全明的', ja: '全視者', hi: 'सब कुछ देखने वाला', es: 'el que todo lo ve', ru: 'Всевидящий', de: 'Allsehender', fa: 'بینا', ms: 'Maha Melihat'}
  },
  {
    arabic: 'قَدِيرٌ', translit: 'qadīr', count: 45,
    meanings: { en: 'All-Powerful, able', bn: 'সর্বশক্তিমান', fr: 'tout-puissant, capable', id: 'Maha Kuasa', ur: 'قادر، ہر چیز پر قادر', tr: 'her şeye gücü yeten', ar: 'قَادِرٌ عَلَى كُلِّ شَيْء' , zh: '全能的', ja: '全能者', hi: 'हर चीज़ पर क़ादिर, क़ुदरत वाला', es: 'Todopoderoso, capaz', ru: 'Всемогущий, способный', de: 'Allmächtiger, fähig', fa: 'توانا بر همه چیز، توانا', ms: 'Maha Berkuasa, berkuasa'}
  },

  // ---- Additional high-frequency verbs ----
  {
    arabic: 'ذَكَرَ', translit: 'dhakara', count: 290,
    meanings: { en: 'he remembered, mentioned', bn: 'সে স্মরণ করল, উল্লেখ করল', fr: 'il a rappelé, mentionné', id: 'dia mengingat, menyebut', ur: 'اس نے یاد کیا، ذکر کیا', tr: 'andı, zikretti', ar: 'اسْتَحْضَرَ' , zh: '他记念，提及', ja: '彼は思い起こした、唱えた', hi: 'उसने याद किया, ज़िक्र किया', es: 'recordó, mencionó', ru: 'он помянул, упомянул', de: 'er gedachte, erwähnte', fa: 'یاد کرد، ذکر کرد', ms: 'dia mengingati, menyebut'}
  },
  {
    arabic: 'أَمَرَ', translit: 'amara', count: 250,
    meanings: { en: 'he commanded, ordered', bn: 'সে আদেশ করল', fr: 'il a ordonné', id: 'dia memerintahkan', ur: 'اس نے حکم دیا', tr: 'emretti', ar: 'أَوْصَى وَأَلْزَمَ' , zh: '他命令', ja: '彼は命じた', hi: 'उसने हुक्म दिया, आदेश दिया', es: 'ordenó, mandó', ru: 'он повелел, приказал', de: 'er befahl, gebot', fa: 'فرمان داد، دستور داد', ms: 'dia memerintahkan, menyuruh'}
  },
  {
    arabic: 'حَكَمَ', translit: 'ḥakama', count: 210,
    meanings: { en: 'he judged, ruled', bn: 'সে বিচার করল, শাসন করল', fr: 'il a jugé', id: 'dia memutuskan, menghakimi', ur: 'اس نے فیصلہ کیا', tr: 'hükmetti', ar: 'قَضَى وَفَصَلَ' , zh: '他裁决，判决', ja: '彼は裁いた', hi: 'उसने फ़ैसला किया, हुकूमत की', es: 'juzgó, gobernó', ru: 'он судил, правил', de: 'er urteilte, entschied', fa: 'داوری کرد، حکم کرد', ms: 'dia menghukum, memutuskan'}
  },
  {
    arabic: 'نَزَلَ', translit: 'nazala', count: 290,
    meanings: { en: 'he descended, came down', bn: 'সে অবতরণ করল, নামল', fr: 'il est descendu', id: 'dia turun', ur: 'وہ اترا', tr: 'indi', ar: 'هَبَطَ' , zh: '他降下', ja: '彼は降りた', hi: 'वह उतरा, नीचे आया', es: 'descendió, bajó', ru: 'он сошёл, спустился', de: 'er stieg herab, kam herab', fa: 'فرود آمد، پایین آمد', ms: 'dia turun, menurun'}
  },
  {
    arabic: 'كَتَبَ', translit: 'kataba', count: 60,
    meanings: { en: 'he wrote, prescribed', bn: 'সে লিখল, নির্ধারণ করল', fr: 'il a écrit, prescrit', id: 'dia menulis, menetapkan', ur: 'اس نے لکھا، فرض کیا', tr: 'yazdı, farz kıldı', ar: 'رَقَمَ وَفَرَضَ' , zh: '他书写，规定', ja: '彼は書いた、定めた', hi: 'उसने लिखा, फ़र्ज़ किया', es: 'escribió, prescribió', ru: 'он написал, предписал', de: 'er schrieb, schrieb vor', fa: 'نوشت، مقرر کرد', ms: 'dia menulis, mewajibkan'}
  },
  {
    arabic: 'هَدَىٰ', translit: 'hadā', count: 175,
    meanings: { en: 'he guided', bn: 'সে পথ দেখাল, হেদায়েত দিল', fr: 'il a guidé', id: 'dia memberi petunjuk', ur: 'اس نے ہدایت دی', tr: 'doğru yola iletti', ar: 'أَرْشَدَ' , zh: '他引导', ja: '彼は導いた', hi: 'उसने हिदायत दी', es: 'guio', ru: 'он повёл прямым путём', de: 'er leitete recht', fa: 'هدایت کرد', ms: 'dia memberi petunjuk'}
  },
  {
    arabic: 'دَعَا', translit: 'daʿā', count: 170,
    meanings: { en: 'he called, supplicated', bn: 'সে ডাকল, দোয়া করল', fr: 'il a invoqué, appelé', id: 'dia menyeru, berdoa', ur: 'اس نے پکارا، دعا کی', tr: 'çağırdı, dua etti', ar: 'نَادَى وَطَلَبَ' , zh: '他呼唤，祈祷', ja: '彼は呼んだ、祈った', hi: 'उसने पुकारा, दुआ की', es: 'llamó, suplicó', ru: 'он позвал, взмолился', de: 'er rief, flehte', fa: 'خواند، دعا کرد', ms: 'dia menyeru, berdoa'}
  },
  {
    arabic: 'رَأَىٰ', translit: 'raʾā', count: 320,
    meanings: { en: 'he saw', bn: 'সে দেখল', fr: 'il a vu', id: 'dia melihat', ur: 'اس نے دیکھا', tr: 'gördü', ar: 'أَبْصَرَ' , zh: '他看见', ja: '彼は見た', hi: 'उसने देखा', es: 'vio', ru: 'он увидел', de: 'er sah', fa: 'دید', ms: 'dia melihat'}
  },
  {
    arabic: 'اِتَّبَعَ', translit: 'ittabaʿa', count: 170,
    meanings: { en: 'he followed', bn: 'সে অনুসরণ করল', fr: 'il a suivi', id: 'dia mengikuti', ur: 'اس نے پیروی کی', tr: 'uydu, tabi oldu', ar: 'سَارَ خَلْفَهُ' , zh: '他追随，遵从', ja: '彼は従った', hi: 'उसने पैरवी की', es: 'siguió', ru: 'он последовал', de: 'er folgte', fa: 'پیروی کرد', ms: 'dia mengikut'}
  },
  {
    arabic: 'فَعَلَ', translit: 'faʿala', count: 110,
    meanings: { en: 'he did, acted', bn: 'সে করল', fr: 'il a fait', id: 'dia berbuat', ur: 'اس نے کیا', tr: 'yaptı, işledi', ar: 'صَنَعَ' , zh: '他做，行', ja: '彼は行った', hi: 'उसने किया, अमल किया', es: 'hizo, actuó', ru: 'он сделал, поступил', de: 'er tat, handelte', fa: 'کرد، انجام داد', ms: 'dia berbuat, bertindak'}
  },

  // ---- Additional high-frequency nouns & concepts ----
  {
    arabic: 'نُورٌ', translit: 'nūr', count: 43,
    meanings: { en: 'light', bn: 'আলো, নূর', fr: 'lumière', id: 'cahaya', ur: 'روشنی، نور', tr: 'nur, ışık', ar: 'ضِيَاء' , zh: '光，光明', ja: '光', hi: 'रोशनी, नूर', es: 'luz', ru: 'свет', de: 'Licht', fa: 'نور', ms: 'cahaya'}
  },
  {
    arabic: 'حِسَابٌ', translit: 'ḥisāb', count: 39,
    meanings: { en: 'reckoning, account', bn: 'হিসাব, গণনা', fr: 'compte, reddition', id: 'perhitungan, hisab', ur: 'حساب', tr: 'hesap', ar: 'إِحْصَاءٌ وَمُحَاسَبَة' , zh: '清算，账目', ja: '清算、勘定', hi: 'हिसाब, लेखा-जोखा', es: 'cuenta, rendición de cuentas', ru: 'расчёт, отчёт', de: 'Abrechnung, Rechenschaft', fa: 'حساب، حسابرسی', ms: 'hisab, perhitungan'}
  },
  {
    arabic: 'مِيزَانٌ', translit: 'mīzān', count: 16,
    meanings: { en: 'balance, scale', bn: 'দাঁড়িপাল্লা, তুলাদণ্ড', fr: 'balance', id: 'timbangan, neraca', ur: 'ترازو، میزان', tr: 'terazi, mizan', ar: 'آلَةُ الْوَزْن' , zh: '天秤，衡器', ja: '秤、天秤', hi: 'तराज़ू, मीज़ान', es: 'balanza, pesa', ru: 'весы, мера', de: 'Waage, Gleichgewicht', fa: 'ترازو، میزان', ms: 'neraca, timbangan'}
  },
  {
    arabic: 'تَقْوَىٰ', translit: 'taqwā', count: 250,
    meanings: { en: 'piety, God-consciousness', bn: 'তাকওয়া, খোদাভীতি', fr: 'piété, crainte de Dieu', id: 'takwa', ur: 'تقویٰ، پرہیزگاری', tr: 'takva', ar: 'خَشْيَةُ اللَّه' , zh: '敬畏，虔诚', ja: 'タクワー、敬虔', hi: 'परहेज़गारी, अल्लाह का डर', es: 'piedad, temor de Allah', ru: 'благочестие, богобоязненность', de: 'Frömmigkeit, Gottesfurcht', fa: 'پرهیزگاری، تقوا', ms: 'takwa, kesedaran terhadap Allah'}
  },
  {
    arabic: 'أَجْرٌ', translit: 'ajr', count: 105,
    meanings: { en: 'reward, wage', bn: 'পুরস্কার, প্রতিদান', fr: 'récompense, salaire', id: 'pahala, upah', ur: 'اجر، بدلہ', tr: 'ecir, mükâfat', ar: 'ثَوَابٌ وَجَزَاء' , zh: '报酬，回赐', ja: '報酬、報い', hi: 'अज्र, मज़दूरी', es: 'recompensa, salario', ru: 'награда, плата', de: 'Lohn, Entgelt', fa: 'پاداش، مزد', ms: 'pahala, upah'}
  },
  {
    arabic: 'بَرَكَةٌ', translit: 'barakah', count: 32,
    meanings: { en: 'blessing, abundance', bn: 'বরকত, কল্যাণ', fr: 'bénédiction', id: 'berkah', ur: 'برکت', tr: 'bereket', ar: 'نَمَاءٌ وَخَيْر' , zh: '福佑，吉庆', ja: '祝福、バラカ', hi: 'बरकत, बहुतायत', es: 'bendición, abundancia', ru: 'благословение, изобилие', de: 'Segen, Fülle', fa: 'برکت، فراوانی', ms: 'keberkatan, kelimpahan'}
  },
  {
    arabic: 'دِينٌ', translit: 'dīn', count: 95,
    meanings: { en: 'religion; judgment', bn: 'দ্বীন, ধর্ম; বিচার', fr: 'religion ; jugement', id: 'agama; pembalasan', ur: 'دین؛ جزا', tr: 'din; hesap günü', ar: 'مِلَّةٌ / جَزَاء' , zh: '宗教；报应', ja: '宗教；審判', hi: 'दीन; बदला', es: 'religión; juicio', ru: 'религия; воздаяние', de: 'Religion; Gericht', fa: 'دین؛ جزا', ms: 'agama; pembalasan'}
  },
  {
    arabic: 'دُنْيَا', translit: 'dunyā', count: 115,
    meanings: { en: 'the world, this life', bn: 'দুনিয়া, পার্থিব জীবন', fr: 'le bas monde, vie présente', id: 'dunia', ur: 'دنیا', tr: 'dünya', ar: 'الْحَيَاةُ الْقَرِيبَة' , zh: '今世，尘世', ja: '現世、この世', hi: 'दुनिया, यह ज़िंदगी', es: 'el mundo, esta vida', ru: 'мир, земная жизнь', de: 'die Welt, das Diesseits', fa: 'دنیا، این زندگی', ms: 'dunia, kehidupan ini'}
  },
  {
    arabic: 'آخِرَةٌ', translit: 'ākhirah', count: 115,
    meanings: { en: 'the Hereafter', bn: 'আখিরাত, পরকাল', fr: 'l’au-delà', id: 'akhirat', ur: 'آخرت', tr: 'ahiret', ar: 'الدَّارُ الْبَاقِيَة' , zh: '后世', ja: '来世', hi: 'आख़िरत', es: 'la otra vida', ru: 'Последняя жизнь', de: 'das Jenseits', fa: 'آخرت', ms: 'akhirat'}
  },
  {
    arabic: 'عِلْمٌ', translit: 'ʿilm', count: 105,
    meanings: { en: 'knowledge', bn: 'জ্ঞান, ইলম', fr: 'savoir, science', id: 'ilmu, pengetahuan', ur: 'علم', tr: 'ilim, bilgi', ar: 'مَعْرِفَة' , zh: '知识，学问', ja: '知識、学', hi: 'इल्म', es: 'conocimiento', ru: 'знание', de: 'Wissen', fa: 'دانش', ms: 'ilmu'}
  },
  {
    arabic: 'هُدًى', translit: 'hudā', count: 85,
    meanings: { en: 'guidance', bn: 'হেদায়েত, পথনির্দেশ', fr: 'guidance, direction', id: 'petunjuk, hidayah', ur: 'ہدایت', tr: 'hidayet', ar: 'رَشَاد' , zh: '引导，正道', ja: '導き', hi: 'हिदायत', es: 'guía', ru: 'верное руководство', de: 'Rechtleitung', fa: 'هدایت', ms: 'petunjuk'}
  },

  // ---- Additional divine names & key adjectives ----
  {
    arabic: 'رَحْمَٰنٌ', translit: 'raḥmān', count: 57,
    meanings: { en: 'the Most Gracious', bn: 'পরম করুণাময়, রহমান', fr: 'le Tout Miséricordieux', id: 'Maha Pengasih', ur: 'رحمٰن، بڑا مہربان', tr: 'Rahman', ar: 'وَاسِعُ الرَّحْمَة' , zh: '至仁的', ja: '慈悲あまねき者', hi: 'बेहद मेहरबान', es: 'el Compasivo', ru: 'Милостивый', de: 'der Allerbarmer', fa: 'رحمان، بسیار بخشنده', ms: 'Yang Maha Pemurah'}
  },
  {
    arabic: 'رَحِيمٌ', translit: 'raḥīm', count: 115,
    meanings: { en: 'the Most Merciful', bn: 'পরম দয়ালু, রহীম', fr: 'le Très Miséricordieux', id: 'Maha Penyayang', ur: 'رحیم، نہایت رحم والا', tr: 'Rahim', ar: 'دَائِمُ الرَّحْمَة' , zh: '至慈的', ja: '慈愛深き者', hi: 'निहायत रहम करने वाला', es: 'el Misericordioso', ru: 'Милосердный', de: 'der Barmherzige', fa: 'رحیم، بسیار مهربان', ms: 'Yang Maha Mengasihani'}
  },
  {
    arabic: 'غَفُورٌ', translit: 'ghafūr', count: 91,
    meanings: { en: 'the Most Forgiving', bn: 'পরম ক্ষমাশীল, গাফূর', fr: 'le Très Pardonneur', id: 'Maha Pengampun', ur: 'غفور، بہت بخشنے والا', tr: 'Gafur, çok bağışlayan', ar: 'كَثِيرُ الْمَغْفِرَة' , zh: '至赦的', ja: '寛大に赦す者', hi: 'बहुत बख़्शने वाला', es: 'el Perdonador', ru: 'Прощающий', de: 'der Allvergebende', fa: 'بسیار آمرزنده', ms: 'Yang Maha Pengampun'}
  },
  {
    arabic: 'كَرِيمٌ', translit: 'karīm', count: 27,
    meanings: { en: 'noble, generous', bn: 'সম্মানিত, উদার, দয়ালু', fr: 'noble, généreux', id: 'mulia, pemurah', ur: 'کریم، معزز، سخی', tr: 'kerîm, cömert', ar: 'شَرِيفٌ مِعْطَاء' , zh: '尊贵的，慷慨的', ja: '高貴な、寛大な', hi: 'इज़्ज़त वाला, करम वाला', es: 'noble, generoso', ru: 'благородный, щедрый', de: 'edel, freigebig', fa: 'بزرگوار، بخشنده', ms: 'mulia, pemurah'}
  },

  // ---- Round 3: more high-frequency verbs ----
  {
    arabic: 'ظَلَمَ', translit: 'ẓalama', count: 200,
    meanings: { en: 'he wronged, oppressed', bn: 'সে জুলুম করল', fr: 'il a été injuste', id: 'dia menzalimi', ur: 'اس نے ظلم کیا', tr: 'zulmetti', ar: 'جَارَ وَاعْتَدَى', zh: '他不义，压迫', ja: '彼は不正を行った', hi: 'उसने ज़ुल्म किया, सताया', es: 'fue injusto, oprimió', ru: 'он поступил несправедливо, притеснил', de: 'er tat Unrecht, unterdrückte', fa: 'ستم کرد، ظلم کرد', ms: 'dia menzalimi, menindas'}
  },
  {
    arabic: 'شَكَرَ', translit: 'shakara', count: 75,
    meanings: { en: 'he was grateful, thanked', bn: 'সে কৃতজ্ঞতা প্রকাশ করল', fr: 'il a remercié', id: 'dia bersyukur', ur: 'اس نے شکر کیا', tr: 'şükretti', ar: 'حَمِدَ وَامْتَنَّ', zh: '他感恩', ja: '彼は感謝した', hi: 'उसने शुक्र किया, एहसान माना', es: 'agradeció, dio gracias', ru: 'он был благодарен, поблагодарил', de: 'er war dankbar, dankte', fa: 'سپاس گزارد، شکر کرد', ms: 'dia bersyukur, berterima kasih'}
  },
  {
    arabic: 'صَبَرَ', translit: 'ṣabara', count: 100,
    meanings: { en: 'he was patient, endured', bn: 'সে ধৈর্য ধরল', fr: 'il a patienté', id: 'dia bersabar', ur: 'اس نے صبر کیا', tr: 'sabretti', ar: 'تَحَمَّلَ وَثَبَتَ', zh: '他忍耐', ja: '彼は忍耐した', hi: 'उसने सब्र किया, बर्दाश्त किया', es: 'tuvo paciencia, soportó', ru: 'он терпел, проявил стойкость', de: 'er war geduldig, harrte aus', fa: 'صبر کرد، شکیبایی ورزید', ms: 'dia bersabar, menahan diri'}
  },
  {
    arabic: 'تَابَ', translit: 'tāba', count: 87,
    meanings: { en: 'he repented, turned back', bn: 'সে তওবা করল', fr: 'il s’est repenti', id: 'dia bertaubat', ur: 'اس نے توبہ کی', tr: 'tövbe etti', ar: 'رَجَعَ إِلَى اللَّه', zh: '他悔过', ja: '彼は悔い改めた', hi: 'उसने तौबा की, पलटा', es: 'se arrepintió, volvió', ru: 'он покаялся, обратился', de: 'er bereute, kehrte um', fa: 'توبه کرد، بازگشت', ms: 'dia bertaubat, kembali'}
  },
  {
    arabic: 'فَتَحَ', translit: 'fataha', count: 38,
    meanings: { en: 'he opened; granted victory', bn: 'সে খুলল; বিজয় দিল', fr: 'il a ouvert ; accordé la victoire', id: 'dia membuka; memberi kemenangan', ur: 'اس نے کھولا؛ فتح دی', tr: 'açtı; fetih verdi', ar: 'حَلَّ وَنَصَرَ', zh: '他开启；赐胜利', ja: '彼は開いた；勝利を与えた', hi: 'उसने खोला; जीत दी', es: 'abrió; concedió la victoria', ru: 'он открыл; даровал победу', de: 'er öffnete; verlieh den Sieg', fa: 'گشود؛ پیروزی داد', ms: 'dia membuka; memberi kemenangan'}
  },
  {
    arabic: 'وَعَدَ', translit: 'waʿada', count: 70,
    meanings: { en: 'he promised', bn: 'সে প্রতিশ্রুতি দিল', fr: 'il a promis', id: 'dia menjanjikan', ur: 'اس نے وعدہ کیا', tr: 'söz verdi, vaat etti', ar: 'قَطَعَ عَهْدًا', zh: '他许诺', ja: '彼は約束した', hi: 'उसने वादा किया', es: 'prometió', ru: 'он обещал', de: 'er versprach', fa: 'وعده داد', ms: 'dia berjanji'}
  },
  {
    arabic: 'خَافَ', translit: 'khāfa', count: 120,
    meanings: { en: 'he feared', bn: 'সে ভয় পেল', fr: 'il a craint', id: 'dia takut', ur: 'وہ ڈرا', tr: 'korktu', ar: 'خَشِيَ', zh: '他害怕', ja: '彼は恐れた', hi: 'वह डरा', es: 'temió', ru: 'он боялся', de: 'er fürchtete', fa: 'ترسید', ms: 'dia takut'}
  },
  {
    arabic: 'رَجَعَ', translit: 'rajaʿa', count: 105,
    meanings: { en: 'he returned', bn: 'সে ফিরে এল', fr: 'il est revenu', id: 'dia kembali', ur: 'وہ لوٹا', tr: 'döndü', ar: 'عَادَ', zh: '他返回', ja: '彼は戻った', hi: 'वह लौटा', es: 'volvió', ru: 'он вернулся', de: 'er kehrte zurück', fa: 'بازگشت', ms: 'dia kembali'}
  },
  {
    arabic: 'قَتَلَ', translit: 'qatala', count: 93,
    meanings: { en: 'he killed', bn: 'সে হত্যা করল', fr: 'il a tué', id: 'dia membunuh', ur: 'اس نے قتل کیا', tr: 'öldürdü', ar: 'أَزْهَقَ الرُّوح', zh: '他杀害', ja: '彼は殺した', hi: 'उसने क़त्ल किया', es: 'mató', ru: 'он убил', de: 'er tötete', fa: 'کشت', ms: 'dia membunuh'}
  },
  {
    arabic: 'خَرَجَ', translit: 'kharaja', count: 180,
    meanings: { en: 'he went out, emerged', bn: 'সে বেরিয়ে এল', fr: 'il est sorti', id: 'dia keluar', ur: 'وہ نکلا', tr: 'çıktı', ar: 'ضِدُّ دَخَلَ', zh: '他出去', ja: '彼は出た', hi: 'वह निकला, बाहर आया', es: 'salió, surgió', ru: 'он вышел, появился', de: 'er ging hinaus, trat hervor', fa: 'بیرون رفت، بیرون آمد', ms: 'dia keluar, muncul'}
  },
  {
    arabic: 'نَظَرَ', translit: 'naẓara', count: 110,
    meanings: { en: 'he looked, gazed', bn: 'সে তাকাল', fr: 'il a regardé', id: 'dia memandang', ur: 'اس نے دیکھا', tr: 'baktı', ar: 'أَبْصَرَ وَتَأَمَّلَ', zh: '他观看', ja: '彼は見つめた', hi: 'उसने देखा, नज़र डाली', es: 'miró, contempló', ru: 'он посмотрел, взглянул', de: 'er schaute, blickte', fa: 'نگریست، نگاه کرد', ms: 'dia melihat, memandang'}
  },

  // ---- Round 3: more high-frequency nouns & concepts ----
  {
    arabic: 'ثَوَابٌ', translit: 'thawāb', count: 13,
    meanings: { en: 'reward, recompense', bn: 'সওয়াব, প্রতিদান', fr: 'récompense', id: 'pahala, ganjaran', ur: 'ثواب، بدلہ', tr: 'sevap, mükâfat', ar: 'جَزَاءُ الْخَيْر', zh: '回赐，报酬', ja: '報奨、サワーブ', hi: 'सवाब, बदला', es: 'recompensa, retribución', ru: 'награда, воздаяние', de: 'Lohn, Vergeltung', fa: 'پاداش، جزا', ms: 'ganjaran, balasan'}
  },
  {
    arabic: 'شَيْطَانٌ', translit: 'shayṭān', count: 88,
    meanings: { en: 'Satan, devil', bn: 'শয়তান', fr: 'Satan, diable', id: 'setan', ur: 'شیطان', tr: 'şeytan', ar: 'إِبْلِيسُ الْمُضِلّ', zh: '恶魔，撒旦', ja: '悪魔、シャイターン', hi: 'शैतान, इबलीस', es: 'Satanás, demonio', ru: 'шайтан, дьявол', de: 'Satan, Teufel', fa: 'شیطان، اهریمن', ms: 'syaitan, iblis'}
  },
  {
    arabic: 'عَدْلٌ', translit: 'ʿadl', count: 28,
    meanings: { en: 'justice, fairness', bn: 'ন্যায়বিচার, ইনসাফ', fr: 'justice, équité', id: 'keadilan', ur: 'عدل، انصاف', tr: 'adalet', ar: 'إِنْصَافٌ وَقِسْط', zh: '公正，公道', ja: '正義、公正', hi: 'इंसाफ़, बराबरी', es: 'justicia, equidad', ru: 'справедливость, беспристрастность', de: 'Gerechtigkeit, Fairness', fa: 'عدالت، انصاف', ms: 'keadilan, kesaksamaan'}
  },
  {
    arabic: 'مِيثَاقٌ', translit: 'mīthāq', count: 25,
    meanings: { en: 'covenant, solemn pledge', bn: 'অঙ্গীকার, দৃঢ় প্রতিশ্রুতি', fr: 'pacte solennel', id: 'perjanjian teguh', ur: 'پختہ عہد، میثاق', tr: 'sağlam söz, misak', ar: 'عَهْدٌ مُؤَكَّد', zh: '盟约，坚约', ja: '堅い誓約、ミーサーク', hi: 'अहद, पक्का वादा', es: 'pacto, compromiso solemne', ru: 'завет, торжественное обязательство', de: 'Bund, feierliches Versprechen', fa: 'پیمان، پیمان استوار', ms: 'perjanjian, ikatan janji yang teguh'}
  },
  {
    arabic: 'صَدَقَةٌ', translit: 'ṣadaqah', count: 24,
    meanings: { en: 'charity, alms', bn: 'সদকা, দান', fr: 'aumône', id: 'sedekah', ur: 'صدقہ، خیرات', tr: 'sadaka', ar: 'عَطَاءٌ لِلَّه', zh: '施舍，赈济', ja: '施し、サダカ', hi: 'सदक़ा, ख़ैरात', es: 'caridad, limosna', ru: 'милостыня, подаяние', de: 'Spende, Almosen', fa: 'صدقه، انفاق', ms: 'sedekah, derma'}
  },
  {
    arabic: 'عَرْشٌ', translit: 'ʿarsh', count: 26,
    meanings: { en: 'throne (of God)', bn: 'আরশ, সিংহাসন', fr: 'trône', id: 'Arasy, singgasana', ur: 'عرش', tr: 'arş', ar: 'سَرِيرُ الْمُلْك', zh: '宝座', ja: '御座、アルシュ', hi: 'अर्श (अल्लाह का)', es: 'trono (de Allah)', ru: 'Трон (Аллаха)', de: 'Thron (Allahs)', fa: 'عرش (الله)', ms: 'Arasy (Allah)'}
  },
  {
    arabic: 'رِيحٌ', translit: 'rīḥ', count: 29,
    meanings: { en: 'wind', bn: 'বাতাস, বায়ু', fr: 'vent', id: 'angin', ur: 'ہوا', tr: 'rüzgâr', ar: 'هَوَاءٌ مُتَحَرِّك', zh: '风', ja: '風', hi: 'हवा', es: 'viento', ru: 'ветер', de: 'Wind', fa: 'باد', ms: 'angin'}
  },
  {
    arabic: 'إِسْلَامٌ', translit: 'islām', count: 8,
    meanings: { en: 'submission to God, Islam', bn: 'ইসলাম, আত্মসমর্পণ', fr: 'soumission à Dieu, Islam', id: 'Islam, kepasrahan', ur: 'اسلام، فرمانبرداری', tr: 'İslam, teslimiyet', ar: 'الِاسْتِسْلَامُ لِلَّه', zh: '伊斯兰，顺服', ja: 'イスラーム、服従', hi: 'अल्लाह के आगे झुक जाना, इस्लाम', es: 'sumisión a Allah, islam', ru: 'покорность Аллаху, ислам', de: 'Hingabe an Allah, Islam', fa: 'تسلیم در برابر الله، اسلام', ms: 'penyerahan diri kepada Allah, Islam'}
  },

  // ---- Round 3: key adjectives & descriptors ----
  {
    arabic: 'ظَالِمٌ', translit: 'ẓālim', count: 130,
    meanings: { en: 'wrongdoer, oppressor', bn: 'জালিম, অত্যাচারী', fr: 'injuste, oppresseur', id: 'orang zalim', ur: 'ظالم', tr: 'zalim', ar: 'مُعْتَدٍ جَائِر', zh: '不义者，压迫者', ja: '不正を行う者', hi: 'ज़ालिम, सताने वाला', es: 'injusto, opresor', ru: 'несправедливый, угнетатель', de: 'Ungerechter, Unterdrücker', fa: 'ستمکار، ستمگر', ms: 'orang zalim, penindas'}
  },
  {
    arabic: 'مُنَافِقٌ', translit: 'munāfiq', count: 37,
    meanings: { en: 'hypocrite', bn: 'মুনাফিক, কপট', fr: 'hypocrite', id: 'munafik, orang munafik', ur: 'منافق', tr: 'münafık, iki yüzlü', ar: 'مُظْهِرٌ خِلَافَ مَا يُبْطِن', zh: '伪信者', ja: '偽信者、ムナーフィク', hi: 'मुनाफ़िक़', es: 'hipócrita', ru: 'лицемер', de: 'Heuchler', fa: 'منافق', ms: 'munafik'}
  },
  {
    arabic: 'كَبِيرٌ', translit: 'kabīr', count: 40,
    meanings: { en: 'great, big', bn: 'বড়, মহান', fr: 'grand', id: 'besar, agung', ur: 'بڑا، عظیم', tr: 'büyük', ar: 'ضِدُّ الصَّغِير', zh: '大的，伟大的', ja: '大きい、偉大な', hi: 'बड़ा, बहुत बड़ा', es: 'grande', ru: 'великий, большой', de: 'groß', fa: 'بزرگ، کلان', ms: 'besar, agung'}
  },
  {
    arabic: 'مُبِينٌ', translit: 'mubīn', count: 119,
    meanings: { en: 'clear, manifest', bn: 'সুস্পষ্ট, প্রকাশ্য', fr: 'clair, manifeste', id: 'yang nyata, jelas', ur: 'واضح، کھلا', tr: 'apaçık', ar: 'وَاضِحٌ ظَاهِر', zh: '明显的，明白的', ja: '明白な', hi: 'साफ़, खुला हुआ', es: 'claro, evidente', ru: 'ясный, явный', de: 'klar, offenkundig', fa: 'روشن، آشکار', ms: 'jelas, nyata'}
  },
  {
    arabic: 'مُسْتَقِيمٌ', translit: 'mustaqīm', count: 37,
    meanings: { en: 'straight, upright', bn: 'সরল, সোজা', fr: 'droit', id: 'lurus', ur: 'سیدھا، مستقیم', tr: 'dosdoğru', ar: 'ضِدُّ الْمُعْوَجّ', zh: '正直的，端正的', ja: 'まっすぐな、正しい', hi: 'सीधा, सही', es: 'recto, derecho', ru: 'прямой, правильный', de: 'gerade, aufrecht', fa: 'راست، استوار', ms: 'lurus, tegak'}
  },
  {
    arabic: 'شَدِيدٌ', translit: 'shadīd', count: 52,
    meanings: { en: 'severe, intense', bn: 'কঠোর, প্রচণ্ড', fr: 'sévère, intense', id: 'keras, dahsyat', ur: 'سخت، شدید', tr: 'şiddetli', ar: 'قَوِيٌّ عَنِيف', zh: '严厉的，剧烈的', ja: '厳しい、激しい', hi: 'सख़्त, शदीद', es: 'severo, intenso', ru: 'суровый, сильный', de: 'streng, heftig', fa: 'سخت، شدید', ms: 'keras, dahsyat'}
  },
  {
    arabic: 'سَأَلَ', translit: 'saʾala', count: 120,
    meanings: { en: 'he asked', bn: 'সে জিজ্ঞাসা করল', fr: 'il a demandé', id: 'dia bertanya', ur: 'اس نے پوچھا', tr: 'sordu', ar: 'طَلَبَ الْجَوَاب', zh: '他问了', ja: '彼は尋ねた', hi: 'उसने पूछा', es: 'preguntó', ru: 'он спросил', de: 'er fragte', fa: 'پرسید', ms: 'dia bertanya'}
  },
  {
    arabic: 'أَكَلَ', translit: 'akala', count: 100,
    meanings: { en: 'he ate', bn: 'সে খেল', fr: 'il a mangé', id: 'dia makan', ur: 'اس نے کھایا', tr: 'yedi', ar: 'تَنَاوَلَ الطَّعَام', zh: '他吃了', ja: '彼は食べた', hi: 'उसने खाया', es: 'comió', ru: 'он ел', de: 'er aß', fa: 'خورد', ms: 'dia makan'}
  },
  {
    arabic: 'شَرِبَ', translit: 'shariba', count: 39,
    meanings: { en: 'he drank', bn: 'সে পান করল', fr: 'il a bu', id: 'dia minum', ur: 'اس نے پیا', tr: 'içti', ar: 'تَنَاوَلَ الشَّرَاب', zh: '他喝了', ja: '彼は飲んだ', hi: 'उसने पिया', es: 'bebió', ru: 'он пил', de: 'er trank', fa: 'نوشید', ms: 'dia minum'}
  },
  {
    arabic: 'وَجَدَ', translit: 'wajada', count: 107,
    meanings: { en: 'he found', bn: 'সে পেল', fr: 'il a trouvé', id: 'dia mendapati', ur: 'اس نے پایا', tr: 'buldu', ar: 'لَقِيَ وَأَصَابَ', zh: '他找到了', ja: '彼は見いだした', hi: 'उसने पाया', es: 'encontró', ru: 'он нашёл', de: 'er fand', fa: 'یافت', ms: 'dia mendapati'}
  },
  {
    arabic: 'عَرَفَ', translit: 'ʿarafa', count: 30,
    meanings: { en: 'he knew, recognized', bn: 'সে চিনল, জানল', fr: 'il a reconnu', id: 'dia mengenal', ur: 'اس نے پہچانا', tr: 'tanıdı, bildi', ar: 'أَدْرَكَ وَمَيَّزَ', zh: '他认出了', ja: '彼は知った、認めた', hi: 'उसने जाना, पहचाना', es: 'conoció, reconoció', ru: 'он знал, узнал', de: 'er kannte, erkannte', fa: 'شناخت، بازشناخت', ms: 'dia mengetahui, mengenali'}
  },
  {
    arabic: 'حَسِبَ', translit: 'ḥasiba', count: 44,
    meanings: { en: 'he thought, reckoned', bn: 'সে মনে করল, ধারণা করল', fr: 'il a pensé, supposé', id: 'dia mengira', ur: 'اس نے گمان کیا', tr: 'sandı, zannetti', ar: 'ظَنَّ وَقَدَّرَ', zh: '他以为', ja: '彼は思った、みなした', hi: 'उसने समझा, गुमान किया', es: 'pensó, supuso', ru: 'он думал, полагал', de: 'er meinte, rechnete', fa: 'پنداشت، گمان کرد', ms: 'dia menyangka, mengira'}
  },
  {
    arabic: 'بَلَغَ', translit: 'balagha', count: 49,
    meanings: { en: 'he reached, attained', bn: 'সে পৌঁছল', fr: 'il a atteint', id: 'dia sampai, mencapai', ur: 'وہ پہنچا', tr: 'ulaştı, erişti', ar: 'وَصَلَ إِلَى', zh: '他到达了', ja: '彼は達した', hi: 'वह पहुँचा, पा लिया', es: 'alcanzó, llegó', ru: 'он достиг, дошёл', de: 'er erreichte, gelangte', fa: 'رسید، دست یافت', ms: 'dia sampai, mencapai'}
  },
  {
    arabic: 'صَدَقَ', translit: 'ṣadaqa', count: 15,
    meanings: { en: 'he was truthful', bn: 'সে সত্য বলল', fr: 'il a dit vrai', id: 'dia benar, jujur', ur: 'اس نے سچ کہا', tr: 'doğru söyledi', ar: 'قَالَ الْحَقّ', zh: '他说了实话', ja: '彼は真実を語った', hi: 'उसने सच कहा', es: 'fue veraz', ru: 'он был правдив', de: 'er sprach die Wahrheit', fa: 'راست گفت', ms: 'dia berkata benar'}
  },
  {
    arabic: 'نَجَّى', translit: 'najjā', count: 60,
    meanings: { en: 'he saved, rescued', bn: 'সে রক্ষা করল', fr: 'il a sauvé', id: 'dia menyelamatkan', ur: 'اس نے نجات دی', tr: 'kurtardı', ar: 'خَلَّصَ وَأَنْقَذَ', zh: '他拯救了', ja: '彼は救った', hi: 'उसने बचाया, निजात दी', es: 'salvó, rescató', ru: 'он спас, избавил', de: 'er errettete, rettete', fa: 'نجات داد، رهانید', ms: 'dia menyelamatkan, melepaskan'}
  },
  {
    arabic: 'أَهْلَكَ', translit: 'ahlaka', count: 50,
    meanings: { en: 'he destroyed', bn: 'সে ধ্বংস করল', fr: 'il a détruit', id: 'dia membinasakan', ur: 'اس نے ہلاک کیا', tr: 'helâk etti', ar: 'أَبَادَ وَأَفْنَى', zh: '他毁灭了', ja: '彼は滅ぼした', hi: 'उसने हलाक किया', es: 'destruyó', ru: 'он погубил', de: 'er vernichtete', fa: 'نابود کرد', ms: 'dia membinasakan'}
  },
  {
    arabic: 'اسْتَغْفَرَ', translit: 'istaghfara', count: 40,
    meanings: { en: 'he sought forgiveness', bn: 'সে ক্ষমা চাইল', fr: 'il a demandé pardon', id: 'dia memohon ampun', ur: 'اس نے مغفرت مانگی', tr: 'bağışlanma diledi', ar: 'طَلَبَ الْمَغْفِرَة', zh: '他求饶恕', ja: '彼は赦しを求めた', hi: 'उसने माफ़ी माँगी', es: 'pidió perdón', ru: 'он просил прощения', de: 'er bat um Vergebung', fa: 'آمرزش خواست', ms: 'dia memohon ampun'}
  },
  {
    arabic: 'عَقَلَ', translit: 'ʿaqala', count: 49,
    meanings: { en: 'he understood, used reason', bn: 'সে বুঝল, বিবেক খাটাল', fr: 'il a raisonné, compris', id: 'dia memahami, berakal', ur: 'اس نے عقل سے سمجھا', tr: 'akıl etti, anladı', ar: 'أَدْرَكَ بِالْعَقْل', zh: '他理解，运用理智', ja: '彼は理解した、理性を働かせた', hi: 'उसने समझा, अक़्ल से काम लिया', es: 'comprendió, razonó', ru: 'он понял, рассудил', de: 'er begriff, gebrauchte den Verstand', fa: 'فهمید، خرد ورزید', ms: 'dia memahami, menggunakan akal'}
  },
  {
    arabic: 'بَصَرٌ', translit: 'baṣar', count: 38,
    meanings: { en: 'sight, vision', bn: 'দৃষ্টি', fr: 'la vue, vision', id: 'penglihatan', ur: 'بصارت، نگاہ', tr: 'görme, göz', ar: 'حَاسَّةُ الرُّؤْيَة', zh: '视觉，眼力', ja: '視覚、視力', hi: 'नज़र, देखना', es: 'vista, visión', ru: 'зрение, взор', de: 'Sehkraft, Sicht', fa: 'بینایی، دید', ms: 'penglihatan, pandangan'}
  },
  {
    arabic: 'سَمْعٌ', translit: 'samʿ', count: 22,
    meanings: { en: 'hearing', bn: 'শ্রবণ', fr: 'l\'ouïe', id: 'pendengaran', ur: 'سماعت', tr: 'işitme, kulak', ar: 'حَاسَّةُ السَّمَاع', zh: '听觉', ja: '聴覚', hi: 'सुनना', es: 'oído', ru: 'слух', de: 'Gehör', fa: 'شنوایی', ms: 'pendengaran'}
  },
  {
    arabic: 'ثَمَرٌ', translit: 'thamar', count: 24,
    meanings: { en: 'fruit', bn: 'ফল', fr: 'fruit', id: 'buah', ur: 'پھل', tr: 'meyve', ar: 'مَا تُخْرِجُهُ الشَّجَرَة', zh: '果实', ja: '果実', hi: 'फल', es: 'fruto', ru: 'плоды', de: 'Frucht', fa: 'میوه', ms: 'buah'}
  },
  {
    arabic: 'وَلِيٌّ', translit: 'walī', count: 44,
    meanings: { en: 'ally, protector', bn: 'অভিভাবক, বন্ধু', fr: 'allié, protecteur', id: 'pelindung, penolong', ur: 'دوست، سرپرست', tr: 'dost, veli', ar: 'نَاصِرٌ وَحَافِظ', zh: '保护者，盟友', ja: '保護者、味方', hi: 'दोस्त, हिमायती', es: 'aliado, protector', ru: 'покровитель, заступник', de: 'Verbündeter, Schutzherr', fa: 'دوست، سرپرست', ms: 'penolong, pelindung'}
  },
  {
    arabic: 'نَصْرٌ', translit: 'naṣr', count: 20,
    meanings: { en: 'help, victory', bn: 'সাহায্য, বিজয়', fr: 'secours, victoire', id: 'pertolongan, kemenangan', ur: 'مدد، نصرت', tr: 'yardım, zafer', ar: 'عَوْنٌ وَغَلَبَة', zh: '援助，胜利', ja: '援助、勝利', hi: 'मदद, जीत', es: 'ayuda, victoria', ru: 'помощь, победа', de: 'Hilfe, Sieg', fa: 'یاری، پیروزی', ms: 'pertolongan, kemenangan'}
  },
  {
    arabic: 'فَتْحٌ', translit: 'fatḥ', count: 7,
    meanings: { en: 'victory, opening', bn: 'বিজয়, উন্মোচন', fr: 'victoire, ouverture', id: 'kemenangan, pembukaan', ur: 'فتح، کامیابی', tr: 'fetih, zafer', ar: 'نَصْرٌ وَظَفَر', zh: '胜利，开启', ja: '勝利、開放', hi: 'जीत, खुलना', es: 'victoria, apertura', ru: 'победа, открытие', de: 'Sieg, Öffnung', fa: 'پیروزی، گشایش', ms: 'kemenangan, pembukaan'}
  },
  {
    arabic: 'حُدُودٌ', translit: 'ḥudūd', count: 14,
    meanings: { en: 'limits, boundaries (of Allah)', bn: 'সীমাসমূহ (আল্লাহর)', fr: 'limites (d\'Allah)', id: 'batas-batas (Allah)', ur: 'حدود (اللہ کی)', tr: 'sınırlar (Allah\'ın)', ar: 'جَمْعُ حَدّ', zh: '（真主的）法度界限', ja: '（アッラーの）境界、限度', hi: 'हदें, सीमाएँ (अल्लाह की)', es: 'límites (de Allah)', ru: 'пределы, границы (Аллаха)', de: 'Grenzen, Schranken (Allahs)', fa: 'حدود، مرزها (الله)', ms: 'had, batasan (Allah)'}
  },
  {
    arabic: 'قَرْيَةٌ', translit: 'qaryah', count: 57,
    meanings: { en: 'town, city', bn: 'জনপদ, নগরী', fr: 'cité, ville', id: 'negeri, kota', ur: 'بستی، شہر', tr: 'kasaba, şehir', ar: 'بَلْدَةٌ مَسْكُونَة', zh: '城镇，市镇', ja: '町、都市', hi: 'बस्ती, शहर', es: 'pueblo, ciudad', ru: 'селение, город', de: 'Ortschaft, Stadt', fa: 'آبادی، شهر', ms: 'negeri, kota'}
  },
  {
    arabic: 'مَتَاعٌ', translit: 'matāʿ', count: 35,
    meanings: { en: 'enjoyment, provision', bn: 'ভোগসামগ্রী, উপকরণ', fr: 'jouissance, bien passager', id: 'kesenangan, perbekalan', ur: 'سامان، فائدہ', tr: 'geçimlik, dünya malı', ar: 'مَنْفَعَةٌ زَائِلَة', zh: '享受，暂时的用品', ja: '享楽、はかない糧', hi: 'फ़ायदे का सामान, रोज़ी', es: 'disfrute, provisión', ru: 'пользование, припасы', de: 'Nießbrauch, Versorgung', fa: 'بهره، کالا', ms: 'kesenangan, bekalan'}
  },
  {
    arabic: 'قَرِيبٌ', translit: 'qarīb', count: 26,
    meanings: { en: 'near, close', bn: 'নিকটবর্তী', fr: 'proche', id: 'dekat', ur: 'قریب، نزدیک', tr: 'yakın', ar: 'غَيْرُ بَعِيد', zh: '临近的', ja: '近い', hi: 'क़रीब, नज़दीक', es: 'cercano, próximo', ru: 'близкий, рядом', de: 'nah, nahe', fa: 'نزدیک', ms: 'dekat, hampir'}
  },
  {
    arabic: 'بَعِيدٌ', translit: 'baʿīd', count: 15,
    meanings: { en: 'far, distant', bn: 'দূরবর্তী', fr: 'lointain', id: 'jauh', ur: 'دور، بعید', tr: 'uzak', ar: 'غَيْرُ قَرِيب', zh: '遥远的', ja: '遠い', hi: 'दूर, फ़ासले पर', es: 'lejano, distante', ru: 'далёкий, отдалённый', de: 'fern, weit entfernt', fa: 'دور', ms: 'jauh, terpencil'}
  },
  {
    arabic: 'عَلِيمٌ', translit: 'ʿalīm', count: 160,
    meanings: { en: 'All-Knowing', bn: 'সর্বজ্ঞ', fr: 'Omniscient', id: 'Maha Mengetahui', ur: 'سب کچھ جاننے والا، علیم', tr: 'her şeyi bilen, Alîm', ar: 'كَثِيرُ الْعِلْم', zh: '全知的', ja: '全知なる方', hi: 'सब कुछ जानने वाला', es: 'Omnisciente', ru: 'Всезнающий', de: 'Allwissender', fa: 'دانا', ms: 'Maha Mengetahui'}
  },
  {
    arabic: 'خَبِيرٌ', translit: 'khabīr', count: 45,
    meanings: { en: 'All-Aware', bn: 'সর্বজ্ঞাত, খবর রাখেন যিনি', fr: 'Parfaitement Informé', id: 'Maha Teliti, Maha Mengetahui', ur: 'باخبر، خبیر', tr: 'her şeyden haberdar, Habîr', ar: 'عَلِيمٌ بِبَوَاطِنِ الْأُمُور', zh: '彻知的', ja: '熟知なる方', hi: 'पूरी ख़बर रखने वाला', es: 'Bien Informado', ru: 'Ведающий', de: 'Allkundiger', fa: 'آگاه', ms: 'Maha Mendalam Pengetahuan-Nya'}
  }
];

/**
 * Thematic vocabulary sets — real Quranic words grouped by everyday themes.
 * Same entry shape as VOCAB_WORDS plus `ref`: a well-known verse ("surah:ayah")
 * where the word (in some inflected form) occurs, used for the verse-preview chip.
 * Counts are APPROXIMATE: root-level totals from data/roots.json where the root
 * is unambiguous, otherwise word-form counts from data/word-index.json.
 * Theme names are bilingual inline (en/bn) per the data-file convention;
 * other UI languages fall back to English.
 */
const VOCAB_THEMES = [
  {
    id: 'body', icon: '🖐️',
    names: { en: 'Body parts', bn: 'শরীরের অঙ্গ' },
    words: [
      {
        arabic: 'وَجْهٌ', translit: 'wajh', count: 72, ref: '55:27',
        meanings: { en: 'face', bn: 'মুখমণ্ডল, চেহারা', fr: 'visage', id: 'wajah', ur: 'چہرہ', tr: 'yüz', ar: 'مُحَيَّا' , zh: '脸，面容', ja: '顔、面', hi: 'चेहरा', es: 'rostro', ru: 'лицо', de: 'Gesicht, Angesicht', fa: 'چهره', ms: 'wajah'}
      },
      {
        arabic: 'يَدٌ', translit: 'yad', count: 120, ref: '48:10',
        meanings: { en: 'hand', bn: 'হাত', fr: 'main', id: 'tangan', ur: 'ہاتھ', tr: 'el', ar: 'كَفّ' , zh: '手', ja: '手', hi: 'हाथ', es: 'mano', ru: 'рука', de: 'Hand', fa: 'دست', ms: 'tangan'}
      },
      {
        arabic: 'عَيْنٌ', translit: 'ʿayn', count: 65, ref: '88:12',
        meanings: { en: 'eye; spring', bn: 'চোখ; ঝর্ণা', fr: 'œil ; source', id: 'mata; mata air', ur: 'آنکھ؛ چشمہ', tr: 'göz; pınar', ar: 'بَاصِرَة / يَنْبُوع' , zh: '眼；泉源', ja: '目；泉', hi: 'आँख; चश्मा', es: 'ojo; manantial', ru: 'глаз; источник', de: 'Auge; Quelle', fa: 'چشم؛ چشمه', ms: 'mata; mata air'}
      },
      {
        arabic: 'لِسَانٌ', translit: 'lisān', count: 25, ref: '28:34',
        meanings: { en: 'tongue, language', bn: 'জিহ্বা, ভাষা', fr: 'langue', id: 'lidah, bahasa', ur: 'زبان', tr: 'dil', ar: 'لُغَة' , zh: '舌头，语言', ja: '舌、言葉', hi: 'ज़बान, भाषा', es: 'lengua, idioma', ru: 'язык, речь', de: 'Zunge, Sprache', fa: 'زبان، گویش', ms: 'lidah, bahasa'}
      },
      {
        arabic: 'صَدْرٌ', translit: 'ṣadr', count: 46, ref: '94:1',
        meanings: { en: 'chest, breast', bn: 'বক্ষ, বুক', fr: 'poitrine', id: 'dada', ur: 'سینہ', tr: 'göğüs', ar: 'مَوْضِعُ الْقَلْب' , zh: '胸，心扉', ja: '胸', hi: 'सीना, छाती', es: 'pecho', ru: 'грудь', de: 'Brust', fa: 'سینه', ms: 'dada'}
      },
      {
        arabic: 'بَطْنٌ', translit: 'baṭn', count: 25, ref: '3:35',
        meanings: { en: 'belly, womb', bn: 'পেট, উদর', fr: 'ventre', id: 'perut', ur: 'پیٹ', tr: 'karın', ar: 'جَوْف' , zh: '腹，子宫', ja: '腹', hi: 'पेट, कोख', es: 'vientre, seno materno', ru: 'живот, чрево', de: 'Bauch, Mutterleib', fa: 'شکم، رحم', ms: 'perut, rahim'}
      },
      {
        arabic: 'رَأْسٌ', translit: 'raʾs', count: 18, ref: '19:4',
        meanings: { en: 'head', bn: 'মাথা', fr: 'tête', id: 'kepala', ur: 'سر', tr: 'baş', ar: 'أَعْلَى الْجَسَد' , zh: '头', ja: '頭', hi: 'सिर', es: 'cabeza', ru: 'голова', de: 'Kopf', fa: 'سر', ms: 'kepala'}
      },
      {
        arabic: 'أُذُنٌ', translit: 'udhun', count: 18, ref: '5:45',
        meanings: { en: 'ear', bn: 'কান', fr: 'oreille', id: 'telinga', ur: 'کان', tr: 'kulak', ar: 'عُضْوُ السَّمْع' , zh: '耳朵', ja: '耳', hi: 'कान', es: 'oreja', ru: 'ухо', de: 'Ohr', fa: 'گوش', ms: 'telinga'}
      }
    ]
  },
  {
    id: 'family', icon: '👨‍👩‍👧‍👦',
    names: { en: 'Family', bn: 'পরিবার' },
    words: [
      {
        arabic: 'أَبٌ', translit: 'ab', count: 117, ref: '12:4',
        meanings: { en: 'father', bn: 'বাবা, পিতা', fr: 'père', id: 'ayah, bapak', ur: 'باپ', tr: 'baba', ar: 'وَالِد' , zh: '父亲', ja: '父', hi: 'बाप', es: 'padre', ru: 'отец', de: 'Vater', fa: 'پدر', ms: 'bapa'}
      },
      {
        arabic: 'أُمٌّ', translit: 'umm', count: 35, ref: '28:7',
        meanings: { en: 'mother', bn: 'মা', fr: 'mère', id: 'ibu', ur: 'ماں', tr: 'anne', ar: 'وَالِدَة' , zh: '母亲', ja: '母', hi: 'माँ', es: 'madre', ru: 'мать', de: 'Mutter', fa: 'مادر', ms: 'ibu'}
      },
      {
        arabic: 'اِبْنٌ', translit: 'ibn', count: 30, ref: '2:87',
        meanings: { en: 'son', bn: 'ছেলে, পুত্র', fr: 'fils', id: 'anak laki-laki', ur: 'بیٹا', tr: 'oğul', ar: 'وَلَدٌ ذَكَر' , zh: '儿子', ja: '息子', hi: 'बेटा', es: 'hijo', ru: 'сын', de: 'Sohn', fa: 'پسر', ms: 'anak lelaki'}
      },
      {
        arabic: 'أَخٌ', translit: 'akh', count: 85, ref: '4:12',
        meanings: { en: 'brother', bn: 'ভাই', fr: 'frère', id: 'saudara laki-laki', ur: 'بھائی', tr: 'erkek kardeş', ar: 'شَقِيق' , zh: '兄弟', ja: '兄弟', hi: 'भाई', es: 'hermano', ru: 'брат', de: 'Bruder', fa: 'برادر', ms: 'saudara lelaki'}
      },
      {
        arabic: 'أُخْتٌ', translit: 'ukht', count: 8, ref: '19:28',
        meanings: { en: 'sister', bn: 'বোন', fr: 'sœur', id: 'saudara perempuan', ur: 'بہن', tr: 'kız kardeş', ar: 'شَقِيقَة' , zh: '姐妹', ja: '姉妹', hi: 'बहन', es: 'hermana', ru: 'сестра', de: 'Schwester', fa: 'خواهر', ms: 'saudara perempuan'}
      },
      {
        arabic: 'زَوْجٌ', translit: 'zawj', count: 81, ref: '2:35',
        meanings: { en: 'spouse; pair', bn: 'স্বামী/স্ত্রী; জোড়া', fr: 'époux ; paire', id: 'pasangan', ur: 'جوڑا، شریکِ حیات', tr: 'eş; çift', ar: 'قَرِين' , zh: '配偶；对', ja: '配偶者；対', hi: 'जीवनसाथी; जोड़ा', es: 'cónyuge; pareja', ru: 'супруг; пара', de: 'Ehepartner; Paar', fa: 'همسر؛ جفت', ms: 'pasangan; sepasang'}
      },
      {
        arabic: 'وَلَدٌ', translit: 'walad', count: 102, ref: '2:116',
        meanings: { en: 'child, son', bn: 'সন্তান', fr: 'enfant', id: 'anak', ur: 'اولاد، بچہ', tr: 'çocuk', ar: 'طِفْل' , zh: '孩子，儿女', ja: '子供', hi: 'बच्चा, बेटा', es: 'hijo, niño', ru: 'ребёнок, сын', de: 'Kind, Sohn', fa: 'فرزند، پسر', ms: 'anak, anak lelaki'}
      },
      {
        arabic: 'أَهْلٌ', translit: 'ahl', count: 127, ref: '2:105',
        meanings: { en: 'family, people', bn: 'পরিবার, অধিবাসী', fr: 'famille, gens', id: 'keluarga', ur: 'گھر والے، اہل', tr: 'aile, halk', ar: 'عَشِيرَة' , zh: '家属，族人', ja: '家族、一族', hi: 'घरवाले, लोग', es: 'familia, gente', ru: 'семья, люди', de: 'Familie, Leute', fa: 'خانواده، اهل', ms: 'keluarga, kaum'}
      }
    ]
  },
  {
    id: 'nature', icon: '🌄',
    names: { en: 'Nature', bn: 'প্রকৃতি' },
    words: [
      {
        arabic: 'شَمْسٌ', translit: 'shams', count: 33, ref: '91:1',
        meanings: { en: 'sun', bn: 'সূর্য', fr: 'soleil', id: 'matahari', ur: 'سورج', tr: 'güneş', ar: 'نَجْمُ النَّهَار' , zh: '太阳', ja: '太陽', hi: 'सूरज', es: 'sol', ru: 'солнце', de: 'Sonne', fa: 'خورشید', ms: 'matahari'}
      },
      {
        arabic: 'قَمَرٌ', translit: 'qamar', count: 27, ref: '54:1',
        meanings: { en: 'moon', bn: 'চাঁদ', fr: 'lune', id: 'bulan', ur: 'چاند', tr: 'ay', ar: 'بَدْر' , zh: '月亮', ja: '月', hi: 'चाँद', es: 'luna', ru: 'луна', de: 'Mond', fa: 'ماه', ms: 'bulan'}
      },
      {
        arabic: 'نَجْمٌ', translit: 'najm', count: 13, ref: '53:1',
        meanings: { en: 'star', bn: 'তারা, নক্ষত্র', fr: 'étoile', id: 'bintang', ur: 'ستارہ', tr: 'yıldız', ar: 'كَوْكَب' , zh: '星星', ja: '星', hi: 'तारा', es: 'estrella', ru: 'звезда', de: 'Stern', fa: 'ستاره', ms: 'bintang'}
      },
      {
        arabic: 'جَبَلٌ', translit: 'jabal', count: 41, ref: '7:143',
        meanings: { en: 'mountain', bn: 'পাহাড়', fr: 'montagne', id: 'gunung', ur: 'پہاڑ', tr: 'dağ', ar: 'طَوْد' , zh: '山', ja: '山', hi: 'पहाड़', es: 'montaña', ru: 'гора', de: 'Berg', fa: 'کوه', ms: 'gunung'}
      },
      {
        arabic: 'بَحْرٌ', translit: 'baḥr', count: 42, ref: '18:109',
        meanings: { en: 'sea', bn: 'সমুদ্র', fr: 'mer', id: 'laut', ur: 'سمندر', tr: 'deniz', ar: 'يَمّ' , zh: '海', ja: '海', hi: 'समंदर', es: 'mar', ru: 'море', de: 'Meer', fa: 'دریا', ms: 'laut'}
      },
      {
        arabic: 'نَهَرٌ', translit: 'nahar', count: 54, ref: '54:54',
        meanings: { en: 'river', bn: 'নদী', fr: 'rivière, fleuve', id: 'sungai', ur: 'نہر، دریا', tr: 'nehir', ar: 'مَجْرَى مَاء' , zh: '河流', ja: '川', hi: 'नदी', es: 'río', ru: 'река', de: 'Fluss', fa: 'رود', ms: 'sungai'}
      },
      {
        arabic: 'شَجَرَةٌ', translit: 'shajarah', count: 27, ref: '2:35',
        meanings: { en: 'tree', bn: 'গাছ', fr: 'arbre', id: 'pohon', ur: 'درخت', tr: 'ağaç', ar: 'ذَاتُ أَغْصَان' , zh: '树', ja: '木', hi: 'पेड़', es: 'árbol', ru: 'дерево', de: 'Baum', fa: 'درخت', ms: 'pokok'}
      },
      {
        arabic: 'مَاءٌ', translit: 'māʾ', count: 63, ref: '21:30',
        meanings: { en: 'water', bn: 'পানি', fr: 'eau', id: 'air', ur: 'پانی', tr: 'su', ar: 'سَائِلُ الْحَيَاة' , zh: '水', ja: '水', hi: 'पानी', es: 'agua', ru: 'вода', de: 'Wasser', fa: 'آب', ms: 'air'}
      }
    ]
  },
  {
    id: 'animals', icon: '🐪',
    names: { en: 'Animals', bn: 'প্রাণী' },
    words: [
      {
        arabic: 'بَقَرَةٌ', translit: 'baqarah', count: 9, ref: '2:67',
        meanings: { en: 'cow', bn: 'গাভী, গরু', fr: 'vache', id: 'sapi betina', ur: 'گائے', tr: 'inek', ar: 'مِنَ الْأَنْعَام' , zh: '牛', ja: '雌牛', hi: 'गाय', es: 'vaca', ru: 'корова', de: 'Kuh', fa: 'گاو', ms: 'lembu'}
      },
      {
        arabic: 'كَلْبٌ', translit: 'kalb', count: 6, ref: '18:18',
        meanings: { en: 'dog', bn: 'কুকুর', fr: 'chien', id: 'anjing', ur: 'کتا', tr: 'köpek', ar: 'حَيَوَانٌ أَلِيف' , zh: '狗', ja: '犬', hi: 'कुत्ता', es: 'perro', ru: 'собака', de: 'Hund', fa: 'سگ', ms: 'anjing'}
      },
      {
        arabic: 'حُوتٌ', translit: 'ḥūt', count: 5, ref: '37:142',
        meanings: { en: 'fish, whale', bn: 'মাছ, তিমি', fr: 'poisson, baleine', id: 'ikan (besar)', ur: 'مچھلی', tr: 'balık, balina', ar: 'سَمَكَةٌ عَظِيمَة' , zh: '鱼，鲸', ja: '魚、鯨', hi: 'मछली, व्हेल', es: 'pez, ballena', ru: 'рыба, кит', de: 'Fisch, Wal', fa: 'ماهی، نهنگ', ms: 'ikan, ikan paus'}
      },
      {
        arabic: 'ذِئْبٌ', translit: 'dhiʾb', count: 3, ref: '12:13',
        meanings: { en: 'wolf', bn: 'নেকড়ে', fr: 'loup', id: 'serigala', ur: 'بھیڑیا', tr: 'kurt', ar: 'حَيَوَانٌ مُفْتَرِس' , zh: '狼', ja: '狼', hi: 'भेड़िया', es: 'lobo', ru: 'волк', de: 'Wolf', fa: 'گرگ', ms: 'serigala'}
      },
      {
        arabic: 'نَمْلَةٌ', translit: 'namlah', count: 4, ref: '27:18',
        meanings: { en: 'ant', bn: 'পিঁপড়া', fr: 'fourmi', id: 'semut', ur: 'چیونٹی', tr: 'karınca', ar: 'حَشَرَةٌ صَغِيرَة' , zh: '蚂蚁', ja: '蟻', hi: 'चींटी', es: 'hormiga', ru: 'муравей', de: 'Ameise', fa: 'مورچه', ms: 'semut'}
      },
      {
        arabic: 'نَحْلٌ', translit: 'naḥl', count: 1, ref: '16:68',
        meanings: { en: 'bee', bn: 'মৌমাছি', fr: 'abeille', id: 'lebah', ur: 'شہد کی مکھی', tr: 'arı', ar: 'صَانِعُ الْعَسَل' , zh: '蜜蜂', ja: '蜜蜂', hi: 'शहद की मक्खी', es: 'abeja', ru: 'пчела', de: 'Biene', fa: 'زنبور عسل', ms: 'lebah'}
      },
      {
        arabic: 'عَنكَبُوتٌ', translit: 'ʿankabūt', count: 2, ref: '29:41',
        meanings: { en: 'spider', bn: 'মাকড়সা', fr: 'araignée', id: 'laba-laba', ur: 'مکڑی', tr: 'örümcek', ar: 'نَاسِجُ الْبَيْت' , zh: '蜘蛛', ja: '蜘蛛', hi: 'मकड़ी', es: 'araña', ru: 'паук', de: 'Spinne', fa: 'عنکبوت', ms: 'labah-labah'}
      },
      {
        arabic: 'طَيْرٌ', translit: 'ṭayr', count: 29, ref: '67:19',
        meanings: { en: 'bird(s)', bn: 'পাখি', fr: 'oiseau(x)', id: 'burung', ur: 'پرندہ', tr: 'kuş', ar: 'ذُو جَنَاحَيْن' , zh: '鸟', ja: '鳥', hi: 'परिंदा (परिंदे)', es: 'ave(s)', ru: 'птица (птицы)', de: 'Vogel, Vögel', fa: 'پرنده(ها)', ms: 'burung'}
      }
    ]
  },
  {
    id: 'numbers', icon: '🔢',
    names: { en: 'Numbers', bn: 'সংখ্যা' },
    words: [
      {
        arabic: 'وَاحِدٌ', translit: 'wāḥid', count: 61, ref: '2:163',
        meanings: { en: 'one', bn: 'এক', fr: 'un', id: 'satu', ur: 'ایک', tr: 'bir', ar: 'الْعَدَد ١' , zh: '一', ja: '一', hi: 'एक', es: 'uno', ru: 'один', de: 'eins', fa: 'یک', ms: 'satu'}
      },
      {
        arabic: 'اِثْنَانِ', translit: 'ithnān', count: 25, ref: '5:106',
        meanings: { en: 'two', bn: 'দুই', fr: 'deux', id: 'dua', ur: 'دو', tr: 'iki', ar: 'الْعَدَد ٢' , zh: '二', ja: '二', hi: 'दो', es: 'dos', ru: 'два', de: 'zwei', fa: 'دو', ms: 'dua'}
      },
      {
        arabic: 'ثَلَاثَةٌ', translit: 'thalāthah', count: 30, ref: '18:22',
        meanings: { en: 'three', bn: 'তিন', fr: 'trois', id: 'tiga', ur: 'تین', tr: 'üç', ar: 'الْعَدَد ٣' , zh: '三', ja: '三', hi: 'तीन', es: 'tres', ru: 'три', de: 'drei', fa: 'سه', ms: 'tiga'}
      },
      {
        arabic: 'أَرْبَعَةٌ', translit: 'arbaʿah', count: 22, ref: '9:36',
        meanings: { en: 'four', bn: 'চার', fr: 'quatre', id: 'empat', ur: 'چار', tr: 'dört', ar: 'الْعَدَد ٤' , zh: '四', ja: '四', hi: 'चार', es: 'cuatro', ru: 'четыре', de: 'vier', fa: 'چهار', ms: 'empat'}
      },
      {
        arabic: 'سِتَّةٌ', translit: 'sittah', count: 8, ref: '7:54',
        meanings: { en: 'six', bn: 'ছয়', fr: 'six', id: 'enam', ur: 'چھ', tr: 'altı', ar: 'الْعَدَد ٦' , zh: '六', ja: '六', hi: 'छह', es: 'seis', ru: 'шесть', de: 'sechs', fa: 'شش', ms: 'enam'}
      },
      {
        arabic: 'سَبْعَةٌ', translit: 'sabʿah', count: 28, ref: '15:44',
        meanings: { en: 'seven', bn: 'সাত', fr: 'sept', id: 'tujuh', ur: 'سات', tr: 'yedi', ar: 'الْعَدَد ٧' , zh: '七', ja: '七', hi: 'सात', es: 'siete', ru: 'семь', de: 'sieben', fa: 'هفت', ms: 'tujuh'}
      },
      {
        arabic: 'مِائَةٌ', translit: 'miʾah', count: 10, ref: '2:261',
        meanings: { en: 'hundred', bn: 'একশো', fr: 'cent', id: 'seratus', ur: 'سو', tr: 'yüz', ar: 'الْعَدَد ١٠٠' , zh: '百', ja: '百', hi: 'सौ', es: 'cien', ru: 'сто', de: 'hundert', fa: 'صد', ms: 'seratus'}
      },
      {
        arabic: 'أَلْفٌ', translit: 'alf', count: 19, ref: '97:3',
        meanings: { en: 'thousand', bn: 'হাজার', fr: 'mille', id: 'seribu', ur: 'ہزار', tr: 'bin', ar: 'الْعَدَد ١٠٠٠' , zh: '千', ja: '千', hi: 'हज़ार', es: 'mil', ru: 'тысяча', de: 'tausend', fa: 'هزار', ms: 'seribu'}
      }
    ]
  },
  {
    id: 'time', icon: '🕰️',
    names: { en: 'Time', bn: 'সময়' },
    words: [
      {
        arabic: 'لَيْلٌ', translit: 'layl', count: 92, ref: '92:1',
        meanings: { en: 'night', bn: 'রাত', fr: 'nuit', id: 'malam', ur: 'رات', tr: 'gece', ar: 'ضِدُّ النَّهَار' , zh: '夜', ja: '夜', hi: 'रात', es: 'noche', ru: 'ночь', de: 'Nacht', fa: 'شب', ms: 'malam'}
      },
      {
        arabic: 'نَهَارٌ', translit: 'nahār', count: 57, ref: '92:2',
        meanings: { en: 'daytime', bn: 'দিন, দিবস', fr: 'journée', id: 'siang', ur: 'دن', tr: 'gündüz', ar: 'ضِدُّ اللَّيْل' , zh: '昼', ja: '昼間', hi: 'दिन का वक़्त', es: 'día (horas de luz)', ru: 'дневное время', de: 'Tag (Tageszeit)', fa: 'روز (روشنایی روز)', ms: 'siang'}
      },
      {
        arabic: 'سَاعَةٌ', translit: 'sāʿah', count: 48, ref: '7:34',
        meanings: { en: 'hour; the Hour', bn: 'মুহূর্ত; কিয়ামত', fr: 'heure ; l’Heure', id: 'saat; kiamat', ur: 'گھڑی؛ قیامت', tr: 'saat; kıyamet', ar: 'الْقِيَامَة' , zh: '时刻，复活时', ja: '時、時節', hi: 'घड़ी; क़यामत की घड़ी', es: 'hora; la Hora', ru: 'час; Час', de: 'Stunde; die Stunde', fa: 'ساعت؛ قیامت', ms: 'saat; hari kiamat'}
      },
      {
        arabic: 'شَهْرٌ', translit: 'shahr', count: 21, ref: '97:3',
        meanings: { en: 'month', bn: 'মাস', fr: 'mois', id: 'bulan (waktu)', ur: 'مہینہ', tr: 'ay (süre)', ar: 'جُزْءُ السَّنَة' , zh: '月', ja: '月（暦）', hi: 'महीना', es: 'mes', ru: 'месяц', de: 'Monat', fa: 'ماه (سی‌روزه)', ms: 'bulan'}
      },
      {
        arabic: 'سَنَةٌ', translit: 'sanah', count: 20, ref: '2:96',
        meanings: { en: 'year', bn: 'বছর', fr: 'an, année', id: 'tahun', ur: 'سال', tr: 'yıl, sene', ar: 'عَام' , zh: '年', ja: '年', hi: 'साल', es: 'año', ru: 'год', de: 'Jahr', fa: 'سال', ms: 'tahun'}
      },
      {
        arabic: 'فَجْرٌ', translit: 'fajr', count: 6, ref: '89:1',
        meanings: { en: 'dawn', bn: 'ফজর, ভোর', fr: 'aube', id: 'fajar', ur: 'فجر، سحر', tr: 'fecir, şafak', ar: 'طُلُوعُ الصُّبْح' , zh: '黎明，晨礼', ja: '暁、ファジュル', hi: 'फ़ज्र, भोर', es: 'alba', ru: 'рассвет', de: 'Morgendämmerung', fa: 'سپیده‌دم', ms: 'fajar'}
      },
      {
        arabic: 'صُبْحٌ', translit: 'ṣubḥ', count: 5, ref: '11:81',
        meanings: { en: 'morning', bn: 'সকাল', fr: 'matin', id: 'pagi', ur: 'صبح', tr: 'sabah', ar: 'أَوَّلُ النَّهَار' , zh: '早晨', ja: '朝', hi: 'सुबह', es: 'mañana', ru: 'утро', de: 'Morgen', fa: 'صبح', ms: 'pagi'}
      },
      {
        arabic: 'غَدٌ', translit: 'ghad', count: 5, ref: '31:34',
        meanings: { en: 'tomorrow', bn: 'আগামীকাল', fr: 'demain', id: 'besok', ur: 'آنے والا کل', tr: 'yarın', ar: 'الْيَوْمُ التَّالِي' , zh: '明天', ja: '明日', hi: 'आने वाला कल', es: 'el día de mañana', ru: 'завтра', de: 'morgen', fa: 'فردا', ms: 'esok'}
      }
    ]
  },
  {
    id: 'opposites', icon: '↔️',
    names: { en: 'Opposites', bn: 'বিপরীত শব্দ' },
    words: [
      {
        arabic: 'حَيَاةٌ', translit: 'ḥayāh', count: 71, ref: '67:2',
        meanings: { en: 'life', bn: 'জীবন', fr: 'vie', id: 'kehidupan', ur: 'زندگی', tr: 'hayat, yaşam', ar: 'عَيْش' , zh: '生活，生命', ja: '生活、生', hi: 'ज़िंदगी', es: 'vida', ru: 'жизнь', de: 'Leben', fa: 'زندگی', ms: 'kehidupan'}
      },
      {
        arabic: 'مَوْتٌ', translit: 'mawt', count: 38, ref: '67:2',
        meanings: { en: 'death', bn: 'মৃত্যু', fr: 'mort', id: 'kematian', ur: 'موت', tr: 'ölüm', ar: 'وَفَاة' , zh: '死亡', ja: '死', hi: 'मौत', es: 'muerte', ru: 'смерть', de: 'Tod', fa: 'مرگ', ms: 'kematian'}
      },
      {
        arabic: 'نُورٌ', translit: 'nūr', count: 43, ref: '24:35',
        meanings: { en: 'light', bn: 'আলো, নূর', fr: 'lumière', id: 'cahaya', ur: 'روشنی، نور', tr: 'nur, ışık', ar: 'ضِيَاء' , zh: '光，光明', ja: '光', hi: 'रोशनी, नूर', es: 'luz', ru: 'свет', de: 'Licht', fa: 'نور', ms: 'cahaya'}
      },
      {
        arabic: 'ظُلُمَاتٌ', translit: 'ẓulumāt', count: 23, ref: '2:257',
        meanings: { en: 'darkness(es)', bn: 'অন্ধকার', fr: 'ténèbres', id: 'kegelapan', ur: 'اندھیرے', tr: 'karanlıklar', ar: 'ضِدُّ النُّور' , zh: '黑暗', ja: '闇', hi: 'अंधेरा (अंधेरे)', es: 'tiniebla(s)', ru: 'мрак (мраки)', de: 'Finsternis(se)', fa: 'تاریکی(ها)', ms: 'kegelapan'}
      },
      {
        arabic: 'دُنْيَا', translit: 'dunyā', count: 115, ref: '2:86',
        meanings: { en: 'this world', bn: 'দুনিয়া, পার্থিব জীবন', fr: 'ce bas monde', id: 'dunia', ur: 'دنیا', tr: 'dünya', ar: 'الْحَيَاةُ الْأُولَى' , zh: '今世', ja: '現世', hi: 'यह दुनिया', es: 'este mundo', ru: 'этот мир', de: 'diese Welt', fa: 'این دنیا', ms: 'dunia'}
      },
      {
        arabic: 'آخِرَةٌ', translit: 'ākhirah', count: 115, ref: '2:4',
        meanings: { en: 'the Hereafter', bn: 'আখিরাত, পরকাল', fr: 'l’au-delà', id: 'akhirat', ur: 'آخرت', tr: 'ahiret', ar: 'دَارُ الْبَقَاء' , zh: '后世', ja: '来世', hi: 'आख़िरत', es: 'la otra vida', ru: 'Последняя жизнь', de: 'das Jenseits', fa: 'آخرت', ms: 'akhirat'}
      },
      {
        arabic: 'هُدًى', translit: 'hudā', count: 85, ref: '2:2',
        meanings: { en: 'guidance', bn: 'হিদায়াত, পথনির্দেশ', fr: 'guidée, direction', id: 'petunjuk', ur: 'ہدایت', tr: 'hidayet', ar: 'رَشَاد' , zh: '引导，正道', ja: '導き', hi: 'हिदायत', es: 'guía', ru: 'верное руководство', de: 'Rechtleitung', fa: 'هدایت', ms: 'petunjuk'}
      },
      {
        arabic: 'ضَلَالٌ', translit: 'ḍalāl', count: 44, ref: '3:164',
        meanings: { en: 'misguidance, straying', bn: 'পথভ্রষ্টতা', fr: 'égarement', id: 'kesesatan', ur: 'گمراہی', tr: 'sapkınlık, dalalet', ar: 'ضِدُّ الْهُدَى' , zh: '迷误', ja: '迷い', hi: 'गुमराही, भटकना', es: 'extravío, desvío', ru: 'заблуждение, уклонение', de: 'Irreleitung, Abirren', fa: 'گمراهی، بیراهه رفتن', ms: 'kesesatan, penyimpangan'}
      }
    ]
  },
  {
    id: 'worship', icon: '🕌',
    names: { en: 'Worship', bn: 'ইবাদত' },
    words: [
      {
        arabic: 'زَكَاةٌ', translit: 'zakāh', count: 32, ref: '2:43',
        meanings: { en: 'alms, zakat', bn: 'যাকাত', fr: 'aumône (zakât)', id: 'zakat', ur: 'زکوٰۃ', tr: 'zekât', ar: 'صَدَقَةٌ مَفْرُوضَة' , zh: '天课', ja: 'ザカート', hi: 'ज़कात, सदक़ा', es: 'limosna, zakat', ru: 'милостыня, закят', de: 'Almosen, Zakat', fa: 'صدقه‌ی واجب، زکات', ms: 'sedekah, zakat'}
      },
      {
        arabic: 'صِيَامٌ', translit: 'ṣiyām', count: 10, ref: '2:183',
        meanings: { en: 'fasting', bn: 'রোযা, সিয়াম', fr: 'jeûne', id: 'puasa', ur: 'روزہ', tr: 'oruç', ar: 'إِمْسَاكٌ لِلَّه' , zh: '斋戒', ja: '断食', hi: 'रोज़ा', es: 'ayuno', ru: 'пост', de: 'Fasten', fa: 'روزه', ms: 'puasa'}
      },
      {
        arabic: 'حَجٌّ', translit: 'ḥajj', count: 11, ref: '3:97',
        meanings: { en: 'pilgrimage', bn: 'হজ্জ', fr: 'pèlerinage', id: 'haji', ur: 'حج', tr: 'hac', ar: 'قَصْدُ الْبَيْت' , zh: '朝觐', ja: 'ハッジ巡礼', hi: 'हज', es: 'peregrinación', ru: 'паломничество', de: 'Pilgerfahrt', fa: 'حج', ms: 'haji'}
      },
      {
        arabic: 'دُعَاءٌ', translit: 'duʿāʾ', count: 15, ref: '14:39',
        meanings: { en: 'supplication', bn: 'দোয়া', fr: 'invocation', id: 'doa', ur: 'دعا', tr: 'dua', ar: 'طَلَبٌ مِنَ اللَّه' , zh: '祈祷，杜阿', ja: '祈り、ドゥアー', hi: 'दुआ', es: 'súplica', ru: 'мольба', de: 'Bittgebet', fa: 'دعا', ms: 'doa'}
      },
      {
        arabic: 'ذِكْرٌ', translit: 'dhikr', count: 76, ref: '15:9',
        meanings: { en: 'remembrance; reminder', bn: 'যিকির, স্মরণ', fr: 'rappel', id: 'zikir, peringatan', ur: 'ذکر، یاد', tr: 'zikir, anma', ar: 'تَذْكِرَة' , zh: '记念，提醒', ja: '念唱、教訓', hi: 'ज़िक्र; नसीहत', es: 'recuerdo; recordatorio', ru: 'поминание; напоминание', de: 'Gedenken; Ermahnung', fa: 'یاد؛ یادآوری', ms: 'zikir; peringatan'}
      },
      {
        arabic: 'سَجَدَ', translit: 'sajada', count: 64, ref: '96:19',
        meanings: { en: 'he prostrated', bn: 'সে সিজদা করল', fr: 'il s’est prosterné', id: 'dia bersujud', ur: 'سجدہ کیا', tr: 'secde etti', ar: 'خَرَّ لِلَّه' , zh: '他叩头', ja: '彼はサジダした', hi: 'उसने सजदा किया', es: 'se prosternó', ru: 'он пал ниц', de: 'er warf sich nieder', fa: 'سجده کرد', ms: 'dia sujud'}
      },
      {
        arabic: 'تَقْوَىٰ', translit: 'taqwā', count: 17, ref: '49:3',
        meanings: { en: 'God-consciousness', bn: 'তাকওয়া, আল্লাহভীতি', fr: 'piété', id: 'takwa', ur: 'تقویٰ', tr: 'takva', ar: 'خَشْيَةُ اللَّه' , zh: '敬畏', ja: 'タクワー', hi: 'तक़वा, अल्लाह का डर', es: 'temor de Allah', ru: 'богобоязненность', de: 'Gottesfurcht', fa: 'تقوا', ms: 'takwa'}
      },
      {
        arabic: 'مَسْجِدٌ', translit: 'masjid', count: 28, ref: '9:18',
        meanings: { en: 'mosque', bn: 'মসজিদ', fr: 'mosquée', id: 'masjid', ur: 'مسجد', tr: 'mescit, cami', ar: 'بَيْتُ الصَّلَاة' , zh: '清真寺', ja: 'モスク、マスジド', hi: 'मस्जिद', es: 'mezquita', ru: 'мечеть', de: 'Moschee', fa: 'مسجد', ms: 'masjid'}
      }
    ]
  },
  {
    id: 'hereafter', icon: '⚖️',
    names: { en: 'Hereafter', bn: 'পরকাল' },
    words: [
      {
        arabic: 'قِيَامَةٌ', translit: 'qiyāmah', count: 70, ref: '75:1',
        meanings: { en: 'resurrection', bn: 'কিয়ামত', fr: 'résurrection', id: 'kiamat', ur: 'قیامت', tr: 'kıyamet', ar: 'يَوْمُ الْبَعْث' , zh: '复活', ja: '復活', hi: 'क़यामत, दोबारा उठना', es: 'resurrección', ru: 'воскресение', de: 'Auferstehung', fa: 'رستاخیز', ms: 'kebangkitan'}
      },
      {
        arabic: 'بَعَثَ', translit: 'baʿatha', count: 67, ref: '2:56',
        meanings: { en: 'he raised, sent', bn: 'পুনরুত্থিত/প্রেরণ করলেন', fr: 'il a ressuscité, envoyé', id: 'dia membangkitkan', ur: 'اٹھایا، بھیجا', tr: 'diriltti, gönderdi', ar: 'أَحْيَا / أَرْسَل' , zh: '他复活，派遣', ja: '彼は復活させ派遣した', hi: 'उसने उठाया, भेजा', es: 'resucitó, envió', ru: 'он воскресил, послал', de: 'er erweckte, sandte', fa: 'برانگیخت، فرستاد', ms: 'dia membangkitkan, mengutus'}
      },
      {
        arabic: 'حِسَابٌ', translit: 'ḥisāb', count: 37, ref: '40:17',
        meanings: { en: 'reckoning, account', bn: 'হিসাব', fr: 'compte, jugement', id: 'perhitungan, hisab', ur: 'حساب', tr: 'hesap', ar: 'مُحَاسَبَة' , zh: '清算', ja: '清算', hi: 'हिसाब, लेखा-जोखा', es: 'cuenta, rendición de cuentas', ru: 'расчёт, отчёт', de: 'Abrechnung, Rechenschaft', fa: 'حساب، حسابرسی', ms: 'hisab, perhitungan'}
      },
      {
        arabic: 'مِيزَانٌ', translit: 'mīzān', count: 16, ref: '55:7',
        meanings: { en: 'balance, scale', bn: 'দাঁড়িপাল্লা, মিযান', fr: 'balance', id: 'timbangan', ur: 'ترازو، میزان', tr: 'mizan, terazi', ar: 'آلَةُ الْوَزْن' , zh: '天平，秤', ja: '天秤', hi: 'तराज़ू, मीज़ान', es: 'balanza, pesa', ru: 'весы, мера', de: 'Waage, Gleichgewicht', fa: 'ترازو، میزان', ms: 'neraca, timbangan'}
      },
      {
        arabic: 'أَجْرٌ', translit: 'ajr', count: 98, ref: '3:185',
        meanings: { en: 'reward, wage', bn: 'প্রতিদান, পুরস্কার', fr: 'récompense', id: 'pahala, ganjaran', ur: 'اجر، بدلہ', tr: 'ecir, mükâfat', ar: 'ثَوَاب' , zh: '报酬', ja: '報酬', hi: 'अज्र, मज़दूरी', es: 'recompensa, salario', ru: 'награда, плата', de: 'Lohn, Entgelt', fa: 'پاداش، مزد', ms: 'pahala, upah'}
      },
      {
        arabic: 'جَهَنَّمُ', translit: 'jahannam', count: 77, ref: '3:12',
        meanings: { en: 'Hellfire, Jahannam', bn: 'জাহান্নাম', fr: 'Géhenne, Enfer', id: 'neraka Jahanam', ur: 'جہنم', tr: 'cehennem', ar: 'دَارُ الْعَذَاب' , zh: '火狱，哲汗南', ja: 'ジャハンナム', hi: 'आग, जहन्नम', es: 'Infierno, Yahannam', ru: 'Адский огонь, Джаханнам', de: 'Höllenfeuer, Dschahannam', fa: 'آتش دوزخ، جهنم', ms: 'neraka, Jahannam'}
      },
      {
        arabic: 'فِرْدَوْسٌ', translit: 'firdaws', count: 2, ref: '18:107',
        meanings: { en: 'Firdaws, highest Paradise', bn: 'ফিরদাউস', fr: 'Firdaws, Paradis', id: 'Firdaus', ur: 'فردوس', tr: 'Firdevs', ar: 'أَعْلَى الْجَنَّة' , zh: '费尔道斯', ja: 'フィルダウス', hi: 'फ़िरदौस, जन्नत का सबसे ऊँचा दर्जा', es: 'Firdaws, el Paraíso más alto', ru: 'Фирдаус, высший Рай', de: 'Firdaus, höchstes Paradies', fa: 'فردوس، برترین بهشت', ms: 'Firdaus, syurga tertinggi'}
      },
      {
        arabic: 'خَالِدِينَ', translit: 'khālidīn', count: 45, ref: '4:57',
        meanings: { en: 'abiding forever', bn: 'চিরস্থায়ীভাবে', fr: 'éternellement', id: 'kekal di dalamnya', ur: 'ہمیشہ رہنے والے', tr: 'ebedî kalıcılar', ar: 'مَاكِثِينَ أَبَدًا' , zh: '永居者', ja: '永遠に留まる者', hi: 'हमेशा रहने वाले', es: 'morando para siempre', ru: 'пребывающие вечно', de: 'ewig verweilend', fa: 'جاودانه ماندگار', ms: 'kekal selama-lamanya'}
      }
    ]
  },

  // ---- Root-family clusters ----
  // Each cluster shows common Quranic derivatives of one trilateral root so
  // students recognise morphological patterns. Base forms already present in
  // VOCAB_WORDS (كِتَاب، عَلِمَ، رَحْمَة، خَلَقَ، كَفَرَ، حَمْد) are omitted here.

  {
    id: 'root-ktb', icon: '📖',
    names: { en: 'Root: ك-ت-ب (write)', bn: 'মূল: ك-ت-ب (লেখা)' },
    words: [
      {
        arabic: 'كَاتِبٌ', translit: 'kātib', count: 45, ref: '2:282',
        meanings: { en: 'writer, scribe', bn: 'লেখক, কাতিব', fr: 'écrivain, scribe', id: 'penulis, juru tulis', ur: 'لکھنے والا، کاتب', tr: 'yazıcı, kâtip', ar: 'مَنْ يَكْتُب', zh: '书记员，抄写者', ja: '書記、筆記者', hi: 'लिखने वाला, कातिब', es: 'escritor, escriba', ru: 'пишущий, писец', de: 'Schreiber', fa: 'نویسنده، کاتب', ms: 'penulis, jurutulis' }
      },
      {
        arabic: 'مَكْتُوبٌ', translit: 'maktūb', count: 4, ref: '4:103',
        meanings: { en: 'written; prescribed', bn: 'লেখা, নির্ধারিত', fr: 'écrit; prescrit', id: 'tertulis; ditetapkan', ur: 'لکھا ہوا، مقدّر', tr: 'yazılmış; farz kılınmış', ar: 'مُقَرَّرٌ كِتَابَةً', zh: '已写的；注定的', ja: '記された；定められた', hi: 'लिखा हुआ; फ़र्ज़ किया हुआ', es: 'escrito; prescrito', ru: 'написанное; предписанное', de: 'geschrieben; vorgeschrieben', fa: 'نوشته‌شده؛ مقرر', ms: 'tertulis; diwajibkan' }
      },
      {
        arabic: 'كِتَابَةٌ', translit: 'kitāba', count: 3, ref: '2:282',
        meanings: { en: 'writing, inscription', bn: 'লেখা (কাজ), কিতাবাত', fr: 'écriture, rédaction', id: 'penulisan, kitabah', ur: 'لکھنا، کتابت', tr: 'yazı yazma', ar: 'فِعْلُ الْكِتَابَة', zh: '书写（行为）', ja: '書くこと、執筆', hi: 'लिखाई, लिखावट', es: 'escritura, inscripción', ru: 'письмо, надпись', de: 'Schreiben, Inschrift', fa: 'نوشتن، نگارش', ms: 'tulisan, catatan' }
      },
      {
        arabic: 'كُتُبٌ', translit: 'kutub', count: 20, ref: '2:177',
        meanings: { en: 'books, scriptures (pl.)', bn: 'কিতাবসমূহ, গ্রন্থাবলি', fr: 'livres, Écritures (pl.)', id: 'kitab-kitab (jamak)', ur: 'کتابیں، کتب', tr: 'kitaplar (çoğul)', ar: 'جَمْعُ كِتَاب', zh: '诸经典，众书', ja: '諸書、聖典複数', hi: 'किताबें, सहीफ़े (बहुवचन)', es: 'libros, escrituras (pl.)', ru: 'книги, писания (мн. ч.)', de: 'Bücher, Schriften (Pl.)', fa: 'کتاب‌ها، کتاب‌های آسمانی (جمع)', ms: 'kitab-kitab (jamak)' }
      }
    ]
  },
  {
    id: 'root-alm', icon: '🎓',
    names: { en: 'Root: ع-ل-م (know)', bn: 'মূল: ع-ل-م (জানা)' },
    words: [
      {
        arabic: 'عِلْمٌ', translit: 'ʿilm', count: 105, ref: '2:32',
        meanings: { en: 'knowledge, learning', bn: 'জ্ঞান, ইলম', fr: 'savoir, science', id: 'ilmu, pengetahuan', ur: 'علم، جانکاری', tr: 'ilim, bilgi', ar: 'مَعْرِفَةٌ وَإِدْرَاك', zh: '知识，学问', ja: '知識、学問', hi: 'इल्म, जानकारी', es: 'conocimiento, saber', ru: 'знание, учёность', de: 'Wissen, Gelehrsamkeit', fa: 'دانش، آموختن', ms: 'ilmu, pengetahuan' }
      },
      {
        arabic: 'عَالِمٌ', translit: 'ʿālim', count: 33, ref: '6:73',
        meanings: { en: 'knowing; scholar', bn: 'জ্ঞানী, আলিম', fr: 'savant; érudit', id: 'mengetahui; ulama', ur: 'جاننے والا، عالم', tr: 'bilen; âlim', ar: 'مُدْرِكٌ عَارِف', zh: '全知的；学者', ja: '知る者；学者', hi: 'जानने वाला; आलिम', es: 'conocedor; sabio', ru: 'знающий; учёный', de: 'wissend; Gelehrter', fa: 'دانا؛ عالم', ms: 'yang mengetahui; orang berilmu' }
      },
      {
        arabic: 'مَعْلُومٌ', translit: 'maʿlūm', count: 13, ref: '15:38',
        meanings: { en: 'known; determined', bn: 'জানা, নির্ধারিত', fr: 'connu; déterminé', id: 'diketahui; ditentukan', ur: 'معلوم، جانا ہوا', tr: 'bilinen; belirlenmiş', ar: 'مَنْ أُدْرِكَ عِلْمُهُ', zh: '已知的；确定的', ja: '知られた；確定した', hi: 'जाना-पहचाना; मुक़र्रर', es: 'conocido; determinado', ru: 'известный; определённый', de: 'bekannt; festgesetzt', fa: 'معلوم؛ معیّن', ms: 'diketahui; ditentukan' }
      },
      {
        arabic: 'أَعْلَمُ', translit: 'aʿlam', count: 46, ref: '2:216',
        meanings: { en: 'more knowing; All-Knowing', bn: 'অধিক জ্ঞাত, সর্বজ্ঞ', fr: 'plus savant; omniscient', id: 'lebih mengetahui; Maha Mengetahui', ur: 'زیادہ جاننے والا', tr: 'daha iyi bilen; her şeyi bilen', ar: 'أَشَدُّ عِلْمًا', zh: '更知悉的；全知', ja: 'より知る者；全知', hi: 'ज़्यादा जानने वाला; सब कुछ जानने वाला', es: 'que más sabe; Omnisciente', ru: 'более знающий; Всезнающий', de: 'wissender; Allwissender', fa: 'داناتر؛ دانای مطلق', ms: 'lebih mengetahui; Maha Mengetahui' }
      },
      {
        arabic: 'عَالَمِينَ', translit: 'ʿālamīn', count: 73, ref: '1:2',
        meanings: { en: 'worlds, all creation', bn: 'জগতসমূহ, আলামিন', fr: 'mondes, univers', id: 'seluruh alam semesta', ur: 'تمام جہانوں کے', tr: 'âlemler, bütün varlıklar', ar: 'جَمِيعُ الْخَلَائِق', zh: '万世界，众世界', ja: '全世界、万物', hi: 'सारे जहान, सारी मख़लूक़', es: 'mundos, toda la creación', ru: 'миры, всё творение', de: 'Welten, die gesamte Schöpfung', fa: 'جهانیان، همه‌ی آفریدگان', ms: 'sekalian alam, seluruh makhluk' }
      }
    ]
  },
  {
    id: 'root-rhm', icon: '💚',
    names: { en: 'Root: ر-ح-م (mercy)', bn: 'মূল: ر-ح-م (রহমত)' },
    words: [
      {
        arabic: 'الرَّحْمَـٰنُ', translit: 'al-raḥmān', count: 57, ref: '1:3',
        meanings: { en: 'the Most Gracious', bn: 'রহমান, পরম দয়ালু', fr: 'le Tout-Miséricordieux', id: 'Yang Maha Pengasih', ur: 'رحمان، بہت مہربان', tr: 'Rahman, çok merhametli', ar: 'كَثِيرُ الرَّحْمَة', zh: '至仁的', ja: '慈悲深き者', hi: 'बेहद मेहरबान', es: 'el Compasivo', ru: 'Милостивый', de: 'der Allerbarmer', fa: 'رحمان، بسیار بخشنده', ms: 'Yang Maha Pemurah' }
      },
      {
        arabic: 'الرَّحِيمُ', translit: 'al-raḥīm', count: 114, ref: '1:3',
        meanings: { en: 'the Most Merciful', bn: 'রাহীম, অতি দয়ালু', fr: 'le Très-Miséricordieux', id: 'Yang Maha Penyayang', ur: 'رحیم، بہت رحم کرنے والا', tr: 'Rahim, pek merhametli', ar: 'دَائِمُ الرَّحْمَة', zh: '至慈的', ja: '深く慈悲ある者', hi: 'निहायत रहम करने वाला', es: 'el Misericordioso', ru: 'Милосердный', de: 'der Barmherzige', fa: 'رحیم، بسیار مهربان', ms: 'Yang Maha Mengasihani' }
      },
      {
        arabic: 'أَرْحَمُ', translit: 'arḥam', count: 3, ref: '12:64',
        meanings: { en: 'most merciful (superlative)', bn: 'সর্বাধিক দয়ালু', fr: 'le plus miséricordieux', id: 'paling penyayang', ur: 'سب سے زیادہ رحم کرنے والا', tr: 'en merhametli', ar: 'أَكْثَرُ رَحْمَةً', zh: '最有慈悯者', ja: '最も慈悲深い', hi: 'सबसे ज़्यादा रहम करने वाला', es: 'más misericordioso (superlativo)', ru: 'милосерднейший (превосходная степень)', de: 'barmherzigster (Superlativ)', fa: 'مهربان‌ترین (صفت برتر)', ms: 'paling mengasihani (superlatif)' }
      },
      {
        arabic: 'رَحِمٌ', translit: 'raḥim', count: 15, ref: '4:1',
        meanings: { en: 'womb; ties of kinship', bn: 'গর্ভ; আত্মীয়তার বন্ধন', fr: 'ventre maternel; liens de parenté', id: 'rahim; silaturahmi', ur: 'رحم، کوکھ؛ رشتہ داری', tr: 'rahim; akrabalık bağları', ar: 'مَوْضِعُ الْجَنِين', zh: '子宫；亲属关系', ja: '子宮；血縁の絆', hi: 'कोख; रिश्तेदारी के बंधन', es: 'seno materno; lazos de parentesco', ru: 'утроба; родственные узы', de: 'Mutterleib; Verwandtschaftsbande', fa: 'رحم؛ پیوند خویشاوندی', ms: 'rahim; silaturahim' }
      }
    ]
  },
  {
    id: 'root-slh', icon: '⚖️',
    names: { en: 'Root: ص-ل-ح (righteous)', bn: 'মূল: ص-ل-ح (সৎ/সংস্কার)' },
    words: [
      {
        arabic: 'صَالِحٌ', translit: 'ṣāliḥ', count: 190, ref: '4:69',
        meanings: { en: 'righteous, good', bn: 'সৎ, নেক, সালিহ', fr: 'vertueux, bon', id: 'shalih, orang baik', ur: 'صالح، نیک', tr: 'salih, erdemli', ar: 'حَسَنُ الْعَمَل', zh: '善良的，正直的', ja: '義人、善き者', hi: 'नेक, भला', es: 'virtuoso, bueno', ru: 'праведный, благой', de: 'rechtschaffen, gut', fa: 'صالح، نیک', ms: 'soleh, baik' }
      },
      {
        arabic: 'صَالِحَاتٌ', translit: 'ṣāliḥāt', count: 60, ref: '2:25',
        meanings: { en: 'good deeds; righteous (women)', bn: 'সৎকাজ; সৎ নারীরা', fr: 'bonnes œuvres; femmes vertueuses', id: 'amal shalih; perempuan shalihah', ur: 'صالحات، نیک اعمال', tr: 'salih ameller; saliha kadınlar', ar: 'أَعْمَالٌ حَسَنَة', zh: '善行；善良的女性', ja: '善行；善い女性たち', hi: 'नेक काम; नेक (औरतें)', es: 'buenas obras; virtuosas (mujeres)', ru: 'благие дела; праведные (женщины)', de: 'gute Taten; rechtschaffene (Frauen)', fa: 'کارهای شایسته؛ (زنان) صالح', ms: 'amal soleh; (wanita) solehah' }
      },
      {
        arabic: 'إِصْلَاحٌ', translit: 'iṣlāḥ', count: 9, ref: '2:220',
        meanings: { en: 'reform, reconciliation', bn: 'সংস্কার, সন্ধি', fr: 'réforme, réconciliation', id: 'perdamaian, reformasi', ur: 'اصلاح، صلح', tr: 'ıslah, uzlaşma', ar: 'إِزَالَةُ الْفَسَاد', zh: '改革，调解', ja: '改革、和解', hi: 'सुधार, सुलह', es: 'reforma, reconciliación', ru: 'исправление, примирение', de: 'Besserung, Versöhnung', fa: 'اصلاح، آشتی دادن', ms: 'islah, perdamaian' }
      },
      {
        arabic: 'مُصْلِحٌ', translit: 'muṣliḥ', count: 5, ref: '2:11',
        meanings: { en: 'reformer, peacemaker', bn: 'সংস্কারক, শান্তিস্থাপক', fr: 'réformateur, médiateur', id: 'pembuat perdamaian, pereformasi', ur: 'اصلاح کرنے والا', tr: 'ıslah edici, barış yapıcı', ar: 'سَاعٍ إِلَى الصَّلَاح', zh: '改革者，调解人', ja: '改革者、平和をつくる者', hi: 'सुधार करने वाला, सुलह कराने वाला', es: 'reformador, conciliador', ru: 'исправляющий, миротворец', de: 'Besserer, Friedensstifter', fa: 'اصلاحگر، آشتی‌دهنده', ms: 'pembawa islah, pendamai' }
      },
      {
        arabic: 'صُلْحٌ', translit: 'ṣulḥ', count: 1, ref: '4:128',
        meanings: { en: 'peace, reconciliation', bn: 'সন্ধি, মিটমাট', fr: 'paix, réconciliation', id: 'perdamaian, shulhu', ur: 'صلح، سلامتی', tr: 'sulh, barış', ar: 'إِنْهَاءُ النِّزَاع', zh: '和解，和约', ja: '和解、講和', hi: 'सुलह, मेल-मिलाप', es: 'paz, reconciliación', ru: 'мир, примирение', de: 'Frieden, Versöhnung', fa: 'صلح، آشتی', ms: 'perdamaian, berbaik semula' }
      }
    ]
  },
  {
    id: 'root-hmd', icon: '🌟',
    names: { en: 'Root: ح-م-د (praise)', bn: 'মূল: ح-م-د (প্রশংসা)' },
    words: [
      {
        arabic: 'حَمِيدٌ', translit: 'ḥamīd', count: 17, ref: '14:8',
        meanings: { en: 'praiseworthy', bn: 'প্রশংসনীয়, হামীদ', fr: 'digne de louange', id: 'Maha Terpuji', ur: 'قابلِ تعریف، حمید', tr: 'övgüye layık, Hamid', ar: 'مُسْتَحِقُّ الْحَمْد', zh: '值得赞美的', ja: '讃えられるべき者', hi: 'तारीफ़ के लायक़', es: 'digno de alabanza', ru: 'достохвальный', de: 'lobenswürdig', fa: 'ستوده', ms: 'terpuji' }
      },
      {
        arabic: 'مُحَمَّدٌ', translit: 'muḥammad', count: 4, ref: '3:144',
        meanings: { en: 'Muhammad; the praised one', bn: 'মুহাম্মদ; প্রশংসিত', fr: 'Muhammad; le Loué', id: 'Muhammad; orang yang terpuji', ur: 'محمد؛ قابل تعریف', tr: 'Muhammed; övülmüş', ar: 'اسْمُ النَّبِيّ ﷺ', zh: '穆罕默德；受赞颂的', ja: 'ムハンマド；称えられた者', hi: 'मुहम्मद; जिसकी तारीफ़ की गई', es: 'Muhammad; el alabado', ru: 'Мухаммад; восхваляемый', de: 'Muhammad; der Gelobte', fa: 'محمد؛ ستوده‌شده', ms: 'Muhammad; yang dipuji' }
      },
      {
        arabic: 'أَحْمَدُ', translit: 'aḥmad', count: 1, ref: '61:6',
        meanings: { en: 'more praiseworthy; Prophet\'s name', bn: 'অধিক প্রশংসনীয়; নবীর নাম', fr: 'plus digne de louange; nom du Prophète', id: 'lebih terpuji; nama Nabi', ur: 'زیادہ قابلِ تعریف؛ نبی کا نام', tr: 'daha övgüye değer; Peygamberin adı', ar: 'أَفْعَلُ التَّفْضِيلِ مِنَ الْحَمْد', zh: '更值得赞美；先知之名', ja: 'より称えられる者；預言者の名', hi: 'ज़्यादा तारीफ़ के लायक़; नबी ﷺ का नाम', es: 'más digno de alabanza; nombre del Profeta', ru: 'более достойный хвалы; имя Пророка ﷺ', de: 'lobenswürdiger; Name des Propheten ﷺ', fa: 'ستوده‌تر؛ نام پیامبر ﷺ', ms: 'lebih terpuji; nama Nabi ﷺ' }
      },
      {
        arabic: 'مَحْمُودٌ', translit: 'maḥmūd', count: 1, ref: '17:79',
        meanings: { en: 'praised, lauded', bn: 'প্রশংসিত, মাহমুদ', fr: 'loué, glorifié', id: 'yang dipuji, mahmud', ur: 'محمود، تعریف شدہ', tr: 'övülen, mahmut', ar: 'مَنْ أَثْنَى عَلَيْهِ النَّاس', zh: '受赞扬的', ja: '称えられた者', hi: 'तारीफ़ किया हुआ, सराहा गया', es: 'alabado, elogiado', ru: 'восхваляемый, прославленный', de: 'gelobt, gepriesen', fa: 'ستوده، پسندیده', ms: 'dipuji, disanjung' }
      }
    ]
  },
  {
    id: 'root-khlq', icon: '🌐',
    names: { en: 'Root: خ-ل-ق (create)', bn: 'মূল: خ-ل-ق (সৃষ্টি)' },
    words: [
      {
        arabic: 'خَلْقٌ', translit: 'khalq', count: 15, ref: '31:11',
        meanings: { en: 'creation; created beings', bn: 'সৃষ্টি; সৃষ্টিকুল', fr: 'création; créatures', id: 'penciptaan; makhluk', ur: 'خلق، پیدائش؛ مخلوق', tr: 'yaratma; yaratıklar', ar: 'إِيجَادُ الْأَشْيَاء', zh: '创造；受造物', ja: '創造；被造物', hi: 'पैदा करना; मख़लूक़', es: 'creación; seres creados', ru: 'творение; создания', de: 'Schöpfung; Geschöpfe', fa: 'آفرینش؛ آفریدگان', ms: 'penciptaan; makhluk' }
      },
      {
        arabic: 'خَالِقٌ', translit: 'khāliq', count: 8, ref: '59:24',
        meanings: { en: 'creator', bn: 'সৃষ্টিকর্তা, খালিক', fr: 'créateur', id: 'pencipta, khaliq', ur: 'خالق، پیدا کرنے والا', tr: 'yaratan, Hâlik', ar: 'مُوجِدُ الْكَوْن', zh: '造物主，创造者', ja: '創造者、ハーリク', hi: 'पैदा करने वाला', es: 'creador', ru: 'творец', de: 'Schöpfer', fa: 'آفریننده', ms: 'pencipta' }
      },
      {
        arabic: 'مَخْلُوقٌ', translit: 'makhlūq', count: 2, ref: '36:71',
        meanings: { en: 'created being, creature', bn: 'সৃষ্ট বস্তু, মাখলুক', fr: 'créature', id: 'makhluk, yang diciptakan', ur: 'مخلوق، پیدا کردہ', tr: 'yaratılmış varlık, mahlûk', ar: 'مَا أَوْجَدَهُ اللَّه', zh: '受造物，被造者', ja: '被造物、マフルーク', hi: 'पैदा की हुई चीज़, मख़लूक़', es: 'ser creado, criatura', ru: 'сотворённое, творение', de: 'Geschöpf, Kreatur', fa: 'آفریده، مخلوق', ms: 'makhluk, ciptaan' }
      },
      {
        arabic: 'خُلُقٌ', translit: 'khuluq', count: 5, ref: '68:4',
        meanings: { en: 'character, moral nature', bn: 'স্বভাব, চরিত্র, আখলাক', fr: 'caractère, mœurs', id: 'akhlak, budi pekerti', ur: 'اخلاق، خُلق، کردار', tr: 'ahlak, karakter', ar: 'طِبَاعُ النَّفْس', zh: '品德，道德本性', ja: '品性、道徳的性質', hi: 'अख़लाक़, स्वभाव', es: 'carácter, naturaleza moral', ru: 'нрав, характер', de: 'Charakter, Wesensart', fa: 'خُلق، سرشت اخلاقی', ms: 'akhlak, budi pekerti' }
      }
    ]
  },
  {
    id: 'root-kfr', icon: '⚡',
    names: { en: 'Root: ك-ف-ر (disbelieve)', bn: 'মূল: ك-ف-ر (কুফর)' },
    words: [
      {
        arabic: 'كُفْرٌ', translit: 'kufr', count: 25, ref: '2:108',
        meanings: { en: 'disbelief, ingratitude', bn: 'কুফর, অবিশ্বাস', fr: 'mécréance, ingratitude', id: 'kekufuran', ur: 'کفر، ناشکری', tr: 'küfür, inkâr', ar: 'جُحُودُ الْحَقّ', zh: '不信，忘恩', ja: '不信仰、クフル', hi: 'कुफ़्र, नाशुक्री', es: 'incredulidad, ingratitud', ru: 'неверие, неблагодарность', de: 'Unglaube, Undankbarkeit', fa: 'کفر، ناسپاسی', ms: 'kekufuran, tidak bersyukur' }
      },
      {
        arabic: 'كَافِرٌ', translit: 'kāfir', count: 200, ref: '2:6',
        meanings: { en: 'disbeliever, unbeliever', bn: 'কাফির, অবিশ্বাসী', fr: 'mécréant, incroyant', id: 'kafir, orang yang ingkar', ur: 'کافر، منکر', tr: 'kâfir, inkârcı', ar: 'مَنْ جَحَدَ الْحَقّ', zh: '不信者，卡菲尔', ja: '不信者、カーフィル', hi: 'काफ़िर, इनकार करने वाला', es: 'incrédulo, no creyente', ru: 'неверующий, неверный', de: 'Ungläubiger, Leugner', fa: 'کافر، ناباور', ms: 'kafir, orang yang ingkar' }
      },
      {
        arabic: 'كَفَّارَةٌ', translit: 'kaffāra', count: 6, ref: '5:89',
        meanings: { en: 'expiation, atonement', bn: 'কাফফারা, প্রায়শ্চিত্ত', fr: 'expiation, rachat', id: 'kafarat, penebusan dosa', ur: 'کفارہ، تلافی', tr: 'kefaret, fidye', ar: 'مَا يُكَفِّرُ الذَّنْب', zh: '赎罪，赎金', ja: '贖罪、カッファーラ', hi: 'कफ़्फ़ारा, प्रायश्चित', es: 'expiación, reparación', ru: 'искупление, заглаживание вины', de: 'Sühne, Buße', fa: 'کفاره، جبران گناه', ms: 'kafarah, penebus dosa' }
      },
      {
        arabic: 'كَافُورٌ', translit: 'kāfūr', count: 1, ref: '76:5',
        meanings: { en: 'camphor; fragrant drink of Paradise', bn: 'কাফূর, সুগন্ধিযুক্ত পানীয়', fr: 'camphre; breuvage parfumé du Paradis', id: 'kafur, minuman wangi surga', ur: 'کافور، خوشبو دار مشروب', tr: 'kâfur, cennet içeceği', ar: 'نَبَاتٌ طَيِّبُ الرَّائِحَة', zh: '樟脑；天园香饮', ja: 'カーフール；天国の飲み物', hi: 'काफ़ूर; जन्नत का ख़ुशबूदार पेय', es: 'alcanfor; bebida aromática del Paraíso', ru: 'камфара; благоуханный напиток Рая', de: 'Kampfer; duftendes Getränk des Paradieses', fa: 'کافور؛ نوشیدنی خوشبوی بهشت', ms: 'kapur barus; minuman harum syurga' }
      }
    ]
  },
  {
    id: 'root-hdy', icon: '🧭',
    names: { en: 'Root: ه-د-ي (guide)', bn: 'মূল: ه-د-ي (হিদায়াত)' },
    words: [
      {
        arabic: 'هَادٍ', translit: 'hādī', count: 11, ref: '13:7',
        meanings: { en: 'guide, leader to truth', bn: 'পথপ্রদর্শক, হাদী', fr: 'guide, directeur', id: 'pemberi petunjuk, hadi', ur: 'ہادی، رہنما', tr: 'hidayete erdiren, Hâdi', ar: 'مَنْ يَدُلُّ عَلَى الصَّوَاب', zh: '引导者，向导', ja: '導く者、ハーディー', hi: 'रहनुमा, हक़ की राह दिखाने वाला', es: 'guía, el que conduce a la verdad', ru: 'проводник, ведущий к истине', de: 'Leiter, Führer zur Wahrheit', fa: 'هدایتگر، راهنما به سوی حق', ms: 'pemberi petunjuk, pembimbing kepada kebenaran' }
      },
      {
        arabic: 'مُهْتَدٍ', translit: 'muhtadī', count: 14, ref: '17:97',
        meanings: { en: 'guided, rightly guided', bn: 'হিদায়াতপ্রাপ্ত, পথপ্রদর্শিত', fr: 'bien guidé, qui a trouvé la voie', id: 'orang yang mendapat petunjuk', ur: 'ہدایت یافتہ', tr: 'hidayete ermiş', ar: 'مَنِ اهْتَدَى', zh: '得到引导者', ja: '導かれた者', hi: 'हिदायत पाया हुआ, सही राह पर', es: 'guiado, bien guiado', ru: 'ведомый, следующий прямым путём', de: 'rechtgeleitet', fa: 'هدایت‌یافته، راه‌یافته', ms: 'mendapat petunjuk, berada di atas petunjuk' }
      },
      {
        arabic: 'اهْدِنَا', translit: 'ihdinā', count: 1, ref: '1:6',
        meanings: { en: 'guide us (supplication)', bn: 'আমাদের পথ দেখাও', fr: 'guide-nous', id: 'tunjukilah kami', ur: 'ہمیں ہدایت دے', tr: 'bizi doğru yola ilet', ar: 'أَرْشِدْنَا', zh: '引导我们', ja: '私たちを導いてください', hi: 'हमें राह दिखा (दुआ)', es: 'guíanos (súplica)', ru: 'веди нас (мольба)', de: 'leite uns (Bittgebet)', fa: 'ما را هدایت کن (دعا)', ms: 'tunjukilah kami (doa)' }
      },
      {
        arabic: 'هِدَايَةٌ', translit: 'hidāya', count: 3, ref: '2:120',
        meanings: { en: 'guidance, right path', bn: 'হিদায়াত, সঠিক পথ', fr: 'guidée, voie droite', id: 'hidayah, petunjuk yang benar', ur: 'ہدایت، صحیح راستہ', tr: 'hidayet, doğru yol', ar: 'إِرْشَادٌ إِلَى الصَّوَاب', zh: '正道引导', ja: 'ヒダーヤ、正しい導き', hi: 'हिदायत, सीधी राह', es: 'guía, camino recto', ru: 'руководство, верный путь', de: 'Rechtleitung, rechter Weg', fa: 'هدایت، راه درست', ms: 'hidayah, jalan yang benar' }
      }
    ]
  },
  {
    id: 'root-dkr', icon: '🔔',
    names: { en: 'Root: ذ-ك-ر (remember)', bn: 'মূল: ذ-ك-ر (যিকির/স্মরণ)' },
    words: [
      {
        arabic: 'ذَاكِرٌ', translit: 'dhākir', count: 2, ref: '33:35',
        meanings: { en: 'one who remembers Allah', bn: 'স্মরণকারী, জিকিরকারী', fr: 'celui qui fait dhikr', id: 'orang yang berdzikir', ur: 'ذاکر، ذکر کرنے والا', tr: 'zikreden, anan', ar: 'مَنْ يَذْكُرُ اللَّه', zh: '记念者', ja: '念唱する者', hi: 'अल्लाह को याद करने वाला', es: 'el que recuerda a Allah', ru: 'поминающий Аллаха', de: 'einer, der Allahs gedenkt', fa: 'کسی که الله را یاد می‌کند', ms: 'orang yang mengingati Allah' }
      },
      {
        arabic: 'مَذْكُورٌ', translit: 'madhkūr', count: 3, ref: '76:1',
        meanings: { en: 'mentioned, remembered', bn: 'উল্লিখিত, স্মরিত', fr: 'mentionné, rappelé', id: 'yang disebut, yang diingat', ur: 'مذکور، یاد کیا گیا', tr: 'zikredilen, bahsedilen', ar: 'مَنْ ذُكِرَ', zh: '被提及的', ja: '言及された者', hi: 'ज़िक्र किया हुआ, याद किया गया', es: 'mencionado, recordado', ru: 'упомянутый, памятный', de: 'erwähnt, gedacht', fa: 'یادشده، به یاد آمده', ms: 'disebut, diingati' }
      },
      {
        arabic: 'تَذْكِرَةٌ', translit: 'tadhkira', count: 10, ref: '80:11',
        meanings: { en: 'reminder, admonition', bn: 'তাযকিরা, সতর্কতা', fr: 'rappel, avertissement', id: 'peringatan, tadzkirah', ur: 'تذکرہ، یاد دہانی', tr: 'öğüt, hatırlatma', ar: 'مَا يُذَكِّرُ بِاللَّه', zh: '提醒，训诫', ja: '訓戒、タズキラ', hi: 'याददिहानी, नसीहत', es: 'recordatorio, amonestación', ru: 'напоминание, увещевание', de: 'Erinnerung, Ermahnung', fa: 'یادآوری، اندرز', ms: 'peringatan, nasihat' }
      },
      {
        arabic: 'ذِكْرَىٰ', translit: 'dhikrā', count: 35, ref: '6:90',
        meanings: { en: 'reminder, exhortation', bn: 'স্মরণ, উপদেশ', fr: 'rappel, souvenance', id: 'pengingat, kenangan', ur: 'یاد دہانی، نصیحت', tr: 'anma, hatırlatma', ar: 'تَنْبِيهٌ وَتَذْكِير', zh: '劝谕，警示', ja: '思い起こし、忠告', hi: 'याददिहानी, नसीहत की बात', es: 'recordatorio, exhortación', ru: 'напоминание, назидание', de: 'Erinnerung, Mahnung', fa: 'یادآوری، پند', ms: 'pengajaran, peringatan' }
      }
    ]
  },
  {
    id: 'root-nwr', icon: '💡',
    names: { en: 'Root: ن-و-ر (light)', bn: 'মূল: ن-و-ر (নূর/আলো)' },
    words: [
      {
        arabic: 'مُنِيرٌ', translit: 'munīr', count: 7, ref: '33:46',
        meanings: { en: 'illuminating, giving light', bn: 'আলো দানকারী, মুনীর', fr: 'illuminant, lumineux', id: 'pemberi cahaya, munir', ur: 'روشن کرنے والا، منیر', tr: 'aydınlatan, nurlu', ar: 'مُضِيءٌ كَالنُّور', zh: '发光的，照耀的', ja: '光を放つ者、ムニール', hi: 'रोशन करने वाला, रोशनी देने वाला', es: 'luminoso, que da luz', ru: 'освещающий, светоносный', de: 'erleuchtend, Licht spendend', fa: 'روشنی‌بخش، نورافشان', ms: 'menerangi, memberi cahaya' }
      },
      {
        arabic: 'أَنْوَارٌ', translit: 'anwār', count: 1, ref: '24:40',
        meanings: { en: 'lights (plural)', bn: 'আলোসমূহ, অনওয়ার', fr: 'lumières (pluriel)', id: 'cahaya-cahaya (jamak)', ur: 'انوار، روشنیاں', tr: 'nurlar (çoğul)', ar: 'جَمْعُ نُور', zh: '诸光，众光', ja: '光々、アンワール', hi: 'रोशनियाँ (बहुवचन)', es: 'luces (plural)', ru: 'светила (мн. ч.)', de: 'Lichter (Plural)', fa: 'نورها (جمع)', ms: 'cahaya-cahaya (jamak)' }
      },
      {
        arabic: 'تَنْوِيرٌ', translit: 'tanwīr', count: 2, ref: '24:35',
        meanings: { en: 'enlightening, illuminating', bn: 'আলোকদান, প্রদীপন', fr: 'illumination, éclairage', id: 'penerangan, tanwir', ur: 'روشن کرنا، نور پھیلانا', tr: 'aydınlatma, nurlandırma', ar: 'إِضَاءَةٌ وَإِنَارَة', zh: '照明，启示', ja: '照らすこと、啓蒙', hi: 'रोशन करना, उजाला करना', es: 'iluminación, esclarecimiento', ru: 'просвещение, озарение', de: 'erhellend, erleuchtend', fa: 'روشن‌سازی، نورافشانی', ms: 'pencerahan, penerangan' }
      }
    ]
  },
  // v153 additions — 6 themes / 45 corpus-verified words (2026-07-28)
  {
    "id": "weather",
    "icon": "🌦️",
    "names": {
      "en": "Weather & sky",
      "bn": "আবহাওয়া ও আকাশ"
    },
    "words": [
      {
        "arabic": "مَطَرٌ",
        "translit": "maṭar",
        "count": 4,
        "ref": "4:102",
        "meanings": {
          "en": "rain",
          "bn": "বৃষ্টি",
          "fr": "pluie",
          "id": "hujan",
          "ur": "بارش",
          "tr": "yağmur",
          "ar": "مَاءُ السَّمَاء",
          "zh": "雨",
          "ja": "雨", hi: 'बारिश', es: 'lluvia', ru: 'дождь', de: 'Regen', fa: 'باران', ms: 'hujan'
        }
      },
      {
        "arabic": "غَيْثٌ",
        "translit": "ghayth",
        "count": 1,
        "ref": "57:20",
        "meanings": {
          "en": "rain, saving rain",
          "bn": "রহমতের বৃষ্টি",
          "fr": "pluie bienfaisante",
          "id": "hujan (pertolongan)",
          "ur": "بارانِ رحمت",
          "tr": "rahmet yağmuru",
          "ar": "مَطَرٌ نَافِع",
          "zh": "甘霖",
          "ja": "恵みの雨", hi: 'बारिश, रहमत की बारिश', es: 'lluvia, lluvia benéfica', ru: 'дождь, спасительный дождь', de: 'Regen, rettender Regen', fa: 'باران، باران رحمت', ms: 'hujan, hujan rahmat'
        }
      },
      {
        "arabic": "سَحَابٌ",
        "translit": "saḥāb",
        "count": 2,
        "ref": "24:40",
        "meanings": {
          "en": "clouds",
          "bn": "মেঘ",
          "fr": "nuages",
          "id": "awan",
          "ur": "بادل",
          "tr": "bulut",
          "ar": "غَيْم",
          "zh": "云",
          "ja": "雲", hi: 'बादल', es: 'nubes', ru: 'облака', de: 'Wolken', fa: 'ابرها', ms: 'awan'
        }
      },
      {
        "arabic": "الْبَرْقُ",
        "translit": "al-barq",
        "count": 3,
        "ref": "2:20",
        "meanings": {
          "en": "lightning",
          "bn": "বিদ্যুৎ, বজ্রঝলক",
          "fr": "éclair",
          "id": "kilat",
          "ur": "بجلی",
          "tr": "şimşek",
          "ar": "وَمِيض",
          "zh": "闪电",
          "ja": "稲妻", hi: 'बिजली', es: 'relámpago', ru: 'молния', de: 'Blitz', fa: 'آذرخش', ms: 'kilat'
        }
      },
      {
        "arabic": "الرَّعْدُ",
        "translit": "al-raʿd",
        "count": 1,
        "ref": "13:13",
        "meanings": {
          "en": "thunder",
          "bn": "বজ্রধ্বনি",
          "fr": "tonnerre",
          "id": "guntur",
          "ur": "گرج",
          "tr": "gök gürültüsü",
          "ar": "صَوْتُ السَّحَاب",
          "zh": "雷",
          "ja": "雷", hi: 'गरज', es: 'trueno', ru: 'гром', de: 'Donner', fa: 'تندر', ms: 'guruh'
        }
      },
      {
        "arabic": "بَرَدٌ",
        "translit": "barad",
        "count": 1,
        "ref": "24:43",
        "meanings": {
          "en": "hail",
          "bn": "শিলাবৃষ্টি",
          "fr": "grêle",
          "id": "hujan es",
          "ur": "اولے",
          "tr": "dolu",
          "ar": "حَبُّ الْغَمَام",
          "zh": "冰雹",
          "ja": "雹", hi: 'ओले', es: 'granizo', ru: 'град', de: 'Hagel', fa: 'تگرگ', ms: 'hujan batu'
        }
      },
      {
        "arabic": "إِعْصَارٌ",
        "translit": "iʿṣār",
        "count": 1,
        "ref": "2:266",
        "meanings": {
          "en": "whirlwind",
          "bn": "ঘূর্ণিঝড়",
          "fr": "tourbillon",
          "id": "angin puting beliung",
          "ur": "بگولا، آندھی",
          "tr": "kasırga",
          "ar": "رِيحٌ عَاصِفَة",
          "zh": "旋风",
          "ja": "つむじ風", hi: 'बवंडर', es: 'torbellino', ru: 'вихрь', de: 'Wirbelsturm', fa: 'گردباد', ms: 'angin puting beliung'
        }
      }
    ]
  },
  {
    "id": "food",
    "icon": "🍯",
    "names": {
      "en": "Food & provision",
      "bn": "খাদ্য ও রিযিক"
    },
    "words": [
      {
        "arabic": "طَعَامٌ",
        "translit": "ṭaʿām",
        "count": 11,
        "ref": "2:61",
        "meanings": {
          "en": "food",
          "bn": "খাবার",
          "fr": "nourriture",
          "id": "makanan",
          "ur": "کھانا",
          "tr": "yiyecek",
          "ar": "مَأْكَل",
          "zh": "食物",
          "ja": "食べ物", hi: 'खाना', es: 'alimento', ru: 'пища', de: 'Speise', fa: 'خوراک', ms: 'makanan'
        }
      },
      {
        "arabic": "فَٰكِهَةٌ",
        "translit": "fākihah",
        "count": 6,
        "ref": "36:57",
        "meanings": {
          "en": "fruit",
          "bn": "ফল",
          "fr": "fruit",
          "id": "buah-buahan",
          "ur": "پھل",
          "tr": "meyve",
          "ar": "ثِمَارٌ طَيِّبَة",
          "zh": "水果",
          "ja": "果物", hi: 'फल', es: 'fruta', ru: 'плоды', de: 'Obst', fa: 'میوه', ms: 'buah-buahan'
        }
      },
      {
        "arabic": "لَبَنٌ",
        "translit": "laban",
        "count": 1,
        "ref": "47:15",
        "meanings": {
          "en": "milk",
          "bn": "দুধ",
          "fr": "lait",
          "id": "susu",
          "ur": "دودھ",
          "tr": "süt",
          "ar": "حَلِيب",
          "zh": "奶",
          "ja": "乳", hi: 'दूध', es: 'leche', ru: 'молоко', de: 'Milch', fa: 'شیر', ms: 'susu'
        }
      },
      {
        "arabic": "عَسَلٌ",
        "translit": "ʿasal",
        "count": 1,
        "ref": "47:15",
        "meanings": {
          "en": "honey",
          "bn": "মধু",
          "fr": "miel",
          "id": "madu",
          "ur": "شہد",
          "tr": "bal",
          "ar": "شَهْد",
          "zh": "蜂蜜",
          "ja": "蜂蜜", hi: 'शहद', es: 'miel', ru: 'мёд', de: 'Honig', fa: 'عسل', ms: 'madu'
        }
      },
      {
        "arabic": "لَحْمٌ",
        "translit": "laḥm",
        "count": 2,
        "ref": "6:145",
        "meanings": {
          "en": "meat, flesh",
          "bn": "মাংস",
          "fr": "viande, chair",
          "id": "daging",
          "ur": "گوشت",
          "tr": "et",
          "ar": "مَا يَكْسُو الْعِظَام",
          "zh": "肉",
          "ja": "肉", hi: 'गोश्त, माँस', es: 'carne', ru: 'мясо, плоть', de: 'Fleisch', fa: 'گوشت', ms: 'daging'
        }
      },
      {
        "arabic": "حَبَّةٌ",
        "translit": "ḥabbah",
        "count": 5,
        "ref": "2:261",
        "meanings": {
          "en": "grain, seed",
          "bn": "শস্যদানা, বীজ",
          "fr": "graine",
          "id": "biji",
          "ur": "دانہ",
          "tr": "tane, tohum",
          "ar": "بِذْرَة",
          "zh": "谷粒，种子",
          "ja": "穀粒、種", hi: 'दाना, बीज', es: 'grano, semilla', ru: 'зерно, семя', de: 'Korn, Samen', fa: 'دانه، بذر', ms: 'bijirin, biji'
        }
      },
      {
        "arabic": "نَخْلٌ",
        "translit": "nakhl",
        "count": 2,
        "ref": "54:20",
        "meanings": {
          "en": "date-palms",
          "bn": "খেজুর গাছ",
          "fr": "palmiers",
          "id": "pohon kurma",
          "ur": "کھجور کے درخت",
          "tr": "hurma ağaçları",
          "ar": "شَجَرُ التَّمْر",
          "zh": "椰枣树",
          "ja": "ナツメヤシ", hi: 'खजूर के पेड़', es: 'palmeras datileras', ru: 'финиковые пальмы', de: 'Dattelpalmen', fa: 'نخل‌ها', ms: 'pohon kurma'
        }
      },
      {
        "arabic": "أَعْنَابٌ",
        "translit": "aʿnāb",
        "count": 1,
        "ref": "6:99",
        "meanings": {
          "en": "grapes, vineyards",
          "bn": "আঙ্গুর",
          "fr": "raisins, vignes",
          "id": "anggur",
          "ur": "انگور",
          "tr": "üzümler",
          "ar": "كُرُوم",
          "zh": "葡萄",
          "ja": "ブドウ", hi: 'अंगूर, अंगूर के बाग़', es: 'uvas, viñedos', ru: 'виноград, виноградники', de: 'Trauben, Weinberge', fa: 'انگورها، تاکستان‌ها', ms: 'anggur, kebun anggur'
        }
      }
    ]
  },
  {
    "id": "light",
    "icon": "🌗",
    "names": {
      "en": "Light & darkness",
      "bn": "আলো ও অন্ধকার"
    },
    "words": [
      {
        "arabic": "ضِيَاءٌ",
        "translit": "ḍiyāʾ",
        "count": 1,
        "ref": "10:5",
        "meanings": {
          "en": "radiance, bright light",
          "bn": "উজ্জ্বল আলো",
          "fr": "clarté, éclat",
          "id": "sinar terang",
          "ur": "روشنی، اجالا",
          "tr": "ışık, aydınlık",
          "ar": "إِشْرَاق",
          "zh": "光辉",
          "ja": "輝き", hi: 'चमक, तेज़ रोशनी', es: 'resplandor, luz brillante', ru: 'сияние, яркий свет', de: 'Glanz, helles Licht', fa: 'روشنایی، نور درخشان', ms: 'sinaran, cahaya terang'
        }
      },
      {
        "arabic": "سِرَاجًا",
        "translit": "sirājan",
        "count": 2,
        "ref": "71:16",
        "meanings": {
          "en": "a lamp (the sun)",
          "bn": "প্রদীপ (সূর্য)",
          "fr": "lampe, flambeau",
          "id": "pelita",
          "ur": "چراغ",
          "tr": "kandil",
          "ar": "مِصْبَاحٌ وَهَّاج",
          "zh": "明灯",
          "ja": "灯火", hi: 'एक चिराग़ (सूरज)', es: 'una lámpara (el sol)', ru: 'светильник (солнце)', de: 'eine Leuchte (die Sonne)', fa: 'چراغ (خورشید)', ms: 'pelita (matahari)'
        }
      },
      {
        "arabic": "مِصْبَاحٌ",
        "translit": "miṣbāḥ",
        "count": 1,
        "ref": "24:35",
        "meanings": {
          "en": "lamp",
          "bn": "বাতি, প্রদীপ",
          "fr": "lampe",
          "id": "lampu",
          "ur": "قندیل",
          "tr": "lamba",
          "ar": "سِرَاجٌ مُضِيء",
          "zh": "灯",
          "ja": "ランプ", hi: 'चिराग़', es: 'lámpara', ru: 'светильник', de: 'Lampe', fa: 'چراغ', ms: 'pelita'
        }
      },
      {
        "arabic": "شِهَابٌ",
        "translit": "shihāb",
        "count": 2,
        "ref": "15:18",
        "meanings": {
          "en": "flaming meteor",
          "bn": "উল্কা, অগ্নিশিখা",
          "fr": "météore enflammé",
          "id": "meteor menyala",
          "ur": "شہابِ ثاقب",
          "tr": "akan yıldız",
          "ar": "شُعْلَةُ نَار",
          "zh": "流星",
          "ja": "流星", hi: 'दहकता शहाब (टूटता तारा)', es: 'meteoro llameante', ru: 'пылающий метеор', de: 'flammender Meteor', fa: 'شهاب سوزان', ms: 'meteor yang menyala'
        }
      },
      {
        "arabic": "كَوْكَبٌ",
        "translit": "kawkab",
        "count": 1,
        "ref": "24:35",
        "meanings": {
          "en": "star, planet",
          "bn": "নক্ষত্র, গ্রহ",
          "fr": "astre",
          "id": "bintang",
          "ur": "ستارہ، سیارہ",
          "tr": "gezegen, yıldız",
          "ar": "نَجْمٌ لَامِع",
          "zh": "星辰",
          "ja": "星、惑星", hi: 'तारा, सितारा', es: 'astro, planeta', ru: 'звезда, планета', de: 'Stern, Planet', fa: 'ستاره، سیاره', ms: 'bintang, planet'
        }
      },
      {
        "arabic": "الْفَلَقُ",
        "translit": "al-falaq",
        "count": 1,
        "ref": "113:1",
        "meanings": {
          "en": "the daybreak",
          "bn": "প্রভাত, ঊষা",
          "fr": "l'aube",
          "id": "waktu subuh, fajar",
          "ur": "صبح، پو پھٹنا",
          "tr": "tan yeri, şafak",
          "ar": "الصُّبْح",
          "zh": "黎明",
          "ja": "夜明け", hi: 'पौ फटना', es: 'el despuntar del día', ru: 'рассвет', de: 'der Tagesanbruch', fa: 'سپیده‌دم', ms: 'waktu subuh'
        }
      },
      {
        "arabic": "غَاسِقٌ",
        "translit": "ghāsiq",
        "count": 1,
        "ref": "113:3",
        "meanings": {
          "en": "darkness of night",
          "bn": "রাতের অন্ধকার",
          "fr": "obscurité de la nuit",
          "id": "malam yang gelap",
          "ur": "اندھیری رات",
          "tr": "karanlık gece",
          "ar": "ظَلَامُ اللَّيْل",
          "zh": "夜暗",
          "ja": "夜の闇", hi: 'रात का अंधेरा', es: 'oscuridad de la noche', ru: 'ночной мрак', de: 'Dunkel der Nacht', fa: 'تاریکی شب', ms: 'kegelapan malam'
        }
      }
    ]
  },
  {
    "id": "emotions",
    "icon": "💗",
    "names": {
      "en": "Emotions of the heart",
      "bn": "হৃদয়ের অনুভূতি"
    },
    "words": [
      {
        "arabic": "خَوْفٌ",
        "translit": "khawf",
        "count": 16,
        "ref": "2:38",
        "meanings": {
          "en": "fear",
          "bn": "ভয়",
          "fr": "peur, crainte",
          "id": "ketakutan",
          "ur": "خوف، ڈر",
          "tr": "korku",
          "ar": "فَزَع",
          "zh": "恐惧",
          "ja": "恐れ", hi: 'डर', es: 'miedo', ru: 'страх', de: 'Furcht', fa: 'ترس', ms: 'ketakutan'
        }
      },
      {
        "arabic": "الْحُزْنُ",
        "translit": "al-ḥuzn",
        "count": 2,
        "ref": "12:84",
        "meanings": {
          "en": "grief, sorrow",
          "bn": "দুঃখ, শোক",
          "fr": "tristesse",
          "id": "kesedihan",
          "ur": "غم",
          "tr": "hüzün, keder",
          "ar": "غَمّ",
          "zh": "忧伤",
          "ja": "悲しみ", hi: 'ग़म, दुख', es: 'pena, tristeza', ru: 'печаль, скорбь', de: 'Trauer, Kummer', fa: 'اندوه، غم', ms: 'dukacita, kesedihan'
        }
      },
      {
        "arabic": "فَرِحِينَ",
        "translit": "fariḥīn",
        "count": 1,
        "ref": "3:170",
        "meanings": {
          "en": "rejoicing, joyful",
          "bn": "আনন্দিত",
          "fr": "joyeux",
          "id": "bergembira",
          "ur": "خوش و خرم",
          "tr": "sevinçliler",
          "ar": "مَسْرُورِين",
          "zh": "欢欣的",
          "ja": "喜んで", hi: 'ख़ुश, ख़ुशियाँ मनाते हुए', es: 'regocijados, alegres', ru: 'радующиеся, радостные', de: 'frohlockend, fröhlich', fa: 'شادمان، خرسند', ms: 'bergembira, gembira'
        }
      },
      {
        "arabic": "سَكِينَةٌ",
        "translit": "sakīnah",
        "count": 1,
        "ref": "2:248",
        "meanings": {
          "en": "tranquility",
          "bn": "প্রশান্তি",
          "fr": "quiétude, sérénité",
          "id": "ketenangan",
          "ur": "سکون، اطمینان",
          "tr": "huzur, sekinet",
          "ar": "طُمَأْنِينَة",
          "zh": "安宁",
          "ja": "安らぎ", hi: 'सुकून', es: 'sosiego', ru: 'спокойствие', de: 'innere Ruhe', fa: 'آرامش', ms: 'ketenangan'
        }
      },
      {
        "arabic": "الرُّعْبُ",
        "translit": "al-ruʿb",
        "count": 4,
        "ref": "3:151",
        "meanings": {
          "en": "terror, dread",
          "bn": "আতঙ্ক, ত্রাস",
          "fr": "terreur",
          "id": "rasa gentar",
          "ur": "دہشت",
          "tr": "dehşet",
          "ar": "خَوْفٌ شَدِيد",
          "zh": "恐怖",
          "ja": "戦慄", hi: 'दहशत, ख़ौफ़', es: 'terror, pavor', ru: 'ужас, страх', de: 'Schrecken, Grauen', fa: 'وحشت، هراس', ms: 'kegerunan, rasa gerun'
        }
      },
      {
        "arabic": "غَيْظٌ",
        "translit": "ghayẓ",
        "count": 1,
        "ref": "9:15",
        "meanings": {
          "en": "rage, fury",
          "bn": "ক্রোধ, রাগ",
          "fr": "rage, colère",
          "id": "kemarahan",
          "ur": "غصہ",
          "tr": "öfke",
          "ar": "غَضَبٌ شَدِيد",
          "zh": "暴怒",
          "ja": "激怒", hi: 'ग़ुस्सा, क्रोध', es: 'rabia, furia', ru: 'ярость, гнев', de: 'Wut, Grimm', fa: 'خشم، غیظ', ms: 'kemarahan, kemurkaan'
        }
      },
      {
        "arabic": "حَسْرَةٌ",
        "translit": "ḥasrah",
        "count": 2,
        "ref": "3:156",
        "meanings": {
          "en": "regret, anguish",
          "bn": "আফসোস, অনুশোচনা",
          "fr": "regret amer",
          "id": "penyesalan",
          "ur": "حسرت، پچھتاوا",
          "tr": "hasret, pişmanlık",
          "ar": "نَدَامَة",
          "zh": "悔恨",
          "ja": "悔恨", hi: 'पछतावा, हसरत', es: 'pesar, angustia', ru: 'сожаление, горесть', de: 'Reue, Gram', fa: 'حسرت، دریغ', ms: 'penyesalan, kekesalan'
        }
      }
    ]
  },
  {
    "id": "places",
    "icon": "🏛️",
    "names": {
      "en": "Places",
      "bn": "স্থানসমূহ"
    },
    "words": [
      {
        "arabic": "دَارٌ",
        "translit": "dār",
        "count": 8,
        "ref": "6:127",
        "meanings": {
          "en": "abode, home",
          "bn": "আবাস, গৃহ",
          "fr": "demeure",
          "id": "tempat tinggal",
          "ur": "گھر، ٹھکانا",
          "tr": "yurt, ev",
          "ar": "مَسْكَن",
          "zh": "居所",
          "ja": "住まい", hi: 'घर, ठिकाना', es: 'morada, hogar', ru: 'обитель, дом', de: 'Wohnstätte, Heim', fa: 'سرا، خانه', ms: 'tempat tinggal, kediaman'
        }
      },
      {
        "arabic": "الْمَدِينَةُ",
        "translit": "al-madīnah",
        "count": 14,
        "ref": "7:123",
        "meanings": {
          "en": "the city",
          "bn": "শহর, নগরী",
          "fr": "la ville",
          "id": "kota",
          "ur": "شہر",
          "tr": "şehir",
          "ar": "بَلَدٌ كَبِير",
          "zh": "城市",
          "ja": "都市", hi: 'शहर', es: 'la ciudad', ru: 'город', de: 'die Stadt', fa: 'شهر', ms: 'kota'
        }
      },
      {
        "arabic": "الْكَهْفُ",
        "translit": "al-kahf",
        "count": 4,
        "ref": "18:9",
        "meanings": {
          "en": "the cave",
          "bn": "গুহা",
          "fr": "la caverne",
          "id": "gua",
          "ur": "غار",
          "tr": "mağara",
          "ar": "غَارٌ وَاسِع",
          "zh": "洞穴",
          "ja": "洞窟", hi: 'ग़ार (गुफ़ा)', es: 'la cueva', ru: 'пещера', de: 'die Höhle', fa: 'غار', ms: 'gua'
        }
      },
      {
        "arabic": "الْغَارُ",
        "translit": "al-ghār",
        "count": 1,
        "ref": "9:40",
        "meanings": {
          "en": "the cave (of Thawr)",
          "bn": "গুহা (সাওর)",
          "fr": "la grotte",
          "id": "gua (Tsur)",
          "ur": "غارِ ثور",
          "tr": "mağara (Sevr)",
          "ar": "نَقْبٌ فِي الْجَبَل",
          "zh": "山洞",
          "ja": "洞穴", hi: 'ग़ार (ग़ार-ए-सौर)', es: 'la cueva (de Thawr)', ru: 'пещера (Савр)', de: 'die Höhle (von Thaur)', fa: 'غار (ثور)', ms: 'gua (Thur)'
        }
      },
      {
        "arabic": "الْمِحْرَابُ",
        "translit": "al-miḥrāb",
        "count": 4,
        "ref": "3:37",
        "meanings": {
          "en": "prayer chamber",
          "bn": "ইবাদতের কক্ষ, মিহরাব",
          "fr": "sanctuaire, mihrab",
          "id": "mihrab",
          "ur": "محراب، عبادت گاہ",
          "tr": "mihrap",
          "ar": "مُصَلًّى خَاصّ",
          "zh": "祈祷室",
          "ja": "礼拝室", hi: 'इबादत का कमरा (मेहराब)', es: 'cámara de oración', ru: 'молельня', de: 'Gebetsnische', fa: 'محراب عبادت', ms: 'mihrab'
        }
      },
      {
        "arabic": "مَقَامٌ",
        "translit": "maqām",
        "count": 7,
        "ref": "2:125",
        "meanings": {
          "en": "station, standing-place",
          "bn": "অবস্থানস্থল, মাকাম",
          "fr": "station, lieu",
          "id": "tempat berdiri, makam",
          "ur": "مقام، جگہ",
          "tr": "makam, durak",
          "ar": "مَوْضِعُ الْقِيَام",
          "zh": "立足之地",
          "ja": "立ち所", hi: 'मक़ाम, खड़े होने की जगह', es: 'estación, lugar donde se está de pie', ru: 'место стояния, стоянка', de: 'Stätte, Standort', fa: 'جایگاه، محل ایستادن', ms: 'maqam, tempat berdiri'
        }
      },
      {
        "arabic": "بَلْدَةٌ",
        "translit": "baldah",
        "count": 4,
        "ref": "25:49",
        "meanings": {
          "en": "town, land",
          "bn": "জনপদ, শহর",
          "fr": "contrée, cité",
          "id": "negeri",
          "ur": "بستی، شہر",
          "tr": "belde",
          "ar": "قَرْيَةٌ عَامِرَة",
          "zh": "城镇",
          "ja": "町、土地", hi: 'बस्ती, धरती', es: 'población, tierra', ru: 'город, страна', de: 'Stadt, Land', fa: 'شهر، سرزمین', ms: 'negeri, tanah'
        }
      },
      {
        "arabic": "مِصْرُ",
        "translit": "miṣr",
        "count": 3,
        "ref": "12:21",
        "meanings": {
          "en": "Egypt; city",
          "bn": "মিসর; নগর",
          "fr": "Égypte ; ville",
          "id": "Mesir; kota",
          "ur": "مصر؛ شہر",
          "tr": "Mısır; şehir",
          "ar": "بَلَدُ النِّيل",
          "zh": "埃及；城",
          "ja": "エジプト；町", hi: 'मिस्र; शहर', es: 'Egipto; ciudad', ru: 'Египет; город', de: 'Ägypten; Stadt', fa: 'مصر؛ شهر', ms: 'Mesir; kota'
        }
      }
    ]
  },
  {
    "id": "speech",
    "icon": "🗣️",
    "names": {
      "en": "Speech & words",
      "bn": "কথা ও বাণী"
    },
    "words": [
      {
        "arabic": "قَوْلٌ",
        "translit": "qawl",
        "count": 12,
        "ref": "2:263",
        "meanings": {
          "en": "word, saying",
          "bn": "কথা, উক্তি",
          "fr": "parole",
          "id": "perkataan",
          "ur": "بات، قول",
          "tr": "söz",
          "ar": "كَلَام",
          "zh": "言语",
          "ja": "言葉", hi: 'बात, कहना', es: 'palabra, dicho', ru: 'слово, изречение', de: 'Wort, Aussage', fa: 'سخن، گفته', ms: 'perkataan, ucapan'
        }
      },
      {
        "arabic": "حَدِيثٌ",
        "translit": "ḥadīth",
        "count": 10,
        "ref": "4:140",
        "meanings": {
          "en": "speech, narration",
          "bn": "কথা, বর্ণনা",
          "fr": "récit, propos",
          "id": "perkataan, kisah",
          "ur": "بات، حدیث",
          "tr": "söz, haber",
          "ar": "كَلَامٌ وَخَبَر",
          "zh": "言谈，叙述",
          "ja": "談話、物語", hi: 'बात, हदीस', es: 'discurso, relato', ru: 'речь, повествование', de: 'Rede, Erzählung', fa: 'سخن، حکایت', ms: 'perkataan, cerita'
        }
      },
      {
        "arabic": "نَبَأٌ",
        "translit": "nabaʾ",
        "count": 7,
        "ref": "5:27",
        "meanings": {
          "en": "news, tidings",
          "bn": "সংবাদ",
          "fr": "nouvelle",
          "id": "berita",
          "ur": "خبر",
          "tr": "haber",
          "ar": "خَبَر",
          "zh": "消息",
          "ja": "知らせ", hi: 'ख़बर, समाचार', es: 'noticia, nueva', ru: 'весть, известие', de: 'Nachricht, Kunde', fa: 'خبر، گزارش', ms: 'berita, khabar'
        }
      },
      {
        "arabic": "بَيَانٌ",
        "translit": "bayān",
        "count": 1,
        "ref": "3:138",
        "meanings": {
          "en": "clear statement",
          "bn": "সুস্পষ্ট বর্ণনা",
          "fr": "exposé clair",
          "id": "penjelasan",
          "ur": "واضح بیان",
          "tr": "açıklama, beyan",
          "ar": "إِيضَاح",
          "zh": "阐明",
          "ja": "明示", hi: 'साफ़ बयान', es: 'exposición clara', ru: 'ясное изложение', de: 'klare Darlegung', fa: 'بیان روشن', ms: 'penjelasan'
        }
      },
      {
        "arabic": "مَوْعِظَةٌ",
        "translit": "mawʿiẓah",
        "count": 3,
        "ref": "2:275",
        "meanings": {
          "en": "admonition",
          "bn": "উপদেশ",
          "fr": "exhortation",
          "id": "pelajaran, nasihat",
          "ur": "نصیحت",
          "tr": "öğüt",
          "ar": "نُصْحٌ وَتَذْكِير",
          "zh": "劝诫",
          "ja": "訓戒", hi: 'नसीहत', es: 'exhortación', ru: 'увещевание', de: 'Ermahnung', fa: 'اندرز', ms: 'nasihat'
        }
      },
      {
        "arabic": "مَثَلٌ",
        "translit": "mathal",
        "count": 47,
        "ref": "2:26",
        "meanings": {
          "en": "parable, example",
          "bn": "উপমা, দৃষ্টান্ত",
          "fr": "parabole, exemple",
          "id": "perumpamaan",
          "ur": "مثال، تمثیل",
          "tr": "mesel, örnek",
          "ar": "تَشْبِيهٌ وَعِبْرَة",
          "zh": "比喻",
          "ja": "譬え", hi: 'मिसाल, उदाहरण', es: 'parábola, ejemplo', ru: 'притча, пример', de: 'Gleichnis, Beispiel', fa: 'مثل، نمونه', ms: 'perumpamaan, contoh'
        }
      },
      {
        "arabic": "لَغْوٌ",
        "translit": "laghw",
        "count": 1,
        "ref": "52:23",
        "meanings": {
          "en": "idle talk",
          "bn": "অনর্থক কথা",
          "fr": "paroles vaines",
          "id": "perkataan sia-sia",
          "ur": "بیہودہ بات",
          "tr": "boş söz",
          "ar": "هَذَر",
          "zh": "空谈",
          "ja": "無駄話", hi: 'बेहूदा बात', es: 'palabrería vana', ru: 'пустословие', de: 'leeres Gerede', fa: 'سخن بیهوده', ms: 'perkataan sia-sia'
        }
      },
      {
        "arabic": "الزُّورُ",
        "translit": "al-zūr",
        "count": 2,
        "ref": "22:30",
        "meanings": {
          "en": "falsehood",
          "bn": "মিথ্যা, অসত্য",
          "fr": "le mensonge",
          "id": "kepalsuan, dusta",
          "ur": "جھوٹ",
          "tr": "yalan söz",
          "ar": "كَذِبٌ وَبُهْتَان",
          "zh": "谎言",
          "ja": "虚偽", hi: 'झूठ', es: 'la falsedad', ru: 'ложь', de: 'Falschheit', fa: 'دروغ', ms: 'kepalsuan'
        }
      }
    ]
  },
  // v161 additions — 6 themes / 48 corpus-verified words (2026-07-28)
  {
    "id": "worship-acts",
    "icon": "🤲",
    "names": {
      "en": "Acts of the worshippers",
      "bn": "ইবাদতকারীদের কাজ"
    },
    "words": [
      {
        "arabic": "سَبَّحَ",
        "translit": "sabbaḥa",
        "count": 4,
        "ref": "57:1",
        "meanings": {
          "en": "he glorified (God)",
          "bn": "তিনি (আল্লাহর) তাসবীহ করলেন",
          "fr": "il a glorifié (Dieu)",
          "id": "dia bertasbih (kepada Allah)",
          "ur": "اس نے تسبیح کی",
          "tr": "tesbih etti",
          "ar": "نزّه الله وقدّسه",
          "zh": "赞颂(真主)",
          "ja": "(神を)讃美した", hi: 'उसने (अल्लाह की) तस्बीह की', es: 'glorificó (a Allah)', ru: 'он славил (Аллаха)', de: 'er pries (Allah)', fa: '(الله را) به پاکی ستود', ms: 'dia bertasbih (kepada Allah)'
        }
      },
      {
        "arabic": "ٱرْكَعُوا",
        "translit": "irkaʿū",
        "count": 2,
        "ref": "22:77",
        "meanings": {
          "en": "bow down! (pl.)",
          "bn": "তোমরা রুকু করো",
          "fr": "inclinez-vous !",
          "id": "rukuklah!",
          "ur": "رکوع کرو",
          "tr": "rükû edin",
          "ar": "اركعوا خضوعًا لله",
          "zh": "你们当鞠躬",
          "ja": "跪拝せよ", hi: 'रुकू करो! (बहुवचन)', es: '¡inclinaos! (pl.)', ru: 'кланяйтесь! (мн. ч.)', de: 'verbeugt euch! (Pl.)', fa: 'رکوع کنید! (جمع)', ms: 'rukuklah! (jamak)'
        }
      },
      {
        "arabic": "خَٰشِعُونَ",
        "translit": "khāshiʿūn",
        "count": 1,
        "ref": "23:2",
        "meanings": {
          "en": "humbly submissive",
          "bn": "বিনয়াবনত",
          "fr": "humbles, recueillis",
          "id": "orang-orang yang khusyuk",
          "ur": "عاجزی کرنے والے",
          "tr": "huşû içinde olanlar",
          "ar": "خاضعون متذللون",
          "zh": "恭顺谦卑的人",
          "ja": "謙虚に畏れる者たち", hi: 'आजिज़ी से झुके हुए', es: 'humildemente sumisos', ru: 'смиренные', de: 'demütig ergeben', fa: 'فروتن و خاشع', ms: 'orang yang khusyuk'
        }
      },
      {
        "arabic": "قَٰنِتٌ",
        "translit": "qānit",
        "count": 1,
        "ref": "39:9",
        "meanings": {
          "en": "devoutly obedient",
          "bn": "একনিষ্ঠ আনুগত্যকারী",
          "fr": "dévotement obéissant",
          "id": "orang yang taat",
          "ur": "فرمانبردار عبادت گزار",
          "tr": "gönülden itaat eden",
          "ar": "مطيع خاشع لله",
          "zh": "虔诚顺服者",
          "ja": "敬虔に従う者", hi: 'पूरी लगन से फ़रमाँबरदार', es: 'devotamente obediente', ru: 'покорно послушный', de: 'andächtig gehorsam', fa: 'فرمان‌بردار و عبادت‌پیشه', ms: 'orang yang taat'
        }
      },
      {
        "arabic": "تَوَكَّلْتُ",
        "translit": "tawakkaltu",
        "count": 7,
        "ref": "9:129",
        "meanings": {
          "en": "I put my trust (in God)",
          "bn": "আমি (আল্লাহর উপর) ভরসা করেছি",
          "fr": "je m'en remets (à Dieu)",
          "id": "aku bertawakal",
          "ur": "میں نے توکل کیا",
          "tr": "tevekkül ettim",
          "ar": "فوّضت أمري إلى الله",
          "zh": "我托靠(真主)",
          "ja": "私は(神に)委ねた", hi: 'मैंने (अल्लाह पर) भरोसा किया', es: 'he puesto mi confianza (en Allah)', ru: 'я уповаю (на Аллаха)', de: 'ich verlasse mich (auf Allah)', fa: 'توکل کردم (بر الله)', ms: 'aku bertawakal (kepada Allah)'
        }
      },
      {
        "arabic": "أَنَابَ",
        "translit": "anāba",
        "count": 3,
        "ref": "13:27",
        "meanings": {
          "en": "he turned (to God) in repentance",
          "bn": "তিনি (আল্লাহর দিকে) প্রত্যাবর্তন করলেন",
          "fr": "il est revenu (à Dieu)",
          "id": "dia kembali (kepada Allah)",
          "ur": "اس نے رجوع کیا",
          "tr": "(Allah'a) yöneldi",
          "ar": "رجع إلى الله",
          "zh": "归依(真主)",
          "ja": "(神に)立ち返った", hi: 'वह तौबा करके (अल्लाह की तरफ़) पलटा', es: 'se volvió (a Allah) arrepentido', ru: 'он обратился (к Аллаху) с покаянием', de: 'er wandte sich (Allah) reuig zu', fa: 'با توبه (به سوی الله) بازگشت', ms: 'dia kembali (kepada Allah) dengan bertaubat'
        }
      },
      {
        "arabic": "يُنفِقُونَ",
        "translit": "yunfiqūn",
        "count": 20,
        "ref": "2:3",
        "meanings": {
          "en": "they spend (in charity)",
          "bn": "তারা (দানে) ব্যয় করে",
          "fr": "ils dépensent (en aumône)",
          "id": "mereka menafkahkan",
          "ur": "وہ خرچ کرتے ہیں",
          "tr": "infak ederler",
          "ar": "يبذلون أموالهم في الخير",
          "zh": "他们施舍",
          "ja": "彼らは(施しに)費やす", hi: 'वे (अल्लाह की राह में) ख़र्च करते हैं', es: 'gastan (en caridad)', ru: 'они расходуют (на милостыню)', de: 'sie spenden (für wohltätige Zwecke)', fa: 'انفاق می‌کنند (در راه خیر)', ms: 'mereka membelanjakan (untuk sedekah)'
        }
      },
      {
        "arabic": "نَسْتَعِينُ",
        "translit": "nastaʿīn",
        "count": 1,
        "ref": "1:5",
        "meanings": {
          "en": "we seek help",
          "bn": "আমরা সাহায্য চাই",
          "fr": "nous implorons l'aide",
          "id": "kami memohon pertolongan",
          "ur": "ہم مدد مانگتے ہیں",
          "tr": "yardım dileriz",
          "ar": "نطلب العون",
          "zh": "我们求佑助",
          "ja": "私たちは助けを求める", hi: 'हम मदद माँगते हैं', es: 'pedimos ayuda', ru: 'мы просим помощи', de: 'wir bitten um Hilfe', fa: 'یاری می‌جوییم', ms: 'kami memohon pertolongan'
        }
      }
    ]
  },
  {
    "id": "unseen",
    "icon": "👼",
    "names": {
      "en": "Angels & the unseen",
      "bn": "ফেরেশতা ও অদৃশ্য জগৎ"
    },
    "words": [
      {
        "arabic": "ٱلْمَلَٰٓئِكَةُ",
        "translit": "al-malāʾikah",
        "count": 38,
        "ref": "2:31",
        "meanings": {
          "en": "the angels",
          "bn": "ফেরেশতাগণ",
          "fr": "les anges",
          "id": "para malaikat",
          "ur": "فرشتے",
          "tr": "melekler",
          "ar": "الملائكة",
          "zh": "众天使",
          "ja": "天使たち", hi: 'फ़रिश्ते', es: 'los ángeles', ru: 'ангелы', de: 'die Engel', fa: 'فرشتگان', ms: 'para malaikat'
        }
      },
      {
        "arabic": "وَجِبْرِيلُ",
        "translit": "wa-Jibrīl",
        "count": 2,
        "ref": "2:98",
        "meanings": {
          "en": "and Gabriel (Jibril)",
          "bn": "এবং জিবরীল",
          "fr": "et Gabriel (Jibrîl)",
          "id": "dan Jibril",
          "ur": "اور جبریل",
          "tr": "ve Cebrail",
          "ar": "وجبريل عليه السلام",
          "zh": "和吉卜利里(加百列)",
          "ja": "そしてジブリール(ガブリエル)", hi: 'और जिब्रील (जिब्राईल)', es: 'y Gabriel (Yibril)', ru: 'и Джибриль', de: 'und Gabriel (Dschibril)', fa: 'و جبرئیل', ms: 'dan Jibril'
        }
      },
      {
        "arabic": "وَمِيكَىٰلَ",
        "translit": "wa-Mīkāl",
        "count": 1,
        "ref": "2:98",
        "meanings": {
          "en": "and Michael (Mikal)",
          "bn": "এবং মীকাঈল",
          "fr": "et Michaël (Mîkâl)",
          "id": "dan Mikail",
          "ur": "اور میکائیل",
          "tr": "ve Mikâil",
          "ar": "وميكائيل عليه السلام",
          "zh": "和米卡里(米迦勒)",
          "ja": "そしてミーカール(ミカエル)", hi: 'और मीकाईल (मीकाल)', es: 'y Miguel (Mikal)', ru: 'и Микаиль', de: 'und Michael (Mikail)', fa: 'و میکائیل', ms: 'dan Mikail'
        }
      },
      {
        "arabic": "إِبْلِيسُ",
        "translit": "Iblīs",
        "count": 9,
        "ref": "2:34",
        "meanings": {
          "en": "Iblis (Satan)",
          "bn": "ইবলীস",
          "fr": "Iblîs (Satan)",
          "id": "Iblis",
          "ur": "ابلیس",
          "tr": "İblis",
          "ar": "إبليس اللعين",
          "zh": "易卜劣厮(魔鬼)",
          "ja": "イブリース(悪魔)", hi: 'इबलीस (शैतान)', es: 'Iblís (Satanás)', ru: 'Иблис (шайтан)', de: 'Iblis (Satan)', fa: 'ابلیس (شیطان)', ms: 'Iblis'
        }
      },
      {
        "arabic": "ٱلْجِنُّ",
        "translit": "al-jinn",
        "count": 19,
        "ref": "6:100",
        "meanings": {
          "en": "the jinn",
          "bn": "জিন জাতি",
          "fr": "les djinns",
          "id": "para jin",
          "ur": "جنات",
          "tr": "cinler",
          "ar": "الجن",
          "zh": "精灵(镇尼)",
          "ja": "ジン(幽精)", hi: 'जिन्नात', es: 'los yinn', ru: 'джинны', de: 'die Dschinn', fa: 'جنیان', ms: 'jin'
        }
      },
      {
        "arabic": "ٱلشَّيَٰطِينُ",
        "translit": "al-shayāṭīn",
        "count": 13,
        "ref": "2:102",
        "meanings": {
          "en": "the devils",
          "bn": "শয়তানরা",
          "fr": "les démons",
          "id": "setan-setan",
          "ur": "شیاطین",
          "tr": "şeytanlar",
          "ar": "الشياطين",
          "zh": "众恶魔",
          "ja": "悪魔たち", hi: 'शैतान (बहुवचन)', es: 'los demonios', ru: 'шайтаны', de: 'die Satane', fa: 'شیاطین', ms: 'syaitan-syaitan'
        }
      },
      {
        "arabic": "عِفْرِيتٌ",
        "translit": "ʿifrīt",
        "count": 1,
        "ref": "27:39",
        "meanings": {
          "en": "a mighty jinn (ifrit)",
          "bn": "শক্তিশালী জিন (ইফরীত)",
          "fr": "un djinn redoutable (ifrit)",
          "id": "jin yang perkasa (ifrit)",
          "ur": "طاقتور جن (عفریت)",
          "tr": "güçlü bir cin (ifrit)",
          "ar": "مارد قوي من الجن",
          "zh": "强大的精灵(伊夫利特)",
          "ja": "強力なジン(イフリート)", hi: 'एक ताक़तवर जिन्न (इफ़रीत)', es: 'un yinn poderoso (ifrit)', ru: 'могучий джинн (ифрит)', de: 'ein mächtiger Dschinn (Ifrit)', fa: 'جنی نیرومند (عفریت)', ms: 'jin yang gagah (Ifrit)'
        }
      },
      {
        "arabic": "حُورٌ",
        "translit": "ḥūr",
        "count": 1,
        "ref": "55:72",
        "meanings": {
          "en": "fair maidens of Paradise",
          "bn": "জান্নাতের হূর",
          "fr": "houris du Paradis",
          "id": "bidadari surga",
          "ur": "جنت کی حوریں",
          "tr": "cennet hurileri",
          "ar": "حور الجنة",
          "zh": "乐园中的美目女子",
          "ja": "楽園の乙女(フール)", hi: 'जन्नत की हूरें', es: 'hermosas doncellas del Paraíso', ru: 'прекрасные девы Рая', de: 'Huris des Paradieses', fa: 'حوریان بهشت', ms: 'bidadari syurga'
        }
      }
    ]
  },
  {
    "id": "revelation",
    "icon": "📜",
    "names": {
      "en": "The Book & revelation",
      "bn": "কিতাব ও ওহী"
    },
    "words": [
      {
        "arabic": "سُورَةٌ",
        "translit": "sūrah",
        "count": 7,
        "ref": "9:64",
        "meanings": {
          "en": "a surah, chapter",
          "bn": "সূরা",
          "fr": "une sourate",
          "id": "surah",
          "ur": "سورت",
          "tr": "sûre",
          "ar": "سورة من القرآن",
          "zh": "章(苏拉)",
          "ja": "スーラ(章)", hi: 'एक सूरह, अध्याय', es: 'una sura, capítulo', ru: 'сура, глава', de: 'eine Sure, ein Kapitel', fa: 'سوره، فصل', ms: 'surah'
        }
      },
      {
        "arabic": "تَنزِيلٌ",
        "translit": "tanzīl",
        "count": 10,
        "ref": "32:2",
        "meanings": {
          "en": "a sending down, revelation",
          "bn": "অবতরণ, নাযিলকৃত ওহী",
          "fr": "révélation descendue",
          "id": "penurunan wahyu",
          "ur": "نازل کردہ وحی",
          "tr": "indirilme, vahiy",
          "ar": "إنزال الوحي",
          "zh": "降示",
          "ja": "啓示の下し", hi: 'उतारना, वह्य', es: 'descenso, revelación', ru: 'ниспослание, откровение', de: 'Herabsendung, Offenbarung', fa: 'فرو فرستادن، وحی', ms: 'penurunan, wahyu'
        }
      },
      {
        "arabic": "ٱلْفُرْقَانَ",
        "translit": "al-furqān",
        "count": 4,
        "ref": "3:4",
        "meanings": {
          "en": "the Criterion",
          "bn": "ফুরকান (সত্য-মিথ্যার মানদণ্ড)",
          "fr": "le Discernement",
          "id": "Al-Furqan (pembeda)",
          "ur": "فرقان (حق و باطل کی کسوٹی)",
          "tr": "Furkan (hakkı bâtıldan ayıran)",
          "ar": "الفرقان بين الحق والباطل",
          "zh": "准则(辨别真伪者)",
          "ja": "フルカーン(識別)", hi: 'फ़ुरक़ान (हक़ और बातिल में फ़र्क़ करने वाली)', es: 'el Criterio', ru: 'Различение', de: 'die Unterscheidung', fa: '«فرقان» (جداکننده‌ی حق از باطل)', ms: 'al-Furqan (pembeza)'
        }
      },
      {
        "arabic": "ٱلتَّوْرَىٰةُ",
        "translit": "al-Tawrāh",
        "count": 15,
        "ref": "3:3",
        "meanings": {
          "en": "the Torah",
          "bn": "তাওরাত",
          "fr": "la Torah",
          "id": "Taurat",
          "ur": "تورات",
          "tr": "Tevrat",
          "ar": "التوراة",
          "zh": "《讨拉特》(律法书)",
          "ja": "律法(タウラー)", hi: 'तौरात', es: 'la Torá', ru: 'Таурат', de: 'die Tora', fa: 'تورات', ms: 'Taurat'
        }
      },
      {
        "arabic": "ٱلْإِنجِيلَ",
        "translit": "al-Injīl",
        "count": 4,
        "ref": "5:46",
        "meanings": {
          "en": "the Gospel",
          "bn": "ইনজীল",
          "fr": "l'Évangile",
          "id": "Injil",
          "ur": "انجیل",
          "tr": "İncil",
          "ar": "الإنجيل",
          "zh": "《引支勒》(福音书)",
          "ja": "福音書(インジール)", hi: 'इंजील', es: 'el Evangelio', ru: 'Инджиль', de: 'das Evangelium', fa: 'انجیل', ms: 'Injil'
        }
      },
      {
        "arabic": "ٱلزَّبُورِ",
        "translit": "al-Zabūr",
        "count": 1,
        "ref": "21:105",
        "meanings": {
          "en": "the Psalms",
          "bn": "যাবূর",
          "fr": "les Psaumes",
          "id": "Zabur",
          "ur": "زبور",
          "tr": "Zebur",
          "ar": "الزبور",
          "zh": "《宰逋卜》(诗篇)",
          "ja": "詩篇(ザブール)", hi: 'ज़बूर', es: 'los Salmos', ru: 'Забур', de: 'die Psalmen', fa: 'زبور', ms: 'Zabur'
        }
      },
      {
        "arabic": "صُحُفٌ",
        "translit": "ṣuḥuf",
        "count": 3,
        "ref": "53:36",
        "meanings": {
          "en": "scriptures, scrolls",
          "bn": "সহীফাসমূহ",
          "fr": "feuillets, écrits",
          "id": "lembaran-lembaran wahyu",
          "ur": "صحیفے",
          "tr": "sahifeler",
          "ar": "صحف منزلة",
          "zh": "经卷",
          "ja": "啓典の書巻", hi: 'सहीफ़े, पन्ने', es: 'escrituras, pliegos', ru: 'писания, свитки', de: 'Schriften, Blätter', fa: 'صحیفه‌ها، نوشته‌ها', ms: 'suhuf, lembaran'
        }
      },
      {
        "arabic": "لَوْحٌ",
        "translit": "lawḥ",
        "count": 1,
        "ref": "85:22",
        "meanings": {
          "en": "tablet (the Preserved Tablet)",
          "bn": "লাওহ (সংরক্ষিত ফলক)",
          "fr": "tablette (bien gardée)",
          "id": "lauh (yang terpelihara)",
          "ur": "لوح (محفوظ)",
          "tr": "levha (Levh-i Mahfûz)",
          "ar": "لوح محفوظ",
          "zh": "(受保护的)天牌",
          "ja": "(守護された)碑板", hi: 'तख़्ती (लौह-ए-महफ़ूज़)', es: 'tabla (la Tabla Protegida)', ru: 'скрижаль (Хранимая скрижаль)', de: 'Tafel (die wohlverwahrte Tafel)', fa: 'لوح (لوح محفوظ)', ms: 'lauh (Lauh Mahfuz)'
        }
      }
    ]
  },
  {
    "id": "trade",
    "icon": "💰",
    "names": {
      "en": "Trade & justice",
      "bn": "ব্যবসা ও ন্যায়বিচার"
    },
    "words": [
      {
        "arabic": "تِجَٰرَةٌ",
        "translit": "tijārah",
        "count": 6,
        "ref": "2:282",
        "meanings": {
          "en": "trade, commerce",
          "bn": "ব্যবসা-বাণিজ্য",
          "fr": "commerce",
          "id": "perniagaan",
          "ur": "تجارت",
          "tr": "ticaret",
          "ar": "تجارة",
          "zh": "贸易",
          "ja": "商売", hi: 'तिजारत, कारोबार', es: 'comercio, negocio', ru: 'торговля, коммерция', de: 'Handel, Geschäft', fa: 'تجارت، داد و ستد', ms: 'perniagaan, perdagangan'
        }
      },
      {
        "arabic": "بَيْعٌ",
        "translit": "bayʿ",
        "count": 3,
        "ref": "2:254",
        "meanings": {
          "en": "sale, bargaining",
          "bn": "ক্রয়-বিক্রয়",
          "fr": "vente",
          "id": "jual beli",
          "ur": "خرید و فروخت",
          "tr": "alışveriş",
          "ar": "بيع وشراء",
          "zh": "买卖",
          "ja": "売買", hi: 'ख़रीद-फ़रोख़्त, सौदा', es: 'venta, trato', ru: 'продажа, торг', de: 'Verkauf, Handel', fa: 'خرید و فروش، معامله', ms: 'jual beli, tawar-menawar'
        }
      },
      {
        "arabic": "ٱلرِّبَوٰا",
        "translit": "al-ribā",
        "count": 7,
        "ref": "2:275",
        "meanings": {
          "en": "usury, interest",
          "bn": "সুদ",
          "fr": "l'usure",
          "id": "riba",
          "ur": "سود",
          "tr": "faiz, riba",
          "ar": "الربا المحرّم",
          "zh": "重利(利息)",
          "ja": "利息(リバー)", hi: 'सूद, ब्याज', es: 'usura, interés', ru: 'лихва, ростовщичество', de: 'Zins, Wucher', fa: 'ربا، بهره', ms: 'riba, faedah'
        }
      },
      {
        "arabic": "ٱلْكَيْلَ",
        "translit": "al-kayl",
        "count": 7,
        "ref": "6:152",
        "meanings": {
          "en": "the measure",
          "bn": "মাপ",
          "fr": "la mesure",
          "id": "takaran",
          "ur": "ناپ",
          "tr": "ölçü",
          "ar": "مقدار ما يُكال",
          "zh": "量器(足量)",
          "ja": "枡目(計量)", hi: 'नाप', es: 'la medida', ru: 'мера', de: 'das Maß', fa: 'پیمانه', ms: 'sukatan'
        }
      },
      {
        "arabic": "بِٱلْقِسْطِ",
        "translit": "bil-qisṭ",
        "count": 14,
        "ref": "3:18",
        "meanings": {
          "en": "with justice, equity",
          "bn": "ন্যায়ের সাথে",
          "fr": "avec équité",
          "id": "dengan adil",
          "ur": "انصاف کے ساتھ",
          "tr": "adaletle",
          "ar": "بالعدل والإنصاف",
          "zh": "以公道",
          "ja": "公正をもって", hi: 'इंसाफ़ के साथ, बराबरी से', es: 'con justicia, equidad', ru: 'справедливо, беспристрастно', de: 'mit Gerechtigkeit, Billigkeit', fa: 'با عدل، به انصاف', ms: 'dengan adil, saksama'
        }
      },
      {
        "arabic": "مِثْقَالَ",
        "translit": "mithqāl",
        "count": 8,
        "ref": "4:40",
        "meanings": {
          "en": "weight (of an atom)",
          "bn": "(অণু) পরিমাণ ওজন",
          "fr": "poids (d'un atome)",
          "id": "seberat (zarah)",
          "ur": "ذرہ برابر وزن",
          "tr": "(zerre) ağırlığı",
          "ar": "وزن الشيء",
          "zh": "(微尘的)重量",
          "ja": "(微塵の)重さ", hi: 'वज़न (एक ज़र्रे का)', es: 'peso (de un átomo)', ru: 'вес (пылинки)', de: 'Gewicht (eines Stäubchens)', fa: 'وزن (ذره‌ای)', ms: 'berat (sebesar zarah)'
        }
      },
      {
        "arabic": "دَرَٰهِمَ",
        "translit": "darāhim",
        "count": 1,
        "ref": "12:20",
        "meanings": {
          "en": "dirhams (silver coins)",
          "bn": "দিরহাম (রৌপ্যমুদ্রা)",
          "fr": "dirhams (pièces d'argent)",
          "id": "beberapa dirham",
          "ur": "درہم (چاندی کے سکے)",
          "tr": "dirhemler",
          "ar": "دراهم معدودة",
          "zh": "几枚迪尔汗(银币)",
          "ja": "ディルハム銀貨", hi: 'दिरहम (चाँदी के सिक्के)', es: 'dírhams (monedas de plata)', ru: 'дирхамы (серебряные монеты)', de: 'Dirham (Silbermünzen)', fa: 'درهم‌ها (سکه‌های نقره)', ms: 'dirham (syiling perak)'
        }
      },
      {
        "arabic": "شَهَٰدَةٌ",
        "translit": "shahādah",
        "count": 5,
        "ref": "2:140",
        "meanings": {
          "en": "testimony, witness",
          "bn": "সাক্ষ্য",
          "fr": "témoignage",
          "id": "kesaksian",
          "ur": "گواہی",
          "tr": "şahitlik",
          "ar": "شهادة",
          "zh": "作证",
          "ja": "証言", hi: 'गवाही, शहादत', es: 'testimonio, testigo', ru: 'свидетельство, показание', de: 'Zeugnis, Zeugenaussage', fa: 'گواهی، شهادت', ms: 'kesaksian, saksi'
        }
      }
    ]
  },
  {
    "id": "garments",
    "icon": "👕",
    "names": {
      "en": "Garments & adornment",
      "bn": "পোশাক ও অলংকার"
    },
    "words": [
      {
        "arabic": "لِبَاسٌ",
        "translit": "libās",
        "count": 3,
        "ref": "2:187",
        "meanings": {
          "en": "garment, covering",
          "bn": "পোশাক, আবরণ",
          "fr": "vêtement",
          "id": "pakaian",
          "ur": "لباس",
          "tr": "giysi, örtü",
          "ar": "لباس وستر",
          "zh": "衣服",
          "ja": "衣服", hi: 'लिबास, ढकने वाला', es: 'vestimenta, cobertura', ru: 'одеяние, покров', de: 'Kleidung, Bedeckung', fa: 'لباس، پوشش', ms: 'pakaian, penutup'
        }
      },
      {
        "arabic": "ثِيَابٌ",
        "translit": "thiyāb",
        "count": 2,
        "ref": "22:19",
        "meanings": {
          "en": "garments, clothes",
          "bn": "কাপড়, বস্ত্র",
          "fr": "habits",
          "id": "baju-baju",
          "ur": "کپڑے",
          "tr": "elbiseler",
          "ar": "ثياب",
          "zh": "衣裳",
          "ja": "衣類", hi: 'कपड़े, पोशाक', es: 'vestidos, ropas', ru: 'одежды, платье', de: 'Gewänder, Kleider', fa: 'جامه‌ها، لباس‌ها', ms: 'pakaian, baju'
        }
      },
      {
        "arabic": "زِينَةٌ",
        "translit": "zīnah",
        "count": 6,
        "ref": "7:32",
        "meanings": {
          "en": "adornment",
          "bn": "সৌন্দর্য, অলংকার",
          "fr": "parure",
          "id": "perhiasan",
          "ur": "زینت",
          "tr": "süs, ziynet",
          "ar": "زينة",
          "zh": "装饰",
          "ja": "装飾", hi: 'ज़ीनत, सजावट', es: 'adorno', ru: 'украшение', de: 'Schmuck', fa: 'زینت', ms: 'perhiasan'
        }
      },
      {
        "arabic": "حَرِيرٌ",
        "translit": "ḥarīr",
        "count": 2,
        "ref": "22:23",
        "meanings": {
          "en": "silk",
          "bn": "রেশম",
          "fr": "soie",
          "id": "sutra",
          "ur": "ریشم",
          "tr": "ipek",
          "ar": "حرير",
          "zh": "丝绸",
          "ja": "絹", hi: 'रेशम', es: 'seda', ru: 'шёлк', de: 'Seide', fa: 'ابریشم', ms: 'sutera'
        }
      },
      {
        "arabic": "سُندُسٌ",
        "translit": "sundus",
        "count": 3,
        "ref": "18:31",
        "meanings": {
          "en": "fine silk",
          "bn": "মিহি রেশম",
          "fr": "soie fine",
          "id": "sutra halus",
          "ur": "باریک ریشم",
          "tr": "ince ipek",
          "ar": "حرير رقيق",
          "zh": "细软的丝绸",
          "ja": "薄絹", hi: 'बारीक रेशम', es: 'seda fina', ru: 'тонкий шёлк', de: 'feine Seide', fa: 'ابریشم نازک', ms: 'sutera halus'
        }
      },
      {
        "arabic": "إِسْتَبْرَقٌ",
        "translit": "istabraq",
        "count": 1,
        "ref": "55:54",
        "meanings": {
          "en": "brocade, thick silk",
          "bn": "মোটা রেশম (ইস্তাবরাক)",
          "fr": "brocart",
          "id": "sutra tebal",
          "ur": "دبیز ریشم",
          "tr": "kalın ipek, atlas",
          "ar": "حرير غليظ (ديباج)",
          "zh": "锦缎",
          "ja": "錦(厚い絹)", hi: 'दबीज़ रेशम, मोटा रेशम', es: 'brocado, seda gruesa', ru: 'парча, плотный шёлк', de: 'Brokat, schwere Seide', fa: 'دیبا، ابریشم ستبر', ms: 'sutera tebal, sutera bersulam'
        }
      },
      {
        "arabic": "أَسَاوِرَ",
        "translit": "asāwir",
        "count": 4,
        "ref": "18:31",
        "meanings": {
          "en": "bracelets",
          "bn": "কঙ্কণ, বালা",
          "fr": "bracelets",
          "id": "gelang-gelang",
          "ur": "کنگن",
          "tr": "bilezikler",
          "ar": "أساور",
          "zh": "手镯",
          "ja": "腕輪", hi: 'कंगन', es: 'brazaletes', ru: 'браслеты', de: 'Armreifen', fa: 'دستبندها', ms: 'gelang'
        }
      },
      {
        "arabic": "قَمِيصِهِ",
        "translit": "qamīṣihi",
        "count": 5,
        "ref": "12:18",
        "meanings": {
          "en": "his shirt (of Yusuf)",
          "bn": "তার জামা (ইউসুফের)",
          "fr": "sa tunique (de Joseph)",
          "id": "bajunya (Yusuf)",
          "ur": "اس کی قمیص (یوسفؑ کی)",
          "tr": "onun gömleği (Yusuf'un)",
          "ar": "قميص يوسف",
          "zh": "他的衬衣(优素福的)",
          "ja": "彼の(ユースフの)長衣", hi: 'उसका कुर्ता (यूसुफ़ अलैहिस्सलाम का)', es: 'su camisa (de José)', ru: 'его рубаха (Юсуфа)', de: 'sein Hemd (Yusufs)', fa: 'پیراهنش (پیراهن یوسف)', ms: 'bajunya (Yusuf a.s.)'
        }
      }
    ]
  },
  {
    "id": "judgment-day",
    "icon": "📯",
    "names": {
      "en": "Names of the Last Day",
      "bn": "কিয়ামতের নামসমূহ"
    },
    "words": [
      {
        "arabic": "ٱلصُّورِ",
        "translit": "al-ṣūr",
        "count": 10,
        "ref": "6:73",
        "meanings": {
          "en": "the Trumpet",
          "bn": "শিঙা",
          "fr": "la Trompette",
          "id": "sangkakala",
          "ur": "صور",
          "tr": "Sûr (boru)",
          "ar": "الصور الذي يُنفخ فيه",
          "zh": "号角",
          "ja": "(審判の)ラッパ", hi: 'सूर (नरसिंगा)', es: 'la Trompeta', ru: 'Рог', de: 'das Horn', fa: 'صور', ms: 'sangkakala'
        }
      },
      {
        "arabic": "ٱلصَّيْحَةُ",
        "translit": "al-ṣayḥah",
        "count": 7,
        "ref": "11:67",
        "meanings": {
          "en": "the blast, mighty cry",
          "bn": "মহাগর্জন",
          "fr": "le Cri",
          "id": "suara yang mengguntur",
          "ur": "چنگھاڑ",
          "tr": "korkunç ses",
          "ar": "الصيحة المهلكة",
          "zh": "震耳的呐喊",
          "ja": "一声の轟き", hi: 'चिंघाड़, ज़ोरदार चीख़', es: 'el grito, el clamor poderoso', ru: 'вопль, мощный клич', de: 'der Schrei, gewaltiger Ruf', fa: 'بانگ مرگبار، فریاد سهمگین', ms: 'pekikan, teriakan yang dahsyat'
        }
      },
      {
        "arabic": "ٱلْوَاقِعَةُ",
        "translit": "al-wāqiʿah",
        "count": 2,
        "ref": "56:1",
        "meanings": {
          "en": "the inevitable Event",
          "bn": "অবশ্যম্ভাবী ঘটনা",
          "fr": "l'Événement inéluctable",
          "id": "peristiwa yang pasti terjadi",
          "ur": "واقع ہونے والی (قیامت)",
          "tr": "kesin gerçekleşecek olay",
          "ar": "الواقعة يوم القيامة",
          "zh": "必然降临的大事",
          "ja": "必ず起こる出来事", hi: 'होकर रहने वाली घटना', es: 'el Acontecimiento inevitable', ru: 'неотвратимое Событие', de: 'das unvermeidliche Ereignis', fa: 'رویداد حتمی', ms: 'peristiwa yang pasti berlaku'
        }
      },
      {
        "arabic": "ٱلْحَآقَّةُ",
        "translit": "al-ḥāqqah",
        "count": 3,
        "ref": "69:1",
        "meanings": {
          "en": "the sure Reality",
          "bn": "অবধারিত সত্য",
          "fr": "l'Inévitable",
          "id": "hari yang pasti benar",
          "ur": "یقینی حقیقت",
          "tr": "gerçekleşecek olan",
          "ar": "الحاقة الثابتة الوقوع",
          "zh": "真实的灾难",
          "ja": "確かな実在(の日)", hi: 'यक़ीनी हक़ीक़त', es: 'la Realidad indudable', ru: 'неизбежная Реальность', de: 'die sichere Wirklichkeit', fa: 'حقیقت قطعی', ms: 'kebenaran yang pasti'
        }
      },
      {
        "arabic": "ٱلْقَارِعَةُ",
        "translit": "al-qāriʿah",
        "count": 3,
        "ref": "101:1",
        "meanings": {
          "en": "the striking Calamity",
          "bn": "মহাপ্রলয়",
          "fr": "le Fracas",
          "id": "hari yang menggetarkan",
          "ur": "کھڑکھڑانے والی",
          "tr": "çarpan felaket",
          "ar": "القارعة التي تقرع القلوب",
          "zh": "大难",
          "ja": "打ち叩く災厄", hi: 'खड़खड़ा देने वाली आफ़त', es: 'la Calamidad que golpea', ru: 'Сокрушающее бедствие', de: 'das pochende Verhängnis', fa: 'کوبنده‌ی سهمگین', ms: 'hari yang menggemparkan'
        }
      },
      {
        "arabic": "ٱلْغَٰشِيَةِ",
        "translit": "al-ghāshiyah",
        "count": 1,
        "ref": "88:1",
        "meanings": {
          "en": "the Overwhelming",
          "bn": "আচ্ছন্নকারী (কিয়ামত)",
          "fr": "l'Enveloppante",
          "id": "hari yang meliputi",
          "ur": "ڈھانپ لینے والی",
          "tr": "her şeyi kaplayan",
          "ar": "الغاشية التي تغشى الناس",
          "zh": "笼罩的灾难",
          "ja": "覆い包むもの", hi: 'छा जाने वाली', es: 'la Envolvente', ru: 'Покрывающее', de: 'die Überdeckende', fa: 'فراگیرنده', ms: 'hari yang menyelubungi'
        }
      },
      {
        "arabic": "ٱلطَّآمَّةُ",
        "translit": "al-ṭāmmah",
        "count": 1,
        "ref": "79:34",
        "meanings": {
          "en": "the great Catastrophe",
          "bn": "মহাসংকট",
          "fr": "le grand Cataclysme",
          "id": "malapetaka terbesar",
          "ur": "بڑی آفت",
          "tr": "en büyük felaket",
          "ar": "الطامة الكبرى",
          "zh": "大灾难",
          "ja": "大変災", hi: 'सबसे बड़ी आफ़त', es: 'la gran Catástrofe', ru: 'великое Бедствие', de: 'die große Katastrophe', fa: 'فاجعه‌ی بزرگ', ms: 'malapetaka yang amat besar'
        }
      },
      {
        "arabic": "ٱلصَّآخَّةُ",
        "translit": "al-ṣākhkhah",
        "count": 1,
        "ref": "80:33",
        "meanings": {
          "en": "the deafening Blast",
          "bn": "কানফাটা আওয়াজ",
          "fr": "le Fracas assourdissant",
          "id": "suara yang memekakkan",
          "ur": "کان پھاڑ دینے والی آواز",
          "tr": "kulakları sağır eden ses",
          "ar": "الصاخة التي تصم الآذان",
          "zh": "震耳欲聋的巨响",
          "ja": "耳をつんざく響き", hi: 'कान फाड़ देने वाली आवाज़', es: 'el Estruendo ensordecedor', ru: 'оглушительный Глас', de: 'der betäubende Schall', fa: 'بانگ گوش‌خراش', ms: 'tiupan yang memekakkan telinga'
        }
      }
    ]
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VOCAB_WORDS, VOCAB_THEMES };
}
