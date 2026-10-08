// Pull the old app's ayah list + videos/books/articles for each theme page.
// usage: node tools/themes/extract-legacy.js   → tools/themes/legacy/<id>.json
const fs = require('fs'), path = require('path'), vm = require('vm');
const LEG = '/var/www/html/learnquranbd/understand-quran/firebase/public/partials/';
const { THEMES } = require('./registry.js');
for (const t of THEMES) {
  if (!t.partial) continue;
  const src = fs.readFileSync(LEG + t.partial + '.html', 'utf8');
  const refsM = src.match(/CayahArray\s*=\s*["'`]([^"'`]*)["'`]/);
  const refs = refsM ? refsM[1].split(',').map(s => s.trim()).filter(Boolean) : [];
  const i = src.indexOf('dynamic_data');
  let dd = {};
  if (i >= 0) {
    const start = src.indexOf('{', i);
    let depth = 0, j = start;
    for (; j < src.length; j++) { if (src[j] === '{') depth++; else if (src[j] === '}') { depth--; if (!depth) break; } }
    try { dd = vm.runInNewContext('(' + src.slice(start, j + 1) + ')', { String2AyahArray: () => [], CayahArray: '' }); }
    catch (e) { console.error(t.id, 'parse failed:', e.message); }
  }
  const out = { id: t.id, partial: t.partial, refs, subject: dd.subject || '', introHtml: dd.introHtml || '',
    videos: dd.videos || [], books: dd.books || [], articles: dd.articles || [] };
  fs.writeFileSync(path.join(__dirname, 'legacy', t.id + '.json'), JSON.stringify(out, null, 1));
  console.log(t.id.padEnd(22), 'refs', String(refs.length).padStart(3), 'videos', out.videos.length, 'books', out.books.length, 'articles', out.articles.length);
}
