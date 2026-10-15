// Objects that already carry 3+ inline languages ({ en, bn, fr, id, ur, ... }) are skipped by extract.js, so the
// languages they lack stay English (render sites read o[lang] || o.en). This fills them in place, in the source.
//   node tools/content-i18n/inline.js extract        -> work/I-<lang>/en.json per language + work/inline-index.json
//   node tools/content-i18n/inline.js apply [--write] -> adds each missing language to the object literal, taking the
//        text from work/I-<lang>/tr-<lang>.json (checked with check.js I-<lang> <lang>) or from the content dictionaries
// An inline zh/ja/... value that only repeats the English counts as missing and is replaced.
const { fs, path, ROOT, WORK, LANGS, inlineLangs, mask, unmask } = require('./lib.js');
const L = require('../../tests/lib.js');
const acorn = (() => { try { return require('acorn'); } catch (e) { return require('/usr/lib/node_modules/lighthouse/node_modules/acorn'); } })();
const NS = ['hope', 'surahnames', 'prophets', 'mutashabihat', 'handwriting', 'tajweed', 'kids', 'tadabbur'];
const SKIP_FILES = /tadabbur-data|-articles\.js$/;
const SKIP_CONSTS = new Set(['SURAH_DATA']);   // surah names: transliterations; getSurahName handles ar/fa
const NONLATIN = new Set(['ur', 'ar', 'hi', 'ru', 'zh', 'fa', 'ja']);
const IDX = path.join(WORK, 'inline-index.json');

function dict(lang) {
  const d = {};
  for (const n of NS) try { Object.assign(d, JSON.parse(fs.readFileSync(path.join(ROOT, 'data/content-i18n', n, lang + '.json'), 'utf8'))); } catch (e) { /* none */ }
  return Object.assign(d, JSON.parse(fs.readFileSync(path.join(ROOT, 'data/content-i18n', lang + '.json'), 'utf8')));
}
// a dictionary entry is reused only for sentences: a word or two ('light', 'the straight') may mean something else there
const fromDict = (D, en) => (en.split(/\s+/).length >= 4 ? D[en] : undefined);
const isCopy = (o, l) => o[l] === o.en && (NONLATIN.has(l) || o.en.split(/\s+/).length >= 3);
const missing = (o) => LANGS.filter((l) => !(typeof o[l] === 'string' && o[l].trim()) || isCopy(o, l));

function extract() {
  const index = {}, per = Object.fromEntries(LANGS.map((l) => [l, {}]));
  for (const rel of L.dataFiles()) {
    if (SKIP_FILES.test(rel)) continue;
    let sb; try { sb = L.load(rel); } catch (e) { continue; }
    for (const name of L.constNames(rel)) {
      if (SKIP_CONSTS.has(name)) continue;
      (function walk(n, p) {
        if (n == null || typeof n !== 'object') return;
        if (Array.isArray(n)) return n.forEach((x, i) => walk(x, p.concat(i)));
        const keys = Object.keys(n);
        if (typeof n.en === 'string' && /[a-z]{3}/i.test(n.en) && inlineLangs(name, keys).length >= 3) {
          const need = missing(n);
          if (!need.length) return;
          const id = `${rel}|${name}|${p.join('.')}`, m = mask(n.en);
          index[id] = { file: rel, name, path: p, en: n.en, runs: m.runs, need };
          for (const l of need) per[l][id] = m.t;
          return;
        }
        for (const [k, v] of Object.entries(n)) walk(v, p.concat(k));
      })(L.get(sb, name), []);
    }
  }
  fs.writeFileSync(IDX, JSON.stringify(index, null, 1));
  for (const l of LANGS) {
    const D = dict(l), todo = {};
    for (const [id, t] of Object.entries(per[l])) if (!fromDict(D, index[id].en)) todo[id] = t;
    const dir = path.join(WORK, 'I-' + l);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'en.json'), JSON.stringify(todo, null, 1));
    console.log(`I-${l}: ${Object.keys(per[l]).length} missing, ${Object.keys(per[l]).length - Object.keys(todo).length} from dictionaries, ` +
      `${Object.keys(todo).length} to translate (${Object.values(todo).join(' ').split(/\s+/).filter(Boolean).length} words)`);
  }
}

/** Single-quoted JS literal, the style the data files use. */
const sq = (s) => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const keyName = (k) => k.type === 'Identifier' ? k.name : k.value;

function locate(ast, name, p) {
  let node = null;
  for (const st of ast.body) if (st.type === 'VariableDeclaration') for (const d of st.declarations) if (d.id.name === name) node = d.init;
  for (const k of p) {
    if (!node) return null;
    if (node.type === 'ArrayExpression') node = node.elements[k];
    else if (node.type === 'ObjectExpression') { const pr = node.properties.find((x) => x.key && keyName(x.key) === String(k)); node = pr && pr.value; }
    else return null;
  }
  return node && node.type === 'ObjectExpression' ? node : null;
}

function apply(write) {
  const index = JSON.parse(fs.readFileSync(IDX, 'utf8'));
  const TR = {}, D = {};
  for (const l of LANGS) {
    D[l] = dict(l);
    try { TR[l] = JSON.parse(fs.readFileSync(path.join(WORK, 'I-' + l, `tr-${l}.json`), 'utf8')); } catch (e) { TR[l] = {}; }
  }
  const byFile = {};
  for (const [id, v] of Object.entries(index)) (byFile[v.file] = byFile[v.file] || []).push([id, v]);
  let added = 0, replaced = 0, lost = 0, open = 0;
  for (const [rel, items] of Object.entries(byFile)) {
    const file = path.join(ROOT, rel), src = fs.readFileSync(file, 'utf8');
    const ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script' });
    const edits = [];
    for (const [id, v] of items) {
      const obj = locate(ast, v.name, v.path);
      if (!obj) { lost++; console.log('NOT FOUND', id); continue; }
      const enProp = obj.properties.find((x) => x.key && keyName(x.key) === 'en');
      if (!enProp || enProp.value.value !== v.en) { lost++; console.log('EN CHANGED', id); continue; }
      const adds = [];
      for (const l of v.need) {
        const t = TR[l][id] != null ? unmask(TR[l][id], v.runs) : fromDict(D[l], v.en);
        if (!t) { open++; continue; }
        const pr = obj.properties.find((x) => x.key && keyName(x.key) === l);
        if (pr) { edits.push([pr.value.start, pr.value.end, sq(t)]); replaced++; } else { adds.push(`${l}: ${sq(t)}`); added++; }
      }
      if (adds.length) { const last = obj.properties[obj.properties.length - 1]; edits.push([last.end, last.end, ', ' + adds.join(', ')]); }
    }
    edits.sort((a, b) => b[0] - a[0]);
    let out = src;
    for (const [a, b, s] of edits) out = out.slice(0, a) + s + out.slice(b);
    if (write && out !== src) { fs.writeFileSync(file, out); acorn.parse(out, { ecmaVersion: 'latest', sourceType: 'script' }); }
    console.log(`${rel}: ${edits.length} edits`);
  }
  console.log(`added ${added}, replaced ${replaced} copies, still missing ${open}, objects not found ${lost}${write ? '' : '  (dry run: --write to save)'}`);
}

const cmd = process.argv[2];
if (cmd === 'extract') extract();
else if (cmd === 'apply') apply(process.argv.includes('--write'));
else console.log('usage: inline.js extract | apply [--write]');
