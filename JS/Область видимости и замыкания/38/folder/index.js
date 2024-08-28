const createAdder = (x) => (y) => x + y;
const add5 = createAdder(5);
console.log(add5(3)); // вывод: 8