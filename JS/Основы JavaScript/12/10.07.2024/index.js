
let arr = ["item1", "item2"];
arr.pop("item2")
console.log(arr)


let arr2 = ["item1", "item2"];
arr2.shift("item1")
console.log(arr2)

//@Уточнение(15.07.2024)
//Важно понимать, что эти методы не просто извлекают элемент из массива.
//Они извлекают элемент и возвращают его, после работы функции
let arr3 = ["item1", "item2"];
let gettedElem = arr3.pop(); //Переменной gettedElem будет присвоено значение "item2"
console.log(gettedElem);