const myPromise = new Promise((resolve, reject) => {
  // Выполняем асинхронную операцию
  let success = false;

  if (success) {
    resolve("Операция выполнена успешно");
  } else {
    reject("Произошла ошибка");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
