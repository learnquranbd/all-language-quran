// Shared helpers for the Tadabbur card i18n wave: load the cards, find a card's block in
// js/tadabbur-data.js, split the cards into fixed chunks.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '../..'), DATA = path.join(ROOT, 'js/tadabbur-data.js');
const WORK = path.join(__dirname, 'work');
const CHUNKS = 10;
function cards() {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(DATA, 'utf8') + ';this.__T = TADABBUR_NOTES', ctx);
  return ctx.__T;
}
/** Chunks. C1..C10 are frozen to the refs their work/<C>/en.json already hold (wave 1, 1,061 cards);
 *  cards added later go, in file order, into W1..Wn of about W_CARDS cards each (wave 2). Re-splitting
 *  C1..C10 would orphan every finished tr-<lang>.json, so never do that. */
const W_CARDS = 140;
function chunkRefs() {
  const refs = Object.keys(cards()), out = {}, seen = new Set();
  for (let i = 1; i <= CHUNKS; i++) {
    const f = path.join(WORK, 'C' + i, 'en.json');
    if (!fs.existsSync(f)) continue;
    const r = [...new Set(Object.keys(JSON.parse(fs.readFileSync(f, 'utf8'))).map(k => k.split('|')[0]))].filter(x => refs.includes(x));
    out['C' + i] = r; r.forEach(x => seen.add(x));
  }
  if (!Object.keys(out).length) { const size = Math.ceil(refs.length / CHUNKS); for (let i = 0; i < CHUNKS; i++) out['C' + (i + 1)] = refs.slice(i * size, (i + 1) * size); return out; }
  const rest = refs.filter(x => !seen.has(x));
  for (let i = 0; i * W_CARDS < rest.length; i++) out['W' + (i + 1)] = rest.slice(i * W_CARDS, (i + 1) * W_CARDS);
  return out;
}
/** [start, end) of a card's block in the file text. */
function block(src, ref) {
  const head = `\n  ${JSON.stringify(ref)}: {`;
  const a = src.indexOf(head);
  if (a < 0) return null;
  const b = src.indexOf('\n  },', a + head.length), c = src.indexOf('\n  }\n', a + head.length);
  const end = [b, c].filter(x => x > 0).sort((x, y) => x - y)[0];
  return [a, end];
}
/** The English strings of a card, with stable ids "ref|field|i". */
function enStrings(ref, n) {
  const out = [[`${ref}|reflection`, n.reflectionEn]];
  (n.pointsEn || []).forEach((p, i) => out.push([`${ref}|points|${i}`, p]));
  out.push([`${ref}|lesson`, n.lessonEn]);
  return out.filter(([, s]) => typeof s === 'string' && s.trim());
}
module.exports = { fs, path, ROOT, DATA, WORK, cards, chunkRefs, block, enStrings };
