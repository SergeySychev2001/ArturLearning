const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Дубликат, не будет добавлен
console.log(mySet);
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set({}, 3); // Можно использовать объект в качестве ключа
console.log(myMap.get('a'));