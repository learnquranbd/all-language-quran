/**
 * Seerah — Life of the Prophet Muhammad ﷺ.
 * An interactive, chronological timeline of the Prophet's life ﷺ grouped into
 * eras (Before Prophethood, Meccan, Hijra & Medinan, Later Medinan & Farewell).
 * Content is drawn from mainstream Sunni seerah works (Ibn Hisham/Ibn Ishaq,
 * ar-Raheeq al-Makhtum "The Sealed Nectar", Martin Lings). All content is inline
 * with per-item en/bn fields; other UI languages fall back to English.
 *
 * Renders into #seerah-container (tab "seerah"). Marks read state in
 * localStorage under `lq_seerah_read`. Everything is defensive — it never throws.
 */


/* --- Data moved to js/seerah-data.js (split 2025-07). --- */


class SeerahView {
  constructor() {
    this.container = document.getElementById('seerah-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    if (!this.language) this.language = 'en';
    this.rendered = false;
    this.view = 'timeline';
    this.filter = 'all';
    this.query = '';
    this.expanded = new Set();
    this.read = this.loadRead();
    this.quizAnswers = {};
    this.quizSubmitted = false;
    this.quizScore = 0;
    this.quizBest = this.loadQuizBest();
    this.storyPos = this.loadStoryPos();
    this.dataLoaded = false;   // supplemental external content merged in?
    this.dataLoading = false;  // guard against concurrent / duplicate loads

    // Kick off (async, non-blocking) load of supplemental content from
    // data/seerah/. Inline content renders immediately; when the external
    // data arrives the view re-renders (if it has already been shown).
    this.loadSupplementalContent();

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'seerah') this.render(); } catch (_) { /* ignore */ }
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

  // ── supplemental content loader ──────────────────────────────────────
  /**
   * Manifest-driven loader for SUPPLEMENTAL Seerah content. Fully additive and
   * fully defensive: a missing/404/malformed manifest or data file is skipped
   * silently and the module keeps working with inline content only. Never
   * throws; never blocks the UI. Loads once (guarded), then re-renders if the
   * view has already been shown.
   *
   *   data/seerah/manifest.json  → JSON array of data-file names, e.g.
   *     ["wave-01.json", "wave-02.json"]
   *   data/seerah/<name>         → JSON object with any of these optional keys,
   *     each an ARRAY of entries in the SAME shape as the inline arrays:
   *       events, topics, places, companions, ashara, lessons
   *     plus optional `battles`: an OBJECT keyed by event id (shape mirrors
   *     SEERAH_BATTLES), merged in without overwriting existing entries.
   */
  async loadSupplementalContent() {
    if (this.dataLoaded || this.dataLoading) return;
    this.dataLoading = true;
    try {
      const manifest = await this.fetchJson('data/seerah/manifest.json');
      if (Array.isArray(manifest)) {
        for (const fname of manifest) {
          if (typeof fname !== 'string' || !fname) continue;
          const data = await this.fetchJson('data/seerah/' + fname);
          if (data && typeof data === 'object' && !Array.isArray(data)) {
            this.mergeSeerahData(data);
          }
        }
      }
    } catch (_) { /* ignore — inline content stands alone */ }
    this.dataLoading = false;
    this.dataLoaded = true;
    // If the view is already on screen, re-render to reflect merged content.
    try { if (this.rendered) this.render(); } catch (_) { /* ignore */ }
  }

  async fetchJson(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res || !res.ok) return null;
      return await res.json();
    } catch (_) { return null; }
  }

  // Append entries into a target array; dedupe by a stable key. Entries carry an
  // `id` for events/topics; companions/places have none, so fall back to nameEn
  // (or titleEn) — this prevents duplicates both against the inline base and
  // across supplemental files (e.g. Hamzah/Bilal appearing in several slices).
  mergeArray(target, entries) {
    if (!Array.isArray(target) || !Array.isArray(entries)) return;
    const keyOf = (x) => !x ? null
      : (x.id != null ? 'id:' + x.id
      : x.nameEn != null ? 'nm:' + x.nameEn
      : x.titleEn != null ? 'tt:' + x.titleEn : null);
    const seen = new Set();
    for (const x of target) { const k = keyOf(x); if (k) seen.add(k); }
    for (const entry of entries) {
      if (!entry || typeof entry !== 'object') continue;
      const k = keyOf(entry);
      if (k && seen.has(k)) continue;
      if (k) seen.add(k);
      target.push(entry);
    }
  }

  mergeSeerahData(data) {
    try {
      this.mergeArray(SEERAH_EVENTS, data.events);
      this.mergeArray(SEERAH_TOPICS, data.topics);
      this.mergeArray(SEERAH_PLACES, data.places);
      this.mergeArray(SEERAH_COMPANIONS, data.companions);
      this.mergeArray(SEERAH_ASHARA, data.ashara);
      this.mergeArray(SEERAH_LESSONS, data.lessons);
      this.mergeArray(SEERAH_RESOURCES, data.resources);
      if (data.battles && typeof data.battles === 'object' && !Array.isArray(data.battles)) {
        for (const key of Object.keys(data.battles)) {
          const b = data.battles[key];
          // Do not overwrite an existing (inline) battle entry.
          if (key && b && typeof b === 'object' && !(key in SEERAH_BATTLES)) {
            SEERAH_BATTLES[key] = b;
          }
        }
      }
    } catch (_) { /* ignore malformed shard */ }
  }

  // ── helpers ──────────────────────────────────────────────────────────
  tt(key) {
    try { const v = t(key, this.language); if (v && v !== key) return v; } catch (_) { /* ignore */ }
    const e = SEERAH_UI[key];
    if (e) return this.language === 'bn' ? (e.bn || e.en) : e.en;
    return key;
  }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }
  pick(item, field) {
    return this.lc({ en: item[field + 'En'], bn: item[field + 'Bn'] });
  }

  loadRead() {
    try {
      const raw = localStorage.getItem('lq_seerah_read');
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) { return new Set(); }
  }
  saveRead() {
    try { localStorage.setItem('lq_seerah_read', JSON.stringify([...this.read])); } catch (_) { /* ignore */ }
  }

  loadQuizBest() {
    try { const n = parseInt(localStorage.getItem('lq_seerah_quiz_best'), 10); return isNaN(n) ? 0 : n; } catch (_) { return 0; }
  }
  saveQuizBest() {
    try { localStorage.setItem('lq_seerah_quiz_best', String(this.quizBest)); } catch (_) { /* ignore */ }
  }

  loadStoryPos() {
    try {
      const n = parseInt(localStorage.getItem('lq_seerah_story_pos'), 10);
      if (isNaN(n) || n < 0) return 0;
      return Math.min(n, SEERAH_ERAS.length - 1);
    } catch (_) { return 0; }
  }
  saveStoryPos() {
    try { localStorage.setItem('lq_seerah_story_pos', String(this.storyPos)); } catch (_) { /* ignore */ }
  }

  matches(ev) {
    if (this.filter !== 'all' && ev.era !== this.filter) return false;
    const q = this.query.trim().toLowerCase();
    if (!q) return true;
    const hay = [
      this.pick(ev, 'title'), this.pick(ev, 'place'), this.pick(ev, 'desc'),
      ev.titleEn, ev.titleBn, ev.yearCE, ev.yearAH,
    ].join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  // ── rendering ────────────────────────────────────────────────────────
  render() {
    this.rendered = true;
    const total = SEERAH_EVENTS.length;
    const readCount = SEERAH_EVENTS.filter(ev => this.read.has(ev.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;

    const chips = [{ id: 'all', key: 'seerah_filter_all', emoji: '📜' }]
      .concat(SEERAH_ERAS.map(er => ({ id: er.id, key: er.key, emoji: er.emoji })))
      .map(c => {
        const active = this.filter === c.id;
        return `<button type="button" data-seerah-filter="${c.id}"
          class="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border transition-colors
                 ${active
                   ? 'bg-primary text-white border-primary'
                   : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary'}">
          <span aria-hidden="true">${c.emoji}</span> ${this.esc(this.tt(c.key))}</button>`;
      }).join('');

    const vbtn = (id, icon, label) => {
      const active = this.view === id;
      return `<button type="button" data-seerah-view="${id}"
        class="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors
               ${active ? 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}">
        <span aria-hidden="true">${icon}</span>${this.esc(label)}</button>`;
    };
    const toggle = `
      <div class="flex justify-center mb-4">
        <div class="inline-flex gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800">
          ${vbtn('timeline', SEERAH_TIMELINE_ICON, this.tt('seerah_view_timeline'))}
          ${vbtn('story', SEERAH_STORY_ICON, this.tt('seerah_view_story'))}
          ${vbtn('topics', SEERAH_TOPICS_ICON, this.tt('seerah_view_topics'))}
          ${vbtn('quiz', SEERAH_QUIZ_ICON, this.tt('seerah_view_quiz'))}
          ${vbtn('resources', SEERAH_RESOURCES_ICON, this.tt('seerah_view_resources'))}
        </div>
      </div>`;

    const timelineBody = `
      ${this.glanceHtml()}
      ${this.timelineGraphHtml()}
      <div class="mb-3">
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${this.esc(this.tt('seerah_progress'))}</span>
          <span class="text-xs font-semibold text-primary" data-seerah-count>${readCount} / ${total}</span>
        </div>
        <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div data-seerah-bar class="h-full bg-primary transition-all" style="width:${pct}%"></div>
        </div>
      </div>

      <div class="mb-3">
        <input type="search" data-seerah-search value="${this.esc(this.query)}"
          placeholder="${this.esc(this.tt('seerah_search_placeholder'))}"
          class="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
                 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:border-primary" dir="auto" />
      </div>

      <div class="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">${chips}</div>

      <div data-seerah-list></div>

      <div class="text-center mt-6 mb-8">
        <button type="button" data-seerah-reset
          class="text-xs text-gray-400 dark:text-gray-500 hover:text-red-500 underline">
          ${this.esc(this.tt('seerah_reset_progress'))}
        </button>
      </div>`;

    const topicsBody = `
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_topics_intro'))}</p>
      </div>
      <div class="space-y-3 mb-6">
        ${SEERAH_TOPICS.map(tp => this.topicCardHtml(tp)).join('')}
      </div>
      ${this.lessonsHtml()}
      ${this.meccanMedinanHtml()}
      ${this.companionsHtml()}
      ${this.placesHtml()}`;

    const subtitleLine = this.view === 'topics'
      ? this.tt('seerah_topics_title')
      : (this.view === 'quiz' ? this.tt('seerah_quiz_title')
        : (this.view === 'story' ? this.tt('seerah_story_title')
          : (this.view === 'resources' ? this.tt('seerah_resources_title') : this.tt('seerah_intro'))));

    let body = timelineBody;
    if (this.view === 'topics') body = topicsBody;
    else if (this.view === 'quiz') body = this.quizHtml();
    else if (this.view === 'story') body = this.storyHtml();
    else if (this.view === 'resources') body = this.resourcesHtml();

    this.container.innerHTML = `
      <div class="w-full max-w-3xl mx-auto">
        <div class="text-center mb-3">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">🌙 ${this.esc(this.tt('seerah_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">${this.esc(this.tt('seerah_subtitle'))}</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-2" dir="auto">${this.esc(subtitleLine)}</p>
        </div>
        ${toggle}
        ${body}
      </div>`;

    if (this.view === 'timeline') this.renderList();
    this.bind();
  }

  /**
   * Abstract, stylized Hijra route map (geometric only — points, a dashed route
   * curve, a coastline line; no figures). Theme-aware via currentColor; the
   * route itself is green, points labelled. Nothing is to scale.
   */
  hijraMapHtml() {
    const L = {
      mecca: this.lc({ en: 'Mecca', bn: 'মক্কা' }),
      thawr: this.lc({ en: 'Cave of Thawr', bn: 'সাওর গুহা' }),
      quba: this.lc({ en: 'Quba', bn: 'কুবা' }),
      medina: this.lc({ en: 'Medina', bn: 'মদিনা' }),
      sea: this.lc({ en: 'Red Sea', bn: 'লোহিত সাগর' }),
      dist: '~450 km',
    };
    const G = '#16a34a';
    const svg = `
      <svg viewBox="0 0 320 200" width="100%" style="max-width:340px;height:auto;display:block;margin:0 auto" role="img" aria-label="Abstract Hijra route map">
        <rect x="0" y="0" width="320" height="200" rx="8" fill="currentColor" opacity="0.04"/>
        <path d="M28 200 C 20 150, 30 90, 18 40 L 0 30 L 0 200 Z" fill="currentColor" opacity="0.08"/>
        <path d="M28 200 C 20 150, 30 90, 18 40" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.5"/>
        <text x="14" y="120" font-size="8" fill="currentColor" opacity="0.6" transform="rotate(-80 14 120)">${this.esc(L.sea)}</text>
        <circle cx="238" cy="168" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <rect x="234.5" y="164.5" width="7" height="7" fill="currentColor"/>
        <text x="252" y="172" font-size="10" font-weight="600" fill="currentColor">${this.esc(L.mecca)}</text>
        <path d="M252 186 a6 6 0 1 0 6 -8" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <text x="264" y="194" font-size="9" fill="currentColor" opacity="0.85">${this.esc(L.thawr)}</text>
        <circle cx="216" cy="46" r="3.5" fill="${G}"/>
        <text x="224" y="42" font-size="9" fill="currentColor" opacity="0.85">${this.esc(L.quba)}</text>
        <circle cx="232" cy="24" r="6" fill="none" stroke="${G}" stroke-width="1.8"/>
        <circle cx="232" cy="24" r="2.2" fill="${G}"/>
        <text x="244" y="28" font-size="10" font-weight="600" fill="currentColor">${this.esc(L.medina)}</text>
        <path d="M238 174 C 244 184, 252 186, 256 182" fill="none" stroke="${G}" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round"/>
        <path d="M256 182 C 200 178, 120 150, 84 112 C 60 84, 120 60, 216 46 L 230 30"
              fill="none" stroke="${G}" stroke-width="2" stroke-dasharray="5 4" stroke-linecap="round"/>
        <polygon points="232,27 226,36 236,35" fill="${G}"/>
        <text x="104" y="100" font-size="9" font-weight="600" fill="${G}">${this.esc(L.dist)}</text>
      </svg>`;
    return `
      <figure class="mt-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-500 dark:text-gray-400">
        <figcaption class="mb-1 text-xs font-semibold text-gray-600 dark:text-gray-300 text-center" dir="auto">🧭 ${this.esc(this.tt('seerah_route_title'))}</figcaption>
        <div class="w-full overflow-x-auto">${svg}</div>
        <figcaption class="mt-1 text-[0.68rem] text-center text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_route_caption'))}</figcaption>
      </figure>`;
  }

  placesHtml() {
    return `
      <section class="mb-8">
        <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span class="text-primary" aria-hidden="true">${SEERAH_PIN_ICON}</span><span>${this.esc(this.tt('seerah_places_title'))}</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SEERAH_PLACES.map(p => `
            <div class="flex gap-2.5 items-start p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 mt-0.5 text-primary" aria-hidden="true">${SEERAH_PIN_ICON}</span>
              <span class="flex-1 min-w-0">
                <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.pick(p, 'name'))}</span>
                <span class="block text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5" dir="auto">${this.esc(this.pick(p, 'desc'))}</span>
              </span>
            </div>`).join('')}
        </div>
      </section>`;
  }

  companionsHtml() {
    return `
      <section class="mb-8">
        <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span class="text-primary" aria-hidden="true">🤝</span><span>${this.esc(this.tt('seerah_companions_title'))}</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SEERAH_COMPANIONS.map(c => `
            <div class="flex gap-3 items-start p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 w-9 h-9 rounded-full ${c.color} text-white text-xs font-bold flex items-center justify-center" aria-hidden="true">${this.esc(c.init)}</span>
              <span class="flex-1 min-w-0">
                <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.pick(c, 'name'))}</span>
                <span class="block text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5" dir="auto">${this.esc(this.pick(c, 'desc'))}</span>
              </span>
            </div>`).join('')}
        </div>
        ${this.asharaHtml()}
      </section>`;
  }

  /**
   * The Ten Promised Paradise (al-‘Ashara al-Mubashshara, RA) — a compact,
   * labelled sub-list rendered inside the Key Companions section. Numbered chips
   * only (no figurative imagery); content routed through lc().
   */
  asharaHtml() {
    return `
      <div class="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 class="flex items-baseline gap-2 flex-wrap text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">🌟</span>
          <span dir="auto">${this.esc(this.tt('seerah_ashara_title'))}</span>
          <span class="text-[0.7rem] font-medium text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_ashara_sub'))}</span>
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${SEERAH_ASHARA.map((c, i) => `
            <div class="flex gap-2.5 items-start p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-[0.7rem] font-bold flex items-center justify-center" aria-hidden="true">${i + 1}</span>
              <span class="flex-1 min-w-0">
                <span class="block font-semibold text-[0.8rem] text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.pick(c, 'name'))}</span>
                <span class="block text-[0.72rem] text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5" dir="auto">${this.esc(this.pick(c, 'desc'))}</span>
              </span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  /**
   * Lessons from the Seerah — thematic lessons distilled from the timeline. Each
   * links to its source event (scrolls/filters not needed; shown as a label) and,
   * where clean, a tappable verse pill (reusing the shared data-seerah-ayah click).
   */
  lessonsHtml() {
    const eventTitle = (id) => {
      const ev = SEERAH_EVENTS.find(e => e.id === id);
      return ev ? this.pick(ev, 'title') : '';
    };
    return `
      <section class="mb-8">
        <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-1">
          <span class="text-primary" aria-hidden="true">💡</span><span>${this.esc(this.tt('seerah_lessons_title'))}</span>
        </h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('seerah_lessons_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SEERAH_LESSONS.map(ls => {
            const evTitle = eventTitle(ls.event);
            const evPill = evTitle
              ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[0.68rem]" dir="auto">📍 ${this.esc(evTitle)}</span>`
              : '';
            const ayahPill = ls.ayah
              ? `<button type="button" data-seerah-ayah="${this.esc(ls.ayah)}"
                   class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[0.68rem] font-medium hover:bg-primary hover:text-white transition-colors">📖 ${this.esc(ls.ayah)}</button>`
              : '';
            return `
              <div class="flex flex-col gap-2 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div class="flex gap-2.5 items-start">
                  <span class="shrink-0 text-lg leading-none mt-0.5" aria-hidden="true">${this.esc(ls.emoji)}</span>
                  <span class="flex-1 text-sm text-gray-700 dark:text-gray-200 leading-relaxed" dir="auto">${this.esc(this.lc({ en: ls.textEn, bn: ls.textBn }))}</span>
                </div>
                <div class="flex flex-wrap gap-1.5 pl-8">${evPill}${ayahPill}</div>
              </div>`;
          }).join('')}
        </div>
      </section>`;
  }

  /**
   * Meccan vs Medinan mini-reference — a two-column card contrasting the two
   * phases of revelation, each with a short description and example-surah pills
   * (tappable, reusing the shared data-seerah-ayah click). Introductory only.
   */
  meccanMedinanHtml() {
    const col = (labelKey, data) => `
      <div class="flex-1 min-w-0 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-1.5">
          <span aria-hidden="true">${this.esc(data.emoji)}</span><span dir="auto">${this.esc(this.tt(labelKey))}</span>
        </h4>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc({ en: data.descEn, bn: data.descBn }))}</p>
        <div class="mt-2">
          <span class="text-[0.68rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_mm_examples'))}</span>
          <div class="flex flex-wrap gap-1.5 mt-1">
            ${(data.examples || []).map(x => `<button type="button" data-seerah-ayah="${this.esc(x.ref)}"
              class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors" dir="auto">📖 ${this.esc(this.pick(x, 'name'))}</button>`).join('')}
          </div>
        </div>
      </div>`;
    return `
      <section class="mb-8">
        <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-1">
          <span class="text-primary" aria-hidden="true">📖</span><span>${this.esc(this.tt('seerah_mm_title'))}</span>
        </h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 mb-3" dir="auto">${this.esc(this.tt('seerah_mm_intro'))}</p>
        <div class="flex flex-col sm:flex-row gap-2.5">
          ${col('seerah_mm_meccan', SEERAH_MECCAN_MEDINAN.meccan)}
          ${col('seerah_mm_medinan', SEERAH_MECCAN_MEDINAN.medinan)}
        </div>
      </section>`;
  }

  /**
   * Resources view — a curated gallery of books, websites, video series and
   * podcasts for deeper seerah study. Each item is a card with type badge,
   * title, author, description, and a link (where applicable).
   */
  resourcesHtml() {
    const typeMap = {
      book:    { label: this.tt('seerah_resources_book'),    cls: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300' },
      web:     { label: this.tt('seerah_resources_web'),     cls: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300' },
      video:   { label: this.tt('seerah_resources_video'),   cls: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300' },
      podcast: { label: this.tt('seerah_resources_podcast'), cls: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300' },
    };
    return `
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_resources_intro'))}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        ${SEERAH_RESOURCES.map(r => {
          const meta = typeMap[r.type] || typeMap.book;
          const authorLine = r.authorEn || r.authorBn
            ? `<span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_resources_by'))} ${this.esc(this.lc({ en: r.authorEn, bn: r.authorBn }))}</span>`
            : '';
          return `
            <div class="flex flex-col gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div class="flex items-start gap-3">
                <span class="shrink-0 text-2xl leading-none mt-0.5" aria-hidden="true">${r.emoji}</span>
                <div class="flex-1 min-w-0">
                  <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100 leading-snug" dir="auto">${this.esc(this.lc({ en: r.nameEn, bn: r.nameBn }))}</span>
                  ${authorLine}
                </div>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc({ en: r.descEn, bn: r.descBn }))}</p>
              <span class="inline-flex self-start px-2 py-0.5 rounded-full text-[0.65rem] font-semibold ${meta.cls}">${this.esc(meta.label)}</span>
            </div>`;
        }).join('')}
      </div>`;
  }

  /**
   * "Seerah at a glance" — a compact bilingual stat strip derived from existing
   * data. Prophethood ≈ 23 years (Meccan 13 + Medinan 10); the battle count is
   * read from SEERAH_BATTLES so it stays in sync with the data.
   */
  timelineGraphHtml() {
    const t = (k) => this.tt(k);
    const milestones = [
      { year: -1, key: 'seerah_tg_milestone_birth', era: 'before', emoji: '👶' },
      { year: 0, key: 'seerah_tg_milestone_revelation', era: 'meccan', emoji: '📜' },
      { year: 5, key: 'seerah_tg_milestone_dawah', era: 'meccan', emoji: '📢' },
      { year: 7, key: 'seerah_tg_milestone_abyssinia', era: 'meccan', emoji: '🌊' },
      { year: 10, key: 'seerah_tg_milestone_isra', era: 'meccan', emoji: '🌙' },
      { year: 13, key: 'seerah_tg_milestone_hijra', era: 'medinan', emoji: '🚶' },
      { year: 14, key: 'seerah_tg_milestone_badr', era: 'medinan', emoji: '⚔️' },
      { year: 15, key: 'seerah_tg_milestone_uhud', era: 'medinan', emoji: '🛡️' },
      { year: 17, key: 'seerah_tg_milestone_trench', era: 'medinan', emoji: '🏰' },
      { year: 18, key: 'seerah_tg_milestone_hudaybiyyah', era: 'medinan', emoji: '🤝' },
      { year: 20, key: 'seerah_tg_milestone_conquest', era: 'medinan', emoji: '🏛️' },
      { year: 23, key: 'seerah_tg_milestone_farewell', era: 'farewell', emoji: '🤲' },
    ];
    const totalYears = 23;
    const eraColors = { before: '#f59e0b', meccan: '#e11d48', medinan: '#10b981', farewell: '#6366f1' };
    const eraKeys = { before: 'seerah_tg_era_before', meccan: 'seerah_tg_era_meccan', medinan: 'seerah_tg_era_medinan', farewell: 'seerah_tg_era_farewell' };

    return `
      <section class="mb-6" aria-label="Timeline graph">
        <h4 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">${this.esc(t('seerah_glance_title'))}</h4>
        <div class="relative px-0.5">
          <div class="relative h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="absolute inset-0 flex">
              <div class="h-full" style="flex:1;background:#f59e0b"></div>
              <div class="h-full" style="flex:13;background:#e11d48"></div>
              <div class="h-full" style="flex:10;background:#10b981"></div>
            </div>
          </div>
          <div class="flex text-[0.55rem] text-gray-400 dark:text-gray-500 mt-0.5">
            <span style="flex:1">0</span>
            <span style="flex:13;text-align:center">13</span>
            <span style="flex:10;text-align:right">23 ${this.esc(t('seerah_glance_years'))}</span>
          </div>
          <div class="flex flex-wrap gap-x-2 gap-y-1 mt-3">
            ${['before','meccan','medinan'].map(k => `
              <span class="flex items-center gap-1 text-[0.6rem] text-gray-500 dark:text-gray-400">
                <span class="inline-block w-2 h-2 rounded-full" style="background:${eraColors[k]}"></span>
                ${this.esc(t(eraKeys[k]))}
              </span>`).join('')}
          </div>
        </div>
        <div class="mt-4 space-y-1.5">
          ${milestones.map(m => {
            const pct = (m.year / totalYears) * 100;
            const ec = eraColors[m.era] || '#6366f1';
            return `
            <div class="flex items-center gap-2 text-xs">
              <span class="shrink-0 w-5 text-center leading-none" aria-hidden="true">${m.emoji}</span>
              <span class="shrink-0 w-6 text-right font-mono text-[0.6rem] text-gray-400 dark:text-gray-500">${m.year < 0 ? '~' + Math.abs(m.year) : m.year}</span>
              <div class="flex-1 relative h-4">
                <div class="absolute inset-y-0 left-0 rounded-full" style="width:${Math.max(2, pct)}%;background:${ec}20;border:1px solid ${ec}40"></div>
                <span class="absolute inset-y-0 left-0 flex items-center pl-1 text-[0.6rem] font-medium text-gray-700 dark:text-gray-200 truncate" style="max-width:${Math.min(100, pct + 10)}%">${this.esc(t(m.key))}</span>
              </div>
            </div>`;
          }).join('')}
        </div>
      </section>`;
  }

  glanceHtml() {
    const battleCount = Object.keys(SEERAH_BATTLES).length;
    const yr = this.esc(this.tt('seerah_glance_years'));
    const tiles = [
      { emoji: '📜', value: `~23 <span class="text-[0.6rem] font-normal opacity-70">${yr}</span>`, label: this.tt('seerah_glance_prophethood'), text: 'text-primary' },
      { emoji: '🕋', value: `13 <span class="text-[0.6rem] font-normal opacity-70">${yr}</span>`, label: this.tt('seerah_glance_meccan'), text: 'text-rose-500' },
      { emoji: '🌿', value: `10 <span class="text-[0.6rem] font-normal opacity-70">${yr}</span>`, label: this.tt('seerah_glance_medinan'), text: 'text-emerald-500' },
      { emoji: '🛡️', value: String(battleCount), label: this.tt('seerah_glance_battles'), text: 'text-indigo-500' },
    ];
    return `
      <section class="mb-4" aria-label="${this.esc(this.tt('seerah_glance_title'))}">
        <h3 class="sr-only">${this.esc(this.tt('seerah_glance_title'))}</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
          ${tiles.map(s => `
            <div class="flex flex-col items-center text-center gap-0.5 p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="text-lg leading-none" aria-hidden="true">${s.emoji}</span>
              <span class="text-base font-bold ${s.text}">${s.value}</span>
              <span class="text-[0.65rem] leading-tight text-gray-500 dark:text-gray-400" dir="auto">${this.esc(s.label)}</span>
            </div>`).join('')}
        </div>
      </section>`;
  }

  /**
   * Story mode — a continuous read of every timeline event, one era at a time,
   * reusing each event's existing title/description text (no new prose). Prev/next
   * move between eras; the current era index is saved to localStorage so the
   * reader can resume where they left off.
   */
  storyHtml() {
    const eras = SEERAH_ERAS;
    if (this.storyPos >= eras.length) this.storyPos = eras.length - 1;
    if (this.storyPos < 0) this.storyPos = 0;
    const era = eras[this.storyPos];
    const em = ERA_META[era.id] || {};
    const events = SEERAH_EVENTS.filter(ev => ev.era === era.id);
    const pct = eras.length ? Math.round(((this.storyPos + 1) / eras.length) * 100) : 0;

    const passages = events.map(ev => {
      const year = [ev.yearCE, ev.yearAH].filter(Boolean).join(' · ');
      return `
        <div class="mb-5">
          <h4 class="flex items-baseline gap-2 flex-wrap font-semibold text-gray-800 dark:text-gray-100 leading-snug" dir="auto">
            <span>${this.esc(this.pick(ev, 'title'))}</span>
            <span class="text-[0.7rem] font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap">${this.esc(year)}</span>
          </h4>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.pick(ev, 'desc'))}</p>
        </div>`;
    }).join('');

    const atStart = this.storyPos <= 0;
    const atEnd = this.storyPos >= eras.length - 1;
    const navBtn = (dir, label, disabled) =>
      `<button type="button" data-seerah-story-nav="${dir}" ${disabled ? 'disabled' : ''}
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors ${disabled
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
          : 'bg-primary text-white hover:opacity-90'}">${this.esc(label)}</button>`;

    return `
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_story_intro'))}</p>
      </div>
      <div class="mb-3">
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${this.esc(this.tt('seerah_story_progress'))}</span>
          <span class="text-xs font-semibold text-primary">${this.storyPos + 1} / ${eras.length}</span>
        </div>
        <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div class="h-full bg-primary transition-all" style="width:${pct}%"></div>
        </div>
      </div>
      <article class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-4 sm:p-5">
        <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-4">
          <span class="${em.text || ''}" aria-hidden="true">${em.icon || '<span>' + this.esc(era.emoji) + '</span>'}</span>
          <span dir="auto">${this.esc(this.tt(era.key))}</span>
        </h3>
        ${passages}
        ${atEnd ? `<p class="mt-2 text-xs italic text-gray-400 dark:text-gray-500" dir="auto">🤲 ${this.esc(this.tt('seerah_story_finish'))}</p>` : ''}
      </article>
      <div class="flex items-center justify-between gap-2 mt-4 mb-8">
        ${navBtn('prev', '‹ ' + this.tt('seerah_story_prev'), atStart)}
        ${navBtn('next', this.tt('seerah_story_next') + ' ›', atEnd)}
      </div>`;
  }

  quizHtml() {
    const submitted = this.quizSubmitted;
    const total = SEERAH_QUIZ.length;
    let score = 0;
    const answeredAll = SEERAH_QUIZ.every((_, qi) => this.quizAnswers[qi] != null);

    const questions = SEERAH_QUIZ.map((q, qi) => {
      const sel = this.quizAnswers[qi];
      const opts = (q.optsEn || q.optsBn || []).map((_, oi2) => this.lc({ en: (q.optsEn || [])[oi2], bn: (q.optsBn || [])[oi2] }));
      if (submitted && sel === q.correct) score++;
      const optHtml = opts.map((o, oi) => {
        const chosen = sel === oi;
        let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary';
        let mark = '';
        if (submitted) {
          if (oi === q.correct) { cls = 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700 text-green-700 dark:text-green-300'; mark = ' ✓'; }
          else if (chosen) { cls = 'bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-700 text-red-700 dark:text-red-300'; mark = ' ✗'; }
          else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'; }
        } else if (chosen) {
          cls = 'bg-primary/10 border-primary text-primary';
        }
        return `<button type="button" ${submitted ? 'disabled' : ''} data-seerah-quiz-opt="${qi}:${oi}"
          class="w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${cls}" dir="auto">${this.esc(o)}${mark}</button>`;
      }).join('');
      return `
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <p class="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2" dir="auto">${qi + 1}. ${this.esc(this.lc({ en: q.qEn, bn: q.qBn }))}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${optHtml}</div>
        </div>`;
    }).join('');

    const footer = submitted
      ? `<div class="text-center mt-4 mb-8">
           <div class="inline-flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-primary/10">
             <span class="text-sm text-gray-500 dark:text-gray-400">${this.esc(this.tt('seerah_quiz_score'))}</span>
             <span class="text-3xl font-bold text-primary">${score} / ${total}</span>
             <span class="text-xs text-gray-500 dark:text-gray-400">${this.esc(this.tt('seerah_quiz_best'))}: ${Math.max(this.quizBest, score)} / ${total}</span>
           </div>
           <div class="mt-3">
             <button type="button" data-seerah-quiz-reset
               class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90">${this.esc(this.tt('seerah_quiz_retake'))}</button>
           </div>
         </div>`
      : `<div class="text-center mt-4 mb-8">
           <button type="button" data-seerah-quiz-submit ${answeredAll ? '' : 'disabled'}
             class="px-5 py-2 rounded-lg text-sm font-medium transition-colors ${answeredAll ? 'bg-primary text-white hover:opacity-90' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'}">${this.esc(this.tt('seerah_quiz_submit'))}</button>
           ${answeredAll ? '' : `<p class="text-xs text-gray-400 dark:text-gray-500 mt-2">${this.esc(this.tt('seerah_quiz_hint'))}</p>`}
         </div>`;

    return `
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('seerah_quiz_intro'))}
          <span class="ml-1">· ${this.esc(this.tt('seerah_quiz_best'))}: ${this.quizBest} / ${total}</span></p>
      </div>
      <div class="space-y-3">${questions}</div>
      ${footer}`;
  }

  submitQuiz() {
    let score = 0;
    SEERAH_QUIZ.forEach((q, qi) => { if (this.quizAnswers[qi] === q.correct) score++; });
    this.quizScore = score;
    if (score > this.quizBest) { this.quizBest = score; this.saveQuizBest(); }
    this.quizSubmitted = true;
    this.render();
  }

  topicCardHtml(tp) {
    const isOpen = this.expanded.has(tp.id);
    const points = (tp.pointsEn || tp.pointsBn || []).map((_, pi) => this.lc({ en: (tp.pointsEn || [])[pi], bn: (tp.pointsBn || [])[pi] }));
    const verses = Array.isArray(tp.verses) ? tp.verses : [];
    const pointsHtml = points.length
      ? `<ul class="mt-2 space-y-1 list-none">
           ${points.map(p => `<li class="flex gap-2 text-sm text-gray-700 dark:text-gray-200" dir="auto"><span class="text-primary mt-0.5" aria-hidden="true">▸</span><span class="flex-1">${this.esc(p)}</span></li>`).join('')}
         </ul>`
      : '';
    const versesHtml = verses.length
      ? `<div class="pt-3"><span class="text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_bt_verses'))}</span>
           <div class="flex flex-wrap gap-1.5 mt-1">
             ${verses.map(v => `<button type="button" data-seerah-ayah="${this.esc(v)}"
               class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors">
               📖 ${this.esc(v)}</button>`).join('')}
           </div>
         </div>`
      : '';
    return `
      <article class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
        <button type="button" data-seerah-toggle="${this.esc(tp.id)}"
          class="w-full text-left p-4 flex items-center gap-3">
          <span class="text-2xl" aria-hidden="true">${this.esc(tp.emoji)}</span>
          <span class="flex-1 font-semibold text-gray-800 dark:text-gray-100 leading-snug" dir="auto">${this.esc(this.pick(tp, 'title'))}</span>
          <span class="text-gray-300 dark:text-gray-500 text-sm" data-seerah-caret="${this.esc(tp.id)}">${isOpen ? '▲' : '▼'}</span>
        </button>
        <div data-seerah-detail="${this.esc(tp.id)}" class="${isOpen ? '' : 'hidden'} px-4 pb-4 -mt-1">
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.pick(tp, 'summary'))}</p>
          ${pointsHtml ? `<div class="mt-2"><span class="text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_key_points'))}</span>${pointsHtml}</div>` : ''}
          ${versesHtml}
        </div>
      </article>`;
  }

  renderList() {
    const listEl = this.container.querySelector('[data-seerah-list]');
    if (!listEl) return;
    const eras = this.filter === 'all' ? SEERAH_ERAS : SEERAH_ERAS.filter(e => e.id === this.filter);
    let html = '';
    let shown = 0;

    eras.forEach(era => {
      const events = SEERAH_EVENTS.filter(ev => ev.era === era.id && this.matches(ev));
      if (!events.length) return;
      shown += events.length;
      const em = ERA_META[era.id] || {};
      html += `
        <section class="mb-6">
          <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-3
                     sticky top-0 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur py-1 z-10">
            <span class="${em.text || ''}" aria-hidden="true">${em.icon || '<span>' + this.esc(era.emoji) + '</span>'}</span><span>${this.esc(this.tt(era.key))}</span>
          </h3>
          <div class="relative pl-5 border-l-2 border-gray-200 dark:border-gray-700 space-y-3">
            ${events.map(ev => this.cardHtml(ev)).join('')}
          </div>
        </section>`;
    });

    if (!shown) {
      html = `<p class="text-center text-gray-400 dark:text-gray-500 text-sm py-10">${this.esc(this.tt('seerah_no_results'))}</p>`;
    }
    listEl.innerHTML = html;
  }

  cardHtml(ev) {
    const isRead = this.read.has(ev.id);
    const isOpen = this.expanded.has(ev.id);
    const year = [ev.yearCE, ev.yearAH].filter(Boolean).join(' · ');
    const em = ERA_META[ev.era] || {};
    const battle = SEERAH_BATTLES[ev.id] || null;
    const ayahBtn = (ev.ayah && !battle)
      ? `<button type="button" data-seerah-ayah="${this.esc(ev.ayah)}"
           class="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
           📖 ${this.esc(this.tt('seerah_open_ayah'))} (${this.esc(ev.ayah)})</button>`
      : '';
    const battleBadge = battle
      ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/10 text-red-500 text-[0.7rem] font-semibold whitespace-nowrap">${SEERAH_BATTLE_ICON}${this.esc(this.tt('seerah_bt_label'))}</span>`
      : '';
    return `
      <article data-seerah-card="${this.esc(ev.id)}"
        class="relative rounded-xl bg-white dark:bg-gray-800 border ${isRead ? 'border-green-300 dark:border-green-800' : 'border-gray-200 dark:border-gray-700'} shadow-sm">
        <span class="absolute -left-[1.65rem] top-4 w-3 h-3 rounded-full ${isRead ? 'bg-green-500' : (em.dot || 'bg-primary')} ring-4 ring-gray-50 dark:ring-gray-900" aria-hidden="true"></span>
        <button type="button" data-seerah-toggle="${this.esc(ev.id)}"
          class="w-full text-left p-4 flex flex-col gap-1.5">
          <span class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[0.7rem] font-semibold whitespace-nowrap">${this.esc(year)}</span>
            <span class="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-[0.7rem] whitespace-nowrap">📍 ${this.esc(this.pick(ev, 'place'))}</span>
            ${battleBadge}
            ${isRead ? '<span class="text-green-500 text-xs">✓</span>' : ''}
          </span>
          <span class="flex items-start gap-2">
            <span class="flex-1 font-semibold text-gray-800 dark:text-gray-100 leading-snug" dir="auto">${this.esc(this.pick(ev, 'title'))}</span>
            <span class="text-gray-300 dark:text-gray-500 text-sm mt-0.5" data-seerah-caret="${this.esc(ev.id)}">${isOpen ? '▲' : '▼'}</span>
          </span>
        </button>
        <div data-seerah-detail="${this.esc(ev.id)}" class="${isOpen ? '' : 'hidden'} px-4 pb-4 -mt-1">
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.pick(ev, 'desc'))}</p>
          <div class="mt-2 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/40">
            <p class="text-xs text-amber-800 dark:text-amber-200 leading-relaxed" dir="auto">
              <span class="font-semibold">💡 ${this.esc(this.tt('seerah_significance'))}:</span> ${this.esc(this.pick(ev, 'lesson'))}
            </p>
          </div>
          ${ayahBtn}
          ${ev.id === 'hijra' ? this.hijraMapHtml() : ''}
          ${battle ? this.battleHtml(ev, battle) : ''}
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" data-seerah-read="${this.esc(ev.id)}"
              class="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors
                     ${isRead
                       ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                       : 'bg-primary text-white hover:opacity-90'}">
              ${isRead ? '✓ ' + this.esc(this.tt('seerah_marked_read')) : this.esc(this.tt('seerah_mark_read'))}
            </button>
            <button type="button" data-seerah-share="${this.esc(ev.id)}"
              class="text-xs px-3 py-1.5 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary border border-transparent transition-colors">
              🔗 ${this.esc(this.tt('seerah_share'))}
            </button>
            <button type="button" data-seerah-copy="${this.esc(ev.id)}"
              class="text-xs px-3 py-1.5 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary border border-transparent transition-colors">
              📋 ${this.esc(this.tt('seerah_copy'))}
            </button>
          </div>
        </div>
      </article>`;
  }

  // Build a short shareable text from an event's existing title/desc/year.
  buildShareText(ev) {
    if (!ev) return '';
    const year = [ev.yearCE, ev.yearAH].filter(Boolean).join(' · ');
    const title = this.pick(ev, 'title');
    const desc = this.pick(ev, 'desc');
    return [title + (year ? ` (${year})` : ''), desc].filter(Boolean).join('\n\n');
  }

  shareEvent(id) {
    const ev = SEERAH_EVENTS.find(x => x.id === id);
    if (!ev) return;
    const text = this.buildShareText(ev);
    const title = this.pick(ev, 'title');
    try {
      if (navigator && typeof navigator.share === 'function') {
        navigator.share({ title: title, text: text }).catch(() => {});
        return;
      }
    } catch (_) { /* fall through to clipboard */ }
    this.copyEvent(id);
  }

  copyEvent(id) {
    const ev = SEERAH_EVENTS.find(x => x.id === id);
    if (!ev) return;
    const text = this.buildShareText(ev);
    const done = () => this.flashCopied(id);
    try {
      if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(done).catch(() => this.legacyCopy(text, done));
        return;
      }
    } catch (_) { /* fall through */ }
    this.legacyCopy(text, done);
  }

  legacyCopy(text, done) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (typeof done === 'function') done();
    } catch (_) { /* ignore */ }
  }

  // Briefly show "Copied!" on the copy button for this event.
  flashCopied(id) {
    try {
      const btn = this.container.querySelector(`[data-seerah-copy="${CSS && CSS.escape ? CSS.escape(id) : id}"]`);
      if (!btn) return;
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ ' + this.esc(this.tt('seerah_copied'));
      setTimeout(() => { try { btn.innerHTML = orig; } catch (_) { /* ignore */ } }, 1500);
    } catch (_) { /* ignore */ }
  }

  // ── battlefield block ────────────────────────────────────────────────
  bpick(b, field) {
    return this.lc({ en: b[field + 'En'], bn: b[field + 'Bn'] });
  }

  battleHtml(ev, b) {
    if (!b) return '';
    const row = (label, value) => value
      ? `<div class="flex flex-col sm:flex-row sm:gap-2 py-1.5 border-b border-gray-100 dark:border-gray-700/60 last:border-0">
           <span class="w-32 shrink-0 text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(label)}</span>
           <span class="flex-1 text-sm text-gray-700 dark:text-gray-200" dir="auto">${value}</span>
         </div>`
      : '';

    const forces = `
      <span class="inline-flex items-center gap-1">
        <span class="w-2.5 h-2.5 rounded-sm bg-green-600 inline-block" aria-hidden="true"></span>
        ${this.esc(this.tt('seerah_bt_muslims'))}: <strong>${this.esc(b.muslims || '—')}</strong>
      </span>
      <span class="mx-1 text-gray-400">·</span>
      <span class="inline-flex items-center gap-1">
        <span class="w-2.5 h-2.5 rounded-sm bg-red-600 inline-block" aria-hidden="true"></span>
        ${this.esc(this.bpick(b, 'opp'))}: <strong>${this.esc(b.opp || '—')}</strong>
      </span>`;

    const cmd = `
      <div><span class="text-green-600 dark:text-green-400 font-medium">${this.esc(this.tt('seerah_bt_muslims'))}:</span> ${this.esc(this.bpick(b, 'cmdM'))}</div>
      <div class="mt-0.5"><span class="text-red-600 dark:text-red-400 font-medium">${this.esc(this.tt('seerah_bt_opponent'))}:</span> ${this.esc(this.bpick(b, 'cmdO'))}</div>`;

    const moments = (b.momEn || b.momBn || []).map((_, mi) => this.lc({ en: (b.momEn || [])[mi], bn: (b.momBn || [])[mi] }));
    const momentsHtml = moments.length
      ? `<ul class="mt-1 space-y-1 list-none">
           ${moments.map(m => `<li class="flex gap-2 text-sm text-gray-700 dark:text-gray-200" dir="auto"><span class="text-primary mt-0.5" aria-hidden="true">▸</span><span class="flex-1">${this.esc(m)}</span></li>`).join('')}
         </ul>`
      : '';

    const verses = Array.isArray(b.verses) ? b.verses : [];
    const versesHtml = verses.length
      ? `<div class="flex flex-wrap gap-1.5 mt-1">
           ${verses.map(v => `<button type="button" data-seerah-ayah="${this.esc(v)}"
             class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors">
             📖 ${this.esc(v)}</button>`).join('')}
         </div>`
      : '';

    const diagram = this.battleDiagram(b.diagram);
    const caption = b.diagram ? this.bpick(b.diagram, 'caption') : '';

    return `
      <div class="mt-3 rounded-xl border border-red-100 dark:border-red-900/40 bg-red-50/40 dark:bg-red-900/10 overflow-hidden">
        <div class="flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-600 dark:text-red-400 font-semibold text-sm">
          <span aria-hidden="true">${SEERAH_BATTLE_ICON}</span>${this.esc(this.tt('seerah_bt_label'))}
        </div>
        <div class="p-3">
          ${row(this.tt('seerah_bt_location'), this.esc(this.bpick(b, 'geo')))}
          ${row(this.tt('seerah_bt_forces'), forces)}
          ${row(this.tt('seerah_bt_commanders'), cmd)}
          ${row(this.tt('seerah_bt_outcome'), this.esc(this.bpick(b, 'out')))}
          ${row(this.tt('seerah_bt_casualties'), this.bpick(b, 'cas') ? this.esc(this.bpick(b, 'cas')) : '')}
          ${momentsHtml ? `<div class="pt-2"><span class="text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_bt_moments'))}</span>${momentsHtml}</div>` : ''}
          ${diagram ? `<figure class="mt-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-gray-500 dark:text-gray-400">
              <div class="w-full overflow-x-auto">${diagram}</div>
              <figcaption class="mt-1 text-[0.68rem] text-center text-gray-400 dark:text-gray-500" dir="auto">${this.esc(caption)}</figcaption>
            </figure>` : ''}
          ${versesHtml ? `<div class="pt-3"><span class="text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('seerah_bt_verses'))}</span>${versesHtml}</div>` : ''}
        </div>
      </div>`;
  }

  /**
   * ABSTRACT battle diagram — troop blocks, movement arrows and terrain lines
   * only. No human/animal figures. Muslim side = green, opponent = red, terrain
   * = currentColor (theme-aware). viewBox is fixed; nothing is to scale.
   */
  battleDiagram(d) {
    if (!d) return '';
    const G = '#16a34a', R = '#dc2626';
    const L = this.esc(this.lc({ en: d.leftEn, bn: d.leftBn }));
    const Rt = this.esc(this.lc({ en: d.rightEn, bn: d.rightBn }));
    const feat = this.esc(this.lc({ en: d.featureEn, bn: d.featureBn }));

    const arrow = (x1, y1, x2, y2, c, dash) => {
      const ang = Math.atan2(y2 - y1, x2 - x1), h = 7;
      const ax = (x2 - h * Math.cos(ang - 0.42)).toFixed(1), ay = (y2 - h * Math.sin(ang - 0.42)).toFixed(1);
      const bx = (x2 - h * Math.cos(ang + 0.42)).toFixed(1), by = (y2 - h * Math.sin(ang + 0.42)).toFixed(1);
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="2" stroke-linecap="round"${dash ? ' stroke-dasharray="4 3"' : ''}/>` +
             `<polygon points="${x2},${y2} ${ax},${ay} ${bx},${by}" fill="${c}"/>`;
    };
    const block = (x, y, w, h, c, label) =>
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" opacity="0.9"/>` +
      `<text x="${x + w / 2}" y="${y + h / 2 + 3}" text-anchor="middle" font-size="9" fill="#fff" font-weight="600">${label}</text>`;
    const label = (x, y, txt, anchor) =>
      `<text x="${x}" y="${y}" text-anchor="${anchor || 'middle'}" font-size="9" fill="currentColor" opacity="0.85">${txt}</text>`;

    let body = '';
    switch (d.terrain) {
      case 'wells':
        body =
          block(16, 66, 66, 30, G, L) + block(238, 66, 66, 30, R, Rt) +
          '<circle cx="150" cy="66" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
          '<circle cx="166" cy="86" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
          '<circle cx="146" cy="98" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
          label(158, 120, feat) +
          arrow(86, 81, 138, 81, G) + arrow(234, 81, 182, 81, R);
        break;
      case 'hill':
        body =
          '<path d="M96 128 L150 52 L204 128 Z" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>' +
          block(18, 52, 60, 26, G, L) +
          block(122, 92, 56, 18, G, feat) +
          block(242, 52, 60, 26, R, Rt) +
          arrow(240, 65, 82, 65, R) +
          arrow(252, 122, 112, 134, R);
        break;
      case 'trench':
        body =
          '<polyline points="162,20 150,40 170,60 150,80 170,100 150,120 162,148" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>' +
          label(160, 14, feat) +
          block(26, 74, 62, 28, G, L) + block(232, 74, 66, 28, R, Rt) +
          arrow(228, 88, 182, 88, R) + arrow(228, 110, 182, 110, R);
        break;
      case 'fortress': {
        const fort = (x, y) =>
          `<rect x="${x}" y="${y + 6}" width="30" height="24" rx="1" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.3"/>` +
          `<rect x="${x}" y="${y}" width="7" height="8" fill="currentColor" opacity="0.4"/>` +
          `<rect x="${x + 11}" y="${y}" width="7" height="8" fill="currentColor" opacity="0.4"/>` +
          `<rect x="${x + 22}" y="${y}" width="8" height="8" fill="currentColor" opacity="0.4"/>`;
        body =
          block(18, 76, 60, 28, G, L) +
          fort(214, 44) + fort(250, 82) + fort(210, 116) +
          label(250, 30, feat) +
          arrow(80, 84, 208, 60, G) + arrow(80, 92, 244, 96, G) + arrow(80, 100, 204, 128, G);
        break;
      }
      case 'city':
        body =
          '<rect x="126" y="56" width="66" height="60" rx="3" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>' +
          '<rect x="149" y="76" width="20" height="20" fill="currentColor" opacity="0.85"/>' +
          '<rect x="149" y="82" width="20" height="3" fill="#e5c07b"/>' +
          label(159, 128, feat) + label(159, 50, Rt) +
          arrow(159, 16, 159, 52, G) + arrow(159, 156, 159, 120, G) +
          arrow(18, 86, 122, 86, G) + arrow(300, 86, 196, 86, G) +
          label(14, 30, L, 'start');
        break;
      case 'valley':
        body =
          '<path d="M0 58 L52 20 L96 58 Z" fill="currentColor" opacity="0.09" stroke="currentColor" stroke-width="1"/>' +
          '<path d="M224 58 L276 20 L320 58 Z" fill="currentColor" opacity="0.09" stroke="currentColor" stroke-width="1"/>' +
          block(20, 92, 58, 26, G, L) +
          label(52, 74, Rt) + label(268, 74, Rt) +
          arrow(80, 105, 150, 105, G) +
          arrow(54, 58, 120, 96, R) + arrow(272, 58, 182, 96, R) +
          label(150, 140, feat);
        break;
      case 'expedition':
        body =
          block(128, 122, 64, 26, G, L) +
          '<circle cx="160" cy="34" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/>' +
          label(160, 20, feat) +
          arrow(160, 120, 160, 44, G) +
          '<rect x="214" y="24" width="82" height="24" rx="4" fill="none" stroke="' + R + '" stroke-width="1.4" stroke-dasharray="4 3"/>' +
          `<text x="255" y="39" text-anchor="middle" font-size="8" fill="${R}">${Rt}</text>`;
        break;
      default:
        body = block(20, 70, 70, 30, G, L) + block(230, 70, 70, 30, R, Rt) +
          arrow(92, 85, 150, 85, G) + arrow(228, 85, 170, 85, R);
    }

    return `<svg viewBox="0 0 320 170" width="100%" style="max-width:340px;height:auto;display:block;margin:0 auto" role="img" aria-label="Abstract battle diagram">
      <rect x="0" y="0" width="320" height="170" rx="8" fill="currentColor" opacity="0.04"/>
      ${body}
    </svg>`;
  }

  // ── events ───────────────────────────────────────────────────────────
  bind() {
    if (this._bound) return;
    this._bound = true;

    this.container.addEventListener('click', (e) => {
      try {
        const t2 = e.target.closest ? e.target : e.target.parentElement;
        if (!t2) return;

        const viewBtn = e.target.closest('[data-seerah-view]');
        if (viewBtn) { this.view = viewBtn.getAttribute('data-seerah-view'); this.render(); return; }

        const filterBtn = e.target.closest('[data-seerah-filter]');
        if (filterBtn) { this.filter = filterBtn.getAttribute('data-seerah-filter'); this.render(); return; }

        const toggle = e.target.closest('[data-seerah-toggle]');
        if (toggle) { this.toggle(toggle.getAttribute('data-seerah-toggle')); return; }

        const readBtn = e.target.closest('[data-seerah-read]');
        if (readBtn) { this.toggleRead(readBtn.getAttribute('data-seerah-read')); return; }

        const ayahBtn = e.target.closest('[data-seerah-ayah]');
        if (ayahBtn) { this.openAyah(ayahBtn.getAttribute('data-seerah-ayah')); return; }

        const shareBtn = e.target.closest('[data-seerah-share]');
        if (shareBtn) { this.shareEvent(shareBtn.getAttribute('data-seerah-share')); return; }

        const copyBtn = e.target.closest('[data-seerah-copy]');
        if (copyBtn) { this.copyEvent(copyBtn.getAttribute('data-seerah-copy')); return; }

        const storyNav = e.target.closest('[data-seerah-story-nav]');
        if (storyNav) {
          const dir = storyNav.getAttribute('data-seerah-story-nav');
          const max = SEERAH_ERAS.length - 1;
          if (dir === 'next') this.storyPos = Math.min(max, this.storyPos + 1);
          else if (dir === 'prev') this.storyPos = Math.max(0, this.storyPos - 1);
          this.saveStoryPos();
          this.render();
          try { this.container.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
          return;
        }

        const reset = e.target.closest('[data-seerah-reset]');
        if (reset) { this.resetProgress(); return; }

        const qopt = e.target.closest('[data-seerah-quiz-opt]');
        if (qopt && !this.quizSubmitted) {
          const parts = String(qopt.getAttribute('data-seerah-quiz-opt')).split(':');
          const qi = parseInt(parts[0], 10), oi = parseInt(parts[1], 10);
          if (!isNaN(qi) && !isNaN(oi)) { this.quizAnswers[qi] = oi; this.render(); }
          return;
        }
        const qsub = e.target.closest('[data-seerah-quiz-submit]');
        if (qsub) { this.submitQuiz(); return; }
        const qreset = e.target.closest('[data-seerah-quiz-reset]');
        if (qreset) { this.quizAnswers = {}; this.quizSubmitted = false; this.quizScore = 0; this.render(); return; }
      } catch (_) { /* ignore */ }
    });

    this.container.addEventListener('input', (e) => {
      try {
        const search = e.target.closest ? e.target.closest('[data-seerah-search]') : null;
        if (search) { this.query = search.value || ''; this.renderList(); }
      } catch (_) { /* ignore */ }
    });
  }

  toggle(id) {
    if (this.expanded.has(id)) this.expanded.delete(id); else this.expanded.add(id);
    const detail = this.container.querySelector(`[data-seerah-detail="${CSS && CSS.escape ? CSS.escape(id) : id}"]`);
    const caret = this.container.querySelector(`[data-seerah-caret="${CSS && CSS.escape ? CSS.escape(id) : id}"]`);
    if (detail) detail.classList.toggle('hidden');
    if (caret) caret.textContent = this.expanded.has(id) ? '▲' : '▼';
  }

  toggleRead(id) {
    if (this.read.has(id)) this.read.delete(id); else this.read.add(id);
    this.saveRead();
    this.updateProgress();
    // re-render just this card to reflect state
    const card = this.container.querySelector(`[data-seerah-card="${CSS && CSS.escape ? CSS.escape(id) : id}"]`);
    const ev = SEERAH_EVENTS.find(x => x.id === id);
    if (card && ev) {
      const wrap = document.createElement('div');
      wrap.innerHTML = this.cardHtml(ev).trim();
      if (wrap.firstElementChild) card.replaceWith(wrap.firstElementChild);
    }
  }

  updateProgress() {
    const total = SEERAH_EVENTS.length;
    const readCount = SEERAH_EVENTS.filter(ev => this.read.has(ev.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;
    const countEl = this.container.querySelector('[data-seerah-count]');
    const barEl = this.container.querySelector('[data-seerah-bar]');
    if (countEl) countEl.textContent = `${readCount} / ${total}`;
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
}

let seerahView;
document.addEventListener('DOMContentLoaded', () => { try { seerahView = new SeerahView(); } catch (_) { /* ignore */ } });
