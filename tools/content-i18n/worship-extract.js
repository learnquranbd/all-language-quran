// Translation packets for the worship pages (Hajj, Zakat, Sawm), the Islam rulings pages (fard, wajib, nafl,
// makruh, mustahabb), the Seerah "As He Was" cards and their long articles. Same format as json-extract.js,
// so json-merge.js merges them: work/J<n>/en.json + work/J<n>/index.json { id: { en, ns, runs } }.
//   J6       worship + rulings + conduct cards -> shared data/content-i18n/<lang>.json (their L()/lc() call
//            CI18N.tr(lang, en) without a namespace)
//   J7, J8   conduct articles -> data/content-i18n/art-conduct/<id>/<lang>.json (lc(x, 'art-conduct/<id>'))
// Only strings missing from at least one of the 13 target files are taken.
// usage: node tools/content-i18n/worship-extract.js [--dry]
const { fs, path, ROOT, WORK, LANGS, mask } = require('./lib.js');
const vm = require('vm');
const acorn = (() => { try { return require('acorn'); } catch (e) { return require('/usr/lib/node_modules/lighthouse/node_modules/acorn'); } })();
const dry = process.argv.includes('--dry');

const FILES = ['js/learn-hajj.js', 'js/learn-zakat.js', 'js/learn-sawm.js',
  'js/islam-fard.js', 'js/islam-wajib.js', 'js/islam-nafl.js', 'js/islam-makruh.js', 'js/islam-mustahabb.js'];
const isText = (s) => typeof s === 'string' && s.trim() && /[a-zA-Z]{3}/.test(s);
const str = (n) => n && (n.type === 'Literal' && typeof n.value === 'string' ? n.value
  : n.type === 'TemplateLiteral' && !n.expressions.length ? n.quasis[0].value.cooked : null);
const keyName = (p) => p.key && (p.key.name || p.key.value);

/** Every English string in a file's {en, bn} objects and fooEn: fields (string or array of strings). */
function fromSource(rel, onlyConst) {
  const src = fs.readFileSync(path.join(ROOT, rel), 'utf8'), out = [];
  let root = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script' });
  if (onlyConst) root = root.body.find((s) => s.type === 'VariableDeclaration' && s.declarations[0].id.name === onlyConst);
  (function walk(n) {
    if (!n || typeof n.type !== 'string') return;
    if (n.type === 'ObjectExpression') {
      const keys = n.properties.map(keyName);
      if (LANGS.filter((l) => keys.includes(l)).length < 3) for (const p of n.properties) {
        const k = keyName(p);
        if (k !== 'en' && !/En$/.test(String(k))) continue;
        const vals = p.value.type === 'ArrayExpression' ? p.value.elements.map(str) : [str(p.value)];
        for (const v of vals) if (isText(v)) out.push(v);
      }
    }
    for (const [k, v] of Object.entries(n)) {
      if (k === 'loc' || k === 'start' || k === 'end') continue;
      if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === 'object') walk(v);
    }
  })(root);
  return out;
}

const dictCache = {};
const dict = (ns, l) => {
  const f = path.join(ROOT, 'data/content-i18n', ns === 'shared' ? `${l}.json` : `${ns}/${l}.json`);
  return (dictCache[f] = dictCache[f] || (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}));
};
const missing = (ns, en) => LANGS.some((l) => { const v = dict(ns, l)[en] ?? (ns !== 'shared' ? dict('shared', l)[en] : undefined); return v == null || v === en; });

// J6: shared strings, in page order, deduplicated
const shared = [];
for (const f of FILES) shared.push(...fromSource(f).map((en) => [f.replace(/^js\/|\.js$/g, ''), en]));
shared.push(...fromSource('js/seerah-data.js', 'SEERAH_CONDUCT').map((en) => ['seerah-conduct', en]));
const seen = new Set(), j6 = [];
for (const [tag, en] of shared) if (!seen.has(en) && (seen.add(en), missing('shared', en))) j6.push([`shared|${tag}|${j6.length}`, en, 'shared']);

// J7/J8: conduct articles, whole articles per chunk, split by words
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/seerah-conduct-articles.js'), 'utf8') + '\n;this.__x = SEERAH_CONDUCT_ARTICLES;', ctx);
const arts = Object.entries(ctx.__x).map(([id, art]) => {
  const items = [], ns = 'art-conduct/' + id;
  (art.sections || []).forEach((sec, si) => {
    if (sec.h && isText(sec.h.en)) items.push([`conduct|${id}|${si}.h`, sec.h.en, ns]);
    (sec.p || []).forEach((p, pi) => { if (p && isText(p.en)) items.push([`conduct|${id}|${si}.${pi}`, p.en, ns]); });
  });
  return items.filter(([, en]) => missing(ns, en));
}).filter((a) => a.length);
const words = (items) => items.reduce((s, [, en]) => s + en.split(/\s+/).length, 0);
const total = arts.reduce((s, a) => s + words(a), 0);
const j7 = [], j8 = [];
for (const a of arts) (words(j7) < total / 2 ? j7 : j8).push(...a);

for (const [c, items] of [['J6', j6], ['J7', j7], ['J8', j8]]) {
  const en = {}, index = {};
  for (const [id, s, ns] of items) { const m = mask(s); en[id] = m.t; index[id] = { en: s, ns, runs: m.runs }; }
  console.log(`${c}: ${items.length} strings, ${words(items)} words, ${new Set(items.map(([, , ns]) => ns)).size} ns`);
  if (dry || !items.length) continue;
  fs.mkdirSync(path.join(WORK, c), { recursive: true });
  fs.writeFileSync(path.join(WORK, c, 'en.json'), JSON.stringify(en, null, 1));
  fs.writeFileSync(path.join(WORK, c, 'index.json'), JSON.stringify(index, null, 1));
}
