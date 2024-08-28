const person = {
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log("Hello, " + this.name); // "this" ссылается на объект "person"
        }, 1000);
    }
};

person.greet(); // Вывод: Hello, Alice