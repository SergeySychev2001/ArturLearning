class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // вызов метода родителя
    console.log("Dog barks");
  }
}
const dog = new Dog();
dog.speak();
// Animal speaks
// Dog barks
