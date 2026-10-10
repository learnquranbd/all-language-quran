/**
 * Quranic Duas — every dua in the Quran on one page, word by word, with the virtues of
 * particular surahs and ayat from graded hadith.
 *
 * Data: data/quran-duas.json, built by tools/duas/merge.js from audited drafts:
 *   duas[]    { id, who, kind, theme, title{en,bn}, context{en,bn},
 *               parts[{ ref, from, to, ar[], en[], bn[] }], tr{ en{ref:text}, bn{ref:text} } }
 *             `from`/`to` are 1-based word positions of the dua inside the ayah, so the
 *             narrative frame ("and they say") is left out of the words and the count.
 *   virtues[] { id, target{ surah, ayat? }, alsoSurahs?[n] (one hadith naming several surahs), title{en,bn},
 *               virtues[{ text{en,bn}, hadith{ collection, number, grade, gradedBy, quote } }] }
 * Glosses and translations for languages other than en/bn come from the shared
 * per-language files (QuranData.getLocalWbw / getLocalTranslations), loaded on demand.
 * Tapping a word plays its recitation (QuranData.wordAudioUrl); "Play" reads the dua
 * word by word.
 *
 * Renders into #quran-duas-container (tab "quran-duas").
 */
/* eslint-disable no-unused-vars */
const QDUAS_UI = {
  qduas_title:     { en: 'Quranic Duas', bn: 'কুরআনের দুআ' },
  qd_intro:        { en: 'Every dua in the Quran in one place, each word with its meaning. Tap a word to hear it.', bn: 'কুরআনের সব দুআ এক জায়গায়, প্রতিটি শব্দ তার অর্থসহ। কোনো শব্দে চাপ দিলে তার তিলাওয়াত শুনবেন।' },
  qd_tab_duas:     { en: 'Duas', bn: 'দুআ' },
  qd_tab_virtues:  { en: 'Virtues of surahs and ayat', bn: 'সূরা ও আয়াতের ফজিলত' },
  qd_stat_duas:    { en: 'duas', bn: 'দুআ' },
  qd_stat_words:   { en: 'words in the duas', bn: 'দুআগুলোর শব্দ' },
  qd_stat_virtues: { en: 'surahs and ayat with virtues', bn: 'ফজিলতপূর্ণ সূরা ও আয়াত' },
  qd_words:        { en: '{n} words', bn: '{n}টি শব্দ' },
  qd_search:       { en: 'Search duas…', bn: 'দুআ খুঁজুন…' },
  qd_all:          { en: 'All', bn: 'সব' },
  qd_who_all:      { en: 'Everyone', bn: 'সবার দুআ' },
  qd_show_wbw:     { en: 'Word by word', bn: 'শব্দে শব্দে' },
  qd_show_tr:      { en: 'Translation', bn: 'অনুবাদ' },
  qd_play:         { en: 'Play', bn: 'শুনুন' },
  qd_stop:         { en: 'Stop', bn: 'থামান' },
  qd_open:         { en: 'Open the ayah', bn: 'আয়াতটি খুলুন' },
  qd_tr_note:      { en: 'Translation of the whole ayah', bn: 'পুরো আয়াতের অনুবাদ' },
  qd_none:         { en: 'No dua matches.', bn: 'কোনো দুআ মেলেনি।' },
  qd_against:      { en: 'A dua against wrongdoers, told in the Quran', bn: 'জালিমদের বিরুদ্ধে দুআ, কুরআনে বর্ণিত' },
  qd_has_virtue:   { en: 'Has a virtue', bn: 'ফজিলত আছে' },
  qd_virtues_intro:{ en: 'Only hadith from Ṣaḥīḥ al-Bukhārī and Ṣaḥīḥ Muslim, or from the Sunan where a named scholar grades them ṣaḥīḥ or ḥasan. Popular claims graded weak are left out.', bn: 'শুধু সহিহ বুখারি ও সহিহ মুসলিমের হাদিস, অথবা সুনান গ্রন্থের সেই হাদিস যেগুলোকে কোনো পরিচিত মুহাদ্দিস সহিহ বা হাসান বলেছেন। প্রচলিত হলেও দুর্বল বলে প্রমাণিত কথা রাখা হয়নি।' },
  qd_hadith_words: { en: 'Wording of the hadith (English)', bn: 'হাদিসের ভাষ্য (ইংরেজি)' },
  qd_whole_surah:  { en: 'Whole surah', bn: 'পুরো সূরা' },
  qd_read:         { en: 'Read', bn: 'পড়ুন' },
  qd_loading:      { en: 'Loading the duas…', bn: 'দুআগুলো লোড হচ্ছে…' },
  qd_failed:       { en: 'The duas could not be loaded.', bn: 'দুআগুলো লোড করা যায়নি।' },
};
const QDUAS_WHO = {
  believers: { en: 'The believers', bn: 'মুমিনগণ' }, angels: { en: 'The angels', bn: 'ফেরেশতাগণ' },
  prophet: { en: 'Taught to the Prophet ﷺ ("Say")', bn: 'নবী ﷺ-কে শেখানো ("বলুন")' }, muhammad: { en: 'The Prophet Muḥammad ﷺ', bn: 'নবী মুহাম্মাদ ﷺ' },
  adam: { en: 'Ādam', bn: 'আদম (আঃ)' }, nuh: { en: 'Nūḥ', bn: 'নূহ (আঃ)' }, hud: { en: 'Hūd', bn: 'হূদ (আঃ)' }, salih: { en: 'Ṣāliḥ', bn: 'সালেহ (আঃ)' },
  ibrahim: { en: 'Ibrāhīm', bn: 'ইবরাহিম (আঃ)' }, ismail: { en: 'Ismāʿīl', bn: 'ইসমাইল (আঃ)' }, lut: { en: 'Lūṭ', bn: 'লূত (আঃ)' },
  shuayb: { en: 'Shuʿayb', bn: 'শুআইব (আঃ)' }, yaqub: { en: 'Yaʿqūb', bn: 'ইয়াকুব (আঃ)' }, yusuf: { en: 'Yūsuf', bn: 'ইউসুফ (আঃ)' },
  musa: { en: 'Mūsā', bn: 'মূসা (আঃ)' }, harun: { en: 'Hārūn', bn: 'হারুন (আঃ)' }, sulayman: { en: 'Sulaymān', bn: 'সুলাইমান (আঃ)' },
  ayyub: { en: 'Ayyūb', bn: 'আইয়ুব (আঃ)' }, yunus: { en: 'Yūnus', bn: 'ইউনুস (আঃ)' }, zakariyya: { en: 'Zakariyyā', bn: 'যাকারিয়া (আঃ)' },
  isa: { en: 'ʿĪsā', bn: 'ঈসা (আঃ)' }, maryam: { en: 'Maryam', bn: 'মারইয়াম' }, 'imran-wife': { en: 'The wife of ʿImrān', bn: 'ইমরানের স্ত্রী' },
  'pharaoh-wife': { en: 'The wife of Pharaoh', bn: 'ফেরাউনের স্ত্রী' }, magicians: { en: 'Pharaoh\'s magicians, after believing', bn: 'ঈমান আনার পর ফেরাউনের জাদুকররা' },
  'ashab-kahf': { en: 'The youths of the Cave', bn: 'গুহার যুবকেরা' }, 'talut-army': { en: 'Ṭālūt\'s army', bn: 'তালুতের বাহিনী' },
  luqman: { en: 'Luqmān', bn: 'লুকমান' }, other: { en: 'Others', bn: 'অন্যান্য' },
};
const QDUAS_THEME = {
  forgiveness: { en: 'Forgiveness', bn: 'ক্ষমা' }, guidance: { en: 'Guidance', bn: 'হিদায়াত' }, mercy: { en: 'Mercy', bn: 'রহমত' },
  'both-worlds': { en: 'This world and the next', bn: 'দুনিয়া ও আখিরাত' }, family: { en: 'Family and children', bn: 'পরিবার ও সন্তান' },
  protection: { en: 'Protection', bn: 'সুরক্ষা' }, relief: { en: 'Relief in hardship', bn: 'বিপদে মুক্তি' }, victory: { en: 'Help and victory', bn: 'সাহায্য ও বিজয়' },
  steadfastness: { en: 'Steadfastness', bn: 'অবিচলতা' }, knowledge: { en: 'Knowledge', bn: 'জ্ঞান' }, provision: { en: 'Provision', bn: 'রিজিক' },
  gratitude: { en: 'Gratitude', bn: 'কৃতজ্ঞতা' }, righteousness: { en: 'Righteousness', bn: 'নেককার হওয়া' }, akhirah: { en: 'The Hereafter', bn: 'আখিরাত' },
  against: { en: 'Against wrongdoers', bn: 'জালিমদের বিরুদ্ধে' },
};
const QDUAS_COLL = { bukhari: 'Ṣaḥīḥ al-Bukhārī', muslim: 'Ṣaḥīḥ Muslim', abudawud: 'Sunan Abī Dāwūd', tirmidhi: 'Jāmiʿ at-Tirmidhī', nasai: 'Sunan an-Nasāʾī', ibnmajah: 'Sunan Ibn Mājah' };
const QDUAS_GRADER = { 'Al-Albani': { en: 'al-Albānī', bn: 'আলবানি' }, 'Ahmad Muhammad Shakir': { en: 'Aḥmad Shākir', bn: 'আহমাদ শাকির' }, 'Bashar Awad Maarouf': { en: 'Bashshār ʿAwwād', bn: 'বাশশার আওয়াদ' }, 'Zubair Ali Zai': { en: 'Zubair ʿAlī Zaʾī', bn: 'যুবাইর আলী যাই' } };
const QDUAS_GRADE = { 'sahih': { en: 'Ṣaḥīḥ', bn: 'সহিহ' }, 'hasan': { en: 'Ḥasan', bn: 'হাসান' }, 'hasan sahih': { en: 'Ḥasan Ṣaḥīḥ', bn: 'হাসান সহিহ' } };
const QDUAS_COLL_BN = { bukhari: 'সহিহ বুখারি', muslim: 'সহিহ মুসলিম', abudawud: 'সুনানে আবু দাউদ', tirmidhi: 'জামে তিরমিজি', nasai: 'সুনানে নাসাঈ', ibnmajah: 'সুনানে ইবনে মাজাহ' };

class QuranDuasView {
  constructor() {
    this.container = document.getElementById('quran-duas-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.data = null; this.failed = false;
    this.section = 'duas'; this.theme = ''; this.who = ''; this.query = '';
    this.showWbw = true; this.showTr = true;
    this.gloss = {}; this.trans = {};   // other-language glosses / translations, by language
    this.audio = null; this.playing = null;
    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'quran-duas') this.render(); else this.stop(); } catch (_) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') { this.language = e.detail.value || 'en'; if (this.rendered) this.render(); }
      } catch (_) { /* ignore */ }
    });
    this.container.addEventListener('click', (e) => this.onClick(e));
    this.container.addEventListener('input', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-qd-search]')) {
        this.query = e.target.value || '';
        clearTimeout(this._qt); this._qt = setTimeout(() => this.renderList(), 150);
      }
    });
    this.container.addEventListener('change', (e) => {
      if (e.target && e.target.matches && e.target.matches('[data-qd-who]')) { this.who = e.target.value; this.renderList(); }
    });
  }

  // ── helpers ──────────────────────────────────────────────────────────
  tt(key, n) {
    let v = null;
    try { const x = t(key, this.language); if (x && x !== key) v = x; } catch (_) { /* ignore */ }
    if (!v) {
      const e = QDUAS_UI[key];
      if (!e) v = key;
      else if (e[this.language]) v = e[this.language];
      else if (this.language !== 'en' && typeof CI18N !== 'undefined' && e.en) { try { v = CI18N.tr(this.language, e.en) || e.en; } catch (_) { v = e.en; } }
      else v = e.en || key;
    }
    return n == null ? v : v.replace('{n}', this.num(n));
  }
  lc(o) {
    if (!o) return '';
    if (this.language === 'bn' && o.bn) return o.bn;
    const en = o.en || '';
    if (!en || this.language === 'en' || this.language === 'bn') return en;
    try { if (typeof CI18N !== 'undefined') return CI18N.tr(this.language, en) || en; } catch (_) { /* ignore */ }
    return en;
  }
  num(n) { const s = String(n); return this.language === 'bn' ? s.replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]) : s; }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  words(d) { return d.parts.reduce((n, p) => n + p.ar.length, 0); }
  refLabel(d) {
    const a = d.parts[0].ref, b = d.parts[d.parts.length - 1].ref;
    return this.num(a === b ? a : `${a}-${b.split(':')[1]}`);
  }
  surahName(n) {
    try { const s = SURAH_DATA[n - 1]; if (s) return (s.names && (s.names[this.language] || s.names.en)) || ''; } catch (_) { /* ignore */ }
    return '';
  }

  load() {
    if (this._loading) return this._loading;
    if (typeof fetch !== 'function') { this.failed = true; return (this._loading = Promise.resolve()); }
    this._loading = fetch('data/quran-duas.json').then(r => { if (!r.ok) throw new Error('duas'); return r.json(); })
      .then(d => { this.data = { duas: d.duas || [], virtues: d.virtues || [] }; })
      .catch(() => { this.failed = true; });
    return this._loading;
  }

  /** For languages other than en/bn, fetch the shared gloss/translation files once, then re-render. */
  ensureLang() {
    const l = this.language;
    if (l === 'en' || l === 'bn' || typeof QuranData === 'undefined') return;
    const wl = QuranData.wbwLang(l);
    if (wl !== 'en' && wl !== 'bn' && !(wl in this.gloss)) {
      this.gloss[wl] = null;
      QuranData.getLocalWbw(wl).then(g => { this.gloss[wl] = g || {}; if (this.language === l) this.renderList(); });
    }
    if (!(l in this.trans)) {
      this.trans[l] = null;
      QuranData.getLocalTranslations(l).then(tr => { this.trans[l] = tr || {}; if (this.language === l) this.renderList(); });
    }
  }
  glossesFor(p) {
    const l = this.language;
    if (l === 'bn') return p.bn;
    if (l === 'en' || typeof QuranData === 'undefined') return p.en;
    const wl = QuranData.wbwLang(l);
    if (wl === 'bn') return p.bn;
    const g = this.gloss[wl] && this.gloss[wl][p.ref];
    return g ? g.slice(p.from - 1, p.to) : p.en;
  }
  translationFor(d, ref) {
    const l = this.language;
    if (l === 'bn') return d.tr.bn[ref] || d.tr.en[ref] || '';
    if (l === 'en') return d.tr.en[ref] || '';
    const tr = this.trans[l];
    return (tr && tr[ref]) || d.tr.en[ref] || '';
  }

  /** Virtue targets that cover any ayah of this dua. A whole-surah virtue counts only for a
   *  short surah: every dua in al-Baqarah is not "an ayah with a virtue". */
  virtuesOf(d) {
    const short = s => { try { return SURAH_DATA[s - 1].ayahCount <= 30; } catch (_) { return false; } };
    return (this.data.virtues || []).filter(v => d.parts.some(p => {
      const [s, a] = p.ref.split(':').map(Number);
      if ((v.alsoSurahs || []).includes(s)) return short(s);
      if (v.target.surah !== s) return false;
      if (v.target.ayat == null) return short(s);
      const [x, y] = String(v.target.ayat).split('-').map(Number);
      return a >= x && a <= (y || x);
    }));
  }

  // ── render ───────────────────────────────────────────────────────────
  render() {
    if (!this.container) return;
    this.rendered = true;
    if (!this.data && !this.failed) {
      this.container.innerHTML = `<p class="py-10 text-center text-gray-400">${this.esc(this.tt('qd_loading'))}</p>`;
      this.load().then(() => this.render());
      return;
    }
    if (this.failed) { this.container.innerHTML = `<p class="py-10 text-center text-gray-400">${this.esc(this.tt('qd_failed'))}</p>`; return; }
    this.ensureLang();
    const D = this.data.duas, words = D.reduce((n, d) => n + this.words(d), 0);
    const tab = (id, label) => `<button type="button" data-qd-section="${id}" class="flex-1 px-3 py-2 rounded-xl text-sm font-semibold ${this.section === id ? 'bg-primary text-white shadow' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}">${this.esc(label)}</button>`;
    this.container.innerHTML = `<div class="max-w-4xl mx-auto px-1">
      <p class="mt-1 mb-3 text-sm text-gray-600 dark:text-gray-300">${this.esc(this.tt('qd_intro'))}</p>
      <div class="grid grid-cols-3 gap-2 mb-3">
        ${[[D.length, 'qd_stat_duas', '🤲'], [words, 'qd_stat_words', '🔤'], [this.data.virtues.length, 'qd_stat_virtues', '⭐']].map(([n, k, ic]) => `
          <div class="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2.5 text-center">
            <div class="text-xl font-bold text-primary">${ic} ${this.esc(this.num(n))}</div>
            <div class="text-[0.7rem] text-gray-500 dark:text-gray-400 leading-tight">${this.esc(this.tt(k))}</div>
          </div>`).join('')}
      </div>
      <div class="flex gap-1 p-1 rounded-2xl bg-gray-100 dark:bg-gray-800 mb-3">${tab('duas', this.tt('qd_tab_duas'))}${tab('virtues', this.tt('qd_tab_virtues'))}</div>
      <div data-qd-body>${this.section === 'duas' ? this.duasControls() + '<div data-qd-list></div>' : this.virtuesHtml()}</div>
    </div>`;
    if (this.section === 'duas') this.renderList();
  }

  duasControls() {
    const D = this.data.duas, count = k => D.filter(d => d.theme === k).length;
    const chip = (k, label, n) => `<button type="button" data-qd-theme="${this.esc(k)}" class="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold border ${this.theme === k ? 'border-primary bg-primary text-white' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}">${this.esc(label)} <span class="opacity-70">${this.esc(this.num(n))}</span></button>`;
    const themes = Object.keys(QDUAS_THEME).filter(k => count(k));
    const whos = Object.keys(QDUAS_WHO).filter(k => D.some(d => d.who === k));
    const tog = (k, on, label) => `<label class="inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-300 cursor-pointer"><input type="checkbox" data-qd-toggle="${k}" ${on ? 'checked' : ''} class="rounded accent-primary"> ${this.esc(label)}</label>`;
    return `<div class="space-y-2 mb-3">
      <div class="flex gap-2">
        <input type="search" data-qd-search value="${this.esc(this.query)}" placeholder="${this.esc(this.tt('qd_search'))}" class="flex-1 min-w-0 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100">
        <select data-qd-who class="max-w-[45%] px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100">
          <option value="">${this.esc(this.tt('qd_who_all'))}</option>
          ${whos.map(k => `<option value="${this.esc(k)}" ${this.who === k ? 'selected' : ''}>${this.esc(this.lc(QDUAS_WHO[k]))} (${this.esc(this.num(D.filter(d => d.who === k).length))})</option>`).join('')}
        </select>
      </div>
      <div class="flex gap-1.5 overflow-x-auto pb-1">${chip('', this.tt('qd_all'), D.length)}${themes.map(k => chip(k, this.lc(QDUAS_THEME[k]), count(k))).join('')}</div>
      <div class="flex gap-4">${tog('wbw', this.showWbw, this.tt('qd_show_wbw'))}${tog('tr', this.showTr, this.tt('qd_show_tr'))}</div>
    </div>`;
  }

  filtered() {
    const q = this.query.trim().toLowerCase();
    return this.data.duas.filter(d => {
      if (this.theme && d.theme !== this.theme) return false;
      if (this.who && d.who !== this.who) return false;
      if (!q) return true;
      const hay = [d.title.en, d.title.bn, d.context.en, d.context.bn, this.lc(QDUAS_WHO[d.who]), d.parts.map(p => p.ref).join(' '),
        d.parts.map(p => p.en.join(' ') + ' ' + p.bn.join(' ')).join(' ')].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  renderList() {
    const box = this.container.querySelector('[data-qd-list]');
    if (!box || !this.data) return;
    const ds = this.filtered();
    box.innerHTML = ds.length ? `<div class="space-y-3">${ds.map(d => this.card(d)).join('')}</div>`
      : `<p class="py-8 text-center text-sm text-gray-400">${this.esc(this.tt('qd_none'))}</p>`;
  }

  card(d) {
    const n = this.data.duas.indexOf(d) + 1, wc = this.words(d), vs = this.virtuesOf(d);
    const playing = this.playing && this.playing.id === d.id;
    const wordsHtml = d.parts.map(p => {
      const gl = this.glossesFor(p);
      return p.ar.map((w, i) => `<button type="button" data-qd-word="${this.esc(p.ref)}:${p.from + i}" class="group inline-flex flex-col items-center px-1.5 py-1 rounded-lg hover:bg-primary/10 ${this.showWbw ? 'min-w-[3rem]' : ''}">
          <span class="text-2xl leading-loose text-gray-900 dark:text-gray-50" style="font-family:'Amiri','Traditional Arabic',serif" lang="ar">${this.esc(w)}</span>
          ${this.showWbw ? `<span class="text-[0.7rem] leading-tight text-center text-gray-500 dark:text-gray-400 max-w-[7rem]" dir="auto">${this.esc(gl[i] || '')}</span>` : ''}
        </button>`).join('') + (d.parts.length > 1 ? `<span class="self-center text-lg text-primary/70 px-1" style="font-family:'Amiri','Traditional Arabic',serif" lang="ar">﴿${this.esc(this.arNum(p.ref.split(':')[1]))}﴾</span>` : '');
    }).join('');
    const tr = this.showTr ? d.parts.map(p => `<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300" dir="auto"><span class="text-[0.7rem] font-semibold text-gray-400">${this.esc(this.num(p.ref))}</span> ${this.esc(this.translationFor(d, p.ref))}</p>`).join('') : '';
    return `<article class="rounded-2xl border ${d.kind === 'against' ? 'border-gray-300 dark:border-gray-600' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-800 overflow-hidden" data-qd-card="${this.esc(d.id)}">
      <div class="px-4 pt-3 flex items-start gap-2">
        <span class="shrink-0 mt-0.5 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">${this.esc(this.num(n))}</span>
        <div class="flex-1 min-w-0">
          <h3 class="font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.lc(d.title))}</h3>
          <div class="mt-1 flex flex-wrap gap-1.5 text-[0.7rem]">
            <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 font-semibold">${this.esc(this.lc(QDUAS_WHO[d.who] || QDUAS_WHO.other))}</span>
            <span class="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">${this.esc(this.lc(QDUAS_THEME[d.theme]))}</span>
            <button type="button" data-qd-open="${this.esc(d.parts[0].ref)}" class="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold" title="${this.esc(this.tt('qd_open'))}">${this.esc(this.refLabel(d))}</button>
            ${vs.length ? `<button type="button" data-qd-virtue="${this.esc(vs[0].id)}" class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-semibold">⭐ ${this.esc(this.tt('qd_has_virtue'))}</button>` : ''}
          </div>
        </div>
      </div>
      ${d.kind === 'against' ? `<p class="mx-4 mt-2 text-[0.7rem] italic text-gray-500 dark:text-gray-400">${this.esc(this.tt('qd_against'))}</p>` : ''}
      <div class="px-3 py-2 flex flex-wrap justify-start gap-x-0.5 gap-y-1" dir="rtl">${wordsHtml}</div>
      <div class="px-4 pb-3 space-y-1.5">
        <p class="text-xs text-gray-500 dark:text-gray-400" dir="auto">${this.esc(this.lc(d.context))}</p>
        ${tr ? `<div class="pt-1.5 border-t border-gray-100 dark:border-gray-700"><p class="text-[0.65rem] uppercase tracking-wide text-gray-400 mb-0.5">${this.esc(this.tt('qd_tr_note'))}</p>${tr}</div>` : ''}
        <div class="flex items-center justify-between pt-1">
          <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">🔤 ${this.esc(this.tt('qd_words', wc))}</span>
          <button type="button" data-qd-play="${this.esc(d.id)}" class="px-3 py-1.5 rounded-full text-xs font-semibold ${playing ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' : 'bg-primary/10 text-primary hover:bg-primary/20'}">${playing ? '⏹ ' + this.esc(this.tt('qd_stop')) : '▶ ' + this.esc(this.tt('qd_play'))}</button>
        </div>
      </div>
    </article>`;
  }
  arNum(n) { return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }

  virtuesHtml() {
    const V = this.data.virtues;
    const cite = h => {
      const coll = this.language === 'bn' ? (QDUAS_COLL_BN[h.collection] || h.collection) : (QDUAS_COLL[h.collection] || h.collection);
      const g = QDUAS_GRADE[String(h.grade).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()];
      const gr = QDUAS_GRADER[h.gradedBy];
      if (/^(bukhari|muslim)$/.test(h.collection)) return `${coll} ${this.num(h.number)}`;   // the collection is the grade
      const by = ` (${gr ? this.lc(gr) : h.gradedBy})`;
      return `${coll} ${this.num(h.number)} · ${g ? this.lc(g) : h.grade}${by}`;
    };
    return `<p class="mb-3 text-xs text-gray-500 dark:text-gray-400">${this.esc(this.tt('qd_virtues_intro'))}</p>
      <div class="space-y-3">${V.map(v => {
        const t = v.target, sn = this.surahName(t.surah);
        const also = (v.alsoSurahs || []).filter(n => n !== t.surah).map(n => `${this.num(n)}. ${this.surahName(n)}`);
        const where = (t.ayat == null ? `${this.num(t.surah)}. ${sn} · ${this.tt('qd_whole_surah')}` : `${sn} ${this.num(`${t.surah}:${t.ayat}`)}`) + (also.length ? ` + ${also.join(' + ')}` : '');
        return `<article class="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-gray-800 p-4" data-qd-vcard="${this.esc(v.id)}">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-bold text-gray-800 dark:text-gray-100" dir="auto">⭐ ${this.esc(this.lc(v.title))}</h3>
            <button type="button" data-qd-open="${this.esc(`${t.surah}:${t.ayat == null ? 1 : String(t.ayat).split('-')[0]}`)}" class="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">📖 ${this.esc(this.tt('qd_read'))}</button>
          </div>
          <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">${this.esc(where)}</p>
          <ul class="mt-2 space-y-2.5">${v.virtues.map(x => `<li class="ps-3 border-s-2 border-emerald-400">
            <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-200" dir="auto">${this.esc(this.lc(x.text))}</p>
            <p class="mt-0.5 text-[0.7rem] font-semibold text-emerald-700 dark:text-emerald-400">${this.esc(cite(x.hadith))}</p>
            ${x.hadith.quote ? `<details class="mt-0.5"><summary class="text-[0.7rem] text-gray-400 cursor-pointer">${this.esc(this.tt('qd_hadith_words'))}</summary><p class="mt-1 text-xs italic text-gray-500 dark:text-gray-400" dir="ltr" lang="en">“${this.esc(x.hadith.quote)}”</p></details>` : ''}
          </li>`).join('')}</ul>
        </article>`;
      }).join('')}</div>`;
  }

  // ── audio ────────────────────────────────────────────────────────────
  stop() {
    if (this.audio) { try { this.audio.pause(); } catch (_) { /* ignore */ } }
    const was = this.playing; this.playing = null;
    if (was && was.id) this.refreshCard(was.id);
  }
  refreshCard(id) {
    const d = this.data && this.data.duas.find(x => x.id === id), el = this.container.querySelector(`[data-qd-card="${id}"]`);
    if (d && el) el.outerHTML = this.card(d);
  }
  playQueue(urls, id) {
    if (typeof Audio === 'undefined' || !urls.length) return;
    this.stop();
    if (!this.audio) this.audio = new Audio();
    const run = { id, i: 0 };
    this.playing = run;
    if (id) this.refreshCard(id);
    const next = () => {
      if (this.playing !== run) return;
      if (run.i >= urls.length) { this.playing = null; if (id) this.refreshCard(id); return; }
      this.audio.onended = () => { run.i++; next(); };
      this.audio.onerror = () => { run.i++; next(); };
      this.audio.src = urls[run.i];
      const p = this.audio.play(); if (p && p.catch) p.catch(() => { if (this.playing === run) { this.playing = null; if (id) this.refreshCard(id); } });
    };
    next();
  }
  wordUrl(ref, idx) { const [s, a] = ref.split(':').map(Number); return QuranData.wordAudioUrl(s, a, idx); }

  // ── events ───────────────────────────────────────────────────────────
  onClick(e) {
    const at = sel => (e.target && e.target.closest ? e.target.closest(sel) : null);
    let el;
    if ((el = at('[data-qd-section]'))) { this.stop(); this.section = el.getAttribute('data-qd-section'); this.render(); return; }
    if ((el = at('[data-qd-theme]'))) {
      this.theme = el.getAttribute('data-qd-theme');
      const body = this.container.querySelector('[data-qd-body]');
      if (body) { body.innerHTML = this.duasControls() + '<div data-qd-list></div>'; this.renderList(); }
      return;
    }
    if ((el = at('[data-qd-toggle]'))) {
      if (el.getAttribute('data-qd-toggle') === 'wbw') this.showWbw = el.checked; else this.showTr = el.checked;
      this.renderList(); return;
    }
    if ((el = at('[data-qd-word]'))) {
      if (typeof QuranData === 'undefined') return;
      const [s, a, i] = el.getAttribute('data-qd-word').split(':');
      this.playQueue([this.wordUrl(`${s}:${a}`, +i)], null); return;
    }
    if ((el = at('[data-qd-play]'))) {
      const id = el.getAttribute('data-qd-play');
      if (this.playing && this.playing.id === id) { this.stop(); return; }
      const d = this.data.duas.find(x => x.id === id);
      if (d && typeof QuranData !== 'undefined') this.playQueue(d.parts.flatMap(p => p.ar.map((_, i) => this.wordUrl(p.ref, p.from + i))), id);
      return;
    }
    if ((el = at('[data-qd-open]'))) {
      try { if (typeof ayahModal !== 'undefined' && ayahModal) ayahModal.open(el.getAttribute('data-qd-open')); } catch (_) { /* ignore */ }
      return;
    }
    if ((el = at('[data-qd-virtue]'))) {
      const id = el.getAttribute('data-qd-virtue');
      this.stop(); this.section = 'virtues'; this.render();
      try { const n = this.container.querySelector(`[data-qd-vcard="${id}"]`); if (n) n.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (_) { /* ignore */ }
    }
  }
}

let quranDuasView = null;
(window.LQ && LQ.ready ? LQ.ready : function (f) { document.addEventListener('DOMContentLoaded', f); })(() => {
  try { quranDuasView = new QuranDuasView(); } catch (e) { /* ignore */ }
});
