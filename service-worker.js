const CACHE='rifa-cliente-v15-17-final';
const CORE=['./index.html?v=v15-17','./vencedor.html?v=v15-17','./style.css?v=v15-17','./app.js?v=v15-17','./pagamentos-config.js?v=v15-17','./vencedor.js?v=v15-17','./firebase-config.js?v=v15-17','./manifest.json?v=v15-17','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).catch(()=>{}));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const req=event.request;
 if(req.mode==='navigate'){
  event.respondWith(fetch(req,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put('./index.html?v=v15-17',copy));return r;}).catch(()=>caches.match('./index.html?v=v15-17')));
  return;
 }
 event.respondWith(fetch(req,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(req,copy));return r;}).catch(()=>caches.match(req)));
});
