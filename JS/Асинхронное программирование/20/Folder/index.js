// Пример `clearTimeout`:**

console.log("Start");

const timeoutId = setTimeout(() => {
  console.log("This will not be printed");
}, 2000);

// Отмена таймера до его исполнения
clearTimeout(timeoutId);

console.log("End");

// Порядок выполнения:
// 1. `console.log('Start');` — выводит `Start`.
// 2. Создается таймер с помощью `setTimeout`, который должен был вызывать функцию через 2000 мс.
// 3. `clearTimeout(timeoutId);` отменяет таймер, так что функция не будет выполнена.
// 4. `console.log('End');` — выводит `End`.

// Ожидаемый вывод:
// Start
// End

//Пример `clearInterval`:**

console.log("Start");

let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(`Interval called ${count} time(s)`);

  // Остановка интервала после 3-х вызовов
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);

console.log("End");

// Порядок выполнения:
// 1. `console.log('Start');` — выводит `Start`.
// 2. Создается интервал с помощью `setInterval`, который вызывается каждые 1000 мс.
// 3. `console.log('End');` — выводит `End`.
// 4. По истечении времени интервал начинает выполнять функцию, которая увеличивает счётчик и выводит количество вызовов в консоль.
// 5. Когда счётчик достигает 3, вызывается `clearInterval(intervalId);`, который останавливает дальнейшие вызовы интервала.

// Ожидаемый вывод:
// Start
// End
// Interval called 1 time(s)
// Interval called 2 time(s)
// Interval called 3 time(s)
