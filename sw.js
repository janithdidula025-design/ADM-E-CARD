self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('adm-v6').then((c) => c.addAll(['admin.html', 'index.html', 'manifest.json'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});