const person = {
  name: "Артур",
  age: 23,
  greet: function () {
    console.log(
      `Привет, моё имя ${this.name} и мне ${this.age} года.`
    );
  },
};

person.greet();
