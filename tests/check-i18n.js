/**
 * UI-string integrity after the per-language split.
 *
 * translations.js carries English plus t()/isRTL()/applyTranslations(); each
 * other language lives in js/i18n/<lang>.js and is injected for the reader's
 * saved language alone.
 *
 * Three things must hold, and the third exists because of a real regression:
 *   1. every language resolves every key through t()
 *   2. packs merge whichever order they execute in, and a missing pack degrades
 *      to English rather than to raw keys
 *   3. the API SURFACE survives. A first attempt at the split regenerated
 *      translations.js from the parsed data and silently dropped isRTL() and
 *      applyTranslations() — the function that localises every [data-lang-key]
 *      element and sets page dir. Key-by-key equality passed completely while
 *      the static header, sidebar and tab strip stayed English and RTL was
 *      never applied. Data equality cannot see a missing function.
 */
const { ROOT, fs, path, vm, makeSandbox } = require('./lib.js');

const CORE = path.join(ROOT, 'js/translations.js');
const PACK_DIR = path.join(ROOT, 'js/i18n');
const EXPECTED_LANGS = ['bn', 'ar', 'ur', 'id', 'tr', 'fr', 'es', 'ru', 'fa', 'hi', 'de', 'ms', 'zh', 'ja'];
const REQUIRED_API = ['t', 'isRTL', 'applyTranslations', 'RTL_LANGUAGES', 'TRANSLATIONS'];

const coreSrc = fs.readFileSync(CORE, 'utf8');
const problems = [];

/* Evaluate core (+ optional pack) in a chosen order. */
function ctxFor(lang, order) {
  const sb = makeSandbox();
  const pack = lang === 'en' ? null : fs.readFileSync(path.join(PACK_DIR, lang + '.js'), 'utf8');
  if (order === 'pack-first' && pack) vm.runInContext(pack, sb);
  vm.runInContext(coreSrc, sb);
  if (order === 'core-first' && pack) vm.runInContext(pack, sb);
  return sb;
}

/* --- 1. every pack exists and is complete against the English key set --- */
const base = ctxFor('en', 'core-first');
const enKeys = Object.keys(vm.runInContext('TRANSLATIONS.en', base));
for (const lang of EXPECTED_LANGS) {
  if (!fs.existsSync(path.join(PACK_DIR, lang + '.js'))) { problems.push(`missing pack js/i18n/${lang}.js`); continue; }
  const sb = ctxFor(lang, 'core-first');
  const pack = vm.runInContext(`TRANSLATIONS['${lang}']`, sb);
  if (!pack) { problems.push(`${lang}: pack did not merge into TRANSLATIONS`); continue; }
  const missing = enKeys.filter((k) => !(k in pack));
  if (missing.length) problems.push(`${lang}: ${missing.length} keys missing (e.g. ${missing.slice(0, 3).join(', ')})`);
}

/* --- 2. merge order must not matter; a missing pack must fall back --- */
for (const lang of EXPECTED_LANGS.slice(0, 4)) {
  const a = ctxFor(lang, 'core-first');
  const b = ctxFor(lang, 'pack-first');
  const ta = vm.runInContext('t', a), tb = vm.runInContext('t', b);
  const diff = enKeys.filter((k) => ta(k, lang) !== tb(k, lang));
  if (diff.length) problems.push(`${lang}: ${diff.length} keys differ between merge orders`);
}
const coreOnly = vm.runInContext('t', base);
const notFallingBack = enKeys.filter((k) => coreOnly(k, 'bn') !== coreOnly(k, 'en'));
if (notFallingBack.length) problems.push(`${notFallingBack.length} keys do not fall back to English when a pack is absent`);

/* --- 3. API surface --- */
for (const fn of REQUIRED_API) {
  if (vm.runInContext(`typeof ${fn}`, base) === 'undefined') problems.push(`translations.js no longer defines ${fn}`);
}
/* applyTranslations must really localise an element and set direction. */
try {
  const sb = ctxFor('ar', 'core-first');
  const el = { getAttribute: () => 'load', textContent: '' };
  sb.document.querySelectorAll = () => [el];
  sb.document.documentElement = {};
  vm.runInContext('applyTranslations("ar")', sb);
  const want = vm.runInContext('t("load","ar")', sb);
  if (el.textContent !== want) problems.push(`applyTranslations did not set [data-lang-key] text (got ${JSON.stringify(el.textContent)})`);
  if (sb.document.documentElement.dir !== 'rtl') problems.push(`applyTranslations did not set dir=rtl for Arabic`);
} catch (e) { problems.push('applyTranslations threw: ' + e.message); }

module.exports = {
  name: 'UI strings and i18n split',
  run() {
    return { ok: problems.length === 0, detail: `${EXPECTED_LANGS.length} packs x ${enKeys.length} keys`, problems };
  },
};
