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

const CACHE = 'lq-v120';

/**
 * App shell — mirrors the <link>/<script> tags in the CURRENT index.html
 * (including ?v params so cached URLs match the ones the page requests),
 * plus the entry document, manifest, icons and the large offline data files.
 */
const PRECACHE_URLS = [
  './',
  './index.html',
  'manifest.webmanifest',

  // Styles
  'css/style.css?v=120',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=120',
  'js/translations.js?v=120',
  'js/content-i18n.js?v=120',
  'js/quran-data.js?v=120',
  'js/ayah-modal.js?v=120',
  'js/tabs.js?v=120',
  'js/settings.js?v=120',
  'js/wordbyword.js?v=120',
  'js/grammar.js?v=120',
  'js/memorize.js?v=120',
  'js/word-highlight.js?v=120',
  'js/audio.js?v=120',
  'js/tafseer.js?v=120',
  'js/tajweed.js?v=120',
  'js/qaida-data.js?v=120',
  'js/learn-kids.js?v=120',
  'js/vocab-data.js?v=120',
  'js/learn-vocab.js?v=120',
  'js/names-data.js?v=120',
  'js/learn-names.js?v=120',
  'js/learn.js?v=120',
  'js/menu-data.js?v=120',
  'js/legacy-surah-data.js?v=120',
  'js/sidebar-menu.js?v=120',
  'js/topics-data.js?v=120',
  'js/navigation.js?v=120',
  'js/legacy-ayah.js?v=120',
  'js/settings-drawer.js?v=120',
  'js/firebase-config.js?v=120',
  'js/account.js?v=120',
  'js/ponder.js?v=120',
  'js/mushaf.js?v=120',
  'js/pwa.js?v=120',
  'js/search.js?v=120',
  'js/quiz-center.js?v=120',
  'js/type-memorize.js?v=120',
  'js/word-arrange.js?v=120',
  'js/record-memorize.js?v=120',
  'js/handwriting.js?v=120',
  'js/app-nav.js?v=120',
  'js/topics-browser.js?v=120',
  'js/word-repeat.js?v=120',
  'js/sarf.js?v=120',
  'js/tajweed-learn.js?v=120',
  'js/amal-daily.js?v=120',
  'js/khatmah.js?v=120',
  'js/resources.js?v=120',
  'js/mutashabihat.js?v=120',
  'js/learn-quranic-arabic.js?v=120',
  'js/seerah-timeline.js?v=120',
  'js/why-islam.js?v=120',
  'js/prophets.js?v=120',
  'js/sahaba-data.js?v=120',
  'js/sahaba.js?v=120',
  'js/nuzul-timeline.js?v=120',
  'js/subscribe.js?v=120',
  'js/bookmarks.js?v=120',
  'js/app.js?v=120',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=120',
  'js/learn-prayer.js?v=120',
  'js/learn-sawm.js?v=120',
  'js/learn-hajj.js?v=120',
  'js/learn-zakat.js?v=120',
  'js/handwriting-data.js?v=120',
  'js/tajweed-data.js?v=120',
  'js/mutashabihat-data.js?v=120',
  'js/learn-quranic-arabic-data.js?v=120',
  'js/seerah-data.js?v=120',
  'js/why-islam-data.js?v=120',
  'js/islam-fard.js?v=120',
  'js/islam-wajib.js?v=120',
  'js/islam-nafl.js?v=120',
  'js/prophets-data.js?v=120',
  'js/topics-prophet-duas.js?v=120',
  'js/topics-protection-duas.js?v=120',
  'js/topics-life-duas.js?v=120',
  'js/topics-growth-duas.js?v=120',
  'js/islam-makruh.js?v=120',
  'js/islam-mustahabb.js?v=120',

  // Icons
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png',

  // Offline data
  'data/quran-tokens.json',
  'data/quran-words.json',
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
          const res = await fetch(url, { cache: 'reload' });
          if (res && res.ok && res.status === 200) {
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
      if (res && res.ok && res.status === 200 && res.type === 'basic') {
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
    const shell = await cache.match('./index.html');
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
