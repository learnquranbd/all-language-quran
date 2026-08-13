/**
 * Tadabbur (تدبر) — Reflect on the Qur'an.
 *
 * A full, browsable index of EVERY ayah that carries tadabbur (reflection)
 * content in the app. The verse pool + themed groupings live in js/ponder.js
 * (PONDER_REFS / PONDER_THEMES / PONDER_PROMPT_KEYS); the per-ayah reflection
 * notes live in js/tadabbur-data.js (TADABBUR_NOTES) — reflection + points to
 * ponder + a practical takeaway, in en/bn (other languages fall back to en).
 *
 * Renders into #tadabbur-container (tab "tadabbur"). Arabic comes from the word
 * corpus (QuranData.getQuranWords) and the translation line from the current UI
 * language's offline file (data/translations/<lang>.json, English fallback).
 * Two view modes — Grid and Timeline — plus theme filters and search.
 */

// In-module en-first fallbacks for the few strings not in translations.js.
const TADABBUR_I18N = {
  tadabbur_intro: {
    en: 'Every reflection-worthy ayah in one place — each with a short reflection, points to ponder and a practical takeaway. Filter by theme, search, or switch to timeline view.',
    bn: 'এক জায়গায় সব চিন্তা-উদ্দীপক আয়াত — প্রতিটির সাথে সংক্ষিপ্ত অনুধাবন, ভাবনার বিষয় ও একটি বাস্তব শিক্ষা। থিম অনুযায়ী বাছুন, খুঁজুন বা টাইমলাইন ভিউতে যান।',
    ar: 'كل آية جديرة بالتدبر في مكان واحد — مع تأمل قصير ونقاط للتفكر ودرس عملي. صفِّ حسب الموضوع، أو ابحث، أو انتقل إلى العرض الزمني.',
    ur: 'ہر قابلِ تدبر آیت ایک جگہ — ہر ایک کے ساتھ مختصر غور، سوچنے کی باتیں اور ایک عملی سبق۔ موضوع سے چھانٹیں، تلاش کریں یا ٹائم لائن پر جائیں۔',
    id: 'Setiap ayat yang layak direnungkan dalam satu tempat — dengan renungan singkat, poin untuk direnungkan, dan pelajaran praktis. Saring menurut tema, cari, atau beralih ke tampilan linimasa.',
    tr: 'Tefekküre değer her ayet tek yerde — kısa bir tefekkür, düşünülecek noktalar ve pratik bir çıkarımla. Temaya göre süzün, arayın veya zaman çizelgesine geçin.',
    fr: 'Chaque verset propice à la réflexion au même endroit — avec une courte réflexion, des points de méditation et un enseignement pratique. Filtrez par thème, recherchez ou passez en vue chronologie.',
    es: 'Cada versículo digno de reflexión en un solo lugar — con una breve reflexión, puntos para meditar y una enseñanza práctica. Filtra por tema, busca o cambia a la vista de cronología.',
    ru: 'Каждый достойный размышления аят в одном месте — с кратким размышлением, вопросами для раздумья и практическим выводом. Фильтруйте по теме, ищите или переключитесь на хронологию.',
    fa: 'هر آیهٔ درخور تدبر در یک جا — همراه با تأملی کوتاه، نکاتی برای اندیشیدن و درسی عملی. بر اساس موضوع فیلتر کنید، جستجو کنید یا به نمای خط زمانی بروید.',
    hi: 'हर चिंतन-योग्य आयत एक ही जगह — प्रत्येक के साथ संक्षिप्त चिंतन, विचारणीय बिंदु और एक व्यावहारिक सीख। विषय से छाँटें, खोजें या टाइमलाइन दृश्य पर जाएँ।',
    de: 'Jeder zum Nachdenken anregende Vers an einem Ort — mit einer kurzen Reflexion, Denkanstößen und einer praktischen Kernaussage. Nach Thema filtern, suchen oder zur Zeitleiste wechseln.',
    ms: 'Setiap ayat yang wajar direnung di satu tempat — dengan renungan ringkas, perkara untuk direnung dan pengajaran praktikal. Tapis mengikut tema, cari, atau tukar ke paparan garis masa.',
    zh: '所有值得深思的经文汇于一处——每节都附有简短的深思、思考要点和实用启示。按主题筛选、搜索，或切换到时间线视图。',
    ja: '熟考に値するすべての節を一か所に——各節に短い熟考、考える点、実践的な学びを添えて。テーマで絞り込み、検索し、タイムライン表示に切り替えられます。'
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
  },
  tad_reflection: {
    en: 'Reflection', bn: 'অনুধাবন', ar: 'تأمل', ur: 'غور و فکر', id: 'Renungan', tr: 'Tefekkür',
    fr: 'Réflexion', es: 'Reflexión', ru: 'Размышление', fa: 'تأمل', hi: 'चिंतन', de: 'Reflexion',
    ms: 'Renungan', zh: '深思', ja: '熟考'
  },
  tad_points: {
    en: 'Points to ponder', bn: 'ভাবনার বিষয়', ar: 'نقاط للتأمل', ur: 'غور کرنے کی باتیں',
    id: 'Poin renungan', tr: 'Düşünülecek noktalar', fr: 'Points de méditation', es: 'Puntos para reflexionar',
    ru: 'Над чем задуматься', fa: 'نکات تأمل', hi: 'विचारणीय बिंदु', de: 'Denkanstöße',
    ms: 'Perkara untuk direnung', zh: '思考要点', ja: '考える点'
  },
  tad_lesson: {
    en: 'Takeaway', bn: 'শিক্ষা', ar: 'الدرس المستفاد', ur: 'سبق', id: 'Pelajaran', tr: 'Çıkarım',
    fr: 'À retenir', es: 'Enseñanza', ru: 'Вывод', fa: 'درس', hi: 'सीख', de: 'Kernaussage',
    ms: 'Pengajaran', zh: '启示', ja: '学び'
  },
  tad_view_grid: {
    en: 'Grid', bn: 'গ্রিড', ar: 'شبكة', ur: 'گرڈ', id: 'Kotak', tr: 'Izgara', fr: 'Grille',
    es: 'Cuadrícula', ru: 'Сетка', fa: 'شبکه', hi: 'ग्रिड', de: 'Raster', ms: 'Grid', zh: '网格', ja: 'グリッド'
  },
  tad_view_timeline: {
    en: 'Timeline', bn: 'টাইমলাইন', ar: 'الخط الزمني', ur: 'ٹائم لائن', id: 'Linimasa', tr: 'Zaman çizelgesi',
    fr: 'Chronologie', es: 'Cronología', ru: 'Хронология', fa: 'خط زمانی', hi: 'टाइमलाइन', de: 'Zeitleiste',
    ms: 'Garis masa', zh: '时间线', ja: 'タイムライン'
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
    this.view = 'grid';  // 'grid' | 'timeline'

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
  /**
   * Content-string resolver for the other 13 languages. Note prose is authored
   * as en/bn only; every non-Bangla language previously fell straight through
   * to English. Consult the offline content-i18n dictionary first, exactly as
   * the Seerah and Sahaba modules do, and keep English as the last resort.
   */
  ci(en) {
    if (!en) return '';
    if (typeof CI18N === 'undefined') return en;
    const tr = CI18N.tr(this.language, en);
    return tr || en;
  }
  themeLabel(id) {
    const o = (typeof PONDER_THEMES !== 'undefined') ? PONDER_THEMES[id] : null;
    if (!o) return '';
    return o[this.language] || this.ci(o.en);
  }

  /* ---------- data ---------- */
  refs() { return (typeof PONDER_REFS !== 'undefined') ? PONDER_REFS : []; }
  themes() { return (typeof PONDER_THEMES !== 'undefined') ? PONDER_THEMES : {}; }
  notes() { return (typeof TADABBUR_NOTES !== 'undefined') ? TADABBUR_NOTES : {}; }
  note(ref) { return this.notes()[ref] || null; }
  /** Pick en/bn field from a note; other languages resolve via content-i18n. */
  noteText(n, base) {
    if (this.language === 'bn' && n[base + 'Bn']) return n[base + 'Bn'];
    return this.ci(n[base + 'En'] || '');
  }
  /** Same rule as noteText, for a bare {en, bn} pair (article headings/paragraphs). */
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    return this.ci(o.en || '');
  }

  notePoints(n) {
    if (this.language === 'bn' && Array.isArray(n.pointsBn) && n.pointsBn.length) return n.pointsBn;
    return (n.pointsEn || []).map(p => this.ci(p));
  }

  /** Unique, order-preserving pool for the active theme (or all). */
  pool() {
    const raw = (this.theme && this.themes()[this.theme]) ? this.themes()[this.theme].refs : this.refs();
    const seen = new Set(), out = [];
    for (const r of raw) { if (!seen.has(r)) { seen.add(r); out.push(r); } }
    return out;
  }

  /** Pool after the search filter. */
  filtered() {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.pool();
    return this.pool().filter(ref => {
      const first = String(ref).split('-')[0];
      const [s] = first.split(':');
      return String(ref).toLowerCase().includes(q) || this.surahName(s).toLowerCase().includes(q);
    });
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
    const viewBtn = e.target.closest('[data-tad-view]');
    if (viewBtn) {
      const v = viewBtn.getAttribute('data-tad-view');
      if (v === 'grid' || v === 'timeline') { this.view = v; this.render(); }
      return;
    }
    const refBtn = e.target.closest('[data-tad-ref]');
    if (refBtn && typeof ayahModal !== 'undefined' && ayahModal) {
      try { ayahModal.open(refBtn.getAttribute('data-tad-ref')); } catch (_) { /* ignore */ }
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
    const allLabel = this.tt('ponder_all') === 'ponder_all' ? 'All' : this.tt('ponder_all');
    const chips = [chip('', '🌐 ' + this.esc(allLabel), !this.theme)]
      .concat(Object.keys(this.themes()).map(id =>
        chip(id, this.themes()[id].emoji + ' ' + this.esc(this.themeLabel(id)), this.theme === id)));
    return `<div class="flex flex-wrap gap-2">${chips.join('')}</div>`;
  }

  /** The reflection / points / takeaway block for a verse (or a generic prompt). */
  detailHtml(ref, seed) {
    const n = this.note(ref);
    if (n) {
      const refl = this.noteText(n, 'reflection');
      const lesson = this.noteText(n, 'lesson');
      const pts = this.notePoints(n);
      const points = pts.length ? `
        <div class="mt-2">
          <p class="text-[11px] uppercase tracking-wide font-semibold text-gray-400 mb-1">${this.esc(this.L('tad_points'))}</p>
          <ul class="space-y-1">
            ${pts.map(p => `<li class="flex gap-2 text-xs text-gray-600 dark:text-gray-300"><span aria-hidden="true">💭</span><span dir="auto">${this.esc(p)}</span></li>`).join('')}
          </ul>
        </div>` : '';
      const take = lesson ? `
        <p class="mt-2 flex gap-2 text-xs text-emerald-700 dark:text-emerald-300"><span aria-hidden="true">🎯</span><span dir="auto"><span class="font-semibold">${this.esc(this.L('tad_lesson'))}:</span> ${this.esc(lesson)}</span></p>` : '';
      /* A verse with a long-form exposition gets a collapsed opener. Collapsed
       * matters: this list paints every card in one pass, and the articles are
       * a large file — it must not be fetched because a tab was opened. The
       * index (js/article-index.js) is what makes the control appear only where
       * an article actually exists, without downloading anything to find out. */
      const article = (typeof LQArticle !== 'undefined' && LQArticle && LQArticle.has('tadabbur', ref))
        ? LQArticle.html('tadabbur', ref, {
          lc: (x) => this.lc(x),
          esc: (s) => this.esc(s),
          title: this.L('tad_article'),
          open: false,
          onLoad: () => this.render(),
        })
        : '';
      return `
        <div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/60 text-start">
          <p class="text-[11px] uppercase tracking-wide font-semibold text-primary/80 mb-1">🧭 ${this.esc(this.L('tad_reflection'))}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(refl)}</p>
          ${points}
          ${take}
          ${article ? `<div class="mt-3">${article}</div>` : ''}
        </div>`;
    }
    // Fallback: a single generic prompt (should be rare — all PONDER_REFS covered).
    let prompt = '';
    if (typeof PONDER_PROMPT_KEYS !== 'undefined' && PONDER_PROMPT_KEYS.length) {
      const key = PONDER_PROMPT_KEYS[seed % PONDER_PROMPT_KEYS.length];
      const s1 = t(key, this.language);
      prompt = (s1 !== key) ? s1 : t('ponder_q' + ((seed % 4) + 1), this.language);
    }
    return prompt ? `<p class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/60 flex gap-2 text-xs text-gray-500 dark:text-gray-400 text-start"><span aria-hidden="true">💭</span><span dir="auto">${this.esc(prompt)}</span></p>` : '';
  }

  /** Shared header chip + Arabic + translation for a verse. */
  verseHeadHtml(ref) {
    const first = String(ref).split('-')[0];
    const [s] = first.split(':');
    const { arabic, translation } = this.verseData(ref);
    const tags = (this.themeMap()[ref] || []).slice(0, 4).join(' ');
    return `
      <div class="flex items-center justify-between gap-2 mb-2">
        <button data-tad-ref="${this.esc(first)}"
          class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700/60 text-xs font-semibold text-primary dark:text-sky-300 hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          ${this.esc(this.surahName(s))} <span class="text-gray-400 dark:text-gray-500 font-normal">${this.esc(ref)}</span> <span aria-hidden="true">↗</span>
        </button>
        ${tags ? `<span class="text-sm shrink-0" title="themes">${tags}</span>` : ''}
      </div>
      <div class="ayah-arabic !text-xl !leading-loose !border-b-0 !pb-0 mb-2 text-gray-800 dark:text-gray-100" dir="rtl">${arabic || '…'}</div>
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(translation)}</p>`;
  }

  cardHtml(ref, seed) {
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
        ${this.verseHeadHtml(ref)}
        ${this.detailHtml(ref, seed)}
      </div>`;
  }

  timelineItemHtml(ref, seed) {
    return `
      <li class="relative pl-5 pb-6 border-l-2 border-primary/25 ml-2 last:pb-1">
        <span class="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary/70 border-2 border-white dark:border-gray-800" aria-hidden="true"></span>
        ${this.verseHeadHtml(ref)}
        ${this.detailHtml(ref, seed)}
      </li>`;
  }

  itemsHtml() {
    const pool = this.filtered();
    if (!pool.length) {
      return `<p class="text-center py-12 text-gray-400">${this.esc(this.L('tadabbur_none'))}</p>`;
    }
    if (this.view === 'timeline') {
      return `<ol class="list-none m-0 p-0">${pool.map((r, i) => this.timelineItemHtml(r, i)).join('')}</ol>`;
    }
    return pool.map((r, i) => this.cardHtml(r, i)).join('');
  }

  gridClass() { return this.view === 'grid' ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-3' : ''; }

  countLabel() {
    const n = this.filtered().length;
    const label = this.tt('mt_group_verses_label');
    return `${n} ${label === 'mt_group_verses_label' ? 'verses' : label}`;
  }

  renderGrid() {
    const grid = document.getElementById('tad-grid');
    if (grid) { grid.className = this.gridClass(); grid.innerHTML = this.itemsHtml(); }
    const cnt = document.getElementById('tad-count');
    if (cnt) cnt.textContent = this.countLabel();
  }

  viewToggleHtml() {
    const btn = (v, emoji, label) => `
      <button data-tad-view="${v}"
        class="px-3 py-1.5 text-sm font-medium transition-colors ${this.view === v
          ? 'bg-primary text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">
        ${emoji} ${this.esc(this.L(label))}
      </button>`;
    return `
      <div class="inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
        ${btn('grid', '▦', 'tad_view_grid')}${btn('timeline', '🕐', 'tad_view_timeline')}
      </div>`;
  }

  render() {
    const inp = 'w-full sm:w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40';

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
            ${this.viewToggleHtml()}
          </div>
          <input id="tad-search" type="search" dir="auto" class="${inp}" placeholder="${this.esc(this.L('tadabbur_search_ph'))}" value="${this.esc(this.query)}">
        </div>

        <div id="tad-grid" class="${this.gridClass()}">${this.itemsHtml()}</div>
      </div>`;
  }
}

let tadabbur;
(window.LQ && LQ.ready ? LQ.ready : function(f){document.addEventListener("DOMContentLoaded",f);})(() => { tadabbur = new Tadabbur(); });
