/**
 * Dashboard — the app's home tab. A daily-rotating overview that surfaces the
 * app's content library: Verse of the Day (tadabbur), Name of Allah, Companion
 * of the Day, Topic of the Day, today's amal suggestions, personal progress,
 * and a quick-launch grid.
 *
 * All "of the day" picks are deterministic by day-of-year, so every visitor
 * sees the same rotation and it changes at midnight. Data comes from globals
 * that are already loaded by earlier <script> tags (PONDER_REFS, NAMES_99,
 * SAHABA_DATA, TOPIC_GROUPS, AMAL_ITEMS) — every access is typeof-guarded so
 * a missing dataset degrades to hiding that card, never breaking the page.
 *
 * Renders into #dashboard-container (tab "dashboard").
 */

/* Bilingual UI strings — en/bn inline; other languages resolve via CI18N. */
const DASH_L = {
  salam:        { en: 'As-salamu alaykum', bn: 'আসসালামু আলাইকুম' },
  tagline:      { en: 'What would you like to learn today?', bn: 'আজ কী শিখতে চান?' },
  verse_day:    { en: 'Verse of the Day', bn: 'আজকের আয়াত' },
  reflect:      { en: 'Read & reflect', bn: 'পড়ুন ও চিন্তা করুন' },
  name_day:     { en: 'Name of Allah', bn: 'আল্লাহর নাম' },
  companion_day:{ en: 'Companion of the Day', bn: 'আজকের সাহাবি' },
  topic_day:    { en: 'Topic of the Day', bn: 'আজকের বিষয়' },
  amal_today:   { en: "Today's Good Deeds", bn: 'আজকের আমল' },
  progress:     { en: 'My Progress', bn: 'আমার অগ্রগতি' },
  quick:        { en: 'Explore', bn: 'ঘুরে দেখুন' },
  continue_read:{ en: 'Continue Reading', bn: 'পড়া চালিয়ে যান' },
  open_quran:   { en: 'Open the Quran and pick up where you left off.', bn: 'কুরআন খুলুন এবং যেখানে ছিলেন সেখান থেকে শুরু করুন।' },
  khatmah_on:   { en: 'Khatmah plan active', bn: 'খতম পরিকল্পনা চলছে' },
  khatmah_off:  { en: 'Start a Khatmah plan', bn: 'খতম পরিকল্পনা শুরু করুন' },
  quiz_best:    { en: 'Quiz bests', bn: 'কুইজ সেরা স্কোর' },
  companions_read: { en: 'Companions read', bn: 'সাহাবি পড়া হয়েছে' },
  see_all:      { en: 'See all', bn: 'সব দেখুন' },
  view:         { en: 'View', bn: 'দেখুন' },
  vocab_title:  { en: 'Vocabulary trainer', bn: 'কুরআনের শব্দভান্ডার' },
  vocab_known:  { en: 'words known', bn: 'শব্দ জানা' },
  vocab_cov:    { en: 'Quran coverage', bn: 'কুরআন কভারেজ' },
  vocab_due:    { en: 'due for review', bn: 'রিভিউয়ের অপেক্ষায়' },
  vocab_cta:    { en: 'Practice words', bn: 'শব্দ অনুশীলন করুন' },
  vocab_review: { en: 'Review now', bn: 'এখনই রিভিউ করুন' },
};

class DashboardView {
  constructor() {
    this.container = document.getElementById('dashboard-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? appSettings.get('language') : 'en';
    this._trFiles = {};
    this.rendered = false;

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'dashboard') this.render(); } catch (_) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered) this.render();
        }
      } catch (_) { /* ignore */ }
    });

    // Dashboard is the landing tab — render immediately.
    this.render();
  }

  /* ---------- helpers ---------- */
  tt(key) { return (typeof t === 'function') ? t(key, this.language) : key; }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  /** Localize an {en,bn} pair: bn native, en native, other langs via CI18N (fallback en). */
  L(o) {
    if (!o) return '';
    if (this.language === 'bn') return o.bn || o.en || '';
    if (this.language === 'en') return o.en || '';
    const tr = (typeof CI18N !== 'undefined') ? CI18N.tr(this.language, o.en) : null;
    return tr || o.en || '';
  }
  surahName(n) {
    return (typeof getSurahName === 'function') ? getSurahName(parseInt(n, 10), this.language) : String(n);
  }
  dayIndex() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    return Math.floor((now - start) / 86400000);
  }
  pick(arr) {
    if (!Array.isArray(arr) || !arr.length) return null;
    return arr[this.dayIndex() % arr.length];
  }
  goTab(tab) {
    try {
      if (typeof tabSystem !== 'undefined' && tabSystem) {
        if (tabSystem.switchTabWithReturn) tabSystem.switchTabWithReturn(tab);
        else tabSystem.switchTab(tab);
      }
    } catch (_) { /* ignore */ }
  }
  firstAyah(ref) {
    // '2:155-157' -> '2:155'
    const m = /^(\d+):(\d+)/.exec(ref || '');
    return m ? `${m[1]}:${m[2]}` : null;
  }
  async trFile(lang) {
    if (this._trFiles[lang] !== undefined) return this._trFiles[lang];
    try {
      this._trFiles[lang] = await fetch(`data/translations/${lang}.json`).then(r => (r.ok ? r.json() : null));
    } catch (e) { this._trFiles[lang] = null; }
    return this._trFiles[lang];
  }

  /* ---------- date line ---------- */
  dateLine() {
    const locale = this.language === 'bn' ? 'bn' : this.language;
    let greg = '';
    try { greg = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); } catch (e) { greg = new Date().toDateString(); }
    let hijri = '';
    try { hijri = new Intl.DateTimeFormat(`${locale}-u-ca-islamic-umalqura`, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); } catch (e) { /* unsupported */ }
    return { greg, hijri };
  }

  /* ---------- cards ---------- */
  card(inner, extra) {
    return `<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 ${extra || ''}">${inner}</div>`;
  }
  heading(emoji, label) {
    return `<div class="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2"><span aria-hidden="true">${emoji}</span>${this.esc(label)}</div>`;
  }

  verseCard() {
    if (typeof PONDER_REFS === 'undefined' || !Array.isArray(PONDER_REFS) || !PONDER_REFS.length) return '';
    const ref = this.pick(PONDER_REFS);
    const first = this.firstAyah(ref);
    if (!first) return '';
    const [s] = first.split(':');
    return this.card(`
      ${this.heading('🌤️', this.L(DASH_L.verse_day))}
      <div class="flex items-center gap-2 mb-2">
        <span class="px-2 py-0.5 rounded-md bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium">${this.esc(this.surahName(s))} · ${this.esc(ref)}</span>
      </div>
      <div class="ayah-arabic !text-xl !leading-loose !border-b-0 !pb-0 text-gray-800 dark:text-gray-100 min-h-[1.5rem]" dir="rtl" data-dash-verse-ar></div>
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2" data-dash-verse-tr></p>
      <button data-dash-ayah="${first}" class="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📖 ${this.esc(this.L(DASH_L.reflect))}</button>
    `);
  }

  nameCard() {
    if (typeof NAMES_99 === 'undefined' || !Array.isArray(NAMES_99) || !NAMES_99.length) return '';
    const n = this.pick(NAMES_99);
    const meaning = (n.meanings && (n.meanings[this.language] || n.meanings.en)) || '';
    return this.card(`
      ${this.heading('✨', this.L(DASH_L.name_day))}
      <button data-dash-go="names" class="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
        <div class="ayah-arabic !text-2xl !border-b-0 !pb-0 text-primary" dir="rtl">${this.esc(n.ar)}</div>
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100 mt-1">${this.esc(n.translit)}</div>
        <div class="text-xs text-gray-500 dark:text-gray-400">${this.esc(meaning)}</div>
      </button>
    `);
  }

  companionCard() {
    if (typeof SAHABA_DATA === 'undefined' || !Array.isArray(SAHABA_DATA) || !SAHABA_DATA.length) return '';
    const c = this.pick(SAHABA_DATA);
    const name = this.language === 'bn' ? (c.bn || c.en) : c.en;
    const role = this.language === 'bn' ? (c.roleBn || c.roleEn) : (this.L({ en: c.roleEn, bn: c.roleBn }));
    return this.card(`
      ${this.heading('🤝', this.L(DASH_L.companion_day))}
      <button data-dash-go="sahaba" class="w-full text-left flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
        <span class="shrink-0 w-10 h-10 rounded-full ${this.esc(c.color || 'bg-primary')} text-white flex items-center justify-center text-sm font-bold">${this.esc(c.init || '☆')}</span>
        <span class="flex-1 min-w-0">
          <span class="block text-sm font-semibold text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(name)}</span>
          <span class="block text-xs text-gray-500 dark:text-gray-400 truncate" dir="auto">${this.esc(role || '')}</span>
        </span>
        <span class="text-gray-300 dark:text-gray-600" aria-hidden="true">›</span>
      </button>
    `);
  }

  topicCard() {
    if (typeof TOPIC_GROUPS === 'undefined' || !Array.isArray(TOPIC_GROUPS) || !TOPIC_GROUPS.length) return '';
    const g = this.pick(TOPIC_GROUPS);
    const name = (g.names && (g.names[this.language] || g.names.en)) || g.id;
    const chips = (g.refs || []).slice(0, 3).map(ref => {
      const first = this.firstAyah(ref);
      const [s] = (first || '0:0').split(':');
      return `<button data-dash-ayah="${first}" class="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-xs hover:border-primary hover:bg-primary/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">${this.esc(this.surahName(s))} <span class="text-gray-400">${this.esc(ref)}</span></button>`;
    }).join(' ');
    return this.card(`
      ${this.heading(g.emoji || '🗂️', this.L(DASH_L.topic_day) + ' · ' + name)}
      <div class="flex flex-wrap gap-1.5">${chips}
        <button data-dash-topic-tl="${this.esc(g.id)}" class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">🕐 ${this.esc(this.tt('mt_group_open_all'))}</button>
      </div>
    `);
  }

  amalCard() {
    if (typeof AMAL_ITEMS === 'undefined' || !Array.isArray(AMAL_ITEMS) || !AMAL_ITEMS.length) return '';
    // `when` is an array like ['morning','evening'] — treat everyday-ish items as the daily pool.
    const dailyish = new Set(['any', 'morning', 'evening', 'night']);
    const daily = AMAL_ITEMS.filter(a => Array.isArray(a.when) && a.when.some(w => dailyish.has(w)));
    const pool = daily.length >= 3 ? daily : AMAL_ITEMS;
    const start = this.dayIndex() % pool.length;
    const picks = [0, 1, 2].map(i => pool[(start + i) % pool.length]);
    const rows = picks.map(a => {
      const raw = this.language === 'bn' ? (a.bn || a.en) : (this.L({ en: a.en, bn: a.bn }));
      const text = typeof raw === 'string' ? raw : '';
      return `<li class="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><span class="text-primary shrink-0" aria-hidden="true">▸</span><span class="flex-1 min-w-0 truncate" dir="auto">${this.esc(text)}</span></li>`;
    }).join('');
    return this.card(`
      ${this.heading('📿', this.L(DASH_L.amal_today))}
      <ul class="space-y-1.5 mb-2">${rows}</ul>
      <button data-dash-go="amal" class="text-xs font-medium text-primary hover:underline focus:outline-none">${this.esc(this.L(DASH_L.see_all))} →</button>
    `);
  }

  /** Vocabulary trainer snapshot (written by learn-vocab as 'vocabSummary'):
   * known words, exact Quran coverage %, and due SRS reviews. */
  vocabCard() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem('vocabSummary') || 'null'); } catch (_) { /* ignore */ }
    if (!s) {
      let known = 0;
      try { known = (JSON.parse(localStorage.getItem('vocabKnown') || '[]') || []).length; } catch (_) { /* ignore */ }
      s = { known, coverage: null, due: null };
    }
    const stat = (v, label) => `
      <div class="text-center">
        <div class="text-xl font-bold text-gray-800 dark:text-gray-100 tabular-nums">${v}</div>
        <div class="text-[0.7rem] text-gray-500 dark:text-gray-400">${this.esc(label)}</div>
      </div>`;
    return this.card(`
      ${this.heading('📚', this.L(DASH_L.vocab_title))}
      <div class="flex items-center justify-around gap-2 mb-3">
        ${stat(s.known || 0, this.L(DASH_L.vocab_known))}
        ${s.coverage !== null && s.coverage !== undefined ? stat(this.esc(String(s.coverage)) + '%', this.L(DASH_L.vocab_cov)) : ''}
        ${s.due ? stat(s.due, this.L(DASH_L.vocab_due)) : ''}
      </div>
      <div class="flex flex-wrap gap-2">
        <button data-dash-vocab="flashcards" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📚 ${this.esc(this.L(DASH_L.vocab_cta))}</button>
        ${s.due ? `<button data-dash-vocab="review" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📥 ${this.esc(this.L(DASH_L.vocab_review))} · ${s.due}</button>` : ''}
      </div>
    `);
  }

  progressCard() {
    const chips = [];
    try {
      const plan = JSON.parse(localStorage.getItem('khatmahPlan') || 'null');
      chips.push(`<button data-dash-go="khatmah" class="px-2.5 py-1 rounded-full text-xs font-medium ${plan ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📅 ${this.esc(this.L(plan ? DASH_L.khatmah_on : DASH_L.khatmah_off))}</button>`);
    } catch (_) { /* ignore */ }
    try {
      const read = JSON.parse(localStorage.getItem('lq_sahaba_read') || '[]');
      if (Array.isArray(read) && read.length) {
        chips.push(`<button data-dash-go="sahaba" class="px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">🤝 ${read.length} ${this.esc(this.L(DASH_L.companions_read))}</button>`);
      }
    } catch (_) { /* ignore */ }
    const bests = [
      ['lq_prophets_quiz_best', '🕌'], ['lq_seerah_quiz_best', '🕰️'], ['lq_sahaba_quiz_best', '🤝'],
    ];
    let bestBits = [];
    for (const [key, emoji] of bests) {
      try { const n = parseInt(localStorage.getItem(key), 10); if (Number.isFinite(n) && n > 0) bestBits.push(`${emoji} ${n}`); } catch (_) { /* ignore */ }
    }
    if (bestBits.length) {
      chips.push(`<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 text-xs font-medium">🏆 ${this.esc(this.L(DASH_L.quiz_best))}: ${bestBits.join(' · ')}</span>`);
    }
    if (!chips.length) return '';
    return this.card(`
      ${this.heading('📈', this.L(DASH_L.progress))}
      <div class="flex flex-wrap gap-1.5">${chips.join('')}</div>
    `);
  }

  quickGrid() {
    const tiles = [
      ['reading', '📖', 'ayah_reading'], ['mushaf', '📗', 'mushaf'],
      ['sahaba', '🤝', 'sahaba_title'], ['prophets', '🕌', 'prophets_title'],
      ['names', '✨', 'learn_names_title'], ['amal', '📿', 'amal_title'],
      ['quiz', '❓', 'quiz'], ['mutashabihat', '🪞', 'mutashabihat_title'],
    ];
    const cells = tiles.map(([tab, emoji, key]) => `
      <button data-dash-go="${tab}" class="flex flex-col items-center gap-1 p-3 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-md hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <span class="text-2xl" aria-hidden="true">${emoji}</span>
        <span class="text-[0.7rem] font-medium text-gray-600 dark:text-gray-300 text-center leading-tight">${this.esc(this.tt(key))}</span>
      </button>`).join('');
    return `
      <div>${this.heading('🧭', this.L(DASH_L.quick))}<div class="grid grid-cols-4 sm:grid-cols-8 gap-2">${cells}</div></div>`;
  }

  /* ---------- render ---------- */
  render() {
    if (!this.container) return;
    const { greg, hijri } = this.dateLine();
    this.container.innerHTML = `
      <div class="w-full space-y-4">
        <div class="pt-1">
          <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">${this.esc(this.L(DASH_L.salam))} 👋</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">${this.esc(this.L(DASH_L.tagline))}</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">${this.esc(greg)}${hijri ? ` · ${this.esc(hijri)}` : ''}</p>
        </div>
        ${this.card(`
          ${this.heading('📖', this.L(DASH_L.continue_read))}
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">${this.esc(this.L(DASH_L.open_quran))}</p>
          <button data-dash-go="reading" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📖 ${this.esc(this.tt('ayah_reading'))}</button>
        `)}
        ${this.verseCard()}
        <div class="grid sm:grid-cols-2 gap-4">
          ${this.nameCard()}
          ${this.companionCard()}
        </div>
        ${this.topicCard()}
        ${this.amalCard()}
        ${this.vocabCard()}
        ${this.progressCard()}
        ${this.quickGrid()}
      </div>`;
    this.rendered = true;
    this.bind();
    this.fillVerse();
  }

  bind() {
    if (this._bound) return;
    this._bound = true;
    this.container.addEventListener('click', (e) => {
      const go = e.target.closest('[data-dash-go]');
      if (go) { this.goTab(go.getAttribute('data-dash-go')); return; }
      const dv = e.target.closest('[data-dash-vocab]');
      if (dv) {
        this.goTab('learn');
        try {
          window.dispatchEvent(new CustomEvent('learnModuleSelected',
            { detail: { module: 'vocab', vmode: dv.getAttribute('data-dash-vocab') || 'flashcards' } }));
        } catch (_) { /* ignore */ }
        return;
      }
      const tl = e.target.closest('[data-dash-topic-tl]');
      if (tl && typeof ayahTimeline !== 'undefined' && typeof TOPIC_GROUPS !== 'undefined') {
        const g = TOPIC_GROUPS.find(x => x.id === tl.getAttribute('data-dash-topic-tl'));
        if (g) {
          const name = (g.names && (g.names[this.language] || g.names.en)) || g.id;
          try { ayahTimeline.open({ title: `${g.emoji || ''} ${name}`.trim(), refs: g.refs }); } catch (_) { /* ignore */ }
        }
        return;
      }
      const ay = e.target.closest('[data-dash-ayah]');
      if (ay && typeof ayahModal !== 'undefined' && ayahModal) {
        try { ayahModal.open(ay.getAttribute('data-dash-ayah')); } catch (_) { /* ignore */ }
      }
    });
  }

  /** Async: fill Verse-of-the-Day Arabic + translation once data arrives. */
  async fillVerse() {
    const arEl = this.container.querySelector('[data-dash-verse-ar]');
    const trEl = this.container.querySelector('[data-dash-verse-tr]');
    if (!arEl) return;
    const ref = this.pick(typeof PONDER_REFS !== 'undefined' ? PONDER_REFS : []);
    const first = this.firstAyah(ref);
    if (!first) return;
    try {
      if (typeof QuranData !== 'undefined' && QuranData.getVerseBase) {
        const vb = await QuranData.getVerseBase();
        if (vb && vb[first] && vb[first].t) arEl.textContent = vb[first].t;
      }
    } catch (_) { /* ignore */ }
    try {
      let dict = await this.trFile(this.language);
      if (!dict && this.language !== 'en') dict = await this.trFile('en');
      if (dict && dict[first] && trEl) trEl.textContent = dict[first];
    } catch (_) { /* ignore */ }
  }
}

let dashboardView;
document.addEventListener('DOMContentLoaded', () => {
  try { dashboardView = new DashboardView(); } catch (_) { /* ignore */ }
});
