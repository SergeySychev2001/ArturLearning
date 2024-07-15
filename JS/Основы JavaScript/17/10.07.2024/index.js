// Объявление функции (Function Declaration):
function greet(name) {
  return `Привет, ${name}!`;
}
console.log(greet("Alex"))
// Функциональное выражение (Function Expression):
const sayGoodbye = function(name) {
  return `До свидания, ${name}!`;
};
console.log(sayGoodbye("Alex"))
// Стрелочные функции (Arrow Functions):
const addNumbers = (a, b) => a + b;
console.log(addNumbers(4,4))
// Конструктор Function:
const sum = new Function('a', 'b', 'return a + b');
// Методы объекта:
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply(a, b) { // Сокращённый синтаксис ES6
    return a * b;
  }
};
// Генераторные функции (Generator Functions)
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

//@Вопрос
//Ты точно понимаешь разницу между объявлениями функций? Все эти объявление это не одно и то же.