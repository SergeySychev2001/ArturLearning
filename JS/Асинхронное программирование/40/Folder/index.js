// 1. `Promise.allSettled`
const promise11 = Promise.resolve("Результат 1"); // Успешно выполняется
const promise21 = Promise.reject("Ошибка 2"); // Отклонён
const promise31 = Promise.resolve("Результат 3"); // Успешно выполняется

Promise.allSettled([promise11, promise21, promise31]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Промис ${index + 1} выполнен: ${result.value}`);
    } else {
      console.log(`Промис ${index + 1} отклонён: ${result.reason}`);
    }
  });
});

// Объяснение:
// - В этом примере мы создаём три промиса: два из них выполнены успешно, а один отклонён.
// - `Promise.allSettled` ждёт завершения всех промисов и выводит результаты, включая информацию о статусе и причине отклонения для каждого из них.

// 2. `Promise.any`
const promise1 = Promise.reject("Ошибка 1"); // Отклонён
const promise2 = Promise.reject("Ошибка 2"); // Отклонён
const promise3 = Promise.resolve("Результат 3"); // Успешно выполняется

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(`Первый успешно выполненный промис: ${result}`);
  })
  .catch((error) => {
    console.log(`Все промисы отклонены: ${error}`);
  });

// Объяснение:
// - В этом примере два промиса отклонены, а один успешно выполнен.
// - `Promise.any` вернёт результат успешно выполненного промиса (в данном случае `promise3`), а если
// бы все промисы были отклонены, он бы сработал с ошибкой.
