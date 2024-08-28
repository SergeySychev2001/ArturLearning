function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Вывод: 1
console.log(counter()); // Вывод: 2