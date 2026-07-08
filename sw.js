```javascript
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Hanya biarkan ia kosong agar pelayar web telefon mengecam bahawa aplikasi ini adalah PWA yang sah
});
