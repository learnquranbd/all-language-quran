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
    this.ayahModal = null;
    this._ayahAudio = null;
    this.wordIndex = null;       // normalized word -> [s:a:w] globally (Quran-wide exact counts)
    this._meaning = {};          // "surah:lang" -> { normalizedToken: meaning }
    this._metaToken = 0;
    this.openVerse = null;       // "s:a" shown inline under the open word
    this.openVerseWord = null;   // the word to highlight in the inline verse
    this._inlineToken = 0;

    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId === 'wordrepeat') this.ensureLoaded(); });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.loaded) this.render(); }
    });
  }

  tt(key) { return t(key, this.language); }

  async ensureLoaded() {
    if (this.loaded) { this.render(); return; }
    this.container.innerHTML = `<div class="text-center py-16 text-gray-400">${this.tt('loading')}</div>`;
    try {
      const [tk, rt, wi] = await Promise.all([
        fetch('data/quran-tokens.json').then(r => r.json()),
        fetch('data/roots.json').then(r => r.json()),
        fetch('data/word-index.json').then(r => r.json()).catch(() => null)
      ]);
      this.tokens = tk; this.roots = rt; this.wordIndex = wi;
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
      const t2 = e.target.closest('[data-typ]');
      if (t2) { this.type = t2.getAttribute('data-typ'); this.openTerm = null; this.render(); return; }
      const sc = e.target.closest('[data-scope]');
      if (sc) { this.scope = sc.getAttribute('data-scope'); this.openTerm = null; this.render(); return; }
      // Inline-verse audio (per word / full ayah)
      const wp = e.target.closest('[data-word-audio]');
      if (wp) { if (!this._ayahAudio) this._ayahAudio = new Audio(); this._ayahAudio.src = wp.getAttribute('data-word-audio'); this._ayahAudio.play().catch(() => {}); return; }
      const fp = e.target.closest('[data-ayah-audio]');
      if (fp) { if (!this._ayahAudio) this._ayahAudio = new Audio(); this._ayahAudio.src = fp.getAttribute('data-ayah-audio'); this._ayahAudio.play().catch(() => {}); return; }

      const rep = e.target.closest('[data-onlyrep]');
      if (rep) { this.onlyRepeated = !this.onlyRepeated; this.openTerm = null; this.openVerse = null; this.renderResults(); return; }
      // Clicking a word (or its "N verses" toggle) expands its verse list in place.
      const term = e.target.closest('[data-term], [data-occ]');
      if (term) {
        const k = term.getAttribute('data-term') || term.getAttribute('data-occ');
        this.openTerm = this.openTerm === k ? null : k;
        this.openVerse = null;
        this.renderResults();
        return;
      }
      // Clicking a verse chip toggles that ayah inline (no modal).
      const verse = e.target.closest('[data-verse]');
      if (verse) {
        const ref = verse.getAttribute('data-verse');
        this.openVerse = this.openVerse === ref ? null : ref;
        this.openVerseWord = verse.getAttribute('data-term-word');
        this.renderResults();
        if (this.openVerse) this.loadInlineVerse();
        return;
      }
    });
    this.container.addEventListener('change', (e) => {
      if (e.target.id === 'wr-surah') { this.surah = parseInt(e.target.value); this.ayah = 1; this.openTerm = null; this.render(); }
      else if (e.target.id === 'wr-ayah') { this.ayah = parseInt(e.target.value); this.openTerm = null; this.renderResults(); }
    });
  }

  render() {
    const lang = this.language;
    const surah = getSurahByNumber(this.surah);
    const ayahCount = surah ? surah.ayahCount : 7;
    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-5">
          <h2 class="text-2xl font-bold mb-1">🔁 ${this.tt('wr_title')}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('wr_subtitle')}</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 mb-3">
          <select id="wr-surah" class="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
            ${SURAH_DATA.map(s => `<option value="${s.number}" ${s.number === this.surah ? 'selected' : ''}>${this.esc(formatSurahOption(s, lang))}</option>`).join('')}
          </select>
          <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <button data-scope="surah" class="px-3 py-2 text-sm ${this.scope === 'surah' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wr_whole_surah')}</button>
            <button data-scope="ayah" class="px-3 py-2 text-sm ${this.scope === 'ayah' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wr_single_ayah')}</button>
          </div>
          ${this.scope === 'ayah' ? `
            <select id="wr-ayah" class="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
              ${Array.from({ length: ayahCount }, (_, i) => i + 1).map(a => `<option value="${a}" ${a === this.ayah ? 'selected' : ''}>${this.tt('ayah')} ${a}</option>`).join('')}
            </select>` : ''}
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
          <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <button data-typ="exact" class="px-4 py-2 text-sm ${this.type === 'exact' ? 'bg-secondary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wr_exact')}</button>
            <button data-typ="root" class="px-4 py-2 text-sm ${this.type === 'root' ? 'bg-secondary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wr_root')}</button>
          </div>
          <label class="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
            <button data-onlyrep class="w-9 h-5 rounded-full relative transition-colors ${this.onlyRepeated ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}">
              <span class="absolute top-0.5 ${this.onlyRepeated ? 'left-4' : 'left-0.5'} w-4 h-4 rounded-full bg-white transition-all"></span>
            </button>
            ${this.tt('wr_only_repeated')}
          </label>
        </div>
        <div id="wr-results"></div>
      </div>`;
    this.renderResults();
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

  metaKey() { return `${this.surah}:${this.language}`; }

  /** Fetch the surah's word-by-word meanings (in the UI language) and re-render. */
  async ensureMeta() {
    if (this.type !== 'exact') return;            // meanings are per exact word
    const key = this.metaKey();
    if (this._meaning[key]) return;               // cached
    const token = ++this._metaToken;
    try {
      const info = getSurahByNumber(this.surah);
      if (!info) return;
      const verses = await QuranData.fetchRange(this.surah, 1, info.ayahCount, this.language);
      if (token !== this._metaToken) return;
      const map = {};
      for (const v of verses) for (const w of (v.words || [])) {
        const n = QuranData.normalizeWord ? QuranData.normalizeWord(w.arabic) : w.arabic;
        if (n && !map[n] && w.meaning) map[n] = w.meaning;
      }
      this._meaning[key] = map;
      if (this.container.querySelector('#wr-results')) this.renderResults();
    } catch (e) { /* meanings are best-effort */ }
  }

  meaningOf(term) {
    const m = this._meaning[this.metaKey()];
    return m ? (m[term] || '') : '';
  }

  inlineVerseLoading() { return `<p class="text-center text-gray-400 py-3 text-sm">${this.tt('loading')}</p>`; }

  /** Render the tapped verse inline (word-by-word, tapped word highlighted). */
  async loadInlineVerse() {
    const ref = this.openVerse;
    const word = this.openVerseWord;
    const token = ++this._inlineToken;
    try {
      const [s, a] = ref.split(':').map(Number);
      const v = (await QuranData.fetchRange(s, a, a, this.language))[0];
      if (token !== this._inlineToken) return;
      const slot = this.container.querySelector('#wr-inline');
      if (!slot || !v) return;
      const norm = x => QuranData.normalizeWord ? QuranData.normalizeWord(x || '') : String(x || '');
      const target = word ? norm(word) : null;
      const wbw = (v.words || []).map(w => {
        const hit = target && (norm(w.arabic) === target || (w.arabic || '').indexOf(word) >= 0);
        const canPlay = !!w.audio;
        return `<button ${canPlay ? `data-word-audio="${this.esc(w.audio)}"` : ''} class="inline-flex flex-col items-center px-1.5 py-1 rounded-lg ${canPlay ? 'hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer' : ''} ${hit ? 'ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-500/10' : ''}"><span class="ayah-arabic text-2xl block">${w.arabic}</span><span class="text-[11px] text-gray-500 dark:text-gray-400 block" dir="auto">${w.meaning || ''}</span></button>`;
      }).join('');
      const pad = n => String(n).padStart(3, '0');
      slot.innerHTML = `
        <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3">
          <div class="text-xs text-gray-400 mb-1 text-center">${this.esc(v.surahName || '')} ${v.key}</div>
          <div class="ayah-arabic !text-2xl !leading-loose text-center mb-2" dir="rtl">${v.arabic}</div>
          <div class="flex flex-wrap justify-center gap-x-1 mb-2" dir="rtl">${wbw}</div>
          <p class="text-center text-sm text-gray-600 dark:text-gray-300 mb-2" dir="auto">${v.translation || ''}</p>
          <div class="flex justify-center">
            <button data-ayah-audio="https://everyayah.com/data/Alafasy_128kbps/${pad(s)}${pad(a)}.mp3" class="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/80">🔊 ${this.tt('play_full_ayah')}</button>
          </div>
        </div>`;
    } catch (e) {
      const slot = this.container.querySelector('#wr-inline');
      if (slot) slot.innerHTML = `<p class="text-center text-gray-400 py-3 text-sm">${this.tt('topics_load_error')}</p>`;
    }
  }

  renderResults() {
    const box = this.container.querySelector('#wr-results');
    if (!box) return;
    const full = this.compute();
    const total = full.reduce((n, x) => n + x.count, 0);
    const uniqueCount = full.length;
    const repeatedCount = full.filter(x => x.count >= 2).length;
    const list = this.onlyRepeated ? full.filter(x => x.count >= 2) : full;
    if (!list.length) { box.innerHTML = `<p class="text-center py-10 text-gray-400">${this.tt('wr_none')}</p>`; return; }

    box.innerHTML = `
      <div class="flex flex-wrap gap-4 justify-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        <span>${this.tt('wr_total_words')}: <b class="text-gray-800 dark:text-gray-100">${total}</b></span>
        <span>${this.tt('wr_unique')}: <b class="text-gray-800 dark:text-gray-100">${uniqueCount}</b></span>
        <span>${this.tt('wr_repeated')}: <b class="text-gray-800 dark:text-gray-100">${repeatedCount}</b></span>
      </div>
      <p class="text-center text-xs text-gray-400 mb-3">${this.tt('wr_tap_hint')}</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        ${list.map(x => this.termChip(x)).join('')}
      </div>`;
    if (this.type === 'exact') this.ensureMeta();
  }

  termChip(x) {
    const open = this.openTerm === x.term;
    const meaning = this.type === 'exact' ? this.meaningOf(x.term) : '';
    return `
      <div class="${open ? 'col-span-2 sm:col-span-3 lg:col-span-4' : ''} rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <button data-term="${this.esc(x.term)}" data-first-ref="${x.firstRef}" class="w-full flex flex-col items-center gap-1 px-2 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/40 rounded-xl transition-colors">
          <span class="ayah-arabic text-2xl" dir="rtl">${this.esc(x.term)}</span>
          ${meaning ? `<span class="text-[11px] text-gray-600 dark:text-gray-300 text-center leading-tight" dir="auto">${this.esc(meaning)}</span>` : ''}
          <span class="flex flex-wrap items-center justify-center gap-1 mt-0.5">
            <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-secondary/10 text-secondary dark:text-emerald-300" title="${this.tt('wr_in_surah')}">${this.tt('wr_surah_short')} ×${x.count}</span>
            ${x.quran != null ? `<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-blue-300" title="${this.tt('wr_in_quran')}">${this.tt('wr_quran_short')} ×${x.quran}</span>` : ''}
          </span>
        </button>
        ${x.refs.length ? `<div class="px-2 pb-1 text-center"><button data-occ="${this.esc(x.term)}" class="text-[10px] text-gray-400 hover:text-primary">${open ? '▾' : '▸'} ${x.refs.length} ${this.tt('topics_verses_label')}</button></div>` : ''}
        ${open ? `
          <div class="mx-2 mb-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/40">
            <div class="flex flex-wrap gap-1.5 justify-center">
              ${x.refs.map(r => `<button data-verse="${r}" data-term-word="${this.esc(x.term)}" class="text-xs font-mono px-2 py-1 rounded-md ${this.openVerse === r ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-primary hover:text-white'}">${r}</button>`).join('')}
            </div>
            ${this.openVerse && x.refs.includes(this.openVerse) ? `<div id="wr-inline" class="mt-3">${this.inlineVerseLoading()}</div>` : ''}
          </div>` : ''}
      </div>`;
  }

  // In-module ayah preview — stays inside Word Repetition (no tab switch).
  ensureAyahModal() {
    if (this.ayahModal) return;
    this.ayahModal = document.createElement('div');
    this.ayahModal.id = 'wr-ayah-modal';
    this.ayahModal.className = 'fixed inset-0 bg-black/60 z-[70] items-center justify-center p-4 hidden';
    this.ayahModal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-3xl max-h-[88vh] flex flex-col">
        <div class="flex items-center gap-2 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 id="wr-ayah-title" class="flex-1 font-bold text-gray-800 dark:text-gray-100"></h3>
          <button id="wr-ayah-close" class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>
        </div>
        <div id="wr-ayah-body" class="flex-1 overflow-y-auto p-5"></div>
      </div>`;
    document.body.appendChild(this.ayahModal);
    if (window.escClose) window.escClose(this.ayahModal, () => { if (this._ayahAudio) this._ayahAudio.pause(); this.ayahModal.classList.add('hidden'); this.ayahModal.classList.remove('flex'); });
    this.ayahModal.addEventListener('click', (e) => {
      if (e.target === this.ayahModal || e.target.closest('#wr-ayah-close')) {
        if (this._ayahAudio) this._ayahAudio.pause();
        this.ayahModal.classList.add('hidden'); this.ayahModal.classList.remove('flex'); return;
      }
      const wp = e.target.closest('[data-word-audio]');
      if (wp) { if (!this._ayahAudio) this._ayahAudio = new Audio(); this._ayahAudio.src = wp.getAttribute('data-word-audio'); this._ayahAudio.play().catch(() => {}); return; }
      const fp = e.target.closest('[data-ayah-audio]');
      if (fp) { if (!this._ayahAudio) this._ayahAudio = new Audio(); this._ayahAudio.src = fp.getAttribute('data-ayah-audio'); this._ayahAudio.play().catch(() => {}); }
    });
  }

  async openAyah(ref, term) {
    const lang = this.language;
    this.ensureAyahModal();
    this.ayahModal.classList.remove('hidden'); this.ayahModal.classList.add('flex');
    this.ayahModal.querySelector('#wr-ayah-title').textContent = ref;
    const body = this.ayahModal.querySelector('#wr-ayah-body');
    body.innerHTML = `<p class="text-center text-gray-400 py-8">${this.tt('loading')}</p>`;
    try {
      const [s, a] = ref.split(':').map(Number);
      const v = (await QuranData.fetchRange(s, a, a, lang))[0];
      if (!v) throw new Error('nf');
      this.ayahModal.querySelector('#wr-ayah-title').textContent = `${v.surahName} ${v.key}`;
      const norm = x => (QuranData.normalizeWord ? QuranData.normalizeWord(x || '') : String(x || ''));
      // For root matches term is an Arabic root; for exact it's a normalized token.
      const wbw = (v.words || []).map(w => {
        const hit = term && (norm(w.arabic) === norm(term) || (w.arabic || '').indexOf(term) >= 0);
        const canPlay = !!w.audio;
        return `<button ${canPlay ? `data-word-audio="${this.esc(w.audio)}"` : ''}
                  class="inline-flex flex-col items-center px-2 py-1 my-1 rounded-lg ${canPlay ? 'hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer' : ''} ${hit ? 'ring-2 ring-amber-400 bg-amber-50 dark:bg-amber-500/10' : ''}">
                  <span class="ayah-arabic !text-2xl block">${w.arabic}</span>
                  <span class="text-[11px] text-gray-500 dark:text-gray-400 block" dir="auto">${w.meaning || ''}</span>
                </button>`;
      }).join('');
      const pad = n => String(n).padStart(3, '0');
      body.innerHTML = `
        <div class="ayah-arabic !text-3xl !leading-loose text-center mb-3" dir="rtl">${v.arabic}</div>
        <div class="flex flex-wrap justify-center gap-x-1 mb-3" dir="rtl">${wbw}</div>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-4" dir="auto">${v.translation || ''}</p>
        <div class="flex justify-center">
          <button data-ayah-audio="https://everyayah.com/data/Alafasy_128kbps/${pad(s)}${pad(a)}.mp3"
                  class="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:bg-primary/80">🔊 ${this.tt('play_full_ayah')}</button>
        </div>`;
    } catch (e) {
      body.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-8">${this.tt('topics_load_error')}</p>`;
    }
  }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let wordRepeat;
document.addEventListener('DOMContentLoaded', () => { wordRepeat = new WordRepeat(); });
