/**
 * "Why this name?" — the naming of all 114 surahs.
 *
 * Readers see "Al-Baqarah — The Cow" constantly without ever learning that the
 * name comes from one episode in 2:67-73, that most surah names are drawn from
 * a distinctive WORD rather than from the subject matter, or that many surahs
 * carry more than one recorded name. This module is that missing explanation.
 *
 * Content lives in js/surah-names-data.js (SURAH_NAME_NOTES), authored as
 * {en, bn} pairs; the other 13 languages resolve through CI18N exactly as every
 * other content module does. Surah numbers, Arabic names and localised names
 * come from SURAH_DATA, so nothing is duplicated here.
 *
 * Renders into #surahnames-container (tab "surahnames"). Defensive throughout:
 * a missing dataset, a missing note, or an absent ayah modal each degrade to
 * less content rather than to an exception.
 */

/* eslint-disable no-unused-vars */

class SurahNamesView {
  constructor() {
    this.container = document.getElementById('surahnames-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    if (!this.language) this.language = 'en';
    this.rendered = false;
    this.query = '';
    this.filter = 'all';       // 'all' | 'meccan' | 'medinan' | 'named-after-word' | 'multi-name'
    this.selected = null;      // surah number when a card is expanded

    /* The tab system dispatches window/'tabChanged'/detail.tabId — matching
       fard/wajib/nafl, not the wiring that once left two tabs blank. */
    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'surahnames') this.render(); } catch (_) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered) this.render();
        }
      } catch (_) { /* ignore */ }
    });
  }

  // ── helpers ──────────────────────────────────────────────────────────
  tt(key) {
    try { const v = t(key, this.language); if (v && v !== key) return v; } catch (_) { /* ignore */ }
    const e = (typeof SURAHNAMES_UI !== 'undefined' && SURAHNAMES_UI) ? SURAHNAMES_UI[key] : null;
    if (!e) return key;
    if (this.language && e[this.language]) return e[this.language];
    if (this.language && this.language !== 'en' && typeof CI18N !== 'undefined' && e.en) {
      try { const tr = CI18N.tr(this.language, e.en); if (tr) return tr; } catch (_) { /* ignore */ }
    }
    return e.en || key;
  }

  /** Content localiser: bn is authored, the rest resolve through CI18N. */
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    const en = o.en || '';
    if (!en || this.language === 'en' || this.language === 'bn') return en;
    try { if (typeof CI18N !== 'undefined') return CI18N.tr(this.language, en) || en; } catch (_) { /* ignore */ }
    return en;
  }

  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  surahs() { return (typeof SURAH_DATA !== 'undefined' && Array.isArray(SURAH_DATA)) ? SURAH_DATA : []; }

  note(n) {
    try { return (typeof SURAH_NAME_NOTES !== 'undefined' && SURAH_NAME_NOTES) ? SURAH_NAME_NOTES[n] : null; } catch (_) { return null; }
  }

  /** Localised surah name, falling back to the English transliteration. */
  sname(s) {
    const names = s.names || {};
    return names[this.language] || names.en || ('Surah ' + s.number);
  }

  // ── filtering ────────────────────────────────────────────────────────
  filtered() {
    const q = this.query.trim().toLowerCase();
    return this.surahs().filter((s) => {
      const note = this.note(s.number);
      if (this.filter === 'meccan' && s.revelationType !== 'Meccan') return false;
      if (this.filter === 'medinan' && s.revelationType !== 'Medinan') return false;
      if (this.filter === 'multi-name' && !(note && Array.isArray(note.alt) && note.alt.length)) return false;
      if (this.filter === 'explained' && !note) return false;
      if (!q) return true;
      const hay = [
        String(s.number), s.arabicName, this.sname(s), (s.names && s.names.en) || '',
        note ? this.lc(note.meaning) : '', note ? this.lc(note.source) : '',
        note && Array.isArray(note.alt) ? note.alt.map((a) => a.name).join(' ') : '',
      ].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  // ── render ───────────────────────────────────────────────────────────
  render() {
    if (!this.container) return;
    const list = this.filtered();
    const total = this.surahs().length;
    const explained = this.surahs().filter((s) => this.note(s.number)).length;

    const chip = (id, label) => `
      <button type="button" data-sn-filter="${this.esc(id)}"
        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.filter === id
    ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}">
        ${this.esc(label)}</button>`;

    this.container.innerHTML = `
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1" dir="auto">📛 ${this.esc(this.tt('sn_title'))}</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.tt('sn_intro'))}</p>
      </div>

      <div class="mb-4 flex flex-wrap items-center gap-2">
        <input type="search" data-sn-search value="${this.esc(this.query)}"
          placeholder="${this.esc(this.tt('sn_search'))}"
          class="flex-1 min-w-[180px] px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/40" dir="auto">
        ${chip('all', this.tt('sn_filter_all'))}
        ${chip('meccan', this.tt('sn_filter_meccan'))}
        ${chip('medinan', this.tt('sn_filter_medinan'))}
        ${chip('multi-name', this.tt('sn_filter_multi'))}
      </div>

      <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">
        ${this.esc(String(list.length))} / ${this.esc(String(total))} · ${this.esc(this.tt('sn_explained'))}: ${this.esc(String(explained))}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-sn-list>
        ${list.length ? list.map((s) => this.cardHtml(s)).join('') : `<p class="text-sm text-gray-500 col-span-full" dir="auto">${this.esc(this.tt('sn_empty'))}</p>`}
      </div>`;

    this.rendered = true;
    this.bind();
    // Inline verse references in the prose become tappable.
    try { if (window.LQAyahAutolink) window.LQAyahAutolink.sweep(); } catch (_) { /* ignore */ }
  }

  cardHtml(s) {
    const note = this.note(s.number);
    const open = this.selected === s.number;
    const meaning = note ? this.lc(note.meaning) : '';
    const type = s.revelationType === 'Meccan' ? this.tt('sn_meccan') : this.tt('sn_medinan');

    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col ${open ? 'sm:col-span-2 lg:col-span-3 ring-2 ring-primary/30' : ''}">
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-[0.65rem] font-bold shrink-0">${s.number}</span>
              <span class="font-bold text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(this.sname(s))}</span>
              <span class="font-arabic text-primary text-lg" dir="rtl" lang="ar">${this.esc(s.arabicName)}</span>
            </div>
            ${meaning ? `<p class="text-xs text-gray-500 dark:text-gray-400 mt-1" dir="auto">“${this.esc(meaning)}”</p>` : ''}
          </div>
          <span class="text-[0.65rem] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 shrink-0">${this.esc(type)}</span>
        </div>

        ${note ? `
          <button type="button" data-sn-toggle="${s.number}"
            class="mt-3 self-start text-xs font-semibold text-primary hover:underline">
            ${open ? '▾ ' + this.esc(this.tt('sn_hide')) : '▸ ' + this.esc(this.tt('sn_why'))}
          </button>
          ${open ? this.detailHtml(s, note) : ''}
        ` : `<p class="mt-3 text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('sn_pending'))}</p>`}
      </div>`;
  }

  detailHtml(s, note) {
    const block = (label, text) => (text ? `
      <div class="mb-3">
        <p class="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1">${this.esc(label)}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(text)}</p>
      </div>` : '');

    const refs = Array.isArray(note.refs) ? note.refs : [];
    const refsHtml = refs.length ? `
      <div class="mb-3 flex flex-wrap gap-1.5">
        ${refs.map((r) => `<button type="button" data-sn-ayah="${this.esc(String(r).split('-')[0])}"
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors">
          📖 ${this.esc(r)}</button>`).join('')}
      </div>` : '';

    const alt = Array.isArray(note.alt) ? note.alt : [];
    const altHtml = alt.length ? `
      <div class="mb-1">
        <p class="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1">${this.esc(this.tt('sn_alt_names'))}</p>
        <ul class="space-y-1.5">
          ${alt.map((a) => `<li class="text-sm text-gray-600 dark:text-gray-300" dir="auto">
            <span class="font-semibold text-gray-700 dark:text-gray-200">${this.esc(a.name)}</span> — ${this.esc(this.lc(a))}</li>`).join('')}
        </ul>
      </div>` : '';

    return `
      <div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/60">
        ${block(this.tt('sn_source'), this.lc(note.source))}
        ${block(this.tt('sn_why'), this.lc(note.why))}
        ${refsHtml}
        ${block(this.tt('sn_signal'), this.lc(note.signal))}
        ${altHtml}
      </div>`;
  }

  // ── events ───────────────────────────────────────────────────────────
  bind() {
    if (this._bound) return;
    this._bound = true;

    this.container.addEventListener('click', (e) => {
      try {
        const f = e.target.closest('[data-sn-filter]');
        if (f) { this.filter = f.getAttribute('data-sn-filter'); this.render(); return; }

        const tg = e.target.closest('[data-sn-toggle]');
        if (tg) {
          const n = parseInt(tg.getAttribute('data-sn-toggle'), 10);
          this.selected = (this.selected === n) ? null : n;
          this.render();
          return;
        }

        const ay = e.target.closest('[data-sn-ayah]');
        if (ay) {
          const ref = ay.getAttribute('data-sn-ayah');
          const am = (typeof ayahModal !== 'undefined' && ayahModal) ? ayahModal : window.ayahModal;
          if (am && typeof am.open === 'function') am.open(ref);
          else location.hash = '#' + ref;
        }
      } catch (_) { /* ignore */ }
    });

    this.container.addEventListener('input', (e) => {
      try {
        const box = e.target.closest('[data-sn-search]');
        if (!box) return;
        this.query = box.value || '';
        clearTimeout(this._t);
        this._t = setTimeout(() => {
          this.render();
          // Re-focus and restore the caret: render() replaces the input.
          const el = this.container.querySelector('[data-sn-search]');
          if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
        }, 200);
      } catch (_) { /* ignore */ }
    });
  }
}

/* Same bootstrap as the other lazily loaded modules: LQ.ready runs immediately
   when the document is already parsed, which it always is by the time a lazy
   bundle arrives. The fallback covers the module being loaded without
   module-loader.js present (the test harness does exactly that). */
let surahNamesView;
(window.LQ && LQ.ready ? LQ.ready : function (f) { document.addEventListener('DOMContentLoaded', f); })(() => {
  try { surahNamesView = new SurahNamesView(); } catch (_) { /* tab renders empty */ }
});
