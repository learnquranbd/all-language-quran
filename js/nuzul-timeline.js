/**
 * Revelation Context (Asbāb an-Nuzūl / শানে নুযূল) — standalone module.
 *
 * Two things the tradition actually supports, kept honest:
 *   1. The SŪRAH revelation order (tartīb an-nuzūl) — the standard Cairo 1924
 *      sequence in which each sūrah came down, grouped into four phases that
 *      track the Seerah. Toggle between muṣḥaf order and revelation order.
 *   2. Per-sūrah ASBĀB AN-NUZŪL — for the āyāt that have a well-documented
 *      occasion of revelation, why/when/what was happening. Not every āyah has
 *      one (that is expected); a sūrah shows the ones that do, in āyah order.
 *
 * Data (all lazy-loaded, fully defensive — the module degrades gracefully if a
 * file is missing):
 *   data/nuzul/revelation-order.json  = { surahOrder[], phases[], landmarks[] }
 *   data/nuzul/manifest.json          = [ "asbab-002.json", ... ]  (asbāb shards)
 *   data/nuzul/<shard>                = { asbab: { "<surah>": [ {ref,titleEn/Bn,
 *                                        contextEn/Bn,event}, ... ] } }
 *
 * All prose routes through lc({en,bn}) → the CI18N knowledgebase, so every UI
 * language is served (Arabic sūrah text stays Arabic). Āyah pills open the
 * shared ayahModal. No figurative imagery; mainstream Sunni sources only.
 */

class NuzulView {
  constructor() {
    this.container = document.getElementById('nuzul-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    if (!this.language) this.language = 'en';

    this.rendered = false;
    this.orderMode = this.loadOrderMode(); // 'nuzul' | 'mushaf'
    this.selected = null;                  // null = overview; else surah number
    this.query = '';

    // Data holders
    this.revBySurah = {};   // n -> { order, phase }
    this.phases = [];       // [ {id, emoji, titleEn/Bn, descEn/Bn} ]
    this.landmarks = [];    // [ {kind, ref, titleEn/Bn, noteEn/Bn, event} ]
    this.asbab = {};        // "<surah>" -> [ {ref, titleEn/Bn, contextEn/Bn, event} ]
    this.dataLoaded = false;
    this.dataLoading = false;

    this.loadData(); // async, non-blocking

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'nuzul') this.render(); } catch (_) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered) this.render();
        }
      } catch (_) { /* ignore */ }
    });
  }

  // ── data loading ─────────────────────────────────────────────────────
  async loadData() {
    if (this.dataLoaded || this.dataLoading) return;
    this.dataLoading = true;
    try {
      const rev = await this.fetchJson('data/nuzul/revelation-order.json');
      if (rev && typeof rev === 'object') {
        if (Array.isArray(rev.surahOrder)) {
          for (const s of rev.surahOrder) {
            if (s && typeof s.n === 'number') this.revBySurah[s.n] = { order: s.order, phase: s.phase };
          }
        }
        if (Array.isArray(rev.phases)) this.phases = rev.phases;
        if (Array.isArray(rev.landmarks)) this.landmarks = rev.landmarks;
      }
      const manifest = await this.fetchJson('data/nuzul/manifest.json');
      if (Array.isArray(manifest)) {
        for (const fname of manifest) {
          if (typeof fname !== 'string' || !fname) continue;
          const shard = await this.fetchJson('data/nuzul/' + fname);
          if (shard && shard.asbab && typeof shard.asbab === 'object') this.mergeAsbab(shard.asbab);
        }
      }
    } catch (_) { /* ignore — module degrades gracefully */ }
    this.dataLoading = false;
    this.dataLoaded = true;
    try { if (this.rendered) this.render(); } catch (_) { /* ignore */ }
  }

  async fetchJson(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res || !res.ok) return null;
      return await res.json();
    } catch (_) { return null; }
  }

  mergeAsbab(map) {
    for (const key of Object.keys(map)) {
      const arr = map[key];
      if (!Array.isArray(arr)) continue;
      if (!this.asbab[key]) this.asbab[key] = [];
      const seen = new Set(this.asbab[key].map(x => x && x.ref));
      for (const e of arr) {
        if (!e || typeof e !== 'object' || !e.ref || seen.has(e.ref)) continue;
        seen.add(e.ref);
        this.asbab[key].push(e);
      }
      // keep āyā order
      this.asbab[key].sort((a, b) => this.ayahNum(a.ref) - this.ayahNum(b.ref));
    }
  }

  // ── helpers ──────────────────────────────────────────────────────────
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }
  pick(item, field) { return this.lc({ en: item[field + 'En'], bn: item[field + 'Bn'] }); }

  ayahNum(ref) { const p = String(ref || '').split(':'); return parseInt(p[1], 10) || 0; }
  surahNum(ref) { const p = String(ref || '').split(':'); return parseInt(p[0], 10) || 0; }

  surahMeta(n) {
    try {
      const s = (typeof SURAH_DATA !== 'undefined') ? SURAH_DATA[n - 1] : null;
      if (!s) return { name: 'Surah ' + n, arabic: '', ayahCount: 0, medinan: false };
      const name = (s.names && (s.names[this.language] || s.names.en)) || ('Surah ' + n);
      return { name, arabic: s.arabicName || '', ayahCount: s.ayahCount || 0, medinan: s.revelationType === 'Medinan' };
    } catch (_) { return { name: 'Surah ' + n, arabic: '', ayahCount: 0, medinan: false }; }
  }

  phaseById(id) { return this.phases.find(p => p && p.id === id) || null; }

  loadOrderMode() {
    try { const v = localStorage.getItem('lq_nuzul_order'); return (v === 'mushaf' || v === 'nuzul') ? v : 'nuzul'; } catch (_) { return 'nuzul'; }
  }
  saveOrderMode() { try { localStorage.setItem('lq_nuzul_order', this.orderMode); } catch (_) { /* ignore */ } }

  openAyah(ref) {
    try {
      if (typeof ayahModal !== 'undefined' && ayahModal && typeof ayahModal.open === 'function') ayahModal.open(ref);
    } catch (_) { /* ignore */ }
  }

  // ── rendering ────────────────────────────────────────────────────────
  render() {
    this.rendered = true;
    if (!this.container) return;
    this.container.innerHTML = this.selected ? this.renderDetail(this.selected) : this.renderOverview();
    this.bind();
  }

  header() {
    return `
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-900 dark:text-gray-50" dir="auto">${this.esc(this.lc({ en: 'Revelation Context', bn: 'শানে নুযূল' }))}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed" dir="auto">${this.esc(this.lc({
          en: 'The order in which the Qur’an was revealed, and — sūrah by sūrah — the documented occasions behind the verses (asbāb an-nuzūl). Not every āyah has a recorded occasion; those that do are shown in āyah order.',
          bn: 'কুরআন যে ক্রমে অবতীর্ণ হয়েছে, এবং সূরা ধরে ধরে আয়াতসমূহের পেছনের নথিভুক্ত প্রেক্ষাপট (আসবাবুন নুযূল)। প্রতিটি আয়াতের নির্দিষ্ট শানে নুযূল নেই; যেগুলোর আছে সেগুলো আয়াত-ক্রমে দেখানো হয়েছে।'
        }))}</p>
      </div>`;
  }

  // Overview — landmarks strip, order toggle, phase-grouped (or muṣḥaf) list.
  renderOverview() {
    const landmarks = this.renderLandmarks();
    const toggle = `
      <div class="flex items-center gap-2 mb-4 flex-wrap">
        <div class="inline-flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 text-sm">
          <button data-nuzul-order="nuzul" class="px-3 py-1.5 ${this.orderMode === 'nuzul' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}">${this.esc(this.lc({ en: 'Revelation order', bn: 'অবতীর্ণের ক্রম' }))}</button>
          <button data-nuzul-order="mushaf" class="px-3 py-1.5 ${this.orderMode === 'mushaf' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}">${this.esc(this.lc({ en: 'Muṣḥaf order', bn: 'মুসহাফ ক্রম' }))}</button>
        </div>
        <input data-nuzul-search value="${this.esc(this.query)}" placeholder="${this.esc(this.lc({ en: 'Search sūrah…', bn: 'সূরা খুঁজুন…' }))}" class="flex-1 min-w-[8rem] px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100" dir="auto" />
      </div>`;

    let body = '';
    if (this.orderMode === 'nuzul' && this.phases.length) {
      body = this.phases.map(ph => {
        const rows = [];
        for (let n = 1; n <= 114; n++) {
          const r = this.revBySurah[n];
          if (!r || r.phase !== ph.id) continue;
          rows.push({ n, order: r.order });
        }
        rows.sort((a, b) => a.order - b.order);
        const chips = rows.filter(x => this.matchesSurah(x.n)).map(x => this.surahChip(x.n, x.order)).join('');
        if (!chips) return '';
        return `
          <div class="mb-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-lg">${this.esc(ph.emoji || '•')}</span>
              <h3 class="font-semibold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.pick(ph, 'title'))}</h3>
              <span class="text-xs text-gray-500 dark:text-gray-400">${rows.length}</span>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 leading-relaxed" dir="auto">${this.esc(this.pick(ph, 'desc'))}</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${chips}</div>
          </div>`;
      }).join('');
    } else {
      const chips = [];
      for (let n = 1; n <= 114; n++) {
        if (!this.matchesSurah(n)) continue;
        const r = this.revBySurah[n];
        chips.push(this.surahChip(n, r ? r.order : null));
      }
      body = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">${chips.join('')}</div>`;
    }
    if (!body.trim()) body = `<p class="text-sm text-gray-500 dark:text-gray-400 py-8 text-center" dir="auto">${this.esc(this.lc({ en: 'No sūrah matches your search.', bn: 'আপনার অনুসন্ধানে কোনো সূরা মেলেনি।' }))}</p>`;

    return `<div class="max-w-3xl mx-auto p-1">${this.header()}${landmarks}${toggle}${body}</div>`;
  }

  matchesSurah(n) {
    const q = this.query.trim().toLowerCase();
    if (!q) return true;
    const m = this.surahMeta(n);
    const hay = [String(n), m.name, m.arabic, this.revBySurah[n] ? String(this.revBySurah[n].order) : ''].join(' ').toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  surahChip(n, order) {
    const m = this.surahMeta(n);
    const hasAsbab = Array.isArray(this.asbab[String(n)]) && this.asbab[String(n)].length;
    const badge = this.orderMode === 'nuzul' ? (order != null ? order : '–') : n;
    const badgeLabel = this.orderMode === 'nuzul'
      ? this.lc({ en: 'revealed #', bn: 'অবতীর্ণ #' })
      : this.lc({ en: 'sūrah #', bn: 'সূরা #' });
    const dot = m.medinan ? 'bg-sky-500' : 'bg-amber-500';
    const place = m.medinan ? this.lc({ en: 'Medinan', bn: 'মাদানী' }) : this.lc({ en: 'Meccan', bn: 'মক্কী' });
    return `
      <button data-nuzul-surah="${n}" class="text-start flex items-center gap-3 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors">
        <span class="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-sm font-bold" title="${this.esc(badgeLabel)}">${this.esc(String(badge))}</span>
        <span class="flex-1 min-w-0">
          <span class="flex items-center gap-2">
            <span class="font-semibold text-sm text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(m.name)}</span>
            <span class="text-[0.9rem] text-gray-500 dark:text-gray-400 shrink-0" dir="rtl">${this.esc(m.arabic)}</span>
          </span>
          <span class="flex items-center gap-2 mt-0.5">
            <span class="inline-flex items-center gap-1 text-[0.65rem] text-gray-500 dark:text-gray-400"><span class="w-1.5 h-1.5 rounded-full ${dot}"></span>${this.esc(place)}</span>
            <span class="text-[0.65rem] text-gray-400 dark:text-gray-500">${m.ayahCount} ${this.esc(this.lc({ en: 'āyāt', bn: 'আয়াত' }))}</span>
            ${hasAsbab ? `<span class="text-[0.65rem] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">${this.esc(this.lc({ en: 'context', bn: 'প্রেক্ষাপট' }))} · ${this.asbab[String(n)].length}</span>` : ''}
          </span>
        </span>
      </button>`;
  }

  renderLandmarks() {
    if (!this.landmarks.length) return '';
    const kindLabel = (k) => ({
      first: this.lc({ en: 'First revealed', bn: 'সর্বপ্রথম অবতীর্ণ' }),
      last: this.lc({ en: 'Among the last', bn: 'সর্বশেষগুলোর একটি' }),
      completion: this.lc({ en: 'Completion', bn: 'পূর্ণতা' }),
      asbab: this.lc({ en: 'Landmark', bn: 'মাইলফলক' }),
    }[k] || this.lc({ en: 'Landmark', bn: 'মাইলফলক' }));
    const cards = this.landmarks.map(l => `
      <button data-nuzul-ayah="${this.esc(l.ref)}" class="text-start flex-shrink-0 w-60 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-gray-800 hover:border-emerald-400 transition-colors">
        <span class="inline-block text-[0.6rem] uppercase tracking-wide font-semibold text-emerald-700 dark:text-emerald-300 mb-1">${this.esc(kindLabel(l.kind))} · ${this.esc(l.ref)}</span>
        <span class="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1" dir="auto">${this.esc(this.pick(l, 'title'))}</span>
        <span class="block text-xs text-gray-600 dark:text-gray-300 leading-snug line-clamp-3" dir="auto">${this.esc(this.pick(l, 'note'))}</span>
      </button>`).join('');
    return `
      <div class="mb-4">
        <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-2">${this.esc(this.lc({ en: 'Landmark āyāt', bn: 'মাইলফলক আয়াত' }))}</h3>
        <div class="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">${cards}</div>
      </div>`;
  }

  // Detail — one sūrah: header card + vertical asbāb context timeline.
  renderDetail(n) {
    const m = this.surahMeta(n);
    const r = this.revBySurah[n];
    const ph = r ? this.phaseById(r.phase) : null;
    const entries = (this.asbab[String(n)] || []).slice().sort((a, b) => this.ayahNum(a.ref) - this.ayahNum(b.ref));

    const back = `
      <button data-nuzul-back class="inline-flex items-center gap-1 text-sm text-emerald-700 dark:text-emerald-300 mb-3 hover:underline">
        <span aria-hidden="true">←</span> ${this.esc(this.lc({ en: 'All sūrahs', bn: 'সব সূরা' }))}
      </button>`;

    const place = m.medinan ? this.lc({ en: 'Medinan', bn: 'মাদানী' }) : this.lc({ en: 'Meccan', bn: 'মক্কী' });
    const headCard = `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 mb-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-lg font-bold text-gray-900 dark:text-gray-50" dir="auto">${this.esc(m.name)}</h2>
              <span class="text-lg text-gray-500 dark:text-gray-400" dir="rtl">${this.esc(m.arabic)}</span>
            </div>
            <div class="flex items-center gap-2 mt-1 flex-wrap text-xs text-gray-500 dark:text-gray-400">
              <span class="inline-flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full ${m.medinan ? 'bg-sky-500' : 'bg-amber-500'}"></span>${this.esc(place)}</span>
              <span>· ${m.ayahCount} ${this.esc(this.lc({ en: 'āyāt', bn: 'আয়াত' }))}</span>
              <span>· ${this.esc(this.lc({ en: 'Muṣḥaf #', bn: 'মুসহাফ #' }))}${n}</span>
            </div>
          </div>
          ${r ? `<div class="flex-shrink-0 text-center">
            <div class="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xl font-bold">${r.order}</div>
            <div class="text-[0.6rem] text-gray-500 dark:text-gray-400 mt-1 leading-tight">${this.esc(this.lc({ en: 'revealed<br>of 114', bn: 'অবতীর্ণ<br>১১৪-এর' }))}</div>
          </div>` : ''}
        </div>
        ${ph ? `<div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-start gap-2">
          <span class="text-base">${this.esc(ph.emoji || '•')}</span>
          <div>
            <div class="text-sm font-semibold text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.pick(ph, 'title'))}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.pick(ph, 'desc'))}</div>
          </div>
        </div>` : ''}
      </div>`;

    let timeline;
    if (entries.length) {
      const items = entries.map((e, i) => `
        <div class="relative pl-8 pb-5 ${i === entries.length - 1 ? '' : 'border-s-2 border-emerald-200 dark:border-emerald-800'} ms-1">
          <span class="absolute -start-[9px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-900"></span>
          <button data-nuzul-ayah="${this.esc(e.ref)}" class="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 mb-1 hover:bg-emerald-200">${this.esc(e.ref)}</button>
          <h4 class="font-semibold text-sm text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.pick(e, 'title'))}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-0.5" dir="auto">${this.esc(this.pick(e, 'context'))}</p>
        </div>`).join('');
      timeline = `
        <h3 class="text-xs uppercase tracking-wide font-semibold text-gray-500 dark:text-gray-400 mb-3">${this.esc(this.lc({ en: 'Occasions of revelation', bn: 'অবতীর্ণের প্রেক্ষাপট' }))} · ${entries.length}</h3>
        <div class="mt-1">${items}</div>`;
    } else {
      timeline = `
        <div class="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-6 text-center">
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc({
            en: 'No specific occasion of revelation is documented for this sūrah in the mainstream sources. Many sūrahs were revealed as guidance without a particular reported incident — that is normal and does not lessen their meaning.',
            bn: 'মূলধারার সূত্রে এই সূরার জন্য কোনো নির্দিষ্ট শানে নুযূল বর্ণিত হয়নি। অনেক সূরা কোনো নির্দিষ্ট ঘটনা ছাড়াই হিদায়াত হিসেবে অবতীর্ণ হয়েছে — এটি স্বাভাবিক এবং এতে তাদের তাৎপর্য কমে না।'
          }))}</p>
        </div>`;
    }

    // prev / next by muṣḥaf number
    const nav = `
      <div class="flex items-center justify-between mt-5 pt-3 border-t border-gray-100 dark:border-gray-700">
        <button data-nuzul-surah="${n > 1 ? n - 1 : 1}" class="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 ${n <= 1 ? 'invisible' : ''}">← ${this.esc(this.surahMeta(n - 1 || 1).name)}</button>
        <button data-nuzul-surah="${n < 114 ? n + 1 : 114}" class="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 ${n >= 114 ? 'invisible' : ''}">${this.esc(this.surahMeta(n + 1 > 114 ? 114 : n + 1).name)} →</button>
      </div>`;

    return `<div class="max-w-2xl mx-auto p-1">${back}${headCard}${timeline}${nav}</div>`;
  }

  // ── events ───────────────────────────────────────────────────────────
  bind() {
    if (!this.container || this._bound === this.container) { /* re-bind after innerHTML swap */ }
    this.container.onclick = (ev) => {
      const surahBtn = ev.target.closest('[data-nuzul-surah]');
      if (surahBtn) { this.selected = parseInt(surahBtn.getAttribute('data-nuzul-surah'), 10); this.query = ''; this.render(); this.scrollTop(); return; }
      const backBtn = ev.target.closest('[data-nuzul-back]');
      if (backBtn) { this.selected = null; this.render(); this.scrollTop(); return; }
      const orderBtn = ev.target.closest('[data-nuzul-order]');
      if (orderBtn) { this.orderMode = orderBtn.getAttribute('data-nuzul-order'); this.saveOrderMode(); this.render(); return; }
      const ayahBtn = ev.target.closest('[data-nuzul-ayah]');
      if (ayahBtn) { this.openAyah(ayahBtn.getAttribute('data-nuzul-ayah')); return; }
    };
    const search = this.container.querySelector('[data-nuzul-search]');
    if (search) {
      search.oninput = (e) => {
        this.query = e.target.value || '';
        // Re-render list only; keep focus & caret.
        const caret = e.target.selectionStart;
        this.render();
        const s2 = this.container.querySelector('[data-nuzul-search]');
        if (s2) { s2.focus(); try { s2.setSelectionRange(caret, caret); } catch (_) { /* ignore */ } }
      };
    }
  }

  scrollTop() {
    try { this.container.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
  }
}

let nuzulView;
document.addEventListener('DOMContentLoaded', () => { try { nuzulView = new NuzulView(); } catch (_) { /* ignore */ } });
