function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunc();

console.log(generator.next()); // Вывод: { value: 1, done: false }
console.log(generator.next()); // Вывод: { value: 2, done: false }
console.log(generator.next()); // Вывод: { value: 3, done: false }
console.log(generator.next()); // Вывод: { value: undefined, done: true }