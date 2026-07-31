/**
 * Settings Module
 * Handles theme, language, and font size settings
 */

class Settings {
  constructor() {
    this.defaults = {
      theme: 'system',
      language: 'en',
      fontSize: 100,
      arabicFontSize: 100,
      showTransliteration: true,
      showTranslation: true,
      reciter: 'mishary'
    };

    this.settings = this.loadSettings();
    this.init();
  }

  init() {
    // One-time migration: clear WBW-language overrides saved before v41 — they
    // froze word-by-word meanings to English regardless of the UI language.
    // (Users can still pick an explicit override in the settings drawer.)
    try {
      if (!localStorage.getItem('wbwLangMigrated')) {
        if (this.settings.wbwLang != null) this.set('wbwLang', null);
        localStorage.setItem('wbwLangMigrated', '1');
      }
    } catch (e) { /* ignore */ }

    this.applyTheme();
    this.applyLanguage();
    this.applyFontSize();
    this.applyArabicFontSize();
    this.setupEventListeners();
  }

  /**
   * Load settings from localStorage
   * @returns {object}
   */
  loadSettings() {
    let settings;
    try {
      const saved = localStorage.getItem('quranAppSettings');
      settings = saved ? { ...this.defaults, ...JSON.parse(saved) } : { ...this.defaults };
    } catch (e) {
      settings = { ...this.defaults };
    }
    // If localStorage had no language but the cookie does, honour the cookie —
    // this is what lets a reader keep their language when localStorage was
    // cleared or is unavailable. A language already in localStorage wins, since
    // that is the store every other setting comes from.
    try {
      const cookieLang = this.languageCookie();
      if (cookieLang && (!settings.language || settings.language === this.defaults.language)) {
        settings.language = cookieLang;
      }
    } catch (e) { /* ignore */ }
    return settings;
  }

  /**
   * Save settings to localStorage
   */
  saveSettings() {
    try {
      localStorage.setItem('quranAppSettings', JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Could not save settings to localStorage');
    }
    this.saveLanguageCookie();
  }

  /**
   * Mirror the chosen language into a cookie.
   *
   * localStorage remains the source of truth for all settings; the cookie
   * carries the language alone, for two reasons:
   *   - it is readable in <head> without parsing the whole settings JSON, which
   *     is where index.html decides which UI-string pack to fetch;
   *   - it survives cases where localStorage is unavailable or cleared
   *     independently (Safari eviction, "clear site data" variants), so a
   *     returning reader keeps their language.
   * Read back by languageCookie() and by the loader in index.html.
   */
  saveLanguageCookie() {
    try {
      const lang = this.settings && this.settings.language;
      if (!lang || !/^[a-z]{2}$/.test(lang)) return;
      const oneYear = 60 * 60 * 24 * 365;
      const secure = location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = 'lq_lang=' + encodeURIComponent(lang)
        + '; Max-Age=' + oneYear + '; Path=/; SameSite=Lax' + secure;
    } catch (e) { /* cookies disabled — localStorage still holds the setting */ }
  }

  /** The language from the cookie, or null. Static so the loader can reuse it. */
  languageCookie() {
    try {
      const m = document.cookie.match(/(?:^|;\s*)lq_lang=([^;]*)/);
      const v = m ? decodeURIComponent(m[1]) : null;
      return (v && /^[a-z]{2}$/.test(v)) ? v : null;
    } catch (e) { return null; }
  }

  /**
   * Get a setting value
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    return this.settings[key];
  }

  /**
   * Set a setting value
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    this.settings[key] = value;
    this.saveSettings();

    // Apply changes immediately
    switch (key) {
      case 'theme':
        this.applyTheme();
        break;
      case 'language':
        this.applyLanguage();
        break;
      case 'fontSize':
        this.applyFontSize();
        break;
      case 'arabicFontSize':
        this.applyArabicFontSize();
        break;
    }

    // Dispatch event for other modules
    window.dispatchEvent(new CustomEvent('settingChanged', {
      detail: { key, value }
    }));
  }

  /**
   * Apply theme setting
   */
  applyTheme() {
    const theme = this.settings.theme;
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark');
    } else if (theme === 'light') {
      html.classList.remove('dark');
    } else {
      // System preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }

    // Update select element if exists
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      themeSelect.value = theme;
    }
  }

  /**
   * Apply language setting
   */
  applyLanguage() {
    const lang = this.settings.language;

    // Apply translations using the translations module
    if (typeof applyTranslations === 'function') {
      applyTranslations(lang);
    }

    // Update Surah dropdown if exists
    if (typeof populateSurahDropdown === 'function') {
      populateSurahDropdown(lang);
    }

    // Update select element if exists
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
      langSelect.value = lang;
    }
  }

  /**
   * Apply font size setting
   */
  /** Separate multiplier for Quranic Arabic text (.ayah-arabic) only. */
  applyArabicFontSize() {
    const v = this.settings.arabicFontSize || 100;
    document.documentElement.style.setProperty('--arabic-scale', v / 100);
    const disp = document.getElementById('sd-arabic-display');
    if (disp) disp.textContent = v + '%';
  }

  applyFontSize() {
    const scale = this.settings.fontSize / 100;
    // Scale the ROOT font size: every Tailwind class is rem-based, so this
    // resizes the ENTIRE app (all modules), not just the few elements that used
    // the old --font-scale variable. That variable is pinned to 1 so the
    // remaining calc() rules in style.css don't double-scale.
    document.documentElement.style.fontSize = (scale * 100) + '%';
    document.documentElement.style.setProperty('--font-scale', 1);

    // Font size is now controlled via the settings drawer (gear icon)
  }

  /**
   * Setup event listeners for settings controls
   */
  setupEventListeners() {
    // Language select
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
      langSelect.value = this.settings.language;
      langSelect.addEventListener('change', (e) => {
        this.set('language', e.target.value);
      });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (this.settings.theme === 'system') {
        this.applyTheme();
      }
    });
  }
}

// Initialize settings when DOM is ready
let appSettings;
document.addEventListener('DOMContentLoaded', () => {
  appSettings = new Settings();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Settings };
}
