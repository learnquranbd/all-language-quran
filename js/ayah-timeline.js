/**
 * AyahTimeline — sitewide reusable "see all these ayat in a timeline" overlay.
 *
 * Any module that has a GROUP of related verses (similar-verse groups, topic
 * verse lists, du'a collections, …) can call:
 *
 *   ayahTimeline.open({
 *     title:    '…',            // already-localized heading (plain text)
 *     titleAr:  '…',            // optional Arabic heading (rendered RTL)
 *     subtitle: '…',            // optional already-localized description
 *     refs:     ['2:2', '10:37', …],   // verses in display order
 *     phrase:   'words …',      // optional shared phrase — matching words are
 *   });                         // highlighted in every verse where they occur
 *
 * The overlay sits at z-[70]; tapping a verse header opens the full ayah modal
 * (z-[80]) on top for deep study. Arabic comes from the word corpus
 * (QuranData.getQuranWords), the translation line from the current UI
 * language's offline file (English fallback). Closes on ✕ / backdrop / tab
 * switch. Every dependency is typeof-guarded; failures degrade gracefully.
 */

class AyahTimeline {
  constructor() {
    this._el = null;
    this._words = null;    // ref -> [word tokens]
    this._trFiles = {};    // lang -> dict | null
    // A language switch would leave glosses/labels in the old language while
    // fill() uses the new one — close instead of showing mixed-language rows.
    try {
      window.addEventListener('settingChanged', (e) => {
        if (e && e.detail && e.detail.key === 'language') this.close();
      });
    } catch (_) { /* ignore */ }
  }

  /* ---------- helpers ---------- */
  lang() {
    try { return (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en'; } catch (_) { return 'en'; }
  }
  tt(key) { return (typeof t === 'function') ? t(key, this.lang()) : key; }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  surahName(n) { return (typeof getSurahName === 'function') ? getSurahName(parseInt(n, 10), this.lang()) : String(n); }

  /** Normalize an Arabic token for matching: strip harakat/marks, fold letter variants. */
  norm(s) {
    return String(s || '').normalize('NFC')
      .replace(/ٰ/g, 'ا')
      .replace(/[ؐ-ًؚ-ٟۖ-ۭـ]/g, '')
      .replace(/[آأإٱ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و').replace(/ئ/g, 'ي').replace(/ء/g, '');
  }

  /** Find the contiguous run of `phrase` tokens inside `words`; {start,len} or null. */
  matchPhrase(words, phrase) {
    if (!phrase || !Array.isArray(words) || !words.length) return null;
    const p = (Array.isArray(phrase) ? phrase : String(phrase).split(/\s+/)).map(w => this.norm(w)).filter(Boolean);
    if (!p.length) return null;
    const w = words.map(x => this.norm(x));
    for (let i = 0; i + p.length <= w.length; i++) {
      let ok = true;
      for (let j = 0; j < p.length; j++) { if (w[i + j] !== p[j]) { ok = false; break; } }
      if (ok) return { start: i, len: p.length };
    }
    return null;
  }

  async words() {
    if (this._words) return this._words;
    try {
      if (typeof QuranData !== 'undefined' && QuranData.getQuranWords) {
        this._words = await QuranData.getQuranWords();
      } else {
        this._words = await fetch('data/quran-words.json').then(r => (r.ok ? r.json() : null));
      }
    } catch (_) { this._words = null; }
    return this._words;
  }
  async trFile(lang) {
    if (this._trFiles[lang] !== undefined) return this._trFiles[lang];
    try {
      /* An empty dictionary counts as absent: data/translations/ar.json is
       * deliberately `{}` (Arabic readers need no translation line) and `{}`
       * is truthy, so without this every caller keeps a dictionary with no
       * entries and renders blank translations instead of falling back. */
      this._trFiles[lang] = await fetch(`data/translations/${lang}.json`)
        .then(r => (r.ok ? r.json() : null))
        .then(d => (d && typeof d === 'object' && Object.keys(d).length ? d : null));
    } catch (_) { this._trFiles[lang] = null; }
    return this._trFiles[lang];
  }

  close() {
    if (this._el) { try { this._el.remove(); } catch (_) { /* ignore */ } this._el = null; }
    this._paging = null;
    if (this._escHandler) {
      try { window.removeEventListener('keydown', this._escHandler, true); } catch (_) { /* ignore */ }
      this._escHandler = null;
    }
  }

  /** One timeline entry. An optional per-ref gloss (opts.glosses — the
   * meaning of the highlighted word in THIS verse) renders as an amber chip
   * beside the reference. */
  itemHtml(ref) {
    const first = String(ref).split('-')[0];
    const [s] = first.split(':');
    const gloss = (this._paging && this._paging.glosses) ? this._paging.glosses[first] : null;
    return `
        <li class="relative pl-5 pb-5 border-l-2 border-primary/25 ml-2 last:pb-1">
          <span class="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/70 border-2 border-white dark:border-gray-800" aria-hidden="true"></span>
          <button data-at-ref="${this.esc(first)}" title="${this.esc(first)}"
            class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/60 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            ${this.esc(this.surahName(s))} <span class="text-gray-400 dark:text-gray-500">${this.esc(ref)}</span> <span aria-hidden="true">↗</span>
          </button>
          ${gloss ? `<span class="ms-1.5 align-middle text-[0.7rem] px-1.5 py-0.5 rounded bg-amber-100/70 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300" dir="auto">${this.esc(gloss)}</span>` : ''}
          <div class="ayah-arabic !text-lg !leading-loose !border-b-0 !pb-0 mt-1.5 text-gray-800 dark:text-gray-100" dir="rtl" data-at-ar="${this.esc(first)}"></div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" data-at-tr="${this.esc(first)}"></div>
        </li>`;
  }

  moreLabel() {
    const p = this._paging;
    return p ? `${this.tt('topics_show_more')} (${p.refs.length - p.shown}) ↓` : '';
  }

  /** Append the next page of verses to an open timeline. */
  appendChunk() {
    const p = this._paging, el = this._el;
    if (!p || !el) return;
    const next = p.refs.slice(p.shown, p.shown + p.chunk);
    if (!next.length) return;
    const ol = el.querySelector('[data-at-list]');
    if (!ol) return;
    ol.insertAdjacentHTML('beforeend', next.map(r => this.itemHtml(r)).join(''));
    p.shown += next.length;
    const wrap = el.querySelector('[data-at-more-wrap]');
    if (wrap) {
      if (p.shown >= p.refs.length) wrap.remove();
      else { const b = wrap.querySelector('[data-at-more]'); if (b) b.textContent = this.moreLabel(); }
    }
    this.fill(el, next, p.phrase, p.marks);
  }

  /* ---------- open ---------- */
  open(opts) {
    const o = opts || {};
    const refs = (Array.isArray(o.refs) ? o.refs : []).filter(r => /^\d+:\d+(-\d+)?$/.test(String(r)));
    if (!refs.length) return;
    this.close();

    // Render in pages of 50 — the header badge always shows the REAL total,
    // and "show more" appends until every ref is on screen.
    const chunk = 50;
    const firstRefs = refs.slice(0, chunk);
    this._paging = { refs, shown: firstRefs.length, chunk, phrase: o.phrase, marks: o.marks, glosses: o.glosses };
    const items = firstRefs.map(ref => this.itemHtml(ref)).join('');

    const el = document.createElement('div');
    el.className = 'fixed inset-0 z-[70] flex items-end sm:items-center justify-center';
    el.innerHTML = `
      <div class="absolute inset-0 bg-black/60" data-at-close></div>
      <div class="relative bg-white dark:bg-gray-800 w-full sm:max-w-2xl max-h-[88vh] rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col overflow-hidden">
        <div class="flex items-start gap-3 p-4 pb-3 border-b border-gray-100 dark:border-gray-700">
          <div class="flex-1 min-w-0">
            <div class="font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(o.title || '')}</div>
            ${o.titleAr ? `<div class="ayah-arabic !text-base !leading-snug !border-b-0 !pb-0 text-gray-500 dark:text-gray-400 mt-0.5" dir="rtl">${this.esc(o.titleAr)}</div>` : ''}
          </div>
          <span class="shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-[0.65rem] font-medium">${refs.length} ${this.esc(this.tt('mt_group_verses_label'))}</span>
          <button data-at-close aria-label="${this.esc(this.tt('close'))}"
            class="shrink-0 w-8 h-8 -mt-1 -mr-1 inline-flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">✕</button>
        </div>
        <div class="overflow-y-auto p-4 pt-3">
          ${o.subtitle ? `<p class="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed" dir="auto">${this.esc(o.subtitle)}</p>` : ''}
          <ol data-at-list class="list-none m-0 p-0">${items}</ol>
          ${refs.length > chunk ? `<div data-at-more-wrap class="text-center pt-1 pb-2">
            <button data-at-more class="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-xs font-medium text-primary dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">${this.esc(this.moreLabel())}</button>
          </div>` : ''}
        </div>
      </div>`;

    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-at-close]')) { this.close(); return; }
      if (e.target.closest('[data-at-more]')) { this.appendChunk(); return; }
      const chip = e.target.closest('[data-at-ref]');
      if (chip && typeof ayahModal !== 'undefined' && ayahModal) {
        try { ayahModal.open(chip.getAttribute('data-at-ref'), o.phrase ? { phrase: o.phrase } : undefined); } catch (_) { /* ignore */ }
      }
    });

    document.body.appendChild(el);
    this._el = el;
    window.addEventListener('tabChanged', () => this.close(), { once: true });
    // Esc must close THIS overlay, not the modal that may sit beneath it —
    // capture phase so underlying escClose handlers never see the event.
    this._escHandler = (e) => {
      if (e.key === 'Escape' && this._el) {
        e.stopImmediatePropagation();
        e.preventDefault();
        this.close();
      }
    };
    window.addEventListener('keydown', this._escHandler, true);

    // Fill Arabic (with shared-phrase / marked-word highlighting) and
    // translations asynchronously. o.marks: { "s:a": [1-based word indices] }
    // highlights exact known positions and takes precedence over phrase search.
    this.fill(el, firstRefs, o.phrase, o.marks);
  }

  async fill(el, refs, phrase, marks) {
    const words = await this.words();
    if (this._el !== el) return; // closed while loading
    if (words) {
      for (const ref of refs) {
        const first = String(ref).split('-')[0];
        const node = el.querySelector(`[data-at-ar="${first}"]`);
        const w = words[first];
        if (!node || !Array.isArray(w)) continue;
        const marked = (marks && Array.isArray(marks[first])) ? new Set(marks[first]) : null;
        const hl = (!marked && phrase) ? this.matchPhrase(w, phrase) : null;
        node.innerHTML = w.map((tok, i) => {
          const hit = marked ? marked.has(i + 1) : (hl && i >= hl.start && i < hl.start + hl.len);
          return hit
            ? `<span class="rounded px-0.5 bg-amber-200/70 dark:bg-amber-500/30 text-amber-900 dark:text-amber-200">${this.esc(tok)}</span>`
            : this.esc(tok);
        }).join(' ');
      }
    }
    const lang = this.lang();
    let dict = await this.trFile(lang);
    if (!dict && lang !== 'en') dict = await this.trFile('en');
    if (this._el !== el || !dict) return;
    for (const ref of refs) {
      const first = String(ref).split('-')[0];
      const node = el.querySelector(`[data-at-tr="${first}"]`);
      if (node && dict[first]) node.textContent = dict[first];
    }
  }
}

const ayahTimeline = new AyahTimeline();
try { window.ayahTimeline = ayahTimeline; } catch (_) { /* ignore */ }
