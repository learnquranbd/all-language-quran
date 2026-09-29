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

const CACHE = 'lq-v364';

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
  'css/style.css?v=364',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=364',
  'js/translations.js?v=364',
  'js/i18n/ar.js?v=364',
  'js/i18n/bn.js?v=364',
  'js/i18n/de.js?v=364',
  'js/i18n/es.js?v=364',
  'js/i18n/fa.js?v=364',
  'js/i18n/fr.js?v=364',
  'js/i18n/hi.js?v=364',
  'js/i18n/id.js?v=364',
  'js/i18n/ja.js?v=364',
  'js/i18n/ms.js?v=364',
  'js/i18n/ru.js?v=364',
  'js/i18n/tr.js?v=364',
  'js/i18n/ur.js?v=364',
  'js/i18n/zh.js?v=364',
  'js/content-i18n.js?v=364',
  'js/module-loader.js?v=364',
  'js/ayah-autolink.js?v=364',
  'js/quran-data.js?v=364',
  'js/ayah-modal.js?v=364',
  'js/ayah-timeline.js?v=364',
  'js/tabs.js?v=364',
  'js/settings.js?v=364',
  'js/wordbyword.js?v=364',
  'js/grammar.js?v=364',
  'js/memorize.js?v=364',
  'js/word-highlight.js?v=364',
  'js/audio.js?v=364',
  'js/tafseer.js?v=364',
  'js/tajweed.js?v=364',
  'js/qaida-data.js?v=364',
  'js/learn-kids.js?v=364',
  'js/vocab-data.js?v=364',
  'js/learn-vocab.js?v=364',
  'js/names-data.js?v=364',
  'js/learn-names.js?v=364',
  'js/learn.js?v=364',
  'js/menu-data.js?v=364',
  'js/sidebar-menu.js?v=364',
  'js/topics-data.js?v=364',
  'js/navigation.js?v=364',
  'js/legacy-ayah.js?v=364',
  'js/settings-drawer.js?v=364',
  'js/firebase-config.js?v=364',
  'js/account.js?v=364',
  'js/ponder.js?v=364',
  'js/tadabbur-data.js?v=364',
  'js/tadabbur.js?v=364',
  'js/hope-index.js?v=364',
  'js/sahaba-index.js?v=364',
  'js/hope-data.js?v=364',
  'js/hope.js?v=364',
  'js/mushaf.js?v=364',
  'js/pwa.js?v=364',
  'js/search.js?v=364',
  'js/quiz-center.js?v=364',
  'js/type-memorize.js?v=364',
  'js/word-arrange.js?v=364',
  'js/record-memorize.js?v=364',
  'js/handwriting.js?v=364',
  'js/app-nav.js?v=364',
  'js/topics-browser.js?v=364',
  'js/word-repeat.js?v=364',
  'js/sarf.js?v=364',
  'js/tajweed-learn.js?v=364',
  'js/amal-daily.js?v=364',
  'js/khatmah.js?v=364',
  'js/resources.js?v=364',
  'js/mutashabihat.js?v=364',
  'js/learn-quranic-arabic.js?v=364',
  'js/seerah-timeline.js?v=364',
  'js/why-islam.js?v=364',
  'js/prophets.js?v=364',
  'js/sahaba-data.js?v=364',
  'js/sahaba-articles.js?v=364',
  'js/seerah-articles.js?v=364',
  'js/surah-names-data.js?v=364',
  'js/surah-names.js?v=364',
  'js/article-view.js?v=364',
  'js/article-index.js?v=364',
  'js/seerah-ayah-index.js?v=364',
  'js/sahaba.js?v=364',
  'js/nuzul-timeline.js?v=364',
  'js/subscribe.js?v=364',
  'js/bookmarks.js?v=364',
  'js/dashboard.js?v=364',
  'js/app.js?v=364',
  'js/welcome-modal.js?v=364',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=364',
  'js/learn-prayer.js?v=364',
  'js/learn-sawm.js?v=364',
  'js/learn-hajj.js?v=364',
  'js/learn-zakat.js?v=364',
  'js/handwriting-data.js?v=364',
  'js/tajweed-data.js?v=364',
  'js/mutashabihat-data.js?v=364',
  'js/learn-quranic-arabic-data.js?v=364',
  'js/seerah-data.js?v=364',
  'js/why-islam-data.js?v=364',
  'js/islam-fard.js?v=364',
  'js/islam-wajib.js?v=364',
  'js/islam-nafl.js?v=364',
  'js/prophets-data.js?v=364',
  'js/prophets-articles.js?v=364',
  'js/topics-prophet-duas.js?v=364',
  'js/topics-protection-duas.js?v=364',
  'js/topics-life-duas.js?v=364',
  'js/topics-growth-duas.js?v=364',
  'js/islam-makruh.js?v=364',
  'js/islam-mustahabb.js?v=364',

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
