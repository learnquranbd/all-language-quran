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
 */

const CI18N = {
  _files: {},      // lang -> dict | null (null = failed/absent)
  _loading: {},    // lang -> Promise
  SKIP: ['en', 'bn'],

  /** Synchronous lookup: translation or null. Safe before load (returns null). */
  tr(lang, en) {
    if (!lang || !en || this.SKIP.includes(lang)) return null;
    const d = this._files[lang];
    if (!d) { this.load(lang); return null; }
    const v = d[en];
    return (typeof v === 'string' && v.trim()) ? v : null;
  },

  /** Lazily fetch a language's content file; re-announce language on success. */
  load(lang) {
    if (!lang || this.SKIP.includes(lang)) return Promise.resolve(null);
    if (lang in this._files) return Promise.resolve(this._files[lang]);
    if (!this._loading[lang]) {
      this._loading[lang] = fetch(`data/content-i18n/${lang}.json`)
        .then(r => r.ok ? r.json() : null)
        .then(d => {
          this._files[lang] = d || null;
          if (d) {
            // Repaint any module already rendered in this language.
            try {
              window.dispatchEvent(new CustomEvent('settingChanged', {
                detail: { key: 'language', value: lang, contentI18n: true }
              }));
            } catch (e) { /* ignore */ }
          }
          return this._files[lang];
        })
        .catch(() => { this._files[lang] = null; return null; });
    }
    return this._loading[lang];
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
