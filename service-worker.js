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
    "img/top.jpeg",
    "img/bottom.jpeg",
    "img/X1.jpg",
    "img/IMG_4767.jpeg",
    "img/OneWay.jpg",
    "img/IMG_4818.jpeg",
    "img/Type_Standard_Brand_GO_State_Black_dmvcea.svg"

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