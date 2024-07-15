var person = {
  name: "Алексей",
  greet: function () {
    console.log("Привет, " + this.name + "!");
  },
};
person.greet(); // Выведет: Привет, Алексей!
