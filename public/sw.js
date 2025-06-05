const CACHE_NAME = "fetcan-v1.0.0"
const OFFLINE_URL = "/offline"

// Files to cache for offline use
const urlsToCache = [
  "/",
  "/projects",
  "/schedule",
  "/speakers",
  "/gallery",
  "/about",
  "/contact",
  "/form",
  "/offline",
  "/manifest.json",
  "/walle-wallpaper.jpg",
  "/fonts/EDDS.ttf",
  "/fonts/Minecraft.ttf",
]

// Install event - cache resources
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...")
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching app shell")
        return cache.addAll(urlsToCache)
      })
      .then(() => {
        console.log("Service Worker installed successfully")
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...")
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("Service Worker activated")
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // Handle navigation requests
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          return cache.match(OFFLINE_URL)
        })
      }),
    )
    return
  }

  // Handle other requests with cache-first strategy
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            // Don't cache POST requests or external resources
            if (event.request.method !== "GET" || !event.request.url.startsWith(self.location.origin)) {
              return fetchResponse
            }

            // Clone the response before caching
            const responseToCache = fetchResponse.clone()

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })

            return fetchResponse
          })
        )
      })
      .catch(() => {
        // If both cache and network fail, return offline page for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match(OFFLINE_URL)
        }
      }),
  )
})

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "form-submission") {
    event.waitUntil(
      // Handle background sync for forms
      handleFormSync(),
    )
  }
})

async function handleFormSync() {
  // Handle pending form submissions when back online
  console.log("Handling background sync for forms")
}

// Push notification handling (for future use)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-72x72.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: "explore",
          title: "Ver detalhes",
          icon: "/icons/icon-96x96.png",
        },
        {
          action: "close",
          title: "Fechar",
          icon: "/icons/icon-96x96.png",
        },
      ],
    }

    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  }
})
