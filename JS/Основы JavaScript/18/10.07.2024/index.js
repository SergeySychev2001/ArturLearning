var globalVar = "Я доступна везде";

function myFunction() {
  var localVar = "Я доступна только внутри функции myFunction";


  for (let i = 0; i < 3; i++) {}
}

console.log(globalVar);
console.log(localVar);

//@Уточнение
//Вообще не используй никогда var. Это устаревший способ задания переменной. Используй let или const