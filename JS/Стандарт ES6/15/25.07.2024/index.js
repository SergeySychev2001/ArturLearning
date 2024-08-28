class Test {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} - собака`);
    }
}

// Создаем экземпляр класса Animal
const dog = new Test('Dog');
dog.speak();