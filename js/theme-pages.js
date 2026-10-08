/**
 * Theme pages — the "Allah" and "Quranic Themes" groups.
 *
 * Twenty pages share this one view. Each has its own tab (`allah-loves`,
 * `th-patience`, …) so deep links, Back and the sidebar highlight all work as
 * they do for every other module, plus two hub tabs (`allah`, `themes`) that
 * list a group's pages as cards.
 *
 * A page's content is a JSON file, data/themes/<id>.json, fetched the first
 * time the page opens:
 *   { id, title{en,bn}, tagline{en,bn}, intro:[{en,bn}],
 *     sections:[{ id, title{en,bn}, body:[{en,bn}],
 *                 verses:[{ ref, note{en,bn} }],
 *                 hadith:[{ src, url, grade, text{en,bn}, note{en,bn} }] }],
 *     practice:[{en,bn}], refs:[ "s:a", … ], videos:[…], reading:[…],
 *     sources:[…], related:[ids], status }
 *
 * As in Hope and Tadabbur, NO QUR'AN TEXT IS STORED in those files: a verse is
 * a reference, and its Arabic and translation come from the shared corpus and
 * data/translations/<lang>.json at render time, so every ayah shows in all
 * fifteen languages. Commentary is authored in en/bn and falls back through
 * CI18N, then English.
 *
 * Loaded lazily (js/module-loader.js bundles every theme tab to this file).
 * Defensive throughout: never throws on a missing file, global or key.
 */

var THEME_GROUPS = [
  { id: 'allah', emoji: '☝️', label: 'th_group_allah', intro: 'th_group_allah_intro',
    pages: [
      { tab: 'names', emoji: '✨', label: 'learn_names_title', external: true },
      'allah-remembrance', 'allah-loves', 'allah-dislikes', 'allah-woe', 'allah-curse',
      'allah-gratitude', 'allah-good-opinion'] },
  { id: 'themes', emoji: '🧭', label: 'th_group_themes', intro: 'th_group_themes_intro',
    pages: ['th-o-mankind', 'th-o-believers', 'th-sajdah', 'th-parables', 'th-resurrection',
      'th-hereafter', 'th-judgement', 'th-wrongdoers', 'th-hell', 'th-repentance',
      'th-patience', 'th-forgiveness', 'th-paradise'] },
];

var THEME_EMOJI = {
  'allah-remembrance': '📿', 'allah-loves': '💚', 'allah-dislikes': '🚫', 'allah-woe': '⚠️',
  'allah-curse': '⛔', 'allah-gratitude': '🤲', 'allah-good-opinion': '🌤️',
  'th-o-mankind': '🌍', 'th-o-believers': '🤝', 'th-sajdah': '🙇', 'th-parables': '🌳',
  'th-resurrection': '🌅', 'th-hereafter': '♾️', 'th-judgement': '⚖️', 'th-wrongdoers': '✋',
  'th-hell': '🔥', 'th-repentance': '↩️', 'th-patience': '⛰️', 'th-forgiveness': '🕊️',
  'th-paradise': '🌿',
};

/** i18n key for a page title: 'allah-loves' -> 'th_allah_loves'. */
function themeTitleKey(id) { return 'th_' + String(id).replace(/-/g, '_'); }

class ThemePages {
  constructor() {
    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? (appSettings.get('language') || 'en') : 'en';
    this.data = {};          // id -> page JSON (or {error})
    this.pending = {};       // id -> Promise
    this.words = null;       // { "s:a": [words] }
    this.tr = null;          // { "s:a": translation }
    this.trLang = null;
    this.openSurahs = {};    // id -> Set of surah numbers expanded in "all ayat"
    this.playing = {};       // id -> video index playing inline
    this.current = null;
    this.bound = new Set();

    window.addEventListener('tabChanged', (e) => {
      const id = e && e.detail && e.detail.tabId;
      if (this.isTheme(id) || this.isHub(id)) this.show(id);
    });
    window.addEventListener('settingChanged', (e) => {
      if (e && e.detail && e.detail.key === 'language') {
        this.language = e.detail.value || 'en';
        if (this.current) this.show(this.current);
      }
    });
  }

  /* ---------- registry ---------- */

  hubs() { return THEME_GROUPS; }
  isHub(id) { return THEME_GROUPS.some((g) => g.id === id); }
  isTheme(id) { return !!THEME_EMOJI[id]; }
  groupOf(id) { return THEME_GROUPS.find((g) => g.pages.includes(id)) || null; }
  container(id) { return document.getElementById(id + '-container'); }

  /* ---------- helpers ---------- */

  tt(key) { return (typeof t === 'function') ? t(key, this.language) : key; }

  /** Count label with {n}; Bengali gets Bengali digits. */
  ttn(key, n) { return this.tt(key).replace('{n}', this.num(n)); }

  num(n) {
    const s = String(n);
    return this.language === 'bn' ? s.replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[d]) : s;
  }

  lc(o) {
    if (!o) return '';
    if (typeof o === 'string') return o;
    if (this.language && o[this.language]) return o[this.language];
    if (this.language === 'bn') return o.bn || o.en || '';
    if (o.en && typeof CI18N !== 'undefined' && this.language && this.language !== 'en') {
      try { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; } catch (_) { /* fall through */ }
    }
    return o.en || o.bn || '';
  }

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  surahName(n) {
    return (typeof getSurahName === 'function') ? getSurahName(parseInt(n, 10), this.language) : String(n);
  }

  refCmp(a, b) {
    const [s1, a1] = String(a).split(/[:-]/).map(Number), [s2, a2] = String(b).split(/[:-]/).map(Number);
    return s1 - s2 || a1 - a2;
  }

  version() {
    const s = document.querySelector('script[src*="module-loader.js"]');
    const m = s && s.src.match(/[?&]v=(\d+)/);
    return m ? m[1] : '';
  }

  /* ---------- loading ---------- */

  loadTranslations(lang) {
    const usable = (d) => (d && typeof d === 'object' && Object.keys(d).length ? d : null);
    return fetch(`data/translations/${lang}.json`).then((r) => (r.ok ? r.json() : null)).then(usable).catch(() => null);
  }

  async ensureCorpus() {
    if (!this.words) {
      this.words = await ((typeof QuranData !== 'undefined' && QuranData.getQuranWords)
        ? QuranData.getQuranWords()
        : fetch('data/quran-words.json').then((r) => r.json())).catch(() => null);
    }
    if (this.trLang !== this.language) {
      const want = this.language;
      let d = await this.loadTranslations(want);
      if (!d && want !== 'en' && want !== 'ar') d = await this.loadTranslations('en');
      if (this.language === want) { this.tr = d; this.trLang = want; }
    }
  }

  loadPage(id) {
    if (this.data[id]) return Promise.resolve(this.data[id]);
    if (this.pending[id]) return this.pending[id];
    const v = this.version();
    this.pending[id] = fetch(`data/themes/${id}.json${v ? '?v=' + v : ''}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((d) => { this.data[id] = d; return d; })
      .catch(() => { delete this.pending[id]; return null; });
    return this.pending[id];
  }

  /* ---------- entry ---------- */

  async show(id) {
    const box = this.container(id);
    if (!box) return;
    this.current = id;
    this.bind(id, box);
    if (this.isHub(id)) {
      this.renderHub(id, box);
      // Card counts come from the page files; fetch them quietly and repaint.
      const g = THEME_GROUPS.find((x) => x.id === id);
      const ids = g.pages.filter((p) => typeof p === 'string');
      Promise.all(ids.map((p) => this.loadPage(p))).then(() => { if (this.current === id) this.renderHub(id, box); });
      return;
    }
    if (!this.data[id]) box.innerHTML = `<div class="text-center py-16 text-gray-400">${this.esc(this.tt('loading'))}</div>`;
    const [d] = await Promise.all([this.loadPage(id), this.ensureCorpus()]);
    if (this.current !== id) return;
    if (!d) { box.innerHTML = `<div class="text-center py-16 text-red-500">${this.esc(this.tt('topics_load_error'))}</div>`; return; }
    this.renderPage(id, box);
  }

  bind(id, box) {
    if (this.bound.has(id)) return;
    this.bound.add(id);
    box.addEventListener('click', (e) => this.onClick(id, box, e));
  }

  onClick(id, box, e) {
    const go = e.target.closest('[data-th-go]');
    if (go) {
      const tab = go.getAttribute('data-th-go');
      if (typeof tabSystem !== 'undefined' && tabSystem) {
        if (tabSystem.switchTabWithReturn) tabSystem.switchTabWithReturn(tab); else tabSystem.switchTab(tab);
      }
      window.scrollTo(0, 0);
      return;
    }
    const jump = e.target.closest('[data-th-jump]');
    if (jump) {
      const el = box.querySelector('#' + jump.getAttribute('data-th-jump'));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const sur = e.target.closest('[data-th-surah]');
    if (sur) {
      const n = Number(sur.getAttribute('data-th-surah'));
      const set = this.openSurahs[id] || (this.openSurahs[id] = new Set());
      if (set.has(n)) set.delete(n); else set.add(n);
      const slot = box.querySelector(`[data-th-surah-body="${n}"]`);
      if (slot) {
        slot.innerHTML = set.has(n) ? this.surahVersesHtml(id, n) : '';
        sur.setAttribute('aria-expanded', String(set.has(n)));
        const caret = sur.querySelector('[data-caret]');
        if (caret) caret.textContent = set.has(n) ? '▾' : '▸';
      }
      return;
    }
    const all = e.target.closest('[data-th-all]');
    if (all) {
      const open = all.getAttribute('data-th-all') === 'open';
      const d = this.data[id];
      this.openSurahs[id] = new Set(open ? this.surahGroups(d.refs || []).map((g) => g.s) : []);
      this.renderPage(id, box);
      const el = box.querySelector('#th-all-ayat');
      if (el) el.scrollIntoView({ block: 'start' });
      return;
    }
    const vid = e.target.closest('[data-th-video]');
    if (vid) {
      this.playing[id] = Number(vid.getAttribute('data-th-video'));
      const card = vid.closest('[data-th-video-card]');
      const v = (this.data[id].videos || [])[this.playing[id]];
      if (card && v) card.querySelector('[data-th-video-frame]').innerHTML = this.videoFrame(v);
    }
  }

  /* ---------- verses ---------- */

  verseData(ref) {
    const m = String(ref).match(/(\d+):(\d+)(?:-(\d+))?/);
    if (!m) return { arabic: '', translation: '' };
    const s = +m[1], a1 = +m[2], a2 = m[3] ? +m[3] : a1;
    const ar = [], tr = [];
    for (let a = a1; a <= a2; a++) {
      const k = s + ':' + a;
      if (this.words && Array.isArray(this.words[k])) ar.push(this.words[k].join(' '));
      if (this.tr && this.tr[k]) tr.push(this.tr[k]);
    }
    return { arabic: ar.join(' ۝ '), translation: tr.join(' ') };
  }

  refChip(ref) {
    const first = String(ref).split('-')[0];
    const s = first.split(':')[0];
    return `<button data-ayah-ref="${this.esc(first)}" title="${this.esc(this.tt('th_open_ayah'))}"
      class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/60 text-xs font-semibold text-primary dark:text-sky-300 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
      ${this.esc(this.surahName(s))} <span class="text-gray-400 dark:text-gray-500 font-normal">${this.esc(this.num(ref))}</span> <span aria-hidden="true">↗</span></button>`;
  }

  verseHtml(ref, note) {
    const { arabic, translation } = this.verseData(ref);
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
        <div class="mb-2">${this.refChip(ref)}</div>
        <div class="ayah-arabic !text-2xl !leading-loose !border-b-0 !pb-0 !mb-2 text-gray-800 dark:text-gray-100" dir="rtl">${arabic || '…'}</div>
        ${translation ? `<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(translation)}</p>` : ''}
        ${note ? `<p class="mt-3 pt-3 border-t border-dashed border-gray-200 dark:border-gray-700 text-[0.95rem] leading-relaxed text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(note))}</p>` : ''}
      </div>`;
  }

  surahGroups(refs) {
    const by = new Map();
    for (const r of [...refs].sort((a, b) => this.refCmp(a, b))) {
      const s = Number(String(r).split(':')[0]);
      if (!by.has(s)) by.set(s, []);
      by.get(s).push(r);
    }
    return [...by.entries()].map(([s, list]) => ({ s, list }));
  }

  surahVersesHtml(id, s) {
    const d = this.data[id];
    const g = this.surahGroups(d.refs || []).find((x) => x.s === s);
    if (!g) return '';
    return `<div class="space-y-2 pt-2">${g.list.map((r) => {
      const { arabic, translation } = this.verseData(r);
      return `
        <div class="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
          <div class="mb-1">${this.refChip(r)}</div>
          <div class="ayah-arabic !text-xl !leading-loose !border-b-0 !pb-0 !mb-1 text-gray-800 dark:text-gray-100" dir="rtl">${arabic || '…'}</div>
          ${translation ? `<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(translation)}</p>` : ''}
        </div>`;
    }).join('')}</div>`;
  }

  /* ---------- hub ---------- */

  pageCard(p) {
    if (typeof p === 'object') {
      return `
        <button data-th-go="${this.esc(p.tab)}" class="text-start rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary hover:shadow-md transition">
          <div class="text-3xl mb-2">${p.emoji}</div>
          <div class="font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt(p.label))}</div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${this.esc(this.tt('th_names_card'))}</p>
        </button>`;
    }
    const d = this.data[p];
    const nAyat = d && d.refs ? d.refs.length : 0;
    const nSec = d && d.sections ? d.sections.length : 0;
    const nVid = d && d.videos ? d.videos.length : 0;
    const meta = [nAyat ? this.ttn('th_ayat_n', nAyat) : '', nSec ? this.ttn('th_sections_n', nSec) : '', nVid ? this.ttn('th_videos_n', nVid) : '']
      .filter(Boolean).join(' · ');
    return `
      <button data-th-go="${this.esc(p)}" class="text-start rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:border-primary hover:shadow-md transition">
        <div class="text-3xl mb-2">${THEME_EMOJI[p] || '📖'}</div>
        <div class="font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt(themeTitleKey(p)))}</div>
        ${d && d.tagline ? `<p class="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-snug" dir="auto">${this.esc(this.lc(d.tagline))}</p>` : ''}
        ${meta ? `<p class="text-xs text-gray-400 mt-2">${this.esc(meta)}</p>` : ''}
      </button>`;
  }

  renderHub(id, box) {
    const g = THEME_GROUPS.find((x) => x.id === id);
    box.innerHTML = `
      <div class="max-w-6xl mx-auto">
        <div class="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-5 mb-5 text-center">
          <div class="text-4xl mb-1">${g.emoji}</div>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt(g.label))}</h2>
          <p class="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">${this.esc(this.tt(g.intro))}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${g.pages.map((p) => this.pageCard(p)).join('')}
        </div>
      </div>`;
  }

  /* ---------- page ---------- */

  videoThumb(v) {
    if (v.ytId) return `https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg`;
    return v.thumb || '';
  }

  videoFrame(v) {
    const src = v.ytId
      ? `https://www.youtube-nocookie.com/embed/${v.ytId}?autoplay=1&rel=0`
      : `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(v.list || '')}&autoplay=1`;
    return `<iframe src="${src}" title="${this.esc(v.title)}" class="w-full aspect-video rounded-t-xl" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  }

  videosHtml(id, d) {
    const vids = d.videos || [];
    if (!vids.length) return '';
    return `
      <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">🎬 ${this.esc(this.tt('th_videos'))}</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
        ${vids.map((v, i) => `
          <div data-th-video-card class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden">
            <div data-th-video-frame>
              ${this.playing[id] === i ? this.videoFrame(v) : `
              <button data-th-video="${i}" class="relative block w-full aspect-video bg-gray-900 group" aria-label="${this.esc(this.tt('th_play_video'))}: ${this.esc(v.title)}">
                <img src="${this.esc(this.videoThumb(v))}" alt="" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:opacity-100">
                <span class="absolute inset-0 flex items-center justify-center"><span class="w-14 h-14 rounded-full bg-red-600/90 text-white text-2xl flex items-center justify-center shadow-lg">▶</span></span>
              </button>`}
            </div>
            <div class="p-3">
              <p class="text-sm font-medium text-gray-800 dark:text-gray-100 leading-snug" dir="auto">${this.esc(v.title)}</p>
              <div class="flex items-center justify-between gap-2 mt-1">
                ${v.channel ? `<span class="text-xs text-gray-400 truncate" dir="auto">${this.esc(v.channel)}</span>` : '<span></span>'}
                <a href="${this.esc(v.watch || '#')}" target="_blank" rel="noopener" class="text-xs text-primary dark:text-sky-300 hover:underline shrink-0">${this.esc(this.tt('th_on_youtube'))} ↗</a>
              </div>
            </div>
          </div>`).join('')}
      </div>
      <p class="text-xs text-gray-400 mb-4">${this.esc(this.tt('th_videos_note'))}</p>`;
  }

  readingHtml(d) {
    const list = d.reading || [];
    if (!list.length) return '';
    return `
      <h4 class="font-semibold text-gray-700 dark:text-gray-200 mb-2">📚 ${this.esc(this.tt('th_reading'))}</h4>
      <ul class="space-y-2 mb-4">
        ${list.map((r) => `
          <li><a href="${this.esc(r.url)}" target="_blank" rel="noopener" class="flex items-start gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 hover:border-primary">
            <span class="text-lg leading-none">🔗</span>
            <span class="min-w-0">
              <span class="block text-sm font-medium text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(r.title))}</span>
              <span class="block text-xs text-gray-400" dir="auto">${this.esc([r.author, r.site].filter(Boolean).join(' · '))}</span>
              ${r.note ? `<span class="block text-xs text-gray-500 dark:text-gray-400 mt-0.5" dir="auto">${this.esc(this.lc(r.note))}</span>` : ''}
            </span>
          </a></li>`).join('')}
      </ul>`;
  }

  hadithHtml(h) {
    return `
      <div class="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-900/10 p-4">
        <p class="text-[0.95rem] leading-relaxed text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(h.text))}</p>
        <p class="mt-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
          ${h.url ? `<a href="${this.esc(h.url)}" target="_blank" rel="noopener" class="hover:underline">${this.esc(h.src)}</a>` : this.esc(h.src)}${h.grade ? ` · ${this.esc(this.lc(h.grade))}` : ''}
        </p>
        ${h.note ? `<p class="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(h.note))}</p>` : ''}
      </div>`;
  }

  sectionHtml(sec, i) {
    const anchor = 'th-sec-' + (sec.id || i);
    return `
      <section id="${this.esc(anchor)}" class="scroll-mt-24 mb-8">
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-baseline gap-2">
          <span class="text-sm font-mono text-gray-400">${this.num(i + 1)}</span><span dir="auto">${this.esc(this.lc(sec.title))}</span>
        </h3>
        ${(sec.body || []).map((p) => `<p class="mb-3 leading-relaxed text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.lc(p))}</p>`).join('')}
        ${(sec.verses || []).length ? `<div class="space-y-3 mb-3">${sec.verses.map((v) => this.verseHtml(v.ref, v.note)).join('')}</div>` : ''}
        ${(sec.hadith || []).length ? `
          <p class="text-xs uppercase tracking-wide text-amber-700/80 dark:text-amber-300/80 mb-2 mt-4">${this.esc(this.tt('th_from_sunnah'))}</p>
          <div class="space-y-3">${sec.hadith.map((h) => this.hadithHtml(h)).join('')}</div>` : ''}
      </section>`;
  }

  renderPage(id, box) {
    const d = this.data[id];
    const secs = d.sections || [];
    const refs = d.refs || [];
    const groups = this.surahGroups(refs);
    const open = this.openSurahs[id] || new Set();
    const nHadith = secs.reduce((n, s) => n + (s.hadith || []).length, 0);
    const group = this.groupOf(id);
    const related = (d.related || []).filter((r) => this.isTheme(r));
    const stats = [
      secs.length ? this.ttn('th_sections_n', secs.length) : '',
      refs.length ? this.ttn('th_ayat_n', refs.length) : '',
      nHadith ? this.ttn('th_hadith_n', nHadith) : '',
      (d.videos || []).length ? this.ttn('th_videos_n', d.videos.length) : '',
    ].filter(Boolean);
    const hasRes = (d.videos || []).length || (d.reading || []).length;
    const chips = [
      ...secs.map((s, i) => [`th-sec-${s.id || i}`, this.lc(s.title)]),
      (d.practice || []).length ? ['th-practice', this.tt('th_living')] : null,
      refs.length ? ['th-all-ayat', this.tt('th_all_ayat')] : null,
      hasRes ? ['th-resources', this.tt('th_resources')] : null,
    ].filter(Boolean);

    box.innerHTML = `
      <article class="max-w-4xl mx-auto">
        ${group ? `<button data-th-go="${group.id}" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary mb-3">← ${group.emoji} ${this.esc(this.tt(group.label))}</button>` : ''}
        <header class="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-5 mb-5">
          <div class="flex items-start gap-3">
            <div class="text-4xl leading-none">${THEME_EMOJI[id] || '📖'}</div>
            <div class="min-w-0">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.tt(themeTitleKey(id)))}</h2>
              ${d.tagline ? `<p class="text-gray-600 dark:text-gray-300 mt-1" dir="auto">${this.esc(this.lc(d.tagline))}</p>` : ''}
              ${stats.length ? `<p class="text-xs text-gray-400 mt-2">${this.esc(stats.join(' · '))}</p>` : ''}
            </div>
          </div>
        </header>

        ${chips.length > 1 ? `
          <nav aria-label="${this.esc(this.tt('th_on_page'))}" class="mb-6">
            <p class="text-xs uppercase tracking-wide text-gray-400 mb-2">${this.esc(this.tt('th_on_page'))}</p>
            <div class="flex flex-wrap gap-2">
              ${chips.map(([a, label]) => `<button data-th-jump="${this.esc(a)}" class="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary" dir="auto">${this.esc(label)}</button>`).join('')}
            </div>
          </nav>` : ''}

        ${(d.intro || []).length ? `<div class="mb-8">${d.intro.map((p) => `<p class="mb-3 text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.lc(p))}</p>`).join('')}</div>`
          : `<p class="mb-6 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-900/40 p-4 text-sm text-sky-800 dark:text-sky-200">${this.esc(this.tt('th_preparing'))}</p>`}

        ${secs.map((s, i) => this.sectionHtml(s, i)).join('')}

        ${(d.practice || []).length ? `
          <section id="th-practice" class="scroll-mt-24 mb-8 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-900/10 p-5">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">🌱 ${this.esc(this.tt('th_living'))}</h3>
            <ul class="space-y-2">${d.practice.map((p) => `<li class="flex gap-2 leading-relaxed text-gray-700 dark:text-gray-200"><span class="text-emerald-600">✓</span><span dir="auto">${this.esc(this.lc(p))}</span></li>`).join('')}</ul>
          </section>` : ''}

        ${refs.length ? `
          <section id="th-all-ayat" class="scroll-mt-24 mb-8">
            <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">📖 ${this.esc(this.tt('th_all_ayat'))}</h3>
              <button data-th-all="${open.size ? 'close' : 'open'}" class="text-sm text-primary dark:text-sky-300 hover:underline">${this.esc(this.tt(open.size ? 'th_hide_all' : 'th_show_all'))}</button>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${this.esc(this.ttn('th_ayat_n', refs.length))} · ${this.esc(this.ttn('th_surahs_n', groups.length))}</p>
            <div class="space-y-2">
              ${groups.map((g) => `
                <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3">
                  <button data-th-surah="${g.s}" aria-expanded="${open.has(g.s)}" class="w-full flex items-center gap-2 text-start">
                    <span data-caret class="text-gray-400 w-3">${open.has(g.s) ? '▾' : '▸'}</span>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">${this.num(g.s)}. ${this.esc(this.surahName(g.s))}</span>
                    <span class="ms-auto text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300">${this.esc(this.ttn('th_ayat_n', g.list.length))}</span>
                  </button>
                  <div class="flex flex-wrap gap-1.5 mt-2">${g.list.map((r) => `<button data-ayah-ref="${r}" class="text-xs font-mono px-2 py-1 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-primary hover:text-white">${this.num(r)}</button>`).join('')}</div>
                  <div data-th-surah-body="${g.s}">${open.has(g.s) ? this.surahVersesHtml(id, g.s) : ''}</div>
                </div>`).join('')}
            </div>
          </section>` : ''}

        ${hasRes ? `
          <section id="th-resources" class="scroll-mt-24 mb-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">🧰 ${this.esc(this.tt('th_resources'))}</h3>
            ${this.videosHtml(id, d)}
            ${this.readingHtml(d)}
          </section>` : ''}

        ${related.length ? `
          <section class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">${this.esc(this.tt('th_related'))}</h3>
            <div class="flex flex-wrap gap-2">${related.map((r) => `<button data-th-go="${r}" class="px-3 py-1.5 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary">${THEME_EMOJI[r]} ${this.esc(this.tt(themeTitleKey(r)))}</button>`).join('')}</div>
          </section>` : ''}

        ${(d.sources || []).length ? `
          <footer class="text-xs text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3 mb-6">
            <span class="font-semibold">${this.esc(this.tt('th_sources'))}:</span> ${this.esc(d.sources.join(' · '))}
          </footer>` : ''}
      </article>`;
  }
}

var themePages;
(window.LQ && LQ.ready ? LQ.ready : function (f) { document.addEventListener('DOMContentLoaded', f); })(() => {
  themePages = new ThemePages();
  window.themePages = themePages;
});
