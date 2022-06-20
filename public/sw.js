// console.log("kkj");
let cacheData = "app";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/index.html',
                '/',
                '/firebase-messaging-sw',
                "/favicon.ico",
                "/manifest.json",
                "/logo192.png",
                '/static/js/bundle.js',
                '/bootstrap.min.css',

            ])
        })
    )
})
this.addEventListener("fetch", (event) => {


    if (!navigator.onLine) {
     
         event.waitUntil(
        event.respondWith(
            caches.match(event.request).then((resp) => {
      return resp
                
            }).catch((e)=>console.log("not respond"))
        ))
    }
}) 