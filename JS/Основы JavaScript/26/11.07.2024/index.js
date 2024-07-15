console.log(person.name); // Точечная нотация
console.log(person['age']); // Квадратные скобки

//@Уточнение
//Если в объекте будет специфическое наименование поля, то нужно получать это поле при помощи квад. скобок
const obj = new Object({});
obj["_test-field"] = 2
console.log(obj._test-field);//Так не получится
console.log(obj['_test-field']);//Так получится