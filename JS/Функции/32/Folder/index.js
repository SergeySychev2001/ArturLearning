function greet() {
    console.log(`Привет, ${this.name}!`);
}

const user = {
    name: "Иван"
};

greet.call(user); // Вывод: Привет, Иван!
greet.apply(user); // Вывод: Привет, Иван!

const greetUser = greet.bind(user);
greetUser(); // Вывод: Привет, Иван!