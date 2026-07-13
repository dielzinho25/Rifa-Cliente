const CACHE='rifa-cliente-v15-1';
const ARQUIVOS=['./','./index.html','./vencedor.html','./style.css','./app.js?v=15.1','./vencedor.js?v=15.1','./firebase-config.js?v=15.1','./manifest.json?v=15.1','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).catch(()=>{}));});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x));return r;}).catch(()=>caches.match(e.request)));});
