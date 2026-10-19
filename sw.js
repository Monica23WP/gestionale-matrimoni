// Service worker minimale — serve solo a far riconoscere il sito come PWA installabile.
// Non mette in cache nulla: ogni apertura carica sempre l'ultima versione da Firebase/GitHub,
// così gli aggiornamenti dell'app arrivano subito, senza bisogno di "svuotare la cache".
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  // passa semplicemente la richiesta alla rete, senza intercettare/mettere in cache
});
