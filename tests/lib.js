/**
 * Shared helpers for the checks in this directory.
 *
 * The app is plain <script> files with no module system, so every check loads a
 * source file into a fresh VM context and reads its top-level consts. Keeping
 * that in one place means a check is usually a dozen lines.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

/** Minimal DOM/browser stubs — enough for a module file to evaluate. */
function makeSandbox(extra) {
  const store = {};
  const el = () => ({
    innerHTML: '', className: '', style: {}, dataset: {}, value: '', textContent: '',
    offsetParent: {}, width: 300, height: 300,
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    appendChild() {}, removeChild() {}, remove() {}, contains: () => false,
    setAttribute() {}, getAttribute: () => null,
    addEventListener() {}, removeEventListener() {},
    querySelector: () => el(), querySelectorAll: () => [], closest: () => null,
    focus() {}, scrollIntoView() {}, toDataURL: () => '',
    getContext: () => ({
      save() {}, restore() {}, clearRect() {}, beginPath() {}, moveTo() {}, lineTo() {},
      stroke() {}, fill() {}, arc() {}, fillText() {}, setLineDash() {}, translate() {},
      scale() {}, drawImage() {}, measureText: () => ({ width: 10 }),
    }),
    getBoundingClientRect: () => ({ width: 300, height: 300, left: 0, top: 0 }),
  });
  const sb = Object.assign({
    console: { log() {}, warn() {}, error() {} },
    window: {
      addEventListener() {}, dispatchEvent() {}, devicePixelRatio: 1,
      location: { href: '', protocol: 'https:' }, speechSynthesis: null,
      matchMedia: () => ({ matches: false, addEventListener() {} }),
      requestAnimationFrame: () => 0,
    },
    document: {
      getElementById: () => el(), querySelector: () => el(), querySelectorAll: () => [],
      createElement: () => el(), addEventListener() {}, body: el(), documentElement: el(),
      cookie: '',
    },
    localStorage: {
      getItem: (k) => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: (k) => { delete store[k]; },
    },
    location: { protocol: 'https:', href: '' },
    fetch: () => Promise.reject(new Error('no network in tests')),
    setTimeout, clearTimeout, setInterval, clearInterval,
    CustomEvent: function (n, o) { return { type: n, detail: o && o.detail }; },
    Audio: function () { return { play: () => Promise.resolve(), pause() {} }; },
    Image: function () { return {}; },
    navigator: { language: 'en', onLine: true },
  }, extra || {});
  sb.window.localStorage = sb.localStorage;
  sb.globalThis = sb;
  vm.createContext(sb);
  return sb;
}

/** Evaluate one or more repo files together and return the sandbox. */
function load(relPaths, extra) {
  const files = Array.isArray(relPaths) ? relPaths : [relPaths];
  const sb = makeSandbox(extra);
  const src = files.map((f) => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n;\n');
  vm.runInContext(src, sb);
  sb.__eval = (expr) => vm.runInContext(expr, sb);
  return sb;
}

/** Read a top-level const by name; undefined if absent. */
function get(sb, name) {
  try { return sb.__eval(name); } catch (e) { return undefined; }
}

/** Every top-level ALL_CAPS const declared in a file. */
function constNames(relPath) {
  const src = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  return [...src.matchAll(/^(?:const|var) ([A-Z][A-Z0-9_]*)\s*=/gm)].map((m) => m[1]);
}

/** Data files, i.e. anything declaring a top-level ALL_CAPS array/object. */
function dataFiles() {
  return fs.readdirSync(path.join(ROOT, 'js'))
    .filter((f) => f.endsWith('.js'))
    .filter((f) => /^(?:const|var) [A-Z][A-Z0-9_]* = [[{]/m.test(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8')))
    .map((f) => 'js/' + f);
}

/** surah number -> ayah count, from the app's own data. */
const AYAH_COUNTS = (() => {
  const sb = load('js/surah-data.js');
  const out = {};
  for (const s of get(sb, 'SURAH_DATA') || []) out[s.number] = s.ayahCount;
  return out;
})();

/** null if the "s:a" / "s:a-b" reference is valid, else why not. */
function badRef(ref) {
  const m = String(ref).replace(/^Quran\s+/i, '').trim().match(/^(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return 'malformed';
  const s = +m[1], a = +m[2], b = m[3] ? +m[3] : +m[2];
  if (!AYAH_COUNTS[s]) return 'no surah ' + s;
  if (a < 1 || b < a) return 'bad range';
  if (b > AYAH_COUNTS[s]) return `ayah ${b} > ${AYAH_COUNTS[s]} in surah ${s}`;
  return null;
}

/** Comments are not code — a constant named in a doc block is not a usage. */
function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + ' ');
}


/* ---- Tadabbur articles are sharded: one file per surah under js/tadabbur-articles/.
 * The single-file layout could not scale past a few hundred entries (the file
 * was already 5 MB), and a reader opening one verse must not download the rest. */
const TADABBUR_DIR = 'js/tadabbur-articles';

/** Shard files in surah order, repo-relative. */
function tadabburShardFiles() {
  const dir = path.join(ROOT, TADABBUR_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /^\d+\.js$/.test(f))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10)).map((f) => TADABBUR_DIR + '/' + f);
}

/** Every tadabbur article, merged across shards, keyed by verse ref. */
function loadTadabburArticles() {
  const files = tadabburShardFiles();
  if (!files.length) return {};
  return get(load(files), 'TADABBUR_ARTICLES') || {};
}

/** Write one surah's shard from its entries (keyed by ref), sorted by ayah. */
function writeTadabburShard(surah, entries) {
  const order = (a, b) => {
    const [sa, aa] = a.split(':').map((x) => parseInt(x, 10));
    const [sb, ab] = b.split(':').map((x) => parseInt(x, 10));
    return sa - sb || aa - ab;
  };
  const keys = Object.keys(entries).sort(order);
  const body = keys.map((k) => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(entries[k], null, 2).replace(/\n/g, '\n  ')).join(',\n');
  const src = '/**\n * Tadabbur long-form articles — surah ' + surah + '.\n *\n'
    + ' * One file per surah so the Tadabbur tab never downloads more than the surah a\n'
    + ' * reader actually opened; js/article-view.js fetches a shard on demand and\n'
    + ' * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the\n'
    + ' * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs\n'
    + ' * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.\n */\n\n'
    + 'var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});\n\n'
    + 'Object.assign(TADABBUR_ARTICLES, {\n' + body + '\n});\n';
  fs.mkdirSync(path.join(ROOT, TADABBUR_DIR), { recursive: true });
  fs.writeFileSync(path.join(ROOT, TADABBUR_DIR, surah + '.js'), src);
}

module.exports = { ROOT, fs, path, vm, load, get, constNames, dataFiles, AYAH_COUNTS, badRef, stripComments, makeSandbox, TADABBUR_DIR, tadabburShardFiles, loadTadabburArticles, writeTadabburShard };
