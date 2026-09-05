/**
 * Hope & Character — the view for the two-wing section described in
 * js/hope-data.js. Renders into #hope-container (tab "hope").
 *
 * Two structural choices are worth knowing before reading the code:
 *
 *   1. NO QUR'AN TEXT IS STORED IN THE MODULE. A chapter carries verse
 *      references only; the Arabic comes from the shared word corpus and the
 *      translation from data/translations/<lang>.json, exactly as Tadabbur does.
 *      That is what lets a verse render in all fifteen UI languages while the
 *      commentary around it is authored in en/bn and falls back through CI18N.
 *      It also means the module cannot paint until those two files have loaded,
 *      hence ensureLoaded() and the spinner.
 *
 *   2. THE MERCY WING IS FIRST AND ITS HERO VERSE IS ALWAYS ON SCREEN. A reader
 *      who opens this tab may be here for one reason. 39:53 sits above the
 *      filters so it is read before any decision about where to click.
 *
 * Reader state lives in localStorage under two keys: lq_hope_read (chapters
 * finished) and lq_hope_focus (qualities the reader is deliberately working on,
 * which is the character wing's whole point — a list of virtues nobody has
 * picked from is a list nobody acts on).
 *
 * Defensive throughout: guards DOM, localStorage, JSON and every lazy global,
 * and never throws.
 */

class HopeView {
  constructor() {
    this.container = document.getElementById('hope-container');
    if (!this.container) return;

    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? (appSettings.get('language') || 'en') : 'en';
    this.wing = null;          // null = both wings
    this.query = '';
    this.currentId = null;     // open chapter, or null for the index
    this.loaded = false;
    this.words = null;         // { "s:a": [words] }
    this.tr = null;            // { "s:a": "translation" }
    this.readSet = this.loadSet('lq_hope_read');
    this.focusSet = this.loadSet('lq_hope_focus');

    window.addEventListener('tabChanged', (e) => {
      if (e && e.detail && e.detail.tabId === 'hope') this.ensureLoaded();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e && e.detail && e.detail.key === 'language') {
        this.language = e.detail.value || 'en';
        if (this.loaded) this.reloadTranslations();
      }
    });

    this.container.addEventListener('click', (e) => this.onClick(e));
    this.container.addEventListener('input', (e) => {
      const s = e.target.closest('#hope-search');
      if (!s) return;
      this.query = s.value || '';
      this.renderList();
    });
  }

  /* ---------- language helpers ---------- */

  /** UI label: orchestrator translation wins, then the inline pack, then en. */
  tt(key) {
    try {
      if (typeof t === 'function') {
        const v = t(key, this.language);
        if (v && v !== key) return v;
      }
    } catch (_) { /* ignore */ }
    const fb = (typeof HOPE_I18N !== 'undefined') ? HOPE_I18N[key] : null;
    return fb ? this.lc(fb) : key;
  }

  /**
   * Content resolver. Bangla is authored inline; the other thirteen languages
   * go through the offline content-i18n dictionary keyed by the English string,
   * and fall back to English rather than to nothing.
   */
  lc(o) {
    if (!o) return '';
    if (this.language && o[this.language]) return o[this.language];
    if (this.language === 'bn') return o.bn || o.en || '';
    if (o.en && typeof CI18N !== 'undefined' && this.language && this.language !== 'en') {
      const tr = CI18N.tr(this.language, o.en);
      if (tr) return tr;
    }
    return o.en || o.bn || '';
  }

  surahName(n) {
    return (typeof getSurahName === 'function') ? getSurahName(parseInt(n, 10), this.language) : String(n);
  }

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  /* ---------- reader state ---------- */

  loadSet(key) {
    const s = new Set();
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) arr.forEach((id) => { if (typeof id === 'string') s.add(id); });
      }
    } catch (_) { /* ignore */ }
    return s;
  }

  saveSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (_) { /* ignore */ }
  }

  toggle(set, key, id) {
    if (set.has(id)) set.delete(id); else set.add(id);
    this.saveSet(key, set);
  }

  /* ---------- data ---------- */

  chapters() { return (typeof HOPE_CHAPTERS !== 'undefined' && HOPE_CHAPTERS) ? HOPE_CHAPTERS : []; }
  wings() { return (typeof HOPE_WINGS !== 'undefined' && HOPE_WINGS) ? HOPE_WINGS : []; }
  steps() { return (typeof HOPE_TAWBAH_STEPS !== 'undefined' && HOPE_TAWBAH_STEPS) ? HOPE_TAWBAH_STEPS : []; }
  names() { return (typeof HOPE_NAMES !== 'undefined' && HOPE_NAMES) ? HOPE_NAMES : []; }
  chapterById(id) { return this.chapters().find((c) => c.id === id) || null; }

  /** Day-of-year pick, the same rotation rule the dashboard uses so the two
   * surfaces never disagree about which chapter "today" means. */
  todayChapter() {
    const all = this.chapters();
    if (!all.length) return null;
    const now = new Date();
    const day = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return all[day % all.length];
  }

  /** Arabic + translation for a ref that may span a range ("25:68-70"). */
  verseData(ref) {
    const m = String(ref).match(/(\d+):(\d+)(?:-(\d+))?/);
    if (!m) return { arabic: '', translation: '' };
    const s = parseInt(m[1], 10), a1 = parseInt(m[2], 10), a2 = m[3] ? parseInt(m[3], 10) : a1;
    const ar = [], tr = [];
    for (let a = a1; a <= a2; a++) {
      const k = s + ':' + a;
      if (this.words && Array.isArray(this.words[k])) ar.push(this.words[k].join(' '));
      if (this.tr && this.tr[k]) tr.push(this.tr[k]);
    }
    return { arabic: ar.join(' ۝ '), translation: tr.join(' ') };
  }

  /** null when the language has no usable dictionary. data/translations/ar.json
   *  exists but is empty ({}) — Arabic readers take the Arabic itself and need
   *  no translation line — and `{}` is truthy, so an emptiness check has to
   *  happen here or every caller silently keeps a dictionary with no entries. */
  loadTranslations(lang) {
    const usable = (d) => (d && typeof d === 'object' && Object.keys(d).length ? d : null);
    try {
      return fetch(`data/translations/${lang}.json`).then((r) => (r.ok ? r.json() : null)).then(usable).catch(() => null);
    } catch (_) { return Promise.resolve(null); }
  }

  async ensureLoaded() {
    if (this.loaded) { this.render(); return; }
    this.container.innerHTML = `<div class="text-center py-16 text-gray-400">${this.esc(this.tt('loading'))}</div>`;
    try {
      const [wd, tr] = await Promise.all([
        (typeof QuranData !== 'undefined' && QuranData.getQuranWords)
          ? QuranData.getQuranWords()
          : fetch('data/quran-words.json').then((r) => r.json()),
        this.loadTranslations(this.language),
      ]);
      this.words = wd;
      this.tr = tr || await this.loadTranslations('en');
    } catch (e) {
      this.container.innerHTML = `<div class="text-center py-16 text-red-500">${this.esc(this.tt('error'))}</div>`;
      return;
    }
    this.loaded = true;
    this.render();
  }

  /** Language changed: swap the translation dictionary, then repaint. */
  async reloadTranslations() {
    /* Capture the language we are loading for: three rapid switches resolve in
     * completion order, and without this the last dictionary to arrive wins
     * rather than the one the reader actually chose. */
    const want = this.language;
    let d = await this.loadTranslations(want);
    if (!d && want !== 'en' && want !== 'ar') d = await this.loadTranslations('en');
    if (this.language !== want) return;
    this.tr = d || null;
    this.render();
  }

  /* ---------- filtering ---------- */

  matches(ch, q) {
    if (!q) return true;
    const parts = [
      this.lc(ch.title), this.lc(ch.tagline),
      ...ch.intro.map((p) => this.lc(p)),
      ...ch.verses.map((v) => v.ref + ' ' + this.lc(v.note) + ' ' + this.surahName(String(v.ref).split(':')[0])),
      ...ch.hadith.map((h) => h.src + ' ' + this.lc(h.text) + ' ' + this.lc(h.note)),
      ...ch.practice.map((p) => this.lc(p)),
      ch.dua ? ch.dua.ref + ' ' + this.lc(ch.dua.why) : '',
    ];
    return parts.join(' ').toLowerCase().includes(q);
  }

  filtered() {
    const q = (this.query || '').trim().toLowerCase();
    return this.chapters().filter((c) => (!this.wing || c.wing === this.wing) && this.matches(c, q));
  }

  /* ---------- interactions ---------- */

  onClick(e) {
    const wingBtn = e.target.closest('[data-hope-wing]');
    if (wingBtn) {
      const id = wingBtn.getAttribute('data-hope-wing');
      this.wing = id || null;
      this.render();
      return;
    }
    const open = e.target.closest('[data-hope-open]');
    if (open) {
      this.currentId = open.getAttribute('data-hope-open');
      this.render();
      try { this.container.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
      return;
    }
    if (e.target.closest('[data-hope-back]')) {
      this.currentId = null;
      this.render();
      return;
    }
    const read = e.target.closest('[data-hope-read]');
    if (read) {
      this.toggle(this.readSet, 'lq_hope_read', read.getAttribute('data-hope-read'));
      this.render();
      return;
    }
    const focus = e.target.closest('[data-hope-focus]');
    if (focus) {
      this.toggle(this.focusSet, 'lq_hope_focus', focus.getAttribute('data-hope-focus'));
      this.render();
      return;
    }
    const ref = e.target.closest('[data-hope-ref]');
    if (ref && typeof ayahModal !== 'undefined' && ayahModal) {
      try { ayahModal.open(ref.getAttribute('data-hope-ref')); } catch (_) { /* ignore */ }
    }
  }

  /* ---------- shared fragments ---------- */

  /** Reference chip + Arabic + translation. Identical shape to the Tadabbur card. */
  verseBlockHtml(ref) {
    const first = String(ref).split('-')[0];
    const [s] = first.split(':');
    const { arabic, translation } = this.verseData(ref);
    return `
      <button data-hope-ref="${this.esc(first)}" title="${this.esc(this.tt('hope_open_verse'))}"
        class="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 rounded-md bg-gray-100 dark:bg-gray-700/60 text-xs font-semibold text-primary dark:text-sky-300 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        ${this.esc(this.surahName(s))} <span class="text-gray-400 dark:text-gray-500 font-normal">${this.esc(ref)}</span> <span aria-hidden="true">↗</span>
      </button>
      <div class="ayah-arabic !text-xl !leading-loose !border-b-0 !pb-0 mb-2 text-gray-800 dark:text-gray-100" dir="rtl">${arabic || '…'}</div>
      ${translation ? `<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(translation)}</p>` : ''}`;
  }

  heroHtml() {
    return `
      <div class="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-5">
        <p class="text-[11px] uppercase tracking-wide font-semibold text-emerald-700/80 dark:text-emerald-300/80 mb-2">🌅 ${this.esc(this.tt('hope_hero_label'))}</p>
        ${this.verseBlockHtml('39:53')}
      </div>`;
  }

  progressHtml() {
    const all = this.chapters().length || 1;
    const done = this.chapters().filter((c) => this.readSet.has(c.id)).length;
    const pct = Math.round((done / all) * 100);
    return `
      <div class="flex items-center gap-3">
        <div class="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div class="h-full bg-primary transition-all" style="width:${pct}%"></div>
        </div>
        <span class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">${done}/${all} ${this.esc(this.tt('hope_progress'))}</span>
      </div>`;
  }

  wingBarHtml() {
    const chip = (id, label, active) => `
      <button data-hope-wing="${this.esc(id)}"
        class="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${active
          ? 'bg-primary text-white border-primary'
          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">${label}</button>`;
    const chips = [chip('', '🌐 ' + this.esc(this.tt('hope_wing_all')), !this.wing)]
      .concat(this.wings().map((w) => chip(w.id, w.emoji + ' ' + this.esc(this.lc(w.title)), this.wing === w.id)));
    return `<div class="flex flex-wrap gap-2">${chips.join('')}</div>`;
  }

  stepsHtml() {
    const items = this.steps().map((s) => `
      <li class="flex gap-3">
        <span class="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-sky-300 text-xs font-bold flex items-center justify-center">${s.n}</span>
        <div>
          <p class="text-sm font-semibold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(s.title))}</p>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-0.5" dir="auto">${this.esc(this.lc(s.body))}</p>
        </div>
      </li>`).join('');
    return `
      <details class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
        <summary class="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
          🧾 ${this.esc(this.tt('hope_steps_title'))}
        </summary>
        <ul class="px-4 pb-4 pt-1 space-y-3">${items}</ul>
      </details>`;
  }

  /** The names panel — mercy wing only, since that is the argument it serves. */
  namesHtml() {
    const items = this.names().map((n) => `
      <li class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3">
        <div class="flex items-baseline justify-between gap-2">
          <span class="ayah-arabic !text-2xl !border-b-0 !pb-0 text-primary dark:text-sky-300" dir="rtl">${n.ar}</span>
          ${n.ref
            ? `<button data-hope-ref="${this.esc(String(n.ref).split('-')[0])}" class="text-[10px] font-semibold text-gray-400 hover:text-primary focus:outline-none">${this.esc(n.ref)} ↗</button>`
            : `<span class="text-[10px] font-semibold text-gray-400">${this.esc(this.tt('hope_from_sunnah_only'))}</span>`}
        </div>
        <p class="text-sm font-semibold text-gray-800 dark:text-gray-100 mt-1">${this.esc(n.translit)}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.lc(n.meaning))}</p>
        <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mt-1.5" dir="auto">${this.esc(this.lc(n.note))}</p>
        ${n.src ? `<p class="text-[10px] text-gray-400 mt-1">${this.esc(n.src)}</p>` : ''}
      </li>`).join('');
    return `
      <details class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
        <summary class="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
          ✨ ${this.esc(this.tt('hope_names_title'))}
        </summary>
        <ul class="px-4 pb-4 pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${items}</ul>
      </details>`;
  }

  /** A du‘a block. Ref-driven like every verse here, so it localises too. */
  duaHtml(dua) {
    if (!dua || !dua.ref) return '';
    return `
      <div class="rounded-xl border border-sky-200 dark:border-sky-900/40 bg-sky-50/50 dark:bg-sky-950/10 p-4">
        <h4 class="text-[11px] uppercase tracking-wide font-semibold text-sky-700/80 dark:text-sky-300/80 mb-2">🤲 ${this.esc(this.tt('hope_dua_label'))}</h4>
        ${this.verseBlockHtml(dua.ref)}
        <p class="mt-3 pt-3 border-t border-sky-200/60 dark:border-sky-900/40 text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(dua.why))}</p>
      </div>`;
  }

  todayHtml() {
    const ch = this.todayChapter();
    if (!ch) return '';
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <p class="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1.5">📅 ${this.esc(this.tt('hope_today'))}</p>
        <div class="flex items-center gap-3">
          <span class="text-2xl leading-none shrink-0" aria-hidden="true">${ch.emoji}</span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(ch.title))}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 leading-snug" dir="auto">${this.esc(this.lc(ch.tagline))}</p>
          </div>
          <button data-hope-open="${this.esc(ch.id)}"
            class="shrink-0 px-3 py-1.5 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">${this.esc(this.tt('hope_open_chapter'))}</button>
        </div>
      </div>`;
  }

  cardHtml(ch) {
    const isRead = this.readSet.has(ch.id);
    const isFocus = this.focusSet.has(ch.id);
    const badges = [
      isRead ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">✓ ${this.esc(this.tt('hope_read_done'))}</span>` : '',
      isFocus ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">◎ ${this.esc(this.tt('hope_focus_on'))}</span>` : '',
    ].filter(Boolean).join(' ');
    return `
      <button data-hope-open="${this.esc(ch.id)}"
        class="text-start rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <div class="flex items-start justify-between gap-2 mb-1">
          <span class="text-2xl leading-none" aria-hidden="true">${ch.emoji}</span>
          <span class="flex flex-wrap gap-1 justify-end">${badges}</span>
        </div>
        <h3 class="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1" dir="auto">${this.esc(this.lc(ch.title))}</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc(ch.tagline))}</p>
        <p class="mt-2 text-[11px] text-gray-400 dark:text-gray-500">${ch.verses.length} · ${this.esc(this.tt('hope_verses_label'))} &nbsp;·&nbsp; ${ch.hadith.length} · ${this.esc(this.tt('hope_hadith_label'))}</p>
      </button>`;
  }

  /* ---------- rendering ---------- */

  listHtml() {
    const items = this.filtered();
    if (!items.length) {
      return `<p class="text-center py-12 text-sm text-gray-400">${this.esc(this.tt('hope_none'))}</p>`;
    }
    const groups = this.wings()
      .filter((w) => !this.wing || w.id === this.wing)
      .map((w) => {
        const inWing = items.filter((c) => c.wing === w.id);
        if (!inWing.length) return '';
        return `
          <section class="space-y-3">
            <div>
              <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${w.emoji} ${this.esc(this.lc(w.title))}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1" dir="auto">${this.esc(this.lc(w.blurb))}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">${inWing.map((c) => this.cardHtml(c)).join('')}</div>
          </section>`;
      }).filter(Boolean).join('');
    return groups;
  }

  /** Repaint only the results, so typing in the search box keeps focus. */
  renderList() {
    const el = document.getElementById('hope-list');
    if (el) el.innerHTML = this.listHtml();
  }

  detailHtml(ch) {
    const isRead = this.readSet.has(ch.id);
    const isFocus = this.focusSet.has(ch.id);
    const sectionTitle = (emoji, label) => `
      <h4 class="text-[11px] uppercase tracking-wide font-semibold text-primary/80 mb-2">${emoji} ${this.esc(label)}</h4>`;

    const verses = ch.verses.map((v) => `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        ${this.verseBlockHtml(v.ref)}
        <p class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/60 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(v.note))}</p>
      </div>`).join('');

    const hadith = ch.hadith.map((h) => `
      <div class="rounded-xl border border-amber-200/70 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/10 p-4">
        ${h.ar ? `<div class="ayah-arabic !text-lg !leading-loose !border-b-0 !pb-0 mb-2 text-gray-800 dark:text-gray-100" dir="rtl">${this.esc(h.ar)}</div>` : ''}
        <p class="text-sm text-gray-700 dark:text-gray-200 leading-relaxed" dir="auto">${this.esc(this.lc(h.text))}</p>
        <p class="mt-2 text-[11px] font-semibold text-amber-700/90 dark:text-amber-300/90">${this.esc(h.src)}</p>
        <p class="mt-2 pt-2 border-t border-amber-200/60 dark:border-amber-900/40 text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(h.note))}</p>
      </div>`).join('');

    const practice = ch.practice.map((p) => `
      <li class="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        <span aria-hidden="true">🎯</span><span dir="auto">${this.esc(this.lc(p))}</span>
      </li>`).join('');

    const btn = (attr, id, on, labelOff, labelOn, onCls) => `
      <button ${attr}="${this.esc(id)}"
        class="px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${on
          ? onCls
          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">
        ${on ? '✓ ' + this.esc(labelOn) : this.esc(labelOff)}
      </button>`;

    return `
      <div class="space-y-5">
        <button data-hope-back
          class="inline-flex items-center gap-1.5 text-sm font-medium text-primary dark:text-sky-300 hover:underline">
          <span aria-hidden="true">←</span> ${this.esc(this.tt('hope_back'))}
        </button>

        <div class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800 p-5">
          <div class="flex items-center gap-3 mb-1">
            <span class="text-3xl leading-none" aria-hidden="true">${ch.emoji}</span>
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(ch.title))}</h2>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc(ch.tagline))}</p>
        </div>

        <div class="space-y-3">
          ${ch.intro.map((p) => `<p class="text-sm text-gray-700 dark:text-gray-200 leading-relaxed" dir="auto">${this.esc(this.lc(p))}</p>`).join('')}
        </div>

        <div>
          ${sectionTitle('📖', this.tt('hope_verses_label'))}
          <div class="space-y-3">${verses}</div>
        </div>

        ${hadith ? `<div>${sectionTitle('🕌', this.tt('hope_hadith_label'))}<div class="space-y-3">${hadith}</div></div>` : ''}

        ${this.duaHtml(ch.dua)}

        <div class="rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/10 p-4">
          ${sectionTitle('✅', this.tt('hope_practice_label'))}
          <ul class="space-y-2">${practice}</ul>
        </div>

        <div class="flex flex-wrap gap-2">
          ${btn('data-hope-read', ch.id, isRead, this.tt('hope_read'), this.tt('hope_read_done'), 'bg-emerald-600 text-white border-emerald-600')}
          ${ch.wing === 'character' ? btn('data-hope-focus', ch.id, isFocus, this.tt('hope_focus'), this.tt('hope_focus_on'), 'bg-amber-500 text-white border-amber-500') : ''}
        </div>
      </div>`;
  }

  render() {
    if (!this.container) return;
    const ch = this.currentId ? this.chapterById(this.currentId) : null;
    if (ch) { this.container.innerHTML = `<div class="w-full">${this.detailHtml(ch)}</div>`; return; }

    const inp = 'w-full sm:w-72 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40';

    this.container.innerHTML = `
      <div class="w-full space-y-5">
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.tt('hope_subtitle'))}</p>

        ${this.heroHtml()}
        ${this.progressHtml()}

        <div class="flex flex-wrap items-center justify-between gap-3">
          ${this.wingBarHtml()}
          <input id="hope-search" type="search" dir="auto" class="${inp}"
            placeholder="${this.esc(this.tt('hope_search_ph'))}" value="${this.esc(this.query)}">
        </div>

        ${this.todayHtml()}

        ${(!this.wing || this.wing === 'mercy') ? this.stepsHtml() : ''}
        ${(!this.wing || this.wing === 'mercy') ? this.namesHtml() : ''}

        <div id="hope-list" class="space-y-8">${this.listHtml()}</div>

        <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4 space-y-2">
          <p class="text-[11px] uppercase tracking-wide font-semibold text-gray-400">${this.esc(this.tt('hope_note'))}</p>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.tt('hope_note_body'))}</p>
          <p class="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed pt-1" dir="auto">${this.esc(this.tt('hope_disclaimer'))}</p>
        </div>
      </div>`;
  }
}

let hopeView;
(window.LQ && LQ.ready ? LQ.ready : function (f) { document.addEventListener('DOMContentLoaded', f); })(() => { hopeView = new HopeView(); });
