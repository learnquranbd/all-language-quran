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

const CACHE = 'lq-v873';

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
  'css/style.css?v=873',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=873',
  'js/translations.js?v=873',
  'js/i18n/ar.js?v=873',
  'js/i18n/bn.js?v=873',
  'js/i18n/de.js?v=873',
  'js/i18n/es.js?v=873',
  'js/i18n/fa.js?v=873',
  'js/i18n/fr.js?v=873',
  'js/i18n/hi.js?v=873',
  'js/i18n/id.js?v=873',
  'js/i18n/ja.js?v=873',
  'js/i18n/ms.js?v=873',
  'js/i18n/ru.js?v=873',
  'js/i18n/tr.js?v=873',
  'js/i18n/ur.js?v=873',
  'js/i18n/zh.js?v=873',
  'js/content-i18n.js?v=873',
  'js/module-loader.js?v=873',
  'js/ayah-autolink.js?v=873',
  'js/quran-data.js?v=873',
  'js/ayah-modal.js?v=873',
  'js/ayah-timeline.js?v=873',
  'js/tabs.js?v=873',
  'js/settings.js?v=873',
  'js/wordbyword.js?v=873',
  'js/grammar.js?v=873',
  'js/memorize.js?v=873',
  'js/word-highlight.js?v=873',
  'js/audio.js?v=873',
  'js/tafseer.js?v=873',
  'js/tajweed.js?v=873',
  'js/qaida-data.js?v=873',
  'js/learn-kids.js?v=873',
  'js/vocab-data.js?v=873',
  'js/learn-vocab.js?v=873',
  'js/names-data.js?v=873',
  'js/learn-names.js?v=873',
  'js/learn.js?v=873',
  'js/menu-data.js?v=873',
  'js/sidebar-menu.js?v=873',
  'js/topics-data.js?v=873',
  'js/navigation.js?v=873',
  'js/legacy-ayah.js?v=873',
  'js/settings-drawer.js?v=873',
  'js/firebase-config.js?v=873',
  'js/account.js?v=873',
  'js/ponder.js?v=873',
  'js/tadabbur-data.js?v=873',
  'js/tadabbur.js?v=873',
  'js/hope-index.js?v=873',
  'js/sahaba-index.js?v=873',
  'js/hope-data.js?v=873',
  'js/hope.js?v=873',
  'js/mushaf.js?v=873',
  'js/pwa.js?v=873',
  'js/search.js?v=873',
  'js/quiz-center.js?v=873',
  'js/type-memorize.js?v=873',
  'js/word-arrange.js?v=873',
  'js/record-memorize.js?v=873',
  'js/handwriting.js?v=873',
  'js/app-nav.js?v=873',
  'js/topics-browser.js?v=873',
  'js/word-repeat.js?v=873',
  'js/sarf.js?v=873',
  'js/tajweed-learn.js?v=873',
  'js/amal-daily.js?v=873',
  'js/khatmah.js?v=873',
  'js/resources.js?v=873',
  'js/mutashabihat.js?v=873',
  'js/learn-quranic-arabic.js?v=873',
  'js/seerah-timeline.js?v=873',
  'js/why-islam.js?v=873',
  'js/prophets.js?v=873',
  'js/sahaba-data.js?v=873',
  'js/sahaba-articles.js?v=873',
  'js/seerah-articles.js?v=873',
  'js/surah-names-data.js?v=873',
  'js/surah-names.js?v=873',
  'js/article-view.js?v=873',
  'js/article-index.js?v=873',
  'js/seerah-ayah-index.js?v=873',
  'js/sahaba.js?v=873',
  'js/nuzul-timeline.js?v=873',
  'js/subscribe.js?v=873',
  'js/bookmarks.js?v=873',
  'js/dashboard.js?v=873',
  'js/app.js?v=873',
  'js/welcome-modal.js?v=873',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=873',
  'js/learn-prayer.js?v=873',
  'js/learn-sawm.js?v=873',
  'js/learn-hajj.js?v=873',
  'js/learn-zakat.js?v=873',
  'js/handwriting-data.js?v=873',
  'js/tajweed-data.js?v=873',
  'js/mutashabihat-data.js?v=873',
  'js/learn-quranic-arabic-data.js?v=873',
  'js/seerah-data.js?v=873',
  'js/why-islam-data.js?v=873',
  'js/islam-fard.js?v=873',
  'js/islam-wajib.js?v=873',
  'js/islam-nafl.js?v=873',
  'js/prophets-data.js?v=873',
  'js/prophets-articles.js?v=873',
  'js/topics-prophet-duas.js?v=873',
  'js/topics-protection-duas.js?v=873',
  'js/topics-life-duas.js?v=873',
  'js/topics-growth-duas.js?v=873',
  'js/islam-makruh.js?v=873',
  'js/islam-mustahabb.js?v=873',

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
