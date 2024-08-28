class Person {
    #privateField;
    constructor(name) {
      this.name = name;
      this.#privateField = 'I am private';
    }
    #privateMethod() {
      console.log(this.#privateField);
    }
  }