function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

function greet(name = "world") {
  console.log(`Hello, ${name}`);
}

greet();
greet("JavaScript");
