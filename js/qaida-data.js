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
    meaning_en: 'O Allah, You are the One who pardons, You love to pardon, so pardon me.',
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
    src: 'Bukhari 6403'
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
      bn: "অনেক অনেক দিন আগের কথা। আবরাহা নামে এক অহংকারী রাজা ছিল। সে ইয়েমেনে বিরাট এক উপাসনালয় বানাল। সে চাইত, মানুষ যেন মক্কার কাবায় যাওয়া বন্ধ করে দেয়। তাই বিশাল এক বাহিনী নিয়ে সে মক্কার দিকে রওনা দিল। সাথে ছিল 'মাহমুদ' নামের বিরাট এক হাতি। মক্কার লোকেরা ভীষণ ভয় পেয়ে গেল। কিন্তু আল্লাহ ছোট ছোট পাখি পাঠালেন, তাদের নাম আবাবিল। পাখিদের কাছে ছিল পোড়া মাটির ছোট ছোট পাথর। পাখিরা বাহিনীর উপর বৃষ্টির মতো পাথর ফেলল। যে সৈন্যের গায়ে পাথর লাগল, সে-ই মরে পড়ে রইল, পশুর চিবানো খড়ের মতো। হাতিটা মক্কার দিকে আর এক পা-ও এগোল না। কোনো মানুষের বাহিনী ছাড়াই আল্লাহ নিজের ঘর রক্ষা করলেন। এই আশ্চর্য ঘটনা ঘটেছিল সেই বছরেই, যে বছর নবী মুহাম্মাদ ﷺ জন্ম নেন। তাই বছরটার নাম হাতির বছর।"
    },
    moral: {
      en: "Allah alone protects what He loves. No army — however large — can harm those under Allah's care.",
      bn: "আল্লাহ যা ভালোবাসেন, তিনি একাই তা রক্ষা করেন। বাহিনী যত বড়ই হোক, আল্লাহ যাদের হেফাজত করেন, তাদের কোনো ক্ষতি করতে পারে না।"
    },
    refs: ['105:1-5']
  },
  {
    id: 'baby-ibrahim-cave',
    title:   { en: 'Baby Ibrahim in the Cave', bn: 'গুহায় ছোট্ট ইব্রাহীম' },
    summary: {
      en: "It is narrated in the stories of the prophets — not in the Quran or the authentic hadith — that when Prophet Ibrahim was born, the tyrant king Nimrod had ordered baby boys killed, and that Ibrahim's mother hid him in a small cave outside town, where Allah kept him safe. Only Allah knows the details of his childhood. What the Quran tells us is this: Ibrahim looked at a star, then the moon, then the sun, and told his people that each of them sets and disappears, so none of them could be Allah. With a clear heart he declared: 'I have turned my face to the Creator of the heavens and the earth.' Allah had guided him to the truth.",
      bn: "নবীদের কাহিনির বইয়ে একটা গল্প আছে, যা কুরআন বা সহিহ হাদিসে নেই। গল্পটা হলো: নবী ইব্রাহীম আলাইহিস সালাম যখন জন্মালেন, জালিম রাজা নমরূদ তখন ছেলে-শিশুদের মেরে ফেলার হুকুম দিয়েছিল। তাই ইব্রাহীমের মা তাঁকে শহরের বাইরে ছোট্ট এক গুহায় লুকিয়ে রাখলেন, আর আল্লাহ সেখানে তাঁকে নিরাপদে রাখলেন। তাঁর ছোটবেলার খুঁটিনাটি আল্লাহই ভালো জানেন। কুরআন আমাদের যা বলে, তা হলো এই: ইব্রাহীম একটা তারার দিকে তাকালেন, তারপর চাঁদের দিকে, তারপর সূর্যের দিকে। তিনি তাঁর জাতিকে বললেন, এরা সবাই একসময় ডুবে যায়, হারিয়ে যায়। তাই এদের কেউই আল্লাহ হতে পারে না। পরিষ্কার মনে তিনি ঘোষণা দিলেন, 'আমি মুখ ফেরালাম তাঁর দিকে, যিনি আকাশ আর পৃথিবী সৃষ্টি করেছেন।' আল্লাহই তাঁকে সত্যের পথ দেখিয়েছিলেন।"
    },
    moral: {
      en: "Allah is always with those who seek Him sincerely. He protects His beloved ones even in the darkest places.",
      bn: "যে মন থেকে আল্লাহকে খোঁজে, আল্লাহ সবসময় তার সাথে থাকেন। ঘোর অন্ধকারেও তিনি তাঁর প্রিয় বান্দাদের রক্ষা করেন।"
    },
    refs: ['6:76-79']
  },
  {
    id: 'sick-jewish-boy',
    title:   { en: "The Prophet's Visit to a Sick Boy", bn: 'অসুস্থ ছেলেকে দেখতে গেলেন নবীজি ﷺ' },
    summary: {
      en: "A young Jewish boy used to serve the Prophet Muhammad \u{FDFA}, running errands and helping around. The boy fell very ill, and the Prophet \u{FDFA} went to visit him — because he cared about every person, not just Muslims. He sat near the bed and spoke gently. Then he invited the boy to accept Islam. The boy looked at his father, who said, 'Obey Abu al-Qasim.' The boy declared: 'I bear witness that there is no god but Allah and that you are His Messenger.' His face lit up with happiness. When the Prophet \u{FDFA} left, he said: 'All praise is for Allah, who saved this boy from the Fire.' The Prophet taught us to be kind to everyone, regardless of faith.",
      bn: "এক ইহুদি ছেলে নবী মুহাম্মাদ ﷺ-এর কাজকর্ম করে দিত। এটা-ওটা এনে দিত, টুকটাক সাহায্য করত। একবার ছেলেটা খুব অসুস্থ হয়ে পড়ল। নবী ﷺ তাকে দেখতে গেলেন। কারণ তিনি শুধু মুসলিমদের নয়, সব মানুষের খোঁজ রাখতেন। তিনি বিছানার পাশে বসে নরম করে কথা বললেন। তারপর ছেলেটাকে ইসলামের দাওয়াত দিলেন। ছেলেটা তার বাবার দিকে তাকাল। বাবা বললেন, 'আবুল কাসিমের কথা মেনে নাও।' ছেলেটা বলল, 'আমি সাক্ষ্য দিচ্ছি, আল্লাহ ছাড়া কোনো মাবুদ নেই, আর আপনি তাঁর রাসূল।' খুশিতে তার মুখ ঝলমল করে উঠল। ফেরার সময় নবী ﷺ বললেন, 'সব প্রশংসা আল্লাহর, যিনি এই ছেলেকে জাহান্নামের আগুন থেকে বাঁচালেন।' নবী ﷺ আমাদের শিখিয়েছেন, যে ধর্মেরই হোক, সবার সাথে দয়ালু হতে।"
    },
    moral: {
      en: "Be kind to everyone. A gentle visit and a caring word can change a life forever.",
      bn: "সবার সাথে দয়ালু হও। অসুখের সময় কাউকে দেখতে যাওয়া আর একটু মায়ার কথা বলা কারো জীবন চিরদিনের জন্য বদলে দিতে পারে।"
    },
    refs: ['17:70'],
    src: 'Bukhari 1356'
  },
  {
    id: 'bilal-first-adhan',
    title:   { en: "Bilal's First Adhan", bn: 'বিলালের প্রথম আজান' },
    summary: {
      en: "Before the adhan, there was no way to call people to prayer at the right time. The Companions talked about it, and one night a Companion named Abdullah ibn Zayd (RA) saw the words of the adhan in a dream. When he told the Prophet \u{FDFA}, Umar (RA) said he had seen the very same dream. The Prophet \u{FDFA} said it was a true dream from Allah, and approved those words as the call to prayer. Then the Prophet \u{FDFA} chose Bilal ibn Rabah — a freed slave with a beautiful, powerful voice — as the first muezzin in Islam. Bilal climbed onto a high rooftop beside the mosque in Madinah, turned toward the qibla, and called out in a ringing voice: 'Allahu Akbar! Allahu Akbar!' His voice soared above the houses. People stopped and hurried to the mosque. Tears of joy ran down the Companions' faces. The same Bilal who had been tortured for believing in Allah was now calling the whole city to worship. That is the power of faith and patience.",
      bn: "আজান চালু হওয়ার আগে ঠিক সময়ে মানুষকে নামাজে ডাকার কোনো উপায় ছিল না। সাহাবিরা এ নিয়ে পরামর্শ করলেন। এক রাতে আব্দুল্লাহ ইবনে যায়েদ (রাঃ) নামের এক সাহাবি স্বপ্নে আজানের কথাগুলো দেখলেন। তিনি নবী ﷺ-কে স্বপ্নের কথা জানালেন। তখন উমর (রাঃ) বললেন, তিনিও হুবহু একই স্বপ্ন দেখেছেন। নবী ﷺ বললেন, এটা আল্লাহর পক্ষ থেকে সত্য স্বপ্ন। তিনি ওই কথাগুলোকেই নামাজের ডাক হিসেবে মেনে নিলেন। তারপর নবী ﷺ ইসলামের প্রথম মুয়াজ্জিন হিসেবে বেছে নিলেন বিলাল ইবনে রাবাহকে। বিলাল একসময় দাস ছিলেন, পরে মুক্তি পেয়েছিলেন। তাঁর গলা ছিল যেমন সুন্দর, তেমনি জোরালো। মদিনায় মসজিদের পাশে এক উঁচু ছাদে উঠে তিনি কিবলার দিকে মুখ করলেন। তারপর গমগমে গলায় ডাক দিলেন, 'আল্লাহু আকবার! আল্লাহু আকবার!' তাঁর আওয়াজ বাড়িঘরের উপর দিয়ে ভেসে গেল। মানুষ যে যার কাজ থামিয়ে মসজিদের দিকে ছুটল। খুশিতে সাহাবিদের চোখ দিয়ে পানি গড়িয়ে পড়ল। আল্লাহর উপর ঈমান আনার জন্য যে বিলালের উপর একদিন কত অত্যাচার হয়েছিল, সেই বিলালই আজ পুরো শহরকে আল্লাহর ইবাদতে ডাকছেন। এটাই ঈমান আর ধৈর্যের শক্তি।"
    },
    moral: {
      en: "Patience through hardship leads to great honour. Never give up on your faith.",
      bn: "কষ্টে ধৈর্য ধরলে বড় সম্মান আসে। যতই কঠিন হোক, ঈমান ছেড়ো না।"
    },
    refs: ['2:238']
  },
  {
    id: 'anas-serving-prophet',
    title:   { en: 'Anas ibn Malik: Ten Years of Loving Service', bn: 'আনাস ইবনে মালিক: ভালোবেসে দশ বছরের খেদমত' },
    summary: {
      en: "When Anas ibn Malik was about ten years old, his mother Umm Sulaym brought him to the Prophet \u{FDFA} and said: 'O Messenger of Allah, here is my little son Anas — I have brought him to serve you. Please make du'a for him.' Anas served the Prophet \u{FDFA} for ten full years in Madinah. In all those years, the Prophet \u{FDFA} never once said 'uff' to Anas, never scolded him, and never asked 'Why did you do that?' or 'Why did you not do it?' Anas later said: 'The Messenger of Allah \u{FDFA} had the best character of all people.' The Prophet \u{FDFA} made du'a for Anas, asking Allah to increase his wealth and children and to bless him in them — and Anas lived to see his children and grandchildren number more than a hundred.",
      bn: "আনাস ইবনে মালিকের বয়স তখন দশের মতো। তাঁর মা উম্মু সুলাইম তাঁকে নবী ﷺ-এর কাছে নিয়ে এসে বললেন, 'হে আল্লাহর রাসূল, এ আমার ছোট্ট ছেলে আনাস। আপনার খেদমত করার জন্য ওকে নিয়ে এসেছি। ওর জন্য একটু দোয়া করে দিন।' আনাস মদিনায় পুরো দশ বছর নবী ﷺ-এর খেদমত করলেন। এই দশ বছরে নবী ﷺ একবারও আনাসকে 'উফ' বলেননি, বকা দেননি। কখনো জিজ্ঞেস করেননি, 'এটা কেন করলে?' বা 'ওটা কেন করলে না?' পরে আনাস বলতেন, 'আল্লাহর রাসূল ﷺ ছিলেন সব মানুষের মধ্যে সবচেয়ে সুন্দর চরিত্রের।' নবী ﷺ আনাসের জন্য দোয়া করেছিলেন, যেন আল্লাহ তাঁর সম্পদ আর সন্তান বাড়িয়ে দেন, আর তাতে বরকত দেন। আনাস বেঁচে থাকতেই দেখে গেছেন, তাঁর ছেলেমেয়ে আর নাতি-নাতনি মিলে একশোর বেশি।"
    },
    moral: {
      en: "The best people are the kindest to those who serve them. Treat everyone with patience and love.",
      bn: "সবচেয়ে ভালো মানুষ তারাই, যারা তাদের কাজের লোকদের সাথে সবচেয়ে বেশি দয়ালু। সবার সাথে ধৈর্য আর ভালোবাসা নিয়ে চলো।"
    },
    refs: ['33:21'],
    src: 'Bukhari 2768, Muslim 2309, 2310, 2481'
  },
  {
    id: 'talking-wolf',
    title:   { en: 'The Wolf Who Spoke to a Shepherd', bn: 'যে নেকড়ে রাখালের সাথে কথা বলেছিল' },
    summary: {
      en: "One morning after the prayer, the Prophet \u{FDFA} told his Companions a story. A wolf attacked a shepherd's flock and took one of his sheep. The shepherd chased it and snatched the sheep back. Then something extraordinary happened — the wolf turned and spoke: 'You have saved it from me — but who will guard it on the day of the wild beasts, when it has no shepherd but me?' The people were amazed and said: 'Subhanallah! A wolf that speaks!' The Prophet \u{FDFA} said: 'I believe it — and so do Abu Bakr and Umar,' even though neither of them was there. The Companions learned that what Allah's Messenger tells us is true, however amazing it sounds.",
      bn: "একদিন ফজরের নামাজের পর নবী ﷺ সাহাবিদের একটা ঘটনা শোনালেন। এক নেকড়ে এক রাখালের ভেড়ার পালে হামলা করে একটা ভেড়া নিয়ে গেল। রাখাল পেছনে ছুটে গিয়ে ভেড়াটা ছিনিয়ে আনল। তখন এক আশ্চর্য ঘটনা ঘটল। নেকড়েটা ঘুরে দাঁড়িয়ে কথা বলে উঠল, 'আজ তো তুমি আমার কাছ থেকে একে বাঁচালে। কিন্তু হিংস্র পশুদের দিনে কে একে পাহারা দেবে, যেদিন আমি ছাড়া এর আর কোনো রাখাল থাকবে না?' লোকেরা অবাক হয়ে বলল, 'সুবহানাল্লাহ! নেকড়ে কথা বলে!' নবী ﷺ বললেন, 'আমি এটা বিশ্বাস করি। আবু বকর আর উমরও বিশ্বাস করেন।' অথচ তাঁরা দুজন তখন সেখানে ছিলেন না। সাহাবিরা শিখলেন, আল্লাহর রাসূল যা বলেন তা সত্য, শুনতে যত আশ্চর্যই লাগুক।"
    },
    moral: {
      en: "Signs of truth come from unexpected places. Keep your faith strong and prepare for the meeting with Allah.",
      bn: "সত্যের নিদর্শন এমন জায়গা থেকেও আসে, যা আমরা ভাবিও না। ঈমান মজবুত রাখো, আর আল্লাহর সাথে দেখা হওয়ার দিনের জন্য তৈরি থাকো।"
    },
    refs: ['21:107'],
    src: 'Bukhari 3471, Muslim 2388'
  },
  {
    id: 'abu-umayr-bird',
    title:   { en: "Abu Umayr and His Little Bird", bn: 'আবু উমায়ের আর তার ছোট্ট পাখি' },
    summary: {
      en: "Anas ibn Malik had a little brother called Abu Umayr. He had a tiny pet bird — called a nughayr, a small bird like a sparrow — that he loved dearly and played with every day. The Prophet \u{FDFA} often visited their home and was always gentle and playful with little Abu Umayr. One day the little bird died, and Abu Umayr was heartbroken. When the Prophet \u{FDFA} came and saw him sad, he asked what was wrong, and they told him the bird had died. So he said kindly: 'O Abu Umayr — what happened to the nughayr?' He talked with the sad boy about his bird to comfort him, showing that even the small grief of a child matters in Islam. The Prophet \u{FDFA} was not just a great leader — he was warm, playful, and deeply caring to every child.",
      bn: "আনাস ইবনে মালিকের এক ছোট ভাই ছিল, নাম আবু উমায়ের। তার ছিল একটা ছোট্ট পোষা পাখি। আরবিতে এমন পাখিকে বলে নুগায়র, দেখতে চড়ুইয়ের মতো ছোট। আবু উমায়ের পাখিটাকে খুব ভালোবাসত, রোজ তার সাথে খেলত। নবী ﷺ প্রায়ই ওদের বাসায় আসতেন। ছোট্ট আবু উমায়েরের সাথে তিনি সবসময় আদর করে কথা বলতেন, মজা করতেন। একদিন পাখিটা মরে গেল। আবু উমায়েরের মন একেবারে ভেঙে গেল। নবী ﷺ এসে তাকে মন খারাপ করে থাকতে দেখে জানতে চাইলেন, কী হয়েছে। সবাই বলল, পাখিটা মারা গেছে। তখন তিনি আদর করে বললেন, 'ও আবু উমায়ের, নুগায়রের কী হলো?' দুঃখী ছেলেটার মন ভালো করতে তিনি তার সাথে পাখিটার গল্প করলেন। এতে বোঝা যায়, ইসলামে একটা শিশুর ছোট্ট দুঃখেরও দাম আছে। নবী ﷺ শুধু একজন মহান নেতা ছিলেন না। তিনি ছিলেন হাসিখুশি, আর প্রতিটি শিশুকে গভীর মমতায় আগলে রাখতেন।"
    },
    moral: {
      en: "No feeling is too small to matter. The Prophet \u{FDFA} noticed and cared for every child's joy and sadness.",
      bn: "কোনো অনুভূতিই এত ছোট নয় যে তার দাম নেই। নবী ﷺ প্রতিটি শিশুর খুশি আর দুঃখ খেয়াল করতেন, যত্ন নিতেন।"
    },
    refs: ['21:107'],
    src: 'Abu Dawud 4969, Bukhari 6129'
  },
  {
    id: 'hasan-husayn-sujud',
    title:   { en: "Hasan and Husayn on the Prophet's Back", bn: 'হাসান-হুসাইন নবীজির পিঠে' },
    summary: {
      en: "The Prophet \u{FDFA} loved his grandchildren Hasan and Husayn with all his heart. One day, while he was leading the prayer and had gone into sujud (prostration), little Hasan or Husayn climbed onto his blessed back. The Prophet \u{FDFA} stayed in sujud longer than usual — so long that the Companions thought something was wrong. When prayer finished, they asked why the sujud was so long. The Prophet \u{FDFA} smiled and said: 'My grandson was riding on my back, and I did not want to rush him.' He also said: 'Hasan and Husayn are the masters of the youth of Paradise.' Showing love to children — even during worship — is a sign of a good heart.",
      bn: "নবী ﷺ তাঁর নাতি হাসান আর হুসাইনকে মন-প্রাণ দিয়ে ভালোবাসতেন। একদিন তিনি নামাজ পড়াচ্ছিলেন। যেই সেজদায় গেলেন, অমনি ছোট্ট হাসান বা হুসাইন তাঁর পিঠে চড়ে বসলেন। নবী ﷺ অন্য দিনের চেয়ে অনেক বেশি সময় সেজদায় রইলেন। এত বেশি যে সাহাবিরা ভাবলেন, কিছু একটা হয়েছে। নামাজ শেষে তাঁরা জিজ্ঞেস করলেন, সেজদা এত লম্বা হলো কেন? নবী ﷺ হেসে বললেন, 'আমার নাতি আমার পিঠে চড়েছিল। আমি তাকে তাড়াহুড়া করাতে চাইনি।' তিনি আরও বলেছেন, 'হাসান আর হুসাইন জান্নাতের যুবকদের সরদার।' শিশুদের ভালোবাসা দেখানো, এমনকি ইবাদতের সময়ও, ভালো মনের পরিচয়।"
    },
    moral: {
      en: "Be gentle and patient with children. Love for family is part of true worship.",
      bn: "শিশুদের সাথে নরম আর ধৈর্যশীল হও। পরিবারকে ভালোবাসাও সত্যিকারের ইবাদতের অংশ।"
    },
    refs: ['21:107'],
    src: "Nasa'i 1141"
  },
  {
    id: 'umm-sulaym-patience',
    title:   { en: "Umm Sulaym's Beautiful Patience", bn: 'উম্মু সুলাইমের সুন্দর ধৈর্য' },
    summary: {
      en: "Umm Sulaym was a wise and faithful woman among the Companions. One day her young son passed away while her husband Abu Talha was out. She calmly waited for him to return. When Abu Talha came home tired, she served him dinner, then asked gently: 'If someone lent you something precious and asked for it back, would you be sad to return it?' He said: 'Of course not — I would return it willingly.' She said quietly: 'Then know that Allah lent us our son, and tonight He asked for him back.' Abu Talha was overcome with sadness, but both turned to Allah in patience. The Prophet \u{FDFA} prayed for blessing on them, and Allah gave them another son, Abdullah — and Abdullah's own children all grew up to be readers of the Quran.",
      bn: "উম্মু সুলাইম ছিলেন সাহাবিদের মধ্যে একজন বুদ্ধিমতী আর ঈমানদার নারী। একদিন তাঁর ছোট ছেলেটি মারা গেল। স্বামী আবু তালহা তখন বাড়িতে ছিলেন না। উম্মু সুলাইম শান্ত হয়ে তাঁর ফেরার অপেক্ষা করলেন। আবু তালহা ক্লান্ত হয়ে বাড়ি ফিরলে তিনি তাঁকে রাতের খাবার খেতে দিলেন। তারপর নরম গলায় জিজ্ঞেস করলেন, 'কেউ যদি আপনাকে দামি কোনো জিনিস ধার দেয়, তারপর ফেরত চায়, তাহলে ফেরত দিতে কি আপনার কষ্ট হবে?' তিনি বললেন, 'কখনোই না। আমি খুশি মনেই ফেরত দেব।' উম্মু সুলাইম আস্তে করে বললেন, 'তাহলে জেনে রাখুন, আল্লাহ আমাদের ছেলেকে আমাদের কাছে ধার দিয়েছিলেন। আজ রাতে তিনি তাকে ফেরত নিয়ে গেছেন।' আবু তালহা দুঃখে ভেঙে পড়লেন। কিন্তু দুজনেই ধৈর্য ধরে আল্লাহর দিকে ফিরলেন। নবী ﷺ তাঁদের জন্য বরকতের দোয়া করলেন। আল্লাহ তাঁদের আরেকটি ছেলে দিলেন, নাম আব্দুল্লাহ। আর আব্দুল্লাহর ছেলেমেয়েরা সবাই বড় হয়ে কুরআনের কারী হলো।"
    },
    moral: {
      en: "Everything we have belongs to Allah. Returning what He lends us — with patience and trust — brings His greater blessings.",
      bn: "আমাদের যা কিছু আছে, সবই আল্লাহর। তিনি যা ধার দিয়েছেন, ধৈর্য আর ভরসা নিয়ে তা ফিরিয়ে দিলে তিনি আরও বড় বরকত দেন।"
    },
    refs: ['2:156', '39:10'],
    src: 'Muslim 2144, Bukhari 1301'
  },
  {
    id: 'three-men-cave',
    title:   { en: 'Three Men Trapped in a Cave', bn: 'গুহায় আটকে পড়া তিনজন' },
    summary: {
      en: "Three men were traveling in the mountains when a huge boulder rolled down and sealed the entrance to their cave. They were trapped with no way out. They decided to pray to Allah by mentioning the best deeds they had each done. The first said: 'O Allah, I always honoured my parents before my own family.' The boulder moved a little. The second said: 'O Allah, I loved someone, but when she asked me to stay away for Allah's sake, I obeyed.' The boulder moved more. The third said: 'O Allah, a worker once left without taking his wage. I invested it for him until it grew into whole herds, and when he came back years later, I gave him all of it and kept nothing.' The boulder rolled away completely and they walked free. Allah answered them through their sincere good deeds.",
      bn: "তিনজন লোক পাহাড়ি পথে চলছিল। তারা যে গুহায় ছিল, হঠাৎ বিশাল এক পাথর গড়িয়ে এসে তার মুখ বন্ধ করে দিল। বের হওয়ার আর কোনো পথ রইল না। তারা ঠিক করল, প্রত্যেকে নিজের জীবনের সবচেয়ে ভালো আমলের কথা বলে আল্লাহর কাছে দোয়া করবে। প্রথমজন বলল, 'হে আল্লাহ, আমি সবসময় নিজের পরিবারের আগে বাবা-মায়ের খেদমত করেছি।' পাথরটা একটু সরে গেল। দ্বিতীয়জন বলল, 'হে আল্লাহ, আমি একজনকে ভালোবাসতাম। কিন্তু সে যখন আল্লাহর ওয়াস্তে আমাকে দূরে থাকতে বলল, আমি তার কথা মেনে নিলাম।' পাথরটা আরও সরে গেল। তৃতীয়জন বলল, 'হে আল্লাহ, একবার এক মজুর তার মজুরি না নিয়েই চলে গিয়েছিল। আমি তার টাকাটা খাটিয়ে বাড়াতে থাকলাম। বাড়তে বাড়তে তা পশুর পুরো পাল হয়ে গেল। বহু বছর পর সে ফিরে এলে আমি সবটাই তাকে দিয়ে দিলাম, কিছুই নিজের কাছে রাখিনি।' তখন পাথরটা পুরোপুরি সরে গেল, আর তারা বেরিয়ে এল। তাদের খাঁটি মনের ভালো আমলের উসিলায় আল্লাহ তাদের দোয়া কবুল করলেন।"
    },
    moral: {
      en: "Sincerely good deeds — kindness to parents, purity, and honesty — become your lifeline in the darkest moments.",
      bn: "খাঁটি মনের ভালো আমল, যেমন বাবা-মায়ের প্রতি দয়া, নিজেকে পবিত্র রাখা আর সততা, সবচেয়ে কঠিন বিপদের সময় তোমাকে বাঁচিয়ে দেয়।"
    },
    refs: ['29:69'],
    src: 'Bukhari 2272, Muslim 2743'
  },
  {
    id: 'uways-mother',
    title:   { en: 'The Man Who Carried His Mother Around the Kaaba', bn: 'যে লোকটি মাকে পিঠে নিয়ে কাবা তাওয়াফ করেছিল' },
    summary: {
      en: "A man from Yemen came to Makkah and walked around the Kaaba (tawaf) carrying his mother on his back, step by step, never complaining. Then he asked the Prophet's companion Ibn Umar, who was there: 'Do you think I have repaid her?' Ibn Umar replied: 'No — not even a single groan of her pain when she gave birth to you.' The man was humbled. He understood that a mother's sacrifice can never be fully repaid. But Allah sees every act of love and devotion — nothing, not even a drop of sweat, goes unrewarded with Him.",
      bn: "ইয়েমেন থেকে এক লোক মক্কায় এল। সে তার মাকে পিঠে নিয়ে কাবার চারপাশে তাওয়াফ করল। এক পা এক পা করে হাঁটল, একবারও অভিযোগ করল না। সেখানে ছিলেন নবী ﷺ-এর সাহাবি ইবনে উমার (রাঃ)। লোকটি তাঁকে জিজ্ঞেস করল, 'আপনার কী মনে হয়, আমি কি মায়ের ঋণ শোধ করতে পেরেছি?' ইবনে উমার বললেন, 'না। তোমাকে জন্ম দেওয়ার সময় ব্যথায় তোমার মা একবার যে কাতরে উঠেছিলেন, তার ঋণও শোধ হয়নি।' লোকটির মাথা নিচু হয়ে গেল। সে বুঝল, মায়ের ত্যাগের ঋণ কখনো পুরোপুরি শোধ করা যায় না। তবে ভালোবেসে করা প্রতিটি কাজ আল্লাহ দেখেন। তাঁর কাছে কোনো কিছুই বৃথা যায় না, এক ফোঁটা ঘামও না।"
    },
    moral: {
      en: "Your parents' love can never be fully repaid — but every act of kindness toward them is precious in Allah's sight.",
      bn: "বাবা-মায়ের ভালোবাসার ঋণ কখনো পুরোপুরি শোধ হয় না। কিন্তু তাঁদের জন্য করা প্রতিটি ভালো কাজ আল্লাহর কাছে অনেক দামি।"
    },
    refs: ['17:23-24', '31:14'],
    src: 'al-Adab al-Mufrad 11'
  },
  {
    id: 'ant-sulayman',
    title:   { en: 'The Ant Who Warned Her Friends', bn: 'যে পিঁপড়া বন্ধুদের সাবধান করেছিল' },
    summary: {
      en: "Prophet Sulayman was taught by Allah the language of the birds, and he could even understand an ant. One day he was marching with his great army — jinn, people and birds — through a valley. As they approached the Valley of the Ants, a small ant noticed the army and called out: 'O ants! Enter your homes quickly, so that Sulayman and his army do not crush you without even knowing it!' The ant was worried about her community, not about herself. Prophet Sulayman heard her voice, smiled, and immediately stopped his army. He raised his hands to Allah and prayed: 'My Lord, grant me the ability to be grateful for Your blessings and to do righteous deeds that please You.' A mighty king — yet humble and grateful.",
      bn: "আল্লাহ নবী সুলাইমান আলাইহিস সালামকে পাখির ভাষা শিখিয়েছিলেন। এমনকি তিনি পিঁপড়ার কথাও বুঝতে পারতেন। একদিন তিনি তাঁর বিশাল বাহিনী নিয়ে একটা উপত্যকা পার হচ্ছিলেন। সেই বাহিনীতে ছিল জিন, মানুষ আর পাখি। তাঁরা যখন পিঁপড়াদের উপত্যকার কাছে এলেন, একটা ছোট্ট পিঁপড়া বাহিনীটাকে দেখে ফেলল। সে চিৎকার করে বলল, 'ও পিঁপড়ারা! তাড়াতাড়ি নিজের নিজের ঘরে ঢুকে পড়ো। নইলে সুলাইমান আর তাঁর বাহিনী না জেনেই তোমাদের পিষে ফেলবে!' পিঁপড়াটা নিজের কথা ভাবেনি, ভেবেছিল সবার কথা। নবী সুলাইমান তার কথা শুনে হাসলেন, আর সাথে সাথে বাহিনী থামিয়ে দিলেন। তিনি আল্লাহর কাছে হাত তুলে দোয়া করলেন, 'হে আমার রব, আমাকে তৌফিক দাও, যেন তোমার নিয়ামতের শুকরিয়া আদায় করতে পারি, আর এমন নেক কাজ করতে পারি যাতে তুমি খুশি হও।' এত বড় শক্তিশালী রাজা, তবু কত বিনয়ী, কত কৃতজ্ঞ!"
    },
    moral: {
      en: "Even the smallest creature matters to Allah. Look out for others, and always be grateful — no matter how great you become.",
      bn: "আল্লাহর কাছে সবচেয়ে ছোট প্রাণীটারও দাম আছে। অন্যদের খেয়াল রাখো। আর যত বড়ই হও, সবসময় কৃতজ্ঞ থেকো।"
    },
    refs: ['27:18-19']
  },
  {
    id: 'yunus-whale',
    title:   { en: 'Yunus in the Belly of the Whale', bn: 'ইউনুস মাছের পেটে' },
    summary: {
      en: "Prophet Yunus was sent to a city to call people to Allah, but when many refused to listen, he grew frustrated and left without Allah's permission. He boarded a ship, and in the middle of the sea a great storm arose. The sailors drew lots to decide who should be thrown overboard — and the lot fell on Yunus. A great whale swallowed him whole. Deep inside the whale, inside the sea, inside the darkness of the night, Yunus called out: 'La ilaha illa Anta, Subhanaka, inni kuntu mina-dh-dhalimin!' — 'There is no god but You; glory be to You; I was among the wrongdoers.' Allah heard his prayer immediately. The whale released him onto the shore, he recovered, and his entire city believed.",
      bn: "আল্লাহ নবী ইউনুস আলাইহিস সালামকে এক শহরে পাঠালেন, মানুষকে আল্লাহর দিকে ডাকার জন্য। কিন্তু অনেকেই তাঁর কথা শুনল না। তিনি বিরক্ত হয়ে আল্লাহর অনুমতি ছাড়াই শহর ছেড়ে চলে গেলেন। তিনি একটা জাহাজে উঠলেন। মাঝসমুদ্রে ভীষণ ঝড় উঠল। কাকে সমুদ্রে ফেলা হবে, তা ঠিক করতে নাবিকেরা লটারি করল। লটারিতে নাম উঠল ইউনুসের। বিশাল এক মাছ তাঁকে আস্ত গিলে ফেলল। মাছের পেটের ভেতরে, সমুদ্রের গভীরে, রাতের অন্ধকারে ইউনুস ডাকলেন, 'লা ইলাহা ইল্লা আন্তা সুবহানাকা ইন্নি কুন্তু মিনাজ-জালিমিন!' মানে, 'তুমি ছাড়া কোনো মাবুদ নেই, তুমি পবিত্র, আমিই অন্যায়কারীদের একজন ছিলাম।' আল্লাহ সাথে সাথে তাঁর দোয়া শুনলেন। মাছটা তাঁকে তীরে ফেলে দিল। ইউনুস সুস্থ হয়ে উঠলেন, আর তাঁর শহরের সব মানুষ ঈমান আনল।"
    },
    moral: {
      en: "No matter how deep the darkness, one sincere call to Allah is enough. Never despair of Allah's mercy.",
      bn: "অন্ধকার যতই গভীর হোক, আল্লাহর কাছে একটি আন্তরিক ডাকই যথেষ্ট। কখনো আল্লাহর রহমত থেকে নিরাশ হয়ো না।"
    },
    refs: ['21:87-88', '37:139-148']
  },
  {
    id: 'ibrahim-fire',
    title:   { en: 'Ibrahim and the Fire That Could Not Burn', bn: 'ইব্রাহীম আর যে আগুন পোড়াতে পারেনি' },
    summary: {
      en: "Prophet Ibrahim grew up surrounded by stone idols. He knew in his heart they were just rocks and could help no one. One day, while his people were away, he broke all the idols in the temple except the largest. When the people accused him, he cleverly said: 'Rather, this biggest one did it — ask them, if they can speak!' They said: 'You know they cannot speak!' He replied: 'Then why do you worship, instead of Allah, things that can neither help nor harm you?' Furious, his people cried: 'Burn him!' They built a huge fire, and Ibrahim was thrown into it. But Allah commanded: 'O fire, be cool and safe for Ibrahim!' The fire did not burn him at all. He walked out completely unharmed, glorifying Allah.",
      bn: "নবী ইব্রাহীম বড় হয়েছিলেন পাথরের মূর্তির মাঝে। তিনি মনে মনে জানতেন, এগুলো শুধুই পাথর, কাউকে সাহায্য করতে পারে না। একদিন লোকজন যখন বাইরে গেল, তিনি মন্দিরের সব মূর্তি ভেঙে ফেললেন, শুধু সবচেয়ে বড়টা রেখে দিলেন। লোকেরা তাঁকে দোষ দিলে তিনি বুদ্ধি করে বললেন, 'না, এই বড়টাই এ কাজ করেছে। ওদেরই জিজ্ঞেস করো, যদি ওরা কথা বলতে পারে!' তারা বলল, 'তুমি তো জানো, এরা কথা বলতে পারে না।' তিনি বললেন, 'তাহলে আল্লাহকে ছেড়ে তোমরা এমন জিনিসের পূজা করো কেন, যা তোমাদের কোনো উপকারও করতে পারে না, ক্ষতিও না?' লোকেরা ভীষণ রেগে চিৎকার করল, 'ওকে পুড়িয়ে মারো!' তারা বিশাল এক আগুন জ্বালাল, তারপর ইব্রাহীমকে তাতে ছুঁড়ে ফেলল। কিন্তু আল্লাহ হুকুম দিলেন, 'হে আগুন! ইব্রাহীমের জন্য ঠান্ডা আর নিরাপদ হয়ে যাও!' আগুন তাঁকে একটুও পোড়াল না। তিনি আল্লাহর প্রশংসা করতে করতে একেবারে অক্ষত হয়ে বেরিয়ে এলেন।"
    },
    moral: {
      en: "When you stand firm for the truth and trust Allah completely, even fire cannot touch you.",
      bn: "সত্যের উপর অটল থাকলে আর আল্লাহর উপর পুরো ভরসা রাখলে আগুনও তোমাকে ছুঁতে পারে না।"
    },
    refs: ['21:68-69']
  },
  {
    id: 'ashabul-kahf',
    title:   { en: 'The Sleepers of the Cave (Ashab al-Kahf)', bn: 'গুহার ঘুমন্ত বন্ধুরা (আসহাবে কাহফ)' },
    summary: {
      en: "Long ago, a group of faithful young men lived in a city where a cruel king forced everyone to worship false gods. They refused. They fled into the mountains and found a cave to hide in. They prayed: 'Our Lord, grant us Your mercy and guide us to what is right.' Allah caused them to fall into a deep miraculous sleep. When they woke up, they thought they had slept for just a day or part of a day — but Allah had kept them asleep for three hundred and nine years! It is reported that the city had completely changed; the evil king was long gone, and the people now believed in Allah. Their dog had slept faithfully at the entrance all along. Faith in Allah is more powerful than any tyrant.",
      bn: "অনেক অনেক দিন আগে এক শহরে কয়েকজন ঈমানদার যুবক থাকত। সেখানকার জালিম রাজা সবাইকে মিথ্যা দেবদেবীর পূজা করতে বাধ্য করত। যুবকেরা রাজি হলো না। তারা পালিয়ে পাহাড়ে চলে গেল, আর লুকানোর জন্য একটা গুহা খুঁজে পেল। তারা দোয়া করল, 'হে আমাদের রব, আমাদের তোমার রহমত দাও, আর আমাদের সঠিক পথ দেখাও।' আল্লাহ তাদের আশ্চর্য এক গভীর ঘুমে ঘুম পাড়িয়ে দিলেন। জেগে উঠে তারা ভাবল, হয়তো এক দিন বা এক দিনের কিছু সময় ঘুমিয়েছে। অথচ আল্লাহ তাদের ঘুম পাড়িয়ে রেখেছিলেন তিনশো নয় বছর! বর্ণনায় আছে, ততদিনে শহর পুরো বদলে গিয়েছিল। জালিম রাজা কবেই মরে গেছে, আর মানুষ এখন আল্লাহর উপর ঈমান এনেছে। এত বছর ধরে তাদের কুকুরটা বিশ্বস্ত হয়ে গুহার মুখে শুয়ে ছিল। আল্লাহর উপর ঈমান যেকোনো জালিমের চেয়ে বেশি শক্তিশালী।"
    },
    moral: {
      en: "Hold tightly to your faith even when the world pressures you. Allah protects sincere believers in ways beyond imagination.",
      bn: "দুনিয়া যতই চাপ দিক, ঈমান শক্ত করে ধরে রাখো। যারা খাঁটি মনে ঈমান আনে, আল্লাহ তাদের এমনভাবে রক্ষা করেন, যা আমরা কল্পনাও করতে পারি না।"
    },
    refs: ['18:9-10', '18:13-14']
  },
  {
    id: 'debt-son',
    title:   { en: "The Son Who Paid His Father's Debt", bn: "যে ছেলে বাবার ঋণ শোধ করে দিল" },
    summary: {
      en: "This is a teaching story, not a report from the Quran or Hadith. A man once died leaving behind debts he could not repay. His young son learned of this and resolved to help his father even from beyond the grave. He worked hard, saved every coin, and went to each of his father's creditors one by one — honestly declaring the debt and paying every single one. When the last debt was settled, the son made du'a: 'O Allah, this work was done for my father — accept it from him and ease his account.' The Prophet \u{FDFA} taught that debts must be taken seriously, and that children who do good on behalf of their parents earn reward for both of them. A good child is a parent's living legacy — even after death.",
      bn: "এটা একটা শিক্ষার গল্প। কুরআন বা হাদিসে এই ঘটনা নেই। এক লোক মারা গেলেন। রেখে গেলেন এমন কিছু ঋণ, যা তিনি শোধ করে যেতে পারেননি। তাঁর ছোট ছেলে এ কথা জানতে পারল। সে ঠিক করল, বাবা কবরে চলে গেলেও সে বাবাকে সাহায্য করবে। সে খুব খাটল, একটা একটা পয়সা জমাল। তারপর বাবা যাদের কাছে ঋণী ছিলেন, তাদের প্রত্যেকের কাছে একে একে গেল। সত্যি করে ঋণের কথা স্বীকার করল, আর সবার পাওনা শোধ করে দিল। শেষ ঋণটা শোধ হলে ছেলেটা দোয়া করল, 'হে আল্লাহ, এই কাজ আমি বাবার জন্য করেছি। তাঁর পক্ষ থেকে কবুল করো, আর তাঁর হিসাব সহজ করে দাও।' নবী ﷺ শিখিয়েছেন, ঋণের ব্যাপারটা হালকাভাবে নেওয়া যাবে না। তিনি আরও শিখিয়েছেন, সন্তান বাবা-মায়ের হয়ে ভালো কাজ করলে সন্তান আর বাবা-মা, দুজনেরই সওয়াব হয়। ভালো সন্তান মৃত্যুর পরেও বাবা-মায়ের রেখে যাওয়া জীবন্ত সম্পদ হয়ে থাকে।"
    },
    moral: {
      en: "Be honest about debts and keep your commitments. Good deeds done for your parents benefit them in the Hereafter too.",
      bn: "ঋণের ব্যাপারে সৎ থাকো, কাউকে কথা দিলে তা রাখো। বাবা-মায়ের জন্য করা ভালো কাজ আখিরাতেও তাঁদের উপকারে আসে।"
    },
    refs: ['36:12', '17:23']
  },
  {
    id: 'pious-sisters',
    title:   { en: 'The Sisters Who Kept Their Promise', bn: 'যে দুই বোন কথা রেখেছিল' },
    summary: {
      en: "This is a teaching story, not a report from the Quran or Hadith. Two sisters lived with their elderly uncle who sold water at the roadside to earn honest income. One day the uncle fell ill and could no longer work. The sisters decided to carry on selling water in his place so that the household would not go hungry and no debt would be left. Though it was hard work, they got up early every morning, filled the water jars, and served people with a smiling face and a fair price. Neighbours noticed their dedication and helped them. When their uncle recovered, he was moved to tears by their loyalty. A beautiful truth: when you help your family with sincerity, Allah sends help from unexpected places. Keeping your promise — no matter how tired you are — is one of the greatest acts of worship.",
      bn: "এটা একটা শিক্ষার গল্প। কুরআন বা হাদিসে এই ঘটনা নেই। দুই বোন তাদের বুড়ো চাচার সাথে থাকত। চাচা রাস্তার ধারে পানি বিক্রি করে সৎভাবে রোজগার করতেন। একদিন চাচা অসুস্থ হয়ে পড়লেন, আর কাজ করতে পারলেন না। বোনেরা ঠিক করল, চাচার বদলে তারাই পানি বিক্রি করবে, যাতে ঘরে কেউ না খেয়ে থাকে, আর কোনো ঋণও না হয়। কাজটা কঠিন ছিল। তবু তারা রোজ ভোরে উঠে পানির কলস ভরত, তারপর হাসিমুখে ন্যায্য দামে মানুষকে পানি দিত। তাদের এমন লেগে থাকা দেখে প্রতিবেশীরাও সাহায্য করতে এগিয়ে এল। চাচা সুস্থ হয়ে ওদের এই বিশ্বস্ততা দেখে কেঁদে ফেললেন। সুন্দর একটা সত্যি কথা: মন থেকে পরিবারকে সাহায্য করলে আল্লাহ এমন জায়গা থেকে সাহায্য পাঠান, যা তুমি ভাবতেও পারো না। যত ক্লান্তই হও, কথা রাখা সবচেয়ে বড় ইবাদতগুলোর একটি।"
    },
    moral: {
      en: "Look after your family and keep your promises. Allah rewards those who are loyal and hardworking, even when no one else is watching.",
      bn: "পরিবারের খেয়াল রাখো, আর কথা দিলে কথা রাখো। কেউ না দেখলেও যারা বিশ্বস্ত আর পরিশ্রমী, আল্লাহ তাদের পুরস্কার দেন।"
    },
    refs: ['28:26-27', '9:71']
  },
  {
    id: 'girl-prayed-brothers',
    title:   { en: 'The Girl Who Prayed for Her Brothers', bn: 'যে মেয়ে ভাইদের জন্য দোয়া করেছিল' },
    summary: {
      en: "This is a teaching story, not a report from the Quran or Hadith. A brave young girl had three brothers who fell into a great difficulty through no fault of their own. People had turned against the family, and it seemed there was no one left to help. While the brothers tried to find a way out, the little sister sat on her prayer mat every evening after Isha, raised her hands, and spoke to Allah with complete trust. She did not cry out of despair — she cried out of love, knowing Allah hears every whisper. She asked nothing for herself; she only asked for her brothers to be safe and for justice to come. Days passed. Then one morning, the difficulty was lifted — in a way no one had expected. The brothers came home safe and said: 'It was your du'a that saved us.' She replied: 'It was Allah who saved you. I only asked Him.'",
      bn: "এটা একটা শিক্ষার গল্প। কুরআন বা হাদিসে এই ঘটনা নেই। এক সাহসী ছোট মেয়ের তিন ভাই ছিল। কোনো দোষ না করেও তারা বড় এক বিপদে পড়ল। লোকজন পরিবারটার বিরুদ্ধে চলে গেল। মনে হচ্ছিল, সাহায্য করার মতো আর কেউ নেই। ভাইয়েরা যখন বাঁচার পথ খুঁজছিল, ছোট বোনটা তখন রোজ রাতে ইশার পরে জায়নামাজে বসত। হাত তুলে পুরো ভরসা নিয়ে আল্লাহর সাথে কথা বলত। সে হতাশ হয়ে কাঁদত না। সে কাঁদত ভালোবেসে, কারণ সে জানত, আল্লাহ প্রতিটি ফিসফিস কথাও শোনেন। নিজের জন্য সে কিছুই চাইত না। শুধু চাইত, ভাইয়েরা যেন নিরাপদে থাকে আর ন্যায়বিচার আসে। দিন যায়। তারপর এক সকালে বিপদ দূর হয়ে গেল, এমনভাবে যা কেউ ভাবেনি। ভাইয়েরা নিরাপদে ঘরে ফিরে বলল, 'তোমার দোয়াই আমাদের বাঁচিয়েছে।' সে বলল, 'আল্লাহই তোমাদের বাঁচিয়েছেন। আমি শুধু তাঁর কাছে চেয়েছিলাম।'"
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
      "bn": "জুলকারনাইন আর লোহার দেয়াল"
    },
    "summary": {
      "en": "Allah gave a righteous ruler called Dhul-Qarnayn power on earth and a way to everything. He travelled far to the west, where he found the sun setting near a murky spring, and far to the east. Then, between two mountains, he met a people who could hardly understand speech. They begged: 'Yajuj and Majuj spread mischief in the land — may we pay you to build a barrier between us and them?' He refused the money: 'What my Lord has given me is better. Just help me with your strength.' They brought blocks of iron until the gap was filled; he said 'Blow!' until it glowed like fire, then poured molten copper over it. The wall could not be climbed or pierced. Dhul-Qarnayn did not boast. He said: 'This is a mercy from my Lord — and when my Lord's promise comes, He will level it.'",
      "bn": "আল্লাহ জুলকারনাইন নামের এক নেককার শাসককে পৃথিবীতে ক্ষমতা দিয়েছিলেন, আর সব কাজের উপায়ও দিয়েছিলেন। তিনি অনেক দূর পশ্চিমে গেলেন। সেখানে দেখলেন, সূর্য যেন এক ঘোলা পানির ঝরনার কাছে ডুবে যাচ্ছে। তারপর গেলেন অনেক দূর পূর্বে। এরপর দুই পাহাড়ের মাঝে এমন এক জাতির দেখা পেলেন, যারা কারো কথা প্রায় বুঝতই না। তারা অনুনয় করে বলল, 'ইয়াজুজ-মাজুজ দেশে খুব অশান্তি করে বেড়ায়। আমরা আপনাকে টাকা দিই, আপনি আমাদের আর ওদের মাঝে একটা দেয়াল বানিয়ে দেবেন?' তিনি টাকা নিলেন না। বললেন, 'আমার রব আমাকে যা দিয়েছেন, সেটাই অনেক ভালো। তোমরা শুধু গায়ের জোর দিয়ে আমাকে সাহায্য করো।' তারা লোহার বড় বড় টুকরা এনে দুই পাহাড়ের ফাঁক ভরে দিল। তিনি বললেন, 'ফুঁ দাও!' ফুঁ দিতে দিতে লোহা আগুনের মতো লাল হয়ে গেল। তারপর তিনি তার উপর গলানো তামা ঢেলে দিলেন। সেই দেয়াল কেউ বেয়ে উঠতে পারল না, ফুটোও করতে পারল না। জুলকারনাইন একটুও গর্ব করলেন না। তিনি বললেন, 'এটা আমার রবের রহমত। আমার রবের ওয়াদার সময় এলে তিনি এটাকে মাটির সাথে মিশিয়ে দেবেন।'"
    },
    "moral": {
      "en": "Use your strength and skills to help others, and never take the credit — every good thing we do is a mercy from Allah.",
      "bn": "নিজের শক্তি আর গুণ দিয়ে মানুষের উপকার করো, কিন্তু নিজে বাহবা নিয়ো না। আমাদের প্রতিটি ভালো কাজই আল্লাহর রহমত।"
    },
    "refs": [
      "18:83-98"
    ]
  },
  {
    "id": "saba-flood",
    "title": {
      "en": "The Gardens of Saba",
      "bn": "সাবার দুই বাগান"
    },
    "summary": {
      "en": "The people of Saba had a beautiful sign from Allah right where they lived: two lush gardens, one on the right and one on the left. Allah told them: 'Eat from the provision of your Lord and be grateful to Him — a good land and a forgiving Lord!' They also had safe, easy journeys between blessed towns. But instead of saying thank you, they turned away from Allah. So Allah sent upon them the flood of the dam, and their two wonderful gardens were exchanged for gardens of bitter fruit, tamarisk bushes, and only a few lote trees. Their easy life scattered, and they became a story people tell. The Quran says this was the reward of their ingratitude — for Allah only punishes like this those who refuse to be thankful.",
      "bn": "সাবা জাতির লোকেরা যেখানে থাকত, সেখানেই ছিল আল্লাহর এক সুন্দর নিদর্শন: ডানে আর বামে সবুজে ভরা দুটি বাগান। আল্লাহ তাদের বললেন, 'তোমাদের রবের দেওয়া রিজিক খাও, আর তাঁর শুকরিয়া আদায় করো। কত সুন্দর দেশ, আর কত ক্ষমাশীল রব!' বরকতময় শহরগুলোর মাঝে তারা সহজে আর নিরাপদে যাতায়াত করত। কিন্তু শুকরিয়া আদায়ের বদলে তারা আল্লাহ থেকে মুখ ফিরিয়ে নিল। তখন আল্লাহ তাদের উপর বাঁধভাঙা বন্যা পাঠালেন। তাদের চমৎকার দুই বাগানের বদলে হলো তেতো ফলের বাগান, ঝাউগাছ আর অল্প কিছু কুলগাছ। তাদের আরামের জীবন তছনছ হয়ে গেল, তারা হয়ে গেল লোকমুখের গল্প। কুরআন বলে, এ ছিল তাদের অকৃতজ্ঞতার শাস্তি। যারা শুকরিয়া আদায় করতে চায় না, আল্লাহ শুধু তাদেরই এভাবে শাস্তি দেন।"
    },
    "moral": {
      "en": "Blessings stay with gratitude. Say Alhamdulillah for your food, home, and safety — being ungrateful can make blessings disappear.",
      "bn": "শুকরিয়া থাকলে নিয়ামতও থাকে। খাবার, ঘর আর নিরাপদে থাকার জন্য বলো 'আলহামদুলিল্লাহ'। অকৃতজ্ঞ হলে নিয়ামত হারিয়েও যেতে পারে।"
    },
    "refs": [
      "34:15-19"
    ]
  },
  {
    "id": "qarun-treasure",
    "title": {
      "en": "Qarun and His Heavy Keys",
      "bn": "কারুন আর তার ভারী চাবির গোছা"
    },
    "summary": {
      "en": "Qarun was from the people of Prophet Musa, but he treated them unfairly. Allah had given him so much treasure that even the keys to his storerooms were a heavy load for a band of strong men! His people gave him kind advice: 'Do not show off — Allah does not love those who boast. Use what Allah gave you to earn the home of the Hereafter, but don't forget your share of this world. Do good, as Allah has done good to you.' Qarun answered proudly: 'I was only given all this because of knowledge I have.' One day he paraded before the people in all his glitter, and some wished to be just like him. Then Allah caused the earth to swallow Qarun and his house. No one could help him — and those who had envied him realised that all provision truly comes from Allah.",
      "bn": "কারুন ছিল নবী মূসার জাতিরই একজন, কিন্তু সে নিজের লোকদের উপর জুলুম করত। আল্লাহ তাকে এত ধনসম্পদ দিয়েছিলেন যে শুধু তার গুদামের চাবিগুলো বইতেই একদল শক্তিশালী লোক হিমশিম খেত! তার জাতির লোকেরা তাকে ভালো উপদেশ দিল, 'বড়াই কোরো না। আল্লাহ বড়াইকারীদের ভালোবাসেন না। আল্লাহ তোমাকে যা দিয়েছেন, তা দিয়ে আখিরাতের ঘর বানাও। তবে দুনিয়ায় তোমার ভাগটাও ভুলে যেয়ো না। মানুষের ভালো করো, যেমন আল্লাহ তোমার ভালো করেছেন।' কারুন গর্ব করে বলল, 'এসব তো আমি পেয়েছি আমার নিজের জ্ঞানের জোরে।' একদিন সে জাঁকজমক করে সেজেগুজে লোকজনের সামনে বের হলো। কেউ কেউ তাকে দেখে ভাবল, ইশ, আমরাও যদি ওর মতো হতে পারতাম! তখন আল্লাহ কারুনকে তার বাড়িসহ মাটির নিচে ধসিয়ে দিলেন। কেউ তাকে বাঁচাতে পারল না। আর যারা তাকে হিংসা করেছিল, তারা বুঝল, সব রিজিক আসলে আল্লাহর কাছ থেকেই আসে।"
    },
    "moral": {
      "en": "Never boast about what you have — money, toys, or talents. Everything is a gift from Allah, so be humble and generous.",
      "bn": "যা আছে তা নিয়ে কখনো বড়াই কোরো না, হোক তা টাকা, খেলনা বা কোনো গুণ। সবই আল্লাহর দেওয়া উপহার। তাই বিনয়ী হও, মন খুলে দাও।"
    },
    "refs": [
      "28:76-82"
    ]
  },
  {
    "id": "people-of-the-garden",
    "title": {
      "en": "The Garden That Burned at Night",
      "bn": "যে বাগান রাতে পুড়ে গেল"
    },
    "summary": {
      "en": "Some brothers owned a rich garden. They swore they would pick all its fruit early in the morning — and they did not say 'if Allah wills.' They even whispered a plan: 'Let no poor person come in to us today!' But while they slept, a visitation from their Lord swept over the garden, and by morning it was black, like a field already harvested. At dawn they called each other: 'Hurry to your crop if you are going to pick it!' When they saw the garden they cried: 'We must be lost — no, we have been left with nothing!' The most balanced of them said: 'Did I not tell you? Why do you not glorify Allah?' They said: 'Glory be to our Lord — truly we were wrongdoers.' They turned and blamed one another, then admitted together that they had gone too far, hoping their Lord would give them something better in exchange.",
      "bn": "কয়েক ভাইয়ের ছিল ফলে ভরা এক বাগান। তারা কসম খেয়ে বলল, কাল ভোরেই সব ফল পেড়ে ফেলবে। কিন্তু 'ইনশাআল্লাহ' বলল না। তারা ফিসফিস করে ফন্দিও আঁটল, 'আজ যেন কোনো গরিব মানুষ আমাদের কাছে ঢুকতে না পারে!' কিন্তু তারা যখন ঘুমিয়ে ছিল, তাদের রবের পক্ষ থেকে এক বিপদ এসে বাগানের উপর দিয়ে বয়ে গেল। সকাল হতেই বাগানটা কালো হয়ে গেল, যেন ফসল কেটে নেওয়া খালি মাঠ। ভোরে তারা একে অপরকে ডেকে বলল, 'ফল পাড়তে চাইলে জলদি বাগানে চলো!' বাগান দেখে তারা চিৎকার করে উঠল, 'আমরা নিশ্চয়ই পথ ভুলে অন্য কোথাও এসেছি! না, আমাদের তো সবই শেষ!' তাদের মধ্যে যে সবচেয়ে বুঝদার, সে বলল, 'আমি কি তোমাদের বলিনি? তোমরা কেন আল্লাহর তাসবিহ পড়ো না?' তারা বলল, 'আমাদের রব পবিত্র। সত্যিই আমরা জালিম ছিলাম।' তারপর তারা একে অপরকে দোষ দিতে লাগল। শেষে সবাই মিলে মেনে নিল, তারা সীমা ছাড়িয়ে গিয়েছিল। তারা আশা করল, তাদের রব এর বদলে তাদের আরও ভালো কিছু দেবেন।"
    },
    "moral": {
      "en": "Always say Insha'Allah when you plan, and never plan to keep the poor away from your blessings — share, and Allah gives more.",
      "bn": "কোনো কিছুর পরিকল্পনা করলে সবসময় 'ইনশাআল্লাহ' বলো। আর গরিবদের তোমার নিয়ামত থেকে দূরে রাখার ফন্দি কখনো কোরো না। ভাগ করে নাও, আল্লাহ আরও বাড়িয়ে দেবেন।"
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
      "bn": "সামুদ জাতি ছিল দারুণ শক্তিশালী কারিগর। তারা পাহাড় কেটে ঘর বানাত। আল্লাহ তাদের কাছে নবী সালিহকে পাঠালেন। তিনি বললেন, 'আল্লাহর ইবাদত করো। তিনি ছাড়া তোমাদের কোনো মাবুদ নেই। তোমাদের কাছে স্পষ্ট নিদর্শন এসেছে: এটা আল্লাহর উটনী, তোমাদের জন্য একটা নিদর্শন। একে আল্লাহর জমিনে চরে খেতে দাও। একে কোনো কষ্ট দিয়ো না, নইলে কঠিন যন্ত্রণার শাস্তি তোমাদের ধরে ফেলবে।' পানিও ভাগ করা ছিল ন্যায্যভাবে: এক দিন উটনী পানি খাবে, আরেক দিন লোকেরা। কিন্তু অহংকারী লোকেরা কথা শুনল না। তাদের সবচেয়ে হতভাগা লোকটা উঠে দাঁড়াল, আর তারা নিষ্ঠুরভাবে উটনীটাকে মেরে ফেলল। তখন সালিহ যে শাস্তির কথা বলেছিলেন, তা-ই সত্যি হলো। এক ভয়ংকর গর্জন আর কাঁপুনি জালিমদের ধরে ফেলল। সকালে দেখা গেল, তারা নিজেদের ঘরে মুখ থুবড়ে পড়ে আছে। সালিহ শুরু থেকেই সত্যি কথা বলছিলেন।"
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
      "bn": "নবী ঈসার সঙ্গী হাওয়ারিরা একবার তাঁকে জিজ্ঞেস করল, 'আপনার রব কি আসমান থেকে আমাদের জন্য খাবারে ভরা একটা দস্তরখান নামিয়ে দিতে পারেন?' ঈসা মনে করিয়ে দিলেন, 'আল্লাহকে ভয় করো, যদি তোমরা মুমিন হও।' তারা নিজেদের ইচ্ছার কথা খুলে বলল, 'আমরা তা থেকে খেতে চাই, যেন আমাদের মন নিশ্চিন্ত হয়, যেন জানতে পারি আপনি সত্যি বলেছেন, আর আমরা এর সাক্ষী হতে পারি।' তখন মারইয়ামের ছেলে ঈসা দোয়া করলেন, 'হে আল্লাহ, আমাদের রব! আসমান থেকে আমাদের জন্য একটা দস্তরখান নামিয়ে দিন। তা যেন আমাদের আগের-পরের সবার জন্য আনন্দের উৎসব হয়, আর আপনার পক্ষ থেকে একটা নিদর্শন হয়। আমাদের রিজিক দিন। আপনিই সবচেয়ে ভালো রিজিকদাতা।' আল্লাহ জবাব দিলেন, 'আমি তা নামিয়ে দেব। কিন্তু এরপর তোমাদের কেউ কুফরি করলে তাকে এমন শাস্তি দেব, যা দুনিয়ার আর কাউকে দিইনি।' বড় উপহারের সাথে আসে বড় দায়িত্ব।"
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
      "bn": "জাকারিয়ার চুপিচুপি দোয়া"
    },
    "summary": {
      "en": "Prophet Zakariyya grew old without a child. He did not give up — he called his Lord with a quiet, secret prayer: 'My Lord, my bones have grown weak and my head glistens with white hair, yet I have never been disappointed in praying to You. Give me from Yourself an heir who will carry on the work and be pleasing to You.' Allah answered with wonderful news: 'We give you good tidings of a boy whose name will be Yahya — We have not given this name to anyone before.' Zakariyya asked in wonder: 'How can I have a boy when my wife cannot have children and I am so old?' Allah said: 'It is easy for Me — I created you before, when you were nothing.' As a sign, Zakariyya did not speak to people for three nights, and he came out and signalled to them: glorify Allah morning and evening.",
      "bn": "নবী জাকারিয়া বুড়ো হয়ে গেলেন, কিন্তু তাঁর কোনো সন্তান ছিল না। তবু তিনি হাল ছাড়লেন না। চুপিচুপি, গোপনে তিনি তাঁর রবকে ডাকলেন, 'হে আমার রব, আমার হাড় দুর্বল হয়ে গেছে, মাথার চুল সাদা হয়ে ঝিকমিক করছে। তবু আপনার কাছে দোয়া করে আমি কখনো খালি হাতে ফিরিনি। আপনার পক্ষ থেকে আমাকে এমন এক উত্তরাধিকারী দিন, যে এই কাজ চালিয়ে যাবে, আর যার উপর আপনি খুশি থাকবেন।' আল্লাহ দারুণ এক সুখবর দিলেন, 'আমরা তোমাকে এক ছেলের সুসংবাদ দিচ্ছি। তার নাম হবে ইয়াহইয়া। এই নাম আমরা আগে কাউকে দিইনি।' জাকারিয়া অবাক হয়ে বললেন, 'আমার ছেলে হবে কীভাবে? আমার স্ত্রীর তো সন্তান হয় না, আর আমিও এত বুড়ো!' আল্লাহ বললেন, 'এটা আমার জন্য খুব সহজ। এর আগে তো তোমাকেও সৃষ্টি করেছি, যখন তুমি কিছুই ছিলে না।' নিদর্শন হিসেবে জাকারিয়া তিন রাত মানুষের সাথে কথা বললেন না। তিনি বেরিয়ে এসে ইশারায় সবাইকে বললেন, সকাল-সন্ধ্যা আল্লাহর তাসবিহ পড়ো।"
    },
    "moral": {
      "en": "No dua is too big for Allah, and no whisper is too quiet for Him to hear. Keep asking Allah with hope — He can do anything.",
      "bn": "কোনো দোয়াই আল্লাহর জন্য খুব বড় নয়। আর কোনো ফিসফিস কথাই এত আস্তে নয় যে তিনি শুনতে পান না। আশা নিয়ে আল্লাহর কাছে চাইতেই থাকো। তিনি সব পারেন।"
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
      "bn": "মূসার যুগের পরে বনী ইসরাঈল তাদের নবীর কাছে একজন রাজা চাইল, যাতে তারা আল্লাহর পথে লড়াই করতে পারে। আল্লাহ তালুতকে বেছে নিলেন। কেউ কেউ গজগজ করতে লাগল, তালুত তো ধনী নন! তাদের নবী বললেন, 'আল্লাহই তাঁকে তোমাদের উপর বেছে নিয়েছেন, আর তাঁকে জ্ঞানে ও শক্তিতে বাড়িয়ে দিয়েছেন।' সৈন্যদের নিয়ে রওনা হওয়ার সময় তালুত বললেন, 'আল্লাহ একটা নদী দিয়ে তোমাদের পরীক্ষা করবেন। যে ওই নদী থেকে পানি খাবে, সে আমার দলে নয়। তবে হাতের এক আঁজলা পানি খেলে দোষ নেই।' বেশিরভাগ লোক পেট ভরে পানি খেল আর দল থেকে বাদ পড়ে গেল। ছোট্ট বিশ্বস্ত দলটা নদী পার হয়ে বলল, 'আল্লাহর হুকুমে কত ছোট দল কত বড় দলকে হারিয়ে দিয়েছে! আল্লাহ ধৈর্যশীলদের সাথে আছেন।' তারা দোয়া করল, 'হে আমাদের রব, আমাদের উপর ধৈর্য ঢেলে দিন, আমাদের পা অটল রাখুন।' আল্লাহর হুকুমে তারা জিতে গেল। আর তরুণ দাউদ শক্তিশালী জালুতকে মেরে ফেললেন। পরে আল্লাহ দাউদকে রাজত্ব আর হিকমত দিলেন।"
    },
    "moral": {
      "en": "Victory comes from Allah, not from big numbers or riches. A small team with patience, discipline, and faith can do great things.",
      "bn": "জয় আসে আল্লাহর কাছ থেকে, লোক বেশি বা টাকা বেশি হলেই নয়। ধৈর্য, শৃঙ্খলা আর ঈমান থাকলে ছোট দলও বড় কাজ করতে পারে।"
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
      "bn": "'আদ জাতির লোকেরা ছিল লম্বা আর শক্তিশালী। নিজেদের শক্তি নিয়ে তাদের ভীষণ অহংকার ছিল। আল্লাহ তাদের কাছে তাদেরই ভাই হুদকে পাঠালেন। তিনি বললেন, 'হে আমার জাতি, আল্লাহর ইবাদত করো। তিনি ছাড়া তোমাদের কোনো মাবুদ নেই। মনে করে দেখো, নূহের জাতির পরে তিনিই তোমাদের তাদের জায়গায় বসিয়েছেন, আর তোমাদের শরীর অনেক বড় আর মজবুত করেছেন। আল্লাহর নিয়ামতগুলোর কথা মনে রাখো, যেন তোমরা সফল হতে পারো।' কিন্তু তারা অহংকার করে মানল না। উল্টো তাঁকে বলল, যে শাস্তির ভয় দেখাচ্ছ, পারলে নিয়ে এসো। তারপর একদিন তারা দেখল, বিশাল এক মেঘ তাদের উপত্যকার দিকে এগিয়ে আসছে। তারা খুশিতে চেঁচিয়ে উঠল, 'এই মেঘ আমাদের বৃষ্টি দেবে!' কিন্তু সেটা বৃষ্টির মেঘ ছিল না। সেটা ছিল ভয়ংকর গর্জন করা এক ঝড়, যা নিয়ে এসেছিল কঠিন শাস্তি। কুরআন বলে, সেই ঝড় চলল সাত রাত আর আট দিন। শেষে মানুষগুলো পড়ে রইল খেজুরগাছের ফাঁপা গুঁড়ির মতো। আল্লাহ নিজের রহমতে হুদ আর তাঁর সাথের মুমিনদের বাঁচিয়ে দিলেন।"
    },
    "moral": {
      "en": "Being big or strong is a gift from Allah, never a reason to be proud. Arrogance brings downfall; humble faith brings safety.",
      "bn": "লম্বা বা শক্তিশালী হওয়া আল্লাহর দান, অহংকার করার কারণ নয়। অহংকার পতন ডেকে আনে, আর বিনয়ী ঈমান আনে নিরাপত্তা।"
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
      "bn": "নবী নূহ অনেক অনেক বছর ধরে তাঁর জাতিকে শুধু এক আল্লাহর ইবাদতের দিকে ডাকলেন। দিনে-রাতে ডাকলেন, প্রকাশ্যে আর গোপনে ডাকলেন। কিন্তু বেশিরভাগ লোক মানল না, উল্টো তাঁকে নিয়ে ঠাট্টা করল। আল্লাহ নূহকে বললেন, 'আমার চোখের সামনে নৌকা বানাও।' নেতারা পাশ দিয়ে যাওয়ার সময় তাঁকে নিয়ে হাসাহাসি করত। তবু নূহ নৌকা বানিয়েই চললেন। তারপর আল্লাহর হুকুম এল, পানি উথলে উঠল। নূহ সব রকম প্রাণীর এক জোড়া করে, নিজের পরিবার আর অল্প কয়েকজন মুমিনকে নৌকায় তুললেন। পাহাড়ের মতো উঁচু ঢেউয়ের ভেতর দিয়ে নৌকা চলতে লাগল। নূহের এক ছেলে আলাদা হয়ে দূরে দাঁড়িয়ে ছিল। নূহ তাকে ডাকলেন, 'ও আমার প্রিয় ছেলে, আমাদের সাথে উঠে এসো!' ছেলে বলল, 'আমি একটা পাহাড়ে উঠে যাব, পাহাড়ই আমাকে পানি থেকে বাঁচাবে।' নূহ বললেন, 'আজ আল্লাহর হুকুম থেকে কেউ বাঁচাতে পারবে না। শুধু তারাই বাঁচবে, যাদের উপর তিনি রহম করবেন।' তখন দুজনের মাঝে এক ঢেউ এসে পড়ল, আর ছেলেটা ডুবে গেল। তারপর আল্লাহ বললেন, 'হে জমিন, তোমার পানি গিলে ফেলো! হে আকাশ, থামো!' পানি নেমে গেল, আর নৌকা গিয়ে থামল জুদি পাহাড়ের উপর।"
    },
    "moral": {
      "en": "Keep doing what Allah asks even if people laugh at you. True safety is not in mountains or strength — it is only in Allah's mercy.",
      "bn": "মানুষ হাসলেও আল্লাহ যা বলেছেন তা করে যাও। আসল নিরাপত্তা পাহাড়ে বা শক্তিতে নেই, আছে শুধু আল্লাহর রহমতে।"
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
      en: "When you see a Muslim — a friend, family member, or neighbour — greet them with 'Assalamu Alaikum.' This means 'Peace be upon you.' The Prophet \u{FDFA} said the people closest to Allah are those who greet others with salaam first. Salaam is a gift of peace you give to others. If someone greets you, reply: 'Wa Alaikum Assalam' — and even better, add 'Wa Rahmatullahi Wa Barakatuh.'",
      bn: "কোনো মুসলিমকে দেখলে, সে বন্ধু হোক, পরিবারের কেউ হোক বা প্রতিবেশী, 'আস-সালামু আলাইকুম' বলে সালাম দাও। এর মানে, 'তোমার উপর শান্তি হোক।' নবী ﷺ বলেছেন, যে আগে সালাম দেয়, সে-ই আল্লাহর সবচেয়ে কাছের মানুষ। সালাম হলো শান্তির একটা উপহার, যা তুমি অন্যকে দাও। কেউ তোমাকে সালাম দিলে বলো, 'ওয়া আলাইকুম আস-সালাম'। আরও ভালো হয়, যদি সাথে বলো 'ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু'।"
    },
    arabic: 'السَّلَامُ عَلَيْكُمْ',
    ref: 'Muslim 54, Abu Dawud 5197'
  },
  {
    id: 'thank-parents',
    title: { en: 'Thank Your Parents Every Day', bn: 'প্রতিদিন বাবা-মাকে ধন্যবাদ দাও' },
    body: {
      en: "Allah says in the Quran: 'Be grateful to Me and to your parents.' Your parents wake up early, work hard, cook your food, wash your clothes, and stay up when you are sick — all out of love. Say 'Jazakallah Khayr' or 'Thank you, Mum / Dad' every single day. A simple 'I love you' or a hug means the world to them. Never speak rudely or raise your voice at your parents — this is one of the greatest sins in Islam.",
      bn: "আল্লাহ কুরআনে বলেছেন, 'আমার প্রতি কৃতজ্ঞ হও, আর তোমার বাবা-মায়ের প্রতিও।' তোমার বাবা-মা ভোরে ওঠেন, অনেক খাটেন, তোমার জন্য রান্না করেন, কাপড় ধুয়ে দেন। তুমি অসুস্থ হলে রাত জেগে থাকেন। এ সবই করেন তোমাকে ভালোবেসে। তাই প্রতিদিন বলো 'জাযাকাল্লাহ খাইর' বা 'ধন্যবাদ, আব্বু/আম্মু'। ছোট্ট করে 'তোমাকে অনেক ভালোবাসি' বলা বা একবার জড়িয়ে ধরা তাঁদের কাছে অনেক বড় পাওয়া। বাবা-মায়ের সাথে কখনো বেয়াদবি করো না, গলা চড়িয়ে কথা বলো না। ইসলামে এটা সবচেয়ে বড় গুনাহগুলোর একটি।"
    },
    arabic: 'أَنِ اشْكُرْ لِي وَلِوَالِدَيْكَ',
    ref: 'Quran 31:14'
  },
  {
    id: 'share-toys',
    title: { en: 'Share Your Toys and Food', bn: 'খেলনা আর খাবার ভাগ করে নাও' },
    body: {
      en: "The Prophet \u{FDFA} said: 'None of you truly believes until he loves for his brother what he loves for himself.' When a friend or sibling wants to play with your toy, share it with a smile. When you have a snack, offer some to the person beside you. Sharing is not losing — it is gaining love and blessings. Allah loves those who are generous.",
      bn: "নবী ﷺ বলেছেন, 'তোমাদের কেউ ততক্ষণ পূর্ণ মুমিন হতে পারবে না, যতক্ষণ না সে নিজের জন্য যা পছন্দ করে, তার ভাইয়ের জন্যও তা পছন্দ করে।' বন্ধু বা ভাই-বোন তোমার খেলনা দিয়ে খেলতে চাইলে হাসিমুখে দাও। তোমার কাছে নাশতা থাকলে পাশের জনকেও একটু দাও। ভাগ করলে কিছু হারাও না, বরং ভালোবাসা আর বরকত পাও। যারা মন খুলে দেয়, আল্লাহ তাদের ভালোবাসেন।"
    },
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    ref: 'Bukhari 13, Muslim 45'
  },
  {
    id: 'keep-promises',
    title: { en: 'Always Keep Your Promises', bn: 'সবসময় কথা রাখো' },
    body: {
      en: "If you tell a friend 'I will meet you after school,' keep that promise. If you say 'I will return your pencil tomorrow,' do it. The Prophet \u{FDFA} said that breaking promises is a sign of hypocrisy. When you keep your word, people trust you — and that trust is worth more than gold. Before you make a promise, think carefully: can I really keep this? If unsure, say 'Insha'Allah — if Allah wills it.'",
      bn: "বন্ধুকে যদি বলো, 'স্কুল ছুটির পর দেখা করব', তাহলে সেই কথা রাখো। যদি বলো, 'কাল তোমার পেন্সিল ফেরত দেব', তাহলে ঠিকই ফেরত দাও। নবী ﷺ বলেছেন, কথা দিয়ে কথা না রাখা মুনাফিকের একটা চিহ্ন। তুমি কথা রাখলে মানুষ তোমাকে বিশ্বাস করবে। আর এই বিশ্বাস সোনার চেয়েও দামি। কাউকে কথা দেওয়ার আগে ভালো করে ভেবে নাও: আমি কি সত্যিই এটা পারব? নিশ্চিত না হলে বলো 'ইনশাআল্লাহ', মানে আল্লাহ চাইলে।"
    },
    arabic: 'وَأَوْفُوا بِالْعَهْدِ',
    ref: 'Quran 17:34'
  },
  {
    id: 'be-honest',
    title: { en: 'Always Tell the Truth', bn: 'সবসময় সত্য বলো' },
    body: {
      en: "The Prophet \u{FDFA} was known as 'Al-Amin' — the Trustworthy — even before prophethood, because he never lied. He said: 'Stick to honesty — it leads to goodness, and goodness leads to Paradise.' If you break something by accident, say so honestly instead of hiding it. A lie might feel like a small shortcut, but it leads to more lies. Honesty, even when it is hard, always brings more blessings in the end.",
      bn: "নবী ﷺ নবী হওয়ার আগেই সবাই তাঁকে 'আল-আমিন' বলে ডাকত। এর মানে 'বিশ্বস্ত'। কারণ তিনি কখনো মিথ্যা বলেননি। তিনি বলেছেন, 'সবসময় সত্য বলো। সত্য ভালো কাজের পথ দেখায়, আর ভালো কাজ জান্নাতের পথ দেখায়।' ভুল করে কিছু ভেঙে ফেললে লুকিয়ে রেখো না, সত্যি কথাটা বলে দাও। মিথ্যা বললে মনে হতে পারে সহজে বেঁচে গেলে। কিন্তু একটা মিথ্যা ঢাকতে আরও মিথ্যা বলতে হয়। সত্য বলা কঠিন হলেও শেষে সবসময় বেশি বরকত আনে।"
    },
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ',
    ref: 'Bukhari 6094, Muslim 2607'
  },
  {
    id: 'respect-teachers',
    title: { en: 'Respect Your Teachers', bn: 'শিক্ষকদের সম্মান করো' },
    body: {
      en: "A teacher gives you knowledge — and knowledge is one of the greatest gifts. The Prophet \u{FDFA} said: 'The scholars are the inheritors of the prophets.' Stand up when a teacher enters the room. Listen without interrupting. Say 'Jazakallah Khayr' or 'Thank you' when you learn something new. If your teacher makes a mistake, mention it gently and privately — never embarrass them in front of others. Respecting your teachers is a way of honouring the knowledge Allah has given through them.",
      bn: "শিক্ষক তোমাকে জ্ঞান দেন। আর জ্ঞান সবচেয়ে বড় উপহারগুলোর একটি। নবী ﷺ বলেছেন, 'আলেমরা নবীদের উত্তরসূরি।' শিক্ষক ক্লাসে ঢুকলে উঠে দাঁড়াও। তাঁর কথার মাঝে কথা না বলে মন দিয়ে শোনো। নতুন কিছু শিখলে বলো 'জাযাকাল্লাহ খাইর' বা 'ধন্যবাদ'। শিক্ষক কোনো ভুল করলে আলাদা করে, নরম করে বলো। সবার সামনে কখনো তাঁকে লজ্জা দিয়ো না। শিক্ষককে সম্মান করা মানে সেই জ্ঞানকে সম্মান করা, যা আল্লাহ তাঁর মাধ্যমে তোমাকে দিয়েছেন।"
    },
    arabic: 'رَبِّ زِدْنِي عِلْمًا',
    ref: 'Quran 20:114'
  },
  {
    id: 'kind-to-animals',
    title: { en: 'Be Kind to Animals', bn: 'পশুপাখির প্রতি দয়ালু হও' },
    body: {
      en: "The Prophet \u{FDFA} loved animals deeply. A woman once went to Hellfire because she locked her cat and let it starve — and another person was forgiven because they gave water to a thirsty dog. Feed birds and stray cats when you can. Never pull an animal's tail or scare them for fun. If you find an injured bird, gently help it. The Prophet \u{FDFA} said: 'There is a reward for serving any living being.' Every kind act to an animal is a good deed.",
      bn: "নবী ﷺ পশুপাখিকে খুব ভালোবাসতেন। এক মহিলা তার বিড়ালকে আটকে রেখেছিল, খেতে দেয়নি, তাই বিড়ালটা না খেয়ে মারা গেল। এজন্য সেই মহিলা জাহান্নামে গেল। আরেকজন পিপাসায় কাতর একটা কুকুরকে পানি খাইয়েছিল, তাই আল্লাহ তাকে মাফ করে দিলেন। সুযোগ পেলে পাখি আর রাস্তার বিড়ালকে খেতে দাও। কখনো কোনো প্রাণীর লেজ ধরে টেনো না, মজা করে ভয়ও দেখিয়ো না। আহত পাখি পেলে আলতো করে তার যত্ন নাও। নবী ﷺ বলেছেন, 'যেকোনো প্রাণীর সেবা করলেই সওয়াব আছে।' প্রাণীর প্রতি প্রতিটি দয়াই একটা নেক কাজ।"
    },
    arabic: 'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَىٰ كُلِّ شَيْءٍ',
    ref: 'Bukhari 3482, 2363, Muslim 1955'
  },
  {
    id: 'no-waste',
    title: { en: "Don't Be Wasteful", bn: 'অপচয় করো না' },
    body: {
      en: "Allah says in the Quran: 'Do not waste — Allah does not love those who waste.' Do not leave your tap running while brushing your teeth. Eat what is on your plate and do not throw away food. Turn off lights when you leave a room. Use pens and pencils until they are finished. The Prophet \u{FDFA} used to repair his own shoes and clothes rather than throwing them away. Every resource on earth is a gift from Allah — treat it with respect.",
      bn: "আল্লাহ কুরআনে বলেছেন, 'অপচয় করো না। আল্লাহ অপচয়কারীদের পছন্দ করেন না।' দাঁত ব্রাশ করার সময় কলের পানি ছেড়ে রেখো না। প্লেটে যা নিয়েছ তা খেয়ে শেষ করো, খাবার ফেলে দিয়ো না। ঘর থেকে বের হওয়ার সময় লাইট বন্ধ করো। কলম-পেন্সিল শেষ না হওয়া পর্যন্ত ব্যবহার করো। নবী ﷺ নিজের জুতা আর কাপড় ফেলে না দিয়ে নিজ হাতে সেলাই করে নিতেন। পৃথিবীর সবকিছুই আল্লাহর দেওয়া উপহার। তাই যত্ন করে ব্যবহার করো।"
    },
    arabic: 'وَلَا تُسْرِفُوا',
    ref: 'Quran 6:141'
  },
  {
    id: 'salaam-elders',
    title: { en: 'Say Salaam to Elders', bn: 'বড়দের সালাম দাও' },
    body: {
      en: "When you walk into a room with elderly people — grandparents, aunts, uncles, neighbours — greet them first with a warm salaam. The Prophet \u{FDFA} said: 'Honouring an elderly Muslim is part of glorifying Allah.' Let an elder sit down before you. Do not interrupt them when they are speaking. Offer to carry their bags or help with tasks. When an elder gives you advice, listen patiently — they have lived longer and learned more than you have.",
      bn: "যে ঘরে বড়রা আছেন, যেমন দাদা-দাদি, নানা-নানি, চাচা-চাচি, মামা-খালা বা প্রতিবেশী, সেখানে ঢুকলে আগে তুমিই হাসিমুখে সালাম দাও। নবী ﷺ বলেছেন, 'বয়স্ক মুসলিমকে সম্মান করা আল্লাহকে সম্মান করারই অংশ।' বড়দের আগে বসতে দাও, তারপর তুমি বসো। তাঁরা কথা বললে মাঝখানে কথা বলো না। নিজে থেকে তাঁদের ব্যাগ বয়ে দাও, কাজে হাত লাগাও। বড়রা কোনো উপদেশ দিলে ধৈর্য ধরে শোনো। তাঁরা তোমার চেয়ে অনেক বেশি দিন বেঁচেছেন, অনেক বেশি শিখেছেন।"
    },
    arabic: 'إِنَّ مِنْ إِجْلَالِ اللَّهِ إِكْرَامَ ذِي الشَّيْبَةِ الْمُسْلِمِ',
    ref: 'Abu Dawud 4843'
  },
  {
    id: 'wash-hands',
    title: { en: 'Wash Your Hands and Stay Clean', bn: 'হাত ধোও ও পরিষ্কার থাকো' },
    body: {
      en: "The Prophet \u{FDFA} taught that cleanliness is half of faith. Wash your hands before eating, after using the toilet, after playing outside, and after touching animals. Brush your teeth (use a miswak if you can!), keep your clothes neat, and tidy your room. When your body and surroundings are clean, you feel happier and healthier — and you are ready to pray to Allah at any time.",
      bn: "নবী ﷺ শিখিয়েছেন, পবিত্রতা ঈমানের অর্ধেক। খাওয়ার আগে, টয়লেট থেকে এসে, বাইরে খেলার পরে আর কোনো প্রাণী ধরার পরে হাত ধুয়ে নাও। দাঁত ব্রাশ করো (পারলে মিসওয়াক করো!), জামাকাপড় পরিচ্ছন্ন রাখো, নিজের ঘর গুছিয়ে রাখো। শরীর আর চারপাশ পরিষ্কার থাকলে মন খুশি থাকে, শরীরও ভালো থাকে। আর যেকোনো সময় আল্লাহর জন্য নামাজে দাঁড়াতে তুমি তৈরি থাকো।"
    },
    arabic: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
    ref: 'Muslim 223'
  },
  {
    id: 'smile-sadaqah',
    title: { en: 'A Smile Is Sadaqah (Charity)', bn: 'হাসিও একটা সদকা' },
    body: {
      en: "The Prophet \u{FDFA} said: 'Your smile in the face of your brother is charity.' You do not need money to give charity — a genuine warm smile is a gift to the person in front of you. It tells them: I see you, I am happy to be with you, and I wish you well. Smile at your parents when they come home tired. Smile at classmates who look sad. A simple smile can brighten someone's whole day — and it costs you nothing.",
      bn: "নবী ﷺ বলেছেন, 'তোমার ভাইয়ের সামনে তোমার হাসিটুকুও সদকা।' সদকা দিতে টাকা লাগে না। মন থেকে দেওয়া একটা মিষ্টি হাসিই সামনের মানুষটার জন্য উপহার। হাসি দিয়ে তুমি যেন বলছ: আমি তোমাকে দেখেছি, তোমার সাথে থেকে আমি খুশি, আমি তোমার ভালো চাই। আব্বু-আম্মু ক্লান্ত হয়ে বাসায় ফিরলে তাঁদের দিকে তাকিয়ে হাসো। ক্লাসের কোনো বন্ধুর মন খারাপ দেখলে তার দিকে তাকিয়ে হাসো। ছোট্ট একটা হাসি কারো সারাটা দিন ভালো করে দিতে পারে। আর এতে তোমার এক পয়সাও খরচ হয় না।"
    },
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
    ref: 'Tirmidhi 1956'
  },
  {
    id: 'kindness-plants',
    title: { en: 'Be Kind to Plants', bn: 'গাছপালার যত্ন নাও' },
    body: {
      en: "The Prophet \u{FDFA} said: 'If a Muslim plants a tree, and a bird, human, or animal eats from it — it is sadaqah for him.' Every green tree glorifies Allah in its own way. Water your houseplants when they are thirsty. Do not pull up flowers just to throw them away. Do not carve words into tree trunks or break branches for no reason. If you can, plant a seed — a lemon, a herb, or a flower — and watch it grow. Caring for plants is an act of worship that keeps giving even after you are gone.",
      bn: "নবী ﷺ বলেছেন, 'কোনো মুসলিম গাছ লাগালে, আর তা থেকে পাখি, মানুষ বা কোনো প্রাণী খেলে, সেটা তার জন্য সদকা হয়ে যায়।' প্রতিটি সবুজ গাছ নিজের মতো করে আল্লাহর তাসবিহ পড়ে। ঘরের টবের গাছে পানি লাগলে পানি দাও। শুধু ছিঁড়ে ফেলে দেওয়ার জন্য ফুল তুলো না। গাছের গায়ে কিছু খোদাই করো না, অকারণে ডাল ভেঙো না। পারলে একটা বীজ লাগাও, লেবু, পুদিনা বা কোনো ফুলের। তারপর দেখো, কেমন করে বড় হয়। গাছের যত্ন নেওয়া এমন এক ইবাদত, যার সওয়াব তুমি চলে যাওয়ার পরেও চলতে থাকে।"
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
      "bn": "খেলায় হেরে গেছ? প্রিয় খেলনাটা ভেঙে গেছে? অপেক্ষা করতে করতে আর ভালো লাগছে না? একটা লম্বা শ্বাস নাও, আর বলো 'আলহামদুলিল্লাহ'। কুরআন আমাদের শেখায়, ধৈর্য আর নামাজের মাধ্যমে আল্লাহর সাহায্য চাইতে। কুরআন কথাও দিয়েছে, আল্লাহ ধৈর্যশীলদের সাথে আছেন। ধৈর্য ধরা মানে এই নয় যে তোমার মন খারাপ হতে পারবে না। এর মানে হলো চিৎকার না করা, জিনিস ছুঁড়ে না ফেলা, হাল ছেড়ে না দেওয়া। ধৈর্যশীল মন শান্ত থাকে, ঠিকঠাক ভাবতে পারে। আর সে দেখে, কঠিন সময়টা অনেক তাড়াতাড়ি কেটে যায়।"
    },
    "arabic": "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    "ref": "Quran 2:153"
  },
  {
    "id": "say-sorry-forgive",
    "title": {
      "en": "Say Sorry — and Forgive Others",
      "bn": "'সরি' বলো, অন্যকে মাফ করো"
    },
    "body": {
      "en": "Everyone makes mistakes — bumping a friend, breaking something, saying an unkind word. When it happens, be brave: look at the person and say, 'I'm sorry, please forgive me.' That is strength, not weakness. And when someone says sorry to you, forgive them with a smile. The Quran teaches us to pardon and overlook, and asks: would you not love for Allah to forgive you? Forgive others, and Allah's forgiveness comes closer to you.",
      "bn": "ভুল সবাই করে। হয়তো বন্ধুর গায়ে ধাক্কা লেগে গেল, কিছু ভেঙে গেল, বা মুখ ফসকে কড়া কথা বেরিয়ে গেল। এমন হলে সাহস করো। মানুষটার দিকে তাকিয়ে বলো, 'আমি দুঃখিত, আমাকে মাফ করে দাও।' এটা দুর্বলতা নয়, এটাই শক্তি। আর কেউ তোমাকে 'সরি' বললে হাসিমুখে মাফ করে দিয়ো। কুরআন আমাদের শেখায় মাফ করতে আর দোষ ভুলে যেতে। কুরআন জিজ্ঞেস করে: তুমি কি চাও না, আল্লাহ তোমাকে মাফ করুন? অন্যকে মাফ করো, আল্লাহর মাফও তোমার কাছে চলে আসবে।"
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
      "bn": "কারো চেহারা, কথা বলা, হাঁটাচলা বা জামাকাপড় নিয়ে কখনো হাসাহাসি করো না। কাউকে কষ্ট দেয় এমন নামে ডেকো না। কুরআন পরিষ্কার বলেছে: কেউ যেন অন্যদের নিয়ে ঠাট্টা না করে, হতে পারে তারাই তোমাদের চেয়ে ভালো! যে ছেলে বা মেয়েটাকে সবাই খেপায়, হয়তো সে-ই ক্লাসের সবার চেয়ে আল্লাহর বেশি প্রিয়। যে মজায় সবাই একসাথে হাসে, সেটা ঠিক আছে। কিন্তু যে মজায় একজন কাঁদে, সেটা কোনো মজাই নয়। মুখের কথায় বন্ধু বানাও, কাউকে কষ্ট দিয়ো না।"
    },
    "arabic": "لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ",
    "ref": "Quran 49:11"
  },
  {
    "id": "speak-gently",
    "title": {
      "en": "Speak Kindly and Softly",
      "bn": "নরম সুরে সুন্দর কথা বলো"
    },
    "body": {
      "en": "Words are like seeds: kind words grow friendship, harsh words grow hurt. The Quran commands us to 'speak good words to people' — to parents, teachers, friends, shopkeepers, everyone. It also teaches us to lower our voice, for the harshest of sounds is the braying of a donkey! So no shouting indoors, no interrupting, no rude words. Try saying 'please,' 'thank you,' and 'may I' every day, in a soft voice, with a smile — and watch how people love talking to you.",
      "bn": "কথা হলো বীজের মতো। ভালো কথা থেকে বন্ধুত্ব গজায়, কড়া কথা থেকে কষ্ট। কুরআন আদেশ দিয়েছে, 'মানুষের সাথে সুন্দর করে কথা বলো।' বাবা-মা, শিক্ষক, বন্ধু, দোকানদার, সবার সাথে। কুরআন আরও শেখায় গলা নিচু রাখতে, কারণ সবচেয়ে বিশ্রী আওয়াজ হলো গাধার ডাক! তাই ঘরের ভেতর চেঁচামেচি নয়, কথার মাঝে কথা নয়, খারাপ কথা নয়। প্রতিদিন নরম গলায়, হাসিমুখে 'দয়া করে', 'ধন্যবাদ' আর 'আমি কি একটু...?' বলার অভ্যাস করো। তারপর দেখো, সবাই তোমার সাথে কথা বলতে কত ভালোবাসে।"
    },
    "arabic": "وَقُولُوا لِلنَّاسِ حُسْنًا",
    "ref": "Quran 2:83"
  },
  {
    "id": "control-anger",
    "title": {
      "en": "Swallow Your Anger",
      "bn": "রাগ সামলাও"
    },
    "body": {
      "en": "When someone takes your seat, ruins your drawing, or blames you unfairly, a hot feeling rises inside — that is anger. The Quran praises those 'who restrain anger and pardon people,' and says Allah loves such doers of good. So when anger comes: stop, keep quiet for a moment, and breathe. Walk away if you need to, or sit down and drink some water. Anger is like fire — if you do not feed it, it goes out. The strongest kid is not the one who hits hardest, but the one who stays calm.",
      "bn": "কেউ তোমার জায়গায় বসে পড়লে, তোমার আঁকা ছবি নষ্ট করে দিলে, বা বিনা দোষে তোমাকে দোষ দিলে ভেতরটা কেমন গরম হয়ে ওঠে। এটাই রাগ। কুরআন তাদের প্রশংসা করেছে, 'যারা রাগ সামলে রাখে আর মানুষকে মাফ করে দেয়'। আল্লাহ এমন ভালো মানুষদের ভালোবাসেন। তাই রাগ উঠলে থামো। একটু চুপ করে থাকো, শ্বাস নাও। দরকার হলে সেখান থেকে সরে যাও, বা বসে একটু পানি খাও। রাগ আগুনের মতো। জ্বালানি না পেলে নিজেই নিভে যায়। সবচেয়ে শক্তিশালী সে নয়, যে সবচেয়ে জোরে মারে। সবচেয়ে শক্তিশালী সে, যে শান্ত থাকতে পারে।"
    },
    "arabic": "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
    "ref": "Quran 3:134"
  },
  {
    "id": "say-inshallah",
    "title": {
      "en": "Say Insha'Allah for Tomorrow",
      "bn": "কালকের কাজে বলো 'ইনশাআল্লাহ'"
    },
    "body": {
      "en": "Planning to visit grandma tomorrow? Going to finish your homework tonight? Add a beautiful phrase: 'Insha'Allah' — if Allah wills. The Quran teaches us never to say 'I will surely do that tomorrow' without adding 'if Allah wills,' because tomorrow belongs to Allah, not to us. Saying Insha'Allah is not an excuse to be lazy — you still try your very best. It simply means: 'I will do my part, and I trust Allah with the rest.'",
      "bn": "কাল দাদু বা নানুর বাসায় যাবে? আজ রাতে হোমওয়ার্ক শেষ করবে? সাথে একটা সুন্দর কথা জুড়ে দাও: 'ইনশাআল্লাহ', মানে আল্লাহ চাইলে। কুরআন শেখায়, 'কাল আমি অবশ্যই এটা করব', এ কথা কখনো 'ইনশাআল্লাহ' ছাড়া বলবে না। কারণ আগামীকাল আল্লাহর হাতে, আমাদের হাতে নয়। ইনশাআল্লাহ বলা মানে অলস হয়ে বসে থাকা নয়। তুমি তোমার সবচেয়ে ভালো চেষ্টাটাই করবে। এর মানে শুধু: 'আমার কাজটুকু আমি করব, বাকিটা আল্লাহর উপর ছেড়ে দিলাম।'"
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
      "bn": "যে চোখ দিয়ে এটা পড়ছ, সকালে যে নাশতা খেয়েছ, যে পরিবার তোমাকে ভালোবাসে, সবই আল্লাহর উপহার। ঘুম থেকে উঠে, খাওয়ার পরে, ভালো কিছু হলে, এমনকি হাঁচি দেওয়ার পরেও বলো 'আলহামদুলিল্লাহ', মানে সব প্রশংসা আল্লাহর। কুরআনে আল্লাহ আমাদের চমৎকার একটা কথা দিয়েছেন: 'তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের আরও বেশি দেব।' কৃতজ্ঞ মন খুশি মন। সে অভিযোগ না গুনে নিয়ামত গোনে। আর আল্লাহ গোনার জন্য আরও নিয়ামত দিতেই থাকেন।"
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
      "bn": "কারো বাসায় বা বন্ধ ঘরে ঢোকার আগে, এমনকি বাবা-মা বা ভাই-বোনের ঘরেও, আস্তে দরজায় নক করো, সালাম দাও, আর ভেতরে ডাকার জন্য অপেক্ষা করো। কুরআন শেখায়, নিজের ঘর ছাড়া অন্য কারো ঘরে অনুমতি না নিয়ে আর ঘরের লোকদের সালাম না দিয়ে ঢুকবে না। কেউ সাড়া না দিলে, বা বললে 'এখন না', মন খারাপ না করে হাসিমুখে ফিরে এসো। অনুমতি চাওয়া মানে সম্মান দেখানো। এতে অন্যরা বোঝে, 'তোমার জায়গা আর তোমার একান্ত সময় আমার কাছে দামি।' কারো জিনিস ধার নেওয়ার বেলায়ও একই আদব: আগে জিজ্ঞেস করো!"
    },
    "arabic": "حَتَّىٰ تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا",
    "ref": "Quran 24:27"
  }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QAIDA_LETTERS, QAIDA_HARAKAT, QAIDA_WORDS, KIDS_THEME_WORDS, KIDS_NUMBERS, KIDS_DUAS, KIDS_KALIMAS, KIDS_SURAHS, KIDS_STORIES, KIDS_ADAB };
}
