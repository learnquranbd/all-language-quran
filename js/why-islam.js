/**
 * Why Islam? — an educational Da'wah & Aqidah (creed) module presenting the
 * reasoned case for Islam in the mainstream Sunni scholarly tradition, and
 * answering common sincere questions charitably and respectfully.
 *
 * Content is INLINE and bilingual (en + bn per item); other UI languages fall
 * back to English. Renders into #why-islam-container (tab "whyislam"). Tone is
 * calm, academic and respectful: it makes the positive intellectual case for
 * Islam and engages ideas, never demeaning any religion or its followers.
 *
 * Six browsable topics -> detail views: Existence of God, Oneness of God,
 * Prophethood of Muhammad (peace be upon him), The Quran, Common Questions
 * (accordion Q&A), and Further Study (curated reputable links). Includes topic
 * search and per-topic "mark as read" progress (localStorage lq_whyislam_read).
 *
 * Mirrors js/resources.js integration: global whyIslamView on DOMContentLoaded,
 * listens for tabChanged (whyislam) and settingChanged (language). Defensive
 * throughout — guards DOM, localStorage and JSON; never throws.
 */

/* Inline fallback UI strings so the module renders standalone even before the
 * orchestrator wires these keys into translations.js. */

/* --- Data moved to js/why-islam-data.js (split 2025-07). --- */


class WhyIslamView {
  constructor() {
    this.container = document.getElementById('why-islam-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.rendered = false;
    this.currentId = null;
    this.query = '';
    this.readSet = this.loadRead();

    window.addEventListener('tabChanged', (e) => {
      if (e && e.detail && e.detail.tabId === 'whyislam') this.render();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e && e.detail && e.detail.key === 'language') {
        this.language = e.detail.value || 'en';
        if (this.rendered) this.render();
      }
    });
  }

  /* ---------- helpers ---------- */
  tt(key) {
    try {
      if (typeof t === 'function') {
        const v = t(key, this.language);
        if (v && v !== key) return v; // orchestrator-wired translation wins
      }
    } catch (_) { /* ignore */ }
    const fb = WHY_ISLAM_I18N[key];
    if (fb) {
      if (this.language && fb[this.language]) return fb[this.language];
      if (this.language === 'bn') return fb.bn || fb.en;
      if (this.language && this.language !== 'en' && typeof CI18N !== 'undefined' && fb.en) {
        const tr = CI18N.tr(this.language, fb.en); if (tr) return tr;
      }
      return fb.en;
    }
    return key;
  }

  L(obj) {
    if (!obj) return '';
    const lang = this.language;
    if (lang && obj[lang]) return obj[lang];
    if (lang === 'bn') return obj.bn || obj.en || '';
    if (lang && lang !== 'en' && typeof CI18N !== 'undefined' && obj.en) {
      const tr = CI18N.tr(lang, obj.en); if (tr) return tr;
    }
    return obj.en || '';
  }

  /* Content-language resolver: bn from inline data, other non-English
   * languages via the CI18N knowledgebase (keyed by English text),
   * falling back to English. Used for all CONTENT display sites. */
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    if (o.en && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }

  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  loadRead() {
    const s = new Set();
    try {
      const raw = localStorage.getItem('lq_whyislam_read');
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) arr.forEach(id => { if (typeof id === 'string') s.add(id); });
      }
    } catch (_) { }
    return s;
  }

  saveRead() {
    try {
      localStorage.setItem('lq_whyislam_read', JSON.stringify(Array.from(this.readSet)));
    } catch (_) { /* ignore */ }
  }

  topicById(id) { return WHY_ISLAM_DATA.find(t => t.id === id) || null; }

  matches(topic, q) {
    if (!q) return true;
    const parts = [this.L(topic.title), this.L(topic.summary)];
    (topic.points || []).forEach(p => { parts.push(this.L(p.heading), this.L(p.body)); });
    (topic.qa || []).forEach(x => { parts.push(this.L(x.q), this.L(x.a)); });
    (topic.resources || []).forEach(r => { parts.push(r.name, this.L(r)); });
    (topic.terms || []).forEach(x => { parts.push(x.term, x.bnTerm || '', this.L(x)); });
    return parts.join('   ').toLowerCase().indexOf(q) !== -1;
  }

  /* ---------- render dispatch ---------- */
  render() {
    this.rendered = true;
    if (!this.container) return;
    try {
      if (this.currentId && this.topicById(this.currentId)) {
        this.renderDetail(this.topicById(this.currentId));
      } else {
        this.currentId = null;
        this.renderHome();
      }
    } catch (_) {
      this.container.innerHTML = '';
    }
  }

  /* ---------- home grid ---------- */
  renderHome() {
    const q = (this.query || '').trim().toLowerCase();
    const list = WHY_ISLAM_DATA.filter(topic => this.matches(topic, q));
    const total = WHY_ISLAM_DATA.length;
    const readCount = WHY_ISLAM_DATA.filter(t => this.readSet.has(t.id)).length;
    const pct = total ? Math.round((readCount / total) * 100) : 0;

    const cards = list.map(topic => {
      const isRead = this.readSet.has(topic.id);
      const badge = isRead
        ? `<span class="inline-flex items-center gap-1 text-[0.65rem] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">✓ ${this.esc(this.tt('whyislam_marked_read'))}</span>`
        : '';
      return `
        <button type="button" data-topic="${this.esc(topic.id)}"
          class="wi-card group text-start flex flex-col gap-2 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 hover:border-primary hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all">
          <span class="flex items-center gap-3">
            <span class="text-2xl" aria-hidden="true">${topic.emoji}</span>
            <span class="flex-1 min-w-0 font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(topic.title))}</span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">→</span>
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc(topic.summary))}</span>
          <span class="mt-1 flex items-center justify-between">
            <span class="text-xs text-primary dark:text-blue-400 font-medium">${this.esc(this.tt('whyislam_read_more'))}</span>
            ${badge}
          </span>
        </button>`;
    }).join('');

    const grid = list.length
      ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${cards}</div>`
      : `<p class="text-center text-gray-500 dark:text-gray-400 py-12">${this.esc(this.tt('whyislam_no_results'))}</p>`;

    this.container.innerHTML = `
      <div class="w-full max-w-4xl mx-auto">
        <div class="text-center mb-4">
          <p class="text-gray-500 dark:text-gray-400 text-sm" dir="auto">${this.esc(this.tt('whyislam_subtitle'))}</p>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mb-5" dir="auto">🕊️ ${this.esc(this.tt('whyislam_note'))}</p>

        <div class="mb-4">
          <input type="search" id="wi-search" value="${this.esc(this.query)}"
            placeholder="${this.esc(this.tt('whyislam_search_placeholder'))}"
            class="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                   text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
            dir="auto" autocomplete="off" />
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>${readCount} / ${total} ${this.esc(this.tt('whyislam_progress'))}</span>
            <span>${pct}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-primary transition-all" style="width:${pct}%"></div>
          </div>
        </div>

        ${grid}

        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-8 mb-8" dir="auto">${this.esc(this.tt('whyislam_disclaimer'))}</p>
      </div>`;

    this.wireHome();
  }

  wireHome() {
    const search = this.container.querySelector('#wi-search');
    if (search) {
      search.addEventListener('input', (e) => {
        this.query = e.target.value || '';
        const pos = search.selectionStart;
        this.renderHome();
        const again = this.container.querySelector('#wi-search');
        if (again) { again.focus(); try { again.setSelectionRange(pos, pos); } catch (_) {} }
      });
    }
    this.container.querySelectorAll('[data-topic]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentId = btn.getAttribute('data-topic');
        const topic = this.topicById(this.currentId);
        if (topic) this.renderDetail(topic);
      });
    });
  }

  /* ---------- detail view ---------- */
  renderDetail(topic) {
    const isRead = this.readSet.has(topic.id);
    let body = '';

    if (topic.kind === 'qa') {
      const qlabel = topic.qaLabel ? (this.esc(this.lc(topic.qaLabel)) + '&nbsp;') : 'Q';
      body = `<div class="flex flex-col gap-3">${(topic.qa || []).map((x, i) => `
        <details class="group rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <summary class="cursor-pointer list-none flex items-center gap-3 p-4 font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700/50">
            <span class="text-primary dark:text-blue-400 whitespace-nowrap" aria-hidden="true">${qlabel}${i + 1}</span>
            <span class="flex-1 min-w-0" dir="auto">${this.esc(this.lc(x.q))}</span>
            <span class="text-gray-400 group-open:rotate-180 transition-transform" aria-hidden="true">▾</span>
          </summary>
          <div class="px-4 pb-4 pt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700" dir="auto">${this.esc(this.lc(x.a))}</div>
        </details>`).join('')}</div>`;
    } else if (topic.kind === 'embrace') {
      const sh = topic.shahada || {};
      const shahadaBlock = `
        <div class="mb-6 p-5 rounded-2xl bg-primary/5 dark:bg-blue-900/20 border border-primary/20 dark:border-blue-800 text-center">
          <p class="text-xs uppercase tracking-wide text-primary dark:text-blue-400 font-semibold mb-2">${this.esc(this.tt('whyislam_shahada_label'))}</p>
          ${sh.arabic ? `<p class="text-2xl leading-loose text-gray-800 dark:text-gray-100 mb-2" dir="rtl" lang="ar">${this.esc(sh.arabic)}</p>` : ''}
          ${sh.translit ? `<p class="text-sm italic text-gray-500 dark:text-gray-400 mb-1" dir="ltr">${this.esc(sh.translit)}</p>` : ''}
          <p class="text-sm text-gray-700 dark:text-gray-200" dir="auto">“${this.esc(this.lc(sh))}”</p>
        </div>
        <p class="mb-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 rounded-xl p-4" dir="auto">🕊️ ${this.esc(this.tt('whyislam_embrace_welcome'))}</p>`;
      const pts = `<div class="flex flex-col gap-5">${(topic.points || []).map(p => `
        <section>
          <h4 class="font-bold text-gray-800 dark:text-gray-100 mb-1.5" dir="auto">${this.esc(this.lc(p.heading))}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(p.body))}</p>
        </section>`).join('')}</div>`;
      body = shahadaBlock + pts;
    } else if (topic.kind === 'glossary') {
      body = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${(topic.terms || []).map(x => `
        <div class="flex flex-col gap-1 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span class="font-bold text-gray-800 dark:text-gray-100">
            ${this.esc(this.lc({ en: x.term }))}${x.bnTerm && this.language === 'bn' ? ` <span class="font-normal text-gray-500 dark:text-gray-400">(${this.esc(x.bnTerm)})</span>` : ''}
          </span>
          <span class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(x))}</span>
        </div>`).join('')}</div>`;
    } else if (topic.kind === 'resources') {
      body = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${(topic.resources || []).map(r => `
        <a href="${this.esc(r.url)}" target="_blank" rel="noopener noreferrer"
           class="group flex flex-col gap-1 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md transition-all">
          <span class="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100">
            <span class="text-lg" aria-hidden="true">${r.emoji || '🔗'}</span>
            <span class="flex-1 min-w-0 truncate">${this.esc(r.name)}</span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">↗</span>
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.lc(r))}</span>
          <span class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate" dir="ltr">${this.esc(String(r.url).replace(/^https?:\/\//, ''))}</span>
        </a>`).join('')}</div>`;
    } else {
      body = `<div class="flex flex-col gap-5">${(topic.points || []).map(p => `
        <section>
          <h4 class="font-bold text-gray-800 dark:text-gray-100 mb-1.5" dir="auto">${this.esc(this.lc(p.heading))}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.lc(p.body))}</p>
        </section>`).join('')}</div>`;
    }

    const readBtn = `
      <button type="button" id="wi-read"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors
               ${isRead
                 ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                 : 'bg-primary text-white hover:opacity-90'}">
        <span aria-hidden="true">${isRead ? '✓' : '＋'}</span>
        <span>${this.esc(isRead ? this.tt('whyislam_marked_read') : this.tt('whyislam_mark_read'))}</span>
      </button>`;

    const noteBanner = topic.noteKey
      ? `<p class="mb-5 text-xs text-gray-500 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 rounded-xl p-3" dir="auto">🤝 ${this.esc(this.tt(topic.noteKey))}</p>`
      : '';

    this.container.innerHTML = `
      <div class="w-full max-w-3xl mx-auto">
        <button type="button" id="wi-back"
          class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-primary mb-5">
          <span aria-hidden="true">←</span><span>${this.esc(this.tt('whyislam_back'))}</span>
        </button>

        <div class="flex items-start gap-3 mb-4">
          <span class="text-3xl" aria-hidden="true">${topic.emoji}</span>
          <div class="flex-1 min-w-0">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(topic.title))}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.lc(topic.summary))}</p>
          </div>
        </div>

        <div class="mb-5">${readBtn}</div>

        ${noteBanner}

        ${body}

        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-8 mb-8" dir="auto">${this.esc(this.tt('whyislam_disclaimer'))}</p>
      </div>`;

    this.wireDetail(topic);
  }

  wireDetail(topic) {
    const back = this.container.querySelector('#wi-back');
    if (back) back.addEventListener('click', () => { this.currentId = null; this.renderHome(); });

    const readBtn = this.container.querySelector('#wi-read');
    if (readBtn) {
      readBtn.addEventListener('click', () => {
        if (this.readSet.has(topic.id)) this.readSet.delete(topic.id);
        else this.readSet.add(topic.id);
        this.saveRead();
        this.renderDetail(topic);
      });
    }
  }
}

let whyIslamView;
document.addEventListener('DOMContentLoaded', () => { whyIslamView = new WhyIslamView(); });
