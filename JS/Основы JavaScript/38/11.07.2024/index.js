let promise = new Promise((resolve, reject) => {
  // Асинхронная операция
  if (успех) {
    resolve('Успех');
  } else {
    reject('Ошибка');
  }
});