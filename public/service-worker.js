
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
        '../src/components/Footer.js',
        '../src/index.js',
        'build/static/css/main.a75e3a22.css',
        'build/static/css/main.a75e3a22.css.map',
        'build/static/js/604.bf3bd7af.chunk.js',
        'build/static/js/604.bf3bd7af.chunk.js.map',
        'build/static/js/980.f936bb41.chunk.js',
        'build/static/js/980.f936bb41.chunk.js.map',
        'build/static/js/main.1ac0a90e.js.LICENSE.txt',
        'build/static/js/main.1ac0a90e.js.map',
        'build/static/media/Rasoi copy.c40ec49f2d6ff170edb0.jpg',
        'build/static/media/Rasoi.c40ec49f2d6ff170edb0.jpg'
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



