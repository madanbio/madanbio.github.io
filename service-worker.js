/* ================================
   Service Worker for madanbio.github.io
   Compatible with GitHub Pages + Vite
================================ */

const CACHE_NAME = 'madanbio-cache-v1';

// Only cache SAFE & STATIC files
const APP_SHELL = [
  './',                 // important for GitHub Pages
  './index.html',
  './manifest.webmanifest'
];

/* -------------------------------
   INSTALL
-------------------------------- */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[ServiceWorker] Caching app shell');

      for (const url of APP_SHELL) {
        try {
          await cache.add(url);
          console.log('[ServiceWorker] Cached:', url);
        } catch (err) {
          console.error('[ServiceWorker] Failed to cache:', url, err);
        }
      }
    })
  );

  self.skipWaiting();
});

/* -------------------------------
   ACTIVATE
-------------------------------- */
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* -------------------------------
   FETCH (Cache First, then Network)
-------------------------------- */
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          // Cache successful responses only
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          // Offline fallback for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
