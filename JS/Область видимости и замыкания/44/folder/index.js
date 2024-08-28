let count = 0; // глобальная переменная
if (true) {
    let count = 1; // блочная область видимости
    console.log(count); // вывод: 1
}
console.log(count); // вывод: 0