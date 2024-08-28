class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Test extends Animal {
    speak() {
        console.log(`${this.name} - собака`);
    }
}

// Создаем экземпляр класса Dog
const dogInstance = new Dog('Dog');
dogInstance.speak(); // Вывод: Dog barks.

// Создаем экземпляр класса Test
const testInstance = new Test('Tested Dog');
testInstance.speak(); // Вывод: Tested Dog - собака