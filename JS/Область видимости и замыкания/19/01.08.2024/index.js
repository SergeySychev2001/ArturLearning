// 1. IIFE (Immediately Invoked Function Expression):

(function () {
  var localVar = "Я локальная переменная";
  console.log(localVar);
})();
console.log(localVar);
// 2. Модули (ES6 модули):

// module.js
export const myVar = "Моя переменная";

// main.js
import { myVar } from "./module.js";
console.log(myVar);
// 3. Объекты как пространства имен:

var MyNamespace = {
  myVar: "Моя переменная",
  myFunction: function () {
    console.log(this.myVar);
  },
};
MyNamespace.myFunction();
// 4. Использование let и const:
if (true) {
  let blockScopedVar = "Я блочно-скопированная переменная";
  console.log(blockScopedVar);
}
console.log(blockScopedVar);
// 5. Создание модуля с помощью функций:
function createModule() {
  var privateVar = "Я приватная переменная";

  return {
    getPrivateVar: function () {
      return privateVar;
    },
  };
}

var myModule = createModule();
console.log(myModule.getPrivateVar());
// 6. Классы:
class MyClass {
  constructor() {
    this.instanceVar = "Я экземплярная переменная";
  }
  instanceMethod() {
    console.log(this.instanceVar);
  }
}

const myInstance = new MyClass();
myInstance.instanceMethod();
