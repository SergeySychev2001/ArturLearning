// Пример использования асинхронного генератора
// Рассмотрим пример, в котором асинхронный генератор получает данные с некоторой задержкой и передает их обратно:

// Асинхронный генератор для получения данных
async function* asyncDataGenerator() {
  const data = [1, 2, 3, 4, 5]; // Пример данных
  for (const item of data) {
    // Имитация асинхронной задержки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield item; // Возвращаем значение
  }
}

// Функция для потребления данных из асинхронного генератора
async function consumeAsyncGenerator() {
  const asyncIterable = asyncDataGenerator();
  for await (const value of asyncIterable) {
    console.log(value); // Обработка каждого полученного значения
  }
}

// Запуск потребителя
consumeAsyncGenerator();

//  Объяснение:
// 1. asyncDataGenerator():
// - Это асинхронный генератор, который последовательно возвращает числа от 1 до 5, делая паузу в 1 секунду между каждым значением.
// - Мы используем `yield` для отправки каждого элемента.
// 2. consumeAsyncGenerator():
// - Эта функция итерируется по асинхронному генератору с помощью цикла `for await...of`.
// - Внутри цикла мы можем обрабатывать каждое значение по мере его поступления.

// Применение
// Асинхронные генераторы особенно полезны в следующих сценариях:
// - Работа с потоками данных: Обработка данных, поступающих из API или сокетов.
// - Параллельные запросы: Выполнение нескольких асинхронных запросов к серверу и обработка ответов по мере получения.
// -Событийная обработка: Обработка событий, которые могут возникать в любое время (например, события пользовательского интерфейса).
