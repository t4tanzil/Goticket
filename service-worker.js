const CacheName = "Go-ticket-v2";
const cacheAssets=[
    "index.html",   
    "manifest.json",
    "img/icon-192.png",
    "img/icon-512.png",
    "select.html",
    "js/app.js",
    "js/stations.js",
    "css/style.css",
    "css/select.css",

];
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CacheName).then((cache) => {
            return cache.addAll(cacheAssets);
        })
    );
});
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});  