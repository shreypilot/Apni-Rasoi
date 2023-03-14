
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '../src/components/OfflinePage.js'
      ]);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).catch(function() {
          return caches.match('../src/components/OfflinePage.js');
        });
      }
    })
  );
});
