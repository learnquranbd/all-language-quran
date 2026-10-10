// Write the per-chunk packets for the Tadabbur card i18n wave.
//   work/<C>/review.json  Bengali review: per card, the ayah's en/bn translation for context,
//                         the English card and the Bengali card.
//   work/<C>/en.json      translation: { "<ref|field|i>": "<English>" }.
// usage: node tools/tadabbur-i18n/extract.js
const { fs, path, ROOT, WORK, cards, chunkRefs, enStrings } = require('./lib.js');
const T = cards(), C = chunkRefs();
const TE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/translations/en.json'), 'utf8'));
const TB = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/translations/bn.json'), 'utf8'));
const ayat = ref => { const [s, r] = ref.split(':'), [a, b] = r.split('-').map(Number), o = []; for (let i = a; i <= (b || a); i++) o.push(`${s}:${i}`); return o; };
for (const [c, refs] of Object.entries(C)) {
  fs.mkdirSync(path.join(WORK, c), { recursive: true });
  const review = refs.map(ref => {
    const n = T[ref];
    return { ref, ayahEn: ayat(ref).map(k => TE[k] || '').join(' '), ayahBn: ayat(ref).map(k => TB[k] || '').join(' '),
      reflectionEn: n.reflectionEn, reflectionBn: n.reflectionBn, pointsEn: n.pointsEn, pointsBn: n.pointsBn, lessonEn: n.lessonEn, lessonBn: n.lessonBn };
  });
  fs.writeFileSync(path.join(WORK, c, 'review.json'), JSON.stringify(review, null, 1));
  const en = Object.fromEntries(refs.flatMap(ref => enStrings(ref, T[ref])));
  fs.writeFileSync(path.join(WORK, c, 'en.json'), JSON.stringify(en, null, 1));
  const words = Object.values(en).join(' ').split(/\s+/).length;
  console.log(`${c}: ${refs.length} cards (${refs[0]} … ${refs[refs.length - 1]}), ${Object.keys(en).length} strings, ${words} words`);
}
