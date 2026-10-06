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

const CACHE = 'lq-v906';

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
  'css/style.css?v=906',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=906',
  'js/translations.js?v=906',
  'js/i18n/ar.js?v=906',
  'js/i18n/bn.js?v=906',
  'js/i18n/de.js?v=906',
  'js/i18n/es.js?v=906',
  'js/i18n/fa.js?v=906',
  'js/i18n/fr.js?v=906',
  'js/i18n/hi.js?v=906',
  'js/i18n/id.js?v=906',
  'js/i18n/ja.js?v=906',
  'js/i18n/ms.js?v=906',
  'js/i18n/ru.js?v=906',
  'js/i18n/tr.js?v=906',
  'js/i18n/ur.js?v=906',
  'js/i18n/zh.js?v=906',
  'js/content-i18n.js?v=906',
  'js/module-loader.js?v=906',
  'js/ayah-autolink.js?v=906',
  'js/quran-data.js?v=906',
  'js/ayah-modal.js?v=906',
  'js/ayah-timeline.js?v=906',
  'js/tabs.js?v=906',
  'js/settings.js?v=906',
  'js/wordbyword.js?v=906',
  'js/grammar.js?v=906',
  'js/memorize.js?v=906',
  'js/word-highlight.js?v=906',
  'js/audio.js?v=906',
  'js/tafseer.js?v=906',
  'js/tajweed.js?v=906',
  'js/qaida-data.js?v=906',
  'js/learn-kids.js?v=906',
  'js/vocab-data.js?v=906',
  'js/learn-vocab.js?v=906',
  'js/names-data.js?v=906',
  'js/learn-names.js?v=906',
  'js/learn.js?v=906',
  'js/menu-data.js?v=906',
  'js/sidebar-menu.js?v=906',
  'js/topics-data.js?v=906',
  'js/navigation.js?v=906',
  'js/legacy-ayah.js?v=906',
  'js/settings-drawer.js?v=906',
  'js/firebase-config.js?v=906',
  'js/account.js?v=906',
  'js/ponder.js?v=906',
  'js/tadabbur-data.js?v=906',
  'js/tadabbur.js?v=906',
  'js/hope-index.js?v=906',
  'js/sahaba-index.js?v=906',
  'js/hope-data.js?v=906',
  'js/hope.js?v=906',
  'js/mushaf.js?v=906',
  'js/pwa.js?v=906',
  'js/search.js?v=906',
  'js/quiz-center.js?v=906',
  'js/type-memorize.js?v=906',
  'js/word-arrange.js?v=906',
  'js/record-memorize.js?v=906',
  'js/handwriting.js?v=906',
  'js/app-nav.js?v=906',
  'js/topics-browser.js?v=906',
  'js/word-repeat.js?v=906',
  'js/sarf.js?v=906',
  'js/tajweed-learn.js?v=906',
  'js/amal-daily.js?v=906',
  'js/khatmah.js?v=906',
  'js/resources.js?v=906',
  'js/mutashabihat.js?v=906',
  'js/learn-quranic-arabic.js?v=906',
  'js/seerah-timeline.js?v=906',
  'js/why-islam.js?v=906',
  'js/prophets.js?v=906',
  'js/sahaba-data.js?v=906',
  'js/sahaba-articles.js?v=906',
  'js/seerah-articles.js?v=906',
  'js/surah-names-data.js?v=906',
  'js/surah-names.js?v=906',
  'js/article-view.js?v=906',
  'js/article-index.js?v=906',
  'js/seerah-ayah-index.js?v=906',
  'js/sahaba.js?v=906',
  'js/nuzul-timeline.js?v=906',
  'js/subscribe.js?v=906',
  'js/bookmarks.js?v=906',
  'js/dashboard.js?v=906',
  'js/app.js?v=906',
  'js/welcome-modal.js?v=906',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=906',
  'js/learn-prayer.js?v=906',
  'js/learn-sawm.js?v=906',
  'js/learn-hajj.js?v=906',
  'js/learn-zakat.js?v=906',
  'js/handwriting-data.js?v=906',
  'js/tajweed-data.js?v=906',
  'js/mutashabihat-data.js?v=906',
  'js/learn-quranic-arabic-data.js?v=906',
  'js/seerah-data.js?v=906',
  'js/why-islam-data.js?v=906',
  'js/islam-fard.js?v=906',
  'js/islam-wajib.js?v=906',
  'js/islam-nafl.js?v=906',
  'js/prophets-data.js?v=906',
  'js/prophets-articles.js?v=906',
  'js/topics-prophet-duas.js?v=906',
  'js/topics-protection-duas.js?v=906',
  'js/topics-life-duas.js?v=906',
  'js/topics-growth-duas.js?v=906',
  'js/islam-makruh.js?v=906',
  'js/islam-mustahabb.js?v=906',

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
