function createCounter() {
  let count = 0; // Приватная переменная

  return {
    increment: function () {
      count++; // Увеличиваем счетчик
      return count;
    },
    decrement: function () {
      count--; // Уменьшаем счетчик
      return count;
    },
    getCount: function () {
      return count; // Возвращаем текущее значение счетчика
    },
  };
}

const counter = createCounter(); // Создаем экземпляр счетчика

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// Прямой доступ к приватной переменной 'count' невозможен
console.log(counter.count); // undefined

// В этом примере:
// 1. `createCounter` — это функция, которая создает и возвращает объект с методами `increment`, `decrement` и `getCount`.
// 2. Приватная переменная `count` доступна только внутри функции `createCounter` и не может быть изменена напрямую извне.
// 3. Методы, которые возвращает `createCounter`, могут изменять и получать доступ к `count` благодаря замыканию.