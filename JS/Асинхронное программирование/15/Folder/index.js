// 1. Использование колбеков
// В этом примере мы используем колбек для обработки асинхронного запроса:

function fetchData(callback) {
  setTimeout(() => {
    // Симуляция асинхронного запроса (например, к серверу)
    const data = "Данные получены!";
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log(result); // Вывод: Данные получены!
});

// 2. Использование промисов
// Ниже приведён пример использования промисов для обработки асинхронных операций:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Симуляция асинхронного запроса
      const success = true; // Измените на false для тестирования ошибки
      if (success) {
        resolve("Данные получены!");
      } else {
        reject("Ошибка при получении данных!");
      }
    }, 2000);
  });
}

fetchData()
  .then((result) => {
    console.log(result); // Вывод: Данные получены!
  })
  .catch((error) => {
    console.error(error);
  });

// 3. Использование `async/await`
// Теперь давайте перепишем предыдущий пример, используя `async` и `await`. Это делает код более линейным и читабельным:

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Измените на false для тестирования ошибки
      if (success) {
        resolve("Данные получены!");
      } else {
        reject("Ошибка при получении данных!");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result); // Вывод: Данные получены!
  } catch (error) {
    console.error(error);
  }
}

getData();

// 4. Пример с использованием `fetch`
// Теперь рассмотрим пример с использованием API для получения данных о пользователе из сети:

async function getUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Сеть ответила с ошибкой");
    }
    const userData = await response.json();
    console.log(userData); // Выводит информацию о пользователе
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

getUserData(1);

// 5. Пример с таймером
// Еще один простой пример, который показывает, как JavaScript обрабатывает таймеры с `setTimeout`:

console.log("Сначала");

setTimeout(() => {
  console.log("Это произойдет позже");
}, 2000);

console.log("Сразу после таймера");

// Вывод:
// Сначала
// Сразу после таймера
// Это произойдет позже
