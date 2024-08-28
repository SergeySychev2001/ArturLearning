// 1.Mетоды массивов:
// forEach()
const arr = [1, 2, 3];
arr.forEach((element) => {
  console.log(element);
});
// map()
const arr1 = [1, 2, 3];
const doubled = arr1.map((element) => element * 2);
console.log(doubled); // [2, 4, 6]
// filter()
const arr2 = [1, 2, 3, 4, 5];
const even = arr2.filter((element) => element % 2 === 0);
console.log(even); // [2, 4]

// reduce()
const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, element) => acc + element, 0);
console.log(sum);
// 2. Итераторы и генераторы:
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
for (const value of gen) {
  console.log(value); // 1, затем 2, затем 3
}
// 3. Функции высшего порядка:
const arr4 = [1, 2, 3];
const result = arr4.reduce((acc, curr) => acc.concat(curr), []);
console.log(result);
// 4. Рекурсия:
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
