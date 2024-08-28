const myPromise = new Promise((resolve, reject) => {
  // Асинхронная операция
  const success = true; // например, результат какой-то операции

  if (success) {
    resolve("Успех!"); // Если операция успешна
  } else {
    reject("Ошибка!"); // Если произошла ошибка
  }
});

// Использование Promise
// Для работы с созданным `Promise` используются методы `.then()`, `.catch()`, и `.finally()`:

myPromise
  .then((result) => {
    console.log(result); // Обработчик успешного завершения
  })
  .catch((error) => {
    console.error(error); // Обработчик ошибки
  })
  .finally(() => {
    console.log("Завершение операции"); // Выполняется в любом случае
  });

// Пример с асинхронной операцией
// Вот простой пример, использующий `setTimeout` для имитации асинхронной операции:

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" }; // Пример данных
      // Допустим, операция успешна
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log("Данные получены:", data);
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });
