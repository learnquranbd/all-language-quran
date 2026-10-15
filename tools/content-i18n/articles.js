// Long-form articles (Companions, Seerah, Prophets) for the 13 content languages. Each article gets its own
// file, data/content-i18n/art-<module>/<id>/<lang>.json = { "<English paragraph>": "<translation>" }, fetched
// through CI18N.tr(lang, en, 'art-<module>/<id>') only when that article is opened.
//   node tools/content-i18n/articles.js extract [wordsPerChunk=22000] -> work/A<n>/en.json (whole articles per chunk)
//   node tools/content-i18n/articles.js merge <lang> [--write]          -> every chunk whose tr-<lang>.json passes check.js
//   node tools/content-i18n/articles.js refresh  -> after editing an article's English: patch the packets in place (same
//        ids, same chunks); work/A-changed.json records, per changed id, the languages already translating that chunk
//   node tools/content-i18n/articles.js retr <lang> [--apply] -> work/R-<lang>/en.json with that language's stale ids;
//        --apply (after check.js R-<lang> <lang> is CLEAN) writes them into the chunk files and clears them
// Ids: <module>|<articleId>|<section>.h (heading) or <module>|<articleId>|<section>.<paragraph>.
const { fs, path, ROOT, WORK, mask, unmask } = require('./lib.js');
const vm = require('vm');
const { execFileSync } = require('child_process');
const MODULES = { prophets: ['js/prophets-articles.js', 'PROPHET_ARTICLES'], sahaba: ['js/sahaba-articles.js', 'SAHABA_ARTICLES'],
  seerah: ['js/seerah-articles.js', 'SEERAH_ARTICLES'] };
const IDX = path.join(WORK, 'articles-index.json');

/** Every English string of every article: [[id, en], ...] in reading order. */
function strings() {
  const out = [];
  for (const [mod, [file, name]] of Object.entries(MODULES)) {
    const ctx = {}; vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8') + `\n;this.__x = ${name};`, ctx);
    for (const [id, art] of Object.entries(ctx.__x)) (art.sections || []).forEach((sec, si) => {
      if (sec.h && sec.h.en) out.push([`${mod}|${id}|${si}.h`, sec.h.en]);
      (sec.p || []).forEach((p, pi) => { if (p && p.en) out.push([`${mod}|${id}|${si}.${pi}`, p.en]); });
    });
  }
  return out;
}
const article = (id) => id.split('|').slice(0, 2).join('|');

function extract(per) {
  const index = {}, byArt = new Map();
  for (const [id, en] of strings()) {
    const m = mask(en); index[id] = { en, runs: m.runs };
    if (!byArt.has(article(id))) byArt.set(article(id), []);
    byArt.get(article(id)).push([id, m.t]);
  }
  fs.writeFileSync(IDX, JSON.stringify(index));
  let c = 0, cur = {}, words = 0;
  const flush = () => { if (!words) return; c++; fs.mkdirSync(path.join(WORK, 'A' + c), { recursive: true });
    fs.writeFileSync(path.join(WORK, 'A' + c, 'en.json'), JSON.stringify(cur, null, 1));
    console.log(`A${c}: ${Object.keys(cur).length} strings, ${words} words, ${new Set(Object.keys(cur).map(article)).size} articles`);
    cur = {}; words = 0; };
  for (const items of byArt.values()) {
    for (const [id, t] of items) { cur[id] = t; words += t.split(/\s+/).length; }
    if (words >= per) flush();
  }
  flush();
}

function merge(lang, write) {
  const index = JSON.parse(fs.readFileSync(IDX, 'utf8'));
  const now = new Map(strings());
  const changed = readChanged();
  const files = {}; let ok = 0, stale = 0, skipped = [];
  for (const c of fs.readdirSync(WORK).filter((d) => /^A\d+$/.test(d)).sort((a, b) => a.slice(1) - b.slice(1))) {
    const trf = path.join(WORK, c, `tr-${lang}.json`);
    if (!fs.existsSync(trf)) continue;
    try { execFileSync('node', [path.join(__dirname, 'check.js'), c, lang], { stdio: 'pipe' }); }
    catch (e) { skipped.push(c); continue; }
    for (const [id, t] of Object.entries(JSON.parse(fs.readFileSync(trf, 'utf8')))) {
      const v = index[id];
      // English rewritten since packing (or since this language translated it): retranslate first
      if (!v || now.get(id) !== v.en || (changed[id] && changed[id].stale.includes(lang))) { stale++; continue; }
      const [mod, art] = id.split('|');
      (files[`art-${mod}/${art}`] = files[`art-${mod}/${art}`] || {})[v.en] = unmask(t, v.runs);
      ok++;
    }
  }
  if (write) for (const [ns, d] of Object.entries(files)) {
    const dir = path.join(ROOT, 'data/content-i18n', ns); fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, lang + '.json'), JSON.stringify(d));
  }
  console.log(`${lang}: ${ok} strings in ${Object.keys(files).length} article files, ${stale} stale` +
    (skipped.length ? `, NOT CLEAN (skipped): ${skipped.join(' ')}` : '') + (write ? ' — written' : ' (dry run: --write to save)'));
}

const CHANGED = path.join(WORK, 'A-changed.json');
const readChanged = () => (fs.existsSync(CHANGED) ? JSON.parse(fs.readFileSync(CHANGED, 'utf8')) : {});
const LANGS_ALL = ['ur', 'ar', 'hi', 'id', 'es', 'fr', 'ru', 'de', 'tr', 'zh', 'fa', 'ja', 'ms'];

function refresh() {
  const index = JSON.parse(fs.readFileSync(IDX, 'utf8')), now = new Map(strings());
  const changed = readChanged();
  const fresh = [];
  for (const [id, v] of Object.entries(index)) {
    const en = now.get(id);
    if (en == null) { console.log('GONE (structure changed: re-extract needed)', id); continue; }
    if (en === v.en) continue;
    const m = mask(en); index[id] = { en, runs: m.runs }; fresh.push(id);
    for (const c of fs.readdirSync(WORK).filter((d) => /^A\d+$/.test(d))) {
      const f = path.join(WORK, c, 'en.json'), E = JSON.parse(fs.readFileSync(f, 'utf8'));
      if (!(id in E)) continue;
      E[id] = m.t; fs.writeFileSync(f, JSON.stringify(E, null, 1));
      // a language with a finished file or parts in progress for this chunk worked from the old wording
      const st = new Set((changed[id] && changed[id].stale) || []);
      for (const l of LANGS_ALL) if (fs.existsSync(path.join(WORK, c, `tr-${l}.json`)) || fs.existsSync(path.join(WORK, c, `${l}-parts`))) st.add(l);
      changed[id] = { c, stale: [...st] };
    }
  }
  for (const id of now.keys()) if (!(id in index)) console.log('NEW (structure changed: re-extract needed)', id);
  fs.writeFileSync(IDX, JSON.stringify(index));
  fs.writeFileSync(CHANGED, JSON.stringify(changed, null, 1));
  console.log(`${fresh.length} strings refreshed: ${fresh.join(' ')}`);
}

function retr(lang, apply) {
  const index = JSON.parse(fs.readFileSync(IDX, 'utf8')), changed = readChanged(), dir = path.join(WORK, 'R-' + lang);
  const ids = Object.keys(changed).filter((id) => changed[id].stale.includes(lang));
  if (!apply) {
    if (!ids.length) { console.log(`${lang}: nothing stale`); return; }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'en.json'), JSON.stringify(Object.fromEntries(ids.map((id) => [id, mask(index[id].en).t])), null, 1));
    console.log(`R-${lang}: ${ids.length} strings to retranslate`); return;
  }
  execFileSync('node', [path.join(__dirname, 'check.js'), 'R-' + lang, lang], { stdio: 'inherit' });   // throws unless CLEAN
  const TR = JSON.parse(fs.readFileSync(path.join(dir, `tr-${lang}.json`), 'utf8'));
  for (const id of ids) {
    if (TR[id] == null) continue;
    const f = path.join(WORK, changed[id].c, `tr-${lang}.json`), T = JSON.parse(fs.readFileSync(f, 'utf8'));
    T[id] = TR[id]; fs.writeFileSync(f, JSON.stringify(T, null, 1));
    changed[id].stale = changed[id].stale.filter((l) => l !== lang);
  }
  fs.writeFileSync(CHANGED, JSON.stringify(changed, null, 1));
  console.log(`${lang}: ${ids.filter((id) => TR[id] != null).length} retranslations applied`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'extract') extract(+arg || 22000);
else if (cmd === 'merge' && arg) merge(arg, process.argv.includes('--write'));
else if (cmd === 'refresh') refresh();
else if (cmd === 'retr' && arg) retr(arg, process.argv.includes('--apply'));
else console.log('usage: articles.js extract [words] | merge <lang> [--write] | refresh | retr <lang> [--apply]');
