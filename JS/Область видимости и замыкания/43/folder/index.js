function* generator() {
    yield 1;
    yield 2;
}

const gen = generator();
console.log(gen.next().value); // вывод: 1
console.log(gen.next().value); // вывод: 2