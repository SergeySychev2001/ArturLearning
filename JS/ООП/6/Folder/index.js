// 6. Как создать объект в JavaScript?
// Есть несколько способов создать объект в JavaScript:
// - С помощью литерала объекта:

const obj1 = { key: "value" };

// - С помощью конструктора:

function MyObject() {
  this.key = "value";
}
const obj2 = new MyObject();

// - С помощью `Object.create()`:

const proto = { key: "value" };
const obj = Object.create(proto);
