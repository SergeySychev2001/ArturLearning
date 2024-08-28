class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const p = new Person('Bob');
p.greet(); // вывод: 'Hello, Bob!'