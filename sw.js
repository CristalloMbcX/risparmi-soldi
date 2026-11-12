// Soldi Spesi: cache per funzionare offline. Cambia VERSION a ogni rilascio.
const VERSION = 'soldi-spesi-v8';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Rete prima (così gli aggiornamenti arrivano), cache se offline
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); if(r.ok) caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, {ignoreSearch:true}).then(r => r || caches.match('./index.html'))));
});
