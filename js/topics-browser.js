/**
 * Topics Browser — an A–Z topical index of the Quran (~1,857 topics),
 * sourced from QuranWBW's public quran-topics dataset and bundled locally at
 * data/quran-topics.json as { "Topic Name": ["surah:ayah", ...], ... }.
 *
 * Renders into #topics-container (tab "topics"). Pick a letter or search to
 * find a topic, open it to see every verse it references, then tap a verse to
 * load it in the Reading tab (via the app's #hash deep-link) — or open them all.
 */

class TopicsBrowser {
  constructor() {
    this.container = document.getElementById('topics-container');
    if (!this.container) return;

    this.language = (typeof appSettings !== 'undefined' && appSettings)
      ? appSettings.get('language') : 'en';
    this.data = null;          // { topic: [refs] }
    this.list = [];            // [{ topic, verses }]
    this.byLetter = {};        // { 'A': [items] }
    this.letters = [];
    this.activeLetter = 'A';
    this.query = '';
    this.openTopic = null;     // currently expanded topic name
    this.loaded = false;
    this.OPEN_ALL_CAP = 30;    // max verses loaded at once via "Open all"

    window.addEventListener('tabChanged', (e) => {
      if (e.detail.tabId === 'topics') this.ensureLoaded();
    });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.loaded) this.render(); }
    });
  }

  tt(key) { return t(key, this.language); }

  async ensureLoaded() {
    if (this.loaded) { this.render(); return; }
    this.container.innerHTML = `<div class="text-center py-16 text-gray-400">${this.tt('loading')}</div>`;
    try {
      const res = await fetch('data/quran-topics.json');
      if (!res.ok) throw new Error('topics fetch failed');
      this.data = await res.json();
    } catch (e) {
      this.container.innerHTML = `<div class="text-center py-16 text-red-500">${this.tt('topics_load_error')}</div>`;
      return;
    }
    this.list = Object.keys(this.data)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .map(topic => ({ topic, verses: this.data[topic] }));
    this.byLetter = {};
    for (const item of this.list) {
      const c = item.topic[0].toUpperCase();
      const key = /[A-Z]/.test(c) ? c : '#';
      (this.byLetter[key] = this.byLetter[key] || []).push(item);
    }
    this.letters = Object.keys(this.byLetter).sort();
    if (!this.byLetter[this.activeLetter]) this.activeLetter = this.letters[0];
    this.loaded = true;
    this.bindOnce();
    this.render();
  }

  bindOnce() {
    this.container.addEventListener('click', (e) => {
      const letter = e.target.closest('[data-letter]');
      if (letter) { this.activeLetter = letter.getAttribute('data-letter'); this.query = ''; this.openTopic = null; this.render(); return; }
      const topic = e.target.closest('[data-topic]');
      if (topic) { const name = topic.getAttribute('data-topic'); this.openTopic = (this.openTopic === name) ? null : name; this.render(); return; }
      const verse = e.target.closest('[data-verse]');
      if (verse) { this.gotoVerses(verse.getAttribute('data-verse')); return; }
      const back = e.target.closest('[data-topics-back]');
      if (back) { this.openTopic = null; this.render(); return; }
    });
    this.container.addEventListener('input', (e) => {
      if (e.target.id === 'topics-search') { this.query = e.target.value.trim(); this.openTopic = null; this.renderResults(); }
    });
  }

  render() {
    const lang = this.language;
    this.container.innerHTML = `
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold mb-1">🗂️ ${this.tt('topics_title')}</h2>
          <p class="text-gray-500 dark:text-gray-400">${this.tt('topics_subtitle')}</p>
        </div>
        <input id="topics-search" type="text" value="${this.esc(this.query)}"
               placeholder="${this.esc(this.tt('topics_search_placeholder'))}"
               class="w-full mb-4 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary">
        <div id="topics-letters" class="flex flex-wrap gap-1 justify-center mb-5">
          ${this.letters.map(l => `
            <button data-letter="${l}" class="w-8 h-8 rounded-lg text-sm font-semibold transition-colors ${
              l === this.activeLetter && !this.query
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}">${l}</button>`).join('')}
        </div>
        <div id="topics-results"></div>
      </div>`;
    this.renderResults();
  }

  renderResults() {
    const box = this.container.querySelector('#topics-results');
    if (!box) return;
    let items;
    if (this.query) {
      const q = this.query.toLowerCase();
      items = this.list.filter(i => i.topic.toLowerCase().includes(q)).slice(0, 300);
    } else {
      items = this.byLetter[this.activeLetter] || [];
    }
    if (!items.length) { box.innerHTML = `<p class="text-center py-10 text-gray-400">${this.tt('topics_no_results')}</p>`; return; }

    box.innerHTML = `
      <div class="text-xs text-gray-400 mb-2">${items.length} ${this.tt('topics_count_label')}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        ${items.map(i => this.topicCard(i)).join('')}
      </div>`;
  }

  topicCard(item) {
    const open = this.openTopic === item.topic;
    const verses = item.verses;
    return `
      <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden ${open ? 'sm:col-span-2 lg:col-span-3' : ''}">
        <button data-topic="${this.esc(item.topic)}" class="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50">
          <span class="font-medium truncate" dir="auto">${this.esc(item.topic)}</span>
          <span class="shrink-0 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-blue-500/15 dark:text-blue-300">${verses.length}</span>
        </button>
        ${open ? `
          <div class="px-4 pb-4 border-t border-gray-100 dark:border-gray-700 pt-3">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-500">${verses.length} ${this.tt('topics_verses_label')}</span>
              <button data-verse="${verses.slice(0, this.OPEN_ALL_CAP).join(',')}"
                      class="text-xs px-3 py-1.5 rounded-lg bg-secondary text-white hover:bg-secondary/90">
                ${this.tt('topics_open_all')}${verses.length > this.OPEN_ALL_CAP ? ` (${this.OPEN_ALL_CAP})` : ''}
              </button>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${verses.map(v => `<button data-verse="${v}" class="text-xs font-mono px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">${v}</button>`).join('')}
            </div>
          </div>` : ''}
      </div>`;
  }

  /** Load one or more "surah:ayah" refs into the Reading tab via deep-link hash. */
  gotoVerses(refStr) {
    const clean = refStr.split(',').map(s => s.trim()).filter(Boolean).join(', ');
    if (!clean) return;
    if (typeof tabSystem !== 'undefined' && tabSystem) tabSystem.switchTab('reading');
    // Force a hashchange even when re-selecting the same target.
    if (window.location.hash.slice(1) === encodeURIComponent(clean)) {
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.hash = clean;
    }
  }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let topicsBrowser;
document.addEventListener('DOMContentLoaded', () => { topicsBrowser = new TopicsBrowser(); });
