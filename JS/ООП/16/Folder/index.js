// 6. Какие есть способы создания объектов без использования классов?
// 1. Литералы объектов:

const obj1 = { key: "value" };

// 2. `Object.create()`:

const proto = {
  greet() {
    console.log("Hello");
  },
};
const obj = Object.create(proto);
