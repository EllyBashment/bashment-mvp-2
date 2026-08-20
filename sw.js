// Minimal service worker — exists to satisfy PWA installability requirements
// (Chrome/Android requires a registered service worker with a fetch handler
// before it will offer the "Add to Home Screen" / install prompt).
// This does not cache anything yet — every request just passes through to the network.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
