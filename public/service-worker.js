
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '../src/components/Header.js',
        '../src/components/OfflinePage.js',
        './manifest.json',
        './logo192.png',
        './logo512.png',
        '/build/installHook.js',
        '/static/js/bundle.js',
        '/build/react_devtools_backend.js',
        '../src/constants.js',
        '/static/media/Rasoi.c40ec49f2d6ff170edb0.jpg',
        '/static/media/Rasoi%20copy.c40ec49f2d6ff170edb0.jpg',
        '../src/components/Footer.js'
        
      ]);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
  if(!navigator.onLine)
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
       } //else {
      // return fetch(event.request).catch(function() {
      //   return caches.match('../src/components/OfflinePage.js');
      // });
      // } 
    })
  );
});



