// 1. Логические операторы:
let a = 5;
let b = 10;

if (a > 0 && b > 0) {
    console.log("Оба числа положительные");
}
// 2. Цепочка условий `if-else if-else`:
let x = 20;

if (x < 10) {
    console.log("x меньше 10");
} else if (x < 30) {
    console.log("x между 10 и 30");
} else {
    console.log("x больше или равно 30");
}
// 3. Массивы и циклы:
let values = [5, 15, 25];

for (let value of values) {
    if (value < 10) {
        console.log(value + " меньше 10");
    } else if (value < 20) {
        console.log(value + " между 10 и 20");
    } else {
        console.log(value + " больше или равно 20");
    }
}
// 4. Словари (или объекты) для сопоставления условий:
function actionForCondition(condition) {
    const actions = {
        case1: "Это случай 1",
        case2: "Это случай 2",
        case3: "Это случай 3",
    };
    return actions[condition] || "Неизвестный случай";
}

console.log(actionForCondition('case1'));
// 5. Использование функций:
function isPositive(x) {
    return c > 0;
}

function isEven(x) {
    return c % 2 === 0;
}

let c = 10;

if (isPositive(c) && isEven(c)) {
    console.log("x положительное и четное");
}
// 6. Оператор `switch`:
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Это банан");
        break;
    case "apple":
        console.log("Это яблоко");
        break;
    case "orange":
        console.log("Это апельсин");
        break;
    default:
        console.log("Неизвестный фрукт");
}