const myPromise = new Promise((resolve, reject) => {
  // Асинхронная операция, например, запрос к API
  setTimeout(() => {
    const success = true; // Предположим, что операция успешна
    if (success) {
      resolve("Успех!");
    } else {
      reject("Ошибка!");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // "Успех!"
  })
  .catch((error) => {
    console.error(error); // "Ошибка!"
  });

//   Пример использования `async/await`:

const myAsyncFunction = async () => {
  try {
    const result = await myPromise; // Ждем выполнения myPromise
    console.log(result); // "Успех!"
  } catch (error) {
    console.error(error); // Обработка ошибки
  }
};

myAsyncFunction();

// Связь
// - async/await построены на основе Promises. Когда вы используете `await`, вы
// фактически ждете, пока Promise выполнится и вернет результат.
// - С помощью async/await` код становится более линейным и понятным, особенно когда нужно
// использовать несколько асинхронных операций последовательно.
