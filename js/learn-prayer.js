/* --- Data moved to js/learn-prayer-data.js (split 2025-07). --- */


class SalahModule {
  constructor() {
    this.root = document.getElementById('namaz-root');
    if (!this.root) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this.rendered = false;

    this.view = 'guide';
    this.quizAnswers = {};
    this.quizSubmitted = false;
    this.quizBest = this.loadQuizBest();
    this.quizOrder = null;
    this.wqAnswers = {};
    this.wqSubmitted = false;
    this.tcCounts = {};
    this.tcTargets = {};

    if (typeof tabSystem !== 'undefined' && tabSystem) {
      tabSystem.onTabActive('namaz', () => {
        if (!this.rendered) { this.rendered = true; setTimeout(() => this.render(), 0); }
        else if (this.root.offsetParent !== null) this.render();
      });
    }

    window.addEventListener('settingChanged', (e) => {
      try {
        if (e.detail?.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered && this.root.offsetParent !== null) this.render();
        }
      } catch (_) { }
    });

    this.root.addEventListener('click', (e) => this.handleClick(e));
  }

  loadQuizBest() {
    try { return parseInt(localStorage.getItem('salahQuizBest'), 10) || 0; } catch (_) { return 0; }
  }
  saveQuizBest() {
    try { localStorage.setItem('salahQuizBest', String(this.quizBest)); } catch (_) { }
  }

  tt(key) {
    try {
      const v = t(key, this.language);
      if (v && v !== key) return v;
    } catch (_) { }
    const e = SALAH_I18N_FALLBACK[key];
    if (e) return e[this.language] || e.en || key;
    return key;
  }

  lc(o) {
    if (!o) return '';
    if (o[this.language]) return o[this.language];
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || '';
  }

  esc(s) {
    if (typeof s !== 'string') return '';
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  render() {
    const body = this.view === 'quiz' ? this.quizHtml()
      : this.view === 'wudu' ? this.wuduHtml()
      : this.view === 'timings' ? this.timingsHtml()
      : this.view === 'resources' ? this.resourcesHtml()
      : this.view === 'wudu-quiz' ? this.wuduQuizHtml()
      : this.view === 'tasbeeh' ? this.tasbeehCounterHtml()
      : this.guideHtml();
    this.root.innerHTML = `
      <div class="w-full max-w-3xl mx-auto pb-8">
        <div class="text-center mb-4">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer" title="${this.esc(this.tt('salah_title'))}">🕌 ${this.esc(this.tt('salah_title'))}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1" dir="auto">${this.esc(this.tt('salah_intro'))}</p>
        </div>
        ${this.toggleHtml()}
        ${body}
      </div>`;
  }

  toggleHtml() {
    const vbtn = (id, emoji, label) => `
      <button type="button" data-salah-view="${id}"
        class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap
               ${this.view === id ? 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}">
        <span aria-hidden="true">${emoji}</span>${this.esc(label)}</button>`;
    return `
      <div class="flex justify-center mb-4 overflow-x-auto">
        <div class="inline-flex gap-1 p-1 rounded-xl bg-gray-100 dark:bg-gray-800">
          ${vbtn('guide', '📖', this.tt('salah_view_guide'))}
          ${vbtn('wudu', '💧', this.tt('salah_view_wudu'))}
          ${vbtn('timings', '⏰', this.tt('salah_view_timings'))}
          ${vbtn('quiz', '❓', this.tt('salah_view_quiz'))}
          ${vbtn('resources', '📚', this.tt('salah_view_resources'))}
        </div>
      </div>`;
  }

  handleClick(e) {
    const h2 = e.target.closest('h2');
    if (h2 && this.root.contains(h2)) { this.view = 'guide'; this.render(); return; }
    const viewBtn = e.target.closest('[data-salah-view]');
    if (viewBtn) {
      this.view = viewBtn.getAttribute('data-salah-view');
      if (this.view === 'quiz') { this.quizAnswers = {}; this.quizSubmitted = false; this.shuffleQuiz(); }
      this.render();
      return;
    }
    const qopt = e.target.closest('[data-salah-quiz-opt]');
    if (qopt) {
      const [qi, oi] = qopt.getAttribute('data-salah-quiz-opt').split(':').map(Number);
      if (!isNaN(qi) && !isNaN(oi)) {
        this.quizAnswers[qi] = oi;
        const allAnswered = SALAH_QUIZ.every((_, i) => this.quizAnswers[i] != null);
        if (allAnswered && !this.quizSubmitted) this.submitQuiz();
        else this.render();
      }
      return;
    }
    const qreset = e.target.closest('[data-salah-quiz-reset]');
    if (qreset) { this.quizAnswers = {}; this.quizSubmitted = false; this.render(); return; }
    const wqOpt = e.target.closest('[data-wq-opt]');
    if (wqOpt && this.view === 'wudu-quiz') {
      const val = wqOpt.getAttribute('data-wq-opt');
      if (val) {
        const [qi, oi] = val.split(':').map(Number);
        if (!isNaN(qi) && !isNaN(oi)) {
          this.wqAnswers[qi] = oi;
          const allAnswered = WUDU_QUIZ.every((_, i) => this.wqAnswers[i] != null);
          if (allAnswered) this.wqSubmitted = true;
          this.render();
        }
      }
      return;
    }
    const wqReset = e.target.closest('[data-wq-reset]');
    if (wqReset) { this.wqAnswers = {}; this.wqSubmitted = false; this.render(); return; }
    const tcBtn = e.target.closest('[data-tc-inc]');
    if (tcBtn && this.view === 'tasbeeh') {
      const id = tcBtn.getAttribute('data-tc-inc');
      if (this.tcCounts[id] != null) {
        if (this.tcCounts[id] < this.tcTargets[id]) this.tcCounts[id]++;
        this.render();
      }
      return;
    }
    const tcReset = e.target.closest('[data-tc-reset]');
    if (tcReset) { this.tcCounts = {}; this.render(); return; }
    const wuduQuizBtn = e.target.closest('[data-salah-view-wq]');
    if (wuduQuizBtn) { this.view = 'wudu-quiz'; this.wqAnswers = {}; this.wqSubmitted = false; this.render(); return; }
    const tasbeehBtn = e.target.closest('[data-salah-view-tc]');
    if (tasbeehBtn) { this.view = 'tasbeeh'; this.tcInit(); this.render(); return; }
    const speakBtn = e.target.closest('[data-salah-speak]');
    if (speakBtn) {
      const id = speakBtn.getAttribute('data-salah-speak');
      const dua = SALAH_DUAS.find(d => d.id === id);
      if (dua && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(dua.arabic);
        u.lang = 'ar';
        u.rate = 0.8;
        window.speechSynthesis.speak(u);
      }
      return;
    }
  }

  shuffleQuiz() {
    this.quizOrder = SALAH_QUIZ.map((_, i) => i);
    for (let i = this.quizOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quizOrder[i], this.quizOrder[j]] = [this.quizOrder[j], this.quizOrder[i]];
    }
  }

  submitQuiz() {
    let score = 0;
    SALAH_QUIZ.forEach((q, i) => { if (this.quizAnswers[i] === q.correct) score++; });
    if (score > this.quizBest) { this.quizBest = score; this.saveQuizBest(); }
    this.quizSubmitted = true;
    this.render();
  }

  guideHtml() {
    return `
      ${this.infoHtml()}
      ${this.conditionsHadithHtml()}
      ${this.stepsHtml()}
      ${this.duasHtml()}
      ${this.tasbeehHtml()}
      ${this.hadithHtml()}
      ${this.specialPrayersHtml()}`;
  }

  hadithHtml() {
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <span class="text-xl">📜</span>${this.esc(this.tt('salah_hadith_title'))}
        </h3>
        <div class="space-y-2">
          ${SALAH_HADITH.map(h => `
            <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-800 dark:text-gray-100 leading-relaxed mb-1" dir="auto">"${this.esc(this.lc({ en: h.textEn, bn: h.textBn }))}"</p>
              <span class="text-xs text-gray-400 dark:text-gray-500 italic">— ${this.esc(this.lc({ en: h.srcEn, bn: h.srcBn }))}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  conditionsHadithHtml() {
    return `
      <div class="mb-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
        <h4 class="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-1">
          <span>📜</span>${this.esc(this.tt('salah_conditions_hadith_title'))}
        </h4>
        <div class="space-y-2">
          ${SALAH_CONDITIONS_HADITH.map(h => `
            <div class="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
              <span class="inline-flex px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[0.65rem] font-semibold mb-1">${this.esc(this.lc(h.condition))}</span>
              <p class="text-xs text-gray-700 dark:text-gray-200 leading-relaxed mt-1 mb-1" dir="auto">"${this.esc(this.lc({ en: h.textEn, bn: h.textBn }))}"</p>
              <span class="text-[0.65rem] text-gray-400 dark:text-gray-500 italic">— ${this.esc(this.lc({ en: h.srcEn, bn: h.srcBn }))}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  specialPrayersHtml() {
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <span class="text-xl">⭐</span>${this.esc(this.tt('salah_special_title'))}
        </h3>
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">${this.esc(this.tt('salah_special_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SALAH_SPECIAL.map(s => `
            <details class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary class="flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors list-none">
                <span class="text-lg">${s.emoji}</span>
                <span class="flex-1 font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc({ en: s.nameEn, bn: s.nameBn }))}</span>
                <span class="text-gray-400 text-xs">▼</span>
              </summary>
              <div class="px-4 pb-4 space-y-2 text-xs">
                <div class="p-2 rounded-lg bg-primary/5">
                  <span class="block font-semibold text-primary uppercase tracking-wide text-[0.65rem]">${this.esc(this.tt('salah_special_when'))}</span>
                  <p class="text-gray-700 dark:text-gray-200 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc({ en: s.whenEn, bn: s.whenBn }))}</p>
                </div>
                <div class="p-2 rounded-lg bg-emerald-500/5">
                  <span class="block font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide text-[0.65rem]">${this.esc(this.tt('salah_special_rakat'))}</span>
                  <p class="text-gray-700 dark:text-gray-200 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc({ en: s.rakatEn, bn: s.rakatBn }))}</p>
                </div>
                <div class="p-2 rounded-lg bg-amber-500/5">
                  <span class="block font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide text-[0.65rem]">${this.esc(this.tt('salah_special_note'))}</span>
                  <p class="text-gray-700 dark:text-gray-200 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc({ en: s.noteEn, bn: s.noteBn }))}</p>
                </div>
              </div>
            </details>`).join('')}
        </div>
      </div>`;
  }

  infoHtml() {
    const section = (titleKey, items) => `
      <div class="mb-4">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-2">${this.esc(this.tt(titleKey))}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          ${items.map(i => `
            <div class="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="text-primary mt-0.5 shrink-0">•</span>
              <span class="text-sm text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.lc(i))}</span>
            </div>`).join('')}
        </div>
      </div>`;
    return `
      <div class="mb-6 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-2 mb-4">
          <span class="text-2xl">📋</span>
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('salah_about_title'))}</h3>
        </div>
        ${section('salah_condition_title', SALAH_INFO.conditions)}
        ${section('salah_pillar_title', SALAH_INFO.pillars)}
        ${section('salah_wajib_title', SALAH_INFO.wajibat)}
        ${section('salah_sunnah_title', SALAH_INFO.sunnah)}
      </div>`;
  }

  stepsHtml() {
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <span class="text-xl">🚶</span>${this.esc(this.tt('salah_steps_title'))}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SALAH_STEPS.map((s, i) => `
            <div class="flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">${i + 1}</span>
              <div class="flex-1 min-w-0">
                <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100">
                  <span aria-hidden="true">${s.emoji}</span> ${this.esc(this.lc(s.title))}
                </span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed" dir="auto">${this.esc(this.lc(s.desc))}</p>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  duasHtml() {
    const step = (id) => SALAH_STEPS.find(s => s.id === id);
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <span class="text-xl">🤲</span>${this.esc(this.tt('salah_duas_title'))}
        </h3>
        <div class="space-y-3">
          ${SALAH_DUAS.map(d => {
            const st = step(d.step);
            return `
            <details class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary class="flex items-center gap-2 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors list-none">
                <span class="text-lg">${this.esc(st?.emoji || '🤲')}</span>
                <span class="flex-1 font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(st?.title) || d.id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))}</span>
                <span class="text-gray-400 text-xs">▼</span>
              </summary>
              <div class="px-4 pb-4 space-y-2">
                <div class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-right" dir="rtl">
                  <span class="text-xl leading-loose text-gray-800 dark:text-gray-100">${d.arabic}</span>
                  <button type="button" data-salah-speak="${this.esc(d.id)}"
                    class="inline-flex items-center gap-1 mt-1 px-2 py-1 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium transition-colors"
                    title="${this.esc(this.tt('salah_meaning'))}">🔊 ${this.esc(this.tt('salah_meaning'))}</button>
                </div>
                ${d.transliteration ? `<div class="p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"><span class="block text-sm italic text-gray-600 dark:text-gray-300">${this.esc(d.transliteration)}</span></div>` : ''}
                <div class="p-2 rounded-lg bg-primary/5">
                  <span class="block text-xs font-semibold text-primary uppercase tracking-wide">${this.esc(this.tt('salah_meaning'))}</span>
                  <p class="text-sm text-gray-700 dark:text-gray-200 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc(d.meaning))}</p>
                </div>
                ${d.count ? `<span class="inline-flex px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium">${d.count}×</span>` : ''}
                ${d.reference ? `<span class="block text-xs text-gray-400 dark:text-gray-500">📚 ${this.esc(this.lc(d.reference))}</span>` : ''}
              </div>
            </details>`;
          }).join('')}
        </div>
      </div>`;
  }

  tasbeehHtml() {
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
          <span class="text-xl">📿</span>${this.esc(this.tt('salah_tasbeeh_title'))}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${SALAH_TASBEEH.map(t => `
            <div class="flex flex-col gap-2 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div class="p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-right" dir="rtl">
                <span class="text-base leading-loose text-gray-800 dark:text-gray-100">${t.arabic}</span>
              </div>
              ${t.transliteration ? `<span class="text-xs italic text-gray-500 dark:text-gray-400">${this.esc(t.transliteration)}</span>` : ''}
              <p class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(t.meaning))}</p>
              <div class="flex items-center gap-2 flex-wrap">
                ${t.count ? `<span class="inline-flex px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium">${t.count}×</span>` : ''}
                ${t.reference ? `<span class="text-[0.65rem] text-gray-400 dark:text-gray-500">📚 ${this.esc(this.lc(t.reference))}</span>` : ''}
              </div>
            </div>`).join('')}
        </div>
        <div class="text-center mt-2">
          <button type="button" data-salah-view-tc
            class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:opacity-90">
            📿 ${this.esc(this.tt('salah_tasbeeh_counter'))}</button>
        </div>
      </div>`;
  }

  wuduHtml() {
    return `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">💧</span>
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('salah_wudu_title'))}</h3>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(this.tt('salah_wudu_intro'))}</p>
        <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">${this.esc(this.tt('salah_wudu_steps'))}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          ${SALAH_WUDU.map((w, i) => `
            <div class="flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">${i + 1}</span>
              <div class="flex-1 min-w-0">
                <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100">
                  <span aria-hidden="true">${w.emoji}</span> ${this.esc(this.lc(w.title))}
                </span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed" dir="auto">${this.esc(this.lc(w.desc))}</p>
              </div>
            </div>`).join('')}
        </div>
        <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
          <span class="text-base font-bold text-gray-800 dark:text-gray-100">🚿 ${this.esc(this.tt('salah_ghusl_desc').split('.')[0])}</span>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed" dir="auto">${this.esc(this.tt('salah_ghusl_desc'))}</p>
        </div>
        <div class="text-center mt-2">
          <button type="button" data-salah-view-wq
            class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:opacity-90">
            💧 ${this.esc(this.tt('salah_wudu_quiz_title'))}</button>
        </div>
      </div>`;
  }

  timingsHtml() {
    return `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">⏰</span>
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('salah_timings_title'))}</h3>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(this.tt('salah_timings_intro'))}</p>
        <div class="space-y-3">
          ${SALAH_TIMINGS.map(t => `
            <div class="flex gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <span class="shrink-0 text-xl leading-none mt-0.5" aria-hidden="true">${t.emoji}</span>
              <div class="flex-1 min-w-0">
                <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100">${this.esc(this.tt(t.titleKey))}</span>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed" dir="auto">${this.esc(this.lc(t.time))}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-[0.65rem] font-medium">🕌 ${this.esc(this.lc(t.rakats))}</span>
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  tcInit() {
    this.tcTargets = { subhanallah: 33, alhamdulillah: 33, allahu_akbar: 33, tahlil: 1 };
    this.tcCounts = {};
  }

  // Repository policy (user-scoped memory): never surface a book / video /
  // website reference to end users unless its link is verified working. Items
  // in SALAH_RESOURCES without a valid r.url are kept in the data array for
  // future enrichment but are NOT rendered.
  resourcesHtml() {
    const items = (SALAH_RESOURCES || []).filter(r => r && typeof r.url === 'string' && /^https?:\/\//i.test(r.url));
    if (!items.length) {
      return `
        <div class="mb-6 text-center py-10 px-4">
          <div class="text-4xl mb-3" aria-hidden="true">🔖</div>
          <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-1">${this.esc(this.tt('salah_resources_title'))}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.tt('salah_resources_intro'))}</p>
          <p class="text-xs text-gray-400 dark:text-gray-500 mt-2" dir="auto">${this.esc(this.lc({ en: 'A curated list with verified links is being prepared. Only items with working URLs are shown here.', bn: 'যাচাইকৃত লিঙ্কসহ একটি নির্বাচিত তালিকা প্রস্তুত করা হচ্ছে। শুধু কার্যকরী URL সহ আইটেম এখানে দেখানো হবে।' }))}</p>
        </div>`;
    }
    return `
      <div class="mb-6">
        <h3 class="text-base font-bold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
          <span class="text-xl">📚</span>${this.esc(this.tt('salah_resources_title'))}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(this.tt('salah_resources_intro'))}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${items.map(r => `
            <a href="${this.esc(r.url)}" target="_blank" rel="noopener noreferrer"
               class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/60 hover:shadow-sm transition-shadow no-underline block">
              <div class="flex items-center gap-2 mb-1">
                <span aria-hidden="true">${r.emoji}</span>
                <span class="text-sm font-semibold text-gray-800 dark:text-gray-100">${this.esc(this.lc({ en: r.nameEn, bn: r.nameBn }))}</span>
              </div>
              ${r.authorEn ? `<p class="text-xs text-gray-400 dark:text-gray-500 ml-6">${this.esc(this.lc({ en: r.authorEn, bn: r.authorBn }))}</p>` : ''}
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed ml-6" dir="auto">${this.esc(this.lc({ en: r.descEn, bn: r.descBn }))}</p>
              <span class="inline-block mt-1 ml-6 px-1.5 py-0.5 rounded text-[0.6rem] font-medium uppercase tracking-wider
                ${r.type === 'book' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' :
                  r.type === 'web' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300' :
                  r.type === 'video' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300' :
                  'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300'}">${this.esc(r.type)}</span>
            </a>`).join('')}
        </div>
      </div>`;
  }

  tasbeehCounterHtml() {
    const items = [
      { id: 'subhanallah', ar: 'سُبْحَانَ اللَّهِ', tr: 'Subhanallah', meaning: { en: 'Glory be to Allah', bn: 'আল্লাহ পবিত্র' } },
      { id: 'alhamdulillah', ar: 'الْحَمْدُ لِلَّهِ', tr: 'Alhamdulillah', meaning: { en: 'All praise is for Allah', bn: 'সমস্ত প্রশংসা আল্লাহর জন্য' } },
      { id: 'allahu_akbar', ar: 'اللَّهُ أَكْبَرُ', tr: 'Allahu Akbar', meaning: { en: 'Allah is the Greatest', bn: 'আল্লাহ সর্বশ্রেষ্ঠ' } },
      { id: 'tahlil', ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ', tr: 'La ilaha illallah', meaning: { en: 'There is no god but Allah', bn: 'আল্লাহ ছাড়া কোনো উপাস্য নেই' } },
    ];
    const allDone = items.every(it => (this.tcCounts[it.id] || 0) >= (this.tcTargets[it.id] || 33));
    return `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">📿</span>
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('salah_tasbeeh_counter'))}</h3>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${items.map(it => {
            const cnt = this.tcCounts[it.id] || 0;
            const tgt = this.tcTargets[it.id] || 33;
            const done = cnt >= tgt;
            const pct = Math.min(100, Math.round((cnt / tgt) * 100));
            return `
            <div class="p-4 rounded-xl bg-white dark:bg-gray-800 border ${done ? 'border-green-300 dark:border-green-700' : 'border-gray-200 dark:border-gray-700'}">
              <div class="text-right mb-2" dir="rtl">
                <span class="text-lg leading-loose text-gray-800 dark:text-gray-100">${it.ar}</span>
              </div>
              <p class="text-xs italic text-gray-500 dark:text-gray-400 mb-1">${it.tr}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">${this.esc(this.lc(it.meaning))}</p>
              <div class="flex items-center gap-3">
                <button type="button" data-tc-inc="${it.id}"
                  class="flex-1 py-2 rounded-lg text-sm font-medium transition-colors
                    ${done ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 cursor-default' : 'bg-primary text-white hover:opacity-90'}">
                  ${done ? '✓ ' + this.esc(this.tt('salah_quiz_submit')) : cnt + ' / ' + tgt}
                </button>
              </div>
              <div class="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div class="h-1.5 rounded-full transition-all duration-300 ${done ? 'bg-green-500' : 'bg-primary'}" style="width:${pct}%"></div>
              </div>
            </div>`;
          }).join('')}
        </div>
        ${allDone ? `
        <div class="text-center mt-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <p class="text-sm font-semibold text-green-700 dark:text-green-300">✨ ${this.esc(this.tt('salah_tasbeeh_counter'))} — ${this.esc(this.tt('salah_quiz_score'))}: 100%</p>
          <button type="button" data-tc-reset
            class="mt-2 px-4 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90">${this.esc(this.tt('salah_quiz_retake'))}</button>
        </div>` : ''}
      </div>`;
  }

  wuduQuizHtml() {
    const q = WUDU_QUIZ;
    const total = q.length;
    let score = 0;
    const answeredAll = q.every((_, i) => this.wqAnswers[i] != null);
    if (this.wqSubmitted) q.forEach((qq, i) => { if (this.wqAnswers[i] === qq.correct) score++; });
    return `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-2xl">💧</span>
          <h3 class="text-base font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('salah_wudu_quiz_title'))}</h3>
        </div>
        ${q.map((qq, i) => {
          const sel = this.wqAnswers[i];
          const answered = sel != null;
          return `
          <div class="mb-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <p class="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2" dir="auto">${i + 1}. ${this.esc(this.lc({ en: qq.qEn, bn: qq.qBn }))}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${qq.optsEn.map((o, oi) => {
                let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary';
                if (answered) {
                  if (oi === qq.correct) cls = 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700 text-green-700 dark:text-green-300';
                  else if (oi === sel) cls = 'bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-700 text-red-700 dark:text-red-300';
                  else cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500';
                } else if (oi === sel) {
                  cls = 'bg-primary/10 border-primary text-primary';
                }
                return `<button type="button" data-wq-opt="${i}:${oi}"
                  class="w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${cls}" dir="auto">${this.esc(this.lc({ en: o, bn: qq.optsBn[oi] }))}</button>`;
              }).join('')}
            </div>
          </div>`;
        }).join('')}
        ${this.wqSubmitted ? `
        <div class="text-center py-4">
          <div class="inline-flex flex-col items-center gap-1 px-6 py-3 rounded-xl bg-primary/5">
            <span class="text-sm text-gray-500 dark:text-gray-400">${this.esc(this.tt('salah_quiz_score'))}</span>
            <span class="text-2xl font-bold text-primary">${score} / ${total}</span>
          </div>
          <div class="mt-3">
            <button type="button" data-wq-reset
              class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90">${this.esc(this.tt('salah_quiz_retake'))}</button>
          </div>
        </div>` : (!answeredAll ? '<p class="text-xs text-gray-400 text-center mt-2">' + this.esc(this.tt('salah_quiz_hint')) + '</p>' : '')}
      </div>`;
  }

  quizHtml() {
    const order = this.quizOrder || SALAH_QUIZ.map((_, i) => i);
    const total = order.length;
    let score = 0;
    const answeredAll = order.every(i => this.quizAnswers[i] != null);
    if (this.quizSubmitted) order.forEach(i => { if (this.quizAnswers[i] === SALAH_QUIZ[i].correct) score++; });

    const questions = order.map((qi, displayIdx) => {
      const q = SALAH_QUIZ[qi];
      const sel = this.quizAnswers[qi];
      const answered = sel != null;
      const opts = q.optsEn.map((_, oi) => ({ en: q.optsEn[oi], bn: q.optsBn[oi] }));
      const optHtml = opts.map((o, oi) => {
        const chosen = sel === oi;
        let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary';
        let mark = '';
        if (answered) {
          if (oi === q.correct) { cls = 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700 text-green-700 dark:text-green-300'; mark = ' ✓'; }
          else if (chosen) { cls = 'bg-red-50 dark:bg-red-900/20 border-red-400 dark:border-red-700 text-red-700 dark:text-red-300'; mark = ' ✗'; }
          else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'; }
        } else if (chosen) {
          cls = 'bg-primary/10 border-primary text-primary';
        }
        return `<button type="button" data-salah-quiz-opt="${qi}:${oi}"
          class="w-full text-left px-3 py-2 rounded-lg border text-sm transition-colors ${cls}" dir="auto">${this.esc(this.lc(o))}${mark}</button>`;
      }).join('');
      return `
        <div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
          <p class="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-2" dir="auto">${displayIdx + 1}. ${this.esc(this.lc({ en: q.qEn, bn: q.qBn }))}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${optHtml}</div>
        </div>`;
    }).join('');

    const footer = this.quizSubmitted
      ? `<div class="text-center py-6">
           <div class="inline-flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-primary/5">
             <span class="text-sm text-gray-500 dark:text-gray-400">${this.esc(this.tt('salah_quiz_score'))}</span>
             <span class="text-3xl font-bold text-primary">${score} / ${total}</span>
             <span class="text-xs text-gray-500 dark:text-gray-400">${this.esc(this.tt('salah_quiz_best'))}: ${Math.max(this.quizBest, score)} / ${total}</span>
           </div>
           <div class="mt-3">
             <button type="button" data-salah-quiz-reset
               class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90">${this.esc(this.tt('salah_quiz_retake'))}</button>
           </div>
         </div>`
      : '';

    return `
      <div class="text-center mb-4">
        <p class="text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('salah_quiz_intro'))}
          <span class="ml-2">· ${this.esc(this.tt('salah_quiz_best'))}: ${this.quizBest} / ${total}</span></p>
      </div>
      <div class="space-y-3">${questions}</div>
      ${footer}`;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  try { new SalahModule(); } catch (_) { }
});
