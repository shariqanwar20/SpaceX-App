//add files after making a build

var filesToCache = [
    './favicon.ico',
    './index.html',
    './logo192.png',
    './logo512.png',
    './manifest.json',
    './serviceWorker.js',
    './static/js/2.f1b267d8.chunk.js',
    './static/js/2.f1b267d8.chunk.js.map',
    './static/js/3.885a58da.chunk.js',
    './static/js/3.885a58da.chunk.js.map',
    './static/js/main.974784be.chunk.js',
    './static/js/main.974784be.chunk.js.map',
    './static/js/runtime-main.8b8f20cf.js',
    './static/js/runtime-main.8b8f20cf.js.map',
    './static/css/2.20aa2d7b.chunk.css',
    './static/css/2.20aa2d7b.chunk.css.map',
    './static/css/main.ed845415.chunk.css',
    './static/css/main.ed845415.chunk.css.map',
    './static/media/spaceX-background.72b3a310.jpg',
    './static/media/spacex-logo.d370cf5f.png'
];

this.addEventListener('activate', () => {
    console.log('Service worker activated');
})

this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('spaceX app').then((cache) => {
            console.log('adding to cache');
            return cache.addAll(filesToCache).catch((err)=> {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        })
    )
})

this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open('spaceX app').then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request)
        });
        })
    );
  });