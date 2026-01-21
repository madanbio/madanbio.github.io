
const APP_SHELL = [
  '/',                 // IMPORTANT: use absolute root
  '/index.html',
  '/manifest.webmanifest'
];

const CACHE_NAME = 'madanbio-cache-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME)
            .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
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
