/**
 * On-demand module loading.
 *
 * The app used to ship every module and its data on first paint — 8.7 MB of
 * JavaScript, most of it belonging to tabs a given reader may never open. The
 * heaviest datasets (Tadabbur notes, Why Islam, the Companions, the 99 Names,
 * the Seerah, the Quranic Arabic course, the Prophets) are each owned by exactly
 * one tab, so they are now fetched the first time that tab is opened.
 *
 * Two guarantees this must preserve:
 *   - A lazily loaded module must still initialise. Modules bootstrap on
 *     DOMContentLoaded, which has long since fired by the time they arrive, so
 *     they call LQ.ready() instead — it runs the callback immediately when the
 *     document is already parsed.
 *   - Script order within a bundle matters (data before the view that reads it),
 *     so a bundle's scripts load strictly in sequence.
 *
 * Anything that consumes a lazy dataset from outside its own tab already guards
 * with `typeof X === 'undefined'`, so a not-yet-loaded dataset degrades to the
 * feature being absent rather than throwing.
 */

window.LQ = window.LQ || {};

/** Run now if the document is already parsed, else on DOMContentLoaded. */
LQ.ready = function (fn) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
  else fn();
};

LQ.Modules = (function () {
  /** Cache-busting version, kept in step with the ?v= on the eager tags. */
  const V = (function () {
    const s = document.querySelector('script[src*="module-loader.js"]');
    const m = s && s.src.match(/[?&]v=(\d+)/);
    return m ? m[1] : '';
  })();

  /* tab id -> scripts, in load order. Data files first.
   * Keys are the ids these modules match on in their own tabChanged listeners
   * ('prophets', not the app-nav id 'anbiya' — they differ). */
  const BUNDLES = {
    seerah:        ['js/seerah-data.js', 'js/seerah-timeline.js'],
    sahaba:        ['js/sahaba-data.js', 'js/sahaba.js'],
    whyislam:      ['js/why-islam-data.js', 'js/why-islam.js'],
    prophets:      ['js/prophets-data.js', 'js/prophets.js'],
    quranicarabic: ['js/learn-quranic-arabic-data.js', 'js/learn-quranic-arabic.js'],
    tadabbur:      ['js/tadabbur-data.js', 'js/tadabbur.js'],
  };

  const state = {};   // name -> Promise

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const url = V ? src + '?v=' + V : src;
      // Already present (e.g. still listed eagerly) — nothing to do.
      if (document.querySelector('script[src="' + url + '"]')) return resolve();
      const el = document.createElement('script');
      el.src = url;
      el.async = false;             // preserve execution order across a bundle
      el.onload = () => resolve();
      el.onerror = () => reject(new Error('failed to load ' + url));
      document.head.appendChild(el);
    });
  }

  /** Load a bundle once; repeat calls return the same promise. */
  function load(name) {
    if (state[name]) return state[name];
    const files = BUNDLES[name];
    if (!files) return (state[name] = Promise.resolve());
    state[name] = files.reduce((p, f) => p.then(() => loadScript(f)), Promise.resolve())
      .then(() => {
        try {
          window.dispatchEvent(new CustomEvent('lqModuleLoaded', { detail: { module: name } }));
        } catch (e) { /* ignore */ }
      })
      .catch((err) => {
        // Let a retry happen on the next activation rather than caching failure.
        delete state[name];
        throw err;
      });
    return state[name];
  }

  function loaded(name) { return !!state[name]; }

  /* Wire each bundle to its tab via the window event rather than
   * tabSystem.onTabActive, for two reasons:
   *   - onTabActive stores ONE handler per tab, so registering here would
   *     silently clobber whatever a module had already registered;
   *   - it fires before the module exists anyway.
   * These modules render from their own 'tabChanged' listener, and that event
   * has already gone by the time the bundle arrives — so once it has loaded and
   * the module has constructed itself, the event is re-dispatched for that tab
   * so it renders the activation the user actually performed. */
  window.addEventListener('tabChanged', function (e) {
    const id = e && e.detail && e.detail.tabId;
    if (!id || !BUNDLES[id] || loaded(id)) return;
    load(id).then(() => {
      try {
        window.dispatchEvent(new CustomEvent('tabChanged', { detail: { tabId: id, lazyReplay: true } }));
      } catch (err) { /* ignore */ }
    }).catch(() => { /* tab shows empty; a further activation retries */ });
  });

  return { load, loaded, BUNDLES };
})();

/* The verse modal shows an optional Tadabbur reflection. That data belongs to
 * the Tadabbur tab, so pull it in the first time a verse modal is opened rather
 * than carrying 774 KB on every page load for a panel most readers never see.
 * The modal already guards on `typeof TADABBUR_NOTES`, so it renders without the
 * note until this resolves. */
LQ.ready(function () {
  const trigger = () => {
    LQ.Modules.load('tadabbur').then(() => {
      try {
        if (window.ayahModal && typeof window.ayahModal.refreshTadabbur === 'function') window.ayahModal.refreshTadabbur();
      } catch (e) { /* ignore */ }
    }).catch(() => { /* verse still renders without the reflection */ });
  };
  document.addEventListener('click', function onFirst(e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest('[data-ayah-ref], [data-open-ayah], [data-nav-ayah]')) {
      document.removeEventListener('click', onFirst, true);
      trigger();
    }
  }, true);
});
