// =====Цикл for===== \\
let num = [];
for (let i = 0; i < 9; i++) {
  num = num + i;
}
console.log(num);
// =====do...while===== \\
let result = "";
let i = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);

// =====while===== \\
let number = 0;
while (number <= 3) {
  console.log(number);
  number++;
}

// =====break===== \\
let numbers = 0;
while (numbers < 6) {
  if (numbers === 3) {
    break;
  }
  numbers = numbers + 1;
}
console.log(numbers);
// =====continue===== \\
let some = 0; // Изначально ноль
while (some < 10) {
  // Работает пока меньше 10
  some++; // В каждой итерации увеличиваем на 1
  if (some % 2 == 0)
    // Если четное, то пропускаем число
    continue; // Выход из цикла
  console.log(some); // Вывод в консоль
}
// =====for...in===== \\
var menu = {
  width: 300,
  height: 200,
  title: "Menu",
};
var counter = 0;
for (var key in menu) {
  counter++;
}
console.log("Всего свойств: " + counter);
var menu = {
  width: 300,
  height: 200,
  title: "Menu",
};
for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение
  console.log("Ключ: " + key + " значение: " + menu[key]);
}
// =====for...of===== \\
let test = [10, 20, 30];
for (let value of test) {
  value += 1;
  console.log(value);
}