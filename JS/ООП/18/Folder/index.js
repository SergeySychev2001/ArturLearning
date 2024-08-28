const mixin = {
  greet() {
    console.log("Hello");
  },
};

const obj = Object.assign({}, mixin);
obj.greet(); // Hello
