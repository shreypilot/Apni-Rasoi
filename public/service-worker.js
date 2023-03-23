/* eslint-disable no-restricted-globals */

const cacheName = 'my-cache';
const urlsToCache = [
  '/',
  './manifest.json',
  './logo192.png',
  './logo512.png',
  '/build/installHook.js',
  '/static/js/bundle.js',
  '/build/react_devtools_backend.js',
  '/static/media/Rasoi.c40ec49f2d6ff170edb0.jpg',
  '/static/media/Rasoi%20copy.c40ec49f2d6ff170edb0.jpg',
  'build/static/css/main.a75e3a22.css',
  'build/static/js/604.bf3bd7af.chunk.js',
  'build/static/js/980.f936bb41.chunk.js',
  'build/static/js/main.1ac0a90e.js.LICENSE.txt',
  'build/static/js/main.1ac0a90e.js',
  '../src/constants.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function() {
        return caches.match('/offline-page.html');
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
