//1. Динамический import

// Создадим два модуля: `math.js` и `main.js`.
// math.js:

// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//main.js:

// main.js
async function loadMathModule() {
  try {
    const math = await import("./math.js"); // Асинхронная загрузка модуля
    console.log("Модуль math загружен");

    console.log("5 + 3 =", math.add(5, 3));
    console.log("5 - 3 =", math.subtract(5, 3));
  } catch (error) {
    console.error("Ошибка при загрузке модуля:", error);
  }
}

loadMathModule();
// Объяснение:
// 1. Асинхронная функция: Мы определяем функцию `loadMathModule()`, которая является асинхронной.
// 2. Динамический import: Используем `await import('./math.js')`, чтобы загрузить модуль `math.js`, когда это необходимо.
// 3. Работа с загруженным модулем: После успешной загрузки nous можем использовать функции `add` и `subtract`, которые экспортированы из `math.js`.
