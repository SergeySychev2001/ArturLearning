// Пример 1: Простой GET-запрос
// В этом примере мы используем Fetch API для выполнения GET-запроса к гипотетическому API и получения данных в формате JSON.

fetch("https://api.example.com/data") // Замените на реальный URL API
  .then((response) => {
    // Проверка успешности ответа
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Преобразование ответа в JSON
  })
  .then((data) => {
    console.log(data); // Обработка полученных данных
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Пример 2: Использование параметров запроса
// Вы также можете передавать параметры в URL, например, для фильтрации данных или пагинации.

const userId = 1; // Пример ID пользователя
fetch(`https://api.example.com/users/${userId}`) // Замените на реальный URL API
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Пример 3: Передача заголовков (например, для аутентификации)
// Если API требует аутентификацию или специальные заголовки, вы можете передавать их следующим образом:

fetch("https://api.example.com/protected-data", {
  method: "GET", // Метод по умолчанию
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN", // Замените на ваш токен
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Пример 4: Обработка ответов в различных форматах
// Если сервер возвращает данные не в формате JSON (например, текст или другой формат), можно использовать соответствующий метод для обработки:

fetch("https://api.example.com/text-data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text(); // Преобразование ответа в текст
  })
  .then((text) => {
    console.log(text); // Работа с текстовыми данными
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Пример 5: Использование `async`/`await`
// Вы можете использовать `async` и `await` для более простого синтаксиса асинхронного кода:

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data"); // Замените на реальный URL API
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json(); // Преобразование ответа в JSON
    console.log(data); // Обработка полученных данных
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData(); // Вызов функции для получения данных
