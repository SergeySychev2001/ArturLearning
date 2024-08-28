function Person() {}
Person.prototype.greet = function() {
  console.log('Hello');
};
const person = new Person();
person.greet(); // Hello