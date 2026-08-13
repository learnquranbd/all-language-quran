/**
 * Auto-link Quran references that appear inside prose.
 *
 * Modules that render a reference as its own chip already make it clickable —
 * about 1,650 of them across the app. But references written *inside* a
 * sentence were plain text: "Develops taqwa — 2:183", "Ayat al-Kursi (2:255)",
 * "Tafsir of 9:60 — The Eight Categories". A reader could see the reference and
 * not open it. A DOM sweep found 141 such references across 14 panes.
 *
 * This walks text nodes in content panes and wraps any real verse reference in
 * a button that opens the shared ayah modal — the same entry point every module
 * already uses (ayahModal.open).
 *
 * Deliberately conservative, because it rewrites rendered content:
 *   - text nodes only; never replaces a container's innerHTML
 *   - skips anything already inside a button/link/clickable element, so it can
 *     never double-wrap or hijack an existing handler
 *   - skips inputs, code, script/style and contenteditable
 *   - validates against real surah/ayah bounds, so "2.5%", "1:1 scale" and
 *     timestamps are left alone
 *   - idempotent: processed nodes are marked, so repeated passes are no-ops
 */

(function () {
  'use strict';

  /** Panes whose content is module-rendered and safe to sweep. */
  const PANE_SELECTOR = '[id$="-container"], [id$="-root"]';

  /** Never descend into these. */
  const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'CODE', 'PRE', 'BUTTON', 'A']);

  /** Already-clickable ancestors — leave their references entirely alone. */
  const CLICKABLE = 'button, a, [role="button"], [data-action], [onclick],'
    + '[data-ayah-ref],[data-nav-ayah],[data-open-ayah],[data-seerah-ayah],[data-sahaba-ayah],'
    + '[data-prophets-ayah],[data-sawm-ayah],[data-hajj-ayah],[data-zakat-ayah],[data-fard-ayah],'
    + '[data-wajib-ayah],[data-nafl-ayah],[data-makruh-ayah],[data-mustahabb-ayah],[data-nuzul-ayah],'
    + '[data-qa-ref],[data-dash-ayah],[data-jump-ayah],[data-tadabbur-note]';

  const MARK = 'lqAutolinked';
  /* Surah:ayah, optionally a range. Bounded digits so it cannot swallow prices
     or long numbers.
     The trailing guard rejects only what would make this NOT a reference:
     another digit ("2:5" inside "2:55"), or a separator followed by a digit
     (".5" a decimal, ":56" a timestamp, "-7" a range the optional group should
     have taken). It deliberately allows a separator followed by anything else,
     because prose ends references with punctuation constantly — "as in 15:47."
     and "the word stands in 3:169: do not think them…" were both left as dead
     plain text by the older `(?![\d:.-])`, which rejected any of those
     characters outright. */
  const REF_RE = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?!\d|[.:-]\d)/g;

  /** Populated from the app's own surah table; without it we do nothing. */
  let ayahCounts = null;
  function counts() {
    if (ayahCounts) return ayahCounts;
    try {
      if (typeof SURAH_DATA === 'undefined' || !Array.isArray(SURAH_DATA)) return null;
      ayahCounts = {};
      for (const s of SURAH_DATA) ayahCounts[s.number] = s.ayahCount;
    } catch (e) { return null; }
    return ayahCounts;
  }

  function isRealRef(s, a, b) {
    const c = counts();
    if (!c) return false;
    const total = c[s];
    if (!total) return false;
    if (a < 1 || a > total) return false;
    if (b != null && (b < a || b > total)) return false;
    return true;
  }

  function openRef(ref) {
    try {
      if (typeof ayahModal !== 'undefined' && ayahModal && typeof ayahModal.open === 'function') {
        ayahModal.open(ref);
        return;
      }
    } catch (e) { /* fall through */ }
    // No modal available — deep-link instead, which the app already understands.
    try { location.hash = '#' + ref; } catch (e) { /* ignore */ }
  }

  function shouldSkip(node) {
    let el = node.parentElement;
    if (!el) return true;
    if (el.closest(CLICKABLE)) return true;
    if (el.isContentEditable) return true;
    while (el) {
      if (SKIP_TAGS.has(el.tagName)) return true;
      if (el.dataset && el.dataset[MARK]) return true;
      el = el.parentElement;
    }
    return false;
  }

  /** Wrap every valid reference inside one text node. */
  function linkTextNode(node) {
    const text = node.nodeValue;
    /* Cap raised from 4000 after a live sweep found 4 references stranded in
     * longer prose paragraphs (sawm/zakat rulings). 20k still guards against
     * pathological nodes while covering every real paragraph in the app. */
    if (!text || text.length > 20000) return 0;
    REF_RE.lastIndex = 0;
    if (!REF_RE.test(text)) return 0;
    REF_RE.lastIndex = 0;

    const frag = document.createDocumentFragment();
    let last = 0, made = 0, m;
    while ((m = REF_RE.exec(text)) !== null) {
      const s = +m[1], a = +m[2], b = m[3] != null ? +m[3] : null;
      if (!isRealRef(s, a, b)) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lq-ayah-link';
      // Ranges open at their first verse — the modal navigates from there.
      btn.setAttribute('data-ayah-ref', s + ':' + a);
      btn.setAttribute('title', 'Open ' + m[0]);
      btn.setAttribute('aria-label', 'Open verse ' + m[0]);
      btn.textContent = m[0];
      frag.appendChild(btn);

      last = m.index + m[0].length;
      made++;
    }
    if (!made) return 0;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
    return made;
  }

  function sweep(root) {
    if (!root || !counts()) return 0;
    let made = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || n.nodeValue.length < 3) return NodeFilter.FILTER_REJECT;
        if (n.nodeValue.indexOf(':') === -1) return NodeFilter.FILTER_REJECT;
        return shouldSkip(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });
    // Collect first: linking mutates the tree the walker is traversing.
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);
    for (const node of nodes) made += linkTextNode(node);
    return made;
  }

  function sweepAll() {
    let made = 0;
    document.querySelectorAll(PANE_SELECTOR).forEach((p) => { made += sweep(p); });
    return made;
  }

  /* One delegated handler for everything this creates. Modules keep their own
     handlers; this only ever fires for buttons it made itself. */
  document.addEventListener('click', function (e) {
    const btn = e.target && e.target.closest && e.target.closest('button.lq-ayah-link[data-ayah-ref]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    openRef(btn.getAttribute('data-ayah-ref'));
  });

  /* Sweep after a tab renders, and after lazily-loaded modules paint. Debounced
     because several modules re-render on the same event. */
  let pending = null;
  function schedule() {
    if (pending) clearTimeout(pending);
    pending = setTimeout(() => { pending = null; sweepAll(); }, 250);
  }

  const ready = (fn) => (window.LQ && LQ.ready ? LQ.ready(fn)
    : (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, { once: true }) : fn()));

  ready(function () {
    schedule();
    window.addEventListener('tabChanged', schedule);
    window.addEventListener('lqModuleLoaded', schedule);
    window.addEventListener('settingChanged', (e) => {
      if (e && e.detail && e.detail.key === 'language') schedule();
    });
  });

  window.LQAyahAutolink = { sweep: sweepAll, isRealRef };
})();
