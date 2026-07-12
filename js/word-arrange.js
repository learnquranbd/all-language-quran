/**
 * Word-Arrangement Memory Test.
 *
 * Shows a verse's word-by-word MEANINGS in order with the Arabic hidden, so you
 * can recall the wording from memory and self-check. Two modes:
 *   • Reveal  — meanings listed; each Arabic word is blurred, tap to reveal.
 *   • Arrange — the Arabic words are shuffled into a pool; tap them in order to
 *               match the meaning slots, then Check.
 *
 * Words come from QuranData.fetchRange (quran.com WBW: { arabic, meaning }).
 * Renders into #word-arrange-root (Memorize tab → "Arrange" mode).
 */

class WordArrange {
  constructor() {
    this.root = document.getElementById('word-arrange-root');
    if (!this.root) return;

    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? appSettings.get('language') : 'en';
    this.surah = 112;
    this.ayah = 1;
    this.mode = 'reveal';
    this.words = null;         // [{ arabic, meaning }]
    this.revealed = new Set(); // reveal-mode: indices shown
    this.placed = [];          // arrange-mode: pool indices placed into slots (in order)
    this.rendered = false;

    window.addEventListener('learnModuleSelected', (e) => {
      if (e.detail && e.detail.module === 'wordarrange') this.render();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail && e.detail.key === 'language') { this.language = e.detail.value; if (this.rendered) this.load(); }
    });

    this.root.addEventListener('click', (e) => this.onClick(e));
    this.root.addEventListener('change', (e) => {
      if (e.target.id === 'wa-surah') { this.surah = parseInt(e.target.value); this.ayah = 1; this.load(); }
      else if (e.target.id === 'wa-ayah') { this.ayah = parseInt(e.target.value); this.load(); }
    });
  }

  tt(key) { return t(key, this.language); }

  render() {
    this.rendered = true;
    const lang = this.language;
    const surah = getSurahByNumber(this.surah);
    const ayahCount = surah ? surah.ayahCount : 7;
    this.root.innerHTML = `
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-5">
          <h3 class="text-xl font-bold mb-1">🔀 ${this.tt('wa_title')}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('wa_subtitle')}</p>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-2 mb-4">
          <select id="wa-surah" class="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
            ${SURAH_DATA.map(s => `<option value="${s.number}" ${s.number === this.surah ? 'selected' : ''}>${this.esc(formatSurahOption(s, lang))}</option>`).join('')}
          </select>
          <select id="wa-ayah" class="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
            ${Array.from({ length: ayahCount }, (_, i) => i + 1).map(a => `<option value="${a}" ${a === this.ayah ? 'selected' : ''}>${this.tt('ayah')} ${a}</option>`).join('')}
          </select>
          <div class="inline-flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <button data-mode="reveal" class="wa-mode px-3 py-2 text-sm ${this.mode === 'reveal' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wa_mode_reveal')}</button>
            <button data-mode="arrange" class="wa-mode px-3 py-2 text-sm ${this.mode === 'arrange' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}">${this.tt('wa_mode_arrange')}</button>
          </div>
        </div>
        <div id="wa-board" class="bg-white dark:bg-gray-800 rounded-2xl shadow p-5 min-h-[180px]"></div>
      </div>`;
    this.load();
  }

  async load() {
    const board = this.root.querySelector('#wa-board');
    if (!board) return;
    board.innerHTML = `<div class="text-center py-10 text-gray-400">${this.tt('loading')}</div>`;
    try {
      const verses = await QuranData.fetchRange(this.surah, this.ayah, this.ayah, this.language);
      const v = verses && verses[0];
      this.words = (v && v.words ? v.words : []).filter(w => w.arabic && w.meaning);
      if (!this.words.length) { board.innerHTML = `<div class="text-center py-10 text-gray-400">${this.tt('wa_no_words')}</div>`; return; }
    } catch (e) {
      board.innerHTML = `<div class="text-center py-10 text-red-500">${this.tt('topics_load_error')}</div>`;
      return;
    }
    this.revealed = new Set();
    this.buildArrangePool();
    this.renderBoard();
  }

  buildArrangePool() {
    // Deterministic-ish shuffle (no Math.random dependency on load order): rotate by ayah+len.
    const idx = this.words.map((_, i) => i);
    const seed = (this.surah * 31 + this.ayah * 7 + this.words.length) % (this.words.length || 1);
    for (let r = 0; r < seed + 3; r++) {
      for (let i = idx.length - 1; i > 0; i--) {
        const j = (i * 7 + seed + r) % (i + 1);
        [idx[i], idx[j]] = [idx[j], idx[i]];
      }
    }
    this.pool = idx;         // shuffled order of original indices
    this.placed = [];        // original indices placed so far, in order
  }

  renderBoard() {
    const board = this.root.querySelector('#wa-board');
    if (this.mode === 'reveal') return this.renderReveal(board);
    this.renderArrange(board);
  }

  // ---- Reveal mode -------------------------------------------------------
  renderReveal(board) {
    const allShown = this.revealed.size === this.words.length;
    board.innerHTML = `
      <div class="flex justify-end mb-3">
        <button data-reveal-all class="text-xs px-3 py-1.5 rounded-lg bg-secondary text-white hover:bg-secondary/90">
          ${allShown ? this.tt('wa_hide_all') : this.tt('wa_reveal_all')}
        </button>
      </div>
      <div class="space-y-2" dir="ltr">
        ${this.words.map((w, i) => {
          const shown = this.revealed.has(i);
          return `
            <div class="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/40">
              <span class="shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-xs flex items-center justify-center">${i + 1}</span>
              <span class="flex-1 text-sm text-gray-600 dark:text-gray-300" dir="auto">${this.esc(w.meaning)}</span>
              <button data-reveal="${i}" class="min-w-[90px] text-right ayah-arabic text-2xl px-2 transition ${shown ? '' : 'blur-sm hover:blur-none'}" dir="rtl" title="${this.tt('wa_tap_reveal')}">${this.esc(w.arabic)}</button>
            </div>`;
        }).join('')}
      </div>`;
  }

  // ---- Arrange mode ------------------------------------------------------
  renderArrange(board) {
    const done = this.placed.length === this.words.length;
    board.innerHTML = `
      <p class="text-center text-sm text-gray-500 mb-3">${this.tt('wa_tap_hint')}</p>
      <div class="space-y-1.5 mb-4" dir="ltr">
        ${this.words.map((w, i) => {
          const placedIdx = this.placed[i];              // original index placed in slot i
          const filled = placedIdx !== undefined;
          const correct = filled && placedIdx === i;
          return `
            <div class="flex items-center gap-3 p-2 rounded-lg ${filled ? (correct ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20') : 'bg-gray-50 dark:bg-gray-900/40'}">
              <span class="shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-xs flex items-center justify-center">${i + 1}</span>
              <span class="flex-1 text-sm text-gray-600 dark:text-gray-300" dir="auto">${this.esc(w.meaning)}</span>
              <button ${filled ? `data-unplace="${i}"` : ''} class="min-w-[90px] text-right ayah-arabic text-2xl px-2" dir="rtl">${filled ? this.esc(this.words[placedIdx].arabic) : '<span class="text-gray-300 dark:text-gray-600">—</span>'}</button>
            </div>`;
        }).join('')}
      </div>
      <div class="border-t border-gray-100 dark:border-gray-700 pt-3">
        <div class="flex flex-wrap gap-2 justify-center min-h-[44px]">
          ${this.pool.map(origIdx => {
            const used = this.placed.includes(origIdx);
            return `<button data-place="${origIdx}" ${used ? 'disabled' : ''} class="ayah-arabic text-2xl px-3 py-1.5 rounded-lg border ${used ? 'opacity-30 border-gray-200 dark:border-gray-700' : 'border-primary/40 bg-primary/5 hover:bg-primary hover:text-white'}" dir="rtl">${this.esc(this.words[origIdx].arabic)}</button>`;
          }).join('')}
        </div>
        <div class="flex items-center justify-center gap-2 mt-4">
          <button data-reset class="text-xs px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">${this.tt('wa_reset')}</button>
          ${done ? `<span class="text-sm font-semibold ${this.placed.every((p, i) => p === i) ? 'text-green-600' : 'text-red-500'}">${this.placed.every((p, i) => p === i) ? '✓ ' + this.tt('wa_correct') : '✗ ' + this.tt('wa_wrong')}</span>` : ''}
        </div>
      </div>`;
  }

  onClick(e) {
    const mode = e.target.closest('[data-mode]');
    if (mode) { this.mode = mode.getAttribute('data-mode'); this.render(); return; }

    const revealAll = e.target.closest('[data-reveal-all]');
    if (revealAll) {
      if (this.revealed.size === this.words.length) this.revealed = new Set();
      else this.revealed = new Set(this.words.map((_, i) => i));
      this.renderBoard(); return;
    }
    const reveal = e.target.closest('[data-reveal]');
    if (reveal) { this.revealed.add(parseInt(reveal.getAttribute('data-reveal'))); this.renderBoard(); return; }

    const place = e.target.closest('[data-place]');
    if (place && !place.disabled) { this.placed.push(parseInt(place.getAttribute('data-place'))); this.renderBoard(); return; }
    const unplace = e.target.closest('[data-unplace]');
    if (unplace) { const slot = parseInt(unplace.getAttribute('data-unplace')); this.placed.splice(slot, 1); this.renderBoard(); return; }
    const reset = e.target.closest('[data-reset]');
    if (reset) { this.placed = []; this.renderBoard(); return; }
  }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let wordArrange;
document.addEventListener('DOMContentLoaded', () => { wordArrange = new WordArrange(); });
