function test(name) {
  this.name = name;
}
test.prototype.greet = function () {
  console.log("Привет, " + this.name + "!");
};
var alex = new Person("Алексей");
alex.greet(); // Выведет: Привет, Алексей!
