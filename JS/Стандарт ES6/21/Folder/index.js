function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3