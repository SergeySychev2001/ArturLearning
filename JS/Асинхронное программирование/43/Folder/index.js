// Пример использования `async function*`
// Вот пример простого асинхронного генератора, который генерирует числа с заданным интервалом:

// Асинхронный генератор
async function* asyncNumberGenerator() {
  for (let i = 1; i <= 5; i++) {
    // Имитируем асинхронную операцию
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i; // Возвращаем число
  }
}

// Используем асинхронный генератор
(async () => {
  for await (const number of asyncNumberGenerator()) {
    console.log(number); // Выведет числа от 1 до 5 с интервалом в 1 секунду
  }
})();

// Объяснение
// 1. Определение асинхронного генератора:
// - В функции `asyncNumberGenerator` мы используем `async function*`, чтобы создать асинхронный генератор.
// - С помощью цикла `for` мы генерируем числа от 1 до 5.
// - `await new Promise(...)` имитирует асинхронную задержку (например, задержка запроса к серверу) в 1 секунду.
// 2. Генерация значений:
// - Оператор `yield` возвращает текущее значение `i`, что позволяет функции приостановиться и вернуться к вызову, когда данные будут запрашиваться.
// 3. Итерация с `for await...of`:
// - В анонимной функции мы используем `for await...of` для итерирования по возвращаемым значениям асинхронного генератора, что п
// озволяет обрабатывать значения по мере их генерации. В данном случае на экран выводятся числа от 1 до 5 с задержкой в одну секунду.



// Пример с асинхронным запросом данных
// Рассмотрим более сложный пример, где мы используем `async function*` для получения данных от API:
// Функция для получения данных из API
async function* fetchData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();

  let result;
  while (!(result = await reader.read()).done) {
    const chunk = new TextDecoder().decode(result.value); // Декодируем байты
    yield chunk; // Возвращаем кусок данных
  }
}

// Используем асинхронный генератор
(async () => {
  const url = "https://api.example.com/data"; // Замените на фактический URL
  for await (const dataChunk of fetchData(url)) {
    console.log(dataChunk); // Обрабатываем каждый кусок данных
  }
})();

// Объяснение
// 1. fetchData:
// - Эта асинхронная функция использует `fetch` для получения данных и читает их построчно.
// - Мы используем поток данных через `ReadableStreamDefaultReader`, чтобы считывать данные в формате chunks (кусков).
// 2. Декодирование данных:
// - `TextDecoder` используется для преобразования данных из формата `Uint8Array` в строку.
// 3. Асинхронная итерация:
// - Мы продолжаем обрабатывать данные до тех пор, пока `done` не станет `true`. Каждую порцию данных мы получаем и обрабатываем в цикле.
