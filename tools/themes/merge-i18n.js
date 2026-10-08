// Merge tools/themes/i18n/*.json into js/translations.js (en) and js/i18n/<lang>.js.
// Inserts after the "wr_show_more" line; replaces a key's value if it already exists.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..'), DIR = path.join(__dirname, 'i18n');
const EB = JSON.parse(fs.readFileSync(path.join(DIR, 'en-bn.json'), 'utf8'));
const packs = { en: Object.fromEntries(Object.entries(EB).map(([k, v]) => [k, v[0]])),
                bn: Object.fromEntries(Object.entries(EB).map(([k, v]) => [k, v[1]])) };
for (const f of fs.readdirSync(DIR)) { const m = f.match(/^([a-z]{2})\.json$/); if (m) packs[m[1]] = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); }
for (const [lang, kv] of Object.entries(packs)) {
  const file = path.join(ROOT, lang === 'en' ? 'js/translations.js' : `js/i18n/${lang}.js`);
  let s = fs.readFileSync(file, 'utf8');
  const anchor = s.match(/^( *)"wr_show_more": .*,\n/m);
  if (!anchor) { console.log('NO ANCHOR', lang); continue; }
  let ins = '', upd = 0;
  for (const k of Object.keys(EB)) {
    if (kv[k] == null) { console.log('missing', lang, k); continue; }
    const line = `${anchor[1]}${JSON.stringify(k)}: ${JSON.stringify(kv[k])},\n`;
    const re = new RegExp(`^ *${JSON.stringify(k)}: .*,\\n`, 'm');
    if (re.test(s)) { s = s.replace(re, line); upd++; } else ins += line;
  }
  const at = s.indexOf(anchor[0]) + anchor[0].length;
  s = s.slice(0, at) + ins + s.slice(at);
  fs.writeFileSync(file, s);
  console.log(lang, 'inserted', ins.split('\n').length - 1, 'updated', upd);
}
