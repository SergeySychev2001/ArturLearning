import('./myModule.js')
  .then((module) => {
    module.default(); // вызов функции по умолчанию
  });