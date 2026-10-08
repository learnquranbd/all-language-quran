// The theme pages: one tab each. Shared by the build tools; js/theme-pages-index.js
// carries the same list for the app (tests/check-themes.js keeps them in step).
const THEMES = [
  { id: 'allah-remembrance', group: 'allah', emoji: '📿', partial: 'ALLAH/remembrance', en: 'Remembering Allah', bn: 'আল্লাহর স্মরণ' },
  { id: 'allah-loves',       group: 'allah', emoji: '💚', partial: 'ALLAH/likes',       en: 'Whom Allah Loves', bn: 'আল্লাহ যাদের ভালোবাসেন' },
  { id: 'allah-dislikes',    group: 'allah', emoji: '🚫', partial: 'ALLAH/dislikes',    en: 'Whom Allah Does Not Love', bn: 'আল্লাহ যাদের ভালোবাসেন না' },
  { id: 'allah-woe',         group: 'allah', emoji: '⚠️', partial: 'ALLAH/woe',         en: 'Woe to Them', bn: 'যাদের জন্য দুর্ভোগ' },
  { id: 'allah-curse',       group: 'allah', emoji: '⛔', partial: 'ALLAH/curse',       en: 'Those Allah Has Cursed', bn: 'যাদের ওপর আল্লাহর লানত' },
  { id: 'allah-gratitude',   group: 'allah', emoji: '🤲', partial: 'ALLAH/thanks',      en: 'Gratitude to Allah', bn: 'আল্লাহর প্রতি কৃতজ্ঞতা' },
  { id: 'allah-good-opinion', group: 'allah', emoji: '🌤️', partial: 'ALLAH/well-thing', en: 'Thinking Well of Allah', bn: 'আল্লাহর প্রতি সুধারণা' },
  { id: 'th-o-mankind',      group: 'themes', emoji: '🌍', partial: 'quran/ya-ayyuhannas', en: 'O Mankind', bn: 'হে মানুষ' },
  { id: 'th-o-believers',    group: 'themes', emoji: '🤝', partial: 'quran/ya-ayyuhal-lazina-amanu', en: 'O You Who Believe', bn: 'হে ঈমানদারগণ' },
  { id: 'th-sajdah',         group: 'themes', emoji: '🙇', partial: 'quran/sejda',        en: 'Verses of Prostration', bn: 'সেজদার আয়াত' },
  { id: 'th-parables',       group: 'themes', emoji: '🌳', partial: 'subject/parables',   en: 'Parables of the Quran', bn: 'উপমা ও দৃষ্টান্ত' },
  { id: 'th-resurrection',   group: 'themes', emoji: '🌅', partial: 'quran/resurrection', en: 'The Resurrection', bn: 'কিয়ামত (পুনরুত্থান দিবস)' },
  { id: 'th-hereafter',      group: 'themes', emoji: '♾️', partial: 'quran/hereafter',    en: 'The Hereafter', bn: 'আখিরাত' },
  { id: 'th-judgement',      group: 'themes', emoji: '⚖️', partial: 'quran/judgement',    en: 'The Day of Judgement', bn: 'বিচারের দিন' },
  { id: 'th-wrongdoers',     group: 'themes', emoji: '✋', partial: 'quran/wrongdoer',    en: 'The Wrongdoers', bn: 'অন্যায়কারী' },
  { id: 'th-hell',           group: 'themes', emoji: '🔥', partial: 'quran/hell',         en: 'Hell and Its People', bn: 'জাহান্নাম ও এর অধিবাসী' },
  { id: 'th-repentance',     group: 'themes', emoji: '↩️', partial: 'quran/repentance',   en: 'Repentance', bn: 'তওবা' },
  { id: 'th-patience',       group: 'themes', emoji: '⛰️', partial: 'quran/patience',     en: 'Patience', bn: 'ধৈর্য ও সবর' },
  { id: 'th-forgiveness',    group: 'themes', emoji: '🕊️', partial: 'quran/forgiveness',  en: 'Forgiveness', bn: 'ক্ষমা' },
  { id: 'th-paradise',       group: 'themes', emoji: '🌿', partial: 'quran/heaven',       en: 'Paradise and Its People', bn: 'জান্নাত ও এর অধিবাসী' },
];
module.exports = { THEMES };
