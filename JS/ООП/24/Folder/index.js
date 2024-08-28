function greet() {
  console.log(this.name);
}
const obj = { name: "Alice" };
greet.call(obj);
