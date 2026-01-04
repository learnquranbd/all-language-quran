/**
 * Main Application Module
 * Handles core functionality: Surah loading, ayah display, and content management
 */

class QuranApp {
  constructor() {
    this.currentSurah = null;
    this.currentAyahRange = null;
    this.ayahData = [];
    this.language = 'en';

    // API endpoints for fetching Quran data
    this.apiEndpoints = {
      quran: 'https://api.alquran.cloud/v1',
      quranCom: 'https://api.quran.com/api/v4'
    };

    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.populateSurahDropdown();
    this.populateJuzList();

    // Check for URL hash on load
    this.handleHashChange();
  }

  cacheElements() {
    this.surahSelect = document.getElementById('surah-select');
    this.ayahRangeInput = document.getElementById('ayah-range');
    this.loadBtn = document.getElementById('load-btn');
    this.ayahContainer = document.getElementById('ayah-container');
    this.loadingOverlay = document.getElementById('loading-overlay');
    this.sidebar = document.getElementById('sidebar');
    this.sidebarToggle = document.getElementById('sidebar-toggle');
    this.sidebarOverlay = document.getElementById('sidebar-overlay');
  }

  setupEventListeners() {
    // Surah selection
    if (this.surahSelect) {
      this.surahSelect.addEventListener('change', (e) => this.onSurahSelect(e));
    }

    // Load button
    if (this.loadBtn) {
      this.loadBtn.addEventListener('click', () => this.loadAyahs());
    }

    // Ayah range input - load on Enter
    if (this.ayahRangeInput) {
      this.ayahRangeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.loadAyahs();
        }
      });
    }

    // Sidebar toggle
    if (this.sidebarToggle) {
      this.sidebarToggle.addEventListener('click', () => this.toggleSidebar());
    }

    if (this.sidebarOverlay) {
      this.sidebarOverlay.addEventListener('click', () => this.closeSidebar());
    }

    // Listen for language changes
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') {
        this.language = e.detail.value;
        this.populateSurahDropdown();
      }
    });

    // Handle URL hash changes
    window.addEventListener('hashchange', () => this.handleHashChange());
  }

  /**
   * Populate the Surah dropdown with all 114 Surahs
   * @param {string} lang - Language code
   */
  populateSurahDropdown(lang = null) {
    if (!this.surahSelect) return;

    lang = lang || (appSettings ? appSettings.get('language') : 'en');
    this.language = lang;

    // Keep the first option (placeholder)
    const placeholder = this.surahSelect.querySelector('option[value=""]');
    this.surahSelect.innerHTML = '';

    if (placeholder) {
      placeholder.textContent = t('select_surah', lang);
      this.surahSelect.appendChild(placeholder);
    } else {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = t('select_surah', lang);
      this.surahSelect.appendChild(opt);
    }

    // Add all Surahs
    SURAH_DATA.forEach(surah => {
      const opt = document.createElement('option');
      opt.value = surah.number;
      opt.setAttribute('data-ayah-count', surah.ayahCount);
      opt.textContent = formatSurahOption(surah, lang);
      this.surahSelect.appendChild(opt);
    });
  }

  /**
   * Populate the Juz navigation list
   */
  populateJuzList() {
    const juzList = document.getElementById('juz-list');
    if (!juzList) return;

    juzList.innerHTML = '';
    JUZ_DATA.forEach(juz => {
      const link = document.createElement('a');
      link.href = '#';
      link.className = 'block px-2 py-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 rounded';
      link.textContent = `${t('juz', this.language)} ${juz.number}`;
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.loadJuz(juz.number);
      });
      juzList.appendChild(link);
    });
  }

  /**
   * Handle Surah selection change
   * @param {Event} e
   */
  onSurahSelect(e) {
    const surahNumber = parseInt(e.target.value);
    if (!surahNumber) {
      this.ayahRangeInput.value = '';
      return;
    }

    const surah = getSurahByNumber(surahNumber);
    if (surah) {
      this.currentSurah = surah;
      this.ayahRangeInput.value = `${surah.number}:1-${surah.ayahCount}`;
    }
  }

  /**
   * Load ayahs based on current selection
   */
  async loadAyahs() {
    const rangeStr = this.ayahRangeInput.value.trim();
    if (!rangeStr) {
      alert('Please select a Surah or enter an ayah range');
      return;
    }

    this.showLoading(true);

    try {
      const ayahRefs = this.parseAyahRange(rangeStr);
      const ayahPromises = ayahRefs.map(ref => this.fetchAyah(ref.surah, ref.ayah));
      const ayahResults = await Promise.all(ayahPromises);

      this.ayahData = ayahResults.filter(a => a !== null);
      this.renderAyahs();

      // Update URL hash
      window.location.hash = rangeStr;

    } catch (error) {
      console.error('Error loading ayahs:', error);
      this.showError('Failed to load ayahs. Please try again.');
    } finally {
      this.showLoading(false);
    }
  }

  /**
   * Parse ayah range string (e.g., "2:255" or "2:1-10" or "2:1-10,3:1-5")
   * @param {string} rangeStr
   * @returns {Array}
   */
  parseAyahRange(rangeStr) {
    const ayahRefs = [];
    const parts = rangeStr.split(',');

    parts.forEach(part => {
      part = part.trim();
      const match = part.match(/(\d+):(\d+)(?:-(\d+))?/);

      if (match) {
        const surah = parseInt(match[1]);
        const startAyah = parseInt(match[2]);
        const endAyah = match[3] ? parseInt(match[3]) : startAyah;

        for (let ayah = startAyah; ayah <= endAyah; ayah++) {
          ayahRefs.push({ surah, ayah });
        }
      }
    });

    return ayahRefs;
  }

  /**
   * Fetch a single ayah from API
   * @param {number} surah
   * @param {number} ayah
   * @returns {object|null}
   */
  async fetchAyah(surah, ayah) {
    try {
      // Fetch Arabic text with translations
      const response = await fetch(
        `${this.apiEndpoints.quran}/ayah/${surah}:${ayah}/editions/quran-uthmani,en.sahih,bn.bengali`
      );

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();

      if (data.code === 200 && data.data) {
        const editions = data.data;
        return {
          surah: surah,
          ayah: ayah,
          arabic: editions[0]?.text || '',
          translationEn: editions[1]?.text || '',
          translationBn: editions[2]?.text || '',
          surahName: editions[0]?.surah?.englishName || '',
          surahArabicName: editions[0]?.surah?.name || '',
          juz: editions[0]?.juz || 0,
          page: editions[0]?.page || 0
        };
      }

      return null;
    } catch (error) {
      console.error(`Error fetching ayah ${surah}:${ayah}:`, error);
      return null;
    }
  }

  /**
   * Render ayahs to the container
   */
  renderAyahs() {
    if (!this.ayahContainer) return;

    if (this.ayahData.length === 0) {
      this.ayahContainer.innerHTML = `
        <div class="text-center py-12">
          <p class="text-gray-500 dark:text-gray-400">${t('no_results', this.language)}</p>
        </div>
      `;
      return;
    }

    const lang = this.language;
    const html = this.ayahData.map(ayah => this.renderAyahCard(ayah, lang)).join('');
    this.ayahContainer.innerHTML = html;

    // Also update other tabs if they're listening
    this.updateTabsContent();
  }

  /**
   * Render a single ayah card
   * @param {object} ayah
   * @param {string} lang
   * @returns {string}
   */
  renderAyahCard(ayah, lang) {
    const translation = lang === 'bn' ? ayah.translationBn : ayah.translationEn;

    return `
      <div class="ayah-card" data-surah="${ayah.surah}" data-ayah="${ayah.ayah}">
        <div class="ayah-header">
          <span class="ayah-number">${ayah.ayah}</span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            ${ayah.surahName} (${ayah.surahArabicName}) - ${t('juz', lang)} ${ayah.juz}
          </span>
          <div class="flex gap-2">
            <button class="play-ayah p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" title="${t('play', lang)}" data-ref="${ayah.surah}:${ayah.ayah}">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="ayah-content">
          <div class="ayah-arabic">${ayah.arabic}</div>
          <div class="ayah-translation">${translation}</div>
        </div>
      </div>
    `;
  }

  /**
   * Update content in other tabs based on loaded ayahs
   */
  updateTabsContent() {
    // Update Word by Word tab
    const wbwContainer = document.getElementById('wbw-container');
    if (wbwContainer && this.ayahData.length > 0) {
      wbwContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p class="text-gray-500 dark:text-gray-400">
            Word by word analysis for ${this.ayahData.length} ayah(s) will be displayed here.
            <br>This feature requires additional API integration.
          </p>
        </div>
      `;
    }

    // Update Tafseer tab
    const tafseerContent = document.getElementById('tafseer-content');
    if (tafseerContent && this.ayahData.length > 0) {
      tafseerContent.innerHTML = `
        <p class="text-gray-500 dark:text-gray-400">
          Tafseer for ${this.ayahData.length} ayah(s) will be displayed here.
          <br>Select a tafseer source above to view commentary.
        </p>
      `;
    }

    // Update Grammar tab
    const grammarContainer = document.getElementById('grammar-container');
    if (grammarContainer && this.ayahData.length > 0) {
      grammarContainer.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p class="text-gray-500 dark:text-gray-400">
            Grammar analysis for ${this.ayahData.length} ayah(s) will be displayed here.
            <br>This feature requires additional API integration.
          </p>
        </div>
      `;
    }
  }

  /**
   * Load a specific Juz
   * @param {number} juzNumber
   */
  loadJuz(juzNumber) {
    const juz = JUZ_DATA.find(j => j.number === juzNumber);
    if (!juz) return;

    // Build the ayah range string
    let rangeStr;
    if (juz.startSurah === juz.endSurah) {
      rangeStr = `${juz.startSurah}:${juz.startAyah}-${juz.endAyah}`;
    } else {
      // Just load the first few ayahs of the Juz for now
      rangeStr = `${juz.startSurah}:${juz.startAyah}-${Math.min(juz.startAyah + 9, getSurahByNumber(juz.startSurah).ayahCount)}`;
    }

    this.ayahRangeInput.value = rangeStr;
    this.loadAyahs();
    this.closeSidebar();
  }

  /**
   * Handle URL hash changes for deep linking
   */
  handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      this.ayahRangeInput.value = decodeURIComponent(hash);
      this.loadAyahs();
    }
  }

  /**
   * Toggle sidebar visibility
   */
  toggleSidebar() {
    this.sidebar.classList.toggle('-translate-x-full');
    this.sidebarOverlay.classList.toggle('hidden');
  }

  /**
   * Close sidebar
   */
  closeSidebar() {
    this.sidebar.classList.add('-translate-x-full');
    this.sidebarOverlay.classList.add('hidden');
  }

  /**
   * Show/hide loading overlay
   * @param {boolean} show
   */
  showLoading(show) {
    if (this.loadingOverlay) {
      this.loadingOverlay.classList.toggle('hidden', !show);
    }
  }

  /**
   * Show error message
   * @param {string} message
   */
  showError(message) {
    if (this.ayahContainer) {
      this.ayahContainer.innerHTML = `
        <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
          <p class="text-red-600 dark:text-red-400">${message}</p>
        </div>
      `;
    }
  }
}

// Make functions globally available for Settings module
function populateSurahDropdown(lang) {
  if (quranApp) {
    quranApp.populateSurahDropdown(lang);
  }
}

// Initialize app when DOM is ready
let quranApp;
document.addEventListener('DOMContentLoaded', () => {
  quranApp = new QuranApp();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuranApp };
}
