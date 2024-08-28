function createCounter() {
    let count = 0; // локальная переменная
    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // вывод: 1
console.log(counter()); // вывод: 2