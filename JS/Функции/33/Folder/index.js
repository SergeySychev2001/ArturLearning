function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`Привет, ${this.name}!`);
    };
}

const alice = new Person("Алиса");
alice.greet();