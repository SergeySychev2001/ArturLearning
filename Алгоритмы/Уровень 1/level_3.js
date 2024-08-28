// ===== (1)Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.===== \\
let str = 'Hello World';
let strLast = str.length -2;
console.log(str[strLast]);


// ===== (2)Даны два целых числа. Проверьте, что первое число без остатка делится на второе.===== \\
let a1 = 20;
let b2 = 3;
let res = b2 % a1;
console.log(res)

let a = 10;
let b = 2;
if  (a % b === 0 ) {
	massage = 'делится нацело';
} else {
	massage = 'делится с остатком ' + a % b;
}
console.log(massage);