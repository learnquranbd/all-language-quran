// Shared reads for the Mutashabihat notes pipeline (prep / validate / merge).
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '../..');
const J = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
function groups() {
  const c = {}; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/mutashabihat-data.js'), 'utf8') + ';this.G = MUTASHABIHAT_GROUPS;', c);
  return c.G;
}
const NOTES = 'data/mutashabihat-notes.json';
const notes = () => fs.existsSync(path.join(ROOT, NOTES)) ? J(NOTES) : {};
// Arabic letters only (no diacritics, no tatweel), alif forms folded, so a word quoted in
// a note can be matched against the verse's tokens.
const norm = s => String(s || '').normalize('NFC')
  .replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ]/g, '')
  .replace(/[آأإٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
  .replace(/[^ء-ي]/g, '');
module.exports = { ROOT, J, groups, NOTES, notes, norm };
