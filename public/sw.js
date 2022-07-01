let cacheData = "app";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                "/static/js/main.e97b3277.js",
                "/static/css/main.1798aa73.css",
                "https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js",
                "https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js",
                "/favicon.ico",
                "/logo192.png",
                'https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap'


            ])
        }).catch((error)=>console.log("failed",error))
    )
})
this.addEventListener( "fetch", (event) => {
     
         event.waitUntil(
        event.respondWith(
            caches.match(event.request).then((resp) => {
            return resp
                
            }).catch((e)=>console.log("not respond"))
        ))
    
})