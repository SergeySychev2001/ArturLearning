console.log(myVar); 
var myVar = 5;
console.log(myVar); 
// переменная myVar используется до её объявления, JavaScript интерпретирует это так, как будто объявление переменной var myVar; 
// было перемещено в начало области видимости. Поэтому первый console.log выводит undefined, а не приводит к ошибке.

console.log(myLetVar);//ReferenceError
let myLetVar = 3;
const myConstVar = 3;
// Такие переменные тоже поднимаются, но они не инициализируются и доступ к ним до их объявления приведет к ошибке ReferenceError.