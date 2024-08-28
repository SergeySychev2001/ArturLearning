function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());

//@Проблема
//В этом примере есть что-то про область видимости переменной, но ты не показал это в примере. Распиши конкретнее.
//@Ответ (16.07.2024)
function init() {
  var name = "Test";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();
// name - локальная переменная, созданная в init
// displayName() - внутренняя функция, замыкание
// displayName() использует переменную, объявленную в родительской функции
