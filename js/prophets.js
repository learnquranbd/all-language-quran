/**
 * Prophets & Messengers (Anbiya wa Rusul) — the 25 prophets named in the Quran,
 * in traditional chronological order, with a vertical Timeline view, a Grid view,
 * and a per-prophet detail page (story, key events, verified Quran references as
 * tappable pills, and a lesson). Bilingual en/bn content is authored INLINE on
 * each prophet; UI chrome falls back through PROPHETS_UI so the module renders
 * under any UI language. Per-prophet "read" progress is kept in localStorage
 * under `lq_prophets_read`.
 *
 * Renders into #prophets-container (tab "prophets"). Everything is defensive —
 * it never throws (guards DOM / localStorage / JSON / ayahModal / tabSystem /
 * t / appSettings).
 *
 * ACCURACY: content follows the mainstream Quran-based account (Quran +
 * authentic hadith + standard Qasas al-Anbiya, e.g. Ibn Kathir). Exact dates for
 * early prophets are NOT established in Islamic sources, so only RELATIVE order
 * is presented. Every surah number/name in `refs` was verified against
 * SURAH_DATA (js/surah-data.js). No figurative depiction of any prophet appears
 * anywhere — accents are purely geometric/typographic (aniconic).
 */

/* eslint-disable no-unused-vars */


/* --- Data moved to js/prophets-data.js (split 2025-07). --- */


class ProphetsView {
  constructor() {
    this.container = document.getElementById('prophets-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    if (!this.language) this.language = 'en';
    this.rendered = false;
    this.view = 'timeline';   // 'timeline' | 'grid'
    this.grouped = false;     // timeline view: group by traditional era
    this.filter = 'all';      // 'all' | 'rasul' | 'ululazm'
    this.query = '';
    this.selected = null;     // prophet id when in detail view
    this.read = this.loadRead();
    this.quizState = null;    // active quiz session, or null
    this.quizBest = this.loadQuizBest();
    this.treeView = 'list';   // lineage panel: 'list' | 'tree' (aniconic box tree)
    this.cmpA = 'musa';       // compare mini-view: left prophet id
    this.cmpB = 'ibrahim';    // compare mini-view: right prophet id

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'prophets') this.render(); } catch (_) { /* ignore */ }
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
    const e = PROPHETS_UI[key];
    if (e) {
      if (this.language && e[this.language]) return e[this.language];
      if (this.language === 'bn') return e.bn || e.en;
      if (this.language && this.language !== 'en' && typeof CI18N !== 'undefined' && e.en) {
        const tr = CI18N.tr(this.language, e.en); if (tr) return tr;
      }
      return e.en;
    }
    return key;
  }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  // Localized content picker: bn → CI18N knowledgebase → en fallback.
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }
  pick(item, field) {
    return this.lc({ en: item[field + 'En'], bn: item[field + 'Bn'] });
  }
  loc(item, base) {
    // for items using suffixed En/Bn fields
    return this.lc({ en: item[base + 'En'], bn: item[base + 'Bn'] });
  }

  loadRead() {
    try {
      const raw = localStorage.getItem('lq_prophets_read');
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) { return new Set(); }
  }
  saveRead() {
    try { localStorage.setItem('lq_prophets_read', JSON.stringify([...this.read])); } catch (_) { /* ignore */ }
  }

  loadQuizBest() {
    try { const n = parseInt(localStorage.getItem('lq_prophets_quiz_best'), 10); return Number.isFinite(n) ? n : 0; } catch (_) { return 0; }
  }
  saveQuizBest(n) {
    try { localStorage.setItem('lq_prophets_quiz_best', String(n)); } catch (_) { /* ignore */ }
  }

  // Look up a surah name (verified list lives in SURAH_DATA) for a ref label.
  surahName(n) {
    try {
      if (typeof getSurahByNumber === 'function') {
        const s = getSurahByNumber(n);
        if (s && s.names) return this.lc(s.names) || ('Surah ' + n);
        if (s && s.arabicName) return s.arabicName;
      }
      if (typeof SURAH_DATA !== 'undefined' && Array.isArray(SURAH_DATA)) {
        const s = SURAH_DATA.find(x => x.number === n);
        if (s && s.names) return this.lc(s.names) || ('Surah ' + n);
      }
    } catch (_) { /* ignore */ }
    return 'Surah ' + n;
  }

  // Convert a display ref ("7:11-25" or "12") to an openable "surah:ayah".
  openRef(ref) {
    const str = String(ref || '');
    if (str.indexOf(':') !== -1) {
      const surah = str.split(':')[0];
      let ayah = str.split(':')[1] || '1';
      ayah = ayah.split('-')[0].split(',')[0].trim();
      return surah + ':' + (ayah || '1');
    }
    return str + ':1';
  }

  refLabel(ref) {
    const str = String(ref || '');
    const surah = parseInt(str.split(':')[0], 10);
    const name = this.surahName(surah);
    const ayahPart = str.indexOf(':') !== -1 ? (':' + str.split(':')[1]) : '';
    return name + ' (' + surah + ayahPart + ')';
  }

  matches(p) {
    if (this.filter === 'rasul' && p.rank !== 'rasul') return false;
    if (this.filter === 'ululazm' && !p.ululAzm) return false;
    const q = this.query.trim().toLowerCase();
    if (!q) return true;
    const hay = [p.ar, p.translit, p.en, p.bn, this.loc(p, 'nation')].join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  // ── SVG accent (abstract, geometric — NO figurative imagery) ─────────
  starAccent(cls) {
    return `<svg viewBox="0 0 40 40" class="${cls}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.2">
      <polygon points="20,3 24,16 37,20 24,24 20,37 16,24 3,20 16,16" opacity="0.9"/>
      <circle cx="20" cy="20" r="6" opacity="0.5"/>
    </svg>`;
  }

  // ── rendering ────────────────────────────────────────────────────────
  render() {
    if (!this.container) return;
    this.rendered = true;
    if (this.quizState) { this.renderQuiz(); this.bind(); return; }

    const total = PROPHETS_DATA.length;
    const readCount = PROPHETS_DATA.filter(p => this.read.has(p.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;

    const viewToggle = ['timeline', 'grid'].map(v => {
      const active = this.view === v;
      const label = v === 'timeline' ? this.tt('prophets_view_timeline') : this.tt('prophets_view_grid');
      const icon = v === 'timeline' ? '🕰️' : '▦';
      return `<button type="button" data-prophets-view="${v}"
        class="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors
               ${active ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary'}">
        <span aria-hidden="true">${icon}</span> ${this.esc(label)}</button>`;
    }).join('');

    const filters = [
      { id: 'all', key: 'prophets_filter_all', emoji: '✦' },
      { id: 'rasul', key: 'prophets_filter_rasul', emoji: '📜' },
      { id: 'ululazm', key: 'prophets_filter_ululazm', emoji: '★' },
    ].map(c => {
      const active = this.filter === c.id;
      return `<button type="button" data-prophets-filter="${c.id}"
        class="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border transition-colors
               ${active ? 'bg-primary text-white border-primary'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary'}">
        <span aria-hidden="true">${c.emoji}</span> ${this.esc(this.tt(c.key))}</button>`;
    }).join('');

    this.container.innerHTML = `
      <div class="w-full max-w-4xl mx-auto pb-10">
        <div class="text-center mb-2">
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.esc(this.tt('prophets_subtitle'))}</p>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mb-4" dir="auto">${this.esc(this.tt('prophets_intro'))}</p>

        ${this.potdHtml()}

        <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 mb-4">
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${this.esc(this.tt('prophets_progress'))}</span>
            <span class="text-xs font-semibold text-primary" data-prophets-count>${readCount} ${this.esc(this.tt('prophets_of'))} ${total}</span>
          </div>
          <div class="h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <div class="h-full bg-primary transition-all" style="width:${pct}%" data-prophets-bar></div>
          </div>
          <div class="text-right mt-1">
            <button type="button" data-prophets-reset class="text-[0.7rem] text-gray-400 hover:text-red-500 transition-colors">↺ ${this.esc(this.tt('prophets_reset'))}</button>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
          <div class="inline-flex gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800 w-max">${viewToggle}</div>
          <input type="text" data-prophets-search value="${this.esc(this.query)}"
            placeholder="${this.esc(this.tt('prophets_search_placeholder'))}"
            class="flex-1 px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary outline-none" dir="auto" />
        </div>
        <div class="flex flex-wrap items-center gap-2 mb-5">
          ${filters}
          ${this.view === 'timeline' ? `<button type="button" data-prophets-group
            class="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border transition-colors
                   ${this.grouped ? 'bg-primary text-white border-primary'
                                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary'}">
            <span aria-hidden="true">${this.grouped ? '▣' : '▢'}</span> ${this.esc(this.tt('prophets_group_toggle'))}</button>` : ''}
        </div>

        ${this.ululStripHtml()}

        <div data-prophets-list></div>

        ${this.threadsHtml()}
        ${this.duasHtml()}
        ${this.prophetsThemesHtml()}
        ${this.hadithHtml()}
        ${this.lineageHtml()}
        ${this.compareHtml()}
        ${this.mentionsHtml()}

        <div class="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-5 text-center">
          <div class="text-2xl mb-1" aria-hidden="true">✦</div>
          <h3 class="font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('prophets_quiz_title'))}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3" dir="auto">${this.esc(this.tt('prophets_quiz_intro'))}</p>
          <button type="button" data-prophets-quiz-start
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
            ▶ ${this.esc(this.tt('prophets_quiz_start'))}
          </button>
          ${this.quizBest ? `<p class="text-[0.7rem] text-gray-400 dark:text-gray-500 mt-2">🏆 ${this.esc(this.tt('prophets_quiz_best'))}: ${this.quizBest}</p>` : ''}
        </div>

        <div class="mt-6 space-y-2">
          <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 leading-relaxed p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60" dir="auto">🗓️ ${this.esc(this.tt('prophets_date_note'))}</p>
          <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 leading-relaxed p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60" dir="auto">✦ ${this.esc(this.tt('prophets_many_note'))}</p>
        </div>
      </div>`;

    this.renderList();
    if (this.selected) this.renderDetailInline();
    this.bind();
  }

  renderList() {
    const listEl = this.container.querySelector('[data-prophets-list]');
    if (!listEl) return;
    const items = PROPHETS_DATA.filter(p => this.matches(p));
    if (!items.length) {
      listEl.innerHTML = `<p class="text-center text-gray-400 dark:text-gray-500 text-sm py-10">${this.esc(this.tt('prophets_no_results'))}</p>`;
      return;
    }
    listEl.innerHTML = this.view === 'timeline' ? this.timelineHtml(items) : this.gridHtml(items);
  }

  badges(p, compact) {
    const rankBadge = p.rank === 'rasul'
      ? `<span class="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-300 text-[0.65rem] font-semibold whitespace-nowrap">${this.esc(this.tt('prophets_badge_rasul'))}</span>`
      : `<span class="px-1.5 py-0.5 rounded bg-gray-500/10 text-gray-500 dark:text-gray-300 text-[0.65rem] font-semibold whitespace-nowrap">${this.esc(this.tt('prophets_badge_nabi'))}</span>`;
    const ululBadge = p.ululAzm
      ? `<span class="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-300 text-[0.65rem] font-semibold whitespace-nowrap">★ ${this.esc(this.tt('prophets_badge_ululazm'))}</span>`
      : '';
    const finalBadge = p.final
      ? `<span class="px-1.5 py-0.5 rounded bg-green-500/15 text-green-600 dark:text-green-300 text-[0.65rem] font-semibold whitespace-nowrap">${this.esc(this.tt('prophets_badge_final'))}</span>`
      : '';
    return rankBadge + ululBadge + finalBadge;
  }

  // ── Prophet of the Day (deterministic pick by day-of-year) ───────────
  potd() {
    try {
      const arr = PROPHETS_DATA;
      if (!Array.isArray(arr) || !arr.length) return null;
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const doy = Math.floor((now - start) / 86400000);
      const idx = ((doy % arr.length) + arr.length) % arr.length;
      return arr[idx] || null;
    } catch (_) { return null; }
  }

  potdHtml() {
    const p = this.potd();
    if (!p) return '';
    return `
      <div class="rounded-2xl bg-gradient-to-br from-primary/15 to-transparent border border-primary/25 p-4 mb-4">
        <div class="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-primary mb-2">
          <span aria-hidden="true">✦</span> ${this.esc(this.tt('prophets_potd_title'))}
        </div>
        <div class="flex items-start gap-3">
          <span class="text-3xl font-arabic text-primary shrink-0" dir="rtl" lang="ar">${this.esc(p.ar)}</span>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-bold text-gray-800 dark:text-gray-100">${this.esc(p.translit)}</span>
              <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.lc(p))}</span>
            </div>
            <p class="text-xs text-gray-600 dark:text-gray-300 mt-1" dir="auto">${this.esc(this.loc(p, 'era'))}</p>
            <button type="button" data-prophets-open="${this.esc(p.id)}"
              class="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity">
              📖 ${this.esc(this.tt('prophets_potd_open'))} ›
            </button>
          </div>
        </div>
      </div>`;
  }

  // ── Ulul-'Azm spotlight strip (the five resolute messengers) ─────────
  ululStripHtml() {
    const five = PROPHETS_DATA.filter(p => p.ululAzm);
    if (!five.length) return '';
    const chips = five.map(p => `
      <button type="button" data-prophets-open="${this.esc(p.id)}"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-amber-300/60 dark:border-amber-700/60 hover:border-amber-500 hover:shadow-sm transition-all whitespace-nowrap">
        <span class="font-arabic text-amber-600 dark:text-amber-300" dir="rtl" lang="ar">${this.esc(p.ar)}</span>
        <span class="text-xs font-semibold text-gray-700 dark:text-gray-200">${this.esc(this.language === 'bn' && p.bn ? p.bn : p.translit)}</span>
      </button>`).join('');
    return `
      <div class="rounded-xl bg-amber-500/5 border border-amber-300/40 dark:border-amber-800/40 p-3 mb-4">
        <div class="flex items-center gap-1.5 text-[0.7rem] font-semibold text-amber-600 dark:text-amber-300 mb-2">
          <span aria-hidden="true">★</span> ${this.esc(this.tt('prophets_ululazm_strip_title'))}
        </div>
        <div class="flex flex-wrap gap-2">${chips}</div>
      </div>`;
  }

  timelineHtml(items) {
    if (!this.grouped) return this.timelineOl(items);
    return PROPHETS_ERAS.map(era => {
      const group = items.filter(p => p.order >= era.min && p.order <= era.max);
      if (!group.length) return '';
      return `
        <div class="flex items-center gap-2 mt-5 mb-2 first:mt-0">
          <span class="text-base" aria-hidden="true">${era.emoji}</span>
          <h4 class="text-sm font-bold text-gray-700 dark:text-gray-200">${this.esc(this.tt(era.key))}</h4>
          <span class="flex-1 h-px bg-gray-200 dark:bg-gray-700"></span>
        </div>
        ${this.timelineOl(group)}`;
    }).join('');
  }

  timelineOl(items) {
    return `
      <ol class="relative border-s-2 border-gray-200 dark:border-gray-700 ms-4 space-y-4">
        ${items.map(p => {
          const isRead = this.read.has(p.id);
          return `
          <li class="ms-6">
            <span class="absolute -start-[0.72rem] flex items-center justify-center w-6 h-6 rounded-full ${isRead ? 'bg-green-500 text-white' : 'bg-primary/15 text-primary'} ring-4 ring-gray-50 dark:ring-gray-900 text-[0.7rem] font-bold" aria-hidden="true">${p.order}</span>
            <button type="button" data-prophets-open="${this.esc(p.id)}"
              class="w-full text-left rounded-xl bg-white dark:bg-gray-800 border ${isRead ? 'border-green-300 dark:border-green-800' : 'border-gray-200 dark:border-gray-700'} p-4 hover:border-primary hover:shadow-md transition-all">
              <div class="flex items-start gap-3">
                <span class="text-2xl font-arabic text-primary shrink-0" dir="rtl" lang="ar">${this.esc(p.ar)}</span>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-bold text-gray-800 dark:text-gray-100">${this.esc(p.translit)}</span>
                    <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.lc(p))}</span>
                    ${isRead ? '<span class="text-green-500 text-xs">✓</span>' : ''}
                  </div>
                  <div class="flex flex-wrap gap-1 mt-1.5">${this.badges(p, true)}</div>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-1.5" dir="auto">
                    <span class="opacity-70">${this.esc(this.tt('prophets_label_nation'))}:</span> ${this.esc(this.loc(p, 'nation'))}
                  </p>
                </div>
                <span class="text-gray-300 dark:text-gray-600 shrink-0" aria-hidden="true">›</span>
              </div>
            </button>
          </li>
          <div class="prophet-detail-${this.esc(p.id)} mx-6"></div>`;
        }).join('')}
      </ol>`;
  }

  gridHtml(items) {
    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${items.map(p => {
          const isRead = this.read.has(p.id);
          return `
          <div class="contents">
          <button type="button" data-prophets-open="${this.esc(p.id)}"
            class="group text-left relative rounded-xl bg-white dark:bg-gray-800 border ${isRead ? 'border-green-300 dark:border-green-800' : 'border-gray-200 dark:border-gray-700'} p-4 hover:border-primary hover:shadow-md transition-all overflow-hidden">
            <span class="absolute top-2 end-2 text-primary/15 group-hover:text-primary/30 transition-colors">${this.starAccent('w-8 h-8')}</span>
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full ${isRead ? 'bg-green-500 text-white' : 'bg-primary/10 text-primary'} text-xs font-bold mb-2" aria-hidden="true">${p.order}</span>
            <div class="text-2xl font-arabic text-primary mb-1" dir="rtl" lang="ar">${this.esc(p.ar)}</div>
            <div class="font-bold text-gray-800 dark:text-gray-100">${this.esc(p.translit)} ${isRead ? '<span class="text-green-500 text-xs align-middle">✓</span>' : ''}</div>
            <div class="text-xs text-gray-400 dark:text-gray-500 mb-2">${this.esc(this.lc(p))}</div>
            <div class="flex flex-wrap gap-1">${this.badges(p, true)}</div>
          </button>
          <div class="prophet-detail-${this.esc(p.id)} col-span-full"></div>
          </div>`;
        }).join('')}
      </div>`;
  }

  threadsHtml() {
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">🧵 ${this.esc(this.tt('prophets_threads_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_threads_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${COMMON_THREADS.map(th => `
            <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-lg" aria-hidden="true">${th.emoji}</span>
                <span class="font-bold text-gray-800 dark:text-gray-100 text-sm">${this.esc(this.lc({en: th.titleEn, bn: th.titleBn}))}</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-2" dir="auto">${this.esc(this.lc({en: th.bodyEn, bn: th.bodyBn}))}</p>
              <div class="flex flex-wrap gap-1.5">
                ${(th.refs || []).map(r => `<button type="button" data-prophets-ayah="${this.esc(this.openRef(r))}"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[0.7rem] font-medium hover:bg-primary hover:text-white transition-colors" dir="auto">📖 ${this.esc(this.refLabel(r))}</button>`).join('')}
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // Display name (transliteration) for a prophet id; safe fallback.
  pname(pid) {
    // Localized prophet name: Bengali form for the bn UI, transliteration elsewhere.
    const p = PROPHETS_DATA.find(x => x.id === pid);
    if (!p) return String(pid || '');
    return (this.language === 'bn' && p.bn) ? p.bn : p.translit;
  }

  duasHtml() {
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">🤲 ${this.esc(this.tt('prophets_duas_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_duas_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${PROPHETS_DUAS.map(d => `
            <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-2">
              <div class="flex items-center justify-between gap-2">
                <span class="font-bold text-gray-800 dark:text-gray-100 text-sm">${this.esc(this.pname(d.pid))}</span>
                <button type="button" data-prophets-ayah="${this.esc(this.openRef(d.ref))}"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[0.7rem] font-medium hover:bg-primary hover:text-white transition-colors" dir="auto">📖 ${this.esc(this.refLabel(d.ref))}</button>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic" dir="auto">${this.esc(this.lc({en: d.glossEn, bn: d.glossBn}))}</p>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // Localized rank label (Nabi / Rasul, plus Ulul-'Azm) from existing data.
  rankLabel(p) {
    const base = p.rank === 'rasul' ? this.tt('prophets_badge_rasul') : this.tt('prophets_badge_nabi');
    return p.ululAzm ? base + ' · ' + this.tt('prophets_badge_ululazm') : base;
  }

  // Compare two prophets side by side — rank, people, era — all from existing
  // data. Reuses the two <select> dropdowns; no new content strings.
  compareHtml() {
    const opts = (sel) => PROPHETS_DATA.map(p =>
      `<option value="${this.esc(p.id)}" ${p.id === sel ? 'selected' : ''}>${this.esc(this.pname(p.id))}</option>`).join('');
    const a = PROPHETS_DATA.find(x => x.id === this.cmpA) || PROPHETS_DATA[0];
    const b = PROPHETS_DATA.find(x => x.id === this.cmpB) || PROPHETS_DATA[1];
    const rowLabel = (txt) => `<div class="text-[0.65rem] uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold text-center py-1">${this.esc(txt)}</div>`;
    const cellPair = (va, vb) => `
      <div class="text-sm text-gray-700 dark:text-gray-200 text-center px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-900/40" dir="auto">${this.esc(va)}</div>
      <div class="text-sm text-gray-700 dark:text-gray-200 text-center px-2 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-900/40" dir="auto">${this.esc(vb)}</div>`;
    const head = (p) => `
      <div class="text-center">
        <div class="text-2xl font-arabic text-primary" dir="rtl" lang="ar">${this.esc(p.ar)}</div>
        <div class="font-bold text-gray-800 dark:text-gray-100 text-sm">${this.esc(this.pname(p.id))}</div>
      </div>`;
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">⚖️ ${this.esc(this.tt('prophets_compare_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_compare_intro'))}</p>
        <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
          <div class="grid grid-cols-2 gap-2 mb-3">
            <select data-prophets-cmp="a" class="w-full text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-2 py-2">${opts(this.cmpA)}</select>
            <select data-prophets-cmp="b" class="w-full text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-2 py-2">${opts(this.cmpB)}</select>
          </div>
          <div class="flex justify-center mb-3">
            <button type="button" data-prophets-cmp-swap class="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors">⇄ ${this.esc(this.tt('prophets_compare_swap'))}</button>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2">${head(a)}${head(b)}</div>
          ${rowLabel(this.tt('prophets_compare_rank'))}
          <div class="grid grid-cols-2 gap-2 mb-1">${cellPair(this.rankLabel(a), this.rankLabel(b))}</div>
          ${rowLabel(this.tt('prophets_label_nation'))}
          <div class="grid grid-cols-2 gap-2 mb-1">${cellPair(this.loc(a, 'nation'), this.loc(b, 'nation'))}</div>
          ${rowLabel(this.tt('prophets_label_era'))}
          <div class="grid grid-cols-2 gap-2">${cellPair(this.loc(a, 'era'), this.loc(b, 'era'))}</div>
        </div>
      </div>`;
  }

  // Abstract, text-only lineage tree (names + connective lines; no figures).
  lineageListHtml() {
    const node = (label, extra) => `
      <div class="flex items-center gap-2">
        <span class="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">${this.esc(label)}</span>
        ${extra ? `<span class="text-[0.7rem] text-gray-400 dark:text-gray-500" dir="auto">${this.esc(extra)}</span>` : ''}
      </div>`;
    const branch = (inner) => `
      <div class="ms-3 ps-4 border-s-2 border-dashed border-gray-300 dark:border-gray-600 space-y-2 pt-2">${inner}</div>`;
    const baniList = ['yusuf', 'musa', 'harun', 'dawud', 'sulayman', 'zakariya', 'yahya', 'isa']
      .map(id => this.pname(id)).join(' · ');
    return `
      <div class="space-y-2 min-w-[16rem]">
        ${node(this.pname('adam') + ' (AS)')}
        ${branch(`
          ${node(this.pname('nuh') + ' (AS)')}
          ${branch(`
            ${node(this.pname('ibrahim') + ' (AS)')}
            ${branch(`
              ${node(this.pname('ismail') + ' (AS)', '→ ' + this.tt('prophets_lineage_arabs') + ' → ' + this.pname('muhammad') + ' ﷺ')}
              ${node(this.pname('ishaq') + ' (AS)', '→ ' + this.pname('yaqub') + ' (' + this.tt('prophets_lineage_israel') + ') (AS)')}
              ${branch(`
                <div>
                  <div class="text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">${this.esc(this.tt('prophets_lineage_bani'))}</div>
                  <div class="text-xs text-gray-600 dark:text-gray-300" dir="auto">${this.esc(baniList)} (AS)</div>
                </div>`)}
            `)}
          `)}
        `)}
      </div>`;
  }

  // Aniconic geometric family tree: boxes + connector lines only, NO figures.
  // Adam → Nuh → Ibrahim → (Isma'il → the Arabs → Muhammad ﷺ | Ishaq → Ya'qub
  // → the Bani-Israil prophets). Pure text/box/line — reuses existing name data.
  lineageTreeHtml() {
    const box = (label, tone) => {
      const cls = tone === 'final'
        ? 'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300'
        : tone === 'muted'
          ? 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/40 text-gray-500 dark:text-gray-400'
          : 'border-primary/40 bg-primary/5 text-primary';
      return `<div class="inline-flex items-center px-3 py-1.5 rounded-lg border-2 ${cls} text-xs font-semibold whitespace-nowrap" dir="auto">${this.esc(label)}</div>`;
    };
    const vline = () => `<div class="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>`;
    const branchCol = (inner) => `<div class="flex flex-col items-center gap-1">${inner}</div>`;
    const baniIds = ['yusuf', 'musa', 'harun', 'dawud', 'sulayman', 'zakariya', 'yahya', 'isa'];
    const baniBoxes = baniIds.map(id => `<div class="inline-flex items-center px-2 py-1 rounded-md border border-primary/30 bg-white dark:bg-gray-800 text-primary text-[0.7rem] font-medium whitespace-nowrap" dir="auto">${this.esc(this.pname(id))}</div>`).join('');
    return `
      <div class="flex flex-col items-center gap-1 text-center min-w-[20rem] py-2">
        ${box(this.pname('adam') + ' (AS)')}
        ${vline()}
        ${box(this.pname('nuh') + ' (AS)')}
        ${vline()}
        ${box(this.pname('ibrahim') + ' (AS)')}
        <div class="relative w-full pt-4 mt-1">
          <div class="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>
          <div class="absolute top-0 left-1/4 -ml-px w-0.5 h-4 bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>
          <div class="absolute top-0 right-1/4 -mr-px w-0.5 h-4 bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>
          <div class="grid grid-cols-2 gap-3">
            ${branchCol(`
              ${box(this.pname('ismail') + ' (AS)')}
              ${vline()}
              ${box(this.tt('prophets_lineage_arabs'), 'muted')}
              ${vline()}
              ${box(this.pname('muhammad') + ' ﷺ', 'final')}
            `)}
            ${branchCol(`
              ${box(this.pname('ishaq') + ' (AS)')}
              ${vline()}
              ${box(this.pname('yaqub') + ' · ' + this.tt('prophets_lineage_israel') + ' (AS)')}
              ${vline()}
              <div class="text-[0.65rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('prophets_lineage_bani'))}</div>
              <div class="flex flex-wrap justify-center gap-1">${baniBoxes}</div>
            `)}
          </div>
        </div>
      </div>`;
  }

  lineageHtml() {
    const toggle = ['list', 'tree'].map(v => {
      const active = this.treeView === v;
      const label = v === 'list' ? this.tt('prophets_lineage_view_list') : this.tt('prophets_lineage_view_tree');
      const icon = v === 'list' ? '☰' : '🌳';
      return `<button type="button" data-prophets-tree="${v}"
        class="px-3 py-1 rounded-lg text-xs font-medium transition-colors ${active
          ? 'bg-primary text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-primary'}">
        <span aria-hidden="true">${icon}</span> ${this.esc(label)}</button>`;
    }).join('');
    return `
      <div class="mt-8">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
          <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">🌿 ${this.esc(this.tt('prophets_lineage_title'))}</h3>
          <div class="flex items-center gap-1">${toggle}</div>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_lineage_intro'))}</p>
        <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 overflow-x-auto">
          ${this.treeView === 'tree' ? this.lineageTreeHtml() : this.lineageListHtml()}
        </div>
        <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 leading-relaxed mt-2" dir="auto">ℹ️ ${this.esc(this.tt('prophets_lineage_note'))}</p>
      </div>`;
  }

  mentionsHtml() {
    const max = PROPHETS_MENTIONS.reduce((m, x) => Math.max(m, x.n || 0), 1);
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">📊 ${this.esc(this.tt('prophets_mentions_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_mentions_intro'))}</p>
        <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 space-y-2">
          ${PROPHETS_MENTIONS.map(m => {
            const pct = Math.max(4, Math.round((m.n / max) * 100));
            const note = this.lc({en: m.noteEn, bn: m.noteBn});
            return `
            <div>
              <div class="flex items-center justify-between gap-2 text-xs">
                <span class="font-medium text-gray-700 dark:text-gray-200">${this.esc(this.pname(m.pid))}</span>
                <span class="text-gray-400 dark:text-gray-500 whitespace-nowrap">~${m.n} ${this.esc(this.tt('prophets_mentions_times'))}</span>
              </div>
              <div class="h-1.5 mt-0.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <div class="h-full bg-primary/70" style="width:${pct}%"></div>
              </div>
              ${note ? `<p class="text-[0.65rem] text-gray-400 dark:text-gray-500 mt-0.5" dir="auto">${this.esc(note)}</p>` : ''}
            </div>`;
          }).join('')}
        </div>
        <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 leading-relaxed mt-2" dir="auto">ℹ️ ${this.esc(this.tt('prophets_mentions_note'))}</p>
      </div>`;
  }

  // ── quiz ─────────────────────────────────────────────────────────────
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t2 = a[i]; a[i] = a[j]; a[j] = t2;
    }
    return a;
  }

  buildQuiz() {
    const baseN = 4;
    const chosen = this.shuffle(PROPHETS_DATA).slice(0, baseN);
    const questions = chosen.map(p => {
      // Prefer an "event" prompt when the prophet has events, else "nation".
      const events = Array.isArray(p.events) ? p.events : [];
      const useEvent = events.length && Math.random() < 0.5;
      let promptText, promptType;
      if (useEvent) {
        const ev = events[Math.floor(Math.random() * events.length)];
        promptText = this.lc(ev);
        promptType = 'event';
      } else {
        promptText = this.loc(p, 'nation');
        promptType = 'nation';
      }
      const distractors = this.shuffle(PROPHETS_DATA.filter(x => x.id !== p.id)).slice(0, 3);
      const options = this.shuffle(distractors.concat(p)).map(o => ({ id: o.id, label: this.pname(o.id) }));
      return { answerId: p.id, promptText, promptType, options };
    });

    // 2 dua questions: "Which prophet made this supplication?"
    try {
      const duas = this.shuffle(PROPHETS_DUAS).slice(0, 2);
      duas.forEach(d => {
        const answer = PROPHETS_DATA.find(x => x.id === d.pid);
        if (!answer) return;
        const distractors = this.shuffle(PROPHETS_DATA.filter(x => x.id !== d.pid)).slice(0, 3);
        const options = this.shuffle(distractors.concat(answer)).map(o => ({ id: o.id, label: this.pname(o.id) }));
        const promptText = this.lc({en: d.glossEn, bn: d.glossBn});
        questions.push({ answerId: d.pid, promptText, promptType: 'dua', options });
      });
    } catch (_) { /* ignore */ }

    // 2 lineage questions with curated options.
    try {
      const lin = this.shuffle(PROPHETS_LINEAGE_QUIZ).slice(0, 2);
      lin.forEach(lq => {
        const options = this.shuffle(lq.optionIds.slice()).map(id => ({ id, label: this.pname(id) }));
        const promptText = this.lc({en: lq.promptEn, bn: lq.promptBn});
        questions.push({ answerId: lq.answerId, promptText, promptType: 'lineage', options });
      });
    } catch (_) { /* ignore */ }

    return { questions: this.shuffle(questions), idx: 0, score: 0, answeredId: null, done: false };
  }

  renderQuiz() {
    const q = this.quizState;
    if (!q) { this.render(); return; }
    const total = q.questions.length;

    if (q.done) {
      const passed = q.score === total;
      this.container.innerHTML = `
        <div class="w-full max-w-md mx-auto py-8 text-center">
          <div class="text-4xl mb-2" aria-hidden="true">${passed ? '🌟' : '✦'}</div>
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">${this.esc(this.tt('prophets_quiz_result'))}</h2>
          <p class="text-3xl font-extrabold text-primary my-3">${q.score} / ${total}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">🏆 ${this.esc(this.tt('prophets_quiz_best'))}: ${this.quizBest}</p>
          <div class="flex items-center justify-center gap-2">
            <button type="button" data-prophets-quiz-restart
              class="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity">↻ ${this.esc(this.tt('prophets_quiz_restart'))}</button>
            <button type="button" data-prophets-quiz-close
              class="px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold hover:text-primary transition-colors">${this.esc(this.tt('prophets_quiz_close'))}</button>
          </div>
        </div>`;
      return;
    }

    const cur = q.questions[q.idx];
    const answered = q.answeredId != null;
    const promptLabel = cur.promptType === 'event' ? this.tt('prophets_quiz_q_event')
      : cur.promptType === 'dua' ? this.tt('prophets_quiz_q_dua')
      : cur.promptType === 'lineage' ? this.tt('prophets_quiz_q_lineage')
      : this.tt('prophets_quiz_q_nation');
    const pct = Math.round((q.idx / total) * 100);

    const optsHtml = cur.options.map(o => {
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      let mark = '';
      if (answered) {
        if (o.id === cur.answerId) { cls = 'bg-green-50 dark:bg-green-900/30 border-green-400 dark:border-green-700'; mark = '<span class="text-green-500">✓</span>'; }
        else if (o.id === q.answeredId) { cls = 'bg-red-50 dark:bg-red-900/30 border-red-400 dark:border-red-700'; mark = '<span class="text-red-500">✗</span>'; }
        else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'; }
      }
      return `<button type="button" ${answered ? 'disabled' : ''} data-prophets-quiz-answer="${this.esc(o.id)}"
        class="w-full flex items-center justify-between gap-2 text-left px-4 py-3 rounded-xl border font-medium text-gray-700 dark:text-gray-200 transition-colors ${cls}">
        <span>${this.esc(o.label)}</span> ${mark}</button>`;
    }).join('');

    const correctName = this.pname(cur.answerId);
    const feedback = answered
      ? (q.answeredId === cur.answerId
          ? `<p class="text-sm font-semibold text-green-600 dark:text-green-400 text-center mt-3">✓ ${this.esc(this.tt('prophets_quiz_correct'))}</p>`
          : `<p class="text-sm font-semibold text-red-500 text-center mt-3">${this.esc(this.tt('prophets_quiz_wrong'))}: ${this.esc(correctName)}</p>`)
      : '';
    const isLast = q.idx === total - 1;

    this.container.innerHTML = `
      <div class="w-full max-w-md mx-auto py-4">
        <div class="flex items-center justify-between mb-2 text-xs text-gray-500 dark:text-gray-400">
          <span>${this.esc(this.tt('prophets_quiz_question'))} ${q.idx + 1} / ${total}</span>
          <span>${this.esc(this.tt('prophets_quiz_score'))}: <strong class="text-primary">${q.score}</strong> · 🏆 ${this.quizBest}</span>
        </div>
        <div class="h-1.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4">
          <div class="h-full bg-primary transition-all" style="width:${pct}%"></div>
        </div>
        <div class="rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-4 mb-4">
          <p class="text-xs text-gray-400 dark:text-gray-500 mb-1">${this.esc(promptLabel)}</p>
          <p class="text-base font-semibold text-gray-800 dark:text-gray-100 leading-relaxed" dir="auto">${this.esc(cur.promptText)}</p>
        </div>
        <div class="space-y-2">${optsHtml}</div>
        ${feedback}
        <div class="mt-4 flex items-center justify-between">
          <button type="button" data-prophets-quiz-close
            class="text-xs text-gray-400 hover:text-red-500 transition-colors">✕ ${this.esc(this.tt('prophets_quiz_close'))}</button>
          ${answered ? `<button type="button" data-prophets-quiz-next
            class="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity">${this.esc(isLast ? this.tt('prophets_quiz_finish') : this.tt('prophets_quiz_next'))} →</button>` : ''}
        </div>
      </div>`;
  }

  quizStart() { this.quizState = this.buildQuiz(); this.render(); this.scrollTop(); }
  quizClose() { this.quizState = null; this.render(); this.scrollTop(); }

  quizAnswer(id) {
    const q = this.quizState;
    if (!q || q.answeredId != null) return;
    const cur = q.questions[q.idx];
    q.answeredId = id;
    if (id === cur.answerId) q.score++;
    this.renderQuiz();
  }

  quizNext() {
    const q = this.quizState;
    if (!q) return;
    if (q.idx < q.questions.length - 1) {
      q.idx++; q.answeredId = null;
      this.renderQuiz();
    } else {
      q.done = true;
      if (q.score > this.quizBest) { this.quizBest = q.score; this.saveQuizBest(q.score); }
      this.renderQuiz();
    }
  }

  // "Where in the Quran" — group a prophet's EXISTING verified refs by surah,
  // show the surah name + how many of his passages fall there, as tappable pills
  // that open the first ayah. No new refs — reuses p.refs only.
  whereHtml(p) {
    const refs = Array.isArray(p.refs) ? p.refs : [];
    if (!refs.length) return '';
    const bySurah = [];
    const idx = {};
    refs.forEach(r => {
      const surah = parseInt(String(r).split(':')[0], 10);
      if (!Number.isFinite(surah)) return;
      if (idx[surah] == null) {
        idx[surah] = bySurah.length;
        bySurah.push({ surah, count: 0, firstRef: r });
      }
      bySurah[idx[surah]].count++;
    });
    if (!bySurah.length) return '';
    // Most-associated first (by passage count), keeping stable order otherwise.
    bySurah.sort((a, b) => b.count - a.count);
    const pills = bySurah.map(g => `<button type="button" data-prophets-ayah="${this.esc(this.openRef(g.firstRef))}"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium hover:bg-indigo-500 hover:text-white transition-colors" dir="auto">
        📍 ${this.esc(this.surahName(g.surah))} <span class="opacity-70">(${g.surah})</span>
        <span class="px-1 rounded bg-indigo-500/15 text-[0.65rem]">${g.count} ${this.esc(this.tt('prophets_where_passages'))}</span></button>`).join('');
    return `
      <div class="mb-4">
        <h3 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1.5">📍 ${this.esc(this.tt('prophets_where_title'))}</h3>
        <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 mb-2" dir="auto">${this.esc(this.tt('prophets_where_hint'))}</p>
        <div class="flex flex-wrap gap-1.5">${pills}</div>
      </div>`;
  }

  renderDetailInline() {
    const p = PROPHETS_DATA.find(x => x.id === this.selected);
    if (!p) return;
    const isRead = this.read.has(p.id);
    const el = this.container ? this.container.querySelector('.prophet-detail-' + p.id) : null;
    if (!el) return;
    const _depth = (typeof PROPHETS_DEPTH !== 'undefined' && PROPHETS_DEPTH) ? (PROPHETS_DEPTH[p.id] || {}) : {};

    const events = Array.isArray(p.events) ? p.events : [];
    const eventsHtml = events.length ? `
      <div class="mb-4">
        <h3 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-1.5">◆ ${this.esc(this.tt('prophets_label_events'))}</h3>
        <ul class="space-y-1.5">
          ${events.map(ev => `<li class="flex gap-2 text-sm text-gray-600 dark:text-gray-300" dir="auto"><span class="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span><span class="flex-1">${this.esc(this.lc(ev))}</span></li>`).join('')}
        </ul>
      </div>` : '';


    const _trials = Array.isArray(_depth.trials) ? _depth.trials : [];
    const trialsHtml = _trials.length ? `
      <div class="mb-4">
        <h3 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-1.5">\u2696\ufe0f ${this.esc(this.tt('prophets_label_trials'))}</h3>
        <ul class="space-y-1.5">
          ${_trials.map(tr => `<li class="flex gap-2 text-sm text-gray-600 dark:text-gray-300" dir="auto"><span class="text-amber-500 mt-0.5 shrink-0" aria-hidden="true">\u25b8</span><span class="flex-1">${this.esc(this.lc(tr))}</span></li>`).join('')}
        </ul>
      </div>` : '';

    const _land = this.lc({en: _depth.landEn, bn: _depth.landBn});
    const _book = this.lc({en: _depth.bookEn, bn: _depth.bookBn});
    const landCellHtml = _land ? `<div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40"><div class="text-[0.65rem] uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold">${this.esc(this.tt('prophets_label_land'))}</div><div class="text-sm text-gray-700 dark:text-gray-200" dir="auto">${this.esc(_land)}</div></div>` : '';
    const bookCellHtml = _book ? `<div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40"><div class="text-[0.65rem] uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold">${this.esc(this.tt('prophets_label_book'))}</div><div class="text-sm text-gray-700 dark:text-gray-200" dir="auto">${this.esc(_book)}</div></div>` : '';
    const spotlight = this.loc(p, 'spotlight') || this.lc({en: _depth.spotlightEn, bn: _depth.spotlightBn});
    const spotlightHtml = spotlight ? `
      <div class="mb-4 p-3.5 rounded-xl bg-primary/5 border border-primary/20">
        <h3 class="text-sm font-bold text-primary mb-1.5 flex items-center gap-1.5">✧ ${this.esc(this.tt('prophets_label_spotlight'))}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(spotlight)}</p>
      </div>` : '';

    const sign = this.loc(p, 'sign') || this.lc({en: _depth.signEn, bn: _depth.signBn});
    const signRefs = (Array.isArray(p.signRefs) && p.signRefs.length) ? p.signRefs : (Array.isArray(_depth.signRefs) ? _depth.signRefs : []);
    const signHtml = sign ? `
      <div class="mb-4 p-3.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-900/40">
        <h3 class="text-sm font-bold text-teal-700 dark:text-teal-300 mb-1.5 flex items-center gap-1.5">✦ ${this.esc(this.tt('prophets_label_sign'))}</h3>
        <p class="text-sm text-teal-800 dark:text-teal-200 leading-relaxed mb-2" dir="auto">${this.esc(sign)}</p>
        ${signRefs.length ? `<div class="flex flex-wrap gap-1.5">${signRefs.map(r => `<button type="button" data-prophets-ayah="${this.esc(this.openRef(r))}"
            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 text-[0.7rem] font-medium hover:bg-teal-500 hover:text-white transition-colors" dir="auto">📖 ${this.esc(this.refLabel(r))}</button>`).join('')}</div>` : ''}
      </div>` : '';

    const refs = Array.isArray(p.refs) ? p.refs : [];
    const refsHtml = refs.length ? `
      <div class="mb-4">
        <h3 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1.5">📖 ${this.esc(this.tt('prophets_label_refs'))}</h3>
        <p class="text-[0.7rem] text-gray-400 dark:text-gray-500 mb-2">${this.esc(this.tt('prophets_ref_hint'))}</p>
        <div class="flex flex-wrap gap-1.5">
          ${refs.map(r => `<button type="button" data-prophets-ayah="${this.esc(this.openRef(r))}"
            class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors" dir="auto">
            📖 ${this.esc(this.refLabel(r))}</button>`).join('')}
        </div>
      </div>` : '';

    const seerahBtn = p.seerahLink ? `
      <button type="button" data-prophets-seerah
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 mb-4 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
        🌙 ${this.esc(this.tt('prophets_seerah_btn'))} <span aria-hidden="true">→</span>
      </button>` : '';

    el.innerHTML = `
      <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden mb-4">
        <div class="relative p-5 bg-gradient-to-br from-primary/10 to-transparent">
          <button type="button" data-prophets-close="${this.esc(p.id)}"
            class="absolute top-3 end-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-500 hover:text-primary hover:bg-white dark:hover:bg-gray-700 shadow-sm transition-colors z-10" title="Close">
            ✕
          </button>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/15 text-primary text-xs font-bold" aria-hidden="true">${p.order}</span>
            <span class="text-xs text-gray-400 dark:text-gray-500">#${p.order} ${this.esc(this.tt('prophets_of'))} ${PROPHETS_DATA.length}</span>
          </div>
        </div>

        <div class="p-5">
          <div class="mb-4 p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 inline-block">
            <div class="text-[0.65rem] uppercase tracking-wide text-gray-400 dark:text-gray-500 font-semibold">${this.esc(this.tt('prophets_label_era'))}</div>
            <div class="text-sm text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.loc(p, 'era'))}</div>
          </div>

          <div class="mb-4">
            <h3 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-1.5">✦ ${this.esc(this.tt('prophets_label_story'))}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.loc(p, 'summary'))}</p>
          </div>

          ${spotlightHtml}
          ${eventsHtml}
          ${trialsHtml}
          ${_land || _book ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">${landCellHtml}${bookCellHtml}</div>` : ''}
          ${signHtml}
          ${refsHtml}
          ${this.whereHtml(p)}

          <div class="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/40">
            <div class="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">💡 ${this.esc(this.tt('prophets_label_lesson'))}</div>
            <p class="text-sm text-amber-800 dark:text-amber-200 leading-relaxed" dir="auto">${this.esc(this.loc(p, 'lesson'))}</p>
          </div>

          ${seerahBtn}

          <button type="button" data-prophets-read="${this.esc(p.id)}"
            class="w-full sm:w-auto text-sm px-4 py-2.5 rounded-xl font-medium transition-colors
                   ${isRead ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-primary text-white hover:opacity-90'}">
            ${isRead ? '✓ ' + this.esc(this.tt('prophets_marked_read')) : this.esc(this.tt('prophets_mark_read'))}
          </button>
        </div>
      </div>`;

    try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
  }

  // ── events ───────────────────────────────────────────────────────────
  bind() {
    if (this._bound) return;
    this._bound = true;

    this.container.addEventListener('click', (e) => {
      try {
        const back = e.target.closest('[data-prophets-back]');
        if (back) {
          this.selected = null;
          try { this.container.querySelector('[data-prophets-list]')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) {}
          return;
        }

        const close = e.target.closest('[data-prophets-close]');
        if (close) { this.selected = null; this.render(); return; }

        const open = e.target.closest('[data-prophets-open]');
        if (open) { this.selected = open.getAttribute('data-prophets-open'); this.render(); return; }

        const viewBtn = e.target.closest('[data-prophets-view]');
        if (viewBtn) { this.view = viewBtn.getAttribute('data-prophets-view'); this.render(); return; }

        const groupBtn = e.target.closest('[data-prophets-group]');
        if (groupBtn) { this.grouped = !this.grouped; this.render(); return; }

        const treeBtn = e.target.closest('[data-prophets-tree]');
        if (treeBtn) { this.treeView = treeBtn.getAttribute('data-prophets-tree'); this.render(); return; }

        const cmpSwap = e.target.closest('[data-prophets-cmp-swap]');
        if (cmpSwap) { const tmp = this.cmpA; this.cmpA = this.cmpB; this.cmpB = tmp; this.render(); return; }

        const filterBtn = e.target.closest('[data-prophets-filter]');
        if (filterBtn) { this.filter = filterBtn.getAttribute('data-prophets-filter'); this.render(); return; }

        const readBtn = e.target.closest('[data-prophets-read]');
        if (readBtn) { this.toggleRead(readBtn.getAttribute('data-prophets-read')); return; }

        const ayahBtn = e.target.closest('[data-prophets-ayah]');
        if (ayahBtn) { this.openAyah(ayahBtn.getAttribute('data-prophets-ayah')); return; }

        const seerah = e.target.closest('[data-prophets-seerah]');
        if (seerah) { this.openSeerah(); return; }

        const reset = e.target.closest('[data-prophets-reset]');
        if (reset) { this.resetProgress(); return; }

        const quizStart = e.target.closest('[data-prophets-quiz-start], [data-prophets-quiz-restart]');
        if (quizStart) { this.quizStart(); return; }

        const quizClose = e.target.closest('[data-prophets-quiz-close]');
        if (quizClose) { this.quizClose(); return; }

        const quizAnswer = e.target.closest('[data-prophets-quiz-answer]');
        if (quizAnswer) { this.quizAnswer(quizAnswer.getAttribute('data-prophets-quiz-answer')); return; }

        const quizNext = e.target.closest('[data-prophets-quiz-next]');
        if (quizNext) { this.quizNext(); return; }
      } catch (_) { /* ignore */ }
    });

    this.container.addEventListener('input', (e) => {
      try {
        const search = e.target.closest ? e.target.closest('[data-prophets-search]') : null;
        if (search) { this.query = search.value || ''; this.renderList(); }
      } catch (_) { /* ignore */ }
    });

    this.container.addEventListener('change', (e) => {
      try {
        const cmp = e.target.closest ? e.target.closest('[data-prophets-cmp]') : null;
        if (cmp) {
          const which = cmp.getAttribute('data-prophets-cmp');
          if (which === 'a') this.cmpA = cmp.value; else this.cmpB = cmp.value;
          this.render();
        }
      } catch (_) { /* ignore */ }
    });
  }

  scrollTop() {
    try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (_) { /* ignore */ }
  }

  toggleRead(id) {
    if (this.read.has(id)) this.read.delete(id); else this.read.add(id);
    this.saveRead();
    if (this.selected === id) { this.renderDetailInline(); }
    else { this.renderList(); this.updateProgress(); }
  }

  updateProgress() {
    const total = PROPHETS_DATA.length;
    const readCount = PROPHETS_DATA.filter(p => this.read.has(p.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;
    const countEl = this.container.querySelector('[data-prophets-count]');
    const barEl = this.container.querySelector('[data-prophets-bar]');
    if (countEl) countEl.textContent = `${readCount} ${this.tt('prophets_of')} ${total}`;
    if (barEl) barEl.style.width = `${pct}%`;
  }

  resetProgress() {
    this.read = new Set();
    this.saveRead();
    this.render();
  }

  openAyah(ref) {
    try {
      if (typeof ayahModal !== 'undefined' && ayahModal && typeof ayahModal.open === 'function') {
        ayahModal.open(ref);
      }
    } catch (_) { /* ignore */ }
  }

  openSeerah() {
    try {
      if (typeof tabSystem !== 'undefined' && tabSystem && typeof tabSystem.switchTab === 'function') {
        tabSystem.switchTab('seerah');
      }
    } catch (_) { /* ignore */ }
  }

  prophetsThemesHtml() {
    if (typeof PROPHETS_THEMES === 'undefined' || !PROPHETS_THEMES || !PROPHETS_THEMES.length) return '';
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">\u{1f9f5} ${this.esc(this.tt('prophets_themes_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_themes_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${PROPHETS_THEMES.map(th => `
            <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-lg" aria-hidden="true">${th.emoji}</span>
                <span class="font-bold text-gray-800 dark:text-gray-100 text-sm">${this.esc(this.lc({en: th.titleEn, bn: th.titleBn}))}</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-2" dir="auto">${this.esc(this.lc({en: th.bodyEn, bn: th.bodyBn}))}</p>
              <div class="flex flex-wrap gap-1.5">
                ${(th.refs || []).map(r => `<button type="button" data-prophets-ayah="${this.esc(this.openRef(r))}"
                  class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[0.7rem] font-medium hover:bg-primary hover:text-white transition-colors" dir="auto">\u{1f4d6} ${this.esc(this.refLabel(r))}</button>`).join('')}
              </div>
              ${(th.prophetIds || []).length ? `<div class="flex flex-wrap gap-1 mt-2">${(th.prophetIds).map(id => `<span class="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[0.6rem] font-medium">${this.esc(this.pname(id))}</span>`).join('')}</div>` : ''}
            </div>`).join('')}
        </div>
      </div>`;
  }

  hadithHtml() {
    if (typeof PROPHETS_HADITH === 'undefined' || !PROPHETS_HADITH || !PROPHETS_HADITH.length) return '';
    return `
      <div class="mt-8">
        <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">\u{1f4dc} ${this.esc(this.tt('prophets_hadith_title'))}</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('prophets_hadith_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${PROPHETS_HADITH.map(h => `
            <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-2">
              <div class="flex items-center justify-between gap-2">
                <span class="font-bold text-gray-800 dark:text-gray-100 text-sm">${this.esc(this.pname(h.pid))}</span>
                <span class="text-[0.65rem] text-gray-400 dark:text-gray-500 whitespace-nowrap" dir="auto">${this.esc(this.lc({en: h.sourceEn, bn: h.sourceBn}))}</span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic" dir="auto">${this.esc(this.lc({en: h.glossEn, bn: h.glossBn}))}</p>
            </div>`).join('')}
        </div>
      </div>`;
  }
}

let prophetsView;
document.addEventListener('DOMContentLoaded', () => { try { prophetsView = new ProphetsView(); } catch (_) { /* ignore */ } });
