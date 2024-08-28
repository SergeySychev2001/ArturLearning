function firstFunction() {
  return new Promise((resolve, reject) => {
    // Здесь может произойти ошибка
    const success = true; // Допустим, это результат какого-то вычисления
    if (success) {
      resolve("Первый успех!");
    } else {
      reject("Ошибка в первой функции.");
    }
  });
}

function secondFunction(data) {
  return new Promise((resolve, reject) => {
    // Здесь может произойти ошибка
    const success = false; // Допустим, это результат какого-то вычисления
    if (success) {
      resolve(data + " Продолжение...");
    } else {
      reject("Ошибка во второй функции.");
    }
  });
}

firstFunction()
  .then((result) => {
    console.log(result);
    return secondFunction(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
