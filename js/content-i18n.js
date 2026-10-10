/**
 * Content i18n — offline knowledgebase of MODULE CONTENT translations.
 *
 * Module content (lesson prose, event descriptions, topic text, …) is authored
 * inline as { en, bn } pairs. For the other UI languages we translate ONCE and
 * store forever in static files:  data/content-i18n/<lang>.json
 *   = { "<english source string>": "<translation>", ... }
 *
 * Modules resolve content via their local L(obj) helpers which consult
 * CI18N.tr(lang, enText) synchronously; this loader fetches the language file
 * lazily, caches it, and re-fires the language settingChanged event once loaded
 * so already-rendered modules repaint with translations. English remains the
 * fallback for any string not present in the file. bn/en never load a file.
 *
 * A module with a large body of prose keeps it in its own namespace file,
 * data/content-i18n/<ns>/<lang>.json, so readers who never open that module
 * never download it: CI18N.tr(lang, en, ns) looks in the namespace file first
 * (fetching it on first use) and then in the shared one. Tadabbur's 6,800 card
 * strings would otherwise double every shared language file.
 */

const CI18N = {
  _files: {},      // lang -> dict | null (null = failed/absent)
  _loading: {},    // lang -> Promise
  SKIP: ['en', 'bn'],

  /** Synchronous lookup: translation or null. Safe before load (returns null).
   *  `ns` names a module's own file, consulted before the shared one. */
  tr(lang, en, ns) {
    if (!lang || !en || this.SKIP.includes(lang)) return null;
    const ok = v => (typeof v === 'string' && v.trim()) ? v : null;
    if (ns) {
      const nd = this._files[`${ns}/${lang}`];
      if (nd === undefined) this.load(lang, ns);
      else if (nd && ok(nd[en])) return nd[en];
    }
    const d = this._files[lang];
    if (!d) { this.load(lang); return null; }
    return ok(d[en]);
  },

  /** Lazily fetch a language's content file (or a module's, with `ns`); re-announce language on success. */
  load(lang, ns) {
    if (!lang || this.SKIP.includes(lang)) return Promise.resolve(null);
    const key = ns ? `${ns}/${lang}` : lang;
    if (key in this._files) return Promise.resolve(this._files[key]);
    if (!this._loading[key]) {
      this._loading[key] = fetch(`data/content-i18n/${key}.json`)
        .then(r => r.ok ? r.json() : null)
        .then(d => {
          this._files[key] = d || null;
          if (d) {
            // Repaint any module already rendered in this language.
            try {
              window.dispatchEvent(new CustomEvent('settingChanged', {
                detail: { key: 'language', value: lang, contentI18n: true }
              }));
            } catch (e) { /* ignore */ }
          }
          return this._files[key];
        })
        .catch(() => { this._files[key] = null; return null; });
    }
    return this._loading[key];
  }
};

// Prefetch the current language's content file on startup and on language switch.
document.addEventListener('DOMContentLoaded', () => {
  try {
    const lang = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    CI18N.load(lang);
  } catch (e) { /* ignore */ }
});
window.addEventListener('settingChanged', (e) => {
  try {
    if (e.detail && e.detail.key === 'language' && !e.detail.contentI18n) CI18N.load(e.detail.value);
  } catch (err) { /* ignore */ }
});
