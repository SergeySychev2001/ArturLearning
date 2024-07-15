let num = 0;
let str = "0";

console.log(num == str)
// в данном случае перед сравнением оператор равенства приводит обе величины к общему типу. и в консоль выведется значение true

let a = 0;
let b = "0";
console.log(a === b)
// в данном случае операттор строго сравнениея выведет false. Потому что переменные имеют разный тип. 



console.log(Object.is(25, 25)); // true одинаковымчисловым значением
console.log(Object.is("foo", "foo")); // true
console.log(Object.is("foo", "bar")); // false
console.log(Object.is(undefined, undefined));// true оба undefined