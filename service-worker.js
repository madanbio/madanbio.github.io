/* ================================
   Service Worker for madanbio.github.io
   GitHub Pages + Vite SAFE version
================================ */

const CACHE_NAME = 'madanbio-cache-v1';

const APP_SHELL = [
  'https://madanbio.github.io',                 // IMPORTANT: use absolute root
  'https://madanbio.github.io/index.html',
  'https://madanbio.github.io/manifest.webmanifest'
];

/* -------------------------------
   INSTALL
-------------------------------- */
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(APP_SHELL);
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
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          })
      )
    )
  );

  self.clients.claim();
});

/* -------------------------------
   FETCH (Network First for HTML)
-------------------------------- */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Handle navigation (React Router / Vite)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }

  // Static assets (CSS, JS, images)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          const responseClone = networkResponse.clone();

          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.put(event.request, responseClone);
            })
          );
        }

        return networkResponse;
      });
    })
  );
});
