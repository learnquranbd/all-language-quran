/**
 * Learn Quranic Arabic — a flagship learning module that teaches the Arabic
 * LANGUAGE (grammar & sentence structure) using REAL, verified Quranic examples.
 * Every grammar point is illustrated by an actual ayah whose Arabic wording was
 * checked against the app's own local data (data/quran-words.json). No Arabic is
 * written from memory.
 *
 * Integration (mirrors js/resources.js):
 *   - Renders into #quranic-arabic-container
 *   - Responds to tab id "quranicarabic" (tabChanged event)
 *   - Re-renders on settingChanged:language
 *   - Global instance: quranicArabicView
 *   - Chrome strings via t(key, lang) with a built-in inline fallback so the
 *     module never shows raw keys even before the orchestrator registers them.
 *   - Lesson CONTENT is inline with per-item en/bn fields.
 *   - Progress persisted in localStorage under "lq_qarabic_progress".
 *
 * ACCURACY: every ayah reference, Arabic phrase (word tokens) and highlighted
 * word below was copied from data/quran-words.json (Uthmani text). Grammatical
 * claims are kept at standard textbook level for Quranic-Arabic courses.
 */


/* ------------------------------------------------------------------ *
 * Data moved to js/learn-quranic-arabic-data.js (2025-07 split).      *
 * That file must be loaded BEFORE this one in index.html.             *
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * View                                                                *
 * ------------------------------------------------------------------ */
class QuranicArabicView {
  constructor() {
    this.container = document.getElementById('quranic-arabic-container');
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.rendered = false;
    this.view = 'syllabus';      // 'syllabus' | 'lesson' | 'quiz' | 'glossary' | 'flashcards' | 'match'
    this.current = 0;            // current lesson index (into ordered list)
    this.answer = null;         // { selected, correct } for the current practice
    this.quiz = null;           // active quiz state
    this.glossaryQuery = '';    // glossary search text
    this.cards = null;          // active flashcard session state
    this.match = null;          // active word-match session state
    this._ordered = null;       // cached ordered lesson list
    this._vocab = null;         // cached unique vocab deck
    this.progress = this.loadProgress();

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'quranicarabic') this.render(); } catch (err) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered) this.render();
        }
      } catch (err) { /* ignore */ }
    });

    // One delegated click handler (survives innerHTML re-renders).
    if (this.container) {
      this.container.addEventListener('click', (e) => this.onClick(e));
      this.container.addEventListener('input', (e) => this.onInput(e));
    }

    // Kick off supplemental content loading (fully async, non-blocking).
    // Inline lessons render immediately; external lessons merge + re-render
    // when (and if) they arrive. Any failure is swallowed silently.
    try { this.loadSupplemental(); } catch (e) { /* ignore */ }
  }

  /* ------------------------------------------------------------------ *
   * Supplemental content loader (manifest-driven, purely additive)      *
   * ------------------------------------------------------------------ *
   * Fetches data/qarabic/manifest.json (a JSON array of filenames).     *
   * Each file is a JSON object with optional keys `units`, `lessons`,   *
   * `glossary` — each entry in the SAME shape as the inline arrays.     *
   * Merges into QA_UNITS / QA_LESSONS / QA_GLOSSARY (dedupe by id),      *
   * honouring an optional numeric `order` on new units. Never throws,   *
   * never blocks the UI, and works identically when no files exist.     *
   * ------------------------------------------------------------------ */
  loadSupplemental() {
    if (this._dataLoaded) return;      // guard against double-merge
    this._dataLoaded = true;
    if (typeof fetch !== 'function') return;
    const base = 'data/qarabic/';
    const grabJson = (url) => {
      try {
        return fetch(url, { cache: 'no-cache' })
          .then(r => (r && r.ok) ? r.json() : null)
          .catch(() => null);
      } catch (e) { return Promise.resolve(null); }
    };
    Promise.resolve()
      .then(() => grabJson(base + 'manifest.json'))
      .then(list => {
        if (!Array.isArray(list) || !list.length) return null;
        const files = list.filter(f => typeof f === 'string' && f);
        return Promise.all(files.map(f => grabJson(base + f)));
      })
      .then(results => {
        if (!Array.isArray(results)) return;
        let changed = 0;
        results.forEach(obj => {
          if (!obj || typeof obj !== 'object') return;
          try {
            changed += this._mergeUnits(obj.units);
            changed += this._mergeArr(QA_LESSONS, obj.lessons, x => (x && x.id != null) ? x.id : null);
            changed += this._mergeArr(QA_GLOSSARY, obj.glossary, x => x ? (x.id != null ? x.id : x.ar) : null);
          } catch (e) { /* skip malformed file, keep going */ }
        });
        if (changed) {
          this._ordered = null;        // rebuild ordered lesson list on next read
          this._vocab = null;          // rebuild vocab/flashcard deck
          if (this.rendered) this.render();   // re-render if already on screen
        }
      })
      .catch(() => { /* fully silent: inline lessons remain intact */ });
  }

  // Append entries from `incoming` into `target`, skipping any whose key
  // already exists (dedupe). Returns the number actually added.
  _mergeArr(target, incoming, keyOf) {
    if (!Array.isArray(target) || !Array.isArray(incoming)) return 0;
    const seen = Object.create(null);
    target.forEach(x => { const k = keyOf(x); if (k != null) seen[k] = true; });
    let added = 0;
    incoming.forEach(x => {
      if (!x || typeof x !== 'object') return;
      const k = keyOf(x);
      if (k == null || seen[k]) return;
      target.push(x); seen[k] = true; added++;
    });
    return added;
  }

  // Merge new units into QA_UNITS (in place, preserving the const binding),
  // deduping by id and honouring an optional numeric `order` field as the
  // desired index position. Existing units keep their relative order.
  _mergeUnits(incoming) {
    if (!Array.isArray(incoming)) return 0;
    const existing = Object.create(null);
    QA_UNITS.forEach(u => { if (u && u.id != null) existing[u.id] = true; });
    const toAdd = [];
    incoming.forEach(u => {
      if (!u || typeof u !== 'object' || u.id == null || existing[u.id]) return;
      existing[u.id] = true;
      toAdd.push(u);
    });
    if (!toAdd.length) return 0;
    // `pos` is the target index; `rank` breaks ties so a new unit with an
    // explicit order lands AT that index (splice semantics), while new units
    // without an order fall to the end. `seq` preserves file order otherwise.
    const positioned = QA_UNITS.map((u, i) => ({ u, pos: i, rank: 1, seq: i }));
    let seq = QA_UNITS.length;
    toAdd.forEach(u => {
      const hasOrder = (typeof u.order === 'number' && isFinite(u.order));
      const pos = hasOrder ? u.order : Number.MAX_SAFE_INTEGER;
      positioned.push({ u, pos, rank: hasOrder ? 0 : 1, seq: seq++ });
    });
    positioned.sort((a, b) =>
      (a.pos !== b.pos) ? a.pos - b.pos
        : (a.rank !== b.rank) ? a.rank - b.rank
          : a.seq - b.seq);
    const sorted = positioned.map(x => x.u);
    QA_UNITS.length = 0;
    Array.prototype.push.apply(QA_UNITS, sorted);
    return toAdd.length;
  }

  /* ---------- ordered lessons (sorted by unit order, stable within unit) ---------- */
  lessons() {
    if (this._ordered) return this._ordered;
    try {
      const rank = {};
      QA_UNITS.forEach((u, i) => { rank[u.id] = i; });
      this._ordered = QA_LESSONS
        .map((l, i) => ({ l, i }))
        .sort((a, b) => {
          const ra = (rank[a.l.unit] != null) ? rank[a.l.unit] : 99;
          const rb = (rank[b.l.unit] != null) ? rank[b.l.unit] : 99;
          return ra !== rb ? ra - rb : a.i - b.i;
        })
        .map(x => x.l);
    } catch (e) { this._ordered = QA_LESSONS.slice(); }
    return this._ordered;
  }
  unitLessons(unitId) { return this.lessons().filter(l => l.unit === unitId); }

  /* ---------- helpers ---------- */
  tt(key) {
    let v = key;
    try { if (typeof t === 'function') v = t(key, this.language); } catch (e) { v = key; }
    if (v && v !== key) return v;
    const entry = QA_UI[key];
    return entry ? (entry[this.language] || entry.en) : key;
  }
  // Content-language resolver: bn from inline data, other languages via the
  // CI18N knowledgebase (content-i18n.js), falling back to English.
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }
  L(obj) { return this.lc(obj); } // legacy alias
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  optText(o) { return typeof o === 'string' ? o : this.lc(o); }

  loadProgress() {
    try {
      const raw = localStorage.getItem('lq_qarabic_progress');
      const o = raw ? JSON.parse(raw) : null;
      const p = (o && typeof o === 'object') ? o : {};
      if (!p.learned || typeof p.learned !== 'object') p.learned = {};
      if (!p.quiz || typeof p.quiz !== 'object') p.quiz = {};
      if (!p.missed || typeof p.missed !== 'object') p.missed = {};
      if (!p.cards || typeof p.cards !== 'object') p.cards = {};   // Leitner box per Arabic word
      if (!p.match || typeof p.match !== 'object') p.match = {};   // { best: pct }
      if (typeof p.lastLesson !== 'string') p.lastLesson = '';     // id of last lesson opened
      return p;
    } catch (e) { return { learned: {}, quiz: {}, missed: {}, cards: {}, match: {}, lastLesson: '' }; }
  }
  saveProgress() {
    try { localStorage.setItem('lq_qarabic_progress', JSON.stringify(this.progress)); } catch (e) { /* ignore */ }
  }
  isLearned(id) { return !!(this.progress.learned && this.progress.learned[id]); }
  markLearned(id) { if (!this.progress.learned) this.progress.learned = {}; if (!this.progress.learned[id]) { this.progress.learned[id] = true; this.saveProgress(); } }
  learnedCount() { try { return Object.keys(this.progress.learned || {}).filter(k => this.progress.learned[k]).length; } catch (e) { return 0; } }
  unitLearnedCount(unitId) { try { return this.unitLessons(unitId).filter(l => this.isLearned(l.id)).length; } catch (e) { return 0; } }
  bestQuiz(scopeId) { try { const v = this.progress.quiz && this.progress.quiz[scopeId]; return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (e) { return null; } }
  addMissed(id) { try { if (!id) return; if (!this.progress.missed) this.progress.missed = {}; if (!this.progress.missed[id]) { this.progress.missed[id] = true; this.saveProgress(); } } catch (e) { /* ignore */ } }
  removeMissed(id) { try { if (this.progress.missed && this.progress.missed[id]) { delete this.progress.missed[id]; this.saveProgress(); } } catch (e) { /* ignore */ } }
  missedIds() { try { return Object.keys(this.progress.missed || {}).filter(k => this.progress.missed[k]); } catch (e) { return []; } }
  missedCount() { return this.missedIds().length; }
  saveQuizScore(scopeId, pct) {
    try {
      if (!this.progress.quiz) this.progress.quiz = {};
      const prev = this.bestQuiz(scopeId);
      if (prev == null || pct > prev) { this.progress.quiz[scopeId] = pct; this.saveProgress(); }
    } catch (e) { /* ignore */ }
  }

  /* ---------- glossary-seen (read-only dashboard signal) ---------- */
  markGlossarySeen() {
    try {
      const n = (typeof QA_GLOSSARY !== 'undefined' && Array.isArray(QA_GLOSSARY)) ? QA_GLOSSARY.length : 0;
      if (this.progress.glossarySeen !== n) { this.progress.glossarySeen = n; this.saveProgress(); }
    } catch (e) { /* ignore */ }
  }
  glossarySeenCount() {
    try { const total = (typeof QA_GLOSSARY !== 'undefined' && Array.isArray(QA_GLOSSARY)) ? QA_GLOSSARY.length : 0; return Math.min(this.progress.glossarySeen || 0, total); } catch (e) { return 0; }
  }

  /* ---------- audio (guarded browser TTS; omitted entirely if unavailable) ---------- */
  ttsAvailable() {
    try { return typeof window !== 'undefined' && !!window.speechSynthesis && typeof window.SpeechSynthesisUtterance !== 'undefined'; } catch (e) { return false; }
  }
  speakArabic(text) {
    if (!text || !this.ttsAvailable()) return;
    try {
      const synth = window.speechSynthesis;
      const voices = synth.getVoices ? synth.getVoices() : [];
      const arVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('ar'));
      const utter = new SpeechSynthesisUtterance(text);
      if (arVoice) utter.voice = arVoice;
      utter.lang = arVoice ? arVoice.lang : 'ar-SA';
      utter.rate = 0.8;
      synth.cancel();
      synth.speak(utter);
    } catch (e) { /* ignore */ }
  }

  /* ---------- flashcards: unique verified vocab deck + Leitner boxes ---------- */
  allVocab() {
    if (this._vocab) return this._vocab;
    const seen = {}; const out = [];
    try {
      (typeof QA_LESSONS !== 'undefined' && Array.isArray(QA_LESSONS) ? QA_LESSONS : []).forEach(l => {
        if (l && Array.isArray(l.vocab)) l.vocab.forEach(w => {
          if (w && w.ar && !seen[w.ar]) { seen[w.ar] = true; out.push(w); }
        });
      });
    } catch (e) { /* ignore */ }
    this._vocab = out;
    return out;
  }
  cardBox(ar) { try { const v = this.progress.cards && this.progress.cards[ar]; return (typeof v === 'number' && isFinite(v)) ? v : 0; } catch (e) { return 0; } }
  markCard(ar, known) {
    try {
      if (!ar) return;
      if (!this.progress.cards) this.progress.cards = {};
      const cur = this.cardBox(ar) || 1;             // treat a brand-new card as box 1
      this.progress.cards[ar] = known ? Math.min(cur + 1, 5) : 1;
      this.saveProgress();
    } catch (e) { /* ignore */ }
  }
  cardsSeenCount() { try { return Object.keys(this.progress.cards || {}).length; } catch (e) { return 0; } }
  cardsMasteredCount() { try { const c = this.progress.cards || {}; return Object.keys(c).filter(k => c[k] >= 5).length; } catch (e) { return 0; } }

  /* ---------- events ---------- */
  onClick(e) {
    const t0 = e.target;
    // Audio: guarded browser TTS for a single Arabic word (sibling of ref buttons).
    const sayEl = t0.closest ? t0.closest('[data-qa-say]') : null;
    if (sayEl) { e.stopPropagation(); this.speakArabic(sayEl.getAttribute('data-qa-say')); return; }
    const refEl = t0.closest ? t0.closest('[data-qa-ref]') : null;
    if (refEl) {
      const ref = refEl.getAttribute('data-qa-ref');
      const word = refEl.getAttribute('data-qa-word') || null;
      try { if (typeof ayahModal !== 'undefined' && ayahModal && typeof ayahModal.open === 'function') ayahModal.open(ref, { word: word }); } catch (err) { /* ignore */ }
      return;
    }
    const openEl = t0.closest ? t0.closest('[data-qa-open]') : null;
    if (openEl) { this.openLesson(parseInt(openEl.getAttribute('data-qa-open'), 10)); return; }
    if (t0.closest && t0.closest('[data-qa-back]')) { this.toSyllabus(); return; }
    if (t0.closest && t0.closest('[data-qa-prev]')) { this.openLesson(this.current - 1); return; }
    if (t0.closest && t0.closest('[data-qa-next]')) { this.openLesson(this.current + 1); return; }
    if (t0.closest && t0.closest('[data-qa-retry]')) { this.answer = null; this.render(); return; }
    const optEl = t0.closest ? t0.closest('[data-qa-opt]') : null;
    if (optEl) { this.answerPractice(parseInt(optEl.getAttribute('data-qa-opt'), 10)); return; }

    // Syllabus / navigation
    const unitEl = t0.closest ? t0.closest('[data-qa-unit]') : null;
    if (unitEl) { this.scrollToUnit(unitEl.getAttribute('data-qa-unit')); return; }
    if (t0.closest && t0.closest('[data-qa-glossary]')) { this.markGlossarySeen(); this.view = 'glossary'; this.render(); return; }
    if (t0.closest && t0.closest('[data-qa-flash]')) { this.startFlashcards(); return; }
    if (t0.closest && t0.closest('[data-qa-match]')) { this.startMatch(); return; }
    if (t0.closest && t0.closest('[data-qa-resume]')) { this.resumeLesson(); return; }
    const quizEl = t0.closest ? t0.closest('[data-qa-quiz]') : null;
    if (quizEl) { this.startQuiz(quizEl.getAttribute('data-qa-quiz')); return; }

    // Flashcard runner
    if (t0.closest && t0.closest('[data-qa-reveal]')) { if (this.cards) { this.cards.revealed = true; this.render(); } return; }
    const cardAns = t0.closest ? t0.closest('[data-qa-card]') : null;
    if (cardAns) { this.answerCard(cardAns.getAttribute('data-qa-card') === 'known'); return; }
    if (t0.closest && t0.closest('[data-qa-flash-restart]')) { this.startFlashcards(); return; }

    // Word-match runner
    if (t0.closest && t0.closest('[data-qa-match-restart]')) { this.startMatch(); return; }
    const mleftEl = t0.closest ? t0.closest('[data-qa-mleft]') : null;
    if (mleftEl) { this.matchSelect(parseInt(mleftEl.getAttribute('data-qa-mleft'), 10)); return; }
    const mrightEl = t0.closest ? t0.closest('[data-qa-mright]') : null;
    if (mrightEl) { this.matchAnswer(parseInt(mrightEl.getAttribute('data-qa-mright'), 10)); return; }

    // Quiz runner
    const qoptEl = t0.closest ? t0.closest('[data-qa-qopt]') : null;
    if (qoptEl) { this.answerQuiz(parseInt(qoptEl.getAttribute('data-qa-qopt'), 10)); return; }
    if (t0.closest && t0.closest('[data-qa-qnext]')) { this.nextQuiz(); return; }
    if (t0.closest && t0.closest('[data-qa-qretry]')) { if (this.quiz) this.startQuiz(this.quiz.scope); return; }
  }

  onInput(e) {
    try {
      const el = e.target;
      if (el && el.id === 'qa-gloss-search') { this.glossaryQuery = el.value || ''; this.filterGlossary(); }
    } catch (err) { /* ignore */ }
  }

  toSyllabus() { this.view = 'syllabus'; this.answer = null; this.quiz = null; this.cards = null; this.match = null; this.render(); }

  openLesson(idx) {
    const list = this.lessons();
    if (idx < 0 || idx >= list.length) return;
    this.current = idx;
    this.view = 'lesson';
    this.answer = null;
    try { const l = list[idx]; if (l && l.id && this.progress.lastLesson !== l.id) { this.progress.lastLesson = l.id; this.saveProgress(); } } catch (e) { /* ignore */ }
    this.render();
    try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
  }

  scrollToUnit(unitId) {
    try {
      const el = this.container ? this.container.querySelector('#qa-unit-' + unitId) : null;
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) { /* ignore */ }
  }

  answerPractice(i) {
    const lesson = this.lessons()[this.current];
    if (!lesson || !lesson.practice) return;
    const correct = i === lesson.practice.answer;
    this.answer = { selected: i, correct: correct };
    if (correct) { this.markLearned(lesson.id); this.removeMissed(lesson.id); }
    else this.addMissed(lesson.id);
    this.render();
  }

  /* ---------- quiz ---------- */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const tmp = a[i]; a[i] = a[j]; a[j] = tmp; }
    return a;
  }

  startQuiz(scope) {
    try {
      let qs;
      if (scope === 'irab') {
        // Iʿrāb practice: standalone question bank (no lesson tagging).
        qs = this.shuffle((typeof QA_IRAB !== 'undefined' && Array.isArray(QA_IRAB) ? QA_IRAB : []).map(q => Object.assign({}, q)));
      } else {
        let pool;
        if (scope === 'final') pool = this.lessons();
        else if (scope === 'missed') { const ids = this.missedIds(); pool = this.lessons().filter(l => ids.indexOf(l.id) >= 0); }
        else pool = this.unitLessons(scope);
        // Tag each question with its lesson id so quiz results can update the missed list.
        qs = this.shuffle((pool || []).filter(l => l && l.practice).map(l => Object.assign({ _lid: l.id }, l.practice)));
      }
      if (!qs.length) { this.toSyllabus(); return; }
      const cap = (scope === 'final' || scope === 'missed' || scope === 'irab') ? 10 : 5;
      this.quiz = { scope: scope, qs: qs.slice(0, Math.min(cap, qs.length)), idx: 0, score: 0, picked: null, done: false, saved: false };
      this.view = 'quiz';
      this.render();
      try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
    } catch (e) { this.toSyllabus(); }
  }

  answerQuiz(i) {
    const q = this.quiz;
    if (!q || q.done || q.picked != null) return;
    const cur = q.qs[q.idx];
    if (!cur) return;
    q.picked = i;
    if (i === cur.answer) { q.score++; if (cur._lid) this.removeMissed(cur._lid); }
    else if (cur._lid) this.addMissed(cur._lid);
    this.render();
  }

  nextQuiz() {
    const q = this.quiz;
    if (!q) return;
    if (q.idx + 1 < q.qs.length) { q.idx++; q.picked = null; }
    else {
      q.done = true;
      if (!q.saved) {
        const pct = q.qs.length ? Math.round((q.score / q.qs.length) * 100) : 0;
        this.saveQuizScore(q.scope, pct);
        q.saved = true;
      }
    }
    this.render();
  }

  /* ---------- flashcards ---------- */
  startFlashcards() {
    try {
      const deck = this.allVocab();
      if (!deck.length) { this.toSyllabus(); return; }
      // Leitner order: lowest box (new + missed) first, shuffled within each box.
      const byBox = {};
      deck.forEach(w => { const b = this.cardBox(w.ar); (byBox[b] = byBox[b] || []).push(w); });
      let order = [];
      Object.keys(byBox).map(Number).sort((a, b) => a - b).forEach(b => { order = order.concat(this.shuffle(byBox[b])); });
      this.cards = { deck: order, idx: 0, revealed: false, done: false, known: 0, again: 0, total: order.length };
      this.view = 'flashcards';
      this.render();
      try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
    } catch (e) { this.toSyllabus(); }
  }
  answerCard(known) {
    const c = this.cards;
    if (!c || c.done) return;
    const w = c.deck[c.idx];
    if (!w) return;
    this.markCard(w.ar, known);
    if (known) c.known++; else c.again++;
    if (c.idx + 1 < c.deck.length) { c.idx++; c.revealed = false; }
    else c.done = true;
    this.render();
  }

  /* ---------- resume where you left off ---------- */
  resumeIndex() {
    try {
      const id = this.progress && this.progress.lastLesson;
      if (!id) return -1;
      return this.lessons().findIndex(l => l && l.id === id);
    } catch (e) { return -1; }
  }
  resumeLesson() {
    const idx = this.resumeIndex();
    if (idx >= 0) this.openLesson(idx);
  }

  /* ---------- word match: pair verified vocab to meanings (scored, persisted) ---------- */
  matchBest() { try { const v = this.progress.match && this.progress.match.best; return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (e) { return null; } }
  saveMatchScore(pct) {
    try {
      if (!this.progress.match) this.progress.match = {};
      const prev = this.matchBest();
      if (prev == null || pct > prev) { this.progress.match.best = pct; this.saveProgress(); }
    } catch (e) { /* ignore */ }
  }
  startMatch() {
    try {
      const deck = this.shuffle(this.allVocab()).slice(0, 5);
      if (deck.length < 2) { this.toSyllabus(); return; }
      // Each pair gets a stable id; the right column is a shuffled view of the same pairs.
      const pairs = deck.map((w, i) => ({ id: i, ar: w.ar, meaning: this.lc(w) }));
      this.match = {
        left: pairs,
        right: this.shuffle(pairs.slice()),
        sel: null,          // selected pair id (from the left column)
        wrongId: null,      // id briefly flagged wrong (cleared on next tap)
        matched: {},        // id -> true
        mistakes: 0,
        total: pairs.length,
        done: false,
        saved: false,
      };
      this.view = 'match';
      this.render();
      try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
    } catch (e) { this.toSyllabus(); }
  }
  matchSelect(id) {
    const m = this.match;
    if (!m || m.done || m.matched[id]) return;
    m.sel = id; m.wrongId = null;
    this.render();
  }
  matchAnswer(id) {
    const m = this.match;
    if (!m || m.done || m.matched[id]) return;
    if (m.sel == null) { m.wrongId = null; this.render(); return; }
    if (m.sel === id) {
      m.matched[id] = true;
      m.sel = null; m.wrongId = null;
      if (Object.keys(m.matched).length >= m.total) {
        m.done = true;
        if (!m.saved) {
          const pct = m.total ? Math.round((m.total / (m.total + m.mistakes)) * 100) : 0;
          this.saveMatchScore(pct);
          m.saved = true;
        }
      }
    } else {
      m.mistakes++;
      m.wrongId = id;
      m.sel = null;
    }
    this.render();
  }

  /* ---------- render ---------- */
  render() {
    if (!this.container) return;
    this.rendered = true;
    try {
      if (!Array.isArray(QA_LESSONS) || !QA_LESSONS.length) {
        this.container.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-10">${this.esc(this.tt('qa_unavailable'))}</p>`;
        return;
      }
      let html;
      if (this.view === 'lesson') html = this.renderLesson();
      else if (this.view === 'quiz') html = this.renderQuiz();
      else if (this.view === 'glossary') html = this.renderGlossary();
      else if (this.view === 'flashcards') html = this.renderFlashcards();
      else if (this.view === 'match') html = this.renderMatch();
      else html = this.renderSyllabus();
      this.container.innerHTML = html;
    } catch (e) {
      this.container.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-10">${this.esc(this.tt('qa_unavailable'))}</p>`;
    }
  }

  renderSyllabus() {
    const list = this.lessons();
    const total = list.length;
    const done = this.learnedCount();
    const pct = total ? Math.round((done / total) * 100) : 0;
    const allDone = done >= total;

    // Units overview chips (jump + per-unit progress)
    const overview = QA_UNITS.map(unit => {
      const uTotal = this.unitLessons(unit.id).length;
      if (!uTotal) return '';
      const uDone = this.unitLearnedCount(unit.id);
      const full = uDone >= uTotal;
      return `
        <button type="button" data-qa-unit="${this.esc(unit.id)}"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${full ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'} hover:border-primary transition-colors">
          <span aria-hidden="true">${this.esc(unit.icon)}</span>
          <span dir="auto">${this.esc(this.lc(unit))}</span>
          <span class="opacity-70">${uDone}/${uTotal}</span>
        </button>`;
    }).join('');

    const units = QA_UNITS.map(unit => {
      const items = list.map((l, idx) => ({ l, idx })).filter(x => x.l.unit === unit.id);
      if (!items.length) return '';
      const uTotal = items.length;
      const uDone = this.unitLearnedCount(unit.id);
      const best = this.bestQuiz(unit.id);
      const cards = items.map(({ l, idx }) => {
        const learned = this.isLearned(l.id);
        return `
          <button type="button" data-qa-open="${idx}"
            class="group w-full text-left flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border ${learned ? 'border-emerald-300 dark:border-emerald-700' : 'border-gray-200 dark:border-gray-700'} hover:border-primary hover:shadow-md transition-all">
            <span class="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg text-lg ${learned ? 'bg-emerald-100 dark:bg-emerald-900/40' : 'bg-gray-100 dark:bg-gray-700'}" aria-hidden="true">${learned ? '✓' : this.esc(l.icon)}</span>
            <span class="flex-1 min-w-0">
              <span class="block font-semibold text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(this.lc(l.title))}</span>
              <span class="block text-xs ${learned ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}">${learned ? this.esc(this.tt('qa_learned')) : (this.esc(this.tt('qa_lesson')) + ' ' + (idx + 1))}</span>
            </span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">›</span>
          </button>`;
      }).join('');
      return `
        <section id="qa-unit-${this.esc(unit.id)}" class="mb-7 scroll-mt-4">
          <div class="flex items-center justify-between gap-2 mb-3">
            <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200">
              <span aria-hidden="true">${this.esc(unit.icon)}</span><span dir="auto">${this.esc(this.lc(unit))}</span>
              <span class="text-xs font-normal text-gray-400 dark:text-gray-500">${uDone}/${uTotal}</span>
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${cards}</div>
          <div class="mt-3 text-center">
            <button type="button" data-qa-quiz="${this.esc(unit.id)}"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/60 transition-colors">
              📝 ${this.esc(this.tt('qa_unit_quiz'))}
              ${best != null ? `<span class="text-xs opacity-80">${this.esc(this.tt('qa_best'))} ${best}%</span>` : ''}
            </button>
          </div>
        </section>`;
    }).join('');

    const finalBest = this.bestQuiz('final');
    const irabBest = this.bestQuiz('irab');
    const missed = this.missedCount();

    // ---------- read-only progress dashboard (degrades silently if keys absent) ----------
    const glossTotal = (typeof QA_GLOSSARY !== 'undefined' && Array.isArray(QA_GLOSSARY)) ? QA_GLOSSARY.length : 0;
    const glossSeen = this.glossarySeenCount();
    const vocabTotal = this.allVocab().length;
    const cardsMastered = this.cardsMasteredCount();
    const unitsAced = QA_UNITS.filter(u => { const ut = this.unitLessons(u.id).length; return ut > 0 && this.unitLearnedCount(u.id) >= ut; }).length;
    const unitsWithLessons = QA_UNITS.filter(u => this.unitLessons(u.id).length > 0).length;
    const dashTile = (icon, label, value, tone) => `
      <div class="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
        <div class="text-lg" aria-hidden="true">${icon}</div>
        <div class="text-lg font-extrabold ${tone}">${value}</div>
        <div class="text-[0.68rem] text-gray-400 dark:text-gray-500 leading-tight" dir="auto">${this.esc(label)}</div>
      </div>`;
    const dashboard = `
      <div class="mb-6 p-4 rounded-2xl bg-white/60 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700">
        <h3 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">📊</span><span dir="auto">${this.esc(this.tt('qa_dashboard'))}</span>
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          ${dashTile('📚', this.tt('qa_dash_lessons'), `${done}/${total}`, 'text-emerald-600 dark:text-emerald-400')}
          ${dashTile('🏅', this.tt('qa_dash_units'), `${unitsAced}/${unitsWithLessons}`, 'text-sky-600 dark:text-sky-400')}
          ${dashTile('📖', this.tt('qa_dash_glossary'), `${glossSeen}/${glossTotal}`, 'text-amber-600 dark:text-amber-400')}
          ${dashTile('🃏', this.tt('qa_dash_cards'), `${cardsMastered}/${vocabTotal}`, 'text-indigo-600 dark:text-indigo-400')}
          ${dashTile('🧩', this.tt('qa_dash_irab'), irabBest != null ? irabBest + '%' : '—', 'text-violet-600 dark:text-violet-400')}
          ${dashTile('🎯', this.tt('qa_dash_match'), this.matchBest() != null ? this.matchBest() + '%' : '—', 'text-teal-600 dark:text-teal-400')}
        </div>
      </div>`;

    return `
      <div class="w-full max-w-4xl mx-auto">
        <div class="text-center mb-5">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">${this.esc(this.tt('qa_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-2xl mx-auto" dir="auto">${this.esc(this.tt('qa_subtitle'))}</p>
        </div>
        <div class="mb-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 border border-emerald-100 dark:border-gray-700">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold text-gray-700 dark:text-gray-200">${done} / ${total} ${this.esc(this.tt('qa_progress'))}</span>
            <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">${pct}%</span>
          </div>
          <div class="w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all" style="width:${pct}%"></div>
          </div>
          ${allDone ? `<p class="text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-3">${this.esc(this.tt('qa_finish_title'))}</p>` : ''}
        </div>

        ${(() => {
          const ri = this.resumeIndex();
          if (ri < 0) return '';
          const rl = this.lessons()[ri];
          if (!rl) return '';
          return `
        <button type="button" data-qa-resume class="w-full mb-5 flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-gray-800 border border-primary/40 hover:border-primary hover:shadow-md transition-all text-left">
          <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-primary/10 text-lg" aria-hidden="true">↩️</span>
          <span class="flex-1 min-w-0">
            <span class="block text-[0.7rem] font-semibold uppercase tracking-wide text-primary">${this.esc(this.tt('qa_resume'))}</span>
            <span class="block font-semibold text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(this.lc(rl.title))}</span>
            <span class="block text-xs text-gray-400 dark:text-gray-500" dir="auto">${this.esc(this.tt('qa_resume_hint'))}</span>
          </span>
          <span class="text-primary text-lg" aria-hidden="true">›</span>
        </button>`;
        })()}

        ${dashboard}

        <div class="mb-6">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_units'))}</span>
            <div class="flex items-center gap-2">
              <button type="button" data-qa-flash
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/60 transition-colors">
                🃏 ${this.esc(this.tt('qa_flashcards'))}
              </button>
              <button type="button" data-qa-match
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-900/60 transition-colors">
                🧩 ${this.esc(this.tt('qa_match'))}${this.matchBest() != null ? ` <span class="opacity-80">${this.matchBest()}%</span>` : ''}
              </button>
              <button type="button" data-qa-glossary
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors">
                📖 ${this.esc(this.tt('qa_glossary'))}
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">${overview}</div>
        </div>

        ${units}

        <div class="mt-2 mb-8 flex flex-wrap items-center justify-center gap-3">
          ${missed > 0 ? `
          <button type="button" data-qa-quiz="missed"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/60 transition-colors">
            🔁 ${this.esc(this.tt('qa_review_missed'))}
            <span class="text-xs font-semibold opacity-90">${missed}</span>
          </button>` : ''}
          <button type="button" data-qa-quiz="irab"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/60 transition-colors">
            🧩 ${this.esc(this.tt('qa_irab_quiz'))}
            ${irabBest != null ? `<span class="text-xs font-semibold opacity-90">${this.esc(this.tt('qa_best'))} ${irabBest}%</span>` : ''}
          </button>
          <button type="button" data-qa-quiz="final"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
            🎓 ${this.esc(this.tt('qa_final_quiz'))}
            ${finalBest != null ? `<span class="text-xs font-semibold opacity-90">${this.esc(this.tt('qa_best'))} ${finalBest}%</span>` : ''}
          </button>
        </div>

        <div class="mb-10 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 border border-amber-100 dark:border-gray-700">
          <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200 mb-3">
            <span aria-hidden="true">🧭</span><span dir="auto">${this.esc(this.tt('qa_continue_title'))}</span>
          </h3>
          <ul class="space-y-2">
            ${(typeof QA_NEXT_STEPS !== 'undefined' && Array.isArray(QA_NEXT_STEPS) ? QA_NEXT_STEPS : []).map(s => `
            <li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">
              <span class="text-emerald-500 mt-0.5" aria-hidden="true">✔</span>
              <span>${this.esc(this.lc(s))}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>`;
  }

  renderWordRow(words) {
    return (words || []).map(w => `
      <span class="inline-flex flex-col items-center px-1.5 py-1 rounded-lg ${w.hl ? 'bg-emerald-100 dark:bg-emerald-900/40' : ''}">
        <span class="text-xl leading-snug ${w.hl ? 'text-emerald-700 dark:text-emerald-300 font-bold' : 'text-gray-800 dark:text-gray-100'}" dir="rtl">${this.esc(w.ar)}</span>
        <span class="text-[0.68rem] ${w.hl ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-gray-400 dark:text-gray-500'}" dir="auto">${this.esc(this.lc(w))}</span>
        ${w.role ? `<span class="mt-0.5 text-[0.58rem] leading-tight px-1 py-0.5 rounded bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 text-center" dir="auto">${this.esc(this.lc(w.role))}</span>` : ''}
      </span>`).join('');
  }

  renderExample(ex) {
    const arabic = (ex.words || []).map(w =>
      `<span class="${w.hl ? 'text-emerald-600 dark:text-emerald-400' : ''}">${this.esc(w.ar)}</span>`
    ).join(' ');
    const plainArabic = (ex.words || []).map(w => w.ar).join(' ');
    const hlWord = (ex.words || []).find(w => w.hl);
    const tts = this.ttsAvailable();
    return `
      <div class="mb-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="p-4 bg-gray-50 dark:bg-gray-800/60 text-center">
          <p class="text-2xl sm:text-3xl leading-loose font-[500] text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">${arabic}</p>
          ${tts ? `<button type="button" data-qa-say="${this.esc(plainArabic)}" title="${this.esc(this.tt('qa_listen'))}" aria-label="${this.esc(this.tt('qa_listen'))}"
            class="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/15 hover:text-primary transition-colors">🔊 ${this.esc(this.tt('qa_listen'))}</button>` : ''}
        </div>
        <div class="p-4">
          <div class="flex flex-wrap items-start justify-center gap-1.5 mb-3" dir="rtl">${this.renderWordRow(ex.words)}</div>
          <p class="text-sm text-gray-600 dark:text-gray-300 text-center italic mb-3" dir="auto">“${this.esc(this.lc(ex.trans))}”</p>
          ${ex.note ? `<p class="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 rounded-lg p-2.5 mb-3" dir="auto">💡 ${this.esc(this.lc(ex.note))}</p>` : ''}
          <div class="text-center">
            <button type="button" data-qa-ref="${this.esc(ex.ref)}" ${hlWord ? `data-qa-word="${this.esc(hlWord.ar)}"` : ''}
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              📖 ${this.esc(ex.ref)} <span class="text-[0.65rem] opacity-70">↗</span>
            </button>
          </div>
        </div>
      </div>`;
  }

  renderPractice(lesson) {
    const p = lesson.practice;
    if (!p) return '';
    const answered = this.answer != null;
    const opts = (p.options || []).map((o, i) => {
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      let icon = '';
      if (answered) {
        if (i === p.answer) { cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'; icon = '✓'; }
        else if (i === this.answer.selected) { cls = 'bg-rose-50 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'; icon = '✕'; }
        else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'; }
      }
      return `
        <button type="button" ${answered ? 'disabled' : `data-qa-opt="${i}"`}
          class="w-full text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border ${cls} transition-all">
          <span dir="auto">${this.esc(this.optText(o))}</span>
          <span class="text-sm font-bold" aria-hidden="true">${icon}</span>
        </button>`;
    }).join('');

    let feedback = '';
    if (answered) {
      const ok = this.answer.correct;
      feedback = `
        <div class="mt-3 p-3 rounded-xl ${ok ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'}">
          <p class="font-semibold text-sm mb-1">${ok ? '🎉 ' + this.esc(this.tt('qa_correct')) : '🤔 ' + this.esc(this.tt('qa_incorrect'))}</p>
          <p class="text-xs leading-relaxed" dir="auto">${this.esc(this.lc(p.explain))}</p>
          ${!ok ? `<button type="button" data-qa-retry class="mt-2 text-xs font-semibold underline">${this.esc(this.tt('qa_retry'))}</button>` : ''}
        </div>`;
    }

    return `
      <div class="mb-6 p-4 rounded-2xl bg-sky-50/60 dark:bg-gray-800/60 border border-sky-100 dark:border-gray-700">
        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">🧠</span><span>${this.esc(this.tt('qa_practice'))}</span>
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-200 mb-3" dir="auto">${this.esc(this.lc(p.q))}</p>
        <div class="space-y-2">${opts}</div>
        ${feedback}
      </div>`;
  }

  renderLesson() {
    const list = this.lessons();
    const idx = this.current;
    const lesson = list[idx];
    if (!lesson) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const unit = QA_UNITS.find(u => u.id === lesson.unit);
    const learned = this.isLearned(lesson.id);
    const examples = (lesson.examples || []).map(ex => this.renderExample(ex)).join('');
    const tts = this.ttsAvailable();

    return `
      <div class="w-full max-w-3xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            ‹ ${this.esc(this.tt('qa_back'))}
          </button>
          <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_lesson'))} ${idx + 1} ${this.esc(this.tt('qa_of'))} ${list.length}</span>
        </div>

        <div class="mb-4">
          ${unit ? `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-2">${this.esc(unit.icon)} ${this.esc(this.lc(unit))}</span>` : ''}
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2" dir="auto">
            <span aria-hidden="true">${this.esc(lesson.icon)}</span><span>${this.esc(this.lc(lesson.title))}</span>
            ${learned ? `<span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 align-middle">${this.esc(this.tt('qa_learned'))}</span>` : ''}
          </h2>
        </div>

        <div class="mb-5 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
            <span aria-hidden="true">📚</span><span>${this.esc(this.tt('qa_concept'))}</span>
          </h4>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300" dir="auto">${this.lc(lesson.concept)}</p>
        </div>

        ${Array.isArray(lesson.vocab) && lesson.vocab.length ? `
        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
          <span aria-hidden="true">⭐</span><span>${this.esc(this.tt('qa_vocab_words'))}</span>
        </h4>
        <p class="text-[0.68rem] text-gray-400 dark:text-gray-500 mb-3">${this.esc(this.tt('qa_vocab_hint'))}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 mb-6">
          ${lesson.vocab.map(w => `
          <div class="relative">
            <button type="button" data-qa-ref="${this.esc(w.ref)}" data-qa-word="${this.esc(w.ar)}"
              class="group w-full flex flex-col items-center gap-1 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all">
              <span class="text-2xl leading-snug text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors" dir="rtl" lang="ar">${this.esc(w.ar)}</span>
              <span class="text-xs text-gray-600 dark:text-gray-300 text-center leading-tight" dir="auto">${this.esc(this.lc(w))}</span>
              <span class="text-[0.6rem] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.lc(w.pos))}</span>
              <span class="text-[0.6rem] text-primary/70">📖 ${this.esc(w.ref)}</span>
            </button>
            ${tts ? `<button type="button" data-qa-say="${this.esc(w.ar)}" title="${this.esc(this.tt('qa_listen'))}" aria-label="${this.esc(this.tt('qa_listen'))}"
              class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-500 dark:text-gray-300 hover:bg-primary/15 hover:text-primary transition-colors">🔊</button>` : ''}
          </div>`).join('')}
        </div>` : ''}

        ${examples ? `
        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">🕋</span><span>${this.esc(this.tt('qa_example'))}</span>
          <span class="text-[0.68rem] font-normal text-gray-400 dark:text-gray-500">— ${this.esc(this.tt('qa_tap_ref'))}</span>
        </h4>
        ${examples}` : ''}

        ${this.renderPractice(lesson)}

        <div class="flex items-center justify-between gap-3 mt-6">
          <button type="button" ${idx > 0 ? 'data-qa-prev' : 'disabled'}
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold ${idx > 0 ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600' : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'} transition-colors">
            ‹ ${this.esc(this.tt('qa_prev'))}
          </button>
          <button type="button" ${idx < list.length - 1 ? 'data-qa-next' : 'data-qa-back'}
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">
            ${idx < list.length - 1 ? this.esc(this.tt('qa_next')) + ' ›' : this.esc(this.tt('qa_back'))}
          </button>
        </div>
      </div>`;
  }

  /* ---------- glossary ---------- */
  glossaryMatch(item, q) {
    if (!q) return true;
    const hay = [item.translit, item.en, item.bn, item.ar].join(' ').toLowerCase();
    return hay.indexOf(q.toLowerCase()) >= 0;
  }

  filterGlossary() {
    try {
      const q = (this.glossaryQuery || '').trim().toLowerCase();
      const rows = this.container ? this.container.querySelectorAll('[data-qa-gterm]') : [];
      let shown = 0;
      rows.forEach((row) => {
        const hay = (row.getAttribute('data-qa-gterm') || '').toLowerCase();
        const match = !q || hay.indexOf(q) >= 0;
        row.classList.toggle('hidden', !match);
        if (match) shown++;
      });
      const empty = this.container ? this.container.querySelector('#qa-gloss-empty') : null;
      if (empty) empty.classList.toggle('hidden', shown !== 0);
    } catch (e) { /* ignore */ }
  }

  renderGlossary() {
    const q = (this.glossaryQuery || '').trim();
    const rows = QA_GLOSSARY.map(item => {
      const hay = [item.translit, item.en, item.bn, item.ar].join(' ');
      const hidden = this.glossaryMatch(item, q) ? '' : ' hidden';
      const ex = item.ex ? `
        <button type="button" data-qa-ref="${this.esc(item.ex.ref)}" data-qa-word="${this.esc(item.ex.ar)}"
          class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <span dir="rtl" lang="ar" class="text-sm">${this.esc(item.ex.ar)}</span>
          <span class="opacity-70">${this.esc(item.ex.ref)} ↗</span>
        </button>` : '';
      return `
        <div data-qa-gterm="${this.esc(hay)}" class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700${hidden}">
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-lg font-bold text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">${this.esc(item.ar)}</span>
            <span class="text-xs font-semibold text-primary">${this.esc(item.translit)}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc(item))}</p>
          ${ex}
        </div>`;
    }).join('');

    return `
      <div class="w-full max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            ‹ ${this.esc(this.tt('qa_back'))}
          </button>
        </div>
        <div class="text-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">📖 ${this.esc(this.tt('qa_glossary_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1" dir="auto">${this.esc(this.tt('qa_glossary_sub'))}</p>
        </div>
        <div class="mb-4">
          <input id="qa-gloss-search" type="search" autocomplete="off" value="${this.esc(q)}"
            placeholder="${this.esc(this.tt('qa_search'))}"
            class="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:border-primary" dir="auto" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${rows}</div>
        <p id="qa-gloss-empty" class="hidden text-center text-gray-400 dark:text-gray-500 py-8 text-sm">${this.esc(this.tt('qa_no_results'))}</p>
      </div>`;
  }

  /* ---------- flashcards view ---------- */
  renderFlashcards() {
    const c = this.cards;
    if (!c || !Array.isArray(c.deck) || !c.deck.length) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const tts = this.ttsAvailable();
    const header = `
      <div class="flex items-center justify-between mb-4">
        <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">‹ ${this.esc(this.tt('qa_back'))}</button>
        <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_flash_card'))} ${Math.min(c.idx + 1, c.total)} / ${c.total}</span>
      </div>`;

    if (c.done) {
      return `
        <div class="w-full max-w-xl mx-auto">
          ${header}
          <div class="pt-8 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div class="text-5xl mb-3">🃏</div>
            <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">${this.esc(this.tt('qa_flash_done'))}</h2>
            <div class="flex items-center justify-center gap-4 my-4">
              <div><div class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">${c.known}</div><div class="text-[0.68rem] text-gray-400">${this.esc(this.tt('qa_flash_known'))}</div></div>
              <div><div class="text-2xl font-extrabold text-amber-600 dark:text-amber-400">${c.again}</div><div class="text-[0.68rem] text-gray-400">${this.esc(this.tt('qa_flash_again'))}</div></div>
            </div>
            <div class="flex items-center justify-center gap-3 mt-4">
              <button type="button" data-qa-flash-restart class="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">↺ ${this.esc(this.tt('qa_flash_restart'))}</button>
              <button type="button" data-qa-back class="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">${this.esc(this.tt('qa_close'))}</button>
            </div>
          </div>
        </div>`;
    }

    const w = c.deck[c.idx];
    const box = this.cardBox(w.ar) || 1;
    const prog = c.total ? Math.round((c.idx / c.total) * 100) : 0;
    const listenBtn = tts ? `<button type="button" data-qa-say="${this.esc(w.ar)}" title="${this.esc(this.tt('qa_listen'))}" aria-label="${this.esc(this.tt('qa_listen'))}"
        class="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/15 hover:text-primary transition-colors">🔊 ${this.esc(this.tt('qa_listen'))}</button>` : '';

    const front = `
      <div class="text-4xl sm:text-5xl leading-loose text-gray-800 dark:text-gray-100 mb-2" dir="rtl" lang="ar">${this.esc(w.ar)}</div>
      ${listenBtn}
      <p class="mt-4 text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_flash_reveal'))} 👆</p>`;

    const back = `
      <div class="text-4xl sm:text-5xl leading-loose text-gray-800 dark:text-gray-100 mb-2" dir="rtl" lang="ar">${this.esc(w.ar)}</div>
      ${listenBtn}
      <p class="mt-3 text-lg font-bold text-emerald-700 dark:text-emerald-300" dir="auto">${this.esc(this.lc(w))}</p>
      <p class="mt-1 text-xs text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.lc(w.pos))}</p>
      <button type="button" data-qa-ref="${this.esc(w.ref)}" data-qa-word="${this.esc(w.ar)}"
        class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">📖 ${this.esc(w.ref)} <span class="text-[0.65rem] opacity-70">↗</span></button>`;

    const controls = c.revealed ? `
      <div class="grid grid-cols-2 gap-3 mt-4">
        <button type="button" data-qa-card="again" class="px-4 py-3 rounded-xl text-sm font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors">🔁 ${this.esc(this.tt('qa_flash_again'))}</button>
        <button type="button" data-qa-card="known" class="px-4 py-3 rounded-xl text-sm font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 transition-colors">✓ ${this.esc(this.tt('qa_flash_known'))}</button>
      </div>` : `
      <button type="button" data-qa-reveal class="w-full mt-4 px-4 py-3 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">${this.esc(this.tt('qa_flash_reveal'))}</button>`;

    return `
      <div class="w-full max-w-xl mx-auto">
        ${header}
        <div class="text-center mb-3">
          <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100">🃏 ${this.esc(this.tt('qa_flash_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1 max-w-md mx-auto" dir="auto">${this.esc(this.tt('qa_flash_sub'))}</p>
        </div>
        <div class="mb-3 w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-indigo-400 to-sky-500 transition-all" style="width:${prog}%"></div>
        </div>
        ${c.revealed ? '' : `<div data-qa-reveal role="button" tabindex="0"
          class="block w-full text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer">${front}</div>`}
        ${c.revealed ? `<div class="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-emerald-300 dark:border-emerald-700">${back}</div>` : ''}
        <div class="flex items-center justify-between mt-3 text-[0.68rem] text-gray-400 dark:text-gray-500">
          <span>${this.esc(this.tt('qa_flash_box'))} ${box}/5</span>
          <span>✓ ${c.known} · 🔁 ${c.again}</span>
        </div>
        ${controls}
      </div>`;
  }

  /* ---------- word match view ---------- */
  renderMatch() {
    const m = this.match;
    if (!m || !Array.isArray(m.left) || !m.left.length) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const matchedN = Object.keys(m.matched).length;
    const header = `
      <div class="flex items-center justify-between mb-4">
        <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">‹ ${this.esc(this.tt('qa_back'))}</button>
        <span class="text-xs text-gray-400 dark:text-gray-500">${matchedN} / ${m.total}</span>
      </div>`;

    if (m.done) {
      const pct = m.total ? Math.round((m.total / (m.total + m.mistakes)) * 100) : 0;
      const best = this.matchBest();
      const good = m.mistakes === 0;
      return `
        <div class="w-full max-w-xl mx-auto">
          ${header}
          <div class="pt-8 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div class="text-5xl mb-3">${good ? '🎯' : '🧩'}</div>
            <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">${this.esc(this.tt('qa_match_done'))}</h2>
            <div class="text-4xl font-extrabold text-teal-600 dark:text-teal-400 mb-1">${pct}%</div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">${this.esc(this.tt('qa_match_accuracy'))}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mb-1">${this.esc(this.tt('qa_match_mistakes'))}: ${m.mistakes}</p>
            ${best != null ? `<p class="text-xs text-gray-400 dark:text-gray-500 mb-4">${this.esc(this.tt('qa_best'))}: ${best}%</p>` : '<div class="mb-4"></div>'}
            <div class="flex items-center justify-center gap-3">
              <button type="button" data-qa-match-restart class="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">↺ ${this.esc(this.tt('qa_match_restart'))}</button>
              <button type="button" data-qa-back class="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">${this.esc(this.tt('qa_close'))}</button>
            </div>
          </div>
        </div>`;
    }

    const leftCol = m.left.map(p => {
      const done = !!m.matched[p.id];
      const sel = m.sel === p.id;
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      if (done) cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 opacity-70';
      else if (sel) cls = 'bg-teal-50 dark:bg-teal-900/30 border-teal-400 dark:border-teal-500 ring-2 ring-teal-300 dark:ring-teal-700';
      return `
        <button type="button" ${done ? 'disabled' : `data-qa-mleft="${p.id}"`}
          class="w-full flex items-center justify-center px-3 py-3 rounded-xl border ${cls} transition-all">
          <span class="text-2xl leading-snug text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">${this.esc(p.ar)}</span>
          ${done ? '<span class="ml-2 text-emerald-600 dark:text-emerald-400 text-sm">✓</span>' : ''}
        </button>`;
    }).join('');

    const rightCol = m.right.map(p => {
      const done = !!m.matched[p.id];
      const wrong = m.wrongId === p.id;
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      if (done) cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 opacity-70';
      else if (wrong) cls = 'bg-rose-50 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700';
      return `
        <button type="button" ${done ? 'disabled' : `data-qa-mright="${p.id}"`}
          class="w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl border ${cls} transition-all text-left">
          <span class="text-sm text-gray-700 dark:text-gray-200" dir="auto">${this.esc(p.meaning)}</span>
          ${done ? '<span class="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>' : (wrong ? '<span class="text-rose-500 text-sm">✕</span>' : '')}
        </button>`;
    }).join('');

    const prog = m.total ? Math.round((matchedN / m.total) * 100) : 0;
    return `
      <div class="w-full max-w-2xl mx-auto">
        ${header}
        <div class="text-center mb-3">
          <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100">🧩 ${this.esc(this.tt('qa_match_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-xs mt-1 max-w-md mx-auto" dir="auto">${this.esc(this.tt('qa_match_sub'))}</p>
        </div>
        <div class="mb-3 w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all" style="width:${prog}%"></div>
        </div>
        <div class="flex items-center justify-between mb-2 text-[0.68rem] text-gray-400 dark:text-gray-500">
          <span>${m.sel != null ? this.esc(this.tt('qa_match_pick')) : ''}</span>
          <span>${this.esc(this.tt('qa_match_mistakes'))}: ${m.mistakes}</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <p class="text-[0.7rem] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1.5 text-center">${this.esc(this.tt('qa_match_word'))}</p>
            <div class="space-y-2">${leftCol}</div>
          </div>
          <div>
            <p class="text-[0.7rem] font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1.5 text-center">${this.esc(this.tt('qa_match_meaning'))}</p>
            <div class="space-y-2">${rightCol}</div>
          </div>
        </div>
      </div>`;
  }

  /* ---------- quiz view ---------- */
  quizScopeName(scope) {
    if (scope === 'final') return this.tt('qa_final_quiz');
    if (scope === 'missed') return this.tt('qa_review_scope');
    if (scope === 'irab') return this.tt('qa_irab_quiz');
    const u = QA_UNITS.find(x => x.id === scope);
    return u ? this.lc(u) : this.tt('qa_quiz');
  }

  renderQuiz() {
    const q = this.quiz;
    if (!q || !Array.isArray(q.qs) || !q.qs.length) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const nTotal = q.qs.length;

    if (q.done) {
      const pct = nTotal ? Math.round((q.score / nTotal) * 100) : 0;
      const best = this.bestQuiz(q.scope);
      const good = pct >= 60;
      return `
        <div class="w-full max-w-xl mx-auto text-center">
          <div class="mb-4">
            <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors float-left">‹ ${this.esc(this.tt('qa_back'))}</button>
          </div>
          <div class="pt-8 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div class="text-5xl mb-3">${good ? '🎉' : '📚'}</div>
            <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">${this.esc(this.tt('qa_quiz_done'))}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(this.quizScopeName(q.scope))}</p>
            <div class="text-4xl font-extrabold ${good ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'} mb-1">${pct}%</div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">${this.esc(this.tt('qa_your_score'))}: ${q.score} / ${nTotal}</p>
            ${best != null ? `<p class="text-xs text-gray-400 dark:text-gray-500 mb-4">${this.esc(this.tt('qa_best'))}: ${best}%</p>` : '<div class="mb-4"></div>'}
            <div class="flex items-center justify-center gap-3">
              <button type="button" data-qa-qretry class="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">↺ ${this.esc(this.tt('qa_retry'))}</button>
              <button type="button" data-qa-back class="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">${this.esc(this.tt('qa_close'))}</button>
            </div>
          </div>
        </div>`;
    }

    const cur = q.qs[q.idx];
    const answered = q.picked != null;
    const opts = (cur.options || []).map((o, i) => {
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      let icon = '';
      if (answered) {
        if (i === cur.answer) { cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'; icon = '✓'; }
        else if (i === q.picked) { cls = 'bg-rose-50 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'; icon = '✕'; }
        else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'; }
      }
      return `
        <button type="button" ${answered ? 'disabled' : `data-qa-qopt="${i}"`}
          class="w-full text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border ${cls} transition-all">
          <span dir="auto">${this.esc(this.optText(o))}</span>
          <span class="text-sm font-bold" aria-hidden="true">${icon}</span>
        </button>`;
    }).join('');

    let feedback = '';
    if (answered) {
      const ok = q.picked === cur.answer;
      const isLast = q.idx + 1 >= nTotal;
      feedback = `
        <div class="mt-3 p-3 rounded-xl ${ok ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'}">
          <p class="font-semibold text-sm mb-1">${ok ? '🎉 ' + this.esc(this.tt('qa_correct')) : '🤔 ' + this.esc(this.tt('qa_incorrect'))}</p>
          <p class="text-xs leading-relaxed" dir="auto">${this.esc(this.lc(cur.explain))}</p>
        </div>
        <button type="button" data-qa-qnext class="mt-3 w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
          ${isLast ? this.esc(this.tt('qa_finish')) : this.esc(this.tt('qa_continue')) + ' ›'}
        </button>`;
    }

    const prog = nTotal ? Math.round(((q.idx) / nTotal) * 100) : 0;
    return `
      <div class="w-full max-w-xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">‹ ${this.esc(this.tt('qa_back'))}</button>
          <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_score'))}: ${q.score}</span>
        </div>
        <div class="mb-4">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-bold text-gray-700 dark:text-gray-200" dir="auto">📝 ${this.esc(this.quizScopeName(q.scope))}</span>
            <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_question'))} ${q.idx + 1} / ${nTotal}</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all" style="width:${prog}%"></div>
          </div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <p class="text-sm text-gray-700 dark:text-gray-200 mb-3 font-medium" dir="auto">${this.esc(this.lc(cur.q))}</p>
          ${Array.isArray(cur.words) && cur.words.length ? `
          <div class="p-3 mb-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-center">
            <p class="text-2xl leading-loose text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">
              ${cur.words.map(w => `<span class="${w.hl ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/40 rounded px-1' : ''}">${this.esc(w.ar)}</span>`).join(' ')}
            </p>
            ${cur.ref ? `
            <button type="button" data-qa-ref="${this.esc(cur.ref)}"
              class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              📖 ${this.esc(cur.ref)} <span class="text-[0.65rem] opacity-70">↗</span>
            </button>` : ''}
          </div>` : ''}
          <div class="space-y-2">${opts}</div>
          ${feedback}
        </div>
      </div>`;
  }
}

let quranicArabicView;
document.addEventListener('DOMContentLoaded', () => { try { quranicArabicView = new QuranicArabicView(); } catch (e) { /* ignore */ } });
