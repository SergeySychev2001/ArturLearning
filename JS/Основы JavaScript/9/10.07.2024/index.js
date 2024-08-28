console.log(false == false); // true
console.log(false == null); // false
console.log(false == undefined); // false
console.log(false == 0); // true
console.log(false == NaN); // false
console.log(false == ''); // true

//@Уточнение(15.07.2024)
//Проверять переменную на falsy значение лучше так:
const variable = undefined;
//Просто передавай в класс Boolean
console.log(Boolean(variable))