/**
 * PWA Support
 * - Registers the service worker (sw.js, at the app root) at app scope.
 * - Captures beforeinstallprompt and offers a small, dismissible install button
 *   injected next to #theme-toggle (settings-drawer injectButton pattern).
 * - Hides the button after install or dismissal (persisted in localStorage).
 * - Shows a "new version available" banner when a new sw.js takes over a page
 *   that was already controlled. sw.js calls skipWaiting() + clients.claim(),
 *   so the new worker activates on its own and fires controllerchange; the
 *   page's already-loaded JS/CSS is still the old copy, so tapping reloads.
 *   No reload ever happens without a tap, so there is no reload loop.
 *   registration.update() runs when the tab becomes visible (max once/30 min).
 *
 * All user-facing strings go through t(); constructor bails if its DOM hook is
 * absent so it never throws on pages without the header.
 */

class PWA {
  constructor() {
    this.deferredPrompt = null;
    this.button = null;
    this.updateBanner = null;
    this.lastUpdateCheck = Date.now();

    this.registerServiceWorker();
    this.setupInstallFlow();
  }

  lang() {
    return (typeof appSettings !== 'undefined' && appSettings)
      ? appSettings.get('language')
      : 'en';
  }

  isDismissed() {
    try {
      return localStorage.getItem('pwaInstallDismissed') === '1';
    } catch (e) {
      return false;
    }
  }

  setDismissed() {
    try {
      localStorage.setItem('pwaInstallDismissed', '1');
    } catch (e) {
      /* ignore */
    }
  }

  registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    const secure = location.protocol === 'https:'
      || location.hostname === 'localhost'
      || location.hostname === '127.0.0.1';
    if (!secure) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { scope: './' })
        .then((reg) => this.watchForUpdates(reg))
        .catch((e) => console.warn('SW registration failed', e));
    });
  }

  /** t() returns the key itself when missing; fall back to English text. */
  tr(key, fallback) {
    const s = (typeof t === 'function') ? t(key, this.lang()) : key;
    return (s && s !== key) ? s : fallback;
  }

  watchForUpdates(reg) {
    const sw = navigator.serviceWorker;
    // null on the very first install: clients.claim() then fires one
    // controllerchange that is not an update, so it must not show the banner.
    let controller = sw.controller;
    sw.addEventListener('controllerchange', () => {
      const hadController = !!controller;
      controller = sw.controller;
      if (hadController) this.showUpdateBanner();
    });

    // Long-open tabs: re-check sw.js when the tab comes back, at most every 30 min.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'visible') return;
      if (Date.now() - this.lastUpdateCheck < 30 * 60 * 1000) return;
      this.lastUpdateCheck = Date.now();
      reg.update().catch(() => { /* offline */ });
    });
  }

  showUpdateBanner() {
    if (this.updateBanner) return;
    const bar = document.createElement('div');
    bar.id = 'app-update-banner';
    bar.setAttribute('role', 'status');
    bar.className = 'fixed inset-x-0 bottom-4 z-[55] mx-auto w-[calc(100%-2rem)] max-w-md flex items-center gap-2 rounded-xl shadow-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 ps-4 pe-2 py-2 text-sm';

    const go = document.createElement('button');
    go.id = 'app-update-reload';
    go.className = 'flex-1 text-start py-1 font-medium hover:underline';
    go.textContent = this.tr('app_update_available', 'A new version is available. Tap to refresh.');
    go.addEventListener('click', () => {
      if (this.reloading) return;
      this.reloading = true;
      location.reload();
    });

    const close = document.createElement('button');
    close.id = 'app-update-dismiss';
    close.className = 'shrink-0 w-8 h-8 rounded-md hover:bg-white/10 dark:hover:bg-black/10';
    const label = this.tr('dismiss', 'Dismiss');
    close.setAttribute('title', label);
    close.setAttribute('aria-label', label);
    close.textContent = '\u2715';
    close.addEventListener('click', () => this.hideUpdateBanner());

    bar.appendChild(go);
    bar.appendChild(close);
    document.body.appendChild(bar);
    this.updateBanner = bar;
  }

  hideUpdateBanner() {
    if (this.updateBanner && this.updateBanner.parentElement) {
      this.updateBanner.parentElement.removeChild(this.updateBanner);
    }
    this.updateBanner = null;
  }

  setupInstallFlow() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the default mini-infobar so we can show our own button.
      e.preventDefault();
      this.deferredPrompt = e;
      if (!this.isDismissed()) this.injectButton();
    });

    window.addEventListener('appinstalled', () => {
      this.setDismissed();
      this.removeButton();
      this.deferredPrompt = null;
    });

    // Re-label on language change.
    window.addEventListener('settingChanged', (e) => {
      if (e.detail && e.detail.key === 'language') {
        this.updateLabels();
        if (this.updateBanner) { this.hideUpdateBanner(); this.showUpdateBanner(); }
      }
    });
  }

  injectButton() {
    if (this.button || this.isDismissed()) return;
    const container = document.getElementById('header-quick-actions');
    if (!container) return;
    const lang = this.lang();

    const wrap = document.createElement('span');
    wrap.id = 'pwa-install';
    wrap.className = 'flex items-center gap-1';

    const install = document.createElement('button');
    install.id = 'pwa-install-btn';
    install.className = 'flex items-center gap-1 px-2 py-1 text-sm rounded-md bg-white/15 hover:bg-white/25 text-white';
    install.setAttribute('title', t('install_app', lang));
    install.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"/>
      </svg>
      <span data-pwa-label>${t('install_app', lang)}</span>`;
    install.addEventListener('click', () => this.promptInstall());

    const dismiss = document.createElement('button');
    dismiss.id = 'pwa-dismiss-btn';
    dismiss.className = 'p-1 rounded-md hover:bg-white/10 text-white/80';
    dismiss.setAttribute('title', t('dismiss', lang));
    dismiss.setAttribute('aria-label', t('dismiss', lang));
    dismiss.innerHTML = '✕';
    dismiss.addEventListener('click', () => {
      this.setDismissed();
      this.removeButton();
    });

    wrap.appendChild(install);
    wrap.appendChild(dismiss);
    container.appendChild(wrap);
    this.button = wrap;
  }

  removeButton() {
    if (this.button && this.button.parentElement) {
      this.button.parentElement.removeChild(this.button);
    }
    this.button = null;
  }

  updateLabels() {
    if (!this.button) return;
    const lang = this.lang();
    const label = this.button.querySelector('[data-pwa-label]');
    if (label) label.textContent = t('install_app', lang);
    const install = this.button.querySelector('#pwa-install-btn');
    if (install) install.setAttribute('title', t('install_app', lang));
    const dismiss = this.button.querySelector('#pwa-dismiss-btn');
    if (dismiss) {
      dismiss.setAttribute('title', t('dismiss', lang));
      dismiss.setAttribute('aria-label', t('dismiss', lang));
    }
  }

  async promptInstall() {
    if (!this.deferredPrompt) return;
    const prompt = this.deferredPrompt;
    this.deferredPrompt = null;
    try {
      prompt.prompt();
      const choice = await prompt.userChoice;
      // A choice was made and the browser consumed the prompt event; either way
      // it cannot be shown again this session, so retire the button.
      this.removeButton();
    } catch (e) {
      /* ignore */
    }
  }
}

let pwa;
document.addEventListener('DOMContentLoaded', () => {
  pwa = new PWA();
});
