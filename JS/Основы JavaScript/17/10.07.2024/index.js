// Объявление функции (Function Declaration):
function greet(name) {
  return `Привет, ${name}!`;
}
console.log(greet("Alex"));
// Функциональное выражение (Function Expression):
const sayGoodbye = function (name) {
  return `До свидания, ${name}!`;
};
console.log(sayGoodbye("Alex"));
// Стрелочные функции (Arrow Functions):
const addNumbers = (a, b) => a + b;
console.log(addNumbers(4, 4));
// Конструктор Function:
let myFunction = new Function('console.log("This is a function created with the Function constructor")');

// Методы объекта:
let obj = {
  method1: function () {
    console.log("This is a method");
  },
  method2: () => {
    console.log("This is an arrow function method");
  },
};
// Генераторные функции (Generator Functions)
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let gen = generateSequence();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//@Вопрос(15.07.2024)
//Ты точно понимаешь разницу между объявлениями функций? Все эти объявление это не одно и то же.
//@ Ответ(15.07.2024)
//*Объявление функции создается с помощью ключевого слова function и имеет имя
//*Функциональное выражение создается путем присваивания функции переменной. 
//*Стрелочные функции - это более краткий синтаксис для написания функций. 
//*Конструктор Function создаёт новый объект Function. Вызов конструктора напрямую позволяет создавать функции программным путём, однако такой способ представляет угрозу для безопасности
//*Методы объекта - это функции, которые являются свойствами объекта.
//*Генераторные функции позволяют приостанавливать и возобновлять выполнение функции