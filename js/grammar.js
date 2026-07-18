/**
 * Grammar Module
 * Full morphological breakdown of loaded ayahs from the
 * Quranic Arabic Corpus data (data/morphology/*.json).
 *
 * Enrichments: POS legend + colour key, POS highlight filter, per-ayah
 * summary (noun/verb/particle counts + roots), per-word actions
 * (copy morphology, corpus.quran.com link, jump to Sarf), an expandable
 * raw-feature detail row, a loading skeleton and graceful per-surah fallback.
 * Presentation/navigation only — all linguistic data comes from the corpus.
 */

/**
 * Localized strings for enrichments added to this module. These keys are NOT
 * yet in js/translations.js (which this module must not edit); they are reported
 * for later inclusion there. gui() prefers this map, then falls back to t() so
 * strings resolve the moment they land in translations.js.
 */
const GRAMMAR_STRINGS = {
  en: {
    gr_practice: 'Practice',
    gr_practice_prompt: 'Which part of speech is this word?',
    gr_practice_correct: 'Correct!',
    gr_practice_wrong: 'Not quite',
    gr_practice_next: 'Next',
    gr_practice_score: 'Score',
    gr_practice_accuracy: 'Accuracy',
    gr_practice_exit: 'Exit practice',
    gr_practice_reset: 'Reset score',
    gr_practice_none: 'Load an ayah to start practicing.',
  },
  bn: {
    gr_practice: 'অনুশীলন',
    gr_practice_prompt: 'এই শব্দটি কোন পদ?',
    gr_practice_correct: 'সঠিক!',
    gr_practice_wrong: 'ঠিক হয়নি',
    gr_practice_next: 'পরবর্তী',
    gr_practice_score: 'স্কোর',
    gr_practice_accuracy: 'নির্ভুলতা',
    gr_practice_exit: 'অনুশীলন বন্ধ',
    gr_practice_reset: 'স্কোর রিসেট',
    gr_practice_none: 'অনুশীলন শুরু করতে একটি আয়াত লোড করুন।',
  },
};

class GrammarView {
  constructor() {
    this.container = document.getElementById('grammar-container');
    this.ayahs = [];
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.rendered = false;
    this.filter = 'all';   // all | noun | verb | particle
    this.practiceOn = false;      // POS quiz mode toggle
    this.quiz = null;             // current practice question
    this.wordsPool = [];          // {arabic, pos, meaning} from loaded ayahs
    this.score = this.loadScore();// persisted cumulative quiz score

    if (this.container) {
      // One delegated handler survives every innerHTML re-render.
      this.container.addEventListener('click', (e) => this.onClick(e));

      window.addEventListener('ayahsLoaded', (e) => {
        this.ayahs = e.detail.ayahs;
        this.language = e.detail.language;
        this.rendered = false;
        // Render lazily when the tab is opened; render now if it's visible
        if (!document.getElementById('tab-grammar').classList.contains('hidden')) {
          this.render();
        }
      });

      window.addEventListener('tabChanged', (e) => {
        if (e.detail.tabId === 'grammar' && !this.rendered) {
          this.render();
        }
      });

      window.addEventListener('settingChanged', (e) => {
        if (e.detail.key !== 'language') return;
        this.language = e.detail.value;
        this.rendered = false;
        if (!document.getElementById('tab-grammar').classList.contains('hidden')) {
          this.render();
        }
      });
    }
  }

  // ---------------------------------------------------------------- helpers

  /** Top-level corpus part of speech for one segment. */
  posCategory(seg) {
    if (seg.g === 'V') return 'verb';
    if (seg.g === 'N') return 'noun';
    return 'particle';
  }

  /**
   * The word's head part of speech: prefer the root/lemma-bearing content
   * segment, skipping bare prefixes (attached ال / conjunction / preposition).
   */
  wordPrimaryPOS(segments) {
    const content = segments.filter(s => !(s.f || []).includes('PREF'));
    const pool = content.length ? content : segments;
    const head = pool.find(s => s.r) || pool.find(s => s.l) || pool[pool.length - 1] || segments[0];
    return head ? this.posCategory(head) : 'particle';
  }

  /** Plain-text morphology of one word, for the clipboard. */
  morphToText(ayah, segments, wordIndex) {
    const loc = `${ayah.surah}:${ayah.ayah}:${wordIndex + 1}`;
    const arabic = segments.map(s => s.t).join('');
    const lines = [`${arabic}  (${loc})`];
    const root = segments.map(s => s.r).find(Boolean);
    if (root) lines.push(`Root: ${root}`);
    segments.forEach(seg => {
      const desc = (typeof corpusDescribe === 'function') ? corpusDescribe(seg) : (seg.g || '');
      lines.push(`  ${seg.t} — ${desc}${seg.l ? '  [lemma ' + seg.l + ']' : ''}`);
    });
    return lines.join('\n');
  }

  esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /** Like t(), but prefers the local GRAMMAR_STRINGS map for enrichment-only keys. */
  gui(key) {
    const map = GRAMMAR_STRINGS[this.language] || GRAMMAR_STRINGS.en;
    return (map && map[key]) || (GRAMMAR_STRINGS.en && GRAMMAR_STRINGS.en[key]) || t(key, this.language);
  }

  // -------------------------------------------------------- quiz persistence
  loadScore() {
    try {
      const raw = localStorage.getItem('lq_grammar_quiz');
      const o = raw ? JSON.parse(raw) : null;
      if (o && typeof o.right === 'number' && typeof o.total === 'number') {
        return { right: o.right, total: o.total };
      }
    } catch (e) { /* ignore */ }
    return { right: 0, total: 0 };
  }

  saveScore() {
    try { localStorage.setItem('lq_grammar_quiz', JSON.stringify(this.score)); } catch (e) { /* ignore */ }
  }

  /** One POS question drawn from the loaded ayahs' words. */
  buildQuiz() {
    const pool = this.wordsPool;
    if (!pool.length) return null;
    const w = pool[Math.floor(Math.random() * pool.length)];
    return { arabic: w.arabic, meaning: w.meaning, answer: w.pos, picked: null };
  }

  // ----------------------------------------------------------------- render

  async render() {
    const lang = this.language;

    if (this.ayahs.length === 0) {
      this.container.innerHTML = `
        <p class="text-gray-500 dark:text-gray-400 text-center py-12" data-lang-key="load_ayah_first">${t('load_ayah_first', lang)}</p>
      `;
      return;
    }

    this.rendered = true;
    this.container.innerHTML = this.skeletonHtml();

    try {
      const surahNumbers = [...new Set(this.ayahs.map(a => a.surah))];
      const morphBySurah = {};
      // Resolve each surah independently so one missing file can't blank the tab.
      await Promise.all(surahNumbers.map(async s => {
        try {
          morphBySurah[s] = await QuranData.getMorphology(s);
        } catch (err) {
          console.warn('Grammar: morphology unavailable for surah', s, err);
          morphBySurah[s] = null;
        }
      }));

      this.wordsPool = [];
      const cards = this.ayahs.map(ayah => {
        const surahMorph = morphBySurah[ayah.surah];
        if (!surahMorph) {
          return `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              ${this.ayahHeaderHtml(ayah)}
              <p class="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">${t('gr_no_morph_surah', lang)}</p>
            </div>`;
        }
        const words = surahMorph[String(ayah.ayah)] || [];
        words.forEach((segments, i) => {
          const arabic = segments.map(s => s.t).join('');
          if (arabic) this.wordsPool.push({ arabic, pos: this.wordPrimaryPOS(segments), meaning: ayah.words?.[i]?.meaning || '' });
        });
        return `
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            ${this.ayahHeaderHtml(ayah)}
            ${this.ayahSummaryHtml(words, lang)}
            <div class="space-y-3">
              ${words.map((segments, i) => this.renderWordRow(ayah, segments, i)).join('')}
            </div>
          </div>
        `;
      }).join('');

      if (this.practiceOn) {
        this.container.innerHTML = this.toolbarHtml(lang) + this.practiceHtml(lang);
      } else {
        this.container.innerHTML = this.toolbarHtml(lang) + cards;
        this.applyFilter();
      }
    } catch (err) {
      console.error('Grammar render failed:', err);
      this.container.innerHTML = `
        <p class="text-gray-500 dark:text-gray-400 text-center py-12">${t('grammar_unavailable', lang)}</p>
      `;
    }
  }

  skeletonHtml() {
    const card = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 animate-pulse">
        <div class="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div class="space-y-3">
          ${[0, 1, 2].map(() => `
            <div class="border border-gray-100 dark:border-gray-700 rounded-lg p-3">
              <div class="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div class="h-16 bg-gray-100 dark:bg-gray-700/60 rounded"></div>
            </div>`).join('')}
        </div>
      </div>`;
    return `<div class="space-y-6">${card}${card}</div>`;
  }

  ayahHeaderHtml(ayah) {
    return `
      <div class="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
        <span class="ayah-number">${ayah.ayah}</span>
        <span>${ayah.surahName} ${ayah.key}</span>
      </div>`;
  }

  /** Colour key + POS highlight filter, shown once above all cards. */
  toolbarHtml(lang) {
    const swatch = (cls, label) =>
      `<span class="inline-flex items-center gap-1.5"><span class="w-3 h-3 rounded-full ${cls}"></span><span class="text-xs text-gray-600 dark:text-gray-300">${label}</span></span>`;

    const filterBtn = (key, label) =>
      `<button data-gfilter="${key}" class="gr-filter-btn text-xs px-3 py-1.5 rounded-full transition-colors">${label}</button>`;

    const wrJump = document.getElementById('tab-wordrepeat')
      ? `<button data-gr-wordrepeat class="text-xs px-3 py-1.5 rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white transition-colors">🔁 ${t('wr_title', lang)}</button>`
      : '';

    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-3">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">${t('gr_legend', lang)}</span>
          ${swatch('bg-red-600 dark:bg-red-400', t('gr_verbs', lang))}
          ${swatch('bg-sky-700 dark:bg-sky-400', t('gr_nouns', lang))}
          ${swatch('bg-emerald-600 dark:bg-emerald-400', t('gr_particles', lang))}
          ${swatch('bg-purple-600 dark:bg-purple-400', t('gr_pronoun', lang))}
          ${swatch('bg-indigo-600 dark:bg-indigo-400', t('gr_proper_noun', lang))}
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mr-1">${t('gr_highlight', lang)}</span>
          ${filterBtn('all', t('gr_filter_all', lang))}
          ${filterBtn('noun', t('gr_nouns', lang))}
          ${filterBtn('verb', t('gr_verbs', lang))}
          ${filterBtn('particle', t('gr_particles', lang))}
          <span class="ml-auto flex items-center gap-2">
            <button data-gr-practice aria-pressed="${this.practiceOn}"
              class="text-xs px-3 py-1.5 rounded-full transition-colors ${this.practiceOn ? 'bg-primary text-white' : 'bg-primary/10 text-primary dark:text-blue-300 hover:bg-primary hover:text-white'}">
              🎯 ${this.esc(this.gui('gr_practice'))}
            </button>
            ${wrJump}
          </span>
        </div>
      </div>`;
  }

  /** Per-ayah summary: POS counts + the distinct roots present. */
  ayahSummaryHtml(words, lang) {
    if (!words.length) return '';
    const counts = { noun: 0, verb: 0, particle: 0 };
    const roots = [];
    words.forEach(segments => {
      counts[this.wordPrimaryPOS(segments)]++;
      const r = segments.map(s => s.r).find(Boolean);
      if (r && !roots.includes(r)) roots.push(r);
    });

    const pill = (n, label, cls) =>
      `<span class="text-xs px-2 py-0.5 rounded-full ${cls}">${label}: <span class="font-semibold">${n}</span></span>`;

    const rootChips = roots.map(r =>
      `<button data-sarf-root="${this.esc(r)}" title="${t('sarf_title', lang)}"
         class="ayah-arabic !text-base !mb-0 !pb-0 !border-b-0 px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-fuchsia-500 hover:text-white transition-colors">${this.esc(r.split('').join(' '))}</button>`
    ).join('');

    return `
      <div class="mb-3 pb-3 border-b border-gray-100 dark:border-gray-700 space-y-2">
        <div class="flex flex-wrap items-center gap-2">
          ${pill(counts.noun, t('gr_nouns', lang), 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300')}
          ${pill(counts.verb, t('gr_verbs', lang), 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300')}
          ${pill(counts.particle, t('gr_particles', lang), 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300')}
        </div>
        ${roots.length ? `
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-xs text-gray-500 dark:text-gray-400 mr-1">${t('gr_roots', lang)}:</span>
            ${rootChips}
          </div>` : ''}
      </div>`;
  }

  renderWordRow(ayah, segments, wordIndex) {
    const lang = this.language;
    const apiWord = ayah.words[wordIndex];
    // Use the morphology segment text (always aligned with these segments) for the
    // Arabic; the quran.com word list can segment differently, so only borrow its meaning.
    const arabic = segments.map(s => s.t).join('') || apiWord?.arabic || '';
    const meaning = apiWord?.meaning || '';
    const root = segments.map(s => s.r).find(Boolean);
    const pos = this.wordPrimaryPOS(segments);
    const wid = `${ayah.surah}_${ayah.ayah}_${wordIndex}`;
    const corpusLoc = `(${ayah.surah}:${ayah.ayah}:${wordIndex + 1})`;
    const copyPayload = encodeURIComponent(this.morphToText(ayah, segments, wordIndex));

    return `
      <div class="border border-gray-100 dark:border-gray-700 rounded-lg p-3 transition-opacity" data-word-pos="${pos}">
        <div class="flex flex-wrap items-baseline gap-3 mb-2">
          <span class="text-xs text-gray-400">${wordIndex + 1}</span>
          <span class="ayah-arabic !text-2xl !mb-0 !pb-0 !border-b-0">${arabic}</span>
          <span class="text-sm text-gray-600 dark:text-gray-300" dir="auto">${meaning}</span>
          ${root ? `
            <button data-sarf-root="${this.esc(root)}" title="${t('gr_open_sarf', lang)}"
              class="ml-auto text-sm text-gray-500 dark:text-gray-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-300 transition-colors">
              ${t('root', lang)}: <span class="ayah-arabic !text-lg !mb-0 !pb-0 !border-b-0">${this.esc(root.split('').join(' '))}</span> 🧬
            </button>` : ''}
        </div>
        ${renderSegments(segments, lang)}
        <div class="flex flex-wrap items-center gap-2 mt-2">
          <button data-word-toggle="${wid}"
            class="text-xs px-2 py-1.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 transition-colors">
            <span data-toggle-arrow>▸</span> ${t('gr_features', lang)}
          </button>
          <button data-copy-morph="${copyPayload}"
            class="text-xs px-2 py-1.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300 transition-colors">
            📋 ${t('copy', lang)}
          </button>
          <a href="https://corpus.quran.com/wordmorphology.jsp?location=${encodeURIComponent(corpusLoc)}"
            target="_blank" rel="noopener"
            class="text-xs px-2 py-1.5 rounded bg-gray-100 dark:bg-gray-700 text-primary dark:text-blue-300 hover:underline">
            corpus.quran.com ↗
          </a>
        </div>
        <div data-word-features="${wid}" class="hidden mt-2 p-3 rounded bg-gray-50 dark:bg-gray-700/50 space-y-1.5">
          ${this.featuresDetail(segments, lang)}
        </div>
      </div>
    `;
  }

  /** Raw corpus feature tags for each segment, glossed via the shared decoder. */
  featuresDetail(segments, lang) {
    return segments.map(seg => {
      const color = (typeof segmentColor === 'function') ? segmentColor(seg) : '';
      const feats = (seg.f || []).map(f => {
        const label = (typeof decodeGrammarFeature === 'function') ? decodeGrammarFeature(f, seg.g) : f;
        return `<span class="px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-xs">${this.esc(label)}</span>`;
      }).join('');
      return `
        <div class="flex flex-wrap items-center gap-1.5 text-sm">
          <span class="ayah-arabic !text-base !mb-0 !pb-0 !border-b-0 min-w-[2rem] ${color}">${seg.t}</span>
          ${feats || '<span class="text-xs text-gray-400">—</span>'}
          ${seg.l ? `<span class="text-xs text-gray-500 dark:text-gray-400 ml-1">${t('lemma', lang)}: <span class="ayah-arabic !text-base !mb-0 !pb-0 !border-b-0">${seg.l}</span></span>` : ''}
        </div>`;
    }).join('');
  }

  // ------------------------------------------------ POS identification quiz
  /** Repaint just the toolbar + quiz panel (no morphology re-fetch, no skeleton flash). */
  rerenderPractice() {
    if (!this.container) return;
    this.container.innerHTML = this.toolbarHtml(this.language) + this.practiceHtml(this.language);
  }

  practiceHtml(lang) {
    if (!this.quiz) this.quiz = this.buildQuiz();
    const q = this.quiz;
    if (!q) {
      return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md mx-auto text-center">
          <p class="text-gray-500 dark:text-gray-400 mb-4">${this.esc(this.gui('gr_practice_none'))}</p>
          <button data-gr-practice-exit class="text-xs px-3 py-2 rounded-lg text-gray-400 hover:text-primary dark:hover:text-blue-300">${this.esc(this.gui('gr_practice_exit'))}</button>
        </div>`;
    }
    const answered = q.picked != null;
    const opts = [
      ['noun', t('gr_nouns', lang), 'sky'],
      ['verb', t('gr_verbs', lang), 'red'],
      ['particle', t('gr_particles', lang), 'emerald'],
    ].map(([key, label]) => {
      let cls = 'border-gray-200 dark:border-gray-700 hover:border-primary';
      if (answered) {
        if (key === q.answer) cls = 'border-green-500 bg-green-500/10';
        else if (key === q.picked) cls = 'border-red-500 bg-red-500/10';
        else cls = 'border-gray-200 dark:border-gray-700 opacity-50';
      }
      return `<button ${answered ? 'disabled' : ''} data-gr-practice-opt="${key}"
                class="border-2 rounded-lg py-3 px-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${cls}">${this.esc(label)}</button>`;
    }).join('');
    const acc = this.score.total ? Math.round(this.score.right / this.score.total * 100) : 0;
    return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 max-w-md mx-auto">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-semibold">🎯 ${this.esc(this.gui('gr_practice'))}</span>
          <span class="text-xs text-gray-500 dark:text-gray-400">${this.esc(this.gui('gr_practice_score'))}: <span class="font-semibold">${this.score.right}/${this.score.total}</span>${this.score.total ? ` · ${this.esc(this.gui('gr_practice_accuracy'))} ${acc}%` : ''}</span>
        </div>
        <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">${this.esc(this.gui('gr_practice_prompt'))}</p>
          <div class="text-center mb-1"><span class="ayah-arabic !text-4xl !mb-0 !pb-0 !border-b-0" dir="rtl">${q.arabic}</span></div>
          ${q.meaning ? `<div class="text-center text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(q.meaning)}</div>` : '<div class="mb-4"></div>'}
          <div class="grid grid-cols-3 gap-2">${opts}</div>
          ${answered ? `
            <div class="mt-4 text-center text-sm font-semibold ${q.picked === q.answer ? 'text-green-600 dark:text-green-400' : 'text-red-500'}">
              ${this.esc(q.picked === q.answer ? this.gui('gr_practice_correct') : this.gui('gr_practice_wrong'))}
            </div>
            <div class="text-center mt-3">
              <button data-gr-practice-next class="px-4 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90">${this.esc(this.gui('gr_practice_next'))} →</button>
            </div>` : ''}
        </div>
        <div class="flex items-center justify-center gap-4 mt-3">
          <button data-gr-practice-exit class="text-xs px-3 py-2 rounded-lg text-gray-400 hover:text-primary dark:hover:text-blue-300">${this.esc(this.gui('gr_practice_exit'))}</button>
          ${this.score.total ? `<button data-gr-practice-reset class="text-xs px-3 py-2 rounded-lg text-gray-400 hover:text-red-500">${this.esc(this.gui('gr_practice_reset'))}</button>` : ''}
        </div>
      </div>`;
  }

  // ----------------------------------------------------------- interactions

  onClick(e) {
    const practiceToggle = e.target.closest('[data-gr-practice]');
    if (practiceToggle) {
      this.practiceOn = !this.practiceOn;
      this.quiz = this.practiceOn ? this.buildQuiz() : null;
      if (this.practiceOn) this.rerenderPractice(); else this.render();
      return;
    }
    if (e.target.closest('[data-gr-practice-exit]')) {
      this.practiceOn = false; this.quiz = null; this.render(); return;
    }
    if (e.target.closest('[data-gr-practice-next]')) {
      this.quiz = this.buildQuiz(); this.rerenderPractice(); return;
    }
    if (e.target.closest('[data-gr-practice-reset]')) {
      this.score = { right: 0, total: 0 }; this.saveScore(); this.rerenderPractice(); return;
    }
    const opt = e.target.closest('[data-gr-practice-opt]');
    if (opt && this.quiz && this.quiz.picked == null) {
      this.quiz.picked = opt.getAttribute('data-gr-practice-opt');
      this.score.total++;
      if (this.quiz.picked === this.quiz.answer) this.score.right++;
      this.saveScore();
      this.rerenderPractice();
      return;
    }

    const filterBtn = e.target.closest('[data-gfilter]');
    if (filterBtn) { this.filter = filterBtn.getAttribute('data-gfilter'); this.applyFilter(); return; }

    const sarfBtn = e.target.closest('[data-sarf-root]');
    if (sarfBtn) {
      const root = sarfBtn.getAttribute('data-sarf-root');
      if (typeof sarf !== 'undefined' && sarf && typeof sarf.openRoot === 'function') sarf.openRoot(root);
      return;
    }

    const wrBtn = e.target.closest('[data-gr-wordrepeat]');
    if (wrBtn) {
      if (typeof tabSystem !== 'undefined' && tabSystem) {
        if (tabSystem.switchTabWithReturn) tabSystem.switchTabWithReturn('wordrepeat');
        else tabSystem.switchTab('wordrepeat');
      }
      return;
    }

    const toggle = e.target.closest('[data-word-toggle]');
    if (toggle) {
      const id = toggle.getAttribute('data-word-toggle');
      const panel = this.container.querySelector(`[data-word-features="${id}"]`);
      const arrow = toggle.querySelector('[data-toggle-arrow]');
      if (panel) {
        const open = panel.classList.toggle('hidden') === false;
        if (arrow) arrow.textContent = open ? '▾' : '▸';
      }
      return;
    }

    const copyBtn = e.target.closest('[data-copy-morph]');
    if (copyBtn) { this.copyMorph(copyBtn); return; }
  }

  copyMorph(btn) {
    const text = decodeURIComponent(btn.getAttribute('data-copy-morph') || '');
    const done = () => {
      const original = btn.innerHTML;
      btn.innerHTML = `✓ ${t('copied', this.language)}`;
      setTimeout(() => { btn.innerHTML = original; }, 1500);
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => this.fallbackCopy(text, done));
      } else {
        this.fallbackCopy(text, done);
      }
    } catch (err) {
      this.fallbackCopy(text, done);
    }
  }

  fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (err) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /** Dim word rows that don't match the active POS filter; sync button styles. */
  applyFilter() {
    const active = 'bg-primary text-white';
    const idle = 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-300';
    this.container.querySelectorAll('[data-gfilter]').forEach(btn => {
      const on = btn.getAttribute('data-gfilter') === this.filter;
      btn.className = `gr-filter-btn text-xs px-3 py-1.5 rounded-full transition-colors ${on ? active : idle}`;
    });
    this.container.querySelectorAll('[data-word-pos]').forEach(row => {
      const match = this.filter === 'all' || row.getAttribute('data-word-pos') === this.filter;
      row.classList.toggle('opacity-30', !match);
    });
  }
}

// Initialize when DOM is ready
let grammarView;
document.addEventListener('DOMContentLoaded', () => {
  grammarView = new GrammarView();
});
