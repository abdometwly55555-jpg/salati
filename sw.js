const CACHE = 'salati-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([
      '/salati/',
      '/salati/index.html',
      '/salati/manifest.json',
      '/salati/icon-192.png',
      '/salati/icon-512.png'
    ]).catch(() => {}))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/salati/')))
  );
});
