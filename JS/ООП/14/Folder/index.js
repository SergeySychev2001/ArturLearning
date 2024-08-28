class Animal {
  speak() {
    console.log("Животные");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Собака");
  }
}
const dog = new Dog();

const animal = new Animal()
animal.speak()
dog.speak();
