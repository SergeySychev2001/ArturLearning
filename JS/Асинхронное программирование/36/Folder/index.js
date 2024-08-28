//1. Регистрация Service Worker: Сначала необходимо зарегистрировать Service Worker в основном JavaScript-коде приложения.

javascript;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

//2. Установка и активация: В самом файле Service Worker необходимо определить события установки (`install`) и активации (`activate`).

self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  // Здесь можно кэшировать необходимые ресурсы
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
});

//3. Перехват сетевых запросов: Можно перехватывать запросы и управлять кешем.

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((fetchResponse) => {
          // Сохранение в кеше
          return caches.open("my-cache").then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        })
      );
    })
  );
});

// Пример использования
// Рассмотрим простой пример применения Service Worker для кэширования изображений.

//1. Регистрация Service Worker:
// main.js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

//2. В файле service-worker.js:
// service-worker.js
const CACHE_NAME = "image-cache-v1";

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      })
    );
  }
});
// В этом примере Service Worker будет кэшировать изображения при их первом запросе и, в будущем, будет обслуживать их из кэша, когда
// они запрашиваются повторно, что ускоряет загрузку и улучшает производительность приложения.
