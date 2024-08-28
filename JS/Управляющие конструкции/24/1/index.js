// 1. && (логическое "И"):
let a = false;
let b = true;
let result = a && (b = false); // b не будет изменено
console.log(result); // false
console.log(b); // true
//2. || (логическое "ИЛИ"):
let c = true;
let d = false;
let result2 = c || (d = true); // b не будет изменено
console.log(result2); // true
console.log(d); // false