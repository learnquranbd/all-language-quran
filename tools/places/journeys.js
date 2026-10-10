// The journeys the "Places in the Quran" map draws as routes. Candidate refs and stops are
// hints for the drafter (JOURNEYS.md), not authoritative. Batches J1-J2.
const JOURNEYS = [
  // J1: the Prophet's ﷺ time and Quraysh
  { id: 'isra', batch: 'J1', en: 'The Night Journey (al-Isrāʾ)', refs: ['17:1'], stops: ['masjid-haram', 'aqsa'] },
  { id: 'hijrah', batch: 'J1', en: 'The Hijrah', refs: ['9:40', '8:30', '47:13'], stops: ['makkah', 'cave-thawr', 'madinah'] },
  { id: 'quraysh', batch: 'J1', en: 'The winter and summer journeys of Quraysh', refs: ['106:1-4'], stops: ['makkah', '(Yemen)', '(ash-Shām)'] },
  { id: 'fil', batch: 'J1', en: 'The march of the Elephant army', refs: ['105:1-5'], stops: ['(Yemen, Ṣanʿāʾ)', 'fil'] },
  { id: 'hudaybiyah', batch: 'J1', en: 'To al-Ḥudaybiyah, and the ʿUmrah after it', refs: ['48:18', '48:24-27'], stops: ['madinah', 'hudaybiyah', 'masjid-haram'] },
  { id: 'tabuk', batch: 'J1', en: 'The expedition to Tabūk', refs: ['9:38-42', '9:117'], stops: ['madinah', 'tabuk'] },
  // J2: the prophets
  { id: 'ibrahim', batch: 'J2', en: 'Ibrāhīm\'s emigration, and Makkah', refs: ['21:71', '29:26', '37:99', '14:37', '2:127'], stops: ['ibrahim-fire', 'holy-land', 'makkah'] },
  { id: 'yusuf', batch: 'J2', en: 'Yūsuf: from the well to Egypt, and his family after him', refs: ['12:15', '12:19-21', '12:99-100'], stops: ['kanaan', 'yusuf-well', 'misr'] },
  { id: 'musa-madyan', batch: 'J2', en: 'Mūsā flees Egypt to Madyan', refs: ['28:20-23'], stops: ['misr', 'madyan'] },
  { id: 'musa-return', batch: 'J2', en: 'Mūsā returns: the fire at aṭ-Ṭūr, then Egypt', refs: ['28:29-35', '20:9-24'], stops: ['madyan', 'tuwa', 'misr'] },
  { id: 'exodus', batch: 'J2', en: 'The Israelites leave Egypt', refs: ['26:52-66', '20:77-80', '5:21-26'], stops: ['misr', 'sea-crossing', 'tur', 'tih'] },
  { id: 'saba', batch: 'J2', en: 'Sabaʾ and the chain of towns', refs: ['34:18-19'], stops: ['saba', '(the blessed towns)'] },
];
module.exports = { JOURNEYS };
