function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Вывод: 1
console.log(counter.getCount()); // Вывод: 1