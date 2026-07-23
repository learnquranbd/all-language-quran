/**
 * Word-Repetition analysis (سূরার শব্দ পুনরাবৃত্তি — হুবুহু | মৌলিক).
 *
 * For a chosen surah (whole) or a single ayah, list how often each word repeats:
 *   • Exact (হুবুহু)  — identical normalized wording, from data/quran-tokens.json.
 *   • Root  (মৌলিক)  — shared triliteral root, from data/roots.json (root → refs).
 * Tap a word to see every verse it occurs in; tap a verse to open it in Reading.
 *
 * Renders into #wordrepeat-container (tab "wordrepeat").
 */

class WordRepeat {
  constructor() {
    this.container = document.getElementById('wordrepeat-container');
    if (!this.container) return;

    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? appSettings.get('language') : 'en';
    this.tokens = null;   // { "s:a": [normalized tokens] }
    this.roots = null;    // { root: ["s:a:w", ...] }
    this.surah = 1;
    this.scope = 'surah'; // 'surah' | 'ayah'
    this.ayah = 1;
    this.type = 'exact';  // 'exact' | 'root'
    this.onlyRepeated = false;   // show ALL words by default (repeated + singles)
    this.openTerm = null;
    this.loaded = false;
    this._ayahAudio = null;
    this.wordIndex = null;       // normalized word -> [s:a:w] globally (Quran-wide exact counts)
    this._meaning = {};          // "surah:lang" -> { normalizedToken: meaning }
    this._rootMeaning = {};      // "surah:lang" -> { root: meaning } (WBW of first occurrence)
    this._metaToken = 0;
    this.openVerses = new Set(); // refs shown inline — several can be open at once
    this.qOpen = new Set();      // terms whose Quran-wide occurrence list is expanded
    this._verseCache = {};       // "ref:lang" -> fetched verse (avoids refetch on re-render)
    this.openVerseWord = null;   // the word to highlight in inline verses

    // Result controls (enrichments) — live over the computed term list
    this.sortBy = 'count';       // 'count' | 'first' | 'alpha'
    this.minCount = 1;           // hide terms repeated fewer than this many times
    this.filterText = '';        // live text filter over term + meaning + ref

    // Audio-repetition trainer (enrichment): replay an ayah N times at an
    // adjustable playback speed for memorization. Settings persist; a session
    // counter tallies completed reps. Word-audio taps use the same speed.
    this.play = this.loadPlay(); // { reps, speed }
    this._repTotal = 0;          // reps requested for the current run
    this._repLeft = 0;           // reps remaining in the current run
    this._repeating = false;     // guards the pause-listener during a rep restart
    this._audioMode = null;      // 'ayah' | 'word' — reps/counter apply to 'ayah' only
    this.sessionReps = 0;        // ayah reps completed since load

    // Local i18n fallback for enrichment keys (translations.js is read-only here).
    // tt() prefers the global dictionary and only falls back to this map.
    this.i18n = {
      en: {
        wr_sort: 'Sort', wr_sort_count: 'Most repeated', wr_sort_first: 'First appearance',
        wr_sort_alpha: 'Alphabetical', wr_min_count: 'Min ×', wr_filter_ph: 'Filter words…',
        wr_copy_list: 'Copy list', wr_top_words: 'Top repeated words', wr_overview: 'Overview',
        wr_most_repeated: 'Most repeated', wr_avg_rep: 'Avg / word', wr_find_in_search: 'Find in Search',
        wr_showing: 'Showing', wr_of: 'of', wr_no_match: 'No terms match your filter.',
        wr_speed: 'Speed', wr_reps: 'Repeat', wr_session: 'Session reps'
      },
      bn: {
        wr_sort: 'সাজান', wr_sort_count: 'সর্বাধিক পুনরাবৃত্ত', wr_sort_first: 'প্রথম উপস্থিতি',
        wr_sort_alpha: 'বর্ণানুক্রমিক', wr_min_count: 'সর্বনিম্ন ×', wr_filter_ph: 'শব্দ ফিল্টার করুন…',
        wr_copy_list: 'তালিকা কপি', wr_top_words: 'শীর্ষ পুনরাবৃত্ত শব্দ', wr_overview: 'সারসংক্ষেপ',
        wr_most_repeated: 'সর্বাধিক পুনরাবৃত্ত', wr_avg_rep: 'গড়/শব্দ', wr_find_in_search: 'সার্চে খুঁজুন',
        wr_showing: 'দেখানো হচ্ছে', wr_of: 'এর মধ্যে', wr_no_match: 'আপনার ফিল্টারে কোনো শব্দ মেলেনি।',
        wr_speed: 'গতি', wr_reps: 'পুনরাবৃত্তি', wr_session: 'সেশন পুনরাবৃত্তি'
      },
      zh: {
        wr_sort: '排序', wr_sort_count: '出现最多', wr_sort_first: '首次出现',
        wr_sort_alpha: '按字母顺序', wr_min_count: '最少 ×', wr_filter_ph: '过滤词…',
        wr_copy_list: '复制列表', wr_top_words: '高频词', wr_overview: '概览',
        wr_most_repeated: '出现最多', wr_avg_rep: '平均/词', wr_find_in_search: '在搜索中查找',
        wr_showing: '显示', wr_of: '条/共', wr_no_match: '没有匹配的术语。',
        wr_speed: '速度', wr_reps: '重复', wr_session: '本次重复'
      },
      ja: {
        wr_sort: '並び替え', wr_sort_count: '最多出現', wr_sort_first: '初出',
        wr_sort_alpha: 'アルファベット順', wr_min_count: '最小 ×', wr_filter_ph: '単語をフィルター…',
        wr_copy_list: 'リストをコピー', wr_top_words: '頻出単語', wr_overview: '概要',
        wr_most_repeated: '最多出現', wr_avg_rep: '平均/語', wr_find_in_search: '検索で探す',
        wr_showing: '表示中', wr_of: '件中', wr_no_match: '条件に一致する用語はありません。',
        wr_speed: '速度', wr_reps: '繰り返し', wr_session: 'セッション回数'
      }
    };

    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId === 'wordrepeat') this.ensureLoaded(); });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.loaded) this.render(); }
    });
  }

  tt(key) {
    const g = t(key, this.language);
    if (g !== key) return g;                 // present in the global dictionary
    const loc = (this.i18n[this.language] || {})[key] || this.i18n.en[key];
    return loc || key;                       // enrichment key → local fallback
  }

  async ensureLoaded() {
    if (this.loaded) { this.render(); return; }
    this.container.innerHTML = `<div class="text-center py-16 text-gray-400">${this.tt('loading')}</div>`;
    try {
      const [tk, rt, wi, sf] = await Promise.all([
        fetch('data/quran-tokens.json').then(r => r.json()),
        fetch('data/roots.json').then(r => r.json()),
        fetch('data/word-index.json').then(r => r.json()).catch(() => null),
        fetch('data/sarf.json').then(r => r.json()).catch(() => null)
      ]);
      this.tokens = tk; this.roots = rt; this.wordIndex = wi;
      this.sarfRoots = sf ? new Set(sf.order) : null;
      this.sarfGloss = {};       // root -> English gloss from sarf.json (~30 roots)
      if (sf && sf.roots) for (const r in sf.roots) { if (sf.roots[r].gloss) this.sarfGloss[r] = sf.roots[r].gloss; }
    } catch (e) {
      this.container.innerHTML = `<div class="text-center py-16 text-red-500">${this.tt('topics_load_error')}</div>`;
      return;
    }
    this.loaded = true;
    this.bindOnce();
    this.render();
  }

  bindOnce() {
    if (this._bound) return;
    this._bound = true;
    this.container.addEventListener('click', (e) => {
      // Left vertical surah rail → pick the surah (replaces the old dropdown)
      const railBtn = e.target.closest('[data-wr-surah]');
      if (railBtn) {
        const n = parseInt(railBtn.getAttribute('data-wr-surah'));
        if (n !== this.surah) {
          this.surah = n; this.ayah = 1; this.openTerm = null;
          this.openVerses.clear(); this.qOpen.clear();
          this.render();
        }
        return;
      }
      const t2 = e.target.closest('[data-typ]');
      if (t2) { this.type = t2.getAttribute('data-typ'); this.openTerm = null; this.render(); return; }
      const sc = e.target.closest('[data-scope]');
      if (sc) { this.scope = sc.getAttribute('data-scope'); this.openTerm = null; this.render(); return; }
      // Inline-verse audio (per word / full ayah)
      const wp = e.target.closest('[data-word-audio]');
      if (wp) {
        const au = this.getAudio(); this._audioMode = 'word';
        au.src = wp.getAttribute('data-word-audio');
        try { au.playbackRate = this.play.speed; } catch (er) {}
        au.play().catch(() => {}); return;
      }
      const fp = e.target.closest('[data-ayah-audio]');
      if (fp) { this.toggleAyahAudio(fp); return; }
      // Playback trainer controls (cycle speed / repeat count; reset session tally)
      const spd = e.target.closest('[data-wr-speed]');
      if (spd) { this.cycleSpeed(); return; }
      const rp = e.target.closest('[data-wr-reps]');
      if (rp) { this.cycleReps(); return; }
      const sess = e.target.closest('[data-wr-session]');
      if (sess) { this.sessionReps = 0; this.refreshPlayButtons(); return; }

      // Root → full Sarf conjugation chart (explicit navigation)
      const sl = e.target.closest('[data-sarf-link]');
      if (sl) { if (typeof sarf !== 'undefined' && sarf) sarf.openRoot(sl.getAttribute('data-sarf-link')); return; }

      const rep = e.target.closest('[data-onlyrep]');
      // Full render — the toggle pill itself lives outside #wr-results
      if (rep) { this.onlyRepeated = !this.onlyRepeated; this.openTerm = null; this.openVerses.clear(); this.qOpen.clear(); this.render(); return; }

      // Sort toggle — controls live in the persistent shell, so only the
      // control strip + results need repainting (keeps the filter box focused).
      const so = e.target.closest('[data-wr-sort]');
      if (so) { this.sortBy = so.getAttribute('data-wr-sort'); this.renderControls(); this.renderResults(); return; }
      // Copy the current (filtered + sorted) term list to the clipboard as text
      const cp = e.target.closest('[data-wr-copy]');
      if (cp) { this.copyList(cp); return; }
      // Jump a term into the Search tab, prefilled (exact mode only)
      const ss = e.target.closest('[data-wr-search]');
      if (ss) { this.jumpToSearch(ss.getAttribute('data-wr-search')); return; }
      // "Quran ×N" badge → expand this word's Quran-wide occurrences in place
      const qocc = e.target.closest('[data-qocc]');
      if (qocc) {
        const k = qocc.getAttribute('data-qocc');
        if (this.qOpen.has(k)) this.qOpen.delete(k);
        else { this.qOpen.add(k); this.openTerm = k; this.openVerseWord = k; }
        this.renderResults();
        return;
      }
      // Clicking a word shows its first verse inline right away; the "N verses"
      // toggle just expands/collapses the list. Both stay in this module.
      const wordBtn = e.target.closest('[data-term]');
      const occBtn = e.target.closest('[data-occ]');
      if (wordBtn || occBtn) {
        const k = (wordBtn && wordBtn.getAttribute('data-term')) || (occBtn && occBtn.getAttribute('data-occ'));
        if (this.openTerm === k) { this.openTerm = null; this.openVerses.clear(); this.qOpen.clear(); }
        else {
          this.openTerm = k;
          this.openVerses.clear(); this.qOpen.clear();
          this.openVerseWord = k;
          const first = wordBtn && wordBtn.getAttribute('data-first-ref');
          if (first) this.openVerses.add(first);
        }
        this.renderResults();
        return;
      }
      // Verse chips TOGGLE that ayah inline — several can stay open together.
      const verse = e.target.closest('[data-verse]');
      if (verse) {
        const ref = verse.getAttribute('data-verse');
        const opening = !this.openVerses.has(ref);
        if (opening) this.openVerses.add(ref); else this.openVerses.delete(ref);
        this.openVerseWord = verse.getAttribute('data-term-word') || this.openVerseWord;
        this.renderResults();
        if (opening) {
          // Bring the new block into view INSIDE the detail pane only — never
          // move the page scroll (the user stays at the chip they clicked).
          const slot = this.container.querySelector(`[data-inline-slot="${ref}"]`);
          const pane = slot && slot.closest('[data-scrollkeep^="detail"]');
          if (slot && pane) pane.scrollTop = Math.max(0, slot.offsetTop - 8);
        }
        return;
      }
    });
    this.container.addEventListener('change', (e) => {
      if (e.target.id === 'wr-ayah') { this.ayah = parseInt(e.target.value); this.openTerm = null; this.renderResults(); }
      if (e.target.id === 'wr-min') { this.minCount = parseInt(e.target.value) || 1; this.renderResults(); }
    });
    // Live text filter — the input lives in the shell (never wiped by
    // renderResults), so focus/caret survive each keystroke.
    this.container.addEventListener('input', (e) => {
      if (e.target.id === 'wr-filter') { this.filterText = e.target.value; this.renderResults(); }
    });
  }

  /** Left vertical surah rail (horizontal chip strip on mobile) — mirrors Sarf. */
  railHtml() {
    const lang = this.language;
    return SURAH_DATA.map(s => {
      const active = s.number === this.surah;
      const name = s.names[lang] || s.names.en;
      return `
        <button data-wr-surah="${s.number}"
                class="wr-rail-btn shrink-0 md:shrink md:w-full text-start px-3 py-2 rounded-lg border-s-2 transition-colors
                       ${active
                         ? 'bg-primary/10 border-primary text-primary dark:text-blue-300'
                         : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-700/60 text-gray-700 dark:text-gray-200'}">
          <span class="flex items-center gap-2">
            <span class="text-xs font-semibold w-6 text-center shrink-0 ${active ? 'text-primary/70 dark:text-blue-300/70' : 'text-gray-400'}">${s.number}</span>
            <span class="min-w-0">
              <span class="block text-sm truncate max-w-[9rem]" dir="auto">${this.esc(name)}</span>
              <span class="block ayah-arabic !text-sm !leading-none !mb-0 !pb-0 !border-b-0 ${active ? 'text-primary dark:text-blue-300' : 'text-gray-500 dark:text-gray-400'}" dir="rtl">${this.esc(s.arabicName)}</span>
            </span>
          </span>
        </button>`;
    }).join('');
  }

  render() {
    const surah = getSurahByNumber(this.surah);
    const ayahCount = surah ? surah.ayahCount : 7;

    // Preserve the rail's scroll position across re-renders
    const oldRail = this.container.querySelector('#wr-rail');
    const railScroll = oldRail ? { top: oldRail.scrollTop, left: oldRail.scrollLeft } : null;

    this.container.innerHTML = `
      <div class="w-full">
        <div class="text-center mb-4">
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('wr_subtitle')}</p>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <nav id="wr-rail" aria-label="${this.tt('wr_title')}"
               class="w-full md:w-56 shrink-0 flex md:flex-col gap-1 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto
                      md:max-h-[75vh] md:sticky md:top-20 pb-2 md:pb-0 md:pe-1
                      border-b md:border-b-0 md:border-e border-gray-100 dark:border-gray-700">
            ${this.railHtml()}
          </nav>
          <div class="flex-1 min-w-0 w-full">
            <div class="flex flex-wrap items-center justify-center gap-2 mb-3">
              <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <button data-scope="surah" class="px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${this.scope === 'surah' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}">${this.tt('wr_whole_surah')}</button>
                <button data-scope="ayah" class="px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${this.scope === 'ayah' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}">${this.tt('wr_single_ayah')}</button>
              </div>
              ${this.scope === 'ayah' ? `
                <select id="wr-ayah" aria-label="${this.tt('ayah')}" class="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
                  ${Array.from({ length: ayahCount }, (_, i) => i + 1).map(a => `<option value="${a}" ${a === this.ayah ? 'selected' : ''}>${this.tt('ayah')} ${a}</option>`).join('')}
                </select>` : ''}
            </div>
            <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <button data-typ="exact" class="px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary ${this.type === 'exact' ? 'bg-secondary text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}">${this.tt('wr_exact')}</button>
                <button data-typ="root" class="px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary ${this.type === 'root' ? 'bg-secondary text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}">${this.tt('wr_root')}</button>
              </div>
              <label class="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                <button data-onlyrep role="switch" aria-checked="${this.onlyRepeated}" aria-label="${this.esc(this.tt('wr_only_repeated'))}"
                        class="w-9 h-5 rounded-full relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${this.onlyRepeated ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}">
                  <span class="absolute top-0.5 ${this.onlyRepeated ? 'start-4' : 'start-0.5'} w-4 h-4 rounded-full bg-white transition-all"></span>
                </button>
                ${this.tt('wr_only_repeated')}
              </label>
            </div>
            <div id="wr-controls" class="mb-4"></div>
            <div id="wr-results"></div>
          </div>
        </div>
      </div>`;

    // Restore rail scroll across re-renders, or bring the active surah into view
    const rail = this.container.querySelector('#wr-rail');
    if (rail) {
      if (railScroll) {
        rail.scrollTop = railScroll.top;
        rail.scrollLeft = railScroll.left;
      } else {
        const btn = rail.querySelector(`[data-wr-surah="${this.surah}"]`);
        if (btn) {
          rail.scrollTop = Math.max(0, btn.offsetTop - rail.clientHeight / 2);
          rail.scrollLeft = Math.max(0, btn.offsetLeft - rail.clientWidth / 2);
        }
      }
    }

    this.renderControls();
    this.renderResults();
  }

  /** Persistent control strip: sort toggle, min-count filter, live text filter,
   *  copy-to-clipboard. Lives in the shell so the filter box keeps focus while
   *  results repaint. */
  renderControls() {
    const box = this.container.querySelector('#wr-controls');
    if (!box) return;
    const sortBtn = (id, label) => `
      <button data-wr-sort="${id}" class="px-3 py-1.5 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${this.sortBy === id ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}">${label}</button>`;
    const minOpt = n => `<option value="${n}" ${this.minCount === n ? 'selected' : ''}>${n === 1 ? '×1+' : '×' + n + '+'}</option>`;
    box.innerHTML = `
      <div class="flex flex-wrap items-center justify-center gap-2">
        <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <span class="px-2.5 py-1.5 text-xs sm:text-sm bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 border-e border-gray-200 dark:border-gray-700">${this.tt('wr_sort')}</span>
          ${sortBtn('count', this.tt('wr_sort_count'))}${sortBtn('first', this.tt('wr_sort_first'))}${sortBtn('alpha', this.tt('wr_sort_alpha'))}
        </div>
        <label class="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          ${this.tt('wr_min_count')}
          <select id="wr-min" class="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
            ${[1, 2, 3, 5, 10].map(minOpt).join('')}
          </select>
        </label>
        <input id="wr-filter" type="text" dir="auto" value="${this.esc(this.filterText)}"
               placeholder="${this.esc(this.tt('wr_filter_ph'))}"
               class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm w-40 sm:w-52 focus:outline-none focus:ring-2 focus:ring-primary">
        <button data-wr-copy class="px-3 py-1.5 text-xs sm:text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">📋 ${this.tt('wr_copy_list')}</button>
      </div>`;
  }

  /** Compute the term list once and derive every view (stats, bars, grid, copy)
   *  from it — keeps the number pipeline single-sourced from compute(). */
  buildView() {
    const full = this.compute();                       // exact counts from the data
    const total = full.reduce((n, x) => n + x.count, 0);
    const unique = full.length;
    const repeated = full.filter(x => x.count >= 2).length;
    const top = full.length ? full.reduce((m, x) => x.count > m.count ? x : m, full[0]) : null;
    const avg = unique ? total / unique : 0;
    let list = full;
    if (this.onlyRepeated) list = list.filter(x => x.count >= 2);
    if (this.minCount > 1) list = list.filter(x => x.count >= this.minCount);
    const ft = this.filterText.trim().toLowerCase();
    if (ft) list = list.filter(x => this.termMatches(x, ft));
    list = this.sortList(list);
    return { full, list, total, unique, repeated, top, avg };
  }

  termMatches(x, ft) {
    if (x.term.toLowerCase().includes(ft)) return true;
    const m = this.meaningOf(x.term);
    if (m && m.toLowerCase().includes(ft)) return true;
    return (x.firstRef || '').includes(ft);
  }

  sortList(list) {
    const a = [...list];
    if (this.sortBy === 'alpha') a.sort((x, y) => x.term.localeCompare(y.term, 'ar'));
    else if (this.sortBy === 'first') a.sort((x, y) => this.refCmp(x.firstRef, y.firstRef) || y.count - x.count);
    else a.sort((x, y) => y.count - x.count || x.term.localeCompare(y.term));
    return a;
  }

  /** Compact CSS bar chart of the most-repeated terms (widths ∝ count). Bars
   *  reuse the [data-term] handler, so tapping one opens that word's card. */
  topBarsHtml(list) {
    const top = [...list].sort((a, b) => b.count - a.count).slice(0, 8).filter(x => x.count >= 2);
    if (top.length < 2) return '';
    const max = top[0].count;
    const rows = top.map(x => {
      const pct = Math.max(6, Math.round((x.count / max) * 100));
      return `
        <button data-term="${this.esc(x.term)}" data-first-ref="${x.firstRef}"
                class="w-full flex items-center gap-2 group text-start">
          <span class="ayah-arabic !text-lg !leading-normal !mb-0 !pb-0 !border-b-0 w-24 sm:w-28 shrink-0 truncate text-end" dir="rtl">${this.esc(x.term)}</span>
          <span class="flex-1 h-5 rounded bg-gray-100 dark:bg-gray-700/60 overflow-hidden">
            <span class="block h-full rounded bg-secondary/70 group-hover:bg-secondary transition-all" style="width:${pct}%"></span>
          </span>
          <span class="text-xs font-mono font-bold text-gray-600 dark:text-gray-300 w-8 text-end shrink-0">${x.count}</span>
        </button>`;
    }).join('');
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 mb-3">
        <p class="text-xs uppercase tracking-wide text-gray-400 mb-2">${this.tt('wr_top_words')}</p>
        <div class="space-y-1.5">${rows}</div>
      </div>`;
  }

  /** Surah-level overview card: totals + most-repeated word + average. */
  statsCardHtml(v) {
    const cell = (label, value) => `
      <div class="text-center">
        <div class="text-lg font-bold text-gray-800 dark:text-gray-100">${value}</div>
        <div class="text-[0.7rem] uppercase tracking-wide text-gray-400">${label}</div>
      </div>`;
    const topVal = v.top
      ? `<span class="ayah-arabic !text-xl !leading-tight !mb-0 !pb-0 !border-b-0" dir="rtl">${this.esc(v.top.term)}</span> <span class="text-sm text-gray-400">×${v.top.count}</span>`
      : '—';
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 mb-3">
        <p class="text-xs uppercase tracking-wide text-gray-400 mb-2">${this.tt('wr_overview')}</p>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 items-end">
          ${cell(this.tt('wr_total_words'), v.total)}
          ${cell(this.tt('wr_unique'), v.unique)}
          ${cell(this.tt('wr_repeated'), v.repeated)}
          ${cell(this.tt('wr_avg_rep'), v.avg.toFixed(2))}
          ${cell(this.tt('wr_most_repeated'), topVal)}
        </div>
      </div>`;
  }

  /** Copy the current filtered + sorted term list to the clipboard as plain text. */
  copyList(btn) {
    const { list } = this.buildView();
    const info = getSurahByNumber(this.surah);
    const name = info ? (info.names[this.language] || info.names.en) : this.surah;
    const scope = this.scope === 'ayah' ? `${this.surah}:${this.ayah}` : `${this.surah}`;
    const mode = this.type === 'root' ? this.tt('wr_root') : this.tt('wr_exact');
    const header = `# ${name} (${scope}) — ${mode}`;
    const lines = list.map(x => `${x.term}\t${x.count}${x.quran != null ? `\t[${this.tt('wr_quran_short')} ${x.quran}]` : ''}`);
    const text = [header, ...lines].join('\n');
    const done = () => {
      const original = btn.innerHTML;
      btn.innerHTML = `✓ ${this.tt('copied')}`;
      setTimeout(() => { btn.innerHTML = original; }, 1500);
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => this.fallbackCopy(text, done));
      } else this.fallbackCopy(text, done);
    } catch (e) { this.fallbackCopy(text, done); }
  }

  fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /** Deep link: open the Search tab prefilled with this term and run it.
   *  Exact mode only — a bare root has no meaningful surface form to search. */
  jumpToSearch(term) {
    if (typeof searchView === 'undefined' || !searchView) return;
    if (typeof tabSystem !== 'undefined' && tabSystem) {
      if (tabSystem.switchTabWithReturn) tabSystem.switchTabWithReturn('search');
      else tabSystem.switchTab('search');
    }
    searchView.query = term;
    const inp = searchView.container && searchView.container.querySelector('#search-input');
    if (inp) { inp.value = term; inp.focus(); }
    if (typeof searchView.runSearch === 'function') searchView.runSearch();
  }

  /** Compute [{ term, count, refs:Set("s:a") }] for the current scope + type. */
  compute() {
    const s = this.surah;
    const map = new Map();   // term -> { count, refs:Set }
    const add = (term, ref) => {
      let e = map.get(term); if (!e) { e = { count: 0, refs: new Set() }; map.set(term, e); }
      e.count++; e.refs.add(ref);
    };
    if (this.type === 'exact') {
      const keys = this.scope === 'ayah' ? [`${s}:${this.ayah}`] : Object.keys(this.tokens).filter(k => k.startsWith(s + ':'));
      for (const key of keys) {
        for (const tok of (this.tokens[key] || [])) add(tok, key);
      }
    } else {
      const prefix = this.scope === 'ayah' ? `${s}:${this.ayah}:` : `${s}:`;
      for (const root in this.roots) {
        for (const occ of this.roots[root]) {
          if (occ.startsWith(prefix)) {
            const ref = occ.split(':').slice(0, 2).join(':');
            add(root, ref);
          }
        }
      }
    }
    return [...map.entries()]
      .map(([term, e]) => {
        const refs = [...e.refs].sort(this.refCmp);
        return { term, count: e.count, refs, firstRef: refs[0], quran: this.quranCount(term) };
      })
      .sort((a, b) => b.count - a.count || a.term.localeCompare(b.term));
  }

  /** Quran-wide occurrence count for a term (exact word or root). */
  quranCount(term) {
    if (this.type === 'root') return (this.roots[term] || []).length;
    return this.wordIndex ? (this.wordIndex[term] || []).length : null;
  }

  refCmp(a, b) { const [s1, a1] = a.split(':').map(Number), [s2, a2] = b.split(':').map(Number); return s1 - s2 || a1 - a2; }

  /** Root mode: 1-based word positions of a root inside one verse ("s:a") —
   *  a verse may hold several occurrences of the same root. Exact mode: null
   *  (inlineVerseHtml falls back to string matching). */
  termPositions(term, ref) {
    if (this.type !== 'root') return null;
    return (this.roots[term] || [])
      .filter(o => o.startsWith(ref + ':'))
      .map(o => Number(o.split(':')[2]));
  }

  metaKey() { return `${this.surah}:${this.language}`; }

  /** Fetch the surah's word-by-word meanings (in the UI language) and re-render.
   *  Exact mode: normalized token -> meaning. Root mode: root -> meaning of its
   *  first occurrence in this surah (roots.json refs are "s:a:w"). */
  async ensureMeta() {
    const store = this.type === 'root' ? this._rootMeaning : this._meaning;
    const key = this.metaKey();
    if (store[key]) return;                       // cached
    const token = ++this._metaToken;
    try {
      const info = getSurahByNumber(this.surah);
      if (!info) return;
      const verses = await QuranData.fetchRange(this.surah, 1, info.ayahCount, this.language);
      if (token !== this._metaToken) return;
      const map = {};
      if (this.type === 'root') {
        const byRef = {};
        for (const v of verses) byRef[v.key] = v.words || [];
        const prefix = `${this.surah}:`;
        for (const root in this.roots) {
          for (const occ of this.roots[root]) {
            if (!occ.startsWith(prefix)) continue;
            const [s, a, w] = occ.split(':');
            const wd = (byRef[`${s}:${a}`] || [])[w - 1];
            if (wd && wd.meaning) { map[root] = wd.meaning; break; }
          }
        }
      } else {
        for (const v of verses) for (const w of (v.words || [])) {
          const n = QuranData.normalizeWord ? QuranData.normalizeWord(w.arabic) : w.arabic;
          if (n && !map[n] && w.meaning) map[n] = w.meaning;
        }
      }
      store[key] = map;
      if (this.container.querySelector('#wr-results')) this.renderResults();
    } catch (e) { /* meanings are best-effort */ }
  }

  meaningOf(term) {
    if (this.type === 'root') {
      // Curated sarf gloss first, else the WBW meaning of the first occurrence
      if (this.sarfGloss && this.sarfGloss[term]) return this.sarfGloss[term];
      const m = this._rootMeaning[this.metaKey()];
      return m ? (m[term] || '') : '';
    }
    const m = this._meaning[this.metaKey()];
    return m ? (m[term] || '') : '';
  }

  /** Shared Audio element — created once, with the 'pause' → icon-reset listener
   *  always attached ('pause' also fires when playback ends or src changes). */
  getAudio() {
    if (!this._ayahAudio) {
      this._ayahAudio = new Audio();
      this._ayahAudio.addEventListener('pause', () => { if (!this._repeating) this.resetPlayIcon(); });
      this._ayahAudio.addEventListener('ended', () => this.onAyahEnded());
    }
    return this._ayahAudio;
  }

  /** Load/save the persisted playback settings (repeat count + speed). */
  loadPlay() {
    const def = { reps: 1, speed: 1 };
    try {
      const o = JSON.parse(localStorage.getItem('wr_play') || 'null');
      if (!o) return def;
      const reps = [1, 3, 5, 7, 10].includes(o.reps) ? o.reps : 1;
      const speed = [0.75, 1, 1.25, 1.5, 2].includes(o.speed) ? o.speed : 1;
      return { reps, speed };
    } catch (e) { return def; }
  }
  savePlay() { try { localStorage.setItem('wr_play', JSON.stringify(this.play)); } catch (e) {} }

  cycleSpeed() {
    const opts = [0.75, 1, 1.25, 1.5, 2];
    this.play.speed = opts[(opts.indexOf(this.play.speed) + 1) % opts.length];
    this.savePlay();
    if (this._ayahAudio) { try { this._ayahAudio.playbackRate = this.play.speed; } catch (e) {} }
    this.refreshPlayButtons();
  }
  cycleReps() {
    const opts = [1, 3, 5, 7, 10];
    this.play.reps = opts[(opts.indexOf(this.play.reps) + 1) % opts.length];
    this.savePlay();
    // Re-scope a run already in progress so the badge stays truthful
    if (this._playingBtn && this._repTotal) {
      this._repTotal = this.play.reps;
      if (this._repLeft > this._repTotal) this._repLeft = this._repTotal;
      if (this._playingBtn) this._playingBtn.innerHTML = this.ayahBtnLabel(true);
    }
    this.refreshPlayButtons();
  }
  refreshPlayButtons() {
    this.container.querySelectorAll('[data-wr-speed]').forEach(b => { b.textContent = `⏩ ${this.play.speed}×`; });
    this.container.querySelectorAll('[data-wr-reps]').forEach(b => { b.textContent = `🔁 ×${this.play.reps}`; });
    this.container.querySelectorAll('[data-wr-session]').forEach(b => { b.textContent = `🎯 ${this.sessionReps}`; });
  }

  /** Label for a full-ayah button, showing rep progress (2/5) while playing. */
  ayahBtnLabel(playing) {
    const icon = playing ? '⏸' : '🔊';
    const prog = (playing && this._repTotal > 1)
      ? ` <span class="font-mono">${this._repTotal - this._repLeft + 1}/${this._repTotal}</span>` : '';
    return `${icon} ${this.tt('play_full_ayah')}${prog}`;
  }

  /** Play/pause toggle for the full-ayah buttons: the icon flips 🔊 ↔ ⏸. */
  toggleAyahAudio(btn) {
    const au = this.getAudio();
    const src = btn.getAttribute('data-ayah-audio');
    if (this._playingBtn === btn && !au.paused) { this._repLeft = 0; au.pause(); return; }
    this.resetPlayIcon();
    this._audioMode = 'ayah';
    this._repTotal = this.play.reps;
    this._repLeft = this.play.reps;
    au.src = src;
    try { au.playbackRate = this.play.speed; } catch (e) {}
    au.play().then(() => {
      this._playingBtn = btn;
      btn.innerHTML = this.ayahBtnLabel(true);
    }).catch(() => {});
  }

  /** Natural end of an ayah: replay while reps remain, else stop + tally. */
  onAyahEnded() {
    if (this._audioMode !== 'ayah') return;
    const au = this._ayahAudio;
    this.bumpSession();
    if (this._repLeft > 1 && this._playingBtn && au) {
      this._repLeft--;
      this._repeating = true;
      try { au.currentTime = 0; } catch (e) {}
      au.play().then(() => {
        this._repeating = false;
        if (this._playingBtn) this._playingBtn.innerHTML = this.ayahBtnLabel(true);
      }).catch(() => { this._repeating = false; this.resetPlayIcon(); });
    } else {
      this._repLeft = 0;
      this.resetPlayIcon();
    }
  }

  bumpSession() { this.sessionReps++; this.refreshPlayButtons(); }

  resetPlayIcon() {
    if (this._playingBtn) {
      this._playingBtn.innerHTML = this.ayahBtnLabel(false);
      this._playingBtn = null;
    }
    this._repLeft = 0;
    this.refreshPlayButtons();
  }

  inlineVerseLoading() { return `<p class="text-center text-gray-400 py-3 text-sm">${this.tt('loading')}</p>`; }

  inlineVerseHtml(v, word, s, a, color, positions) {
    const norm = x => QuranData.normalizeWord ? QuranData.normalizeWord(x || '') : String(x || '');
    const target = word ? norm(word) : null;
    // Root mode highlights BY POSITION (roots.json refs are "s:a:w") — the bare
    // root rarely string-matches the diacritic-laden Uthmani surface form.
    const posSet = positions && positions.length ? new Set(positions) : null;
    const wbw = (v.words || []).map((w, i) => {
      const hit = posSet
        ? posSet.has(i + 1)
        : target && (norm(w.arabic) === target || (word && (w.arabic || '').indexOf(word) >= 0));
      const canPlay = !!w.audio;
      return `<button ${canPlay ? `data-word-audio="${this.esc(w.audio)}" title="${this.esc(this.tt('vocab_play_word'))}" aria-label="${this.esc(this.tt('vocab_play_word'))}"` : ''} class="inline-flex flex-col items-center px-1.5 py-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${canPlay ? 'hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer' : ''} ${hit ? 'ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-500/10' : ''}"><span class="ayah-arabic !text-2xl !leading-snug !mb-0 !pb-0 !border-b-0 block">${w.arabic}</span><span class="text-xs text-gray-500 dark:text-gray-400 block" dir="auto">${w.meaning || ''}</span></button>`;
    }).join('');
    const pad = n => String(n).padStart(3, '0');
    const c = color || '#3b82f6';
    // Compact: the word-by-word row IS the Arabic — no duplicate plain-ayah line.
    return `
      <div class="rounded-xl bg-white dark:bg-gray-800 border-2 p-2.5" style="border-color:${c}">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-mono font-bold text-white px-2 py-0.5 rounded-md" style="background:${c}">${v.key}</span>
          <span class="text-xs text-gray-400">${this.esc(v.surahName || '')}</span>
          <div class="ms-auto flex items-center gap-1">
            <button data-wr-speed title="${this.esc(this.tt('wr_speed'))}" aria-label="${this.esc(this.tt('wr_speed'))}" class="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">⏩ ${this.play.speed}×</button>
            <button data-wr-reps title="${this.esc(this.tt('wr_reps'))}" aria-label="${this.esc(this.tt('wr_reps'))}" class="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">🔁 ×${this.play.reps}</button>
            <button data-wr-session title="${this.esc(this.tt('wr_session'))}" aria-label="${this.esc(this.tt('wr_session'))}" class="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">🎯 ${this.sessionReps}</button>
            <button data-ayah-audio="https://everyayah.com/data/Alafasy_128kbps/${pad(s)}${pad(a)}.mp3" class="text-xs px-2.5 py-1 rounded-lg bg-primary text-white hover:bg-primary/80">${this.ayahBtnLabel(false)}</button>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-x-1 mb-1" dir="rtl">${wbw}</div>
        <p class="text-center text-sm text-gray-600 dark:text-gray-300" dir="auto">${v.translation || ''}</p>
      </div>`;
  }

  /** Fill every open inline slot — cached verses render instantly, the rest fetch. */
  fillInlineSlots() {
    const word = this.openVerseWord;
    const posOf = el => (el.getAttribute('data-term-pos') || '').split(',').filter(Boolean).map(Number);
    this.container.querySelectorAll('[data-inline-slot]').forEach(slot => {
      const ref = slot.getAttribute('data-inline-slot');
      const color = slot.getAttribute('data-color');
      const [s, a] = ref.split(':').map(Number);
      const cacheKey = `${ref}:${this.language}`;
      const cached = this._verseCache[cacheKey];
      if (cached) { slot.innerHTML = this.inlineVerseHtml(cached, word, s, a, color, posOf(slot)); return; }
      QuranData.fetchRange(s, a, a, this.language).then(verses => {
        const v = verses && verses[0];
        if (!v) throw new Error('nf');
        this._verseCache[cacheKey] = v;
        // Re-query: the container may have re-rendered while fetching
        const cur = this.container.querySelector(`[data-inline-slot="${ref}"]`);
        if (cur) cur.innerHTML = this.inlineVerseHtml(v, word, s, a, cur.getAttribute('data-color'), posOf(cur));
      }).catch(() => {
        const cur = this.container.querySelector(`[data-inline-slot="${ref}"]`);
        if (cur) cur.innerHTML = `<p class="text-center text-gray-400 py-3 text-sm">${this.tt('topics_load_error')}</p>`;
      });
    });
  }

  /** Keep the user's place: remember window + inner-pane scroll across re-renders. */
  captureScroll() {
    const mem = { win: window.scrollY };
    this.container.querySelectorAll('[data-scrollkeep]').forEach(el => {
      mem[el.getAttribute('data-scrollkeep')] = el.scrollTop;
    });
    return mem;
  }

  restoreScroll(mem) {
    if (!mem) return;
    this.container.querySelectorAll('[data-scrollkeep]').forEach(el => {
      const k = el.getAttribute('data-scrollkeep');
      if (mem[k] != null) el.scrollTop = mem[k];
    });
    window.scrollTo(0, mem.win);
  }

  renderResults() {
    const box = this.container.querySelector('#wr-results');
    if (!box) return;
    const scrollMem = this.captureScroll();
    const v = this.buildView();
    if (!v.full.length) { box.innerHTML = `<p class="text-center py-10 text-gray-400">${this.tt('wr_none')}</p>`; return; }
    const list = v.list;
    const stats = this.statsCardHtml(v);
    const bars = this.topBarsHtml(list);
    const showing = `<p class="text-center text-xs text-gray-400 mb-3">${this.tt('wr_tap_hint')}<br>${this.tt('wr_showing')} <b class="text-gray-600 dark:text-gray-300">${list.length}</b> ${this.tt('wr_of')} ${v.unique}</p>`;
    const grid = list.length
      ? `<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-2">
           ${list.map(x => this.termChip(x)).join('')}
         </div>`
      : `<p class="text-center py-10 text-gray-400">${this.tt('wr_no_match')}</p>`;
    box.innerHTML = stats + bars + showing + grid;
    this.restoreScroll(scrollMem);
    this.fillInlineSlots();   // idempotent: cached verses render instantly, the rest fetch
    this.ensureMeta();
  }

  /** All Quran-wide "s:a" refs for a term (exact via word-index, root via roots). */
  quranRefs(term) {
    const occs = this.type === 'root' ? (this.roots[term] || []) : ((this.wordIndex && this.wordIndex[term]) || []);
    return [...new Set(occs.map(o => o.split(':').slice(0, 2).join(':')))].sort(this.refCmp);
  }

  /** Stable accent colour per open verse — pairs each chip with its inline block. */
  pairColor(ref) {
    const P = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#ef4444', '#84cc16'];
    const i = [...this.openVerses].indexOf(ref);
    return i < 0 ? null : P[i % P.length];
  }

  verseChip(r, term) {
    const c = this.openVerses.has(r) ? this.pairColor(r) : null;
    return c
      ? `<button data-verse="${r}" data-term-word="${this.esc(term)}" style="background:${c};border-color:${c}" class="text-xs font-mono px-2 py-1 rounded-md border text-white font-bold shadow">${r}</button>`
      : `<button data-verse="${r}" data-term-word="${this.esc(term)}" class="text-xs font-mono px-2 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-primary hover:text-white">${r}</button>`;
  }

  /** One row in the vertical ayah rail: node dot + full-width ref chip. */
  railItem(r, term) {
    const c = this.openVerses.has(r) ? this.pairColor(r) : null;
    return `
      <div class="relative ps-4">
        <span class="absolute -start-[5px] top-2 w-2.5 h-2.5 rounded-full ${c ? '' : 'bg-gray-300 dark:bg-gray-600'}" ${c ? `style="background:${c};box-shadow:0 0 0 3px ${c}33"` : ''}></span>
        <button data-verse="${r}" data-term-word="${this.esc(term)}"
                class="w-full text-center text-xs font-mono px-2 py-1.5 rounded-md ${c ? 'text-white font-bold shadow' : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-primary hover:text-white'}"
                ${c ? `style="background:${c}"` : ''}>${r}</button>
      </div>`;
  }

  termChip(x) {
    const open = this.openTerm === x.term;
    const meaning = this.meaningOf(x.term);
    const qOpen = this.qOpen.has(x.term);
    let body = '';
    if (open) {
      const qRefs = qOpen ? this.quranRefs(x.term).filter(r => !x.refs.includes(r)) : [];
      const qShown = qRefs.slice(0, 200);
      // Which open verses belong to this card, in the order they were opened
      const shownRefs = new Set([...x.refs, ...qShown]);
      const openHere = [...this.openVerses].filter(r => shownRefs.has(r));
      // Master–detail: vertical ayah rail (own scroll) | verse blocks (own scroll),
      // linked by number + accent colour.
      body = `
        <div class="mx-3 mb-3 rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
          <div class="flex gap-3 items-start">
            <div data-scrollkeep="rail:${this.esc(x.term)}" class="w-20 sm:w-24 shrink-0 max-h-[70vh] overflow-y-auto pe-1 space-y-1.5 relative border-s-2 border-gray-200 dark:border-gray-700">
              ${x.refs.map(r => this.railItem(r, x.term)).join('')}
              ${qOpen ? `
                <div class="ps-4 pt-1 text-[0.65rem] uppercase tracking-wide text-gray-400">${this.tt('wr_in_quran')} (${qRefs.length})</div>
                ${qShown.map(r => this.railItem(r, x.term)).join('')}
                ${qRefs.length > qShown.length ? `<div class="ps-4 text-xs text-gray-400">+${qRefs.length - qShown.length}</div>` : ''}` : ''}
            </div>
            <div data-scrollkeep="detail:${this.esc(x.term)}" class="relative flex-1 min-w-0 max-h-[70vh] overflow-y-auto space-y-3">
              ${openHere.length
                ? openHere.map(r => `<div class="wr-inline" data-inline-slot="${r}" data-color="${this.pairColor(r)}" data-term-pos="${(this.termPositions(x.term, r) || []).join(',')}">${this.inlineVerseLoading()}</div>`).join('')
                : `<p class="text-center text-sm text-gray-400 py-8">${this.tt('wr_tap_hint')}</p>`}
            </div>
          </div>
        </div>`;
    }
    return `
      <div class="${open ? 'col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-6 2xl:col-span-8' : ''} rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <button data-term="${this.esc(x.term)}" data-first-ref="${x.firstRef}" class="w-full flex flex-col items-center gap-0.5 px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-700/40 rounded-xl transition-colors">
          <span class="ayah-arabic !text-2xl !leading-snug !mb-0 !pb-0 !border-b-0" dir="rtl">${this.esc(x.term)}</span>
          ${meaning ? `<span class="text-sm text-gray-600 dark:text-gray-300 text-center leading-tight" dir="auto">${this.esc(meaning)}</span>` : ''}
        </button>
        <div class="px-2 pb-1.5 flex flex-wrap items-center justify-center gap-1">
          <span class="text-xs px-1.5 py-1 rounded-full bg-secondary/10 text-secondary dark:text-emerald-300" title="${this.tt('wr_in_surah')}">${this.tt('wr_surah_short')} ×${x.count}</span>
          ${x.quran != null ? `<button data-qocc="${this.esc(x.term)}" title="${this.tt('wr_in_quran')}" aria-label="${this.esc(this.tt('wr_in_quran'))} ×${x.quran}" aria-expanded="${qOpen}" class="text-xs px-1.5 py-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${qOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary dark:text-blue-300 hover:bg-primary hover:text-white'}">${qOpen ? '▾' : '▸'} ${this.tt('wr_quran_short')} ×${x.quran}</button>` : ''}
          ${x.refs.length ? `<button data-occ="${this.esc(x.term)}" aria-expanded="${open}" class="text-xs px-1.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">${open ? '▾' : '▸'} ${x.refs.length} ${this.tt('topics_verses_label')}</button>` : ''}
          ${this.type === 'root' && this.sarfRoots && this.sarfRoots.has(x.term) ? `<button data-sarf-link="${this.esc(x.term)}" title="${this.tt('sarf_title')}" aria-label="${this.esc(this.tt('sarf_title'))}" class="text-xs px-2 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500">🧬</button>` : ''}
          ${this.type === 'exact' && typeof searchView !== 'undefined' && searchView ? `<button data-wr-search="${this.esc(x.term)}" title="${this.tt('wr_find_in_search')}" aria-label="${this.esc(this.tt('wr_find_in_search'))}" class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary dark:text-blue-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">🔍</button>` : ''}
        </div>
        ${body}
      </div>`;
  }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let wordRepeat;
document.addEventListener('DOMContentLoaded', () => { wordRepeat = new WordRepeat(); });
