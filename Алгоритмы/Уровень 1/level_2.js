// ===== (1)Дано число. Выведите в консоль первую цифру этого числа.===== \\
const a = 54949165;
const b = a.toString();
console.log(b[0]);

// ===== (2)Дано число. Выведите в консоль последнюю цифру этого числа.===== \\
const aa = 54949165;
const bb = aa.toString();
console.log(bb[bb.length - 1]);

// ===== (3)Дано число. Выведите в консоль сумму первой и последней цифры этого числа.===== \\
const num = 1515151;
function summ(num) {
  num = "" + num;
  return +num[0] + +num[num.length - 1];
}
console.log(summ(num));


// ===== (4)Дано число. Выведите количество цифр в этом числе.===== \\
const a1 = 2656656;
const b2 = a1.toString().length;
console.log(b2);


// ===== (5)Даны два числа. Проверьте, что первые цифры этих чисел совпадают.===== \\
let x = String (784515);
let y = String (65487);
if (x[0] == y [0]) {
  massage = "числа совпадают";
} else if(x, y) {
  massage = "числа не совпадают";
}
console.log(massage);