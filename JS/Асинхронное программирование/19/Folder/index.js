// Пример `setTimeout`:

console.log("Start");

setTimeout(() => {
  console.log("Timeout after 2000ms");
}, 2000);

console.log("End");

// Порядок выполнения:
// 1. `console.log('Start');` — выводит `Start`.
// 2. `setTimeout` устанавливает таймер на 2000 мс и добавляет функцию в очередь событий. В этот момент контрол возвращается к основному стеку.
// 3. `console.log('End');` — выводит `End`.
// 4. Через 2000 мс функция из очереди событий выполняется, и выводится `Timeout after 2000ms`.

// Вывод:
// Start
// End
// Timeout after 2000ms

// Пример `setInterval`:

console.log("Start");

let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(`Interval called ${count} time(s)`);

  if (count === 5) {
    clearInterval(intervalId); // Остановка интервала после 5 раз
  }
}, 1000);

console.log("End");

// Порядок выполнения:
// 1. `console.log('Start');` — выводит `Start`.
// 2. `setInterval` устанавливает интервал в 1000 мс и добавляет функцию в очередь событий, которая будет вызываться каждые 1000 мс.
// 3. `console.log('End');` — выводит `End`.
// 4. Каждые 1000 мс функция из очереди событий выполняется, и выводится сообщение о количестве вызовов.
// 5. Когда количество вызовов reaches 5, вызывается `clearInterval` для остановки интервала.

// Ожидаемый вывод:
// Start
// End
// Interval called 1 time(s)
// Interval called 2 time(s)
// Interval called 3 time(s)
// Interval called 4 time(s)
// Interval called 5 time(s)
