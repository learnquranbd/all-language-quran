/**
 * Welcome / feature tour modal.
 *
 * Shown on EVERY arrival at the app, by request — it is a standing tour of what
 * the app offers rather than a one-time onboarding step. Dismiss with the
 * button, the ✕, Esc or a backdrop click.
 *
 * It renders in whatever language the reader last chose: appSettings persists
 * the language and is initialised by the deferred module scripts, all of which
 * have run by the time this opens (it waits for the load event). It also
 * rebuilds itself on a language change so a switch made while it is open is
 * reflected immediately.
 *
 * Deliberately cheap at startup: the DOM is not built until the modal is
 * actually going to be shown, and it waits for load so it can never delay first
 * paint or interactivity.
 */

const WelcomeModal = {
  overlay: null,

  lang() {
    try {
      return (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    } catch (e) { return 'en'; }
  },

  /** t() with an English fallback, so a missing key never renders a raw id. */
  tt(key, fb) {
    try {
      const v = t(key, this.lang());
      if (v && v !== key) return v;
    } catch (e) { /* translations not ready */ }
    return fb;
  },

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  },

  /** Each card maps to a real module the reader can open. */
  features() {
    return [
      { emoji: '📖', k: 'wm_f_read',     fbH: 'Read in your language',   fbB: 'The full Quran with translation in 15 languages, side by side with the Arabic.' },
      { emoji: '🔤', k: 'wm_f_word',     fbH: 'Word by word',            fbB: 'Tap any word for its meaning, root and grammatical role.' },
      { emoji: '🎧', k: 'wm_f_listen',   fbH: 'Listen and follow',       fbB: 'Recitation audio with the verse highlighted as it is read.' },
      { emoji: '🎨', k: 'wm_f_tajweed',  fbH: 'Tajweed in colour',       fbB: 'Recitation rules marked in the text, with lessons and practice drills.' },
      { emoji: '🧠', k: 'wm_f_memorize', fbH: 'Memorise and test',       fbB: 'Hifz tools, hidden-word practice and quizzes that track what you have learned.' },
      { emoji: '🔗', k: 'wm_f_mutash',   fbH: 'Mutashabihat',            fbB: 'Near-identical verses set side by side, with the differing words highlighted.' },
      { emoji: '🗂️', k: 'wm_f_vocab',    fbH: 'Quranic vocabulary',      fbB: 'The words that recur most, grouped by theme, with spaced-repetition practice.' },
      { emoji: '📝', k: 'wm_f_arabic',   fbH: 'Quranic Arabic course',   fbB: 'Grammar from the alphabet upward — 74 lessons, iʿrāb exercises and a glossary.' },
      { emoji: '🕌', k: 'wm_f_seerah',   fbH: 'Seerah',                  fbB: 'The life of the Prophet ﷺ as a timeline, with places, lessons and a quiz.' },
      { emoji: '🌟', k: 'wm_f_prophets', fbH: 'Prophets & Messengers',   fbB: 'All 25 named in the Quran, with their stories and every verse that mentions them.' },
      { emoji: '💭', k: 'wm_f_tadabbur', fbH: 'Tadabbur — reflect',      fbB: 'Every reflection-worthy verse with a note to ponder, and 299 of them with a full-length article.' },
      { emoji: '🕊️', k: 'wm_f_hope',     fbH: 'Hope & Character',        fbB: 'Verses of mercy for anyone who thinks they have gone too far — and the character the Qur’an asks for next.' },
    ];
  },

  ensure() {
    if (this.overlay) return;
    const lang = this.lang();
    const rtl = (typeof RTL_LANGUAGES !== 'undefined' && RTL_LANGUAGES.indexOf(lang) !== -1);

    const cards = this.features().map((f) => `
      <div class="flex gap-2.5 items-start p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-700">
        <span class="text-xl leading-none shrink-0" aria-hidden="true">${f.emoji}</span>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.tt(f.k + '_h', f.fbH))}</p>
          <p class="text-xs text-gray-600 dark:text-gray-300 leading-snug mt-0.5" dir="auto">${this.esc(this.tt(f.k + '_b', f.fbB))}</p>
        </div>
      </div>`).join('');

    this.overlay = document.createElement('div');
    this.overlay.id = 'welcome-modal';
    this.overlay.className = 'fixed inset-0 bg-black/60 z-[90] hidden items-center justify-center p-4';
    this.overlay.innerHTML = `
      <div role="dialog" aria-modal="true" aria-labelledby="wm-title" tabindex="-1"
           dir="${rtl ? 'rtl' : 'ltr'}"
           class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-2xl max-h-[90vh] flex flex-col focus:outline-none">
        <div class="flex items-start gap-2 px-5 pt-5 pb-3">
          <div class="flex-1 min-w-0">
            <h2 id="wm-title" class="text-lg font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.tt('wm_title', 'Welcome'))}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5" dir="auto">${this.esc(this.tt('wm_subtitle', 'A quick look at what you can do here.'))}</p>
          </div>
          <button id="wm-x" aria-label="${this.esc(this.tt('close', 'Close'))}"
                  class="p-2 -m-1 rounded-lg leading-none text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">✕</button>
        </div>
        <div class="flex-1 overflow-y-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-2">${cards}</div>
        <div class="px-5 py-4 mt-1 border-t border-gray-200 dark:border-gray-700">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-3" dir="auto"><span aria-hidden="true">📴</span> ${this.esc(this.tt('wm_offline', 'Everything works offline once loaded — install it to your home screen and read without a connection.'))}</p>
          <button id="wm-go" class="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90">${this.esc(this.tt('wm_start', 'Start reading'))}</button>
        </div>
      </div>`;
    document.body.appendChild(this.overlay);

    this.overlay.querySelector('#wm-x').addEventListener('click', () => this.close());
    this.overlay.querySelector('#wm-go').addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => { if (e.target === this.overlay) this.close(); });
    if (window.escClose) window.escClose(this.overlay, () => this.close());
  },

  open() {
    this.ensure();
    this._lastFocus = document.activeElement;
    this.overlay.classList.remove('hidden');
    this.overlay.classList.add('flex');
    const dlg = this.overlay.querySelector('[role="dialog"]');
    if (dlg) dlg.focus();
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.add('hidden');
    this.overlay.classList.remove('flex');
    try { if (this._lastFocus && this._lastFocus.focus) this._lastFocus.focus(); } catch (e) { /* ignore */ }
  },

  /** Rebuild on language change so a reopen renders in the current language. */
  reset() {
    if (!this.overlay) return;
    const wasOpen = !this.overlay.classList.contains('hidden');
    this.overlay.remove();
    this.overlay = null;
    if (wasOpen) this.open();
  },

  init() {
    // Rebuild on a language switch so the tour follows the reader's choice,
    // whether that choice was made now or on a previous visit.
    window.addEventListener('settingChanged', (e) => {
      try { if (e && e.detail && e.detail.key === 'language') this.reset(); } catch (_) { /* ignore */ }
    });
    // Every arrival, by request. Waiting for load keeps it off the critical
    // path and guarantees appSettings has restored the saved language first.
    const show = () => setTimeout(() => this.open(), 400);
    if (document.readyState === 'complete') show();
    else window.addEventListener('load', show, { once: true });
  },
};

WelcomeModal.init();
window.WelcomeModal = WelcomeModal;
