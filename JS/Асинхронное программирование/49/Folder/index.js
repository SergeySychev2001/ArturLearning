//1. Неправильное использование `Promise`
//Ошибка: Забывать возвращать `Promise`.
//Пример:
function fetchData() {
  setTimeout(() => {
    return "data"; // Не возвращает значение
  }, 1000);
}
// Вызов
fetchData().then((data) => console.log(data)); // undefined
//Решение:
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
}

// 2. Неправильное использование `await`
// Ошибка: Использовать `await` вне функции `async`.
// Пример:
const data = await fetchData(); // SyntaxError
//Решение
async function getData() {
  const data = await fetchData();
  console.log(data);
}

// 3. Пропуск обработки ошибок
// Ошибка: Не обрабатывать ошибки в асинхронных операциях.
// Пример:
async function fetchFail() {
  throw new Error("Fetch failed!");
}
fetchFail(); // Ошибка не обрабатывается
//Решение:
async function fetchWithErrorHandling() {
  try {
    await fetchFail();
  } catch (error) {
    console.error(error.message);
  }
}

// 4. Неправильное использование `Promise.all`
// Ошибка:Использовать `Promise.all` для зависимых операций.
// Пример:
Promise.all([fetchData1(), fetchData2()]);
// Решение:
// Используйте, когда операции независимы, или последовательный `await`.

// 5. Забыть очистить таймеры
// Ошибка: Не очищать таймеры.
// Пример:
let timer;

function startTimer() {
  timer = setTimeout(() => {
    console.log("Timer finished!");
  }, 5000);
}

function stopTimer() {
  clearTimeout(timer); // Необходимо очищать таймер
}
