/**
 * Long-form article panel, shared by the Prophets and Companions modules.
 *
 * Both modules showed a single short paragraph as the "story" — 58 words for a
 * prophet, 107 for a companion. That is a caption, not a reading. The article
 * files add a full 700-950 word piece in sections, which is a lot of prose:
 * carrying it in the module bundle would undo the on-demand loading work, since
 * most readers open the tab and browse the list without opening anybody.
 *
 * So the articles live in their own files and are fetched the first time a
 * DETAIL page is opened, not when the tab is opened (Tadabbur: one file per surah). Until then the panel shows
 * a short placeholder; the module re-renders itself when the data lands.
 *
 * The prose deliberately carries bare verse references ("the command came in
 * 20:14"). js/ayah-autolink.js turns those into buttons that open the verse
 * modal — but it sweeps on tab/module/language events, and opening a detail
 * page is none of those, so this asks for a sweep after each render.
 */

(function () {
  'use strict';

  /** module key -> [script, global]. Tadabbur is sharded: one file per surah
   *  under a directory, chosen from the verse ref ("2:255" -> 2.js), so a
   *  reader who opens one verse never downloads the other 113 surahs. */
  const SOURCES = {
    prophets: ['js/prophets-articles.js', 'PROPHET_ARTICLES'],
    sahaba: ['js/sahaba-articles.js', 'SAHABA_ARTICLES'],
    tadabbur: ['js/tadabbur-articles/', 'TADABBUR_ARTICLES'],
  };

  /** The article files declare their table with `var`, not `const`: a top-level
   *  `const` in a classic script is a global lexical binding, NOT a property of
   *  window, so window[name] would be undefined and no article would ever
   *  render. (That is exactly what happened for the first releases.) */
  const pending = {};   // script url -> Promise
  const loaded = {};    // script url -> true once its onload fired
  const failed = {};    // script url -> true once its onerror fired

  /** Which file holds this subject's article; null when the module is unknown. */
  function fileFor(module, id) {
    const src = SOURCES[module];
    if (!src) return null;
    if (!src[0].endsWith('/')) return src[0];
    const m = String(id || '').match(/^(\d{1,3}):/);
    return m ? src[0] + m[1] + '.js' : null;
  }

  function version() {
    try {
      const s = document.querySelector('script[src*="article-view.js"]')
        || document.querySelector('script[src*="module-loader.js"]');
      // `src` is always a string on a real script element, but this also runs
      // under the test harness's DOM stub, where it may be absent.
      const m = s && typeof s.src === 'string' && s.src.match(/[?&]v=(\d+)/);
      return m ? '?v=' + m[1] : '';
    } catch (e) { return ''; }
  }

  function table(module) {
    const g = SOURCES[module] && SOURCES[module][1];
    try {
      const t = g && window[g];
      return t && typeof t === 'object' ? t : null;
    } catch (e) { return null; }
  }

  /** Fetch the file holding this subject's article once. Resolves either way —
   *  a missing article file must never break the detail page that hosts it. */
  function load(module, id) {
    const file = fileFor(module, id);
    if (!file) return Promise.resolve();
    if (loaded[file] || (!SOURCES[module][0].endsWith('/') && table(module))) return Promise.resolve();
    if (pending[file]) return pending[file];
    pending[file] = new Promise((resolve) => {
      try {
        const el = document.createElement('script');
        el.src = file + version();
        el.async = false;
        el.onload = () => { loaded[file] = true; resolve(); };
        /* Remember the failure. Without this the caller repaints, has() still
         * answers true from the precached index, and the skeleton triggers
         * another fetch — a pulsing placeholder that never resolves and never
         * stops asking. */
        el.onerror = () => { failed[file] = true; delete pending[file]; resolve(); };
        (document.head || document.documentElement).appendChild(el);
      } catch (e) {
        // Nowhere to inject (or no DOM at all, under the test harness): resolve
        // rather than leaving the caller's placeholder waiting forever.
        delete pending[file];
        resolve();
      }
    });
    return pending[file];
  }

  function get(module, id) {
    const t = table(module);
    const entry = t && id ? t[id] : null;
    return entry && Array.isArray(entry.sections) && entry.sections.length ? entry : null;
  }

  /**
   * Is there an article for this subject?
   *
   * Answered from the generated index (js/article-index.js) when the articles
   * themselves have not been fetched — that is the whole point of the index: a
   * list rendering hundreds of cards must decide whether to offer a "full
   * article" control WITHOUT downloading every article to find out.
   *
   * If the index is absent (it is precached, but a stale cache could lack it),
   * fall back to whatever is loaded. Erring toward "no article" hides a control
   * that would have worked, which is far better than offering one that dies.
   */
  function has(module, id) {
    if (get(module, id)) return true;
    /* A file we already tried and could not fetch: stop offering the control,
     * so the detail page renders without it rather than looping. */
    const f = fileFor(module, id);
    if (f && failed[f]) return false;
    try {
      const idx = window.LQ_ARTICLE_IDS;
      const list = idx && idx[module];
      if (Array.isArray(list)) return list.indexOf(id) !== -1;
    } catch (e) { /* fall through */ }
    return false;
  }

  /**
   * HTML for the article panel.
   *
   * @param opts.lc     localiser: ({en, bn}) -> string   (the module's own)
   * @param opts.esc    escaper: (string) -> string       (the module's own)
   * @param opts.title  heading for the panel
   * @param opts.onLoad called once the file arrives, so the caller can repaint
   */
  function html(module, id, opts) {
    const o = opts || {};
    const esc = o.esc || ((s) => String(s == null ? '' : s));
    const lc = o.lc || ((x) => (x && x.en) || '');
    const entry = get(module, id);

    if (!entry) {
      // Nothing written for this subject — render nothing at all, rather than a
      // placeholder that would resolve to an empty box. Most companions have no
      // article, and their pages must look exactly as they did before.
      if (!SOURCES[module] || !has(module, id)) return '';
      // Not fetched yet — show a placeholder and repaint when it lands.
      load(module, id).then(() => { if (typeof o.onLoad === 'function') o.onLoad(); });
      return `
      <div class="mb-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700" data-article-loading>
        <div class="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700 mb-2.5 animate-pulse"></div>
        <div class="h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700 mb-1.5 animate-pulse"></div>
        <div class="h-2.5 w-11/12 rounded bg-gray-200 dark:bg-gray-700 mb-1.5 animate-pulse"></div>
        <div class="h-2.5 w-4/5 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>`;
    }

    const sections = entry.sections.map((sec) => {
      const heading = lc(sec.h);
      const paras = (Array.isArray(sec.p) ? sec.p : [])
        .map((p) => lc(p))
        .filter(Boolean)
        .map((text) => `<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2.5" dir="auto">${esc(text)}</p>`)
        .join('');
      if (!paras) return '';
      return `
        <section class="mb-4 last:mb-0">
          ${heading ? `<h4 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1.5" dir="auto">${esc(heading)}</h4>` : ''}
          ${paras}
        </section>`;
    }).join('');
    if (!sections) return '';

    const words = entry.sections.reduce((n, s) => n
      + (Array.isArray(s.p) ? s.p : []).reduce((m, p) => m + String(lc(p) || '').split(/\s+/).filter(Boolean).length, 0), 0);
    const mins = Math.max(1, Math.round(words / 180));

    return `
      <details class="mb-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden" data-article${o.open === false ? '' : ' open'}>
        <summary class="cursor-pointer select-none px-4 py-3 flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">
          <span aria-hidden="true">📜</span>
          <span dir="auto">${esc(o.title || 'Full article')}</span>
          <span class="ms-auto text-[0.7rem] font-normal text-gray-400 dark:text-gray-500">${mins} min</span>
        </summary>
        <div class="px-4 pb-4 pt-1">${sections}</div>
      </details>`;
  }

  /** Ask the autolinker to sweep the freshly painted prose. */
  function sweep() {
    try {
      if (window.LQAyahAutolink && typeof window.LQAyahAutolink.sweep === 'function') window.LQAyahAutolink.sweep();
    } catch (e) { /* prose still reads fine, references just stay plain */ }
  }

  window.LQArticle = { load, get, has, html, sweep };
})();
