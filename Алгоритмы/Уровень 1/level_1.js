// ===== (1) Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль. ===== \\
let num = 1;
if (num < 0) {
  massege = "число отрицательное";
} else if (num > 0) {
  massege = "число положительное";
} else if (num === 0) {
  massege = "число равно 0";
}
console.log(massege);
// ===== (2) Дана строка. Выведите в консоль длину этой строки..=====
let str = "Hello World!";
strLenght = str.length;
console.log(strLenght);
// ===== (3) Дана строка. Выведите в консоль последний символ строки.=====
let str2 = "Hello World!";
strLast = str2.length - 1;
console.log(str2[strLast]);
// ===== (4) Дано число. Проверьте, четное оно или нет.=====
let number = 53;
if (number % 2 === 0) {
  massage = "число четное";
} else if (number) {
  massage = "число не четное";
}
console.log(massage);
// ===== (5) Даны два слова. Проверьте, что первые буквы этих слов совпадают.=====
let word1 = "Тест";
let word2 = "текст";
function test() {
  if (word1.charAt(0).toLowerCase() === word2.charAt(0).toLowerCase()) {
    return "буквы совпадают";
  } else {
    return "буквы не совпадают";
  }
}
console.log(test(word1, word2));
// ===== (6) Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.=====
function strLastes(word) {
  if (word.endsWith("ь")) {
    return word.charAt(word.length - 2);
  } else {
    return word.charAt(word.length - 1);
  }
}

console.log(strLastes("тесть"));
