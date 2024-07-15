function makeCounter() {
  let count = 0;

  return function() {
      count++;
      return count;
  };
}

const counter = makeCounter();

console.log(counter());

//@Проблема
//В этом примере есть что-то про область видимости переменной, но ты не показал это в примере. Распиши конкретнее.
