/**
 * Tadabbur (تدبر) — Reflect on the Qur'an.
 *
 * A full, browsable index of EVERY ayah that carries tadabbur (reflection)
 * content in the app. The verse pool + themed groupings live in js/ponder.js
 * (PONDER_REFS / PONDER_THEMES / PONDER_PROMPT_KEYS); this module reuses those
 * globals so the daily "Ayah to Ponder" card and this module never drift apart.
 *
 * Renders into #tadabbur-container (tab "tadabbur"). Arabic comes from the word
 * corpus (QuranData.getQuranWords) and the translation line from the current UI
 * language's offline file (data/translations/<lang>.json, English fallback) —
 * two fetches total, so all ~200 verses render from memory. Filter by theme,
 * search by surah/reference, open any verse in the modal, or open a whole theme
 * in the sitewide ayah timeline.
 */

// In-module en-first fallbacks for the few strings not in translations.js.
const TADABBUR_I18N = {
  tadabbur_intro: {
    en: 'Every reflection-worthy ayah in one place. Filter by theme, search, and open any verse to ponder its meaning.',
    bn: 'এক জায়গায় সব চিন্তা-উদ্দীপক আয়াত। থিম অনুযায়ী বাছুন, খুঁজুন এবং যেকোনো আয়াত খুলে গভীরভাবে ভাবুন।',
    ar: 'كل آية جديرة بالتدبر في مكان واحد. صفِّ حسب الموضوع، وابحث، وافتح أي آية لتتدبر معناها.',
    ur: 'ہر قابلِ تدبر آیت ایک جگہ۔ موضوع کے مطابق چھانٹیں، تلاش کریں اور کوئی بھی آیت کھول کر اس کے معنی پر غور کریں۔',
    id: 'Setiap ayat yang layak direnungkan dalam satu tempat. Saring menurut tema, cari, dan buka ayat mana pun untuk merenungkan maknanya.',
    tr: 'Tefekküre değer her ayet tek bir yerde. Temaya göre süzün, arayın ve anlamını düşünmek için herhangi bir ayeti açın.',
    fr: 'Chaque verset propice à la réflexion au même endroit. Filtrez par thème, recherchez et ouvrez un verset pour en méditer le sens.',
    es: 'Cada versículo digno de reflexión en un solo lugar. Filtra por tema, busca y abre cualquier versículo para meditar su significado.',
    ru: 'Каждый достойный размышления аят в одном месте. Фильтруйте по теме, ищите и открывайте любой аят, чтобы поразмыслить над его смыслом.',
    fa: 'هر آیهٔ درخور تدبر در یک جا. بر اساس موضوع فیلتر کنید، جستجو کنید و هر آیه را برای تأمل در معنایش باز کنید.',
    hi: 'हर चिंतन-योग्य आयत एक ही जगह। विषय के अनुसार छाँटें, खोजें और किसी भी आयत को खोलकर उसके अर्थ पर विचार करें।',
    de: 'Jeder zum Nachdenken anregende Vers an einem Ort. Nach Thema filtern, suchen und einen Vers öffnen, um über seine Bedeutung nachzudenken.',
    ms: 'Setiap ayat yang wajar direnung di satu tempat. Tapis mengikut tema, cari, dan buka mana-mana ayat untuk merenung maknanya.',
    zh: '所有值得深思的经文汇于一处。按主题筛选、搜索，并打开任意经文以思索其含义。',
    ja: '熟考に値するすべての節を一か所に。テーマで絞り込み、検索し、どの節も開いてその意味を熟考できます。'
  },
  tadabbur_search_ph: {
    en: 'Search surah or reference…', bn: 'সূরা বা রেফারেন্স খুঁজুন…', ar: 'ابحث عن سورة أو مرجع…',
    ur: 'سورہ یا حوالہ تلاش کریں…', id: 'Cari surah atau rujukan…', tr: 'Sure veya referans ara…',
    fr: 'Rechercher une sourate ou une référence…', es: 'Buscar sura o referencia…',
    ru: 'Искать суру или ссылку…', fa: 'جستجوی سوره یا مرجع…', hi: 'सूरह या संदर्भ खोजें…',
    de: 'Sure oder Referenz suchen…', ms: 'Cari surah atau rujukan…', zh: '搜索苏拉或章节号…',
    ja: 'スーラや参照を検索…'
  },
  tadabbur_none: {
    en: 'No verses match your search.', bn: 'আপনার অনুসন্ধানে কোনো আয়াত মেলেনি।', ar: 'لا توجد آيات تطابق بحثك.',
    ur: 'آپ کی تلاش سے کوئی آیت میل نہیں کھاتی۔', id: 'Tidak ada ayat yang cocok dengan pencarian Anda.',
    tr: 'Aramanızla eşleşen ayet yok.', fr: 'Aucun verset ne correspond à votre recherche.',
    es: 'Ningún versículo coincide con tu búsqueda.', ru: 'Нет аятов, соответствующих вашему запросу.',
    fa: 'هیچ آیه‌ای با جستجوی شما مطابقت ندارد.', hi: 'आपकी खोज से कोई आयत मेल नहीं खाती।',
    de: 'Keine Verse entsprechen Ihrer Suche.', ms: 'Tiada ayat sepadan dengan carian anda.',
    zh: '没有与您的搜索匹配的经文。', ja: '検索に一致する節はありません。'
  }
};

class Tadabbur {
  constructor() {
    this.container = document.getElementById('tadabbur-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this.words = null;   // { "s:a": [tokens] }
    this.tr = null;      // { "s:a": "translation" }
    this.trLang = null;  // language the loaded translation dict is for
    this.loaded = false;
    this.theme = null;   // active theme id (null = all)
    this.query = '';

    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId === 'tadabbur') this.ensureLoaded(); });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') {
        this.language = e.detail.value;
        if (this.loaded) this.reloadTranslations();
      }
    });

    this.container.addEventListener('click', (e) => this.onClick(e));
    this.container.addEventListener('input', (e) => {
      if (e.target && e.target.id === 'tad-search') { this.query = e.target.value || ''; this.renderGrid(); }
    });
  }

  /* ---------- i18n helpers ---------- */
  tt(key) { return t(key, this.language); }
  L(key) {
    const s = t(key, this.language);
    if (s !== key) return s;
    const fb = TADABBUR_I18N[key];
    return fb ? (fb[this.language] || fb.en) : key;
  }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  surahName(n) { return (typeof getSurahName === 'function') ? getSurahName(parseInt(n, 10), this.language) : String(n); }
  themeLabel(id) {
    const o = (typeof PONDER_THEMES !== 'undefined') ? PONDER_THEMES[id] : null;
    return o ? (o[this.language] || o.en) : '';
  }

  /* ---------- data ---------- */
  refs() { return (typeof PONDER_REFS !== 'undefined') ? PONDER_REFS : []; }
  themes() { return (typeof PONDER_THEMES !== 'undefined') ? PONDER_THEMES : {}; }

  /** Unique, order-preserving pool for the active theme (or all). */
  pool() {
    const raw = (this.theme && this.themes()[this.theme]) ? this.themes()[this.theme].refs : this.refs();
    const seen = new Set(), out = [];
    for (const r of raw) { if (!seen.has(r)) { seen.add(r); out.push(r); } }
    return out;
  }

  /** Which theme emojis a ref belongs to (for the small tag on each card). */
  themeMap() {
    if (this._themeMap) return this._themeMap;
    const map = {};
    const th = this.themes();
    for (const id of Object.keys(th)) {
      for (const r of th[id].refs) { (map[r] = map[r] || []).push(th[id].emoji); }
    }
    this._themeMap = map;
    return map;
  }

  /** Arabic + translation for a ref that may span a range ("2:155-157"). */
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

  async loadTranslations(lang) {
    try {
      const d = await fetch(`data/translations/${lang}.json`).then(r => (r.ok ? r.json() : null));
      return d;
    } catch (_) { return null; }
  }

  async ensureLoaded() {
    if (this.loaded) { this.render(); return; }
    this.container.innerHTML = `<div class="text-center py-16 text-gray-400">${this.tt('loading')}</div>`;
    try {
      const [wd, tr] = await Promise.all([
        (typeof QuranData !== 'undefined' && QuranData.getQuranWords)
          ? QuranData.getQuranWords()
          : fetch('data/quran-words.json').then(r => r.json()),
        this.loadTranslations(this.language)
      ]);
      this.words = wd;
      this.tr = tr || await this.loadTranslations('en');
      this.trLang = tr ? this.language : 'en';
    } catch (e) {
      this.container.innerHTML = `<div class="text-center py-16 text-red-500">${this.tt('error')}</div>`;
      return;
    }
    this.loaded = true;
    this.render();
  }

  /** Language changed: swap only the translation dict, then re-render if visible. */
  async reloadTranslations() {
    const showing = !!document.getElementById('tad-grid');
    let d = await this.loadTranslations(this.language);
    if (!d && this.language !== 'en') d = await this.loadTranslations('en');
    this.tr = d;
    this.trLang = d ? this.language : 'en';
    if (showing) this.render();
  }

  /* ---------- interactions ---------- */
  onClick(e) {
    const themeBtn = e.target.closest('[data-tad-theme]');
    if (themeBtn) {
      const id = themeBtn.getAttribute('data-tad-theme');
      this.theme = (id && this.themes()[id]) ? id : null;
      this.render();
      return;
    }
    const refBtn = e.target.closest('[data-tad-ref]');
    if (refBtn && typeof ayahModal !== 'undefined' && ayahModal) {
      try { ayahModal.open(refBtn.getAttribute('data-tad-ref')); } catch (_) { /* ignore */ }
      return;
    }
    if (e.target.closest('[data-tad-timeline]') && typeof ayahTimeline !== 'undefined' && ayahTimeline) {
      const id = this.theme;
      const th = id ? this.themes()[id] : null;
      ayahTimeline.open({
        title: th ? (this.themeLabel(id)) : this.L('tadabbur_title'),
        subtitle: '', refs: (th ? th.refs : this.pool())
      });
      return;
    }
    if (e.target.closest('[data-tad-random]') && typeof ayahModal !== 'undefined' && ayahModal) {
      const p = this.pool();
      if (p.length) { try { ayahModal.open(p[Math.floor(Math.random() * p.length)].split('-')[0]); } catch (_) {} }
      return;
    }
  }

  /* ---------- rendering ---------- */
  themeBarHtml() {
    const chip = (id, label, active) => `
      <button data-tad-theme="${this.esc(id)}"
        class="px-3 py-1 rounded-full text-xs font-medium border transition-colors ${active
          ? 'bg-primary text-white border-primary'
          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">${label}</button>`;
    const chips = [chip('', '🌐 ' + this.esc(this.tt('ponder_all') === 'ponder_all' ? 'All' : this.tt('ponder_all')), !this.theme)]
      .concat(Object.keys(this.themes()).map(id =>
        chip(id, this.themes()[id].emoji + ' ' + this.esc(this.themeLabel(id)), this.theme === id)));
    return `<div class="flex flex-wrap gap-2">${chips.join('')}</div>`;
  }

  cardHtml(ref, promptSeed) {
    const first = String(ref).split('-')[0];
    const [s] = first.split(':');
    const { arabic, translation } = this.verseData(ref);
    const tags = (this.themeMap()[ref] || []).slice(0, 4).join(' ');
    // One stable reflection prompt per verse.
    let prompt = '';
    if (typeof PONDER_PROMPT_KEYS !== 'undefined' && PONDER_PROMPT_KEYS.length) {
      const key = PONDER_PROMPT_KEYS[promptSeed % PONDER_PROMPT_KEYS.length];
      const s1 = t(key, this.language);
      prompt = (s1 !== key) ? s1 : t('ponder_q' + ((promptSeed % 4) + 1), this.language);
    }
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between gap-2 mb-2">
          <button data-tad-ref="${this.esc(first)}"
            class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/60 text-xs font-semibold text-primary dark:text-sky-300 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            ${this.esc(this.surahName(s))} <span class="text-gray-400 dark:text-gray-500 font-normal">${this.esc(ref)}</span> <span aria-hidden="true">↗</span>
          </button>
          ${tags ? `<span class="text-sm shrink-0" title="themes">${tags}</span>` : ''}
        </div>
        <div class="ayah-arabic !text-xl !leading-loose !border-b-0 !pb-0 mb-2 text-gray-800 dark:text-gray-100" dir="rtl">${arabic || '…'}</div>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3" dir="auto">${this.esc(translation)}</p>
        ${prompt ? `<p class="flex gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700/60"><span aria-hidden="true">💭</span><span dir="auto">${this.esc(prompt)}</span></p>` : ''}
      </div>`;
  }

  gridHtml() {
    const q = this.query.trim().toLowerCase();
    let pool = this.pool();
    if (q) {
      pool = pool.filter(ref => {
        const first = String(ref).split('-')[0];
        const [s] = first.split(':');
        return String(ref).toLowerCase().includes(q) || this.surahName(s).toLowerCase().includes(q);
      });
    }
    if (!pool.length) {
      return `<p class="col-span-full text-center py-12 text-gray-400">${this.esc(this.L('tadabbur_none'))}</p>`;
    }
    return pool.map((ref, i) => this.cardHtml(ref, i)).join('');
  }

  countLabel() {
    const q = this.query.trim().toLowerCase();
    let n = this.pool().length;
    if (q) {
      n = this.pool().filter(ref => {
        const first = String(ref).split('-')[0];
        const [s] = first.split(':');
        return String(ref).toLowerCase().includes(q) || this.surahName(s).toLowerCase().includes(q);
      }).length;
    }
    const label = this.tt('mt_group_verses_label');
    return `${n} ${label === 'mt_group_verses_label' ? 'verses' : label}`;
  }

  renderGrid() {
    const grid = document.getElementById('tad-grid');
    if (grid) grid.innerHTML = this.gridHtml();
    const cnt = document.getElementById('tad-count');
    if (cnt) cnt.textContent = this.countLabel();
  }

  render() {
    const inp = 'w-full sm:w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40';
    const timelineBtn = this.theme ? `
      <button data-tad-timeline
        class="px-3 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">
        🕐 ${this.esc(this.tt('mt_group_open_all'))}
      </button>` : '';

    this.container.innerHTML = `
      <div class="w-full space-y-5">
        <div class="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border border-indigo-100 dark:border-gray-700 p-5">
          <div class="flex items-center gap-2 mb-1"><span class="text-2xl">🌅</span>
            <h2 class="text-lg font-bold text-gray-800 dark:text-gray-100">${this.esc(this.L('tadabbur_title'))}</h2></div>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${this.esc(this.L('tadabbur_intro'))}</p>
        </div>

        <div>${this.themeBarHtml()}</div>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20"><span id="tad-count">${this.countLabel()}</span></span>
            <button data-tad-random
              class="px-3 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">
              ✨ ${this.esc(this.tt('ponder_random') === 'ponder_random' ? 'Random' : this.tt('ponder_random'))}
            </button>
            ${timelineBtn}
          </div>
          <input id="tad-search" type="search" dir="auto" class="${inp}" placeholder="${this.esc(this.L('tadabbur_search_ph'))}" value="${this.esc(this.query)}">
        </div>

        <div id="tad-grid" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">${this.gridHtml()}</div>
      </div>`;
  }
}

let tadabbur;
document.addEventListener('DOMContentLoaded', () => { tadabbur = new Tadabbur(); });
