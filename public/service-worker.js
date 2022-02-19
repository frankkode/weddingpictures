try {
  const cacheName = 'weddingapp';
  const staticAssets = [
    '/index.html',
    '/manifest.json',
    '/css/index.css',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/android-chrome-maskable-192x192.png',
    '/android-chrome-maskable-512x512.png',
    '/apple-touch-icon.png',
    '/maskable.png'
  ];


  /*eslint no-restricted-globals: ["error", "event"]*/
  self.addEventListener('install', (event) => {
    console.log('Service workers is installing...');
    event.waitUntil(
      caches
        .open(cacheName)
        .then(cache => cache.addAll(staticAssets))
    );
  })

  self.addEventListener('activate', () => {
    console.log('Service worker is activated.')
  })

  self.addEventListener('fetch', (event) => {
    console.log(event.request.url)
    event.respondWith(
      caches
        .match(event.request)
        .then(resp => resp || fetch(event.request))
    )
  })

  // Create the performance observer.
  const po = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Logs all server timing data for this response
      console.log('Server Timing', entry.serverTiming);
    }
  });
  // Start listening for `navigation` entries to be dispatched.
  po.observe({ type: 'navigation', buffered: true });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
