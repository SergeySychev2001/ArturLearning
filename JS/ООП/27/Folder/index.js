class Car {
  constructor(model) {
    this.model = model;
  }
}

class CarFactory {
  createCar(model) {
    return new Car(model);
  }
}

const factory = new CarFactory();
const myCar = factory.createCar("Tesla Model S");
