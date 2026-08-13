/**
 * Every module must construct and render in all 15 languages without throwing.
 *
 * These are headless renders against DOM stubs, so they prove the template and
 * data paths hold — not that anything looks right. They catch the common
 * breakages: a renamed data key, an unguarded lazy global, a language with a
 * missing string that reaches a .length or .map.
 *
 * Also asserts that modules which resolve content through CI18N genuinely do so:
 * with a dictionary loaded, a non-Bangla language must get the translation, and
 * with the key absent it must fall back to English rather than to nothing. Four
 * modules (Tadabbur, Tajweed, Handwriting, Kids) never called CI18N at all and
 * were hard-wired to English for every non-Bangla reader.
 */
const { ROOT, fs, path, vm, load } = require('./lib.js');

const LANGS = ['en', 'bn', 'ar', 'ur', 'id', 'tr', 'fr', 'es', 'ru', 'fa', 'hi', 'de', 'ms', 'zh', 'ja'];

/* module file -> the files it needs loaded first */
const MODULES = [
  { name: 'seerah', files: ['js/seerah-data.js', 'js/seerah-timeline.js'], cls: 'SeerahView' },
  { name: 'sahaba', files: ['js/sahaba-data.js', 'js/sahaba.js'], cls: 'SahabaView' },
  { name: 'prophets', files: ['js/prophets-data.js', 'js/prophets.js'], cls: 'ProphetsView' },
  { name: 'quranic-arabic', files: ['js/learn-quranic-arabic-data.js', 'js/learn-quranic-arabic.js'], cls: 'QuranicArabicView' },
  { name: 'tadabbur', files: ['js/ponder.js', 'js/tadabbur-data.js', 'js/tadabbur.js'], cls: 'Tadabbur', ci18n: true },
  { name: 'tajweed-learn', files: ['js/tajweed-data.js', 'js/tajweed-learn.js'], cls: null, ci18n: true },
  { name: 'handwriting', files: ['js/qaida-data.js', 'js/handwriting-data.js', 'js/handwriting.js'], cls: 'Handwriting', ci18n: true },
  { name: 'kids', files: ['js/qaida-data.js', 'js/learn-kids.js'], cls: null, ci18n: true },
  { name: 'surah-names', files: ['js/surah-names-data.js', 'js/surah-names.js'], cls: 'SurahNamesView', ci18n: true },
  { name: 'prayer', files: ['js/learn-prayer-data.js', 'js/learn-prayer.js'], cls: 'SalahModule' },
];

const BASE = ['js/translations.js', 'js/content-i18n.js', 'js/surah-data.js'];
const problems = [];
let renders = 0;

function classNameOf(relPath) {
  const m = fs.readFileSync(path.join(ROOT, relPath), 'utf8').match(/^class (\w+)/m);
  return m ? m[1] : null;
}

for (const mod of MODULES) {
  let sb;
  try {
    sb = load(BASE.concat(mod.files));
  } catch (e) {
    problems.push(`${mod.name}: failed to evaluate — ${e.message}`);
    continue;
  }
  const cls = mod.cls || classNameOf(mod.files[mod.files.length - 1]);
  if (!cls) { problems.push(`${mod.name}: could not find a class to construct`); continue; }

  let Ctor;
  try { Ctor = vm.runInContext(cls, sb); } catch (e) { problems.push(`${mod.name}: class ${cls} not defined`); continue; }
  if (typeof Ctor !== 'function') { problems.push(`${mod.name}: ${cls} is not constructible`); continue; }

  for (const lang of LANGS) {
    try {
      const v = new Ctor();
      v.language = lang;
      if (typeof v.render === 'function') v.render();
      renders++;
    } catch (e) {
      problems.push(`${mod.name} render failed in ${lang}: ${e.message}`);
    }
  }

  /* Content resolvers must consult the offline dictionary, not just English. */
  if (mod.ci18n) {
    try {
      const CI = vm.runInContext('CI18N', sb);
      const v = new Ctor();
      /* Three conventions exist in the codebase, all legitimate: ci() takes the
       * English string, L() and lc() take an {en, bn} pair. What matters is the
       * behaviour — consult the dictionary, fall back to English — not the name. */
      const resolver = typeof v.ci === 'function' ? 'ci'
        : (typeof v.L === 'function' ? 'L' : (typeof v.lc === 'function' ? 'lc' : null));
      if (!resolver) {
        problems.push(`${mod.name}: no ci()/L()/lc() content resolver — non-Bangla readers get English regardless of the dictionary`);
      } else {
        const call = () => (resolver === 'ci' ? v.ci('PROBE-SOURCE') : v[resolver]({ en: 'PROBE-SOURCE' }));
        CI._files.fr = { 'PROBE-SOURCE': 'PROBE-FR' };
        CI._files.tr = {};
        v.language = 'fr';
        const got = call();
        if (got !== 'PROBE-FR') problems.push(`${mod.name}: ${resolver}() ignored the loaded dictionary (got ${JSON.stringify(got)})`);
        v.language = 'tr';
        if (call() !== 'PROBE-SOURCE') problems.push(`${mod.name}: ${resolver}() did not fall back to English for a missing key`);
      }
    } catch (e) {
      problems.push(`${mod.name}: content-resolver check threw — ${e.message}`);
    }
  }
}

module.exports = {
  name: 'modules render in every language',
  run() {
    return { ok: problems.length === 0, detail: `${renders} renders across ${MODULES.length} modules x ${LANGS.length} languages`, problems };
  },
};
