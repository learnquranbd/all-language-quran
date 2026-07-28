/**
 * Qaida Data — static learning content for the Kids "Learn to Read Quran" module.
 * Pure data, no DOM. Consumed by js/learn-kids.js.
 */

/**
 * The 28 Arabic letters in traditional order.
 * char: the isolated letter, name: its Arabic name, translit: Latin transliteration.
 */
const QAIDA_LETTERS = [
  { char: 'ا', name: 'أَلِف',  translit: 'Alif'  },
  { char: 'ب', name: 'بَاء',  translit: 'Ba'    },
  { char: 'ت', name: 'تَاء',  translit: 'Ta'    },
  { char: 'ث', name: 'ثَاء',  translit: 'Tha'   },
  { char: 'ج', name: 'جِيم',  translit: 'Jim'   },
  { char: 'ح', name: 'حَاء',  translit: 'Ḥa'    },
  { char: 'خ', name: 'خَاء',  translit: 'Kha'   },
  { char: 'د', name: 'دَال',  translit: 'Dal'   },
  { char: 'ذ', name: 'ذَال',  translit: 'Dhal'  },
  { char: 'ر', name: 'رَاء',  translit: 'Ra'    },
  { char: 'ز', name: 'زَاي',  translit: 'Zay'   },
  { char: 'س', name: 'سِين',  translit: 'Sin'   },
  { char: 'ش', name: 'شِين',  translit: 'Shin'  },
  { char: 'ص', name: 'صَاد',  translit: 'Ṣad'   },
  { char: 'ض', name: 'ضَاد',  translit: 'Ḍad'   },
  { char: 'ط', name: 'طَاء',  translit: 'Ṭa'    },
  { char: 'ظ', name: 'ظَاء',  translit: 'Ẓa'    },
  { char: 'ع', name: 'عَيْن', translit: "'Ayn"  },
  { char: 'غ', name: 'غَيْن', translit: 'Ghayn' },
  { char: 'ف', name: 'فَاء',  translit: 'Fa'    },
  { char: 'ق', name: 'قَاف',  translit: 'Qaf'   },
  { char: 'ك', name: 'كَاف',  translit: 'Kaf'   },
  { char: 'ل', name: 'لَام',  translit: 'Lam'   },
  { char: 'م', name: 'مِيم',  translit: 'Mim'   },
  { char: 'ن', name: 'نُون',  translit: 'Nun'   },
  { char: 'ه', name: 'هَاء',  translit: 'Ha'    },
  { char: 'و', name: 'وَاو',  translit: 'Waw'   },
  { char: 'ي', name: 'يَاء',  translit: 'Ya'    }
];

/**
 * Harakat (short vowels), tanween, sukoon, shadda and long vowels.
 * mark: the combining mark / madd letter, name: Arabic name, translit: Latin name,
 * makeExample(letterChar): the letter combined with the mark for display + TTS,
 * soundSuffix: what the mark adds to the letter's sound (a/i/u/an/in/un/aa/ii/uu).
 */
const QAIDA_HARAKAT = [
  {
    mark: 'َ', // fatha
    name: 'فَتْحَة',
    translit: 'Fatha',
    soundSuffix: 'a',
    makeExample: function (letterChar) { return letterChar + 'َ'; },
    example: { arabic: 'كَتَبَ', translit: 'Kataba', meaning: { en: 'he wrote', bn: 'সে লিখল', zh: 'he wrote', ja: 'he wrote' } }
  },
  {
    mark: 'ِ', // kasra
    name: 'كَسْرَة',
    translit: 'Kasra',
    soundSuffix: 'i',
    makeExample: function (letterChar) { return letterChar + 'ِ'; },
    example: { arabic: 'بِنْت', translit: 'Bint', meaning: { en: 'girl', bn: 'মেয়ে', zh: 'girl', ja: 'girl' } }
  },
  {
    mark: 'ُ', // damma
    name: 'ضَمَّة',
    translit: 'Damma',
    soundSuffix: 'u',
    makeExample: function (letterChar) { return letterChar + 'ُ'; },
    example: { arabic: 'كُتُب', translit: 'Kutub', meaning: { en: 'books', bn: 'বইসমূহ', zh: 'books', ja: 'books' } }
  },
  {
    mark: 'ً', // fathatan
    name: 'فَتْحَتَان',
    translit: 'Fathatan',
    soundSuffix: 'an',
    makeExample: function (letterChar) { return letterChar + 'ًا'; }, // e.g. بًا
    example: { arabic: 'عَلِيمًا', translit: "'Aliman", meaning: { en: 'all-knowing', bn: 'সর্বজ্ঞ', zh: 'all-knowing', ja: 'all-knowing' } }
  },
  {
    mark: 'ٍ', // kasratan
    name: 'كَسْرَتَان',
    translit: 'Kasratan',
    soundSuffix: 'in',
    makeExample: function (letterChar) { return letterChar + 'ٍ'; },
    example: { arabic: 'عَلِيمٍ', translit: "'Alimin", meaning: { en: 'all-knowing', bn: 'সর্বজ্ঞ', zh: 'all-knowing', ja: 'all-knowing' } }
  },
  {
    mark: 'ٌ', // dammatan
    name: 'ضَمَّتَان',
    translit: 'Dammatan',
    soundSuffix: 'un',
    makeExample: function (letterChar) { return letterChar + 'ٌ'; },
    example: { arabic: 'عَلِيمٌ', translit: "'Alimun", meaning: { en: 'all-knowing', bn: 'সর্বজ্ঞ', zh: 'all-knowing', ja: 'all-knowing' } }
  },
  {
    mark: 'ْ', // sukoon
    name: 'سُكُون',
    translit: 'Sukoon',
    soundSuffix: '',
    // A resting letter needs a vowel before it: أَبْ (ab)
    makeExample: function (letterChar) { return 'أَ' + letterChar + 'ْ'; },
    example: { arabic: 'قُلْ', translit: 'Qul', meaning: { en: 'say', bn: 'বলো', zh: '说', ja: '言う' } }
  },
  {
    mark: 'ّ', // shadda
    name: 'شَدَّة',
    translit: 'Shadda',
    soundSuffix: '',
    example: { arabic: 'رَبّ', translit: 'Rabb', meaning: { en: 'Lord', bn: 'প্রভু', zh: '主', ja: '主' } },
    // Doubled letter: أَبَّ (abba)
    makeExample: function (letterChar) { return 'أَ' + letterChar + 'َّ'; }
  },
  {
    mark: 'ا', // long alif
    name: 'مَدّ أَلِف',
    translit: 'Madd Alif',
    soundSuffix: 'aa',
    example: { arabic: 'قَالَ', translit: 'Qala', meaning: { en: 'he said', bn: 'সে বলল', zh: '他说', ja: '彼は言った' } },
    makeExample: function (letterChar) { return letterChar + 'َا'; } // بَا
  },
  {
    mark: 'ي', // long ya
    name: 'مَدّ يَاء',
    translit: 'Madd Ya',
    soundSuffix: 'ii',
    example: { arabic: 'قِيلَ', translit: 'Qila', meaning: { en: 'it was said', bn: 'বলা হলো', zh: '据说', ja: '言われた' } },
    makeExample: function (letterChar) { return letterChar + 'ِي'; } // بِي
  },
  {
    mark: 'و', // long waw
    name: 'مَدّ وَاو',
    translit: 'Madd Waw',
    soundSuffix: 'uu',
    example: { arabic: 'نُور', translit: 'Nur', meaning: { en: 'light', bn: 'আলো', zh: '光', ja: '光' } },
    makeExample: function (letterChar) { return letterChar + 'ُو'; } // بُو
  }
];

/**
 * 12 short, fully-voweled Quranic words for first reading practice.
 */
const QAIDA_WORDS = [
  { arabic: 'بِسْمِ',    translit: 'Bismi'   },
  { arabic: 'رَبِّ',     translit: 'Rabbi'   },
  { arabic: 'نُورٌ',     translit: 'Nurun'   },
  { arabic: 'قُلْ',      translit: 'Qul'     },
  { arabic: 'كِتَابٌ',   translit: 'Kitabun' },
  { arabic: 'قَمَرٌ',    translit: 'Qamarun' },
  { arabic: 'شَمْسٌ',    translit: 'Shamsun' },
  { arabic: 'يَوْمٌ',    translit: 'Yawmun'  },
  { arabic: 'جَنَّةٌ',   translit: 'Jannatun' },
  { arabic: 'سَلَامٌ',   translit: 'Salamun' },
  { arabic: 'عَيْنٌ',    translit: "'Aynun"  },
  { arabic: 'بَابٌ',     translit: 'Babun'   },
  // --- ~28 additional simple, fully-voweled words for early readers ---
  { arabic: 'أَب',       translit: 'Ab'      },
  { arabic: 'أُمّ',       translit: 'Umm'     },
  { arabic: 'مَاء',      translit: "Ma'"     },
  { arabic: 'نَار',      translit: 'Nar'     },
  { arabic: 'نُور',      translit: 'Nur'     },
  { arabic: 'عَبْد',     translit: "'Abd"    },
  { arabic: 'خَيْر',     translit: 'Khayr'   },
  { arabic: 'حُبّ',      translit: 'Hubb'    },
  { arabic: 'قَلْب',     translit: 'Qalb'    },
  { arabic: 'عَيْن',     translit: "'Ayn"    },
  { arabic: 'يَد',       translit: 'Yad'     },
  { arabic: 'دَار',      translit: 'Dar'     },
  { arabic: 'بَحْر',     translit: 'Bahr'    },
  { arabic: 'جَبَل',     translit: 'Jabal'   },
  { arabic: 'طَيْر',     translit: 'Tayr'    },
  { arabic: 'وَرْد',     translit: 'Ward'    },
  { arabic: 'لَيْل',     translit: 'Layl'    },
  { arabic: 'نَهَار',    translit: 'Nahar'   },
  { arabic: 'مَلِك',     translit: 'Malik'   },
  { arabic: 'كَلْب',     translit: 'Kalb'    },
  { arabic: 'سَمَك',     translit: 'Samak'   },
  { arabic: 'شَجَر',     translit: 'Shajar'  },
  { arabic: 'بَاب',      translit: 'Bab'     },
  { arabic: 'بَيْت',     translit: 'Bayt'    },
  { arabic: 'أَرْض',     translit: 'Ard'     },
  { arabic: 'سَمَاء',    translit: "Sama'"   },
  { arabic: 'رَحْمَة',   translit: 'Rahmah'  },
  { arabic: 'سَلَام',    translit: 'Salam'   },
  // --- 12 more common Islamic / Quranic practice words ---
  { arabic: 'قَلَم',     translit: 'Qalam'   },
  { arabic: 'عِلْم',     translit: "'Ilm"    },
  { arabic: 'رِزْق',     translit: 'Rizq'    },
  { arabic: 'صَبْر',     translit: 'Sabr'    },
  { arabic: 'حَمْد',     translit: 'Hamd'    },
  { arabic: 'خُبْز',     translit: 'Khubz'   },
  { arabic: 'لَبَن',     translit: 'Laban'   },
  { arabic: 'عَسَل',     translit: "'Asal"   },
  { arabic: 'وَلَد',     translit: 'Walad'   },
  { arabic: 'نَجْم',     translit: 'Najm'    },
  { arabic: 'مِفْتَاح',  translit: 'Miftah'  },
  { arabic: 'سِرَاج',    translit: 'Siraj'   }
];

/**
 * Themed Quranic vocabulary for kids ("Word Fun" section).
 * Every word is a real Quran word verified against data/quran-tokens.json:
 * ref = a verse where it occurs, hl = the exact diacritized token from
 * data/quran-words.json at that verse (used to highlight it in the ayah modal).
 * arabic = simple fully-voweled teaching form; meaning is inline-bilingual
 * ({en, bn}) following the KIDS_DUA_L10N render pattern (m[lang] || m.en).
 */
const KIDS_THEME_WORDS = [
  {
    id: 'animals',
    emoji: '🐾',
    label: { en: 'Animals', bn: 'প্রাণী', zh: '动物', ja: '動物' },
    words: [
      { arabic: 'بَقَرَة',    translit: 'Baqarah',   emoji: '🐄',  meaning: { en: 'Cow', bn: 'গরু', zh: '牛', ja: '牛' },            ref: '2:67',   hl: 'بَقَرَةً' },
      { arabic: 'فِيل',       translit: 'Fil',       emoji: '🐘',  meaning: { en: 'Elephant', bn: 'হাতি', zh: '大象', ja: '象' },           ref: '105:1',  hl: 'ٱلْفِيلِ' },
      { arabic: 'حُوت',       translit: 'Hut',       emoji: '🐋',  meaning: { en: 'Big fish (whale)', bn: 'বড় মাছ (তিমি)', zh: '大鱼（鲸鱼）', ja: '大きな魚（鯨）' }, ref: '37:142', hl: 'ٱلْحُوتُ' },
      { arabic: 'كَلْب',      translit: 'Kalb',      emoji: '🐕',  meaning: { en: 'Dog', bn: 'কুকুর', zh: '狗', ja: '犬' },          ref: '18:18',  hl: 'وَكَلْبُهُم' },
      { arabic: 'غُرَاب',     translit: 'Ghurab',    emoji: '🐦‍⬛', meaning: { en: 'Crow', bn: 'কাক', zh: '乌鸦', ja: 'カラス' },            ref: '5:31',   hl: 'غُرَابًا' },
      { arabic: 'نَحْل',      translit: 'Nahl',      emoji: '🐝',  meaning: { en: 'Bee', bn: 'মৌমাছি', zh: '蜜蜂', ja: '蜂' },         ref: '16:68',  hl: 'ٱلنَّحْلِ' },
      { arabic: 'نَمْل',      translit: 'Naml',      emoji: '🐜',  meaning: { en: 'Ants', bn: 'পিঁপড়া', zh: '蚂蚁', ja: '蟻' },         ref: '27:18',  hl: 'ٱلنَّمْلِ' },
      { arabic: 'عَنْكَبُوت', translit: "'Ankabut",  emoji: '🕷️', meaning: { en: 'Spider', bn: 'মাকড়সা', zh: '蜘蛛', ja: '蜘蛛' },         ref: '29:41',  hl: 'ٱلْعَنكَبُوتِ' },
      { arabic: 'ذِئْب',      translit: 'Dhib',      emoji: '🐺',  meaning: { en: 'Wolf', bn: 'নেকড়ে', zh: '狼', ja: '狼' },          ref: '12:13',  hl: 'ٱلذِّئْبُ' },
      { arabic: 'هُدْهُد',    translit: 'Hudhud',    emoji: '🐦',  meaning: { en: 'Hoopoe bird', bn: 'হুদহুদ পাখি', zh: '戴胜鸟', ja: 'ヤツガシラ' },     ref: '27:20',  hl: 'ٱلْهُدْهُدَ' }
    ]
  },
  {
    id: 'nature',
    emoji: '🌿',
    label: { en: 'Nature', bn: 'প্রকৃতি', zh: '自然', ja: '自然' },
    words: [
      { arabic: 'شَمْس',     translit: 'Shams',     emoji: '☀️',  meaning: { en: 'Sun', bn: 'সূর্য', zh: '太阳', ja: '太陽' },           ref: '91:1',   hl: 'وَٱلشَّمْسِ' },
      { arabic: 'قَمَر',     translit: 'Qamar',     emoji: '🌙',  meaning: { en: 'Moon', bn: 'চাঁদ', zh: '月亮', ja: '月' },            ref: '91:2',   hl: 'وَٱلْقَمَرِ' },
      { arabic: 'نَجْم',     translit: 'Najm',      emoji: '⭐',  meaning: { en: 'Star', bn: 'তারা', zh: '星星', ja: '星' },            ref: '53:1',   hl: 'وَٱلنَّجْمِ' },
      { arabic: 'بَحْر',     translit: 'Bahr',      emoji: '🌊',  meaning: { en: 'Sea', bn: 'সমুদ্র', zh: '海', ja: '海' },          ref: '18:109', hl: 'ٱلْبَحْرُ' },
      { arabic: 'جِبَال',    translit: 'Jibal',     emoji: '⛰️',  meaning: { en: 'Mountains', bn: 'পাহাড়', zh: '山', ja: '山' },           ref: '88:19',  hl: 'ٱلْجِبَالِ' },
      { arabic: 'مَاء',      translit: "Ma'",       emoji: '💧',  meaning: { en: 'Water', bn: 'পানি', zh: '水', ja: '水' },            ref: '2:22',   hl: 'مَآءً' },
      { arabic: 'شَجَرَة',   translit: 'Shajarah',  emoji: '🌳',  meaning: { en: 'Tree', bn: 'গাছ', zh: '树', ja: '木' },             ref: '2:35',   hl: 'ٱلشَّجَرَةَ' },
      { arabic: 'نَخْل',     translit: 'Nakhl',     emoji: '🌴',  meaning: { en: 'Date palm', bn: 'খেজুর গাছ', zh: '椰枣树', ja: 'ナツメヤシ' },       ref: '55:68',  hl: 'وَنَخْلٌ' },
      { arabic: 'عِنَب',     translit: "'Inab",     emoji: '🍇',  meaning: { en: 'Grapes', bn: 'আঙুর', zh: '葡萄', ja: 'ブドウ' },            ref: '80:28',  hl: 'وَعِنَبًا' },
      { arabic: 'زَيْتُون',  translit: 'Zaytun',    emoji: '🫒',  meaning: { en: 'Olive', bn: 'জলপাই', zh: '橄榄', ja: 'オリーブ' },           ref: '95:1',   hl: 'وَٱلزَّيْتُونِ' }
    ]
  },
  {
    id: 'family',
    emoji: '👨‍👩‍👧‍👦',
    label: { en: 'Family', bn: 'পরিবার', zh: '家庭', ja: '家族' },
    words: [
      { arabic: 'أَب',         translit: 'Ab',        emoji: '👨',       meaning: { en: 'Father', bn: 'বাবা', zh: '父亲', ja: '父' },     ref: '12:78', hl: 'أَبًا' },
      { arabic: 'أُمّ',         translit: 'Umm',       emoji: '👩',       meaning: { en: 'Mother', bn: 'মা', zh: '母亲', ja: '母' },       ref: '28:7',  hl: 'أُمِّ' },
      { arabic: 'أَخ',         translit: 'Akh',       emoji: '👦',       meaning: { en: 'Brother', bn: 'ভাই', zh: '兄弟', ja: '兄弟' },      ref: '4:12',  hl: 'أَخٌ' },
      { arabic: 'أُخْت',       translit: 'Ukht',      emoji: '👧',       meaning: { en: 'Sister', bn: 'বোন', zh: '姐妹', ja: '姉妹' },      ref: '4:12',  hl: 'أُخْتٌ' },
      { arabic: 'وَالِدَيْن',  translit: 'Walidayn',  emoji: '👨‍👩‍👧',    meaning: { en: 'Parents', bn: 'বাবা-মা', zh: '父母', ja: '両親' },  ref: '4:36',  hl: 'وَبِٱلْوَٰلِدَيْنِ' },
      { arabic: 'أَهْل',       translit: 'Ahl',       emoji: '🏠',       meaning: { en: 'Family', bn: 'পরিবার', zh: '家庭', ja: '家族' },   ref: '20:29', hl: 'أَهْلِى' }
    ]
  },
  {
    id: 'colors',
    emoji: '🎨',
    label: { en: 'Colours', bn: 'রং', zh: '颜色', ja: '色' },
    words: [
      { arabic: 'أَبْيَض',   translit: 'Abyad',    emoji: '⚪', meaning: { en: 'White', bn: 'সাদা', zh: '白色', ja: '白' },           ref: '2:187', hl: 'ٱلْأَبْيَضُ' },
      { arabic: 'أَسْوَد',   translit: 'Aswad',    emoji: '⚫', meaning: { en: 'Black', bn: 'কালো', zh: '黑色', ja: '黒' },           ref: '2:187', hl: 'ٱلْأَسْوَدِ' },
      { arabic: 'أَخْضَر',   translit: 'Akhdar',   emoji: '🟢', meaning: { en: 'Green', bn: 'সবুজ', zh: '绿色', ja: '緑' },           ref: '36:80', hl: 'ٱلْأَخْضَرِ' },
      { arabic: 'صَفْرَاء',  translit: "Safra'",   emoji: '🟡', meaning: { en: 'Yellow', bn: 'হলুদ', zh: '黄色', ja: '黄' },           ref: '2:69',  hl: 'صَفْرَآءُ' },
      { arabic: 'حُمْر',     translit: 'Humr',     emoji: '🔴', meaning: { en: 'Red (streaks)', bn: 'লাল', zh: '红色（条纹）', ja: '赤（筋）' },            ref: '35:27', hl: 'وَحُمْرٌ' },
      { arabic: 'وَرْدَة',   translit: 'Wardah',   emoji: '🌹', meaning: { en: 'Rose (rosy pink)', bn: 'গোলাপ (গোলাপি)', zh: '玫瑰（粉红色）', ja: 'バラ（ピンク色）' }, ref: '55:37', hl: 'وَرْدَةً' }
    ]
  },
  {
    id: 'food',
    emoji: '🍽️',
    label: { en: 'Food', bn: 'খাবার', zh: '食物', ja: '食べ物' },
    words: [
      { arabic: 'خُبْز',  translit: 'Khubz',  emoji: '🍞', meaning: { en: 'Bread', bn: 'রুটি', zh: '面包', ja: 'パン' },   ref: '12:36', hl: 'خُبْزًا' },
      { arabic: 'لَبَن',  translit: 'Laban',  emoji: '🥛', meaning: { en: 'Milk', bn: 'দুধ', zh: '牛奶', ja: '牛乳' },    ref: '16:66', hl: 'لَّبَنًا' },
      { arabic: 'عَسَل',  translit: "'Asal",  emoji: '🍯', meaning: { en: 'Honey', bn: 'মধু', zh: '蜂蜜', ja: '蜂蜜' },   ref: '47:15', hl: 'عَسَلٍ' },
      { arabic: 'لَحْم',  translit: 'Lahm',   emoji: '🍖', meaning: { en: 'Meat', bn: 'মাংস', zh: '肉', ja: '肉' },     ref: '16:14', hl: 'لَحْمًا' }
    ]
  },
  {
    id: 'body',
    emoji: '🧑',
    label: { en: 'Body', bn: 'শরীর', zh: '身体', ja: '体' },
    words: [
      { arabic: 'وَجْه',  translit: 'Wajh',   emoji: '😊', meaning: { en: 'Face', bn: 'মুখ', zh: '脸', ja: '顔' },     ref: '2:144', hl: 'وَجْهَكَ' },
      { arabic: 'عَيْن',  translit: "'Ayn",   emoji: '👁️', meaning: { en: 'Eye', bn: 'চোখ', zh: '眼睛', ja: '目' },     ref: '5:45',  hl: 'وَٱلْعَيْنَ' },
      { arabic: 'أُذُن',  translit: 'Udhun',  emoji: '👂', meaning: { en: 'Ear', bn: 'কান', zh: '耳朵', ja: '耳' },     ref: '5:45',  hl: 'وَٱلْأُذُنَ' },
      { arabic: 'لِسَان', translit: 'Lisan',  emoji: '👅', meaning: { en: 'Tongue', bn: 'জিহ্বা', zh: '舌头', ja: '舌' }, ref: '20:27', hl: 'لِّسَانِى' },
      { arabic: 'قَلْب',  translit: 'Qalb',   emoji: '❤️', meaning: { en: 'Heart', bn: 'হৃদয়', zh: '心', ja: '心臓' },   ref: '26:89', hl: 'بِقَلْبٍ' },
      { arabic: 'يَد',    translit: 'Yad',    emoji: '✋', meaning: { en: 'Hand', bn: 'হাত', zh: '手', ja: '手' },     ref: '20:22', hl: 'يَدَكَ' }
    ]
  },
  {
    id: 'sky',
    emoji: '🌦️',
    label: { en: 'Sky & Weather', bn: 'আকাশ ও আবহাওয়া', zh: '天空与天气', ja: '空と天気' },
    words: [
      { arabic: 'سَمَاء',   translit: "Sama'",  emoji: '🌌', meaning: { en: 'Sky', bn: 'আকাশ', zh: '天空', ja: '空' },          ref: '2:22',  hl: 'وَٱلسَّمَآءَ' },
      { arabic: 'سَحَاب',   translit: 'Sahab',  emoji: '☁️', meaning: { en: 'Clouds', bn: 'মেঘ', zh: '云', ja: '雲' },          ref: '2:164', hl: 'وَٱلسَّحَابِ' },
      { arabic: 'مَطَر',    translit: 'Matar',  emoji: '🌧️', meaning: { en: 'Rain', bn: 'বৃষ্টি', zh: '雨', ja: '雨' },         ref: '4:102', hl: 'مَّطَرٍ' },
      { arabic: 'رَعْد',    translit: "Ra'd",   emoji: '⛈️', meaning: { en: 'Thunder', bn: 'বজ্র', zh: '雷', ja: '雷' },        ref: '13:13', hl: 'ٱلرَّعْدُ' },
      { arabic: 'بَرْق',    translit: 'Barq',   emoji: '⚡', meaning: { en: 'Lightning', bn: 'বিদ্যুৎ', zh: '闪电', ja: '稲妻' }, ref: '13:12', hl: 'ٱلْبَرْقَ' },
      { arabic: 'رِيَاح',   translit: 'Riyah',  emoji: '💨', meaning: { en: 'Winds', bn: 'বাতাস', zh: '风', ja: '風' },         ref: '2:164', hl: 'ٱلرِّيَٰحِ' }
    ]
  },
  {
    id: 'places',
    emoji: '🕌',
    label: { en: 'Places', bn: 'স্থান', zh: '地方', ja: '場所' },
    words: [
      { arabic: 'مَسْجِد',  translit: 'Masjid',  emoji: '🕌', meaning: { en: 'Mosque', bn: 'মসজিদ', zh: '清真寺', ja: 'モスク' },        ref: '17:1',  hl: 'ٱلْمَسْجِدِ' },
      { arabic: 'بَيْت',    translit: 'Bayt',    emoji: '🏡', meaning: { en: 'House', bn: 'ঘর', zh: '房子', ja: '家' },               ref: '3:96',  hl: 'بَيْتٍ' },
      { arabic: 'جَنَّة',   translit: 'Jannah',  emoji: '🏞️', meaning: { en: 'Garden (Paradise)', bn: 'জান্নাত (বাগান)', zh: '乐园（花园）', ja: '楽園（庭園）' }, ref: '2:35', hl: 'ٱلْجَنَّةَ' },
      { arabic: 'مَدِينَة', translit: 'Madinah', emoji: '🏙️', meaning: { en: 'City', bn: 'শহর', zh: '城市', ja: '町' },               ref: '36:20', hl: 'ٱلْمَدِينَةِ' },
      { arabic: 'بَاب',     translit: 'Bab',     emoji: '🚪', meaning: { en: 'Door', bn: 'দরজা', zh: '门', ja: 'ドア' },              ref: '12:25', hl: 'ٱلْبَابَ' },
      { arabic: 'أَرْض',    translit: 'Ard',     emoji: '🌍', meaning: { en: 'Earth (land)', bn: 'জমিন', zh: '大地', ja: '大地' },     ref: '2:22',  hl: 'ٱلْأَرْضَ' }
    ]
  },
  {
    id: 'learning',
    emoji: '📖',
    label: { en: 'Learning', bn: 'শেখা', zh: '学习', ja: '学び' },
    words: [
      { arabic: 'قُرْآن',    translit: "Qur'an", emoji: '📖', meaning: { en: 'Quran', bn: 'কুরআন', zh: '古兰经', ja: 'クルアーン' },  ref: '2:185', hl: 'ٱلْقُرْءَانُ' },
      { arabic: 'كِتَاب',    translit: 'Kitab',  emoji: '📚', meaning: { en: 'Book', bn: 'কিতাব (বই)', zh: '书', ja: '本' },        ref: '2:2',   hl: 'ٱلْكِتَٰبُ' },
      { arabic: 'قَلَم',     translit: 'Qalam',  emoji: '🖊️', meaning: { en: 'Pen', bn: 'কলম', zh: '笔', ja: 'ペン' },             ref: '68:1',  hl: 'وَٱلْقَلَمِ' },
      { arabic: 'قِرْطَاس',  translit: 'Qirtas', emoji: '📄', meaning: { en: 'Paper', bn: 'কাগজ', zh: '纸', ja: '紙' },            ref: '6:7',   hl: 'قِرْطَاسٍ' },
      { arabic: 'عِلْم',     translit: "'Ilm",   emoji: '🎓', meaning: { en: 'Knowledge', bn: 'জ্ঞান', zh: '知识', ja: '知識' },    ref: '2:32',  hl: 'عِلْمَ' },
      { arabic: 'نُور',      translit: 'Nur',    emoji: '💡', meaning: { en: 'Light', bn: 'আলো', zh: '光', ja: '光' },             ref: '24:35', hl: 'نُورُ' }
    ]
  },
  {
    id: 'time',
    emoji: '⏰',
    label: { en: 'Time', bn: 'সময়', zh: '时间', ja: '時間' },
    words: [
      { arabic: 'يَوْم',   translit: 'Yawm',  emoji: '📅', meaning: { en: 'Day', bn: 'দিন', zh: '日子', ja: '日' },              ref: '1:4',   hl: 'يَوْمِ' },
      { arabic: 'لَيْل',   translit: 'Layl',  emoji: '🌃', meaning: { en: 'Night', bn: 'রাত', zh: '夜晚', ja: '夜' },            ref: '92:1',  hl: 'وَٱلَّيْلِ' },
      { arabic: 'نَهَار',  translit: 'Nahar', emoji: '🌅', meaning: { en: 'Daytime', bn: 'দিনের বেলা', zh: '白天', ja: '昼' },   ref: '92:2',  hl: 'وَٱلنَّهَارِ' },
      { arabic: 'فَجْر',   translit: 'Fajr',  emoji: '🌄', meaning: { en: 'Dawn', bn: 'ভোর', zh: '黎明', ja: '夜明け' },         ref: '89:1',  hl: 'وَٱلْفَجْرِ' },
      { arabic: 'شَهْر',   translit: 'Shahr', emoji: '🗓️', meaning: { en: 'Month', bn: 'মাস', zh: '月份', ja: 'ひと月' },        ref: '2:185', hl: 'شَهْرُ' },
      { arabic: 'سَنَة',   translit: 'Sanah', emoji: '🎆', meaning: { en: 'Year', bn: 'বছর', zh: '年', ja: '年' },              ref: '29:14', hl: 'سَنَةٍ' }
    ]
  },
  // v156 additions — 4 theme word sets (2026-07-28)
  {
    "id": "worship",
    "emoji": "🤲",
    "label": {
      "en": "Worship",
      "bn": "ইবাদত",
      "zh": "功修",
      "ja": "礼拝行"
    },
    "words": [
      {
        "arabic": "صَلَاة",
        "translit": "Salah",
        "emoji": "🧎",
        "meaning": {
          "en": "Prayer",
          "bn": "নামাজ (সালাত)",
          "zh": "礼拜",
          "ja": "礼拝"
        },
        "ref": "2:3",
        "hl": "ٱلصَّلَوٰةَ"
      },
      {
        "arabic": "صِيَام",
        "translit": "Siyam",
        "emoji": "🌙",
        "meaning": {
          "en": "Fasting",
          "bn": "রোজা (সিয়াম)",
          "zh": "斋戒",
          "ja": "断食"
        },
        "ref": "2:183",
        "hl": "ٱلصِّيَامُ"
      },
      {
        "arabic": "زَكَاة",
        "translit": "Zakah",
        "emoji": "💝",
        "meaning": {
          "en": "Charity (Zakah)",
          "bn": "যাকাত",
          "zh": "天课（施舍）",
          "ja": "喜捨（ザカート）"
        },
        "ref": "2:43",
        "hl": "ٱلزَّكَوٰةَ"
      },
      {
        "arabic": "حَجّ",
        "translit": "Hajj",
        "emoji": "🕋",
        "meaning": {
          "en": "Pilgrimage",
          "bn": "হজ",
          "zh": "朝觐",
          "ja": "巡礼（ハッジ）"
        },
        "ref": "3:97",
        "hl": "حِجُّ"
      },
      {
        "arabic": "دُعَاء",
        "translit": "Du'a",
        "emoji": "🤲",
        "meaning": {
          "en": "Supplication",
          "bn": "দোয়া",
          "zh": "祈祷",
          "ja": "祈願（ドゥアー）"
        },
        "ref": "14:39",
        "hl": "ٱلدُّعَآءِ"
      },
      {
        "arabic": "سُجُود",
        "translit": "Sujud",
        "emoji": "🙇",
        "meaning": {
          "en": "Prostration",
          "bn": "সিজদা",
          "zh": "叩拜",
          "ja": "跪拝（サジダ）"
        },
        "ref": "2:125",
        "hl": "ٱلسُّجُودِ"
      }
    ]
  },
  {
    "id": "feelings",
    "emoji": "💗",
    "label": {
      "en": "Feelings",
      "bn": "অনুভূতি",
      "zh": "感受",
      "ja": "気持ち"
    },
    "words": [
      {
        "arabic": "صَبْر",
        "translit": "Sabr",
        "emoji": "😌",
        "meaning": {
          "en": "Patience",
          "bn": "ধৈর্য (সবর)",
          "zh": "耐心",
          "ja": "忍耐"
        },
        "ref": "2:153",
        "hl": "بِٱلصَّبْرِ"
      },
      {
        "arabic": "شُكْر",
        "translit": "Shukr",
        "emoji": "🙏",
        "meaning": {
          "en": "Gratitude",
          "bn": "কৃতজ্ঞতা (শোকর)",
          "zh": "感恩",
          "ja": "感謝"
        },
        "ref": "14:7",
        "hl": "شَكَرْتُمْ"
      },
      {
        "arabic": "حُبّ",
        "translit": "Hubb",
        "emoji": "💕",
        "meaning": {
          "en": "Love",
          "bn": "ভালোবাসা",
          "zh": "爱",
          "ja": "愛"
        },
        "ref": "2:165",
        "hl": "حُبًّا"
      },
      {
        "arabic": "خَوْف",
        "translit": "Khawf",
        "emoji": "😨",
        "meaning": {
          "en": "Fear",
          "bn": "ভয়",
          "zh": "害怕",
          "ja": "恐れ"
        },
        "ref": "2:38",
        "hl": "خَوْفٌ"
      },
      {
        "arabic": "فَرَح",
        "translit": "Farah",
        "emoji": "😄",
        "meaning": {
          "en": "Joy",
          "bn": "আনন্দ",
          "zh": "快乐",
          "ja": "喜び"
        },
        "ref": "3:170",
        "hl": "فَرِحِينَ"
      },
      {
        "arabic": "حُزْن",
        "translit": "Huzn",
        "emoji": "😢",
        "meaning": {
          "en": "Sadness",
          "bn": "দুঃখ",
          "zh": "悲伤",
          "ja": "悲しみ"
        },
        "ref": "12:86",
        "hl": "وَحُزْنِىٓ"
      }
    ]
  },
  {
    "id": "fruits-veggies",
    "emoji": "🥕",
    "label": {
      "en": "Fruits & Veggies",
      "bn": "ফল ও সবজি",
      "zh": "果蔬",
      "ja": "野菜と果物"
    },
    "words": [
      {
        "arabic": "رُطَب",
        "translit": "Rutab",
        "emoji": "🌴",
        "meaning": {
          "en": "Fresh ripe dates",
          "bn": "তাজা পাকা খেজুর",
          "zh": "鲜熟椰枣",
          "ja": "熟したナツメヤシ"
        },
        "ref": "19:25",
        "hl": "رُطَبًا"
      },
      {
        "arabic": "يَقْطِين",
        "translit": "Yaqtin",
        "emoji": "🎃",
        "meaning": {
          "en": "Gourd (squash)",
          "bn": "লাউ-কুমড়া",
          "zh": "葫芦瓜",
          "ja": "ひょうたん（ウリ）"
        },
        "ref": "37:146",
        "hl": "يَقْطِينٍ"
      },
      {
        "arabic": "زَنجَبِيل",
        "translit": "Zanjabil",
        "emoji": "🫚",
        "meaning": {
          "en": "Ginger",
          "bn": "আদা",
          "zh": "姜",
          "ja": "生姜"
        },
        "ref": "76:17",
        "hl": "زَنجَبِيلًا"
      },
      {
        "arabic": "قِثَّاء",
        "translit": "Qiththa'",
        "emoji": "🥒",
        "meaning": {
          "en": "Cucumber",
          "bn": "শসা",
          "zh": "黄瓜",
          "ja": "きゅうり"
        },
        "ref": "2:61",
        "hl": "وَقِثَّآئِهَا"
      },
      {
        "arabic": "عَدَس",
        "translit": "'Adas",
        "emoji": "🫘",
        "meaning": {
          "en": "Lentils",
          "bn": "মসুর ডাল",
          "zh": "扁豆",
          "ja": "レンズ豆"
        },
        "ref": "2:61",
        "hl": "وَعَدَسِهَا"
      },
      {
        "arabic": "بَصَل",
        "translit": "Basal",
        "emoji": "🧅",
        "meaning": {
          "en": "Onion",
          "bn": "পেঁয়াজ",
          "zh": "洋葱",
          "ja": "玉ねぎ"
        },
        "ref": "2:61",
        "hl": "وَبَصَلِهَا"
      }
    ]
  },
  {
    "id": "prophets",
    "emoji": "🕊️",
    "label": {
      "en": "Prophets",
      "bn": "নবীগণ",
      "zh": "先知",
      "ja": "預言者"
    },
    "words": [
      {
        "arabic": "آدَم",
        "translit": "Adam",
        "emoji": "🌍",
        "meaning": {
          "en": "Prophet Adam",
          "bn": "নবী আদম (আ.)",
          "zh": "先知阿丹（亚当）",
          "ja": "預言者アーダム"
        },
        "ref": "2:31",
        "hl": "ءَادَمَ"
      },
      {
        "arabic": "نُوح",
        "translit": "Nuh",
        "emoji": "⛵",
        "meaning": {
          "en": "Prophet Nuh (Noah)",
          "bn": "নবী নূহ (আ.)",
          "zh": "先知努哈（诺亚）",
          "ja": "預言者ヌーフ（ノア）"
        },
        "ref": "71:1",
        "hl": "نُوحًا"
      },
      {
        "arabic": "إِبْرَاهِيم",
        "translit": "Ibrahim",
        "emoji": "🕋",
        "meaning": {
          "en": "Prophet Ibrahim (Abraham)",
          "bn": "নবী ইব্রাহীম (আ.)",
          "zh": "先知易卜拉欣",
          "ja": "預言者イブラーヒーム"
        },
        "ref": "2:124",
        "hl": "إِبْرَٰهِۦمَ"
      },
      {
        "arabic": "مُوسَى",
        "translit": "Musa",
        "emoji": "🌊",
        "meaning": {
          "en": "Prophet Musa (Moses)",
          "bn": "নবী মূসা (আ.)",
          "zh": "先知穆萨（摩西）",
          "ja": "預言者ムーサー（モーセ）"
        },
        "ref": "2:51",
        "hl": "مُوسَىٰٓ"
      },
      {
        "arabic": "عِيسَى",
        "translit": "'Isa",
        "emoji": "✨",
        "meaning": {
          "en": "Prophet Isa (Jesus)",
          "bn": "নবী ঈসা (আ.)",
          "zh": "先知尔撒（耶稣）",
          "ja": "預言者イーサー（イエス）"
        },
        "ref": "3:45",
        "hl": "عِيسَى"
      },
      {
        "arabic": "مُحَمَّد",
        "translit": "Muhammad",
        "emoji": "🕌",
        "meaning": {
          "en": "Prophet Muhammad ﷺ",
          "bn": "নবী মুহাম্মাদ ﷺ",
          "zh": "先知穆罕默德 ﷺ",
          "ja": "預言者ムハンマド ﷺ"
        },
        "ref": "3:144",
        "hl": "مُحَمَّدٌ"
      }
    ]
  }
];

/**
 * Arabic numbers 1–10: Eastern-Arabic digit, numeric value, fully-voweled word, transliteration.
 */
const KIDS_NUMBERS = [
  { digit: '١',  value: 1,  word: 'وَاحِد',      translit: 'Wahid'      },
  { digit: '٢',  value: 2,  word: 'اِثْنَان',    translit: 'Ithnan'     },
  { digit: '٣',  value: 3,  word: 'ثَلَاثَة',    translit: 'Thalathah'  },
  { digit: '٤',  value: 4,  word: 'أَرْبَعَة',   translit: "Arba'ah"    },
  { digit: '٥',  value: 5,  word: 'خَمْسَة',     translit: 'Khamsah'    },
  { digit: '٦',  value: 6,  word: 'سِتَّة',      translit: 'Sittah'     },
  { digit: '٧',  value: 7,  word: 'سَبْعَة',     translit: "Sab'ah"     },
  { digit: '٨',  value: 8,  word: 'ثَمَانِيَة',  translit: 'Thamaniyah' },
  { digit: '٩',  value: 9,  word: 'تِسْعَة',     translit: "Tis'ah"     },
  { digit: '١٠', value: 10, word: 'عَشَرَة',     translit: "'Asharah"   }
];

/**
 * 12 short, authentic everyday duas for kids.
 * arabic: fully-voweled one-line dua, translit, meaning_en, when_en (the occasion),
 * src: source reference (Quran ayah or well-known sahih hadith collection + number).
 */
const KIDS_DUAS = [
  {
    arabic: 'بِسْمِ اللَّهِ',
    translit: 'Bismillah',
    meaning_en: 'In the name of Allah.',
    when_en: 'Before eating',
    src: 'Bukhari 5376'
  },
  {
    arabic: 'الْحَمْدُ لِلَّهِ',
    translit: 'Alhamdulillah',
    meaning_en: 'All praise is for Allah.',
    when_en: 'After eating',
    src: 'Muslim 2734'
  },
  {
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    translit: 'Bismika-llahumma amutu wa ahya',
    meaning_en: 'In Your name, O Allah, I die and I live.',
    when_en: 'Before sleeping',
    src: 'Bukhari 6324'
  },
  {
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا',
    translit: "Alhamdu lillahil-ladhi ahyana",
    meaning_en: 'All praise is for Allah who gave us life.',
    when_en: 'When waking up',
    src: 'Bukhari 6324'
  },
  {
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    translit: "Rabbi zidni 'ilma",
    meaning_en: 'My Lord, increase me in knowledge.',
    when_en: 'Before studying',
    src: 'Quran 20:114'
  },
  {
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
    translit: "Bismillahi tawakkaltu 'ala-llah",
    meaning_en: 'In the name of Allah, I place my trust in Allah.',
    when_en: 'When leaving home',
    src: 'Abu Dawud 5095'
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    translit: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith",
    meaning_en: 'O Allah, I seek Your protection from all evil and impure things.',
    when_en: 'Before entering the toilet',
    src: 'Bukhari 142, Muslim 375'
  },
  {
    arabic: 'غُفْرَانَكَ',
    translit: 'Ghufranak',
    meaning_en: 'I ask for Your forgiveness.',
    when_en: 'After leaving the toilet',
    src: 'Abu Dawud 30, Tirmidhi 7'
  },
  {
    arabic: 'الْحَمْدُ لِلَّهِ',
    translit: 'Alhamdulillah',
    meaning_en: 'All praise is for Allah.',
    when_en: 'After sneezing',
    src: 'Bukhari 6224'
  },
  {
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
    translit: 'Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin',
    meaning_en: 'Glory to Him who has placed this at our service; we could never have done it by ourselves.',
    when_en: 'When riding a car or bus',
    src: 'Quran 43:13'
  },
  {
    arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    translit: 'Rabbi-rhamhuma kama rabbayani saghira',
    meaning_en: 'My Lord, have mercy on my parents as they raised me when I was little.',
    when_en: 'Praying for parents',
    src: 'Quran 17:24'
  },
  {
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translit: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adhaban-nar",
    meaning_en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
    when_en: 'Any time — a complete dua',
    src: 'Quran 2:201'
  },
  {
    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
    translit: "Allahumma barik lana fima razaqtana wa qina 'adhaban-nar",
    meaning_en: 'O Allah, bless what You have provided for us and protect us from the punishment of the Fire.',
    when_en: 'A blessing du\'a at meals',
    src: 'Ahmad 17223'
  },
  {
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    translit: "Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni",
    meaning_en: 'O Allah, You are the Most Forgiving, You love forgiveness — so forgive me.',
    when_en: 'Night of Power (Laylatul Qadr) and any night',
    src: 'Tirmidhi 3513'
  },
  {
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي، يَفْقَهُوا قَوْلِي',
    translit: 'Rabbi-shrah li sadri, wa yassir li amri, wa-hlul \'uqdatan min lisani, yafqahu qawli',
    meaning_en: 'My Lord, expand my chest, ease my task, and remove the impediment from my speech so they may understand me.',
    when_en: 'Before speaking or presenting',
    src: 'Quran 20:25-28'
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
    translit: "Allahumma inni a'udhu bika minal-hammi wal-hazan",
    meaning_en: 'O Allah, I seek Your protection from anxiety and sadness.',
    when_en: 'When feeling worried',
    src: 'Bukhari 6369'
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',
    translit: "Allahumma inni as'aluka 'ilman nafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
    meaning_en: 'O Allah, I ask You for beneficial knowledge, pure sustenance, and accepted deeds.',
    when_en: 'After Fajr prayer',
    src: 'Ibn Majah 925'
  },
  {
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    translit: 'Hasbunallahu wa ni\'mal-wakil',
    meaning_en: 'Allah is sufficient for us, and He is the best Disposer of affairs.',
    when_en: 'When facing difficulty or opposition',
    src: 'Quran 3:173'
  },
  {
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَاسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا',
    translit: 'Allahumma Rabban-nas, adh-hibil-bas, ishfi anta-sh-Shafi, la shifa\'a illa shifa\'uk, shifa\'an la yughadiru saqama',
    meaning_en: 'O Allah, Lord of mankind, remove the harm and heal — You are the Healer. There is no cure except Your cure — a cure that leaves no illness behind.',
    when_en: 'Visiting the sick or when feeling ill',
    src: 'Bukhari 5675, Muslim 2191'
  },
  {
    arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ',
    translit: 'Allahumma-hdini fi man hadayt',
    meaning_en: 'O Allah, guide me among those You have guided.',
    when_en: 'Qunut in Witr and any time seeking guidance',
    src: 'Abu Dawud 1425, Tirmidhi 464'
  },
  {
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    translit: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yunin waj\'alna lil-muttaqina imama',
    meaning_en: 'Our Lord, grant us from our spouses and children comfort to our eyes, and make us leaders for the righteous.',
    when_en: 'Praying for family',
    src: 'Quran 25:74'
  }
];

/**
 * The 6 Kalimas — standard basic-aqeedah texts children memorize.
 * name_en: traditional name, arabic: fully-voweled text, translit, meaning_en,
 * src (optional): hadith reference where the wording itself is hadith-attested.
 * Bengali names/meanings live in KIDS_KALIMA_L10N (js/learn-kids.js).
 */
const KIDS_KALIMAS = [
  {
    name_en: '1st Kalima — Tayyibah (Purity)',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    translit: 'La ilaha illallahu Muhammadur-rasulullah',
    meaning_en: 'There is no god but Allah; Muhammad is the Messenger of Allah.'
  },
  {
    name_en: '2nd Kalima — Shahadat (Testimony)',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    translit: "Ash-hadu an la ilaha illallahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluh",
    meaning_en: 'I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and His Messenger.'
  },
  {
    name_en: '3rd Kalima — Tamjeed (Glorification)',
    arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    translit: "Subhanallahi wal-hamdu lillahi wa la ilaha illallahu wallahu akbar, wa la hawla wa la quwwata illa billahil-'aliyyil-'azim",
    meaning_en: 'Glory be to Allah, all praise is for Allah, there is no god but Allah, and Allah is the Greatest. There is no power and no strength except with Allah, the Most High, the Most Great.'
  },
  {
    name_en: '4th Kalima — Tawheed (Oneness)',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translit: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir",
    meaning_en: 'There is no god but Allah, alone, without partner. His is the kingdom and His is all praise, and He has power over everything.',
    src: 'Bukhari 6404'
  },
  {
    name_en: '5th Kalima — Astaghfar (Seeking Forgiveness)',
    arabic: 'أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمَدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
    translit: "Astaghfirullaha rabbi min kulli dhambin adhnabtuhu 'amadan aw khata'an sirran aw 'alaniyah, wa atubu ilayhi minadh-dhambil-ladhi a'lamu wa minadh-dhambil-ladhi la a'lam, innaka anta 'allamul-ghuyubi wa sattarul-'uyubi wa ghaffarudh-dhunub, wa la hawla wa la quwwata illa billahil-'aliyyil-'azim",
    meaning_en: 'I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or by mistake, secretly or openly, and I turn to Him from the sin I know and the sin I do not know. Surely You are the Knower of the hidden, the Concealer of faults and the Forgiver of sins, and there is no power and no strength except with Allah, the Most High, the Most Great.'
  },
  {
    name_en: '6th Kalima — Radd-e-Kufr (Rejecting Disbelief)',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا وَأَسْلَمْتُ وَأَقُولُ لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    translit: "Allahumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lamu bih, wa astaghfiruka lima la a'lamu bih, tubtu 'anhu wa tabarra'tu minal-kufri wash-shirki wal-kidhbi wal-ghibati wal-bid'ati wan-namimati wal-fawahishi wal-buhtani wal-ma'asi kulliha, wa aslamtu wa aqulu la ilaha illallahu Muhammadur-rasulullah",
    meaning_en: 'O Allah, I seek refuge in You from knowingly associating anything with You, and I ask Your forgiveness for what I do not know. I repent from it and free myself from disbelief, from associating partners with Allah, from lying, backbiting, innovation, tale-carrying, shameful deeds, false accusation and all sins. I submit, and I say: there is no god but Allah; Muhammad is the Messenger of Allah.'
  }
];

/**
 * Short surahs offered for guided reading. Text + per-word audio pulled at runtime
 * via QuranData.fetchRange(). n: surah number, versesTo: ayah count.
 */
const KIDS_SURAHS = [
  { n: 1,   versesTo: 7 },
  { n: 103, versesTo: 3 },
  { n: 108, versesTo: 3 },
  { n: 110, versesTo: 3 },
  { n: 112, versesTo: 4 },
  { n: 113, versesTo: 5 },
  { n: 114, versesTo: 6 },
  { n: 107, versesTo: 7 },
  { n: 105, versesTo: 5 },
  { n: 106, versesTo: 4 },
  { n: 109, versesTo: 6 },
  { n: 111, versesTo: 5 }
];

/**
 * Prophet and companion stories for children — bilingual en+bn.
 * Each entry: id, title {en,bn}, summary {en,bn}, moral {en,bn},
 *             refs (array of "Surah:Verse" strings).
 * Sources: Sahih Bukhari, Sahih Muslim, Ibn Kathir Stories of the Prophets.
 */
const KIDS_STORIES = [
  {
    id: 'elephant-army',
    title:   { en: 'The Elephant Army (Surah al-Fil)', bn: 'হাতির বাহিনী (সূরা ফীল)' },
    summary: {
      en: "Long ago, an arrogant king named Abraha built a grand temple in Yemen and wanted everyone to stop visiting the Kaaba in Makkah. He marched toward Makkah with a mighty army, leading a huge elephant named Mahmud. The people of Makkah were terrified. But Allah sent tiny birds — called Ababeel — carrying small stones of baked clay. The birds rained stones down on the army, and every struck soldier fell dead like eaten-up straw. The elephant refused to march toward Makkah. Allah protected His House without any human army. This miracle happened in the very year the Prophet Muhammad \u{FDFA} was born — called the Year of the Elephant.",
      bn: "অনেক আগে আব্রাহা নামের এক অহংকারী রাজা ইয়েমেনে বিশাল মন্দির বানান এবং কাবার যিয়ারত বন্ধ করতে চাইলেন। তিনি 'মাহমুদ' নামের হাতি নিয়ে মক্কার দিকে এগিয়ে এলেন। মক্কার লোকেরা ভয় পেল। তখন আল্লাহ আবাবিল পাখি পাঠালেন — যারা ঠোঁটে পোড়া মাটির পাথর বহন করছিল। পাখিগুলো সৈন্যদের উপর পাথর ছুঁড়ল, প্রতিটি সৈন্য ছিন্নভিন্ন হলো। হাতি মক্কার দিকে এগোতে রাজি হলো না। আল্লাহ কোনো মানব-বাহিনী ছাড়াই তাঁর ঘর রক্ষা করলেন। এই অলৌকিক ঘটনা ঘটেছিল যে বছর নবী \u{FDFA} জন্মেছিলেন — সেটিকেই হাতির বছর বলা হয়।"
    },
    moral: {
      en: "Allah alone protects what He loves. No army — however large — can harm those under Allah's care.",
      bn: "আল্লাহই একমাত্র তাঁর প্রিয় জিনিস রক্ষা করেন। যতই বড় বাহিনী হোক, আল্লাহর হেফাজতে থাকা কারো ক্ষতি করতে পারে না।"
    },
    refs: ['105:1-5']
  },
  {
    id: 'baby-ibrahim-cave',
    title:   { en: 'Baby Ibrahim in the Cave', bn: 'শিশু ইব্রাহীম গুহায়' },
    summary: {
      en: "When Prophet Ibrahim was born, the tyrant king Nimrod had ordered every baby boy killed, fearing a prophet would end his rule. Ibrahim's mother hid him in a small cave outside town. Inside the dark cave, the tiny baby was alone — yet Allah was with him. Ibrahim grew healthy by Allah's miracle. When he emerged, he looked at the stars, the moon, and the sun, searching for the One True God. He realised they all set and disappeared, so none could be Allah. With a clear heart he declared: 'I have turned my face to the Creator of the heavens and the earth.' Allah had guided and protected him from birth.",
      bn: "নবী ইব্রাহীম আলাইহিস সালাম যখন জন্মালেন, জালিম রাজা নমরূদ প্রতিটি পুত্রশিশু হত্যার আদেশ দিয়েছিল। ইব্রাহীমের মা তাঁকে একটি ছোট্ট গুহায় লুকিয়ে রাখলেন। অন্ধকার গুহায় শিশু একা — কিন্তু আল্লাহ তার সাথে ছিলেন। আল্লাহর মুজিযায় তিনি সুস্থ-সবল বড় হলেন। গুহা থেকে বের হয়ে তারা, চাঁদ ও সূর্য দেখলেন — সত্যিকারের স্রষ্টাকে খুঁজছিলেন। সব কিছু অস্ত যায় দেখে বললেন: 'আমি মুখ ফেরালাম সেই সত্তার দিকে যিনি আকাশ ও পৃথিবী সৃষ্টি করেছেন।' আল্লাহ জন্ম থেকেই তাঁকে হেদায়েত ও রক্ষা করেছিলেন।"
    },
    moral: {
      en: "Allah is always with those who seek Him sincerely. He protects His beloved ones even in the darkest places.",
      bn: "যে আল্লাহকে সততার সাথে খোঁজে, আল্লাহ সবসময় তার সাথে থাকেন। সবচেয়ে অন্ধকার জায়গায়ও তাঁর প্রিয়জনদের রক্ষা করেন।"
    },
    refs: ['6:76-79']
  },
  {
    id: 'sick-jewish-boy',
    title:   { en: "The Prophet's Visit to a Sick Boy", bn: 'নবীজির একটি অসুস্থ ছেলেকে দেখতে যাওয়া' },
    summary: {
      en: "A young Jewish boy used to serve the Prophet Muhammad \u{FDFA}, running errands and helping around. The boy fell very ill, and the Prophet \u{FDFA} went to visit him — because he cared about every person, not just Muslims. He sat near the bed and spoke gently. Then he invited the boy to accept Islam. The boy looked at his father, who said, 'Obey Abu al-Qasim.' The boy declared: 'I bear witness that there is no god but Allah and that you are His Messenger.' His face lit up with happiness. When the Prophet \u{FDFA} left, he said: 'All praise is for Allah, who saved this boy from the Fire.' The Prophet taught us to be kind to everyone, regardless of faith.",
      bn: "একটি ইহুদি বালক নবী \u{FDFA}-এর সেবা করত। ছেলেটি একবার খুব অসুস্থ হয়ে পড়ল। নবী \u{FDFA} তাকে দেখতে গেলেন — কারণ তিনি শুধু মুসলিমদের নয়, সকলের যত্ন নিতেন। বিছানার পাশে বসে মৃদুকণ্ঠে কথা বললেন, তারপর তাকে ইসলামের দিকে আহ্বান করলেন। ছেলেটি বাবার দিকে তাকাল। বাবা বললেন: 'আবুল কাসিমের কথা মানো।' ছেলেটি বলল: 'আমি সাক্ষ্য দিচ্ছি আল্লাহ ছাড়া কোনো উপাস্য নেই এবং আপনি তাঁর রাসূল।' তার মুখ আনন্দে উজ্জ্বল হয়ে উঠল। নবী \u{FDFA} বললেন: 'সমস্ত প্রশংসা আল্লাহর, যিনি এই ছেলেকে জাহান্নাম থেকে বাঁচালেন।' নবী \u{FDFA} আমাদের শিখিয়েছেন ধর্ম নির্বিশেষে সবার প্রতি সদয় হতে।"
    },
    moral: {
      en: "Be kind to everyone. A gentle visit and a caring word can change a life forever.",
      bn: "সবার প্রতি সদয় হও। একটি ছোট্ট সফর আর উষ্ণ কথা কারো জীবন চিরকালের জন্য বদলে দিতে পারে।"
    },
    refs: ['17:70'],
    src: 'Bukhari 1356'
  },
  {
    id: 'bilal-first-adhan',
    title:   { en: "Bilal's First Adhan", bn: 'বিলালের প্রথম আজান' },
    summary: {
      en: "Before the adhan, there was no way to call people to prayer at the right time. Allah revealed the call to prayer in a dream. The Prophet \u{FDFA} chose Bilal ibn Rabah — a freed slave with a beautiful, powerful voice — as the first muezzin in Islam. Bilal climbed onto the roof of the mosque in Madinah, turned toward the qibla, and called out in a ringing voice: 'Allahu Akbar! Allahu Akbar!' His voice soared above the houses. People stopped and hurried to the mosque. Tears of joy ran down the Companions' faces. The same Bilal who had been tortured for believing in Allah was now calling the whole city to worship. That is the power of faith and patience.",
      bn: "আজানের আগে নির্দিষ্ট সময়ে মানুষকে নামাজে ডাকার উপায় ছিল না। স্বপ্নে আল্লাহ আজান জানালেন। নবী \u{FDFA} বিলাল ইবনে রাবাহকে বেছে নিলেন — একজন মুক্তিপ্রাপ্ত ক্রীতদাস, যার কণ্ঠ ছিল সুন্দর ও শক্তিশালী — ইসলামের প্রথম মুয়াজ্জিন হিসেবে। বিলাল মদিনার মসজিদের ছাদে উঠলেন, কিবলার দিকে মুখ করে ডাক দিলেন: 'আল্লাহু আকবার! আল্লাহু আকবার!' কণ্ঠস্বর শহরের উপর দিয়ে ছড়িয়ে গেল। মানুষেরা কাজ থামিয়ে মসজিদে ছুটল। সাহাবারা আনন্দে কাঁদলেন। যে বিলাল এক সময় ঈমানের জন্য নির্যাতিত হয়েছিলেন, তিনিই এখন পুরো শহরকে আল্লাহর ইবাদতে ডাকছেন।"
    },
    moral: {
      en: "Patience through hardship leads to great honour. Never give up on your faith.",
      bn: "কষ্টে ধৈর্য ধরলে বড় সম্মান আসে। যতই কঠিন হোক, ঈমান ছেড়ো না।"
    },
    refs: ['2:238']
  },
  {
    id: 'anas-serving-prophet',
    title:   { en: 'Anas ibn Malik: Ten Years of Loving Service', bn: 'আনাস ইবনে মালিক: দশ বছরের সেবা' },
    summary: {
      en: "When Anas ibn Malik was about ten years old, his mother brought him to the Prophet \u{FDFA} and said: 'Every man and woman has brought you a gift. I have only my son — please let him serve you.' Anas served the Prophet \u{FDFA} for ten full years in Madinah. In all those years, the Prophet \u{FDFA} never once said 'uff' to Anas, never scolded him, and never asked 'Why did you do that?' or 'Why did you not do it?' Anas later said: 'I served the best person who ever walked the earth, and he was the kindest master I could imagine.' The Prophet \u{FDFA} made du'a for Anas, asking Allah to bless him with wealth, children, and a long life — and all of it was answered.",
      bn: "আনাস ইবনে মালিক যখন প্রায় দশ বছর বয়সী, তখন তার মা তাকে নবী \u{FDFA}-এর কাছে নিয়ে বললেন: 'সবাই আপনার জন্য উপহার এনেছেন। আমার কাছে শুধু আমার ছেলে আছে — দয়া করে তাকে সেবায় নিন।' আনাস মদিনায় নবী \u{FDFA}-এর সেবা করলেন পুরো দশ বছর। সেই দশ বছরে নবী \u{FDFA} কখনও 'উফ' বলেননি, কখনও বকাঝকা করেননি। আনাস পরে বলেছিলেন: 'আমি পৃথিবীর সর্বশ্রেষ্ঠ মানুষের সেবা করেছি, আর তিনি ছিলেন সবচেয়ে সদয় মালিক।' নবী \u{FDFA} আনাসের জন্য দোয়া করেছিলেন — সম্পদ, সন্তান ও দীর্ঘ জীবনের জন্য — সবকিছুই কবুল হয়েছিল।"
    },
    moral: {
      en: "The best people are the kindest to those who serve them. Treat everyone with patience and love.",
      bn: "সর্বোত্তম মানুষ তারাই, যারা তাদের সেবকদের সাথে সবচেয়ে সদয়। সবার সাথে ধৈর্য ও ভালোবাসায় আচরণ করো।"
    },
    refs: ['33:21'],
    src: 'Bukhari 2768, Muslim 2309'
  },
  {
    id: 'talking-wolf',
    title:   { en: 'The Wolf Who Spoke to a Shepherd', bn: 'যে নেকড়ে রাখালকে কথা বলেছিল' },
    summary: {
      en: "One day a wolf attacked a shepherd's flock and took one of his sheep. The shepherd chased it and snatched the sheep back. Then something extraordinary happened — the wolf turned and spoke in a clear human voice: 'You have taken the prey I worked hard to get. Who will guard your flock on the day of the fierce beasts — when there is no shepherd but me?' The terrified shepherd ran to the Prophet \u{FDFA} and told him what had happened. The Prophet \u{FDFA} said to those around him: 'This is a sign of the approaching Hour. Believe what the wolf said — a day is coming when only Allah will protect you.' The Companions were amazed, and their faith grew even stronger.",
      bn: "একদিন একটি নেকড়ে রাখালের পালের একটি ভেড়া নিয়ে গেল। রাখাল ছুটে গিয়ে ভেড়াটি ফিরিয়ে নিল। তখন অবাক ব্যাপার ঘটল — নেকড়েটি মানুষের মতো স্পষ্ট ভাষায় বলল: 'তুমি আমার পরিশ্রমের শিকার কেড়ে নিলে। হিংস্র পশুদের দিনে তোমার পাল কে রক্ষা করবে?' ভয় পাওয়া রাখাল নবী \u{FDFA}-এর কাছে দৌড়ে সব বলল। নবী \u{FDFA} বললেন: 'এটা কিয়ামতের একটি আলামত। নেকড়ে যা বলেছে বিশ্বাস করো — এমন একটি দিন আসবে যেদিন শুধু আল্লাহই তোমাদের রক্ষা করবেন।' সাহাবারা অবাক হলেন এবং তাদের ঈমান আরও শক্তিশালী হলো।"
    },
    moral: {
      en: "Signs of truth come from unexpected places. Keep your faith strong and prepare for the meeting with Allah.",
      bn: "সত্যের নিদর্শন অপ্রত্যাশিত জায়গা থেকে আসতে পারে। ঈমান শক্ত রাখো এবং আল্লাহর সাথে সাক্ষাতের জন্য প্রস্তুত থাকো।"
    },
    refs: ['21:107'],
    src: 'Muslim 2388'
  },
  {
    id: 'abu-umayr-bird',
    title:   { en: "Abu Umayr and His Little Bird", bn: 'আবু উমায়ের ও তার ছোট পাখি' },
    summary: {
      en: "Among the companions of the Prophet \u{FDFA} was a family with a small boy named Abu Umayr. He had a tiny pet bird — called a nuqayr, a kind of sparrow — that he loved dearly and played with every day. Whenever the Prophet \u{FDFA} visited their home, he would greet little Abu Umayr with a gentle smile and ask playfully: 'O Abu Umayr — what happened to the nuqayr?' One day the little bird passed away, and Abu Umayr was heartbroken. The Prophet \u{FDFA} still asked his gentle question to cheer the sad boy up, showing that even the small grief of a child matters in Islam. The Prophet \u{FDFA} was not just a great leader — he was warm, playful, and deeply caring to every child.",
      bn: "নবী \u{FDFA}-এর সাহাবাদের মধ্যে আবু উমায়ের নামের একটি ছোট্ট ছেলে ছিল। তার একটি পোষা ছোট পাখি ছিল — আরবিতে নুকায়ের বলে — যাকে সে প্রতিদিন খেলত ও ভীষণ ভালোবাসত। নবী \u{FDFA} যখনই তাদের বাড়িতে আসতেন, হাসিমুখে জিজ্ঞেস করতেন: 'হে আবু উমায়ের — নুকায়েরের কী হলো?' একদিন পাখিটি মারা গেল, আর আবু উমায়েরের মন ভেঙে গেল। নবী \u{FDFA} তবুও মিষ্টি স্বরে প্রশ্ন করতেন দুঃখী ছেলেকে খুশি করতে। নবী \u{FDFA} শুধু মহান নেতা ছিলেন না — প্রতিটি শিশুর সুখ-দুঃখকে মূল্য দিতেন।"
    },
    moral: {
      en: "No feeling is too small to matter. The Prophet \u{FDFA} noticed and cared for every child's joy and sadness.",
      bn: "কোনো অনুভূতি এত ছোট নয় যে সেটা গুরুত্বহীন। নবী \u{FDFA} প্রতিটি শিশুর সুখ-দুঃখকে গুরুত্ব দিতেন।"
    },
    refs: ['21:107'],
    src: 'Abu Dawud 4969'
  },
  {
    id: 'hasan-husayn-sujud',
    title:   { en: "Hasan and Husayn on the Prophet's Back", bn: 'হাসান-হুসাইন নবীজির পিঠে' },
    summary: {
      en: "The Prophet \u{FDFA} loved his grandchildren Hasan and Husayn with all his heart. One day, while he was leading the prayer and had gone into sujud (prostration), little Hasan or Husayn climbed onto his blessed back. The Prophet \u{FDFA} stayed in sujud longer than usual — so long that the Companions thought something was wrong. When prayer finished, they asked why the sujud was so long. The Prophet \u{FDFA} smiled and said: 'My grandson was riding on my back, and I did not want to rush him.' He also said: 'Hasan and Husayn are the masters of the youth of Paradise.' Showing love to children — even during worship — is a sign of a good heart.",
      bn: "নবী \u{FDFA} তাঁর নাতি হাসান ও হুসাইনকে অন্তর দিয়ে ভালোবাসতেন। একদিন নামাজ পড়াচ্ছিলেন, সেজদায় গেলেন। ছোট্ট হাসান বা হুসাইন তাঁর পিঠে চড়ে বসলেন। নবী \u{FDFA} অনেকক্ষণ সেজদায় থাকলেন — এত দীর্ঘ যে সাহাবারা ভাবলেন কিছু হয়েছে। নামাজ শেষে জিজ্ঞেস করলেন। নবী \u{FDFA} হেসে বললেন: 'আমার নাতি পিঠে চড়ে ছিল, তাড়াহুড়া করতে চাইনি।' তিনি আরও বললেন: 'হাসান ও হুসাইন জান্নাতের যুবকদের সরদার।' শিশুদের ভালোবাসা — এমনকি ইবাদতের সময়ও — ভালো হৃদয়ের নিদর্শন।"
    },
    moral: {
      en: "Be gentle and patient with children. Love for family is part of true worship.",
      bn: "শিশুদের সাথে কোমল ও ধৈর্যশীল হও। পরিবারের প্রতি ভালোবাসা প্রকৃত ইবাদতেরই অংশ।"
    },
    refs: ['21:107'],
    src: "Nasa'i 1141"
  },
  {
    id: 'umm-sulaym-patience',
    title:   { en: "Umm Sulaym's Beautiful Patience", bn: 'উম্মু সুলাইমের সুন্দর ধৈর্য' },
    summary: {
      en: "Umm Sulaym was a wise and faithful woman among the Companions. One day her young son passed away while her husband Abu Talha was out. She calmly waited for him to return. When Abu Talha came home tired, she served him dinner, then asked gently: 'If someone lent you something precious and asked for it back, would you be sad to return it?' He said: 'Of course not — I would return it willingly.' She said quietly: 'Then know that Allah lent us our son, and tonight He asked for him back.' Abu Talha was overcome with sadness, but both turned to Allah in patience. The Prophet \u{FDFA} later prayed for them, and Allah blessed Umm Sulaym with another son who became a great scholar.",
      bn: "উম্মু সুলাইম ছিলেন সাহাবীদের মধ্যে একজন বিজ্ঞ ও ঈমানদার নারী। একদিন তার ছোট ছেলে মারা গেল, স্বামী আবু তালহা বাড়িতে ছিলেন না। তিনি শান্তভাবে অপেক্ষা করলেন। আবু তালহা ফিরলে রাতের খাবার দিলেন, তারপর মৃদুকণ্ঠে বললেন: 'যদি কেউ মূল্যবান জিনিস ধার দিয়ে ফেরত চায় — দিতে দুঃখ পাবেন?' তিনি বললেন: 'না।' তখন উম্মু সুলাইম বললেন: 'আল্লাহ আমাদের ছেলেকে ধার দিয়েছিলেন, আজ রাতে ফেরত নিয়েছেন।' আবু তালহা ভীষণ দুঃখ পেলেন, কিন্তু দুজনেই ধৈর্যের সাথে আল্লাহর দিকে ফিরলেন। নবী \u{FDFA} তাদের জন্য দোয়া করলেন এবং আল্লাহ উম্মু সুলাইমকে আরেকটি পুত্র দিলেন।"
    },
    moral: {
      en: "Everything we have belongs to Allah. Returning what He lends us — with patience and trust — brings His greater blessings.",
      bn: "আমাদের যা আছে সব আল্লাহর। তাঁর দেওয়া জিনিস ধৈর্য ও বিশ্বাসের সাথে ফিরিয়ে দিলে আরও বড় নেয়ামত আসে।"
    },
    refs: ['2:156', '39:10'],
    src: 'Muslim 2144'
  },
  {
    id: 'three-men-cave',
    title:   { en: 'Three Men Trapped in a Cave', bn: 'তিন ব্যক্তি গুহায় আটকা' },
    summary: {
      en: "Three men were traveling in the mountains when a huge boulder rolled down and sealed the entrance to their cave. They were trapped with no way out. They decided to pray to Allah by mentioning the best deeds they had each done. The first said: 'O Allah, I always honoured my parents before my own family.' The boulder moved a little. The second said: 'O Allah, I loved someone, but when she asked me to stay away for Allah's sake, I obeyed.' The boulder moved more. The third said: 'O Allah, I paid my workers honestly and kept nothing that was not mine.' The boulder rolled away completely and they walked free. Allah answered them through their sincere good deeds.",
      bn: "তিন ব্যক্তি পাহাড়ে ভ্রমণ করছিল। বিশ্রামের জন্য গুহায় ঢুকলে বিশাল পাথর গড়িয়ে দরজা বন্ধ করে দিল। তারা সিদ্ধান্ত নিল জীবনের সেরা আমলের কথা স্মরণ করিয়ে আল্লাহর কাছে দোয়া করবে। প্রথম বলল: 'হে আল্লাহ! পরিবারের আগে বাবা-মায়ের খেদমত করতাম।' পাথর একটু সরল। দ্বিতীয় বলল: 'হে আল্লাহ! কাউকে ভালোবাসতাম, কিন্তু সে আল্লাহর ওয়াস্তে কাছে না আসতে বললে মেনে নিয়েছিলাম।' পাথর আরও সরল। তৃতীয় বলল: 'হে আল্লাহ! শ্রমিকদের সঠিক মজুরি দিতাম, একটি পয়সাও আত্মসাৎ করিনি।' পাথর পুরো সরে গেল, তারা মুক্ত হলো। আল্লাহ তাদের আন্তরিক ভালো আমলের মাধ্যমে সাড়া দিলেন।"
    },
    moral: {
      en: "Sincerely good deeds — kindness to parents, purity, and honesty — become your lifeline in the darkest moments.",
      bn: "সৎ ভালো আমল — বাবা-মায়ের সাথে সদয়তা, পবিত্রতা ও সততা — অন্ধকারতম মুহূর্তে তোমার জীবন রক্ষাকারী হয়ে ওঠে।"
    },
    refs: ['29:69'],
    src: 'Bukhari 2272, Muslim 2743'
  },
  {
    id: 'uways-mother',
    title:   { en: 'The Youth Who Carried His Mother to Hajj', bn: 'যে যুবক মাকে কাঁধে নিয়ে হজে গেল' },
    summary: {
      en: "A man from Yemen came to Makkah to perform Hajj carrying his elderly, frail mother on his back the entire journey — because she could not walk. He walked the whole pilgrimage route step by step, never complaining. After completing Hajj, he asked the Prophet's companion Ibn Umar: 'I carried my mother on my back for the whole journey. Have I repaid her debt to me?' Ibn Umar replied: 'You have not repaid even a single contraction of her labour pains when she gave birth to you.' The man was humbled. He understood that a mother's sacrifice can never be fully repaid. But Allah sees every act of love and devotion — nothing, not even a drop of sweat, goes unrewarded with Him.",
      bn: "ইয়েমেন থেকে এক ব্যক্তি হজে এলেন তাঁর বৃদ্ধ, দুর্বল মাকে পুরো পথ কাঁধে বহন করে। কোনো অভিযোগ না করে পুরো হজ পার করলেন। হজ শেষে সাহাবি ইবনে উমারকে জিজ্ঞেস করলেন: 'মায়ের ঋণ কি শোধ করতে পারলাম?' ইবনে উমার বললেন: 'তুমি জন্মের সময় মায়ের একটি প্রসব-ব্যথার ঋণও শোধ করতে পারোনি।' ব্যক্তিটি বিনম্র হলো। সে বুঝল কোনো আমলেই মায়ের ত্যাগ পরিশোধ হয় না। কিন্তু আল্লাহ প্রতিটি ভালোবাসার কাজ দেখেন — একটি ঘামের ফোঁটাও বৃথা যায় না।"
    },
    moral: {
      en: "Your parents' love can never be fully repaid — but every act of kindness toward them is precious in Allah's sight.",
      bn: "বাবা-মায়ের ভালোবাসা কখনো পুরোপুরি শোধ করা যায় না — কিন্তু তাদের প্রতি প্রতিটি সদয় কাজ আল্লাহর কাছে মূল্যবান।"
    },
    refs: ['17:23-24', '31:14']
  },
  {
    id: 'ant-sulayman',
    title:   { en: 'The Ant Who Warned Her Friends', bn: 'যে পিঁপড়া বন্ধুদের সতর্ক করেছিল' },
    summary: {
      en: "Prophet Sulayman was given by Allah the ability to understand the language of all animals and insects. One day he was marching with his great army — soldiers, jinn, birds and beasts — through a valley. As they approached the Valley of the Ants, a small ant noticed the army and called out: 'O ants! Enter your homes quickly, so that Sulayman and his army do not crush you without even knowing it!' The ant was worried about her community, not about herself. Prophet Sulayman heard her voice, smiled, and immediately stopped his army. He raised his hands to Allah and prayed: 'My Lord, grant me the ability to be grateful for Your blessings and to do righteous deeds that please You.' A mighty king — yet humble and grateful.",
      bn: "নবী সুলাইমান আলাইহিস সালামকে আল্লাহ সকল প্রাণী ও পোকামাকড়ের ভাষা বুঝার ক্ষমতা দিয়েছিলেন। একদিন তিনি বিশাল বাহিনী নিয়ে — সৈনিক, জিন, পাখি ও পশু — একটি উপত্যকা দিয়ে যাচ্ছিলেন। পিঁপড়াদের উপত্যকার কাছে পৌঁছাতেই একটি ছোট্ট পিঁপড়া সাথীদের ডেকে বলল: 'হে পিঁপড়ারা! দ্রুত বাড়িতে ঢুকে পড়ো, না হলে সুলাইমান ও তাঁর বাহিনী না জেনেই পিষে ফেলবে!' পিঁপড়াটি নিজের কথা না ভেবে সম্প্রদায়ের কথা ভেবেছিল। নবী সুলাইমান তার কণ্ঠ শুনলেন, হাসলেন এবং সেনাবাহিনী থামালেন। আল্লাহর কাছে দোয়া করলেন: 'হে রব, আমাকে নেয়ামতের শুকরিয়া ও সৎকর্মের তৌফিক দাও।' মহাপরাক্রমী রাজা — তবুও বিনম্র ও কৃতজ্ঞ।"
    },
    moral: {
      en: "Even the smallest creature matters to Allah. Look out for others, and always be grateful — no matter how great you become.",
      bn: "আল্লাহর কাছে সবচেয়ে ছোট প্রাণীটিও গুরুত্বপূর্ণ। অন্যদের দিকে খেয়াল রাখো, এবং যতই বড় হও — সবসময় কৃতজ্ঞ থেকো।"
    },
    refs: ['27:18-19']
  },
  {
    id: 'yunus-whale',
    title:   { en: 'Yunus in the Belly of the Whale', bn: 'ইউনুস মাছের পেটে' },
    summary: {
      en: "Prophet Yunus was sent to a city to call people to Allah, but when many refused to listen, he grew frustrated and left without Allah's permission. He boarded a ship, and in the middle of the sea a great storm arose. The sailors drew lots to decide who should be thrown overboard — and the lot fell on Yunus. A great whale swallowed him whole. Deep inside the whale, inside the sea, inside the darkness of the night, Yunus called out: 'La ilaha illa Anta, Subhanaka, inni kuntu mina-dh-dhalimin!' — 'There is no god but You; glory be to You; I was among the wrongdoers.' Allah heard his prayer immediately. The whale released him onto the shore, he recovered, and his entire city believed.",
      bn: "নবী ইউনুস আলাইহিস সালামকে একটি শহরে পাঠানো হয়েছিল। অনেকে সাড়া না দেওয়ায় তিনি আল্লাহর অনুমতি ছাড়াই চলে গেলেন। জাহাজে চড়লেন, মাঝসমুদ্রে ঝড় উঠল। লট করে সিদ্ধান্ত নেওয়া হলো কাকে সমুদ্রে ফেলা হবে — লট পড়ল ইউনুসের নামে। একটি বিশাল মাছ তাঁকে গিলে নিল। মাছের পেটের ভেতরে, সমুদ্রের গভীরে, রাতের অন্ধকারে ইউনুস ডাক দিলেন: 'লা ইলাহা ইল্লা আন্তা সুবহানাকা ইন্নি কুন্তু মিনাজ-জালিমিন!' আল্লাহ সাথেসাথে কবুল করলেন। মাছকে নির্দেশ দেওয়া হলো তাঁকে তীরে রেখে আসতে। ইউনুস সুস্থ হলেন, তাঁর জাতি সবাই ঈমান আনল।"
    },
    moral: {
      en: "No matter how deep the darkness, one sincere call to Allah is enough. Never despair of Allah's mercy.",
      bn: "অন্ধকার যতই গভীর হোক, আল্লাহর কাছে একটি আন্তরিক ডাকই যথেষ্ট। কখনো আল্লাহর রহমত থেকে নিরাশ হয়ো না।"
    },
    refs: ['21:87-88', '37:139-148']
  },
  {
    id: 'ibrahim-fire',
    title:   { en: 'Ibrahim and the Fire That Could Not Burn', bn: 'ইব্রাহীম ও আগুন যা পোড়াতে পারেনি' },
    summary: {
      en: "Prophet Ibrahim grew up surrounded by stone idols. He knew in his heart they were just rocks and could help no one. One night he broke all the idols in the temple except the largest, and placed his axe on it. When the people accused him, he cleverly said: 'Ask the big idol — it has my axe!' They said: 'You know it cannot speak!' He replied: 'Then why do you worship things that cannot speak, hear, or help you?' Furious, the king Nimrod ordered a fire so enormous that birds flying above it were scorched. Ibrahim was thrown into the fire. But Allah commanded: 'O fire, be cool and safe for Ibrahim!' The fire did not burn him at all. He walked out completely unharmed, glorifying Allah.",
      bn: "নবী ইব্রাহীম পাথরের মূর্তি-পূজার মাঝে বড় হয়েছিলেন। তিনি জানতেন এগুলো কাউকে সাহায্য করতে পারে না। একরাতে মন্দিরের সব মূর্তি ভেঙে দিলেন সবচেয়ে বড়টি ছাড়া। মানুষেরা অভিযুক্ত করলে বললেন: 'বড় মূর্তিটিকেই জিজ্ঞেস করো!' তারা বলল: 'এটা কথা বলতে পারে না।' তিনি বললেন: 'তাহলে কথা বলতে-শুনতে-সাহায্য করতে পারে না এমন জিনিসকে কেন পূজা করছো?' রাজা নমরূদ বিশাল আগুন জ্বালাল। ইব্রাহীমকে ছুঁড়ে দেওয়া হলো। কিন্তু আল্লাহ বললেন: 'হে আগুন! ইব্রাহীমের জন্য ঠান্ডা ও নিরাপদ হও!' আগুন তাঁকে একটুও পোড়াতে পারল না। তিনি অক্ষতভাবে বেরিয়ে আল্লাহর প্রশংসা করলেন।"
    },
    moral: {
      en: "When you stand firm for the truth and trust Allah completely, even fire cannot touch you.",
      bn: "সত্যের উপর অটল থেকে আল্লাহর উপর পুরোপুরি ভরসা করলে আগুনও স্পর্শ করতে পারে না।"
    },
    refs: ['21:68-69']
  },
  {
    id: 'ashabul-kahf',
    title:   { en: 'The Sleepers of the Cave (Ashab al-Kahf)', bn: 'গুহার ঘুমন্ত বন্ধুরা (আসহাবে কাহফ)' },
    summary: {
      en: "Long ago, a group of faithful young men lived in a city where a cruel king forced everyone to worship false gods. They refused. They fled into the mountains and found a cave to hide in. They prayed: 'Our Lord, grant us Your mercy and guide us to what is right.' Allah caused them to fall into a deep miraculous sleep. When they woke up, they thought they had slept for just one afternoon — but Allah had kept them asleep for three hundred and nine years! The city had completely changed; the evil king was long gone, and the people now believed in Allah. Their dog had slept faithfully at the entrance all along. Faith in Allah is more powerful than any tyrant.",
      bn: "অনেক আগে এক শহরে কিছু বিশ্বাসী তরুণ বাস করত। জালিম রাজা সবাইকে মিথ্যা দেবতাদের পূজা করতে বাধ্য করত। তারা রাজি হলো না। পাহাড়ে পালিয়ে একটি গুহায় আশ্রয় নিল। দোয়া করল: 'হে আমাদের রব, আমাদের রহমত দাও এবং সঠিক পথে নিয়ে যাও।' আল্লাহ তাদের এক অলৌকিক গভীর ঘুমে ঘুম পাড়িয়ে দিলেন। জেগে উঠে ভাবল মাত্র এক বিকেল ঘুমিয়েছে — কিন্তু আল্লাহ তিনশো নয় বছর ঘুম পাড়িয়ে রেখেছিলেন! শহর সম্পূর্ণ বদলে গেছে; জালিম রাজা অনেক আগেই মারা গেছে, মানুষেরা এখন আল্লাহকে বিশ্বাস করে। তাদের কুকুর গুহার দরজায় সারাক্ষণ পাহারা দিয়ে শুয়েছিল।"
    },
    moral: {
      en: "Hold tightly to your faith even when the world pressures you. Allah protects sincere believers in ways beyond imagination.",
      bn: "পৃথিবী যতই চাপ দিক না কেন, ঈমান শক্ত করে ধরে রাখো। আল্লাহ বিশ্বাসীদের এমনভাবে রক্ষা করেন যা কল্পনার বাইরে।"
    },
    refs: ['18:9-10', '18:13-14']
  },
  {
    id: 'debt-son',
    title:   { en: "The Son Who Paid His Father's Debt", bn: "যে ছেলে বাবার ঋণ শোধ করে দিল" },
    summary: {
      en: "A man once died leaving behind debts he could not repay. His young son learned of this and resolved to help his father even from beyond the grave. He worked hard, saved every coin, and went to each of his father's creditors one by one — honestly declaring the debt and paying every single one. When the last debt was settled, the son made du'a: 'O Allah, this work was done for my father — accept it from him and ease his account.' The Prophet \u{FDFA} taught that debts must be taken seriously, and that children who do good on behalf of their parents earn reward for both of them. A good child is a parent's living legacy — even after death.",
      bn: "এক ব্যক্তি মারা গেলেন ঋণ পরিশোধ না করেই। তাঁর ছেলে এই খবর জানতে পারল এবং সিদ্ধান্ত নিল মৃত্যুর পরেও বাবাকে সাহায্য করবে। কঠোর পরিশ্রম করল, প্রতিটি পয়সা সঞ্চয় করল, এবং বাবার প্রতিটি পাওনাদারের কাছে গিয়ে সৎভাবে ঋণ স্বীকার করে সব পরিশোধ করল। শেষ ঋণ মেটানোর পর দোয়া করল: 'হে আল্লাহ, এই কাজ বাবার জন্য করলাম — তাঁর তরফ থেকে কবুল করো।' নবী \u{FDFA} শিখিয়েছেন ঋণকে গুরুত্বের সাথে নিতে হবে। সন্তান বাবা-মায়ের পক্ষে ভালো কাজ করলে দুজনেই পুরস্কার পায়।"
    },
    moral: {
      en: "Be honest about debts and keep your commitments. Good deeds done for your parents benefit them in the Hereafter too.",
      bn: "ঋণ-অঙ্গীকার সম্পর্কে সৎ থাকো। বাবা-মায়ের জন্য করা ভালো আমল পরকালেও তাদের উপকারে আসে।"
    },
    refs: ['36:12', '17:23']
  },
  {
    id: 'pious-sisters',
    title:   { en: 'The Sisters Who Kept Their Promise', bn: 'বোনেরা যারা তাদের প্রতিশ্রুতি রেখেছিল' },
    summary: {
      en: "Two sisters lived with their elderly uncle who sold water at the roadside to earn honest income. One day the uncle fell ill and could no longer work. The sisters decided to carry on selling water in his place so that the household would not go hungry and no debt would be left. Though it was hard work, they got up early every morning, filled the water jars, and served people with a smiling face and a fair price. Neighbours noticed their dedication and helped them. When their uncle recovered, he was moved to tears by their loyalty. A beautiful truth: when you help your family with sincerity, Allah sends help from unexpected places. Keeping your promise — no matter how tired you are — is one of the greatest acts of worship.",
      bn: "দুই বোন তাদের বৃদ্ধ চাচার সাথে থাকত, যিনি পানি বিক্রি করে সৎ উপার্জন করতেন। একদিন চাচা অসুস্থ হলেন। বোনেরা সিদ্ধান্ত নিল তার বদলে তারা পানি বিক্রি করবে। প্রতিদিন ভোরে উঠে মাটির কলস ভরে হাসিমুখে সঠিক দামে পানি দিত। প্রতিবেশীরা তাদের নিষ্ঠা দেখে সাহায্য করতে এগিয়ে এলো। চাচা সুস্থ হয়ে তাদের বিশ্বস্ততায় কেঁদে ফেললেন। একটি সুন্দর সত্য: আন্তরিকতার সাথে পরিবারকে সাহায্য করলে আল্লাহ অপ্রত্যাশিত জায়গা থেকে সাহায্য পাঠান। নিজে যতই ক্লান্ত হও, প্রতিশ্রুতি রাখা সর্বোত্তম ইবাদতগুলোর একটি।"
    },
    moral: {
      en: "Look after your family and keep your promises. Allah rewards those who are loyal and hardworking, even when no one else is watching.",
      bn: "পরিবারের যত্ন নাও এবং প্রতিশ্রুতি রাখো। আল্লাহ পরিশ্রমী ও বিশ্বস্তদের পুরস্কার দেন, এমনকি যখন কেউ দেখছে না।"
    },
    refs: ['28:26-27', '9:71']
  },
  {
    id: 'girl-prayed-brothers',
    title:   { en: 'The Girl Who Prayed for Her Brothers', bn: 'যে মেয়ে ভাইদের জন্য দোয়া করেছিল' },
    summary: {
      en: "A brave young girl had three brothers who fell into a great difficulty through no fault of their own. People had turned against the family, and it seemed there was no one left to help. While the brothers tried to find a way out, the little sister sat on her prayer mat every evening after Isha, raised her hands, and spoke to Allah with complete trust. She did not cry out of despair — she cried out of love, knowing Allah hears every whisper. She asked nothing for herself; she only asked for her brothers to be safe and for justice to come. Days passed. Then one morning, the difficulty was lifted — in a way no one had expected. The brothers came home safe and said: 'It was your du'a that saved us.' She replied: 'It was Allah who saved you. I only asked Him.'",
      bn: "এক সাহসী কিশোরীর তিন ভাই বিনা দোষে বিপদে পড়ে গেল। আশপাশের মানুষেরা পরিবারের বিরুদ্ধে চলে গেছে। ভাইয়েরা বের হওয়ার পথ খুঁজছিল, আর ছোট বোন প্রতি রাত ইশার পরে জায়নামাজে বসে হাত তুলে আল্লাহর সাথে কথা বলত। সে হতাশায় কাঁদত না — ভালোবেসে কাঁদত, জেনে যে আল্লাহ প্রতিটি ফিসফিস শোনেন। সে শুধু ভাইদের নিরাপত্তা ও ন্যায়বিচার চেয়েছিল। দিন গেল। তারপর এক সকালে বিপদ সরে গেল। ভাইয়েরা ঘরে ফিরে বলল: 'তোমার দোয়াই আমাদের বাঁচিয়েছে।' সে বলল: 'আল্লাহই তোমাদের বাঁচিয়েছেন। আমি শুধু তাঁকে বলেছিলাম।'"
    },
    moral: {
      en: "Du'a is the most powerful tool a believer has. Pray for your family with full trust — Allah always hears.",
      bn: "দোয়া হলো মুমিনের সবচেয়ে শক্তিশালী হাতিয়ার। পুরো ভরসা নিয়ে পরিবারের জন্য দোয়া করো — আল্লাহ সবসময় শোনেন।"
    },
    refs: ['2:186', '40:60']
  },
  // v156 additions — 10 Quran-narrative stories (2026-07-28)
  {
    "id": "dhul-qarnayn-wall",
    "title": {
      "en": "Dhul-Qarnayn and the Iron Wall",
      "bn": "জুলকারনাইন ও লোহার প্রাচীর"
    },
    "summary": {
      "en": "Allah gave a righteous ruler called Dhul-Qarnayn power on earth and a way to everything. He travelled far to the west, where he found the sun setting near a murky spring, and far to the east. Then, between two mountains, he met a people who could hardly understand speech. They begged: 'Yajuj and Majuj spread mischief in the land — may we pay you to build a barrier between us and them?' He refused the money: 'What my Lord has given me is better. Just help me with your strength.' They brought blocks of iron until the gap was filled; he said 'Blow!' until it glowed like fire, then poured molten copper over it. The wall could not be climbed or pierced. Dhul-Qarnayn did not boast. He said: 'This is a mercy from my Lord — and when my Lord's promise comes, He will level it.'",
      "bn": "আল্লাহ জুলকারনাইন নামের এক নেককার শাসককে পৃথিবীতে ক্ষমতা দিলেন এবং সবকিছুর উপায় দিলেন। তিনি সফর করে পশ্চিমে গেলেন — দেখলেন সূর্য যেন এক ঘোলা জলাশয়ে অস্ত যাচ্ছে — তারপর গেলেন পূর্বে। এরপর দুই পাহাড়ের মাঝে এমন এক জাতির দেখা পেলেন, যারা কথা প্রায় বুঝতই না। তারা অনুরোধ করল: 'ইয়াজুজ-মাজুজ জমিনে ফাসাদ করে — আমরা কি আপনাকে কর দেব, যাতে আপনি আমাদের ও তাদের মাঝে একটি প্রাচীর বানিয়ে দেন?' তিনি টাকা নিতে অস্বীকার করলেন: 'আমার রব আমাকে যা দিয়েছেন তা-ই উত্তম। তোমরা শুধু শক্তি দিয়ে সাহায্য করো।' তারা লোহার পাত আনল, ফাঁক ভরাট হলো; তিনি বললেন 'ফুঁ দাও!' — লোহা আগুনের মতো লাল হলো, তারপর তিনি তাতে গলিত তামা ঢেলে দিলেন। সেই প্রাচীর টপকানোও যেত না, ফুটো করাও যেত না। জুলকারনাইন অহংকার করলেন না। বললেন: 'এ আমার রবের রহমত — আমার রবের ওয়াদা এলে তিনি একে চূর্ণ করে দেবেন।'"
    },
    "moral": {
      "en": "Use your strength and skills to help others, and never take the credit — every good thing we do is a mercy from Allah.",
      "bn": "নিজের শক্তি ও দক্ষতা দিয়ে মানুষের উপকার করো, আর কৃতিত্ব নিজে নিও না — আমাদের প্রতিটি ভালো কাজ আসলে আল্লাহর রহমত।"
    },
    "refs": [
      "18:83-98"
    ]
  },
  {
    "id": "saba-flood",
    "title": {
      "en": "The Gardens of Saba",
      "bn": "সাবার বাগানসমূহ"
    },
    "summary": {
      "en": "The people of Saba had a beautiful sign from Allah right where they lived: two lush gardens, one on the right and one on the left. Allah told them: 'Eat from the provision of your Lord and be grateful to Him — a good land and a forgiving Lord!' They also had safe, easy journeys between blessed towns. But instead of saying thank you, they turned away from Allah. So Allah sent upon them the flood of the dam, and their two wonderful gardens were exchanged for gardens of bitter fruit, tamarisk bushes, and only a few lote trees. Their easy life scattered, and they became a story people tell. The Quran says this was the reward of their ingratitude — for Allah only punishes like this those who refuse to be thankful.",
      "bn": "সাবার লোকদের জন্য তাদের বাসভূমিতেই আল্লাহর এক সুন্দর নিদর্শন ছিল: ডানে ও বামে দুটি সবুজ বাগান। আল্লাহ বললেন: 'তোমাদের রবের রিজিক খাও আর তাঁর শুকরিয়া আদায় করো — কত ভালো এই দেশ, আর ক্ষমাশীল রব!' বরকতময় শহরগুলোর মাঝে তাদের সফরও ছিল সহজ ও নিরাপদ। কিন্তু কৃতজ্ঞ হওয়ার বদলে তারা আল্লাহ থেকে মুখ ফিরিয়ে নিল। তখন আল্লাহ তাদের উপর বাঁধভাঙা বন্যা পাঠালেন, আর তাদের চমৎকার দুই বাগানের বদলে দিলেন তেতো ফলের বাগান, ঝাউগাছ আর অল্প কিছু কুলগাছ। তাদের আরামের জীবন ছিন্নভিন্ন হয়ে গেল, তারা হয়ে গেল লোকমুখের গল্প। কুরআন বলে, এ ছিল তাদের অকৃতজ্ঞতার প্রতিফল — অকৃতজ্ঞদেরই আল্লাহ এমন শাস্তি দেন।"
    },
    "moral": {
      "en": "Blessings stay with gratitude. Say Alhamdulillah for your food, home, and safety — being ungrateful can make blessings disappear.",
      "bn": "কৃতজ্ঞতায় নিয়ামত টিকে থাকে। খাবার, ঘর ও নিরাপত্তার জন্য আলহামদুলিল্লাহ বলো — অকৃতজ্ঞতা নিয়ামত কেড়ে নিতে পারে।"
    },
    "refs": [
      "34:15-19"
    ]
  },
  {
    "id": "qarun-treasure",
    "title": {
      "en": "Qarun and His Heavy Keys",
      "bn": "কারুন ও তার ভারী চাবিগুলো"
    },
    "summary": {
      "en": "Qarun was from the people of Prophet Musa, but he treated them unfairly. Allah had given him so much treasure that even the keys to his storerooms were a heavy load for a band of strong men! His people gave him kind advice: 'Do not show off — Allah does not love those who boast. Use what Allah gave you to earn the home of the Hereafter, but don't forget your share of this world. Do good, as Allah has done good to you.' Qarun answered proudly: 'I was only given all this because of knowledge I have.' One day he paraded before the people in all his glitter, and some wished to be just like him. Then Allah caused the earth to swallow Qarun and his house. No one could help him — and those who had envied him realised that all provision truly comes from Allah.",
      "bn": "কারুন ছিল নবী মূসার জাতিরই একজন, কিন্তু সে তাদের উপর বাড়াবাড়ি করত। আল্লাহ তাকে এত ধনভান্ডার দিয়েছিলেন যে তার গুদামের চাবিগুলো বইতেই একদল শক্তিশালী লোকের কষ্ট হতো! তার জাতির লোকেরা তাকে ভালো উপদেশ দিল: 'দেমাগ দেখিও না — আল্লাহ অহংকারীদের ভালোবাসেন না। আল্লাহ যা দিয়েছেন তা দিয়ে আখিরাতের ঘর খোঁজো, তবে দুনিয়ার অংশও ভুলো না। ভালো করো, যেমন আল্লাহ তোমার প্রতি ভালো করেছেন।' কারুন গর্ব করে বলল: 'এসব তো আমি আমার জ্ঞানের জোরেই পেয়েছি।' একদিন সে জাঁকজমকে সেজে মানুষের সামনে বের হলো; কেউ কেউ তার মতো হতে চাইল। তখন আল্লাহ কারুনকে তার বাড়িসহ মাটিতে ধসিয়ে দিলেন। কেউ তাকে বাঁচাতে পারল না — আর যারা হিংসা করেছিল তারা বুঝল, রিজিক সত্যিই কেবল আল্লাহর কাছ থেকে আসে।"
    },
    "moral": {
      "en": "Never boast about what you have — money, toys, or talents. Everything is a gift from Allah, so be humble and generous.",
      "bn": "যা আছে তা নিয়ে কখনো অহংকার কোরো না — টাকা, খেলনা বা প্রতিভা। সবই আল্লাহর উপহার, তাই বিনয়ী ও দানশীল হও।"
    },
    "refs": [
      "28:76-82"
    ]
  },
  {
    "id": "people-of-the-garden",
    "title": {
      "en": "The Garden That Burned at Night",
      "bn": "রাতে পুড়ে যাওয়া বাগান"
    },
    "summary": {
      "en": "Some brothers owned a rich garden. They swore they would pick all its fruit early in the morning — and they did not say 'if Allah wills.' They even whispered a plan: 'Let no poor person come in to us today!' But while they slept, a visitation from their Lord swept over the garden, and by morning it was black, like a field already harvested. At dawn they called each other: 'Hurry to your crop if you are going to pick it!' When they saw the garden they cried: 'We must be lost — no, we have been left with nothing!' The most balanced of them said: 'Did I not tell you? Why do you not glorify Allah?' They said: 'Glory be to our Lord — truly we were wrongdoers,' and stopped blaming each other, hoping their Lord would give them something better in exchange.",
      "bn": "কয়েক ভাইয়ের একটি সমৃদ্ধ বাগান ছিল। তারা কসম করল, ভোরবেলাই সব ফল পেড়ে ফেলবে — আর 'ইনশাআল্লাহ' বলল না। এমনকি ফিসফিস করে ফন্দি আঁটল: 'আজ যেন কোনো গরিব মানুষ আমাদের কাছে ঢুকতে না পারে!' কিন্তু তারা ঘুমিয়ে থাকতেই তাদের রবের পক্ষ থেকে এক বিপদ বাগানের উপর দিয়ে ঘুরে গেল — সকালে বাগানটি হয়ে গেল কালো, যেন কাটা-শেষ ক্ষেত। ভোরে তারা ডাকাডাকি করল: 'ফল পাড়তে চাইলে তাড়াতাড়ি ক্ষেতে চলো!' বাগান দেখে তারা চিৎকার করে উঠল: 'আমরা নিশ্চয়ই পথ ভুল করেছি — না, আমরা তো সব হারিয়েছি!' তাদের মধ্যে সবচেয়ে বিবেচকজন বলল: 'আমি কি বলিনি? তোমরা কেন আল্লাহর তাসবিহ পড়ো না?' তারা বলল: 'আমাদের রব পবিত্র — সত্যিই আমরা জালিম ছিলাম।' দোষাদোষি থামিয়ে তারা আশা করল, তাদের রব এর বদলে আরও ভালো কিছু দেবেন।"
    },
    "moral": {
      "en": "Always say Insha'Allah when you plan, and never plan to keep the poor away from your blessings — share, and Allah gives more.",
      "bn": "পরিকল্পনার সময় সবসময় 'ইনশাআল্লাহ' বলো, আর গরিবদের বঞ্চিত করার ফন্দি কোরো না — ভাগ করে দাও, আল্লাহ আরও বাড়িয়ে দেবেন।"
    },
    "refs": [
      "68:17-33"
    ]
  },
  {
    "id": "salih-she-camel",
    "title": {
      "en": "The She-Camel of Prophet Salih",
      "bn": "নবী সালিহের উটনী"
    },
    "summary": {
      "en": "The people of Thamud were strong builders who carved houses out of mountains. Allah sent them Prophet Salih, who said: 'Worship Allah — you have no god but Him. A clear sign has come to you: this is the she-camel of Allah, a sign for you. Let her eat freely in Allah's earth, and do not touch her with any harm, or a painful punishment will seize you.' Even the water was shared fairly: the camel had her drinking day, and the people had theirs. But the proud people disobeyed. The most wretched man among them rose up, and they cruelly cut down the she-camel. Then the punishment Salih warned about came true — a mighty blast and trembling seized the wrongdoers, and morning found them fallen in their homes. Salih had told the truth all along.",
      "bn": "সামুদ জাতি ছিল শক্তিশালী কারিগর — পাহাড় কেটে তারা ঘর বানাত। আল্লাহ তাদের কাছে নবী সালিহকে পাঠালেন। তিনি বললেন: 'আল্লাহর ইবাদত করো — তিনি ছাড়া তোমাদের কোনো উপাস্য নেই। তোমাদের কাছে স্পষ্ট নিদর্শন এসেছে: এটি আল্লাহর উটনী, তোমাদের জন্য এক নিদর্শন। একে আল্লাহর জমিনে চরে খেতে দাও, আর একে কোনো কষ্ট দিও না — নইলে যন্ত্রণাদায়ক শাস্তি তোমাদের ধরবে।' এমনকি পানিও ন্যায্যভাবে ভাগ ছিল: একদিন উটনীর পানের পালা, একদিন লোকদের। কিন্তু অহংকারী লোকেরা অমান্য করল। তাদের সবচেয়ে হতভাগা লোকটি উঠে দাঁড়াল, আর তারা নির্মমভাবে উটনীটিকে মেরে ফেলল। তখন সালিহের সতর্কবাণী সত্য হলো — এক প্রচণ্ড গর্জন ও কম্পন জালিমদের গ্রাস করল, সকালে তারা নিজেদের ঘরে উপুড় হয়ে পড়ে রইল। সালিহ শুরু থেকেই সত্য বলছিলেন।"
    },
    "moral": {
      "en": "Allah's creatures must never be harmed. Listening to Allah's messengers protects us; cruelty and arrogance destroy us.",
      "bn": "আল্লাহর সৃষ্টিকে কখনো কষ্ট দেওয়া যাবে না। আল্লাহর রাসূলদের কথা শুনলে আমরা নিরাপদ থাকি; নিষ্ঠুরতা আর অহংকার ধ্বংস ডেকে আনে।"
    },
    "refs": [
      "7:73-79",
      "91:11-15",
      "54:27-31"
    ]
  },
  {
    "id": "table-from-heaven",
    "title": {
      "en": "The Table from Heaven",
      "bn": "আসমান থেকে খাবারের দস্তরখান"
    },
    "summary": {
      "en": "The disciples of Prophet Isa once asked him: 'Can your Lord send down to us a table spread with food from heaven?' Isa reminded them: 'Fear Allah, if you are believers.' They explained their wish: 'We want to eat from it so our hearts feel sure, so we know you have told us the truth, and so we can be witnesses to it.' So Isa, son of Maryam, prayed: 'O Allah, our Lord! Send down to us a table from heaven, to be a feast for the first of us and the last of us, and a sign from You. Give us provision — You are the best of providers.' Allah answered: 'I will send it down to you. But whoever among you disbelieves after that, I will punish him as I have not punished anyone in the worlds.' A great gift brings a great trust.",
      "bn": "নবী ঈসার হাওয়ারিরা একবার জিজ্ঞেস করল: 'আপনার রব কি আসমান থেকে আমাদের জন্য খাবারভরা এক দস্তরখান নামিয়ে দিতে পারেন?' ঈসা মনে করিয়ে দিলেন: 'আল্লাহকে ভয় করো, যদি তোমরা মুমিন হও।' তারা তাদের ইচ্ছার কথা বলল: 'আমরা তা থেকে খেতে চাই, যেন আমাদের অন্তর প্রশান্ত হয়, যেন জানি আপনি সত্য বলেছেন, আর আমরা এর সাক্ষী হতে পারি।' তখন মারইয়ামের পুত্র ঈসা দোয়া করলেন: 'হে আল্লাহ, আমাদের রব! আসমান থেকে আমাদের জন্য এক দস্তরখান নামিয়ে দিন — যা আমাদের প্রথম ও শেষ সবার জন্য হবে এক আনন্দ-উৎসব, আর আপনার পক্ষ থেকে এক নিদর্শন। আমাদের রিজিক দিন — আপনিই সর্বোত্তম রিজিকদাতা।' আল্লাহ জবাব দিলেন: 'আমি তা নামিয়ে দেব। কিন্তু এরপর তোমাদের কেউ অবিশ্বাস করলে তাকে এমন শাস্তি দেব, যা দুনিয়ার কাউকে দিইনি।' বড় উপহারের সাথে আসে বড় দায়িত্ব।"
    },
    "moral": {
      "en": "Allah hears our prayers and provides for us. But when Allah gives us a special blessing, we must be extra thankful and faithful.",
      "bn": "আল্লাহ আমাদের দোয়া শোনেন এবং রিজিক দেন। কিন্তু আল্লাহ বিশেষ নিয়ামত দিলে আমাদের আরও বেশি কৃতজ্ঞ ও বিশ্বস্ত হতে হয়।"
    },
    "refs": [
      "5:112-115"
    ]
  },
  {
    "id": "zakariyya-dua",
    "title": {
      "en": "Zakariyya's Quiet Prayer",
      "bn": "জাকারিয়ার নীরব দোয়া"
    },
    "summary": {
      "en": "Prophet Zakariyya grew old without a child. He did not give up — he called his Lord with a quiet, secret prayer: 'My Lord, my bones have grown weak and my head glistens with white hair, yet I have never been disappointed in praying to You. Give me from Yourself an heir who will carry on the work and be pleasing to You.' Allah answered with wonderful news: 'We give you good tidings of a boy whose name will be Yahya — We have not given this name to anyone before.' Zakariyya asked in wonder: 'How can I have a boy when my wife cannot have children and I am so old?' Allah said: 'It is easy for Me — I created you before, when you were nothing.' As a sign, Zakariyya did not speak to people for three nights, and he came out and signalled to them: glorify Allah morning and evening.",
      "bn": "নবী জাকারিয়া বৃদ্ধ হয়ে গেলেন, কিন্তু কোনো সন্তান ছিল না। তিনি হাল ছাড়লেন না — নীরবে, গোপনে রবকে ডাকলেন: 'হে আমার রব, আমার হাড় দুর্বল হয়ে গেছে, মাথা সাদা চুলে ঝিকমিক করছে, তবু আপনার কাছে দোয়া করে আমি কখনো নিরাশ হইনি। আপনার পক্ষ থেকে আমাকে এমন এক উত্তরাধিকারী দিন, যে এই দায়িত্ব বহন করবে আর আপনার প্রিয় হবে।' আল্লাহ চমৎকার সুসংবাদ দিলেন: 'আমরা তোমাকে এক পুত্রের সুখবর দিচ্ছি, যার নাম হবে ইয়াহইয়া — এই নাম আগে কাউকে দিইনি।' জাকারিয়া অবাক হয়ে বললেন: 'কীভাবে আমার ছেলে হবে? আমার স্ত্রী বন্ধ্যা, আর আমি এত বৃদ্ধ!' আল্লাহ বললেন: 'এ আমার জন্য সহজ — আগে তো তোমাকেও সৃষ্টি করেছি, যখন তুমি কিছুই ছিলে না।' নিদর্শন হিসেবে জাকারিয়া তিন রাত মানুষের সাথে কথা বললেন না; তিনি বেরিয়ে এসে ইশারায় বললেন: সকাল-সন্ধ্যায় আল্লাহর তাসবিহ পড়ো।"
    },
    "moral": {
      "en": "No dua is too big for Allah, and no whisper is too quiet for Him to hear. Keep asking Allah with hope — He can do anything.",
      "bn": "কোনো দোয়াই আল্লাহর কাছে বেশি বড় নয়, কোনো ফিসফিসও তাঁর শোনার জন্য বেশি ছোট নয়। আশা নিয়ে আল্লাহর কাছে চাইতে থাকো — তিনি সব পারেন।"
    },
    "refs": [
      "19:2-11",
      "3:38-41"
    ]
  },
  {
    "id": "talut-jalut",
    "title": {
      "en": "Talut, the River Test, and Young Dawud",
      "bn": "তালুত, নদীর পরীক্ষা ও তরুণ দাউদ"
    },
    "summary": {
      "en": "After the time of Musa, the Children of Israel asked their prophet for a king so they could fight in Allah's way. Allah chose Talut. Some grumbled — Talut was not rich! Their prophet answered: 'Allah has chosen him over you and increased him in knowledge and strength.' As Talut marched out with his soldiers, he said: 'Allah will test you with a river. Whoever drinks from it is not with me — except a sip scooped with the hand.' Most of them drank their fill and dropped out. The small, faithful group crossed and said: 'How often a small company has beaten a large company by Allah's permission! Allah is with the patient.' They prayed: 'Our Lord, pour patience upon us and make our feet firm.' By Allah's permission they won — and young Dawud killed the mighty Jalut. Allah later gave Dawud kingship and wisdom.",
      "bn": "মূসার যুগের পরে বনী ইসরাঈল তাদের নবীর কাছে একজন রাজা চাইল, যেন আল্লাহর পথে লড়তে পারে। আল্লাহ তালুতকে বেছে নিলেন। কেউ কেউ অসন্তুষ্ট হলো — তালুত তো ধনী নন! তাদের নবী বললেন: 'আল্লাহই তাকে তোমাদের উপর বেছে নিয়েছেন এবং তাকে জ্ঞানে ও দেহে বাড়তি শক্তি দিয়েছেন।' সৈন্যদল নিয়ে রওনা হয়ে তালুত বললেন: 'আল্লাহ একটি নদী দিয়ে তোমাদের পরীক্ষা করবেন। যে তা থেকে পান করবে সে আমার দলে নয় — তবে এক আঁজলা পানি নিলে ক্ষতি নেই।' বেশিরভাগই পেট ভরে পান করল আর বাদ পড়ল। ছোট্ট বিশ্বস্ত দলটি নদী পার হয়ে বলল: 'আল্লাহর হুকুমে কত ছোট দল কত বড় দলকে হারিয়েছে! আল্লাহ ধৈর্যশীলদের সাথে আছেন।' তারা দোয়া করল: 'হে আমাদের রব, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা অটল রাখুন।' আল্লাহর হুকুমে তারা জয়ী হলো — আর তরুণ দাউদ শক্তিশালী জালুতকে বধ করলেন। পরে আল্লাহ দাউদকে রাজত্ব ও প্রজ্ঞা দিলেন।"
    },
    "moral": {
      "en": "Victory comes from Allah, not from big numbers or riches. A small team with patience, discipline, and faith can do great things.",
      "bn": "জয় আসে আল্লাহর কাছ থেকে — বড় সংখ্যা বা ধন থেকে নয়। ধৈর্য, নিয়মানুবর্তিতা আর ঈমান থাকলে ছোট দলও বড় কিছু করতে পারে।"
    },
    "refs": [
      "2:246-251"
    ]
  },
  {
    "id": "hud-aad",
    "title": {
      "en": "Hud and the Proud People of 'Aad",
      "bn": "হুদ ও অহংকারী 'আদ জাতি"
    },
    "summary": {
      "en": "The people of 'Aad were tall, strong, and proud of their power. Allah sent them their brother Hud, who said: 'O my people, worship Allah — you have no god but Him. Remember how He made you successors after the people of Nuh and increased you greatly in stature. Remember Allah's favours, so that you may succeed.' But they were arrogant and refused, even daring him to bring the punishment he warned about. Then one day they saw a great cloud coming toward their valleys and cheered: 'This cloud will bring us rain!' But it was no rain cloud. It was a furious, screaming wind carrying a painful punishment. The Quran says it raged for seven nights and eight days, until the people lay fallen like hollow trunks of palm trees. Allah saved Hud and those who believed with him by His mercy.",
      "bn": "'আদ জাতি ছিল লম্বা, শক্তিশালী, আর নিজেদের শক্তি নিয়ে অহংকারী। আল্লাহ তাদের কাছে তাদেরই ভাই হুদকে পাঠালেন। তিনি বললেন: 'হে আমার জাতি, আল্লাহর ইবাদত করো — তিনি ছাড়া তোমাদের কোনো উপাস্য নেই। মনে করো, নূহের জাতির পরে তিনিই তোমাদের উত্তরসূরি বানিয়েছেন আর দেহের গঠনে বাড়তি শক্তি দিয়েছেন। আল্লাহর নিয়ামতগুলো স্মরণ করো, যেন তোমরা সফল হও।' কিন্তু তারা অহংকার করে অস্বীকার করল, এমনকি সতর্ক-করা শাস্তি নিয়ে আসার চ্যালেঞ্জও দিল। তারপর একদিন তারা দেখল, উপত্যকার দিকে বিশাল এক মেঘ এগিয়ে আসছে। তারা খুশিতে বলল: 'এই মেঘ আমাদের বৃষ্টি দেবে!' কিন্তু সেটি বৃষ্টির মেঘ ছিল না — ছিল যন্ত্রণাদায়ক শাস্তি বয়ে আনা এক প্রচণ্ড গর্জনকারী ঝড়। কুরআন বলে, সেই ঝড় সাত রাত আট দিন চলল, শেষে মানুষগুলো পড়ে রইল ফাঁপা খেজুরগাছের গুঁড়ির মতো। আল্লাহ নিজ রহমতে হুদ ও তাঁর সাথের মুমিনদের রক্ষা করলেন।"
    },
    "moral": {
      "en": "Being big or strong is a gift from Allah, never a reason to be proud. Arrogance brings downfall; humble faith brings safety.",
      "bn": "লম্বা বা শক্তিশালী হওয়া আল্লাহর দান — অহংকারের কারণ নয়। অহংকার পতন ডেকে আনে; বিনয়ী ঈমান আনে নিরাপত্তা।"
    },
    "refs": [
      "7:65-72",
      "46:21-25",
      "69:6-8"
    ]
  },
  {
    "id": "nuh-ark",
    "title": {
      "en": "Nuh's Ark and the Great Flood",
      "bn": "নূহের নৌকা ও মহাপ্লাবন"
    },
    "summary": {
      "en": "Prophet Nuh called his people to worship Allah alone for a very, very long time — night and day, openly and secretly — but most refused and made fun of him. Allah told Nuh: 'Build the ark under Our eyes.' Whenever the chiefs passed by, they laughed at him, but Nuh kept building. When Allah's command came and water gushed forth, Nuh loaded a pair of every kind of animal, his family, and the few who believed. The ark sailed through waves like mountains. Nuh called to his son, who stood apart: 'My dear son, ride with us!' The son said: 'I will climb a mountain that will protect me from the water.' Nuh said: 'There is no protector today from Allah's command, except for those He gives mercy.' The waves came between them, and the son drowned. Then Allah said: 'O earth, swallow your water! O sky, hold back!' The water sank away, and the ark came to rest upon Mount Judiyy.",
      "bn": "নবী নূহ বহু-বহু বছর ধরে — দিনে-রাতে, প্রকাশ্যে-গোপনে — মানুষকে এক আল্লাহর ইবাদতের দিকে ডাকলেন, কিন্তু অধিকাংশই অস্বীকার করল আর ঠাট্টা করল। আল্লাহ নূহকে বললেন: 'আমার চোখের সামনে নৌকা বানাও।' নেতারা পাশ দিয়ে গেলেই হাসাহাসি করত, কিন্তু নূহ বানিয়ে চললেন। যখন আল্লাহর হুকুম এল এবং পানি উথলে উঠল, নূহ প্রতিটি প্রাণীর এক-এক জোড়া, তাঁর পরিবার আর অল্প ক'জন মুমিনকে নৌকায় তুললেন। পাহাড়ের মতো ঢেউয়ের মধ্য দিয়ে নৌকা চলল। দূরে দাঁড়ানো ছেলেকে নূহ ডাকলেন: 'প্রিয় ছেলে, আমাদের সাথে ওঠো!' ছেলে বলল: 'আমি পাহাড়ে উঠে যাব, তা আমাকে পানি থেকে বাঁচাবে।' নূহ বললেন: 'আজ আল্লাহর হুকুম থেকে কোনো রক্ষাকারী নেই — তবে তিনি যাকে রহম করেন।' ঢেউ দুজনের মাঝে এসে পড়ল, ছেলেটি ডুবে গেল। তারপর আল্লাহ বললেন: 'হে জমিন, তোমার পানি গিলে নাও! হে আকাশ, থামো!' পানি নেমে গেল, আর নৌকা জুদি পাহাড়ে গিয়ে থামল।"
    },
    "moral": {
      "en": "Keep doing what Allah asks even if people laugh at you. True safety is not in mountains or strength — it is only in Allah's mercy.",
      "bn": "মানুষ হাসলেও আল্লাহর নির্দেশ পালন করে যাও। আসল নিরাপত্তা পাহাড় বা শক্তিতে নয় — কেবল আল্লাহর রহমতে।"
    },
    "refs": [
      "11:36-44",
      "71:5-9",
      "29:14"
    ]
  }
];

/**
 * Child-friendly Islamic manners (adab) cards — bilingual en+bn.
 * Fields: id, title {en,bn}, body {en,bn}, arabic (optional), ref (optional).
 */
const KIDS_ADAB = [
  {
    id: 'salaam-greeting',
    title: { en: 'Say Salaam First', bn: 'আগে সালাম দাও' },
    body: {
      en: "When you see a Muslim — a friend, family member, or neighbour — greet them with 'Assalamu Alaikum.' This means 'Peace be upon you.' The Prophet \u{FDFA} said the one who says salaam first is better. Salaam is a gift of peace you give to others. If someone greets you, reply: 'Wa Alaikum Assalam' — and even better, add 'Wa Rahmatullahi Wa Barakatuh.'",
      bn: "যখন কোনো মুসলিমকে দেখো — বন্ধু, পরিবার বা প্রতিবেশী — 'আস-সালামু আলাইকুম' বলে সালাম দাও। এর মানে 'তোমার উপর শান্তি বর্ষিত হোক।' নবী \u{FDFA} বলেছেন, যে আগে সালাম দেয় সে উত্তম। সালাম হলো তুমি অন্যকে যে শান্তির উপহার দাও। কেউ সালাম দিলে 'ওয়া আলাইকুম আস-সালাম' বলো — আরও ভালো হয় 'ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু' যোগ করলে।"
    },
    arabic: 'السَّلَامُ عَلَيْكُمْ',
    ref: 'Muslim 54'
  },
  {
    id: 'thank-parents',
    title: { en: 'Thank Your Parents Every Day', bn: 'প্রতিদিন বাবা-মায়ের কৃতজ্ঞতা জানাও' },
    body: {
      en: "Allah says in the Quran: 'Be grateful to Me and to your parents.' Your parents wake up early, work hard, cook your food, wash your clothes, and stay up when you are sick — all out of love. Say 'Jazakallah Khayr' or 'Thank you, Mum / Dad' every single day. A simple 'I love you' or a hug means the world to them. Never speak rudely or raise your voice at your parents — this is one of the greatest sins in Islam.",
      bn: "আল্লাহ কুরআনে বলেছেন: 'আমার কৃতজ্ঞতা আদায় করো এবং তোমার বাবা-মায়ের।' তোমার বাবা-মা ভোরে ওঠেন, কঠোর পরিশ্রম করেন, রান্না করেন, কাপড় ধোন, অসুস্থতায় জেগে থাকেন — সবই ভালোবাসায়। প্রতিদিন 'জাযাকাল্লাহ খাইর' বা 'ধন্যবাদ, আব্বু/আম্মু' বলো। একটি 'আমি তোমাকে ভালোবাসি' বা জড়িয়ে ধরাটা তাদের অনেক কিছু দেয়। বাবা-মায়ের সাথে কখনো রূঢ় বা উঁচু গলায় কথা বলো না — ইসলামে এটা সবচেয়ে বড় গুনাহগুলোর একটি।"
    },
    arabic: 'وَبِالْوَالِدَيْنِ إِحْسَانًا',
    ref: 'Quran 31:14'
  },
  {
    id: 'share-toys',
    title: { en: 'Share Your Toys and Food', bn: 'খেলনা ও খাবার ভাগ করো' },
    body: {
      en: "The Prophet \u{FDFA} said: 'None of you truly believes until he loves for his brother what he loves for himself.' When a friend or sibling wants to play with your toy, share it with a smile. When you have a snack, offer some to the person beside you. Sharing is not losing — it is gaining love and blessings. Allah loves those who are generous.",
      bn: "নবী \u{FDFA} বলেছেন: 'তোমাদের কেউ ততক্ষণ পূর্ণ মুমিন হবে না, যতক্ষণ না সে তার ভাইয়ের জন্যও তাই পছন্দ করে যা নিজের জন্য পছন্দ করে।' বন্ধু বা ভাই-বোন তোমার খেলনায় খেলতে চাইলে হাসিমুখে ভাগ দাও। নাশতা থাকলে পাশের জনকেও দাও। ভাগ করা মানে হারানো নয় — এটা ভালোবাসা ও বরকত পাওয়া। আল্লাহ উদার মানুষদের ভালোবাসেন।"
    },
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    ref: 'Bukhari 13, Muslim 45'
  },
  {
    id: 'keep-promises',
    title: { en: 'Always Keep Your Promises', bn: 'সবসময় প্রতিশ্রুতি রাখো' },
    body: {
      en: "If you tell a friend 'I will meet you after school,' keep that promise. If you say 'I will return your pencil tomorrow,' do it. The Prophet \u{FDFA} said that breaking promises is a sign of hypocrisy. When you keep your word, people trust you — and that trust is worth more than gold. Before you make a promise, think carefully: can I really keep this? If unsure, say 'Insha'Allah — if Allah wills it.'",
      bn: "যদি বন্ধুকে বলো 'স্কুলের পরে দেখা হবে,' সেই প্রতিশ্রুতি রাখো। যদি বলো 'কাল পেন্সিলটা ফিরিয়ে দেব,' সেটা করো। নবী \u{FDFA} বলেছেন প্রতিশ্রুতি ভাঙা মোনাফেকির লক্ষণ। কথা রাখলে মানুষ তোমাকে বিশ্বাস করে — আর সেই বিশ্বাস সোনার চেয়েও দামি। প্রতিশ্রুতি দেওয়ার আগে ভেবো: সত্যিই কি রাখতে পারব? নিশ্চিত না হলে বলো 'ইন শা আল্লাহ।'"
    },
    arabic: 'وَأَوْفُوا بِالْعَهْدِ',
    ref: 'Quran 17:34'
  },
  {
    id: 'be-honest',
    title: { en: 'Always Tell the Truth', bn: 'সবসময় সত্য বলো' },
    body: {
      en: "The Prophet \u{FDFA} was known as 'Al-Amin' — the Trustworthy — even before prophethood, because he never lied. He said: 'Stick to honesty — it leads to goodness, and goodness leads to Paradise.' If you break something by accident, say so honestly instead of hiding it. A lie might feel like a small shortcut, but it leads to more lies. Honesty, even when it is hard, always brings more blessings in the end.",
      bn: "নবী \u{FDFA} নবী হওয়ার আগে থেকেই 'আল-আমিন' (বিশ্বস্ত) নামে পরিচিত ছিলেন — কারণ তিনি কখনো মিথ্যা বলেননি। তিনি বলেছেন: 'সততা আঁকড়ে ধরো — এটা ভালোর দিকে নিয়ে যায়, আর ভালো জান্নাতের দিকে নিয়ে যায়।' যদি ভুলে কিছু ভেঙে ফেলো, লুকানোর বদলে সৎভাবে স্বীকার করো। একটা মিথ্যা ছোট শর্টকাটের মতো মনে হয়, কিন্তু আরও মিথ্যার দিকে নিয়ে যায়।"
    },
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ',
    ref: 'Bukhari 6094, Muslim 2607'
  },
  {
    id: 'respect-teachers',
    title: { en: 'Respect Your Teachers', bn: 'শিক্ষকদের সম্মান করো' },
    body: {
      en: "A teacher gives you knowledge — and knowledge is one of the greatest gifts. The Prophet \u{FDFA} said: 'The scholars are the inheritors of the prophets.' Stand up when a teacher enters the room. Listen without interrupting. Say 'Jazakallah Khayr' or 'Thank you' when you learn something new. If your teacher makes a mistake, mention it gently and privately — never embarrass them in front of others. Respecting your teachers is a way of honouring the knowledge Allah has given through them.",
      bn: "শিক্ষক হলেন সেই মানুষ যিনি তোমাকে জ্ঞান দেন — আর জ্ঞান হলো সবচেয়ে বড় উপহারগুলোর একটি। নবী \u{FDFA} বলেছেন: 'আলেমরা নবীদের উত্তরসূরি।' শিক্ষক ঘরে ঢুকলে উঠে দাঁড়াও। বাধা না দিয়ে মনোযোগ দিয়ে শোনো। নতুন কিছু শিখলে 'জাযাকাল্লাহ খাইর' বলো। শিক্ষক ভুল করলে একান্তে ও নরমভাবে বলো — অন্যদের সামনে কখনো অপ্রস্তুত করো না।"
    },
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    ref: 'Quran 20:114'
  },
  {
    id: 'kind-to-animals',
    title: { en: 'Be Kind to Animals', bn: 'প্রাণীদের প্রতি সদয় হও' },
    body: {
      en: "The Prophet \u{FDFA} loved animals deeply. A woman once went to Hellfire because she locked her cat and let it starve — and another person was forgiven because they gave water to a thirsty dog. Feed birds and stray cats when you can. Never pull an animal's tail or scare them for fun. If you find an injured bird, gently help it. The Prophet \u{FDFA} said: 'There is a reward for serving any living being.' Every kind act to an animal is a good deed.",
      bn: "নবী \u{FDFA} প্রাণীদের ভীষণ ভালোবাসতেন। এক মহিলা জাহান্নামে গিয়েছিল কারণ সে বিড়াল বন্ধ করে না খেতে দিয়েছিল — আর অন্য একজন ক্ষমা পেয়েছিল কারণ সে তৃষ্ণার্ত কুকুরকে পানি দিয়েছিল। সুযোগ পেলে পাখি ও রাস্তার বিড়ালদের খাবার দাও। কখনো প্রাণীর লেজ টেনো না বা মজার জন্য ভয় দেখিও না। আহত পাখি পেলে আস্তে সাহায্য করো। নবী \u{FDFA} বলেছেন: 'প্রতিটি জীবন্ত সত্তার সেবায় পুরস্কার আছে।'"
    },
    arabic: 'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَىٰ كُلِّ شَيْءٍ',
    ref: 'Bukhari 3467, Muslim 1553'
  },
  {
    id: 'no-waste',
    title: { en: "Don't Be Wasteful", bn: 'অপচয় করো না' },
    body: {
      en: "Allah says in the Quran: 'Do not waste — Allah does not love those who waste.' Do not leave your tap running while brushing your teeth. Eat what is on your plate and do not throw away food. Turn off lights when you leave a room. Use pens and pencils until they are finished. The Prophet \u{FDFA} used to repair his own shoes and clothes rather than throwing them away. Every resource on earth is a gift from Allah — treat it with respect.",
      bn: "আল্লাহ কুরআনে বলেছেন: 'অপচয় করো না — আল্লাহ অপচয়কারীদের পছন্দ করেন না।' দাঁত মাজতে মাজতে কলের পানি ছেড়ে রেখো না। থালায় যা আছে খেয়ে শেষ করো, খাবার নষ্ট করো না। ঘর থেকে বের হওয়ার সময় বাতি নেভাও। কলম-পেন্সিল শেষ না হওয়া পর্যন্ত ব্যবহার করো। নবী \u{FDFA} নিজের জুতো-কাপড় ছুঁড়ে না দিয়ে মেরামত করতেন। পৃথিবীর প্রতিটি সম্পদ আল্লাহর উপহার — শ্রদ্ধার সাথে ব্যবহার করো।"
    },
    arabic: 'وَلَا تُسْرِفُوا',
    ref: 'Quran 6:141'
  },
  {
    id: 'salaam-elders',
    title: { en: 'Say Salaam to Elders', bn: 'বড়দের সালাম দাও' },
    body: {
      en: "When you walk into a room with elderly people — grandparents, aunts, uncles, neighbours — greet them first with a warm salaam. The Prophet \u{FDFA} said: 'Respect the elderly, for respecting them is a way of glorifying Allah.' Let an elder sit down before you. Do not interrupt them when they are speaking. Offer to carry their bags or help with tasks. When an elder gives you advice, listen patiently — they have lived longer and learned more than you have.",
      bn: "বৃদ্ধ মানুষের সাথে এক ঘরে ঢুকলে — দাদা-দাদি, নানা-নানি, চাচা-মামা, প্রতিবেশী — আগে উষ্ণ হৃদয়ে সালাম দাও। নবী \u{FDFA} বলেছেন: 'বয়োজ্যেষ্ঠদের সম্মান করো, কারণ এটা আল্লাহর মহিমা ঘোষণারই উপায়।' তোমার আগে বড়দের বসতে দাও। কথা বলার সময় মাঝে কেটো না। তাদের ব্যাগ বহন বা কাজে সাহায্যের প্রস্তাব দাও।"
    },
    arabic: 'وَقَالَ سَلَامٌ عَلَيْكَ',
    ref: 'Abu Dawud 4843'
  },
  {
    id: 'wash-hands',
    title: { en: 'Wash Your Hands and Stay Clean', bn: 'হাত ধোও ও পরিষ্কার থাকো' },
    body: {
      en: "The Prophet \u{FDFA} taught that cleanliness is half of faith. Wash your hands before eating, after using the toilet, after playing outside, and after touching animals. Brush your teeth (use a miswak if you can!), keep your clothes neat, and tidy your room. When your body and surroundings are clean, you feel happier and healthier — and you are ready to pray to Allah at any time.",
      bn: "নবী \u{FDFA} শিখিয়েছেন পবিত্রতা ঈমানের অর্ধেক। খাওয়ার আগে, টয়লেটের পরে, বাইরে খেলার পরে এবং প্রাণী ছোঁয়ার পরে হাত ধোও। দাঁত মাজো (পারলে মিসওয়াক ব্যবহার করো!), কাপড় পরিপাটি রাখো, ঘর গোছাও। শরীর ও আশপাশ পরিষ্কার থাকলে মন ভালো ও স্বাস্থ্য ভালো থাকে — আর যেকোনো সময় নামাজের জন্য প্রস্তুত থাকো।"
    },
    arabic: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
    ref: 'Muslim 223'
  },
  {
    id: 'smile-sadaqah',
    title: { en: 'A Smile Is Sadaqah (Charity)', bn: 'হাসি হলো সদকা' },
    body: {
      en: "The Prophet \u{FDFA} said: 'Your smile in the face of your brother is charity.' You do not need money to give charity — a genuine warm smile is a gift to the person in front of you. It tells them: I see you, I am happy to be with you, and I wish you well. Smile at your parents when they come home tired. Smile at classmates who look sad. A simple smile can brighten someone's whole day — and it costs you nothing.",
      bn: "নবী \u{FDFA} বলেছেন: 'তোমার ভাইয়ের মুখে হাসি দেওয়া সদকা।' সদকা করতে টাকার দরকার নেই — একটি সত্যিকারের উষ্ণ হাসি সামনের মানুষটির জন্য উপহার। এটা বলে: আমি তোমাকে দেখছি, তোমার সাথে থাকতে পেরে সুখী। বাবা-মা ক্লান্ত হয়ে ঘরে ফিরলে হাসো। দুঃখী দেখাচ্ছে এমন বন্ধুকে হাসো। একটি সহজ হাসি কারো পুরো দিন উজ্জ্বল করতে পারে।"
    },
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
    ref: 'Tirmidhi 1956'
  },
  {
    id: 'kindness-plants',
    title: { en: 'Be Kind to Plants', bn: 'গাছপালার প্রতি সদয় হও' },
    body: {
      en: "The Prophet \u{FDFA} said: 'If a Muslim plants a tree, and a bird, human, or animal eats from it — it is sadaqah for him.' Every green tree glorifies Allah in its own way. Water your houseplants when they are thirsty. Do not pull up flowers just to throw them away. Do not carve words into tree trunks or break branches for no reason. If you can, plant a seed — a lemon, a herb, or a flower — and watch it grow. Caring for plants is an act of worship that keeps giving even after you are gone.",
      bn: "নবী \u{FDFA} বলেছেন: 'কোনো মুসলিম যদি গাছ লাগায়, আর পাখি, মানুষ বা পশু তা থেকে খায় — তার জন্য সদকা হবে।' প্রতিটি সবুজ গাছ আল্লাহর তাসবিহ পড়ছে। ঘরের টবের গাছে তৃষ্ণা পেলে পানি দাও। শুধু ছুঁড়ে ফেলার জন্য ফুল ছিঁড়ো না। কোনো কারণ ছাড়া গাছের গায়ে লেখা খোদাও না বা ডাল ভেঙো না। পারলে একটি বীজ রোপণ করো। গাছের যত্ন নেওয়া এমন ইবাদত যা তুমি চলে যাওয়ার পরেও চলতে থাকে।"
    },
    arabic: 'مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا إِلَّا كَانَ مَا أُكِلَ مِنْهُ لَهُ صَدَقَةً',
    ref: 'Bukhari 2320, Muslim 1553'
  },
  // v156 additions — 8 adab lessons (2026-07-28)
  {
    "id": "patience-when-upset",
    "title": {
      "en": "Be Patient When Things Go Wrong",
      "bn": "মন খারাপ হলে ধৈর্য ধরো"
    },
    "body": {
      "en": "Lost a game? Broke your favourite toy? Waiting feels too long? Take a deep breath and say 'Alhamdulillah.' The Quran teaches us to seek help through patience and prayer, and promises that Allah is with the patient. Being patient does not mean you cannot feel sad — it means you do not scream, throw things, or give up. Patient hearts stay calm, think clearly, and find that hard moments pass much faster.",
      "bn": "খেলায় হেরে গেছ? প্রিয় খেলনাটা ভেঙে গেছে? অপেক্ষা খুব লম্বা লাগছে? একটা গভীর শ্বাস নাও আর বলো 'আলহামদুলিল্লাহ।' কুরআন আমাদের শেখায় ধৈর্য ও নামাজের মাধ্যমে সাহায্য চাইতে, আর ওয়াদা করে — আল্লাহ ধৈর্যশীলদের সাথে আছেন। ধৈর্য মানে দুঃখ পাওয়া নিষেধ নয় — মানে হলো চিৎকার না করা, জিনিস ছুঁড়ে না মারা, হাল না ছাড়া। ধৈর্যশীল মন শান্ত থাকে, পরিষ্কার ভাবতে পারে, আর দেখে — কঠিন সময়টা অনেক তাড়াতাড়ি কেটে যায়।"
    },
    "arabic": "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    "ref": "Quran 2:153"
  },
  {
    "id": "say-sorry-forgive",
    "title": {
      "en": "Say Sorry — and Forgive Others",
      "bn": "'সরি' বলো — আর অন্যদের ক্ষমা করো"
    },
    "body": {
      "en": "Everyone makes mistakes — bumping a friend, breaking something, saying an unkind word. When it happens, be brave: look at the person and say, 'I'm sorry, please forgive me.' That is strength, not weakness. And when someone says sorry to you, forgive them with a smile. The Quran teaches us to pardon and overlook, and asks: would you not love for Allah to forgive you? Forgive others, and Allah's forgiveness comes closer to you.",
      "bn": "ভুল সবারই হয় — বন্ধুর গায়ে ধাক্কা লাগা, কিছু ভেঙে ফেলা, কড়া কথা বলে ফেলা। এমন হলে সাহসী হও: মানুষটির দিকে তাকিয়ে বলো, 'আমি দুঃখিত, আমাকে ক্ষমা করো।' এটা দুর্বলতা নয় — শক্তি। আর কেউ তোমাকে 'সরি' বললে হাসিমুখে ক্ষমা করে দাও। কুরআন আমাদের ক্ষমা করতে ও উদারভাবে এড়িয়ে যেতে শেখায়, আর জিজ্ঞেস করে: তুমি কি চাও না আল্লাহ তোমাকে ক্ষমা করুন? অন্যকে ক্ষমা করো — আল্লাহর ক্ষমা তোমার আরও কাছে আসবে।"
    },
    "arabic": "وَلْيَعْفُوا وَلْيَصْفَحُوا",
    "ref": "Quran 24:22"
  },
  {
    "id": "no-mocking",
    "title": {
      "en": "Don't Make Fun of Anyone",
      "bn": "কাউকে নিয়ে ঠাট্টা কোরো না"
    },
    "body": {
      "en": "Never laugh at how someone looks, talks, walks, or what they wear. Never call people hurtful nicknames. The Quran clearly says: let no people ridicule other people — perhaps they are better than you! The boy or girl everyone teases might be more beloved to Allah than anyone in the class. Jokes that make everyone laugh together are fine; jokes that make one person cry are not jokes at all. Use your tongue to make friends, not wounds.",
      "bn": "কারো চেহারা, কথা বলা, হাঁটা বা পোশাক নিয়ে কখনো হেসো না। কাউকে কষ্ট দেওয়া নাম ধরে ডেকো না। কুরআন স্পষ্ট বলে: কোনো দল যেন অন্য দলকে বিদ্রূপ না করে — হয়তো তারাই তোমাদের চেয়ে ভালো! যে ছেলে বা মেয়েটিকে সবাই খেপায়, সে হয়তো আল্লাহর কাছে ক্লাসের সবার চেয়ে প্রিয়। যে মজায় সবাই একসাথে হাসে তা ঠিক আছে; কিন্তু যে মজায় একজন কাঁদে, সেটা আসলে মজা-ই নয়। জিভ দিয়ে বন্ধু বানাও, ক্ষত নয়।"
    },
    "arabic": "لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ",
    "ref": "Quran 49:11"
  },
  {
    "id": "speak-gently",
    "title": {
      "en": "Speak Kindly and Softly",
      "bn": "সুন্দর ও নরম করে কথা বলো"
    },
    "body": {
      "en": "Words are like seeds: kind words grow friendship, harsh words grow hurt. The Quran commands us to 'speak good words to people' — to parents, teachers, friends, shopkeepers, everyone. It also teaches us to lower our voice, for the harshest of sounds is the braying of a donkey! So no shouting indoors, no interrupting, no rude words. Try saying 'please,' 'thank you,' and 'may I' every day, in a soft voice, with a smile — and watch how people love talking to you.",
      "bn": "কথা হলো বীজের মতো: ভালো কথায় বন্ধুত্ব জন্মায়, কড়া কথায় কষ্ট। কুরআন আমাদের আদেশ দেয় 'মানুষের সাথে সুন্দর কথা বলো' — বাবা-মা, শিক্ষক, বন্ধু, দোকানদার — সবার সাথে। আরও শেখায় গলার স্বর নিচু রাখতে — কেননা সবচেয়ে কর্কশ আওয়াজ গাধার ডাক! তাই ঘরে চিৎকার নয়, কথার মাঝে বাধা নয়, অভদ্র শব্দ নয়। প্রতিদিন নরম গলায়, হাসিমুখে 'দয়া করে', 'ধন্যবাদ', 'আমি কি পারি?' বলার অভ্যাস করো — দেখবে মানুষ তোমার সাথে কথা বলতে কত ভালোবাসে।"
    },
    "arabic": "وَقُولُوا لِلنَّاسِ حُسْنًا",
    "ref": "Quran 2:83"
  },
  {
    "id": "control-anger",
    "title": {
      "en": "Swallow Your Anger",
      "bn": "রাগ গিলে ফেলো"
    },
    "body": {
      "en": "When someone takes your seat, ruins your drawing, or blames you unfairly, a hot feeling rises inside — that is anger. The Quran praises those 'who restrain anger and pardon people,' and says Allah loves such doers of good. So when anger comes: stop, keep quiet for a moment, and breathe. Walk away if you need to, or sit down and drink some water. Anger is like fire — if you do not feed it, it goes out. The strongest kid is not the one who hits hardest, but the one who stays calm.",
      "bn": "কেউ তোমার জায়গা নিয়ে নিলে, আঁকা ছবিটা নষ্ট করলে বা অন্যায়ভাবে দোষ দিলে ভেতরে একটা গরম অনুভূতি ওঠে — সেটাই রাগ। কুরআন তাদের প্রশংসা করে 'যারা রাগ দমন করে এবং মানুষকে ক্ষমা করে', আর বলে আল্লাহ এমন সৎকর্মশীলদের ভালোবাসেন। তাই রাগ এলে: থামো, এক মুহূর্ত চুপ থাকো, শ্বাস নাও। দরকার হলে সরে যাও, বা বসে একটু পানি খাও। রাগ আগুনের মতো — ইন্ধন না দিলে নিভে যায়। সবচেয়ে শক্তিশালী সেই নয় যে সবচেয়ে জোরে মারে, বরং সে-ই যে শান্ত থাকতে পারে।"
    },
    "arabic": "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
    "ref": "Quran 3:134"
  },
  {
    "id": "say-inshallah",
    "title": {
      "en": "Say Insha'Allah for Tomorrow",
      "bn": "আগামীর কথায় বলো 'ইনশাআল্লাহ'"
    },
    "body": {
      "en": "Planning to visit grandma tomorrow? Going to finish your homework tonight? Add three beautiful words: 'Insha'Allah' — if Allah wills. The Quran teaches us never to say 'I will surely do that tomorrow' without adding 'if Allah wills,' because tomorrow belongs to Allah, not to us. Saying Insha'Allah is not an excuse to be lazy — you still try your very best. It simply means: 'I will do my part, and I trust Allah with the rest.'",
      "bn": "কাল দাদু-নানুর বাসায় যাওয়ার প্ল্যান? আজ রাতে হোমওয়ার্ক শেষ করবে? সাথে তিনটি সুন্দর শব্দ যোগ করো: 'ইনশাআল্লাহ' — আল্লাহ চাইলে। কুরআন শেখায়, 'আমি কালকে অবশ্যই এটা করব' — এ কথা কখনো 'ইনশাআল্লাহ' না বলে বোলো না, কারণ আগামীকাল আল্লাহর হাতে, আমাদের হাতে নয়। 'ইনশাআল্লাহ' বলা অলসতার অজুহাত নয় — নিজের সেরা চেষ্টাটা ঠিকই করবে। এর মানে শুধু: 'আমার কাজটুকু আমি করব, বাকিটা আল্লাহর উপর ভরসা।'"
    },
    "arabic": "إِلَّا أَن يَشَاءَ اللَّهُ",
    "ref": "Quran 18:23-24"
  },
  {
    "id": "say-alhamdulillah",
    "title": {
      "en": "Say Alhamdulillah for Everything",
      "bn": "সবকিছুর জন্য আলহামদুলিল্লাহ বলো"
    },
    "body": {
      "en": "Your eyes that read this, the breakfast you ate, the family who loves you — all gifts from Allah. Say 'Alhamdulillah' — all praise is for Allah — when you wake up, after you eat, when something good happens, even after a sneeze! The Quran gives us a wonderful promise from Allah: 'If you are grateful, I will surely increase you.' A thankful heart is a happy heart: it counts blessings instead of complaints, and Allah keeps adding more to count.",
      "bn": "যে চোখ দিয়ে এটা পড়ছ, সকালের যে নাশতা খেলে, যে পরিবার তোমাকে ভালোবাসে — সবই আল্লাহর উপহার। ঘুম থেকে উঠে, খাওয়ার পরে, ভালো কিছু ঘটলে, এমনকি হাঁচির পরেও বলো 'আলহামদুলিল্লাহ' — সব প্রশংসা আল্লাহর! কুরআনে আল্লাহ চমৎকার এক ওয়াদা দিয়েছেন: 'তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের বাড়িয়ে দেব।' কৃতজ্ঞ মন সুখী মন: সে অভিযোগ নয়, নিয়ামত গোনে — আর আল্লাহ গোনার জন্য আরও নিয়ামত বাড়িয়ে দিতে থাকেন।"
    },
    "arabic": "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    "ref": "Quran 14:7"
  },
  {
    "id": "ask-permission",
    "title": {
      "en": "Knock and Ask Before Entering",
      "bn": "ঢোকার আগে নক করো, অনুমতি নাও"
    },
    "body": {
      "en": "Before entering someone's home or a closed room — even your parents' or sibling's room — knock gently, say salaam, and wait to be welcomed. The Quran teaches us not to enter houses other than our own until we ask permission and greet the people inside. If no one answers, or someone says 'not now,' go back happily without getting upset. Asking permission shows respect: it tells others, 'your space and privacy matter to me.' The same manners apply to borrowing things — always ask first!",
      "bn": "কারো বাড়িতে বা বন্ধ ঘরে ঢোকার আগে — এমনকি বাবা-মা বা ভাই-বোনের ঘরেও — আস্তে নক করো, সালাম দাও, আর ডাকার অপেক্ষা করো। কুরআন শেখায়, অনুমতি না নিয়ে আর ভেতরের মানুষদের সালাম না দিয়ে নিজের ঘর ছাড়া অন্য ঘরে ঢুকো না। কেউ সাড়া না দিলে, বা কেউ বললে 'এখন নয়' — মন খারাপ না করে খুশি মনে ফিরে যাও। অনুমতি চাওয়া সম্মান দেখায়: এতে বোঝা যায়, 'তোমার জায়গা ও একান্ততা আমার কাছে গুরুত্বপূর্ণ।' জিনিস ধার নেওয়ার বেলায়ও একই আদব — আগে জিজ্ঞেস করো!"
    },
    "arabic": "حَتَّىٰ تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا",
    "ref": "Quran 24:27"
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QAIDA_LETTERS, QAIDA_HARAKAT, QAIDA_WORDS, KIDS_THEME_WORDS, KIDS_NUMBERS, KIDS_DUAS, KIDS_KALIMAS, KIDS_SURAHS, KIDS_STORIES, KIDS_ADAB };
}
