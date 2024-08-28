// 1. then()
const myPromise = new Promise((resolve, reject) => {
  // Имитация асинхронной операции
  const success = true;

  if (success) {
    resolve("Успех!");
  } else {
    reject("Ошибка!");
  }
});

// Использование then
myPromise
  .then((result) => {
    console.log(result); // Выведет "Успех!"
  })
  .catch((error) => {
    console.error(error); // Обработает ошибку, если она произойдет
  });

// 2. catch()
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // Если предыдущий promise был отклонен
  });
// 3. finally()
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Операция завершена."); // Выполнил независимо от результата
  });
