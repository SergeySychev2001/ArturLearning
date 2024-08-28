// 1. Итерация по массиву
const array = [1, 2, 3, 4, 5];

for (const num of array) {
    console.log(num); // Вывод: 1, 2, 3, 4, 5
}

// 2. Итерация по строке
const string = "Hello";

for (const char of string) {
    console.log(char); // Вывод: H, e, l, l, o
}
// 3. Итерация по множеству (Set)
const set = new Set([1, 2, 3]);

for (const value of set) {
    console.log(value); // Вывод: 1, 2, 3
}
// 4. Итерация по объекту Map
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
]);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // Вывод: key1: value1, key2: value2
}