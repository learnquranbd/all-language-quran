/**
 * Tab System Module
 * Handles tab navigation and content switching
 */

class TabSystem {
  constructor() {
    this.tabNav = document.getElementById('tabs-nav');
    this.tabContent = document.getElementById('tab-content');
    this.activeTab = 'reading';
    this.tabHandlers = {};

    this.init();
  }

  init() {
    if (!this.tabNav) return;

    // Add click handlers to all tab buttons
    const tabButtons = this.tabNav.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-tab');
        this.switchTab(tabId);
      });
    });
  }

  /**
   * Switch to a specific tab
   * @param {string} tabId
   */
  switchTab(tabId) {
    // Update active button
    const tabButtons = this.tabNav.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('border-primary', isActive);
      btn.classList.toggle('text-primary', isActive);
      btn.classList.toggle('dark:text-blue-400', isActive);
      btn.classList.toggle('dark:border-blue-400', isActive);
      btn.classList.toggle('border-transparent', !isActive);
      btn.classList.toggle('text-gray-500', !isActive);
    });

    // Update active panel
    const tabPanels = this.tabContent.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => {
      const panelId = panel.id.replace('tab-', '');
      panel.classList.toggle('active', panelId === tabId);
      panel.classList.toggle('hidden', panelId !== tabId);
    });

    this.activeTab = tabId;

    // Call tab-specific handler if registered
    if (this.tabHandlers[tabId]) {
      this.tabHandlers[tabId]();
    }

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('tabChanged', { detail: { tabId } }));
  }

  /**
   * Register a handler for when a tab becomes active
   * @param {string} tabId
   * @param {function} handler
   */
  onTabActive(tabId, handler) {
    this.tabHandlers[tabId] = handler;
  }

  /**
   * Get the currently active tab
   * @returns {string}
   */
  getActiveTab() {
    return this.activeTab;
  }

  /**
   * Add a new tab dynamically
   * @param {string} id
   * @param {string} label
   * @param {string} content - HTML content for the panel
   */
  addTab(id, label, content = '') {
    // Add tab button
    const btn = document.createElement('button');
    btn.className = 'tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200';
    btn.setAttribute('data-tab', id);
    btn.innerHTML = `<span>${label}</span>`;
    btn.addEventListener('click', () => this.switchTab(id));
    this.tabNav.appendChild(btn);

    // Add tab panel
    const panel = document.createElement('div');
    panel.id = `tab-${id}`;
    panel.className = 'tab-panel hidden';
    panel.innerHTML = content;
    this.tabContent.appendChild(panel);
  }

  /**
   * Remove a tab
   * @param {string} id
   */
  removeTab(id) {
    // Remove button
    const btn = this.tabNav.querySelector(`[data-tab="${id}"]`);
    if (btn) btn.remove();

    // Remove panel
    const panel = document.getElementById(`tab-${id}`);
    if (panel) panel.remove();

    // If removed tab was active, switch to first tab
    if (this.activeTab === id) {
      const firstBtn = this.tabNav.querySelector('.tab-btn');
      if (firstBtn) {
        this.switchTab(firstBtn.getAttribute('data-tab'));
      }
    }
  }

  /**
   * Update tab content
   * @param {string} tabId
   * @param {string} content - HTML content
   */
  updateTabContent(tabId, content) {
    const panel = document.getElementById(`tab-${tabId}`);
    if (panel) {
      const container = panel.querySelector('[id$="-container"]') || panel;
      container.innerHTML = content;
    }
  }
}

// Initialize tab system when DOM is ready
let tabSystem;
document.addEventListener('DOMContentLoaded', () => {
  tabSystem = new TabSystem();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TabSystem };
}
