// Чистая функция
function add(a, b) {
    return a + b; // Возвращает сумму двух чисел
}

console.log(add(2, 3)); 
console.log(add(2, 3))
//одинаковый результат для одинаковых аргументов


// Нечистая функция
let counter = 0;
function increment() {
    counter++; // Изменяет внешнее состояние
    return counter;
}

console.log(increment());
console.log(increment());
//разный результат при каждом вызове