//Давайте создадим простой асинхронный итератор, который будет генерировать числа с заданным интервалом:

async function* asyncNumberGenerator() {
  for (let i = 1; i <= 5; i++) {
    // Имитируем асинхронную операцию
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  for await (const number of asyncNumberGenerator()) {
    console.log(number); // Выведет числа от 1 до 5 с интервалом в 1 секунду
  }
})();

// В этом примере `asyncNumberGenerator` — это асинхронный генератор, который генерирует числа от 1 до 5 с интервалом в 1 секунду.

// 2: Использование асинхронных итераторов с Fetch API
// Теперь давайте рассмотрим, как можно использовать асинхронные итераторы для обработки потоковых данных с использованием Fetch API.
// Предположим, что у нас есть API, который возвращает данные в виде потока:

async function fetchStream(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();

  // Создаем асинхронный итератор
  return {
    async next() {
      const { done, value } = await reader.read();
      return { done, value: value ? new TextDecoder().decode(value) : null };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

(async () => {
  const url = "http://example.com/stream"; // Замените на фактический URL
  const streamIterator = fetchStream(url);

  for await (const chunk of streamIterator) {
    if (chunk) {
      console.log(chunk); // Обработка данных
    }
  }
})();

// В этом примере мы создаем асинхронный итератор для получения данных из потока. При каждом вызове метода `next()` мы читаем следующую
// порцию данных из тела ответа. Каждый раз, когда есть доступные данные, мы их обрабатываем.

// Объяснение
// 1. Асинхронная функция: Обратите внимание, что мы используем `async function*` для создания асинхронного генератора, который
// позволяет нам использовать `yield` для генерирования значений.
// 2. Чтение данных: В примере с Fetch API мы используем `ReadableStreamDefaultReader`, чтобы читать данные из потока. Метод `read()`
// возвращает объект с двумя свойствами: `done`, которое указывает, достигнут ли конец потока, и `value`, которое содержит прочитанные данные.
// 3. Итерация с помощью `for await...of`: Мы используем конструкцию `for await...of`, чтобы пройтись по значениям, которые возвращаются
// итератором, что позволяет нам обрабатывать данные по мере их поступления асинхронно.
