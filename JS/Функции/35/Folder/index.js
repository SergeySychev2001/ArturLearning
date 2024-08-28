const Module = (function () {
  let privateVariable = "Я приватная переменная";

  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod() {
      privateMethod();
    },
  };
})();

Module.publicMethod(); // Вывод: Я приватная переменная
