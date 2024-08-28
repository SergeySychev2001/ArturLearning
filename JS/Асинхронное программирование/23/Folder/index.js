// Пример использования Fetch API
// Простой GET-запрос

fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // парсинг JSON-ответа
  })
  .then((data) => {
    console.log(data); // обработка данных
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

//POST-запрос с использованием Fetch API

const data = { name: "John", age: 30 };

fetch("https://api.example.com/data", {
  method: "POST", // или 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data), // преобразуем объект в JSON-строку
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // парсинг JSON-ответа
  })
  .then((data) => {
    console.log("Success:", data); // обработка возвращенных данных
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ### Изменение заголовков и параметры
// Fetch API позволяет легко настраивать заголовки и параметры запросов:

fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    Authorization: "Bearer token123",
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// Отмена запроса
// С помощью `AbortController` можно отменить запрос, если он больше не нужен:

const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch request was aborted");
    } else {
      console.error("Fetch error:", error);
    }
  });

// Пример отмены запроса
controller.abort(); // Отменяем запрос
