// 1. Использование логических операторов в условиях `if`
let a = 10;
let b = 20;
let c = 30;

// Используем логическое И
if (a < b && b < c) {
  console.log("b находится между a и c");
}

// Используем логическое ИЛИ
if (a < 5 || b > 15) {
  console.log("Либо a меньше 5, либо b больше 15");
}
// 2. Логическое НЕ для инвертирования условий
let test = false;

if (!test) {
  console.log("Сегодня не идет дожд");
}
// 3. Вложенные условия
let age = 25;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("Вы можете войти на мероприятие.");
  } else {
    console.log("Вам нужен билет для входа.");
  }
} else {
  console.log("Вы слишком молоды для входа.");
}
// 4. Использование логических операторов в тернарном операторе
let score = 85;
let result = (score >= 60) ? "Сдан" : "Не сдан";
console.log(result);
// 5. Пример использования с функциями
function checkAccess(age, hasPermission) {
    if (age >= 18 && hasPermission) {
        console.log("Доступ разрешен.");
    } else {
        console.log("Доступ запрещен.");
    }
}

checkAccess(20, true);  
checkAccess(16, true);  
checkAccess(20, false);