/**
 * Word by Word Module
 * Renders per-word Arabic + transliteration + meaning cards, with a detail
 * panel showing grammar (morphology), root, and occurrences in other verses.
 */

class WordByWord {
  constructor() {
    this.container = document.getElementById('wbw-container');
    this.ayahs = [];
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.wordAudio = new Audio();
    this.prefs = this.loadPrefs();   // remembered display preferences

    if (this.container) {
      window.addEventListener('ayahsLoaded', (e) => {
        this.ayahs = e.detail.ayahs;
        this.language = e.detail.language;
        this.render();
      });

      this.container.addEventListener('click', (e) => this.onClick(e));
      window.addEventListener('audioStateChanged', (e) => this.syncAudio(e.detail));
      window.addEventListener('settingChanged', (e) => {
        if (e.detail.key !== 'language') return;
        this.language = e.detail.value;
        this.render();
      });
      this.createDetailPanel();
    }
  }

  /** Remembered display preferences (localStorage, defensive). */
  loadPrefs() {
    const def = { translit: true };
    try { return Object.assign(def, JSON.parse(localStorage.getItem('wbw_prefs')) || {}); }
    catch (e) { return def; }
  }
  savePrefs() {
    try { localStorage.setItem('wbw_prefs', JSON.stringify(this.prefs)); } catch (e) { /* ignore */ }
  }

  render() {
    if (this.ayahs.length === 0) {
      this.container.innerHTML = `
        <p class="text-gray-500 dark:text-gray-400 text-center py-12" data-lang-key="load_ayah_first">${t('load_ayah_first', this.language)}</p>
      `;
      return;
    }

    const lang = this.language;
    const oneSurah = this.ayahs.length && this.ayahs.every(a => a.surah === this.ayahs[0].surah);
    const surahBanner = (oneSurah && typeof QuranData !== 'undefined' && QuranData.surahInfoBannerHtml)
      ? QuranData.surahInfoBannerHtml(this.ayahs[0].surah, lang) : '';
    this.container.innerHTML = `
      ${surahBanner}
      <div class="flex items-center flex-wrap gap-2 mb-4">
        <button data-play-all class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90">
          <span class="pa-icon text-base leading-none">▶</span><span class="pa-label">${t('play_all', lang)}</span>
        </button>
        <button data-translit-toggle aria-pressed="${this.prefs.translit}"
                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm ${this.prefs.translit ? 'bg-blue-50 dark:bg-gray-700 text-primary dark:text-blue-400 border-primary' : 'text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700'}">
          <span class="tt-icon">${this.prefs.translit ? '👁' : '🚫'}</span> ${t('transliteration', lang)}
        </button>
      </div>
      ${this.ayahs.map(ayah => `
        <div class="ayah-play-card bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4 transition-shadow" data-play-key="${ayah.key}">
          <div class="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
            <span class="ayah-number">${ayah.ayah}</span>
            <button class="ayah-play-btn p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-primary dark:text-blue-400 leading-none"
                    data-play-ref="${ayah.key}" title="${t('play', lang)}" aria-label="${t('play', lang)}">▶</button>
            <span class="ml-auto">${ayah.surahName} ${ayah.key}</span>
          </div>
          <div class="flex flex-wrap gap-2" dir="rtl">
            ${ayah.words.map(w => this.renderWordTile(ayah, w)).join('')}
          </div>
        </div>
      `).join('')}`;
    this.syncAudio(this.audioState());
  }

  /** Current shared-audio state (safe before the player exists). */
  audioState() {
    return (typeof audioPlayer !== 'undefined' && audioPlayer)
      ? { playing: audioPlayer.isPlaying(), key: audioPlayer.currentKey() }
      : { playing: false, key: null };
  }

  /** Reflect play/pause state on the per-ayah + global buttons and playing card. */
  syncAudio(state) {
    if (!this.container) return;
    const { playing, key } = state || {};
    this.container.querySelectorAll('.ayah-play-btn').forEach(btn => {
      btn.textContent = (playing && btn.getAttribute('data-play-ref') === key) ? '⏸' : '▶';
    });
    this.container.querySelectorAll('.ayah-play-card').forEach(card => {
      const on = playing && card.getAttribute('data-play-key') === key;
      card.classList.toggle('ring-2', on);
      card.classList.toggle('ring-primary', on);
    });
    const pa = this.container.querySelector('[data-play-all]');
    if (pa) {
      const i = pa.querySelector('.pa-icon'), l = pa.querySelector('.pa-label');
      if (i) i.textContent = playing ? '⏸' : '▶';
      if (l) l.textContent = t(playing ? 'pause_all' : 'play_all', this.language);
    }
  }

  /** Reflect the transliteration toggle's pressed state on its button. */
  updateTranslitToggle() {
    const b = this.container && this.container.querySelector('[data-translit-toggle]');
    if (!b) return;
    const on = !!this.prefs.translit;
    b.setAttribute('aria-pressed', on);
    b.classList.toggle('bg-blue-50', on);
    b.classList.toggle('dark:bg-gray-700', on);
    b.classList.toggle('text-primary', on);
    b.classList.toggle('dark:text-blue-400', on);
    b.classList.toggle('border-primary', on);
    b.classList.toggle('text-gray-500', !on);
    b.classList.toggle('dark:text-gray-400', !on);
    b.classList.toggle('border-gray-200', !on);
    b.classList.toggle('dark:border-gray-700', !on);
    const ic = b.querySelector('.tt-icon'); if (ic) ic.textContent = on ? '👁' : '🚫';
  }

  renderWordTile(ayah, w) {
    return `
      <button class="wbw-word group text-center max-w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700
                     hover:border-primary hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              data-key="${ayah.key}" data-pos="${w.position}">
        <div class="ayah-arabic !text-2xl !leading-relaxed !mb-0 !pb-0 !border-b-0">${w.arabic}</div>
        <div class="wbw-translit text-xs text-gray-400 dark:text-gray-500 italic break-words ${this.prefs.translit ? '' : 'hidden'}" dir="ltr">${w.translit}</div>
        <div class="text-sm text-gray-700 dark:text-gray-300 break-words" dir="auto">${w.meaning}</div>
      </button>
    `;
  }

  onClick(e) {
    // Display preference: transliteration on/off (remembered in localStorage)
    const tg = e.target.closest('[data-translit-toggle]');
    if (tg) {
      this.prefs.translit = !this.prefs.translit;
      this.savePrefs();
      this.container.querySelectorAll('.wbw-translit').forEach(el => el.classList.toggle('hidden', !this.prefs.translit));
      this.updateTranslitToggle();
      return;
    }

    // Audio controls: global play-all + per-ayah play/pause (shared player)
    const all = e.target.closest('[data-play-all]');
    if (all) { if (typeof audioPlayer !== 'undefined' && audioPlayer) audioPlayer.togglePlayAll(); return; }
    const one = e.target.closest('[data-play-ref]');
    if (one) { window.dispatchEvent(new CustomEvent('playAyah', { detail: { ref: one.getAttribute('data-play-ref') } })); return; }

    const tile = e.target.closest('.wbw-word');
    if (!tile) return;
    const key = tile.getAttribute('data-key');
    const pos = parseInt(tile.getAttribute('data-pos'));
    const ayah = this.ayahs.find(a => a.key === key);
    const word = ayah?.words.find(w => w.position === pos);
    if (!ayah || !word) return;

    // First tap on a word plays its audio; tapping the SAME word again within
    // 3s opens the word-repetition detail (gated by the `wordTapRepeat` setting).
    const repeatOn = (typeof appSettings === 'undefined' || !appSettings) || appSettings.get('wordTapRepeat') !== false;
    const id = `${key}:${pos}`;
    const now = Date.now();
    if (repeatOn && this._tapId === id && (now - this._tapAt) < 3000) {
      this._tapId = null; this._tapAt = 0;
      this.showDetail(ayah, word);
      return;
    }
    this._tapId = id; this._tapAt = now;
    if (word.audio) {
      this.wordAudio.src = word.audio;
      this.wordAudio.currentTime = 0;
      this.wordAudio.play().catch(() => {});
    }
    // Brief visual pulse so the first tap gives feedback even without the panel.
    tile.classList.add('ring-2', 'ring-primary');
    setTimeout(() => tile.classList.remove('ring-2', 'ring-primary'), 600);
  }

  createDetailPanel() {
    this.panel = document.createElement('div');
    this.panel.id = 'word-detail-panel';
    this.panel.className = 'fixed inset-x-0 bottom-0 z-50 hidden';
    this.panel.innerHTML = `
      <div class="max-w-6xl w-[95vw] mx-auto m-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
          <div id="wdp-title" class="font-semibold"></div>
          <button id="wdp-close" aria-label="${t('close', this.language)}" title="${t('close', this.language)}" class="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg leading-none">✕</button>
        </div>
        <div id="wdp-body" class="p-5"></div>
      </div>
    `;
    document.body.appendChild(this.panel);
    this.panel.querySelector('#wdp-close').addEventListener('click', () => this.hideDetail());

    // Delegate clicks inside the panel (audio, occurrence chips, previews)
    this.panel.addEventListener('click', (e) => {
      const audioBtn = e.target.closest('[data-word-audio]');
      if (audioBtn) {
        this.wordAudio.src = audioBtn.getAttribute('data-word-audio');
        this.wordAudio.play().catch(() => {});
        return;
      }

      // Copy this word's info to the clipboard
      if (e.target.closest('[data-word-copy]')) { this.copyWordInfo(); return; }

      // Mini "quiz me on this word's meaning"
      if (e.target.closest('[data-quiz-start]')) { this.startWordQuiz(); return; }
      const opt = e.target.closest('[data-quiz-opt]');
      if (opt) { this.answerWordQuiz(opt); return; }

      // Occurrence chip → inline verse preview (stay in the modal)
      const chip = e.target.closest('[data-preview]');
      if (chip) {
        this.showVersePreview(chip);
        return;
      }

      // "Show more" chips
      const more = e.target.closest('[data-more-section]');
      if (more) {
        this.appendChips(more.getAttribute('data-more-section'));
        return;
      }

      // Explicit navigation from a preview (closes the modal)
      const goto = e.target.closest('[data-goto-verse]');
      if (goto) {
        this.hideDetail();
        window.location.hash = goto.getAttribute('data-goto-verse');
      }
    });
  }

  hideDetail() {
    if (this.wordAudio) this.wordAudio.pause();
    this.panel.classList.add('hidden');
  }

  async showDetail(ayah, word) {
    const lang = this.language;
    this._detailToken = (this._detailToken || 0) + 1;
    const token = this._detailToken;   // guard: drop stale async renders from rapid clicks
    this._occ = {};   // section id -> {locations, shown}
    this.panel.classList.remove('hidden');
    const closeBtn = this.panel.querySelector('#wdp-close');
    if (closeBtn) { closeBtn.setAttribute('aria-label', t('close', lang)); closeBtn.setAttribute('title', t('close', lang)); }
    this.panel.querySelector('#wdp-title').innerHTML =
      `<span class="ayah-arabic !text-xl !mb-0 !pb-0 !border-b-0">${word.arabic}</span>
       <span class="text-sm text-gray-500 dark:text-gray-400 mx-2">${ayah.key} · ${t('word', lang)} ${word.position}</span>`;

    const body = this.panel.querySelector('#wdp-body');
    body.innerHTML = `<p class="text-gray-400">${t('loading', lang)}</p>`;

    let morphHtml = '';
    let root = null;

    try {
      const morph = await QuranData.getMorphology(ayah.surah);
      const segments = morph[String(ayah.ayah)]?.[word.position - 1] || [];
      root = segments.map(s => s.r).find(Boolean) || null;
      morphHtml = renderSegments(segments, lang);
    } catch (err) {
      morphHtml = `<p class="text-gray-400 text-sm">${t('grammar_unavailable', lang)}</p>`;
    }

    // Exact-word repetition (same written form anywhere in the Quran)
    let exactHtml = '';
    try {
      const index = await QuranData.getWordIndex();
      const normalized = QuranData.normalizeWord(word.arabic);
      const locations = index[normalized] || [];
      exactHtml = this.occurrenceSection('exact',
        `${t('exact_word_repeat', lang)} <span class="ayah-arabic !text-xl !mb-0 !pb-0 !border-b-0 mx-1">${word.arabic}</span>`,
        locations, lang);
    } catch (err) { /* index unavailable — skip */ }

    // Same-root repetition
    let rootHtml = '';
    if (root) {
      try {
        const roots = await QuranData.getRoots();
        const locations = roots[root] || [];
        rootHtml = this.occurrenceSection('root',
          `${t('root_word_repeat', lang)} <span class="ayah-arabic !text-xl !mb-0 !pb-0 !border-b-0 mx-1">${root.split('').join(' ')}</span>`,
          locations, lang);
      } catch (err) { /* skip */ }
    }

    if (token !== this._detailToken) return;   // a newer word was clicked meanwhile
    const corpusLoc = `(${ayah.surah}:${ayah.ayah}:${word.position})`;

    body.innerHTML = `
      <div class="flex flex-wrap items-center gap-4 mb-4">
        <div>
          <div class="text-xs text-gray-400 uppercase">${t('meaning', lang)}</div>
          <div class="font-medium" dir="auto">${word.meaning}</div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase">${t('transliteration', lang)}</div>
          <div class="italic">${word.translit}</div>
        </div>
        <div class="ml-auto flex items-center gap-2">
          <button data-word-copy class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            📋 ${t('copy', lang)}
          </button>
          ${word.audio ? `
            <button data-word-audio="${word.audio}" class="px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/80">
              🔊 ${t('play', lang)}
            </button>` : ''}
        </div>
      </div>
      <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
        ${t('grammar', lang)}
        <a href="https://corpus.quran.com/wordmorphology.jsp?location=${encodeURIComponent(corpusLoc)}"
           target="_blank" rel="noopener" class="ml-2 text-xs normal-case font-normal text-primary dark:text-blue-400 hover:underline">
          corpus.quran.com ↗
        </a>
      </h4>
      ${morphHtml}
      ${exactHtml}
      ${rootHtml}
      <div class="mt-5">
        <button data-quiz-start class="px-3 py-2 rounded-lg border border-primary text-primary dark:text-blue-400 text-sm hover:bg-blue-50 dark:hover:bg-gray-700">
          🧠 ${t('wbw_quiz_me', lang)}
        </button>
      </div>
      <div id="wdp-quiz"></div>
    `;

    // Remember the currently-detailed word for copy / quiz actions
    this._cur = { ayah, word, root };

    // Fill the first page of occurrence chips
    if (this._occ.exact) this.appendChips('exact');
    if (this._occ.root) this.appendChips('root');
  }

  /** Copy the current word's Arabic + transliteration + meaning (+root) to clipboard. */
  copyWordInfo() {
    const c = this._cur; if (!c) return;
    const lang = this.language;
    const parts = [c.word.arabic, c.word.translit, c.word.meaning];
    if (c.root) parts.push(`${t('root', lang)}: ${c.root}`);
    const text = parts.filter(Boolean).join('\n');
    const done = () => {
      const b = this.panel.querySelector('[data-word-copy]');
      if (!b) return;
      const prev = b.innerHTML;
      b.innerHTML = `✓ ${t('copied', lang)}`;
      setTimeout(() => { b.innerHTML = prev; }, 1500);
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => this.fallbackCopy(text, done));
      } else {
        this.fallbackCopy(text, done);
      }
    } catch (e) { this.fallbackCopy(text, done); }
  }

  fallbackCopy(text, done) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (done) done();
    } catch (e) { /* clipboard unavailable — ignore */ }
  }

  /** Render a 4-option "what does this word mean?" mini-check (distractors from same ayah). */
  startWordQuiz() {
    const c = this._cur; if (!c) return;
    const lang = this.language;
    const box = this.panel.querySelector('#wdp-quiz'); if (!box) return;
    const correct = (c.word.meaning || '').trim();
    if (!correct) return;
    const pool = [];
    (c.ayah.words || []).forEach(w => {
      const m = (w.meaning || '').trim();
      if (m && m !== correct && !pool.includes(m)) pool.push(m);
    });
    this.shuffle(pool);
    const opts = pool.slice(0, 3);
    opts.push(correct);
    this.shuffle(opts);
    box.innerHTML = `
      <div class="mt-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
        <div class="text-sm font-medium mb-2">
          ${t('wbw_quiz_prompt', lang)}
          <span class="ayah-arabic !text-xl !mb-0 !pb-0 !border-b-0 mx-1">${c.word.arabic}</span>
        </div>
        <div class="flex flex-col gap-2">
          ${opts.map(o => `
            <button data-quiz-opt="${encodeURIComponent(o)}"
                    class="text-left px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-blue-50 dark:hover:bg-gray-700" dir="auto">${o}</button>
          `).join('')}
        </div>
        <div class="wdp-quiz-result mt-2 text-sm font-medium"></div>
      </div>`;
  }

  answerWordQuiz(btn) {
    const c = this._cur; if (!c) return;
    const box = this.panel.querySelector('#wdp-quiz'); if (!box) return;
    const chosen = decodeURIComponent(btn.getAttribute('data-quiz-opt'));
    const correct = (c.word.meaning || '').trim();
    box.querySelectorAll('[data-quiz-opt]').forEach(b => {
      const v = decodeURIComponent(b.getAttribute('data-quiz-opt'));
      b.disabled = true;
      if (v === correct) b.classList.add('bg-green-100', 'dark:bg-green-900/40', 'border-green-400');
      else if (v === chosen) b.classList.add('bg-red-100', 'dark:bg-red-900/40', 'border-red-400');
    });
    const res = box.querySelector('.wdp-quiz-result');
    if (res) {
      const okay = chosen === correct;
      res.textContent = okay ? t('quiz_correct', this.language) : t('quiz_wrong', this.language);
      res.classList.add(okay ? 'text-green-600' : 'text-red-600');
    }
  }

  /** Fisher–Yates in-place shuffle. */
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /**
   * One occurrence section (exact-word or same-root): count + paged chips +
   * an inline preview area. Chips preview the verse INSIDE the modal.
   */
  occurrenceSection(id, headingHtml, locations, lang) {
    this._occ[id] = { locations, shown: 0 };
    return `
      <div class="mt-5" data-occ-section="${id}">
        <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
          ${headingHtml}
          — <span class="text-primary dark:text-blue-400">${locations.length}</span> ${t('occurrences', lang)}
        </h4>
        <div class="occ-chips flex flex-wrap gap-2"></div>
        <div class="occ-preview mt-2"></div>
      </div>
    `.trim();
  }

  /** Append the next batch of chips for a section (called after render + on "show more") */
  appendChips(id, batch = 40) {
    const state = this._occ[id];
    const section = this.panel.querySelector(`[data-occ-section="${id}"]`);
    if (!state || !section) return;

    const chipsEl = section.querySelector('.occ-chips');
    // Drop the old "show more" button
    chipsEl.querySelector('[data-more-section]')?.remove();

    const next = state.locations.slice(state.shown, state.shown + batch);
    state.shown += next.length;

    chipsEl.insertAdjacentHTML('beforeend', next.map(loc => {
      const [s, a, w] = loc.split(':');
      return `
        <button data-preview="${loc}" data-section="${id}"
                class="px-2 py-1.5 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300">
          ${s}:${a}
        </button>`;
    }).join(''));

    const remaining = state.locations.length - state.shown;
    if (remaining > 0) {
      chipsEl.insertAdjacentHTML('beforeend', `
        <button data-more-section="${id}"
                class="px-2 py-1.5 text-sm rounded border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
          +${remaining} ${t('show_more', this.language)}
        </button>`);
    }
  }

  /** Fetch + render a verse preview inside the modal, highlighting the tapped word */
  async showVersePreview(chip) {
    const [s, a, w] = chip.getAttribute('data-preview').split(':').map(Number);
    const sectionId = chip.getAttribute('data-section');
    const section = this.panel.querySelector(`[data-occ-section="${sectionId}"]`);
    const previewEl = section?.querySelector('.occ-preview');
    if (!previewEl) return;

    const lang = this.language;
    previewEl.innerHTML = `<p class="text-sm text-gray-400 p-2">${t('loading', lang)}</p>`;

    try {
      const verses = await QuranData.fetchRange(s, a, a, lang);
      const verse = verses[0];
      if (!verse) throw new Error('not found');

      const arabicHtml = verse.words.map(word =>
        word.position === w
          ? `<span class="bg-amber-200 dark:bg-amber-700/60 rounded px-1">${word.arabic}</span>`
          : word.arabic
      ).join(' ');

      previewEl.innerHTML = `
        <div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/40 p-3">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">${verse.surahName} ${verse.key}</span>
            <button data-goto-verse="${verse.key}"
                    class="ml-auto px-2 py-1 text-xs rounded bg-primary text-white hover:bg-primary/80">
              ${t('open_verse', lang)} →
            </button>
          </div>
          <div class="ayah-arabic !text-2xl !leading-loose" dir="rtl">${arabicHtml}</div>
          <div class="mt-1 text-sm text-gray-600 dark:text-gray-300" dir="auto">${verse.translation}</div>
        </div>
      `;
    } catch (err) {
      previewEl.innerHTML = `<p class="text-sm text-gray-400 p-2">${t('error', lang)}</p>`;
    }
  }
}

/**
 * Render morphology segments of one word as labeled chips.
 * Shared with the Grammar tab.
 */
function renderSegments(segments, lang) {
  if (!segments.length) {
    return `<p class="text-gray-400 text-sm">${t('grammar_unavailable', lang)}</p>`;
  }

  // Corpus-style: the whole word with color-coded segments...
  const coloredWord = segments.map(seg =>
    `<span class="${segmentColor(seg)}">${seg.t}</span>`
  ).join('');

  // ...then one description line per segment
  return `
    <div class="p-3 rounded bg-gray-50 dark:bg-gray-700/50">
      <div class="ayah-arabic !text-3xl !leading-loose !mb-2 !pb-0 !border-b-0" dir="rtl">${coloredWord}</div>
      <div class="space-y-1.5">
        ${segments.map(seg => `
          <div class="flex flex-wrap items-baseline gap-2 text-sm">
            <span class="ayah-arabic !text-lg !mb-0 !pb-0 !border-b-0 min-w-[2.5rem] text-center ${segmentColor(seg)}">${seg.t}</span>
            <span class="text-gray-700 dark:text-gray-200">${corpusDescribe(seg)}</span>
            ${seg.r ? `<span class="text-xs text-gray-500 dark:text-gray-400">${t('root', lang)}: <span class="ayah-arabic !text-base !mb-0 !pb-0 !border-b-0">${seg.r.split('').join(' ')}</span></span>` : ''}
            ${seg.l ? `<span class="text-xs text-gray-500 dark:text-gray-400">${t('lemma', lang)}: <span class="ayah-arabic !text-base !mb-0 !pb-0 !border-b-0">${seg.l}</span></span>` : ''}
          </div>`).join('')}
      </div>
    </div>
  `;
}

// Initialize when DOM is ready
let wordByWord;
document.addEventListener('DOMContentLoaded', () => {
  wordByWord = new WordByWord();
});
