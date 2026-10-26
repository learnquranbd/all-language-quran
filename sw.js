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

const CACHE = 'lq-v1119';

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
  'css/style.css?v=1119',

  // Scripts (order mirrors index.html)
  'js/surah-data.js?v=1119',
  'js/translations.js?v=1119',
  'js/i18n/ar.js?v=1119',
  'js/i18n/bn.js?v=1119',
  'js/i18n/de.js?v=1119',
  'js/i18n/es.js?v=1119',
  'js/i18n/fa.js?v=1119',
  'js/i18n/fr.js?v=1119',
  'js/i18n/hi.js?v=1119',
  'js/i18n/id.js?v=1119',
  'js/i18n/ja.js?v=1119',
  'js/i18n/ms.js?v=1119',
  'js/i18n/ru.js?v=1119',
  'js/i18n/tr.js?v=1119',
  'js/i18n/ur.js?v=1119',
  'js/i18n/zh.js?v=1119',
  'js/content-i18n.js?v=1119',
  'js/module-loader.js?v=1119',
  'js/ayah-autolink.js?v=1119',
  'js/quran-data.js?v=1119',
  'js/ayah-modal.js?v=1119',
  'js/ayah-timeline.js?v=1119',
  'js/tabs.js?v=1119',
  'js/settings.js?v=1119',
  'js/wordbyword.js?v=1119',
  'js/grammar.js?v=1119',
  'js/memorize.js?v=1119',
  'js/word-highlight.js?v=1119',
  'js/audio.js?v=1119',
  'js/tafseer.js?v=1119',
  'js/tajweed.js?v=1119',
  'js/qaida-data.js?v=1119',
  'js/learn-kids.js?v=1119',
  'js/vocab-data.js?v=1119',
  'js/learn-vocab.js?v=1119',
  'js/names-data.js?v=1119',
  'js/learn-names.js?v=1119',
  'js/learn.js?v=1119',
  'js/menu-data.js?v=1119',
  'js/sidebar-menu.js?v=1119',
  'js/topics-data.js?v=1119',
  'js/navigation.js?v=1119',
  'js/legacy-ayah.js?v=1119',
  'js/settings-drawer.js?v=1119',
  'js/firebase-config.js?v=1119',
  'js/account.js?v=1119',
  'js/ponder.js?v=1119',
  'js/tadabbur-data.js?v=1119',
  'js/tadabbur.js?v=1119',
  'js/hope-index.js?v=1119',
  'js/sahaba-index.js?v=1119',
  'js/hope-data.js?v=1119',
  'js/hope.js?v=1119',
  'js/theme-pages.js?v=1119',
  'js/mushaf.js?v=1119',
  'js/pwa.js?v=1119',
  'js/search.js?v=1119',
  'js/quiz-center.js?v=1119',
  'js/type-memorize.js?v=1119',
  'js/word-arrange.js?v=1119',
  'js/record-memorize.js?v=1119',
  'js/handwriting.js?v=1119',
  'js/app-nav.js?v=1119',
  'js/topics-browser.js?v=1119',
  'js/word-repeat.js?v=1119',
  'js/sarf.js?v=1119',
  'js/letter-practice-rules.js?v=1119',
  'js/tajweed-learn.js?v=1119',
  'js/amal-daily.js?v=1119',
  'js/khatmah.js?v=1119',
  'js/resources.js?v=1119',
  'js/mutashabihat.js?v=1119',
  'js/learn-quranic-arabic.js?v=1119',
  'js/seerah-timeline.js?v=1119',
  'js/why-islam.js?v=1119',
  'js/prophets.js?v=1119',
  'js/sahaba-data.js?v=1119',
  'js/sahaba-articles.js?v=1119',
  'js/seerah-articles.js?v=1119',
  'js/surah-names-data.js?v=1119',
  'js/surah-names.js?v=1119',
  'js/quran-places.js?v=1119',
  'js/quran-duas.js?v=1119',
  'js/article-view.js?v=1119',
  'js/article-index.js?v=1119',
  'js/seerah-ayah-index.js?v=1119',
  'js/sahaba.js?v=1119',
  'js/nuzul-timeline.js?v=1119',
  'js/subscribe.js?v=1119',
  'js/bookmarks.js?v=1119',
  'js/dashboard.js?v=1119',
  'js/app.js?v=1119',
  'js/welcome-modal.js?v=1119',

  // 2026 additions — modules and data-split JS files that were missing from v105
  'js/learn-prayer-data.js?v=1119',
  'js/learn-prayer.js?v=1119',
  'js/learn-sawm.js?v=1119',
  'js/learn-hajj.js?v=1119',
  'js/learn-zakat.js?v=1119',
  'js/handwriting-data.js?v=1119',
  'js/tajweed-data.js?v=1119',
  'js/mutashabihat-data.js?v=1119',
  'js/learn-quranic-arabic-data.js?v=1119',
  'js/seerah-data.js?v=1119',
  'js/why-islam-data.js?v=1119',
  'js/islam-fard.js?v=1119',
  'js/islam-wajib.js?v=1119',
  'js/islam-nafl.js?v=1119',
  'js/prophets-data.js?v=1119',
  'js/prophets-articles.js?v=1119',
  'js/topics-prophet-duas.js?v=1119',
  'js/topics-protection-duas.js?v=1119',
  'js/topics-life-duas.js?v=1119',
  'js/topics-growth-duas.js?v=1119',
  'js/islam-makruh.js?v=1119',
  'js/islam-mustahabb.js?v=1119',

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
  'data/places/basemap.json',
  'data/places/places.json',
  'data/places/journeys.json',
  'data/letter-practice/core.json',
  'data/letter-practice/gloss-en.json',
  'data/letter-practice/gloss-bn.json',
  'data/quran-duas.json',

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
