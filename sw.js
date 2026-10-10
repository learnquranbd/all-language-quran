/**
 * Learn Quran — Service Worker
 * Offline-first PWA support.
 *
 * Strategy:
 *   - install : precache the app shell (enumerated from index.html) + key data
 *   - activate: claim clients, drop stale caches
 *   - fetch   : same-origin GET  -> stale-while-revalidate
 *               cross-origin GET -> network-first with cache fallback
 *               failed navigation -> cached index.html
 *
 * Never throws: every handler is wrapped so a failure degrades to network/offline
 * rather than breaking the page.
 */

const CACHE = 'lq-v939';

/**
 * App shell — mirrors the <link>/<script> tags in the CURRENT index.html
 * (including ?v params so cached URLs match the ones the page requests),
 * plus the entry document, manifest, icons and the large offline data files.
 */
const PRECACHE_URLS = [
  /* './' only — never './index.html': Firebase Hosting (cleanUrls) answers
   * /index.html with a 301 to /, and a cached REDIRECTED response can never be
   * served to a navigation. The installed app used to launch into ERR_FAILED. */
  './',
  'manifest.webmanifest',

  // Styles
  'css/style.css?v=939',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=939',
  'js/translations.js?v=939',
  'js/i18n/ar.js?v=939',
  'js/i18n/bn.js?v=939',
  'js/i18n/de.js?v=939',
  'js/i18n/es.js?v=939',
  'js/i18n/fa.js?v=939',
  'js/i18n/fr.js?v=939',
  'js/i18n/hi.js?v=939',
  'js/i18n/id.js?v=939',
  'js/i18n/ja.js?v=939',
  'js/i18n/ms.js?v=939',
  'js/i18n/ru.js?v=939',
  'js/i18n/tr.js?v=939',
  'js/i18n/ur.js?v=939',
  'js/i18n/zh.js?v=939',
  'js/content-i18n.js?v=939',
  'js/module-loader.js?v=939',
  'js/ayah-autolink.js?v=939',
  'js/quran-data.js?v=939',
  'js/ayah-modal.js?v=939',
  'js/ayah-timeline.js?v=939',
  'js/tabs.js?v=939',
  'js/settings.js?v=939',
  'js/wordbyword.js?v=939',
  'js/grammar.js?v=939',
  'js/memorize.js?v=939',
  'js/word-highlight.js?v=939',
  'js/audio.js?v=939',
  'js/tafseer.js?v=939',
  'js/tajweed.js?v=939',
  'js/qaida-data.js?v=939',
  'js/learn-kids.js?v=939',
  'js/vocab-data.js?v=939',
  'js/learn-vocab.js?v=939',
  'js/names-data.js?v=939',
  'js/learn-names.js?v=939',
  'js/learn.js?v=939',
  'js/menu-data.js?v=939',
  'js/sidebar-menu.js?v=939',
  'js/topics-data.js?v=939',
  'js/navigation.js?v=939',
  'js/legacy-ayah.js?v=939',
  'js/settings-drawer.js?v=939',
  'js/firebase-config.js?v=939',
  'js/account.js?v=939',
  'js/ponder.js?v=939',
  'js/tadabbur-data.js?v=939',
  'js/tadabbur.js?v=939',
  'js/hope-index.js?v=939',
  'js/sahaba-index.js?v=939',
  'js/hope-data.js?v=939',
  'js/hope.js?v=939',
  'js/theme-pages.js?v=939',
  'js/mushaf.js?v=939',
  'js/pwa.js?v=939',
  'js/search.js?v=939',
  'js/quiz-center.js?v=939',
  'js/type-memorize.js?v=939',
  'js/word-arrange.js?v=939',
  'js/record-memorize.js?v=939',
  'js/handwriting.js?v=939',
  'js/app-nav.js?v=939',
  'js/topics-browser.js?v=939',
  'js/word-repeat.js?v=939',
  'js/sarf.js?v=939',
  'js/tajweed-learn.js?v=939',
  'js/amal-daily.js?v=939',
  'js/khatmah.js?v=939',
  'js/resources.js?v=939',
  'js/mutashabihat.js?v=939',
  'js/learn-quranic-arabic.js?v=939',
  'js/seerah-timeline.js?v=939',
  'js/why-islam.js?v=939',
  'js/prophets.js?v=939',
  'js/sahaba-data.js?v=939',
  'js/sahaba-articles.js?v=939',
  'js/seerah-articles.js?v=939',
  'js/surah-names-data.js?v=939',
  'js/surah-names.js?v=939',
  'js/article-view.js?v=939',
  'js/article-index.js?v=939',
  'js/seerah-ayah-index.js?v=939',
  'js/sahaba.js?v=939',
  'js/nuzul-timeline.js?v=939',
  'js/subscribe.js?v=939',
  'js/bookmarks.js?v=939',
  'js/dashboard.js?v=939',
  'js/app.js?v=939',
  'js/welcome-modal.js?v=939',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=939',
  'js/learn-prayer.js?v=939',
  'js/learn-sawm.js?v=939',
  'js/learn-hajj.js?v=939',
  'js/learn-zakat.js?v=939',
  'js/handwriting-data.js?v=939',
  'js/tajweed-data.js?v=939',
  'js/mutashabihat-data.js?v=939',
  'js/learn-quranic-arabic-data.js?v=939',
  'js/seerah-data.js?v=939',
  'js/why-islam-data.js?v=939',
  'js/islam-fard.js?v=939',
  'js/islam-wajib.js?v=939',
  'js/islam-nafl.js?v=939',
  'js/prophets-data.js?v=939',
  'js/prophets-articles.js?v=939',
  'js/topics-prophet-duas.js?v=939',
  'js/topics-protection-duas.js?v=939',
  'js/topics-life-duas.js?v=939',
  'js/topics-growth-duas.js?v=939',
  'js/islam-makruh.js?v=939',
  'js/islam-mustahabb.js?v=939',

  // Fonts (referenced by css/style.css @font-face)
  'webfonts/Kalpurush.woff',
  'webfonts/CustomArabic-Regular.woff2',
  'webfonts/CustomArabic-Regular.woff',
  'webfonts/kitab.woff2',
  'webfonts/kitab.woff',

  // Icons
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',

  // Offline data
  'data/quran-tokens.json',
  'data/quran-words.json',
  'data/word-index.json',
  'data/roots.json',
  'data/legacy-pages.json',
  'data/mutashabihat.json',
  'data/mutashabihat-notes.json',

  // Offline per-language reading data (language-neutral base + primary langs;
  // other languages' files are cached on demand by the fetch handler).
  'data/verse-base.json',
  'data/translations/en.json',
  'data/translations/bn.json',
  'data/wbw/en.json',
  'data/wbw/bn.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      // Cache each entry individually so one missing/404 resource never rejects
      // the whole precache (unlike cache.addAll).
      await Promise.all(PRECACHE_URLS.map(async (url) => {
        try {
          let res = await fetch(url, { cache: 'reload' });
          if (res && res.ok && res.status === 200) {
            // A redirected response is unusable for navigations; store a clean copy.
            if (res.redirected) res = new Response(await res.blob(), { status: 200, headers: res.headers });
            await cache.put(url, res.clone());
          }
        } catch (e) {
          /* skip unreachable asset */
        }
      }));
    } catch (e) {
      /* ignore — page still works online */
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k !== CACHE ? caches.delete(k) : null)));
    } catch (e) {
      /* ignore */
    }
    await self.clients.claim();
  })());
});

/** Same-origin: stale-while-revalidate. */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);

  const network = fetch(request).then((res) => {
    try {
      if (res && res.ok && res.status === 200 && res.type === 'basic' && !res.redirected) {
        cache.put(request, res.clone());
      }
    } catch (e) {
      /* ignore cache write errors */
    }
    return res;
  }).catch(() => null);

  if (cached) return cached;

  const fresh = await network;
  if (fresh) return fresh;

  // Navigation offline with nothing cached for it -> app shell.
  if (request.mode === 'navigate') {
    const shell = await cache.match('./', { ignoreSearch: true });
    if (shell) return shell;
  }
  return new Response('Offline', { status: 503, statusText: 'Offline' });
}

/** Cross-origin (quran.com API, verses.quran.com audio, learn-quran-bd images): network-first. */
async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(request);
    try {
      if (res && res.ok && res.status === 200) {
        cache.put(request, res.clone());
      }
    } catch (e) {
      /* ignore cache write errors */
    }
    return res;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET; let everything else pass through untouched.
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (e) {
    return;
  }

  // Only intercept http(s); skip chrome-extension:, etc.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request).catch(() =>
      fetch(request).catch(() => new Response('Offline', { status: 503 }))
    ));
  } else {
    event.respondWith(networkFirst(request).catch(() =>
      fetch(request).catch(() => new Response('Offline', { status: 503 }))
    ));
  }
});
