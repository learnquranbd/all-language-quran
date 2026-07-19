/**
 * Tajweed Learning (তাজবীদ শিক্ষা) — learn the rules, then SEE them in the Quran.
 *
 * - Every rule from the app's tajweed engine (TAJWEED_RULES) as a card:
 *   colour swatch, what it is, which letters trigger it (en + bn, en fallback).
 * - Tap a rule → real examples: pick any surah and every occurrence of that rule
 *   is highlighted in the actual verse text (bundled data/tajweed-json spans).
 * - Practice: jump to the tajweed quiz, colored reading view, or tajweed mushaf.
 * - Structured learning path (beginner → intermediate → advanced) driven by the
 *   same learned-tracker, with per-level progress bars.
 * - Makharij view: the classical 17 articulation points in 5 zones (pure HTML/CSS).
 * - Inline rule-identification drill: real color-annotated verse spans, 4 options
 *   (with a persisted personal best score).
 * - Reference view: a printable colour key for every rule, plus the classical
 *   Noon-Sakinah/Tanween (4 rulings) and Meem-Sakinah (3 rulings) decision tables.
 * - "Common mistakes" card per rule family (textbook-level guidance).
 * - Curated reputable external resources.
 *
 * Renders into #tajweedlearn-container (tab "tajweedlearn").
 */


/* --- Data moved to js/tajweed-data.js (split 2025-07). --- */


class TajweedLearn {
  constructor() {
    this.container = document.getElementById('tajweedlearn-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this.rule = null;          // selected rule key
    this.surah = 1;            // examples surah
    this.exLimit = 15;         // examples shown before "Show more"
    this._exReq = 0;           // loadExamples() request token (guards stale responses)
    this.view = 'rules';       // 'rules' | 'makharij' | 'drill'
    this.drill = null;         // null | {status} | {questions, idx, score, picked}
    this._drillReq = 0;        // startDrill() request token
    this.bound = false;
    this.learned = this.loadLearned();
    this.drillBest = this.loadDrillBest();  // { score, total } personal best

    window.addEventListener('tabChanged', (e) => {
      if (e.detail.tabId === 'tajweedlearn') this.render();
      else if (this._audio) this._audio.pause();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.container.innerHTML) this.render(); }
    });
  }

  /** t() with an optional English fallback for keys not yet in translations.js */
  tt(key, fb) { const v = t(key, this.language); return (fb && v === key) ? fb : v; }
  loadLearned() {
    try { return new Set(JSON.parse(localStorage.getItem('tajweedLearned') || '[]')); } catch (e) { return new Set(); }
  }
  saveLearned() {
    try { localStorage.setItem('tajweedLearned', JSON.stringify([...this.learned])); } catch (e) { /* ignore */ }
  }
  loadDrillBest() {
    try {
      const b = JSON.parse(localStorage.getItem('tajweedDrillBest') || 'null');
      return (b && typeof b.score === 'number' && typeof b.total === 'number' && b.total > 0) ? b : null;
    } catch (e) { return null; }
  }
  /** Keep the run with the best score/total ratio (ties broken by more questions). */
  saveDrillBest(score, total) {
    if (!total) return;
    const prev = this.drillBest;
    const better = !prev || (score / total > prev.score / prev.total) ||
      (score / total === prev.score / prev.total && total > prev.total);
    if (!better) return;
    this.drillBest = { score, total };
    try { localStorage.setItem('tajweedDrillBest', JSON.stringify(this.drillBest)); } catch (e) { /* ignore */ }
  }
  lesson(k) { const l = TAJWEED_LESSONS[k] || {}; return l[this.language] || l.en || ''; }
  /** Rule display name in the UI language (technical Arabic terms transliterated). */
  ruleName(k) {
    const l = TAJWEED_LESSONS[k] || {};
    if (l.names && l.names[this.language]) return l.names[this.language];
    return ((typeof TAJWEED_RULES !== 'undefined' && TAJWEED_RULES[k]) || {}).label || k;
  }

  bindOnce() {
    if (this.bound) return;
    this.bound = true;
    this.container.addEventListener('click', (e) => {
      const mark = e.target.closest('[data-tj-learned]');
      if (mark) {
        const k = mark.getAttribute('data-tj-learned');
        this.learned.has(k) ? this.learned.delete(k) : this.learned.add(k);
        this.saveLearned();
        this.render();
        return;
      }
      const view = e.target.closest('[data-tj-view]');
      if (view) { this.view = view.getAttribute('data-tj-view'); this.render(); return; }
      // Learning-path chip → open that rule's card below and scroll to it
      const pathRule = e.target.closest('[data-tj-path]');
      if (pathRule) {
        const k = pathRule.getAttribute('data-tj-path');
        this.view = 'rules'; this.rule = k; this.exLimit = 15;
        this.render(); this.loadExamples();
        const card = this.container.querySelector(`[data-tj-rule="${k}"]`);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (e.target.closest('[data-tj-drill-start]')) { this.startDrill(); return; }
      const opt = e.target.closest('[data-tj-opt]');
      if (opt && this.drill && this.drill.questions && this.drill.picked === null) {
        const i = parseInt(opt.getAttribute('data-tj-opt'), 10);
        const q = this.drill.questions[this.drill.idx];
        if (q && q.options[i]) {
          this.drill.picked = i;
          if (q.options[i].correct) this.drill.score++;
          this.render();
        }
        return;
      }
      if (e.target.closest('[data-tj-drill-next]') && this.drill && this.drill.questions) {
        this.drill.idx++; this.drill.picked = null;
        if (this.drill.idx >= this.drill.questions.length) this.saveDrillBest(this.drill.score, this.drill.questions.length);
        this.render(); return;
      }
      if (e.target.closest('[data-tj-print]')) { try { window.print(); } catch (err) { /* ignore */ } return; }
      const rule = e.target.closest('[data-tj-rule]');
      if (rule) {
        const k = rule.getAttribute('data-tj-rule');
        this.rule = this.rule === k ? null : k;
        this.exLimit = 15;
        this.render();
        if (this.rule) this.loadExamples();
        return;
      }
      const more = e.target.closest('[data-tj-more]');
      if (more) { this.exLimit += 15; this.loadExamples(); return; }
      const quiz = e.target.closest('[data-tj-quiz]');
      if (quiz && typeof tabSystem !== 'undefined') {
        tabSystem.switchTab('quiz');
        if (typeof quizCenter !== 'undefined' && quizCenter) quizCenter.selectType('tajweed_rule');
        return;
      }
      const go = e.target.closest('[data-tj-goto]');
      if (go && typeof tabSystem !== 'undefined') {
        const tab = go.getAttribute('data-tj-goto');
        tabSystem.switchTab(tab);
        // 'Coloured reading' should actually SHOW the colours: turn tajweed on
        if (tab === 'reading' && typeof quranApp !== 'undefined' && quranApp && !quranApp.globalTajweed) {
          quranApp.applyGlobalToggle('tajweed');
        }
        return;
      }
      const play = e.target.closest('[data-ayah-audio]');
      if (play) { this.toggleAyahAudio(play); return; }
      // Ref badge → shared verse modal with word-by-word audio (checked AFTER 🔊)
      const ref = e.target.closest('[data-ayah-ref]');
      if (ref && typeof ayahModal !== 'undefined' && ayahModal) ayahModal.open(ref.getAttribute('data-ayah-ref'));
    });
    this.container.addEventListener('change', (e) => {
      if (e.target.id === 'tj-surah') { this.surah = parseInt(e.target.value, 10); this.exLimit = 15; this.loadExamples(); }
    });
  }

  /** 🔊 plays, second tap pauses (icon flips back via the 'pause' listener). */
  toggleAyahAudio(btn) {
    if (!this._audio) {
      this._audio = new Audio();
      // 'pause' also fires when playback ends, so one listener resets the icon
      this._audio.addEventListener('pause', () => this.resetPlayIcon());
    }
    if (this._playingBtn === btn && !this._audio.paused) { this._audio.pause(); return; }
    this.resetPlayIcon();
    this._audio.src = btn.getAttribute('data-ayah-audio');
    this._audio.play().then(() => {
      this._playingBtn = btn;
      btn.innerHTML = btn.innerHTML.replace('🔊', '⏸');
    }).catch(() => {});
  }

  resetPlayIcon() {
    if (this._playingBtn) {
      this._playingBtn.innerHTML = this._playingBtn.innerHTML.replace('⏸', '🔊');
      this._playingBtn = null;
    }
  }

  /** Compact list of authentic Quranic examples for a rule (from TAJWEED_RULE_EXAMPLES). */
  ruleExamplesHtml(ruleId) {
    const examples = TAJWEED_RULE_EXAMPLES[ruleId];
    if (!examples || !examples.length) return '';
    const lang = this.language;
    const rows = examples.map(ex => {
      const note = (lang === 'bn' && ex.noteBn) ? ex.noteBn : ex.noteEn;
      return `
        <div class="flex items-start gap-2 py-1.5 border-b border-gray-100 dark:border-gray-700/50 last:border-0">
          <button data-ayah-ref="${this.esc(ex.ref)}" title="${this.tt('tj_open_verse')}"
                  class="shrink-0 text-[11px] font-mono text-primary/80 hover:text-primary underline decoration-dotted underline-offset-2 mt-0.5 whitespace-nowrap">${this.esc(ex.ref)}</button>
          <span class="ayah-arabic !text-lg !leading-snug font-semibold text-emerald-700 dark:text-emerald-400 shrink-0" dir="rtl">${this.esc(ex.focus)}</span>
          <span class="text-xs text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(note)}</span>
        </div>`;
    }).join('');
    return `
      <div class="mt-3 rounded-lg border border-emerald-200 dark:border-emerald-700/40 bg-emerald-50 dark:bg-emerald-900/20 px-3 pt-2 pb-1">
        <p class="text-[11px] uppercase tracking-wide font-semibold text-emerald-700 dark:text-emerald-400 mb-1.5">📖 ${this.tt('tj_examples_title', 'Quranic examples')}</p>
        ${rows}
      </div>`;
  }

  ruleCard(key) {
    const def = (typeof TAJWEED_RULES !== 'undefined' && TAJWEED_RULES[key]) || { color: '#888', label: key };
    const open = this.rule === key;
    const learned = this.learned.has(key);
    const les = TAJWEED_LESSONS[key] || {};
    const lettersHtml = les.lettersExtraKey
      ? `${this.esc(les.letters || '')} <span dir="auto">+ ${this.esc(this.tt(les.lettersExtraKey))}</span>`
      : this.esc(les.letters || '');
    return `
      <div class="rounded-xl bg-white dark:bg-gray-800 border ${open ? 'border-2' : 'border-gray-200 dark:border-gray-700'} ${learned ? 'ring-2 ring-green-500/40' : ''}" ${open ? `style="border-color:${def.color}"` : ''}>
        <div class="flex items-center pe-2">
          <button data-tj-rule="${key}" class="flex-1 min-w-0 flex items-center gap-3 px-3 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/40 rounded-xl">
            <span class="shrink-0 w-4 h-4 rounded-full" style="background:${def.color}"></span>
            <span class="flex-1 min-w-0">
              <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.ruleName(key))}</span>
              <span class="block text-gray-400 truncate ayah-arabic !text-lg !leading-normal" dir="rtl">${lettersHtml}</span>
            </span>
            <span class="text-gray-400">${open ? '▾' : '▸'}</span>
          </button>
          <button data-tj-learned="${key}" title="${this.tt('tj_mark_learned')}"
                  class="shrink-0 w-7 h-7 rounded-full text-sm leading-none ${learned
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-400 hover:text-green-600 hover:border-green-500'}">✓</button>
        </div>
        <p class="px-4 pb-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lesson(key))}</p>
        ${open ? `
          <div class="px-4 pb-1">${this.ruleExamplesHtml(key)}</div>
          <div class="px-4 pb-4">
            <div class="flex flex-wrap items-center gap-2 mb-2 mt-3">
              <label class="text-xs text-gray-400">${this.tt('tj_examples_in')}</label>
              <select id="tj-surah" class="px-2 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                ${SURAH_DATA.map(s => `<option value="${s.number}" ${s.number === this.surah ? 'selected' : ''}>${this.esc(formatSurahOption(s, this.language))}</option>`).join('')}
              </select>
            </div>
            <div id="tj-examples" class="space-y-2"><p class="text-center text-gray-400 text-sm py-3">${this.tt('loading')}</p></div>
          </div>` : ''}
      </div>`;
  }

  /** Highlight ONLY the selected rule's spans in a verse (bundled annotations). */
  highlight(text, spans, color) {
    const parts = [];
    let cur = 0;
    for (const sp of spans.sort((a, b) => a.start - b.start)) {
      if (sp.start < cur) continue;
      parts.push(this.esc(text.slice(cur, sp.start)));
      parts.push(`<span style="color:${color};font-weight:700">${this.esc(text.slice(sp.start, sp.end))}</span>`);
      cur = sp.end;
    }
    parts.push(this.esc(text.slice(cur)));
    return parts.join('');
  }

  async loadExamples() {
    const box = this.container.querySelector('#tj-examples');
    if (!box || !this.rule) return;
    // Token guards against out-of-order responses on rapid surah changes
    const req = ++this._exReq;
    const surah = this.surah;
    box.innerHTML = `<p class="text-center text-gray-400 text-sm py-3">${this.tt('loading')}</p>`;
    try {
      const { text, rules } = await TajweedData.load(surah);
      if (req !== this._exReq) return; // superseded by a newer request
      const color = (TAJWEED_RULES[this.rule] || {}).color || '#888';
      const rows = [];
      const pad = n => String(n).padStart(3, '0');
      for (const vk in rules) {
        const m = vk.match(/^verse_(\d+)$/);
        if (!m || m[1] === '0') continue;
        const spans = (rules[vk] || []).filter(r => r.rule === this.rule);
        if (!spans.length) continue;
        const a = parseInt(m[1], 10);
        rows.push({ a, html: this.highlight(text[vk] || '', spans, color), n: spans.length });
      }
      if (!rows.length) { box.innerHTML = `<p class="text-center text-gray-400 text-sm py-3">${this.tt('tj_no_examples')}</p>`; return; }
      rows.sort((x, y) => x.a - y.a);
      const shown = rows.slice(0, this.exLimit);
      const remaining = rows.length - shown.length;
      box.innerHTML = shown.map(r => `
        <div class="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
          <div class="flex items-center gap-2 mb-1">
            <button data-ayah-ref="${surah}:${r.a}" title="${this.tt('tj_open_verse')}"
                    class="text-xs font-mono text-gray-400 hover:text-primary underline decoration-dotted underline-offset-2">${surah}:${r.a} ⓘ</button>
            <span class="text-xs px-1.5 rounded-full" style="background:${color}22;color:${color}">×${r.n}</span>
            <button data-ayah-audio="https://everyayah.com/data/Alafasy_128kbps/${pad(surah)}${pad(r.a)}.mp3" title="${this.tt('play')}" aria-label="${this.tt('play')}" class="ms-auto text-xs px-2.5 py-1 rounded-md bg-primary text-white hover:bg-primary/80">🔊</button>
          </div>
          <div class="ayah-arabic !text-2xl !leading-[2.4]" dir="rtl">${r.html}</div>
        </div>`).join('')
        + (remaining > 0 ? `
        <button data-tj-more class="w-full text-center text-sm py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
          ${this.tt('topics_show_more')} (+${remaining})
        </button>` : '');
    } catch (e) {
      if (req !== this._exReq) return;
      box.innerHTML = `<p class="text-center text-gray-400 text-sm py-3">${this.tt('tj_no_examples')}</p>`;
    }
  }

  render() {
    this.bindOnce();
    if (this._audio) this._audio.pause();
    const keys = Object.keys(TAJWEED_LESSONS);
    const learnedCount = keys.filter(k => this.learned.has(k)).length;
    const pct = Math.round((learnedCount / keys.length) * 100);
    const pills = [
      ['rules', '📜', 'tj_nav_rules', 'Rules'],
      ['reference', '🗂️', 'tj_nav_reference', 'Reference'],
      ['makharij', '👄', 'tj_nav_makharij', 'Makharij'],
      ['drill', '🎯', 'tj_nav_drill', 'Practice drill'],
    ].map(([v, em, key, fb]) => `
      <button data-tj-view="${v}" class="px-4 py-2 rounded-full text-sm font-medium ${this.view === v
        ? 'bg-primary text-white'
        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">${em} ${this.tt(key, fb)}</button>`).join('');
    this.container.innerHTML = `
      <div class="w-full">
        <div class="text-center mb-5">
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('tj_learn_subtitle')}</p>
          <div class="max-w-md mx-auto mt-3">
            <div class="flex justify-between text-xs font-medium text-green-600 dark:text-green-400 mb-1">
              <span>✓ ${learnedCount} / ${keys.length} ${this.tt('tj_learned')}</span><span>${pct}%</span>
            </div>
            <div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div class="h-full rounded-full bg-green-500 transition-all duration-500" style="width:${pct}%"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-2 mb-6">${pills}</div>
        ${this.view === 'makharij' ? this.makharijHtml()
          : this.view === 'drill' ? this.drillHtml()
          : this.view === 'reference' ? this.referenceHtml(keys)
          : this.rulesHtml(keys)}
      </div>`;
    if (this.view === 'rules' && this.rule) this.loadExamples();
  }

  /** Default view: practice shortcuts, learning path, rule groups (+ mistakes), resources. */
  rulesHtml(keys) {
    const groups = [
      ['noon', 'tj_group_noon', 'Noon Sākinah'], ['meem', 'tj_group_meem', 'Meem Sākinah'],
      ['madd', 'tj_group_madd', 'Madd'], ['core', 'tj_group_core', 'Core Rules'],
      ['ra', 'tj_group_ra', "Ra' Rules"], ['other', 'tj_group_other', 'Other Rules'],
    ];
    return `
        <div class="flex flex-wrap justify-center gap-2 mb-6">
          <button data-tj-quiz class="px-4 py-2 rounded-lg bg-secondary text-white text-sm font-medium hover:bg-secondary/80">❓ ${this.tt('tj_practice_quiz')}</button>
          <button data-tj-goto="reading" class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">📖 ${this.tt('tj_practice_reading')}</button>
          <button data-tj-goto="mushaf" class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">📗 ${this.tt('tj_practice_mushaf')}</button>
        </div>
        ${this.pathHtml()}
        ${groups.map(([g, labelKey, fb]) => {
          const inGroup = keys.filter(k => TAJWEED_LESSONS[k].group === g);
          if (!inGroup.length) return '';
          return `
            <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-2 mt-5">${this.tt(labelKey, fb)}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
              ${inGroup.map(k => this.ruleCard(k)).join('')}
            </div>
            ${this.mistakesHtml(g)}`;
        }).join('')}
        ${this.generalMistakesHtml()}
        <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-2 mt-8">🌐 ${this.tt('resources_title')}</h3>
        <div class="flex flex-wrap gap-2">
          ${TAJWEED_RESOURCES.map(r => `
            <a href="${r.url}" target="_blank" rel="noopener" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow text-sm">
              <span>${r.emoji}</span><span class="font-medium">${r.name}</span>
              <span class="text-xs text-gray-400">${this.esc(this.tt(r.descKey))}</span>
            </a>`).join('')}
        </div>`;
  }

  /** Beginner → intermediate → advanced panel with per-level progress bars. */
  pathHtml() {
    let prevDone = true;
    const cards = TAJWEED_PATH.map(stage => {
      const done = stage.rules.filter(k => this.learned.has(k)).length;
      const total = stage.rules.length;
      const pct = Math.round((done / total) * 100);
      const unlocked = prevDone;
      const complete = done === total;
      const html = `
        <div class="rounded-lg border ${complete ? 'border-green-400 dark:border-green-600' : 'border-gray-200 dark:border-gray-700'} p-3 ${unlocked ? '' : 'opacity-60'}">
          <div class="flex items-center gap-2 mb-1.5">
            <span>${complete ? '✅' : unlocked ? stage.emoji : '🔒'}</span>
            <span class="font-semibold text-sm flex-1">${this.tt(stage.labelKey, stage.fallback)}</span>
            <span class="text-xs text-gray-400">${done}/${total}</span>
          </div>
          <div class="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mb-2">
            <div class="h-full rounded-full ${complete ? 'bg-green-500' : 'bg-primary'} transition-all duration-500" style="width:${pct}%"></div>
          </div>
          ${complete ? `<p class="text-xs text-green-600 dark:text-green-400 mb-1.5">${this.tt('tj_path_done', 'Level complete!')}</p>` : ''}
          ${unlocked ? `
            <div class="flex flex-wrap gap-1">
              ${stage.rules.map(k => {
                const learned = this.learned.has(k);
                const color = ((typeof TAJWEED_RULES !== 'undefined' && TAJWEED_RULES[k]) || {}).color || '#888';
                return `
                  <button data-tj-path="${k}" dir="auto" class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs border ${learned
                    ? 'border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-500/10'
                    : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">
                    <span class="w-2 h-2 rounded-full shrink-0" style="background:${color}"></span>${this.esc(this.ruleName(k))}${learned ? ' ✓' : ''}
                  </button>`;
              }).join('')}
            </div>`
          : `<p class="text-xs text-gray-400">${this.tt('tj_path_locked', 'Complete the previous level to unlock')}</p>`}
        </div>`;
      prevDone = complete;
      return html;
    }).join('');
    return `
      <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-3">🧭 ${this.tt('tj_path_title', 'Learning path')}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">${cards}</div>
      </div>`;
  }

  /** Collapsible "common mistakes" card under a rule group. */
  mistakesHtml(group) {
    const m = TAJWEED_MISTAKES[group];
    if (!m) return '';
    const list = m[this.language] || m.en;
    return `
      <details class="mt-2 rounded-xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10">
        <summary class="cursor-pointer px-4 py-2.5 text-sm font-medium text-amber-800 dark:text-amber-300 select-none">⚠️ ${this.tt('tj_mistakes_title', 'Common mistakes')}</summary>
        <ul class="px-4 pb-3 ps-9 space-y-1.5 text-sm text-amber-900/80 dark:text-amber-100/80 list-disc">
          ${list.map(x => `<li dir="auto">${this.esc(x)}</li>`).join('')}
        </ul>
      </details>`;
  }

  /** The 17 makharij in 5 zones + a simple CSS cross-section diagram. */
  makharijHtml() {
    const lang = this.language;
    const nasal = MAKHARIJ_ZONES.find(z => z.key === 'khayshum');
    const seg = (z, flex, count) => `
      <div class="py-2 px-1" style="background:${z.color};flex:${flex}">${z.ar}<br>${count}</div>`;
    const byKey = k => MAKHARIJ_ZONES.find(z => z.key === k);
    return `
      <div class="text-center mb-4">
        <h3 class="font-semibold text-gray-800 dark:text-gray-100">${this.tt('tj_makharij_title', 'Makharij — articulation points')}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${this.tt('tj_makharij_subtitle', 'The 17 articulation points of the Arabic letters, grouped into 5 zones.')}</p>
      </div>
      <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <div dir="rtl" class="max-w-md mx-auto">
          <div class="mb-1 ps-1">
            <span class="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full text-white" style="background:${nasal.color}">👃 ${nasal.ar} · 1</span>
          </div>
          <div class="flex rounded-lg overflow-hidden text-[11px] text-white text-center font-medium">
            ${seg(byKey('shafatan'), 2, 2)}${seg(byKey('lisan'), 6, 10)}${seg(byKey('halq'), 3, 3)}${seg(byKey('jawf'), 2, 1)}
          </div>
          <div class="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>${this.tt('tj_mx_front', 'front (lips)')}</span><span>${this.tt('tj_mx_deep', 'deep (throat & cavity)')}</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
        ${MAKHARIJ_ZONES.map(z => `
          <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 ${z.key === 'lisan' ? 'lg:col-span-2' : ''}">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-3 h-3 rounded-full shrink-0" style="background:${z.color}"></span>
              <span class="font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(z.names[lang] || z.names.en)}</span>
              <span class="ms-auto ayah-arabic !text-xl !leading-none" dir="rtl">${z.ar}</span>
              <span class="text-xs px-1.5 py-0.5 rounded-full shrink-0" style="background:${z.color}22;color:${z.color}">${z.points.length}</span>
            </div>
            <div class="space-y-1.5 ${z.key === 'lisan' ? 'lg:columns-2 lg:gap-3 lg:space-y-0' : ''}">
              ${z.points.map(p => `
                <div class="flex items-start gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/40 p-2.5 ${z.key === 'lisan' ? 'lg:break-inside-avoid lg:mb-1.5' : ''}">
                  <span class="ayah-arabic !text-2xl !leading-normal shrink-0 px-2 rounded-md border" style="border-color:${z.color}55;color:${z.color}" dir="rtl">${p.letters}</span>
                  <div class="min-w-0">
                    ${p.pointName ? `<span class="block ayah-arabic !text-sm !leading-snug mb-0.5 font-medium" style="color:${z.color}" dir="rtl">${p.pointName}</span>` : ''}
                    <span class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(p[lang] || p.en)}</span>
                  </div>
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>`;
  }

  /** Printable quick reference: colour key + noon/meem decision tables. */
  referenceHtml(keys) {
    const lang = this.language;
    const legend = keys.map(k => {
      const def = (typeof TAJWEED_RULES !== 'undefined' && TAJWEED_RULES[k]) || { color: '#888' };
      const les = TAJWEED_LESSONS[k] || {};
      return `
        <div class="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900/40 px-2.5 py-2">
          <span class="w-3.5 h-3.5 rounded-full shrink-0" style="background:${def.color}"></span>
          <span class="flex-1 min-w-0 text-xs font-medium text-gray-700 dark:text-gray-200 truncate" dir="auto">${this.esc(this.ruleName(k))}</span>
          <span class="ayah-arabic !text-base !leading-none text-gray-400 shrink-0 max-w-[8rem] truncate" dir="rtl">${this.esc(les.letters || '')}</span>
        </div>`;
    }).join('');
    const decisionCard = (title, rows) => `
      <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <h3 class="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-3" dir="auto">${title}</h3>
        <div class="space-y-2">
          ${rows.map(r => `
            <div class="flex items-start gap-3 rounded-lg bg-gray-50 dark:bg-gray-900/40 p-2.5">
              <span class="w-3 h-3 rounded-full shrink-0 mt-1.5" style="background:${r.color}"></span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-sm font-semibold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(r.names[lang] || r.names.en)}</span>
                  <span class="text-[11px] text-gray-400">${this.tt('tj_ref_trigger', 'when followed by')}</span>
                  <span class="ayah-arabic !text-lg !leading-normal px-1.5 rounded" style="color:${r.color}" dir="rtl">${this.esc(r.trigger)}</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-0.5" dir="auto">${this.esc(r[lang] || r.en)}</p>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
    return `
      <div class="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 class="font-semibold text-gray-800 dark:text-gray-100">${this.tt('tj_ref_title', 'Quick reference & colour key')}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${this.tt('tj_ref_subtitle', 'The colour used for each rule, plus the classical decision tables for noon and meem sakinah.')}</p>
        </div>
        <button data-tj-print class="shrink-0 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">🖨️ ${this.tt('tj_ref_print', 'Print')}</button>
      </div>
      <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 mb-4">
        <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-3">🎨 ${this.tt('tj_ref_legend', 'Colour key')}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">${legend}</div>
      </div>
      ${decisionCard('🅝 ' + this.tt('tj_ref_noon_title', 'Noon Sakinah & Tanween'), NOON_SAKINAH_RULES)}
      ${decisionCard('🅜 ' + this.tt('tj_ref_meem_title', 'Meem Sakinah'), MEEM_SAKINAH_RULES)}`;
  }

  /** Inline "which rule?" drill built from real annotated verses. */
  drillHtml() {
    const d = this.drill;
    const head = `
      <h3 class="font-semibold text-gray-800 dark:text-gray-100">🎯 ${this.tt('tj_drill_title', 'Rule identification drill')}</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${this.tt('tj_drill_intro', 'Read the highlighted letters in a real verse and pick the tajweed rule that applies.')}</p>`;
    const startBtn = `<button data-tj-drill-start class="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/80">▶ ${this.tt('tj_drill_start', 'Start drill')}</button>`;
    const bestBadge = this.drillBest ? `
      <p class="text-xs text-amber-600 dark:text-amber-400 mt-2">🏅 ${this.tt('tj_drill_best', 'Best')}: ${this.drillBest.score} / ${this.drillBest.total}</p>` : '';
    if (!d) return `
      <div class="max-w-xl mx-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center">
        ${head}
        ${bestBadge}
        <div class="flex flex-wrap justify-center gap-2 mt-4">
          ${startBtn}
          <button data-tj-quiz class="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">❓ ${this.tt('tj_practice_quiz')}</button>
        </div>
      </div>`;
    if (d.status === 'loading') return `<p class="text-center text-gray-400 text-sm py-8">${this.tt('loading')}</p>`;
    if (d.status === 'empty') return `
      <div class="max-w-xl mx-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">${this.tt('tj_drill_empty', 'Could not build drill questions — please try again.')}</p>
        ${startBtn}
      </div>`;
    if (d.idx >= d.questions.length) {
      const scorePct = d.score / d.questions.length;
      return `
        <div class="max-w-xl mx-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center">
          <div class="text-4xl mb-2">${scorePct === 1 ? '🏆' : scorePct >= 0.5 ? '🎉' : '💪'}</div>
          <p class="font-semibold text-gray-800 dark:text-gray-100 mb-1">${this.esc(this.tt('quiz_your_score').replace('{score}', d.score).replace('{total}', d.questions.length))}</p>
          ${bestBadge ? `<p class="text-xs text-amber-600 dark:text-amber-400 mb-4">🏅 ${this.tt('tj_drill_best', 'Best')}: ${this.drillBest.score} / ${this.drillBest.total}</p>` : '<div class="mb-4"></div>'}
          <div class="flex flex-wrap justify-center gap-2">
            <button data-tj-drill-start class="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/80">🔄 ${this.tt('retry')}</button>
            <button data-tj-quiz class="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">❓ ${this.tt('tj_practice_quiz')}</button>
          </div>
        </div>`;
    }
    const q = d.questions[d.idx];
    const answered = d.picked !== null;
    const correct = answered && q.options[d.picked] && q.options[d.picked].correct;
    return `
      <div class="max-w-2xl mx-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
        <div class="flex items-center justify-between text-xs text-gray-400 mb-3">
          <span>${d.idx + 1} / ${d.questions.length}</span>
          <span>${this.tt('quiz_score')}: ${d.score}</span>
        </div>
        <p class="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3" dir="auto">${this.tt('quiz_which_rule')}</p>
        <div class="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-4 mb-2">
          <div class="ayah-arabic !text-2xl !leading-[2.4]" dir="rtl">${q.promptHtml}</div>
        </div>
        <div class="mb-4">
          <button data-ayah-ref="${q.ref}" title="${this.tt('tj_open_verse')}"
                  class="text-xs font-mono text-gray-400 hover:text-primary underline decoration-dotted underline-offset-2">${q.ref} ⓘ</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${q.options.map((o, i) => {
            let cls = 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700/40';
            if (answered) {
              if (o.correct) cls = 'border-green-500 bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-300';
              else if (i === d.picked) cls = 'border-red-500 bg-red-50 dark:bg-red-500/15 text-red-600 dark:text-red-300';
              else cls = 'border-gray-200 dark:border-gray-700 opacity-60';
            }
            return `<button data-tj-opt="${i}" ${answered ? 'disabled' : ''} dir="auto" class="px-3 py-3 min-h-[2.75rem] rounded-lg border text-sm text-start ${cls}">${this.esc(o.name)}</button>`;
          }).join('')}
        </div>
        ${answered ? `
          <div class="mt-4 rounded-lg p-3 text-sm ${correct ? 'bg-green-50 dark:bg-green-500/10 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-500/10 text-red-800 dark:text-red-200'}">
            <p class="font-semibold mb-1">${correct ? '✅ ' + this.tt('quiz_correct') : '❌ ' + this.tt('quiz_wrong')}</p>
            <p dir="auto">${this.esc(t('tjd_' + q.rule, this.language))}</p>
          </div>
          <button data-tj-drill-next class="mt-3 w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/80">${this.tt('next')} →</button>` : ''}
      </div>`;
  }

  async startDrill() {
    this.drill = { status: 'loading' };
    this.render();
    const req = ++this._drillReq;
    let questions = [];
    try { questions = await this.buildDrillQuestions(); } catch (e) { /* fall through to empty */ }
    if (req !== this._drillReq) return; // superseded by a newer start
    this.drill = questions.length ? { questions, idx: 0, score: 0, picked: null } : { status: 'empty' };
    if (this.view === 'drill') this.render();
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /** Long verses: keep ~70 chars of context on each side of the span (word-aligned). */
  _trimWindow(text, start, end) {
    const PAD = 70;
    let s = 0, e = text.length, pre = '', post = '';
    if (start > PAD) {
      const sp = text.lastIndexOf(' ', start - PAD);
      s = sp === -1 ? start - PAD : sp + 1;
      pre = '… ';
    }
    if (text.length - end > PAD) {
      const sp = text.indexOf(' ', end + PAD);
      e = sp === -1 ? end + PAD : sp;
      post = ' …';
    }
    return { s, e, pre, post };
  }

  /** ~8 questions: one random annotated span per verse from 6 random surahs, max 2 per rule. */
  async buildDrillQuestions() {
    const surahs = this._shuffle(SURAH_DATA.map(s => s.number)).slice(0, 6);
    const items = [];
    for (const n of surahs) {
      try {
        const { text, rules } = await TajweedData.load(n);
        for (const vk in rules) {
          const m = vk.match(/^verse_(\d+)$/);
          if (!m || m[1] === '0') continue;
          const tx = text[vk], anns = rules[vk];
          if (!tx || !anns || !anns.length) continue;
          const ann = anns[Math.floor(Math.random() * anns.length)];
          if (!TAJWEED_RULES[ann.rule]) continue;
          const start = Math.max(0, ann.start), end = Math.min(tx.length, ann.end);
          if (end <= start) continue;
          items.push({ surah: n, ayah: parseInt(m[1], 10), text: tx, start, end, rule: ann.rule });
        }
      } catch (e) { /* surah data unavailable — skip */ }
      if (items.length >= 80) break;
    }
    this._shuffle(items);
    const picked = [], perRule = {};
    for (const it of items) {
      if ((perRule[it.rule] || 0) >= 2) continue;
      perRule[it.rule] = (perRule[it.rule] || 0) + 1;
      picked.push(it);
      if (picked.length >= 8) break;
    }
    const ruleKeys = Object.keys(TAJWEED_RULES);
    return picked.map(it => {
      const { s, e, pre, post } = this._trimWindow(it.text, it.start, it.end);
      const promptHtml = pre + this.esc(it.text.slice(s, it.start))
        + `<span class="bg-yellow-200 dark:bg-yellow-500/40 rounded px-0.5">${this.esc(it.text.slice(it.start, it.end))}</span>`
        + this.esc(it.text.slice(it.end, e)) + post;
      const others = this._shuffle(ruleKeys.filter(k => k !== it.rule)).slice(0, 3);
      const options = this._shuffle(
        [{ name: this.ruleName(it.rule), correct: true }]
          .concat(others.map(k => ({ name: this.ruleName(k), correct: false }))));
      return { promptHtml, options, rule: it.rule, ref: `${it.surah}:${it.ayah}` };
    });
  }

  generalMistakesHtml() {
    const m = TAJWEED_MISTAKES.general;
    if (!m) return '';
    const list = m[this.language] || m.en;
    return `
      <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-2 mt-8">⚠️ ${this.tt('tj_general_mistakes_title', 'Common Mistakes — Non-Arab Learners')}</h3>
      <div class="rounded-xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 p-4">
        <ul class="space-y-1.5 text-sm text-amber-900/80 dark:text-amber-100/80 list-disc ps-5">
          ${list.map(x => `<li dir="auto">${this.esc(x)}</li>`).join('')}
        </ul>
      </div>`;
  }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let tajweedLearn;
document.addEventListener('DOMContentLoaded', () => { tajweedLearn = new TajweedLearn(); });
